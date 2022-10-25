"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),f=i,d=c["".concat(o,".").concat(f)]||c[f]||u[f]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={title:"Staff mailing lists"},l=void 0,s={unversionedId:"staff/mailing-lists",id:"staff/mailing-lists",title:"Staff mailing lists",description:"Mailing lists",source:"@site/docs/staff/mailing-lists.md",sourceDirName:"staff",slug:"/staff/mailing-lists",permalink:"/docs/staff/mailing-lists",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/mailing-lists.md",tags:[],version:"current",frontMatter:{title:"Staff mailing lists"},sidebar:"tutorialSidebar",previous:{title:"i3wm",permalink:"/docs/staff/i3wm"},next:{title:"Staff policies",permalink:"/docs/staff/policies/"}},o={},m=[{value:"Mailing lists",id:"mailing-lists",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mailing-lists"},"Mailing lists"),(0,i.kt)("p",null,"There are several mailing lists used internally by staff. Append\n",(0,i.kt)("inlineCode",{parentName:"p"},"@ocf.berkeley.edu")," to the end of each mailing list."),(0,i.kt)("p",null,"All staffers are automatically added to the following two mailing lists:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staff"),": For staff announcements, such as meeting times and events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wheel"),": For technical discussion among all staff")),(0,i.kt)("p",null,"Staffers can also choose to be further added to the following mailing lists.\nTechnical Managers are required to join them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rt"),": Emails sent to Request Tracker are copied to this mailing list. If\nyou are on the ",(0,i.kt)("inlineCode",{parentName:"p"},"rt")," mailing list, you can reply to RT tickets from your\nemail. You are highly encouraged to join this mailing list even if you're\nnot root staff.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"root"),": Miscellaneous messages from system daemons are sent here:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cron daemons send mail containing any stdout/stderr output from cronjobs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jenkins.ocf.berkeley.edu/"},"Jenkins")," sends emails whenever a Jenkins build fails"),(0,i.kt)("li",{parentName:"ul"},"ocflib sends emails whenever an uncaught exception is thrown in ocfweb,\ncreate, enforcer, and several other background tasks"),(0,i.kt)("li",{parentName:"ul"},"Miscellaneous other emails are sent here")),(0,i.kt)("p",{parentName:"li"},"This mailing list gets a median of ~10 messages every day, although on some\ndays it can get a lot more.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"puppet"),": Error messages from puppet runs go here. This list tends to be\nvery noisy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mon"),": Monitoring alerts are sent here:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://intelligence.rackspace.com/login"},"Rackspace Cloud Monitoring")," emails us alerts when our\nimportant services are inaccessible from outside the OCF network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://munin.ocf.berkeley.edu/"},"Munin")," sends mail whenever some munin measurement (e.g. disk\nusage, RAM usage, etc.) is outside the normal range."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.ocf.berkeley.edu/"},"Prometheus")," sends mail for alerts, similar to Munin."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"extcomm"),": A compilation of technical mailing lists for upstream projects\nand projects we mirror."))),(0,i.kt)("p",null,"On the administrative side, the ",(0,i.kt)("inlineCode",{parentName:"p"},"officers")," mailing list receives emails related\nto OCF administrivia. Cabinet members are expected to be on this mailing list,\nand any other staffer can audit it as well."),(0,i.kt)("p",null,"Operations Staff are added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"opstaff")," mailing list."),(0,i.kt)("p",null,"There are also some special purpose mailing lists:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ocf@lists.berkeley.edu")," (",(0,i.kt)("a",{parentName:"p",href:"https://ocf.io/announce"},"ocf.io/announce"),"): we add emails from\nCalapalooza tabling to this mailing list, and send out announcements about\nstaff meetings here. We use a Berkeley mailing list here to let non-OCF\nmembers sign up for it."),(0,i.kt)("p",{parentName:"li"},"This mailing list should be cleared every fall."))))}u.isMDXComponent=!0}}]);