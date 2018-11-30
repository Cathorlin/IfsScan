package Erp;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.naming.NamingException;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.justep.baas.action.ActionContext;

public class ErpServices {
	
	private static String url = "http://localhost/ws/procReq";
	//private String url = "http://192.168.18.11:8002/ProcReq.ashx";
	
	//登录
	public static JSONObject login(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String loginName = params.getString("loginName");
		String password = params.getString("password");
		System.out.println("用户名："+loginName+"密码："+password);
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject userinfo = new JSONObject();
		userinfo.put("UserId", loginName);
		userinfo.put("Password", password);
		userinfo.put("DeviceID", "123123");
		body.add(userinfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "SysLogin");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","SysLogin");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","SysLogin");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\", "");*/
		System.out.println("返回数据:"+result);
		JSONObject jb = JSON.parseObject(result);
		jb.put("userid", loginName);
		System.out.println(jb.toString());
		return jb;
	}
	//登录
	
	
	//采购
	/**
	 * 扫码获取采购订单信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getPurchaseOrder(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String orderNo = params.getString("orderNo");
		String userID = params.getString("userID");
		System.out.println("订单号："+orderNo+" 用户ID："+userID);
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject orderInfo = new JSONObject();
		orderInfo.put("OrderNo", orderNo);
		orderInfo.put("DeviceID", "123123");
		body.add(orderInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "GetPurOrder");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//String result = HttpRequestUtil.sendPost("http://192.168.18.11:8002/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		//ERP登录接口
		System.out.println(result);
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		//System.out.println("返回数据:"+result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		/*jb.put("orderNo", orderNo);
		//获取订单信息接口
		//HttpRequestUtil.sendPost("http://127.0.0.1", jb, "UTF-8");
		//获取订单信息接口
		jb.put("supplier","20150");
		jb.put("supplierName","绵阳市鹏程机电设备有限公司");
		jb.put("orderDate", "2017-01-10");
		//模拟数据
		JSONArray ja = new JSONArray();
		JSONObject jb1 = new JSONObject();
		jb1.put("PART_NO", "1-04-24-006-0188");
		jb1.put("DESCRIPTION", "增压泵(CAPAC2TY12.7)");
		jb1.put("BUY_QTY_DUE", "100");
		jb1.put("LOCATION", "03999999");
		jb1.put("LOT_BATCH_NO", "20150180607001");
		ja.add(jb1);
		JSONObject jb2 = new JSONObject();
		jb2.put("PART_NO", "3-03-11-006-0009");
		jb2.put("DESCRIPTION", "磁力线圈247E");
		jb2.put("BUY_QTY_DUE", "200");
		jb2.put("LOCATION", "03999999");
		jb2.put("LOT_BATCH_NO", "20150180607002");
		ja.add(jb2);
		jb.put("orderLine", ja);
		
		jb.put("result", 1);
		jb.put("msg", "哈哈哈");*/
		return jb;
	}
	
	/**
	 * 提交扫码入库信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject purSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String data = params.getString("scanData");
		System.out.println("传入后台数据："+data);
		//请求总
		JSONObject all = new JSONObject();
		all.put("body", JSONArray.parseArray(data));
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "PurchaseReceipt");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP入库接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP入库接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	
	//销售出库
	/**
	 * 扫码获取发货单信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getShipment(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String shipmentId = params.getString("shipmentId");
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject pickInfo = new JSONObject();
		pickInfo.put("PickListNo", shipmentId);
		body.add(pickInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "GetPickList");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		//System.out.println("返回数据:"+result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	/**
	 * 提交销售出库信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject saleSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String orderNo = params.getString("order_no");
		String pick_list_no = params.getString("pick_list_no");
		System.out.println("订单号："+orderNo+" 发货号："+pick_list_no);
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject orderInfo = new JSONObject();
		orderInfo.put("OrderNo", orderNo);
		orderInfo.put("PickListNo", pick_list_no);
		body.add(orderInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "StockOut");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		//System.out.println("返回数据:"+result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		jb.put("login", 1);
		jb.put("msg", "哈哈哈");
		return jb;
	}
	
	//销售出库
	
	//移库
	
	/**
	 * 扫码获取运输任务单信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getTransportTask(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String tranId = params.getString("tranId");
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject pickInfo = new JSONObject();
		pickInfo.put("TransportTaskId", tranId);
		body.add(pickInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "GetTransTask");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		//System.out.println("返回数据:"+result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	/**
	 * 提交移库信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject tranSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String data = params.getString("scanData");
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject pickInfo = new JSONObject();
		pickInfo.put("TransportTaskId", data);
		body.add(pickInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "TaskExcute");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		//System.out.println("返回数据:"+result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	//移库
	
	//材料申请
	
	/**
	 * 扫码获取材料申请订单信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getMr(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String mrId = params.getString("mrId");
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject pickInfo = new JSONObject();
		pickInfo.put("OrderNo", mrId);
		body.add(pickInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "GetMaterialReq");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		//System.out.println("返回数据:"+result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	/**
	 * 提交材料申请信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject mrSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		JSONObject jb = new JSONObject();
		String loginName = params.getString("loginName");
		String data = params.getString("scanData");
		System.out.println(data);
		/*net.sf.json.JSONArray ja = net.sf.json.JSONArray.fromObject(data);
		for (int i = 0; i < ja.size(); i++) {
			net.sf.json.JSONObject t = ja.getJSONObject(i);
			System.out.println(t.get("part_no"));
		}*/
		//ERP登录接口
		//HttpRequestUtil.sendPost("http://127.0.0.1", jb, "UTF-8");
		//ERP登录接口
		jb.put("login", 1);
		jb.put("msg", "哈哈哈");
		return jb;
	}
	
	//材料申请
	
	//车间订单领料
	
	/**
	 * 扫码获取车间订单信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getSmr(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String soId = params.getString("soId");
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject pickInfo = new JSONObject();
		pickInfo.put("OrderNo", soId);
		body.add(pickInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "GetShopOrder");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	/**
	 * 提交车间订单下料信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject smrSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		JSONObject jb = new JSONObject();
		String loginName = params.getString("loginName");
		String data = params.getString("scanData");
		System.out.println(data);
		/*net.sf.json.JSONArray ja = net.sf.json.JSONArray.fromObject(data);
		for (int i = 0; i < ja.size(); i++) {
			net.sf.json.JSONObject t = ja.getJSONObject(i);
			System.out.println(t.get("part_no"));
		}*/
		//ERP登录接口
		//HttpRequestUtil.sendPost("http://127.0.0.1", jb, "UTF-8");
		//ERP登录接口
		jb.put("login", 1);
		jb.put("msg", "哈哈哈");
		return jb;
	}
	
	//车间订单领料
	
	//仓库盘点
	
	/**
	 * 扫码获取盘点单信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getCounting(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String countId = params.getString("countId");
		String locationNo = params.getString("location");
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject pickInfo = new JSONObject();
		pickInfo.put("InvListNo", countId);
		pickInfo.put("LocationNo", locationNo);
		body.add(pickInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "GetCountingResult");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);	
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	/**
	 * 提交盘点信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject countSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String data = params.getString("scanData");
		data = data.replaceAll("\"OBJID\"", "\"Objid\"");
		data = data.replaceAll("\"OBJVERSION\"", "\"Objversion\"");
		data = data.replaceAll("\"QTY_ONHAND\"", "\"QtyOnhand\"");
		//请求总
		JSONObject all = new JSONObject();
		all.put("body", JSONArray.parseArray(data));
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "CountingModify");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP入库接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	//仓库盘点
	
	//成品入库
	
	/**
	 * 扫码获取车间订单信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getPf(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String soId = params.getString("soId");
		//请求总
		JSONObject all = new JSONObject();
		//请求体
		JSONArray body = new JSONArray();
		JSONObject pickInfo = new JSONObject();
		pickInfo.put("OrderNo", soId);
		body.add(pickInfo);
		all.put("body", body);
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "GetShopOrderComp");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP登录接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP登录接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		if(jb.getJSONObject("body").getJSONObject("OrderHead").getJSONObject("ROW").get("ACTIVITY_SEQ")==null){
			jb.getJSONObject("body").getJSONObject("OrderHead").getJSONObject("ROW").put("ACTIVITY_SEQ", "");
		}
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	/**
	 * 提交成品入库信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject pfSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String data = params.getString("scanData");
		//请求总
		JSONObject all = new JSONObject();
		all.put("body", JSONArray.parseArray(data));
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "ReceivePart");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP入库接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP入库接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	//成品入库
	
	//生产报工
	
	/**
	 * 扫码获取车间订单工序信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getBg(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String data = params.getString("scanData");
		//请求总
		JSONObject all = new JSONObject();
		all.put("body", JSONArray.parseArray(data));
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "ReportOperation");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP入库接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP入库接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	/**
	 * 提交车间订单下料信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject bgSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String data = params.getString("data");
		//请求总
		JSONObject all = new JSONObject();
		all.put("body", JSONArray.parseArray(data));
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "ReportOperation");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP入库接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost(url, all, "UTF-8","GetPurOrder");
		//ERP入库接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
	//生产报工
	
	//生产交接
	
	/**
	 * 扫码获取车间订单交件工序信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getJiaojian(JSONObject params, ActionContext context) throws SQLException, NamingException{
		JSONObject jb = new JSONObject();
		String soId = params.getString("soId");
		System.out.println("车间订单号："+soId);
		String operationNo = params.getString("operationNo");
		System.out.println("工序号："+operationNo);
		jb.put("operationNo", operationNo);
		jb.put("soId", soId);
		//获取发货单信息接口
		//HttpRequestUtil.sendPost("http://127.0.0.1", jb, "UTF-8");
		//获取发货单信息接口
		//jb.put("customerName","沈阳航天三菱汽车发动机制造有限公司");
		//模拟数据
		jb.put("part_no", "FL11-0004-01");
		jb.put("part_desc", "成汽配真空驱动头");
		jb.put("qty", "6080");
		jb.put("operationName", "退磁");
		jb.put("ybgQty", "2080");
		jb.put("result", 1);
		jb.put("msg", "哈哈哈");
		return jb;
	}
	
	/**
	 * 扫码获取车间订单接件工序信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject getJiejian(JSONObject params, ActionContext context) throws SQLException, NamingException{
		JSONObject jb = new JSONObject();
		String soId = params.getString("soId");
		System.out.println("车间订单号："+soId);
		String operationNo = params.getString("operationNo");
		System.out.println("工序号："+operationNo);
		jb.put("operationNo", operationNo);
		jb.put("soId", soId);
		//获取发货单信息接口
		//HttpRequestUtil.sendPost("http://127.0.0.1", jb, "UTF-8");
		//获取发货单信息接口
		//jb.put("customerName","沈阳航天三菱汽车发动机制造有限公司");
		//模拟数据
		jb.put("jiao", "外观检测");
		jb.put("part_no", "FL11-0004-01");
		jb.put("part_desc", "成汽配真空驱动头");
		jb.put("qty", "6080");
		jb.put("operationName", "退磁");
		jb.put("yjjQty", "2080");
		jb.put("bcjjQty", "2000");
		jb.put("result", 1);
		jb.put("msg", "哈哈哈");
		return jb;
	}
	
	/**
	 * 提交交件信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject jiaojianSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		JSONObject jb = new JSONObject();
		String loginName = params.getString("loginName");
		String data = params.getString("data");
		System.out.println(data);
		/*net.sf.json.JSONArray ja = net.sf.json.JSONArray.fromObject(data);
		for (int i = 0; i < ja.size(); i++) {
			net.sf.json.JSONObject t = ja.getJSONObject(i);
			System.out.println(t.get("part_no"));
		}*/
		//ERP登录接口
		//HttpRequestUtil.sendPost("http://127.0.0.1", jb, "UTF-8");
		//ERP登录接口
		jb.put("result", 1);
		jb.put("msg", "哈哈哈");
		return jb;
	}
	
	/**
	 * 提交接件信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject jiejianSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		JSONObject jb = new JSONObject();
		String loginName = params.getString("loginName");
		String data = params.getString("data");
		System.out.println(data);
		/*net.sf.json.JSONArray ja = net.sf.json.JSONArray.fromObject(data);
		for (int i = 0; i < ja.size(); i++) {
			net.sf.json.JSONObject t = ja.getJSONObject(i);
			System.out.println(t.get("part_no"));
		}*/
		//ERP登录接口
		//HttpRequestUtil.sendPost("http://127.0.0.1", jb, "UTF-8");
		//ERP登录接口
		jb.put("result", 1);
		jb.put("msg", "哈哈哈");
		return jb;
	}
	
	//生产交接
	
	/**
	 * 提交装托信息
	 * @param params
	 * @param context
	 * @return
	 * @throws SQLException
	 * @throws NamingException
	 */
	public static JSONObject ztSubmit(JSONObject params, ActionContext context) throws SQLException, NamingException{
		String data = params.getString("scanData");
		System.out.println("传入后台数据："+data);
		//请求总
		JSONObject all = new JSONObject();
		all.put("body", JSONArray.parseArray(data));
		//请求头
		JSONObject head = new JSONObject();
		head.put("apiVersion", "V1.0.0");
		head.put("reqAppId", "10001");
		head.put("reqName", "Zt");
		head.put("transID", new SimpleDateFormat("yyyyMMddHHmmss").format(new Date()));
		head.put("reqTime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		head.put("rowCount", "1");
		all.put("head", head);
		System.out.println("请求数据："+all.toJSONString());
		//ERP入库接口
		//String result = HttpRequestUtil.sendPost("http://110.186.68.166:8008/ProcReq.ashx", all, "UTF-8","GetPurOrder");
		String result = HttpRequestUtil.sendPost("http://localhost/ws/zt", all, "UTF-8","GetPurOrder");
		//ERP入库接口
		/*result = result.replaceAll("\\\\r\\\\n", "");
		result = result.substring(1, result.length()-1);
		result = result.replaceAll("\\\\\"", "\"");
		result = result.replaceAll(" ", "");*/
		result = HttpRequestUtil.decodeUnicode(result);
		JSONObject jb = JSON.parseObject(result);
		System.out.println("返回数据:"+jb.toString());
		return jb;
	}
	
}