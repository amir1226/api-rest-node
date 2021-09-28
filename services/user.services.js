const UserModel = require('../models/user.model')

exports.signUp = async(userInfo) => {
    try {
        const newUser = new UserModel({
            ...userInfo
        });
        const savedUser = await newUser.save();
        return savedUser;
    } catch (err) {
        console.error(err);
        throw new Error('Información invalida');
    }
}
