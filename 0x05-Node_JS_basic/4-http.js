/**
 * Create a small HTTP server using Node's HTTP module
 */

const http = require('http');

const proxy = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

proxy.listen(1245);
