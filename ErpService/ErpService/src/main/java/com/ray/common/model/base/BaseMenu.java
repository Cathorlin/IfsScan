package com.ray.common.model.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings({"serial", "unchecked"})
public abstract class BaseMenu<M extends BaseMenu<M>> extends Model<M> implements IBean {

	public M setId(java.lang.Integer id) {
		set("id", id);
		return (M)this;
	}
	
	public java.lang.Integer getId() {
		return getInt("id");
	}

	public M setMenuLevel(java.lang.Integer menuLevel) {
		set("menu_level", menuLevel);
		return (M)this;
	}
	
	public java.lang.Integer getMenuLevel() {
		return getInt("menu_level");
	}

	public M setParentMenu(java.lang.Integer parentMenu) {
		set("parent_menu", parentMenu);
		return (M)this;
	}
	
	public java.lang.Integer getParentMenu() {
		return getInt("parent_menu");
	}

	public M setTitleEn(java.lang.String titleEn) {
		set("title_en", titleEn);
		return (M)this;
	}
	
	public java.lang.String getTitleEn() {
		return getStr("title_en");
	}

	public M setTitle(java.lang.String title) {
		set("title", title);
		return (M)this;
	}
	
	public java.lang.String getTitle() {
		return getStr("title");
	}

	public M setSeqNum(java.lang.Integer seqNum) {
		set("seq_num", seqNum);
		return (M)this;
	}
	
	public java.lang.Integer getSeqNum() {
		return getInt("seq_num");
	}

	public M setIcon(java.lang.String icon) {
		set("icon", icon);
		return (M)this;
	}
	
	public java.lang.String getIcon() {
		return getStr("icon");
	}

	public M setHref(java.lang.String href) {
		set("href", href);
		return (M)this;
	}
	
	public java.lang.String getHref() {
		return getStr("href");
	}

	public M setIsHide(java.lang.Integer isHide) {
		set("is_hide", isHide);
		return (M)this;
	}
	
	public java.lang.Integer getIsHide() {
		return getInt("is_hide");
	}

}
