define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/demo/native/common/pub").load();
	require("cordova!com.justep.cordova.plugin.barcodescanner");
	
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
				me.comp('purOrder').set({value: result.text});
			}
		}
		
		function onError(error) {
			me.comp('purOrder').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};

	Model.prototype.submitBtnClick = function(event){
		//var result = false;
		var me = this;
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "getPurchaseOrder",
			"async" : false,
			"params" : {orderNo:this.comp('purOrder').val(),userID:localStorage.getItem("userid")},
			"success" : function(data) {
				if(data.head.rspCode==0){
					me.comp("purLineDialog").open({data:{orderNo:data.body.orderHead.ROW.ORDER_NO,supplier:data.body.orderHead.ROW.VENDOR_NO,supplierName:data.body.orderHead.ROW.VENDOR_NAME,orderDate:data.body.orderHead.ROW.ORDER_DATE,orderLine:data.body.orderBody}});
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