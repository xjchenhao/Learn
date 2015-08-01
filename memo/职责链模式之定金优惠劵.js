/*********************** 职责链构造函数 ***********************/
var Chain = function (fn) {
    this.fn = fn;
    this.successor = null;
};

// 指定在职责链中的下一个节点
Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor;
};

// 传递请求给某个节点
Chain.prototype.passRequest = function () {
    var ret = this.fn.apply(this, arguments);

    if (ret === true) {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments);
    }

    return ret;
};

// 暴露接口,实现异步职责链
Chain.prototype.next=function(){
  return this.successor&&this.successor.passRequest.apply(this.successor,arguments);
};


/*********************** 调用 ***********************/

var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500元定金预购,得到100优惠券');
        return false;
    }
    return true;
};

var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
        console.log('200元定金预购,得到50优惠券');
        return false;
    }
    return true;
};

var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买,无优惠券');
    } else {
        console.log('手机库存不足');
    }
};

// 创建节点
var chainOrder500=new Chain(order500);
var chainOrder200=new Chain(order200);
var chainOrderNormal=new Chain(orderNormal);

// 指定节点顺序
chainOrder500.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

// 发送请求,获得结果
chainOrder500.passRequest(1,true,500);  // 500元定金预购,得到100优惠券
chainOrder500.passRequest(2,true,500);  // 200元定金预购,得到50优惠券
chainOrder500.passRequest(3,true,500);  // 普通购买,无优惠券
chainOrder500.passRequest(1,false,0);  // 手机库存不足

console.log('*********************');


// 再添加一个节点
var order300 = function (orderType, pay, stock) {
    var self=this;
    if (orderType === 3 && pay === true) {
        setTimeout(function(){
            console.log('300元定金预购,得到50优惠券');
            self.next();
        },1000);
    }
};

var chainOrder300=new Chain(order300);


chainOrder500.setNextSuccessor(chainOrder300);
chainOrder300.setNextSuccessor(chainOrder200);
chainOrder200.setNextSuccessor(chainOrderNormal);

chainOrder500.passRequest(3,true,500);