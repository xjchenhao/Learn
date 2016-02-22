'use strict';

/**
 * 返回对象自己的属性的名称。一个对象的自己的属性是指直接对该对象定义的属性，而不是从该对象的原型继承的属性。对象的属性包括字段（对象）和函数。
 * Object.getOwnPropertyNames(object)
 * @param {object} 必需。包含自己的属性的对象。
 * @returns {array} 一个数组，其中包含对象自己的属性的名称。
 * */

function Pasta(grain, width, shape) {
    // Define properties.
    this.grain = grain;
    this.width = width;
    this.shape = shape;
    this.toString = function () {
        return (this.grain + ", " + this.width + ", " + this.shape);
    }
}

// 创建对象.
var spaghetti = new Pasta("wheat", 0.2, "circle");

// 打印属性名.
var arr = Object.getOwnPropertyNames(spaghetti);
console.log(arr);

// 输出:
// grain,width,shape,toString