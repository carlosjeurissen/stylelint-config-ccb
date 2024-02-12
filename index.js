/* eslint-disable import/extensions */
import fs from 'node:fs';
import commentWordDisallowedList from './data/comment-word-disallowed-list.js';
import propertyDisallowedList from './data/property-disallowed-list.js';
import selectorDisallowedList from './data/selector-disallowed-list.js';
import propertyOrderList from './data/property-order-list.js';

const mainPlugins = [
  '@carlosjeurissen/stylelint-csstree-validator', // see https://github.com/csstree/stylelint-validator/pull/59
  '@double-great/stylelint-a11y',
  '@stylistic/stylelint-plugin',
  'stylelint-color-format',
  'stylelint-declaration-block-no-ignored-properties',
  'stylelint-high-performance-animation',
  'stylelint-no-indistinguishable-colors',
  'stylelint-no-nested-media',
  'stylelint-order',
  'stylelint-prettier',
  'stylelint-require-units',
  'stylelint-selector-no-empty',
  'stylelint-value-no-unknown-custom-properties',

  /* TODO 16
  'stylelint-plugin-import', // see https://github.com/electrovir/stylelint-plugin-import/issues/22
  */

  /* TODO
  'stylelint-no-browser-hacks/lib',
  'stylelint-scss',
  */
];

