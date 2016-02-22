'use strict';

/**
 * 创建一个具有指定原型且可选择性地包含指定属性的对象。
 * Object.create(prototype, descriptors)
 * @param {object} prototype 必需。要用作原型的对象。可以为 null。
 * @param {object} descriptors 可选。包含一个或多个属性描述符的 JavaScript 对象。
 * @returns {object} 一个具有指定的内部原型且包含指定的属性（如果有）的新对象。
 * */

var obj = Object.create({
    a: 1,
    b: 2
});

console.log(obj.a);
console.log(obj.b);
console.log(obj);