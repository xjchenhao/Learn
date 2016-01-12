define(function (require, exports, module) {
    var Handlebars = require("handlebars"),
        dateFormat = require("module/date-format");

    Handlebars.registerHelper({
        equal: function (arg, value, options) {
            return Number(arg) == Number(value) ? options.fn(this) : options.inverse(this)
        },
        less: function (arg, value, options) {
            return Number(arg) < Number(value) ? options.fn(this) : options.inverse(this)
        },
        lessEqual: function (arg, value, options) {
            return Number(arg) <= Number(value) ? options.fn(this) : options.inverse(this)
        },
        greater: function (arg, value, options) {
            return Number(arg) > Number(value) ? options.fn(this) : options.inverse(this)
        },
        greaterEqual: function (arg, value, options) {
            return Number(arg) >= Number(value) ? options.fn(this) : options.inverse(this)
        },
        andFalse: function (arg1, arg2, options) {
            return (arg1 == false) && (arg2 == false) ? options.fn(this) : options.inverse(this)
        }
    });
    // 对象转字面量
    Handlebars.registerHelper("stringify", function (obj) {
        return JSON.stringify(obj);
    });
    // 溢出隐藏
    Handlebars.registerHelper("ellipsis", function (val, len) {
        return val.length > len ? val.slice(0, len) + '...' : val;
    });
    // 日期格式化
    Handlebars.registerHelper("dateFormat", function (val, formatType) {
        return dateFormat.format(val, formatType);
    });
    // 保密手机号
    Handlebars.registerHelper("secrecyPhone", function (val) {
        return val.substring(0, 3) + "****" + val.substring(7, 11);
    });
    // 提取纯数字
    Handlebars.registerHelper("parseInt", function (val) {
        return parseInt(val);
    });
    // 数字相加
    Handlebars.registerHelper("sum", function (val1, val2, digits) {
        var keep = 2;
        if (typeof digits === 'number') {
            keep = digits;
        }
        return (Number(val1) + Number(val2)).toFixed(keep);
    });
    // 数字相乘
    Handlebars.registerHelper("multiplication", function (val1, val2, digits) {
        var keep = 2;
        if (typeof digits === 'number') {
            keep = digits;
        }
        return (Number(val1) * Number(val2)).toFixed(keep);
    });
    // 保留小数位数
    Handlebars.registerHelper("toFixed", function (val, digits) {
        return val.toFixed(digits);
    });
    return Handlebars;
});