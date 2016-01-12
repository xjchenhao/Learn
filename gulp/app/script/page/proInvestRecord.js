/**
 * 手机钱庄
 * @name 投资列表
 * @description 单页js
 * @date 2015-08-03
 */
define(function (require, exports, module) {
    require('zepto');
    var pageUrl = require('module/ajax-map'),
        LoadDate = require('module/load-data'),
        Handlebars = require('module/handlebars-helper'),
        hrefParameter=require('module/href-parameter');
        dateFormat=require('module/date-format');

    module.exports = function () {
        var $pageProInvestRecord=$('#pageProInvestRecord');
        //--------------------------------------------------【加载数据】
        var loadDate = new LoadDate({
            url: pageUrl.tenderRecord.url, // 接口地址(必须)
            container: '#investRecordList', // load-container 容器对象(必须)
            noListStr: '暂无记录', // 无记录时，显示的文本(缺省)

            // 默认发送的data数据(缺省)  去除了page :1，不可为null
            sendData: {
                appId:pageUrl.appId,
                service: pageUrl.tenderRecord.service,
                borrowId:hrefParameter.get('borrowId'),
                currentPage:1,
                perNum:10
            },
            tplFn: function (data) {
                var tpl = __inline('../tpl/investRecordList.tpl'),
                    template = Handlebars.compile(tpl); // 特别注明该处模版编译方法调用方式因版本而异

                return template(data.resultData);
            },   // 传入data解析成html函数
            callback: null   // 载入完成后的回调函数(缺省)(用于绑定事件，注意尽量事件委托，并注意先off，免得重复绑定)
        });

        //--------------------------------------------------【暴露接口内存回收】
        return function () {
        }
    };
});