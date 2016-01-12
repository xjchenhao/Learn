/* 事件模块    1.0.0*/
(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () {
            return factory(root);
        });
    } else {
        root.LoadDate = factory(root, {});
    }
})(this, function (root) {
    var Event = (function () {

        var Event,
            _default = 'default';   // 默认值
        Event = (function () {
            var _listen,
                _trigger,
                _remove,
                _shift = Array.prototype.shift,
                _unshift = Array.prototype.unshift,
                namespaceCache = {},
                _create,
                each = function (ary, fn) {
                    var ret;
                    for (var i = 0, l = ary.length; i < l; i++) {
                        var n = ary[i];
                        ret = fn.call(n, i, n);
                    }
                    return ret;
                };

            // 推入订阅的事件栈
            _listen = function (key, fn, cache) {

                // 无该事件的订阅则创建
                if (!cache[key]) {
                    cache[key] = [];
                }

                // 推入
                cache[key].push(fn);

                //注意:cache是对象,对象参数是对象的一个引用,内部修改是会影响到外面的
            };

            // 移除订阅
            _remove = function (key, cache, fn) {
                if (cache[key]) {
                    /*
                     * 判断有无传函数
                     *   有:移除事件栈中的该函数
                     *   无:移除事件栈中所有的函数
                     * */
                    if (fn) {
                        for (var i = cache[key].length; i >= 0; i--) {
                            if (cache[key] === fn) {
                                cache[key].splice(i, 1);
                            }
                        }
                    } else {
                        cache[key] = [];
                    }
                }
            };

            // 发布订阅
            _trigger = function () {
                var cache = _shift.call(arguments), // 获取事件栈
                    key = _shift.call(arguments),   // 获取事件名
                    args = arguments,   // 获取发布时的传参
                    _self = this,   // 指向函数最后return出的对象,模块接口
                    stack = cache[key]; // 事件栈中对应该事件名的所有函数

                if (!stack || !stack.length) {
                    return;
                }


                // 遍历事件栈中对应该事件名的所有函数,并在模块接口对象的环境下执行
                return each(stack, function () {
                    return this.apply(_self, args);
                });
            };

            // 传入事件的命名空间名,返回模块api
            _create = function (namespace) {
                var namespace = namespace || _default;
                var cache = {},
                    offlineStack = [],  // 存储已经发布的函数栈
                    ret = {
                        listen: function (key, fn, last) {
                            // 创建监听
                            _listen(key, fn, cache);

                            // 后面的逻辑都是处理先发布后订阅的离线事件,如果没有则直接return跳出
                            if (offlineStack === null) {
                                return;
                            }

                            // 根据last是否为'last'决定是只拿最后一个函数,还是遍历执行所有已发布的函数
                            if (last === 'last') {
                                offlineStack.length && offlineStack.pop()();
                            } else {
                                each(offlineStack, function () {
                                    this();
                                });
                            }

                            // 结束以后置空
                            offlineStack = null;
                        },
                        one: function (key, fn, last) {

                            // 移除所有同名事件
                            _remove(key, cache, fn);

                            // 重新创建监听
                            this.listen(key, fn, last);
                        },
                        remove: function (key, fn) {
                            // 移除指定事件
                            _remove(key, cache, fn);
                        },
                        trigger: function () {
                            var fn,
                                args,
                                _self = this;   // 指向模块返回api的对象

                            _unshift.call(arguments, cache);    // 把订阅函数栈也添加到参数集合中,便于模块内部调用时获取
                            args = arguments;

                            fn = function () {
                                return _trigger.apply(_self, args);
                            };

                            // 如果offlineStack不为空,则把发布推入发布函数栈
                            if (offlineStack) {
                                return offlineStack.push(fn);
                            }
                            return fn();
                        }
                    };

                //判断是否传了命名空间,一般情况都为true,因为默认的命名空间是'default',是有值的
                return namespace ? (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace] = ret) : ret;
            };

            return {
                create: _create,
                one: function (key, fn, last) {
                    var event = this.create();
                    event.one(key, fn, last);
                },
                remove: function (key, fn) {
                    var event = this.create();
                    event.remove(key, fn);
                },
                listen: function (key, fn, last) {
                    var event = this.create();
                    event.listen(key, fn, last);
                },
                trigger: function () {
                    var event = this.create();
                    event.trigger.apply(this, arguments);
                }
            }
        }());

        return Event;
    }());
    return Event;
});