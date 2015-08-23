var http = require('http'),
    url = require('url');

var items = [];   // 用一个常规的javascript数组存放数据

var server = http.createServer(function (req, res) {
    res.write('Hello World');

    /*
     * 默认情况下,data时间会提供Buffer对象,这是Node版的字节数组.
     * 而一般情况我们并不需要二进制数据,所以最好将流编码设定为ascii或utf8;
     * 这样data事件会给出字符串.
     * */
    req.setEncoding('utf8');

    switch (req.method) {
        case 'POST':
            var item = '';

            req.on('data', function (chunk) {
                item += chunk;
            });

            req.on('end', function () {
                items.push(item);
                res.end('\nOK\n');
            });

            break;

        case 'GET':
            items.forEach(function (item, i) {
                res.write(i + ') ' + item + '\n');
            });
            res.end();

            break;
    }
});

server.listen(3000);