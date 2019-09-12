/*! msal v1.1.3 2019-09-09 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", { value: true });
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Check if a string is empty
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 * Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "errorDescription", {
        get: function () { return "error_description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "error", {
        get: function () { return "error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "scope", {
        get: function () { return "scope"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientInfo", {
        get: function () { return "client_info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idToken", {
        get: function () { return "id_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessToken", {
        get: function () { return "access_token"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expiresIn", {
        get: function () { return "expires_in"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "sessionState", {
        get: function () { return "session_state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "claims", {
        get: function () { return "claims"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalClientInfo", {
        get: function () { return "msal.client.info"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalError", {
        get: function () { return "msal.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalErrorDescription", {
        get: function () { return "msal.error.description"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msalSessionState", {
        get: function () { return "msal.session.state"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenKeys", {
        get: function () { return "msal.token.keys"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "accessTokenKey", {
        get: function () { return "msal.access.token.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "expirationKey", {
        get: function () { return "msal.expiration.key"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateLogin", {
        get: function () { return "msal.state.login"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateAcquireToken", {
        get: function () { return "msal.state.acquireToken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "stateRenew", {
        get: function () { return "msal.state.renew"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "nonceIdToken", {
        get: function () { return "msal.nonce.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "userName", {
        get: function () { return "msal.username"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "idTokenKey", {
        get: function () { return "msal.idtoken"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginRequest", {
        get: function () { return "msal.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "loginError", {
        get: function () { return "msal.login.error"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewStatus", {
        get: function () { return "msal.token.renew.status"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "urlHash", {
        get: function () { return "msal.urlHash"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "angularLoginRequest", {
        get: function () { return "msal.angular.login.request"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "msal", {
        get: function () { return "msal"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "no_account", {
        get: function () { return "NO_ACCOUNT"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "consumersUtid", {
        get: function () { return "9188040d-6c67-4c5b-b112-36a304b66dad"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimiter", {
        get: function () { return "|"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCancelled", {
        get: function () { return "Canceled"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusCompleted", {
        get: function () { return "Completed"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "tokenRenewStatusInProgress", {
        get: function () { return "In Progress"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "homeAccountIdentifier", {
        get: function () { return "homeAccountIdentifier"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "openidScope", {
        get: function () { return "openid"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "profileScope", {
        get: function () { return "profile"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationLocal", {
        get: function () { return "localStorage"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheLocationSession", {
        get: function () { return "sessionStorage"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeRedirect", {
        get: function () { return "redirectInteraction"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypePopup", {
        get: function () { return "popupInteraction"; },
        enumerable: true,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * @hidden
 * CacheKeys for 'authority' and 'account'
 */
exports.CacheKeys = {
    AUTHORITY: "msal.authority",
    ACQUIRE_TOKEN_ACCOUNT: "msal.acquireTokenAccount"
};
exports.AADTrustedHostList = {
    "login.windows.net": "login.windows.net",
    "login.chinacloudapi.cn": "login.chinacloudapi.cn",
    "login.cloudgovapi.us": "login.cloudgovapi.us",
    "login.microsoftonline.com": "login.microsoftonline.com",
    "login.microsoftonline.de": "login.microsoftonline.de",
    "login.microsoftonline.us": "login.microsoftonline.us"
};
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
exports.SSOTypes = {
    ACCOUNT: "account",
    SID: "sid",
    LOGIN_HINT: "login_hint",
    ID_TOKEN: "id_token",
    DOMAIN_HINT: "domain_hint",
    ORGANIZATIONS: "organizations",
    CONSUMERS: "consumers",
    ACCOUNT_ID: "accountIdentifier",
    HOMEACCOUNT_ID: "homeAccountIdentifier",
    LOGIN_REQ: "login_req",
    DOMAIN_REQ: "domain_req"
};
/**
 * @hidden
 */
exports.BlacklistedEQParams = [
    exports.SSOTypes.SID,
    exports.SSOTypes.LOGIN_HINT
];
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
exports.PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * MSAL JS Library Version
 */
function libraryVersion() {
    return "1.1.3";
}
exports.libraryVersion = libraryVersion;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var CryptoUtils = /** @class */ (function () {
    function CryptoUtils() {
    }
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    CryptoUtils.createNewGuid = function () {
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
            return CryptoUtils.decimalToHex(buffer[0]) + CryptoUtils.decimalToHex(buffer[1])
                + CryptoUtils.decimalToHex(buffer[2]) + CryptoUtils.decimalToHex(buffer[3])
                + "-" + CryptoUtils.decimalToHex(buffer[4]) + CryptoUtils.decimalToHex(buffer[5])
                + "-" + CryptoUtils.decimalToHex(buffer[6]) + CryptoUtils.decimalToHex(buffer[7])
                + "-" + CryptoUtils.decimalToHex(buffer[8]) + CryptoUtils.decimalToHex(buffer[9])
                + "-" + CryptoUtils.decimalToHex(buffer[10]) + CryptoUtils.decimalToHex(buffer[11])
                + CryptoUtils.decimalToHex(buffer[12]) + CryptoUtils.decimalToHex(buffer[13])
                + CryptoUtils.decimalToHex(buffer[14]) + CryptoUtils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    CryptoUtils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    CryptoUtils.base64Encode = function (input) {
        return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number("0x" + p1));
        }));
    };
    /**
     * decoding base64 token - platform specific check
     *
     * @param base64IdToken
     */
    CryptoUtils.base64Decode = function (input) {
        return decodeURIComponent(atob(input).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    CryptoUtils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    return CryptoUtils;
}());
exports.CryptoUtils = CryptoUtils;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    invalidCacheLocation: {
        code: "invalid_cache_location",
        desc: "The cache location provided is not valid."
    },
    noStorageSupported: {
        code: "browser_storage_not_supported",
        desc: "localStorage and sessionStorage are not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientScope: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createInvalidCacheLocationConfigError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCacheLocation.code, exports.ClientConfigurationErrorMessage.invalidCacheLocation.desc + " Provided value: " + givenCacheLocation + ". Possible values are: " + Constants_1.Constants.cacheLocationLocal + ", " + Constants_1.Constants.cacheLocationSession + ".");
    };
    ClientConfigurationError.createNoStorageSupportedError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noStorageSupported.code, exports.ClientConfigurationErrorMessage.noStorageSupported.desc);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createClientIdSingleScopeError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.clientScope.code, exports.ClientConfigurationErrorMessage.clientScope.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var ScopeSet_1 = __webpack_require__(13);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    UrlUtils.createNavigateUrl = function (serverRequestParams) {
        var str = this.createNavigationUrlString(serverRequestParams);
        var authEndpoint = serverRequestParams.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    UrlUtils.createNavigationUrlString = function (serverRequestParams) {
        var scopes = serverRequestParams.scopes;
        if (scopes.indexOf(serverRequestParams.clientId) === -1) {
            scopes.push(serverRequestParams.clientId);
        }
        var str = [];
        str.push("response_type=" + serverRequestParams.responseType);
        this.translateclientIdUsedInScope(scopes, serverRequestParams.clientId);
        str.push("scope=" + encodeURIComponent(ScopeSet_1.ScopeSet.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(serverRequestParams.clientId));
        str.push("redirect_uri=" + encodeURIComponent(serverRequestParams.redirectUri));
        str.push("state=" + encodeURIComponent(serverRequestParams.state));
        str.push("nonce=" + encodeURIComponent(serverRequestParams.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + serverRequestParams.xClientSku);
        str.push("x-client-Ver=" + serverRequestParams.xClientVer);
        if (serverRequestParams.promptValue) {
            str.push("prompt=" + encodeURIComponent(serverRequestParams.promptValue));
        }
        if (serverRequestParams.claimsValue) {
            str.push("claims=" + encodeURIComponent(serverRequestParams.claimsValue));
        }
        if (serverRequestParams.queryParameters) {
            str.push(serverRequestParams.queryParameters);
        }
        if (serverRequestParams.extraQueryParameters) {
            str.push(serverRequestParams.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(serverRequestParams.correlationId));
        return str;
    };
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    UrlUtils.translateclientIdUsedInScope = function (scopes, clientId) {
        var clientIdIndex = scopes.indexOf(clientId);
        if (clientIdIndex >= 0) {
            scopes.splice(clientIdIndex, 1);
            if (scopes.indexOf("openid") === -1) {
                scopes.push("openid");
            }
            if (scopes.indexOf("profile") === -1) {
                scopes.push("profile");
            }
        }
    };
    /**
     * Returns current window URL as redirect uri
     */
    UrlUtils.getDefaultRedirectUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlUtils.replaceTenantPath = function (url, tenantId) {
        url = url.toLowerCase();
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    UrlUtils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlUtils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    UrlUtils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !UrlUtils.endsWith(url, "/")) {
            url += "/";
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    UrlUtils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    UrlUtils.urlRemoveQueryStringParameter = function (url, name) {
        if (StringUtils_1.StringUtils.isEmpty(url)) {
            return url;
        }
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        url = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        url = url.replace(regex, "");
        return url;
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    UrlUtils.getHashFromUrl = function (urlStringOrFragment) {
        var hashIndex1 = urlStringOrFragment.indexOf("#");
        var hashIndex2 = urlStringOrFragment.indexOf("#/");
        if (hashIndex2 > -1) {
            return urlStringOrFragment.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return urlStringOrFragment.substring(hashIndex1 + 1);
        }
        return urlStringOrFragment;
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
var StringUtils_1 = __webpack_require__(1);
exports.ClientAuthErrorMessage = {
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements like authority."
    },
    multipleCacheAuthorities: {
        code: "multiple_authorities",
        desc: "Multiple authorities found in the cache. Pass authority in the API overload."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    tokenRenewalError: {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    invalidStateError: {
        code: "invalid_state_error",
        desc: "Invalid state."
    },
    nonceMismatchError: {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    },
    loginProgressError: {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    },
    acquireTokenProgressError: {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    callbackError: {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required."
    },
    userDoesNotExistError: {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    },
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoNotPopulatedError: {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    idTokenNotParsed: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    tokenEncodingError: {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    },
    invalidInteractionType: {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    ClientAuthError.createEndpointResolutionError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
    };
    ClientAuthError.createMultipleMatchingTokensInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleMatchingTokens.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    ClientAuthError.createMultipleAuthoritiesInCacheError = function (scope) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.multipleCacheAuthorities.code, "Cache error for scope " + scope + ": " + exports.ClientAuthErrorMessage.multipleCacheAuthorities.desc + ".");
    };
    ClientAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    ClientAuthError.createTokenRenewalTimeoutError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
    };
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
    };
    // TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    // TODO: Is this not a security flaw to send the user the Nonce expected??
    ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
    };
    ClientAuthError.createLoginInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
    };
    ClientAuthError.createAcquireTokenInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
    };
    ClientAuthError.createUserCancelledError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
    };
    ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
    };
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    ClientAuthError.createUserDoesNotExistError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
    };
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    ClientAuthError.createInvalidInteractionTypeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
exports.AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorMessage) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ClientConfigurationError_1 = __webpack_require__(4);
var XHRClient_1 = __webpack_require__(18);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Aad"] = 0] = "Aad";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    AuthorityType[AuthorityType["B2C"] = 2] = "B2C";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
    }
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace("{tenant}", this.Tenant);
        },
        enumerable: true,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.tenantDiscoveryResponse) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = UrlUtils_1.UrlUtils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        /**
         * // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
         */
        get: function () {
            return this.CanonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint) {
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /* enableCaching: */ true)
            .then(function (response) {
            return {
                AuthorizationEndpoint: response.authorization_endpoint,
                EndSessionEndpoint: response.end_session_endpoint,
                Issuer: response.issuer
            };
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var openIdConfigurationEndpointResponse, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.GetOpenIdConfigurationEndpointAsync()];
                    case 1:
                        openIdConfigurationEndpointResponse = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.DiscoverEndpoints(openIdConfigurationEndpointResponse)];
                    case 2:
                        _a.tenantDiscoveryResponse = _b.sent();
                        return [2 /*return*/, this];
                }
            });
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENT_NAME_PREFIX = "msal.";
exports.EVENT_NAME_KEY = "event_name";
exports.START_TIME_KEY = "start_time";
exports.ELAPSED_TIME_KEY = "elapsed_time";
exports.TELEMETRY_BLOB_EVENT_NAMES = {
    MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
    ApiTelemIdConstStrKey: "msal.api_telem_id",
    ApiIdConstStrKey: "msal.api_id",
    BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
    CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
    HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
    IdpConstStrKey: "Microsoft_MSAL_idp",
    IsSilentTelemetryBatchKey: "",
    IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
    ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
    TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
    UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
};
// This is used to replace the real tenant in telemetry info
exports.TENANT_PLACEHOLDER = "<tenant>";


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!StringUtils_1.StringUtils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Constants_1.libraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled;
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AuthError_1 = __webpack_require__(7);
exports.ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.createServerUnavailableError = function () {
        return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
    };
    ServerError.createUnknownServerError = function (errorDesc) {
        return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
    };
    return ServerError;
}(AuthError_1.AuthError));
exports.ServerError = ServerError;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AccessTokenKey_1 = __webpack_require__(26);
var AccessTokenValue_1 = __webpack_require__(27);
var ServerRequestParameters_1 = __webpack_require__(28);
var ClientInfo_1 = __webpack_require__(29);
var Constants_1 = __webpack_require__(2);
var IdToken_1 = __webpack_require__(30);
var Storage_1 = __webpack_require__(31);
var Account_1 = __webpack_require__(16);
var ScopeSet_1 = __webpack_require__(13);
var StringUtils_1 = __webpack_require__(1);
var CryptoUtils_1 = __webpack_require__(3);
var TokenUtils_1 = __webpack_require__(15);
var TimeUtils_1 = __webpack_require__(33);
var UrlUtils_1 = __webpack_require__(5);
var ResponseUtils_1 = __webpack_require__(34);
var AuthorityFactory_1 = __webpack_require__(35);
var Configuration_1 = __webpack_require__(20);
var ClientConfigurationError_1 = __webpack_require__(4);
var AuthError_1 = __webpack_require__(7);
var ClientAuthError_1 = __webpack_require__(6);
var ServerError_1 = __webpack_require__(11);
var InteractionRequiredAuthError_1 = __webpack_require__(21);
var AuthResponse_1 = __webpack_require__(22);
var TelemetryManager_1 = tslib_1.__importDefault(__webpack_require__(36));
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
 * @hidden
 * @ignore
 * A wrapper to handle the token response/error within the iFrame always
 *
 * @param target
 * @param propertyKey
 * @param descriptor
 */
var resolveTokenOnlyIfOutOfIframe = function (target, propertyKey, descriptor) {
    var tokenAcquisitionMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.isInIframe()
            ? new Promise(function () {
                return;
            })
            : tokenAcquisitionMethod.apply(this, args);
    };
    return descriptor;
};
/**
 * UserAgentApplication class
 *
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application.
     * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     *
     * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
     *
     * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.authResponseCallback = null;
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        // Set the callback boolean
        this.redirectCallbacksSet = false;
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
        this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
        this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
        // track login and acquireToken in progress
        this.loginInProgress = false;
        this.acquireTokenInProgress = false;
        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
        try {
            this.cacheStorage = new Storage_1.Storage(this.config.cache.cacheLocation);
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCacheLocationConfigError(this.config.cache.cacheLocation);
        }
        // Initialize window handling code
        window.openedWindows = [];
        window.activeRenewals = {};
        window.renewStates = [];
        window.callbackMappedToRenewStates = {};
        window.promiseMappedToRenewStates = {};
        window.msal = this;
        var urlHash = window.location.hash;
        var urlContainsHash = this.urlContainsHash(urlHash);
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            if (urlContainsHash) {
                this.handleAuthenticationResponse(urlHash);
            }
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Method to manage the authority URL.
         *
         * @returns {string} authority
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * setter for the authority URL
         * @param {string} authority
         */
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get the current authority instance from the MSAL configuration object
     *
     * @returns {@link Authority} authority instance
     */
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
        if (!authOrTokenCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
        }
        // Set callbacks
        if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
        }
        else {
            this.authResponseCallback = authOrTokenCallback;
        }
        this.redirectCallbacksSet = true;
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            var cachedHash = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
            if (cachedHash) {
                this.processCallBack(cachedHash, null);
            }
        }
    };
    UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.tokenReceivedCallback(response);
            }
            else if (this.authResponseCallback) {
                this.authResponseCallback(null, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            resolve(response);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            if (this.errorReceivedCallback) {
                this.errorReceivedCallback(authErr, response.accountState);
            }
            else {
                this.authResponseCallback(authErr, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            reject(authErr);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    // #endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     */
    UserAgentApplication.prototype.loginRedirect = function (request) {
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request);
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (request) {
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request);
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.loginPopup = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
        });
    };
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
        });
    };
    // #region Acquire Token
    /**
     * Use when initiating the login process or when you want to obtain an access_token for your API,
     * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        // If already in progress, do not proceed
        if (this.loginInProgress || this.acquireTokenInProgress) {
            var thrownError = this.loginInProgress ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request && request.state));
            this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
            return;
        }
        // if extraScopesToConsent is passed in loginCall, append them to the login request
        var scopes = isLoginCall ? this.appendScopes(request) : request.scopes;
        // Validate and filter scopes (the validate function will throw if validation fails)
        this.validateInputScope(scopes, !isLoginCall);
        // Get the account object if a session exists
        var account = (request && request.account && !isLoginCall) ? request.account : this.getAccount();
        // If no session exists, prompt the user to login.
        if (!account && !ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request)) {
            if (isLoginCall) {
                // extract ADAL id_token if exists
                var adalIdToken = this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var tokenRequest = this.buildIDTokenRequest(request);
                    this.silentLogin = true;
                    this.acquireTokenSilent(tokenRequest).then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        _this.authResponseHandler(interactionType, response, resolve);
                        return;
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS: " + error);
                        // proceed to login since ATS failed
                        _this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                    });
                }
                // No ADAL token found, proceed to login
                else {
                    this.acquireTokenHelper(null, interactionType, isLoginCall, request, scopes, resolve, reject);
                }
            }
            // AcquireToken call, but no account or context given, so throw error
            else {
                this.logger.info("User login is required");
                throw ClientAuthError_1.ClientAuthError.createUserLoginRequiredError();
            }
        }
        // User session exists
        else {
            this.acquireTokenHelper(account, interactionType, isLoginCall, request, scopes, resolve, reject);
        }
    };
    /**
     * @hidden
     * @ignore
     * Helper function to acquireToken
     *
     */
    UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, scopes, resolve, reject) {
        var _this = this;
        // Track the acquireToken progress
        if (isLoginCall) {
            this.loginInProgress = true;
        }
        else {
            this.acquireTokenInProgress = true;
        }
        var scope = scopes ? scopes.join(" ").toLowerCase() : this.clientId.toLowerCase();
        var serverAuthenticationRequest;
        var acquireTokenAuthority = (!isLoginCall && request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
        var popUpWindow;
        if (interactionType === Constants_1.Constants.interactionTypePopup) {
            // Generate a popup window
            popUpWindow = this.openWindow("about:blank", "_blank", 1, this, resolve, reject);
            if (!popUpWindow) {
                // We pass reject in openWindow, we reject there during an error
                return;
            }
        }
        acquireTokenAuthority.resolveEndpointsAsync().then(function () {
            // On Fulfillment
            var responseType = isLoginCall ? ResponseTypes.id_token : _this.getTokenType(account, scopes, false);
            var loginStartPage;
            if (isLoginCall) {
                // if the user sets the login start page - angular only??
                loginStartPage = _this.cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
                if (!loginStartPage || loginStartPage === "") {
                    loginStartPage = window.location.href;
                }
                else {
                    _this.cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
                }
            }
            serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, scopes, responseType, _this.getRedirectUri(), request && request.state);
            _this.updateCacheEntries(serverAuthenticationRequest, account, loginStartPage);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            serverAuthenticationRequest.populateQueryParams(account, request);
            // Construct urlNavigate
            var urlNavigate = UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest) + Constants_1.Constants.response_mode_fragment;
            // set state in cache
            if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                if (!isLoginCall) {
                    _this.cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, serverAuthenticationRequest.state, _this.inCookie);
                }
            }
            else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                window.renewStates.push(serverAuthenticationRequest.state);
                window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                // Register callback to capture results from server
                _this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
            }
            else {
                throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
            }
            // prompt user for interaction
            _this.navigateWindow(urlNavigate, popUpWindow);
        }).catch(function (err) {
            _this.logger.warning("could not resolve endpoints");
            _this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
            if (popUpWindow) {
                popUpWindow.close();
            }
        });
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (request) {
        var _this = this;
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account, give that account the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            // if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !(request.sid || request.loginHint) && StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            var responseType = _this.getTokenType(account, request.scopes, true);
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request && request.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request) || account) {
                serverAuthenticationRequest.populateQueryParams(account, request);
            }
            // if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                // if adalIdToken exists, extract the SSO info from the same
                var adalIdTokenObject = TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
                _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                serverAuthenticationRequest.populateQueryParams(account, null, adalIdTokenObject);
            }
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims && !request.forceRefresh) {
                try {
                    cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
                }
                catch (e) {
                    authErr = e;
                }
            }
            // resolve/reject based on cacheResult
            if (cacheResultResponse) {
                _this.logger.info("Token is already in cache for scope:" + scope);
                resolve(cacheResultResponse);
                return null;
            }
            else if (authErr) {
                _this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                reject(authErr);
                return null;
            }
            // else proceed with login
            else {
                var logMessage = void 0;
                if (userContainedClaims) {
                    logMessage = "Skipped cache lookup since claims were given.";
                }
                else if (request.forceRefresh) {
                    logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                }
                else {
                    logMessage = "Token is not in cache for scope:" + scope;
                }
                _this.logger.verbose(logMessage);
                // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                if (!serverAuthenticationRequest.authorityInstance) {
                    serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                    .then(function () {
                    /*
                     * refresh attempt with iframe
                     * Already renewing for this scope, callback when we get the token.
                     */
                    if (window.activeRenewals[scope]) {
                        _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                        // Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                    }
                    else {
                        if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                            /*
                             * App uses idToken to send to api endpoints
                             * Default scope is tracked as clientId to store this token
                             */
                            _this.logger.verbose("renewing idToken");
                            _this.silentLogin = true;
                            _this.renewIdToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                        else {
                            // renew access token
                            _this.logger.verbose("renewing accesstoken");
                            _this.renewToken(request.scopes, resolve, reject, account, serverAuthenticationRequest);
                        }
                    }
                }).catch(function (err) {
                    _this.logger.warning("could not resolve endpoints");
                    reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
                    return null;
                });
            }
        });
    };
    // #endregion
    // #region Popup Window Creation
    /**
     * @hidden
     *
     * Used to send the user to the redirect_uri after authentication is complete. The user's bearer token is attached to the URI fragment as an id_token/access_token field.
     * This function also closes the popup window after redirection.
     *
     * @param urlNavigate
     * @param title
     * @param interval
     * @param instance
     * @param resolve
     * @param reject
     * @ignore
     */
    UserAgentApplication.prototype.openWindow = function (urlNavigate, title, interval, instance, resolve, reject) {
        var _this = this;
        // Generate a popup window
        var popupWindow;
        try {
            popupWindow = this.openPopup(urlNavigate, title, Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
        }
        catch (e) {
            instance.loginInProgress = false;
            instance.acquireTokenInProgress = false;
            this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
            if (reject) {
                reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
            }
            return null;
        }
        // Push popup window handle onto stack for tracking
        window.openedWindows.push(popupWindow);
        var pollTimer = window.setInterval(function () {
            // If popup closed or login in progress, cancel login
            if (popupWindow && popupWindow.closed && (instance.loginInProgress || instance.acquireTokenInProgress)) {
                if (reject) {
                    reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                }
                window.clearInterval(pollTimer);
                if (_this.config.framework.isAngular) {
                    _this.broadcast("msal:popUpClosed", ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.code + Constants_1.Constants.resourceDelimiter + ClientAuthError_1.ClientAuthErrorMessage.userCancelledError.desc);
                    return;
                }
                instance.loginInProgress = false;
                instance.acquireTokenInProgress = false;
            }
            try {
                var popUpWindowLocation = popupWindow.location;
                // If the popup hash changes, close the popup window
                if (popUpWindowLocation.href.indexOf(_this.getRedirectUri()) !== -1) {
                    window.clearInterval(pollTimer);
                    instance.loginInProgress = false;
                    instance.acquireTokenInProgress = false;
                    _this.logger.info("Closing popup window");
                    // TODO: Check how this can be extracted for any framework specific code?
                    if (_this.config.framework.isAngular) {
                        _this.broadcast("msal:popUpHashChanged", popUpWindowLocation.hash);
                        for (var i = 0; i < window.openedWindows.length; i++) {
                            window.openedWindows[i].close();
                        }
                    }
                }
            }
            catch (e) {
                /*
                 * Cross Domain url check error.
                 * Will be thrown until AAD redirects the user back to the app"s root page with the token.
                 * No need to log or throw this error as it will create unnecessary traffic.
                 */
            }
        }, interval);
        return popupWindow;
    };
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left);
            if (!popupWindow) {
                throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this.logger.error("error opening popup " + e.message);
            this.loginInProgress = false;
            this.acquireTokenInProgress = false;
            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
        }
    };
    // #endregion
    // #region Iframe Management
    /**
     * @hidden
     * Returns whether current window is in ifram for token renewal
     * @ignore
     */
    UserAgentApplication.prototype.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Returns whether parent window exists and has msal
     */
    UserAgentApplication.prototype.parentIsMsal = function () {
        return window.parent !== window && window.parent.msal;
    };
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        var _this = this;
        // set iframe session to pending
        var expectedState = window.activeRenewals[scope];
        this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
        this.loadFrame(urlNavigate, frameName);
        setTimeout(function () {
            if (_this.cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
                // fail the iframe session if it's in pending state
                _this.logger.verbose("Loading frame has timed out after: " + (_this.config.system.loadFrameTimeout / 1000) + " seconds for scope " + scope + ":" + expectedState);
                // Error after timeout
                if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                    window.callbackMappedToRenewStates[expectedState](null, ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                }
                _this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusCancelled);
            }
        }, this.config.system.loadFrameTimeout);
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    UserAgentApplication.prototype.loadFrame = function (urlNavigate, frameName) {
        var _this = this;
        /*
         * This trick overcomes iframe navigation in IE
         * IE does not load the page consistently in iframe
         */
        this.logger.info("LoadFrame: " + frameName);
        var frameCheck = frameName;
        setTimeout(function () {
            var frameHandle = _this.addHiddenIFrame(frameCheck);
            if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                frameHandle.src = urlNavigate;
                _this.logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
            }
        }, this.config.system.navigateFrameWait);
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    UserAgentApplication.prototype.addHiddenIFrame = function (iframeId) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        this.logger.info("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            if (document.createElement &&
                document.documentElement &&
                (window.navigator.userAgent.indexOf("MSIE 5.0") === -1)) {
                var ifr = document.createElement("iframe");
                ifr.setAttribute("id", iframeId);
                ifr.style.visibility = "hidden";
                ifr.style.position = "absolute";
                ifr.style.width = ifr.style.height = "0";
                ifr.style.border = "0";
                adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
            }
            else if (document.body && document.body.insertAdjacentHTML) {
                document.body.insertAdjacentHTML("beforeend", "<iframe name='" + iframeId + "' id='" + iframeId + "' style='display:none'></iframe>");
            }
            if (window.frames && window.frames[iframeId]) {
                adalFrame = window.frames[iframeId];
            }
        }
        return adalFrame;
    };
    // #endregion
    // #region General Helpers
    /**
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     */
    UserAgentApplication.prototype.navigateWindow = function (urlNavigate, popupWindow) {
        // Navigate if valid URL
        if (urlNavigate && !StringUtils_1.StringUtils.isEmpty(urlNavigate)) {
            var navigateWindow = popupWindow ? popupWindow : window;
            var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
            this.logger.infoPii(logMessage);
            navigateWindow.location.replace(urlNavigate);
        }
        else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * @hidden
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, scope, resolve, reject) {
        var _this = this;
        // track active renewals
        window.activeRenewals[scope] = expectedState;
        // initialize callbacks mapped array
        if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
        }
        // indexing on the current state, push the callback params to callbacks mapped
        window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        // Store the server response in the current window??
        if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] =
                function (response, error) {
                    // reset active renewals
                    window.activeRenewals[scope] = null;
                    // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                    for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                        try {
                            if (error) {
                                window.promiseMappedToRenewStates[expectedState][i].reject(error);
                            }
                            else if (response) {
                                window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                            }
                            else {
                                throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                            }
                        }
                        catch (e) {
                            _this.logger.warning(e);
                        }
                    }
                    // reset
                    window.promiseMappedToRenewStates[expectedState] = null;
                    window.callbackMappedToRenewStates[expectedState] = null;
                };
        }
    };
    // #endregion
    // #region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        var _this = this;
        this.clearCache();
        this.account = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        this.authorityInstance.resolveEndpointsAsync().then(function (authority) {
            var urlNavigate = authority.EndSessionEndpoint
                ? authority.EndSessionEndpoint + "?" + logout
                : _this.authority + "oauth2/v2.0/logout?" + logout;
            _this.navigateWindow(urlNavigate);
        });
    };
    /**
     * @hidden
     * Clear all access tokens in the cache.
     * @ignore
     */
    UserAgentApplication.prototype.clearCache = function () {
        window.renewStates = [];
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(accessTokenItems[i].key));
        }
        this.cacheStorage.resetCacheItems();
        this.cacheStorage.clearCookie();
    };
    /**
     * @hidden
     * Clear a given access token from the cache.
     *
     * @param accessToken
     */
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this.cacheStorage.removeItem(JSON.stringify(token.key));
            }
        }
    };
    // #endregion
    // #region Response
    /**
     * @hidden
     * @ignore
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
        return this.urlContainsHash(hash);
    };
    UserAgentApplication.prototype.urlContainsHash = function (urlString) {
        var parameters = this.deserializeHash(urlString);
        return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
    };
    /**
     * @hidden
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.processCallBack = function (hash, stateInfo, parentCallback) {
        this.logger.info("Processing the callback from redirect response");
        // get the state info from the hash
        if (!stateInfo) {
            stateInfo = this.getResponseState(hash);
        }
        var response;
        var authErr;
        // Save the token info from the hash
        try {
            response = this.saveTokenFromHash(hash, stateInfo);
        }
        catch (err) {
            authErr = err;
        }
        // remove hash from the cache
        this.cacheStorage.removeItem(Constants_1.Constants.urlHash);
        try {
            // Clear the cookie in the hash
            this.cacheStorage.clearCookie();
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
                if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                    if (window.parent !== window) {
                        this.logger.verbose("Window is in iframe, acquiring token silently");
                    }
                    else {
                        this.logger.verbose("acquiring token interactive in progress");
                    }
                    response.tokenType = Constants_1.Constants.accessToken;
                }
                else if (stateInfo.requestType === Constants_1.Constants.login) {
                    response.tokenType = Constants_1.Constants.idToken;
                }
                if (!parentCallback) {
                    this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, response);
                    return;
                }
            }
            else if (!parentCallback) {
                this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, authErr, AuthResponse_1.buildResponseStateOnly(accountState));
                return;
            }
            parentCallback(response, authErr);
        }
        catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
        }
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        // retrieve the hash
        if (hash == null) {
            hash = window.location.hash;
        }
        var self = null;
        var isPopup = false;
        var isWindowOpenerMsal = false;
        // Check if the current window opened the iFrame/popup
        try {
            isWindowOpenerMsal = window.opener && window.opener.msal && window.opener.msal !== window.msal;
        }
        catch (err) {
            // err = SecurityError: Blocked a frame with origin "[url]" from accessing a cross-origin frame.
            isWindowOpenerMsal = false;
        }
        // Set the self to the window that created the popup/iframe
        if (isWindowOpenerMsal) {
            self = window.opener.msal;
            isPopup = true;
        }
        else if (window.parent && window.parent.msal) {
            self = window.parent.msal;
        }
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = self.getResponseState(hash);
        var tokenResponseCallback = null;
        self.logger.info("Returned from redirect url");
        // If parent window is the msal instance which opened the current window (iframe)
        if (this.parentIsMsal()) {
            tokenResponseCallback = window.parent.callbackMappedToRenewStates[stateInfo.state];
        }
        // Current window is window opener (popup)
        else if (isWindowOpenerMsal) {
            tokenResponseCallback = window.opener.callbackMappedToRenewStates[stateInfo.state];
        }
        // Redirect cases
        else {
            tokenResponseCallback = null;
            // if set to navigate to loginRequest page post login
            if (self.config.auth.navigateToLoginRequestUrl) {
                self.cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
                if (window.parent === window && !isPopup) {
                    window.location.href = self.cacheStorage.getItem(Constants_1.Constants.loginRequest, self.inCookie);
                }
                return;
            }
            else {
                window.location.hash = "";
            }
            if (!this.redirectCallbacksSet) {
                // We reached this point too early - cache hash, return and process in handleRedirectCallbacks
                self.cacheStorage.setItem(Constants_1.Constants.urlHash, hash);
                return;
            }
        }
        self.processCallBack(hash, stateInfo, tokenResponseCallback);
        // If current window is opener, close all windows
        if (isWindowOpenerMsal) {
            for (var i = 0; i < window.opener.openedWindows.length; i++) {
                window.opener.openedWindows[i].close();
            }
        }
    };
    /**
     * @hidden
     * Returns deserialized portion of URL hash
     * @param hash
     */
    UserAgentApplication.prototype.deserializeHash = function (urlFragment) {
        var hash = UrlUtils_1.UrlUtils.getHashFromUrl(urlFragment);
        return CryptoUtils_1.CryptoUtils.deserialize(hash);
    };
    /**
     * @hidden
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     */
    UserAgentApplication.prototype.getResponseState = function (hash) {
        var parameters = this.deserializeHash(hash);
        var stateResponse;
        if (!parameters) {
            throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
        }
        if (parameters.hasOwnProperty("state")) {
            stateResponse = {
                requestType: Constants_1.Constants.unknown,
                state: parameters.state,
                stateMatch: false
            };
        }
        else {
            throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
        }
        /*
         * async calls can fire iframe and login request at the same time if developer does not use the API as expected
         * incoming callback needs to be looked up to find the request type
         */
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.inCookie)) { // acquireTokenRedirect
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // external api requests may have many renewtoken requests for different resource
        if (!stateResponse.stateMatch) {
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
                if (statesInParentContext[i] === stateResponse.state) {
                    stateResponse.stateMatch = true;
                    break;
                }
            }
        }
        return stateResponse;
    };
    // #endregion
    // #region Token Processing (Extract to TokenProcessing.ts)
    /**
     * @hidden
     * Used to get token for the specified set of scopes from the cache
     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     */
    UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
        var accessTokenCacheItem = null;
        var scopes = serverAuthenticationRequest.scopes;
        // filter by clientId and account
        var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        // No match found after initial filtering
        if (tokenCacheItems.length === 0) {
            return null;
        }
        var filteredItems = [];
        // if no authority passed
        if (!serverAuthenticationRequest.authority) {
            // filter by scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes)) {
                    filteredItems.push(cacheItem);
                }
            }
            // if only one cached token found
            if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            }
            // if more than one cached token is found
            else if (filteredItems.length > 1) {
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
            // if no match found, check if there was a single authority used
            else {
                var authorityList = this.getUniqueAuthority(tokenCacheItems, "authority");
                if (authorityList.length > 1) {
                    throw ClientAuthError_1.ClientAuthError.createMultipleAuthoritiesInCacheError(scopes.toString());
                }
                serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(authorityList[0], this.config.auth.validateAuthority);
            }
        }
        // if an authority is passed in the API
        else {
            // filter by authority and scope
            for (var i = 0; i < tokenCacheItems.length; i++) {
                var cacheItem = tokenCacheItems[i];
                var cachedScopes = cacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.containsScope(cachedScopes, scopes) && UrlUtils_1.UrlUtils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
                    filteredItems.push(cacheItem);
                }
            }
            // no match
            if (filteredItems.length === 0) {
                return null;
            }
            // if only one cachedToken Found
            else if (filteredItems.length === 1) {
                accessTokenCacheItem = filteredItems[0];
            }
            else {
                // if more than one cached token is found
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > TimeUtils_1.TimeUtils.now() + offset)) {
                var idTokenObj = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
                if (!account) {
                    account = this.getAccount();
                    if (!account) {
                        throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                    }
                }
                var aState = this.getAccountState(serverAuthenticationRequest.state);
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.Constants.idToken : Constants_1.Constants.accessToken,
                    idToken: idTokenObj,
                    idTokenClaims: idTokenObj.claims,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(expired * 1000),
                    account: account,
                    accountState: aState
                };
                ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                return response;
            }
            else {
                this.cacheStorage.removeItem(JSON.stringify(filteredItems[0].key));
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * @hidden
     * Used to get a unique list of authorities from the cache
     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAuthority = function (accessTokenCacheItems, property) {
        var authorityList = [];
        var flags = [];
        accessTokenCacheItems.forEach(function (element) {
            if (element.key.hasOwnProperty(property) && (flags.indexOf(element.key[property]) === -1)) {
                flags.push(element.key[property]);
                authorityList.push(element.key[property]);
            }
        });
        return authorityList;
    };
    /**
     * @hidden
     * Check if ADAL id_token exists and return if exists.
     *
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
            return TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * @hidden
     * Acquires access token using a hidden iframe.
     * @ignore
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        var scope = scopes.join(" ").toLowerCase();
        this.logger.verbose("renewToken is called for scope:" + scope);
        var frameHandle = this.addHiddenIFrame("msalRenewFrame" + scope);
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalRenewFrame" + scope, scope);
    };
    /**
     * @hidden
     * Renews idtoken for app's own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("renewidToken is called");
        var frameHandle = this.addHiddenIFrame("msalIdTokenFrame");
        this.updateCacheEntries(serverAuthenticationRequest, account);
        this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        if (this.silentLogin) {
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
        }
        else {
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
        }
        // note: scope here is clientId
        this.registerCallback(serverAuthenticationRequest.state, this.clientId, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalIdTokenFrame", this.clientId);
    };
    /**
     * @hidden
     *
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo, idTokenObj) {
        var scope;
        var accessTokenResponse = tslib_1.__assign({}, response);
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
        var expiration;
        // if the response contains "scope"
        if (parameters.hasOwnProperty("scope")) {
            // read the scopes
            scope = parameters["scope"];
            var consentedScopes = scope.split(" ");
            // retrieve all access tokens from the cache, remove the dup scores
            var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
            for (var i = 0; i < accessTokenCacheItems.length; i++) {
                var accessTokenCacheItem = accessTokenCacheItems[i];
                if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                    var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                    if (ScopeSet_1.ScopeSet.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = TimeUtils_1.TimeUtils.parseExpiresIn(parameters[Constants_1.Constants.expiresIn]);
            expiration = TimeUtils_1.TimeUtils.now() + expiresIn;
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.accessToken], idTokenObj.rawIdToken, expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.accessToken];
            accessTokenResponse.scopes = consentedScopes;
        }
        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
        else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            expiration = Number(idTokenObj.expiration);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.idToken], parameters[Constants_1.Constants.idToken], expiration.toString(), clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.idToken];
        }
        if (expiration) {
            accessTokenResponse.expiresOn = new Date(expiration * 1000);
        }
        else {
            this.logger.error("Could not parse expiresIn parameter");
        }
        return accessTokenResponse;
    };
    /**
     * @hidden
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
        this.logger.info("State status:" + stateInfo.stateMatch + "; Request type:" + stateInfo.requestType);
        this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
        };
        var error;
        var hashParams = this.deserializeHash(hash);
        var authorityKey = "";
        var acquireTokenAccountKey = "";
        var idTokenObj = null;
        // If server returns an error
        if (hashParams.hasOwnProperty(Constants_1.Constants.errorDescription) || hashParams.hasOwnProperty(Constants_1.Constants.error)) {
            this.logger.infoPii("Error :" + hashParams[Constants_1.Constants.error] + "; Error description:" + hashParams[Constants_1.Constants.errorDescription]);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, hashParams[Constants_1.Constants.error]);
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, hashParams[Constants_1.Constants.errorDescription]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
                this.loginInProgress = false;
                this.cacheStorage.setItem(Constants_1.Constants.loginError, hashParams[Constants_1.Constants.errorDescription] + ":" + hashParams[Constants_1.Constants.error]);
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                this.acquireTokenInProgress = false;
                authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                var account = this.getAccount();
                var accountId = void 0;
                if (account && !StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                }
                acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            var _a = Constants_1.Constants.error, hashErr = hashParams[_a], _b = Constants_1.Constants.errorDescription, hashErrDesc = hashParams[_b];
            if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
            else {
                error = new ServerError_1.ServerError(hashParams[Constants_1.Constants.error], hashParams[Constants_1.Constants.errorDescription]);
            }
        }
        // If the server returns "Success"
        else {
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
                this.logger.info("State is right");
                if (hashParams.hasOwnProperty(Constants_1.Constants.sessionState)) {
                    this.cacheStorage.setItem(Constants_1.Constants.msalSessionState, hashParams[Constants_1.Constants.sessionState]);
                }
                response.accountState = this.getAccountState(stateInfo.state);
                var clientInfo = "";
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.accessToken)) {
                    this.logger.info("Fragment has access token");
                    this.acquireTokenInProgress = false;
                    // retrieve the id_token from response if present
                    if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                        idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                        response.idToken = idTokenObj;
                        response.idTokenClaims = idTokenObj.claims;
                    }
                    else {
                        idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.Constants.idTokenKey));
                        response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                        throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                    }
                    response.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = void 0;
                    if (response.account && !StringUtils_1.StringUtils.isEmpty(response.account.homeAccountIdentifier)) {
                        accountKey = response.account.homeAccountIdentifier;
                    }
                    else {
                        accountKey = Constants_1.Constants.no_account;
                    }
                    acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = Storage_1.Storage.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!StringUtils_1.StringUtils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        if (response.account && acquireTokenAccount && Account_1.Account.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!StringUtils_1.StringUtils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                    this.logger.info("Fragment has id token");
                    // login no longer in progress
                    this.loginInProgress = false;
                    // set the idToken
                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                    response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    this.account = Account_1.Account.createAccount(idTokenObj, new ClientInfo_1.ClientInfo(clientInfo));
                    response.account = this.account;
                    if (idTokenObj && idTokenObj.nonce) {
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        if (idTokenObj.nonce !== this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie)) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + idTokenObj.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie), idTokenObj.nonce);
                        }
                        // Save the token
                        else {
                            this.cacheStorage.setItem(Constants_1.Constants.idTokenKey, hashParams[Constants_1.Constants.idToken]);
                            this.cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(response, authority, hashParams, clientInfo, idTokenObj);
                        }
                    }
                    else {
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                        this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                        this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
                    }
                }
            }
            // State mismatch - unexpected/invalid state
            else {
                authorityKey = stateInfo.state;
                acquireTokenAccountKey = stateInfo.state;
                var expectedState = this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie);
                this.logger.error("State Mismatch.Expected State: " + expectedState + "," + "Actual State: " + stateInfo.state);
                error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                this.cacheStorage.setItem(Constants_1.Constants.msalError, error.errorCode);
                this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, error.errorMessage);
            }
        }
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + stateInfo.state, Constants_1.Constants.tokenRenewStatusCompleted);
        this.cacheStorage.removeAcquireTokenEntries(stateInfo.state);
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearCookie();
        }
        if (error) {
            throw error;
        }
        if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
        }
        return response;
    };
    /**
     * Set Authority when saving Token from the hash
     * @param state
     * @param inCookie
     * @param cacheStorage
     * @param idTokenObj
     * @param response
     */
    UserAgentApplication.prototype.populateAuthority = function (state, inCookie, cacheStorage, idTokenObj) {
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        var cachedAuthority = cacheStorage.getItem(authorityKey, inCookie);
        // retrieve the authority from cache and replace with tenantID
        return StringUtils_1.StringUtils.isEmpty(cachedAuthority) ? cachedAuthority : UrlUtils_1.UrlUtils.replaceTenantPath(cachedAuthority, idTokenObj.tenantId);
    };
    /* tslint:enable:no-string-literal */
    // #endregion
    // #region Account
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.Constants.idTokenKey);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
        if (!StringUtils_1.StringUtils.isEmpty(rawIdToken) && !StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * @hidden
     *
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return state;
    };
    /**
     * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
     */
    UserAgentApplication.prototype.getAllAccounts = function () {
        var accounts = [];
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier);
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
        }
        return this.getUniqueAccounts(accounts);
    };
    /**
     * @hidden
     *
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
        if (!accounts || accounts.length <= 1) {
            return accounts;
        }
        var flags = [];
        var uniqueAccounts = [];
        for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                flags.push(accounts[index].homeAccountIdentifier);
                uniqueAccounts.push(accounts[index]);
            }
        }
        return uniqueAccounts;
    };
    // #endregion
    // #region Scopes (Extract to Scopes.ts)
    /*
     * Note: "this" dependency in this section is minimal.
     * If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
     */
    /**
     * @hidden
     *
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     */
    UserAgentApplication.prototype.validateInputScope = function (scopes, scopesRequired) {
        if (!scopes) {
            if (scopesRequired) {
                throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
            }
            else {
                return;
            }
        }
        // Check that scopes is an array object (also throws error if scopes == null)
        if (!Array.isArray(scopes)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
        }
        // Check that scopes is not an empty array
        if (scopes.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
        }
        // Check that clientId is passed as single scope
        if (scopes.indexOf(this.clientId) > -1) {
            if (scopes.length > 1) {
                throw ClientConfigurationError_1.ClientConfigurationError.createClientIdSingleScopeError(scopes.toString());
            }
        }
    };
    /**
     * @hidden
     *
     * Extracts scope value from the state sent with the authentication request.
     * @param {string} state
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * @ignore
     * Appends extraScopesToConsent if passed
     * @param {@link AuthenticationParameters}
     */
    UserAgentApplication.prototype.appendScopes = function (request) {
        var scopes;
        if (request && request.scopes) {
            if (request.extraScopesToConsent) {
                scopes = request.scopes.concat(request.extraScopesToConsent);
            }
            else {
                scopes = request.scopes;
            }
        }
        return scopes;
    };
    // #endregion
    // #region Angular
    /**
     * @hidden
     *
     * Broadcast messages - Used only for Angular?  *
     * @param eventName
     * @param data
     */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * @hidden
     *
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param {@link Account} account
     * @param state
     * @return {@link AuthResponse} AuthResponse
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes, true);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), state);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
     * @hidden
     *
     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
     *
     * @param endpoint
     */
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        // process all protected resources and send the matched one
        if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this.config.framework.protectedResourceMap.get(key);
                }
            }
        }
        /*
         * default resource will be clientid if nothing specified
         * App will use idtoken for calls to itself
         * check if it's staring from http or https, needs to match with app host
         */
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            /*
             * in angular level, the url for $http interceptor call could be relative url,
             * if it's relative call, we'll treat it as app backend call.
             */
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * Return boolean flag to developer to help inform if login is in progress
     * @returns {boolean} true/false
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        var pendingCallback = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
        if (pendingCallback) {
            return true;
        }
        return this.loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.loginInProgress = loginInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.acquireTokenInProgress = acquireTokenInProgress;
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.config.system.logger;
    };
    // #endregion
    // #region Getters and Setters
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @returns {string} redirect URL
     *
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Use to get the current {@link Configuration} object in MSAL
     *
     * @returns {@link Configuration}
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
        }
        return this.config;
    };
    // #endregion
    // #region String Util (Should be extracted to Utils.ts)
    /**
     * @hidden
     * @ignore
     *
     * extract URI from the host
     *
     * @param {string} URI
     * @returns {string} host from the URI
     */
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utils function to create the Authentication
     * @param {@link account} account object
     * @param scopes
     * @param silentCall
     *
     * @returns {string} token type: id_token or access_token
     *
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
        /*
         * if account is passed and matches the account object/or set to getAccount() from cache
         * if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
         */
        var tokenType;
        // acquireTokenSilent
        if (silentCall) {
            if (Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
        }
        // all other cases
        else {
            if (!Account_1.Account.compareAccounts(accountObject, this.getAccount())) {
                tokenType = ResponseTypes.id_token_token;
            }
            else {
                tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
        }
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     * @hidden
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     * @hidden
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, UrlUtils_1.UrlUtils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Updates account, authority, and nonce in cache
     * @param serverAuthenticationRequest
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, loginStartPage) {
        // Cache account and authority
        if (loginStartPage) {
            // Cache the state, nonce, and login request data
            this.cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.loginError, "");
            this.cacheStorage.setItem(Constants_1.Constants.stateLogin, serverAuthenticationRequest.state, this.inCookie);
            this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
            this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
        }
        else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
        }
        // Cache authorityKey
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        // return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
        }
        else {
            accountId = Constants_1.Constants.no_account;
        }
        return accountId;
    };
    /**
     * @hidden
     * @ignore
     *
     * Construct 'tokenRequest' from the available data in adalIdToken
     * @param extraQueryParameters
     * @hidden
     */
    UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
        var tokenRequest = {
            scopes: [this.clientId],
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters
        };
        return tokenRequest;
    };
    // #endregion
    UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
        if (!config) { // if unset
            return null;
        }
        // if set then validate
        var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
        if (!applicationName || !applicationVersion || !telemetryEmitter) {
            throw ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config);
        }
        // if valid then construct
        var telemetryPlatform = {
            sdk: "msal.js",
            sdkVersion: Constants_1.libraryVersion(),
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter);
    };
    tslib_1.__decorate([
        resolveTokenOnlyIfOutOfIframe
    ], UserAgentApplication.prototype, "acquireTokenSilent", null);
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ScopeSet = /** @class */ (function () {
    function ScopeSet() {
    }
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        for (var i = 0; i < scopes.length; i++) {
            if (cachedScopes.indexOf(scopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    ScopeSet.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ScopeSet.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return ScopeSet;
}());
exports.ScopeSet = ScopeSet;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientConfigurationError_1 = __webpack_require__(4);
function validateClaimsRequest(request) {
    if (!request.claimsRequest) {
        return;
    }
    var claims;
    try {
        claims = JSON.parse(request.claimsRequest);
    }
    catch (e) {
        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
    }
    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
}
exports.validateClaimsRequest = validateClaimsRequest;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var TokenUtils = /** @class */ (function () {
    function TokenUtils() {
    }
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    TokenUtils.decodeJwt = function (jwtToken) {
        if (StringUtils_1.StringUtils.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            // this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    TokenUtils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = CryptoUtils_1.CryptoUtils.base64Decode(base64IdToken);
            if (!base64Decoded) {
                // this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            // this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var StringUtils_1 = __webpack_require__(1);
/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
var Account = /** @class */ (function () {
    /**
     * Creates an Account Object
     * @praram accountIdentifier
     * @param homeAccountIdentifier
     * @param userName
     * @param name
     * @param idToken
     * @param sid
     * @param environment
     */
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        // will be deprecated soon
        this.idToken = idTokenClaims;
        this.idTokenClaims = idTokenClaims;
        this.sid = sid;
        this.environment = environment;
    }
    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    Account.createAccount = function (idToken, clientInfo) {
        // create accountIdentifier
        var accountIdentifier = idToken.objectId || idToken.subject;
        // create homeAccountIdentifier
        var uid = clientInfo ? clientInfo.uid : "";
        var utid = clientInfo ? clientInfo.utid : "";
        var homeAccountIdentifier;
        if (!StringUtils_1.StringUtils.isEmpty(uid) && !StringUtils_1.StringUtils.isEmpty(utid)) {
            homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
        }
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
    };
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Account.compareAccounts = function (a1, a2) {
        if (!a1 || !a2) {
            return false;
        }
        if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                return true;
            }
        }
        return false;
    };
    return Account;
}());
exports.Account = Account;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Authority_1 = __webpack_require__(8);
var XHRClient_1 = __webpack_require__(18);
var Constants_1 = __webpack_require__(2);
/**
 * @hidden
 */
var AadAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(AadAuthority, _super);
    function AadAuthority(authority, validateAuthority) {
        return _super.call(this, authority, validateAuthority) || this;
    }
    Object.defineProperty(AadAuthority.prototype, "AadInstanceDiscoveryEndpointUrl", {
        get: function () {
            return AadAuthority.AadInstanceDiscoveryEndpoint + "?api-version=1.0&authorization_endpoint=" + this.CanonicalAuthority + "oauth2/v2.0/authorize";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AadAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.Aad;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    AadAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var client;
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                client = new XHRClient_1.XhrClient();
                return [2 /*return*/, client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
                        .then(function (response) {
                        return response.tenant_discovery_endpoint;
                    })];
            });
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return Constants_1.AADTrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /* async: */ true);
            if (enableCaching) {
                /*
                 * TODO: (shivb) ensure that this can be cached
                 * xhr.setRequestHeader("Cache-Control", "Public");
                 */
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                var jsonResponse;
                try {
                    jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                resolve(jsonResponse);
            };
            xhr.onerror = function (ev) {
                reject(xhr.status);
            };
            if (method === "GET") {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse.error) {
                return jsonResponse.error;
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(17);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(4);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(authority);
        var pathSegments = urlComponents.PathSegments;
        if (pathSegments.length < 3) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.b2cAuthorityUriInvalidPath;
        }
        _this.CanonicalAuthority = "https://" + urlComponents.HostNameAndPort + "/" + pathSegments[0] + "/" + pathSegments[1] + "/" + pathSegments[2] + "/";
        return _this;
    }
    Object.defineProperty(B2cAuthority.prototype, "AuthorityType", {
        get: function () {
            return Authority_1.AuthorityType.B2C;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a promise with the TenantDiscoveryEndpoint
     */
    B2cAuthority.prototype.GetOpenIdConfigurationEndpointAsync = function () {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.IsValidationEnabled || this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
                    return [2 /*return*/, this.DefaultOpenIdConfigurationEndpoint];
                }
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation;
            });
        });
    };
    B2cAuthority.B2C_PREFIX = "tfp";
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Logger_1 = __webpack_require__(10);
var UrlUtils_1 = __webpack_require__(5);
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    postLogoutRedirectUri: function () { return UrlUtils_1.UrlUtils.getDefaultRedirectUri(); },
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET,
    navigateFrameWait: NAVIGATE_FRAME_WAIT
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param TAuthOptions
 * @param TCacheOptions
 * @param TSystemOptions
 * @param TFrameworkOptions
 *
 * @returns TConfiguration object
 */
function buildConfiguration(_a) {
    var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
    var overlayedConfig = {
        auth: tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS, auth),
        cache: tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS, cache),
        system: tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS, system),
        framework: tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS, framework)
    };
    return overlayedConfig;
}
exports.buildConfiguration = buildConfiguration;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var ServerError_1 = __webpack_require__(11);
exports.InteractionRequiredAuthErrorMessage = {
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
    },
    loginRequired: {
        code: "login_required"
    },
};
/**
 * Error thrown when the user is required to perform an interactive token request.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
        var interactionRequiredCodes = [
            exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
            exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
            exports.InteractionRequiredAuthErrorMessage.loginRequired.code
        ];
        return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
    };
    InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
    };
    return InteractionRequiredAuthError;
}(ServerError_1.ServerError));
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function buildResponseStateOnly(state) {
    return {
        uniqueId: "",
        tenantId: "",
        tokenType: "",
        idToken: null,
        idTokenClaims: null,
        accessToken: "",
        scopes: null,
        expiresOn: null,
        account: null,
        accountState: state
    };
}
exports.buildResponseStateOnly = buildResponseStateOnly;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var B2cAuthority_1 = __webpack_require__(19);
var Constants_1 = __webpack_require__(2);
var TelemetryConstants_1 = __webpack_require__(9);
var CryptoUtils_1 = __webpack_require__(3);
var UrlUtils_1 = __webpack_require__(5);
exports.scrubTenantFromUri = function (uri) {
    var url = UrlUtils_1.UrlUtils.GetUrlComponents(uri);
    // validate trusted host
    if (!Constants_1.AADTrustedHostList[url.HostNameAndPort.toLocaleLowerCase()]) {
        // Should this return null or what was passed?
        return null;
    }
    var pathParams = url.PathSegments;
    if (pathParams && pathParams.length >= 2) {
        var tenantPosition = pathParams[1] === B2cAuthority_1.B2cAuthority.B2C_PREFIX ? 2 : 1;
        if (tenantPosition < pathParams.length) {
            pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
        }
    }
    return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
};
exports.hashPersonalIdentifier = function (valueToHash) {
    /*
     * TODO sha256 this
     * Current test runner is being funny with node libs that are webpacked anyway
     * need a different solution
     */
    return CryptoUtils_1.CryptoUtils.base64Encode(valueToHash);
};
exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(12);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(10);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(10);
exports.LogLevel = Logger_2.LogLevel;
var Account_1 = __webpack_require__(16);
exports.Account = Account_1.Account;
var Constants_1 = __webpack_require__(2);
exports.Constants = Constants_1.Constants;
var Authority_1 = __webpack_require__(8);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(12);
exports.CacheResult = UserAgentApplication_2.CacheResult;
var Configuration_1 = __webpack_require__(20);
exports.CacheLocation = Configuration_1.CacheLocation;
exports.Configuration = Configuration_1.Configuration;
var AuthenticationParameters_1 = __webpack_require__(14);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(22);
exports.AuthResponse = AuthResponse_1.AuthResponse;
// Errors
var AuthError_1 = __webpack_require__(7);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(6);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(11);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(4);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(21);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var UrlUtils_1 = __webpack_require__(5);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = UrlUtils_1.UrlUtils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.homeAccountIdentifier = homeAccountIdentifier;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var AuthenticationParameters_1 = __webpack_require__(14);
var Constants_1 = __webpack_require__(2);
var ClientConfigurationError_1 = __webpack_require__(4);
var StringUtils_1 = __webpack_require__(1);
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
var ServerRequestParameters = /** @class */ (function () {
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    function ServerRequestParameters(authority, clientId, scope, responseType, redirectUri, state) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        if (!scope) {
            this.scopes = [clientId];
        }
        else {
            this.scopes = scope.slice();
        }
        this.nonce = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.state = state && !StringUtils_1.StringUtils.isEmpty(state) ? CryptoUtils_1.CryptoUtils.createNewGuid() + "|" + state : CryptoUtils_1.CryptoUtils.createNewGuid();
        // TODO: Change this to user passed vs generated with the new PR
        this.correlationId = CryptoUtils_1.CryptoUtils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Constants_1.libraryVersion();
        this.responseType = responseType;
        this.redirectUri = redirectUri;
    }
    Object.defineProperty(ServerRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    ServerRequestParameters.prototype.populateQueryParams = function (account, request, adalIdTokenObject) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.validatePromptParameter(request.prompt);
                this.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                AuthenticationParameters_1.validateClaimsRequest(request);
                this.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (ServerRequestParameters.isSSOParam(request)) {
                queryParameters = this.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = this.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        /*
         * adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
         * this.logger.verbose("Calling addHint parameters");
         */
        queryParameters = this.addHintParameters(account, queryParameters);
        // sanity check for developer passed extraQueryParameters
        var eQParams;
        if (request) {
            eQParams = this.sanitizeEQParams(request);
        }
        // Populate the extraQueryParameters to be sent to the server
        this.queryParameters = ServerRequestParameters.generateQueryParametersString(queryParameters);
        this.extraQueryParameters = ServerRequestParameters.generateQueryParametersString(eQParams);
    };
    // #region QueryParam helpers
    /**
     * @hidden
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    ServerRequestParameters.prototype.validatePromptParameter = function (prompt) {
        if (!([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) >= 0)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    // TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var serverReqParam = {};
        // if account info is passed, account.sid > account.login_hint
        if (request) {
            if (request.account) {
                var account = request.account;
                if (account.sid) {
                    ssoType = Constants_1.SSOTypes.SID;
                    ssoData = account.sid;
                }
                else if (account.userName) {
                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                    ssoData = account.userName;
                }
            }
            // sid from request
            else if (request.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = request.loginHint;
            }
        }
        // adalIdToken retrieved from cache
        else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                ssoData = idTokenObject.upn;
            }
            else {
                ssoType = Constants_1.SSOTypes.ORGANIZATIONS;
                ssoData = null;
            }
        }
        serverReqParam = this.addSSOParameter(ssoType, ssoData);
        // add the HomeAccountIdentifier info/ domain_hint
        if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, serverReqParam);
        }
        return serverReqParam;
    };
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    ServerRequestParameters.prototype.addHintParameters = function (account, qParams) {
        /*
         * This is a final check for all queryParams added so far; preference order: sid > login_hint
         * sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
         */
        if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && this.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
                var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !StringUtils_1.StringUtils.isEmpty(account.userName);
                if (populateLoginHint) {
                    qParams = this.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
            var populateReqParams = !qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ];
            if (populateReqParams) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
        }
        return qParams;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    ServerRequestParameters.prototype.addSSOParameter = function (ssoType, ssoData, ssoParam) {
        if (!ssoParam) {
            ssoParam = {};
        }
        if (!ssoData) {
            return ssoParam;
        }
        switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ORGANIZATIONS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                break;
            }
            case Constants_1.SSOTypes.CONSUMERS: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                break;
            }
            case Constants_1.SSOTypes.HOMEACCOUNT_ID: {
                var homeAccountId = ssoData.split(".");
                var uid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[0]);
                var utid = CryptoUtils_1.CryptoUtils.base64Decode(homeAccountId[1]);
                // TODO: domain_req and login_req are not needed according to eSTS team
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = uid;
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = utid;
                if (utid === Constants_1.Constants.consumersUtid) {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.CONSUMERS;
                }
                else {
                    ssoParam[Constants_1.SSOTypes.DOMAIN_HINT] = Constants_1.SSOTypes.ORGANIZATIONS;
                }
                break;
            }
            case Constants_1.SSOTypes.LOGIN_REQ: {
                ssoParam[Constants_1.SSOTypes.LOGIN_REQ] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.DOMAIN_REQ: {
                ssoParam[Constants_1.SSOTypes.DOMAIN_REQ] = ssoData;
                break;
            }
        }
        return ssoParam;
    };
    /**
     * @hidden
     * @ignore
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    ServerRequestParameters.prototype.sanitizeEQParams = function (request) {
        var eQParams = request.extraQueryParameters;
        if (!eQParams) {
            return null;
        }
        if (request.claimsRequest) {
            // this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        Constants_1.BlacklistedEQParams.forEach(function (param) {
            if (eQParams[param]) {
                // this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                delete eQParams[param];
            }
        });
        return eQParams;
    };
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    ServerRequestParameters.generateQueryParametersString = function (queryParameters) {
        var paramsString = null;
        if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
                if (paramsString == null) {
                    paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                }
                else {
                    paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                }
            });
        }
        return paramsString;
    };
    // #endregion
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    ServerRequestParameters.isSSOParam = function (request) {
        return request && (request.account || request.sid || request.loginHint);
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoUtils_1 = __webpack_require__(3);
var ClientAuthError_1 = __webpack_require__(6);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = CryptoUtils_1.CryptoUtils.base64Decode(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientAuthError_1 = __webpack_require__(6);
var TokenUtils_1 = __webpack_require__(15);
var StringUtils_1 = __webpack_require__(1);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (StringUtils_1.StringUtils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.claims = TokenUtils_1.TokenUtils.extractIdToken(rawIdToken);
            if (this.claims) {
                if (this.claims.hasOwnProperty("iss")) {
                    this.issuer = this.claims["iss"];
                }
                if (this.claims.hasOwnProperty("oid")) {
                    this.objectId = this.claims["oid"];
                }
                if (this.claims.hasOwnProperty("sub")) {
                    this.subject = this.claims["sub"];
                }
                if (this.claims.hasOwnProperty("tid")) {
                    this.tenantId = this.claims["tid"];
                }
                if (this.claims.hasOwnProperty("ver")) {
                    this.version = this.claims["ver"];
                }
                if (this.claims.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.claims["preferred_username"];
                }
                if (this.claims.hasOwnProperty("name")) {
                    this.name = this.claims["name"];
                }
                if (this.claims.hasOwnProperty("nonce")) {
                    this.nonce = this.claims["nonce"];
                }
                if (this.claims.hasOwnProperty("exp")) {
                    this.expiration = this.claims["exp"];
                }
                if (this.claims.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.claims["home_oid"];
                }
                if (this.claims.hasOwnProperty("sid")) {
                    this.sid = this.claims["sid"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            /*
             * TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
             * Need to add better error handling here to account for being unable to decode jwts.
             */
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var AccessTokenCacheItem_1 = __webpack_require__(32);
var ClientConfigurationError_1 = __webpack_require__(4);
/**
 * @hidden
 */
var Storage = /** @class */ (function () {
    function Storage(cacheLocation) {
        if (Storage.instance) {
            return Storage.instance;
        }
        this.cacheLocation = cacheLocation;
        this.localStorageSupported = typeof window[this.cacheLocation] !== "undefined" && window[this.cacheLocation] != null;
        this.sessionStorageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] != null;
        Storage.instance = this;
        if (!this.localStorageSupported && !this.sessionStorageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoStorageSupportedError();
        }
        return Storage.instance;
    }
    // add value to storage
    Storage.prototype.setItem = function (key, value, enableCookieStorage) {
        if (window[this.cacheLocation]) {
            window[this.cacheLocation].setItem(key, value);
        }
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    // get one item by key from storage
    Storage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].getItem(key);
        }
        return null;
    };
    // remove value from storage
    Storage.prototype.removeItem = function (key) {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].removeItem(key);
        }
    };
    // clear storage (remove all items from it)
    Storage.prototype.clear = function () {
        if (window[this.cacheLocation]) {
            return window[this.cacheLocation].clear();
        }
    };
    Storage.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
        var results = [];
        var accessTokenCacheItem;
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.match(clientId) && key.match(homeAccountIdentifier)) {
                        var value = this.getItem(key);
                        if (value) {
                            accessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(JSON.parse(key), JSON.parse(value));
                            results.push(accessTokenCacheItem);
                        }
                    }
                }
            }
        }
        return results;
    };
    Storage.prototype.removeAcquireTokenEntries = function (state) {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if ((key.indexOf(Constants_1.CacheKeys.AUTHORITY) !== -1 || key.indexOf(Constants_1.CacheKeys.ACQUIRE_TOKEN_ACCOUNT) !== 1) && (!state || key.indexOf(state) !== -1)) {
                        var splitKey = key.split(Constants_1.Constants.resourceDelimiter);
                        var state_1 = void 0;
                        if (splitKey.length > 1) {
                            state_1 = splitKey[1];
                        }
                        if (state_1 && !this.tokenRenewalInProgress(state_1)) {
                            this.removeItem(key);
                            this.removeItem(Constants_1.Constants.renewStatus + state_1);
                            this.removeItem(Constants_1.Constants.stateLogin);
                            this.removeItem(Constants_1.Constants.stateAcquireToken);
                            this.setItemCookie(key, "", -1);
                        }
                    }
                }
            }
        }
        this.clearCookie();
    };
    Storage.prototype.tokenRenewalInProgress = function (stateValue) {
        var storage = window[this.cacheLocation];
        var renewStatus = storage[Constants_1.Constants.renewStatus + stateValue];
        return !(!renewStatus || renewStatus !== Constants_1.Constants.tokenRenewStatusInProgress);
    };
    Storage.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                        this.removeItem(key);
                    }
                }
            }
            this.removeAcquireTokenEntries();
        }
    };
    Storage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = cName + "=" + cValue + ";";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    Storage.prototype.getItemCookie = function (cName) {
        var name = cName + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    Storage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    Storage.prototype.clearCookie = function () {
        this.setItemCookie(Constants_1.Constants.nonceIdToken, "", -1);
        this.setItemCookie(Constants_1.Constants.stateLogin, "", -1);
        this.setItemCookie(Constants_1.Constants.loginRequest, "", -1);
        this.setItemCookie(Constants_1.Constants.stateAcquireToken, "", -1);
    };
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    Storage.generateAcquireTokenAccountKey = function (accountId, state) {
        return Constants_1.CacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter +
            ("" + accountId) + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    Storage.generateAuthorityKey = function (state) {
        return Constants_1.CacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expiresIn
     */
    TimeUtils.parseExpiresIn = function (expiresIn) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expiresIn) {
            expiresIn = "3599";
        }
        return parseInt(expiresIn, 10);
    };
    /**
     * return the current time in Unix time. Date.getTime() returns in milliseconds.
     */
    TimeUtils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var ResponseUtils = /** @class */ (function () {
    function ResponseUtils() {
    }
    ResponseUtils.setResponseIdToken = function (originalResponse, idTokenObj) {
        if (!originalResponse) {
            return null;
        }
        else if (!idTokenObj) {
            return originalResponse;
        }
        var exp = Number(idTokenObj.expiration);
        if (exp && !originalResponse.expiresOn) {
            originalResponse.expiresOn = new Date(exp * 1000);
        }
        return tslib_1.__assign({}, originalResponse, { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
    };
    return ResponseUtils;
}());
exports.ResponseUtils = ResponseUtils;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var AadAuthority_1 = __webpack_require__(17);
var B2cAuthority_1 = __webpack_require__(19);
var Authority_1 = __webpack_require__(8);
var ClientConfigurationError_1 = __webpack_require__(4);
var UrlUtils_1 = __webpack_require__(5);
var StringUtils_1 = __webpack_require__(1);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Parse the url and determine the type of authority
     */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = UrlUtils_1.UrlUtils.CanonicalizeUri(authorityUrl);
        var components = UrlUtils_1.UrlUtils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
     */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (StringUtils_1.StringUtils.isEmpty(authorityUrl)) {
            return null;
        }
        var type = AuthorityFactory.DetectAuthorityFromUrl(authorityUrl);
        // Depending on above detection, create the right type.
        switch (type) {
            case Authority_1.AuthorityType.B2C:
                return new B2cAuthority_1.B2cAuthority(authorityUrl, validateAuthority);
            case Authority_1.AuthorityType.Aad:
                return new AadAuthority_1.AadAuthority(authorityUrl, validateAuthority);
            default:
                throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
    };
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var DefaultEvent_1 = tslib_1.__importDefault(__webpack_require__(37));
// for use in cache events
var MSAL_CACHE_EVENT_VALUE_PREFIX = "msal.token";
var MSAL_CACHE_EVENT_NAME = "msal.cache_event";
var createEventKey = function (event) { return (event.telemetryCorrelationId + "-" + event.eventId + "-" + event.eventName); };
var TelemetryManager = /** @class */ (function () {
    function TelemetryManager(config, telemetryEmitter) {
        // correlation Id to list of events
        this.completedEvents = {};
        // event key to event
        this.inProgressEvents = {};
        // correlation id to map of eventname to count
        this.eventCountByCorrelationId = {};
        // Implement after API EVENT
        this.onlySendFailureTelemetry = false;
        // TODO THROW if bad options
        this.telemetryPlatform = config.platform;
        this.clientId = config.clientId;
        this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
        /*
         * TODO, when i get to wiring this through, think about what it means if
         * a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
         * optional?
         */
        this.telemetryEmitter = telemetryEmitter;
    }
    TelemetryManager.prototype.startEvent = function (event) {
        if (!this.telemetryEmitter) {
            return;
        }
        var eventKey = createEventKey(event);
        this.inProgressEvents[eventKey] = event;
    };
    TelemetryManager.prototype.stopEvent = function (event) {
        var eventKey = createEventKey(event);
        if (!this.telemetryEmitter || !this.inProgressEvents[eventKey]) {
            return;
        }
        event.stop();
        this.incrementEventCount(event);
        var completedEvents = this.completedEvents[event.telemetryCorrelationId];
        this.completedEvents[event.telemetryCorrelationId] = (completedEvents || []).concat([event]);
        delete this.inProgressEvents[eventKey];
    };
    TelemetryManager.prototype.flush = function (correlationId) {
        var _this = this;
        // If there is only unfinished events should this still return them?
        if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
            return;
        }
        var orphanedEvents = this.getOrphanedEvents(correlationId);
        orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
        var eventsToFlush = this.completedEvents[correlationId].concat(orphanedEvents);
        delete this.completedEvents[correlationId];
        var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
        delete this.eventCountByCorrelationId[correlationId];
        // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
        if (!eventsToFlush || !eventsToFlush.length) {
            return;
        }
        var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
        var eventsWithDefaultEvent = eventsToFlush.concat([defaultEvent]);
        this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
    };
    TelemetryManager.prototype.incrementEventCount = function (event) {
        var _a;
        /*
         * TODO, name cache event different?
         * if type is cache event, change name
         */
        var eventName = event.eventName;
        var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
        if (!eventCount) {
            this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                _a[eventName] = 1,
                _a);
        }
        else {
            eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
        }
    };
    TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
        var _this = this;
        return Object.keys(this.inProgressEvents)
            .reduce(function (memo, eventKey) {
            if (eventKey.indexOf(correlationId) !== -1) {
                var event = _this.inProgressEvents[eventKey];
                delete _this.inProgressEvents[eventKey];
                return memo.concat([event]);
            }
            return memo;
        }, []);
    };
    return TelemetryManager;
}());
exports.default = TelemetryManager;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(38));
var TelemetryUtils_1 = __webpack_require__(23);
var DefaultEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId) || this;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        // / Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent_1.default));
exports.default = DefaultEvent;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TelemetryConstants_1 = __webpack_require__(9);
var TelemetryConstants_2 = __webpack_require__(9);
var TelemetryUtils_1 = __webpack_require__(23);
var CryptoUtils_1 = __webpack_require__(3);
var TelemetryEvent = /** @class */ (function () {
    function TelemetryEvent(eventName, correlationId) {
        var _a;
        this.startTimestamp = Date.now();
        this.eventId = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.event = (_a = {},
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)] = eventName,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.START_TIME_KEY)] = this.startTimestamp,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = -1,
            _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
            _a);
    }
    TelemetryEvent.prototype.setElapsedTime = function (time) {
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.ELAPSED_TIME_KEY)] = time;
    };
    TelemetryEvent.prototype.stop = function () {
        // Set duration of event
        this.setElapsedTime(+Date.now() - +this.startTimestamp);
    };
    Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
        get: function () {
            return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
        },
        set: function (value) {
            this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "eventName", {
        get: function () {
            return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_2.EVENT_NAME_KEY)];
        },
        enumerable: true,
        configurable: true
    });
    TelemetryEvent.prototype.get = function () {
        return tslib_1.__assign({}, this.event, { eventId: this.eventId });
    };
    return TelemetryEvent;
}());
exports.default = TelemetryEvent;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL01zYWwvLi9zcmMvdXRpbHMvU3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9DcnlwdG9VdGlscy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3V0aWxzL1VybFV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQ2xpZW50QXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvZXJyb3IvQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9UZWxlbWV0cnlDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9TZXJ2ZXJFcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1VzZXJBZ2VudEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvU2NvcGVTZXQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9Ub2tlblV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjb3VudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2F1dGhvcml0eS9BYWRBdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9YSFJDbGllbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9hdXRob3JpdHkvQjJjQXV0aG9yaXR5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ29uZmlndXJhdGlvbi50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoUmVzcG9uc2UudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5VXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuS2V5LnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5WYWx1ZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQ2xpZW50SW5mby50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0lkVG9rZW4udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TdG9yYWdlLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjZXNzVG9rZW5DYWNoZUl0ZW0udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9UaW1lVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy91dGlscy9SZXNwb25zZVV0aWxzLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvYXV0aG9yaXR5L0F1dGhvcml0eUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5TWFuYWdlci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL3RlbGVtZXRyeS9EZWZhdWx0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy90ZWxlbWV0cnkvVGVsZW1ldHJ5RXZlbnQu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QUFFLENBQUM7d0JBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFBQyxTQUFTO29CQUNqRCxLQUFLLENBQUM7d0JBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxTQUFTO29CQUNqRDt3QkFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQUMsU0FBUzt5QkFBRTt3QkFDNUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLE1BQU07eUJBQUU7d0JBQ3RGLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxDQUFDLEdBQUcsRUFB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QUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUksU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJO1FBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FBRSxDQUFDLENBQUM7SUFDbEYsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEgsU0FBUyxPQUFPLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELFNBQVMsTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxT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LGNBQWMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxzQkFBVyxrREFBc0I7YUFBakM7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBRywrQ0FBMEIsQ0FBQyw0QkFBOEIsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7YUFFRCxVQUFrQyxLQUFhO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBRywrQ0FBMEIsQ0FBQyw0QkFBOEIsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNyRixDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLHFDQUFTO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHVDQUFzQixDQUFDLG1DQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRU0sNEJBQUcsR0FBVjtRQUNJLDRCQUNPLElBQUksQ0FBQyxLQUFLLElBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQ3ZCO0lBQ04sQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJtc2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJNc2FsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1zYWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI0KTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxzIHtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIHN0cmluZyBpcyBlbXB0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VtcHR5KHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhc3RyIHx8IDAgPT09IHN0ci5sZW5ndGgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IENhY2hlTG9jYXRpb24gfSBmcm9tIFwiLi4vQ29uZmlndXJhdGlvblwiO1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBDb25zdGFudHNcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XG4gICAgc3RhdGljIGdldCBlcnJvckRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiBcImVycm9yX2Rlc2NyaXB0aW9uXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcImVycm9yXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgc2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic2NvcGVcIjsgfVxuICAgIHN0YXRpYyBnZXQgY2xpZW50SW5mbygpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGllbnRfaW5mb1wiOyB9XG4gICAgc3RhdGljIGdldCBjbGllbnRJZCgpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGllbnRJZFwiOyB9XG5cbiAgICBzdGF0aWMgZ2V0IGlkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiaWRfdG9rZW5cIjsgfVxuICAgIHN0YXRpYyBnZXQgYWRhbElkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiYWRhbC5pZHRva2VuXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGFjY2Vzc1Rva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImFjY2Vzc190b2tlblwiOyB9XG4gICAgc3RhdGljIGdldCBleHBpcmVzSW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiZXhwaXJlc19pblwiOyB9XG4gICAgc3RhdGljIGdldCBzZXNzaW9uU3RhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic2Vzc2lvbl9zdGF0ZVwiOyB9XG4gICAgc3RhdGljIGdldCBjbGFpbXMoKTogc3RyaW5nIHsgcmV0dXJuIFwiY2xhaW1zXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgbXNhbENsaWVudEluZm8oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5jbGllbnQuaW5mb1wiOyB9XG4gICAgc3RhdGljIGdldCBtc2FsRXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5lcnJvclwiOyB9XG4gICAgc3RhdGljIGdldCBtc2FsRXJyb3JEZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmVycm9yLmRlc2NyaXB0aW9uXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgbXNhbFNlc3Npb25TdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnNlc3Npb24uc3RhdGVcIjsgfVxuICAgIHN0YXRpYyBnZXQgdG9rZW5LZXlzKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudG9rZW4ua2V5c1wiOyB9XG4gICAgc3RhdGljIGdldCBhY2Nlc3NUb2tlbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmFjY2Vzcy50b2tlbi5rZXlcIjsgfVxuICAgIHN0YXRpYyBnZXQgZXhwaXJhdGlvbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmV4cGlyYXRpb24ua2V5XCI7IH1cbiAgICBzdGF0aWMgZ2V0IHN0YXRlTG9naW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zdGF0ZS5sb2dpblwiOyB9XG4gICAgc3RhdGljIGdldCBzdGF0ZUFjcXVpcmVUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLmFjcXVpcmVUb2tlblwiOyB9XG4gICAgc3RhdGljIGdldCBzdGF0ZVJlbmV3KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUucmVuZXdcIjsgfVxuICAgIHN0YXRpYyBnZXQgbm9uY2VJZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubm9uY2UuaWR0b2tlblwiOyB9XG4gICAgc3RhdGljIGdldCB1c2VyTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVzZXJuYW1lXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGlkVG9rZW5LZXkoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5pZHRva2VuXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGxvZ2luUmVxdWVzdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmxvZ2luLnJlcXVlc3RcIjsgfVxuICAgIHN0YXRpYyBnZXQgbG9naW5FcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmxvZ2luLmVycm9yXCI7IH1cbiAgICBzdGF0aWMgZ2V0IHJlbmV3U3RhdHVzKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudG9rZW4ucmVuZXcuc3RhdHVzXCI7IH1cbiAgICBzdGF0aWMgZ2V0IHVybEhhc2goKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC51cmxIYXNoXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGFuZ3VsYXJMb2dpblJlcXVlc3QoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5hbmd1bGFyLmxvZ2luLnJlcXVlc3RcIjsgfVxuICAgIHN0YXRpYyBnZXQgbXNhbCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgbm9fYWNjb3VudCgpOiBzdHJpbmcgeyByZXR1cm4gXCJOT19BQ0NPVU5UXCI7IH1cbiAgICBzdGF0aWMgZ2V0IGNvbnN1bWVyc1V0aWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkXCI7IH1cbiAgICBzdGF0aWMgZ2V0IHVwbigpOiBzdHJpbmcgeyByZXR1cm4gXCJ1cG5cIjsgfVxuXG4gICAgc3RhdGljIGdldCBwcm9tcHRfc2VsZWN0X2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnByb21wdD1zZWxlY3RfYWNjb3VudFwiOyB9XG4gICAgc3RhdGljIGdldCBwcm9tcHRfbm9uZSgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PW5vbmVcIjsgfVxuICAgIHN0YXRpYyBnZXQgcHJvbXB0KCk6IHN0cmluZyB7IHJldHVybiBcInByb21wdFwiOyB9XG5cbiAgICBzdGF0aWMgZ2V0IHJlc3BvbnNlX21vZGVfZnJhZ21lbnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiJnJlc3BvbnNlX21vZGU9ZnJhZ21lbnRcIjsgfVxuICAgIHN0YXRpYyBnZXQgcmVzb3VyY2VEZWxpbWl0ZXIoKTogc3RyaW5nIHsgcmV0dXJuIFwifFwiOyB9XG5cbiAgICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNDYW5jZWxsZWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ2FuY2VsZWRcIjsgfVxuICAgIHN0YXRpYyBnZXQgdG9rZW5SZW5ld1N0YXR1c0NvbXBsZXRlZCgpOiBzdHJpbmcgeyByZXR1cm4gXCJDb21wbGV0ZWRcIjsgfVxuICAgIHN0YXRpYyBnZXQgdG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MoKTogc3RyaW5nIHsgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjsgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwV2lkdGg6IG51bWJlciA9IDQ4MztcbiAgICBzdGF0aWMgZ2V0IHBvcFVwV2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3BvcFVwV2lkdGg7IH1cbiAgICBzdGF0aWMgc2V0IHBvcFVwV2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wb3BVcFdpZHRoID0gd2lkdGg7XG4gICAgfVxuICAgIHByaXZhdGUgc3RhdGljIF9wb3BVcEhlaWdodDogbnVtYmVyID0gNjAwO1xuICAgIHN0YXRpYyBnZXQgcG9wVXBIZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3BvcFVwSGVpZ2h0OyB9XG4gICAgc3RhdGljIHNldCBwb3BVcEhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wb3BVcEhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGxvZ2luKCk6IHN0cmluZyB7IHJldHVybiBcIkxPR0lOXCI7IH1cbiAgICBzdGF0aWMgZ2V0IHJlbmV3VG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiUkVORVdfVE9LRU5cIjsgfVxuICAgIHN0YXRpYyBnZXQgdW5rbm93bigpOiBzdHJpbmcgeyByZXR1cm4gXCJVTktOT1dOXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgaG9tZUFjY291bnRJZGVudGlmaWVyKCk6IHN0cmluZyB7IHJldHVybiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiOyB9XG5cbiAgICBzdGF0aWMgZ2V0IGNvbW1vbigpOiBzdHJpbmcgeyByZXR1cm4gXCJjb21tb25cIjsgfVxuICAgIHN0YXRpYyBnZXQgb3BlbmlkU2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwib3BlbmlkXCI7IH1cbiAgICBzdGF0aWMgZ2V0IHByb2ZpbGVTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9maWxlXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgY2FjaGVMb2NhdGlvbkxvY2FsKCk6IENhY2hlTG9jYXRpb24geyByZXR1cm4gXCJsb2NhbFN0b3JhZ2VcIjsgfVxuICAgIHN0YXRpYyBnZXQgY2FjaGVMb2NhdGlvblNlc3Npb24oKTogQ2FjaGVMb2NhdGlvbiB7IHJldHVybiBcInNlc3Npb25TdG9yYWdlXCI7IH1cblxuICAgIHN0YXRpYyBnZXQgaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QoKTogSW50ZXJhY3Rpb25UeXBlIHsgcmV0dXJuIFwicmVkaXJlY3RJbnRlcmFjdGlvblwiOyB9XG4gICAgc3RhdGljIGdldCBpbnRlcmFjdGlvblR5cGVQb3B1cCgpOiBJbnRlcmFjdGlvblR5cGUgeyByZXR1cm4gXCJwb3B1cEludGVyYWN0aW9uXCI7IH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBDYWNoZUtleXMgZm9yICdhdXRob3JpdHknIGFuZCAnYWNjb3VudCdcbiAqL1xuZXhwb3J0IGNvbnN0IENhY2hlS2V5cyA9IHtcbiAgICBBVVRIT1JJVFk6IFwibXNhbC5hdXRob3JpdHlcIixcbiAgICBBQ1FVSVJFX1RPS0VOX0FDQ09VTlQ6IFwibXNhbC5hY3F1aXJlVG9rZW5BY2NvdW50XCJcbn07XG5cbmV4cG9ydCBjb25zdCBBQURUcnVzdGVkSG9zdExpc3QgPSAge1xuICAgIFwibG9naW4ud2luZG93cy5uZXRcIjogXCJsb2dpbi53aW5kb3dzLm5ldFwiLFxuICAgIFwibG9naW4uY2hpbmFjbG91ZGFwaS5jblwiOiBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIixcbiAgICBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCI6IFwibG9naW4uY2xvdWRnb3ZhcGkudXNcIixcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5jb21cIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCIsXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIixcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqIFNTTyBUeXBlcyAtIGdlbmVyYXRlZCB0byBwb3B1bGF0ZSBoaW50c1xuICovXG5leHBvcnQgY29uc3QgU1NPVHlwZXMgPSB7XG4gICAgQUNDT1VOVDogXCJhY2NvdW50XCIsXG4gICAgU0lEOiBcInNpZFwiLFxuICAgIExPR0lOX0hJTlQ6IFwibG9naW5faGludFwiLFxuICAgIElEX1RPS0VOOiBcImlkX3Rva2VuXCIsXG4gICAgRE9NQUlOX0hJTlQ6IFwiZG9tYWluX2hpbnRcIixcbiAgICBPUkdBTklaQVRJT05TOiBcIm9yZ2FuaXphdGlvbnNcIixcbiAgICBDT05TVU1FUlM6IFwiY29uc3VtZXJzXCIsXG4gICAgQUNDT1VOVF9JRDogXCJhY2NvdW50SWRlbnRpZmllclwiLFxuICAgIEhPTUVBQ0NPVU5UX0lEOiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiLFxuICAgIExPR0lOX1JFUTogXCJsb2dpbl9yZXFcIixcbiAgICBET01BSU5fUkVROiBcImRvbWFpbl9yZXFcIlxufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBCbGFja2xpc3RlZEVRUGFyYW1zID0gW1xuICAgIFNTT1R5cGVzLlNJRCxcbiAgICBTU09UeXBlcy5MT0dJTl9ISU5UXG5dO1xuXG5leHBvcnQgdHlwZSBJbnRlcmFjdGlvblR5cGUgPSBcInJlZGlyZWN0SW50ZXJhY3Rpb25cIiB8IFwicG9wdXBJbnRlcmFjdGlvblwiO1xuXG4vKipcbiAqIHdlIGNvbnNpZGVyZWQgbWFraW5nIHRoaXMgXCJlbnVtXCIgaW4gdGhlIHJlcXVlc3QgaW5zdGVhZCBvZiBzdHJpbmcsIGhvd2V2ZXIgaXQgbG9va3MgbGlrZSB0aGUgYWxsb3dlZCBsaXN0IG9mXG4gKiBwcm9tcHQgdmFsdWVzIGtlcHQgY2hhbmdpbmcgb3ZlciBwYXN0IGNvdXBsZSBvZiB5ZWFycy4gVGhlcmUgYXJlIHNvbWUgdW5kb2N1bWVudGVkIHByb21wdCB2YWx1ZXMgZm9yIHNvbWVcbiAqIGludGVybmFsIHBhcnRuZXJzIHRvbywgaGVuY2UgdGhlIGNob2ljZSBvZiBnZW5lcmljIFwic3RyaW5nXCIgdHlwZSBpbnN0ZWFkIG9mIHRoZSBcImVudW1cIlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgUHJvbXB0U3RhdGUgPSB7XG4gICAgTE9HSU46IFwibG9naW5cIixcbiAgICBTRUxFQ1RfQUNDT1VOVDogXCJzZWxlY3RfYWNjb3VudFwiLFxuICAgIENPTlNFTlQ6IFwiY29uc2VudFwiLFxuICAgIE5PTkU6IFwibm9uZVwiLFxufTtcblxuLyoqXG4gKiBNU0FMIEpTIExpYnJhcnkgVmVyc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlicmFyeVZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCIxLjEuM1wiO1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ3J5cHRvVXRpbHMge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByYW5kb20gR1VJRCAtIHVzZWQgdG8gcG9wdWxhdGUgc3RhdGU/XG4gICAgICogQHJldHVybnMgc3RyaW5nIChHVUlEKVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVOZXdHdWlkKCk6IHN0cmluZyB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFJGQzQxMjI6IFRoZSB2ZXJzaW9uIDQgVVVJRCBpcyBtZWFudCBmb3IgZ2VuZXJhdGluZyBVVUlEcyBmcm9tIHRydWx5LXJhbmRvbSBvclxuICAgICAgICAgKiBwc2V1ZG8tcmFuZG9tIG51bWJlcnMuXG4gICAgICAgICAqIFRoZSBhbGdvcml0aG0gaXMgYXMgZm9sbG93czpcbiAgICAgICAgICogICAgIFNldCB0aGUgdHdvIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoYml0cyA2IGFuZCA3KSBvZiB0aGVcbiAgICAgICAgICogICAgICAgIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgdG8gemVybyBhbmQgb25lLCByZXNwZWN0aXZlbHkuXG4gICAgICAgICAqICAgICBTZXQgdGhlIGZvdXIgbW9zdCBzaWduaWZpY2FudCBiaXRzIChiaXRzIDEyIHRocm91Z2ggMTUpIG9mIHRoZVxuICAgICAgICAgKiAgICAgICAgdGltZV9oaV9hbmRfdmVyc2lvbiBmaWVsZCB0byB0aGUgNC1iaXQgdmVyc2lvbiBudW1iZXIgZnJvbVxuICAgICAgICAgKiAgICAgICAgU2VjdGlvbiA0LjEuMy4gVmVyc2lvbjRcbiAgICAgICAgICogICAgIFNldCBhbGwgdGhlIG90aGVyIGJpdHMgdG8gcmFuZG9tbHkgKG9yIHBzZXVkby1yYW5kb21seSkgY2hvc2VuXG4gICAgICAgICAqICAgICB2YWx1ZXMuXG4gICAgICAgICAqIFVVSUQgICAgICAgICAgICAgICAgICAgPSB0aW1lLWxvdyBcIi1cIiB0aW1lLW1pZCBcIi1cInRpbWUtaGlnaC1hbmQtdmVyc2lvbiBcIi1cImNsb2NrLXNlcS1yZXNlcnZlZCBhbmQgbG93KDJoZXhPY3RldClcIi1cIiBub2RlXG4gICAgICAgICAqIHRpbWUtbG93ICAgICAgICAgICAgICAgPSA0aGV4T2N0ZXRcbiAgICAgICAgICogdGltZS1taWQgICAgICAgICAgICAgICA9IDJoZXhPY3RldFxuICAgICAgICAgKiB0aW1lLWhpZ2gtYW5kLXZlcnNpb24gID0gMmhleE9jdGV0XG4gICAgICAgICAqIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgPSBoZXhPY3RldDpcbiAgICAgICAgICogY2xvY2stc2VxLWxvdyAgICAgICAgICA9IGhleE9jdGV0XG4gICAgICAgICAqIG5vZGUgICAgICAgICAgICAgICAgICAgPSA2aGV4T2N0ZXRcbiAgICAgICAgICogRm9ybWF0OiB4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcbiAgICAgICAgICogeSBjb3VsZCBiZSAxMDAwLCAxMDAxLCAxMDEwLCAxMDExIHNpbmNlIG1vc3Qgc2lnbmlmaWNhbnQgdHdvIGJpdHMgbmVlZHMgdG8gYmUgMTBcbiAgICAgICAgICogeSB2YWx1ZXMgYXJlIDgsIDksIEEsIEJcbiAgICAgICAgICovXG5cbiAgICAgICAgY29uc3QgY3J5cHRvT2JqOiBDcnlwdG8gPSB3aW5kb3cuY3J5cHRvOyAvLyBmb3IgSUUgMTFcbiAgICAgICAgaWYgKGNyeXB0b09iaiAmJiBjcnlwdG9PYmouZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBidWZmZXI6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgICAgICBjcnlwdG9PYmouZ2V0UmFuZG9tVmFsdWVzKGJ1ZmZlcik7XG5cbiAgICAgICAgICAgIC8vIGJ1ZmZlcls2XSBhbmQgYnVmZmVyWzddIHJlcHJlc2VudHMgdGhlIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQuIFdlIHdpbGwgc2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoNCB0aHJvdWdoIDcpIG9mIGJ1ZmZlcls2XSB0byByZXByZXNlbnQgZGVjaW1hbCBudW1iZXIgNCAoVVVJRCB2ZXJzaW9uIG51bWJlcikuXG4gICAgICAgICAgICBidWZmZXJbNl0gfD0gMHg0MDsgLy8gYnVmZmVyWzZdIHwgMDEwMDAwMDAgd2lsbCBzZXQgdGhlIDYgYml0IHRvIDEuXG4gICAgICAgICAgICBidWZmZXJbNl0gJj0gMHg0ZjsgLy8gYnVmZmVyWzZdICYgMDEwMDExMTEgd2lsbCBzZXQgdGhlIDQsIDUsIGFuZCA3IGJpdCB0byAwIHN1Y2ggdGhhdCBiaXRzIDQtNyA9PSAwMTAwID0gXCI0XCIuXG5cbiAgICAgICAgICAgIC8vIGJ1ZmZlcls4XSByZXByZXNlbnRzIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIGZpZWxkLiBXZSB3aWxsIHNldCB0aGUgdHdvIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoNiBhbmQgNykgb2YgdGhlIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgdG8gemVybyBhbmQgb25lLCByZXNwZWN0aXZlbHkuXG4gICAgICAgICAgICBidWZmZXJbOF0gfD0gMHg4MDsgLy8gYnVmZmVyWzhdIHwgMTAwMDAwMDAgd2lsbCBzZXQgdGhlIDcgYml0IHRvIDEuXG4gICAgICAgICAgICBidWZmZXJbOF0gJj0gMHhiZjsgLy8gYnVmZmVyWzhdICYgMTAxMTExMTEgd2lsbCBzZXQgdGhlIDYgYml0IHRvIDAuXG5cbiAgICAgICAgICAgIHJldHVybiBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzBdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMV0pXG4gICAgICAgICAgICArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMl0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclszXSlcbiAgICAgICAgICAgICsgXCItXCIgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzRdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNV0pXG4gICAgICAgICAgICArIFwiLVwiICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls2XSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzddKVxuICAgICAgICAgICAgKyBcIi1cIiArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbOF0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls5XSlcbiAgICAgICAgICAgICsgXCItXCIgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzEwXSkgKyBDcnlwdG9VdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzExXSlcbiAgICAgICAgICAgICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMl0pICsgQ3J5cHRvVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxM10pXG4gICAgICAgICAgICArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTRdKSArIENyeXB0b1V0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTVdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGd1aWRIb2xkZXI6IHN0cmluZyA9IFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCI7XG4gICAgICAgICAgICBjb25zdCBoZXg6IHN0cmluZyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xuICAgICAgICAgICAgbGV0IHI6IG51bWJlciA9IDA7XG4gICAgICAgICAgICBsZXQgZ3VpZFJlc3BvbnNlOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSAhPT0gXCItXCIgJiYgZ3VpZEhvbGRlcltpXSAhPT0gXCI0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZWFjaCB4IGFuZCB5IG5lZWRzIHRvIGJlIHJhbmRvbVxuICAgICAgICAgICAgICAgICAgICByID0gTWF0aC5yYW5kb20oKSAgKiAxNiB8IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChndWlkSG9sZGVyW2ldID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgICAgICBndWlkUmVzcG9uc2UgKz0gaGV4W3JdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvY2stc2VxLWFuZC1yZXNlcnZlZCBmaXJzdCBoZXggaXMgZmlsdGVyZWQgYW5kIHJlbWFpbmluZyBoZXggdmFsdWVzIGFyZSByYW5kb21cbiAgICAgICAgICAgICAgICAgICAgciAmPSAweDM7IC8vIGJpdCBhbmQgd2l0aCAwMDExIHRvIHNldCBwb3MgMiB0byB6ZXJvID8wPz9cbiAgICAgICAgICAgICAgICAgICAgciB8PSAweDg7IC8vIHNldCBwb3MgMyB0byAxIGFzIDE/Pz9cbiAgICAgICAgICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBndWlkUmVzcG9uc2UgKz0gZ3VpZEhvbGRlcltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZ3VpZFJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjaW1hbCB0byBIZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSBudW1cbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjaW1hbFRvSGV4KG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGhleDogc3RyaW5nID0gbnVtLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgd2hpbGUgKGhleC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBoZXggPSBcIjBcIiArIGhleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGV4O1xuICAgIH1cbiAgICBcbiAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dCYXNlNjQvQmFzZTY0X2VuY29kaW5nX2FuZF9kZWNvZGluZyNTb2x1dGlvbl80XyVFMiU4MCU5M19lc2NhcGluZ190aGVfc3RyaW5nX2JlZm9yZV9lbmNvZGluZ19pdFxuXG4gICAgLyoqXG4gICAgICogZW5jb2Rpbmcgc3RyaW5nIHRvIGJhc2U2NCAtIHBsYXRmb3JtIHNwZWNpZmljIGNoZWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgYmFzZTY0RW5jb2RlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYnRvYShlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csXG4gICAgICAgICAgICBmdW5jdGlvbiB0b1NvbGlkQnl0ZXMobWF0Y2gsIHAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyKFwiMHhcIiArIHAxKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGVjb2RpbmcgYmFzZTY0IHRva2VuIC0gcGxhdGZvcm0gc3BlY2lmaWMgY2hlY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSBiYXNlNjRJZFRva2VuXG4gICAgICovXG4gICAgc3RhdGljIGJhc2U2NERlY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGlucHV0KS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgcmV0dXJuIFwiJVwiICsgKFwiMDBcIiArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICAgICAgfSkuam9pbihcIlwiKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZGVzZXJpYWxpemUgYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZShxdWVyeTogc3RyaW5nKTogYW55IHtcbiAgICAgICAgbGV0IG1hdGNoOiBBcnJheTxzdHJpbmc+OyAvLyBSZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcbiAgICAgICAgY29uc3QgcGwgPSAvXFwrL2c7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IC8oW14mPV0rKT0oW14mXSopL2c7XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChzOiBzdHJpbmcpID0+IGRlY29kZVVSSUNvbXBvbmVudChzLnJlcGxhY2UocGwsIFwiIFwiKSk7XG4gICAgICAgIGNvbnN0IG9iajoge30gPSB7fTtcbiAgICAgICAgbWF0Y2ggPSBzZWFyY2guZXhlYyhxdWVyeSk7XG4gICAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICAgICAgb2JqW2RlY29kZShtYXRjaFsxXSldID0gZGVjb2RlKG1hdGNoWzJdKTtcbiAgICAgICAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uL3V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vQ2xpZW50QXV0aEVycm9yXCI7XG5pbXBvcnQgeyBUZWxlbWV0cnlPcHRpb25zIH0gZnJvbSBcIi4uL0NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgPSB7XG4gICAgY29uZmlndXJhdGlvbk5vdFNldDoge1xuICAgICAgICBjb2RlOiBcIm5vX2NvbmZpZ19zZXRcIixcbiAgICAgICAgZGVzYzogXCJDb25maWd1cmF0aW9uIGhhcyBub3QgYmVlbiBzZXQuIFBsZWFzZSBjYWxsIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjb25zdHJ1Y3RvciB3aXRoIGEgdmFsaWQgQ29uZmlndXJhdGlvbiBvYmplY3QuXCJcbiAgICB9LFxuICAgIGludmFsaWRDYWNoZUxvY2F0aW9uOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWNoZV9sb2NhdGlvblwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZSBsb2NhdGlvbiBwcm92aWRlZCBpcyBub3QgdmFsaWQuXCJcbiAgICB9LFxuICAgIG5vU3RvcmFnZVN1cHBvcnRlZDoge1xuICAgICAgICBjb2RlOiBcImJyb3dzZXJfc3RvcmFnZV9ub3Rfc3VwcG9ydGVkXCIsXG4gICAgICAgIGRlc2M6IFwibG9jYWxTdG9yYWdlIGFuZCBzZXNzaW9uU3RvcmFnZSBhcmUgbm90IHN1cHBvcnRlZC5cIlxuICAgIH0sXG4gICAgbm9SZWRpcmVjdENhbGxiYWNrc1NldDoge1xuICAgICAgICBjb2RlOiBcIm5vX3JlZGlyZWN0X2NhbGxiYWNrc1wiLFxuICAgICAgICBkZXNjOiBcIk5vIHJlZGlyZWN0IGNhbGxiYWNrcyBoYXZlIGJlZW4gc2V0LiBQbGVhc2UgY2FsbCBzZXRSZWRpcmVjdENhbGxiYWNrcygpIHdpdGggdGhlIGFwcHJvcHJpYXRlIGZ1bmN0aW9uIGFyZ3VtZW50cyBiZWZvcmUgY29udGludWluZy4gXCIgK1xuICAgICAgICAgICAgXCJNb3JlIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvd2lraS9NU0FMLWJhc2ljcy5cIlxuICAgIH0sXG4gICAgaW52YWxpZENhbGxiYWNrT2JqZWN0OiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWxsYmFja19vYmplY3RcIixcbiAgICAgICAgZGVzYzogXCJUaGUgb2JqZWN0IHBhc3NlZCBmb3IgdGhlIGNhbGxiYWNrIHdhcyBpbnZhbGlkLiBcIiArXG4gICAgICAgICAgXCJNb3JlIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvd2lraS9NU0FMLWJhc2ljcy5cIlxuICAgIH0sXG4gICAgc2NvcGVzUmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJzY29wZXNfcmVxdWlyZWRcIixcbiAgICAgICAgZGVzYzogXCJTY29wZXMgYXJlIHJlcXVpcmVkIHRvIG9idGFpbiBhbiBhY2Nlc3MgdG9rZW4uXCJcbiAgICB9LFxuICAgIGVtcHR5U2NvcGVzOiB7XG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgZW1wdHkgYXJyYXkuXCJcbiAgICB9LFxuICAgIG5vbkFycmF5U2NvcGVzOiB7XG4gICAgICAgIGNvZGU6IFwibm9uYXJyYXlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgbm9uLWFycmF5LlwiXG4gICAgfSxcbiAgICBjbGllbnRTY29wZToge1xuICAgICAgICBjb2RlOiBcImNsaWVudGlkX2lucHV0X3Njb3Blc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkNsaWVudCBJRCBjYW4gb25seSBiZSBwcm92aWRlZCBhcyBhIHNpbmdsZSBzY29wZS5cIlxuICAgIH0sXG4gICAgaW52YWxpZFByb21wdDoge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfcHJvbXB0X3ZhbHVlXCIsXG4gICAgICAgIGRlc2M6IFwiU3VwcG9ydGVkIHByb21wdCB2YWx1ZXMgYXJlICdsb2dpbicsICdzZWxlY3RfYWNjb3VudCcsICdjb25zZW50JyBhbmQgJ25vbmUnXCIsXG4gICAgfSxcbiAgICBpbnZhbGlkQXV0aG9yaXR5VHlwZToge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfYXV0aG9yaXR5X3R5cGVcIixcbiAgICAgICAgZGVzYzogXCJUaGUgZ2l2ZW4gYXV0aG9yaXR5IGlzIG5vdCBhIHZhbGlkIHR5cGUgb2YgYXV0aG9yaXR5IHN1cHBvcnRlZCBieSBNU0FMLiBQbGVhc2Ugc2VlIGhlcmUgZm9yIHZhbGlkIGF1dGhvcml0aWVzOiA8aW5zZXJ0IFVSTCBoZXJlPi5cIlxuICAgIH0sXG4gICAgYXV0aG9yaXR5VXJpSW5zZWN1cmU6IHtcbiAgICAgICAgY29kZTogXCJhdXRob3JpdHlfdXJpX2luc2VjdXJlXCIsXG4gICAgICAgIGRlc2M6IFwiQXV0aG9yaXR5IFVSSXMgbXVzdCB1c2UgaHR0cHMuXCJcbiAgICB9LFxuICAgIGF1dGhvcml0eVVyaUludmFsaWRQYXRoOiB7XG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnZhbGlkX3BhdGhcIixcbiAgICAgICAgZGVzYzogXCJHaXZlbiBhdXRob3JpdHkgVVJJIGlzIGludmFsaWQuXCJcbiAgICB9LFxuICAgIHVuc3VwcG9ydGVkQXV0aG9yaXR5VmFsaWRhdGlvbjoge1xuICAgICAgICBjb2RlOiBcInVuc3VwcG9ydGVkX2F1dGhvcml0eV92YWxpZGF0aW9uXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGF1dGhvcml0eSB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgYXV0aG9yaXR5IHR5cGUuXCJcbiAgICB9LFxuICAgIGIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoOiB7XG4gICAgICAgIGNvZGU6IFwiYjJjX2F1dGhvcml0eV91cmlfaW52YWxpZF9wYXRoXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIFVSSSBmb3IgdGhlIEIyQyBhdXRob3JpdHkgaXMgaW52YWxpZC5cIlxuICAgIH0sXG4gICAgY2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImNsYWltc19yZXF1ZXN0X3BhcnNpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJDb3VsZCBub3QgcGFyc2UgdGhlIGdpdmVuIGNsYWltcyByZXF1ZXN0IG9iamVjdC5cIlxuICAgIH0sXG4gICAgZW1wdHlSZXF1ZXN0RXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJlbXB0eV9yZXF1ZXN0X2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiUmVxdWVzdCBvYmplY3QgaXMgcmVxdWlyZWQuXCJcbiAgICB9LFxuICAgIHRlbGVtZXRyeUNvbmZpZ0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidGVsZW1ldHJ5X2NvbmZpZ19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRlbGVtZXRyeSBjb25maWcgaXMgbm90IGNvbmZpZ3VyZWQgd2l0aCByZXF1aXJlZCB2YWx1ZXNcIlxuICAgIH1cbn07XG5cbi8qKlxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlcmUgaXMgYW4gZXJyb3IgaW4gY29uZmlndXJhdGlvbiBvZiB0aGUgLmpzIGxpYnJhcnkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgZXh0ZW5kcyBDbGllbnRBdXRoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTm9TZXRDb25maWd1cmF0aW9uRXJyb3IoKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jb25maWd1cmF0aW9uTm90U2V0LmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNvbmZpZ3VyYXRpb25Ob3RTZXQuZGVzY31gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZENhY2hlTG9jYXRpb25Db25maWdFcnJvcihnaXZlbkNhY2hlTG9jYXRpb246IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlTG9jYXRpb24uY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhY2hlTG9jYXRpb24uZGVzY30gUHJvdmlkZWQgdmFsdWU6ICR7Z2l2ZW5DYWNoZUxvY2F0aW9ufS4gUG9zc2libGUgdmFsdWVzIGFyZTogJHtDb25zdGFudHMuY2FjaGVMb2NhdGlvbkxvY2FsfSwgJHtDb25zdGFudHMuY2FjaGVMb2NhdGlvblNlc3Npb259LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVOb1N0b3JhZ2VTdXBwb3J0ZWRFcnJvcigpIDogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub1N0b3JhZ2VTdXBwb3J0ZWQuY29kZSxcbiAgICAgICAgICAgIENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9TdG9yYWdlU3VwcG9ydGVkLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9SZWRpcmVjdENhbGxiYWNrc1NldC5jb2RlLCBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vUmVkaXJlY3RDYWxsYmFja3NTZXQuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWxsYmFja09iamVjdEVycm9yKGNhbGxiYWNrT2JqZWN0OiBvYmplY3QpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWxsYmFja09iamVjdC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5pbnZhbGlkQ2FsbGJhY2tPYmplY3QuZGVzY30gR2l2ZW4gdmFsdWUgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uOiAke2NhbGxiYWNrT2JqZWN0fWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTY29wZXNOb25BcnJheUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXNWYWx1ZTogYW55KTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFByb21wdEVycm9yKHByb21wdFZhbHVlOiBhbnkpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZFByb21wdC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtwcm9tcHRWYWx1ZX1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuZGVzY30gR2l2ZW4gdmFsdWU6ICR7Y2xhaW1zUmVxdWVzdFBhcnNlRXJyb3J9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgZGVzYyB9ID0gQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5lbXB0eVJlcXVlc3RFcnJvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoY29kZSwgZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRlbGVtZXRyeUNvbmZpZ0Vycm9yKGNvbmZpZzogVGVsZW1ldHJ5T3B0aW9ucyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIGNvbnN0IHsgY29kZSwgZGVzYyB9ID0gQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS50ZWxlbWV0cnlDb25maWdFcnJvcjtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRLZXlzID0ge1xuICAgICAgICAgICAgYXBwbGljYXRpb25OYW1lOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgYXBwbGljYXRpb25WZXJzaW9uOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgdGVsZW1ldHJ5RW1pdHRlcjogXCJmdW5jdGlvblwiXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWlzc2luZ0tleXMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZEtleXMpXG4gICAgICAgICAgICAucmVkdWNlKChrZXlzLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnW2tleV0gPyBrZXlzIDoga2V5cy5jb25jYXQoWyBgJHtrZXl9ICgke3JlcXVpcmVkS2V5c1trZXldfSlgIF0pO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKGNvZGUsIGAke2Rlc2N9IG1pc2luZyB2YWx1ZXM6ICR7bWlzc2luZ0tleXMuam9pbihcIixcIil9YCk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi4vSVVyaVwiO1xuaW1wb3J0IHsgQ29uc3RhbnRzLCBTU09UeXBlcyB9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vU2VydmVyUmVxdWVzdFBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4uL1Njb3BlU2V0XCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL1N0cmluZ1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVXJsVXRpbHMge1xuXG4gICAgLyoqXG4gICAgICogZ2VuZXJhdGVzIHRoZSBVUkwgd2l0aCBRdWVyeVN0cmluZyBQYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJSZXF1ZXN0UGFyYW1zOiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzZXJ2ZXJSZXF1ZXN0UGFyYW1zKTtcbiAgICAgICAgbGV0IGF1dGhFbmRwb2ludDogc3RyaW5nID0gc2VydmVyUmVxdWVzdFBhcmFtcy5hdXRob3JpdHlJbnN0YW5jZS5BdXRob3JpemF0aW9uRW5kcG9pbnQ7XG4gICAgICAgIC8vIGlmIHRoZSBlbmRwb2ludCBhbHJlYWR5IGhhcyBxdWVyeXBhcmFtcywgbGV0cyBhZGQgdG8gaXQsIG90aGVyd2lzZSBhZGQgdGhlIGZpcnN0IG9uZVxuICAgICAgICBpZiAoYXV0aEVuZHBvaW50LmluZGV4T2YoXCI/XCIpIDwgMCkge1xuICAgICAgICAgICAgYXV0aEVuZHBvaW50ICs9IFwiP1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXV0aEVuZHBvaW50ICs9IFwiJlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdFVybDogc3RyaW5nID0gYCR7YXV0aEVuZHBvaW50fSR7c3RyLmpvaW4oXCImXCIpfWA7XG4gICAgICAgIHJldHVybiByZXF1ZXN0VXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIHRoZSBhcnJheSBvZiBhbGwgUXVlcnlTdHJpbmdQYXJhbXMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVOYXZpZ2F0aW9uVXJsU3RyaW5nKHNlcnZlclJlcXVlc3RQYXJhbXM6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IHNlcnZlclJlcXVlc3RQYXJhbXMuc2NvcGVzO1xuXG4gICAgICAgIGlmIChzY29wZXMuaW5kZXhPZihzZXJ2ZXJSZXF1ZXN0UGFyYW1zLmNsaWVudElkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHNjb3Blcy5wdXNoKHNlcnZlclJlcXVlc3RQYXJhbXMuY2xpZW50SWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0cjogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICBzdHIucHVzaChcInJlc3BvbnNlX3R5cGU9XCIgKyBzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnJlc3BvbnNlVHlwZSk7XG5cbiAgICAgICAgdGhpcy50cmFuc2xhdGVjbGllbnRJZFVzZWRJblNjb3BlKHNjb3Blcywgc2VydmVyUmVxdWVzdFBhcmFtcy5jbGllbnRJZCk7XG4gICAgICAgIHN0ci5wdXNoKFwic2NvcGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoU2NvcGVTZXQucGFyc2VTY29wZShzY29wZXMpKSk7XG4gICAgICAgIHN0ci5wdXNoKFwiY2xpZW50X2lkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMuY2xpZW50SWQpKTtcbiAgICAgICAgc3RyLnB1c2goXCJyZWRpcmVjdF91cmk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5yZWRpcmVjdFVyaSkpO1xuXG4gICAgICAgIHN0ci5wdXNoKFwic3RhdGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5zdGF0ZSkpO1xuICAgICAgICBzdHIucHVzaChcIm5vbmNlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMubm9uY2UpKTtcblxuICAgICAgICBzdHIucHVzaChcImNsaWVudF9pbmZvPTFcIik7XG4gICAgICAgIHN0ci5wdXNoKGB4LWNsaWVudC1TS1U9JHtzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnhDbGllbnRTa3V9YCk7XG4gICAgICAgIHN0ci5wdXNoKGB4LWNsaWVudC1WZXI9JHtzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnhDbGllbnRWZXJ9YCk7XG4gICAgICAgIGlmIChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnByb21wdFZhbHVlKSB7XG4gICAgICAgICAgICBzdHIucHVzaChcInByb21wdD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnByb21wdFZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGFpbXNWYWx1ZSkge1xuICAgICAgICAgICAgc3RyLnB1c2goXCJjbGFpbXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoc2VydmVyUmVxdWVzdFBhcmFtcy5jbGFpbXNWYWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlcnZlclJlcXVlc3RQYXJhbXMucXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBzdHIucHVzaChzZXJ2ZXJSZXF1ZXN0UGFyYW1zLnF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VydmVyUmVxdWVzdFBhcmFtcy5leHRyYVF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgICAgICAgc3RyLnB1c2goc2VydmVyUmVxdWVzdFBhcmFtcy5leHRyYVF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIucHVzaChcImNsaWVudC1yZXF1ZXN0LWlkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHNlcnZlclJlcXVlc3RQYXJhbXMuY29ycmVsYXRpb25JZCkpO1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGFwcGVuZCB0aGUgcmVxdWlyZWQgc2NvcGVzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtYmFzaWMtMV8wLmh0bWwjU2NvcGVzXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBjbGllbnRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsaWVudElkSW5kZXg6IG51bWJlciA9IHNjb3Blcy5pbmRleE9mKGNsaWVudElkKTtcbiAgICAgICAgaWYgKGNsaWVudElkSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgc2NvcGVzLnNwbGljZShjbGllbnRJZEluZGV4LCAxKTtcbiAgICAgICAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcIm9wZW5pZFwiKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzY29wZXMucHVzaChcIm9wZW5pZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcInByb2ZpbGVcIikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc2NvcGVzLnB1c2goXCJwcm9maWxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXJyZW50IHdpbmRvdyBVUkwgYXMgcmVkaXJlY3QgdXJpXG4gICAgICovXG4gICAgc3RhdGljIGdldERlZmF1bHRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHVybCBsaWtlIGh0dHBzOi8vYTpiL2NvbW1vbi9kP2U9ZiNnLCBhbmQgYSB0ZW5hbnRJZCwgcmV0dXJucyBodHRwczovL2E6Yi90ZW5hbnRJZC9kXG4gICAgICogQHBhcmFtIGhyZWYgVGhlIHVybFxuICAgICAqIEBwYXJhbSB0ZW5hbnRJZCBUaGUgdGVuYW50IGlkIHRvIHJlcGxhY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVwbGFjZVRlbmFudFBhdGgodXJsOiBzdHJpbmcsIHRlbmFudElkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB1cmwgPSB1cmwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gdGhpcy5HZXRVcmxDb21wb25lbnRzKHVybCk7XG4gICAgICAgIGNvbnN0IHBhdGhBcnJheSA9IHVybE9iamVjdC5QYXRoU2VnbWVudHM7XG4gICAgICAgIGlmICh0ZW5hbnRJZCAmJiAocGF0aEFycmF5Lmxlbmd0aCAhPT0gMCAmJiAocGF0aEFycmF5WzBdID09PSBDb25zdGFudHMuY29tbW9uIHx8IHBhdGhBcnJheVswXSA9PT0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUykpKSB7XG4gICAgICAgICAgICBwYXRoQXJyYXlbMF0gPSB0ZW5hbnRJZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RBdXRob3JpdHlVcmlGcm9tT2JqZWN0KHVybE9iamVjdCwgcGF0aEFycmF5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3Q6IElVcmksIHBhdGhBcnJheTogc3RyaW5nW10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ2Fub25pY2FsaXplVXJpKHVybE9iamVjdC5Qcm90b2NvbCArIFwiLy9cIiArIHVybE9iamVjdC5Ib3N0TmFtZUFuZFBvcnQgKyBcIi9cIiArIHBhdGhBcnJheS5qb2luKFwiL1wiKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIG91dCB0aGUgY29tcG9uZW50cyBmcm9tIGEgdXJsIHN0cmluZy5cbiAgICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgdmFyaW91cyBjb21wb25lbnRzLiBQbGVhc2UgY2FjaGUgdGhpcyB2YWx1ZSBpbnN0ZWQgb2YgY2FsbGluZyB0aGlzIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHVybC5cbiAgICAgKi9cbiAgICBzdGF0aWMgR2V0VXJsQ29tcG9uZW50cyh1cmw6IHN0cmluZyk6IElVcmkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdGhyb3cgXCJVcmwgcmVxdWlyZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2N1cnRpc3ovMTExMzliMmNmY2FlZjRhMjYxZTBcbiAgICAgICAgY29uc3QgcmVnRXggPSBSZWdFeHAoXCJeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT9cIik7XG5cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXgpO1xuXG4gICAgICAgIGlmICghbWF0Y2ggfHwgbWF0Y2gubGVuZ3RoIDwgNikge1xuICAgICAgICAgICAgdGhyb3cgXCJWYWxpZCB1cmwgcmVxdWlyZWRcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybENvbXBvbmVudHMgPSA8SVVyaT57XG4gICAgICAgICAgICBQcm90b2NvbDogbWF0Y2hbMV0sXG4gICAgICAgICAgICBIb3N0TmFtZUFuZFBvcnQ6IG1hdGNoWzRdLFxuICAgICAgICAgICAgQWJzb2x1dGVQYXRoOiBtYXRjaFs1XVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBwYXRoU2VnbWVudHMgPSB1cmxDb21wb25lbnRzLkFic29sdXRlUGF0aC5zcGxpdChcIi9cIik7XG4gICAgICAgIHBhdGhTZWdtZW50cyA9IHBhdGhTZWdtZW50cy5maWx0ZXIoKHZhbCkgPT4gdmFsICYmIHZhbC5sZW5ndGggPiAwKTsgLy8gcmVtb3ZlIGVtcHR5IGVsZW1lbnRzXG4gICAgICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xuICAgICAgICByZXR1cm4gdXJsQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIHVybCBvciBwYXRoLCBhcHBlbmQgYSB0cmFpbGluZyBzbGFzaCBpZiBvbmUgZG9lc250IGV4aXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgc3RhdGljIENhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybCAmJiAhVXJsVXRpbHMuZW5kc1dpdGgodXJsLCBcIi9cIikpIHtcbiAgICAgICAgICAgIHVybCArPSBcIi9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXJsIGVuZHMgd2l0aCB0aGUgc3VmZml4XG4gICAgICogUmVxdWlyZWQgYmVjYXVzZSB3ZSBhcmUgY29tcGlsaW5nIGZvciBlczUgaW5zdGVhZCBvZiBlczZcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIHN0clxuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBub3QgY2xlYXIgd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBkb1xuICAgIHN0YXRpYyBlbmRzV2l0aCh1cmw6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF1cmwgfHwgIXN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybC5pbmRleE9mKHN1ZmZpeCwgdXJsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlscyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxvZ2luX2hpbnQgYW5kIGRvbWFpbl9oaW50IGZyb20gdGhlIGkvcCBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyB1cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcih1cmw6IHN0cmluZywgbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoXCIoXFxcXCZcIiArIG5hbWUgKyBcIj0pW15cXCZdK1wiKTtcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xuICAgICAgICAvLyBuYW1lPXZhbHVlJlxuICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXSsmXCIpO1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgIC8vIG5hbWU9dmFsdWVcbiAgICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFJldHVybnMgdGhlIGFuY2hvciBwYXJ0KCMpIG9mIHRoZSBVUkxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SGFzaEZyb21VcmwodXJsU3RyaW5nT3JGcmFnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaGFzaEluZGV4MSA9IHVybFN0cmluZ09yRnJhZ21lbnQuaW5kZXhPZihcIiNcIik7XG4gICAgICAgIGNvbnN0IGhhc2hJbmRleDIgPSB1cmxTdHJpbmdPckZyYWdtZW50LmluZGV4T2YoXCIjL1wiKTtcbiAgICAgICAgaWYgKGhhc2hJbmRleDIgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQuc3Vic3RyaW5nKGhhc2hJbmRleDIgKyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoSW5kZXgxID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmxTdHJpbmdPckZyYWdtZW50LnN1YnN0cmluZyhoYXNoSW5kZXgxICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybFN0cmluZ09yRnJhZ21lbnQ7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuLi9JZFRva2VuXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuXG5leHBvcnQgY29uc3QgQ2xpZW50QXV0aEVycm9yTWVzc2FnZSA9IHtcbiAgICBtdWx0aXBsZU1hdGNoaW5nVG9rZW5zOiB7XG4gICAgICAgIGNvZGU6IFwibXVsdGlwbGVfbWF0Y2hpbmdfdG9rZW5zXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGNhY2hlIGNvbnRhaW5zIG11bHRpcGxlIHRva2VucyBzYXRpc2Z5aW5nIHRoZSByZXF1aXJlbWVudHMuIFwiICtcbiAgICAgICAgICAgIFwiQ2FsbCBBY3F1aXJlVG9rZW4gYWdhaW4gcHJvdmlkaW5nIG1vcmUgcmVxdWlyZW1lbnRzIGxpa2UgYXV0aG9yaXR5LlwiXG4gICAgfSxcbiAgICBtdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXM6IHtcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9hdXRob3JpdGllc1wiLFxuICAgICAgICBkZXNjOiBcIk11bHRpcGxlIGF1dGhvcml0aWVzIGZvdW5kIGluIHRoZSBjYWNoZS4gUGFzcyBhdXRob3JpdHkgaW4gdGhlIEFQSSBvdmVybG9hZC5cIlxuICAgIH0sXG4gICAgZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJlbmRwb2ludHNfcmVzb2x1dGlvbl9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkVycm9yOiBjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHMuIFBsZWFzZSBjaGVjayBuZXR3b3JrIGFuZCB0cnkgYWdhaW4uXCJcbiAgICB9LFxuICAgIHBvcFVwV2luZG93RXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJwb3B1cF93aW5kb3dfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJFcnJvciBvcGVuaW5nIHBvcHVwIHdpbmRvdy4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBhcmUgdXNpbmcgSUUgb3IgaWYgcG9wdXBzIGFyZSBibG9ja2VkIGluIHRoZSBicm93c2VyLlwiXG4gICAgfSxcbiAgICB0b2tlblJlbmV3YWxFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInRva2VuX3JlbmV3YWxfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUb2tlbiByZW5ld2FsIG9wZXJhdGlvbiBmYWlsZWQgZHVlIHRvIHRpbWVvdXQuXCJcbiAgICB9LFxuICAgIGludmFsaWRJZFRva2VuOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9pZF90b2tlblwiLFxuICAgICAgICBkZXNjOiBcIkludmFsaWQgSUQgdG9rZW4gZm9ybWF0LlwiXG4gICAgfSxcbiAgICBpbnZhbGlkU3RhdGVFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfc3RhdGVfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIHN0YXRlLlwiXG4gICAgfSxcbiAgICBub25jZU1pc21hdGNoRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJub25jZV9taXNtYXRjaF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIk5vbmNlIGlzIG5vdCBtYXRjaGluZywgTm9uY2UgcmVjZWl2ZWQ6IFwiXG4gICAgfSxcbiAgICBsb2dpblByb2dyZXNzRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJsb2dpbl9wcm9ncmVzc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkxvZ2luX0luX1Byb2dyZXNzOiBFcnJvciBkdXJpbmcgbG9naW4gY2FsbCAtIGxvZ2luIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXCJcbiAgICB9LFxuICAgIGFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJhY3F1aXJldG9rZW5fcHJvZ3Jlc3NfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJBY3F1aXJlVG9rZW5fSW5fUHJvZ3Jlc3M6IEVycm9yIGR1cmluZyBsb2dpbiBjYWxsIC0gbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIlxuICAgIH0sXG4gICAgdXNlckNhbmNlbGxlZEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidXNlcl9jYW5jZWxsZWRcIixcbiAgICAgICAgZGVzYzogXCJVc2VyIGNhbmNlbGxlZCB0aGUgZmxvdy5cIlxuICAgIH0sXG4gICAgY2FsbGJhY2tFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImNhbGxiYWNrX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiRXJyb3Igb2NjdXJyZWQgaW4gdG9rZW4gcmVjZWl2ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXCJcbiAgICB9LFxuICAgIHVzZXJMb2dpblJlcXVpcmVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1c2VyX2xvZ2luX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZC5cIlxuICAgIH0sXG4gICAgdXNlckRvZXNOb3RFeGlzdEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidXNlcl9ub25fZXhpc3RlbnRcIixcbiAgICAgICAgZGVzYzogXCJVc2VyIG9iamVjdCBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIGNhbGwgYSBsb2dpbiBBUEkuXCJcbiAgICB9LFxuICAgIGNsaWVudEluZm9EZWNvZGluZ0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiY2xpZW50X2luZm9fZGVjb2RpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUaGUgY2xpZW50IGluZm8gY291bGQgbm90IGJlIHBhcnNlZC9kZWNvZGVkIGNvcnJlY3RseS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXG4gICAgfSxcbiAgICBjbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19ub3RfcG9wdWxhdGVkX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIHNlcnZpY2UgZGlkIG5vdCBwb3B1bGF0ZSBjbGllbnRfaW5mbyBpbiB0aGUgcmVzcG9uc2UsIFBsZWFzZSB2ZXJpZnkgd2l0aCB0aGUgc2VydmljZSB0ZWFtXCJcbiAgICB9LFxuICAgIG51bGxPckVtcHR5SWRUb2tlbjoge1xuICAgICAgICBjb2RlOiBcIm51bGxfb3JfZW1wdHlfaWRfdG9rZW5cIixcbiAgICAgICAgZGVzYzogXCJUaGUgaWRUb2tlbiBpcyBudWxsIG9yIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcbiAgICB9LFxuICAgIGlkVG9rZW5Ob3RQYXJzZWQ6IHtcbiAgICAgICAgY29kZTogXCJpZF90b2tlbl9wYXJzaW5nX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiSUQgdG9rZW4gY2Fubm90IGJlIHBhcnNlZC4gUGxlYXNlIHJldmlldyBzdGFjayB0cmFjZSB0byBkZXRlcm1pbmUgcm9vdCBjYXVzZS5cIlxuICAgIH0sXG4gICAgdG9rZW5FbmNvZGluZ0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidG9rZW5fZW5jb2RpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUaGUgdG9rZW4gdG8gYmUgZGVjb2RlZCBpcyBub3QgZW5jb2RlZCBjb3JyZWN0bHkuXCJcbiAgICB9LFxuICAgIGludmFsaWRJbnRlcmFjdGlvblR5cGU6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2ludGVyYWN0aW9uX3R5cGVcIixcbiAgICAgICAgZGVzYzogXCJUaGUgaW50ZXJhY3Rpb24gdHlwZSBwYXNzZWQgdG8gdGhlIGhhbmRsZXIgd2FzIGluY29ycmVjdCBvciB1bmtub3duXCJcbiAgICB9XG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBjbGllbnQgY29kZSBydW5uaW5nIG9uIHRoZSBicm93c2VyLlxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50QXV0aEVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudEF1dGhFcnJvclwiO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRBdXRoRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyRGV0YWlsPzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYztcbiAgICAgICAgaWYgKGVyckRldGFpbCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShlcnJEZXRhaWwpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke2VyckRldGFpbH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZU1hdGNoaW5nVG9rZW5zLmNvZGUsXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5kZXNjfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXMuY29kZSxcbiAgICAgICAgICAgIGBDYWNoZSBlcnJvciBmb3Igc2NvcGUgJHtzY29wZX06ICR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXMuZGVzY30uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVBvcHVwV2luZG93RXJyb3IoZXJyRGV0YWlsPzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5kZXNjO1xuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgIERldGFpbHM6ICR7ZXJyRGV0YWlsfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuUmVuZXdhbFRpbWVvdXRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW46IElkVG9rZW4pIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5kZXNjfSBHaXZlbiB0b2tlbjogJHtpZFRva2VufWApO1xuICAgIH1cblxuICAgIC8vIFRPRE86IElzIHRoaXMgbm90IGEgc2VjdXJpdHkgZmxhdyB0byBzZW5kIHRoZSB1c2VyIHRoZSBzdGF0ZSBleHBlY3RlZD8/XG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRTdGF0ZUVycm9yKGludmFsaWRTdGF0ZTogc3RyaW5nLCBhY3R1YWxTdGF0ZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkU3RhdGVFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkU3RhdGVFcnJvci5kZXNjfSAke2ludmFsaWRTdGF0ZX0sIHN0YXRlIGV4cGVjdGVkIDogJHthY3R1YWxTdGF0ZX0uYCk7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogSXMgdGhpcyBub3QgYSBzZWN1cml0eSBmbGF3IHRvIHNlbmQgdGhlIHVzZXIgdGhlIE5vbmNlIGV4cGVjdGVkPz9cbiAgICBzdGF0aWMgY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKGludmFsaWROb25jZTogc3RyaW5nLCBhY3R1YWxOb25jZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5ub25jZU1pc21hdGNoRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmRlc2N9ICR7aW52YWxpZE5vbmNlfSwgbm9uY2UgZXhwZWN0ZWQgOiAke2FjdHVhbE5vbmNlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTG9naW5JblByb2dyZXNzRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5sb2dpblByb2dyZXNzRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UubG9naW5Qcm9ncmVzc0Vycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVBY3F1aXJlVG9rZW5JblByb2dyZXNzRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJDYW5jZWxsZWRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUVycm9ySW5DYWxsYmFja0Z1bmN0aW9uKGVycm9yRGVzYzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWxsYmFja0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNhbGxiYWNrRXJyb3IuZGVzY30gJHtlcnJvckRlc2N9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCkgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJMb2dpblJlcXVpcmVkRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckxvZ2luUmVxdWlyZWRFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVXNlckRvZXNOb3RFeGlzdEVycm9yKCkgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJEb2VzTm90RXhpc3RFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyRG9lc05vdEV4aXN0RXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGNhdWdodEVycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvRGVjb2RpbmdFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvRGVjb2RpbmdFcnJvci5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRFcnJvcn1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yKGNhdWdodEVycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5jbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodEVycm9yfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuTnVsbE9yRW1wdHlFcnJvcihpbnZhbGlkUmF3VG9rZW5TdHJpbmc6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5udWxsT3JFbXB0eUlkVG9rZW4uZGVzY30gUmF3IElEIFRva2VuIFZhbHVlOiAke2ludmFsaWRSYXdUb2tlblN0cmluZ31gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlblBhcnNpbmdFcnJvcihjYXVnaHRQYXJzaW5nRXJyb3I6IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmlkVG9rZW5Ob3RQYXJzZWQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuaWRUb2tlbk5vdFBhcnNlZC5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRQYXJzaW5nRXJyb3J9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuRW5jb2RpbmdFcnJvcihpbmNvcnJlY3RseUVuY29kZWRUb2tlbjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuRW5jb2RpbmdFcnJvci5kZXNjfSBBdHRlbXB0ZWQgdG8gZGVjb2RlOiAke2luY29ycmVjdGx5RW5jb2RlZFRva2VufWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSW50ZXJhY3Rpb25UeXBlRXJyb3IoKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaW52YWxpZEludGVyYWN0aW9uVHlwZS5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSW50ZXJhY3Rpb25UeXBlLmRlc2MpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgQXV0aEVycm9yTWVzc2FnZSA9IHtcbiAgICB1bmV4cGVjdGVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1bmV4cGVjdGVkX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVW5leHBlY3RlZCBlcnJvciBpbiBhdXRoZW50aWNhdGlvbi5cIlxuICAgIH1cbn07XG5cbi8qKlxuICogR2VuZXJhbCBlcnJvciBjbGFzcyB0aHJvd24gYnkgdGhlIE1TQUwuanMgbGlicmFyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEF1dGhFcnJvciBleHRlbmRzIEVycm9yIHtcblxuICAgIGVycm9yQ29kZTogc3RyaW5nO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQXV0aEVycm9yLnByb3RvdHlwZSk7XG5cbiAgICAgICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkF1dGhFcnJvclwiO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVbmV4cGVjdGVkRXJyb3IoZXJyRGVzYzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aEVycm9yKEF1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmNvZGUsIGAke0F1dGhFcnJvck1lc3NhZ2UudW5leHBlY3RlZEVycm9yLmRlc2N9OiAke2VyckRlc2N9YCk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi4vSVVyaVwiO1xuaW1wb3J0IHsgSVRlbmFudERpc2NvdmVyeVJlc3BvbnNlIH0gZnJvbSBcIi4vSVRlbmFudERpc2NvdmVyeVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4uL1hIUkNsaWVudFwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXJsVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBlbnVtIEF1dGhvcml0eVR5cGUge1xuICAgIEFhZCxcbiAgICBBZGZzLFxuICAgIEIyQ1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEF1dGhvcml0eSB7XG4gICAgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCA9IHZhbGlkYXRlQXV0aG9yaXR5O1xuICAgICAgICB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSA9IGF1dGhvcml0eTtcblxuICAgICAgICB0aGlzLnZhbGlkYXRlQXNVcmkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZTtcblxuICAgIHB1YmxpYyBJc1ZhbGlkYXRpb25FbmFibGVkOiBib29sZWFuO1xuXG4gICAgcHVibGljIGdldCBUZW5hbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHNbMF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0ZW5hbnREaXNjb3ZlcnlSZXNwb25zZTogSVRlbmFudERpc2NvdmVyeVJlc3BvbnNlO1xuXG4gICAgcHVibGljIGdldCBBdXRob3JpemF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkF1dGhvcml6YXRpb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgRW5kU2Vzc2lvbkVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5FbmRTZXNzaW9uRW5kcG9pbnQucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IFNlbGZTaWduZWRKd3RBdWRpZW5jZSgpOiBzdHJpbmcge1xuICAgICAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuSXNzdWVyLnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVJlc29sdmVkKCkge1xuICAgICAgICBpZiAoIXRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IFwiUGxlYXNlIGNhbGwgUmVzb2x2ZUVuZHBvaW50c0FzeW5jIGZpcnN0XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFVSTCB0aGF0IGlzIHRoZSBhdXRob3JpdHkgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IENhbm9uaWNhbEF1dGhvcml0eSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBDYW5vbmljYWxBdXRob3JpdHkodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHkgPSBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkodXJsKTtcbiAgICAgICAgdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50czogSVVyaTtcblxuICAgIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cygpOiBJVXJpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHModGhpcy5DYW5vbmljYWxBdXRob3JpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAvLyBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1kaXNjb3ZlcnktMV8wLmh0bWwjUHJvdmlkZXJNZXRhZGF0YVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXQgRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5DYW5vbmljYWxBdXRob3JpdHl9djIuMC8ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBzdHJpbmcsIHZhbGlkYXRlIHRoYXQgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly9kb21haW4vcGF0aFxuICAgICAqL1xuICAgIHByaXZhdGUgdmFsaWRhdGVBc1VyaSgpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudHM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb21wb25lbnRzID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb21wb25lbnRzLlByb3RvY29sIHx8IGNvbXBvbmVudHMuUHJvdG9jb2wudG9Mb3dlckNhc2UoKSAhPT0gXCJodHRwczpcIikge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnNlY3VyZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tcG9uZW50cy5QYXRoU2VnbWVudHMgfHwgY29tcG9uZW50cy5QYXRoU2VnbWVudHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnZhbGlkUGF0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIHRoZSBPSURDIGVuZHBvaW50IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZVxuICAgICAqL1xuICAgIHByaXZhdGUgRGlzY292ZXJFbmRwb2ludHMob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50OiBzdHJpbmcpOiBQcm9taXNlPElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgWGhyQ2xpZW50KCk7XG4gICAgICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQsIFwiR0VUXCIsIC8qIGVuYWJsZUNhY2hpbmc6ICovIHRydWUpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPntcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbkVuZHBvaW50OiByZXNwb25zZS5hdXRob3JpemF0aW9uX2VuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgICBFbmRTZXNzaW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmVuZF9zZXNzaW9uX2VuZHBvaW50LFxuICAgICAgICAgICAgICAgICAgICBJc3N1ZXI6IHJlc3BvbnNlLmlzc3VlclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZS5cbiAgICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgaW4gdGhlIGNhY2hlXG4gICAgICogRGlzY292ZXIgZW5kcG9pbnRzIHZpYSBvcGVuaWQtY29uZmlndXJhdGlvblxuICAgICAqIElmIHN1Y2Nlc3NmdWwsIGNhY2hlcyB0aGUgZW5kcG9pbnQgZm9yIGxhdGVyIHVzZSBpbiBPSURDXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlc29sdmVFbmRwb2ludHNBc3luYygpOiBQcm9taXNlPEF1dGhvcml0eT4ge1xuICAgICAgICBjb25zdCBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSA9IGF3YWl0IHRoaXMuR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTtcbiAgICAgICAgdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSA9IGF3YWl0IHRoaXMuRGlzY292ZXJFbmRwb2ludHMob3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50UmVzcG9uc2UpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIFRlbmFudERpc2NvdmVyeUVuZHBvaW50XG4gICAgICovXG4gICAgcHVibGljIGFic3RyYWN0IEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPjtcbn1cbiIsImV4cG9ydCBjb25zdCBFVkVOVF9OQU1FX1BSRUZJWCA9IFwibXNhbC5cIjtcbmV4cG9ydCBjb25zdCBFVkVOVF9OQU1FX0tFWSA9IFwiZXZlbnRfbmFtZVwiO1xuZXhwb3J0IGNvbnN0IFNUQVJUX1RJTUVfS0VZID0gXCJzdGFydF90aW1lXCI7XG5leHBvcnQgY29uc3QgRUxBUFNFRF9USU1FX0tFWSAgPSBcImVsYXBzZWRfdGltZVwiO1xuXG5leHBvcnQgY29uc3QgVEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMgPSAge1xuICAgIE1zYWxDb3JyZWxhdGlvbklkQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0Lk1TQUwuY29ycmVsYXRpb25faWRcIixcbiAgICBBcGlUZWxlbUlkQ29uc3RTdHJLZXk6IFwibXNhbC5hcGlfdGVsZW1faWRcIixcbiAgICBBcGlJZENvbnN0U3RyS2V5OiBcIm1zYWwuYXBpX2lkXCIsXG4gICAgQnJva2VyQXBwQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfYnJva2VyX2FwcFwiLFxuICAgIENhY2hlRXZlbnRDb3VudENvbnN0U3RyS2V5OiBcIk1pY3Jvc29mdF9NU0FMX2NhY2hlX2V2ZW50X2NvdW50XCIsXG4gICAgSHR0cEV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleTogXCJNaWNyb3NvZnRfTVNBTF9odHRwX2V2ZW50X2NvdW50XCIsXG4gICAgSWRwQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfaWRwXCIsXG4gICAgSXNTaWxlbnRUZWxlbWV0cnlCYXRjaEtleTogXCJcIixcbiAgICBJc1N1Y2Nlc3NmdWxDb25zdFN0cktleTogXCJNaWNyb3NvZnRfTVNBTF9pc19zdWNjZXNzZnVsXCIsXG4gICAgUmVzcG9uc2VUaW1lQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfcmVzcG9uc2VfdGltZVwiLFxuICAgIFRlbmFudElkQ29uc3RTdHJLZXk6IFwiTWljcm9zb2Z0X01TQUxfdGVuYW50X2lkXCIsXG4gICAgVWlFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXk6IFwiTWljcm9zb2Z0X01TQUxfdWlfZXZlbnRfY291bnRcIlxufTtcblxuLy8gVGhpcyBpcyB1c2VkIHRvIHJlcGxhY2UgdGhlIHJlYWwgdGVuYW50IGluIHRlbGVtZXRyeSBpbmZvXG5leHBvcnQgY29uc3QgVEVOQU5UX1BMQUNFSE9MREVSID0gXCI8dGVuYW50PlwiO1xuXG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuaW1wb3J0IHsgbGlicmFyeVZlcnNpb24gfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyQ2FsbGJhY2sge1xuICAgIChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gICAgRXJyb3IsXG4gICAgV2FybmluZyxcbiAgICBJbmZvLFxuICAgIFZlcmJvc2Vcbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7Ly8gU2luZ2xldG9uIENsYXNzXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG5vdCBzZWVtIHRvIGJlIGEgc2luZ2xldG9uISEgQ2hhbmdlIG9yIERlbGV0ZS5cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nZ2VyO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgY29ycmVsYXRpb25JZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgbGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSW5mbztcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHBpaUxvZ2dpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgbG9jYWxDYWxsYmFjazogSUxvZ2dlckNhbGxiYWNrO1xuXG4gICAgY29uc3RydWN0b3IobG9jYWxDYWxsYmFjazogSUxvZ2dlckNhbGxiYWNrLFxuICAgICAgICBvcHRpb25zOlxuICAgICAgICB7XG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkPzogc3RyaW5nLFxuICAgICAgICAgICAgbGV2ZWw/OiBMb2dMZXZlbCxcbiAgICAgICAgICAgIHBpaUxvZ2dpbmdFbmFibGVkPzogYm9vbGVhbixcbiAgICAgICAgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNvcnJlbGF0aW9uSWQgPSBcIlwiLFxuICAgICAgICAgICAgbGV2ZWwgPSBMb2dMZXZlbC5JbmZvLFxuICAgICAgICAgICAgcGlpTG9nZ2luZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgICB9ID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLmxvY2FsQ2FsbGJhY2sgPSBsb2NhbENhbGxiYWNrO1xuICAgICAgICB0aGlzLmNvcnJlbGF0aW9uSWQgPSBjb3JyZWxhdGlvbklkO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgICAgIHRoaXMucGlpTG9nZ2luZ0VuYWJsZWQgPSBwaWlMb2dnaW5nRW5hYmxlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2dNZXNzYWdlKGxvZ0xldmVsOiBMb2dMZXZlbCwgbG9nTWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoKGxvZ0xldmVsID4gdGhpcy5sZXZlbCkgfHwgKCF0aGlzLnBpaUxvZ2dpbmdFbmFibGVkICYmIGNvbnRhaW5zUGlpKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcbiAgICAgICAgbGV0IGxvZzogc3RyaW5nO1xuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkodGhpcy5jb3JyZWxhdGlvbklkKSkge1xuICAgICAgICAgICAgbG9nID0gdGltZXN0YW1wICsgXCI6XCIgKyB0aGlzLmNvcnJlbGF0aW9uSWQgKyBcIi1cIiArIGxpYnJhcnlWZXJzaW9uKCkgKyBcIi1cIiArIExvZ0xldmVsW2xvZ0xldmVsXSArIFwiIFwiICsgbG9nTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvZyA9IHRpbWVzdGFtcCArIFwiOlwiICsgbGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXhlY3V0ZUNhbGxiYWNrKGxvZ0xldmVsLCBsb2csIGNvbnRhaW5zUGlpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgZXhlY3V0ZUNhbGxiYWNrKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5sb2NhbENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsQ2FsbGJhY2sobGV2ZWwsIG1lc3NhZ2UsIGNvbnRhaW5zUGlpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGVycm9yUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuV2FybmluZywgbWVzc2FnZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICB3YXJuaW5nUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuV2FybmluZywgbWVzc2FnZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5JbmZvLCBtZXNzYWdlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGluZm9QaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5JbmZvLCBtZXNzYWdlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdmVyYm9zZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLlZlcmJvc2UsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgdmVyYm9zZVBpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLlZlcmJvc2UsIG1lc3NhZ2UsIHRydWUpO1xuICAgIH1cblxuICAgIGlzUGlpTG9nZ2luZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpaUxvZ2dpbmdFbmFibGVkO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9BdXRoRXJyb3JcIjtcblxuZXhwb3J0IGNvbnN0IFNlcnZlckVycm9yTWVzc2FnZSA9IHtcbiAgICBzZXJ2ZXJVbmF2YWlsYWJsZToge1xuICAgICAgICBjb2RlOiBcInNlcnZlcl91bmF2YWlsYWJsZVwiLFxuICAgICAgICBkZXNjOiBcIlNlcnZlciBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS5cIlxuICAgIH0sXG4gICAgdW5rbm93blNlcnZlckVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidW5rbm93bl9zZXJ2ZXJfZXJyb3JcIlxuICAgIH0sXG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIHdpdGggdGhlIHNlcnZlciBjb2RlLCBmb3IgZXhhbXBsZSwgdW5hdmFpbGFiaWxpdHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXJ2ZXJFcnJvciBleHRlbmRzIEF1dGhFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yQ29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTZXJ2ZXJFcnJvclwiO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBTZXJ2ZXJFcnJvci5wcm90b3R5cGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTZXJ2ZXJVbmF2YWlsYWJsZUVycm9yKCk6IFNlcnZlckVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJFcnJvcihTZXJ2ZXJFcnJvck1lc3NhZ2Uuc2VydmVyVW5hdmFpbGFibGUuY29kZSxcbiAgICAgICAgICAgIFNlcnZlckVycm9yTWVzc2FnZS5zZXJ2ZXJVbmF2YWlsYWJsZS5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVW5rbm93blNlcnZlckVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogU2VydmVyRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IFNlcnZlckVycm9yKFNlcnZlckVycm9yTWVzc2FnZS51bmtub3duU2VydmVyRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGVycm9yRGVzYyk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuS2V5IH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5LZXlcIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuVmFsdWUgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlblZhbHVlXCI7XG5pbXBvcnQgeyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyB9IGZyb20gXCIuL1NlcnZlclJlcXVlc3RQYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xuaW1wb3J0IHsgQ29uc3RhbnRzLCBJbnRlcmFjdGlvblR5cGUsIGxpYnJhcnlWZXJzaW9uIH0gZnJvbSBcIi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vU3RvcmFnZVwiO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB7IFNjb3BlU2V0IH0gZnJvbSBcIi4vU2NvcGVTZXRcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFRva2VuVXRpbHMgfSBmcm9tIFwiLi91dGlscy9Ub2tlblV0aWxzXCI7XG5pbXBvcnQgeyBUaW1lVXRpbHMgfSBmcm9tIFwiLi91dGlscy9UaW1lVXRpbHNcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvVXJsVXRpbHNcIjtcbmltcG9ydCB7IFJlc3BvbnNlVXRpbHMgfSBmcm9tIFwiLi91dGlscy9SZXNwb25zZVV0aWxzXCI7XG5pbXBvcnQgeyBBdXRob3JpdHlGYWN0b3J5IH0gZnJvbSBcIi4vYXV0aG9yaXR5L0F1dGhvcml0eUZhY3RvcnlcIjtcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIGJ1aWxkQ29uZmlndXJhdGlvbiwgVGVsZW1ldHJ5T3B0aW9ucyB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5pbXBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9BdXRoRXJyb3JcIjtcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZSB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9TZXJ2ZXJFcnJvclwiO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcbmltcG9ydCB7IEF1dGhSZXNwb25zZSwgYnVpbGRSZXNwb25zZVN0YXRlT25seSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xuaW1wb3J0IFRlbGVtZXRyeU1hbmFnZXIgZnJvbSBcIi4vdGVsZW1ldHJ5L1RlbGVtZXRyeU1hbmFnZXJcIjtcbmltcG9ydCB7IFRlbGVtZXRyeVBsYXRmb3JtLCBUZWxlbWV0cnlDb25maWcgfSBmcm9tIFwiLi90ZWxlbWV0cnkvVGVsZW1ldHJ5VHlwZXNcIjtcblxuLy8gZGVmYXVsdCBhdXRob3JpdHlcbmNvbnN0IERFRkFVTFRfQVVUSE9SSVRZID0gXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCI7XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIGhhbmRsZSBpRnJhbWUgZ2VuZXJhdGlvbiwgUG9wdXAgV2luZG93IGNyZWF0aW9uIGFuZCByZWRpcmVjdCBoYW5kbGluZ1xuICovXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIG1zYWw6IE9iamVjdDtcbiAgICAgICAgQ3VzdG9tRXZlbnQ6IEN1c3RvbUV2ZW50O1xuICAgICAgICBFdmVudDogRXZlbnQ7XG4gICAgICAgIGFjdGl2ZVJlbmV3YWxzOiB7fTtcbiAgICAgICAgcmVuZXdTdGF0ZXM6IEFycmF5PHN0cmluZz47XG4gICAgICAgIGNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlcyA6IHt9O1xuICAgICAgICBwcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlczoge307XG4gICAgICAgIG9wZW5lZFdpbmRvd3M6IEFycmF5PFdpbmRvdz47XG4gICAgICAgIHJlcXVlc3RUeXBlOiBzdHJpbmc7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIEBpZ25vcmVcbiAqIHJlc3BvbnNlX3R5cGUgZnJvbSBPcGVuSURDb25uZWN0XG4gKiBSZWZlcmVuY2VzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb2F1dGgtdjItbXVsdGlwbGUtcmVzcG9uc2UtdHlwZXMtMV8wLmh0bWwgJiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTQuMi4xXG4gKiBTaW5jZSB3ZSBzdXBwb3J0IG9ubHkgaW1wbGljaXQgZmxvdyBpbiB0aGlzIGxpYnJhcnksIHdlIHJlc3RyaWN0IHRoZSByZXNwb25zZV90eXBlIHN1cHBvcnQgdG8gb25seSAndG9rZW4nIGFuZCAnaWRfdG9rZW4nXG4gKlxuICovXG5jb25zdCBSZXNwb25zZVR5cGVzID0ge1xuICAgIGlkX3Rva2VuOiBcImlkX3Rva2VuXCIsXG4gICAgdG9rZW46IFwidG9rZW5cIixcbiAgICBpZF90b2tlbl90b2tlbjogXCJpZF90b2tlbiB0b2tlblwiXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYWNoZVJlc3VsdCB7XG4gICAgZXJyb3JEZXNjOiBzdHJpbmc7XG4gICAgdG9rZW46IHN0cmluZztcbiAgICBlcnJvcjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIEBpZ25vcmVcbiAqIERhdGEgdHlwZSB0byBob2xkIGluZm9ybWF0aW9uIGFib3V0IHN0YXRlIHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxuICovXG5leHBvcnQgdHlwZSBSZXNwb25zZVN0YXRlSW5mbyA9IHtcbiAgICBzdGF0ZTogc3RyaW5nO1xuICAgIHN0YXRlTWF0Y2g6IGJvb2xlYW47XG4gICAgcmVxdWVzdFR5cGU6IHN0cmluZztcbn07XG5cbi8qKlxuICogQSB0eXBlIGFsaWFzIGZvciBhbiBhdXRoUmVzcG9uc2VDYWxsYmFjayBmdW5jdGlvbi5cbiAqIHtAbGluayAoYXV0aFJlc3BvbnNlQ2FsbGJhY2s6dHlwZSl9XG4gKiBAcGFyYW0gYXV0aEVyciBlcnJvciBjcmVhdGVkIGZvciBmYWlsdXJlIGNhc2VzXG4gKiBAcGFyYW0gcmVzcG9uc2UgcmVzcG9uc2UgY29udGFpbmluZyB0b2tlbiBzdHJpbmdzIGluIHN1Y2Nlc3MgY2FzZXMsIG9yIGp1c3Qgc3RhdGUgdmFsdWUgaW4gZXJyb3IgY2FzZXNcbiAqL1xuZXhwb3J0IHR5cGUgYXV0aFJlc3BvbnNlQ2FsbGJhY2sgPSAoYXV0aEVycjogQXV0aEVycm9yLCByZXNwb25zZT86IEF1dGhSZXNwb25zZSkgPT4gdm9pZDtcblxuLyoqXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGEgdG9rZW5SZWNlaXZlZENhbGxiYWNrIGZ1bmN0aW9uLlxuICoge0BsaW5rICh0b2tlblJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9XG4gKiBAcmV0dXJucyByZXNwb25zZSBvZiB0eXBlIHtAbGluayAoQXV0aFJlc3BvbnNlOnR5cGUpfVxuICogVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBnZXQgdGhlIGNhbGwgYmFjayBvbmNlIHRoaXMgQVBJIGlzIGNvbXBsZXRlZCAoZWl0aGVyIHN1Y2Nlc3NmdWxseSBvciB3aXRoIGEgZmFpbHVyZSkuXG4gKi9cbmV4cG9ydCB0eXBlIHRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IChyZXNwb25zZTogQXV0aFJlc3BvbnNlKSA9PiB2b2lkO1xuXG4vKipcbiAqIEEgdHlwZSBhbGlhcyBmb3IgYSBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgZnVuY3Rpb24uXG4gKiB7QGxpbmsgKGVycm9yUmVjZWl2ZWRDYWxsYmFjazp0eXBlKX1cbiAqIEByZXR1cm5zIHJlc3BvbnNlIG9mIHR5cGUge0BsaW5rIChBdXRoRXJyb3I6Y2xhc3MpfVxuICogQHJldHVybnMge3N0cmluZ30gYWNjb3VudCBzdGF0ZVxuICovXG5leHBvcnQgdHlwZSBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSAoYXV0aEVycjogQXV0aEVycm9yLCBhY2NvdW50U3RhdGU6IHN0cmluZykgPT4gdm9pZDtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBAaWdub3JlXG4gKiBBIHdyYXBwZXIgdG8gaGFuZGxlIHRoZSB0b2tlbiByZXNwb25zZS9lcnJvciB3aXRoaW4gdGhlIGlGcmFtZSBhbHdheXNcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0gcHJvcGVydHlLZXlcbiAqIEBwYXJhbSBkZXNjcmlwdG9yXG4gKi9cbmNvbnN0IHJlc29sdmVUb2tlbk9ubHlJZk91dE9mSWZyYW1lID0gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcbiAgICBjb25zdCB0b2tlbkFjcXVpc2l0aW9uTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5JZnJhbWUoKVxuICAgICAgICAgICAgPyBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogdG9rZW5BY3F1aXNpdGlvbk1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxuLyoqXG4gKiBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjbGFzc1xuICpcbiAqIE9iamVjdCBJbnN0YW5jZSB0aGF0IHRoZSBkZXZlbG9wZXIgY2FuIHVzZSB0byBtYWtlIGxvZ2luWFggT1IgYWNxdWlyZVRva2VuWFggZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyQWdlbnRBcHBsaWNhdGlvbiB7XG5cbiAgICAvLyBpbnB1dCBDb25maWd1cmF0aW9uIGJ5IHRoZSBkZXZlbG9wZXIvdXNlclxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uO1xuXG4gICAgLy8gY2FsbGJhY2tzIGZvciB0b2tlbi9lcnJvclxuICAgIHByaXZhdGUgYXV0aFJlc3BvbnNlQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrID0gbnVsbDtcbiAgICBwcml2YXRlIHRva2VuUmVjZWl2ZWRDYWxsYmFjazogdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gbnVsbDtcbiAgICBwcml2YXRlIGVycm9yUmVjZWl2ZWRDYWxsYmFjazogZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gbnVsbDtcblxuICAgIC8vIEFkZGVkIGZvciByZWFkYWJpbGl0eSBhcyB0aGVzZSBwYXJhbXMgYXJlIHZlcnkgZnJlcXVlbnRseSB1c2VkXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcbiAgICBwcml2YXRlIGNsaWVudElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpbkNvb2tpZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIHRlbGVtZXRyeU1hbmFnZXI6IFRlbGVtZXRyeU1hbmFnZXI7XG5cbiAgICAvLyBDYWNoZSBhbmQgQWNjb3VudCBpbmZvIHJlZmVycmVkIGFjcm9zcyB0b2tlbiBncmFudCBmbG93XG4gICAgcHJvdGVjdGVkIGNhY2hlU3RvcmFnZTogU3RvcmFnZTtcbiAgICBwcml2YXRlIGFjY291bnQ6IEFjY291bnQ7XG5cbiAgICAvLyBzdGF0ZSB2YXJpYWJsZXNcbiAgICBwcml2YXRlIGxvZ2luSW5Qcm9ncmVzczogYm9vbGVhbjtcbiAgICBwcml2YXRlIGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3M6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzaWxlbnRMb2dpbjogYm9vbGVhbjtcbiAgICBwcml2YXRlIHJlZGlyZWN0Q2FsbGJhY2tzU2V0OiBib29sZWFuO1xuXG4gICAgLy8gQXV0aG9yaXR5IEZ1bmN0aW9uYWxpdHlcbiAgICBwcm90ZWN0ZWQgYXV0aG9yaXR5SW5zdGFuY2U6IEF1dGhvcml0eTtcblxuICAgIC8qKlxuICAgICAqIHNldHRlciBmb3IgdGhlIGF1dGhvcml0eSBVUkxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5XG4gICAgICovXG4gICAgLy8gSWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYXV0aG9yaXR5LCBjcmVhdGUgYW4gaW5zdGFuY2VcbiAgICBwdWJsaWMgc2V0IGF1dGhvcml0eSh2YWwpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UodmFsLCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gbWFuYWdlIHRoZSBhdXRob3JpdHkgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gYXV0aG9yaXR5XG4gICAgICovXG4gICAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBhdXRob3JpdHkgaW5zdGFuY2UgZnJvbSB0aGUgTVNBTCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMge0BsaW5rIEF1dGhvcml0eX0gYXV0aG9yaXR5IGluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIGdldEF1dGhvcml0eUluc3RhbmNlKCk6IEF1dGhvcml0eSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIENvbnN0cnVjdG9yIGZvciB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gdXNlZCB0byBpbnN0YW50aWF0ZSB0aGUgVXNlckFnZW50QXBwbGljYXRpb24gb2JqZWN0XG4gICAgICpcbiAgICAgKiBJbXBvcnRhbnQgYXR0cmlidXRlcyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3QgZm9yIGF1dGggYXJlOlxuICAgICAqIC0gY2xpZW50SUQ6IHRoZSBhcHBsaWNhdGlvbiBJRCBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgICAqIFlvdSBjYW4gb2J0YWluIG9uZSBieSByZWdpc3RlcmluZyB5b3VyIGFwcGxpY2F0aW9uIHdpdGggb3VyIEFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwgOiBodHRwczovL3BvcnRhbC5henVyZS5jb20vI2JsYWRlL01pY3Jvc29mdF9BQURfSUFNL0FjdGl2ZURpcmVjdG9yeU1lbnVCbGFkZS9SZWdpc3RlcmVkQXBwc1ByZXZpZXdcbiAgICAgKiAtIGF1dGhvcml0eTogdGhlIGF1dGhvcml0eSBVUkwgZm9yIHlvdXIgYXBwbGljYXRpb24uXG4gICAgICpcbiAgICAgKiBJbiBBenVyZSBBRCwgYXV0aG9yaXR5IGlzIGEgVVJMIGluZGljYXRpbmcgdGhlIEF6dXJlIGFjdGl2ZSBkaXJlY3RvcnkgdGhhdCBNU0FMIHVzZXMgdG8gb2J0YWluIHRva2Vucy5cbiAgICAgKiBJdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vJmx0O0VudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlJmd0Oy5cbiAgICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIG9uZSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggdGhlIFRlbmFudCBJZCBvciBUZW5hbnQgbmFtZSAoZm9yIGV4YW1wbGUsIGNvbnRvc28ubWljcm9zb2Z0LmNvbSkuXG4gICAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5LCByZXBsYWNlIFwiRW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmVcIiB2YWx1ZSB3aXRoIG9yZ2FuaXphdGlvbnMuXG4gICAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5IGFuZCBwZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMsIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29tbW9uLlxuICAgICAqIFRvIHJlc3RyaWN0IHN1cHBvcnQgdG8gUGVyc29uYWwgTWljcm9zb2Z0IGFjY291bnRzIG9ubHksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29uc3VtZXJzLlxuICAgICAqXG4gICAgICpcbiAgICAgKiBJbiBBenVyZSBCMkMsIGF1dGhvcml0eSBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZSZndDsvdGZwLyZsdDt0ZW5hbnQmZ3Q7LyZsdDtwb2xpY3lOYW1lJmd0Oy9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QGxpbmsgKENvbmZpZ3VyYXRpb246dHlwZSl9IGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciB0aGUgTVNBTCBVc2VyQWdlbnRBcHBsaWNhdGlvbiBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcblxuICAgICAgICAvLyBTZXQgdGhlIENvbmZpZ3VyYXRpb25cbiAgICAgICAgdGhpcy5jb25maWcgPSBidWlsZENvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbik7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBjYWxsYmFjayBib29sZWFuXG4gICAgICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmxvZ2dlciA9IHRoaXMuY29uZmlnLnN5c3RlbS5sb2dnZXI7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSB0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkO1xuICAgICAgICB0aGlzLmluQ29va2llID0gdGhpcy5jb25maWcuY2FjaGUuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTtcblxuICAgICAgICB0aGlzLnRlbGVtZXRyeU1hbmFnZXIgPSB0aGlzLmdldFRlbGVtZXRyeU1hbmFnZXJGcm9tQ29uZmlnKHRoaXMuY29uZmlnLnN5c3RlbS50ZWxlbWV0cnksIHRoaXMuY2xpZW50SWQpO1xuXG4gICAgICAgIC8vIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQsIHNldCB0aGUgZGVmYXVsdDogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCJcbiAgICAgICAgdGhpcy5hdXRob3JpdHkgPSB0aGlzLmNvbmZpZy5hdXRoLmF1dGhvcml0eSB8fCBERUZBVUxUX0FVVEhPUklUWTtcblxuICAgICAgICAvLyB0cmFjayBsb2dpbiBhbmQgYWNxdWlyZVRva2VuIGluIHByb2dyZXNzXG4gICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGNhY2hlIGtleXMgbXNhbCAtIHR5cGVzY3JpcHQgdGhyb3dzIGFuIGVycm9yIGlmIGFueSB2YWx1ZSBvdGhlciB0aGFuIFwibG9jYWxTdG9yYWdlXCIgb3IgXCJzZXNzaW9uU3RvcmFnZVwiIGlzIHBhc3NlZFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh0aGlzLmNvbmZpZy5jYWNoZS5jYWNoZUxvY2F0aW9uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRDYWNoZUxvY2F0aW9uQ29uZmlnRXJyb3IodGhpcy5jb25maWcuY2FjaGUuY2FjaGVMb2NhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0aWFsaXplIHdpbmRvdyBoYW5kbGluZyBjb2RlXG4gICAgICAgIHdpbmRvdy5vcGVuZWRXaW5kb3dzID0gW107XG4gICAgICAgIHdpbmRvdy5hY3RpdmVSZW5ld2FscyA9IHt9O1xuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMgPSBbXTtcbiAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlcyA9IHsgfTtcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xuICAgICAgICB3aW5kb3cubXNhbCA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgdXJsSGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICBjb25zdCB1cmxDb250YWluc0hhc2ggPSB0aGlzLnVybENvbnRhaW5zSGFzaCh1cmxIYXNoKTtcblxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcbiAgICAgICAgICAgIGlmICh1cmxDb250YWluc0hhc2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UodXJsSGFzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjcmVnaW9uIFJlZGlyZWN0IENhbGxiYWNrc1xuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICogU2V0IHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIHRoZSByZWRpcmVjdCBmbG93IHRvIHNlbmQgYmFjayB0aGUgc3VjY2VzcyBvciBlcnJvciBvYmplY3QuXG4gICAgICogQHBhcmFtIHtAbGluayAodG9rZW5SZWNlaXZlZENhbGxiYWNrOnR5cGUpfSBzdWNjZXNzQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyB0aGUgQXV0aFJlc3BvbnNlIG9iamVjdCwgY29udGFpbmluZyBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgKiBAcGFyYW0ge0BsaW5rIChlcnJvclJlY2VpdmVkQ2FsbGJhY2s6dHlwZSl9IGVycm9yQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyBhIEF1dGhFcnJvciBvYmplY3QsIGNvbnRhaW5pbmcgZXJyb3IgZGF0YSBmcm9tIGVpdGhlciB0aGUgc2VydmVyXG4gICAgICogb3IgdGhlIGxpYnJhcnksIGRlcGVuZGluZyBvbiB0aGUgb3JpZ2luIG9mIHRoZSBlcnJvci5cbiAgICAgKi9cbiAgICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKHRva2VuUmVjZWl2ZWRDYWxsYmFjazogdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s6IGVycm9yUmVjZWl2ZWRDYWxsYmFjayk6IHZvaWQ7XG4gICAgaGFuZGxlUmVkaXJlY3RDYWxsYmFjayhhdXRoQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrKTogdm9pZDtcbiAgICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrKGF1dGhPclRva2VuQ2FsbGJhY2s6IGF1dGhSZXNwb25zZUNhbGxiYWNrIHwgdG9rZW5SZWNlaXZlZENhbGxiYWNrLCBlcnJvclJlY2VpdmVkQ2FsbGJhY2s/OiBlcnJvclJlY2VpdmVkQ2FsbGJhY2spOiB2b2lkIHtcbiAgICAgICAgaWYgKCFhdXRoT3JUb2tlbkNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoYXV0aE9yVG9rZW5DYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgY2FsbGJhY2tzXG4gICAgICAgIGlmIChlcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrID0gYXV0aE9yVG9rZW5DYWxsYmFjayBhcyB0b2tlblJlY2VpdmVkQ2FsbGJhY2s7XG4gICAgICAgICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IGVycm9yUmVjZWl2ZWRDYWxsYmFjaztcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJUaGlzIG92ZXJsb2FkIGZvciBjYWxsYmFjayBpcyBkZXByZWNhdGVkIC0gcGxlYXNlIGNoYW5nZSB0aGUgZm9ybWF0IG9mIHRoZSBjYWxsYmFja3MgdG8gYSBzaW5nbGUgY2FsbGJhY2sgYXMgc2hvd246IChlcnI6IEF1dGhFcnJvciwgcmVzcG9uc2U6IEF1dGhSZXNwb25zZSkuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayA9IGF1dGhPclRva2VuQ2FsbGJhY2sgYXMgYXV0aFJlc3BvbnNlQ2FsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0ID0gdHJ1ZTtcblxuICAgICAgICAvLyBPbiB0aGUgc2VydmVyIDMwMiAtIFJlZGlyZWN0LCBoYW5kbGUgdGhpc1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZEhhc2ggPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcbiAgICAgICAgICAgIGlmIChjYWNoZWRIYXNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ2FsbEJhY2soY2FjaGVkSGFzaCwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGF1dGhSZXNwb25zZUhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIHJlc29sdmU/OiBhbnkpIDogdm9pZCB7XG4gICAgICAgIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVSZWRpcmVjdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlblJlY2VpdmVkQ2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoUmVzcG9uc2VDYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdXRoRXJyb3JIYW5kbGVyKGludGVyYWN0aW9uVHlwZTogSW50ZXJhY3Rpb25UeXBlLCBhdXRoRXJyOiBBdXRoRXJyb3IsIHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIHJlamVjdD86IGFueSkgOiB2b2lkIHtcbiAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayhhdXRoRXJyLCByZXNwb25zZS5hY2NvdW50U3RhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUNhbGxiYWNrKGF1dGhFcnIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbnRlcmFjdGlvblR5cGUgPT09IENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCkge1xuICAgICAgICAgICAgcmVqZWN0KGF1dGhFcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuICAgIC8qKlxuICAgICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3MgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50LlxuICAgICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cbiAgICAgKi9cbiAgICBsb2dpblJlZGlyZWN0KHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAgICAgLy8gVGhyb3cgZXJyb3IgaWYgY2FsbGJhY2tzIGFyZSBub3Qgc2V0IGJlZm9yZSByZWRpcmVjdFxuICAgICAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIHRydWUsIHJlcXVlc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIGJ5IHJlZGlyZWN0aW5nIHRoZSB1c2VyJ3MgYnJvd3NlciB3aW5kb3cgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXG4gICAgICogQHBhcmFtIHtAbGluayAoQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzOnR5cGUpfVxuICAgICAqXG4gICAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBhY3F1aXJlVG9rZW5SZWRpcmVjdChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlSZXF1ZXN0RXJyb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRocm93IGVycm9yIGlmIGNhbGxiYWNrcyBhcmUgbm90IHNldCBiZWZvcmUgcmVkaXJlY3RcbiAgICAgICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCBmYWxzZSwgcmVxdWVzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyB2aWEgb3BlbmluZyBhIHBvcHVwIHdpbmRvdyBpbiB0aGUgdXNlcidzIGJyb3dzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QGxpbmsgKEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyczp0eXBlKX1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlLjxBdXRoUmVzcG9uc2U+fSAtIGEgcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUge0BsaW5rIEF1dGhSZXNwb25zZX0gb2JqZWN0XG4gICAgICovXG4gICAgbG9naW5Qb3B1cChyZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JbnRlcmFjdGl2ZShDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXAsIHRydWUsIHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIHZpYSBvcGVuaW5nIGEgcG9wdXAgd2luZG93IGluIHRoZSB1c2VyJ3MgYnJvd3NlclxuICAgICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxuICAgICAqXG4gICAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBhIHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxuICAgICAqL1xuICAgIGFjcXVpcmVUb2tlblBvcHVwKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5UmVxdWVzdEVycm9yKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkludGVyYWN0aXZlKENvbnN0YW50cy5pbnRlcmFjdGlvblR5cGVQb3B1cCwgZmFsc2UsIHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vICNyZWdpb24gQWNxdWlyZSBUb2tlblxuXG4gICAgLyoqXG4gICAgICogVXNlIHdoZW4gaW5pdGlhdGluZyB0aGUgbG9naW4gcHJvY2VzcyBvciB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJLFxuICAgICAqIGVpdGhlciBieSByZWRpcmVjdGluZyB0aGUgdXNlcidzIGJyb3dzZXIgd2luZG93IHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50IG9yIHZpYSBvcGVuaW5nIGEgcG9wdXAgd2luZG93IGluIHRoZSB1c2VyJ3MgYnJvd3Nlci5cbiAgICAgKiBAcGFyYW0ge0BsaW5rIChBdXRoZW50aWNhdGlvblBhcmFtZXRlcnM6dHlwZSl9XG4gICAgICpcbiAgICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHByaXZhdGUgYWNxdWlyZVRva2VuSW50ZXJhY3RpdmUoaW50ZXJhY3Rpb25UeXBlOiBJbnRlcmFjdGlvblR5cGUsIGlzTG9naW5DYWxsOiBib29sZWFuLCByZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCByZXNvbHZlPzogYW55LCByZWplY3Q/OiBhbnkpOiB2b2lkIHtcblxuICAgICAgICAvLyBJZiBhbHJlYWR5IGluIHByb2dyZXNzLCBkbyBub3QgcHJvY2VlZFxuICAgICAgICBpZiAodGhpcy5sb2dpbkluUHJvZ3Jlc3MgfHwgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XG4gICAgICAgICAgICBjb25zdCB0aHJvd25FcnJvciA9IHRoaXMubG9naW5JblByb2dyZXNzID8gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCkgOiBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCk7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZU9ubHlSZXNwb25zZSA9IGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkodGhpcy5nZXRBY2NvdW50U3RhdGUocmVxdWVzdCAmJiByZXF1ZXN0LnN0YXRlKSk7XG4gICAgICAgICAgICB0aGlzLmF1dGhFcnJvckhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLFxuICAgICAgICAgICAgICAgIHRocm93bkVycm9yLFxuICAgICAgICAgICAgICAgIHN0YXRlT25seVJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHJlamVjdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBleHRyYVNjb3Blc1RvQ29uc2VudCBpcyBwYXNzZWQgaW4gbG9naW5DYWxsLCBhcHBlbmQgdGhlbSB0byB0aGUgbG9naW4gcmVxdWVzdFxuICAgICAgICBjb25zdCBzY29wZXM6IEFycmF5PHN0cmluZz4gPSBpc0xvZ2luQ2FsbCA/IHRoaXMuYXBwZW5kU2NvcGVzKHJlcXVlc3QpIDogcmVxdWVzdC5zY29wZXM7XG5cbiAgICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXG4gICAgICAgIHRoaXMudmFsaWRhdGVJbnB1dFNjb3BlKHNjb3BlcywgIWlzTG9naW5DYWxsKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGFjY291bnQgb2JqZWN0IGlmIGEgc2Vzc2lvbiBleGlzdHNcbiAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiAhaXNMb2dpbkNhbGwpID8gcmVxdWVzdC5hY2NvdW50IDogdGhpcy5nZXRBY2NvdW50KCk7XG5cbiAgICAgICAgLy8gSWYgbm8gc2Vzc2lvbiBleGlzdHMsIHByb21wdCB0aGUgdXNlciB0byBsb2dpbi5cbiAgICAgICAgaWYgKCFhY2NvdW50ICYmICFTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5pc1NTT1BhcmFtKHJlcXVlc3QpKSB7XG4gICAgICAgICAgICBpZiAoaXNMb2dpbkNhbGwpIHtcbiAgICAgICAgICAgICAgICAvLyBleHRyYWN0IEFEQUwgaWRfdG9rZW4gaWYgZXhpc3RzXG4gICAgICAgICAgICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmV4dHJhY3RBREFMSWRUb2tlbigpO1xuXG4gICAgICAgICAgICAgICAgLy8gc2lsZW50IGxvZ2luIGlmIEFEQUwgaWRfdG9rZW4gaXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSAtIFNTT1xuICAgICAgICAgICAgICAgIGlmIChhZGFsSWRUb2tlbiAmJiAhc2NvcGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5idWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUhhbmRsZXIoaW50ZXJhY3Rpb25UeXBlLCByZXNwb25zZSwgcmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFM6IFwiICsgZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9jZWVkIHRvIGxvZ2luIHNpbmNlIEFUUyBmYWlsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSGVscGVyKG51bGwsIGludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGwsIHJlcXVlc3QsIHNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIEFEQUwgdG9rZW4gZm91bmQsIHByb2NlZWQgdG8gbG9naW5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5IZWxwZXIobnVsbCwgaW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbCwgcmVxdWVzdCwgc2NvcGVzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFjcXVpcmVUb2tlbiBjYWxsLCBidXQgbm8gYWNjb3VudCBvciBjb250ZXh0IGdpdmVuLCBzbyB0aHJvdyBlcnJvclxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VyIHNlc3Npb24gZXhpc3RzXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5IZWxwZXIoYWNjb3VudCwgaW50ZXJhY3Rpb25UeXBlLCBpc0xvZ2luQ2FsbCwgcmVxdWVzdCwgc2NvcGVzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gYWNxdWlyZVRva2VuXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIGFjcXVpcmVUb2tlbkhlbHBlcihhY2NvdW50OiBBY2NvdW50LCBpbnRlcmFjdGlvblR5cGU6IEludGVyYWN0aW9uVHlwZSwgaXNMb2dpbkNhbGw6IGJvb2xlYW4sIHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHNjb3Blcz86IEFycmF5PHN0cmluZz4sIHJlc29sdmU/OiBhbnksIHJlamVjdD86IGFueSk6IHZvaWQge1xuICAgIC8vIFRyYWNrIHRoZSBhY3F1aXJlVG9rZW4gcHJvZ3Jlc3NcbiAgICAgICAgaWYgKGlzTG9naW5DYWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzY29wZXMgPyBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKSA6IHRoaXMuY2xpZW50SWQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycztcbiAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQXV0aG9yaXR5ID0gKCFpc0xvZ2luQ2FsbCAmJiByZXF1ZXN0ICYmIHJlcXVlc3QuYXV0aG9yaXR5KSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcblxuICAgICAgICBsZXQgcG9wVXBXaW5kb3c6IFdpbmRvdztcbiAgICAgICAgaWYgKGludGVyYWN0aW9uVHlwZSA9PT0gQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVBvcHVwKSB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIHBvcHVwIHdpbmRvd1xuICAgICAgICAgICAgcG9wVXBXaW5kb3cgPSB0aGlzLm9wZW5XaW5kb3coXCJhYm91dDpibGFua1wiLCBcIl9ibGFua1wiLCAxLCB0aGlzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgaWYgKCFwb3BVcFdpbmRvdykge1xuICAgICAgICAgICAgICAgIC8vIFdlIHBhc3MgcmVqZWN0IGluIG9wZW5XaW5kb3csIHdlIHJlamVjdCB0aGVyZSBkdXJpbmcgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHkucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyBPbiBGdWxmaWxsbWVudFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VUeXBlOiBzdHJpbmcgPSBpc0xvZ2luQ2FsbCA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCBzY29wZXMsIGZhbHNlKTtcbiAgICAgICAgICAgIGxldCBsb2dpblN0YXJ0UGFnZTogc3RyaW5nO1xuXG4gICAgICAgICAgICBpZiAoaXNMb2dpbkNhbGwpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdXNlciBzZXRzIHRoZSBsb2dpbiBzdGFydCBwYWdlIC0gYW5ndWxhciBvbmx5Pz9cbiAgICAgICAgICAgICAgICBsb2dpblN0YXJ0UGFnZSA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFuZ3VsYXJMb2dpblJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIGlmICghbG9naW5TdGFydFBhZ2UgfHwgbG9naW5TdGFydFBhZ2UgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9naW5TdGFydFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5hbmd1bGFyTG9naW5SZXF1ZXN0LCBcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHksXG4gICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICAgICAgICBzY29wZXMsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0ICYmIHJlcXVlc3Quc3RhdGVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FjaGVFbnRyaWVzKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCwgbG9naW5TdGFydFBhZ2UpO1xuXG4gICAgICAgICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0KTtcblxuICAgICAgICAgICAgLy8gQ29uc3RydWN0IHVybE5hdmlnYXRlXG4gICAgICAgICAgICBjb25zdCB1cmxOYXZpZ2F0ZSA9IFVybFV0aWxzLmNyZWF0ZU5hdmlnYXRlVXJsKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCkgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcblxuICAgICAgICAgICAgLy8gc2V0IHN0YXRlIGluIGNhY2hlXG4gICAgICAgICAgICBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTG9naW5DYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW50ZXJhY3Rpb25UeXBlID09PSBDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUG9wdXApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IGlzTG9naW5DYWxsID8gQ29uc3RhbnRzLmxvZ2luIDogQ29uc3RhbnRzLnJlbmV3VG9rZW47XG5cbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RlciBjYWxsYmFjayB0byBjYXB0dXJlIHJlc3VsdHMgZnJvbSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJbnRlcmFjdGlvblR5cGVFcnJvcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBwcm9tcHQgdXNlciBmb3IgaW50ZXJhY3Rpb25cbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGVXaW5kb3codXJsTmF2aWdhdGUsIHBvcFVwV2luZG93KTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcImNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50c1wiKTtcbiAgICAgICAgICAgIHRoaXMuYXV0aEVycm9ySGFuZGxlcihpbnRlcmFjdGlvblR5cGUsIENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnIudG9TdHJpbmcpLCBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KHJlcXVlc3Quc3RhdGUpLCByZWplY3QpO1xuICAgICAgICAgICAgaWYgKHBvcFVwV2luZG93KSB7XG4gICAgICAgICAgICAgICAgcG9wVXBXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gb2J0YWluIGEgdG9rZW4gYmVmb3JlIGV2ZXJ5IGNhbGwgdG8gdGhlIEFQSSAvIHJlc291cmNlIHByb3ZpZGVyXG4gICAgICpcbiAgICAgKiBNU0FMIHJldHVybidzIGEgY2FjaGVkIHRva2VuIHdoZW4gYXZhaWxhYmxlXG4gICAgICogT3IgaXQgc2VuZCdzIGEgcmVxdWVzdCB0byB0aGUgU1RTIHRvIG9idGFpbiBhIG5ldyB0b2tlbiB1c2luZyBhIGhpZGRlbiBpZnJhbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cbiAgICAgKlxuICAgICAqIFRvIHJlbmV3IGlkVG9rZW4sIHBsZWFzZSBwYXNzIGNsaWVudElkIGFzIHRoZSBvbmx5IHNjb3BlIGluIHRoZSBBdXRoZW50aWNhdGlvbiBQYXJhbWV0ZXJzXG4gICAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gYSBwcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcbiAgICAgKlxuICAgICAqL1xuICAgIEByZXNvbHZlVG9rZW5Pbmx5SWZPdXRPZklmcmFtZVxuICAgIGFjcXVpcmVUb2tlblNpbGVudChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBQcm9taXNlPEF1dGhSZXNwb25zZT4ge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVJlcXVlc3RFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShyZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjb3BlID0gcmVxdWVzdC5zY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYWNjb3VudCwgZ2l2ZSB0aGF0IGFjY291bnQgdGhlIHByaW9yaXR5XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xuXG4gICAgICAgICAgICAvLyBleHRyYWN0IGlmIHRoZXJlIGlzIGFuIGFkYWxJZFRva2VuIHN0YXNoZWQgaW4gdGhlIGNhY2hlXG4gICAgICAgICAgICBjb25zdCBhZGFsSWRUb2tlbiA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFkYWxJZFRva2VuKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gYWNjb3VudCBsb2dnZWQgaW4gYW5kIG5vIGxvZ2luX2hpbnQvc2lkIGlzIHBhc3NlZCBpbiB0aGUgcmVxdWVzdFxuICAgICAgICAgICAgaWYgKCFhY2NvdW50ICYmICEocmVxdWVzdC5zaWQgIHx8IHJlcXVlc3QubG9naW5IaW50KSAmJiBTdHJpbmdVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCByZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcbiAgICAgICAgICAgICAgICBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSxcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudElkLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2NvcGVzLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXG4gICAgICAgICAgICAgICAgcmVxdWVzdCAmJiByZXF1ZXN0LnN0YXRlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgICAgICAgICAgaWYgKFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLmlzU1NPUGFyYW0ocmVxdWVzdCkgfHwgYWNjb3VudCkge1xuICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5wb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQsIHJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgdXNlciBkaWRuJ3QgcGFzcyBsb2dpbl9oaW50L3NpZCBhbmQgYWRhbCdzIGlkdG9rZW4gaXMgcHJlc2VudCwgZXh0cmFjdCB0aGUgbG9naW5faGludCBmcm9tIHRoZSBhZGFsSWRUb2tlblxuICAgICAgICAgICAgZWxzZSBpZiAoIWFjY291bnQgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgYWRhbElkVG9rZW4gZXhpc3RzLCBleHRyYWN0IHRoZSBTU08gaW5mbyBmcm9tIHRoZSBzYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgYWRhbElkVG9rZW5PYmplY3QgPSBUb2tlblV0aWxzLmV4dHJhY3RJZFRva2VuKGFkYWxJZFRva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xuICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5wb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQsIG51bGwsIGFkYWxJZFRva2VuT2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVzZXJDb250YWluZWRDbGFpbXMgPSByZXF1ZXN0LmNsYWltc1JlcXVlc3QgfHwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNsYWltc1ZhbHVlO1xuXG4gICAgICAgICAgICBsZXQgYXV0aEVycjogQXV0aEVycm9yO1xuICAgICAgICAgICAgbGV0IGNhY2hlUmVzdWx0UmVzcG9uc2U7XG5cbiAgICAgICAgICAgIGlmICghdXNlckNvbnRhaW5lZENsYWltcyAmJiAhcmVxdWVzdC5mb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjYWNoZVJlc3VsdFJlc3BvbnNlID0gdGhpcy5nZXRDYWNoZWRUb2tlbihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aEVyciA9IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZXNvbHZlL3JlamVjdCBiYXNlZCBvbiBjYWNoZVJlc3VsdFxuICAgICAgICAgICAgaWYgKGNhY2hlUmVzdWx0UmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVG9rZW4gaXMgYWxyZWFkeSBpbiBjYWNoZSBmb3Igc2NvcGU6XCIgKyBzY29wZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYWNoZVJlc3VsdFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGF1dGhFcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKGF1dGhFcnIuZXJyb3JDb2RlICsgXCI6XCIgKyBhdXRoRXJyLmVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGF1dGhFcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZSBwcm9jZWVkIHdpdGggbG9naW5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBsb2dNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyQ29udGFpbmVkQ2xhaW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ01lc3NhZ2UgPSBcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIGNsYWltcyB3ZXJlIGdpdmVuLlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5mb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nTWVzc2FnZSA9IFwiU2tpcHBlZCBjYWNoZSBsb29rdXAgc2luY2UgcmVxdWVzdC5mb3JjZVJlZnJlc2ggb3B0aW9uIHdhcyBzZXQgdG8gdHJ1ZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ01lc3NhZ2UgPSBcIlRva2VuIGlzIG5vdCBpbiBjYWNoZSBmb3Igc2NvcGU6XCIgKyBzY29wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShsb2dNZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgIC8vIENhY2hlIHJlc3VsdCBjYW4gcmV0dXJuIG51bGwgaWYgY2FjaGUgaXMgZW1wdHkuIEluIHRoYXQgY2FzZSwgc2V0IGF1dGhvcml0eSB0byBkZWZhdWx0IHZhbHVlIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQgdG8gdGhlIGFwaS5cbiAgICAgICAgICAgICAgICBpZiAoIXNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSByZXF1ZXN0LmF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2FjaGUgbWlzc1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UucmVzb2x2ZUVuZHBvaW50c0FzeW5jKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIHJlZnJlc2ggYXR0ZW1wdCB3aXRoIGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICogQWxyZWFkeSByZW5ld2luZyBmb3IgdGhpcyBzY29wZSwgY2FsbGJhY2sgd2hlbiB3ZSBnZXQgdGhlIHRva2VuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBmb3Igc2NvcGU6IFwiICsgc2NvcGUgKyBcIiBpcyBpbiBwcm9ncmVzcy4gUmVnaXN0ZXJpbmcgY2FsbGJhY2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWN0aXZlIHJlbmV3YWxzIGNvbnRhaW5zIHRoZSBzdGF0ZSBmb3IgZWFjaCByZW5ld2FsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnNjb3BlcyAmJiByZXF1ZXN0LnNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEgJiYgcmVxdWVzdC5zY29wZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEFwcCB1c2VzIGlkVG9rZW4gdG8gc2VuZCB0byBhcGkgZW5kcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIERlZmF1bHQgc2NvcGUgaXMgdHJhY2tlZCBhcyBjbGllbnRJZCB0byBzdG9yZSB0aGlzIHRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdpbmcgaWRUb2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZXdJZFRva2VuKHJlcXVlc3Quc2NvcGVzLCByZXNvbHZlLCByZWplY3QsIGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVuZXcgYWNjZXNzIHRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBhY2Nlc3N0b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5ld1Rva2VuKHJlcXVlc3Quc2NvcGVzLCByZXNvbHZlLCByZWplY3QsIGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnIudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFBvcHVwIFdpbmRvdyBDcmVhdGlvblxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogVXNlZCB0byBzZW5kIHRoZSB1c2VyIHRvIHRoZSByZWRpcmVjdF91cmkgYWZ0ZXIgYXV0aGVudGljYXRpb24gaXMgY29tcGxldGUuIFRoZSB1c2VyJ3MgYmVhcmVyIHRva2VuIGlzIGF0dGFjaGVkIHRvIHRoZSBVUkkgZnJhZ21lbnQgYXMgYW4gaWRfdG9rZW4vYWNjZXNzX3Rva2VuIGZpZWxkLlxuICAgICAqIFRoaXMgZnVuY3Rpb24gYWxzbyBjbG9zZXMgdGhlIHBvcHVwIHdpbmRvdyBhZnRlciByZWRpcmVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxOYXZpZ2F0ZVxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEBwYXJhbSBpbnRlcnZhbFxuICAgICAqIEBwYXJhbSBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSByZXNvbHZlXG4gICAgICogQHBhcmFtIHJlamVjdFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIG9wZW5XaW5kb3codXJsTmF2aWdhdGU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgaW50ZXJ2YWw6IG51bWJlciwgaW5zdGFuY2U6IHRoaXMsIHJlc29sdmU/OiBGdW5jdGlvbiwgcmVqZWN0PzogRnVuY3Rpb24pOiBXaW5kb3cge1xuICAgIC8vIEdlbmVyYXRlIGEgcG9wdXAgd2luZG93XG4gICAgICAgIGxldCBwb3B1cFdpbmRvdzogV2luZG93O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcG9wdXBXaW5kb3cgPSB0aGlzLm9wZW5Qb3B1cCh1cmxOYXZpZ2F0ZSwgdGl0bGUsIENvbnN0YW50cy5wb3BVcFdpZHRoLCBDb25zdGFudHMucG9wVXBIZWlnaHQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSArIFwiOlwiICsgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuY29kZSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xuICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVzaCBwb3B1cCB3aW5kb3cgaGFuZGxlIG9udG8gc3RhY2sgZm9yIHRyYWNraW5nXG4gICAgICAgIHdpbmRvdy5vcGVuZWRXaW5kb3dzLnB1c2gocG9wdXBXaW5kb3cpO1xuXG4gICAgICAgIGNvbnN0IHBvbGxUaW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiBwb3B1cCBjbG9zZWQgb3IgbG9naW4gaW4gcHJvZ3Jlc3MsIGNhbmNlbCBsb2dpblxuICAgICAgICAgICAgaWYgKHBvcHVwV2luZG93ICYmIHBvcHVwV2luZG93LmNsb3NlZCAmJiAoaW5zdGFuY2UubG9naW5JblByb2dyZXNzIHx8IGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJDYW5jZWxsZWRFcnJvcigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChcIm1zYWw6cG9wVXBDbG9zZWRcIiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuY29kZSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmRlc2MpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3BVcFdpbmRvd0xvY2F0aW9uID0gcG9wdXBXaW5kb3cubG9jYXRpb247XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcG9wdXAgaGFzaCBjaGFuZ2VzLCBjbG9zZSB0aGUgcG9wdXAgd2luZG93XG4gICAgICAgICAgICAgICAgaWYgKHBvcFVwV2luZG93TG9jYXRpb24uaHJlZi5pbmRleE9mKHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHBvbGxUaW1lcik7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJDbG9zaW5nIHBvcHVwIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgaG93IHRoaXMgY2FuIGJlIGV4dHJhY3RlZCBmb3IgYW55IGZyYW1ld29yayBzcGVjaWZpYyBjb2RlP1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwSGFzaENoYW5nZWRcIiwgcG9wVXBXaW5kb3dMb2NhdGlvbi5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93Lm9wZW5lZFdpbmRvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIENyb3NzIERvbWFpbiB1cmwgY2hlY2sgZXJyb3IuXG4gICAgICAgICAgICAgKiBXaWxsIGJlIHRocm93biB1bnRpbCBBQUQgcmVkaXJlY3RzIHRoZSB1c2VyIGJhY2sgdG8gdGhlIGFwcFwicyByb290IHBhZ2Ugd2l0aCB0aGUgdG9rZW4uXG4gICAgICAgICAgICAgKiBObyBuZWVkIHRvIGxvZyBvciB0aHJvdyB0aGlzIGVycm9yIGFzIGl0IHdpbGwgY3JlYXRlIHVubmVjZXNzYXJ5IHRyYWZmaWMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJ2YWwpO1xuXG4gICAgICAgIHJldHVybiBwb3B1cFdpbmRvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBDb25maWd1cmVzIHBvcHVwIHdpbmRvdyBmb3IgbG9naW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsTmF2aWdhdGVcbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcGFyYW0gcG9wVXBXaWR0aFxuICAgICAqIEBwYXJhbSBwb3BVcEhlaWdodFxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgcHJpdmF0ZSBvcGVuUG9wdXAodXJsTmF2aWdhdGU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgcG9wVXBXaWR0aDogbnVtYmVyLCBwb3BVcEhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGFkZGluZyB3aW5MZWZ0IGFuZCB3aW5Ub3AgdG8gYWNjb3VudCBmb3IgZHVhbCBtb25pdG9yXG4gICAgICAgICAgICAgKiB1c2luZyBzY3JlZW5MZWZ0IGFuZCBzY3JlZW5Ub3AgZm9yIElFOCBhbmQgZWFybGllclxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCB3aW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW5YO1xuICAgICAgICAgICAgY29uc3Qgd2luVG9wID0gd2luZG93LnNjcmVlblRvcCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiB3aW5kb3cuc2NyZWVuWTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogd2luZG93LmlubmVyV2lkdGggZGlzcGxheXMgYnJvd3NlciB3aW5kb3dcInMgaGVpZ2h0IGFuZCB3aWR0aCBleGNsdWRpbmcgdG9vbGJhcnNcbiAgICAgICAgICAgICAqIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCBmb3IgSUU4IGFuZCBlYXJsaWVyXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wVXBXaWR0aCAvIDIpKSArIHdpbkxlZnQ7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcFVwSGVpZ2h0IC8gMikpICsgd2luVG9wO1xuXG4gICAgICAgICAgICAvLyBvcGVuIHRoZSB3aW5kb3dcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gd2luZG93Lm9wZW4odXJsTmF2aWdhdGUsIHRpdGxlLCBcIndpZHRoPVwiICsgcG9wVXBXaWR0aCArIFwiLCBoZWlnaHQ9XCIgKyBwb3BVcEhlaWdodCArIFwiLCB0b3A9XCIgKyB0b3AgKyBcIiwgbGVmdD1cIiArIGxlZnQpO1xuICAgICAgICAgICAgaWYgKCFwb3B1cFdpbmRvdykge1xuICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVQb3B1cFdpbmRvd0Vycm9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9wdXBXaW5kb3cuZm9jdXMpIHtcbiAgICAgICAgICAgICAgICBwb3B1cFdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcG9wdXBXaW5kb3c7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiZXJyb3Igb3BlbmluZyBwb3B1cCBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcihlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBJZnJhbWUgTWFuYWdlbWVudFxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFJldHVybnMgd2hldGhlciBjdXJyZW50IHdpbmRvdyBpcyBpbiBpZnJhbSBmb3IgdG9rZW4gcmVuZXdhbFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwdWJsaWMgaXNJbklmcmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHBhcmVudCB3aW5kb3cgZXhpc3RzIGFuZCBoYXMgbXNhbFxuICAgICAqL1xuICAgIHByaXZhdGUgcGFyZW50SXNNc2FsKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQubXNhbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2FsbGluZyBfbG9hZEZyYW1lIGJ1dCB3aXRoIGEgdGltZW91dCB0byBzaWduYWwgZmFpbHVyZSBpbiBsb2FkZnJhbWVTdGF0dXMuIENhbGxiYWNrcyBhcmUgbGVmdC5cbiAgICAgKiByZWdpc3RlcmVkIHdoZW4gbmV0d29yayBlcnJvcnMgb2NjdXIgYW5kIHN1YnNlcXVlbnQgdG9rZW4gcmVxdWVzdHMgZm9yIHNhbWUgcmVzb3VyY2UgYXJlIHJlZ2lzdGVyZWQgdG8gdGhlIHBlbmRpbmcgcmVxdWVzdC5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZTogc3RyaW5nLCBmcmFtZU5hbWU6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyBzZXQgaWZyYW1lIHNlc3Npb24gdG8gcGVuZGluZ1xuICAgICAgICBjb25zdCBleHBlY3RlZFN0YXRlID0gd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXTtcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlNldCBsb2FkaW5nIHN0YXRlIHRvIHBlbmRpbmcgZm9yOiBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBleHBlY3RlZFN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLmxvYWRGcmFtZSh1cmxOYXZpZ2F0ZSwgZnJhbWVOYW1lKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBleHBlY3RlZFN0YXRlKSA9PT0gQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgLy8gZmFpbCB0aGUgaWZyYW1lIHNlc3Npb24gaWYgaXQncyBpbiBwZW5kaW5nIHN0YXRlXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkxvYWRpbmcgZnJhbWUgaGFzIHRpbWVkIG91dCBhZnRlcjogXCIgKyAodGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQgLyAxMDAwKSArIFwiIHNlY29uZHMgZm9yIHNjb3BlIFwiICsgc2NvcGUgKyBcIjpcIiArIGV4cGVjdGVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIC8vIEVycm9yIGFmdGVyIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0obnVsbCwgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVRva2VuUmVuZXdhbFRpbWVvdXRFcnJvcigpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUsIENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBMb2FkcyBpZnJhbWUgd2l0aCBhdXRob3JpemF0aW9uIGVuZHBvaW50IFVSTFxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGxvYWRGcmFtZSh1cmxOYXZpZ2F0ZTogc3RyaW5nLCBmcmFtZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGlzIHRyaWNrIG92ZXJjb21lcyBpZnJhbWUgbmF2aWdhdGlvbiBpbiBJRVxuICAgICAgICAgKiBJRSBkb2VzIG5vdCBsb2FkIHRoZSBwYWdlIGNvbnNpc3RlbnRseSBpbiBpZnJhbWVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJMb2FkRnJhbWU6IFwiICsgZnJhbWVOYW1lKTtcbiAgICAgICAgY29uc3QgZnJhbWVDaGVjayA9IGZyYW1lTmFtZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gdGhpcy5hZGRIaWRkZW5JRnJhbWUoZnJhbWVDaGVjayk7XG4gICAgICAgICAgICBpZiAoZnJhbWVIYW5kbGUuc3JjID09PSBcIlwiIHx8IGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJhYm91dDpibGFua1wiKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVIYW5kbGUuc3JjID0gdXJsTmF2aWdhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIkZyYW1lIE5hbWUgOiBcIiArIGZyYW1lTmFtZSArIFwiIE5hdmlnYXRlZCB0bzogXCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuY29uZmlnLnN5c3RlbS5uYXZpZ2F0ZUZyYW1lV2FpdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEFkZHMgdGhlIGhpZGRlbiBpZnJhbWUgZm9yIHNpbGVudCB0b2tlbiByZW5ld2FsLlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGFkZEhpZGRlbklGcmFtZShpZnJhbWVJZDogc3RyaW5nKTogSFRNTElGcmFtZUVsZW1lbnQge1xuICAgICAgICBpZiAodHlwZW9mIGlmcmFtZUlkID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBZGQgbXNhbCBmcmFtZSB0byBkb2N1bWVudDpcIiArIGlmcmFtZUlkKTtcbiAgICAgICAgbGV0IGFkYWxGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlmcmFtZUlkKSBhcyBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICAgICAgaWYgKCFhZGFsRnJhbWUpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFbGVtZW50ICYmXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNS4wXCIpID09PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICAgICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZnJhbWVJZCk7XG4gICAgICAgICAgICAgICAgaWZyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICAgICAgICBpZnIuc3R5bGUud2lkdGggPSBpZnIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgaWZyLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGFkYWxGcmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoaWZyKSBhcyBIVE1MSUZyYW1lRWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmJvZHkgJiYgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxpZnJhbWUgbmFtZT0nXCIgKyBpZnJhbWVJZCArIFwiJyBpZD0nXCIgKyBpZnJhbWVJZCArIFwiJyBzdHlsZT0nZGlzcGxheTpub25lJz48L2lmcmFtZT5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuZnJhbWVzICYmIHdpbmRvdy5mcmFtZXNbaWZyYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgYWRhbEZyYW1lID0gd2luZG93LmZyYW1lc1tpZnJhbWVJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRhbEZyYW1lO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gR2VuZXJhbCBIZWxwZXJzXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXNlZCB0byByZWRpcmVjdCB0aGUgYnJvd3NlciB0byB0aGUgU1RTIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsTmF2aWdhdGUgLSBVUkwgb2YgdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIG5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlOiBzdHJpbmcsIHBvcHVwV2luZG93PzogV2luZG93KSB7XG4gICAgICAgIC8vIE5hdmlnYXRlIGlmIHZhbGlkIFVSTFxuICAgICAgICBpZiAodXJsTmF2aWdhdGUgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkodXJsTmF2aWdhdGUpKSB7XG4gICAgICAgICAgICBjb25zdCBuYXZpZ2F0ZVdpbmRvdzogV2luZG93ID0gcG9wdXBXaW5kb3cgPyBwb3B1cFdpbmRvdyA6IHdpbmRvdztcbiAgICAgICAgICAgIGNvbnN0IGxvZ01lc3NhZ2U6IHN0cmluZyA9IHBvcHVwV2luZG93ID8gXCJOYXZpZ2F0ZWQgUG9wdXAgd2luZG93IHRvOlwiICsgdXJsTmF2aWdhdGUgOiBcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGU7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKGxvZ01lc3NhZ2UpO1xuICAgICAgICAgICAgbmF2aWdhdGVXaW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmxOYXZpZ2F0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiTmF2aWdhdGUgdXJsIGlzIGVtcHR5XCIpO1xuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBVc2VkIHRvIGFkZCB0aGUgZGV2ZWxvcGVyIHJlcXVlc3RlZCBjYWxsYmFjayB0byB0aGUgYXJyYXkgb2YgY2FsbGJhY2tzIGZvciB0aGUgc3BlY2lmaWVkIHNjb3Blcy4gVGhlIHVwZGF0ZWQgYXJyYXkgaXMgc3RvcmVkIG9uIHRoZSB3aW5kb3cgb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGVjdGVkU3RhdGUgLSBVbmlxdWUgc3RhdGUgaWRlbnRpZmllciAoZ3VpZCkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNjb3BlIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIC0gVGhlIHJlc29sdmUgZnVuY3Rpb24gb2YgdGhlIHByb21pc2Ugb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCAtIFRoZSByZWplY3QgZnVuY3Rpb24gb2YgdGhlIHByb21pc2Ugb2JqZWN0LlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlZ2lzdGVyQ2FsbGJhY2soZXhwZWN0ZWRTdGF0ZTogc3RyaW5nLCBzY29wZTogc3RyaW5nLCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICAvLyB0cmFjayBhY3RpdmUgcmVuZXdhbHNcbiAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IGV4cGVjdGVkU3RhdGU7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBjYWxsYmFja3MgbWFwcGVkIGFycmF5XG4gICAgICAgIGlmICghd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XG4gICAgICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpbmRleGluZyBvbiB0aGUgY3VycmVudCBzdGF0ZSwgcHVzaCB0aGUgY2FsbGJhY2sgcGFyYW1zIHRvIGNhbGxiYWNrcyBtYXBwZWRcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdLnB1c2goeyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9KTtcblxuICAgICAgICAvLyBTdG9yZSB0aGUgc2VydmVyIHJlc3BvbnNlIGluIHRoZSBjdXJyZW50IHdpbmRvdz8/XG4gICAgICAgIGlmICghd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xuICAgICAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9XG4gICAgICAocmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgZXJyb3I6IEF1dGhFcnJvcikgPT4ge1xuICAgICAgICAgIC8vIHJlc2V0IGFjdGl2ZSByZW5ld2Fsc1xuICAgICAgICAgIHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0gPSBudWxsO1xuXG4gICAgICAgICAgLy8gZm9yIGFsbCBwcm9taXNlTWFwcGVkdG9SZW5ld1N0YXRlcyBmb3IgYSBnaXZlbiAnc3RhdGUnIC0gY2FsbCB0aGUgcmVqZWN0L3Jlc29sdmUgd2l0aCBlcnJvci90b2tlbiByZXNwZWN0aXZlbHlcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiRXJyb3IgYW5kIHJlc3BvbnNlIGFyZSBib3RoIG51bGxcIik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IG51bGw7XG4gICAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IG51bGw7XG4gICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBMb2dvdXRcblxuICAgIC8qKlxuICAgICAqIFVzZSB0byBsb2cgb3V0IHRoZSBjdXJyZW50IHVzZXIsIGFuZCByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgcG9zdExvZ291dFJlZGlyZWN0VXJpLlxuICAgICAqIERlZmF1bHQgYmVoYXZpb3VyIGlzIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXG4gICAgICovXG4gICAgbG9nb3V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICAgICAgdGhpcy5hY2NvdW50ID0gbnVsbDtcbiAgICAgICAgbGV0IGxvZ291dCA9IFwiXCI7XG4gICAgICAgIGlmICh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKSB7XG4gICAgICAgICAgICBsb2dvdXQgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlLnJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oYXV0aG9yaXR5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gYXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludFxuICAgICAgICAgICAgICAgID8gYCR7YXV0aG9yaXR5LkVuZFNlc3Npb25FbmRwb2ludH0/JHtsb2dvdXR9YFxuICAgICAgICAgICAgICAgIDogYCR7dGhpcy5hdXRob3JpdHl9b2F1dGgyL3YyLjAvbG9nb3V0PyR7bG9nb3V0fWA7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlV2luZG93KHVybE5hdmlnYXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIENsZWFyIGFsbCBhY2Nlc3MgdG9rZW5zIGluIHRoZSBjYWNoZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGNsZWFyQ2FjaGUoKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKENvbnN0YW50cy5jbGllbnRJZCwgQ29uc3RhbnRzLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbkl0ZW1zW2ldLmtleSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0Q2FjaGVJdGVtcygpO1xuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5jbGVhckNvb2tpZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBDbGVhciBhIGdpdmVuIGFjY2VzcyB0b2tlbiBmcm9tIHRoZSBjYWNoZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY2Nlc3NUb2tlblxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjbGVhckNhY2hlRm9yU2NvcGUoYWNjZXNzVG9rZW46IHN0cmluZykge1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbkl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKENvbnN0YW50cy5jbGllbnRJZCwgQ29uc3RhbnRzLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhY2Nlc3NUb2tlbkl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKHRva2VuLnZhbHVlLmFjY2Vzc1Rva2VuID09PSBhY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkodG9rZW4ua2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFJlc3BvbnNlXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqIENoZWNrcyBpZiB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJbiBjYXNlIG9mIHJlZGlyZWN0LCB0aGUgdXJsIGZyYWdtZW50IGhhcyBlaXRoZXIgaWRfdG9rZW4sIGFjY2Vzc190b2tlbiBvciBlcnJvci5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAtIEhhc2ggcGFzc2VkIGZyb20gcmVkaXJlY3QgcGFnZS5cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSB0cnVlIGlmIHJlc3BvbnNlIGNvbnRhaW5zIGlkX3Rva2VuLCBhY2Nlc3NfdG9rZW4gb3IgZXJyb3IsIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpc0NhbGxiYWNrKGhhc2g6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaXNDYWxsYmFjayB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgdXJsQ29udGFpbnNIYXNoIGluIE1TQUwuanMgdjIuMC5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLnVybENvbnRhaW5zSGFzaChoYXNoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVybENvbnRhaW5zSGFzaCh1cmxTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gdGhpcy5kZXNlcmlhbGl6ZUhhc2godXJsU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb24pIHx8XG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvcikgfHxcbiAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmFjY2Vzc1Rva2VuKSB8fFxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXNlZCB0byBjYWxsIHRoZSBjb25zdHJ1Y3RvciBjYWxsYmFjayB3aXRoIHRoZSB0b2tlbi9lcnJvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaF0gLSBIYXNoIGZyYWdtZW50IG9mIFVybC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHByb2Nlc3NDYWxsQmFjayhoYXNoOiBzdHJpbmcsIHN0YXRlSW5mbzogUmVzcG9uc2VTdGF0ZUluZm8sIHBhcmVudENhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlByb2Nlc3NpbmcgdGhlIGNhbGxiYWNrIGZyb20gcmVkaXJlY3QgcmVzcG9uc2VcIik7XG4gICAgICAgIC8vIGdldCB0aGUgc3RhdGUgaW5mbyBmcm9tIHRoZSBoYXNoXG4gICAgICAgIGlmICghc3RhdGVJbmZvKSB7XG4gICAgICAgICAgICBzdGF0ZUluZm8gPSB0aGlzLmdldFJlc3BvbnNlU3RhdGUoaGFzaCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2U7XG4gICAgICAgIGxldCBhdXRoRXJyIDogQXV0aEVycm9yO1xuICAgICAgICAvLyBTYXZlIHRoZSB0b2tlbiBpbmZvIGZyb20gdGhlIGhhc2hcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlVG9rZW5Gcm9tSGFzaChoYXNoLCBzdGF0ZUluZm8pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGF1dGhFcnIgPSBlcnI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgaGFzaCBmcm9tIHRoZSBjYWNoZVxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGNvb2tpZSBpbiB0aGUgaGFzaFxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRTdGF0ZTogc3RyaW5nID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmICgoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMucmVuZXdUb2tlbikgfHwgcmVzcG9uc2UuYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIldpbmRvdyBpcyBpbiBpZnJhbWUsIGFjcXVpcmluZyB0b2tlbiBzaWxlbnRseVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJhY3F1aXJpbmcgdG9rZW4gaW50ZXJhY3RpdmUgaW4gcHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudG9rZW5UeXBlID0gQ29uc3RhbnRzLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5sb2dpbikge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50b2tlblR5cGUgPSBDb25zdGFudHMuaWRUb2tlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhSZXNwb25zZUhhbmRsZXIoQ29uc3RhbnRzLmludGVyYWN0aW9uVHlwZVJlZGlyZWN0LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aEVycm9ySGFuZGxlcihDb25zdGFudHMuaW50ZXJhY3Rpb25UeXBlUmVkaXJlY3QsIGF1dGhFcnIsIGJ1aWxkUmVzcG9uc2VTdGF0ZU9ubHkoYWNjb3VudFN0YXRlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJlbnRDYWxsYmFjayhyZXNwb25zZSwgYXV0aEVycik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbjogXCIgKyBlcnIpO1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVycm9ySW5DYWxsYmFja0Z1bmN0aW9uKGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJdCBleHRyYWN0cyB0aGUgaGFzaCwgcHJvY2Vzc2VzIHRoZSB0b2tlbiBvciBlcnJvciBpbmZvcm1hdGlvbiBhbmQgc2F2ZXMgaXQgaW4gdGhlIGNhY2hlLiBJdCB0aGVuXG4gICAgICogY2FsbHMgdGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIGluIGNhc2Ugb2YgcmVkaXJlY3Qgb3IgcmVzb2x2ZXMgdGhlIHByb21pc2VzIHdpdGggdGhlIHJlc3VsdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2hhc2g9d2luZG93LmxvY2F0aW9uLmhhc2hdIC0gSGFzaCBmcmFnbWVudCBvZiBVcmwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBoYW5kbGVBdXRoZW50aWNhdGlvblJlc3BvbnNlKGhhc2g6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgaGFzaFxuICAgICAgICBpZiAoaGFzaCA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VsZiA9IG51bGw7XG4gICAgICAgIGxldCBpc1BvcHVwOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGxldCBpc1dpbmRvd09wZW5lck1zYWwgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCB3aW5kb3cgb3BlbmVkIHRoZSBpRnJhbWUvcG9wdXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlzV2luZG93T3BlbmVyTXNhbCA9IHdpbmRvdy5vcGVuZXIgJiYgd2luZG93Lm9wZW5lci5tc2FsICYmIHdpbmRvdy5vcGVuZXIubXNhbCAhPT0gd2luZG93Lm1zYWw7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gZXJyID0gU2VjdXJpdHlFcnJvcjogQmxvY2tlZCBhIGZyYW1lIHdpdGggb3JpZ2luIFwiW3VybF1cIiBmcm9tIGFjY2Vzc2luZyBhIGNyb3NzLW9yaWdpbiBmcmFtZS5cbiAgICAgICAgICAgIGlzV2luZG93T3BlbmVyTXNhbCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBzZWxmIHRvIHRoZSB3aW5kb3cgdGhhdCBjcmVhdGVkIHRoZSBwb3B1cC9pZnJhbWVcbiAgICAgICAgaWYgKGlzV2luZG93T3BlbmVyTXNhbCkge1xuICAgICAgICAgICAgc2VsZiA9IHdpbmRvdy5vcGVuZXIubXNhbDtcbiAgICAgICAgICAgIGlzUG9wdXAgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYXJlbnQgJiYgd2luZG93LnBhcmVudC5tc2FsKSB7XG4gICAgICAgICAgICBzZWxmID0gd2luZG93LnBhcmVudC5tc2FsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyksIGJ5IHVzaW5nIHNlbGYsIHdpbmRvdy5wYXJlbnQgYmVjb21lcyBlcXVhbCB0byB3aW5kb3cgaW4gZ2V0UmVzcG9uc2VTdGF0ZSBtZXRob2Qgc3BlY2lmaWNhbGx5XG4gICAgICAgIGNvbnN0IHN0YXRlSW5mbyA9IHNlbGYuZ2V0UmVzcG9uc2VTdGF0ZShoYXNoKTtcblxuICAgICAgICBsZXQgdG9rZW5SZXNwb25zZUNhbGxiYWNrOiAocmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgZXJyb3I6IEF1dGhFcnJvcikgPT4gdm9pZCA9IG51bGw7XG5cbiAgICAgICAgc2VsZi5sb2dnZXIuaW5mbyhcIlJldHVybmVkIGZyb20gcmVkaXJlY3QgdXJsXCIpO1xuICAgICAgICAvLyBJZiBwYXJlbnQgd2luZG93IGlzIHRoZSBtc2FsIGluc3RhbmNlIHdoaWNoIG9wZW5lZCB0aGUgY3VycmVudCB3aW5kb3cgKGlmcmFtZSlcbiAgICAgICAgaWYgKHRoaXMucGFyZW50SXNNc2FsKCkpIHtcbiAgICAgICAgICAgIHRva2VuUmVzcG9uc2VDYWxsYmFjayA9IHdpbmRvdy5wYXJlbnQuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW3N0YXRlSW5mby5zdGF0ZV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ3VycmVudCB3aW5kb3cgaXMgd2luZG93IG9wZW5lciAocG9wdXApXG4gICAgICAgIGVsc2UgaWYgKGlzV2luZG93T3BlbmVyTXNhbCkge1xuICAgICAgICAgICAgdG9rZW5SZXNwb25zZUNhbGxiYWNrID0gd2luZG93Lm9wZW5lci5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbc3RhdGVJbmZvLnN0YXRlXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZWRpcmVjdCBjYXNlc1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRva2VuUmVzcG9uc2VDYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAvLyBpZiBzZXQgdG8gbmF2aWdhdGUgdG8gbG9naW5SZXF1ZXN0IHBhZ2UgcG9zdCBsb2dpblxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmF1dGgubmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gsIGhhc2gpO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucGFyZW50ID09PSB3aW5kb3cgJiYgIWlzUG9wdXApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzZWxmLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHNlbGYuaW5Db29raWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSByZWFjaGVkIHRoaXMgcG9pbnQgdG9vIGVhcmx5IC0gY2FjaGUgaGFzaCwgcmV0dXJuIGFuZCBwcm9jZXNzIGluIGhhbmRsZVJlZGlyZWN0Q2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgc2VsZi5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMudXJsSGFzaCwgaGFzaCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5wcm9jZXNzQ2FsbEJhY2soaGFzaCwgc3RhdGVJbmZvLCB0b2tlblJlc3BvbnNlQ2FsbGJhY2spO1xuXG4gICAgICAgIC8vIElmIGN1cnJlbnQgd2luZG93IGlzIG9wZW5lciwgY2xvc2UgYWxsIHdpbmRvd3NcbiAgICAgICAgaWYgKGlzV2luZG93T3BlbmVyTXNhbCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cub3BlbmVyLm9wZW5lZFdpbmRvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbmVyLm9wZW5lZFdpbmRvd3NbaV0uY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBSZXR1cm5zIGRlc2VyaWFsaXplZCBwb3J0aW9uIG9mIFVSTCBoYXNoXG4gICAgICogQHBhcmFtIGhhc2hcbiAgICAgKi9cbiAgICBwcml2YXRlIGRlc2VyaWFsaXplSGFzaCh1cmxGcmFnbWVudDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBVcmxVdGlscy5nZXRIYXNoRnJvbVVybCh1cmxGcmFnbWVudCk7XG4gICAgICAgIHJldHVybiBDcnlwdG9VdGlscy5kZXNlcmlhbGl6ZShoYXNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ3JlYXRlcyBhIHN0YXRlSW5mbyBvYmplY3QgZnJvbSB0aGUgVVJMIGZyYWdtZW50IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICAtICBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2VcbiAgICAgKiBAcmV0dXJucyB7VG9rZW5SZXNwb25zZX0gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFJlc3BvbnNlU3RhdGUoaGFzaDogc3RyaW5nKTogUmVzcG9uc2VTdGF0ZUluZm8ge1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0gdGhpcy5kZXNlcmlhbGl6ZUhhc2goaGFzaCk7XG4gICAgICAgIGxldCBzdGF0ZVJlc3BvbnNlOiBSZXNwb25zZVN0YXRlSW5mbztcbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiSGFzaCB3YXMgbm90IHBhcnNlZCBjb3JyZWN0bHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KFwic3RhdGVcIikpIHtcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdFR5cGU6IENvbnN0YW50cy51bmtub3duLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBwYXJhbWV0ZXJzLnN0YXRlLFxuICAgICAgICAgICAgICAgIHN0YXRlTWF0Y2g6IGZhbHNlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkhhc2ggZG9lcyBub3QgY29udGFpbiBzdGF0ZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgICogYXN5bmMgY2FsbHMgY2FuIGZpcmUgaWZyYW1lIGFuZCBsb2dpbiByZXF1ZXN0IGF0IHRoZSBzYW1lIHRpbWUgaWYgZGV2ZWxvcGVyIGRvZXMgbm90IHVzZSB0aGUgQVBJIGFzIGV4cGVjdGVkXG4gICAgICAgICAqIGluY29taW5nIGNhbGxiYWNrIG5lZWRzIHRvIGJlIGxvb2tlZCB1cCB0byBmaW5kIHRoZSByZXF1ZXN0IHR5cGVcbiAgICAgICAgICovXG5cbiAgICAgICAgLy8gbG9naW5SZWRpcmVjdFxuICAgICAgICBpZiAoc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5pbkNvb2tpZSkgfHwgc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlKSB7IC8vIGxvZ2luUmVkaXJlY3RcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWNxdWlyZVRva2VuUmVkaXJlY3RcbiAgICAgICAgZWxzZSBpZiAoc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4sIHRoaXMuaW5Db29raWUpKSB7IC8vIGFjcXVpcmVUb2tlblJlZGlyZWN0XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XG4gICAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBleHRlcm5hbCBhcGkgcmVxdWVzdHMgbWF5IGhhdmUgbWFueSByZW5ld3Rva2VuIHJlcXVlc3RzIGZvciBkaWZmZXJlbnQgcmVzb3VyY2VcbiAgICAgICAgaWYgKCFzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSB3aW5kb3cucmVxdWVzdFR5cGU7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZXNJblBhcmVudENvbnRleHQgPSB3aW5kb3cucmVuZXdTdGF0ZXM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlc0luUGFyZW50Q29udGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXNJblBhcmVudENvbnRleHRbaV0gPT09IHN0YXRlUmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBUb2tlbiBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFRva2VuUHJvY2Vzc2luZy50cylcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBVc2VkIHRvIGdldCB0b2tlbiBmb3IgdGhlIHNwZWNpZmllZCBzZXQgb2Ygc2NvcGVzIGZyb20gdGhlIGNhY2hlXG4gICAgICogQHBhcmFtIHtAbGluayBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc30gLSBSZXF1ZXN0IHNlbnQgdG8gdGhlIFNUUyB0byBvYnRhaW4gYW4gaWRfdG9rZW4vYWNjZXNzX3Rva2VuXG4gICAgICogQHBhcmFtIHtBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHNjb3BlcyB3ZXJlIHJlcXVlc3RlZFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycywgYWNjb3VudDogQWNjb3VudCk6IEF1dGhSZXNwb25zZSB7XG4gICAgICAgIGxldCBhY2Nlc3NUb2tlbkNhY2hlSXRlbTogQWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBudWxsO1xuICAgICAgICBjb25zdCBzY29wZXMgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc2NvcGVzO1xuXG4gICAgICAgIC8vIGZpbHRlciBieSBjbGllbnRJZCBhbmQgYWNjb3VudFxuICAgICAgICBjb25zdCB0b2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnModGhpcy5jbGllbnRJZCwgYWNjb3VudCA/IGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyIDogbnVsbCk7XG5cbiAgICAgICAgLy8gTm8gbWF0Y2ggZm91bmQgYWZ0ZXIgaW5pdGlhbCBmaWx0ZXJpbmdcbiAgICAgICAgaWYgKHRva2VuQ2FjaGVJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtczogQXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+ID0gW107XG5cbiAgICAgICAgLy8gaWYgbm8gYXV0aG9yaXR5IHBhc3NlZFxuICAgICAgICBpZiAoIXNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpIHtcbiAgICAgICAgICAgIC8vIGZpbHRlciBieSBzY29wZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZUl0ZW0gPSB0b2tlbkNhY2hlSXRlbXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gY2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5jb250YWluc1Njb3BlKGNhY2hlZFNjb3Blcywgc2NvcGVzKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIG9ubHkgb25lIGNhY2hlZCB0b2tlbiBmb3VuZFxuICAgICAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBmaWx0ZXJlZEl0ZW1zWzBdO1xuICAgICAgICAgICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBtb3JlIHRoYW4gb25lIGNhY2hlZCB0b2tlbiBpcyBmb3VuZFxuICAgICAgICAgICAgZWxzZSBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgbm8gbWF0Y2ggZm91bmQsIGNoZWNrIGlmIHRoZXJlIHdhcyBhIHNpbmdsZSBhdXRob3JpdHkgdXNlZFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aG9yaXR5TGlzdCA9IHRoaXMuZ2V0VW5pcXVlQXV0aG9yaXR5KHRva2VuQ2FjaGVJdGVtcywgXCJhdXRob3JpdHlcIik7XG4gICAgICAgICAgICAgICAgaWYgKGF1dGhvcml0eUxpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShhdXRob3JpdHlMaXN0WzBdLCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBhbiBhdXRob3JpdHkgaXMgcGFzc2VkIGluIHRoZSBBUElcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBmaWx0ZXIgYnkgYXV0aG9yaXR5IGFuZCBzY29wZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZUl0ZW0gPSB0b2tlbkNhY2hlSXRlbXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gY2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5jb250YWluc1Njb3BlKGNhY2hlZFNjb3Blcywgc2NvcGVzKSAmJiBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoY2FjaGVJdGVtLmtleS5hdXRob3JpdHkpID09PSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChjYWNoZUl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG5vIG1hdGNoXG4gICAgICAgICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG9ubHkgb25lIGNhY2hlZFRva2VuIEZvdW5kXG4gICAgICAgICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgY2FjaGVkIHRva2VuIGlzIGZvdW5kXG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZU11bHRpcGxlTWF0Y2hpbmdUb2tlbnNJbkNhY2hlRXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZWQgPSBOdW1iZXIoYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuZXhwaXJlc0luKTtcbiAgICAgICAgICAgIC8vIElmIGV4cGlyYXRpb24gaXMgd2l0aGluIG9mZnNldCwgaXQgd2lsbCBmb3JjZSByZW5ld1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jb25maWcuc3lzdGVtLnRva2VuUmVuZXdhbE9mZnNldFNlY29uZHMgfHwgMzAwO1xuICAgICAgICAgICAgaWYgKGV4cGlyZWQgJiYgKGV4cGlyZWQgPiBUaW1lVXRpbHMubm93KCkgKyBvZmZzZXQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmlkVG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWNjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkFjY291bnQgc2hvdWxkIG5vdCBiZSBudWxsIGhlcmUuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGFTdGF0ZSA9IHRoaXMuZ2V0QWNjb3VudFN0YXRlKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZUlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnRJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5UeXBlOiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuaWRUb2tlbiA9PT0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuYWNjZXNzVG9rZW4pID8gQ29uc3RhbnRzLmlkVG9rZW4gOiBDb25zdGFudHMuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW5PYmosXG4gICAgICAgICAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlczogYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZXNPbjogbmV3IERhdGUoZXhwaXJlZCAqIDEwMDApLFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50OiBhY2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50U3RhdGU6IGFTdGF0ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgUmVzcG9uc2VVdGlscy5zZXRSZXNwb25zZUlkVG9rZW4ocmVzcG9uc2UsIGlkVG9rZW5PYmopO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShmaWx0ZXJlZEl0ZW1zWzBdLmtleSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogVXNlZCB0byBnZXQgYSB1bmlxdWUgbGlzdCBvZiBhdXRob3JpdGllcyBmcm9tIHRoZSBjYWNoZVxuICAgICAqIEBwYXJhbSB7QXJyYXk8QWNjZXNzVG9rZW5DYWNoZUl0ZW0+fSAgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zIC0gYWNjZXNzVG9rZW5DYWNoZUl0ZW1zIHNhdmVkIGluIHRoZSBjYWNoZVxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFVuaXF1ZUF1dGhvcml0eShhY2Nlc3NUb2tlbkNhY2hlSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiwgcHJvcGVydHk6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBjb25zdCBhdXRob3JpdHlMaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICAgIGNvbnN0IGZsYWdzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQua2V5Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiAoZmxhZ3MuaW5kZXhPZihlbGVtZW50LmtleVtwcm9wZXJ0eV0pID09PSAtMSkpIHtcbiAgICAgICAgICAgICAgICBmbGFncy5wdXNoKGVsZW1lbnQua2V5W3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5TGlzdC5wdXNoKGVsZW1lbnQua2V5W3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXV0aG9yaXR5TGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ2hlY2sgaWYgQURBTCBpZF90b2tlbiBleGlzdHMgYW5kIHJldHVybiBpZiBleGlzdHMuXG4gICAgICpcbiAgICAgKi9cbiAgICBwcml2YXRlIGV4dHJhY3RBREFMSWRUb2tlbigpOiBhbnkge1xuICAgICAgICBjb25zdCBhZGFsSWRUb2tlbiA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFkYWxJZFRva2VuKTtcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIFRva2VuVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBBY3F1aXJlcyBhY2Nlc3MgdG9rZW4gdXNpbmcgYSBoaWRkZW4gaWZyYW1lLlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlbmV3VG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWNjb3VudDogQWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHZvaWQge1xuICAgICAgICBjb25zdCBzY29wZSA9IHNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdUb2tlbiBpcyBjYWxsZWQgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xuICAgICAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKFwibXNhbFJlbmV3RnJhbWVcIiArIHNjb3BlKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiUmVuZXcgdG9rZW4gRXhwZWN0ZWQgc3RhdGU6IFwiICsgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcblxuICAgICAgICAvLyBCdWlsZCB1cmxOYXZpZ2F0ZSB3aXRoIFwicHJvbXB0PW5vbmVcIiBhbmQgbmF2aWdhdGUgdG8gVVJMIGluIGhpZGRlbiBpRnJhbWVcbiAgICAgICAgY29uc3QgdXJsTmF2aWdhdGUgPSBVcmxVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihVcmxVdGlscy5jcmVhdGVOYXZpZ2F0ZVVybChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpLCBDb25zdGFudHMucHJvbXB0KSArIENvbnN0YW50cy5wcm9tcHRfbm9uZTtcblxuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2NvcGUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJOYXZpZ2F0ZSB0bzpcIiArIHVybE5hdmlnYXRlKTtcbiAgICAgICAgZnJhbWVIYW5kbGUuc3JjID0gXCJhYm91dDpibGFua1wiO1xuICAgICAgICB0aGlzLmxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlLCBcIm1zYWxSZW5ld0ZyYW1lXCIgKyBzY29wZSwgc2NvcGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBSZW5ld3MgaWR0b2tlbiBmb3IgYXBwJ3Mgb3duIGJhY2tlbmQgd2hlbiBjbGllbnRJZCBpcyBwYXNzZWQgYXMgYSBzaW5nbGUgc2NvcGUgaW4gdGhlIHNjb3BlcyBhcnJheS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSByZW5ld0lkVG9rZW4oc2NvcGVzOiBBcnJheTxzdHJpbmc+LCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWNjb3VudDogQWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5ld2lkVG9rZW4gaXMgY2FsbGVkXCIpO1xuICAgICAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKFwibXNhbElkVG9rZW5GcmFtZVwiKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyBJZHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG5cbiAgICAgICAgLy8gQnVpbGQgdXJsTmF2aWdhdGUgd2l0aCBcInByb21wdD1ub25lXCIgYW5kIG5hdmlnYXRlIHRvIFVSTCBpbiBoaWRkZW4gaUZyYW1lXG4gICAgICAgIGNvbnN0IHVybE5hdmlnYXRlID0gVXJsVXRpbHMudXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIoVXJsVXRpbHMuY3JlYXRlTmF2aWdhdGVVcmwoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KSwgQ29uc3RhbnRzLnByb21wdCkgKyBDb25zdGFudHMucHJvbXB0X25vbmU7XG5cbiAgICAgICAgaWYgKHRoaXMuc2lsZW50TG9naW4pIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcbiAgICAgICAgICAgIHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuICAgICAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdGU6IHNjb3BlIGhlcmUgaXMgY2xpZW50SWRcbiAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgdGhpcy5jbGllbnRJZCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xuICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgICAgIHRoaXMubG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGUsIFwibXNhbElkVG9rZW5GcmFtZVwiLCB0aGlzLmNsaWVudElkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBBQUQuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yLCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUgYW5kIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aXRoIHRoZSByZXN1bHQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSBhdXRob3JpdHkgcmVjZWl2ZWQgaW4gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFELlxuICAgICAqIEBwYXJhbSB7VG9rZW5SZXNwb25zZX0gcmVxdWVzdEluZm8gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cbiAgICAgKiBAcGFyYW0ge0FjY291bnR9IGFjY291bnQgYWNjb3VudCBvYmplY3QgZm9yIHdoaWNoIHNjb3BlcyBhcmUgY29uc2VudGVkIGZvci4gVGhlIGRlZmF1bHQgYWNjb3VudCBpcyB0aGUgbG9nZ2VkIGluIGFjY291bnQuXG4gICAgICogQHBhcmFtIHtDbGllbnRJbmZvfSBjbGllbnRJbmZvIGNsaWVudEluZm8gcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgcmVzcG9uc2UgY29tcHJpc2luZyBvZiBmaWVsZHMgdWlkIGFuZCB1dGlkLlxuICAgICAqIEBwYXJhbSB7SWRUb2tlbn0gaWRUb2tlbiBpZFRva2VuIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlLlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgcHJpdmF0ZSBzYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgYXV0aG9yaXR5OiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgY2xpZW50SW5mbzogc3RyaW5nLCBpZFRva2VuT2JqOiBJZFRva2VuKTogQXV0aFJlc3BvbnNlIHtcbiAgICAgICAgbGV0IHNjb3BlOiBzdHJpbmc7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuUmVzcG9uc2UgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgICAgIGNvbnN0IGNsaWVudE9iajogQ2xpZW50SW5mbyA9IG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pO1xuICAgICAgICBsZXQgZXhwaXJhdGlvbjogbnVtYmVyO1xuXG4gICAgICAgIC8vIGlmIHRoZSByZXNwb25zZSBjb250YWlucyBcInNjb3BlXCJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoXCJzY29wZVwiKSkge1xuICAgICAgICAgICAgLy8gcmVhZCB0aGUgc2NvcGVzXG4gICAgICAgICAgICBzY29wZSA9IHBhcmFtZXRlcnNbXCJzY29wZVwiXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnNlbnRlZFNjb3BlcyA9IHNjb3BlLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgLy8gcmV0cmlldmUgYWxsIGFjY2VzcyB0b2tlbnMgZnJvbSB0aGUgY2FjaGUsIHJlbW92ZSB0aGUgZHVwIHNjb3Jlc1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGF1dGhvcml0eSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChTY29wZVNldC5pc0ludGVyc2VjdGluZ1Njb3BlcyhjYWNoZWRTY29wZXMsIGNvbnNlbnRlZFNjb3BlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxuICAgICAgICAgICAgY29uc3QgZXhwaXJlc0luID0gVGltZVV0aWxzLnBhcnNlRXhwaXJlc0luKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmV4cGlyZXNJbl0pO1xuICAgICAgICAgICAgZXhwaXJhdGlvbiA9IFRpbWVVdGlscy5ub3coKSArIGV4cGlyZXNJbjtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuS2V5ID0gbmV3IEFjY2Vzc1Rva2VuS2V5KGF1dGhvcml0eSwgdGhpcy5jbGllbnRJZCwgc2NvcGUsIGNsaWVudE9iai51aWQsIGNsaWVudE9iai51dGlkKTtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0sIGlkVG9rZW5PYmoucmF3SWRUb2tlbiwgZXhwaXJhdGlvbi50b1N0cmluZygpLCBjbGllbnRJbmZvKTtcblxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcblxuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5hY2Nlc3NUb2tlbiAgPSBwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl07XG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IGNvbnNlbnRlZFNjb3BlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgcmVzcG9uc2UgZG9lcyBub3QgY29udGFpbiBcInNjb3BlXCIgLSBzY29wZSBpcyB1c3VhbGx5IGNsaWVudF9pZCBhbmQgdGhlIHRva2VuIHdpbGwgYmUgaWRfdG9rZW5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzY29wZSA9IHRoaXMuY2xpZW50SWQ7XG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5LZXkgPSBuZXcgQWNjZXNzVG9rZW5LZXkoYXV0aG9yaXR5LCB0aGlzLmNsaWVudElkLCBzY29wZSwgY2xpZW50T2JqLnVpZCwgY2xpZW50T2JqLnV0aWQpO1xuICAgICAgICAgICAgZXhwaXJhdGlvbiA9IE51bWJlcihpZFRva2VuT2JqLmV4cGlyYXRpb24pO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5WYWx1ZSA9IG5ldyBBY2Nlc3NUb2tlblZhbHVlKHBhcmFtZXRlcnNbQ29uc3RhbnRzLmlkVG9rZW5dLCBwYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXSwgZXhwaXJhdGlvbi50b1N0cmluZygpLCBjbGllbnRJbmZvKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5LZXkpLCBKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlblZhbHVlKSk7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IFtzY29wZV07XG4gICAgICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmFjY2Vzc1Rva2VuID0gcGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXhwaXJhdGlvbikge1xuICAgICAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHBpcmF0aW9uICogMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBleHBpcmVzSW4gcGFyYW1ldGVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY2Vzc1Rva2VuUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIFNhdmVzIHRva2VuIG9yIGVycm9yIHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRCBpbiB0aGUgY2FjaGUuIEluIGNhc2Ugb2YgaWRfdG9rZW4sIGl0IGFsc28gY3JlYXRlcyB0aGUgYWNjb3VudCBvYmplY3QuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzYXZlVG9rZW5Gcm9tSGFzaChoYXNoOiBzdHJpbmcsIHN0YXRlSW5mbzogUmVzcG9uc2VTdGF0ZUluZm8pOiBBdXRoUmVzcG9uc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgc3RhdHVzOlwiICsgc3RhdGVJbmZvLnN0YXRlTWF0Y2ggKyBcIjsgUmVxdWVzdCB0eXBlOlwiICsgc3RhdGVJbmZvLnJlcXVlc3RUeXBlKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBcIlwiKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIFwiXCIpO1xuXG4gICAgICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZSA9IHtcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBcIlwiLFxuICAgICAgICAgICAgdGVuYW50SWQ6IFwiXCIsXG4gICAgICAgICAgICB0b2tlblR5cGU6IFwiXCIsXG4gICAgICAgICAgICBpZFRva2VuOiBudWxsLFxuICAgICAgICAgICAgaWRUb2tlbkNsYWltczogbnVsbCxcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxuICAgICAgICAgICAgc2NvcGVzOiBbXSxcbiAgICAgICAgICAgIGV4cGlyZXNPbjogbnVsbCxcbiAgICAgICAgICAgIGFjY291bnQ6IG51bGwsXG4gICAgICAgICAgICBhY2NvdW50U3RhdGU6IFwiXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGVycm9yOiBBdXRoRXJyb3I7XG4gICAgICAgIGNvbnN0IGhhc2hQYXJhbXMgPSB0aGlzLmRlc2VyaWFsaXplSGFzaChoYXNoKTtcbiAgICAgICAgbGV0IGF1dGhvcml0eUtleTogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IGFjcXVpcmVUb2tlbkFjY291bnRLZXk6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGxldCBpZFRva2VuT2JqOiBJZFRva2VuID0gbnVsbDtcblxuICAgICAgICAvLyBJZiBzZXJ2ZXIgcmV0dXJucyBhbiBlcnJvclxuICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbikgfHwgaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiRXJyb3IgOlwiICsgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdICsgXCI7IEVycm9yIGRlc2NyaXB0aW9uOlwiICsgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0pO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dKTtcblxuICAgICAgICAgICAgLy8gbG9naW5cbiAgICAgICAgICAgIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5sb2dpbikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0gKyBcIjpcIiArIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSk7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhY3F1aXJlVG9rZW5cbiAgICAgICAgICAgIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50SWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWNjb3VudCAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElkID0gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SWQgPSBDb25zdGFudHMubm9fYWNjb3VudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudElkLCBzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgW0NvbnN0YW50cy5lcnJvcl06IGhhc2hFcnIsXG4gICAgICAgICAgICAgICAgW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXTogaGFzaEVyckRlc2NcbiAgICAgICAgICAgIH0gPSBoYXNoUGFyYW1zO1xuICAgICAgICAgICAgaWYgKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IuaXNJbnRlcmFjdGlvblJlcXVpcmVkRXJyb3IoaGFzaEVycikgfHxcbiAgICAgICAgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5pc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihoYXNoRXJyRGVzYykpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBTZXJ2ZXJFcnJvcihoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0sIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgc2VydmVyIHJldHVybnMgXCJTdWNjZXNzXCJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBWZXJpZnkgdGhlIHN0YXRlIGZyb20gcmVkaXJlY3QgYW5kIHJlY29yZCB0b2tlbnMgdG8gc3RvcmFnZSBpZiBleGlzdHNcbiAgICAgICAgICAgIGlmIChzdGF0ZUluZm8uc3RhdGVNYXRjaCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJTdGF0ZSBpcyByaWdodFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuc2Vzc2lvblN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsU2Vzc2lvblN0YXRlLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5zZXNzaW9uU3RhdGVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudFN0YXRlID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc3RhdGVJbmZvLnN0YXRlKTtcblxuICAgICAgICAgICAgICAgIGxldCBjbGllbnRJbmZvOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBhY2Nlc3NfdG9rZW5cbiAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuYWNjZXNzVG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgYWNjZXNzIHRva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgaWRfdG9rZW4gZnJvbSByZXNwb25zZSBpZiBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5pZFRva2VuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmlkVG9rZW4gPSBpZFRva2VuT2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWRUb2tlbkNsYWltcyA9IGlkVG9rZW5PYmouY2xhaW1zO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gUmVzcG9uc2VVdGlscy5zZXRSZXNwb25zZUlkVG9rZW4ocmVzcG9uc2UsIGlkVG9rZW5PYmopO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhvcml0eVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMucG9wdWxhdGVBdXRob3JpdHkoc3RhdGVJbmZvLnN0YXRlLCB0aGlzLmluQ29va2llLCB0aGlzLmNhY2hlU3RvcmFnZSwgaWRUb2tlbk9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgY2xpZW50X2luZm8gLSBpZiBpdCBpcyBub3QgZm91bmQsIGdlbmVyYXRlIHRoZSB1aWQgYW5kIHV0aWQgZnJvbSBpZFRva2VuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5jbGllbnRJbmZvKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mbyA9IGhhc2hQYXJhbXNbQ29uc3RhbnRzLmNsaWVudEluZm9dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuT2JqLCBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjY291bnRLZXk6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkocmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50S2V5ID0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50S2V5ID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudEtleSwgc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQWNjb3VudEtleV9ub2FjY291bnQgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShDb25zdGFudHMubm9fYWNjb3VudCwgc3RhdGVJbmZvLnN0YXRlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWRBY2NvdW50OiBzdHJpbmcgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWNxdWlyZVRva2VuQWNjb3VudDogQWNjb3VudDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB3aXRoIHRoZSBhY2NvdW50IGluIHRoZSBDYWNoZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoY2FjaGVkQWNjb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnQgPSBKU09OLnBhcnNlKGNhY2hlZEFjY291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgYWNxdWlyZVRva2VuQWNjb3VudCAmJiBBY2NvdW50LmNvbXBhcmVBY2NvdW50cyhyZXNwb25zZS5hY2NvdW50LCBhY3F1aXJlVG9rZW5BY2NvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbywgaWRUb2tlbk9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRoZSB1c2VyIG9iamVjdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgYWNjb3VudCBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSByZXNwb25zZSBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleV9ub2FjY291bnQpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvLCBpZFRva2VuT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgaWRfdG9rZW5cbiAgICAgICAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkZyYWdtZW50IGhhcyBpZCB0b2tlblwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb2dpbiBubyBsb25nZXIgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGlkVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgaWRUb2tlbk9iaiA9IG5ldyBJZFRva2VuKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcblxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFJlc3BvbnNlVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmNsaWVudEluZm8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvID0gaGFzaFBhcmFtc1tDb25zdGFudHMuY2xpZW50SW5mb107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGF1dGhvcml0eVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMucG9wdWxhdGVBdXRob3JpdHkoc3RhdGVJbmZvLnN0YXRlLCB0aGlzLmluQ29va2llLCB0aGlzLmNhY2hlU3RvcmFnZSwgaWRUb2tlbk9iaik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KGlkVG9rZW5PYmosIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaWRUb2tlbk9iaiAmJiBpZFRva2VuT2JqLm5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBub25jZSBpbnRlZ3JpdHkgaWYgaWRUb2tlbiBoYXMgbm9uY2UgLSB0aHJvdyBhbiBlcnJvciBpZiBub3QgbWF0Y2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkVG9rZW5PYmoubm9uY2UgIT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiTm9uY2UgTWlzbWF0Y2guIEV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIGlkVG9rZW5PYmoubm9uY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiTm9uY2UgTWlzbWF0Y2guRXhwZWN0ZWQgTm9uY2U6IFwiICsgdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSArIFwiLFwiICsgXCJBY3R1YWwgTm9uY2U6IFwiICsgaWRUb2tlbk9iai5ub25jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSksIGlkVG9rZW5PYmoubm9uY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXksIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsQ2xpZW50SW5mbywgY2xpZW50SW5mbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGlkVG9rZW4gYXMgYWNjZXNzIHRva2VuIGZvciBhcHAgaXRzZWxmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbywgaWRUb2tlbk9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkludmFsaWQgaWRfdG9rZW4gcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZElkVG9rZW5FcnJvcihpZFRva2VuT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgZXJyb3IuZXJyb3JDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBlcnJvci5lcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3RhdGUgbWlzbWF0Y2ggLSB1bmV4cGVjdGVkL2ludmFsaWQgc3RhdGVcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IHN0YXRlSW5mby5zdGF0ZTtcbiAgICAgICAgICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRTdGF0ZSA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHRoaXMuaW5Db29raWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiU3RhdGUgTWlzbWF0Y2guRXhwZWN0ZWQgU3RhdGU6IFwiICsgZXhwZWN0ZWRTdGF0ZSArIFwiLFwiICsgXCJBY3R1YWwgU3RhdGU6IFwiICsgc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkU3RhdGVFcnJvcihzdGF0ZUluZm8uc3RhdGUsIGV4cGVjdGVkU3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgZXJyb3IuZXJyb3JDb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgZXJyb3IuZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgc3RhdGVJbmZvLnN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0NvbXBsZXRlZCk7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUFjcXVpcmVUb2tlbkVudHJpZXMoc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgLy8gdGhpcyBpcyByZXF1aXJlZCBpZiBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPWZhbHNlXG4gICAgICAgIGlmICh0aGlzLmluQ29va2llKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtQ29va2llKGF1dGhvcml0eUtleSwgXCJcIiwgLTEpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIlJlc3BvbnNlIGlzIG51bGxcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBBdXRob3JpdHkgd2hlbiBzYXZpbmcgVG9rZW4gZnJvbSB0aGUgaGFzaFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBwYXJhbSBpbkNvb2tpZVxuICAgICAqIEBwYXJhbSBjYWNoZVN0b3JhZ2VcbiAgICAgKiBAcGFyYW0gaWRUb2tlbk9ialxuICAgICAqIEBwYXJhbSByZXNwb25zZVxuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVBdXRob3JpdHkoc3RhdGU6IHN0cmluZywgaW5Db29raWU6IGJvb2xlYW4sIGNhY2hlU3RvcmFnZTogU3RvcmFnZSwgaWRUb2tlbk9iajogSWRUb2tlbik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGF1dGhvcml0eUtleTogc3RyaW5nID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZSk7XG4gICAgICAgIGNvbnN0IGNhY2hlZEF1dGhvcml0eTogc3RyaW5nID0gY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCBpbkNvb2tpZSk7XG5cbiAgICAgICAgLy8gcmV0cmlldmUgdGhlIGF1dGhvcml0eSBmcm9tIGNhY2hlIGFuZCByZXBsYWNlIHdpdGggdGVuYW50SURcbiAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWxzLmlzRW1wdHkoY2FjaGVkQXV0aG9yaXR5KSA/IGNhY2hlZEF1dGhvcml0eSA6IFVybFV0aWxzLnJlcGxhY2VUZW5hbnRQYXRoKGNhY2hlZEF1dGhvcml0eSwgaWRUb2tlbk9iai50ZW5hbnRJZCk7XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmVuYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBBY2NvdW50XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgaW4gYWNjb3VudFxuICAgICAqICh0aGUgYWNjb3VudCBvYmplY3QgaXMgY3JlYXRlZCBhdCB0aGUgdGltZSBvZiBzdWNjZXNzZnVsIGxvZ2luKVxuICAgICAqIG9yIG51bGwgd2hlbiBubyBzdGF0ZSBpcyBmb3VuZFxuICAgICAqIEByZXR1cm5zIHtAbGluayBBY2NvdW50fSAtIHRoZSBhY2NvdW50IG9iamVjdCBzdG9yZWQgaW4gTVNBTFxuICAgICAqL1xuICAgIGdldEFjY291bnQoKTogQWNjb3VudCB7XG4gICAgICAgIC8vIGlmIGEgc2Vzc2lvbiBhbHJlYWR5IGV4aXN0cywgZ2V0IHRoZSBhY2NvdW50IGZyb20gdGhlIHNlc3Npb25cbiAgICAgICAgaWYgKHRoaXMuYWNjb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZyYW1lIGlzIHVzZWQgdG8gZ2V0IGlkVG9rZW4gYW5kIHBvcHVsYXRlIHRoZSBhY2NvdW50IGZvciB0aGUgZ2l2ZW4gc2Vzc2lvblxuICAgICAgICBjb25zdCByYXdJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSk7XG4gICAgICAgIGNvbnN0IHJhd0NsaWVudEluZm8gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5tc2FsQ2xpZW50SW5mbyk7XG5cbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHJhd0lkVG9rZW4pICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XG4gICAgICAgICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4ocmF3SWRUb2tlbik7XG4gICAgICAgICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8ocmF3Q2xpZW50SW5mbyk7XG4gICAgICAgICAgICB0aGlzLmFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbiwgY2xpZW50SW5mbyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGxvZ2luIG5vdCB5ZXQgZG9uZSwgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogRXh0cmFjdHMgc3RhdGUgdmFsdWUgZnJvbSB0aGUgYWNjb3VudFN0YXRlIHNlbnQgd2l0aCB0aGUgYXV0aGVudGljYXRpb24gcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgZ2V0QWNjb3VudFN0YXRlIChzdGF0ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IHN0YXRlLmluZGV4T2YoXCJ8XCIpO1xuICAgICAgICAgICAgaWYgKHNwbGl0SW5kZXggPiAtMSAmJiBzcGxpdEluZGV4ICsgMSA8IHN0YXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdG8gZ2V0IGEgbGlzdCBvZiB1bmlxdWUgYWNjb3VudHMgaW4gTVNBTCBjYWNoZSBiYXNlZCBvbiBob21lQWNjb3VudElkZW50aWZpZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEFycmF5PEFjY291bnQ+fSBBY2NvdW50IC0gYWxsIHVuaXF1ZSBhY2NvdW50cyBpbiBNU0FMIGNhY2hlLlxuICAgICAqL1xuICAgIGdldEFsbEFjY291bnRzKCk6IEFycmF5PEFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IEFycmF5PEFjY291bnQ+ID0gW107XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmlkVG9rZW4pO1xuICAgICAgICAgICAgY29uc3QgY2xpZW50SW5mbyA9IG5ldyBDbGllbnRJbmZvKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtc1tpXS52YWx1ZS5ob21lQWNjb3VudElkZW50aWZpZXIpO1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuLCBjbGllbnRJbmZvKTtcbiAgICAgICAgICAgIGFjY291bnRzLnB1c2goYWNjb3VudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRVbmlxdWVBY2NvdW50cyhhY2NvdW50cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqXG4gICAgICogVXNlZCB0byBmaWx0ZXIgYWNjb3VudHMgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyXG4gICAgICogQHBhcmFtIHtBcnJheTxBY2NvdW50Pn0gIEFjY291bnRzIC0gYWNjb3VudHMgc2F2ZWQgaW4gdGhlIGNhY2hlXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHM6IEFycmF5PEFjY291bnQ+KTogQXJyYXk8QWNjb3VudD4ge1xuICAgICAgICBpZiAoIWFjY291bnRzIHx8IGFjY291bnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjb3VudHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmbGFnczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICBjb25zdCB1bmlxdWVBY2NvdW50czogQXJyYXk8QWNjb3VudD4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFjY291bnRzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIgJiYgZmxhZ3MuaW5kZXhPZihhY2NvdW50c1tpbmRleF0uaG9tZUFjY291bnRJZGVudGlmaWVyKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBmbGFncy5wdXNoKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgIHVuaXF1ZUFjY291bnRzLnB1c2goYWNjb3VudHNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmlxdWVBY2NvdW50cztcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFNjb3BlcyAoRXh0cmFjdCB0byBTY29wZXMudHMpXG5cbiAgICAvKlxuICAgICAqIE5vdGU6IFwidGhpc1wiIGRlcGVuZGVuY3kgaW4gdGhpcyBzZWN0aW9uIGlzIG1pbmltYWwuXG4gICAgICogSWYgcENhY2hlU3RvcmFnZSBpcyBzZXBhcmF0ZWQgZnJvbSB0aGUgY2xhc3Mgb2JqZWN0LCBvciBwYXNzZWQgYXMgYSBmbiBwYXJhbSwgc2NvcGVzVXRpbHMudHMgY2FuIGJlIGNyZWF0ZWRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIFVzZWQgdG8gdmFsaWRhdGUgdGhlIHNjb3BlcyBpbnB1dCBwYXJhbWV0ZXIgcmVxdWVzdGVkICBieSB0aGUgZGV2ZWxvcGVyLlxuICAgICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2NvcGVzIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNjb3Blc1JlcXVpcmVkIC0gQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNjb3BlcyBhcnJheSBpcyByZXF1aXJlZCBvciBub3RcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXNSZXF1aXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoIXNjb3Blcykge1xuICAgICAgICAgICAgaWYgKHNjb3Blc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVNjb3Blc1JlcXVpcmVkRXJyb3Ioc2NvcGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBzY29wZXMgaXMgYW4gYXJyYXkgb2JqZWN0IChhbHNvIHRocm93cyBlcnJvciBpZiBzY29wZXMgPT0gbnVsbClcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNjb3BlcykpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVTY29wZXNOb25BcnJheUVycm9yKHNjb3Blcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBub3QgYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgaWYgKHNjb3Blcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlRW1wdHlTY29wZXNBcnJheUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIHRoYXQgY2xpZW50SWQgaXMgcGFzc2VkIGFzIHNpbmdsZSBzY29wZVxuICAgICAgICBpZiAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSkge1xuICAgICAgICAgICAgaWYgKHNjb3Blcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUNsaWVudElkU2luZ2xlU2NvcGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBFeHRyYWN0cyBzY29wZSB2YWx1ZSBmcm9tIHRoZSBzdGF0ZSBzZW50IHdpdGggdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlXG4gICAgICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0U2NvcGVGcm9tU3RhdGUoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IHN0YXRlLmluZGV4T2YoXCJ8XCIpO1xuICAgICAgICAgICAgaWYgKHNwbGl0SW5kZXggPiAtMSAmJiBzcGxpdEluZGV4ICsgMSA8IHN0YXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBBcHBlbmRzIGV4dHJhU2NvcGVzVG9Db25zZW50IGlmIHBhc3NlZFxuICAgICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxuICAgICAqL1xuICAgIHByaXZhdGUgYXBwZW5kU2NvcGVzKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEFycmF5PHN0cmluZz4ge1xuXG4gICAgICAgIGxldCBzY29wZXM6IEFycmF5PHN0cmluZz47XG5cbiAgICAgICAgaWYgKHJlcXVlc3QgJiYgcmVxdWVzdC5zY29wZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50KSB7XG4gICAgICAgICAgICAgICAgc2NvcGVzID0gWy4uLnJlcXVlc3Quc2NvcGVzLCAuLi5yZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjb3BlcyA9IHJlcXVlc3Quc2NvcGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNjb3BlcztcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIEFuZ3VsYXJcblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIEJyb2FkY2FzdCBtZXNzYWdlcyAtIFVzZWQgb25seSBmb3IgQW5ndWxhcj8gICpcbiAgICAgKiBAcGFyYW0gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwcml2YXRlIGJyb2FkY2FzdChldmVudE5hbWU6IHN0cmluZywgZGF0YTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHsgZGV0YWlsOiBkYXRhIH0pO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgY2FjaGVkIHRva2VuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICogQHBhcmFtIHtAbGluayBBY2NvdW50fSBhY2NvdW50XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHJldHVybiB7QGxpbmsgQXV0aFJlc3BvbnNlfSBBdXRoUmVzcG9uc2VcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Q2FjaGVkVG9rZW5JbnRlcm5hbChzY29wZXMgOiBBcnJheTxzdHJpbmc+ICwgYWNjb3VudDogQWNjb3VudCwgc3RhdGU6IHN0cmluZyk6IEF1dGhSZXNwb25zZSB7XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzZXNzaW9uJ3MgYWNjb3VudCBvYmplY3RcbiAgICAgICAgY29uc3QgYWNjb3VudE9iamVjdDogQWNjb3VudCA9IGFjY291bnQgfHwgdGhpcy5nZXRBY2NvdW50KCk7XG4gICAgICAgIGlmICghYWNjb3VudE9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb25zdHJ1Y3QgQXV0aGVudGljYXRpb25SZXF1ZXN0IGJhc2VkIG9uIHJlc3BvbnNlIHR5cGVcbiAgICAgICAgY29uc3QgbmV3QXV0aG9yaXR5ID0gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA/IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgOiBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHRoaXMuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudE9iamVjdCwgc2NvcGVzLCB0cnVlKTtcbiAgICAgICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgbmV3QXV0aG9yaXR5LFxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICAgIHNjb3BlcyxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcbiAgICAgICAgICAgIHN0YXRlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gZ2V0IGNhY2hlZCB0b2tlblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDYWNoZWRUb2tlbihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKlxuICAgICAqIEdldCBzY29wZXMgZm9yIHRoZSBFbmRwb2ludCAtIFVzZWQgaW4gQW5ndWxhciB0byB0cmFjayBwcm90ZWN0ZWQgYW5kIHVucHJvdGVjdGVkIHJlc291cmNlcyB3aXRob3V0IGludGVyYWN0aW9uIGZyb20gdGhlIGRldmVsb3BlciBhcHBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbmRwb2ludFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTY29wZXNGb3JFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKSA6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICAvLyBpZiB1c2VyIHNwZWNpZmllZCBsaXN0IG9mIHVucHJvdGVjdGVkUmVzb3VyY2VzLCBubyBuZWVkIHRvIHNlbmQgdG9rZW4gdG8gdGhlc2UgZW5kcG9pbnRzLCByZXR1cm4gbnVsbC5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlc1tpXSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwcm9jZXNzIGFsbCBwcm90ZWN0ZWQgcmVzb3VyY2VzIGFuZCBzZW5kIHRoZSBtYXRjaGVkIG9uZVxuICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLnNpemUgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5rZXlzKCkpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uZmlnRW5kcG9pbnQgaXMgbGlrZSAvYXBpL1RvZG8gcmVxdWVzdGVkIGVuZHBvaW50IGNhbiBiZSAvYXBpL1RvZG8vMVxuICAgICAgICAgICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAqIGRlZmF1bHQgcmVzb3VyY2Ugd2lsbCBiZSBjbGllbnRpZCBpZiBub3RoaW5nIHNwZWNpZmllZFxuICAgICAgICAgKiBBcHAgd2lsbCB1c2UgaWR0b2tlbiBmb3IgY2FsbHMgdG8gaXRzZWxmXG4gICAgICAgICAqIGNoZWNrIGlmIGl0J3Mgc3RhcmluZyBmcm9tIGh0dHAgb3IgaHR0cHMsIG5lZWRzIHRvIG1hdGNoIHdpdGggYXBwIGhvc3RcbiAgICAgICAgICovXG4gICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKFwiaHR0cDovL1wiKSA+IC0xIHx8IGVuZHBvaW50LmluZGV4T2YoXCJodHRwczovL1wiKSA+IC0xKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRIb3N0RnJvbVVyaShlbmRwb2ludCkgPT09IHRoaXMuZ2V0SG9zdEZyb21VcmkodGhpcy5nZXRSZWRpcmVjdFVyaSgpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXk8c3RyaW5nPih0aGlzLmNsaWVudElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBpbiBhbmd1bGFyIGxldmVsLCB0aGUgdXJsIGZvciAkaHR0cCBpbnRlcmNlcHRvciBjYWxsIGNvdWxkIGJlIHJlbGF0aXZlIHVybCxcbiAgICAgICAgICAgICAqIGlmIGl0J3MgcmVsYXRpdmUgY2FsbCwgd2UnbGwgdHJlYXQgaXQgYXMgYXBwIGJhY2tlbmQgY2FsbC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxzdHJpbmc+KHRoaXMuY2xpZW50SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm90IHRoZSBhcHAncyBvd24gYmFja2VuZCBvciBub3QgYSBkb21haW4gbGlzdGVkIGluIHRoZSBlbmRwb2ludHMgc3RydWN0dXJlXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBib29sZWFuIGZsYWcgdG8gZGV2ZWxvcGVyIHRvIGhlbHAgaW5mb3JtIGlmIGxvZ2luIGlzIGluIHByb2dyZXNzXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUvZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TG9naW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBwZW5kaW5nQ2FsbGJhY2sgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcbiAgICAgICAgaWYgKHBlbmRpbmdDYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9naW5JblByb2dyZXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbG9naW5JblByb2dyZXNzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNldGxvZ2luSW5Qcm9ncmVzcyhsb2dpbkluUHJvZ3Jlc3MgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gbG9naW5JblByb2dyZXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiByZXR1cm5zIHRoZSBzdGF0dXMgb2YgYWNxdWlyZVRva2VuSW5Qcm9ncmVzc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRBY3F1aXJlVG9rZW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYWNxdWlyZVRva2VuSW5Qcm9ncmVzc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRBY3F1aXJlVG9rZW5JblByb2dyZXNzKGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIHJldHVybnMgdGhlIGxvZ2dlciBoYW5kbGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0TG9nZ2VyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuc3lzdGVtLmxvZ2dlcjtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIEdldHRlcnMgYW5kIFNldHRlcnNcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogVXNlIHRvIGdldCB0aGUgcmVkaXJlY3QgdXJpIGNvbmZpZ3VyZWQgaW4gTVNBTCBvciBudWxsLlxuICAgICAqIEV2YWx1YXRlcyByZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZWRpcmVjdCBVUkxcbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5yZWRpcmVjdFVyaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdG8gZ2V0IHRoZSBwb3N0IGxvZ291dCByZWRpcmVjdCB1cmkgY29uZmlndXJlZCBpbiBNU0FMIG9yIG51bGwuXG4gICAgICogRXZhbHVhdGVzIHBvc3RMb2dvdXRyZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHBvc3QgbG9nb3V0IHJlZGlyZWN0IFVSTFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRvIGdldCB0aGUgY3VycmVudCB7QGxpbmsgQ29uZmlndXJhdGlvbn0gb2JqZWN0IGluIE1TQUxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtAbGluayBDb25maWd1cmF0aW9ufVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDdXJyZW50Q29uZmlndXJhdGlvbigpOiBDb25maWd1cmF0aW9uIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gU3RyaW5nIFV0aWwgKFNob3VsZCBiZSBleHRyYWN0ZWQgdG8gVXRpbHMudHMpXG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogZXh0cmFjdCBVUkkgZnJvbSB0aGUgaG9zdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFVSSVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGhvc3QgZnJvbSB0aGUgVVJJXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRIb3N0RnJvbVVyaSh1cmk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIC8vIHJlbW92ZSBodHRwOi8vIG9yIGh0dHBzOi8vIGZyb20gdXJpXG4gICAgICAgIGxldCBleHRyYWN0ZWRVcmkgPSBTdHJpbmcodXJpKS5yZXBsYWNlKC9eKGh0dHBzPzopXFwvXFwvLywgXCJcIik7XG4gICAgICAgIGV4dHJhY3RlZFVyaSA9IGV4dHJhY3RlZFVyaS5zcGxpdChcIi9cIilbMF07XG4gICAgICAgIHJldHVybiBleHRyYWN0ZWRVcmk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFV0aWxzIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgQXV0aGVudGljYXRpb25cbiAgICAgKiBAcGFyYW0ge0BsaW5rIGFjY291bnR9IGFjY291bnQgb2JqZWN0XG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqIEBwYXJhbSBzaWxlbnRDYWxsXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0b2tlbiB0eXBlOiBpZF90b2tlbiBvciBhY2Nlc3NfdG9rZW5cbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3Q6IEFjY291bnQsIHNjb3Blczogc3RyaW5nW10sIHNpbGVudENhbGw6IGJvb2xlYW4pOiBzdHJpbmcge1xuXG4gICAgICAgIC8qXG4gICAgICAgICAqIGlmIGFjY291bnQgaXMgcGFzc2VkIGFuZCBtYXRjaGVzIHRoZSBhY2NvdW50IG9iamVjdC9vciBzZXQgdG8gZ2V0QWNjb3VudCgpIGZyb20gY2FjaGVcbiAgICAgICAgICogaWYgY2xpZW50LWlkIGlzIHBhc3NlZCBhcyBzY29wZSwgZ2V0IGlkX3Rva2VuIGVsc2UgdG9rZW4vaWRfdG9rZW5fdG9rZW4gKGluIGNhc2Ugbm8gc2Vzc2lvbiBleGlzdHMpXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgdG9rZW5UeXBlOiBzdHJpbmc7XG5cbiAgICAgICAgLy8gYWNxdWlyZVRva2VuU2lsZW50XG4gICAgICAgIGlmIChzaWxlbnRDYWxsKSB7XG4gICAgICAgICAgICBpZiAoQWNjb3VudC5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMudG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2tlblR5cGUgID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0b2tlblR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWxsIG90aGVyIGNhc2VzXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFBY2NvdW50LmNvbXBhcmVBY2NvdW50cyhhY2NvdW50T2JqZWN0LCB0aGlzLmdldEFjY291bnQoKSkpIHtcbiAgICAgICAgICAgICAgICB0b2tlblR5cGUgPSBSZXNwb25zZVR5cGVzLmlkX3Rva2VuX3Rva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9rZW5UeXBlID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMudG9rZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0b2tlblR5cGU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBTZXRzIHRoZSBjYWNoZWtleXMgZm9yIGFuZCBzdG9yZXMgdGhlIGFjY291bnQgaW5mb3JtYXRpb24gaW4gY2FjaGVcbiAgICAgKiBAcGFyYW0gYWNjb3VudFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEFjY291bnRDYWNoZShhY2NvdW50OiBBY2NvdW50LCBzdGF0ZTogc3RyaW5nKSB7XG5cbiAgICAgICAgLy8gQ2FjaGUgYWNxdWlyZVRva2VuQWNjb3VudEtleVxuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBhY2NvdW50ID8gdGhpcy5nZXRBY2NvdW50SWQoYWNjb3VudCkgOiBDb25zdGFudHMubm9fYWNjb3VudDtcblxuICAgICAgICBjb25zdCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudElkLCBzdGF0ZSk7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYWNxdWlyZVRva2VuQWNjb3VudEtleSwgSlNPTi5zdHJpbmdpZnkoYWNjb3VudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBTZXRzIHRoZSBjYWNoZUtleSBmb3IgYW5kIHN0b3JlcyB0aGUgYXV0aG9yaXR5IGluZm9ybWF0aW9uIGluIGNhY2hlXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICogQHBhcmFtIGF1dGhvcml0eVxuICAgICAqIEBoaWRkZW5cbiAgICAgKi9cbiAgICBwcml2YXRlIHNldEF1dGhvcml0eUNhY2hlKHN0YXRlOiBzdHJpbmcsIGF1dGhvcml0eTogc3RyaW5nKSB7XG4gICAgICAgIC8vIENhY2hlIGF1dGhvcml0eUtleVxuICAgICAgICBjb25zdCBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShhdXRob3JpdHlLZXksIFVybFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShhdXRob3JpdHkpLCB0aGlzLmluQ29va2llKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFjY291bnQsIGF1dGhvcml0eSwgYW5kIG5vbmNlIGluIGNhY2hlXG4gICAgICogQHBhcmFtIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdFxuICAgICAqIEBwYXJhbSBhY2NvdW50XG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUNhY2hlRW50cmllcyhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLCBhY2NvdW50OiBBY2NvdW50LCBsb2dpblN0YXJ0UGFnZT86IGFueSkge1xuICAgICAgICAvLyBDYWNoZSBhY2NvdW50IGFuZCBhdXRob3JpdHlcbiAgICAgICAgaWYgKGxvZ2luU3RhcnRQYWdlKSB7XG4gICAgICAgICAgICAvLyBDYWNoZSB0aGUgc3RhdGUsIG5vbmNlLCBhbmQgbG9naW4gcmVxdWVzdCBkYXRhXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIGxvZ2luU3RhcnRQYWdlLCB0aGlzLmluQ29va2llKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiXCIpO1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xuXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIFwiXCIpO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIFwiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRBY2NvdW50Q2FjaGUoYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWNoZSBhdXRob3JpdHlLZXlcbiAgICAgICAgdGhpcy5zZXRBdXRob3JpdHlDYWNoZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpO1xuXG4gICAgICAgIC8vIENhY2hlIG5vbmNlXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0Lm5vbmNlLCB0aGlzLmluQ29va2llKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGxvZ2dlZCBpbiBhY2NvdW50XG4gICAgICogQHBhcmFtIGFjY291bnRcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0QWNjb3VudElkKGFjY291bnQ6IEFjY291bnQpOiBhbnkge1xuICAgICAgICAvLyByZXR1cm4gYCR7YWNjb3VudC5hY2NvdW50SWRlbnRpZmllcn1gICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICsgYCR7YWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXJ9YDtcbiAgICAgICAgbGV0IGFjY291bnRJZDogc3RyaW5nO1xuICAgICAgICBpZiAoIVN0cmluZ1V0aWxzLmlzRW1wdHkoYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICBhY2NvdW50SWQgPSBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFjY291bnRJZCA9IENvbnN0YW50cy5ub19hY2NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjY291bnRJZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogQ29uc3RydWN0ICd0b2tlblJlcXVlc3QnIGZyb20gdGhlIGF2YWlsYWJsZSBkYXRhIGluIGFkYWxJZFRva2VuXG4gICAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHByaXZhdGUgYnVpbGRJRFRva2VuUmVxdWVzdChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMge1xuXG4gICAgICAgIGNvbnN0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgc2NvcGVzOiBbdGhpcy5jbGllbnRJZF0sXG4gICAgICAgICAgICBhdXRob3JpdHk6IHRoaXMuYXV0aG9yaXR5LFxuICAgICAgICAgICAgYWNjb3VudDogdGhpcy5nZXRBY2NvdW50KCksXG4gICAgICAgICAgICBleHRyYVF1ZXJ5UGFyYW1ldGVyczogcmVxdWVzdC5leHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0b2tlblJlcXVlc3Q7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgcHJpdmF0ZSBnZXRUZWxlbWV0cnlNYW5hZ2VyRnJvbUNvbmZpZyhjb25maWc6IFRlbGVtZXRyeU9wdGlvbnMsIGNsaWVudElkOiBzdHJpbmcpOiBUZWxlbWV0cnlNYW5hZ2VyIHtcbiAgICAgICAgaWYgKCFjb25maWcpIHsgLy8gaWYgdW5zZXRcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHNldCB0aGVuIHZhbGlkYXRlXG4gICAgICAgIGNvbnN0IHsgYXBwbGljYXRpb25OYW1lLCBhcHBsaWNhdGlvblZlcnNpb24sIHRlbGVtZXRyeUVtaXR0ZXIgfSA9IGNvbmZpZztcbiAgICAgICAgaWYgKCFhcHBsaWNhdGlvbk5hbWUgfHwgIWFwcGxpY2F0aW9uVmVyc2lvbiB8fCAhIHRlbGVtZXRyeUVtaXR0ZXIpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVUZWxlbWV0cnlDb25maWdFcnJvcihjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHZhbGlkIHRoZW4gY29uc3RydWN0XG4gICAgICAgIGNvbnN0IHRlbGVtZXRyeVBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybSA9IHtcbiAgICAgICAgICAgIHNkazogXCJtc2FsLmpzXCIsIC8vIFRPRE8gbmVlZCB0byBiZSBhYmxlIHRvIG92ZXJyaWRlIHRoaXMgZm9yIGFuZ3VsYXIsIHJlYWN0LCBldGNcbiAgICAgICAgICAgIHNka1ZlcnNpb246IGxpYnJhcnlWZXJzaW9uKCksXG4gICAgICAgICAgICBhcHBsaWNhdGlvbk5hbWUsXG4gICAgICAgICAgICBhcHBsaWNhdGlvblZlcnNpb25cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdGVsZW1ldHJ5TWFuYWdlckNvbmZpZzogVGVsZW1ldHJ5Q29uZmlnID0ge1xuICAgICAgICAgICAgcGxhdGZvcm06IHRlbGVtZXRyeVBsYXRmb3JtLFxuICAgICAgICAgICAgY2xpZW50SWQ6IGNsaWVudElkXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgVGVsZW1ldHJ5TWFuYWdlcih0ZWxlbWV0cnlNYW5hZ2VyQ29uZmlnLCB0ZWxlbWV0cnlFbWl0dGVyKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFNjb3BlU2V0IHtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZXJlIGFyZSBkdXAgc2NvcGVzIGluIGEgZ2l2ZW4gcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgaW50ZXJzZWN0aW5nIHNjb3BlcyBpc24ndCBhIGdyZWF0IG5hbWUgZm9yIGR1cGxpY2F0ZSBjaGVja2VyXG4gICAgc3RhdGljIGlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkU2NvcGVzLmluZGV4T2Yoc2NvcGVzW2ldLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBnaXZlbiBzY29wZSBpcyBwcmVzZW50IGluIHRoZSByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FjaGVkU2NvcGVzXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHN0YXRpYyBjb250YWluc1Njb3BlKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XG4gICAgICAgIHJldHVybiBzY29wZXMuZXZlcnkoKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IGNhY2hlZFNjb3Blcy5pbmRleE9mKHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPj0gMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9Mb3dlclxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIC8vIFRPRE86IFJlbmFtZSB0aGlzLCB0b28gZ2VuZXJpYyBuYW1lIGZvciBhIGZ1bmN0aW9uIHRoYXQgb25seSBkZWFscyB3aXRoIHNjb3Blc1xuICAgIHN0YXRpYyBjb252ZXJ0VG9Mb3dlckNhc2Uoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBzY29wZXMubWFwKHNjb3BlID0+IHNjb3BlLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlbW92ZSBvbmUgZWxlbWVudCBmcm9tIGEgc2NvcGUgYXJyYXlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKi9cbiAgICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcbiAgICBzdGF0aWMgcmVtb3ZlRWxlbWVudChzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHNjb3Blcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHNjb3BlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgc2NvcGVzIGludG8gYSBmb3JtYXR0ZWQgc2NvcGVMaXN0XG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZVNjb3BlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzY29wZUxpc3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGlmIChzY29wZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzY29wZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzY29wZUxpc3QgKz0gKGkgIT09IHNjb3Blcy5sZW5ndGggLSAxKSA/IHNjb3Blc1tpXSArIFwiIFwiIDogc2NvcGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNjb3BlTGlzdDtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xuXG4vKipcbiAqIEBsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xuICAgIHNjb3Blcz86IEFycmF5PHN0cmluZz47XG4gICAgZXh0cmFTY29wZXNUb0NvbnNlbnQ/OiBBcnJheTxzdHJpbmc+O1xuICAgIHByb21wdD86IHN0cmluZztcbiAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycz86IFN0cmluZ0RpY3Q7XG4gICAgY2xhaW1zUmVxdWVzdD86IHN0cmluZztcbiAgICBhdXRob3JpdHk/OiBzdHJpbmc7XG4gICAgc3RhdGU/OiBzdHJpbmc7XG4gICAgY29ycmVsYXRpb25JZD86IHN0cmluZztcbiAgICBhY2NvdW50PzogQWNjb3VudDtcbiAgICBzaWQ/OiBzdHJpbmc7XG4gICAgbG9naW5IaW50Pzogc3RyaW5nO1xuICAgIGZvcmNlUmVmcmVzaD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDbGFpbXNSZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykge1xuICAgIGlmICghcmVxdWVzdC5jbGFpbXNSZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNsYWltcztcbiAgICB0cnkge1xuICAgICAgICBjbGFpbXMgPSBKU09OLnBhcnNlKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihlKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBNb3JlIHZhbGlkYXRpb24gd2lsbCBiZSBhZGRlZCB3aGVuIHRoZSBzZXJ2ZXIgdGVhbSB0ZWxscyB1cyBob3cgdGhleSBoYXZlIGFjdHVhbGx5IGltcGxlbWVudGVkIGNsYWltc1xufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vU3RyaW5nVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlblV0aWxzIHtcblxuICAgIC8qKlxuICAgICAqIGRlY29kZSBhIEpXVFxuICAgICAqXG4gICAgICogQHBhcmFtIGp3dFRva2VuXG4gICAgICovXG4gICAgc3RhdGljIGRlY29kZUp3dChqd3RUb2tlbjogc3RyaW5nKTogYW55IHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoand0VG9rZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZFRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBpZFRva2VuUGFydHNSZWdleC5leGVjKGp3dFRva2VuKTtcbiAgICAgICAgaWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgLy8gdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLndhcm4oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gaXMgbm90IHBhcnNlYWJsZS5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjcmFja2VkVG9rZW4gPSB7XG4gICAgICAgICAgICBoZWFkZXI6IG1hdGNoZXNbMV0sXG4gICAgICAgICAgICBKV1NQYXlsb2FkOiBtYXRjaGVzWzJdLFxuICAgICAgICAgICAgSldTU2lnOiBtYXRjaGVzWzNdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBjcmFja2VkVG9rZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdCBJZFRva2VuIGJ5IGRlY29kaW5nIHRoZSBSQVdJZFRva2VuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5jb2RlZElkVG9rZW5cbiAgICAgKi9cbiAgICBzdGF0aWMgZXh0cmFjdElkVG9rZW4oZW5jb2RlZElkVG9rZW46IHN0cmluZyk6IGFueSB7XG4gICAgLy8gaWQgdG9rZW4gd2lsbCBiZSBkZWNvZGVkIHRvIGdldCB0aGUgdXNlcm5hbWVcbiAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gdGhpcy5kZWNvZGVKd3QoZW5jb2RlZElkVG9rZW4pO1xuICAgICAgICBpZiAoIWRlY29kZWRUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NElkVG9rZW4gPSBkZWNvZGVkVG9rZW4uSldTUGF5bG9hZDtcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NERlY29kZWQgPSBDcnlwdG9VdGlscy5iYXNlNjREZWNvZGUoYmFzZTY0SWRUb2tlbik7XG4gICAgICAgICAgICBpZiAoIWJhc2U2NERlY29kZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9yZXF1ZXN0Q29udGV4dC5sb2dnZXIuaW5mbyhcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgYmFzZTY0IHVybCBzYWZlIGRlY29kZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRUNNQSBzY3JpcHQgaGFzIEpTT04gYnVpbHQtaW4gc3VwcG9ydFxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0RGVjb2RlZCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLy8gdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLmVycm9yKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGNvdWxkIG5vdCBiZSBkZWNvZGVkXCIgKyBlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENsaWVudEluZm8gfSBmcm9tIFwiLi9DbGllbnRJbmZvXCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuaW1wb3J0IHsgU3RyaW5nVXRpbHMgfSBmcm9tIFwiLi91dGlscy9TdHJpbmdVdGlsc1wiO1xuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xuXG4vKipcbiAqIGFjY291bnRJZGVudGlmaWVyICAgICAgIGNvbWJpbmF0aW9uIG9mIGlkVG9rZW4udWlkIGFuZCBpZFRva2VuLnV0aWRcbiAqIGhvbWVBY2NvdW50SWRlbnRpZmllciAgIGNvbWJpbmF0aW9uIG9mIGNsaWVudEluZm8udWlkIGFuZCBjbGllbnRJbmZvLnV0aWRcbiAqIHVzZXJOYW1lICAgICAgICAgICAgICAgIGlkVG9rZW4ucHJlZmVycmVkX3VzZXJuYW1lXG4gKiBuYW1lICAgICAgICAgICAgICAgICAgICBpZFRva2VuLm5hbWVcbiAqIGlkVG9rZW4gICAgICAgICAgICAgICAgIGlkVG9rZW5cbiAqIHNpZCAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4uc2lkIC0gc2Vzc2lvbiBpZGVudGlmaWVyXG4gKiBlbnZpcm9ubWVudCAgICAgICAgICAgICBpZHRva2VuLmlzc3VlciAodGhlIGF1dGhvcml0eSB0aGF0IGlzc3VlcyB0aGUgdG9rZW4pXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2NvdW50IHtcblxuICAgIGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgdXNlck5hbWU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaWRUb2tlbjogU3RyaW5nRGljdDsgLy8gd2lsbCBiZSBkZXByZWNhdGVkIHNvb25cbiAgICBpZFRva2VuQ2xhaW1zOiBTdHJpbmdEaWN0O1xuICAgIHNpZDogc3RyaW5nO1xuICAgIGVudmlyb25tZW50OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEFjY291bnQgT2JqZWN0XG4gICAgICogQHByYXJhbSBhY2NvdW50SWRlbnRpZmllclxuICAgICAqIEBwYXJhbSBob21lQWNjb3VudElkZW50aWZpZXJcbiAgICAgKiBAcGFyYW0gdXNlck5hbWVcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBpZFRva2VuXG4gICAgICogQHBhcmFtIHNpZFxuICAgICAqIEBwYXJhbSBlbnZpcm9ubWVudFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nLCB1c2VyTmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGlkVG9rZW5DbGFpbXM6IFN0cmluZ0RpY3QsIHNpZDogc3RyaW5nLCAgZW52aXJvbm1lbnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFjY291bnRJZGVudGlmaWVyID0gYWNjb3VudElkZW50aWZpZXI7XG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vIHdpbGwgYmUgZGVwcmVjYXRlZCBzb29uXG4gICAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW5DbGFpbXM7XG4gICAgICAgIHRoaXMuaWRUb2tlbkNsYWltcyA9IGlkVG9rZW5DbGFpbXM7XG4gICAgICAgIHRoaXMuc2lkID0gc2lkO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBwYXJhbSBpZFRva2VuXG4gICAgICogQHBhcmFtIGNsaWVudEluZm9cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlQWNjb3VudChpZFRva2VuOiBJZFRva2VuLCBjbGllbnRJbmZvOiBDbGllbnRJbmZvKTogQWNjb3VudCB7XG5cbiAgICAgICAgLy8gY3JlYXRlIGFjY291bnRJZGVudGlmaWVyXG4gICAgICAgIGNvbnN0IGFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcgPSBpZFRva2VuLm9iamVjdElkIHx8ICBpZFRva2VuLnN1YmplY3Q7XG5cbiAgICAgICAgLy8gY3JlYXRlIGhvbWVBY2NvdW50SWRlbnRpZmllclxuICAgICAgICBjb25zdCB1aWQ6IHN0cmluZyA9IGNsaWVudEluZm8gPyBjbGllbnRJbmZvLnVpZCA6IFwiXCI7XG4gICAgICAgIGNvbnN0IHV0aWQ6IHN0cmluZyA9IGNsaWVudEluZm8gPyBjbGllbnRJbmZvLnV0aWQgOiBcIlwiO1xuXG4gICAgICAgIGxldCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcbiAgICAgICAgaWYgKCFTdHJpbmdVdGlscy5pc0VtcHR5KHVpZCkgJiYgIVN0cmluZ1V0aWxzLmlzRW1wdHkodXRpZCkpIHtcbiAgICAgICAgICAgIGhvbWVBY2NvdW50SWRlbnRpZmllciA9IENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh1aWQpICsgXCIuXCIgKyBDcnlwdG9VdGlscy5iYXNlNjRFbmNvZGUodXRpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBBY2NvdW50KGFjY291bnRJZGVudGlmaWVyLCBob21lQWNjb3VudElkZW50aWZpZXIsIGlkVG9rZW4ucHJlZmVycmVkTmFtZSwgaWRUb2tlbi5uYW1lLCBpZFRva2VuLmNsYWltcywgaWRUb2tlbi5zaWQsIGlkVG9rZW4uaXNzdWVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlscyBmdW5jdGlvbiB0byBjb21wYXJlIHR3byBBY2NvdW50IG9iamVjdHMgLSB1c2VkIHRvIGNoZWNrIGlmIHRoZSBzYW1lIHVzZXIgYWNjb3VudCBpcyBsb2dnZWQgaW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhMTogQWNjb3VudCBvYmplY3RcbiAgICAgKiBAcGFyYW0gYTI6IEFjY291bnQgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVBY2NvdW50cyhhMTogQWNjb3VudCwgYTI6IEFjY291bnQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFhMSB8fCAhYTIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYTEuaG9tZUFjY291bnRJZGVudGlmaWVyICYmIGEyLmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xuICAgICAgICAgICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gYTIuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBBdXRob3JpdHksIEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcbmltcG9ydCB7IFhockNsaWVudCB9IGZyb20gXCIuLi9YSFJDbGllbnRcIjtcbmltcG9ydCB7IEFBRFRydXN0ZWRIb3N0TGlzdCB9IGZyb20gXCIuLi91dGlscy9Db25zdGFudHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBYWRBdXRob3JpdHkgZXh0ZW5kcyBBdXRob3JpdHkge1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnQ6IHN0cmluZyA9IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vbi9kaXNjb3ZlcnkvaW5zdGFuY2VcIjtcblxuICAgIHByaXZhdGUgZ2V0IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke0FhZEF1dGhvcml0eS5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50fT9hcGktdmVyc2lvbj0xLjAmYXV0aG9yaXphdGlvbl9lbmRwb2ludD0ke3RoaXMuQ2Fub25pY2FsQXV0aG9yaXR5fW9hdXRoMi92Mi4wL2F1dGhvcml6ZWA7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZSB7XG4gICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFhZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgT0lEQyBlbmRwb2ludFxuICAgICAqIE9ubHkgcmVzcG9uZHMgd2l0aCB0aGUgZW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKCF0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgfHwgdGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIGN1c3RvbSBkb21haW5zIGluIEFBRCB3aGVyZSB3ZSBxdWVyeSB0aGUgc2VydmljZSBmb3IgdGhlIEluc3RhbmNlIGRpc2NvdmVyeVxuICAgICAgICBjb25zdCBjbGllbnQ6IFhockNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcblxuICAgICAgICByZXR1cm4gY2xpZW50LnNlbmRSZXF1ZXN0QXN5bmModGhpcy5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50VXJsLCBcIkdFVFwiLCB0cnVlKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRlbmFudF9kaXNjb3ZlcnlfZW5kcG9pbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBob3N0IGlzIGluIGEgbGlzdCBvZiB0cnVzdGVkIGhvc3RzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFRoZSBob3N0IHRvIGxvb2sgdXBcbiAgICAgKi9cbiAgICBwdWJsaWMgSXNJblRydXN0ZWRIb3N0TGlzdChob3N0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEFBRFRydXN0ZWRIb3N0TGlzdFtob3N0LnRvTG93ZXJDYXNlKCldO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFhIUiBjbGllbnQgZm9yIEpTT04gZW5kcG9pbnRzXG4gKiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9hc3luYy1wcm9taXNlXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBYaHJDbGllbnQge1xuICAgIHB1YmxpYyBzZW5kUmVxdWVzdEFzeW5jKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZW5hYmxlQ2FjaGluZz86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCAvKiBhc3luYzogKi8gdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoZW5hYmxlQ2FjaGluZykge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogVE9ETzogKHNoaXZiKSBlbnN1cmUgdGhhdCB0aGlzIGNhbiBiZSBjYWNoZWRcbiAgICAgICAgICAgICAgICAgKiB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNhY2hlLUNvbnRyb2xcIiwgXCJQdWJsaWNcIik7XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5oYW5kbGVFcnJvcih4aHIucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBqc29uUmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKGpzb25SZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IChldikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCh4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJub3QgaW1wbGVtZW50ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZUVycm9yKHJlc3BvbnNlVGV4dDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgbGV0IGpzb25SZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIGlmIChqc29uUmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvblJlc3BvbnNlLmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZXNwb25zZVRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVRleHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWFkQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWFkQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXJsVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBCMmNBdXRob3JpdHkgZXh0ZW5kcyBBYWRBdXRob3JpdHkge1xuICAgIHB1YmxpYyBzdGF0aWMgQjJDX1BSRUZJWDogU3RyaW5nID0gXCJ0ZnBcIjtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKGF1dGhvcml0eSwgdmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgICBjb25zdCB1cmxDb21wb25lbnRzID0gVXJsVXRpbHMuR2V0VXJsQ29tcG9uZW50cyhhdXRob3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xuICAgICAgICBpZiAocGF0aFNlZ21lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYjJjQXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSA9IGBodHRwczovLyR7dXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnR9LyR7cGF0aFNlZ21lbnRzWzBdfS8ke3BhdGhTZWdtZW50c1sxXX0vJHtwYXRoU2VnbWVudHNbMl19L2A7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xuICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5CMkM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgR2V0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50QXN5bmMoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKCF0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgfHwgdGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cy5Ib3N0TmFtZUFuZFBvcnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5EZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS51bnN1cHBvcnRlZEF1dGhvcml0eVZhbGlkYXRpb247XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi91dGlscy9VcmxVdGlsc1wiO1xuaW1wb3J0IHsgVGVsZW1ldHJ5RW1pdHRlciB9IGZyb20gXCIuL3RlbGVtZXRyeS9UZWxlbWV0cnlUeXBlc1wiO1xuXG4vKipcbiAqIENhY2hlIGxvY2F0aW9uIG9wdGlvbnMgc3VwcG9ydGVkIGJ5IE1TQUwgYXJlOlxuICogLSBsb2NhbCBzdG9yYWdlOiBNU0FMIHVzZXMgYnJvd3NlcnMgbG9jYWwgc3RvcmFnZSB0byBzdG9yZSBpdHMgY2FjaGVcbiAqIC0gc2Vzc2lvbiBzdG9yYWdlOiBNU0FMIHVzZXMgdGhlIGJyb3dzZXJzIHNlc3Npb24gc3RvcmFnZSB0byBzdG9yZSBpdHMgY2FjaGVcbiAqL1xuZXhwb3J0IHR5cGUgQ2FjaGVMb2NhdGlvbiA9IFwibG9jYWxTdG9yYWdlXCIgfCBcInNlc3Npb25TdG9yYWdlXCI7XG5cbi8qKlxuICogRGVmYXVsdHMgZm9yIHRoZSBDb25maWd1cmF0aW9uIE9wdGlvbnNcbiAqL1xuY29uc3QgRlJBTUVfVElNRU9VVCA9IDYwMDA7XG5jb25zdCBPRkZTRVQgPSAzMDA7XG5jb25zdCBOQVZJR0FURV9GUkFNRV9XQUlUID0gNTAwO1xuXG4vKipcbiAqIEB0eXBlIEF1dGhPcHRpb25zOiBVc2UgdGhpcyB0byBjb25maWd1cmUgdGhlIGF1dGggb3B0aW9ucyBpbiB0aGUgQ29uZmlndXJhdGlvbiBvYmplY3RcbiAqXG4gKiAgLSBjbGllbnRJZCAgICAgICAgICAgICAgICAgICAgLSBDbGllbnQgSUQgb2YgeW91ciBhcHAgcmVnaXN0ZXJlZCB3aXRoIG91ciBBcHBsaWNhdGlvbiByZWdpc3RyYXRpb24gcG9ydGFsIDogaHR0cHM6Ly9wb3J0YWwuYXp1cmUuY29tLyNibGFkZS9NaWNyb3NvZnRfQUFEX0lBTS9BY3RpdmVEaXJlY3RvcnlNZW51QmxhZGUvUmVnaXN0ZXJlZEFwcHNQcmV2aWV3IGluIE1pY3Jvc29mdCBJZGVudGl0eSBQbGF0Zm9ybVxuICogIC0gYXV0aG9yaXR5ICAgICAgICAgICAgICAgICAgIC0gWW91IGNhbiBjb25maWd1cmUgYSBzcGVjaWZpYyBhdXRob3JpdHksIGRlZmF1bHRzIHRvIFwiIFwiIG9yIFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiXG4gKiAgLSB2YWxpZGF0ZUF1dGhvcml0eSAgICAgICAgICAgLSBVc2VkIHRvIHR1cm4gYXV0aG9yaXR5IHZhbGlkYXRpb24gb24vb2ZmLiBXaGVuIHNldCB0byB0cnVlIChkZWZhdWx0KSwgTVNBTCB3aWxsIGNvbXBhcmUgdGhlIGFwcGxpY2F0aW9uJ3MgYXV0aG9yaXR5IGFnYWluc3Qgd2VsbC1rbm93biBVUkxzIHRlbXBsYXRlcyByZXByZXNlbnRpbmcgd2VsbC1mb3JtZWQgYXV0aG9yaXRpZXMuIEl0IGlzIHVzZWZ1bCB3aGVuIHRoZSBhdXRob3JpdHkgaXMgb2J0YWluZWQgYXQgcnVuIHRpbWUgdG8gcHJldmVudCBNU0FMIGZyb20gZGlzcGxheWluZyBhdXRoZW50aWNhdGlvbiBwcm9tcHRzIGZyb20gbWFsaWNpb3VzIHBhZ2VzLlxuICogIC0gcmVkaXJlY3RVcmkgICAgICAgICAgICAgICAgIC0gVGhlIHJlZGlyZWN0IFVSSSBvZiB0aGUgYXBwbGljYXRpb24sIHRoaXMgc2hvdWxkIGJlIHNhbWUgYXMgdGhlIHZhbHVlIGluIHRoZSBhcHBsaWNhdGlvbiByZWdpc3RyYXRpb24gcG9ydGFsLkRlZmF1bHRzIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXG4gKiAgLSBwb3N0TG9nb3V0UmVkaXJlY3RVcmkgICAgICAgLSBVc2VkIHRvIHJlZGlyZWN0IHRoZSB1c2VyIHRvIHRoaXMgbG9jYXRpb24gYWZ0ZXIgbG9nb3V0LiBEZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxuICogIC0gbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybCAgIC0gVXNlZCB0byB0dXJuIG9mZiBkZWZhdWx0IG5hdmlnYXRpb24gdG8gc3RhcnQgcGFnZSBhZnRlciBsb2dpbi4gRGVmYXVsdCBpcyB0cnVlLiBUaGlzIGlzIHVzZWQgb25seSBmb3IgcmVkaXJlY3QgZmxvd3MuXG4gKlxuICovXG5leHBvcnQgdHlwZSBBdXRoT3B0aW9ucyA9IHtcbiAgICBjbGllbnRJZDogc3RyaW5nO1xuICAgIGF1dGhvcml0eT86IHN0cmluZztcbiAgICB2YWxpZGF0ZUF1dGhvcml0eT86IGJvb2xlYW47XG4gICAgcmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogVXNlIHRoaXMgdG8gY29uZmlndXJlIHRoZSBiZWxvdyBjYWNoZSBjb25maWd1cmF0aW9uIG9wdGlvbnM6XG4gKlxuICogLSBjYWNoZUxvY2F0aW9uICAgICAgICAgICAgLSBVc2VkIHRvIHNwZWNpZnkgdGhlIGNhY2hlTG9jYXRpb24gdXNlciB3YW50cyB0byBzZXQuIFZhbGlkIHZhbHVlcyBhcmUgXCJsb2NhbFN0b3JhZ2VcIiBhbmQgXCJzZXNzaW9uU3RvcmFnZVwiXG4gKiAtIHN0b3JlQXV0aFN0YXRlSW5Db29raWUgICAtIElmIHNldCwgTVNBTCBzdG9yZSdzIHRoZSBhdXRoIHJlcXVlc3Qgc3RhdGUgcmVxdWlyZWQgZm9yIHZhbGlkYXRpb24gb2YgdGhlIGF1dGggZmxvd3MgaW4gdGhlIGJyb3dzZXIgY29va2llcy4gQnkgZGVmYXVsdCB0aGlzIGZsYWcgaXMgc2V0IHRvIGZhbHNlLlxuICovXG5leHBvcnQgdHlwZSBDYWNoZU9wdGlvbnMgPSB7XG4gICAgY2FjaGVMb2NhdGlvbj86IENhY2hlTG9jYXRpb247XG4gICAgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZT86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFRlbGVtZXRyeSBDb25maWcgT3B0aW9uc1xuICogLSBhcHBsaWNhdGlvbk5hbWUgICAgICAgICAgICAgIC0gTmFtZSBvZiB0aGUgY29uc3VtaW5nIGFwcHMgYXBwbGljYXRpb25cbiAqIC0gYXBwbGljYXRpb25WZXJzaW9uICAgICAgICAgICAtIFZlcmlzb24gb2YgdGhlIGNvbnN1bWluZyBhcHBsaWNhdGlvblxuICogLSB0ZWxlbWV0cnlFbWl0dGVyICAgICAgICAgICAgIC0gRnVuY3Rpb24gd2hlcmUgdGVsZW1ldHJ5IGV2ZW50cyBhcmUgZmx1c2hlZCB0b1xuICovXG5leHBvcnQgdHlwZSBUZWxlbWV0cnlPcHRpb25zID0ge1xuICAgIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nO1xuICAgIGFwcGxpY2F0aW9uVmVyc2lvbjogc3RyaW5nO1xuICAgIHRlbGVtZXRyeUVtaXR0ZXI6IFRlbGVtZXRyeUVtaXR0ZXJcbiAgICAvLyBUT0RPLCBhZGQgb25seUFkZEZhaWx1cmVUZWxlbWV0cnkgb3B0aW9uXG59O1xuXG4vKipcbiAqIExpYnJhcnkgU3BlY2lmaWMgT3B0aW9uc1xuICpcbiAqIC0gbG9nZ2VyICAgICAgICAgICAgICAgICAgICAgICAtIFVzZWQgdG8gaW5pdGlhbGl6ZSB0aGUgTG9nZ2VyIG9iamVjdDsgVE9ETzogRXhwYW5kIG9uIGxvZ2dlciBkZXRhaWxzIG9yIGxpbmsgdG8gdGhlIGRvY3VtZW50YXRpb24gb24gbG9nZ2VyXG4gKiAtIGxvYWRGcmFtZVRpbWVvdXQgICAgICAgICAgICAgLSBtYXhpbXVtIHRpbWUgdGhlIGxpYnJhcnkgc2hvdWxkIHdhaXQgZm9yIGEgZnJhbWUgdG8gbG9hZFxuICogLSB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzICAgIC0gc2V0cyB0aGUgd2luZG93IG9mIG9mZnNldCBuZWVkZWQgdG8gcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcnlcbiAqIC0gbmF2aWdhdGVGcmFtZVdhaXQgICAgICAgICAgICAtIHNldHMgdGhlIHdhaXQgdGltZSBmb3IgaGlkZGVuIGlGcmFtZSBuYXZpZ2F0aW9uXG4gKi9cbmV4cG9ydCB0eXBlIFN5c3RlbU9wdGlvbnMgPSB7XG4gICAgbG9nZ2VyPzogTG9nZ2VyO1xuICAgIGxvYWRGcmFtZVRpbWVvdXQ/OiBudW1iZXI7XG4gICAgdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcz86IG51bWJlcjtcbiAgICBuYXZpZ2F0ZUZyYW1lV2FpdD86IG51bWJlcjtcbiAgICB0ZWxlbWV0cnk/OiBUZWxlbWV0cnlPcHRpb25zXG59O1xuXG4vKipcbiAqIEFwcC9GcmFtZXdvcmsgc3BlY2lmaWMgZW52aXJvbm1lbnQgc3VwcG9ydFxuICpcbiAqIC0gaXNBbmd1bGFyICAgICAgICAgICAgICAgIC0gZmxhZyBzZXQgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIEFuZ3VsYXIgRnJhbWV3b3JrLiBNU0FMIHVzZXMgdGhpcyB0byBicm9hZGNhc3QgdG9rZW5zLiBNb3JlIHRvIGNvbWUgaGVyZTogZGV0YW5nbGUgdGhpcyBkZXBlbmRlbmN5IGZyb20gY29yZS5cbiAqIC0gdW5wcm90ZWN0ZWRSZXNvdXJjZXMgICAgIC0gQXJyYXkgb2YgVVJJJ3Mgd2hpY2ggYXJlIHVucHJvdGVjdGVkIHJlc291cmNlcy4gTVNBTCB3aWxsIG5vdCBhdHRhY2ggYSB0b2tlbiB0byBvdXRnb2luZyByZXF1ZXN0cyB0aGF0IGhhdmUgdGhlc2UgVVJJLiBEZWZhdWx0cyB0byAnbnVsbCcuXG4gKiAtIHByb3RlY3RlZFJlc291cmNlTWFwICAgICAtIFRoaXMgaXMgbWFwcGluZyBvZiByZXNvdXJjZXMgdG8gc2NvcGVzIHVzZWQgYnkgTVNBTCBmb3IgYXV0b21hdGljYWxseSBhdHRhY2hpbmcgYWNjZXNzIHRva2VucyBpbiB3ZWIgQVBJIGNhbGxzLkEgc2luZ2xlIGFjY2VzcyB0b2tlbiBpcyBvYnRhaW5lZCBmb3IgdGhlIHJlc291cmNlLiBTbyB5b3UgY2FuIG1hcCBhIHNwZWNpZmljIHJlc291cmNlIHBhdGggYXMgZm9sbG93czoge1wiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL3YxLjAvbWVcIiwgW1widXNlci5yZWFkXCJdfSwgb3IgdGhlIGFwcCBVUkwgb2YgdGhlIHJlc291cmNlIGFzOiB7XCJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vXCIsIFtcInVzZXIucmVhZFwiLCBcIm1haWwuc2VuZFwiXX0uIFRoaXMgaXMgcmVxdWlyZWQgZm9yIENPUlMgY2FsbHMuXG4gKlxuICovXG5leHBvcnQgdHlwZSBGcmFtZXdvcmtPcHRpb25zID0ge1xuICAgIGlzQW5ndWxhcj86IGJvb2xlYW47XG4gICAgdW5wcm90ZWN0ZWRSZXNvdXJjZXM/OiBBcnJheTxzdHJpbmc+O1xuICAgIHByb3RlY3RlZFJlc291cmNlTWFwPzogTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj47XG59O1xuXG4vKipcbiAqIFVzZSB0aGUgY29uZmlndXJhdGlvbiBvYmplY3QgdG8gY29uZmlndXJlIE1TQUwgYW5kIGluaXRpYWxpemUgdGhlIFVzZXJBZ2VudEFwcGxpY2F0aW9uLlxuICpcbiAqIFRoaXMgb2JqZWN0IGFsbG93cyB5b3UgdG8gY29uZmlndXJlIGltcG9ydGFudCBlbGVtZW50cyBvZiBNU0FMIGZ1bmN0aW9uYWxpdHk6XG4gKiAtIGF1dGg6IHRoaXMgaXMgd2hlcmUgeW91IGNvbmZpZ3VyZSBhdXRoIGVsZW1lbnRzIGxpa2UgY2xpZW50SUQsICBhdXRob3JpdHkgdXNlZCBmb3IgYXV0aGVudGljYXRpbmcgYWdhaW5zdCB0aGUgTWljcm9zb2Z0IElkZW50aXR5IFBsYXRmb3JtXG4gKiAtIGNhY2hlOiB0aGlzIGlzIHdoZXJlIHlvdSBjb25maWd1cmUgY2FjaGUgbG9jYXRpb24gYW5kIHdoZXRoZXIgdG8gc3RvcmUgY2FjaGUgaW4gY29va2llc1xuICogLSBzeXN0ZW06IHRoaXMgaXMgd2hlcmUgeW91IGNhbiBjb25maWd1cmUgdGhlIGxvZ2dlciwgZnJhbWUgdGltZW91dCBldGMuXG4gKiAtIGZyYW1ld29yazogdGhpcyBpcyB3aGVyZSB5b3UgY2FuIGNvbmZpZ3VyZSB0aGUgcnVubmluZyBtb2RlIG9mIGFuZ3VsYXIuIE1vcmUgdG8gY29tZSBoZXJlIHNvb24uXG4gKi9cbmV4cG9ydCB0eXBlIENvbmZpZ3VyYXRpb24gPSB7XG4gICAgYXV0aDogQXV0aE9wdGlvbnMsXG4gICAgY2FjaGU/OiBDYWNoZU9wdGlvbnMsXG4gICAgc3lzdGVtPzogU3lzdGVtT3B0aW9ucyxcbiAgICBmcmFtZXdvcms/OiBGcmFtZXdvcmtPcHRpb25zXG59O1xuXG5jb25zdCBERUZBVUxUX0FVVEhfT1BUSU9OUzogQXV0aE9wdGlvbnMgPSB7XG4gICAgY2xpZW50SWQ6IFwiXCIsXG4gICAgYXV0aG9yaXR5OiBudWxsLFxuICAgIHZhbGlkYXRlQXV0aG9yaXR5OiB0cnVlLFxuICAgIHJlZGlyZWN0VXJpOiAoKSA9PiBVcmxVdGlscy5nZXREZWZhdWx0UmVkaXJlY3RVcmkoKSxcbiAgICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6ICgpID0+IFVybFV0aWxzLmdldERlZmF1bHRSZWRpcmVjdFVyaSgpLFxuICAgIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw6IHRydWVcbn07XG5cbmNvbnN0IERFRkFVTFRfQ0FDSEVfT1BUSU9OUzogQ2FjaGVPcHRpb25zID0ge1xuICAgIGNhY2hlTG9jYXRpb246IFwic2Vzc2lvblN0b3JhZ2VcIixcbiAgICBzdG9yZUF1dGhTdGF0ZUluQ29va2llOiBmYWxzZVxufTtcblxuY29uc3QgREVGQVVMVF9TWVNURU1fT1BUSU9OUzogU3lzdGVtT3B0aW9ucyA9IHtcbiAgICBsb2dnZXI6IG5ldyBMb2dnZXIobnVsbCksXG4gICAgbG9hZEZyYW1lVGltZW91dDogRlJBTUVfVElNRU9VVCxcbiAgICB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzOiBPRkZTRVQsXG4gICAgbmF2aWdhdGVGcmFtZVdhaXQ6IE5BVklHQVRFX0ZSQU1FX1dBSVRcbn07XG5cbmNvbnN0IERFRkFVTFRfRlJBTUVXT1JLX09QVElPTlM6IEZyYW1ld29ya09wdGlvbnMgPSB7XG4gICAgaXNBbmd1bGFyOiBmYWxzZSxcbiAgICB1bnByb3RlY3RlZFJlc291cmNlczogbmV3IEFycmF5PHN0cmluZz4oKSxcbiAgICBwcm90ZWN0ZWRSZXNvdXJjZU1hcDogbmV3IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+KClcbn07XG5cbi8qKlxuICogTVNBTCBmdW5jdGlvbiB0aGF0IHNldHMgdGhlIGRlZmF1bHQgb3B0aW9ucyB3aGVuIG5vdCBleHBsaWNpdGx5IGNvbmZpZ3VyZWQgZnJvbSBhcHAgZGV2ZWxvcGVyXG4gKlxuICogQHBhcmFtIFRBdXRoT3B0aW9uc1xuICogQHBhcmFtIFRDYWNoZU9wdGlvbnNcbiAqIEBwYXJhbSBUU3lzdGVtT3B0aW9uc1xuICogQHBhcmFtIFRGcmFtZXdvcmtPcHRpb25zXG4gKlxuICogQHJldHVybnMgVENvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlndXJhdGlvbih7IGF1dGgsIGNhY2hlID0ge30sIHN5c3RlbSA9IHt9LCBmcmFtZXdvcmsgPSB7fX06IENvbmZpZ3VyYXRpb24pOiBDb25maWd1cmF0aW9uIHtcbiAgICBjb25zdCBvdmVybGF5ZWRDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XG4gICAgICAgIGF1dGg6IHsgLi4uREVGQVVMVF9BVVRIX09QVElPTlMsIC4uLmF1dGggfSxcbiAgICAgICAgY2FjaGU6IHsgLi4uREVGQVVMVF9DQUNIRV9PUFRJT05TLCAuLi5jYWNoZSB9LFxuICAgICAgICBzeXN0ZW06IHsgLi4uREVGQVVMVF9TWVNURU1fT1BUSU9OUywgLi4uc3lzdGVtIH0sXG4gICAgICAgIGZyYW1ld29yazogeyAuLi5ERUZBVUxUX0ZSQU1FV09SS19PUFRJT05TLCAuLi5mcmFtZXdvcmsgfVxuICAgIH07XG4gICAgcmV0dXJuIG92ZXJsYXllZENvbmZpZztcbn1cblxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vU2VydmVyRXJyb3JcIjtcblxuZXhwb3J0IGNvbnN0IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlID0ge1xuICAgIGludGVyYWN0aW9uUmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJpbnRlcmFjdGlvbl9yZXF1aXJlZFwiXG4gICAgfSxcbiAgICBjb25zZW50UmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJjb25zZW50X3JlcXVpcmVkXCJcbiAgICB9LFxuICAgIGxvZ2luUmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJsb2dpbl9yZXF1aXJlZFwiXG4gICAgfSxcbn07XG5cbi8qKlxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlIHVzZXIgaXMgcmVxdWlyZWQgdG8gcGVyZm9ybSBhbiBpbnRlcmFjdGl2ZSB0b2tlbiByZXF1ZXN0LlxuICovXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciBleHRlbmRzIFNlcnZlckVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5wcm90b3R5cGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0ludGVyYWN0aW9uUmVxdWlyZWRFcnJvcihlcnJvclN0cmluZzogc3RyaW5nKSA6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGlvblJlcXVpcmVkQ29kZXMgPSBbXG4gICAgICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5pbnRlcmFjdGlvblJlcXVpcmVkLmNvZGUsXG4gICAgICAgICAgICBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5jb25zZW50UmVxdWlyZWQuY29kZSxcbiAgICAgICAgICAgIEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUmVxdWlyZWQuY29kZVxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBlcnJvclN0cmluZyAmJiBpbnRlcmFjdGlvblJlcXVpcmVkQ29kZXMuaW5kZXhPZihlcnJvclN0cmluZykgPiAtMTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTG9naW5SZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UubG9naW5SZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5pbnRlcmFjdGlvblJlcXVpcmVkLmNvZGUsIGVycm9yRGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNvbnNlbnRSZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuY29uc2VudFJlcXVpcmVkLmNvZGUsIGVycm9yRGVzYyk7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xuaW1wb3J0IHsgU3RyaW5nRGljdCB9IGZyb20gXCIuL01zYWxUeXBlc1wiO1xuXG5leHBvcnQgdHlwZSBBdXRoUmVzcG9uc2UgPSB7XG4gICAgdW5pcXVlSWQ6IHN0cmluZztcbiAgICB0ZW5hbnRJZDogc3RyaW5nO1xuICAgIHRva2VuVHlwZTogc3RyaW5nO1xuICAgIGlkVG9rZW46IElkVG9rZW47XG4gICAgaWRUb2tlbkNsYWltczogU3RyaW5nRGljdDtcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICAgIHNjb3BlczogQXJyYXk8c3RyaW5nPjtcbiAgICBleHBpcmVzT246IERhdGU7XG4gICAgYWNjb3VudDogQWNjb3VudDtcbiAgICBhY2NvdW50U3RhdGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJlc3BvbnNlU3RhdGVPbmx5KHN0YXRlOiBzdHJpbmcpIDogQXV0aFJlc3BvbnNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1bmlxdWVJZDogXCJcIixcbiAgICAgICAgdGVuYW50SWQ6IFwiXCIsXG4gICAgICAgIHRva2VuVHlwZTogXCJcIixcbiAgICAgICAgaWRUb2tlbjogbnVsbCxcbiAgICAgICAgaWRUb2tlbkNsYWltczogbnVsbCxcbiAgICAgICAgYWNjZXNzVG9rZW46IFwiXCIsXG4gICAgICAgIHNjb3BlczogbnVsbCxcbiAgICAgICAgZXhwaXJlc09uOiBudWxsLFxuICAgICAgICBhY2NvdW50OiBudWxsLFxuICAgICAgICBhY2NvdW50U3RhdGU6IHN0YXRlXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IEIyY0F1dGhvcml0eSB9IGZyb20gXCIuLi9hdXRob3JpdHkvQjJjQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBBQURUcnVzdGVkSG9zdExpc3QgfSBmcm9tIFwiLi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBURU5BTlRfUExBQ0VIT0xERVIsIEVWRU5UX05BTUVfUFJFRklYIH0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDcnlwdG9VdGlscyB9IGZyb20gXCIuLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXJsVXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IHNjcnViVGVuYW50RnJvbVVyaSA9ICh1cmk6IHN0cmluZyk6IFN0cmluZyA9PiB7XG5cbiAgICBjb25zdCB1cmwgPSBVcmxVdGlscy5HZXRVcmxDb21wb25lbnRzKHVyaSk7XG5cbiAgICAvLyB2YWxpZGF0ZSB0cnVzdGVkIGhvc3RcbiAgICBpZiAoIUFBRFRydXN0ZWRIb3N0TGlzdFt1cmwuSG9zdE5hbWVBbmRQb3J0LnRvTG9jYWxlTG93ZXJDYXNlKCldKSB7XG4gICAgICAgIC8vIFNob3VsZCB0aGlzIHJldHVybiBudWxsIG9yIHdoYXQgd2FzIHBhc3NlZD9cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcGF0aFBhcmFtcyA9IHVybC5QYXRoU2VnbWVudHM7XG5cbiAgICBpZiAocGF0aFBhcmFtcyAmJiBwYXRoUGFyYW1zLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIGNvbnN0IHRlbmFudFBvc2l0aW9uID0gcGF0aFBhcmFtc1sxXSA9PT0gIEIyY0F1dGhvcml0eS5CMkNfUFJFRklYID8gMiA6IDE7XG4gICAgICAgIGlmICh0ZW5hbnRQb3NpdGlvbiA8IHBhdGhQYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBwYXRoUGFyYW1zW3RlbmFudFBvc2l0aW9uXSA9IFRFTkFOVF9QTEFDRUhPTERFUjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAgYCR7dXJsLlByb3RvY29sfS8vJHt1cmwuSG9zdE5hbWVBbmRQb3J0fS8ke3BhdGhQYXJhbXMuam9pbihcIi9cIil9YDtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXNoUGVyc29uYWxJZGVudGlmaWVyID0gKHZhbHVlVG9IYXNoOiBzdHJpbmcpID0+IHtcbiAgICAvKlxuICAgICAqIFRPRE8gc2hhMjU2IHRoaXNcbiAgICAgKiBDdXJyZW50IHRlc3QgcnVubmVyIGlzIGJlaW5nIGZ1bm55IHdpdGggbm9kZSBsaWJzIHRoYXQgYXJlIHdlYnBhY2tlZCBhbnl3YXlcbiAgICAgKiBuZWVkIGEgZGlmZmVyZW50IHNvbHV0aW9uXG4gICAgICovXG4gICAgcmV0dXJuIENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh2YWx1ZVRvSGFzaCk7XG59O1xuXG5leHBvcnQgY29uc3QgcHJlcGVuZEV2ZW50TmFtZVByZWZpeCA9IChzdWZmaXg6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtFVkVOVF9OQU1FX1BSRUZJWH0ke3N1ZmZpeCB8fCBcIlwifWA7XG4iLCJleHBvcnQgeyBVc2VyQWdlbnRBcHBsaWNhdGlvbiB9IGZyb20gXCIuL1VzZXJBZ2VudEFwcGxpY2F0aW9uXCI7XG5leHBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmV4cG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5leHBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuZXhwb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5leHBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9hdXRob3JpdHkvQXV0aG9yaXR5XCI7XG5leHBvcnQgeyBDYWNoZVJlc3VsdCB9IGZyb20gXCIuL1VzZXJBZ2VudEFwcGxpY2F0aW9uXCI7XG5leHBvcnQgeyBDYWNoZUxvY2F0aW9uLCBDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xuZXhwb3J0IHsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXCI7XG5leHBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi9BdXRoUmVzcG9uc2VcIjtcblxuLy8gRXJyb3JzXG5leHBvcnQgeyBBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9BdXRoRXJyb3JcIjtcbmV4cG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xuZXhwb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9TZXJ2ZXJFcnJvclwiO1xuZXhwb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5leHBvcnQgeyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IFVybFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvVXJsVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbktleSB7XG5cbiAgICBhdXRob3JpdHk6IHN0cmluZztcbiAgICBjbGllbnRJZDogc3RyaW5nO1xuICAgIHNjb3Blczogc3RyaW5nO1xuICAgIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nLCB1aWQ6IHN0cmluZywgdXRpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYXV0aG9yaXR5ID0gVXJsVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eSk7XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICAgICAgdGhpcy5zY29wZXMgPSBzY29wZXM7XG4gICAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gQ3J5cHRvVXRpbHMuYmFzZTY0RW5jb2RlKHVpZCkgKyBcIi5cIiArIENyeXB0b1V0aWxzLmJhc2U2NEVuY29kZSh1dGlkKTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlblZhbHVlIHtcblxuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gICAgaWRUb2tlbjogc3RyaW5nO1xuICAgIGV4cGlyZXNJbjogc3RyaW5nO1xuICAgIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoYWNjZXNzVG9rZW46IHN0cmluZywgaWRUb2tlbjogc3RyaW5nLCBleHBpcmVzSW46IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuO1xuICAgICAgICB0aGlzLmV4cGlyZXNJbiA9IGV4cGlyZXNJbjtcbiAgICAgICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIgPSBob21lQWNjb3VudElkZW50aWZpZXI7XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL2F1dGhvcml0eS9BdXRob3JpdHlcIjtcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvQ3J5cHRvVXRpbHNcIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgdmFsaWRhdGVDbGFpbXNSZXF1ZXN0IH0gZnJvbSBcIi4vQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXCI7XG5pbXBvcnQgeyBTdHJpbmdEaWN0IH0gZnJvbSBcIi4vTXNhbFR5cGVzXCI7XG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHsgU1NPVHlwZXMsIENvbnN0YW50cywgUHJvbXB0U3RhdGUsIEJsYWNrbGlzdGVkRVFQYXJhbXMsIGxpYnJhcnlWZXJzaW9uIH0gZnJvbSBcIi4vdXRpbHMvQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcblxuLyoqXG4gKiBOb25jZTogT0lEQyBOb25jZSBkZWZpbml0aW9uOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNJRFRva2VuXG4gKiBTdGF0ZTogT0F1dGggU3BlYzogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDkjc2VjdGlvbi0xMC4xMlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMge1xuXG4gICAgYXV0aG9yaXR5SW5zdGFuY2U6IEF1dGhvcml0eTtcbiAgICBjbGllbnRJZDogc3RyaW5nO1xuICAgIHNjb3BlczogQXJyYXk8c3RyaW5nPjtcblxuICAgIG5vbmNlOiBzdHJpbmc7XG4gICAgc3RhdGU6IHN0cmluZztcblxuICAgIC8vIHRlbGVtZXRyeSBpbmZvcm1hdGlvblxuICAgIHhDbGllbnRWZXI6IHN0cmluZztcbiAgICB4Q2xpZW50U2t1OiBzdHJpbmc7XG4gICAgY29ycmVsYXRpb25JZDogc3RyaW5nO1xuXG4gICAgcmVzcG9uc2VUeXBlOiBzdHJpbmc7XG4gICAgcmVkaXJlY3RVcmk6IHN0cmluZztcblxuICAgIHByb21wdFZhbHVlOiBzdHJpbmc7XG4gICAgY2xhaW1zVmFsdWU6IHN0cmluZztcblxuICAgIHF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xuICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA/IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5IDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBhdXRob3JpdHlcbiAgICAgKiBAcGFyYW0gY2xpZW50SWRcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VUeXBlXG4gICAgICogQHBhcmFtIHJlZGlyZWN0VXJpXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IgKGF1dGhvcml0eTogQXV0aG9yaXR5LCBjbGllbnRJZDogc3RyaW5nLCBzY29wZTogQXJyYXk8c3RyaW5nPiwgcmVzcG9uc2VUeXBlOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHN0YXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA9IGF1dGhvcml0eTtcbiAgICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlcyA9IFtjbGllbnRJZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3BlcyA9IFsgLi4uc2NvcGUgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9uY2UgPSBDcnlwdG9VdGlscy5jcmVhdGVOZXdHdWlkKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSAmJiAhU3RyaW5nVXRpbHMuaXNFbXB0eShzdGF0ZSkgPyAgQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpICsgXCJ8XCIgKyBzdGF0ZSAgIDogQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuXG4gICAgICAgIC8vIFRPRE86IENoYW5nZSB0aGlzIHRvIHVzZXIgcGFzc2VkIHZzIGdlbmVyYXRlZCB3aXRoIHRoZSBuZXcgUFJcbiAgICAgICAgdGhpcy5jb3JyZWxhdGlvbklkID0gQ3J5cHRvVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuXG4gICAgICAgIC8vIHRlbGVtZXRyeSBpbmZvcm1hdGlvblxuICAgICAgICB0aGlzLnhDbGllbnRTa3UgPSBcIk1TQUwuSlNcIjtcbiAgICAgICAgdGhpcy54Q2xpZW50VmVyID0gbGlicmFyeVZlcnNpb24oKTtcblxuICAgICAgICB0aGlzLnJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZTtcbiAgICAgICAgdGhpcy5yZWRpcmVjdFVyaSA9IHJlZGlyZWN0VXJpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBAaWdub3JlXG4gICAgICpcbiAgICAgKiBVdGlsaXR5IHRvIHBvcHVsYXRlIFF1ZXJ5UGFyYW1ldGVycyBhbmQgRXh0cmFRdWVyeVBhcmFtZXRlcnMgdG8gU2VydmVyUmVxdWVzdFBhcmFtZXJlcnNcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgICAqIEBwYXJhbSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3RcbiAgICAgKi9cbiAgICBwb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQ6IEFjY291bnQsIHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgYWRhbElkVG9rZW5PYmplY3Q/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW1ldGVyczogU3RyaW5nRGljdCA9IHt9O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyBhZGQgdGhlIHByb21wdCBwYXJhbWV0ZXIgdG8gc2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgaWYgcGFzc2VkXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5wcm9tcHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlUHJvbXB0UGFyYW1ldGVyKHJlcXVlc3QucHJvbXB0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb21wdFZhbHVlID0gcmVxdWVzdC5wcm9tcHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBjbGFpbXMgY2hhbGxlbmdlIHRvIHNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIGlmIHBhc3NlZFxuICAgICAgICAgICAgaWYgKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlQ2xhaW1zUmVxdWVzdChyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYWltc1ZhbHVlID0gcmVxdWVzdC5jbGFpbXNSZXF1ZXN0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUgZGV2ZWxvcGVyIHByb3ZpZGVzIG9uZSBvZiB0aGVzZSwgZ2l2ZSBwcmVmZXJlbmNlIHRvIGRldmVsb3BlciBjaG9pY2VcbiAgICAgICAgICAgIGlmIChTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy5pc1NTT1BhcmFtKHJlcXVlc3QpKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gdGhpcy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZGFsSWRUb2tlbk9iamVjdCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gdGhpcy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihudWxsLCBhZGFsSWRUb2tlbk9iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBhZGRzIHNpZC9sb2dpbl9oaW50IGlmIG5vdCBwb3B1bGF0ZWQ7IHBvcHVsYXRlcyBkb21haW5fcmVxLCBsb2dpbl9yZXEgYW5kIGRvbWFpbl9oaW50XG4gICAgICAgICAqIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJDYWxsaW5nIGFkZEhpbnQgcGFyYW1ldGVyc1wiKTtcbiAgICAgICAgICovXG4gICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudCwgcXVlcnlQYXJhbWV0ZXJzKTtcblxuICAgICAgICAvLyBzYW5pdHkgY2hlY2sgZm9yIGRldmVsb3BlciBwYXNzZWQgZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgICAgbGV0IGVRUGFyYW1zOiBTdHJpbmdEaWN0O1xuICAgICAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICAgICAgZVFQYXJhbXMgPSB0aGlzLnNhbml0aXplRVFQYXJhbXMocmVxdWVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgZXh0cmFRdWVyeVBhcmFtZXRlcnMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbWV0ZXJzID0gU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMuZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcocXVlcnlQYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5leHRyYVF1ZXJ5UGFyYW1ldGVycyA9IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLmdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKGVRUGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyAjcmVnaW9uIFF1ZXJ5UGFyYW0gaGVscGVyc1xuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIFV0aWxpdHkgdG8gdGVzdCBpZiB2YWxpZCBwcm9tcHQgdmFsdWUgaXMgcGFzc2VkIGluIHRoZSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHJlcXVlc3RcbiAgICAgKi9cbiAgICBwcml2YXRlIHZhbGlkYXRlUHJvbXB0UGFyYW1ldGVyIChwcm9tcHQ6IHN0cmluZykge1xuICAgICAgICBpZiAoIShbUHJvbXB0U3RhdGUuTE9HSU4sIFByb21wdFN0YXRlLlNFTEVDVF9BQ0NPVU5ULCBQcm9tcHRTdGF0ZS5DT05TRU5ULCBQcm9tcHRTdGF0ZS5OT05FXS5pbmRleE9mKHByb21wdCkgPj0gMCkpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgZXh0cmFRdWVyeVBhcmFtZXRlcnMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyIGZvciB0aGUgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gICAgICogaW4gYW55IGxvZ2luKCkgb3IgYWNxdWlyZVRva2VuKCkgY2FsbHNcbiAgICAgKiBAcGFyYW0gaWRUb2tlbk9iamVjdFxuICAgICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSBzaWRcbiAgICAgKiBAcGFyYW0gbG9naW5IaW50XG4gICAgICovXG4gICAgLy8gVE9ETzogY2hlY2sgaG93IHRoaXMgYmVoYXZlcyB3aGVuIGRvbWFpbl9oaW50IG9ubHkgaXMgc2VudCBpbiBleHRyYXBhcmFtZXRlcnMgYW5kIGlkVG9rZW4gaGFzIG5vIHVwbi5cbiAgICBwcml2YXRlIGNvbnN0cnVjdFVuaWZpZWRDYWNoZVF1ZXJ5UGFyYW1ldGVyKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgaWRUb2tlbk9iamVjdDogYW55KTogU3RyaW5nRGljdCB7XG5cbiAgICAgICAgLy8gcHJlZmVyZW5jZSBvcmRlcjogYWNjb3VudCA+IHNpZCA+IGxvZ2luX2hpbnRcbiAgICAgICAgbGV0IHNzb1R5cGU7XG4gICAgICAgIGxldCBzc29EYXRhO1xuICAgICAgICBsZXQgc2VydmVyUmVxUGFyYW06IFN0cmluZ0RpY3QgPSB7fTtcbiAgICAgICAgLy8gaWYgYWNjb3VudCBpbmZvIGlzIHBhc3NlZCwgYWNjb3VudC5zaWQgPiBhY2NvdW50LmxvZ2luX2hpbnRcbiAgICAgICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmFjY291bnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50O1xuICAgICAgICAgICAgICAgIGlmIChhY2NvdW50LnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuU0lEO1xuICAgICAgICAgICAgICAgICAgICBzc29EYXRhID0gYWNjb3VudC5zaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFjY291bnQudXNlck5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLkxPR0lOX0hJTlQ7XG4gICAgICAgICAgICAgICAgICAgIHNzb0RhdGEgPSBhY2NvdW50LnVzZXJOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNpZCBmcm9tIHJlcXVlc3RcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlcXVlc3Quc2lkKSB7XG4gICAgICAgICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLlNJRDtcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5zaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsb2dpbkhpbnQgZnJvbSByZXF1ZXN0XG4gICAgICAgICAgICBlbHNlIGlmIChyZXF1ZXN0LmxvZ2luSGludCkge1xuICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5MT0dJTl9ISU5UO1xuICAgICAgICAgICAgICAgIHNzb0RhdGEgPSByZXF1ZXN0LmxvZ2luSGludDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhZGFsSWRUb2tlbiByZXRyaWV2ZWQgZnJvbSBjYWNoZVxuICAgICAgICBlbHNlIGlmIChpZFRva2VuT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaWRUb2tlbk9iamVjdC5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMudXBuKSkge1xuICAgICAgICAgICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5JRF9UT0tFTjtcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gaWRUb2tlbk9iamVjdC51cG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcbiAgICAgICAgICAgICAgICBzc29EYXRhID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoc3NvVHlwZSwgc3NvRGF0YSk7XG5cbiAgICAgICAgLy8gYWRkIHRoZSBIb21lQWNjb3VudElkZW50aWZpZXIgaW5mby8gZG9tYWluX2hpbnRcbiAgICAgICAgaWYgKHJlcXVlc3QgJiYgcmVxdWVzdC5hY2NvdW50ICYmIHJlcXVlc3QuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuSE9NRUFDQ09VTlRfSUQsIHJlcXVlc3QuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIsIHNlcnZlclJlcVBhcmFtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXJ2ZXJSZXFQYXJhbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICpcbiAgICAgKiBBZGRzIGxvZ2luX2hpbnQgdG8gYXV0aG9yaXphdGlvbiBVUkwgd2hpY2ggaXMgdXNlZCB0byBwcmUtZmlsbCB0aGUgdXNlcm5hbWUgZmllbGQgb2Ygc2lnbiBpbiBwYWdlIGZvciB0aGUgdXNlciBpZiBrbm93biBhaGVhZCBvZiB0aW1lXG4gICAgICogZG9tYWluX2hpbnQgY2FuIGJlIG9uZSBvZiB1c2Vycy9vcmdhbml6YXRpb25zIHdoaWNoIHdoZW4gYWRkZWQgc2tpcHMgdGhlIGVtYWlsIGJhc2VkIGRpc2NvdmVyeSBwcm9jZXNzIG9mIHRoZSB1c2VyXG4gICAgICogZG9tYWluX3JlcSB1dGlkIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIGNsaWVudEluZm9cbiAgICAgKiBsb2dpbl9yZXEgdWlkIHJlY2VpdmVkIGFzIHBhcnQgb2YgY2xpZW50SW5mb1xuICAgICAqIEFsc28gZG9lcyBhIHNhbml0eSBjaGVjayBmb3IgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkIGJ5IHRoZSB1c2VyIHRvIGVuc3VyZSBubyByZXBlYXQgcXVlcnlQYXJhbWV0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0BsaW5rIEFjY291bnR9IGFjY291bnQgLSBBY2NvdW50IGZvciB3aGljaCB0aGUgdG9rZW4gaXMgcmVxdWVzdGVkXG4gICAgICogQHBhcmFtIHF1ZXJ5cGFyYW1zXG4gICAgICogQHBhcmFtIHtAbGluayBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc31cbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRIaW50UGFyYW1ldGVycyhhY2NvdW50OiBBY2NvdW50LCBxUGFyYW1zOiBTdHJpbmdEaWN0KTogU3RyaW5nRGljdCB7XG4gICAgLypcbiAgICAgKiBUaGlzIGlzIGEgZmluYWwgY2hlY2sgZm9yIGFsbCBxdWVyeVBhcmFtcyBhZGRlZCBzbyBmYXI7IHByZWZlcmVuY2Ugb3JkZXI6IHNpZCA+IGxvZ2luX2hpbnRcbiAgICAgKiBzaWQgY2Fubm90IGJlIHBhc3NlZCBhbG9uZyB3aXRoIGxvZ2luX2hpbnQgb3IgZG9tYWluX2hpbnQsIGhlbmNlIHdlIGNoZWNrIGJvdGggYXJlIG5vdCBwb3B1bGF0ZWQgeWV0IGluIHF1ZXJ5UGFyYW1ldGVyc1xuICAgICAqL1xuICAgICAgICBpZiAoYWNjb3VudCAmJiAhcVBhcmFtc1tTU09UeXBlcy5TSURdKSB7XG4gICAgICAgICAgICAvLyBzaWQgLSBwb3B1bGF0ZSBvbmx5IGlmIGxvZ2luX2hpbnQgaXMgbm90IGFscmVhZHkgcG9wdWxhdGVkIGFuZCB0aGUgYWNjb3VudCBoYXMgc2lkXG4gICAgICAgICAgICBjb25zdCBwb3B1bGF0ZVNJRCA9ICFxUGFyYW1zW1NTT1R5cGVzLkxPR0lOX0hJTlRdICYmIGFjY291bnQuc2lkICYmIHRoaXMucHJvbXB0VmFsdWUgPT09IFByb21wdFN0YXRlLk5PTkU7XG4gICAgICAgICAgICBpZiAocG9wdWxhdGVTSUQpIHtcbiAgICAgICAgICAgICAgICBxUGFyYW1zID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuU0lELCBhY2NvdW50LnNpZCwgcVBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBsb2dpbl9oaW50IC0gYWNjb3VudC51c2VyTmFtZVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wdWxhdGVMb2dpbkhpbnQgPSAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSAmJiBhY2NvdW50LnVzZXJOYW1lICYmICFTdHJpbmdVdGlscy5pc0VtcHR5KGFjY291bnQudXNlck5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChwb3B1bGF0ZUxvZ2luSGludCkge1xuICAgICAgICAgICAgICAgICAgICBxUGFyYW1zID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuTE9HSU5fSElOVCwgYWNjb3VudC51c2VyTmFtZSwgcVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwb3B1bGF0ZVJlcVBhcmFtcyA9ICFxUGFyYW1zW1NTT1R5cGVzLkRPTUFJTl9SRVFdICYmICFxUGFyYW1zW1NTT1R5cGVzLkxPR0lOX1JFUV07XG4gICAgICAgICAgICBpZiAocG9wdWxhdGVSZXFQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBxUGFyYW1zID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuSE9NRUFDQ09VTlRfSUQsIGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyLCBxUGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBxUGFyYW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBTSUQgdG8gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gc2lkXG4gICAgICovXG4gICAgcHJpdmF0ZSBhZGRTU09QYXJhbWV0ZXIoc3NvVHlwZTogc3RyaW5nLCBzc29EYXRhOiBzdHJpbmcsIHNzb1BhcmFtPzogU3RyaW5nRGljdCk6IFN0cmluZ0RpY3Qge1xuICAgICAgICBpZiAoIXNzb1BhcmFtKSB7XG4gICAgICAgICAgICBzc29QYXJhbSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzc29EYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gc3NvUGFyYW07XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHNzb1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuU0lEOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuU0lEXSA9IHNzb0RhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLklEX1RPS0VOOiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX0hJTlQ6IHtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5MT0dJTl9ISU5UXSA9IHNzb0RhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLk9SR0FOSVpBVElPTlM6IHtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBTU09UeXBlcy5DT05TVU1FUlM6IHtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lEOiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG9tZUFjY291bnRJZCA9IHNzb0RhdGEuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVpZCA9IENyeXB0b1V0aWxzLmJhc2U2NERlY29kZShob21lQWNjb3VudElkWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1dGlkID0gQ3J5cHRvVXRpbHMuYmFzZTY0RGVjb2RlKGhvbWVBY2NvdW50SWRbMV0pO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZG9tYWluX3JlcSBhbmQgbG9naW5fcmVxIGFyZSBub3QgbmVlZGVkIGFjY29yZGluZyB0byBlU1RTIHRlYW1cbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5MT0dJTl9SRVFdID0gdWlkO1xuICAgICAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9SRVFdID0gdXRpZDtcblxuICAgICAgICAgICAgICAgIGlmICh1dGlkID09PSBDb25zdGFudHMuY29uc3VtZXJzVXRpZCkge1xuICAgICAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgU1NPVHlwZXMuTE9HSU5fUkVROiB7XG4gICAgICAgICAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fUkVRXSA9IHNzb0RhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFNTT1R5cGVzLkRPTUFJTl9SRVE6IHtcbiAgICAgICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHNzb0RhdGE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3NvUGFyYW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBSZW1vdmVzIHVubmVjZXNzYXJ5IG9yIGR1cGxpY2F0ZSBxdWVyeSBwYXJhbWV0ZXJzIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgICAqL1xuICAgIHByaXZhdGUgc2FuaXRpemVFUVBhcmFtcyhyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIDogU3RyaW5nRGljdCB7XG4gICAgICAgIGNvbnN0IGVRUGFyYW1zIDogU3RyaW5nRGljdCA9IHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnM7XG4gICAgICAgIGlmICghZVFQYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0LmNsYWltc1JlcXVlc3QpIHtcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJSZW1vdmVkIGR1cGxpY2F0ZSBjbGFpbXMgZnJvbSBleHRyYVF1ZXJ5UGFyYW1ldGVycy4gUGxlYXNlIHVzZSBlaXRoZXIgdGhlIGNsYWltc1JlcXVlc3QgZmllbGQgT1IgcGFzcyBhcyBleHRyYVF1ZXJ5UGFyYW1ldGVyIC0gbm90IGJvdGguXCIpO1xuICAgICAgICAgICAgZGVsZXRlIGVRUGFyYW1zW0NvbnN0YW50cy5jbGFpbXNdO1xuICAgICAgICB9XG4gICAgICAgIEJsYWNrbGlzdGVkRVFQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAoZVFQYXJhbXNbcGFyYW1dKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIud2FybmluZyhcIlJlbW92ZWQgZHVwbGljYXRlIFwiICsgcGFyYW0gKyBcIiBmcm9tIGV4dHJhUXVlcnlQYXJhbWV0ZXJzLiBQbGVhc2UgdXNlIHRoZSBcIiArIHBhcmFtICsgXCIgZmllbGQgaW4gcmVxdWVzdCBvYmplY3QuXCIpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBlUVBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZVFQYXJhbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSB0byBnZW5lcmF0ZSBhIFF1ZXJ5UGFyYW1ldGVyU3RyaW5nIGZyb20gYSBLZXktVmFsdWUgbWFwcGluZyBvZiBleHRyYVF1ZXJ5UGFyYW1ldGVycyBwYXNzZWRcbiAgICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcocXVlcnlQYXJhbWV0ZXJzOiBTdHJpbmdEaWN0KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHBhcmFtc1N0cmluZzogc3RyaW5nID0gbnVsbDtcblxuICAgICAgICBpZiAocXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtZXRlcnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1N0cmluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1N0cmluZyA9IGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlQYXJhbWV0ZXJzW2tleV0pfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbXNTdHJpbmcgKz0gYCYke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlQYXJhbWV0ZXJzW2tleV0pfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyYW1zU3RyaW5nO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgU1NPIHBhcmFtcyBzZXQgaW4gdGhlIFJlcXVlc3RcbiAgICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgICAqL1xuICAgIHN0YXRpYyBpc1NTT1BhcmFtKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykge1xuICAgICAgICByZXR1cm4gcmVxdWVzdCAmJiAocmVxdWVzdC5hY2NvdW50IHx8IHJlcXVlc3Quc2lkIHx8IHJlcXVlc3QubG9naW5IaW50KTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ3J5cHRvVXRpbHMgfSBmcm9tIFwiLi91dGlscy9DcnlwdG9VdGlsc1wiO1xuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5pbXBvcnQgeyBTdHJpbmdVdGlscyB9IGZyb20gXCIuL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50SW5mbyB7XG5cbiAgICBwcml2YXRlIF91aWQ6IHN0cmluZztcbiAgICBnZXQgdWlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91aWQgPyB0aGlzLl91aWQgOiBcIlwiO1xuICAgIH1cblxuICAgIHNldCB1aWQodWlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdWlkID0gdWlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3V0aWQ6IHN0cmluZztcbiAgICBnZXQgdXRpZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXRpZCA/IHRoaXMuX3V0aWQgOiBcIlwiO1xuICAgIH1cblxuICAgIHNldCB1dGlkKHV0aWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLl91dGlkID0gdXRpZDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihyYXdDbGllbnRJbmZvOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFyYXdDbGllbnRJbmZvIHx8IFN0cmluZ1V0aWxzLmlzRW1wdHkocmF3Q2xpZW50SW5mbykpIHtcbiAgICAgICAgICAgIHRoaXMudWlkID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMudXRpZCA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlZENsaWVudEluZm86IHN0cmluZyA9IENyeXB0b1V0aWxzLmJhc2U2NERlY29kZShyYXdDbGllbnRJbmZvKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudEluZm86IENsaWVudEluZm8gPSA8Q2xpZW50SW5mbz5KU09OLnBhcnNlKGRlY29kZWRDbGllbnRJbmZvKTtcbiAgICAgICAgICAgIGlmIChjbGllbnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWVudEluZm8uaGFzT3duUHJvcGVydHkoXCJ1aWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51aWQgPSBjbGllbnRJbmZvLnVpZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xpZW50SW5mby5oYXNPd25Qcm9wZXJ0eShcInV0aWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51dGlkID0gY2xpZW50SW5mby51dGlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUNsaWVudEluZm9EZWNvZGluZ0Vycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xuaW1wb3J0IHsgVG9rZW5VdGlscyB9IGZyb20gXCIuL3V0aWxzL1Rva2VuVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ0RpY3QgfSBmcm9tIFwiLi9Nc2FsVHlwZXNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4vdXRpbHMvU3RyaW5nVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJZFRva2VuIHtcblxuICAgIGlzc3Vlcjogc3RyaW5nO1xuICAgIG9iamVjdElkOiBzdHJpbmc7XG4gICAgc3ViamVjdDogc3RyaW5nO1xuICAgIHRlbmFudElkOiBzdHJpbmc7XG4gICAgdmVyc2lvbjogc3RyaW5nO1xuICAgIHByZWZlcnJlZE5hbWU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaG9tZU9iamVjdElkOiBzdHJpbmc7XG4gICAgbm9uY2U6IHN0cmluZztcbiAgICBleHBpcmF0aW9uOiBzdHJpbmc7XG4gICAgcmF3SWRUb2tlbjogc3RyaW5nO1xuICAgIGNsYWltczogU3RyaW5nRGljdDtcbiAgICBzaWQ6IHN0cmluZztcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgIGNvbnN0cnVjdG9yKHJhd0lkVG9rZW46IHN0cmluZykge1xuICAgICAgICBpZiAoU3RyaW5nVXRpbHMuaXNFbXB0eShyYXdJZFRva2VuKSkge1xuICAgICAgICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKHJhd0lkVG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnJhd0lkVG9rZW4gPSByYXdJZFRva2VuO1xuICAgICAgICAgICAgdGhpcy5jbGFpbXMgPSBUb2tlblV0aWxzLmV4dHJhY3RJZFRva2VuKHJhd0lkVG9rZW4pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwiaXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNzdWVyID0gdGhpcy5jbGFpbXNbXCJpc3NcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwib2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0SWQgPSB0aGlzLmNsYWltc1tcIm9pZFwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJzdWJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJqZWN0ID0gdGhpcy5jbGFpbXNbXCJzdWJcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwidGlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVuYW50SWQgPSB0aGlzLmNsYWltc1tcInRpZFwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJ2ZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdGhpcy5jbGFpbXNbXCJ2ZXJcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwicHJlZmVycmVkX3VzZXJuYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZmVycmVkTmFtZSA9IHRoaXMuY2xhaW1zW1wicHJlZmVycmVkX3VzZXJuYW1lXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jbGFpbXNbXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcIm5vbmNlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9uY2UgPSB0aGlzLmNsYWltc1tcIm5vbmNlXCJdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsYWltcy5oYXNPd25Qcm9wZXJ0eShcImV4cFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGlyYXRpb24gPSB0aGlzLmNsYWltc1tcImV4cFwiXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbGFpbXMuaGFzT3duUHJvcGVydHkoXCJob21lX29pZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbWVPYmplY3RJZCA9IHRoaXMuY2xhaW1zW1wiaG9tZV9vaWRcIl07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xhaW1zLmhhc093blByb3BlcnR5KFwic2lkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lkID0gdGhpcy5jbGFpbXNbXCJzaWRcIl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIFRPRE86IFRoaXMgZXJyb3IgaGVyZSB3b24ndCByZWFsbHkgZXZlcnkgYmUgdGhyb3duLCBzaW5jZSBleHRyYWN0SWRUb2tlbigpIHJldHVybnMgbnVsbCBpZiB0aGUgZGVjb2RlSnd0KCkgZmFpbHMuXG4gICAgICAgICAgICAgKiBOZWVkIHRvIGFkZCBiZXR0ZXIgZXJyb3IgaGFuZGxpbmcgaGVyZSB0byBhY2NvdW50IGZvciBiZWluZyB1bmFibGUgdG8gZGVjb2RlIGp3dHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29uc3RhbnRzLCBDYWNoZUtleXMgfSBmcm9tIFwiLi91dGlscy9Db25zdGFudHNcIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcbmltcG9ydCB7IENhY2hlTG9jYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHsvLyBTaW5nbGV0b25cblxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdG9yYWdlO1xuICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlU3VwcG9ydGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoY2FjaGVMb2NhdGlvbjogQ2FjaGVMb2NhdGlvbikge1xuICAgICAgICBpZiAoU3RvcmFnZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlTG9jYXRpb24gPSBjYWNoZUxvY2F0aW9uO1xuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZVN1cHBvcnRlZCA9IHR5cGVvZiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSAhPSBudWxsO1xuICAgICAgICB0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkID0gdHlwZW9mIHdpbmRvd1tjYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcbiAgICAgICAgU3RvcmFnZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgJiYgIXRoaXMuc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1N0b3JhZ2VTdXBwb3J0ZWRFcnJvcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gYWRkIHZhbHVlIHRvIHN0b3JhZ2VcbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBlbmFibGVDb29raWVTdG9yYWdlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgICAgICAgIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuYWJsZUNvb2tpZVN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBvbmUgaXRlbSBieSBrZXkgZnJvbSBzdG9yYWdlXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSAmJiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUNvb2tpZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgdmFsdWUgZnJvbSBzdG9yYWdlXG4gICAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBzdG9yYWdlIChyZW1vdmUgYWxsIGl0ZW1zIGZyb20gaXQpXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBbGxBY2Nlc3NUb2tlbnMoY2xpZW50SWQ6IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcpOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4gPSBbXTtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtOiBBY2Nlc3NUb2tlbkNhY2hlSXRlbTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xuICAgICAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5tYXRjaChjbGllbnRJZCkgJiYga2V5Lm1hdGNoKGhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IG5ldyBBY2Nlc3NUb2tlbkNhY2hlSXRlbShKU09OLnBhcnNlKGtleSksIEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goYWNjZXNzVG9rZW5DYWNoZUl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhzdGF0ZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XG4gICAgICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGtleS5pbmRleE9mKENhY2hlS2V5cy5BVVRIT1JJVFkpICE9PSAtMSB8fCBrZXkuaW5kZXhPZihDYWNoZUtleXMuQUNRVUlSRV9UT0tFTl9BQ0NPVU5UKSAhPT0gMSkgJiYgKCFzdGF0ZSB8fCBrZXkuaW5kZXhPZihzdGF0ZSkgIT09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRLZXkgPSBrZXkuc3BsaXQoQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdEtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzcGxpdEtleVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiAhdGhpcy50b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBzdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoa2V5LCBcIlwiLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyQ29va2llKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2tlblJlbmV3YWxJblByb2dyZXNzKHN0YXRlVmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XG4gICAgICAgIGNvbnN0IHJlbmV3U3RhdHVzID0gc3RvcmFnZVtDb25zdGFudHMucmVuZXdTdGF0dXMgKyBzdGF0ZVZhbHVlXTtcbiAgICAgICAgcmV0dXJuICEoIXJlbmV3U3RhdHVzIHx8IHJlbmV3U3RhdHVzICE9PSBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIHJlc2V0Q2FjaGVJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xuICAgICAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKENvbnN0YW50cy5tc2FsKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcsIGNWYWx1ZTogc3RyaW5nLCBleHBpcmVzPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBjb29raWVTdHIgPSBjTmFtZSArIFwiPVwiICsgY1ZhbHVlICsgXCI7XCI7XG4gICAgICAgIGlmIChleHBpcmVzKSB7XG4gICAgICAgICAgICBjb25zdCBleHBpcmVUaW1lID0gdGhpcy5nZXRDb29raWVFeHBpcmF0aW9uVGltZShleHBpcmVzKTtcbiAgICAgICAgICAgIGNvb2tpZVN0ciArPSBcImV4cGlyZXM9XCIgKyBleHBpcmVUaW1lICsgXCI7XCI7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWVTdHI7XG4gICAgfVxuXG4gICAgZ2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNOYW1lICsgXCI9XCI7XG4gICAgICAgIGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgZ2V0Q29va2llRXhwaXJhdGlvblRpbWUoY29va2llTGlmZURheXM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZXhwciA9IG5ldyBEYXRlKHRvZGF5LmdldFRpbWUoKSArIGNvb2tpZUxpZmVEYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHJldHVybiBleHByLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY2xlYXJDb29raWUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMubm9uY2VJZFRva2VuLCBcIlwiLCAtMSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMuc3RhdGVMb2dpbiwgXCJcIiwgLTEpO1xuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLmxvZ2luUmVxdWVzdCwgXCJcIiwgLTEpO1xuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCBcIlwiLCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgdG8gY2FjaGUgYWNjb3VudCBvYmplY3RcbiAgICAgKiBAcGFyYW0gYWNjb3VudElkXG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgc3RhdGljIGdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQ6IGFueSwgc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBDYWNoZUtleXMuQUNRVUlSRV9UT0tFTl9BQ0NPVU5UICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICtcbiAgICAgICAgICAgIGAke2FjY291bnRJZH1gICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICArIGAke3N0YXRlfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGF1dGhvcml0eUtleSB0byBjYWNoZSBhdXRob3JpdHlcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBDYWNoZUtleXMuQVVUSE9SSVRZICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICsgYCR7c3RhdGV9YDtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQWNjZXNzVG9rZW5LZXkgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlbktleVwiO1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5WYWx1ZSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuVmFsdWVcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB7XG5cbiAgICBrZXk6IEFjY2Vzc1Rva2VuS2V5O1xuICAgIHZhbHVlOiBBY2Nlc3NUb2tlblZhbHVlO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5OiBBY2Nlc3NUb2tlbktleSwgdmFsdWU6IEFjY2Vzc1Rva2VuVmFsdWUpIHtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG4iLCIvKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lVXRpbHMge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGltZSBpbiBzZWNvbmRzIGZvciBleHBpcmF0aW9uIGJhc2VkIG9uIHN0cmluZyB2YWx1ZSBwYXNzZWQgaW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwaXJlc0luXG4gICAgICovXG4gICAgc3RhdGljIHBhcnNlRXhwaXJlc0luKGV4cGlyZXNJbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgLy8gaWYgQUFEIGRpZCBub3Qgc2VuZCBcImV4cGlyZXNfaW5cIiBwcm9wZXJ0eSwgdXNlIGRlZmF1bHQgZXhwaXJhdGlvbiBvZiAzNTk5IHNlY29uZHMsIGZvciBzb21lIHJlYXNvbiBBQUQgc2VuZHMgMzU5OSBhcyBcImV4cGlyZXNfaW5cIiB2YWx1ZSBpbnN0ZWFkIG9mIDM2MDBcbiAgICAgICAgaWYgKCFleHBpcmVzSW4pIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbiA9IFwiMzU5OVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZUludChleHBpcmVzSW4sIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSBpbiBVbml4IHRpbWUuIERhdGUuZ2V0VGltZSgpIHJldHVybnMgaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqL1xuICAgIHN0YXRpYyBub3coKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEF1dGhSZXNwb25zZSB9IGZyb20gXCIuLi9BdXRoUmVzcG9uc2VcIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vSWRUb2tlblwiO1xuXG4vKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVV0aWxzIHtcblxuICAgIHN0YXRpYyBzZXRSZXNwb25zZUlkVG9rZW4ob3JpZ2luYWxSZXNwb25zZTogQXV0aFJlc3BvbnNlLCBpZFRva2VuT2JqOiBJZFRva2VuKSA6IEF1dGhSZXNwb25zZSB7XG4gICAgICAgIGlmICghb3JpZ2luYWxSZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlkVG9rZW5PYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFJlc3BvbnNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhwID0gTnVtYmVyKGlkVG9rZW5PYmouZXhwaXJhdGlvbik7XG4gICAgICAgIGlmIChleHAgJiYgIW9yaWdpbmFsUmVzcG9uc2UuZXhwaXJlc09uKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFJlc3BvbnNlLmV4cGlyZXNPbiA9IG5ldyBEYXRlKGV4cCAqIDEwMDApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5vcmlnaW5hbFJlc3BvbnNlLFxuICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbk9iaixcbiAgICAgICAgICAgIGlkVG9rZW5DbGFpbXM6IGlkVG9rZW5PYmouY2xhaW1zLFxuICAgICAgICAgICAgdW5pcXVlSWQ6IGlkVG9rZW5PYmoub2JqZWN0SWQgfHwgaWRUb2tlbk9iai5zdWJqZWN0LFxuICAgICAgICAgICAgdGVuYW50SWQ6IGlkVG9rZW5PYmoudGVuYW50SWQsXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiLypcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5pbXBvcnQgeyBBYWRBdXRob3JpdHkgfSBmcm9tIFwiLi9BYWRBdXRob3JpdHlcIjtcbmltcG9ydCB7IEIyY0F1dGhvcml0eSB9IGZyb20gXCIuL0IyY0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgVXJsVXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvVXJsVXRpbHNcIjtcbmltcG9ydCB7IFN0cmluZ1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL1N0cmluZ1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHlGYWN0b3J5IHtcbiAgICAvKipcbiAgICAgKiBQYXJzZSB0aGUgdXJsIGFuZCBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgYXV0aG9yaXR5XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmw6IHN0cmluZyk6IEF1dGhvcml0eVR5cGUge1xuICAgICAgICBhdXRob3JpdHlVcmwgPSBVcmxVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFVybFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gY29tcG9uZW50cy5QYXRoU2VnbWVudHM7XG4gICAgICAgIHN3aXRjaCAocGF0aFNlZ21lbnRzWzBdKSB7XG4gICAgICAgICAgICBjYXNlIFwidGZwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQjJDO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BYWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gYXV0aG9yaXR5IG9iamVjdCBvZiB0aGUgY29ycmVjdCB0eXBlIGJhc2VkIG9uIHRoZSB1cmxcbiAgICAgKiBQZXJmb3JtcyBiYXNpYyBhdXRob3JpdHkgdmFsaWRhdGlvbiAtIGNoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBvZiBhIHZhbGlkIHR5cGUgKGVnIGFhZCwgYjJjKVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5VXJsOiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKTogQXV0aG9yaXR5IHtcbiAgICAgICAgaWYgKFN0cmluZ1V0aWxzLmlzRW1wdHkoYXV0aG9yaXR5VXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHlwZSA9IEF1dGhvcml0eUZhY3RvcnkuRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmwpO1xuICAgICAgICAvLyBEZXBlbmRpbmcgb24gYWJvdmUgZGV0ZWN0aW9uLCBjcmVhdGUgdGhlIHJpZ2h0IHR5cGUuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBdXRob3JpdHlUeXBlLkIyQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEIyY0F1dGhvcml0eShhdXRob3JpdHlVcmwsIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5BYWQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBYWRBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCBUZWxlbWV0cnlFdmVudCBmcm9tIFwiLi9UZWxlbWV0cnlFdmVudFwiO1xuaW1wb3J0IHtcbiAgICBDb21wbGV0ZWRFdmVudHMsXG4gICAgRXZlbnRDb3VudCxcbiAgICBFdmVudENvdW50QnlDb3JyZWxhdGlvbklkLFxuICAgIEluUHJvZ3Jlc3NFdmVudHMsXG4gICAgVGVsZW1ldHJ5Q29uZmlnLFxuICAgIFRlbGVtZXRyeVBsYXRmb3JtLFxuICAgIFRlbGVtZXRyeUVtaXR0ZXJcbn0gZnJvbSBcIi4vVGVsZW1ldHJ5VHlwZXNcIjtcbmltcG9ydCBEZWZhdWx0RXZlbnQgZnJvbSBcIi4vRGVmYXVsdEV2ZW50XCI7XG5cbi8vIGZvciB1c2UgaW4gY2FjaGUgZXZlbnRzXG5jb25zdCBNU0FMX0NBQ0hFX0VWRU5UX1ZBTFVFX1BSRUZJWCA9IFwibXNhbC50b2tlblwiO1xuY29uc3QgTVNBTF9DQUNIRV9FVkVOVF9OQU1FID0gXCJtc2FsLmNhY2hlX2V2ZW50XCI7XG5cbmNvbnN0IGNyZWF0ZUV2ZW50S2V5ID0gKGV2ZW50OiBUZWxlbWV0cnlFdmVudCk6IHN0cmluZyA9PiAoXG4gICAgYCR7ZXZlbnQudGVsZW1ldHJ5Q29ycmVsYXRpb25JZH0tJHtldmVudC5ldmVudElkfS0ke2V2ZW50LmV2ZW50TmFtZX1gXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnlNYW5hZ2VyIHtcblxuICAgIC8vIGNvcnJlbGF0aW9uIElkIHRvIGxpc3Qgb2YgZXZlbnRzXG4gICAgcHJpdmF0ZSBjb21wbGV0ZWRFdmVudHM6IENvbXBsZXRlZEV2ZW50cyA9IHt9O1xuICAgIC8vIGV2ZW50IGtleSB0byBldmVudFxuICAgIHByaXZhdGUgaW5Qcm9ncmVzc0V2ZW50czogSW5Qcm9ncmVzc0V2ZW50cyA9IHt9O1xuICAgIC8vIGNvcnJlbGF0aW9uIGlkIHRvIG1hcCBvZiBldmVudG5hbWUgdG8gY291bnRcbiAgICBwcml2YXRlIGV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWQ6IEV2ZW50Q291bnRCeUNvcnJlbGF0aW9uSWQgPSB7fTtcblxuICAgIC8vIEltcGxlbWVudCBhZnRlciBBUEkgRVZFTlRcbiAgICBwcml2YXRlIG9ubHlTZW5kRmFpbHVyZVRlbGVtZXRyeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgdGVsZW1ldHJ5UGxhdGZvcm06IFRlbGVtZXRyeVBsYXRmb3JtO1xuICAgIHByaXZhdGUgY2xpZW50SWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHRlbGVtZXRyeUVtaXR0ZXI6IFRlbGVtZXRyeUVtaXR0ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFRlbGVtZXRyeUNvbmZpZywgdGVsZW1ldHJ5RW1pdHRlcjogVGVsZW1ldHJ5RW1pdHRlcikge1xuICAgICAgICAvLyBUT0RPIFRIUk9XIGlmIGJhZCBvcHRpb25zXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5UGxhdGZvcm0gPSBjb25maWcucGxhdGZvcm07XG4gICAgICAgIHRoaXMuY2xpZW50SWQgPSBjb25maWcuY2xpZW50SWQ7XG4gICAgICAgIHRoaXMub25seVNlbmRGYWlsdXJlVGVsZW1ldHJ5ID0gY29uZmlnLm9ubHlTZW5kRmFpbHVyZVRlbGVtZXRyeTtcbiAgICAgICAgLypcbiAgICAgICAgICogVE9ETywgd2hlbiBpIGdldCB0byB3aXJpbmcgdGhpcyB0aHJvdWdoLCB0aGluayBhYm91dCB3aGF0IGl0IG1lYW5zIGlmXG4gICAgICAgICAqIGEgZGV2ZWxvcGVyIGRvZXMgbm90IGltcGxlbWVudCB0ZWxlbSBhdCBhbGwsIHdlIHN0aWxsIGluc3RydW1lbnQsIGJ1dCB0ZWxlbWV0cnlFbWl0dGVyIGNhbiBiZVxuICAgICAgICAgKiBvcHRpb25hbD9cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5RW1pdHRlciA9IHRlbGVtZXRyeUVtaXR0ZXI7XG4gICAgfVxuXG4gICAgc3RhcnRFdmVudChldmVudDogVGVsZW1ldHJ5RXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRlbGVtZXRyeUVtaXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudEtleSA9IGNyZWF0ZUV2ZW50S2V5KGV2ZW50KTtcbiAgICAgICAgdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XSA9IGV2ZW50O1xuICAgIH1cblxuICAgIHN0b3BFdmVudChldmVudDogVGVsZW1ldHJ5RXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBjcmVhdGVFdmVudEtleShldmVudCk7XG4gICAgICAgIGlmICghdGhpcy50ZWxlbWV0cnlFbWl0dGVyIHx8ICF0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuc3RvcCgpO1xuICAgICAgICB0aGlzLmluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQpO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEV2ZW50cyA9IHRoaXMuY29tcGxldGVkRXZlbnRzW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdO1xuXG4gICAgICAgIHRoaXMuY29tcGxldGVkRXZlbnRzW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdID0gWy4uLihjb21wbGV0ZWRFdmVudHMgfHwgW10pLCBldmVudF07XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuaW5Qcm9ncmVzc0V2ZW50c1tldmVudEtleV07XG4gICAgfVxuXG4gICAgZmx1c2goY29ycmVsYXRpb25JZDogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgb25seSB1bmZpbmlzaGVkIGV2ZW50cyBzaG91bGQgdGhpcyBzdGlsbCByZXR1cm4gdGhlbT9cbiAgICAgICAgaWYgKCF0aGlzLnRlbGVtZXRyeUVtaXR0ZXIgfHwgIXRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcnBoYW5lZEV2ZW50cyA9IHRoaXMuZ2V0T3JwaGFuZWRFdmVudHMoY29ycmVsYXRpb25JZCk7XG4gICAgICAgIG9ycGhhbmVkRXZlbnRzLmZvckVhY2goZXZlbnQgPT4gdGhpcy5pbmNyZW1lbnRFdmVudENvdW50KGV2ZW50KSk7XG4gICAgICAgIGNvbnN0IGV2ZW50c1RvRmx1c2g6IEFycmF5PFRlbGVtZXRyeUV2ZW50PiA9IFtcbiAgICAgICAgICAgIC4uLnRoaXMuY29tcGxldGVkRXZlbnRzW2NvcnJlbGF0aW9uSWRdLFxuICAgICAgICAgICAgLi4ub3JwaGFuZWRFdmVudHNcbiAgICAgICAgXTtcblxuICAgICAgICBkZWxldGUgdGhpcy5jb21wbGV0ZWRFdmVudHNbY29ycmVsYXRpb25JZF07XG4gICAgICAgIGNvbnN0IGV2ZW50Q291bnRzVG9GbHVzaDogRXZlbnRDb3VudCA9IHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtjb3JyZWxhdGlvbklkXTtcblxuICAgICAgICBkZWxldGUgdGhpcy5ldmVudENvdW50QnlDb3JyZWxhdGlvbklkW2NvcnJlbGF0aW9uSWRdO1xuICAgICAgICAvLyBUT0RPIGFkZCBmdW5jaXRvbmFsaXR5IGZvciBvbmx5Rmx1c2hGYWlsdXJlcyBhZnRlciBpbXBsZW1lbnRpbmcgYXBpIGV2ZW50PyA/P1xuXG4gICAgICAgIGlmICghZXZlbnRzVG9GbHVzaCB8fCAhZXZlbnRzVG9GbHVzaC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRFdmVudDogRGVmYXVsdEV2ZW50ID0gbmV3IERlZmF1bHRFdmVudChcbiAgICAgICAgICAgIHRoaXMudGVsZW1ldHJ5UGxhdGZvcm0sXG4gICAgICAgICAgICBjb3JyZWxhdGlvbklkLFxuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICAgIGV2ZW50Q291bnRzVG9GbHVzaFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50c1dpdGhEZWZhdWx0RXZlbnQgPSBbIC4uLmV2ZW50c1RvRmx1c2gsIGRlZmF1bHRFdmVudCBdO1xuXG4gICAgICAgIHRoaXMudGVsZW1ldHJ5RW1pdHRlcihldmVudHNXaXRoRGVmYXVsdEV2ZW50Lm1hcChlID0+IGUuZ2V0KCkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluY3JlbWVudEV2ZW50Q291bnQoZXZlbnQ6IFRlbGVtZXRyeUV2ZW50KTogdm9pZCB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRPRE8sIG5hbWUgY2FjaGUgZXZlbnQgZGlmZmVyZW50P1xuICAgICAgICAgKiBpZiB0eXBlIGlzIGNhY2hlIGV2ZW50LCBjaGFuZ2UgbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gZXZlbnQuZXZlbnROYW1lO1xuICAgICAgICBjb25zdCBldmVudENvdW50ID0gdGhpcy5ldmVudENvdW50QnlDb3JyZWxhdGlvbklkW2V2ZW50LnRlbGVtZXRyeUNvcnJlbGF0aW9uSWRdO1xuICAgICAgICBpZiAoIWV2ZW50Q291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDb3VudEJ5Q29ycmVsYXRpb25JZFtldmVudC50ZWxlbWV0cnlDb3JyZWxhdGlvbklkXSA9IHtcbiAgICAgICAgICAgICAgICBbZXZlbnROYW1lXTogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50Q291bnRbZXZlbnROYW1lXSA9IGV2ZW50Q291bnRbZXZlbnROYW1lXSA/IGV2ZW50Q291bnRbZXZlbnROYW1lXSArIDEgOiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRPcnBoYW5lZEV2ZW50cyhjb3JyZWxhdGlvbklkOiBzdHJpbmcpOiBBcnJheTxUZWxlbWV0cnlFdmVudD4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5pblByb2dyZXNzRXZlbnRzKVxuICAgICAgICAgICAgLnJlZHVjZSgobWVtbywgZXZlbnRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRLZXkuaW5kZXhPZihjb3JyZWxhdGlvbklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmluUHJvZ3Jlc3NFdmVudHNbZXZlbnRLZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5pblByb2dyZXNzRXZlbnRzW2V2ZW50S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5tZW1vLCBldmVudF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVWRU5UX05BTUVfUFJFRklYLCBURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUyB9IGZyb20gXCIuL1RlbGVtZXRyeUNvbnN0YW50c1wiO1xuaW1wb3J0IFRlbGVtZXRyeUV2ZW50IGZyb20gXCIuL1RlbGVtZXRyeUV2ZW50XCI7XG5pbXBvcnQgeyBFdmVudENvdW50LCBUZWxlbWV0cnlQbGF0Zm9ybSB9IGZyb20gXCIuL1RlbGVtZXRyeVR5cGVzXCI7XG5pbXBvcnQgeyBwcmVwZW5kRXZlbnROYW1lUHJlZml4IH0gZnJvbSBcIi4vVGVsZW1ldHJ5VXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdEV2ZW50IGV4dGVuZHMgVGVsZW1ldHJ5RXZlbnQge1xuICAgIC8vIFRPRE8gUGxhdGZvcm0gVHlwZVxuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtOiBUZWxlbWV0cnlQbGF0Zm9ybSwgY29ycmVsYXRpb25JZDogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBldmVudENvdW50OiBFdmVudENvdW50KSB7XG4gICAgICAgIHN1cGVyKHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJkZWZhdWx0X2V2ZW50XCIpLCBjb3JyZWxhdGlvbklkKTtcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwiY2xpZW50X2lkXCIpXSA9IGNsaWVudElkO1xuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJzZGtfcGxhZm9ybVwiKV0gPSBwbGF0Zm9ybS5zZGs7XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcInNka192ZXJzaW9uXCIpXSA9IHBsYXRmb3JtLnNka1ZlcnNpb247XG4gICAgICAgIHRoaXMuZXZlbnRbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImFwcGxpY2F0aW9uX25hbWVcIildID0gcGxhdGZvcm0uYXBwbGljYXRpb25OYW1lO1xuICAgICAgICB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJhcHBsaWNhdGlvbl92ZXJzaW9uXCIpXSA9IHBsYXRmb3JtLmFwcGxpY2F0aW9uVmVyc2lvbjtcbiAgICAgICAgdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5VaUV2ZW50Q291bnRUZWxlbWV0cnlCYXRjaEtleX1gXSA9IHRoaXMuZ2V0RXZlbnRDb3VudChwcmVwZW5kRXZlbnROYW1lUHJlZml4KFwidWlfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLkh0dHBFdmVudENvdW50VGVsZW1ldHJ5QmF0Y2hLZXl9YF0gPSB0aGlzLmdldEV2ZW50Q291bnQocHJlcGVuZEV2ZW50TmFtZVByZWZpeChcImh0dHBfZXZlbnRcIiksIGV2ZW50Q291bnQpO1xuICAgICAgICB0aGlzLmV2ZW50W2Ake1RFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTLkNhY2hlRXZlbnRDb3VudENvbnN0U3RyS2V5fWBdID0gdGhpcy5nZXRFdmVudENvdW50KHByZXBlbmRFdmVudE5hbWVQcmVmaXgoXCJjYWNoZV9ldmVudFwiKSwgZXZlbnRDb3VudCk7XG4gICAgICAgIC8vIC8gRGV2aWNlIGlkP1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RXZlbnRDb3VudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRDb3VudDogRXZlbnRDb3VudCk6IG51bWJlciB7XG4gICAgICAgIGlmICghZXZlbnRDb3VudFtldmVudE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnRDb3VudFtldmVudE5hbWVdO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFRFTEVNRVRSWV9CTE9CX0VWRU5UX05BTUVTIH0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICAgIEVWRU5UX05BTUVfS0VZLFxuICAgIFNUQVJUX1RJTUVfS0VZLFxuICAgIEVMQVBTRURfVElNRV9LRVlcbn0gZnJvbSBcIi4vVGVsZW1ldHJ5Q29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwcmVwZW5kRXZlbnROYW1lUHJlZml4IH0gZnJvbSBcIi4vVGVsZW1ldHJ5VXRpbHNcIjtcbmltcG9ydCB7IENyeXB0b1V0aWxzIH0gZnJvbSBcIi4uL3V0aWxzL0NyeXB0b1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbGVtZXRyeUV2ZW50IHtcblxuICAgIHByaXZhdGUgc3RhcnRUaW1lc3RhbXA6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgZXZlbnQ6IGFueTsgLy8gVE9ETyBUWVBFIFRISVNcbiAgICBwdWJsaWMgZXZlbnRJZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnROYW1lOiBzdHJpbmcsIGNvcnJlbGF0aW9uSWQ6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmV2ZW50SWQgPSBDcnlwdG9VdGlscy5jcmVhdGVOZXdHdWlkKCk7XG4gICAgICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICAgICAgICBbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChFVkVOVF9OQU1FX0tFWSldOiBldmVudE5hbWUsXG4gICAgICAgICAgICBbcHJlcGVuZEV2ZW50TmFtZVByZWZpeChTVEFSVF9USU1FX0tFWSldOiB0aGlzLnN0YXJ0VGltZXN0YW1wLFxuICAgICAgICAgICAgW3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoRUxBUFNFRF9USU1FX0tFWSldOiAtMSxcbiAgICAgICAgICAgIFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5Nc2FsQ29ycmVsYXRpb25JZENvbnN0U3RyS2V5fWBdOiBjb3JyZWxhdGlvbklkXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFbGFwc2VkVGltZSh0aW1lOiBOdW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ldmVudFtwcmVwZW5kRXZlbnROYW1lUHJlZml4KEVMQVBTRURfVElNRV9LRVkpXSA9IHRpbWU7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XG4gICAgICAgIC8vIFNldCBkdXJhdGlvbiBvZiBldmVudFxuICAgICAgICB0aGlzLnNldEVsYXBzZWRUaW1lKCtEYXRlLm5vdygpIC0gK3RoaXMuc3RhcnRUaW1lc3RhbXApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdGVsZW1ldHJ5Q29ycmVsYXRpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudFtgJHtURUxFTUVUUllfQkxPQl9FVkVOVF9OQU1FUy5Nc2FsQ29ycmVsYXRpb25JZENvbnN0U3RyS2V5fWBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgdGVsZW1ldHJ5Q29ycmVsYXRpb25JZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXZlbnRbYCR7VEVMRU1FVFJZX0JMT0JfRVZFTlRfTkFNRVMuTXNhbENvcnJlbGF0aW9uSWRDb25zdFN0cktleX1gXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXZlbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50W3ByZXBlbmRFdmVudE5hbWVQcmVmaXgoRVZFTlRfTkFNRV9LRVkpXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50aGlzLmV2ZW50LFxuICAgICAgICAgICAgZXZlbnRJZDogdGhpcy5ldmVudElkXG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==