'use strict';

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
    'stylelint-selector-no-empty',
    'stylelint-selector-tag-no-without-class'
  ],
  rules: {
    'plugin/stylelint-selector-no-empty': true,
    'plugin/selector-tag-no-without-class': ['div', 'span'],

    'at-rule-allowed-list': ['media', 'keyframes', 'charset', 'font-face', 'page'],
    'at-rule-disallowed-list': ['custom-selector', '-moz-document'],
    'at-rule-property-required-list': {
      'font-face': ['font-display', 'font-family', 'font-style', 'src']
    },
    'color-hex-length': 'long',
    'comment-word-disallowed-list': [
      'todo',

      /* list from https://developers.google.com/style/word-list */
      'aka', 'allowlisting', 'allowlisted', 'authN', 'authZ', 'autoupdate',
      'blackhat', 'black-hat', 'blackhole', 'blackholed', 'blacklist',
      'black-list', 'blacklisted', 'black-listed', 'blacklisting',
      'black-listing', 'chubby', 'comprise', 'cons', 'crazy', 'bonkers',
      'mad', 'lunatic', 'insane', 'loony', 'cripple', 'cripples', 'dead-letter',
      'denylisted', 'denylisting', 'desire', 'desired', 'first-class',
      'ghetto', 'grandfather', 'grandfathered', 'grand-father', 'grayhat',
      'housekeeping', 'male-adapter', 'female-adapter', 'fat',
      'man-in-the-middle', 'manpower', 'master', 'monkey', 'ninja', 'outpost',
      'retarded', 'sane', 'sanity-check', 'sexy', 'sherpa', 'slave',
      'smartphone', 'tarball', 'textbox', 'tribal', 'voodoo', 'webmaster',
      'whitehat', 'white-hat', 'whitelist', 'white-list', 'whitelisted',
      'white-listed', 'whitelisting', 'white-listing', 'ymmv'
    ],
    'declaration-block-no-redundant-longhand-properties': false,
    'declaration-property-unit-allowed-list': {
      'font-size': ['rem'],
      'transition-delay': ['ms'],
      animation: ['ms'],
      'line-height': [],
      'letter-spacing': ['em']
    },
    'declaration-property-value-allowed-list': {
      all: ['initial'],
      content: ['""', '/^attr\\(/', 'none'],
      font: ['inherit']
    },
    'declaration-property-value-disallowed-list': {
      color: ['rebeccapurple'],
      fill: ['rebeccapurple'],
      'background-color': ['rebeccapurple']
    },
    'function-url-scheme-allowed-list': ['data', 'https'],
    'function-disallowed-list': ['gray', 'color-mod'],
    'keyframes-name-pattern': '[a-z-]{4,40}',
    'custom-media-pattern': '[a-z-]{4,40}',
    'custom-property-pattern': '[a-z-]{4,40}',
    'selector-class-pattern': '[a-z-_]{3,40}',
    'selector-id-pattern': '[a-z-_]{2,40}',
    linebreaks: 'unix',
    'no-empty-first-line': true,
    'number-max-precision': 5,
    'property-disallowed-list': [
      '-webkit-font-smoothing', '-moz-osx-font-smoothing',
      'font-smoothing', 'osx-font-smoothing', 'font-smooth'
    ],
    'unicode-bom': 'never',
    'time-min-milliseconds': 75,
    'selector-no-qualifying-type': true,
    'selector-max-attribute': 1,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 2,
    'selector-max-type': 3,
    'selector-disallowed-list': [':root'],
    'selector-pseudo-class-disallowed-list': [':scope', ':has', ':matches'],
    'unit-disallowed-list': [
      'cm', 'mm', 'Q', 'in', 'pc', 'pt',
      'ex', 'ch',
      's'
    ],

    'declaration-block-no-shorthand-property-overrides': true,
    'no-irregular-whitespace': true,
    'no-invalid-position-at-import-rule': true,
    'named-grid-areas-no-invalid': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'number',
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
    'font-family-name-quotes': 'always-where-recommended',

    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports'
        },
        {
          type: 'at-rule',
          name: 'media'
        },
        'rules'
      ],
      { severity: 'warning' }
    ],
    'order/properties-order': [
      [
        'all',
        'contain',
        'will-change',
        'appearance',
        'content',

        'position',

        'inset',
        'inset-block',
        'inset-inline',
        'top',
        'right',
        'bottom',
        'left',
        'inset-block-end',
        'inset-block-start',
        'inset-inline-end',
        'inset-inline-start',

        'z-index',
        'display',
        'vertical-align',

        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'flex-direction',
        'flex-flow',
        'flex-wrap',

        'grid',
        'grid-area',
        'grid-template',
        'grid-template-areas',
        'grid-template-rows',
        'grid-template-columns',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-auto-rows',
        'grid-auto-columns',
        'grid-auto-flow',
        'grid-gap',
        'grid-row-gap',
        'grid-column-gap',

        'gap',
        'row-gap',
        'column-gap',

        'place-content',
        'align-content',
        'justify-content',

        'place-items',
        'align-items',
        'justify-items',

        'place-self',
        'align-self',
        'justify-self',

        'align-tracks',
        'justify-tracks',

        'order',
        'float',
        'clear',
        'object-fit',

        'scroll-behavior',

        'overflow',
        'overflow-x',
        'overflow-y',
        'overflow-block',
        'overflow-inline',

        'overflow-scrolling',
        'overflow-anchor',
        'overflow-clip-margin',

        'overscroll-behavior',
        'overscroll-behavior-x',
        'overscroll-behavior-y',
        'overscroll-behavior-block',
        'overscroll-behavior-inline',

        //
        'box-sizing',
        'block-size',
        'min-block-size',
        'max-block-size',
        'inline-size',
        'min-inline-size',
        'max-inline-size',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',

        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-block',
        'margin-block-end',
        'margin-block-start',
        'margin-inline',
        'margin-inline-end',
        'margin-inline-start',

        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'padding-block',
        'padding-block-end',
        'padding-block-start',
        'padding-inline',
        'padding-inline-end',
        'padding-inline-start',

        // border
        'border',
        'border-color',
        'border-style',
        'border-width',

        'border-top',
        'border-top-color',
        'border-top-style',
        'border-top-width',
        'border-right',
        'border-right-color',
        'border-right-style',
        'border-right-width',
        'border-bottom',
        'border-bottom-color',
        'border-bottom-style',
        'border-bottom-width',
        'border-left',
        'border-left-color',
        'border-left-style',
        'border-left-width',

        'border-block',
        'border-block-color',
        'border-block-end',
        'border-block-end-color',
        'border-block-end-style',
        'border-block-end-width',
        'border-block-start',
        'border-block-start-color',
        'border-block-start-style',
        'border-block-start-width',
        'border-block-style',
        'border-block-width',

        'border-inline',
        'border-inline-color',
        'border-inline-end',
        'border-inline-end-color',
        'border-inline-end-style',
        'border-inline-end-width',
        'border-inline-start',
        'border-inline-start-color',
        'border-inline-start-style',
        'border-inline-start-width',
        'border-inline-style',
        'border-inline-width',

        'border-image',
        'border-image-outset',
        'border-image-repeat',
        'border-image-slice',
        'border-image-source',
        'border-image-width',

        'border-collapse',
        'border-spacing',

        'border-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-top-left-radius',
        'border-end-start-radius',
        'border-end-end-radius',
        'border-start-end-radius',
        'border-start-start-radius',

        // scroll margin and padding
        'scroll-margin',
        'scroll-margin-block',
        'scroll-margin-inline',
        'scroll-margin-top',
        'scroll-margin-right',
        'scroll-margin-bottom',
        'scroll-margin-left',
        'scroll-margin-block-end',
        'scroll-margin-block-start',
        'scroll-margin-inline-end',
        'scroll-margin-inline-start',

        'scroll-padding',
        'scroll-padding-block',
        'scroll-padding-inline',
        'scroll-padding-top',
        'scroll-padding-right',
        'scroll-padding-bottom',
        'scroll-padding-left',
        'scroll-padding-block-end',
        'scroll-padding-block-start',
        'scroll-padding-inline-end',
        'scroll-padding-inline-start',

        // background
        'background',
        'background-color',
        'background-image',
        'background-position',
        'background-position-x',
        'background-position-y',
        'background-size',
        'background-repeat',
        'background-attachment',

        'background-blend-mode',
        'background-clip',
        'background-origin',

        // color
        'color',
        '-webkit-text-fill-color',
        'caret-color',

        'fill',
        'fill-opacity',
        'fill-rule',

        'stroke',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke-width',

        'stop-color',
        'stop-opacity',

        'flood-color',
        'flood-opacity',

        'marker',
        'marker-end',
        'marker-mid',
        'marker-start',

        'color-adjust',
        'color-scheme',
        'color-interpolation',
        'color-interpolation-filters',
        'color-profile',
        'color-rendering',

        '-webkit-tap-highlight-color',
        'box-decoration-break',

        'scrollbar-color',
        'scrollbar-width',
        'scrollbar-gutter',

        'outline',
        'outline-width',
        'outline-style',
        'outline-color',
        'outline-offset',
        'table-layout',
        'caption-side',
        'empty-cells',

        'list-style',
        'list-style-position',
        'list-style-type',
        'list-style-image',

        // image
        'image-orientation',
        'image-rendering',
        'image-resolution',

        // clip
        'clip',
        'clip-path',

        // mask
        'mask',
        'mask-image',
        'mask-position',
        'mask-size',
        'mask-repeat',
        'mask-origin',
        'mask-clip',
        'mask-composite',

        'mask-type',
        'mask-mode',

        'mask-border',
        'mask-border-mode',
        'mask-border-outset',
        'mask-border-repeat',
        'mask-border-slice',
        'mask-border-source',
        'mask-border-width',

        //
        'font',

        'font-family',
        'font-style',
        'font-variant',
        'font-weight',
        'font-stretch',
        'font-size',
        'line-height',

        'font-kerning',
        'font-size-adjust',

        'font-display',
        'font-language-override',
        'font-optical-sizing',
        'font-synthesis',
        'font-variant-alternates',
        'font-variant-caps',
        'font-variant-east-asian',
        'font-variant-ligatures',
        'font-variant-numeric',
        'font-variant-position',
        'font-variation-settings',

        'src',
        'letter-spacing',
        'quotes',
        'counter-increment',
        'counter-reset',
        '-ms-writing-mode',
        'text-align',
        'text-align-last',
        'text-anchor',

        'text-decoration',
        'text-decoration-color',
        'text-decoration-line',
        'text-decoration-skip',
        'text-decoration-skip-ink',
        'text-decoration-style',
        'text-decoration-thickness',

        'text-underline-offset',
        'text-underline-position',

        'text-emphasis',
        'text-emphasis-position',
        'text-emphasis-style',
        'text-emphasis-color',
        'text-indent',
        'text-justify',
        'text-outline',
        'text-transform',
        'text-wrap',
        'text-overflow',
        'text-overflow-ellipsis',
        'text-overflow-mode',
        'text-shadow',
        'text-rendering',

        'white-space',
        'word-spacing',
        'word-wrap',
        'word-break',
        'overflow-wrap',
        'tab-size',
        'hyphens',
        'interpolation-mode',

        '-moz-osx-font-smoothing',
        '-webkit-font-smoothing',

        //
        'opacity',
        'visibility',
        'box-shadow',
        'filter',
        'resize',
        'cursor',
        'pointer-events',
        'touch-action',
        'user-select',

        //
        'unicode-bidi',
        'direction',
        'columns',

        'column-span',
        'column-width',
        'column-count',
        'column-fill',
        'column-gap',
        'column-rule',
        'column-rule-width',
        'column-rule-style',
        'column-rule-color',

        'break-before',
        'break-inside',
        'break-after',

        'page-break-before',
        'page-break-inside',
        'page-break-after',

        'orphans',
        'widows',

        'zoom',
        'max-zoom',
        'min-zoom',
        'user-zoom',

        'orientation',

        // transition transform animation
        'backface-visibility',
        'transition',
        'transition-delay',
        'transition-timing-function',
        'transition-duration',
        'transition-property',

        'rotate',
        'scale',
        'translate',

        'transform',
        'transform-origin',
        'transform-box',
        'transform-style',

        'animation',
        'animation-name',
        'animation-duration',
        'animation-play-state',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',

        'offset',
        'offset-position',
        'offset-path',
        'offset-distance',
        'offset-rotate',
        'offset-anchor'
      ],
      {
        unspecified: 'bottom',
        severity: 'warning'
      }
    ]
  }
};
