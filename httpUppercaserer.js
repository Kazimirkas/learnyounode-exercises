const map = require('through2-map');
const http = require('http');
const server = http.createServer((request, response) => {
  if (request.method !== 'POST') {
    response.end('send me a POST\n');
  }
  request.pipe(map(chunk => chunk.toString().toUpperCase()))
    .pipe(response);
});

server.listen(process.argv[2]);
