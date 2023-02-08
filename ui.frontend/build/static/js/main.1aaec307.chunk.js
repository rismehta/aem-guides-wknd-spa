(this["webpackJsonpwknd-spa-react-latest"]=this["webpackJsonpwknd-spa-react-latest"]||[]).push([[0],{275:function(e,t,n){},276:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);n(154),n(191),n(254);var o=n(14),s=n(34),r=n(0),i=n.n(r),a=n(63),l=n(306),c=n(7),d=n(4);var u=e=>Object(d.jsx)(c.Page,{...e});class p extends o.ModelClient{fetch(e){if(!e){const t=`Fetching model rejected for path: ${e}`;return Promise.reject(new Error(t))}const t=this._apiHost||"";return fetch(`${t}${e}`,{credentials:"same-origin",headers:{Authorization:""}}).then((e=>e.status>=200&&e.status<300?e.json():Promise.reject(e))).catch((e=>Promise.reject(e)))}}n(275);Object(c.MapTo)("wknd-spa-react-latest/components/page")((m=e=>Object(d.jsx)(c.Page,{...e,className:e.className||" page"}),class extends r.Component{render(){let e=this.props.cqPath;return e?(b=b||"html",Object(d.jsx)(l.a,{exact:!0,path:"(.*)"+e+"(."+b+")?",render:e=>Object(d.jsx)(m,{...this.props,...e})},e)):Object(d.jsx)(m,{...this.props})}}));var m,b,j=n(148),h=n.n(j);n(276);const v={emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1}},g=e=>e.richText?(()=>{return Object(d.jsx)("div",{id:(t=e.cqPath,t&&t.replace(/\/|:/g,"_")),"data-rte-editelement":!0,dangerouslySetInnerHTML:{__html:h.a.sanitize(e.text)}});var t})():Object(d.jsx)("div",{children:e.text});Object(c.MapTo)("wknd-spa-react-latest/components/text")((e=>Object(d.jsx)(c.EditableComponent,{config:v,...e,children:Object(d.jsx)(g,{...e})})));var O=n(42),x=n(33);Object(c.MapTo)("wknd-spa-react-latest/components/adaptiveForm/formcontainer")((e=>{var t,n,o,s;const r={emptyLabel:"Adaptive Form Container",isEmpty:function(e){return null==e.cqItems||0===e.cqItems.length}},{model:i}=e,a=Object(O.createFormInstance)(i);e.model=a.getState();const l=null===e||void 0===e||null===(t=e.model)||void 0===t||null===(n=t.properties)||void 0===n?void 0:n["fd:path"];return a.subscribe((e=>{var t;let n=null===(t=e.payload)||void 0===t?void 0:t.body;if(n)if(n.redirectUrl)window.location.href=n.redirectUrl;else if(n.thankYouMessage){let e=document.querySelector("[data-cmp-path='"+l+"']"),t=document.createElement("div");t.setAttribute("class","tyMessage"),t.innerHTML=n.thankYouMessage,e.replaceWith(t)}else window.alert("Error during form submission")}),"submitSuccess"),a.subscribe((e=>{window.alert("Error during form submission")}),"submitError"),Object(d.jsx)(c.EditableComponent,{config:r,...e,children:Object(d.jsx)(x.FormContext.Provider,{value:{form:a,modelId:a.getUniqueId()},children:Object(d.jsxs)("form",{"data-cmp-path":l,"data-cmp-is":"adaptiveFormContainer",children:[null!==e&&void 0!==e&&null!==(o=e.model)&&void 0!==o&&null!==(s=o.label)&&void 0!==s&&s.value?Object(d.jsx)("h2",{children:e.model.label.value}):null,Object(d.jsx)(c.ResponsiveGrid,{config:r,...e})]})})})}));var f=n(307),w=n(311),C=n(71),y=n(310),E=n(308);const I=e=>{const{id:t,size:n="lg",showPassword:o=!0,autoComplete:s="off",errorBorderColor:r="crimson"}=e;return Object(d.jsx)(f.a,{id:t,size:n,autoComplete:s,errorBorderColor:r,type:o?"text":"password",...e})},P=e=>{const{showPassword:t=!1,inputTypePassword:n=!1,handlerShowHidePassword:o=(()=>{})}=e;return n?Object(d.jsxs)(f.b,{children:[Object(d.jsx)(I,{...e}),Object(d.jsx)(f.c,{width:"4.5rem",children:Object(d.jsx)(w.a,{h:"1.75rem",size:"sm",onClick:o,children:t?"Hide":"Show"})})]}):Object(d.jsx)(I,{...e})},k=e=>{const{id:t,error:n,label:o,value:s,format:r,required:a,readOnly:l,maxLength:c,properties:u,placeholder:p,description:m,errorMessage:b}=e,{inputType:j}=u||{},[h,v]=i.a.useState(!1),g=t=>{var n;let o=t.target.value;const s=null===(n=o)||void 0===n?void 0:n.length;if("date"===r)null!==t&&void 0!==t&&t.keyCode&&8!==t.keyCode&&(4!==s&&7!==s||(o+="-",t.target.value=o));else if("ssn"===(null===u||void 0===u?void 0:u.format)||"zip"===(null===u||void 0===u?void 0:u.format)){if(null!==t&&void 0!==t&&t.keyCode&&8!==t.keyCode){const e="zip"===u.format&&5===s;("ssn"===u.format&&(3===s||7===s)||e)&&(o+="-"),t.target.value=o}const n=o.replace(/-/g,"");return e.onChange(n),!0}e.onChange(o)},O=void 0!==b&&b.length>0,x=Object(d.jsx)(P,{value:s,onBlur:t=>{e.onBlur(t.target.value)},isReadOnly:l,isRequired:a,onChange:e=>{let t=e.target.value;c&&t.length===c+1||g(e)},placeholder:p,onKeyDown:e=>{g(e)},isInvalid:O,handlerShowHidePassword:()=>v(!h),inputTypePassword:"password"===j,showPassword:"password"!==j||!!h});return"undefined"===typeof e.visible||e.visible?Object(d.jsxs)(C.a,{isInvalid:n,mb:30,children:[Object(d.jsxs)(C.b,{htmlFor:t,children:[o.value," ",o.value&&a?"*":""]}),null!==m&&void 0!==m&&m.length?Object(d.jsx)(y.a,{label:m,children:x}):x,Object(d.jsx)(E.b,{mb:"8px",color:"crimson",children:b})]}):null},M=e=>{const{isInEditor:t}=e;let n={...e};if(!t){const[t,o]=Object(x.useRuleEngine)(e);n={onChange:o.dispatchChange,onBlur:o.dispatchChange,...t}}return Object(d.jsx)(k,{...n})};Object(c.MapTo)("wknd-spa-react-latest/components/adaptiveForm/textinput")((e=>{const t={isInEditor:o.AuthoringUtils.isInEditor(),...e};return Object(d.jsx)(c.EditableComponent,{config:{emptyLabel:"Text Field",isEmpty:function(e){return!e}},...t,children:Object(d.jsx)(M,{...t})})}));Object(c.MapTo)("wknd-spa-react-latest/components/adaptiveForm/panelcontainer")((e=>{let{model:t}=e;if(!o.AuthoringUtils.isInEditor()){const[e,n]=Object(x.useRuleEngine)(t),{layout:o}=(null===e||void 0===e?void 0:e.properties)||{};t={...e}}const n={emptyLabel:"Adaptive Form Panel",isEmpty:function(e){return null==e.cqItems||0===e.cqItems.length}};return"undefined"===typeof t.visible||t.visible?Object(d.jsx)(c.EditableComponent,{config:n,...e,children:Object(d.jsx)(E.a,{columnGap:10,colorScheme:"blue",children:Object(d.jsx)(c.ResponsiveGrid,{config:n,...e})})}):null}));const T=e=>{let{label:t,onClick:n,enabled:o,className:s,properties:r,visible:i}=e;return"undefined"===typeof i||i?Object(d.jsx)(w.a,{size:"md",height:"48px",width:!1===(null===r||void 0===r?void 0:r.marginTnB)?"25%":"100%",border:"2px",colorScheme:"blue",onClick:e=>{n(e)},className:s,disabled:!o,mt:!1===(null===r||void 0===r?void 0:r.marginTnB)?"0":"30",mb:!1===(null===r||void 0===r?void 0:r.marginTnB)?"0":"30",children:t.value}):null},q=e=>{const{isInEditor:t}=e;let n={...e};if(!t){const[t,o]=Object(x.useRuleEngine)(e);n={onClick:o.dispatchClick,...t}}return Object(d.jsx)(T,{...n})};Object(c.MapTo)("wknd-spa-react-latest/components/adaptiveForm/button")((e=>{const t={isInEditor:o.AuthoringUtils.isInEditor(),...e};return Object(d.jsx)(c.EditableComponent,{config:{emptyLabel:"Button",isEmpty:function(e){return!e}},...t,children:Object(d.jsx)(q,{...t})})}));var F=n(309);const R=e=>{const t=e.enumNames&&e.enumNames.length?e.enumNames:e.enum||[],{label:n,id:o,required:s}=e;return"undefined"===typeof e.visible||e.visible?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(C.a,{isInvalid:e.errorMessage,children:[Object(d.jsxs)(C.b,{htmlFor:o,children:[n.value," ",n.value&&s?"*":""]}),Object(d.jsx)(F.a,{onChange:t=>{e.onChange(parseInt(t.target.value))},size:"lg",mt:2,children:(null===t||void 0===t?void 0:t.length)>0?t.map(((e,t)=>Object(d.jsx)("option",{value:t+1,children:e},t+1))):null}),Object(d.jsx)(E.b,{mb:"8px",color:"crimson",children:e.errorMessage})]})}):null},L=e=>{const{isInEditor:t}=e;let n={...e};if(!t){const[t,o]=Object(x.useRuleEngine)(e);n={onChange:o.dispatchChange,selectedKey:null!=(null===t||void 0===t?void 0:t.value)?t.value+"":t.value,...t}}return Object(d.jsx)(R,{...n})};Object(c.MapTo)("wknd-spa-react-latest/components/adaptiveForm/dropdown")((e=>{const t={isInEditor:o.AuthoringUtils.isInEditor(),...e};return Object(d.jsx)(c.EditableComponent,{config:{emptyLabel:"Drop Down",isEmpty:function(e){return!e}},...t,children:Object(d.jsx)(L,{...t})})})),n(298);const S={};document.addEventListener("DOMContentLoaded",(()=>{o.ModelManager.initialize(S).then((e=>{const t=Object(s.a)();Object(a.render)(Object(d.jsx)(l.b,{history:t,children:Object(d.jsx)(u,{history:t,cqChildren:e[o.Constants.CHILDREN_PROP],cqItems:e[o.Constants.ITEMS_PROP],cqItemsOrder:e[o.Constants.ITEMS_ORDER_PROP],cqPath:e[o.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[299,1,2]]]);
//# sourceMappingURL=main.1aaec307.chunk.js.map