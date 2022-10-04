const {Schema,model} = require('mongoose')

const Ticket = new Schema({
    ticketId: {
        type: String,
    },
    username: String,
    price: Number,
    createAt: {
        type: String,
        default: new Date()
    },
    updateAt: {
        type: String,
        default: new Date()
    }
})

const ticket = model('Ticket',Ticket)

module.exports = ticket