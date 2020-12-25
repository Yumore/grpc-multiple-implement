package io.grpc.helloworldexample;

import android.app.Activity;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.ref.WeakReference;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.registerandlogin.LoginGrpc;
import io.grpc.registerandlogin.LoginReply;
import io.grpc.registerandlogin.LoginRequest;

/**
 * @author nathaniel
 */
public class LoginAndRegisterActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView mTitleText = findViewById(R.id.title_text);
        Button mGeneralButton = findViewById(R.id.login_btn);

        mTitleText.setText("登录");
        final EditText userName = findViewById(R.id.user_name);
        final EditText password = findViewById(R.id.user_pwd);
        mGeneralButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new LoginAndRegisterActivity.GrpcTask(LoginAndRegisterActivity.this).execute(
                        userName.getText().toString(),
                        getDeviceId(),
                        password.getText().toString());

            }
        });
    }

    private String getDeviceId() {
        return UUID.randomUUID().toString();
    }

    /**
     * AsyncTask<Params, Progress, Result>
     */
    private static class GrpcTask extends AsyncTask<String, Void, String> {
        private final WeakReference<Activity> activityReference;
        private ManagedChannel channel;

        private GrpcTask(Activity activity) {
            this.activityReference = new WeakReference<>(activity);
        }

        @Override
        protected String doInBackground(String... params) {
            String username = params[0];
            String deviceId = params[1];
            String password = params[2];
            String host = "10.10.42.24";
            int port = 50051;
            try {
                channel = ManagedChannelBuilder.forAddress(host, port).usePlaintext().build();
                LoginGrpc.LoginBlockingStub stub = LoginGrpc.newBlockingStub(channel);
                LoginRequest request = LoginRequest.newBuilder().setUserName(username)
                        .setUserPwd(password)
                        .setDeviceId(deviceId)
                        .build();
                LoginReply reply = stub.login(request);
                return reply.getResultMsg();
            } catch (Exception e) {
                StringWriter sw = new StringWriter();
                PrintWriter pw = new PrintWriter(sw);
                e.printStackTrace(pw);
                pw.flush();
                return String.format("Failed... : %n%s", sw);
            }
        }

        @Override
        protected void onPostExecute(String result) {
            try {
                channel.shutdown().awaitTermination(1, TimeUnit.SECONDS);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            Activity activity = activityReference.get();
            if (activity == null) {
                return;
            }
            TextView resultText = activity.findViewById(R.id.grpc_response_text);
            resultText.setText(result);
        }
    }
}
