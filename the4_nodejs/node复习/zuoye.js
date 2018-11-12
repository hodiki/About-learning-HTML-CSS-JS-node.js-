/*
    name
    sex
    phonenumber
    weixin
    qq
    email
    touxiang
*/
var MongoControl = require('./db')
var info = new MongoControl('test','info')
// info.insert(
//     {
//         name : "莫磊",
//         sex : "other",
//         phoneNumber : "4000000000",
//         weixin : 'molei_shuai',
//         qq : '10000',
//         email : "",
//         touxiang : '/img/default.jpeg'
//     },()=>{}
// )

var express = require('express')
var app = express()
app.listen(3000)

app.use(express.static('./static'))

app.get('/getInfo',function(req,res){
    info.find({name : "莫磊"},(err,data)=>{
        res.send(data)
    })
})