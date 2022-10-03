const status = require('express').Router()


status.get('/hello',(req,res) => {
    res.status(200).json({
        message: 'all ok'
    })
})


module.exports = status