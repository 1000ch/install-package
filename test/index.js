'use strict';

const test = require('blue-tape');
const install = require('../');

test('install a package', t => {
  t.plan(3);
  return Promise.resolve()
    .then(() => install('co'))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout);
      t.notOk(result.stderr);
    });
});

test('install multiple packages', t => {
  t.plan(3);
  return Promise.resolve()
    .then(() => install(['co', 'co-fs']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout);
      t.notOk(result.stderr);
    });
});

test('cannot install not exist package', t => {
  t.plan(3);
  return Promise.resolve()
    .then(() => install('not-exist-package'))
    .catch(result => {
      t.ok(result.error);
      t.notOk(result.stdout);
      t.ok(result.stderr);
    });
});

test('accept string options', t => {
  t.plan(3);
  return Promise.resolve()
    .then(() => install('co', '--save'))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout);
      t.notOk(result.stderr);
    });
});

test('accept array options', t => {
  t.plan(3);
  return Promise.resolve()
    .then(() => install('co', ['--save']))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout);
      t.notOk(result.stderr);
    });
});

test('accept object options', t => {
  t.plan(3);
  return Promise.resolve()
    .then(() => install('co', { '--save' : true }))
    .then(result => {
      t.equal(result.error, null);
      t.ok(result.stdout);
      t.notOk(result.stderr);
    });
});
