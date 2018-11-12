var http = require('http')
var url = require('url')
var fs = require('fs')
var arr = []

// var {htmlParser}=require('js-parse-html')

//http://h.hiphotos.baidu.com/zhidao/pic/item/b3b7d0a20cf431ad0444eb3a4d36acaf2edd981b.jpg
// var request = http.request(
//     {
//         protocol: 'http:',
//         host: 'm.mmjpg.com',
//         path: '/',
//         port: 80
//     }
// )

// request.on('response', function (res) {
//     //res:http.IncomingMessage
//     res.on('data', function (chunk) {
//         arr.push(chunk)
//     })
//     res.on('end', function () {
//         // console.log(
//         //     Buffer.concat(arr)
//         // )
//         // fs.writeFile('./123.jpg', Buffer.concat(arr), (err) => { })
//         var html = Buffer.concat(arr).toString()
//         var dom = htmlParser(html)
//         for(var i=0;i<10;i++){
//         var src = dom.getElementsByTagName('img')[i].getAttribute('src')
//         console.log(src)
//         }
//     })
// })

// request.end()

//express
const express =require('express')
const app=express()

app.get('/',(req,res)=>{
    // console.log(
    //     req.query
    // )
    res.send('123123')
})

app.listen(3000)