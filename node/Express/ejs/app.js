const express = require('express')

const app = express()

const data = [{id:1,text:'sample text'}]

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('todo',{data})
})

app.post('/data',(req,res)=>{
    const puttingData = {
        id:data.length+1,
        text:req.body.text
    }
    data.push(puttingData)
    res.redirect('/')
})

app.post('/delete/:id',(req,res)=>{
    const idToDelete = parseInt(req.params.id)
    const index = data.findIndex(todo=>todo.id === idToDelete)
    

    if (index !== -1) {
        data.splice(index, 1);
    }
    res.redirect('/');
})


app.listen(8080,()=>{
    console.log(`Server is running on port number `,8080)
})