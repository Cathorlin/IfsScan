define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.windowReceiverReceive = function(event){
		this.comp("operationName").set({value: event.data.operationName});
		this.comp("soId").set({value: event.data.soId});
		this.comp("qty").set({value: event.data.qty});
		this.comp("yjjQty").set({value: event.data.yjjQty});
		this.comp("part_no").set({value: event.data.part_no});
		this.comp("part_desc").set({value: event.data.part_desc});
		this.comp("jiao").set({value: event.data.jiao});
		this.comp("bcjjqty").set({value: event.data.bcjjQty});
		this.comp("jjqty").set({value: event.data.bcjjQty});
	};

	Model.prototype.submitBtnClick = function(event){
		if(this.comp('qty').value-this.comp('yjjQty').value>=this.comp('jjqty').value){
			var jsonData = "";
			jsonData += "{";
			jsonData += "operationName:'"+this.comp('operationName').value+"',";
			jsonData += "soId:'"+this.comp('soId').value+"',";
			jsonData += "qty:'"+this.comp('qty').value+"',";
			jsonData += "yjjQty:'"+this.comp('yjjQty').value+"',";
			jsonData += "part_no:'"+this.comp('part_no').value+"',";
			jsonData += "part_desc"+this.comp('part_desc').value+"',";
			jsonData += "jjqty:'"+this.comp('jjqty').value+"'}";
			var me = this;
			justep.Baas.sendRequest({
				"url" : "/Erp/ErpServices",
				"action" : "jiejianSubmit",
				"async" : false,
				"params" : {data:jsonData},
				"success" : function(data) {
					if(data.result==1){
						me.comp('jjqty').clear();
						me.close();
					}else{
						alert(data.msg);
					}
				}
			});
		}else{
			alert("报工数量超出订单数量！");
		}
	};

	return Model;
});