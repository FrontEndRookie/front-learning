const eventEmitter = require('events')
const event = new eventEmitter()
event.on('start',(val)=>{
    console.log('触发了',val);
})
setTimeout(() => {
    event.emit('start')
}, 2000);