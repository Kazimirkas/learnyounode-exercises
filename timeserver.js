const net = require('net');
const strftime = require('strftime');
const server = net.createServer(socket => {
  socket.end(strftime('%F %H:%M') + '\n');
});
server.listen(process.argv[2]);
