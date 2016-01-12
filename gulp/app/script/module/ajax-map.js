/**
 * 钱庄网
 * @name 基础js
 * @description ajax映射表
 * @date 2015-03-30
 */
define(function (require, exports, module) {
    var Mock=require('mock');
    var pageUrl = require('module/url-map');
    //---------------------------------------------【页面数据】

    // 首页
    Mock.mock(pageUrl.home.url, {
        "resultCode": 1,
        "resultData": {
            "bannerList": [
                {
                    "fileName": 1,
                    "fileTypeName": "手机端banner图",
                    "franchiseeId": 1,
                    "fullRedirectUrl": "http://test.qian360.com/activity/rain/intro.html?1=1",
                    "fullShowUrl": "http://test.qian360.com/data/images/banner/1433843985870.png"
                },
                {
                    "fileName": 1,
                    "fileTypeName": "手机端banner图",
                    "franchiseeId": 1,
                    "fullRedirectUrl": "http://test.qian360.com/activity/anniversary/wapIndex.html?1=1",
                    "fullShowUrl": "http://test.qian360.com/data/images/banner/1429429477238.png"
                }
            ],
            "counttender": 1,
            "loginstatus": "1",
            "product": {
                "account": "10000",
                "accountYes": "5000",
                "addtime": 1436878020000,
                "bmApieceDayIn": 0,
                "bmApieceTotal": 0,
                "bmLimitDes": "",
                "bmPerDayOutTotal": 0,
                "borrowType": 1,
                "brType": "1",
                "city": "杭州",
                "company": "杭州一轩金融服务外包有限公司",
                "content": "而后又",
                "countDownTime": 0,
                "countdownFlag": 0,
                "debtorInfo": "若风退役",
                "flowMoney": 0,
                "flowYesCount": 0,
                "lastRepayTime": 1443974399000,
                "lowestAccount": 100,
                "style": 2,
                "tenderTimes": 6,
                "timeLimit": 4,
                "timeLimitDay": 0,
                "totalPeriod": 0,
                "type": 112,
                "userId": 393,
                "userShowName": "liuxingyun",
                "apr": "11.5",
                "borrowId": 896,
                "extraApr": 0,
                "extraAwardApr": 2,
                "flowCount": 0,
                "franchiseeId": 1,
                "franchiseeName": "一轩金融",
                "franchiseeTime": 1410364800000,
                "fundUsage": "都是个都是收到回复好的噶十多天傻瓜爱国发货的按时",
                "hasRepaidPeriod": 0,
                "isAdvanceRepay": 0,
                "isExperience": 0,
                "isNewHand": 1,
                "isday": 1,
                "logo": "/themes/soonmes_qzw_v2/image/store_about_yx/yx_fc.jpg",
                "mostAccount": 0,
                "name": "摇钱树 No.00039",
                "normalApr": "9.5",
                "productStatus": 1,
                "productType": 1,
                "repaymentSource": "按时到岗阿斯钢收到高收益涣发大号方式大概大概都是",
                "riskEvaluation": "111",
                "status": 1,
                "usetype": 11001
            }
        },
        "resultMsg": ""
    });

    // 用户主页
    Mock.mock(pageUrl.myAccount.url, {
        "resultCode": 1,
        "resultData": {
            "accumulatedIncome": "0.00",
            "balance": 1000000,
            "repayAccount": "",
            "repayTime": "",
            "returnedAccount": "",
            "returnedTime": "",
            "tenderAccount": "",
            "tenderTime": "",
            "tenderYesInterest": "0.00",
            "userName": "测试内容h452",
            "phone": "188****4489"
        },
        "resultMsg": ""
    });

    // 产品详情页
    Mock.mock(pageUrl.detail.url, {
        "resultCode": 1,
        "resultData": {
            "domain": "http://test.qian360.com",
            "interest_day": 73,
            "largestTender": 500000,
            "product": {
                "addtime": 12378,
                "company": "测试内容l782",
                "content": "测试内容9122",
                "debtorInfo": "测试内容73do",
                "extraAprUrl": "",
                "franchiseeName": "测试内容clp3",
                "franchiseeTime": 38312,
                "fundUsage": "测试内容tc74",
                "lastRepayTime": 1443974399000,
                "logo": "测试内容33rt",
                "name": "测试内容547t",
                "sendFlag": 1,
                "perDealMost": 0,
                "preSaleTime": 1433412000000,
                "repaymentSource": "测试内容46z5",
                "style": 2,
                "tenderTimes": 6,
                "timeLimit": 4,
                "timeLimitDay": 0,
                "totalPeriod": 0,
                "sendList": ['187***4147', '178***4488'],
                "transferFlag": 0,
                "type": 112,
                "userId": 393,
                "userShowName": "liuxingyun",
                "account": "620000",
                "accountYes": "50000",
                "apr": "7.0",
                "borrowId": 874,
                "borrowType": 1,
                "brType": "2",
                "city": "杭州",
                "countdownFlag": 1,
                "extraApr": 2,
                "franchiseeId": 19,
                "hasRepaidPeriod": 0,
                "isAdvanceRepay": 1,
                "isNewHand": 0,
                "productStatus": 1,
                "isday": 0,
                "lowestAccount": 200,
                "mostAccount": 500,
                "riskEvaluation": "1111",
                "status": 8
            },
            "repayTime": 1443888000000
        },
        "resultMsg": ""
    });

    //投资详情
    Mock.mock(pageUrl.myTenderRecordDetail.url, {
        "resultCode": true,
        "resultData": {
            "defaultBankCard": "1234",
            "defaultBankName": "银行卡名称",
            "style":"3",
            "tenderdetail": {
                "account": 414500,
                "addtime": 1439456296000,
                "apr": "7.6",
                "backPlace": "账户余额",
                "borrowId": 896,
                "borrowName": "摇钱树 No.00077",
                "borrowStatus|1-3": 1,
                "buyType": "账户余额",
                "extraAward": 0,
                "interest": 1.41,
                "isbin": 0,
                "isneed": 0,
                "orderNo": "2291507270815164871",
                "repaymentTime": 1440259200000,
                "status": 1,
                "tenderId": 7118
            }
        },
        "resultMsg": "返回信息"
    });

    //账户余额
    Mock.mock(pageUrl.accountBalance.url, {
        "resultCode": true,
        "resultData": {
            "balance|1-3548": 1,
            "cashFee": 2,
            "currentMonthHasCash|0-3": 1,
            "disposeCash": "0.00",
            "freeCashCount": 5
        },
        "resultMsg": "返回信息"
    });

    //在投资金
    Mock.mock(pageUrl.tendering.url, {
        "resultCode": true,
        "resultData": {
            "bmInterest|0-354.0-2": 1,
            "bmTotal|0-354.0-2": 1,
            "investingCapital|0-99.0-2": 1,
            "investingWaitInterest|0-99.0-2": 1,
            "phone": "188****4489",
            "userName": "用户名"
        },
        "resultMsg": "返回信息"
    });

    //钱宝宝转出
    Mock.mock(pageUrl.bmOut.url, {
        "resultCode": true,
        "resultData": {
            "orderNo": 2291507270815164871,
            "money|0-999.0-2": 1
        },
        "resultMsg": "返回信息"
    });

    //钱宝宝转出结果
    Mock.mock(pageUrl.bmOutResult.url, {
        "resultCode": true,
        "resultData": {
            "status|0-1": 1,
            "balance|0-999.0-2": 1,
            "bmBalance|0-999.0-2": 1
        },
        "resultMsg": "返回信息"
    });

    //还款计划
    Mock.mock(pageUrl.tenderPlan.url, {
        "resultCode": 1,
        "resultData|10": [{
                "capital":162.55,
                "interst":10,
                "repayTime":1430443800000
            }],
        "resultMsg": "返回信息"
    });

    //---------------------------------------------【异步数据】

    // 产品列表
    Mock.mock(pageUrl.list.url, {
        "resultCode": 1,
        "resultData": {
            "currentPage": 1,
            "pages": 3,
            "total": 100,
            "productList|11": [
                {
                    "account": "1000000",
                    "accountYes": "500000",
                    "addtime": "1427853335000",
                    "apr": "11.5",
                    "bmApieceDayIn": "10000",
                    "bmApieceTotal": "20000",
                    "bmLimitDes": "随存随取",
                    "bmPerDayOutTotal": "10000",
                    "borrowId": "801",
                    "borrowType": "1",
                    "brType": "2",
                    "city": "杭州",
                    "company": "杭州一轩金融服务外包有限公司",
                    "content": "钱宝宝是钱庄网推出的余额增值服务类产品，可获得年化5%-8%的浮动收益",
                    "countDownTime": "4148700430",
                    "countdownFlag": "时撒按时是按时按时改单费该公司的法国大使馆按时爱的说得好烦好",
                    "debtorInfo": "0",
                    "extraApr": "0",
                    "extraAwardApr": "2",
                    "flowCount": "0",
                    "flowMoney": "0",
                    "flowYesCount": "0",
                    "franchiseeId": "19",
                    "franchiseeName": "一轩金融",
                    "franchiseeTime": "1410364800000",
                    "fundUsage": "都是个都是收到回复好的噶十多天傻瓜爱国发货的按时",
                    "hasRepaidPeriod": "0",
                    "isAdvanceRepay": "0",
                    "isExperience": "0",
                    "isNewHand": "0",
                    "isday": "0",
                    "logo": "/themes/soonmes_qzw_v2/image/store_about_yx/yx_fc.jpg",
                    "lowestAccount": "100",
                    "mostAccount": "2000",
                    "name": "钱宝宝",
                    "normalApr": "9.5",
                    "productStatus": "1",
                    "productType": "1",
                    "repaymentSource": "按时到岗阿斯钢收到高收益",
                    "riskEvaluation": "111",
                    "status": "10",
                    "style": "2",
                    "tenderTimes": "25",
                    "timeLimit": 4,
                    "timeLimitDay": 0,
                    "totalPeriod": "1",
                    "type": 112,
                    "userId": 393,
                    "userShowName": "liuxingyun",
                    "usetype": "11001"
                }
            ]
        },
        "resultMsg": ""
    });

    // 验证手机号是否注册
    Mock.mock(pageUrl.phoneCheck.url, {
        "resultCode": "1",
        "resultData": {
            "cardExist": "1",
            "phoneExist": "0"
        },
        "resultMsg": "测试内容h3nf"
    });

    // 用户登录
    Mock.mock(pageUrl.login.url, {
        "errorCode": "测试内容4a6g",
        "resultCode": 1,
        "resultData": {
            "oauthToken": "8a8080f74eaea8e3014eaf1d7df20002",
            "phone": "q18667937970"
        },
        "resultMsg": "错误信息"
    });

    // 注册用户时发送短信验证码
    Mock.mock(pageUrl.validCode.url, {
        "resultCode": "1",
        "resultData": {
            "cardExist": "1",
            "phoneExist": "1"
        },
        "resultMsg": "测试内容by1y"
    });

    // 注册用户时发送语音验证码
    Mock.mock(pageUrl.regVoiceCode.url, {
        "resultCode": "1",
        "resultData": {
            "cardExist": "1",
            "phoneExist": "1"
        },
        "resultMsg": "测试内容by1y"
    });

    // 实名认证
    Mock.mock(pageUrl.certification.url, {
        "errorCode": "测试内容3y2v",
        "resultCode": 1,
        "resultData": {
            "redPacketAmount": 1,
            "redPacketOpen": 1,
            "redPacketType": 1
        },
        "resultMsg": ""
    });

    // 用户状态
    Mock.mock(pageUrl.getUserInfoStatus.url, {
        "resultCode": 1,
        "resultData": {
            "cardID":"3326**********0018",
            "bankCardStatus|1-2": 1,
            "newHandStatus": 1,
            "payPwdStatus": 1,
            "phone": "187***4147",
            "realName": "*豪",
            "realNameStatus": 1
        },
        "resultMsg": ""
    });

    // 用户注册
    Mock.mock(pageUrl.register.url, {
        "errorCode": "测试内容4k5b",
        "resultCode": 1,
        "resultData": {
            "oauthToken": "8a8080f74eaea8e3014eaf1d7df20002",
            "phone": "q18667937970"
        },
        "resultMsg": ""
    });

    //修改登录密码
    Mock.mock(pageUrl.modifyLoginPwd.url, {
        "errorCode": "测试内容4z95",
        "resultCode": 1,
        "resultMsg": ""
    });

    //找回密码
    Mock.mock(pageUrl.resetLoginPwd.url, {
        "errorCode": "测试内容4z95",
        "resultCode": 1,
        "resultMsg": ""
    });

    //修改支付密码
    Mock.mock(pageUrl.modifyPayPwd.url, {
        "errorCode": "测试内容4z95",
        "resultCode": 1,
        "resultMsg": ""
    });

    //找回支付密码
    Mock.mock(pageUrl.resetPayPwd.url, {
        "errorCode": "测试内容4z95",
        "resultCode": 1,
        "resultMsg": ""
    });

    // 提前还款
    Mock.mock(pageUrl.repaymentExplain.url, {
        "resultCode": 1,
        "resultData": {
            "nDay": 22,
            "nMonth": 8,
            "pDay": 4,
            "pMonth": 7,
            "repayTime": 1443888000000,
            "status": 7,
            "isNewAdvance":1
        }, "resultMsg": ""
    });

    // 当前标投资记录
    Mock.mock(pageUrl.tenderRecord.url, {
        "resultCode": 1,
        "resultData": {
            "currentPage": 1,
            "pages": 3,
            "total": 100,
            "tenderList|10": [
                {
                    "account": 414500,
                    "addTime": 1435650716000,
                    "phone": "188****4489"
                }
            ]
        },
        "resultMsg": ""
    });

    //了解项目
    Mock.mock(pageUrl.projectDetail.url, {
        "resultCode": 1,
        "resultData": {
            "borrowFileList": [
                {
                    "fileName": "1434639219526.jpg",
                    "fileType": "borrowUserInfo",
                    "fileUrl": "/data/upfiles/20150618/1434639219526.jpg",
                    "zoomFileUrl": "/data/upfiles/20150618/zoom_1434639219526.jpg"
                },

                {
                    "fileName": "1434639225614.jpg",
                    "fileType": "borrowMortgage",
                    "fileUrl": "/data/upfiles/20150618/1434639225614.jpg",
                    "zoomFileUrl": "/data/upfiles/20150618/zoom_1434639225614.jpg"
                },

                {
                    "fileName": "1434639237823.jpg",
                    "fileType": "borrowVouch",
                    "fileUrl": "/data/upfiles/20150618/1434639237823.jpg",
                    "zoomFileUrl": "/data/upfiles/20150618/zoom_1434639237823.jpg"
                }
            ],
            "certification": "1001",
            "content": "测试内容ukln",
            "debtorInfo": "测试内容7yn4",
            "fundUsage": "测试内容dz17",
            "nDay": 22,
            "nMonth": 8,
            "pDay": 4,
            "pMonth": 7,
            "repaymentSource": "测试内容12tv",
            "transferFlag": 0,
            "verifyTime": 1433408186000,
            "franchiseeName": "一轩金融",
            "productType": 3,
            "riskEvaluation": "111"
        },
        "resultMsg": ""
    });

    //交易数据准备
    Mock.mock(pageUrl.prepare.url,
        {
            "resultCode": 1,
            "resultData": {
                "allBankCardList": [{
                    "bankCode": "01020000",
                    "bankName": "工商银行",
                    "bankShortName": "工商银行",
                    "channelCode": 1,
                    "id": 1,
                    "isNeedAreaCode": 1,
                    "logoCss": "qui_bank_icbc",
                    "perDayLimit": 20000,
                    "perDealLimit": 20000,
                    "status": 1,
                    "telephone": "95588"
                },
                    {
                        "bankCode": "01020000",
                        "bankName": "农业银行",
                        "bankShortName": "农业银行",
                        "channelCode": 1,
                        "id": 2,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_abc",
                        "perDayLimit": 20000,
                        "perDealLimit": 20000,
                        "status": 1,
                        "telephone": "95599"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "中国银行",
                        "bankShortName": "中国银行",
                        "channelCode": 1,
                        "id": 3,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_boc",
                        "perDayLimit": 1000000,
                        "perDealLimit": 500000,
                        "status": 1,
                        "telephone": "95566"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "建设银行",
                        "bankShortName": "建设银行",
                        "channelCode": 1,
                        "id": 4,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_ccb",
                        "perDayLimit": 1000000,
                        "perDealLimit": 500000,
                        "status": 1,
                        "telephone": "95533"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "招商银行",
                        "bankShortName": "招商银行",
                        "channelCode": 1,
                        "id": 5,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_cmb",
                        "perDayLimit": 1000000,
                        "perDealLimit": 500000,
                        "status": 1,
                        "telephone": "95555"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "浦发银行",
                        "bankShortName": "浦发银行",
                        "channelCode": 1,
                        "id": 6,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_spdb",
                        "perDayLimit": 1000000,
                        "perDealLimit": 50000,
                        "status": 1,
                        "telephone": "95528"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "光大银行",
                        "bankShortName": "光大银行",
                        "channelCode": 1,
                        "id": 7,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_ceb",
                        "perDayLimit": 1000000,
                        "perDealLimit": 500000,
                        "status": 1,
                        "telephone": "95595"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "平安银行",
                        "bankShortName": "平安银行",
                        "channelCode": 1,
                        "id": 8,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_pingan",
                        "perDayLimit": 1000000,
                        "perDealLimit": 200000,
                        "status": 1,
                        "telephone": "95511"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "华夏银行",
                        "bankShortName": "华夏银行",
                        "channelCode": 1,
                        "id": 9,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_hxb",
                        "perDayLimit": 1000000,
                        "perDealLimit": 500000,
                        "status": 1,
                        "telephone": "95577"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "兴业银行",
                        "bankShortName": "兴业银行",
                        "channelCode": 1,
                        "id": 10,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_cib",
                        "perDayLimit": 1000000,
                        "perDealLimit": 500000,
                        "status": 1,
                        "telephone": "95561"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "中信银行",
                        "bankShortName": "中信银行",
                        "channelCode": 1,
                        "id": 11,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_ecitic",
                        "perDayLimit": 1000000,
                        "perDealLimit": 500000,
                        "status": 1,
                        "telephone": "95558"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "邮政储蓄银行",
                        "bankShortName": "邮政储蓄银行",
                        "channelCode": 1,
                        "id": 12,
                        "isNeedAreaCode": 0,
                        "logoCss": "qui_bank_psbc",
                        "perDayLimit": 1000000,
                        "perDealLimit": 10000,
                        "status": 1,
                        "telephone": "95580"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "广发银行",
                        "bankShortName": "广发银行",
                        "channelCode": 1,
                        "id": 13,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_cgbc",
                        "perDayLimit": 1000000,
                        "perDealLimit": 50000,
                        "status": 1,
                        "telephone": "95508"
                    },
                    {
                        "bankCode": "01020000",
                        "bankName": "民生银行",
                        "bankShortName": "民生银行",
                        "channelCode": 1,
                        "id": 14,
                        "isNeedAreaCode": 1,
                        "logoCss": "qui_bank_cmbc",
                        "perDayLimit": 1000000,
                        "perDealLimit": 50000,
                        "status": 1,
                        "telephone": "95568"
                    }
                ],
                "balance": 1000,
                "bankCard": {
                    "hiddenCardNo": "1111",
                    "bankShortName": "工商银行",
                    "cardNo":'123123'
                },
                "lastRepayTime": 1443974399000,
                "lowestAccount": 100,
                "redPacketList": [
                    {
                        "createDate": 1437989902000,
                        "overdueFlag": false,
                        "redPacketAmount": 3,
                        "redPacketType": "一鸣惊人",
                        "redpacketId": 1720,
                        "useFlag": false,
                        "validDate": 1440581902000
                    },
                    {
                        "createDate": 1437989902000,
                        "overdueFlag": false,
                        "redPacketAmount": 2,
                        "redPacketType": "幸运客官",
                        "redpacketId": 1721,
                        "useFlag": false,
                        "validDate": 1440581902000
                    }
                ],
                "redPacketTotal": 5,
                "borrowId": 801,
                "extraAwardApr": 0,
                "isNewHand": 0,
                "mostAccount": 20000,
                "normalApr": "7.6"
            },
            "resultMsg": ""
        });

    //立即投资1-快捷数据检查
    Mock.mock(pageUrl.checkTenderForCard.url, {
        "resultCode": 1,
        "resultData": {},
        "resultMsg": ""
    });

    //立即投资2-余额支付
    Mock.mock(pageUrl.tender.url, {
        "errorCode": "TOKEN_EXPIRED",
        "resultCode": 1,
        "resultData": {
            "orderNo": "2291507270815164871"
        },
        "resultMsg": "登录信息已过期，请重新登录"
    });

    //投资结果页
    Mock.mock(pageUrl.tenderResult.url, {
        "resultCode": 1,
        "resultData": {
            "tenderResult": {
                "backPlace": "账户余额",
                "bankName": "测试内容4b9m",
                "bankid": "266",
                "hiddenCardNo": "1111",
                "invest": -0.46,
                "isneed": "1",
                "repayTime": 1443888000000,
                "tenderMoney": 100,
                "borrowId": 874,
                "status": 1,
                "tenderName": "摇钱树 No.00078"
            }
        }
        , "resultMsg": ""
    });

    //添加银行卡
    Mock.mock(pageUrl.addBankCard.url, {
        "resultCode": 1,
        "resultData": {
            "bankCard": {
                "addTime": 1435650716000,
                "amountOrCardNo": "1111",
                "bankCode": "01020000",
                "bankShortName": "工商银行",
                "cardNo": "621226120211111",
                "hiddenCardNo": "1111",
                "id": 272,
                "isDefault": 0,
                "isneed": "1",
                "perDayLimit": 1000000,
                "perDealLimit": 500000,
                "realName": "徐洪昌",
                "status": 1,
                "uniqNo": "BCN1412261420912567"
            }
        }, "resultMsg": ""
    });

    //我的银行卡
    Mock.mock(pageUrl.myBankCard.url, {
        "resultCode": 1,
        "resultData": {
            "bankCard": {
                "addTime": 1435650716000,
                "amountOrCardNo": "1111",
                "bankCode": "01020000",
                "bankShortName": "工商银行",
                "cardNo": "621226120211111",
                "hiddenCardNo": "1111",
                "id": 272,
                "isDefault": 0,
                "isneed": "1",
                "perDayLimit": 1000000,
                "perDealLimit": 500000,
                "realName": "徐洪昌",
                "status": 1,
                "uniqNo": "BCN1412261420912567"
            }
        }, "resultMsg": ""
    });

    //回款记录（回/待回）
    Mock.mock(pageUrl.returnRecord.url, {
        "resultCode": true,
        "resultData": {
            "currentPage": 1,
            "list|10": [{
                "backPlace": "账户余额",
                "borrowId": 123432,
                "borrowName": "投资摇钱树 No.00017",
                "captial": 1,
                "interest": 166.33,
                "isbin": "1",
                "repaymenTime": 1440293414000,
                "repaymentAccount": 563.64,
                "tenderId": 1,
                "tenderTime": 1440293414000
            }],
            "pages": 10,
            "total": 100
        },
        "resultMsg": "返回信息"
    });

    //投资记录列表
    Mock.mock(pageUrl.getHistoryTender.url, {
        "resultCode": true,
        "resultData": {
            "currentPage": 1,
            "list|20": [{
                "borrowStatus|1-2": 1,
                "borrowId": 123432,
                "borrowName": "投资摇钱树 No.00017",
                "interest": 166.33,
                "addtime": 1439456296000,
                "account": 563.64,
                "tenderId": 1
            }],
            "pages": 10,
            "total": 100
        },
        "resultMsg": "返回信息"
    });

    //投资记录钱宝宝列表
    Mock.mock(pageUrl.getBmHistoryRecord.url, {
        "resultCode": true,
        "resultData": {
            "currentPage": 1,
            "list|20": [{
                "id": 123432,
                "money": 166.33,
                "date": 1440293414000
            }],
            "pages": 10,
            "total": 100
        },
        "resultMsg": "返回信息"
    });

    //红包
    Mock.mock(pageUrl.redPacket.url, {
        "resultCode": true,
        "resultData": {
            "currentPage": 1,
            "list|5": [{
                "createDate": 1437989902000,
                "overdueFlag|1": true,
                "redPacketAmount": 10,
                "redPacketType": "一鸣惊人",
                "redpacketId": 1720,
                "useFlag|1": true,
                "validDate": 1436343212000
            }],
            "pages": 10,
            "total": 100
        },
        "resultMsg": "返回信息"
    });

    //奖励
    Mock.mock(pageUrl.cashAwardRecord.url, {
        "resultCode": true,
        "resultData": {
            "currentPage": 1,
            "list|10": [{
                "addr": "到期自动发放至账户余额",
                "addtime": 1436343212000,
                "money": 1526.00,
                "title": "投资摇钱树 No.00039"
            }],
            "pages": 10,
            "total": 100
        },
        "resultMsg": "返回信息"
    });
    //---------------------------------------------【测试结果】

    // 返回true的接口
    pageUrl.resultTrue = 'resultTrue.html';
    Mock.mock(pageUrl.resultTrue, true);

    // 返回false的接口
    pageUrl.resultFalse = 'resultTrue.html';
    Mock.mock(pageUrl.resultFalse, false);


    // 暴露api接口
    return pageUrl;
});