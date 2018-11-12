// 后端 =》 操作数据库 、 本地文件 =》 node.js java c++ basic 
//  》 http ftp
//  》 http模块
//  》 createServer().listen(3000)

// CommandJs

/*

GET / HTTP/1.1

*/

var formidable = require('formidable')

var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){

    res.statusCode = 304
    // Location : http://baidu.com
    res.setHeader('Set-Cookie','BAIDU_ID=0.1239102w1920321')

    // 请求
    // req.method //方法
    // req.url //请求的路径
    // req.headers //请求头字段
    console.log('接收到 ' + req.url)
    //'GET' 'get'
    if(req.method.toLowerCase() === 'get'){
        if(req.url === '/'){
            fs.readFile('./static/index.html',function(err,data){
                if(err){
                    console.log(err)
                    res.writeHead(500)
                    res.end()
                    return
                }
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data)
                res.end()
            })
        }
        if(req.url === '/css/index.css'){
            
        }
    }

    if(req.method.toLowerCase() === 'post'){
        if(req.url === '/submit'){
            var form = new formidable.IncomingForm()
            form.uploadDir = './static/img'
            form.parse(req,function(err,fields,files){
                var {path} = files.file
                console.log(path)
                res.writeHead(200,{'Content-Type' : 'text/plain;charset=utf-8'})
                res.write('文件接收完成')
                res.end(JSON.stringify( {imgPath : path} ))
            })
        }
    }

    // // 响应
    // res.writeHead(200,{"Set-Cookie" : "nihao=nihao"})
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('1')
    // res.write(2)
    // res.end()

}).listen(3000)


// 前端 =》 展示页面 =》 后端的一部分


// /getAllNumber
// /login
// 


// 1. form enctype="multipart/form-data" POST
// 2. formidable