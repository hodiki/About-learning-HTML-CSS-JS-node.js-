const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended : false})
const cookieParser = require('cookie-parser')
const mongodb = require('mongodb')
const {MongoClient} = mongodb
app.use(express.static('./static'))
app.use(cookieParser())
const path = require('path')
const fs = require('fs')
app.listen(3000)

const MongoControl = require('./mongodb_control')
const contact = new MongoControl('contact' , 'test')
const users = new MongoControl('contact','user')
// 1 0 
app.use(function(req,res,next){
    res.handle500 = function(){
        res.status(500).send({code : 0 , msg : "服务器错误"})
    }
    next()
})


// session
var server_token = '' // 保存唯一标识
var expire_time = 0   // 设置过期时间
app.post('/login',urlencodedParser,(req,res)=>{
    var {username,password} = req.body //提取账号密码
    // 查表
    users.find({username,password},(err,result)=>{
        if(err) return res.handle500()
        if(result.length === 0){
            // 不存在
            res.status(403).send("账号密码不争气")
        } else {
            // 保存生成的唯一token
            server_token = Math.random().toString()

            // 设置过期时间
            expire_time = new Date().getTime() + 10 * 1000
            
            // 把token发送到cookie
            res.cookie('token' , server_token)
            res.send('登录成功')
        }
    })
})

// 拦截
app.use((req,res,next)=>{
    var {token} = req.cookies //在cokies中取出token
    console.log(server_token , token)
    var nowTime = new Date().getTime()  // 获取当前请求的时间

    // 判断请求是否过期
    if(nowTime <= expire_time){     
        // 可以访问
        // 检查token是否对应
        if(server_token === token){

            // 更新过期时间
            expire_time = new Date().getTime() + 10 * 1000
            next()
        } else {
            res.status(403).send("token不正确")
        }
    } else {
        // 不可以访问
        res.status(403).send("拒绝访问 - token过期")
    }
    
})


// 获取全部联系人
app.get('/allContact',(req,res)=>{
    contact.find({},function(err,result){
        if(err){
            res.handle500()
            return 
        }
        res.send({code : 1 , data : result})
    })
})
// 添加联系人
app.post('/addContact',jsonParser,(req,res)=>{
    let {name , phoneNumber , weixin , qq , address , isSingle} = req.body
    contact.insert({name,phoneNumber,weixin,qq,address,isSingle},function(err,result){
        if(err) return res.handle500()
        res.send({code:1 , msg : "事在人为，祝你好运！"})
    })
})
// 删除联系人 
app.get('/removeContact',(req,res)=>{
    var {_id} = req.query
    contact.removeById(_id,function(err,reusult){
        if(err){
            res.handle500()
            return 
        }
        res.send({code : 1 , msg : "删除成功"})
    })
})
// _id , name = 1 
app.post('/updateContact',jsonParser,(req,res)=>{
    var {_id , newData} = req.query
    contact.updateById(_id,newData,(err,result)=>{
        if(err) return res.handle500()
        res.send({code : 1 , msg : "更新成功"})
    })
})
//keyword=weixin&key=666
app.get('/search',(req,res)=>{
    var {keyword,key} = req.query
    // weixin : "666"
    // keyword : "666"
    var obj = {}
    obj[keyword] = key
    // weixin : 666
    contact.find(obj,function(err,result){
        if(err) return res.handle500()
        res.send({code : 1 , data : result})
    })
})
