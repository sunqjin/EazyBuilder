(this.webpackJsonp=this.webpackJsonp||[]).push([[409],{"++NP":function(t,e,n){"use strict";var r=n("XBTk"),i=n("4lAS"),s=n("BXQK"),a=n("Pyw5"),o=n.n(a);const l={name:"GlBanner",components:{GlButton:i.a,GlCard:s.a},props:{title:{type:String,required:!0},buttonText:{type:String,required:!0},buttonLink:{type:String,required:!1,default:null},svgPath:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:r.j[0],validator:function(t){return r.j.includes(t)}}},computed:{isIntroducing:function(){return this.variant===r.j[1]}},methods:{handleClose:function(){this.$emit("close")}}};const c=o()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gl-card",{staticClass:"gl-px-8 gl-py-6 gl-line-height-20",class:{"gl-banner-introduction":t.isIntroducing},attrs:{"body-class":"gl-display-flex gl-p-0!"}},[t.svgPath?n("div",{staticClass:"gl-banner-illustration"},[n("img",{attrs:{src:t.svgPath,alt:"",role:"presentation"}})]):t._e(),t._v(" "),n("div",{staticClass:"gl-banner-content"},[n("h1",{staticClass:"gl-banner-title"},[t._v(t._s(t.title))]),t._v(" "),t._t("default"),t._v(" "),n("gl-button",{attrs:{variant:"confirm",category:"primary","data-testid":"gl-banner-primary-button",href:t.buttonLink},on:{click:function(e){return t.$emit("primary")}}},[t._v(t._s(t.buttonText))]),t._v(" "),t._t("actions")],2),t._v(" "),n("gl-button",{staticClass:"gl-banner-close",attrs:{variant:t.isIntroducing?"confirm":"default",category:"tertiary",size:"small",icon:"close","aria-label":"Close banner"},on:{click:t.handleClose}})],1)},staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=c},"/GZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d}));var r=40,i=35,s=13,a=27,o=36,l=37,c=39,u=32,d=38},239:function(t,e,n){n("HVBj"),t.exports=n("iCjM")},"2bBj":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("Tmea"),i=n.n(r),s=n("EmJ/"),a=n.n(s),o=n("2ibD");class l{constructor(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"filter_groups";this.filterForm=t,this.listFilterElement=e,this.listHolderElement=n,this.filterInputField=r,this.isBusy=!1}getFilterEndpoint(){return this.getPagePath()}getPagePath(){const t=this.filterForm.getAttribute("action"),e=a()(this.filterForm).serialize();return"".concat(t).concat(t.indexOf("?")>0?"&":"?").concat(e)}initSearch(){this.debounceFilter=i()(this.onFilterInput.bind(this),500),this.unbindEvents(),this.bindEvents()}onFilterInput(){const t={},e=a()(this.filterForm).find('[name="'.concat(this.filterInputField,'"]')).val();e&&(t[this.filterInputField]=e),this.filterResults(t),this.setDefaultFilterOption&&this.setDefaultFilterOption()}bindEvents(){this.listFilterElement.addEventListener("input",this.debounceFilter)}unbindEvents(){this.listFilterElement.removeEventListener("input",this.debounceFilter)}filterResults(t){var e=this;return!this.isBusy&&(a()(this.listHolderElement).addClass("gl-opacity-5"),this.isBusy=!0,o.a.get(this.getFilterEndpoint(),{params:t}).then((function(n){e.onFilterSuccess(n,t),e.onFilterComplete()})).catch((function(){return e.onFilterComplete()})))}onFilterSuccess(t,e){t.data.html&&(this.listHolderElement.innerHTML=t.data.html);const n=this.getPagePath(e);return window.history.replaceState({page:n},document.title,n)}onFilterComplete(){this.isBusy=!1,a()(this.listHolderElement).removeClass("gl-opacity-5")}}},"4lAS":function(t,e,n){"use strict";var r=n("ofGl"),i=n("XBTk"),s=n("g3So"),a=n("s1D3"),o=n("FkSe"),l=n("Pyw5"),c=n.n(l);const u={components:{BButton:r.a,GlIcon:a.a,GlLoadingIcon:o.a},mixins:[s.a],props:{category:{type:String,required:!1,default:i.u.primary,validator:function(t){return Object.keys(i.u).includes(t)}},variant:{type:String,required:!1,default:i.x.default,validator:function(t){return Object.keys(i.x).includes(t)}},size:{type:String,required:!1,default:i.v.medium,validator:function(t){return Object.keys(i.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},buttonTextClasses:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){var t=["gl-button"];return[i.x.dashed,i.x.link].includes(this.variant)||this.category===i.u.primary||t.push("btn-".concat(this.variant,"-").concat(this.category)),t.push({"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,selected:this.selected}),this.label&&t.push("btn","btn-label","btn-".concat(this.buttonSize)),t},buttonSize:function(){return i.w[this.size]}}};const d=c()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.label?"span":"b-button",t._g(t._b({directives:[{name:"safe-link",rawName:"v-safe-link:[safeLinkConfig]",arg:t.safeLinkConfig}],tag:"component",class:t.buttonClasses,attrs:{target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"component",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-icon gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),!t.hasIcon||t.hasIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"gl-button-icon",attrs:{name:t.icon}}),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text",class:t.buttonTextClasses},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},BXQK:function(t,e,n){"use strict";var r=n("Pyw5");const i={props:{headerClass:{type:[String,Object,Array],required:!1,default:""},bodyClass:{type:[String,Object,Array],required:!1,default:""},footerClass:{type:[String,Object,Array],required:!1,default:""}}};const s=n.n(r)()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gl-card"},[this.$slots.header?n("div",{staticClass:"gl-card-header",class:t.headerClass},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"gl-card-body",class:t.bodyClass},[t._t("default")],2),t._v(" "),this.$slots.footer?n("div",{staticClass:"gl-card-footer",class:t.footerClass},[t._t("footer")],2):t._e()])},staticRenderFns:[]},void 0,i,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},FkSe:function(t,e,n){"use strict";var r=n("Pyw5"),i=["sm","md","lg","xl"],s={dark:"dark",light:"light"};const a={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==i.indexOf(t)}},color:{type:String,required:!1,default:s.dark,validator:function(t){return Object.keys(s).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(s[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const o=n.n(r)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=o},ZY52:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("S26F");var r=n("2bBj");class i extends r.a{getFilterEndpoint(){return this.getPagePath().replace("/projects?","/projects.json?")}}class s{constructor(){const t=document.querySelector("form#project-filter-form"),e=document.querySelector(".js-projects-list-filter"),n=document.querySelector(".js-projects-list-holder");if(t&&e&&n){new i(t,e,n).initSearch()}}}},iCjM:function(t,e,n){"use strict";n.r(e);n("jcmi")},jcmi:function(t,e,n){"use strict";n.r(e);var r=n("ZY52"),i=n("jB52"),s=n("++NP"),a=n("2ibD"),o=n("/lV4");const l=n("4ZIW").a.mixin();var c={components:{GlBanner:s.a},mixins:[l],inject:{svgPath:{default:""},preferencesBehaviorPath:{default:""},calloutsPath:{default:""},calloutsFeatureId:{default:""},trackLabel:{default:""}},i18n:{title:Object(o.e)("CustomizeHomepageBanner|Do you want to customize this page?"),body:Object(o.e)('CustomizeHomepageBanner|This page shows a list of your projects by default but it can be changed to show projects\' activity, groups, your to-do list, assigned issues, assigned merge requests, and more. You can change this under "Homepage content" in your preferences'),button_text:Object(o.e)("CustomizeHomepageBanner|Go to preferences")},data(){return{visible:!0,tracking:{label:this.trackLabel}}},created(){var t=this;this.$nextTick((function(){t.addTrackingAttributesToButton()}))},mounted(){this.trackOnShow()},methods:{handleClose(){a.a.post(this.calloutsPath,{feature_name:this.calloutsFeatureId}).catch((function(t){console.error("Failed to dismiss banner.",t)})),this.visible=!1,this.track("click_dismiss")},trackOnShow(){this.visible&&this.track("show_home_page_banner")},addTrackingAttributesToButton(){const t=this.$refs.banner.$el.querySelector("[href='".concat(this.preferencesBehaviorPath,"']"));t&&(t.setAttribute("data-track-event","click_go_to_preferences"),t.setAttribute("data-track-label",this.trackLabel))}}},u=n("tBpV"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("gl-banner",{ref:"banner",attrs:{title:t.$options.i18n.title,"button-text":t.$options.i18n.button_text,"button-link":t.preferencesBehaviorPath,"svg-path":t.svgPath},on:{close:t.handleClose}},[n("p",[t._v("\n    "+t._s(t.$options.i18n.body)+"\n  ")])]):t._e()}),[],!1,null,null,null).exports;function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}new r.a,function(){const t=document.querySelector(".js-customize-homepage-banner");!!t&&new i.default({el:t,provide:b({},t.dataset),render:function(t){return t(d)}})}()},ofGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var r=n("0zRR"),i=n("/GZH"),s=n("/Szx"),a=n("lgrP"),o=n("TjC/"),l=n("t8l0"),c=n("o/E4"),u=n("QXXq"),d=n("BrvI"),f=n("7bmO"),b=n("ua/H"),p=n("U9NU"),h=n("1m+M");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=Object(f.k)(h.b,["event","routerTag"]);delete m.href.default,delete m.to.default;var j=v(v({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(l.b)(r.g,"size")}},variant:{type:String,default:function(){return Object(l.b)(r.g,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),m),O=function(t){"focusin"===t.type?Object(c.b)(t.target,"focus"):"focusout"===t.type&&Object(c.y)(t.target,"focus")},_=function(t){return Object(p.d)(t)||Object(c.t)(t.tag,"a")},k=function(t){return Object(d.b)(t.pressed)},S=function(t){return!(_(t)||t.tag&&!Object(c.t)(t.tag,"button"))},C=function(t){return!_(t)&&!S(t)},P=function(t){var e;return["btn-".concat(t.variant||Object(l.b)(r.g,"variant")),(e={},y(e,"btn-".concat(t.size),t.size),y(e,"btn-block",t.block),y(e,"rounded-pill",t.pill),y(e,"rounded-0",t.squared&&!t.pill),y(e,"disabled",t.disabled),y(e,"active",t.pressed),e)]},B=function(t){return _(t)?Object(b.a)(m,t):{}},F=function(t,e){var n=S(t),r=_(t),i=k(t),s=C(t),a=r&&"#"===t.href,o=e.attrs&&e.attrs.role?e.attrs.role:null,l=e.attrs?e.attrs.tabindex:null;return(s||a)&&(l="0"),{type:n&&!r?t.type:null,disabled:n?t.disabled:null,role:s||a?"button":o,"aria-disabled":s?String(t.disabled):null,"aria-pressed":i?String(t.pressed):null,autocomplete:i?"off":null,tabindex:t.disabled&&!n?"-1":l}},w=s.a.extend({name:r.g,functional:!0,props:j,render:function(t,e){var n=e.props,r=e.data,s=e.listeners,l=e.children,c=k(n),f=_(n),b=C(n),p=f&&"#"===n.href,g={keydown:function(t){if(!n.disabled&&(b||p)){var e=t.keyCode;if(e===i.h||e===i.c&&b){var r=t.currentTarget||t.target;Object(u.d)(t,{propagation:!1}),r.click()}}},click:function(t){n.disabled&&Object(d.d)(t)?Object(u.d)(t):c&&s&&s["update:pressed"]&&Object(o.b)(s["update:pressed"]).forEach((function(t){Object(d.e)(t)&&t(!n.pressed)}))}};c&&(g.focusin=O,g.focusout=O);var v={staticClass:"btn",class:P(n),props:B(n),attrs:F(n,r),on:g};return t(f?h.a:n.tag,Object(a.a)(r,v),l)}})}},[[239,1,0]]]);
//# sourceMappingURL=pages.root.f6257695.chunk.js.map