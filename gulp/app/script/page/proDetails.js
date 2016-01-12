/**
 * 手机钱庄
 * @name 产品详情页
 * @description 单页js
 * @date 2015-07-16
 */
define(function (require, exports, module) {

    require('zepto');
    require('module/handlebars-helper');
    var base = require('module/base'),
        pageUrl = require('module/ajax-map'),
        Dialog = require('module/dialog'),
        Mobilebone = require('mobilebone'),
        oneSession = require('module/one-session');

    module.exports = function () {
        var popAlert = new Dialog('alert');
//--------------------------------------------------【申购按钮各种状态绑定不同的行为】
        // 添加session做页面返回的重定向
        $('#realNameBtn,#forgetTransPasswordBtn').on('click', function () {
            oneSession.set('redirectURL', location.href);
        });
        $('#newHandBuyBtn').on('click', function () {
            popAlert.run('该产品仅限新手投资');
        });
//--------------------------------------------------【计算收益】
        $('#amount,#days').on('input blur', function () {
            var _this = $(this),
                totalAmount = Number($("#totalAmount").val()),
                totalDays = Number($("#totalDays").val()),
                val = _this.val().replace(/\D+/g, "");
            var amount = Number($("#amount").val()),
                days = Number($('#days').val());
            _this.val(val);
            if (amount > totalAmount) {
                amount = totalAmount;
                _this.val(amount);
            }
            if ($('#days')[0]) {
                if (days > totalDays) {
                    days = totalDays;
                    _this.val(days);
                }
                clacProfit(amount, days);
            } else {
                clacProfit(amount);
            }
            $('#bankIncome').html(($('#clacProfit').html() / $('#multiple').html()).toFixed(2));
        });
        if ($('#days')[0]) {
            clacProfit($("#amount").val(), $("#days").val())
        } else {
            clacProfit($("#amount").val())
        }
        $('#bankIncome').html(($('#clacProfit').html() / $('#multiple').html()).toFixed(2));
        function clacProfit(amount, days) {
            var apr = Number($('#apr').val()),
                interestDay = Number($('#interest_day').val()),
                profit = 0;
            if (!amount) {
                amount = Number($("#totalAmount2").val());
            }
            if (!days) {
                days = Number($("#totalDays").val());
            }
            if (arguments.length === 2) {

                //金额 * 年化率 * (day-1) / 36500
                profit = (amount * apr * (days - 1) / 36500).toFixed(2);
            } else {

                //金额 * 年化率  / 36500*计息天数
                profit = (amount * apr / 36500 * interestDay).toFixed(2);
            }
            $('#clacProfit').html(profit);
        }

        //--------------------------------------------------【未登录，弹窗登录】
        var loginBtn = $('#loginBtn');
        var pageLoginCheck = $('#pageLoginCheck');
        var pageProDetails = $('#pageProDetails');
        loginBtn.on('click', function () {
            Mobilebone.transition(pageLoginCheck[0], pageProDetails[0], {
                history: false
            });
            require('page/proLoginCheck');
        });
        $('.goback').on('click', function () {
            var $this = $(this);
            var fromPage = $this.attr('data-from');
            var backPage = $this.attr('data-backpage');
            Mobilebone.transition($('#' + backPage)[0], $('#' + fromPage)[0], {
                history: false
            });
        });
        //--------------------------------------------------【暴露接口内存回收】
        return function () {

        }
    };
});