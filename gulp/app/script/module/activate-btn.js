/*input是否输入 1.1.4*/
(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function (require, exports, module) {
            return factory(root, exports);
        });
    } else {
        root.btnLight = factory(root);
    }
})(this, function (root, exports) {

    var CHECK = 'data-activate-check',  // 要检查的input需要添加的属性
        SUBMIT = 'data-activate-submit', // 关联按钮要添加的属性
        DISABLED = 'disabled';  // 按钮禁用添加的class

    var btnLight = function (obj) {

        obj = obj || {};

        // 传参赋值
        this.contain = obj.contain || document;
        this.elmBtn = obj.elmBtn || null;
        this.disabledClass = DISABLED;

        // 用于存储需要检查input是否有值的对象栈
        this.inputArr = null;

        // 初始化模块
        this._init();

        //绑定模块事件
        this._handle();

        //添加对象副本
        btnLight.myConstructor = this;
    };

    btnLight.prototype = {

        constructor: btnLight,

        _init: function () {
            var self = this,
                elmBtnOne = self.elmBtn,
                inputArr = self._getWants(self.contain, CHECK, 'input'),
                i;
            this.inputArr = inputArr;   //更新input对象栈

            if (elmBtnOne === null) {
                elmBtnOne = self._getWants(self.contain, SUBMIT, '*')[0];
                self.elmBtn = elmBtnOne;
            }

            if (inputArr[0]) {

                // 如果存在需要检测的input标签,则给提交按钮添加禁用样式和属性
                for (i = 0; i < inputArr.length; i++) {
                    if (!self._eval(inputArr[i].getAttribute(CHECK))) {
                        return;
                    } else {
                        elmBtnOne.setAttribute(DISABLED, true);
                        self._addClass(elmBtnOne, self.disabledClass);
                    }
                }

                // 判断input栈里的属性是否已经有值了
                if (self._iteration(self.inputArr)) {
                    self.elmBtn.removeAttribute(DISABLED);
                    self._removeClass(self.elmBtn, self.disabledClass);
                } else {
                    self.elmBtn.setAttribute(DISABLED, true);
                    self._addClass(self.elmBtn, self.disabledClass);
                }
            }
        },

        _handle: function () {
            var self = this,
                inputArr = self._getWants(self.contain, CHECK, 'input'),
                elmBtnOne = self.elmBtn;

            self._event= {
                getLight: function () {
                    if (self._iteration(self.inputArr)) {
                        self.elmBtn.removeAttribute(DISABLED);
                        self._removeClass(self.elmBtn, self.disabledClass);
                    } else {
                        self.elmBtn.setAttribute(DISABLED, true);
                        self._addClass(self.elmBtn, self.disabledClass);
                    }
                }
            };

            for (var i = 0, l = inputArr.length; i < l; i++) {
                (function (i) {
                    if(inputArr[i].type=='checkbox'){
                        inputArr[i].addEventListener('change', self._event.getLight, false);
                    }else{
                        inputArr[i].addEventListener('input', self._event.getLight, false);
                        //inputArr[i].addEventListener('keyup', self._event.getLight, false);
                        //inputArr[i].addEventListener('paste', self._event.getLight, false);
                    }
                }(i));
            }
        },

        _iteration: function (inputArr) {
            var self = this,
                inputArr = self._getWants(self.contain, CHECK, 'input');
            for (var j = 0, l = inputArr.length; j < l; j++) {
                if(inputArr[j].type=='checkbox'){
                    if (!inputArr[j].checked) {
                        return false;
                    }
                }else{
                    if (!inputArr[j].value) {
                        return false;
                    }
                }
            }
            return true;
        },

        _eval: function (val) {
            return (new Function("return " + val))();
        },

        _getWants: function (oParent, oWants, tag) {
            var i,
                oEle = oParent.getElementsByTagName(tag),
                aResult = [];
            for (i = 0; i < oEle.length; i++) {

                if (oEle[i].getAttribute(oWants) && this._eval(oEle[i].getAttribute(oWants))) {
                    aResult.push(oEle[i]);
                }

            }
            return aResult;
        },
        _addClass: function (obj, cls) {
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
        },
        _removeClass: function (obj, cls) {
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
        },
        destroy: function () {
            var self = this,
                inputArr = self.inputArr;
            for (var i = 0, l = inputArr.length; i < l; i++) {
                if(inputArr[i].type=='checkbox'){
                    inputArr[i].removeEventListener('change', self._event.getLight, false);
                }else{
                    inputArr[i].removeEventListener('input', self._event.getLight, false);
                    //inputArr[i].removeEventListener('keyup', self._event.getLight, false);
                    //inputArr[i].removeEventListener('paste', self._event.getLight, false);
                }
            }
        }
    };

    return btnLight;
});