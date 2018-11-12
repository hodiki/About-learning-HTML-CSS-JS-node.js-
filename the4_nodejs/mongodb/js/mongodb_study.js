//1.连接数据库
//2.选择库
//3.选择集合
//4.操作数据

var mongodb = require('mongodb')
var MongoClient= mongodb.MongoClient

const mongodbUrl = 'mongodb://127.0.0.1:27017'

//连接数据库
MongoClient.connect(mongodbUrl,{useNewUrlParser:true},function(err,client){
    if(err){
        return console.log(err)
    }
    var db = client.db('goods') //选择库
    var collection=db.collection('students')
    console.log(collection)
})