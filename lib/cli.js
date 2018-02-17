#!/usr/bin/env node
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var program = require('commander');
var pkg = require('../package.json');
var globbing = require('./globbing');
var parser = require('./parser');
var logger = require('./logger');

program.version(pkg.version, '-v, --version').usage('[options] [path ...]').parse(process.argv);

var modulePathPatterns = program.args.length ? [].concat(_toConsumableArray(program.args)) : ['.'];

globbing.expand(modulePathPatterns).then(function (paths) {
  parser.parse(paths);
}).catch(function (err) {
  logger.error('\n');
  logger.error('  error: ' + String(err.message));
  logger.error('\n');
});