const http = require('http');

// Define the hostname and port where your server will listen
const hostname = '127.0.0.1';
const port = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Write a response message
  res.end('Hello Holberton School!');
});

// Start the server and have it listen on the specified hostname and port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
