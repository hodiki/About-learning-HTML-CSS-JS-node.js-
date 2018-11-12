var http = require('http')

//这是一个http服务器

//req 前端发来的请求
//res 我们发起的响应

//http://127.0.0.1:3000/

var server=http.createServer((req,res)=>{
    res.write('hello sun of beach')
    console.log('有一个傻比访问了')
    res.end(()=>{
        console.log('有一个傻比访问了')
    }) //结束一次相应

})


server.listen(3000) //监听3000端口