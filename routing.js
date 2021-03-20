const fs= require('fs');
//استدعاء ميثود url
const url =require('url');


function handelreqest(filepath,res){
    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.end('file have error')
        }
        else{
            res.end(data)
        }
    })
}
function routing(req,res){
    const path =url.parse(req.url).pathname;
    switch(path){
        case '/':
            handelreqest('./file.html',res);
            break;
        case '/login':
            res.write('login page');
            break;
        case '/user':
            res.write('user page');
            break;
        default:
            res.write('this page  not found')
            break;
    }
}
module.exports = routing;