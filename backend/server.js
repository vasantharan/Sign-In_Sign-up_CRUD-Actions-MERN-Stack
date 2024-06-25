const mongoose = require('mongoose')
const express = require('express')
const app = express()
const doenv = require('dotenv')
const routes = require('./route')
const cors = require('cors')
const cookie = require('cookie-parser')


doenv.config(
    {
        path: './.env'
    }
) 
console.log(process.env.db_url)
const port = 5000

app.use(cors())
app.use(cookie())
app.use(express.json()) 

app.use('/',routes) 

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port)) 

mongoose.connect(process.env.db_url)
.then(()=>console.log('db connected'))
.catch((err)=>console.log('error:',err))