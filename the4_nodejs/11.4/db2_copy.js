var mongodb = require('mongodb')
var { MongoClient, ObjectId } = mongodb

var MongoControl = function (dbName, collectionName) {
    var dbName = dbName
    var collectionName = collectionName

    this.insert = function (docs, callback) {
        MongoClient.connect('mongodb://127.0.0.1:27017', function (error, client) {
            if (error) {
                callback(error, null)
                return
            }
            var c = client.db(dbName).collection(collectionName)
            c.insert(docs, function (err, result) {
                if (err) {
                    callback(err, null)
                } else {
                    callback(null, result)
                }
                client.close()
            })
        })
    }
}

this.remove = function (query, callback) {
    MongoClient.connect('mongodb://127.0.0.1:27017', function (error, client) {
        if (error) {
            callback(error, null)
            return
        }
        var c = client.db(dbName).collection(collectionName)
        c.remove(query, function (err, result) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, result)
            }
            client.close()
        })
    })
}

this.removeById = function (_id, callback) {
    this.remove({ _id: ObjectId(_id) }, callback)
}

this.find = function (query, callback) {
    MongoClient.connect('mongodb://127.0.0.1:27017', function (error, client) {
        if (error) {
            callback(error, null)
            return
        }
        var c = client.db(dbName).collection(collectionName)
        c.find(query, function (err, result) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, result)
            }
            client.close()
        })
    })
}

this.findById = function(_id,callback){
    this.find({ _id: ObjectId(_id) }, callback)
}

this.update = function (query,newDocs,callback) {
    MongoClient.connect('mongodb://127.0.0.1:27017', function (error, client) {
        if (error) {
            callback(error, null)
            return
        }
        var c = client.db(dbName).collection(collectionName)
        c.update(query,{$set:newDocs}, function (err, result) {
            if (err) {
                callback(err, null)
            } else {
                callback(null, result)
            }
            client.close()
        })
    })
}

this.updateById = function(_id,newDocs,callback){
    this.find({ _id: ObjectId(_id) },newDocs, callback)
}

module.exports = MongoControl