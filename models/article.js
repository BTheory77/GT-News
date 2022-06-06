const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    image: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Article', articleSchema)