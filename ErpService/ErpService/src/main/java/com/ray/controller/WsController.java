package com.ray.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.UUID;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.jfinal.kit.HttpKit;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.ICallback;
import com.jfinal.plugin.activerecord.Record;
import com.ray.common.controller.BaseController;

import oracle.jdbc.internal.OracleTypes;

public class WsController extends BaseController {
	
	/**
	 * 手机扫码系统统一入口
	 * @throws UnsupportedEncodingException 
	 */
	public void procReq(){
		final String inJson = HttpKit.readData(getRequest());
		System.out.println(inJson);
		Db.execute(new ICallback() {
			@Override
			public Object call(Connection conn) throws SQLException {
				CallableStatement proc = conn.prepareCall("{call pkg_json.DataPut_(?,?)}");
				proc.setString(1, inJson);
				proc.registerOutParameter(2,OracleTypes.VARCHAR);
				proc.execute();
				String outJson = Db.findFirst("select sendxml from a31902 where line_no ="+proc.getString(2)).get("sendxml");
				System.out.println(outJson);
				renderJson(outJson);
				return null;
			}
		});
	}
	
	public void test(){
		System.out.println("read:"+HttpKit.readData(getRequest()));
		System.out.println(getPara("json"));
	}
	
	/**
	 * 手机扫码装托接口
	 */
	public void zt(){
		String inJson = HttpKit.readData(getRequest());
		System.out.println(inJson);
		JSONObject jb = JSONObject.parseObject(inJson);
		JSONArray ja = jb.getJSONArray("body");
		for (int i = 0; i < ja.size(); i++) {
			JSONObject temp = ja.getJSONObject(i);
			Record record = new Record();
			record.set("id", UUID.randomUUID().toString());
			record.set("tpNo", temp.get("tpNo"));
			record.set("sonCode", temp.get("sonCode"));
			Db.save("pallet", record);
		}
		renderNull();
	}
}
