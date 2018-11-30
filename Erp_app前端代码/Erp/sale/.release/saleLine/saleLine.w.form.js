define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/bootstrap/accordion/accordion');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/dataTables/dataTables');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/bootstrap/table/table');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/Erp/sale/saleLine'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cfa6NJb';
	this._flag_='0367324fbbbb82bd40f53a24eefc1d90';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"Shipped_Qty_On_Shipment":{"define":"Shipped_Qty_On_Shipment","label":"发货数量","name":"Shipped_Qty_On_Shipment","relation":"Shipped_Qty_On_Shipment","type":"String"},"description":{"define":"description","label":"描述","name":"description","relation":"description","type":"String"},"location_no":{"define":"location_no","label":"库位","name":"location_no","relation":"location_no","type":"String"},"lot_batch_no":{"define":"lot_batch_no","label":"批次","name":"lot_batch_no","relation":"lot_batch_no","type":"String"},"part_no":{"define":"part_no","label":"销售件号","name":"part_no","relation":"part_no","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"shipmentLineData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"Available_Qty":{"define":"Available_Qty","label":"可用数量","name":"Available_Qty","relation":"Available_Qty","type":"String"},"Shipped_Qty_On_Shipment":{"define":"Shipped_Qty_On_Shipment","label":"发货数量","name":"Shipped_Qty_On_Shipment","relation":"Shipped_Qty_On_Shipment","type":"String"},"description":{"define":"description","label":"零件名称","name":"description","relation":"description","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"scanData"});
}}); 
return __result;});