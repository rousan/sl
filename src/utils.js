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

function promisify(original) {
  return function promisified(...args) {
    return new Promise((resolve, reject) => {
      original.call(undefined, ...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

function padEnd(str, length) {
  const strLn = str.length;
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
  padEnd,
};

