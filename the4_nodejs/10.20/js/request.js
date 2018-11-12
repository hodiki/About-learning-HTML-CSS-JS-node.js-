var http = require('http')
var url = require('url')
var fs = require('fs')
var arr = []

//http://h.hiphotos.baidu.com/zhidao/pic/item/b3b7d0a20cf431ad0444eb3a4d36acaf2edd981b.jpg
var request = http.request(
    {
        protocol: 'http:',
        host: 'h.hiphotos.baidu.com',
        path: '/zhidao/pic/item/b3b7d0a20cf431ad0444eb3a4d36acaf2edd981b.jpg',
        port: 80
    }
)

request.on('response', function (res) {
    res.on('data', function (chunk) {
        arr.push(chunk)
    })
    res.on('end', function () {
        console.log(
            Buffer.concat(arr)
        )
        fs.writeFile('./123.jpg', Buffer.concat(arr), (err) => { })
    })
})

request.end()