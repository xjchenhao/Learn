'use strict';

/**
 * 设置对象的原型。
 * Object.setPrototypeOf(obj, proto);
 * @param {object} obj 必需。对其设置原型的对象。
 * @param {object} proto 必需。新的原型对象。
 * @returns {object} 传递给函数的对象。
 * */

var obj = {
    a: 1
};

var prototype = {
    a: 10,
    b: 20
};

//var prototype = function () {
//    this.a = 10;
//    this.b = 20;
//};

prototype.d = 40;

Object.setPrototypeOf(obj, prototype);

obj.c = 3;

prototype.e = 50;

console.log(obj.a); // 1
console.log(obj.b); // 20
console.log(obj.c); // 3
console.log(obj.d); // 40
console.log(obj.e); // 50
