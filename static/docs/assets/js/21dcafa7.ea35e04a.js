"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5428],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8074:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:".desktoprc"},i=void 0,s={unversionedId:"staff/tips/desktoprc",id:"staff/tips/desktoprc",title:".desktoprc",description:"The file ~/remote/.desktoprc is automatically sourced when you log into any",source:"@site/docs/staff/tips/desktoprc.md",sourceDirName:"staff/tips",slug:"/staff/tips/desktoprc",permalink:"/docs/staff/tips/desktoprc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/tips/desktoprc.md",tags:[],version:"current",frontMatter:{title:".desktoprc"},sidebar:"tutorialSidebar",previous:{title:"Tips and tricks",permalink:"/docs/staff/tips/"},next:{title:"Shorturls",permalink:"/docs/staff/tips/shorturls"}},l={},c=[{value:"Example uses",id:"example-uses",level:2},{value:"Sync your dotfiles",id:"sync-your-dotfiles",level:3},{value:"Configure HexChat (IRC)",id:"configure-hexchat-irc",level:3},{value:"Disable terminal shortcuts",id:"disable-terminal-shortcuts",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The file ",(0,o.kt)("inlineCode",{parentName:"p"},"~/remote/.desktoprc")," is automatically sourced when you log into any\nof the desktops. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"~/remote")," is actually ",(0,o.kt)("inlineCode",{parentName:"p"},"sshfs"),"'d to your home folder on\nNFS, this means you can put your common config or preferences in it and have\nthem be shared across all desktops."),(0,o.kt)("h2",{id:"example-uses"},"Example uses"),(0,o.kt)("p",null,"If you want to get a feel for what you can do with your ",(0,o.kt)("inlineCode",{parentName:"p"},".desktoprc"),", try out\nsome of these useful ideas."),(0,o.kt)("h3",{id:"sync-your-dotfiles"},"Sync your dotfiles"),(0,o.kt)("p",null,"If you want your application settings shared between the desktops and login\nservers, you can just copy them over with a line like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cp ~/remote/{.bashrc, .bash_aliases, .vimrc, ...} ~/\n")),(0,o.kt)("p",null,"Alternatively, if you have a ",(0,o.kt)("a",{parentName:"p",href:"https://dotfiles.github.io/"},"dotfile repo"),", you\ncan either clone it..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/username/dotfiles.git ~/.dotfiles\n~/.dotfiles/my-install-script\n")),(0,o.kt)("p",null,"... or just link to it in your NFS homedir, if you have it there:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ln -s ~/remote/.dotfiles ~/.dotfiles\n~/.dotfiles/my-install-script\n")),(0,o.kt)("h3",{id:"configure-hexchat-irc"},"Configure HexChat (IRC)"),(0,o.kt)("p",null,"We install HexChat as a desktop IRC client. You can automatically configure it\nto connect to your favorite networks on startup. For example, to automatically\nconnect to the OCF's IRC server, try this snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'mkdir -p ~/.config/hexchat\necho "\nv=2.12.4\n\nN=ocf\nL=7\nE=UTF-8 (Unicode)\nF=30\nD=0\nS=irc.ocf.berkeley.edu/6697\nJ=#rebuild\n" > ~/.config/hexchat/servlist.conf\n')),(0,o.kt)("p",null,"For more complex configs, you always have the option to edit your server list\nfrom the GUI, then copy and paste ",(0,o.kt)("inlineCode",{parentName:"p"},"servlist.conf")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},".desktoprc"),"."),(0,o.kt)("h3",{id:"disable-terminal-shortcuts"},"Disable terminal shortcuts"),(0,o.kt)("p",null,"The XFCE4 terminal emulator installed on the desktops comes with keyboard\nshortcuts by default. If these bother you, you can disable them like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'echo "\nShortcutsNoHelpkey=TRUE\nShortcutsNoMenukey=TRUE\nShortcutsNoMnemonics=TRUE\n" >> ~/.config/xfce4/terminal/terminalrc\n')))}u.isMDXComponent=!0}}]);