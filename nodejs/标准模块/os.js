var os = require('os');

//返回操作系统的主机名
console.log('返回操作系统的主机名:\n' + os.hostname());

//返回操作系统名称
console.log('返回操作系统名称:\n' + os.type());

//返回操作系统平台
console.log('返回操作系统平台:\n' + os.platform());

//返回操作系统 CPU 架构，可能的值有 “x64"、"arm” 和 “ia32”
console.log('返回操作系统 CPU 架构:\n' + os.arch());

//返回操作系统的发行版本
console.log('返回操作系统的发行版本:\n' + os.release());

//返回操作系统运行的时间，以秒为单位
console.log('返回操作系统运行的时间，以秒为单位:\n' + os.uptime());

//返回一个包含 1、5、15 分钟平均负载的数组
console.log('返回一个包含 1、5、15 分钟平均负载的数组:\n' + os.loadavg());

//返回系统内存总量，单位为字节
console.log('返回系统内存总量，单位为字节:\n' + os.totalmem());

//返回操作系统空闲内存量，单位是字节
console.log('返回操作系统空闲内存量，单位是字节:\n' + os.freemem());

//返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）
//console.log(os.cpus());

//获取网络接口的一个列表信息
//console.log(os.networkInterfaces());

//一个定义了操作系统的一行结束的标识的常量
console.log('一个定义了操作系统的一行结束的标识的常量:\n' + os.EOL);

//返回系统临时目录
console.log('返回系统临时目录:\n' + os.tmpdir());

//返回 CPU 的字节序，可能的是 “BE” 或 “LE”
console.log('返回 CPU 的字节序:\n' + os.endianness());


