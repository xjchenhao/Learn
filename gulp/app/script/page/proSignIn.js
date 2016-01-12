/**
 * 手机钱庄
 * @name 产品内页注册页
 * @description 单页js
 * @date 2015-08-13
 */
define(function (require, exports, module) {
    require('zepto');

    var pageUrl = require('module/ajax-map'),
        Pop = require('module/dialog'),
        base=require('module/base'),
        Verifyfrom = require('module/verifyfrom'),
        ActivateBtn = require('module/activate-btn'),
        cookie = require('module/cookie'),
        verifyRule = require('module/validate-rule'),
        verifyTips = require('module/validate-tips'),
        VerifyCode = require('module/verifyCode'),
        SubmitIng = require('module/submit-ing'),
        oneSession=require('module/one-session');

    module.exports = function () {
        var $pageSignIn = $('#pageSignIn'),
            alertPop = new Pop('alert'),
            confirmPop = new Pop('confirm');

        //--------------------------------------------------【激活按钮】
        var activateBtn = new ActivateBtn({
            contain: $pageSignIn[0]
        });

        //--------------------------------------------------【表单校验】
        var verifyfrom = new Verifyfrom();

        // 格式校验
        verifyfrom.add($('#setPassword')[0], [{
            strategy: verifyRule.loginPasswordLengthMin,
            errorMsg: verifyTips.USER_REGISTER_PASSWORD_FORMAT_ERROR
        }, {
            strategy: verifyRule.loginPasswordLengthMax,
            errorMsg: verifyTips.USER_REGISTER_PASSWORD_FORMAT_ERROR
        }]);

        // 发送验证码
        var verifyCode = new VerifyCode({
            elmInput: $pageSignIn.find('.js-userPhone')[0],
            elmBtn: $('#verifyCodeBtn')[0],
            url: pageUrl.validCode.url,
            isInstant:true,
            data: {
                'userName':$pageSignIn.find('.js-userPhone').val(),
                'appId': pageUrl.appId,
                'service': pageUrl.validCode.service
            },
            timeStartCallback: function () {
                $('#voiceTips').addClass('js_hide');
            },
            timeEndCallback: function () {
                $('#voiceTips').removeClass('js_hide');
            }
        });

        // 防重复提交
        var submitIng = new SubmitIng({
            elmBtn: $pageSignIn.find('.js-submit')[0]
        });

        $pageSignIn.find('.js-submit').on('click', function () {
            var userPhoneVal = $pageSignIn.find('.js-userPhone').val(),
                passwordVal = $('#setPassword').val(),
                validCodeVal = $('#verifyCode').val(),
                errorMsg = verifyfrom.start();

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
                url: pageUrl.register.url,
                type: "post",
                data: {
                    'userName': base.encryptedPwd(userPhoneVal),
                    'pwd': base.encryptedPwd(passwordVal),
                    'phoneCode': validCodeVal,
                    'appId': pageUrl.appId,
                    'service': pageUrl.register.service
                },
                dataType: "json",
                success: function (data) {
                    if (data.resultCode == 0) {
                        alertPop.run(data.resultMsg);
                        return false;
                    }

                    window.location.reload();

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

        //--------------------------------------------------【提示语音验证】
        $('#voiceBtn').on('click', function () {
            confirmPop.run({
                titStr: '',
                contStr: '验证码将以语音电话的形式呼到您的手机,请注意接听400-0455-360的来电.',
                confirmFunc: function () {
                    $.ajax({
                        url: pageUrl.regVoiceCode.url,
                        data: {
                            'userName': base.encryptedPwd($pageSignIn.find('.js-userPhone').val()),
                            'appId': pageUrl.appId,
                            'service': pageUrl.regVoiceCode.service
                        },
                        dataType: 'json',
                        type: 'post',
                        beforeSend: function () {
                            $('#verifyCodeBtn')[0].setAttribute('disabled', true);
                        },
                        success: function (data) {
                            cookie.setCookie('verifyCodeTime', 60, 60);
                            verifyCode._timeUpdate();
                        }
                    });
                }
            });
        });
        //--------------------------------------------------【暴露接口内存回收】
        return function () {
            $pageSignIn.find('.js-submit').off('click');
            activateBtn.destroy();
            alertPop.destroy();
            verifyfrom.destroy();
            verifyCode.destroy();
            submitIng.destroy();
        }
    };
});