(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-couponDetails-couponDetails"],{4783:function(t,e,a){"use strict";a.r(e);var i=a("9d25"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"65ae":function(t,e,a){"use strict";a.r(e);var i=a("83bc"),n=a("4783");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("bc23");var o,c=a("f0c5"),l=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"da5e0e82",null,!1,i["a"],o);e["default"]=l.exports},"6a3c":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".coupon-title[data-v-da5e0e82]{background-color:#fafafa;padding:%?20?% %?24?%}.pad[data-v-da5e0e82]{padding-left:%?10?%}.row[data-v-da5e0e82]{background-color:#fff}.coupon-time[data-v-da5e0e82]{color:#f63100!important}.text-item[data-v-da5e0e82]{padding:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.text-item .text-title[data-v-da5e0e82]{height:%?40?%;line-height:%?40?%;font-size:%?28?%;opacity:.6;color:#332f2e;letter-spacing:0}.text-item .text-conten[data-v-da5e0e82]{font-size:%?28?%;font-weight:600;color:#332f2e;letter-spacing:0;text-align:right}.code-title[data-v-da5e0e82]{opacity:.8;font-size:%?24?%;color:#332f2e;text-align:center;padding:%?30?% 0}",""]),t.exports=e},"83bc":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"details"},[a("v-uni-view",{staticClass:"coupon-title"},[a("v-uni-view",{staticClass:"coupon-item"},[a("v-uni-view",{staticClass:"row-line cl-monet"},[3==t.detailData.type?a("v-uni-view",{staticClass:"money-num"},[t._v(t._s((10*t.detailData.discount).toFixed(1))+"折")]):a("v-uni-view",{staticClass:"money-num"},[t._v("￥"+t._s(t.detailData.amount))]),a("v-uni-view",{staticClass:"money-text"},[t._v(t._s(t.typeList[t.detailData.type]))])],1),a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"row-conten"},[a("v-uni-view",{staticClass:"row-line "},[a("v-uni-view",{staticClass:"coupon-min-title"},[t._v(t._s(t.detailData.templateName))]),a("v-uni-view",{staticClass:"coupon-time"},[t._v("截止日期："+t._s(t.detailData.edate?t.detailData.edate:"无限制"))])],1),a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.etdiscounts(t.detailData.ticketCode)}}},[t._v(t._s(t.ticketStatusList[t.detailData.ticketStatus]))])],1),a("v-uni-view",{staticClass:"meet"},[t.detailData.enableAmount?a("v-uni-view",{staticClass:"meet-text"},[t._v("满"+t._s(t.detailData.enableAmount)+"可用")]):t._e()],1)],1)],1)],1),1==t.detailData.ticketStatus?a("v-uni-view",{staticStyle:{"text-align":"center"}},[a("v-uni-view",{staticClass:"code-title"},[t._v("请将此条形码出示给收银员扫码")]),a("v-uni-view",{staticStyle:{display:"inline-block"}},[t.qrShow?a("tkiBarcode",{ref:"code128",attrs:{cid:"code128",loadMake:!1,opations:t.opations,onval:!0,format:"code128",val:t.val},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.code128.apply(void 0,arguments)}}}):t._e()],1)],1):t._e(),a("v-uni-view",{staticClass:"details-text"},[a("v-uni-view",{staticClass:"text-item"},[a("v-uni-view",{staticClass:"text-title"},[t._v("优惠券名称")]),a("v-uni-view",{staticClass:"text-conten"},[t._v(t._s(t.detailData.templateName))])],1),a("v-uni-view",{staticClass:"text-item"},[a("v-uni-view",{staticClass:"text-title"},[t._v("券类型")]),a("v-uni-view",{staticClass:"text-conten"},[t._v(t._s(t.typeList[t.detailData.type]))])],1),a("v-uni-view",{staticClass:"text-item"},[a("v-uni-view",{staticClass:"text-title"},[t._v("开始时间")]),a("v-uni-view",{staticClass:"text-conten"},[t._v(t._s(t.detailData.edate?t.detailData.bdate:"无限制"))])],1),a("v-uni-view",{staticClass:"text-item"},[a("v-uni-view",{staticClass:"text-title"},[t._v("结束时间")]),a("v-uni-view",{staticClass:"text-conten"},[t._v(t._s(t.detailData.edate?t.detailData.edate:"无限制"))])],1),a("v-uni-view",{staticClass:"text-item"},[a("v-uni-view",{staticClass:"text-title"},[t._v("使用规则")]),a("v-uni-view",{staticClass:"text-conten"},[t.detailData.enableAmount?a("v-uni-view",{staticClass:"meet-text"},[t._v("满"+t._s(t.detailData.enableAmount)+"可用")]):t._e()],1)],1),t.detailData.summary?a("v-uni-view",{staticClass:"text-item"},[a("v-uni-view",{staticClass:"text-title"},[t._v("券描述")]),a("v-uni-view",{staticClass:"text-conten"},[a("v-uni-view",{staticClass:"meet-text"},[t._v(t._s(t.detailData.summary))])],1)],1):t._e()],1)],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},"9d25":function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("1956"),s=i(a("d54a")),o={components:{tkiBarcode:s.default},data:function(){return{typeList:["满减券","礼品券","抵扣券","折扣券"],ticketCode:"",ticketStatusList:["未发放","立即使用","已使用","已无效","立即领取"],weekIndex:["星期天","星期一","星期二","星期三","星期四","星期五","星期六","星期天"],detailData:{},val2:"code 128",val:"FB19A1650-100S",qrShow:!1,opations:{width:4,height:120,displayValue:!0,textAlign:"center",textPosition:"bottom",textMargin:0,fontSize:28,background:"#FFFFFF",margin:0}}},onLoad:function(t){this.getDetail(t)},methods:{code128:function(t){},etdiscounts:function(t){var e={code:t,openId:uni.getStorageSync("isWxMemberOpenId")||this.$route.query.openId};4==this.detailData.ticketStatus&&n.http.post("/tapi/receiveTicket",e).then((function(t){console.log(t),0===t.data.code&&(uni.showModal({title:"提示",content:"领取成功",showCancel:!1}),uni.navigateBack())})).catch((function(t){}))},getDetail:function(t){var e=this,a={ticketCode:[t.id]};n.http.post("/tapi/couponInfo",a).then((function(t){console.log(t),0===t.data.code&&(e.detailData=t.data.data[0],e.$nextTick((function(){e.val=t.data.data[0].ticketCode})),e.qrShow=!0)})).catch((function(t){}))}}};e.default=o},"9ff2":function(t,e,a){var i=a("6a3c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7112006c",i,!0,{sourceMap:!1,shadowMode:!1})},bc23:function(t,e,a){"use strict";var i=a("9ff2"),n=a.n(i);n.a}}]);