(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{29876:function(e,t,l){Promise.resolve().then(l.bind(l,42081)),Promise.resolve().then(l.t.bind(l,38173,23))},42081:function(e,t,l){"use strict";l.d(t,{default:function(){return B}});var s,a=l(57437),i=l(2265),n=l(27934),r=l(76208),o=l(72912),d=l(97105),c=l(8284),u=l(51359),m=l(88819),x=l(78989),f=l(44510),h=l(8127),p=l(68542),g=l(75500),v=l(85490),j=l(44839),b=l(96164);let y=["small","medium","large"],N=(0,b.q7)({extend:{theme:{opacity:["disabled"],spacing:["divider"],borderWidth:y,borderRadius:y},classGroups:{shadow:[{shadow:y}],"font-size":[{text:["tiny",...y]}],"bg-image":["bg-stripe-gradient"]}}});function w(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return N((0,j.Z)(t))}let k=((s={}).Nest="nest",s),C=i.forwardRef((e,t)=>{let{items:l,isCompact:s,defaultSelectedKey:n,onSelect:r,hideEndContent:o,sectionClasses:d={},itemClasses:c={},iconClassName:m,classNames:j,className:b,...y}=e,[N,C]=i.useState(n),O={...d,base:w(null==d?void 0:d.base,"w-full",{"p-0 max-w-[44px]":s}),group:w(null==d?void 0:d.group,{"flex flex-col gap-1":s}),heading:w(null==d?void 0:d.heading,{hidden:s})},J={...c,base:w(null==c?void 0:c.base,{"w-11 h-11 gap-0 p-0":s})},z=i.useCallback(e=>{var t,l,n,r,d,c;let v=e.items&&(null===(t=e.items)||void 0===t?void 0:t.length)>0&&(null==e?void 0:e.type)===k.Nest;return v&&delete e.href,(0,i.createElement)(h.R,{...e,key:e.key,classNames:{base:w({"h-auto p-0":!s&&v},{"inline-block w-11":s&&v})},endContent:s||v||o?null:null!==(n=e.endContent)&&void 0!==n?n:null,startContent:s||v?null:e.icon?(0,a.jsx)(u.JO,{className:w("text-default-500 group-data-[selected=true]:text-foreground",m),icon:e.icon,width:24}):null!==(r=e.startContent)&&void 0!==r?r:null,title:s||v?null:e.title,children:[s?(0,a.jsx)(p.e,{content:e.title,placement:"right",children:(0,a.jsx)("div",{className:"flex w-full items-center justify-center",children:e.icon?(0,a.jsx)(u.JO,{className:w("text-default-500 group-data-[selected=true]:text-foreground",m),icon:e.icon,width:24}):null!==(d=e.startContent)&&void 0!==d?d:null})}):null,!s&&v?(0,a.jsx)(x.d,{className:"p-0",children:(0,a.jsx)(f.G,{"aria-label":e.title,classNames:{heading:"pr-3",trigger:"p-0",content:"py-0 pl-4"},title:e.icon?(0,a.jsxs)("div",{className:"flex h-11 items-center gap-2 px-2 py-1.5",children:[(0,a.jsx)(u.JO,{className:w("text-default-500 group-data-[selected=true]:text-foreground",m),icon:e.icon,width:24}),(0,a.jsx)("span",{className:"text-small font-medium text-default-500 group-data-[selected=true]:text-foreground",children:e.title})]}):null!==(c=e.startContent)&&void 0!==c?c:null,children:e.items&&(null===(l=e.items)||void 0===l?void 0:l.length)>0?(0,a.jsx)(g.X,{className:"mt-0.5",classNames:{list:w("border-l border-default-200 pl-4")},items:e.items,variant:"flat",children:e.items.map(S)}):S(e)},e.key)}):null]})},[s,o,m,l]),S=i.useCallback(e=>{var t,l,n,r;return e.items&&(null===(t=e.items)||void 0===t?void 0:t.length)>0&&(null==e?void 0:e.type)===k.Nest?z(e):(0,i.createElement)(h.R,{...e,key:e.key,endContent:s||o?null:null!==(l=e.endContent)&&void 0!==l?l:null,startContent:s?null:e.icon?(0,a.jsx)(u.JO,{className:w("text-default-500 group-data-[selected=true]:text-foreground",m),icon:e.icon,width:24}):null!==(n=e.startContent)&&void 0!==n?n:null,textValue:e.title,title:s?null:e.title},s?(0,a.jsx)(p.e,{content:e.title,placement:"right",children:(0,a.jsx)("div",{className:"flex w-full items-center justify-center",children:e.icon?(0,a.jsx)(u.JO,{className:w("text-default-500 group-data-[selected=true]:text-foreground",m),icon:e.icon,width:24}):null!==(r=e.startContent)&&void 0!==r?r:null})}):null)},[s,o,m,null==J?void 0:J.base]);return(0,a.jsx)(g.X,{ref:t,hideSelectedIcon:!0,as:"nav",className:w("list-none",b),classNames:{...j,list:w("items-center",null==j?void 0:j.list)},color:"default",itemClasses:{...J,base:w("px-3 min-h-11 rounded-large h-[44px] data-[selected=true]:bg-default-100",null==J?void 0:J.base),title:w("text-small font-medium text-default-500 group-data-[selected=true]:text-foreground",null==J?void 0:J.title)},items:l,selectedKeys:[N],selectionMode:"single",variant:"flat",onSelectionChange:e=>{let t=Array.from(e)[0];C(t),null==r||r(t)},...y,children:e=>{var t,l;return e.items&&(null===(t=e.items)||void 0===t?void 0:t.length)>0&&(null==e?void 0:e.type)===k.Nest?z(e):e.items&&(null===(l=e.items)||void 0===l?void 0:l.length)>0?(0,a.jsx)(v.y,{classNames:O,showDivider:s,title:e.title,children:e.items.map(S)},e.key):S(e)}},s?"compact":"default")});C.displayName="Sidebar",i.forwardRef((e,t)=>{let{name:l,className:s,classNames:i={},...n}=e;return(0,a.jsx)(d.h,{...n,ref:t,classNames:{...i,base:w("bg-transparent border border-divider",null==i?void 0:i.base,s),name:w("text-default-500 text-[0.6rem] font-semibold",null==i?void 0:i.name)},getInitials:e=>(e[0]||"")+(e[e.lastIndexOf(" ")+1]||"").toUpperCase(),name:l,radius:"md",size:"sm"})}).displayName="TeamAvatar",u.JO,u.JO,m.z,m.z;let O=[{key:"overview",title:"Overview",items:[{key:"home",href:"#",icon:"solar:home-2-linear",title:"Home"},{key:"projects",href:"#",icon:"solar:widget-2-outline",title:"Projects",endContent:(0,a.jsx)(u.JO,{className:"text-default-400",icon:"solar:add-circle-line-duotone",width:24})},{key:"tasks",href:"#",icon:"solar:checklist-minimalistic-outline",title:"Tasks",endContent:(0,a.jsx)(u.JO,{className:"text-default-400",icon:"solar:add-circle-line-duotone",width:24})},{key:"team",href:"#",icon:"solar:users-group-two-rounded-outline",title:"Team"},{key:"tracker",href:"#",icon:"solar:sort-by-time-linear",title:"Tracker",endContent:(0,a.jsx)(m.z,{size:"sm",variant:"flat",children:"New"})},{key:"settings",href:"#",icon:"solar:settings-outline",title:"Settings"}]}],J=[...O];[...O],u.JO,u.JO,m.z,m.z,k.Nest;var z=l(79046),S=l(74798),A=l(24077),I=l(81887);let R=i.forwardRef((e,t)=>{let{children:l,className:s,onOpenChange:n,isOpen:r,sidebarWidth:o=288,classNames:d={},sidebarPlacement:c="left",motionProps:u,...m}=e,x=i.useMemo(()=>u&&"object"==typeof u?u:{variants:{enter:{x:0,transition:{x:{duration:.3,ease:z.Lj.easeOut}}},exit:{x:"left"===c?-o:o,transition:{x:{duration:.2,ease:z.Lj.easeOut}}}}},[o,c,u]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.R,{ref:t,...m,classNames:{...d,wrapper:w("!w-[var(--sidebar-width)]",null==d?void 0:d.wrapper,{"!items-start !justify-start ":"left"===c,"!items-end !justify-end":"right"===c}),base:w("w-[var(--sidebar-width)] !m-0 p-0 h-full max-h-full",null==d?void 0:d.base,s,{"inset-y-0 left-0 max-h-[none] rounded-l-none !justify-start":"left"===c,"inset-y-0 right-0 max-h-[none] rounded-r-none !justify-end":"right"===c}),body:w("p-0",null==d?void 0:d.body),closeButton:w("z-50",null==d?void 0:d.closeButton)},isOpen:r,motionProps:x,radius:"none",scrollBehavior:"inside",style:{"--sidebar-width":"".concat(o,"px")},onOpenChange:n,children:(0,a.jsx)(A.A,{children:(0,a.jsx)(I.I,{children:l})})}),(0,a.jsx)("div",{className:w("hidden h-full max-w-[var(--sidebar-width)] overflow-x-hidden overflow-y-scroll sm:flex",s),children:l})]})});function _(e){let{children:t,header:l,title:s="Yitong's Chatbot"}=e,{isOpen:i,onOpen:m,onOpenChange:x}=(0,r.q)(),f=(0,a.jsxs)("div",{className:"relative flex h-full w-72 flex-1 flex-col bg-gradient-to-b from-default-100 via-danger-100 to-secondary-100 p-6",children:[(0,a.jsx)(o.q,{y:8}),(0,a.jsx)("div",{className:"flex flex-col gap-4",children:(0,a.jsxs)("div",{className:"flex items-center gap-3 px-2",children:[(0,a.jsx)(d.h,{size:"sm",src:"https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/head.jpg"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"text-small text-foreground",children:"Yitong Liu"}),(0,a.jsx)("p",{className:"text-tiny text-default-500",children:"Full Stack Developer"})]})]})}),(0,a.jsx)(n.o,{className:"-mr-6 h-full max-h-full py-6 pr-6",children:(0,a.jsx)(C,{defaultSelectedKey:"home",iconClassName:"text-default-600 group-data-[selected=true]:text-foreground",itemClasses:{base:"data-[selected=true]:bg-default-400/20 data-[hover=true]:bg-default-400/10",title:"text-default-600 group-data-[selected=true]:text-foreground"},items:J,sectionClasses:{heading:"text-default-600 font-medium"},variant:"flat"})}),(0,a.jsx)(o.q,{y:8}),(0,a.jsxs)("div",{className:"mt-auto flex flex-col",children:[(0,a.jsx)(c.A,{fullWidth:!0,className:"justify-start text-default-600 data-[hover=true]:text-black",startContent:(0,a.jsx)(u.JO,{className:"text-default-600",icon:"solar:info-circle-line-duotone",width:24}),variant:"light",children:"Help & Information"}),(0,a.jsx)(c.A,{className:"justify-start text-default-600 data-[hover=true]:text-black",startContent:(0,a.jsx)(u.JO,{className:"rotate-180 text-default-600",icon:"solar:minus-circle-line-duotone",width:24}),variant:"light",children:"Log Out"})]})]});return(0,a.jsxs)("div",{className:"flex h-dvh w-full",children:[(0,a.jsx)(R,{className:"flex-none",isOpen:i,onOpenChange:x,children:f}),(0,a.jsxs)("div",{className:"flex w-full flex-col gap-y-4 p-4 sm:max-w-[calc(100%_-_288px)]",children:[(0,a.jsxs)("header",{className:"flex h-16 min-h-16 items-center justify-between gap-2 overflow-x-scroll rounded-medium border-small border-divider px-4 py-2",children:[(0,a.jsxs)("div",{className:"flex max-w-full items-center gap-2",children:[(0,a.jsx)(c.A,{isIconOnly:!0,className:"flex sm:hidden",size:"sm",variant:"light",onPress:m,children:(0,a.jsx)(u.JO,{className:"text-default-500",height:24,icon:"solar:hamburger-menu-outline",width:24})}),(0,a.jsx)("h2",{className:"truncate text-medium font-medium text-default-700",children:s})]}),l]}),(0,a.jsx)("main",{className:"flex h-full",children:(0,a.jsx)("div",{className:"flex h-full w-full flex-col gap-4 rounded-medium  border-divider px-6",children:t})})]})]})}R.displayName="SidebarDrawer";var P=l(6307),E=l(76839),M=l(89666);let T=i.forwardRef((e,t)=>{let{avatar:l,message:s,showFeedback:n,attempts:r=1,currentAttempt:o=1,status:m,onMessageCopy:x,onAttemptChange:f,onFeedback:h,onAttemptFeedback:p,className:g,messageClassName:v,...j}=e,[b,y]=i.useState(),N=i.useRef(null),{copied:k,copy:C}=(0,M.V)(),O=(0,a.jsxs)("p",{children:["Something went wrong, if the issue persists please contact us through our help center at\xa0",(0,a.jsx)(P.O,{href:"mailto:support@acmeai.com",size:"sm",children:"support@acmeai.com"})]}),J="failed"===m,z=i.useCallback(()=>{var e;let t="";"string"==typeof s?t=s:Array.isArray(s)&&s.forEach(e=>{var l,s;let a="string"==typeof e?e:null==e?void 0:null===(s=e.props)||void 0===s?void 0:null===(l=s.children)||void 0===l?void 0:l.toString();a&&(t+=a+"\n")});let l=t||(null===(e=N.current)||void 0===e?void 0:e.textContent)||"";C(l),null==x||x(l)},[C,s,x]),S=i.useCallback(e=>{y(e?"like":"dislike"),null==h||h(e?"like":"dislike")},[h]);return(0,a.jsxs)("div",{...j,ref:t,className:w("flex gap-3",g),children:[(0,a.jsx)("div",{className:"relative flex-none",children:(0,a.jsx)(E.O,{isOneChar:!0,color:"danger",content:(0,a.jsx)(u.JO,{className:"text-background",icon:"gravity-ui:circle-exclamation-fill"}),isInvisible:!J,placement:"bottom-right",shape:"circle",children:(0,a.jsx)(d.h,{src:l})})}),(0,a.jsx)("div",{className:"flex w-full flex-col gap-4",children:(0,a.jsxs)("div",{className:w("relative w-full rounded-medium bg-content2 px-4 py-3 text-default-600","failed"===m?"bg-danger-100/50 border border-danger-100 text-foreground":"",v),children:[(0,a.jsx)("div",{ref:N,className:"pr-20 text-small",dangerouslySetInnerHTML:J?{__html:O}:{__html:s}}),n&&!J&&(0,a.jsxs)("div",{className:"absolute right-2 top-2 flex rounded-full bg-content2 shadow-small",children:[(0,a.jsx)(c.A,{isIconOnly:!0,radius:"full",size:"sm",variant:"light",onPress:z,children:k?(0,a.jsx)(u.JO,{className:"text-lg text-default-600",icon:"gravity-ui:check"}):(0,a.jsx)(u.JO,{className:"text-lg text-default-600",icon:"gravity-ui:copy"})}),(0,a.jsx)(c.A,{isIconOnly:!0,radius:"full",size:"sm",variant:"light",onPress:()=>S(!0),children:"like"===b?(0,a.jsx)(u.JO,{className:"text-lg text-default-600",icon:"gravity-ui:thumbs-up-fill"}):(0,a.jsx)(u.JO,{className:"text-lg text-default-600",icon:"gravity-ui:thumbs-up"})}),(0,a.jsx)(c.A,{isIconOnly:!0,radius:"full",size:"sm",variant:"light",onPress:()=>S(!1),children:"dislike"===b?(0,a.jsx)(u.JO,{className:"text-lg text-default-600",icon:"gravity-ui:thumbs-down-fill"}):(0,a.jsx)(u.JO,{className:"text-lg text-default-600",icon:"gravity-ui:thumbs-down"})})]}),r>1&&!J&&(0,a.jsxs)("div",{className:"flex w-full items-center justify-end",children:[(0,a.jsx)("button",{onClick:()=>null==f?void 0:f(o>1?o-1:1),children:(0,a.jsx)(u.JO,{className:"cursor-pointer text-default-400 hover:text-default-500",icon:"gravity-ui:circle-arrow-left"})}),(0,a.jsx)("button",{onClick:()=>null==f?void 0:f(o<r?o+1:r),children:(0,a.jsx)(u.JO,{className:"cursor-pointer text-default-400 hover:text-default-500",icon:"gravity-ui:circle-arrow-right"})}),(0,a.jsxs)("p",{className:"px-1 text-tiny font-medium text-default-500",children:[o,"/",r]})]})]})})]})});function D(e){let{userMessages:t,assistantMessages:l}=e,[s,n]=(0,i.useState)([]),r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=[],s=Math.max(t.length,l.length);for(let a=0;a<s;a++)a<t.length&&e.push({role:"user",message:t[a]}),a<l.length&&e.push({role:"assistant",message:l[a]});n(e)},[t,l]),(0,i.useEffect)(()=>{r.current&&r.current.scrollIntoView({behavior:"smooth"})},[s]),(0,a.jsxs)("div",{className:"flex flex-col gap-4 px-1 overflow-y-auto",style:{maxHeight:"60vh"},children:[s.map((e,t)=>{let{role:l,message:s}=e;return(0,a.jsx)(T,{role:l,attempts:1===t?2:1,avatar:"assistant"===l?"https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/chatbot.webp":"https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/head.jpg",currentAttempt:1===t?2:1,message:s.content,messageClassName:"user"===l?"bg-content3 text-content3-foreground":"",showFeedback:"assistant"===l,className:"mb-2"},t)}),(0,a.jsx)("div",{ref:r})]})}T.displayName="MessageCard";var H=l(38472),L=l(76022);let W=i.forwardRef((e,t)=>{let{classNames:l={},...s}=e;return(0,a.jsx)(L.Y,{"aria-label":"Prompt",size:"lg",minRows:1,placeholder:"Enter a prompt here",variant:"bordered",...s})});function q(e){let{onSendMessage:t}=e,[l,s]=(0,i.useState)(""),[r,o]=(0,i.useState)(!1),d=async e=>{if(e.preventDefault(),!r&&l){o(!0);try{let e={content:l};t(e,"user"),s("");let a={content:(await H.Z.post("http://127.0.0.1:8000/api/chatbot/",e,{headers:{"Content-Type":"application/json"}})).data};t(a,"assistant")}catch(e){console.error(e)}finally{o(!1)}}};return(0,a.jsxs)("div",{className:"flex w-full flex-col gap-4",children:[(0,a.jsx)(n.o,{hideScrollBar:!0,className:" flex flex-nowrap gap-2",orientation:"horizontal",children:(0,a.jsx)("div",{className:"flex gap-2",children:[{title:"Help me make a travel plan to Australia",description:"include all necessary details"},{title:"Give me 10 ideas for my next blog post",description:"include only the best ideas"},{title:"Activities for making friends in a new city",description:"be as objective as possible"},{title:"Write a text message to my friend",description:"be polite and friendly"}].map((e,t)=>{let{title:l,description:s}=e;return(0,a.jsxs)(c.A,{className:"flex h-14 flex-col items-start gap-0",variant:"flat",children:[(0,a.jsx)("p",{children:l}),(0,a.jsx)("p",{className:"text-default-500",children:s})]},t)})})}),(0,a.jsx)("div",{className:"flex justify-center w-full items-center",children:(0,a.jsx)("form",{onSubmit:d,className:" flex w-full flex-col items-start rounded-medium bg-default-100 transition-colors hover:bg-default-200/70",children:(0,a.jsx)(W,{classNames:{inputWrapper:"!bg-transparent shadow-none",innerWrapper:"relative",input:"pt-1 pl-2 pb-6 !pr-10 text-medium"},endContent:(0,a.jsx)("div",{className:"flex items-end gap-2",children:(0,a.jsx)(p.e,{showArrow:!0,content:"Send message",children:(0,a.jsx)(c.A,{isIconOnly:!0,color:l?"primary":"default",isDisabled:!l||r,radius:"lg",size:"sm",variant:"solid",type:"submit",children:(0,a.jsx)(u.JO,{className:w("[&>path]:stroke-[2px]",l?"text-primary-foreground":"text-default-600"),icon:"solar:arrow-up-linear",width:20})})})}),radius:"lg",value:l,variant:"flat",onValueChange:s})})})]})}function B(){let[e,t]=(0,i.useState)([]),[l,s]=(0,i.useState)([]);return(0,a.jsx)("div",{className:"h-full w-full max-w-full",children:(0,a.jsx)(_,{children:(0,a.jsxs)("div",{className:"relative flex h-full flex-col",children:[(0,a.jsx)(n.o,{className:"flex max-h-[60vh] flex-col overflow-y-auto",children:(0,a.jsx)(D,{userMessages:e,assistantMessages:l})}),(0,a.jsxs)("div",{className:"mt-auto flex justify-center items-center max-w-full flex-col gap-2",children:[(0,a.jsx)(q,{onSendMessage:(e,l)=>{"user"===l?t(t=>[...t,e]):"assistant"===l&&s(t=>[...t,e])}}),(0,a.jsx)("p",{className:"px-2 text-tiny text-default-400",children:"AI can make mistakes. Consider checking important information."})]})]})})})}W.displayName="PromptInput"}},function(e){e.O(0,[82,12,971,23,744],function(){return e(e.s=29876)}),_N_E=e.O()}]);