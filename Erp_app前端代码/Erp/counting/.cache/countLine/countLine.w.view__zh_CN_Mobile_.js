window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_6d4851cbc76b4e5e82a767119b49cbe8l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_6d8dabfb12674ff29fff605c817d7a37l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_ba65c9986e1845b0b8cee7822e191098l_zh_CNs_d_m/system/components/comp2.min.js','/v_bca782cfc8fc40d4bf7e775e332056fcl_zh_CNs_d_m/system/core.min.js','/v_f716b275811545efb8c2eae16639ce52l_zh_CNs_d_m/system/common.min.js','/v_a06788d5e8c84c5aba4fed3eecd1c74cl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
