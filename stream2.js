//链式流（通过管道来完成）
var fs  = require("fs");
var zip = require("zlib");
//压缩文件
fs.createReadStream("address.txt")
   .pipe(zip.createGzip())
   .pipe(fs.createWriteStream("address.txt.gz"));
//解压文件
fs.createReadStream("address.txt.gz")
   .pipe(zip.createGunzip())
   .pipe(fs.createWriteStream("input.txt"));
