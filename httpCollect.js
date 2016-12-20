const http = require('http');
const bl = require('bl')
const path = process.argv[2];
const callback = response => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err)
    }
    const str = data.toString();
    console.log(str.length);
    console.log(str);
  }))  ;
};

http.get(path, callback);
