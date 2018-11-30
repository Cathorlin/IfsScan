<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:7px;left:84px;height:auto;"> 
  </div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver" onReceive="windowReceiverReceive"></span><div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="报工信息"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">报工信息</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><ul xid="ul1">
   <li class="list-group-item" xid="li1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit7">
   <label class="x-label" xid="label6"><![CDATA[生产订单号]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="OrderNo" style="text-align:right;"></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[ 下达号]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="ReleaseNo" style="text-align:right;"></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[序列]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="SequenceNo" style="text-align:right;"></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
   <label class="x-label" xid="label5"><![CDATA[工序]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="OperationNo" style="text-align:right;"></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="labe3"><![CDATA[报工数量]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="ReportedQty" style="text-align:right;"></input></div>
  
  </li> 
   <li class="list-group-item" xid="li2" style="height:73px;">
    <table component="$UI/system/components/bootstrap/table/table" xid="table1" class="table">
     <tr xid="tr3">
      
      <td xid="td6" style="width:50%;">
       <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="提交" xid="submitBtn" style="width:100%;" onClick="submitBtnClick">
        <i xid="i1"></i>
        <span xid="span1">提交</span></a> </td> </tr> </table> </li> </ul></div>
  </div> 
</div>