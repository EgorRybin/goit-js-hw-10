!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,a=i||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,b=Math.min,y=function(){return a.Date.now()};function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=p(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=u.test(e);return l||f.test(e)?c(e.slice(2),l?2:8):r.test(e)?NaN:+e}var j=document.querySelector("#search-box");document.querySelector(".country-list"),document.querySelector(".country-info");j.addEventListener("input",(function(e){console.log((t=e.target.value,fetch("https://restcountries.com/v2/name/".concat(t)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e}))));var t}))}();
//# sourceMappingURL=index.8bdbfa1c.js.map
