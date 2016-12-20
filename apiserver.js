const url = require('url');
const http = require('http');
const timeUrl = '/api/parsetime';
const unixUrl = '/api/unixtime';
const server = http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.end('send me a GET\n');
  }

  const { pathname, query } = url.parse(request.url, true);

  if ((pathname === timeUrl || pathname === unixUrl) && !!query.iso) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    const date = new Date(query.iso);
    const res = pathname === timeUrl ?
    ({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }) : ({
      unixtime: date.getTime()
    });

    response.end(JSON.stringify(res));
  }

});

server.listen(!!process.argv[2] ? process.argv[2] : '8000');
