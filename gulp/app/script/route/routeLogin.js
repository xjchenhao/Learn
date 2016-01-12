/**
 * 钱庄网
 * @name 登录注册
 * @description Mobilebone页面路由
 * @date 2015-07-16
 * @version $V1.0$
 */
define(function (require, exports, module) {
    require('zepto');
    require('module/handlebars-helper');
    var base=require('module/base'),
        Mobilebone = require('mobilebone'),
        oneSession = require('module/one-session');

    //--------------------------------------------------【路由】
    Mobilebone.classAnimation = "fade";
    Mobilebone.rootTransition = {
        loginCheckInto: function (pageInto, pageOut, callback) {
            Mobilebone.INTO = require('page/loginCheck');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        loginCheckOut: function (pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        signInInto: function (pageInto, pageOut, callback) {
            var userPhone= oneSession.get('userPhone');

            // 没有传参到这个页面,则跳转回上一页
            if (!userPhone) {
                Mobilebone.transition($('#pageLoginCheck')[0], pageInto, {
                    history: false
                });
                return false;
            }

            // 赋值到注册页的手机显示
            $(pageInto).find('.js-userPhone').val(userPhone);

            $(pageInto).find('.js-phone').html(userPhone.substring(0,3)+"****"+userPhone.substring(7,11));
            $('#verifyCode,#setPassword').val('');

            // 执行页面的js逻辑
            Mobilebone.INTO = require('page/signIn');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        signInOut: function (pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        },
        loginInto: function (pageInto, pageOut, callback) {
            var userPhone= oneSession.get('userPhone');

            // 没有传参到这个页面,则跳转回上一页
            if (!userPhone) {
                Mobilebone.transition($('#pageLoginCheck')[0], pageInto, {
                    history: false
                });
                return false;
            }

            // 赋值到注册页的手机显示
            $(pageInto).find('.js-userPhone').val(userPhone);
            $('#loginPassword').val('');

            // 执行页面的js逻辑
            Mobilebone.INTO = require('page/login');
            Mobilebone.OUT = Mobilebone.INTO();
        },
        loginOut: function (pageInto, pageOut, callback) {
            Mobilebone.OUT && Mobilebone.OUT();
        }
    };
    Mobilebone.init();
});