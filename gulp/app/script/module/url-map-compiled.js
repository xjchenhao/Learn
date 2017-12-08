/**
 * 钱庄网
 * @name 基础js
 * @description url映射表
 * @date 2015-07-28
 */
'use strict';

define(function (require, exports, module) {
    var apiUrl = 'http://wap.qian360.com:8080';
    return {
        //--------------------------------------------------【首页】

        //首页模板数据
        home: {
            url: apiUrl + '/wap/common/home.html',
            service: 'home'
        },

        //--------------------------------------------------【用户模块-帐户和密码】

        // 验证手机号是否注册
        phoneCheck: {
            url: apiUrl + '/wap/user/phoneCheck.html',
            service: 'phoneCheck'
        },
        // 用户登录
        login: {
            url: apiUrl + '/wap/user/login.html',
            service: 'login'
        },
        // 注册用户时发送短信验证码
        validCode: {
            url: apiUrl + '/wap/user/validCode.html',
            service: 'regPhoneCode'
        },
        // 注册用户时发送语音验证码
        regVoiceCode: {
            url: apiUrl + '/wap/user/validCode.html',
            service: 'regVoiceCode'
        },

        // 忘记密码时发送验证码
        forgetPwdGetValCode: {
            url: apiUrl + '/wap/user/validCode.html',
            service: 'forgetPwdGetValCode'
        },
        // 用户注册
        register: {
            url: apiUrl + '/wap/user/register.html',
            service: 'register'
        },
        // 用户状态
        getUserInfoStatus: {
            url: apiUrl + '/wap/user/getUserInfoStatus.html',
            service: 'getUserInfoStatus'
        },

        // 找回密码
        resetLoginPwd: {
            url: apiUrl + '/wap/user/resetLoginPwd.html',
            service: 'resetLoginPwd'
        },

        // 实名认证
        certification: {
            url: apiUrl + '/wap/user/certification.html',
            service: 'certification'
        },

        // 修改登录密码
        modifyLoginPwd: {
            url: apiUrl + '/wap/user/modifyLoginPwd.html',
            service: 'modifyLoginPwd'
        },

        // 修改支付密码
        modifyPayPwd: {
            url: apiUrl + '/wap/user/modifyPayPwd.html',
            service: 'modifyPayPwd'
        },

        // 找回支付密码
        resetPayPwd: {
            url: apiUrl + '/wap/user/resetPayPwd.html',
            service: 'resetPayPwd'
        },

        //--------------------------------------------------【用户模块-个人中心】

        //我的钱庄
        myAccount: {
            url: apiUrl + '/wap/account/myAccount.html',
            service: 'myAccount'
        },

        //回款记录
        returnRecord: {
            url: apiUrl + '/wap/account/returnRecord.html',
            service: 'returnRecord'
        },
        //投资详情
        myTenderRecordDetail: {
            url: apiUrl + '/wap/account/myTenderRecordDetail.html',
            service: 'myTenderRecordDetail'
        },
        //投资列表
        getHistoryTender: {
            url: apiUrl + '/wap/account/getHistoryTender.html',
            service: 'getHistoryTender'
        },
        //投资列表钱宝宝
        getBmHistoryRecord: {
            url: apiUrl + '/wap/account/getBmHistoryRecord.html',
            service: 'getBmHistoryRecord'
        },
        //账户余额
        accountBalance: {
            url: apiUrl + '/wap/account/accountBalance.html',
            service: 'accountBalance'
        },
        //红包
        redPacket: {
            url: apiUrl + '/wap/account/redPacket.html',
            service: 'redPacket'
        },
        //现金奖励
        cashAwardRecord: {
            url: apiUrl + '/wap/account/cashAwardRecord.html',
            service: 'cashAwardRecord'
        },
        //在投资金
        tendering: {
            url: apiUrl + '/wap/account/tendering.html',
            service: 'tendering'
        },
        //钱宝宝转出
        bmOut: {
            url: apiUrl + '/wap/account/bmOut.html',
            service: 'bmOut'
        },
        //钱宝宝转出结果
        bmOutResult: {
            url: apiUrl + '/wap/account/bmOutResult.html',
            service: 'bmOutResult'
        },
        //--------------------------------------------------【产品模块】

        // 产品详情数据
        detail: {
            url: apiUrl + '/wap/product/detail.html',
            service: 'productDetail'
        },
        // 产品列表数据
        list: {
            url: apiUrl + '/wap/product/list.html',
            service: 'productList'
        },
        // 提前还款
        repaymentExplain: {
            url: apiUrl + '/wap/product/repaymentExplain.html',
            service: 'repaymentExplain'
        },
        // 了解项目
        projectDetail: {
            url: apiUrl + '/wap/product/projectDetail.html',
            service: 'projectDetail'
        },
        // 当前标投资记录
        tenderRecord: {
            url: apiUrl + '/wap/product/tenderRecord.html',
            service: 'tenderRecord'
        },
        // 投资协议链接
        protocolForHtml: {
            url: apiUrl + '/wap/trade/protocolForHtml.html',
            service: 'protocolForHtml'
        },
        // 还款计划
        tenderPlan: {
            url: apiUrl + '/wap/trade/tenderPlan.html',
            service: 'tenderPlan'
        },

        //--------------------------------------------------【投资交易模块】

        // 交易数据准备
        prepare: {
            url: apiUrl + '/wap/trade/prepare.html',
            service: 'tradePrepare'
        },

        // 立即投资1-网银快捷支付(这个接口是给`立即投资1-快捷数据检查`成功后,location.href跳转连接用的)
        tenderForCard: {
            url: apiUrl + '/wap/trade/tenderForCard.html',
            service: 'tenderForCard'
        },

        // 立即投资1-快捷数据检查
        checkTenderForCard: {
            url: apiUrl + '/wap/trade/checkTenderForCard.html',
            service: 'checkTenderForCard'
        },

        // 立即投资2-余额支付
        tender: {
            url: apiUrl + '/wap/trade/tender.html',
            service: 'tender'
        },

        // 投资结果页
        tenderResult: {
            url: apiUrl + '/wap/trade/tenderResult.html',
            service: 'tenderResult'
        },

        // 添加银行卡
        addBankCard: {
            url: apiUrl + '/wap/account/addBankCard.html',
            service: 'addBankCard'
        },

        // 安全退出
        logout: {
            url: apiUrl + '/wap/user/logout.html',
            service: 'logout'
        },

        // 一分钱绑卡跳转
        pennyBindingCard: {
            url: apiUrl + '/wap/trade/pennyBindingCard.html',
            service: 'pennyBindingCard'
        },

        // 我的银行卡信息
        myBankCard: {
            url: apiUrl + '/wap/account/myBankCard.html',
            service: 'myBankCard'
        },
        //--------------------------------------------------【api密钥】
        appId: '20150720145313251618'
    };
});

//# sourceMappingURL=url-map-compiled.js.map