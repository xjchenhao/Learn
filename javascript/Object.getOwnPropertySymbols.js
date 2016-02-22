'use strict';

/**
 * 返回对象的自有符号属性。对象的自有符号属性是指直接在此对象上定义、而非从对象的原型继承的属性。
 * Object.getOwnPropertySymbols(object)
 * @param {object} 必需。包含自有符号的对象。
 * @returns {array} 包含对象的自有符号的数组。
 * */

// 返回对象的自有符号属性(http://www.csdn.net/article/2015-07-09/2825172-es6-in-depth-symbols)

var obj = {};
var key = Symbol('description');

obj[key] = 'data';

var symbols = Object.getOwnPropertySymbols(obj);

console.log(symbols[0].toString());

// Output:
// Symbol(description)