"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[318],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,s(s({ref:n},c),{},{components:t})):a.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={title:"Installing and running ZNC"},s=void 0,l={unversionedId:"staff/tips/staffvm/znc",id:"staff/tips/staffvm/znc",title:"Installing and running ZNC",description:"Installing and running ZNC on your staff VM is easy and highly recommended.",source:"@site/docs/staff/tips/staffvm/znc.md",sourceDirName:"staff/tips/staffvm",slug:"/staff/tips/staffvm/znc",permalink:"/docs/staff/tips/staffvm/znc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/tips/staffvm/znc.md",tags:[],version:"current",frontMatter:{title:"Installing and running ZNC"},sidebar:"tutorialSidebar",previous:{title:"Running ocfweb",permalink:"/docs/staff/tips/staffvm/ocfweb"},next:{title:"Email Templates",permalink:"/docs/staff/tips/templates"}},i={},u=[{value:"What is ZNC?",id:"what-is-znc",level:2},{value:"Installing ZNC on your staff VM",id:"installing-znc-on-your-staff-vm",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Installing and running ZNC on your staff VM is easy and highly recommended."),(0,r.kt)("h2",{id:"what-is-znc"},"What is ZNC?"),(0,r.kt)("p",null,"ZNC is an ",(0,r.kt)("em",{parentName:"p"},"IRC bouncer"),". It keeps you always connected to IRC, and allows you\nto connect to the bouncer from your desktop client, irssi, phone, etc."),(0,r.kt)("p",null,"It's handy to avoid constantly disconnecting/reconnecting from IRC. It will\nalso store messages you've missed and replay them when you log in."),(0,r.kt)("p",null,"It's useful along with ",(0,r.kt)("a",{parentName:"p",href:"/docs/contact/irc"},"OCF's IRC server"),"."),(0,r.kt)("h2",{id:"installing-znc-on-your-staff-vm"},"Installing ZNC on your staff VM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt-get install znc"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a config file for ZNC. As your user (i.e. not as root), run ",(0,r.kt)("inlineCode",{parentName:"p"},"znc --makeconf"),". It's pretty safe to accept the defaults (just hit enter), but\nyou'll probably want to enable webadmin."),(0,r.kt)("p",{parentName:"li"},"The settings I use (everything else I accept defaults):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ckuehl@raptors:~$ znc --makeconf\n[ ?? ] What port would you like ZNC to listen on? (1025 to 65535): 4095\n\n[ ?? ] Would you like ZNC to listen using SSL? (yes/no) [no]: yes\n[ ?? ] Would you like ZNC to listen using both IPv4 and IPv6? (yes/no) [yes]: no\n\n[ ?? ] Load global module <webadmin>? (yes/no) [no]: yes\n\n[ ** ] Now we need to set up a user...\n[ ** ]\n[ ?? ] Username (AlphaNumeric): ckuehl\n[ ?? ] Enter Password:\n[ ?? ] Confirm Password:\n[ ?? ] Would you like this user to be an admin? (yes/no) [yes]: yes\n[ ?? ] Nick [ckuehl]:\n[ ?? ] Alt Nick [ckuehl_]:\n[ ?? ] Ident [ckuehl]:\n[ ?? ] Real Name [Got ZNC?]: Chris Kuehl\n\n[ ?? ] Load module <chansaver>? (yes/no) [no]: yes\n[ ?? ] Load module <controlpanel>? (yes/no) [no]: yes\n[ ?? ] Load module <perform>? (yes/no) [no]:\n[ ?? ] Load module <webadmin>? (yes/no) [no]: yes\n\n[ ?? ] Would you like to set up a network? (yes/no) [no]: yes\n[ ?? ] Network (e.g. `freenode' or `efnet'): ocf\n\n[ ?? ] Load module <chansaver>? (yes/no) [no]: yes\n[ ?? ] Load module <keepnick>? (yes/no) [no]: yes\n\n[ ** ] -- IRC Servers --\n[ ** ] Only add servers from the same IRC network.\n[ ** ] If a server from the list can't be reached, another server will be used.\n[ ** ]\n[ ?? ] IRC server (host only): irc.ocf.berkeley.edu\n[ ?? ] [irc.ocf.berkeley.edu] Port (1 to 65535) [6667]: 6697\n[ ?? ] [irc.ocf.berkeley.edu] Password (probably empty):\n[ ?? ] Does this server use SSL? (yes/no) [no]: yes\n\n[ ?? ] Would you like to add a channel for ZNC to automatically join? [yes]: yes\n[ ?? ] Channel name: #rebuild\n[ ?? ] Would you like to add another channel? (yes/no) [no]: yes\n[ ?? ] Channel name: #ocf\n\n[ ?? ] Launch ZNC now? (yes/no) [yes]: no\n")),(0,r.kt)("p",{parentName:"li"},"kpengboy's preferences, in addition to most of the above, include:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[ ?? ] Number of lines to buffer per channel [50]: 200\n[ ?? ] Would you like to clear channel buffers after replay? (yes/no) [yes]: no\n")),(0,r.kt)("p",{parentName:"li"},"and enabling the buffextras module (in webadmin afterwards).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you accidentally started ZNC at the end of the setup, you should kill it\nnow with ",(0,r.kt)("inlineCode",{parentName:"p"},"pkill znc"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now we'll set up systemd to supervise ZNC for us."),(0,r.kt)("p",{parentName:"li"},"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/znc.service")," with the contents:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[Unit]\nDescription=ZNC - IRC Bouncer\nRequires=nss-user-lookup.target\nAfter=network-online.target nss-user-lookup.target\n\n[Service]\nUser=<YOUR_USER>\nExecStart=/usr/bin/znc --foreground\nExecReload=/bin/kill -HUP $MAINPID\nRestart=on-failure\nKillSignal=SIGINT\nSuccessExitStatus=2\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",{parentName:"li"},"Make sure to change ",(0,r.kt)("inlineCode",{parentName:"p"},"<YOUR_USER>")," to your username!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reload systemd and start znc:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo systemctl daemon-reload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo systemctl enable znc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo systemctl start znc"))))),(0,r.kt)("p",null,"ZNC should now be running (and will start/restart automatically). You can see\ndetailed information with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl status znc"),"."),(0,r.kt)("p",null,"If you enabled webadmin, you can access your server at\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://<your_staff_VM>.ocf.berkeley.edu:PORT/"),". Make sure you use ",(0,r.kt)("inlineCode",{parentName:"p"},"https"),' or\nyou\'ll get a cryptic "connection reset" message.'))}p.isMDXComponent=!0}}]);