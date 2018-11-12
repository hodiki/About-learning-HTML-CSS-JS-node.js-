var http = require('http')

var server=http.createServer((req,res)=>{
    res.write('hello sun of beach')
    res.end(()=>{
        console.log('有一个傻比访问了')
    }) 

})


server.listen(3000) 