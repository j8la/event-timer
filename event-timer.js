/*
Name    : event-timer.js
Author  : Julien Blanc
Version : 1.0.0
Date    : 27/04/2016
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
    
    var self = this;
    
    if(this.events.constructor === Array && this.interval === parseInt(this.interval,10)) {
    
        this.handle = setInterval(function() {
            
            for(var evt in self.events) {
                self.emit(self.events[evt]);
            }
            
        }, this.interval);
        
    } else {
        
        self.emit('error','\'events\' is not an array and/or \'interval\' is not an integer');

    }
    
}

//------ Stop timer
evt.prototype.stop = function() {
    
    clearInterval(this.handle);
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