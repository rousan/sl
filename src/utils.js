const fs = require('fs');

function readJSONFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, { encoding: 'utf8' });
    return JSON.parse(content);
  } catch (err) {
    return null;
  }
}

function isDirectory(path) {
  return fs.lstatSync(path).isDirectory();
}

function maxLength(strs) {
  return Math.max(...strs.map(str => str.length));
}

module.exports = { readJSONFile, isDirectory, maxLength };

