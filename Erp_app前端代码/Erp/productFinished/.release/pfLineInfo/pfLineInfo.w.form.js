define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/bootstrap/table/table');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/Erp/productFinished/pfLineInfo'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyYvIJz';
	this._flag_='0e97dfd4554b33c8d2a4ab3b17e16b3d';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"ActivitySeq":{"define":"ActivitySeq","label":"ActivitySeq","name":"ActivitySeq","relation":"ActivitySeq","type":"String"},"Contract":{"define":"Contract","label":"域","name":"Contract","relation":"Contract","type":"String"},"EngChgLevel":{"define":"EngChgLevel","label":"EngChgLevel","name":"EngChgLevel","relation":"EngChgLevel","type":"String"},"LocationNo":{"define":"LocationNo","label":"库位号","name":"LocationNo","relation":"LocationNo","type":"String"},"LotBatchNo":{"define":"LotBatchNo","label":"批次号","name":"LotBatchNo","relation":"LotBatchNo","type":"String"},"OrderNo":{"define":"OrderNo","label":"订单号","name":"OrderNo","relation":"OrderNo","type":"String"},"PartNo":{"define":"PartNo","label":"零件号","name":"PartNo","relation":"PartNo","type":"String"},"Quantity":{"define":"Quantity","label":"数量","name":"Quantity","relation":"Quantity","type":"String"},"ReleaseNo":{"define":"ReleaseNo","label":"下达号","name":"ReleaseNo","relation":"ReleaseNo","type":"String"},"SequanceNo":{"define":"SequanceNo","label":"序列","name":"SequanceNo","relation":"SequanceNo","type":"String"},"SerialNo":{"define":"SerialNo","label":"序列号","name":"SerialNo","relation":"SerialNo","type":"String"},"WaivDevRejNo":{"define":"WaivDevRejNo","label":"WDR","name":"WaivDevRejNo","relation":"WaivDevRejNo","type":"String"}},"directDelete":false,"events":{},"idColumn":"OrderNo","isMain":false,"limit":20,"xid":"ReceivePart"});
}}); 
return __result;});