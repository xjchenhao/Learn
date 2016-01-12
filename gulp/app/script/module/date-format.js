/**
 * 时间格式化   1.0.0
 */
(function (root, factory) {
	if (typeof define === 'function' && (define.amd || define.cmd)) {
		define(function (require, exports, module) {
			return factory(root,{});
		});
	} else {
		root.timeFormat = factory(root,{});
	}
})(this, function (root) {
	var TimeFormat = function() {
		/**
		 * 日期格式化
		 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
		 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
		 * eg:
		 * var obj=new TimeFormat();
		 * obj.format(<dateStr>,"yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
		 * obj.format(<dateStr>,"yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
		 * obj.format(<dateStr>,"yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
		 * obj.format(<dateStr>,"yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
		 * obj.format(<dateStr>,"yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
		 * ps:
		 * <dateStr>为用户需要格式化的date字符串，可以是毫秒也可以是日期格式，例如"86400000"或"2014/07/07"等。用于new Date()
		 */
		this.format = function(dateVal, fmt) {
			var date = new Date(dateVal);
			var o = {
				"M+": date.getMonth() + 1, 										//月份
				"d+": date.getDate(), 											//日
				"h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, 	//小时
				"H+": date.getHours(), 											//小时
				"m+": date.getMinutes(), 										//分
				"s+": date.getSeconds(), 										//秒
				"q+": Math.floor((date.getMonth() + 3) / 3), 					//季度
				"S": date.getMilliseconds() 									//毫秒
			};
			var week = {
				"0": "/u65e5",
				"1": "/u4e00",
				"2": "/u4e8c",
				"3": "/u4e09",
				"4": "/u56db",
				"5": "/u4e94",
				"6": "/u516d"
			};
			if (/(y+)/.test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			}
			if (/(E+)/.test(fmt)) {
				fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
			}
			for (var k in o) {
				if (new RegExp("(" + k + ")").test(fmt)) {
					fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				}
			}
			return fmt;
		};
		/*
		 * 倒计时
		 * eg:
		 * var obj=new TimeFormat();
		 * obj.format(<msel>) ==> 08:09:04
		 * ps:
		 * <msel>为倒计时的毫秒数
		 */
		this.countdown = function(msel,sign) {
			var hh, mm, ss;
			if (msel > 0) {
				msel = msel / 1000;
				hh = parseInt(msel / 3600);
				mm = parseInt((msel - hh * 3600) / 60);
				ss = parseInt(msel % 60);
			} else {
				hh = mm = ss = 0;
			}
			if (hh < 10) hh = "0" + hh;
			if (mm < 10) mm = "0" + mm;
			if (ss < 10) ss = "0" + ss;
			if(sign){
				return hh + sign + mm + sign + ss;
			}else{
				return hh + "小时" + mm + "分" + ss+ "秒";
			}
		};
		/*
		 * 多久前
		 * eg:
		 * var obj=new TimeFormat();
		 * obj.before(86400000) ==> 1天前
		 * ps:
		 * <msel>为倒计时的毫秒数
		 */
		this.before = function(msel) {
			var minute = 1000 * 60,
				hour = minute * 60,
				day = hour * 24,
				halfamonth = day * 15,
				month = day * 30;
			var monthC = msel / month;
			var weekC = msel / (7 * day);
			var dayC = msel / day;
			var hourC = msel / hour;
			var minC = msel / minute;
			if (monthC >= 1) {
				result = parseInt(monthC) + "个月前";
			} else if (weekC >= 1) {
				result = parseInt(weekC) + "周前";
			} else if (dayC >= 1) {
				result = parseInt(dayC) + "天前";
			} else if (hourC >= 1) {
				result = parseInt(hourC) + "个小时前";
			} else if (minC >= 1) {
				result = parseInt(minC) + "分钟前";
			} else
				result = "刚刚";
			return result;
		};
	};
	return new TimeFormat;
});