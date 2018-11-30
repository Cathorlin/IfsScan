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
var __parent0=require('$model/UI2/Erp/transfer/tranLine'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cuyMnme';
	this._flag_='e5456e2e65c16cc4b5487f5f98bd1a5c';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"inLocation":{"define":"inLocation","label":"入库","name":"inLocation","relation":"inLocation","type":"String"},"lot_batch_no":{"define":"lot_batch_no","label":"批次","name":"lot_batch_no","relation":"lot_batch_no","type":"String"},"outLocation":{"define":"outLocation","label":"出库","name":"outLocation","relation":"outLocation","type":"String"},"part_desc":{"define":"part_desc","label":"描述","name":"part_desc","relation":"part_desc","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"},"qty":{"define":"qty","label":"数量","name":"qty","relation":"qty","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"transportTaskLine"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"lot_batch_no":{"define":"lot_batch_no","label":"批次","name":"lot_batch_no","relation":"lot_batch_no","type":"String"},"part_desc":{"define":"part_desc","label":"零件名称","name":"part_desc","relation":"part_desc","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"},"qty":{"define":"qty","label":"数量","name":"qty","relation":"qty","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"scanData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"location":{"define":"location","label":"库位","name":"location","relation":"location","type":"String"}},"directDelete":false,"events":{},"idColumn":"location","isMain":false,"limit":1,"xid":"locationInfo"});
}}); 
return __result;});