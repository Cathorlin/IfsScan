package com.ray.util;

import java.util.UUID;

import com.jfinal.plugin.redis.Redis;

public class Commen {
	public static String getLoginTimes(){
		try {
			return Redis.use("test").getCounter("loginTimes").toString();
		} catch (Exception e) {
			return "0";
			// TODO: handle exception
		}
	}
	
	public static String getUUID() {
        String uuid = UUID.randomUUID().toString();
        return uuid.replaceAll("\\-", "");
    }
}
