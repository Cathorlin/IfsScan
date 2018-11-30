<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:4px;left:106px;height:auto;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="countListData" idColumn="part_no"><column label="零件号" name="part_no" type="String" xid="xid1"></column>
  <column label="批次号" name="lot_batch_no" type="String" xid="xid3"></column>
  <column label="数量" name="qty" type="String" xid="xid4"></column>
  <column label="是否匹配" name="isornot" type="Integer" xid="xid2"></column></div>
  </div>  
  <span component="$UI/system/components/justep/windowReceiver/windowReceiver" xid="windowReceiver" onReceive="windowReceiverReceive"></span>
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="总盘点表详情"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="backBtnClick" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">总盘点表详情</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><ul xid="ul1">
   <li class="list-group-item" xid="li1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1" style="width:977px;">
   <label class="x-label" xid="label1" style="text-align:right;"><![CDATA[盘点报告号：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output center-block x-edit" xid="countId"></div></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3" style="width:981px;">
   <label class="x-label" xid="label3" style="text-align:right;"><![CDATA[货位号：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output center-block x-edit" xid="location"></div></div>
  </li> 
   <li class="list-group-item" xid="li4">
   
  <div component="$UI/system/components/justep/dataTables/dataTables" flexibleWidth="true" responsive="true" rowActiveClass="active" class="table table-hover table-striped" xid="dataTables1" data="countListData" style="font-size:xx-small;" ordering="false">
   <columns xid="columns1"><column name="part_no" xid="column6" width="25%"></column>
  <column name="lot_batch_no" xid="column5"></column>
  <column name="qty" xid="column8"></column>
  <column name="isornot" xid="column1" className="x-dt-cell-center"></column></columns></div></li>
  </ul>
  </div>
  </div> 
</div>