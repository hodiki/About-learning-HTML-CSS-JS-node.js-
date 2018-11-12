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
        // req.url
        
        // req.headers
    )
    
    res.writeHead(
        200,                    //状态码
        {
            "Content-Type":"text/html;charset=utf-8"  //mime标准 传输某物
        }
    )
        if(req.url === '/'){
            fs.readFile('C:/Users/圣光/Desktop/html,css,js/the3/9.22/l6s.html',{encoding:'UTF-8'},(err,data)=>{
                res.write(data)
                res.end()
            })
        }else{
            fs.readFile('C:/Users/圣光/Desktop/html,css,js/the3/9.22/index.html',{encoding:'UTF-8'},(err,data)=>{
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