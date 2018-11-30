<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:4px;left:106px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="smrLineData" idColumn="part_no"><column label="零件号" name="part_no" type="String" xid="xid1"></column>
  <column label="描述" name="description" type="String" xid="xid2"></column>
  <column label="数量" name="qty" type="String" xid="xid4"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="scanData" idColumn="part_no">
   <column label="零件号" name="part_no" type="String" xid="column1"></column>
  <column label="零件名称" name="description" type="String" xid="column2"></column>
  <column label="数量" name="qty" type="String" xid="column4"></column></div></div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver" onReceive="windowReceiverReceive"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="smrLineInfoDialog" src="$UI/Erp/shopMaterialReq/smrLineInfo.w" onReceive="smrLineDialogReceive" routable="true"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="生产订单"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">生产订单</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><ul xid="ul1">
   <li class="list-group-item" xid="li1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1" style="text-align:right;"><![CDATA[订单号：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output center-block x-edit" xid="soId"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3" style="text-align:right;"><![CDATA[成品零件号：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output center-block x-edit" xid="part_no"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2" style="text-align:right;"><![CDATA[零件名称：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output center-block x-edit" xid="part_desc"></div></div></li> 
   <li class="list-group-item" xid="li2" style="height:73px;">
    <table component="$UI/system/components/bootstrap/table/table" xid="table1" class="table">
     <tr xid="tr3">
      <td xid="td5" style="width:50%;">
       <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="扫一扫" xid="scanBtn" style="width:100%" onClick="scanBtnClick" disabled="true">
        <i xid="i4"></i>
        <span xid="span5">扫一扫</span></a> </td> 
      <td xid="td6" style="width:50%;">
       <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确认下发" xid="submitBtn" style="width:100%;" onClick="submitBtnClick">
        <i xid="i1"></i>
        <span xid="span1">确认下发</span></a> </td> </tr> </table> </li> <li class="list-group-item" xid="li4">
   
  <div component="$UI/system/components/justep/dataTables/dataTables" flexibleWidth="true" responsive="true" rowActiveClass="active" class="table table-hover table-striped" xid="dataTables1" data="smrLineData" style="font-size:xx-small;" ordering="false">
   <columns xid="columns1"><column name="part_no" xid="column6" width="25%"></column>
  <column name="description" xid="column7" width="35%"></column>
  <column name="lot_batch_no" xid="column5"></column>
  <column name="qty" xid="column8"></column></columns></div></li>
  <li class="list-group-item" xid="li6">
   <div component="$UI/system/components/justep/row/row" class="x-row list-row" xid="row25" style="height:48px;" bind-visible="$model.scanData.getCount() == 0">
    <div class="x-col x-col-center" xid="col28">
     <label xid="label12" style="color:#C0C0C0;">无扫码记录</label></div> </div> 
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="scanData" bind-click="fileListClick">
    <ul class="x-list-template" xid="listTemplateUl5">
     <div component="$UI/system/components/bootstrap/accordion/accordion" class="panel-group" xid="accordion3">
      <div class="panel panel-default" component="$UI/system/components/bootstrap/panel/panel" xid="panel4">
       <div class="panel-heading" xid="heading3">
        <h4 class="panel-title" xid="h43" style="text-align:right;">
         <div xid="div2" align="left" style="float:left;">
          <label xid="label17" bind-text="ref('description')"></label></div> 
         <i xid="i9" class="linear linear-cross" style="font-size:25px;color:#C0C0C0;font-weight:100;text-align:right;right:0px;clip:rect(auto 0px auto auto);"></i></h4> </div> 
       <div class="panel-collapse collapse in" xid="div5">
        <li class="list-group-item" xid="li3">
         <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit11">
          <label class="x-label" xid="label11" style="text-align:right;color:#C0C0C0;">零件号：</label>
          <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref='ref("part_no")'></div></div> 
         <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit13">
          <label class="x-label" xid="label13" style="text-align:right;color:#C0C0C0;">零件名称：</label>
          <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output8" bind-ref='ref("description")'></div></div> 
         <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit12">
          <label class="x-label" xid="label14" style="text-align:right;color:#C0C0C0;"><![CDATA[批次：]]></label>
          <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7" bind-ref='ref("lot_batch_no")'></div></div> 
         
         <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
   <label class="x-label" xid="label4" style="text-align:right;color:#C0C0C0;"><![CDATA[数量：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref='ref("qty")'></div></div></li> </div> </div> </div> </ul> </div> </li></ul>
  </div>
  </div> 
</div>