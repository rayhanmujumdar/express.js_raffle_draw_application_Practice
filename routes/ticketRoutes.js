const status = require('express').Router()

status.route('/t/:ticketId')
    .get(() => {})
    .patch(() => {})
    .delete(() => {})

status.route('/t/:username')
    .get(() => {})
    .patch(() => {})
    .delete(() => {})

status.post('/sell',() => {})
status.post('/bulk',() => {})
status.get('/draw',() => {})
status.get('',() => {})

module.exports = status