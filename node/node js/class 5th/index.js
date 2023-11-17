const http = require('http')
const fs = require('fs')
const card = fs.readFileSync('index.html','utf-8',(error)=>[
    console.log(error)
])
const productData = fs.readFileSync('productData.json','utf-8',(error)=>{
    console.log(error)
})

const carts = fs.readFileSync('cards.html','utf-8',(error)=>{
    console.log(error)
})
http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('<h1>This is home page</h1>')
    }
    else if(req.url === '/cart'){
        res.setHeader('Content-Type','text/html')
        res.end(card)
    }
    else if(req.url === '/data'){
        res.setHeader('Content-Type','application/json')
        res.end(productData)
    }
    else if(req.url ==="/carts"){
        res.setHeader('Content-Type','text/html')
        res.end(carts)
    }
    else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end('<h1>Not found</h1>')
    }
}).listen(8080)