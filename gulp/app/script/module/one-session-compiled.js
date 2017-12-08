/*仅存取一次的session 1.0.3*/
"use strict";

define(function (require, exports, module) {
    var oneSession = {
        get: function get(name) {
            if (sessionStorage) {
                var sessionVal = sessionStorage.getItem(name);
                sessionStorage.removeItem(name);
                return sessionVal;
            } else {
                if (document.cookie.length > 1) {
                    var c_start = document.cookie.indexOf(name + "=");
                    if (c_start != -1) {
                        c_start = c_start + name.length + 1;
                        var c_end = document.cookie.indexOf(";", c_start);
                        if (c_end == -1) c_end = document.cookie.length;
                        return decodeURI(document.cookie.substring(c_start, c_end));
                    }
                }
                return "";
            }
        },
        set: function set(name, value, expiredays) {
            if (sessionStorage) {
                sessionStorage.setItem(name, value);
            } else {
                var exdate = new Date();
                exdate.setSeconds(exdate.getSeconds() + expiredays);
                document.cookie = name + "=" + decodeURIComponent(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString());
            }
        }
    };

    return oneSession;
});

//# sourceMappingURL=one-session-compiled.js.map