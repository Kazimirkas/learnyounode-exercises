const url = require('url');
const http = require('http');
const server = http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.end('send me a GET\n');
  }

  const { pathname, query } = url.parse(request.url, true);

  if (pathname === '/api/parsetime' && !!query.iso) {
    console.log(pathname, query);
  }

});

server.listen(!!process.argv[2] ? process.argv[2] : '8000');
