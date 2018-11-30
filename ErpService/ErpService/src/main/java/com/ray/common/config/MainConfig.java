package com.ray.common.config;

import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.core.JFinal;
import com.jfinal.kit.PathKit;
import com.jfinal.kit.PropKit;
import com.jfinal.template.Engine;
import com.ray.common.model._MappingKit;
import com.ray.controller.FunController;
import com.ray.controller.MainController;
import com.ray.controller.SysController;
import com.ray.controller.WsController;
import com.ray.util.Commen;
import com.jfinal.ext.interceptor.SessionInViewInterceptor;
import com.jfinal.plugin.druid.DruidPlugin;
import com.jfinal.plugin.redis.RedisPlugin;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.activerecord.CaseInsensitiveContainerFactory;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.activerecord.dialect.MysqlDialect;
import com.jfinal.plugin.activerecord.dialect.OracleDialect;
import com.jfinal.plugin.activerecord.generator.Generator;
import com.jfinal.render.ViewType;
import com.jfinal.ext.plugin.shiro.ShiroInterceptor;
import com.jfinal.ext.plugin.shiro.ShiroPlugin;

public class MainConfig extends JFinalConfig {
	
	private Routes routes;
	/**
	 * 配置JFinal常量
	 */
	@Override
	public void configConstant(Constants me) {
		//读取数据库配置文件
		PropKit.use("config.properties");
		//设置当前是否为开发模式
		me.setDevMode(PropKit.getBoolean("devMode"));
		//设置默认上传文件保存路径 getFile等使用
		me.setBaseUploadPath("upload/temp/");
		//设置上传最大限制尺寸
		//me.setMaxPostSize(1024*1024*10);
		//设置默认下载文件路径 renderFile使用
		me.setBaseDownloadPath("download");
		me.setEncoding("UTF-8");
		//设置默认视图类型
		me.setViewType(ViewType.JFINAL_TEMPLATE);
		//设置404渲染视图
		//me.setError404View("404.html");
		
		
	}
	/**
	 * 配置JFinal路由映射
	 */
	@Override
	public void configRoute(Routes me) {
		me.setBaseViewPath("/page");
    	me.add("/", MainController.class);
    	me.add("/sys",SysController.class,"sys");
    	me.add("/ws",WsController.class);
    	me.add("/fun",FunController.class,"fun");
    	this.routes = me;
	}
	
	public static DruidPlugin createDruidPlugin() {
		return new DruidPlugin(PropKit.get("jdbcUrl"), PropKit.get("user"), PropKit.get("password").trim());
	}
	
	/**
	 * 配置JFinal插件
	 * 数据库连接池
	 * ORM
	 * 缓存等插件
	 * 自定义插件
	 */
	@Override
	public void configPlugin(Plugins me) {
		//配置数据库连接池插件
		DruidPlugin dbPlugin=new DruidPlugin(PropKit.get("jdbcUrl"), PropKit.get("user"), PropKit.get("password"));
		//orm映射 配置ActiveRecord插件
		ActiveRecordPlugin arp=new ActiveRecordPlugin(dbPlugin);
		arp.setShowSql(PropKit.getBoolean("devMode"));
		dbPlugin.setDriverClass("oracle.jdbc.driver.OracleDriver");
		arp.setContainerFactory(new CaseInsensitiveContainerFactory(true));
		arp.setDialect(new OracleDialect());
		/********在此添加数据库 表-Model 映射*********/
		//arp.addMapping("menu", Menu.class);
		//如果使用了JFinal Model 生成器 生成了BaseModel 把下面注释解开即可
		//_MappingKit.mapping(arp);
		
		me.add(dbPlugin);
		me.add(arp);
		//添加到插件列表中
		ShiroPlugin shiroPlugin = new ShiroPlugin(routes);
    	shiroPlugin.setLoginUrl("/loginInit");
    	shiroPlugin.setSuccessUrl("/index");
    	shiroPlugin.setUnauthorizedUrl("/error401");
    	me.add(shiroPlugin);
    	
    	//添加redis缓存服务器
    	RedisPlugin redisPlugin1 = new RedisPlugin("test", "localhost");
    	me.add(redisPlugin1);
	}
	/**
	 * 配置全局拦截器
	 */
	@Override
	public void configInterceptor(Interceptors me) {
		me.add(new ShiroInterceptor());
		me.addGlobalActionInterceptor(new SessionInViewInterceptor());
	}
	/**
	 * 配置全局处理器
	 */
	@Override
	public void configHandler(Handlers me) {

	}
	
	/**
	 * 配置模板引擎 
	 */
	@Override
	public void configEngine(Engine me) {
    	Record system = new Record();
    	system.set("company", PropKit.get("company"));
    	me.addSharedObject("system", system);
		//这里只有选择JFinal TPL的时候才用
		//配置共享函数模板
		//me.addSharedFunction("/view/common/layout.html")
    	me.addSharedMethod(new Commen());
	}
	
	public static void main(String[] args) {
		JFinal.start("src/main/webapp", 80, "/", 5);
	}
	

}