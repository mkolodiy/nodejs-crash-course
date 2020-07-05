const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   (err) => {
//     if (err) throw err;
//     console.log('File written...');

//     // Append to file
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I love Node.js',
//       (err) => {
//         if (err) throw err;
//         console.log('Append to file...');
//       }
//     );
//   }
// );

// Read from file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data: ', data);
});

// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'newHello.txt'),
  (err) => {
    if (err) throw err;
    console.log('File renamed...');
  }
);
