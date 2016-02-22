'use strict';

/**
 * 获取指定对象的自身属性描述符。自身属性描述符是指直接在对象上定义（而非从对象的原型继承）的描述符。
 * Object.getOwnPropertyDescriptor(object, propertyname)
 * @param {object} object 必需。包含属性的对象。
 * @param {string} propertyname 必需。属性的名称。
 * @returns {object} 属性的描述符。
 * */

var obj = {};

obj.newDataProperty = "abc";

// 获取属性描述符.
var descriptor = Object.getOwnPropertyDescriptor(obj, "newDataProperty");

console.log(descriptor);

// 输出
//{ value: 'abc',
//    writable: true,
//    enumerable: true,
//    configurable: true
//}


// 改变属性的属性.
descriptor.writable = false;
Object.defineProperty(obj, "newDataProperty", descriptor);

console.log(descriptor);

// 输出
//{ value: 'abc',
//    writable: false,
//    enumerable: true,
//    configurable: true
//}

