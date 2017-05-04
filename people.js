/*function People (){
	var name;
	this.setName = function(newName) {
		name = newName;
	}
	this.sayHello = function() {
		console.log('hello  '+ name);
	}
}

module.exports = People;*/

//也可以如下写法
module.exports = function(){
	var name;
	this.setName = function(newName) {
		name = newName;
	}
	this.sayHello = function() {
		console.log('hello  '+ name);
	}
}
