//استدعاء انواع من الداتا من ملف تاني
/*const me = 'mario';
const {add,squer} = require('./sara');
add(5,4);
squer(6);*/

//تعريف سيرفير 
/*const http =require('http');
const server =http.createServer((req,res)=>{
    res.end('hello in first app')
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('server run .....')
})*/
// فتح ملف داخل السيرفير
const routing=require('./routing')
const http =require('http');
const server =http.createServer(routing)
server.listen(3000,'127.0.0.1',()=>{
    console.log('server run .....')
})

