/**
 * 手机钱庄
 * @name 修改登录密码
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
        SubmitIng = require('module/submit-ing'),
        ActivateBtn = require('module/activate-btn');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {

    var $pageEditLoginPassword=$('#pageEditLoginPassword'),
        $submitBtn=$('#submitBtn');

    //--------------------------------------------------【激活按钮】
    var activateBtn = new ActivateBtn({
        contain: $pageEditLoginPassword[0]
    });
    //--------------------------------------------------【格式校验】
    var verifyfrom = new Verifyfrom(),
        alertPop = new Pop('alert');

    verifyfrom.add($('#newPwd')[0], [{
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
        var oldPwdVal=$('#oldPwd').val(),
            newPwdVal=$('#newPwd').val(),
            confirmPwdVal=$('#confirmPwd').val(),
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

        if(newPwdVal!=confirmPwdVal){
            alertPop.run('两次新密码输入不一致');
            submitIng.end();
            return false;
        }

        base.ajax({
            url: pageUrl.modifyLoginPwd.url,
            type: "post",
            data: {
                oauthToken:cookie.getCookie('qz_h5_oauthToken'),
                appId:pageUrl.appId,
                service:pageUrl.modifyLoginPwd.service,
                oldPwd:base.encryptedPwd(oldPwdVal),
                newPwd:base.encryptedPwd(newPwdVal),
                confirmPwd:base.encryptedPwd(confirmPwdVal)
            },
            dataType: "json",
            async: false,
            success: function (data) {
                alertPop.run({
                    contStr:'登录密码修改成功',
                    confirmFunc:function(){
                        window.location.href='login.html';
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
        $submitBtn.off('click');
        submitIng.destroy();
    };
    //};
});