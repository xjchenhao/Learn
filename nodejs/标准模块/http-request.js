var http = require('http');
var queryString = require('querystring');

// 设置传参
var postData = queryString.stringify({
    'thread_id': '1308725600797589573',
    'parent_id': '',
    'nonce': '552be4a74f756',
    'message': '啊哈哈成功了~~',
    'v': '15.4.27'
});

// request头信息
var options = {
    hostname: 'http://xjchenhao.duoshuo.com',
    port: 80,
    path: '/api/posts/create.json',
    method: 'POST',
    headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'duoshuo_unique=42b0f1eb49a6c716',
        'Host': 'xjchenhao.duoshuo.com',
        'Origin': 'http://www.cnblogs.com',
        'Pragma': 'no-cache',
        'Referer': 'http://www.cnblogs.com/xjchenhao/p/4195076.html',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36'
    }
};

var req = http.request(options, function (res) {
    console.log('Status:' + res.statusCode);    // 获得状态码
    console.log('headers:' + JSON.stringify(res.headers));  // 获得请求头信息

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });

    res.on('end', function () {
        console.log('评论完毕!');
    });
});

req.on('error', function (e) {
    console.log('Error:' + e.message);
});

req.write(postData);

req.end();