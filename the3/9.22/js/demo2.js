var http = require('http')
var fs = require('fs')
var url=require('url')

var u=''

var server=http.createServer((req,res)=>{

    
    // console.log(
    //     req.method,
    //     req.url,
    //     req.headers
    // )

  
        console.log(
        // req.method
        req.url
        
        // req.headers
    )
    
    
        if(req.url === '/'){
            res.writeHead(
                200,                    //状态码
                {
                    "Content-Type":"text/html"  //mime标准 传输某物
                }
            )
            fs.readFile('C:/Users/圣光/Desktop/html,css,js/the3/9.22/index.html',{encoding:'UTF-8'},(err,data)=>{
                res.write(data)
                res.end()
            })
        }
        if(req.url === '/css/calendar.css'){
            res.writeHead(
                200,                    //状态码
                {
                    "Content-Type":"text/css"  //mime标准 传输某物
                }
            )
            fs.readFile('C:/Users/圣光/Desktop/html,css,js/the3/9.22/css/calendar.css',{encoding:'UTF-8'},(err,data)=>{
                res.write(data)
                res.end()
            })
        }
        if(req.url === '/js/calendar.js'){     //可以通过修改html中的src，改变url的值
            res.writeHead(
                200,                    //状态码
                {
                    "Content-Type":"application/x-javascript"  //mime标准 传输某物
                }
            )
            fs.readFile('C:/Users/圣光/Desktop/html,css,js/the3/9.22/js/calendar.js',{encoding:'UTF-8'},(err,data)=>{
                res.write(data)
                res.end()
            })
        }
    
    
    
    // res.write('hello sun of beach嘿嘿嘿') //编写响应体
    // res.end(()=>{
    //     console.log('有一个傻比访问了')
    // }) 

})


server.listen(3000) 