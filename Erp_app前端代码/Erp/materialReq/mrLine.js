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
		this.comp("mrId").set({value: event.data.mrId});
		this.comp("customerNo").set({value: event.data.int_customer_no});
		this.comp("customerName").set({value: event.data.int_customer_name});
		var mrLine = event.data.mrLineData;
		var data = this.comp("mrLineData");
		for (var i = 0; i < mrLine.length; i++) {
			data.newData({index : 0});
			data.setValue("part_no", mrLine[i].part_no);
			data.setValue("description", mrLine[i].description);
			data.setValue("lot_batch_no", mrLine[i].lot_batch_no);
			data.setValue("qty", mrLine[i].qty);
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
		var mrLineData = this.comp("mrLineData");
		data.clear();
		mrLineData.clear();
		this.close()
	};

	Model.prototype.submitBtnClick = function(event){
		var data = this.comp("scanData");
		var jsonData = "[";
		data.each(function(param){
			jsonData += "{";
			jsonData += "part_no:'"+param.row.val('part_no')+"',";
			jsonData += "description:'"+param.row.val('description')+"',";
			jsonData += "lot_batch_no:'"+param.row.val('lot_batch_no')+"',";
			jsonData += "qty:'"+param.row.val('qty')+"'},";
		});
		jsonData = jsonData.substring(0, jsonData.length-1);
		jsonData += "]";
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "mrSubmit",
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
				var mrLineData = me.comp("mrLineData");
				mrLineData.each(function(param){
					if(param.row.val('part_no') == result.text.split("|")[0] && param.row.val('lot_batch_no') == result.text.split("|")[1]){
						flag = false;
						me.comp("mrLineInfoDialog").open({data:{part_no:param.row.val('part_no'),
														 description:param.row.val('description'),
														 lot_batch_no:param.row.val('lot_batch_no'),
														 qty:param.row.val('qty')}})
					}
				});
				if(flag){
					alert("当前订单没有此物料，请核实！");
				}
			}
		}
		function onError(error) {
			me.comp('purOrder').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};
	
	Model.prototype.mrLineDialogReceive = function(event){
		var data = this.comp("scanData");
		data.newData({index : 0});
		data.setValue("part_no", event.data.part_no);
		data.setValue("description", event.data.description);
		data.setValue("lot_batch_no", event.data.lot_batch_no);
		data.setValue("qty", event.data.qty);
	};
	
	Model.prototype.fileListClick = function(event){

	};
	
	return Model;
});