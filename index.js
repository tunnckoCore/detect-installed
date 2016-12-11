/*!
 * detect-installed <https://github.com/tunnckoCore/detect-installed>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const fs = require('fs')
const path = require('path')
const modules = require('global-modules')

module.exports = function detectInstalled (name, opts) {
  return new Promise((resolve, reject) => {
    if (!isValidString(name)) {
      const message = 'detect-installed: expect `name` to be string'
      return reject(new TypeError(message))
    }

    fs.stat(defaults(name, opts), (err, stats) => {
      if (err) return reject(err)
      resolve(stats.isDirectory())
    })
  })
}

module.exports.sync = function detectInstalledSync (name, opts) {
  if (!isValidString(name)) {
    throw new TypeError('detect-installed: expect `name` to be string')
  }
  return tryStatSync(defaults(name, opts))
}

const isValidString = (val) => {
  return typeof val === 'string' ? val.length > 0 : false
}

const defaults = (name, opts) => {
  opts = opts && typeof opts === 'object' ? opts : {}
  opts.cwd = typeof opts.cwd === 'string' ? opts.cwd : process.cwd()

  return opts.local
    ? path.join(opts.cwd, 'node_modules', name)
    : path.join(modules, name)
}

const tryStatSync = (fp) => {
  try {
     return fs.statSync(fp).isDirectory()
  } catch (err) {
     return false
  }
}
