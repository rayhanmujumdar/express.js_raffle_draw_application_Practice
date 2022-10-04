const Ticket = require("../models/ticket");
class MyDB {
  constructor() {
    this.tickets = [];
  }

  //find - all ticket
  find() {
    return this.tickets;
  }

  //findById ticket
  /**
   * @param {string} id
   * @returns {Ticket}
   */
  findById(id) {
    const ticket = this.tickets.find((ticket) => {
      return ticket.ticketId === id;
    });
    return ticket;
  }

  //updateById
  /**
   * @param {string} id
   * @param {{username: string,price: number}} ticketBody
   * @returns {Ticket}
   */
  updateById(id, ticketBody) {
    const ticket = this.findById(id);
    ticket.username = ticketBody.username || ticket.username;
    ticket.price = ticketBody.price || ticket.username;
    return ticket;
  }

  //deleteById
  /**
   * @param {string} id
   * @returns {boolean}
   */
  deleteById(id) {
    const index = this.tickets.findIndex((item) => {
      return item.ticketId === id;
    });
    if (this.tickets.indexOf(index) !== -1) {
      this.tickets.splice(index, 1);
      return true;
    }
  }

  //findByUser
  /**
   * @param {string} username
   * @returns {Ticket}
   */
  findByUser(username) {
    const ticket = this.tickets.filter((ticket) => {
      return ticket.username.includes(username);
    });
    return ticket;
  }
  //updateByUser
  /**
   * @param {string} username
   * @returns {Ticket}
   */
  updateAllByUser(username, ticketBody) {
    const tickets = this.findByUser(username);
    const updateTickets = tickets.map((ticket) => {
      ticket.username = ticketBody?.username || ticket.username;
      ticket.price = ticketBody?.price || ticket.price;
      return ticket;
    });
    return updateTickets;
  }

  // deleteByUser
  deleteByUser(username) {
    // hard to solve

    // const tickets = [...this.tickets];
    // const index = [];
    // for (let i = 0; i < tickets.length; i++) {
    //   const findIndex = tickets.findIndex(
    //     (ticket) => ticket?.username === username
    //   );
    //   if (findIndex !== -1) {
    //     index.push(findIndex);
    //   }
    //   tickets.splice(findIndex, 1, undefined);
    // }
    // this.tickets.splice(index[0], index.length);


    // easy to solve
    const oldTicket = [...this.tickets]
    const index = this.tickets.findIndex(ticket => ticket.username === username)
    const tickets = this.findByUser(username)
    this.tickets.splice(index, tickets.length);
    if((oldTicket.length - tickets.length) === this.tickets.length){
        console.log(true)
        return true
    }
  }
  //create
  /**
   * parameter is username and price or return ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket}
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  //bulk
  /**
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<result>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }
  //draw
  /**
   * @param {number} winnerCount
   * @returns {Array<winnerArr>}
   */
  draw(winnerCount) {
    let winnerArr = new Array(winnerCount);
    let count = 0;
    let randomIndex = Math.floor(Math.random() * this.tickets.length);
    while (count < winnerArr.length) {
      if (!winnerArr.includes(this.tickets[randomIndex])) {
        winnerArr[count++] = this.tickets[randomIndex];
      } else {
        randomIndex = Math.floor(Math.random() * this.tickets.length);
      }
    }
    // const winner = winnerArr.map(winner => this.tickets[winner])
    return winnerArr;
  }
}

const myDb = new MyDB();

module.exports = myDb;
