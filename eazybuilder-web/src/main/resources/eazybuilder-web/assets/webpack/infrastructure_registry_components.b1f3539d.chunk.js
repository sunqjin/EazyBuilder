(this.webpackJsonp=this.webpackJsonp||[]).push([[161],{"1OWu":function(t,e,r){"use strict";r.d(e,"d",(function(){return i})),r.d(e,"a",(function(){return s})),r.d(e,"f",(function(){return a})),r.d(e,"c",(function(){return l})),r.d(e,"b",(function(){return o})),r.d(e,"g",(function(){return c})),r.d(e,"e",(function(){return u}));r("orcL"),r("7jeQ");var n=r("NmEs");const i=function(t){return Boolean(t&&t.scrollWidth>t.offsetWidth)},s=function(t,e){t&&t.classList.add(e)},a=function(){return Object(n.B)()||Object(n.y)()||Object(n.C)()},l=function(t){let{scrollTop:e}=t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e>r},o=function(t){let{scrollTop:e,offsetHeight:r,scrollHeight:n}=t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e+r<n-i},c=function(t,e){t&&Object.entries(e).map((function(e){let[r,n]=e;n?t.classList.add(r):t.classList.remove(r)}))},u=function(t){return Boolean(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}},"3zZO":function(t,e,r){"use strict";r.r(e);var n=r("yi8e"),i=r("qo9Q"),s=r("TY0R"),a=r("gfjv"),l=r("kfZU");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={components:{RegistrySearch:a.a,UrlSync:l.a},computed:c(c({},Object(n.f)({isGroupPage:function(t){return t.config.isGroupPage},sorting:function(t){return t.sorting},filter:function(t){return t.filter}})),{},{sortableFields(){return Object(s.b)(this.isGroupPage).filter((function(t){return t.orderBy!==i.g}))}}),methods:c(c({},Object(n.c)(["setSorting","setFilter"])),{},{updateSorting(t){this.setSorting(t),this.$emit("update")}})},g=r("tBpV"),f=Object(g.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("url-sync",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.updateQuery;return[r("registry-search",{attrs:{filter:t.filter,sorting:t.sorting,tokens:[],"sortable-fields":t.sortableFields},on:{"sorting:changed":t.updateSorting,"filter:changed":t.setFilter,"filter:submit":function(e){return t.$emit("update")},"query:changed":n}})]}}])})}),[],!1,null,null,null);e.default=f.exports},TY0R:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return s}));var n=r("qo9Q");const i=function(t){return n.l.filter((function(e){return e.orderBy!==n.h||t}))},s=function(t,e,r){return r<=e?1:t>1&&(t-1)*e>=r?t-1:t}},"Tel/":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n="filtered-search-term"},aw45:function(t,e,r){"use strict";r.r(e);var n=r("/lV4"),i=r("fAAU"),s={name:"InfrastructureTitle",components:{TitleArea:r("vN1d").a,MetadataItem:i.a},props:{count:{type:Number,required:!1,default:null},helpUrl:{type:String,required:!0}},computed:{showModuleCount(){return Number.isInteger(this.count)},moduleAmountText(){return Object(n.d)("%d Module","%d Modules",this.count)},infoMessages(){return[{text:this.$options.i18n.LIST_INTRO_TEXT,link:this.helpUrl}]}},i18n:{LIST_TITLE_TEXT:Object(n.e)("InfrastructureRegistry|Infrastructure Registry"),LIST_INTRO_TEXT:Object(n.e)("InfrastructureRegistry|Publish and share your modules. %{docLinkStart}More information%{docLinkEnd}")}},a=r("tBpV"),l=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("title-area",{attrs:{title:t.$options.i18n.LIST_TITLE_TEXT,"info-messages":t.infoMessages},scopedSlots:t._u([{key:"metadata-amount",fn:function(){return[t.showModuleCount?r("metadata-item",{attrs:{icon:"infrastructure-registry",text:t.moduleAmountText}}):t._e()]},proxy:!0}])})}),[],!1,null,null,null);e.default=l.exports},fAAU:function(t,e,r){"use strict";var n=r("s1D3"),i=r("MV2A"),s=r("LLbv"),a=r("rX0p"),l={name:"MetadataItem",components:{GlIcon:n.a,GlLink:i.a,TooltipOnTruncate:a.a},directives:{GlTooltip:s.a},props:{icon:{type:String,required:!1,default:null},text:{type:String,required:!0},link:{type:String,required:!1,default:""},size:{type:String,required:!1,default:"s",validator:t=>!t||["xs","s","m","l","xl"].includes(t)},textTooltip:{type:String,required:!1,default:""}},computed:{sizeClass(){return"mw-".concat(this.size)}}},o=r("tBpV"),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gl-display-inline-flex gl-align-items-center"},[t.icon?r("gl-icon",{staticClass:"gl-text-gray-500 gl-mr-3",attrs:{name:t.icon}}):t._e(),t._v(" "),t.link?r("tooltip-on-truncate",{staticClass:"gl-text-truncate",class:t.sizeClass,attrs:{title:t.text}},[r("gl-link",{staticClass:"gl-font-weight-bold",attrs:{href:t.link}},[t._v("\n      "+t._s(t.text)+"\n    ")])],1):r("div",{staticClass:"gl-font-weight-bold gl-display-inline-flex",class:t.sizeClass,attrs:{"data-testid":"metadata-item-text"}},[t.textTooltip?r("span",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{title:t.textTooltip},expression:"{ title: textTooltip }"}],attrs:{"data-testid":"text-tooltip-container"}},[t._v("\n      "+t._s(t.text))]):r("tooltip-on-truncate",{staticClass:"gl-text-truncate",attrs:{title:t.text}},[t._v("\n      "+t._s(t.text)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=c.exports},gfjv:function(t,e,r){"use strict";r("TZoF");var n=r("hZHc"),i=r("/wEr"),s=r("2Z5c"),a=r("Tel/");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={components:{GlSorting:n.a,GlSortingItem:i.a,GlFilteredSearch:s.a},props:{filter:{type:Array,required:!0},sorting:{type:Object,required:!0},tokens:{type:Array,required:!1,default:function(){return[]}},sortableFields:{type:Array,required:!0}},computed:{internalFilter:{get(){return this.filter},set(t){this.$emit("filter:changed",t)}},sortText(){var t=this;const e=this.sortableFields.find((function(e){return e.orderBy===t.sorting.orderBy}));return e?e.label:""},isSortAscending(){return"asc"===this.sorting.sort},baselineQueryStringFilters(){return this.tokens.reduce((function(t,e){return t[e.type]="",t}),{})}},methods:{generateQueryData(){let{sorting:t={},filter:e=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=o(o(o({},this.baselineQueryStringFilters),t),{},{search:[]});return e.forEach((function(t){t.type===a.a?r.search.push(t.value.data):r[t.type]=t.value.data})),r},onDirectionChange(){const t=this.isSortAscending?"desc":"asc",e=this.generateQueryData({sorting:o(o({},this.sorting),{},{sort:t}),filter:this.filter});this.$emit("sorting:changed",{sort:t}),this.$emit("query:changed",e)},onSortItemClick(t){const e=this.generateQueryData({sorting:o(o({},this.sorting),{},{orderBy:t}),filter:this.filter});this.$emit("sorting:changed",{orderBy:t}),this.$emit("query:changed",e)},submitSearch(){const t=this.generateQueryData({sorting:this.sorting,filter:this.filter});this.$emit("filter:submit"),this.$emit("query:changed",t)},clearSearch(){const t=this.generateQueryData({sorting:this.sorting});this.$emit("filter:changed",[]),this.$emit("filter:submit"),this.$emit("query:changed",t)}}},d=r("tBpV"),g=Object(d.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gl-display-flex gl-p-5 gl-bg-gray-10 gl-border-solid gl-border-1 gl-border-gray-100"},[r("gl-filtered-search",{staticClass:"gl-mr-4 gl-flex-fill-1",attrs:{placeholder:t.__("Filter results"),"available-tokens":t.tokens},on:{submit:t.submitSearch,clear:t.clearSearch},model:{value:t.internalFilter,callback:function(e){t.internalFilter=e},expression:"internalFilter"}}),t._v(" "),r("gl-sorting",{attrs:{text:t.sortText,"is-ascending":t.isSortAscending},on:{sortDirectionChange:t.onDirectionChange}},t._l(t.sortableFields,(function(e){return r("gl-sorting-item",{key:e.orderBy,ref:"packageListSortItem",refInFor:!0,on:{click:function(r){return t.onSortItemClick(e.orderBy)}}},[t._v("\n      "+t._s(e.label)+"\n    ")])})),1)],1)}),[],!1,null,null,null);e.a=g.exports},kfZU:function(t,e,r){"use strict";var n=r("NmEs"),i=r("3twG"),s={props:{query:{type:Object,required:!1,default:null}},watch:{query:{immediate:!0,deep:!0,handler(t){t&&this.updateQuery(t)}}},methods:{updateQuery(t){Object(n.u)(Object(i.q)(t,window.location.href,{spreadArrays:!0}))}},render(){var t,e;return null===(t=(e=this.$scopedSlots).default)||void 0===t?void 0:t.call(e,{updateQuery:this.updateQuery})}},a=r("tBpV"),l=Object(a.a)(s,void 0,void 0,!1,null,null,null);e.a=l.exports},p7hp:function(t,e,r){"use strict";r.r(e);var n={name:"InfrastructureIconAndName",components:{GlIcon:r("s1D3").a}},i=r("tBpV"),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gl-display-flex gl-align-items-center"},[e("gl-icon",{staticClass:"gl-ml-3 gl-mr-2",attrs:{name:"infrastructure-registry"}}),this._v(" "),e("span",[this._v(this._s(this.s__("InfrastructureRegistry|Terraform")))])],1)}),[],!1,null,null,null);e.default=s.exports},qo9Q:function(t,e,r){"use strict";r.d(e,"d",(function(){return s})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return o})),r.d(e,"e",(function(){return c})),r.d(e,"h",(function(){return u})),r.d(e,"g",(function(){return d})),r.d(e,"j",(function(){return m})),r.d(e,"l",(function(){return b})),r.d(e,"k",(function(){return v})),r.d(e,"i",(function(){return O})),r.d(e,"f",(function(){return j})),r.d(e,"m",(function(){return _}));var n=r("/lV4"),i=r("azG2");const s=Object(n.a)("Something went wrong while fetching the packages list."),a=(Object(n.a)("Something went wrong while fetching the package."),Object(n.a)("Package deleted successfully")),l=1,o=20,c="groups",u="project_path",d="type",g=Object(n.a)("Name"),f=Object(n.a)("Project"),p=Object(n.a)("Version"),h=Object(n.a)("Type"),y=Object(n.a)("Published"),m="Missing delete_api_path link",b=[{orderBy:"name",label:g},{orderBy:u,label:f},{orderBy:"version",label:p},{orderBy:d,label:h},{orderBy:"created_at",label:y}],v=[{title:Object(n.e)("PackageRegistry|Composer"),type:i.d.COMPOSER},{title:Object(n.e)("PackageRegistry|Conan"),type:i.d.CONAN},{title:Object(n.e)("PackageRegistry|Generic"),type:i.d.GENERIC},{title:Object(n.e)("PackageRegistry|Maven"),type:i.d.MAVEN},{title:Object(n.e)("PackageRegistry|npm"),type:i.d.NPM},{title:Object(n.e)("PackageRegistry|NuGet"),type:i.d.NUGET},{title:Object(n.e)("PackageRegistry|PyPI"),type:i.d.PYPI},{title:Object(n.e)("PackageRegistry|RubyGems"),type:i.d.RUBYGEMS}],O=Object(n.e)("PackageRegistry|Package Registry"),j=Object(n.e)("PackageRegistry|Publish and share packages for a variety of common package managers. %{docLinkStart}More information%{docLinkEnd}"),_=Object.freeze({value:{data:"terraform_module"}})},rX0p:function(t,e,r){"use strict";var n=r("KFC0"),i=r.n(n),s=r("LLbv"),a=r("1OWu"),l={directives:{GlTooltip:s.a},props:{title:{type:String,required:!1,default:""},placement:{type:String,required:!1,default:"top"},truncateTarget:{type:[String,Function],required:!1,default:""}},data:()=>({showTooltip:!1}),watch:{title(){this.$nextTick(this.updateTooltip)}},mounted(){this.updateTooltip()},methods:{selectTarget(){return i()(this.truncateTarget)?this.truncateTarget(this.$el):"child"===this.truncateTarget?this.$el.childNodes[0]:this.$el},updateTooltip(){const t=this.selectTarget();this.showTooltip=Object(a.d)(t)}}},o=r("tBpV"),c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return this.showTooltip?e("span",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{placement:this.placement},expression:"{ placement }"}],staticClass:"js-show-tooltip gl-min-w-0",attrs:{title:this.title}},[this._t("default")],2):e("span",{staticClass:"gl-min-w-0"},[this._t("default")],2)}),[],!1,null,null,null);e.a=c.exports},vN1d:function(t,e,r){"use strict";r("jaBk"),r("Ch9p");var n=r("tbP8"),i=r("30su"),s=r("MV2A"),a=r("4+8U"),l={name:"TitleArea",components:{GlAvatar:n.a,GlSprintf:i.a,GlLink:s.a,GlSkeletonLoader:a.a},props:{avatar:{type:String,default:null,required:!1},title:{type:String,default:null,required:!1},infoMessages:{type:Array,default:function(){return[]},required:!1},metadataLoading:{type:Boolean,required:!1,default:!1}},data:()=>({metadataSlots:[]}),async mounted(){this.metadataSlots=Object.keys(this.$slots).filter((function(t){return t.startsWith("metadata-")})),await this.$nextTick(),this.metadataSlots=Object.keys(this.$slots).filter((function(t){return t.startsWith("metadata-")}))}},o=r("tBpV"),c=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"gl-display-flex gl-flex-direction-column"},[r("div",{staticClass:"gl-display-flex gl-justify-content-space-between gl-py-3"},[r("div",{staticClass:"gl-flex-direction-column gl-flex-grow-1"},[r("div",{staticClass:"gl-display-flex"},[t.avatar?r("gl-avatar",{staticClass:"gl-align-self-center gl-mr-4",attrs:{src:t.avatar,shape:"rect"}}):t._e(),t._v(" "),r("div",{staticClass:"gl-display-flex gl-flex-direction-column"},[r("h1",{staticClass:"gl-font-size-h1 gl-mt-3 gl-mb-2",attrs:{"data-testid":"title"}},[t._t("title",[t._v(t._s(t.title))])],2),t._v(" "),t.$slots["sub-header"]?r("div",{staticClass:"gl-display-flex gl-align-items-center gl-text-gray-500 gl-mt-1"},[t._t("sub-header")],2):t._e()])],1),t._v(" "),r("div",{staticClass:"gl-display-flex gl-flex-wrap gl-align-items-center gl-mt-3"},[t.metadataLoading?[r("div",{staticClass:"gl-w-full"},[r("gl-skeleton-loader",{attrs:{width:960,height:16,"preserve-aspect-ratio":"xMinYMax meet"}},[r("circle",{attrs:{cx:"6",cy:"8",r:"6"}}),t._v(" "),r("rect",{attrs:{x:"16",y:"4",width:"200",height:"8",rx:"4"}})])],1)]:t._l(t.metadataSlots,(function(e,n){return r("div",{key:n,staticClass:"gl-display-flex gl-align-items-center gl-mr-5"},[t._t(e)],2)}))],2)]),t._v(" "),t.$slots["right-actions"]?r("div",{staticClass:"gl-mt-3"},[t._t("right-actions")],2):t._e()]),t._v(" "),r("p",t._l(t.infoMessages,(function(e,n){return r("span",{key:n,staticClass:"gl-mr-2",attrs:{"data-testid":"info-message"}},[r("gl-sprintf",{attrs:{message:e.text},scopedSlots:t._u([{key:"docLink",fn:function(n){var i=n.content;return[r("gl-link",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(i))])]}}],null,!0)})],1)})),0)])}),[],!1,null,null,null);e.a=c.exports}}]);
//# sourceMappingURL=infrastructure_registry_components.b1f3539d.chunk.js.map