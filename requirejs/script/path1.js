/**
 * Created by Administrator on 2015/2/28.
 */
define(function (require, exports, module) {
    alert('path1');
    //require声明会在预编译时最先执行，多次调用只引入一次
    require('path/path2');
    require('./path/path2');        //require上的./路径貌似没效果
});