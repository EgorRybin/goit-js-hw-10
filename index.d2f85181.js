!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},o=n.parcelRequireabb0;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in i){var n=i[t];delete i[t];var o={id:t,exports:{}};return e[t]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,n){i[t]=n},n.parcelRequireabb0=o);var r,a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,p="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=p||d||Function("return this")(),g=Object.prototype.toString,v=Math.max,y=Math.min,h=function(){return m.Date.now()};function b(n){var e=void 0===n?"undefined":t(a)(n);return!!n&&("object"==e||"function"==e)}function x(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(a)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==g.call(n)}(n))return NaN;if(b(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=b(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(u,"");var i=f.test(n);return i||l.test(n)?s(n.slice(2),i?2:8):c.test(n)?NaN:+n}r=function(t,n,e){var i,o,r,a,u,c,f=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(n){var e=i,r=o;return i=o=void 0,f=n,a=t.apply(r,e)}function m(t){return f=t,u=setTimeout(T,n),l?d(t):a}function g(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-f>=r}function T(){var t=h();if(g(t))return j(t);u=setTimeout(T,function(t){var e=n-(t-c);return s?y(e,r-(t-f)):e}(t))}function j(t){return u=void 0,p&&i?d(t):(i=o=void 0,a)}function w(){var t=h(),e=g(t);if(i=arguments,o=this,c=t,e){if(void 0===u)return m(c);if(s)return u=setTimeout(T,n),d(c)}return void 0===u&&(u=setTimeout(T,n)),a}return n=x(n)||0,b(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(x(e.maxWait)||0,n):r,p="trailing"in e?!!e.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=c=o=u=void 0},w.flush=function(){return void 0===u?a:j(h())},w};var T=o("iU1Pc"),j=(T=o("iU1Pc"),document.querySelector("#search-box")),w=document.querySelector(".country-list"),O=document.querySelector(".country-info");function M(){w.innerHTML="",O.innerHTML=""}j.addEventListener("input",t(r)((function(n){var e,i;(i=n).target.value.length>0&&(e=i.target.value.trim(),fetch("https://restcountries.com/v2/name/".concat(e,"?fields=name,capital,population,flag,languages")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(n){t(T).Notify.failure("Oops, there is no country with that name"),e="",console.log(n)}))).then((function(n){var e=n.map((function(t){var n=t.flag,e=t.name;return'<li style="font-size: 20px; display: flex; align-items: center;">\n        <img style="margin-right: 10px; margin-bottom: 10px" src="'.concat(n,'" alt="sss" width="50" height="50"> Name: ').concat(e,"</li>")})).join(""),i=n.map((function(t){var n=t.capital,e=t.flag,i=t.name,o=t.languages,r=t.population;return'<p style="display: flex; align-items: center;"><img style="margin-right: 10px;" src="'.concat(e,'" alt="sss" width="40" height="40">Name: ').concat(i,"</p>\n<p>Capital: ").concat(n,"</p>\n<p>Population: ").concat(r,"</p>\n<p>Languages: ").concat(o.map((function(t){return t.name})).join(", "),"</p>")})).join("");n.length>10?(t(T).Notify.info("Too many matches found. Please enter a more specific name."),M()):n.length>1&&n.length<=10?(O.innerHTML="",w.innerHTML=e):(n.length=1,w.innerHTML="",O.innerHTML=i)})).catch((function(t){M()}))}),300))}();
//# sourceMappingURL=index.d2f85181.js.map