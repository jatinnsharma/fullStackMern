const express = require('express')

const app = express()

app.use((req,res,next)=>{

    console.log(req.hostname,req.ip,req.method,new Date())
    next()

})

app.get('/',(req,res)=>{
    res.send({type:'Get'})
})

app.put('/',(req,res)=>{
    res.send({type:'PUT'})
})
app.delete('/',(req,res)=>{
    res.send({type:'Delete'}) 
})

app.patch('/',(req,res)=>{
    res.send({type:'Patch'})
})
app.post('/',(req,res)=>{
   res.send({type:'Post'})
})


app.listen(8080,()=>{
    console.log('server is running on port nmber : 8080')
})