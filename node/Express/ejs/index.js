const express = require('express')
const app = express()
const PORT = 8080

const EmployeeData = [{id:1,name:"Jatin",email:'jatinsharma22@gmail.com',phoneNumber:909090909}]

app.use(express.urlencoded({ extended: false }));

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const user ={
        name:'Jatin',
        email:'Jatinsharma223@gmail.com',
        phoneNumber:9050603853
    }

    res.render('table',{EmployeeData})
})

app.post('/data',(req,res)=>{
    const data = {
        id:data.length+1,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phoneNumber,
    }
    EmployeeData.push(data)
    res.render('table',{EmployeeData})
    
})




app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})