const {signUp, login, logout} = require('../services/user.services');
const {prepareResponse} = require('../lib/utils')
exports.signUp = async(req, res, next) => {
    try {
        const {body} = req;
        const userCreated = await signUp(body);
        res.status(201)
            .json(prepareResponse(userCreated.toJSON(), 'user'))
            .end();
    } catch (error) {
        next(error);
    }
}

exports.login = async(req, res, next) => {
    try {
        const {body} = req;
        const {token, user: userAuthenticated} = await login(body);
        res.status(200)
            .set('Authorization', token)
            .json(prepareResponse(userAuthenticated, 'user'))
            .end();
    } catch (error) {
        next(error);
    }
}

exports.logout = async (req, res, next) => {
    try {
        const {currentUser} = req;
        const {message} = await logout(currentUser);
        res.status(200)
            .json(prepareResponse(message, 'message'))
            .end();
    }catch (error) {
        next(error);
    }
}
