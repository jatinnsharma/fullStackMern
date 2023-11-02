const express = require('express')
const app = express()
const path = require('path')


const data = [
    {id:1,title:'animal book',author:'ABC'},
    {id:2,title:'GK',author:'DEF'},
]

app.use(express.urlencoded({extended:false}))
const html = path.join(__dirname+'/index.html')


app.get('/',(req,res)=>{
    res.sendFile(html)
})

app.post('/data',(req,res)=>{
    const bookdata ={ 
        id:data.length+1,
        title:req.body.title,
        author:req.body.author
    }
    console.log(req.body.title,req.body.author)
    console.log(bookdata)
    data.push(bookdata)

    res.redirect('/getData')

})

app.get('/getData',(req,res)=>{
    res.json(data)
})

app.listen(8000,()=>{
    console.log('sever is running on port number 8000 ')
})