const fs =require('fs') //引入模块
const path =require('path') //引入模块

//遍历 (暴力)(同步)
//而异步在执行后会直接执行下一项

var fn =function(nowPath){
    try{
        var files = fs.readdirSync(nowPath)
        console.log(nowPath)
    }catch(err){
        if(err.code === 'ENOTDIR'){
             console.log(nowPath)
             fs.unlinkSync(nowPath)
        }
        return
    }
    files.forEach(e=>{
        var newPath = path.join(nowPath,e)
         //console.log(newPath)
        fn(newPath)
    })
    fs.rmdirSync(nowPath)
}

// tUrl = 'C:/Users/圣光/Desktop/html,css,js/the3/9.21/js'

tUrl='./123'

//动起来会把123全删了

fn(tUrl)