'use strict';

/**
 * 如果无法在对象中修改现有属性的特性，且无法向对象添加新属性，则返回 true。
 * Object.isSealed(object)
 * @param {object} 必需。要测试的对象。
 * @returns {object}
 *  如果满足下面两个条件，则为 true：
 *      1. 对象是不可扩展的，这表示无法向对象添加新属性。
 *      2. configurable 特性对于所有现有属性为 false。
 *  在该对象不具有任何属性的情况下，如果该对象是不可扩展的，则此函数返回 true。
 * */

// 创建对象
var obj = { pasta: "spaghetti", length: 10 };

// 封闭对象
Object.seal(obj);

// 通过`Object.isSealed`判断是否冻结
console.log(Object.isSealed(obj));

// 输出
//true