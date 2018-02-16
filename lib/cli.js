#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');

program.version(pkg.version, '-v, --version').option('-m, --module <module_name> [otherDirs...]', 'list scripts for a particular node module').parse(process.argv);

var moduleName = program.module;

console.log(program.otherDirs);