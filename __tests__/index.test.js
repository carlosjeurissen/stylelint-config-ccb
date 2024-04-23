import fs from 'node:fs';
import stylelint from 'stylelint';

import {
  beforeEach,
  describe,
  expect,
  test,
} from 'vitest';

import config from '../dist/main.cjs';

const validCss = fs.readFileSync('./__tests__/valid.css', 'utf8');
const invalidCss = fs.readFileSync('./__tests__/invalid.css', 'utf8');

describe('flags no warnings with valid css', () => {
  let result;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: validCss,
      config: config,
    });
  });

  test('did not error', () => expect(result.errored).toBeFalsy());

  test('flags no warnings', () => expect(result.results[0].warnings).toHaveLength(0));
});

describe('flags warnings with invalid css', () => {
  let result;

  beforeEach(async () => {
    result = await stylelint.lint({
      code: invalidCss,
      config: config,
    });
  });

  test('did error', () => expect(result.errored).toBeTruthy());

  test('flags one warning', () => expect(result.results[0].warnings).toHaveLength(3));

  test('correct warning text', () => expect(result.results[0].warnings[0].text).toBe(
    'Expected a leading zero (@stylistic/number-leading-zero)',
  ));

  test('correct warning text', () => expect(result.results[0].warnings[1].text).toBe(
    'Expected "button" to have no more than 0 type selectors (selector-max-type)',
  ));

  test('correct warning text', () => expect(result.results[0].warnings[2].text).toBe(
    'Insert "0" (prettier/prettier)',
  ));

  test('correct rule flagged', () => expect(result.results[0].warnings[0].rule).toBe('@stylistic/number-leading-zero'));

  test('correct rule flagged', () => expect(result.results[0].warnings[1].rule).toBe('selector-max-type'));

  test('correct rule flagged', () => expect(result.results[0].warnings[2].rule).toBe('prettier/prettier'));

  test('correct severity flagged', () => expect(result.results[0].warnings[0].severity).toBe('error'));

  test('correct line number', () => expect(result.results[0].warnings[0].line).toBe(2));

  test('correct column number', () => expect(result.results[0].warnings[0].column).toBe(8));
});
