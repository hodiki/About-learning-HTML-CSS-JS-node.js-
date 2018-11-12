// 1. 链接数据库
// 2. 选择库
// 3. 选择集合
// 4. 操作数据
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient

const mongodbUrl = 'mongodb://127.0.0.1:27017'

// 连接数据库
MongoClient.connect(mongodbUrl, { useNewUrlParser: true }, function (err, client) {
    if (err) {
        return console.log(err)
    }
    var db = client.db('goods') //选择库
    var collection = db.collection('junkfood')
    // 选择表
    // collection.find({price : 10}).toArray(function(error,data){
    //     console.log(data)
    //     console.log(typeof data)
    //     client.close()
    // })
    // collection.insert({name : "肥宅小汉堡" , price : 50,desc : "真正的肥宅面前没有大汉堡"},function(error,result){
    //     console.log(result)
    // })
    // collection.remove({price : 10}, function (error, result) {
    //     console.log(result)
    //     client.close()
    // })
    // collection.update({price : 20},{$set : {price : 100}}, function (error, result) {
    //         console.log(result)
    //         client.close()
    //     })
})