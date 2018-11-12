var http = require('http')
var url = require('url')
var querystring = require('querystring')

// 拿post请求的body中的数据

// http.createServer((req,res)=>{

//     var query = ''
//     req.on('data',function(chunk){
//         query+=chunk.toString()
//     })
//     req.on('end',function(){
//         var wd=querystring.parse(query).wd
//         res.writeHead(200,{
//             'Content-Type':'text/plain;charset=utf-8'
//         })
//         res.end(`你搜索的是 ${wd}`)
//     })
// }).listen(3000)

var data = [{
    name: 1
}, {
    name: 2
}]
data='123456'
http.createServer((req, res) => {
    var callbackName = querystring.parse(url.parse(req.url).query).callback
    console.log(callbackName)
    res.writeHead(200, {
        'Content-Type': 'x-application/javascript'
    })
    res.end(
        `${callbackName}(${JSON.stringify(data)})`
    )
}).listen(3000)