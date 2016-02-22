'use strict';

/**
 * 阻止修改现有属性的特性，并阻止添加新属性。
 * Object.seal(object)
 * @param {object} 必需。在其上锁定特性的对象。
 * @returns {object} 传递给函数的对象。
 * */

// Create an object that has two properties.
var obj = { pasta: "spaghetti", length: 10 };

// 封闭对象
Object.seal(obj);
console.log(Object.isSealed(obj));  // true

// 给封闭对象添加属性,报错
//obj.newProp = 50;
//console.log(obj.newProp);

// 删除封闭对象的属性,报错
//delete obj.length;
//console.log(obj.length);