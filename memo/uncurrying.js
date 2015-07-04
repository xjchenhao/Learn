//Function.prototype.uncurrying = function () {
//    var self = this;    // self此时是Array.prototype.push
//    return function () {
//        var obj = Array.prototype.shift.call(arguments);
//        // obj是{
//        //    length:1,
//        //    0:1
//        // }
//        // arguments对象的第一个元素被截去,剩下[2]
//        return self.apply(obj, arguments);
//    }
//};

// uncurrying的另外一种实现方式
Function.prototype.uncurrying = function () {
    var self = this;
    return function () {
        Function.prototype.call.apply(self, arguments);

        //可以剖析成下面的方式来读:
        //Function.prototype.call(Array.prototype.push, arguments);
        //Array.prototype.push.call(obj = { length: 1, 0: 1}, 2);
    }
};

var push = Array.prototype.push.uncurrying(),
    objA = {
        length: 1,
        0: 1
    };
push(objA, 2);
console.log(objA);   // { '0': 1, '1': 2, length: 2 }

//给array对象拓展多个数组方法
for (var i = 0, fn, ary = ['push', 'shift', 'forEach']; fn = ary[i++];) {
    Array[fn] = Array.prototype[fn].uncurrying();
}
var objB = {
    length: 3,
    0: 1,
    1: 2,
    2: 3
};
Array.push(objB, 4);  // 向数组添加一个元素
console.log(objB.length);    // 4

var first = Array.shift(objB);
console.log(first); // undefined    WHY?????
console.log(objB);  // { '0': 2, '1': 3, '2': 4, length: 3 }

Array.forEach(objB, function (i, n) {
    console.log(n);  // 分别输出:0,1,2
});