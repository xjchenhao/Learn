/**
 * 手机钱庄
 * @name 登录前校验跳转登录or注册
 * @description 单页js
 * @date 2015-07-16
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        Pop = require('module/dialog'),
        base=require('module/base'),
        Mobilebone = require('mobilebone'),
        Verifyfrom = require('module/verifyfrom'),
        verifyRule = require('module/validate-rule'),
        verifyTips = require('module/validate-tips'),
        ActivateBtn=require('module/activate-btn'),
        SubmitIng = require('module/submit-ing'),
        oneSession = require('module/one-session');

    module.exports = function () {
        var $pageLoginCheck = $('#pageLoginCheck'),
            alertPop = new Pop('alert');

        //--------------------------------------------------【手机号只能输入数字】
        var $userPhone=$('#userPhone');

        $userPhone.on('input change',function(){
            var $this=$(this);
            $this.val($this.val().replace(/\D/g,''));
        });
        //--------------------------------------------------【激活按钮】
        var activateBtn=new ActivateBtn({
            contain:$pageLoginCheck[0]
        });

        //--------------------------------------------------【表单校验】
        var verifyfrom = new Verifyfrom();

        verifyfrom.add($userPhone[0], [{
            strategy: verifyRule.phone,
            errorMsg: verifyTips.USER_REGISTER_PHONE_FORMAT_ERROR
        }]);

        // 防重复提交
        var submitIng = new SubmitIng({
            elmBtn: $pageLoginCheck.find('.js-submit')[0]
        });
        $pageLoginCheck.find('.js-submit').on('click', function () {

            var userPhoneVal = $userPhone.val(),
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

            base.ajax({
                url: pageUrl.phoneCheck.url,
                type: "post",
                data: {
                    'userName': base.encryptedPwd(userPhoneVal),
                    'appId': pageUrl.appId,
                    'service': pageUrl.phoneCheck.service
                },
                dataType: "json",
                success: function (data) {
                    if (data.resultCode == 0) {
                        alertPop.run(data.resultMsg);
                        return false;
                    }
                    oneSession.set('userPhone',userPhoneVal);
                    if (data.resultData.phoneExist == 0) {
                        Mobilebone.transition($('#pageSignIn')[0], $('#pageLoginCheck')[0]);
                        return false;
                    }
                    if (data.resultData.phoneExist == 1) {
                        Mobilebone.transition($('#pageLogin')[0], $('#pageLoginCheck')[0]);
                        return false;
                    }
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
            $pageLoginCheck.find('.js-submit').off('click');
            activateBtn.destroy();
            alertPop.destroy();
            verifyfrom.destroy();
            submitIng.destroy();
        }
    };
});