/*!
 * detect-installed <https://github.com/tunnckoCore/detect-installed>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var mkdirp = require('mkdirp')
var test = require('assertit')
var detectInstalled = require('./index')

mkdirp.sync('subdir')

test('detect-installed:', function () {
  test('should throw TypeError if `name` is not a string', function (done) {
    function fixture () {
      detectInstalled([1, 2, 3])
    }
    test.throws(fixture, TypeError)
    test.throws(fixture, /detect-installed: expect `name` be string/)
    done()
  })
  test('should checks globally', function () {
    test('asynchronous, when exists', function (done) {
      detectInstalled('npm', function (err, actual) {
        test.equal(err, null)
        test.equal(actual, true)
        done()
      })
      detectInstalled('npm', false, function (err, actual) {
        test.equal(err, null)
        test.equal(actual, true)
        done()
      })
      detectInstalled('npm', [1, 2, 3], function (err, actual) {
        test.equal(err, null)
        test.equal(actual, true)
        done()
      })
    })
    test('asynchronous, when not exists', function (done) {
      detectInstalled('when not exists', function (err, actual) {
        test.equal(err, null)
        test.equal(actual, false)
        done()
      })
      detectInstalled('when not exists', false, function (err, actual) {
        test.equal(err, null)
        test.equal(actual, false)
        done()
      })
      detectInstalled('when not exists', [1, 2, 3], function (err, actual) {
        test.equal(err, null)
        test.equal(actual, false)
        done()
      })
    })
    test('synchronous, when exists', function (done) {
      var actual1 = detectInstalled('npm')
      var actual2 = detectInstalled('npm', false)
      var actual3 = detectInstalled('npm', [1, 2, 3])
      var actual4 = detectInstalled('npm', [1, 2, 3], {not: 'a function'})
      var expected = true

      test.equal(actual1, expected)
      test.equal(actual2, expected)
      test.equal(actual3, expected)
      test.equal(actual4, expected)
      done()
    })
    test('synchronous, when not exists', function (done) {
      var actual1 = detectInstalled('when not exists')
      var actual2 = detectInstalled('when not exists', false)
      var actual3 = detectInstalled('when not exists', [1, 2, 3])
      var actual4 = detectInstalled('when not exists', [1, 2, 3], {not: 'a function'})
      var expected = false

      test.equal(actual1, expected)
      test.equal(actual2, expected)
      test.equal(actual3, expected)
      test.equal(actual4, expected)
      done()
    })
  })
  test('should checks locally', function () {
    test('asynchronous, when exists', function (done) {
      detectInstalled('global-modules', true, function (err, actual) {
        test.equal(err, null)
        test.equal(actual, true)
        done()
      })
    })
    test('asynchronous, when not exists', function (done) {
      detectInstalled('when not exists', true, function (err, actual) {
        test.equal(err, null)
        test.equal(actual, false)
        done()
      })
    })
    test('synchronous, when exists', function (done) {
      var actual1 = detectInstalled('global-modules', true)
      var actual2 = detectInstalled('global-modules', true, {not: 'a function'})
      var expected = true

      test.equal(actual1, expected)
      test.equal(actual2, expected)
      done()
    })
    test('synchronous, when not exists', function (done) {
      var actual1 = detectInstalled('npm', true)
      var actual2 = detectInstalled('npm', true, {not: 'a function'})
      var expected = false

      test.equal(actual1, expected)
      test.equal(actual2, expected)
      done()
    })
    test('asynchronous, when exists, in sub-dir', function (done) {
      process.chdir('subdir')
      detectInstalled('global-modules', true, function (err, actual) {
        test.equal(err, null)
        test.equal(actual, true)
        done()
        process.chdir('..')
      })
    })
    test('asynchronous, when not exists, in sub-dir', function (done) {
      process.chdir('subdir')
      detectInstalled('when not exists', true, function (err, actual) {
        test.equal(err, null)
        test.equal(actual, false)
        done()
        process.chdir('..')
      })
    })
    test('synchronous, when exists, in sub-dir', function (done) {
      process.chdir('subdir')
      var actual1 = detectInstalled('global-modules', true)
      var actual2 = detectInstalled('global-modules', true, {not: 'a function'})
      var expected = true

      test.equal(actual1, expected)
      test.equal(actual2, expected)
      done()
      process.chdir('..')
    })
    test('synchronous, when not exists, in sub-dir', function (done) {
      process.chdir('subdir')
      var actual1 = detectInstalled('npm', true)
      var actual2 = detectInstalled('npm', true, {not: 'a function'})
      var expected = false

      test.equal(actual1, expected)
      test.equal(actual2, expected)
      done()
      process.chdir('..')
    })
  })
})
