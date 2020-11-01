const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.get('/',(req,res)=>{
    res.json('App is running at 5000')
})

app.get('/api/products',(req,res)=>{
    res.json('products')
})

app.listen(process.env.PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))