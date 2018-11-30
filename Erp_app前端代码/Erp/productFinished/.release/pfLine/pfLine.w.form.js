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
var __parent0=require('$model/UI2/Erp/productFinished/pfLine'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='crU3Izu';
	this._flag_='61b2bcb5149b9866a9faf6d0f9ea7770';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"description":{"define":"description","label":"零件名称","name":"description","relation":"description","type":"String"},"location":{"define":"location","label":"库位","name":"location","relation":"location","type":"String"},"lot_batch_no":{"define":"lot_batch_no","label":"批次","name":"lot_batch_no","relation":"lot_batch_no","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"},"qty":{"define":"qty","label":"数量","name":"qty","relation":"qty","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"scanData"});
}}); 
return __result;});