const fs = require('fs');
const filesGot = (err, list) => {
  if (err) {
    return;
  }

  list
    .filter(item => item.indexOf(`.${extention}`) !== -1)
    .forEach(item => console.log(item));
}

const path = process.argv[2];
const extention = process.argv[3];

if (!!path && !!extention) {
  fs.readdir(path, filesGot);
}
