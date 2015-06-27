var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);

console.log('imooc started on port ' + port);

//index page
app.get('/', function (req, res) {
    res.render('index', {
        title: 'imoooc 首页'
    });
});

app.get('/list', function (req, res) {
    res.render('list', {
        title: 'imoooc 列表页'
    });
});

app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'imoooc 详情页'
    });
});

app.get('/admin/list', function (req, res) {
    res.render('admin', {
        title: 'imoooc 后台录入页'
    });
});