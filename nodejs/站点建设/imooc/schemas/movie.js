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
MovieSchema.pre('save', function () {
    //数据是否是新添加的
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    // 经常容易忘了next() 然后就悲剧了
    // 这种middle ware 一定要加next ^_^
    next();
});

MovieSchema.statice = {
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