/*验证码倒计时,带ajax请求 1.2.5*/

(function (root, factory) {
    if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function (require, exports, module) {
            require('zepto');
            var cookie = require('module/cookie');
            var rsaEncrypt = require('module/rsaEncrypt');
            var encryptedPwd = rsaEncrypt('10001', '9d183e5918a188d09ead235a4c2dc54e5216281d4a72fa57d21cf736d445d60591ba794c201efcf3f98bb3553a314f84d6b4af92dd400da34c2d9ad65baca2e7b329bf5320fa2e5790f91ab79a492d0b75ce1a6fa60dc8ab5399dd7e61632284e42aee9b33596b06ee2c256d0ef819e6f64378d33d0d9cfd5fa4462880e1ebd9');

            return factory(root, exports, cookie, encryptedPwd);
        });
    } else {
        root.btnLight = factory(root);
    }
})(this, function (root, exports, cookie, encryptedPwd) {

    //常量
    var BTNTEXT = '获取验证码',             //可获取验证码的状态按钮上文字
        WAITTEXT = '秒后重新获取',          //倒计时中按钮上文字
        URL = '/wap/user/validCode.html',   //请求地址
        WAITTIME = 60,                      //倒计时时间
        DISIABLEDCLASS = 'disabled',  //倒计时中的状态样式
        SHOWCLASS = 'red',           //可获取验证码的状态样式
        PHONECOOKIE = 'phoneCookie',

    //0-下面这两项要配(ajax的返回值)，一个是键，一个是值,请求超时时间，一个是请求失败提示文字
        AJAXTITLE = 'resultCode',
        AJAXYES = 1,
        AJAXNO = 0,

        TIMEOUT = 5000,
        WARNING = '网络繁忙，请稍后再试！';

    var verifyCode = function (obj) {

        obj = obj || {};

        this.elmInput = obj.elmInput;
        this.elmBtn = obj.elmBtn;
        this.data = obj.data || {};
        this.url = obj.url || URL;
        this.time = obj.time || WAITTIME;
        this.isInstant = obj.isInstant || false;
        this.timeCookie = obj.timeCookie || 'verifyCodeTime';
        this.phoneKey = obj.phoneKey || 'userName';
        this.timer = null;
        this.timeStartCallback=obj.timeStartCallback;
        this.timeEndCallback=obj.timeEndCallback;

        this.disabledClass = DISIABLEDCLASS;
        this.showClass = SHOWCLASS;
        this._init();
        this._handle();
    };


    verifyCode.prototype._init = function () {
        if(cookie.getCookie(self.timeCookie)){
            this._timeUpdate();
        }

        //todo:不影响这个项目的bug,它会拿cookie的手机号替换掉a页面传过来的值.
        //if(cookie.getCookie(PHONECOOKIE)){
        //    this.elmInput.value = cookie.getCookie(PHONECOOKIE);
        //}
    };
    verifyCode.prototype._handle = function () {
        var self = this;
        self._event = {
            getValidNum: function () {
                var phoneKey = {};
                phoneKey[self.phoneKey] = encryptedPwd(self.elmInput.value);
                $.ajax({
                    url: self.url,
                    data: $.extend(self.data, phoneKey),
                    dataType: 'json',
                    type: 'post',
                    beforeSend: function () {
                        self.elmBtn.setAttribute('disabled',true);
                    },
                    success: function (data) {
                        if (data[AJAXTITLE] == AJAXYES) {
                            cookie.setCookie(self.timeCookie, self.time, self.time);
                            cookie.setCookie(PHONECOOKIE, null, -1);
                            cookie.setCookie(PHONECOOKIE, self.elmInput.value, 86400);
                            self._timeUpdate();
                        } else if (data[AJAXTITLE] == AJAXNO) {
                            alert(WARNING);
                        }
                    },
                    error:function(){
                        self.timeEndCallback && self.timeEndCallback();
                    }
                });
            }
        };



        if(self.isInstant){
            if(cookie.getCookie(self.timeCookie)){
                self._timeUpdate();
            }else{
                self._event.getValidNum();
            }
        }
        self.elmBtn.addEventListener('click', self._event.getValidNum, false);
    };
    verifyCode.prototype.run=function(){
        this._event.getValidNum()
    };
    verifyCode.prototype.destroy = function () {
        var self = this;
        this.elmBtn.removeEventListener('click', self._event.getValidNum, false);
        window.clearTimeout(self.timer);
        self.timer = null;
    };
    verifyCode.prototype._timeUpdate = function () {
        var self = this,
            btn = self.elmBtn,
            time = Number(cookie.getCookie(self.timeCookie));

        self.timeStartCallback && self.timeStartCallback();

        if (time === 0) {
            cookie.setCookie(self.timeCookie, null, -1);
            btn.removeAttribute("disabled");
            self._removeClass(btn, self.disabledClass);
            self._addClass(btn, self.showClass);
            btn.value = BTNTEXT;
            self.timeEndCallback && self.timeEndCallback();
        } else {
            self.elmBtn.setAttribute("disabled", true);
            self._addClass(btn, self.disabledClass);
            self._removeClass(btn, self.showClass);
            btn.value = time + WAITTEXT;
            time--;
            cookie.setCookie(self.timeCookie, time, time);
            self.timer = setTimeout(function () {
                self._timeUpdate();
            }, 1000);
        }
    };
    verifyCode.prototype._addClass = function (obj, cls) {
        var targetObj = this.isErrorOnParent ? obj.parentElement : obj;
        if (typeof cls == 'string' && targetObj.nodeType === 1) {
            if (!targetObj.className) {
                targetObj.className = cls;
            } else {
                var a = (targetObj.className + ' ' + cls).match(/\S+/g);
                a.sort();
                for (var i = a.length - 1; i > 0; --i)
                    if (a[i] == a[i - 1]) a.splice(i, 1);
                targetObj.className = a.join(' ');
            }
        }
    };
    verifyCode.prototype._removeClass = function (obj, cls) {
        var targetObj = this.isErrorOnParent ? obj.parentElement : obj;
        if (targetObj.className && typeof cls === 'string' && targetObj.nodeType === 1) {
            var classArr = targetObj.className.split(' ');
            for (var i = 0, iLength = classArr.length; i < iLength; i++) {
                if (classArr[i] === cls) {
                    classArr.splice(i, 1);
                }
            }
            targetObj.className = classArr.join(' ');
        }
    };


    return verifyCode;
});