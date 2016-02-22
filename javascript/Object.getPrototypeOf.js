'use strict';

/**
 * 返回对象的原型。
 * Object.getPrototypeOf(object)
 * @param {object} 必需。引用原型的对象。
 * @returns {object} 参数的原型。原型也是对象。
 * */

// 创建构造函数
function Pasta(grain, width) {
    this.grain = grain;
    this.width = width;
}
// 用构造函数创建一个对象.
var spaghetti = new Pasta("wheat", 0.2);

// 获得对象的原型.
var proto = Object.getPrototypeOf(spaghetti);
console.log(proto);

// 给获取到的原型添加属性,也能动态的继承给创建的对象
proto.foodgroup = "carbohydrates";
console.log(spaghetti.foodgroup);

// 获取到的原型===原型的`prototype`
var result = (proto === Pasta.prototype);
console.log(result);

// 通过`isPrototypeOf`验证`proto`是否是`spaghetti`的原型
var result = proto.isPrototypeOf(spaghetti);
console.log(result);

// 输出
//Pasta {}
//carbohydrates
//true
//true