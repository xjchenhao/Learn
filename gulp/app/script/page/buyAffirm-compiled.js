/**
 * 手机钱庄
 * @name 申购确认页
 * @description 单页js
 * @date 2015-07-30
 */
'use strict';

define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        base = require('module/base'),
        Dialog = require('module/dialog'),
        cookie = require('module/cookie'),
        hrefParameter = require('module/href-parameter'),
        oneSession = require('module/one-session'),
        SubmitIng = require('module/submit-ing'),
        ActivateBtn = require('module/activate-btn');

    module.exports = function () {
        var $pageProBuy = $('#pageProBuy');
        var popAlert = new Dialog('alert');
        //--------------------------------------------------【按钮激活】
        var activateBtn = new ActivateBtn({
            contain: $pageProBuy[0]
        });
        //--------------------------------------------------【申购数据联动】
        var $buyAmount = $('#buyAmount'),
            $earnings = $('#earnings'),
            $envelopeBtn = $('#envelopeBtn'),
            $envelopeList = $('#envelopeList'),
            $investAmount = $('#investAmount'),
            $bankBuy = $('#bankBuy'),
            lowestAccountVal = Number($('#lowestAccount').val()),
            //最小投资额
        importAmount = 0,
            // 输入的金额
        redPacketTotal = 0,
            //勾选红包总和
        redPacketLimit = 0,
            //最大可选红包金额
        redPacketIdArr = [],
            //红包id列表
        tenderDayVal = $('#tenderDay').val(),
            // 实际投资天数
        balanceVal = parseInt($('#balance').html()),
            // 账户可用余额
        aprVal = Number($('#normalApr').val()) + Number($('#extraAwardApr').val()),
            // 最终年化收益
        mostAccount = Number($('#mostAccount').val()),
            // 最大投资金额
        buyAmount = 0,
            // 余额支付金额
        bankBuyAmount = 0,
            // 银行卡支付

        // 计算实际需支付金额
        buyAmountFunc = function buyAmountFunc() {
            if (importAmount <= balanceVal + redPacketTotal) {
                buyAmount = importAmount - redPacketTotal;
                $buyAmount.html(buyAmount);
                $bankBuy.html(0);
            } else {
                buyAmount = balanceVal;
                bankBuyAmount = importAmount - balanceVal - redPacketTotal;
                $buyAmount.html(buyAmount);
                $bankBuy.html(bankBuyAmount.toFixed(2));
            }
        };

        // 显示红包列表
        $envelopeBtn.one('click', function () {
            $envelopeList.removeClass('js_hide');
            $envelopeBtn.find('.conts').addClass('font-color-red').html('已选择0元');
        });

        // 勾选红包
        $envelopeList.find('input').on('change', function () {
            var $this = $(this);

            // 如果未输入投资金额,提示
            if (!$investAmount.val()) {
                $this[0].checked = false;
                redPacketTotal -= $this.data('amount');
                popAlert.run('请输入投资金额');
                return false;
            }

            // 产品可投金额小于最小投资额时(即将满标状态)不可使用红包
            if (mostAccount < lowestAccountVal) {
                popAlert.run('本次最多可用0元红包');
            }

            // 根据是否勾选计算红包总和
            if ($this[0].checked) {
                redPacketTotal += $this.data('amount');
                // 存入红包id
                redPacketIdArr.push($this.val());
            } else {
                redPacketTotal -= $this.data('amount');
                redPacketIdArr.forEach(function (val, index) {
                    if (val == $this.val()) {
                        redPacketIdArr.splice(index, 1);
                    }
                });
            }

            // 超过最大可选红包金额时取消勾选,并提示
            if (redPacketTotal > redPacketLimit) {
                $this[0].checked = false;
                redPacketTotal -= $this.data('amount');
                redPacketIdArr.pop();
                popAlert.run('本次最多可用' + redPacketLimit + '元红包');
            }

            // 已选择红包金额显示
            $envelopeBtn.find('.conts').html('已选择' + redPacketTotal + '元');

            buyAmountFunc();
        });

        // 预估收益计算
        $investAmount.on('input', function () {
            var $this = $(this);

            importAmount = Number($this.val().replace(/\D/g, ''));

            // 重置红包列表
            $envelopeBtn.find('input').each(function () {
                this.checked = false;
            });

            if (!$envelopeList.hasClass('js_hide')) {
                $envelopeBtn.find('.conts').html('已选择0元');
            }
            redPacketIdArr.length = 0;

            // 重置勾选的红包总计
            redPacketTotal = 0;

            // 禁止输入非数字
            $this.val(importAmount);

            // 超过最大投资金额,则替换成最大投资金额
            if (importAmount > mostAccount) {
                importAmount = mostAccount;
                $this.val(mostAccount);
            }

            // 计算逾期收益
            $earnings.html((importAmount * aprVal * 0.01 / 365 * tenderDayVal).toFixed(2));

            // 最大可选红包金额
            redPacketLimit = parseInt(importAmount * 0.05);

            // 投资金额大于最低可投,显示红包可用大小
            if (mostAccount >= lowestAccountVal && importAmount >= lowestAccountVal) {
                $('#redPacketLimit').html('红包(本次可用' + parseInt(redPacketLimit) + '元)');
            } else {
                $('#redPacketLimit').html('红包(本次可用0元)');
            }

            // 重置红包列表
            $envelopeList.find('input').each(function () {
                this.checked = false;
            });

            buyAmountFunc();
        });

        // 需要一次性投资完的情况
        if ($investAmount.val()) {
            $investAmount.trigger('input');
        }
        //--------------------------------------------------【绑卡流程】
        var $bankCard = $('#bankCard');
        $('#bindBank').on('change', function () {
            var $this = $(this);
            $('#bankCardNo').val('');
            if ($this.val()) {
                $bankCard.removeClass('js_hide');
            } else {
                $bankCard.addClass('js_hide');
            }
        });
        $('#bankCardNo').on('input', function () {
            var $this = $(this);
            $this.val($this.val().replace(/\D/g, ''));
        });
        //--------------------------------------------------【表单提交】

        var popDealPassword = new Dialog('confirm'),
            htmlStr = '';

        // 防重复提交
        var submitIng = new SubmitIng({
            elmBtn: $pageProBuy.find('.js-submit')[0]
        });

        $pageProBuy.find('.js-submit').on('click', function () {
            var dealPasswordVal = '',
                // 获取交易密码
            bankCardNoVal = $('#bankCardNo').val(),
                // 获取银行卡卡号
            buyType = $bankBuy.html() == '0' ? 0 : 1,
                // 根据dom上的余额标签显示判断支付类别,0为余额支付,1为跳转连连支付
            isBindBank = $('#hiddenCardNo').html() ? 1 : 0; //根据dom上的是否有银行卡尾号标签,判断是否绑定银行卡

            // 提交中则跳出
            if (submitIng.state) {
                return false;
            } else {
                submitIng.start('支付中...');
            }

            if (mostAccount > lowestAccountVal) {
                if (lowestAccountVal > importAmount) {
                    popAlert.run('投资金额不能少于起投金额');
                    submitIng.end();
                    return false;
                }
            }

            htmlStr = '<div class="ui-pop-cont-deal-password"><input id="dealPassword" class="ui-input-text" type="password" /><a class="font-color-gray-neutral" href="forgetTransPassword.html" data-ajax="false">忘记</a></div>';
            popDealPassword.run({
                titStr: '请输入交易密码',
                contStr: htmlStr,
                confirmFunc: function confirmFunc() {
                    dealPasswordVal = $('#dealPassword').val();
                    if (!dealPasswordVal) {
                        popAlert.run('请输入交易密码');
                        submitIng.end();
                        return false;
                    }
                    if (!buyType) {
                        base.ajax({
                            type: "post",
                            url: pageUrl.tender.url,
                            async: true,
                            dataType: "json",
                            data: {
                                appId: pageUrl.appId,
                                borrowId: hrefParameter.get('borrowId'),
                                money: importAmount,
                                oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                                payPwd: base.encryptedPwd(dealPasswordVal),
                                redpacketIds: redPacketIdArr.join(','),
                                service: pageUrl.tender.service,
                                useMoney: buyAmount
                            },
                            success: function success(data) {
                                location.href = hrefParameter.create(location.href.split('#')[0]).set('orderNo', data.resultData.orderNo) + '#&pageBuyResult';
                            },
                            beforeFunc: function beforeFunc() {
                                submitIng.end();
                            }
                        });
                    } else {
                        if (!isBindBank) {
                            base.ajax({
                                type: "post",
                                url: pageUrl.addBankCard.url,
                                async: true,
                                dataType: "json",
                                data: {
                                    appId: pageUrl.appId,
                                    service: pageUrl.addBankCard.service,
                                    bankCardNo: base.encryptedPwd(bankCardNoVal),
                                    oauthToken: cookie.getCookie('qz_h5_oauthToken')
                                },
                                success: function success(data) {
                                    if (data.resultCode == 1) {
                                        checkTenderForCard(dealPasswordVal, base.encryptedPwd(bankCardNoVal));
                                    }
                                },
                                beforeFunc: function beforeFunc() {
                                    submitIng.end();
                                }
                            });
                            return false;
                        }
                        checkTenderForCard(dealPasswordVal, base.encryptedPwd(bankCardNoVal));
                    }
                },
                cancelFunc: function cancelFunc() {
                    // 取消回调
                    submitIng.end();
                },
                callback: function callback() {
                    // 添加session做页面返回的重定向
                    $('#uiPopFrame .ui-pop-cont-deal-password a').on('click', function () {
                        oneSession.set('redirectURL', location.href);
                    });

                    // 交易密码输入框获得焦点
                    $('#dealPassword').focus();
                }
            });
        });
        function checkTenderForCard(dealPasswordVal, bankCardNoVal) {
            base.ajax({
                type: "post",
                url: pageUrl.checkTenderForCard.url,
                async: true,
                dataType: "json",
                data: {
                    appId: pageUrl.appId,
                    bankCardNo: bankCardNoVal,
                    bankMoney: bankBuyAmount,
                    borrowId: hrefParameter.get('borrowId'),
                    money: importAmount,
                    oauthToken: cookie.getCookie('qz_h5_oauthToken'),
                    payPwd: base.encryptedPwd(dealPasswordVal),
                    redpacketIds: redPacketIdArr.join(','),
                    service: pageUrl.checkTenderForCard.service,
                    useMoney: buyAmount
                },
                success: function success(data) {
                    var newData = $.extend(this.data, {
                        service: pageUrl.tenderForCard.service
                    });

                    location.href = pageUrl.tenderForCard.url + '?' + $.param(newData);
                },
                beforeFunc: function beforeFunc() {
                    submitIng.end();
                }
            });
        }

        //--------------------------------------------------【暴露接口内存回收】
        return function () {

            $envelopeBtn.off('click');
            $envelopeList.find('input').off('change');
            $investAmount.off('input');
            $('#bindBank').off('change');
            $pageProBuy.find('.js-submit').off('click');

            popAlert.destroy();
            activateBtn.destroy();
            popDealPassword.destroy();
            submitIng.destroy();
        };
    };
});

//# sourceMappingURL=buyAffirm-compiled.js.map