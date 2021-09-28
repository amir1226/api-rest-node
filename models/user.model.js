const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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