# event-timer
A very simple timer which emits one or more events at every time interval.


# Installation
```
npm install event-timer
```


# How to
```
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


# Updates
- `v1.1.0 :` Goodbye setInterval, welcome to setTimeout...
- `v1.0.0 :` Initial release


## Licence
The MIT License (MIT) 
Copyright (c) 2016 Julien Blanc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
