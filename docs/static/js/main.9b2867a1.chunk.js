(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(1),c=n(7),i=n.n(c),s=n(2),u=n(9),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),i=c[0],o=c[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){!function(t){o(t.target.value)}(t)}})})},j=n(10),d=n(6),b=n.n(d),p=n(8),f=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,r,a,c,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=JovF2DHbAZ8TVmnGgZuwEYArgFHq5At9"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,c=a.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(t){var e=t.title,n=t.url;return Object(r.jsxs)("div",{className:"card animate__animated animate__rubberBand",children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),2500)}))}),[t]),r}(e),c=n.data,i=n.loading,u=[];return u=0===c.length&&!1===i?Object(r.jsx)("p",{children:"Category not found"}):c.map((function(t){return Object(r.jsx)(l,Object(j.a)({},t),t.id)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{className:"animate__animated animate__flipInX",children:e}),Object(r.jsx)("hr",{}),i&&Object(r.jsx)("p",{children:"Loading..."}),Object(r.jsx)("div",{className:"card-grid",children:u}),Object(r.jsx)("hr",{})]})},h=function(){var t=Object(a.useState)(["Konosuba"]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GiftExpertApp"}),Object(r.jsx)("hr",{}),Object(r.jsx)(o,{setCategories:c}),Object(r.jsx)("div",{children:n.map((function(t){return Object(r.jsx)(O,{category:t},t)}))})]})};n(17),n(18);i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9b2867a1.chunk.js.map