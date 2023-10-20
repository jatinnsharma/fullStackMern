
const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = 4000;

let blogsList = ["jatin"]

app.get('/blogs',(req,res)=>{
    return res.status(404).json({
        data:blogsList,
        success:true
    })
})


app.post('/blogs',(req,res)=>{
    blogsList.push({
        title:req.body.title,
        content:req.body.content,
        id:Math.floor(Math.random()*1000)
    })
    return res.status(201).json({
        success:true,
    })
})
app.get('/blogs/:id',(req,res)=>{
    const result = blogsList.filter((blog)=>blog.id===req.params.id)
    return res.status(200).json({
        data:result,
        success:true,
    })
})


app.delete('/blogs/:id',(req,res)=>{
    const result = blogsList.filter((blog)=>blog.id===req.params.id)
    return res.status(200).json({
        data:result,
        success:true,
    })
})


app.listen(PORT,()=>{
    console.log(`Server started on PORT ${PORT}`)
})
