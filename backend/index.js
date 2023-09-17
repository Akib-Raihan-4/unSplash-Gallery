require('dotenv').config()

const express = require("express")
const cors = require('cors')
const {db} = require('./db/db')
const {readdirSync} = require('fs')
const bodyParser = require('body-parser'); 

const app = express()
app.use(cors())
app.use(bodyParser.json())

//routes
readdirSync('./routes').map((routes) => app.use('/api', require('./routes/' + routes)))

const port = process.env.PORT || 4000

db()
app.listen(port, ()=>{
    console.log("server working")
})