const http = require('http');
const path = process.argv[2];
const callback = response => {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
};

http.get(path, callback);
