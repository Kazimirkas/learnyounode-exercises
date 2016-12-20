const mymodule = require('./mymodule');
const filesGot = (err, list) => {
  if (err) {
    return;
  }

  list.forEach(item => console.log(item));
}

const path = process.argv[2];
const extention = process.argv[3];

if (!!path && !!extention) {
  mymodule(path, extention, filesGot);
}
