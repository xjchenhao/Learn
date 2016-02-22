'use strict';

/**
 * 将属性添加到对象，或修改现有属性的特性。
 * Object.defineProperty(object, propertyname, descriptor)
 * @param {object} object 必需。要在其上添加或修改属性的对象。这可能是一个本机 JavaScript 对象（即用户定义的对象或内置对象）或 DOM 对象。
 * @param {string} propertyname 必需。一个包含属性名称的字符串。
 * @param {object} descriptor 必需。属性描述符。它可以针对数据属性或访问器属性。
 * @returns {object} 已修改对象。
 * */

var obj = {};

Object.defineProperty(obj, "newDataProperty", {
    value: 101,
    writable: true,
    enumerable: true,
    configurable: true
});

// 获取`newDataProperty`的值
obj.newDataProperty = 102;
console.log("Property value: " + obj.newDataProperty);

// 输出:
// Property value: 102