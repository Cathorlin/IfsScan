define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Model = function(){
		this.callParent();
	};
	
	
	
	//图片路径转换
	Model.prototype.toUrl = function(url){
		return url ? require.toUrl(url) : "";
	};

	Model.prototype.loginBtnClick = function(event){
		var login = false;
		if(this.comp("toggle2").checked){
			localStorage.setItem("remeberMe", true);
			localStorage.setItem("loginName", this.comp('nameInput').val());
			localStorage.setItem("password", this.comp('passwordInput').val());
		}else{
			localStorage.removeItem("remeberMe");
            localStorage.removeItem("loginName");
            localStorage.removeItem("password");
		}
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "login",
			"async" : false,
			"params" : {loginName:this.comp('nameInput').val(),password:this.comp('passwordInput').val()},
			"success" : function(data) {
				if(data.head.rspCode==0){
					login = true;
					localStorage.setItem("userid", data.userid);
					localStorage.setItem("username", data.username);
				}else{
					alert(data.head.rspMsg);
				}
			}
		});
		if(login){
			var url = require.toUrl('$UI/Erp/index.w');
			//justep.Portal.openWindow("index");
			//justep.Shell.showPage(url);
			this.comp("mainDialog").open();
		}
	};

	Model.prototype.registerBtnClick = function(event){
		//var url = require.toUrl('$UI/rayapp/regist.w');
		//justep.Portal.openWindow(url);
		this.comp("registDialog").open();
	};

	Model.prototype.modelLoad = function(event){
        if(localStorage.getItem("remeberMe")){
            var username = localStorage.getItem('loginName') ;
            var password = localStorage.getItem('password') ;
            this.comp("nameInput").set({value:username});
            this.comp("passwordInput").set({value:password});
            this.comp("toggle2").set("checked",true);
        }
	};

	Model.prototype.toggle2Change = function(event){
		if(this.comp("toggle2").checked == true){
			this.comp("toggle2").set("checked",false);
		}else{
			this.comp("toggle2").set("checked",true);
		}
	};

	Model.prototype.mainDialogReceive = function(event){
		window.opener.location.reload();
	};

	return Model;
});