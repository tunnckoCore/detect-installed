/**
 * detect-installed <https://github.com/tunnckoCore/detect-installed>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var test = require('assertit')
var detectInstalled = require('./index')

test('detect-installed:', function () {
  test('should throw TypeError if `name` is not a string', function (done) {
    function fixture () {
      detectInstalled([1, 2, 3])
    }
    test.throws(fixture, TypeError)
    test.throws(fixture, /expect `name` to be string/)
    done()
  })
  test('should throw Error if `name` is empty string', function (done) {
    function fixture () {
      detectInstalled('')
    }
    test.throws(fixture, Error)
    test.throws(fixture, /expect `name` to be non empty string/)
    done()
  })
  test('should checks globally asynchronous. (when exists)', function (done) {
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
  test('should checks globally asynchronous. (when not exists)', function (done) {
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
  test('should checks globally synchronous. (when exists)', function (done) {
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
  test('should checks globally synchronous. (when not exists)', function (done) {
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
  test('should checks locally asynchronous. (when exists)', function (done) {
    detectInstalled('debug', true, function (err, actual) {
      test.equal(err, null)
      test.equal(actual, true)
      done()
    })
  })
  test('should checks locally asynchronous. (when not exists)', function (done) {
    detectInstalled('when not exists', true, function (err, actual) {
      test.equal(err, null)
      test.equal(actual, false)
      done()
    })
  })
  test('should checks locally synchronous. (when exists)', function (done) {
    var actual1 = detectInstalled('debug', true)
    var actual2 = detectInstalled('debug', true, {not: 'a function'})
    var expected = true

    test.equal(actual1, expected)
    test.equal(actual2, expected)
    done()
  })
  test('should checks locally synchronous. (when not exists)', function (done) {
    var actual1 = detectInstalled('npm', true)
    var actual2 = detectInstalled('npm', true, {not: 'a function'})
    var expected = false

    test.equal(actual1, expected)
    test.equal(actual2, expected)
    done()
  })
})
