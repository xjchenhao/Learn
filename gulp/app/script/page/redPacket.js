/**
 * 手机钱庄
 * @name 红包和奖励
 * @description 单页js
 * @date 2015-08-10
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base=require('module/base'),
        cookie=require('module/cookie'),
        Handlebars = require('module/handlebars-helper'),
        LoadDate = require('module/load-data'),
        hrefParameter=require('module/href-parameter'),
        dateFormat=require('module/date-format'),
        Tab = require('module/tab');

    // 这里没有做路由,而是直接在页面js上载入数据,所以不需要暴露模块接口给路由js调用
    //module.exports = function () {
    //--------------------------------------------------【渲染页面】
    var redPacketTpl =__inline('../tpl/redPacketList.tpl');
    var redPacketTemplate = Handlebars.compile(redPacketTpl);

    var cashAwardTpl =__inline('../tpl/cashAwardRecord.tpl');
    var cashAwardTemplate = Handlebars.compile(cashAwardTpl);

    var redPacket = '#redPacketRecord';
    var cashAward = '#cashAwardRecord';
    var redPacketUrl = pageUrl.redPacket;
    var cashAwardUrl = pageUrl.cashAwardRecord;
    // 切换请求列表参数
    // [container: string, url, tpl, islock: false]
    var loadDateArr = [
        [redPacket, redPacketUrl, redPacketTemplate, false],
        [cashAward, cashAwardUrl, cashAwardTemplate, false]
    ];
    var currIndex = 0;

    //--------------------------------------------------【滚动加载数据】
    function loadDateFn (strObj, urlType, tplfn, fn) {
        return new LoadDate({
            url: urlType['url'], // 接口地址(必须)
            container: strObj, // load-container 容器对象(必须)
            noListStr: '暂无记录', // 无记录时，显示的文本(缺省)

            // 默认发送的data数据(缺省)  去除了page :1，不可为null
            sendData: {
                oauthToken:cookie.getCookie('qz_h5_oauthToken'),
                appId:pageUrl.appId,
                service:urlType['service'],
                currentPage:1,
                perNum:20
            },
            tplFn: function (data) {
                fn && fn(data);
                return tplfn(data.resultData);
            },   // 传入data解析成html函数
            callback: null
        })
    }
    loadDateFn(loadDateArr[currIndex][0], loadDateArr[currIndex][1], loadDateArr[currIndex][2], function(){
        loadDateArr[currIndex][3] = true;
    });

    //-------------------------------------------------- 【tab切换】
    new Tab({
        btnBox:document.getElementById('tabBtns'),
        containBox:document.getElementById('tab-cont'),
        btnActiveClass: 'on',
        contActiveClass: 'active',
        eventType:'click',
        currentNum:0,
        hrefParem:'',
        callback: function(i){
            if(loadDateArr[i][3] == false){
                loadDateFn(loadDateArr[i][0], loadDateArr[i][1], loadDateArr[i][2], function(){
                    loadDateArr[i][3] = true;
                });
            }
        }
    });
    //--------------------------------------------------【暴露接口内存回收】
    return function () {

    };
    //};
});
