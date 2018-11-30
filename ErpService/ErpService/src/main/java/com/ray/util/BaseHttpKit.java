package com.ray.util;

import java.util.HashMap;
import java.util.Map;

public class BaseHttpKit{
	
	public static Map<String, String> JsonHeader(){
		Map<String, String> header = new HashMap<>();
		header.put("content-type", "application/json");
		return header;
	}
}
