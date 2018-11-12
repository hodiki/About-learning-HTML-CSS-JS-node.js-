var news = [
    {
        title : "女儿误中9枪身亡，墨西哥议员得知噩耗在国会上痛哭",
        intro : "原标题：女儿误中9枪身亡，墨西哥议员得知噩耗在国会上痛哭"
    },
    {
        title : "杭州：数万“单身狗”相亲忙脱单",
        intro : "2018年11月11日，单身男女青年在参加杭州万人相亲大会。"
    },
    {
        title : "中国双11吸引韩国“剁手党” 乐天急了：促销300亿",
        intro : "海外网11月11日消息，今天（11日），中国一年一度的“双十一”电商狂欢节来临，各家电商网站销售额不断刷新纪录。韩国业界也看在眼里，急在心里。"
    }
]


var express = require('express')
var app = express()
var fs = require('fs')
var ejs = require('ejs')
var middle = function(){
    
}
app.use(middle('./static'))

app.listen(3000)

app.get('/news',function(req,res){
    // res.send(news)
    ejs.renderFile('./static/new_2.ejs',{news : news,tag : '测试'},function(err,data){
        res.send(data)
    })
})
