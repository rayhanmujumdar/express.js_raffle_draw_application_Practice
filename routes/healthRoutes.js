const router = require('express').Router()
const routers = require('./ticketRoutes')
router.get('/health',(req,res) => {
    res.status(200).json({
        message: 'success'
    })
})
router.use(routers)
module.exports = router