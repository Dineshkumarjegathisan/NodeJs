const http = require('http')
const fs= require('fs');
const url = require('url')

http.createServer((req,res)=>{
    const weblink = url.parse(req.url ,true);
    const filePath = "." + weblink.pathname ;
    fs.readFile(filePath,(err ,data)=>{

        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end('404 File Not Found');
        }
        else
        {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data) ;
            res.end() ;
        }
    })
}).listen(3005);