window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_b91c3429e6794278bf3f0edb20b781f5l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_d9cdd9ea7568459480d57652e9d7c65cl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_169010703a6c4b1d99081972b15323f7l_zh_CNs_d_m/system/components/comp2.min.js','/v_bc538cc82cf54019b091c6361778194fl_zh_CNs_d_m/system/core.min.js','/v_6d700d20b5f546948c6727e1e328e7d0l_zh_CNs_d_m/system/common.min.js','/v_403f4776465b402abeddae177f016df3l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
