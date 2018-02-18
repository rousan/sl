'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var fs = require('fs');

function readJSONFile(filePath) {
  try {
    var content = fs.readFileSync(filePath, { encoding: 'utf8' });
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function maxLength(strs) {
  return Math.max.apply(Math, _toConsumableArray(strs.map(function (str) {
    return str.length;
  })));
}

function promisify(original) {
  return function promisified() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      original.call.apply(original, [undefined].concat(args, [function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }]));
    });
  };
}

function padEnd(str, length) {
  var strLn = str.length;
  if (strLn > length) {
    return str;
  }
  return str + ' '.repeat(length - strLn);
}

module.exports = {
  readJSONFile,
  isDirectory,
  maxLength,
  promisify,
  padEnd
};