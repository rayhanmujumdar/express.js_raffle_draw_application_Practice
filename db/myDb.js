const Ticket = require('../models/ticket')
class MyDB {
    constructor(){
        this.tickets = []
    }

    //find - all ticket
    find(){
        return this.tickets
    }

    //findById ticket
    /**
     * @param {string} id
     * @returns {Ticket}
     */
    findById(id){
        const ticket = this.tickets.find(ticket => {
            return ticket.ticketId === id
        })
        return ticket
    }

    //updateById
    /**
     * @param {string} id
     * @param {{username: string,price: number}} ticketBody
     * @returns {Ticket}
     */
    updateById(id,ticketBody){
        const ticket = this.findById(id)
        ticket.username = ticketBody.username || ticket.username
        ticket.price = ticketBody.price || ticket.username
        return ticket
    }

    //deleteById
    /**
     * @param {string} id
     * @returns {boolean}
     */
    deleteById(id) {
        const index = this.tickets.findIndex(item => {
            return item.ticketId === id
        })
        if(this.tickets.indexOf(index) !== -1){
            this.tickets.splice(index,1)
            return true
        }
    }

    //findByUser
    /**
     * @param {string} username
     * @returns {Ticket}
     */
    findByUser(username){
        const ticket = this.tickets.find(ticket => {
            return ticket.username === username
        })
        return ticket
    }

    //create
    /**
     * parameter is username and price or return ticket
     * @param {string} username
     * @param {number} price
     * @returns {Ticket}
     */
    create(username,price){
        const ticket = new Ticket(username,price)
        this.tickets.push(ticket)
        return ticket
    }

    //bulk
    /**
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<result>}
     */
    bulkCreate(username,price,quantity) {
        const result = []
        for(let i = 0; i < quantity; i++){
            const ticket = this.create(username,price)
            result.push(ticket)
        }
        return result
    }
    //draw
    draw(){

    }
}

const myDb = new MyDB()


module.exports = myDb