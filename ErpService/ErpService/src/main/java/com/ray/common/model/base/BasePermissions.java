package com.ray.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings({"serial", "unchecked"})
public abstract class BasePermissions<M extends BasePermissions<M>> extends Model<M> implements IBean {

	public M setId(java.lang.Integer id) {
		set("id", id);
		return (M)this;
	}
	
	public java.lang.Integer getId() {
		return getInt("id");
	}

	public M setName(java.lang.String name) {
		set("name", name);
		return (M)this;
	}
	
	public java.lang.String getName() {
		return getStr("name");
	}

	public M setPermissionName(java.lang.String permissionName) {
		set("permission_name", permissionName);
		return (M)this;
	}
	
	public java.lang.String getPermissionName() {
		return getStr("permission_name");
	}

	public M setType(java.lang.Integer type) {
		set("type", type);
		return (M)this;
	}
	
	public java.lang.Integer getType() {
		return getInt("type");
	}

	public M setGlId(java.lang.Integer glId) {
		set("gl_id", glId);
		return (M)this;
	}
	
	public java.lang.Integer getGlId() {
		return getInt("gl_id");
	}

}