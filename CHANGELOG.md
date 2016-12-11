# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/tunnckocore/detect-installed/compare/v1.0.4...v2.0.0) (2016-12-11)


### Bug Fixes

* **appveyor:** clean builds ([0a8fd7f](https://github.com/tunnckocore/detect-installed/commit/0a8fd7f))
* **misc:** update changelog and package version ([8c55d06](https://github.com/tunnckocore/detect-installed/commit/8c55d06))


### Code Refactoring

* use ES2015, allow custom cwd to be passed through options ([a9586e7](https://github.com/tunnckocore/detect-installed/commit/a9586e7))


### BREAKING CHANGES

* default export is async and returns a promise; allow custom cwd to be passed

through opts.cwd; pass opts.local to check if package exists locally.





## 1.0.4 - 2015-07-17
- Release v1.0.4 / npm@v1.0.4
- remove `debug` and `handle-arguments`, simplify
- update repo

## 1.0.3 - 2015-05-09
- Release v1.0.3 / npm@v1.0.3
- update related
- reorganize tests
- bump dependencies, remove `fn-name`

## 1.0.2 - 2015-05-06
- Release v1.0.2 / npm@v1.0.2
- feross/standard for example usage
- add related section
- run update
- apply feross/standard, close #1

## 1.0.1 - 2015-04-18
- Release v1.0.1 / npm@v1.0.1
- run lint

## 1.0.0 - 2015-04-14
- Release v1.0.0 / npm@v1.0.0
- todo:
  + add cli
  + add docs, run docks(1)

## 0.0.0 - 2015-04-14
- first commits