/**
 * 手机钱庄
 * @name 账户余额
 * @description 单页js
 * @date 2015-08-10
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        cookie=require('module/cookie'),
        Handlebars = require('module/handlebars-helper');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {
    //--------------------------------------------------【渲染页面】
    var tpl =__inline('../tpl/pageAccountBalance.tpl');
    var myTemplate = Handlebars.compile(tpl);
    base.ajax({
        url: pageUrl.accountBalance.url,
        type: "post",
        data: {
            oauthToken:cookie.getCookie('qz_h5_oauthToken'),
            appId:pageUrl.appId,
            service:pageUrl.accountBalance.service
        },
        dataType: "json",
        async: false,
        success: function (data) {
            $('#pageAccountBalance').html(myTemplate(data.resultData));
        }
    });
    //--------------------------------------------------【暴露接口内存回收】
    return function () {

    };
    //};
});
