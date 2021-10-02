const {Router} = require('express');
const {signUp, login} = require('../controllers/user.controller')

const router = new Router();

router.post('/signUp', signUp)
    .post('/login', login);

module.exports = router;
