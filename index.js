/* eslint-disable import/extensions */
import commentWordDisallowedList from './data/comment-word-disallowed-list.js';
import propertyDisallowedList from './data/property-disallowed-list.js';
import selectorDisallowedList from './data/selector-disallowed-list.js';
import propertyOrderList from './data/property-order-list.js';

const forContentScripts = false;
const forCompatibility = false;

const plugins = [
  '@ronilaukkarinen/stylelint-a11y',
  'stylelint-color-format',
  'stylelint-csstree-validator',
  'stylelint-declaration-block-no-ignored-properties',
  'stylelint-high-performance-animation',
  'stylelint-no-indistinguishable-colors',
  'stylelint-no-nested-media',
  'stylelint-order',
  'stylelint-plugin-import',
  'stylelint-prettier',
  'stylelint-require-units',
  'stylelint-selector-no-empty',
  'stylelint-value-no-unknown-custom-properties',
];

const rules = {
  /* stylelint-config-standard stylistic rules */
  'at-rule-name-case': 'lower',
  'at-rule-name-space-after': 'always-single-line',
  'at-rule-semicolon-newline-after': 'always',
  'block-closing-brace-empty-line-before': 'never',
  'block-closing-brace-newline-after': 'always',
  'block-closing-brace-newline-before': 'always-multi-line',
  'block-closing-brace-space-before': 'always-single-line',
  'block-opening-brace-newline-after': 'always-multi-line',
  'block-opening-brace-space-after': 'always-single-line',
  'block-opening-brace-space-before': 'always',
  'color-hex-case': 'lower',
  'declaration-bang-space-after': 'never',
  'declaration-bang-space-before': 'always',
  'declaration-block-semicolon-newline-after': 'always-multi-line',
  'declaration-block-semicolon-space-after': 'always-single-line',
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-single-line-max-declarations': 1,
  'declaration-block-trailing-semicolon': 'always',
  'declaration-colon-newline-after': 'always-multi-line',
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  'function-comma-newline-after': 'always-multi-line',
  'function-comma-space-after': 'always-single-line',
  'function-comma-space-before': 'never',
  'function-max-empty-lines': 0,
  'function-parentheses-newline-inside': 'always-multi-line',
  'function-parentheses-space-inside': 'never-single-line',
  'function-whitespace-after': 'always',
  indentation: 2,
  'max-empty-lines': 1,
  // 'max-line-length': 120,
  'media-feature-colon-space-after': 'always',
  'media-feature-colon-space-before': 'never',
  'media-feature-name-case': 'lower',
  'media-feature-parentheses-space-inside': 'never',
  'media-feature-range-operator-space-after': 'always',
  'media-feature-range-operator-space-before': 'always',
  'media-query-list-comma-newline-after': 'always-multi-line',
  'media-query-list-comma-space-after': 'always-single-line',
  'media-query-list-comma-space-before': 'never',
  'no-empty-first-line': true,
  'no-eol-whitespace': true,
  'no-missing-end-of-source-newline': true,
  'number-leading-zero': 'always',
  'number-no-trailing-zeros': true,
  'property-case': 'lower',
  'selector-attribute-brackets-space-inside': 'never',
  'selector-attribute-operator-space-after': 'never',
  'selector-attribute-operator-space-before': 'never',
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': true,
  'selector-list-comma-newline-after': 'always',
  'selector-list-comma-space-before': 'never',
  'selector-max-empty-lines': 0,
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-element-case': 'lower',
  'string-quotes': 'double',
  'unit-case': 'lower',
  'value-list-comma-newline-after': 'always-multi-line',
  'value-list-comma-space-after': 'always-single-line',
  'value-list-comma-space-before': 'never',
  'value-list-max-empty-lines': 0,

  /* stylelint-config-standard overwrites */
  'alpha-value-notation': 'percentage',
  'color-hex-length': 'long',
  'declaration-block-no-redundant-longhand-properties': null,
  'function-url-quotes': [
    'always',
    {
      except: [
        'empty',
      ],
    },
  ],
  'number-max-precision': 5,
  'value-keyword-case': [
    'lower',
    {
      camelCaseSvgKeywords: true,
      ignoreProperties: ['unicode-range'],
    },
  ],

  /* todo update these based on 'selector-id-pattern': [
      '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
      {
        message: 'Expected id selector to be kebab-case'
      }
    ], */

  'custom-media-pattern': '[a-z-]{4,40}',
  'custom-property-pattern': '[a-z-]{4,40}',
  'keyframes-name-pattern': '[a-z-]{4,40}',
  'selector-class-pattern': '[a-z-_]{3,40}',
  'selector-id-pattern': '[a-z-_]{2,40}',

  /* stylelint-config-ccb */
  'keyframe-block-no-duplicate-selectors': true,

  'declaration-property-max-values': {
    'border-width': 2,
    border: 3,
    margin: 2,
    padding: 2,
  },

  'rule-selector-property-disallowed-list': {
    ':root': [/^background/, /^margin/, 'font-family', 'font'],
    html: [/^background/, /^margin/, 'font-family', 'font'],

    a: [/^margin/],
  },

  'at-rule-allowed-list': [
    'charset',
    'font-face',
    'import',
    'keyframes',
    'media',
    'page',
    'supports',
  ],
  'at-rule-disallowed-list': ['custom-selector', '-moz-document'],
  'at-rule-property-required-list': {
    'font-face': ['font-display', 'font-family', 'font-style', 'src'],
  },
  'at-rule-semicolon-space-before': 'never',
  'color-hex-alpha': 'never',
  'color-named': 'never',
  'color-no-hex': true,
  'comment-word-disallowed-list': commentWordDisallowedList,
  'declaration-no-important': true,
  'declaration-property-unit-allowed-list': {
    animation: ['ms'],
    'transition-delay': ['ms'],

    'font-size': ['rem', 'em'],
    'letter-spacing': ['em'],

    'line-height': [],
    opacity: ['%'],
    'z-index': [],
  },
  'declaration-property-value-allowed-list': {
    all: ['initial', 'revert'],
    appearance: ['none', 'auto'],
    content: [
      'none', '""',
      '"*"', '":"', '"ǀ"',
      /^var\(/, /^attr\(aria-/, /^attr\(data-/,
    ],
    fill: ['currentColor', 'inherit', 'none'],
    font: ['inherit'],
    overflow: ['initial', 'hidden', 'clip', 'auto'],
    overflowX: ['initial', 'hidden', 'clip', 'auto'],
    overflowY: ['initial', 'hidden', 'clip', 'auto'],
    position: ['fixed', 'absolute', 'relative', 'sticky'],
    'text-decoration': ['inherit', 'underline', 'none'],
    'user-select': ['none', 'text'],
    'z-index': [/^[1-9]\d{0,3}$/, '-1', 'initial'], // only allow z-index 1 up to 9999
  },
  'declaration-property-value-disallowed-list': {
    'background-color': ['none', 'rebeccapurple'],
    'font-size': ['0'],
    outline: ['none', '0'],
    'text-align': ['justify'],
    'word-break': ['break-word'],

    transition: [/all|-webkit-|-moz-|-ms-|-o-/],
    'transition-property': [/all|-webkit-|-moz-|-ms-|-o-/],

    '/^border(-block|-inline)?(-top|-right|-bottom|-left|-end|-start)?$': ['0'],
    '/^padding/': ['auto'],
    '/.*/': ['rebeccapurple'],
  },
  'function-url-no-scheme-relative': true,
  'function-url-scheme-allowed-list': ['data', 'https'],
  'function-url-scheme-disallowed-list': ['ftp', 'http'],

  'function-disallowed-list': [
    // deprecated colors
    'gray', 'color-mod', 'rgba', 'hsla',
    // not preferred colors
    'hwb', 'hsl',
    'lab', 'oklab', 'lch', 'oklch',
    'color', 'color-mix', 'color-contrast',
    // stepped value functions
    'round', 'mod', 'rem',
    // trigonometric functions
    'tan', 'sin', 'cos',
    'atan', 'asin', 'acos',
    'atan2',
    // future
    'anchor', 'toggle',
    // ancient
    'expression',
    // bad coding pattern, use srcset or media queries
    'image-set', '-webkit-image-set',
  ],
  'property-disallowed-list': propertyDisallowedList,
  'selector-disallowed-list': selectorDisallowedList,
  'selector-max-attribute': 1,
  'selector-max-id': 0,
  'selector-max-pseudo-class': 2,
  'selector-max-type': 2,
  'selector-max-universal': [0, {
    ignoreAfterCombinators: ['+', '>'],
  }],
  'selector-no-qualifying-type': true,
  'selector-pseudo-class-disallowed-list': [
    'any',
    'has',
    'matches',
    'root',
    'scope',
    'modal',
    'host',
    'host-contex',
  ],
  'selector-pseudo-element-allowed-list': [
    'first-letter',
    'first-line',
    'file-selector-button',
    'before',
    'after',
    'backdrop',
    'placeholder',
  ],
  'time-min-milliseconds': 75,
  'unit-disallowed-list': [
    // physical length
    'cm', 'mm', 'Q', 'in', 'pc', 'pt',
    // Relative length
    'ex', 'ch', 'ic', 'cap', 'lh', 'rlh',
    // Time units
    's',
    // Angle units
    'grad', 'rad', 'turn',
    // Resolution
    'dpcm',
  ],

  'font-weight-notation': [
    'numeric',
    {
      ignore: [
        'relative',
      ],
    },
  ],
  'max-line-length': 160,
  'max-nesting-depth': 2,
  'no-unknown-animations': true,

  /* prettier-overlap */
  linebreaks: 'unix',
  'unicode-bom': 'never',

  'block-opening-brace-newline-before': 'never-single-line',
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  'function-comma-newline-before': 'never-multi-line',
  'media-query-list-comma-newline-before': 'never-multi-line',
  'selector-list-comma-newline-before': 'never-multi-line',
  'selector-list-comma-space-after': 'always-single-line',
  'value-list-comma-newline-before': 'never-multi-line',

  /* prettier-conflicts, prefer stylelint-config-standard
    'block-opening-brace-space-before': null,
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,
    'selector-descendant-combinator-no-non-space': null,
    'selector-combinator-space-before': null, */

  'prettier/prettier': [
    true,
    {
      printWidth: 2000,
      quoteProps: 'preserve',
    },
  ],

  'color-format/format': {
    format: 'rgb',
  },

  'a11y/font-size-is-readable': true,
  'a11y/no-spread-text': true,

  'matterialize/stylelint-require-units': [true, {
    blacklistedProperties: ['line-height'],
    checkUnknownUnits: true,
  }],

  // both already handled by selector-disallowed-list
  // 'a11y/no-obsolete-attribute': true,
  // 'a11y/no-obsolete-element': true,

  // both already handled by declaration-property-value-disallowed-list
  // 'a11y/no-text-align-justify': true,
  // 'a11y/no-outline-none': true,

  // reduced-motion autofix is too unreliable, see https://github.com/YozhikM/stylelint-a11y/issues/57
  // 'a11y/media-prefers-reduced-motion': true,

  // already handled by declaration-property-value-allowed-list
  // 'a11y/content-property-no-static-value': true,

  'plugin/stylelint-selector-no-empty': true,

  'plugin/stylelint-no-indistinguishable-colors': true,

  'plugin/declaration-block-no-ignored-properties': true,

  'plugin-import/file-extension': {
    mode: 'require', // require that all imports have a file extension
  },

  'plugin-import/import-as-reference': {
    mode: 'block', // prevent any imports use (reference)
  },

  'pitcher/no-nested-media': true,

  'csstools/value-no-unknown-custom-properties': true,

  'declaration-property-value-no-unknown': true,

  'csstree/validator': {
    ignoreValue: 'env\\(',
    syntaxExtensions: false,
  },

  'plugin/no-low-performance-animation-properties': [true, {
    // ignore: 'paint-properties',
    ignoreProperties: [
      'background-color',
      'border-color',
      'border-radius',
      'box-shadow',
      'color',
    ],
  }],

  'order/order': [
    [
      'dollar-variables',
      'custom-properties',
      'at-rules',
      'declarations',
      {
        type: 'at-rule',
        name: 'supports',
      },
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
    ],
    { severity: 'warning' },
  ],
  'order/properties-order': [
    propertyOrderList,
    {
      severity: 'warning',
      unspecified: 'bottom',
    },
  ],
  /* rules not used
  declaration-property-unit-disallowed-list
  function-allowed-list
  media-feature-name-allowed-list
  media-feature-name-disallowed-list
  media-feature-name-value-allowed-list
  media-feature-name-unit-allowed-list // todo
  property-allowed-list
  selector-attribute-name-disallowed-list
  selector-attribute-operator-allowed-list
  selector-attribute-operator-disallowed-list
  selector-combinator-allowed-list
  selector-combinator-disallowed-list
  selector-pseudo-class-allowed-list
  selector-pseudo-element-disallowed-list
  unit-allowed-list
  selector-max-class
  selector-max-combinators
  selector-max-compound-selectors
  selector-max-specificity
  media-feature-range-notation
  comment-pattern
  selector-nested-pattern
  block-closing-brace-space-after
  at-rule-name-newline-after
  */
};

function removeItemOnce (arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

if (forContentScripts) {
  rules['declaration-no-important'] = null;
  rules['declaration-no-important'] = null;
  rules['no-descending-specificity'] = null;
  rules['selector-class-pattern'] = null;
  rules['selector-id-pattern'] = null;
  rules['selector-max-attribute'] = null;
  rules['selector-max-id'] = null;
  rules['selector-max-pseudo-class'] = null;
  rules['selector-max-type'] = null;
  rules['selector-max-universal'] = null;
  rules['selector-no-qualifying-type'] = null;

  removeItemOnce(rules['selector-pseudo-class-disallowed-list'], 'has');
}

if (forCompatibility) {
  /* use hex and rgba instead of rgb */
  rules['color-function-notation'] = 'legacy';
  rules['color-no-hex'] = null;
  removeItemOnce(rules['function-disallowed-list'], 'rgba');
  rules['function-disallowed-list'].push('rgb');
  removeItemOnce(plugins, 'stylelint-color-format');
  delete rules['color-format/format'];

  /* use float instead of percentage for alpha */
  rules['declaration-property-unit-allowed-list'].opacity = [];
  rules['alpha-value-notation'] = 'number';

  /* prevent merge of :not() selectors */
  rules['selector-not-notation'] = 'simple';
}

export default {
  extends: 'stylelint-config-standard',
  plugins: plugins,
  rules: rules,
};
