var url = require("url");
var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
	var pathName = url.parse(req.url).pathname;
	console.log("Request for " + pathName + " received.");
	
	fs.readFile(pathName.substr(1),function(err,data){
		if(err){
			console.log(err);
			res.writeHead(404,{"Content-Type":"text/html"});
		}else {
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write(data.toString());
		}
		res.end();
	});
}).listen(8081);
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');