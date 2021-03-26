// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsKey = void 0;
const newsKey = '214b0c558498448797163c59349a0165';
exports.newsKey = newsKey;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _keys = require("./keys.js");

let newsSources = [`https://newsapi.org/v2/top-headlines?country=us&apiKey=${_keys.newsKey}`, 'https://www.reddit.com/top.json']; // API Call Examples
// Fetch API Call with chain method
// fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`, {
//   method: 'GET',
// })
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err));
// Example provided by News API
// https://newsapi.org/docs/get-started
// var url = 'http://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           `apiKey=${newsKey}`;
// var req = new Request(url);
// console.log(req);
// fetch(req)
//   .then((response) => response.json()).then(json => console.log(json))
// Async Await Method, example from lesson 9
// const fetchThings = async (url) => {
//   try {
//     // fetch the raw response
//     const rawResponse = await fetch(url);
//     // fetch only rejects for network error or connection issues
//     // as a result, we need to handle different scenarios here
//     // rawResponse.ok is true if status code is between 200 - 299
//     if (!rawResponse.ok) {
//       throw new Error(rawResponse);
//     }
//     // could also key off status directly
//     if (rawResponse.status === 404) {
//       throw new Error('Not found');
//     }
//     // if we made it this far, we're ok
//     // parse response into json
//     const jsonResponse = await rawResponse.json();
//     // now we can do whatever we want with jsonResponse
//     // add elements to DOM, make more requests, etc.
//     console.log(jsonResponse);
//     jsonResponse.articles.forEach(function(result) {
//       console.log(result.title);
//       renderRows(result.title);
//     });
//   } catch (err) {
//     console.log('err', err);
//   }
// };
// fetchThings(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsKey}`);
// Reddit API with Proxy
// let apiCall = fetch('https://cors.bridged.cc/https://www.reddit.com/top.json');
// apiCall
//   .then(res => res.json())
//   .then(results => {
//     console.log(results.data.children);
//     results.data.children.forEach(function(result){
//       // $('ul').append('<li>'+result.data.title+'</li>')
//       renderRows(result.data.title);
//     });
//   })
//   .catch(err => console.log(err));

function renderRows(data) {
  // jQuery way
  // $('#main').append(`
  //   <article class="article">
  //     <section class="featuredImage">
  //       <img src="${data.img}" alt="" />
  //     </section>
  //     <section class="articleContent">
  //         <a href="${data.url}"><h3>${data.title}</h3></a>
  //         <h6>Lifestyle - ${data.author}</h6>
  //     </section>
  //     <section class="impressions">
  //       526
  //     </section>
  //     <div class="clearfix"></div>
  //   </article>
  // `);
  // Vanilla js way
  let article = document.createElement('article');
  article.innerHTML = `
      <section class="featuredImage">
        <img src="${data.img}" alt="" />
      </section>
      <section class="articleContent">
          <a href="${data.url}"><h3>${data.title}</h3></a>
          <h6>Lifestyle - ${data.author}</h6>
      </section>
      <section class="impressions">
        526
      </section>
      <div class="clearfix"></div>
  `;
  article.classList.add('article');
  document.getElementById('main').appendChild(article);
}

async function retrieveData(url, apiKey) {
  try {
    const rawResponse = await fetch(url);

    if (!rawResponse.ok) {
      throw new Error(rawResponse.message);
    }

    if (rawResponse.status === 404) {
      throw new Error('Not found');
    }

    const jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
    return jsonResponse;
  } catch (err) {
    console.log('err', err);
  }
}

function normalizeData(data) {
  console.log('data', data);

  function ArticleObj(title, author, url, img) {
    this.title = title;
    this.author = author;
    this.url = url;
    this.img = img; //impressions
    //category
  }

  for (let i = 0; i < data.length; i++) {
    let cleanData = [];

    if (i === 0) {
      data[i].articles.forEach(function (result) {
        cleanData.push(new ArticleObj(result.title, result.author, result.url, result.urlToImage));
      });
      data[i] = cleanData;
    } else if (i === 1) {
      data[i].data.children.forEach(function (result) {
        cleanData.push(new ArticleObj(result.data.title, result.data.author, result.data.url, result.data.thumbnail));
      });
      data[i] = cleanData;
    }
  }

  return data;
}

async function init(sources) {
  // step 1 retrieve data
  let promises = [];

  for (let i = 0; i < sources.length; i++) {
    promises.push(retrieveData(sources[i]));
  }

  const newsData = await Promise.all(promises); // step 2 normalize data

  let cleanData = normalizeData(newsData); // step 3 render to dom

  cleanData.forEach(function (sources) {
    sources.forEach(function (articles) {
      renderRows(articles);
    });
  });
}

init(newsSources);
},{"./keys.js":"js/keys.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62384" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map