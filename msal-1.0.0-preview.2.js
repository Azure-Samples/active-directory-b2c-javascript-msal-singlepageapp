/*! msal v1.0.0-preview.2 2019-04-23 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(3);
var Constants_2 = __webpack_require__(2);
/**
 * @hidden
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    //#region General Util
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Utils.compareAccounts = function (a1, a2) {
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
    /**
     * Decimal to Hex
     *
     * @param num
     */
    Utils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    /**
     * MSAL JS Library Version
     */
    Utils.getLibraryVersion = function () {
        return Constants_2.Library.version;
    };
    /**
     * Creates a new random GUID - used to populate state?
     * @returns string (GUID)
     */
    Utils.createNewGuid = function () {
        // RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
        // pseudo-random numbers.
        // The algorithm is as follows:
        //     Set the two most significant bits (bits 6 and 7) of the
        //        clock_seq_hi_and_reserved to zero and one, respectively.
        //     Set the four most significant bits (bits 12 through 15) of the
        //        time_hi_and_version field to the 4-bit version number from
        //        Section 4.1.3. Version4
        //     Set all the other bits to randomly (or pseudo-randomly) chosen
        //     values.
        // UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
        // time-low               = 4hexOctet
        // time-mid               = 2hexOctet
        // time-high-and-version  = 2hexOctet
        // clock-seq-and-reserved = hexOctet:
        // clock-seq-low          = hexOctet
        // node                   = 6hexOctet
        // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
        // y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
        // y values are 8, 9, A, B
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            //buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; //buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; //buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            //buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; //buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; //buffer[8] & 10111111 will set the 6 bit to 0.
            return Utils.decimalToHex(buffer[0]) + Utils.decimalToHex(buffer[1])
                + Utils.decimalToHex(buffer[2]) + Utils.decimalToHex(buffer[3])
                + "-" + Utils.decimalToHex(buffer[4]) + Utils.decimalToHex(buffer[5])
                + "-" + Utils.decimalToHex(buffer[6]) + Utils.decimalToHex(buffer[7])
                + "-" + Utils.decimalToHex(buffer[8]) + Utils.decimalToHex(buffer[9])
                + "-" + Utils.decimalToHex(buffer[10]) + Utils.decimalToHex(buffer[11])
                + Utils.decimalToHex(buffer[12]) + Utils.decimalToHex(buffer[13])
                + Utils.decimalToHex(buffer[14]) + Utils.decimalToHex(buffer[15]);
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
    //#endregion
    //#region Time
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expires
     */
    Utils.expiresIn = function (expires) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        if (!expires) {
            expires = "3599";
        }
        return this.now() + parseInt(expires, 10);
    };
    /**
     * return the current time in Unix time. Date.getTime() returns in milliseconds.
     */
    Utils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    //#endregion
    //#region String Ops
    /**
     * Check if a string is empty
     *
     * @param str
     */
    Utils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    //#endregion
    //#region Token Processing (Extract to TokenProcessing.ts)
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    Utils.decodeJwt = function (jwtToken) {
        if (this.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            //this._requestContext.logger.warn("The returned id_token is not parseable.");
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
    Utils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken.JWSPayload;
            var base64Decoded = this.base64DecodeStringUrlSafe(base64IdToken);
            if (!base64Decoded) {
                //this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            //this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    //#endregion
    //#region Encode and Decode
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    Utils.base64EncodeStringUrlSafe = function (input) {
        // html5 should support atob function for decoding
        if (window.btoa) {
            return window.btoa(input);
        }
        else {
            return this.encode(input);
        }
    };
    /**
     * decoding base64 token - platform specific check
     *
     * @param base64IdToken
     */
    Utils.base64DecodeStringUrlSafe = function (base64IdToken) {
        // html5 should support atob function for decoding
        base64IdToken = base64IdToken.replace(/-/g, "+").replace(/_/g, "/");
        if (window.atob) {
            return decodeURIComponent(encodeURIComponent(window.atob(base64IdToken))); // jshint ignore:line
        }
        else {
            return decodeURIComponent(encodeURIComponent(this.decode(base64IdToken)));
        }
    };
    /**
     * base64 encode a string
     *
     * @param input
     */
    // TODO: Rename to specify type of encoding
    Utils.encode = function (input) {
        var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = this.utf8Encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
        }
        return output.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    };
    /**
     * utf8 encode a string
     *
     * @param input
     */
    Utils.utf8Encode = function (input) {
        input = input.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < input.length; n++) {
            var c = input.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    /**
     * decode a base64 token string
     *
     * @param base64IdToken
     */
    // TODO: Rename to specify type of encoding
    Utils.decode = function (base64IdToken) {
        var codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        base64IdToken = String(base64IdToken).replace(/=+$/, "");
        var length = base64IdToken.length;
        if (length % 4 === 1) {
            throw ClientAuthError_1.ClientAuthError.createTokenEncodingError(base64IdToken);
        }
        var h1, h2, h3, h4, bits, c1, c2, c3, decoded = "";
        for (var i = 0; i < length; i += 4) {
            //Every 4 base64 encoded character will be converted to 3 byte string, which is 24 bits
            // then 6 bits per base64 encoded character
            h1 = codes.indexOf(base64IdToken.charAt(i));
            h2 = codes.indexOf(base64IdToken.charAt(i + 1));
            h3 = codes.indexOf(base64IdToken.charAt(i + 2));
            h4 = codes.indexOf(base64IdToken.charAt(i + 3));
            // For padding, if last two are "="
            if (i + 2 === length - 1) {
                bits = h1 << 18 | h2 << 12 | h3 << 6;
                c1 = bits >> 16 & 255;
                c2 = bits >> 8 & 255;
                decoded += String.fromCharCode(c1, c2);
                break;
            }
            // if last one is "="
            else if (i + 1 === length - 1) {
                bits = h1 << 18 | h2 << 12;
                c1 = bits >> 16 & 255;
                decoded += String.fromCharCode(c1);
                break;
            }
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            // then convert to 3 byte chars
            c1 = bits >> 16 & 255;
            c2 = bits >> 8 & 255;
            c3 = bits & 255;
            decoded += String.fromCharCode(c1, c2, c3);
        }
        return decoded;
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    Utils.deserialize = function (query) {
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
    //#endregion
    //#region Scopes (extract to Scopes.ts)
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    Utils.isIntersectingScopes = function (cachedScopes, scopes) {
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
    Utils.containsScope = function (cachedScopes, scopes) {
        cachedScopes = this.convertToLowerCase(cachedScopes);
        return scopes.every(function (value) { return cachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     * toLower
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    Utils.convertToLowerCase = function (scopes) {
        return scopes.map(function (scope) { return scope.toLowerCase(); });
    };
    /**
     * remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    Utils.removeElement = function (scopes, scope) {
        return scopes.filter(function (value) { return value !== scope; });
    };
    //#endregion
    //#region URL Processing (Extract to UrlProcessing.ts?)
    Utils.getDefaultRedirectUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    Utils.replaceTenantPath = function (url, tenantId) {
        url = url.toLowerCase();
        var urlObject = this.GetUrlComponents(url);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    Utils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    Utils.GetUrlComponents = function (url) {
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
    Utils.CanonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
        }
        if (url && !Utils.endsWith(url, "/")) {
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
    Utils.endsWith = function (url, suffix) {
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
    Utils.urlRemoveQueryStringParameter = function (url, name) {
        if (this.isEmpty(url)) {
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
    //#endregion
    //#region ExtraQueryParameters Processing (Extract?)
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    //TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    Utils.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var ssoParam = {};
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
        serverReqParam = this.addSSOParameter(ssoType, ssoData, ssoParam);
        // add the HomeAccountIdentifier info/ domain_hint
        if (request && request.account && request.account.homeAccountIdentifier) {
            serverReqParam = this.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, request.account.homeAccountIdentifier, ssoParam);
        }
        return serverReqParam;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    // TODO: Can optimize this later, make ssoParam optional
    Utils.addSSOParameter = function (ssoType, ssoData, ssoParam) {
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
                var uid = Utils.base64DecodeStringUrlSafe(homeAccountId[0]);
                var utid = Utils.base64DecodeStringUrlSafe(homeAccountId[1]);
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
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    Utils.generateQueryParametersString = function (queryParameters) {
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
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    Utils.isSSOParam = function (request) {
        return request && (request.account || request.sid || request.loginHint);
    };
    //#endregion
    //#region Response Helpers
    Utils.setResponseIdToken = function (originalResponse, idToken) {
        var response = tslib_1.__assign({}, originalResponse);
        response.idToken = idToken;
        if (response.idToken.objectId) {
            response.uniqueId = response.idToken.objectId;
        }
        else {
            response.uniqueId = response.idToken.subject;
        }
        response.tenantId = response.idToken.tenantId;
        return response;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ }),
/* 1 */
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/**
 * @hidden
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
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
/**
 * @hidden
 */
exports.CacheKeys = {
    AUTHORITY: "msal_authority",
    ACQUIRE_TOKEN_USER: "msal.acquireTokenUser"
};
/**
 * @hidden
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
exports.Library = {
    version: "1.0.0-preview.2"
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AuthError_1 = __webpack_require__(5);
var Utils_1 = __webpack_require__(0);
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
        if (errDetail && !Utils_1.Utils.isEmpty(errDetail)) {
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
        if (errDetail && !Utils_1.Utils.isEmpty(errDetail)) {
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
    //TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    //TODO: Is this not a security flaw to send the user the Nonce expected??
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
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(3);
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
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/-basics."
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
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackType, callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for " + callbackType + " callback function: " + callbackObject);
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
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ClientConfigurationError_1 = __webpack_require__(4);
var XHRClient_1 = __webpack_require__(12);
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
            this.canonicalAuthority = Utils_1.Utils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = Utils_1.Utils.GetUrlComponents(this.CanonicalAuthority);
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
        return client.sendRequestAsync(openIdConfigurationEndpoint, "GET", /*enableCaching: */ true)
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
        var _this = this;
        var openIdConfigurationEndpoint = "";
        return this.GetOpenIdConfigurationEndpointAsync().then(function (openIdConfigurationEndpointResponse) {
            openIdConfigurationEndpoint = openIdConfigurationEndpointResponse;
            return _this.DiscoverEndpoints(openIdConfigurationEndpoint);
        }).then(function (tenantDiscoveryResponse) {
            _this.tenantDiscoveryResponse = tenantDiscoveryResponse;
            return _this;
        });
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
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
        if (!Utils_1.Utils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
        }
        else {
            log = timestamp + ":" + Utils_1.Utils.getLibraryVersion() + "-" + LogLevel[logLevel] + " " + logMessage;
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
    return Logger;
}());
exports.Logger = Logger;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AuthError_1 = __webpack_require__(5);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AccessTokenKey_1 = __webpack_require__(17);
var AccessTokenValue_1 = __webpack_require__(18);
var ServerRequestParameters_1 = __webpack_require__(19);
var ClientInfo_1 = __webpack_require__(20);
var Constants_1 = __webpack_require__(2);
var IdToken_1 = __webpack_require__(21);
var Storage_1 = __webpack_require__(22);
var Account_1 = __webpack_require__(10);
var Utils_1 = __webpack_require__(0);
var AuthorityFactory_1 = __webpack_require__(24);
var Configuration_1 = __webpack_require__(13);
var ClientConfigurationError_1 = __webpack_require__(4);
var AuthError_1 = __webpack_require__(5);
var ClientAuthError_1 = __webpack_require__(3);
var ServerError_1 = __webpack_require__(8);
var InteractionRequiredAuthError_1 = __webpack_require__(14);
// default authority
/**
 * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
 * - In Azure AD, it is of the form https://&lt;tenant&gt;/&lt;tenant&gt;, where &lt;tenant&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
 * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
 * - Default value is: "https://login.microsoftonline.com/common"
 */
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 * Since we support only implicit flow in this library, we restrict the response_type support to only 'token' and 'id_token'
 *
 * @hidden
 */
var ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
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
 * UserAgentApplication class - Object Instance that the developer would need to make login/acquireToken calls
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * Initialize a UserAgentApplication with a given clientId and authority.
     * @constructor
     *
     * @param {string} clientId - The clientID of your application, you should get this from the application registration portal.
     * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
     * - In Azure AD, it is of the form https://&lt;instance>/&lt;tenant&gt;,\ where &lt;instance&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
     * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenantId&gt;/&lt;policyName&gt;/
     * - Default value is: "https://login.microsoftonline.com/common"
     * @param _tokenReceivedCallback -  The function that will get the call back once this API is completed (either successfully or with a failure).
     * @param {boolean} validateAuthority -  boolean to turn authority validation on/off.
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        // Set the callback boolean
        this.redirectCallbacksSet = false;
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
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
        var isCallback = this.isCallback(urlHash);
        // On the server 302 - Redirect, handle this
        if (!this.config.framework.isAngular) {
            if (isCallback) {
                this.handleAuthenticationResponse(urlHash);
            }
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        // retrieve the authority instance
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: true,
        configurable: true
    });
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    //#region Redirect Callbacks
    /**
     * Sets the callback functions for the redirect flow to send back the success or error object.
     * @param {tokenReceivedCallback} successCallback - Callback which contains the AuthResponse object, containing data from the server.
     * @param {errorReceivedCallback} errorCallback - Callback which contains a AuthError object, containing error data from either the server
     * or the library, depending on the origin of the error.
     */
    UserAgentApplication.prototype.handleRedirectCallbacks = function (successCallback, errorCallback) {
        if (!successCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError("successCallback", successCallback);
        }
        else if (!errorCallback) {
            this.redirectCallbacksSet = false;
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError("errorCallback", errorCallback);
        }
        // Set callbacks
        this.tokenReceivedCallback = successCallback;
        this.errorReceivedCallback = errorCallback;
        this.redirectCallbacksSet = true;
        // On the server 302 - Redirect, handle this
        // TODO: rename pendingCallback to cachedHash
        if (!this.config.framework.isAngular) {
            var pendingCallback = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
            if (pendingCallback) {
                this.processCallBack(pendingCallback, null);
            }
        }
    };
    //#endregion
    //#region Redirect Flow
    /**
     * Initiate the login process by redirecting the user to the STS authorization endpoint.
     * @param {Array.<string>} scopes - Permissions you want included in the access token. Not all scopes are guaranteed to be included in the access token returned.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the authentication server during the interactive authentication flow.
     */
    UserAgentApplication.prototype.loginRedirect = function (request) {
        var _this = this;
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        // Creates navigate url; saves value in cache; redirect user to AAD
        if (this.loginInProgress) {
            this.errorReceivedCallback(ClientAuthError_1.ClientAuthError.createLoginInProgressError(), this.getAccountState(this.silentAuthenticationState));
            return;
        }
        // if extraScopesToConsent is passed, append them to the login request
        var scopes = this.appendScopes(request);
        // Validate and filter scopes (the validate function will throw if validation fails)
        this.validateInputScope(scopes, false);
        var account = this.getAccount();
        // defer queryParameters generation to Helper if developer passes account/sid/login_hint
        if (Utils_1.Utils.isSSOParam(request)) {
            // if account is not provided, we pass null
            this.loginRedirectHelper(account, request, scopes);
        }
        // else handle the library data
        else {
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
                    if (_this.tokenReceivedCallback) {
                        _this.tokenReceivedCallback(response);
                    }
                }, function (error) {
                    _this.silentLogin = false;
                    _this.logger.error("Error occurred during unified cache ATS");
                    // call the loginRedirectHelper later with no user account context
                    _this.loginRedirectHelper(null, request, scopes);
                });
            }
            // else proceed to login
            else {
                // call the loginRedirectHelper later with no user account context
                this.loginRedirectHelper(null, request, scopes);
            }
        }
    };
    /**
     * Helper function to loginRedirect
     *
     * @hidden
     * @param scopes
     * @param extraQueryParameters
     */
    UserAgentApplication.prototype.loginRedirectHelper = function (account, request, scopes) {
        var _this = this;
        // Track login in progress
        this.loginInProgress = true;
        this.authorityInstance.resolveEndpointsAsync().then(function () {
            // create the Request to be sent to the Server
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this.config.auth.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            // if the user sets the login start page - angular only??
            var loginStartPage = _this.cacheStorage.getItem(Constants_1.Constants.angularLoginRequest);
            if (!loginStartPage || loginStartPage === "") {
                loginStartPage = window.location.href;
            }
            else {
                _this.cacheStorage.setItem(Constants_1.Constants.angularLoginRequest, "");
            }
            // Cache the state, nonce, and login request data
            _this.cacheStorage.setItem(Constants_1.Constants.loginRequest, loginStartPage, _this.inCookie);
            _this.cacheStorage.setItem(Constants_1.Constants.loginError, "");
            _this.cacheStorage.setItem(Constants_1.Constants.stateLogin, serverAuthenticationRequest.state, _this.inCookie);
            _this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, _this.inCookie);
            _this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
            _this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
            // Cache authorityKey
            _this.setAuthorityCache(serverAuthenticationRequest.state, _this.authority);
            // build URL to navigate to proceed with the login
            var urlNavigate = serverAuthenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            // Redirect user to login URL
            _this.promptUser(urlNavigate);
        });
    };
    /**
     * Used to obtain an access_token by redirecting the user to the authorization endpoint.
     * To renew idToken, clientId should be passed as the only scope in the scopes array.
     * @param {Array<string>} scopes - Permissions you want included in the access token. Not all scopes are  guaranteed to be included in the access token. Scopes like "openid" and "profile" are sent with every request.
     * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
     * - In Azure AD, it is of the form https://{instance}/&lt;tenant&gt;, where &lt;tenant&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
     * - In Azure B2C, it is of the form https://{instance}/tfp/&lt;tenant&gt;/<policyName>
     * - Default value is: "https://login.microsoftonline.com/common"
     * @param {Account} account - The account for which the scopes are requested.The default account is the logged in account.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the STS during the  authentication flow.
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (request) {
        var _this = this;
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        // Validate and filter scopes (the validate function will throw if validation fails)
        this.validateInputScope(request.scopes, true);
        // Get the account object if a session exists
        var account = request.account || this.getAccount();
        // If already in progress, do not proceed
        if (this.acquireTokenInProgress) {
            this.errorReceivedCallback(ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError(), this.getAccountState(this.silentAuthenticationState));
            return;
        }
        // If no session exists, prompt the user to login.
        var scope = request.scopes.join(" ").toLowerCase();
        if (!account && !(request.sid || request.loginHint)) {
            this.logger.info("User login is required");
            throw ClientAuthError_1.ClientAuthError.createUserLoginRequiredError();
        }
        var serverAuthenticationRequest;
        var acquireTokenAuthority = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority) : this.authorityInstance;
        // Track the acquireToken progress
        this.acquireTokenInProgress = true;
        acquireTokenAuthority.resolveEndpointsAsync().then(function () {
            // On Fulfillment
            var responseType = _this.getTokenType(account, request.scopes, false);
            serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, request.scopes, responseType, _this.getRedirectUri(), _this.config.auth.state);
            // Cache nonce
            _this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, _this.inCookie);
            // Cache account and authority
            _this.setAccountCache(account, serverAuthenticationRequest.state);
            _this.setAuthorityCache(serverAuthenticationRequest.state, acquireTokenAuthority.CanonicalAuthority);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            // Construct urlNavigate
            var urlNavigate = serverAuthenticationRequest.createNavigateUrl(request.scopes) + Constants_1.Constants.response_mode_fragment;
            // set state in cache and redirect to urlNavigate
            if (urlNavigate) {
                _this.cacheStorage.setItem(Constants_1.Constants.stateAcquireToken, serverAuthenticationRequest.state, _this.inCookie);
                window.location.replace(urlNavigate);
            }
        });
    };
    /**
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     * @hidden
     */
    // TODO - rename this, the name is confusing
    UserAgentApplication.prototype.isCallback = function (hash) {
        hash = this.getHash(hash);
        var parameters = Utils_1.Utils.deserialize(hash);
        return (parameters.hasOwnProperty(Constants_1.Constants.errorDescription) ||
            parameters.hasOwnProperty(Constants_1.Constants.error) ||
            parameters.hasOwnProperty(Constants_1.Constants.accessToken) ||
            parameters.hasOwnProperty(Constants_1.Constants.idToken));
    };
    //#endregion
    //#region Popup Flow
    /**
     * Initiate the login process by opening a popup window.
     * @param {Array.<string>} scopes - Permissions you want included in the access token. Not all scopes are  guaranteed to be included in the access token returned.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the STS during the interactive authentication flow.
     * @returns {Promise.<string>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the token or error.
     */
    UserAgentApplication.prototype.loginPopup = function (request) {
        var _this = this;
        // Creates navigate url; saves value in cache; redirect user to AAD
        return new Promise(function (resolve, reject) {
            // Fail if login is already in progress
            if (_this.loginInProgress) {
                return reject(ClientAuthError_1.ClientAuthError.createLoginInProgressError());
            }
            // if extraScopesToConsent is passed, append them to the login request
            var scopes = _this.appendScopes(request);
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(scopes, false);
            var account = _this.getAccount();
            // add the prompt parameter to the 'extraQueryParameters' if passed
            if (Utils_1.Utils.isSSOParam(request)) {
                // if account is not provided, we pass null
                _this.loginPopupHelper(account, request, resolve, reject, scopes);
            }
            // else handle the library data
            else {
                // Extract ADAL id_token if it exists
                var adalIdToken = _this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !scopes) {
                    _this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                    var tokenRequest = _this.buildIDTokenRequest(request);
                    _this.silentLogin = true;
                    _this.acquireTokenSilent(tokenRequest)
                        .then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        resolve(response);
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS");
                        _this.loginPopupHelper(null, request, resolve, reject, scopes);
                    });
                }
                // else proceed with login
                else {
                    _this.loginPopupHelper(null, request, resolve, reject, scopes);
                }
            }
        });
    };
    /**
     * Helper function to loginPopup
     *
     * @hidden
     * @param resolve
     * @param reject
     * @param scopes
     * @param extraQueryParameters
     */
    UserAgentApplication.prototype.loginPopupHelper = function (account, request, resolve, reject, scopes) {
        var _this = this;
        if (!scopes) {
            scopes = [this.clientId];
        }
        var scope = scopes.join(" ").toLowerCase();
        // Generate a popup window
        var popUpWindow = this.openWindow("about:blank", "_blank", 1, this, resolve, reject);
        if (!popUpWindow) {
            // We pass reject in openWindow, we reject there during an error
            return;
        }
        // Track login progress
        this.loginInProgress = true;
        // Resolve endpoint
        this.authorityInstance.resolveEndpointsAsync().then(function () {
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), _this.config.auth.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer;
            serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            // Cache the state, nonce, and login request data
            _this.cacheStorage.setItem(Constants_1.Constants.loginRequest, window.location.href, _this.inCookie);
            _this.cacheStorage.setItem(Constants_1.Constants.loginError, "");
            _this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, _this.inCookie);
            _this.cacheStorage.setItem(Constants_1.Constants.msalError, "");
            _this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, "");
            // cache authorityKey
            _this.setAuthorityCache(serverAuthenticationRequest.state, _this.authority);
            // Build the URL to navigate to in the popup window
            var urlNavigate = serverAuthenticationRequest.createNavigateUrl(scopes) + Constants_1.Constants.response_mode_fragment;
            window.renewStates.push(serverAuthenticationRequest.state);
            window.requestType = Constants_1.Constants.login;
            // Register callback to capture results from server
            _this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
            // Navigate url in popupWindow
            if (popUpWindow) {
                _this.logger.infoPii("Navigated Popup window to:" + urlNavigate);
                popUpWindow.location.href = urlNavigate;
            }
        }, function () {
            // Endpoint resolution failure error
            _this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.desc);
            _this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.code);
            _this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.desc);
            // What is this? Is this the reject that is passed in?? -- REDO this in the subsequent refactor, passing reject is confusing
            if (reject) {
                reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError());
            }
            // Close the popup window
            if (popUpWindow) {
                popUpWindow.close();
            }
        }).catch(function (err) {
            // All catch - when is this executed? Possibly when error is thrown, but not if previous function rejects instead of throwing
            _this.logger.warning("could not resolve endpoints");
            reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString));
        });
    };
    /**
     * Used to acquire an access token for a new user using interactive authentication via a popup Window.
     * To request an id_token, pass the clientId as the only scope in the scopes array.
     * @param {Array<string>} scopes - Permissions you want included in the access token. Not all scopes are  guaranteed to be included in the access token. Scopes like "openid" and "profile" are sent with every request.
     * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
     * - In Azure AD, it is of the form https://&lt;tenant&gt;/&lt;tenant&gt;, where &lt;tenant&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
     * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
     * - Default value is: "https://login.microsoftonline.com/common".
     * @param {Account} account - The account for which the scopes are requested.The default account is the logged in account.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the STS during the  authentication flow.
     * @returns {Promise.<string>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the token or error.
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // Get the account object if a session exists
            var account = request.account || _this.getAccount();
            // If already in progress, throw an error and reject the request
            if (_this.acquireTokenInProgress) {
                return reject(ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError());
            }
            // If no session exists, prompt the user to login.
            if (!account && !!(request.sid || request.loginHint)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            // track the acquireToken progress
            _this.acquireTokenInProgress = true;
            var serverAuthenticationRequest;
            var acquireTokenAuthority = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
            // Open the popup window
            var popUpWindow = _this.openWindow("about:blank", "_blank", 1, _this, resolve, reject);
            if (!popUpWindow) {
                // We pass reject to openWindow, so we are rejecting there.
                return;
            }
            acquireTokenAuthority.resolveEndpointsAsync().then(function () {
                // On fullfillment
                var responseType = _this.getTokenType(account, request.scopes, false);
                serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, request.scopes, responseType, _this.getRedirectUri(), _this.config.auth.state);
                // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
                serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
                // Cache nonce
                _this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, _this.inCookie);
                serverAuthenticationRequest.state = serverAuthenticationRequest.state;
                // Cache account and authority
                _this.setAccountCache(account, serverAuthenticationRequest.state);
                _this.setAuthorityCache(serverAuthenticationRequest.state, acquireTokenAuthority.CanonicalAuthority);
                // Construct the urlNavigate
                var urlNavigate = serverAuthenticationRequest.createNavigateUrl(request.scopes) + Constants_1.Constants.response_mode_fragment;
                window.renewStates.push(serverAuthenticationRequest.state);
                window.requestType = Constants_1.Constants.renewToken;
                _this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
                // open popup window to urlNavigate
                if (popUpWindow) {
                    popUpWindow.location.href = urlNavigate;
                }
            }, function () {
                // On rejection
                _this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.desc);
                _this.cacheStorage.setItem(Constants_1.Constants.msalError, ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.code);
                _this.cacheStorage.setItem(Constants_1.Constants.msalErrorDescription, ClientAuthError_1.ClientAuthErrorMessage.endpointResolutionError.desc);
                if (reject) {
                    reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError());
                }
                if (popUpWindow) {
                    popUpWindow.close();
                }
            }).catch(function (err) {
                _this.logger.warning("could not resolve endpoints");
                reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString()));
            });
        });
    };
    /**
     * Used to send the user to the redirect_uri after authentication is complete. The user's bearer token is attached to the URI fragment as an id_token/access_token field.
     * This function also closes the popup window after redirection.
     *
     * @param urlNavigate
     * @param title
     * @param interval
     * @param instance
     * @param resolve
     * @param reject
     * @hidden
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
            if (popupWindow && popupWindow.closed && instance.loginInProgress) {
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
                // Cross Domain url check error.
                // Will be thrown until AAD redirects the user back to the app"s root page with the token.
                // No need to log or throw this error as it will create unnecessary traffic.
            }
        }, interval);
        return popupWindow;
    };
    /**
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
    //#endregion
    //#region Silent Flow
    /**
     * Used to get the token from cache.
     * MSAL will return the cached token if it is not expired.
     * Or it will send a request to the STS to obtain an access_token using a hidden iframe. To renew idToken, clientId should be passed as the only scope in the scopes array.
     * @param {Array<string>} scopes - Permissions you want included in the access token. Not all scopes are  guaranteed to be included in the access token. Scopes like "openid" and "profile" are sent with every request.
     * @param {string} authority - A URL indicating a directory that MSAL can use to obtain tokens.
     * - In Azure AD, it is of the form https://&lt;tenant&gt;/&lt;tenant&gt;, where &lt;tenant&gt; is the directory host (e.g. https://login.microsoftonline.com) and &lt;tenant&gt; is a identifier within the directory itself (e.g. a domain associated to the tenant, such as contoso.onmicrosoft.com, or the GUID representing the TenantID property of the directory)
     * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
     * - Default value is: "https://login.microsoftonline.com/common"
     * @param {Account} account - The user account for which the scopes are requested.The default account is the logged in account.
     * @param {string} extraQueryParameters - Key-value pairs to pass to the STS during the  authentication flow.
     * @returns {Promise.<string>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Resolved with token or rejected with error.
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Validate and filter scopes (the validate function will throw if validation fails)
            _this.validateInputScope(request.scopes, true);
            var scope = request.scopes.join(" ").toLowerCase();
            // if the developer passes an account give him the priority
            var account = request.account || _this.getAccount();
            // extract if there is an adalIdToken stashed in the cache
            var adalIdToken = _this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
            //if there is no account logged in and no login_hint/sid is passed in the request
            if (!account && !!(request.sid || request.loginHint) && Utils_1.Utils.isEmpty(adalIdToken)) {
                _this.logger.info("User login is required");
                return reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError());
            }
            var responseType = _this.getTokenType(account, request.scopes, true);
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), _this.config.auth.state);
            // populate QueryParameters (sid/login_hint/domain_hint) and any other extraQueryParameters set by the developer
            if (Utils_1.Utils.isSSOParam(request) || account) {
                serverAuthenticationRequest = _this.populateQueryParams(account, request, serverAuthenticationRequest);
            }
            //if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
            else if (!account && !Utils_1.Utils.isEmpty(adalIdToken)) {
                // if adalIdToken exists, extract the SSO info from the same
                var adalIdTokenObject = Utils_1.Utils.extractIdToken(adalIdToken);
                _this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken ");
                serverAuthenticationRequest = _this.populateQueryParams(account, null, serverAuthenticationRequest, adalIdTokenObject);
            }
            var authErr;
            var cacheResultResponse;
            try {
                cacheResultResponse = _this.getCachedToken(serverAuthenticationRequest, account);
            }
            catch (e) {
                authErr = e;
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
                _this.logger.verbose("Token is not in cache for scope:" + scope);
                // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the api.
                if (!serverAuthenticationRequest.authorityInstance) {
                    serverAuthenticationRequest.authorityInstance = request.authority ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority) : _this.authorityInstance;
                }
                // cache miss
                return serverAuthenticationRequest.authorityInstance.resolveEndpointsAsync()
                    .then(function () {
                    // refresh attempt with iframe
                    // Already renewing for this scope, callback when we get the token.
                    if (window.activeRenewals[scope]) {
                        _this.logger.verbose("Renew token for scope: " + scope + " is in progress. Registering callback");
                        // Active renewals contains the state for each renewal.
                        _this.registerCallback(window.activeRenewals[scope], scope, resolve, reject);
                    }
                    else {
                        if (request.scopes && request.scopes.indexOf(_this.clientId) > -1 && request.scopes.length === 1) {
                            // App uses idToken to send to api endpoints
                            // Default scope is tracked as clientId to store this token
                            _this.logger.verbose("renewing idToken");
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
    /**
     * Returns whether current window is in ifram for token renewal
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * Returns whether parent window exists and has msal
     */
    UserAgentApplication.prototype.parentIsMsal = function () {
        return window.parent !== window && window.parent.msal;
    };
    UserAgentApplication.prototype.isInteractionRequired = function (errorString) {
        if (errorString.indexOf("interaction_required") !== -1 ||
            errorString.indexOf("consent_required") !== -1 ||
            errorString.indexOf("login_required") !== -1) {
            return true;
        }
        return false;
    };
    /**
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, scope) {
        var _this = this;
        //set iframe session to pending
        var expectedState = window.activeRenewals[scope];
        this.logger.verbose("Set loading state to pending for: " + scope + ":" + expectedState);
        this.cacheStorage.setItem(Constants_1.Constants.renewStatus + expectedState, Constants_1.Constants.tokenRenewStatusInProgress);
        this.loadFrame(urlNavigate, frameName);
        setTimeout(function () {
            if (_this.cacheStorage.getItem(Constants_1.Constants.renewStatus + expectedState) === Constants_1.Constants.tokenRenewStatusInProgress) {
                // fail the iframe session if it"s in pending state
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
     * Loads iframe with authorization endpoint URL
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.loadFrame = function (urlNavigate, frameName) {
        var _this = this;
        // This trick overcomes iframe navigation in IE
        // IE does not load the page consistently in iframe
        this.logger.info("LoadFrame: " + frameName);
        var frameCheck = frameName;
        setTimeout(function () {
            var frameHandle = _this.addHiddenIFrame(frameCheck);
            if (frameHandle.src === "" || frameHandle.src === "about:blank") {
                frameHandle.src = urlNavigate;
                _this.logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
            }
        }, 500);
    };
    /**
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     * @hidden
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
    //#endregion
    //#region General Helpers
    /**
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint can be one of users/organizations which when added skips the email based discovery process of the user
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {string} urlNavigate - Authentication request url
     * @param {Account} account - Account for which the token is requested
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.addHintParameters = function (accountObj, qParams, serverReqParams) {
        var account = accountObj || this.getAccount();
        // This is a final check for all queryParams added so far; preference order: sid > login_hint
        // sid cannot be passed along with login_hint, hence we check both are not populated yet in queryParameters so far
        if (account) {
            // sid
            if (account.sid && serverReqParams.promptValue === Constants_1.PromptState.NONE) {
                if (!qParams[Constants_1.SSOTypes.SID] && !qParams[Constants_1.SSOTypes.LOGIN_HINT]) {
                    qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
                }
            }
            // login_hint
            else {
                // login_hint is account.userName
                if (!qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !Utils_1.Utils.isEmpty(account.userName)) {
                    qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
            if (!qParams[Constants_1.SSOTypes.DOMAIN_REQ] && !qParams[Constants_1.SSOTypes.LOGIN_REQ]) {
                qParams = Utils_1.Utils.addSSOParameter(Constants_1.SSOTypes.HOMEACCOUNT_ID, account.homeAccountIdentifier, qParams);
            }
        }
        return qParams;
    };
    /**
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     * @hidden
     */
    UserAgentApplication.prototype.promptUser = function (urlNavigate) {
        // Navigate if valid URL
        if (urlNavigate && !Utils_1.Utils.isEmpty(urlNavigate)) {
            this.logger.infoPii("Navigate to:" + urlNavigate);
            window.location.replace(urlNavigate);
        }
        else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     * @hidden
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
        // Store the server esponse in the current window??
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
    //#endregion
    //#region Logout
    /**
     * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Defaults behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function () {
        this.clearCache();
        this.account = null;
        var logout = "";
        if (this.getPostLogoutRedirectUri()) {
            logout = "post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
        }
        var urlNavigate = this.authority + "/oauth2/v2.0/logout?" + logout;
        this.promptUser(urlNavigate);
    };
    /**
     * Clear all access tokens in the cache.
     * @ignore
     * @hidden
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
    //#endregion
    //#region Response
    /**
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     * @hidden
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
            var accountState = this.getAccountState(this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie));
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
                    this.tokenReceivedCallback(response);
                    return;
                }
            }
            else if (!parentCallback) {
                this.errorReceivedCallback(authErr, accountState);
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
     * This method must be called for processing the response received from the STS. It extracts the hash, processes the token or error information and saves it in the cache. It then
     * calls the registered callbacks in case of redirect or resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     * @hidden
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
                // We reached this point too early, return and come back later
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
     * Returns deserialized portion of URL hash
     * @param hash
     */
    UserAgentApplication.prototype.deserializeHash = function (hash) {
        hash = this.getHash(hash);
        return Utils_1.Utils.deserialize(hash);
    };
    /**
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     * @hidden
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
        // async calls can fire iframe and login request at the same time if developer does not use the API as expected
        // incoming callback needs to be looked up to find the request type
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie) || stateResponse.state === this.silentAuthenticationState) { // loginRedirect
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem(Constants_1.Constants.stateAcquireToken, this.inCookie)) { //acquireTokenRedirect
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
    //#endregion
    //#region Token Processing (Extract to TokenProcessing.ts)
    /**
     * Used to get token for the specified set of scopes from the cache
     * @param {AuthenticationRequestParameters} authenticationRequest - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     * @hidden
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
                if (Utils_1.Utils.containsScope(cachedScopes, scopes)) {
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
                if (Utils_1.Utils.containsScope(cachedScopes, scopes) && Utils_1.Utils.CanonicalizeUri(cacheItem.key.authority) === serverAuthenticationRequest.authority) {
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
                // if more than cached token is found
                throw ClientAuthError_1.ClientAuthError.createMultipleMatchingTokensInCacheError(scopes.toString());
            }
        }
        if (accessTokenCacheItem != null) {
            var expired = Number(accessTokenCacheItem.value.expiresIn);
            // If expiration is within offset, it will force renew
            var offset = this.config.system.tokenRenewalOffsetSeconds || 300;
            if (expired && (expired > Utils_1.Utils.now() + offset)) {
                var idToken = new IdToken_1.IdToken(accessTokenCacheItem.value.idToken);
                if (!account) {
                    account = this.getAccount();
                    if (!account) {
                        throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                    }
                }
                var aState = this.getAccountState(this.cacheStorage.getItem(Constants_1.Constants.stateLogin, this.inCookie));
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: (accessTokenCacheItem.value.idToken === accessTokenCacheItem.value.accessToken) ? Constants_1.Constants.idToken : Constants_1.Constants.accessToken,
                    idToken: idToken,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(expired * 1000),
                    account: account,
                    accountState: aState,
                };
                Utils_1.Utils.setResponseIdToken(response, idToken);
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
     * Used to get a unique list of authoritues from the cache
     * @param {Array<AccessTokenCacheItem>}  accessTokenCacheItems - accessTokenCacheItems saved in the cache
     * @ignore
     * @hidden
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
     * Check if ADAL id_token exists and return if exists.
     *
     * @hidden
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        if (!Utils_1.Utils.isEmpty(adalIdToken)) {
            return Utils_1.Utils.extractIdToken(adalIdToken);
        }
        return null;
    };
    /**
     * Acquires access token using a hidden iframe.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.renewToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        var scope = scopes.join(" ").toLowerCase();
        this.logger.verbose("renewToken is called for scope:" + scope);
        var frameHandle = this.addHiddenIFrame("msalRenewFrame" + scope);
        // Cache account and authority
        this.setAccountCache(account, serverAuthenticationRequest.state);
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // renew happens in iframe, so it keeps javascript context
        this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
        this.logger.verbose("Renew token Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(serverAuthenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.registerCallback(serverAuthenticationRequest.state, scope, resolve, reject);
        this.logger.infoPii("Navigate to:" + urlNavigate);
        frameHandle.src = "about:blank";
        this.loadIframeTimeout(urlNavigate, "msalRenewFrame" + scope, scope);
    };
    /**
     * Renews idtoken for app"s own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.renewIdToken = function (scopes, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("renewidToken is called");
        var frameHandle = this.addHiddenIFrame("msalIdTokenFrame");
        // Cache account and authority
        this.setAccountCache(account, serverAuthenticationRequest.state);
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem(Constants_1.Constants.nonceIdToken, serverAuthenticationRequest.nonce, this.inCookie);
        this.logger.verbose("Renew Idtoken Expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = Utils_1.Utils.urlRemoveQueryStringParameter(serverAuthenticationRequest.createNavigateUrl(scopes), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none;
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
     * This method must be called for processing the response received from AAD. It extracts the hash, processes the token or error, saves it in the cache and calls the registered callbacks with the result.
     * @param {string} authority authority received in the redirect response from AAD.
     * @param {TokenResponse} requestInfo an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @param {Account} account account object for which scopes are consented for. The default account is the logged in account.
     * @param {ClientInfo} clientInfo clientInfo received as part of the response comprising of fields uid and utid.
     * @param {IdToken} idToken idToken received as part of the response.
     * @ignore
     * @private
     * @hidden
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo) {
        var scope;
        var accessTokenResponse = tslib_1.__assign({}, response);
        var clientObj = new ClientInfo_1.ClientInfo(clientInfo);
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
                    if (Utils_1.Utils.isIntersectingScopes(cachedScopes, consentedScopes)) {
                        this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                    }
                }
            }
            // Generate and cache accessTokenKey and accessTokenValue
            var expiresIn = Utils_1.Utils.expiresIn(parameters[Constants_1.Constants.expiresIn]).toString();
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.accessToken], response.idToken.rawIdToken, expiresIn, clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.accessToken];
            accessTokenResponse.scopes = consentedScopes;
            var exp = Number(expiresIn);
            if (exp) {
                accessTokenResponse.expiresOn = new Date((Utils_1.Utils.now() + exp) * 1000);
            }
            else {
                this.logger.error("Could not parse expiresIn parameter. Given value: " + expiresIn);
            }
        }
        // if the response does not contain "scope" - scope is usually client_id and the token will be id_token
        else {
            scope = this.clientId;
            // Generate and cache accessTokenKey and accessTokenValue
            var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scope, clientObj.uid, clientObj.utid);
            var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(parameters[Constants_1.Constants.idToken], parameters[Constants_1.Constants.idToken], response.idToken.expiration, clientInfo);
            this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
            accessTokenResponse.scopes = [scope];
            accessTokenResponse.accessToken = parameters[Constants_1.Constants.idToken];
            var exp = Number(response.idToken.expiration);
            if (exp) {
                accessTokenResponse.expiresOn = new Date(exp * 1000);
            }
            else {
                this.logger.error("Could not parse expiresIn parameter");
            }
        }
        return accessTokenResponse;
    };
    /**
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     * @hidden
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
                var accountId = account ? this.getAccountId(account) : "";
                acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            if (this.isInteractionRequired(hashParams[Constants_1.Constants.errorDescription])) {
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
                response.accountState = stateInfo.state;
                var clientInfo = "";
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.accessToken)) {
                    this.logger.info("Fragment has access token");
                    this.acquireTokenInProgress = false;
                    // retrieve the id_token from response if present :
                    if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                        response.idToken = new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]);
                    }
                    else {
                        response = Utils_1.Utils.setResponseIdToken(response, new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.Constants.idTokenKey)));
                    }
                    // retrieve the authority from cache and replace with tenantID
                    var authorityKey_1 = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                    var authority = this.cacheStorage.getItem(authorityKey_1, this.inCookie);
                    if (!Utils_1.Utils.isEmpty(authority)) {
                        authority = Utils_1.Utils.replaceTenantPath(authority, response.tenantId);
                    }
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    response.account = Account_1.Account.createAccount(response.idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = this.getAccountId(response.account);
                    acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = Storage_1.Storage.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!Utils_1.Utils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        if (response.account && acquireTokenAccount && Utils_1.Utils.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!Utils_1.Utils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.Constants.idToken)) {
                    this.logger.info("Fragment has id token");
                    // login no longer in progress
                    this.loginInProgress = false;
                    response = Utils_1.Utils.setResponseIdToken(response, new IdToken_1.IdToken(hashParams[Constants_1.Constants.idToken]));
                    if (hashParams.hasOwnProperty(Constants_1.Constants.clientInfo)) {
                        clientInfo = hashParams[Constants_1.Constants.clientInfo];
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    authorityKey = Storage_1.Storage.generateAuthorityKey(stateInfo.state);
                    var authority = this.cacheStorage.getItem(authorityKey, this.inCookie);
                    if (!Utils_1.Utils.isEmpty(authority)) {
                        authority = Utils_1.Utils.replaceTenantPath(authority, response.idToken.tenantId);
                    }
                    this.account = Account_1.Account.createAccount(response.idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    response.account = this.account;
                    if (response.idToken && response.idToken.nonce) {
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        if (response.idToken.nonce !== this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie)) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.Constants.loginError, "Nonce Mismatch. Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + response.idToken.nonce);
                            this.logger.error("Nonce Mismatch.Expected Nonce: " + this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie) + "," + "Actual Nonce: " + response.idToken.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(this.cacheStorage.getItem(Constants_1.Constants.nonceIdToken, this.inCookie), response.idToken.nonce);
                        }
                        // Save the token
                        else {
                            this.cacheStorage.setItem(Constants_1.Constants.idTokenKey, hashParams[Constants_1.Constants.idToken]);
                            this.cacheStorage.setItem(Constants_1.Constants.msalClientInfo, clientInfo);
                            // Save idToken as access token for app itself
                            this.saveAccessToken(response, authority, hashParams, clientInfo);
                        }
                    }
                    else {
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(response.idToken);
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
        this.cacheStorage.removeAcquireTokenEntries(authorityKey, acquireTokenAccountKey);
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearCookie();
        }
        if (error) {
            throw error;
        }
        return response;
    };
    /* tslint:enable:no-string-literal */
    //#endregion
    //#region Account
    /**
     * Returns the signed in account (received from an account object created at the time of login) or null.
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.Constants.idTokenKey);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.Constants.msalClientInfo);
        if (!Utils_1.Utils.isEmpty(rawIdToken) && !Utils_1.Utils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo);
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf("|");
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * Used to filter all cached items and return a list of unique accounts based on homeAccountIdentifier.
     * @param {Array<Account>} Accounts - accounts saved in the cache.
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
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     * @hidden
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
    //#endregion
    //#region Scopes (Extract to Scopes.ts)
    // Note: "this" dependency in this section is minimal.
    // If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
    /**
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     * @hidden
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
    * Extracts scope value from the state sent with the authentication request.
    * @returns {string} scope.
    * @ignore
    * @hidden
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
     * Appends extraScopesToConsent if passed
     * @param request
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
    //#endregion
    //#region Angular
    /**
    * Broadcast messages - Used only for Angular?  *
    * @param eventName
    * @param data
    */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param account
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes, true);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, scopes, responseType, this.getRedirectUri(), this.config.auth.state);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
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
        // default resource will be clientid if nothing specified
        // App will use idtoken for calls to itself
        // check if it's staring from http or https, needs to match with app host
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (this.getHostFromUri(endpoint) === this.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            // in angular level, the url for $http interceptor call could be relative url,
            // if it's relative call, we'll treat it as app backend call.
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * tracks if login is in progress
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        var pendingCallback = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
        if (pendingCallback) {
            return true;
        }
        return this.loginInProgress;
    };
    /**
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.loginInProgress = loginInProgress;
    };
    /**
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.acquireTokenInProgress;
    };
    /**
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.acquireTokenInProgress = acquireTokenInProgress;
    };
    /**
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.config.system.logger;
    };
    //#endregion
    //#region Getters and Setters
    /**
     * Used to get the redirect uri. Evaluates redirectUri if its a function, otherwise simply returns its value.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getRedirectUri = function () {
        if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Used to get the post logout redirect uri. Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Used to get the current configuration of MSAL.js
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
        }
        return this.config;
    };
    //#endregion
    //#region String Util (Should be extracted to Utils.ts)
    /**
     * Returns the anchor part(#) of the URL
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.getHash = function (hash) {
        if (hash.indexOf("#/") > -1) {
            hash = hash.substring(hash.indexOf("#/") + 2);
        }
        else if (hash.indexOf("#") > -1) {
            hash = hash.substring(1);
        }
        return hash;
    };
    /**
     * extract URI from the host
     *
     * @param uri
     * @hidden
     */
    UserAgentApplication.prototype.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    /**
     * Utils function to create the Authentication
     * @param userObject
     * @param scopes
     * @param silentCall
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes, silentCall) {
        // if account is passed and matches the account object/or set to getAccount() from cache
        // if client-id is passed as scope, get id_token else token/id_token_token (in case no session exists)
        var tokenType;
        // acquireTokenSilent
        if (silentCall) {
            if (Utils_1.Utils.compareAccounts(accountObject, this.getAccount())) {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            else {
                tokenType = (scopes.indexOf(this.config.auth.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.id_token_token;
            }
            return tokenType;
        }
        // all other cases
        else {
            if (!Utils_1.Utils.compareAccounts(accountObject, this.getAccount())) {
                tokenType = ResponseTypes.id_token_token;
            }
            else {
                tokenType = (scopes.indexOf(this.clientId) > -1) ? ResponseTypes.id_token : ResponseTypes.token;
            }
            return tokenType;
        }
    };
    /**
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = Storage_1.Storage.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = Storage_1.Storage.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, Utils_1.Utils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        return "" + account.accountIdentifier + Constants_1.Constants.resourceDelimiter + ("" + account.homeAccountIdentifier);
    };
    /**
     * Construct 'tokenRequest' from the available data in adalIdToken
     * @param extraQueryParameters
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
    /**
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    UserAgentApplication.prototype.populateQueryParams = function (account, request, serverAuthenticationRequest, adalIdTokenObject) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.validatePromptParameter(request.prompt);
                serverAuthenticationRequest.promptValue = request.prompt;
            }
            // if the developer provides one of these, give preference to developer choice
            if (Utils_1.Utils.isSSOParam(request)) {
                queryParameters = Utils_1.Utils.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = Utils_1.Utils.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        // adds sid/login_hint if not populated; populates domain_req, login_req and domain_hint
        this.logger.verbose("Calling addHint parameters");
        queryParameters = this.addHintParameters(account, queryParameters, serverAuthenticationRequest);
        // sanity check for developer passed extraQueryParameters
        var eQParams;
        if (request) {
            eQParams = this.removeSSOParamsFromEQParams(request.extraQueryParameters);
        }
        // Populate the extraQueryParameters to be sent to the server
        serverAuthenticationRequest.queryParameters = Utils_1.Utils.generateQueryParametersString(queryParameters);
        serverAuthenticationRequest.extraQueryParameters = Utils_1.Utils.generateQueryParametersString(eQParams);
        return serverAuthenticationRequest;
    };
    /**
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    UserAgentApplication.prototype.validatePromptParameter = function (prompt) {
        if (!([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) >= 0)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * Remove sid and login_hint if passed as extraQueryParameters
     * @param eQParams
     */
    UserAgentApplication.prototype.removeSSOParamsFromEQParams = function (eQParams) {
        if (eQParams) {
            delete eQParams[Constants_1.SSOTypes.SID];
            delete eQParams[Constants_1.SSOTypes.LOGIN_HINT];
        }
        return eQParams;
    };
    tslib_1.__decorate([
        resolveTokenOnlyIfOutOfIframe
    ], UserAgentApplication.prototype, "acquireTokenSilent", null);
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Microsoft Corporation
 *  All Rights Reserved
 *  MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the 'Software'), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
 * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
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
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idToken, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        this.idToken = idToken;
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
        var homeAccountIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.decodedIdToken, idToken.sid, idToken.issuer);
    };
    return Account;
}());
exports.Account = Account;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Authority_1 = __webpack_require__(6);
var XHRClient_1 = __webpack_require__(12);
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
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        var host = this.CanonicalAuthorityUrlComponents.HostNameAndPort;
        if (this.IsInTrustedHostList(host)) {
            return resultPromise;
        }
        var client = new XHRClient_1.XhrClient();
        return client.sendRequestAsync(this.AadInstanceDiscoveryEndpointUrl, "GET", true)
            .then(function (response) {
            return response.tenant_discovery_endpoint;
        });
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param {string} The host to look up
     */
    AadAuthority.prototype.IsInTrustedHostList = function (host) {
        return AadAuthority.TrustedHostList[host.toLowerCase()];
    };
    AadAuthority.AadInstanceDiscoveryEndpoint = "https://login.microsoftonline.com/common/discovery/instance";
    AadAuthority.TrustedHostList = {
        "login.windows.net": "login.windows.net",
        "login.chinacloudapi.cn": "login.chinacloudapi.cn",
        "login.cloudgovapi.us": "login.cloudgovapi.us",
        "login.microsoftonline.com": "login.microsoftonline.com",
        "login.microsoftonline.de": "login.microsoftonline.de",
        "login.microsoftonline.us": "login.microsoftonline.us"
    };
    return AadAuthority;
}(Authority_1.Authority));
exports.AadAuthority = AadAuthority;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
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
            xhr.open(method, url, /*async: */ true);
            if (enableCaching) {
                // TODO: (shivb) ensure that this can be cached
                // xhr.setRequestHeader("Cache-Control", "Public");
            }
            xhr.onload = function (ev) {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Logger_1 = __webpack_require__(7);
var Utils_1 = __webpack_require__(0);
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return Utils_1.Utils.getDefaultRedirectUri(); },
    postLogoutRedirectUri: function () { return Utils_1.Utils.getDefaultRedirectUri(); },
    state: "",
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
/**
 * Function to set the default options when not explicitly set
 *
 * @param TAuthOptions
 * @param TCacheOptions
 * @param TSystemOptions
 * @param TFrameworkOptions
 *
 * @returns TConfiguration object
 */
// destructure with default settings
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var ServerError_1 = __webpack_require__(8);
exports.InteractionRequiredAuthErrorMessage = {
    loginRequired: {
        code: "login_required"
    },
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentApplication_1 = __webpack_require__(9);
exports.UserAgentApplication = UserAgentApplication_1.UserAgentApplication;
var Logger_1 = __webpack_require__(7);
exports.Logger = Logger_1.Logger;
var Logger_2 = __webpack_require__(7);
exports.LogLevel = Logger_2.LogLevel;
var Account_1 = __webpack_require__(10);
exports.Account = Account_1.Account;
var Constants_1 = __webpack_require__(2);
exports.Constants = Constants_1.Constants;
var Authority_1 = __webpack_require__(6);
exports.Authority = Authority_1.Authority;
var UserAgentApplication_2 = __webpack_require__(9);
exports.CacheResult = UserAgentApplication_2.CacheResult;
var Configuration_1 = __webpack_require__(13);
exports.CacheLocation = Configuration_1.CacheLocation;
exports.Configuration = Configuration_1.Configuration;
var AuthenticationParameters_1 = __webpack_require__(26);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(27);
exports.AuthResponse = AuthResponse_1.AuthResponse;
// Errors
var AuthError_1 = __webpack_require__(5);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(3);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(8);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(4);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(14);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = Utils_1.Utils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
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
        this.scopes = scope;
        this.nonce = Utils_1.Utils.createNewGuid();
        this.state = state && !Utils_1.Utils.isEmpty(state) ? Utils_1.Utils.createNewGuid() + "|" + state : Utils_1.Utils.createNewGuid();
        // TODO: Change this to user passed vs generated with the new PR
        this.correlationId = Utils_1.Utils.createNewGuid();
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = Utils_1.Utils.getLibraryVersion();
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
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    ServerRequestParameters.prototype.createNavigateUrl = function (scopes) {
        var str = this.createNavigationUrlString(scopes);
        var authEndpoint = this.authorityInstance.AuthorizationEndpoint;
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
    ServerRequestParameters.prototype.createNavigationUrlString = function (scopes) {
        if (!scopes) {
            scopes = [this.clientId];
        }
        if (scopes.indexOf(this.clientId) === -1) {
            scopes.push(this.clientId);
        }
        var str = [];
        str.push("response_type=" + this.responseType);
        this.translateclientIdUsedInScope(scopes);
        str.push("scope=" + encodeURIComponent(this.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(this.clientId));
        str.push("redirect_uri=" + encodeURIComponent(this.redirectUri));
        str.push("state=" + encodeURIComponent(this.state));
        str.push("nonce=" + encodeURIComponent(this.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + this.xClientSku);
        str.push("x-client-Ver=" + this.xClientVer);
        if (this.promptValue) {
            str.push("prompt=" + encodeURI(this.promptValue));
        }
        if (this.queryParameters) {
            str.push(this.queryParameters);
        }
        if (this.extraQueryParameters) {
            str.push(this.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(this.correlationId));
        return str;
    };
    /**
     * append the required scopes: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes
     * @param scopes
     */
    ServerRequestParameters.prototype.translateclientIdUsedInScope = function (scopes) {
        var clientIdIndex = scopes.indexOf(this.clientId);
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
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ServerRequestParameters.prototype.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ClientAuthError_1 = __webpack_require__(3);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo) {
        if (!rawClientInfo || Utils_1.Utils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = Utils_1.Utils.base64DecodeStringUrlSafe(rawClientInfo);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ClientAuthError_1 = __webpack_require__(3);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (Utils_1.Utils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.decodedIdToken = Utils_1.Utils.extractIdToken(rawIdToken);
            if (this.decodedIdToken) {
                if (this.decodedIdToken.hasOwnProperty("iss")) {
                    this.issuer = this.decodedIdToken["iss"];
                }
                if (this.decodedIdToken.hasOwnProperty("oid")) {
                    this.objectId = this.decodedIdToken["oid"];
                }
                if (this.decodedIdToken.hasOwnProperty("sub")) {
                    this.subject = this.decodedIdToken["sub"];
                }
                if (this.decodedIdToken.hasOwnProperty("tid")) {
                    this.tenantId = this.decodedIdToken["tid"];
                }
                if (this.decodedIdToken.hasOwnProperty("ver")) {
                    this.version = this.decodedIdToken["ver"];
                }
                if (this.decodedIdToken.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.decodedIdToken["preferred_username"];
                }
                if (this.decodedIdToken.hasOwnProperty("name")) {
                    this.name = this.decodedIdToken["name"];
                }
                if (this.decodedIdToken.hasOwnProperty("nonce")) {
                    this.nonce = this.decodedIdToken["nonce"];
                }
                if (this.decodedIdToken.hasOwnProperty("exp")) {
                    this.expiration = this.decodedIdToken["exp"];
                }
                if (this.decodedIdToken.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.decodedIdToken["home_oid"];
                }
                if (this.decodedIdToken.hasOwnProperty("sid")) {
                    this.sid = this.decodedIdToken["sid"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            // TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
            // Need to add better error handling here to account for being unable to decode jwts.
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var AccessTokenCacheItem_1 = __webpack_require__(23);
var Constants_2 = __webpack_require__(2);
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
    Storage.prototype.removeAcquireTokenEntries = function (authorityKey, acquireTokenAccountKey) {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if ((authorityKey !== "" && key.indexOf(authorityKey) > -1) || (acquireTokenAccountKey !== "" && key.indexOf(acquireTokenAccountKey) > -1)) {
                        this.removeItem(key);
                    }
                }
            }
        }
    };
    Storage.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        if (storage) {
            var key = void 0;
            for (key in storage) {
                if (storage.hasOwnProperty(key)) {
                    if (key.indexOf(Constants_1.Constants.msal) !== -1) {
                        this.setItem(key, "");
                    }
                    if (key.indexOf(Constants_1.Constants.renewStatus) !== -1) {
                        this.removeItem(key);
                    }
                }
            }
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
        return Constants_2.CacheKeys.ACQUIRE_TOKEN_USER + Constants_1.Constants.resourceDelimiter +
            ("" + accountId) + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    Storage.generateAuthorityKey = function (state) {
        return Constants_2.CacheKeys.AUTHORITY + Constants_1.Constants.resourceDelimiter + ("" + state);
    };
    return Storage;
}());
exports.Storage = Storage;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var Utils_1 = __webpack_require__(0);
var AadAuthority_1 = __webpack_require__(11);
var B2cAuthority_1 = __webpack_require__(25);
var Authority_1 = __webpack_require__(6);
var ClientConfigurationError_1 = __webpack_require__(4);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
    * Parse the url and determine the type of authority
    */
    AuthorityFactory.DetectAuthorityFromUrl = function (authorityUrl) {
        authorityUrl = Utils_1.Utils.CanonicalizeUri(authorityUrl);
        var components = Utils_1.Utils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        switch (pathSegments[0]) {
            case "tfp":
                return Authority_1.AuthorityType.B2C;
            case "adfs":
                return Authority_1.AuthorityType.Adfs;
            default:
                return Authority_1.AuthorityType.Aad;
        }
    };
    /**
    * Create an authority object of the correct type based on the url
    * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
    */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority) {
        if (Utils_1.Utils.isEmpty(authorityUrl)) {
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AadAuthority_1 = __webpack_require__(11);
var Authority_1 = __webpack_require__(6);
var ClientConfigurationError_1 = __webpack_require__(4);
var Utils_1 = __webpack_require__(0);
/**
 * @hidden
 */
var B2cAuthority = /** @class */ (function (_super) {
    tslib_1.__extends(B2cAuthority, _super);
    function B2cAuthority(authority, validateAuthority) {
        var _this = _super.call(this, authority, validateAuthority) || this;
        var urlComponents = Utils_1.Utils.GetUrlComponents(authority);
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
        var _this = this;
        var resultPromise = new Promise(function (resolve, reject) {
            return resolve(_this.DefaultOpenIdConfigurationEndpoint);
        });
        if (!this.IsValidationEnabled) {
            return resultPromise;
        }
        if (this.IsInTrustedHostList(this.CanonicalAuthorityUrlComponents.HostNameAndPort)) {
            return resultPromise;
        }
        return new Promise(function (resolve, reject) {
            return reject(ClientConfigurationError_1.ClientConfigurationErrorMessage.unsupportedAuthorityValidation);
        });
    };
    return B2cAuthority;
}(AadAuthority_1.AadAuthority));
exports.B2cAuthority = B2cAuthority;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9zcmMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9DbGllbnRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9BdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9TZXJ2ZXJFcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1VzZXJBZ2VudEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjb3VudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FhZEF1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1hIUkNsaWVudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BY2Nlc3NUb2tlbktleS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuVmFsdWUudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0NsaWVudEluZm8udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9JZFRva2VuLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aG9yaXR5RmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0IyY0F1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0F1dGhSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNB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RSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsU0FBUztvQkFDakQsS0FBSyxDQUFDO3dCQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsU0FBUztvQkFDakQ7d0JBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUFDLFNBQVM7eUJBQUU7d0JBQzVHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxNQUFNO3lCQUFFO3dCQUN0RixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFBQyxNQUFNO3lCQUFFO3dCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FB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LE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsY0FBYyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEgsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxSSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FBQztJQUNsRixTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMs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a0MsQ0FBQztRQUFoRCxDQUFnRCxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNsRixPQUFPLGFBQWEsQ0FBQztTQUN0QjtRQUVELE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxhQUFNLENBQUMsMERBQStCLENBQUMsOEJBQThCLENBQUM7UUFBdEUsQ0FBc0UsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQ0FuQ2lDLDJCQUFZLEdBbUM3QztBQW5DWSxvQ0FBWTs7Ozs7Ozs7O0FDWHpCLDREQUE0RDtBQUM1RCxrQ0FBa0M7Ozs7Ozs7Ozs7QUNEbEMsNERBQTREO0FBQzVELGtDQUFrQyIsImZpbGUiOiJtc2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJNc2FsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1zYWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBJVXJpIH0gZnJvbSBcIi4vSVVyaVwiO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB7Q29uc3RhbnRzLCBTU09UeXBlcywgUHJvbXB0U3RhdGV9IGZyb20gXCIuL0NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBRUERpY3QgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IEF1dGhSZXNwb25zZSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xuXG5pbXBvcnQgeyBMaWJyYXJ5IH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuXG4gIC8vI3JlZ2lvbiBHZW5lcmFsIFV0aWxcblxuICAvKipcbiAgICogVXRpbHMgZnVuY3Rpb24gdG8gY29tcGFyZSB0d28gQWNjb3VudCBvYmplY3RzIC0gdXNlZCB0byBjaGVjayBpZiB0aGUgc2FtZSB1c2VyIGFjY291bnQgaXMgbG9nZ2VkIGluXG4gICAqXG4gICAqIEBwYXJhbSBhMTogQWNjb3VudCBvYmplY3RcbiAgICogQHBhcmFtIGEyOiBBY2NvdW50IG9iamVjdFxuICAgKi9cbiAgc3RhdGljIGNvbXBhcmVBY2NvdW50cyhhMTogQWNjb3VudCwgYTI6IEFjY291bnQpOiBib29sZWFuIHtcbiAgIGlmICghYTEgfHwgIWEyKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIGlmIChhMS5ob21lQWNjb3VudElkZW50aWZpZXIgJiYgYTIuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XG4gICAgICBpZiAoYTEuaG9tZUFjY291bnRJZGVudGlmaWVyID09PSBhMi5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNpbWFsIHRvIEhleFxuICAgKlxuICAgKiBAcGFyYW0gbnVtXG4gICAqL1xuICBzdGF0aWMgZGVjaW1hbFRvSGV4KG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICB2YXIgaGV4OiBzdHJpbmcgPSBudW0udG9TdHJpbmcoMTYpO1xuICAgIHdoaWxlIChoZXgubGVuZ3RoIDwgMikge1xuICAgICAgaGV4ID0gXCIwXCIgKyBoZXg7XG4gICAgfVxuICAgIHJldHVybiBoZXg7XG4gIH1cblxuICAvKipcbiAgICogTVNBTCBKUyBMaWJyYXJ5IFZlcnNpb25cbiAgICovXG4gIHN0YXRpYyBnZXRMaWJyYXJ5VmVyc2lvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBMaWJyYXJ5LnZlcnNpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyByYW5kb20gR1VJRCAtIHVzZWQgdG8gcG9wdWxhdGUgc3RhdGU/XG4gICAqIEByZXR1cm5zIHN0cmluZyAoR1VJRClcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVOZXdHdWlkKCk6IHN0cmluZyB7XG4gICAgLy8gUkZDNDEyMjogVGhlIHZlcnNpb24gNCBVVUlEIGlzIG1lYW50IGZvciBnZW5lcmF0aW5nIFVVSURzIGZyb20gdHJ1bHktcmFuZG9tIG9yXG4gICAgLy8gcHNldWRvLXJhbmRvbSBudW1iZXJzLlxuICAgIC8vIFRoZSBhbGdvcml0aG0gaXMgYXMgZm9sbG93czpcbiAgICAvLyAgICAgU2V0IHRoZSB0d28gbW9zdCBzaWduaWZpY2FudCBiaXRzIChiaXRzIDYgYW5kIDcpIG9mIHRoZVxuICAgIC8vICAgICAgICBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIHRvIHplcm8gYW5kIG9uZSwgcmVzcGVjdGl2ZWx5LlxuICAgIC8vICAgICBTZXQgdGhlIGZvdXIgbW9zdCBzaWduaWZpY2FudCBiaXRzIChiaXRzIDEyIHRocm91Z2ggMTUpIG9mIHRoZVxuICAgIC8vICAgICAgICB0aW1lX2hpX2FuZF92ZXJzaW9uIGZpZWxkIHRvIHRoZSA0LWJpdCB2ZXJzaW9uIG51bWJlciBmcm9tXG4gICAgLy8gICAgICAgIFNlY3Rpb24gNC4xLjMuIFZlcnNpb240XG4gICAgLy8gICAgIFNldCBhbGwgdGhlIG90aGVyIGJpdHMgdG8gcmFuZG9tbHkgKG9yIHBzZXVkby1yYW5kb21seSkgY2hvc2VuXG4gICAgLy8gICAgIHZhbHVlcy5cbiAgICAvLyBVVUlEICAgICAgICAgICAgICAgICAgID0gdGltZS1sb3cgXCItXCIgdGltZS1taWQgXCItXCJ0aW1lLWhpZ2gtYW5kLXZlcnNpb24gXCItXCJjbG9jay1zZXEtcmVzZXJ2ZWQgYW5kIGxvdygyaGV4T2N0ZXQpXCItXCIgbm9kZVxuICAgIC8vIHRpbWUtbG93ICAgICAgICAgICAgICAgPSA0aGV4T2N0ZXRcbiAgICAvLyB0aW1lLW1pZCAgICAgICAgICAgICAgID0gMmhleE9jdGV0XG4gICAgLy8gdGltZS1oaWdoLWFuZC12ZXJzaW9uICA9IDJoZXhPY3RldFxuICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgPSBoZXhPY3RldDpcbiAgICAvLyBjbG9jay1zZXEtbG93ICAgICAgICAgID0gaGV4T2N0ZXRcbiAgICAvLyBub2RlICAgICAgICAgICAgICAgICAgID0gNmhleE9jdGV0XG4gICAgLy8gRm9ybWF0OiB4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHhcbiAgICAvLyB5IGNvdWxkIGJlIDEwMDAsIDEwMDEsIDEwMTAsIDEwMTEgc2luY2UgbW9zdCBzaWduaWZpY2FudCB0d28gYml0cyBuZWVkcyB0byBiZSAxMFxuICAgIC8vIHkgdmFsdWVzIGFyZSA4LCA5LCBBLCBCXG5cbiAgICBjb25zdCBjcnlwdG9PYmo6IENyeXB0byA9IHdpbmRvdy5jcnlwdG87IC8vIGZvciBJRSAxMVxuICAgIGlmIChjcnlwdG9PYmogJiYgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgY29uc3QgYnVmZmVyOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgY3J5cHRvT2JqLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xuXG4gICAgICAvL2J1ZmZlcls2XSBhbmQgYnVmZmVyWzddIHJlcHJlc2VudHMgdGhlIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQuIFdlIHdpbGwgc2V0IHRoZSBmb3VyIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoNCB0aHJvdWdoIDcpIG9mIGJ1ZmZlcls2XSB0byByZXByZXNlbnQgZGVjaW1hbCBudW1iZXIgNCAoVVVJRCB2ZXJzaW9uIG51bWJlcikuXG4gICAgICBidWZmZXJbNl0gfD0gMHg0MDsgLy9idWZmZXJbNl0gfCAwMTAwMDAwMCB3aWxsIHNldCB0aGUgNiBiaXQgdG8gMS5cbiAgICAgIGJ1ZmZlcls2XSAmPSAweDRmOyAvL2J1ZmZlcls2XSAmIDAxMDAxMTExIHdpbGwgc2V0IHRoZSA0LCA1LCBhbmQgNyBiaXQgdG8gMCBzdWNoIHRoYXQgYml0cyA0LTcgPT0gMDEwMCA9IFwiNFwiLlxuXG4gICAgICAvL2J1ZmZlcls4XSByZXByZXNlbnRzIHRoZSBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkIGZpZWxkLiBXZSB3aWxsIHNldCB0aGUgdHdvIG1vc3Qgc2lnbmlmaWNhbnQgYml0cyAoNiBhbmQgNykgb2YgdGhlIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgdG8gemVybyBhbmQgb25lLCByZXNwZWN0aXZlbHkuXG4gICAgICBidWZmZXJbOF0gfD0gMHg4MDsgLy9idWZmZXJbOF0gfCAxMDAwMDAwMCB3aWxsIHNldCB0aGUgNyBiaXQgdG8gMS5cbiAgICAgIGJ1ZmZlcls4XSAmPSAweGJmOyAvL2J1ZmZlcls4XSAmIDEwMTExMTExIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAwLlxuXG4gICAgICByZXR1cm4gVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclswXSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzFdKVxuICAgICAgICArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMl0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclszXSlcbiAgICAgICAgKyBcIi1cIiArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls1XSlcbiAgICAgICAgKyBcIi1cIiArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbNl0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls3XSlcbiAgICAgICAgKyBcIi1cIiArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbOF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls5XSlcbiAgICAgICAgKyBcIi1cIiArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTBdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTFdKVxuICAgICAgICArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTJdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTNdKVxuICAgICAgICArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTRdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMTVdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBndWlkSG9sZGVyOiBzdHJpbmcgPSBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiO1xuICAgICAgY29uc3QgaGV4OiBzdHJpbmcgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbiAgICAgIGxldCByOiBudW1iZXIgPSAwO1xuICAgICAgbGV0IGd1aWRSZXNwb25zZTogc3RyaW5nID0gXCJcIjtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAzNjsgaSsrKSB7XG4gICAgICAgIGlmIChndWlkSG9sZGVyW2ldICE9PSBcIi1cIiAmJiBndWlkSG9sZGVyW2ldICE9PSBcIjRcIikge1xuICAgICAgICAgIC8vIGVhY2ggeCBhbmQgeSBuZWVkcyB0byBiZSByYW5kb21cbiAgICAgICAgICByID0gTWF0aC5yYW5kb20oKSAgKiAxNiB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGd1aWRIb2xkZXJbaV0gPT09IFwieFwiKSB7XG4gICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcbiAgICAgICAgfSBlbHNlIGlmIChndWlkSG9sZGVyW2ldID09PSBcInlcIikge1xuICAgICAgICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgZmlyc3QgaGV4IGlzIGZpbHRlcmVkIGFuZCByZW1haW5pbmcgaGV4IHZhbHVlcyBhcmUgcmFuZG9tXG4gICAgICAgICAgciAmPSAweDM7IC8vIGJpdCBhbmQgd2l0aCAwMDExIHRvIHNldCBwb3MgMiB0byB6ZXJvID8wPz9cbiAgICAgICAgICByIHw9IDB4ODsgLy8gc2V0IHBvcyAzIHRvIDEgYXMgMT8/P1xuICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGd1aWRIb2xkZXJbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBndWlkUmVzcG9uc2U7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFRpbWVcblxuICAvKipcbiAgICogUmV0dXJucyB0aW1lIGluIHNlY29uZHMgZm9yIGV4cGlyYXRpb24gYmFzZWQgb24gc3RyaW5nIHZhbHVlIHBhc3NlZCBpbi5cbiAgICpcbiAgICogQHBhcmFtIGV4cGlyZXNcbiAgICovXG4gIHN0YXRpYyBleHBpcmVzSW4oZXhwaXJlczogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAvLyBpZiBBQUQgZGlkIG5vdCBzZW5kIFwiZXhwaXJlc19pblwiIHByb3BlcnR5LCB1c2UgZGVmYXVsdCBleHBpcmF0aW9uIG9mIDM1OTkgc2Vjb25kcywgZm9yIHNvbWUgcmVhc29uIEFBRCBzZW5kcyAzNTk5IGFzIFwiZXhwaXJlc19pblwiIHZhbHVlIGluc3RlYWQgb2YgMzYwMFxuICAgICBpZiAoIWV4cGlyZXMpIHtcbiAgICAgICAgIGV4cGlyZXMgPSBcIjM1OTlcIjtcbiAgICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub3coKSArIHBhcnNlSW50KGV4cGlyZXMsIDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSBpbiBVbml4IHRpbWUuIERhdGUuZ2V0VGltZSgpIHJldHVybnMgaW4gbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgc3RhdGljIG5vdygpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMC4wKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBTdHJpbmcgT3BzXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgc3RyaW5nIGlzIGVtcHR5XG4gICAqXG4gICAqIEBwYXJhbSBzdHJcbiAgICovXG4gIHN0YXRpYyBpc0VtcHR5KHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSBcInVuZGVmaW5lZFwiIHx8ICFzdHIgfHwgMCA9PT0gc3RyLmxlbmd0aCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gVG9rZW4gUHJvY2Vzc2luZyAoRXh0cmFjdCB0byBUb2tlblByb2Nlc3NpbmcudHMpXG5cbiAgLyoqXG4gICAqIGRlY29kZSBhIEpXVFxuICAgKlxuICAgKiBAcGFyYW0gand0VG9rZW5cbiAgICovXG4gIHN0YXRpYyBkZWNvZGVKd3Qoand0VG9rZW46IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eShqd3RUb2tlbikpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBpZFRva2VuUGFydHNSZWdleCA9IC9eKFteXFwuXFxzXSopXFwuKFteXFwuXFxzXSspXFwuKFteXFwuXFxzXSopJC87XG4gICAgY29uc3QgbWF0Y2hlcyA9IGlkVG9rZW5QYXJ0c1JlZ2V4LmV4ZWMoand0VG9rZW4pO1xuICAgIGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA8IDQpIHtcbiAgICAgIC8vdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLndhcm4oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gaXMgbm90IHBhcnNlYWJsZS5cIik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY3JhY2tlZFRva2VuID0ge1xuICAgICAgaGVhZGVyOiBtYXRjaGVzWzFdLFxuICAgICAgSldTUGF5bG9hZDogbWF0Y2hlc1syXSxcbiAgICAgIEpXU1NpZzogbWF0Y2hlc1szXVxuICAgIH07XG4gICAgcmV0dXJuIGNyYWNrZWRUb2tlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IElkVG9rZW4gYnkgZGVjb2RpbmcgdGhlIFJBV0lkVG9rZW5cbiAgICpcbiAgICogQHBhcmFtIGVuY29kZWRJZFRva2VuXG4gICAqL1xuICBzdGF0aWMgZXh0cmFjdElkVG9rZW4oZW5jb2RlZElkVG9rZW46IHN0cmluZyk6IGFueSB7XG4gICAgLy8gaWQgdG9rZW4gd2lsbCBiZSBkZWNvZGVkIHRvIGdldCB0aGUgdXNlcm5hbWVcbiAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSB0aGlzLmRlY29kZUp3dChlbmNvZGVkSWRUb2tlbik7XG4gICAgaWYgKCFkZWNvZGVkVG9rZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgYmFzZTY0SWRUb2tlbiA9IGRlY29kZWRUb2tlbi5KV1NQYXlsb2FkO1xuICAgICAgY29uc3QgYmFzZTY0RGVjb2RlZCA9IHRoaXMuYmFzZTY0RGVjb2RlU3RyaW5nVXJsU2FmZShiYXNlNjRJZFRva2VuKTtcbiAgICAgIGlmICghYmFzZTY0RGVjb2RlZCkge1xuICAgICAgICAvL3RoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5pbmZvKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGNvdWxkIG5vdCBiZSBiYXNlNjQgdXJsIHNhZmUgZGVjb2RlZC5cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgLy8gRUNNQSBzY3JpcHQgaGFzIEpTT04gYnVpbHQtaW4gc3VwcG9ydFxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYmFzZTY0RGVjb2RlZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvL3RoaXMuX3JlcXVlc3RDb250ZXh0LmxvZ2dlci5lcnJvcihcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBjb3VsZCBub3QgYmUgZGVjb2RlZFwiICsgZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBFbmNvZGUgYW5kIERlY29kZVxuXG4gIC8qKlxuICAgKiBlbmNvZGluZyBzdHJpbmcgdG8gYmFzZTY0IC0gcGxhdGZvcm0gc3BlY2lmaWMgY2hlY2tcbiAgICpcbiAgICogQHBhcmFtIGlucHV0XG4gICAqL1xuICBzdGF0aWMgYmFzZTY0RW5jb2RlU3RyaW5nVXJsU2FmZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBodG1sNSBzaG91bGQgc3VwcG9ydCBhdG9iIGZ1bmN0aW9uIGZvciBkZWNvZGluZ1xuICAgIGlmICh3aW5kb3cuYnRvYSkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5idG9hKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5lbmNvZGUoaW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGluZyBiYXNlNjQgdG9rZW4gLSBwbGF0Zm9ybSBzcGVjaWZpYyBjaGVja1xuICAgKlxuICAgKiBAcGFyYW0gYmFzZTY0SWRUb2tlblxuICAgKi9cbiAgc3RhdGljIGJhc2U2NERlY29kZVN0cmluZ1VybFNhZmUoYmFzZTY0SWRUb2tlbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyBodG1sNSBzaG91bGQgc3VwcG9ydCBhdG9iIGZ1bmN0aW9uIGZvciBkZWNvZGluZ1xuICAgIGJhc2U2NElkVG9rZW4gPSBiYXNlNjRJZFRva2VuLnJlcGxhY2UoLy0vZywgXCIrXCIpLnJlcGxhY2UoL18vZywgXCIvXCIpO1xuICAgIGlmICh3aW5kb3cuYXRvYikge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuYXRvYihiYXNlNjRJZFRva2VuKSkpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZGVjb2RlKGJhc2U2NElkVG9rZW4pKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGJhc2U2NCBlbmNvZGUgYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIGlucHV0XG4gICAqL1xuICAvLyBUT0RPOiBSZW5hbWUgdG8gc3BlY2lmeSB0eXBlIG9mIGVuY29kaW5nXG4gIHN0YXRpYyBlbmNvZGUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qga2V5U3RyOiBzdHJpbmcgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XG4gICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgbGV0IGNocjE6IG51bWJlciwgY2hyMjogbnVtYmVyLCBjaHIzOiBudW1iZXIsIGVuYzE6IG51bWJlciwgZW5jMjogbnVtYmVyLCBlbmMzOiBudW1iZXIsIGVuYzQ6IG51bWJlcjtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICBpbnB1dCA9IHRoaXMudXRmOEVuY29kZShpbnB1dCk7XG5cbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgY2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuXG4gICAgICBlbmMxID0gY2hyMSA+PiAyO1xuICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XG4gICAgICBlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XG4gICAgICBlbmM0ID0gY2hyMyAmIDYzO1xuXG4gICAgICBpZiAoaXNOYU4oY2hyMikpIHtcbiAgICAgICAgZW5jMyA9IGVuYzQgPSA2NDtcbiAgICAgIH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHtcbiAgICAgICAgZW5jNCA9IDY0O1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBvdXRwdXQgKyBrZXlTdHIuY2hhckF0KGVuYzEpICsga2V5U3RyLmNoYXJBdChlbmMyKSArIGtleVN0ci5jaGFyQXQoZW5jMykgKyBrZXlTdHIuY2hhckF0KGVuYzQpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQucmVwbGFjZSgvXFwrL2csIFwiLVwiKS5yZXBsYWNlKC9cXC8vZywgXCJfXCIpLnJlcGxhY2UoLz0rJC8sIFwiXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHV0ZjggZW5jb2RlIGEgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dFxuICAgKi9cbiAgc3RhdGljIHV0ZjhFbmNvZGUoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIik7XG4gICAgdmFyIHV0ZnRleHQgPSBcIlwiO1xuXG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBpbnB1dC5sZW5ndGg7IG4rKykge1xuICAgICAgdmFyIGMgPSBpbnB1dC5jaGFyQ29kZUF0KG4pO1xuXG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICgoYyA+IDEyNykgJiYgKGMgPCAyMDQ4KSkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjID4+IDYpICYgNjMpIHwgMTI4KTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXRmdGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgYSBiYXNlNjQgdG9rZW4gc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSBiYXNlNjRJZFRva2VuXG4gICAqL1xuICAvLyBUT0RPOiBSZW5hbWUgdG8gc3BlY2lmeSB0eXBlIG9mIGVuY29kaW5nXG4gIHN0YXRpYyBkZWNvZGUoYmFzZTY0SWRUb2tlbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgY29kZXMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCI7XG4gICAgYmFzZTY0SWRUb2tlbiA9IFN0cmluZyhiYXNlNjRJZFRva2VuKS5yZXBsYWNlKC89KyQvLCBcIlwiKTtcbiAgICB2YXIgbGVuZ3RoID0gYmFzZTY0SWRUb2tlbi5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAlIDQgPT09IDEpIHtcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlbkVuY29kaW5nRXJyb3IoYmFzZTY0SWRUb2tlbik7XG4gICAgfVxuICAgIGxldCBoMTogbnVtYmVyLCBoMjogbnVtYmVyLCBoMzogbnVtYmVyLCBoNDogbnVtYmVyLCBiaXRzOiBudW1iZXIsIGMxOiBudW1iZXIsIGMyOiBudW1iZXIsIGMzOiBudW1iZXIsIGRlY29kZWQgPSBcIlwiO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgIC8vRXZlcnkgNCBiYXNlNjQgZW5jb2RlZCBjaGFyYWN0ZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gMyBieXRlIHN0cmluZywgd2hpY2ggaXMgMjQgYml0c1xuICAgICAgLy8gdGhlbiA2IGJpdHMgcGVyIGJhc2U2NCBlbmNvZGVkIGNoYXJhY3RlclxuICAgICAgaDEgPSBjb2Rlcy5pbmRleE9mKGJhc2U2NElkVG9rZW4uY2hhckF0KGkpKTtcbiAgICAgIGgyID0gY29kZXMuaW5kZXhPZihiYXNlNjRJZFRva2VuLmNoYXJBdChpICsgMSkpO1xuICAgICAgaDMgPSBjb2Rlcy5pbmRleE9mKGJhc2U2NElkVG9rZW4uY2hhckF0KGkgKyAyKSk7XG4gICAgICBoNCA9IGNvZGVzLmluZGV4T2YoYmFzZTY0SWRUb2tlbi5jaGFyQXQoaSArIDMpKTtcbiAgICAgIC8vIEZvciBwYWRkaW5nLCBpZiBsYXN0IHR3byBhcmUgXCI9XCJcbiAgICAgIGlmIChpICsgMiA9PT0gbGVuZ3RoIC0gMSkge1xuICAgICAgICBiaXRzID0gaDEgPDwgMTggfCBoMiA8PCAxMiB8IGgzIDw8IDY7XG4gICAgICAgIGMxID0gYml0cyA+PiAxNiAmIDI1NTtcbiAgICAgICAgYzIgPSBiaXRzID4+IDggJiAyNTU7XG4gICAgICAgIGRlY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSwgYzIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIGlmIGxhc3Qgb25lIGlzIFwiPVwiXG4gICAgICBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoIC0gMSkge1xuICAgICAgICBiaXRzID0gaDEgPDwgMTggfCBoMiA8PCAxMjtcbiAgICAgICAgYzEgPSBiaXRzID4+IDE2ICYgMjU1O1xuICAgICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNiB8IGg0O1xuICAgICAgLy8gdGhlbiBjb252ZXJ0IHRvIDMgYnl0ZSBjaGFyc1xuICAgICAgYzEgPSBiaXRzID4+IDE2ICYgMjU1O1xuICAgICAgYzIgPSBiaXRzID4+IDggJiAyNTU7XG4gICAgICBjMyA9IGJpdHMgJiAyNTU7XG4gICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEsIGMyLCBjMyk7XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlc2VyaWFsaXplIGEgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgc3RhdGljIGRlc2VyaWFsaXplKHF1ZXJ5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCBtYXRjaDogQXJyYXk8c3RyaW5nPjsgLy8gUmVnZXggZm9yIHJlcGxhY2luZyBhZGRpdGlvbiBzeW1ib2wgd2l0aCBhIHNwYWNlXG4gICAgY29uc3QgcGwgPSAvXFwrL2c7XG4gICAgY29uc3Qgc2VhcmNoID0gLyhbXiY9XSspPShbXiZdKikvZztcbiAgICBjb25zdCBkZWNvZGUgPSAoczogc3RyaW5nKSA9PiBkZWNvZGVVUklDb21wb25lbnQocy5yZXBsYWNlKHBsLCBcIiBcIikpO1xuICAgIGNvbnN0IG9iajoge30gPSB7fTtcbiAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHF1ZXJ5KTtcbiAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgIG9ialtkZWNvZGUobWF0Y2hbMV0pXSA9IGRlY29kZShtYXRjaFsyXSk7XG4gICAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHF1ZXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBTY29wZXMgKGV4dHJhY3QgdG8gU2NvcGVzLnRzKVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGVyZSBhcmUgZHVwIHNjb3BlcyBpbiBhIGdpdmVuIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgaW50ZXJzZWN0aW5nIHNjb3BlcyBpc24ndCBhIGdyZWF0IG5hbWUgZm9yIGR1cGxpY2F0ZSBjaGVja2VyXG4gIHN0YXRpYyBpc0ludGVyc2VjdGluZ1Njb3BlcyhjYWNoZWRTY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY29wZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNhY2hlZFNjb3Blcy5pbmRleE9mKHNjb3Blc1tpXS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBnaXZlbiBzY29wZSBpcyBwcmVzZW50IGluIHRoZSByZXF1ZXN0XG4gICAqXG4gICAqIEBwYXJhbSBjYWNoZWRTY29wZXNcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgc3RhdGljIGNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgICBjYWNoZWRTY29wZXMgPSB0aGlzLmNvbnZlcnRUb0xvd2VyQ2FzZShjYWNoZWRTY29wZXMpO1xuICAgIHJldHVybiBzY29wZXMuZXZlcnkoKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IGNhY2hlZFNjb3Blcy5pbmRleE9mKHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPj0gMCk7XG4gIH1cblxuICAvKipcbiAgICogdG9Mb3dlclxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcbiAgc3RhdGljIGNvbnZlcnRUb0xvd2VyQ2FzZShzY29wZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gc2NvcGVzLm1hcChzY29wZSA9PiBzY29wZS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW1vdmUgb25lIGVsZW1lbnQgZnJvbSBhIHNjb3BlIGFycmF5XG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqL1xuICAvLyBUT0RPOiBSZW5hbWUgdGhpcywgdG9vIGdlbmVyaWMgbmFtZSBmb3IgYSBmdW5jdGlvbiB0aGF0IG9ubHkgZGVhbHMgd2l0aCBzY29wZXNcbiAgc3RhdGljIHJlbW92ZUVsZW1lbnQoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHNjb3Blcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHNjb3BlKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBVUkwgUHJvY2Vzc2luZyAoRXh0cmFjdCB0byBVcmxQcm9jZXNzaW5nLnRzPylcblxuICBzdGF0aWMgZ2V0RGVmYXVsdFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCI/XCIpWzBdLnNwbGl0KFwiI1wiKVswXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIHVybCBsaWtlIGh0dHBzOi8vYTpiL2NvbW1vbi9kP2U9ZiNnLCBhbmQgYSB0ZW5hbnRJZCwgcmV0dXJucyBodHRwczovL2E6Yi90ZW5hbnRJZC9kXG4gICAqIEBwYXJhbSBocmVmIFRoZSB1cmxcbiAgICogQHBhcmFtIHRlbmFudElkIFRoZSB0ZW5hbnQgaWQgdG8gcmVwbGFjZVxuICAgKi9cbiAgc3RhdGljIHJlcGxhY2VUZW5hbnRQYXRoKHVybDogc3RyaW5nLCB0ZW5hbnRJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHVybCA9IHVybC50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIHVybE9iamVjdCA9IHRoaXMuR2V0VXJsQ29tcG9uZW50cyh1cmwpO1xuICAgICAgdmFyIHBhdGhBcnJheSA9IHVybE9iamVjdC5QYXRoU2VnbWVudHM7XG4gICAgICBpZiAodGVuYW50SWQgJiYgKHBhdGhBcnJheS5sZW5ndGggIT09IDAgJiYgKHBhdGhBcnJheVswXSA9PT0gQ29uc3RhbnRzLmNvbW1vbiB8fCBwYXRoQXJyYXlbMF0gPT09IFNTT1R5cGVzLk9SR0FOSVpBVElPTlMpKSkge1xuICAgICAgICBwYXRoQXJyYXlbMF0gPSB0ZW5hbnRJZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdEF1dGhvcml0eVVyaUZyb21PYmplY3QodXJsT2JqZWN0LCBwYXRoQXJyYXkpO1xuICB9XG5cbiAgc3RhdGljIGNvbnN0cnVjdEF1dGhvcml0eVVyaUZyb21PYmplY3QodXJsT2JqZWN0OiBJVXJpLCBwYXRoQXJyYXk6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMuQ2Fub25pY2FsaXplVXJpKHVybE9iamVjdC5Qcm90b2NvbCArIFwiLy9cIiArIHVybE9iamVjdC5Ib3N0TmFtZUFuZFBvcnQgKyBcIi9cIiArIHBhdGhBcnJheS5qb2luKFwiL1wiKSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIG91dCB0aGUgY29tcG9uZW50cyBmcm9tIGEgdXJsIHN0cmluZy5cbiAgICogQHJldHVybnMgQW4gb2JqZWN0IHdpdGggdGhlIHZhcmlvdXMgY29tcG9uZW50cy4gUGxlYXNlIGNhY2hlIHRoaXMgdmFsdWUgaW5zdGVkIG9mIGNhbGxpbmcgdGhpcyBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSB1cmwuXG4gICAqL1xuICBzdGF0aWMgR2V0VXJsQ29tcG9uZW50cyh1cmw6IHN0cmluZyk6IElVcmkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aHJvdyBcIlVybCByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2N1cnRpc3ovMTExMzliMmNmY2FlZjRhMjYxZTBcbiAgICB2YXIgcmVnRXggPSBSZWdFeHAoXCJeKChbXjovPyNdKyk6KT8oLy8oW14vPyNdKikpPyhbXj8jXSopKFxcXFw/KFteI10qKSk/KCMoLiopKT9cIik7XG5cbiAgICB2YXIgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXgpO1xuXG4gICAgaWYgKCFtYXRjaCB8fCBtYXRjaC5sZW5ndGggPCA2KSB7XG4gICAgICB0aHJvdyBcIlZhbGlkIHVybCByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGxldCB1cmxDb21wb25lbnRzID0gPElVcmk+e1xuICAgICAgUHJvdG9jb2w6IG1hdGNoWzFdLFxuICAgICAgSG9zdE5hbWVBbmRQb3J0OiBtYXRjaFs0XSxcbiAgICAgIEFic29sdXRlUGF0aDogbWF0Y2hbNV1cbiAgICB9O1xuXG4gICAgbGV0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuQWJzb2x1dGVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgICBwYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHMuZmlsdGVyKCh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoID4gMCk7IC8vIHJlbW92ZSBlbXB0eSBlbGVtZW50c1xuICAgIHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzID0gcGF0aFNlZ21lbnRzO1xuICAgIHJldHVybiB1cmxDb21wb25lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgdXJsIG9yIHBhdGgsIGFwcGVuZCBhIHRyYWlsaW5nIHNsYXNoIGlmIG9uZSBkb2VzbnQgZXhpc3RcbiAgICpcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgc3RhdGljIENhbm9uaWNhbGl6ZVVyaSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHVybCkge1xuICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHVybCAmJiAhVXRpbHMuZW5kc1dpdGgodXJsLCBcIi9cIikpIHtcbiAgICAgIHVybCArPSBcIi9cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIHVybCBlbmRzIHdpdGggdGhlIHN1ZmZpeFxuICAgKiBSZXF1aXJlZCBiZWNhdXNlIHdlIGFyZSBjb21waWxpbmcgZm9yIGVzNSBpbnN0ZWFkIG9mIGVzNlxuICAgKiBAcGFyYW0gdXJsXG4gICAqIEBwYXJhbSBzdHJcbiAgICovXG4gIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBub3QgY2xlYXIgd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBkb1xuICBzdGF0aWMgZW5kc1dpdGgodXJsOiBzdHJpbmcsIHN1ZmZpeDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF1cmwgfHwgIXN1ZmZpeCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB1cmwuaW5kZXhPZihzdWZmaXgsIHVybC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogVXRpbHMgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBsb2dpbl9oaW50IGFuZCBkb21haW5faGludCBmcm9tIHRoZSBpL3AgZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHVybFxuICAgKiBAcGFyYW0gbmFtZVxuICAgKi9cbiAgc3RhdGljIHVybFJlbW92ZVF1ZXJ5U3RyaW5nUGFyYW1ldGVyKHVybDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmlzRW1wdHkodXJsKSkge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFxcXFwmXCIgKyBuYW1lICsgXCI9KVteXFwmXStcIik7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xuICAgIC8vIG5hbWU9dmFsdWUmXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rJlwiKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgLy8gbmFtZT12YWx1ZVxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIihcIiArIG5hbWUgKyBcIj0pW15cXCZdK1wiKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBFeHRyYVF1ZXJ5UGFyYW1ldGVycyBQcm9jZXNzaW5nIChFeHRyYWN0PylcblxuICAvKipcbiAgICogQ29uc3RydWN0cyBleHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXIgZm9yIHRoZSBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgICogaW4gYW55IGxvZ2luKCkgb3IgYWNxdWlyZVRva2VuKCkgY2FsbHNcbiAgICogQHBhcmFtIGlkVG9rZW5PYmplY3RcbiAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBzaWRcbiAgICogQHBhcmFtIGxvZ2luSGludFxuICAgKi9cbiAgLy9UT0RPOiBjaGVjayBob3cgdGhpcyBiZWhhdmVzIHdoZW4gZG9tYWluX2hpbnQgb25seSBpcyBzZW50IGluIGV4dHJhcGFyYW1ldGVycyBhbmQgaWRUb2tlbiBoYXMgbm8gdXBuLlxuICBzdGF0aWMgY29uc3RydWN0VW5pZmllZENhY2hlUXVlcnlQYXJhbWV0ZXIocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBpZFRva2VuT2JqZWN0OiBhbnkpOiBRUERpY3Qge1xuXG4gICAgLy8gcHJlZmVyZW5jZSBvcmRlcjogYWNjb3VudCA+IHNpZCA+IGxvZ2luX2hpbnRcbiAgICBsZXQgc3NvVHlwZTtcbiAgICBsZXQgc3NvRGF0YTtcbiAgICBsZXQgc3NvUGFyYW06IFFQRGljdCA9IHt9O1xuICAgIGxldCBzZXJ2ZXJSZXFQYXJhbTogUVBEaWN0ID0ge307XG4gICAgLy8gaWYgYWNjb3VudCBpbmZvIGlzIHBhc3NlZCwgYWNjb3VudC5zaWQgPiBhY2NvdW50LmxvZ2luX2hpbnRcbiAgICBpZiAocmVxdWVzdCkge1xuICAgICAgaWYgKHJlcXVlc3QuYWNjb3VudCkge1xuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50O1xuICAgICAgICBpZiAoYWNjb3VudC5zaWQpIHtcbiAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuU0lEO1xuICAgICAgICAgIHNzb0RhdGEgPSBhY2NvdW50LnNpZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY2NvdW50LnVzZXJOYW1lKSB7XG4gICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLkxPR0lOX0hJTlQ7XG4gICAgICAgICAgc3NvRGF0YSA9IGFjY291bnQudXNlck5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHNpZCBmcm9tIHJlcXVlc3RcbiAgICAgIGVsc2UgaWYgKHJlcXVlc3Quc2lkKSB7XG4gICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5TSUQ7XG4gICAgICAgIHNzb0RhdGEgPSByZXF1ZXN0LnNpZDtcbiAgICAgIH1cbiAgICAgIC8vIGxvZ2luSGludCBmcm9tIHJlcXVlc3RcbiAgICAgIGVsc2UgaWYgKHJlcXVlc3QubG9naW5IaW50KSB7XG4gICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5MT0dJTl9ISU5UO1xuICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5sb2dpbkhpbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGFkYWxJZFRva2VuIHJldHJpZXZlZCBmcm9tIGNhY2hlXG4gICAgZWxzZSBpZiAoaWRUb2tlbk9iamVjdCkge1xuICAgICAgaWYgKGlkVG9rZW5PYmplY3QuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLnVwbikpIHtcbiAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLklEX1RPS0VOO1xuICAgICAgICBzc29EYXRhID0gaWRUb2tlbk9iamVjdC51cG47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XG4gICAgICAgIHNzb0RhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoc3NvVHlwZSwgc3NvRGF0YSwgc3NvUGFyYW0pO1xuXG4gICAgLy8gYWRkIHRoZSBIb21lQWNjb3VudElkZW50aWZpZXIgaW5mby8gZG9tYWluX2hpbnRcbiAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LmFjY291bnQgJiYgcmVxdWVzdC5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xuICAgICAgICBzZXJ2ZXJSZXFQYXJhbSA9IHRoaXMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyLCBzc29QYXJhbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlcnZlclJlcVBhcmFtO1xuICB9XG5cblxuICAvKipcbiAgICogQWRkIFNJRCB0byBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gc2lkXG4gICAqL1xuICAvLyBUT0RPOiBDYW4gb3B0aW1pemUgdGhpcyBsYXRlciwgbWFrZSBzc29QYXJhbSBvcHRpb25hbFxuICBzdGF0aWMgYWRkU1NPUGFyYW1ldGVyKHNzb1R5cGU6IHN0cmluZywgc3NvRGF0YTogc3RyaW5nLCBzc29QYXJhbTogUVBEaWN0KTogUVBEaWN0IHtcblxuICAgIHN3aXRjaCAoc3NvVHlwZSkge1xuICAgICAgY2FzZSBTU09UeXBlcy5TSUQ6IHtcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuU0lEXSA9IHNzb0RhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTU09UeXBlcy5JRF9UT0tFTjoge1xuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5MT0dJTl9ISU5UXSA9IHNzb0RhdGE7XG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTU09UeXBlcy5MT0dJTl9ISU5UOiB7XG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX0hJTlRdID0gc3NvRGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNTT1R5cGVzLk9SR0FOSVpBVElPTlM6IHtcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNTT1R5cGVzLkNPTlNVTUVSUzoge1xuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTU09UeXBlcy5IT01FQUNDT1VOVF9JRDoge1xuICAgICAgICBsZXQgaG9tZUFjY291bnRJZCA9IHNzb0RhdGEuc3BsaXQoXCIuXCIpO1xuICAgICAgICBjb25zdCB1aWQgPSBVdGlscy5iYXNlNjREZWNvZGVTdHJpbmdVcmxTYWZlKGhvbWVBY2NvdW50SWRbMF0pO1xuICAgICAgICBjb25zdCB1dGlkID0gVXRpbHMuYmFzZTY0RGVjb2RlU3RyaW5nVXJsU2FmZShob21lQWNjb3VudElkWzFdKTtcblxuICAgICAgICAvLyBUT0RPOiBkb21haW5fcmVxIGFuZCBsb2dpbl9yZXEgYXJlIG5vdCBuZWVkZWQgYWNjb3JkaW5nIHRvIGVTVFMgdGVhbVxuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5MT0dJTl9SRVFdID0gdWlkO1xuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fUkVRXSA9IHV0aWQ7XG5cbiAgICAgICAgaWYgKHV0aWQgPT09IENvbnN0YW50cy5jb25zdW1lcnNVdGlkKSB7XG4gICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5DT05TVU1FUlM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTU09UeXBlcy5MT0dJTl9SRVE6IHtcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fUkVRXSA9IHNzb0RhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBTU09UeXBlcy5ET01BSU5fUkVROiB7XG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9SRVFdID0gc3NvRGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNzb1BhcmFtO1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgdG8gZ2VuZXJhdGUgYSBRdWVyeVBhcmFtZXRlclN0cmluZyBmcm9tIGEgS2V5LVZhbHVlIG1hcHBpbmcgb2YgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkXG4gICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgKi9cbiAgc3RhdGljIGdlbmVyYXRlUXVlcnlQYXJhbWV0ZXJzU3RyaW5nKHF1ZXJ5UGFyYW1ldGVyczogUVBEaWN0KTogc3RyaW5nIHtcbiAgICBsZXQgcGFyYW1zU3RyaW5nOiBzdHJpbmcgPSBudWxsO1xuXG4gICAgaWYgKHF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgT2JqZWN0LmtleXMocXVlcnlQYXJhbWV0ZXJzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocGFyYW1zU3RyaW5nID09IG51bGwpIHtcbiAgICAgICAgICBwYXJhbXNTdHJpbmcgPSBgJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1N0cmluZyArPSBgJiR7a2V5fT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVBhcmFtZXRlcnNba2V5XSl9YDtcbiAgICAgICAgfVxuICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zU3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgU1NPIHBhcmFtcyBzZXQgaW4gdGhlIFJlcXVlc3RcbiAgICogQHBhcmFtIHJlcXVlc3RcbiAgICovXG4gIHN0YXRpYyBpc1NTT1BhcmFtKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykge1xuICAgICAgcmV0dXJuIHJlcXVlc3QgJiYgKHJlcXVlc3QuYWNjb3VudCB8fCByZXF1ZXN0LnNpZCB8fCByZXF1ZXN0LmxvZ2luSGludCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gUmVzcG9uc2UgSGVscGVyc1xuXG4gIHN0YXRpYyBzZXRSZXNwb25zZUlkVG9rZW4ob3JpZ2luYWxSZXNwb25zZTogQXV0aFJlc3BvbnNlLCBpZFRva2VuOiBJZFRva2VuKSA6IEF1dGhSZXNwb25zZSB7XG4gICAgdmFyIHJlc3BvbnNlID0geyAuLi5vcmlnaW5hbFJlc3BvbnNlIH07XG4gICAgcmVzcG9uc2UuaWRUb2tlbiA9IGlkVG9rZW47XG4gICAgaWYgKHJlc3BvbnNlLmlkVG9rZW4ub2JqZWN0SWQpIHtcbiAgICAgIHJlc3BvbnNlLnVuaXF1ZUlkID0gcmVzcG9uc2UuaWRUb2tlbi5vYmplY3RJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzcG9uc2UudW5pcXVlSWQgPSByZXNwb25zZS5pZFRva2VuLnN1YmplY3Q7XG4gICAgfVxuICAgIHJlc3BvbnNlLnRlbmFudElkID0gcmVzcG9uc2UuaWRUb2tlbi50ZW5hbnRJZDtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBDYWNoZUxvY2F0aW9uIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xuXG4vLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xuICBzdGF0aWMgZ2V0IGVycm9yRGVzY3JpcHRpb24oKTogc3RyaW5nIHsgcmV0dXJuIFwiZXJyb3JfZGVzY3JpcHRpb25cIjsgfVxuICBzdGF0aWMgZ2V0IGVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcImVycm9yXCI7IH1cblxuICBzdGF0aWMgZ2V0IHNjb3BlKCk6IHN0cmluZyB7IHJldHVybiBcInNjb3BlXCI7IH1cbiAgc3RhdGljIGdldCBjbGllbnRJbmZvKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudF9pbmZvXCI7IH1cbiAgc3RhdGljIGdldCBjbGllbnRJZCgpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGllbnRJZFwiOyB9XG5cbiAgc3RhdGljIGdldCBpZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImlkX3Rva2VuXCI7IH1cbiAgc3RhdGljIGdldCBhZGFsSWRUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJhZGFsLmlkdG9rZW5cIjsgfVxuICBzdGF0aWMgZ2V0IGFjY2Vzc1Rva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImFjY2Vzc190b2tlblwiOyB9XG4gIHN0YXRpYyBnZXQgZXhwaXJlc0luKCk6IHN0cmluZyB7IHJldHVybiBcImV4cGlyZXNfaW5cIjsgfVxuICBzdGF0aWMgZ2V0IHNlc3Npb25TdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzZXNzaW9uX3N0YXRlXCI7IH1cblxuICBzdGF0aWMgZ2V0IG1zYWxDbGllbnRJbmZvKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuY2xpZW50LmluZm9cIjsgfVxuICBzdGF0aWMgZ2V0IG1zYWxFcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmVycm9yXCI7IH1cbiAgc3RhdGljIGdldCBtc2FsRXJyb3JEZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmVycm9yLmRlc2NyaXB0aW9uXCI7IH1cblxuICBzdGF0aWMgZ2V0IG1zYWxTZXNzaW9uU3RhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5zZXNzaW9uLnN0YXRlXCI7IH1cbiAgc3RhdGljIGdldCB0b2tlbktleXMoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC50b2tlbi5rZXlzXCI7IH1cbiAgc3RhdGljIGdldCBhY2Nlc3NUb2tlbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmFjY2Vzcy50b2tlbi5rZXlcIjsgfVxuICBzdGF0aWMgZ2V0IGV4cGlyYXRpb25LZXkoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5leHBpcmF0aW9uLmtleVwiOyB9XG4gIHN0YXRpYyBnZXQgc3RhdGVMb2dpbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLmxvZ2luXCI7IH1cbiAgc3RhdGljIGdldCBzdGF0ZUFjcXVpcmVUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLmFjcXVpcmVUb2tlblwiOyB9XG4gIHN0YXRpYyBnZXQgc3RhdGVSZW5ldygpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnN0YXRlLnJlbmV3XCI7IH1cbiAgc3RhdGljIGdldCBub25jZUlkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5ub25jZS5pZHRva2VuXCI7IH1cbiAgc3RhdGljIGdldCB1c2VyTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVzZXJuYW1lXCI7IH1cbiAgc3RhdGljIGdldCBpZFRva2VuS2V5KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuaWR0b2tlblwiOyB9XG4gIHN0YXRpYyBnZXQgbG9naW5SZXF1ZXN0KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubG9naW4ucmVxdWVzdFwiOyB9XG4gIHN0YXRpYyBnZXQgbG9naW5FcnJvcigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmxvZ2luLmVycm9yXCI7IH1cbiAgc3RhdGljIGdldCByZW5ld1N0YXR1cygpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnRva2VuLnJlbmV3LnN0YXR1c1wiOyB9XG4gIHN0YXRpYyBnZXQgdXJsSGFzaCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnVybEhhc2hcIjsgfVxuICBzdGF0aWMgZ2V0IGFuZ3VsYXJMb2dpblJlcXVlc3QoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5hbmd1bGFyLmxvZ2luLnJlcXVlc3RcIjsgfVxuICBzdGF0aWMgZ2V0IG1zYWwoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbFwiOyB9XG5cbiAgc3RhdGljIGdldCBub19hY2NvdW50KCk6IHN0cmluZyB7IHJldHVybiBcIk5PX0FDQ09VTlRcIjsgfVxuICBzdGF0aWMgZ2V0IGNvbnN1bWVyc1V0aWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkXCI7IH1cbiAgc3RhdGljIGdldCB1cG4oKTogc3RyaW5nIHsgcmV0dXJuIFwidXBuXCI7IH1cblxuICBzdGF0aWMgZ2V0IHByb21wdF9zZWxlY3RfYWNjb3VudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PXNlbGVjdF9hY2NvdW50XCI7IH1cbiAgc3RhdGljIGdldCBwcm9tcHRfbm9uZSgpOiBzdHJpbmcgeyByZXR1cm4gXCImcHJvbXB0PW5vbmVcIjsgfVxuICBzdGF0aWMgZ2V0IHByb21wdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9tcHRcIjsgfVxuXG4gIHN0YXRpYyBnZXQgcmVzcG9uc2VfbW9kZV9mcmFnbWVudCgpOiBzdHJpbmcgeyByZXR1cm4gXCImcmVzcG9uc2VfbW9kZT1mcmFnbWVudFwiOyB9XG4gIHN0YXRpYyBnZXQgcmVzb3VyY2VEZWxpbWl0ZXIoKTogc3RyaW5nIHsgcmV0dXJuIFwifFwiOyB9XG5cbiAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKCk6IHN0cmluZyB7IHJldHVybiBcIkNhbmNlbGVkXCI7IH1cbiAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzQ29tcGxldGVkKCk6IHN0cmluZyB7IHJldHVybiBcIkNvbXBsZXRlZFwiOyB9XG4gIHN0YXRpYyBnZXQgdG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MoKTogc3RyaW5nIHsgcmV0dXJuIFwiSW4gUHJvZ3Jlc3NcIjsgfVxuXG4gIHByaXZhdGUgc3RhdGljIF9wb3BVcFdpZHRoOiBudW1iZXIgPSA0ODM7XG4gIHN0YXRpYyBnZXQgcG9wVXBXaWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcG9wVXBXaWR0aDsgfVxuICBzdGF0aWMgc2V0IHBvcFVwV2lkdGgod2lkdGg6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcFVwV2lkdGggPSB3aWR0aDtcbiAgfVxuICBwcml2YXRlIHN0YXRpYyBfcG9wVXBIZWlnaHQ6IG51bWJlciA9IDYwMDtcbiAgc3RhdGljIGdldCBwb3BVcEhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fcG9wVXBIZWlnaHQ7IH1cbiAgc3RhdGljIHNldCBwb3BVcEhlaWdodChoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuX3BvcFVwSGVpZ2h0ID0gaGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGdldCBsb2dpbigpOiBzdHJpbmcgeyByZXR1cm4gXCJMT0dJTlwiOyB9XG4gIHN0YXRpYyBnZXQgcmVuZXdUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJSRU5FV19UT0tFTlwiOyB9XG4gIHN0YXRpYyBnZXQgdW5rbm93bigpOiBzdHJpbmcgeyByZXR1cm4gXCJVTktOT1dOXCI7IH1cblxuICBzdGF0aWMgZ2V0IGhvbWVBY2NvdW50SWRlbnRpZmllcigpOiBzdHJpbmcgeyByZXR1cm4gXCJob21lQWNjb3VudElkZW50aWZpZXJcIjsgfVxuXG4gIHN0YXRpYyBnZXQgY29tbW9uKCk6IHN0cmluZyB7IHJldHVybiBcImNvbW1vblwiOyB9XG4gIHN0YXRpYyBnZXQgb3BlbmlkU2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwib3BlbmlkXCI7IH1cbiAgc3RhdGljIGdldCBwcm9maWxlU2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicHJvZmlsZVwiOyB9XG5cbiAgc3RhdGljIGdldCBjYWNoZUxvY2F0aW9uTG9jYWwoKTogQ2FjaGVMb2NhdGlvbiB7IHJldHVybiBcImxvY2FsU3RvcmFnZVwiOyB9XG4gIHN0YXRpYyBnZXQgY2FjaGVMb2NhdGlvblNlc3Npb24oKTogQ2FjaGVMb2NhdGlvbiB7IHJldHVybiBcInNlc3Npb25TdG9yYWdlXCI7IH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBDYWNoZUtleXMgPSB7XG4gICAgQVVUSE9SSVRZOiBcIm1zYWxfYXV0aG9yaXR5XCIsXG4gICAgQUNRVUlSRV9UT0tFTl9VU0VSOiBcIm1zYWwuYWNxdWlyZVRva2VuVXNlclwiXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IFNTT1R5cGVzID0ge1xuICAgIEFDQ09VTlQ6IFwiYWNjb3VudFwiLFxuICAgIFNJRDogXCJzaWRcIixcbiAgICBMT0dJTl9ISU5UOiBcImxvZ2luX2hpbnRcIixcbiAgICBJRF9UT0tFTjogXCJpZF90b2tlblwiLFxuICAgIERPTUFJTl9ISU5UOiBcImRvbWFpbl9oaW50XCIsXG4gICAgT1JHQU5JWkFUSU9OUzogXCJvcmdhbml6YXRpb25zXCIsXG4gICAgQ09OU1VNRVJTOiBcImNvbnN1bWVyc1wiLFxuICAgIEFDQ09VTlRfSUQ6IFwiYWNjb3VudElkZW50aWZpZXJcIixcbiAgICBIT01FQUNDT1VOVF9JRDogXCJob21lQWNjb3VudElkZW50aWZpZXJcIixcbiAgICBMT0dJTl9SRVE6IFwibG9naW5fcmVxXCIsXG4gICAgRE9NQUlOX1JFUTogXCJkb21haW5fcmVxXCJcbn07XG5cbi8qKlxuICogd2UgY29uc2lkZXJlZCBtYWtpbmcgdGhpcyBcImVudW1cIiBpbiB0aGUgcmVxdWVzdCBpbnN0ZWFkIG9mIHN0cmluZywgaG93ZXZlciBpdCBsb29rcyBsaWtlIHRoZSBhbGxvd2VkIGxpc3Qgb2ZcbiAqIHByb21wdCB2YWx1ZXMga2VwdCBjaGFuZ2luZyBvdmVyIHBhc3QgY291cGxlIG9mIHllYXJzLiBUaGVyZSBhcmUgc29tZSB1bmRvY3VtZW50ZWQgcHJvbXB0IHZhbHVlcyBmb3Igc29tZVxuICogaW50ZXJuYWwgcGFydG5lcnMgdG9vLCBoZW5jZSB0aGUgY2hvaWNlIG9mIGdlbmVyaWMgXCJzdHJpbmdcIiB0eXBlIGluc3RlYWQgb2YgdGhlIFwiZW51bVwiXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBQcm9tcHRTdGF0ZSA9IHtcblx0TE9HSU46IFwibG9naW5cIixcblx0U0VMRUNUX0FDQ09VTlQ6IFwic2VsZWN0X2FjY291bnRcIixcblx0Q09OU0VOVDogXCJjb25zZW50XCIsXG5cdE5PTkU6IFwibm9uZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IExpYnJhcnkgPSB7XG4gIHZlcnNpb246IFwiMS4wLjAtcHJldmlldy4yXCJcbn07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9VdGlsc1wiO1xuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuLi9JZFRva2VuXCI7XG5cbmV4cG9ydCBjb25zdCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlID0ge1xuICAgIG11bHRpcGxlTWF0Y2hpbmdUb2tlbnM6IHtcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9tYXRjaGluZ190b2tlbnNcIixcbiAgICAgICAgZGVzYzogXCJUaGUgY2FjaGUgY29udGFpbnMgbXVsdGlwbGUgdG9rZW5zIHNhdGlzZnlpbmcgdGhlIHJlcXVpcmVtZW50cy4gXCIgK1xuICAgICAgICAgICAgXCJDYWxsIEFjcXVpcmVUb2tlbiBhZ2FpbiBwcm92aWRpbmcgbW9yZSByZXF1aXJlbWVudHMgbGlrZSBhdXRob3JpdHkuXCJcbiAgICB9LFxuICAgIG11bHRpcGxlQ2FjaGVBdXRob3JpdGllczoge1xuICAgICAgICBjb2RlOiBcIm11bHRpcGxlX2F1dGhvcml0aWVzXCIsXG4gICAgICAgIGRlc2M6IFwiTXVsdGlwbGUgYXV0aG9yaXRpZXMgZm91bmQgaW4gdGhlIGNhY2hlLiBQYXNzIGF1dGhvcml0eSBpbiB0aGUgQVBJIG92ZXJsb2FkLlwiXG4gICAgfSxcbiAgICBlbmRwb2ludFJlc29sdXRpb25FcnJvcjoge1xuICAgICAgICBjb2RlOiBcImVuZHBvaW50c19yZXNvbHV0aW9uX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiRXJyb3I6IGNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50cy4gUGxlYXNlIGNoZWNrIG5ldHdvcmsgYW5kIHRyeSBhZ2Fpbi5cIlxuICAgIH0sXG4gICAgcG9wVXBXaW5kb3dFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInBvcHVwX3dpbmRvd19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkVycm9yIG9wZW5pbmcgcG9wdXAgd2luZG93LiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBJRSBvciBpZiBwb3B1cHMgYXJlIGJsb2NrZWQgaW4gdGhlIGJyb3dzZXIuXCJcbiAgICB9LFxuICAgIHRva2VuUmVuZXdhbEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidG9rZW5fcmVuZXdhbF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRva2VuIHJlbmV3YWwgb3BlcmF0aW9uIGZhaWxlZCBkdWUgdG8gdGltZW91dC5cIlxuICAgIH0sXG4gICAgaW52YWxpZElkVG9rZW46IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2lkX3Rva2VuXCIsXG4gICAgICAgIGRlc2M6IFwiSW52YWxpZCBJRCB0b2tlbiBmb3JtYXQuXCJcbiAgICB9LFxuICAgIGludmFsaWRTdGF0ZUVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9zdGF0ZV9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkludmFsaWQgc3RhdGUuXCJcbiAgICB9LFxuICAgIG5vbmNlTWlzbWF0Y2hFcnJvcjoge1xuICAgICAgICBjb2RlOiBcIm5vbmNlX21pc21hdGNoX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiTm9uY2UgaXMgbm90IG1hdGNoaW5nLCBOb25jZSByZWNlaXZlZDogXCJcbiAgICB9LFxuICAgIGxvZ2luUHJvZ3Jlc3NFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImxvZ2luX3Byb2dyZXNzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiTG9naW5fSW5fUHJvZ3Jlc3M6IEVycm9yIGR1cmluZyBsb2dpbiBjYWxsIC0gbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIlxuICAgIH0sXG4gICAgYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImFjcXVpcmV0b2tlbl9wcm9ncmVzc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkFjcXVpcmVUb2tlbl9Jbl9Qcm9ncmVzczogRXJyb3IgZHVyaW5nIGxvZ2luIGNhbGwgLSBsb2dpbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzLlwiXG4gICAgfSxcbiAgICB1c2VyQ2FuY2VsbGVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1c2VyX2NhbmNlbGxlZFwiLFxuICAgICAgICBkZXNjOiBcIlVzZXIgY2FuY2VsbGVkIHRoZSBmbG93LlwiXG4gICAgfSxcbiAgICBjYWxsYmFja0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiY2FsbGJhY2tfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbi5cIlxuICAgIH0sXG4gICAgdXNlckxvZ2luUmVxdWlyZWRFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVzZXJfbG9naW5fZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkLlwiXG4gICAgfSxcbiAgICB1c2VyRG9lc05vdEV4aXN0RXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1c2VyX25vbl9leGlzdGVudFwiLFxuICAgICAgICBkZXNjOiBcIlVzZXIgb2JqZWN0IGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgY2FsbCBhIGxvZ2luIEFQSS5cIlxuICAgIH0sXG4gICAgY2xpZW50SW5mb0RlY29kaW5nRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19kZWNvZGluZ19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBjbGllbnQgaW5mbyBjb3VsZCBub3QgYmUgcGFyc2VkL2RlY29kZWQgY29ycmVjdGx5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcbiAgICB9LFxuICAgIG51bGxPckVtcHR5SWRUb2tlbjoge1xuICAgICAgICBjb2RlOiBcIm51bGxfb3JfZW1wdHlfaWRfdG9rZW5cIixcbiAgICAgICAgZGVzYzogXCJUaGUgaWRUb2tlbiBpcyBudWxsIG9yIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcbiAgICB9LFxuICAgIGlkVG9rZW5Ob3RQYXJzZWQ6IHtcbiAgICAgICAgY29kZTogXCJpZF90b2tlbl9wYXJzaW5nX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiSUQgdG9rZW4gY2Fubm90IGJlIHBhcnNlZC4gUGxlYXNlIHJldmlldyBzdGFjayB0cmFjZSB0byBkZXRlcm1pbmUgcm9vdCBjYXVzZS5cIlxuICAgIH0sXG4gICAgdG9rZW5FbmNvZGluZ0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidG9rZW5fZW5jb2RpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUaGUgdG9rZW4gdG8gYmUgZGVjb2RlZCBpcyBub3QgZW5jb2RlZCBjb3JyZWN0bHkuXCJcbiAgICB9XG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBjbGllbnQgY29kZSBydW5uaW5nIG9uIHRoZSBicm93c2VyLlxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50QXV0aEVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudEF1dGhFcnJvclwiO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRBdXRoRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyRGV0YWlsPzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYztcbiAgICAgICAgaWYgKGVyckRldGFpbCAmJiAhVXRpbHMuaXNFbXB0eShlcnJEZXRhaWwpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke2VyckRldGFpbH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZU1hdGNoaW5nVG9rZW5zLmNvZGUsXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5kZXNjfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXMuY29kZSxcbiAgICAgICAgICAgIGBDYWNoZSBlcnJvciBmb3Igc2NvcGUgJHtzY29wZX06ICR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXMuZGVzY30uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVBvcHVwV2luZG93RXJyb3IoZXJyRGV0YWlsPzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5kZXNjO1xuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgIERldGFpbHM6ICR7ZXJyRGV0YWlsfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuUmVuZXdhbFRpbWVvdXRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW46IElkVG9rZW4pIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5kZXNjfSBHaXZlbiB0b2tlbjogJHtpZFRva2VufWApO1xuICAgIH1cblxuICAgIC8vVE9ETzogSXMgdGhpcyBub3QgYSBzZWN1cml0eSBmbGF3IHRvIHNlbmQgdGhlIHVzZXIgdGhlIHN0YXRlIGV4cGVjdGVkPz9cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFN0YXRlRXJyb3IoaW52YWxpZFN0YXRlOiBzdHJpbmcsIGFjdHVhbFN0YXRlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmRlc2N9ICR7aW52YWxpZFN0YXRlfSwgc3RhdGUgZXhwZWN0ZWQgOiAke2FjdHVhbFN0YXRlfS5gKTtcbiAgICB9XG5cbiAgICAvL1RPRE86IElzIHRoaXMgbm90IGEgc2VjdXJpdHkgZmxhdyB0byBzZW5kIHRoZSB1c2VyIHRoZSBOb25jZSBleHBlY3RlZD8/XG4gICAgc3RhdGljIGNyZWF0ZU5vbmNlTWlzbWF0Y2hFcnJvcihpbnZhbGlkTm9uY2U6IHN0cmluZywgYWN0dWFsTm9uY2U6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5kZXNjfSAke2ludmFsaWROb25jZX0sIG5vbmNlIGV4cGVjdGVkIDogJHthY3R1YWxOb25jZX0uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubG9naW5Qcm9ncmVzc0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUHJvZ3Jlc3NFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVc2VyQ2FuY2VsbGVkRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFcnJvckluQ2FsbGJhY2tGdW5jdGlvbihlcnJvckRlc2M6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2FsbGJhY2tFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWxsYmFja0Vycm9yLmRlc2N9ICR7ZXJyb3JEZXNjfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJMb2dpblJlcXVpcmVkRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJEb2VzTm90RXhpc3RFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyRG9lc05vdEV4aXN0RXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckRvZXNOb3RFeGlzdEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihjYXVnaHRFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKGludmFsaWRSYXdUb2tlblN0cmluZzogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubnVsbE9yRW1wdHlJZFRva2VuLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm51bGxPckVtcHR5SWRUb2tlbi5kZXNjfSBSYXcgSUQgVG9rZW4gVmFsdWU6ICR7aW52YWxpZFJhd1Rva2VuU3RyaW5nfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGNhdWdodFBhcnNpbmdFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuaWRUb2tlbk5vdFBhcnNlZC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pZFRva2VuTm90UGFyc2VkLmRlc2N9IEZhaWxlZCB3aXRoIGVycm9yOiAke2NhdWdodFBhcnNpbmdFcnJvcn1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVG9rZW5FbmNvZGluZ0Vycm9yKGluY29ycmVjdGx5RW5jb2RlZFRva2VuOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlbkVuY29kaW5nRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UudG9rZW5FbmNvZGluZ0Vycm9yLmRlc2N9IEF0dGVtcHRlZCB0byBkZWNvZGU6ICR7aW5jb3JyZWN0bHlFbmNvZGVkVG9rZW59YCk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL0NsaWVudEF1dGhFcnJvclwiO1xuXG5leHBvcnQgY29uc3QgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSA9IHtcbiAgICBjb25maWd1cmF0aW9uTm90U2V0OiB7XG4gICAgICAgIGNvZGU6IFwibm9fY29uZmlnX3NldFwiLFxuICAgICAgICBkZXNjOiBcIkNvbmZpZ3VyYXRpb24gaGFzIG5vdCBiZWVuIHNldC4gUGxlYXNlIGNhbGwgdGhlIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGNvbnN0cnVjdG9yIHdpdGggYSB2YWxpZCBDb25maWd1cmF0aW9uIG9iamVjdC5cIlxuICAgIH0sXG4gICAgaW52YWxpZENhY2hlTG9jYXRpb246IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NhY2hlX2xvY2F0aW9uXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGNhY2hlIGxvY2F0aW9uIHByb3ZpZGVkIGlzIG5vdCB2YWxpZC5cIlxuICAgIH0sXG4gICAgbm9TdG9yYWdlU3VwcG9ydGVkOiB7XG4gICAgICAgIGNvZGU6IFwiYnJvd3Nlcl9zdG9yYWdlX25vdF9zdXBwb3J0ZWRcIixcbiAgICAgICAgZGVzYzogXCJsb2NhbFN0b3JhZ2UgYW5kIHNlc3Npb25TdG9yYWdlIGFyZSBub3Qgc3VwcG9ydGVkLlwiXG4gICAgfSxcbiAgICBub1JlZGlyZWN0Q2FsbGJhY2tzU2V0OiB7XG4gICAgICAgIGNvZGU6IFwibm9fcmVkaXJlY3RfY2FsbGJhY2tzXCIsXG4gICAgICAgIGRlc2M6IFwiTm8gcmVkaXJlY3QgY2FsbGJhY2tzIGhhdmUgYmVlbiBzZXQuIFBsZWFzZSBjYWxsIHNldFJlZGlyZWN0Q2FsbGJhY2tzKCkgd2l0aCB0aGUgYXBwcm9wcmlhdGUgZnVuY3Rpb24gYXJndW1lbnRzIGJlZm9yZSBjb250aW51aW5nLiBcIiArXG4gICAgICAgICAgICBcIk1vcmUgaW5mb3JtYXRpb24gaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9BenVyZUFEL21pY3Jvc29mdC1hdXRoZW50aWNhdGlvbi1saWJyYXJ5LWZvci1qcy93aWtpLy1iYXNpY3MuXCJcbiAgICB9LFxuICAgIGludmFsaWRDYWxsYmFja09iamVjdDoge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfY2FsbGJhY2tfb2JqZWN0XCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIG9iamVjdCBwYXNzZWQgZm9yIHRoZSBjYWxsYmFjayB3YXMgaW52YWxpZC4gXCIgK1xuICAgICAgICAgIFwiTW9yZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvbWljcm9zb2Z0LWF1dGhlbnRpY2F0aW9uLWxpYnJhcnktZm9yLWpzL3dpa2kvLWJhc2ljcy5cIlxuICAgIH0sXG4gICAgc2NvcGVzUmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJzY29wZXNfcmVxdWlyZWRcIixcbiAgICAgICAgZGVzYzogXCJTY29wZXMgYXJlIHJlcXVpcmVkIHRvIG9idGFpbiBhbiBhY2Nlc3MgdG9rZW4uXCJcbiAgICB9LFxuICAgIGVtcHR5U2NvcGVzOiB7XG4gICAgICAgIGNvZGU6IFwiZW1wdHlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgZW1wdHkgYXJyYXkuXCJcbiAgICB9LFxuICAgIG5vbkFycmF5U2NvcGVzOiB7XG4gICAgICAgIGNvZGU6IFwibm9uYXJyYXlfaW5wdXRfc2NvcGVzX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGNhbm5vdCBiZSBwYXNzZWQgYXMgbm9uLWFycmF5LlwiXG4gICAgfSxcbiAgICBjbGllbnRTY29wZToge1xuICAgICAgICBjb2RlOiBcImNsaWVudGlkX2lucHV0X3Njb3Blc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkNsaWVudCBJRCBjYW4gb25seSBiZSBwcm92aWRlZCBhcyBhIHNpbmdsZSBzY29wZS5cIlxuICAgIH0sXG4gICAgaW52YWxpZFByb21wdDoge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfcHJvbXB0X3ZhbHVlXCIsXG4gICAgICAgIGRlc2M6IFwiU3VwcG9ydGVkIHByb21wdCB2YWx1ZXMgYXJlICdsb2dpbicsICdzZWxlY3RfYWNjb3VudCcsICdjb25zZW50JyBhbmQgJ25vbmUnXCIsXG4gICAgfSxcbiAgICBpbnZhbGlkQXV0aG9yaXR5VHlwZToge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfYXV0aG9yaXR5X3R5cGVcIixcbiAgICAgICAgZGVzYzogXCJUaGUgZ2l2ZW4gYXV0aG9yaXR5IGlzIG5vdCBhIHZhbGlkIHR5cGUgb2YgYXV0aG9yaXR5IHN1cHBvcnRlZCBieSBNU0FMLiBQbGVhc2Ugc2VlIGhlcmUgZm9yIHZhbGlkIGF1dGhvcml0aWVzOiA8aW5zZXJ0IFVSTCBoZXJlPi5cIlxuICAgIH0sXG4gICAgYXV0aG9yaXR5VXJpSW5zZWN1cmU6IHtcbiAgICAgICAgY29kZTogXCJhdXRob3JpdHlfdXJpX2luc2VjdXJlXCIsXG4gICAgICAgIGRlc2M6IFwiQXV0aG9yaXR5IFVSSXMgbXVzdCB1c2UgaHR0cHMuXCJcbiAgICB9LFxuICAgIGF1dGhvcml0eVVyaUludmFsaWRQYXRoOiB7XG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnZhbGlkX3BhdGhcIixcbiAgICAgICAgZGVzYzogXCJHaXZlbiBhdXRob3JpdHkgVVJJIGlzIGludmFsaWQuXCJcbiAgICB9LFxuICAgIHVuc3VwcG9ydGVkQXV0aG9yaXR5VmFsaWRhdGlvbjoge1xuICAgICAgICBjb2RlOiBcInVuc3VwcG9ydGVkX2F1dGhvcml0eV92YWxpZGF0aW9uXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGF1dGhvcml0eSB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgYXV0aG9yaXR5IHR5cGUuXCJcbiAgICB9LFxuICAgIGIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoOiB7XG4gICAgICAgIGNvZGU6IFwiYjJjX2F1dGhvcml0eV91cmlfaW52YWxpZF9wYXRoXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIFVSSSBmb3IgdGhlIEIyQyBhdXRob3JpdHkgaXMgaW52YWxpZC5cIlxuICAgIH0sXG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIGNvbmZpZ3VyYXRpb24gb2YgdGhlIC5qcyBsaWJyYXJ5LlxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgQ2xpZW50QXV0aEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY29uZmlndXJhdGlvbk5vdFNldC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jb25maWd1cmF0aW9uTm90U2V0LmRlc2N9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWNoZUxvY2F0aW9uQ29uZmlnRXJyb3IoZ2l2ZW5DYWNoZUxvY2F0aW9uOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZUxvY2F0aW9uLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZUxvY2F0aW9uLmRlc2N9IFByb3ZpZGVkIHZhbHVlOiAke2dpdmVuQ2FjaGVMb2NhdGlvbn0uIFBvc3NpYmxlIHZhbHVlcyBhcmU6ICR7Q29uc3RhbnRzLmNhY2hlTG9jYXRpb25Mb2NhbH0sICR7Q29uc3RhbnRzLmNhY2hlTG9jYXRpb25TZXNzaW9ufS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTm9TdG9yYWdlU3VwcG9ydGVkRXJyb3IoKSA6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9TdG9yYWdlU3VwcG9ydGVkLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vU3RvcmFnZVN1cHBvcnRlZC5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vUmVkaXJlY3RDYWxsYmFja3NTZXQuY29kZSwgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub1JlZGlyZWN0Q2FsbGJhY2tzU2V0LmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkQ2FsbGJhY2tPYmplY3RFcnJvcihjYWxsYmFja1R5cGU6IHN0cmluZywgY2FsbGJhY2tPYmplY3Q6IG9iamVjdCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhbGxiYWNrT2JqZWN0LmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWxsYmFja09iamVjdC5kZXNjfSBHaXZlbiB2YWx1ZSBmb3IgJHtjYWxsYmFja1R5cGV9IGNhbGxiYWNrIGZ1bmN0aW9uOiAke2NhbGxiYWNrT2JqZWN0fWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTY29wZXNOb25BcnJheUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXNWYWx1ZTogYW55KTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFByb21wdEVycm9yKHByb21wdFZhbHVlOiBhbnkpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZFByb21wdC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtwcm9tcHRWYWx1ZX1gKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuZXhwb3J0IGNvbnN0IEF1dGhFcnJvck1lc3NhZ2UgPSB7XG4gICAgdW5leHBlY3RlZEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidW5leHBlY3RlZF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlVuZXhwZWN0ZWQgZXJyb3IgaW4gYXV0aGVudGljYXRpb24uXCJcbiAgICB9XG59O1xuXG4vKipcbiogR2VuZXJhbCBlcnJvciBjbGFzcyB0aHJvd24gYnkgdGhlIE1TQUwuanMgbGlicmFyeS5cbiovXG5leHBvcnQgY2xhc3MgQXV0aEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgZXJyb3JDb2RlOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdXRoRXJyb3IucHJvdG90eXBlKTtcblxuICAgICAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXV0aEVycm9yXCI7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihlcnJEZXNjOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoRXJyb3IoQXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuY29kZSwgYCR7QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuZGVzY306ICR7ZXJyRGVzY31gKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuL0lVcmlcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCB7IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSB9IGZyb20gXCIuL0lUZW5hbnREaXNjb3ZlcnlSZXNwb25zZVwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4vWEhSQ2xpZW50XCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZW51bSBBdXRob3JpdHlUeXBlIHtcbiAgQWFkLFxuICBBZGZzLFxuICBCMkNcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdXRob3JpdHkge1xuICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgPSB2YWxpZGF0ZUF1dGhvcml0eTtcbiAgICB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSA9IGF1dGhvcml0eTtcblxuICAgIHRoaXMudmFsaWRhdGVBc1VyaSgpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGU7XG5cbiAgcHVibGljIElzVmFsaWRhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBUZW5hbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcbiAgfVxuXG4gIHByaXZhdGUgdGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZTtcblxuICBwdWJsaWMgZ2V0IEF1dGhvcml6YXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xuICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkF1dGhvcml6YXRpb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xuICB9XG5cbiAgcHVibGljIGdldCBFbmRTZXNzaW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5FbmRTZXNzaW9uRW5kcG9pbnQucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgU2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XG4gICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XG4gICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuSXNzdWVyLnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlUmVzb2x2ZWQoKSB7XG4gICAgaWYgKCF0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBcIlBsZWFzZSBjYWxsIFJlc29sdmVFbmRwb2ludHNBc3luYyBmaXJzdFwiO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIFVSTCB0aGF0IGlzIHRoZSBhdXRob3JpdHkgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgICovXG4gIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5O1xuICB9XG5cbiAgcHVibGljIHNldCBDYW5vbmljYWxBdXRob3JpdHkodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eSA9IFV0aWxzLkNhbm9uaWNhbGl6ZVVyaSh1cmwpO1xuICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eTogc3RyaW5nO1xuICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM6IElVcmk7XG5cbiAgcHVibGljIGdldCBDYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKCk6IElVcmkge1xuICAgIGlmICghdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKSB7XG4gICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBVdGlscy5HZXRVcmxDb21wb25lbnRzKHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIC8vIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWRpc2NvdmVyeS0xXzAuaHRtbCNQcm92aWRlck1ldGFkYXRhXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IERlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5DYW5vbmljYWxBdXRob3JpdHl9djIuMC8ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBzdHJpbmcsIHZhbGlkYXRlIHRoYXQgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly9kb21haW4vcGF0aFxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUFzVXJpKCkge1xuICAgIGxldCBjb21wb25lbnRzO1xuICAgIHRyeSB7XG4gICAgICBjb21wb25lbnRzID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XG4gICAgfVxuXG4gICAgaWYgKCFjb21wb25lbnRzLlByb3RvY29sIHx8IGNvbXBvbmVudHMuUHJvdG9jb2wudG9Mb3dlckNhc2UoKSAhPT0gXCJodHRwczpcIikge1xuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnNlY3VyZTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbXBvbmVudHMuUGF0aFNlZ21lbnRzIHx8IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBPSURDIGVuZHBvaW50IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZVxuICAgKi9cbiAgcHJpdmF0ZSBEaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IFhockNsaWVudCgpO1xuICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQsIFwiR0VUXCIsIC8qZW5hYmxlQ2FjaGluZzogKi8gdHJ1ZSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPntcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmF1dGhvcml6YXRpb25fZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgRW5kU2Vzc2lvbkVuZHBvaW50OiByZXNwb25zZS5lbmRfc2Vzc2lvbl9lbmRwb2ludCxcbiAgICAgICAgICAgICAgICBJc3N1ZXI6IHJlc3BvbnNlLmlzc3VlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UuXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBpbiB0aGUgY2FjaGVcbiAgICogRGlzY292ZXIgZW5kcG9pbnRzIHZpYSBvcGVuaWQtY29uZmlndXJhdGlvblxuICAgKiBJZiBzdWNjZXNzZnVsLCBjYWNoZXMgdGhlIGVuZHBvaW50IGZvciBsYXRlciB1c2UgaW4gT0lEQ1xuICAgKi9cbiAgcHVibGljIHJlc29sdmVFbmRwb2ludHNBc3luYygpOiBQcm9taXNlPEF1dGhvcml0eT4ge1xuICAgIGxldCBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQgPSBcIlwiO1xuICAgIHJldHVybiB0aGlzLkdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCkudGhlbihvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSA9PiB7XG4gICAgICBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQgPSBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZTtcbiAgICAgIHJldHVybiB0aGlzLkRpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCk7XG4gICAgfSkudGhlbigodGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSA9IHRlbmFudERpc2NvdmVyeVJlc3BvbnNlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz47XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDYWxsYmFjayB7XG4gIChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gIEVycm9yLFxuICBXYXJuaW5nLFxuICBJbmZvLFxuICBWZXJib3NlXG59XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIgey8vIFNpbmdsZXRvbiBDbGFzc1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICAvLyBUT0RPOiBUaGlzIGRvZXMgbm90IHNlZW0gdG8gYmUgYSBzaW5nbGV0b24hISBDaGFuZ2Ugb3IgRGVsZXRlLlxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nZ2VyO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHBpaUxvZ2dpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjaztcblxuICBjb25zdHJ1Y3Rvcihsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2ssXG4gICAgICBvcHRpb25zOlxuICAgICAge1xuICAgICAgICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcsXG4gICAgICAgICAgbGV2ZWw/OiBMb2dMZXZlbCxcbiAgICAgICAgICBwaWlMb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4sXG4gICAgICB9ID0ge30pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjb3JyZWxhdGlvbklkID0gXCJcIixcbiAgICAgICAgICBsZXZlbCA9IExvZ0xldmVsLkluZm8sXG4gICAgICAgICAgcGlpTG9nZ2luZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIHRoaXMubG9jYWxDYWxsYmFjayA9IGxvY2FsQ2FsbGJhY2s7XG4gICAgICB0aGlzLmNvcnJlbGF0aW9uSWQgPSBjb3JyZWxhdGlvbklkO1xuICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgdGhpcy5waWlMb2dnaW5nRW5hYmxlZCA9IHBpaUxvZ2dpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgbG9nTWVzc2FnZShsb2dMZXZlbDogTG9nTGV2ZWwsIGxvZ01lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoKGxvZ0xldmVsID4gdGhpcy5sZXZlbCkgfHwgKCF0aGlzLnBpaUxvZ2dpbmdFbmFibGVkICYmIGNvbnRhaW5zUGlpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG4gICAgbGV0IGxvZzogc3RyaW5nO1xuICAgIGlmICghVXRpbHMuaXNFbXB0eSh0aGlzLmNvcnJlbGF0aW9uSWQpKSB7XG4gICAgICBsb2cgPSB0aW1lc3RhbXAgKyBcIjpcIiArIHRoaXMuY29ycmVsYXRpb25JZCArIFwiLVwiICsgVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZyA9IHRpbWVzdGFtcCArIFwiOlwiICsgVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgIH1cbiAgICB0aGlzLmV4ZWN1dGVDYWxsYmFjayhsb2dMZXZlbCwgbG9nLCBjb250YWluc1BpaSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXhlY3V0ZUNhbGxiYWNrKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmxvY2FsQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMubG9jYWxDYWxsYmFjayhsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlcnJvclBpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLldhcm5pbmcsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB3YXJuaW5nUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBpbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5JbmZvLCBtZXNzYWdlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaW5mb1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmVyYm9zZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZlcmJvc2VQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLlZlcmJvc2UsIG1lc3NhZ2UsIHRydWUpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XG5cbmV4cG9ydCBjb25zdCBTZXJ2ZXJFcnJvck1lc3NhZ2UgPSB7XG4gICAgc2VydmVyVW5hdmFpbGFibGU6IHtcbiAgICAgICAgY29kZTogXCJzZXJ2ZXJfdW5hdmFpbGFibGVcIixcbiAgICAgICAgZGVzYzogXCJTZXJ2ZXIgaXMgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUuXCJcbiAgICB9LFxuICAgIHVua25vd25TZXJ2ZXJFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVua25vd25fc2VydmVyX2Vycm9yXCJcbiAgICB9LFxufTtcblxuLyoqXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciB3aXRoIHRoZSBzZXJ2ZXIgY29kZSwgZm9yIGV4YW1wbGUsIHVuYXZhaWxhYmlsaXR5LlxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiU2VydmVyRXJyb3JcIjtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU2VydmVyRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU2VydmVyVW5hdmFpbGFibGVFcnJvcigpOiBTZXJ2ZXJFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnNlcnZlclVuYXZhaWxhYmxlLmNvZGUsXG4gICAgICAgICAgICBTZXJ2ZXJFcnJvck1lc3NhZ2Uuc2VydmVyVW5hdmFpbGFibGUuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVua25vd25TZXJ2ZXJFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IFNlcnZlckVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJFcnJvcihTZXJ2ZXJFcnJvck1lc3NhZ2UudW5rbm93blNlcnZlckVycm9yLmNvZGUsXG4gICAgICAgICAgICBlcnJvckRlc2MpO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcblxyXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtXCI7XHJcbmltcG9ydCB7IEFjY2Vzc1Rva2VuS2V5IH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5LZXlcIjtcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5WYWx1ZSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuVmFsdWVcIjtcclxuaW1wb3J0IHsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgfSBmcm9tIFwiLi9TZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgQ2xpZW50SW5mbyB9IGZyb20gXCIuL0NsaWVudEluZm9cIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzLCBTU09UeXBlcywgUHJvbXB0U3RhdGUgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgSWRUb2tlbiB9IGZyb20gXCIuL0lkVG9rZW5cIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XHJcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcclxuaW1wb3J0IHsgQXV0aG9yaXR5RmFjdG9yeSB9IGZyb20gXCIuL0F1dGhvcml0eUZhY3RvcnlcIjtcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgYnVpbGRDb25maWd1cmF0aW9uIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIFFQRGljdCB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xyXG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcclxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZSB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XHJcbmltcG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XHJcbmltcG9ydCB7IEF1dGhSZXNwb25zZSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xyXG5cclxuLy8gZGVmYXVsdCBhdXRob3JpdHlcclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhdXRob3JpdHkgLSBBIFVSTCBpbmRpY2F0aW5nIGEgZGlyZWN0b3J5IHRoYXQgTVNBTCBjYW4gdXNlIHRvIG9idGFpbiB0b2tlbnMuXHJcbiAqIC0gSW4gQXp1cmUgQUQsIGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vJmx0O3RlbmFudCZndDsvJmx0O3RlbmFudCZndDssIHdoZXJlICZsdDt0ZW5hbnQmZ3Q7IGlzIHRoZSBkaXJlY3RvcnkgaG9zdCAoZS5nLiBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20pIGFuZCAmbHQ7dGVuYW50Jmd0OyBpcyBhIGlkZW50aWZpZXIgd2l0aGluIHRoZSBkaXJlY3RvcnkgaXRzZWxmIChlLmcuIGEgZG9tYWluIGFzc29jaWF0ZWQgdG8gdGhlIHRlbmFudCwgc3VjaCBhcyBjb250b3NvLm9ubWljcm9zb2Z0LmNvbSwgb3IgdGhlIEdVSUQgcmVwcmVzZW50aW5nIHRoZSBUZW5hbnRJRCBwcm9wZXJ0eSBvZiB0aGUgZGlyZWN0b3J5KVxyXG4gKiAtIEluIEF6dXJlIEIyQywgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly8mbHQ7aW5zdGFuY2UmZ3Q7L3RmcC8mbHQ7dGVuYW50Jmd0Oy88cG9saWN5TmFtZT4vXHJcbiAqIC0gRGVmYXVsdCB2YWx1ZSBpczogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCJcclxuICovXHJcbmNvbnN0IERFRkFVTFRfQVVUSE9SSVRZID0gXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCI7XHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRvIGhhbmRsZSBpRnJhbWUgZ2VuZXJhdGlvbiwgUG9wdXAgV2luZG93IGNyZWF0aW9uIGFuZCByZWRpcmVjdCBoYW5kbGluZ1xyXG4gKi9cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgbXNhbDogT2JqZWN0O1xyXG4gICAgICAgIEN1c3RvbUV2ZW50OiBDdXN0b21FdmVudDtcclxuICAgICAgICBFdmVudDogRXZlbnQ7XHJcbiAgICAgICAgYWN0aXZlUmVuZXdhbHM6IHt9O1xyXG4gICAgICAgIHJlbmV3U3RhdGVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgICAgIGNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlcyA6IHt9O1xyXG4gICAgICAgIHByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzOiB7fTtcclxuICAgICAgICBvcGVuZWRXaW5kb3dzOiBBcnJheTxXaW5kb3c+O1xyXG4gICAgICAgIHJlcXVlc3RUeXBlOiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiByZXNwb25zZV90eXBlIGZyb20gT3BlbklEQ29ubmVjdFxyXG4gKiBSZWZlcmVuY2VzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb2F1dGgtdjItbXVsdGlwbGUtcmVzcG9uc2UtdHlwZXMtMV8wLmh0bWwgJiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTQuMi4xXHJcbiAqIFNpbmNlIHdlIHN1cHBvcnQgb25seSBpbXBsaWNpdCBmbG93IGluIHRoaXMgbGlicmFyeSwgd2UgcmVzdHJpY3QgdGhlIHJlc3BvbnNlX3R5cGUgc3VwcG9ydCB0byBvbmx5ICd0b2tlbicgYW5kICdpZF90b2tlbidcclxuICpcclxuICogQGhpZGRlblxyXG4gKi9cclxuY29uc3QgUmVzcG9uc2VUeXBlcyA9IHtcclxuICBpZF90b2tlbjogXCJpZF90b2tlblwiLFxyXG4gIHRva2VuOiBcInRva2VuXCIsXHJcbiAgaWRfdG9rZW5fdG9rZW46IFwiaWRfdG9rZW4gdG9rZW5cIlxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVSZXN1bHQge1xyXG4gIGVycm9yRGVzYzogc3RyaW5nO1xyXG4gIHRva2VuOiBzdHJpbmc7XHJcbiAgZXJyb3I6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGEgdHlwZSB0byBob2xkIGluZm9ybWF0aW9uIGFib3V0IHN0YXRlIHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVzcG9uc2VTdGF0ZUluZm8gPSB7XHJcbiAgc3RhdGU6IHN0cmluZztcclxuICBzdGF0ZU1hdGNoOiBib29sZWFuO1xyXG4gIHJlcXVlc3RUeXBlOiBzdHJpbmc7XHJcbn07XHJcblxyXG4vKipcclxuICogQSB0eXBlIGFsaWFzIGZvciBhIHRva2VuUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cclxuICogQHBhcmFtIHRva2VuUmVjZWl2ZWRDYWxsYmFjay50b2tlbiB0b2tlbiByZXR1cm5lZCBmcm9tIFNUUyBpZiB0b2tlbiByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwuXHJcbiAqIEBwYXJhbSB0b2tlblJlY2VpdmVkQ2FsbGJhY2sudG9rZW5UeXBlIHRva2VuVHlwZSByZXR1cm5lZCBmcm9tIHRoZSBTVFMgaWYgQVBJIGNhbGwgaXMgc3VjY2Vzc2Z1bC4gUG9zc2libGUgdmFsdWVzIGFyZTogaWRfdG9rZW4gT1IgYWNjZXNzX3Rva2VuLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQSB0eXBlIGFsaWFzIGZvciBhIGVycm9yUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cclxuICogQHBhcmFtIGVycm9yUmVjZWl2ZWRDYWxsYmFjay5lcnJvckRlc2MgZXJyb3Igb2JqZWN0IGNyZWF0ZWQgYnkgbGlicmFyeSBjb250YWluaW5nIGVycm9yIHN0cmluZyByZXR1cm5lZCBmcm9tIHRoZSBTVFMgaWYgQVBJIGNhbGwgZmFpbHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSAoYXV0aEVycm9yOiBBdXRoRXJyb3IsIGFjY291bnRTdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIEEgd3JhcHBlciB0byBoYW5kbGUgdGhlIHRva2VuIHJlc3BvbnNlL2Vycm9yIHdpdGhpbiB0aGUgaUZyYW1lIGFsd2F5c1xyXG4gKlxyXG4gKiBAcGFyYW0gdGFyZ2V0XHJcbiAqIEBwYXJhbSBwcm9wZXJ0eUtleVxyXG4gKiBAcGFyYW0gZGVzY3JpcHRvclxyXG4gKi9cclxuY29uc3QgcmVzb2x2ZVRva2VuT25seUlmT3V0T2ZJZnJhbWUgPSAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG4gIGNvbnN0IHRva2VuQWNxdWlzaXRpb25NZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNJbklmcmFtZSgpXHJcbiAgICAgICAgICA/IG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDogdG9rZW5BY3F1aXNpdGlvbk1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcclxuICB9O1xyXG4gIHJldHVybiBkZXNjcmlwdG9yO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGNsYXNzIC0gT2JqZWN0IEluc3RhbmNlIHRoYXQgdGhlIGRldmVsb3BlciB3b3VsZCBuZWVkIHRvIG1ha2UgbG9naW4vYWNxdWlyZVRva2VuIGNhbGxzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVXNlckFnZW50QXBwbGljYXRpb24ge1xyXG5cclxuICAvLyBpbnB1dCBDb25maWd1cmF0aW9uIGJ5IHRoZSBkZXZlbG9wZXIvdXNlclxyXG4gIHByaXZhdGUgY29uZmlnOiBDb25maWd1cmF0aW9uO1xyXG5cclxuICAvLyBjYWxsYmFja3MgZm9yIHRva2VuL2Vycm9yXHJcbiAgcHJpdmF0ZSB0b2tlblJlY2VpdmVkQ2FsbGJhY2s6IHRva2VuUmVjZWl2ZWRDYWxsYmFjayA9IG51bGw7XHJcbiAgcHJpdmF0ZSBlcnJvclJlY2VpdmVkQ2FsbGJhY2s6IGVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IG51bGw7XHJcblxyXG4gIC8vIEFkZGVkIGZvciByZWFkYWJpbGl0eSBhcyB0aGVzZSBwYXJhbXMgYXJlIHZlcnkgZnJlcXVlbnRseSB1c2VkXHJcbiAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcclxuICBwcml2YXRlIGNsaWVudElkOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBpbkNvb2tpZTogYm9vbGVhbjtcclxuXHJcbiAgLy8gQ2FjaGUgYW5kIEFjY291bnQgaW5mbyByZWZlcnJlZCBhY3Jvc3MgdG9rZW4gZ3JhbnQgZmxvd1xyXG4gIHByb3RlY3RlZCBjYWNoZVN0b3JhZ2U6IFN0b3JhZ2U7XHJcbiAgcHJpdmF0ZSBhY2NvdW50OiBBY2NvdW50O1xyXG5cclxuICAvLyBzdGF0ZSB2YXJpYWJsZXNcclxuICBwcml2YXRlIGxvZ2luSW5Qcm9ncmVzczogYm9vbGVhbjtcclxuICBwcml2YXRlIGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3M6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBzaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBzaWxlbnRMb2dpbjogYm9vbGVhbjtcclxuICBwcml2YXRlIHJlZGlyZWN0Q2FsbGJhY2tzU2V0OiBib29sZWFuO1xyXG5cclxuICAvLyBBdXRob3JpdHkgRnVuY3Rpb25hbGl0eVxyXG4gIHByb3RlY3RlZCBhdXRob3JpdHlJbnN0YW5jZTogQXV0aG9yaXR5O1xyXG5cclxuICAvLyBJZiB0aGUgZGV2ZWxvcGVyIHBhc3NlcyBhbiBhdXRob3JpdHksIGNyZWF0ZSBhbiBpbnN0YW5jZVxyXG4gIHB1YmxpYyBzZXQgYXV0aG9yaXR5KHZhbCkge1xyXG4gICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UodmFsLCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KTtcclxuICB9XHJcblxyXG4gIC8vIHJldHJpZXZlIHRoZSBhdXRob3JpdHkgaW5zdGFuY2VcclxuICBwdWJsaWMgZ2V0IGF1dGhvcml0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEF1dGhvcml0eUluc3RhbmNlKCk6IEF1dGhvcml0eSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgYSBVc2VyQWdlbnRBcHBsaWNhdGlvbiB3aXRoIGEgZ2l2ZW4gY2xpZW50SWQgYW5kIGF1dGhvcml0eS5cclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRJZCAtIFRoZSBjbGllbnRJRCBvZiB5b3VyIGFwcGxpY2F0aW9uLCB5b3Ugc2hvdWxkIGdldCB0aGlzIGZyb20gdGhlIGFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSAtIEEgVVJMIGluZGljYXRpbmcgYSBkaXJlY3RvcnkgdGhhdCBNU0FMIGNhbiB1c2UgdG8gb2J0YWluIHRva2Vucy5cclxuICAgKiAtIEluIEF6dXJlIEFELCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZT4vJmx0O3RlbmFudCZndDssXFwgd2hlcmUgJmx0O2luc3RhbmNlJmd0OyBpcyB0aGUgZGlyZWN0b3J5IGhvc3QgKGUuZy4gaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tKSBhbmQgJmx0O3RlbmFudCZndDsgaXMgYSBpZGVudGlmaWVyIHdpdGhpbiB0aGUgZGlyZWN0b3J5IGl0c2VsZiAoZS5nLiBhIGRvbWFpbiBhc3NvY2lhdGVkIHRvIHRoZSB0ZW5hbnQsIHN1Y2ggYXMgY29udG9zby5vbm1pY3Jvc29mdC5jb20sIG9yIHRoZSBHVUlEIHJlcHJlc2VudGluZyB0aGUgVGVuYW50SUQgcHJvcGVydHkgb2YgdGhlIGRpcmVjdG9yeSlcclxuICAgKiAtIEluIEF6dXJlIEIyQywgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly8mbHQ7aW5zdGFuY2UmZ3Q7L3RmcC8mbHQ7dGVuYW50SWQmZ3Q7LyZsdDtwb2xpY3lOYW1lJmd0Oy9cclxuICAgKiAtIERlZmF1bHQgdmFsdWUgaXM6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiXHJcbiAgICogQHBhcmFtIF90b2tlblJlY2VpdmVkQ2FsbGJhY2sgLSAgVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBnZXQgdGhlIGNhbGwgYmFjayBvbmNlIHRoaXMgQVBJIGlzIGNvbXBsZXRlZCAoZWl0aGVyIHN1Y2Nlc3NmdWxseSBvciB3aXRoIGEgZmFpbHVyZSkuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWxpZGF0ZUF1dGhvcml0eSAtICBib29sZWFuIHRvIHR1cm4gYXV0aG9yaXR5IHZhbGlkYXRpb24gb24vb2ZmLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcclxuXHJcbiAgICAvLyBTZXQgdGhlIENvbmZpZ3VyYXRpb25cclxuICAgIHRoaXMuY29uZmlnID0gYnVpbGRDb25maWd1cmF0aW9uKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIC8vIFNldCB0aGUgY2FsbGJhY2sgYm9vbGVhblxyXG4gICAgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMubG9nZ2VyID0gdGhpcy5jb25maWcuc3lzdGVtLmxvZ2dlcjtcclxuICAgIHRoaXMuY2xpZW50SWQgPSB0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkO1xyXG4gICAgdGhpcy5pbkNvb2tpZSA9IHRoaXMuY29uZmlnLmNhY2hlLnN0b3JlQXV0aFN0YXRlSW5Db29raWU7XHJcblxyXG4gICAgLy8gaWYgbm8gYXV0aG9yaXR5IGlzIHBhc3NlZCwgc2V0IHRoZSBkZWZhdWx0OiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxyXG4gICAgdGhpcy5hdXRob3JpdHkgPSB0aGlzLmNvbmZpZy5hdXRoLmF1dGhvcml0eSB8fCBERUZBVUxUX0FVVEhPUklUWTtcclxuXHJcbiAgICAvLyB0cmFjayBsb2dpbiBhbmQgYWNxdWlyZVRva2VuIGluIHByb2dyZXNzXHJcbiAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgLy8gY2FjaGUga2V5cyBtc2FsIC0gdHlwZXNjcmlwdCB0aHJvd3MgYW4gZXJyb3IgaWYgYW55IHZhbHVlIG90aGVyIHRoYW4gXCJsb2NhbFN0b3JhZ2VcIiBvciBcInNlc3Npb25TdG9yYWdlXCIgaXMgcGFzc2VkXHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZSA9IG5ldyBTdG9yYWdlKHRoaXMuY29uZmlnLmNhY2hlLmNhY2hlTG9jYXRpb24pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2FjaGVMb2NhdGlvbkNvbmZpZ0Vycm9yKHRoaXMuY29uZmlnLmNhY2hlLmNhY2hlTG9jYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluaXRpYWxpemUgd2luZG93IGhhbmRsaW5nIGNvZGVcclxuICAgIHdpbmRvdy5vcGVuZWRXaW5kb3dzID0gW107XHJcbiAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHMgPSB7fTtcclxuICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xyXG4gICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlcyA9IHsgfTtcclxuICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlcyA9IHsgfTtcclxuICAgIHdpbmRvdy5tc2FsID0gdGhpcztcclxuXHJcbiAgICBjb25zdCB1cmxIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICBjb25zdCBpc0NhbGxiYWNrID0gdGhpcy5pc0NhbGxiYWNrKHVybEhhc2gpO1xyXG5cclxuICAgIC8vIE9uIHRoZSBzZXJ2ZXIgMzAyIC0gUmVkaXJlY3QsIGhhbmRsZSB0aGlzXHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcclxuICAgICAgaWYgKGlzQ2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UodXJsSGFzaCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI3JlZ2lvbiBSZWRpcmVjdCBDYWxsYmFja3NcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIHRoZSByZWRpcmVjdCBmbG93IHRvIHNlbmQgYmFjayB0aGUgc3VjY2VzcyBvciBlcnJvciBvYmplY3QuXHJcbiAgICogQHBhcmFtIHt0b2tlblJlY2VpdmVkQ2FsbGJhY2t9IHN1Y2Nlc3NDYWxsYmFjayAtIENhbGxiYWNrIHdoaWNoIGNvbnRhaW5zIHRoZSBBdXRoUmVzcG9uc2Ugb2JqZWN0LCBjb250YWluaW5nIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxyXG4gICAqIEBwYXJhbSB7ZXJyb3JSZWNlaXZlZENhbGxiYWNrfSBlcnJvckNhbGxiYWNrIC0gQ2FsbGJhY2sgd2hpY2ggY29udGFpbnMgYSBBdXRoRXJyb3Igb2JqZWN0LCBjb250YWluaW5nIGVycm9yIGRhdGEgZnJvbSBlaXRoZXIgdGhlIHNlcnZlclxyXG4gICAqIG9yIHRoZSBsaWJyYXJ5LCBkZXBlbmRpbmcgb24gdGhlIG9yaWdpbiBvZiB0aGUgZXJyb3IuXHJcbiAgICovXHJcbiAgaGFuZGxlUmVkaXJlY3RDYWxsYmFja3Moc3VjY2Vzc0NhbGxiYWNrOiB0b2tlblJlY2VpdmVkQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s6IGVycm9yUmVjZWl2ZWRDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgaWYgKCFzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoXCJzdWNjZXNzQ2FsbGJhY2tcIiwgc3VjY2Vzc0NhbGxiYWNrKTtcclxuICAgIH0gZWxzZSBpZiAoIWVycm9yQ2FsbGJhY2spIHtcclxuICAgICAgdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCA9IGZhbHNlO1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlSW52YWxpZENhbGxiYWNrT2JqZWN0RXJyb3IoXCJlcnJvckNhbGxiYWNrXCIsIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBjYWxsYmFja3NcclxuICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgdGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSBlcnJvckNhbGxiYWNrO1xyXG5cclxuICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSB0cnVlO1xyXG5cclxuICAgIC8vIE9uIHRoZSBzZXJ2ZXIgMzAyIC0gUmVkaXJlY3QsIGhhbmRsZSB0aGlzXHJcbiAgICAvLyBUT0RPOiByZW5hbWUgcGVuZGluZ0NhbGxiYWNrIHRvIGNhY2hlZEhhc2hcclxuICAgIGlmICghdGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICBjb25zdCBwZW5kaW5nQ2FsbGJhY2sgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcclxuICAgICAgaWYgKHBlbmRpbmdDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0NhbGxCYWNrKHBlbmRpbmdDYWxsYmFjaywgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gUmVkaXJlY3QgRmxvd1xyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSB0aGUgbG9naW4gcHJvY2VzcyBieSByZWRpcmVjdGluZyB0aGUgdXNlciB0byB0aGUgU1RTIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXHJcbiAgICogQHBhcmFtIHtBcnJheS48c3RyaW5nPn0gc2NvcGVzIC0gUGVybWlzc2lvbnMgeW91IHdhbnQgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbi4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0cmFRdWVyeVBhcmFtZXRlcnMgLSBLZXktdmFsdWUgcGFpcnMgdG8gcGFzcyB0byB0aGUgYXV0aGVudGljYXRpb24gc2VydmVyIGR1cmluZyB0aGUgaW50ZXJhY3RpdmUgYXV0aGVudGljYXRpb24gZmxvdy5cclxuICAgKi9cclxuICBsb2dpblJlZGlyZWN0KHJlcXVlc3Q/OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBUaHJvdyBlcnJvciBpZiBjYWxsYmFja3MgYXJlIG5vdCBzZXQgYmVmb3JlIHJlZGlyZWN0XHJcbiAgICBpZiAoIXRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVJlZGlyZWN0Q2FsbGJhY2tzTm90U2V0RXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGVzIG5hdmlnYXRlIHVybDsgc2F2ZXMgdmFsdWUgaW4gY2FjaGU7IHJlZGlyZWN0IHVzZXIgdG8gQUFEXHJcbiAgICBpZiAodGhpcy5sb2dpbkluUHJvZ3Jlc3MpIHtcclxuICAgICAgdGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2soQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCksIHRoaXMuZ2V0QWNjb3VudFN0YXRlKHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgZXh0cmFTY29wZXNUb0NvbnNlbnQgaXMgcGFzc2VkLCBhcHBlbmQgdGhlbSB0byB0aGUgbG9naW4gcmVxdWVzdFxyXG4gICAgbGV0IHNjb3BlczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuYXBwZW5kU2NvcGVzKHJlcXVlc3QpO1xyXG5cclxuICAgIC8vIFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh0aGUgdmFsaWRhdGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxyXG4gICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzLCBmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG5cclxuICAgIC8vIGRlZmVyIHF1ZXJ5UGFyYW1ldGVycyBnZW5lcmF0aW9uIHRvIEhlbHBlciBpZiBkZXZlbG9wZXIgcGFzc2VzIGFjY291bnQvc2lkL2xvZ2luX2hpbnRcclxuICAgICBpZiAoVXRpbHMuaXNTU09QYXJhbShyZXF1ZXN0KSkge1xyXG4gICAgICAgLy8gaWYgYWNjb3VudCBpcyBub3QgcHJvdmlkZWQsIHdlIHBhc3MgbnVsbFxyXG4gICAgICAgdGhpcy5sb2dpblJlZGlyZWN0SGVscGVyKGFjY291bnQsIHJlcXVlc3QsIHNjb3Blcyk7XHJcbiAgICB9XHJcbiAgICAvLyBlbHNlIGhhbmRsZSB0aGUgbGlicmFyeSBkYXRhXHJcbiAgICBlbHNlIHtcclxuICAgICAgLy8gZXh0cmFjdCBBREFMIGlkX3Rva2VuIGlmIGV4aXN0c1xyXG4gICAgICBsZXQgYWRhbElkVG9rZW4gPSB0aGlzLmV4dHJhY3RBREFMSWRUb2tlbigpO1xyXG5cclxuICAgICAgLy8gc2lsZW50IGxvZ2luIGlmIEFEQUwgaWRfdG9rZW4gaXMgcmV0cmlldmVkIHN1Y2Nlc3NmdWxseSAtIFNTT1xyXG4gICAgICBpZiAoYWRhbElkVG9rZW4gJiYgIXNjb3Blcykge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XHJcbiAgICAgICAgbGV0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0gdGhpcy5idWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3QpO1xyXG5cclxuICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlblNpbGVudCh0b2tlblJlcXVlc3QpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnRva2VuUmVjZWl2ZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuUmVjZWl2ZWRDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkVycm9yIG9jY3VycmVkIGR1cmluZyB1bmlmaWVkIGNhY2hlIEFUU1wiKTtcclxuXHJcbiAgICAgICAgICAvLyBjYWxsIHRoZSBsb2dpblJlZGlyZWN0SGVscGVyIGxhdGVyIHdpdGggbm8gdXNlciBhY2NvdW50IGNvbnRleHRcclxuICAgICAgICAgIHRoaXMubG9naW5SZWRpcmVjdEhlbHBlcihudWxsLCByZXF1ZXN0LCBzY29wZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGVsc2UgcHJvY2VlZCB0byBsb2dpblxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBjYWxsIHRoZSBsb2dpblJlZGlyZWN0SGVscGVyIGxhdGVyIHdpdGggbm8gdXNlciBhY2NvdW50IGNvbnRleHRcclxuICAgICAgICB0aGlzLmxvZ2luUmVkaXJlY3RIZWxwZXIobnVsbCwgcmVxdWVzdCwgc2NvcGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBsb2dpblJlZGlyZWN0XHJcbiAgICpcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQHBhcmFtIHNjb3Blc1xyXG4gICAqIEBwYXJhbSBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9naW5SZWRpcmVjdEhlbHBlcihhY2NvdW50OiBBY2NvdW50LCByZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHNjb3Blcz86IEFycmF5PHN0cmluZz4pIHtcclxuICAgIC8vIFRyYWNrIGxvZ2luIGluIHByb2dyZXNzXHJcbiAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKCgpID0+IHtcclxuXHJcbiAgICAgIC8vIGNyZWF0ZSB0aGUgUmVxdWVzdCB0byBiZSBzZW50IHRvIHRoZSBTZXJ2ZXJcclxuICAgICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcclxuICAgICAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlLFxyXG4gICAgICAgIHRoaXMuY2xpZW50SWQsIHNjb3BlcyxcclxuICAgICAgICBSZXNwb25zZVR5cGVzLmlkX3Rva2VuLFxyXG4gICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgICB0aGlzLmNvbmZpZy5hdXRoLnN0YXRlXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXHJcbiAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHRoaXMucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG5cclxuICAgICAgLy8gaWYgdGhlIHVzZXIgc2V0cyB0aGUgbG9naW4gc3RhcnQgcGFnZSAtIGFuZ3VsYXIgb25seT8/XHJcbiAgICAgIGxldCBsb2dpblN0YXJ0UGFnZSA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFuZ3VsYXJMb2dpblJlcXVlc3QpO1xyXG4gICAgICBpZiAoIWxvZ2luU3RhcnRQYWdlIHx8IGxvZ2luU3RhcnRQYWdlID09PSBcIlwiKSB7XHJcbiAgICAgICAgbG9naW5TdGFydFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5hbmd1bGFyTG9naW5SZXF1ZXN0LCBcIlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2FjaGUgdGhlIHN0YXRlLCBub25jZSwgYW5kIGxvZ2luIHJlcXVlc3QgZGF0YVxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIGxvZ2luU3RhcnRQYWdlLCB0aGlzLmluQ29va2llKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgXCJcIik7XHJcblxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XHJcblxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIFwiXCIpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgXCJcIik7XHJcblxyXG4gICAgICAvLyBDYWNoZSBhdXRob3JpdHlLZXlcclxuICAgICAgdGhpcy5zZXRBdXRob3JpdHlDYWNoZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuYXV0aG9yaXR5KTtcclxuXHJcbiAgICAgIC8vIGJ1aWxkIFVSTCB0byBuYXZpZ2F0ZSB0byBwcm9jZWVkIHdpdGggdGhlIGxvZ2luXHJcbiAgICAgIGxldCB1cmxOYXZpZ2F0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jcmVhdGVOYXZpZ2F0ZVVybChzY29wZXMpICsgQ29uc3RhbnRzLnJlc3BvbnNlX21vZGVfZnJhZ21lbnQ7XHJcblxyXG4gICAgICAvLyBSZWRpcmVjdCB1c2VyIHRvIGxvZ2luIFVSTFxyXG4gICAgICB0aGlzLnByb21wdFVzZXIodXJsTmF2aWdhdGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXHJcbiAgICogVG8gcmVuZXcgaWRUb2tlbiwgY2xpZW50SWQgc2hvdWxkIGJlIHBhc3NlZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgc2NvcGVzIGFycmF5LlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2NvcGVzIC0gUGVybWlzc2lvbnMgeW91IHdhbnQgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbi4gTm90IGFsbCBzY29wZXMgYXJlICBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4uIFNjb3BlcyBsaWtlIFwib3BlbmlkXCIgYW5kIFwicHJvZmlsZVwiIGFyZSBzZW50IHdpdGggZXZlcnkgcmVxdWVzdC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5IC0gQSBVUkwgaW5kaWNhdGluZyBhIGRpcmVjdG9yeSB0aGF0IE1TQUwgY2FuIHVzZSB0byBvYnRhaW4gdG9rZW5zLlxyXG4gICAqIC0gSW4gQXp1cmUgQUQsIGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8ve2luc3RhbmNlfS8mbHQ7dGVuYW50Jmd0Oywgd2hlcmUgJmx0O3RlbmFudCZndDsgaXMgdGhlIGRpcmVjdG9yeSBob3N0IChlLmcuIGh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbSkgYW5kICZsdDt0ZW5hbnQmZ3Q7IGlzIGEgaWRlbnRpZmllciB3aXRoaW4gdGhlIGRpcmVjdG9yeSBpdHNlbGYgKGUuZy4gYSBkb21haW4gYXNzb2NpYXRlZCB0byB0aGUgdGVuYW50LCBzdWNoIGFzIGNvbnRvc28ub25taWNyb3NvZnQuY29tLCBvciB0aGUgR1VJRCByZXByZXNlbnRpbmcgdGhlIFRlbmFudElEIHByb3BlcnR5IG9mIHRoZSBkaXJlY3RvcnkpXHJcbiAgICogLSBJbiBBenVyZSBCMkMsIGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8ve2luc3RhbmNlfS90ZnAvJmx0O3RlbmFudCZndDsvPHBvbGljeU5hbWU+XHJcbiAgICogLSBEZWZhdWx0IHZhbHVlIGlzOiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxyXG4gICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCAtIFRoZSBhY2NvdW50IGZvciB3aGljaCB0aGUgc2NvcGVzIGFyZSByZXF1ZXN0ZWQuVGhlIGRlZmF1bHQgYWNjb3VudCBpcyB0aGUgbG9nZ2VkIGluIGFjY291bnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dHJhUXVlcnlQYXJhbWV0ZXJzIC0gS2V5LXZhbHVlIHBhaXJzIHRvIHBhc3MgdG8gdGhlIFNUUyBkdXJpbmcgdGhlICBhdXRoZW50aWNhdGlvbiBmbG93LlxyXG4gICAqL1xyXG4gIGFjcXVpcmVUb2tlblJlZGlyZWN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IHZvaWQge1xyXG4gICAgLy8gVGhyb3cgZXJyb3IgaWYgY2FsbGJhY2tzIGFyZSBub3Qgc2V0IGJlZm9yZSByZWRpcmVjdFxyXG4gICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVSZWRpcmVjdENhbGxiYWNrc05vdFNldEVycm9yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXHJcbiAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShyZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBhY2NvdW50IG9iamVjdCBpZiBhIHNlc3Npb24gZXhpc3RzXHJcbiAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG5cclxuICAgIC8vIElmIGFscmVhZHkgaW4gcHJvZ3Jlc3MsIGRvIG5vdCBwcm9jZWVkXHJcbiAgICBpZiAodGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XHJcbiAgICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrKENsaWVudEF1dGhFcnJvci5jcmVhdGVBY3F1aXJlVG9rZW5JblByb2dyZXNzRXJyb3IoKSwgdGhpcy5nZXRBY2NvdW50U3RhdGUodGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlKSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBubyBzZXNzaW9uIGV4aXN0cywgcHJvbXB0IHRoZSB1c2VyIHRvIGxvZ2luLlxyXG4gICAgY29uc3Qgc2NvcGUgPSByZXF1ZXN0LnNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKCFhY2NvdW50ICYmICEocmVxdWVzdC5zaWQgIHx8IHJlcXVlc3QubG9naW5IaW50KSkge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycztcclxuICAgIGNvbnN0IGFjcXVpcmVUb2tlbkF1dGhvcml0eSA9IHJlcXVlc3QuYXV0aG9yaXR5ID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xyXG5cclxuICAgIC8vIFRyYWNrIHRoZSBhY3F1aXJlVG9rZW4gcHJvZ3Jlc3NcclxuICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IHRydWU7XHJcblxyXG4gICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LnJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAvLyBPbiBGdWxmaWxsbWVudFxyXG4gICAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCByZXF1ZXN0LnNjb3BlcywgZmFsc2UpO1xyXG4gICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXHJcbiAgICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LFxyXG4gICAgICAgIHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgcmVxdWVzdC5zY29wZXMsXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcclxuICAgICAgICB0aGlzLmNvbmZpZy5hdXRoLnN0YXRlXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBDYWNoZSBub25jZVxyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XHJcblxyXG4gICAgICAvLyBDYWNoZSBhY2NvdW50IGFuZCBhdXRob3JpdHlcclxuICAgICAgdGhpcy5zZXRBY2NvdW50Q2FjaGUoYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgdGhpcy5zZXRBdXRob3JpdHlDYWNoZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIGFjcXVpcmVUb2tlbkF1dGhvcml0eS5DYW5vbmljYWxBdXRob3JpdHkpO1xyXG5cclxuICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuXHJcbiAgICAgIC8vIENvbnN0cnVjdCB1cmxOYXZpZ2F0ZVxyXG4gICAgICBsZXQgdXJsTmF2aWdhdGUgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwocmVxdWVzdC5zY29wZXMpICsgQ29uc3RhbnRzLnJlc3BvbnNlX21vZGVfZnJhZ21lbnQ7XHJcblxyXG4gICAgICAvLyBzZXQgc3RhdGUgaW4gY2FjaGUgYW5kIHJlZGlyZWN0IHRvIHVybE5hdmlnYXRlXHJcbiAgICAgIGlmICh1cmxOYXZpZ2F0ZSkge1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybE5hdmlnYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIFNUUy4gSW4gY2FzZSBvZiByZWRpcmVjdCwgdGhlIHVybCBmcmFnbWVudCBoYXMgZWl0aGVyIGlkX3Rva2VuLCBhY2Nlc3NfdG9rZW4gb3IgZXJyb3IuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhhc2ggLSBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2UuXHJcbiAgICogQHJldHVybnMge0Jvb2xlYW59IC0gdHJ1ZSBpZiByZXNwb25zZSBjb250YWlucyBpZF90b2tlbiwgYWNjZXNzX3Rva2VuIG9yIGVycm9yLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIC8vIFRPRE8gLSByZW5hbWUgdGhpcywgdGhlIG5hbWUgaXMgY29uZnVzaW5nXHJcbiAgaXNDYWxsYmFjayhoYXNoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGhhc2ggPSB0aGlzLmdldEhhc2goaGFzaCk7XHJcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gVXRpbHMuZGVzZXJpYWxpemUoaGFzaCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uKSB8fFxyXG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvcikgfHxcclxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuYWNjZXNzVG9rZW4pIHx8XHJcbiAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmlkVG9rZW4pXHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gUG9wdXAgRmxvd1xyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSB0aGUgbG9naW4gcHJvY2VzcyBieSBvcGVuaW5nIGEgcG9wdXAgd2luZG93LlxyXG4gICAqIEBwYXJhbSB7QXJyYXkuPHN0cmluZz59IHNjb3BlcyAtIFBlcm1pc3Npb25zIHlvdSB3YW50IGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4uIE5vdCBhbGwgc2NvcGVzIGFyZSAgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRyYVF1ZXJ5UGFyYW1ldGVycyAtIEtleS12YWx1ZSBwYWlycyB0byBwYXNzIHRvIHRoZSBTVFMgZHVyaW5nIHRoZSBpbnRlcmFjdGl2ZSBhdXRoZW50aWNhdGlvbiBmbG93LlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxzdHJpbmc+fSAtIEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUgdG9rZW4gb3IgZXJyb3IuXHJcbiAgICovXHJcbiAgbG9naW5Qb3B1cChyZXF1ZXN0PzogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgIC8vIENyZWF0ZXMgbmF2aWdhdGUgdXJsOyBzYXZlcyB2YWx1ZSBpbiBjYWNoZTsgcmVkaXJlY3QgdXNlciB0byBBQURcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgLy8gRmFpbCBpZiBsb2dpbiBpcyBhbHJlYWR5IGluIHByb2dyZXNzXHJcbiAgICAgIGlmICh0aGlzLmxvZ2luSW5Qcm9ncmVzcykge1xyXG4gICAgICAgIHJldHVybiByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiBleHRyYVNjb3Blc1RvQ29uc2VudCBpcyBwYXNzZWQsIGFwcGVuZCB0aGVtIHRvIHRoZSBsb2dpbiByZXF1ZXN0XHJcbiAgICAgIGxldCBzY29wZXM6IEFycmF5PHN0cmluZz4gPSB0aGlzLmFwcGVuZFNjb3BlcyhyZXF1ZXN0KTtcclxuXHJcbiAgICAgIC8vIFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh0aGUgdmFsaWRhdGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxyXG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShzY29wZXMsIGZhbHNlKTtcclxuXHJcbiAgICAgIGxldCBhY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XHJcblxyXG4gICAgIC8vIGFkZCB0aGUgcHJvbXB0IHBhcmFtZXRlciB0byB0aGUgJ2V4dHJhUXVlcnlQYXJhbWV0ZXJzJyBpZiBwYXNzZWRcclxuICAgICAgaWYgKFV0aWxzLmlzU1NPUGFyYW0ocmVxdWVzdCkpIHtcclxuICAgICAgICAgLy8gaWYgYWNjb3VudCBpcyBub3QgcHJvdmlkZWQsIHdlIHBhc3MgbnVsbFxyXG4gICAgICAgICB0aGlzLmxvZ2luUG9wdXBIZWxwZXIoYWNjb3VudCwgcmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0LCBzY29wZXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGVsc2UgaGFuZGxlIHRoZSBsaWJyYXJ5IGRhdGFcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gRXh0cmFjdCBBREFMIGlkX3Rva2VuIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgIGxldCBhZGFsSWRUb2tlbiA9IHRoaXMuZXh0cmFjdEFEQUxJZFRva2VuKCk7XHJcblxyXG4gICAgICAgIC8vIHNpbGVudCBsb2dpbiBpZiBBREFMIGlkX3Rva2VuIGlzIHJldHJpZXZlZCBzdWNjZXNzZnVsbHkgLSBTU09cclxuICAgICAgICBpZiAoYWRhbElkVG9rZW4gJiYgIXNjb3Blcykge1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkFEQUwncyBpZFRva2VuIGV4aXN0cy4gRXh0cmFjdGluZyBsb2dpbiBpbmZvcm1hdGlvbiBmcm9tIEFEQUwncyBpZFRva2VuIFwiKTtcclxuICAgICAgICAgIGxldCB0b2tlblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHRoaXMuYnVpbGRJRFRva2VuUmVxdWVzdChyZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuU2lsZW50KHRva2VuUmVxdWVzdClcclxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xyXG5cclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFNcIik7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Qb3B1cEhlbHBlcihudWxsLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QsIHNjb3Blcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBwcm9jZWVkIHdpdGggbG9naW5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubG9naW5Qb3B1cEhlbHBlcihudWxsLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QsIHNjb3BlcyApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gbG9naW5Qb3B1cFxyXG4gICAqXHJcbiAgICogQGhpZGRlblxyXG4gICAqIEBwYXJhbSByZXNvbHZlXHJcbiAgICogQHBhcmFtIHJlamVjdFxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgKi9cclxuICBwcml2YXRlIGxvZ2luUG9wdXBIZWxwZXIoYWNjb3VudDogQWNjb3VudCwgcmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCByZXNvbHZlOiBhbnksIHJlamVjdDogYW55LCBzY29wZXM/OiBBcnJheTxzdHJpbmc+KSB7XHJcbiAgICBpZiAoIXNjb3Blcykge1xyXG4gICAgICBzY29wZXMgPSBbdGhpcy5jbGllbnRJZF07XHJcbiAgICB9XHJcbiAgICBjb25zdCBzY29wZSA9IHNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgcG9wdXAgd2luZG93XHJcbiAgICBjb25zdCBwb3BVcFdpbmRvdyA9IHRoaXMub3BlbldpbmRvdyhcImFib3V0OmJsYW5rXCIsIFwiX2JsYW5rXCIsIDEsIHRoaXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICBpZiAoIXBvcFVwV2luZG93KSB7XHJcbiAgICAgIC8vIFdlIHBhc3MgcmVqZWN0IGluIG9wZW5XaW5kb3csIHdlIHJlamVjdCB0aGVyZSBkdXJpbmcgYW4gZXJyb3JcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyYWNrIGxvZ2luIHByb2dyZXNzXHJcbiAgICB0aGlzLmxvZ2luSW5Qcm9ncmVzcyA9IHRydWU7XHJcblxyXG4gICAgLy8gUmVzb2x2ZSBlbmRwb2ludFxyXG4gICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5yZXNvbHZlRW5kcG9pbnRzQXN5bmMoKS50aGVuKCgpID0+IHtcclxuICAgICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyh0aGlzLmF1dGhvcml0eUluc3RhbmNlLCB0aGlzLmNsaWVudElkLCBzY29wZXMsIFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4sIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSwgdGhpcy5jb25maWcuYXV0aC5zdGF0ZSk7XHJcblxyXG4gICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyO1xyXG4gICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuXHJcbiAgICAgIC8vIENhY2hlIHRoZSBzdGF0ZSwgbm9uY2UsIGFuZCBsb2dpbiByZXF1ZXN0IGRhdGFcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5SZXF1ZXN0LCB3aW5kb3cubG9jYXRpb24uaHJlZiwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiXCIpO1xyXG5cclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xyXG5cclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBcIlwiKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIFwiXCIpO1xyXG5cclxuICAgICAgLy8gY2FjaGUgYXV0aG9yaXR5S2V5XHJcbiAgICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmF1dGhvcml0eSk7XHJcblxyXG4gICAgICAvLyBCdWlsZCB0aGUgVVJMIHRvIG5hdmlnYXRlIHRvIGluIHRoZSBwb3B1cCB3aW5kb3dcclxuICAgICAgbGV0IHVybE5hdmlnYXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHNjb3BlcykgICsgQ29uc3RhbnRzLnJlc3BvbnNlX21vZGVfZnJhZ21lbnQ7XHJcblxyXG4gICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XHJcblxyXG4gICAgICAvLyBSZWdpc3RlciBjYWxsYmFjayB0byBjYXB0dXJlIHJlc3VsdHMgZnJvbSBzZXJ2ZXJcclxuICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2NvcGUsIHJlc29sdmUsIHJlamVjdCk7XHJcblxyXG4gICAgICAvLyBOYXZpZ2F0ZSB1cmwgaW4gcG9wdXBXaW5kb3dcclxuICAgICAgaWYgKHBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlZCBQb3B1cCB3aW5kb3cgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XHJcbiAgICAgICAgcG9wVXBXaW5kb3cubG9jYXRpb24uaHJlZiA9IHVybE5hdmlnYXRlO1xyXG4gICAgICB9XHJcbiAgICB9LCAoKSA9PiB7XHJcbiAgICAgIC8vIEVuZHBvaW50IHJlc29sdXRpb24gZmFpbHVyZSBlcnJvclxyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSArIFwiOlwiICsgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5kZXNjKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmNvZGUpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5kZXNjKTtcclxuXHJcbiAgICAgIC8vIFdoYXQgaXMgdGhpcz8gSXMgdGhpcyB0aGUgcmVqZWN0IHRoYXQgaXMgcGFzc2VkIGluPz8gLS0gUkVETyB0aGlzIGluIHRoZSBzdWJzZXF1ZW50IHJlZmFjdG9yLCBwYXNzaW5nIHJlamVjdCBpcyBjb25mdXNpbmdcclxuICAgICAgaWYgKHJlamVjdCkge1xyXG4gICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIENsb3NlIHRoZSBwb3B1cCB3aW5kb3dcclxuICAgICAgaWYgKHBvcFVwV2luZG93KSB7XHJcbiAgICAgICAgcG9wVXBXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAvLyBBbGwgY2F0Y2ggLSB3aGVuIGlzIHRoaXMgZXhlY3V0ZWQ/IFBvc3NpYmx5IHdoZW4gZXJyb3IgaXMgdGhyb3duLCBidXQgbm90IGlmIHByZXZpb3VzIGZ1bmN0aW9uIHJlamVjdHMgaW5zdGVhZCBvZiB0aHJvd2luZ1xyXG4gICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xyXG4gICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIGFjcXVpcmUgYW4gYWNjZXNzIHRva2VuIGZvciBhIG5ldyB1c2VyIHVzaW5nIGludGVyYWN0aXZlIGF1dGhlbnRpY2F0aW9uIHZpYSBhIHBvcHVwIFdpbmRvdy5cclxuICAgKiBUbyByZXF1ZXN0IGFuIGlkX3Rva2VuLCBwYXNzIHRoZSBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgc2NvcGVzIGFycmF5LlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gc2NvcGVzIC0gUGVybWlzc2lvbnMgeW91IHdhbnQgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbi4gTm90IGFsbCBzY29wZXMgYXJlICBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4uIFNjb3BlcyBsaWtlIFwib3BlbmlkXCIgYW5kIFwicHJvZmlsZVwiIGFyZSBzZW50IHdpdGggZXZlcnkgcmVxdWVzdC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5IC0gQSBVUkwgaW5kaWNhdGluZyBhIGRpcmVjdG9yeSB0aGF0IE1TQUwgY2FuIHVzZSB0byBvYnRhaW4gdG9rZW5zLlxyXG4gICAqIC0gSW4gQXp1cmUgQUQsIGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vJmx0O3RlbmFudCZndDsvJmx0O3RlbmFudCZndDssIHdoZXJlICZsdDt0ZW5hbnQmZ3Q7IGlzIHRoZSBkaXJlY3RvcnkgaG9zdCAoZS5nLiBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20pIGFuZCAmbHQ7dGVuYW50Jmd0OyBpcyBhIGlkZW50aWZpZXIgd2l0aGluIHRoZSBkaXJlY3RvcnkgaXRzZWxmIChlLmcuIGEgZG9tYWluIGFzc29jaWF0ZWQgdG8gdGhlIHRlbmFudCwgc3VjaCBhcyBjb250b3NvLm9ubWljcm9zb2Z0LmNvbSwgb3IgdGhlIEdVSUQgcmVwcmVzZW50aW5nIHRoZSBUZW5hbnRJRCBwcm9wZXJ0eSBvZiB0aGUgZGlyZWN0b3J5KVxyXG4gICAqIC0gSW4gQXp1cmUgQjJDLCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDtpbnN0YW5jZSZndDsvdGZwLyZsdDt0ZW5hbnQmZ3Q7Lzxwb2xpY3lOYW1lPi9cclxuICAgKiAtIERlZmF1bHQgdmFsdWUgaXM6IFwiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vblwiLlxyXG4gICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCAtIFRoZSBhY2NvdW50IGZvciB3aGljaCB0aGUgc2NvcGVzIGFyZSByZXF1ZXN0ZWQuVGhlIGRlZmF1bHQgYWNjb3VudCBpcyB0aGUgbG9nZ2VkIGluIGFjY291bnQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dHJhUXVlcnlQYXJhbWV0ZXJzIC0gS2V5LXZhbHVlIHBhaXJzIHRvIHBhc3MgdG8gdGhlIFNUUyBkdXJpbmcgdGhlICBhdXRoZW50aWNhdGlvbiBmbG93LlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlLjxzdHJpbmc+fSAtIEEgUHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIHRoaXMgZnVuY3Rpb24gaGFzIGNvbXBsZXRlZCwgb3IgcmVqZWN0ZWQgaWYgYW4gZXJyb3Igd2FzIHJhaXNlZC4gUmV0dXJucyB0aGUgdG9rZW4gb3IgZXJyb3IuXHJcbiAgICovXHJcbiAgYWNxdWlyZVRva2VuUG9wdXAocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXHJcbiAgICAgIHRoaXMudmFsaWRhdGVJbnB1dFNjb3BlKHJlcXVlc3Quc2NvcGVzLCB0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHNjb3BlID0gcmVxdWVzdC5zY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIC8vIEdldCB0aGUgYWNjb3VudCBvYmplY3QgaWYgYSBzZXNzaW9uIGV4aXN0c1xyXG4gICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG5cclxuICAgICAgLy8gSWYgYWxyZWFkeSBpbiBwcm9ncmVzcywgdGhyb3cgYW4gZXJyb3IgYW5kIHJlamVjdCB0aGUgcmVxdWVzdFxyXG4gICAgICBpZiAodGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJZiBubyBzZXNzaW9uIGV4aXN0cywgcHJvbXB0IHRoZSB1c2VyIHRvIGxvZ2luLlxyXG4gICAgICBpZiAoIWFjY291bnQgJiYgISEocmVxdWVzdC5zaWQgIHx8IHJlcXVlc3QubG9naW5IaW50KSkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCIpO1xyXG4gICAgICAgIHJldHVybiByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHRyYWNrIHRoZSBhY3F1aXJlVG9rZW4gcHJvZ3Jlc3NcclxuICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzO1xyXG4gICAgICBjb25zdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkgPSByZXF1ZXN0LmF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuXHJcbiAgICAgIC8vIE9wZW4gdGhlIHBvcHVwIHdpbmRvd1xyXG4gICAgICBjb25zdCBwb3BVcFdpbmRvdyA9IHRoaXMub3BlbldpbmRvdyhcImFib3V0OmJsYW5rXCIsIFwiX2JsYW5rXCIsIDEsIHRoaXMsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgIGlmICghcG9wVXBXaW5kb3cpIHtcclxuICAgICAgICAvLyBXZSBwYXNzIHJlamVjdCB0byBvcGVuV2luZG93LCBzbyB3ZSBhcmUgcmVqZWN0aW5nIHRoZXJlLlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LnJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIE9uIGZ1bGxmaWxsbWVudFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnQsIHJlcXVlc3Quc2NvcGVzLCBmYWxzZSk7XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxyXG4gICAgICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LFxyXG4gICAgICAgICAgdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgIHJlcXVlc3Quc2NvcGVzLFxyXG4gICAgICAgICAgcmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLFxyXG4gICAgICAgICAgdGhpcy5jb25maWcuYXV0aC5zdGF0ZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHBvcHVsYXRlIFF1ZXJ5UGFyYW1ldGVycyAoc2lkL2xvZ2luX2hpbnQvZG9tYWluX2hpbnQpIGFuZCBhbnkgb3RoZXIgZXh0cmFRdWVyeVBhcmFtZXRlcnMgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuXHJcbiAgICAgICAgLy8gQ2FjaGUgbm9uY2VcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlO1xyXG5cclxuICAgICAgICAvLyBDYWNoZSBhY2NvdW50IGFuZCBhdXRob3JpdHlcclxuICAgICAgICB0aGlzLnNldEFjY291bnRDYWNoZShhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBhY3F1aXJlVG9rZW5BdXRob3JpdHkuQ2Fub25pY2FsQXV0aG9yaXR5KTtcclxuXHJcbiAgICAgICAgLy8gQ29uc3RydWN0IHRoZSB1cmxOYXZpZ2F0ZVxyXG4gICAgICAgIGxldCB1cmxOYXZpZ2F0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jcmVhdGVOYXZpZ2F0ZVVybChyZXF1ZXN0LnNjb3BlcykgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcclxuXHJcbiAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuXHJcbiAgICAgICAgLy8gb3BlbiBwb3B1cCB3aW5kb3cgdG8gdXJsTmF2aWdhdGVcclxuICAgICAgICBpZiAocG9wVXBXaW5kb3cpIHtcclxuICAgICAgICAgIHBvcFVwV2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxOYXZpZ2F0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgLy8gT24gcmVqZWN0aW9uXHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmNvZGUgKyBcIjpcIiArIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYyk7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmNvZGUpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmRlc2MpO1xyXG5cclxuICAgICAgICBpZiAocmVqZWN0KSB7XHJcbiAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9wVXBXaW5kb3cpIHtcclxuICAgICAgICAgICAgcG9wVXBXaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiY291bGQgbm90IHJlc29sdmUgZW5kcG9pbnRzXCIpO1xyXG4gICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKCkpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gc2VuZCB0aGUgdXNlciB0byB0aGUgcmVkaXJlY3RfdXJpIGFmdGVyIGF1dGhlbnRpY2F0aW9uIGlzIGNvbXBsZXRlLiBUaGUgdXNlcidzIGJlYXJlciB0b2tlbiBpcyBhdHRhY2hlZCB0byB0aGUgVVJJIGZyYWdtZW50IGFzIGFuIGlkX3Rva2VuL2FjY2Vzc190b2tlbiBmaWVsZC5cclxuICAgKiBUaGlzIGZ1bmN0aW9uIGFsc28gY2xvc2VzIHRoZSBwb3B1cCB3aW5kb3cgYWZ0ZXIgcmVkaXJlY3Rpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsTmF2aWdhdGVcclxuICAgKiBAcGFyYW0gdGl0bGVcclxuICAgKiBAcGFyYW0gaW50ZXJ2YWxcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VcclxuICAgKiBAcGFyYW0gcmVzb2x2ZVxyXG4gICAqIEBwYXJhbSByZWplY3RcclxuICAgKiBAaGlkZGVuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgb3BlbldpbmRvdyh1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpbnRlcnZhbDogbnVtYmVyLCBpbnN0YW5jZTogdGhpcywgcmVzb2x2ZT86IEZ1bmN0aW9uLCByZWplY3Q/OiBGdW5jdGlvbik6IFdpbmRvdyB7XHJcbiAgICAvLyBHZW5lcmF0ZSBhIHBvcHVwIHdpbmRvd1xyXG4gICAgdmFyIHBvcHVwV2luZG93OiBXaW5kb3c7XHJcbiAgICB0cnkge1xyXG4gICAgICBwb3B1cFdpbmRvdyA9IHRoaXMub3BlblBvcHVwKHVybE5hdmlnYXRlLCB0aXRsZSwgQ29uc3RhbnRzLnBvcFVwV2lkdGgsIENvbnN0YW50cy5wb3BVcEhlaWdodCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlICsgXCI6XCIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYyk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUpO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmRlc2MpO1xyXG4gICAgICBpZiAocmVqZWN0KSB7XHJcbiAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVQb3B1cFdpbmRvd0Vycm9yKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFB1c2ggcG9wdXAgd2luZG93IGhhbmRsZSBvbnRvIHN0YWNrIGZvciB0cmFja2luZ1xyXG4gICAgd2luZG93Lm9wZW5lZFdpbmRvd3MucHVzaChwb3B1cFdpbmRvdyk7XHJcblxyXG4gICAgY29uc3QgcG9sbFRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgLy8gSWYgcG9wdXAgY2xvc2VkIG9yIGxvZ2luIGluIHByb2dyZXNzLCBjYW5jZWwgbG9naW5cclxuICAgICAgaWYgKHBvcHVwV2luZG93ICYmIHBvcHVwV2luZG93LmNsb3NlZCAmJiBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MpIHtcclxuICAgICAgICBpZiAocmVqZWN0KSB7XHJcbiAgICAgICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJDYW5jZWxsZWRFcnJvcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xyXG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChcIm1zYWw6cG9wVXBDbG9zZWRcIiwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuY29kZSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmRlc2MpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwb3BVcFdpbmRvd0xvY2F0aW9uID0gcG9wdXBXaW5kb3cubG9jYXRpb247XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNoIGNoYW5nZXMsIGNsb3NlIHRoZSBwb3B1cCB3aW5kb3dcclxuICAgICAgICBpZiAocG9wVXBXaW5kb3dMb2NhdGlvbi5ocmVmLmluZGV4T2YodGhpcy5nZXRSZWRpcmVjdFVyaSgpKSAhPT0gLTEpIHtcclxuICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHBvbGxUaW1lcik7XHJcbiAgICAgICAgICBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgIGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJDbG9zaW5nIHBvcHVwIHdpbmRvd1wiKTtcclxuICAgICAgICAgIC8vIFRPRE86IENoZWNrIGhvdyB0aGlzIGNhbiBiZSBleHRyYWN0ZWQgZm9yIGFueSBmcmFtZXdvcmsgc3BlY2lmaWMgY29kZT9cclxuICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsuaXNBbmd1bGFyKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoXCJtc2FsOnBvcFVwSGFzaENoYW5nZWRcIiwgcG9wVXBXaW5kb3dMb2NhdGlvbi5oYXNoKTtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5vcGVuZWRXaW5kb3dzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuZWRXaW5kb3dzW2ldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIENyb3NzIERvbWFpbiB1cmwgY2hlY2sgZXJyb3IuXHJcbiAgICAgICAgLy8gV2lsbCBiZSB0aHJvd24gdW50aWwgQUFEIHJlZGlyZWN0cyB0aGUgdXNlciBiYWNrIHRvIHRoZSBhcHBcInMgcm9vdCBwYWdlIHdpdGggdGhlIHRva2VuLlxyXG4gICAgICAgIC8vIE5vIG5lZWQgdG8gbG9nIG9yIHRocm93IHRoaXMgZXJyb3IgYXMgaXQgd2lsbCBjcmVhdGUgdW5uZWNlc3NhcnkgdHJhZmZpYy5cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGludGVydmFsKTtcclxuXHJcbiAgICByZXR1cm4gcG9wdXBXaW5kb3c7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25maWd1cmVzIHBvcHVwIHdpbmRvdyBmb3IgbG9naW4uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsTmF2aWdhdGVcclxuICAgKiBAcGFyYW0gdGl0bGVcclxuICAgKiBAcGFyYW0gcG9wVXBXaWR0aFxyXG4gICAqIEBwYXJhbSBwb3BVcEhlaWdodFxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBvcGVuUG9wdXAodXJsTmF2aWdhdGU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgcG9wVXBXaWR0aDogbnVtYmVyLCBwb3BVcEhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvKipcclxuICAgICAgICogYWRkaW5nIHdpbkxlZnQgYW5kIHdpblRvcCB0byBhY2NvdW50IGZvciBkdWFsIG1vbml0b3JcclxuICAgICAgICogdXNpbmcgc2NyZWVuTGVmdCBhbmQgc2NyZWVuVG9wIGZvciBJRTggYW5kIGVhcmxpZXJcclxuICAgICAgICovXHJcbiAgICAgIGNvbnN0IHdpbkxlZnQgPSB3aW5kb3cuc2NyZWVuTGVmdCA/IHdpbmRvdy5zY3JlZW5MZWZ0IDogd2luZG93LnNjcmVlblg7XHJcbiAgICAgIGNvbnN0IHdpblRvcCA9IHdpbmRvdy5zY3JlZW5Ub3AgPyB3aW5kb3cuc2NyZWVuVG9wIDogd2luZG93LnNjcmVlblk7XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiB3aW5kb3cuaW5uZXJXaWR0aCBkaXNwbGF5cyBicm93c2VyIHdpbmRvd1wicyBoZWlnaHQgYW5kIHdpZHRoIGV4Y2x1ZGluZyB0b29sYmFyc1xyXG4gICAgICAgKiB1c2luZyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggZm9yIElFOCBhbmQgZWFybGllclxyXG4gICAgICAgKi9cclxuICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wVXBXaWR0aCAvIDIpKSArIHdpbkxlZnQ7XHJcbiAgICAgIGNvbnN0IHRvcCA9ICgoaGVpZ2h0IC8gMikgLSAocG9wVXBIZWlnaHQgLyAyKSkgKyB3aW5Ub3A7XHJcblxyXG4gICAgICAvLyBvcGVuIHRoZSB3aW5kb3dcclxuICAgICAgY29uc3QgcG9wdXBXaW5kb3cgPSB3aW5kb3cub3Blbih1cmxOYXZpZ2F0ZSwgdGl0bGUsIFwid2lkdGg9XCIgKyBwb3BVcFdpZHRoICsgXCIsIGhlaWdodD1cIiArIHBvcFVwSGVpZ2h0ICsgXCIsIHRvcD1cIiArIHRvcCArIFwiLCBsZWZ0PVwiICsgbGVmdCk7XHJcbiAgICAgIGlmICghcG9wdXBXaW5kb3cpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwb3B1cFdpbmRvdy5mb2N1cykge1xyXG4gICAgICAgIHBvcHVwV2luZG93LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwb3B1cFdpbmRvdztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJlcnJvciBvcGVuaW5nIHBvcHVwIFwiICsgZS5tZXNzYWdlKTtcclxuICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVQb3B1cFdpbmRvd0Vycm9yKGUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFNpbGVudCBGbG93XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gZ2V0IHRoZSB0b2tlbiBmcm9tIGNhY2hlLlxyXG4gICAqIE1TQUwgd2lsbCByZXR1cm4gdGhlIGNhY2hlZCB0b2tlbiBpZiBpdCBpcyBub3QgZXhwaXJlZC5cclxuICAgKiBPciBpdCB3aWxsIHNlbmQgYSByZXF1ZXN0IHRvIHRoZSBTVFMgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiB1c2luZyBhIGhpZGRlbiBpZnJhbWUuIFRvIHJlbmV3IGlkVG9rZW4sIGNsaWVudElkIHNob3VsZCBiZSBwYXNzZWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIHNjb3BlcyBhcnJheS5cclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHNjb3BlcyAtIFBlcm1pc3Npb25zIHlvdSB3YW50IGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4uIE5vdCBhbGwgc2NvcGVzIGFyZSAgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuLiBTY29wZXMgbGlrZSBcIm9wZW5pZFwiIGFuZCBcInByb2ZpbGVcIiBhcmUgc2VudCB3aXRoIGV2ZXJ5IHJlcXVlc3QuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSAtIEEgVVJMIGluZGljYXRpbmcgYSBkaXJlY3RvcnkgdGhhdCBNU0FMIGNhbiB1c2UgdG8gb2J0YWluIHRva2Vucy5cclxuICAgKiAtIEluIEF6dXJlIEFELCBpdCBpcyBvZiB0aGUgZm9ybSBodHRwczovLyZsdDt0ZW5hbnQmZ3Q7LyZsdDt0ZW5hbnQmZ3Q7LCB3aGVyZSAmbHQ7dGVuYW50Jmd0OyBpcyB0aGUgZGlyZWN0b3J5IGhvc3QgKGUuZy4gaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tKSBhbmQgJmx0O3RlbmFudCZndDsgaXMgYSBpZGVudGlmaWVyIHdpdGhpbiB0aGUgZGlyZWN0b3J5IGl0c2VsZiAoZS5nLiBhIGRvbWFpbiBhc3NvY2lhdGVkIHRvIHRoZSB0ZW5hbnQsIHN1Y2ggYXMgY29udG9zby5vbm1pY3Jvc29mdC5jb20sIG9yIHRoZSBHVUlEIHJlcHJlc2VudGluZyB0aGUgVGVuYW50SUQgcHJvcGVydHkgb2YgdGhlIGRpcmVjdG9yeSlcclxuICAgKiAtIEluIEF6dXJlIEIyQywgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly8mbHQ7aW5zdGFuY2UmZ3Q7L3RmcC8mbHQ7dGVuYW50Jmd0Oy88cG9saWN5TmFtZT4vXHJcbiAgICogLSBEZWZhdWx0IHZhbHVlIGlzOiBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb25cIlxyXG4gICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCAtIFRoZSB1c2VyIGFjY291bnQgZm9yIHdoaWNoIHRoZSBzY29wZXMgYXJlIHJlcXVlc3RlZC5UaGUgZGVmYXVsdCBhY2NvdW50IGlzIHRoZSBsb2dnZWQgaW4gYWNjb3VudC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXh0cmFRdWVyeVBhcmFtZXRlcnMgLSBLZXktdmFsdWUgcGFpcnMgdG8gcGFzcyB0byB0aGUgU1RTIGR1cmluZyB0aGUgIGF1dGhlbnRpY2F0aW9uIGZsb3cuXHJcbiAgICogQHJldHVybnMge1Byb21pc2UuPHN0cmluZz59IC0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXNvbHZlZCB3aXRoIHRva2VuIG9yIHJlamVjdGVkIHdpdGggZXJyb3IuXHJcbiAgICovXHJcbiAgQHJlc29sdmVUb2tlbk9ubHlJZk91dE9mSWZyYW1lXHJcbiAgYWNxdWlyZVRva2VuU2lsZW50KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXV0aFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodGhlIHZhbGlkYXRlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgdmFsaWRhdGlvbiBmYWlscylcclxuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUocmVxdWVzdC5zY29wZXMsIHRydWUpO1xyXG5cclxuICAgICAgY29uc3Qgc2NvcGUgPSByZXF1ZXN0LnNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYWNjb3VudCBnaXZlIGhpbSB0aGUgcHJpb3JpdHlcclxuICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IHJlcXVlc3QuYWNjb3VudCB8fCB0aGlzLmdldEFjY291bnQoKTtcclxuXHJcbiAgICAgIC8vIGV4dHJhY3QgaWYgdGhlcmUgaXMgYW4gYWRhbElkVG9rZW4gc3Rhc2hlZCBpbiB0aGUgY2FjaGVcclxuICAgICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XHJcblxyXG4gICAgICAvL2lmIHRoZXJlIGlzIG5vIGFjY291bnQgbG9nZ2VkIGluIGFuZCBubyBsb2dpbl9oaW50L3NpZCBpcyBwYXNzZWQgaW4gdGhlIHJlcXVlc3RcclxuICAgICAgaWYgKCFhY2NvdW50ICYmICEhKHJlcXVlc3Quc2lkICB8fCByZXF1ZXN0LmxvZ2luSGludCkgJiYgVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikgKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVzZXIgbG9naW4gaXMgcmVxdWlyZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgcmVxdWVzdC5zY29wZXMsIHRydWUpO1xyXG5cclxuICAgICAgbGV0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcclxuICAgICAgICBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSxcclxuICAgICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICAgIHJlcXVlc3Quc2NvcGVzLFxyXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgICB0aGlzLmdldFJlZGlyZWN0VXJpKCksXHJcbiAgICAgICAgdGhpcy5jb25maWcuYXV0aC5zdGF0ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxyXG4gICAgICBpZiAoVXRpbHMuaXNTU09QYXJhbShyZXF1ZXN0KSB8fCBhY2NvdW50KSB7XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gdGhpcy5wb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQsIHJlcXVlc3QsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XHJcbiAgICAgIH1cclxuICAgICAgLy9pZiB1c2VyIGRpZG4ndCBwYXNzIGxvZ2luX2hpbnQvc2lkIGFuZCBhZGFsJ3MgaWR0b2tlbiBpcyBwcmVzZW50LCBleHRyYWN0IHRoZSBsb2dpbl9oaW50IGZyb20gdGhlIGFkYWxJZFRva2VuXHJcbiAgICAgIGVsc2UgaWYgKCFhY2NvdW50ICYmICFVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSkge1xyXG4gICAgICAgIC8vIGlmIGFkYWxJZFRva2VuIGV4aXN0cywgZXh0cmFjdCB0aGUgU1NPIGluZm8gZnJvbSB0aGUgc2FtZVxyXG4gICAgICAgIGNvbnN0IGFkYWxJZFRva2VuT2JqZWN0ID0gVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XHJcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gdGhpcy5wb3B1bGF0ZVF1ZXJ5UGFyYW1zKGFjY291bnQsIG51bGwsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWRhbElkVG9rZW5PYmplY3QpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgYXV0aEVycjogQXV0aEVycm9yO1xyXG4gICAgICBsZXQgY2FjaGVSZXN1bHRSZXNwb25zZTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY2FjaGVSZXN1bHRSZXNwb25zZSA9IHRoaXMuZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGF1dGhFcnIgPSBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyByZXNvbHZlL3JlamVjdCBiYXNlZCBvbiBjYWNoZVJlc3VsdFxyXG4gICAgICBpZiAoY2FjaGVSZXN1bHRSZXNwb25zZSkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJUb2tlbiBpcyBhbHJlYWR5IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlKTtcclxuICAgICAgICByZXNvbHZlKGNhY2hlUmVzdWx0UmVzcG9uc2UpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGF1dGhFcnIpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKGF1dGhFcnIuZXJyb3JDb2RlICsgXCI6XCIgKyBhdXRoRXJyLmVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgcmVqZWN0KGF1dGhFcnIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGVsc2UgcHJvY2VlZCB3aXRoIGxvZ2luXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJUb2tlbiBpcyBub3QgaW4gY2FjaGUgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xyXG4gICAgICAgIC8vIENhY2hlIHJlc3VsdCBjYW4gcmV0dXJuIG51bGwgaWYgY2FjaGUgaXMgZW1wdHkuIEluIHRoYXQgY2FzZSwgc2V0IGF1dGhvcml0eSB0byBkZWZhdWx0IHZhbHVlIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQgdG8gdGhlIGFwaS5cclxuICAgICAgICBpZiAoIXNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSByZXF1ZXN0LmF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2FjaGUgbWlzc1xyXG4gICAgICAgIHJldHVybiBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UucmVzb2x2ZUVuZHBvaW50c0FzeW5jKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAvLyByZWZyZXNoIGF0dGVtcHQgd2l0aCBpZnJhbWVcclxuICAgICAgICAgIC8vIEFscmVhZHkgcmVuZXdpbmcgZm9yIHRoaXMgc2NvcGUsIGNhbGxiYWNrIHdoZW4gd2UgZ2V0IHRoZSB0b2tlbi5cclxuICAgICAgICAgIGlmICh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBmb3Igc2NvcGU6IFwiICsgc2NvcGUgKyBcIiBpcyBpbiBwcm9ncmVzcy4gUmVnaXN0ZXJpbmcgY2FsbGJhY2tcIik7XHJcbiAgICAgICAgICAgIC8vIEFjdGl2ZSByZW5ld2FscyBjb250YWlucyB0aGUgc3RhdGUgZm9yIGVhY2ggcmVuZXdhbC5cclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHdpbmRvdy5hY3RpdmVSZW5ld2Fsc1tzY29wZV0sIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnNjb3BlcyAmJiByZXF1ZXN0LnNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEgJiYgcmVxdWVzdC5zY29wZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgLy8gQXBwIHVzZXMgaWRUb2tlbiB0byBzZW5kIHRvIGFwaSBlbmRwb2ludHNcclxuICAgICAgICAgICAgICAvLyBEZWZhdWx0IHNjb3BlIGlzIHRyYWNrZWQgYXMgY2xpZW50SWQgdG8gc3RvcmUgdGhpcyB0b2tlblxyXG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJyZW5ld2luZyBpZFRva2VuXCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVuZXdJZFRva2VuKHJlcXVlc3Quc2NvcGVzLCByZXNvbHZlLCByZWplY3QsIGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gcmVuZXcgYWNjZXNzIHRva2VuXHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcInJlbmV3aW5nIGFjY2Vzc3Rva2VuXCIpO1xyXG4gICAgICAgICAgICAgIHRoaXMucmVuZXdUb2tlbihyZXF1ZXN0LnNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0LCBhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcImNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50c1wiKTtcclxuICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKCkpKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2hldGhlciBjdXJyZW50IHdpbmRvdyBpcyBpbiBpZnJhbSBmb3IgdG9rZW4gcmVuZXdhbFxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHVibGljIGlzSW5JZnJhbWUoKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3c7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgcGFyZW50IHdpbmRvdyBleGlzdHMgYW5kIGhhcyBtc2FsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwYXJlbnRJc01zYWwoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQubXNhbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJbnRlcmFjdGlvblJlcXVpcmVkKGVycm9yU3RyaW5nOiBzdHJpbmcpIDogYm9vbGVhbiB7XHJcbiAgICBpZiAoZXJyb3JTdHJpbmcuaW5kZXhPZihcImludGVyYWN0aW9uX3JlcXVpcmVkXCIpICE9PSAtMSB8fFxyXG4gICAgZXJyb3JTdHJpbmcuaW5kZXhPZihcImNvbnNlbnRfcmVxdWlyZWRcIikgIT09IC0xIHx8XHJcbiAgICBlcnJvclN0cmluZy5pbmRleE9mKFwibG9naW5fcmVxdWlyZWRcIikgIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGluZyBfbG9hZEZyYW1lIGJ1dCB3aXRoIGEgdGltZW91dCB0byBzaWduYWwgZmFpbHVyZSBpbiBsb2FkZnJhbWVTdGF0dXMuIENhbGxiYWNrcyBhcmUgbGVmdC5cclxuICAgKiByZWdpc3RlcmVkIHdoZW4gbmV0d29yayBlcnJvcnMgb2NjdXIgYW5kIHN1YnNlcXVlbnQgdG9rZW4gcmVxdWVzdHMgZm9yIHNhbWUgcmVzb3VyY2UgYXJlIHJlZ2lzdGVyZWQgdG8gdGhlIHBlbmRpbmcgcmVxdWVzdC5cclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIC8vc2V0IGlmcmFtZSBzZXNzaW9uIHRvIHBlbmRpbmdcclxuICAgIGNvbnN0IGV4cGVjdGVkU3RhdGUgPSB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdO1xyXG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlNldCBsb2FkaW5nIHN0YXRlIHRvIHBlbmRpbmcgZm9yOiBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNJblByb2dyZXNzKTtcclxuICAgIHRoaXMubG9hZEZyYW1lKHVybE5hdmlnYXRlLCBmcmFtZU5hbWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUpID09PSBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpIHtcclxuICAgICAgICAvLyBmYWlsIHRoZSBpZnJhbWUgc2Vzc2lvbiBpZiBpdFwicyBpbiBwZW5kaW5nIHN0YXRlXHJcbiAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkxvYWRpbmcgZnJhbWUgaGFzIHRpbWVkIG91dCBhZnRlcjogXCIgKyAodGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQgLyAxMDAwKSArIFwiIHNlY29uZHMgZm9yIHNjb3BlIFwiICsgc2NvcGUgKyBcIjpcIiArIGV4cGVjdGVkU3RhdGUpO1xyXG4gICAgICAgIC8vIEVycm9yIGFmdGVyIHRpbWVvdXRcclxuICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XHJcbiAgICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKG51bGwsIENsaWVudEF1dGhFcnJvci5jcmVhdGVUb2tlblJlbmV3YWxUaW1lb3V0RXJyb3IoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIGV4cGVjdGVkU3RhdGUsIENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzQ2FuY2VsbGVkKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9hZHMgaWZyYW1lIHdpdGggYXV0aG9yaXphdGlvbiBlbmRwb2ludCBVUkxcclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZEZyYW1lKHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyBUaGlzIHRyaWNrIG92ZXJjb21lcyBpZnJhbWUgbmF2aWdhdGlvbiBpbiBJRVxyXG4gICAgLy8gSUUgZG9lcyBub3QgbG9hZCB0aGUgcGFnZSBjb25zaXN0ZW50bHkgaW4gaWZyYW1lXHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiTG9hZEZyYW1lOiBcIiArIGZyYW1lTmFtZSk7XHJcbiAgICBjb25zdCBmcmFtZUNoZWNrID0gZnJhbWVOYW1lO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lQ2hlY2spO1xyXG4gICAgICBpZiAoZnJhbWVIYW5kbGUuc3JjID09PSBcIlwiIHx8IGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJhYm91dDpibGFua1wiKSB7XHJcbiAgICAgICAgZnJhbWVIYW5kbGUuc3JjID0gdXJsTmF2aWdhdGU7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIkZyYW1lIE5hbWUgOiBcIiArIGZyYW1lTmFtZSArIFwiIE5hdmlnYXRlZCB0bzogXCIgKyB1cmxOYXZpZ2F0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICA1MDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyB0aGUgaGlkZGVuIGlmcmFtZSBmb3Igc2lsZW50IHRva2VuIHJlbmV3YWwuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGFkZEhpZGRlbklGcmFtZShpZnJhbWVJZDogc3RyaW5nKTogSFRNTElGcmFtZUVsZW1lbnQge1xyXG4gICAgaWYgKHR5cGVvZiBpZnJhbWVJZCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQWRkIG1zYWwgZnJhbWUgdG8gZG9jdW1lbnQ6XCIgKyBpZnJhbWVJZCk7XHJcbiAgICBsZXQgYWRhbEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWZyYW1lSWQpIGFzIEhUTUxJRnJhbWVFbGVtZW50O1xyXG4gICAgaWYgKCFhZGFsRnJhbWUpIHtcclxuICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgJiZcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcclxuICAgICAgICAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNS4wXCIpID09PSAtMSkpIHtcclxuICAgICAgICBjb25zdCBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gICAgICAgIGlmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZnJhbWVJZCk7XHJcbiAgICAgICAgaWZyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBpZnIuc3R5bGUud2lkdGggPSBpZnIuc3R5bGUuaGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgaWZyLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xyXG4gICAgICAgIGFkYWxGcmFtZSA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoaWZyKSBhcyBIVE1MSUZyYW1lRWxlbWVudCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8aWZyYW1lIG5hbWU9J1wiICsgaWZyYW1lSWQgKyBcIicgaWQ9J1wiICsgaWZyYW1lSWQgKyBcIicgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+PC9pZnJhbWU+XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAod2luZG93LmZyYW1lcyAmJiB3aW5kb3cuZnJhbWVzW2lmcmFtZUlkXSkge1xyXG4gICAgICAgIGFkYWxGcmFtZSA9IHdpbmRvdy5mcmFtZXNbaWZyYW1lSWRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFkYWxGcmFtZTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gR2VuZXJhbCBIZWxwZXJzXHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgbG9naW5faGludCB0byBhdXRob3JpemF0aW9uIFVSTCB3aGljaCBpcyB1c2VkIHRvIHByZS1maWxsIHRoZSB1c2VybmFtZSBmaWVsZCBvZiBzaWduIGluIHBhZ2UgZm9yIHRoZSB1c2VyIGlmIGtub3duIGFoZWFkIG9mIHRpbWVcclxuICAgKiBkb21haW5faGludCBjYW4gYmUgb25lIG9mIHVzZXJzL29yZ2FuaXphdGlvbnMgd2hpY2ggd2hlbiBhZGRlZCBza2lwcyB0aGUgZW1haWwgYmFzZWQgZGlzY292ZXJ5IHByb2Nlc3Mgb2YgdGhlIHVzZXJcclxuICAgKiBkb21haW5fcmVxIHV0aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgY2xpZW50SW5mb1xyXG4gICAqIGxvZ2luX3JlcSB1aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiBjbGllbnRJbmZvXHJcbiAgICogQWxzbyBkb2VzIGEgc2FuaXR5IGNoZWNrIGZvciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBwYXNzZWQgYnkgdGhlIHVzZXIgdG8gZW5zdXJlIG5vIHJlcGVhdCBxdWVyeVBhcmFtZXRlcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxOYXZpZ2F0ZSAtIEF1dGhlbnRpY2F0aW9uIHJlcXVlc3QgdXJsXHJcbiAgICogQHBhcmFtIHtBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHRva2VuIGlzIHJlcXVlc3RlZFxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGRIaW50UGFyYW1ldGVycyhhY2NvdW50T2JqOiBBY2NvdW50LCBxUGFyYW1zOiBRUERpY3QsIHNlcnZlclJlcVBhcmFtczogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiBRUERpY3Qge1xyXG5cclxuICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSBhY2NvdW50T2JqIHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG5cclxuICAgIC8vIFRoaXMgaXMgYSBmaW5hbCBjaGVjayBmb3IgYWxsIHF1ZXJ5UGFyYW1zIGFkZGVkIHNvIGZhcjsgcHJlZmVyZW5jZSBvcmRlcjogc2lkID4gbG9naW5faGludFxyXG4gICAgLy8gc2lkIGNhbm5vdCBiZSBwYXNzZWQgYWxvbmcgd2l0aCBsb2dpbl9oaW50LCBoZW5jZSB3ZSBjaGVjayBib3RoIGFyZSBub3QgcG9wdWxhdGVkIHlldCBpbiBxdWVyeVBhcmFtZXRlcnMgc28gZmFyXHJcbiAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICAvLyBzaWRcclxuICAgICAgaWYgKGFjY291bnQuc2lkICYmIHNlcnZlclJlcVBhcmFtcy5wcm9tcHRWYWx1ZSA9PT0gUHJvbXB0U3RhdGUuTk9ORSkge1xyXG4gICAgICAgIGlmICghcVBhcmFtc1tTU09UeXBlcy5TSURdICAmJiAhcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSkge1xyXG4gICAgICAgICAgcVBhcmFtcyA9IFV0aWxzLmFkZFNTT1BhcmFtZXRlcihTU09UeXBlcy5TSUQsIGFjY291bnQuc2lkLCBxUGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gbG9naW5faGludFxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAvLyBsb2dpbl9oaW50IGlzIGFjY291bnQudXNlck5hbWVcclxuICAgICAgICBpZiAoIXFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fSElOVF0gICYmIGFjY291bnQudXNlck5hbWUgJiYgIVV0aWxzLmlzRW1wdHkoYWNjb3VudC51c2VyTmFtZSkpIHtcclxuICAgICAgICAgIHFQYXJhbXMgPSBVdGlscy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuTE9HSU5fSElOVCwgYWNjb3VudC51c2VyTmFtZSwgcVBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXFQYXJhbXNbU1NPVHlwZXMuRE9NQUlOX1JFUV0gJiYgIXFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fUkVRXSApIHtcclxuICAgICAgICBxUGFyYW1zID0gVXRpbHMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lELCBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciwgcVBhcmFtcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcVBhcmFtcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gcmVkaXJlY3QgdGhlIGJyb3dzZXIgdG8gdGhlIFNUUyBhdXRob3JpemF0aW9uIGVuZHBvaW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybE5hdmlnYXRlIC0gVVJMIG9mIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50XHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJvbXB0VXNlcih1cmxOYXZpZ2F0ZTogc3RyaW5nKSB7XHJcbiAgICAvLyBOYXZpZ2F0ZSBpZiB2YWxpZCBVUkxcclxuICAgIGlmICh1cmxOYXZpZ2F0ZSAmJiAhVXRpbHMuaXNFbXB0eSh1cmxOYXZpZ2F0ZSkpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmxOYXZpZ2F0ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcclxuICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gYWRkIHRoZSBkZXZlbG9wZXIgcmVxdWVzdGVkIGNhbGxiYWNrIHRvIHRoZSBhcnJheSBvZiBjYWxsYmFja3MgZm9yIHRoZSBzcGVjaWZpZWQgc2NvcGVzLiBUaGUgdXBkYXRlZCBhcnJheSBpcyBzdG9yZWQgb24gdGhlIHdpbmRvdyBvYmplY3RcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2NvcGUgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHBlY3RlZFN0YXRlIC0gVW5pcXVlIHN0YXRlIGlkZW50aWZpZXIgKGd1aWQpLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgLSBUaGUgcmVzb2x2ZSBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IC0gVGhlIHJlamVjdCBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsbGJhY2soZXhwZWN0ZWRTdGF0ZTogc3RyaW5nLCBzY29wZTogc3RyaW5nLCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgLy8gdHJhY2sgYWN0aXZlIHJlbmV3YWxzXHJcbiAgICB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdID0gZXhwZWN0ZWRTdGF0ZTtcclxuXHJcbiAgICAvLyBpbml0aWFsaXplIGNhbGxiYWNrcyBtYXBwZWQgYXJyYXlcclxuICAgIGlmICghd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XHJcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gW107XHJcbiAgICB9XHJcbiAgICAvLyBpbmRleGluZyBvbiB0aGUgY3VycmVudCBzdGF0ZSwgcHVzaCB0aGUgY2FsbGJhY2sgcGFyYW1zIHRvIGNhbGxiYWNrcyBtYXBwZWRcclxuICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXS5wdXNoKHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfSk7XHJcblxyXG4gICAgLy8gU3RvcmUgdGhlIHNlcnZlciBlc3BvbnNlIGluIHRoZSBjdXJyZW50IHdpbmRvdz8/XHJcbiAgICBpZiAoIXdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0pIHtcclxuICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9XHJcbiAgICAgIChyZXNwb25zZTogQXV0aFJlc3BvbnNlLCBlcnJvcjogQXV0aEVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gcmVzZXQgYWN0aXZlIHJlbmV3YWxzXHJcbiAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIGZvciBhbGwgcHJvbWlzZU1hcHBlZHRvUmVuZXdTdGF0ZXMgZm9yIGEgZ2l2ZW4gJ3N0YXRlJyAtIGNhbGwgdGhlIHJlamVjdC9yZXNvbHZlIHdpdGggZXJyb3IvdG9rZW4gcmVzcGVjdGl2ZWx5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0ubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXVtpXS5yZXNvbHZlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiRXJyb3IgYW5kIHJlc3BvbnNlIGFyZSBib3RoIG51bGxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0XHJcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gbnVsbDtcclxuICAgICAgICB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gTG9nb3V0XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gbG9nIG91dCB0aGUgY3VycmVudCB1c2VyLCBhbmQgcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIHBvc3RMb2dvdXRSZWRpcmVjdFVyaS5cclxuICAgKiBEZWZhdWx0cyBiZWhhdmlvdXIgaXMgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cclxuICAgKi9cclxuICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcclxuICAgIHRoaXMuYWNjb3VudCA9IG51bGw7XHJcbiAgICBsZXQgbG9nb3V0ID0gXCJcIjtcclxuICAgIGlmICh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKSB7XHJcbiAgICAgIGxvZ291dCA9IFwicG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2V0UG9zdExvZ291dFJlZGlyZWN0VXJpKCkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsTmF2aWdhdGUgPSB0aGlzLmF1dGhvcml0eSArIFwiL29hdXRoMi92Mi4wL2xvZ291dD9cIiArIGxvZ291dDtcclxuICAgIHRoaXMucHJvbXB0VXNlcih1cmxOYXZpZ2F0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBhbGwgYWNjZXNzIHRva2VucyBpbiB0aGUgY2FjaGUuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgY2xlYXJDYWNoZSgpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xyXG4gICAgY29uc3QgYWNjZXNzVG9rZW5JdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2VucyhDb25zdGFudHMuY2xpZW50SWQsIENvbnN0YW50cy5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5JdGVtc1tpXS5rZXkpKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlc2V0Q2FjaGVJdGVtcygpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIGEgZ2l2ZW4gYWNjZXNzIHRva2VuIGZyb20gdGhlIGNhY2hlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFjY2Vzc1Rva2VuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGNsZWFyQ2FjaGVGb3JTY29wZShhY2Nlc3NUb2tlbjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbkl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKENvbnN0YW50cy5jbGllbnRJZCwgQ29uc3RhbnRzLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgdG9rZW4gPSBhY2Nlc3NUb2tlbkl0ZW1zW2ldO1xyXG4gICAgICAgIGlmICh0b2tlbi52YWx1ZS5hY2Nlc3NUb2tlbiA9PT0gYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeSh0b2tlbi5rZXkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFJlc3BvbnNlXHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gY2FsbCB0aGUgY29uc3RydWN0b3IgY2FsbGJhY2sgd2l0aCB0aGUgdG9rZW4vZXJyb3JcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2hhc2g9d2luZG93LmxvY2F0aW9uLmhhc2hdIC0gSGFzaCBmcmFnbWVudCBvZiBVcmwuXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcHJvY2Vzc0NhbGxCYWNrKGhhc2g6IHN0cmluZywgc3RhdGVJbmZvOiBSZXNwb25zZVN0YXRlSW5mbywgcGFyZW50Q2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcIlByb2Nlc3NpbmcgdGhlIGNhbGxiYWNrIGZyb20gcmVkaXJlY3QgcmVzcG9uc2VcIik7XHJcbiAgICAvLyBnZXQgdGhlIHN0YXRlIGluZm8gZnJvbSB0aGUgaGFzaFxyXG4gICAgaWYgKCFzdGF0ZUluZm8pIHtcclxuICAgICAgc3RhdGVJbmZvID0gdGhpcy5nZXRSZXNwb25zZVN0YXRlKGhhc2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZTtcclxuICAgIGxldCBhdXRoRXJyIDogQXV0aEVycm9yO1xyXG4gICAgLy8gU2F2ZSB0aGUgdG9rZW4gaW5mbyBmcm9tIHRoZSBoYXNoXHJcbiAgICB0cnkge1xyXG4gICAgICByZXNwb25zZSA9IHRoaXMuc2F2ZVRva2VuRnJvbUhhc2goaGFzaCwgc3RhdGVJbmZvKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBhdXRoRXJyID0gZXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSBoYXNoIGZyb20gdGhlIGNhY2hlXHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBDbGVhciB0aGUgY29va2llIGluIHRoZSBoYXNoXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XHJcbiAgICAgIGNvbnN0IGFjY291bnRTdGF0ZTogc3RyaW5nID0gdGhpcy5nZXRBY2NvdW50U3RhdGUodGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5pbkNvb2tpZSkpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5yZW5ld1Rva2VuKSB8fCByZXNwb25zZS5hY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiV2luZG93IGlzIGluIGlmcmFtZSwgYWNxdWlyaW5nIHRva2VuIHNpbGVudGx5XCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcImFjcXVpcmluZyB0b2tlbiBpbnRlcmFjdGl2ZSBpbiBwcm9ncmVzc1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IENvbnN0YW50cy5hY2Nlc3NUb2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc3RhdGVJbmZvLnJlcXVlc3RUeXBlID09PSBDb25zdGFudHMubG9naW4pIHtcclxuICAgICAgICAgIHJlc3BvbnNlLnRva2VuVHlwZSA9IENvbnN0YW50cy5pZFRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBhcmVudENhbGxiYWNrKSB7XHJcbiAgICAgICAgICB0aGlzLnRva2VuUmVjZWl2ZWRDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrKGF1dGhFcnIsIGFjY291bnRTdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwYXJlbnRDYWxsYmFjayhyZXNwb25zZSwgYXV0aEVycik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbjogXCIgKyBlcnIpO1xyXG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlRXJyb3JJbkNhbGxiYWNrRnVuY3Rpb24oZXJyLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgbXVzdCBiZSBjYWxsZWQgZm9yIHByb2Nlc3NpbmcgdGhlIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gdGhlIFNUUy4gSXQgZXh0cmFjdHMgdGhlIGhhc2gsIHByb2Nlc3NlcyB0aGUgdG9rZW4gb3IgZXJyb3IgaW5mb3JtYXRpb24gYW5kIHNhdmVzIGl0IGluIHRoZSBjYWNoZS4gSXQgdGhlblxyXG4gICAqIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyBpbiBjYXNlIG9mIHJlZGlyZWN0IG9yIHJlc29sdmVzIHRoZSBwcm9taXNlcyB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoPXdpbmRvdy5sb2NhdGlvbi5oYXNoXSAtIEhhc2ggZnJhZ21lbnQgb2YgVXJsLlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGhhbmRsZUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UoaGFzaDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyByZXRyaWV2ZSB0aGUgaGFzaFxyXG4gICAgaWYgKGhhc2ggPT0gbnVsbCkge1xyXG4gICAgICBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNlbGYgPSBudWxsO1xyXG4gICAgbGV0IGlzUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxldCBpc1dpbmRvd09wZW5lck1zYWwgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCB3aW5kb3cgb3BlbmVkIHRoZSBpRnJhbWUvcG9wdXBcclxuICAgIHRyeSB7XHJcbiAgICAgIGlzV2luZG93T3BlbmVyTXNhbCA9IHdpbmRvdy5vcGVuZXIgJiYgd2luZG93Lm9wZW5lci5tc2FsICYmIHdpbmRvdy5vcGVuZXIubXNhbCAhPT0gd2luZG93Lm1zYWw7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgLy8gZXJyID0gU2VjdXJpdHlFcnJvcjogQmxvY2tlZCBhIGZyYW1lIHdpdGggb3JpZ2luIFwiW3VybF1cIiBmcm9tIGFjY2Vzc2luZyBhIGNyb3NzLW9yaWdpbiBmcmFtZS5cclxuICAgICAgaXNXaW5kb3dPcGVuZXJNc2FsID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHRoZSBzZWxmIHRvIHRoZSB3aW5kb3cgdGhhdCBjcmVhdGVkIHRoZSBwb3B1cC9pZnJhbWVcclxuICAgIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcclxuICAgICAgc2VsZiA9IHdpbmRvdy5vcGVuZXIubXNhbDtcclxuICAgICAgaXNQb3B1cCA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYXJlbnQgJiYgd2luZG93LnBhcmVudC5tc2FsKSB7XHJcbiAgICAgIHNlbGYgPSB3aW5kb3cucGFyZW50Lm1zYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdyksIGJ5IHVzaW5nIHNlbGYsIHdpbmRvdy5wYXJlbnQgYmVjb21lcyBlcXVhbCB0byB3aW5kb3cgaW4gZ2V0UmVzcG9uc2VTdGF0ZSBtZXRob2Qgc3BlY2lmaWNhbGx5XHJcbiAgICBjb25zdCBzdGF0ZUluZm8gPSBzZWxmLmdldFJlc3BvbnNlU3RhdGUoaGFzaCk7XHJcblxyXG4gICAgbGV0IHRva2VuUmVzcG9uc2VDYWxsYmFjazogKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGVycm9yOiBBdXRoRXJyb3IpID0+IHZvaWQgPSBudWxsO1xyXG5cclxuICAgIHNlbGYubG9nZ2VyLmluZm8oXCJSZXR1cm5lZCBmcm9tIHJlZGlyZWN0IHVybFwiKTtcclxuICAgIC8vIElmIHBhcmVudCB3aW5kb3cgaXMgdGhlIG1zYWwgaW5zdGFuY2Ugd2hpY2ggb3BlbmVkIHRoZSBjdXJyZW50IHdpbmRvdyAoaWZyYW1lKVxyXG4gICAgaWYgKHRoaXMucGFyZW50SXNNc2FsKCkpIHtcclxuICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cucGFyZW50LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tzdGF0ZUluZm8uc3RhdGVdO1xyXG4gICAgfVxyXG4gICAgLy8gQ3VycmVudCB3aW5kb3cgaXMgd2luZG93IG9wZW5lciAocG9wdXApXHJcbiAgICBlbHNlIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcclxuICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cub3BlbmVyLmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tzdGF0ZUluZm8uc3RhdGVdO1xyXG4gICAgfVxyXG4gICAgLy8gUmVkaXJlY3QgY2FzZXNcclxuICAgIGVsc2Uge1xyXG4gICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAvLyBpZiBzZXQgdG8gbmF2aWdhdGUgdG8gbG9naW5SZXF1ZXN0IHBhZ2UgcG9zdCBsb2dpblxyXG4gICAgICBpZiAoc2VsZi5jb25maWcuYXV0aC5uYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsKSB7XHJcbiAgICAgICAgc2VsZi5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMudXJsSGFzaCwgaGFzaCk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgPT09IHdpbmRvdyAmJiAhaXNQb3B1cCkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzZWxmLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHNlbGYuaW5Db29raWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xyXG4gICAgICAgIC8vIFdlIHJlYWNoZWQgdGhpcyBwb2ludCB0b28gZWFybHksIHJldHVybiBhbmQgY29tZSBiYWNrIGxhdGVyXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZi5wcm9jZXNzQ2FsbEJhY2soaGFzaCwgc3RhdGVJbmZvLCB0b2tlblJlc3BvbnNlQ2FsbGJhY2spO1xyXG5cclxuICAgIC8vIElmIGN1cnJlbnQgd2luZG93IGlzIG9wZW5lciwgY2xvc2UgYWxsIHdpbmRvd3NcclxuICAgIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cub3BlbmVyLm9wZW5lZFdpbmRvd3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB3aW5kb3cub3BlbmVyLm9wZW5lZFdpbmRvd3NbaV0uY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBkZXNlcmlhbGl6ZWQgcG9ydGlvbiBvZiBVUkwgaGFzaFxyXG4gICAqIEBwYXJhbSBoYXNoXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkZXNlcmlhbGl6ZUhhc2goaGFzaDogc3RyaW5nKSB7XHJcbiAgICBoYXNoID0gdGhpcy5nZXRIYXNoKGhhc2gpO1xyXG4gICAgcmV0dXJuIFV0aWxzLmRlc2VyaWFsaXplKGhhc2gpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHN0YXRlSW5mbyBvYmplY3QgZnJvbSB0aGUgVVJMIGZyYWdtZW50IGFuZCByZXR1cm5zIGl0LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICAtICBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2VcclxuICAgKiBAcmV0dXJucyB7VG9rZW5SZXNwb25zZX0gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRSZXNwb25zZVN0YXRlKGhhc2g6IHN0cmluZyk6IFJlc3BvbnNlU3RhdGVJbmZvIHtcclxuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0aGlzLmRlc2VyaWFsaXplSGFzaChoYXNoKTtcclxuICAgIGxldCBzdGF0ZVJlc3BvbnNlOiBSZXNwb25zZVN0YXRlSW5mbztcclxuICAgIGlmICghcGFyYW1ldGVycykge1xyXG4gICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiSGFzaCB3YXMgbm90IHBhcnNlZCBjb3JyZWN0bHkuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSkge1xyXG4gICAgICBzdGF0ZVJlc3BvbnNlID0ge1xyXG4gICAgICAgIHJlcXVlc3RUeXBlOiBDb25zdGFudHMudW5rbm93bixcclxuICAgICAgICBzdGF0ZTogcGFyYW1ldGVycy5zdGF0ZSxcclxuICAgICAgICBzdGF0ZU1hdGNoOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkhhc2ggZG9lcyBub3QgY29udGFpbiBzdGF0ZS5cIik7XHJcbiAgICB9XHJcbiAgICAvLyBhc3luYyBjYWxscyBjYW4gZmlyZSBpZnJhbWUgYW5kIGxvZ2luIHJlcXVlc3QgYXQgdGhlIHNhbWUgdGltZSBpZiBkZXZlbG9wZXIgZG9lcyBub3QgdXNlIHRoZSBBUEkgYXMgZXhwZWN0ZWRcclxuICAgIC8vIGluY29taW5nIGNhbGxiYWNrIG5lZWRzIHRvIGJlIGxvb2tlZCB1cCB0byBmaW5kIHRoZSByZXF1ZXN0IHR5cGVcclxuXHJcbiAgICAvLyBsb2dpblJlZGlyZWN0XHJcbiAgICBpZiAoc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5pbkNvb2tpZSkgfHwgc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlKSB7IC8vIGxvZ2luUmVkaXJlY3RcclxuICAgICAgc3RhdGVSZXNwb25zZS5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcclxuICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgICAvLyBhY3F1aXJlVG9rZW5SZWRpcmVjdFxyXG4gICAgZWxzZSBpZiAoc3RhdGVSZXNwb25zZS5zdGF0ZSA9PT0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4sIHRoaXMuaW5Db29raWUpKSB7IC8vYWNxdWlyZVRva2VuUmVkaXJlY3RcclxuICAgICAgc3RhdGVSZXNwb25zZS5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xyXG4gICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICByZXR1cm4gc3RhdGVSZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBleHRlcm5hbCBhcGkgcmVxdWVzdHMgbWF5IGhhdmUgbWFueSByZW5ld3Rva2VuIHJlcXVlc3RzIGZvciBkaWZmZXJlbnQgcmVzb3VyY2VcclxuICAgIGlmICghc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoKSB7XHJcbiAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSB3aW5kb3cucmVxdWVzdFR5cGU7XHJcbiAgICAgIGNvbnN0IHN0YXRlc0luUGFyZW50Q29udGV4dCA9IHdpbmRvdy5yZW5ld1N0YXRlcztcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXNJblBhcmVudENvbnRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3RhdGVzSW5QYXJlbnRDb250ZXh0W2ldID09PSBzdGF0ZVJlc3BvbnNlLnN0YXRlKSB7XHJcbiAgICAgICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFRva2VuIFByb2Nlc3NpbmcgKEV4dHJhY3QgdG8gVG9rZW5Qcm9jZXNzaW5nLnRzKVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIGdldCB0b2tlbiBmb3IgdGhlIHNwZWNpZmllZCBzZXQgb2Ygc2NvcGVzIGZyb20gdGhlIGNhY2hlXHJcbiAgICogQHBhcmFtIHtBdXRoZW50aWNhdGlvblJlcXVlc3RQYXJhbWV0ZXJzfSBhdXRoZW50aWNhdGlvblJlcXVlc3QgLSBSZXF1ZXN0IHNlbnQgdG8gdGhlIFNUUyB0byBvYnRhaW4gYW4gaWRfdG9rZW4vYWNjZXNzX3Rva2VuXHJcbiAgICogQHBhcmFtIHtBY2NvdW50fSBhY2NvdW50IC0gQWNjb3VudCBmb3Igd2hpY2ggdGhlIHNjb3BlcyB3ZXJlIHJlcXVlc3RlZFxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMsIGFjY291bnQ6IEFjY291bnQpOiBBdXRoUmVzcG9uc2Uge1xyXG4gICAgbGV0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtOiBBY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IG51bGw7XHJcbiAgICBjb25zdCBzY29wZXMgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc2NvcGVzO1xyXG5cclxuICAgIC8vIGZpbHRlciBieSBjbGllbnRJZCBhbmQgYWNjb3VudFxyXG4gICAgY29uc3QgdG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGFjY291bnQgPyBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllciA6IG51bGwpO1xyXG5cclxuICAgIC8vIE5vIG1hdGNoIGZvdW5kIGFmdGVyIGluaXRpYWwgZmlsdGVyaW5nXHJcbiAgICBpZiAodG9rZW5DYWNoZUl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4gPSBbXTtcclxuXHJcbiAgICAvLyBpZiBubyBhdXRob3JpdHkgcGFzc2VkXHJcbiAgICBpZiAoIXNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpIHtcclxuICAgICAgLy8gZmlsdGVyIGJ5IHNjb3BlXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gdG9rZW5DYWNoZUl0ZW1zW2ldO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZiAoVXRpbHMuY29udGFpbnNTY29wZShjYWNoZWRTY29wZXMsIHNjb3BlcykpIHtcclxuICAgICAgICAgIGZpbHRlcmVkSXRlbXMucHVzaChjYWNoZUl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaWYgb25seSBvbmUgY2FjaGVkIHRva2VuIGZvdW5kXHJcbiAgICAgIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgY2FjaGVkIHRva2VuIGlzIGZvdW5kXHJcbiAgICAgIGVsc2UgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZU1hdGNoaW5nVG9rZW5zSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpZiBubyBtYXRjaCBmb3VuZCwgY2hlY2sgaWYgdGhlcmUgd2FzIGEgc2luZ2xlIGF1dGhvcml0eSB1c2VkXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGF1dGhvcml0eUxpc3QgPSB0aGlzLmdldFVuaXF1ZUF1dGhvcml0eSh0b2tlbkNhY2hlSXRlbXMsIFwiYXV0aG9yaXR5XCIpO1xyXG4gICAgICAgIGlmIChhdXRob3JpdHlMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVNdWx0aXBsZUF1dGhvcml0aWVzSW5DYWNoZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHlJbnN0YW5jZSA9IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5TGlzdFswXSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGlmIGFuIGF1dGhvcml0eSBpcyBwYXNzZWQgaW4gdGhlIEFQSVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIC8vIGZpbHRlciBieSBhdXRob3JpdHkgYW5kIHNjb3BlXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gdG9rZW5DYWNoZUl0ZW1zW2ldO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZiAoVXRpbHMuY29udGFpbnNTY29wZShjYWNoZWRTY29wZXMsIHNjb3BlcykgJiYgVXRpbHMuQ2Fub25pY2FsaXplVXJpKGNhY2hlSXRlbS5rZXkuYXV0aG9yaXR5KSA9PT0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSkge1xyXG4gICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGNhY2hlSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIG5vIG1hdGNoXHJcbiAgICAgIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGlmIG9ubHkgb25lIGNhY2hlZFRva2VuIEZvdW5kXHJcbiAgICAgIGVsc2UgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBmaWx0ZXJlZEl0ZW1zWzBdO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIGlmIG1vcmUgdGhhbiBjYWNoZWQgdG9rZW4gaXMgZm91bmRcclxuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICBsZXQgZXhwaXJlZCA9IE51bWJlcihhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5leHBpcmVzSW4pO1xyXG4gICAgICAvLyBJZiBleHBpcmF0aW9uIGlzIHdpdGhpbiBvZmZzZXQsIGl0IHdpbGwgZm9yY2UgcmVuZXdcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5jb25maWcuc3lzdGVtLnRva2VuUmVuZXdhbE9mZnNldFNlY29uZHMgfHwgMzAwO1xyXG4gICAgICBpZiAoZXhwaXJlZCAmJiAoZXhwaXJlZCA+IFV0aWxzLm5vdygpICsgb2Zmc2V0KSkge1xyXG4gICAgICAgIGxldCBpZFRva2VuID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuaWRUb2tlbik7XHJcbiAgICAgICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgICAgICBhY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XHJcbiAgICAgICAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkFjY291bnQgc2hvdWxkIG5vdCBiZSBudWxsIGhlcmUuXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhU3RhdGUgPSB0aGlzLmdldEFjY291bnRTdGF0ZSh0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCB0aGlzLmluQ29va2llKSk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlIDogQXV0aFJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgdW5pcXVlSWQ6IFwiXCIsXHJcbiAgICAgICAgICB0ZW5hbnRJZDogXCJcIixcclxuICAgICAgICAgIHRva2VuVHlwZTogKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmlkVG9rZW4gPT09IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmFjY2Vzc1Rva2VuKSA/IENvbnN0YW50cy5pZFRva2VuIDogQ29uc3RhbnRzLmFjY2Vzc1Rva2VuLFxyXG4gICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbkNhY2hlSXRlbS52YWx1ZS5hY2Nlc3NUb2tlbixcclxuICAgICAgICAgIHNjb3BlczogYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIiksXHJcbiAgICAgICAgICBleHBpcmVzT246IG5ldyBEYXRlKGV4cGlyZWQgKiAxMDAwKSxcclxuICAgICAgICAgIGFjY291bnQ6IGFjY291bnQsXHJcbiAgICAgICAgICBhY2NvdW50U3RhdGU6IGFTdGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIFV0aWxzLnNldFJlc3BvbnNlSWRUb2tlbihyZXNwb25zZSwgaWRUb2tlbik7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWRJdGVtc1swXS5rZXkpKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIGdldCBhIHVuaXF1ZSBsaXN0IG9mIGF1dGhvcml0dWVzIGZyb20gdGhlIGNhY2hlXHJcbiAgICogQHBhcmFtIHtBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT59ICBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgLSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgc2F2ZWQgaW4gdGhlIGNhY2hlXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGdldFVuaXF1ZUF1dGhvcml0eShhY2Nlc3NUb2tlbkNhY2hlSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiwgcHJvcGVydHk6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgY29uc3QgYXV0aG9yaXR5TGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgY29uc3QgZmxhZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudC5rZXkuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIChmbGFncy5pbmRleE9mKGVsZW1lbnQua2V5W3Byb3BlcnR5XSkgPT09IC0xKSkge1xyXG4gICAgICAgIGZsYWdzLnB1c2goZWxlbWVudC5rZXlbcHJvcGVydHldKTtcclxuICAgICAgICBhdXRob3JpdHlMaXN0LnB1c2goZWxlbWVudC5rZXlbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXV0aG9yaXR5TGlzdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIEFEQUwgaWRfdG9rZW4gZXhpc3RzIGFuZCByZXR1cm4gaWYgZXhpc3RzLlxyXG4gICAqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgZXh0cmFjdEFEQUxJZFRva2VuKCk6IGFueSB7XHJcbiAgICBjb25zdCBhZGFsSWRUb2tlbiA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLmFkYWxJZFRva2VuKTtcclxuICAgIGlmICghVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3F1aXJlcyBhY2Nlc3MgdG9rZW4gdXNpbmcgYSBoaWRkZW4gaWZyYW1lLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW5ld1Rva2VuKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24sIGFjY291bnQ6IEFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNjb3BlID0gc2NvcGVzLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdUb2tlbiBpcyBjYWxsZWQgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xyXG4gICAgY29uc3QgZnJhbWVIYW5kbGUgPSB0aGlzLmFkZEhpZGRlbklGcmFtZShcIm1zYWxSZW5ld0ZyYW1lXCIgKyBzY29wZSk7XHJcblxyXG4gICAgLy8gQ2FjaGUgYWNjb3VudCBhbmQgYXV0aG9yaXR5XHJcbiAgICB0aGlzLnNldEFjY291bnRDYWNoZShhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgdGhpcy5zZXRBdXRob3JpdHlDYWNoZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpO1xyXG5cclxuICAgIC8vIHJlbmV3IGhhcHBlbnMgaW4gaWZyYW1lLCBzbyBpdCBrZWVwcyBqYXZhc2NyaXB0IGNvbnRleHRcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0Lm5vbmNlLCB0aGlzLmluQ29va2llKTtcclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG5cclxuICAgIC8vIEJ1aWxkIHVybE5hdmlnYXRlIHdpdGggXCJwcm9tcHQ9bm9uZVwiIGFuZCBuYXZpZ2F0ZSB0byBVUkwgaW4gaGlkZGVuIGlGcmFtZVxyXG4gICAgbGV0IHVybE5hdmlnYXRlID0gVXRpbHMudXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHNjb3BlcyksIENvbnN0YW50cy5wcm9tcHQpICsgQ29uc3RhbnRzLnByb21wdF9ub25lO1xyXG5cclxuICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcbiAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHNjb3BlLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlIHRvOlwiICsgdXJsTmF2aWdhdGUpO1xyXG4gICAgZnJhbWVIYW5kbGUuc3JjID0gXCJhYm91dDpibGFua1wiO1xyXG4gICAgdGhpcy5sb2FkSWZyYW1lVGltZW91dCh1cmxOYXZpZ2F0ZSwgXCJtc2FsUmVuZXdGcmFtZVwiICsgc2NvcGUsIHNjb3BlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmV3cyBpZHRva2VuIGZvciBhcHBcInMgb3duIGJhY2tlbmQgd2hlbiBjbGllbnRJZCBpcyBwYXNzZWQgYXMgYSBzaW5nbGUgc2NvcGUgaW4gdGhlIHNjb3BlcyBhcnJheS5cclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVuZXdJZFRva2VuKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24sIGFjY291bnQ6IEFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwicmVuZXdpZFRva2VuIGlzIGNhbGxlZFwiKTtcclxuICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gdGhpcy5hZGRIaWRkZW5JRnJhbWUoXCJtc2FsSWRUb2tlbkZyYW1lXCIpO1xyXG5cclxuICAgIC8vIENhY2hlIGFjY291bnQgYW5kIGF1dGhvcml0eVxyXG4gICAgdGhpcy5zZXRBY2NvdW50Q2FjaGUoYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcclxuICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5KTtcclxuXHJcbiAgICAvLyBDYWNoZSBub25jZVxyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xyXG5cclxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyBJZHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XHJcblxyXG4gICAgLy8gQnVpbGQgdXJsTmF2aWdhdGUgd2l0aCBcInByb21wdD1ub25lXCIgYW5kIG5hdmlnYXRlIHRvIFVSTCBpbiBoaWRkZW4gaUZyYW1lXHJcbiAgICBsZXQgdXJsTmF2aWdhdGUgPSBVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSwgQ29uc3RhbnRzLnByb21wdCkgKyBDb25zdGFudHMucHJvbXB0X25vbmU7XHJcblxyXG4gICAgaWYgKHRoaXMuc2lsZW50TG9naW4pIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XHJcbiAgICAgICAgdGhpcy5zaWxlbnRBdXRoZW50aWNhdGlvblN0YXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcclxuICAgICAgICB3aW5kb3cucmVuZXdTdGF0ZXMucHVzaChzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG5vdGU6IHNjb3BlIGhlcmUgaXMgY2xpZW50SWRcclxuICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayhzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuY2xpZW50SWQsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGUgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XHJcbiAgICBmcmFtZUhhbmRsZS5zcmMgPSBcImFib3V0OmJsYW5rXCI7XHJcbiAgICB0aGlzLmxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlLCBcIm1zYWxJZFRva2VuRnJhbWVcIiwgdGhpcy5jbGllbnRJZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBBQUQuIEl0IGV4dHJhY3RzIHRoZSBoYXNoLCBwcm9jZXNzZXMgdGhlIHRva2VuIG9yIGVycm9yLCBzYXZlcyBpdCBpbiB0aGUgY2FjaGUgYW5kIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyB3aXRoIHRoZSByZXN1bHQuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSBhdXRob3JpdHkgcmVjZWl2ZWQgaW4gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFELlxyXG4gICAqIEBwYXJhbSB7VG9rZW5SZXNwb25zZX0gcmVxdWVzdEluZm8gYW4gb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVkaXJlY3QgcmVzcG9uc2UgZnJvbSBBQUQgY29tcHJpc2luZyBvZiB0aGUga2V5cyAtIHBhcmFtZXRlcnMsIHJlcXVlc3RUeXBlLCBzdGF0ZU1hdGNoLCBzdGF0ZVJlc3BvbnNlIGFuZCB2YWxpZC5cclxuICAgKiBAcGFyYW0ge0FjY291bnR9IGFjY291bnQgYWNjb3VudCBvYmplY3QgZm9yIHdoaWNoIHNjb3BlcyBhcmUgY29uc2VudGVkIGZvci4gVGhlIGRlZmF1bHQgYWNjb3VudCBpcyB0aGUgbG9nZ2VkIGluIGFjY291bnQuXHJcbiAgICogQHBhcmFtIHtDbGllbnRJbmZvfSBjbGllbnRJbmZvIGNsaWVudEluZm8gcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgcmVzcG9uc2UgY29tcHJpc2luZyBvZiBmaWVsZHMgdWlkIGFuZCB1dGlkLlxyXG4gICAqIEBwYXJhbSB7SWRUb2tlbn0gaWRUb2tlbiBpZFRva2VuIHJlY2VpdmVkIGFzIHBhcnQgb2YgdGhlIHJlc3BvbnNlLlxyXG4gICAqIEBpZ25vcmVcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xyXG4gIHByaXZhdGUgc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGF1dGhvcml0eTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIGNsaWVudEluZm86IHN0cmluZyk6IEF1dGhSZXNwb25zZSB7XHJcbiAgICBsZXQgc2NvcGU6IHN0cmluZztcclxuICAgIGxldCBhY2Nlc3NUb2tlblJlc3BvbnNlID0geyAuLi5yZXNwb25zZSB9O1xyXG4gICAgY29uc3QgY2xpZW50T2JqOiBDbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8oY2xpZW50SW5mbyk7XHJcblxyXG4gICAgLy8gaWYgdGhlIHJlc3BvbnNlIGNvbnRhaW5zIFwic2NvcGVcIlxyXG4gICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoXCJzY29wZVwiKSkge1xyXG4gICAgICAvLyByZWFkIHRoZSBzY29wZXNcclxuICAgICAgc2NvcGUgPSBwYXJhbWV0ZXJzW1wic2NvcGVcIl07XHJcbiAgICAgIGNvbnN0IGNvbnNlbnRlZFNjb3BlcyA9IHNjb3BlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgIC8vIHJldHJpZXZlIGFsbCBhY2Nlc3MgdG9rZW5zIGZyb20gdGhlIGNhY2hlLCByZW1vdmUgdGhlIGR1cCBzY29yZXNcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0QWxsQWNjZXNzVG9rZW5zKHRoaXMuY2xpZW50SWQsIGF1dGhvcml0eSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LmhvbWVBY2NvdW50SWRlbnRpZmllciA9PT0gcmVzcG9uc2UuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcclxuICAgICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5zY29wZXMuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgaWYgKFV0aWxzLmlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlcywgY29uc2VudGVkU2NvcGVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleSkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2VuZXJhdGUgYW5kIGNhY2hlIGFjY2Vzc1Rva2VuS2V5IGFuZCBhY2Nlc3NUb2tlblZhbHVlXHJcbiAgICAgIGNvbnN0IGV4cGlyZXNJbiA9IFV0aWxzLmV4cGlyZXNJbihwYXJhbWV0ZXJzW0NvbnN0YW50cy5leHBpcmVzSW5dKS50b1N0cmluZygpO1xyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0sIHJlc3BvbnNlLmlkVG9rZW4ucmF3SWRUb2tlbiwgZXhwaXJlc0luLCBjbGllbnRJbmZvKTtcclxuXHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5LZXkpLCBKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlblZhbHVlKSk7XHJcblxyXG4gICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmFjY2Vzc1Rva2VuICA9IHBhcmFtZXRlcnNbQ29uc3RhbnRzLmFjY2Vzc1Rva2VuXTtcclxuICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5zY29wZXMgPSBjb25zZW50ZWRTY29wZXM7XHJcbiAgICAgIGxldCBleHAgPSBOdW1iZXIoZXhwaXJlc0luKTtcclxuICAgICAgaWYgKGV4cCkge1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2UuZXhwaXJlc09uID0gbmV3IERhdGUoKFV0aWxzLm5vdygpICsgZXhwKSAqIDEwMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiQ291bGQgbm90IHBhcnNlIGV4cGlyZXNJbiBwYXJhbWV0ZXIuIEdpdmVuIHZhbHVlOiBcIiArIGV4cGlyZXNJbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGlmIHRoZSByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIFwic2NvcGVcIiAtIHNjb3BlIGlzIHVzdWFsbHkgY2xpZW50X2lkIGFuZCB0aGUgdG9rZW4gd2lsbCBiZSBpZF90b2tlblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNjb3BlID0gdGhpcy5jbGllbnRJZDtcclxuXHJcbiAgICAgIC8vIEdlbmVyYXRlIGFuZCBjYWNoZSBhY2Nlc3NUb2tlbktleSBhbmQgYWNjZXNzVG9rZW5WYWx1ZVxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XHJcblxyXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlblZhbHVlID0gbmV3IEFjY2Vzc1Rva2VuVmFsdWUocGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl0sIHBhcmFtZXRlcnNbQ29uc3RhbnRzLmlkVG9rZW5dLCByZXNwb25zZS5pZFRva2VuLmV4cGlyYXRpb24sIGNsaWVudEluZm8pO1xyXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuS2V5KSwgSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5WYWx1ZSkpO1xyXG4gICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IFtzY29wZV07XHJcbiAgICAgIGFjY2Vzc1Rva2VuUmVzcG9uc2UuYWNjZXNzVG9rZW4gPSBwYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXTtcclxuICAgICAgbGV0IGV4cCA9IE51bWJlcihyZXNwb25zZS5pZFRva2VuLmV4cGlyYXRpb24pO1xyXG4gICAgICBpZiAoZXhwKSB7XHJcbiAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZShleHAgKiAxMDAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBleHBpcmVzSW4gcGFyYW1ldGVyXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjZXNzVG9rZW5SZXNwb25zZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhdmVzIHRva2VuIG9yIGVycm9yIHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRCBpbiB0aGUgY2FjaGUuIEluIGNhc2Ugb2YgaWRfdG9rZW4sIGl0IGFsc28gY3JlYXRlcyB0aGUgYWNjb3VudCBvYmplY3QuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc2F2ZVRva2VuRnJvbUhhc2goaGFzaDogc3RyaW5nLCBzdGF0ZUluZm86IFJlc3BvbnNlU3RhdGVJbmZvKTogQXV0aFJlc3BvbnNlIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJTdGF0ZSBzdGF0dXM6XCIgKyBzdGF0ZUluZm8uc3RhdGVNYXRjaCArIFwiOyBSZXF1ZXN0IHR5cGU6XCIgKyBzdGF0ZUluZm8ucmVxdWVzdFR5cGUpO1xyXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBcIlwiKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcclxuXHJcbiAgICBsZXQgcmVzcG9uc2UgOiBBdXRoUmVzcG9uc2UgPSB7XHJcbiAgICAgIHVuaXF1ZUlkOiBcIlwiLFxyXG4gICAgICB0ZW5hbnRJZDogXCJcIixcclxuICAgICAgdG9rZW5UeXBlOiBcIlwiLFxyXG4gICAgICBpZFRva2VuOiBudWxsLFxyXG4gICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICAgICAgc2NvcGVzOiBbXSxcclxuICAgICAgZXhwaXJlc09uOiBudWxsLFxyXG4gICAgICBhY2NvdW50OiBudWxsLFxyXG4gICAgICBhY2NvdW50U3RhdGU6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBlcnJvcjogQXV0aEVycm9yO1xyXG4gICAgY29uc3QgaGFzaFBhcmFtcyA9IHRoaXMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xyXG4gICAgbGV0IGF1dGhvcml0eUtleTogc3RyaW5nID0gXCJcIjtcclxuICAgIGxldCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5OiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIC8vIElmIHNlcnZlciByZXR1cm5zIGFuIGVycm9yXHJcbiAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbikgfHwgaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuZXJyb3IpKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJFcnJvciA6XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0gKyBcIjsgRXJyb3IgZGVzY3JpcHRpb246XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdKTtcclxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dKTtcclxuXHJcbiAgICAgIC8vIGxvZ2luXHJcbiAgICAgIGlmIChzdGF0ZUluZm8ucmVxdWVzdFR5cGUgPT09IENvbnN0YW50cy5sb2dpbikge1xyXG4gICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0gKyBcIjpcIiArIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSk7XHJcbiAgICAgICAgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBhY3F1aXJlVG9rZW5cclxuICAgICAgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLnJlbmV3VG9rZW4pIHtcclxuICAgICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSB0aGlzLmdldEFjY291bnQoKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50SWQ6IHN0cmluZyA9IGFjY291bnQgPyB0aGlzLmdldEFjY291bnRJZChhY2NvdW50KSA6IFwiXCI7XHJcblxyXG4gICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQsIHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmlzSW50ZXJhY3Rpb25SZXF1aXJlZChoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSkpIHtcclxuICAgICAgICBlcnJvciA9IG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yID0gbmV3IFNlcnZlckVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZiB0aGUgc2VydmVyIHJldHVybnMgXCJTdWNjZXNzXCJcclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBWZXJpZnkgdGhlIHN0YXRlIGZyb20gcmVkaXJlY3QgYW5kIHJlY29yZCB0b2tlbnMgdG8gc3RvcmFnZSBpZiBleGlzdHNcclxuICAgICAgaWYgKHN0YXRlSW5mby5zdGF0ZU1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlN0YXRlIGlzIHJpZ2h0XCIpO1xyXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5zZXNzaW9uU3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxTZXNzaW9uU3RhdGUsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLnNlc3Npb25TdGF0ZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNwb25zZS5hY2NvdW50U3RhdGUgPSBzdGF0ZUluZm8uc3RhdGU7XHJcblxyXG4gICAgICAgIGxldCBjbGllbnRJbmZvOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIGFjY2Vzc190b2tlblxyXG4gICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5hY2Nlc3NUb2tlbikpIHtcclxuICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgYWNjZXNzIHRva2VuXCIpO1xyXG4gICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgLy8gcmV0cmlldmUgdGhlIGlkX3Rva2VuIGZyb20gcmVzcG9uc2UgaWYgcHJlc2VudCA6XHJcbiAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbikpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UuaWRUb2tlbiA9IG5ldyBJZFRva2VuKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBuZXcgSWRUb2tlbih0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5pZFRva2VuS2V5KSkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBhdXRob3JpdHkgZnJvbSBjYWNoZSBhbmQgcmVwbGFjZSB3aXRoIHRlbmFudElEXHJcbiAgICAgICAgICBjb25zdCBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICBsZXQgYXV0aG9yaXR5OiBzdHJpbmcgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGF1dGhvcml0eUtleSwgdGhpcy5pbkNvb2tpZSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFVdGlscy5pc0VtcHR5KGF1dGhvcml0eSkpIHtcclxuICAgICAgICAgICAgYXV0aG9yaXR5ID0gVXRpbHMucmVwbGFjZVRlbmFudFBhdGgoYXV0aG9yaXR5LCByZXNwb25zZS50ZW5hbnRJZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gcmV0cmlldmUgY2xpZW50X2luZm8gLSBpZiBpdCBpcyBub3QgZm91bmQsIGdlbmVyYXRlIHRoZSB1aWQgYW5kIHV0aWQgZnJvbSBpZFRva2VuXHJcbiAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuY2xpZW50SW5mbykpIHtcclxuICAgICAgICAgICAgY2xpZW50SW5mbyA9IGhhc2hQYXJhbXNbQ29uc3RhbnRzLmNsaWVudEluZm9dO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRFwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNwb25zZS5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KHJlc3BvbnNlLmlkVG9rZW4sIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcclxuICAgICAgICAgIGNvbnN0IGFjY291bnRLZXk6IHN0cmluZyA9IHRoaXMuZ2V0QWNjb3VudElkKHJlc3BvbnNlLmFjY291bnQpO1xyXG5cclxuICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50S2V5LCBzdGF0ZUluZm8uc3RhdGUpO1xyXG4gICAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQWNjb3VudEtleV9ub2FjY291bnQgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShDb25zdGFudHMubm9fYWNjb3VudCwgc3RhdGVJbmZvLnN0YXRlKTtcclxuXHJcbiAgICAgICAgICBsZXQgY2FjaGVkQWNjb3VudDogc3RyaW5nID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShhY3F1aXJlVG9rZW5BY2NvdW50S2V5KTtcclxuICAgICAgICAgIGxldCBhY3F1aXJlVG9rZW5BY2NvdW50OiBBY2NvdW50O1xyXG5cclxuICAgICAgICAgIC8vIENoZWNrIHdpdGggdGhlIGFjY291bnQgaW4gdGhlIENhY2hlXHJcbiAgICAgICAgICBpZiAoIVV0aWxzLmlzRW1wdHkoY2FjaGVkQWNjb3VudCkpIHtcclxuICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudCA9IEpTT04ucGFyc2UoY2FjaGVkQWNjb3VudCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2NvdW50ICYmIGFjcXVpcmVUb2tlbkFjY291bnQgJiYgVXRpbHMuY29tcGFyZUFjY291bnRzKHJlc3BvbnNlLmFjY291bnQsIGFjcXVpcmVUb2tlbkFjY291bnQpKSB7XHJcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvKTtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVGhlIHVzZXIgb2JqZWN0IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHBhc3NlZCBpbiB0aGUgYWNxdWlyZVRva2VuIHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcclxuICAgICAgICAgICAgICAgIFwiVGhlIGFjY291bnQgb2JqZWN0IGNyZWF0ZWQgZnJvbSB0aGUgcmVzcG9uc2UgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBvbmUgcGFzc2VkIGluIHRoZSBhY3F1aXJlVG9rZW4gcmVxdWVzdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZiAoIVV0aWxzLmlzRW1wdHkodGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShhY3F1aXJlVG9rZW5BY2NvdW50S2V5X25vYWNjb3VudCkpKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcm9jZXNzIGlkX3Rva2VuXHJcbiAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmlkVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgaWQgdG9rZW5cIik7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2dpbiBubyBsb25nZXIgaW4gcHJvZ3Jlc3NcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBVdGlscy5zZXRSZXNwb25zZUlkVG9rZW4ocmVzcG9uc2UsIG5ldyBJZFRva2VuKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5jbGllbnRJbmZvKSkge1xyXG4gICAgICAgICAgICAgIGNsaWVudEluZm8gPSBoYXNoUGFyYW1zW0NvbnN0YW50cy5jbGllbnRJbmZvXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiQ2xpZW50SW5mbyBub3QgcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlIGZyb20gQUFEXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XHJcbiAgICAgICAgICAgIGxldCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCB0aGlzLmluQ29va2llKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVXRpbHMuaXNFbXB0eShhdXRob3JpdHkpKSB7XHJcbiAgICAgICAgICAgICAgYXV0aG9yaXR5ID0gVXRpbHMucmVwbGFjZVRlbmFudFBhdGgoYXV0aG9yaXR5LCByZXNwb25zZS5pZFRva2VuLnRlbmFudElkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KHJlc3BvbnNlLmlkVG9rZW4sIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcclxuICAgICAgICAgICAgcmVzcG9uc2UuYWNjb3VudCA9IHRoaXMuYWNjb3VudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5pZFRva2VuICYmIHJlc3BvbnNlLmlkVG9rZW4ubm9uY2UpIHtcclxuICAgICAgICAgICAgICAvLyBjaGVjayBub25jZSBpbnRlZ3JpdHkgaWYgaWRUb2tlbiBoYXMgbm9uY2UgLSB0aHJvdyBhbiBlcnJvciBpZiBub3QgbWF0Y2hlZFxyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pZFRva2VuLm5vbmNlICE9PSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHRoaXMuaW5Db29raWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubG9naW5FcnJvciwgXCJOb25jZSBNaXNtYXRjaC4gRXhwZWN0ZWQgTm9uY2U6IFwiICsgdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSArIFwiLFwiICsgXCJBY3R1YWwgTm9uY2U6IFwiICsgcmVzcG9uc2UuaWRUb2tlbi5ub25jZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIk5vbmNlIE1pc21hdGNoLkV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIHJlc3BvbnNlLmlkVG9rZW4ubm9uY2UpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSksIHJlc3BvbnNlLmlkVG9rZW4ubm9uY2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBTYXZlIHRoZSB0b2tlblxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuaWRUb2tlbktleSwgaGFzaFBhcmFtc1tDb25zdGFudHMuaWRUb2tlbl0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbENsaWVudEluZm8sIGNsaWVudEluZm8pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgaWRUb2tlbiBhcyBhY2Nlc3MgdG9rZW4gZm9yIGFwcCBpdHNlbGZcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlLCBhdXRob3JpdHksIGhhc2hQYXJhbXMsIGNsaWVudEluZm8pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhdXRob3JpdHlLZXkgPSBzdGF0ZUluZm8uc3RhdGU7XHJcbiAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcclxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkludmFsaWQgaWRfdG9rZW4gcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAgIGVycm9yID0gQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUludmFsaWRJZFRva2VuRXJyb3IocmVzcG9uc2UuaWRUb2tlbik7XHJcbiAgICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBlcnJvci5lcnJvckNvZGUpO1xyXG4gICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBlcnJvci5lcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFN0YXRlIG1pc21hdGNoIC0gdW5leHBlY3RlZC9pbnZhbGlkIHN0YXRlXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGF1dGhvcml0eUtleSA9IHN0YXRlSW5mby5zdGF0ZTtcclxuICAgICAgICBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gc3RhdGVJbmZvLnN0YXRlO1xyXG5cclxuICAgICAgICBjb25zdCBleHBlY3RlZFN0YXRlID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJTdGF0ZSBNaXNtYXRjaC5FeHBlY3RlZCBTdGF0ZTogXCIgKyBleHBlY3RlZFN0YXRlICsgXCIsXCIgKyBcIkFjdHVhbCBTdGF0ZTogXCIgKyBzdGF0ZUluZm8uc3RhdGUpO1xyXG5cclxuICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkU3RhdGVFcnJvcihzdGF0ZUluZm8uc3RhdGUsIGV4cGVjdGVkU3RhdGUpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgZXJyb3IuZXJyb3JDb2RlKTtcclxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgZXJyb3IuZXJyb3JNZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgc3RhdGVJbmZvLnN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0NvbXBsZXRlZCk7XHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5yZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKGF1dGhvcml0eUtleSwgYWNxdWlyZVRva2VuQWNjb3VudEtleSk7XHJcbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIGlmIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw9ZmFsc2VcclxuICAgIGlmICh0aGlzLmluQ29va2llKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW1Db29raWUoYXV0aG9yaXR5S2V5LCBcIlwiLCAtMSk7XHJcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgfVxyXG4gIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBBY2NvdW50XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIHNpZ25lZCBpbiBhY2NvdW50IChyZWNlaXZlZCBmcm9tIGFuIGFjY291bnQgb2JqZWN0IGNyZWF0ZWQgYXQgdGhlIHRpbWUgb2YgbG9naW4pIG9yIG51bGwuXHJcbiAgICovXHJcbiAgZ2V0QWNjb3VudCgpOiBBY2NvdW50IHtcclxuICAgIC8vIGlmIGEgc2Vzc2lvbiBhbHJlYWR5IGV4aXN0cywgZ2V0IHRoZSBhY2NvdW50IGZyb20gdGhlIHNlc3Npb25cclxuICAgIGlmICh0aGlzLmFjY291bnQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmcmFtZSBpcyB1c2VkIHRvIGdldCBpZFRva2VuIGFuZCBwb3B1bGF0ZSB0aGUgYWNjb3VudCBmb3IgdGhlIGdpdmVuIHNlc3Npb25cclxuICAgIGNvbnN0IHJhd0lkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5pZFRva2VuS2V5KTtcclxuICAgIGNvbnN0IHJhd0NsaWVudEluZm8gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5tc2FsQ2xpZW50SW5mbyk7XHJcblxyXG4gICAgaWYgKCFVdGlscy5pc0VtcHR5KHJhd0lkVG9rZW4pICYmICFVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XHJcbiAgICAgIGNvbnN0IGlkVG9rZW4gPSBuZXcgSWRUb2tlbihyYXdJZFRva2VuKTtcclxuICAgICAgY29uc3QgY2xpZW50SW5mbyA9IG5ldyBDbGllbnRJbmZvKHJhd0NsaWVudEluZm8pO1xyXG4gICAgICB0aGlzLmFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbiwgY2xpZW50SW5mbyk7XHJcbiAgICAgIHJldHVybiB0aGlzLmFjY291bnQ7XHJcbiAgICB9XHJcbiAgICAvLyBpZiBsb2dpbiBub3QgeWV0IGRvbmUsIHJldHVybiBudWxsXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4dHJhY3RzIHN0YXRlIHZhbHVlIGZyb20gdGhlIGFjY291bnRTdGF0ZSBzZW50IHdpdGggdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QuXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBnZXRBY2NvdW50U3RhdGUgKHN0YXRlOiBzdHJpbmcpIHtcclxuICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XHJcbiAgICAgIGlmIChzcGxpdEluZGV4ID4gLTEgJiYgc3BsaXRJbmRleCArIDEgPCBzdGF0ZS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGUuc3Vic3RyaW5nKHNwbGl0SW5kZXggKyAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIGZpbHRlciBhbGwgY2FjaGVkIGl0ZW1zIGFuZCByZXR1cm4gYSBsaXN0IG9mIHVuaXF1ZSBhY2NvdW50cyBiYXNlZCBvbiBob21lQWNjb3VudElkZW50aWZpZXIuXHJcbiAgICogQHBhcmFtIHtBcnJheTxBY2NvdW50Pn0gQWNjb3VudHMgLSBhY2NvdW50cyBzYXZlZCBpbiB0aGUgY2FjaGUuXHJcbiAgICovXHJcbiAgZ2V0QWxsQWNjb3VudHMoKTogQXJyYXk8QWNjb3VudD4ge1xyXG4gICAgY29uc3QgYWNjb3VudHM6IEFycmF5PEFjY291bnQ+ID0gW107XHJcbiAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmlkVG9rZW4pO1xyXG4gICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmhvbWVBY2NvdW50SWRlbnRpZmllcik7XHJcbiAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbiwgY2xpZW50SW5mbyk7XHJcbiAgICAgIGFjY291bnRzLnB1c2goYWNjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBmaWx0ZXIgYWNjb3VudHMgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyXHJcbiAgICogQHBhcmFtIHtBcnJheTxBY2NvdW50Pn0gIEFjY291bnRzIC0gYWNjb3VudHMgc2F2ZWQgaW4gdGhlIGNhY2hlXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGdldFVuaXF1ZUFjY291bnRzKGFjY291bnRzOiBBcnJheTxBY2NvdW50Pik6IEFycmF5PEFjY291bnQ+IHtcclxuICAgIGlmICghYWNjb3VudHMgfHwgYWNjb3VudHMubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgcmV0dXJuIGFjY291bnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZsYWdzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBjb25zdCB1bmlxdWVBY2NvdW50czogQXJyYXk8QWNjb3VudD4gPSBbXTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhY2NvdW50cy5sZW5ndGg7ICsraW5kZXgpIHtcclxuICAgICAgaWYgKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIgJiYgZmxhZ3MuaW5kZXhPZihhY2NvdW50c1tpbmRleF0uaG9tZUFjY291bnRJZGVudGlmaWVyKSA9PT0gLTEpIHtcclxuICAgICAgICBmbGFncy5wdXNoKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIpO1xyXG4gICAgICAgIHVuaXF1ZUFjY291bnRzLnB1c2goYWNjb3VudHNbaW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmlxdWVBY2NvdW50cztcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gU2NvcGVzIChFeHRyYWN0IHRvIFNjb3Blcy50cylcclxuXHJcbiAgLy8gTm90ZTogXCJ0aGlzXCIgZGVwZW5kZW5jeSBpbiB0aGlzIHNlY3Rpb24gaXMgbWluaW1hbC5cclxuICAvLyBJZiBwQ2FjaGVTdG9yYWdlIGlzIHNlcGFyYXRlZCBmcm9tIHRoZSBjbGFzcyBvYmplY3QsIG9yIHBhc3NlZCBhcyBhIGZuIHBhcmFtLCBzY29wZXNVdGlscy50cyBjYW4gYmUgY3JlYXRlZFxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIHZhbGlkYXRlIHRoZSBzY29wZXMgaW5wdXQgcGFyYW1ldGVyIHJlcXVlc3RlZCAgYnkgdGhlIGRldmVsb3Blci5cclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHNjb3BlcyAtIERldmVsb3BlciByZXF1ZXN0ZWQgcGVybWlzc2lvbnMuIE5vdCBhbGwgc2NvcGVzIGFyZSBndWFyYW50ZWVkIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBhY2Nlc3MgdG9rZW4gcmV0dXJuZWQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzY29wZXNSZXF1aXJlZCAtIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzY29wZXMgYXJyYXkgaXMgcmVxdWlyZWQgb3Igbm90XHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHZhbGlkYXRlSW5wdXRTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3Blc1JlcXVpcmVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXNjb3Blcykge1xyXG4gICAgICBpZiAoc2NvcGVzUmVxdWlyZWQpIHtcclxuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoYXQgc2NvcGVzIGlzIGFuIGFycmF5IG9iamVjdCAoYWxzbyB0aHJvd3MgZXJyb3IgaWYgc2NvcGVzID09IG51bGwpXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2NvcGVzKSkge1xyXG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihzY29wZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoYXQgc2NvcGVzIGlzIG5vdCBhbiBlbXB0eSBhcnJheVxyXG4gICAgaWYgKHNjb3Blcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIHRoYXQgY2xpZW50SWQgaXMgcGFzc2VkIGFzIHNpbmdsZSBzY29wZVxyXG4gICAgaWYgKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpIHtcclxuICAgICAgaWYgKHNjb3Blcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUNsaWVudElkU2luZ2xlU2NvcGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogRXh0cmFjdHMgc2NvcGUgdmFsdWUgZnJvbSB0aGUgc3RhdGUgc2VudCB3aXRoIHRoZSBhdXRoZW50aWNhdGlvbiByZXF1ZXN0LlxyXG4gICogQHJldHVybnMge3N0cmluZ30gc2NvcGUuXHJcbiAgKiBAaWdub3JlXHJcbiAgKiBAaGlkZGVuXHJcbiAgKi9cclxuICBwcml2YXRlIGdldFNjb3BlRnJvbVN0YXRlKHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBzdGF0ZS5pbmRleE9mKFwifFwiKTtcclxuICAgICAgaWYgKHNwbGl0SW5kZXggPiAtMSAmJiBzcGxpdEluZGV4ICsgMSA8IHN0YXRlLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZS5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZHMgZXh0cmFTY29wZXNUb0NvbnNlbnQgaWYgcGFzc2VkXHJcbiAgICogQHBhcmFtIHJlcXVlc3RcclxuICAgKi9cclxuICBwcml2YXRlIGFwcGVuZFNjb3BlcyhyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBBcnJheTxzdHJpbmc+IHtcclxuXHJcbiAgICBsZXQgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3Quc2NvcGVzKSB7XHJcbiAgICAgICAgaWYgKHJlcXVlc3QuZXh0cmFTY29wZXNUb0NvbnNlbnQpIHtcclxuICAgICAgICAgICAgc2NvcGVzID0gWy4uLnJlcXVlc3Quc2NvcGVzLCAuLi5yZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgc2NvcGVzID0gcmVxdWVzdC5zY29wZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzY29wZXM7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEFuZ3VsYXJcclxuXHJcbiAgLyoqXHJcbiAgKiBCcm9hZGNhc3QgbWVzc2FnZXMgLSBVc2VkIG9ubHkgZm9yIEFuZ3VsYXI/ICAqXHJcbiAgKiBAcGFyYW0gZXZlbnROYW1lXHJcbiAgKiBAcGFyYW0gZGF0YVxyXG4gICovXHJcbiAgcHJpdmF0ZSBicm9hZGNhc3QoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE6IHN0cmluZykge1xyXG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgeyBkZXRhaWw6IGRhdGEgfSk7XHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBjYWNoZWQgdG9rZW5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzY29wZXNcclxuICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRDYWNoZWRUb2tlbkludGVybmFsKHNjb3BlcyA6IEFycmF5PHN0cmluZz4gLCBhY2NvdW50OiBBY2NvdW50KTogQXV0aFJlc3BvbnNlIHtcclxuICAgIC8vIEdldCB0aGUgY3VycmVudCBzZXNzaW9uJ3MgYWNjb3VudCBvYmplY3RcclxuICAgIGNvbnN0IGFjY291bnRPYmplY3Q6IEFjY291bnQgPSBhY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xyXG4gICAgaWYgKCFhY2NvdW50T2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uc3RydWN0IEF1dGhlbnRpY2F0aW9uUmVxdWVzdCBiYXNlZCBvbiByZXNwb25zZSB0eXBlXHJcbiAgICBjb25zdCBuZXdBdXRob3JpdHkgPSB0aGlzLmF1dGhvcml0eUluc3RhbmNlID8gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA6IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UodGhpcy5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xyXG4gICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudE9iamVjdCwgc2NvcGVzLCB0cnVlKTtcclxuICAgIGNvbnN0IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IG5ldyBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyhcclxuICAgICAgbmV3QXV0aG9yaXR5LFxyXG4gICAgICB0aGlzLmNsaWVudElkLFxyXG4gICAgICBzY29wZXMsXHJcbiAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLFxyXG4gICAgICB0aGlzLmNvbmZpZy5hdXRoLnN0YXRlXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGdldCBjYWNoZWQgdG9rZW5cclxuICAgIHJldHVybiB0aGlzLmdldENhY2hlZFRva2VuKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCwgYWNjb3VudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgc2NvcGVzIGZvciB0aGUgRW5kcG9pbnQgLSBVc2VkIGluIEFuZ3VsYXIgdG8gdHJhY2sgcHJvdGVjdGVkIGFuZCB1bnByb3RlY3RlZCByZXNvdXJjZXMgd2l0aG91dCBpbnRlcmFjdGlvbiBmcm9tIHRoZSBkZXZlbG9wZXIgYXBwXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZW5kcG9pbnRcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0U2NvcGVzRm9yRW5kcG9pbnQoZW5kcG9pbnQ6IHN0cmluZykgOiBBcnJheTxzdHJpbmc+IHtcclxuICAgIC8vIGlmIHVzZXIgc3BlY2lmaWVkIGxpc3Qgb2YgdW5wcm90ZWN0ZWRSZXNvdXJjZXMsIG5vIG5lZWQgdG8gc2VuZCB0b2tlbiB0byB0aGVzZSBlbmRwb2ludHMsIHJldHVybiBudWxsLlxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5mcmFtZXdvcmsudW5wcm90ZWN0ZWRSZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2YodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzW2ldKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9jZXNzIGFsbCBwcm90ZWN0ZWQgcmVzb3VyY2VzIGFuZCBzZW5kIHRoZSBtYXRjaGVkIG9uZVxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5zaXplID4gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBBcnJheS5mcm9tKHRoaXMuY29uZmlnLmZyYW1ld29yay5wcm90ZWN0ZWRSZXNvdXJjZU1hcC5rZXlzKCkpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbmZpZ0VuZHBvaW50IGlzIGxpa2UgL2FwaS9Ub2RvIHJlcXVlc3RlZCBlbmRwb2ludCBjYW4gYmUgL2FwaS9Ub2RvLzFcclxuICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2Yoa2V5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmdldChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRlZmF1bHQgcmVzb3VyY2Ugd2lsbCBiZSBjbGllbnRpZCBpZiBub3RoaW5nIHNwZWNpZmllZFxyXG4gICAgLy8gQXBwIHdpbGwgdXNlIGlkdG9rZW4gZm9yIGNhbGxzIHRvIGl0c2VsZlxyXG4gICAgLy8gY2hlY2sgaWYgaXQncyBzdGFyaW5nIGZyb20gaHR0cCBvciBodHRwcywgbmVlZHMgdG8gbWF0Y2ggd2l0aCBhcHAgaG9zdFxyXG4gICAgaWYgKGVuZHBvaW50LmluZGV4T2YoXCJodHRwOi8vXCIpID4gLTEgfHwgZW5kcG9pbnQuaW5kZXhPZihcImh0dHBzOi8vXCIpID4gLTEpIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRIb3N0RnJvbVVyaShlbmRwb2ludCkgPT09IHRoaXMuZ2V0SG9zdEZyb21VcmkodGhpcy5nZXRSZWRpcmVjdFVyaSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4odGhpcy5jbGllbnRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIC8vIGluIGFuZ3VsYXIgbGV2ZWwsIHRoZSB1cmwgZm9yICRodHRwIGludGVyY2VwdG9yIGNhbGwgY291bGQgYmUgcmVsYXRpdmUgdXJsLFxyXG4gICAgLy8gaWYgaXQncyByZWxhdGl2ZSBjYWxsLCB3ZSdsbCB0cmVhdCBpdCBhcyBhcHAgYmFja2VuZCBjYWxsLlxyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXk8c3RyaW5nPih0aGlzLmNsaWVudElkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBub3QgdGhlIGFwcCdzIG93biBiYWNrZW5kIG9yIG5vdCBhIGRvbWFpbiBsaXN0ZWQgaW4gdGhlIGVuZHBvaW50cyBzdHJ1Y3R1cmVcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdHJhY2tzIGlmIGxvZ2luIGlzIGluIHByb2dyZXNzXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldExvZ2luSW5Qcm9ncmVzcygpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHBlbmRpbmdDYWxsYmFjayA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gpO1xyXG4gICAgaWYgKHBlbmRpbmdDYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubG9naW5JblByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGxvZ2luSW5Qcm9ncmVzc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBzZXRsb2dpbkluUHJvZ3Jlc3MobG9naW5JblByb2dyZXNzIDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBsb2dpbkluUHJvZ3Jlc3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm5zIHRoZSBzdGF0dXMgb2YgYWNxdWlyZVRva2VuSW5Qcm9ncmVzc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRBY3F1aXJlVG9rZW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgc2V0QWNxdWlyZVRva2VuSW5Qcm9ncmVzcyhhY3F1aXJlVG9rZW5JblByb2dyZXNzIDogYm9vbGVhbikge1xyXG4gICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBhY3F1aXJlVG9rZW5JblByb2dyZXNzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJucyB0aGUgbG9nZ2VyIGhhbmRsZVxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRMb2dnZXIoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9nZ2VyO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBHZXR0ZXJzIGFuZCBTZXR0ZXJzXHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gZ2V0IHRoZSByZWRpcmVjdCB1cmkuIEV2YWx1YXRlcyByZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRSZWRpcmVjdFVyaSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5hdXRoLnJlZGlyZWN0VXJpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucmVkaXJlY3RVcmkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnJlZGlyZWN0VXJpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBnZXQgdGhlIHBvc3QgbG9nb3V0IHJlZGlyZWN0IHVyaS4gRXZhbHVhdGVzIHBvc3RMb2dvdXRyZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cclxuICAgKiBAaWdub3JlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRQb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gZ2V0IHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gb2YgTVNBTC5qc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXRDdXJyZW50Q29uZmlndXJhdGlvbigpOiBDb25maWd1cmF0aW9uIHtcclxuICAgIGlmICghdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFN0cmluZyBVdGlsIChTaG91bGQgYmUgZXh0cmFjdGVkIHRvIFV0aWxzLnRzKVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBhbmNob3IgcGFydCgjKSBvZiB0aGUgVVJMXHJcbiAgICogQGlnbm9yZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGdldEhhc2goaGFzaDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChoYXNoLmluZGV4T2YoXCIjL1wiKSA+IC0xKSB7XHJcbiAgICAgIGhhc2ggPSBoYXNoLnN1YnN0cmluZyhoYXNoLmluZGV4T2YoXCIjL1wiKSArIDIpO1xyXG4gICAgfSBlbHNlIGlmIChoYXNoLmluZGV4T2YoXCIjXCIpID4gLTEpIHtcclxuICAgICAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZXh0cmFjdCBVUkkgZnJvbSB0aGUgaG9zdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVyaVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGdldEhvc3RGcm9tVXJpKHVyaTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIHJlbW92ZSBodHRwOi8vIG9yIGh0dHBzOi8vIGZyb20gdXJpXHJcbiAgICBsZXQgZXh0cmFjdGVkVXJpID0gU3RyaW5nKHVyaSkucmVwbGFjZSgvXihodHRwcz86KVxcL1xcLy8sIFwiXCIpO1xyXG4gICAgZXh0cmFjdGVkVXJpID0gZXh0cmFjdGVkVXJpLnNwbGl0KFwiL1wiKVswXTtcclxuICAgIHJldHVybiBleHRyYWN0ZWRVcmk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVdGlscyBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIEF1dGhlbnRpY2F0aW9uXHJcbiAgICogQHBhcmFtIHVzZXJPYmplY3RcclxuICAgKiBAcGFyYW0gc2NvcGVzXHJcbiAgICogQHBhcmFtIHNpbGVudENhbGxcclxuICAgKi9cclxuICBwcml2YXRlIGdldFRva2VuVHlwZShhY2NvdW50T2JqZWN0OiBBY2NvdW50LCBzY29wZXM6IHN0cmluZ1tdLCBzaWxlbnRDYWxsOiBib29sZWFuKTogc3RyaW5nIHtcclxuXHJcbiAgICAvLyBpZiBhY2NvdW50IGlzIHBhc3NlZCBhbmQgbWF0Y2hlcyB0aGUgYWNjb3VudCBvYmplY3Qvb3Igc2V0IHRvIGdldEFjY291bnQoKSBmcm9tIGNhY2hlXHJcbiAgICAvLyBpZiBjbGllbnQtaWQgaXMgcGFzc2VkIGFzIHNjb3BlLCBnZXQgaWRfdG9rZW4gZWxzZSB0b2tlbi9pZF90b2tlbl90b2tlbiAoaW4gY2FzZSBubyBzZXNzaW9uIGV4aXN0cylcclxuICAgIGxldCB0b2tlblR5cGU6IHN0cmluZztcclxuXHJcbiAgICAvLyBhY3F1aXJlVG9rZW5TaWxlbnRcclxuICAgIGlmIChzaWxlbnRDYWxsKSB7XHJcbiAgICAgIGlmIChVdGlscy5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XHJcbiAgICAgICAgdG9rZW5UeXBlID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMudG9rZW47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdG9rZW5UeXBlICA9IChzY29wZXMuaW5kZXhPZih0aGlzLmNvbmZpZy5hdXRoLmNsaWVudElkKSA+IC0xKSA/IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW4gOiBSZXNwb25zZVR5cGVzLmlkX3Rva2VuX3Rva2VuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdG9rZW5UeXBlO1xyXG4gICAgfVxyXG4gICAgLy8gYWxsIG90aGVyIGNhc2VzXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKCFVdGlscy5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XHJcbiAgICAgICAgICAgdG9rZW5UeXBlID0gUmVzcG9uc2VUeXBlcy5pZF90b2tlbl90b2tlbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRva2VuVHlwZTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBjYWNoZWtleXMgZm9yIGFuZCBzdG9yZXMgdGhlIGFjY291bnQgaW5mb3JtYXRpb24gaW4gY2FjaGVcclxuICAgKiBAcGFyYW0gYWNjb3VudFxyXG4gICAqIEBwYXJhbSBzdGF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0QWNjb3VudENhY2hlKGFjY291bnQ6IEFjY291bnQsIHN0YXRlOiBzdHJpbmcpIHtcclxuICAgIC8vIENhY2hlIGFjcXVpcmVUb2tlbkFjY291bnRLZXlcclxuICAgIGxldCBhY2NvdW50SWQgPSBhY2NvdW50ID8gdGhpcy5nZXRBY2NvdW50SWQoYWNjb3VudCkgOiBDb25zdGFudHMubm9fYWNjb3VudDtcclxuXHJcbiAgICBjb25zdCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudElkLCBzdGF0ZSk7XHJcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXksIEpTT04uc3RyaW5naWZ5KGFjY291bnQpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGNhY2hlS2V5IGZvciBhbmQgc3RvcmVzIHRoZSBhdXRob3JpdHkgaW5mb3JtYXRpb24gaW4gY2FjaGVcclxuICAgKiBAcGFyYW0gc3RhdGVcclxuICAgKiBAcGFyYW0gYXV0aG9yaXR5XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBdXRob3JpdHlDYWNoZShzdGF0ZTogc3RyaW5nLCBhdXRob3JpdHk6IHN0cmluZykge1xyXG4gICAgLy8gQ2FjaGUgYXV0aG9yaXR5S2V5XHJcbiAgICBjb25zdCBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlKTtcclxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oYXV0aG9yaXR5S2V5LCBVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5KSwgdGhpcy5pbkNvb2tpZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGxvZ2dlZCBpbiBhY2NvdW50XHJcbiAgICogQHBhcmFtIGFjY291bnRcclxuICAgKi9cclxuICBwcml2YXRlIGdldEFjY291bnRJZChhY2NvdW50OiBBY2NvdW50KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHthY2NvdW50LmFjY291bnRJZGVudGlmaWVyfWAgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBgJHthY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcn1gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0ICd0b2tlblJlcXVlc3QnIGZyb20gdGhlIGF2YWlsYWJsZSBkYXRhIGluIGFkYWxJZFRva2VuXHJcbiAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBidWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB7XHJcblxyXG4gICAgbGV0IHRva2VuUmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xyXG4gICAgICBzY29wZXM6IFt0aGlzLmNsaWVudElkXSxcclxuICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcclxuICAgICAgYWNjb3VudDogdGhpcy5nZXRBY2NvdW50KCksXHJcbiAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0b2tlblJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVdGlsaXR5IHRvIHBvcHVsYXRlIFF1ZXJ5UGFyYW1ldGVycyBhbmQgRXh0cmFRdWVyeVBhcmFtZXRlcnMgdG8gU2VydmVyUmVxdWVzdFBhcmFtZXJlcnNcclxuICAgKiBAcGFyYW0gcmVxdWVzdFxyXG4gICAqIEBwYXJhbSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3RcclxuICAgKi9cclxuICBwcml2YXRlIHBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudDogQWNjb3VudCwgcmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLCBhZGFsSWRUb2tlbk9iamVjdD86IGFueSk6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIHtcclxuXHJcbiAgICBsZXQgcXVlcnlQYXJhbWV0ZXJzOiBRUERpY3QgPSB7fTtcclxuXHJcbiAgICBpZiAocmVxdWVzdCkge1xyXG4gICAgICAvLyBhZGQgdGhlIHByb21wdCBwYXJhbWV0ZXIgdG8gc2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgaWYgcGFzc2VkXHJcbiAgICAgIGlmIChyZXF1ZXN0LnByb21wdCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVQcm9tcHRQYXJhbWV0ZXIocmVxdWVzdC5wcm9tcHQpO1xyXG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5wcm9tcHRWYWx1ZSA9IHJlcXVlc3QucHJvbXB0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiB0aGUgZGV2ZWxvcGVyIHByb3ZpZGVzIG9uZSBvZiB0aGVzZSwgZ2l2ZSBwcmVmZXJlbmNlIHRvIGRldmVsb3BlciBjaG9pY2VcclxuICAgICAgaWYgKFV0aWxzLmlzU1NPUGFyYW0ocmVxdWVzdCkpIHtcclxuICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0LCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhZGFsSWRUb2tlbk9iamVjdCkge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IFV0aWxzLmNvbnN0cnVjdFVuaWZpZWRDYWNoZVF1ZXJ5UGFyYW1ldGVyKG51bGwsIGFkYWxJZFRva2VuT2JqZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRzIHNpZC9sb2dpbl9oaW50IGlmIG5vdCBwb3B1bGF0ZWQ7IHBvcHVsYXRlcyBkb21haW5fcmVxLCBsb2dpbl9yZXEgYW5kIGRvbWFpbl9oaW50XHJcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiQ2FsbGluZyBhZGRIaW50IHBhcmFtZXRlcnNcIik7XHJcbiAgICBxdWVyeVBhcmFtZXRlcnMgPSB0aGlzLmFkZEhpbnRQYXJhbWV0ZXJzKGFjY291bnQsIHF1ZXJ5UGFyYW1ldGVycywgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcclxuXHJcbiAgICAvLyBzYW5pdHkgY2hlY2sgZm9yIGRldmVsb3BlciBwYXNzZWQgZXh0cmFRdWVyeVBhcmFtZXRlcnNcclxuICAgIGxldCBlUVBhcmFtczogUVBEaWN0O1xyXG4gICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgICBlUVBhcmFtcyA9IHRoaXMucmVtb3ZlU1NPUGFyYW1zRnJvbUVRUGFyYW1zKHJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBvcHVsYXRlIHRoZSBleHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcclxuICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5xdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5nZW5lcmF0ZVF1ZXJ5UGFyYW1ldGVyc1N0cmluZyhxdWVyeVBhcmFtZXRlcnMpO1xyXG4gICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzID0gVXRpbHMuZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcoZVFQYXJhbXMpO1xyXG5cclxuICAgIHJldHVybiBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVdGlsaXR5IHRvIHRlc3QgaWYgdmFsaWQgcHJvbXB0IHZhbHVlIGlzIHBhc3NlZCBpbiB0aGUgcmVxdWVzdFxyXG4gICAqIEBwYXJhbSByZXF1ZXN0XHJcbiAgICovXHJcbiAgcHJpdmF0ZSB2YWxpZGF0ZVByb21wdFBhcmFtZXRlciAocHJvbXB0OiBzdHJpbmcpIHtcclxuICAgIGlmICghKFtQcm9tcHRTdGF0ZS5MT0dJTiwgUHJvbXB0U3RhdGUuU0VMRUNUX0FDQ09VTlQsIFByb21wdFN0YXRlLkNPTlNFTlQsIFByb21wdFN0YXRlLk5PTkVdLmluZGV4T2YocHJvbXB0KSA+PSAwKSkge1xyXG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkUHJvbXB0RXJyb3IocHJvbXB0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBzaWQgYW5kIGxvZ2luX2hpbnQgaWYgcGFzc2VkIGFzIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXHJcbiAgICogQHBhcmFtIGVRUGFyYW1zXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW1vdmVTU09QYXJhbXNGcm9tRVFQYXJhbXMoZVFQYXJhbXM6IFFQRGljdCk6IFFQRGljdCB7XHJcblxyXG4gICAgaWYgKGVRUGFyYW1zKSB7XHJcbiAgICAgIGRlbGV0ZSBlUVBhcmFtc1tTU09UeXBlcy5TSURdO1xyXG4gICAgICBkZWxldGUgZVFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fSElOVF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVRUGFyYW1zO1xyXG4gIH1cclxuXHJcbiAvLyNlbmRyZWdpb25cclxufVxyXG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZFxuICogIE1JVCBMaWNlbnNlXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzXG4gKiBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgJ1NvZnR3YXJlJyksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlXG4gKiB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksXG4gKiBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG4gKiBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICogY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICdBUyBJUycsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gKiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlNcbiAqIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAqIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVRcbiAqIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuaW1wb3J0IHsgQ2xpZW50SW5mbyB9IGZyb20gXCIuL0NsaWVudEluZm9cIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbi8qKlxuICogYWNjb3VudElkZW50aWZpZXIgICAgICAgY29tYmluYXRpb24gb2YgaWRUb2tlbi51aWQgYW5kIGlkVG9rZW4udXRpZFxuICogaG9tZUFjY291bnRJZGVudGlmaWVyICAgY29tYmluYXRpb24gb2YgY2xpZW50SW5mby51aWQgYW5kIGNsaWVudEluZm8udXRpZFxuICogdXNlck5hbWUgICAgICAgICAgICAgICAgaWRUb2tlbi5wcmVmZXJyZWRfdXNlcm5hbWVcbiAqIG5hbWUgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4ubmFtZVxuICogaWRUb2tlbiAgICAgICAgICAgICAgICAgaWRUb2tlblxuICogc2lkICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbi5zaWQgLSBzZXNzaW9uIGlkZW50aWZpZXJcbiAqIGVudmlyb25tZW50ICAgICAgICAgICAgIGlkdG9rZW4uaXNzdWVyICh0aGUgYXV0aG9yaXR5IHRoYXQgaXNzdWVzIHRoZSB0b2tlbilcbiAqL1xuZXhwb3J0IGNsYXNzIEFjY291bnQge1xuXG4gICAgYWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpZFRva2VuOiBPYmplY3Q7XG4gICAgc2lkOiBzdHJpbmc7XG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gQWNjb3VudCBPYmplY3RcbiAgICAgKiBAcHJhcmFtIGFjY291bnRJZGVudGlmaWVyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRlbnRpZmllclxuICAgICAqIEBwYXJhbSB1c2VyTmFtZVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGlkVG9rZW5cbiAgICAgKiBAcGFyYW0gc2lkXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkZW50aWZpZXI6IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcsIHVzZXJOYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaWRUb2tlbjogT2JqZWN0LCBzaWQ6IHN0cmluZywgIGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuYWNjb3VudElkZW50aWZpZXIgPSBhY2NvdW50SWRlbnRpZmllcjtcbiAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xuICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW47XG4gICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQHBhcmFtIGlkVG9rZW5cbiAgICAgKiBAcGFyYW0gY2xpZW50SW5mb1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVBY2NvdW50KGlkVG9rZW46IElkVG9rZW4sIGNsaWVudEluZm86IENsaWVudEluZm8pOiBBY2NvdW50IHtcblxuICAgICAgICAvLyBjcmVhdGUgYWNjb3VudElkZW50aWZpZXJcbiAgICAgICAgY29uc3QgYWNjb3VudElkZW50aWZpZXI6IHN0cmluZyA9IGlkVG9rZW4ub2JqZWN0SWQgfHwgIGlkVG9rZW4uc3ViamVjdDtcblxuICAgICAgICAvLyBjcmVhdGUgaG9tZUFjY291bnRJZGVudGlmaWVyXG4gICAgICAgIGNvbnN0IHVpZDogc3RyaW5nID0gY2xpZW50SW5mbyA/IGNsaWVudEluZm8udWlkIDogXCJcIjtcbiAgICAgICAgY29uc3QgdXRpZDogc3RyaW5nID0gY2xpZW50SW5mbyA/IGNsaWVudEluZm8udXRpZCA6IFwiXCI7XG5cbiAgICAgICAgY29uc3QgaG9tZUFjY291bnRJZGVudGlmaWVyID0gVXRpbHMuYmFzZTY0RW5jb2RlU3RyaW5nVXJsU2FmZSh1aWQpICsgXCIuXCIgKyBVdGlscy5iYXNlNjRFbmNvZGVTdHJpbmdVcmxTYWZlKHV0aWQpO1xuICAgICAgICByZXR1cm4gbmV3IEFjY291bnQoYWNjb3VudElkZW50aWZpZXIsIGhvbWVBY2NvdW50SWRlbnRpZmllciwgaWRUb2tlbi5wcmVmZXJyZWROYW1lLCBpZFRva2VuLm5hbWUsIGlkVG9rZW4uZGVjb2RlZElkVG9rZW4sIGlkVG9rZW4uc2lkLCBpZFRva2VuLmlzc3Vlcik7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEF1dGhvcml0eSwgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4vWEhSQ2xpZW50XCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWFkQXV0aG9yaXR5IGV4dGVuZHMgQXV0aG9yaXR5IHtcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludDogc3RyaW5nID0gXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uL2Rpc2NvdmVyeS9pbnN0YW5jZVwiO1xuXG4gIHByaXZhdGUgZ2V0IEFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgJHtBYWRBdXRob3JpdHkuQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludH0/YXBpLXZlcnNpb249MS4wJmF1dGhvcml6YXRpb25fZW5kcG9pbnQ9JHt0aGlzLkNhbm9uaWNhbEF1dGhvcml0eX1vYXV0aDIvdjIuMC9hdXRob3JpemVgO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbikge1xuICAgIHN1cGVyKGF1dGhvcml0eSwgdmFsaWRhdGVBdXRob3JpdHkpO1xuICB9XG5cbiAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkFhZDtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRydXN0ZWRIb3N0TGlzdDogYW55ID0ge1xuICAgIFwibG9naW4ud2luZG93cy5uZXRcIjogXCJsb2dpbi53aW5kb3dzLm5ldFwiLFxuICAgIFwibG9naW4uY2hpbmFjbG91ZGFwaS5jblwiOiBcImxvZ2luLmNoaW5hY2xvdWRhcGkuY25cIixcbiAgICBcImxvZ2luLmNsb3VkZ292YXBpLnVzXCI6IFwibG9naW4uY2xvdWRnb3ZhcGkudXNcIixcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5jb21cIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tXCIsXG4gICAgXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIjogXCJsb2dpbi5taWNyb3NvZnRvbmxpbmUuZGVcIixcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS51c1wiXG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBPSURDIGVuZHBvaW50XG4gICAqIE9ubHkgcmVzcG9uZHMgd2l0aCB0aGUgZW5kcG9pbnRcbiAgICovXG4gIHB1YmxpYyBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgY29uc3QgcmVzdWx0UHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+ID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgICAgcmVzb2x2ZSh0aGlzLkRlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQpKTtcblxuICAgIGlmICghdGhpcy5Jc1ZhbGlkYXRpb25FbmFibGVkKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZXQgaG9zdDogc3RyaW5nID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydDtcbiAgICBpZiAodGhpcy5Jc0luVHJ1c3RlZEhvc3RMaXN0KGhvc3QpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICB9XG5cbiAgICBsZXQgY2xpZW50OiBYaHJDbGllbnQgPSBuZXcgWGhyQ2xpZW50KCk7XG5cbiAgICByZXR1cm4gY2xpZW50LnNlbmRSZXF1ZXN0QXN5bmModGhpcy5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50VXJsLCBcIkdFVFwiLCB0cnVlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS50ZW5hbnRfZGlzY292ZXJ5X2VuZHBvaW50O1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgaG9zdCBpcyBpbiBhIGxpc3Qgb2YgdHJ1c3RlZCBob3N0c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gVGhlIGhvc3QgdG8gbG9vayB1cFxuICAgKi9cbiAgcHVibGljIElzSW5UcnVzdGVkSG9zdExpc3QoaG9zdDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEFhZEF1dGhvcml0eS5UcnVzdGVkSG9zdExpc3RbaG9zdC50b0xvd2VyQ2FzZSgpXTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbi8qKlxuICogWEhSIGNsaWVudCBmb3IgSlNPTiBlbmRwb2ludHNcbiAqIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2FzeW5jLXByb21pc2VcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFhockNsaWVudCB7XG4gIHB1YmxpYyBzZW5kUmVxdWVzdEFzeW5jKHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZywgZW5hYmxlQ2FjaGluZz86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCAvKmFzeW5jOiAqLyB0cnVlKTtcbiAgICAgIGlmIChlbmFibGVDYWNoaW5nKSB7XG4gICAgICAgIC8vIFRPRE86IChzaGl2YikgZW5zdXJlIHRoYXQgdGhpcyBjYW4gYmUgY2FjaGVkXG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcIlB1YmxpY1wiKTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IChldikgPT4ge1xuICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzLmhhbmRsZUVycm9yKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHZlKGpzb25SZXNwb25zZSk7XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChldikgPT4ge1xuICAgICAgICByZWplY3QoeGhyLnN0YXR1cyk7XG4gICAgICB9O1xuXG4gICAgICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgXCJub3QgaW1wbGVtZW50ZWRcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvcihyZXNwb25zZVRleHQ6IHN0cmluZyk6IGFueSB7XG4gICAgdmFyIGpzb25SZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xuICAgICAgaWYgKGpzb25SZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgIHJldHVybiBqc29uUmVzcG9uc2UuZXJyb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IHJlc3BvbnNlVGV4dDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VUZXh0O1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG4vLyBtYWtlIENhY2hlU3RvcmFnZSBhIGZpeGVkIHR5cGUgdG8gbGltaXQgaXQgdG8gc3BlY2lmaWMgaW5wdXRzXG5leHBvcnQgdHlwZSBDYWNoZUxvY2F0aW9uID0gXCJsb2NhbFN0b3JhZ2VcIiB8IFwic2Vzc2lvblN0b3JhZ2VcIjtcblxuLyoqXG4gKiBEZWZhdWx0cyBmb3IgdGhlIENvbmZpZ3VyYXRpb24gT3B0aW9uc1xuICovXG5jb25zdCBGUkFNRV9USU1FT1VUID0gNjAwMDtcbmNvbnN0IE9GRlNFVCA9IDMwMDtcblxuLyoqXG4gKiAgQXV0aGVudGljYXRpb24gT3B0aW9uc1xuICpcbiAqICBjbGllbnRJZCAgICAgICAgICAgICAgICAgICAgLSBDbGllbnQgSUQgYXNzaWduZWQgdG8geW91ciBhcHAgYnkgQXp1cmUgQWN0aXZlIERpcmVjdG9yeVxuICogIGF1dGhvcml0eSAgICAgICAgICAgICAgICAgICAtIERldmVsb3BlciBjYW4gY2hvb3NlIHRvIHNlbmQgYW4gYXV0aG9yaXR5LCBkZWZhdWx0cyB0byBcIiBcIlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFRPRE86IEZvbGxvdyB1cCB3aXRoIHRoZSBhdXRob3JpdHkgZGlzY3Vzc2lvbiB3aXRoIHRoZSBQTXMgLSBVbnRpbCB0aGVuIHRoaXMgY29tbWVudCBpcyBhIHBsYWNlaG9sZGVyKVxuICogIHZhbGlkYXRlQXV0aG9yaXR5ICAgICAgICAgICAtIFVzZWQgdG8gdHVybiBhdXRob3JpdHkgdmFsaWRhdGlvbiBvbi9vZmYuIFdoZW4gc2V0IHRvIHRydWUgKGRlZmF1bHQpLCBNU0FMIHdpbGwgY29tcGFyZSB0aGUgYXBwbGljYXRpb24ncyBhdXRob3JpdHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnYWluc3Qgd2VsbC1rbm93biBVUkxzIHRlbXBsYXRlcyByZXByZXNlbnRpbmcgd2VsbC1mb3JtZWQgYXV0aG9yaXRpZXMuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBpcyB1c2VmdWwgd2hlbiB0aGUgYXV0aG9yaXR5IGlzIG9idGFpbmVkIGF0IHJ1biB0aW1lIHRvIHByZXZlbnQgTVNBTCBmcm9tIGRpc3BsYXlpbmcgYXV0aGVudGljYXRpb24gcHJvbXB0cyBmcm9tIG1hbGljaW91cyBwYWdlcy5cbiAqICByZWRpcmVjdFVyaSAgICAgICAgICAgICAgICAgLSBUaGUgcmVkaXJlY3QgVVJJIG9mIHRoZSBhcHBsaWNhdGlvbiwgdGhpcyBzaG91bGQgYmUgc2FtZSBhcyB0aGUgdmFsdWUgaW4gdGhlIGFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0cyB0byBgd2luZG93LmxvY2F0aW9uLmhyZWZgLlxuICogIHBvc3RMb2dvdXRSZWRpcmVjdFVyaSAgICAgICAtIFVzZWQgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhpcyBsb2NhdGlvbiBhZnRlciBsb2dvdXQuIERlZmF1bHRzIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXG4gKiAgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgIC0gVXNlIHRvIHNlbmQgdGhlIHN0YXRlIHBhcmFtZXRlciB3aXRoIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3RcbiAqICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsICAgLSBVc2VkIHRvIHR1cm4gb2ZmIGRlZmF1bHQgbmF2aWdhdGlvbiB0byBzdGFydCBwYWdlIGFmdGVyIGxvZ2luLiBEZWZhdWx0IGlzIHRydWUuIFRoaXMgaXMgdXNlZCBvbmx5IGZvciByZWRpcmVjdCBmbG93cy5cbiAqXG4gKi9cbmV4cG9ydCB0eXBlIEF1dGhPcHRpb25zID0ge1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBhdXRob3JpdHk/OiBzdHJpbmc7XG4gIHZhbGlkYXRlQXV0aG9yaXR5PzogYm9vbGVhbjtcbiAgcmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgcG9zdExvZ291dFJlZGlyZWN0VXJpPzogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XG4gIHN0YXRlPzogc3RyaW5nO1xuICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsPzogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogQ2FjaGUgT3B0aW9uc1xuICpcbiAqIGNhY2hlTG9jYXRpb24gICAgICAgICAgICAtIFVzZWQgdG8gc3BlY2lmeSB0aGUgY2FjaGVMb2NhdGlvbiB1c2VyIHdhbnRzIHRvIHNldDogVmFsaWQgdmFsdWVzIGFyZSBcImxvY2FsU3RvcmFnZVwiIGFuZCBcInNlc3Npb25TdG9yYWdlXCJcbiAqIHN0b3JlQXV0aFN0YXRlSW5Db29raWUgICAtIElmIHNldCwgdGhlIGxpYnJhcnkgd2lsbCBzdG9yZSB0aGUgYXV0aCByZXF1ZXN0IHN0YXRlIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uIG9mIHRoZSBhdXRoIGZsb3dzIGluIHRoZSBicm93c2VyIGNvb2tpZXMuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IGRlZmF1bHQgdGhpcyBmbGFnIGlzIHNldCB0byBmYWxzZS5cbiAqL1xuZXhwb3J0IHR5cGUgQ2FjaGVPcHRpb25zID0ge1xuICBjYWNoZUxvY2F0aW9uPzogQ2FjaGVMb2NhdGlvbjtcbiAgc3RvcmVBdXRoU3RhdGVJbkNvb2tpZT86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIExpYnJhcnkgU3BlY2lmaWMgT3B0aW9uc1xuICpcbiAqIGxvZ2dlciAgICAgICAgICAgICAgICAgICAgICAgLSBVc2VkIHRvIGluaXRpYWxpemUgdGhlIExvZ2dlciBvYmplY3Q7IFRPRE86IEV4cGFuZCBvbiBsb2dnZXIgZGV0YWlscyBvciBsaW5rIHRvIHRoZSBkb2N1bWVudGF0aW9uIG9uIGxvZ2dlclxuICogbG9hZEZyYW1lVGltZW91dCAgICAgICAgICAgICAtIG1heGltdW0gdGltZSB0aGUgbGlicmFyeSBzaG91bGQgd2FpdCBmb3IgYSBmcmFtZSB0byBsb2FkXG4gKiB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzICAgIC0gc2V0cyB0aGUgd2luZG93IG9mIG9mZnNldCBuZWVkZWQgdG8gcmVuZXcgdGhlIHRva2VuIGJlZm9yZSBleHBpcnlcbiAqXG4gKi9cbmV4cG9ydCB0eXBlIFN5c3RlbU9wdGlvbnMgPSB7XG4gIGxvZ2dlcj86IExvZ2dlcjtcbiAgbG9hZEZyYW1lVGltZW91dD86IG51bWJlcjtcbiAgdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcz86IG51bWJlcjtcbn07XG5cbi8qKlxuICogQXBwL0ZyYW1ld29yayBzcGVjaWZpYyBlbnZpcm9ubWVudCBTdXBwb3J0XG4gKlxuICogaXNBbmd1bGFyICAgICAgICAgICAgICAgIC0gZmxhZyBzZXQgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIEFuZ3VsYXIgRnJhbWV3b3JrLiBVc2VkIHRvIGJyb2FkY2FzdCB0b2tlbnMuIFRPRE86IGRldGFuZ2xlIHRoaXMgZGVwZW5kZW5jeSBmcm9tIGNvcmUuXG4gKiB1bnByb3RlY3RlZFJlc291cmNlcyAgICAgLSBBcnJheSBvZiBVUkkncyB3aGljaCBhcmUgdW5wcm90ZWN0ZWQgcmVzb3VyY2VzLiBNU0FMIHdpbGwgbm90IGF0dGFjaCBhIHRva2VuIHRvIG91dGdvaW5nIHJlcXVlc3RzIHRoYXQgaGF2ZSB0aGVzZSBVUkkuIERlZmF1bHRzIHRvICdudWxsJy5cbiAqIHByb3RlY3RlZFJlc291cmNlTWFwICAgICAtIFRoaXMgaXMgbWFwcGluZyBvZiByZXNvdXJjZXMgdG8gc2NvcGVzIHVzZWQgYnkgTVNBTCBmb3IgYXV0b21hdGljYWxseSBhdHRhY2hpbmcgYWNjZXNzIHRva2VucyBpbiB3ZWIgQVBJIGNhbGxzLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBIHNpbmdsZSBhY2Nlc3MgdG9rZW4gaXMgb2J0YWluZWQgZm9yIHRoZSByZXNvdXJjZS4gU28geW91IGNhbiBtYXAgYSBzcGVjaWZpYyByZXNvdXJjZSBwYXRoIGFzIGZvbGxvd3M6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcImh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS92MS4wL21lXCIsIFtcInVzZXIucmVhZFwiXX0sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yIHRoZSBhcHAgVVJMIG9mIHRoZSByZXNvdXJjZSBhczoge1wiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL1wiLCBbXCJ1c2VyLnJlYWRcIiwgXCJtYWlsLnNlbmRcIl19LlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHJlcXVpcmVkIGZvciBDT1JTIGNhbGxzLlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgRnJhbWV3b3JrT3B0aW9ucyA9IHtcbiAgaXNBbmd1bGFyPzogYm9vbGVhbjtcbiAgdW5wcm90ZWN0ZWRSZXNvdXJjZXM/OiBBcnJheTxzdHJpbmc+O1xuICBwcm90ZWN0ZWRSZXNvdXJjZU1hcD86IE1hcDxzdHJpbmcsIEFycmF5PHN0cmluZz4+O1xufTtcblxuLyoqXG4gKiBDb25maWd1cmF0aW9uIE9iamVjdFxuICovXG5leHBvcnQgdHlwZSBDb25maWd1cmF0aW9uID0ge1xuICBhdXRoOiBBdXRoT3B0aW9ucyxcbiAgY2FjaGU/OiBDYWNoZU9wdGlvbnMsXG4gIHN5c3RlbT86IFN5c3RlbU9wdGlvbnMsXG4gIGZyYW1ld29yaz86IEZyYW1ld29ya09wdGlvbnNcbn07XG5cbmNvbnN0IERFRkFVTFRfQVVUSF9PUFRJT05TOiBBdXRoT3B0aW9ucyA9IHtcbiAgY2xpZW50SWQ6IFwiXCIsXG4gIGF1dGhvcml0eTogbnVsbCxcbiAgdmFsaWRhdGVBdXRob3JpdHk6IHRydWUsXG4gIHJlZGlyZWN0VXJpOiAoKSA9PiBVdGlscy5nZXREZWZhdWx0UmVkaXJlY3RVcmkoKSxcbiAgcG9zdExvZ291dFJlZGlyZWN0VXJpOiAoKSA9PiBVdGlscy5nZXREZWZhdWx0UmVkaXJlY3RVcmkoKSxcbiAgc3RhdGU6IFwiXCIsXG4gIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw6IHRydWVcbn07XG5cbmNvbnN0IERFRkFVTFRfQ0FDSEVfT1BUSU9OUzogQ2FjaGVPcHRpb25zID0ge1xuICBjYWNoZUxvY2F0aW9uOiBcInNlc3Npb25TdG9yYWdlXCIsXG4gIHN0b3JlQXV0aFN0YXRlSW5Db29raWU6IGZhbHNlXG59O1xuXG5jb25zdCBERUZBVUxUX1NZU1RFTV9PUFRJT05TOiBTeXN0ZW1PcHRpb25zID0ge1xuICBsb2dnZXI6IG5ldyBMb2dnZXIobnVsbCksXG4gIGxvYWRGcmFtZVRpbWVvdXQ6IEZSQU1FX1RJTUVPVVQsXG4gIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM6IE9GRlNFVFxufTtcblxuY29uc3QgREVGQVVMVF9GUkFNRVdPUktfT1BUSU9OUzogRnJhbWV3b3JrT3B0aW9ucyA9IHtcbiAgaXNBbmd1bGFyOiBmYWxzZSxcbiAgdW5wcm90ZWN0ZWRSZXNvdXJjZXM6IG5ldyBBcnJheTxzdHJpbmc+KCksXG4gIHByb3RlY3RlZFJlc291cmNlTWFwOiBuZXcgTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj4oKVxufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBzZXQgdGhlIGRlZmF1bHQgb3B0aW9ucyB3aGVuIG5vdCBleHBsaWNpdGx5IHNldFxuICpcbiAqIEBwYXJhbSBUQXV0aE9wdGlvbnNcbiAqIEBwYXJhbSBUQ2FjaGVPcHRpb25zXG4gKiBAcGFyYW0gVFN5c3RlbU9wdGlvbnNcbiAqIEBwYXJhbSBURnJhbWV3b3JrT3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRDb25maWd1cmF0aW9uIG9iamVjdFxuICovXG5cbi8vIGRlc3RydWN0dXJlIHdpdGggZGVmYXVsdCBzZXR0aW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29uZmlndXJhdGlvbih7IGF1dGgsIGNhY2hlID0ge30sIHN5c3RlbSA9IHt9LCBmcmFtZXdvcmsgPSB7fX06IENvbmZpZ3VyYXRpb24pOiBDb25maWd1cmF0aW9uIHtcbiAgY29uc3Qgb3ZlcmxheWVkQ29uZmlnOiBDb25maWd1cmF0aW9uID0ge1xuICAgIGF1dGg6IHsgLi4uREVGQVVMVF9BVVRIX09QVElPTlMsIC4uLmF1dGggfSxcbiAgICBjYWNoZTogeyAuLi5ERUZBVUxUX0NBQ0hFX09QVElPTlMsIC4uLmNhY2hlIH0sXG4gICAgc3lzdGVtOiB7IC4uLkRFRkFVTFRfU1lTVEVNX09QVElPTlMsIC4uLnN5c3RlbSB9LFxuICAgIGZyYW1ld29yazogeyAuLi5ERUZBVUxUX0ZSQU1FV09SS19PUFRJT05TLCAuLi5mcmFtZXdvcmsgfVxuICB9O1xuICByZXR1cm4gb3ZlcmxheWVkQ29uZmlnO1xufVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgU2VydmVyRXJyb3IgfSBmcm9tIFwiLi9TZXJ2ZXJFcnJvclwiO1xuXG5leHBvcnQgY29uc3QgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UgPSB7XG4gICAgbG9naW5SZXF1aXJlZDoge1xuICAgICAgICBjb2RlOiBcImxvZ2luX3JlcXVpcmVkXCJcbiAgICB9LFxuICAgIGludGVyYWN0aW9uUmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJpbnRlcmFjdGlvbl9yZXF1aXJlZFwiXG4gICAgfSxcbiAgICBjb25zZW50UmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJjb25zZW50X3JlcXVpcmVkXCJcbiAgICB9LFxufTtcblxuLyoqXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGUgdXNlciBpcyByZXF1aXJlZCB0byBwZXJmb3JtIGFuIGludGVyYWN0aXZlIHRva2VuIHJlcXVlc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIGV4dGVuZHMgU2VydmVyRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvclwiO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUxvZ2luUmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvck1lc3NhZ2UuaW50ZXJhY3Rpb25SZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDb25zZW50UmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmNvbnNlbnRSZXF1aXJlZC5jb2RlLCBlcnJvckRlc2MpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IFVzZXJBZ2VudEFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcbmV4cG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuZXhwb3J0IHsgTG9nTGV2ZWwgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmV4cG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5leHBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmV4cG9ydCB7IEF1dGhvcml0eSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuZXhwb3J0IHsgQ2FjaGVSZXN1bHQgfSBmcm9tIFwiLi9Vc2VyQWdlbnRBcHBsaWNhdGlvblwiO1xuZXhwb3J0IHsgQ2FjaGVMb2NhdGlvbiwgQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcbmV4cG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xuZXhwb3J0IHsgQXV0aFJlc3BvbnNlIH0gZnJvbSBcIi4vQXV0aFJlc3BvbnNlXCI7XG5cbi8vIEVycm9yc1xuZXhwb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XG5leHBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcbmV4cG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vZXJyb3IvU2VydmVyRXJyb3JcIjtcbmV4cG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuZXhwb3J0IHsgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0ludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5LZXkge1xuXG4gIGF1dGhvcml0eTogc3RyaW5nO1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBzY29wZXM6IHN0cmluZztcbiAgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIGNsaWVudElkOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nLCB1aWQ6IHN0cmluZywgdXRpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hdXRob3JpdHkgPSBVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5KTtcbiAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgdGhpcy5zY29wZXMgPSBzY29wZXM7XG4gICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIgPSBVdGlscy5iYXNlNjRFbmNvZGVTdHJpbmdVcmxTYWZlKHVpZCkgKyBcIi5cIiArIFV0aWxzLmJhc2U2NEVuY29kZVN0cmluZ1VybFNhZmUodXRpZCk7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuVmFsdWUge1xuXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIGlkVG9rZW46IHN0cmluZztcbiAgZXhwaXJlc0luOiBzdHJpbmc7XG4gIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlkVG9rZW46IHN0cmluZywgZXhwaXJlc0luOiBzdHJpbmcsIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nKSB7XG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW47XG4gICAgdGhpcy5leHBpcmVzSW4gPSBleHBpcmVzSW47XG4gICAgdGhpcy5ob21lQWNjb3VudElkZW50aWZpZXIgPSBob21lQWNjb3VudElkZW50aWZpZXI7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcblxuLyoqXG4gKiBOb25jZTogT0lEQyBOb25jZSBkZWZpbml0aW9uOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNJRFRva2VuXG4gKiBTdGF0ZTogT0F1dGggU3BlYzogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDkjc2VjdGlvbi0xMC4xMlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMge1xuXG4gIGF1dGhvcml0eUluc3RhbmNlOiBBdXRob3JpdHk7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIHNjb3BlczogQXJyYXk8c3RyaW5nPjtcblxuICBub25jZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuXG4gIC8vIHRlbGVtZXRyeSBpbmZvcm1hdGlvblxuICB4Q2xpZW50VmVyOiBzdHJpbmc7XG4gIHhDbGllbnRTa3U6IHN0cmluZztcbiAgY29ycmVsYXRpb25JZDogc3RyaW5nO1xuXG4gIHJlc3BvbnNlVHlwZTogc3RyaW5nO1xuICByZWRpcmVjdFVyaTogc3RyaW5nO1xuXG4gIC8vIFRPRE86IFRoZSBiZWxvdyBhcmUgbm90IHVzZWQgLSBjaGVjayBhbmQgZGVsZXRlIHdpdGggdGhlIHJlbmFtZSBQUlxuICBwcm9tcHRWYWx1ZTogc3RyaW5nO1xuICBzaWQ6IHN0cmluZztcbiAgbG9naW5IaW50OiBzdHJpbmc7XG4gIGRvbWFpbkhpbnQ6IHN0cmluZztcbiAgbG9naW5SZXE6IHN0cmluZztcbiAgZG9tYWluUmVxOiBzdHJpbmc7XG5cbiAgcXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmc7XG4gIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiBzdHJpbmc7XG5cbiAgcHVibGljIGdldCBhdXRob3JpdHkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA/IHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5IDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gYXV0aG9yaXR5XG4gICAqIEBwYXJhbSBjbGllbnRJZFxuICAgKiBAcGFyYW0gc2NvcGVcbiAgICogQHBhcmFtIHJlc3BvbnNlVHlwZVxuICAgKiBAcGFyYW0gcmVkaXJlY3RVcmlcbiAgICogQHBhcmFtIHN0YXRlXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoYXV0aG9yaXR5OiBBdXRob3JpdHksIGNsaWVudElkOiBzdHJpbmcsIHNjb3BlOiBBcnJheTxzdHJpbmc+LCByZXNwb25zZVR5cGU6IHN0cmluZywgcmVkaXJlY3RVcmk6IHN0cmluZywgc3RhdGU6IHN0cmluZyApIHtcbiAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlID0gYXV0aG9yaXR5O1xuICAgIHRoaXMuY2xpZW50SWQgPSBjbGllbnRJZDtcbiAgICB0aGlzLnNjb3BlcyA9IHNjb3BlO1xuXG4gICAgdGhpcy5ub25jZSA9IFV0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgJiYgIVV0aWxzLmlzRW1wdHkoc3RhdGUpID8gIFV0aWxzLmNyZWF0ZU5ld0d1aWQoKSArIFwifFwiICsgc3RhdGUgICA6IFV0aWxzLmNyZWF0ZU5ld0d1aWQoKTtcblxuICAgIC8vIFRPRE86IENoYW5nZSB0aGlzIHRvIHVzZXIgcGFzc2VkIHZzIGdlbmVyYXRlZCB3aXRoIHRoZSBuZXcgUFJcbiAgICB0aGlzLmNvcnJlbGF0aW9uSWQgPSBVdGlscy5jcmVhdGVOZXdHdWlkKCk7XG5cbiAgICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cbiAgICB0aGlzLnhDbGllbnRTa3UgPSBcIk1TQUwuSlNcIjtcbiAgICB0aGlzLnhDbGllbnRWZXIgPSBVdGlscy5nZXRMaWJyYXJ5VmVyc2lvbigpO1xuXG4gICAgdGhpcy5yZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGU7XG4gICAgdGhpcy5yZWRpcmVjdFVyaSA9IHJlZGlyZWN0VXJpO1xuXG4gIH1cblxuICAvKipcbiAgICogZ2VuZXJhdGVzIHRoZSBVUkwgd2l0aCBRdWVyeVN0cmluZyBQYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIGNyZWF0ZU5hdmlnYXRlVXJsKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RyID0gdGhpcy5jcmVhdGVOYXZpZ2F0aW9uVXJsU3RyaW5nKHNjb3Blcyk7XG4gICAgbGV0IGF1dGhFbmRwb2ludDogc3RyaW5nID0gdGhpcy5hdXRob3JpdHlJbnN0YW5jZS5BdXRob3JpemF0aW9uRW5kcG9pbnQ7XG4gICAgLy8gaWYgdGhlIGVuZHBvaW50IGFscmVhZHkgaGFzIHF1ZXJ5cGFyYW1zLCBsZXRzIGFkZCB0byBpdCwgb3RoZXJ3aXNlIGFkZCB0aGUgZmlyc3Qgb25lXG4gICAgaWYgKGF1dGhFbmRwb2ludC5pbmRleE9mKFwiP1wiKSA8IDApIHtcbiAgICAgIGF1dGhFbmRwb2ludCArPSBcIj9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYXV0aEVuZHBvaW50ICs9IFwiJlwiO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3RVcmw6IHN0cmluZyA9IGAke2F1dGhFbmRwb2ludH0ke3N0ci5qb2luKFwiJlwiKX1gO1xuICAgIHJldHVybiByZXF1ZXN0VXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHRoZSBhcnJheSBvZiBhbGwgUXVlcnlTdHJpbmdQYXJhbXMgdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIGNyZWF0ZU5hdmlnYXRpb25VcmxTdHJpbmcoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgaWYgKCFzY29wZXMpIHtcbiAgICAgIHNjb3BlcyA9IFt0aGlzLmNsaWVudElkXTtcbiAgICB9XG5cbiAgICBpZiAoc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCkgPT09IC0xKSB7XG4gICAgICBzY29wZXMucHVzaCh0aGlzLmNsaWVudElkKTtcbiAgICB9XG4gICAgY29uc3Qgc3RyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgc3RyLnB1c2goXCJyZXNwb25zZV90eXBlPVwiICsgdGhpcy5yZXNwb25zZVR5cGUpO1xuXG4gICAgdGhpcy50cmFuc2xhdGVjbGllbnRJZFVzZWRJblNjb3BlKHNjb3Blcyk7XG4gICAgc3RyLnB1c2goXCJzY29wZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnBhcnNlU2NvcGUoc2NvcGVzKSkpO1xuICAgIHN0ci5wdXNoKFwiY2xpZW50X2lkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuY2xpZW50SWQpKTtcbiAgICBzdHIucHVzaChcInJlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnJlZGlyZWN0VXJpKSk7XG5cbiAgICBzdHIucHVzaChcInN0YXRlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3RhdGUpKTtcbiAgICBzdHIucHVzaChcIm5vbmNlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMubm9uY2UpKTtcblxuICAgIHN0ci5wdXNoKFwiY2xpZW50X2luZm89MVwiKTtcbiAgICBzdHIucHVzaChgeC1jbGllbnQtU0tVPSR7dGhpcy54Q2xpZW50U2t1fWApO1xuICAgIHN0ci5wdXNoKGB4LWNsaWVudC1WZXI9JHt0aGlzLnhDbGllbnRWZXJ9YCk7XG4gICAgaWYgKHRoaXMucHJvbXB0VmFsdWUpIHtcbiAgICAgIHN0ci5wdXNoKFwicHJvbXB0PVwiICsgZW5jb2RlVVJJKHRoaXMucHJvbXB0VmFsdWUpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5xdWVyeVBhcmFtZXRlcnMpIHtcbiAgICAgIHN0ci5wdXNoKHRoaXMucXVlcnlQYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5leHRyYVF1ZXJ5UGFyYW1ldGVycykge1xuICAgICAgc3RyLnB1c2godGhpcy5leHRyYVF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgc3RyLnB1c2goXCJjbGllbnQtcmVxdWVzdC1pZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNvcnJlbGF0aW9uSWQpKTtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgLyoqXG4gICAqIGFwcGVuZCB0aGUgcmVxdWlyZWQgc2NvcGVzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtYmFzaWMtMV8wLmh0bWwjU2NvcGVzXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG4gICAgY29uc3QgY2xpZW50SWRJbmRleDogbnVtYmVyID0gc2NvcGVzLmluZGV4T2YodGhpcy5jbGllbnRJZCk7XG4gICAgaWYgKGNsaWVudElkSW5kZXggPj0gMCkge1xuICAgICAgc2NvcGVzLnNwbGljZShjbGllbnRJZEluZGV4LCAxKTtcbiAgICAgIGlmIChzY29wZXMuaW5kZXhPZihcIm9wZW5pZFwiKSA9PT0gLTEpIHtcbiAgICAgICAgc2NvcGVzLnB1c2goXCJvcGVuaWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2NvcGVzLmluZGV4T2YoXCJwcm9maWxlXCIpID09PSAtMSkge1xuICAgICAgICBzY29wZXMucHVzaChcInByb2ZpbGVcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBzY29wZXMgaW50byBhIGZvcm1hdHRlZCBzY29wZUxpc3RcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgcGFyc2VTY29wZShzY29wZXM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmcge1xuICAgIGxldCBzY29wZUxpc3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgaWYgKHNjb3Blcykge1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgc2NvcGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHNjb3BlTGlzdCArPSAoaSAhPT0gc2NvcGVzLmxlbmd0aCAtIDEpID8gc2NvcGVzW2ldICsgXCIgXCIgOiBzY29wZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjb3BlTGlzdDtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCB7IENsaWVudEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudEF1dGhFcnJvclwiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudEluZm8ge1xuXG4gIHByaXZhdGUgX3VpZDogc3RyaW5nO1xuICBnZXQgdWlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3VpZCA/IHRoaXMuX3VpZCA6IFwiXCI7XG4gIH1cblxuICBzZXQgdWlkKHVpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdWlkID0gdWlkO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXRpZDogc3RyaW5nO1xuICBnZXQgdXRpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91dGlkID8gdGhpcy5fdXRpZCA6IFwiXCI7XG4gIH1cblxuICBzZXQgdXRpZCh1dGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91dGlkID0gdXRpZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJhd0NsaWVudEluZm86IHN0cmluZykge1xuICAgIGlmICghcmF3Q2xpZW50SW5mbyB8fCBVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XG4gICAgICB0aGlzLnVpZCA9IFwiXCI7XG4gICAgICB0aGlzLnV0aWQgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWNvZGVkQ2xpZW50SW5mbzogc3RyaW5nID0gVXRpbHMuYmFzZTY0RGVjb2RlU3RyaW5nVXJsU2FmZShyYXdDbGllbnRJbmZvKTtcbiAgICAgIGNvbnN0IGNsaWVudEluZm86IENsaWVudEluZm8gPSA8Q2xpZW50SW5mbz5KU09OLnBhcnNlKGRlY29kZWRDbGllbnRJbmZvKTtcbiAgICAgIGlmIChjbGllbnRJbmZvKSB7XG4gICAgICAgIGlmIChjbGllbnRJbmZvLmhhc093blByb3BlcnR5KFwidWlkXCIpKSB7XG4gICAgICAgICAgdGhpcy51aWQgPSBjbGllbnRJbmZvLnVpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGllbnRJbmZvLmhhc093blByb3BlcnR5KFwidXRpZFwiKSkge1xuICAgICAgICAgIHRoaXMudXRpZCA9IGNsaWVudEluZm8udXRpZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJZFRva2VuIHtcblxuICBpc3N1ZXI6IHN0cmluZztcbiAgb2JqZWN0SWQ6IHN0cmluZztcbiAgc3ViamVjdDogc3RyaW5nO1xuICB0ZW5hbnRJZDogc3RyaW5nO1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIHByZWZlcnJlZE5hbWU6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBob21lT2JqZWN0SWQ6IHN0cmluZztcbiAgbm9uY2U6IHN0cmluZztcbiAgZXhwaXJhdGlvbjogc3RyaW5nO1xuICByYXdJZFRva2VuOiBzdHJpbmc7XG4gIGRlY29kZWRJZFRva2VuOiBPYmplY3Q7XG4gIHNpZDogc3RyaW5nO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICBjb25zdHJ1Y3RvcihyYXdJZFRva2VuOiBzdHJpbmcpIHtcbiAgICBpZiAoVXRpbHMuaXNFbXB0eShyYXdJZFRva2VuKSkge1xuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5OdWxsT3JFbXB0eUVycm9yKHJhd0lkVG9rZW4pO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgdGhpcy5yYXdJZFRva2VuID0gcmF3SWRUb2tlbjtcbiAgICAgIHRoaXMuZGVjb2RlZElkVG9rZW4gPSBVdGlscy5leHRyYWN0SWRUb2tlbihyYXdJZFRva2VuKTtcbiAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuKSB7XG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwiaXNzXCIpKSB7XG4gICAgICAgICAgdGhpcy5pc3N1ZXIgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wiaXNzXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJvaWRcIikpIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0SWQgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wib2lkXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJzdWJcIikpIHtcbiAgICAgICAgICB0aGlzLnN1YmplY3QgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wic3ViXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJ0aWRcIikpIHtcbiAgICAgICAgICB0aGlzLnRlbmFudElkID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcInRpZFwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwidmVyXCIpKSB7XG4gICAgICAgICAgdGhpcy52ZXJzaW9uID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcInZlclwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwicHJlZmVycmVkX3VzZXJuYW1lXCIpKSB7XG4gICAgICAgICAgdGhpcy5wcmVmZXJyZWROYW1lID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcInByZWZlcnJlZF91c2VybmFtZVwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwibmFtZVwiKSkge1xuICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJuYW1lXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJub25jZVwiKSkge1xuICAgICAgICAgIHRoaXMubm9uY2UgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wibm9uY2VcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcImV4cFwiKSkge1xuICAgICAgICAgIHRoaXMuZXhwaXJhdGlvbiA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJleHBcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcImhvbWVfb2lkXCIpKSB7XG4gICAgICAgICAgICB0aGlzLmhvbWVPYmplY3RJZCA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJob21lX29pZFwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwic2lkXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNpZCA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJzaWRcIl07XG4gICAgICAgIH1cbiAgICAgIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBUT0RPOiBUaGlzIGVycm9yIGhlcmUgd29uJ3QgcmVhbGx5IGV2ZXJ5IGJlIHRocm93biwgc2luY2UgZXh0cmFjdElkVG9rZW4oKSByZXR1cm5zIG51bGwgaWYgdGhlIGRlY29kZUp3dCgpIGZhaWxzLlxuICAgICAgLy8gTmVlZCB0byBhZGQgYmV0dGVyIGVycm9yIGhhbmRsaW5nIGhlcmUgdG8gYWNjb3VudCBmb3IgYmVpbmcgdW5hYmxlIHRvIGRlY29kZSBqd3RzLlxuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5DYWNoZUl0ZW1cIjtcbmltcG9ydCB7IENhY2hlTG9jYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBDYWNoZUtleXMgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0b3JhZ2Ugey8vIFNpbmdsZXRvblxuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdG9yYWdlO1xuICBwcml2YXRlIGxvY2FsU3RvcmFnZVN1cHBvcnRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZVN1cHBvcnRlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGNhY2hlTG9jYXRpb246IENhY2hlTG9jYXRpb24pIHtcbiAgICBpZiAoU3RvcmFnZS5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuIFN0b3JhZ2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZUxvY2F0aW9uID0gY2FjaGVMb2NhdGlvbjtcbiAgICB0aGlzLmxvY2FsU3RvcmFnZVN1cHBvcnRlZCA9IHR5cGVvZiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSAhPSBudWxsO1xuICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQgPSB0eXBlb2Ygd2luZG93W2NhY2hlTG9jYXRpb25dICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvd1tjYWNoZUxvY2F0aW9uXSAhPSBudWxsO1xuICAgIFN0b3JhZ2UuaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghdGhpcy5sb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgJiYgIXRoaXMuc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQpIHtcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1N0b3JhZ2VTdXBwb3J0ZWRFcnJvcigpO1xuICAgIH1cblxuICAgIHJldHVybiBTdG9yYWdlLmluc3RhbmNlO1xuICB9XG5cbiAgICAvLyBhZGQgdmFsdWUgdG8gc3RvcmFnZVxuICAgIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGVuYWJsZUNvb2tpZVN0b3JhZ2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xuICAgICAgICAgICAgd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IG9uZSBpdGVtIGJ5IGtleSBmcm9tIHN0b3JhZ2VcbiAgICBnZXRJdGVtKGtleTogc3RyaW5nLCBlbmFibGVDb29raWVTdG9yYWdlPzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgICAgIGlmIChlbmFibGVDb29raWVTdG9yYWdlICYmIHRoaXMuZ2V0SXRlbUNvb2tpZShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtQ29va2llKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uZ2V0SXRlbShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSB2YWx1ZSBmcm9tIHN0b3JhZ2VcbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNsZWFyIHN0b3JhZ2UgKHJlbW92ZSBhbGwgaXRlbXMgZnJvbSBpdClcbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0uY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFsbEFjY2Vzc1Rva2VucyhjbGllbnRJZDogc3RyaW5nLCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZyk6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiA9IFtdO1xuICAgICAgICBsZXQgYWNjZXNzVG9rZW5DYWNoZUl0ZW06IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtO1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XG4gICAgICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Lm1hdGNoKGNsaWVudElkKSAmJiBrZXkubWF0Y2goaG9tZUFjY291bnRJZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtID0gbmV3IEFjY2Vzc1Rva2VuQ2FjaGVJdGVtKEpTT04ucGFyc2Uoa2V5KSwgSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChhY2Nlc3NUb2tlbkNhY2hlSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICByZW1vdmVBY3F1aXJlVG9rZW5FbnRyaWVzKGF1dGhvcml0eUtleTogc3RyaW5nLCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xuICAgICAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhdXRob3JpdHlLZXkgIT09IFwiXCIgJiYga2V5LmluZGV4T2YoYXV0aG9yaXR5S2V5KSA+IC0xKSB8fCAoYWNxdWlyZVRva2VuQWNjb3VudEtleSAhPT0gXCJcIiAmJiBrZXkuaW5kZXhPZihhY3F1aXJlVG9rZW5BY2NvdW50S2V5KSA+IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldENhY2hlSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZztcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihDb25zdGFudHMubXNhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW0oa2V5LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ29uc3RhbnRzLnJlbmV3U3RhdHVzKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SXRlbUNvb2tpZShjTmFtZTogc3RyaW5nLCBjVmFsdWU6IHN0cmluZywgZXhwaXJlcz86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgY29va2llU3RyID0gY05hbWUgKyBcIj1cIiArIGNWYWx1ZSArIFwiO1wiO1xuICAgICAgICBpZiAoZXhwaXJlcykge1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlVGltZSA9IHRoaXMuZ2V0Q29va2llRXhwaXJhdGlvblRpbWUoZXhwaXJlcyk7XG4gICAgICAgICAgICBjb29raWVTdHIgKz0gXCJleHBpcmVzPVwiICsgZXhwaXJlVGltZSArIFwiO1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyO1xuICAgIH1cblxuICAgIGdldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjTmFtZSArIFwiPVwiO1xuICAgICAgICBjb25zdCBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjID0gY2FbaV07XG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cblxuICAgIGdldENvb2tpZUV4cGlyYXRpb25UaW1lKGNvb2tpZUxpZmVEYXlzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGV4cHIgPSBuZXcgRGF0ZSh0b2RheS5nZXRUaW1lKCkgKyBjb29raWVMaWZlRGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICByZXR1cm4gZXhwci50b1VUQ1N0cmluZygpO1xuICAgIH1cblxuICAgIGNsZWFyQ29va2llKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgXCJcIiwgLTEpO1xuICAgICAgICB0aGlzLnNldEl0ZW1Db29raWUoQ29uc3RhbnRzLnN0YXRlTG9naW4sIFwiXCIsIC0xKTtcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIFwiXCIsIC0xKTtcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5zdGF0ZUFjcXVpcmVUb2tlbiwgXCJcIiwgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhY3F1aXJlVG9rZW5BY2NvdW50S2V5IHRvIGNhY2hlIGFjY291bnQgb2JqZWN0XG4gICAgICogQHBhcmFtIGFjY291bnRJZFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZW5lcmF0ZUFjcXVpcmVUb2tlbkFjY291bnRLZXkoYWNjb3VudElkOiBhbnksIHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gQ2FjaGVLZXlzLkFDUVVJUkVfVE9LRU5fVVNFUiArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArXG4gICAgICAgICAgICBgJHthY2NvdW50SWR9YCArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciAgKyBgJHtzdGF0ZX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhdXRob3JpdHlLZXkgdG8gY2FjaGUgYXV0aG9yaXR5XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICovXG4gICAgc3RhdGljIGdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gQ2FjaGVLZXlzLkFVVEhPUklUWSArIENvbnN0YW50cy5yZXNvdXJjZURlbGltaXRlciArIGAke3N0YXRlfWA7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEFjY2Vzc1Rva2VuS2V5IH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5LZXlcIjtcbmltcG9ydCB7IEFjY2Vzc1Rva2VuVmFsdWUgfSBmcm9tIFwiLi9BY2Nlc3NUb2tlblZhbHVlXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzVG9rZW5DYWNoZUl0ZW0ge1xuXG4gIGtleTogQWNjZXNzVG9rZW5LZXk7XG4gIHZhbHVlOiBBY2Nlc3NUb2tlblZhbHVlO1xuXG4gIGNvbnN0cnVjdG9yKGtleTogQWNjZXNzVG9rZW5LZXksIHZhbHVlOiBBY2Nlc3NUb2tlblZhbHVlKSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCB7IEFhZEF1dGhvcml0eSB9IGZyb20gXCIuL0FhZEF1dGhvcml0eVwiO1xuaW1wb3J0IHsgQjJjQXV0aG9yaXR5IH0gZnJvbSBcIi4vQjJjQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBBdXRob3JpdHksIEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eUZhY3Rvcnkge1xuICAgIC8qKlxuICAgICogUGFyc2UgdGhlIHVybCBhbmQgZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGF1dGhvcml0eVxuICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmw6IHN0cmluZyk6IEF1dGhvcml0eVR5cGUge1xuICAgICAgICBhdXRob3JpdHlVcmwgPSBVdGlscy5DYW5vbmljYWxpemVVcmkoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gY29tcG9uZW50cy5QYXRoU2VnbWVudHM7XG4gICAgICAgIHN3aXRjaCAocGF0aFNlZ21lbnRzWzBdKSB7XG4gICAgICAgICAgICBjYXNlIFwidGZwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQjJDO1xuICAgICAgICAgICAgY2FzZSBcImFkZnNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BZGZzO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5BYWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENyZWF0ZSBhbiBhdXRob3JpdHkgb2JqZWN0IG9mIHRoZSBjb3JyZWN0IHR5cGUgYmFzZWQgb24gdGhlIHVybFxuICAgICogUGVyZm9ybXMgYmFzaWMgYXV0aG9yaXR5IHZhbGlkYXRpb24gLSBjaGVja3MgdG8gc2VlIGlmIHRoZSBhdXRob3JpdHkgaXMgb2YgYSB2YWxpZCB0eXBlIChlZyBhYWQsIGIyYylcbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlSW5zdGFuY2UoYXV0aG9yaXR5VXJsOiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKTogQXV0aG9yaXR5IHtcbiAgICAgICAgaWYgKFV0aWxzLmlzRW1wdHkoYXV0aG9yaXR5VXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHlwZSA9IEF1dGhvcml0eUZhY3RvcnkuRGV0ZWN0QXV0aG9yaXR5RnJvbVVybChhdXRob3JpdHlVcmwpO1xuICAgICAgICAvLyBEZXBlbmRpbmcgb24gYWJvdmUgZGV0ZWN0aW9uLCBjcmVhdGUgdGhlIHJpZ2h0IHR5cGUuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBdXRob3JpdHlUeXBlLkIyQzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEIyY0F1dGhvcml0eShhdXRob3JpdHlVcmwsIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5BYWQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBYWRBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBBYWRBdXRob3JpdHkgfSBmcm9tIFwiLi9BYWRBdXRob3JpdHlcIjtcbmltcG9ydCB7IEF1dGhvcml0eSwgQXV0aG9yaXR5VHlwZSB9IGZyb20gXCIuL0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEIyY0F1dGhvcml0eSBleHRlbmRzIEFhZEF1dGhvcml0eSB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcbiAgICBzdXBlcihhdXRob3JpdHksIHZhbGlkYXRlQXV0aG9yaXR5KTtcbiAgICBjb25zdCB1cmxDb21wb25lbnRzID0gVXRpbHMuR2V0VXJsQ29tcG9uZW50cyhhdXRob3JpdHkpO1xuXG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHM7XG4gICAgaWYgKHBhdGhTZWdtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYjJjQXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XG4gICAgfVxuXG4gICAgdGhpcy5DYW5vbmljYWxBdXRob3JpdHkgPSBgaHR0cHM6Ly8ke3VybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0fS8ke3BhdGhTZWdtZW50c1swXX0vJHtwYXRoU2VnbWVudHNbMV19LyR7cGF0aFNlZ21lbnRzWzJdfS9gO1xuICB9XG5cbiAgcHVibGljIGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGUge1xuICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBUZW5hbnREaXNjb3ZlcnlFbmRwb2ludFxuICAgKi9cbiAgcHVibGljIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgcmVzdWx0UHJvbWlzZSA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIHJlc29sdmUodGhpcy5EZWZhdWx0T3BlbklkQ29uZmlndXJhdGlvbkVuZHBvaW50KSk7XG5cbiAgICBpZiAoIXRoaXMuSXNWYWxpZGF0aW9uRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuSXNJblRydXN0ZWRIb3N0TGlzdCh0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdFByb21pc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICAgIHJlamVjdChDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLnVuc3VwcG9ydGVkQXV0aG9yaXR5VmFsaWRhdGlvbikpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcblxuLyoqXG4gKiBLZXktVmFsdWUgdHlwZSB0byBzdXBwb3J0IHF1ZXJ5UGFyYW1zIGFuZCBleHRyYVF1ZXJ5UGFyYW1zXG4gKi9cbmV4cG9ydCB0eXBlIFFQRGljdCA9IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuXG5cbmV4cG9ydCB0eXBlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHtcbiAgICBzY29wZXM/OiBBcnJheTxzdHJpbmc+O1xuICAgIGV4dHJhU2NvcGVzVG9Db25zZW50PzogQXJyYXk8c3RyaW5nPjtcbiAgICBwcm9tcHQ/OiBzdHJpbmc7XG4gICAgZXh0cmFRdWVyeVBhcmFtZXRlcnM/OiBRUERpY3Q7XG4gICAgY2xhaW1zUmVxdWVzdD86IG51bGw7XG4gICAgYXV0aG9yaXR5Pzogc3RyaW5nO1xuICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmc7XG4gICAgYWNjb3VudD86IEFjY291bnQ7XG4gICAgc2lkPzogc3RyaW5nO1xuICAgIGxvZ2luSGludD86IHN0cmluZztcbn07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XG5cbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5leHBvcnQgdHlwZSBBdXRoUmVzcG9uc2UgPSB7XG4gICAgdW5pcXVlSWQ6IHN0cmluZztcbiAgICB0ZW5hbnRJZDogc3RyaW5nO1xuICAgIHRva2VuVHlwZTogc3RyaW5nO1xuICAgIGlkVG9rZW46IElkVG9rZW47XG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgICBzY29wZXM6IEFycmF5PHN0cmluZz47XG4gICAgZXhwaXJlc09uOiBEYXRlO1xuICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgYWNjb3VudFN0YXRlOiBzdHJpbmc7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==