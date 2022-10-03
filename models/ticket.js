const shortId = require("shortid")

class Ticket {
    constructor(username,price){
        this.ticketId = shortId.generate()
        this.username = username
        this.price = price
        this.createAt = new Date()
        this.updateAt = new Date()
    }
}

module.exports = Ticket