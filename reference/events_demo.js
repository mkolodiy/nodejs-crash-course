const EventEmmiter = require('events');

// Create class
class MyEmitter extends EventEmmiter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => {
  console.log('Event Fired!');
});

// Emit evet
myEmitter.emit('event');
