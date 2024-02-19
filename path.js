const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename() (get filename)
const base1 = path.basename(myFilePath);
console.log(base1); // returns index.js

// get filename without the extension
const base2 = path.basename(myFilePath, '.js');
console.log(base2); // returns index

// extname() (get filename extension)
const ext = path.extname(myFilePath);
console.log(ext) // returns .js

// dirname() ( get directory of a file pretty much does the opposite of basename() )
const dir = path.dirname(myFilePath);
console.log(dir); // subfolder/anotherfolder

// join() ( very common, creates filepaths but creates them correctly based on operating system )
const myPath = path.join('subfolder', 'anotherfolder', 'index.js'); // you can have as many arguments as you need
console.log(myPath); // returns subfolder\anotherfolder\index.js (windows uses backslashes so join fixed that)

// resolve() ( creates an absolute path just like join )
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(myPath2); // returns C:\Users\AJ\Desktop\JS Playground\node-core-modules\subfolder\anotherfolder\index.js ( gives the ENTIRE path unlike join() )

// Environment Variables

// __dirname ( Tells you the absolute path of the directory you are currently in, so whenever pointing to the file you're in use this instead of ./ )
console.log(__dirname); // returns C:\Users\AJ\Desktop\JS Playground\node-core-modules (The file we are currently in is running from this directory path)

// __filename ( Points directly to the file you are in )
console.log(__filename); // returns the same as line 32 but also adds path.js ( C:\Users\AJ\Desktop\JS Playground\node-core-modules\path.js )