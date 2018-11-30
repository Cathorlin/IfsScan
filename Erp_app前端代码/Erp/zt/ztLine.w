<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:4px;left:106px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="scanData" idColumn="sonCode">
   <column label="子编码" name="sonCode" type="String" xid="xid4"></column></div></div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver" onReceive="windowReceiverReceive"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="装托"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">装托</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><ul xid="ul1">
   <li class="list-group-item" xid="li1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1" style="text-align:right;"><![CDATA[托盘号：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="tpNo"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2" style="text-align:right;"><![CDATA[扫码数量：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="count" bind-text="0"></div></div></li> 
   <li class="list-group-item" xid="li2" style="height:64px;">
    <table component="$UI/system/components/bootstrap/table/table" xid="table1" class="table">
     <tr xid="tr3">
      <td xid="td5" style="width:50%;">
       <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="扫一扫" xid="scanBtn" style="width:100%" onClick="scanBtnClick" disabled="true">
        <i xid="i4"></i>
        <span xid="span5">扫一扫</span></a> </td> 
      <td xid="td6" style="width:50%;">
       <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="确认" xid="submitBtn" style="width:100%;" onClick="submitBtnClick">
        <i xid="i1"></i>
        <span xid="span1">确认</span></a> </td> </tr> 
  </table> </li> <li class="list-group-item" xid="li6">
   <div component="$UI/system/components/justep/row/row" class="x-row list-row" xid="row25" style="height:48px;" bind-visible="$model.scanData.getCount() == 0">
   <div class="x-col x-col-center" xid="col28">
    <label xid="label12" style="color:#C0C0C0;">无扫码记录</label></div> </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list3" data="scanData">
   <ul class="x-list-template" xid="listTemplateUl5">
    
  <h4 class="panel-title" xid="h41" style="text-align:right;clip:rect(5px auto auto auto);">
   <div xid="div1" align="left" style="float:left;width:139px;">
    <label xid="label3" bind-text='ref("sonCode")'></label></div> 
   <i xid="i2" class="linear linear-cross" style="font-size:25px;color:#C0C0C0;font-weight:100;text-align:right;right:0px;clip:rect(auto 0px auto auto);" bind-value=' val("sonCode")' bind-dblclick="i9Click"></i></h4></ul> </div></li></ul>
  </div>
  </div> 
</div>