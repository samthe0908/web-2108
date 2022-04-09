//const express = require('express');
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
//const port=3001
const port = process.env.SERVER_PORT
const app = express()

app.get ('/', (req, res)=>{
    res.send('API is alive!')

})

app.listen(port, ()=>{
    console.log(`server is running on port : localhost:${port}`)
})