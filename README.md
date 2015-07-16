# [detect-installed][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Checks that given package name is installed locally or globally. Support sync and async api.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i detect-installed --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var detectInstalled = require('detect-installed')

// (sync) checks globally
detectInstalled('npm') //=> true

// (async) checks globally
detectInstalled('npm', function (err, res) {
  console.log(err) //=> null
  console.log(res) //=> true
})

// (sync) checks locally
detectInstalled('npm', true) //=> false

// (async) checks locally
detectInstalled('npm', true, function (err, res) {
  console.log(err) //=> null
  console.log(res) //=> false
})
```


## Related
- [get-installed-path](https://github.com/tunnckoCore/get-installed-path): Get the installation path of the given package if it is installed globally or… [more](https://github.com/tunnckoCore/get-installed-path)
- [global-prefix](https://github.com/jonschlinkert/global-prefix): Get the npm global path prefix.
- [global-paths](https://github.com/jonschlinkert/global-paths): Returns an array of unique "global" directories based on the user's platform and environment. The resulting paths can be used for doing lookups for generators or other globally installed npm packages. Node.js / JavaScript.
- [global-modules](https://github.com/jonschlinkert/global-modules): The directory used by npm for globally installed npm modules.
- [is-windows](https://github.com/jonschlinkert/is-windows): Returns true if the platform is windwows.
- [is-missing](https://github.com/tunnckoCore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as… [more](https://github.com/tunnckoCore/is-missing)
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system - globally or… [more](https://github.com/tunnckoCore/is-installed)
- [npm-related](https://github.com/tunnckoCore/npm-related): Thin wrapper on top of `helper-related` for generating a list of links to the… [more](https://github.com/tunnckoCore/npm-related)
- [helper-related](https://github.com/helpers/helper-related): Template helper for generating a list of links to the homepages of related GitHub/npm projects.
- [parse-git-log](https://github.com/tunnckoCore/parse-git-log): Parse default `git log` style to array of objects from git repository of… [more](https://github.com/tunnckoCore/parse-git-log)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/detect-installed/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/detect-installed
[npmjs-img]: https://img.shields.io/npm/v/detect-installed.svg?label=detect-installed

[license-url]: https://github.com/tunnckoCore/detect-installed/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/detect-installed
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/detect-installed.svg

[travis-url]: https://travis-ci.org/tunnckoCore/detect-installed
[travis-img]: https://img.shields.io/travis/tunnckoCore/detect-installed.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/detect-installed
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/detect-installed.svg

[david-url]: https://david-dm.org/tunnckoCore/detect-installed
[david-img]: https://img.shields.io/david/tunnckoCore/detect-installed.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
