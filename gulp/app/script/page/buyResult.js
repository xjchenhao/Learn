/**
 * 手机钱庄
 * @name 申购结果
 * @description 单页js
 * @date 2015-08-03
 */
define(function (require, exports, module) {

    require('zepto');
    var hrefParameter = require('module/href-parameter');

    module.exports = function () {

        //--------------------------------------------------【用于支付回调回来给按钮添加添加borrowId】
        var borrowId = hrefParameter.get('borrowId');
        if (borrowId) {
            $('#revestBtn').attr('href','product.html?borrowId=' + borrowId + '#&pageProDetails');
        }

        //--------------------------------------------------【暴露接口内存回收】
        return function () {

        }
    };
});