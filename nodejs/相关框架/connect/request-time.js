/**
 * 请求时间中间件
 *
 * 选项:
 *   - 'time'('Number'):超时阈值(默认:100)
 *
 * @param {Object} options
 * @api public
 */

module.exports = function (opts) {
    var time = opts.time || 100;

    return function (req, res, next) {
        var timer = setTimeout(function () {
            console.log('时间太长!', req.method, req.url);
        }, time);

        var resEnd = res.end;   // 保存原始函数的引用,接下来要重写它,做它的代理

        // 重写res.end
        res.end = function (chunk, encoding) {
            // 恢复原始函数的引用
            res.end = resEnd;

            // 清除超时计时器
            res.end(chunk, encoding);
            clearTimeout(timer);
        };

        next();
    };
};