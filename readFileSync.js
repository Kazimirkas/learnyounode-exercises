const fs = require('fs');
const bufferStr = !!process.argv[2] ? fs.readFileSync(process.argv[2]).toString() : '';
const res = bufferStr.split('\n').length - 1;
console.log(res);
