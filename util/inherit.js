var util = require("util");

function Base() {
	this.name = "base";
	this.base = 1991;
	this.say = function() {
		console.log("Hello "+this.name);
	};
}

Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub() {
	this.name = "sub";
}

/*
 * 注意：Sub 仅仅继承了Base 在原型中定义的函数，
 * 而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
 * 同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。
 */
util.inherits(Sub,Base);

var baseObj = new Base();
baseObj.showName();
baseObj.say();
console.log(baseObj);

var subObj = new Sub();
subObj.showName();
//subObj.say()：该方法无法调用，因为不属于原型
console.log(subObj);
