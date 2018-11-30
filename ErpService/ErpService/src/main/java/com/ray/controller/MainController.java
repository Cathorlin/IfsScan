package com.ray.controller;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.redis.Redis;
import com.ray.common.controller.BaseController;

public class MainController extends BaseController {
	
	public void index(){
		//System.out.println(getMenu());
		//Record user = (Record)getSessionAttr("user");
 		//setAttr("menu", getMenu());
		//System.out.println(Db.use("mysql").find("SELECT * FROM COLUMNS WHERE table_name = 'user' AND table_schema = 'jfinal_layui'"));
		render("index.html");
	}
	
	public void loginInit(){
		render("login.html");
	}
	
	public void login(){
    	UsernamePasswordToken token = new UsernamePasswordToken(getPara("username"), getPara("password"));
        Subject subject = SecurityUtils.getSubject();
        Record rsp = new Record();
        rsp.set("code", 0);
        try {
            subject.login(token);
            rsp.set("result", 1);
            rsp.set("msg","登录成功");
            rsp.set("icon", 1);
        } catch (IncorrectCredentialsException ice) {
            // 捕获密码错误异常
        	rsp.set("result", 0);
        	rsp.set("msg","密码错误");
        	rsp.set("icon", 5);
        	renderJson(rsp);
        	return;
        } catch (UnknownAccountException uae) {
            // 捕获未知用户名异常
        	rsp.set("result", 0);
        	rsp.set("msg","用户不存在");
        	rsp.set("icon", 5);
        	renderJson(rsp);
        	return;
        } catch (ExcessiveAttemptsException eae) {
            // 捕获错误登录过多的异常
        	rsp.set("result", 0);
        	rsp.set("msg","错误登录过多");
        	rsp.set("icon", 5);
        	renderJson(rsp);
        	return;
        }
        Record user = Db.findFirst("select * from user where username = '"+getPara("username")+"'");
        subject.getSession().setAttribute("user", user);
        try {
        	Redis.use("test").incr("loginTimes");
		} catch (Exception e) {
			// TODO: handle exception
		}
        renderJson(rsp);
    }
    
    public void logout(){
    	Subject currentUser = SecurityUtils.getSubject();
    	currentUser.logout();
    	Record rsp = new Record();
		rsp.set("code", 0);
        rsp.set("msg","退出成功");
        System.out.println(Redis.use("test").get("ray"));
    	renderJson(rsp);
    }
	
	public void console(){
		render("home/console.html");
	}
	
	/**
     * 获取菜单
     * @return 菜单列表
     */
	public List<Record> getMenu(){
    	List<Record> top_menu = Db.find("select * from menu where menu_level = 1 and is_hide = 0 order by seq_num");
    	top_menu = menuAuth(top_menu);
    	for (int i = 0; i < top_menu.size(); i++) {
    		List<Record> second_menu = Db.find("select * from menu where menu_level = 2 and is_hide = 0 and parent_menu = "+top_menu.get(i).getInt("id")+" order by seq_num");
    		second_menu = menuAuth(second_menu);
        	for (int j = 0; j < second_menu.size(); j++) {
        		List<Record> third_menu = Db.find("select * from menu where menu_level = 3 and is_hide=0 and parent_menu = "+second_menu.get(j).getInt("id")+" order by seq_num");
        		third_menu = menuAuth(third_menu);
        		if(third_menu.size()>0){
        			second_menu.get(j).set("children", third_menu);
        		}
    		}
        	if(second_menu.size()>0){
        		top_menu.get(i).set("children", second_menu);
        	}
		}
    	return top_menu;
    }
	
	/**
     * 菜单鉴权
     * @return 菜单列表
     */
    public List<Record> menuAuth(List<Record> menu){
    	Record user = (Record)getSessionAttr("user");
    	String sql = "SELECT gl_id FROM permissions WHERE id IN (SELECT permission_id FROM role_permission WHERE role_id IN (SELECT role_id FROM user_role WHERE user_id = "+user.get("id")+")) AND TYPE = 1";
    	List<Record> menuPermissions = Db.find(sql);
    	for (int i = 0; i < menu.size(); i++) {
    		boolean flag = true;
			for (int j = 0; j < menuPermissions.size(); j++) {
				if(menu.get(i).getInt("id")==menuPermissions.get(j).getInt("gl_id")){
					flag = false;
				}
			}
			if(flag){
				menu.remove(i);
				i--;
			}
		}
    	return menu;
    }
    
    public static void main(String[] args) {
    	Redis.use("test").lpush("ray", "1");
	}
}
