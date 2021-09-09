(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{351:function(o,r,e){},450:function(o,r,e){"use strict";e(351)},480:function(o,r,e){"use strict";e.r(r);var l={"type-primary":"#2979ff","type-error":"#fa3534","type-warning":"#ff9900","type-success":"#19be6b","type-info":"#909399","type-primary-light":"#ecf5ff","type-error-light":"#fef0f0","type-warning-light":"#fdf6ec","type-success-light":"#dbf1e1","type-info-light":"#f4f4f5","type-primary-dark":"#2b85e4","type-error-dark":"#dd6161","type-warning-dark":"#f29100","type-success-dark":"#18b566","type-info-dark":"#82848a","type-primary-disabled":"#a0cfff","type-error-disabled":"#fab6b6","type-warning-disabled":"#fcbd71","type-success-disabled":"#71d5a1","type-info-disabled":"#c8c9cc","main-color":"#303133","content-color":"#606266","tips-color":"#909399","light-color":"#c0c4cc","border-color":"#e4e7ed","bg-color":"#f3f4f6","form-item-border-color":"#dcdfe6","form-item-height":"70rpx"},c={data:()=>({color:l,lastTime:""}),created(){try{let o=JSON.parse(localStorage.getItem("themeData")),r=localStorage.getItem("themeTime");o&&r&&(this.color=o,this.lastTime=`您于${r}配置过一次主题，已为您读取上一次的配置，如不需要，请在底部重置为默认的主题。`)}catch(o){}},methods:{downThemeFile(){new Date;let o=`// 此自定义uView主题生成于${this.dateTime()}\n`;o+="// 地址：http://www.uviewui.com/guide/theme.html\n\n";for(let r in this.color){o+="$u-"+r+": "+this.color[r]+";"+"\n"}try{localStorage.setItem("themeData",JSON.stringify(this.color)),localStorage.setItem("themeTime",this.dateTime())}catch(o){}this.download("uview.theme.scss",o)},download(o,r){let e=document.createElement("a");e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(r)),e.setAttribute("download",o),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)},resetTheme(){this.$confirm("确定要重置主题吗？").then(o=>{this.color=l,this.lastTime="";try{localStorage.removeItem("themeData"),localStorage.removeItem("themeTime")}catch(o){}done()}).catch(o=>{})},dateTime(){let o=new Date,r=o.getFullYear(),e=o.getMonth()+1,l=o.getDate(),c=o.getHours(),t=o.getMinutes(),a=r+"-";return e<10&&(a+="0"),a+=e+"-",l<10&&(a+="0"),a+=l+" ",c<10&&(a+="0"),a+=c+":",t<10&&(a+="0"),a+=t,a}}},t=(e(450),e(22)),a=Object(t.a)(c,(function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h2",{attrs:{id:"自定义主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义主题"}},[o._v("#")]),o._v(" 自定义主题")]),o._v(" "),e("demo-model",{attrs:{url:"/pages/componentsC/color/index"}}),o._v(" "),e("p",[o._v("uView目前可以自定主题色，字体颜色，边框颜色等，所有组件内部的样式，都基于同一套主题，比如您修改了"),e("code",[o._v("primary")]),o._v("主题色，所有用到了"),e("code",[o._v("primary")]),o._v("颜色\n的组件都会受影响。")]),o._v(" "),e("h3",{attrs:{id:"教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#教程"}},[o._v("#")]),o._v(" 教程")]),o._v(" "),e("ol",[e("li",[o._v('可以在打开的颜色拾取器中输入或者选择颜色，再点"确定"按钮即可。')]),o._v(" "),e("li",[o._v("颜色配置完后，在页面底部下载文件，会得到一个名为"),e("code",[o._v("uview.theme.scss")]),o._v("的文件。")]),o._v(" "),e("li",[o._v("将文件复制到项目的公共目录(视情况而定)中，再在项目根目录的"),e("code",[o._v("uni.scss")]),o._v("中引入即可。")]),o._v(" "),e("li",[o._v("删除"),e("code",[o._v("uni.scss")]),o._v("文件中原来引入的"),e("code",[o._v("@import 'uview-ui/theme.scss';")]),o._v("(旧的内置主题文件引入语句)。")]),o._v(" "),e("li",[o._v("重新编译项目或者重启HX即可生效。")])]),o._v(" "),e("h3",{attrs:{id:"主题色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题色"}},[o._v("#")]),o._v(" 主题色")]),o._v(" "),o.lastTime?e("el-alert",{staticStyle:{margin:"20px 0"},attrs:{title:o.lastTime,type:"success",effect:"dark"}}):o._e(),o._v(" "),e("p",[o._v("目前有五个主题色，每个主题色又分别有对应的"),e("code",[o._v("light")]),o._v("(淡色)、"),e("code",[o._v("dark")]),o._v("(深色)、"),e("code",[o._v("disabled")]),o._v("(禁止状态时的颜色)：")]),o._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-primary"],name:"primary",value:o.color["type-primary"]},model:{value:o.color["type-primary"],callback:function(r){o.$set(o.color,"type-primary",r)},expression:"color['type-primary']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-success"],name:"success",value:o.color["type-success"]},model:{value:o.color["type-success"],callback:function(r){o.$set(o.color,"type-success",r)},expression:"color['type-success']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-error"],name:"error",value:o.color["type-error"]},model:{value:o.color["type-error"],callback:function(r){o.$set(o.color,"type-error",r)},expression:"color['type-error']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-warning"],name:"warning",value:o.color["type-warning"]},model:{value:o.color["type-warning"],callback:function(r){o.$set(o.color,"type-warning",r)},expression:"color['type-warning']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-info"],name:"info",value:o.color["type-info"]},model:{value:o.color["type-info"],callback:function(r){o.$set(o.color,"type-info",r)},expression:"color['type-info']"}})],1)]),o._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-primary-dark"],name:"primary-dark",value:o.color["type-primary-dark"]},model:{value:o.color["type-primary-dark"],callback:function(r){o.$set(o.color,"type-primary-dark",r)},expression:"color['type-primary-dark']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-success-dark"],name:"success-dark",value:o.color["type-success-dark"]},model:{value:o.color["type-success-dark"],callback:function(r){o.$set(o.color,"type-success-dark",r)},expression:"color['type-success-dark']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-error-dark"],name:"error-dark",value:o.color["type-error-dark"]},model:{value:o.color["type-error-dark"],callback:function(r){o.$set(o.color,"type-error-dark",r)},expression:"color['type-error-dark']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-warning-dark"],name:"warning-dark",value:o.color["type-warning-dark"]},model:{value:o.color["type-warning-dark"],callback:function(r){o.$set(o.color,"type-warning-dark",r)},expression:"color['type-warning-dark']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-info-dark"],name:"info-dark",value:o.color["type-info-dark"]},model:{value:o.color["type-info-dark"],callback:function(r){o.$set(o.color,"type-info-dark",r)},expression:"color['type-info-dark']"}})],1)]),o._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-primary-disabled"],name:"primary-disabled",value:o.color["type-primary-disabled"]},model:{value:o.color["type-primary-disabled"],callback:function(r){o.$set(o.color,"type-primary-disabled",r)},expression:"color['type-primary-disabled']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-success-disabled"],name:"success-disabled",value:o.color["type-success-disabled"]},model:{value:o.color["type-success-disabled"],callback:function(r){o.$set(o.color,"type-success-disabled",r)},expression:"color['type-success-disabled']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-error-disabled"],name:"error-disabled",value:o.color["type-error-disabled"]},model:{value:o.color["type-error-disabled"],callback:function(r){o.$set(o.color,"type-error-disabled",r)},expression:"color['type-error-disabled']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-warning-disabled"],name:"warning-disabled",value:o.color["type-warning-disabled"]},model:{value:o.color["type-warning-disabled"],callback:function(r){o.$set(o.color,"type-warning-disabled",r)},expression:"color['type-warning-disabled']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{"bg-color":o.color["type-info-disabled"],name:"info-disabled",value:o.color["type-info-disabled"]},model:{value:o.color["type-info-disabled"],callback:function(r){o.$set(o.color,"type-info-disabled",r)},expression:"color['type-info-disabled']"}})],1)]),o._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#606266","bg-color":o.color["type-primary-light"],name:"primary-light",value:o.color["type-primary-light"]},model:{value:o.color["type-primary-light"],callback:function(r){o.$set(o.color,"type-primary-light",r)},expression:"color['type-primary-light']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#606266","bg-color":o.color["type-success-light"],name:"success-light",value:o.color["type-success-light"]},model:{value:o.color["type-success-light"],callback:function(r){o.$set(o.color,"type-success-light",r)},expression:"color['type-success-light']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#606266","bg-color":o.color["type-error-light"],name:"error-light",value:o.color["type-error-light"]},model:{value:o.color["type-error-light"],callback:function(r){o.$set(o.color,"type-error-light",r)},expression:"color['type-error-light']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#606266","bg-color":o.color["type-warning-light"],name:"warning-light",value:o.color["type-warning-light"]},model:{value:o.color["type-warning-light"],callback:function(r){o.$set(o.color,"type-warning-light",r)},expression:"color['type-warning-light']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#606266","bg-color":o.color["type-info-light"],name:"info-light",value:o.color["type-info-light"]},model:{value:o.color["type-info-light"],callback:function(r){o.$set(o.color,"type-info-light",r)},expression:"color['type-info-light']"}})],1)]),o._v(" "),e("h3",{attrs:{id:"文字颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文字颜色"}},[o._v("#")]),o._v(" 文字颜色")]),o._v(" "),e("p",[o._v("内置的文字颜色有：主要文字、常规文字，次要文字、占位文字颜色，如需更详细的，详见："),e("RouterLink",{attrs:{to:"/components/color.html"}},[o._v("Color 色彩")]),o._v("章节。")],1),o._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#fff","bg-color":o.color["main-color"],name:"main-color",value:o.color["main-color"]},model:{value:o.color["main-color"],callback:function(r){o.$set(o.color,"main-color",r)},expression:"color['main-color']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#fff","bg-color":o.color["content-color"],name:"content-color",value:o.color["content-color"]},model:{value:o.color["content-color"],callback:function(r){o.$set(o.color,"content-color",r)},expression:"color['content-color']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#fff","bg-color":o.color["tips-color"],name:"tips-color",value:o.color["tips-color"]},model:{value:o.color["tips-color"],callback:function(r){o.$set(o.color,"tips-color",r)},expression:"color['tips-color']"}})],1),o._v(" "),e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#fff","bg-color":o.color["light-color"],name:"light-color",value:o.color["warning-light"]},model:{value:o.color["light-color"],callback:function(r){o.$set(o.color,"light-color",r)},expression:"color['light-color']"}})],1)]),o._v(" "),e("h3",{attrs:{id:"边框颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#边框颜色"}},[o._v("#")]),o._v(" 边框颜色")]),o._v(" "),e("p",[o._v("uView所有组件边框相关的(特别说明的除外)，用的都是这一个颜色。")]),o._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#606266","bg-color":o.color["border-color"],name:"border-color",value:o.color["border-color"]},model:{value:o.color["border-color"],callback:function(r){o.$set(o.color,"border-color",r)},expression:"color['border-color']"}})],1)]),o._v(" "),e("h3",{attrs:{id:"背景颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景颜色"}},[o._v("#")]),o._v(" 背景颜色")]),o._v(" "),e("p",[o._v("这个颜色是uView推荐的背景色，目前内置组件中使用的场景不多。")]),o._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#606266","bg-color":o.color["bg-color"],name:"bg-color",value:o.color["bg-color"]},model:{value:o.color["bg-color"],callback:function(r){o.$set(o.color,"bg-color",r)},expression:"color['bg-color']"}})],1)]),o._v(" "),e("h3",{attrs:{id:"input边框颜色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input边框颜色"}},[o._v("#")]),o._v(" Input边框颜色")]),o._v(" "),e("p",[o._v("此颜色用于在"),e("code",[o._v("u-input")]),o._v("组件显示边框时的边框颜色。")]),o._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-2"},[e("color-picker",{attrs:{color:"#606266","bg-color":o.color["form-item-border-color"],name:"form-item-border-color",value:o.color["form-item-border-color"]},model:{value:o.color["form-item-border-color"],callback:function(r){o.$set(o.color,"form-item-border-color",r)},expression:"color['form-item-border-color']"}})],1)]),o._v(" "),e("div",{staticClass:"submit-btn-group"},[e("el-button",{attrs:{type:"warning"},on:{click:o.resetTheme}},[o._v("重置")]),o._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:o.downThemeFile}},[o._v("下载主题文件")])],1)],1)}),[],!1,null,"84d3d00c",null);r.default=a.exports}}]);