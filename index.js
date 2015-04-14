/**
 * detect-installed <https://github.com/tunnckoCore/detect-installed>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';


var fs = require('fs');
var path = require('path');
var fnName = require('fn-name');
var modules = require('global-modules');
var handle = require('handle-arguments');
var debug = require('debug')('detect-installed');

var cwd = process.cwd();

module.exports = function detectInstalled(name, local, callback) {
  var argz = handle(arguments);
  name = argz.args[0];
  local = argz.args[1];
  callback = argz.cb;

  if (typeof name !== 'string') {
    debug('(error) expect `name` to be string');
    throw new TypeError('[detect-installed] expect `name` to be string');
  }
  if (!name.length) {
    debug('(error) expect `name` to be non empty string');
    throw new Error('[detect-installed] expect `name` to be non empty string');
  }

  debug('(info) starts normally');
  var fp = path.join(modules, name);
  var nm = path.join(cwd, 'node_modules', name);

  if (typeof local === 'boolean') {
    debug('(info) will checks in local modules')
    fp = local ? path.join(cwd, 'node_modules', name) : fp;
  }
  if (fnName(callback) !== 'defaultHandleArgumentsCallback') {
    debug('(async) start')
    return statAsync(fp, callback);
  }
  debug('(sync) start')
  return tryStatSync(fp);
};

function statAsync(fp, callback) {
  fs.stat(fp, function __callback(err, res) {
    if (err) {
      debug('(async) not exists, so cb(null, false)')
      callback(null, false);
      return;
    }
    debug('(async) exists, passing true or false')
    callback(null, res.isDirectory());
  });
}

function tryStatSync(fp) {
  try {
    return fs.statSync(fp).isDirectory();
  } catch(err) {
    debug('(sync) not exists, so return false')
    return false;
  }
}
