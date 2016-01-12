/**
 * 手机钱庄
 * @name 回款信息
 * @description 单页js
 * @date 2015-08-06
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        cookie=require('module/cookie'),
        Handlebars = require('module/handlebars-helper'),
        LoadDate = require('module/load-data'),
        Tab = require('module/tab');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {
    //--------------------------------------------------【渲染页面】
    var tpl =__inline('../tpl/returnRecordList.tpl');
    var myTemplate = Handlebars.compile(tpl);

    var unReturn = '#unReturn';
    var returned = '#returned';
    var unReturnType = 2;
    var returnType = 1;

    // 切换请求列表参数
    // [container: string, urlType, islock: false]
    var loadDateArr = [
        [unReturn, unReturnType, false],
        [returned, returnType, false]
    ];
    var currIndex = 0;

    //--------------------------------------------------【滚动加载数据】

    function loadDateFn (strObj, type, fn) {
        return new LoadDate({
            url: pageUrl.returnRecord.url, // 接口地址(必须)
            container: strObj, // load-container 容器对象(必须)
            noListStr: '暂无记录', // 无记录时，显示的文本(缺省)

            // 默认发送的data数据(缺省)  去除了page :1，不可为null
            sendData: {
                oauthToken:cookie.getCookie('qz_h5_oauthToken'),
                appId:pageUrl.appId,
                service:pageUrl.returnRecord.service,
                currentPage:1,
                perNum:10,
                type: type
            },
            tplFn: function (data) {
                fn && fn();
                return myTemplate(data.resultData);
            },   // 传入data解析成html函数
            callback: null
        })
    }
    loadDateFn(loadDateArr[currIndex][0], loadDateArr[currIndex][1], function(){
        loadDateArr[currIndex][2] = true;
    });

    //--------------------------------------------------【tab切换】
    new Tab({
        btnBox:document.getElementById('tabBtns'),
        containBox:document.getElementById('tab-cont'),
        btnActiveClass: 'on',
        contActiveClass: 'active',
        eventType:'click',
        currentNum:0,
        hrefParem:'',
        callback: function(i){
            if(loadDateArr[i][2] == false){
                loadDateFn(loadDateArr[i][0], loadDateArr[i][1], function(){
                    loadDateArr[i][2] = true;
                });
            }
        }
    })
    //--------------------------------------------------【暴露接口内存回收】
    return function () {

    };
    //};
});