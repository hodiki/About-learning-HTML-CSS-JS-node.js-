var gouwuche = []
var itemList = [
    {
        name: "小米霹雳无敌版 1200g内存",
        price: 199
    },
    {
        name: "小米霹雳无敌版 120g内存",
        price: 1999
    }
]
var buy = function (index) {
    //添加到购物车
    gouwuche.push(itemList[index])
    console.log(gouwuche)
}
var deing=''

var http = require('http')
var url = require('url')
var querystring = require('querystring')
http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    // req.url => /add?id=9
    console.log( `接受的请求路径为 ${req.url}`)

    var urlObj = url.parse(req.url)
    var urlObj2 = url.parse(req.url)

    if(urlObj.pathname === '/add'){
        var id = querystring.parse(urlObj.query).id
        console.log(id)
        res.writeHead(200,{
            "Content-Type" : "application/json"
        })
        if(itemList[id]){
            buy(id)
            res.end(JSON.stringify({
                code : 200,
                msg : "添加成功！"
            }))
        } else {
            res.end(JSON.stringify({
                code : 200,
                msg : "没有这个商品啊傻逼！"
            }))
        }
        
        return 
    }
    var arraylength = gouwuche.indexOf(3);
    if(urlObj.pathname === '/get'){
        res.writeHead(200,{
            "Content-Type" : "application/json"
        })
        res.end(JSON.stringify(gouwuche))
        return 
        
    }if(urlObj.pathname === '/delete'){
        var delis = querystring.parse(urlObj2.query).delis   //拿到ajax传递的delis
        if(gouwuche[delis]){
            console.log(delis)
            gouwuche.splice(delis, 1);
            console.log(gouwuche)
        }
        return 
    }
    
}).listen(3000)
// :3000


console.log(gouwuche)