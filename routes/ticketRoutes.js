const status = require("express").Router();
const shortid = require("shortid");
const myDb = require("../db/myDb");
const Ticket = require('../models/ticketModel')

status
  .route("/t/:ticketId")
  .get((req, res) => {
    const { ticketId } = req.params;
    const ticket = myDb.findById(ticketId);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const { ticketId } = req.params;
    const ticketBody = req.body;
    const updateTicket = myDb.updateById(ticketId, ticketBody);
    res.status(201).json({
      message: "update successful",
      updateTicket,
    });
  })
  .delete(() => {
    const { ticketId } = req.params;
    const delTicket = myDb.deleteById(ticketId);
    res.status(201).json(delTicket);
  });

status
  .route("/u/:username")
  .get((req, res) => {
    const { username } = req.params;
    const ticket = myDb.findByUser(username);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const ticketBody = req.body;
    const { username } = req.params;
    const updateTicketByUser = myDb.updateAllByUser(username, ticketBody);
    res.status(201).json(updateTicketByUser);
  })
  .delete((req, res) => {
    const { username } = req.params;
    const deleteByUser = myDb.deleteByUser(username);
    if (deleteByUser) {
      res.status(200).json({
        message: "delete successfully",
      });
    } else {
      res.status(404).json({
        message: "Not Match username",
      });
    }
  });

status.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const createTicket = myDb.create(username, price);
  res.status(201).json(createTicket);
});
status.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const bulkTicket = myDb.bulkCreate(username, price, quantity);
  res.status(201).json(bulkTicket);
});
status.get("/draw", (req, res) => {
  const winnerCount = req.query.wc || 3;
  const winner = myDb.draw(winnerCount);
  res.status(200).json(winner);
});
status.get("", (req, res) => {
  const tickets = myDb.find();
  res.status(200).json(tickets);
});


// Mongoose use to set Data to MongoBD
status.post('/mongoose/newTicket',async (req,res) => {
        const {username,price} = req.body
        const ticket = {
            ticketId : shortid.generate(),
            username,
            price
        }
        const createNew = await Ticket.create(ticket)
        res.status(200).json({
            message: 'success',
            createNew : createNew._doc
        })
})

module.exports = status;
