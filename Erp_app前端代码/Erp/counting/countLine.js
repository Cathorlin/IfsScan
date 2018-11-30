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
		this.comp("countId").set({value: event.data.countId});
		this.comp("location").set({value: event.data.location});
		/*var countLine = event.data.countLineDatalocalStorage.getItem("countLineData");
		console.log(countLine)
		var data = this.comp("countLineData");
		for (var i = 0; i < countLine.length; i++) {
			data.newData({index : 0});
			data.setValue("PART_NO", countLine[i].PART_NO);
			data.setValue("LOT_BATCH_NO", countLine[i].LOT_BATCH_NO);
			data.setValue("QTY_ONHAND", countLine[i].QTY_ONHAND);
			data.setValue("OBJID", countLine[i].OBJID);
			data.setValue("OBJVERSION", countLine[i].OBJVERSION);
		}*/
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
		var countLineData = this.comp("countLineData");
		data.clear();
		countLineData.clear();
		this.close()
	};

	Model.prototype.submitBtnClick = function(event){
		var data = this.comp("scanData");
		var jsonData = localStorage.getItem("countLineData");
		/*data.each(function(param){
			jsonData += "{";
			jsonData += "part_no:'"+param.row.val('part_no')+"',";
			jsonData += "description:'"+param.row.val('description')+"',";
			jsonData += "lot_batch_no:'"+param.row.val('lot_batch_no')+"',";
			jsonData += "qty:'"+param.row.val('qty')+"'},";
		});
		jsonData = jsonData.substring(0, jsonData.length-1);
		jsonData += "]";*/
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "countSubmit",
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
				var countLineData = JSON.parse(localStorage.getItem("countLineData"));
				for (var i = 0; i < countLineData.length; i++) {
					if(countLineData[i].PART_NO == result.text.split(",")[0] && countLineData[i].LOT_BATCH_NO == result.text.split(",")[1]){
						flag = false;
						me.comp("countLineInfoDialog").open({data:{PART_NO:countLineData[i].PART_NO,
														 LOT_BATCH_NO:countLineData[i].LOT_BATCH_NO}})
					}
				}
				if(flag){
					alert("当前盘点报告没有此物料，请核实！");
				}
			}
		}
		
		function onError(error) {
			me.comp('purOrder').set({value: "扫描失败！" + error});
		}
		
		justep.barcodeScanner.scan(onSuccess, onError);
	};
	
	Model.prototype.smrLineDialogReceive = function(event){
		var data = this.comp("scanData");
		data.newData({index : 0});
		data.setValue("PART_NO", event.data.PART_NO);
		data.setValue("LOT_BATCH_NO", event.data.LOT_BATCH_NO);
		data.setValue("QtyCount1", event.data.QtyCount1);
		var countLineData = JSON.parse(localStorage.getItem("countLineData"));
		for (var i = 0; i < countLineData.length; i++) {
			if(countLineData[i].PART_NO == event.data.PART_NO && countLineData[i].LOT_BATCH_NO == event.data.LOT_BATCH_NO){
				countLineData[i].ISORNOT = 1;
				countLineData[i].QtyCount1 = event.data.QtyCount1;
			}
		}
		localStorage.setItem("countLineData", JSON.stringify(countLineData));
	};
	
	Model.prototype.fileListClick = function(event){

	};
	
	Model.prototype.button1Click = function(event){
		var me = this;
		this.comp("countListDialog").open({data:{countId:me.comp('countId').value,location:me.comp('location').value}});
	};
	
	return Model;
});