const url = require('url');
const PostService = require('../services/post.services')

const genericResponse ={
    data: {}
}

exports.findAll = async (req, res, next) => {
    try {
        const posts= await PostService.findAll();
        const response = Object.assign({}, genericResponse, {data:{posts}});
        res.status(200).json(response).end();
    } catch (err) {
        next(err);
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const {body} = req;
        const post = await PostService.createPost(body);
        const response = Object.assign({}, genericResponse, {data:{post}});
        res.status(200).json(response).end();
    } catch (err) {
        next(err);
    }
}