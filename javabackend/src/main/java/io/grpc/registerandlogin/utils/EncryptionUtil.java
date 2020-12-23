package io.grpc.registerandlogin.utils;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.math.BigInteger;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;

/**
 * 修改自PBKDF2算法，原理大致相当于在HASH算法基础上增加随机盐，并进行多次HASH迭代运算，随机盐使得彩虹表的建表难度大幅增加。
 */
public class EncryptionUtil {

    private static final String PBKDF2_ALGORITHM = "PBKDF2WithHmacSHA1";

    /**
     * 盐的长度
     */
    private static final int SALT_BYTE_SIZE = 32 / 2;

    /**
     * 密文的长度
     */
    private static final int HASH_BIT_SIZE = 16 * 4;

    /**
     * 迭代次数
     */
    private static final int PBKDF2_ITERATIONS = 1000;

    /**
     * 对输入的密码进行验证
     */
    public static boolean authenticate(String attemptedPassword, String encryptedPassword, String salt)
            throws NoSuchAlgorithmException, InvalidKeySpecException {
        String encryptedAttemptedPassword = generateEncryptedPassword(attemptedPassword, salt);
        System.out.println("--对输入的密码进行验证");
        return encryptedAttemptedPassword.equals(encryptedPassword);
    }

    /**
     * 生成密文
     *
     * @param password 明文密码
     * @param salt     盐值
     */
    public static String generateEncryptedPassword(String password, String salt) throws NoSuchAlgorithmException,
            InvalidKeySpecException {

        KeySpec spec = new PBEKeySpec(password.toCharArray(), fromHex(salt), PBKDF2_ITERATIONS, HASH_BIT_SIZE);
        SecretKeyFactory f = SecretKeyFactory.getInstance(PBKDF2_ALGORITHM);
        return toHex(f.generateSecret(spec).getEncoded());
    }

    /**
     * 通过提供加密的强随机数生成器 生成盐(Modified by LiuChang: 改成伪随机，使得同样password生成的随机数一致)
     *
     * @return 生成的salt
     */
    public static String generateSalt(String pwd) {
        if (pwd == null || pwd.length() == 0) {
            return pwd;
        }
        byte[] salt = new byte[SALT_BYTE_SIZE];
        byte[] pwdByte = pwd.getBytes();
        int i = 0;
        for (; i < pwdByte.length; i++) {
            salt[i] = pwdByte[i];
        }
        for (; i < SALT_BYTE_SIZE; i++) {
            salt[i] = 0;
        }
        return toHex(salt);
    }

    /**
     * 十六进制字符串转二进制字符串
     *
     * @param hex the hex string
     * @return the hex string decoded into a byte array
     */
    private static byte[] fromHex(String hex) {
        byte[] binary = new byte[hex.length() / 2];
        for (int i = 0; i < binary.length; i++) {
            binary[i] = (byte) Integer.parseInt(hex.substring(2 * i, 2 * i + 2), 16);
        }
        return binary;
    }

    /**
     * 二进制字符串转十六进制字符串
     *
     * @param array the byte array to convert
     * @return a length*2 character string encoding the byte array
     */
    private static String toHex(byte[] array) {
        BigInteger bi = new BigInteger(1, array);
        String hex = bi.toString(16);
        int paddingLength = (array.length * 2) - hex.length();
        if (paddingLength > 0)
            return String.format("%0" + paddingLength + "d", 0) + hex;
        else
            return hex;
    }
}