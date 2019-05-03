/*! @azure/msal v1.0.0-preview.4 2019-05-03 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
var ClientAuthError_1 = __webpack_require__(4);
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
     * Add SID to extraQueryParameters
     * @param sid
     */
    Utils.addSSOParameter = function (ssoType, ssoData, ssoParam) {
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
    ACQUIRE_TOKEN_ACCOUNT: "msal.acquireTokenAccount"
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
    version: "1.0.0-preview.4"
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var Constants_1 = __webpack_require__(2);
var ClientAuthError_1 = __webpack_require__(4);
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
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
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
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),
/* 4 */
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
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


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
var ClientConfigurationError_1 = __webpack_require__(3);
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
var AccessTokenKey_1 = __webpack_require__(18);
var AccessTokenValue_1 = __webpack_require__(19);
var ServerRequestParameters_1 = __webpack_require__(20);
var ClientInfo_1 = __webpack_require__(21);
var Constants_1 = __webpack_require__(2);
var IdToken_1 = __webpack_require__(22);
var Storage_1 = __webpack_require__(23);
var Account_1 = __webpack_require__(10);
var Utils_1 = __webpack_require__(0);
var AuthorityFactory_1 = __webpack_require__(25);
var Configuration_1 = __webpack_require__(13);
var AuthenticationParameters_1 = __webpack_require__(14);
var ClientConfigurationError_1 = __webpack_require__(3);
var AuthError_1 = __webpack_require__(5);
var ClientAuthError_1 = __webpack_require__(4);
var ServerError_1 = __webpack_require__(8);
var InteractionRequiredAuthError_1 = __webpack_require__(15);
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * @hidden
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
 * UserAgentApplication class : {@link UserAgentApplication}
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * Constructor for the {@link UserAgentApplication} object
     * This is to be able to instantiate the {@link UserAgentApplication} object
     * @constructor
     *
     * Important attributes to configure are:
     * - clientID: the application ID of your application. You get obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application
     * @param {@link Configuration} configuration object for the MSAL UserAgentApplication instance
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
        /**
         * returns the authority, where authority is a URL indicating the directory that MSAL can use to obtain tokens
         * - In Azure AD, this attribute is a URL indicating the Azure active directory that MSAL uses to obtain tokens
         * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;
         * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com)
         * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations
         * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
         * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
         * - In Azure B2C, it is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/<policyName>/
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
     * returns the authority instance
     * @returns authority {@link Authority}
     */
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
        if (!this.config.framework.isAngular) {
            var cachedHash = this.cacheStorage.getItem(Constants_1.Constants.urlHash);
            if (cachedHash) {
                this.processCallBack(cachedHash, null);
            }
        }
    };
    //#endregion
    //#region Redirect Flow
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link AuthenticationParameters}
     */
    UserAgentApplication.prototype.loginRedirect = function (request) {
        var _this = this;
        // Throw error if callbacks are not set before redirect
        if (!this.redirectCallbacksSet) {
            throw ClientConfigurationError_1.ClientConfigurationError.createRedirectCallbacksNotSetError();
        }
        // Creates navigate url; saves value in cache; redirect user to AAD
        if (this.loginInProgress) {
            var reqState = void 0;
            if (request) {
                reqState = request.state;
            }
            this.errorReceivedCallback(ClientAuthError_1.ClientAuthError.createLoginInProgressError(), reqState);
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
     * @hidden
     * Helper function to loginRedirect
     *
     * @param account
     * @param AuthenticationParameters
     * @param scopes
     */
    UserAgentApplication.prototype.loginRedirectHelper = function (account, request, scopes) {
        var _this = this;
        // Track login in progress
        this.loginInProgress = true;
        this.authorityInstance.resolveEndpointsAsync().then(function () {
            // create the Request to be sent to the Server
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), request.state);
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
        }).catch(function (err) {
            // All catch - when is this executed? Possibly when error is thrown, but not if previous function rejects instead of throwing
            _this.logger.warning("could not resolve endpoints");
            var reqState;
            if (request) {
                reqState = request.state;
            }
            _this.errorReceivedCallback(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), _this.getAccountState(reqState));
        });
    };
    /**
     * Used when you want to obtain an access_token for your API by redirecting the user to the authorization endpoint.
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
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
            var reqState = void 0;
            if (request) {
                reqState = request.state;
            }
            this.errorReceivedCallback(ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError(), reqState);
            return;
        }
        // If no session exists, prompt the user to login.
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
            serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request.state);
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
        }).catch(function (err) {
            // All catch - when is this executed? Possibly when error is thrown, but not if previous function rejects instead of throwing
            _this.logger.warning("could not resolve endpoints");
            var reqState;
            if (request) {
                reqState = request.state;
            }
            _this.errorReceivedCallback(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err.toString), _this.getAccountState(reqState));
        });
    };
    /**
     * @hidden
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
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
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link AuthenticationParameters}
     *
     * @returns {Promise.<AuthResponse>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
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
     * @hidden
     * Helper function to loginPopup
     *
     * @param account
     * @param request
     * @param resolve
     * @param reject
     * @param scopes
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
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(_this.authorityInstance, _this.clientId, scopes, ResponseTypes.id_token, _this.getRedirectUri(), request.state);
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
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
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
                serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request.state);
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
    //#endregion
    //#region Silent Flow
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - A Promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
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
            var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, _this.config.auth.validateAuthority), _this.clientId, request.scopes, responseType, _this.getRedirectUri(), request.state);
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
            var userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
            var authErr;
            var cacheResultResponse;
            if (!userContainedClaims) {
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
                if (userContainedClaims) {
                    _this.logger.verbose("Skipped cache lookup since claims were given.");
                }
                else {
                    _this.logger.verbose("Token is not in cache for scope:" + scope);
                }
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
     */
    UserAgentApplication.prototype.isInteractionRequired = function (errorString) {
        if (errorString.indexOf("interaction_required") !== -1 ||
            errorString.indexOf("consent_required") !== -1 ||
            errorString.indexOf("login_required") !== -1) {
            return true;
        }
        return false;
    };
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
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
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
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
    //#endregion
    //#region General Helpers
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
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
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
        var urlNavigate = this.authority + "oauth2/v2.0/logout?" + logout;
        this.promptUser(urlNavigate);
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
    //#endregion
    //#region Response
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
     * @hidden
     * Returns deserialized portion of URL hash
     * @param hash
     */
    UserAgentApplication.prototype.deserializeHash = function (hash) {
        hash = this.getHash(hash);
        return Utils_1.Utils.deserialize(hash);
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
                var aState = this.getAccountState(serverAuthenticationRequest.state);
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
     * @hidden
     * Used to get a unique list of authoritues from the cache
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
        if (!Utils_1.Utils.isEmpty(adalIdToken)) {
            return Utils_1.Utils.extractIdToken(adalIdToken);
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
     * @hidden
     * Renews idtoken for app"s own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
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
                var accountId = void 0;
                if (account && !Utils_1.Utils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                }
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
                response.accountState = this.getAccountState(stateInfo.state);
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
                        throw ClientAuthError_1.ClientAuthError.createClientInfoNotPopulatedError("ClientInfo not received in the response from the server");
                    }
                    response.account = Account_1.Account.createAccount(response.idToken, new ClientInfo_1.ClientInfo(clientInfo));
                    var accountKey = void 0;
                    if (response.account && !Utils_1.Utils.isEmpty(response.account.homeAccountIdentifier)) {
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
        if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
        }
        return response;
    };
    /* tslint:enable:no-string-literal */
    //#endregion
    //#region Account
    /**
     * Returns the signed in account (received from an account object created at the time of login) or null when no state is found
     * @returns {@link Account} account object stored in MSAL
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
     * Used to filter all cached items and return a list of unique accounts based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Accounts - accounts saved in the cache.
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
    //#endregion
    //#region Scopes (Extract to Scopes.ts)
    // Note: "this" dependency in this section is minimal.
    // If pCacheStorage is separated from the class object, or passed as a fn param, scopesUtils.ts can be created
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
    //#endregion
    //#region Angular
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
    //#endregion
    //#region Getters and Setters
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
    //#endregion
    //#region String Util (Should be extracted to Utils.ts)
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
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
        this.cacheStorage.setItem(authorityKey, Utils_1.Utils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        //return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!Utils_1.Utils.isEmpty(account.homeAccountIdentifier)) {
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
    /**
     * @hidden
     * @ignore
     *
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
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                AuthenticationParameters_1.validateClaimsRequest(request);
                serverAuthenticationRequest.claimsValue = request.claimsRequest;
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
            eQParams = this.sanitizeEQParams(request);
        }
        // Populate the extraQueryParameters to be sent to the server
        serverAuthenticationRequest.queryParameters = Utils_1.Utils.generateQueryParametersString(queryParameters);
        serverAuthenticationRequest.extraQueryParameters = Utils_1.Utils.generateQueryParametersString(eQParams);
        return serverAuthenticationRequest;
    };
    /**
     * @hidden
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    UserAgentApplication.prototype.validatePromptParameter = function (prompt) {
        if (!([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) >= 0)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    /**
     * @hidden
     * @ignore
  
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    UserAgentApplication.prototype.sanitizeEQParams = function (request) {
        var eQParams = request.extraQueryParameters;
        if (!eQParams) {
            return null;
        }
        if (request.claimsRequest) {
            this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        delete eQParams[Constants_1.SSOTypes.SID];
        delete eQParams[Constants_1.SSOTypes.LOGIN_HINT];
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

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
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
        var homeAccountIdentifier;
        if (!Utils_1.Utils.isEmpty(uid) && !Utils_1.Utils.isEmpty(utid)) {
            homeAccountIdentifier = Utils_1.Utils.base64EncodeStringUrlSafe(uid) + "." + Utils_1.Utils.base64EncodeStringUrlSafe(utid);
        }
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
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    redirectUri: function () { return Utils_1.Utils.getDefaultRedirectUri(); },
    postLogoutRedirectUri: function () { return Utils_1.Utils.getDefaultRedirectUri(); },
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
var ClientConfigurationError_1 = __webpack_require__(3);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
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
var AuthenticationParameters_1 = __webpack_require__(14);
exports.AuthenticationParameters = AuthenticationParameters_1.AuthenticationParameters;
var AuthResponse_1 = __webpack_require__(27);
exports.AuthResponse = AuthResponse_1.AuthResponse;
// Errors
var AuthError_1 = __webpack_require__(5);
exports.AuthError = AuthError_1.AuthError;
var ClientAuthError_1 = __webpack_require__(4);
exports.ClientAuthError = ClientAuthError_1.ClientAuthError;
var ServerError_1 = __webpack_require__(8);
exports.ServerError = ServerError_1.ServerError;
var ClientConfigurationError_1 = __webpack_require__(3);
exports.ClientConfigurationError = ClientConfigurationError_1.ClientConfigurationError;
var InteractionRequiredAuthError_1 = __webpack_require__(15);
exports.InteractionRequiredAuthError = InteractionRequiredAuthError_1.InteractionRequiredAuthError;


/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
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
            str.push("prompt=" + encodeURIComponent(this.promptValue));
        }
        if (this.claimsValue) {
            str.push("claims=" + encodeURIComponent(this.claimsValue));
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ClientAuthError_1 = __webpack_require__(4);
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __webpack_require__(0);
var ClientAuthError_1 = __webpack_require__(4);
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var AccessTokenCacheItem_1 = __webpack_require__(24);
var Constants_2 = __webpack_require__(2);
var ClientConfigurationError_1 = __webpack_require__(3);
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
        return Constants_2.CacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter +
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
/* 24 */
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
/* 25 */
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
var B2cAuthority_1 = __webpack_require__(26);
var Authority_1 = __webpack_require__(6);
var ClientConfigurationError_1 = __webpack_require__(3);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var AadAuthority_1 = __webpack_require__(11);
var Authority_1 = __webpack_require__(6);
var ClientConfigurationError_1 = __webpack_require__(3);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Nc2FsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01zYWwvLi9zcmMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Db25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9DbGllbnRBdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9BdXRoRXJyb3IudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRob3JpdHkudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9TZXJ2ZXJFcnJvci50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1VzZXJBZ2VudEFwcGxpY2F0aW9uLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQWNjb3VudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FhZEF1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL1hIUkNsaWVudC50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnMudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9BY2Nlc3NUb2tlbktleS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuVmFsdWUudHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9TZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0NsaWVudEluZm8udHMiLCJ3ZWJwYWNrOi8vTXNhbC8uL3NyYy9JZFRva2VuLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtLnRzIiwid2VicGFjazovL01zYWwvLi9zcmMvQXV0aG9yaXR5RmFjdG9yeS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0IyY0F1dGhvcml0eS50cyIsIndlYnBhY2s6Ly9Nc2FsLy4vc3JjL0F1dGhSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNB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Qzt3QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pELEtBQUssQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pEO3dCQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFBQyxTQUFTO3lCQUFFO3dCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7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QyxDQUFDLENBQUM7SUFDdkYsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLGNBQWMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3RILFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUksU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJO1FBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FBRSxDQUFDLENBQUM7SUFDbEYsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksT0FBTyxDQUFDLENBQUMsQ0FB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Q3hELGNBQU8sQ0FBQyxLQUFJLENBQUMsa0NBQWtDLENBQUM7UUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDN0IsT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFFRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsK0JBQStCLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDbEYsT0FBTyxhQUFhLENBQUM7U0FDdEI7UUFFRCxPQUFPLElBQUksT0FBTyxDQUFTLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDekMsYUFBTSxDQUFDLDBEQUErQixDQUFDLDhCQUE4QixDQUFDO1FBQXRFLENBQXNFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLENBbkNpQywyQkFBWSxHQW1DN0M7QUFuQ1ksb0NBQVk7Ozs7Ozs7OztBQ1h6Qiw0REFBNEQ7QUFDNUQsa0NBQWtDIiwiZmlsZSI6Im1zYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIk1zYWxcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTXNhbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNc2FsXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IElVcmkgfSBmcm9tIFwiLi9JVXJpXCI7XG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHtDb25zdGFudHMsIFNTT1R5cGVzLCBQcm9tcHRTdGF0ZX0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIFFQRGljdCB9IGZyb20gXCIuL0F1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgQXV0aFJlc3BvbnNlIH0gZnJvbSBcIi4vQXV0aFJlc3BvbnNlXCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5cbmltcG9ydCB7IExpYnJhcnkgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG5cbiAgLy8jcmVnaW9uIEdlbmVyYWwgVXRpbFxuXG4gIC8qKlxuICAgKiBVdGlscyBmdW5jdGlvbiB0byBjb21wYXJlIHR3byBBY2NvdW50IG9iamVjdHMgLSB1c2VkIHRvIGNoZWNrIGlmIHRoZSBzYW1lIHVzZXIgYWNjb3VudCBpcyBsb2dnZWQgaW5cbiAgICpcbiAgICogQHBhcmFtIGExOiBBY2NvdW50IG9iamVjdFxuICAgKiBAcGFyYW0gYTI6IEFjY291bnQgb2JqZWN0XG4gICAqL1xuICBzdGF0aWMgY29tcGFyZUFjY291bnRzKGExOiBBY2NvdW50LCBhMjogQWNjb3VudCk6IGJvb2xlYW4ge1xuICAgaWYgKCFhMSB8fCAhYTIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgaWYgKGExLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBhMi5ob21lQWNjb3VudElkZW50aWZpZXIpIHtcbiAgICAgIGlmIChhMS5ob21lQWNjb3VudElkZW50aWZpZXIgPT09IGEyLmhvbWVBY2NvdW50SWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY2ltYWwgdG8gSGV4XG4gICAqXG4gICAqIEBwYXJhbSBudW1cbiAgICovXG4gIHN0YXRpYyBkZWNpbWFsVG9IZXgobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHZhciBoZXg6IHN0cmluZyA9IG51bS50b1N0cmluZygxNik7XG4gICAgd2hpbGUgKGhleC5sZW5ndGggPCAyKSB7XG4gICAgICBoZXggPSBcIjBcIiArIGhleDtcbiAgICB9XG4gICAgcmV0dXJuIGhleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNU0FMIEpTIExpYnJhcnkgVmVyc2lvblxuICAgKi9cbiAgc3RhdGljIGdldExpYnJhcnlWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIExpYnJhcnkudmVyc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IHJhbmRvbSBHVUlEIC0gdXNlZCB0byBwb3B1bGF0ZSBzdGF0ZT9cbiAgICogQHJldHVybnMgc3RyaW5nIChHVUlEKVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZU5ld0d1aWQoKTogc3RyaW5nIHtcbiAgICAvLyBSRkM0MTIyOiBUaGUgdmVyc2lvbiA0IFVVSUQgaXMgbWVhbnQgZm9yIGdlbmVyYXRpbmcgVVVJRHMgZnJvbSB0cnVseS1yYW5kb20gb3JcbiAgICAvLyBwc2V1ZG8tcmFuZG9tIG51bWJlcnMuXG4gICAgLy8gVGhlIGFsZ29yaXRobSBpcyBhcyBmb2xsb3dzOlxuICAgIC8vICAgICBTZXQgdGhlIHR3byBtb3N0IHNpZ25pZmljYW50IGJpdHMgKGJpdHMgNiBhbmQgNykgb2YgdGhlXG4gICAgLy8gICAgICAgIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgdG8gemVybyBhbmQgb25lLCByZXNwZWN0aXZlbHkuXG4gICAgLy8gICAgIFNldCB0aGUgZm91ciBtb3N0IHNpZ25pZmljYW50IGJpdHMgKGJpdHMgMTIgdGhyb3VnaCAxNSkgb2YgdGhlXG4gICAgLy8gICAgICAgIHRpbWVfaGlfYW5kX3ZlcnNpb24gZmllbGQgdG8gdGhlIDQtYml0IHZlcnNpb24gbnVtYmVyIGZyb21cbiAgICAvLyAgICAgICAgU2VjdGlvbiA0LjEuMy4gVmVyc2lvbjRcbiAgICAvLyAgICAgU2V0IGFsbCB0aGUgb3RoZXIgYml0cyB0byByYW5kb21seSAob3IgcHNldWRvLXJhbmRvbWx5KSBjaG9zZW5cbiAgICAvLyAgICAgdmFsdWVzLlxuICAgIC8vIFVVSUQgICAgICAgICAgICAgICAgICAgPSB0aW1lLWxvdyBcIi1cIiB0aW1lLW1pZCBcIi1cInRpbWUtaGlnaC1hbmQtdmVyc2lvbiBcIi1cImNsb2NrLXNlcS1yZXNlcnZlZCBhbmQgbG93KDJoZXhPY3RldClcIi1cIiBub2RlXG4gICAgLy8gdGltZS1sb3cgICAgICAgICAgICAgICA9IDRoZXhPY3RldFxuICAgIC8vIHRpbWUtbWlkICAgICAgICAgICAgICAgPSAyaGV4T2N0ZXRcbiAgICAvLyB0aW1lLWhpZ2gtYW5kLXZlcnNpb24gID0gMmhleE9jdGV0XG4gICAgLy8gY2xvY2stc2VxLWFuZC1yZXNlcnZlZCA9IGhleE9jdGV0OlxuICAgIC8vIGNsb2NrLXNlcS1sb3cgICAgICAgICAgPSBoZXhPY3RldFxuICAgIC8vIG5vZGUgICAgICAgICAgICAgICAgICAgPSA2aGV4T2N0ZXRcbiAgICAvLyBGb3JtYXQ6IHh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFxuICAgIC8vIHkgY291bGQgYmUgMTAwMCwgMTAwMSwgMTAxMCwgMTAxMSBzaW5jZSBtb3N0IHNpZ25pZmljYW50IHR3byBiaXRzIG5lZWRzIHRvIGJlIDEwXG4gICAgLy8geSB2YWx1ZXMgYXJlIDgsIDksIEEsIEJcblxuICAgIGNvbnN0IGNyeXB0b09iajogQ3J5cHRvID0gd2luZG93LmNyeXB0bzsgLy8gZm9yIElFIDExXG4gICAgaWYgKGNyeXB0b09iaiAmJiBjcnlwdG9PYmouZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICBjb25zdCBidWZmZXI6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICBjcnlwdG9PYmouZ2V0UmFuZG9tVmFsdWVzKGJ1ZmZlcik7XG5cbiAgICAgIC8vYnVmZmVyWzZdIGFuZCBidWZmZXJbN10gcmVwcmVzZW50cyB0aGUgdGltZV9oaV9hbmRfdmVyc2lvbiBmaWVsZC4gV2Ugd2lsbCBzZXQgdGhlIGZvdXIgbW9zdCBzaWduaWZpY2FudCBiaXRzICg0IHRocm91Z2ggNykgb2YgYnVmZmVyWzZdIHRvIHJlcHJlc2VudCBkZWNpbWFsIG51bWJlciA0IChVVUlEIHZlcnNpb24gbnVtYmVyKS5cbiAgICAgIGJ1ZmZlcls2XSB8PSAweDQwOyAvL2J1ZmZlcls2XSB8IDAxMDAwMDAwIHdpbGwgc2V0IHRoZSA2IGJpdCB0byAxLlxuICAgICAgYnVmZmVyWzZdICY9IDB4NGY7IC8vYnVmZmVyWzZdICYgMDEwMDExMTEgd2lsbCBzZXQgdGhlIDQsIDUsIGFuZCA3IGJpdCB0byAwIHN1Y2ggdGhhdCBiaXRzIDQtNyA9PSAwMTAwID0gXCI0XCIuXG5cbiAgICAgIC8vYnVmZmVyWzhdIHJlcHJlc2VudHMgdGhlIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgZmllbGQuIFdlIHdpbGwgc2V0IHRoZSB0d28gbW9zdCBzaWduaWZpY2FudCBiaXRzICg2IGFuZCA3KSBvZiB0aGUgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZCB0byB6ZXJvIGFuZCBvbmUsIHJlc3BlY3RpdmVseS5cbiAgICAgIGJ1ZmZlcls4XSB8PSAweDgwOyAvL2J1ZmZlcls4XSB8IDEwMDAwMDAwIHdpbGwgc2V0IHRoZSA3IGJpdCB0byAxLlxuICAgICAgYnVmZmVyWzhdICY9IDB4YmY7IC8vYnVmZmVyWzhdICYgMTAxMTExMTEgd2lsbCBzZXQgdGhlIDYgYml0IHRvIDAuXG5cbiAgICAgIHJldHVybiBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzBdKSArIFV0aWxzLmRlY2ltYWxUb0hleChidWZmZXJbMV0pXG4gICAgICAgICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsyXSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzNdKVxuICAgICAgICArIFwiLVwiICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls0XSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzVdKVxuICAgICAgICArIFwiLVwiICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls2XSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzddKVxuICAgICAgICArIFwiLVwiICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlcls4XSkgKyBVdGlscy5kZWNpbWFsVG9IZXgoYnVmZmVyWzldKVxuICAgICAgICArIFwiLVwiICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMV0pXG4gICAgICAgICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxMl0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxM10pXG4gICAgICAgICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNF0pICsgVXRpbHMuZGVjaW1hbFRvSGV4KGJ1ZmZlclsxNV0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGd1aWRIb2xkZXI6IHN0cmluZyA9IFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCI7XG4gICAgICBjb25zdCBoZXg6IHN0cmluZyA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xuICAgICAgbGV0IHI6IG51bWJlciA9IDA7XG4gICAgICBsZXQgZ3VpZFJlc3BvbnNlOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgICAgaWYgKGd1aWRIb2xkZXJbaV0gIT09IFwiLVwiICYmIGd1aWRIb2xkZXJbaV0gIT09IFwiNFwiKSB7XG4gICAgICAgICAgLy8gZWFjaCB4IGFuZCB5IG5lZWRzIHRvIGJlIHJhbmRvbVxuICAgICAgICAgIHIgPSBNYXRoLnJhbmRvbSgpICAqIDE2IHwgMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICBndWlkUmVzcG9uc2UgKz0gaGV4W3JdO1xuICAgICAgICB9IGVsc2UgaWYgKGd1aWRIb2xkZXJbaV0gPT09IFwieVwiKSB7XG4gICAgICAgICAgLy8gY2xvY2stc2VxLWFuZC1yZXNlcnZlZCBmaXJzdCBoZXggaXMgZmlsdGVyZWQgYW5kIHJlbWFpbmluZyBoZXggdmFsdWVzIGFyZSByYW5kb21cbiAgICAgICAgICByICY9IDB4MzsgLy8gYml0IGFuZCB3aXRoIDAwMTEgdG8gc2V0IHBvcyAyIHRvIHplcm8gPzA/P1xuICAgICAgICAgIHIgfD0gMHg4OyAvLyBzZXQgcG9zIDMgdG8gMSBhcyAxPz8/XG4gICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBndWlkUmVzcG9uc2UgKz0gZ3VpZEhvbGRlcltpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGd1aWRSZXNwb25zZTtcbiAgICB9XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gVGltZVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRpbWUgaW4gc2Vjb25kcyBmb3IgZXhwaXJhdGlvbiBiYXNlZCBvbiBzdHJpbmcgdmFsdWUgcGFzc2VkIGluLlxuICAgKlxuICAgKiBAcGFyYW0gZXhwaXJlc1xuICAgKi9cbiAgc3RhdGljIGV4cGlyZXNJbihleHBpcmVzOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIC8vIGlmIEFBRCBkaWQgbm90IHNlbmQgXCJleHBpcmVzX2luXCIgcHJvcGVydHksIHVzZSBkZWZhdWx0IGV4cGlyYXRpb24gb2YgMzU5OSBzZWNvbmRzLCBmb3Igc29tZSByZWFzb24gQUFEIHNlbmRzIDM1OTkgYXMgXCJleHBpcmVzX2luXCIgdmFsdWUgaW5zdGVhZCBvZiAzNjAwXG4gICAgIGlmICghZXhwaXJlcykge1xuICAgICAgICAgZXhwaXJlcyA9IFwiMzU5OVwiO1xuICAgICAgfVxuICAgIHJldHVybiB0aGlzLm5vdygpICsgcGFyc2VJbnQoZXhwaXJlcywgMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybiB0aGUgY3VycmVudCB0aW1lIGluIFVuaXggdGltZS4gRGF0ZS5nZXRUaW1lKCkgcmV0dXJucyBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBzdGF0aWMgbm93KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwLjApO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFN0cmluZyBPcHNcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBzdHJpbmcgaXMgZW1wdHlcbiAgICpcbiAgICogQHBhcmFtIHN0clxuICAgKi9cbiAgc3RhdGljIGlzRW1wdHkoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09IFwidW5kZWZpbmVkXCIgfHwgIXN0ciB8fCAwID09PSBzdHIubGVuZ3RoKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBUb2tlbiBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFRva2VuUHJvY2Vzc2luZy50cylcblxuICAvKipcbiAgICogZGVjb2RlIGEgSldUXG4gICAqXG4gICAqIEBwYXJhbSBqd3RUb2tlblxuICAgKi9cbiAgc3RhdGljIGRlY29kZUp3dChqd3RUb2tlbjogc3RyaW5nKTogYW55IHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KGp3dFRva2VuKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGlkVG9rZW5QYXJ0c1JlZ2V4ID0gL14oW15cXC5cXHNdKilcXC4oW15cXC5cXHNdKylcXC4oW15cXC5cXHNdKikkLztcbiAgICBjb25zdCBtYXRjaGVzID0gaWRUb2tlblBhcnRzUmVnZXguZXhlYyhqd3RUb2tlbik7XG4gICAgaWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoIDwgNCkge1xuICAgICAgLy90aGlzLl9yZXF1ZXN0Q29udGV4dC5sb2dnZXIud2FybihcIlRoZSByZXR1cm5lZCBpZF90b2tlbiBpcyBub3QgcGFyc2VhYmxlLlwiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjcmFja2VkVG9rZW4gPSB7XG4gICAgICBoZWFkZXI6IG1hdGNoZXNbMV0sXG4gICAgICBKV1NQYXlsb2FkOiBtYXRjaGVzWzJdLFxuICAgICAgSldTU2lnOiBtYXRjaGVzWzNdXG4gICAgfTtcbiAgICByZXR1cm4gY3JhY2tlZFRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgSWRUb2tlbiBieSBkZWNvZGluZyB0aGUgUkFXSWRUb2tlblxuICAgKlxuICAgKiBAcGFyYW0gZW5jb2RlZElkVG9rZW5cbiAgICovXG4gIHN0YXRpYyBleHRyYWN0SWRUb2tlbihlbmNvZGVkSWRUb2tlbjogc3RyaW5nKTogYW55IHtcbiAgICAvLyBpZCB0b2tlbiB3aWxsIGJlIGRlY29kZWQgdG8gZ2V0IHRoZSB1c2VybmFtZVxuICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHRoaXMuZGVjb2RlSnd0KGVuY29kZWRJZFRva2VuKTtcbiAgICBpZiAoIWRlY29kZWRUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNlNjRJZFRva2VuID0gZGVjb2RlZFRva2VuLkpXU1BheWxvYWQ7XG4gICAgICBjb25zdCBiYXNlNjREZWNvZGVkID0gdGhpcy5iYXNlNjREZWNvZGVTdHJpbmdVcmxTYWZlKGJhc2U2NElkVG9rZW4pO1xuICAgICAgaWYgKCFiYXNlNjREZWNvZGVkKSB7XG4gICAgICAgIC8vdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLmluZm8oXCJUaGUgcmV0dXJuZWQgaWRfdG9rZW4gY291bGQgbm90IGJlIGJhc2U2NCB1cmwgc2FmZSBkZWNvZGVkLlwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvLyBFQ01BIHNjcmlwdCBoYXMgSlNPTiBidWlsdC1pbiBzdXBwb3J0XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShiYXNlNjREZWNvZGVkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vdGhpcy5fcmVxdWVzdENvbnRleHQubG9nZ2VyLmVycm9yKFwiVGhlIHJldHVybmVkIGlkX3Rva2VuIGNvdWxkIG5vdCBiZSBkZWNvZGVkXCIgKyBlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIEVuY29kZSBhbmQgRGVjb2RlXG5cbiAgLyoqXG4gICAqIGVuY29kaW5nIHN0cmluZyB0byBiYXNlNjQgLSBwbGF0Zm9ybSBzcGVjaWZpYyBjaGVja1xuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRcbiAgICovXG4gIHN0YXRpYyBiYXNlNjRFbmNvZGVTdHJpbmdVcmxTYWZlKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIGh0bWw1IHNob3VsZCBzdXBwb3J0IGF0b2IgZnVuY3Rpb24gZm9yIGRlY29kaW5nXG4gICAgaWYgKHdpbmRvdy5idG9hKSB7XG4gICAgICByZXR1cm4gd2luZG93LmJ0b2EoaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVuY29kZShpbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kaW5nIGJhc2U2NCB0b2tlbiAtIHBsYXRmb3JtIHNwZWNpZmljIGNoZWNrXG4gICAqXG4gICAqIEBwYXJhbSBiYXNlNjRJZFRva2VuXG4gICAqL1xuICBzdGF0aWMgYmFzZTY0RGVjb2RlU3RyaW5nVXJsU2FmZShiYXNlNjRJZFRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIGh0bWw1IHNob3VsZCBzdXBwb3J0IGF0b2IgZnVuY3Rpb24gZm9yIGRlY29kaW5nXG4gICAgYmFzZTY0SWRUb2tlbiA9IGJhc2U2NElkVG9rZW4ucmVwbGFjZSgvLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIik7XG4gICAgaWYgKHdpbmRvdy5hdG9iKSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5hdG9iKGJhc2U2NElkVG9rZW4pKSk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQodGhpcy5kZWNvZGUoYmFzZTY0SWRUb2tlbikpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogYmFzZTY0IGVuY29kZSBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gaW5wdXRcbiAgICovXG4gIC8vIFRPRE86IFJlbmFtZSB0byBzcGVjaWZ5IHR5cGUgb2YgZW5jb2RpbmdcbiAgc3RhdGljIGVuY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBrZXlTdHI6IHN0cmluZyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICBsZXQgY2hyMTogbnVtYmVyLCBjaHIyOiBudW1iZXIsIGNocjM6IG51bWJlciwgZW5jMTogbnVtYmVyLCBlbmMyOiBudW1iZXIsIGVuYzM6IG51bWJlciwgZW5jNDogbnVtYmVyO1xuICAgIHZhciBpID0gMDtcblxuICAgIGlucHV0ID0gdGhpcy51dGY4RW5jb2RlKGlucHV0KTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICAgIGVuYzEgPSBjaHIxID4+IDI7XG4gICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcbiAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcbiAgICAgIGVuYzQgPSBjaHIzICYgNjM7XG5cbiAgICAgIGlmIChpc05hTihjaHIyKSkge1xuICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xuICAgICAgfSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xuICAgICAgICBlbmM0ID0gNjQ7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IG91dHB1dCArIGtleVN0ci5jaGFyQXQoZW5jMSkgKyBrZXlTdHIuY2hhckF0KGVuYzIpICsga2V5U3RyLmNoYXJBdChlbmMzKSArIGtleVN0ci5jaGFyQXQoZW5jNCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dC5yZXBsYWNlKC9cXCsvZywgXCItXCIpLnJlcGxhY2UoL1xcLy9nLCBcIl9cIikucmVwbGFjZSgvPSskLywgXCJcIik7XG4gIH1cblxuICAvKipcbiAgICogdXRmOCBlbmNvZGUgYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIGlucHV0XG4gICAqL1xuICBzdGF0aWMgdXRmOEVuY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKTtcbiAgICB2YXIgdXRmdGV4dCA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IGlucHV0Lmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgYyA9IGlucHV0LmNoYXJDb2RlQXQobik7XG5cbiAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1dGZ0ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSBhIGJhc2U2NCB0b2tlbiBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIGJhc2U2NElkVG9rZW5cbiAgICovXG4gIC8vIFRPRE86IFJlbmFtZSB0byBzcGVjaWZ5IHR5cGUgb2YgZW5jb2RpbmdcbiAgc3RhdGljIGRlY29kZShiYXNlNjRJZFRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBjb2RlcyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbiAgICBiYXNlNjRJZFRva2VuID0gU3RyaW5nKGJhc2U2NElkVG9rZW4pLnJlcGxhY2UoLz0rJC8sIFwiXCIpO1xuICAgIHZhciBsZW5ndGggPSBiYXNlNjRJZFRva2VuLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICUgNCA9PT0gMSkge1xuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVRva2VuRW5jb2RpbmdFcnJvcihiYXNlNjRJZFRva2VuKTtcbiAgICB9XG4gICAgbGV0IGgxOiBudW1iZXIsIGgyOiBudW1iZXIsIGgzOiBudW1iZXIsIGg0OiBudW1iZXIsIGJpdHM6IG51bWJlciwgYzE6IG51bWJlciwgYzI6IG51bWJlciwgYzM6IG51bWJlciwgZGVjb2RlZCA9IFwiXCI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gNCkge1xuICAgICAgLy9FdmVyeSA0IGJhc2U2NCBlbmNvZGVkIGNoYXJhY3RlciB3aWxsIGJlIGNvbnZlcnRlZCB0byAzIGJ5dGUgc3RyaW5nLCB3aGljaCBpcyAyNCBiaXRzXG4gICAgICAvLyB0aGVuIDYgYml0cyBwZXIgYmFzZTY0IGVuY29kZWQgY2hhcmFjdGVyXG4gICAgICBoMSA9IGNvZGVzLmluZGV4T2YoYmFzZTY0SWRUb2tlbi5jaGFyQXQoaSkpO1xuICAgICAgaDIgPSBjb2Rlcy5pbmRleE9mKGJhc2U2NElkVG9rZW4uY2hhckF0KGkgKyAxKSk7XG4gICAgICBoMyA9IGNvZGVzLmluZGV4T2YoYmFzZTY0SWRUb2tlbi5jaGFyQXQoaSArIDIpKTtcbiAgICAgIGg0ID0gY29kZXMuaW5kZXhPZihiYXNlNjRJZFRva2VuLmNoYXJBdChpICsgMykpO1xuICAgICAgLy8gRm9yIHBhZGRpbmcsIGlmIGxhc3QgdHdvIGFyZSBcIj1cIlxuICAgICAgaWYgKGkgKyAyID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyIHwgaDMgPDwgNjtcbiAgICAgICAgYzEgPSBiaXRzID4+IDE2ICYgMjU1O1xuICAgICAgICBjMiA9IGJpdHMgPj4gOCAmIDI1NTtcbiAgICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxLCBjMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gaWYgbGFzdCBvbmUgaXMgXCI9XCJcbiAgICAgIGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgIGJpdHMgPSBoMSA8PCAxOCB8IGgyIDw8IDEyO1xuICAgICAgICBjMSA9IGJpdHMgPj4gMTYgJiAyNTU7XG4gICAgICAgIGRlY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYml0cyA9IGgxIDw8IDE4IHwgaDIgPDwgMTIgfCBoMyA8PCA2IHwgaDQ7XG4gICAgICAvLyB0aGVuIGNvbnZlcnQgdG8gMyBieXRlIGNoYXJzXG4gICAgICBjMSA9IGJpdHMgPj4gMTYgJiAyNTU7XG4gICAgICBjMiA9IGJpdHMgPj4gOCAmIDI1NTtcbiAgICAgIGMzID0gYml0cyAmIDI1NTtcbiAgICAgIGRlY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSwgYzIsIGMzKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlY29kZWQ7XG4gIH1cblxuICAvKipcbiAgICogZGVzZXJpYWxpemUgYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqL1xuICBzdGF0aWMgZGVzZXJpYWxpemUocXVlcnk6IHN0cmluZyk6IGFueSB7XG4gICAgbGV0IG1hdGNoOiBBcnJheTxzdHJpbmc+OyAvLyBSZWdleCBmb3IgcmVwbGFjaW5nIGFkZGl0aW9uIHN5bWJvbCB3aXRoIGEgc3BhY2VcbiAgICBjb25zdCBwbCA9IC9cXCsvZztcbiAgICBjb25zdCBzZWFyY2ggPSAvKFteJj1dKyk9KFteJl0qKS9nO1xuICAgIGNvbnN0IGRlY29kZSA9IChzOiBzdHJpbmcpID0+IGRlY29kZVVSSUNvbXBvbmVudChzLnJlcGxhY2UocGwsIFwiIFwiKSk7XG4gICAgY29uc3Qgb2JqOiB7fSA9IHt9O1xuICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xuICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgb2JqW2RlY29kZShtYXRjaFsxXSldID0gZGVjb2RlKG1hdGNoWzJdKTtcbiAgICAgIG1hdGNoID0gc2VhcmNoLmV4ZWMocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFNjb3BlcyAoZXh0cmFjdCB0byBTY29wZXMudHMpXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZXJlIGFyZSBkdXAgc2NvcGVzIGluIGEgZ2l2ZW4gcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0gY2FjaGVkU2NvcGVzXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIC8vIFRPRE86IFJlbmFtZSB0aGlzLCBpbnRlcnNlY3Rpbmcgc2NvcGVzIGlzbid0IGEgZ3JlYXQgbmFtZSBmb3IgZHVwbGljYXRlIGNoZWNrZXJcbiAgc3RhdGljIGlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlczogQXJyYXk8c3RyaW5nPiwgc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XG4gICAgY2FjaGVkU2NvcGVzID0gdGhpcy5jb252ZXJ0VG9Mb3dlckNhc2UoY2FjaGVkU2NvcGVzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjb3Blcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2FjaGVkU2NvcGVzLmluZGV4T2Yoc2NvcGVzW2ldLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGdpdmVuIHNjb3BlIGlzIHByZXNlbnQgaW4gdGhlIHJlcXVlc3RcbiAgICpcbiAgICogQHBhcmFtIGNhY2hlZFNjb3Blc1xuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICBzdGF0aWMgY29udGFpbnNTY29wZShjYWNoZWRTY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlczogQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuICAgIGNhY2hlZFNjb3BlcyA9IHRoaXMuY29udmVydFRvTG93ZXJDYXNlKGNhY2hlZFNjb3Blcyk7XG4gICAgcmV0dXJuIHNjb3Blcy5ldmVyeSgodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gY2FjaGVkU2NvcGVzLmluZGV4T2YodmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSA+PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b0xvd2VyXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIC8vIFRPRE86IFJlbmFtZSB0aGlzLCB0b28gZ2VuZXJpYyBuYW1lIGZvciBhIGZ1bmN0aW9uIHRoYXQgb25seSBkZWFscyB3aXRoIHNjb3Blc1xuICBzdGF0aWMgY29udmVydFRvTG93ZXJDYXNlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBzY29wZXMubWFwKHNjb3BlID0+IHNjb3BlLnRvTG93ZXJDYXNlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbW92ZSBvbmUgZWxlbWVudCBmcm9tIGEgc2NvcGUgYXJyYXlcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKiBAcGFyYW0gc2NvcGVcbiAgICovXG4gIC8vIFRPRE86IFJlbmFtZSB0aGlzLCB0b28gZ2VuZXJpYyBuYW1lIGZvciBhIGZ1bmN0aW9uIHRoYXQgb25seSBkZWFscyB3aXRoIHNjb3Blc1xuICBzdGF0aWMgcmVtb3ZlRWxlbWVudChzY29wZXM6IEFycmF5PHN0cmluZz4sIHNjb3BlOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gc2NvcGVzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gc2NvcGUpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFVSTCBQcm9jZXNzaW5nIChFeHRyYWN0IHRvIFVybFByb2Nlc3NpbmcudHM/KVxuXG4gIHN0YXRpYyBnZXREZWZhdWx0UmVkaXJlY3RVcmkoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIj9cIilbMF0uc3BsaXQoXCIjXCIpWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgdXJsIGxpa2UgaHR0cHM6Ly9hOmIvY29tbW9uL2Q/ZT1mI2csIGFuZCBhIHRlbmFudElkLCByZXR1cm5zIGh0dHBzOi8vYTpiL3RlbmFudElkL2RcbiAgICogQHBhcmFtIGhyZWYgVGhlIHVybFxuICAgKiBAcGFyYW0gdGVuYW50SWQgVGhlIHRlbmFudCBpZCB0byByZXBsYWNlXG4gICAqL1xuICBzdGF0aWMgcmVwbGFjZVRlbmFudFBhdGgodXJsOiBzdHJpbmcsIHRlbmFudElkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgdXJsID0gdXJsLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgdXJsT2JqZWN0ID0gdGhpcy5HZXRVcmxDb21wb25lbnRzKHVybCk7XG4gICAgICB2YXIgcGF0aEFycmF5ID0gdXJsT2JqZWN0LlBhdGhTZWdtZW50cztcbiAgICAgIGlmICh0ZW5hbnRJZCAmJiAocGF0aEFycmF5Lmxlbmd0aCAhPT0gMCAmJiAocGF0aEFycmF5WzBdID09PSBDb25zdGFudHMuY29tbW9uIHx8IHBhdGhBcnJheVswXSA9PT0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUykpKSB7XG4gICAgICAgIHBhdGhBcnJheVswXSA9IHRlbmFudElkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3QsIHBhdGhBcnJheSk7XG4gIH1cblxuICBzdGF0aWMgY29uc3RydWN0QXV0aG9yaXR5VXJpRnJvbU9iamVjdCh1cmxPYmplY3Q6IElVcmksIHBhdGhBcnJheTogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxpemVVcmkodXJsT2JqZWN0LlByb3RvY29sICsgXCIvL1wiICsgdXJsT2JqZWN0Lkhvc3ROYW1lQW5kUG9ydCArIFwiL1wiICsgcGF0aEFycmF5LmpvaW4oXCIvXCIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgb3V0IHRoZSBjb21wb25lbnRzIGZyb20gYSB1cmwgc3RyaW5nLlxuICAgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgdmFyaW91cyBjb21wb25lbnRzLiBQbGVhc2UgY2FjaGUgdGhpcyB2YWx1ZSBpbnN0ZWQgb2YgY2FsbGluZyB0aGlzIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHVybC5cbiAgICovXG4gIHN0YXRpYyBHZXRVcmxDb21wb25lbnRzKHVybDogc3RyaW5nKTogSVVyaSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHRocm93IFwiVXJsIHJlcXVpcmVkXCI7XG4gICAgfVxuXG4gICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vY3VydGlzei8xMTEzOWIyY2ZjYWVmNGEyNjFlMFxuICAgIHZhciByZWdFeCA9IFJlZ0V4cChcIl4oKFteOi8/I10rKTopPygvLyhbXi8/I10qKSk/KFtePyNdKikoXFxcXD8oW14jXSopKT8oIyguKikpP1wiKTtcblxuICAgIHZhciBtYXRjaCA9IHVybC5tYXRjaChyZWdFeCk7XG5cbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmxlbmd0aCA8IDYpIHtcbiAgICAgIHRocm93IFwiVmFsaWQgdXJsIHJlcXVpcmVkXCI7XG4gICAgfVxuXG4gICAgbGV0IHVybENvbXBvbmVudHMgPSA8SVVyaT57XG4gICAgICBQcm90b2NvbDogbWF0Y2hbMV0sXG4gICAgICBIb3N0TmFtZUFuZFBvcnQ6IG1hdGNoWzRdLFxuICAgICAgQWJzb2x1dGVQYXRoOiBtYXRjaFs1XVxuICAgIH07XG5cbiAgICBsZXQgcGF0aFNlZ21lbnRzID0gdXJsQ29tcG9uZW50cy5BYnNvbHV0ZVBhdGguc3BsaXQoXCIvXCIpO1xuICAgIHBhdGhTZWdtZW50cyA9IHBhdGhTZWdtZW50cy5maWx0ZXIoKHZhbCkgPT4gdmFsICYmIHZhbC5sZW5ndGggPiAwKTsgLy8gcmVtb3ZlIGVtcHR5IGVsZW1lbnRzXG4gICAgdXJsQ29tcG9uZW50cy5QYXRoU2VnbWVudHMgPSBwYXRoU2VnbWVudHM7XG4gICAgcmV0dXJuIHVybENvbXBvbmVudHM7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSB1cmwgb3IgcGF0aCwgYXBwZW5kIGEgdHJhaWxpbmcgc2xhc2ggaWYgb25lIGRvZXNudCBleGlzdFxuICAgKlxuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBzdGF0aWMgQ2Fub25pY2FsaXplVXJpKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodXJsKSB7XG4gICAgICB1cmwgPSB1cmwudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodXJsICYmICFVdGlscy5lbmRzV2l0aCh1cmwsIFwiL1wiKSkge1xuICAgICAgdXJsICs9IFwiL1wiO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgdXJsIGVuZHMgd2l0aCB0aGUgc3VmZml4XG4gICAqIFJlcXVpcmVkIGJlY2F1c2Ugd2UgYXJlIGNvbXBpbGluZyBmb3IgZXM1IGluc3RlYWQgb2YgZXM2XG4gICAqIEBwYXJhbSB1cmxcbiAgICogQHBhcmFtIHN0clxuICAgKi9cbiAgLy8gVE9ETzogUmVuYW1lIHRoaXMsIG5vdCBjbGVhciB3aGF0IGl0IGlzIHN1cHBvc2VkIHRvIGRvXG4gIHN0YXRpYyBlbmRzV2l0aCh1cmw6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXVybCB8fCAhc3VmZml4KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybC5pbmRleE9mKHN1ZmZpeCwgdXJsLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlscyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxvZ2luX2hpbnQgYW5kIGRvbWFpbl9oaW50IGZyb20gdGhlIGkvcCBleHRyYVF1ZXJ5UGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gdXJsXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqL1xuICBzdGF0aWMgdXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIodXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSh1cmwpKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCIoXFxcXCZcIiArIG5hbWUgKyBcIj0pW15cXCZdK1wiKTtcbiAgICB1cmwgPSB1cmwucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgLy8gbmFtZT12YWx1ZSZcbiAgICByZWdleCA9IG5ldyBSZWdFeHAoXCIoXCIgKyBuYW1lICsgXCI9KVteXFwmXSsmXCIpO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcbiAgICAvLyBuYW1lPXZhbHVlXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiKFwiICsgbmFtZSArIFwiPSlbXlxcJl0rXCIpO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIEV4dHJhUXVlcnlQYXJhbWV0ZXJzIFByb2Nlc3NpbmcgKEV4dHJhY3Q/KVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlciBmb3IgdGhlIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgKiBpbiBhbnkgbG9naW4oKSBvciBhY3F1aXJlVG9rZW4oKSBjYWxsc1xuICAgKiBAcGFyYW0gaWRUb2tlbk9iamVjdFxuICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHNpZFxuICAgKiBAcGFyYW0gbG9naW5IaW50XG4gICAqL1xuICAvL1RPRE86IGNoZWNrIGhvdyB0aGlzIGJlaGF2ZXMgd2hlbiBkb21haW5faGludCBvbmx5IGlzIHNlbnQgaW4gZXh0cmFwYXJhbWV0ZXJzIGFuZCBpZFRva2VuIGhhcyBubyB1cG4uXG4gIHN0YXRpYyBjb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIGlkVG9rZW5PYmplY3Q6IGFueSk6IFFQRGljdCB7XG5cbiAgICAvLyBwcmVmZXJlbmNlIG9yZGVyOiBhY2NvdW50ID4gc2lkID4gbG9naW5faGludFxuICAgIGxldCBzc29UeXBlO1xuICAgIGxldCBzc29EYXRhO1xuICAgIGxldCBzZXJ2ZXJSZXFQYXJhbTogUVBEaWN0ID0ge307XG4gICAgLy8gaWYgYWNjb3VudCBpbmZvIGlzIHBhc3NlZCwgYWNjb3VudC5zaWQgPiBhY2NvdW50LmxvZ2luX2hpbnRcbiAgICBpZiAocmVxdWVzdCkge1xuICAgICAgaWYgKHJlcXVlc3QuYWNjb3VudCkge1xuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50O1xuICAgICAgICBpZiAoYWNjb3VudC5zaWQpIHtcbiAgICAgICAgICBzc29UeXBlID0gU1NPVHlwZXMuU0lEO1xuICAgICAgICAgIHNzb0RhdGEgPSBhY2NvdW50LnNpZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY2NvdW50LnVzZXJOYW1lKSB7XG4gICAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLkxPR0lOX0hJTlQ7XG4gICAgICAgICAgc3NvRGF0YSA9IGFjY291bnQudXNlck5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHNpZCBmcm9tIHJlcXVlc3RcbiAgICAgIGVsc2UgaWYgKHJlcXVlc3Quc2lkKSB7XG4gICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5TSUQ7XG4gICAgICAgIHNzb0RhdGEgPSByZXF1ZXN0LnNpZDtcbiAgICAgIH1cbiAgICAgIC8vIGxvZ2luSGludCBmcm9tIHJlcXVlc3RcbiAgICAgIGVsc2UgaWYgKHJlcXVlc3QubG9naW5IaW50KSB7XG4gICAgICAgIHNzb1R5cGUgPSBTU09UeXBlcy5MT0dJTl9ISU5UO1xuICAgICAgICBzc29EYXRhID0gcmVxdWVzdC5sb2dpbkhpbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGFkYWxJZFRva2VuIHJldHJpZXZlZCBmcm9tIGNhY2hlXG4gICAgZWxzZSBpZiAoaWRUb2tlbk9iamVjdCkge1xuICAgICAgaWYgKGlkVG9rZW5PYmplY3QuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLnVwbikpIHtcbiAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLklEX1RPS0VOO1xuICAgICAgICBzc29EYXRhID0gaWRUb2tlbk9iamVjdC51cG47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3NvVHlwZSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XG4gICAgICAgIHNzb0RhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoc3NvVHlwZSwgc3NvRGF0YSk7XG5cbiAgICAvLyBhZGQgdGhlIEhvbWVBY2NvdW50SWRlbnRpZmllciBpbmZvLyBkb21haW5faGludFxuICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QuYWNjb3VudCAmJiByZXF1ZXN0LmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XG4gICAgICAgIHNlcnZlclJlcVBhcmFtID0gdGhpcy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuSE9NRUFDQ09VTlRfSUQsIHJlcXVlc3QuYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIsIHNlcnZlclJlcVBhcmFtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VydmVyUmVxUGFyYW07XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBZGQgU0lEIHRvIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBzaWRcbiAgICovXG4gIHN0YXRpYyBhZGRTU09QYXJhbWV0ZXIoc3NvVHlwZTogc3RyaW5nLCBzc29EYXRhOiBzdHJpbmcsIHNzb1BhcmFtPzogUVBEaWN0KTogUVBEaWN0IHtcbiAgICBpZiAoIXNzb1BhcmFtKSB7XG4gICAgICBzc29QYXJhbSA9IHt9O1xuICAgIH1cblxuICAgIGlmICghc3NvRGF0YSkge1xuICAgICAgICByZXR1cm4gc3NvUGFyYW07XG4gICAgfVxuXG4gICAgc3dpdGNoIChzc29UeXBlKSB7XG4gICAgICBjYXNlIFNTT1R5cGVzLlNJRDoge1xuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5TSURdID0gc3NvRGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNTT1R5cGVzLklEX1RPS0VOOiB7XG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX0hJTlRdID0gc3NvRGF0YTtcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX0hJTlRdID0gU1NPVHlwZXMuT1JHQU5JWkFUSU9OUztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX0hJTlQ6IHtcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuTE9HSU5fSElOVF0gPSBzc29EYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgU1NPVHlwZXMuT1JHQU5JWkFUSU9OUzoge1xuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5ET01BSU5fSElOVF0gPSBTU09UeXBlcy5PUkdBTklaQVRJT05TO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgU1NPVHlwZXMuQ09OU1VNRVJTOiB7XG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLkNPTlNVTUVSUztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNTT1R5cGVzLkhPTUVBQ0NPVU5UX0lEOiB7XG4gICAgICAgIGxldCBob21lQWNjb3VudElkID0gc3NvRGF0YS5zcGxpdChcIi5cIik7XG4gICAgICAgIGNvbnN0IHVpZCA9IFV0aWxzLmJhc2U2NERlY29kZVN0cmluZ1VybFNhZmUoaG9tZUFjY291bnRJZFswXSk7XG4gICAgICAgIGNvbnN0IHV0aWQgPSBVdGlscy5iYXNlNjREZWNvZGVTdHJpbmdVcmxTYWZlKGhvbWVBY2NvdW50SWRbMV0pO1xuXG4gICAgICAgIC8vIFRPRE86IGRvbWFpbl9yZXEgYW5kIGxvZ2luX3JlcSBhcmUgbm90IG5lZWRlZCBhY2NvcmRpbmcgdG8gZVNUUyB0ZWFtXG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkxPR0lOX1JFUV0gPSB1aWQ7XG4gICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9SRVFdID0gdXRpZDtcblxuICAgICAgICBpZiAodXRpZCA9PT0gQ29uc3RhbnRzLmNvbnN1bWVyc1V0aWQpIHtcbiAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLkNPTlNVTUVSUztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNzb1BhcmFtW1NTT1R5cGVzLkRPTUFJTl9ISU5UXSA9IFNTT1R5cGVzLk9SR0FOSVpBVElPTlM7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNTT1R5cGVzLkxPR0lOX1JFUToge1xuICAgICAgICBzc29QYXJhbVtTU09UeXBlcy5MT0dJTl9SRVFdID0gc3NvRGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFNTT1R5cGVzLkRPTUFJTl9SRVE6IHtcbiAgICAgICAgc3NvUGFyYW1bU1NPVHlwZXMuRE9NQUlOX1JFUV0gPSBzc29EYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3NvUGFyYW07XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSB0byBnZW5lcmF0ZSBhIFF1ZXJ5UGFyYW1ldGVyU3RyaW5nIGZyb20gYSBLZXktVmFsdWUgbWFwcGluZyBvZiBleHRyYVF1ZXJ5UGFyYW1ldGVycyBwYXNzZWRcbiAgICogQHBhcmFtIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAqL1xuICBzdGF0aWMgZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcocXVlcnlQYXJhbWV0ZXJzOiBRUERpY3QpOiBzdHJpbmcge1xuICAgIGxldCBwYXJhbXNTdHJpbmc6IHN0cmluZyA9IG51bGw7XG5cbiAgICBpZiAocXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICBPYmplY3Qua2V5cyhxdWVyeVBhcmFtZXRlcnMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXNTdHJpbmcgPT0gbnVsbCkge1xuICAgICAgICAgIHBhcmFtc1N0cmluZyA9IGAke2tleX09JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnlQYXJhbWV0ZXJzW2tleV0pfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcGFyYW1zU3RyaW5nICs9IGAmJHtrZXl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5UGFyYW1ldGVyc1trZXldKX1gO1xuICAgICAgICB9XG4gICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXNTdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBTU08gcGFyYW1zIHNldCBpbiB0aGUgUmVxdWVzdFxuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKi9cbiAgc3RhdGljIGlzU1NPUGFyYW0ocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdCAmJiAocmVxdWVzdC5hY2NvdW50IHx8IHJlcXVlc3Quc2lkIHx8IHJlcXVlc3QubG9naW5IaW50KTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBSZXNwb25zZSBIZWxwZXJzXG5cbiAgc3RhdGljIHNldFJlc3BvbnNlSWRUb2tlbihvcmlnaW5hbFJlc3BvbnNlOiBBdXRoUmVzcG9uc2UsIGlkVG9rZW46IElkVG9rZW4pIDogQXV0aFJlc3BvbnNlIHtcbiAgICB2YXIgcmVzcG9uc2UgPSB7IC4uLm9yaWdpbmFsUmVzcG9uc2UgfTtcbiAgICByZXNwb25zZS5pZFRva2VuID0gaWRUb2tlbjtcbiAgICBpZiAocmVzcG9uc2UuaWRUb2tlbi5vYmplY3RJZCkge1xuICAgICAgcmVzcG9uc2UudW5pcXVlSWQgPSByZXNwb25zZS5pZFRva2VuLm9iamVjdElkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNwb25zZS51bmlxdWVJZCA9IHJlc3BvbnNlLmlkVG9rZW4uc3ViamVjdDtcbiAgICB9XG4gICAgcmVzcG9uc2UudGVuYW50SWQgPSByZXNwb25zZS5pZFRva2VuLnRlbmFudElkO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENhY2hlTG9jYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XG5cbi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XG4gIHN0YXRpYyBnZXQgZXJyb3JEZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gXCJlcnJvcl9kZXNjcmlwdGlvblwiOyB9XG4gIHN0YXRpYyBnZXQgZXJyb3IoKTogc3RyaW5nIHsgcmV0dXJuIFwiZXJyb3JcIjsgfVxuXG4gIHN0YXRpYyBnZXQgc2NvcGUoKTogc3RyaW5nIHsgcmV0dXJuIFwic2NvcGVcIjsgfVxuICBzdGF0aWMgZ2V0IGNsaWVudEluZm8oKTogc3RyaW5nIHsgcmV0dXJuIFwiY2xpZW50X2luZm9cIjsgfVxuICBzdGF0aWMgZ2V0IGNsaWVudElkKCk6IHN0cmluZyB7IHJldHVybiBcImNsaWVudElkXCI7IH1cblxuICBzdGF0aWMgZ2V0IGlkVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiaWRfdG9rZW5cIjsgfVxuICBzdGF0aWMgZ2V0IGFkYWxJZFRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcImFkYWwuaWR0b2tlblwiOyB9XG4gIHN0YXRpYyBnZXQgYWNjZXNzVG9rZW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiYWNjZXNzX3Rva2VuXCI7IH1cbiAgc3RhdGljIGdldCBleHBpcmVzSW4oKTogc3RyaW5nIHsgcmV0dXJuIFwiZXhwaXJlc19pblwiOyB9XG4gIHN0YXRpYyBnZXQgc2Vzc2lvblN0YXRlKCk6IHN0cmluZyB7IHJldHVybiBcInNlc3Npb25fc3RhdGVcIjsgfVxuICBzdGF0aWMgZ2V0IGNsYWltcygpOiBzdHJpbmcgeyByZXR1cm4gXCJjbGFpbXNcIjsgfVxuXG4gIHN0YXRpYyBnZXQgbXNhbENsaWVudEluZm8oKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5jbGllbnQuaW5mb1wiOyB9XG4gIHN0YXRpYyBnZXQgbXNhbEVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuZXJyb3JcIjsgfVxuICBzdGF0aWMgZ2V0IG1zYWxFcnJvckRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuZXJyb3IuZGVzY3JpcHRpb25cIjsgfVxuXG4gIHN0YXRpYyBnZXQgbXNhbFNlc3Npb25TdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnNlc3Npb24uc3RhdGVcIjsgfVxuICBzdGF0aWMgZ2V0IHRva2VuS2V5cygpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLnRva2VuLmtleXNcIjsgfVxuICBzdGF0aWMgZ2V0IGFjY2Vzc1Rva2VuS2V5KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuYWNjZXNzLnRva2VuLmtleVwiOyB9XG4gIHN0YXRpYyBnZXQgZXhwaXJhdGlvbktleSgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmV4cGlyYXRpb24ua2V5XCI7IH1cbiAgc3RhdGljIGdldCBzdGF0ZUxvZ2luKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUubG9naW5cIjsgfVxuICBzdGF0aWMgZ2V0IHN0YXRlQWNxdWlyZVRva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUuYWNxdWlyZVRva2VuXCI7IH1cbiAgc3RhdGljIGdldCBzdGF0ZVJlbmV3KCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwuc3RhdGUucmVuZXdcIjsgfVxuICBzdGF0aWMgZ2V0IG5vbmNlSWRUb2tlbigpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLm5vbmNlLmlkdG9rZW5cIjsgfVxuICBzdGF0aWMgZ2V0IHVzZXJOYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudXNlcm5hbWVcIjsgfVxuICBzdGF0aWMgZ2V0IGlkVG9rZW5LZXkoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5pZHRva2VuXCI7IH1cbiAgc3RhdGljIGdldCBsb2dpblJlcXVlc3QoKTogc3RyaW5nIHsgcmV0dXJuIFwibXNhbC5sb2dpbi5yZXF1ZXN0XCI7IH1cbiAgc3RhdGljIGdldCBsb2dpbkVycm9yKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwubG9naW4uZXJyb3JcIjsgfVxuICBzdGF0aWMgZ2V0IHJlbmV3U3RhdHVzKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudG9rZW4ucmVuZXcuc3RhdHVzXCI7IH1cbiAgc3RhdGljIGdldCB1cmxIYXNoKCk6IHN0cmluZyB7IHJldHVybiBcIm1zYWwudXJsSGFzaFwiOyB9XG4gIHN0YXRpYyBnZXQgYW5ndWxhckxvZ2luUmVxdWVzdCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsLmFuZ3VsYXIubG9naW4ucmVxdWVzdFwiOyB9XG4gIHN0YXRpYyBnZXQgbXNhbCgpOiBzdHJpbmcgeyByZXR1cm4gXCJtc2FsXCI7IH1cblxuICBzdGF0aWMgZ2V0IG5vX2FjY291bnQoKTogc3RyaW5nIHsgcmV0dXJuIFwiTk9fQUNDT1VOVFwiOyB9XG4gIHN0YXRpYyBnZXQgY29uc3VtZXJzVXRpZCgpOiBzdHJpbmcgeyByZXR1cm4gXCI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWRcIjsgfVxuICBzdGF0aWMgZ2V0IHVwbigpOiBzdHJpbmcgeyByZXR1cm4gXCJ1cG5cIjsgfVxuXG4gIHN0YXRpYyBnZXQgcHJvbXB0X3NlbGVjdF9hY2NvdW50KCk6IHN0cmluZyB7IHJldHVybiBcIiZwcm9tcHQ9c2VsZWN0X2FjY291bnRcIjsgfVxuICBzdGF0aWMgZ2V0IHByb21wdF9ub25lKCk6IHN0cmluZyB7IHJldHVybiBcIiZwcm9tcHQ9bm9uZVwiOyB9XG4gIHN0YXRpYyBnZXQgcHJvbXB0KCk6IHN0cmluZyB7IHJldHVybiBcInByb21wdFwiOyB9XG5cbiAgc3RhdGljIGdldCByZXNwb25zZV9tb2RlX2ZyYWdtZW50KCk6IHN0cmluZyB7IHJldHVybiBcIiZyZXNwb25zZV9tb2RlPWZyYWdtZW50XCI7IH1cbiAgc3RhdGljIGdldCByZXNvdXJjZURlbGltaXRlcigpOiBzdHJpbmcgeyByZXR1cm4gXCJ8XCI7IH1cblxuICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNDYW5jZWxsZWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ2FuY2VsZWRcIjsgfVxuICBzdGF0aWMgZ2V0IHRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQoKTogc3RyaW5nIHsgcmV0dXJuIFwiQ29tcGxldGVkXCI7IH1cbiAgc3RhdGljIGdldCB0b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcygpOiBzdHJpbmcgeyByZXR1cm4gXCJJbiBQcm9ncmVzc1wiOyB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX3BvcFVwV2lkdGg6IG51bWJlciA9IDQ4MztcbiAgc3RhdGljIGdldCBwb3BVcFdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9wb3BVcFdpZHRoOyB9XG4gIHN0YXRpYyBzZXQgcG9wVXBXaWR0aCh3aWR0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9wVXBXaWR0aCA9IHdpZHRoO1xuICB9XG4gIHByaXZhdGUgc3RhdGljIF9wb3BVcEhlaWdodDogbnVtYmVyID0gNjAwO1xuICBzdGF0aWMgZ2V0IHBvcFVwSGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9wb3BVcEhlaWdodDsgfVxuICBzdGF0aWMgc2V0IHBvcFVwSGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcG9wVXBIZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGxvZ2luKCk6IHN0cmluZyB7IHJldHVybiBcIkxPR0lOXCI7IH1cbiAgc3RhdGljIGdldCByZW5ld1Rva2VuKCk6IHN0cmluZyB7IHJldHVybiBcIlJFTkVXX1RPS0VOXCI7IH1cbiAgc3RhdGljIGdldCB1bmtub3duKCk6IHN0cmluZyB7IHJldHVybiBcIlVOS05PV05cIjsgfVxuXG4gIHN0YXRpYyBnZXQgaG9tZUFjY291bnRJZGVudGlmaWVyKCk6IHN0cmluZyB7IHJldHVybiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiOyB9XG5cbiAgc3RhdGljIGdldCBjb21tb24oKTogc3RyaW5nIHsgcmV0dXJuIFwiY29tbW9uXCI7IH1cbiAgc3RhdGljIGdldCBvcGVuaWRTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJvcGVuaWRcIjsgfVxuICBzdGF0aWMgZ2V0IHByb2ZpbGVTY29wZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9maWxlXCI7IH1cblxuICBzdGF0aWMgZ2V0IGNhY2hlTG9jYXRpb25Mb2NhbCgpOiBDYWNoZUxvY2F0aW9uIHsgcmV0dXJuIFwibG9jYWxTdG9yYWdlXCI7IH1cbiAgc3RhdGljIGdldCBjYWNoZUxvY2F0aW9uU2Vzc2lvbigpOiBDYWNoZUxvY2F0aW9uIHsgcmV0dXJuIFwic2Vzc2lvblN0b3JhZ2VcIjsgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IENhY2hlS2V5cyA9IHtcbiAgICBBVVRIT1JJVFk6IFwibXNhbF9hdXRob3JpdHlcIixcbiAgICBBQ1FVSVJFX1RPS0VOX0FDQ09VTlQ6IFwibXNhbC5hY3F1aXJlVG9rZW5BY2NvdW50XCJcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgU1NPVHlwZXMgPSB7XG4gICAgQUNDT1VOVDogXCJhY2NvdW50XCIsXG4gICAgU0lEOiBcInNpZFwiLFxuICAgIExPR0lOX0hJTlQ6IFwibG9naW5faGludFwiLFxuICAgIElEX1RPS0VOOiBcImlkX3Rva2VuXCIsXG4gICAgRE9NQUlOX0hJTlQ6IFwiZG9tYWluX2hpbnRcIixcbiAgICBPUkdBTklaQVRJT05TOiBcIm9yZ2FuaXphdGlvbnNcIixcbiAgICBDT05TVU1FUlM6IFwiY29uc3VtZXJzXCIsXG4gICAgQUNDT1VOVF9JRDogXCJhY2NvdW50SWRlbnRpZmllclwiLFxuICAgIEhPTUVBQ0NPVU5UX0lEOiBcImhvbWVBY2NvdW50SWRlbnRpZmllclwiLFxuICAgIExPR0lOX1JFUTogXCJsb2dpbl9yZXFcIixcbiAgICBET01BSU5fUkVROiBcImRvbWFpbl9yZXFcIlxufTtcblxuLyoqXG4gKiB3ZSBjb25zaWRlcmVkIG1ha2luZyB0aGlzIFwiZW51bVwiIGluIHRoZSByZXF1ZXN0IGluc3RlYWQgb2Ygc3RyaW5nLCBob3dldmVyIGl0IGxvb2tzIGxpa2UgdGhlIGFsbG93ZWQgbGlzdCBvZlxuICogcHJvbXB0IHZhbHVlcyBrZXB0IGNoYW5naW5nIG92ZXIgcGFzdCBjb3VwbGUgb2YgeWVhcnMuIFRoZXJlIGFyZSBzb21lIHVuZG9jdW1lbnRlZCBwcm9tcHQgdmFsdWVzIGZvciBzb21lXG4gKiBpbnRlcm5hbCBwYXJ0bmVycyB0b28sIGhlbmNlIHRoZSBjaG9pY2Ugb2YgZ2VuZXJpYyBcInN0cmluZ1wiIHR5cGUgaW5zdGVhZCBvZiB0aGUgXCJlbnVtXCJcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IFByb21wdFN0YXRlID0ge1xuXHRMT0dJTjogXCJsb2dpblwiLFxuXHRTRUxFQ1RfQUNDT1VOVDogXCJzZWxlY3RfYWNjb3VudFwiLFxuXHRDT05TRU5UOiBcImNvbnNlbnRcIixcblx0Tk9ORTogXCJub25lXCIsXG59O1xuXG5leHBvcnQgY29uc3QgTGlicmFyeSA9IHtcbiAgdmVyc2lvbjogXCIxLjAuMC1wcmV2aWV3LjRcIlxufTtcbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9DbGllbnRBdXRoRXJyb3JcIjtcblxuZXhwb3J0IGNvbnN0IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgPSB7XG4gICAgY29uZmlndXJhdGlvbk5vdFNldDoge1xuICAgICAgICBjb2RlOiBcIm5vX2NvbmZpZ19zZXRcIixcbiAgICAgICAgZGVzYzogXCJDb25maWd1cmF0aW9uIGhhcyBub3QgYmVlbiBzZXQuIFBsZWFzZSBjYWxsIHRoZSBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjb25zdHJ1Y3RvciB3aXRoIGEgdmFsaWQgQ29uZmlndXJhdGlvbiBvYmplY3QuXCJcbiAgICB9LFxuICAgIGludmFsaWRDYWNoZUxvY2F0aW9uOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9jYWNoZV9sb2NhdGlvblwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBjYWNoZSBsb2NhdGlvbiBwcm92aWRlZCBpcyBub3QgdmFsaWQuXCJcbiAgICB9LFxuICAgIG5vU3RvcmFnZVN1cHBvcnRlZDoge1xuICAgICAgICBjb2RlOiBcImJyb3dzZXJfc3RvcmFnZV9ub3Rfc3VwcG9ydGVkXCIsXG4gICAgICAgIGRlc2M6IFwibG9jYWxTdG9yYWdlIGFuZCBzZXNzaW9uU3RvcmFnZSBhcmUgbm90IHN1cHBvcnRlZC5cIlxuICAgIH0sXG4gICAgbm9SZWRpcmVjdENhbGxiYWNrc1NldDoge1xuICAgICAgICBjb2RlOiBcIm5vX3JlZGlyZWN0X2NhbGxiYWNrc1wiLFxuICAgICAgICBkZXNjOiBcIk5vIHJlZGlyZWN0IGNhbGxiYWNrcyBoYXZlIGJlZW4gc2V0LiBQbGVhc2UgY2FsbCBzZXRSZWRpcmVjdENhbGxiYWNrcygpIHdpdGggdGhlIGFwcHJvcHJpYXRlIGZ1bmN0aW9uIGFyZ3VtZW50cyBiZWZvcmUgY29udGludWluZy4gXCIgK1xuICAgICAgICAgICAgXCJNb3JlIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9taWNyb3NvZnQtYXV0aGVudGljYXRpb24tbGlicmFyeS1mb3ItanMvd2lraS8tYmFzaWNzLlwiXG4gICAgfSxcbiAgICBpbnZhbGlkQ2FsbGJhY2tPYmplY3Q6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2NhbGxiYWNrX29iamVjdFwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBvYmplY3QgcGFzc2VkIGZvciB0aGUgY2FsbGJhY2sgd2FzIGludmFsaWQuIFwiICtcbiAgICAgICAgICBcIk1vcmUgaW5mb3JtYXRpb24gaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9BenVyZUFEL21pY3Jvc29mdC1hdXRoZW50aWNhdGlvbi1saWJyYXJ5LWZvci1qcy93aWtpLy1iYXNpY3MuXCJcbiAgICB9LFxuICAgIHNjb3Blc1JlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwic2NvcGVzX3JlcXVpcmVkXCIsXG4gICAgICAgIGRlc2M6IFwiU2NvcGVzIGFyZSByZXF1aXJlZCB0byBvYnRhaW4gYW4gYWNjZXNzIHRva2VuLlwiXG4gICAgfSxcbiAgICBlbXB0eVNjb3Blczoge1xuICAgICAgICBjb2RlOiBcImVtcHR5X2lucHV0X3Njb3Blc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBjYW5ub3QgYmUgcGFzc2VkIGFzIGVtcHR5IGFycmF5LlwiXG4gICAgfSxcbiAgICBub25BcnJheVNjb3Blczoge1xuICAgICAgICBjb2RlOiBcIm5vbmFycmF5X2lucHV0X3Njb3Blc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlNjb3BlcyBjYW5ub3QgYmUgcGFzc2VkIGFzIG5vbi1hcnJheS5cIlxuICAgIH0sXG4gICAgY2xpZW50U2NvcGU6IHtcbiAgICAgICAgY29kZTogXCJjbGllbnRpZF9pbnB1dF9zY29wZXNfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJDbGllbnQgSUQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgYXMgYSBzaW5nbGUgc2NvcGUuXCJcbiAgICB9LFxuICAgIGludmFsaWRQcm9tcHQ6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX3Byb21wdF92YWx1ZVwiLFxuICAgICAgICBkZXNjOiBcIlN1cHBvcnRlZCBwcm9tcHQgdmFsdWVzIGFyZSAnbG9naW4nLCAnc2VsZWN0X2FjY291bnQnLCAnY29uc2VudCcgYW5kICdub25lJ1wiLFxuICAgIH0sXG4gICAgaW52YWxpZEF1dGhvcml0eVR5cGU6IHtcbiAgICAgICAgY29kZTogXCJpbnZhbGlkX2F1dGhvcml0eV90eXBlXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGdpdmVuIGF1dGhvcml0eSBpcyBub3QgYSB2YWxpZCB0eXBlIG9mIGF1dGhvcml0eSBzdXBwb3J0ZWQgYnkgTVNBTC4gUGxlYXNlIHNlZSBoZXJlIGZvciB2YWxpZCBhdXRob3JpdGllczogPGluc2VydCBVUkwgaGVyZT4uXCJcbiAgICB9LFxuICAgIGF1dGhvcml0eVVyaUluc2VjdXJlOiB7XG4gICAgICAgIGNvZGU6IFwiYXV0aG9yaXR5X3VyaV9pbnNlY3VyZVwiLFxuICAgICAgICBkZXNjOiBcIkF1dGhvcml0eSBVUklzIG11c3QgdXNlIGh0dHBzLlwiXG4gICAgfSxcbiAgICBhdXRob3JpdHlVcmlJbnZhbGlkUGF0aDoge1xuICAgICAgICBjb2RlOiBcImF1dGhvcml0eV91cmlfaW52YWxpZF9wYXRoXCIsXG4gICAgICAgIGRlc2M6IFwiR2l2ZW4gYXV0aG9yaXR5IFVSSSBpcyBpbnZhbGlkLlwiXG4gICAgfSxcbiAgICB1bnN1cHBvcnRlZEF1dGhvcml0eVZhbGlkYXRpb246IHtcbiAgICAgICAgY29kZTogXCJ1bnN1cHBvcnRlZF9hdXRob3JpdHlfdmFsaWRhdGlvblwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBhdXRob3JpdHkgdmFsaWRhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIGF1dGhvcml0eSB0eXBlLlwiXG4gICAgfSxcbiAgICBiMmNBdXRob3JpdHlVcmlJbnZhbGlkUGF0aDoge1xuICAgICAgICBjb2RlOiBcImIyY19hdXRob3JpdHlfdXJpX2ludmFsaWRfcGF0aFwiLFxuICAgICAgICBkZXNjOiBcIlRoZSBnaXZlbiBVUkkgZm9yIHRoZSBCMkMgYXV0aG9yaXR5IGlzIGludmFsaWQuXCJcbiAgICB9LFxuICAgIGNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjbGFpbXNfcmVxdWVzdF9wYXJzaW5nX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiQ291bGQgbm90IHBhcnNlIHRoZSBnaXZlbiBjbGFpbXMgcmVxdWVzdCBvYmplY3QuXCJcbiAgICB9XG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIGNvbmZpZ3VyYXRpb24gb2YgdGhlIC5qcyBsaWJyYXJ5LlxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIGV4dGVuZHMgQ2xpZW50QXV0aEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLnByb3RvdHlwZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU5vU2V0Q29uZmlndXJhdGlvbkVycm9yKCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuY29uZmlndXJhdGlvbk5vdFNldC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jb25maWd1cmF0aW9uTm90U2V0LmRlc2N9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludmFsaWRDYWNoZUxvY2F0aW9uQ29uZmlnRXJyb3IoZ2l2ZW5DYWNoZUxvY2F0aW9uOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZUxvY2F0aW9uLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWNoZUxvY2F0aW9uLmRlc2N9IFByb3ZpZGVkIHZhbHVlOiAke2dpdmVuQ2FjaGVMb2NhdGlvbn0uIFBvc3NpYmxlIHZhbHVlcyBhcmU6ICR7Q29uc3RhbnRzLmNhY2hlTG9jYXRpb25Mb2NhbH0sICR7Q29uc3RhbnRzLmNhY2hlTG9jYXRpb25TZXNzaW9ufS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTm9TdG9yYWdlU3VwcG9ydGVkRXJyb3IoKSA6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2Uubm9TdG9yYWdlU3VwcG9ydGVkLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vU3RvcmFnZVN1cHBvcnRlZC5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUmVkaXJlY3RDYWxsYmFja3NOb3RTZXRFcnJvcigpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vUmVkaXJlY3RDYWxsYmFja3NTZXQuY29kZSwgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5ub1JlZGlyZWN0Q2FsbGJhY2tzU2V0LmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkQ2FsbGJhY2tPYmplY3RFcnJvcihjYWxsYmFja1R5cGU6IHN0cmluZywgY2FsbGJhY2tPYmplY3Q6IG9iamVjdCk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZENhbGxiYWNrT2JqZWN0LmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRDYWxsYmFja09iamVjdC5kZXNjfSBHaXZlbiB2YWx1ZSBmb3IgJHtjYWxsYmFja1R5cGV9IGNhbGxiYWNrIGZ1bmN0aW9uOiAke2NhbGxiYWNrT2JqZWN0fWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFbXB0eVNjb3Blc0FycmF5RXJyb3Ioc2NvcGVzVmFsdWU6IHN0cmluZyk6IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yKENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuZW1wdHlTY29wZXMuZGVzY30gR2l2ZW4gdmFsdWU6ICR7c2NvcGVzVmFsdWV9LmApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTY29wZXNOb25BcnJheUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLm5vbkFycmF5U2NvcGVzLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blc1ZhbHVlOiBzdHJpbmcpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsaWVudFNjb3BlLmRlc2N9IEdpdmVuIHZhbHVlOiAke3Njb3Blc1ZhbHVlfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU2NvcGVzUmVxdWlyZWRFcnJvcihzY29wZXNWYWx1ZTogYW55KTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5zY29wZXNSZXF1aXJlZC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtzY29wZXNWYWx1ZX1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFByb21wdEVycm9yKHByb21wdFZhbHVlOiBhbnkpOiBDbGllbnRDb25maWd1cmF0aW9uRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudENvbmZpZ3VyYXRpb25FcnJvcihDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRQcm9tcHQuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZFByb21wdC5kZXNjfSBHaXZlbiB2YWx1ZTogJHtwcm9tcHRWYWx1ZX1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihjbGFpbXNSZXF1ZXN0UGFyc2VFcnJvcjogc3RyaW5nKTogQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5jbGFpbXNSZXF1ZXN0UGFyc2luZ0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmNsYWltc1JlcXVlc3RQYXJzaW5nRXJyb3IuZGVzY30gR2l2ZW4gdmFsdWU6ICR7Y2xhaW1zUmVxdWVzdFBhcnNlRXJyb3J9YCk7XG4gICAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL0F1dGhFcnJvclwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vVXRpbHNcIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi4vSWRUb2tlblwiO1xuXG5leHBvcnQgY29uc3QgQ2xpZW50QXV0aEVycm9yTWVzc2FnZSA9IHtcbiAgICBtdWx0aXBsZU1hdGNoaW5nVG9rZW5zOiB7XG4gICAgICAgIGNvZGU6IFwibXVsdGlwbGVfbWF0Y2hpbmdfdG9rZW5zXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIGNhY2hlIGNvbnRhaW5zIG11bHRpcGxlIHRva2VucyBzYXRpc2Z5aW5nIHRoZSByZXF1aXJlbWVudHMuIFwiICtcbiAgICAgICAgICAgIFwiQ2FsbCBBY3F1aXJlVG9rZW4gYWdhaW4gcHJvdmlkaW5nIG1vcmUgcmVxdWlyZW1lbnRzIGxpa2UgYXV0aG9yaXR5LlwiXG4gICAgfSxcbiAgICBtdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXM6IHtcbiAgICAgICAgY29kZTogXCJtdWx0aXBsZV9hdXRob3JpdGllc1wiLFxuICAgICAgICBkZXNjOiBcIk11bHRpcGxlIGF1dGhvcml0aWVzIGZvdW5kIGluIHRoZSBjYWNoZS4gUGFzcyBhdXRob3JpdHkgaW4gdGhlIEFQSSBvdmVybG9hZC5cIlxuICAgIH0sXG4gICAgZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJlbmRwb2ludHNfcmVzb2x1dGlvbl9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkVycm9yOiBjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHMuIFBsZWFzZSBjaGVjayBuZXR3b3JrIGFuZCB0cnkgYWdhaW4uXCJcbiAgICB9LFxuICAgIHBvcFVwV2luZG93RXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJwb3B1cF93aW5kb3dfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJFcnJvciBvcGVuaW5nIHBvcHVwIHdpbmRvdy4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBhcmUgdXNpbmcgSUUgb3IgaWYgcG9wdXBzIGFyZSBibG9ja2VkIGluIHRoZSBicm93c2VyLlwiXG4gICAgfSxcbiAgICB0b2tlblJlbmV3YWxFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInRva2VuX3JlbmV3YWxfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUb2tlbiByZW5ld2FsIG9wZXJhdGlvbiBmYWlsZWQgZHVlIHRvIHRpbWVvdXQuXCJcbiAgICB9LFxuICAgIGludmFsaWRJZFRva2VuOiB7XG4gICAgICAgIGNvZGU6IFwiaW52YWxpZF9pZF90b2tlblwiLFxuICAgICAgICBkZXNjOiBcIkludmFsaWQgSUQgdG9rZW4gZm9ybWF0LlwiXG4gICAgfSxcbiAgICBpbnZhbGlkU3RhdGVFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImludmFsaWRfc3RhdGVfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJJbnZhbGlkIHN0YXRlLlwiXG4gICAgfSxcbiAgICBub25jZU1pc21hdGNoRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJub25jZV9taXNtYXRjaF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIk5vbmNlIGlzIG5vdCBtYXRjaGluZywgTm9uY2UgcmVjZWl2ZWQ6IFwiXG4gICAgfSxcbiAgICBsb2dpblByb2dyZXNzRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJsb2dpbl9wcm9ncmVzc19lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIkxvZ2luX0luX1Byb2dyZXNzOiBFcnJvciBkdXJpbmcgbG9naW4gY2FsbCAtIGxvZ2luIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3MuXCJcbiAgICB9LFxuICAgIGFjcXVpcmVUb2tlblByb2dyZXNzRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJhY3F1aXJldG9rZW5fcHJvZ3Jlc3NfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJBY3F1aXJlVG9rZW5fSW5fUHJvZ3Jlc3M6IEVycm9yIGR1cmluZyBsb2dpbiBjYWxsIC0gbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzcy5cIlxuICAgIH0sXG4gICAgdXNlckNhbmNlbGxlZEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidXNlcl9jYW5jZWxsZWRcIixcbiAgICAgICAgZGVzYzogXCJVc2VyIGNhbmNlbGxlZCB0aGUgZmxvdy5cIlxuICAgIH0sXG4gICAgY2FsbGJhY2tFcnJvcjoge1xuICAgICAgICBjb2RlOiBcImNhbGxiYWNrX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiRXJyb3Igb2NjdXJyZWQgaW4gdG9rZW4gcmVjZWl2ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXCJcbiAgICB9LFxuICAgIHVzZXJMb2dpblJlcXVpcmVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJ1c2VyX2xvZ2luX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZC5cIlxuICAgIH0sXG4gICAgdXNlckRvZXNOb3RFeGlzdEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidXNlcl9ub25fZXhpc3RlbnRcIixcbiAgICAgICAgZGVzYzogXCJVc2VyIG9iamVjdCBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIGNhbGwgYSBsb2dpbiBBUEkuXCJcbiAgICB9LFxuICAgIGNsaWVudEluZm9EZWNvZGluZ0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwiY2xpZW50X2luZm9fZGVjb2RpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUaGUgY2xpZW50IGluZm8gY291bGQgbm90IGJlIHBhcnNlZC9kZWNvZGVkIGNvcnJlY3RseS4gUGxlYXNlIHJldmlldyB0aGUgdHJhY2UgdG8gZGV0ZXJtaW5lIHRoZSByb290IGNhdXNlLlwiXG4gICAgfSxcbiAgICBjbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3I6IHtcbiAgICAgICAgY29kZTogXCJjbGllbnRfaW5mb19ub3RfcG9wdWxhdGVkX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiVGhlIHNlcnZpY2UgZGlkIG5vdCBwb3B1bGF0ZSBjbGllbnRfaW5mbyBpbiB0aGUgcmVzcG9uc2UsIFBsZWFzZSB2ZXJpZnkgd2l0aCB0aGUgc2VydmljZSB0ZWFtXCJcbiAgICB9LFxuICAgIG51bGxPckVtcHR5SWRUb2tlbjoge1xuICAgICAgICBjb2RlOiBcIm51bGxfb3JfZW1wdHlfaWRfdG9rZW5cIixcbiAgICAgICAgZGVzYzogXCJUaGUgaWRUb2tlbiBpcyBudWxsIG9yIGVtcHR5LiBQbGVhc2UgcmV2aWV3IHRoZSB0cmFjZSB0byBkZXRlcm1pbmUgdGhlIHJvb3QgY2F1c2UuXCJcbiAgICB9LFxuICAgIGlkVG9rZW5Ob3RQYXJzZWQ6IHtcbiAgICAgICAgY29kZTogXCJpZF90b2tlbl9wYXJzaW5nX2Vycm9yXCIsXG4gICAgICAgIGRlc2M6IFwiSUQgdG9rZW4gY2Fubm90IGJlIHBhcnNlZC4gUGxlYXNlIHJldmlldyBzdGFjayB0cmFjZSB0byBkZXRlcm1pbmUgcm9vdCBjYXVzZS5cIlxuICAgIH0sXG4gICAgdG9rZW5FbmNvZGluZ0Vycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidG9rZW5fZW5jb2RpbmdfZXJyb3JcIixcbiAgICAgICAgZGVzYzogXCJUaGUgdG9rZW4gdG8gYmUgZGVjb2RlZCBpcyBub3QgZW5jb2RlZCBjb3JyZWN0bHkuXCJcbiAgICB9XG59O1xuXG4vKipcbiAqIEVycm9yIHRocm93biB3aGVuIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBjbGllbnQgY29kZSBydW5uaW5nIG9uIHRoZSBicm93c2VyLlxuICovXG5leHBvcnQgY2xhc3MgQ2xpZW50QXV0aEVycm9yIGV4dGVuZHMgQXV0aEVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsaWVudEF1dGhFcnJvclwiO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBDbGllbnRBdXRoRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyRGV0YWlsPzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYztcbiAgICAgICAgaWYgKGVyckRldGFpbCAmJiAhVXRpbHMuaXNFbXB0eShlcnJEZXRhaWwpKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYCBEZXRhaWxzOiAke2VyckRldGFpbH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuY29kZSwgZXJyb3JNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZU1hdGNoaW5nVG9rZW5zLmNvZGUsXG4gICAgICAgICAgICBgQ2FjaGUgZXJyb3IgZm9yIHNjb3BlICR7c2NvcGV9OiAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubXVsdGlwbGVNYXRjaGluZ1Rva2Vucy5kZXNjfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZTogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXMuY29kZSxcbiAgICAgICAgICAgIGBDYWNoZSBlcnJvciBmb3Igc2NvcGUgJHtzY29wZX06ICR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5tdWx0aXBsZUNhY2hlQXV0aG9yaXRpZXMuZGVzY30uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVBvcHVwV2luZG93RXJyb3IoZXJyRGV0YWlsPzogc3RyaW5nKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5kZXNjO1xuICAgICAgICBpZiAoZXJyRGV0YWlsICYmICFVdGlscy5pc0VtcHR5KGVyckRldGFpbCkpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgIERldGFpbHM6ICR7ZXJyRGV0YWlsfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5wb3BVcFdpbmRvd0Vycm9yLmNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVRva2VuUmVuZXdhbFRpbWVvdXRFcnJvcigpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuUmVuZXdhbEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKGlkVG9rZW46IElkVG9rZW4pIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5pbnZhbGlkSWRUb2tlbi5kZXNjfSBHaXZlbiB0b2tlbjogJHtpZFRva2VufWApO1xuICAgIH1cblxuICAgIC8vVE9ETzogSXMgdGhpcyBub3QgYSBzZWN1cml0eSBmbGF3IHRvIHNlbmQgdGhlIHVzZXIgdGhlIHN0YXRlIGV4cGVjdGVkPz9cbiAgICBzdGF0aWMgY3JlYXRlSW52YWxpZFN0YXRlRXJyb3IoaW52YWxpZFN0YXRlOiBzdHJpbmcsIGFjdHVhbFN0YXRlOiBzdHJpbmcpOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmludmFsaWRTdGF0ZUVycm9yLmRlc2N9ICR7aW52YWxpZFN0YXRlfSwgc3RhdGUgZXhwZWN0ZWQgOiAke2FjdHVhbFN0YXRlfS5gKTtcbiAgICB9XG5cbiAgICAvL1RPRE86IElzIHRoaXMgbm90IGEgc2VjdXJpdHkgZmxhdyB0byBzZW5kIHRoZSB1c2VyIHRoZSBOb25jZSBleHBlY3RlZD8/XG4gICAgc3RhdGljIGNyZWF0ZU5vbmNlTWlzbWF0Y2hFcnJvcihpbnZhbGlkTm9uY2U6IHN0cmluZywgYWN0dWFsTm9uY2U6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2Uubm9uY2VNaXNtYXRjaEVycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLm5vbmNlTWlzbWF0Y2hFcnJvci5kZXNjfSAke2ludmFsaWROb25jZX0sIG5vbmNlIGV4cGVjdGVkIDogJHthY3R1YWxOb25jZX0uYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UubG9naW5Qcm9ncmVzc0Vycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmxvZ2luUHJvZ3Jlc3NFcnJvci5kZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuYWNxdWlyZVRva2VuUHJvZ3Jlc3NFcnJvci5jb2RlLFxuICAgICAgICAgICAgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5hY3F1aXJlVG9rZW5Qcm9ncmVzc0Vycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVVc2VyQ2FuY2VsbGVkRXJyb3IoKTogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckNhbmNlbGxlZEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVFcnJvckluQ2FsbGJhY2tGdW5jdGlvbihlcnJvckRlc2M6IHN0cmluZyk6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2FsbGJhY2tFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS5jYWxsYmFja0Vycm9yLmRlc2N9ICR7ZXJyb3JEZXNjfS5gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyTG9naW5SZXF1aXJlZEVycm9yLmNvZGUsXG4gICAgICAgICAgICBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJMb2dpblJlcXVpcmVkRXJyb3IuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVzZXJEb2VzTm90RXhpc3RFcnJvcigpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyRG9lc05vdEV4aXN0RXJyb3IuY29kZSxcbiAgICAgICAgICAgIENsaWVudEF1dGhFcnJvck1lc3NhZ2UudXNlckRvZXNOb3RFeGlzdEVycm9yLmRlc2MpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDbGllbnRJbmZvRGVjb2RpbmdFcnJvcihjYXVnaHRFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb0RlY29kaW5nRXJyb3IuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0RXJyb3J9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvcihjYXVnaHRFcnJvcjogc3RyaW5nKSA6IENsaWVudEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgQ2xpZW50QXV0aEVycm9yKENsaWVudEF1dGhFcnJvck1lc3NhZ2UuY2xpZW50SW5mb05vdFBvcHVsYXRlZEVycm9yLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmNsaWVudEluZm9Ob3RQb3B1bGF0ZWRFcnJvci5kZXNjfSBGYWlsZWQgd2l0aCBlcnJvcjogJHtjYXVnaHRFcnJvcn1gKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSWRUb2tlbk51bGxPckVtcHR5RXJyb3IoaW52YWxpZFJhd1Rva2VuU3RyaW5nOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5udWxsT3JFbXB0eUlkVG9rZW4uY29kZSxcbiAgICAgICAgICAgIGAke0NsaWVudEF1dGhFcnJvck1lc3NhZ2UubnVsbE9yRW1wdHlJZFRva2VuLmRlc2N9IFJhdyBJRCBUb2tlbiBWYWx1ZTogJHtpbnZhbGlkUmF3VG9rZW5TdHJpbmd9YCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUlkVG9rZW5QYXJzaW5nRXJyb3IoY2F1Z2h0UGFyc2luZ0Vycm9yOiBzdHJpbmcpIDogQ2xpZW50QXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdXRoRXJyb3IoQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5pZFRva2VuTm90UGFyc2VkLmNvZGUsXG4gICAgICAgICAgICBgJHtDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmlkVG9rZW5Ob3RQYXJzZWQuZGVzY30gRmFpbGVkIHdpdGggZXJyb3I6ICR7Y2F1Z2h0UGFyc2luZ0Vycm9yfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVUb2tlbkVuY29kaW5nRXJyb3IoaW5jb3JyZWN0bHlFbmNvZGVkVG9rZW46IHN0cmluZykgOiBDbGllbnRBdXRoRXJyb3Ige1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF1dGhFcnJvcihDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnRva2VuRW5jb2RpbmdFcnJvci5jb2RlLFxuICAgICAgICAgICAgYCR7Q2xpZW50QXV0aEVycm9yTWVzc2FnZS50b2tlbkVuY29kaW5nRXJyb3IuZGVzY30gQXR0ZW1wdGVkIHRvIGRlY29kZTogJHtpbmNvcnJlY3RseUVuY29kZWRUb2tlbn1gKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuZXhwb3J0IGNvbnN0IEF1dGhFcnJvck1lc3NhZ2UgPSB7XG4gICAgdW5leHBlY3RlZEVycm9yOiB7XG4gICAgICAgIGNvZGU6IFwidW5leHBlY3RlZF9lcnJvclwiLFxuICAgICAgICBkZXNjOiBcIlVuZXhwZWN0ZWQgZXJyb3IgaW4gYXV0aGVudGljYXRpb24uXCJcbiAgICB9XG59O1xuXG4vKipcbiogR2VuZXJhbCBlcnJvciBjbGFzcyB0aHJvd24gYnkgdGhlIE1TQUwuanMgbGlicmFyeS5cbiovXG5leHBvcnQgY2xhc3MgQXV0aEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXG4gICAgZXJyb3JDb2RlOiBzdHJpbmc7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvckNvZGU6IHN0cmluZywgZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKGVycm9yTWVzc2FnZSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBBdXRoRXJyb3IucHJvdG90eXBlKTtcblxuICAgICAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQXV0aEVycm9yXCI7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihlcnJEZXNjOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoRXJyb3IoQXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuY29kZSwgYCR7QXV0aEVycm9yTWVzc2FnZS51bmV4cGVjdGVkRXJyb3IuZGVzY306ICR7ZXJyRGVzY31gKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgSVVyaSB9IGZyb20gXCIuL0lVcmlcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcbmltcG9ydCB7IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSB9IGZyb20gXCIuL0lUZW5hbnREaXNjb3ZlcnlSZXNwb25zZVwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZSB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgWGhyQ2xpZW50IH0gZnJvbSBcIi4vWEhSQ2xpZW50XCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZW51bSBBdXRob3JpdHlUeXBlIHtcbiAgQWFkLFxuICBBZGZzLFxuICBCMkNcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdXRob3JpdHkge1xuICBjb25zdHJ1Y3RvcihhdXRob3JpdHk6IHN0cmluZywgdmFsaWRhdGVBdXRob3JpdHk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQgPSB2YWxpZGF0ZUF1dGhvcml0eTtcbiAgICB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eSA9IGF1dGhvcml0eTtcblxuICAgIHRoaXMudmFsaWRhdGVBc1VyaSgpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGdldCBBdXRob3JpdHlUeXBlKCk6IEF1dGhvcml0eVR5cGU7XG5cbiAgcHVibGljIElzVmFsaWRhdGlvbkVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIGdldCBUZW5hbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLlBhdGhTZWdtZW50c1swXTtcbiAgfVxuXG4gIHByaXZhdGUgdGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZTtcblxuICBwdWJsaWMgZ2V0IEF1dGhvcml6YXRpb25FbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZCgpO1xuICAgIHJldHVybiB0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlLkF1dGhvcml6YXRpb25FbmRwb2ludC5yZXBsYWNlKFwie3RlbmFudH1cIiwgdGhpcy5UZW5hbnQpO1xuICB9XG5cbiAgcHVibGljIGdldCBFbmRTZXNzaW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZS5FbmRTZXNzaW9uRW5kcG9pbnQucmVwbGFjZShcInt0ZW5hbnR9XCIsIHRoaXMuVGVuYW50KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgU2VsZlNpZ25lZEp3dEF1ZGllbmNlKCk6IHN0cmluZyB7XG4gICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkKCk7XG4gICAgcmV0dXJuIHRoaXMudGVuYW50RGlzY292ZXJ5UmVzcG9uc2UuSXNzdWVyLnJlcGxhY2UoXCJ7dGVuYW50fVwiLCB0aGlzLlRlbmFudCk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlUmVzb2x2ZWQoKSB7XG4gICAgaWYgKCF0aGlzLnRlbmFudERpc2NvdmVyeVJlc3BvbnNlKSB7XG4gICAgICB0aHJvdyBcIlBsZWFzZSBjYWxsIFJlc29sdmVFbmRwb2ludHNBc3luYyBmaXJzdFwiO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIFVSTCB0aGF0IGlzIHRoZSBhdXRob3JpdHkgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgICovXG4gIHB1YmxpYyBnZXQgQ2Fub25pY2FsQXV0aG9yaXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5O1xuICB9XG5cbiAgcHVibGljIHNldCBDYW5vbmljYWxBdXRob3JpdHkodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eSA9IFV0aWxzLkNhbm9uaWNhbGl6ZVVyaSh1cmwpO1xuICAgIHRoaXMuY2Fub25pY2FsQXV0aG9yaXR5VXJsQ29tcG9uZW50cyA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eTogc3RyaW5nO1xuICBwcml2YXRlIGNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHM6IElVcmk7XG5cbiAgcHVibGljIGdldCBDYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKCk6IElVcmkge1xuICAgIGlmICghdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzKSB7XG4gICAgICB0aGlzLmNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMgPSBVdGlscy5HZXRVcmxDb21wb25lbnRzKHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICB9XG5cbiAgLyoqXG4gICAqIC8vIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWRpc2NvdmVyeS0xXzAuaHRtbCNQcm92aWRlck1ldGFkYXRhXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IERlZmF1bHRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5DYW5vbmljYWxBdXRob3JpdHl9djIuMC8ud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbmA7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBzdHJpbmcsIHZhbGlkYXRlIHRoYXQgaXQgaXMgb2YgdGhlIGZvcm0gaHR0cHM6Ly9kb21haW4vcGF0aFxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUFzVXJpKCkge1xuICAgIGxldCBjb21wb25lbnRzO1xuICAgIHRyeSB7XG4gICAgICBjb21wb25lbnRzID0gdGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuaW52YWxpZEF1dGhvcml0eVR5cGU7XG4gICAgfVxuXG4gICAgaWYgKCFjb21wb25lbnRzLlByb3RvY29sIHx8IGNvbXBvbmVudHMuUHJvdG9jb2wudG9Mb3dlckNhc2UoKSAhPT0gXCJodHRwczpcIikge1xuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS5hdXRob3JpdHlVcmlJbnNlY3VyZTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbXBvbmVudHMuUGF0aFNlZ21lbnRzIHx8IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UuYXV0aG9yaXR5VXJpSW52YWxpZFBhdGg7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBPSURDIGVuZHBvaW50IGFuZCByZXR1cm5zIHRoZSByZXNwb25zZVxuICAgKi9cbiAgcHJpdmF0ZSBEaXNjb3ZlckVuZHBvaW50cyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQ6IHN0cmluZyk6IFByb21pc2U8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IFhockNsaWVudCgpO1xuICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyhvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQsIFwiR0VUXCIsIC8qZW5hYmxlQ2FjaGluZzogKi8gdHJ1ZSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8SVRlbmFudERpc2NvdmVyeVJlc3BvbnNlPntcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uRW5kcG9pbnQ6IHJlc3BvbnNlLmF1dGhvcml6YXRpb25fZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgRW5kU2Vzc2lvbkVuZHBvaW50OiByZXNwb25zZS5lbmRfc2Vzc2lvbl9lbmRwb2ludCxcbiAgICAgICAgICAgICAgICBJc3N1ZXI6IHJlc3BvbnNlLmlzc3VlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UuXG4gICAqIENoZWNrcyB0byBzZWUgaWYgdGhlIGF1dGhvcml0eSBpcyBpbiB0aGUgY2FjaGVcbiAgICogRGlzY292ZXIgZW5kcG9pbnRzIHZpYSBvcGVuaWQtY29uZmlndXJhdGlvblxuICAgKiBJZiBzdWNjZXNzZnVsLCBjYWNoZXMgdGhlIGVuZHBvaW50IGZvciBsYXRlciB1c2UgaW4gT0lEQ1xuICAgKi9cbiAgcHVibGljIHJlc29sdmVFbmRwb2ludHNBc3luYygpOiBQcm9taXNlPEF1dGhvcml0eT4ge1xuICAgIGxldCBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQgPSBcIlwiO1xuICAgIHJldHVybiB0aGlzLkdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCkudGhlbihvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZSA9PiB7XG4gICAgICBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnQgPSBvcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRSZXNwb25zZTtcbiAgICAgIHJldHVybiB0aGlzLkRpc2NvdmVyRW5kcG9pbnRzKG9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCk7XG4gICAgfSkudGhlbigodGVuYW50RGlzY292ZXJ5UmVzcG9uc2U6IElUZW5hbnREaXNjb3ZlcnlSZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy50ZW5hbnREaXNjb3ZlcnlSZXNwb25zZSA9IHRlbmFudERpc2NvdmVyeVJlc3BvbnNlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz47XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDYWxsYmFjayB7XG4gIChsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkO1xufVxuXG5leHBvcnQgZW51bSBMb2dMZXZlbCB7XG4gIEVycm9yLFxuICBXYXJuaW5nLFxuICBJbmZvLFxuICBWZXJib3NlXG59XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIgey8vIFNpbmdsZXRvbiBDbGFzc1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICAvLyBUT0RPOiBUaGlzIGRvZXMgbm90IHNlZW0gdG8gYmUgYSBzaW5nbGV0b24hISBDaGFuZ2Ugb3IgRGVsZXRlLlxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTG9nZ2VyO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JbmZvO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHBpaUxvZ2dpbmdFbmFibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGxvY2FsQ2FsbGJhY2s6IElMb2dnZXJDYWxsYmFjaztcblxuICBjb25zdHJ1Y3Rvcihsb2NhbENhbGxiYWNrOiBJTG9nZ2VyQ2FsbGJhY2ssXG4gICAgICBvcHRpb25zOlxuICAgICAge1xuICAgICAgICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcsXG4gICAgICAgICAgbGV2ZWw/OiBMb2dMZXZlbCxcbiAgICAgICAgICBwaWlMb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4sXG4gICAgICB9ID0ge30pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjb3JyZWxhdGlvbklkID0gXCJcIixcbiAgICAgICAgICBsZXZlbCA9IExvZ0xldmVsLkluZm8sXG4gICAgICAgICAgcGlpTG9nZ2luZ0VuYWJsZWQgPSBmYWxzZVxuICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgIHRoaXMubG9jYWxDYWxsYmFjayA9IGxvY2FsQ2FsbGJhY2s7XG4gICAgICB0aGlzLmNvcnJlbGF0aW9uSWQgPSBjb3JyZWxhdGlvbklkO1xuICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgdGhpcy5waWlMb2dnaW5nRW5hYmxlZCA9IHBpaUxvZ2dpbmdFbmFibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgbG9nTWVzc2FnZShsb2dMZXZlbDogTG9nTGV2ZWwsIGxvZ01lc3NhZ2U6IHN0cmluZywgY29udGFpbnNQaWk6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoKGxvZ0xldmVsID4gdGhpcy5sZXZlbCkgfHwgKCF0aGlzLnBpaUxvZ2dpbmdFbmFibGVkICYmIGNvbnRhaW5zUGlpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCk7XG4gICAgbGV0IGxvZzogc3RyaW5nO1xuICAgIGlmICghVXRpbHMuaXNFbXB0eSh0aGlzLmNvcnJlbGF0aW9uSWQpKSB7XG4gICAgICBsb2cgPSB0aW1lc3RhbXAgKyBcIjpcIiArIHRoaXMuY29ycmVsYXRpb25JZCArIFwiLVwiICsgVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxvZyA9IHRpbWVzdGFtcCArIFwiOlwiICsgVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKSArIFwiLVwiICsgTG9nTGV2ZWxbbG9nTGV2ZWxdICsgXCIgXCIgKyBsb2dNZXNzYWdlO1xuICAgIH1cbiAgICB0aGlzLmV4ZWN1dGVDYWxsYmFjayhsb2dMZXZlbCwgbG9nLCBjb250YWluc1BpaSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXhlY3V0ZUNhbGxiYWNrKGxldmVsOiBMb2dMZXZlbCwgbWVzc2FnZTogc3RyaW5nLCBjb250YWluc1BpaTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmxvY2FsQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMubG9jYWxDYWxsYmFjayhsZXZlbCwgbWVzc2FnZSwgY29udGFpbnNQaWkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlcnJvclBpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLldhcm5pbmcsIG1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB3YXJuaW5nUGlpKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBpbmZvKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubG9nTWVzc2FnZShMb2dMZXZlbC5JbmZvLCBtZXNzYWdlLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaW5mb1BpaShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmVyYm9zZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ01lc3NhZ2UoTG9nTGV2ZWwuVmVyYm9zZSwgbWVzc2FnZSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZlcmJvc2VQaWkobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sb2dNZXNzYWdlKExvZ0xldmVsLlZlcmJvc2UsIG1lc3NhZ2UsIHRydWUpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vQXV0aEVycm9yXCI7XG5cbmV4cG9ydCBjb25zdCBTZXJ2ZXJFcnJvck1lc3NhZ2UgPSB7XG4gICAgc2VydmVyVW5hdmFpbGFibGU6IHtcbiAgICAgICAgY29kZTogXCJzZXJ2ZXJfdW5hdmFpbGFibGVcIixcbiAgICAgICAgZGVzYzogXCJTZXJ2ZXIgaXMgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUuXCJcbiAgICB9LFxuICAgIHVua25vd25TZXJ2ZXJFcnJvcjoge1xuICAgICAgICBjb2RlOiBcInVua25vd25fc2VydmVyX2Vycm9yXCJcbiAgICB9LFxufTtcblxuLyoqXG4gKiBFcnJvciB0aHJvd24gd2hlbiB0aGVyZSBpcyBhbiBlcnJvciB3aXRoIHRoZSBzZXJ2ZXIgY29kZSwgZm9yIGV4YW1wbGUsIHVuYXZhaWxhYmlsaXR5LlxuICovXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBBdXRoRXJyb3Ige1xuXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlOiBzdHJpbmcsIGVycm9yTWVzc2FnZT86IHN0cmluZykge1xuICAgICAgICBzdXBlcihlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiU2VydmVyRXJyb3JcIjtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgU2VydmVyRXJyb3IucHJvdG90eXBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU2VydmVyVW5hdmFpbGFibGVFcnJvcigpOiBTZXJ2ZXJFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgU2VydmVyRXJyb3IoU2VydmVyRXJyb3JNZXNzYWdlLnNlcnZlclVuYXZhaWxhYmxlLmNvZGUsXG4gICAgICAgICAgICBTZXJ2ZXJFcnJvck1lc3NhZ2Uuc2VydmVyVW5hdmFpbGFibGUuZGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVVua25vd25TZXJ2ZXJFcnJvcihlcnJvckRlc2M6IHN0cmluZyk6IFNlcnZlckVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXJ2ZXJFcnJvcihTZXJ2ZXJFcnJvck1lc3NhZ2UudW5rbm93blNlcnZlckVycm9yLmNvZGUsXG4gICAgICAgICAgICBlcnJvckRlc2MpO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtXCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlblZhbHVlIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5WYWx1ZVwiO1xuaW1wb3J0IHsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMgfSBmcm9tIFwiLi9TZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc1wiO1xuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDbGllbnRJbmZvIH0gZnJvbSBcIi4vQ2xpZW50SW5mb1wiO1xuaW1wb3J0IHsgQ29uc3RhbnRzLCBTU09UeXBlcywgUHJvbXB0U3RhdGUgfSBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiLi9TdG9yYWdlXCI7XG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IHsgQXV0aG9yaXR5RmFjdG9yeSB9IGZyb20gXCIuL0F1dGhvcml0eUZhY3RvcnlcIjtcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24sIGJ1aWxkQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL0NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycywgUVBEaWN0LCB2YWxpZGF0ZUNsYWltc1JlcXVlc3QgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvciB9IGZyb20gXCIuL2Vycm9yL0NsaWVudENvbmZpZ3VyYXRpb25FcnJvclwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQXV0aEVycm9yXCI7XG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcbmltcG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vZXJyb3IvU2VydmVyRXJyb3JcIjtcbmltcG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UgfSBmcm9tIFwiLi9BdXRoUmVzcG9uc2VcIjtcblxuLy8gZGVmYXVsdCBhdXRob3JpdHlcbmNvbnN0IERFRkFVTFRfQVVUSE9SSVRZID0gXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCI7XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIGhhbmRsZSBpRnJhbWUgZ2VuZXJhdGlvbiwgUG9wdXAgV2luZG93IGNyZWF0aW9uIGFuZCByZWRpcmVjdCBoYW5kbGluZ1xuICovXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIG1zYWw6IE9iamVjdDtcbiAgICAgICAgQ3VzdG9tRXZlbnQ6IEN1c3RvbUV2ZW50O1xuICAgICAgICBFdmVudDogRXZlbnQ7XG4gICAgICAgIGFjdGl2ZVJlbmV3YWxzOiB7fTtcbiAgICAgICAgcmVuZXdTdGF0ZXM6IEFycmF5PHN0cmluZz47XG4gICAgICAgIGNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlcyA6IHt9O1xuICAgICAgICBwcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlczoge307XG4gICAgICAgIG9wZW5lZFdpbmRvd3M6IEFycmF5PFdpbmRvdz47XG4gICAgICAgIHJlcXVlc3RUeXBlOiBzdHJpbmc7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIHJlc3BvbnNlX3R5cGUgZnJvbSBPcGVuSURDb25uZWN0XG4gKiBSZWZlcmVuY2VzOiBodHRwczovL29wZW5pZC5uZXQvc3BlY3Mvb2F1dGgtdjItbXVsdGlwbGUtcmVzcG9uc2UtdHlwZXMtMV8wLmh0bWwgJiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTQuMi4xXG4gKiBTaW5jZSB3ZSBzdXBwb3J0IG9ubHkgaW1wbGljaXQgZmxvdyBpbiB0aGlzIGxpYnJhcnksIHdlIHJlc3RyaWN0IHRoZSByZXNwb25zZV90eXBlIHN1cHBvcnQgdG8gb25seSAndG9rZW4nIGFuZCAnaWRfdG9rZW4nXG4gKlxuICovXG5jb25zdCBSZXNwb25zZVR5cGVzID0ge1xuICBpZF90b2tlbjogXCJpZF90b2tlblwiLFxuICB0b2tlbjogXCJ0b2tlblwiLFxuICBpZF90b2tlbl90b2tlbjogXCJpZF90b2tlbiB0b2tlblwiXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYWNoZVJlc3VsdCB7XG4gIGVycm9yRGVzYzogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICBlcnJvcjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIERhdGEgdHlwZSB0byBob2xkIGluZm9ybWF0aW9uIGFib3V0IHN0YXRlIHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxuICovXG5leHBvcnQgdHlwZSBSZXNwb25zZVN0YXRlSW5mbyA9IHtcbiAgc3RhdGU6IHN0cmluZztcbiAgc3RhdGVNYXRjaDogYm9vbGVhbjtcbiAgcmVxdWVzdFR5cGU6IHN0cmluZztcbn07XG5cbi8qKlxuICogQSB0eXBlIGFsaWFzIGZvciBhIHRva2VuUmVjZWl2ZWRDYWxsYmFjayBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHJlc3BvbnNlIG9mIHR5cGUge0BsaW5rIEF1dGhSZXNwb25zZX1cbiAqIFRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgZ2V0IHRoZSBjYWxsIGJhY2sgb25jZSB0aGlzIEFQSSBpcyBjb21wbGV0ZWQgKGVpdGhlciBzdWNjZXNzZnVsbHkgb3Igd2l0aCBhIGZhaWx1cmUpLlxuICovXG5leHBvcnQgdHlwZSB0b2tlblJlY2VpdmVkQ2FsbGJhY2sgPSAocmVzcG9uc2U6IEF1dGhSZXNwb25zZSkgPT4gdm9pZDtcblxuLyoqXG4gKiBBIHR5cGUgYWxpYXMgZm9yIGEgZXJyb3JSZWNlaXZlZENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHJldHVybnMgcmVzcG9uc2Ugb2YgdHlwZSB7QGxpbmsgQXV0aEVycm9yfVxuICovXG5leHBvcnQgdHlwZSBlcnJvclJlY2VpdmVkQ2FsbGJhY2sgPSAoYXV0aEVycm9yOiBBdXRoRXJyb3IsIGFjY291bnRTdGF0ZTogc3RyaW5nKSA9PiB2b2lkO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqIEEgd3JhcHBlciB0byBoYW5kbGUgdGhlIHRva2VuIHJlc3BvbnNlL2Vycm9yIHdpdGhpbiB0aGUgaUZyYW1lIGFsd2F5c1xuICpcbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSBwcm9wZXJ0eUtleVxuICogQHBhcmFtIGRlc2NyaXB0b3JcbiAqL1xuY29uc3QgcmVzb2x2ZVRva2VuT25seUlmT3V0T2ZJZnJhbWUgPSAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuICBjb25zdCB0b2tlbkFjcXVpc2l0aW9uTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNJbklmcmFtZSgpXG4gICAgICAgICAgPyBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IHRva2VuQWNxdWlzaXRpb25NZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxuLyoqXG4gKiBVc2VyQWdlbnRBcHBsaWNhdGlvbiBjbGFzcyA6IHtAbGluayBVc2VyQWdlbnRBcHBsaWNhdGlvbn1cbiAqIE9iamVjdCBJbnN0YW5jZSB0aGF0IHRoZSBkZXZlbG9wZXIgY2FuIHVzZSB0byBtYWtlIGxvZ2luWFggT1IgYWNxdWlyZVRva2VuWFggZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyQWdlbnRBcHBsaWNhdGlvbiB7XG5cbiAgLy8gaW5wdXQgQ29uZmlndXJhdGlvbiBieSB0aGUgZGV2ZWxvcGVyL3VzZXJcbiAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ3VyYXRpb247XG5cbiAgLy8gY2FsbGJhY2tzIGZvciB0b2tlbi9lcnJvclxuICBwcml2YXRlIHRva2VuUmVjZWl2ZWRDYWxsYmFjazogdG9rZW5SZWNlaXZlZENhbGxiYWNrID0gbnVsbDtcbiAgcHJpdmF0ZSBlcnJvclJlY2VpdmVkQ2FsbGJhY2s6IGVycm9yUmVjZWl2ZWRDYWxsYmFjayA9IG51bGw7XG5cbiAgLy8gQWRkZWQgZm9yIHJlYWRhYmlsaXR5IGFzIHRoZXNlIHBhcmFtcyBhcmUgdmVyeSBmcmVxdWVudGx5IHVzZWRcbiAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcbiAgcHJpdmF0ZSBjbGllbnRJZDogc3RyaW5nO1xuICBwcml2YXRlIGluQ29va2llOiBib29sZWFuO1xuXG4gIC8vIENhY2hlIGFuZCBBY2NvdW50IGluZm8gcmVmZXJyZWQgYWNyb3NzIHRva2VuIGdyYW50IGZsb3dcbiAgcHJvdGVjdGVkIGNhY2hlU3RvcmFnZTogU3RvcmFnZTtcbiAgcHJpdmF0ZSBhY2NvdW50OiBBY2NvdW50O1xuXG4gIC8vIHN0YXRlIHZhcmlhYmxlc1xuICBwcml2YXRlIGxvZ2luSW5Qcm9ncmVzczogYm9vbGVhbjtcbiAgcHJpdmF0ZSBhY3F1aXJlVG9rZW5JblByb2dyZXNzOiBib29sZWFuO1xuICBwcml2YXRlIHNpbGVudEF1dGhlbnRpY2F0aW9uU3RhdGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzaWxlbnRMb2dpbjogYm9vbGVhbjtcbiAgcHJpdmF0ZSByZWRpcmVjdENhbGxiYWNrc1NldDogYm9vbGVhbjtcblxuICAvLyBBdXRob3JpdHkgRnVuY3Rpb25hbGl0eVxuICBwcm90ZWN0ZWQgYXV0aG9yaXR5SW5zdGFuY2U6IEF1dGhvcml0eTtcblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgYXV0aG9yaXR5IFVSTFxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yaXR5XG4gICAqL1xuICAvLyBJZiB0aGUgZGV2ZWxvcGVyIHBhc3NlcyBhbiBhdXRob3JpdHksIGNyZWF0ZSBhbiBpbnN0YW5jZVxuICBwdWJsaWMgc2V0IGF1dGhvcml0eSh2YWwpIHtcbiAgICB0aGlzLmF1dGhvcml0eUluc3RhbmNlID0gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZSh2YWwsIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGF1dGhvcml0eSwgd2hlcmUgYXV0aG9yaXR5IGlzIGEgVVJMIGluZGljYXRpbmcgdGhlIGRpcmVjdG9yeSB0aGF0IE1TQUwgY2FuIHVzZSB0byBvYnRhaW4gdG9rZW5zXG4gICAqIC0gSW4gQXp1cmUgQUQsIHRoaXMgYXR0cmlidXRlIGlzIGEgVVJMIGluZGljYXRpbmcgdGhlIEF6dXJlIGFjdGl2ZSBkaXJlY3RvcnkgdGhhdCBNU0FMIHVzZXMgdG8gb2J0YWluIHRva2Vuc1xuICAgKiBJdCBpcyBvZiB0aGUgZm9ybSBodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vJmx0O0VudGVyX3RoZV9UZW5hbnRfSW5mb19IZXJlJmd0O1xuICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIHN1cHBvcnRzIEFjY291bnRzIGluIG9uZSBvcmdhbml6YXRpb25hbCBkaXJlY3RvcnksIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggdGhlIFRlbmFudCBJZCBvciBUZW5hbnQgbmFtZSAoZm9yIGV4YW1wbGUsIGNvbnRvc28ubWljcm9zb2Z0LmNvbSlcbiAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5LCByZXBsYWNlIFwiRW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmVcIiB2YWx1ZSB3aXRoIG9yZ2FuaXphdGlvbnNcbiAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBzdXBwb3J0cyBBY2NvdW50cyBpbiBhbnkgb3JnYW5pemF0aW9uYWwgZGlyZWN0b3J5IGFuZCBwZXJzb25hbCBNaWNyb3NvZnQgYWNjb3VudHMsIHJlcGxhY2UgXCJFbnRlcl90aGVfVGVuYW50X0luZm9fSGVyZVwiIHZhbHVlIHdpdGggY29tbW9uLlxuICAgKiBUbyByZXN0cmljdCBzdXBwb3J0IHRvIFBlcnNvbmFsIE1pY3Jvc29mdCBhY2NvdW50cyBvbmx5LCByZXBsYWNlIFwiRW50ZXJfdGhlX1RlbmFudF9JbmZvX0hlcmVcIiB2YWx1ZSB3aXRoIGNvbnN1bWVycy5cbiAgICogLSBJbiBBenVyZSBCMkMsIGl0IGlzIG9mIHRoZSBmb3JtIGh0dHBzOi8vJmx0O2luc3RhbmNlJmd0Oy90ZnAvJmx0O3RlbmFudCZndDsvPHBvbGljeU5hbWU+L1xuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBhdXRob3JpdHlcbiAgICovXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UuQ2Fub25pY2FsQXV0aG9yaXR5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGF1dGhvcml0eSBpbnN0YW5jZVxuICAgKiBAcmV0dXJucyBhdXRob3JpdHkge0BsaW5rIEF1dGhvcml0eX1cbiAgICovXG4gIHB1YmxpYyBnZXRBdXRob3JpdHlJbnN0YW5jZSgpOiBBdXRob3JpdHkge1xuICAgIHJldHVybiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciB0aGUge0BsaW5rIFVzZXJBZ2VudEFwcGxpY2F0aW9ufSBvYmplY3RcbiAgICogVGhpcyBpcyB0byBiZSBhYmxlIHRvIGluc3RhbnRpYXRlIHRoZSB7QGxpbmsgVXNlckFnZW50QXBwbGljYXRpb259IG9iamVjdFxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogSW1wb3J0YW50IGF0dHJpYnV0ZXMgdG8gY29uZmlndXJlIGFyZTpcbiAgICogLSBjbGllbnRJRDogdGhlIGFwcGxpY2F0aW9uIElEIG9mIHlvdXIgYXBwbGljYXRpb24uIFlvdSBnZXQgb2J0YWluIG9uZSBieSByZWdpc3RlcmluZyB5b3VyIGFwcGxpY2F0aW9uIHdpdGggb3VyIEFwcGxpY2F0aW9uIHJlZ2lzdHJhdGlvbiBwb3J0YWwgOiBodHRwczovL3BvcnRhbC5henVyZS5jb20vI2JsYWRlL01pY3Jvc29mdF9BQURfSUFNL0FjdGl2ZURpcmVjdG9yeU1lbnVCbGFkZS9SZWdpc3RlcmVkQXBwc1ByZXZpZXdcbiAgICogLSBhdXRob3JpdHk6IHRoZSBhdXRob3JpdHkgVVJMIGZvciB5b3VyIGFwcGxpY2F0aW9uXG4gICAqIEBwYXJhbSB7QGxpbmsgQ29uZmlndXJhdGlvbn0gY29uZmlndXJhdGlvbiBvYmplY3QgZm9yIHRoZSBNU0FMIFVzZXJBZ2VudEFwcGxpY2F0aW9uIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XG5cbiAgICAvLyBTZXQgdGhlIENvbmZpZ3VyYXRpb25cbiAgICB0aGlzLmNvbmZpZyA9IGJ1aWxkQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uKTtcblxuICAgIC8vIFNldCB0aGUgY2FsbGJhY2sgYm9vbGVhblxuICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSBmYWxzZTtcblxuICAgIHRoaXMubG9nZ2VyID0gdGhpcy5jb25maWcuc3lzdGVtLmxvZ2dlcjtcbiAgICB0aGlzLmNsaWVudElkID0gdGhpcy5jb25maWcuYXV0aC5jbGllbnRJZDtcbiAgICB0aGlzLmluQ29va2llID0gdGhpcy5jb25maWcuY2FjaGUuc3RvcmVBdXRoU3RhdGVJbkNvb2tpZTtcblxuICAgIC8vIGlmIG5vIGF1dGhvcml0eSBpcyBwYXNzZWQsIHNldCB0aGUgZGVmYXVsdDogXCJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vY29tbW9uXCJcbiAgICB0aGlzLmF1dGhvcml0eSA9IHRoaXMuY29uZmlnLmF1dGguYXV0aG9yaXR5IHx8IERFRkFVTFRfQVVUSE9SSVRZO1xuXG4gICAgLy8gdHJhY2sgbG9naW4gYW5kIGFjcXVpcmVUb2tlbiBpbiBwcm9ncmVzc1xuICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAvLyBjYWNoZSBrZXlzIG1zYWwgLSB0eXBlc2NyaXB0IHRocm93cyBhbiBlcnJvciBpZiBhbnkgdmFsdWUgb3RoZXIgdGhhbiBcImxvY2FsU3RvcmFnZVwiIG9yIFwic2Vzc2lvblN0b3JhZ2VcIiBpcyBwYXNzZWRcbiAgICB0cnkge1xuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh0aGlzLmNvbmZpZy5jYWNoZS5jYWNoZUxvY2F0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2FjaGVMb2NhdGlvbkNvbmZpZ0Vycm9yKHRoaXMuY29uZmlnLmNhY2hlLmNhY2hlTG9jYXRpb24pO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgd2luZG93IGhhbmRsaW5nIGNvZGVcbiAgICB3aW5kb3cub3BlbmVkV2luZG93cyA9IFtdO1xuICAgIHdpbmRvdy5hY3RpdmVSZW5ld2FscyA9IHt9O1xuICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xuICAgIHdpbmRvdy5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXMgPSB7IH07XG4gICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzID0geyB9O1xuICAgIHdpbmRvdy5tc2FsID0gdGhpcztcblxuICAgIGNvbnN0IHVybEhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICBjb25zdCBpc0NhbGxiYWNrID0gdGhpcy5pc0NhbGxiYWNrKHVybEhhc2gpO1xuXG4gICAgLy8gT24gdGhlIHNlcnZlciAzMDIgLSBSZWRpcmVjdCwgaGFuZGxlIHRoaXNcbiAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcbiAgICAgIGlmIChpc0NhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQXV0aGVudGljYXRpb25SZXNwb25zZSh1cmxIYXNoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyNyZWdpb24gUmVkaXJlY3QgQ2FsbGJhY2tzXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIHRoZSByZWRpcmVjdCBmbG93IHRvIHNlbmQgYmFjayB0aGUgc3VjY2VzcyBvciBlcnJvciBvYmplY3QuXG4gICAqIEBwYXJhbSB7dG9rZW5SZWNlaXZlZENhbGxiYWNrfSBzdWNjZXNzQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyB0aGUgQXV0aFJlc3BvbnNlIG9iamVjdCwgY29udGFpbmluZyBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtIHtlcnJvclJlY2VpdmVkQ2FsbGJhY2t9IGVycm9yQ2FsbGJhY2sgLSBDYWxsYmFjayB3aGljaCBjb250YWlucyBhIEF1dGhFcnJvciBvYmplY3QsIGNvbnRhaW5pbmcgZXJyb3IgZGF0YSBmcm9tIGVpdGhlciB0aGUgc2VydmVyXG4gICAqIG9yIHRoZSBsaWJyYXJ5LCBkZXBlbmRpbmcgb24gdGhlIG9yaWdpbiBvZiB0aGUgZXJyb3IuXG4gICAqL1xuICBoYW5kbGVSZWRpcmVjdENhbGxiYWNrcyhzdWNjZXNzQ2FsbGJhY2s6IHRva2VuUmVjZWl2ZWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjazogZXJyb3JSZWNlaXZlZENhbGxiYWNrKTogdm9pZCB7XG4gICAgaWYgKCFzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSBmYWxzZTtcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2FsbGJhY2tPYmplY3RFcnJvcihcInN1Y2Nlc3NDYWxsYmFja1wiLCBzdWNjZXNzQ2FsbGJhY2spO1xuICAgIH0gZWxzZSBpZiAoIWVycm9yQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSBmYWxzZTtcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVJbnZhbGlkQ2FsbGJhY2tPYmplY3RFcnJvcihcImVycm9yQ2FsbGJhY2tcIiwgZXJyb3JDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy8gU2V0IGNhbGxiYWNrc1xuICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xuICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrID0gZXJyb3JDYWxsYmFjaztcblxuICAgIHRoaXMucmVkaXJlY3RDYWxsYmFja3NTZXQgPSB0cnVlO1xuXG4gICAgLy8gT24gdGhlIHNlcnZlciAzMDIgLSBSZWRpcmVjdCwgaGFuZGxlIHRoaXNcbiAgICBpZiAoIXRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGNhY2hlZEhhc2ggPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy51cmxIYXNoKTtcbiAgICAgIGlmIChjYWNoZWRIYXNoKSB7XG4gICAgICAgIHRoaXMucHJvY2Vzc0NhbGxCYWNrKGNhY2hlZEhhc2gsIG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBSZWRpcmVjdCBGbG93XG5cbiAgLyoqXG4gICAqIFVzZSB3aGVuIGluaXRpYXRpbmcgdGhlIGxvZ2luIHByb2Nlc3MgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIncyBicm93c2VyIHRvIHRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50LlxuICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cbiAgICovXG4gIGxvZ2luUmVkaXJlY3QocmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IHZvaWQge1xuXG4gICAgLy8gVGhyb3cgZXJyb3IgaWYgY2FsbGJhY2tzIGFyZSBub3Qgc2V0IGJlZm9yZSByZWRpcmVjdFxuICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVJlZGlyZWN0Q2FsbGJhY2tzTm90U2V0RXJyb3IoKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIG5hdmlnYXRlIHVybDsgc2F2ZXMgdmFsdWUgaW4gY2FjaGU7IHJlZGlyZWN0IHVzZXIgdG8gQUFEXG4gICAgaWYgKHRoaXMubG9naW5JblByb2dyZXNzKSB7XG4gICAgICBsZXQgcmVxU3RhdGU7XG4gICAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICByZXFTdGF0ZSA9IHJlcXVlc3Quc3RhdGU7XG4gICAgICB9XG4gICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayhDbGllbnRBdXRoRXJyb3IuY3JlYXRlTG9naW5JblByb2dyZXNzRXJyb3IoKSwgcmVxU3RhdGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGV4dHJhU2NvcGVzVG9Db25zZW50IGlzIHBhc3NlZCwgYXBwZW5kIHRoZW0gdG8gdGhlIGxvZ2luIHJlcXVlc3RcbiAgICBsZXQgc2NvcGVzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5hcHBlbmRTY29wZXMocmVxdWVzdCk7XG5cbiAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodGhlIHZhbGlkYXRlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgdmFsaWRhdGlvbiBmYWlscylcbiAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShzY29wZXMsIGZhbHNlKTtcblxuICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSB0aGlzLmdldEFjY291bnQoKTtcblxuICAgIC8vIGRlZmVyIHF1ZXJ5UGFyYW1ldGVycyBnZW5lcmF0aW9uIHRvIEhlbHBlciBpZiBkZXZlbG9wZXIgcGFzc2VzIGFjY291bnQvc2lkL2xvZ2luX2hpbnRcbiAgICBpZiAoVXRpbHMuaXNTU09QYXJhbShyZXF1ZXN0KSkge1xuICAgICAgLy8gaWYgYWNjb3VudCBpcyBub3QgcHJvdmlkZWQsIHdlIHBhc3MgbnVsbFxuICAgICAgdGhpcy5sb2dpblJlZGlyZWN0SGVscGVyKGFjY291bnQsIHJlcXVlc3QsIHNjb3Blcyk7XG4gICAgfVxuICAgIC8vIGVsc2UgaGFuZGxlIHRoZSBsaWJyYXJ5IGRhdGFcbiAgICBlbHNlIHtcbiAgICAgIC8vIGV4dHJhY3QgQURBTCBpZF90b2tlbiBpZiBleGlzdHNcbiAgICAgIGxldCBhZGFsSWRUb2tlbiA9IHRoaXMuZXh0cmFjdEFEQUxJZFRva2VuKCk7XG5cbiAgICAgIC8vIHNpbGVudCBsb2dpbiBpZiBBREFMIGlkX3Rva2VuIGlzIHJldHJpZXZlZCBzdWNjZXNzZnVsbHkgLSBTU09cbiAgICAgIGlmIChhZGFsSWRUb2tlbiAmJiAhc2NvcGVzKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJBREFMJ3MgaWRUb2tlbiBleGlzdHMuIEV4dHJhY3RpbmcgbG9naW4gaW5mb3JtYXRpb24gZnJvbSBBREFMJ3MgaWRUb2tlbiBcIik7XG4gICAgICAgIGxldCB0b2tlblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHRoaXMuYnVpbGRJRFRva2VuUmVxdWVzdChyZXF1ZXN0KTtcblxuICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5TaWxlbnQodG9rZW5SZXF1ZXN0KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xuXG4gICAgICAgICAgaWYgKHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnRva2VuUmVjZWl2ZWRDYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnNpbGVudExvZ2luID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFNcIik7XG5cbiAgICAgICAgICAvLyBjYWxsIHRoZSBsb2dpblJlZGlyZWN0SGVscGVyIGxhdGVyIHdpdGggbm8gdXNlciBhY2NvdW50IGNvbnRleHRcbiAgICAgICAgICB0aGlzLmxvZ2luUmVkaXJlY3RIZWxwZXIobnVsbCwgcmVxdWVzdCwgc2NvcGVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIHByb2NlZWQgdG8gbG9naW5cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBjYWxsIHRoZSBsb2dpblJlZGlyZWN0SGVscGVyIGxhdGVyIHdpdGggbm8gdXNlciBhY2NvdW50IGNvbnRleHRcbiAgICAgICAgdGhpcy5sb2dpblJlZGlyZWN0SGVscGVyKG51bGwsIHJlcXVlc3QsIHNjb3Blcyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gbG9naW5SZWRpcmVjdFxuICAgKlxuICAgKiBAcGFyYW0gYWNjb3VudFxuICAgKiBAcGFyYW0gQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHByaXZhdGUgbG9naW5SZWRpcmVjdEhlbHBlcihhY2NvdW50OiBBY2NvdW50LCByZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHNjb3Blcz86IEFycmF5PHN0cmluZz4pIHtcbiAgICAvLyBUcmFjayBsb2dpbiBpbiBwcm9ncmVzc1xuICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gdHJ1ZTtcblxuICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbigoKSA9PiB7XG5cbiAgICAgIC8vIGNyZWF0ZSB0aGUgUmVxdWVzdCB0byBiZSBzZW50IHRvIHRoZSBTZXJ2ZXJcbiAgICAgIGxldCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXG4gICAgICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UsXG4gICAgICAgIHRoaXMuY2xpZW50SWQsIHNjb3BlcyxcbiAgICAgICAgUmVzcG9uc2VUeXBlcy5pZF90b2tlbixcbiAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLFxuICAgICAgICByZXF1ZXN0LnN0YXRlXG4gICAgICApO1xuXG4gICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcblxuICAgICAgLy8gaWYgdGhlIHVzZXIgc2V0cyB0aGUgbG9naW4gc3RhcnQgcGFnZSAtIGFuZ3VsYXIgb25seT8/XG4gICAgICBsZXQgbG9naW5TdGFydFBhZ2UgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hbmd1bGFyTG9naW5SZXF1ZXN0KTtcbiAgICAgIGlmICghbG9naW5TdGFydFBhZ2UgfHwgbG9naW5TdGFydFBhZ2UgPT09IFwiXCIpIHtcbiAgICAgICAgbG9naW5TdGFydFBhZ2UgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmFuZ3VsYXJMb2dpblJlcXVlc3QsIFwiXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWNoZSB0aGUgc3RhdGUsIG5vbmNlLCBhbmQgbG9naW4gcmVxdWVzdCBkYXRhXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIGxvZ2luU3RhcnRQYWdlLCB0aGlzLmluQ29va2llKTtcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiXCIpO1xuXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5zdGF0ZUxvZ2luLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xuXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIFwiXCIpO1xuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIFwiXCIpO1xuXG4gICAgICAvLyBDYWNoZSBhdXRob3JpdHlLZXlcbiAgICAgIHRoaXMuc2V0QXV0aG9yaXR5Q2FjaGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCB0aGlzLmF1dGhvcml0eSk7XG5cbiAgICAgIC8vIGJ1aWxkIFVSTCB0byBuYXZpZ2F0ZSB0byBwcm9jZWVkIHdpdGggdGhlIGxvZ2luXG4gICAgICBsZXQgdXJsTmF2aWdhdGUgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSArIENvbnN0YW50cy5yZXNwb25zZV9tb2RlX2ZyYWdtZW50O1xuXG4gICAgICAvLyBSZWRpcmVjdCB1c2VyIHRvIGxvZ2luIFVSTFxuICAgICAgdGhpcy5wcm9tcHRVc2VyKHVybE5hdmlnYXRlKTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAvLyBBbGwgY2F0Y2ggLSB3aGVuIGlzIHRoaXMgZXhlY3V0ZWQ/IFBvc3NpYmx5IHdoZW4gZXJyb3IgaXMgdGhyb3duLCBidXQgbm90IGlmIHByZXZpb3VzIGZ1bmN0aW9uIHJlamVjdHMgaW5zdGVhZCBvZiB0aHJvd2luZ1xuICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcImNvdWxkIG5vdCByZXNvbHZlIGVuZHBvaW50c1wiKTtcblxuICAgICAgbGV0IHJlcVN0YXRlO1xuICAgICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgICAgcmVxU3RhdGUgPSByZXF1ZXN0LnN0YXRlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayhDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKSwgdGhpcy5nZXRBY2NvdW50U3RhdGUocmVxU3RhdGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHdoZW4geW91IHdhbnQgdG8gb2J0YWluIGFuIGFjY2Vzc190b2tlbiBmb3IgeW91ciBBUEkgYnkgcmVkaXJlY3RpbmcgdGhlIHVzZXIgdG8gdGhlIGF1dGhvcml6YXRpb24gZW5kcG9pbnQuXG4gICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxuICAgKlxuICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xuICAgKi9cbiAgYWNxdWlyZVRva2VuUmVkaXJlY3QocmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgLy8gVGhyb3cgZXJyb3IgaWYgY2FsbGJhY2tzIGFyZSBub3Qgc2V0IGJlZm9yZSByZWRpcmVjdFxuICAgIGlmICghdGhpcy5yZWRpcmVjdENhbGxiYWNrc1NldCkge1xuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVJlZGlyZWN0Q2FsbGJhY2tzTm90U2V0RXJyb3IoKTtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBhbmQgZmlsdGVyIHNjb3BlcyAodGhlIHZhbGlkYXRlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgaWYgdmFsaWRhdGlvbiBmYWlscylcbiAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShyZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XG5cbiAgICAvLyBHZXQgdGhlIGFjY291bnQgb2JqZWN0IGlmIGEgc2Vzc2lvbiBleGlzdHNcbiAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xuXG4gICAgLy8gSWYgYWxyZWFkeSBpbiBwcm9ncmVzcywgZG8gbm90IHByb2NlZWRcbiAgICBpZiAodGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XG4gICAgICBsZXQgcmVxU3RhdGU7XG4gICAgICBpZiAocmVxdWVzdCkge1xuICAgICAgICByZXFTdGF0ZSA9IHJlcXVlc3Quc3RhdGU7XG4gICAgICB9XG4gICAgICB0aGlzLmVycm9yUmVjZWl2ZWRDYWxsYmFjayhDbGllbnRBdXRoRXJyb3IuY3JlYXRlQWNxdWlyZVRva2VuSW5Qcm9ncmVzc0Vycm9yKCksIHJlcVN0YXRlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBubyBzZXNzaW9uIGV4aXN0cywgcHJvbXB0IHRoZSB1c2VyIHRvIGxvZ2luLlxuICAgIGlmICghYWNjb3VudCAmJiAhKHJlcXVlc3Quc2lkICB8fCByZXF1ZXN0LmxvZ2luSGludCkpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVVzZXJMb2dpblJlcXVpcmVkRXJyb3IoKTtcbiAgICB9XG5cbiAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycztcbiAgICBjb25zdCBhY3F1aXJlVG9rZW5BdXRob3JpdHkgPSByZXF1ZXN0LmF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcblxuICAgIC8vIFRyYWNrIHRoZSBhY3F1aXJlVG9rZW4gcHJvZ3Jlc3NcbiAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LnJlc29sdmVFbmRwb2ludHNBc3luYygpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gT24gRnVsZmlsbG1lbnRcbiAgICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnQsIHJlcXVlc3Quc2NvcGVzLCBmYWxzZSk7XG4gICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXG4gICAgICAgIGFjcXVpcmVUb2tlbkF1dGhvcml0eSxcbiAgICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgICAgcmVxdWVzdC5zY29wZXMsXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLFxuICAgICAgICByZXF1ZXN0LnN0YXRlXG4gICAgICApO1xuXG4gICAgICAvLyBDYWNoZSBub25jZVxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xuXG4gICAgICAvLyBDYWNoZSBhY2NvdW50IGFuZCBhdXRob3JpdHlcbiAgICAgIHRoaXMuc2V0QWNjb3VudENhY2hlKGFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG4gICAgICB0aGlzLnNldEF1dGhvcml0eUNhY2hlKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgYWNxdWlyZVRva2VuQXV0aG9yaXR5LkNhbm9uaWNhbEF1dGhvcml0eSk7XG5cbiAgICAgIC8vIHBvcHVsYXRlIFF1ZXJ5UGFyYW1ldGVycyAoc2lkL2xvZ2luX2hpbnQvZG9tYWluX2hpbnQpIGFuZCBhbnkgb3RoZXIgZXh0cmFRdWVyeVBhcmFtZXRlcnMgc2V0IGJ5IHRoZSBkZXZlbG9wZXJcbiAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHRoaXMucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xuXG4gICAgICAvLyBDb25zdHJ1Y3QgdXJsTmF2aWdhdGVcbiAgICAgIGxldCB1cmxOYXZpZ2F0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jcmVhdGVOYXZpZ2F0ZVVybChyZXF1ZXN0LnNjb3BlcykgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcblxuICAgICAgLy8gc2V0IHN0YXRlIGluIGNhY2hlIGFuZCByZWRpcmVjdCB0byB1cmxOYXZpZ2F0ZVxuICAgICAgaWYgKHVybE5hdmlnYXRlKSB7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuaW5Db29raWUpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmxOYXZpZ2F0ZSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgLy8gQWxsIGNhdGNoIC0gd2hlbiBpcyB0aGlzIGV4ZWN1dGVkPyBQb3NzaWJseSB3aGVuIGVycm9yIGlzIHRocm93biwgYnV0IG5vdCBpZiBwcmV2aW91cyBmdW5jdGlvbiByZWplY3RzIGluc3RlYWQgb2YgdGhyb3dpbmdcbiAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XG5cbiAgICAgIGxldCByZXFTdGF0ZTtcbiAgICAgIGlmIChyZXF1ZXN0KSB7XG4gICAgICAgIHJlcVN0YXRlID0gcmVxdWVzdC5zdGF0ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lcnJvclJlY2VpdmVkQ2FsbGJhY2soQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZyksIHRoaXMuZ2V0QWNjb3VudFN0YXRlKHJlcVN0YXRlKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBDaGVja3MgaWYgdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGlzIHJlY2VpdmVkIGZyb20gdGhlIFNUUy4gSW4gY2FzZSBvZiByZWRpcmVjdCwgdGhlIHVybCBmcmFnbWVudCBoYXMgZWl0aGVyIGlkX3Rva2VuLCBhY2Nlc3NfdG9rZW4gb3IgZXJyb3IuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gSGFzaCBwYXNzZWQgZnJvbSByZWRpcmVjdCBwYWdlLlxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSB0cnVlIGlmIHJlc3BvbnNlIGNvbnRhaW5zIGlkX3Rva2VuLCBhY2Nlc3NfdG9rZW4gb3IgZXJyb3IsIGZhbHNlIG90aGVyd2lzZS5cbiAgICovXG4gIC8vIFRPRE8gLSByZW5hbWUgdGhpcywgdGhlIG5hbWUgaXMgY29uZnVzaW5nXG4gIGlzQ2FsbGJhY2soaGFzaDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaGFzaCA9IHRoaXMuZ2V0SGFzaChoYXNoKTtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gVXRpbHMuZGVzZXJpYWxpemUoaGFzaCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb24pIHx8XG4gICAgICBwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvcikgfHxcbiAgICAgIHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmFjY2Vzc1Rva2VuKSB8fFxuICAgICAgcGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbilcblxuICAgICk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gUG9wdXAgRmxvd1xuXG4gIC8qKlxuICAgKiBVc2Ugd2hlbiBpbml0aWF0aW5nIHRoZSBsb2dpbiBwcm9jZXNzIHZpYSBvcGVuaW5nIGEgcG9wdXAgd2luZG93IGluIHRoZSB1c2VyJ3MgYnJvd3NlclxuICAgKlxuICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcbiAgICovXG4gIGxvZ2luUG9wdXAocmVxdWVzdD86IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgLy8gQ3JlYXRlcyBuYXZpZ2F0ZSB1cmw7IHNhdmVzIHZhbHVlIGluIGNhY2hlOyByZWRpcmVjdCB1c2VyIHRvIEFBRFxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIEZhaWwgaWYgbG9naW4gaXMgYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgaWYgKHRoaXMubG9naW5JblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUxvZ2luSW5Qcm9ncmVzc0Vycm9yKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBleHRyYVNjb3Blc1RvQ29uc2VudCBpcyBwYXNzZWQsIGFwcGVuZCB0aGVtIHRvIHRoZSBsb2dpbiByZXF1ZXN0XG4gICAgICBsZXQgc2NvcGVzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5hcHBlbmRTY29wZXMocmVxdWVzdCk7XG5cbiAgICAgIC8vIFZhbGlkYXRlIGFuZCBmaWx0ZXIgc2NvcGVzICh0aGUgdmFsaWRhdGUgZnVuY3Rpb24gd2lsbCB0aHJvdyBpZiB2YWxpZGF0aW9uIGZhaWxzKVxuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzLCBmYWxzZSk7XG5cbiAgICAgIGxldCBhY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XG5cbiAgICAgLy8gYWRkIHRoZSBwcm9tcHQgcGFyYW1ldGVyIHRvIHRoZSAnZXh0cmFRdWVyeVBhcmFtZXRlcnMnIGlmIHBhc3NlZFxuICAgICAgaWYgKFV0aWxzLmlzU1NPUGFyYW0ocmVxdWVzdCkpIHtcbiAgICAgICAgIC8vIGlmIGFjY291bnQgaXMgbm90IHByb3ZpZGVkLCB3ZSBwYXNzIG51bGxcbiAgICAgICAgIHRoaXMubG9naW5Qb3B1cEhlbHBlcihhY2NvdW50LCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QsIHNjb3Blcyk7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIGhhbmRsZSB0aGUgbGlicmFyeSBkYXRhXG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gRXh0cmFjdCBBREFMIGlkX3Rva2VuIGlmIGl0IGV4aXN0c1xuICAgICAgICBsZXQgYWRhbElkVG9rZW4gPSB0aGlzLmV4dHJhY3RBREFMSWRUb2tlbigpO1xuXG4gICAgICAgIC8vIHNpbGVudCBsb2dpbiBpZiBBREFMIGlkX3Rva2VuIGlzIHJldHJpZXZlZCBzdWNjZXNzZnVsbHkgLSBTU09cbiAgICAgICAgaWYgKGFkYWxJZFRva2VuICYmICFzY29wZXMpIHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xuICAgICAgICAgIGxldCB0b2tlblJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyA9IHRoaXMuYnVpbGRJRFRva2VuUmVxdWVzdChyZXF1ZXN0KTtcblxuICAgICAgICAgIHRoaXMuc2lsZW50TG9naW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWNxdWlyZVRva2VuU2lsZW50KHRva2VuUmVxdWVzdClcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlVuaWZpZWQgY2FjaGUgY2FsbCBpcyBzdWNjZXNzZnVsXCIpO1xuXG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5zaWxlbnRMb2dpbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgdW5pZmllZCBjYWNoZSBBVFNcIik7XG4gICAgICAgICAgICB0aGlzLmxvZ2luUG9wdXBIZWxwZXIobnVsbCwgcmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0LCBzY29wZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgcHJvY2VlZCB3aXRoIGxvZ2luXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9naW5Qb3B1cEhlbHBlcihudWxsLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QsIHNjb3BlcyApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gbG9naW5Qb3B1cFxuICAgKlxuICAgKiBAcGFyYW0gYWNjb3VudFxuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKiBAcGFyYW0gcmVzb2x2ZVxuICAgKiBAcGFyYW0gcmVqZWN0XG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHByaXZhdGUgbG9naW5Qb3B1cEhlbHBlcihhY2NvdW50OiBBY2NvdW50LCByZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMsIHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnksIHNjb3Blcz86IEFycmF5PHN0cmluZz4pIHtcbiAgICBpZiAoIXNjb3Blcykge1xuICAgICAgc2NvcGVzID0gW3RoaXMuY2xpZW50SWRdO1xuICAgIH1cbiAgICBjb25zdCBzY29wZSA9IHNjb3Blcy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gR2VuZXJhdGUgYSBwb3B1cCB3aW5kb3dcbiAgICBjb25zdCBwb3BVcFdpbmRvdyA9IHRoaXMub3BlbldpbmRvdyhcImFib3V0OmJsYW5rXCIsIFwiX2JsYW5rXCIsIDEsIHRoaXMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgaWYgKCFwb3BVcFdpbmRvdykge1xuICAgICAgLy8gV2UgcGFzcyByZWplY3QgaW4gb3BlbldpbmRvdywgd2UgcmVqZWN0IHRoZXJlIGR1cmluZyBhbiBlcnJvclxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYWNrIGxvZ2luIHByb2dyZXNzXG4gICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgLy8gUmVzb2x2ZSBlbmRwb2ludFxuICAgIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbigoKSA9PiB7XG4gICAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UsIHRoaXMuY2xpZW50SWQsIHNjb3BlcywgUmVzcG9uc2VUeXBlcy5pZF90b2tlbiwgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLCByZXF1ZXN0LnN0YXRlKTtcblxuICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlcjtcbiAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHRoaXMucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xuXG4gICAgICAvLyBDYWNoZSB0aGUgc3RhdGUsIG5vbmNlLCBhbmQgbG9naW4gcmVxdWVzdCBkYXRhXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5sb2dpblJlcXVlc3QsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0aGlzLmluQ29va2llKTtcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiXCIpO1xuXG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XG5cbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgXCJcIik7XG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgXCJcIik7XG5cbiAgICAgIC8vIGNhY2hlIGF1dGhvcml0eUtleVxuICAgICAgdGhpcy5zZXRBdXRob3JpdHlDYWNoZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIHRoaXMuYXV0aG9yaXR5KTtcblxuICAgICAgLy8gQnVpbGQgdGhlIFVSTCB0byBuYXZpZ2F0ZSB0byBpbiB0aGUgcG9wdXAgd2luZG93XG4gICAgICBsZXQgdXJsTmF2aWdhdGUgPSBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSAgKyBDb25zdGFudHMucmVzcG9uc2VfbW9kZV9mcmFnbWVudDtcblxuICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5sb2dpbjtcblxuICAgICAgLy8gUmVnaXN0ZXIgY2FsbGJhY2sgdG8gY2FwdHVyZSByZXN1bHRzIGZyb20gc2VydmVyXG4gICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgLy8gTmF2aWdhdGUgdXJsIGluIHBvcHVwV2luZG93XG4gICAgICBpZiAocG9wVXBXaW5kb3cpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIk5hdmlnYXRlZCBQb3B1cCB3aW5kb3cgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgICAgIHBvcFVwV2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxOYXZpZ2F0ZTtcbiAgICAgIH1cbiAgICB9LCAoKSA9PiB7XG4gICAgICAvLyBFbmRwb2ludCByZXNvbHV0aW9uIGZhaWx1cmUgZXJyb3JcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5jb2RlICsgXCI6XCIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmRlc2MpO1xuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmNvZGUpO1xuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYyk7XG5cbiAgICAgIC8vIFdoYXQgaXMgdGhpcz8gSXMgdGhpcyB0aGUgcmVqZWN0IHRoYXQgaXMgcGFzc2VkIGluPz8gLS0gUkVETyB0aGlzIGluIHRoZSBzdWJzZXF1ZW50IHJlZmFjdG9yLCBwYXNzaW5nIHJlamVjdCBpcyBjb25mdXNpbmdcbiAgICAgIGlmIChyZWplY3QpIHtcbiAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcigpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xvc2UgdGhlIHBvcHVwIHdpbmRvd1xuICAgICAgaWYgKHBvcFVwV2luZG93KSB7XG4gICAgICAgIHBvcFVwV2luZG93LmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgLy8gQWxsIGNhdGNoIC0gd2hlbiBpcyB0aGlzIGV4ZWN1dGVkPyBQb3NzaWJseSB3aGVuIGVycm9yIGlzIHRocm93biwgYnV0IG5vdCBpZiBwcmV2aW91cyBmdW5jdGlvbiByZWplY3RzIGluc3RlYWQgb2YgdGhyb3dpbmdcbiAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XG4gICAgICByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVuZHBvaW50UmVzb2x1dGlvbkVycm9yKGVyci50b1N0cmluZykpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB3aGVuIHlvdSB3YW50IHRvIG9idGFpbiBhbiBhY2Nlc3NfdG9rZW4gZm9yIHlvdXIgQVBJIHZpYSBvcGVuaW5nIGEgcG9wdXAgd2luZG93IGluIHRoZSB1c2VyJ3MgYnJvd3NlclxuICAgKiBAcGFyYW0ge0BsaW5rIEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVyc31cbiAgICpcbiAgICogVG8gcmVuZXcgaWRUb2tlbiwgcGxlYXNlIHBhc3MgY2xpZW50SWQgYXMgdGhlIG9ubHkgc2NvcGUgaW4gdGhlIEF1dGhlbnRpY2F0aW9uIFBhcmFtZXRlcnNcbiAgICogQHJldHVybnMge1Byb21pc2UuPEF1dGhSZXNwb25zZT59IC0gQSBQcm9taXNlIHRoYXQgaXMgZnVsZmlsbGVkIHdoZW4gdGhpcyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLCBvciByZWplY3RlZCBpZiBhbiBlcnJvciB3YXMgcmFpc2VkLiBSZXR1cm5zIHRoZSB7QGxpbmsgQXV0aFJlc3BvbnNlfSBvYmplY3RcbiAgICovXG4gIGFjcXVpcmVUb2tlblBvcHVwKHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEF1dGhSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShyZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHNjb3BlID0gcmVxdWVzdC5zY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcblxuICAgICAgLy8gR2V0IHRoZSBhY2NvdW50IG9iamVjdCBpZiBhIHNlc3Npb24gZXhpc3RzXG4gICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gcmVxdWVzdC5hY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xuXG4gICAgICAvLyBJZiBhbHJlYWR5IGluIHByb2dyZXNzLCB0aHJvdyBhbiBlcnJvciBhbmQgcmVqZWN0IHRoZSByZXF1ZXN0XG4gICAgICBpZiAodGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUFjcXVpcmVUb2tlbkluUHJvZ3Jlc3NFcnJvcigpKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgbm8gc2Vzc2lvbiBleGlzdHMsIHByb21wdCB0aGUgdXNlciB0byBsb2dpbi5cbiAgICAgIGlmICghYWNjb3VudCAmJiAhIShyZXF1ZXN0LnNpZCAgfHwgcmVxdWVzdC5sb2dpbkhpbnQpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJVc2VyIGxvZ2luIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICByZXR1cm4gcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyTG9naW5SZXF1aXJlZEVycm9yKCkpO1xuICAgICAgfVxuXG4gICAgICAvLyB0cmFjayB0aGUgYWNxdWlyZVRva2VuIHByb2dyZXNzXG4gICAgICB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xuXG4gICAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycztcbiAgICAgIGNvbnN0IGFjcXVpcmVUb2tlbkF1dGhvcml0eSA9IHJlcXVlc3QuYXV0aG9yaXR5ID8gQXV0aG9yaXR5RmFjdG9yeS5DcmVhdGVJbnN0YW5jZShyZXF1ZXN0LmF1dGhvcml0eSwgdGhpcy5jb25maWcuYXV0aC52YWxpZGF0ZUF1dGhvcml0eSkgOiB0aGlzLmF1dGhvcml0eUluc3RhbmNlO1xuXG4gICAgICAvLyBPcGVuIHRoZSBwb3B1cCB3aW5kb3dcbiAgICAgIGNvbnN0IHBvcFVwV2luZG93ID0gdGhpcy5vcGVuV2luZG93KFwiYWJvdXQ6YmxhbmtcIiwgXCJfYmxhbmtcIiwgMSwgdGhpcywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIGlmICghcG9wVXBXaW5kb3cpIHtcbiAgICAgICAgLy8gV2UgcGFzcyByZWplY3QgdG8gb3BlbldpbmRvdywgc28gd2UgYXJlIHJlamVjdGluZyB0aGVyZS5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhY3F1aXJlVG9rZW5BdXRob3JpdHkucmVzb2x2ZUVuZHBvaW50c0FzeW5jKCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIE9uIGZ1bGxmaWxsbWVudFxuICAgICAgICBjb25zdCByZXNwb25zZVR5cGUgPSB0aGlzLmdldFRva2VuVHlwZShhY2NvdW50LCByZXF1ZXN0LnNjb3BlcywgZmFsc2UpO1xuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSBuZXcgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMoXG4gICAgICAgICAgYWNxdWlyZVRva2VuQXV0aG9yaXR5LFxuICAgICAgICAgIHRoaXMuY2xpZW50SWQsXG4gICAgICAgICAgcmVxdWVzdC5zY29wZXMsXG4gICAgICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcbiAgICAgICAgICByZXF1ZXN0LnN0YXRlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIChzaWQvbG9naW5faGludC9kb21haW5faGludCkgYW5kIGFueSBvdGhlciBleHRyYVF1ZXJ5UGFyYW1ldGVycyBzZXQgYnkgdGhlIGRldmVsb3BlclxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgcmVxdWVzdCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcblxuICAgICAgICAvLyBDYWNoZSBub25jZVxuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5ub25jZSwgdGhpcy5pbkNvb2tpZSk7XG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZTtcblxuICAgICAgICAvLyBDYWNoZSBhY2NvdW50IGFuZCBhdXRob3JpdHlcbiAgICAgICAgdGhpcy5zZXRBY2NvdW50Q2FjaGUoYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5zZXRBdXRob3JpdHlDYWNoZShzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUsIGFjcXVpcmVUb2tlbkF1dGhvcml0eS5DYW5vbmljYWxBdXRob3JpdHkpO1xuXG4gICAgICAgIC8vIENvbnN0cnVjdCB0aGUgdXJsTmF2aWdhdGVcbiAgICAgICAgbGV0IHVybE5hdmlnYXRlID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHJlcXVlc3Quc2NvcGVzKSArIENvbnN0YW50cy5yZXNwb25zZV9tb2RlX2ZyYWdtZW50O1xuXG4gICAgICAgIHdpbmRvdy5yZW5ld1N0YXRlcy5wdXNoKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0VHlwZSA9IENvbnN0YW50cy5yZW5ld1Rva2VuO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcblxuICAgICAgICAvLyBvcGVuIHBvcHVwIHdpbmRvdyB0byB1cmxOYXZpZ2F0ZVxuICAgICAgICBpZiAocG9wVXBXaW5kb3cpIHtcbiAgICAgICAgICBwb3BVcFdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsTmF2aWdhdGU7XG4gICAgICAgIH1cblxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvLyBPbiByZWplY3Rpb25cbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhDbGllbnRBdXRoRXJyb3JNZXNzYWdlLmVuZHBvaW50UmVzb2x1dGlvbkVycm9yLmNvZGUgKyBcIjpcIiArIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYyk7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvciwgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS5lbmRwb2ludFJlc29sdXRpb25FcnJvci5jb2RlKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yRGVzY3JpcHRpb24sIENsaWVudEF1dGhFcnJvck1lc3NhZ2UuZW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IuZGVzYyk7XG5cbiAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvcFVwV2luZG93KSB7XG4gICAgICAgICAgICBwb3BVcFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XG4gICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlRW5kcG9pbnRSZXNvbHV0aW9uRXJyb3IoZXJyLnRvU3RyaW5nKCkpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICpcbiAgICogVXNlZCB0byBzZW5kIHRoZSB1c2VyIHRvIHRoZSByZWRpcmVjdF91cmkgYWZ0ZXIgYXV0aGVudGljYXRpb24gaXMgY29tcGxldGUuIFRoZSB1c2VyJ3MgYmVhcmVyIHRva2VuIGlzIGF0dGFjaGVkIHRvIHRoZSBVUkkgZnJhZ21lbnQgYXMgYW4gaWRfdG9rZW4vYWNjZXNzX3Rva2VuIGZpZWxkLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGFsc28gY2xvc2VzIHRoZSBwb3B1cCB3aW5kb3cgYWZ0ZXIgcmVkaXJlY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB1cmxOYXZpZ2F0ZVxuICAgKiBAcGFyYW0gdGl0bGVcbiAgICogQHBhcmFtIGludGVydmFsXG4gICAqIEBwYXJhbSBpbnN0YW5jZVxuICAgKiBAcGFyYW0gcmVzb2x2ZVxuICAgKiBAcGFyYW0gcmVqZWN0XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgb3BlbldpbmRvdyh1cmxOYXZpZ2F0ZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpbnRlcnZhbDogbnVtYmVyLCBpbnN0YW5jZTogdGhpcywgcmVzb2x2ZT86IEZ1bmN0aW9uLCByZWplY3Q/OiBGdW5jdGlvbik6IFdpbmRvdyB7XG4gICAgLy8gR2VuZXJhdGUgYSBwb3B1cCB3aW5kb3dcbiAgICB2YXIgcG9wdXBXaW5kb3c6IFdpbmRvdztcbiAgICB0cnkge1xuICAgICAgcG9wdXBXaW5kb3cgPSB0aGlzLm9wZW5Qb3B1cCh1cmxOYXZpZ2F0ZSwgdGl0bGUsIENvbnN0YW50cy5wb3BVcFdpZHRoLCBDb25zdGFudHMucG9wVXBIZWlnaHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgaW5zdGFuY2UuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlICsgXCI6XCIgKyBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYyk7XG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIENsaWVudEF1dGhFcnJvck1lc3NhZ2UucG9wVXBXaW5kb3dFcnJvci5jb2RlKTtcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnBvcFVwV2luZG93RXJyb3IuZGVzYyk7XG4gICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcigpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFB1c2ggcG9wdXAgd2luZG93IGhhbmRsZSBvbnRvIHN0YWNrIGZvciB0cmFja2luZ1xuICAgIHdpbmRvdy5vcGVuZWRXaW5kb3dzLnB1c2gocG9wdXBXaW5kb3cpO1xuXG4gICAgY29uc3QgcG9sbFRpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vIElmIHBvcHVwIGNsb3NlZCBvciBsb2dpbiBpbiBwcm9ncmVzcywgY2FuY2VsIGxvZ2luXG4gICAgICBpZiAocG9wdXBXaW5kb3cgJiYgcG9wdXBXaW5kb3cuY2xvc2VkICYmIGluc3RhbmNlLmxvZ2luSW5Qcm9ncmVzcykge1xuICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVVc2VyQ2FuY2VsbGVkRXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZyYW1ld29yay5pc0FuZ3VsYXIpIHtcbiAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0KFwibXNhbDpwb3BVcENsb3NlZFwiLCBDbGllbnRBdXRoRXJyb3JNZXNzYWdlLnVzZXJDYW5jZWxsZWRFcnJvci5jb2RlICsgQ29uc3RhbnRzLnJlc291cmNlRGVsaW1pdGVyICsgQ2xpZW50QXV0aEVycm9yTWVzc2FnZS51c2VyQ2FuY2VsbGVkRXJyb3IuZGVzYyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2UubG9naW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIGluc3RhbmNlLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9wVXBXaW5kb3dMb2NhdGlvbiA9IHBvcHVwV2luZG93LmxvY2F0aW9uO1xuXG4gICAgICAgIC8vIElmIHRoZSBwb3B1cCBoYXNoIGNoYW5nZXMsIGNsb3NlIHRoZSBwb3B1cCB3aW5kb3dcbiAgICAgICAgaWYgKHBvcFVwV2luZG93TG9jYXRpb24uaHJlZi5pbmRleE9mKHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSkgIT09IC0xKSB7XG4gICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwocG9sbFRpbWVyKTtcbiAgICAgICAgICBpbnN0YW5jZS5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBpbnN0YW5jZS5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkNsb3NpbmcgcG9wdXAgd2luZG93XCIpO1xuICAgICAgICAgIC8vIFRPRE86IENoZWNrIGhvdyB0aGlzIGNhbiBiZSBleHRyYWN0ZWQgZm9yIGFueSBmcmFtZXdvcmsgc3BlY2lmaWMgY29kZT9cbiAgICAgICAgICBpZiAodGhpcy5jb25maWcuZnJhbWV3b3JrLmlzQW5ndWxhcikge1xuICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChcIm1zYWw6cG9wVXBIYXNoQ2hhbmdlZFwiLCBwb3BVcFdpbmRvd0xvY2F0aW9uLmhhc2gpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5vcGVuZWRXaW5kb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbmVkV2luZG93c1tpXS5jbG9zZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIENyb3NzIERvbWFpbiB1cmwgY2hlY2sgZXJyb3IuXG4gICAgICAgIC8vIFdpbGwgYmUgdGhyb3duIHVudGlsIEFBRCByZWRpcmVjdHMgdGhlIHVzZXIgYmFjayB0byB0aGUgYXBwXCJzIHJvb3QgcGFnZSB3aXRoIHRoZSB0b2tlbi5cbiAgICAgICAgLy8gTm8gbmVlZCB0byBsb2cgb3IgdGhyb3cgdGhpcyBlcnJvciBhcyBpdCB3aWxsIGNyZWF0ZSB1bm5lY2Vzc2FyeSB0cmFmZmljLlxuICAgICAgfVxuICAgIH0sXG4gICAgaW50ZXJ2YWwpO1xuXG4gICAgcmV0dXJuIHBvcHVwV2luZG93O1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICpcbiAgICogQ29uZmlndXJlcyBwb3B1cCB3aW5kb3cgZm9yIGxvZ2luLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsTmF2aWdhdGVcbiAgICogQHBhcmFtIHRpdGxlXG4gICAqIEBwYXJhbSBwb3BVcFdpZHRoXG4gICAqIEBwYXJhbSBwb3BVcEhlaWdodFxuICAgKiBAaWdub3JlXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgb3BlblBvcHVwKHVybE5hdmlnYXRlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHBvcFVwV2lkdGg6IG51bWJlciwgcG9wVXBIZWlnaHQ6IG51bWJlcikge1xuICAgIHRyeSB7XG4gICAgICAvKipcbiAgICAgICAqIGFkZGluZyB3aW5MZWZ0IGFuZCB3aW5Ub3AgdG8gYWNjb3VudCBmb3IgZHVhbCBtb25pdG9yXG4gICAgICAgKiB1c2luZyBzY3JlZW5MZWZ0IGFuZCBzY3JlZW5Ub3AgZm9yIElFOCBhbmQgZWFybGllclxuICAgICAgICovXG4gICAgICBjb25zdCB3aW5MZWZ0ID0gd2luZG93LnNjcmVlbkxlZnQgPyB3aW5kb3cuc2NyZWVuTGVmdCA6IHdpbmRvdy5zY3JlZW5YO1xuICAgICAgY29uc3Qgd2luVG9wID0gd2luZG93LnNjcmVlblRvcCA/IHdpbmRvdy5zY3JlZW5Ub3AgOiB3aW5kb3cuc2NyZWVuWTtcbiAgICAgIC8qKlxuICAgICAgICogd2luZG93LmlubmVyV2lkdGggZGlzcGxheXMgYnJvd3NlciB3aW5kb3dcInMgaGVpZ2h0IGFuZCB3aWR0aCBleGNsdWRpbmcgdG9vbGJhcnNcbiAgICAgICAqIHVzaW5nIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCBmb3IgSUU4IGFuZCBlYXJsaWVyXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IGxlZnQgPSAoKHdpZHRoIC8gMikgLSAocG9wVXBXaWR0aCAvIDIpKSArIHdpbkxlZnQ7XG4gICAgICBjb25zdCB0b3AgPSAoKGhlaWdodCAvIDIpIC0gKHBvcFVwSGVpZ2h0IC8gMikpICsgd2luVG9wO1xuXG4gICAgICAvLyBvcGVuIHRoZSB3aW5kb3dcbiAgICAgIGNvbnN0IHBvcHVwV2luZG93ID0gd2luZG93Lm9wZW4odXJsTmF2aWdhdGUsIHRpdGxlLCBcIndpZHRoPVwiICsgcG9wVXBXaWR0aCArIFwiLCBoZWlnaHQ9XCIgKyBwb3BVcEhlaWdodCArIFwiLCB0b3A9XCIgKyB0b3AgKyBcIiwgbGVmdD1cIiArIGxlZnQpO1xuICAgICAgaWYgKCFwb3B1cFdpbmRvdykge1xuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlUG9wdXBXaW5kb3dFcnJvcigpO1xuICAgICAgfVxuICAgICAgaWYgKHBvcHVwV2luZG93LmZvY3VzKSB7XG4gICAgICAgIHBvcHVwV2luZG93LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb3B1cFdpbmRvdztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcImVycm9yIG9wZW5pbmcgcG9wdXAgXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWNxdWlyZVRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZVBvcHVwV2luZG93RXJyb3IoZS50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gU2lsZW50IEZsb3dcblxuICAvKipcbiAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gb2J0YWluIGEgdG9rZW4gYmVmb3JlIGV2ZXJ5IGNhbGwgdG8gdGhlIEFQSSAvIHJlc291cmNlIHByb3ZpZGVyXG4gICAqXG4gICAqIE1TQUwgcmV0dXJuJ3MgYSBjYWNoZWQgdG9rZW4gd2hlbiBhdmFpbGFibGVcbiAgICogT3IgaXQgc2VuZCdzIGEgcmVxdWVzdCB0byB0aGUgU1RTIHRvIG9idGFpbiBhIG5ldyB0b2tlbiB1c2luZyBhIGhpZGRlbiBpZnJhbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7QGxpbmsgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzfVxuICAgKlxuICAgKiBUbyByZW5ldyBpZFRva2VuLCBwbGVhc2UgcGFzcyBjbGllbnRJZCBhcyB0aGUgb25seSBzY29wZSBpbiB0aGUgQXV0aGVudGljYXRpb24gUGFyYW1ldGVyc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZS48QXV0aFJlc3BvbnNlPn0gLSBBIFByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQsIG9yIHJlamVjdGVkIGlmIGFuIGVycm9yIHdhcyByYWlzZWQuIFJldHVybnMgdGhlIHtAbGluayBBdXRoUmVzcG9uc2V9IG9iamVjdFxuICAgKlxuICAgKi9cbiAgQHJlc29sdmVUb2tlbk9ubHlJZk91dE9mSWZyYW1lXG4gIGFjcXVpcmVUb2tlblNpbGVudChyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBQcm9taXNlPEF1dGhSZXNwb25zZT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgLy8gVmFsaWRhdGUgYW5kIGZpbHRlciBzY29wZXMgKHRoZSB2YWxpZGF0ZSBmdW5jdGlvbiB3aWxsIHRocm93IGlmIHZhbGlkYXRpb24gZmFpbHMpXG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdXRTY29wZShyZXF1ZXN0LnNjb3BlcywgdHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHNjb3BlID0gcmVxdWVzdC5zY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcblxuICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwYXNzZXMgYW4gYWNjb3VudCBnaXZlIGhpbSB0aGUgcHJpb3JpdHlcbiAgICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSByZXF1ZXN0LmFjY291bnQgfHwgdGhpcy5nZXRBY2NvdW50KCk7XG5cbiAgICAgIC8vIGV4dHJhY3QgaWYgdGhlcmUgaXMgYW4gYWRhbElkVG9rZW4gc3Rhc2hlZCBpbiB0aGUgY2FjaGVcbiAgICAgIGNvbnN0IGFkYWxJZFRva2VuID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuYWRhbElkVG9rZW4pO1xuXG4gICAgICAvL2lmIHRoZXJlIGlzIG5vIGFjY291bnQgbG9nZ2VkIGluIGFuZCBubyBsb2dpbl9oaW50L3NpZCBpcyBwYXNzZWQgaW4gdGhlIHJlcXVlc3RcbiAgICAgIGlmICghYWNjb3VudCAmJiAhIShyZXF1ZXN0LnNpZCAgfHwgcmVxdWVzdC5sb2dpbkhpbnQpICYmIFV0aWxzLmlzRW1wdHkoYWRhbElkVG9rZW4pICkge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVXNlciBsb2dpbiBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgcmV0dXJuIHJlamVjdChDbGllbnRBdXRoRXJyb3IuY3JlYXRlVXNlckxvZ2luUmVxdWlyZWRFcnJvcigpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2VUeXBlID0gdGhpcy5nZXRUb2tlblR5cGUoYWNjb3VudCwgcmVxdWVzdC5zY29wZXMsIHRydWUpO1xuXG4gICAgICBsZXQgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxuICAgICAgICBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKHJlcXVlc3QuYXV0aG9yaXR5LCB0aGlzLmNvbmZpZy5hdXRoLnZhbGlkYXRlQXV0aG9yaXR5KSxcbiAgICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgICAgcmVxdWVzdC5zY29wZXMsXG4gICAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgICAgdGhpcy5nZXRSZWRpcmVjdFVyaSgpLFxuICAgICAgICByZXF1ZXN0LnN0YXRlXG4gICAgICApO1xuXG4gICAgICAvLyBwb3B1bGF0ZSBRdWVyeVBhcmFtZXRlcnMgKHNpZC9sb2dpbl9oaW50L2RvbWFpbl9oaW50KSBhbmQgYW55IG90aGVyIGV4dHJhUXVlcnlQYXJhbWV0ZXJzIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gICAgICBpZiAoVXRpbHMuaXNTU09QYXJhbShyZXF1ZXN0KSB8fCBhY2NvdW50KSB7XG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdCA9IHRoaXMucG9wdWxhdGVRdWVyeVBhcmFtcyhhY2NvdW50LCByZXF1ZXN0LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xuICAgICAgfVxuICAgICAgLy9pZiB1c2VyIGRpZG4ndCBwYXNzIGxvZ2luX2hpbnQvc2lkIGFuZCBhZGFsJ3MgaWR0b2tlbiBpcyBwcmVzZW50LCBleHRyYWN0IHRoZSBsb2dpbl9oaW50IGZyb20gdGhlIGFkYWxJZFRva2VuXG4gICAgICBlbHNlIGlmICghYWNjb3VudCAmJiAhVXRpbHMuaXNFbXB0eShhZGFsSWRUb2tlbikpIHtcbiAgICAgICAgLy8gaWYgYWRhbElkVG9rZW4gZXhpc3RzLCBleHRyYWN0IHRoZSBTU08gaW5mbyBmcm9tIHRoZSBzYW1lXG4gICAgICAgIGNvbnN0IGFkYWxJZFRva2VuT2JqZWN0ID0gVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xuICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiQURBTCdzIGlkVG9rZW4gZXhpc3RzLiBFeHRyYWN0aW5nIGxvZ2luIGluZm9ybWF0aW9uIGZyb20gQURBTCdzIGlkVG9rZW4gXCIpO1xuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QgPSB0aGlzLnBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudCwgbnVsbCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhZGFsSWRUb2tlbk9iamVjdCk7XG4gICAgICB9XG4gICAgICBsZXQgdXNlckNvbnRhaW5lZENsYWltcyA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdCB8fCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY2xhaW1zVmFsdWU7XG5cbiAgICAgIGxldCBhdXRoRXJyOiBBdXRoRXJyb3I7XG4gICAgICBsZXQgY2FjaGVSZXN1bHRSZXNwb25zZTtcblxuICAgICAgaWYgKCF1c2VyQ29udGFpbmVkQ2xhaW1zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY2FjaGVSZXN1bHRSZXNwb25zZSA9IHRoaXMuZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LCBhY2NvdW50KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGF1dGhFcnIgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHJlc29sdmUvcmVqZWN0IGJhc2VkIG9uIGNhY2hlUmVzdWx0XG4gICAgICBpZiAoY2FjaGVSZXN1bHRSZXNwb25zZSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiVG9rZW4gaXMgYWxyZWFkeSBpbiBjYWNoZSBmb3Igc2NvcGU6XCIgKyBzY29wZSk7XG4gICAgICAgIHJlc29sdmUoY2FjaGVSZXN1bHRSZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYXV0aEVycikge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKGF1dGhFcnIuZXJyb3JDb2RlICsgXCI6XCIgKyBhdXRoRXJyLmVycm9yTWVzc2FnZSk7XG4gICAgICAgIHJlamVjdChhdXRoRXJyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIHByb2NlZWQgd2l0aCBsb2dpblxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICh1c2VyQ29udGFpbmVkQ2xhaW1zKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlNraXBwZWQgY2FjaGUgbG9va3VwIHNpbmNlIGNsYWltcyB3ZXJlIGdpdmVuLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwiVG9rZW4gaXMgbm90IGluIGNhY2hlIGZvciBzY29wZTpcIiArIHNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWNoZSByZXN1bHQgY2FuIHJldHVybiBudWxsIGlmIGNhY2hlIGlzIGVtcHR5LiBJbiB0aGF0IGNhc2UsIHNldCBhdXRob3JpdHkgdG8gZGVmYXVsdCB2YWx1ZSBpZiBubyBhdXRob3JpdHkgaXMgcGFzc2VkIHRvIHRoZSBhcGkuXG4gICAgICAgIGlmICghc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eUluc3RhbmNlKSB7XG4gICAgICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSByZXF1ZXN0LmF1dGhvcml0eSA/IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UocmVxdWVzdC5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpIDogdGhpcy5hdXRob3JpdHlJbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjYWNoZSBtaXNzXG4gICAgICAgIHJldHVybiBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UucmVzb2x2ZUVuZHBvaW50c0FzeW5jKClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIHJlZnJlc2ggYXR0ZW1wdCB3aXRoIGlmcmFtZVxuICAgICAgICAgIC8vIEFscmVhZHkgcmVuZXdpbmcgZm9yIHRoaXMgc2NvcGUsIGNhbGxiYWNrIHdoZW4gd2UgZ2V0IHRoZSB0b2tlbi5cbiAgICAgICAgICBpZiAod2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSkge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIlJlbmV3IHRva2VuIGZvciBzY29wZTogXCIgKyBzY29wZSArIFwiIGlzIGluIHByb2dyZXNzLiBSZWdpc3RlcmluZyBjYWxsYmFja1wiKTtcbiAgICAgICAgICAgIC8vIEFjdGl2ZSByZW5ld2FscyBjb250YWlucyB0aGUgc3RhdGUgZm9yIGVhY2ggcmVuZXdhbC5cbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFjayh3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC5zY29wZXMgJiYgcmVxdWVzdC5zY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA+IC0xICYmIHJlcXVlc3Quc2NvcGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAvLyBBcHAgdXNlcyBpZFRva2VuIHRvIHNlbmQgdG8gYXBpIGVuZHBvaW50c1xuICAgICAgICAgICAgICAvLyBEZWZhdWx0IHNjb3BlIGlzIHRyYWNrZWQgYXMgY2xpZW50SWQgdG8gc3RvcmUgdGhpcyB0b2tlblxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdpbmcgaWRUb2tlblwiKTtcbiAgICAgICAgICAgICAgdGhpcy5yZW5ld0lkVG9rZW4ocmVxdWVzdC5zY29wZXMsIHJlc29sdmUsIHJlamVjdCwgYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHJlbmV3IGFjY2VzcyB0b2tlblxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdpbmcgYWNjZXNzdG9rZW5cIik7XG4gICAgICAgICAgICAgIHRoaXMucmVuZXdUb2tlbihyZXF1ZXN0LnNjb3BlcywgcmVzb2x2ZSwgcmVqZWN0LCBhY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJjb3VsZCBub3QgcmVzb2x2ZSBlbmRwb2ludHNcIik7XG4gICAgICAgICAgcmVqZWN0KENsaWVudEF1dGhFcnJvci5jcmVhdGVFbmRwb2ludFJlc29sdXRpb25FcnJvcihlcnIudG9TdHJpbmcoKSkpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIFJldHVybnMgd2hldGhlciBjdXJyZW50IHdpbmRvdyBpcyBpbiBpZnJhbSBmb3IgdG9rZW4gcmVuZXdhbFxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwdWJsaWMgaXNJbklmcmFtZSgpIHtcbiAgICAgIHJldHVybiB3aW5kb3cucGFyZW50ICE9PSB3aW5kb3c7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBSZXR1cm5zIHdoZXRoZXIgcGFyZW50IHdpbmRvdyBleGlzdHMgYW5kIGhhcyBtc2FsXG4gICAqL1xuICBwcml2YXRlIHBhcmVudElzTXNhbCgpIHtcbiAgICByZXR1cm4gd2luZG93LnBhcmVudCAhPT0gd2luZG93ICYmIHdpbmRvdy5wYXJlbnQubXNhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGlzSW50ZXJhY3Rpb25SZXF1aXJlZChlcnJvclN0cmluZzogc3RyaW5nKSA6IGJvb2xlYW4ge1xuICAgIGlmIChlcnJvclN0cmluZy5pbmRleE9mKFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIikgIT09IC0xIHx8XG4gICAgZXJyb3JTdHJpbmcuaW5kZXhPZihcImNvbnNlbnRfcmVxdWlyZWRcIikgIT09IC0xIHx8XG4gICAgZXJyb3JTdHJpbmcuaW5kZXhPZihcImxvZ2luX3JlcXVpcmVkXCIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIENhbGxpbmcgX2xvYWRGcmFtZSBidXQgd2l0aCBhIHRpbWVvdXQgdG8gc2lnbmFsIGZhaWx1cmUgaW4gbG9hZGZyYW1lU3RhdHVzLiBDYWxsYmFja3MgYXJlIGxlZnQuXG4gICAqIHJlZ2lzdGVyZWQgd2hlbiBuZXR3b3JrIGVycm9ycyBvY2N1ciBhbmQgc3Vic2VxdWVudCB0b2tlbiByZXF1ZXN0cyBmb3Igc2FtZSByZXNvdXJjZSBhcmUgcmVnaXN0ZXJlZCB0byB0aGUgcGVuZGluZyByZXF1ZXN0LlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIGxvYWRJZnJhbWVUaW1lb3V0KHVybE5hdmlnYXRlOiBzdHJpbmcsIGZyYW1lTmFtZTogc3RyaW5nLCBzY29wZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy9zZXQgaWZyYW1lIHNlc3Npb24gdG8gcGVuZGluZ1xuICAgIGNvbnN0IGV4cGVjdGVkU3RhdGUgPSB3aW5kb3cuYWN0aXZlUmVuZXdhbHNbc2NvcGVdO1xuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJTZXQgbG9hZGluZyBzdGF0ZSB0byBwZW5kaW5nIGZvcjogXCIgKyBzY29wZSArIFwiOlwiICsgZXhwZWN0ZWRTdGF0ZSk7XG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBleHBlY3RlZFN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0luUHJvZ3Jlc3MpO1xuICAgIHRoaXMubG9hZEZyYW1lKHVybE5hdmlnYXRlLCBmcmFtZU5hbWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnJlbmV3U3RhdHVzICsgZXhwZWN0ZWRTdGF0ZSkgPT09IENvbnN0YW50cy50b2tlblJlbmV3U3RhdHVzSW5Qcm9ncmVzcykge1xuICAgICAgICAvLyBmYWlsIHRoZSBpZnJhbWUgc2Vzc2lvbiBpZiBpdFwicyBpbiBwZW5kaW5nIHN0YXRlXG4gICAgICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJMb2FkaW5nIGZyYW1lIGhhcyB0aW1lZCBvdXQgYWZ0ZXI6IFwiICsgKHRoaXMuY29uZmlnLnN5c3RlbS5sb2FkRnJhbWVUaW1lb3V0IC8gMTAwMCkgKyBcIiBzZWNvbmRzIGZvciBzY29wZSBcIiArIHNjb3BlICsgXCI6XCIgKyBleHBlY3RlZFN0YXRlKTtcbiAgICAgICAgLy8gRXJyb3IgYWZ0ZXIgdGltZW91dFxuICAgICAgICBpZiAoZXhwZWN0ZWRTdGF0ZSAmJiB3aW5kb3cuY2FsbGJhY2tNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdKSB7XG4gICAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXShudWxsLCBDbGllbnRBdXRoRXJyb3IuY3JlYXRlVG9rZW5SZW5ld2FsVGltZW91dEVycm9yKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMucmVuZXdTdGF0dXMgKyBleHBlY3RlZFN0YXRlLCBDb25zdGFudHMudG9rZW5SZW5ld1N0YXR1c0NhbmNlbGxlZCk7XG4gICAgICB9XG4gICAgfSwgdGhpcy5jb25maWcuc3lzdGVtLmxvYWRGcmFtZVRpbWVvdXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogTG9hZHMgaWZyYW1lIHdpdGggYXV0aG9yaXphdGlvbiBlbmRwb2ludCBVUkxcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkRnJhbWUodXJsTmF2aWdhdGU6IHN0cmluZywgZnJhbWVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBUaGlzIHRyaWNrIG92ZXJjb21lcyBpZnJhbWUgbmF2aWdhdGlvbiBpbiBJRVxuICAgIC8vIElFIGRvZXMgbm90IGxvYWQgdGhlIHBhZ2UgY29uc2lzdGVudGx5IGluIGlmcmFtZVxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJMb2FkRnJhbWU6IFwiICsgZnJhbWVOYW1lKTtcbiAgICBjb25zdCBmcmFtZUNoZWNrID0gZnJhbWVOYW1lO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZUhhbmRsZSA9IHRoaXMuYWRkSGlkZGVuSUZyYW1lKGZyYW1lQ2hlY2spO1xuICAgICAgaWYgKGZyYW1lSGFuZGxlLnNyYyA9PT0gXCJcIiB8fCBmcmFtZUhhbmRsZS5zcmMgPT09IFwiYWJvdXQ6YmxhbmtcIikge1xuICAgICAgICBmcmFtZUhhbmRsZS5zcmMgPSB1cmxOYXZpZ2F0ZTtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mb1BpaShcIkZyYW1lIE5hbWUgOiBcIiArIGZyYW1lTmFtZSArIFwiIE5hdmlnYXRlZCB0bzogXCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0aGlzLmNvbmZpZy5zeXN0ZW0ubmF2aWdhdGVGcmFtZVdhaXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogQWRkcyB0aGUgaGlkZGVuIGlmcmFtZSBmb3Igc2lsZW50IHRva2VuIHJlbmV3YWwuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgYWRkSGlkZGVuSUZyYW1lKGlmcmFtZUlkOiBzdHJpbmcpOiBIVE1MSUZyYW1lRWxlbWVudCB7XG4gICAgaWYgKHR5cGVvZiBpZnJhbWVJZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcIkFkZCBtc2FsIGZyYW1lIHRvIGRvY3VtZW50OlwiICsgaWZyYW1lSWQpO1xuICAgIGxldCBhZGFsRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZnJhbWVJZCkgYXMgSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgaWYgKCFhZGFsRnJhbWUpIHtcbiAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFbGVtZW50ICYmXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgNS4wXCIpID09PSAtMSkpIHtcbiAgICAgICAgY29uc3QgaWZyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICAgICAgaWZyLnNldEF0dHJpYnV0ZShcImlkXCIsIGlmcmFtZUlkKTtcbiAgICAgICAgaWZyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBpZnIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGlmci5zdHlsZS53aWR0aCA9IGlmci5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgaWZyLnN0eWxlLmJvcmRlciA9IFwiMFwiO1xuICAgICAgICBhZGFsRnJhbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKGlmcikgYXMgSFRNTElGcmFtZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8aWZyYW1lIG5hbWU9J1wiICsgaWZyYW1lSWQgKyBcIicgaWQ9J1wiICsgaWZyYW1lSWQgKyBcIicgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+PC9pZnJhbWU+XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luZG93LmZyYW1lcyAmJiB3aW5kb3cuZnJhbWVzW2lmcmFtZUlkXSkge1xuICAgICAgICBhZGFsRnJhbWUgPSB3aW5kb3cuZnJhbWVzW2lmcmFtZUlkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWRhbEZyYW1lO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIEdlbmVyYWwgSGVscGVyc1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqXG4gICAqIEFkZHMgbG9naW5faGludCB0byBhdXRob3JpemF0aW9uIFVSTCB3aGljaCBpcyB1c2VkIHRvIHByZS1maWxsIHRoZSB1c2VybmFtZSBmaWVsZCBvZiBzaWduIGluIHBhZ2UgZm9yIHRoZSB1c2VyIGlmIGtub3duIGFoZWFkIG9mIHRpbWVcbiAgICogZG9tYWluX2hpbnQgY2FuIGJlIG9uZSBvZiB1c2Vycy9vcmdhbml6YXRpb25zIHdoaWNoIHdoZW4gYWRkZWQgc2tpcHMgdGhlIGVtYWlsIGJhc2VkIGRpc2NvdmVyeSBwcm9jZXNzIG9mIHRoZSB1c2VyXG4gICAqIGRvbWFpbl9yZXEgdXRpZCByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSBjbGllbnRJbmZvXG4gICAqIGxvZ2luX3JlcSB1aWQgcmVjZWl2ZWQgYXMgcGFydCBvZiBjbGllbnRJbmZvXG4gICAqIEFsc28gZG9lcyBhIHNhbml0eSBjaGVjayBmb3IgZXh0cmFRdWVyeVBhcmFtZXRlcnMgcGFzc2VkIGJ5IHRoZSB1c2VyIHRvIGVuc3VyZSBubyByZXBlYXQgcXVlcnlQYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7QGxpbmsgQWNjb3VudH0gYWNjb3VudCAtIEFjY291bnQgZm9yIHdoaWNoIHRoZSB0b2tlbiBpcyByZXF1ZXN0ZWRcbiAgICogQHBhcmFtIHF1ZXJ5cGFyYW1zXG4gICAqIEBwYXJhbSB7QGxpbmsgU2VydmVyUmVxdWVzdFBhcmFtZXRlcnN9XG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudE9iajogQWNjb3VudCwgcVBhcmFtczogUVBEaWN0LCBzZXJ2ZXJSZXFQYXJhbXM6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogUVBEaWN0IHtcblxuICAgIGNvbnN0IGFjY291bnQ6IEFjY291bnQgPSBhY2NvdW50T2JqIHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xuXG4gICAgLy8gVGhpcyBpcyBhIGZpbmFsIGNoZWNrIGZvciBhbGwgcXVlcnlQYXJhbXMgYWRkZWQgc28gZmFyOyBwcmVmZXJlbmNlIG9yZGVyOiBzaWQgPiBsb2dpbl9oaW50XG4gICAgLy8gc2lkIGNhbm5vdCBiZSBwYXNzZWQgYWxvbmcgd2l0aCBsb2dpbl9oaW50LCBoZW5jZSB3ZSBjaGVjayBib3RoIGFyZSBub3QgcG9wdWxhdGVkIHlldCBpbiBxdWVyeVBhcmFtZXRlcnMgc28gZmFyXG4gICAgaWYgKGFjY291bnQpIHtcbiAgICAgIC8vIHNpZFxuICAgICAgaWYgKGFjY291bnQuc2lkICYmIHNlcnZlclJlcVBhcmFtcy5wcm9tcHRWYWx1ZSA9PT0gUHJvbXB0U3RhdGUuTk9ORSkge1xuICAgICAgICBpZiAoIXFQYXJhbXNbU1NPVHlwZXMuU0lEXSAgJiYgIXFQYXJhbXNbU1NPVHlwZXMuTE9HSU5fSElOVF0pIHtcbiAgICAgICAgICBxUGFyYW1zID0gVXRpbHMuYWRkU1NPUGFyYW1ldGVyKFNTT1R5cGVzLlNJRCwgYWNjb3VudC5zaWQsIHFQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBsb2dpbl9oaW50XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gbG9naW5faGludCBpcyBhY2NvdW50LnVzZXJOYW1lXG4gICAgICAgIGlmICghcVBhcmFtc1tTU09UeXBlcy5MT0dJTl9ISU5UXSAgJiYgYWNjb3VudC51c2VyTmFtZSAmJiAhVXRpbHMuaXNFbXB0eShhY2NvdW50LnVzZXJOYW1lKSkge1xuICAgICAgICAgIHFQYXJhbXMgPSBVdGlscy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuTE9HSU5fSElOVCwgYWNjb3VudC51c2VyTmFtZSwgcVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFxUGFyYW1zW1NTT1R5cGVzLkRPTUFJTl9SRVFdICYmICFxUGFyYW1zW1NTT1R5cGVzLkxPR0lOX1JFUV0gKSB7XG4gICAgICAgIHFQYXJhbXMgPSBVdGlscy5hZGRTU09QYXJhbWV0ZXIoU1NPVHlwZXMuSE9NRUFDQ09VTlRfSUQsIGFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyLCBxUGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcVBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIFVzZWQgdG8gcmVkaXJlY3QgdGhlIGJyb3dzZXIgdG8gdGhlIFNUUyBhdXRob3JpemF0aW9uIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxOYXZpZ2F0ZSAtIFVSTCBvZiB0aGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludFxuICAgKi9cbiAgcHJpdmF0ZSBwcm9tcHRVc2VyKHVybE5hdmlnYXRlOiBzdHJpbmcpIHtcbiAgICAvLyBOYXZpZ2F0ZSBpZiB2YWxpZCBVUkxcbiAgICBpZiAodXJsTmF2aWdhdGUgJiYgIVV0aWxzLmlzRW1wdHkodXJsTmF2aWdhdGUpKSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGUgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmxOYXZpZ2F0ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIk5hdmlnYXRlIHVybCBpcyBlbXB0eVwiKTtcbiAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJOYXZpZ2F0ZSB1cmwgaXMgZW1wdHlcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogVXNlZCB0byBhZGQgdGhlIGRldmVsb3BlciByZXF1ZXN0ZWQgY2FsbGJhY2sgdG8gdGhlIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgdGhlIHNwZWNpZmllZCBzY29wZXMuIFRoZSB1cGRhdGVkIGFycmF5IGlzIHN0b3JlZCBvbiB0aGUgd2luZG93IG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwZWN0ZWRTdGF0ZSAtIFVuaXF1ZSBzdGF0ZSBpZGVudGlmaWVyIChndWlkKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNjb3BlIC0gRGV2ZWxvcGVyIHJlcXVlc3RlZCBwZXJtaXNzaW9ucy4gTm90IGFsbCBzY29wZXMgYXJlIGd1YXJhbnRlZWQgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VzcyB0b2tlbiByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSAtIFRoZSByZXNvbHZlIGZ1bmN0aW9uIG9mIHRoZSBwcm9taXNlIG9iamVjdC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IC0gVGhlIHJlamVjdCBmdW5jdGlvbiBvZiB0aGUgcHJvbWlzZSBvYmplY3QuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxsYmFjayhleHBlY3RlZFN0YXRlOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgLy8gdHJhY2sgYWN0aXZlIHJlbmV3YWxzXG4gICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IGV4cGVjdGVkU3RhdGU7XG5cbiAgICAvLyBpbml0aWFsaXplIGNhbGxiYWNrcyBtYXBwZWQgYXJyYXlcbiAgICBpZiAoIXdpbmRvdy5wcm9taXNlTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xuICAgICAgICB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0gPSBbXTtcbiAgICB9XG4gICAgLy8gaW5kZXhpbmcgb24gdGhlIGN1cnJlbnQgc3RhdGUsIHB1c2ggdGhlIGNhbGxiYWNrIHBhcmFtcyB0byBjYWxsYmFja3MgbWFwcGVkXG4gICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdLnB1c2goeyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9KTtcblxuICAgIC8vIFN0b3JlIHRoZSBzZXJ2ZXIgZXNwb25zZSBpbiB0aGUgY3VycmVudCB3aW5kb3c/P1xuICAgIGlmICghd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSkge1xuICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9XG4gICAgICAocmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgZXJyb3I6IEF1dGhFcnJvcikgPT4ge1xuICAgICAgICAvLyByZXNldCBhY3RpdmUgcmVuZXdhbHNcbiAgICAgICAgd2luZG93LmFjdGl2ZVJlbmV3YWxzW3Njb3BlXSA9IG51bGw7XG5cbiAgICAgICAgLy8gZm9yIGFsbCBwcm9taXNlTWFwcGVkdG9SZW5ld1N0YXRlcyBmb3IgYSBnaXZlbiAnc3RhdGUnIC0gY2FsbCB0aGUgcmVqZWN0L3Jlc29sdmUgd2l0aCBlcnJvci90b2tlbiByZXNwZWN0aXZlbHlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cucHJvbWlzZU1hcHBlZFRvUmVuZXdTdGF0ZXNbZXhwZWN0ZWRTdGF0ZV0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdW2ldLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkVycm9yIGFuZCByZXNwb25zZSBhcmUgYm90aCBudWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXRcbiAgICAgICAgd2luZG93LnByb21pc2VNYXBwZWRUb1JlbmV3U3RhdGVzW2V4cGVjdGVkU3RhdGVdID0gbnVsbDtcbiAgICAgICAgd2luZG93LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tleHBlY3RlZFN0YXRlXSA9IG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBMb2dvdXRcblxuICAvKipcbiAgICogVXNlZCB0byBsb2cgb3V0IHRoZSBjdXJyZW50IHVzZXIsIGFuZCByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgcG9zdExvZ291dFJlZGlyZWN0VXJpLlxuICAgKiBEZWZhdWx0cyBiZWhhdmlvdXIgaXMgdG8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cbiAgICovXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICB0aGlzLmFjY291bnQgPSBudWxsO1xuICAgIGxldCBsb2dvdXQgPSBcIlwiO1xuICAgIGlmICh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKSB7XG4gICAgICBsb2dvdXQgPSBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaT1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFBvc3RMb2dvdXRSZWRpcmVjdFVyaSgpKTtcbiAgICB9XG4gICAgY29uc3QgdXJsTmF2aWdhdGUgPSB0aGlzLmF1dGhvcml0eSArIFwib2F1dGgyL3YyLjAvbG9nb3V0P1wiICsgbG9nb3V0O1xuICAgIHRoaXMucHJvbXB0VXNlcih1cmxOYXZpZ2F0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBDbGVhciBhbGwgYWNjZXNzIHRva2VucyBpbiB0aGUgY2FjaGUuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByb3RlY3RlZCBjbGVhckNhY2hlKCk6IHZvaWQge1xuICAgIHdpbmRvdy5yZW5ld1N0YXRlcyA9IFtdO1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUl0ZW0oSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5JdGVtc1tpXS5rZXkpKTtcbiAgICB9XG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVzZXRDYWNoZUl0ZW1zKCk7XG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIENsZWFyIGEgZ2l2ZW4gYWNjZXNzIHRva2VuIGZyb20gdGhlIGNhY2hlLlxuICAgKlxuICAgKiBAcGFyYW0gYWNjZXNzVG9rZW5cbiAgICovXG4gIHByb3RlY3RlZCBjbGVhckNhY2hlRm9yU2NvcGUoYWNjZXNzVG9rZW46IHN0cmluZykge1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY2Vzc1Rva2VuSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHRva2VuID0gYWNjZXNzVG9rZW5JdGVtc1tpXTtcbiAgICAgICAgaWYgKHRva2VuLnZhbHVlLmFjY2Vzc1Rva2VuID09PSBhY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeSh0b2tlbi5rZXkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBSZXNwb25zZVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIFVzZWQgdG8gY2FsbCB0aGUgY29uc3RydWN0b3IgY2FsbGJhY2sgd2l0aCB0aGUgdG9rZW4vZXJyb3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtoYXNoPXdpbmRvdy5sb2NhdGlvbi5oYXNoXSAtIEhhc2ggZnJhZ21lbnQgb2YgVXJsLlxuICAgKi9cbiAgcHJpdmF0ZSBwcm9jZXNzQ2FsbEJhY2soaGFzaDogc3RyaW5nLCBzdGF0ZUluZm86IFJlc3BvbnNlU3RhdGVJbmZvLCBwYXJlbnRDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcIlByb2Nlc3NpbmcgdGhlIGNhbGxiYWNrIGZyb20gcmVkaXJlY3QgcmVzcG9uc2VcIik7XG4gICAgLy8gZ2V0IHRoZSBzdGF0ZSBpbmZvIGZyb20gdGhlIGhhc2hcbiAgICBpZiAoIXN0YXRlSW5mbykge1xuICAgICAgc3RhdGVJbmZvID0gdGhpcy5nZXRSZXNwb25zZVN0YXRlKGhhc2gpO1xuICAgIH1cblxuICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZTtcbiAgICBsZXQgYXV0aEVyciA6IEF1dGhFcnJvcjtcbiAgICAvLyBTYXZlIHRoZSB0b2tlbiBpbmZvIGZyb20gdGhlIGhhc2hcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSB0aGlzLnNhdmVUb2tlbkZyb21IYXNoKGhhc2gsIHN0YXRlSW5mbyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhdXRoRXJyID0gZXJyO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBoYXNoIGZyb20gdGhlIGNhY2hlXG4gICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShDb25zdGFudHMudXJsSGFzaCk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gQ2xlYXIgdGhlIGNvb2tpZSBpbiB0aGUgaGFzaFxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UuY2xlYXJDb29raWUoKTtcbiAgICAgIGNvbnN0IGFjY291bnRTdGF0ZTogc3RyaW5nID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBpZiAoKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLnJlbmV3VG9rZW4pIHx8IHJlc3BvbnNlLmFjY2Vzc1Rva2VuKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIldpbmRvdyBpcyBpbiBpZnJhbWUsIGFjcXVpcmluZyB0b2tlbiBzaWxlbnRseVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIudmVyYm9zZShcImFjcXVpcmluZyB0b2tlbiBpbnRlcmFjdGl2ZSBpbiBwcm9ncmVzc1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzcG9uc2UudG9rZW5UeXBlID0gQ29uc3RhbnRzLmFjY2Vzc1Rva2VuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLmxvZ2luKSB7XG4gICAgICAgICAgcmVzcG9uc2UudG9rZW5UeXBlID0gQ29uc3RhbnRzLmlkVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJlbnRDYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMudG9rZW5SZWNlaXZlZENhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXBhcmVudENhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZXJyb3JSZWNlaXZlZENhbGxiYWNrKGF1dGhFcnIsIGFjY291bnRTdGF0ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGFyZW50Q2FsbGJhY2socmVzcG9uc2UsIGF1dGhFcnIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBpbiB0b2tlbiByZWNlaXZlZCBjYWxsYmFjayBmdW5jdGlvbjogXCIgKyBlcnIpO1xuICAgICAgdGhyb3cgQ2xpZW50QXV0aEVycm9yLmNyZWF0ZUVycm9ySW5DYWxsYmFja0Z1bmN0aW9uKGVyci50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBUaGlzIG1ldGhvZCBtdXN0IGJlIGNhbGxlZCBmb3IgcHJvY2Vzc2luZyB0aGUgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSB0aGUgU1RTLiBJdCBleHRyYWN0cyB0aGUgaGFzaCwgcHJvY2Vzc2VzIHRoZSB0b2tlbiBvciBlcnJvciBpbmZvcm1hdGlvbiBhbmQgc2F2ZXMgaXQgaW4gdGhlIGNhY2hlLiBJdCB0aGVuXG4gICAqIGNhbGxzIHRoZSByZWdpc3RlcmVkIGNhbGxiYWNrcyBpbiBjYXNlIG9mIHJlZGlyZWN0IG9yIHJlc29sdmVzIHRoZSBwcm9taXNlcyB3aXRoIHRoZSByZXN1bHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbaGFzaD13aW5kb3cubG9jYXRpb24uaGFzaF0gLSBIYXNoIGZyYWdtZW50IG9mIFVybC5cbiAgICovXG4gIHByaXZhdGUgaGFuZGxlQXV0aGVudGljYXRpb25SZXNwb25zZShoYXNoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyByZXRyaWV2ZSB0aGUgaGFzaFxuICAgIGlmIChoYXNoID09IG51bGwpIHtcbiAgICAgIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICB9XG5cbiAgICBsZXQgc2VsZiA9IG51bGw7XG4gICAgbGV0IGlzUG9wdXA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgaXNXaW5kb3dPcGVuZXJNc2FsID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCB3aW5kb3cgb3BlbmVkIHRoZSBpRnJhbWUvcG9wdXBcbiAgICB0cnkge1xuICAgICAgaXNXaW5kb3dPcGVuZXJNc2FsID0gd2luZG93Lm9wZW5lciAmJiB3aW5kb3cub3BlbmVyLm1zYWwgJiYgd2luZG93Lm9wZW5lci5tc2FsICE9PSB3aW5kb3cubXNhbDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGVyciA9IFNlY3VyaXR5RXJyb3I6IEJsb2NrZWQgYSBmcmFtZSB3aXRoIG9yaWdpbiBcIlt1cmxdXCIgZnJvbSBhY2Nlc3NpbmcgYSBjcm9zcy1vcmlnaW4gZnJhbWUuXG4gICAgICBpc1dpbmRvd09wZW5lck1zYWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIHNlbGYgdG8gdGhlIHdpbmRvdyB0aGF0IGNyZWF0ZWQgdGhlIHBvcHVwL2lmcmFtZVxuICAgIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcbiAgICAgIHNlbGYgPSB3aW5kb3cub3BlbmVyLm1zYWw7XG4gICAgICBpc1BvcHVwID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYXJlbnQgJiYgd2luZG93LnBhcmVudC5tc2FsKSB7XG4gICAgICBzZWxmID0gd2luZG93LnBhcmVudC5tc2FsO1xuICAgIH1cblxuICAgIC8vIGlmICh3aW5kb3cucGFyZW50ICE9PSB3aW5kb3cpLCBieSB1c2luZyBzZWxmLCB3aW5kb3cucGFyZW50IGJlY29tZXMgZXF1YWwgdG8gd2luZG93IGluIGdldFJlc3BvbnNlU3RhdGUgbWV0aG9kIHNwZWNpZmljYWxseVxuICAgIGNvbnN0IHN0YXRlSW5mbyA9IHNlbGYuZ2V0UmVzcG9uc2VTdGF0ZShoYXNoKTtcblxuICAgIGxldCB0b2tlblJlc3BvbnNlQ2FsbGJhY2s6IChyZXNwb25zZTogQXV0aFJlc3BvbnNlLCBlcnJvcjogQXV0aEVycm9yKSA9PiB2b2lkID0gbnVsbDtcblxuICAgIHNlbGYubG9nZ2VyLmluZm8oXCJSZXR1cm5lZCBmcm9tIHJlZGlyZWN0IHVybFwiKTtcbiAgICAvLyBJZiBwYXJlbnQgd2luZG93IGlzIHRoZSBtc2FsIGluc3RhbmNlIHdoaWNoIG9wZW5lZCB0aGUgY3VycmVudCB3aW5kb3cgKGlmcmFtZSlcbiAgICBpZiAodGhpcy5wYXJlbnRJc01zYWwoKSkge1xuICAgICAgICB0b2tlblJlc3BvbnNlQ2FsbGJhY2sgPSB3aW5kb3cucGFyZW50LmNhbGxiYWNrTWFwcGVkVG9SZW5ld1N0YXRlc1tzdGF0ZUluZm8uc3RhdGVdO1xuICAgIH1cbiAgICAvLyBDdXJyZW50IHdpbmRvdyBpcyB3aW5kb3cgb3BlbmVyIChwb3B1cClcbiAgICBlbHNlIGlmIChpc1dpbmRvd09wZW5lck1zYWwpIHtcbiAgICAgICAgdG9rZW5SZXNwb25zZUNhbGxiYWNrID0gd2luZG93Lm9wZW5lci5jYWxsYmFja01hcHBlZFRvUmVuZXdTdGF0ZXNbc3RhdGVJbmZvLnN0YXRlXTtcbiAgICB9XG4gICAgLy8gUmVkaXJlY3QgY2FzZXNcbiAgICBlbHNlIHtcbiAgICAgIHRva2VuUmVzcG9uc2VDYWxsYmFjayA9IG51bGw7XG4gICAgICAvLyBpZiBzZXQgdG8gbmF2aWdhdGUgdG8gbG9naW5SZXF1ZXN0IHBhZ2UgcG9zdCBsb2dpblxuICAgICAgaWYgKHNlbGYuY29uZmlnLmF1dGgubmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybCkge1xuICAgICAgICBzZWxmLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy51cmxIYXNoLCBoYXNoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgPT09IHdpbmRvdyAmJiAhaXNQb3B1cCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2VsZi5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubG9naW5SZXF1ZXN0LCBzZWxmLmluQ29va2llKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnJlZGlyZWN0Q2FsbGJhY2tzU2V0KSB7XG4gICAgICAgIC8vIFdlIHJlYWNoZWQgdGhpcyBwb2ludCB0b28gZWFybHksIHJldHVybiBhbmQgY29tZSBiYWNrIGxhdGVyXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLnByb2Nlc3NDYWxsQmFjayhoYXNoLCBzdGF0ZUluZm8sIHRva2VuUmVzcG9uc2VDYWxsYmFjayk7XG5cbiAgICAvLyBJZiBjdXJyZW50IHdpbmRvdyBpcyBvcGVuZXIsIGNsb3NlIGFsbCB3aW5kb3dzXG4gICAgaWYgKGlzV2luZG93T3BlbmVyTXNhbCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cub3BlbmVyLm9wZW5lZFdpbmRvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgd2luZG93Lm9wZW5lci5vcGVuZWRXaW5kb3dzW2ldLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogUmV0dXJucyBkZXNlcmlhbGl6ZWQgcG9ydGlvbiBvZiBVUkwgaGFzaFxuICAgKiBAcGFyYW0gaGFzaFxuICAgKi9cbiAgcHJpdmF0ZSBkZXNlcmlhbGl6ZUhhc2goaGFzaDogc3RyaW5nKSB7XG4gICAgaGFzaCA9IHRoaXMuZ2V0SGFzaChoYXNoKTtcbiAgICByZXR1cm4gVXRpbHMuZGVzZXJpYWxpemUoaGFzaCk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBDcmVhdGVzIGEgc3RhdGVJbmZvIG9iamVjdCBmcm9tIHRoZSBVUkwgZnJhZ21lbnQgYW5kIHJldHVybnMgaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICAtICBIYXNoIHBhc3NlZCBmcm9tIHJlZGlyZWN0IHBhZ2VcbiAgICogQHJldHVybnMge1Rva2VuUmVzcG9uc2V9IGFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFEIGNvbXByaXNpbmcgb2YgdGhlIGtleXMgLSBwYXJhbWV0ZXJzLCByZXF1ZXN0VHlwZSwgc3RhdGVNYXRjaCwgc3RhdGVSZXNwb25zZSBhbmQgdmFsaWQuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNwb25zZVN0YXRlKGhhc2g6IHN0cmluZyk6IFJlc3BvbnNlU3RhdGVJbmZvIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gdGhpcy5kZXNlcmlhbGl6ZUhhc2goaGFzaCk7XG4gICAgbGV0IHN0YXRlUmVzcG9uc2U6IFJlc3BvbnNlU3RhdGVJbmZvO1xuICAgIGlmICghcGFyYW1ldGVycykge1xuICAgICAgdGhyb3cgQXV0aEVycm9yLmNyZWF0ZVVuZXhwZWN0ZWRFcnJvcihcIkhhc2ggd2FzIG5vdCBwYXJzZWQgY29ycmVjdGx5LlwiKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKSkge1xuICAgICAgc3RhdGVSZXNwb25zZSA9IHtcbiAgICAgICAgcmVxdWVzdFR5cGU6IENvbnN0YW50cy51bmtub3duLFxuICAgICAgICBzdGF0ZTogcGFyYW1ldGVycy5zdGF0ZSxcbiAgICAgICAgc3RhdGVNYXRjaDogZmFsc2VcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJIYXNoIGRvZXMgbm90IGNvbnRhaW4gc3RhdGUuXCIpO1xuICAgIH1cbiAgICAvLyBhc3luYyBjYWxscyBjYW4gZmlyZSBpZnJhbWUgYW5kIGxvZ2luIHJlcXVlc3QgYXQgdGhlIHNhbWUgdGltZSBpZiBkZXZlbG9wZXIgZG9lcyBub3QgdXNlIHRoZSBBUEkgYXMgZXhwZWN0ZWRcbiAgICAvLyBpbmNvbWluZyBjYWxsYmFjayBuZWVkcyB0byBiZSBsb29rZWQgdXAgdG8gZmluZCB0aGUgcmVxdWVzdCB0eXBlXG5cbiAgICAvLyBsb2dpblJlZGlyZWN0XG4gICAgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlTG9naW4sIHRoaXMuaW5Db29raWUpIHx8IHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSkgeyAvLyBsb2dpblJlZGlyZWN0XG4gICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLmxvZ2luO1xuICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcbiAgICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xuICAgIH1cbiAgICAvLyBhY3F1aXJlVG9rZW5SZWRpcmVjdFxuICAgIGVsc2UgaWYgKHN0YXRlUmVzcG9uc2Uuc3RhdGUgPT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnN0YXRlQWNxdWlyZVRva2VuLCB0aGlzLmluQ29va2llKSkgeyAvL2FjcXVpcmVUb2tlblJlZGlyZWN0XG4gICAgICBzdGF0ZVJlc3BvbnNlLnJlcXVlc3RUeXBlID0gQ29uc3RhbnRzLnJlbmV3VG9rZW47XG4gICAgICBzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2ggPSB0cnVlO1xuICAgICAgcmV0dXJuIHN0YXRlUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLy8gZXh0ZXJuYWwgYXBpIHJlcXVlc3RzIG1heSBoYXZlIG1hbnkgcmVuZXd0b2tlbiByZXF1ZXN0cyBmb3IgZGlmZmVyZW50IHJlc291cmNlXG4gICAgaWYgKCFzdGF0ZVJlc3BvbnNlLnN0YXRlTWF0Y2gpIHtcbiAgICAgIHN0YXRlUmVzcG9uc2UucmVxdWVzdFR5cGUgPSB3aW5kb3cucmVxdWVzdFR5cGU7XG4gICAgICBjb25zdCBzdGF0ZXNJblBhcmVudENvbnRleHQgPSB3aW5kb3cucmVuZXdTdGF0ZXM7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlc0luUGFyZW50Q29udGV4dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RhdGVzSW5QYXJlbnRDb250ZXh0W2ldID09PSBzdGF0ZVJlc3BvbnNlLnN0YXRlKSB7XG4gICAgICAgICAgc3RhdGVSZXNwb25zZS5zdGF0ZU1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZVJlc3BvbnNlO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFRva2VuIFByb2Nlc3NpbmcgKEV4dHJhY3QgdG8gVG9rZW5Qcm9jZXNzaW5nLnRzKVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIFVzZWQgdG8gZ2V0IHRva2VuIGZvciB0aGUgc3BlY2lmaWVkIHNldCBvZiBzY29wZXMgZnJvbSB0aGUgY2FjaGVcbiAgICogQHBhcmFtIHtAbGluayBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVyc30gLSBSZXF1ZXN0IHNlbnQgdG8gdGhlIFNUUyB0byBvYnRhaW4gYW4gaWRfdG9rZW4vYWNjZXNzX3Rva2VuXG4gICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCAtIEFjY291bnQgZm9yIHdoaWNoIHRoZSBzY29wZXMgd2VyZSByZXF1ZXN0ZWRcbiAgICovXG4gIHByaXZhdGUgZ2V0Q2FjaGVkVG9rZW4oc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0OiBTZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycywgYWNjb3VudDogQWNjb3VudCk6IEF1dGhSZXNwb25zZSB7XG4gICAgbGV0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtOiBBY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IG51bGw7XG4gICAgY29uc3Qgc2NvcGVzID0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnNjb3BlcztcblxuICAgIC8vIGZpbHRlciBieSBjbGllbnRJZCBhbmQgYWNjb3VudFxuICAgIGNvbnN0IHRva2VuQ2FjaGVJdGVtcyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEFsbEFjY2Vzc1Rva2Vucyh0aGlzLmNsaWVudElkLCBhY2NvdW50ID8gYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIgOiBudWxsKTtcblxuICAgIC8vIE5vIG1hdGNoIGZvdW5kIGFmdGVyIGluaXRpYWwgZmlsdGVyaW5nXG4gICAgaWYgKHRva2VuQ2FjaGVJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXM6IEFycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPiA9IFtdO1xuXG4gICAgLy8gaWYgbm8gYXV0aG9yaXR5IHBhc3NlZFxuICAgIGlmICghc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSkge1xuICAgICAgLy8gZmlsdGVyIGJ5IHNjb3BlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYWNoZUl0ZW0gPSB0b2tlbkNhY2hlSXRlbXNbaV07XG4gICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgaWYgKFV0aWxzLmNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzLCBzY29wZXMpKSB7XG4gICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGNhY2hlSXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYgb25seSBvbmUgY2FjaGVkIHRva2VuIGZvdW5kXG4gICAgICBpZiAoZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBmaWx0ZXJlZEl0ZW1zWzBdO1xuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgfVxuICAgICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjYWNoZWQgdG9rZW4gaXMgZm91bmRcbiAgICAgIGVsc2UgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgICAvLyBpZiBubyBtYXRjaCBmb3VuZCwgY2hlY2sgaWYgdGhlcmUgd2FzIGEgc2luZ2xlIGF1dGhvcml0eSB1c2VkXG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgYXV0aG9yaXR5TGlzdCA9IHRoaXMuZ2V0VW5pcXVlQXV0aG9yaXR5KHRva2VuQ2FjaGVJdGVtcywgXCJhdXRob3JpdHlcIik7XG4gICAgICAgIGlmIChhdXRob3JpdHlMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVBdXRob3JpdGllc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuYXV0aG9yaXR5SW5zdGFuY2UgPSBBdXRob3JpdHlGYWN0b3J5LkNyZWF0ZUluc3RhbmNlKGF1dGhvcml0eUxpc3RbMF0sIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiBhbiBhdXRob3JpdHkgaXMgcGFzc2VkIGluIHRoZSBBUElcbiAgICBlbHNlIHtcbiAgICAgIC8vIGZpbHRlciBieSBhdXRob3JpdHkgYW5kIHNjb3BlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRva2VuQ2FjaGVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjYWNoZUl0ZW0gPSB0b2tlbkNhY2hlSXRlbXNbaV07XG4gICAgICAgIGNvbnN0IGNhY2hlZFNjb3BlcyA9IGNhY2hlSXRlbS5rZXkuc2NvcGVzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgaWYgKFV0aWxzLmNvbnRhaW5zU2NvcGUoY2FjaGVkU2NvcGVzLCBzY29wZXMpICYmIFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShjYWNoZUl0ZW0ua2V5LmF1dGhvcml0eSkgPT09IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5hdXRob3JpdHkpIHtcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goY2FjaGVJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbm8gbWF0Y2hcbiAgICAgIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIGlmIG9ubHkgb25lIGNhY2hlZFRva2VuIEZvdW5kXG4gICAgICBlbHNlIGlmIChmaWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gaWYgbW9yZSB0aGFuIGNhY2hlZCB0b2tlbiBpcyBmb3VuZFxuICAgICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTXVsdGlwbGVNYXRjaGluZ1Rva2Vuc0luQ2FjaGVFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtICE9IG51bGwpIHtcbiAgICAgIGxldCBleHBpcmVkID0gTnVtYmVyKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmV4cGlyZXNJbik7XG4gICAgICAvLyBJZiBleHBpcmF0aW9uIGlzIHdpdGhpbiBvZmZzZXQsIGl0IHdpbGwgZm9yY2UgcmVuZXdcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuY29uZmlnLnN5c3RlbS50b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzIHx8IDMwMDtcbiAgICAgIGlmIChleHBpcmVkICYmIChleHBpcmVkID4gVXRpbHMubm93KCkgKyBvZmZzZXQpKSB7XG4gICAgICAgIGxldCBpZFRva2VuID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW0udmFsdWUuaWRUb2tlbik7XG4gICAgICAgIGlmICghYWNjb3VudCkge1xuICAgICAgICAgIGFjY291bnQgPSB0aGlzLmdldEFjY291bnQoKTtcbiAgICAgICAgICBpZiAoIWFjY291bnQpIHtcbiAgICAgICAgICAgIHRocm93IEF1dGhFcnJvci5jcmVhdGVVbmV4cGVjdGVkRXJyb3IoXCJBY2NvdW50IHNob3VsZCBub3QgYmUgbnVsbCBoZXJlLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYVN0YXRlID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlIDogQXV0aFJlc3BvbnNlID0ge1xuICAgICAgICAgIHVuaXF1ZUlkOiBcIlwiLFxuICAgICAgICAgIHRlbmFudElkOiBcIlwiLFxuICAgICAgICAgIHRva2VuVHlwZTogKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmlkVG9rZW4gPT09IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmFjY2Vzc1Rva2VuKSA/IENvbnN0YW50cy5pZFRva2VuIDogQ29uc3RhbnRzLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXG4gICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLnZhbHVlLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgIHNjb3BlczogYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIiksXG4gICAgICAgICAgZXhwaXJlc09uOiBuZXcgRGF0ZShleHBpcmVkICogMTAwMCksXG4gICAgICAgICAgYWNjb3VudDogYWNjb3VudCxcbiAgICAgICAgICBhY2NvdW50U3RhdGU6IGFTdGF0ZSxcbiAgICAgICAgfTtcbiAgICAgICAgVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBpZFRva2VuKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShmaWx0ZXJlZEl0ZW1zWzBdLmtleSkpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogVXNlZCB0byBnZXQgYSB1bmlxdWUgbGlzdCBvZiBhdXRob3JpdHVlcyBmcm9tIHRoZSBjYWNoZVxuICAgKiBAcGFyYW0ge0FycmF5PEFjY2Vzc1Rva2VuQ2FjaGVJdGVtPn0gIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyAtIGFjY2Vzc1Rva2VuQ2FjaGVJdGVtcyBzYXZlZCBpbiB0aGUgY2FjaGVcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRVbmlxdWVBdXRob3JpdHkoYWNjZXNzVG9rZW5DYWNoZUl0ZW1zOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4sIHByb3BlcnR5OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBjb25zdCBhdXRob3JpdHlMaXN0OiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgY29uc3QgZmxhZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmtleS5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgKGZsYWdzLmluZGV4T2YoZWxlbWVudC5rZXlbcHJvcGVydHldKSA9PT0gLTEpKSB7XG4gICAgICAgIGZsYWdzLnB1c2goZWxlbWVudC5rZXlbcHJvcGVydHldKTtcbiAgICAgICAgYXV0aG9yaXR5TGlzdC5wdXNoKGVsZW1lbnQua2V5W3Byb3BlcnR5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGF1dGhvcml0eUxpc3Q7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBDaGVjayBpZiBBREFMIGlkX3Rva2VuIGV4aXN0cyBhbmQgcmV0dXJuIGlmIGV4aXN0cy5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgZXh0cmFjdEFEQUxJZFRva2VuKCk6IGFueSB7XG4gICAgY29uc3QgYWRhbElkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5hZGFsSWRUb2tlbik7XG4gICAgaWYgKCFVdGlscy5pc0VtcHR5KGFkYWxJZFRva2VuKSkge1xuICAgICAgICByZXR1cm4gVXRpbHMuZXh0cmFjdElkVG9rZW4oYWRhbElkVG9rZW4pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIEFjcXVpcmVzIGFjY2VzcyB0b2tlbiB1c2luZyBhIGhpZGRlbiBpZnJhbWUuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgcmVuZXdUb2tlbihzY29wZXM6IEFycmF5PHN0cmluZz4sIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhY2NvdW50OiBBY2NvdW50LCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgY29uc3Qgc2NvcGUgPSBzY29wZXMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLmxvZ2dlci52ZXJib3NlKFwicmVuZXdUb2tlbiBpcyBjYWxsZWQgZm9yIHNjb3BlOlwiICsgc2NvcGUpO1xuICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gdGhpcy5hZGRIaWRkZW5JRnJhbWUoXCJtc2FsUmVuZXdGcmFtZVwiICsgc2NvcGUpO1xuXG4gICAgLy8gQ2FjaGUgYWNjb3VudCBhbmQgYXV0aG9yaXR5XG4gICAgdGhpcy5zZXRBY2NvdW50Q2FjaGUoYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICB0aGlzLnNldEF1dGhvcml0eUNhY2hlKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSk7XG5cbiAgICAvLyByZW5ldyBoYXBwZW5zIGluIGlmcmFtZSwgc28gaXQga2VlcHMgamF2YXNjcmlwdCBjb250ZXh0XG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Qubm9uY2UsIHRoaXMuaW5Db29raWUpO1xuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyB0b2tlbiBFeHBlY3RlZCBzdGF0ZTogXCIgKyBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Quc3RhdGUpO1xuXG4gICAgLy8gQnVpbGQgdXJsTmF2aWdhdGUgd2l0aCBcInByb21wdD1ub25lXCIgYW5kIG5hdmlnYXRlIHRvIFVSTCBpbiBoaWRkZW4gaUZyYW1lXG4gICAgbGV0IHVybE5hdmlnYXRlID0gVXRpbHMudXJsUmVtb3ZlUXVlcnlTdHJpbmdQYXJhbWV0ZXIoc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmNyZWF0ZU5hdmlnYXRlVXJsKHNjb3BlcyksIENvbnN0YW50cy5wcm9tcHQpICsgQ29uc3RhbnRzLnByb21wdF9ub25lO1xuXG4gICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcbiAgICB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2soc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlLCBzY29wZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGUgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgZnJhbWVIYW5kbGUuc3JjID0gXCJhYm91dDpibGFua1wiO1xuICAgIHRoaXMubG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGUsIFwibXNhbFJlbmV3RnJhbWVcIiArIHNjb3BlLCBzY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBSZW5ld3MgaWR0b2tlbiBmb3IgYXBwXCJzIG93biBiYWNrZW5kIHdoZW4gY2xpZW50SWQgaXMgcGFzc2VkIGFzIGEgc2luZ2xlIHNjb3BlIGluIHRoZSBzY29wZXMgYXJyYXkuXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHByaXZhdGUgcmVuZXdJZFRva2VuKHNjb3BlczogQXJyYXk8c3RyaW5nPiwgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24sIGFjY291bnQ6IEFjY291bnQsIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdDogU2VydmVyUmVxdWVzdFBhcmFtZXRlcnMpOiB2b2lkIHtcblxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5ld2lkVG9rZW4gaXMgY2FsbGVkXCIpO1xuICAgIGNvbnN0IGZyYW1lSGFuZGxlID0gdGhpcy5hZGRIaWRkZW5JRnJhbWUoXCJtc2FsSWRUb2tlbkZyYW1lXCIpO1xuXG4gICAgLy8gQ2FjaGUgYWNjb3VudCBhbmQgYXV0aG9yaXR5XG4gICAgdGhpcy5zZXRBY2NvdW50Q2FjaGUoYWNjb3VudCwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICB0aGlzLnNldEF1dGhvcml0eUNhY2hlKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LmF1dGhvcml0eSk7XG5cbiAgICAvLyBDYWNoZSBub25jZVxuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0Lm5vbmNlLCB0aGlzLmluQ29va2llKTtcblxuICAgIHRoaXMubG9nZ2VyLnZlcmJvc2UoXCJSZW5ldyBJZHRva2VuIEV4cGVjdGVkIHN0YXRlOiBcIiArIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSk7XG5cbiAgICAvLyBCdWlsZCB1cmxOYXZpZ2F0ZSB3aXRoIFwicHJvbXB0PW5vbmVcIiBhbmQgbmF2aWdhdGUgdG8gVVJMIGluIGhpZGRlbiBpRnJhbWVcbiAgICBsZXQgdXJsTmF2aWdhdGUgPSBVdGlscy51cmxSZW1vdmVRdWVyeVN0cmluZ1BhcmFtZXRlcihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzKSwgQ29uc3RhbnRzLnByb21wdCkgKyBDb25zdGFudHMucHJvbXB0X25vbmU7XG5cbiAgICBpZiAodGhpcy5zaWxlbnRMb2dpbikge1xuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMubG9naW47XG4gICAgICAgIHRoaXMuc2lsZW50QXV0aGVudGljYXRpb25TdGF0ZSA9IHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVxdWVzdFR5cGUgPSBDb25zdGFudHMucmVuZXdUb2tlbjtcbiAgICAgICAgd2luZG93LnJlbmV3U3RhdGVzLnB1c2goc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnN0YXRlKTtcbiAgICB9XG5cbiAgICAvLyBub3RlOiBzY29wZSBoZXJlIGlzIGNsaWVudElkXG4gICAgdGhpcy5yZWdpc3RlckNhbGxiYWNrKHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5zdGF0ZSwgdGhpcy5jbGllbnRJZCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvUGlpKFwiTmF2aWdhdGUgdG86XCIgKyB1cmxOYXZpZ2F0ZSk7XG4gICAgZnJhbWVIYW5kbGUuc3JjID0gXCJhYm91dDpibGFua1wiO1xuICAgIHRoaXMubG9hZElmcmFtZVRpbWVvdXQodXJsTmF2aWdhdGUsIFwibXNhbElkVG9rZW5GcmFtZVwiLCB0aGlzLmNsaWVudElkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIG11c3QgYmUgY2FsbGVkIGZvciBwcm9jZXNzaW5nIHRoZSByZXNwb25zZSByZWNlaXZlZCBmcm9tIEFBRC4gSXQgZXh0cmFjdHMgdGhlIGhhc2gsIHByb2Nlc3NlcyB0aGUgdG9rZW4gb3IgZXJyb3IsIHNhdmVzIGl0IGluIHRoZSBjYWNoZSBhbmQgY2FsbHMgdGhlIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIHdpdGggdGhlIHJlc3VsdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGF1dGhvcml0eSBhdXRob3JpdHkgcmVjZWl2ZWQgaW4gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFELlxuICAgKiBAcGFyYW0ge1Rva2VuUmVzcG9uc2V9IHJlcXVlc3RJbmZvIGFuIG9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHJlZGlyZWN0IHJlc3BvbnNlIGZyb20gQUFEIGNvbXByaXNpbmcgb2YgdGhlIGtleXMgLSBwYXJhbWV0ZXJzLCByZXF1ZXN0VHlwZSwgc3RhdGVNYXRjaCwgc3RhdGVSZXNwb25zZSBhbmQgdmFsaWQuXG4gICAqIEBwYXJhbSB7QWNjb3VudH0gYWNjb3VudCBhY2NvdW50IG9iamVjdCBmb3Igd2hpY2ggc2NvcGVzIGFyZSBjb25zZW50ZWQgZm9yLiBUaGUgZGVmYXVsdCBhY2NvdW50IGlzIHRoZSBsb2dnZWQgaW4gYWNjb3VudC5cbiAgICogQHBhcmFtIHtDbGllbnRJbmZvfSBjbGllbnRJbmZvIGNsaWVudEluZm8gcmVjZWl2ZWQgYXMgcGFydCBvZiB0aGUgcmVzcG9uc2UgY29tcHJpc2luZyBvZiBmaWVsZHMgdWlkIGFuZCB1dGlkLlxuICAgKiBAcGFyYW0ge0lkVG9rZW59IGlkVG9rZW4gaWRUb2tlbiByZWNlaXZlZCBhcyBwYXJ0IG9mIHRoZSByZXNwb25zZS5cbiAgICogQGlnbm9yZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgcHJpdmF0ZSBzYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2U6IEF1dGhSZXNwb25zZSwgYXV0aG9yaXR5OiBzdHJpbmcsIHBhcmFtZXRlcnM6IGFueSwgY2xpZW50SW5mbzogc3RyaW5nKTogQXV0aFJlc3BvbnNlIHtcbiAgICBsZXQgc2NvcGU6IHN0cmluZztcbiAgICBsZXQgYWNjZXNzVG9rZW5SZXNwb25zZSA9IHsgLi4ucmVzcG9uc2UgfTtcbiAgICBjb25zdCBjbGllbnRPYmo6IENsaWVudEluZm8gPSBuZXcgQ2xpZW50SW5mbyhjbGllbnRJbmZvKTtcblxuICAgIC8vIGlmIHRoZSByZXNwb25zZSBjb250YWlucyBcInNjb3BlXCJcbiAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShcInNjb3BlXCIpKSB7XG4gICAgICAvLyByZWFkIHRoZSBzY29wZXNcbiAgICAgIHNjb3BlID0gcGFyYW1ldGVyc1tcInNjb3BlXCJdO1xuICAgICAgY29uc3QgY29uc2VudGVkU2NvcGVzID0gc2NvcGUuc3BsaXQoXCIgXCIpO1xuXG4gICAgICAvLyByZXRyaWV2ZSBhbGwgYWNjZXNzIHRva2VucyBmcm9tIHRoZSBjYWNoZSwgcmVtb3ZlIHRoZSBkdXAgc2NvcmVzXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnModGhpcy5jbGllbnRJZCwgYXV0aG9yaXR5KTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW5DYWNoZUl0ZW0gPSBhY2Nlc3NUb2tlbkNhY2hlSXRlbXNbaV07XG5cbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtLmtleS5ob21lQWNjb3VudElkZW50aWZpZXIgPT09IHJlc3BvbnNlLmFjY291bnQuaG9tZUFjY291bnRJZGVudGlmaWVyKSB7XG4gICAgICAgICAgY29uc3QgY2FjaGVkU2NvcGVzID0gYWNjZXNzVG9rZW5DYWNoZUl0ZW0ua2V5LnNjb3Blcy5zcGxpdChcIiBcIik7XG4gICAgICAgICAgaWYgKFV0aWxzLmlzSW50ZXJzZWN0aW5nU2NvcGVzKGNhY2hlZFNjb3BlcywgY29uc2VudGVkU2NvcGVzKSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2UucmVtb3ZlSXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbkNhY2hlSXRlbS5rZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gR2VuZXJhdGUgYW5kIGNhY2hlIGFjY2Vzc1Rva2VuS2V5IGFuZCBhY2Nlc3NUb2tlblZhbHVlXG4gICAgICBjb25zdCBleHBpcmVzSW4gPSBVdGlscy5leHBpcmVzSW4ocGFyYW1ldGVyc1tDb25zdGFudHMuZXhwaXJlc0luXSkudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuS2V5ID0gbmV3IEFjY2Vzc1Rva2VuS2V5KGF1dGhvcml0eSwgdGhpcy5jbGllbnRJZCwgc2NvcGUsIGNsaWVudE9iai51aWQsIGNsaWVudE9iai51dGlkKTtcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl0sIHJlc3BvbnNlLmlkVG9rZW4ucmF3SWRUb2tlbiwgZXhwaXJlc0luLCBjbGllbnRJbmZvKTtcblxuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShKU09OLnN0cmluZ2lmeShhY2Nlc3NUb2tlbktleSksIEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuVmFsdWUpKTtcblxuICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5hY2Nlc3NUb2tlbiAgPSBwYXJhbWV0ZXJzW0NvbnN0YW50cy5hY2Nlc3NUb2tlbl07XG4gICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLnNjb3BlcyA9IGNvbnNlbnRlZFNjb3BlcztcbiAgICAgIGxldCBleHAgPSBOdW1iZXIoZXhwaXJlc0luKTtcbiAgICAgIGlmIChleHApIHtcbiAgICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5leHBpcmVzT24gPSBuZXcgRGF0ZSgoVXRpbHMubm93KCkgKyBleHApICogMTAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkNvdWxkIG5vdCBwYXJzZSBleHBpcmVzSW4gcGFyYW1ldGVyLiBHaXZlbiB2YWx1ZTogXCIgKyBleHBpcmVzSW4pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB0aGUgcmVzcG9uc2UgZG9lcyBub3QgY29udGFpbiBcInNjb3BlXCIgLSBzY29wZSBpcyB1c3VhbGx5IGNsaWVudF9pZCBhbmQgdGhlIHRva2VuIHdpbGwgYmUgaWRfdG9rZW5cbiAgICBlbHNlIHtcbiAgICAgIHNjb3BlID0gdGhpcy5jbGllbnRJZDtcblxuICAgICAgLy8gR2VuZXJhdGUgYW5kIGNhY2hlIGFjY2Vzc1Rva2VuS2V5IGFuZCBhY2Nlc3NUb2tlblZhbHVlXG4gICAgICBjb25zdCBhY2Nlc3NUb2tlbktleSA9IG5ldyBBY2Nlc3NUb2tlbktleShhdXRob3JpdHksIHRoaXMuY2xpZW50SWQsIHNjb3BlLCBjbGllbnRPYmoudWlkLCBjbGllbnRPYmoudXRpZCk7XG5cbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuVmFsdWUgPSBuZXcgQWNjZXNzVG9rZW5WYWx1ZShwYXJhbWV0ZXJzW0NvbnN0YW50cy5pZFRva2VuXSwgcGFyYW1ldGVyc1tDb25zdGFudHMuaWRUb2tlbl0sIHJlc3BvbnNlLmlkVG9rZW4uZXhwaXJhdGlvbiwgY2xpZW50SW5mbyk7XG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KGFjY2Vzc1Rva2VuS2V5KSwgSlNPTi5zdHJpbmdpZnkoYWNjZXNzVG9rZW5WYWx1ZSkpO1xuICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5zY29wZXMgPSBbc2NvcGVdO1xuICAgICAgYWNjZXNzVG9rZW5SZXNwb25zZS5hY2Nlc3NUb2tlbiA9IHBhcmFtZXRlcnNbQ29uc3RhbnRzLmlkVG9rZW5dO1xuICAgICAgbGV0IGV4cCA9IE51bWJlcihyZXNwb25zZS5pZFRva2VuLmV4cGlyYXRpb24pO1xuICAgICAgaWYgKGV4cCkge1xuICAgICAgICBhY2Nlc3NUb2tlblJlc3BvbnNlLmV4cGlyZXNPbiA9IG5ldyBEYXRlKGV4cCAqIDEwMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJDb3VsZCBub3QgcGFyc2UgZXhwaXJlc0luIHBhcmFtZXRlclwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjY2Vzc1Rva2VuUmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBTYXZlcyB0b2tlbiBvciBlcnJvciByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQUQgaW4gdGhlIGNhY2hlLiBJbiBjYXNlIG9mIGlkX3Rva2VuLCBpdCBhbHNvIGNyZWF0ZXMgdGhlIGFjY291bnQgb2JqZWN0LlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcm90ZWN0ZWQgc2F2ZVRva2VuRnJvbUhhc2goaGFzaDogc3RyaW5nLCBzdGF0ZUluZm86IFJlc3BvbnNlU3RhdGVJbmZvKTogQXV0aFJlc3BvbnNlIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiU3RhdGUgc3RhdHVzOlwiICsgc3RhdGVJbmZvLnN0YXRlTWF0Y2ggKyBcIjsgUmVxdWVzdCB0eXBlOlwiICsgc3RhdGVJbmZvLnJlcXVlc3RUeXBlKTtcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIFwiXCIpO1xuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBcIlwiKTtcblxuICAgIGxldCByZXNwb25zZSA6IEF1dGhSZXNwb25zZSA9IHtcbiAgICAgIHVuaXF1ZUlkOiBcIlwiLFxuICAgICAgdGVuYW50SWQ6IFwiXCIsXG4gICAgICB0b2tlblR5cGU6IFwiXCIsXG4gICAgICBpZFRva2VuOiBudWxsLFxuICAgICAgYWNjZXNzVG9rZW46IG51bGwsXG4gICAgICBzY29wZXM6IFtdLFxuICAgICAgZXhwaXJlc09uOiBudWxsLFxuICAgICAgYWNjb3VudDogbnVsbCxcbiAgICAgIGFjY291bnRTdGF0ZTogXCJcIixcbiAgICB9O1xuXG4gICAgbGV0IGVycm9yOiBBdXRoRXJyb3I7XG4gICAgY29uc3QgaGFzaFBhcmFtcyA9IHRoaXMuZGVzZXJpYWxpemVIYXNoKGhhc2gpO1xuICAgIGxldCBhdXRob3JpdHlLZXk6IHN0cmluZyA9IFwiXCI7XG4gICAgbGV0IGFjcXVpcmVUb2tlbkFjY291bnRLZXk6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAvLyBJZiBzZXJ2ZXIgcmV0dXJucyBhbiBlcnJvclxuICAgIGlmIChoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uKSB8fCBoYXNoUGFyYW1zLmhhc093blByb3BlcnR5KENvbnN0YW50cy5lcnJvcikpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm9QaWkoXCJFcnJvciA6XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0gKyBcIjsgRXJyb3IgZGVzY3JpcHRpb246XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSk7XG4gICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xuXG4gICAgICAvLyBsb2dpblxuICAgICAgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLmxvZ2luKSB7XG4gICAgICAgIHRoaXMubG9naW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dICsgXCI6XCIgKyBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvcl0pO1xuICAgICAgICBhdXRob3JpdHlLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQXV0aG9yaXR5S2V5KHN0YXRlSW5mby5zdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFjcXVpcmVUb2tlblxuICAgICAgaWYgKHN0YXRlSW5mby5yZXF1ZXN0VHlwZSA9PT0gQ29uc3RhbnRzLnJlbmV3VG9rZW4pIHtcbiAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGVJbmZvLnN0YXRlKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50OiBBY2NvdW50ID0gdGhpcy5nZXRBY2NvdW50KCk7XG4gICAgICAgIGxldCBhY2NvdW50SWQ7XG5cbiAgICAgICAgaWYgKGFjY291bnQgJiYgIVV0aWxzLmlzRW1wdHkoYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICBhY2NvdW50SWQgPSBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFjY291bnRJZCA9IENvbnN0YW50cy5ub19hY2NvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZCwgc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNJbnRlcmFjdGlvblJlcXVpcmVkKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yRGVzY3JpcHRpb25dKSkge1xuICAgICAgICBlcnJvciA9IG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKGhhc2hQYXJhbXNbQ29uc3RhbnRzLmVycm9yXSwgaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JEZXNjcmlwdGlvbl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSBuZXcgU2VydmVyRXJyb3IoaGFzaFBhcmFtc1tDb25zdGFudHMuZXJyb3JdLCBoYXNoUGFyYW1zW0NvbnN0YW50cy5lcnJvckRlc2NyaXB0aW9uXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIHRoZSBzZXJ2ZXIgcmV0dXJucyBcIlN1Y2Nlc3NcIlxuICAgIGVsc2Uge1xuICAgICAgLy8gVmVyaWZ5IHRoZSBzdGF0ZSBmcm9tIHJlZGlyZWN0IGFuZCByZWNvcmQgdG9rZW5zIHRvIHN0b3JhZ2UgaWYgZXhpc3RzXG4gICAgICBpZiAoc3RhdGVJbmZvLnN0YXRlTWF0Y2gpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlN0YXRlIGlzIHJpZ2h0XCIpO1xuICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuc2Vzc2lvblN0YXRlKSkge1xuICAgICAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbFNlc3Npb25TdGF0ZSwgaGFzaFBhcmFtc1tDb25zdGFudHMuc2Vzc2lvblN0YXRlXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2UuYWNjb3VudFN0YXRlID0gdGhpcy5nZXRBY2NvdW50U3RhdGUoc3RhdGVJbmZvLnN0YXRlKTtcblxuICAgICAgICBsZXQgY2xpZW50SW5mbzogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICAvLyBQcm9jZXNzIGFjY2Vzc190b2tlblxuICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuYWNjZXNzVG9rZW4pKSB7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIkZyYWdtZW50IGhhcyBhY2Nlc3MgdG9rZW5cIik7XG4gICAgICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyByZXRyaWV2ZSB0aGUgaWRfdG9rZW4gZnJvbSByZXNwb25zZSBpZiBwcmVzZW50IDpcbiAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbikpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmlkVG9rZW4gPSBuZXcgSWRUb2tlbihoYXNoUGFyYW1zW0NvbnN0YW50cy5pZFRva2VuXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBuZXcgSWRUb2tlbih0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5pZFRva2VuS2V5KSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJldHJpZXZlIHRoZSBhdXRob3JpdHkgZnJvbSBjYWNoZSBhbmQgcmVwbGFjZSB3aXRoIHRlbmFudElEXG4gICAgICAgICAgY29uc3QgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZUluZm8uc3RhdGUpO1xuICAgICAgICAgIGxldCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCB0aGlzLmluQ29va2llKTtcblxuICAgICAgICAgIGlmICghVXRpbHMuaXNFbXB0eShhdXRob3JpdHkpKSB7XG4gICAgICAgICAgICBhdXRob3JpdHkgPSBVdGlscy5yZXBsYWNlVGVuYW50UGF0aChhdXRob3JpdHksIHJlc3BvbnNlLnRlbmFudElkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZXRyaWV2ZSBjbGllbnRfaW5mbyAtIGlmIGl0IGlzIG5vdCBmb3VuZCwgZ2VuZXJhdGUgdGhlIHVpZCBhbmQgdXRpZCBmcm9tIGlkVG9rZW5cbiAgICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuY2xpZW50SW5mbykpIHtcbiAgICAgICAgICAgIGNsaWVudEluZm8gPSBoYXNoUGFyYW1zW0NvbnN0YW50cy5jbGllbnRJbmZvXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIud2FybmluZyhcIkNsaWVudEluZm8gbm90IHJlY2VpdmVkIGluIHRoZSByZXNwb25zZSBmcm9tIEFBRFwiKTtcbiAgICAgICAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVDbGllbnRJbmZvTm90UG9wdWxhdGVkRXJyb3IoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc3BvbnNlLmFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQocmVzcG9uc2UuaWRUb2tlbiwgbmV3IENsaWVudEluZm8oY2xpZW50SW5mbykpO1xuXG4gICAgICAgICAgbGV0IGFjY291bnRLZXk6IHN0cmluZztcbiAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjb3VudCAmJiAhVXRpbHMuaXNFbXB0eShyZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIGFjY291bnRLZXkgPSByZXNwb25zZS5hY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhY2NvdW50S2V5ID0gQ29uc3RhbnRzLm5vX2FjY291bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRLZXksIHN0YXRlSW5mby5zdGF0ZSk7XG4gICAgICAgICAgY29uc3QgYWNxdWlyZVRva2VuQWNjb3VudEtleV9ub2FjY291bnQgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShDb25zdGFudHMubm9fYWNjb3VudCwgc3RhdGVJbmZvLnN0YXRlKTtcblxuICAgICAgICAgIGxldCBjYWNoZWRBY2NvdW50OiBzdHJpbmcgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXkpO1xuICAgICAgICAgIGxldCBhY3F1aXJlVG9rZW5BY2NvdW50OiBBY2NvdW50O1xuXG4gICAgICAgICAgLy8gQ2hlY2sgd2l0aCB0aGUgYWNjb3VudCBpbiB0aGUgQ2FjaGVcbiAgICAgICAgICBpZiAoIVV0aWxzLmlzRW1wdHkoY2FjaGVkQWNjb3VudCkpIHtcbiAgICAgICAgICAgIGFjcXVpcmVUb2tlbkFjY291bnQgPSBKU09OLnBhcnNlKGNhY2hlZEFjY291bnQpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFjY291bnQgJiYgYWNxdWlyZVRva2VuQWNjb3VudCAmJiBVdGlscy5jb21wYXJlQWNjb3VudHMocmVzcG9uc2UuYWNjb3VudCwgYWNxdWlyZVRva2VuQWNjb3VudCkpIHtcbiAgICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLnNhdmVBY2Nlc3NUb2tlbihyZXNwb25zZSwgYXV0aG9yaXR5LCBoYXNoUGFyYW1zLCBjbGllbnRJbmZvKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcIlRoZSB1c2VyIG9iamVjdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXG4gICAgICAgICAgICAgICAgXCJUaGUgYWNjb3VudCBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSByZXNwb25zZSBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIG9uZSBwYXNzZWQgaW4gdGhlIGFjcXVpcmVUb2tlbiByZXF1ZXN0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICghVXRpbHMuaXNFbXB0eSh0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXlfbm9hY2NvdW50KSkpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBpZF90b2tlblxuICAgICAgICBpZiAoaGFzaFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShDb25zdGFudHMuaWRUb2tlbikpIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJGcmFnbWVudCBoYXMgaWQgdG9rZW5cIik7XG5cbiAgICAgICAgICAgIC8vIGxvZ2luIG5vIGxvbmdlciBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gVXRpbHMuc2V0UmVzcG9uc2VJZFRva2VuKHJlc3BvbnNlLCBuZXcgSWRUb2tlbihoYXNoUGFyYW1zW0NvbnN0YW50cy5pZFRva2VuXSkpO1xuICAgICAgICAgICAgaWYgKGhhc2hQYXJhbXMuaGFzT3duUHJvcGVydHkoQ29uc3RhbnRzLmNsaWVudEluZm8pKSB7XG4gICAgICAgICAgICAgIGNsaWVudEluZm8gPSBoYXNoUGFyYW1zW0NvbnN0YW50cy5jbGllbnRJbmZvXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoXCJDbGllbnRJbmZvIG5vdCByZWNlaXZlZCBpbiB0aGUgcmVzcG9uc2UgZnJvbSBBQURcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IFN0b3JhZ2UuZ2VuZXJhdGVBdXRob3JpdHlLZXkoc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgICAgIGxldCBhdXRob3JpdHk6IHN0cmluZyA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oYXV0aG9yaXR5S2V5LCB0aGlzLmluQ29va2llKTtcblxuICAgICAgICAgICAgaWYgKCFVdGlscy5pc0VtcHR5KGF1dGhvcml0eSkpIHtcbiAgICAgICAgICAgICAgYXV0aG9yaXR5ID0gVXRpbHMucmVwbGFjZVRlbmFudFBhdGgoYXV0aG9yaXR5LCByZXNwb25zZS5pZFRva2VuLnRlbmFudElkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gQWNjb3VudC5jcmVhdGVBY2NvdW50KHJlc3BvbnNlLmlkVG9rZW4sIG5ldyBDbGllbnRJbmZvKGNsaWVudEluZm8pKTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmFjY291bnQgPSB0aGlzLmFjY291bnQ7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5pZFRva2VuICYmIHJlc3BvbnNlLmlkVG9rZW4ubm9uY2UpIHtcbiAgICAgICAgICAgICAgLy8gY2hlY2sgbm9uY2UgaW50ZWdyaXR5IGlmIGlkVG9rZW4gaGFzIG5vbmNlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm90IG1hdGNoZWRcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmlkVG9rZW4ubm9uY2UgIT09IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY291bnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmxvZ2luRXJyb3IsIFwiTm9uY2UgTWlzbWF0Y2guIEV4cGVjdGVkIE5vbmNlOiBcIiArIHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSkgKyBcIixcIiArIFwiQWN0dWFsIE5vbmNlOiBcIiArIHJlc3BvbnNlLmlkVG9rZW4ubm9uY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiTm9uY2UgTWlzbWF0Y2guRXhwZWN0ZWQgTm9uY2U6IFwiICsgdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubm9uY2VJZFRva2VuLCB0aGlzLmluQ29va2llKSArIFwiLFwiICsgXCJBY3R1YWwgTm9uY2U6IFwiICsgcmVzcG9uc2UuaWRUb2tlbi5ub25jZSk7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlTm9uY2VNaXNtYXRjaEVycm9yKHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLm5vbmNlSWRUb2tlbiwgdGhpcy5pbkNvb2tpZSksIHJlc3BvbnNlLmlkVG9rZW4ubm9uY2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFNhdmUgdGhlIHRva2VuXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmlkVG9rZW5LZXksIGhhc2hQYXJhbXNbQ29uc3RhbnRzLmlkVG9rZW5dKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsQ2xpZW50SW5mbywgY2xpZW50SW5mbyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIGlkVG9rZW4gYXMgYWNjZXNzIHRva2VuIGZvciBhcHAgaXRzZWxmXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQWNjZXNzVG9rZW4ocmVzcG9uc2UsIGF1dGhvcml0eSwgaGFzaFBhcmFtcywgY2xpZW50SW5mbyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF1dGhvcml0eUtleSA9IHN0YXRlSW5mby5zdGF0ZTtcbiAgICAgICAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcblxuICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIkludmFsaWQgaWRfdG9rZW4gcmVjZWl2ZWQgaW4gdGhlIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgICBlcnJvciA9IENsaWVudEF1dGhFcnJvci5jcmVhdGVJbnZhbGlkSWRUb2tlbkVycm9yKHJlc3BvbnNlLmlkVG9rZW4pO1xuICAgICAgICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3IsIGVycm9yLmVycm9yQ29kZSk7XG4gICAgICAgICAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLm1zYWxFcnJvckRlc2NyaXB0aW9uLCBlcnJvci5lcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTdGF0ZSBtaXNtYXRjaCAtIHVuZXhwZWN0ZWQvaW52YWxpZCBzdGF0ZVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF1dGhvcml0eUtleSA9IHN0YXRlSW5mby5zdGF0ZTtcbiAgICAgICAgYWNxdWlyZVRva2VuQWNjb3VudEtleSA9IHN0YXRlSW5mby5zdGF0ZTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZFN0YXRlID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuc3RhdGVMb2dpbiwgdGhpcy5pbkNvb2tpZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiU3RhdGUgTWlzbWF0Y2guRXhwZWN0ZWQgU3RhdGU6IFwiICsgZXhwZWN0ZWRTdGF0ZSArIFwiLFwiICsgXCJBY3R1YWwgU3RhdGU6IFwiICsgc3RhdGVJbmZvLnN0YXRlKTtcbiAgICAgICAgZXJyb3IgPSBDbGllbnRBdXRoRXJyb3IuY3JlYXRlSW52YWxpZFN0YXRlRXJyb3Ioc3RhdGVJbmZvLnN0YXRlLCBleHBlY3RlZFN0YXRlKTtcbiAgICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMubXNhbEVycm9yLCBlcnJvci5lcnJvckNvZGUpO1xuICAgICAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5tc2FsRXJyb3JEZXNjcmlwdGlvbiwgZXJyb3IuZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5yZW5ld1N0YXR1cyArIHN0YXRlSW5mby5zdGF0ZSwgQ29uc3RhbnRzLnRva2VuUmVuZXdTdGF0dXNDb21wbGV0ZWQpO1xuICAgIHRoaXMuY2FjaGVTdG9yYWdlLnJlbW92ZUFjcXVpcmVUb2tlbkVudHJpZXMoYXV0aG9yaXR5S2V5LCBhY3F1aXJlVG9rZW5BY2NvdW50S2V5KTtcbiAgICAvLyB0aGlzIGlzIHJlcXVpcmVkIGlmIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmw9ZmFsc2VcbiAgICBpZiAodGhpcy5pbkNvb2tpZSkge1xuICAgICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbUNvb2tpZShhdXRob3JpdHlLZXksIFwiXCIsIC0xKTtcbiAgICAgIHRoaXMuY2FjaGVTdG9yYWdlLmNsZWFyQ29va2llKCk7XG4gICAgfVxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICB0aHJvdyBBdXRoRXJyb3IuY3JlYXRlVW5leHBlY3RlZEVycm9yKFwiUmVzcG9uc2UgaXMgbnVsbFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG4gIC8qIHRzbGludDplbmFibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gQWNjb3VudFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgaW4gYWNjb3VudCAocmVjZWl2ZWQgZnJvbSBhbiBhY2NvdW50IG9iamVjdCBjcmVhdGVkIGF0IHRoZSB0aW1lIG9mIGxvZ2luKSBvciBudWxsIHdoZW4gbm8gc3RhdGUgaXMgZm91bmRcbiAgICogQHJldHVybnMge0BsaW5rIEFjY291bnR9IGFjY291bnQgb2JqZWN0IHN0b3JlZCBpbiBNU0FMXG4gICAqL1xuICBnZXRBY2NvdW50KCk6IEFjY291bnQge1xuICAgIC8vIGlmIGEgc2Vzc2lvbiBhbHJlYWR5IGV4aXN0cywgZ2V0IHRoZSBhY2NvdW50IGZyb20gdGhlIHNlc3Npb25cbiAgICBpZiAodGhpcy5hY2NvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xuICAgIH1cblxuICAgIC8vIGZyYW1lIGlzIHVzZWQgdG8gZ2V0IGlkVG9rZW4gYW5kIHBvcHVsYXRlIHRoZSBhY2NvdW50IGZvciB0aGUgZ2l2ZW4gc2Vzc2lvblxuICAgIGNvbnN0IHJhd0lkVG9rZW4gPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50cy5pZFRva2VuS2V5KTtcbiAgICBjb25zdCByYXdDbGllbnRJbmZvID0gdGhpcy5jYWNoZVN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMubXNhbENsaWVudEluZm8pO1xuXG4gICAgaWYgKCFVdGlscy5pc0VtcHR5KHJhd0lkVG9rZW4pICYmICFVdGlscy5pc0VtcHR5KHJhd0NsaWVudEluZm8pKSB7XG4gICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4ocmF3SWRUb2tlbik7XG4gICAgICBjb25zdCBjbGllbnRJbmZvID0gbmV3IENsaWVudEluZm8ocmF3Q2xpZW50SW5mbyk7XG4gICAgICB0aGlzLmFjY291bnQgPSBBY2NvdW50LmNyZWF0ZUFjY291bnQoaWRUb2tlbiwgY2xpZW50SW5mbyk7XG4gICAgICByZXR1cm4gdGhpcy5hY2NvdW50O1xuICAgIH1cbiAgICAvLyBpZiBsb2dpbiBub3QgeWV0IGRvbmUsIHJldHVybiBudWxsXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKlxuICAgKiBFeHRyYWN0cyBzdGF0ZSB2YWx1ZSBmcm9tIHRoZSBhY2NvdW50U3RhdGUgc2VudCB3aXRoIHRoZSBhdXRoZW50aWNhdGlvbiByZXF1ZXN0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZ2V0QWNjb3VudFN0YXRlIChzdGF0ZTogc3RyaW5nKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBjb25zdCBzcGxpdEluZGV4ID0gc3RhdGUuaW5kZXhPZihcInxcIik7XG4gICAgICBpZiAoc3BsaXRJbmRleCA+IC0xICYmIHNwbGl0SW5kZXggKyAxIDwgc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdWJzdHJpbmcoc3BsaXRJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmaWx0ZXIgYWxsIGNhY2hlZCBpdGVtcyBhbmQgcmV0dXJuIGEgbGlzdCBvZiB1bmlxdWUgYWNjb3VudHMgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0BsaW5rIEFycmF5PEFjY291bnQ+fSBBY2NvdW50cyAtIGFjY291bnRzIHNhdmVkIGluIHRoZSBjYWNoZS5cbiAgICovXG4gIGdldEFsbEFjY291bnRzKCk6IEFycmF5PEFjY291bnQ+IHtcbiAgICBjb25zdCBhY2NvdW50czogQXJyYXk8QWNjb3VudD4gPSBbXTtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbkNhY2hlSXRlbXMgPSB0aGlzLmNhY2hlU3RvcmFnZS5nZXRBbGxBY2Nlc3NUb2tlbnMoQ29uc3RhbnRzLmNsaWVudElkLCBDb25zdGFudHMuaG9tZUFjY291bnRJZGVudGlmaWVyKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjZXNzVG9rZW5DYWNoZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZFRva2VuID0gbmV3IElkVG9rZW4oYWNjZXNzVG9rZW5DYWNoZUl0ZW1zW2ldLnZhbHVlLmlkVG9rZW4pO1xuICAgICAgY29uc3QgY2xpZW50SW5mbyA9IG5ldyBDbGllbnRJbmZvKGFjY2Vzc1Rva2VuQ2FjaGVJdGVtc1tpXS52YWx1ZS5ob21lQWNjb3VudElkZW50aWZpZXIpO1xuICAgICAgY29uc3QgYWNjb3VudDogQWNjb3VudCA9IEFjY291bnQuY3JlYXRlQWNjb3VudChpZFRva2VuLCBjbGllbnRJbmZvKTtcbiAgICAgIGFjY291bnRzLnB1c2goYWNjb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0VW5pcXVlQWNjb3VudHMoYWNjb3VudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICpcbiAgICogVXNlZCB0byBmaWx0ZXIgYWNjb3VudHMgYmFzZWQgb24gaG9tZUFjY291bnRJZGVudGlmaWVyXG4gICAqIEBwYXJhbSB7QXJyYXk8QWNjb3VudD59ICBBY2NvdW50cyAtIGFjY291bnRzIHNhdmVkIGluIHRoZSBjYWNoZVxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwcml2YXRlIGdldFVuaXF1ZUFjY291bnRzKGFjY291bnRzOiBBcnJheTxBY2NvdW50Pik6IEFycmF5PEFjY291bnQ+IHtcbiAgICBpZiAoIWFjY291bnRzIHx8IGFjY291bnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICByZXR1cm4gYWNjb3VudHM7XG4gICAgfVxuXG4gICAgY29uc3QgZmxhZ3M6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBjb25zdCB1bmlxdWVBY2NvdW50czogQXJyYXk8QWNjb3VudD4gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWNjb3VudHMubGVuZ3RoOyArK2luZGV4KSB7XG4gICAgICBpZiAoYWNjb3VudHNbaW5kZXhdLmhvbWVBY2NvdW50SWRlbnRpZmllciAmJiBmbGFncy5pbmRleE9mKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIpID09PSAtMSkge1xuICAgICAgICBmbGFncy5wdXNoKGFjY291bnRzW2luZGV4XS5ob21lQWNjb3VudElkZW50aWZpZXIpO1xuICAgICAgICB1bmlxdWVBY2NvdW50cy5wdXNoKGFjY291bnRzW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaXF1ZUFjY291bnRzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFNjb3BlcyAoRXh0cmFjdCB0byBTY29wZXMudHMpXG5cbiAgLy8gTm90ZTogXCJ0aGlzXCIgZGVwZW5kZW5jeSBpbiB0aGlzIHNlY3Rpb24gaXMgbWluaW1hbC5cbiAgLy8gSWYgcENhY2hlU3RvcmFnZSBpcyBzZXBhcmF0ZWQgZnJvbSB0aGUgY2xhc3Mgb2JqZWN0LCBvciBwYXNzZWQgYXMgYSBmbiBwYXJhbSwgc2NvcGVzVXRpbHMudHMgY2FuIGJlIGNyZWF0ZWRcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKlxuICAgKiBVc2VkIHRvIHZhbGlkYXRlIHRoZSBzY29wZXMgaW5wdXQgcGFyYW1ldGVyIHJlcXVlc3RlZCAgYnkgdGhlIGRldmVsb3Blci5cbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBzY29wZXMgLSBEZXZlbG9wZXIgcmVxdWVzdGVkIHBlcm1pc3Npb25zLiBOb3QgYWxsIHNjb3BlcyBhcmUgZ3VhcmFudGVlZCB0byBiZSBpbmNsdWRlZCBpbiB0aGUgYWNjZXNzIHRva2VuIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNjb3Blc1JlcXVpcmVkIC0gQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNjb3BlcyBhcnJheSBpcyByZXF1aXJlZCBvciBub3RcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUlucHV0U2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+LCBzY29wZXNSZXF1aXJlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghc2NvcGVzKSB7XG4gICAgICBpZiAoc2NvcGVzUmVxdWlyZWQpIHtcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZVNjb3Blc1JlcXVpcmVkRXJyb3Ioc2NvcGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayB0aGF0IHNjb3BlcyBpcyBhbiBhcnJheSBvYmplY3QgKGFsc28gdGhyb3dzIGVycm9yIGlmIHNjb3BlcyA9PSBudWxsKVxuICAgIGlmICghQXJyYXkuaXNBcnJheShzY29wZXMpKSB7XG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlU2NvcGVzTm9uQXJyYXlFcnJvcihzY29wZXMpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoYXQgc2NvcGVzIGlzIG5vdCBhbiBlbXB0eSBhcnJheVxuICAgIGlmIChzY29wZXMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUVtcHR5U2NvcGVzQXJyYXlFcnJvcihzY29wZXMudG9TdHJpbmcoKSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhhdCBjbGllbnRJZCBpcyBwYXNzZWQgYXMgc2luZ2xlIHNjb3BlXG4gICAgaWYgKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpIHtcbiAgICAgIGlmIChzY29wZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlQ2xpZW50SWRTaW5nbGVTY29wZUVycm9yKHNjb3Blcy50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKlxuICAgKiBFeHRyYWN0cyBzY29wZSB2YWx1ZSBmcm9tIHRoZSBzdGF0ZSBzZW50IHdpdGggdGhlIGF1dGhlbnRpY2F0aW9uIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBzY29wZS5cbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTY29wZUZyb21TdGF0ZShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBzdGF0ZS5pbmRleE9mKFwifFwiKTtcbiAgICAgIGlmIChzcGxpdEluZGV4ID4gLTEgJiYgc3BsaXRJbmRleCArIDEgPCBzdGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN1YnN0cmluZyhzcGxpdEluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQXBwZW5kcyBleHRyYVNjb3Blc1RvQ29uc2VudCBpZiBwYXNzZWRcbiAgICogQHBhcmFtIHtAbGluayBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnN9XG4gICAqL1xuICBwcml2YXRlIGFwcGVuZFNjb3BlcyhyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpOiBBcnJheTxzdHJpbmc+IHtcblxuICAgIGxldCBzY29wZXM6IEFycmF5PHN0cmluZz47XG5cbiAgICBpZiAocmVxdWVzdCAmJiByZXF1ZXN0LnNjb3Blcykge1xuICAgICAgICBpZiAocmVxdWVzdC5leHRyYVNjb3Blc1RvQ29uc2VudCkge1xuICAgICAgICAgICAgc2NvcGVzID0gWy4uLnJlcXVlc3Quc2NvcGVzLCAuLi5yZXF1ZXN0LmV4dHJhU2NvcGVzVG9Db25zZW50XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgc2NvcGVzID0gcmVxdWVzdC5zY29wZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcGVzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIEFuZ3VsYXJcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKlxuICAgKiBCcm9hZGNhc3QgbWVzc2FnZXMgLSBVc2VkIG9ubHkgZm9yIEFuZ3VsYXI/ICAqXG4gICAqIEBwYXJhbSBldmVudE5hbWVcbiAgICogQHBhcmFtIGRhdGFcbiAgICovXG4gIHByaXZhdGUgYnJvYWRjYXN0KGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7IGRldGFpbDogZGF0YSB9KTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICpcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRoZSBjYWNoZWQgdG9rZW5cbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKiBAcGFyYW0ge0BsaW5rIEFjY291bnR9IGFjY291bnRcbiAgICogQHBhcmFtIHN0YXRlXG4gICAqIEByZXR1cm4ge0BsaW5rIEF1dGhSZXNwb25zZX0gQXV0aFJlc3BvbnNlXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Q2FjaGVkVG9rZW5JbnRlcm5hbChzY29wZXMgOiBBcnJheTxzdHJpbmc+ICwgYWNjb3VudDogQWNjb3VudCwgc3RhdGU6IHN0cmluZyk6IEF1dGhSZXNwb25zZSB7XG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IHNlc3Npb24ncyBhY2NvdW50IG9iamVjdFxuICAgIGNvbnN0IGFjY291bnRPYmplY3Q6IEFjY291bnQgPSBhY2NvdW50IHx8IHRoaXMuZ2V0QWNjb3VudCgpO1xuICAgIGlmICghYWNjb3VudE9iamVjdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgQXV0aGVudGljYXRpb25SZXF1ZXN0IGJhc2VkIG9uIHJlc3BvbnNlIHR5cGVcbiAgICBjb25zdCBuZXdBdXRob3JpdHkgPSB0aGlzLmF1dGhvcml0eUluc3RhbmNlID8gdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA6IEF1dGhvcml0eUZhY3RvcnkuQ3JlYXRlSW5zdGFuY2UodGhpcy5hdXRob3JpdHksIHRoaXMuY29uZmlnLmF1dGgudmFsaWRhdGVBdXRob3JpdHkpO1xuICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IHRoaXMuZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3QsIHNjb3BlcywgdHJ1ZSk7XG4gICAgY29uc3Qgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0ID0gbmV3IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzKFxuICAgICAgbmV3QXV0aG9yaXR5LFxuICAgICAgdGhpcy5jbGllbnRJZCxcbiAgICAgIHNjb3BlcyxcbiAgICAgIHJlc3BvbnNlVHlwZSxcbiAgICAgIHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcbiAgICAgIHN0YXRlXG4gICAgKTtcblxuICAgIC8vIGdldCBjYWNoZWQgdG9rZW5cbiAgICByZXR1cm4gdGhpcy5nZXRDYWNoZWRUb2tlbihzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QsIGFjY291bnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICpcbiAgICogR2V0IHNjb3BlcyBmb3IgdGhlIEVuZHBvaW50IC0gVXNlZCBpbiBBbmd1bGFyIHRvIHRyYWNrIHByb3RlY3RlZCBhbmQgdW5wcm90ZWN0ZWQgcmVzb3VyY2VzIHdpdGhvdXQgaW50ZXJhY3Rpb24gZnJvbSB0aGUgZGV2ZWxvcGVyIGFwcFxuICAgKlxuICAgKiBAcGFyYW0gZW5kcG9pbnRcbiAgICovXG4gIHByb3RlY3RlZCBnZXRTY29wZXNGb3JFbmRwb2ludChlbmRwb2ludDogc3RyaW5nKSA6IEFycmF5PHN0cmluZz4ge1xuICAgIC8vIGlmIHVzZXIgc3BlY2lmaWVkIGxpc3Qgb2YgdW5wcm90ZWN0ZWRSZXNvdXJjZXMsIG5vIG5lZWQgdG8gc2VuZCB0b2tlbiB0byB0aGVzZSBlbmRwb2ludHMsIHJldHVybiBudWxsLlxuICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsudW5wcm90ZWN0ZWRSZXNvdXJjZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmZyYW1ld29yay51bnByb3RlY3RlZFJlc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVuZHBvaW50LmluZGV4T2YodGhpcy5jb25maWcuZnJhbWV3b3JrLnVucHJvdGVjdGVkUmVzb3VyY2VzW2ldKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcm9jZXNzIGFsbCBwcm90ZWN0ZWQgcmVzb3VyY2VzIGFuZCBzZW5kIHRoZSBtYXRjaGVkIG9uZVxuICAgIGlmICh0aGlzLmNvbmZpZy5mcmFtZXdvcmsucHJvdGVjdGVkUmVzb3VyY2VNYXAuc2l6ZSA+IDApIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIEFycmF5LmZyb20odGhpcy5jb25maWcuZnJhbWV3b3JrLnByb3RlY3RlZFJlc291cmNlTWFwLmtleXMoKSkpIHtcbiAgICAgICAgICAgIC8vIGNvbmZpZ0VuZHBvaW50IGlzIGxpa2UgL2FwaS9Ub2RvIHJlcXVlc3RlZCBlbmRwb2ludCBjYW4gYmUgL2FwaS9Ub2RvLzFcbiAgICAgICAgICAgIGlmIChlbmRwb2ludC5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5mcmFtZXdvcmsucHJvdGVjdGVkUmVzb3VyY2VNYXAuZ2V0KGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IHJlc291cmNlIHdpbGwgYmUgY2xpZW50aWQgaWYgbm90aGluZyBzcGVjaWZpZWRcbiAgICAvLyBBcHAgd2lsbCB1c2UgaWR0b2tlbiBmb3IgY2FsbHMgdG8gaXRzZWxmXG4gICAgLy8gY2hlY2sgaWYgaXQncyBzdGFyaW5nIGZyb20gaHR0cCBvciBodHRwcywgbmVlZHMgdG8gbWF0Y2ggd2l0aCBhcHAgaG9zdFxuICAgIGlmIChlbmRwb2ludC5pbmRleE9mKFwiaHR0cDovL1wiKSA+IC0xIHx8IGVuZHBvaW50LmluZGV4T2YoXCJodHRwczovL1wiKSA+IC0xKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEhvc3RGcm9tVXJpKGVuZHBvaW50KSA9PT0gdGhpcy5nZXRIb3N0RnJvbVVyaSh0aGlzLmdldFJlZGlyZWN0VXJpKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5PHN0cmluZz4odGhpcy5jbGllbnRJZCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgIC8vIGluIGFuZ3VsYXIgbGV2ZWwsIHRoZSB1cmwgZm9yICRodHRwIGludGVyY2VwdG9yIGNhbGwgY291bGQgYmUgcmVsYXRpdmUgdXJsLFxuICAgIC8vIGlmIGl0J3MgcmVsYXRpdmUgY2FsbCwgd2UnbGwgdHJlYXQgaXQgYXMgYXBwIGJhY2tlbmQgY2FsbC5cbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheTxzdHJpbmc+KHRoaXMuY2xpZW50SWQpO1xuICAgIH1cblxuICAgIC8vIGlmIG5vdCB0aGUgYXBwJ3Mgb3duIGJhY2tlbmQgb3Igbm90IGEgZG9tYWluIGxpc3RlZCBpbiB0aGUgZW5kcG9pbnRzIHN0cnVjdHVyZVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBib29sZWFuIGZsYWcgdG8gZGV2ZWxvcGVyIHRvIGhlbHAgaW5mb3JtIGlmIGxvZ2luIGlzIGluIHByb2dyZXNzXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gICAqL1xuICBwdWJsaWMgZ2V0TG9naW5JblByb2dyZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHBlbmRpbmdDYWxsYmFjayA9IHRoaXMuY2FjaGVTdG9yYWdlLmdldEl0ZW0oQ29uc3RhbnRzLnVybEhhc2gpO1xuICAgIGlmIChwZW5kaW5nQ2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvZ2luSW5Qcm9ncmVzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogQHBhcmFtIGxvZ2luSW5Qcm9ncmVzc1xuICAgKi9cbiAgcHJvdGVjdGVkIHNldGxvZ2luSW5Qcm9ncmVzcyhsb2dpbkluUHJvZ3Jlc3MgOiBib29sZWFuKSB7XG4gICAgdGhpcy5sb2dpbkluUHJvZ3Jlc3MgPSBsb2dpbkluUHJvZ3Jlc3M7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIHJldHVybnMgdGhlIHN0YXR1cyBvZiBhY3F1aXJlVG9rZW5JblByb2dyZXNzXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QWNxdWlyZVRva2VuSW5Qcm9ncmVzcygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmFjcXVpcmVUb2tlbkluUHJvZ3Jlc3M7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIEBwYXJhbSBhY3F1aXJlVG9rZW5JblByb2dyZXNzXG4gICAqL1xuICBwcm90ZWN0ZWQgc2V0QWNxdWlyZVRva2VuSW5Qcm9ncmVzcyhhY3F1aXJlVG9rZW5JblByb2dyZXNzIDogYm9vbGVhbikge1xuICAgICAgdGhpcy5hY3F1aXJlVG9rZW5JblByb2dyZXNzID0gYWNxdWlyZVRva2VuSW5Qcm9ncmVzcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogcmV0dXJucyB0aGUgbG9nZ2VyIGhhbmRsZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldExvZ2dlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zeXN0ZW0ubG9nZ2VyO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIEdldHRlcnMgYW5kIFNldHRlcnNcblxuICAvKipcbiAgICpcbiAgICogVXNlIHRvIGdldCB0aGUgcmVkaXJlY3QgdXJpIGNvbmZpZ3VyZWQgaW4gTVNBTCBvciBudWxsLlxuICAgKiBFdmFsdWF0ZXMgcmVkaXJlY3RVcmkgaWYgaXRzIGEgZnVuY3Rpb24sIG90aGVyd2lzZSBzaW1wbHkgcmV0dXJucyBpdHMgdmFsdWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJlZGlyZWN0IFVSTFxuICAgKlxuICAgKi9cbiAgcHVibGljIGdldFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5hdXRoLnJlZGlyZWN0VXJpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnJlZGlyZWN0VXJpKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5hdXRoLnJlZGlyZWN0VXJpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBnZXQgdGhlIHBvc3QgbG9nb3V0IHJlZGlyZWN0IHVyaSBjb25maWd1cmVkIGluIE1TQUwgb3IgbnVsbC5cbiAgICogRXZhbHVhdGVzIHBvc3RMb2dvdXRyZWRpcmVjdFVyaSBpZiBpdHMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIHNpbXBseSByZXR1cm5zIGl0cyB2YWx1ZS5cbiAgICpcbiAgICogQHJldHVybnMge3N0cmluZ30gcG9zdCBsb2dvdXQgcmVkaXJlY3QgVVJMXG4gICAqL1xuICBwdWJsaWMgZ2V0UG9zdExvZ291dFJlZGlyZWN0VXJpKCk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5hdXRoLnBvc3RMb2dvdXRSZWRpcmVjdFVyaSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuYXV0aC5wb3N0TG9nb3V0UmVkaXJlY3RVcmkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmF1dGgucG9zdExvZ291dFJlZGlyZWN0VXJpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0byBnZXQgdGhlIGN1cnJlbnQge0BsaW5rIENvbmZpZ3VyYXRpb259IG9iamVjdCBpbiBNU0FMXG4gICAqXG4gICAqIEByZXR1cm5zIHtAbGluayBDb25maWd1cmF0aW9ufVxuICAgKi9cbiAgcHVibGljIGdldEN1cnJlbnRDb25maWd1cmF0aW9uKCk6IENvbmZpZ3VyYXRpb24ge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRocm93IENsaWVudENvbmZpZ3VyYXRpb25FcnJvci5jcmVhdGVOb1NldENvbmZpZ3VyYXRpb25FcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gU3RyaW5nIFV0aWwgKFNob3VsZCBiZSBleHRyYWN0ZWQgdG8gVXRpbHMudHMpXG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBSZXR1cm5zIHRoZSBhbmNob3IgcGFydCgjKSBvZiB0aGUgVVJMXG4gICAqL1xuICBwcml2YXRlIGdldEhhc2goaGFzaDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoaGFzaC5pbmRleE9mKFwiIy9cIikgPiAtMSkge1xuICAgICAgaGFzaCA9IGhhc2guc3Vic3RyaW5nKGhhc2guaW5kZXhPZihcIiMvXCIpICsgMik7XG4gICAgfSBlbHNlIGlmIChoYXNoLmluZGV4T2YoXCIjXCIpID4gLTEpIHtcbiAgICAgIGhhc2ggPSBoYXNoLnN1YnN0cmluZygxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogZXh0cmFjdCBVUkkgZnJvbSB0aGUgaG9zdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gVVJJXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IGhvc3QgZnJvbSB0aGUgVVJJXG4gICAqL1xuICBwcml2YXRlIGdldEhvc3RGcm9tVXJpKHVyaTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyByZW1vdmUgaHR0cDovLyBvciBodHRwczovLyBmcm9tIHVyaVxuICAgIGxldCBleHRyYWN0ZWRVcmkgPSBTdHJpbmcodXJpKS5yZXBsYWNlKC9eKGh0dHBzPzopXFwvXFwvLywgXCJcIik7XG4gICAgZXh0cmFjdGVkVXJpID0gZXh0cmFjdGVkVXJpLnNwbGl0KFwiL1wiKVswXTtcbiAgICByZXR1cm4gZXh0cmFjdGVkVXJpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBVdGlscyBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIEF1dGhlbnRpY2F0aW9uXG4gICAqIEBwYXJhbSB7QGxpbmsgYWNjb3VudH0gYWNjb3VudCBvYmplY3RcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKiBAcGFyYW0gc2lsZW50Q2FsbFxuICAgKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSB0b2tlbiB0eXBlOiBpZF90b2tlbiBvciBhY2Nlc3NfdG9rZW5cbiAgICpcbiAgICovXG4gIHByaXZhdGUgZ2V0VG9rZW5UeXBlKGFjY291bnRPYmplY3Q6IEFjY291bnQsIHNjb3Blczogc3RyaW5nW10sIHNpbGVudENhbGw6IGJvb2xlYW4pOiBzdHJpbmcge1xuXG4gICAgLy8gaWYgYWNjb3VudCBpcyBwYXNzZWQgYW5kIG1hdGNoZXMgdGhlIGFjY291bnQgb2JqZWN0L29yIHNldCB0byBnZXRBY2NvdW50KCkgZnJvbSBjYWNoZVxuICAgIC8vIGlmIGNsaWVudC1pZCBpcyBwYXNzZWQgYXMgc2NvcGUsIGdldCBpZF90b2tlbiBlbHNlIHRva2VuL2lkX3Rva2VuX3Rva2VuIChpbiBjYXNlIG5vIHNlc3Npb24gZXhpc3RzKVxuICAgIGxldCB0b2tlblR5cGU6IHN0cmluZztcblxuICAgIC8vIGFjcXVpcmVUb2tlblNpbGVudFxuICAgIGlmIChzaWxlbnRDYWxsKSB7XG4gICAgICBpZiAoVXRpbHMuY29tcGFyZUFjY291bnRzKGFjY291bnRPYmplY3QsIHRoaXMuZ2V0QWNjb3VudCgpKSkge1xuICAgICAgICB0b2tlblR5cGUgPSAoc2NvcGVzLmluZGV4T2YodGhpcy5jb25maWcuYXV0aC5jbGllbnRJZCkgPiAtMSkgPyBSZXNwb25zZVR5cGVzLmlkX3Rva2VuIDogUmVzcG9uc2VUeXBlcy50b2tlbjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0b2tlblR5cGUgID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY29uZmlnLmF1dGguY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlblR5cGU7XG4gICAgfVxuICAgIC8vIGFsbCBvdGhlciBjYXNlc1xuICAgIGVsc2Uge1xuICAgICAgaWYgKCFVdGlscy5jb21wYXJlQWNjb3VudHMoYWNjb3VudE9iamVjdCwgdGhpcy5nZXRBY2NvdW50KCkpKSB7XG4gICAgICAgICAgIHRva2VuVHlwZSA9IFJlc3BvbnNlVHlwZXMuaWRfdG9rZW5fdG9rZW47XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdG9rZW5UeXBlID0gKHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpID4gLTEpID8gUmVzcG9uc2VUeXBlcy5pZF90b2tlbiA6IFJlc3BvbnNlVHlwZXMudG9rZW47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlblR5cGU7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIFNldHMgdGhlIGNhY2hla2V5cyBmb3IgYW5kIHN0b3JlcyB0aGUgYWNjb3VudCBpbmZvcm1hdGlvbiBpbiBjYWNoZVxuICAgKiBAcGFyYW0gYWNjb3VudFxuICAgKiBAcGFyYW0gc3RhdGVcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBzZXRBY2NvdW50Q2FjaGUoYWNjb3VudDogQWNjb3VudCwgc3RhdGU6IHN0cmluZykge1xuXG4gICAgLy8gQ2FjaGUgYWNxdWlyZVRva2VuQWNjb3VudEtleVxuICAgIGxldCBhY2NvdW50SWQgPSBhY2NvdW50ID8gdGhpcy5nZXRBY2NvdW50SWQoYWNjb3VudCkgOiBDb25zdGFudHMubm9fYWNjb3VudDtcblxuICAgIGNvbnN0IGFjcXVpcmVUb2tlbkFjY291bnRLZXkgPSBTdG9yYWdlLmdlbmVyYXRlQWNxdWlyZVRva2VuQWNjb3VudEtleShhY2NvdW50SWQsIHN0YXRlKTtcbiAgICB0aGlzLmNhY2hlU3RvcmFnZS5zZXRJdGVtKGFjcXVpcmVUb2tlbkFjY291bnRLZXksIEpTT04uc3RyaW5naWZ5KGFjY291bnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogU2V0cyB0aGUgY2FjaGVLZXkgZm9yIGFuZCBzdG9yZXMgdGhlIGF1dGhvcml0eSBpbmZvcm1hdGlvbiBpbiBjYWNoZVxuICAgKiBAcGFyYW0gc3RhdGVcbiAgICogQHBhcmFtIGF1dGhvcml0eVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHNldEF1dGhvcml0eUNhY2hlKHN0YXRlOiBzdHJpbmcsIGF1dGhvcml0eTogc3RyaW5nKSB7XG4gICAgLy8gQ2FjaGUgYXV0aG9yaXR5S2V5XG4gICAgY29uc3QgYXV0aG9yaXR5S2V5ID0gU3RvcmFnZS5nZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZSk7XG4gICAgdGhpcy5jYWNoZVN0b3JhZ2Uuc2V0SXRlbShhdXRob3JpdHlLZXksIFV0aWxzLkNhbm9uaWNhbGl6ZVVyaShhdXRob3JpdHkpLCB0aGlzLmluQ29va2llKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIEBpZ25vcmVcbiAgICpcbiAgICogUmV0dXJucyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBsb2dnZWQgaW4gYWNjb3VudFxuICAgKiBAcGFyYW0gYWNjb3VudFxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIGdldEFjY291bnRJZChhY2NvdW50OiBBY2NvdW50KTogYW55IHtcbiAgICAvL3JldHVybiBgJHthY2NvdW50LmFjY291bnRJZGVudGlmaWVyfWAgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBgJHthY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcn1gO1xuICAgIGxldCBhY2NvdW50SWQ6IHN0cmluZztcbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoYWNjb3VudC5ob21lQWNjb3VudElkZW50aWZpZXIpKSB7XG4gICAgICAgICBhY2NvdW50SWQgPSBhY2NvdW50LmhvbWVBY2NvdW50SWRlbnRpZmllcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY291bnRJZCA9IENvbnN0YW50cy5ub19hY2NvdW50O1xuICAgIH1cblxuICAgIHJldHVybiBhY2NvdW50SWQ7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIENvbnN0cnVjdCAndG9rZW5SZXF1ZXN0JyBmcm9tIHRoZSBhdmFpbGFibGUgZGF0YSBpbiBhZGFsSWRUb2tlblxuICAgKiBAcGFyYW0gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZElEVG9rZW5SZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyk6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycyB7XG5cbiAgICBsZXQgdG9rZW5SZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgPSB7XG4gICAgICBzY29wZXM6IFt0aGlzLmNsaWVudElkXSxcbiAgICAgIGF1dGhvcml0eTogdGhpcy5hdXRob3JpdHksXG4gICAgICBhY2NvdW50OiB0aGlzLmdldEFjY291bnQoKSxcbiAgICAgIGV4dHJhUXVlcnlQYXJhbWV0ZXJzOiByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgfTtcblxuICAgIHJldHVybiB0b2tlblJlcXVlc3Q7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIFV0aWxpdHkgdG8gcG9wdWxhdGUgUXVlcnlQYXJhbWV0ZXJzIGFuZCBFeHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBTZXJ2ZXJSZXF1ZXN0UGFyYW1lcmVyc1xuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKiBAcGFyYW0gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0XG4gICAqL1xuICBwcml2YXRlIHBvcHVsYXRlUXVlcnlQYXJhbXMoYWNjb3VudDogQWNjb3VudCwgcmVxdWVzdDogQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3Q6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzLCBhZGFsSWRUb2tlbk9iamVjdD86IGFueSk6IFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIHtcblxuICAgIGxldCBxdWVyeVBhcmFtZXRlcnM6IFFQRGljdCA9IHt9O1xuXG4gICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgIC8vIGFkZCB0aGUgcHJvbXB0IHBhcmFtZXRlciB0byBzZXJ2ZXJSZXF1ZXN0UGFyYW1ldGVycyBpZiBwYXNzZWRcbiAgICAgIGlmIChyZXF1ZXN0LnByb21wdCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlUHJvbXB0UGFyYW1ldGVyKHJlcXVlc3QucHJvbXB0KTtcbiAgICAgICAgc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0LnByb21wdFZhbHVlID0gcmVxdWVzdC5wcm9tcHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBjbGFpbXMgY2hhbGxlbmdlIHRvIHNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIGlmIHBhc3NlZFxuICAgICAgaWYgKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCkge1xuICAgICAgICB2YWxpZGF0ZUNsYWltc1JlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgIHNlcnZlckF1dGhlbnRpY2F0aW9uUmVxdWVzdC5jbGFpbXNWYWx1ZSA9IHJlcXVlc3QuY2xhaW1zUmVxdWVzdDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgdGhlIGRldmVsb3BlciBwcm92aWRlcyBvbmUgb2YgdGhlc2UsIGdpdmUgcHJlZmVyZW5jZSB0byBkZXZlbG9wZXIgY2hvaWNlXG4gICAgICBpZiAoVXRpbHMuaXNTU09QYXJhbShyZXF1ZXN0KSkge1xuICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5jb25zdHJ1Y3RVbmlmaWVkQ2FjaGVRdWVyeVBhcmFtZXRlcihyZXF1ZXN0LCBudWxsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYWRhbElkVG9rZW5PYmplY3QpIHtcbiAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IFV0aWxzLmNvbnN0cnVjdFVuaWZpZWRDYWNoZVF1ZXJ5UGFyYW1ldGVyKG51bGwsIGFkYWxJZFRva2VuT2JqZWN0KTtcbiAgICB9XG5cbiAgICAvLyBhZGRzIHNpZC9sb2dpbl9oaW50IGlmIG5vdCBwb3B1bGF0ZWQ7IHBvcHVsYXRlcyBkb21haW5fcmVxLCBsb2dpbl9yZXEgYW5kIGRvbWFpbl9oaW50XG4gICAgdGhpcy5sb2dnZXIudmVyYm9zZShcIkNhbGxpbmcgYWRkSGludCBwYXJhbWV0ZXJzXCIpO1xuICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHRoaXMuYWRkSGludFBhcmFtZXRlcnMoYWNjb3VudCwgcXVlcnlQYXJhbWV0ZXJzLCBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QpO1xuXG4gICAgLy8gc2FuaXR5IGNoZWNrIGZvciBkZXZlbG9wZXIgcGFzc2VkIGV4dHJhUXVlcnlQYXJhbWV0ZXJzXG4gICAgbGV0IGVRUGFyYW1zOiBRUERpY3Q7XG4gICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgIGVRUGFyYW1zID0gdGhpcy5zYW5pdGl6ZUVRUGFyYW1zKHJlcXVlc3QpO1xuICAgIH1cblxuICAgIC8vIFBvcHVsYXRlIHRoZSBleHRyYVF1ZXJ5UGFyYW1ldGVycyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QucXVlcnlQYXJhbWV0ZXJzID0gVXRpbHMuZ2VuZXJhdGVRdWVyeVBhcmFtZXRlcnNTdHJpbmcocXVlcnlQYXJhbWV0ZXJzKTtcbiAgICBzZXJ2ZXJBdXRoZW50aWNhdGlvblJlcXVlc3QuZXh0cmFRdWVyeVBhcmFtZXRlcnMgPSBVdGlscy5nZW5lcmF0ZVF1ZXJ5UGFyYW1ldGVyc1N0cmluZyhlUVBhcmFtcyk7XG5cbiAgICByZXR1cm4gc2VydmVyQXV0aGVudGljYXRpb25SZXF1ZXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICogQGlnbm9yZVxuICAgKlxuICAgKiBVdGlsaXR5IHRvIHRlc3QgaWYgdmFsaWQgcHJvbXB0IHZhbHVlIGlzIHBhc3NlZCBpbiB0aGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVByb21wdFBhcmFtZXRlciAocHJvbXB0OiBzdHJpbmcpIHtcbiAgICBpZiAoIShbUHJvbXB0U3RhdGUuTE9HSU4sIFByb21wdFN0YXRlLlNFTEVDVF9BQ0NPVU5ULCBQcm9tcHRTdGF0ZS5DT05TRU5ULCBQcm9tcHRTdGF0ZS5OT05FXS5pbmRleE9mKHByb21wdCkgPj0gMCkpIHtcbiAgICAgICAgdGhyb3cgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yLmNyZWF0ZUludmFsaWRQcm9tcHRFcnJvcihwcm9tcHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqIEBpZ25vcmVcblxuICAgKiBSZW1vdmVzIHVubmVjZXNzYXJ5IG9yIGR1cGxpY2F0ZSBxdWVyeSBwYXJhbWV0ZXJzIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHJlcXVlc3RcbiAgICovXG4gIHByaXZhdGUgc2FuaXRpemVFUVBhcmFtcyhyZXF1ZXN0OiBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMpIDogUVBEaWN0IHtcbiAgICBsZXQgZVFQYXJhbXMgOiBRUERpY3QgPSByZXF1ZXN0LmV4dHJhUXVlcnlQYXJhbWV0ZXJzO1xuICAgIGlmICghZVFQYXJhbXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAocmVxdWVzdC5jbGFpbXNSZXF1ZXN0KSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuaW5nKFwiUmVtb3ZlZCBkdXBsaWNhdGUgY2xhaW1zIGZyb20gZXh0cmFRdWVyeVBhcmFtZXRlcnMuIFBsZWFzZSB1c2UgZWl0aGVyIHRoZSBjbGFpbXNSZXF1ZXN0IGZpZWxkIE9SIHBhc3MgYXMgZXh0cmFRdWVyeVBhcmFtZXRlciAtIG5vdCBib3RoLlwiKTtcbiAgICAgIGRlbGV0ZSBlUVBhcmFtc1tDb25zdGFudHMuY2xhaW1zXTtcbiAgICB9XG4gICAgZGVsZXRlIGVRUGFyYW1zW1NTT1R5cGVzLlNJRF07XG4gICAgZGVsZXRlIGVRUGFyYW1zW1NTT1R5cGVzLkxPR0lOX0hJTlRdO1xuICAgIHJldHVybiBlUVBhcmFtcztcbiAgfVxuXG4gLy8jZW5kcmVnaW9uXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQ2xpZW50SW5mbyB9IGZyb20gXCIuL0NsaWVudEluZm9cIjtcbmltcG9ydCB7IElkVG9rZW4gfSBmcm9tIFwiLi9JZFRva2VuXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbi8qKlxuICogYWNjb3VudElkZW50aWZpZXIgICAgICAgY29tYmluYXRpb24gb2YgaWRUb2tlbi51aWQgYW5kIGlkVG9rZW4udXRpZFxuICogaG9tZUFjY291bnRJZGVudGlmaWVyICAgY29tYmluYXRpb24gb2YgY2xpZW50SW5mby51aWQgYW5kIGNsaWVudEluZm8udXRpZFxuICogdXNlck5hbWUgICAgICAgICAgICAgICAgaWRUb2tlbi5wcmVmZXJyZWRfdXNlcm5hbWVcbiAqIG5hbWUgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4ubmFtZVxuICogaWRUb2tlbiAgICAgICAgICAgICAgICAgaWRUb2tlblxuICogc2lkICAgICAgICAgICAgICAgICAgICAgaWRUb2tlbi5zaWQgLSBzZXNzaW9uIGlkZW50aWZpZXJcbiAqIGVudmlyb25tZW50ICAgICAgICAgICAgIGlkdG9rZW4uaXNzdWVyICh0aGUgYXV0aG9yaXR5IHRoYXQgaXNzdWVzIHRoZSB0b2tlbilcbiAqL1xuZXhwb3J0IGNsYXNzIEFjY291bnQge1xuXG4gICAgYWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcbiAgICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpZFRva2VuOiBPYmplY3Q7XG4gICAgc2lkOiBzdHJpbmc7XG4gICAgZW52aXJvbm1lbnQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gQWNjb3VudCBPYmplY3RcbiAgICAgKiBAcHJhcmFtIGFjY291bnRJZGVudGlmaWVyXG4gICAgICogQHBhcmFtIGhvbWVBY2NvdW50SWRlbnRpZmllclxuICAgICAqIEBwYXJhbSB1c2VyTmFtZVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGlkVG9rZW5cbiAgICAgKiBAcGFyYW0gc2lkXG4gICAgICogQHBhcmFtIGVudmlyb25tZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkZW50aWZpZXI6IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcsIHVzZXJOYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgaWRUb2tlbjogT2JqZWN0LCBzaWQ6IHN0cmluZywgIGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuYWNjb3VudElkZW50aWZpZXIgPSBhY2NvdW50SWRlbnRpZmllcjtcbiAgICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xuICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuaWRUb2tlbiA9IGlkVG9rZW47XG4gICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQHBhcmFtIGlkVG9rZW5cbiAgICAgKiBAcGFyYW0gY2xpZW50SW5mb1xuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVBY2NvdW50KGlkVG9rZW46IElkVG9rZW4sIGNsaWVudEluZm86IENsaWVudEluZm8pOiBBY2NvdW50IHtcblxuICAgICAgICAvLyBjcmVhdGUgYWNjb3VudElkZW50aWZpZXJcbiAgICAgICAgY29uc3QgYWNjb3VudElkZW50aWZpZXI6IHN0cmluZyA9IGlkVG9rZW4ub2JqZWN0SWQgfHwgIGlkVG9rZW4uc3ViamVjdDtcblxuICAgICAgICAvLyBjcmVhdGUgaG9tZUFjY291bnRJZGVudGlmaWVyXG4gICAgICAgIGNvbnN0IHVpZDogc3RyaW5nID0gY2xpZW50SW5mbyA/IGNsaWVudEluZm8udWlkIDogXCJcIjtcbiAgICAgICAgY29uc3QgdXRpZDogc3RyaW5nID0gY2xpZW50SW5mbyA/IGNsaWVudEluZm8udXRpZCA6IFwiXCI7XG5cbiAgICAgICAgbGV0IGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuICAgICAgICBpZiAoIVV0aWxzLmlzRW1wdHkodWlkKSAmJiAhVXRpbHMuaXNFbXB0eSh1dGlkKSkge1xuICAgICAgICAgICAgaG9tZUFjY291bnRJZGVudGlmaWVyID0gVXRpbHMuYmFzZTY0RW5jb2RlU3RyaW5nVXJsU2FmZSh1aWQpICsgXCIuXCIgKyBVdGlscy5iYXNlNjRFbmNvZGVTdHJpbmdVcmxTYWZlKHV0aWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQWNjb3VudChhY2NvdW50SWRlbnRpZmllciwgaG9tZUFjY291bnRJZGVudGlmaWVyLCBpZFRva2VuLnByZWZlcnJlZE5hbWUsIGlkVG9rZW4ubmFtZSwgaWRUb2tlbi5kZWNvZGVkSWRUb2tlbiwgaWRUb2tlbi5zaWQsIGlkVG9rZW4uaXNzdWVyKTtcbiAgICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBYaHJDbGllbnQgfSBmcm9tIFwiLi9YSFJDbGllbnRcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBYWRBdXRob3JpdHkgZXh0ZW5kcyBBdXRob3JpdHkge1xuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBBYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50OiBzdHJpbmcgPSBcImh0dHBzOi8vbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbS9jb21tb24vZGlzY292ZXJ5L2luc3RhbmNlXCI7XG5cbiAgcHJpdmF0ZSBnZXQgQWFkSW5zdGFuY2VEaXNjb3ZlcnlFbmRwb2ludFVybCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGAke0FhZEF1dGhvcml0eS5BYWRJbnN0YW5jZURpc2NvdmVyeUVuZHBvaW50fT9hcGktdmVyc2lvbj0xLjAmYXV0aG9yaXphdGlvbl9lbmRwb2ludD0ke3RoaXMuQ2Fub25pY2FsQXV0aG9yaXR5fW9hdXRoMi92Mi4wL2F1dGhvcml6ZWA7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XG4gICAgc3VwZXIoYXV0aG9yaXR5LCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IEF1dGhvcml0eVR5cGUoKTogQXV0aG9yaXR5VHlwZSB7XG4gICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVHJ1c3RlZEhvc3RMaXN0OiBhbnkgPSB7XG4gICAgXCJsb2dpbi53aW5kb3dzLm5ldFwiOiBcImxvZ2luLndpbmRvd3MubmV0XCIsXG4gICAgXCJsb2dpbi5jaGluYWNsb3VkYXBpLmNuXCI6IFwibG9naW4uY2hpbmFjbG91ZGFwaS5jblwiLFxuICAgIFwibG9naW4uY2xvdWRnb3ZhcGkudXNcIjogXCJsb2dpbi5jbG91ZGdvdmFwaS51c1wiLFxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5jb21cIixcbiAgICBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5kZVwiOiBcImxvZ2luLm1pY3Jvc29mdG9ubGluZS5kZVwiLFxuICAgIFwibG9naW4ubWljcm9zb2Z0b25saW5lLnVzXCI6IFwibG9naW4ubWljcm9zb2Z0b25saW5lLnVzXCJcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIE9JREMgZW5kcG9pbnRcbiAgICogT25seSByZXNwb25kcyB3aXRoIHRoZSBlbmRwb2ludFxuICAgKi9cbiAgcHVibGljIEdldE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludEFzeW5jKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICBjb25zdCByZXN1bHRQcm9taXNlOiBQcm9taXNlPHN0cmluZz4gPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICByZXNvbHZlKHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCkpO1xuXG4gICAgaWYgKCF0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQpIHtcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH1cblxuICAgIGxldCBob3N0OiBzdHJpbmcgPSB0aGlzLkNhbm9uaWNhbEF1dGhvcml0eVVybENvbXBvbmVudHMuSG9zdE5hbWVBbmRQb3J0O1xuICAgIGlmICh0aGlzLklzSW5UcnVzdGVkSG9zdExpc3QoaG9zdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH1cblxuICAgIGxldCBjbGllbnQ6IFhockNsaWVudCA9IG5ldyBYaHJDbGllbnQoKTtcblxuICAgIHJldHVybiBjbGllbnQuc2VuZFJlcXVlc3RBc3luYyh0aGlzLkFhZEluc3RhbmNlRGlzY292ZXJ5RW5kcG9pbnRVcmwsIFwiR0VUXCIsIHRydWUpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRlbmFudF9kaXNjb3ZlcnlfZW5kcG9pbnQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBob3N0IGlzIGluIGEgbGlzdCBvZiB0cnVzdGVkIGhvc3RzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgaG9zdCB0byBsb29rIHVwXG4gICAqL1xuICBwdWJsaWMgSXNJblRydXN0ZWRIb3N0TGlzdChob3N0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gQWFkQXV0aG9yaXR5LlRydXN0ZWRIb3N0TGlzdFtob3N0LnRvTG93ZXJDYXNlKCldO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuLyoqXG4gKiBYSFIgY2xpZW50IGZvciBKU09OIGVuZHBvaW50c1xuICogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvYXN5bmMtcHJvbWlzZVxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgWGhyQ2xpZW50IHtcbiAgcHVibGljIHNlbmRSZXF1ZXN0QXN5bmModXJsOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBlbmFibGVDYWNoaW5nPzogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIC8qYXN5bmM6ICovIHRydWUpO1xuICAgICAgaWYgKGVuYWJsZUNhY2hpbmcpIHtcbiAgICAgICAgLy8gVE9ETzogKHNoaXZiKSBlbnN1cmUgdGhhdCB0aGlzIGNhbiBiZSBjYWNoZWRcbiAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwiUHVibGljXCIpO1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKGV2KSA9PiB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuaGFuZGxlRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuaGFuZGxlRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUoanNvblJlc3BvbnNlKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gKGV2KSA9PiB7XG4gICAgICAgIHJlamVjdCh4aHIuc3RhdHVzKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChtZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBcIm5vdCBpbXBsZW1lbnRlZFwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGhhbmRsZUVycm9yKHJlc3BvbnNlVGV4dDogc3RyaW5nKTogYW55IHtcbiAgICB2YXIganNvblJlc3BvbnNlO1xuICAgIHRyeSB7XG4gICAgICBqc29uUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICBpZiAoanNvblJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGpzb25SZXNwb25zZS5lcnJvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgcmVzcG9uc2VUZXh0O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiByZXNwb25zZVRleHQ7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbi8vIG1ha2UgQ2FjaGVTdG9yYWdlIGEgZml4ZWQgdHlwZSB0byBsaW1pdCBpdCB0byBzcGVjaWZpYyBpbnB1dHNcbmV4cG9ydCB0eXBlIENhY2hlTG9jYXRpb24gPSBcImxvY2FsU3RvcmFnZVwiIHwgXCJzZXNzaW9uU3RvcmFnZVwiO1xuXG4vKipcbiAqIERlZmF1bHRzIGZvciB0aGUgQ29uZmlndXJhdGlvbiBPcHRpb25zXG4gKi9cbmNvbnN0IEZSQU1FX1RJTUVPVVQgPSA2MDAwO1xuY29uc3QgT0ZGU0VUID0gMzAwO1xuY29uc3QgTkFWSUdBVEVfRlJBTUVfV0FJVCA9IDUwMDtcblxuXG4vKipcbiAqICBBdXRoZW50aWNhdGlvbiBPcHRpb25zXG4gKlxuICogIGNsaWVudElkICAgICAgICAgICAgICAgICAgICAtIENsaWVudCBJRCBhc3NpZ25lZCB0byB5b3VyIGFwcCBieSBBenVyZSBBY3RpdmUgRGlyZWN0b3J5XG4gKiAgYXV0aG9yaXR5ICAgICAgICAgICAgICAgICAgIC0gRGV2ZWxvcGVyIGNhbiBjaG9vc2UgdG8gc2VuZCBhbiBhdXRob3JpdHksIGRlZmF1bHRzIHRvIFwiIFwiXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoVE9ETzogRm9sbG93IHVwIHdpdGggdGhlIGF1dGhvcml0eSBkaXNjdXNzaW9uIHdpdGggdGhlIFBNcyAtIFVudGlsIHRoZW4gdGhpcyBjb21tZW50IGlzIGEgcGxhY2Vob2xkZXIpXG4gKiAgdmFsaWRhdGVBdXRob3JpdHkgICAgICAgICAgIC0gVXNlZCB0byB0dXJuIGF1dGhvcml0eSB2YWxpZGF0aW9uIG9uL29mZi4gV2hlbiBzZXQgdG8gdHJ1ZSAoZGVmYXVsdCksIE1TQUwgd2lsbCBjb21wYXJlIHRoZSBhcHBsaWNhdGlvbidzIGF1dGhvcml0eVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdhaW5zdCB3ZWxsLWtub3duIFVSTHMgdGVtcGxhdGVzIHJlcHJlc2VudGluZyB3ZWxsLWZvcm1lZCBhdXRob3JpdGllcy5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IGlzIHVzZWZ1bCB3aGVuIHRoZSBhdXRob3JpdHkgaXMgb2J0YWluZWQgYXQgcnVuIHRpbWUgdG8gcHJldmVudCBNU0FMIGZyb20gZGlzcGxheWluZyBhdXRoZW50aWNhdGlvbiBwcm9tcHRzIGZyb20gbWFsaWNpb3VzIHBhZ2VzLlxuICogIHJlZGlyZWN0VXJpICAgICAgICAgICAgICAgICAtIFRoZSByZWRpcmVjdCBVUkkgb2YgdGhlIGFwcGxpY2F0aW9uLCB0aGlzIHNob3VsZCBiZSBzYW1lIGFzIHRoZSB2YWx1ZSBpbiB0aGUgYXBwbGljYXRpb24gcmVnaXN0cmF0aW9uIHBvcnRhbC5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIGB3aW5kb3cubG9jYXRpb24uaHJlZmAuXG4gKiAgcG9zdExvZ291dFJlZGlyZWN0VXJpICAgICAgIC0gVXNlZCB0byByZWRpcmVjdCB0aGUgdXNlciB0byB0aGlzIGxvY2F0aW9uIGFmdGVyIGxvZ291dC4gRGVmYXVsdHMgdG8gYHdpbmRvdy5sb2NhdGlvbi5ocmVmYC5cbiAqICBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICAgLSBVc2UgdG8gc2VuZCB0aGUgc3RhdGUgcGFyYW1ldGVyIHdpdGggYXV0aGVudGljYXRpb24gcmVxdWVzdFxuICogIG5hdmlnYXRlVG9Mb2dpblJlcXVlc3RVcmwgICAtIFVzZWQgdG8gdHVybiBvZmYgZGVmYXVsdCBuYXZpZ2F0aW9uIHRvIHN0YXJ0IHBhZ2UgYWZ0ZXIgbG9naW4uIERlZmF1bHQgaXMgdHJ1ZS4gVGhpcyBpcyB1c2VkIG9ubHkgZm9yIHJlZGlyZWN0IGZsb3dzLlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQXV0aE9wdGlvbnMgPSB7XG4gIGNsaWVudElkOiBzdHJpbmc7XG4gIGF1dGhvcml0eT86IHN0cmluZztcbiAgdmFsaWRhdGVBdXRob3JpdHk/OiBib29sZWFuO1xuICByZWRpcmVjdFVyaT86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk/OiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcbiAgbmF2aWdhdGVUb0xvZ2luUmVxdWVzdFVybD86IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIENhY2hlIE9wdGlvbnNcbiAqXG4gKiBjYWNoZUxvY2F0aW9uICAgICAgICAgICAgLSBVc2VkIHRvIHNwZWNpZnkgdGhlIGNhY2hlTG9jYXRpb24gdXNlciB3YW50cyB0byBzZXQ6IFZhbGlkIHZhbHVlcyBhcmUgXCJsb2NhbFN0b3JhZ2VcIiBhbmQgXCJzZXNzaW9uU3RvcmFnZVwiXG4gKiBzdG9yZUF1dGhTdGF0ZUluQ29va2llICAgLSBJZiBzZXQsIHRoZSBsaWJyYXJ5IHdpbGwgc3RvcmUgdGhlIGF1dGggcmVxdWVzdCBzdGF0ZSByZXF1aXJlZCBmb3IgdmFsaWRhdGlvbiBvZiB0aGUgYXV0aCBmbG93cyBpbiB0aGUgYnJvd3NlciBjb29raWVzLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSBkZWZhdWx0IHRoaXMgZmxhZyBpcyBzZXQgdG8gZmFsc2UuXG4gKi9cbmV4cG9ydCB0eXBlIENhY2hlT3B0aW9ucyA9IHtcbiAgY2FjaGVMb2NhdGlvbj86IENhY2hlTG9jYXRpb247XG4gIHN0b3JlQXV0aFN0YXRlSW5Db29raWU/OiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBMaWJyYXJ5IFNwZWNpZmljIE9wdGlvbnNcbiAqXG4gKiBsb2dnZXIgICAgICAgICAgICAgICAgICAgICAgIC0gVXNlZCB0byBpbml0aWFsaXplIHRoZSBMb2dnZXIgb2JqZWN0OyBUT0RPOiBFeHBhbmQgb24gbG9nZ2VyIGRldGFpbHMgb3IgbGluayB0byB0aGUgZG9jdW1lbnRhdGlvbiBvbiBsb2dnZXJcbiAqIGxvYWRGcmFtZVRpbWVvdXQgICAgICAgICAgICAgLSBtYXhpbXVtIHRpbWUgdGhlIGxpYnJhcnkgc2hvdWxkIHdhaXQgZm9yIGEgZnJhbWUgdG8gbG9hZFxuICogdG9rZW5SZW5ld2FsT2Zmc2V0U2Vjb25kcyAgICAtIHNldHMgdGhlIHdpbmRvdyBvZiBvZmZzZXQgbmVlZGVkIHRvIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJ5XG4gKlxuICovXG5leHBvcnQgdHlwZSBTeXN0ZW1PcHRpb25zID0ge1xuICBsb2dnZXI/OiBMb2dnZXI7XG4gIGxvYWRGcmFtZVRpbWVvdXQ/OiBudW1iZXI7XG4gIHRva2VuUmVuZXdhbE9mZnNldFNlY29uZHM/OiBudW1iZXI7XG4gIG5hdmlnYXRlRnJhbWVXYWl0PzogbnVtYmVyO1xufTtcblxuLyoqXG4gKiBBcHAvRnJhbWV3b3JrIHNwZWNpZmljIGVudmlyb25tZW50IFN1cHBvcnRcbiAqXG4gKiBpc0FuZ3VsYXIgICAgICAgICAgICAgICAgLSBmbGFnIHNldCB0byBkZXRlcm1pbmUgaWYgaXQgaXMgQW5ndWxhciBGcmFtZXdvcmsuIFVzZWQgdG8gYnJvYWRjYXN0IHRva2Vucy4gVE9ETzogZGV0YW5nbGUgdGhpcyBkZXBlbmRlbmN5IGZyb20gY29yZS5cbiAqIHVucHJvdGVjdGVkUmVzb3VyY2VzICAgICAtIEFycmF5IG9mIFVSSSdzIHdoaWNoIGFyZSB1bnByb3RlY3RlZCByZXNvdXJjZXMuIE1TQUwgd2lsbCBub3QgYXR0YWNoIGEgdG9rZW4gdG8gb3V0Z29pbmcgcmVxdWVzdHMgdGhhdCBoYXZlIHRoZXNlIFVSSS4gRGVmYXVsdHMgdG8gJ251bGwnLlxuICogcHJvdGVjdGVkUmVzb3VyY2VNYXAgICAgIC0gVGhpcyBpcyBtYXBwaW5nIG9mIHJlc291cmNlcyB0byBzY29wZXMgdXNlZCBieSBNU0FMIGZvciBhdXRvbWF0aWNhbGx5IGF0dGFjaGluZyBhY2Nlc3MgdG9rZW5zIGluIHdlYiBBUEkgY2FsbHMuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEEgc2luZ2xlIGFjY2VzcyB0b2tlbiBpcyBvYnRhaW5lZCBmb3IgdGhlIHJlc291cmNlLiBTbyB5b3UgY2FuIG1hcCBhIHNwZWNpZmljIHJlc291cmNlIHBhdGggYXMgZm9sbG93czpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL3YxLjAvbWVcIiwgW1widXNlci5yZWFkXCJdfSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgdGhlIGFwcCBVUkwgb2YgdGhlIHJlc291cmNlIGFzOiB7XCJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vXCIsIFtcInVzZXIucmVhZFwiLCBcIm1haWwuc2VuZFwiXX0uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgcmVxdWlyZWQgZm9yIENPUlMgY2FsbHMuXG4gKlxuICovXG5leHBvcnQgdHlwZSBGcmFtZXdvcmtPcHRpb25zID0ge1xuICBpc0FuZ3VsYXI/OiBib29sZWFuO1xuICB1bnByb3RlY3RlZFJlc291cmNlcz86IEFycmF5PHN0cmluZz47XG4gIHByb3RlY3RlZFJlc291cmNlTWFwPzogTWFwPHN0cmluZywgQXJyYXk8c3RyaW5nPj47XG59O1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gT2JqZWN0XG4gKi9cbmV4cG9ydCB0eXBlIENvbmZpZ3VyYXRpb24gPSB7XG4gIGF1dGg6IEF1dGhPcHRpb25zLFxuICBjYWNoZT86IENhY2hlT3B0aW9ucyxcbiAgc3lzdGVtPzogU3lzdGVtT3B0aW9ucyxcbiAgZnJhbWV3b3JrPzogRnJhbWV3b3JrT3B0aW9uc1xufTtcblxuY29uc3QgREVGQVVMVF9BVVRIX09QVElPTlM6IEF1dGhPcHRpb25zID0ge1xuICBjbGllbnRJZDogXCJcIixcbiAgYXV0aG9yaXR5OiBudWxsLFxuICB2YWxpZGF0ZUF1dGhvcml0eTogdHJ1ZSxcbiAgcmVkaXJlY3RVcmk6ICgpID0+IFV0aWxzLmdldERlZmF1bHRSZWRpcmVjdFVyaSgpLFxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6ICgpID0+IFV0aWxzLmdldERlZmF1bHRSZWRpcmVjdFVyaSgpLFxuICBuYXZpZ2F0ZVRvTG9naW5SZXF1ZXN0VXJsOiB0cnVlXG59O1xuXG5jb25zdCBERUZBVUxUX0NBQ0hFX09QVElPTlM6IENhY2hlT3B0aW9ucyA9IHtcbiAgY2FjaGVMb2NhdGlvbjogXCJzZXNzaW9uU3RvcmFnZVwiLFxuICBzdG9yZUF1dGhTdGF0ZUluQ29va2llOiBmYWxzZVxufTtcblxuY29uc3QgREVGQVVMVF9TWVNURU1fT1BUSU9OUzogU3lzdGVtT3B0aW9ucyA9IHtcbiAgbG9nZ2VyOiBuZXcgTG9nZ2VyKG51bGwpLFxuICBsb2FkRnJhbWVUaW1lb3V0OiBGUkFNRV9USU1FT1VULFxuICB0b2tlblJlbmV3YWxPZmZzZXRTZWNvbmRzOiBPRkZTRVQsXG4gIG5hdmlnYXRlRnJhbWVXYWl0OiBOQVZJR0FURV9GUkFNRV9XQUlUXG59O1xuXG5jb25zdCBERUZBVUxUX0ZSQU1FV09SS19PUFRJT05TOiBGcmFtZXdvcmtPcHRpb25zID0ge1xuICBpc0FuZ3VsYXI6IGZhbHNlLFxuICB1bnByb3RlY3RlZFJlc291cmNlczogbmV3IEFycmF5PHN0cmluZz4oKSxcbiAgcHJvdGVjdGVkUmVzb3VyY2VNYXA6IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxzdHJpbmc+PigpXG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIHNldCB0aGUgZGVmYXVsdCBvcHRpb25zIHdoZW4gbm90IGV4cGxpY2l0bHkgc2V0XG4gKlxuICogQHBhcmFtIFRBdXRoT3B0aW9uc1xuICogQHBhcmFtIFRDYWNoZU9wdGlvbnNcbiAqIEBwYXJhbSBUU3lzdGVtT3B0aW9uc1xuICogQHBhcmFtIFRGcmFtZXdvcmtPcHRpb25zXG4gKlxuICogQHJldHVybnMgVENvbmZpZ3VyYXRpb24gb2JqZWN0XG4gKi9cblxuLy8gZGVzdHJ1Y3R1cmUgd2l0aCBkZWZhdWx0IHNldHRpbmdzXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDb25maWd1cmF0aW9uKHsgYXV0aCwgY2FjaGUgPSB7fSwgc3lzdGVtID0ge30sIGZyYW1ld29yayA9IHt9fTogQ29uZmlndXJhdGlvbik6IENvbmZpZ3VyYXRpb24ge1xuICBjb25zdCBvdmVybGF5ZWRDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XG4gICAgYXV0aDogeyAuLi5ERUZBVUxUX0FVVEhfT1BUSU9OUywgLi4uYXV0aCB9LFxuICAgIGNhY2hlOiB7IC4uLkRFRkFVTFRfQ0FDSEVfT1BUSU9OUywgLi4uY2FjaGUgfSxcbiAgICBzeXN0ZW06IHsgLi4uREVGQVVMVF9TWVNURU1fT1BUSU9OUywgLi4uc3lzdGVtIH0sXG4gICAgZnJhbWV3b3JrOiB7IC4uLkRFRkFVTFRfRlJBTUVXT1JLX09QVElPTlMsIC4uLmZyYW1ld29yayB9XG4gIH07XG4gIHJldHVybiBvdmVybGF5ZWRDb25maWc7XG59XG5cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHsgQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5cbi8qKlxuICogS2V5LVZhbHVlIHR5cGUgdG8gc3VwcG9ydCBxdWVyeVBhcmFtcyBhbmQgZXh0cmFRdWVyeVBhcmFtc1xuICovXG5leHBvcnQgdHlwZSBRUERpY3QgPSB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcblxuZXhwb3J0IHR5cGUgQXV0aGVudGljYXRpb25QYXJhbWV0ZXJzID0ge1xuICAgIHNjb3Blcz86IEFycmF5PHN0cmluZz47XG4gICAgZXh0cmFTY29wZXNUb0NvbnNlbnQ/OiBBcnJheTxzdHJpbmc+O1xuICAgIHByb21wdD86IHN0cmluZztcbiAgICBleHRyYVF1ZXJ5UGFyYW1ldGVycz86IFFQRGljdDtcbiAgICBjbGFpbXNSZXF1ZXN0Pzogc3RyaW5nO1xuICAgIGF1dGhvcml0eT86IHN0cmluZztcbiAgICBzdGF0ZT86IHN0cmluZztcbiAgICBjb3JyZWxhdGlvbklkPzogc3RyaW5nO1xuICAgIGFjY291bnQ/OiBBY2NvdW50O1xuICAgIHNpZD86IHN0cmluZztcbiAgICBsb2dpbkhpbnQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDbGFpbXNSZXF1ZXN0KHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uUGFyYW1ldGVycykge1xuICAgIGlmICghcmVxdWVzdC5jbGFpbXNSZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGNsYWltcztcbiAgICB0cnkge1xuICAgICAgICBjbGFpbXMgPSBKU09OLnBhcnNlKHJlcXVlc3QuY2xhaW1zUmVxdWVzdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlQ2xhaW1zUmVxdWVzdFBhcnNpbmdFcnJvcihlKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBNb3JlIHZhbGlkYXRpb24gd2lsbCBiZSBhZGRlZCB3aGVuIHRoZSBzZXJ2ZXIgdGVhbSB0ZWxscyB1cyBob3cgdGhleSBoYXZlIGFjdHVhbGx5IGltcGxlbWVudGVkIGNsYWltc1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IFNlcnZlckVycm9yIH0gZnJvbSBcIi4vU2VydmVyRXJyb3JcIjtcblxuZXhwb3J0IGNvbnN0IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlID0ge1xuICAgIGxvZ2luUmVxdWlyZWQ6IHtcbiAgICAgICAgY29kZTogXCJsb2dpbl9yZXF1aXJlZFwiXG4gICAgfSxcbiAgICBpbnRlcmFjdGlvblJlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwiaW50ZXJhY3Rpb25fcmVxdWlyZWRcIlxuICAgIH0sXG4gICAgY29uc2VudFJlcXVpcmVkOiB7XG4gICAgICAgIGNvZGU6IFwiY29uc2VudF9yZXF1aXJlZFwiXG4gICAgfSxcbn07XG5cbi8qKlxuICogRXJyb3IgdGhyb3duIHdoZW4gdGhlIHVzZXIgaXMgcmVxdWlyZWQgdG8gcGVyZm9ybSBhbiBpbnRlcmFjdGl2ZSB0b2tlbiByZXF1ZXN0LlxuICovXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciBleHRlbmRzIFNlcnZlckVycm9yIHtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yQ29kZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JcIjtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvci5wcm90b3R5cGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVMb2dpblJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5sb2dpblJlcXVpcmVkLmNvZGUsIGVycm9yRGVzYyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IoZXJyb3JEZXNjOiBzdHJpbmcpOiBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yKEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3JNZXNzYWdlLmludGVyYWN0aW9uUmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ29uc2VudFJlcXVpcmVkQXV0aEVycm9yKGVycm9yRGVzYzogc3RyaW5nKTogSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJhY3Rpb25SZXF1aXJlZEF1dGhFcnJvcihJbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yTWVzc2FnZS5jb25zZW50UmVxdWlyZWQuY29kZSwgZXJyb3JEZXNjKTtcbiAgICB9XG59XG4iLCJleHBvcnQgeyBVc2VyQWdlbnRBcHBsaWNhdGlvbiB9IGZyb20gXCIuL1VzZXJBZ2VudEFwcGxpY2F0aW9uXCI7XG5leHBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmV4cG9ydCB7IExvZ0xldmVsIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5leHBvcnQgeyBBY2NvdW50IH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuZXhwb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5leHBvcnQgeyBBdXRob3JpdHkgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcbmV4cG9ydCB7IENhY2hlUmVzdWx0IH0gZnJvbSBcIi4vVXNlckFnZW50QXBwbGljYXRpb25cIjtcbmV4cG9ydCB7IENhY2hlTG9jYXRpb24sIENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9Db25maWd1cmF0aW9uXCI7XG5leHBvcnQgeyBBdXRoZW50aWNhdGlvblBhcmFtZXRlcnMgfSBmcm9tIFwiLi9BdXRoZW50aWNhdGlvblBhcmFtZXRlcnNcIjtcbmV4cG9ydCB7IEF1dGhSZXNwb25zZSB9IGZyb20gXCIuL0F1dGhSZXNwb25zZVwiO1xuXG4vLyBFcnJvcnNcbmV4cG9ydCB7IEF1dGhFcnJvciB9IGZyb20gXCIuL2Vycm9yL0F1dGhFcnJvclwiO1xuZXhwb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5leHBvcnQgeyBTZXJ2ZXJFcnJvciB9IGZyb20gXCIuL2Vycm9yL1NlcnZlckVycm9yXCI7XG5leHBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmV4cG9ydCB7IEludGVyYWN0aW9uUmVxdWlyZWRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9JbnRlcmFjdGlvblJlcXVpcmVkQXV0aEVycm9yXCI7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuS2V5IHtcblxuICBhdXRob3JpdHk6IHN0cmluZztcbiAgY2xpZW50SWQ6IHN0cmluZztcbiAgc2NvcGVzOiBzdHJpbmc7XG4gIGhvbWVBY2NvdW50SWRlbnRpZmllcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGF1dGhvcml0eTogc3RyaW5nLCBjbGllbnRJZDogc3RyaW5nLCBzY29wZXM6IHN0cmluZywgdWlkOiBzdHJpbmcsIHV0aWQ6IHN0cmluZykge1xuICAgIHRoaXMuYXV0aG9yaXR5ID0gVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eSk7XG4gICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgIHRoaXMuc2NvcGVzID0gc2NvcGVzO1xuICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gVXRpbHMuYmFzZTY0RW5jb2RlU3RyaW5nVXJsU2FmZSh1aWQpICsgXCIuXCIgKyBVdGlscy5iYXNlNjRFbmNvZGVTdHJpbmdVcmxTYWZlKHV0aWQpO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2Nlc3NUb2tlblZhbHVlIHtcblxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBpZFRva2VuOiBzdHJpbmc7XG4gIGV4cGlyZXNJbjogc3RyaW5nO1xuICBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbjogc3RyaW5nLCBpZFRva2VuOiBzdHJpbmcsIGV4cGlyZXNJbjogc3RyaW5nLCBob21lQWNjb3VudElkZW50aWZpZXI6IHN0cmluZykge1xuICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICB0aGlzLmlkVG9rZW4gPSBpZFRva2VuO1xuICAgIHRoaXMuZXhwaXJlc0luID0gZXhwaXJlc0luO1xuICAgIHRoaXMuaG9tZUFjY291bnRJZGVudGlmaWVyID0gaG9tZUFjY291bnRJZGVudGlmaWVyO1xuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQXV0aG9yaXR5IH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5cbi8qKlxuICogTm9uY2U6IE9JREMgTm9uY2UgZGVmaW5pdGlvbjogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjSURUb2tlblxuICogU3RhdGU6IE9BdXRoIFNwZWM6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tMTAuMTJcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlclJlcXVlc3RQYXJhbWV0ZXJzIHtcblxuICBhdXRob3JpdHlJbnN0YW5jZTogQXV0aG9yaXR5O1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBzY29wZXM6IEFycmF5PHN0cmluZz47XG5cbiAgbm9uY2U6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcblxuICAvLyB0ZWxlbWV0cnkgaW5mb3JtYXRpb25cbiAgeENsaWVudFZlcjogc3RyaW5nO1xuICB4Q2xpZW50U2t1OiBzdHJpbmc7XG4gIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcblxuICByZXNwb25zZVR5cGU6IHN0cmluZztcbiAgcmVkaXJlY3RVcmk6IHN0cmluZztcblxuICBwcm9tcHRWYWx1ZTogc3RyaW5nO1xuICBjbGFpbXNWYWx1ZTogc3RyaW5nO1xuXG4gIHF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xuICBleHRyYVF1ZXJ5UGFyYW1ldGVyczogc3RyaW5nO1xuXG4gIHB1YmxpYyBnZXQgYXV0aG9yaXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yaXR5SW5zdGFuY2UgPyB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkNhbm9uaWNhbEF1dGhvcml0eSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGF1dGhvcml0eVxuICAgKiBAcGFyYW0gY2xpZW50SWRcbiAgICogQHBhcmFtIHNjb3BlXG4gICAqIEBwYXJhbSByZXNwb25zZVR5cGVcbiAgICogQHBhcmFtIHJlZGlyZWN0VXJpXG4gICAqIEBwYXJhbSBzdGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IgKGF1dGhvcml0eTogQXV0aG9yaXR5LCBjbGllbnRJZDogc3RyaW5nLCBzY29wZTogQXJyYXk8c3RyaW5nPiwgcmVzcG9uc2VUeXBlOiBzdHJpbmcsIHJlZGlyZWN0VXJpOiBzdHJpbmcsIHN0YXRlOiBzdHJpbmcgKSB7XG4gICAgdGhpcy5hdXRob3JpdHlJbnN0YW5jZSA9IGF1dGhvcml0eTtcbiAgICB0aGlzLmNsaWVudElkID0gY2xpZW50SWQ7XG4gICAgdGhpcy5zY29wZXMgPSBzY29wZTtcblxuICAgIHRoaXMubm9uY2UgPSBVdGlscy5jcmVhdGVOZXdHdWlkKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlICYmICFVdGlscy5pc0VtcHR5KHN0YXRlKSA/ICBVdGlscy5jcmVhdGVOZXdHdWlkKCkgKyBcInxcIiArIHN0YXRlICAgOiBVdGlscy5jcmVhdGVOZXdHdWlkKCk7XG5cbiAgICAvLyBUT0RPOiBDaGFuZ2UgdGhpcyB0byB1c2VyIHBhc3NlZCB2cyBnZW5lcmF0ZWQgd2l0aCB0aGUgbmV3IFBSXG4gICAgdGhpcy5jb3JyZWxhdGlvbklkID0gVXRpbHMuY3JlYXRlTmV3R3VpZCgpO1xuXG4gICAgLy8gdGVsZW1ldHJ5IGluZm9ybWF0aW9uXG4gICAgdGhpcy54Q2xpZW50U2t1ID0gXCJNU0FMLkpTXCI7XG4gICAgdGhpcy54Q2xpZW50VmVyID0gVXRpbHMuZ2V0TGlicmFyeVZlcnNpb24oKTtcblxuICAgIHRoaXMucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xuICAgIHRoaXMucmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZW5lcmF0ZXMgdGhlIFVSTCB3aXRoIFF1ZXJ5U3RyaW5nIFBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgY3JlYXRlTmF2aWdhdGVVcmwoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcbiAgICBjb25zdCBzdHIgPSB0aGlzLmNyZWF0ZU5hdmlnYXRpb25VcmxTdHJpbmcoc2NvcGVzKTtcbiAgICBsZXQgYXV0aEVuZHBvaW50OiBzdHJpbmcgPSB0aGlzLmF1dGhvcml0eUluc3RhbmNlLkF1dGhvcml6YXRpb25FbmRwb2ludDtcbiAgICAvLyBpZiB0aGUgZW5kcG9pbnQgYWxyZWFkeSBoYXMgcXVlcnlwYXJhbXMsIGxldHMgYWRkIHRvIGl0LCBvdGhlcndpc2UgYWRkIHRoZSBmaXJzdCBvbmVcbiAgICBpZiAoYXV0aEVuZHBvaW50LmluZGV4T2YoXCI/XCIpIDwgMCkge1xuICAgICAgYXV0aEVuZHBvaW50ICs9IFwiP1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdXRoRW5kcG9pbnQgKz0gXCImXCI7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdFVybDogc3RyaW5nID0gYCR7YXV0aEVuZHBvaW50fSR7c3RyLmpvaW4oXCImXCIpfWA7XG4gICAgcmV0dXJuIHJlcXVlc3RVcmw7XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGUgdGhlIGFycmF5IG9mIGFsbCBRdWVyeVN0cmluZ1BhcmFtcyB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgY3JlYXRlTmF2aWdhdGlvblVybFN0cmluZyhzY29wZXM6IEFycmF5PHN0cmluZz4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICBpZiAoIXNjb3Blcykge1xuICAgICAgc2NvcGVzID0gW3RoaXMuY2xpZW50SWRdO1xuICAgIH1cblxuICAgIGlmIChzY29wZXMuaW5kZXhPZih0aGlzLmNsaWVudElkKSA9PT0gLTEpIHtcbiAgICAgIHNjb3Blcy5wdXNoKHRoaXMuY2xpZW50SWQpO1xuICAgIH1cbiAgICBjb25zdCBzdHI6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBzdHIucHVzaChcInJlc3BvbnNlX3R5cGU9XCIgKyB0aGlzLnJlc3BvbnNlVHlwZSk7XG5cbiAgICB0aGlzLnRyYW5zbGF0ZWNsaWVudElkVXNlZEluU2NvcGUoc2NvcGVzKTtcbiAgICBzdHIucHVzaChcInNjb3BlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucGFyc2VTY29wZShzY29wZXMpKSk7XG4gICAgc3RyLnB1c2goXCJjbGllbnRfaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jbGllbnRJZCkpO1xuICAgIHN0ci5wdXNoKFwicmVkaXJlY3RfdXJpPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucmVkaXJlY3RVcmkpKTtcblxuICAgIHN0ci5wdXNoKFwic3RhdGU9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zdGF0ZSkpO1xuICAgIHN0ci5wdXNoKFwibm9uY2U9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5ub25jZSkpO1xuXG4gICAgc3RyLnB1c2goXCJjbGllbnRfaW5mbz0xXCIpO1xuICAgIHN0ci5wdXNoKGB4LWNsaWVudC1TS1U9JHt0aGlzLnhDbGllbnRTa3V9YCk7XG4gICAgc3RyLnB1c2goYHgtY2xpZW50LVZlcj0ke3RoaXMueENsaWVudFZlcn1gKTtcbiAgICBpZiAodGhpcy5wcm9tcHRWYWx1ZSkge1xuICAgICAgc3RyLnB1c2goXCJwcm9tcHQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5wcm9tcHRWYWx1ZSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsYWltc1ZhbHVlKSB7XG4gICAgICBzdHIucHVzaChcImNsYWltcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNsYWltc1ZhbHVlKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucXVlcnlQYXJhbWV0ZXJzKSB7XG4gICAgICBzdHIucHVzaCh0aGlzLnF1ZXJ5UGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXh0cmFRdWVyeVBhcmFtZXRlcnMpIHtcbiAgICAgIHN0ci5wdXNoKHRoaXMuZXh0cmFRdWVyeVBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHN0ci5wdXNoKFwiY2xpZW50LXJlcXVlc3QtaWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb3JyZWxhdGlvbklkKSk7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIC8qKlxuICAgKiBhcHBlbmQgdGhlIHJlcXVpcmVkIHNjb3BlczogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWJhc2ljLTFfMC5odG1sI1Njb3Blc1xuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICB0cmFuc2xhdGVjbGllbnRJZFVzZWRJblNjb3BlKHNjb3BlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuICAgIGNvbnN0IGNsaWVudElkSW5kZXg6IG51bWJlciA9IHNjb3Blcy5pbmRleE9mKHRoaXMuY2xpZW50SWQpO1xuICAgIGlmIChjbGllbnRJZEluZGV4ID49IDApIHtcbiAgICAgIHNjb3Blcy5zcGxpY2UoY2xpZW50SWRJbmRleCwgMSk7XG4gICAgICBpZiAoc2NvcGVzLmluZGV4T2YoXCJvcGVuaWRcIikgPT09IC0xKSB7XG4gICAgICAgIHNjb3Blcy5wdXNoKFwib3BlbmlkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHNjb3Blcy5pbmRleE9mKFwicHJvZmlsZVwiKSA9PT0gLTEpIHtcbiAgICAgICAgc2NvcGVzLnB1c2goXCJwcm9maWxlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB0aGUgc2NvcGVzIGludG8gYSBmb3JtYXR0ZWQgc2NvcGVMaXN0XG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHBhcnNlU2NvcGUoc2NvcGVzOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nIHtcbiAgICBsZXQgc2NvcGVMaXN0OiBzdHJpbmcgPSBcIlwiO1xuICAgIGlmIChzY29wZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHNjb3Blcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBzY29wZUxpc3QgKz0gKGkgIT09IHNjb3Blcy5sZW5ndGggLSAxKSA/IHNjb3Blc1tpXSArIFwiIFwiIDogc2NvcGVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzY29wZUxpc3Q7XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgeyBDbGllbnRBdXRoRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRBdXRoRXJyb3JcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbGllbnRJbmZvIHtcblxuICBwcml2YXRlIF91aWQ6IHN0cmluZztcbiAgZ2V0IHVpZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl91aWQgPyB0aGlzLl91aWQgOiBcIlwiO1xuICB9XG5cbiAgc2V0IHVpZCh1aWQ6IHN0cmluZykge1xuICAgIHRoaXMuX3VpZCA9IHVpZDtcbiAgfVxuXG4gIHByaXZhdGUgX3V0aWQ6IHN0cmluZztcbiAgZ2V0IHV0aWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdXRpZCA/IHRoaXMuX3V0aWQgOiBcIlwiO1xuICB9XG5cbiAgc2V0IHV0aWQodXRpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXRpZCA9IHV0aWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyYXdDbGllbnRJbmZvOiBzdHJpbmcpIHtcbiAgICBpZiAoIXJhd0NsaWVudEluZm8gfHwgVXRpbHMuaXNFbXB0eShyYXdDbGllbnRJbmZvKSkge1xuICAgICAgdGhpcy51aWQgPSBcIlwiO1xuICAgICAgdGhpcy51dGlkID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZGVjb2RlZENsaWVudEluZm86IHN0cmluZyA9IFV0aWxzLmJhc2U2NERlY29kZVN0cmluZ1VybFNhZmUocmF3Q2xpZW50SW5mbyk7XG4gICAgICBjb25zdCBjbGllbnRJbmZvOiBDbGllbnRJbmZvID0gPENsaWVudEluZm8+SlNPTi5wYXJzZShkZWNvZGVkQ2xpZW50SW5mbyk7XG4gICAgICBpZiAoY2xpZW50SW5mbykge1xuICAgICAgICBpZiAoY2xpZW50SW5mby5oYXNPd25Qcm9wZXJ0eShcInVpZFwiKSkge1xuICAgICAgICAgIHRoaXMudWlkID0gY2xpZW50SW5mby51aWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xpZW50SW5mby5oYXNPd25Qcm9wZXJ0eShcInV0aWRcIikpIHtcbiAgICAgICAgICB0aGlzLnV0aWQgPSBjbGllbnRJbmZvLnV0aWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBDbGllbnRBdXRoRXJyb3IuY3JlYXRlQ2xpZW50SW5mb0RlY29kaW5nRXJyb3IoZSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IHsgQ2xpZW50QXV0aEVycm9yIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50QXV0aEVycm9yXCI7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgSWRUb2tlbiB7XG5cbiAgaXNzdWVyOiBzdHJpbmc7XG4gIG9iamVjdElkOiBzdHJpbmc7XG4gIHN1YmplY3Q6IHN0cmluZztcbiAgdGVuYW50SWQ6IHN0cmluZztcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBwcmVmZXJyZWROYW1lOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaG9tZU9iamVjdElkOiBzdHJpbmc7XG4gIG5vbmNlOiBzdHJpbmc7XG4gIGV4cGlyYXRpb246IHN0cmluZztcbiAgcmF3SWRUb2tlbjogc3RyaW5nO1xuICBkZWNvZGVkSWRUb2tlbjogT2JqZWN0O1xuICBzaWQ6IHN0cmluZztcbiAgLyogdHNsaW50OmRpc2FibGU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgY29uc3RydWN0b3IocmF3SWRUb2tlbjogc3RyaW5nKSB7XG4gICAgaWYgKFV0aWxzLmlzRW1wdHkocmF3SWRUb2tlbikpIHtcbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuTnVsbE9yRW1wdHlFcnJvcihyYXdJZFRva2VuKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmF3SWRUb2tlbiA9IHJhd0lkVG9rZW47XG4gICAgICB0aGlzLmRlY29kZWRJZFRva2VuID0gVXRpbHMuZXh0cmFjdElkVG9rZW4ocmF3SWRUb2tlbik7XG4gICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbikge1xuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcImlzc1wiKSkge1xuICAgICAgICAgIHRoaXMuaXNzdWVyID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcImlzc1wiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwib2lkXCIpKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdElkID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcIm9pZFwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwic3ViXCIpKSB7XG4gICAgICAgICAgdGhpcy5zdWJqZWN0ID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcInN1YlwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwidGlkXCIpKSB7XG4gICAgICAgICAgdGhpcy50ZW5hbnRJZCA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJ0aWRcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcInZlclwiKSkge1xuICAgICAgICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJ2ZXJcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcInByZWZlcnJlZF91c2VybmFtZVwiKSkge1xuICAgICAgICAgIHRoaXMucHJlZmVycmVkTmFtZSA9IHRoaXMuZGVjb2RlZElkVG9rZW5bXCJwcmVmZXJyZWRfdXNlcm5hbWVcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcIm5hbWVcIikpIHtcbiAgICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wibmFtZVwiXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlY29kZWRJZFRva2VuLmhhc093blByb3BlcnR5KFwibm9uY2VcIikpIHtcbiAgICAgICAgICB0aGlzLm5vbmNlID0gdGhpcy5kZWNvZGVkSWRUb2tlbltcIm5vbmNlXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJleHBcIikpIHtcbiAgICAgICAgICB0aGlzLmV4cGlyYXRpb24gPSB0aGlzLmRlY29kZWRJZFRva2VuW1wiZXhwXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGVjb2RlZElkVG9rZW4uaGFzT3duUHJvcGVydHkoXCJob21lX29pZFwiKSkge1xuICAgICAgICAgICAgdGhpcy5ob21lT2JqZWN0SWQgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wiaG9tZV9vaWRcIl07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWNvZGVkSWRUb2tlbi5oYXNPd25Qcm9wZXJ0eShcInNpZFwiKSkge1xuICAgICAgICAgICAgdGhpcy5zaWQgPSB0aGlzLmRlY29kZWRJZFRva2VuW1wic2lkXCJdO1xuICAgICAgICB9XG4gICAgICAvKiB0c2xpbnQ6ZW5hYmxlOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gVE9ETzogVGhpcyBlcnJvciBoZXJlIHdvbid0IHJlYWxseSBldmVyeSBiZSB0aHJvd24sIHNpbmNlIGV4dHJhY3RJZFRva2VuKCkgcmV0dXJucyBudWxsIGlmIHRoZSBkZWNvZGVKd3QoKSBmYWlscy5cbiAgICAgIC8vIE5lZWQgdG8gYWRkIGJldHRlciBlcnJvciBoYW5kbGluZyBoZXJlIHRvIGFjY291bnQgZm9yIGJlaW5nIHVuYWJsZSB0byBkZWNvZGUgand0cy5cbiAgICAgIHRocm93IENsaWVudEF1dGhFcnJvci5jcmVhdGVJZFRva2VuUGFyc2luZ0Vycm9yKGUpO1xuICAgIH1cbiAgfVxuXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkNhY2hlSXRlbSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuQ2FjaGVJdGVtXCI7XG5pbXBvcnQgeyBDYWNoZUxvY2F0aW9uIH0gZnJvbSBcIi4vQ29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgQ2FjaGVLZXlzIH0gZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIHsvLyBTaW5nbGV0b25cblxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU3RvcmFnZTtcbiAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTdXBwb3J0ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2VTdXBwb3J0ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgY2FjaGVMb2NhdGlvbjogQ2FjaGVMb2NhdGlvbjtcblxuICBjb25zdHJ1Y3RvcihjYWNoZUxvY2F0aW9uOiBDYWNoZUxvY2F0aW9uKSB7XG4gICAgaWYgKFN0b3JhZ2UuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBTdG9yYWdlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHRoaXMuY2FjaGVMb2NhdGlvbiA9IGNhY2hlTG9jYXRpb247XG4gICAgdGhpcy5sb2NhbFN0b3JhZ2VTdXBwb3J0ZWQgPSB0eXBlb2Ygd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0gIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkID0gdHlwZW9mIHdpbmRvd1tjYWNoZUxvY2F0aW9uXSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dbY2FjaGVMb2NhdGlvbl0gIT0gbnVsbDtcbiAgICBTdG9yYWdlLmluc3RhbmNlID0gdGhpcztcbiAgICBpZiAoIXRoaXMubG9jYWxTdG9yYWdlU3VwcG9ydGVkICYmICF0aGlzLnNlc3Npb25TdG9yYWdlU3VwcG9ydGVkKSB7XG4gICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3IuY3JlYXRlTm9TdG9yYWdlU3VwcG9ydGVkRXJyb3IoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RvcmFnZS5pbnN0YW5jZTtcbiAgfVxuXG4gICAgLy8gYWRkIHZhbHVlIHRvIHN0b3JhZ2VcbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBlbmFibGVDb29raWVTdG9yYWdlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgICAgICAgIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuYWJsZUNvb2tpZVN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCBvbmUgaXRlbSBieSBrZXkgZnJvbSBzdG9yYWdlXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgZW5hYmxlQ29va2llU3RvcmFnZT86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBpZiAoZW5hYmxlQ29va2llU3RvcmFnZSAmJiB0aGlzLmdldEl0ZW1Db29raWUoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbUNvb2tpZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgdmFsdWUgZnJvbSBzdG9yYWdlXG4gICAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAod2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl0pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjbGVhciBzdG9yYWdlIChyZW1vdmUgYWxsIGl0ZW1zIGZyb20gaXQpXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBbGxBY2Nlc3NUb2tlbnMoY2xpZW50SWQ6IHN0cmluZywgaG9tZUFjY291bnRJZGVudGlmaWVyOiBzdHJpbmcpOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4ge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBBcnJheTxBY2Nlc3NUb2tlbkNhY2hlSXRlbT4gPSBbXTtcbiAgICAgICAgbGV0IGFjY2Vzc1Rva2VuQ2FjaGVJdGVtOiBBY2Nlc3NUb2tlbkNhY2hlSXRlbTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHdpbmRvd1t0aGlzLmNhY2hlTG9jYXRpb25dO1xuICAgICAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICAgICAgbGV0IGtleTogc3RyaW5nO1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChzdG9yYWdlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5tYXRjaChjbGllbnRJZCkgJiYga2V5Lm1hdGNoKGhvbWVBY2NvdW50SWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbkNhY2hlSXRlbSA9IG5ldyBBY2Nlc3NUb2tlbkNhY2hlSXRlbShKU09OLnBhcnNlKGtleSksIEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goYWNjZXNzVG9rZW5DYWNoZUl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWNxdWlyZVRva2VuRW50cmllcyhhdXRob3JpdHlLZXk6IHN0cmluZywgYWNxdWlyZVRva2VuQWNjb3VudEtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3dbdGhpcy5jYWNoZUxvY2F0aW9uXTtcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgICAgIGxldCBrZXk6IHN0cmluZztcbiAgICAgICAgICAgIGZvciAoa2V5IGluIHN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoYXV0aG9yaXR5S2V5ICE9PSBcIlwiICYmIGtleS5pbmRleE9mKGF1dGhvcml0eUtleSkgPiAtMSkgfHwgKGFjcXVpcmVUb2tlbkFjY291bnRLZXkgIT09IFwiXCIgJiYga2V5LmluZGV4T2YoYWNxdWlyZVRva2VuQWNjb3VudEtleSkgPiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRDYWNoZUl0ZW1zKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3RoaXMuY2FjaGVMb2NhdGlvbl07XG4gICAgICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBzdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoQ29uc3RhbnRzLm1zYWwpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtKGtleSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKENvbnN0YW50cy5yZW5ld1N0YXR1cykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEl0ZW1Db29raWUoY05hbWU6IHN0cmluZywgY1ZhbHVlOiBzdHJpbmcsIGV4cGlyZXM/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvb2tpZVN0ciA9IGNOYW1lICsgXCI9XCIgKyBjVmFsdWUgKyBcIjtcIjtcbiAgICAgICAgaWYgKGV4cGlyZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZVRpbWUgPSB0aGlzLmdldENvb2tpZUV4cGlyYXRpb25UaW1lKGV4cGlyZXMpO1xuICAgICAgICAgICAgY29va2llU3RyICs9IFwiZXhwaXJlcz1cIiArIGV4cGlyZVRpbWUgKyBcIjtcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cjtcbiAgICB9XG5cbiAgICBnZXRJdGVtQ29va2llKGNOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBuYW1lID0gY05hbWUgKyBcIj1cIjtcbiAgICAgICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYyA9IGNhW2ldO1xuICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBnZXRDb29raWVFeHBpcmF0aW9uVGltZShjb29raWVMaWZlRGF5czogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBleHByID0gbmV3IERhdGUodG9kYXkuZ2V0VGltZSgpICsgY29va2llTGlmZURheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgcmV0dXJuIGV4cHIudG9VVENTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjbGVhckNvb2tpZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5ub25jZUlkVG9rZW4sIFwiXCIsIC0xKTtcbiAgICAgICAgdGhpcy5zZXRJdGVtQ29va2llKENvbnN0YW50cy5zdGF0ZUxvZ2luLCBcIlwiLCAtMSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMubG9naW5SZXF1ZXN0LCBcIlwiLCAtMSk7XG4gICAgICAgIHRoaXMuc2V0SXRlbUNvb2tpZShDb25zdGFudHMuc3RhdGVBY3F1aXJlVG9rZW4sIFwiXCIsIC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYWNxdWlyZVRva2VuQWNjb3VudEtleSB0byBjYWNoZSBhY2NvdW50IG9iamVjdFxuICAgICAqIEBwYXJhbSBhY2NvdW50SWRcbiAgICAgKiBAcGFyYW0gc3RhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2VuZXJhdGVBY3F1aXJlVG9rZW5BY2NvdW50S2V5KGFjY291bnRJZDogYW55LCBzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENhY2hlS2V5cy5BQ1FVSVJFX1RPS0VOX0FDQ09VTlQgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgK1xuICAgICAgICAgICAgYCR7YWNjb3VudElkfWAgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgICsgYCR7c3RhdGV9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYXV0aG9yaXR5S2V5IHRvIGNhY2hlIGF1dGhvcml0eVxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZW5lcmF0ZUF1dGhvcml0eUtleShzdGF0ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIENhY2hlS2V5cy5BVVRIT1JJVFkgKyBDb25zdGFudHMucmVzb3VyY2VEZWxpbWl0ZXIgKyBgJHtzdGF0ZX1gO1xuICAgIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbktleSB9IGZyb20gXCIuL0FjY2Vzc1Rva2VuS2V5XCI7XG5pbXBvcnQgeyBBY2Nlc3NUb2tlblZhbHVlIH0gZnJvbSBcIi4vQWNjZXNzVG9rZW5WYWx1ZVwiO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEFjY2Vzc1Rva2VuQ2FjaGVJdGVtIHtcblxuICBrZXk6IEFjY2Vzc1Rva2VuS2V5O1xuICB2YWx1ZTogQWNjZXNzVG9rZW5WYWx1ZTtcblxuICBjb25zdHJ1Y3RvcihrZXk6IEFjY2Vzc1Rva2VuS2V5LCB2YWx1ZTogQWNjZXNzVG9rZW5WYWx1ZSkge1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL1V0aWxzXCI7XG5pbXBvcnQgeyBBYWRBdXRob3JpdHkgfSBmcm9tIFwiLi9BYWRBdXRob3JpdHlcIjtcbmltcG9ydCB7IEIyY0F1dGhvcml0eSB9IGZyb20gXCIuL0IyY0F1dGhvcml0eVwiO1xuaW1wb3J0IHsgQXV0aG9yaXR5LCBBdXRob3JpdHlUeXBlIH0gZnJvbSBcIi4vQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vZXJyb3IvQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHlGYWN0b3J5IHtcbiAgICAvKipcbiAgICAqIFBhcnNlIHRoZSB1cmwgYW5kIGRldGVybWluZSB0aGUgdHlwZSBvZiBhdXRob3JpdHlcbiAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIERldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsOiBzdHJpbmcpOiBBdXRob3JpdHlUeXBlIHtcbiAgICAgICAgYXV0aG9yaXR5VXJsID0gVXRpbHMuQ2Fub25pY2FsaXplVXJpKGF1dGhvcml0eVVybCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBVdGlscy5HZXRVcmxDb21wb25lbnRzKGF1dGhvcml0eVVybCk7XG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IGNvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xuICAgICAgICBzd2l0Y2ggKHBhdGhTZWdtZW50c1swXSkge1xuICAgICAgICAgICAgY2FzZSBcInRmcFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBBdXRob3JpdHlUeXBlLkIyQztcbiAgICAgICAgICAgIGNhc2UgXCJhZGZzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWRmcztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEF1dGhvcml0eVR5cGUuQWFkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDcmVhdGUgYW4gYXV0aG9yaXR5IG9iamVjdCBvZiB0aGUgY29ycmVjdCB0eXBlIGJhc2VkIG9uIHRoZSB1cmxcbiAgICAqIFBlcmZvcm1zIGJhc2ljIGF1dGhvcml0eSB2YWxpZGF0aW9uIC0gY2hlY2tzIHRvIHNlZSBpZiB0aGUgYXV0aG9yaXR5IGlzIG9mIGEgdmFsaWQgdHlwZSAoZWcgYWFkLCBiMmMpXG4gICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZUluc3RhbmNlKGF1dGhvcml0eVVybDogc3RyaW5nLCB2YWxpZGF0ZUF1dGhvcml0eTogYm9vbGVhbik6IEF1dGhvcml0eSB7XG4gICAgICAgIGlmIChVdGlscy5pc0VtcHR5KGF1dGhvcml0eVVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR5cGUgPSBBdXRob3JpdHlGYWN0b3J5LkRldGVjdEF1dGhvcml0eUZyb21VcmwoYXV0aG9yaXR5VXJsKTtcbiAgICAgICAgLy8gRGVwZW5kaW5nIG9uIGFib3ZlIGRldGVjdGlvbiwgY3JlYXRlIHRoZSByaWdodCB0eXBlLlxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQXV0aG9yaXR5VHlwZS5CMkM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCMmNBdXRob3JpdHkoYXV0aG9yaXR5VXJsLCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgICAgICAgICBjYXNlIEF1dGhvcml0eVR5cGUuQWFkOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQWFkQXV0aG9yaXR5KGF1dGhvcml0eVVybCwgdmFsaWRhdGVBdXRob3JpdHkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmludmFsaWRBdXRob3JpdHlUeXBlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuaW1wb3J0IHsgQWFkQXV0aG9yaXR5IH0gZnJvbSBcIi4vQWFkQXV0aG9yaXR5XCI7XG5pbXBvcnQgeyBBdXRob3JpdHksIEF1dGhvcml0eVR5cGUgfSBmcm9tIFwiLi9BdXRob3JpdHlcIjtcbmltcG9ydCB7IENsaWVudENvbmZpZ3VyYXRpb25FcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9lcnJvci9DbGllbnRDb25maWd1cmF0aW9uRXJyb3JcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vVXRpbHNcIjtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBCMmNBdXRob3JpdHkgZXh0ZW5kcyBBYWRBdXRob3JpdHkge1xuICBwdWJsaWMgY29uc3RydWN0b3IoYXV0aG9yaXR5OiBzdHJpbmcsIHZhbGlkYXRlQXV0aG9yaXR5OiBib29sZWFuKSB7XG4gICAgc3VwZXIoYXV0aG9yaXR5LCB2YWxpZGF0ZUF1dGhvcml0eSk7XG4gICAgY29uc3QgdXJsQ29tcG9uZW50cyA9IFV0aWxzLkdldFVybENvbXBvbmVudHMoYXV0aG9yaXR5KTtcblxuICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHVybENvbXBvbmVudHMuUGF0aFNlZ21lbnRzO1xuICAgIGlmIChwYXRoU2VnbWVudHMubGVuZ3RoIDwgMykge1xuICAgICAgICB0aHJvdyBDbGllbnRDb25maWd1cmF0aW9uRXJyb3JNZXNzYWdlLmIyY0F1dGhvcml0eVVyaUludmFsaWRQYXRoO1xuICAgIH1cblxuICAgIHRoaXMuQ2Fub25pY2FsQXV0aG9yaXR5ID0gYGh0dHBzOi8vJHt1cmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydH0vJHtwYXRoU2VnbWVudHNbMF19LyR7cGF0aFNlZ21lbnRzWzFdfS8ke3BhdGhTZWdtZW50c1syXX0vYDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgQXV0aG9yaXR5VHlwZSgpOiBBdXRob3JpdHlUeXBlIHtcbiAgICByZXR1cm4gQXV0aG9yaXR5VHlwZS5CMkM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgVGVuYW50RGlzY292ZXJ5RW5kcG9pbnRcbiAgICovXG4gIHB1YmxpYyBHZXRPcGVuSWRDb25maWd1cmF0aW9uRW5kcG9pbnRBc3luYygpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHJlc3VsdFByb21pc2UgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICByZXNvbHZlKHRoaXMuRGVmYXVsdE9wZW5JZENvbmZpZ3VyYXRpb25FbmRwb2ludCkpO1xuXG4gICAgaWYgKCF0aGlzLklzVmFsaWRhdGlvbkVuYWJsZWQpIHtcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLklzSW5UcnVzdGVkSG9zdExpc3QodGhpcy5DYW5vbmljYWxBdXRob3JpdHlVcmxDb21wb25lbnRzLkhvc3ROYW1lQW5kUG9ydCkpIHtcbiAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICByZWplY3QoQ2xpZW50Q29uZmlndXJhdGlvbkVycm9yTWVzc2FnZS51bnN1cHBvcnRlZEF1dGhvcml0eVZhbGlkYXRpb24pKTtcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5cbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgeyBJZFRva2VuIH0gZnJvbSBcIi4vSWRUb2tlblwiO1xuXG4vLyBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cblxuZXhwb3J0IHR5cGUgQXV0aFJlc3BvbnNlID0ge1xuICAgIHVuaXF1ZUlkOiBzdHJpbmc7XG4gICAgdGVuYW50SWQ6IHN0cmluZztcbiAgICB0b2tlblR5cGU6IHN0cmluZztcbiAgICBpZFRva2VuOiBJZFRva2VuO1xuICAgIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gICAgc2NvcGVzOiBBcnJheTxzdHJpbmc+O1xuICAgIGV4cGlyZXNPbjogRGF0ZTtcbiAgICBhY2NvdW50OiBBY2NvdW50O1xuICAgIGFjY291bnRTdGF0ZTogc3RyaW5nO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=