const mainRules = {
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
  'media-feature-name-value-no-unknown': true,
  'no-unknown-custom-properties': true,

  'declaration-property-max-values': {
    border: 3,
    'border-width': 2,
    margin: 2,
    padding: 2,
  },

  'rule-selector-property-disallowed-list': {
    ':root': ['/^background/', '/^margin/', 'font-family', 'font', 'position'],
    html: ['/^background/', '/^margin/', 'font-family', 'font', 'position'],

    body: ['position'],

    '/::-webkit-scrollbar$/': ['display', 'visibility'],

    '/:(hover|focus|focus-visible|active)/': ['cursor'],
    a: ['/^margin/'],
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
      '/^var\\(/', '/^attr\\(aria-/', '/^attr\\(data-/',
    ],
    fill: ['currentColor', 'inherit', 'none'],
    font: ['inherit'],
    overflow: ['initial', 'hidden', 'clip', 'auto'],
    overflowX: ['initial', 'hidden', 'clip', 'auto'],
    overflowY: ['initial', 'hidden', 'clip', 'auto'],
    position: ['fixed', 'absolute', 'relative', 'sticky'],
    'text-decoration': ['inherit', 'underline', 'none'],
    'user-select': ['none', 'text'],
    'z-index': ['/^[1-9]\\d{0,3}$/', '-1', 'initial'], // only allow z-index 1 up to 9999
  },
  'declaration-property-value-disallowed-list': {
    all: ['inherit'], // see https://github.com/WICG/view-transitions/blob/main/debugging_overflow_on_images.md
    'background-color': ['none', 'rebeccapurple'],
    'font-size': ['0'],
    outline: ['none', '0'],
    'scrollbar-width': ['none', '0'],
    'text-align': ['justify'],
    'word-break': ['break-word'],

    transition: ['/all|-webkit-|-moz-|-ms-|-o-/'],
    'transition-property': ['/all|-webkit-|-moz-|-ms-|-o-/'],

    '/^border(-block|-inline)?(-top|-right|-bottom|-left|-end|-start)?$/': ['0'],
    '/^overflow(?:-block|-inline|-x|-y|)$/': ['overlay'],
    '/^padding/': ['auto'],

    '/.*/': ['rebeccapurple', 'unset'],
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
  'selector-max-type': [0, {
    ignoreTypes: [
      'html', 'body', // for base styles
      'input', 'textarea', 'select', // for accent-color
      'a', // for reset
    ],
  }],
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
    'focus-inner', // TODO should be -moz-focus-inner, yet fails to work, see https://github.com/stylelint/stylelint/pull/6025
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
  'max-nesting-depth': [
    2,
    {
      ignore: ['pseudo-classes', 'blockless-at-rules'],
    },
  ],
  'no-unknown-animations': true,

  /* Stylistic rules */

  /* stylelint-config-standard */
  '@stylistic/at-rule-name-case': 'lower',
  '@stylistic/at-rule-name-space-after': 'always-single-line',
  '@stylistic/at-rule-semicolon-newline-after': 'always',
  '@stylistic/block-closing-brace-empty-line-before': 'never',
  '@stylistic/block-closing-brace-newline-after': 'always',
  '@stylistic/block-closing-brace-newline-before': 'always-multi-line',
  '@stylistic/block-closing-brace-space-before': 'always-single-line',
  '@stylistic/block-opening-brace-newline-after': 'always-multi-line',
  '@stylistic/block-opening-brace-space-after': 'always-single-line',
  '@stylistic/block-opening-brace-space-before': 'always',
  '@stylistic/color-hex-case': 'lower',
  '@stylistic/declaration-bang-space-after': 'never',
  '@stylistic/declaration-bang-space-before': 'always',
  '@stylistic/declaration-block-semicolon-newline-after': 'always-multi-line',
  '@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
  '@stylistic/declaration-block-semicolon-space-before': 'never',
  '@stylistic/declaration-block-trailing-semicolon': 'always',
  '@stylistic/declaration-colon-newline-after': 'always-multi-line',
  '@stylistic/declaration-colon-space-after': 'always-single-line',
  '@stylistic/declaration-colon-space-before': 'never',
  '@stylistic/function-comma-newline-after': 'always-multi-line',
  '@stylistic/function-comma-space-after': 'always-single-line',
  '@stylistic/function-comma-space-before': 'never',
  '@stylistic/function-max-empty-lines': 0,
  '@stylistic/function-parentheses-newline-inside': 'always-multi-line',
  '@stylistic/function-parentheses-space-inside': 'never-single-line',
  '@stylistic/function-whitespace-after': 'always',
  '@stylistic/indentation': 2,
  '@stylistic/max-empty-lines': 1,
  // '@stylistic/max-line-length': 120,
  '@stylistic/media-feature-colon-space-after': 'always',
  '@stylistic/media-feature-colon-space-before': 'never',
  '@stylistic/media-feature-name-case': 'lower',
  '@stylistic/media-feature-parentheses-space-inside': 'never',
  '@stylistic/media-feature-range-operator-space-after': 'always',
  '@stylistic/media-feature-range-operator-space-before': 'always',
  '@stylistic/media-query-list-comma-newline-after': 'always-multi-line',
  '@stylistic/media-query-list-comma-space-after': 'always-single-line',
  '@stylistic/media-query-list-comma-space-before': 'never',
  '@stylistic/no-empty-first-line': true,
  '@stylistic/no-eol-whitespace': true,
  '@stylistic/no-missing-end-of-source-newline': true,
  '@stylistic/number-leading-zero': 'always',
  '@stylistic/number-no-trailing-zeros': true,
  '@stylistic/property-case': 'lower',
  '@stylistic/selector-attribute-brackets-space-inside': 'never',
  '@stylistic/selector-attribute-operator-space-after': 'never',
  '@stylistic/selector-attribute-operator-space-before': 'never',
  '@stylistic/selector-combinator-space-after': 'always',
  '@stylistic/selector-combinator-space-before': 'always',
  '@stylistic/selector-descendant-combinator-no-non-space': true,
  '@stylistic/selector-list-comma-newline-after': 'always',
  '@stylistic/selector-list-comma-space-before': 'never',
  '@stylistic/selector-max-empty-lines': 0,
  '@stylistic/selector-pseudo-class-case': 'lower',
  '@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
  '@stylistic/selector-pseudo-element-case': 'lower',
  '@stylistic/string-quotes': 'double',
  '@stylistic/unit-case': 'lower',
  '@stylistic/value-list-comma-newline-after': 'always-multi-line',
  '@stylistic/value-list-comma-space-after': 'always-single-line',
  '@stylistic/value-list-comma-space-before': 'never',
  '@stylistic/value-list-max-empty-lines': 0,

  /* additional stylistic */
  '@stylistic/at-rule-semicolon-space-before': 'never',
  '@stylistic/max-line-length': 160,

  /* prettier-overlap */
  '@stylistic/linebreaks': 'unix',
  '@stylistic/unicode-bom': 'never',

  '@stylistic/block-opening-brace-newline-before': 'never-single-line',
  '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
  '@stylistic/function-comma-newline-before': 'never-multi-line',
  '@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
  '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
  '@stylistic/selector-list-comma-space-after': 'always-single-line',
  '@stylistic/value-list-comma-newline-before': 'never-multi-line',

  /* prettier-conflicts, prefer stylelint-config-standard
    '@stylistic/block-opening-brace-space-before': null,
    '@stylistic/declaration-colon-newline-after': null,
    '@stylistic/value-list-comma-newline-after': null,
    '@stylistic/selector-descendant-combinator-no-non-space': null,
    '@stylistic/selector-combinator-space-before': null, */

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

  'matterialize/stylelint-require-units': [true, {
    blacklistedProperties: ['line-height'],
    checkUnknownUnits: true,
  }],

  'plugin/stylelint-selector-no-empty': true,

  'plugin/stylelint-no-indistinguishable-colors': true,

  'plugin/declaration-block-no-ignored-properties': true,

  'pitcher/no-nested-media': true,

  'csstools/value-no-unknown-custom-properties': true,

  'declaration-property-value-no-unknown': true,

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
        name: 'supports',
        type: 'at-rule',
      },
      {
        name: 'media',
        type: 'at-rule',
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

  'a11y/font-size-is-readable': true,
  'a11y/no-spread-text': true,

  'csstree/validator': {
    ignoreValue: 'env\\(',
    syntaxExtensions: false,
  },

  /* TODO 16

  'plugin-import/file-extension': {
    mode: 'require', // require that all imports have a file extension
  },

  'plugin-import/import-as-reference': {
    mode: 'block', // prevent any imports use (reference)
  },
  */

  /* TODO
  'plugin/no-browser-hacks': true,
  */

  /* OBSOLETE
  // both already handled by selector-disallowed-list
  'a11y/no-obsolete-attribute': true,
  'a11y/no-obsolete-element': true,

  // both already handled by declaration-property-value-disallowed-list
  'a11y/no-text-align-justify': true,
  'a11y/no-outline-none': true,

  // reduced-motion autofix is too unreliable, see https://github.com/YozhikM/stylelint-a11y/issues/57
  'a11y/media-prefers-reduced-motion': true,

  // already handled by declaration-property-value-allowed-list
  'a11y/content-property-no-static-value': true,
  */

  /* UNUSED
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

function cloneJson (input) {
  return JSON.parse(JSON.stringify(input));
}

function copyArrayExceptValue (array, value) {
  const copy = cloneJson(array);
  removeItemOnce(copy, value);
  return copy;
}

function applyContentScriptRules (targetRules) {
  targetRules['declaration-no-important'] = null;
  targetRules['declaration-no-important'] = null;
  targetRules['no-descending-specificity'] = null;
  targetRules['selector-class-pattern'] = null;
  targetRules['selector-id-pattern'] = null;
  targetRules['selector-max-attribute'] = null;
  targetRules['selector-max-id'] = null;
  targetRules['selector-max-pseudo-class'] = null;
  targetRules['selector-max-type'] = null;
  targetRules['selector-max-universal'] = null;
  targetRules['selector-no-qualifying-type'] = null;
  targetRules['selector-pseudo-class-disallowed-list'] = copyArrayExceptValue(
    mainRules['selector-pseudo-class-disallowed-list'],
    'has',
  );
}

function applyCompatibilityRules (targetRules) {
  /* use hex and rgba instead of rgb */
  targetRules['color-function-notation'] = 'legacy';
  targetRules['color-no-hex'] = null;
  targetRules['function-disallowed-list'] = copyArrayExceptValue(
    mainRules['function-disallowed-list'],
    'rgba',
  );
  targetRules['function-disallowed-list'].push('rgb');
  targetRules['color-format/format'] = null;

  /* use float instead of percentage for alpha */
  targetRules['declaration-property-unit-allowed-list'].opacity = [];
  targetRules['alpha-value-notation'] = 'number';

  /* prevent merge of :not() selectors */
  targetRules['selector-not-notation'] = 'simple';

  /* use classic media query notation */
  targetRules['media-feature-range-notation'] = 'prefix';

  targetRules['plugin/no-unsupported-browser-features'] = true;
}

