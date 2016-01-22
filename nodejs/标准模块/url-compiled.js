/**
 * Created by chenhao on 15/5/24.
 */

'use strict';

var url = require('url');
console.log(url);

console.log(url.parse('http://www.imooc.com/video/6710?a=1&b=2#abc')); //打印url的各项信息
console.log(url.parse('http://www.imooc.com/video/6710?a=1&b=2#abc', true)); //参数query转成json对象输出
console.log(url.parse('//www.imooc.com/video/6710?a=1&b=2#abc', true, true)); //在不确定url协议是http还是https还是其他多时候用

//# sourceMappingURL=url-compiled.js.map