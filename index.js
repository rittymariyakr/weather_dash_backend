require('dotenv').config()

const express = require('express')

const cors = require('cors')

const router = require("./Router/router")

require('./DB/connection')

const Dserver = express()

Dserver.use(cors())

Dserver.use(express.json())

Dserver.use(router)

const PORT = 4000 || process.env

Dserver.listen(PORT, () => {
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

Dserver.get('/',(req,res)=>{
    res.send(`<h1>Server running successfully and ready to accept request from client</h1>`)
})