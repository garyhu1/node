var fs = require("fs");

var data = "";

//创建可读流
var readStream = fs.createReadStream("address.txt");

readStream.setEncoding("UTF8");

readStream.on("data",function(value){
	data += value;
});

readStream.on("end",function(){
	console.log(data);
});

readStream.on("error",function(error){
	console.log(error.stack);
});

console.log('文件读取完成！');

//创建写入流
var data1 = '菜鸟教程官网地址：www.runoob.com';
var writeStream = fs.createWriteStream("outdex.txt");

writeStream.write(data1,"UTF8");

writeStream.end();

writeStream.on("finish",function(){
	console.log("写入完成！");
});

writeStream.on("error",function(error){
	console.log(error.stack);
});
//通过管道来读写
var read = fs.createReadStream("outdex.txt");
var write = fs.createWriteStream("newFile.txt");

read.setEncoding("UTF8");

read.pipe(write);
