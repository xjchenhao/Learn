'use strict';

/**
 * 将一个或多个属性添加到对象，并/或修改现有属性的特性。
 * object.defineProperties(object, descriptors)
 * @param {object} object 必需。对其添加或修改属性的对象。这可以是本机 JavaScript 对象或 DOM 对象。
 * @param {object} descriptor 必需。包含一个或多个描述符对象的 JavaScript 对象。每个描述符对象描述一个数据属性或访问器属性。
 * @returns {object} 已传递给函数的对象。
 * */

/**
 * 完整的示例
 * */

var obj = {};
Object.defineProperties(obj, {
    newDataProperty: {
        value: 101,         // 值，默认是undefined
        writable: true,     // 是否是只读property，默认是false
        enumerable: true,   // 是否可以被枚举(for in)，默认false
        configurable: true  // 是否可以被删除，默认false
    },
    newAccessorProperty: {

        // 为property设置值的方法，默认是undefined
        set: function (x) {
            console.log("in property set accessor");
            this.newaccpropvalue = x;
        },

        // 返回property的值得方法，默认是undefined
        get: function () {
            console.log("in property get accessor");
            return this.newaccpropvalue;
        }
    },
    newConfigurableTest:{
        value:'123',
        configurable:true
    }
});

// 获得`newDataProperty`的属性值
console.log("newDataProperty value: " + obj.newDataProperty);

// 获得`newAccessorProperty`的属性值
obj.newAccessorProperty = 10;
console.log("newAccessorProperty value: " + obj.newAccessorProperty);

// 删除`newConfigurableTest`,如果`configurable`设置为false,删除时会报错
delete obj.newConfigurableTest;

// 输出:
// newDataProperty value: 101
// in property set accessor
// in property get accessor
// newAccessorProperty value: 10

/**
 * Object.defineProperty的`writable`只对值为非Object类型时有效
 * */

///*
// * 当添加的属性是Object时,无论设置true还是false,test的值都可以被编辑修改
// **/
//
//Object.defineProperty(global, 'test', {
//    writable: true,
//    value: {
//        a: 123
//    }
//});
//
//test.a = 456;
//console.log(test);
//
//Object.defineProperty(global, 'test', {
//    writable: false,
//    value: {
//        a: 123
//    }
//});
//
//test.a = 456;
//console.log(test);

///*
// * 当添加的属性是非Object时,`writable`才生效
// **/
//
//Object.defineProperty(global, 'test', {
//    writable: true,
//    value: 123
//});
//
//global.test = 456;
//console.log(global.test);
//
//Object.defineProperty(global, 'test', {
//    writable: false,
//    value: 123
//});
//
//global.test = 456;
//console.log(global.test);