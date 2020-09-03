!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){var a=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};a(i,r);e.exports=i.locals||{}},function(e,n,t){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function c(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},a=[],i=0;i<e.length;i++){var r=e[i],l=n.base?r[0]+n.base:r[0],s=t[l]||0,d="".concat(l," ").concat(s);t[l]=s+1;var m=c(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==m?(o[m].references++,o[m].updater(u)):o.push({identifier:d,updater:b(u,n),references:1}),a.push(d)}return a}function s(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var d,m=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=m(n,i);else{var r=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r)}}function p(e,n,t){var a=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,v=0;function b(e,n){var t,a,i;if(n.singleton){var r=v++;t=f||(f=s(n)),a=u.bind(null,t,r,!1),i=u.bind(null,t,r,!0)}else t=s(n),a=p.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=c(t[a]);o[i].references--}for(var r=l(e,n),s=0;s<t.length;s++){var d=c(t[s]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=r}}}},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(0);function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}new(function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=n,n&&n.length&&this.init()}var n,t,i;return n=e,(t=[{key:"init",value:function(){var e=this;this.transformedData=this.data.reduce((function(e,n){var t=e.map((function(e){return e.parentId})).indexOf(n.parentId);return e.length&&-1!==t?e[t].rows.push(n):e.push({parentId:n.parentId,rows:[n]}),e}),[]).sort((function(e,n){return e.parentId-n.parentId})).map((function(e){return{parentId:e.parentId,rows:e.rows.sort((function(e,n){return e.id-n.id}))}})),this.createAccordion(this.transformedData);var n=document.createElement("div"),t=document.createElement("button");n.classList.add("filter"),t.classList.add("filter-btn"),n.innerText="Filter by isActive:",t.innerText="Off",n.append(t),document.body.prepend(n),t.addEventListener("click",(function(){if("Off"===t.innerText){t.innerText="On";var n=[];e.transformedData.forEach((function(e){var t=e.rows.filter((function(e){return e.isActive}));t.length&&n.push({parentId:e.parentId,rows:t})})),e.createAccordion(n)}else t.innerText="Off",e.createAccordion(e.transformedData)})),this.isAllExpanded=!1;var a=document.createElement("button");a.classList.add("expand"),a.innerText="Always Expand: ";var i=document.createElement("span");i.innerText="Off",a.append(i),a.addEventListener("click",(function(){var n=document.querySelector(".container");"Off"===i.innerText?(i.innerText="On",e.isAllExpanded=!0,n.classList.add("_all-expanded")):(i.innerText="Off",e.isAllExpanded=!1,n.classList.remove("_all-expanded"))})),document.body.insertBefore(a,n)}},{key:"createAccordion",value:function(e){var n=document.querySelector(".container");n&&document.body.removeChild(n);var t=document.createElement("div");t.classList.add("container"),this.isAllExpanded&&t.classList.add("_all-expanded"),e.forEach((function(e){var n=document.createElement("div");n.classList.add("block");var a=document.createElement("button");a.classList.add("btn"),a.innerText="parentId: ".concat(e.parentId),a.addEventListener("click",(function(){this.classList.contains("_active")?this.classList.remove("_active"):this.classList.add("_active")})),n.append(a);var i=document.createElement("table"),r=document.createElement("thead");i.append(r),Object.keys(e.rows[0]).forEach((function(e){if("parentId"!==e){var n=document.createElement("th");n.innerText=e,r.append(n)}})),e.rows.forEach((function(e){var n=document.createElement("tr");Object.keys(e).forEach((function(t){if("parentId"!==t){var a=document.createElement("td");a.innerText=e[t],n.append(a)}})),i.append(n)})),n.append(i),t.append(n)})),document.body.append(t)}}])&&a(n.prototype,t),i&&a(n,i),e}())([{id:1,parentId:0,isActive:!0,balance:"$3,655.34",name:"Yolanda Chavez",email:"yolandachavez@isoplex.com"},{id:2,parentId:0,isActive:!0,balance:"$1,247.87",name:"Navarro Levy",email:"navarrolevy@isoplex.com"},{id:3,parentId:2,isActive:!0,balance:"$2,559.85",name:"Wooten Hartman",email:"wootenhartman@isoplex.com"},{id:4,parentId:3,isActive:!1,balance:"$3,474.20",name:"Mack Hess",email:"mackhess@isoplex.com"},{id:5,parentId:0,isActive:!1,balance:"$2,231.49",name:"Jocelyn Burch",email:"jocelynburch@isoplex.com"},{id:6,parentId:5,isActive:!1,balance:"$3,955.44",name:"Prince Daniel",email:"princedaniel@isoplex.com"},{id:7,parentId:5,isActive:!1,balance:"$1,994.83",name:"Newton Medina",email:"newtonmedina@isoplex.com"},{id:8,parentId:0,isActive:!0,balance:"$1,311.17",name:"Arnold Steele",email:"arnoldsteele@isoplex.com"},{id:9,parentId:0,isActive:!1,balance:"$2,313.46",name:"Kitty Glover",email:"kittyglover@isoplex.com"},{id:10,parentId:9,isActive:!1,balance:"$3,314.14",name:"Pruitt Spencer",email:"pruittspencer@isoplex.com"},{id:11,parentId:0,isActive:!1,balance:"$1,778.44",name:"Stefanie Quinn",email:"stefaniequinn@isoplex.com"},{id:12,parentId:0,isActive:!0,balance:"$1,141.37",name:"Fox Mcpherson",email:"foxmcpherson@isoplex.com"},{id:13,parentId:0,isActive:!1,balance:"$2,662.03",name:"Rodriquez Young",email:"rodriquezyoung@isoplex.com"},{id:14,parentId:0,isActive:!1,balance:"$2,573.84",name:"Love Byers",email:"lovebyers@isoplex.com"},{id:15,parentId:14,isActive:!1,balance:"$1,254.07",name:"Banks Short",email:"banksshort@isoplex.com"},{id:16,parentId:14,isActive:!0,balance:"$3,820.34",name:"Guthrie Brown",email:"guthriebrown@isoplex.com"},{id:17,parentId:16,isActive:!0,balance:"$2,884.74",name:"Kirsten Mcmahon",email:"kirstenmcmahon@isoplex.com"},{id:18,parentId:1,isActive:!1,balance:"$1,694.76",name:"Mcbride Sykes",email:"mcbridesykes@isoplex.com"},{id:19,parentId:1,isActive:!0,balance:"$3,644.56",name:"Juanita Camacho",email:"juanitacamacho@isoplex.com"},{id:20,parentId:17,isActive:!1,balance:"$1,179.25",name:"Carlene Little",email:"carlenelittle@isoplex.com"},{id:21,parentId:0,isActive:!0,balance:"$3,506.90",name:"Caitlin Bernard",email:"caitlinbernard@isoplex.com"},{id:22,parentId:21,isActive:!1,balance:"$2,924.31",name:"Vargas Lowe",email:"vargaslowe@isoplex.com"},{id:23,parentId:22,isActive:!1,balance:"$1,211.95",name:"Mae Santiago",email:"maesantiago@isoplex.com"},{id:24,parentId:22,isActive:!0,balance:"$2,959.37",name:"Gallagher Burnett",email:"gallagherburnett@isoplex.com"},{id:25,parentId:0,isActive:!1,balance:"$1,880.20",name:"Reyna Mayo",email:"reynamayo@isoplex.com"},{id:26,parentId:0,isActive:!1,balance:"$1,639.69",name:"Hardy Townsend",email:"hardytownsend@isoplex.com"},{id:27,parentId:0,isActive:!1,balance:"$3,211.26",name:"Cohen Best",email:"cohenbest@isoplex.com"},{id:28,parentId:27,isActive:!0,balance:"$2,270.94",name:"Sherrie Berger",email:"sherrieberger@isoplex.com"},{id:29,parentId:27,isActive:!1,balance:"$2,049.45",name:"Gentry Robbins",email:"gentryrobbins@isoplex.com"},{id:30,parentId:0,isActive:!0,balance:"$1,177.86",name:"Etta Sampson",email:"ettasampson@isoplex.com"}])}]);