function generateConfig (options) {
  const plugins = cloneJson(mainPlugins);
  const rules = cloneJson(mainRules);

  if (options.compatibility) {
    plugins.push('stylelint-no-unsupported-browser-features');
    removeItemOnce(plugins, 'stylelint-color-format');
    applyCompatibilityRules(rules);
  }

  if (options.contentscript) {
    applyContentScriptRules(rules);
  }

  const overrides = [];

  if (options.contentscriptOverrides) {
    const csRules = {};
    applyContentScriptRules(csRules);

    overrides.push({
      files: [
        '**/cs-*.css',
        '**/content-script.css',
        '**/contentscript.css',
        '**/user-script.css',
        '**/userscript.css',
      ],
      rules: csRules,
    });
  }

  const config = {
    extends: 'stylelint-config-standard',
    plugins: plugins,
    rules: rules,
  };

  if (overrides.length > 0) {
    config.overrides = overrides;
  }

  return config;
}

function writeConfig (path, options) {
  const config = generateConfig(options);
  const fileText = '"use strict"; module.exports = ' + JSON.stringify(config);
  fs.writeFileSync(path, fileText);
}

writeConfig('./dist/main.cjs', {
  contentscriptOverrides: true,
});

writeConfig('./dist/compat.cjs', {
  compatibility: true,
  contentscriptOverrides: true,
});

writeConfig('./dist/contentscript.cjs', {
  contentscript: true,
});
