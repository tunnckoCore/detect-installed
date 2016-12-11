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

/**
 * > Detect if some package `name`is
 * installed globally or locally. By default checks
 * if it exists in globally installed modules, using [global-modules][].
 * Pass `opts.local` to check if it exists in locally installed modules
 * or in `opts.cwd` dir.
 *
 * **Example**
 *
 * ```js
 * const detectInstalled = require('detect-installed')
 *
 * detectInstalled('npm').then((exists) => {
 *   console.log(exists) // => true
 * })
 *
 * detectInstalled('foo-bar-barwerwlekrjw').then((exists) => {
 *   console.log(exists) // => false
 * })
 *
 * detectInstalled('npm', {
 *   local: true
 * }).then((exists) => {
 *   console.log(exists) // => false
 * })
 *
 * detectInstalled('global-modules', {
 *   local: true
 * }).then((exists) => {
 *   console.log(exists) // => true
 * })
 *
 * // If you are using it for some sub-directory
 * // pass `opts.cwd` to be where the `node_modules`
 * // folder is.
 * process.chidr('foo-bar-baz')
 * detectInstalled('global-modules', {
 *   local: true,
 *   cwd: '../'
 * }).then((exists) => console.log(exists)) // => true
 * ```
 *
 * @param  {String} `name` package name
 * @param  {Object} `opts` pass `opts.local` to check locally
 * @return {Promise} rejected promise if `name` not a string or is empty string
 * @api public
 */

module.exports = function detectInstalled (name, opts) {
  return new Promise((resolve, reject) => {
    if (!isValidString(name)) {
      const message = 'detect-installed: expect `name` to be string'
      return reject(new TypeError(message))
    }

    fs.stat(defaults(name, opts), (err, stats) => {
      if (err) return resolve(false)
      resolve(stats.isDirectory())
    })
  })
}

/**
 * > Synchronously check if package `name` exists
 * as locally or globally installed modules.
 *
 * **Example**
 *
 * ```js
 * const detectInstalled = require('detect-installed')
 *
 * const exists = detectInstalled.sync('npm') // => true
 * const result = detectInstalled.sync('global-modules', { local: true }) // => true
 * ```
 *
 * @name   .sync
 * @param  {String} `name` package name
 * @param  {Object} `opts` pass `opts.local` to check locally
 * @return {Boolean} or throw `TypeError` if `name` not a string or is empty string
 * @api public
 */

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
