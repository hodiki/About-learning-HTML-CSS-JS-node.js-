var http = require('http')
var url = require('url')
var path =require('path')
var fs=require('fs')

var getType = function(reqUrl){
    var {ext} = path.parse(reqUrl)
    switch(ext){
        case '.css':
            return 'text/css'
        case '.html':
            return 'text/html'
        case '.js':
            return 'x-application/javascript'
        default :
            return 'text/plain'
    }
}

http.createServer((req,res)=>{
    console.log(req.url)
    var handle404 =function(){
        res.writeHead(404,{
            "Content-Type":"text/plain"
        })
        res.end('fuck')
    }
    var next = function(){
        handle404()
    }
    fs.readFile(
        path.join('./gouwuche',req.url),
        (err,data)=>{
            if(err){
                next()
                return
            }
            var contentType=getType(req.url)
            res.writeHead(200,{
                'Content-Type': contentType
            })
            res.end(data)
        }
    )
    
}).listen(5000)