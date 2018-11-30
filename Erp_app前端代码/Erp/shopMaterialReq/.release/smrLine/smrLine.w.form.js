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
var __parent0=require('$model/UI2/Erp/shopMaterialReq/smrLine'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='camuQRf';
	this._flag_='fa60fabd06b9cc3d49da570d93f9fa3c';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"description":{"define":"description","label":"描述","name":"description","relation":"description","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"},"qty":{"define":"qty","label":"数量","name":"qty","relation":"qty","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"smrLineData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"description":{"define":"description","label":"零件名称","name":"description","relation":"description","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"},"qty":{"define":"qty","label":"数量","name":"qty","relation":"qty","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"scanData"});
}}); 
return __result;});