'use strict';

var path = require('path');
var _ = require('lodash');
var glob = require('glob');
var utils = require('./utils');

var promisifiedGlob = utils.promisify(glob);

function expand(patternList) {
  var expandPromises = [];

  patternList.forEach(function (pattern) {
    if (glob.hasMagic(pattern)) {
      expandPromises.push(promisifiedGlob(pattern, { absolute: true }));
    } else {
      expandPromises.push(path.resolve(pattern));
    }
  });

  return Promise.all(expandPromises).then(function (results) {
    return _.flatten(results);
  });
}

module.exports = { expand };