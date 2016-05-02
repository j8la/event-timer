event-timer
=============
A very simple timer which emits one or more events at every time interval.

## Installation
```
npm install event-timer
```

## How to
```javascript
var evt = require('event-timer');

var check = new evt({
    interval: 5000,              // Default to 5000 ms
    events: ['event1','event2']  // One or more events, must be an array
}

check.on('event1', () => {
    // Do something  
})

check.on('event2', () => {
    // Do something  
})

check.on('error', (data) => {
    // If misconfigured, event occurs
    console.log(data);   
}

// Start timer
check.start();

// Stop timer
check.stop();

// Reinit the timer with new interval
check.reinit(2000);
```

## Updates
- `v1.1.2 :` Fix README
- `v1.1.1 :` Bug fix with 'util' module
- `v1.1.0 :` Goodbye setInterval, welcome to setTimeout...
- `v1.0.0 :` Initial release

## Licence
The MIT License (MIT) 
Copyright (c) 2016 Julien Blanc
