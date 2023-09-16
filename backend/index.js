require('dotenv').config()

const express = require("express")
const cors = require('cors')
const {db} = require('./db/db')
const {readdirSync} = require('fs')


const app = express()
app.use(cors())

//routes
readdirSync('./routes').map((routes) => app.use('/api/image', require('./routes/' + routes)))

const port = process.env.PORT || 3000

db()
app.listen(port, ()=>{
    console.log("server working")
})