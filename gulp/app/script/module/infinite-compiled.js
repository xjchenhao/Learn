/**
 * 无限下拉加载      1.1.8
 * eg:
 * <div id="page">
 *      <ul>
 *          <li>我是文章标题</li>
 *          <li>我是文章标题</li>
 *          <li>我是文章标题</li>
 *          <li>我是文章标题</li>
 *          <li>我是文章标题</li>
 *          <li>我是文章标题</li>
 *      </ul>
 * </div>
 *
 * var infinite = new Infinite({
 *     box: document.getElementById('page'),
 *     con: document.querySelector('#page ul'),
 *     deviation:0,
 *     callback: function () {
 *         var isLoging = false;
 *         $.ajax({
 *             url: "./ajax/list.json",
 *             type: "post",
 *             dataType: "json",
 *             async: false,
 *             success: function (data) {
 *                 var tpl = document.getElementById('pageDate').innerHTML;
 *                 var myTemplate = Handlebars.compile(tpl);
 *                 document.querySelector('#page ul').innerHTML += myTemplate(data);
 *                 isLoging = true;
 *             }
 *         });
 *         return isLoging;
 *     }
 * });
 * Ps:
 *  box              elementObj，对应的容器dom,接收js的元素对象（必填）
 *  con              elementObj，加载数据的容器（必填）
 *  deviation        number,调整滚动条的偏差（特殊情况使用，可无视）
 *  callback         function，滚动到底部的回调函数，需要return true告诉组件数据加载完毕!
 *  destroy          function，销毁对象内存回收
 */
'use strict';

(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () {
            return factory(root);
        });
    } else {
        root.Infinite = factory(root, {});
    }
})(undefined, function (root) {
    var Infinite = function Infinite(opts) {
        this._opts = opts;
        this._setting();
        this._bindHandler();
    };
    Infinite.prototype._setting = function () {
        var opts = this._opts;

        /*初始化user data*/
        this.box = opts.box;
        this.con = opts.con;
        this.deviation = opts.deviation || 0;
        this.callback = opts.callback;
    };
    Infinite.prototype._bindHandler = function () {
        var self = this;
        self.isLoging = true;
        self.elBody = document.getElementsByTagName('body')[0];
        self.isBody = self.box === self.elBody;
        self.boxHeight = self.box.clientHeight;
        self.event = {
            scroll: function scroll(e) {
                // 对于影藏盒子初始化时 高度为零，为零时 滚动动态计算高度
                !self.boxHeight && (self.boxHeight = self.box.clientHeight);
                var contentHeight = self.isBody ? self.elBody.scrollHeight : self.con.clientHeight,
                    scrollY = self.isBody ? self.elBody.scrollTop : Number(e.target.scrollTop);
                if (scrollY >= contentHeight - self.boxHeight + self.deviation && self.isLoging === true) {
                    self.isLoging = false;
                    self.isLoging = self.callback();
                }
            }
        };

        (self.isBody ? document : self.box).addEventListener('scroll', self.event.scroll, false);
    };
    Infinite.prototype.destroy = function () {
        var self = this;
        if (self.isBody) {
            self.box.removeEventListener('scroll', self.event.scroll, false);
        } else {
            self.box.removeEventListener('scroll', self.event.scroll, false);
        }
    };
    return Infinite;
});

//# sourceMappingURL=infinite-compiled.js.map