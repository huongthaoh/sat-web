const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    summary: {
        type: String
    },
    content: {
        type: String,
    },
    cover: String,

}, {
    timestamps: true,
})

const ArticleModel = mongoose.model('Article', ArticleSchema);
module.exports = ArticleModel;