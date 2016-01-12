/**
 * 手机钱庄
 * @name 我的银行卡
 * @description 单页js
 * @date 2015-08-12
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        cookie=require('module/cookie'),
        Mobilebone = require('mobilebone'),
        Handlebars = require('module/handlebars-helper');

    //module.exports = function () {

    //--------------------------------------------------【绑定银行卡 绑定表单页面 场景切换】
    base.ajax({
        url: pageUrl.getUserInfoStatus.url,
        type: "post",
        data: {
            oauthToken:cookie.getCookie('qz_h5_oauthToken'),
            appId:pageUrl.appId,
            service:pageUrl.getUserInfoStatus.service
        },
        dataType: "json",
        async: false,
        success: function (data) {
            var bankCardStatus = data.resultData.bankCardStatus;
            if(bankCardStatus != 1){//判断是否绑定过银行卡 绑定过跳转我的银行卡页
                window.location.replace('addBankCard.html');
                return false;
            }else{//我的银行卡 入场
                Mobilebone.transition($('#pageMyBankCard')[0], null, {
                    history: false
                });
            }
        }
    });
    //--------------------------------------------------【渲染页面】
    var tpl =__inline('../tpl/pageMyBankCard.tpl');
    var myTemplate = Handlebars.compile(tpl);
    base.ajax({
        url: pageUrl.myBankCard.url,
        type: "post",
        data: {
            oauthToken:cookie.getCookie('qz_h5_oauthToken'),
            appId:pageUrl.appId,
            service:pageUrl.myBankCard.service
        },
        dataType: "json",
        async: false,
        success: function (data) {
            $('#pageMyBankCard').html(myTemplate(data.resultData));
        }
    });
    Mobilebone.classAnimation = "fade";
    Mobilebone.init();
    //--------------------------------------------------【暴露接口内存回收】
    //return function () {
    //
    //};
    //};
});