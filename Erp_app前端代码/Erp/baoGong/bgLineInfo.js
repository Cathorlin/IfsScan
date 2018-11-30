define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.windowReceiverReceive = function(event){
		this.comp("OrderNo").set({value: event.data.OrderNo});
		this.comp("ReleaseNo").set({value: event.data.ReleaseNo});
		this.comp("SequenceNo").set({value: event.data.SequenceNo});
		this.comp("OperationNo").set({value: event.data.OperationNo});
	};

	Model.prototype.submitBtnClick = function(event){
		var jsonData = "";
		jsonData += "[{";
		jsonData += "OrderNo:'"+this.comp('OrderNo').value+"',";
		jsonData += "ReleaseNo:'"+this.comp('ReleaseNo').value+"',";
		jsonData += "SequenceNo:'"+this.comp('SequenceNo').value+"',";
		jsonData += "OperationNo:'"+this.comp('OperationNo').value+"',";
		jsonData += "ReportedQty:'"+this.comp('ReportedQty').value+"'}]";
		var me = this;
		justep.Baas.sendRequest({
			"url" : "/Erp/ErpServices",
			"action" : "bgSubmit",
			"async" : false,
			"params" : {data:jsonData},
			"success" : function(data) {
				if(data.head.rspCode==0){
					justep.Util.hint(data.head.rspMsg, {type: 'success'});
					me.close();
				}else{
					justep.Util.hint(data.head.rspMsg, {type: 'danger'});
				}
			}
		});
	};

	return Model;
});