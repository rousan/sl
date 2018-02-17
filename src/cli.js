#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const globbing = require('./globbing');
const parser = require('./parser');
const logger = require('./logger');

program
  .version(pkg.version, '-v, --version')
  .usage('[options] [path ...]')
  .parse(process.argv);

const modulePathPatterns = program.args.length ? [...program.args] : ['.'];

globbing.expand(modulePathPatterns)
  .then((paths) => {
    parser.parse(paths);
  })
  .catch((err) => {
    logger.error('\n');
    logger.error(`  error: ${String(err.message)}`);
    logger.error('\n');
  });
