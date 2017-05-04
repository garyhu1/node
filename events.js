// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventsEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectH = function connected(){
	console.log("连接成功！");
	// 触发 data-recive 事件 
	eventsEmitter.emit("data-recive");
}
// 绑定 connection 事件处理程序
eventsEmitter.on("connection",connectH);
// 使用匿名函数绑定 data-recive 事件
eventsEmitter.on("data-recive",function(){
	console.log("数据接收成功！");
});
// 触发 connection 事件 
eventsEmitter.emit("connection");

console.log("执行完毕！");
