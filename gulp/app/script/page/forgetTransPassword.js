/**
 * 手机钱庄
 * @name 忘记交易密码
 * @description 单页js
 * @date 2015-08-04
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        cookie=require('module/cookie'),
        Pop = require('module/dialog'),
        Verifyfrom = require('module/verifyfrom'),
        verifyRule = require('module/validate-rule'),
        verifyTips = require('module/validate-tips'),
        VerifyCode=require('module/verifyCode'),
        oneSession=require('module/one-session'),
        SubmitIng = require('module/submit-ing'),
        ActivateBtn = require('module/activate-btn');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {

    var $pageForgetTransPassword=$('#pageForgetTransPassword'),
        $submitBtn=$('#submitBtn');

    //--------------------------------------------------【获取手机号,用于显示手机号和存放入隐藏域给验证码模块用】
    var userPhone=cookie.getCookie('qz_h5_phone'),
        $userPhone=$('#userPhone'),
        $userPhoneShow=$('#userPhoneShow');
    $userPhoneShow.html('您绑定的手机号码：'+userPhone.substring(0,3)+"****"+userPhone.substring(7,11));
    $userPhone.val(userPhone);

    // 发送验证码
    var verifyCode = new VerifyCode({
        elmInput: $userPhone[0],
        elmBtn: $('#verifyCodeBtn')[0],
        url: pageUrl.forgetPwdGetValCode.url,
        data: {
            'userName':base.encryptedPwd($userPhone.val()),
            'appId': pageUrl.appId,
            'service': pageUrl.forgetPwdGetValCode.service
        }
    });

    //--------------------------------------------------【激活按钮】
    var activateBtn = new ActivateBtn({
        contain: $pageForgetTransPassword[0]
    });
    //--------------------------------------------------【格式校验】
    var verifyfrom = new Verifyfrom(),
        alertPop = new Pop('alert');

    // 校验规则
    verifyfrom.add($('#dealPassword')[0], [{
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

    $submitBtn.on('click',function(){
        var userIdVal=$('#userId').val(),
            dealPasswordVal=$('#dealPassword').val(),
            userPhoneVal=cookie.getCookie('qz_h5_phone'),
            verifyCodeVal=$('#verifyCode').val(),
            errorMsg=verifyfrom.start();    // 运行校验模块,获得错误信息(如果有错误的话)

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
            url: pageUrl.resetPayPwd.url,
            type: "post",
            data: {
                oauthToken:cookie.getCookie('qz_h5_oauthToken'),
                appId:pageUrl.appId,
                service:pageUrl.resetPayPwd.service,
                cardId:base.encryptedPwd(userIdVal),
                pwd:base.encryptedPwd(dealPasswordVal),
                phoneCode:verifyCodeVal,
                userName:base.encryptedPwd(userPhoneVal)
            },
            dataType: "json",
            async: false,
            success: function (data) {
                alertPop.run({
                    contStr:'交易密码重置成功',
                    confirmFunc:function(){
                        var redirectURL=oneSession.get('redirectURL');
                        if(redirectURL){
                            window.location.href = redirectURL;
                        }else{
                            window.location.href='index.html#&pageMore';
                        }
                    }
                });
            },
            timeout: 10000,
            error: function () {
                alertPop.run('请求超时请重新再试');
            },
            beforeFunc:function(){
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