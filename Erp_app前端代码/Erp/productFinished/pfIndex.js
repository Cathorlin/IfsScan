define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/demo/native/common/pub").load();
	require("cordova!com.justep.cordova.plugin.barcodescanner");
	var me = this;
	var Model = function(){
		this.callParent();
		this.STORE_ID = "com.justep.demo.advice.barcodedata";
	};

	Model.prototype.modelLoad = function(event){
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		// 加载完成
		function onDeviceReady() {
			me.comp("scanBtn").set({disabled: false});
			
			if(localStorage.getItem(me.STORE_ID) != "")
				me.comp("fileData").loadData(JSON.parse(localStorage.getItem(me.STORE_ID)));
		}
	};
	
	// 关闭功能
	Model.prototype.backBtnClick = function(event) {
		localStorage.setItem(this.STORE_ID, JSON.stringify(this.comp("fileData").toJson(false)));
		justep.Shell.closePage();
	};

	Model.prototype.scanBtnClick = function(event){
		var data = this.comp("fileData");
		var me = this;
		function onSuccess(result) {
			if(result.text!=null && result.text!=""){
				data.newData({index : 0});
				data.setValue("filePath", result.text);
				data.setValue("fileName", result.format);
				data.setValue('createTime', justep.Date.toString(new Date(), justep.Date.DEFAULT_FORMAT));
				me.comp('soId').set({value: result.text});
			}
		}
		
		function onError(error) {
			me.comp('soId').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};

	Model.prototype.submitBtnClick = function(event){
		//var result = false;
		var me = this;
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "getPf",
			"async" : false,
			"params" : {soId:this.comp('soId').val()},
			"success" : function(data) {
				if(data.head.rspCode==0){
					me.comp("pfLineInfoDialog").open({data:{
					ORDER_NO:data.body.OrderHead.ROW.ORDER_NO,
					RELEASE_NO:data.body.OrderHead.ROW.RELEASE_NO,
					SEQUENCE_NO:data.body.OrderHead.ROW.SEQUENCE_NO,
					CONTRACT:data.body.OrderHead.ROW.CONTRACT,
					PART_NO:data.body.OrderHead.ROW.PART_NO,
					LOCATION_NO:data.body.OrderHead.ROW.LOCATION_NO,
					LOT_BATCH_NO:data.body.OrderHead.ROW.LOT_BATCH_NO,
					ENG_CHG_LEVEL:data.body.OrderHead.ROW.ENG_CHG_LEVEL,
					ACTIVITY_SEQ:data.body.OrderHead.ROW.ACTIVITY_SEQ,
					QTY_COMPLETE:data.body.OrderHead.ROW.QTY_COMPLETE}});
				}else{
					justep.Util.hint(data.head.rspMsg, {type: 'danger'});
				}
			}
		});
		/*if(result){
			//var url = require.toUrl('$UI/Erp/index.w');
			//justep.Portal.openWindow("index");
			//justep.Shell.showPage(url);
			this.comp("purLineDialog").open({data:{a:'123',b:'456'}});
		}*/
	};

	// 清空历史记录
	Model.prototype.deleteBtnClick = function(event) {
		this.comp("fileData").clear();
		localStorage.setItem(this.STORE_ID, "");
	};
	
	return Model;
});