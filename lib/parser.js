'use strict';

var fs = require('fs');
var path = require('path');
var utils = require('./utils');
var logger = require('./logger');

function extractScripts(modulePath) {
  modulePath = path.resolve(modulePath);
  if (!fs.existsSync(modulePath)) {
    throw new Error('module path does not exist');
  }

  if (!utils.isDirectory(modulePath)) {
    throw new Error('module path needs to be a directory');
  }

  var pkgFile = path.resolve(path.join(modulePath, 'package.json'));
  if (!fs.existsSync(pkgFile)) {
    throw new Error('package.json file is not found');
  }

  var pkgData = utils.readJSONFile(pkgFile);
  if (!pkgData) {
    throw new Error('package.json file is not in valid format');
  }

  var scripts = pkgData.scripts;

  if (!scripts) {
    throw new Error('scripts field not found in package.json file');
  }

  return scripts;
}

function parse(modulePaths) {
  modulePaths.forEach(function (modulePath) {
    try {
      var moduleScripts = extractScripts(modulePath);
      logger.logScripts(modulePath, moduleScripts);
    } catch (err) {
      logger.logInvalidModule(modulePath, err.message);
    }
  });
}

module.exports = { parse: parse };