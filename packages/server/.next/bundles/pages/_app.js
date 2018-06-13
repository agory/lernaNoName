module.exports=__NEXT_REGISTER_PAGE("/_app",function(){var e=webpackJsonp([1],{3484:function(e,t,r){e.exports=r(3485)},3485:function(e,t,r){e.exports=r(3486)},3486:function(e,t,r){e.exports=r(3487)},3487:function(e,t,r){"use strict";var n=r(70);var a=r(34);Object.defineProperty(t,"__esModule",{value:true});t.createUrl=k;t.Container=t.default=void 0;var u=a(r(100));var o=a(r(102));var l=a(r(3488));var i=a(r(96));var c=a(r(80));var p=a(r(42));var f=a(r(43));var s=a(r(81));var d=a(r(82));var v=n(r(0));var h=a(r(6));var y=a(r(222));var m=r(60);var b=r(146);var _=function(e){(0,d.default)(t,e);function t(){(0,p.default)(this,t);return(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"getChildContext",value:function e(){var t=this.props.headManager;return{headManager:t,router:(0,b.makePublicRouterInstance)(this.props.router),_containerProps:(0,i.default)({},this.props)}}},{key:"componentDidCatch",value:function e(t,r){t.info=r;true;window.next.renderError({err:t})}},{key:"render",value:function e(){var t=this.props,r=t.router,n=t.Component,a=t.pageProps;var u=k(r);return v.default.createElement(g,null,v.default.createElement(n,(0,l.default)({},a,{url:u})))}}],[{key:"getInitialProps",value:function(){var e=(0,o.default)(u.default.mark(function e(t){var r,n,a,o;return u.default.wrap(function e(u){while(1)switch(u.prev=u.next){case 0:r=t.Component,n=t.router,a=t.ctx;u.next=3;return(0,m.loadGetInitialProps)(r,a);case 3:o=u.sent;return u.abrupt("return",{pageProps:o});case 5:case"end":return u.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(v.Component);t.default=_;Object.defineProperty(_,"displayName",{configurable:true,enumerable:true,writable:true,value:"App"});Object.defineProperty(_,"childContextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:h.default.any,headManager:h.default.object,router:h.default.object}});var g=function(e){(0,d.default)(t,e);function t(){(0,p.default)(this,t);return(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"componentDidMount",value:function e(){this.scrollToHash()}},{key:"componentDidUpdate",value:function e(){this.scrollToHash()}},{key:"scrollToHash",value:function e(){var t=this.props.hash;if(!t)return;var r=document.getElementById(t);if(!r)return;setTimeout(function(){return r.scrollIntoView()},0)}},{key:"shouldComponentUpdate",value:function e(t){return!(0,y.default)(this.props,t)}},{key:"render",value:function e(){var t=this.props.children;return v.default.createElement(v.default.Fragment,null,t)}}]);return t}(v.Component);t.Container=g;Object.defineProperty(g,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:h.default.any}});var P=(0,m.execOnce)(function(){false});function k(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){P();return n},get pathname(){P();return t},get asPath(){P();return r},back:function t(){P();e.back()},push:function t(r,n){P();return e.push(r,n)},pushTo:function t(r,n){P();var a=n?r:null;var u=n||r;return e.push(a,u)},replace:function t(r,n){P();return e.replace(r,n)},replaceTo:function t(r,n){P();var a=n?r:null;var u=n||r;return e.replace(a,u)}}}},3488:function(e,t,r){var n=r(149);function a(){e.exports=a=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return a.apply(this,arguments)}e.exports=a}},[3484]);return{page:e.default}});