/*
 * 模块名称 tab切换
 * 版本号 1.0.2
 * 作者 23
 * 邮箱 xiaohuli19920726@163.com
 * 备注 
 */
(function(root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function(require, exports, module) {
            return factory(root, exports);
        });
    } else {
        root.tab = factory(root);
    }
})(this, function(root, exports) {

    //常量
    var
        TABBTNACTIVE = 'tab-btn-active', //按钮被激活后的class
        TABCONTENTACTIVE = 'tab-content-active', //内容容器被激活的class
        EV = 'click';

    var tab = function(obj) {
        obj = obj || {};

        this.btnBox = obj.btnBox;                                       //按钮容器
        this.containBox = obj.containBox;                               //所有内容-内容容器
        this.btnActiveClass = obj.btnActiveClass || TABBTNACTIVE;       //按钮选中样式
        this.contActiveClass = obj.contActiveClass || TABCONTENTACTIVE; //容器选中样式
        this.eventType = obj.eventType || EV;                           //触发方式
        this.currentNum = obj.currentNum || 0;                          //展示哪个？没传就默认第0个
        this.hrefParem = obj.hrefParem;                                 //截取url参
        this.callback = obj.callback;                                   //点完按钮后的回调函数

        this._init();
        this._handle();

    };

    tab.prototype._init = function() {
        var btnArr = this.btnBox.children,
            containBoxArr = this.containBox.children,
            self = this;

        for (var i = 0, l = btnArr.length; i < l; i++) {
            this._removeClass(btnArr[i], self.btnActiveClass);
            this._removeClass(containBoxArr[i], self.contActiveClass);
        }
        //this._addClass(btnArr[this.currentNum || this._getHrefParam(this.hrefParem)], self.btnActiveClass);
        //this._addClass(containBoxArr[this.currentNum || this._getHrefParam(this.hrefParem)], self.contActiveClass);
        this._addClass(btnArr[this.currentNum], self.btnActiveClass);
        this._addClass(containBoxArr[this.currentNum], self.contActiveClass);
    };

    tab.prototype._handle = function() {
        var self = this;
        this.btnfn = function(e) {
            var e = arguments[0] || window.event,
                target = e.target || e.srcElement,
                btnArr = self.btnBox.children,
                containBoxArr = self.containBox.children,
                containBoxIndex = self._index(target, btnArr);

            if (target !== self.btnBox) {
                for (var i = 0, l = btnArr.length; i < l; i++) {
                    self._removeClass(btnArr[i], self.btnActiveClass);
                    self._removeClass(containBoxArr[i], self.contActiveClass);
                }
                self._addClass(target, self.btnActiveClass);
                self.callback && self.callback(containBoxIndex);
                self._addClass(containBoxArr[containBoxIndex], self.contActiveClass);
            }
        };

        this.addEvent(this.btnBox, this.eventType, this.btnfn);
    };
    tab.prototype._eval = function(val) {
        return (new Function("return " + val))();
    };
    tab.prototype._index = function(current, obj) {
        for (var i = 0, l = obj.length; i < l; i++) {
            if (obj[i] == current) {
                return i;
            }
        }
    };
    tab.prototype._getWants = function(oParent, oWants, tag) {
        var i,
            oEle = oParent.getElementsByTagName(tag),
            aResult = [];
        for (i = 0; i < oEle.length; i++) {

            if (oEle[i].getAttribute(oWants) && this._eval(oEle[i].getAttribute(oWants))) {
                aResult.push(oEle[i]);
            }

        }
        return aResult;
    };
    tab.prototype._getHrefParam = function(key) {
        var href = root.location.href; // 取页面的url
        patternOne = new RegExp(key + '\\=(.*?)(#|&|$)', 'ig');

        if (patternOne.test(href)) {
            return RegExp.$1;
        }

        return '';
    };
    tab.prototype.addEvent = function(obj, ev, actionResponse) {
        if (obj.addEventListener) {
            obj.addEventListener(ev, actionResponse, false);
        } else {
            obj.attachEvent('on' + ev, actionResponse);
        }
    };
    tab.prototype._addClass = function(obj, cls) {
        var targetObj = this.isErrorOnParent ? obj.parentElement : obj;
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
    tab.prototype._removeClass = function(obj, cls) {
        var targetObj = this.isErrorOnParent ? obj.parentElement : obj;
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
    tab.prototype.destroy = function() {
        var btnArr = this.btnBox.children;
        for (var i = 0, l = btnArr.length; i < l; i++) {
            this.btnBox.removeEventListener(this.eventType, this.btnfn, false);
        }
    };

    return tab;
});