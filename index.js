const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     fs.readFile(
  //       path.join(__dirname, 'public', 'index.html'),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { 'Content-Type': 'text/html' });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === '/about') {
  //     fs.readFile(
  //       path.join(__dirname, 'public', 'about.html'),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { 'Content-Type': 'text/html' });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === '/api/users') {
  //     const users = [
  //       {
  //         name: 'John Doe',
  //         age: 30,
  //       },
  //       {
  //         name: 'Bob Smith',
  //         age: 30,
  //       },
  //     ];
  //     res.writeHead(200, { 'Content-Type': 'application/json' });
  //     res.end(JSON.stringify(users));
  //   }

  // Build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index' : req.url
  );

  const extname = path.extname(filePath);

  let contentType = 'text/html';

  // Check ext and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == 'text/html') filePath += '.html';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, errorPageContent) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(errorPageContent, 'utf8');
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
