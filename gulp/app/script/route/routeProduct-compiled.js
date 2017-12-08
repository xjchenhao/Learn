/**
 * 钱庄网
 * @name 产品详情
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
        hrefParameter = require('module/href-parameter'),
        oneSession = require('module/one-session'),
        dateFormat = require('module/date-format');

    Mobilebone.classAnimation = "fade";
    Mobilebone.rootTransition = {
        proDetailsInto: function proDetailsInto(pageInto, pageOut, callback) {
            base.ajax({
                url: pageUrl.detail.url,
                type: "post",
                data: {
                    borrowId: hrefParameter.get('borrowId'),
                    appId: pageUrl.appId,
                    service: pageUrl.detail.service
                },
                dataType: "json",
                async: false,
                success: function success(data) {
                    var tpl = '';
                    if (data.resultData.product.brType == 3) {
                        tpl = __inline('../tpl/pageProDetailsBm.tpl');
                    } else {
                        tpl = __inline('../tpl/pageProDetails.tpl');
                    }
                    var myTemplate = Handlebars.compile(tpl);

                    // 产品信息
                    Handlebars.registerHelper("helper-proInfo", function () {
                        var htmlStr = '';
                        switch (this.status) {
                            case 1:
                                htmlStr += '<div class="f_l">总金额 <b>' + this.account + '</b>元</div>';
                                htmlStr += '<div class="f_r">剩余可投 <b class="font-color-red">' + (this.account - this.accountYes) + '</b>元</div>';
                                break;
                            case 6:
                            case 7:
                                htmlStr += '已还款：项目已还款，到期还款日 ' + dateFormat.format(this.lastRepayTime, "yyyy-MM-dd");
                                break;
                            case 8:
                                htmlStr += '项目还款中,到期还款日 ' + dateFormat.format(this.lastRepayTime, "yyyy-MM-dd");
                                break;
                            case 10:
                                htmlStr += '<div class="f_l">总金额 <b>' + this.account + '</b>元</div>';
                                htmlStr += '<div class="f_r">开售时间 <b>' + this.preSaleTimeDes + '</b></div>';
                                break;
                            default:
                                break;
                        }
                        return new Handlebars.SafeString(htmlStr);
                    });

                    // 进度条状态值
                    Handlebars.registerHelper("helper-progressbar", function () {

                        // 投资中
                        if (this.status == 1) {
                            return parseInt(this.accountYes / this.account * 100);
                        }
                        // 预售
                        if (this.status == 10) {
                            return 0;
                        }
                        // 其它状态
                        return 100;
                    });

                    // 限投
                    Handlebars.registerHelper("helper-limit", function () {
                        var htmlStr = '';
                        if (this.brType == 1) {
                            // 新手标
                            htmlStr += '<li>只限新手投资';
                            if (this.mostAccount > 0) {
                                htmlStr += ',单人限投 :' + this.mostAccount;
                            }
                            if (this.perDealMost > 0) {
                                htmlStr += ',单笔限投 :' + this.perDealMost;
                            }

                            htmlStr += '<i class="iconfont orange">&#xe630;</i></li>';
                        } else if (this.brType == 2) {
                            // 普通标
                            if (this.mostAccount > 0) {
                                htmlStr += '<li>单人限投 :' + this.mostAccount + '<i class="iconfont orange">&#xe630;</i></li>';
                            }
                            if (this.perDealMost > 0) {
                                htmlStr += '<li>单笔限投 :' + this.perDealMost + '<i class="iconfont orange">&#xe630;</i></li>';
                            }
                        }
                        return new Handlebars.SafeString(htmlStr);
                    });

                    // 与银行的利率对比
                    Handlebars.registerHelper("helper-pkBank", function () {
                        return parseInt(this.apr / 0.35);
                    });

                    // 申购按钮
                    Handlebars.registerHelper("helper-buyBtn", function () {
                        var dataThis = this,
                            htmlStr = '',
                            loginStatus = true,
                            //是否登录
                        realNameStatus = true,
                            //是否实名
                        transPwdStatus = true; //是否设置交易密码

                        // 如果是钱宝宝
                        if (this.brType == 3) {
                            htmlStr += '<a class="ui-btn red" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.qz.qian&ckey=CK1304356609522" data-ajax="false">去钱庄理财App投资</a>';
                            return new Handlebars.SafeString(htmlStr);
                        }

                        // 满足申购条件,显示按钮不同状态
                        switch (this.productStatus) {

                            // 预售
                            case 0:
                                htmlStr += '<a class="ui-btn gray" href="javascript:;" data-ajax="false"><i class="icon icon-nav-list"></i>' + this.preSaleTimeDes + '</a>';
                                break;

                            //// 申购
                            //case 1:
                            //    htmlStr += '<a class="ui-btn red" href="buy.html?borrowId=' + this.borrowId + '" data-ajax="false"><i class="icon icon-nav-list"></i>立即投资</a>';
                            //    break;

                            // 已售完
                            case 2:
                                htmlStr += '<a class="ui-btn gray" href="javascript:;" data-ajax="false"><i class="icon icon-tick-hollow"></i>已抢光</a>';
                                break;

                            // 还款中
                            case 3:
                                htmlStr += '<a class="ui-btn gray" href="javascript:;" data-ajax="false"><i class="icon icon-clock"></i>还款中</a>';
                                break;

                            // 已完结
                            case 4:
                                htmlStr += '<a class="ui-btn gray" href="javascript:;" data-ajax="false"><i class="icon icon-tick-hollow"></i>已还款</a>';
                                break;
                            default:
                                break;
                        }

                        if (this.productStatus === 0 || this.productStatus === 2 || this.productStatus === 3 || this.productStatus === 4) {
                            return new Handlebars.SafeString(htmlStr);
                        }

                        //判断用户状态显示按钮
                        $.ajax({
                            url: pageUrl.getUserInfoStatus.url,
                            type: "post",
                            data: {
                                oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                                appId: pageUrl.appId,
                                service: pageUrl.getUserInfoStatus.service
                            },
                            xhrFields: {
                                withCredentials: true
                            },
                            dataType: "json",
                            async: false,
                            success: function success(data) {
                                if (!data.resultCode) {
                                    htmlStr += '<a class="ui-btn red" id="loginBtn" href="javascript:;" data-ajax="false">请先登录</a>';
                                    loginStatus = false;
                                    return false;
                                }
                                if (!data.resultData.realNameStatus) {
                                    htmlStr += '<a class="ui-btn red" id="realNameBtn" href="realName.html" data-ajax="false">请先实名认证</a>';
                                    realNameStatus = false;
                                    return false;
                                }
                                if (!data.resultData.payPwdStatus) {
                                    htmlStr += '<a class="ui-btn red" id="forgetTransPasswordBtn" href="forgetTransPassword.html" data-ajax="false"><i class="icon icon-nav-list"></i>立即投资</a>';
                                    transPwdStatus = false;
                                    return false;
                                }
                                if (!data.resultData.newHandStatus) {
                                    if (dataThis.brType == 1) {
                                        htmlStr += '<a class="ui-btn red" id="newHandBuyBtn" href="javascript:;" data-ajax="false"><i class="icon icon-nav-list"></i>仅限新手投资</a>';
                                        transPwdStatus = false;
                                        return false;
                                    }
                                }
                                htmlStr += '<a class="ui-btn red" href="buy.html?borrowId=' + dataThis.borrowId + '" data-ajax="false"><i class="icon icon-nav-list"></i>立即投资</a>';
                            }
                        });

                        return new Handlebars.SafeString(htmlStr);
                    });

                    $(pageInto).html(myTemplate(data.resultData));
                }
            });

            Mobilebone.INTO = require('page/proDetails');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        proDetailsOut: function proDetailsOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        proRepaymentExplainInto: function proRepaymentExplainInto(pageInto, pageOut, callback) {
            var tpl = __inline('../tpl/pageProRepaymentExplain.tpl');
            var myTemplate = Handlebars.compile(tpl);

            base.ajax({
                url: pageUrl.repaymentExplain.url,
                type: "post",
                data: {
                    appId: pageUrl.appId,
                    service: pageUrl.repaymentExplain.service,
                    borrowId: hrefParameter.get('borrowId')
                },
                dataType: "json",
                async: false,
                success: function success(data) {
                    $(pageInto).html(myTemplate(data.resultData));
                }
            });

            Mobilebone.INTO = require('page/proRepaymentExplain');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        proRepaymentExplainOut: function proRepaymentExplainOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        porRewardInto: function porRewardInto(pageInto, pageOut, callback) {
            var tpl = __inline('../tpl/porReward.tpl');
            var myTemplate = Handlebars.compile(tpl);
            $(pageInto).html(myTemplate(null));

            Mobilebone.INTO = require('page/proReward');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        porRewardOut: function porRewardOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        proInvestRecordInto: function proInvestRecordInto(pageInto, pageOut, callback) {
            var tpl = __inline('../tpl/pageProInvestRecord.tpl');
            var myTemplate = Handlebars.compile(tpl);
            $(pageInto).html(myTemplate(null));

            Mobilebone.INTO = require('page/proInvestRecord');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        proInvestRecordOut: function proInvestRecordOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        proMoreInfoInto: function proMoreInfoInto(pageInto, pageOut, callback) {
            base.ajax({
                url: pageUrl.projectDetail.url,
                type: "post",
                data: {
                    appId: pageUrl.appId,
                    service: pageUrl.projectDetail.service,
                    borrowId: hrefParameter.get('borrowId')
                },
                dataType: "json",
                async: false,
                success: function success(data) {
                    var tpl = __inline('../tpl/pageProMoreInfo.tpl');
                    var myTemplate = Handlebars.compile(tpl);

                    // 认证状态
                    Handlebars.registerHelper("helper-identifyState", function (val) {
                        if (this.certification[val] === "1") {
                            return new Handlebars.SafeString('<i class="icon icon-tick-solid"></i>');
                        } else {
                            return new Handlebars.SafeString('<i class="icon icon-cross-hollow"></i>');
                        }
                    });

                    $(pageInto).html(myTemplate(data.resultData));
                }
            });

            Mobilebone.INTO = require('page/proMoreInfo');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        proMoreInfoOut: function proMoreInfoOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        proPageSignInto: function proPageSignInto(pageInto, pageOut, callback) {
            // 执行注册页面的js逻辑

            var userPhone = oneSession.get('userPhone');

            // 赋值到注册页的手机显示
            $('#pageSignIn').find('.js-userPhone').val(userPhone);

            $('#pageSignIn').find('.js-phone').html(userPhone.substring(0, 3) + "****" + userPhone.substring(7, 11));
            $('#verifyCode,#setPassword').val('');
            Mobilebone.INTO = require('page/proSignIn');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        proPageSignOut: function proPageSignOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        proPageLoginInto: function proPageLoginInto(pageInto, pageOut, callback) {
            // 执行登录页面的js逻辑
            var userPhone = oneSession.get('userPhone');

            // 赋值到注册页的手机显示
            $('#pageLogin').find('.js-userPhone').val(userPhone);
            $('#loginPassword').val('');
            Mobilebone.INTO = require('page/proLogin');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        proPageLoginOut: function proPageLoginOut(pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        }

    };
    Mobilebone.init();
});

//# sourceMappingURL=routeProduct-compiled.js.map