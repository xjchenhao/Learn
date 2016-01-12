define(function (require, exports, module) {
    require('module/rsaUtils');

    var EncryptedPwd = function (exponent, modulus) {
        return function (password) {
            setMaxDigits(130);

            var key = new RSAKeyPair(exponent, '', modulus);
            return encryptedString(key, password);
        };
    };
    module.exports = EncryptedPwd
});