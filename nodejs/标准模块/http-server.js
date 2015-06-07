/**
 * Created by chenhao on 15/6/6.
 */

var http = require('http');

http.createServer(function (reg, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Nodejs');
    res.end();
}).listen(2015);