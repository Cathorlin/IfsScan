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
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/bootstrap/table/table');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/Erp/counting/countLine'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cYV3Uby';
	this._flag_='49188f8253141090451d5b2a89fa162d';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"LOT_BATCH_NO":{"define":"LOT_BATCH_NO","label":"批次号","name":"LOT_BATCH_NO","relation":"LOT_BATCH_NO","type":"String"},"OBJID":{"define":"OBJID","label":"OBJID","name":"OBJID","relation":"OBJID","type":"String"},"OBJVERSION":{"define":"OBJVERSION","label":"OBJVERSION","name":"OBJVERSION","relation":"OBJVERSION","type":"String"},"PART_NO":{"define":"PART_NO","label":"零件号","name":"PART_NO","relation":"PART_NO","type":"String"},"QTY_ONHAND":{"define":"QTY_ONHAND","label":"当前数量","name":"QTY_ONHAND","relation":"QTY_ONHAND","type":"String"},"isornot":{"define":"isornot","label":"是否盘点","name":"isornot","relation":"isornot","rules":{"defaultValue":"justep.String.format(\"×\")"},"type":"String"}},"directDelete":false,"events":{},"idColumn":"PART_NO","isMain":false,"limit":20,"xid":"countLineData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"LOT_BATCH_NO":{"define":"LOT_BATCH_NO","label":"批次","name":"LOT_BATCH_NO","relation":"LOT_BATCH_NO","type":"String"},"OBJID":{"define":"OBJID","label":"OBJID","name":"OBJID","relation":"OBJID","type":"String"},"OBJVERSION":{"define":"OBJVERSION","label":"OBJVERSION","name":"OBJVERSION","relation":"OBJVERSION","type":"String"},"PART_NO":{"define":"PART_NO","label":"零件号","name":"PART_NO","relation":"PART_NO","type":"String"},"QTY_ONHAND":{"define":"QTY_ONHAND","label":"数量","name":"QTY_ONHAND","relation":"QTY_ONHAND","type":"String"},"QtyCount1":{"define":"QtyCount1","label":"盘点数量","name":"QtyCount1","relation":"QtyCount1","type":"String"}},"directDelete":false,"events":{},"idColumn":"PART_NO","isMain":false,"limit":20,"xid":"scanData"});
}}); 
return __result;});