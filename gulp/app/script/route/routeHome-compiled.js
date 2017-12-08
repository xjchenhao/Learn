/**
 * 钱庄网
 * @name 主页
 * @description Mobilebone页面路由
 * @date 2015-07-16
 * @version $V1.0$
 */
'use strict';

define(function (require, exports, module) {

    require('zepto');
    require('module/handlebars-helper');
    var base = require('module/base'),
        Mobilebone = require('mobilebone'),
        pageUrl = require('module/ajax-map'),
        cookie = require('module/cookie'),
        Dialog = require('module/dialog'),
        Handlebars = require('module/handlebars-helper');

    //--------------------------------------------------【转场nav样式选中】
    Mobilebone.callback = function (page_in, page_out) {
        var id_in = page_in.id,
            id_out = "";
        var ele_link_in = null,
            ele_link_out = null;

        if (ele_link_in = document.querySelector("#homeNavbar a[href$=" + id_in + "]")) {
            //ele_link_in.parentElement.classList.add("on");
            $(ele_link_in).parent().addClass('on').siblings().removeClass('on');
        }
        //if (page_out) {
        //    id_out = page_out.id;
        //    ele_link_out = id_out && document.querySelector("#homeNavbar a[href$=" + id_out + "]");
        //    //ele_link_out && ele_link_out.parentElement.classList.remove("on");
        //    $(ele_link_out).parent().removeClass('on');
        //}
    };
    Mobilebone.mergeCallback = true;

    var popAlert = new Dialog('alert');
    //--------------------------------------------------【路由】
    Mobilebone.classAnimation = "fade";
    Mobilebone.rootTransition = {
        homeInto: function homeInto(pageInto, pageOut, callback) {
            base.ajax({
                url: pageUrl.home.url,
                type: "post",
                data: {
                    oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                    appId: pageUrl.appId,
                    service: pageUrl.home.service
                },
                dataType: "json",
                async: false,
                success: function success(data) {
                    if (data.resultCode !== 1) {
                        popAlert.run(data.resultMsg);
                        return false;
                    }

                    // 进度条状态值
                    Handlebars.registerHelper("helper-progressbar", function () {
                        if (this.brType == 3) {
                            return 100;
                        }
                        return parseInt(this.accountYes / this.account * 100);
                    });

                    // 产品标签
                    Handlebars.registerHelper("helper-proMark", function () {
                        if (this.brType == 3) {
                            return new Handlebars.SafeString('<span>火爆</span><i class="icon icon-pro-mark red"></i>');
                        }
                        if (this.status == 10) {
                            return new Handlebars.SafeString('<span>预售</span><i class="icon icon-pro-mark orange"></i>');
                        }
                        if (this.isNewHand == 1) {
                            return new Handlebars.SafeString('<span>新手</span><i class="icon icon-pro-mark green"></i>');
                        }
                    });

                    var tpl = __inline('../tpl/pageHome.tpl');
                    var myTemplate = Handlebars.compile(tpl);
                    $(pageInto).html(myTemplate(data.resultData));
                },
                timeout: 10000,
                error: function error() {
                    popAlert.run('请求超时请重新再试');
                }
            });

            Mobilebone.INTO = require('page/home');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        homeOut: function homeOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },

        listInto: function listInto(pageInto, pageOut, callback) {

            var tpl = __inline('../tpl/pageProList.tpl');
            var myTemplate = Handlebars.compile(tpl);
            $(pageInto).html(myTemplate());

            Mobilebone.INTO = require('page/proList');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        listOut: function listOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },

        userInto: function userInto(pageInto, pageOut, callback) {

            $.ajax({
                url: pageUrl.getUserInfoStatus.url,
                type: "post",
                data: {
                    oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                    appId: pageUrl.appId,
                    service: pageUrl.getUserInfoStatus.service
                },
                dataType: "json",
                async: false,
                xhrFields: {
                    withCredentials: true
                },
                success: function success(data) {
                    if (data.resultCode) {
                        base.ajax({
                            url: pageUrl.myAccount.url,
                            type: "post",
                            data: {
                                oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                                appId: pageUrl.appId,
                                service: pageUrl.myAccount.service
                            },
                            dataType: "json",
                            async: false,
                            success: function success(data) {
                                var tpl = __inline('../tpl/pageUser.tpl');
                                var myTemplate = Handlebars.compile(tpl);
                                $(pageInto).html(myTemplate(data.resultData));
                            }
                        });
                    } else {
                        location.replace('login.html');
                    }
                }
            });

            Mobilebone.INTO = require('page/userHome');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        userOut: function userOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },

        moreInto: function moreInto(pageInto, pageOut, callback) {

            var tpl = __inline('../tpl/pageMore.tpl');
            var myTemplate = Handlebars.compile(tpl);

            $.ajax({
                url: pageUrl.getUserInfoStatus.url,
                type: "post",
                data: {
                    oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                    appId: pageUrl.appId,
                    service: pageUrl.getUserInfoStatus.service
                },
                dataType: "json",
                async: false,
                xhrFields: {
                    withCredentials: true
                },
                success: function success(data) {
                    if (data.resultCode) {
                        $(pageInto).html(myTemplate(data.resultData));
                    } else {
                        $(pageInto).html(myTemplate(''));
                    }
                }
            });

            Mobilebone.INTO = require('page/moreHome');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        moreOut: function moreOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        }
    };
    //Mobilebone.init();
});

//# sourceMappingURL=routeHome-compiled.js.map