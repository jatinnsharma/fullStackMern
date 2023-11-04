const express=require('express')

const app=express()
const port = 4000

const path=require('path')

const index=path.join(__dirname+'/index.html')

const header=path.join(__dirname+'/header')
app.get('/header',(req,res)=>{
    res.sendFile(header+'/Header.html')

})

app.get('/index',(req,res)=>{
    res.sendFile(index)
})
app.get('/',(req,res)=>{
    res.send('this is home page')
})
app.get('/about',(req,res)=>{
res.send('<h1>this is about page</h1>')
})

app.listen(port,()=>{
    console.log('server is running on port '+port)
    console.log(`server is running on port ${port}`)
})