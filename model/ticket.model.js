const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        default: ''
    },
    ticketTitle: {
        type: String,
        default: ''
    },
    ticketText: {
        type: String,
        default: ''
    },
    status: {
        type: Number, //1.pending 2.resolve
        default: ''
    }
})


var ticketModel = mongoose.model('tickets', ticketSchema);
module.exports = ticketModel;