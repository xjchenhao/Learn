var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    doctor: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    flash: String,
    poster: String,
    year: Number,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

//每次在存储数据之前都会来调用一下这个方法
MovieSchema.pre('save', function (next) {
    //数据是否是新添加的
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }

    next();
});


MovieSchema.statics = {
    fetch: function (cd) { // 取出数据库里所有数据
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cd)
    },
    findById: function (id, cd) { // 取出数据库里所有数据
        return this
            .findOne({_id: id})
            .exec(cd)
    }
};

module.exports = MovieSchema;