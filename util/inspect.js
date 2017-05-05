var util = require("util");

function People() {
	this.name = "garyhu";
	this.tostring = function(){
		return this.name;
	}
}

var obj = new People();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
