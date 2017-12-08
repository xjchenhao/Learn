/**
 * 钱庄网
 * @name 申购流程
 * @description Mobilebone页面路由
 * @date 2015-07-28
 */
'use strict';

define(function (require, exports, module) {

    require('zepto');
    var base = require('module/base'),
        Mobilebone = require('mobilebone'),
        pageUrl = require('module/ajax-map'),
        Handlebars = require('module/handlebars-helper'),
        cookie = require('module/cookie'),
        hrefParameter = require('module/href-parameter');

    Mobilebone.classAnimation = "fade";
    Mobilebone.rootTransition = {
        proBuyInto: function proBuyInto(pageInto, pageOut, callback) {
            var tpl = __inline('../tpl/pageBuy.tpl');
            var myTemplate = Handlebars.compile(tpl);

            base.ajax({
                url: pageUrl.prepare.url,
                type: "post",
                data: {
                    appId: pageUrl.appId,
                    service: pageUrl.prepare.service,
                    oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                    borrowId: hrefParameter.get('borrowId')
                },
                dataType: "json",
                async: false,
                success: function success(data) {
                    $(pageInto).html(myTemplate(data.resultData));
                }
            });

            Mobilebone.INTO = require('page/buyAffirm');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        proBuyOut: function proBuyOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        buyResultInto: function buyResultInto(pageInto, pageOut, callback) {
            var tpl = __inline('../tpl/pageBuyResult.tpl');
            var myTemplate = Handlebars.compile(tpl);

            $(pageInto).addClass('ui-load-bg');
            var searchCount = 0,
                searchResult = function searchResult() {
                //递归做查询
                base.ajax({
                    url: pageUrl.tenderResult.url,
                    type: "post",
                    data: {
                        appId: pageUrl.appId,
                        service: pageUrl.tenderResult.service,
                        oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                        orderNo: hrefParameter.get('orderNo')
                    },
                    dataType: "json",
                    async: false,
                    success: function success(data) {
                        if (data.resultCode == 2) {
                            if (searchCount < 2 && hrefParameter.get('orderNo')) {
                                searchCount++;
                                setTimeout(searchResult, 3000);
                                return false;
                            }
                        }

                        $(pageInto).removeClass('ui-load-bg');
                        $(pageInto).html(myTemplate(data.resultData));
                    }
                });
            };

            searchResult();

            Mobilebone.INTO = require('page/buyResult');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        buyResultOut: function buyResultOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        }
    };
    Mobilebone.init();
});

//# sourceMappingURL=routeBuy-compiled.js.map