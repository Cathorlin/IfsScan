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
		this.comp("shipmentId").set({value: event.data.shipmentId});
		this.comp("order_no").set({value: event.data.order_no});
		this.comp("customerName").set({value: event.data.customerName});
		var shipmentLine = JSON.parse(localStorage.getItem("shipmentLine"));
		var data = this.comp("shipmentLineData");
		for (var i = 0; i < shipmentLine.length; i++) {
			data.newData({index : 0});
			data.setValue("part_no", shipmentLine[i].CATALOG_NO);
			data.setValue("description", shipmentLine[i].CATALOG_DESC);
			data.setValue("Shipped_Qty_On_Shipment", shipmentLine[i].QTY_ASSIGNED);
			data.setValue("location_no", shipmentLine[i].LOCATION_NO);
			data.setValue("lot_batch_no", shipmentLine[i].LOT_BATCH_NO);
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
		var shipmentLineData = this.comp("shipmentLineData");
		data.clear();
		shipmentLineData.clear();
		this.close()
	};

	Model.prototype.submitBtnClick = function(event){
		/*var data = this.comp("shipmentLineData");
		var jsonData = "[";
		data.each(function(param){
			jsonData += "{";
			jsonData += "part_no:'"+param.row.val('part_no')+"',";
			jsonData += "description:'"+param.row.val('description')+"',";
			jsonData += "Shipped_Qty_On_Shipment:'"+param.row.val('Shipped_Qty_On_Shipment')+"',";
			jsonData += "location_no:'"+param.row.val('location_no')+"'},";
		});
		jsonData = jsonData.substring(0, jsonData.length-1);
		jsonData += "]";*/
		var me = this;
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "saleSubmit",
			"async" : false,
			"params" : {order_no:this.comp("order_no").get('value'),pick_list_no:this.comp("shipmentId").get('value')},
			"success" : function(data) {
				if(data.head.rspCode==0){
					justep.Util.hint("发货成功", {type: 'success'});
					var data = me.comp("scanData");
					var shipmentLineData = me.comp("shipmentLineData");
					data.clear();
					shipmentLineData.clear();
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
				var shipmentLineData = me.comp("shipmentLineData");
				shipmentLineData.each(function(param){
					if(param.row.val('part_no') == result.text){
						flag = false;
						me.comp("saleLineDialog").open({data:{part_no:param.row.val('part_no'),
														 description:param.row.val('description'),
														 Shipped_Qty_On_Shipment:param.row.val('Shipped_Qty_On_Shipment'),
														 Available_Qty:param.row.val('Available_Qty')}})
					}
				});
				if(flag){
					alert("当前发货单没有此物料，请核实！");
				}
			}
		}
		
		function onError(error) {
			me.comp('purOrder').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};
	
	Model.prototype.saleLineDialogReceive = function(event){
		var data = this.comp("scanData");
		data.newData({index : 0});
		data.setValue("part_no", event.data.part_no);
		data.setValue("description", event.data.description);
		data.setValue("Shipped_Qty_On_Shipment", event.data.Shipped_Qty_On_Shipment);
		data.setValue("Available_Qty", event.data.Available_Qty);
	};
	
	Model.prototype.fileListClick = function(event){

	};
	
	return Model;
});