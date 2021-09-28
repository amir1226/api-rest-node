const {Router} = require('express');
const {signUp} = require('../controllers/user.controller')

const router = new Router();

router.post('/signUp', signUp);

module.exports = router;
