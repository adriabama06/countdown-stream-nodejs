const timer = require('./lib/index.js');
const path = require('path');

//                  time          fileoutput                 startmessage (Optional)      endmessage (Optional)
new timer.createFile(10, path.join(__dirname, 'time.txt'), 'This is the start message', 'This is the en message')

.on('start', async (time, startmessage) => {
    console.log(startmessage);
})

.on('time', async (time) => {
    console.log(`Time: ${time}`);
})

.on('end', async (endmessage) => {
    console.log(endmessage);
});

/*

More examples:

const timer1 = new timer.createFile(10, path.join(__dirname, 'time.txt'));

timer1.on('time', async (time) => {
    console.log(`Time: ${time}`);
});

<------------------------------------------------------------------------->

You onliy like get time as array ?

Use:

//                       time || start message (optional) || end message (optional)
console.log(timer.timeArray(10, 'Start message', 'End message'));

or

//                       time || start message (optional) || end message (optional)
var time1 = timer.timeArray(10, 'Start message', 'End message');
console.log(time1);

*/