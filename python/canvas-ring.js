/**
 * canvas-ring圆环进度条      1.0.1
 * eg:
 * .per{position:absolute;top:-3rem;left:-3rem;-webkit-transform: scale(.5,.5);transform: scale(.5,.5);}
 * .per{display:block;overflow:hidden;width:16rem;height:16rem;-webkit-border-radius:100%;border-radius:100%;}
 * .per canvas{position:absolute;z-index:-1;width:16rem;height:16rem;}
 * .per .val{position:absolute;z-index:10;top:1rem;left:1rem;width:14rem;height:14rem;color:#ff5f5f;-webkit-border-radius:100%;border-radius:100%;background-color:#fff;font-size:5rem;line-height:14rem;text-align:center;}
 *
 *  <div class="per">
 *    <canvas id="canvas"></canvas>
 *    <div class="val">
 *        <span>80</span>%
 *    </div>
 *  </div>
 *
 *
 * var oRing=new Ring({
 *            size:document.getElementsByClassName('per')[0].clientWidth, //画布大小（正方形）
 *            step:1,                 //动画步长
 *            delay:0,                //动画延迟开始
 *            before:'',              //前置的回调接口
 *            after:''                //后置的回调接口
 *        });
 * oRing.run({
 *            obj:document.getElementById('canvas'),  //画布对象
 *            percent:0.8,         //进度条占比
 *            perColor:'#ffd6d6',  //进度的颜色
 *            bgColor:'#ff5f5f',   //背景的颜色
 *            isAnimation:true    //是否动画
 *        })
 *
 * Ps:
 *   oRing实例化出来的类需要通过调用.run()方法来显示出带进度的饼图
 *   圆环是通过样式叠加白色的圆圈上去的
 */
(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function (exports) {
            return factory(root, exports);
        });
    } else {
        root.Ring = factory(root, {});
    }
})(this, function (root, slider) {
    var Ring = function (opts) {
        this._opts = opts;
        this._setting();
    };
    Ring.prototype._setting = function () {
        var opts=this._opts,
            noop = function(){};
        /*初始化user data*/
        this.size=opts.size||200;                   //画布大小（正方形）
        this.step = opts.step || 5;                 //动画步长
        this.delay = opts.delay || 0;               //动画延迟开始
        this.before = opts.onBefore || noop;        //前置的回调接口
        this.after = opts.onAfter || noop;          //后置的回调接口
    };
    Ring.prototype.run = function (opts) {
        var self=this,
            canvas = opts.obj,
            ctx=null;
        if(canvas && (ctx = canvas.getContext("2d"))){
            //设置画布大小
            canvas.width = canvas.height = self.size;
            //绘制背景圆
            ctx.fillStyle = opts.bgColor;
            ctx.beginPath();
            ctx.moveTo(self.size/2, self.size/2);
            ctx.arc(self.size/2, self.size/2, self.size/2, 0, Math.PI * 2);
            ctx.fill();
            //前置的回调接口
            self.before(ctx);
            //绘制进度圆
            ctx.fillStyle = opts.perColor;
            var i = 0, rage = 360 * (opts.percent || 0);
            var sRage = -Math.PI * 0.5;
            if(opts.isAnimation){
                var djs = function(){
                    i = i + self.step;
                    if(i <= rage){
                        ctx.beginPath();
                        ctx.moveTo(self.size/2, self.size/2);
                        ctx.arc(self.size/2, self.size/2, self.size/2, sRage, Math.PI * 2 * (i/360)+sRage);
                        ctx.fill();
                        setTimeout(djs, 10);
                    } else {
                        //后置的回调接口
                        self.after(ctx);
                    }
                };
                if(self.delay){
                    setTimeout(djs,self.delay);
                }else{
                    djs();
                }
            }else{
                ctx.beginPath();
                ctx.moveTo(self.size/2, self.size/2);
                ctx.arc(self.size/2, self.size/2, self.size/2, sRage, Math.PI * 2 * (rage/360)+sRage);
                ctx.fill();
                setTimeout(djs, 10);
            }
        }
    };
    Ring.prototype.destroy = function () {

    };
    return Ring;
});