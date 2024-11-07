
 /**
 * bdmap (Enhancement 1.1v)
 * The tinymce-plugins is used to import baidu map (Enhancement)
 * 
 * https://github.com/Five-great/tinymce-plugins
 * 
 * Copyright 2020, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
 *
 * Licensed under MIT
 */
  var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,c){a.raw=c;return a};
  tinymce.PluginManager.add("bdmap",function(a,c){var b=a.getParam("bdmap_options",{width:560,height:360,outputIframe:"https://unpkg.com/@npkg/tinymce-plugins/plugins/bdmap/bd.html",apiKey:"ONwdanPtvCDLHBSm184T2ynP"}),e=b.outputIframe||"https://unpkg.com/@npkg/tinymce-plugins/plugins/bdmap/bd.html";window.tinymceLng="";window.tinymceLat="";window.tinymceBDZoom="";window.tinymceBDW="";window.tinymceBDH="";window.tinymceBDBoxW="";window.tinymceBDBoxH="";window.tinymceBDBoxHtml="";window.tinymceBDDH="";
  window.tinymceBDSF="";window.tinymceBDBgColor="";window.tinymceBDDName="";var d=function(){return a.windowManager.open({title:"\u63d2\u5165\u767e\u5ea6\u5730\u56fe",size:"large",body:{type:"panel",items:[{type:"iframe",name:"bdmap_iframe",label:"   ",sandboxed:!0}]},initialData:{bdmap_iframe:'<!doctype html>\n\t\t\t\t<html>\n\t\t\t\t<head>\n\t\t\t\t<meta charset="utf-8" />\n\t\t\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t\t\t\t<title>Baidu Maps</title>\n\t\t\t\t\n\t\t\t\t<script charset="utf-8" src="https://api.map.baidu.com/api?v=3.0&ak='+
  b.apiKey+'">\x3c/script>\n\t\t\t\t<script src="https://api.map.baidu.com/library/InfoBox/1.2/src/InfoBox_min.js">\x3c/script>\n\t\t\t\t\n\t\t\t\t</head>\n\t\t\t\t<body onload="initialize();">\n\t\t\t\t\t<style>\n\t\t\t\t\t\thtml { height:100%; }\n\t\t\t\t\t\tbody { height:100%;margin:0;padding:0;background-color:#fff; }\n\t\t\t\t\t\t.bigBox{height: 100vh;width: 100%; overflow: hidden;position: relative;}\n\t\t\t\t\t\t#search_box{position:fixed;top:5px;right:5px;z-index:9999;}\n\t\t\t\t\t\t#search_box input{\n\t\t\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t\t\tborder-radius:3px;\n\t\t\t\t\t\t\tbox-sizing:border-box;\n\t\t\t\t\t\t\toutline:0;\n\t\t\t\t\t\t\tbox-shadow:0 0 3px rgba(0,0,0,0.4);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#search_box input[type="text"]{\n\t\t\t\t\t\t\tbackground-color:#fff;\n\t\t\t\t\t\t\tborder:1px solid #ccc;\n\t\t\t\t\t\t\tcolor:#000;\n\t\t\t\t\t\t\twidth:180px;\n\t\t\t\t\t\t\tpadding:5px;\n\t\t\t\t\t\t\tfont-size:16px;\n\t\t\t\t\t\t\topacity:0.7;\n\t\t\t\t\t\t\tbox-shadow:0 0 3px rgba(0,0,0,0.4);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#search_box input[type="button"]{\n\t\t\t\t\t\t\tmargin-left:5px;\n\t\t\t\t\t\t\tbackground-color:#207ab7;\n\t\t\t\t\t\t\tborder:1px solid #207ab7;\n\t\t\t\t\t\t\tcolor:#fff;\n\t\t\t\t\t\t\tpadding:4px 6px;\n\t\t\t\t\t\t\tfont-size:14px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.setBox{ width: 100%; height: 26vh; position: absolute;left: 0;transition: all 0.6s;-webkit-transition: all 0.6s; bottom: -26vh;z-index: 99;background: #fff; }\n\t\t\t\t\t\t.setBox.on{  bottom: 0; }\n\t\t\t\t\t\n\t\t\t\t\t\t.tox .tox-form__controls-h-stack {\n\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t.tox .tox-form__group {\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\tmargin-bottom: 4px;\n\t\t\t\t\t\tmargin-right:5px;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-label, .tox .tox-toolbar-label {\n\t\t\t\t\t\tcolor: rgba(34,47,62,.7);\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t\tfont-style: normal;\n\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\tline-height: 1.3;\n\t\t\t\t\t\tpadding: 0 8px 0 0;\n\t\t\t\t\t\ttext-transform: none;\n\t\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.tox .tox-selectfield select, .tox .tox-textarea, .tox .tox-textfield, .tox .tox-toolbar-textfield {\n\t\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t\t-moz-appearance: none;\n\t\t\t\t\t\tappearance: none;\n\t\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\t\tborder-color: #ccc;\n\t\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\t\tborder-style: solid;\n\t\t\t\t\t\tborder-width: 1px;\n\t\t\t\t\t\tbox-shadow: none;\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\tcolor: #222f3e;\n\t\t\t\t\t\tfont-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\tline-height: 24px;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tmin-height: 34px;\n\t\t\t\t\t\toutline: 0;\n\t\t\t\t\t\tpadding: 5px 4.75px;\n\t\t\t\t\t\tresize: none;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-textfield:focus,\n\t\t\t\t\t.tox .tox-selectfield select:focus,\n\t\t\t\t\t.tox .tox-textarea:focus {\n\t\t\t\t\t  border-color: #207ab7;\n\t\t\t\t\t  box-shadow: none;\n\t\t\t\t\t  outline: none;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-textfield:focus,\n\t\t\t\t\t.tox .tox-selectfield select:focus,\n\t\t\t\t\t.tox .tox-textarea:focus {\n\t\t\t\t\t  border-color: #207ab7;\n\t\t\t\t\t  box-shadow: none;\n\t\t\t\t\t  outline: none;\n\t\t\t\t\t  padding: 4px;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button--icon .tox-icon svg, .tox .tox-button.tox-button--icon .tox-icon svg, .tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\tfill: currentColor;\n\t\t\t\t\t\toutline: none;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-lock.tox-locked .tox-lock-icon__unlock, .tox .tox-lock:not(.tox-locked) .tox-lock-icon__lock {\n\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button--naked {\n\t\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\t\tborder-color: transparent;\n\t\t\t\t\t\tbox-shadow: unset;\n\t\t\t\t\t\tcolor: #222f3e;\n\t\t\t\t\t\tpadding: 4px;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button--naked[disabled] {\n\t\t\t\t\t  background-color: #f0f0f0;\n\t\t\t\t\t  border-color: #f0f0f0;\n\t\t\t\t\t  box-shadow: none;\n\t\t\t\t\t  outline: none;\n\t\t\t\t\t  color: rgba(34, 47, 62, 0.5);\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button--naked:hover:not(:disabled) {\n\t\t\t\t\t  background-color: #e3e3e3;\n\t\t\t\t\t  border-color: #e3e3e3;\n\t\t\t\t\t  box-shadow: none;\n\t\t\t\t\t  color: #222f3e;\n\t\t\t\t\t  outline: none;\n\t\t\t\t\t\t  \n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button--naked:focus:not(:disabled) {\n\t\t\t\t\t  background-color: #e3e3e3;\n\t\t\t\t\t  border-color: #e3e3e3;\n\t\t\t\t\t  box-shadow: none;\n\t\t\t\t\t  outline: none;\n\t\t\t\t\t\n\t\t\t\t\t  color: #222f3e;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button--naked:active:not(:disabled) {\n\t\t\t\t\t  background-color: #d6d6d6;\n\t\t\t\t\t  border-color: #d6d6d6;\n\t\t\t\t\t  box-shadow: none;\n\t\t\t\t\t  color: #222f3e;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button--naked .tox-icon svg {\n\t\t\t\t\t  fill: currentColor;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button--naked.tox-button--icon:hover:not(:disabled) {\n\t\t\t\t\t  color: #222f3e;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.tox :not(svg):not(rect) {\n\t\t\t\t\t\tbox-sizing: inherit;\n\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t\tcursor: inherit;\n\t\t\t\t\t\tdirection: inherit;\n\t\t\t\t\t\tfont-family: inherit;\n\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\tfont-style: inherit;\n\t\t\t\t\t\tfont-weight: inherit;\n\t\t\t\t\t\tline-height: inherit;\n\t\t\t\t\t\t-webkit-tap-highlight-color: inherit;\n\t\t\t\t\t\ttext-align: inherit;\n\t\t\t\t\t\ttext-decoration: inherit;\n\t\t\t\t\t\ttext-shadow: inherit;\n\t\t\t\t\t\ttext-transform: inherit;\n\t\t\t\t\t\tvertical-align: inherit;\n\t\t\t\t\t\twhite-space: inherit;\n\t\t\t\t\t}\n\t\t\t\t\t.tox .tox-button {\n\t\t\t\t\t\t\n\t\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\t\tbackground-image: none;\n\t\t\t\t\t\tbackground-position: 0 0;\n\t\t\t\t\t\tbackground-repeat: repeat;\n\t\t\t\t\t\t/* border-color: #207ab7; */\n\t\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\t\tborder-style: solid;\n\t\t\t\t\t\tborder-width: 1px;\n\t\t\t\t\t\tbox-shadow: none;\n\t\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\t\tcolor: #333;\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tfont-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;\n\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\t\tletter-spacing: normal;\n\t\t\t\t\t\tline-height: 24px;\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\toutline: 0;\n\t\t\t\t\t\tpadding: 4px 16px;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t\ttext-transform: capitalize;\n\t\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t}\n\t\t\t\t\t.textareaBox{ width: 26%;padding: 2% 0%; display: inline-block;vertical-align: top!important;margin-left:2%;}\n\t\t\t\t\t.setCheck{vertical-align: top!important; width: 9%;min-width: 100px; padding: 2% 0%; display: inline-block;margin-left:2%;}\n\t\t\t\t\t.setsize{vertical-align: top!important; width: 35%;padding: 2% 0%;  display: inline-block;margin-left:2%; }\n\t\t\t\t\t.openBtn{ display: block;transition: all 0.3s; margin: 0 auto; width: 30px;height: 30px; margin-top: -30px; cursor: pointer; transform: rotate(180deg); }\n\t\t\t\t\t\n\t\t\t\t\t.setBox.on .openBtn{transform: rotate(0deg);}\n\t\t\t\t\t.infoBoxContent{font-size:12px;padding:10px 8px;margin-bottom:3px; line-height: 1.5;letter-spacing: 1px;background: rgba(255,255,255,0.95); border: none; box-sizing: border-box;-moz-box-sizing:border-box; /* Firefox */-webkit-box-sizing:border-box; /* Safari */ }\n\t\t\t\t\t\t.infoBoxContent>i:last-child{display: block; content: ""; width: 15px;transform: rotate(45deg); height: 15px;position: absolute;bottom:-5px;left: 50%; margin-left:-8px;z-index: -1; background:inherit ;}\n\t\t\t\t\t\t.infoBoxContent *{line-height: 1.5; margin: 0;padding: 0; }\n\t\t\t\t\t\t.BMap_cpyCtrl.BMap_noprint.anchorBL{display: none!important;}\n\t\t\t\t\t\t.anchorBL{display: none!important;}\n\t\t\t\t\t\t.showBox{ pointer-events: none; opacity: 0.5;}\n\t\t\t\t\t\t.showBox[name="show"]{ pointer-events: all; opacity:1;}\n\t\t\t\t\t\t\n\t\t\t\t\t\t.infoBox>img{display: none!important;}\n\t\t\t\t\t</style>\n\t\t\t\t   <div class="bigBox">\n\t\t\t\t\t<div id="search_box"><input id="kw" type="text" value="" autocomplete="off" placeholder="\u8f93\u5165\u8981\u641c\u7d22\u7684\u5730\u70b9" /><input type="button" value="\u641c\u7d22" onclick="searchByStationName()"></div>\n\t\t\t\t\t<div id="map_canvas" style="width:100%; height:100%"></div>\n\t\t\t\t\t<div class="setBox tox" id="setBoxID">\n\t\t\t\t\t\t<a href="javascript:openBox()" class="openBtn" ><svg t="1604471043166" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7209" width="30" height="30">\n\t\t\t\t\t\t\t<path d="M992.27 339.723l-466.975 216.039c-4.432 2.77-9.417 4.431-14.957 4.43100001l-1.662 0c-5.54 0-10.525-1.662-14.402-4.43100001l-466.976-216.03999999c-12.741-5.539-18.83499999-18.833-12.741-30.46600001s21.04999999-16.618 34.345-11.079l460.882 213.27 460.883-213.27c12.74-5.54 28.25100001 0 34.345 11.079 6.093 11.633 0.553 25.481-12.741 30.467z" fill="#1C6CA1"></path>\n\t\t\t\t\t\t\t<path d="M48.902 470.45399999l460.882 213.27000001 460.883-213.27c12.74-5.54 28.25100001 0 34.345 11.079 6.093 11.633 0 24.928-12.741 30.467l-466.97599999 216.039c-4.432 2.77-9.417 4.431-14.95700001 4.431l-1.662 0c-5.54 0-10.525-1.662-14.402-4.431L27.29800001 512c-12.741-5.54-18.835-18.834-12.74100001-30.467s21.604-16.618 34.345-11.07900001z" fill="#1C6CA1"></path></svg>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t <div class="setsize " style="width: 18%; display: none;">\n\t\t\t\t\t\t\t<label class="tox-label" for="form-field_597838573111604453101745" style="font-size: 18px; padding-left:0px; letter-spacing: 1px;margin-bottom:10px; border-bottom: 1px solid #d6d6d6;">\u8bbe\u7f6e\u5730\u56fe\u5bbd\u9ad8</label>\n\t\t\t\t\t\t\t<div class="tox-form__controls-h-stack" style="padding-left:10px;">\n\t\t\t\t\t\t\t\t<div class="tox-form__group">\n\t\t\t\t\t\t\t\t\t<label class="tox-label" for="form-field_597838573111604453101745">\u5bbd</label>\n\t\t\t\t\t\t\t\t\t<input type="text" tabindex="-1" id="wInputID"   onBlur="setWHsize(0)" data-alloy-tabstop="true" class="tox-textfield" id="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="tox-form__group">\n\t\t\t\t\t\t\t\t\t<label class="tox-label" for="">\u9ad8</label>\n\t\t\t\t\t\t\t\t\t<input type="text" tabindex="-1" id="hInputID"   onBlur="setWHsize(1)" data-alloy-tabstop="true" class="tox-textfield" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="tox-form__group"><label class="tox-label">&nbsp;</label>\n\t\t\t\t\t\t\t\t\t <button title="\u4fdd\u6301\u5bbd\u9ad8\u6bd4" type="button" data-alloy-tabstop="true" tabindex="-1" class="tox-lock tox-button tox-button--naked tox-button--icon tox-locked" aria-pressed="true">\n\t\t\t\t\t\t\t\t\t\t <span class="tox-icon tox-lock-icon__lock" id="lockID" style="display: none;"  onclick="lock(true)"><svg width="24" height="24"><path d="M16.3 11c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H8V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h.3zM10 8v3h4V8a1 1 0 0 0-.3-.7A1 1 0 0 0 13 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7z" fill-rule="evenodd"></path></svg></span>\n\t\t\t\t\t\t\t\t\t\t <span class="tox-icon tox-lock-icon__unlock" id="unlockID" style="display: block;"  onclick="lock(false)"><svg width="24" height="24"><path d="M16 5c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h-2V8a1 1 0 0 0-.3-.7A1 1 0 0 0 16 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7v3h.3c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H4.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H11V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2z" fill-rule="evenodd"></path></svg></span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\x3c!-- <div class="tox-form__group"  style="padding-left:10px;" >\n\t\t\t\t\t\t\t\t<input type="text" tabindex="-1" id="bdDNameID"  style="display: none; height: 28px;min-height: 28px;" onBlur="setbdDName()" placeholder="\u8bf7\u8f93\u5165\u5bfc\u822a\u76ee\u7684\u540d\u79f0" data-alloy-tabstop="true" class="tox-textfield" >\n\t\t\t\t\t\t\t</div> --\x3e\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class="setCheck">\n\t\t\t\t\t\t\t<div class="tox-form__group">\n\t\t\t\t\t\t\t\t<label class="tox-label" style="font-size: 18px; padding-left:0px; letter-spacing: 1px;margin-bottom:10px; border-bottom: 1px solid #d6d6d6;">\u63a7\u4ef6\u8bbe\u7f6e</label>\n\t\t\t\t\t\t\t\t<label class="tox-checkbox" onclick="showBOX()">\n\t\t\t\t\t\t\t\t <input type="checkbox" data-alloy-tabstop="true" tabindex="-1" class="tox-checkbox__input" id="openboxID">\n\t\t\t\t\t\t\t\t <span unselectable="on" class="tox-checkbox__label tox-label"  for="form-field_6689627266931604472573007" style="user-select: none; display: inline!important;">\u4fe1\u606f\u5f39\u6846</span>\n\t\t\t\t\t\t\t   </label><br>\n\t\t\t\t\t\t\t\t<label class="tox-checkbox" onclick="openSF()">\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" data-alloy-tabstop="true" tabindex="-1" class="tox-checkbox__input" id="openSFID">\n\t\t\t\t\t\t\t\t\t\t<span unselectable="on" class="tox-checkbox__label tox-label"  for="form-field_6689627266931604472573007" style="user-select: none; display: inline!important;">\u7f29\u653e\u63a7\u4ef6</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label class="tox-checkbox" onclick="openDH()">\n\t\t\t\t\t\t\t\t\t<input type="checkbox" data-alloy-tabstop="true" tabindex="-1" class="tox-checkbox__input" id="openDHID">\n\t\t\t\t\t\t\t\t\t<span unselectable="on" class="tox-checkbox__label tox-label"  for="form-field_6689627266931604472573007" style="user-select: none; display: inline!important;">\u5bfc\u822a\u529f\u80fd</span>\n\t\t\t\t\t\t\t\t</label><br>\n\t\t\t\t\t\t\t\t<div class="tox-form__group"  style="padding-left:10px;" >\n\t\t\t\t\t\t\t\t\t<input type="text" tabindex="-1" id="bdDNameID"  style="display: none; height: 24px;min-height: 24px; min-width: 200px;" onBlur="setbdDName()" placeholder="\u8bf7\u8f93\u5165\u5bfc\u822a\u76ee\u7684\u540d\u79f0" data-alloy-tabstop="true" class="tox-textfield" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="setsize showBox">\n\t\t\t\t\t\t\t\t<label class="tox-label" for="form-field_597838573111604453101745" style="font-size: 18px; padding-left:0px; letter-spacing: 1px;margin-bottom:10px; border-bottom: 1px solid #d6d6d6;">\u8bbe\u7f6e\u4fe1\u606f\u5f39\u6846</label>\n\t\t\t\t\t\t\t\t<div class="tox-form__controls-h-stack" style="padding-left:10px;">\n\t\t\t\t\t\t\t\t\t<div class="tox-form__group" style="flex: 1;">\n\t\t\t\t\t\t\t\t\t\t<label class="tox-label" for="form-field_597838573111604453101745">\u5bbd</label>\n\t\t\t\t\t\t\t\t\t\t<input type="text" tabindex="-1" id="boxwInputID"   onBlur="setboxWHsize(0)" data-alloy-tabstop="true" class="tox-textfield" id="">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="tox-form__group" style="flex: 1;">\n\t\t\t\t\t\t\t\t\t\t<label class="tox-label" for="">\u9ad8</label>\n\t\t\t\t\t\t\t\t\t\t<input type="text" tabindex="-1" id="boxhInputID"   onBlur="setboxWHsize(1)" data-alloy-tabstop="true" class="tox-textfield" >\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="tox-form__group" style="flex: 0.5;"><label class="tox-label">&nbsp;</label>\n\t\t\t\t\t\t\t\t\t\t <button title="\u4fdd\u6301\u5bbd\u9ad8\u6bd4" type="button" data-alloy-tabstop="true" tabindex="-1" class="tox-lock tox-button tox-button--naked tox-button--icon tox-locked" aria-pressed="true">\n\t\t\t\t\t\t\t\t\t\t\t <span class="tox-icon tox-lock-icon__lock" id="boxlockID"  style="display: none;"  onclick="boxlock(true)"><svg width="24" height="24"><path d="M16.3 11c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H7.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H8V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h.3zM10 8v3h4V8a1 1 0 0 0-.3-.7A1 1 0 0 0 13 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7z" fill-rule="evenodd"></path></svg></span>\n\t\t\t\t\t\t\t\t\t\t\t <span class="tox-icon tox-lock-icon__unlock" id="boxunlockID" style="display: block;"  onclick="boxlock(false)"><svg width="24" height="24"><path d="M16 5c.8 0 1.5.3 2.1.9.6.6.9 1.3.9 2.1v3h-2V8a1 1 0 0 0-.3-.7A1 1 0 0 0 16 7h-2a1 1 0 0 0-.7.3 1 1 0 0 0-.3.7v3h.3c.2 0 .3 0 .5.2l.2.6v7.4c0 .3 0 .4-.2.6l-.6.2H4.8c-.3 0-.4 0-.6-.2a.7.7 0 0 1-.2-.6v-7.4c0-.3 0-.4.2-.6l.5-.2H11V8c0-.8.3-1.5.9-2.1.6-.6 1.3-.9 2.1-.9h2z" fill-rule="evenodd"></path></svg></span>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="tox-form__group" style="flex: 2;">\n\t\t\t\t\t\t\t\t\t\t\t<label class="tox-label" for="form-field_597838573111604453101745">\u8bbe\u7f6e\u80cc\u666f\u989c\u8272(#666)</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" tabindex="-1"   onBlur="setboxbg()" data-alloy-tabstop="true" class="tox-textfield" id="boxBgID">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t   <div class="textareaBox showBox">\n\t\t\t\t\t\t <div class="tox-form__group tox-form__group--stretched">\n\t\t\t\t\t\t\t <label class="tox-label" style="font-size: 18px; padding-left:0px; letter-spacing: 1px;margin-bottom:10px; border-bottom: 1px solid #d6d6d6;" for="form-field_1311027803221604462469765">\u4fe1\u606f\u7f16\u8f91(\u652f\u6301html,\u7981\u7528\u3010\u3011\uffe5^)</label>\n\t\t\t\t\t\t\t <textarea type="text"  class="tox-textarea"  onchange="setBoxHtml()" placeholder="\u4fe1\u606f\u6807\u7b7e" id="textID"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t\t  <script>\n\t\t\t\t\t  function openBox(){\n\t\t\t\t\t\t if( document.getElementById("setBoxID").className=="setBox tox on") document.getElementById("setBoxID").className="setBox tox";\n\t\t\t\t\t\t  else document.getElementById("setBoxID").className="setBox tox on";\n\t\t\t\t\t  }\n\t\t\t\t\t\tvar editor=parent.tinymce.activeEditor;\n\t\t\t\t\t\tfunction insCnt(txt){\n\t\t\t\t\t\t\teditor.insertContent(txt);\n\t\t\t\t\t\t\tparent.tinymce.activeEditor.windowManager.close();\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\tvar map, geocoder;\n\t\t\t\t\t\tvar marker; \n\t\t\t\t\t\tvar lng,lat;\n\t\t\t\t\t\tvar infoBox;\n\t\t\t\t\t\tfunction initialize() {\n\t\t\t\t\t\t\tparent.tinymceBDBoxHtml=""\n\t\t\t\t\t\t\tmap = new BMap.Map(\'map_canvas\');\n\t\t\t\t\t\t\tvar point = new BMap.Point(116.331398,39.897445);\n\t\t\t\t\t\t\tmap.centerAndZoom(point, 14);\n\t\t\t\t\t\t\tmap.addControl(new BMap.NavigationControl());\n\t\t\t\t\t\t\tmap.enableScrollWheelZoom();\n\t\t\t\t\t\n\t\t\t\t\t\t\t//\u6839\u636eIP\u5b9a\u4f4d\n\t\t\t\t\t\t\tvar myCity = new BMap.LocalCity();\n\t\t\t\t\t\t\tmyCity.get(function(result){\n\t\t\t\t\t\t\t\tmap.setCenter(result.name);\n\t\t\t\t\t\t\t\tlng = result.center.lng;\n\t\t\t\t\t\t\t\tlat = result.center.lat;\n\t\t\t\t\t\t\t\tvar marker = new BMap.Marker(new BMap.Point(lng, lat));\n\t\t\t\t\t\t\t\tmap.clearOverlays();\n\t\t\t\t\t\t\t\tmap.addOverlay(marker);\n\t\t\t\t\t\t\t\tparent.tinymceLng = lng;\n\t\t\t\t\t\t\t\tparent.tinymceLat = lat;\t\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\n\t\t\t\t\t\t\tvar gc = new BMap.Geocoder();\n\t\t\t\t\t\t\tgc.getLocation(point, function(rs){\n\t\t\t\t\t\t\t\tvar addComp = rs.addressComponents;\n\t\t\t\t\t\t\t\tvar address = [addComp.city].join(\'\');\n\t\t\t\t\t\t\t\t//console.log(address);\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t \n\t\t\t\t\t\t\n\t\t\t\t\t\t\tmap.addEventListener(\'click\',function(e){\n\t\t\t\t\t\t\t\t//alert(e.point.lng + "," + e.point.lat);\n\t\t\t\t\t\t\t\tlng=e.point.lng;\n\t\t\t\t\t\t\t\tlat=e.point.lat;\n\t\t\t\t\t\t\t\tmarker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));\n\t\t\t\t\t\t\t\t// console.log( map.getZoom())\n\t\t\t\t\t\t\t\t// console.log( map)\n\t\t\t\t\n\t\t\t\t\t\t\t\tparent.tinymceBDZoom = map.getZoom()\n\t\t\t\t\t\t\t\tmap.clearOverlays();\n\t\t\t\t\t\t\t\tmap.addOverlay(marker);\n\t\t\t\t\t\t\t\t//insCnt(lng+\',\'+lat);\n\t\t\t\t\t\t\t\tparent.tinymceLng=lng;\n\t\t\t\t\t\t\t\tparent.tinymceLat=lat;\n\t\t\t\t\t\t\t\t// parent.tinymceLat=lat;\n\t\t\t\t\t\t\t\tmap.addOverlay(marker); // \u5c06\u6807\u6ce8\u6dfb\u52a0\u5230\u5730\u56fe\u4e2d\n\t\t\t\t\t\t\t\t if(!infoBox){setInfoBox();}\n\t\t\t\t\t\t\t\t else{\n\t\t\t\t\t\t\t\t\tinfoBox.remove();\n\t\t\t\t\t\t\t\t\tsetInfoBox();\n\t\t\t\t\t\t\t\t\topenCheck.checked ?infoBox.show():\'\';\n\t\t\t\t\t\t\t\t }\n\t\t\t\t\n\t\t\t\t\t\t\t});\n\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t\tdocument.getElementById(\'kw\').addEventListener(\'keypress\',function(e){\n\t\t\t\t\t\t\t\tif(e.keyCode==\'13\'){\n\t\t\t\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\t\t\t\tsearchByStationName();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t\tfunction setboxbg(){\n\t\t\t\t\t\t\tparent.tinymceBDBgColor = document.getElementById("boxBgID").value;\n\t\t\t\t\t\t\tif(parent.tinymceBDBgColor) document.getElementById("infoBoxContentID").style.background = parent.tinymceBDBgColor|| "rgba(255,255,255,0.95)";\n\t\t\t\t\t\t\t// console.log(parent.tinymceBDBgColor)\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfunction setbdDName(){\n\t\t\t\t\t\t\tparent.tinymceBDDName = document.getElementById("bdDNameID").value;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfunction setInfoBox(){\n\t\t\t\t\t\t\t\tlet temHtml = parent.tinymceBDBoxHtml? \'<div class="infoBoxContent" id="infoBoxContentID">\'+parent.tinymceBDBoxHtml+\'<i></i></div>\' : \'<div class="infoBoxContent" id="infoBoxContentID"><p>\u4fe1\u606f\u6807\u7b7e</p> <i></i></div>\'\n\t\t\t\t\t\t\t\tinfoBox = new BMapLib.InfoBox(map,temHtml,{\n\t\t\t\t\t\t\t\t\tboxStyle:{\n\t\t\t\t\t\t\t\t\tbackground:"rgba(255,255,255,0)"\n\t\t\t\t\t\t\t\t\t,width: parent.tinymceBDBoxW || "270px"\n\t\t\t\t\t\t\t\t\t,closeIconMargin: "1px 1px 0 0"\n\t\t\t\t\t\t\t\t\t,enableAutoPan: true\n\t\t\t\t\t\t\t\t\t,align: INFOBOX_AT_TOP\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tinfoBox.open(marker); \n\t\t\t\t\t\t\t\tinfoBox.hide();\n\t\t\t\t\t\t\t\tif(parent.tinymceBDBgColor) document.getElementById("infoBoxContentID").style.background = parent.tinymceBDBgColor|| "rgba(255,255,255,0.95)";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\tparent.tinymceBDDH = false;\n\t\t\t\t\t\tfunction openDH(){\n\t\t\t\t\t\t\tif(document.getElementById("openDHID").checked){\n\t\t\t\t\t\t\t\tparent.tinymceBDDH = document.getElementById("openDHID").checked;\n\t\t\t\t\t\t\t\tdocument.getElementById("bdDNameID").style.display="block";\n\t\t\t\t\t\t\t}else{document.getElementById("bdDNameID").style.display="none";}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t}\n\t\t\t\t\t\tparent.tinymceBDSF = false;\n\t\t\t\t\t\tfunction openSF(){\n\t\t\t\t\t\t\tparent.tinymceBDSF = document.getElementById("openSFID").checked;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t\tlet openCheck = document.getElementById(\'openboxID\');\n\t\t\t\t\t\tfunction showBOX(){\n\t\t\t\t\t\t\t// infoBox.show();\n\t\t\t\t\t\t\tif(infoBox){\n\t\t\t\t\t\t\t\tif(openCheck.checked ){\n\t\t\t\t\t\t\t\t\t infoBox.show();\n\t\t\t\t\t\t\t\t\t document.getElementsByClassName("showBox")[0].setAttribute("name", "show")\n\t\t\t\t\t\t\t\t\t document.getElementsByClassName("showBox")[1].setAttribute("name", "show")\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t}else{ \n\t\t\t\t\t\t\t\t\tinfoBox.hide();\n\t\t\t\t\t\t\t\t\tdocument.getElementsByClassName("showBox")[0].setAttribute("name", "hide")\n\t\t\t\t\t\t\t\t\t document.getElementsByClassName("showBox")[1].setAttribute("name", "hide")\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\talert("\u8bf7\u5148\u6807\u8bb0\u5730\u70b9");\n\t\t\t\t\t\t\t\topenCheck.checked= false;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfunction setBoxHtml(){\n\t\t\t\t\t\t\tparent.tinymceBDBoxHtml = document.getElementById("textID").value;\n\t\t\t\t\t\t\tinfoBox.setContent(\'<div class="infoBoxContent" id="infoBoxContentID"><p>\'+parent.tinymceBDBoxHtml+\'</p><i></i></div>\');\n\t\t\t\t\t\t\tif(parent.tinymceBDBgColor) document.getElementById("infoBoxContentID").style.background = parent.tinymceBDBgColor|| "rgba(255,255,255,0.95)";\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfunction searchByStationName() {\n\t\t\t\t\t\t\tvar localSearch = new BMap.LocalSearch(map);\n\t\t\t\t\t\t\tlocalSearch.enableAutoViewport(); //\u5141\u8bb8\u81ea\u52a8\u8c03\u8282\u7a97\u4f53\u5927\u5c0f\n\t\t\t\t\t\t\tmap.clearOverlays();//\u6e05\u7a7a\u539f\u6765\u7684\u6807\u6ce8\n\t\t\t\t\t\t\tvar keyword = document.getElementById("kw").value;\n\t\t\t\t\t\t\tlocalSearch.setSearchCompleteCallback(function (searchResult) {\n\t\t\t\t\t\t\t\t// console.log(searchResult);\n\t\t\t\t\t\t\t\tif(searchResult.Br.length==0){\n\t\t\t\t\t\t\t\t\talert(\'\u641c\u7d22\u4e0d\u5230\u8be5\u5730\u533a\');\n\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tvar poi = searchResult.Br[0];\n\t\t\t\t\t\t\t\tmap.centerAndZoom(poi.point, 14);\n\t\t\t\t\t\t\t\tmarker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));\n\t\t\t\t\t\t\t\tparent.tinymceLng=poi.point.lng;\n\t\t\t\t\t\t\t\tparent.tinymceLat=poi.point.lat;\n\t\t\t\t\t\t\t\tmap.addOverlay(marker);\n\t\t\t\t\t\t\t\tif(!infoBox){setInfoBox();}\n\t\t\t\t\t\t\t\t else{\n\t\t\t\t\t\t\t\t\tinfoBox.remove();\n\t\t\t\t\t\t\t\t\tsetInfoBox();\n\t\t\t\t\t\t\t\t\topenCheck.checked ?infoBox.show():\'\';\n\t\t\t\t\t\t\t\t }\n\t\t\t\t\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tlocalSearch.search(keyword);\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\tvar unFlog = false;\n\t\t\t\t\t\tlet wInput = document.getElementById("wInputID");\n\t\t\t\t\t\tlet hInput = document.getElementById("hInputID");\n\t\t\t\t\t\tparent.tinymceBDW = wInput.value="400px";\n\t\t\t\t\t\tparent.tinymceBDH = hInput.value="200px";\n\t\t\t\t\t\tvar boxunFlog = false;\n\t\t\t\t\t\tlet boxwInput = document.getElementById("boxwInputID");\n\t\t\t\t\t\tlet boxhInput = document.getElementById("boxhInputID");\n\t\t\t\t\t\tparent.tinymceBDBoxW = boxwInput.value="270px";\n\t\t\t\t\t\tparent.tinymceBDBoxH = boxhInput.value="auto";\n\t\t\t\t\t\tfunction lock(o){\n\t\t\t\t\t\t\tif(o){\n\t\t\t\t\t\t\t\tdocument.getElementById("lockID").style.display="none";\n\t\t\t\t\t\t\t\tdocument.getElementById("unlockID").style.display="block";\n\t\t\t\t\t\t\t   unFlog = false;\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t   document.getElementById("unlockID").style.display="none";\n\t\t\t\t\t\t\t   document.getElementById("lockID").style.display="block";\t\n\t\t\t\t\t\t\t   unFlog = true;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfunction boxlock(o){\n\t\t\t\t\t\t\tif(o){\n\t\t\t\t\t\t\t\tdocument.getElementById("boxlockID").style.display="none";\n\t\t\t\t\t\t\t\tdocument.getElementById("boxunlockID").style.display="block";\n\t\t\t\t\t\t\t\tboxunFlog = false;\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t   document.getElementById("boxunlockID").style.display="none";\n\t\t\t\t\t\t\t   document.getElementById("boxlockID").style.display="block";\t\n\t\t\t\t\t\t\t   boxunFlog = true;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfunction proportion(o1,o2,n1,n2){\n\t\t\t\t\t\t\tif(!(/^[0-9]+.?[0-9]*$/.test(n2.value.replace(/px/i,\'\').replace(/%/,\'\')))){n2.value="100%"}\n\t\t\t\t\t\t\tlet proportion = (parseInt(o1)/parseInt(o2))*parseInt(n2.value);\n\t\t\t\t\t\t\t!proportion? proportion = 100:\'\';\n\t\t\t\t\t\t\t// console.log(proportion);\n\t\t\t\t\t\t\t   if(n2.value.match("%")){\n\t\t\t\t\t\t\t\t\tn1.value= proportion + \'%\';\n\t\t\t\t\t\t\t   }else{\n\t\t\t\t\t\t\t\t  n1.value= proportion + \'px\';\n\t\t\t\t\t\t\t\t  n2.value.match(\'px\')?\'\':n2.value = n2.value+\'px\'\n\t\t\t\t\t\t\t  }\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfunction setWHsize(i){\n\t\t\t\t\t\t\tif(unFlog){\n\t\t\t\t\t\t\t\ti ? proportion(parent.tinymceBDW,parent.tinymceBDH, wInput, hInput,i) : proportion(parent.tinymceBDH,parent.tinymceBDW, hInput , wInput);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tparent.tinymceBDW = wInput.value;\n\t\t\t\t\t\t\tparent.tinymceBDH = hInput.value;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfunction setboxWHsize(i){\n\t\t\t\t\t\t\tif(boxunFlog){\n\t\t\t\t\t\t\t\ti ? proportion(parent.tinymceBDBoxW,parent.tinymceBDBoxH, boxwInput, boxhInput,i) : proportion(parent.tinymceBDBoxH,parent.tinymceBDBoxW, boxhInput , boxwInput);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tparent.tinymceBDBoxW = boxwInput.value;\n\t\t\t\t\t\t\tparent.tinymceBDBoxH = boxhInput.value;\n\t\t\t\t\t\t\tinfoBox.remove()\n\t\t\t\t\t\t\tsetInfoBox();\n\t\t\t\t\t\t\tinfoBox.show();\n\t\t\t\t\t\t\tdocument.getElementById("infoBoxContentID").style.width =  parent.tinymceBDBoxW;\n\t\t\t\t\t\t\tdocument.getElementById("infoBoxContentID").style.height = parent.tinymceBDBoxH;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\tonbeforeunload = function(){\n\t\t\t\t\t\t\t// console.log("1212")\n\t\t\t\t\t\t\tparent.tinymceBDW = wInput.value;\n\t\t\t\t\t\t\tparent.tinymceBDH = hInput.value;\n\t\t\t\t\t\t\tparent.tinymceBDBoxW = boxwInput.value;\n\t\t\t\t\t\t\tparent.tinymceBDBoxH = boxhInput.value;\n\t\t\t\t\t\t\tparent.tinymceBDBoxHtml = document.getElementById("textID").value;\n\t\t\t\t\t\t\tparent.tinymceBDDH = document.getElementById("openDHID").checked;\n\t\t\t\t\t\t\tparent.tinymceBDBgColor = document.getElementById("boxBgID").value;\n\t\t\t\t\t\t\tparent.tinymceBDSF = document.getElementById("openSFID").checked;\n\t\t\t\t\t\t\tparent.tinymceBDDName = document.getElementById("bdDNameID").value;\n\t\t\t\t\t\t}\n\t\t\t\t\t\x3c/script>\n\t\t\t\t</body>\n\t\t\t\t</html>\n                '},
  buttons:[{type:"cancel",text:"Close"},{type:"custom",text:"Save",name:"save",primary:!0}],onAction:function(f,g){switch(g.name){case "save":tinymceBDBoxHtml=tinymceBDBoxHtml.replace(/'/g,"\uffe5").replace(/"/g,"^").replace(/>/g,"\u3011").replace(/</g,"\u3010"),tinymceBDBgColor=tinymceBDBgColor.replace(/#/g,"@").replace(/\(/g,"+").replace(/\)/g,"-"),html='<iframe data-tag="bdMap" src="'+e+"#center="+tinymceLng+"%2C"+tinymceLat+"&zoom="+(tinymceBDZoom?tinymceBDZoom:"14")+"&bwidth="+tinymceBDBoxW+"&bheight="+
  tinymceBDBoxH+"&boxhtml="+tinymceBDBoxHtml+"&DH="+tinymceBDDH+"&bgColor="+tinymceBDBgColor+"&SF="+tinymceBDSF+"&dName="+tinymceBDDName+'" frameborder="0" style=" min-height: 100px;border:#ccc solid 1px;" height="'+b.height+'" width="'+b.width+'">',a.insertContent(html),tinymceBDDName=tinymceBDBgColor=tinymceBDSF=tinymceBDDH=tinymceBDBoxHtml=tinymceBDBoxH=tinymceBDBoxW=tinymceBDH=tinymceBDW=tinymceBDZoom=tinymceLat=tinymceLng="",f.close()}}})};a.ui.registry.getAll().icons.bdmap||a.ui.registry.addIcon("bdmap",
  '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M670.8,733c21.1-46.1,45.6-73.7,64.5-90.5,10.3-9.2,21.1-16.8,32.5-21.7-6-8.1-10.6-15.3-15.2-22.2-8.4-12.6-17.3-27.1-21.7-34.1-28.7,15.7-55.9,48.2-77.5,77-12.5,16.7-23.8,34.7-34.7,53.7l52,37.9zM450.2,803.5c6,14.6,9.2,29.3,13.5,40.6,1.6,7.1,3.2,13.5,5.4,19.5,19.5-6,39-12,58-20.1,32.5-13.6,71-33,95.4-58.5l-45-48.2c-8.1,8.1-17.9,14.7-30.4,22.8-21.1,13.6-51.5,30.4-97,43.9zM373.8,204.1c0-52,43.4-95.4,95.4-95.4,53.7,0,94.8,43.4,94.8,95.4,0,53.6-41.2,95.4-94.8,95.4-52,0-95.4-41.7-95.4-95.4zm-105.7,0c0,20.1,2.7,39.6,8.7,58.5h-2.2c16.8,39,35.8,79.9,52,111.1l27.1,52c47.5,91.2,105.7,191.3,114.3,204.3,1.1,0,0.547,0,1.1,1.1,32.5-54.7,60.6-104.1,81.8-143.6l34.1-63.4,26.6-52c15.8-30.9,34.7-71,51.5-110.6h-1.6c6-19,8.7-38.5,8.7-58.5,0-110.6-90.5-200.5-201.1-200.5-111.1,0-201.1,90-201.1,200.5zM229.6,800.2c15.2,11.4,31.3,21.3,48.2,30.4,30.2,16,68.8,34.1,112.7,40.7,1.6-13.1,2.5-29.9,4.3-42.3l3.3-21.7c-11.9-2.2-25.6-5.6-40.1-10.8-24.5-8.8-55.8-23.8-90.5-48.2-9.2,13.5-18.6,25.7-26,35.8l-11.9,16.3zM17.2,949.8c0,41.2,33.6,74.2,74.2,74.2H932.5a74,74,0,0,0,74.2-74.2V336.9A74,74,0,0,0,932.5,262.6H728.2L692.4,362.9H894.6c9.2,0,15.7,6,15.7,15.2V511.4c-28.7-0.531-73.2,2.2-116.5,23.3l5.4,14.6,17.3,45c25.5-8.1,47.7-14.2,65-16.8l28.7-4.3V911.9c0,9.2-6.5,15.1-15.7,15.1H133.2c-9.2,0-15.7-5.9-15.7-15.1V704.8a261.1,261.1,0,0,0,15.2,14.1c9.3,8,23.3,21.1,41.2,36.3,10.3-9.2,20-21.2,28.2-29.8,4.8-5,9.2-9.8,13-14.6-42.8-35.8-86.2-86.2-97.5-100.3V378c0-8.7,6.5-15.2,15.7-15.2h53L209.5,262.5H91.4c-40.7,0-74.2,33.1-74.2,74.3V949.7z"/></svg>');
  a.ui.registry.addButton("bdmap",{icon:"bdmap",tooltip:"\u63d2\u5165\u767e\u5ea6\u5730\u56fe",onAction:function(){d();document.querySelector(".tox-dialog__body-content").style.padding=0}});a.ui.registry.addMenuItem("bdmap",{text:"\u63d2\u5165\u767e\u5ea6\u5730\u56fe",onAction:function(){d();document.querySelector(".tox-dialog__body-content").style.padding=0}});return{getMetadata:function(){return{name:"\u63d2\u5165\u767e\u5ea6\u5730\u56fe",url:"https://github.com/Five-great/tinymce-plugins"}}}});