parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
let t="214b0c558498448797163c59349a0165",n=[`https://newsapi.org/v2/top-headlines?country=us&apiKey=${t}`,"https://www.reddit.com/top.json"];function e(t){let n=document.createElement("article");n.innerHTML=`\n      <section class="featuredImage">\n        <img src="${t.img}" alt="" />\n      </section>\n      <section class="articleContent">\n          <a href="${t.url}"><h3>${t.title}</h3></a>\n          <h6>Lifestyle - ${t.author}</h6>\n      </section>\n      <section class="impressions">\n        526\n      </section>\n      <div class="clearfix"></div>\n  `,n.classList.add("article"),document.getElementById("main").appendChild(n)}async function a(t,n){try{const n=await fetch(t);if(!n.ok)throw new Error(n.message);if(404===n.status)throw new Error("Not found");const a=await n.json();return console.log(a),a}catch(e){console.log("err",e)}}function o(t){function n(t,n,e,a){this.title=t,this.author=n,this.url=e,this.img=a}console.log("data",t);for(let e=0;e<t.length;e++){let a=[];0===e?(t[e].articles.forEach(function(t){a.push(new n(t.title,t.author,t.url,t.urlToImage))}),t[e]=a):1===e&&(t[e].data.children.forEach(function(t){a.push(new n(t.data.title,t.data.author,t.data.url,t.data.thumbnail))}),t[e]=a)}return t}async function i(t){let n=[];for(let e=0;e<t.length;e++)n.push(a(t[e]));o(await Promise.all(n)).forEach(function(t){t.forEach(function(t){e(t)})})}i(n);
},{}]},{},["QdeU"], null)
//# sourceMappingURL=app.3bb55aca.js.map