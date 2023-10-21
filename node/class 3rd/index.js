const http = require('http')
const fs = require('fs')

const index = fs.readFile('index.html','utf-8',(err)=>{
    console.log(err)
})

http.createServer((req,res)=>{

    console.log(req.url)
    res.setHeader('Content-Type','text/html')
    res.write(index)
    res.end()
}).listen(8080,()=>{
    console.log('Hello !!! your server is running on PORT : 8080 ')
})