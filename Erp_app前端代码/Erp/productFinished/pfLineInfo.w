<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:7px;left:84px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="ReceivePart" idColumn="OrderNo"><column label="订单号" name="OrderNo" type="String" xid="xid1"></column>
  <column label="下达号" name="ReleaseNo" type="String" xid="xid2"></column>
  <column label="序列" name="SequanceNo" type="String" xid="xid3"></column>
  <column label="域" name="Contract" type="String" xid="xid4"></column>
  <column label="零件号" name="PartNo" type="String" xid="xid5"></column>
  <column label="库位号" name="LocationNo" type="String" xid="xid6"></column>
  <column label="批次号" name="LotBatchNo" type="String" xid="xid7"></column>
  <column label="序列号" name="SerialNo" type="String" xid="xid8"></column>
  <column label="EngChgLevel" name="EngChgLevel" type="String" xid="xid9"></column>
  <column label="WDR" name="WaivDevRejNo" type="String" xid="xid10"></column>
  <column label="ActivitySeq" name="ActivitySeq" type="String" xid="xid11"></column>
  <column label="数量" name="Quantity" type="String" xid="xid12"></column></div></div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver" onReceive="windowReceiverReceive"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="成品信息"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">成品信息</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><ul xid="ul1">
   <li class="list-group-item" xid="li1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit14">
   <label class="x-label" xid="label12"><![CDATA[域]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="Contract" style="text-align:right;" bind-ref='$model.ReceivePart.ref("Contract")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit11">
   <label class="x-label" xid="label9">订单号</label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="OrderNo" style="text-align:right;" bind-ref='$model.ReceivePart.ref("OrderNo")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit10">
   <label class="x-label" xid="label8"><![CDATA[下达号]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="ReleaseNo" style="text-align:right;" bind-ref='$model.ReceivePart.ref("ReleaseNo")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit13">
   <label class="x-label" xid="label11"><![CDATA[序列]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="SequanceNo" style="text-align:right;" bind-ref='$model.ReceivePart.ref("SequanceNo")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1">零件号</label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="PartNo" style="text-align:right;" bind-ref='$model.ReceivePart.ref("PartNo")'></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="labe3"><![CDATA[数量]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="Quantity" style="text-align:right;" bind-ref='$model.ReceivePart.ref("Quantity")'></input></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
   <label class="x-label" xid="label4"><![CDATA[库位]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="LocationNo" style="text-align:right;" bind-ref='$model.ReceivePart.ref("LocationNo")' readonly="true"></input></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit15">
   <label class="x-label" xid="label13"><![CDATA[批次号]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="LotBatchNo" style="text-align:right;" bind-ref='$model.ReceivePart.ref("LotBatchNo")'></input></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit16">
   <label class="x-label" xid="label14"><![CDATA[序列号]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="SerialNo" style="text-align:right;"></input></div></li> 
   <li class="list-group-item" xid="li2" style="height:73px;">
    <table component="$UI/system/components/bootstrap/table/table" xid="table1" class="table">
     <tr xid="tr3">
      
      <td xid="td6" style="width:50%;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="扫描库位" xid="scanBtn" style="width:100%;" onClick="scanBtnClick" disabled="true">
    <i xid="i1"></i>
    <span xid="span1">扫描库位</span></a> </td></tr> 
  <tr xid="tr1"><td xid="td1" style="width:50%;">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="提交" xid="button1" style="width:100%;" onClick="submitBtnClick">
    <i xid="i2"></i>
    <span xid="span2">提交</span></a> </td></tr></table> </li> </ul></div>
  </div> 
</div>