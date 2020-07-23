'use strict';
const {promisify} = require('util');
const {execFile} = require('child_process');
const execFileP = promisify(execFile);

function isObject(value) {
  return !Array.isArray(value) && typeof value === 'object';
}

function isString(value) {
  return typeof value === 'string';
}

function normalizePackages(args) {
  const pkgs = [];

  if (Array.isArray(args)) {
    for (const pkg of args) {
      if (isString(pkg)) {
        pkgs.push(pkg);
      }
    }
  } else if (isString(args)) {
    pkgs.push(args);
  }

  return pkgs;
}

function normalizeOptions(args) {
  const options = [];

  if (Array.isArray(args)) {
    for (const option of args) {
      if (isString(option)) {
        options.push(option);
      }
    }
  } else if (isObject(args)) {
    for (const key of Object.keys(args)) {
      const value = args[key];
      if (value === true) {
        options.push(key);
      } else if (isString(value)) {
        options.push(`${key}=${value}`);
      }
    }
  } else if (isString(args)) {
    options.push(args);
  }

  return options;
}

module.exports = async (packages, options, execOptions = {}) => {
  const args = ['npm', 'install'];
  const pkgs = normalizePackages(packages);

  if (pkgs.length === 0) {
    throw new Error('Invalid package names');
  }

  for (const pkg of pkgs) {
    args.push(pkg);
  }

  for (const option of normalizeOptions(options)) {
    args.push(option);
  }

  const result = await execFileP(args[0], args.slice(1), execOptions);

  return result;
};
