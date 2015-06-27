/**
 * Created by chenhao on 15/6/27.
 */

var EventEmitter = require('events').EventEmitter;  // EventEmitter是events暴露的唯一的接口

var life = new EventEmitter();

//默认最大支持绑定10个相同事件,通过setMaxListeners可修改.(超过node会发出警告,防止内存溢出)
life.setMaxListeners(11);

//事件绑定可以用on,也可以用addEventListener代替
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' 倒水');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' 做饭');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' 洗衣服');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' 揉肩');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' ...5');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' ...6');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' ...7');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' ...8');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' ...9');
});
life.on('求安慰', function (who) {
    console.log('给 ' + who + ' ...10');
});
life.on('求安慰', function () {
    console.log('你想累死我啊!');
});

function clothes(who){
    console.log('给 ' + who + ' 买衣服');
}
life.on('求溺爱', clothes);
life.on('求溺爱', function (who) {
    console.log('给 ' + who + ' 交工资');
});

//触发事件
console.log('触发"求安慰"事件');
var hasConfortListener = life.emit('求安慰', '汉子');
console.log('');
console.log('触发"求溺爱"事件:');
var hasLovedListener = life.emit('求溺爱', '妹子');

//查看事件是否被监听
var hasPlayedListener = life.emit('求玩坏');

console.log('');
console.log('判断事件监听情况:');
console.log(hasConfortListener);    // true
console.log(hasLovedListener);  // true
console.log(hasPlayedListener); //false

//移除事件
console.log('');
console.log('移除事件后的"求溺爱"事件:');
life.removeListener('求溺爱',clothes);
life.emit('求溺爱', '妹子');

//查看事件个数
console.log('');
console.log('查看事件个数:');
console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life,'求安慰'));

//移除所有事件
life.removeAllListeners('求安慰'); // 不传递事件名会把所有都移除,写入则移除指定事件.
console.log('');
console.log('移除"求安慰"事件后,查看事件绑定个数:');
console.log(life.listeners('求安慰').length);