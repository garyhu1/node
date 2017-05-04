var hello = require('./hello');

hello.world();

var P = require('./people');

var people = new P();

people.setName("Juddy");
people.sayHello();
