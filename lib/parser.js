'use strict';

var fs = require('fs');
var path = require('path');
var utils = require('./utils');
var logger = require('./logger');

function extractScripts(modulePath) {
  modulePath = path.resolve(modulePath);

  if (!fs.existsSync(modulePath)) {
    throw new Error(`Path does not exist: ${modulePath}`);
  }

  if (!utils.isDirectory(modulePath)) {
    throw new Error(`Path needs to be a directory: ${modulePath}`);
  }

  var pkgFile = path.resolve(path.join(modulePath, 'package.json'));
  if (!fs.existsSync(pkgFile)) {
    throw new Error(`No package.json file found: ${modulePath}`);
  }

  var pkgData = utils.readJSONFile(pkgFile);
  if (!pkgData) {
    throw new Error(`Invalid package.json file found: ${modulePath}`);
  }

  var scripts = pkgData.scripts;

  if (!scripts) {
    throw new Error(`No scripts field found: ${pkgFile}`);
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

module.exports = { parse };