'use strict';

var through = require('through2');
var pluginError = require('gulp-util').PluginError;

var fs = require('fs'),
    path = require("path");

module.exports = function () {

    return through.obj(function (file, enc, cb) {

        // 判断文件类别,生成文件内容或返回结果
        if (file.isNull()) {
            cb(null, file);
        } else if (file.isBuffer()) {
            //file.contents = Buffer.concat([file.contents, prefixText]);

        } else if (file.isStream()) {
                throw new pluginError('test', 'Please to buffer!');
            }

        var fileContents = file.contents.toString('utf8'),
            // 文件内容
        regImportHtml = /<link rel="import" href="(.*)\?__inline">/ig,
            // 正则:匹配html上内嵌的模板链接
        placeholderMark = '',
            // 模板的占位标签
        includesPath = '',
            // 获取html上内嵌的模板链接
        relativePath = path.dirname(file.path),
            // 获取相对路径
        absolutePath = '',
            // 获取文件的绝对路径
        result = {};

        while ((result = regImportHtml.exec(fileContents)) != null) {
            placeholderMark = result[0];
            includesPath = result[1];
            absolutePath = path.join(relativePath, includesPath);

            // 非文件抛出错误
            if (!fs.existsSync(absolutePath)) {
                throw new pluginError('test', 'File does not exist!\nerrorFile: ' + file.path + '\nerrorPath: ' + includesPath);
            }

            fileContents = fileContents.replace(placeholderMark, fs.readFileSync(absolutePath));
        }

        file.contents = new Buffer(fileContents);
        // 返回结果
        cb(null, file);
    });
};

//# sourceMappingURL=fisToGulp-html-compiled.js.map