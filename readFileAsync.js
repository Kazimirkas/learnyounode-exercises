const fs = require('fs');
const fileGot = (err, data) => {
  if (err) {
    return;
  }

  res = data.toString().split('\n').length - 1;
  console.log(res);
}

if (!!process.argv[2]) {
  fs.readFile(process.argv[2], fileGot);
}
