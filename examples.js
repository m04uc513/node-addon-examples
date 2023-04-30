const EX1 = require('./build/Release/hello.node');
const EX2 = require('./build/Release/function_arguments.node');
const EX3 = require('./build/Release/callbacks.node');
const EX4 = require('./build/Release/object_factory.node');
const EX5 = require('./build/Release/function_factory.node');

console.log('EX1: hello '+EX1.hello()); // 'world'
console.log('EX2: This should be eight:', EX2.add(3, 5))

EX3(function(msg){
  console.log('EX3: '+msg); // 'hello world'
});

var obj1 = EX4('hello');
var obj2 = EX4('world');
console.log('EX4: '+obj1.msg+' '+obj2.msg); // 'hello world'

var fn = EX5();
console.log('EX5: '+fn()); // 'hello world'
