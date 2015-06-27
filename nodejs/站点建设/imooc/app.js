var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

//视图文件的路径
app.set('views', './views/pages');

//使用的模板引擎
app.set('view engine', 'jade');

/*
 * 格式化表单
 * 新版express已不支持app.use(express.bodyParser());
 * 需要安装body-parser模块，npm install body-parser
 * 然后使用代码为：app.use(require('body-parser').urlencoded({extended: true}))
 * */
//app.use(express.bodyParser());

//静态资源的路径
app.use(express.static(path.join(__dirname, 'bower_components')));

//设置端口号
app.listen(port);

//打印当前服务端口
console.log('imooc started on port ' + port);

//页面路由
app.get('/', function (req, res) {
    res.render('index', {
        title: 'imoooc 首页',
        movies: [{
            title: '机械战警',
            _id: 1,
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg'
        }, {
            title: '机械战警',
            _id: 1,
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg'
        }, {
            title: '机械战警',
            _id: 1,
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg'
        }, {
            title: '机械战警',
            _id: 1,
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg'
        }, {
            title: '机械战警',
            _id: 1,
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg'
        }]
    });
});

app.get('/list', function (req, res) {
    res.render('list', {
        title: 'imoooc 列表页',
        movies:[{
            _id:1,
            title: '机械战警',
            doctor:'何塞.帕迪利亚',
            year:2014,
            country:'美国',
            language:'英语',
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
        },{
            _id:1,
            title: '机械战警',
            doctor:'何塞.帕迪利亚',
            year:2014,
            country:'美国',
            language:'英语',
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
        }]
    });
});

app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: 'imoooc 详情页',
        movie: {
            title: '机械战警',
            doctor:'何塞.帕迪利亚',
            year:2014,
            country:'美国',
            language:'英语',
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
        }
    });
});

app.get('/admin/list', function (req, res) {
    res.render('admin', {
        title: 'imoooc 后台录入页',
        movie:{
            title: '',
            doctor:'',
            year:'',
            country:'',
            language:'',
            poster: '',
            flash: '',
            summary:''
        }
    });
});