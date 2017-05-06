// var url = require("url");

// console.log(url.parse('http://www.baidu.com'));
/**
 * 输出结果为：
 * Url {
 *  protocol: 'http:',
 *   slashes: true,
 *   auth: 'user:pass',
 *   host: 'host.com:8080',
 *   port: '8080',
 *   hostname: 'host.com',
 *   hash: '#hash',
 *   search: '?query=string',
 *   query: 'query=string',
 *   pathname: '/path/to/file',
 *   path: '/path/to/file?query=string',
 *   href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }
 */

var http = require("http");
var url = require("url");
var fs = require("fs");

var path = require("path");
//获取当前目录
// var workDir = path.resolve(".");
//获取当前目录
var workDir = path.resolve(process.argv[2]||".");
console.log(workDir);
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    var file = path.join(workDir,pathname);
    fs.stat(file,function(err,stat){
        if(err){
            console.log("404"+ request.url);
            response.writeHead(404);
            response.write("404 Not Found");
            response.end();
        }else if(stat.isDirectory()){
            fs.readdir(file,function(err,files){
                if(err){
                    return console.error(err);
                }else{
                    files.forEach(function(f) {
                        if(f==="index.html"){
                             console.log("200"+request.url);
                             response.writeHead(200);
                             fs.createReadStream(f).pipe(response);
                        }
                    });
                }
            });
        }else if(stat.isFile()){
            console.log("200"+request.url);
            response.writeHead(200);
            fs.createReadStream(file).pipe(response);
        }
    });
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
