var crypto = require('crypto');
//--------------------------------------------------【不可逆的加密】

//需要加密的文本
var text = '123';

//创建并返回一个hash对象，它是一个指定算法的加密hash，用于生成hash摘要。
var hasher = crypto.createHash('md5');

//更新hash的内容为指定的data。当使用流数据时可能会多次调用该方法。
hasher.update(text);

//计算所有传入数据的hash摘要。参数encoding（编码方式）可以为'hex', 'binary' 或者'base64'。
var hashmsg = hasher.digest('hex');//hashmsg为加密之后的数据

console.log(hashmsg);

//--------------------------------------------------【对称加/减密】
var password = '123';

// 用`blowfish`的方式加密,key为`999`,一般会存储成一个`.pem`文件来读取
var cipher = crypto.createCipher('blowfish', '999');

//往cipher实例中添加数据，第一个参数是填充的数据，第二个参数表示传入数据的格式，可以是’utf8’, ‘ascii’ 或 'binary’，默认是 'binary’。第三个参数是返回block的数据格式。
var crypted = cipher.update(password, 'utf8', 'hex');

//完整的加密结果
crypted += cipher.final('hex');
console.log('加密的: ' + crypted);

var decipher = crypto.createDecipher('blowfish', '999');
var decrypted = decipher.update(crypted, 'hex', 'binary');
decrypted += decipher.final('binary');
console.log('解密的: ' + decrypted);