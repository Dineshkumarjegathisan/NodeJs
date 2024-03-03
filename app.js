const eventLogs = require('./eventLog.js');
const EventEmitter = require('events')

class MyEvent extends EventEmitter{}

const myEmitter = new MyEvent();
 
myEmitter.on('log',(mgs)=>{
    eventLogs(mgs)
})  
myEmitter.emit('log','log event emitted');