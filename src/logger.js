const path = require('path');
const chalk = require('chalk');
const utils = require('./utils');

const logOutputStream = process.stdout;
const errorOutputStream = process.stderr;
const outputPrefix = ' '.repeat(3);

function log(msg) {
  logOutputStream.write(msg);
}

function error(msg) {
  errorOutputStream.write(msg);
}

function logModuleName(moduleName, isValid) {
  const color = isValid ? chalk.green : chalk.red;
  const cModuleName = color(moduleName);

  log(`${outputPrefix}${cModuleName}`);
  log('\n');
}

function logSingleScript(scriptName, scriptValue, padEndLn) {
  const cScriptName = chalk.gray(scriptName.padEnd(padEndLn));
  const cScriptVal = scriptValue;

  log(`${outputPrefix} - ${cScriptName} : ${cScriptVal}`);
  log('\n');
}

function logEmptyScript() {
  log(`${outputPrefix} - ${chalk.gray('empty')}`);
  log('\n');
}

function logScripts(modulePath, scripts) {
  const moduleName = path.basename(modulePath);

  log('\n');
  logModuleName(moduleName, true);

  const scriptNames = Object.keys(scripts);
  const maxLn = utils.maxLength(scriptNames);

  if (!scriptNames.length) {
    logEmptyScript();
  } else {
    scriptNames.forEach((scriptName) => {
      logSingleScript(scriptName, scripts[scriptName], maxLn);
    });
  }
  log('\n');
}

function logInvalidModule(modulePath, errMessage) {
  const moduleName = path.basename(modulePath);

  log('\n');
  logModuleName(moduleName, false);
  log(`${outputPrefix}${chalk.grey(errMessage)}`);
  log('\n\n');
}

module.exports = {
  log,
  error,
  logScripts,
  logInvalidModule,
};
