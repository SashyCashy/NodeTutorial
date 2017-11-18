var EventEmitter  = require("events");
var fs = require("fs");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('listen',() => {
  console.log("Here is sparta");
});

myEmitter.on('arb',(a,b) => {
  setImmediate(() => {
    console.log("Here is sparta",a+b);
  })

});
//myEmitter.emit('listen');

myEmitter.emit('arb','1','2');
myEmitter.emit('arb','3','2');
myEmitter.emit('arb','2','2');
