'use strict';

/**
 * 返回一个值，该值指示是否可向对象添加新属性。
 * Object.isExtensible(object)
 * @param {object} 必需。要测试的对象。
 * @returns {boolean} 如果对象是可扩展的（这表示可向对象添加新属性），则为 true；否则为 false。
 * */

// 创建一个对象
var obj = { pasta: "spaghetti", length: 10 };

// 用`Object.preventExtensions`阻止添加新属性
Object.preventExtensions(obj);

// 通过`Object.isExtensible`判断是否可获取
console.log(Object.isExtensible(obj));

// Output:
//undefined
