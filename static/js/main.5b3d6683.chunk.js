(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{1:function(e,t,n){e.exports={container:"CalculatorButtonGrid_container__Kb_J_",button:"CalculatorButtonGrid_button__NxY14","button--zero":"CalculatorButtonGrid_button--zero__23oyu","button--dot":"CalculatorButtonGrid_button--dot__3SzZN","button--number":"CalculatorButtonGrid_button--number__3jQQR","button--operation":"CalculatorButtonGrid_button--operation__2PJG0","button--math-operation":"CalculatorButtonGrid_button--math-operation__1pn3S"}},10:function(e,t,n){e.exports={container:"Calculator_container__1e7NL"}},16:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2),a=n.n(r),i=n(7),c=n.n(i),l=(n(16),n(3)),s=n(8),u=n.n(s);var d=function(e){return Object(o.jsx)("div",{className:u.a.display,children:e.value})},p=Symbol.for("+"),b=Symbol.for("-"),h=Symbol.for("/"),f=Symbol.for("*"),m=n(1),v=n.n(m),j=[0,1,2,3,4,5,6,7,8,9];function N(e){var t=e.onNumberPressed,n=e.onOperationPressed,a=e.onEqualPressed,i=e.onDotPressed,c=e.onBackPressed,l=e.onForwardPressed,s=e.onDeletePressed,u=e.onResetPressed,d=Object(r.useCallback)((()=>n(p)),[n]),m=Object(r.useCallback)((()=>n(b)),[n]),N=Object(r.useCallback)((()=>n(f)),[n]),O=Object(r.useCallback)((()=>n(h)),[n]),g=j.map((function(e){return()=>t(e)}));return Object(o.jsxs)("div",{className:v.a.container,children:[Object(o.jsx)("button",{className:v.a["button--operation"],onClick:c,children:"\u27f2"}),Object(o.jsx)("button",{className:v.a["button--operation"],onClick:l,children:"\u27f3"}),Object(o.jsx)("button",{className:v.a["button--operation"],onClick:s,children:"\u232b"}),Object(o.jsx)("button",{className:v.a["button--math-operation"],onClick:O,children:"/"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[1],children:"1"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[2],children:"2"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[3],children:"3"}),Object(o.jsx)("button",{className:v.a["button--math-operation"],onClick:d,children:"+"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[4],children:"4"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[5],children:"5"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[6],children:"6"}),Object(o.jsx)("button",{className:v.a["button--math-operation"],onClick:m,children:"-"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[7],children:"7"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[8],children:"8"}),Object(o.jsx)("button",{className:v.a["button--number"],onClick:g[9],children:"9"}),Object(o.jsx)("button",{className:v.a["button--math-operation"],onClick:N,children:"x"}),Object(o.jsx)("button",{className:v.a["button--operation"],onClick:u,children:"AC"}),Object(o.jsx)("button",{className:v.a["button--zero"],onClick:g[0],children:"0"}),Object(o.jsx)("button",{className:v.a["button--dot"],onClick:i,children:"."}),Object(o.jsx)("button",{className:v.a["button--math-operation"],onClick:a,children:"="})]})}var O=a.a.memo(N),g=n(5),y=n.n(g),C=n(9),w=n.n(C),x=Symbol.for("OPERATION"),k=Symbol.for("NUMERIC");function _(e,t){y()(e)&&this.setChildren(t),this.nodeValue=e,this.parentNode=null}_.prototype.resolve=function(){return this.isNumericNode()?this.nodeValue:this.nodeValue(this.children)},_.prototype.getNodeType=function(){return y()(this.nodeValue)?x:k},_.prototype.isOperationNode=function(){return this.getNodeType()===x},_.prototype.isNumericNode=function(){return this.getNodeType()===k},_.prototype.setChildren=function(e){this.children=w()(e)?e:[e]},_.prototype.setParentNode=function(e){e instanceof _&&(this.parentNode=e)},_.prototype.replaceChild=function(e,t){if(e){var n=this.children.indexOf(t);this.children.splice(n,1,e),e.setParentNode(this),t.setParentNode(null)}};var P=_;function S(e){return e.isOperationNode()&&(e.mathOperation===f||e.mathOperation===h)}function B(e){return e.isOperationNode()&&(e.mathOperation===p||e.mathOperation===b)}function T(e,t){var n;t&&(console.log("adding ",e," to ",t),e.setParentNode(t),n=t.children?t.children.concat([e]):[e],t.setChildren(n))}function R(e){return G(e,(function(e){return null===e.parentNode}))}function G(e,t){var n=e;if(n){if(t(n))return n;for(;null!=n.parentNode;)if(t(n=n.parentNode))return n}return null}var A=function(){var e;return{addNode:function(t){var n,o;e?(t.isOperationNode()?e.isOperationNode()?function(e,t){var n;t.children.length,B(t),B(e)?(T(e,t),n=!0):n=!1}(t,e):function(e,t){var n;if(t.parentNode){var o=t.parentNode;if(console.log("handling operationNode ",e," with previous numericNode ",t),S(e)){if(console.log("operationNode is mul or div "),B(o))console.log("numericNodeParent is add or min"),console.log("replacing: ",t," of ",o," with ",e),o.replaceChild(e,t),T(t,e);else{console.log("numericNodeParent is not add or min ",o);var r=G(t,(function(t){return!!t.isOperationNode()&&(B(e)&&B(t)||S(e)&&S(t))}));r?(r.parentNode&&r.parentNode.replaceChild(e,r),T(r,e)):T(R(t),e)}n=!0}else console.log("operationNode is not mul or div "),T(R(t),e),n=!0}else T(t,e),n=!0}(t,e):e.isOperationNode()&&(n=t,(o=e).children.length,T(n,o)),e=t):e=t},getRoot:()=>R.call(this,e),getLastNodeTypeDescriptor:function(){return e?{nodeType:e.getNodeType(),mathOperationType:e.isOperationNode()?e.mathOperation:null}:null}}},D=n(10),E=n.n(D);var W=function(e){var t=[];function n(n){t.length===e&&t.shift(),t.push(n)}return{add:n,insert:function(o,r){void 0===r?n(o):r<t.length&&(t.length===e&&t.shift(),t.splice(r,0,o))},remove:function(e){e<t.length&&t.splice(e,1)},removeLast:function(){var e=t.length-1;t.splice(e,1)},getIterator:function(){var e=null;if(0===t.length)return null;var n=function(){return null===e?0!==t.length:0!==e},o=function(){return null!==e&&e!==t.length-1};return{previous:function(){return null===e?(e=t.length-1,t[e]):n()?(--e,t[e]):null},hasPrevious:n,next:function(){return o()?(++e,t[e]):null},hasNext:o,first:function(){return t[e=0]},last:function(){return e=t.length-1,t[e]}}}}};function L(e){return e.reduce(((e,t)=>e+t.resolve()),0)}function I(e){return e.reduce(((e,t)=>e*t.resolve()),1)}function z(e){var t=e[0];return 1===e.length?-1*t.resolve():e.slice(1).reduce(((e,t)=>e-t.resolve()),t.resolve())}function J(e){var t=e[0];return 1===e.length?t.resolve():e.slice(1).reduce(((e,t)=>e/t.resolve()),t.resolve())}function U(e){P.call(this,L,e)}function V(e){P.call(this,z,e)}function q(e){P.call(this,I,e)}function F(e){P.call(this,J,e)}U.prototype=Object.create(P.prototype),U.prototype.mathOperation=p,V.prototype=Object.create(P.prototype),V.prototype.mathOperation=b,q.prototype=Object.create(P.prototype),q.prototype.mathOperation=f,F.prototype=Object.create(P.prototype),F.prototype.mathOperation=h,U.prototype.parent=V.prototype.parent=q.prototype.parent=F.prototype.parent=P;var M=new Map;M.set(p,U),M.set(b,V),M.set(f,q),M.set(h,F);var Q="0";var K=function(){var e=Object(r.useState)(Q),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(new W(30)),c=Object(l.a)(i,2),s=c[0],u=c[1],p=Object(r.useState)(null),h=Object(l.a)(p,2),f=h[0],m=h[1],v=Object(r.useState)(new A),j=Object(l.a)(v,2),N=j[0],g=j[1],y=Object(r.useState)(!1),C=Object(l.a)(y,2),w=C[0],x=C[1],k=Object(r.useState)(!1),_=Object(l.a)(k,2),S=_[0],B=_[1],T=Object(r.useState)(!0),R=Object(l.a)(T,2),G=R[0],D=R[1],L=()=>{m(null)},I=()=>-1!==(""+n).indexOf("-")&&1===n.length,z=(e,t)=>{if(t){var n=new P(t);m(e),g(new A),a(n.resolve()),B(!0),x(!1),D(!1)}},J=()=>s.getIterator();return Object(o.jsxs)("div",{className:E.a.container,children:[Object(o.jsx)(d,{value:n}),Object(o.jsx)(O,{onNumberPressed:e=>{var t;t=w||G?e:n+""+e,L(),a(t),x(!1),B(!1),D(!1)},onOperationPressed:e=>{var t,o=N;if(o.getLastNodeTypeDescriptor(),!I())if(G)e===b&&(a("-"),g(o),x(!1),B(!1),D(!1));else{t=new(M.get(e))([]);var r=Number(n);o.addNode(new P(r)),o.addNode(t),a(Q),g(o),x(!1),B(!1),D(!0)}},onEqualPressed:()=>{if(!S&&!w&&!I()){var e=Number(n);N.addNode(new P(e));var t=N.getRoot().resolve();s.add(t),u(s),a(t),g(new A),x(!0),D(!1)}},onDotPressed:()=>{-1===(""+n).indexOf(".")&&(L(),a(n+"."),x(!1),B(!1))},onResetPressed:()=>{L(),a(Q),g(new A),x(!1),m(null),B(!1),D(!0)},onDeletePressed:()=>{var e=""+n;e!==Q&&(a(1!==e.length?e.substr(0,e.length-1):Q),D(1===e.length))},onBackPressed:()=>{var e=f;e||(e=J()),e&&e.hasPrevious()&&(w&&e.last(),z(e,e.previous()))},onForwardPressed:()=>{var e=f;e||(e=J()),e&&e.hasNext()&&z(e,e.next())}})]})},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{var n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}c.a.render(Object(o.jsx)(K,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://daniel-gandolfi.github.io/calculator-with-history",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{var t="".concat("https://daniel-gandolfi.github.io/calculator-with-history","/service-worker.js");Y?(!function(e,t){fetch(e).then((n=>{var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):Z(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Z(t,e)}))}}()},8:function(e,t,n){e.exports={display:"CalculatorDisplay_display__2-fwk"}}},[[24,1,2]]]);
//# sourceMappingURL=main.5b3d6683.chunk.js.map