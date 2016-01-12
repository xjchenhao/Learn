/**
 * 手机钱庄
 * @name 忘记登录密码
 * @description 单页js
 * @date 2015-08-05
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base = require('module/base'),
        cookie = require('module/cookie'),
        Pop = require('module/dialog'),
        Verifyfrom = require('module/verifyfrom'),
        verifyRule = require('module/validate-rule'),
        verifyTips = require('module/validate-tips'),
        VerifyCode = require('module/verifyCode'),
        ActivateBtn = require('module/activate-btn'),
        SubmitIng = require('module/submit-ing'),
        oneSession = require('module/one-session');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {

    var $pageLoginTransPassword = $('#pageLoginTransPassword'),
        $submitBtn = $('#submitBtn'),
        $userPhone = $('#userPhone');
    //--------------------------------------------------【验证码获取】

    // 发送验证码
    var verifyCode = new VerifyCode({
        elmInput: $userPhone[0],
        elmBtn: $('#verifyCodeBtn')[0],
        url: pageUrl.forgetPwdGetValCode.url,
        phoneKey: 'userName',
        data: {
            'appId': pageUrl.appId,
            'service': pageUrl.forgetPwdGetValCode.service
        }
    });

    //--------------------------------------------------【自动填入传值手机号】
    var forgetPwdPhoneVal=oneSession.get('userPhone');
    if(forgetPwdPhoneVal){
        $userPhone.val(forgetPwdPhoneVal);
        verifyCode.run();
    }

    //--------------------------------------------------【激活按钮】
    var activateBtn = new ActivateBtn({
        contain: $pageLoginTransPassword[0]
    });
    //--------------------------------------------------【格式校验】
    var verifyfrom = new Verifyfrom(),
        alertPop = new Pop('alert');

    // 校验规则
    verifyfrom.add($('#password')[0], [{
        strategy: verifyRule.loginPasswordLengthMin,
        errorMsg: verifyTips.USER_REGISTER_PASSWORD_FORMAT_ERROR
    }, {
        strategy: verifyRule.loginPasswordLengthMax,
        errorMsg: verifyTips.USER_REGISTER_PASSWORD_FORMAT_ERROR
    }]);


    //--------------------------------------------------【表单提交】

    // 防重复提交
    var submitIng = new SubmitIng({
        elmBtn: $submitBtn[0]
    });

    $submitBtn.on('click', function () {
        var passwordVal = $('#password').val(),
            verifyCodeVal = $('#verifyCode').val(),
            userPhoneVal = $userPhone.val(),
            errorMsg = verifyfrom.start();    // 运行校验模块,获得错误信息(如果有错误的话)

        // 提交中则跳出
        if (submitIng.state) {
            return false
        } else {
            submitIng.start('提交中...');
        }

        // 显示错误提示,跳出submit
        if (errorMsg) {
            submitIng.end();
            alertPop.run(errorMsg);
            return false;
        }

        base.ajax({
            url: pageUrl.resetLoginPwd.url,
            type: "post",
            data: {
                appId: pageUrl.appId,
                service: pageUrl.resetLoginPwd.service,
                pwd: base.encryptedPwd(passwordVal),
                phoneCode: verifyCodeVal,
                userName: base.encryptedPwd(userPhoneVal)
            },
            dataType: "json",
            async: false,
            success: function (data) {
                alertPop.run({
                    contStr: '登录密码重置成功',
                    confirmFunc: function () {
                        oneSession.set('userPhone',userPhoneVal);
                        window.location.href = 'login.html#&pageLogin'
                    }
                });
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
        submitIng.destroy();

    };
    //};
});