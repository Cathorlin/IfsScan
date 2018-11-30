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
		this.comp("purOrderNo").set({value: event.data.orderNo});
		this.comp("purSupplier").set({value: event.data.supplier});
		this.comp("purSupplierName").set({value: event.data.supplierName});
		this.comp("orderDate").set({value: event.data.orderDate});
		var orderLine = event.data.orderLine;
		var data = this.comp("orderLineData");
		for (var i = 0; i < orderLine.length; i++) {
			data.newData({index : 0});
			data.setValue("ORDERNO", orderLine[i].ORDERNO);
			data.setValue("LINE_NO", orderLine[i].LINE_NO);
			data.setValue("RELEASE_NO", orderLine[i].RELEASE_NO);
			data.setValue("PARTNO", orderLine[i].PARTNO);
			data.setValue("PARTDESC", orderLine[i].PARTDESC);
			data.setValue("QTY", orderLine[i].QTY);
			data.setValue("BATCH_NO", orderLine[i].BATCH_NO);
			data.setValue("LOCATION_NO", orderLine[i].LOCATION_NO);
		}
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
		var orderLine = this.comp("orderLineData");
		data.clear();
		orderLine.clear();
		this.close()
	};

	Model.prototype.submitBtnClick = function(event){
		var data = this.comp("scanData");
		var me = this;
		var jsonData = "[";
		data.each(function(param){
			jsonData += "{";
			jsonData += "OrderNo:'"+me.comp("purOrderNo").get('value')+"',";
			jsonData += "LineNo:'"+param.row.val('LINE_NO')+"',";
			jsonData += "ReleaseNo:'"+param.row.val('RELEASE_NO')+"',";
			jsonData += "ReceiptReference:'"+param.row.val('ReceiptReference')+"',";
			jsonData += "PartNo:'"+param.row.val('PARTNO')+"',";
			jsonData += "QtyArrived:'"+param.row.val('QTY')+"',";
			jsonData += "InvQtyArrived:'"+param.row.val('QTY')+"',";
			jsonData += "ReceiveCase:'接收到来料区',";
			jsonData += "LocationNo:'"+param.row.val('LOCATION')+"',";
			jsonData += "LotBatchNo:'"+param.row.val('LOT_BATCH_NO')+"'},";
		});
		jsonData = jsonData.substring(0, jsonData.length-1);
		jsonData += "]";
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "purSubmit",
			"async" : false,
			"params" : {scanData:jsonData},
			"success" : function(data) {
				if(data.head.rspCode==0){
					justep.Util.hint("接收成功", {type: 'success'});
					var data = me.comp("scanData");
					var orderLine = me.comp("orderLineData");
					data.clear();
					orderLine.clear();
					me.close()
				}else{
					justep.Util.hint(data.head.rspMsg, {type: 'danger'});
				}
			}
		});
	};

	Model.prototype.scanBtnClick = function(event){
		var me = this;
		var flag = true;
		function onSuccess(result) {
			if(result.text!=null && result.text!=""){
				var orderLine = me.comp("orderLineData");
				orderLine.each(function(param){
					if(param.row.val('PARTNO') == result.text){
						flag = false;
						/*if(confirm('匹配到物料行号为'+param.row.val('LINE_NO')+',下达号为'+param.row.val('RELEASE_NO')+',需求数量为'+param.row.val('QTY')+'的订单行，请问是否接收物料至该行')){*/
							me.comp("orderLineDialog").open({data:{
								 LINE_NO:param.row.val('LINE_NO'),
								 RELEASE_NO:param.row.val('RELEASE_NO'),
								 PARTNO:param.row.val('PARTNO'),
								 PARTDESC:param.row.val('PARTDESC'),
								 BATCH_NO:param.row.val('BATCH_NO'),
								 LOCATION_NO:param.row.val('LOCATION_NO'),
								 QTY:param.row.val('QTY')}})
						/*}*/
					}
				});
				if(flag){
					justep.Util.hint("当前订单没有此物料，请核实！", {type: 'danger'});
				}
			}
		}
		
		function onError(error) {
			me.comp('purOrder').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};
	
	Model.prototype.orderLineDialogReceive = function(event){
		var data = this.comp("scanData");
		data.newData({index : 0});
		data.setValue("LINE_NO", event.data.LINE_NO);
		data.setValue("RELEASE_NO", event.data.RELEASE_NO);
		data.setValue("PARTNO", event.data.PARTNO);
		data.setValue("PARTDESC", event.data.PARTDESC);
		data.setValue("QTY", event.data.QTY);
		data.setValue("LOCATION", event.data.LOCATION);
		data.setValue("LOT_BATCH_NO", event.data.LOT_BATCH_NO);
		data.setValue("ReceiptReference", event.data.ReceiptReference);
	};
	
	Model.prototype.fileListClick = function(event){

	};
	
	return Model;
});