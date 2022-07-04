/* eslint-disable
  global-require,
  no-autofix/strict,
  unicorn/prefer-module,
*/
/* global
  beforeEach,
  describe,
  expect,
  it,
*/

'use strict';

const fs = require('node:fs');
const stylelint = require('stylelint');
const config = require('..');

const validCss = fs.readFileSync('./__tests__/valid.css', 'utf8');
const invalidCss = fs.readFileSync('./__tests__/invalid.css', 'utf8');

describe('flags no warnings with valid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config: config,
    });
  });

  it('did not error', () => result.then((data) => expect(data.errored).toBeFalsy()));

  it('flags no warnings', () => result.then((data) => expect(data.results[0].warnings).toHaveLength(0)));
});

describe('flags warnings with invalid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config: config,
    });
  });

  it('did error', () => result.then((data) => expect(data.errored).toBeTruthy()));

  it('flags one warning', () => result.then((data) => expect(data.results[0].warnings).toHaveLength(2)));

  it('correct warning text', () => result.then((data) => expect(data.results[0].warnings[0].text).toBe(
    'Insert "0" (prettier/prettier)',
  )));

  it('correct warning text', () => result.then((data) => expect(data.results[0].warnings[1].text).toBe(
    'Expected a leading zero (number-leading-zero)',
  )));

  it('correct rule flagged', () => result.then((data) => expect(data.results[0].warnings[0].rule).toBe('prettier/prettier')));

  it('correct rule flagged', () => result.then((data) => expect(data.results[0].warnings[1].rule).toBe('number-leading-zero')));

  it('correct severity flagged', () => result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error')));

  it('correct line number', () => result.then((data) => expect(data.results[0].warnings[0].line).toBe(2)));

  it('correct column number', () => result.then((data) => expect(data.results[0].warnings[0].column).toBe(8)));
});
