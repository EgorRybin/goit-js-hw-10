function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequireabb0;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequireabb0=r);var o,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,m=s||p||Function("return this")(),d=Object.prototype.toString,g=Math.max,h=Math.min,y=function(){return m.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):u.test(e)?NaN:+e}o=function(e,t,n){var i,r,o,a,u,l,f=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,o=r;return i=r=void 0,f=t,a=e.apply(o,n)}function d(e){return f=e,u=setTimeout(T,t),c?m(e):a}function x(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=o}function T(){var e=y();if(x(e))return j(e);u=setTimeout(T,function(e){var n=t-(e-l);return s?h(n,o-(e-f)):n}(e))}function j(e){return u=void 0,p&&i?m(e):(i=r=void 0,a)}function w(){var e=y(),n=x(e);if(i=arguments,r=this,l=e,n){if(void 0===u)return d(l);if(s)return u=setTimeout(T,t),m(l)}return void 0===u&&(u=setTimeout(T,t)),a}return t=b(t)||0,v(n)&&(c=!!n.leading,o=(s="maxWait"in n)?g(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=l=r=u=void 0},w.flush=function(){return void 0===u?a:j(y())},w};var x=r("eWCmQ");x=r("eWCmQ");const T=document.querySelector("#search-box"),j=document.querySelector(".country-list"),w=document.querySelector(".country-info");function $(){j.innerHTML="",w.innerHTML=""}T.addEventListener("input",e(o)((t=>{var n,i;(i=t).target.value.length>0&&(n=i.target.value.trim(),fetch(`https://restcountries.com/v2/name/${n}?fields=name,capital,population,flag,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((t=>{e(x).Notify.failure("Oops, there is no country with that name"),n="",console.log(t)}))).then((t=>{const n=t.map((({flag:e,name:t})=>`<li style="font-size: 20px; display: flex; align-items: center;">\n        <img style="margin-right: 10px; margin-bottom: 10px" src="${e}" alt="sss" width="50" height="50"> Name: ${t}</li>`)).join(""),i=t.map((({capital:e,flag:t,name:n,languages:i,population:r})=>`<p style="display: flex; align-items: center;"><img style="margin-right: 10px;" src="${t}" alt="sss" width="40" height="40">Name: ${n}</p>\n<p>Capital: ${e}</p>\n<p>Population: ${r}</p>\n<p>Languages: ${i.map((({name:e})=>e)).join(", ")}</p>`)).join("");t.length>10?(e(x).Notify.info("Too many matches found. Please enter a more specific name."),$()):t.length>1&&t.length<=10?(w.innerHTML="",j.innerHTML=n):(t.length=1,j.innerHTML="",w.innerHTML=i)})).catch((e=>{$()}))}),300));
//# sourceMappingURL=index.99713a2b.js.map
