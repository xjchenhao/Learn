/**
 * Created by chenhao on 15/6/7.
 */

var http = require('http');
var url = 'http://www.imooc.com/learn/348';

/*获取页面所有的html*/
//http.get(url,function(res){
//    var html='';
//
//    res.on('data',function(data){
//        html+=data;
//    });
//
//    res.on('end',function(){
//        console.log(html);
//    });
//}).on('error',function(){
//    console.log('获取课程出错');
//});

/*
 * 获取页面部分数据
 * ps:依赖第三方的cheerio模块(全局安装该模块会`Error: Cannot find module 'cheerio'`)
 */
var cheerio = require('cheerio');

function filterChapters(html) {
    var $ = cheerio.load(html),
        chapters = $('.chapter'),
        courseData = [];

    chapters.each(function (item) {
        var chapter = $(this),
            chapterTitle = chapter.find('strong').text(),
            videos = chapter.find('.video').children('li'),
            chapterData = {
                chapterTitle: chapterTitle,
                videos: []
            };

        videos.each(function (item) {
            var video = $(this).find('.studyvideo'),
                videoTitle = video.text(),
                videoId = video.attr('href').split('video/')[1];

            chapterData.videos.push({
                videoTitle: videoTitle,
                id: videoId
            });
        });
        courseData.push(chapterData);
    });
    return courseData;
}

function printChapterInfo(courseData) {
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle;

        console.log(chapterTitle + '\n');

        item.videos.forEach(function (video) {
            console.log('[' + video.id + ']' + video.videoTitle + '\n');
        });
    });
}

http.get(url, function (res) {
    var html = '';

    res.on('data', function (data) {
        html += data;
    });

    res.on('end', function () {
        var courseData = filterChapters(html);

        printChapterInfo(courseData);
    });
}).on('error', function () {
    console.log('获取课程出错');
});