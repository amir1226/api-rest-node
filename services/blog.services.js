
const BlogModel = require('../models/blog.models')

exports.findAll = async (username) => {
    try {
         if(username) return await BlogModel.find({username}).populate('posts').exec();
         return await BlogModel.find().populate('posts').exec();
    } catch (err) {
        throw err;
    }
}


exports.findById = async (id) => {
    try {
        return await BlogModel.findById(id).populate('posts').exec();
    } catch (err) {
        throw err;
    }
}

exports.createBlog = async (blogInfo) => {
    try {
        const newBlog = new BlogModel({
            ...blogInfo
        })
        return await newBlog.save(); 
    } catch (error) {
      throw error;  
    }
}

exports.addPost = async (blogId, post) => {
    try {
        const blog = await BlogModel.findById(blogId);
        blog.posts.push(post);
        await blog.save();
    } catch (error) {
        throw error;
    }
}