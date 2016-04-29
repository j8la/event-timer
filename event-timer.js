/*
Name    : event-timer.js
Author  : Julien Blanc
Version : 1.1.0
Date    : 29/04/2016
NodeJS  : 5.10.1+ 
*/

//----------------------------------------- LOAD MODULES
var event = require('events').EventEmitter;

//----------------------------------------- CLASS

//------ Constructor
function evt(options) {
    this.interval = options.interval || 5000;
    this.events = options.events;
    this.handle = null;
}

//------ Inherit from 'events' module
util.inherits(evt, event);

//------ Start timer
evt.prototype.start = function() {
    
    if(this.events.constructor === Array && this.interval === parseInt(this.interval,10)) {
        
        var self = this;
        
        var timer = function() {
            
            for(var evt in self.events) {
                self.emit(self.events[evt]);
            }
            
            self.handle = setTimeout(timer, self.interval);
            
        }
        
        timer();
        
    } else {
        
        this.emit('error','\'events\' is not an array and/or \'interval\' is not an integer');

    }
    
}

//------ Stop timer
evt.prototype.stop = function() {
    
    clearTimeout(this.handle);
    this.handle = null;
    
}

//------ Stop timer
evt.prototype.reinit = function(interval) {
    
    this.stop();
    this.interval = interval;
    this.start();
    
}

//------ Export module
module.exports = evt;