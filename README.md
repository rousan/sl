<p align="center">
  <img src="https://raw.githubusercontent.com/rousan/sl/master/demo.gif" alt="NPM Script listing Demo">
    <br>
    <br>
</p>


[![Build Status](https://travis-ci.org/rousan/sl.svg?branch=develop)](https://travis-ci.org/rousan/sl)
[![codecov](https://codecov.io/gh/rousan/sl/branch/develop/graph/badge.svg)](https://codecov.io/gh/rousan/sl)
[![Maintainability](https://api.codeclimate.com/v1/badges/85b7410d4df44dd6bec4/maintainability)](https://codeclimate.com/github/rousan/sl/maintainability)
[![NPM version](https://img.shields.io/npm/v/script-list.svg)](https://www.npmjs.com/package/script-list)
[![Required Node version](https://img.shields.io/node/v/script-list.svg)](https://www.npmjs.com/package/script-list)
[![NPM total downloads](https://img.shields.io/npm/dt/script-list.svg)](https://www.npmjs.com/package/script-list)
[![Contributors](https://img.shields.io/github/contributors/rousan/sl.svg)](https://github.com/rousan/sl/graphs/contributors)
[![License](https://img.shields.io/github/license/rousan/sl.svg)](https://github.com/rousan/sl/blob/master/LICENSE)

# sl

A tiny and useful tool to list all `npm` scripts from `package.json` file.

> sl = script list

## Requirements

`node` >= `v4.0.0`

**Note**: If `node` and `npm` are not installed, Install them from [here](https://nodejs.org/en/download/).

## Installation

Install it from `npm`:

```bash
$ npm install -g script-list
```

## Usage

Access it from terminal or command prompt by `sl` command.

```bash
$ sl

   MyAwesomeProject
    - build           : babel src -d lib
    - start           : node node_modules/react-native/local-cli/cli.js start
    - test            : jest --coverage --verbose

```

### Script List for Multiple Projects

```bash
$ sl MyAwesomeProject MyAwesomeProject2

   MyAwesomeProject
    - build           : babel src -d lib
    - start           : node node_modules/react-native/local-cli/cli.js start
    - test            : jest --coverage --verbose


   MyAwesomeProject2
    - ng        : ng
    - test:e2e  : ng e2e
    - test:unit : ng test
    - test      : ng e2e && ng test

```

### Use Globbing

```bash
$ sl **/*

   MyProject1
    - build           : babel src -d lib
    - start           : node node_modules/react-native/local-cli/cli.js start
    - test            : jest --coverage --verbose


   MyProject2
    - ng        : ng
    - test:e2e  : ng e2e
    - test:unit : ng test
    - test      : ng e2e && ng test


   MyProject3
    - build : babel src -d lib
    - start : node src/cli.js
    - test  : mocha test

```

**Note**: It has built-in support for path `globbing` on `windows`.

## Contributing

Your PRs and stars are always welcome.

Checkout the [CONTRIBUTING](https://github.com/rousan/sl/blob/master/CONTRIBUTING.md) guides.
