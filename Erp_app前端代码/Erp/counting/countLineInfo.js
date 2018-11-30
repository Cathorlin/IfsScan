define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.windowReceiverReceive = function(event){
		this.comp("part_no").set({value: event.data.PART_NO});
		this.comp("lot_batch_no").set({value: event.data.LOT_BATCH_NO});
	};

	Model.prototype.submitBtnClick = function(event){
		this.owner.send({PART_NO:this.comp("part_no").get('value'),
						 LOT_BATCH_NO:this.comp("lot_batch_no").get('value'),
						 QtyCount1:this.comp("qty").get('value')});
		this.close();
	};

	return Model;
});