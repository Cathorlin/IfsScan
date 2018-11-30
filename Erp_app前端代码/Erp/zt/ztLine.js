define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/demo/native/common/pub").load();
	require("cordova!com.justep.cordova.plugin.barcodescanner");

	var Model = function(){
		this.callParent();
	};
	
	//获取
	Model.prototype.windowReceiverReceive = function(event){
		this.comp("tpNo").set({value: event.data.tpNo});
	};
	
	Model.prototype.modelLoad = function(event){
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		// 加载完成
		function onDeviceReady() {
			me.comp("scanBtn").set({disabled: false});
		}
	};
	
	
	// 返回按钮
	Model.prototype.backBtnClick = function(event) {
		var data = this.comp("scanData");
		data.clear();
		this.close()
	};

	Model.prototype.submitBtnClick = function(event){
		var data = this.comp("scanData");
		var me = this;
		var jsonData = "[";
		data.each(function(param){
			jsonData += "{";
			jsonData += "tpNo:'"+me.comp("tpNo").get('value')+"',";
			jsonData += "sonCode:'"+param.row.val('sonCode')+"'},";
		});
		jsonData = jsonData.substring(0, jsonData.length-1);
		jsonData += "]";
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "ztSubmit",
			"async" : false,
			"params" : {scanData:jsonData},
			"success" : function(data) {
				/*if(data.login==1){
					login = true;
					localStorage.setItem("userid", data.userid);
					localStorage.setItem("username", data.username);
				}else{
					alert(data.msg);
				}*/
			}
		});
	};

	Model.prototype.scanBtnClick = function(event){
		var me = this;
		var flag = true;
		function onSuccess(result) {
			if(result.text!=null && result.text!=""){
				var data = me.comp("scanData");
				data.newData({index : 0});
				data.setValue("sonCode", result.text);
				me.comp("count").set({value:data.getCount()});
			}
		}
		function onError(error) {
			me.comp('purOrder').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};
	
	Model.prototype.i9Click = function(event){
		var data = this.comp("scanData");
		data.deleteData(data.getCurrentRow());
		this.comp("count").set({value:data.getCount()});
	};
	
	Model.prototype.scanBtn1Click = function(event){
		var data = this.comp("scanData");
		data.newData({index : 0});
		data.setValue("sonCode", "123123");
		this.comp("count").set({value:data.getCount()});
	};
	
	return Model;
});