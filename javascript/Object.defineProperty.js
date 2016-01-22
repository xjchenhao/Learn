'use strict';

/**
 * Object.defineProperty的`writable`只对值为非Object类型时有效
 * */

/*
 * 当添加的属性是Object时,无论设置true还是false,test的值都可以被编辑修改
 **/

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

/*
 * 当添加的属性是非Object时,`writable`才生效
 **/

Object.defineProperty(global, 'test', {
    writable: true,
    value: 123
});

global.test = 456;
console.log(global.test);

Object.defineProperty(global, 'test', {
    writable: false,
    value: 123
});

global.test = 456;
console.log(global.test);