const express =require('express')
const app=express()
var bodyParser = require('body-parser');
var querystring = require('querystring')
var url = require('url')

var mylist = [
    // {
    //     name:'123'
    // }
]
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('./jq'));
// app.use(express.static('./index.html'));
//静态目录
//app.use(express.static('./123'))


//todolist
//content , title

//格式
//http://127.0.0.1:32861/add?title=123 &content=22
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" )
 })

 app.get('/delete', function (req, res) {
    var urlObj2 = url.parse(req.url)
    var delis = querystring.parse(urlObj2.query).delis   //拿到ajax传递的delis
        if(mylist[delis]){
            console.log(delis)
            mylist.splice(delis, 1);
            console.log(mylist)
        }
 })
 

 app.get('/get', function (req, res) {
     console.log(typeof(mylist))
    res.end(JSON.stringify(mylist))
 })
// var urlObj = url.parse(req.url)
// if(urlObj.pathname === '/get'){
//     res.writeHead(200,{
//         "Content-Type" : "application/json"
//     })
//     res.end(JSON.stringify(gouwuche))}

app.post('/ss', urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    var response = {
        "add":req.body.add
    };
    mylist.push({name:response.add})
    console.log(response.add)
    res.end()
    // res.end(JSON.stringify(response));
 })

// var Note=function(title,content){
//     this.title = title
//     this.content = content
//     this.time = new Date().getTime()
// }

// app.get('/add',(req,res)=>{
//     var {content , title} = req.query

//     if(!content || !title){
//         return res.send({msg:'fuck off'})
//     }

//     todolist.push(
//         new Note(title , content)
//     )
//     res.send({msg:'surprise!!!'})
// })

// app.get('/get',(req,res)=>{
//     res.send({data: todolist})
// })

app.listen(32861)