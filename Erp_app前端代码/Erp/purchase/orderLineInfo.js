define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.windowReceiverReceive = function(event){
		this.comp("LINE_NO").set({value: event.data.LINE_NO});
		this.comp("RELEASE_NO").set({value: event.data.RELEASE_NO});
		this.comp("PARTNO").set({value: event.data.PARTNO});
		this.comp("PARTDESC").set({value: event.data.PARTDESC});
		this.comp("lot_batch_no").set({value: event.data.BATCH_NO});
		this.comp("QTY").set({value: event.data.QTY});
		this.comp("location").set({value: event.data.LOCATION_NO});
	};

	Model.prototype.submitBtnClick = function(event){
		this.owner.send({
						 LINE_NO:this.comp("LINE_NO").get('value'),
						 RELEASE_NO:this.comp("RELEASE_NO").get('value'),
						 PARTNO:this.comp("PARTNO").get('value'),
						 PARTDESC:this.comp("PARTDESC").get('value'),
						 QTY:this.comp("QTY").get('value'),
						 LOCATION:this.comp("location").get('value'),
						 ReceiptReference:this.comp("ReceiptReference").get('value'),
						 LOT_BATCH_NO:this.comp("lot_batch_no").get('value')});
		this.close();
	};

	return Model;
});