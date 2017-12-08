//--------------------------------------------------[引入依赖]
'use strict';

var gulp = require('gulp'),
    //引入gulp
$ = require('gulp-load-plugins')(),
    //动态载入依赖
args = require('yargs').argv,
    //获取CLI参数
del = require('del'),
    //删除文件&文件夹
fisToGulpHtml = require('./fisToGulp-html'),
    //fis的html特性移植
fisToGulpJs = require('./fisToGulp-js'),
    //fis的js特性移植
webpackConfig = require("./webpack.config.js"); //引入webpack的配置

//--------------------------------------------------[任务流配置]

//--------------------------------------------------[CLI接口]
var root = './' + (args.d || '.www'),
    //服务器运行目录
port = args.p || 8080,
    //端口号
livereload = !!args.l,
    //是否动态刷新
clear = !!args.c; //是否清除目录

gulp.task('default', function () {
    // 将你的默认的任务代码放在这
});

gulp.task('release', ['fisToGulp'], function () {

    gulp.src(root + '/views/pages/*.html').pipe(gulp.dest(root));

    var myConfig = Object.create(webpackConfig);
    return webpack(
    // configuration
    myConfig, function (err, stats) {
        // if(err) throw new gutil.PluginError("webpack", err);
        // gutil.log("[webpack]", stats.toString({
        //	 // output options
        // }));
        //callback();
    });
});

gulp.task('fisToGulp', function () {

    var filterViewsHtml = $.filter('**/views/pages/*.html', { restore: true }),
        filterRouteFile = $.filter('**/script/{route,page}/*.js', { restore: true });

    return gulp.src('./app/**').pipe(filterViewsHtml).pipe(fisToGulpHtml()).pipe(filterViewsHtml.restore).pipe(filterRouteFile).pipe(fisToGulpJs()).pipe(filterRouteFile.restore).pipe(gulp.dest(root));
});

var webpack = require("webpack");
gulp.task('webpack', function () {
    var myConfig = Object.create(webpackConfig);
    return webpack(
    // configuration
    myConfig, function (err, stats) {
        // if(err) throw new gutil.PluginError("webpack", err);
        // gutil.log("[webpack]", stats.toString({
        //	 // output options
        // }));
        //callback();
    });
});

//启动一个Web服务器
gulp.task('server', function () {

    //$.connect.serverClose();

    if (clear) {
        del.sync(root + '/');
    }

    $.connect.server({
        root: root,
        livereload: livereload,
        port: port
    });
});

//# sourceMappingURL=gulpfile-compiled.js.map