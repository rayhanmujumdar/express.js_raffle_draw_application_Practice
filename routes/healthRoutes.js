const router = require('express').Router()
router.use('/api/v1/tickets',require('./ticketRoutes'))
router.get('/health',(_req,res) => {
    res.json({
        message: 'success'
    })
})
module.exports = router