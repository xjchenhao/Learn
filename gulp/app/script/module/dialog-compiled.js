/**
 * pop模态框      2.0.6
 */
'use strict';

(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function (require) {
            require('zepto');
            return factory(root);
        });
    } else {
        root.Pop = factory(root, {});
    }
})(undefined, function (root) {
    "use strict";

    // 类名常量
    var classPrefix = 'ui-pop-',
        idPrefix = 'uiPop';

    // 生成类名对象
    var CLASS = (function () {
        return {
            frame: classPrefix + 'frame',
            main: classPrefix + 'main',
            title: classPrefix + 'tit',
            content: classPrefix + 'cont',
            operation: classPrefix + 'operation',
            wait: classPrefix + 'wait'
        };
    })();

    // 生成ID名对象
    var ID = (function () {
        return {
            frame: idPrefix + 'Frame',
            confirmBtn: idPrefix + 'confirmBtn',
            cancelBtn: idPrefix + 'cancelBtn'
        };
    })();

    // 触摸事件类型
    var touchTap = $ && $.fn && $.fn.tap ? 'tap' : 'click';

    //策略对象
    var addDom = {
        alert: function alert() {
            var contStr = '';
            if (typeof arguments[0] === 'string') {
                contStr = arguments[0];
            } else {
                contStr = arguments[0].contStr;
            }

            var strHtml = '';
            strHtml += '<div class="' + CLASS.frame + '" id="' + ID.frame + '">';
            strHtml += '<div class="' + CLASS.main + '">';
            strHtml += '<div class="' + CLASS.content + '">' + contStr + '</div>';
            strHtml += '<div class="' + CLASS.operation + '">';
            strHtml += '<a href="javascript:;" id="' + ID.confirmBtn + this.guid + '">确认</a>';
            strHtml += '</div>';
            strHtml += '</div>';
            strHtml += '</div>';

            return strHtml;
        },
        confirm: function confirm() {
            var contStr = '',
                titStr = '';
            if (typeof arguments[0] === 'string') {
                contStr = arguments[0];
                titStr = arguments[1] || '确认提示';
            } else {
                contStr = arguments[0].contStr;
                titStr = arguments[0].titStr;
            }

            var strHtml = '';
            strHtml += '<div class="' + CLASS.frame + '" id="' + ID.frame + '">';
            strHtml += '<div class="' + CLASS.main + '">';
            strHtml += '<div class="' + CLASS.title + '">' + titStr + '</div>';
            strHtml += '<div class="' + CLASS.content + '">' + contStr + '</div>';
            strHtml += '<div class="' + CLASS.operation + '">';
            strHtml += '<a href="javascript:;" id="' + ID.cancelBtn + this.guid + '">取消</a>';
            strHtml += '<a href="javascript:;" id="' + ID.confirmBtn + this.guid + '">确认</a>';
            strHtml += '</div>';
            strHtml += '</div>';
            strHtml += '</div>';

            return strHtml;
        },
        wait: function wait() {
            var contStr = '';
            if (typeof arguments[0] === 'string') {
                contStr = arguments[0];
            } else {
                contStr = arguments[0].contStr;
            }
            var strHtml = '';
            strHtml += '<div class="' + CLASS.wait + '" id="' + ID.frame + '">';
            strHtml += '<div class="' + CLASS.main + '">' + contStr + '</div>';
            strHtml += '</div>';
            return strHtml;
        }
    };

    var Pop = function Pop(type) {
        this.type = type;
        this.guid = newGuid();
    };

    /*调用弹框*/
    Pop.prototype.run = function () {
        var self = this,
            confirmFunc = null,
            cancelFunc = null,
            callback = null;

        self.close();

        if (typeof arguments[0] === 'object') {
            confirmFunc = arguments[0].confirmFunc;
            cancelFunc = arguments[0].cancelFunc;
            callback = arguments[0].callback;
        }

        // dom添加到页面中
        $('body').append(addDom[self.type].apply(self, arguments));
        callback && callback();

        // 确认按钮事件
        $('#' + ID.confirmBtn + self.guid).on(touchTap, function () {
            confirmFunc && confirmFunc();
            self.close();
        }).focus();

        // 取消按钮事件
        $('#' + ID.cancelBtn + self.guid).on(touchTap, function () {
            cancelFunc && cancelFunc();
            self.close();
        });

        // 自动关闭遮罩
        if (this.type === 'wait') {
            setTimeout(function () {
                $('#uiPopFrame').remove();
            }, 2000);
        }
    };

    Pop.prototype.close = Pop.prototype.destroy = function () {
        $('#' + ID.confirmBtn + self.guid).off(touchTap);
        $('#' + ID.cancelBtn + self.guid).off(touchTap);
        $('#' + ID.frame).remove();
    };
    function newGuid() {
        var guid = "";
        for (var i = 1; i <= 32; i++) {
            var n = Math.floor(Math.random() * 16.0).toString(16);
            guid += n;
            if (i == 8 || i == 12 || i == 16 || i == 20) {
                guid += "-";
            }
        }
        return guid;
    }

    return Pop;
});

//# sourceMappingURL=dialog-compiled.js.map