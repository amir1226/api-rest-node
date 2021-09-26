const url = require('url');
const {findAll, findById, createBlog} = require('../services/blog.services')

const genericResponse ={
    data: {}
}
exports.findAll = (req, res, next) => {
    const {username} = url.parse(req.url, true).query;
    findAll(username).then(blogs =>{
        const response = Object.assign({}, genericResponse, {data:{blogs}})
        res.status(200).json(response).end();
    }).catch(err => {
        next(err);
    });
}


exports.findById = (req, res, next) => {
    const {id} = req.params;
    findById(id).then(blog =>{
        const response = Object.assign({}, genericResponse, {data:{blog}})
        res.status(200).json(response).end();
    }).catch(err =>{
        next(err);
    })
}

exports.createBlog = (req, res, next) => {
    const {body} = req;
    createBlog(body).then((newBlog) => {
        const response = Object.assign({}, genericResponse, {data:{newBlog}})
        res.status(200).json(response).end();
    }).catch((err) => {
        next(err);
    });
}