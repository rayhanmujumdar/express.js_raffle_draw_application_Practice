const dotenv = require('dotenv').config()
const app = require('./app/app')
const http = require('http')

const server = http.createServer(app)
const PORT = process.env.PORT || 8000

server.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})