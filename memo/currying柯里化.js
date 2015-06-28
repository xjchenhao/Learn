//编写一个通用的currying函数
var currying = function (fn) {
    var args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            [].push.apply(args, arguments);
            return arguments.callee;
        }
    }
};

//定义一个遍历每天开销,并求出它们总和的函数
var cost = (function () {
    var money = 0;

    return function () {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];

        }
        return money;
    }
}());

var func = currying(cost);  //转化成currying函数

func(100);  // 为真正求值
func(200);  // 为真正求值
func(300);  // 为真正求值

console.log(func());  // 求值并输出:600