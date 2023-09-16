const mongoose = require('mongoose')


const ImageDB = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    image:{
        type: File,
        required: true,
    }
})