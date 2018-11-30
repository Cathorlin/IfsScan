window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_516422082ff34c4cb3ba99ad552ab1bbl_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_37184e1e0b9d434298b0ccb3110087fel_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_450b7ffd1f7a4268ab3a21b37e315922l_zh_CNs_d_m/system/components/comp2.min.js','/v_c392bdd75cc141b783e779546ce0eadbl_zh_CNs_d_m/system/core.min.js','/v_5b6e683bfa274d4db185d54e7c92cf58l_zh_CNs_d_m/system/common.min.js','/v_549a55ddd25941e5aa3eb0a6089f91b2l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
