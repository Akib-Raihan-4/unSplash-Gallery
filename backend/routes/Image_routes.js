const { addImage, getImage, deleteImage } = require('../controllers/image_Controllers')
const router = require('express').Router()

// router.get('/', (req,res)=>{
//     res.send("hello Routes")
// })

router.post('/add-image', addImage)
    .get('/get-image', getImage)
    .delete('/delete-image/:id', deleteImage)

module.exports = router