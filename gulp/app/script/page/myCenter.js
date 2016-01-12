/**
 * 手机钱庄
 * @name 个人设置中心
 * @description 单页js
 * @date 2015-08-04
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
        var tpl =__inline('../tpl/pageMyCenter.tpl');
        var myTemplate = Handlebars.compile(tpl);
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
                $('#pageMyCenter').html(myTemplate(data.resultData));
            }
        });
        //--------------------------------------------------【安全退出】
        $('#safetyQuit').on('click',function(){
            base.ajax({
                url: pageUrl.logout.url,
                type: "post",
                data: {
                    oauthToken:cookie.getCookie('qz_h5_oauthToken'),
                    appId:pageUrl.appId,
                    service:pageUrl.logout.service
                },
                dataType: "json",
                async: false,
                success: function (data) {

                    // 删除登录标识cookie
                    cookie.setCookie('qz_h5_phone','',-1,'.qian360.com');
                    cookie.setCookie('qz_h5_oauthToken','',-1,'.qian360.com');

                    // 删除所有session
                    sessionStorage.clear();

                    // 跳转出去
                    location.href='index.html#&pageMore';
                }
            });
        });
        //--------------------------------------------------【暴露接口内存回收】
        return function () {

        };
    //};
});