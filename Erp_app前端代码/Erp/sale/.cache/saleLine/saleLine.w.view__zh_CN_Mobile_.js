window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_5ec3cf8d8d48469fb60798f836077b95l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_751e1f0cd2b848deb88b1897e0242a0cl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/dataTables/css/responsive,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_12dd5118d93041ea9215b6f63668561el_zh_CNs_d_m/system/components/comp2.min.js','/v_4bafb15db1d64c7585cf3be25419715dl_zh_CNs_d_m/system/core.min.js','/v_b0dda965103a449da483d4ed35516629l_zh_CNs_d_m/system/common.min.js','/v_a698e0abbbb74d30aab874052c5b58a1l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
var __parent0=require('$model/UI2/Erp/sale/saleLine'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cfa6NJb';
	this._flag_='0367324fbbbb82bd40f53a24eefc1d90';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"Shipped_Qty_On_Shipment":{"define":"Shipped_Qty_On_Shipment","label":"发货数量","name":"Shipped_Qty_On_Shipment","relation":"Shipped_Qty_On_Shipment","type":"String"},"description":{"define":"description","label":"描述","name":"description","relation":"description","type":"String"},"location_no":{"define":"location_no","label":"库位","name":"location_no","relation":"location_no","type":"String"},"lot_batch_no":{"define":"lot_batch_no","label":"批次","name":"lot_batch_no","relation":"lot_batch_no","type":"String"},"part_no":{"define":"part_no","label":"销售件号","name":"part_no","relation":"part_no","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"shipmentLineData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"Available_Qty":{"define":"Available_Qty","label":"可用数量","name":"Available_Qty","relation":"Available_Qty","type":"String"},"Shipped_Qty_On_Shipment":{"define":"Shipped_Qty_On_Shipment","label":"发货数量","name":"Shipped_Qty_On_Shipment","relation":"Shipped_Qty_On_Shipment","type":"String"},"description":{"define":"description","label":"零件名称","name":"description","relation":"description","type":"String"},"part_no":{"define":"part_no","label":"零件号","name":"part_no","relation":"part_no","type":"String"}},"directDelete":false,"events":{},"idColumn":"part_no","isMain":false,"limit":20,"xid":"scanData"});
}}); 
return __result;});
