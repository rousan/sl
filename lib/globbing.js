'use strict';

var path = require('path');
var util = require('util');
var _ = require('lodash');
var glob = require('glob');

var promisifiedGlob = util.promisify(glob);

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

module.exports = { expand: expand };