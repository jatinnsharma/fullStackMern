const http = require('http');
const user = require('./userData')

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Hello ,this is home page')
    }
    else if (req.url === '/about'){
        res.end('hello , welome to about')
    }
    else if (req.url ==='/user'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write(JSON.stringify(user))
        res.end()
    }
    else {
        res.writeHead( 404, {'content-type' : 'text/plain'});
        res.end('not found')
    }
}).listen(8000)