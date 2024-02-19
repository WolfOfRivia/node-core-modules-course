// Operating System Modules
const os = require('os');

// arch() ( Returns a string identifying the operating system's CPU architecture )
// This will be different depending on what system you are running
console.log(os.arch()); // x64 in my case

// platform() ( Returns a string identifying the operating system )
console.log(os.platform()); // win32 (For Windows) darwin (For Mac) linux (For Linux) there's some others too

if (os.platform() === 'win32') {
  console.log('You are on Windows');
} else if (os.platform() === 'darwin') {
  console.log('You are on Mac');
} else {
  console.log('You are on a different OS');
}

// cpus() ( Returns an array of objects containing information on each logical CPU core )
console.log(os.cpus()); // This a large array of objects about my CPU

// freemem() ( Shows the amount of free memory in your system )
console.log(os.freemem()); // Shows this in bytes
const memToGb = os.freemem() / 1024 / 1024 / 1024;
console.log(`Free Memory: ${memToGb.toFixed(1)} GB`); // Show in GB

// totalmem() ( Shows total amount of memory on your system )
const totalMemToGb = os.totalmem() / 1024 / 1024 / 1024;
console.log(`Total Memory: ${totalMemToGb.toFixed(1)} GB`); // Show in GB

// homedir() ( Get the home directory )
console.log(os.homedir()); // C:\Users\AJ

// uptime() ( see sytem uptime )
console.log(os.uptime()); // This will vary

// Convert to days, hours, minutes, seconds
const uptime = os.uptime();
const days =  Math.floor(uptime / 60 / 60 / 24);
const hours =  Math.floor(uptime / 60 / 60) % 24;
const mins =  Math.floor(uptime / 60) % 60;
const secs =  Math.floor(uptime) % 60;

console.log(`Uptime: ${days} days, ${hours} hours, ${mins} minutes, ${secs} seconds`);

// hostname() (Returns the hostname of the operating system)
console.log(os.hostname()); // Not showing this lol.

// networkInterfaces() (Returns information about your network and IP address etc)
console.log(os.networkInterfaces()); // Obviously not showing this..