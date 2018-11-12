var MongoControl= require('./db2')

var c =new MongoControl('user','user') //连接数据库

c.insert({name:'jj'},function(){})
c.find({name:'jj'},function(){console.log(this.callback)})