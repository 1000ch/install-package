# install-package

Install node modules from JavaScript.

[![Build Status](https://travis-ci.org/1000ch/install-package.svg?branch=master)](https://travis-ci.org/1000ch/install-package)

## Install

```sh
npm install install-package
```

## Usage

```javascript
const install = require('install-package');

install('co', '--save').then(result => {
  console.log(result.stdout);
  console.log(result.stderr);
});
```

## API

### `install(packages, [options])`

#### packages

Type: `String`, `Array<String>`

#### options

Type: `String`, `Array<String>`, `Object`

## License

MIT: http://1000ch.mit-license.org
