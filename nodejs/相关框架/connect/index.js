/**
 * 模块依赖
 */
var connect = require('connect'),
    fs = require('fs'),
    serveStatic = require('serve-static'),  // 处理静态文件的模块
    morgan = require('morgan'), // 记录日志的模块
    time = require('./request-time'); // 自定义的超时中间件

/**
 * 创建服务器
 */
var server = connect();

/**
 * 日志记录
 */
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

server.use(morgan('combined', {stream: accessLogStream}));

/**
 * 处理静态文件
 */
server.use(serveStatic(__dirname + '/website'));

/**
 * 时间超时中间件
 */
server.use(time({time: 500}));

// 快速响应
server.use(function (req, res, next) {
    if (req.url == '/a') {
        res.writeHead(200);
        res.end('Fast!');
    } else {
        next();
    }
});

// 慢速响应
server.use(function (req, res, next) {
    if (req.url == '/b') {
        setTimeout(function () {
            res.writeHead(200);
            res.end('Slow!');
        }, 1000);
    } else {
        next();
    }
});

/**
 * 设置端口号
 */
server.listen(3000, function () {
    console.log('服务器启动成功,端口号为:' + 3000);
});
