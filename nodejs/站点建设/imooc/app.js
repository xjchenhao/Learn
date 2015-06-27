var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var _ = require('underscore');

var Movie = require('./models/movie');

var port = process.env.PORT || 3000;
var app = express();

//连接本地数据库
mongoose.connect('mongodb://localhost/imooc');

//视图文件的路径
app.set('views', './views/pages');

//使用的模板引擎
app.set('view engine', 'jade');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//静态资源的路径
app.use(express.static(path.join(__dirname, 'bower_components')));

//设置端口号
app.listen(port);

//打印当前服务端口
console.log('imooc started on port ' + port);

//页面路由
app.get('/', function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }

        res.render('index', {
            title: 'imooc 首页',
            movies: movies
        });
    });
});

app.get('/list', function (req, res) {
    res.render('list', {
        title: 'imoooc 列表页',
        movies: [{
            _id: 1,
            title: '机械战警',
            doctor: '何塞.帕迪利亚',
            year: 2014,
            country: '美国',
            language: '英语',
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
        }, {
            _id: 1,
            title: '机械战警',
            doctor: '何塞.帕迪利亚',
            year: 2014,
            country: '美国',
            language: '英语',
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary: '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
        }]
    });
});

app.get('/movie/:id', function (req, res) {
    var id = req.params.id;

    Movie.findById(id, function (err, movie) {
        res.render('detail', {
            title: 'imooc ' + movie.title,
            movie: movie
        });
    });
});

//admin update movie
app.get('/admin/update/:id', function (req, res) {
    var id = req.params.id;

    if (id) {
        Movie.findById(id, function (err, movie) {
            res.render('admin', {
                title: 'imooc 后台更新',
                movie: movie
            });
        });
    }
});

//admin post movie
app.post('/admin/movie/new', function (res, req) {
    var id = res.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;
    if (id !== 'undefined') {
        Movie.findById(id, function (err, movie) {
            if (err) {
                console.log(err);
            }

            _movie = _.extend(movie, movieObj);
            _movie.save(function (err, movie) {
                if (err) {
                    console.log(err);
                }

                res.redirect('/movie/' + movie._id);
            });
        });
    } else {
        _movie = new Movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        });

        _movie.save(function (err, movie) {
            if (err) {
                console.log(err);
            }

            res.redirect('/movie/' + movie._id);
        });
    }
});

//list page
app.get('/admin/list', function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }

        res.render('index', {
            title: 'imooc 列表页',
            movies: movies
        });
    });
});