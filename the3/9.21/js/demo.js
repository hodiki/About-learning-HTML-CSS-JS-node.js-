const fs =require('fs')
const path =require('path')

var fn = function(nowPath){
fs.readdir(nowPath,(err,Files)=>{
    Files.forEach(e=>{
        console.log(e)
        var newPath = path.join(nowPath,e)
        fs.stat(newPath,(err,stats)=>{

            if(err){
                return console.log(err)
            }

            if(stats,isFile()){
                var pahtObj = path.parse(newPath)
                if(pahtObj.ext ==='.txt'){
                    console.log(newPath)
                }
                return
            }
            fu(newPath)

        })
    })
    // var newPath = path.join('./9.21',Files[1])

})
}
fn('./123')

