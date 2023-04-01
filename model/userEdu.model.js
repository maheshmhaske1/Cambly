const mongoose = require('mongoose')

const userEduSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        default: ''
    },
    degreeName: {
        type: String,
        default: ''
    },
    stream: {
        type: String,
        default: ''
    },
    details: {
        type: String,
        default: ''
    }
})


var userEduModel = mongoose.model('userEdu', userEduSchema);
module.exports = userEduModel;