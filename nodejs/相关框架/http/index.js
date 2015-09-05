var http = require('http'),
    fs = require('fs');

/*
 * 创建服务器
 * */

var server = http.createServer(function (req, res) {

    // 查看图片
    if (req.method === 'GET' && '/images' === req.url.substr(0, 7) && '.png' == req.url.substr(-4)) {

        // 异步获取图片对象状态
        fs.stat(__dirname + req.url, function (err, stat) {

            // 文件不存在返回404
            if (err || !stat.isFile()) {
                res.writeHead(404);
                res.end('Not found');
                return;
            }

            serve(__dirname + req.url, 'image/png');
        });
        return;
    }

    // 显示首页
    if (req.method === 'GET' && req.url === '/') {
        serve(__dirname + '/index.html', 'text/html');
        return;
    }

    // 返回404
    res.writeHead(404);
    res.end('Not found');

    // 返回资源
    function serve(path, type) {

        // 设置文件头信息
        res.writeHead(200, {'Content-Type': type});

        // 流(Stream)结束后返回res
        fs.createReadStream(path).pipe(res);
    }


});

// 设置端口号
server.listen(3000, function () {
    console.log('服务器启动成功,端口号为:' + 3000);
});