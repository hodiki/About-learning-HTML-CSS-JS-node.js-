const express = require('express')
const app = express()
const querystring = require('querystring')
const mongodb = require('mongodb')
const { MongoClient } = mongodb
const path = require('path')
// user user

// username
// password

app.get('/', function (req, res) {
    res.sendFile(path.resolve('./login.html'))
})

// app.post('/register', function (req, res) {

// })

//此处使用的是mongodb数据库，跑此代码前先挂起mongodb服务器

//登陆
app.post('/login', (req, res) => {
    var body = ''
    req.on('data', function (chunk) {
        body += chunk
        // username=root&password=123456
    })
    req.on('end', function () {
        var { username, password } = querystring.parse(body)
        MongoClient.connect('mongodb://127.0.0.1:27017', function (error, client) {
            if (error) {
                res.status(500).send()
                return
            }
            var db = client.db('user')
            var colleciton = db.collection('user')
            colleciton.find({ username: username, password: password }).toArray(function (err, result) {
                if (err) {
                    res.status(500).send()
                    return
                }
                if (result.length === 0) {
                    // 找不到
                    res.status(200).send('登录很失败，账号密码啥的都不对！')
                } else {
                    res.status(200).send('登录成功！')
                }
            })
        })
    })
})


//注册
app.post('/register', (req, res) => {
    var body = ''
    req.on('data', function (chunk) {
        body += chunk
        // username=root&password=123456
    })
    req.on('end', function () {
        var { username, password } = querystring.parse(body)
        MongoClient.connect('mongodb://127.0.0.1:27017', function (error, client) {
            if (error) {
                res.status(500).send()
                return
            }
            var db = client.db('user')
            var colleciton = db.collection('user')
            colleciton.find({ username: username }).toArray(function (err, result) {
                if (err) {
                    res.status(500).send()
                    return
                }
                if (result.length === 0) {
                    // 找不到
                    res.status(200).send('注册成功')
                    colleciton.insert({ username: username, password: password })
                } else {
                    res.status(200).send('该账号已被注册')
                }
            })
        })
    })
})


//注册及时查重
app.get('/checUsername', function (req, res) {
    //username
    var { username } = req.query
    MongoClient.connect('mongodb://127.0.0.1:27017', function (error, client) {
        if (error) {
            res.status(500).send()
            return
        }
        var db = client.db('user')
        var colleciton = db.collection('user')
        colleciton.find({ username: username }).toArray(function (err, result) {
            if (err) {
                res.status(500).send()
                return
            }
            if (result.length === 0) {
                // 找不到
                res.status(200).send({ status: 1 })
            } else {
                res.status(200).send({ status: 0 })
            }
        })
    })
})




app.listen(3000)