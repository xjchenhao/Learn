/**
 * Created by Administrator on 2015/2/28.
 */
define(function (require, exports, module) {
    var cssUrl = require.toUrl("style.css");        //这个其实是不存在的文件
    alert(cssUrl);                      //但是依然会生成完整的路径
});