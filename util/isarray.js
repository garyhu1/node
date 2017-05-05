var util = require("util");

var obj = [1,2,3,4,5,6,7];

console.log(util.isArray(obj));

var regexp = /a-z/;
console.log(util.isRegExp(regexp));

var date = new Date();
console.log(util.isDate(date));

var error = new Error();
console.log(util.isError(error));
