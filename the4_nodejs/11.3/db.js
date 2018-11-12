var mongodb = require('mongodb')
var {MongoClient , ObjectId} =  mongodb

//insert


//remove
//removeById

// search
// searchById

// update
// updateById

var MongoControl = function(dbName,collectionName){
    var dbName = dbName
    var collectionName = collectionName
    this.insert = function(docs,callback){
        MongoClient.connect('mongodb://127.0.0.1:27017',function(error,client){
            if(error){
                callback(error , null)
                return
            }
            var c = client.db(dbName).collection(collectionName)
            c.insert(docs,function(err,result){
                if(err){
                    callback(err,null)
                } else {
                    callback(null , result)
                }
            })
        })
    }
    this.remove = function(query,callback){
        MongoClient.connect('mongodb://127.0.0.1:27017',function(error,client){
            if(error){
                callback(error , null)
                return
            }
            var c = client.db(dbName).collection(collectionName)
            c.remove(query,function(err,result){
                if(err){
                    callback(err,null)
                } else {
                    callback(null , result)
                }
            })
        })
    }
    this.removeById = function(_id,callback){
        this.remove(ObjectId(_id),callback)
    }
}





// var a = new MongoControl('contact','test')
// a.insert({name : 1},function(err,result){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })

module.exports = MongoControl