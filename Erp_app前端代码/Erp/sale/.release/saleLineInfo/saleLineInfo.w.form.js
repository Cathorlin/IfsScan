define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/bootstrap/table/table');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/Erp/sale/saleLineInfo'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cbiQRFz';
	this._flag_='b80a37e9a1eda2d557a04b20ec291fab';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
}}); 
return __result;});