"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowser = exports.mergeConfig = exports.QPSController = exports.getResourceId = exports.chunks = exports.wait = void 0;
var const_1 = require("./const");
var apitable_1 = require("./apitable");
exports.wait = function (timeout) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(undefined);
        }, timeout);
    });
};
exports.chunks = function (arr, chunkSize) {
    var res = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
        var chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
};
// export const mergeDefaultQueryParams = (params?: IGetRecordsReqParams) => {
//   const defaultParams = {
//     pageSize: 100,
//     pageNum: 1,
//   };
//   return { ...defaultParams, ...params };
// };
exports.getResourceId = function (url) {
    if (!url)
        return null;
    var urlPaths = url.split('/');
    var dstIndex = urlPaths.findIndex(function (i) { return i === 'datasheets'; });
    if (dstIndex > -1 && urlPaths.length > dstIndex) {
        return urlPaths[dstIndex + 1];
    }
    return null;
};
// https://www.jianshu.com/p/d3529d18cf59
exports.QPSController = function (QPS, OFFSET) {
    if (QPS === void 0) { QPS = 5; }
    if (OFFSET === void 0) { OFFSET = 50; }
    return function (config) { return __awaiter(void 0, void 0, void 0, function () {
        var resourceId, now, _a, count, lastReqTimestamp, sleep;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    resourceId = exports.getResourceId(config.url);
                    if (!resourceId)
                        return [2 /*return*/, config];
                    now = new Date().getTime();
                    _a = apitable_1.Vika.QPSMap.get(resourceId) || {
                        count: 1,
                        lastReqTimestamp: now
                    }, count = _a.count, lastReqTimestamp = _a.lastReqTimestamp;
                    if (Math.floor(now / 1000) <= Math.floor(lastReqTimestamp / 1000)) {
                        if (count < QPS) {
                            count++;
                        }
                        else {
                            lastReqTimestamp = 1000 * (Math.floor(lastReqTimestamp / 1000) + 1);
                            count = 1;
                        }
                    }
                    else {
                        lastReqTimestamp = now;
                        count = 1;
                    }
                    apitable_1.Vika.QPSMap.set(resourceId, {
                        count: count,
                        lastReqTimestamp: lastReqTimestamp
                    });
                    sleep = lastReqTimestamp - now;
                    sleep = sleep > 0 ? sleep + OFFSET : 0;
                    return [4 /*yield*/, exports.wait(sleep)];
                case 1:
                    _b.sent();
                    return [2 /*return*/, config];
            }
        });
    }); };
};
exports.mergeConfig = function (config) {
    var DEFAULT_CONFIG = {
        host: const_1.DEFAULT_HOST,
        fieldKey: 'name',
        requestTimeout: const_1.DEFAULT_REQUEST_TIMEOUT,
        logLevel: 'Warn',
        disableClientUserAgent: false,
    };
    return __assign(__assign({}, DEFAULT_CONFIG), config);
};
exports.isBrowser = typeof window !== 'undefined';
