const dbConnet = require('./database')
const express = require("express")
const app = express()

app.get('/',async (req,res)=>{
    let data = await  dbConnet();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)

})


app.listen(8000,()=>{
    console.log('Server is running on port')
})