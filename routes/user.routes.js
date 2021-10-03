const {Router} = require('express');
const {signUp, login, logout} = require('../controllers/user.controller')
const {restrict} = require('../middlewares/auth.middleware')

const router = new Router();

router
    .post('/signUp', signUp)
    .post('/login', login)
    .get('/logout', restrict, logout);

module.exports = router;
