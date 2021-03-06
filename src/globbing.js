const path = require('path');
const _ = require('lodash');
const glob = require('glob');
const utils = require('./utils');

const promisifiedGlob = utils.promisify(glob);

function expand(patternList) {
  const expandPromises = [];

  patternList.forEach((pattern) => {
    if (glob.hasMagic(pattern)) {
      expandPromises.push(promisifiedGlob(pattern, { absolute: true }));
    } else {
      expandPromises.push(path.resolve(pattern));
    }
  });

  return Promise.all(expandPromises)
    .then(results => _.flatten(results));
}

module.exports = { expand };

