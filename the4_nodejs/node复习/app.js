var express = require('express')
var app = express()
app.listen(3000)
var formidable = require('formidable')

// /staic/img/upload_12y38u20sj91uj09e01j91
app.use('/static',express.static('./static'))
app.use(express.static('./static'))


app.post('/submit',function(req,res){
    var form = new formidable.IncomingForm()
    form.uploadDir = './static/img'
    form.parse(req,function(err,fields,files){
        var {path} = files.file
        res.send({path : path})
    })
})

// 在数据库里维护个人信息
// 头像