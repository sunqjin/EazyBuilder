(this.webpackJsonp=this.webpackJsonp||[]).push([[185],{14:function(t,e,s){s("HVBj"),s("iooJ"),t.exports=s("FbzH")},FbzH:function(t,e,s){"use strict";s.r(e);var i=s("jB52"),r=s("Lzak"),n=s("znvU"),a=s("MV2A"),o=s("dsLq"),c=s("W6ad"),l=s("/lV4");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const m={thClass:"gl-bg-white!",thAttr:{"data-testid":"header"}};var g={components:{GlBadge:r.a,GlTable:n.a,GlSingleStat:c.a,GlLink:a.a,GlEmptyState:o.a},inject:{devopsScoreMetrics:{default:null},devopsReportDocsPath:{default:""},noDataImagePath:{default:""}},computed:{titleHelperText(){return Object(l.f)(Object(l.e)("DevopsReport|DevOps score metrics are based on usage over the last 30 days. Last updated: %{timestamp}."),{timestamp:this.devopsScoreMetrics.createdAt})},isEmpty(){return void 0===this.devopsScoreMetrics.averageScore}},tableHeaderFields:[d({key:"title",label:""},m),d({key:"usage",label:Object(l.e)("DevopsReport|Your usage")},m),d({key:"leadInstance",label:Object(l.e)("DevopsReport|Leader usage")},m),d({key:"score",label:Object(l.e)("DevopsReport|Score")},m)]},f=s("tBpV"),v=Object(f.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isEmpty?s("gl-empty-state",{attrs:{title:t.__("Data is still calculating..."),"svg-path":t.noDataImagePath},scopedSlots:t._u([{key:"description",fn:function(){return[s("p",{staticClass:"gl-mb-0"},[t._v(t._s(t.__("It may be several days before you see feature usage data.")))]),t._v(" "),s("gl-link",{attrs:{href:t.devopsReportDocsPath}},[t._v(t._s(t.__("See example DevOps Score page in our documentation.")))])]},proxy:!0}],null,!1,1457160253)}):s("div",{attrs:{"data-testid":"devops-score-app"}},[s("div",{staticClass:"gl-text-gray-400 gl-my-4",attrs:{"data-testid":"devops-score-note-text"}},[t._v("\n    "+t._s(t.titleHelperText)+"\n  ")]),t._v(" "),s("gl-single-stat",{attrs:{unit:"%",size:"sm",title:t.s__("DevopsReport|Your score"),"should-animate":!0,value:t.devopsScoreMetrics.averageScore.value,"meta-icon":t.devopsScoreMetrics.averageScore.scoreLevel.icon,"meta-text":t.devopsScoreMetrics.averageScore.scoreLevel.label,variant:t.devopsScoreMetrics.averageScore.scoreLevel.variant}}),t._v(" "),s("gl-table",{attrs:{fields:t.$options.tableHeaderFields,items:t.devopsScoreMetrics.cards,"thead-class":"gl-border-t-0 gl-border-b-solid gl-border-b-1 gl-border-b-gray-100",stacked:"sm"},scopedSlots:t._u([{key:"cell(usage)",fn:function(e){var i=e.item;return[s("div",{attrs:{"data-testid":"usageCol"}},[s("span",[t._v(t._s(i.usage))]),t._v(" "),s("gl-badge",{staticClass:"gl-ml-1",attrs:{variant:i.scoreLevel.variant,size:"sm"}},[t._v(t._s(i.scoreLevel.label))])],1)]}}])})],1)}),[],!1,null,null,null).exports,b=s("eRnp"),h=s("30su"),y=s("4lAS"),_={components:{GlEmptyState:o.a,GlSprintf:h.a,GlLink:a.a,GlButton:y.a},inject:{isAdmin:{default:!1},svgPath:{default:""},docsLink:{default:""},primaryButtonPath:{default:""}}},S=Object(f.a)(_,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("gl-empty-state",{staticClass:"js-empty-state",attrs:{title:t.__("Usage ping is off"),"svg-path":t.svgPath},scopedSlots:t._u([{key:"description",fn:function(){return[t.isAdmin?[s("p",[t._v("\n        "+t._s(t.__("Turn on usage ping to review instance-level analytics."))+"\n      ")]),t._v(" "),s("gl-button",{attrs:{category:"primary",variant:"success",href:t.primaryButtonPath}},[t._v("\n        "+t._s(t.__("Turn on usage ping")))])]:s("gl-sprintf",{attrs:{message:t.__("To view instance-level analytics, ask an admin to turn on %{docLinkStart}usage ping%{docLinkEnd}.")},scopedSlots:t._u([{key:"docLink",fn:function(e){var i=e.content;return[s("gl-link",{attrs:{href:t.docsLink,target:"_blank"}},[t._v(t._s(i))])]}}],null,!1,1167818175)})]},proxy:!0}])})}),[],!1,null,null,null).exports;!function(){new b.a;const t=document.getElementById("js-devops-usage-ping-disabled");if(!t)return!1;const{emptyStateSvgPath:e,enableUsagePingLink:s,docsLink:r,isAdmin:n}=t.dataset;new i.default({el:t,provide:{isAdmin:Boolean(n),svgPath:e,primaryButtonPath:s,docsLink:r},render:t=>t(S)})}(),function(){const t=document.getElementById("js-devops-score");if(!t)return!1;const{devopsScoreMetrics:e,devopsReportDocsPath:s,noDataImagePath:r}=t.dataset;new i.default({el:t,provide:{devopsScoreMetrics:JSON.parse(e),devopsReportDocsPath:s,noDataImagePath:r},render:t=>t(v)})}()},"Ge+5":function(t,e,s){"use strict";var i=s("4lAS"),r=s("Pyw5"),n=s.n(r);const a={name:"CloseButton",components:{GlButton:i.a},props:{label:{type:String,required:!1,default:"Close"}}};const o=n()({render:function(){var t=this.$createElement;return(this._self._c||t)("gl-button",this._g(this._b({attrs:{category:"tertiary",size:"small",icon:"close","aria-label":this.label}},"gl-button",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=o},Lzak:function(t,e,s){"use strict";var i=s("0zRR"),r=s("/Szx"),n=s("lgrP"),a=s("t8l0"),o=s("7bmO"),c=s("ua/H"),l=s("U9NU"),u=s("1m+M");function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var m=Object(o.k)(u.b,["event","routerTag"]);delete m.href.default,delete m.to.default;var g=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(a.b)(i.c,"variant")}},pill:{type:Boolean,default:!1}},m),f=r.a.extend({name:i.c,functional:!0,props:g,render:function(t,e){var s=e.props,i=e.data,r=e.children,a=Object(l.d)(s),o=a?u.a:s.tag,d={staticClass:"badge",class:[s.variant?"badge-".concat(s.variant):"badge-secondary",{"badge-pill":s.pill,active:s.active,disabled:s.disabled}],props:a?Object(c.a)(m,s):{}};return t(o,Object(n.a)(i,d),r)}}),v=s("XBTk"),b=s("s1D3"),h=s("Pyw5"),y=s.n(h);const _={components:{BBadge:f,GlIcon:b.a},inheritAttrs:!1,props:{size:{type:String,default:v.h.md,validator:function(t){return void 0!==v.h[t]},required:!1},variant:{type:String,default:v.i.muted,validator:function(t){return void 0!==v.i[t]},required:!1},icon:{type:String,required:!1,default:null}},computed:{hasIconOnly:function(){return Boolean(this.icon&&0===Object.keys(this.$slots).length)},role:function(){return this.hasIconOnly?"img":void 0}}};const S=y()({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-badge",t._b({class:["gl-badge",t.size],attrs:{variant:t.variant,role:t.role,pill:""}},"b-badge",t.$attrs,!1),[t.icon?s("gl-icon",{staticClass:"gl-badge-icon",class:{"gl-mr-2":!t.hasIconOnly},attrs:{name:t.icon}}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},void 0,_,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=S},W6ad:function(t,e,s){"use strict";var i=s("XBTk"),r=s("Lzak"),n=s("s1D3"),a=s("Pyw5"),o=s.n(a);const c={name:"AnimatedNumber",props:{number:{type:Number,required:!0},duration:{type:Number,required:!1,default:2e3},decimalPlaces:{type:Number,required:!1,default:0}},data:function(){return{displayNumber:0,startTime:null}},computed:{animatedNumber:function(){return this.displayNumber.toFixed(this.decimalPlaces)}},ready:function(){this.displayNumber=this.number?this.number:0},watch:{number:function(){window.requestAnimationFrame(this.count)}},mounted:function(){window.requestAnimationFrame(this.count)},methods:{count:function(t){if(this.startTime||(this.startTime=t),t-this.startTime<this.duration){if(this.displayNumber!==this.number){var e=(this.number-this.displayNumber)/(this.duration/100);this.displayNumber+=e}window.requestAnimationFrame(this.count)}else this.displayNumber=this.number,this.startTime=null}}};var l=o()({render:function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v(this._s(this.animatedNumber))])},staticRenderFns:[]},void 0,c,void 0,!1,void 0,!1,void 0,void 0,void 0);const u={components:{GlIcon:n.a,GlBadge:r.a,GlAnimatedNumber:l},props:{title:{type:String,required:!0},value:{type:String,required:!0},unit:{type:[String,Number],required:!1,default:null},variant:{type:String,required:!1,default:i.i.muted,validator:function(t){return Object.values(i.i).includes(t)}},titleIcon:{type:String,required:!1,default:null},metaIcon:{type:String,required:!1,default:null},metaText:{type:String,required:!1,default:null},shouldAnimate:{type:Boolean,required:!1,default:!1},animationDecimalPlaces:{type:Number,required:!1,default:0}},computed:{showMetaIcon:function(){return Boolean(this.metaIcon&&!this.metaText)},showBadge:function(){return Boolean(this.metaText)},showTitleIcon:function(){return Boolean(this.titleIcon)},textColor:function(){return i.F[this.variant]},canAnimate:function(){return this.shouldAnimate&&!Number.isNaN(Number(this.value))}}};const d=o()({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gl-single-stat gl-display-flex gl-flex-direction-column gl-p-2"},[s("div",{staticClass:"gl-display-flex gl-align-items-center gl-text-gray-700 gl-mb-2"},[t.showTitleIcon?s("gl-icon",{staticClass:"gl-mr-2",attrs:{name:t.titleIcon,"data-testid":"title-icon"}}):t._e(),t._v(" "),s("span",{staticClass:"gl-font-base gl-font-weight-normal",attrs:{"data-testid":"title-text"}},[t._v(t._s(t.title))])],1),t._v(" "),s("div",{staticClass:"gl-display-flex gl-align-items-baseline gl-font-weight-bold gl-text-gray-900"},[s("span",{staticClass:"gl-font-size-h-display",class:{"gl-mr-2":!t.unit},attrs:{"data-testid":"displayValue"}},[t.canAnimate?s("gl-animated-number",{attrs:{number:Number(t.value),"decimal-places":t.animationDecimalPlaces}}):s("span",{attrs:{"data-testid":"non-animated-value"}},[t._v(t._s(t.value))])],1),t._v(" "),t.unit?s("span",{staticClass:"gl-font-sm gl-mr-2",attrs:{"data-testid":"unit"}},[t._v(t._s(t.unit))]):t._e(),t._v(" "),t.showMetaIcon?s("gl-icon",{class:t.textColor,attrs:{name:t.metaIcon,"data-testid":"meta-icon"}}):t._e(),t._v(" "),t.showBadge?s("gl-badge",{attrs:{variant:t.variant,icon:t.metaIcon,"data-testid":"meta-badge"}},[t._v(t._s(t.metaText))]):t._e()],1)])},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},dsLq:function(t,e,s){"use strict";var i=s("4lAS"),r=s("Pyw5"),n=s.n(r);const a={components:{GlButton:i.a},props:{title:{type:String,required:!0},svgPath:{type:String,required:!1,default:null},svgHeight:{type:Number,required:!1,default:null},description:{type:String,required:!1,default:null},primaryButtonLink:{type:String,required:!1,default:null},primaryButtonText:{type:String,required:!1,default:null},secondaryButtonLink:{type:String,required:!1,default:null},secondaryButtonText:{type:String,required:!1,default:null},compact:{type:Boolean,required:!1,default:!1}},computed:{height:function(){return this.shouldPreventImageReflow?this.svgHeight:null},shouldPreventImageReflow:function(){return Boolean(this.svgHeight)},shouldRenderPrimaryButton:function(){return Boolean(this.primaryButtonLink&&this.primaryButtonText)},shouldRenderSecondaryButton:function(){return Boolean(this.secondaryButtonLink&&this.secondaryButtonText)}}};const o=n()({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"row",class:{"empty-state text-center":!t.compact}},[s("div",{class:{"col-3 d-none d-sm-block":t.compact,"col-12":!t.compact}},[t.svgPath?s("div",{staticClass:"svg-250",class:{"svg-content":!t.compact}},[s("img",{staticClass:"gl-max-w-full",attrs:{src:t.svgPath,alt:"",height:t.height}})]):t._e()]),t._v(" "),s("div",{class:t.compact?"col-sm-9":"col-12"},[s("div",{staticClass:"text-content gl-mx-auto gl-my-0",class:{"gl-p-5":!t.compact}},[s("h1",{ref:"title",class:t.compact?"h5":"h4"},[t._v(t._s(t.title))]),t._v(" "),t.description||t.$scopedSlots.description?s("p",{ref:"description"},[t._t("description",[t._v("\n          "+t._s(t.description)+"\n        ")])],2):t._e(),t._v(" "),s("div",{staticClass:"gl-display-flex gl-flex-wrap",class:{"gl-justify-content-center":!t.compact}},[t._t("actions",[t.shouldRenderPrimaryButton?s("gl-button",{staticClass:"gl-mb-3",class:t.compact?"gl-mr-3":"gl-mx-2",attrs:{variant:"confirm",href:t.primaryButtonLink}},[t._v(t._s(t.primaryButtonText))]):t._e(),t._v(" "),t.shouldRenderSecondaryButton?s("gl-button",{staticClass:"gl-mb-3 gl-mr-3",class:{"gl-mx-2!":!t.compact},attrs:{href:t.secondaryButtonLink}},[t._v(t._s(t.secondaryButtonText)+"\n          ")]):t._e()])],2)])])])},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=o},dsWN:function(t,e,s){"use strict";var i=s("XBTk"),r=s("Ge+5"),n=s("4lAS"),a=s("s1D3"),o=s("Pyw5"),c=s.n(o);function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){l(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}const p={components:{GlIcon:a.a,CloseButton:r.a,GlButton:n.a},props:{title:{type:String,required:!1,default:""},dismissible:{type:Boolean,required:!1,default:!0},dismissLabel:{type:String,required:!1,default:"Dismiss"},variant:{type:String,required:!1,default:i.c.info,validator:function(t){return Object.keys(i.c).includes(t)}},primaryButtonLink:{type:String,required:!1,default:""},primaryButtonText:{type:String,required:!1,default:""},secondaryButtonLink:{type:String,required:!1,default:""},secondaryButtonText:{type:String,required:!1,default:""},contained:{type:Boolean,required:!1,default:!1},sticky:{type:Boolean,required:!1,default:!1}},computed:{iconName:function(){return i.b[this.variant]},shouldRenderActions:function(){return Boolean(this.$slots.actions||this.actionButtons.length)},actionButtons:function(){return[{text:this.primaryButtonText,attrs:{href:this.primaryButtonLink,variant:"confirm",category:i.u.primary},listeners:{click:this.primaryButtonClicked}},{text:this.secondaryButtonText,attrs:{href:this.secondaryButtonLink,variant:"default",category:i.u.secondary},listeners:{click:this.secondaryButtonClicked}}].reduce((function(t,e){if(!e.text)return t;var s=d({},e.attrs);return s.href||delete s.href,t.push(d(d({},e),{},{attrs:s})),t}),[])},variantClass:function(){return"gl-alert-".concat(this.variant)}},methods:{primaryButtonClicked:function(t){this.$emit("primaryAction",t)},secondaryButtonClicked:function(t){this.$emit("secondaryAction",t)},onDismiss:function(){this.$emit("dismiss")}}};const m=c()({render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["gl-alert",{"gl-alert-max-content":t.contained},{"gl-alert-sticky":t.sticky},{"gl-alert-not-dismissible":!t.dismissible},t.variantClass]},[s("div",{staticClass:"gl-alert-container"},[s("gl-icon",{class:{"gl-alert-icon":!0,"gl-alert-icon-no-title":!t.title},attrs:{name:t.iconName}}),t._v(" "),t.dismissible?s("close-button",{ref:"dismiss",staticClass:"gl-dismiss-btn",attrs:{label:t.dismissLabel},on:{click:t.onDismiss}}):t._e(),t._v(" "),s("div",{staticClass:"gl-alert-content",attrs:{role:"alert"}},[t.title?s("h4",{staticClass:"gl-alert-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),s("div",{staticClass:"gl-alert-body"},[t._t("default")],2),t._v(" "),t.shouldRenderActions?s("div",{staticClass:"gl-alert-actions"},[t._t("actions",t._l(t.actionButtons,(function(e,i){return s("gl-button",t._g(t._b({key:i,staticClass:"gl-alert-action"},"gl-button",e.attrs,!1),e.listeners),[t._v("\n            "+t._s(e.text)+"\n          ")])})))],2):t._e()])],1)])},staticRenderFns:[]},void 0,p,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=m},eRnp:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("EmJ/"),r=s.n(i),n=s("06tH"),a=s.n(n);class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=t;const e=this.options.className||"user-callout";this.userCalloutBody=r()(".".concat(e)),this.cookieName=this.userCalloutBody.data("uid"),this.isCalloutDismissed=a.a.get(this.cookieName),this.init()}init(){var t=this;this.isCalloutDismissed&&"false"!==this.isCalloutDismissed||this.userCalloutBody.find(".js-close-callout").on("click",(function(e){return t.dismissCallout(e)}))}dismissCallout(t){const e=r()(t.currentTarget),s={};e.hasClass("js-close-session")||(s.expires=365),this.options.setCalloutPerProject&&(s.path=this.userCalloutBody.data("projectPath")),a.a.set(this.cookieName,"true",s),(e.hasClass("close")||e.hasClass("js-close"))&&this.userCalloutBody.remove()}}},iooJ:function(t,e,s){"use strict";s.r(e);var i={};s.r(i),s.d(i,"requestStatistics",(function(){return y})),s.d(i,"fetchStatistics",(function(){return _})),s.d(i,"receiveStatisticsSuccess",(function(){return S})),s.d(i,"receiveStatisticsError",(function(){return O}));var r={};s.r(r),s.d(r,"getStatistics",(function(){return j}));var n=s("jB52"),a=s("FkSe"),o=s("yi8e"),c=s("/lV4");var l={forks:Object(c.e)("AdminStatistics|Forks"),issues:Object(c.e)("AdminStatistics|Issues"),mergeRequests:Object(c.e)("AdminStatistics|Merge requests"),notes:Object(c.e)("AdminStatistics|Notes"),snippets:Object(c.e)("AdminStatistics|Snippets"),sshKeys:Object(c.e)("AdminStatistics|SSH Keys"),milestones:Object(c.e)("AdminStatistics|Milestones"),activeUsers:Object(c.e)("AdminStatistics|Active Users")};function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var m={components:{GlLoadingIcon:a.a},data:()=>({statisticsLabels:l}),computed:d(d({},Object(o.f)(["isLoading","statistics"])),Object(o.d)(["getStatistics"])),mounted(){this.fetchStatistics()},methods:d({},Object(o.c)(["fetchStatistics"]))},g=s("tBpV"),f=Object(g.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gl-card"},[s("div",{staticClass:"gl-card-body"},[s("h4",[t._v(t._s(t.__("Statistics")))]),t._v(" "),t.isLoading?s("gl-loading-icon",{staticClass:"my-3",attrs:{size:"md"}}):t._l(t.getStatistics(t.statisticsLabels),(function(e){return s("p",{key:e.key,staticClass:"js-stats"},[t._v("\n        "+t._s(e.label)+"\n        "),s("span",{staticClass:"light float-right"},[t._v(t._s(e.value))])])}))],2)])}),[],!1,null,null,null).exports,v=s("qPgm"),b=s("XRO8"),h=s("NmEs");const y=function(t){let{commit:e}=t;return e("REQUEST_STATISTICS")},_=function(t){let{dispatch:e}=t;e("requestStatistics"),v.a.adminStatistics().then((function(t){let{data:s}=t;e("receiveStatisticsSuccess",Object(h.h)(s,{deep:!0}))})).catch((function(t){return e("receiveStatisticsError",t)}))},S=function(t,e){let{commit:s}=t;return s("RECEIVE_STATISTICS_SUCCESS",e)},O=function(t,e){let{commit:s}=t;s("RECEIVE_STATISTICS_ERROR",e),Object(b.c)(Object(c.e)("AdminDashboard|Error loading the statistics. Please try again"))},j=function(t){return function(e){return Object.keys(e).map((function(s){return{key:s,label:e[s],value:t.statistics&&t.statistics[s]?t.statistics[s]:null}}))}};var P={REQUEST_STATISTICS(t){t.isLoading=!0},RECEIVE_STATISTICS_SUCCESS(t,e){t.isLoading=!1,t.error=null,t.statistics=e},RECEIVE_STATISTICS_ERROR(t,e){t.isLoading=!1,t.error=e}};n.default.use(o.b);var B=function(){return new o.b.Store({actions:i,getters:r,mutations:P,state:{error:null,isLoading:!1,statistics:null}})};s("orcL");var k={components:{GlAlert:s("dsWN").a},props:{html:{type:String,required:!1,default:""}},data:()=>({isDismissed:!1}),methods:{dismiss(){this.isDismissed=!0}}},w=Object(g.a)(k,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isDismissed?t._e():s("gl-alert",t._g(t._b({on:{dismiss:t.dismiss}},"gl-alert",t.$attrs,!1),t.$listeners),[s("div",{domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports;function C(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function x(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?C(Object(s),!0).forEach((function(e){E(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):C(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function E(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const T=function(t){const e={html:t.innerHTML},s=x(x({},t.dataset),{},{dismissible:Object(h.K)(t.dataset.dismissible)});return new n.default({el:t,render:t=>t(w,{props:e,attrs:s})})};var D=s("EmJ/"),q=s.n(D),I=s("3twG");[...document.querySelectorAll(".js-vue-alert")].map(T);const L=document.getElementById("js-admin-statistics-container");q()("input#user_force_random_password").on("change",(function(){const t=q()("#user_password, #user_password_confirmation");q()(this).attr("checked")?t.val("").prop("disabled",!0):t.prop("disabled",!1)})),q()("body").on("click",".js-toggle-colors-link",(function(t){t.preventDefault(),q()(".js-toggle-colors-container").toggleClass("hide")})),q()("li.project_member, li.group_member").on("ajax:success",I.u),function(t){if(!t)return!1;const e=B();new n.default({el:t,store:e,components:{StatisticsPanelApp:f},render:t=>t(f)})}(L)}},[[14,1,0,2,7]]]);
//# sourceMappingURL=pages.admin.dev_ops_report.7c42e707.chunk.js.map