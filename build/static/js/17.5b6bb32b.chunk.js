(this["webpackJsonpantd-demo-ts"]=this["webpackJsonpantd-demo-ts"]||[]).push([[17],{267:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(7),o=(t=function(e,n){Object(c.useImperativeHandle)(n,(function(){return{say:t}}));var t=function(){alert("hello,\u6211\u662f\u5b50\u7ec4\u4ef6")};return Object(r.jsx)("h3",{children:"\u5b50\u7ec4\u4ef6"})},Object(c.forwardRef)(t));n.default=function(){var e=Object(c.useRef)(null),n=Object(c.useRef)(null);return Object(c.useEffect)((function(){console.log("ref:deom-init",e,e.current),console.log("ref:child-init",n,n.current)}),[]),console.log("\u9875\u9762\u6e32\u67d3\u66f4\u65b0========================="),Object(r.jsxs)("div",{style:{margin:"100px",border:"2px dashed",padding:"20px"},children:[Object(r.jsx)("h2",{children:"\u8fd9\u662f\u5916\u5c42\u7ec4\u4ef6"}),Object(r.jsxs)("div",{onClick:function(){console.log("ref:deom",e,e.current),e.current&&(e.current.focus(),e.current.value="hh")},children:[Object(r.jsx)("label",{children:"\u70b9\u51fb\u7ed9 input \u8d4b\u503c"}),Object(r.jsx)("input",{ref:e})]}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{onClick:function(){console.log("ref:child",n,n.current),n.current&&n.current.say()},style:{marginTop:"20px"},children:"\u70b9\u51fb\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5"}),Object(r.jsx)("div",{style:{border:"1px solid",padding:"10px"},children:Object(r.jsx)(o,{ref:n})})]})}}}]);