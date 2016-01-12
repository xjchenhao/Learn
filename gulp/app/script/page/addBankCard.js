/**
 * 手机钱庄
 * @name 绑定银行卡
 * @description 单页js
 * @date 2015-08-12
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base = require('module/base'),
        cookie = require('module/cookie'),
        Mobilebone = require('mobilebone'),
        activeBtn = require('module/activate-btn'),
        hrefParameter = require('module/href-parameter'),
        oneSession = require('module/one-session'),
        Handlebars = require('module/handlebars-helper');

    //单页js
    //module.exports = function () {
    //--------------------------------------------------【绑定银行卡 绑定表单页面 场景切换】
    base.ajax({
        url: pageUrl.getUserInfoStatus.url,
        type: "post",
        data: {
            oauthToken: cookie.getCookie('qz_h5_oauthToken'),
            appId: pageUrl.appId,
            service: pageUrl.getUserInfoStatus.service
        },
        dataType: "json",
        async: false,
        success: function (data) {
            var bankCardStatus = data.resultData.bankCardStatus;
            var realNameStatus = data.resultData.realNameStatus;
            if (bankCardStatus == 1) {//判断是否绑定过银行卡 绑定过跳转我的银行卡页
                window.location.replace('myBankCard.html');
                return false;
            } else if (realNameStatus == 0) {//判断是否实名认证 未认证 链接绑定链接跳转认证页面
                $('.add-card-link').attr({
                    'href': 'realName.html',
                    'data-link': 'true'
                }).on('click', function () {
                    oneSession.set('redirectURL', 'index.html#&pageUser');
                });
            }
        }
    });

    var pageAddBankCard = $('#pageAddBankCard');
    var pageAddBankCardForm = $('#pageAddBankCardForm');
    pageAddBankCard.find('.add-card-link').on('click', routeAddBankCardForm);
    function routeAddBankCardForm() {

        if (eval($(this).attr('data-link')) !== true) {
            Mobilebone.transition(pageAddBankCardForm[0], pageAddBankCard[0], {
                history: false
            });
        }

    }

    //--------------------------------------------------【表单按钮状态 和 提交跳转】
    var activebtn = new activeBtn();

    var bandCard = pageAddBankCardForm.find('.js-bandCard');
    var defBandCardNum = '';
    var bandCardReg = /^\d+$/;
    var isLock = false;
    bandCard.on('input', checkInput);
    function checkInput() {
        var $this = $(this);
        var _val = $this.val();
        if (bandCardReg.test(_val)) {
            defBandCardNum = _val;
        } else if (_val == '') {
            defBandCardNum = '';
        } else {
            $this.val(defBandCardNum);
        }
    }

    pageAddBankCardForm.find('.js-submit').on('click', addBank);
    function addBank() {
        if (isLock) {
            return;
        }
        isLock = true;
        $(this).addClass('disabled').prop('disabled', true);

        var bandCardNum = bandCard.val();
        if (!bandCardNum) {
            return;
        }
        var encPwdBandCardNum = base.encryptedPwd(bandCardNum);
        base.ajax({
            url: pageUrl.addBankCard.url,
            type: "post",
            data: {
                appId: pageUrl.appId,
                service: pageUrl.addBankCard.service,
                oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                bankCardNo: encPwdBandCardNum
            },
            dataType: "json",
            async: false,
            success: function (data) {
                var pennyUrl = pageUrl.pennyBindingCard.url;
                pennyUrl += '?appId=' + pageUrl.appId;
                pennyUrl += '&bankCardNo=' + encPwdBandCardNum;
                pennyUrl += '&oauthToken=' + cookie.getCookie('qz_h5_oauthToken');
                pennyUrl += '&service=' + pageUrl.pennyBindingCard.service;
                window.location.replace(pennyUrl);
            },
            beforeFunc: function () {
                isLock = false;
                $(this).removeClass('disabled').prop('disabled', false);
            }
        });
    }

    Mobilebone.classAnimation = "fade";
    Mobilebone.init();
    //--------------------------------------------------【暴露接口内存回收】
    //return function () {
    //    pageAddBankCard.find('.add-card-link').off('click', routeAddBankCardForm);
    //    bandCard.off('input', checkInput);
    //    pageAddBankCardForm.find('.js-submit').off('click', addBank);
    //};
    //};
});
