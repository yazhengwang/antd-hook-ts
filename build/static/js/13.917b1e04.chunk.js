(this["webpackJsonpantd-demo-ts"]=this["webpackJsonpantd-demo-ts"]||[]).push([[13],{227:function(t,e,n){"use strict";function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)),r}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){var r,o;r=t,e=n[o=e],o in r?Object.defineProperty(r,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[o]=e})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return o}))},268:function(t,e,n){"use strict";n.r(e);var r=n(227);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var t,r=u(e);return a(this,n?(t=u(this).constructor,Reflect.construct(r,arguments,t)):r.apply(this,arguments))}}var l,p=n(0),s=n.n(p),b=n(7),y=(l=function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["HocBind\u5b9e\u73b0 value:",t.value]}),Object(b.jsx)("input",Object(r.a)({placeholder:"input"},t))]})},function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(u,s.a.Component);var t,e,n=f(u);function u(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).state={value:t.props.initialValue},t.onChange=function(e){t.setState({value:e.target.value}),t.props.onChange&&t.props.onChange(e.target.value)},t}return t=u,(e=[{key:"render",value:function(){var t={value:this.state.value,onChange:this.onChange};return Object(b.jsx)(l,Object(r.a)({},t))}}])&&o(t.prototype,e),u}());e.default=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(y,{initialValue:"init",onChange:function(t){console.log("HocInput",t)}})})}}}]);