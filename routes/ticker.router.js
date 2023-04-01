const ticketRouter = require('../controller/ticket.controller')
const { authenticate_user } = require('../middleware/auth')
const express = require('express')
const router = express.Router()

router.post('/add', authenticate_user, ticketRouter.addTicket)
router.get('/get-all/:userId', authenticate_user, ticketRouter.getAllTickets)
router.delete('/delete/:ticketId', authenticate_user, ticketRouter.deleteTicket)
router.get('/get/:ticketId', authenticate_user, ticketRouter.getTicket)

module.exports = router