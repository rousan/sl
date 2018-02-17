const fs = require('fs');
const path = require('path');
const utils = require('./utils');
const logger = require('./logger');

function extractScripts(modulePath) {
  modulePath = path.resolve(modulePath);
  if (!fs.existsSync(modulePath)) {
    throw new Error('module path does not exist');
  }

  if (!utils.isDirectory(modulePath)) {
    throw new Error('module path needs to be a directory');
  }

  const pkgFile = path.resolve(path.join(modulePath, 'package.json'));
  if (!fs.existsSync(pkgFile)) {
    throw new Error('package.json file is not found');
  }

  const pkgData = utils.readJSONFile(pkgFile);
  if (!pkgData) {
    throw new Error('package.json file is not in valid format');
  }

  const { scripts } = pkgData;
  if (!scripts) {
    throw new Error('scripts field not found in package.json file');
  }

  return scripts;
}

function parse(modulePaths) {
  modulePaths.forEach((modulePath) => {
    try {
      const moduleScripts = extractScripts(modulePath);
      logger.logScripts(modulePath, moduleScripts);
    } catch (err) {
      logger.logInvalidModule(modulePath, err.message);
    }
  });
}

module.exports = { parse };

