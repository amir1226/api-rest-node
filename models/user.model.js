const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps:{
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

UserSchema.methods.toJSON = function(){
    const user = this;
    return {
        ...user._doc,
        password: undefined
    }
};

UserSchema.methods.generateAuthToken = async function(){
    const user = this;
    return jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: '4 hours'});
}

UserSchema.pre('save', async function (next) {
    const user = this;
    if(user.isModified('password')) 
    {
        const {password} = user;
        user.password = await bcrypt.hash(password, 8);
    }
    next();
});

module.exports= mongoose.model('User', UserSchema);