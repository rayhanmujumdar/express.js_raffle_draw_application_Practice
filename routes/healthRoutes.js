const routers = require('./projectPoutes')
const router = require('express').Router()
router.get('/health',(req,res) => {
    res.status(200).json({
        message: 'success'
    })
})
router.use(routers)
module.exports = router