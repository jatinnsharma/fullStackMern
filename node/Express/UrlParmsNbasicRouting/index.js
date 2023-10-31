const express = require('express');

const app = express()
const path = require('path')

const table = path.join(__dirname+'/Table.html')

app.get('/',(req,res)=>{
    res.send('<h1>This is home page</h1>');
})


app.get('/about',(req,res)=>{
    res.send(`<label>Enter your name: </label><input type="text"  value=${req.query.name} />
    Go to home page 
    <a href="/">Home</a>`)
})

app.get('/table',(req,res)=>{
    res.sendFile(table)
})


app.listen(8080);