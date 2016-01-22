/*
 * Object.derive，产生一个Class的工厂方法
 * @param  {Function} constructor 构造函数
 * @param  {Object} proto     对象共有变量
 * @return {Function}      构造方法
 * @example
 *   var class1 = Object.derive(function(){ console.log(this.name) }, {name: 'class1'});
 *   var class2 = Object.derive({
 *     constructor: function() {
 *       console.log(this.name)
 *     }
 *   }, {name: 'class2'})
 */
Function.prototype.derive = function (constructor, proto) {
    if (typeof constructor === 'object') {
        proto = constructor;
        constructor = proto.constructor || function () {
        };
        delete proto.constructor;
    }
    var parent = this;
    var fn = function () {
        parent.apply(this, arguments);
        constructor.apply(this, arguments);
    };
    var tmp = function () {
    };
    tmp.prototype = parent.prototype;
    var fp = new tmp(),
        cp = constructor.prototype,
        key;
    for (key in cp) {
        if (cp.hasOwnProperty(key)) {
            fp[key] = cp[key];
        }
    }
    proto = proto || {};
    for (key in proto) {
        if (proto.hasOwnProperty(key)) {
            fp[key] = proto[key];
        }
    }
    fp.constructor = constructor.prototype.constructor;
    fn.prototype = fp;
    return fn;
};

var class1 = Object.derive(function () {
    console.log(this.name);
}, {name: 'class1'});

console.log(new class1());

//var class2 = Object.derive({
//    constructor: function () {
//        console.log(this.name)
//    }
//}, {name: 'class1'});
//
//console.log(new class2().constructor.toString());
