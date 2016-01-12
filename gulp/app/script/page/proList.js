/**
 * 手机钱庄
 * @name 产品列表
 * @description 单页js
 * @date 2015-07-29
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        LoadDate = require('module/load-data'),
        Handlebars = require('module/handlebars-helper');

    module.exports = function () {
        //--------------------------------------------------【加载数据】
        var loadDate = new LoadDate({
            url: pageUrl.list.url, // 接口地址(必须)
            container: '#proList', // load-container 容器对象(必须)
            noListStr: '暂无记录', // 无记录时，显示的文本(缺省)

            // 默认发送的data数据(缺省)  去除了page :1，不可为null
            sendData: {
                appId:pageUrl.appId,
                service: pageUrl.list.service,
                currentPage:1,
                perNum:12
            },
            tplFn: function (data) {
                var tpl = __inline('../tpl/proList.tpl'),
                    template = Handlebars.compile(tpl); // 特别注明该处模版编译方法调用方式因版本而异

                // 产品icon显示
                Handlebars.registerHelper("helper-icon", function () {
                    var htmlStr = '';

                    // 钱宝宝
                    if (this.brType == 3) {
                        return new Handlebars.SafeString('<div class="icon count-money"></div>');
                    }

                    // 预售中
                    if (this.productStatus == 0) {

                        htmlStr += '<div class="icon progressbar" style="background-image: url(\'image\/pro-list-progressbar\/0.png\')">';
                        htmlStr += '<div class="prepare">';
                        htmlStr += '<div class="tits">'+this.preSaleTimeDes.split('_')[0]+'</div>';
                        htmlStr += '<div class="conts">'+this.preSaleTimeDes.split('_')[1]+'</div>';
                        htmlStr += '</div>';
                        htmlStr += '</div>';
                        return new Handlebars.SafeString(htmlStr);
                    }

                    // 申购中
                    if (this.productStatus == 1) {
                        var rate = parseInt(this.accountYes / this.account*100);

                        htmlStr += '<div class="icon progressbar" style="background-image: url(\'image/pro-list-progressbar/' + rate + '.png\')">';
                        htmlStr += '<div class="progress">' + rate + '<small>%</small></div>';
                        htmlStr += '</div>';
                        return new Handlebars.SafeString(htmlStr);
                    }

                    // 已售完
                    if (this.productStatus == 2) {
                        var rate = parseInt(this.accountYes / this.account*100);

                        htmlStr += '<div class="icon progressbar" style="background-image: url(\'image/pro-list-progressbar\/100.png\')">';
                        htmlStr += '<div class="progress">100<small>%</small></div>';
                        htmlStr += '</div>';
                        return new Handlebars.SafeString(htmlStr);
                    }
                    htmlStr += '<div class="icon-con">';
                    htmlStr += '<div class="icon progressbar" style="background-image: url(\'image\/pro-list-progressbar\/101.png\')">';
                    htmlStr += '<div class="end">抢光</div>';
                    htmlStr += '</div>';
                    htmlStr += '</div>';

                    return new Handlebars.SafeString(htmlStr);
                });

                // 产品标签
                Handlebars.registerHelper("helper-proMark",function(){
                    if(this.brType==3){
                        return new Handlebars.SafeString('<span>火爆</span><i class="icon icon-pro-mark red"></i>');
                    }
                    if(this.status==10){
                        return new Handlebars.SafeString('<span>预售</span><i class="icon icon-pro-mark orange"></i>');
                    }
                    if(this.isNewHand==1){
                        return new Handlebars.SafeString('<span>新手</span><i class="icon icon-pro-mark green"></i>');
                    }
                });

                return template(data.resultData);
            },   // 传入data解析成html函数
            callback: null   // 载入完成后的回调函数(缺省)(用于绑定事件，注意尽量事件委托，并注意先off，免得重复绑定)
        });

        //--------------------------------------------------【暴露接口内存回收】
        return function () {

        }
    };
});