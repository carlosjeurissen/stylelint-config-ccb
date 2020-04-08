'use strict';

module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'selector-max-universal': 1,
    'font-weight-notation': [
      'numeric',
      {
        ignore: [
          'relative'
        ]
      }
    ],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': [
      'always',
      {
        except: [
          'empty'
        ]
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements']
      }
    ],
    'selector-attribute-quotes': 'always',
    'string-quotes': 'double',
    'max-nesting-depth': 2,
    'color-named': 'never',
    'at-rule-semicolon-space-before': 'never',
    'block-opening-brace-newline-before': 'never-single-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: 'unicode-range'
      }
    ],
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: [
          'x'
        ]
      }
    ],
    'shorthand-property-no-redundant-values': true,
    'no-unknown-animations': true,
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'font-family-name-quotes': 'always-where-recommended'
  }
};
