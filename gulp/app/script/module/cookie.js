/**
 * Cookie读写      1.1.0
 */
(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function (require, exports, module) {
            return factory(root,{});
        });
    } else {
        root.Cookie = factory(root,{});
    }
})(this, function (root) {
    /*读取cookie*/
    var Cookie={
        getCookie:function (c_name) {
            if (document.cookie.length > 1) {
                var c_start = document.cookie.indexOf(c_name + "=");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    var c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) c_end = document.cookie.length;
                    return decodeURI(document.cookie.substring(c_start, c_end));
                }
            }
            return "";
        },
        setCookie:function(c_name, value, expiredays,domain) {
            var exdate = new Date();
            exdate.setSeconds(exdate.getSeconds() + expiredays);
            document.cookie = c_name + "=" + decodeURIComponent(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) +
            ((domain == null) ? "" : ";domain=" + domain)
        }
    };
    return Cookie;
});