'use strict';

/**
 * 阻止修改现有属性的特性和值，并阻止添加新属性。
 * Object.freeze(object)
 * @param {object} 必需。在其上锁定特性的对象。
 * @returns {object} 传递给函数的对象。
 * */

var obj = {
    a: 1,
    b: 2
};

// `freeze`前可修改
obj.b = 3;
console.log(obj);

Object.freeze(obj);

// `freeze`后修改报错
obj.b = 4;
console.log(obj);