var crypto = require("crypto");
var hash = crypto.createHash("md5");

hash.update("Hello,World!");
console.log(hash.digest("hex"));