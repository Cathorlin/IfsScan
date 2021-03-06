package com.ray.common.model;

import com.jfinal.plugin.activerecord.ActiveRecordPlugin;

/**
 * Generated by JFinal, do not modify this file.
 * <pre>
 * Example:
 * public void configPlugin(Plugins me) {
 *     ActiveRecordPlugin arp = new ActiveRecordPlugin(...);
 *     _MappingKit.mapping(arp);
 *     me.add(arp);
 * }
 * </pre>
 */
public class _MappingKit {
	
	public static void mapping(ActiveRecordPlugin arp) {
		arp.addMapping("blog", "id", Blog.class);
		arp.addMapping("gp_procode", "id", GpProcode.class);
		arp.addMapping("menu", "id", Menu.class);
		arp.addMapping("permissions", "id", Permissions.class);
		arp.addMapping("role_permission", "id", RolePermission.class);
		arp.addMapping("roles", "id", Roles.class);
		arp.addMapping("sys_object", "id", SysObject.class);
		arp.addMapping("user", "id", User.class);
		arp.addMapping("user_role", "id", UserRole.class);
	}
}

