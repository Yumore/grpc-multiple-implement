package io.grpc.registerandlogin.utils;

import com.google.api.client.util.Base64;

/**
 * @author nathaniel
 */
public class Base64Encoder {
    /**
     * @param bytes bytes
     * @return byte[]
     */
    public static byte[] decode(final byte[] bytes) {
        return Base64.decodeBase64(bytes);
    }

    /**
     * 二进制数据编码为BASE64字符串
     *
     * @param bytes bytes
     * @return String
     */
    public static String encode(final byte[] bytes) {
        return new String(Base64.encodeBase64(bytes));
    }
}
