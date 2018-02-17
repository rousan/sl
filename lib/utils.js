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

module.exports = { readJSONFile: readJSONFile, isDirectory: isDirectory, maxLength: maxLength };