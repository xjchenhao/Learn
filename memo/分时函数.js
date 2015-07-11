var timeChunk = function (ary, fn, count) { // 参数分别是:需处理的数据数组,处理数据的函数体,分几次处理

    var obj,    // 需处理的数组
        t;  // 定时器

    var len = ary.length;

    var start = function () {
        for (var i = 0; i < Math.min(count || 1, ary.length); i++) {    // 直到i被执行8次or执行完最后几次

            // 每次拿一个值进行函数处理,并推出这个值.
            obj = ary.shift();
            fn(obj);
        }
    };

    return function () {
        t = setInterval(function () {

            // 没有要参数直接跳出
            if (len === 0) {
                return clearInterval(t);
            }

            // 执行批量处理函数
            start();

        }, 200);
    };

};

var ary = [];

for (var i = 1; i <= 1000; i++) {
    ary.push(i);
}

var renderFriendList = timeChunk(ary, function (n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
}, 8);

renderFriendList();