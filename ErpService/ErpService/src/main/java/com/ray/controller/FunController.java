package com.ray.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Page;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.SqlPara;
import com.ray.common.controller.BaseController;
import com.ray.util.Commen;

public class FunController extends BaseController {
	
	/**
	 * 装箱打印
	 */
	public void index(){
		Record zx = (Record)getSessionAttr("zx");
		if(zx==null){
			zx = new Record();
			zx.set("shop_order_no", "");
			zx.set("part_no", "");
			zx.set("lot_batch_no", "");
			zx.set("qty", "");
			setSessionAttr("zx", zx);
		}
		render("zx.html");
	}
	
	/**
	 * 获取ERP车间订单信息
	 */
	public void getPart(){
		Record rsp = new Record();
        rsp.set("code", 0);
		try {
			Record r = Db.findFirst("select part_no from ifsapp.shop_ord_tab where order_no = '"+getPara("shop_order_no")+"'");
			if(r!=null){
				rsp.set("part_no", r.get("part_no"));
				rsp.set("lot_batch_no", getPara("shop_order_no")+new SimpleDateFormat("yyMMdd").format(new Date()));
				rsp.set("result", 1);
				rsp.set("icon", 1);
				rsp.set("msg", "车间订单信息获取成功");
			}else{
				rsp.set("icon", 2);
				rsp.set("msg", "车间订单不存在，请核实!");
			}
		} catch (Exception e) {
			e.printStackTrace();
			rsp.set("icon", 2);
			rsp.set("msg", "车间订单获取失败："+e.getMessage());
		}
		renderJson(rsp);
	}
	
	/**
	 * 确认打包
	 */
	public void confirm(){
		Record rsp = new Record();
        rsp.set("code", 0);
		try {
			Record r = Db.findFirst("select part_no from ifsapp.shop_ord_tab where order_no = '"+getPara("shop_order_no")+"'");
			if(r==null){
				rsp.set("icon", 2);
				rsp.set("msg", "车间订单不存在，请核实");
			}else{
				if(r.get("part_no").equals(getPara("part_no"))){
					Record newBox = new Record();
					newBox.set("id", Commen.getUUID());
					newBox.set("box_no", getPara("box_no"));
					newBox.set("shop_order_no", getPara("shop_order_no"));
					newBox.set("part_no", getPara("part_no"));
					newBox.set("lot_batch_no", getPara("lot_batch_no"));
					newBox.set("qty", getPara("qty"));
					newBox.set("create_date", new Date());
					Db.save("box", newBox);
					Record zx = (Record)getSessionAttr("zx");
					zx.set("shop_order_no", getPara("shop_order_no"));
					zx.set("part_no", getPara("part_no"));
					zx.set("lot_batch_no", getPara("lot_batch_no"));
					zx.set("qty", getPara("qty"));
					setSessionAttr("zx", zx);
					rsp.set("msg", "装箱完成");
					rsp.set("result", 1);
					rsp.set("icon", 1);
					rsp.set("id", newBox.get("id"));
				}else{
					rsp.set("icon", 2);
					rsp.set("msg", "车间订单与成品零件不匹配，请核实");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			rsp.set("icon", 2);
			rsp.set("msg", "装箱异常："+e.getMessage());
		}
		renderJson(rsp);
	}
	
	/**
	 * 跳转打印
	 */
	public void toPrint(){
		Record box = Db.findFirst("select * from box where id = '"+getPara(0)+"'");
		setAttr("box", box);
		render("print.html");
	}
	
	/**
	 * 跳转装箱历史
	 */
	public void history(){
		render("history.html");
	}
	
	/**
	 * 获取装箱历史数据
	 */
	public void getZxList(){
		SqlPara sqlPara = new SqlPara();
		String sql = "select * from box where 1=1";
		if(!"".equals(getPara("shop_order_no")) && getPara("shop_order_no")!=null){
			sql += " and shop_order_no like '%"+getPara("shop_order_no")+"%'";
		}
		if(!"".equals(getPara("part_no")) && getPara("part_no")!=null){
			sql += " and part_no like '%"+getPara("part_no")+"%'";
		}
		if(!"".equals(getPara("lot_batch_no")) && getPara("lot_batch_no")!=null){
			sql += " and lot_batch_no like '%"+getPara("lot_batch_no")+"%'";
		}
		if(!"".equals(getPara("create_date")) && getPara("create_date")!=null){
			String begin = getPara("create_date").split(" - ")[0];
			String end = getPara("create_date").split(" - ")[1];
			sql += " and create_date >= to_date('"+begin+"','yyyy-mm-dd')";
			sql += " and create_date <= to_date('"+end+"','yyyy-mm-dd')";
		}
		sqlPara.setSql(sql);
		Page<Record> records = Db.paginate(getParaToInt("page"), getParaToInt("limit"), sqlPara);
		Record layTableRes = new Record();
		layTableRes.set("code", 0);
		layTableRes.set("msg", "");
		layTableRes.set("count", records.getTotalRow());
		layTableRes.set("data", records.getList());
		renderJson(layTableRes);
	}
}
