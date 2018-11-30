window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_6216_nol_zh_CNs_desktopd_pc/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_6216_nol_zh_CNs_desktopd_pc/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_6216_nol_zh_CNs_desktopd_pc/system/components/comp2.min.js','/v_6216_nol_zh_CNs_desktopd_pc/system/core.min.js','/v_6216_nol_zh_CNs_desktopd_pc/system/common.min.js','/v_6216_nol_zh_CNs_desktopd_pc/system/components/comp.min.js']);define(function(require){
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
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"description":{"define":"description","label":"描述","name":"description","relation":"description","type":"String"},"inLocation":{"define":"inLocation","label":"入库","name":"inLocation","relation":"inLocation","type":"String"},"lot_batch_no":{"define":"lot_batch_no","label":"批次","name":"lot_batch_no","relation":"lot_batch_no","type":"String"},"outLocation":{"define":"outLocation","label":"出库","name":"outLocation","relation":"outLocation","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"},"qty":{"define":"qty","label":"数量","name":"qty","relation":"qty","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"transportTaskLine"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"description":{"define":"description","label":"零件名称","name":"description","relation":"description","type":"String"},"lot_batch_no":{"define":"lot_batch_no","label":"批次","name":"lot_batch_no","relation":"lot_batch_no","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"},"qty":{"define":"qty","label":"数量","name":"qty","relation":"qty","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"scanData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"location":{"define":"location","label":"库位","name":"location","relation":"location","type":"String"}},"directDelete":false,"events":{},"idColumn":"location","isMain":false,"limit":1,"xid":"locationInfo"});
}}); 
return __result;});
