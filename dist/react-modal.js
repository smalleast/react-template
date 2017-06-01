!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","classnames","react-dom"],t):"object"==typeof exports?exports.ReactTemplate=t(require("react"),require("classnames"),require("react-dom")):e.ReactTemplate=t(e.react,e.classnames,e["react-dom"])}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(2),a=o(r),i=n(5),s=o(i);e.exports={ReactTemplate:a.default,ReactTemplateCtrl:s.default}},function(t,n){t.exports=e},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(12);var c=n(3),u=o(c),f=n(9),d=n(10),p=o(d),h=n(6),m=o(h),b=function(t){function n(e){r(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={header:e.header,body:e.body,theme:e.theme,dimensions:{},visible:e.visible,buttons:e.buttons,animating:!1},t._timer=null,t}return i(n,t),l(n,null,[{key:"newInstance",value:function(e){return(0,p.default)(n,e,{className:"react-template-wrapper"})}}]),l(n,[{key:"componentWillMount",value:function(){f.ReactBackdropCtrl.createInstance(this.props.backdropStyle)}},{key:"show",value:function(e){this._setVisible(e,!0)}},{key:"hide",value:function(){this._setVisible({},!1)}},{key:"_setVisible",value:function(e,t){this.setState({animating:!0}),this._timer=setTimeout(this._measureOnShow.bind(this,e,t))}},{key:"_measureOnShow",value:function(e,t){console.log(f.ReactBackdropCtrl);var n=this;n.setState(Object.assign({},n.props,{visible:t},e),function(){(0,m.default)(n.refs.root,function(e){n.setState({dimensions:e}),t?f.ReactBackdropCtrl.show():f.ReactBackdropCtrl.hide(),n._clearTimeout()})})}},{key:"_clearTimeout",value:function(){clearTimeout(this._timer),this._timer=null}},{key:"_onTransitionEnd",value:function(){this.setState({animating:!1})}},{key:"render",value:function(){var t=this;return e.createElement("div",{ref:"root","data-theme":this.state.theme,"data-visible":this.state.visible,"data-animating":this.state.animating,hidden:!this.state.visible&&!this.state.animating,onTransitionEnd:this._onTransitionEnd.bind(this),style:{marginTop:"-"+this.state.dimensions.height/2+"px",marginLeft:"-"+this.state.dimensions.width/2+"px"},className:(0,u.default)("react-template",this.props.className)},e.createElement("div",{className:"react-template-content"},this.state.header&&"string"==typeof this.state.header&&e.createElement("div",{className:"react-template-hd",dangerouslySetInnerHTML:{__html:this.state.header}}),this.state.header&&"object"==s(this.state.header)&&e.createElement("div",{className:"react-template-hd"},this.state.header),this.state.body&&"string"==typeof this.state.body&&e.createElement("div",{className:"react-template-bd",dangerouslySetInnerHTML:{__html:this.state.body}}),this.state.body&&"object"==s(this.state.body)&&e.createElement("div",{className:"react-template-bd"},this.state.body),this.state.buttons.length>0&&e.createElement("div",{className:"react-template-ft"},this.state.buttons.map(function(n,o){return e.createElement("div",{key:o,className:"react-template-button",onClick:n.onClick.bind(t)},n.text)}))))}}]),n}(e.Component);b.propTypes={className:e.PropTypes.string,buttons:e.PropTypes.array,backdropStyle:e.PropTypes.object,theme:e.PropTypes.oneOf(["ios","tranparent"]),body:e.PropTypes.oneOfType([e.PropTypes.string,e.PropTypes.element])},b.defaultProps={header:null,body:null,busy:!1,visible:!1,theme:"ios",buttons:[],backdropStyle:{style:{opacity:.7}}},t.default=b}).call(t,n(1))},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),s=o(i),l=void 0,c=function(){function e(){r(this,e)}return a(e,null,[{key:"createInstance",value:function(e){return l=l||s.default.newInstance(e)}},{key:"show",value:function(e){l.component.show(e)}},{key:"hide",value:function(){l.component.hide()}},{key:"destory",value:function(){l.destory(),l=null}}]),e}();t.default=c},function(e,t){function n(e){var t=getComputedStyle(e);return t.transform||t.webkitTransform||t.mozTransform}function o(e,t){function n(){a++,a==r.length&&t.call()}function o(e){e.addEventListener("load",n,!1)}var r=e.querySelectorAll("img"),a=0;r.length>0?s.call(r,o):t.call()}function r(e){var t=new WebKitCSSMatrix(e);return{scaleX:t.m11,scaleY:t.m22,scaleZ:t.m33}}function a(e,t){var o=r(n(e)),a=e.getBoundingClientRect();t.call(null,{width:a.width/o.scaleX,height:a.height/o.scaleY,left:a.left,top:a.top,right:a.right,bottom:a.bottom})}var i=!1,s=Array.prototype.forEach;e.exports=function(e,t){i?a(e,t):o(e,function(){i=!0,a(e,t)})}},function(e,t,n){t=e.exports=n(8)(),t.push([e.id,'.hairline,.hairline-x,.hairline-y,.react-template[data-theme=ios] .react-template-button+.react-template-button,.react-template[data-theme=ios] .react-template-ft{position:relative}.hairline-x:after,.hairline-y:after,.hairline:after,.react-template[data-theme=ios] .react-template-button+.react-template-button:after,.react-template[data-theme=ios] .react-template-ft:after{content:"";position:absolute;left:0;top:0;bottom:auto;right:auto;background-color:#c8c7cc;display:block;z-index:15}.hairline-x:after,.react-template[data-theme=ios] .react-template-ft:after{height:1px;width:100%;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.hairline-y:after,.react-template[data-theme=ios] .react-template-button+.react-template-button:after{width:1px;height:100%;-webkit-transform-origin:0 50%;transform-origin:0 50%;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.react-template{font-family:-apple-system,SF UI Text,Helvetica Neue,Helvetica,Arial,sans-serif;width:80%;top:38.2%;left:50%;position:absolute;z-index:2;-webkit-transform:scale(1.185);transform:scale(1.185);-webkit-transition:opacity .22s linear,-webkit-transform .2s ease-in-out;transition:opacity .22s linear,-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out,opacity .22s linear;transition:transform .2s ease-in-out,opacity .22s linear,-webkit-transform .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-template-content{border-radius:13px;overflow:hidden}.react-template[hidden]{display:none}.react-template[data-visible=false]{opacity:0;-webkit-transform:scale(1.085);transform:scale(1.085)}.react-template[data-visible=true][data-animating=true]{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.react-template[data-visible=true][data-animating=false]{-webkit-transform:scale(1);transform:scale(1)}.react-template[data-theme=ios]>*{background:hsla(0,0%,100%,.95)}.react-template[data-theme=ios] .react-template-ft{height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-template[data-theme=ios] .react-template-ft:after{top:0}.react-template[data-theme=ios] .react-template-button:active{background:#dedede}.react-template[data-theme=ios] .react-template-button+.react-template-button{position:relative}.react-template[data-theme=ios] .react-template-button+.react-template-button:after{left:0}.react-template-hd{padding:15px 15px 0;font-size:18px;text-align:center;font-weight:700}.react-template-bd{text-align:center;padding:15px}.react-template-ft{height:44px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.react-template-button{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;width:100%;padding:0 5px;height:44px;font-size:17px;line-height:44px;text-align:center;color:#007aff;display:block;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){!function(t,o){e.exports=o(n(1),n(3),n(4))}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),a=o(r),i=n(3),s=o(i);e.exports={ReactBackdrop:a.default,ReactBackdropCtrl:s.default}},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(9);var l=n(7),c=o(l),u=n(10),f=o(u),d=n(6),p=o(d),h=function(t){function n(e){r(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={visible:e.visible,animating:!1},t}return i(n,t),s(n,null,[{key:"newInstance",value:function(e){return(0,c.default)(n,e,{className:"backdrop-wrapper"})}}]),s(n,[{key:"componentWillReceiveProps",value:function(e,t){this.setState(e)}},{key:"show",value:function(){this.state.visible||this._setVisible(!0,this.props.onShown)}},{key:"hide",value:function(){this.state.visible&&this._setVisible(!1,this.props.onHidden)}},{key:"_setVisible",value:function(e,t){var n=this,o=this;this.setState({animating:!0},function(){n.setState({visible:e},function(){t(o.state)})})}},{key:"_onTransitionEnd",value:function(){this.setState({animating:!1})}},{key:"render",value:function(){return e.createElement("div",{style:this.props.style,hidden:!this.state.visible&&!this.state.animating,"data-visible":this.state.visible,onClick:this.props.onClick,onTransitionEnd:this._onTransitionEnd.bind(this),className:(0,f.default)("react-backdrop",this.props.className)})}}]),n}(e.Component);h.propTypes={visible:e.PropTypes.bool,style:e.PropTypes.object,className:e.PropTypes.string,onHidden:e.PropTypes.func,onShown:e.PropTypes.func,onClick:e.PropTypes.func},h.defaultProps={visible:!1,className:"",style:{},onHidden:p.default,onShown:p.default,onClick:p.default},t.default=h}).call(t,n(2))},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),s=o(i),l=void 0,c=function(){function e(){r(this,e)}return a(e,null,[{key:"createInstance",value:function(e){return l=l||s.default.newInstance(e)}},{key:"show",value:function(){l.component.show()}},{key:"hide",value:function(){l.component.hide()}},{key:"destroy",value:function(){l.destroy(),l=null}}]),e}();t.default=c},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".react-backdrop{left:0;top:0;bottom:0;right:0;background:#000;opacity:.3;position:absolute;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.react-backdrop[hidden]{display:none}.react-backdrop[data-visible=false]{position:absolute;opacity:0!important}.react-backdrop[data-visible=true]{position:fixed;opacity:.3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t){e.exports=function(){}},function(e,t,n){(function(t,n){e.exports=function(e,o,r){var a=document.createElement("div"),i=document.body;for(var s in r)r.hasOwnProperty(s)&&(a[s]=r[s]);i.appendChild(a);const l=t.render(n.createElement(e,o),a);return{component:l,destroy:function(){t.unmountComponentAtNode(a),i.removeChild(a)}}}}).call(t,n(11),n(2))},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=p[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(c(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(c(o.parts[a],t));p[o.id]={id:o.id,refs:1,parts:i}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],a=r[0],i=r[1],s=r[2],l=r[3],c={css:i,media:s,sourceMap:l};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=b(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,o,r;if(t.singleton){var a=v++;n=y||(y=s(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=d.bind(null,n),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=f.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],l=p[s.id];l.refs--,a.push(l)}if(e){var c=r(e);o(c,t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(4);"string"==typeof o&&(o=[[e.id,o,""]]),n(8)(o,{}),o.locals&&(e.exports=o.locals)},function(e,n){e.exports=t},function(e,t){e.exports=n}])})},function(e,t,n){(function(t,n){e.exports=function(e,o,r){var a=document.createElement("div"),i=document.body;for(var s in r)r.hasOwnProperty(s)&&(a[s]=r[s]);i.appendChild(a);const l=t.render(n.createElement(e,o),a);return{component:l,destroy:function(){t.unmountComponentAtNode(a),i.removeChild(a)}}}}).call(t,n(4),n(1))},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=p[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(c(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(c(o.parts[a],t));p[o.id]={id:o.id,refs:1,parts:i}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],a=r[0],i=r[1],s=r[2],l=r[3],c={css:i,media:s,sourceMap:l};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=b(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,o,r;if(t.singleton){var a=v++;n=y||(y=s(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=d.bind(null,n),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=f.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function u(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],l=p[s.id];l.refs--,a.push(l)}if(e){var c=r(e);o(c,t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete p[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(7);"string"==typeof o&&(o=[[e.id,o,""]]);n(11)(o,{});o.locals&&(e.exports=o.locals)}])});
//# sourceMappingURL=react-template.js.map