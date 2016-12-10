/*!
 * detect-installed <https://github.com/tunnckoCore/detect-installed>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fs = require('fs')
var path = require('path')
var modules = require('global-modules')
var cwd = process.cwd()

module.exports = function detectInstalled (name, local, callback) {
  if (!isValidString(name)) {
    throw new TypeError('detect-installed: expect `name` be string')
  }
  var fp = path.join(modules, name)
  var nm = path.join(cwd, 'node_modules', name)

  if (typeof local === 'function') {
    callback = local
  }
  if (typeof local === 'boolean') {
    fp = local ? nm : fp
  }
  if (typeof callback === 'function') {
    return statAsync(fp, callback)
  }

  return tryStatSync(fp)
}

function isValidString (val) {
  return typeof val === 'string' ? val.length > 0 : false
}

function statAsync (fp, callback) {
  fs.stat(fp, function (err, res) {
    if (err) {
      return callback(null, false)
    }
    callback(null, res.isDirectory())
  })
}

function tryStatSync (fp) {
  try {
    return fs.statSync(fp).isDirectory()
  } catch (err) {
    return false
  }
}
