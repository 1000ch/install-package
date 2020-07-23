'use strict';
const test = require('ava');
const uninstall = require('uninstall-package');
const install = require('..');

test('install a package', async t => {
  const {stdout} = await install('noop2', ['--no-save']);
  await uninstall('noop2', ['--no-save']);

  t.not(stdout, null);
});

test('install multiple packages', async t => {
  const {stdout} = await install(['noop2', 'noop3'], ['--no-save']);
  await uninstall(['noop2', 'noop3'], ['--no-save']);

  t.not(stdout, null);
});

test('install not exist package', async t => {
  try {
    await install('not-exist-package', ['--no-save']);
  } catch (error) {
    t.not(error, null);
  }
});

test('accept string options', async t => {
  const {stdout} = await install('noop2', ['--no-save']);
  await uninstall('noop2', '--no-save');

  t.not(stdout, null);
});

test('accept array options', async t => {
  const {stdout} = await install('noop2', ['--no-save']);
  await uninstall('noop2', ['--no-save']);

  t.not(stdout, null);
});

test('accept object options', async t => {
  const {stdout} = await install('noop2', {'--no-save': true});
  await uninstall('noop2', ['--no-save']);

  t.not(stdout, null);
});
