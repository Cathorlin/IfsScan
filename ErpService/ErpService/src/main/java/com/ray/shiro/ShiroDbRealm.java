package com.ray.shiro;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.cache.Cache;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.SimplePrincipalCollection;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class ShiroDbRealm extends AuthorizingRealm{
	/**
	 * 认证回调函数,登录时调用.
	 */
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
		Record user = Db.findFirst("select * from user where username = ?",token.getUsername());
		if (user != null) {
			return new SimpleAuthenticationInfo(user.get("username"), user.get("password"), getName());
		} else {
			return null;
		}
	}

	/**
	 * 授权查询回调函数, 进行鉴权但缓存中无用户的授权信息时调用.
	 */
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		Collection<String> roleNameList = new ArrayList<>();
		Collection<String> permissionNameList = new ArrayList<>();
		String loginName = (String) principals.fromRealm(getName()).iterator().next();
		Record user = Db.findFirst("select * from user where username = ?",loginName);
		if (user != null) {
			SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
			List<Record> roleList = Db.find("select * from user_role where user_id = ?",user.getInt("id"));
			for (int i = 0; i < roleList.size(); i++) {
				Record role = Db.findById("roles", roleList.get(i).get("role_id"));
				roleNameList.add(role.getStr("role_name"));
				List<Record> permissionList = Db.find("select * from role_permission where role_id = ?",roleList.get(i).getInt("role_id"));
				for (int j = 0; j < permissionList.size(); j++) {
					Record permission = Db.findById("permissions", permissionList.get(j).getInt("permission_id"));
					//按钮权限
					if(permission.getInt("type")==2){
						permissionNameList.add(permission.getStr("permission_name"));
					}
				}
			}
			info.addRoles(roleNameList);
			info.addStringPermissions(permissionNameList);
			return info;
		} else {
			return null;
		}
	}

	/**
	 * 更新用户授权信息缓存.
	 */
	public void clearCachedAuthorizationInfo(String principal) {
		SimplePrincipalCollection principals = new SimplePrincipalCollection(principal, getName());
		clearCachedAuthorizationInfo(principals);
	}

	/**
	 * 清除所有用户授权信息缓存.
	 */
	public void clearAllCachedAuthorizationInfo() {
		Cache<Object, AuthorizationInfo> cache = getAuthorizationCache();
		if (cache != null) {
			for (Object key : cache.keys()) {
				cache.remove(key);
			}
		}
	}

}