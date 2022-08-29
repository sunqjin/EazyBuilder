(this.webpackJsonp=this.webpackJsonp||[]).push([[339],{"+pUt":function(e,t,r){"use strict";r.r(t),r.d(t,"ACTION_LABELS",(function(){return a})),r.d(t,"ACTION_SECTIONS",(function(){return i}));var n=r("/lV4");const a={gitWrite:{title:Object(n.e)("LearnGitLab|Create or import a repository"),actionLabel:Object(n.e)("LearnGitLab|Create or import a repository"),description:Object(n.e)("LearnGitLab|Create or import your first repository into your new project."),section:"workspace",position:1},userAdded:{title:Object(n.e)("LearnGitLab|Invite your colleagues"),actionLabel:Object(n.e)("LearnGitLab|Invite your colleagues"),description:Object(n.e)("LearnGitLab|GitLab works best as a team. Invite your colleague to enjoy all features."),section:"workspace",position:0},pipelineCreated:{title:Object(n.e)("LearnGitLab|Set up CI/CD"),actionLabel:Object(n.e)("LearnGitLab|Set-up CI/CD"),description:Object(n.e)("LearnGitLab|Save time by automating your integration and deployment tasks."),section:"workspace",position:2},trialStarted:{title:Object(n.e)("LearnGitLab|Start a free Ultimate trial"),actionLabel:Object(n.e)("LearnGitLab|Try GitLab Ultimate for free"),description:Object(n.e)("LearnGitLab|Try all GitLab features for 30 days, no credit card required."),section:"workspace",position:3},codeOwnersEnabled:{title:Object(n.e)("LearnGitLab|Add code owners"),actionLabel:Object(n.e)("LearnGitLab|Add code owners"),description:Object(n.e)("LearnGitLab|Prevent unexpected changes to important assets by assigning ownership of files and paths."),trialRequired:!0,section:"workspace",position:4},requiredMrApprovalsEnabled:{title:Object(n.e)("LearnGitLab|Add merge request approval"),actionLabel:Object(n.e)("LearnGitLab|Enable require merge approvals"),description:Object(n.e)("LearnGitLab|Route code reviews to the right reviewers, every time."),trialRequired:!0,section:"workspace",position:5},mergeRequestCreated:{title:Object(n.e)("LearnGitLab|Submit a merge request"),actionLabel:Object(n.e)("LearnGitLab|Submit a merge request (MR)"),description:Object(n.e)("LearnGitLab|Review and edit proposed changes to source code."),section:"plan",position:1},securityScanEnabled:{title:Object(n.e)("LearnGitLab|Run a Security scan using CI/CD"),actionLabel:Object(n.e)("LearnGitLab|Run a Security scan using CI/CD"),description:Object(n.e)("LearnGitLab|Scan your code to uncover vulnerabilities before deploying."),section:"deploy",position:1},issueCreated:{title:Object(n.e)("LearnGitLab|Create an issue"),actionLabel:Object(n.e)("LearnGitLab|Create an issue"),description:Object(n.e)("LearnGitLab|Create/import issues (tickets) to collaborate on ideas and plan work."),section:"plan",position:0}},i={workspace:{title:Object(n.e)("LearnGitLab|Set up your workspace"),description:Object(n.e)("LearnGitLab|Complete these tasks first so you can enjoy GitLab's features to their fullest:")},plan:{title:Object(n.e)("LearnGitLab|Plan and execute"),description:Object(n.e)("LearnGitLab|Create a workflow for your new workspace, and learn how GitLab features work together:")},deploy:{title:Object(n.e)("LearnGitLab|Deploy"),description:Object(n.e)("LearnGitLab|Use your new GitLab workflow to deploy your application, monitor its health, and keep it secure:")}}},"0Y/0":function(e,t,r){var n=r("8Doe"),a=r("bZij"),i=r("PiTB");e.exports=function(e){return i(a(e,void 0,n),e+"")}},169:function(e,t,r){r("HVBj"),r("gjpc"),e.exports=r("kbWK")},"2Z+u":function(e,t,r){var n=r("Ekrn"),a=r("0Y/0")((function(e,t){return null==e?{}:n(e,t)}));e.exports=a},BXQK:function(e,t,r){"use strict";var n=r("Pyw5");const a={props:{headerClass:{type:[String,Object,Array],required:!1,default:""},bodyClass:{type:[String,Object,Array],required:!1,default:""},footerClass:{type:[String,Object,Array],required:!1,default:""}}};const i=r.n(n)()({render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gl-card"},[this.$slots.header?r("div",{staticClass:"gl-card-header",class:e.headerClass},[e._t("header")],2):e._e(),e._v(" "),r("div",{staticClass:"gl-card-body",class:e.bodyClass},[e._t("default")],2),e._v(" "),this.$slots.footer?r("div",{staticClass:"gl-card-footer",class:e.footerClass},[e._t("footer")],2):e._e()])},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);t.a=i},Ekrn:function(e,t,r){var n=r("35Nh"),a=r("7klG");e.exports=function(e,t){return n(e,t,(function(t,r){return a(e,r)}))}},GVjJ:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return c}));r("EWC9"),r("gNBD"),r("orcL");var n=r("0AwG");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function(e){const t=new FormData(e);return function(e){return e.reduce((function(e,t){let{name:r,value:n}=t;return Object.assign(e,{[r]:n})}),{})}(Array.from(t.keys()).map((function(e){let r=t.getAll(e);return{name:e,value:1===(r=r.filter((function(e){return e}))).length?r[0]:r}})))},c=function(e){if(!e)throw new TypeError("`mountEl` argument is required");return[...e.querySelectorAll("[name]")].reduce((function(e,t){const r=t.dataset.jsName;if(!r)return e;const a=Object(n.c)(r),{id:o,placeholder:s,name:c,value:l,type:u,checked:p}=t,d=i({name:c,id:o,value:l},s&&{placeholder:s});return["radio","checkbox"].includes(u)?i(i({},e),{},{[a]:[...e[a]||[],i(i({},d),{},{checked:p})]}):i(i({},e),{},{[a]:d})}),{})}},"J6+Z":function(e,t,r){"use strict";var n=r("0zRR"),a=r("/Szx"),i=r("t8l0"),o=r("EQ0+"),s=r("rPnh"),c=r("BrvI"),l=r("9aS3"),u=r("Ddgg"),p=r("bvam"),d=a.a.extend({name:n.nb,mixins:[o.a],inject:{bvProgress:{default:function(){return{}}}},props:{value:{type:[Number,String],default:0},label:{type:String},labelHtml:{type:String},max:{type:[Number,String],default:null},precision:{type:[Number,String],default:null},variant:{type:String,default:function(){return Object(i.b)(n.nb,"variant")}},striped:{type:Boolean,default:null},animated:{type:Boolean,default:null},showProgress:{type:Boolean,default:null},showValue:{type:Boolean,default:null}},computed:{progressBarClasses:function(){return[this.computedVariant?"bg-".concat(this.computedVariant):"",this.computedStriped||this.computedAnimated?"progress-bar-striped":"",this.computedAnimated?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(u.b)(this.value,0)},computedMax:function(){var e=Object(u.b)(this.max)||Object(u.b)(this.bvProgress.max,0);return e>0?e:100},computedPrecision:function(){return Object(l.b)(Object(u.c)(this.precision,Object(u.c)(this.bvProgress.precision,0)),0)},computedProgress:function(){var e=this.computedPrecision,t=Object(l.d)(10,e);return Object(u.a)(100*t*this.computedValue/this.computedMax/t,e)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(c.b)(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(c.b)(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(c.b)(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(c.b)(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(e){var t,r=this.label,n=this.labelHtml,a=this.computedValue,i=this.computedPrecision,o={};return this.hasNormalizedSlot()?t=this.normalizeSlot():r||n?o=Object(s.a)(n,r):this.computedShowProgress?t=this.computedProgress:this.computedShowValue&&(t=Object(u.a)(a,i)),e("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(p.e)(this.computedMax),"aria-valuenow":Object(u.a)(a,i)},domProps:o},t)}}),b=a.a.extend({name:n.mb,mixins:[o.a],provide:function(){return{bvProgress:this}},props:{variant:{type:String,default:function(){return Object(i.b)(n.mb,"variant")}},striped:{type:Boolean,default:!1},animated:{type:Boolean,default:!1},height:{type:String},precision:{type:[Number,String],default:0},showProgress:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},max:{type:[Number,String],default:100},value:{type:[Number,String],default:0}},computed:{progressHeight:function(){return{height:this.height||null}}},render:function(e){var t=this.normalizeSlot();return t||(t=e(d,{props:{value:this.value,max:this.max,precision:this.precision,variant:this.variant,animated:this.animated,striped:this.striped,showProgress:this.showProgress,showValue:this.showValue}})),e("div",{class:["progress"],style:this.progressHeight},[t])}}),g=r("Pyw5");const h={components:{BProgress:b}};const f=r.n(g)()({render:function(){var e=this.$createElement;return(this._self._c||e)("b-progress",this._b({},"b-progress",this.$attrs,!1))},staticRenderFns:[]},void 0,h,void 0,!1,void 0,!1,void 0,void 0,void 0);t.a=f},ZeWX:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));r("QifN"),r("pBsb"),r("Ch9p"),r("+xeR"),r("orcL"),r("pETN");var n=r("EmJ/"),a=r.n(n),i=r("06tH"),o=r.n(i);var s=r("m/7A"),c=r("XRO8"),l=r("2ibD"),u=r("GVjJ"),p=r("3twG"),d=r("/lV4"),b=r("k/Fq");class g{constructor(){!function(){const e=a()("ul.clone-options-dropdown");if(e.length){const t=a()("#clone_url"),r=a()(".js-git-clone-holder .js-clone-dropdown-label"),n=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),i=r.text().trim();i.length>0&&a()("a:contains('".concat(i,"')"),e).addClass("is-active"),a()("a",e).on("click",(function(r){const i=a()(r.currentTarget),o=i.attr("href");if(o&&(o.startsWith("vscode://")||o.startsWith("xcode://")))return;r.preventDefault();const s=i.data("cloneType");a()(".is-active",e).removeClass("is-active"),a()('a[data-clone-type="'.concat(s,'"]')).each((function(){const e=a()(this),t=e.find(".dropdown-menu-inner-title").text(),r=e.closest(".js-git-clone-holder, .js-mobile-git-clone").find(".js-clone-dropdown-label");e.toggleClass("is-active"),r.text(t)})),n?n.dataset.clipboardText=o:t.val(o),a()(".js-git-empty .js-clone").text(o)}))}}(),document.querySelector(".js-project-refs-dropdown")&&(g.initRefSwitcher(),a()(".project-refs-select").on("change",(function(){return a()(this).parents("form").trigger("submit")}))),a()(".hide-no-ssh-message").on("click",(function(e){return o.a.set("hide_no_ssh_message","false"),a()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),a()(".hide-no-password-message").on("click",(function(e){return o.a.set("hide_no_password_message","false"),a()(this).parents(".no-password-message").remove(),e.preventDefault()})),a()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){const t=a()(this).data("project-id"),r="hide_auto_devops_implicitly_enabled_banner_".concat(t);return o.a.set(r,"false"),a()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),g.projectSelectDropdown()}static projectSelectDropdown(){Object(b.a)(),a()(".project-item-select").on("click",(function(e){return g.changeProject(a()(e.currentTarget).val())}))}static changeProject(e){return window.location=e}static initRefSwitcher(){const e=document.createElement("li"),t=document.createElement("a");return t.href="#",a()(".js-project-refs-dropdown").each((function(){const r=a()(this),n=r.data("selected"),i=r.data("fieldName"),o=Boolean(r.data("visit")),b=r.closest("form"),g=b.attr("action"),h=Object(p.q)(Object(u.b)(b[0]),g);return Object(s.a)(r,{data(e,t){l.a.get(r.data("refsUrl"),{params:{ref:r.data("ref"),search:e}}).then((function(e){let{data:r}=e;return t(r)})).catch((function(){return Object(c.c)(Object(d.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:r.data("inputFieldName"),fieldName:i,renderRow(r){const a=e.cloneNode(!1),s=t.cloneNode(!1);return r===n&&(s.className="is-active"),s.textContent=r,s.dataset.ref=r,r.length>0&&o&&(s.href=Object(p.q)({[i]:r},h)),a.appendChild(s),a},id:(e,t)=>t.attr("data-ref"),toggleLabel:(e,t)=>t.text().trim(),clicked(e){const{e:t}=e;if(t.preventDefault(),o){const e=new URL(t.target.href),n=window.location.href;if(n.includes("/-/")){const t=r.data("ref"),a=n.split(t)[1];if(null==a?void 0:a.startsWith("/")){const t=null==a?void 0:a.slice(1).split("#")[0];e.searchParams.set("path",t),e.hash=window.location.hash}}t.metaKey?window.open(e.href,"_blank"):window.location.href=e.href}}})}))}}},gNBD:function(e,t,r){var n=r("ZfjD"),a=r("H81m"),i=r("b05b");n({target:"Object",stat:!0},{fromEntries:function(e){var t={};return a(e,(function(e,r){i(t,e,r)}),{AS_ENTRIES:!0}),t}})},gjpc:function(e,t,r){"use strict";r.r(t);var n=r("CX32");new(r("ZeWX").a),new n.a},"k/Fq":function(e,t,r){"use strict";r("jaBk");var n=r("EmJ/"),a=r.n(n),i=r("qPgm"),o=r("qnJZ"),s=r("/lV4"),c=(r("pBsb"),r("n7CP"));class l{constructor(e){this.projectSelectInput=a()(e),this.newItemBtn=a()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}bindEvents(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}initLocalStorage(){c.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}openDropdown(e){r.e(443).then(r.t.bind(null,"p9g0",7)).then((function(){Object(o.a)(gon.select2_css_path).then((function(){a()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))})).catch((function(){}))}selectProject(){const e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}setBtnTextFromLocalStorage(){const e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}setNewItemBtnAttributes(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}getProjectFromLocalStorage(){const e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}setProjectInLocalStorage(e){const t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}deriveTextVariants(){const e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}const u=function(){Object(o.a)(gon.select2_css_path).then((function(){a()(".ajax-project-select").each((function(e,t){var r=this;let n;const o=a()(t).data("simpleFilter")||!1,c=a()(t).data("select2");return this.groupId=a()(t).data("groupId"),this.userId=a()(t).data("userId"),this.includeGroups=a()(t).data("includeGroups"),this.allProjects=a()(t).data("allProjects")||!1,this.orderBy=a()(t).data("orderBy")||"id",this.withIssuesEnabled=a()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=a()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===a()(t).data("withShared")||a()(t).data("withShared"),this.includeProjectsInSubgroups=a()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=a()(t).data("allowClear")||!1,n=Object(s.e)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(s.e)("ProjectSelect| or group")),a()(t).select2({placeholder:n,minimumInputLength:0,query:function(e){let t;const n=function(t){const r={results:t};return e.callback(r)};return t=r.includeGroups?function(t){return i.a.groups(e.term,{},(function(e){const r=e.concat(t);return n(r)}))}:n,r.groupId?i.a.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups,order_by:"similarity",simple:!0},t):r.userId?i.a.userProjects(r.userId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):i.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},t)},id:e=>o?e.id:JSON.stringify({name:e.name,url:e.web_url}),text:e=>e.name_with_namespace||e.name,initSelection:(e,t)=>i.a.project(e.val()).then((function(e){let{data:r}=e;return t(r)})),allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c||o?t:new l(t)}))})).catch((function(){}))};t.a=function(){a()(".ajax-project-select").length&&r.e(443).then(r.t.bind(null,"p9g0",7)).then(u).catch((function(){}))}},kbWK:function(e,t,r){"use strict";r.r(t);var n=r("jB52"),a=r("4ZIW");var i=r("NmEs"),o=(r("gNBD"),r("orcL"),r("J6+Z")),s=r("30su"),c=r("/lV4"),l=r("+pUt"),u=r("BXQK"),p=r("MV2A"),d=r("s1D3"),b={name:"LearnGitlabSectionLink",components:{GlLink:p.a,GlIcon:d.a},i18n:{ACTION_LABELS:l.ACTION_LABELS,trialOnly:Object(c.e)("LearnGitlab|Trial only")},props:{action:{required:!0,type:String},value:{required:!0,type:Object}},computed:{trialOnly(){return l.ACTION_LABELS[this.action].trialRequired}}},g=r("tBpV"),h=Object(g.a)(b,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gl-mb-4"},[e.value.completed?r("span",{staticClass:"gl-text-green-500"},[r("gl-icon",{attrs:{name:"check-circle-filled",size:16,"data-testid":"completed-icon"}}),e._v("\n    "+e._s(e.$options.i18n.ACTION_LABELS[e.action].title)+"\n  ")],1):r("span",[r("gl-link",{attrs:{target:"_blank",href:e.value.url,"data-track-action":"click_link","data-track-label":e.$options.i18n.ACTION_LABELS[e.action].title,"data-track-property":"Growth::Conversion::Experiment::LearnGitLabA"}},[e._v("\n      "+e._s(e.$options.i18n.ACTION_LABELS[e.action].title)+"\n    ")])],1),e._v(" "),e.trialOnly?r("span",{staticClass:"gl-font-style-italic gl-text-gray-500",attrs:{"data-testid":"trial-only"}},[e._v("\n    - "+e._s(e.$options.i18n.trialOnly)+"\n  ")]):e._e()])}),[],!1,null,null,null).exports;function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v={name:"LearnGitlabSectionCard",components:{GlCard:u.a,LearnGitlabSectionLink:h},i18n:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},l.ACTION_SECTIONS),props:{section:{required:!0,type:String},svg:{required:!0,type:String},actions:{required:!0,type:Object}},computed:{sortedActions(){return Object.entries(this.actions).sort((function(e,t){return l.ACTION_LABELS[e[0]].position-l.ACTION_LABELS[t[0]].position}))}}},j=Object(g.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("gl-card",{staticClass:"gl-pt-0 learn-gitlab-section-card"},[r("div",{staticClass:"learn-gitlab-section-card-header"},[r("img",{attrs:{src:e.svg}}),e._v(" "),r("h2",{staticClass:"gl-font-lg gl-mb-3"},[e._v(e._s(e.$options.i18n[e.section].title))]),e._v(" "),r("p",{staticClass:"gl-text-gray-700 gl-mb-6"},[e._v(e._s(e.$options.i18n[e.section].description))])]),e._v(" "),e._l(e.sortedActions,(function(e){var t=e[0],n=e[1];return r("learn-gitlab-section-link",{key:t,attrs:{action:t,value:n}})}))],2)}),[],!1,null,null,null).exports,y={components:{GlProgressBar:o.a,GlSprintf:s.a,LearnGitlabSectionCard:j},i18n:{title:Object(c.e)("LearnGitLab|Learn GitLab"),description:Object(c.e)("LearnGitLab|Ready to get started with GitLab? Follow these steps to set up your workspace, plan and commit changes, and deploy your project."),percentageCompleted:Object(c.e)("LearnGitLab|%{percentage}%{percentSymbol} completed")},props:{actions:{required:!0,type:Object},sections:{required:!0,type:Object}},maxValue:Object.keys(l.ACTION_LABELS).length,actionSections:Object.keys(l.ACTION_SECTIONS),computed:{progressValue(){return Object.values(this.actions).filter((function(e){return e.completed})).length},progressPercentage(){return Math.round(this.progressValue/this.$options.maxValue*100)}},methods:{actionsFor(e){return Object.fromEntries(Object.entries(this.actions).filter((function(t){let[r]=t;return l.ACTION_LABELS[r].section===e})))},svgFor(e){return this.sections[e].svg}}},w=Object(g.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"gl-mb-7 gl-ml-5"},[r("h1",{staticClass:"gl-font-size-h1"},[e._v(e._s(e.$options.i18n.title))]),e._v(" "),r("p",{staticClass:"gl-text-gray-700 gl-mb-0"},[e._v(e._s(e.$options.i18n.description))])])]),e._v(" "),r("div",{staticClass:"gl-mb-3"},[r("p",{staticClass:"gl-text-gray-500 gl-mb-2",attrs:{"data-testid":"completion-percentage"}},[r("gl-sprintf",{attrs:{message:e.$options.i18n.percentageCompleted},scopedSlots:e._u([{key:"percentage",fn:function(){return[e._v(e._s(e.progressPercentage))]},proxy:!0},{key:"percentSymbol",fn:function(){return[e._v("%")]},proxy:!0}])})],1),e._v(" "),r("gl-progress-bar",{attrs:{value:e.progressValue,max:e.$options.maxValue}})],1),e._v(" "),r("div",{staticClass:"row row-cols-1 row-cols-md-3 gl-mt-5"},e._l(e.$options.actionSections,(function(t){return r("div",{key:t,staticClass:"col gl-mb-6"},[r("learn-gitlab-section-card",{attrs:{section:t,svg:e.svgFor(t),actions:e.actionsFor(t)}})],1)})),0)])}),[],!1,null,null,null).exports,O=r("2Z+u"),L=r.n(O),_={name:"LearnGitlabInfoCard",components:{GlLink:p.a,GlCard:u.a,GlIcon:d.a},i18n:{trial:Object(c.e)("Learn GitLab|Trial only")},props:{title:{required:!0,type:String},description:{required:!0,type:String},actionLabel:{required:!0,type:String},url:{required:!0,type:String},completed:{required:!0,type:Boolean},svg:{required:!0,type:String},trialRequired:{default:!1,required:!1,type:Boolean}}};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x={components:{LearnGitlabInfoCard:Object(g.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("gl-card",{staticClass:"gl-pt-0"},[r("div",{staticClass:"gl-text-right gl-h-5"},[e.completed?r("gl-icon",{staticClass:"gl-text-green-500",attrs:{name:"check-circle-filled",size:16,"data-testid":"completed-icon"}}):e.trialRequired?r("span",{staticClass:"gl-text-gray-500 gl-font-sm gl-font-style-italic",attrs:{"data-testid":"trial-only"}},[e._v(e._s(e.$options.i18n.trial))]):e._e()],1),e._v(" "),r("div",{staticClass:"gl-text-center gl-display-flex gl-justify-content-center gl-align-items-center gl-flex-direction-column learn-gitlab-info-card-content"},[r("img",{attrs:{src:e.svg,alt:e.actionLabel}}),e._v(" "),r("h6",[e._v(e._s(e.title))]),e._v(" "),r("p",{staticClass:"gl-font-sm gl-text-gray-700"},[e._v(e._s(e.description))]),e._v(" "),r("gl-link",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer","data-track-action":"click_link","data-track-label":e.actionLabel,"data-track-property":"Growth::Activation::Experiment::LearnGitLabB"}},[e._v(e._s(e.actionLabel))])],1)])}),[],!1,null,null,null).exports,GlProgressBar:o.a,GlSprintf:s.a},i18n:{title:Object(c.e)("LearnGitLab|Learn GitLab"),description:Object(c.e)("LearnGitLab|Ready to get started with GitLab? Follow these steps to set up your workspace, plan and commit changes, and deploy your project."),percentageCompleted:Object(c.e)("LearnGitLab|%{percentage}%{percentSymbol} completed"),workspace:{title:Object(c.e)("LearnGitLab|Set up your workspace"),description:Object(c.e)("LearnGitLab|Complete these tasks first so you can enjoy GitLab's features to their fullest:")},plan:{title:Object(c.e)("LearnGitLab|Plan and execute"),description:Object(c.e)("LearnGitLab|Create a workflow for your new workspace, and learn how GitLab features work together:")},deploy:{title:Object(c.e)("LearnGitLab|Deploy"),description:Object(c.e)("LearnGitLab|Use your new GitLab workflow to deploy your application, monitor its health, and keep it secure:")}},props:{actions:{required:!0,type:Object}},maxValue:Object.keys(l.ACTION_LABELS).length,methods:{infoProps(e){return C(C({},this.actions[e]),L()(l.ACTION_LABELS[e],["title","actionLabel","description","trialRequired"]))},progressValue(){return Object.values(this.actions).filter((function(e){return e.completed})).length},progressPercentage(){return Math.round(this.progressValue()/this.$options.maxValue*100)}}},G=Object(g.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"gl-mb-7 col-md-8 col-lg-7"},[r("h1",{staticClass:"gl-font-size-h1"},[e._v(e._s(e.$options.i18n.title))]),e._v(" "),r("p",{staticClass:"gl-text-gray-700 gl-mb-0"},[e._v(e._s(e.$options.i18n.description))])])]),e._v(" "),r("div",{staticClass:"gl-mb-3"},[r("p",{staticClass:"gl-text-gray-500 gl-mb-2",attrs:{"data-testid":"completion-percentage"}},[r("gl-sprintf",{attrs:{message:e.$options.i18n.percentageCompleted},scopedSlots:e._u([{key:"percentage",fn:function(){return[e._v(e._s(e.progressPercentage()))]},proxy:!0},{key:"percentSymbol",fn:function(){return[e._v("%")]},proxy:!0}])})],1),e._v(" "),r("gl-progress-bar",{attrs:{value:e.progressValue(),max:e.$options.maxValue}})],1),e._v(" "),r("h2",{staticClass:"gl-font-lg gl-mb-3"},[e._v(e._s(e.$options.i18n.workspace.title))]),e._v(" "),r("p",{staticClass:"gl-text-gray-700 gl-mb-6"},[e._v(e._s(e.$options.i18n.workspace.description))]),e._v(" "),r("div",{staticClass:"row row-cols-2 row-cols-md-3 row-cols-lg-4"},[r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("userAdded"),!1))],1),e._v(" "),r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("gitWrite"),!1))],1),e._v(" "),r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("pipelineCreated"),!1))],1),e._v(" "),r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("trialStarted"),!1))],1),e._v(" "),r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("codeOwnersEnabled"),!1))],1),e._v(" "),r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("requiredMrApprovalsEnabled"),!1))],1)]),e._v(" "),r("h2",{staticClass:"gl-font-lg gl-mb-3"},[e._v(e._s(e.$options.i18n.plan.title))]),e._v(" "),r("p",{staticClass:"gl-text-gray-700 gl-mb-6"},[e._v(e._s(e.$options.i18n.plan.description))]),e._v(" "),r("div",{staticClass:"row row-cols-2 row-cols-md-3 row-cols-lg-4"},[r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("issueCreated"),!1))],1),e._v(" "),r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("mergeRequestCreated"),!1))],1)]),e._v(" "),r("h2",{staticClass:"gl-font-lg gl-mb-3"},[e._v(e._s(e.$options.i18n.deploy.title))]),e._v(" "),r("p",{staticClass:"gl-text-gray-700 gl-mb-6"},[e._v(e._s(e.$options.i18n.deploy.description))]),e._v(" "),r("div",{staticClass:"row row-cols-2 row-cols-lg-4 g-2 g-lg-3"},[r("div",{staticClass:"col gl-mb-6"},[r("learn-gitlab-info-card",e._b({},"learn-gitlab-info-card",e.infoProps("securityScanEnabled"),!1))],1)])])}),[],!1,null,null,null).exports;!function(){const e=document.getElementById("js-learn-gitlab-app");if(!e)return!1;const t=Object(i.h)(JSON.parse(e.dataset.actions)),r=Object(i.h)(JSON.parse(e.dataset.sections)),{learnGitlabA:o}=gon.experiments;(function(e){a.a.event("projects:learn_gitlab:index","page_init",{label:"learn_gitlab",property:e?"Growth::Conversion::Experiment::LearnGitLabA":"Growth::Activation::Experiment::LearnGitLabB"})})(o),new n.default({el:e,render:e=>e(o?w:G,{props:{actions:t,sections:r}})})}()},rPnh:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r("zlPX"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(e).replace(n.f,"")},i=function(e,t){return e?{innerHTML:e}:t?{textContent:t}:{}}}},[[169,1,0,2,3,4,5]]]);
//# sourceMappingURL=pages.projects.learn_gitlab.index.93d831d8.chunk.js.map