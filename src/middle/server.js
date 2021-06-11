// var http = require('http')
// var fs = require('fs')
// var fan = require('./class')
// var server = http.createServer((function(request, response){
//     response.writeHead(200,{'Content-Type': 'text/html'})
//     if(request.url=='/getData') {
//         fs.readFile('src/lib/data.json', function(err,data) {
//             if(!err) {
//                 response.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
//                 console.log(data);
//                 response.end(data)
//             } else {
//                 throw err;
//             }
//         });
//     }else {
//         console.log('引用的模块对象',fan);
//         // console.log('该模块引用了',module.children);
//         console.log('本地exports',module.exports)
//         console.log('用户主目录',__dirname);
//     }
// }))
// server.listen(8080)