<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:4px;left:89px;height:auto;" onLoad="modelLoad"> 
  <div component="$UI/system/components/justep/data/data" xid="fileData" idColumn="filePath" autoNew="false">
   <column label="col0" name="filePath" type="String" xid="default1"></column>
   <column label="col1" name="fileName" type="String" xid="default2"></column>
   <column label="col2" name="createTime" type="String" xid="default3"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1" style="background-color:#F2F2F2;"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="材料申请"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">材料申请</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
   <ul xid="ul1">
    <li class="list-group-item" xid="li1">
     <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup1">
      <span xid="span2" style="background-color:#FFFFFF;" class="input-group-addon"><![CDATA[订单号：]]></span>
      <input type="text" component="$UI/system/components/justep/input/input" xid="mrId" placeHolder="请输入材料申请订单号或扫码录入" class="form-control" valueUpdateMode="keypress"></input></div> </li>
  
  	<li class="list-group-item" xid="li2" style="height:73px;">
     
  <table component="$UI/system/components/bootstrap/table/table" xid="table1" class="table">
   
   
  <tr xid="tr3"><td xid="td5" style="width:50%;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="扫一扫" xid="scanBtn" style="width:100%" onClick="scanBtnClick" disabled="true">
   <i xid="i4"></i>
   <span xid="span5">扫一扫</span></a></td>
  <td xid="td6" style="width:50%;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="提交" xid="submitBtn" style="width:100%;" onClick="submitBtnClick">
    <i xid="i1"></i>
    <span xid="span1">提交</span></a></td></tr></table></li>
   </ul> 
   <ul xid="ul2"><li xid="li4" class="list-group-item"><div component="$UI/system/components/justep/row/row" class="x-row list-row" xid="emptyRow" style="height:48px;" bind-visible="$model.fileData.getCount() == 0">
   <div class="x-col x-col-center" xid="col1">
    <label xid="label3" style="color:#C0C0C0;">无历史记录</label></div> </div><div component="$UI/system/components/justep/list/list" class="x-list" xid="fileList" data="fileData" bind-click="fileListClick">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li3" class="x-flex list-row">
     <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
      <div class="x-col" xid="col4">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
        <div class="x-col x-col-fixed" xid="col7" style="width:auto;">
         <div component="$UI/system/components/justep/output/output" class="x-flex1 x-output title-data" xid="output3" bind-ref="ref('filePath')"></div></div> </div> 
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
        <div xid="col10" class="x-col x-col-fixed" style="width:auto;">
         <div component="$UI/system/components/justep/output/output" class="x-flex1 x-output content-data" xid="output2" bind-ref="ref('createTime')"></div></div> 
        <div class="x-col" xid="col3">
         <div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref="ref('fileName')"></div></div> </div> </div> 
      <div class="x-col x-col-fixed x-col-center" xid="col6" style="width:40px;">
       <i xid="i5" class="icon-social-youtube-outline" style="font-size:25px;color:#C0C0C0;font-weight:100;"></i></div> </div> </li> </ul> </div><div xid="div6">
   <a component="$UI/system/components/justep/button/button" class="btn x-gray device-button-black" label="清空历史记录" xid="deleteBtn" onClick="deleteBtnClick">
    <i xid="i2"></i>
    <span xid="span4">清空历史记录</span></a> </div></li></ul>
  
  
  
  </div> 
        </div> 
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="mrLineDialog" src="$UI/Erp/materialReq/mrLine.w" routable="true"></span></div>
