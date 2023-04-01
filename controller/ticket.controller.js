const { default: mongoose } = require('mongoose')
const ticket = require('../model/ticket.model')

exports.addTicket = async (req, res) => {
    const { userId, ticketTitle, ticketText } = req.body

    if (!userId || !ticketTitle || !ticketText) {
        return res.json({
            status: false,
            message: "please provide userId,ticketTitle,ticketText"
        })
    }

    await new ticket({
        userId: userId,
        ticketTitle: ticketTitle,
        ticketText: ticketText,
        status: 1
    })
        .save()
        .then((success) => {
            return res.json({
                status: true,
                message: "ticket added",
                success: success
            })
        })
        .then((error) => {
            return res.json({
                status: false,
                message: "something went wrong"
            })
        })
}

exports.getAllTickets = async (req, res) => {
    const { userId } = req.params

    if (!userId) {
        return res.json({
            status: false,
            message: "please provide userId"
        })
    }

    await ticket.find({ userId: mongoose.Types.ObjectId(userId) })
        .then((success) => {
            return res.json({
                status: true,
                message: "tickets",
                success: success
            })
        })
        .then((error) => {
            return res.json({
                status: false,
                message: "something went wrong"
            })
        })
}

exports.getTicket = async (req, res) => {
    const { ticketId } = req.params

    if (!ticketId) {
        return res.json({
            status: false,
            message: "please provide ticketId"
        })
    }

    await ticket.find({ _id: mongoose.Types.ObjectId(ticketId) })
        .then((success) => {
            return res.json({
                status: true,
                message: "tickets",
                success: success
            })
        })
        .then((error) => {
            return res.json({
                status: false,
                message: "something went wrong"
            })
        })
}

exports.deleteTicket = async (req, res) => {
    const { ticketId } = req.params

    if (!ticketId) {
        return res.json({
            status: false,
            message: "please provide ticketId"
        })
    }

    await ticket.findOneAndDelete({ _id: mongoose.Types.ObjectId(ticketId) })
        .then((success) => {
            return res.json({
                status: true,
                message: "tickets",
                success: success
            })
        })
        .then((error) => {
            return res.json({
                status: false,
                message: "something went wrong"
            })
        })
}