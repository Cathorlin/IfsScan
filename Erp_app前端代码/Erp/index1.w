<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:5px;left:59px;" onLoad="modelLoad"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-bottom" xid="bottom" height="55">
   <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified x-card" tabbed="true" xid="buttonGroup1" style="height:55px;">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top active" label="首页" xid="homeBtn" icon="icon-home" target="homeContent">
     <i xid="i1" class="icon-home icon"></i>
     <span xid="span1">首页</span></a> 
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="消息" xid="msgBtn" icon="icon-radio-waves" target="msgContent">
     <i xid="i2" class="icon-radio-waves icon"></i>
     <span xid="span2">消息</span></a> 
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="发现" xid="foundBtn" icon="icon-eye" target="foundContent">
     <i xid="i3" class="icon icon-eye"></i>
     <span xid="span3">发现</span></a> 
    
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" label="我的" xid="userBtn" icon="icon-person" target="userContent">
     <i xid="i5" class="icon icon-person"></i>
     <span xid="span5">我的</span></a> </div> </div><div class="x-panel-content" xid="content"><div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents">
   <div class="x-contents-content" xid="homeContent"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-has-iosstatusbar" xid="panel">
   <div class="x-panel-top" xid="top2">
   <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
    <div class="x-titlebar-left" xid="div6"></div>
    <div class="x-titlebar-title tb-searchBox" xid="div1">
     <i xid="i10" class="icon-loading-b"></i>
     <span xid="span13">一个不错的APP</span>
     <div xid="div9"></div></div> 
    <div class="x-titlebar-right reverse" xid="div5"></div></div> </div><div class="x-panel-content  x-scroll-view" xid="content3" style="bottom: 0px;" _xid="C7FF8C0CA84000015283BDE11B9DD120">
    
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView">
   <div class="x-content-center x-pull-down container" style="display:none;" xid="div16">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i9"></i>
    <span class="x-pull-down-label" xid="span17">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div17">
    <div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card" xid="panel2">
     <table class="table tb-menu" component="$UI/system/components/bootstrap/table/table" xid="table1">
      <tbody class="x-list-template" xid="listTemplate2">
       <tr xid="tr1">
        <td bind-click="openPurClick" pagename="./list.w" xid="td1">
         <div class="text-center" xid="div2">
          <img src="$UI/Erp/img/homeMenu/rk.png" alt="" xid="rk" class="img-responsive center-block tb-img5" style="width:55px;height:55px;"></img>
          <span xid="span7">采购订单接收</span></div> </td> 
        <td pagename="./list.w" xid="td2" bind-click="openSaleClick">
         <div class="text-center" xid="div3">
          <img src="$UI/Erp/img/homeMenu/ck.png" alt="" xid="ck" class="img-responsive center-block tb-img5" style="width:55px;"></img>
          <span xid="span9">销售出库</span></div> </td> 
        <td pagename="./list.w" xid="td3" bind-click="openTranClick">
         <div class="text-center" xid="div4">
          <img src="$UI/Erp/img/homeMenu/yk.png" alt="" xid="image2" class="img-responsive center-block tb-img5" style="width:55px;"></img>
          <span xid="span10">移库</span></div> </td> 
        <td pagename="./list.w" xid="td4">
         <div class="text-center" xid="div7">
          <img alt="" xid="image8" src="$UI/Erp/img/homeMenu/pd.png" class="img-responsive center-block tb-img5" style="width:55px;"></img>
          <span xid="span11">盘点</span></div> </td> </tr> 
       <tr xid="tr2">
        <td pagename="./list.w" xid="td6" bind-click="openMrClick">
         <div class="text-center" xid="div2">
          <img alt="" xid="image3" src="$UI/Erp/img/homeMenu/clsq.png" class="img-responsive center-block tb-img5" style="width:55px;"></img>
          <span xid="span19">材料申请</span></div> </td> 
        <td pagename="./list.w" xid="td7" bind-click="openSmrClick">
         <div class="text-center" xid="div3">
          <img alt="" xid="image1" src="$UI/Erp/img/homeMenu/scll.png" class="img-responsive center-block tb-img5" style="width:55px;"></img>
          <span xid="span20">生产领料</span></div> </td> 
        <td pagename="./list.w" xid="td8">
         <div class="text-center" xid="div4">
          <img alt="" xid="image2" src="$UI/Erp/img/homeMenu/jj.png" class="img-responsive center-block tb-img5" style="width:55px;"></img>
          <span xid="span10">工序交接</span></div> </td> 
        <td pagename="./list.w" xid="td9">
         <div class="text-center" xid="div7">
          <img alt="" xid="image8" src="$UI/Erp/img/homeMenu/bg.png" class="img-responsive center-block tb-img5" style="width:55px;"></img>
          <span xid="span11">报工</span></div> </td> </tr> 
       <tr xid="tr3">
        <td pagename="./list.w" xid="td11" bind-click="openMrClick">
         <div class="text-center" xid="div15">
          <img alt="" xid="image5" src="$UI/Erp/img/homeMenu/cprk.png" class="img-responsive center-block tb-img5" style="width:55px;"></img>
          <span xid="span12">成品入库</span></div> </td> 
        <td pagename="./list.w" xid="td10" bind-click="openSmrClick"></td>
        <td pagename="./list.w" xid="td13"></td>
        <td pagename="./list.w" xid="td12"></td></tr> </tbody> </table> </div> </div> 
   <div class="x-content-center x-pull-up" xid="div18">
    <span class="x-pull-up-label" xid="span18"></span></div> </div></div> </div></div>
  <div class="x-contents-content" xid="msgContent"></div>
  <div class="x-contents-content" xid="foundContent"></div>
  <div class="x-contents-content" xid="userContent"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel3" style="background-color:#F2F2F2;">
   <div class="x-panel-top" xid="top3">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar2">
     <div class="x-titlebar-left" xid="left1">
      </div> 
     <div class="x-titlebar-title" xid="title1">
      <span xid="span4"><![CDATA[我的]]></span></div> 
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content1">
    <div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card" xid="panel5">
   <div class="list-group-item" xid="div11" style="height:100px;backgroud-color:#F2F2F2;background-color:#F2F2F2;">
    
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[用户ID：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2"></div></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[用户名：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1"></div></div>
  </div> </div><div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card" xid="panel3">
     <ul xid="ul1" class="list-group">
      <li class="list-group-item" xid="li1">
       <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button12" icon="icon-ios7-arrow-right">
        <i xid="i18" class="icon-ios7-arrow-right text-muted"></i>
        <span xid="span14"></span></a> 
       <span xid="span16">评分鼓励</span></li> 
      <li class="list-group-item" xid="li1">
       <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button14" icon="icon-ios7-arrow-right">
        <i xid="i27" class="icon-ios7-arrow-right text-muted"></i>
        <span xid="span4"></span></a> 
       <span xid="span15">分享推荐</span></li> 
      <li class="list-group-item" xid="li1">
       <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button16" icon="icon-ios7-arrow-right" onClick="button16Click">
        <i xid="i29" class="icon-ios7-arrow-right text-muted"></i>
        <span xid="span23"></span></a> 
       <span xid="span22"><![CDATA[技术电话]]></span></li> 
      <li class="list-group-item" xid="li4">
       <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" xid="button2" icon="icon-ios7-arrow-right">
        <i xid="i4" class="icon-ios7-arrow-right"></i>
        <span xid="span16"></span></a> 
       <span xid="span6">问题反馈</span></li> </ul> </div> 
    <div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card" xid="panel4">
     <div class="list-group-item" xid="div10">
      <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon pull-right" label="button" xid="button18" icon="icon-ios7-arrow-right">
       <i xid="i31" class="icon-ios7-arrow-right text-muted"></i>
       <span xid="span26"></span></a> 
      <span xid="span25">设置锁屏图案</span></div> </div> 
    <div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card" xid="panel4">
     <div class="list-group-item" xid="div10" align="center">
      <span xid="quit" bind-click="quitClick"><![CDATA[切换用户]]></span></div> </div> 
  </div> </div></div></div></div>
  </div> 
<span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="purchaseDialog" src="$UI/Erp/purchase/purIndex.w" routable="true"></span><span component="$UI/system/components/justep/windowDialog/windowDialog" xid="saleDialog" src="$UI/Erp/sale/saleIndex.w" routable="true"></span><span component="$UI/system/components/justep/windowDialog/windowDialog" xid="transferDialog" src="$UI/Erp/transfer/tranIndex.w"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="mrDialog" src="$UI/Erp/materialReq/mrIndex.w"></span>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="smrDialog" src="$UI/Erp/shopMaterialReq/smrIndex.w"></span></div>