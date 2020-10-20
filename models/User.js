const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    file: String,
    created: {
        type: Date,
        default: Date.now
    }    
})

UserSchema.plugin(passportLocalMongoose);

const User =  mongoose.model('User', UserSchema)

export default User;