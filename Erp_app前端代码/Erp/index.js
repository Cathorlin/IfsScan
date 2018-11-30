define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	document.addEventListener("deviceready", function() {
		var exitAppTicker = 0;
		var listener = function(){
			if(exitAppTicker === 0){
				exitAppTicker++;
				var msg = $('<div style="display: none;z-index:99999;position: fixed;width: 100%;bottom: 25px;text-align: center;"><span style="font-size:18px;border-radius: 3px;padding: 7px;background-color: #383838;color: #F0F0F0;">再按一次退出应用</span></div>').appendTo('body');
				msg.fadeIn(400).delay(2000).fadeOut(400,function(){
					exitAppTicker = 0;
					msg.remove();
				});
			}else if(exitAppTicker == 1){
				navigator.app.exitApp();
			}	
		};
		document.addEventListener('backbutton', listener, false);
		$(window).on('beforeunload', function(){
			document.removeEventListener('backbutton', listener, false);
	    });
    }, false);

	Model.prototype.modelLoad = function(event){
		this.comp("output1").set("value",localStorage.getItem("username"));
		this.comp("output2").set("value",localStorage.getItem("userid"));
	};

	Model.prototype.button16Click = function(event){
		this.comp("messageDialog").show({
			type : "OK",
			title : "技术支持",
			message : "开发人员：雷磊 电话 18580633334"
		});
		
	};

	Model.prototype.quitClick = function(event){
		var close = this.owner;
		this.comp("messageDialog").show({
			type : "YesNo",
			message : "确认要切换其他用户吗？",
			callback : function(param) {
                if(param.button == 'yes'){
                	close.close();
                }
            }
		});
	};

	Model.prototype.openPurClick = function(event){
		this.comp("purchaseDialog").open();
	};

	Model.prototype.openSaleClick = function(event){
		this.comp("saleDialog").open();
	};

	Model.prototype.openTranClick = function(event){
		this.comp("transferDialog").open();
	};

	Model.prototype.openMrClick = function(event){
		this.comp("mrDialog").open();
	};

	Model.prototype.openSmrClick = function(event){
		this.comp("smrDialog").open();
	};

	Model.prototype.openCountClick = function(event){
		this.comp("countDialog").open();
	};
	
	Model.prototype.openPfClick = function(event){
		this.comp("pfDialog").open();
	};

	Model.prototype.openBgClick = function(event){
		this.comp("bgDialog").open();
	};

	Model.prototype.openJjClick = function(event){
		this.comp("jjDialog").open();
	};
	
	Model.prototype.openZtClick = function(event){
		this.comp("ztDialog").open();
	};

	return Model;
});