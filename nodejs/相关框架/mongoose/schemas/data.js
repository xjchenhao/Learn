var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = mongoose.model('User', new Schema({
    first: String,
    last: String,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, index: true}
}));

module.exports = User;