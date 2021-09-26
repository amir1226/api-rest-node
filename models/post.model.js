const mongoose = require('mongoose');
const {Schema} = mongoose;

const PostSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    content: 'string',
    blog: {
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }
});

module.exports = mongoose.model('Post', PostSchema);