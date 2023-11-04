const express = require('express')
const app = express()

const path = require('path')
require('dotenv').config()

const loginPage = path.join(__dirname+'/index.html')
const header = path.join(__dirname,'header')
const PORT = process.env.PORT || process.env.PORT2


app.get('/',(req,res)=>{
res.sendFile(`${header}/Header.html`)
})
app.get('/about',(req,res)=>{
    res.send('<h1>this is a about page</h1>')
    res.status(200).send()
})
 app.get('/login',(req,res)=>{
   res.sendFile(loginPage)
 })

 app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
 });


