const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    photo: {
        type: String
    },
    city: {
        type: String,
        default: ''
    },
    pin: {
        type: String,
        default: ''
    },
    mobile: {
        type: Number,
        default: ''
    },
    account_type: {
        type: Number   //1.User 2.Tutor
    },
    languages: {
        type: []
    },
    password: {
        type: String,
        default: ''
    },
    introduction:
        { type: String },
    teachingStyle:
        { type: String },
    aboutMe:
        { type: String },
    token: {
        type: String
    },

})


var userModel = mongoose.model('users', userSchema);
module.exports = userModel;