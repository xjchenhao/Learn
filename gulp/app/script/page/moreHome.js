/**
 * 手机钱庄
 * @name 更多列表
 * @description 单页js
 * @date 2015-07-30
 */
define(function (require, exports, module) {

    require('zepto');
    var pageUrl = require('module/ajax-map'),
        oneSession=require('module/one-session');

    module.exports = function () {
        //--------------------------------------------------【加载数据】
        $('#loginBtn').on('click',function(){
            oneSession.set('redirectURL','index.html#&pageMore');
        });
        //--------------------------------------------------【暴露接口内存回收】
        return function () {
            $('#loginBtn').off('click');
        }
    };
});