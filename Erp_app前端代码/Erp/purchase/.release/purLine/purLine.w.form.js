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
var __parent0=require('$model/UI2/Erp/purchase/purLine'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cRFnuQv';
	this._flag_='9071e3c82d7ca0509836ecf798c5ed73';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"BATCH_NO":{"define":"BATCH_NO","label":"批次","name":"BATCH_NO","relation":"BATCH_NO","type":"String"},"LINE_NO":{"define":"LINE_NO","label":"行号","name":"LINE_NO","relation":"LINE_NO","type":"String"},"LOCATION_NO":{"define":"LOCATION_NO","label":"库位","name":"LOCATION_NO","relation":"LOCATION_NO","type":"String"},"ORDERNO":{"define":"ORDERNO","label":"订单号","name":"ORDERNO","relation":"ORDERNO","type":"String"},"PARTDESC":{"define":"PARTDESC","label":"零件名称","name":"PARTDESC","relation":"PARTDESC","type":"String"},"PARTNO":{"define":"PARTNO","label":"零件号","name":"PARTNO","relation":"PARTNO","type":"String"},"QTY":{"define":"QTY","label":"数量","name":"QTY","relation":"QTY","type":"String"},"RELEASE_NO":{"define":"RELEASE_NO","label":"下达号","name":"RELEASE_NO","relation":"RELEASE_NO","type":"String"}},"directDelete":false,"events":{},"idColumn":"PARTNO","isMain":false,"limit":20,"xid":"orderLineData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"LINE_NO":{"define":"LINE_NO","label":"行号","name":"LINE_NO","relation":"LINE_NO","type":"String"},"LOCATION":{"define":"LOCATION","label":"库位","name":"LOCATION","relation":"LOCATION","type":"String"},"LOT_BATCH_NO":{"define":"LOT_BATCH_NO","label":"批次","name":"LOT_BATCH_NO","relation":"LOT_BATCH_NO","type":"String"},"ORDERNO":{"define":"ORDERNO","label":"订单号","name":"ORDERNO","relation":"ORDERNO","type":"String"},"PARTDESC":{"define":"PARTDESC","label":"零件名称","name":"PARTDESC","relation":"PARTDESC","type":"String"},"PARTNO":{"define":"PARTNO","label":"零件号","name":"PARTNO","relation":"PARTNO","type":"String"},"QTY":{"define":"QTY","label":"数量","name":"QTY","relation":"QTY","type":"String"},"RELEASE_NO":{"define":"RELEASE_NO","label":"下达号","name":"RELEASE_NO","relation":"RELEASE_NO","type":"String"},"ReceiptReference":{"define":"ReceiptReference","label":"接收查询号","name":"ReceiptReference","relation":"ReceiptReference","type":"String"}},"directDelete":false,"events":{},"idColumn":"LINE_NO","isMain":false,"limit":20,"xid":"scanData"});
}}); 
return __result;});