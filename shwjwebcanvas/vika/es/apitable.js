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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vika = void 0;
var axios_1 = __importDefault(require("axios"));
// import mpAdapter from 'axios-miniprogram-adapter';
var qs_1 = __importDefault(require("qs"));
var const_1 = require("./const");
var datasheet_1 = require("./datasheet");
var node_1 = require("./node");
var space_1 = require("./space");
var utils_1 = require("./utils");
var iframe_1 = require("./iframe");
// axios.defaults.adapter = mpAdapter;
var Vika = /** @class */ (function () {
    function Vika(config) {
        if (!(config === null || config === void 0 ? void 0 : config.token)) {
            throw new Error('Please pass in the API Token.(登录 vika.cn 在左下角用户中心获取)');
        }
        this.config = utils_1.mergeConfig(config);
        this.axios = axios_1.default.create({
            baseURL: config.host || const_1.DEFAULT_HOST,
            timeout: config.requestTimeout || const_1.DEFAULT_REQUEST_TIMEOUT,
            headers: {
                common: __assign(__assign({}, (this.config.disableClientUserAgent ? {} :
                    (utils_1.isBrowser ? { 'X-Vika-User-Agent': 'VikaJSSDK' } : { 'User-Agent': 'VikaJSSDK' }))), { Authorization: 'Bearer ' + config.token })
            },
            paramsSerializer: function (params) {
                // TODO: Support for more stringify configurations.
                var result = qs_1.default.stringify(params, { arrayFormat: 'brackets' });
                // console.log('paramsSerializer after', result);
                return result;
            },
        });
        // Applet Adapter.
        if (this.config.adapter) {
            this.axios.defaults.adapter = this.config.adapter;
        }
        // open it for debug
        this.axios.interceptors.request.use(function (request) {
            // console.log('Starting Request: ', request.method, {
            //   url: request.url,
            //   params: request.params,
            //   data: request.data,
            // });
            return request;
        });
        this.axios.interceptors.request.use(utils_1.QPSController());
        this.axios.interceptors.response.use(function (response) {
            // console.log('Response:', response.data);
            return response;
        });
    }
    Vika.prototype.request = function (config) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var path, params, method, data, headers, timeout, result, e_1, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = config.path, params = config.params, method = config.method, data = config.data, headers = config.headers, timeout = config.timeout;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.axios.request({
                                timeout: timeout,
                                url: path,
                                method: method,
                                params: __assign({ fieldKey: this.config.fieldKey }, params),
                                data: data,
                                headers: headers,
                            })];
                    case 2:
                        result = (_b.sent()).data;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        error = ((_a = e_1 === null || e_1 === void 0 ? void 0 : e_1.response) === null || _a === void 0 ? void 0 : _a.data) || e_1;
                        result = {
                            success: false,
                            code: (error === null || error === void 0 ? void 0 : error.code) || 500,
                            message: (error === null || error === void 0 ? void 0 : error.message) || 'Request parameter misconfiguration',
                        };
                        return [3 /*break*/, 4];
                    case 4:
                        if (!result.success) {
                            console.error('Request an error: ', result);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Resources - Number Table Management.
     * @param datasheetId Datasheet ID
     * @returns
     */
    Vika.prototype.datasheet = function (datasheetId) {
        if (!datasheetId) {
            throw new Error('Please pass the dimension datasheet id, which can be retrieved from the dimension datasheet url, ' +
                'the dimension datasheet id usually starts with dst');
        }
        return new datasheet_1.Datasheet('', datasheetId, this);
    };
    Object.defineProperty(Vika.prototype, "nodes", {
        /**
         * Node Management.
         */
        get: function () {
            return new node_1.NodeManager(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vika.prototype, "spaces", {
        /**
         * Space
         */
        get: function () {
            return new space_1.SpaceManager(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get a single space.
     */
    Vika.prototype.space = function (spaceId) {
        return new space_1.SpaceManager(this, spaceId);
    };
    /**
     * 获取 iframe 通信
     */
    Vika.prototype.getIframe = function () {
        return new iframe_1.IframeManager();
    };
    Vika.QPSMap = new Map();
    return Vika;
}());
exports.Vika = Vika;
