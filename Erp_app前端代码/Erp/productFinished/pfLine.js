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
		this.comp("soId").set({value: event.data.soId});
		this.comp("part_no").set({value: event.data.part_no});
		this.comp("part_desc").set({value: event.data.part_desc});
		this.comp("qty").set({value: event.data.qty});
		this.comp("start_date").set({value: event.data.start_date});
		this.comp("end_date").set({value: event.data.end_date});
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
		var jsonData = "[";
		data.each(function(param){
			jsonData += "{";
			jsonData += "part_no:'"+param.row.val('part_no')+"',";
			jsonData += "description:'"+param.row.val('description')+"',";
			jsonData += "location:'"+param.row.val('location')+"',";
			jsonData += "lot_batch_no:'"+param.row.val('lot_batch_no')+"',";
			jsonData += "qty:'"+param.row.val('qty')+"'},";
		});
		jsonData = jsonData.substring(0, jsonData.length-1);
		jsonData += "]";
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "smrSubmit",
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
		var part_no = this.comp("part_no").value;
		function onSuccess(result) {
			if(result.text!=null && result.text!=""){
				if(part_no == result.text.split("|")[0]){
					flag = false;
					me.comp("pfLineInfoDialog").open({data:{part_no:part_no,
													 description:me.comp('part_desc').get('value'),
													 lot_batch_no:result.text.split("|")[1],
													 qty:me.comp('qty').value}})
				};
				if(flag){
					alert("扫描成品不属于此生产订单，请核实！");
				}
			}
		}
		
		function onError(error) {
			me.comp('part_no').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};
	
	Model.prototype.pfLineDialogReceive = function(event){
		var data = this.comp("scanData");
		data.newData({index : 0});
		data.setValue("part_no", event.data.part_no);
		data.setValue("description", event.data.description);
		data.setValue("location", event.data.location);
		data.setValue("lot_batch_no", event.data.lot_batch_no);
		data.setValue("qty", event.data.qty);
	};
	
	Model.prototype.fileListClick = function(event){

	};
	
	return Model;
});