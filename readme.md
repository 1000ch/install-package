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

### `install(packages, [options], [execOptions])`

#### packages

Type: `String`, `Array<String>`

#### options

Type: `String`, `Array<String>`, `Object`

#### execOptions

Type: [`Object`](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)

## License

MIT: http://1000ch.mit-license.org
