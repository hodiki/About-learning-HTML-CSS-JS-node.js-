const fs=require('fs')
const path=require('path')

var fn = function(nowPath){
    fs.readdir('./img',(err,files)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(files)
        files.forEach(e=>{
            var newPath =path.join('./img',e)   //./本文件 .. /上一层
            fs.stat(newPath,(err,stats)=>{
                
                if(err){
                    console.log(err)
                    return
                }

                if(stats.isFile()){
                    var pathObj = path.parse(newPath)

                    if(pathObj.exit === '.txt'){
                        console.log(nowPath)
                    }
                    return

                }
                // fn(newPath)
            })
            console.log(newPath)
        })
    })
}
fn('C:\Users\圣光\Desktop\html,css,js\the3\9.16\js')