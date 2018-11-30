package com.ray.controller;

import java.util.List;

import com.jfinal.aop.Before;
import com.jfinal.json.FastJson;
import com.jfinal.kit.HttpKit;
import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.tx.Tx;
import com.ray.common.controller.BaseController;
import com.ray.common.model.Menu;
import com.ray.common.model.User;
import com.ray.util.BaseHttpKit;

public class SysController extends BaseController {
	
	public void role(){
		render("role.html");
	}
	
	public void roleform(){
		int roleId = getParaToInt(0);
		setAttr("role", new Record().set("id", 0));
    	if(roleId!=0){
    		Record role = Db.findById("roles", roleId);
    		setAttr("role", role);
    	}
		render("roleform.html");
	}
	
	public void getRole(){
		List<Record> roles = Db.find("select * from roles");
		Record layTableRes = new Record();
		layTableRes.set("code", 0);
		layTableRes.set("msg", "");
		layTableRes.set("count", roles.size());
		layTableRes.set("data", roles);
		renderJson(layTableRes);
	}
	
	public void getMenuTree(){
		Record rsp = new Record();
		rsp.set("code", 0);
		rsp.set("msg", "获取成功");
		Record trees = new Record();
		trees.set("trees", getMenu(getParaToInt(0)));
		rsp.set("data", trees);
		renderJson(rsp);
	}
	
	/**
	 * 修改角色及菜单权限
	 */
	@Before(Tx.class)
	public void roleUpdate(){
		String menuIds = getPara("role_menu_auth");
		int roleId = getParaToInt("role_id");
		Record role = new Record();
		if(roleId !=0){
			role = Db.findById("roles", roleId);
		}
		role.set("role_name", getPara("role_name"));
		role.set("role_nick_name", getPara("role_nick_name"));
		if(roleId!=0){
			Db.update("roles", role);
		}else{
			Db.save("roles", role);
		}
		//清除所有菜单权限
		clearMenuAuth(role.getInt("id"));
		//新增权限
		String[] menuIdArray = menuIds.split(",");
		for (int i = 0; i < menuIdArray.length; i++) {
			Record permission = new Record();
			permission.set("type", 1);
			permission.set("gl_id", menuIdArray[i]);
			Db.save("permissions", permission);
			Record rolePermission = new Record();
			rolePermission.set("role_id", role.getInt("id"));
			rolePermission.set("permission_id", permission.get("id"));
			Db.save("role_permission", rolePermission);
		}
		Record rsp = new Record();
        rsp.set("code", 0);
        rsp.set("msg", "角色及权限新增或修改成功");
		renderJson(rsp);
	}
	
	/**
	 * 清除角色所有菜单权限
	 */
	public void clearMenuAuth(int roleId){
		List<Record> permissions = Db.find("SELECT * FROM permissions WHERE TYPE = 1 AND id IN (SELECT permission_id FROM role_permission WHERE role_id = "+roleId+")");
		for (int i = 0; i < permissions.size(); i++) {
			int perId = permissions.get(i).get("id");
			Db.deleteById("permissions", perId);
			Db.delete("delete from role_permission where role_id = ? and permission_id = ?",roleId,perId);
		}
	}
	
	/**
     * 获取菜单
     * @return 菜单列表
     */
	public List<Record> getMenu(int roleId){
    	List<Record> top_menu = Db.find("select * from menu where menu_level = 1 and is_hide = 0");
    	top_menu = menuAuth(top_menu,roleId);
    	for (int i = 0; i < top_menu.size(); i++) {
    		List<Record> second_menu = Db.find("select * from menu where menu_level = 2 and is_hide = 0 and parent_menu = "+top_menu.get(i).getInt("id")+" order by seq_num");
    		second_menu = menuAuth(second_menu,roleId);
        	for (int j = 0; j < second_menu.size(); j++) {
        		List<Record> third_menu = Db.find("select * from menu where menu_level = 3 and is_hide=0 and parent_menu = "+second_menu.get(j).getInt("id")+" order by seq_num");
        		third_menu = menuAuth(third_menu,roleId);
        		if(third_menu.size()>0){
        			second_menu.get(j).set("list", third_menu);
        		}
    		}
        	if(second_menu.size()>0){
        		top_menu.get(i).set("list", second_menu);
        	}
		}
    	return top_menu;
    }
	
