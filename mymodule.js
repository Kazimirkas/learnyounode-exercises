const fs = require('fs');
const readFiles = (path, extention, callback) => {
  const callBackWrapper = (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data.filter(item => item.indexOf(`.${extention}`) !== -1));
  }

  if (!!path && !!extention && !!callback) {
    fs.readdir(path, callBackWrapper);
  }
};

module.exports = readFiles;
