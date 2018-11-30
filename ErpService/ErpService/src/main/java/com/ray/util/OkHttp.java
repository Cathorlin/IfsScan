package com.ray.util;

import java.io.IOException;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class OkHttp {
	public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

    public static OkHttpClient client = new OkHttpClient();
    
    /*public static void main(String[] args) {
    	post("http://localhost/sys/test","{a:1,b:2,c:3}");
	}*/
    public static String post(String url, String json) throws IOException {
        RequestBody body = RequestBody.create(JSON, json);
        Request request = new Request.Builder()
          .url(url)
          .post(body)
          .build();
        Response response = client.newCall(request).execute();
        if(response.isSuccessful()) {
            return response.body().string();
        } else {
            throw new IOException("Unexpected code " + response);
        }
    }
    
    public static String get(String url) throws IOException {
        Request request = new Request.Builder().url(url).build();
        Response response = client.newCall(request).execute();
        if (response.isSuccessful()) {
            return response.body().string();
        } else {
            throw new IOException("Unexpected code " + response);
        }
    }
}
