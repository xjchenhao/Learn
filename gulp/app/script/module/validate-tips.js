/**
 * 钱庄网
 * @name 验证提示（中文管理）
 * @description 功能模块
 * @date 2015-07-06
 * @version $V1.0$
 */
define(function(require, exports, module) {
	var validateTips={
		//登录
		'USER_LOGIN_PHONE_NOT_NULL':'请输入手机号码',
		'USER_LOGIN_PASSWORD_NOT_NULL':'请输入密码',
		'USER_LOGIN_VALIDCODE_NOT_NULL':'验证码不能为空',
		//注册
		'USER_REGISTER_PHONE_EXIST':'该手机号码已注册',
		'USER_REGISTER_PHONE_FORMAT_ERROR':'请输入正确的手机号码',
		'USER_REGISTER_PASSWORD_NOT_NULL':'密码不能为空',
		'USER_REGISTER_PASSWORD_FORMAT_ERROR':'密码长度8-20个字符，区分大小写',
		'USER_REGISTER_TWO_PASSWORD_NOT_EQUAL':'两次密码输入不一致',
		//找回密码
		'USER_FINDPASS_REALNAME_NOT_NULL':'真实姓名不能为空',
		'USER_FINDPASS_CARDID_NOT_NULL':'身份证号不能为空',
		//修改登录密码
		'USER_MODIFYPASS_CURLOGIN_PASSWORD_NOT_NULL':'请输入当前登录密码',
		'USER_MODIFYPASS_CURPAY_PASSWORD_NOT_NULL':'请输入当前交易密码',
		'USER_MODIFYPASS_TWO_PASSWORD_NOT_EQUAL':'两次新密码输入不一致',
		//交易密码相关
		'USER_MODIFYPASS_CARDID_6_ERROR':'请输入身份证后6位',
		//实名认证
		'USER_REALNAME_CARDID_FORMAT_ERROR':'请输入正确的身份证号码',
		'USER_REALNAME_NAME_FORMAT_ERROR':'姓名格式不正确',
		//购买
		'TENDER_FOR_NEW':'亲，该产品仅限新手投资哦',
		'TENDER_BALANCE_NOT_ENOUGH':'可用余额不足，请先充值',
		'TENDER_NOT_LOGIN':'请先登录',
		'TENDER_PAY_PASSWORD_NOT_NULL':'请输入交易密码',
		//提现
		'CASH_MONEY_NOT_NULL':'请输入提现金额',
		'CASH_MONEY_LESS_THAN_100':'单笔提现金额需大于100元',
		'CASH_MONEY_LESS_THAN_100W':'单笔提现金额不能大于100万元',
		'CASH_ALL_FOR_ONCE':'余额若低于100元需一次性全部提走',
		'CASH_NO_BANKCARD':'请选择银行卡',
		//充值
		'RECHARGE_MONEY_NOT_NULL':'请输入充值金额',
		'RECHARGE_MONEY_LARGER_THAN_1000W':'充值金额不能大于1000万元',
		'RECHARGE_MONEY_LESS_THAN_0':'充值金额需大于0元',
		//绑卡
		'BIND_BANKCARD_NOT_NULL':'请输入银行卡号',
		//自动投资
		'AUTO_TENDER_MONEY_NOT_NULL':'请输入每次最高投资金额',
		'AUTO_TENDER_NOT_AUTH':'请先通过实名认证',
		'AUTO_TENDER_MOST_LARGER_THAN_10W':'设置最高投资金额不能大于10万元',
	};
	module.exports = validateTips;
});