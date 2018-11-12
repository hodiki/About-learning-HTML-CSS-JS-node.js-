var express = require('express')
var app = express

app.listen(3000)

app.use('./admin',require('./admin'))

app.get('/',function(req,res){
    res.send('首页!')
})