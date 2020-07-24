'use strict';
const test = require('ava');
const uninstall = require('uninstall-package');
const install = require('..');

test.afterEach.always(async () => {
  await uninstall(['noop2', 'noop3'], ['--no-save']);
});

test('install a package', async t => {
  try {
    const {stdout} = await install('noop2', ['--no-save']);

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('install multiple packages', async t => {
  try {
    const {stdout} = await install(['noop2', 'noop3'], ['--no-save']);

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('install not exist package', async t => {
  try {
    await install('not-exist-package', ['--no-save']);
  } catch (error) {
    t.not(error, null);
  }
});

test('throw exception when package is blank', async t => {
  try {
    await install(null);
  } catch (error) {
    t.not(error, null);
  }
});

test('accept string options', async t => {
  try {
    const {stdout} = await install('noop2', '--no-save');

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('accept array options', async t => {
  try {
    const {stdout} = await install('noop2', ['--no-save']);

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});

test('accept object options', async t => {
  try {
    const {stdout} = await install('noop2', {'--no-save': true});

    t.not(stdout, null);
  } catch (error) {
    t.fail(error);
  }
});
