define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.windowReceiverReceive = function(event){
		this.comp("part_no").set({value: event.data.part_no});
		this.comp("description").set({value: event.data.description});
		this.comp("Shipped_Qty_On_Shipment").set({value: event.data.Shipped_Qty_On_Shipment});
		this.comp("Available_Qty").set({value: event.data.Available_Qty});
	};

	Model.prototype.submitBtnClick = function(event){
		this.owner.send({part_no:this.comp("part_no").get('value'),
						 description:this.comp("description").get('value'),
						 Shipped_Qty_On_Shipment:this.comp("Shipped_Qty_On_Shipment").get('value'),
						 Available_Qty:this.comp("Available_Qty").get('value')});
		this.close();
	};

	return Model;
});