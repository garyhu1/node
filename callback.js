var fs = require("fs");

fs.readFile('address.txt', function (err, data) {
    if (err){
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});

console.log("程序运行结束！");
