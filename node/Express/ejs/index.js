const express = require('express')
const app = express()
const PORT = 8081

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

app.get('/edit/:id', (req, res) => {
    const idToEdit = parseInt(req.params.id);
    const employeeToEdit = data.find(employee => employee.id === idToEdit);
    res.render('edit', { employeeToEdit });
});

app.post('/update/:id', (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phoneNumber;
    const employeeToUpdate = data.find(employee => employee.id === idToUpdate);
    if (employeeToUpdate) {
        employeeToUpdate.name = name;
        employeeToUpdate.email = email;
        employeeToUpdate.phone = phone;
    }
    res.redirect('/');
});


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})