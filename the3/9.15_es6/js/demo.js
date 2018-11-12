
//常量 const
const x=123

y=456

////////////////////////////////////////////

//let

//var的作用域是会提升的，var声明的变量只能是全局的或者是整个函数块的。

// let则允许声明一个作用域被限制在块级中的变量、语句或者表达式。

////////////////////////////////////////////

// => 箭头函数

x => x * x
// 上面的箭头函数相当于：

// var a=function (e) {
//     return e*e;
// }

//箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种像上面的，只包含一个表达式，连{ ... }和return都省略掉了。还有一种可以包含多条语句，这时候就不能省略{ ... }和return：

// function a(e){
//     return e
// }

var a = e => e*e

////////////////////////////////////////////

//... 解构

////////////////////////////////////////////

// {}=

var xiaoming={age:30,sex:"男"}

var {age}=xiaoming

////////////////////////////////////////////

//继承

class animal{
    eat(){

    }
}

class human extends animal{
    eatrice(){
        
    }
}

////////////////////////////////////////////

//CommandJs =>引入 =>引出

x='213'

var add = require('./demo.js')
console.log(
    // add(1,2)
    x
)

//parse  解析

var pathStr = '/yyy/隐藏文件夹/某学习资料'

var path =require('path')

console.log(
    path.parse(pathStr)
)

////////////////////////////////////////////

//序列化 path.format()

//resolve 绝对路径

path.resolve([pathStr])

// join 传入参数,将其处理为正确路径

path.join('','')

