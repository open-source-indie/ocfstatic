"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),p=r,v=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={title:"Mail virtual hosting for student groups"},o=void 0,l={unversionedId:"services/vhost/mail/mail",id:"services/vhost/mail/mail",title:"Mail virtual hosting for student groups",description:"Our regular virtual hosting gives your group a website at",source:"@site/docs/services/vhost/mail/mail.md",sourceDirName:"services/vhost/mail",slug:"/services/vhost/mail/",permalink:"/docs/services/vhost/mail/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/services/vhost/mail/mail.md",tags:[],version:"current",frontMatter:{title:"Mail virtual hosting for student groups"},sidebar:"tutorialSidebar",previous:{title:"Virtual hosting (group.berkeley.edu)",permalink:"/docs/services/vhost/"},next:{title:"Using Gmail with mail virtual hosting",permalink:"/docs/services/vhost/mail/gmail"}},s={},u=[{value:"Getting set up with mail virtual hosting",id:"getting-set-up-with-mail-virtual-hosting",level:2},{value:"How sending and receiving mail works",id:"how-sending-and-receiving-mail-works",level:2},{value:"How can I use Gmail to send and receive email?",id:"how-can-i-use-gmail-to-send-and-receive-email",level:4},{value:"How can I use an email client besides Gmail to send and receive email?",id:"how-can-i-use-an-email-client-besides-gmail-to-send-and-receive-email",level:4},{value:"What if I only want to receive and not send email?",id:"what-if-i-only-want-to-receive-and-not-send-email",level:4}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Our regular virtual hosting gives your group a website at\n",(0,r.kt)("inlineCode",{parentName:"p"},"mygroup.berkeley.edu"),". By contrast, ",(0,r.kt)("em",{parentName:"p"},"mail virtual hosting")," lets you create as\nmany email addresses as you'd like ",(0,r.kt)("inlineCode",{parentName:"p"},"@mygroup.berkeley.edu"),"."),(0,r.kt)("p",null,"These addresses can be used both to receive mail (via mail forwarding), and\nsend mail. The details of how to use these addresses are below."),(0,r.kt)("h2",{id:"getting-set-up-with-mail-virtual-hosting"},"Getting set up with mail virtual hosting"),(0,r.kt)("p",null,"By default, groups only have regular web virtual hosting."),(0,r.kt)("p",null,"If you'd like to get started using mail virtual hosting, send us an email at\n",(0,r.kt)("a",{parentName:"p",href:"mailto:hostmaster@ocf.berkeley.edu"},"hostmaster@ocf.berkeley.edu")," letting us\nknow you'd like to enable email virtual hosting. Be sure to include both the\ndomain name, and your OCF account name."),(0,r.kt)("p",null,"Once your domain is configured for mail, head over to our [","[mail virtual hosting page|vhost_mail]","] to add and remove addresses."),(0,r.kt)("h2",{id:"how-sending-and-receiving-mail-works"},"How sending and receiving mail works"),(0,r.kt)("p",null,'The OCF does not provide "true" mail hosting -- we do not store mail on our\nservers, nor do we provide a new mailbox for you to monitor. Instead, we\nprovide:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mail forwarding: forward emails sent to ",(0,r.kt)("inlineCode",{parentName:"li"},"xxxx@yourgroup.berkeley.edu")," to an\nemail address you already own."),(0,r.kt)("li",{parentName:"ul"},"Mail sending: send an email as ",(0,r.kt)("inlineCode",{parentName:"li"},"xxxx@yourgroup.berkeley.edu"),"."),(0,r.kt)("li",{parentName:"ul"},"Lightweight user management: create different email addresses and configure\nwho to forward them to.")),(0,r.kt)("p",null,"Our admin panel looks like this:\n",(0,r.kt)("img",{parentName:"p",src:"https://i.fluffy.cc/9cGLcQv29G6kmlgvnvgq8J7nxw9BlMrx.png",alt:null})),(0,r.kt)("p",null,"We provide instructions for setting this up with Gmail below, but other email\nproviders and clients offer similar options."),(0,r.kt)("h4",{id:"how-can-i-use-gmail-to-send-and-receive-email"},"How can I use Gmail to send and receive email?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/services/vhost/mail/gmail"},"We have an entire page about that \u2014 click here!")),(0,r.kt)("h4",{id:"how-can-i-use-an-email-client-besides-gmail-to-send-and-receive-email"},"How can I use an email client besides Gmail to send and receive email?"),(0,r.kt)("p",null,"There are too many email clients for us to provide instructions for, so here\nare the settings you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SMTP server:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"smtp.ocf.berkeley.edu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port:")," 587"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security:")," TLS, verify cert"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username:")," The full email address, including domain name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password:")," The password you set")),(0,r.kt)("p",null,"Note that we ",(0,r.kt)("em",{parentName:"p"},"only provide email sending"),", so you only need to configure SMTP\nand not POP/IMAP."),(0,r.kt)("p",null,"Good luck!"),(0,r.kt)("h4",{id:"what-if-i-only-want-to-receive-and-not-send-email"},"What if I only want to receive and not send email?"),(0,r.kt)("p",null,"You can totally do that! Just set up an address to forward to and don't bother\nconfiguring the sending address. You can even leave the password blank."))}m.isMDXComponent=!0}}]);