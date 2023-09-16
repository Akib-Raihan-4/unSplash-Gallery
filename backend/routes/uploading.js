const router = require('express').Router()



router.get('/', (req,res)=>{
    res.send("hello Routes")
})

module.exports = router