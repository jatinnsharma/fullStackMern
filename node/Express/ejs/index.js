const express = require('express')
const app = express()
const PORT = 8080

const data= [{id:1,name:"Jatin",email:'jatinsharma22@gmail.com',phone:909090909}]

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('table.ejs',{data})
})

app.post('/data',(req,res)=>{
    const pushData = {
        id:data.length+1,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phoneNumber,
    }
    data.push(pushData)
    res.redirect('/')
    
})
app.post('/delete/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const index = data.findIndex(employee => employee.id === idToDelete);

    if (index !== -1) {
        data.splice(index, 1);
    }
    res.redirect('/');
});
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})