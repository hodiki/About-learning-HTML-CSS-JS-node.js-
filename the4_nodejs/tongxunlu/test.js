var MongoControl = require('./tools/db')

var c = new MongoControl('contact','test')

// 
// c.insert({name: 3} , function(){})
// c.remove({name : 2},()=>{})
// c.removeById('5bde812fdb67556e42835931',()=>{})

// c.find({name : 777},(err,data)=>{
//     console.log(data)
// })
// c.findById('5bde820b85079ce789288627',(err,data)=>{
//         console.log(data)
//     })


// c.update({name : 777},{age : 000},()=>{})
// c.updateById('5bde820b85079ce789288627',{age : 10},function(){})