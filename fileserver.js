const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });

  // The filename is simple the local directory and tacks on the requested url
  const filename = process.argv[3];

  // This line opens the file as a readable stream
  const readStream = fs.createReadStream(filename);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', () => {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', err => {
    res.end(err);
  });
});

server.listen(process.argv[2]);
