'use strict';

/**
 * 返回对象的可枚举属性和方法的名称。
 * Object.keys(object)
 * @param {object} 必需。包含属性和方法的对象。这可以是您创建的对象或现有文档对象模型 (DOM) 对象。
 * @returns {array} 一个数组，其中包含对象的可枚举属性和方法的名称。
 * */

// 创建构造函数
function Pasta(grain, width, shape) {
    this.grain = grain;
    this.width = width;
    this.shape = shape;

    // Define a method.
    this.toString = function () {
        return (this.grain + ", " + this.width + ", " + this.shape);
    }
}

// 创建对象
var spaghetti = new Pasta("wheat", 0.2, "circle");

// 输出可列举的数组对象的属性和方法。
var arr = Object.keys(spaghetti);
console.log(arr);

// 输出
//[ 'grain', 'width', 'shape', 'toString' ]