define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require("$UI/system/lib/cordova/cordova");
	require("css!$UI/demo/native/common/pub").load();
	require("cordova!com.justep.cordova.plugin.barcodescanner");

	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.modelLoad = function(event){
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		// 加载完成
		function onDeviceReady() {
			me.comp("scanBtn").set({disabled: false});
		}
	};
	
	Model.prototype.scanBtnClick = function(event){
		var me = this;
		function onSuccess(result) {
			me.comp('location').set({value: result.text});
		}
		
		function onError(error) {
			me.comp('location').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};

	Model.prototype.windowReceiverReceive = function(event){
		var data = this.comp("ReceivePart");
		data.newData({index : 0});
		data.setValue("OrderNo", event.data.ORDER_NO);
		data.setValue("ReleaseNo", event.data.RELEASE_NO);
		data.setValue("SequanceNo", event.data.SEQUENCE_NO);
		data.setValue("Contract", event.data.CONTRACT);
		data.setValue("PartNo", event.data.PART_NO);
		data.setValue("LocationNo", event.data.LOCATION_NO);
		data.setValue("LotBatchNo", event.data.LOT_BATCH_NO);
		data.setValue("EngChgLevel", event.data.ENG_CHG_LEVEL);
		data.setValue("ActivitySeq", event.data.ACTIVITY_SEQ);
		data.setValue("Quantity", event.data.QTY_COMPLETE);
	};

	Model.prototype.submitBtnClick = function(event){
		var data = this.comp("ReceivePart");
		var jsonData = "[";
		jsonData += "{";
		jsonData += "OrderNo:'"+this.comp("OrderNo").get('value')+"',";
		jsonData += "ReleaseNo:'"+this.comp("ReleaseNo").get('value')+"',";
		jsonData += "SequanceNo:'"+this.comp("SequanceNo").get('value')+"',";
		jsonData += "Contract:'"+this.comp("Contract").get('value')+"',";
		jsonData += "PartNo:'"+this.comp("PartNo").get('value')+"',";
		jsonData += "LocationNo:'"+this.comp("LocationNo").get('value')+"',";
		jsonData += "LotBatchNo:'"+this.comp("LotBatchNo").get('value')+"',";
		jsonData += "SerialNo:'"+this.comp("SerialNo").get('value')+"',";
		jsonData += "WaivDevRejNo:'*',";
		jsonData += "Quantity:'"+this.comp("Quantity").get('value')+"',";
		data.each(function(param){
			jsonData += "EngChgLevel:'"+param.row.val('EngChgLevel')+"',";
			jsonData += "ActivitySeq:'"+param.row.val('ActivitySeq')+"'}";
		});
		jsonData += "]";
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "pfSubmit",
			"async" : false,
			"params" : {scanData:jsonData},
			"success" : function(data) {
				if(data.head.rspCode==0){
					justep.Util.hint(data.head.rspMsg, {type: 'success'});
					this.close();
				}else{
					justep.Util.hint(data.head.rspMsg, {type: 'danger'});
				}
			}
		});
	};

	return Model;
});