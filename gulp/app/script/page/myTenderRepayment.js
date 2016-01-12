/**
 * 手机钱庄
 * @name 还款计划
 * @description 单页js
 * @date 2015-11-05
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        cookie=require('module/cookie'),
        hrefParameter=require('module/href-parameter'),
        Dialog=require('module/dialog'),
        Handlebars = require('module/handlebars-helper');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {
    //--------------------------------------------------【渲染页面】
    var popAlert=new Dialog('alert');
    base.ajax({
        url: pageUrl.tenderPlan.url,
        type: "post",
        data: {
            appId:pageUrl.appId,
            service: pageUrl.tenderPlan.service,
            oauthToken:cookie.getCookie('qz_h5_oauthToken'),
            tenderId:hrefParameter.get('tenderId')
        },
        dataType: "json",
        async: false,
        success: function (data) {
            if(data.resultCode!==1){
                popAlert.run(data.resultMsg);
                return false;
            }

            var tpl =__inline('../tpl/pageMyTenderRepayment.tpl');
            var myTemplate = Handlebars.compile(tpl);
            $('#pageMyTenderRepayment').html(myTemplate(data.resultData));
        },
        timeout: 10000,
        error: function () {
            popAlert.run('请求超时请重新再试');
        }
    });

    //--------------------------------------------------【暴露接口内存回收】
    return function () {

    };
    //};
});
