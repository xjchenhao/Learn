'use strict';

var webpack = require('webpack'),
    glob = require('glob');

var entryObj = glob.sync('./.www/script/route/**.js'),
    formatEntry = {};

entryObj.forEach(function (val) {
    var reg = /(.*\/)(.*)\.js/i;
    if (reg.test(val)) {
        formatEntry[RegExp.$2] = val;
    }
});

var chunks = Object.keys(formatEntry);
module.exports = {
    //插件项
    plugins: [
    //new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common', // 将公共模块提取，生成名为`common`的chunk
        chunks: chunks,
        minChunks: 2 // 提取所有entry共同依赖的模块
    }), new webpack.ProvidePlugin({
        //mobilebone : './.www/script/mobilebone.js'
    })],
    //页面入口文件配置
    entry: formatEntry,
    //入口文件输出配置
    output: {
        path: '.www/script/route',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [{ test: require.resolve("./app/script/fastclick"), loader: "exports?FastClick" }]
    },
    //其它解决方案配置
    resolve: {
        root: './.www/script', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            'mobilebone': 'mobilebone.js'
        }
    },
    externals: {
        "zepto": "$"
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map