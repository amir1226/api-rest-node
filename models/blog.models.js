const mongoose = require('mongoose');
const {Schema} = mongoose;

const BlogsSchema = new Schema({
    title: {
        type: 'string',
        required: true,
    },
    username: 'string',
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
},    {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }  
})

module.exports = mongoose.model('Blog', BlogsSchema);

/* exports.blogs = [
    {
        id: 1,
        title: 'Blog 1',
        username: 'admin'
    },
    {
        id: 2,
        title: 'Blog 2',
        username: 'admin'
    },
    {
        id: 3,
        title: 'Blog 3',
        username: 'pepe'
    }
] */