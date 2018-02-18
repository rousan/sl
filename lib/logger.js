'use strict';

var path = require('path');
var chalk = require('chalk');
var utils = require('./utils');

var logOutputStream = process.stdout;
var errorOutputStream = process.stderr;
var outputPrefix = ' '.repeat(3);

function log(msg) {
  logOutputStream.write(msg);
}

function error(msg) {
  errorOutputStream.write(msg);
}

function logModuleName(moduleName, isValid) {
  var color = isValid ? chalk.green : chalk.red;
  var cModuleName = color(moduleName);

  log(`${outputPrefix}${cModuleName}`);
  log('\n');
}

function logSingleScript(scriptName, scriptValue, padEndLn) {
  var cScriptName = chalk.gray(utils.padEnd(scriptName, padEndLn));
  var cScriptVal = scriptValue;

  log(`${outputPrefix} - ${cScriptName} : ${cScriptVal}`);
  log('\n');
}

function logEmptyScript() {
  log(`${outputPrefix} - ${chalk.gray('empty')}`);
  log('\n');
}

function logScripts(modulePath, scripts) {
  var moduleName = path.basename(modulePath);

  log('\n');
  logModuleName(moduleName, true);

  var scriptNames = Object.keys(scripts);
  var maxLn = utils.maxLength(scriptNames);

  if (!scriptNames.length) {
    logEmptyScript();
  } else {
    scriptNames.forEach(function (scriptName) {
      logSingleScript(scriptName, scripts[scriptName], maxLn);
    });
  }
  log('\n');
}

function logInvalidModule(modulePath, errMessage) {
  var moduleName = path.basename(modulePath);

  log('\n');
  logModuleName(moduleName, false);
  log(`${outputPrefix}${chalk.grey(errMessage)}`);
  log('\n\n');
}

module.exports = {
  log,
  error,
  logScripts,
  logInvalidModule
};