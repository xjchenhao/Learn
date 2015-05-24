/**
 * Created by chenhao on 15/5/24.
 */

var queryString = require('querystring');
console.log(queryString);

var urlQueryJson = {
    name: 'abc',
    course: ['a', 'b'],
    form: ''
};
console.log(queryString.stringify(urlQueryJson));           //转换成url传参
console.log(queryString.stringify(urlQueryJson, '&&'));      //用&&串联键值
console.log(queryString.stringify(urlQueryJson, null, '==')); //用==来连接键值

var urlQuery = queryString.stringify(urlQueryJson, null, '==');
console.log(queryString.parse(urlQuery, null, '=='));         //传参与stringify对应

console.log(queryString.escape('哈哈'));                      //编译
console.log(queryString.unescape('%E5%93%88%E5%93%88'));     //反编译