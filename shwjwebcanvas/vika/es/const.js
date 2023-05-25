"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOG_LEVEL_WEIGHT_MAP = exports.MAX_WRITE_SIZE_PER_REQ = exports.DEFAULT_REQUEST_TIMEOUT = exports.DEFAULT_HOST = exports.DST_MAX_RECORDS = exports.MIN_TIME_GAP = exports.QPS = exports.MAX_RECORD_SIZE = void 0;
var logging_1 = require("./logging");
exports.MAX_RECORD_SIZE = 1000;
exports.QPS = 5;
exports.MIN_TIME_GAP = 1000 / exports.QPS; // Maximum concurrency, 5 requests per second.
exports.DST_MAX_RECORDS = 50000; // Maximum number of records in a single datasheet.
exports.DEFAULT_HOST = 'https://api.vika.cn/fusion/v1';
exports.DEFAULT_REQUEST_TIMEOUT = 60000;
exports.MAX_WRITE_SIZE_PER_REQ = 10;
exports.LOG_LEVEL_WEIGHT_MAP = (_a = {},
    _a[logging_1.LogLevel.DEBUG] = 1,
    _a[logging_1.LogLevel.INFO] = 2,
    _a[logging_1.LogLevel.WARN] = 3,
    _a[logging_1.LogLevel.ERROR] = 4,
    _a);
