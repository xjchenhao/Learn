/*
 * 1.0.3 按钮状态切换
 * */

(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function (exports) {
            return factory(root, exports);
        });
    } else {
        root.SubmitIng = factory(root, {});
    }
})(this, function (root, exports) {
    "use strict";

    var DISABLEDCLASS = 'disabled';

    var SubmitIng = function (opts) {
        this._opts = opts;
        this._setting();
    };

    SubmitIng.prototype._setting = function () {
        var self = this,
            opts = self._opts;

        // 初始化user data
        self.elmBtn = opts.elmBtn;
        self.startCallback = opts.startCallback || '';
        self.endCallback = opts.endCallback || '';

        // 提交状态
        self.state = false;

        // 是否是input
        self.isInput = (function () {
            return self.elmBtn.tagName === 'INPUT';
        }());
    };

    SubmitIng.prototype.start = function (str) {
        var self = this,
            elmBtn = self.elmBtn;

        // 保存原始值
        if (!self.originalStr) {
            self.originalStr = self.isInput ? elmBtn.value : elmBtn.innerHTML;
        }

        // 改变状态
        if (self.isInput) {
            elmBtn.value = str;
        } else {
            elmBtn.innerHTML = str;
        }

        elmBtn.setAttribute('disabled', 'true');
        self._addClass(elmBtn, DISABLEDCLASS);
        self.state = true;
        self.startCallback && self.startCallback();
    };

    SubmitIng.prototype.end = function () {
        var self = this,
            elmBtn = self.elmBtn;

        // 改变状态
        if (self.isInput) {
            elmBtn.value = self.originalStr;
        } else {
            elmBtn.innerHTML = self.originalStr;
        }

        elmBtn.removeAttribute('disabled');
        self._removeClass(elmBtn, DISABLEDCLASS);
        self.state = false;
        self.endCallback && self.endCallback();
    };

    SubmitIng.prototype.destroy = function(){
        var self = this,
            elmBtn = self.elmBtn;

        elmBtn.removeAttribute('disabled');
        self._removeClass(elmBtn, DISABLEDCLASS);
        self.state = false;
    };

    SubmitIng.prototype._addClass = function (obj, cls) {
        var targetObj = obj;
        if (typeof cls == 'string' && targetObj.nodeType === 1) {
            if (!targetObj.className) {
                targetObj.className = cls;
            } else {
                var a = (targetObj.className + ' ' + cls).match(/\S+/g);
                a.sort();
                for (var i = a.length - 1; i > 0; --i)
                    if (a[i] == a[i - 1]) a.splice(i, 1);
                targetObj.className = a.join(' ');
            }
        }
    };
    SubmitIng.prototype._removeClass = function (obj, cls) {
        var targetObj = obj;
        if (targetObj.className && typeof cls === 'string' && targetObj.nodeType === 1) {
            var classArr = targetObj.className.split(' ');
            for (var i = 0, iLength = classArr.length; i < iLength; i++) {
                if (classArr[i] === cls) {
                    classArr.splice(i, 1);
                }
            }
            targetObj.className = classArr.join(' ');
        }
    };

    return SubmitIng;
});
