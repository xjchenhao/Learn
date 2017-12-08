/**
 * 手机钱庄
 * @name 在投资金
 * @description 单页js
 * @date 2015-08-11
 */
'use strict';

define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base = require('module/base'),
        cookie = require('module/cookie'),
        hrefParameter = require('module/href-parameter'),
        Handlebars = require('module/handlebars-helper'),
        activeBtn = require('module/activate-btn');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {
    //--------------------------------------------------【渲染页面】
    var tpl = __inline('../tpl/pageBmOutResult.tpl');
    var myTemplate = Handlebars.compile(tpl);
    base.ajax({
        url: pageUrl.bmOutResult.url,
        type: "post",
        data: {
            oauthToken: cookie.getCookie('qz_h5_oauthToken'),
            appId: pageUrl.appId,
            service: pageUrl.bmOutResult.service,
            orderNo: hrefParameter.get('orderNo')
        },
        dataType: "json",
        async: false,
        success: function success(data) {
            $('#pageBmOutResult').html(myTemplate(data.resultData));
        }
    });

    //--------------------------------------------------【暴露接口内存回收】
    //return function () {
    //
    //};
    //};
});

//# sourceMappingURL=bmOutResult-compiled.js.map