# countdown-stream for nodejs

# how install ?

Only in one command: `npm i --save countdown-stream`

# how can use it

1 - Make \*.js file.
2 - Put this example code in the file:
```js
// example variable
const timer = require('countdown-stream');

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
```
 3 - run the code and get the output file.
 
 # How can use this code in [OBS studio](https://obsproject.com/)
 
 Making tutorial :D
