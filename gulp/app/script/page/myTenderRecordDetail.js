/**
 * 手机钱庄
 * @name 投资详情
 * @description 单页js
 * @date 2015-08-07
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        cookie=require('module/cookie'),
        hrefParameter=require('module/href-parameter'),
        Handlebars = require('module/handlebars-helper');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {
    //--------------------------------------------------【渲染页面】
    var tpl =__inline('../tpl/pageMyTenderRecordDetail.tpl');
    var myTemplate = Handlebars.compile(tpl);
    base.ajax({
        url: pageUrl.myTenderRecordDetail.url,
        type: "post",
        data: {
            oauthToken:cookie.getCookie('qz_h5_oauthToken'),
            appId:pageUrl.appId,
            service:pageUrl.myTenderRecordDetail.service,
            tenderId:hrefParameter.get('tenderId')
        },
        dataType: "json",
        async: false,
        success: function (data) {
            Handlebars.registerHelper("protocolForHtml", function(){
                var htmlSrc = pageUrl.protocolForHtml.url;
                htmlSrc += '?appId=' + pageUrl.appId;
                htmlSrc += '&borrowId=' + data.resultData.tenderdetail.borrowId;
                htmlSrc += '&oauthToken=' + cookie.getCookie('qz_h5_oauthToken');
                htmlSrc += '&service=' + pageUrl.protocolForHtml.service;
                htmlSrc += '&tenderId=' + data.resultData.tenderdetail.tenderId;

                return new Handlebars.SafeString(htmlSrc);
            });
            $('#pageMyTenderRecordDetail').html(myTemplate(data.resultData));
        }
    });
    //--------------------------------------------------【暴露接口内存回收】
    return function () {

    };
    //};
});
