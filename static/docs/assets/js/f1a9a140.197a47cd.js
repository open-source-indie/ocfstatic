"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8866],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Backups"},i=void 0,p={unversionedId:"staff/backend/backups",id:"staff/backend/backups",title:"Backups",description:"Backup Storage",source:"@site/docs/staff/backend/backups.md",sourceDirName:"staff/backend",slug:"/staff/backend/backups",permalink:"/docs/staff/backend/backups",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/backend/backups.md",tags:[],version:"current",frontMatter:{title:"Backups"},sidebar:"tutorialSidebar",previous:{title:"Infrastructure",permalink:"/docs/staff/backend/"},next:{title:"External firewall",permalink:"/docs/staff/backend/firewall"}},s={},l=[{value:"Backup Storage",id:"backup-storage",level:2},{value:"Off-Site Backups",id:"off-site-backups",level:2},{value:"Retention",id:"retention",level:3},{value:"Restoring Backups",id:"restoring-backups",level:2},{value:"Onsite",id:"onsite",level:3},{value:"Offsite",id:"offsite",level:3},{value:"Backup Contents",id:"backup-contents",level:2},{value:"Backup Procedures",id:"backup-procedures",level:2},{value:"Ideas for backup improvements",id:"ideas-for-backup-improvements",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"backup-storage"},"Backup Storage"),(0,r.kt)("p",null,"We currently store our on-site backups across a couple drives on ",(0,r.kt)("inlineCode",{parentName:"p"},"hal"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"hal:/opt/backups")," (6 TiB usable; 2x 6-TiB Seagate drives in RAID 1 in an LVM\nvolume group)"),(0,r.kt)("p",{parentName:"li"},"This volume group provides ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/vg-backups/backups-live")," which contains\nrecent daily, weekly, and monthly backups, and\n",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/vg-backups/backups-scratch"),", which is scratch space for holding\ncompressed and encrypted backups which we then upload to off-site storage."))),(0,r.kt)("h2",{id:"off-site-backups"},"Off-Site Backups"),(0,r.kt)("p",null,"Our main off-site backup location is ",(0,r.kt)("a",{parentName:"p",href:"https://www.box.com"},"Box"),'. Students automatically get an\n"unlimited" plan, so it provides a nice and free location to store encrypted\nbackups. We currently have a weekly cronjob that ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocf/puppet/blob/master/modules/ocf_backups/files/create-encrypted-backup"},"makes an encrypted\nbackup")," using GPG keys and then ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocf/puppet/blob/master/modules/ocf_backups/files/upload-to-box"},"uploads it to\nBox.com"),". This takes about 20 hours combined to make and upload,\nand will probably take even longer in the future as backups grow. An email is\nsent out once the backup files are uploaded, and the link provided is shared\nwith only OCF officers to make sure the backups are kept as secure as possible,\nsince they contain all of the OCF's important data. The backups are already\nencrypted, but it doesn't hurt to add a little extra security to that."),(0,r.kt)("h3",{id:"retention"},"Retention"),(0,r.kt)("p",null,"Off-site backups older than six months (180 days) are permanently deleted by a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocf/puppet/blob/master/modules/ocf_backups/files/prune-old-backups"},"daily cronjob"),"."),(0,r.kt)("h2",{id:"restoring-backups"},"Restoring Backups"),(0,r.kt)("p",null,"The easiest way to restore from a backup is to look at how it is made and\nreverse it. If it is a directory specified in rsnapshot, then likely all that\nneeds to be done is to take that directory from the backup and put it onto the\nserver to restore onto. Some backups, such as mysql, ldap, and kerberos are\nmore complicated, and need to be restored using ",(0,r.kt)("inlineCode",{parentName:"p"},"mysqlimport")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ldapadd")," for\ninstance."),(0,r.kt)("h3",{id:"onsite"},"Onsite"),(0,r.kt)("p",null,"Onsite backups are pretty simple, all that needs to be done is to go to ",(0,r.kt)("inlineCode",{parentName:"p"},"hal"),"\nand find the backup to restore from in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/backups/live"),". All backups of\nrecent data are found in either ",(0,r.kt)("inlineCode",{parentName:"p"},"rsnapshot")," (for daily backups) or ",(0,r.kt)("inlineCode",{parentName:"p"},"misc")," (for\nany incidents or one-off backups). Within ",(0,r.kt)("inlineCode",{parentName:"p"},"rsnapshot"),", the backups are\norganized into directories dependings on how long ago the backup was made. To\nsee when each backup was created just use ",(0,r.kt)("inlineCode",{parentName:"p"},"ls -l")," to show the last modified\ntime of each directory."),(0,r.kt)("h3",{id:"offsite"},"Offsite"),(0,r.kt)("p",null,"Offsite backups are more complicated because the backup files first need to be\ndownloaded, stuck together into a single file, decrypted, extracted, and then\nput into LVM to get back the whole backup archive that would normally be found\nonsite. This essentially just means that the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocf/puppet/blob/master/modules/ocf_backups/files/create-encrypted-backup"},"create-encrypted-backup")," script needs to be reversed\nto restore once the backup files are downloaded. Here are the general steps to\ntake to restore from an offsite backup:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download all the backup pieces from Box.com. This is generally easiest with\na command line tool like ",(0,r.kt)("inlineCode",{parentName:"p"},"cadaver"),", which can just use a ",(0,r.kt)("inlineCode",{parentName:"p"},"mget *")," to download\nall the files (albeit sequentially). If more speed is needed, open multiple\n",(0,r.kt)("inlineCode",{parentName:"p"},"cadaver")," connections and download multiple groups of files at once.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Put together all the backup pieces into a single file. This can be done by\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"cat <backup>.img.gz.gpg.part* > <backup>.img.gz.gpg"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Decrypt the backup using ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg"),". This requires your key pair to be imported\ninto ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg")," first using ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg --import public_key.gpg")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"gpg --allow-secret-key-import --import private_key.gpg"),", then you can\ndecrypt the backup with\n",(0,r.kt)("inlineCode",{parentName:"p"},"gpg --output <backup>.img.gz --decrypt <backup>.img.gz.gpg"),". Be careful to\nkeep your private key secure by setting good permissions on it so that nobody\nelse can read it, and delete it after the backup is imported. The keys can be\ndeleted with ",(0,r.kt)("inlineCode",{parentName:"p"},'gpg --delete-secret-keys "<Name>"')," and\n",(0,r.kt)("inlineCode",{parentName:"p"},'gpg --delete-key "<Name>"'),", where your name is whatever name it shows when\nyou run ",(0,r.kt)("inlineCode",{parentName:"p"},"gpg --list-keys"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the backup with ",(0,r.kt)("inlineCode",{parentName:"p"},"gunzip <backup>.img.gz"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Put the backup image into a LVM logical volume. First find the size that the\nvolume should be by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ls -l <backup>.img"),", and copy the number of\nbytes that outputs. Then create the LV with\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo lvcreate -L <bytes>B -n <name> /dev/<volume group>")," where the volume\ngroup has enough space to store the entire backup (2+ TiB)."))),(0,r.kt)("h2",{id:"backup-contents"},"Backup Contents"),(0,r.kt)("p",null,"Backups currently include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Everything on NFS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User home and web directories"),(0,r.kt)("li",{parentName:"ul"},"Cronjobs on supported servers (tsunami, supernova, biohazard, etc.)"))),(0,r.kt)("li",{parentName:"ul"},"MySQL databases (including user databases, stats, RT, print quotas, IRC data)"),(0,r.kt)("li",{parentName:"ul"},"Everything on GitHub (probably very unnecessary)"),(0,r.kt)("li",{parentName:"ul"},"LDAP and Kerberos data"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ocf/puppet/blob/17bc94b395e254529d97c84fb044f76931439fd7/modules/ocf_backups/files/rsnapshot.conf#L53"},"smattering of random files on random servers"))),(0,r.kt)("h2",{id:"backup-procedures"},"Backup Procedures"),(0,r.kt)("p",null,"Backups are currently made daily via a cronjob on ",(0,r.kt)("inlineCode",{parentName:"p"},"hal")," which calls ",(0,r.kt)("inlineCode",{parentName:"p"},"rsnapshot"),".\nThe current settings are to retain 7 daily backups, 4 weekly backups, and 6\nmonthly backups, but we might adjust this as it takes more space or we get\nlarger backup drives."),(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"rsnapshot")," to make incremental backups. Typically, each new backup\ntakes an additional ~3GiB of space (but this will vary based on how many files\nactually changed). A full backup is about ~2TiB of space and growing."),(0,r.kt)("p",null,"(The incremental file backups are only about ~300 MiB, but since mysqldump\nfiles can't be incrementally backed up, those take a whole ~2 GiB each time, so\nthe total backup grows by ~3GiB each time. However, an old backup is discarded\neach time too, so it approximately breaks even.)"),(0,r.kt)("h2",{id:"ideas-for-backup-improvements"},"Ideas for backup improvements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Automate backup testing, so have some system for periodically checking that\nbackups can be restored from, whether they are offsite or onsite.")))}u.isMDXComponent=!0}}]);