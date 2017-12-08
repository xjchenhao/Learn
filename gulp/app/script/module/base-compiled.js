/**
 * 钱庄网
 * @name 基础js
 * @description 整站基础js模块
 * @date 2015-07-16
 * @version $V1.0$
 */
'use strict';

define(function (require, exports, module) {
    require('zepto');
    require('fastclick');

    var cookie = require('module/cookie'),
        pageUrl = require('module/ajax-map'),
        Dialog = require('module/dialog'),
        rsaEncrypt = require('module/rsaEncrypt'),
        oneSession = require('module/one-session');

    var popAlert = new Dialog('alert');
    //--------------------------------------------------【ajax代理】
    var ajaxAgent = function ajaxAgent(arg) {
        var _loginLink = "login.html",
            reg = new RegExp("(http|https)://" + location.host + "/"),
            _currentLink = location.href.replace(reg, ""),
            beforeFunc = arg.beforeFunc;

        return $.ajax({
            type: arg.type || "post",
            url: arg.url,
            async: arg.async && !0,
            dataType: arg.dataType || "json",
            data: arg.data,
            xhrFields: {
                withCredentials: true
            },
            success: function success(data) {
                beforeFunc && beforeFunc();
                if (data.resultCode == 0) {
                    if (data.errorCode == 'TOKEN_EXPIRED') {
                        // 弹出提醒
                        popAlert.run({
                            contStr: data.resultMsg,
                            confirmFunc: function confirmFunc() {
                                oneSession.set('redirectURL', 'index.html#&pageUser');
                                window.location.href = _loginLink + "?" + encodeURIComponent("redirectURL=index.html#&pageUser");
                            }
                        });

                        // 删除登录标识cookie
                        cookie.setCookie('qz_h5_phone', '', -1);
                        cookie.setCookie('qz_h5_oauthToken', '', -1);
                    } else {

                        // 弹出提醒
                        popAlert.run({
                            contStr: data.resultMsg
                        });
                    }
                    return false;
                }
                arg.success && arg.success(data);
            },
            timeout: 10000,
            error: function error(obj, errMsg, _error) {
                beforeFunc && beforeFunc();
                arg.errMsg && arg.errMsg(data);
                "function" == typeof arg.error ? arg.error() : console.log(errMsg);
            }
        });
    };
    //--------------------------------------------------【请求加密】

    var encryptedPwd = rsaEncrypt('10001', '9d183e5918a188d09ead235a4c2dc54e5216281d4a72fa57d21cf736d445d60591ba794c201efcf3f98bb3553a314f84d6b4af92dd400da34c2d9ad65baca2e7b329bf5320fa2e5790f91ab79a492d0b75ce1a6fa60dc8ab5399dd7e61632284e42aee9b33596b06ee2c256d0ef819e6f64378d33d0d9cfd5fa4462880e1ebd9');

    //--------------------------------------------------【加载完成,隐藏加载遮罩】
    $(window).on('load', function () {
        $('#pageLoading').remove();
    });

    //--------------------------------------------------【全局bug修复】

    // 解决在微信上a标签:active伪类失效的bug
    window.addEventListener('touchstart', function () {}, false);

    // fastclick代替zepto的tap,防止点透bug
    window.addEventListener('load', function () {
        //FastClick.attach(document.body);
    }, false);

    //--------------------------------------------------【判断登陆】

    // 根据cookie前端层面简单的登录与否判断
    var isLogin = function isLogin() {
        var loginStart = false;
        if (cookie.getCookie('qz_h5_phone') && cookie.getCookie('qz_h5_oauthToken')) {
            $.ajax({
                url: pageUrl.getUserInfoStatus.url,
                type: "post",
                data: {
                    oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                    appId: pageUrl.appId,
                    service: pageUrl.getUserInfoStatus.service
                },
                xhrFields: {
                    withCredentials: true
                },
                dataType: "json",
                async: false,
                success: function success(data) {
                    if (data.resultCode !== 1) {
                        loginStart = false;
                    } else {
                        loginStart = true;
                    }
                }
            });
        } else {
            loginStart = false;
        }
        return loginStart;
    };

    // 给mobilebone页面跳转的a标签绑定的-是否登录校验。
    window.isLoginPrevent = function (target) {
        var isPreventLogin = true,
            regUrlFormat = /^#.*/,
            redirectURL = '';

        if (cookie.getCookie('qz_h5_phone') && cookie.getCookie('qz_h5_oauthToken')) {
            isPreventLogin = false;
        } else {
            redirectURL = target.getAttribute('href');

            if (redirectURL == 'javascript:;' || redirectURL == '#') {
                redirectURL = location.href;
            }

            if (regUrlFormat.test(redirectURL)) {
                redirectURL = location.href.split('#')[0] + redirectURL;
            }

            oneSession.set('redirectURL', redirectURL);
            location.href = 'login.html';
            isPreventLogin = true;
        }

        return isPreventLogin;
    };

    //--------------------------------------------------【暴露公共方法】
    module.exports = {
        ajax: ajaxAgent,
        isLogin: isLogin,
        encryptedPwd: encryptedPwd
    };
});

//# sourceMappingURL=base-compiled.js.map