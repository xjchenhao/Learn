var fs = require('fs');

// 同步读取目录(虽然这个demo很简单,但是为了学习node.js中最重要也是最有挑战的部分,还是用下面这种异步的方式来处理)
//console.log(fs.readdirSync(__dirname));

// 异步读取目录
fs.readdir(__dirname, function (err, files) {
    console.log(files);
});


var stdin = process.stdin,
    stdout = process.stdout;

var filesArr = [],  // 遍历出来的文件名数组
    statsArr = [];  // 存放各文件状态的数组

fs.readdir(process.cwd(), function (err, files) {
    console.log('');

    if (!files.length) {
        return console.log('没有文件可显示\n');
    }

    console.log('选择您希望看到哪些文件或目录\n');

    filesArr = files;
    file(0);
});

// 遍历执行文件and文件夹
function file(i) {
    var fileName = filesArr[i];
    fs.stat(__dirname + '/' + fileName, function (err, stats) {

        statsArr[i] = stats;

        // 判断是否是文件夹
        if (stats.isDirectory()) {
            console.log(i + ' 文件夹:' + fileName);
        } else {
            console.log(i + ' 文件:' + fileName);
        }

        i++;

        // 最后一个文件[夹]则开始`标准输入`.
        if (i == filesArr.length) {
            read();
        } else {
            file(i);
        }
    });
}


// 等待用户选择编号
function read() {
    console.log('');
    stdout.write('输入您的选择:');
    stdin.resume();
    stdin.setEncoding('utf8');

    //获取用户输入的选项
    stdin.on('data', option);
}

// 根据选择输出内容
function option(data) {
    var fileName = filesArr[Number(data)];
    if (!fileName) {
        stdout.write('选择错误,请重新输入您的选择:');
    } else {

        if (statsArr[Number(data)].isDirectory()) {
            fs.readdir(__dirname + '/' + fileName, function (err, files) {
                console.log('');
                console.log('   (' + files.length + 'files)');
                files.forEach(function(file){
                    console.log('       -'+file);
                });
                console.log('');
            });
        }else{
            fs.readFile(__dirname + '/' + fileName, 'utf8', function (err, data) {
                console.log('');
                console.log(data.replace(/(.*)/g, '  $1'));
            });
        }

        stdin.pause();  // 结束命令行,恢复初始状态
    }
}