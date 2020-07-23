'use strict';

const test = require('blue-tape');
const uninstall = require('uninstall-package');
const install = require('../');

test('install a package', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install('co', ['--no-save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('install multiple packages', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs'], ['--no-save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('cannot install not exist package', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install('not-exist-package', ['--no-save']))
    .catch(result => {
      t.ok(result.error);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept string options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install('co', '--no-save'))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept array options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install('co', ['--no-save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('accept object options', t => {
  t.plan(2);
  return Promise.resolve()
    .then(() => install('co', { '--no-save' : true }))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout || result.stderr);
    });
});

test('teardown', t => {
  return Promise.resolve()
    .then(() => uninstall(['co', 'co-fs'], ['--no-save']))
    .then(() => t.pass());
});
