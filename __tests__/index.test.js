/* eslint-env node, es2022, jest */
/* eslint-disable
  global-require,
  no-autofix/strict,
  unicorn/prefer-module,
*/

import fs from 'node:fs';
import stylelint from 'stylelint';
import config from '../dist/main.cjs';

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

  it('flags one warning', () => result.then((data) => expect(data.results[0].warnings).toHaveLength(3)));

  it('correct warning text', () => result.then((data) => expect(data.results[0].warnings[0].text).toBe(
    'Expected a leading zero (stylistic/number-leading-zero)',
  )));

  it('correct warning text', () => result.then((data) => expect(data.results[0].warnings[1].text).toBe(
    'Expected "a" to have no more than 0 type selectors (selector-max-type)',
  )));

  it('correct warning text', () => result.then((data) => expect(data.results[0].warnings[2].text).toBe(
    'Insert "0" (prettier/prettier)',
  )));

  it('correct rule flagged', () => result.then((data) => expect(data.results[0].warnings[0].rule).toBe('stylistic/number-leading-zero')));

  it('correct rule flagged', () => result.then((data) => expect(data.results[0].warnings[1].rule).toBe('selector-max-type')));

  it('correct rule flagged', () => result.then((data) => expect(data.results[0].warnings[2].rule).toBe('prettier/prettier')));

  it('correct severity flagged', () => result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error')));

  it('correct line number', () => result.then((data) => expect(data.results[0].warnings[0].line).toBe(2)));

  it('correct column number', () => result.then((data) => expect(data.results[0].warnings[0].column).toBe(8)));
});
