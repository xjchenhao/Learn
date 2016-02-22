'use strict';

/**
 * 返回一个值，该值指示两个值是否相同。相当于===
 * Object.is(value1, value2);
 * @param {*} value1 必需。要测试的第一个值。
 * @param {*} value2 必需。要测试的第二个值。
 * @returns {boolean} 如果值相同，则为 true；否则为 false。
 * */

var objA = {
    a: 1,
    b: 2
};

var objB = {
    a: 1,
    b: 2
};

var objC = objA;

console.log(Object.is(objA, objB));
console.log(Object.is(objA, objC));

// 输出
//false
//true