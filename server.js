require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app/app')
const http = require('http')

const server = http.createServer(app)
const PORT = process.env.PORT || 8000

mongoose.connect('mongodb://localhost:27017/tickets')
    .then(() => {
        server.listen(PORT,() => {
            console.log(`Server is listening to port ${PORT}`)
        })
    }) 
    .catch(e => {
        console.log(e)
    })
