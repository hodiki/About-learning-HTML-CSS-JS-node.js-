var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
app.listen(3000)
var mime = require('mime')

// app.use(express.static('./static'))


//  /news.html   =>  ./static/news.html
var middle = function(staticPath){
    return function(req,res,next){
        var filePath  = path.join(staticPath ,req.url)
        fs.readFile(filePath,function(err,data){
            if(err){
                next()
            } else {
                res.setHeader('Content-Type', mime.getType(filePath))
                res.send(data)
            }
        })
    }
}

//middle => function(req,res,next)

app.use(middle('./static'))
