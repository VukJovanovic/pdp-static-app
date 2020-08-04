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
})({"animations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideSidebar = exports.showSidebar = exports.hideWeekDays = exports.showWeekDays = void 0;

var showWeekDays = function showWeekDays(days) {
  TweenMax.to(days[0].parentNode, 0.8, {
    padding: '1.5rem',
    height: 'auto'
  });
  var delay = 0.5;
  days.forEach(function (day) {
    TweenMax.to(day, 0.6, {
      y: '10px',
      opacity: 1,
      delay: delay
    });
    delay += 0.2;
  });
};

exports.showWeekDays = showWeekDays;

var hideWeekDays = function hideWeekDays(days) {
  var delay = 0;
  days.forEach(function (day) {
    TweenMax.to(day, 0.6, {
      y: '-50px',
      opacity: 0,
      delay: delay
    });
    delay += 0.2;
  });
  TweenMax.to(days[0].parentNode, 0.4, {
    padding: '0rem 1.5rem',
    height: 0,
    delay: delay
  });
}; // ***************
// animacije mobilnog menija
// ***************


exports.hideWeekDays = hideWeekDays;
var sidebarMenu = document.querySelector('.sidebar');
var sidebarOverlay = document.querySelector('.sidebarOverlay');
var sidebarNavigation = document.querySelector('.sidebar__navigation');
var closeSidebarBtn = document.querySelector('.header__mobileCloseBtn');
var openSidebarBtn = document.querySelector('.header__burger');

var showSidebar = function showSidebar() {
  TweenMax.to(sidebarMenu, 0.6, {
    width: '70vw'
  });
  TweenMax.to(sidebarOverlay, 0.6, {
    width: '30vw'
  });
  TweenMax.to(openSidebarBtn, 0.4, {
    display: 'none',
    opacity: 0,
    x: '5px'
  });
  TweenMax.to(closeSidebarBtn, 0.4, {
    display: 'block',
    opacity: 1,
    x: '0px',
    delay: 0.5
  });
  TweenMax.to(sidebarNavigation, 0.6, {
    opacity: 1,
    delay: 0.6
  });
};

exports.showSidebar = showSidebar;

var hideSidebar = function hideSidebar() {
  TweenMax.to(sidebarNavigation, 0.3, {
    opacity: 0
  });
  TweenMax.to(sidebarMenu, 0.6, {
    width: '0',
    delay: 0.2
  });
  TweenMax.to(sidebarOverlay, 0.6, {
    width: '0',
    delay: 0.2
  });
  TweenMax.to(closeSidebarBtn, 0.4, {
    display: 'none',
    opacity: 0,
    x: '5px',
    delay: 0.1
  });
  TweenMax.to(openSidebarBtn, 0.4, {
    display: 'block',
    opacity: 1,
    x: '0px',
    delay: 0.5
  });
};

exports.hideSidebar = hideSidebar;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _animations = require("./animations");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// ***************
// Animacije - Nedelje i dani
// ***************
var firstWeekBtn = document.querySelector('#firstWeek');

var firstWeekDays = _toConsumableArray(document.querySelectorAll('.firstWeekDays'));

var secondWeekBtn = document.querySelector('#secondWeek');

var secondWeekDays = _toConsumableArray(document.querySelectorAll('.secondWeekDays'));

if (firstWeekBtn) {
  firstWeekBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (firstWeekBtn.classList.contains('activeWeek')) {
      (0, _animations.hideWeekDays)(firstWeekDays);
      firstWeekBtn.classList.remove('activeWeek');
    } else {
      (0, _animations.showWeekDays)(firstWeekDays);
      firstWeekBtn.classList.add('activeWeek');
    }
  });
}

if (secondWeekBtn) {
  secondWeekBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (secondWeekBtn.classList.contains('activeWeek')) {
      (0, _animations.hideWeekDays)(secondWeekDays);
      secondWeekBtn.classList.remove('activeWeek');
    } else {
      (0, _animations.showWeekDays)(secondWeekDays);
      secondWeekBtn.classList.add('activeWeek');
    }
  });
} // ***************
// Funkcionalnost mobilnog menija
// ***************


var mobileMenuBtn = document.querySelector('.header__burger');
var closeMobileMenuBtn = document.querySelector('.header__mobileCloseBtn');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    (0, _animations.showSidebar)();
  });
}

if (closeMobileMenuBtn) {
  closeMobileMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    (0, _animations.hideSidebar)();
  });
}
},{"./animations":"animations.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58616" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/bundle.js.map