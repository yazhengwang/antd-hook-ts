(this["webpackJsonpantd-demo-ts"]=this["webpackJsonpantd-demo-ts"]||[]).push([[11],{253:function(e,t,n){},272:function(e,t,n){"use strict";function r(e,t){switch(t.type){case"login":return Object(d.a)(Object(d.a)({},e),{},{isLoggedIn:!1,isLoading:!0,error:""});case"success":return Object(d.a)(Object(d.a)({},e),{},{name:"success",pwd:"1234567",isLoggedIn:!0,isLoading:!1,error:""});case"error":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload&&t.payload.error,name:"",pwd:"",isLoggedIn:!1,isLoading:!1});default:return e}}n.r(t);var c=n(82),o=n(0),s=(n(249),n(256)),a=(n(119),n(58)),i=(n(251),n(260)),u=(n(211),n(212)),d=n(227),l=(n(253),n(7)),j={name:"",pwd:"",isLoading:!1,error:"",isLoggedIn:!1};function p(){var e=Object(o.useReducer)(r,j),t=(b=Object(c.a)(e,2))[0],n=b[1],d=t.name,p=t.pwd,b=(e=t.isLoading,t.error);t=t.isLoggedIn;return Object(l.jsxs)("div",{className:"center",children:[e&&Object(l.jsx)(i.b,{size:"middle",children:Object(l.jsx)(u.a,{size:"large"})}),!e&&Object(l.jsx)(s.a,{status:t?"success":"error",title:t?"\u606d\u559c\uff01\u767b\u5f55\u6210\u529f":b,subTitle:t?"\u5f53\u524d\u7684\u767b\u5f55\u7528\u6237\u4e3a:"+d+"\u5bc6\u7801\u4e3a\uff1a"+p:"",extra:[Object(l.jsx)(a.a,{type:"primary",onClick:function(){n({type:"login"}),setTimeout((function(){n({type:"success"})}),2e3)},children:"\u6a21\u62df\u767b\u5f55\u6210\u529f"},"success"),Object(l.jsx)(a.a,{onClick:function(){n({type:"login"}),setTimeout((function(){n({type:"error",payload:{error:"\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u8d26\u6237\u6216\u5bc6\u7801\u662f\u5426\u6b63\u786e~"}})}),2e3)},children:"\u6a21\u62df\u767b\u5f55\u5931\u8d25"},"error")]})]})}function b(e,t){switch(t.type){case"increment":return{count:e.count+t.payload};case"decrement":return{count:e.count-t.payload};case"reset":return{count:t.payload};default:throw new Error}}var O={count:0};t.default=function(){var e=Object(o.useReducer)(b,O),t=Object(c.a)(e,2),n=(e=t[0],t[1]);return Object(l.jsxs)(l.Fragment,{children:["Count: ",e.count,Object(l.jsx)("button",{onClick:function(){return n({type:"reset",payload:0})},children:"Reset"}),Object(l.jsx)("button",{onClick:function(){return n({type:"increment",payload:10})},children:"+"}),Object(l.jsx)("button",{onClick:function(){return n({type:"decrement",payload:10})},children:"-"}),Object(l.jsx)(p,{})]})}}}]);