(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{474:function(t,e,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("076de722",content,!0,{sourceMap:!1})},486:function(t,e,n){"use strict";n(474)},487:function(t,e,n){var r=n(8)(!1);r.push([t.i,".panel__header__date[data-v-fa0a16ec],.panel__header__id[data-v-fa0a16ec]{display:flex;align-items:center}.chipStyle[data-v-fa0a16ec]{justify-content:center;min-width:75px}.textStyle[data-v-fa0a16ec]{display:flex;width:30vw}.iconStyle[data-v-fa0a16ec]{margin:8px 0!important}@media screen and (max-width:700px){[data-v-fa0a16ec] .v-expansion-panel-content__wrap{padding:0!important}.panel__header[data-v-fa0a16ec]{padding:8px!important}.panel__header__date[data-v-fa0a16ec],.panel__header__id[data-v-fa0a16ec],.pannel__header__state[data-v-fa0a16ec]  .v-chip__content{font-size:10px}.panel__header__date[data-v-fa0a16ec]  .v-icon,.pannel__header__state[data-v-fa0a16ec]  .v-icon{font-size:14px}.textStyle[data-v-fa0a16ec]{display:none}}",""]),t.exports=r},488:function(t,e,n){"use strict";var r=n(7),c=(n(49),n(6),n(40),n(38),n(21),n(37),n(10),n(164),{props:{p:{type:Object,required:!0}},data:function(){return{FileSet:this.p.Files,dialog:!1}},computed:{sortingFile:function(){return Array.from(this.FileSet).sort((function(a,b){return a.chainNumber-b.chainNumber}))},mfFile:function(){var t=this;return Array.from(this.FileSet).filter((function(e,i){return Array.from(t.FileSet).findIndex((function(t,n){return e.chainNumber===t.chainNumber}))===i}))},countingFile:function(){var t=[];return Array.from(this.FileSet).forEach((function(e){t[e.chainNumber]=(t[e.chainNumber]||0)+1})),t.reverse()},language:function(){return this.$store.state.manager.language}},methods:{cancelRequest:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("requests/cancelRequest",{id:t.p.id});case 3:return"삭제"===e.sent.data?"한국어"===t.language?t.$manage.showMessage({message:"의뢰를 성공적으로 취소했습니다.",color:"success"}):"영어"===t.language&&t.$manage.showMessage({message:"Successfully canceled the quest.",color:"success"}):"한국어"===t.language?t.$manage.showMessage({message:"의뢰를 취소하는데 문제가 발생했습니다.",color:"error"}):"영어"===t.language&&t.$manage.showMessage({message:"Oops..Problem during cancel the quest.",color:"error"}),e.next=7,t.$store.dispatch("requests/loadRequests");case 7:t.dialog=!1,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))()},stateIcon:function(t){return"번역 준비중"===t?"mdi-briefcase-clock":"번역 시작"===t?"mdi-briefcase-edit":"번역 검수중"===t?"mdi-briefcase-search":"번역 완료"===t?"mdi-briefcase-check":"mdi-briefcase-off"},stateColor:function(t){return"번역 준비중"===t?"orange":"번역 시작"===t?"primary":"번역 검수중"===t?"indigo":"번역 완료"===t?"success":"grey"}}}),l=(n(486),n(22)),o=n(30),v=n.n(o),d=n(447),_=n(191),h=n(90),f=n(477),m=n(460),y=n(448),x=n(583),S=n(584),C=n(585),w=n(186),k=n(187),V=n(118),R=n(100),I=n(456),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"한국어"===t.language?n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"panel__header",attrs:{"disable-icon-rotate":""}},[n("div",{staticClass:"panel__header__id"},[n("v-btn",{attrs:{depressed:"",icon:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-dialog",{attrs:{width:"30vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("의뢰 취소")]),t._v(" "),n("v-card-text",[t._v("해당 의뢰를 취소하시겠습니까?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("취소")]),t._v(" "),n("v-btn",{attrs:{color:"success",text:""},on:{click:t.cancelRequest}},[t._v("확인")])],1)],1)],1),t._v("\n      의뢰ID : "+t._s(t.p.id)+"\n    ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"panel__header__date"},[n("v-icon",[t._v("mdi-calendar-clock")]),t._v("\n      "+t._s(t.p.date)+"\n    ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"pannel__header__state"},[n("v-chip",{attrs:{color:t.stateColor(t.p.trans_state),dark:""}},[t._v("\n        "+t._s(t.p.trans_state)+"\n        "),n("v-icon",{attrs:{right:"",color:"white"}},[t._v(" "+t._s(t.stateIcon(t.p.trans_state))+" ")])],1)],1)],1),t._v(" "),n("v-expansion-panel-content",t._l(t.mfFile,(function(e,i){return n("v-list",{key:e.id},[n("v-list-item",{staticClass:"itemStyle",attrs:{dense:""}},[n("v-chip",{staticClass:"chipStyle",attrs:{label:""}},[t._v("\n          "+t._s(e.field)+"\n        ")]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticStyle:{display:"flex"}},[n("v-spacer"),t._v(" "),n("v-chip",{staticClass:"chipStyle"},[t._v("\n            "+t._s(e.req_lang)+"\n          ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",[t._v("mdi-arrow-right-bold")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-chip",{staticClass:"chipStyle"},[t._v("\n            "+t._s(e.grant_lang)+"\n          ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"textStyle"},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-file-document-multiple ")]),t._v("\n          "+t._s(e.src.substring(e.src.lastIndexOf("/")+1))+"\n          "),t.countingFile[i]-1!=0?n("span",[t._v("외 "+t._s(t.countingFile[i]-1)+"개의 파일")]):t._e()],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-list-item-icon",{staticClass:"iconStyle"},[n("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check-circle ")])],1)],1)],1)})),1)],1):"영어"===t.language?n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"panel__header",attrs:{"disable-icon-rotate":""}},[n("div",{staticClass:"panel__header__id"},[n("v-btn",{attrs:{depressed:"",icon:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-dialog",{attrs:{width:"30vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Request Cancel")]),t._v(" "),n("v-card-text",[t._v("Are you sure you want to cancel the quest?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("No")]),t._v(" "),n("v-btn",{attrs:{color:"success",text:""},on:{click:t.cancelRequest}},[t._v("Yes")])],1)],1)],1),t._v("\n        의뢰ID : "+t._s(t.p.id)+"\n    ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"panel__header__date"},[n("v-icon",[t._v("mdi-calendar-clock")]),t._v("\n      "+t._s(t.p.date)+"\n    ")],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"pannel__header__state"},[n("v-chip",{attrs:{color:t.stateColor(t.p.trans_state),dark:""}},[t._v("\n        "+t._s(t.p.trans_state)+"\n        "),n("v-icon",{attrs:{right:"",color:"white"}},[t._v(" "+t._s(t.stateIcon(t.p.trans_state))+" ")])],1)],1)],1),t._v(" "),n("v-expansion-panel-content",[n("v-divider"),t._v(" "),t._l(t.mfFile,(function(e,i){return n("v-list",{key:e.id},[n("v-list-item",{attrs:{dense:""}},[n("v-chip",{staticClass:"chipStyle",staticStyle:{"min-width":"10vw"},attrs:{label:""}},[t._v("\n          "+t._s(e.field)+"\n        ")]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticStyle:{display:"flex",width:"10vw"}},[n("v-spacer"),t._v(" "),n("v-chip",{staticClass:"chipStyle"},[t._v("\n            "+t._s(e.req_lang)+"\n          ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",[t._v("mdi-arrow-right-bold")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-chip",{staticClass:"chipStyle"},[t._v("\n            "+t._s(e.grant_lang)+"\n          ")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"textStyle"},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-file-document-multiple ")]),t._v("\n          "+t._s(e.src.substring(e.src.lastIndexOf("/")+1))+"\n          "),t.countingFile[i]-1!=0?n("span",[t._v("other "+t._s(t.countingFile[i]-1)+" files")]):t._e()],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-list-item-icon",[n("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check-circle ")])],1)],1)],1)}))],2)],1):n("v-expansion-panel",[n("div",{staticClass:"text-h1"},[t._v("페이지 로드 에러")])])}),[],!1,null,"fa0a16ec",null);e.a=component.exports;v()(component,{VBtn:d.a,VCard:_.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VChip:f.a,VDialog:m.a,VDivider:y.a,VExpansionPanel:x.a,VExpansionPanelContent:S.a,VExpansionPanelHeader:C.a,VIcon:w.a,VList:k.a,VListItem:V.a,VListItemIcon:R.a,VSpacer:I.a})},499:function(t,e,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("730bd232",content,!0,{sourceMap:!1})},500:function(t,e,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("a463d71a",content,!0,{sourceMap:!1})},534:function(t,e,n){"use strict";n(499)},535:function(t,e,n){var r=n(8)(!1);r.push([t.i,".flexing[data-v-663948c6]{justify-content:space-around;justify-items:center}.Basicdiv[data-v-663948c6],.flexing[data-v-663948c6]{display:flex;align-content:center}.Basicdiv[data-v-663948c6]{justify-content:flex-start}.chipStyle[data-v-663948c6]{justify-content:center}@media screen and (max-width:500px){.Basicdiv[data-v-663948c6],.chipStyle[data-v-663948c6]{font-size:10px}.Basicdiv[data-v-663948c6]  .v-icon{font-size:14px}}",""]),t.exports=r},536:function(t,e,n){"use strict";n(500)},537:function(t,e,n){var r=n(8)(!1);r.push([t.i,".titleStyle[data-v-a076615e]{color:#f0f8ff;background:#013183;border-radius:30px 30px 0 0}",""]),t.exports=r},591:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(49),n(488)),l={props:{p:{type:Object,required:!0}},computed:{language:function(){return this.$store.state.manager.language}},methods:{cle:function(){this.$store.dispatch("requests/cancelRequest",{id:this.p.id})},logging:function(){console.log("this ID = ".concat(this.p.id,"\n"))}}},o=(n(534),n(22)),v=n(30),d=n.n(v),_=n(477),h=n(186),f=n(118),m=n(456),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"한국어"===t.language?n("v-list-item",{staticClass:"flexing",attrs:{dense:""}},[n("div",{staticClass:"Basicdiv"},[t._v("의뢰ID : "+t._s(t.p.id))]),t._v(" "),n("div",{staticClass:"Basicdiv"},[n("v-chip",{staticClass:"chipStyle"},[t._v("\n      "+t._s(t.p.Files[0].req_lang)+"\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",[t._v("mdi-arrow-right-bold")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-chip",{staticClass:"chipStyle"},[t._v("\n      "+t._s(t.p.Files[0].grant_lang)+"\n    ")])],1),t._v(" "),n("div",{staticClass:"Basicdiv"},[n("v-icon",[t._v("mdi-calendar-clock")]),t._v("\n    완료일 : "+t._s(t.p.date)+"\n  ")],1)]):"영어"===t.language?n("v-list-item",{staticClass:"flexing",attrs:{dense:""}},[n("div",{staticClass:"Basicdiv"},[t._v("Request ID : "+t._s(t.p.id))]),t._v(" "),n("div",{staticClass:"Basicdiv"},[n("v-chip",{staticClass:"chipStyle"},[t._v("\n      "+t._s(t.p.Files[0].req_lang)+"\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-icon",[t._v("mdi-arrow-right-bold")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-chip",{staticClass:"chipStyle"},[t._v("\n      "+t._s(t.p.Files[0].grant_lang)+"\n    ")])],1),t._v(" "),n("div",{staticClass:"Basicdiv"},[n("v-icon",[t._v("mdi-calendar-clock")]),t._v("\n    Completed Date : "+t._s(t.p.date)+"\n  ")],1)]):t._e()}),[],!1,null,"663948c6",null),y=component.exports;d()(component,{VChip:_.a,VIcon:h.a,VListItem:f.a,VSpacer:m.a});var x={layout:"TextLayout",components:{transDashBoard:c.a,transHistoryBoard:y},data:function(){return{}},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.store).state.users.loginState){e.next=5;break}return e.next=4,n.dispatch("requests/loadRequests",n.state.users.loginState);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()},asyncData:function(){return{}},computed:{mainRequest:function(){return this.$store.state.requests.mainRequest},loginState:function(){return this.$store.state.users.loginState},language:function(){return this.$store.state.manager.language}},methods:{update:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loginState){e.next=4;break}t.$manage.showMessage({message:"로그인이 필요합니다.",color:"red lighten-1"}),e.next=6;break;case 4:return e.next=6,t.$store.dispatch("requests/loadRequests",t.loginState);case 6:case"end":return e.stop()}}),e)})))()}}},S=(n(536),n(447)),C=n(191),w=n(90),k=n(473),V=n(586),R=n(187),I=n(189),F=n(17),$=n(47),B=Object(o.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"한국어"===t.language?n("v-container",[n("v-toolbar",{attrs:{elevation:"0"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{rounded:"",color:"success"},on:{click:t.update}},[t._v("조회하기")])],1),t._v(" "),n("v-card",{attrs:{elevation:"0"}},[t.loginState?n("v-container",[n("v-card-title",{staticClass:"titleStyle"},[t._v(" "+t._s(t.loginState.nickname)+" 님의 번역 현황 ")]),t._v(" "),n("v-card",{staticClass:"overflow-y-auto",staticStyle:{height:"45vh","text-align":"center"},attrs:{elevation:"10"}},[0==t.mainRequest.length?n("v-list-item",[n("v-list-item-title",[t._v(" 번역을 요청하신 의뢰가 없습니다. ")])],1):n("v-expansion-panels",{attrs:{flat:"",accordion:"",focusable:""}},[n("client-only",t._l(t.mainRequest,(function(t){return n("trans-dash-board",{key:t.id,attrs:{id:t.id,p:t}})})),1)],1)],1)],1):n("v-container",[n("v-card-title",{staticClass:"titleStyle"},[t._v(" 번역 요청 현황 ")]),t._v(" "),n("v-card",{staticStyle:{height:"45vh","text-align":"center"},attrs:{outlined:"",elevation:"10"}},[n("div",[t._v("로그인이 필요합니다.")])])],1)],1),t._v(" "),n("v-card",{attrs:{elevation:"0"}},[t.loginState?n("v-container",[n("v-card-title",{staticClass:"titleStyle"},[t._v(" "+t._s(t.loginState.nickname)+" 님의 번역 요청 이력 ")]),t._v(" "),n("v-card",{staticStyle:{height:"45vh","text-align":"center"},attrs:{elevation:"10"}},[n("v-list",{staticStyle:{height:"45vh","overflow-y":"scroll"}},[0===t.mainRequest.length?n("v-list-item",[n("v-list-item-title",[t._v("번역한 의뢰가 없습니다.")])],1):n("v-list-item-group",[n("client-only",t._l(t.mainRequest,(function(p){return n("trans-history-board",{key:p.id,attrs:{id:p.id,p:p}})})),1)],1)],1)],1)],1):n("v-container",[n("v-card-title",{staticClass:"titleStyle"},[t._v("번역 요청 이력")]),t._v(" "),n("v-card",{staticClass:"overflow-y-auto",staticStyle:{height:"45vh","text-align":"center"},attrs:{elevation:"10"}},[n("v-list",[n("v-list-item",[n("v-list-item-title",[t._v("로그인이 필요합니다.")])],1)],1)],1)],1)],1)],1):"영어"===t.language?n("v-container",[n("v-toolbar",{attrs:{elevation:"0"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{rounded:"",color:"success"},on:{click:t.update}},[t._v("Renewal")])],1),t._v(" "),n("v-card",[t.loginState?n("v-container",[n("v-card-title",{staticClass:"titleStyle"},[t._v(" "+t._s(t.loginState.nickname)+"'s Translation Status ")]),t._v(" "),n("v-card",{staticClass:"overflow-y-auto",staticStyle:{height:"45vh","text-align":"center"},attrs:{elevation:"10"}},[0==t.mainRequest.length?n("v-list-item",[n("v-list-item-title",[t._v(" There is no request for translation. ")])],1):n("v-expansion-panels",{attrs:{flat:"",accordion:"",focusable:""}},[n("client-only",t._l(t.mainRequest,(function(t){return n("trans-dash-board",{key:t.id,attrs:{id:t.id,p:t}})})),1)],1)],1)],1):n("v-container",[n("v-card-title",{staticClass:"titleStyle"},[t._v(" Translation Request Status ")]),t._v(" "),n("v-card",{staticStyle:{height:"45vh","text-align":"center"},attrs:{outlined:"",elevation:"10"}},[n("div",[t._v("You need to Login.")])])],1)],1),t._v(" "),n("v-card",[t.loginState?n("v-container",[n("v-card-title",{staticClass:"titleStyle"},[t._v(" "+t._s(t.loginState.nickname)+"'s Translation History ")]),t._v(" "),n("v-card",{staticStyle:{height:"45vh","text-align":"center"},attrs:{elevation:"10"}},[n("v-list",{staticStyle:{height:"45vh","overflow-y":"scroll"}},[0===t.mainRequest.length?n("v-list-item",[n("v-list-item-title",[t._v(" There is no translation request. ")])],1):n("v-list-item-group",[n("client-only",t._l(t.mainRequest,(function(p){return n("trans-history-board",{key:p.id,attrs:{id:p.id,p:p}})})),1)],1)],1)],1)],1):n("v-container",[n("v-card-title",{staticClass:"titleStyle"},[t._v(" Translation Request History ")]),t._v(" "),n("v-card",{staticClass:"overflow-y-auto",staticStyle:{height:"45vh","text-align":"center"},attrs:{elevation:"10"}},[n("v-list",[n("v-list-item",[n("v-list-item-title",[t._v("You need to Login.")])],1)],1)],1)],1)],1)],1):t._e()}),[],!1,null,"a076615e",null);e.default=B.exports;d()(B,{VBtn:S.a,VCard:C.a,VCardTitle:w.d,VContainer:k.a,VExpansionPanels:V.a,VList:R.a,VListItem:f.a,VListItemGroup:I.a,VListItemTitle:F.c,VSpacer:m.a,VToolbar:$.a})}}]);