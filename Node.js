// Node.js HTTP server example

const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is your Princess\'s server! 💖\n');
});

// Listen on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
