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
		var countLine = JSON.parse(localStorage.getItem("countLineData"));
		var data = this.comp("countListData");
		for (var i = 0; i < countLine.length; i++) {
			data.newData({index : 0});
			data.setValue("part_no", countLine[i].PART_NO);
			data.setValue("lot_batch_no", countLine[i].LOT_BATCH_NO);
			data.setValue("qty", countLine[i].QTY_ONHAND);
			if(countLine[i].ISORNOT==1){
				data.setValue("isornot", "√");
			}else{
				data.setValue("isornot", "×");
			}
		}
	};
	
	// 返回按钮
	Model.prototype.backBtnClick = function(event) {
		var countListData = this.comp("countListData");
		countListData.clear();
		this.close()
	};

	return Model;
});