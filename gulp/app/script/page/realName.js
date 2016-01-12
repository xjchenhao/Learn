/**
 * 手机钱庄
 * @name 实名认证
 * @description 单页js
 * @date 2015-08-03
 */
define(function (require, exports, module) {
    require('zepto');

    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        Pop = require('module/dialog'),
        Verifyfrom = require('module/verifyfrom'),
        ActivateBtn = require('module/activate-btn'),
        cookie = require('module/cookie'),
        verifyRule = require('module/validate-rule'),
        verifyTips = require('module/validate-tips'),
        oneSession = require('module/one-session'),
        Handlebars = require('module/handlebars-helper');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {

    var $pageRealName = $('#pageRealName'),
        alertPop = new Pop('alert');
    //--------------------------------------------------【渲染页面】
    var tpl = __inline('../tpl/pageRealName.tpl');
    var myTemplate = Handlebars.compile(tpl);
    $pageRealName.html(myTemplate(null));

    //--------------------------------------------------【激活按钮】
    var activateBtn = new ActivateBtn({
        contain: $pageRealName[0]
    });

    //--------------------------------------------------【表单校验】
    var verifyfrom = new Verifyfrom();

    // 格式校验
    verifyfrom.add($('#userName')[0], [{
        strategy: verifyRule.realName,
        errorMsg: verifyTips.USER_REALNAME_NAME_FORMAT_ERROR
    }]);
    verifyfrom.add($('#identityCard')[0], [{
        strategy: verifyRule.identityCard,
        errorMsg: verifyTips.USER_REALNAME_CARDID_FORMAT_ERROR
    }]);
    verifyfrom.add($('#dealPassword')[0], [{
        strategy: verifyRule.dealPasswordLengthMin,
        errorMsg: verifyTips.USER_REGISTER_PASSWORD_FORMAT_ERROR
    }, {
        strategy: verifyRule.dealPasswordLengthMax,
        errorMsg: verifyTips.USER_REGISTER_PASSWORD_FORMAT_ERROR
    }]);

    // 表单提交
    $pageRealName.find('.js-submit').on('click', function () {
        var userPhone = cookie.getCookie('qz_h5_phone'),
            userNameVal = $('#userName').val(),
            identityCardVal = $('#identityCard').val(),
            dealPasswordVal = $('#dealPassword').val(),
            errorMsg = verifyfrom.start();
        if (errorMsg) {
            alertPop.run(errorMsg);
            return false;
        }

        base.ajax({
            url: pageUrl.certification.url,
            type: "post",
            data: {
                'appId': pageUrl.appId,
                'cardId': base.encryptedPwd(identityCardVal),
                'payPwd': base.encryptedPwd(dealPasswordVal),
                'realName': userNameVal,
                'service': pageUrl.certification.service,
                'oauthToken':cookie.getCookie('qz_h5_oauthToken'),
                'userName': base.encryptedPwd(userPhone)
            },
            dataType: "json",
            success: function (data) {
                alertPop.run({
                    contStr:'实名认证成功',
                    confirmFunc:function(){
                        var redirectURL = oneSession.get('redirectURL');

                        if (redirectURL) {
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
            }
        });
    });
    //--------------------------------------------------【暴露接口内存回收】
    return function () {
        activateBtn.destroy();
        alertPop.destroy();
        verifyfrom.destroy();
    }
    //};
});