	/**
     * 菜单鉴权
     * @return 菜单是否选中
     */
    public List<Record> menuAuth(List<Record> menu,int roleId){
    	String sql = "";
    	if(roleId !=0){
    		sql = "SELECT gl_id FROM permissions WHERE id IN (SELECT permission_id FROM role_permission WHERE role_id = "+roleId+") AND TYPE = 1";
    	}else{
    		sql = "SELECT gl_id FROM permissions WHERE id IN (SELECT permission_id FROM role_permission) AND TYPE = 1";
    	}
    	List<Record> menuPermissions = Db.find(sql);
    	for (int i = 0; i < menu.size(); i++) {
    		boolean flag = false;
			for (int j = 0; j < menuPermissions.size(); j++) {
				if(menu.get(i).getInt("id")==menuPermissions.get(j).getInt("gl_id")){
					flag = true;
				}
			}
			if(flag){
				menu.get(i).set("checked",true);
			}else{
				menu.get(i).set("checked",false);
			}
			menu.get(i).set("name", menu.get(i).get("title"));
			menu.get(i).set("value", menu.get(i).get("id"));
		}
    	return menu;
    }
    
    /**
     * 跳转菜单管理
     */
    public void menu(){
    	render("menu.html");
    }
    
    /**
     * 获取树形菜单
     */
    public void getTreeMenu(){
    	List<Record> menu = Db.find("select * from menu order by seq_num");
    	Record rsp = new Record();
    	rsp.set("code", 0);
    	rsp.set("count", menu.size());
    	rsp.set("data", menu);
    	renderJson(rsp);
    }
    
    /**
     * 跳转菜单添加或修改页面
     */
    public void menuAddOrEdit(){
    	int menuId = getParaToInt(0);
    	int parent_menu = getParaToInt(1);
    	setAttr("menu", new Record());
    	if(menuId!=0){
    		Record menu = Db.findById("menu", menuId);
    		setAttr("menu", menu);
    	}
    	if(parent_menu==0){
    		setAttr("menu_level", 1);
    	}else{
    		Record parentMenu = Db.findById("menu", parent_menu);
    		setAttr("menu_level", parentMenu.getInt("menu_level")+1);
    	}
    	setAttr("parent_menu", parent_menu);
    	render("menuform.html");
    }
    
    /**
     * 执行菜单添加或修改页面
     */
    public void doMenuAddOrEdit(){
    	Menu menu = getModel(Menu.class,"");
    	menu.set("is_hide", 0);
    	if(menu.getInt("id")!=null){
    		menu.update();
    	}else{
    		menu.save();
    	}
    	Record rsp = new Record();
        rsp.set("code", 0);
        rsp.set("msg", "添加或修改菜单成功");
        renderJson(rsp);
    }
    
    /**
     * 删除当前菜单及所有子菜单
     */
    public void delMenu(){
    	deleteMenu(getParaToInt("id"));
    	Record rsp = new Record();
        rsp.set("code", 0);
        rsp.set("msg", "删除菜单及子菜单成功");
        renderJson(rsp);
    }
    
    /**
     * 递归删除当前菜单及子菜单
     */
    public void deleteMenu(int parent_menu){
    	List<Menu> sonMenus =  Menu.dao.find("select * from menu where parent_menu = "+parent_menu);
		for (int i = 0; i < sonMenus.size(); i++) {
			deleteMenu(sonMenus.get(i).getInt("id"));
		}
		Menu.dao.deleteById(parent_menu);
    }
    
    public static void main(String[] args) {
		HttpKit.post("http://localhost/sys/test", "{id:1,nickname:'王军'}",BaseHttpKit.JsonHeader());
	}
    
    public void test(){
    	String json = HttpKit.readData(getRequest());
    	User user = FastJson.getJson().parse(json, User.class);
    	System.out.println(user.getNickname());
    	renderJson("{b:2}");
    }
}
