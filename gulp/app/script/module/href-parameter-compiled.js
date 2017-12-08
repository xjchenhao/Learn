/**
 * href参数读写      1.0.0
 */
'use strict';

(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () {
            return factory(root, {});
        });
    } else {
        root.hrefParameter = factory(root, {});
    }
})(undefined, function (root) {

    var hrefParameter = (function () {

        var _create = function _create(href) {
            var href = href || root.location.href; // 如果未传参,就取页面的url

            return {
                get: function get(key) {
                    var patternOne = new RegExp(key + '\\=(.*?)(#|&|$)', 'ig'),
                        patternAll = new RegExp('\\?(.*?)(#|$)', 'ig');

                    if (patternOne.test(href)) {
                        return RegExp.$1;
                    }
                    if (patternAll.test(href)) {
                        return RegExp.$1;
                    }

                    return '';
                },

                set: function set(key, val) {
                    var pattern = key + '=([^&]*)',
                        replaceText = key + '=' + val;

                    if (href.match(pattern)) {
                        var tmp = new RegExp('(' + key + ')=([^&#]*)', 'gi');
                        tmp = href.replace(tmp, replaceText);
                        return tmp;
                    } else {
                        var patternAll = new RegExp('(.*?)(#|$)', 'i');
                        if (href.indexOf('?') != -1) {
                            return href.replace(patternAll, '$1&' + replaceText + '$2');
                        } else {
                            return href.replace(patternAll, '$1?' + replaceText + '$2');
                        }
                    }
                },

                del: function del(key) {
                    var pattern = key + '=([^&#]*)',
                        patternAll = new RegExp('\\?(.*?)(#|$)', 'ig');

                    if (href.match(pattern)) {
                        var tmp = new RegExp('(' + key + ')=([^&#]*)', 'gi');
                        tmp = href.replace(tmp, '');
                        return tmp;
                    }

                    if (href.match(patternAll)) {
                        return href.replace(RegExp.$1, '');
                    }

                    return href;
                }
            };
        };

        return {
            create: _create,

            get: function get(key) {
                var href = this.create();
                return href.get(key);
            },

            set: function set(key, val) {
                var href = this.create();
                return href.set(key, val);
            },

            del: function del(key) {
                var href = this.create();
                return href.del(key);
            }
        };
    })();

    return hrefParameter;
});

//# sourceMappingURL=href-parameter-compiled.js.map