(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{2015:function(e,t,n){var s={"./firebase-authentication.md":330,"./firebase-create-firestore.md":9170,"./firebase-create-project.md":5977,"./firebase-event-handler.md":8665,"./firebase-install-stripe-extension.md":3047,"./firebase-install-stripe.md":2108,"./firebase-rebuild-extension.md":9163,"./firebase-security-rule.md":7445,"./nextjs-checkout-payments.md":9712,"./nextjs-customer-portal-open.md":8931,"./nextjs-list-items.md":7186,"./nextjs-setup.md":6470,"./stripe-create-account.md":9613,"./stripe-create-api-key.md":9754,"./stripe-create-products.md":1251,"./stripe-create-tax.md":2328,"./stripe-create-webhook.md":1018,"./stripe-customer-portal-customize.md":1804};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=i,e.exports=r,r.id=2015},5733:function(e,t,n){"use strict";var s=n(5893),r=n(3801);t.Z=function(e){var t=e.href,n=e.children,i=null===t||void 0===t?void 0:t.match("^http");return(0,s.jsxs)("a",{href:t,rel:"noreferrer",className:"text-indigo-600",target:i?"_blank":"_self",children:[(0,s.jsx)("span",{children:n}),i&&(0,s.jsx)(r.h0n,{className:"inline-block w-3 h-3 text-indigo-400 align-top mr-0.5"})]})}},3046:function(e,t,n){"use strict";n.d(t,{Z:function(){return R}});var s=n(5893),r=n(3801),i=n(3153),a=n(192),o=n(1984),c=n(8412),l=n(9008),d=n(1163),u=n(7294),p={"firebase-authentication":"Firebase Authentication \u306e\u6709\u52b9\u5316","firebase-create-firestore":"Cloud Firestore \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210","firebase-create-project":"Firebase\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210","firebase-install-stripe":"Stripe Node.js Library \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30ebFirebase\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210","firebase-rebuild-extension":"Stripe webhook secret \u3092\u4f7f\u3063\u3066\u62e1\u5f35\u6a5f\u80fd\u3092\u518d\u69cb\u6210","firebase-security-rule":"Cloud Firestore \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30eb\u30fc\u30eb\u3092\u8a2d\u5b9a","firebase-install-stripe-extension":"Run Payments with Stripe \u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","nextjs-list-items":"\u5546\u54c1\u4e00\u89a7\u306e\u8868\u793a","nextjs-setup":"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210","stripe-create-account":"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210","stripe-create-api-key":"\u5236\u9650\u4ed8\u304dAPI\u30ad\u30fc\u3092\u4f5c\u6210","stripe-create-products":"\u5546\u54c1\u3068\u4fa1\u683c\u3092\u4f5c\u6210","stripe-create-tax":"\u7a0e\u7387\u3092\u4f5c\u6210","stripe-create-webhook":"Webhook\u3092\u4f5c\u6210","firebase-event-handler":"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\uff08HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u95a2\u6570\u306e\u4f5c\u6210\uff09","stripe-customer-portal-customize":"\u30ab\u30b9\u30bf\u30de\u30fc\u30dd\u30fc\u30bf\u30eb\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba","nextjs-customer-portal-open":"\u30ab\u30b9\u30bf\u30de\u30fc\u30dd\u30fc\u30bf\u30eb\u3092\u958b\u304f","nextjs-checkout-payments":"\u652f\u6255\u3044\u3092\u958b\u59cb\u3059\u308b"},m=function(e){return p[e]},f=["stripe","nextjs","firebase"],h={payments:[{title:"\u74b0\u5883\u69cb\u7bc9",tool:{stripe:["stripe-create-account","stripe-create-api-key","stripe-create-webhook"],nextjs:["nextjs-setup"],firebase:["firebase-create-project","firebase-create-firestore","firebase-authentication","firebase-install-stripe-extension","firebase-security-rule","firebase-rebuild-extension"]}},{title:"\u5546\u54c1\u306e\u4f5c\u6210\u3068\u8868\u793a",tool:{stripe:["stripe-create-products","stripe-create-tax"],nextjs:["nextjs-list-items"]}},{title:"\u5546\u54c1\u306e\u8cfc\u5165",tool:{nextjs:["nextjs-checkout-payments"],firebase:["firebase-install-stripe","firebase-event-handler"]}},{title:"\u652f\u6255\u3044\u65b9\u6cd5\u306e\u7ba1\u7406",tool:{stripe:["stripe-customer-portal-customize"],nextjs:["nextjs-customer-portal-open"]}}],billing:[],connect:[]},x=n(5307),b=function(){var e;return(null===(e=localStorage.getItem("complete"))||void 0===e?void 0:e.split(","))||[]},g=n(5131),y=n(9670),j=n(5690),v=n(4855),w=n(6121),N=n(3018),k=n(4283),S=n(1356),O=n(347),C=n(5733);function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){_(e,t,n[t])}))}return e}function P(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E=function(e){var t=e.data;return(0,s.jsx)(w.D,{remarkPlugins:[S.Z,O.Z],className:"prose prose-pre:p-0",transformImageUri:function(e){return"/stripe-doc"+e},components:{a:function(e){var t=e.href,n=e.children;return(0,s.jsx)(C.Z,{href:t,children:n})},pre:function(e){var t=e.children;return(0,s.jsx)("pre",{className:"first:mt-0 last:mb-0 overflow-hidden shadow",children:t})},img:function(e){var t=e.src;return(0,s.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,s.jsx)("img",{src:t,className:"rounded-md shadow overflow-hidden block",alt:""})})},code:function(e){e.node;var t,n=e.inline,i=e.className,a=e.children,o=P(e,["node","inline","className","children"]),c=/language-(\w+)/.exec(i||""),l=null===(t=null===i||void 0===i?void 0:i.split(":"))||void 0===t?void 0:t[1];return!n&&c?(0,s.jsxs)("div",{children:[l&&(0,s.jsxs)("div",{className:"bg-[#1f192c] border-b flex items-center justify-between border-black text-sm py-2 px-3 text-white",children:[(0,s.jsx)("span",{className:"opacity-60",children:l}),(0,s.jsx)(v.CopyToClipboard,{onCopy:function(){return j.ZP.success("\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f",{position:"bottom-center"})},text:String(a),children:(0,s.jsx)("button",{children:(0,s.jsx)(r.Kmg,{className:"w-6 h-6 text-gray-500"})})})]}),(0,s.jsx)(N.Z,T({style:k.zQ,language:c[1],PreTag:"div",customStyle:{margin:0}},o,{children:String(a).replace(/\n$/,"")}))]}):(0,s.jsx)("code",T({},o,{children:a}))}},children:t})},L=function(e){var t=e.id;try{var r,i=null===(r=n(2015)("./".concat(t,".md")))||void 0===r?void 0:r.default;return(0,s.jsx)("div",{children:(0,s.jsx)(E,{data:i})})}catch(a){return null}};function I(e){var t=e.isOpen,n=e.onClose,i=e.id,a=e.onComplete,o=(0,u.useState)(),c=o[0],l=o[1],d=(0,u.useRef)(null),p=(0,u.useState)(!1),f=p[0],h=p[1];(0,u.useEffect)((function(){i&&l(i)}),[i]);var x,v=function(e,t){return"https://github.com/flock-team/stripe-doc/".concat(t,"/main/docs/").concat(e,".md")};return(0,s.jsx)(g.u.Root,{show:t,as:u.Fragment,children:(0,s.jsx)(y.V,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:d,onClose:n,children:(0,s.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,s.jsx)(g.u.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(y.V.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,s.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),c&&(0,s.jsx)(g.u.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("video",{loop:!0,autoPlay:!0,hidden:!f,controlsList:"nodownload",controls:!0,onLoadedData:function(){return h(!0)},onError:function(){return h(!1)},className:"aspect-video overflow-hidden bg-slate-800 rounded-lg mb-6 shadow-lg",children:(0,s.jsx)("source",{src:"/stripe-doc/docs/videos/"+i+".mov"})}),(0,s.jsxs)("div",{className:"mt-3 sm:mt-5",children:[(0,s.jsx)(y.V.Title,{as:"h3",className:"text-lg text-center leading-6 font-medium text-gray-900",children:m(c)}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(L,{id:c})})]})]}),(0,s.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense",children:[(x=c,b().includes(x)?(0,s.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:col-start-2 sm:text-sm",onClick:function(){if(i){var e=function(e){var t=b().filter((function(t){return t!==e}));return localStorage.setItem("complete",t.join(",")),t}(i);a(e)}},ref:d,children:"\u672a\u5b8c\u4e86\u306b\u3059\u308b"}):(0,s.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm",onClick:function(){if(i){var e=function(e){var t=b();t.push(e);var n=Array.from(new Set(t));return localStorage.setItem("complete",n.join(",")),n}(i);j.ZP.success("\u5b8c\u4e86\u3057\u307e\u3057\u305f",{position:"bottom-center"}),a(e)}},ref:d,children:"\u5b8c\u4e86"})),(0,s.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",onClick:n,children:"\u9589\u3058\u308b"})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"items-center space-x-4 justify-end flex mt-4 text-gray-400 text-sm",children:[(0,s.jsxs)("a",{href:encodeURI("https://github.com/flock-team/stripe-doc/issues/new?body=## \u8a72\u5f53\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\n".concat(v(c,"blob"),"\n\n## \u5831\u544a\u5185\u5bb9\n&title=\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5831\u544a: ").concat(i)).replace(/#/g,"%23"),target:"_blank",className:"flex items-center space-x-2 hover:text-gray-700",rel:"noreferrer",children:[(0,s.jsx)(r.U65,{className:"w-4 h-4 inline"}),(0,s.jsx)("span",{children:"\u5831\u544a"})]}),(0,s.jsxs)("a",{href:v(c,"edit"),target:"_blank",className:"flex items-center space-x-2 hover:text-gray-700",rel:"noreferrer",children:[(0,s.jsx)(r.vdY,{className:"w-4 h-4 inline"}),(0,s.jsx)("span",{children:"\u7de8\u96c6"})]})]})})]})})]})})})}var F=function(e){var t=e.title,n=e.TabIcon;return(0,s.jsxs)("div",{className:"col-span-2 px-4 justify-center flex items-center space-x-2 text-center",children:[(0,s.jsx)(n,{size:24,className:"text-gray-500"}),(0,s.jsx)("span",{className:"block text-gray-600",children:t})]})},R=function(e){var t=e.title,n=e.description,p=e.scenes,g=(e.type,e.videoURL),y=(0,u.useState)(),j=y[0],v=y[1],w=(0,d.useRouter)(),N=w.query.id,k=function(e){w.push({query:e?{id:e}:null},void 0,{shallow:!0})};return(0,u.useEffect)((function(){v(b())}),[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(l.default,{children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"bg-gray-50 shadow-sm",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"py-10 lg:flex items-center",children:[(0,s.jsx)("a",{href:g,target:"_blank",className:"aspect-video bg-slate-800 flex items-center justify-center rounded-lg lg:w-96 lg:mr-10 mb-6 lg:mb-0 shadow-lg hover:shadow-xl transition-shadow",rel:"noreferrer",children:(0,s.jsx)(i.o1U,{className:"w-20 h-20 text-gray-300 opacity-40"})}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h1",{className:"text-2xl mb-4 leading-6 font-semibold text-gray-800",children:t}),(0,s.jsx)("div",{className:"text-gray-500 mb-6",children:n}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-gray-700 font-bold mb-2",children:"\u5229\u7528\u30b7\u30fc\u30f3"}),(0,s.jsx)("p",{className:"text-gray-500",children:p.join(" / ")})]})]})]})})}),(0,s.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"mb-20",children:[(0,s.jsxs)("div",{className:"grid grid-cols-7 gap-2 sticky top-0 py-4 border-b bg-white",children:[(0,s.jsx)("div",{}),(0,s.jsx)(F,{TabIcon:a.Z,title:"Stripe"}),(0,s.jsx)(F,{TabIcon:o.Z,title:"Next.js"}),(0,s.jsx)(F,{TabIcon:c.Z,title:"Firebase"})]}),(0,s.jsx)("div",{className:"divide-dashed divide-y",children:h.payments.map((function(e,t){return(0,s.jsxs)("div",{className:"grid grid-cols-7 gap-2 py-6",children:[(0,s.jsxs)("h2",{children:[(0,s.jsxs)("span",{className:"text-gray-500 font-bold",children:["STEP ",t+1]}),(0,s.jsx)("p",{className:"font-bold text-gray-700 text-lg",children:e.title})]}),f.map((function(t){var n;return(0,s.jsx)("div",{className:"col-span-2 space-y-2",children:null===(n=e.tool[t])||void 0===n?void 0:n.map((function(e){return(0,s.jsxs)("button",{onClick:function(){return k(e)},className:"flex items-center text-gray-600 hover:text-gray-800 text-left space-x-2 w-full",children:[(0,s.jsx)(r.rE2,{className:(0,x.A)("w-6 h-6",(null===j||void 0===j?void 0:j.includes(e))?"text-lime-500":"opacity-10")}),(0,s.jsx)("span",{className:"text-sm",children:m(e)})]},e)}))},t)}))]},t)}))})]})})]}),(0,s.jsx)(I,{isOpen:Boolean(N),onClose:function(){return k()},onComplete:function(e){k(),v(e)},id:N})]})}},330:function(e,t,n){"use strict";n.r(t),t.default="[Google \u30ed\u30b0\u30a4\u30f3\u3092\u6709\u52b9](https://firebase.google.com/docs/auth/web/google-signin?hl=ja)\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4ed6\u306e\u30ed\u30b0\u30a4\u30f3\u65b9\u6cd5\u3092\u9078\u3076\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"},9170:function(e,t,n){"use strict";n.r(t),t.default="[Cloud Firestore \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f5c\u6210](https://firebase.google.com/docs/firestore/quickstart#create)\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n| \u8a2d\u5b9a\u9805\u76ee                   | \u63a8\u5968\u8a2d\u5b9a                                             |\n| -------------------------- | ---------------------------------------------------- |\n| \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 \u30eb\u30fc\u30eb        | \u30ed\u30c3\u30af\u30e2\u30fc\u30c9(\u672c\u756a)                                   |\n| \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3 | asia-northeast1(\u6771\u4eac) \u3082\u3057\u304f\u306f asia-northeast2(\u5927\u962a) |"},5977:function(e,t,n){"use strict";n.r(t),t.default="[Firebase \u30b3\u30f3\u30bd\u30fc\u30eb](https://console.firebase.google.com/)\u3067 [\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0] \u3092\u30af\u30ea\u30c3\u30af\u3057\u3001\u753b\u9762\u306e\u6307\u793a\u306b\u6cbf\u3063\u3066\u3001Firebase \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},8665:function(e,t,n){"use strict";n.r(t),t.default="[Stripe Node.js Library\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb](https://github.com/stripe/stripe-node)\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n```bash:\u30bf\u30fc\u30df\u30ca\u30eb\nnpm install stripe --save\n```"},3047:function(e,t,n){"use strict";n.r(t),t.default="[Run Payments with Stripe \u62e1\u5f35\u6a5f\u80fd](https://firebase.google.com/products/extensions/stripe-firestore-stripe-payments?hl=ja)\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u305d\u306e\u904e\u7a0b\u3067 Blaze \u30d7\u30e9\u30f3\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059\u304c[\u7121\u6599\u67a0](https://firebase.google.com/pricing?hl=ja)\u304c\u3042\u308b\u305f\u3081\u4e00\u5b9a\u306e\u30a2\u30af\u30bb\u30b9\u304c\u306a\u3044\u304b\u304e\u308a\u8ab2\u91d1\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\n| \u8a2d\u5b9a\u9805\u76ee                             | \u5024                      |\n| ------------------------------------ | ----------------------- |\n| \u30a2\u30af\u30bb\u30b9\u304c\u5236\u9650\u3055\u308c\u305f Stripe API \u30ad\u30fc | \u4f5c\u6210\u3057\u305f\u5236\u9650\u4ed8\u304dAPI\u30ad\u30fc |\n| Stripe Webhook \u30b7\u30fc\u30af\u30ec\u30c3\u30c8          | \u3053\u306e\u6642\u70b9\u3067\u306f\u7a7a          |\n\n"},2108:function(e,t,n){"use strict";n.r(t),t.default="[Stripe Node.js Library\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb](https://github.com/stripe/stripe-node)\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n```bash:\u30bf\u30fc\u30df\u30ca\u30eb\nnpm install stripe --save\n```"},9163:function(e,t,n){"use strict";n.r(t),t.default="Stripe \u3067 Webhook \u306e\u4f5c\u6210\u3092\u3057\u305f\u969b\u306b**\u7f72\u540d\u30b7\u30fc\u30af\u30ec\u30c3\u30c8**\u304c\u751f\u6210\u3055\u308c\u308b\u305f\u3081\u305d\u306e\u5185\u5bb9\u3092[\u62e1\u5f35\u6a5f\u80fd\u306e\u8a2d\u5b9a](https://console.firebase.google.com/u/0/project/_/extensions/instances/firestore-stripe-payments?hl=ja&tab=details)\u306e[Stripe webhook secret (Optional)]\u306b\u5165\u529b\u3057\u3001\u62e1\u5f35\u6a5f\u80fd\u3092\u518d\u69cb\u7bc9\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n![](/docs/images/2022-01-22-15-29-46.png)"},7445:function(e,t,n){"use strict";n.r(t),t.default="[[\u30eb\u30fc\u30eb]\u30bf\u30d6](https://console.firebase.google.com/u/0/project/_/firestore/rules?hl=ja)\u3067\u4ee5\u4e0b\u306e\u30eb\u30fc\u30eb\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n```plane:\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30eb\u30fc\u30eb\nrules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /${param:CUSTOMERS_COLLECTION}/{uid} {\n      allow read: if request.auth.uid == uid;\n\n      match /checkout_sessions/{id} {\n        allow read, write: if request.auth.uid == uid;\n      }\n      match /subscriptions/{id} {\n        allow read: if request.auth.uid == uid;\n      }\n      match /payments/{id} {\n        allow read: if request.auth.uid == uid;\n      }\n    }\n\n    match /${param:PRODUCTS_COLLECTION}/{id} {\n      allow read: if true;\n\n      match /prices/{id} {\n        allow read: if true;\n      }\n\n      match /tax_rates/{id} {\n        allow read: if true;\n      }\n    }\n  }\n}\n```\n\n[\u53c2\u8003](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md#set-your-cloud-firestore-security-rules)"},9712:function(e,t,n){"use strict";n.r(t),t.default='\u4fa1\u683cID\u3092\u4f7f\u3063\u3066\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u306b\u79fb\u884c\u3067\u304d\u307e\u3059\u3002\n\n```tsx:\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\nconst startCheckout = (price: string) => {\n  const docRef = await db\n    .collection(\'${param:CUSTOMERS_COLLECTION}\')\n    .doc(currentUser.uid)\n    .collection("checkout_sessions")\n    .add({\n      mode: "payment",\n      price,\n      success_url: window.location.origin,\n      cancel_url: window.location.origin,\n    });\n\n  docRef.onSnapshot((snap) => {\n    const { error, url } = snap.data();\n    if (error) {\n      alert(`An error occured: ${error.message}`);\n    }\n    if (url) {\n      // \u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u753b\u9762\u3078\u79fb\u52d5\n      window.location.assign(url);\n    }\n  });\n}\n```'},8931:function(e,t,n){"use strict";n.r(t),t.default="\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3067\u30ab\u30b9\u30bf\u30de\u30fc\u30dd\u30fc\u30bf\u30eb\u306b\u9077\u79fb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\n```tsx:\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\nconst functionRef = firebase\n  .app()\n  .functions('${param:LOCATION}')\n  .httpsCallable('${function:createPortalLink.name}');\n\nconst { data } = await functionRef({\n  returnUrl: window.location.origin,\n});\n\n// \u30ab\u30b9\u30bf\u30de\u30fc\u30dd\u30fc\u30bf\u30eb\u306b\u9077\u79fb\nwindow.location.assign(data.url);\n```"},7186:function(e,t,n){"use strict";n.r(t),t.default="\u5546\u54c1\u4e00\u89a7\u3092\u8868\u793a\u3055\u305b\u307e\u3059\u3002\n\n```tsx:\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\nconst PriceList = () => {\n  const [prices, setPrices] = useState();\n\n  useEffect(() => {\n    db.collection('${param:PRODUCTS_COLLECTION}')\n      .where('active', '==', true)\n      .get()\n      .then(function (querySnapshot) {\n        querySnapshot.forEach(async function (doc) {\n          const priceSnap = await doc.ref.collection('prices').get();\n          const datas = priceSnap.docs.map((doc) => doc.data());\n          setPrices(datas);\n        });\n      });\n  }, [])\n\n  if (!prices) {\n    return null;\n  }\n\n  return (\n    <div>\n      {prices.map(price => <div>{price.name} {price.amount}\u5186</div>)}\n    </div>\n  )\n}\n```\n\n[\u53c2\u8003](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md#list-available-products-and-prices)"},6470:function(e,t,n){"use strict";n.r(t),t.default="[\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8](https://nextjs.org/docs/getting-started#setup)\u306b\u6cbf\u3063\u3066\u74b0\u5883\u69cb\u7bc9\u3092\u884c\u3044\u307e\u3059\u3002\n\n```bash:\u30bf\u30fc\u30df\u30ca\u30eb\nnpx create-next-app@latest --typescript\n```"},9613:function(e,t,n){"use strict";n.r(t),t.default="[Stripe](https://stripe.com/jp)\u3067\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"},9754:function(e,t,n){"use strict";n.r(t),t.default="[\u5236\u9650\u4ed8\u304dAPI\u30ad\u30fc](https://stripe.com/docs/keys#limit-access)\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u8a2d\u5b9a\u9805\u76ee\u306f[Firebase Stripe\u62e1\u5f35\u6a5f\u80fd\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/PREINSTALL.md#additional-setup)\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002\n\n| \u6a29\u9650     | \u5bfe\u8c61                                          |\n| -------- | --------------------------------------------- |\n| \u66f8\u304d\u8fbc\u307f | Customers, Checkout Sessions, Customer portal |\n| \u8aad\u307f\u8fbc\u307f | Subscriptions, Plans                          |"},1251:function(e,t,n){"use strict";n.r(t),t.default="[\u5546\u54c1\u3068\u4fa1\u683c\u3092\u4f5c\u6210](https://stripe.com/docs/billing/manage-prices)\u3057\u3066\u304f\u3060\u3055\u3044\u3002"},2328:function(e,t,n){"use strict";n.r(t),t.default="[\u7a0e\u7387\u3092\u4f5c\u6210](https://stripe.com/docs/billing/taxes/tax-rates#%E7%A8%8E%E7%8E%87%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B)\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u81ea\u52d5\u7684\u306b\u7a0e\u7387\u3092\u8a2d\u5b9a\u3057\u305f\u3044\u5834\u5408[Stripe Tax(\u6709\u6599)](https://stripe.com/docs/tax/set-up)\u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"},1018:function(e,t,n){"use strict";n.r(t),t.default="[\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8](https://github.com/stripe/stripe-firebase-extensions/blob/master/firestore-stripe-payments/POSTINSTALL.md#configure-stripe-webhooks)\u306b\u5f93\u3063\u3066Webhook\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\n\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u306eURL\u306fFirebase Stripe\u62e1\u5f35\u6a5f\u80fd\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u5f8c\u306b\u4f5c\u6210\u3055\u308c\u308bCloud Functions\u306eHTTP\u95a2\u6570\u306eURL\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n\u53d7\u3051\u53d6\u308b\u30a4\u30d9\u30f3\u30c8\u306f\u4ee5\u4e0b\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n- product.created\n- product.updated\n- product.deleted\n- price.created\n- price.updated\n- price.deleted\n- checkout.session.completed\n- customer.subscription.created\n- customer.subscription.updated\n- customer.subscription.deleted\n- payment_intent.processing\n- payment_intent.succeeded\n- payment_intent.canceled\n- payment_intent.payment_failed\n- tax_rate.created (optional)\n- tax_rate.updated (optional)\n\n\u8acb\u6c42\u66f8\u60c5\u5831\u3092Firestore\u306b\u540c\u671f\u3057\u305f\u3044\u5834\u5408\u4ee5\u4e0b\u3082\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\n- invoice.paid\n- invoice.payment_succeeded\n- invoice.payment_failed\n- invoice.upcoming\n- invoice.marked_uncollectible\n- invoice.payment_action_required\n\nWebhook\u4f5c\u6210\u5f8c\u306b\u751f\u6210\u3055\u308c\u308b\u7f72\u540d\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u306f\u62e1\u5f35\u6a5f\u80fd\u3067\u4f7f\u7528\u3057\u307e\u3059\u3002\n\n![](/docs/images/2022-01-22-14-42-02.png)"},1804:function(e,t,n){"use strict";n.r(t),t.default="[\u30ab\u30b9\u30bf\u30de\u30fc\u30dd\u30fc\u30bf\u30eb\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal)\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}}]);