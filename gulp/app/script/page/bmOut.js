/**
 * 手机钱庄
 * @name 在投资金
 * @description 单页js
 * @date 2015-08-11
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        Pop = require('module/dialog'),
        cookie=require('module/cookie'),
        Handlebars = require('module/handlebars-helper'),
        activeBtn = require('module/activate-btn'),
        oneSession = require('module/one-session');


    //module.exports = function () {
    //--------------------------------------------------【渲染页面】
        var tpl =__inline('../tpl/pageBmOut.tpl');
        var myTemplate = Handlebars.compile(tpl);
        base.ajax({
            url: pageUrl.tendering.url,
            type: "post",
            data: {
                oauthToken:cookie.getCookie('qz_h5_oauthToken'),
                appId:pageUrl.appId,
                service:pageUrl.tendering.service
            },
            dataType: "json",
            async: false,
            success: function (data) {
                $('#pageBmOut').html(myTemplate(data.resultData));
            }
        });
    //--------------------------------------------------【设置忘记密码的url重定向】
    $('#forgetBtn').on('click',function(){
        oneSession.set('redirectURL',location.href);
    });

    //--------------------------------------------------【表单按钮状态】
        new activeBtn();
    //--------------------------------------------------【点击按钮跳转结果】
        var bmOut = $('#pageBmOut');
        var alertPop = new Pop('alert');
        var moneyInput = $('#money');
        var passwordInput = $('#password');
        var isSubmitLock = false;

        moneyInput.on('input', function(){
            var $this = $(this),
                val = $this.val();
            $this.val(val.replace(/\D/g,''));
        });
        bmOut.find('.j-submit').on('click', function(){
            if(isSubmitLock) return;
            isSubmitLock = true;

            var _money = moneyInput.val();
            var _password = passwordInput.val();
            base.ajax({
                url: pageUrl.bmOut.url,
                type: "post",
                data: {
                    'oauthToken':cookie.getCookie('qz_h5_oauthToken'),
                    'appId': pageUrl.appId,
                    'service': pageUrl.bmOut.service,
                    'outMoney': _money,
                    'payPwd': base.encryptedPwd(_password)
                },
                dataType: "json",
                success: function (data) {
                    if (data.resultCode == 0) {
                        alertPop.run(data.resultMsg);
                        return false;
                    }
                    var _orderNo = data.resultData.orderNo;
                    window.location.replace('bmOutResult.html?orderNo='+_orderNo);

                },
                timeout: 10000,
                error: function () {
                    alertPop.run('请求超时请重新再试');
                },
                beforeFunc:function(){
                    isSubmitLock = false;
                }
            });
        });

    //--------------------------------------------------【暴露接口内存回收】
    return function () {

    };
    //};
});
