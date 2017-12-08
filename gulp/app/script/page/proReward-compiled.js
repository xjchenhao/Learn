'use strict';

define(function (require, exports, module) {
    //------------------------------------------------------------------【引入依赖】
    require('zepto');

    var base = require('module/base');

    module.exports = function () {

        var nav_xrs = document.getElementById('nav_xrs');
        var nav_tzs = document.getElementById('nav_tzs');
        var con_xrs = document.getElementById('con_xrs');
        var con_tzs = document.getElementById('con_tzs');
        var type = document.getElementById('type').value;

        //判断是否为触摸，映射到不同的事件
        var hasTouch = (function () {
            return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
        })();
        var startEvt = hasTouch ? 'touchstart' : 'mousedown';

        //当页面上既有新人送又有投资送,才开始做选项卡逻辑
        if (nav_xrs && nav_tzs) {
            if (type == 1) {
                navXrsOn();
            } else if (type == 2) {
                navTzsOn();
            }
            nav_xrs.addEventListener(startEvt, navXrsOn, false);
            nav_tzs.addEventListener(startEvt, navTzsOn, false);
        } else {
            var awardWrapFirst = document.getElementsByClassName('invest-award-con')[0];
            removeClass(awardWrapFirst, 'js_hide');
        }

        function navXrsOn() {
            addClass(nav_xrs, "on");
            removeClass(nav_tzs, "on");
            removeClass(con_xrs, "js_hide");
            addClass(con_tzs, "js_hide");
        }

        function navTzsOn() {
            addClass(nav_tzs, "on");
            removeClass(nav_xrs, "on");
            removeClass(con_tzs, "js_hide");
            addClass(con_xrs, "js_hide");
        }

        function hasClass(obj, cls) {
            return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        }

        function addClass(obj, cls) {
            if (!hasClass(obj, cls)) obj.className += " " + cls;
        }

        function removeClass(obj, cls) {
            if (hasClass(obj, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                obj.className = obj.className.replace(reg, ' ');
            }
        }

        //--------------------------------------------------【暴露接口内存回收】
        return function () {
            nav_xrs.removeEventListener(startEvt, navXrsOn, false);
            nav_tzs.removeEventListener(startEvt, navTzsOn, false);
        };
    };
});

//# sourceMappingURL=proReward-compiled.js.map