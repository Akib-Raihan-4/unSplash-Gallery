const { addImage } = require('../controllers/image_Controllers')

const router = require('express').Router()



router.get('/', (req,res)=>{
    res.send("hello Routes")
})

router.post('/add-image', addImage)

module.exports = router