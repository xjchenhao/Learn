Function.prototype.before = function (beforefn) {
    var self = this;
    return function () {
        beforefn.apply(this, arguments);
        return self.apply(this, arguments);
    }
};

Function.prototype.after = function (afterfn) {
    var self = this;
    return function () {
        var ret = self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};

var func = function () {
    console.log(2);
};

func = func.before(function () {
    console.log(1);
}).after(function () {
    console.log(3);
});

func();