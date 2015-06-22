var Type = {};
for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {

    /*
     * 因为函数调用是异步的,当调用的时候for已经结束了,i=0,type=undefind
     * 所以利用闭包把每次循环的i和type封闭起来.
     * (当在时间函数中顺着作用域链中从内到外查找变量i时,会先找到被封闭在闭包环境中的i和type)
     * */

    (function (type) {
        Type['is' + type] = function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        }
    }(type));
}

console.log(Type.isArray([]));  // true
console.log(Type.isNumber(1));  // true
console.log(Type.isNumber('abc'));  // false
console.log(Type.isString('abc'));  // true
