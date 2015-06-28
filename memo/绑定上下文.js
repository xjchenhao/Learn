Function.prototype.bind = function () {
    var self = this,  // 保存函数
        context = [].shift.call(arguments),   // 需要绑定的this上下文
        args = [].slice.call(arguments);  // 剩余的参数转成数组
    return function () {  // 返回一个新的函数
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
        // 执行新的函数的时候,会把之前传入的context当做新函数体内的this
        // 并且组合两次分别传入的参数,作为新函数的参数
    }
};

var obj = {
    name: 'sven'
};

var func = function (a, b, c, d) {
    console.log(this.name);
    console.log([a, b, c, d]);
}.bind(obj, 1, 2);

func(3, 4);