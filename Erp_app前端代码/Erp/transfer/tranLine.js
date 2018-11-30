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
		this.comp("tranId").set({value: event.data.tranId});
		var transportTaskLine = event.data.transportTaskLine;
		var data = this.comp("transportTaskLine");
		for (var i = 0; i < transportTaskLine.length; i++) {
			data.newData({index : 0});
			data.setValue("part_no", transportTaskLine[i].PART_NO);
			data.setValue("part_desc", transportTaskLine[i].PART_DESC);
			data.setValue("lot_batch_no", transportTaskLine[i].LOT_BATCH_NO);
			data.setValue("qty", transportTaskLine[i].QUANTITY);
			data.setValue("outLocation", transportTaskLine[i].FROM_LOCATION_NO);
			data.setValue("inLocation", transportTaskLine[i].TO_LOCATION_NO);
		}
	};
	
	Model.prototype.modelLoad = function(event){
		var me = this;
		document.addEventListener("deviceready", onDeviceReady, false);
		// 加载完成
		function onDeviceReady() {
			me.comp("scanPartBtn").set({disabled: false});
		}
	};
	
	
	// 返回按钮
	Model.prototype.backBtnClick = function(event) {
		var data = this.comp("scanData");
		var TransportTaskLine = this.comp("transportTaskLine");
		data.clear();
		TransportTaskLine.clear();
		this.close()
	};

	Model.prototype.submitBtnClick = function(event){
		/*var data = this.comp("scanData");
		var jsonData = "[";
		data.each(function(param){
			jsonData += "{";
			jsonData += "part_no:'"+param.row.val('part_no')+"',";
			jsonData += "description:'"+param.row.val('description')+"',";
			jsonData += "lot_batch_no:'"+param.row.val('lot_batch_no')+"',";
			jsonData += "qty:'"+param.row.val('qty')+"'},";
		});
		jsonData = jsonData.substring(0, jsonData.length-1);
		jsonData += "]";*/
		var tranId = this.comp("tranId").get('value');
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "tranSubmit",
			"async" : false,
			"params" : {scanData:tranId},
			"success" : function(data) {
				if(data.head.rspCode==0){
					justep.Util.hint("移库成功", {type: 'success'});
					var data = me.comp("scanData");
					var transportTaskLine = me.comp("transportTaskLine");
					data.clear();
					transportTaskLine.clear();
					me.close()
				}else{
					justep.Util.hint(data.head.rspMsg, {type: 'danger'});
				}
			}
		});
	};

	/*Model.prototype.scanLocationBtnClick = function(event){
		var me = this;
		var flag = true;
		function onSuccess(result) {
			var data = me.comp("locationInfo");
			data.newData({index : 0});
			data.setValue("location", result.text); 
		}
		
		function onError(error) {
			me.comp('purOrder').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};*/
	
	Model.prototype.scanPartBtnClick = function(event){
		var me = this;
		var flag = true;
		function onSuccess(result) {
			if(result.text!=null && result.text!=""){
				var transportTaskLine = me.comp("transportTaskLine");
				transportTaskLine.each(function(param){
					if(param.row.val('part_no') == result.text.split("|")[0] && param.row.val('lot_batch_no') == result.text.split("|")[1]){
						flag = false;
						me.comp("tranLineInfoDialog").open({data:{part_no:param.row.val('part_no'),
														 part_desc:param.row.val('part_desc'),
														 lot_batch_no:param.row.val('lot_batch_no'),
														 qty:param.row.val('qty')}})
					}
				});
				if(flag){
					alert("当前发货单没有此物料或批次不同，请核实！");
				}
			}
		}
		
		function onError(error) {
			me.comp('purOrder').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};
	
	Model.prototype.fileListClick = function(event){

	};
	
	Model.prototype.tranLineDialogReceive = function(event){
		var data = this.comp("scanData");
		data.newData({index : 0});
		data.setValue("part_no", event.data.part_no);
		data.setValue("part_desc", event.data.part_desc);
		data.setValue("lot_batch_no", event.data.lot_batch_no);
		data.setValue("qty", event.data.qty);
	};
	
	return Model;
});