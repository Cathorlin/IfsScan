package com.ray.common.controller;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;

public class BaseController extends Controller {

	/**
	 * 获取用户ID
	 */
	protected Integer getSessionUserId(){
		Record user = getSessionAttr("user");
		return user.getInt("id");
	}
}
