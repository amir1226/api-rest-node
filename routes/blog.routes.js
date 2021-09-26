const {Router} = require('express');
const router = new Router();
const url = require('url');
const {findAll, findById, createBlog} = require('../controllers/blog.controller');

router
    .get('/', findAll)
    .post('/', createBlog);

router.get('/:id', findById);


module.exports = router;