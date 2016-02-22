'use strict';

/**
 * 阻止向对象添加新属性。
 * Object.preventExtensions(object)
 * @param {object} 必需。要成为不可扩展的对象的对象。
 * @returns {object} 传递给函数的对象。
 * */

// 创建对象
var obj = { pasta: "spaghetti", length: 10 };

// 设置阻止添加新属性
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));

// 添加新属性报错
obj.newProp = 50;
console.log(obj.newProp);

// Output:
// false
// undefined