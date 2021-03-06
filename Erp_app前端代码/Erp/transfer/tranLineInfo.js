define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.windowReceiverReceive = function(event){
		this.comp("part_no").set({value: event.data.part_no});
		this.comp("part_desc").set({value: event.data.part_desc});
		this.comp("lot_batch_no").set({value: event.data.lot_batch_no});
		this.comp("qty").set({value: event.data.qty});
	};

	Model.prototype.submitBtnClick = function(event){
		this.owner.send({part_no:this.comp("part_no").get('value'),
						 part_desc:this.comp("part_desc").get('value'),
						 lot_batch_no:this.comp("lot_batch_no").get('value'),
						 qty:this.comp("qty").get('value')});
		this.close();
	};

	return Model;
});