/* 表单验证    2.1.3*/

(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function (exports) {
            return factory(root, exports);
        });
    } else {
        root.Verifyfrom = factory(root, {});
    }
})(this, function (root, Verifyfrom) {

    /*********************** 策略对象 ***********************/
    var strategies = {
            isNonEmpty: function (value, errorMsg) {
                if (value === '') {
                    failure && failure(this, errorMsg);
                    return errorMsg;
                }
                succeed && succeed(this);
            },
            minLength: function (value, length, errorMsg) {
                if (value.length < length) {
                    failure && failure(this, errorMsg);
                    return errorMsg;
                }
                succeed && succeed(this);
            },
            maxLength: function (value, length, errorMsg) {
                if (value.length > length) {
                    failure && failure(this, errorMsg);
                    return errorMsg;
                }
                succeed && succeed(this);
            },
            isReg: function (value, reg, errorMsg) {
                var reg = new RegExp(reg);
                if (!reg.test(value)) {
                    failure && failure(this, errorMsg);
                    return errorMsg;
                }
                succeed && succeed(this);
            },
            serverVerify: function (value, requestFunc) {
                var errorMsg = requestFunc(value);
                if (errorMsg) {
                    failure && failure(this, errorMsg);
                    return errorMsg;
                }
                succeed && succeed(this);
            }
        },
        verifyStart = true, // 触发表单校验start方法的模拟blur事件时,遇到错误就关闭校验状态,阻止进行后面的校验
        eventFunc = [],   // blur事件的方法栈
        succeed = null, // 表单元素校验成功回调函数,函数有一个回调参数,即校验成功的表单元素
        failure = null; // 表单元素校验失败回调函数,函数有两个回调参数,第一个是校验失败的表单元素,第二个是错误的描述文字

    var Validator = function (obj) {
        var obj = obj || {};
        this.domCache = [];
        this.funcCache = [];
        this.isBlurVerify = obj.isBlurVerify || false;
        this.succeed = succeed = obj.succeed || null;
        this.failure = failure = obj.failure || null;
    };

    Validator.prototype.add = function (dom, rules) {
        var self = this;

        for (var i = 0, rule; rule = rules[i++];) {

            (function (rule) {

                // 生成校验函数
                var verifyFunc = function () {
                    var strategAry = rule.strategy.split(':'),
                        strategy = strategAry.shift();  // 取出规则名

                    strategAry.unshift(dom.value);  // 放入元素的值
                    if (strategy !== 'serverVerify') {
                        strategAry.push(rule.errorMsg);  // 放入错误信息
                    } else {
                        strategAry.push(rule.requestFunc);  // 放入错误信息
                    }
                    return strategies[strategy].apply(dom, strategAry);
                };

                // 校验函数推入方法栈
                if (self.isBlurVerify) {
                    eventFunc.push(verifyFunc);
                }
                self.funcCache.push(verifyFunc);
            }(rule));
        }

        // 添加blur方法
        if (self.isBlurVerify) {
            dom.addEventListener('blur',abc, false);

            // 推入被绑定blur的元素栈
            self.domCache.push(dom);
        }
    };

    Validator.prototype.start = function () {
        verifyStart = true;
        if (this.isBlurVerify) {
            for (var i = 0, dom; dom = this.domCache[i++];) {
                this._trigger(dom);
                if (!verifyStart) {
                    return false;
                }
            }
            return true;
        } else {
            for (var i = 0, validatorFunc; validatorFunc = this.funcCache[i++];) {
                var errorMsg = validatorFunc();
                if (errorMsg) {
                    return errorMsg;
                }
            }
        }
    };

    Validator.prototype.destroy=function(){
        var self=this;
        self.domCache.forEach(function(obj){
            console.log(obj);
            obj.removeEventListener('blur',abc,false);
        });
    };

    Validator.prototype._inArray = function (needle, array) {
        for (var i in array) {
            if (needle === array[i]) {
                return true;
            }
        }
        return false;
    };

    Validator.prototype._trigger = function (obj) {
        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('blur', true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        obj.dispatchEvent(event);
    };

    function abc(){
        for (var i = 0, func; func = eventFunc[i++];) {
            if (func()) {
                verifyStart = false;
                return false;
            }
        }
    }
    return Validator;
});