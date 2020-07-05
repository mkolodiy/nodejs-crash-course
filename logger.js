const EventEmmiter = require('events');
const uuid = require('uuid');

class Logger extends EventEmmiter {
  log(message) {
    // Call event
    this.emit('message', { id: uuid.v4(), message });
  }
}

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called listener: ', data));

logger.log('Hello World!');
