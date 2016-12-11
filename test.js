/*!
 * detect-installed <https://github.com/tunnckoCore/detect-installed>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

const test = require('mukla')
const detectInstalled = require('./index')
const mkdirp = require('mkdirp')
const getDir = require('pkg-dir')
const rimraf = require('rimraf')

test('async: should get TypeError when invalid `name` is passed', () => {
  return detectInstalled(1234).catch((err) => {
    test.strictEqual(err.name, 'TypeError')
    test.strictEqual(/expect `name` to be string/.test(err.message), true)
  })
})

test('async: should return true if exists globally', () => {
  return detectInstalled('npm').then((actual) => {
    test.strictEqual(actual, true)
  })
})

test('async: should return false if not exists glboally', () => {
  return detectInstalled('foo-bar-bqwewrwevdfg-sa').then((actual) => {
    test.strictEqual(actual, false)
  })
})

test('async: should return true if exists locally', () => {
  return detectInstalled('global-modules', {
    local: true
  }).then((actual) => {
    test.strictEqual(actual, true)
  })
})

test('async: should return false if not exists locally', () => {
  return detectInstalled('sdfjkhskh3-sf9sd78fsdf', {
    local: true
  }).then((actual) => {
    test.strictEqual(actual, false)
  })
})

/**
 * testing synchronous mode
 */

test('synchronous: should throw TypeError when invalid `name` is passed', (done) => {
  function fixture () {
    detectInstalled.sync(1234)
  }

  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `name` to be string/)
  done()
})

test('synchronous: should return true if exists globally', () => {
  return new Promise((resolve) => {
    test.strictEqual(detectInstalled.sync('npm'), true)
    resolve()
  })
})

test('synchronous: should return false if not exists glboally', () => {
  return new Promise((resolve) => {
    test.strictEqual(detectInstalled.sync('foo-bar-bqwewrwevdfg-sa'), false)
    resolve()
  })
})

test('synchronous: should return true if exists locally', () => {
  return new Promise((resolve) => {
    const res = detectInstalled.sync('global-modules', {
      local: true
    })
    test.strictEqual(res, true)
    resolve()
  })
})

test('synchronous: should return false if not exists locally', () => {
  return new Promise((resolve) => {
    const actual = detectInstalled.sync('sdfjkhskh3-sf9sd78fsdf', {
      local: true
    })
    test.strictEqual(actual, false)
    resolve()
  })
})

test('synchronous: should work for subdirs (issue #5), exists locally', (done) => {
  const dirname = __dirname
  mkdirp.sync('barrr')
  process.chdir('barrr')

  const result = detectInstalled.sync('global-modules', {
    cwd: getDir.sync(),
    local: true
  })
  test.strictEqual(result, true)
  process.chdir(dirname)
  rimraf.sync('barrr')
  done()
})

test('async: should work for #5, not exists locally', () => {
  const dirname = __dirname
  mkdirp.sync('subdir')
  process.chdir('subdir')

  return detectInstalled('npm', {
    cwd: getDir.sync(),
    local: true
  }).then((actual) => {
    test.strictEqual(actual, false)
    process.chdir(dirname)
    rimraf.sync('subdir')
  })
})
