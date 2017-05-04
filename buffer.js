var buf = new Buffer(39);

var len  = buf.write("www.baidu.com");

console.log("写入字节数为 ： "+len);

for(var i=13;i < 39;i++){
	buf[i] = i+84;
}

var json = buf.toJSON();

console.log(json);
