const Ticket = require('../models/ticket')
class MyDB {
    constructor(){
        this.ticket = []
    }

    //find - all ticket

    //findById ticket

    //updateById

    //deleteById

    //findByUser

    //create
    create(username,price){
        const ticket = new Ticket(username,price)
        this.ticket.push(ticket)
    }

    //bulk
    bulk() {

    }
    //draw
    draw(){

    }
}

const myDb = new MyDB()


module.exports = myDb