const http = require('http');
const bl = require('bl')
const [ node1, node2, ...paths ] = process.argv;
let responcesArray = paths.map(p => null);
let count = responcesArray.length;
const formCallback = index => response => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err)
    }
    responcesArray[index] = data.toString();
    count--;
    if (count < 1) {
      responcesArray.map(data => console.log(data));
    }
  }));
};

paths.map((path, index) => http.get(path, formCallback(index)));
