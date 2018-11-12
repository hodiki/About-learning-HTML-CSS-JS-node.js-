var news = [
    {
        title:'the first',
        intro:'fffffffffffffffff'
    },
    {
        title:'the second',
        intro:'ssssssssssssssssssssss'
    }
]

var express = require('express')
var app = express()
var path =require('path')
var fs= require('fs')
var ejs = require('ejs')

var middle = function(e){
    // return express.static(e)

    // return function(req,res,next){
    //     fs.readFile(e , function(err, files){
    //         if(err){
                
    //             return;
    //         }
    //         var mime = getMime(extname);
    //         res.writeHead(200, {"Content-type":mime});
    //         res.end(files);
    //     });
    // }
}
app.use(middle('./static'))
// app.use(express.static('./static'))

app.listen(3000)

app.get('/news', function (req, res) {
    ejs.renderFile('./static/new_2.ejs', { news: news, tag: '测试' }, function (err, data) {
        res.send(data)
    })
})