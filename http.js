// This module will allow us to create a server and listen for HTTP Requests
// You can create a complete web server with this module but it's not really recommened,
// There's many features in a production environment that it doesn't provide (like routing, sessions or static files)
// If you want a production ready webserver a framework like Express is recommended

const http = require('http');
const fs = require('fs');

const posts = [
  {id: 1, title: 'Post One', body: 'This is post one'},
  {id: 2, title: 'Post Two', body: 'This is post two'},
  {id: 3, title: 'Post Three', body: 'This is post three'},
]

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    fs.readFile('index.html', (error, file) => {
      if(error) {
        response.writeHead(500, {'content-type': 'text/html'});
        response.end('<h1>Sorry, we have a problem</h1>');
      } else {
        response.writeHead(200, {'content-type': 'text/html'});
        response.end(file);
      }
    });
  } else if(url === '/api/posts') {
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify({ success: true, data: posts}));
  }else if(url === '/about') {
    response.writeHead(200, {'content-type': 'text/html'});
    response.end('<h1>About</h1>');
  } else {
    response.writeHead(404, {'content-type': 'text/html'});
    response.end('<h1>Page Not Found</h1>');
  }
});

// 5000 is our port number
server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});