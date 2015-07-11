//通用惰性单例代码
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

//实例:创建唯一的iframe
var createSingleIframe = getSingle(function () {
    var iframe = document.createElement('iframe');
    document.body.appendChild(iframe);
    return iframe;
});

document.getElementById('loginBtn').onclick = function () {
    var loginLayer = createSingleIframe();
    loginLayer.src = 'http://www.qian360.com';
};

//实例:元素只绑定一次事件
var bindEvent = getSingle(function () {
    document.getElementById('div1').onclick = function () {
        alert('click');
    };

    /*
     * 必须给出返回值
     * 惰性单例根据这个返回值判断是否已经执行函数体
     * */
    return false;
});

var render = function () {
    console.log('开始渲染列表');
    bindEvent();
};

render();
render();
render();