# install-package ![test](https://github.com/1000ch/install-package/actions/workflows/test.yml/badge.svg?branch=main)

Install node modules from JavaScript.

## Install

```sh
npm install install-package
```

## Usage

```javascript
import install from 'install-package';

install('co', '--save').then(result => {
  console.log(result.stdout);
  console.log(result.stderr);
});
```

## API

### `install(packages, [args], [options])`

#### packages

Type: `String`, `Array<String>`

#### args

Type: `String`, `Array<String>`, `Object`

#### options

Type: [`Object`](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
