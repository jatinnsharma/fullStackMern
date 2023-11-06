import dotenv from 'dotenv'
import express from 'express'
import bodyParser from "body-parser"
const app = express()
import cors from 'cors'
app.use(cors())
app.use(bodyParser.json());

//set dotenv path
dotenv.config({
    path:"./.env"
})
const PORT = process.env.PORT

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const data = []
app.get('/',(req,res)=>{
    res.send("Welcome ! this is home page")
})
app.post('/data',(req,res)=>{
    const putData={
        id:data.length+1,
        task:req.body.newTodo
    }
    data.push(putData)
    res.json(putData);        
})
app.get('/getData',(req,res)=>{
    res.send(data)
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})