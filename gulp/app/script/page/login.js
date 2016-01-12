/**
 * 手机钱庄
 * @name 登录页
 * @description 单页js
 * @date 2015-07-28
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base = require('module/base'),
        Pop = require('module/dialog'),
        Verifyfrom = require('module/verifyfrom'),
        verifyRule = require('module/validate-rule'),
        verifyTips = require('module/validate-tips'),
        cookie = require('module/cookie'),
        ActivateBtn = require('module/activate-btn'),
        SubmitIng = require('module/submit-ing'),
        oneSession = require('module/one-session');

    module.exports = function () {
        var $pageLogin = $('#pageLogin'),
            alertPop = new Pop('alert');

        //--------------------------------------------------【激活按钮】
        var activateBtn = new ActivateBtn({
            contain: $pageLogin[0]
        });

        //--------------------------------------------------【点击忘记密码存手机号到session中】
        $('#forgetLoginPasswordBtn').on('click', function () {
            oneSession.set('userPhone', $pageLogin.find('.js-userPhone').val());
        });
        //--------------------------------------------------【表单校验】
        var verifyfrom = new Verifyfrom();

        verifyfrom.add($('#loginPassword')[0], [{
            strategy: verifyRule.loginPasswordLengthMin,
            errorMsg: verifyTips.USER_REGISTER_PASSWORD_FORMAT_ERROR
        }, {
            strategy: verifyRule.loginPasswordLengthMax,
            errorMsg: verifyTips.USER_REGISTER_PASSWORD_FORMAT_ERROR
        }]);

        // 防重复提交
        var submitIng = new SubmitIng({
            elmBtn: $pageLogin.find('.js-submit')[0]
        });

        $pageLogin.find('.js-submit').on('click', function () {
            var userPhoneVal = $pageLogin.find('.js-userPhone').val(),
                passwordVal = $('#loginPassword').val(),
                errorMsg = verifyfrom.start();    // 运行校验模块,获得错误信息(如果有错误的话)

            // 提交中则跳出
            if (submitIng.state) {
                return false
            } else {
                submitIng.start('提交中...');
            }

            // 显示错误提示,跳出submit
            if (errorMsg) {
                alertPop.run(errorMsg);
                submitIng.end();
                return false;
            }

            // 发送请求
            base.ajax({
                url: pageUrl.login.url,
                type: "post",
                xhrFields: {
                    withCredentials: true
                },
                data: {
                    'userName': base.encryptedPwd(userPhoneVal),
                    'pwd': base.encryptedPwd(passwordVal),
                    'appId': pageUrl.appId,
                    'service': pageUrl.login.service
                },
                async: false,
                dataType: "json",
                success: function (data) {
                    if (data.resultCode == 0) {
                        alertPop.run(data.resultMsg);
                        return false;
                    }

                    var redirectURL = oneSession.get('redirectURL');
                    if (redirectURL) {
                        window.location.href = redirectURL;
                    } else {
                        window.location.href = 'index.html#&pageUser'
                    }
                },
                timeout: 10000,
                error: function () {
                    alertPop.run('请求超时请重新再试');
                },
                beforeFunc: function () {
                    submitIng.end();
                }
            });
        });
        //--------------------------------------------------【暴露接口内存回收】
        return function () {
            $pageLogin.find('.js-submit').off('click');
            activateBtn.destroy();
            alertPop.destroy();
            verifyfrom.destroy();
            submitIng.destroy();
        }
    };
});