"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Network = exports.TriggerIframeMessageName = exports.IframeMessageName = exports.APIMetaFieldPropertyFormatEnums = exports.Conversion = exports.TSymbolAlign = exports.ViewType = exports.RollUpFuncType = exports.FieldType = void 0;
var FieldType;
(function (FieldType) {
    // NotSupport = 'NotSupport',
    FieldType["Text"] = "Text";
    FieldType["Number"] = "Number";
    FieldType["SingleSelect"] = "SingleSelect";
    FieldType["MultiSelect"] = "MultiSelect";
    FieldType["DateTime"] = "DateTime";
    FieldType["Attachment"] = "Attachment";
    FieldType["MagicLink"] = "MagicLink";
    FieldType["URL"] = "URL";
    FieldType["Email"] = "Email";
    FieldType["Phone"] = "Phone";
    FieldType["Checkbox"] = "Checkbox";
    FieldType["Rating"] = "Rating";
    FieldType["Member"] = "Member";
    FieldType["MagicLookUp"] = "MagicLookUp";
    // RollUp = 'RollUp',
    FieldType["Formula"] = "Formula";
    FieldType["Currency"] = "Currency";
    FieldType["Percent"] = "Percent";
    FieldType["SingleText"] = "SingleText";
    FieldType["AutoNumber"] = "AutoNumber";
    FieldType["CreatedTime"] = "CreatedTime";
    FieldType["LastModifiedTime"] = "LastModifiedTime";
    FieldType["CreatedBy"] = "CreatedBy";
    FieldType["LastModifiedBy"] = "LastModifiedBy";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
var RollUpFuncType;
(function (RollUpFuncType) {
    RollUpFuncType["VALUES"] = "VALUES";
    RollUpFuncType["AVERAGE"] = "AVERAGE";
    RollUpFuncType["COUNT"] = "COUNT";
    RollUpFuncType["COUNTA"] = "COUNTA";
    RollUpFuncType["COUNTALL"] = "COUNTALL";
    RollUpFuncType["SUM"] = "SUM";
    RollUpFuncType["MIN"] = "MIN";
    RollUpFuncType["MAX"] = "MAX";
    RollUpFuncType["AND"] = "AND";
    RollUpFuncType["OR"] = "OR";
    RollUpFuncType["XOR"] = "XOR";
    RollUpFuncType["CONCATENATE"] = "CONCATENATE";
    RollUpFuncType["ARRAYJOIN"] = "ARRAYJOIN";
    RollUpFuncType["ARRAYUNIQUE"] = "ARRAYUNIQUE";
    RollUpFuncType["ARRAYCOMPACT"] = "ARRAYCOMPACT";
})(RollUpFuncType = exports.RollUpFuncType || (exports.RollUpFuncType = {}));
var ViewType;
(function (ViewType) {
    ViewType["Grid"] = "Grid";
    ViewType["Gallery"] = "Gallery";
    ViewType["Kanban"] = "Kanban";
    ViewType["Gantt"] = "Gantt";
})(ViewType = exports.ViewType || (exports.ViewType = {}));
var TSymbolAlign;
(function (TSymbolAlign) {
    TSymbolAlign["Default"] = "Default";
    TSymbolAlign["Left"] = "Left";
    TSymbolAlign["Right"] = "Right";
})(TSymbolAlign = exports.TSymbolAlign || (exports.TSymbolAlign = {}));
var Conversion;
(function (Conversion) {
    /** Delete associated fields from related datasheet. */
    Conversion["Delete"] = "delete";
    /** Keep the associated fields of the associated datasheet and convert them to text type. */
    Conversion["KeepText"] = "keepText";
})(Conversion = exports.Conversion || (exports.Conversion = {}));
var APIMetaFieldPropertyFormatEnums;
(function (APIMetaFieldPropertyFormatEnums) {
    APIMetaFieldPropertyFormatEnums["DateTime"] = "DateTime";
    APIMetaFieldPropertyFormatEnums["Number"] = "Number";
    APIMetaFieldPropertyFormatEnums["Percent"] = "Percent";
    APIMetaFieldPropertyFormatEnums["Currency"] = "Currency";
})(APIMetaFieldPropertyFormatEnums = exports.APIMetaFieldPropertyFormatEnums || (exports.APIMetaFieldPropertyFormatEnums = {}));
var IframeMessageName;
(function (IframeMessageName) {
    IframeMessageName["Collaborators"] = "collaborators";
    IframeMessageName["SocketStatus"] = "socketStatus";
    IframeMessageName["SocketError"] = "socketError";
    IframeMessageName["ChangeView"] = "changeView";
    IframeMessageName["ChangeNodeName"] = "changeNodeName";
    IframeMessageName["PageLoaded"] = "pageLoaded";
    IframeMessageName["EmbedLinkFail"] = "embedLinkFail";
    IframeMessageName["PageCrash"] = "pageCrash";
    IframeMessageName["ChangeViewName"] = "changeViewName";
    IframeMessageName["TriggerEventResult"] = "triggerEventResult";
})(IframeMessageName = exports.IframeMessageName || (exports.IframeMessageName = {}));
var TriggerIframeMessageName;
(function (TriggerIframeMessageName) {
    TriggerIframeMessageName["ExportData"] = "exportData";
})(TriggerIframeMessageName = exports.TriggerIframeMessageName || (exports.TriggerIframeMessageName = {}));
var Network;
(function (Network) {
    Network["Online"] = "online";
    Network["Offline"] = "offline";
    Network["Sync"] = "sync";
    Network["Loading"] = "loading";
})(Network = exports.Network || (exports.Network = {}));
