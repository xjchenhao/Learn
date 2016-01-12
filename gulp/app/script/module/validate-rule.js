/**
 * 钱庄网
 * @name 表单校验规则
 * @description 功能模块
 * @date 2015-07-27
 * @version $V1.0$
 */
define(function(require, exports, module) {
    var rule={
        'phone':'isReg:^((13[0-9]{9})|(14[0-9]{9})|(15[0-35-9][0-9]{8})|(17[0-9]{9})|(18[0-9]{9}))$',
        'loginPasswordLengthMin':'minLength:8',
        'loginPasswordLengthMax':'maxLength:20',
        'dealPasswordLengthMin':'minLength:8',
        'dealPasswordLengthMax':'maxLength:20',
        'realName':'isReg:^[\\u4e00-\\u9fa5]*$',
        'identityCard':'isReg:(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)'
    };
    module.exports = rule;
});