//parse 解析
//format

// const url = require('url')

// var  a = url.parse(
//     'https://www.baidu.com'
// )

// console.log(
//     url.format(a)
// )


//编码和解码

//fs文件、文件夹操作

//readFile
const fs= require('fs')

//异步
// fs.readFile('./1.txt',{encoding:'UTF-8'},(err,data)=>{
//     if(err){
//         console.log(err)  //错误处理（重要）
//         return
//     }
//     console.log(err)
//     console.log(data)
// })

//同步
// fs.readFileSync('./1.txt',{encoding:'UTF-8'},(err,data)=>{
//     console.log(err)
//     console.log(data)
// })

//appendFile 向文件的最后添加文件，如果文件不存在，则创建一个新文件
// fs.appendFile('./2.txt'.'heihei')


//writeFile 直接覆盖,或许新建
// fs.writeFile('./1.txt','yeah')


//copyFile 复制

// fs.copyFile('./1.txt','./4.txt',err=>{

// })

from='./1.txt'
to='./2.txt'
var copy=function(from,to){
    fs.readFile(from,{encoding:'UTF-8'},(err,data)=>{

        if(err){
            console.log(err)  //错误处理（重要）
            return
        }

        console.log(err)
        console.log(data)

        fs.writeFile(to,data,{encoding:'UTF-8'},err=>{

            if(err){
                console.log(err)  //错误处理（重要）
                return
            }
            
            console.log(err)
        })

    })
}

copy(from,to)


//mkdir 创建路径

//readdir 查看路径

// fs.readdir('./',(ree,files)=>{

// })

//fs.rmdir 移除路径（路径里有文件时无法删除）

//exists 判断文件是否存在（异步）(没有err，不建议使用)

//existsSync （同步）

//renanme 重命名文件夹

//stat 判断文件或路径的状态

// fs.stat('./',(err,stats)=>{
//     console.log(stats,isFile())
// })

//fs.unlink 移除文件(不能移除路径)