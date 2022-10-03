require('dotenv').config()
const express = require('express')
const middleware = require('../middleware/middleware')
const app = express()
const {notFoundHandler,errorHandler} = require('../error/myError')

// middleware
app.use(middleware)

//error
app.use(notFoundHandler)
app.use(errorHandler)

//router
app.use(require('../routes/healthRoutes'))

module.exports = app