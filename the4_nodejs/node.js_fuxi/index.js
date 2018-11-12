var http = require('http')
var fs = require('fs')
var formdable = require('formidable')
http.createServer(function (req, res) {

    //请求
    //req.method // 方法

    if (req.method.toLowerCase() === 'get') {
        if (req.url === '/') {
            fs.readFile('./static/index.html', function (err, data) {
                if (err) {
                    console.log(err)
                    res.writeHead(200)
                    res.end()
                    return
                }
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end()
            })
        }
    }

    //fs.rename()

    if (req.method.toLowerCase() === 'post') {
        if (req.url === '/submit') {
            var form = new formdable.IncomingForm()
            form.uploadDir = './static/img'
            form.parse(req, function (err, fields, files) {
                //重命名
                var {name,path} = files.file
                fs.rename(path,name, function(err){})
                //
                res.writeHead(200, { 'Content_Type': 'text/plain;charset=utf-8' })
                res.write('文件接收完成')
                res.end()
            })
        }
    }
}).listen(3000)