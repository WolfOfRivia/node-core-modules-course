// This works for the callback version and sync version
// const fs = require('fs');

// need to change to fs/promises to write a file with promises and for async await
const fs = require('fs/promises');

// Write to a file There are many ways to do it  //

// Callback version writeFile takes three args, file name, content for file, then a callback
// fs.writeFile('file1.txt', 'Hello World', (err) => {
//   if (err) throw err;
//   console.log('File created');
// })

// After running node fs in terminal file1.txt was created

// Promise version
// fs.writeFile('file2.txt', 'Hello World 2')
//   .then(() => console.log('File created'))
//   .catch((err) => console.log(err));

// After running node fs again file2 was created

// Sync Version
// fs.writeFileSync('file3.txt', 'Hello World 3'); // Anything below this line won't happen until this file is created
// console.log('File created');

// Promise Version using async await (Brad's preferred method)
// async function createFile(filename, content) {
//   try {
//     await fs.writeFile(filename, content);
//     console.log('File created');
//   } catch (error) {
//     console.log(error);
//   }
// }

// createFile('file4.txt', 'Hello World 4');

// As always don't forget to run node fs to run the function and create file 4

// Read From a File //
// async function readFile(filename) {
//   try {
//     const data = await fs.readFile(filename, 'utf8');
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// readFile('file1.txt');
// readFile('file2.txt');
// readFile('file3.txt');

// Delete a File // (The method to delete a file is called unlink, but we will create a function called deleteFile)
// async function deleteFile(filename) {
//   try {
//     await fs.unlink(filename);
//     console.log(`File ${filename} deleted`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// deleteFile('file4.txt');

// Rename a file //
// async function renameFile(oldName, newName) {
//   try {
//     await fs.rename(oldName, newName);
//     console.log(`File ${oldName} renamed to ${newName}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// renameFile('file1.txt', 'file.txt');

// Create a folder // (method name is mkdir)
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created`);
  } catch (error) {
    console.log(error);
  }
}

createFolder('folder1');

// For more documentation visit this link here

// https://nodejs.org/api/fs.html

// Also all functions can be created asynchronously try it on your own.