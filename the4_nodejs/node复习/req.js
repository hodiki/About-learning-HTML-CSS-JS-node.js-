var request = require('request')

request('https://www.baidu.com/s?ie=UTF-8&wd=mongo',{},(error,response,body)=>{
    console.log(body)
})