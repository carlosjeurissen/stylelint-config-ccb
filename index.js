'use strict';

module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
    'stylelint-selector-no-empty',
    'stylelint-color-format',
    'stylelint-prettier'
  ],
  rules: {
    /* stylelint-config-standard overwrites */
    'alpha-value-notation': 'number',
    'color-hex-length': 'long',
    'declaration-block-no-redundant-longhand-properties': null,
    'function-url-quotes': [
      'always',
      {
        except: [
          'empty'
        ]
      }
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['unicode-range'],
        camelCaseSvgKeywords: true
      }
    ],
    'number-max-precision': 5,
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
    'declaration-property-max-values': {
      'border-width': 2,
      border: 3,
      margin: 2,
      padding: 2
    },

    'rule-selector-property-disallowed-list': {
      html: ['background', 'background-color', 'background-image', /^background/]
    },

    'at-rule-allowed-list': ['import', 'media', 'keyframes', 'charset', 'font-face', 'page', 'supports'],
    'at-rule-disallowed-list': ['custom-selector', '-moz-document'],
    'at-rule-property-required-list': {
      'font-face': ['font-display', 'font-family', 'font-style', 'src']
    },
    'color-no-hex': true,
    'comment-word-disallowed-list': [
      'todo',

      /* list from https://developers.google.com/style/word-list */
      'aka', 'allowlisting', 'allowlisted', 'authN', 'authZ', 'autoupdate',
      'blackhat', 'black-hat', 'blackhole', 'blackholed', 'blacklist',
      'black-list', 'blacklisted', 'black-listed', 'blacklisting',
      'black-listing', 'chubby', 'comprise', 'crazy', 'bonkers',
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
    'declaration-property-unit-allowed-list': {
      'font-size': ['rem', 'em'],
      'transition-delay': ['ms'],
      animation: ['ms'],
      'line-height': [],
      'z-index': [],
      opacity: [],
      'letter-spacing': ['em']
    },
    'declaration-property-value-allowed-list': {
      'text-decoration': ['inherit', 'underline', 'none'],
      all: ['initial', 'revert'],
      position: ['fixed', 'absolute', 'relative', 'sticky'],
      appearance: ['none', 'auto'],
      content: ['""', '/^attr\\(/', '/^var\\(/', 'none'],
      font: ['inherit'],
      fill: ['currentColor', 'inherit', 'none'],
      overflow: ['initial', 'hidden', 'clip', 'auto'],
      overflowX: ['initial', 'hidden', 'clip', 'auto'],
      overflowY: ['initial', 'hidden', 'clip', 'auto']
    },
    'declaration-property-value-disallowed-list': {
      outline: ['none'],
      color: ['rebeccapurple'],
      fill: ['rebeccapurple'],
      'background-color': ['rebeccapurple', 'none'],
      'font-size': ['0']
    },
    'function-url-scheme-allowed-list': ['data', 'https'],
    'function-disallowed-list': ['gray', 'color-mod', 'color', 'rgba', 'hsla'],
    'declaration-no-important': true,
    'property-disallowed-list': [
      /* microsoft-only properties */
      '-ms-accelerator',
      '-ms-block-progression',
      '-ms-content-zoom-chaining',
      '-ms-content-zooming',
      '-ms-content-zoom-limit',
      '-ms-content-zoom-limit-max',
      '-ms-content-zoom-limit-min',
      '-ms-content-zoom-snap',
      '-ms-content-zoom-snap-points',
      '-ms-content-zoom-snap-type',
      '-ms-filter',
      '-ms-flow-from',
      '-ms-flow-into',
      '-ms-high-contrast-adjust',
      '-ms-hyphenate-limit-chars',
      '-ms-hyphenate-limit-lines',
      '-ms-hyphenate-limit-zone',
      '-ms-ime-align',
      '-ms-overflow-style',
      '-ms-scrollbar-3dlight-color',
      '-ms-scrollbar-arrow-color',
      '-ms-scrollbar-base-color',
      '-ms-scrollbar-darkshadow-color',
      '-ms-scrollbar-face-color',
      '-ms-scrollbar-highlight-color',
      '-ms-scrollbar-shadow-color',
      '-ms-scrollbar-track-color',
      '-ms-scroll-chaining',
      '-ms-scroll-limit',
      '-ms-scroll-limit-x-max',
      '-ms-scroll-limit-x-min',
      '-ms-scroll-limit-y-max',
      '-ms-scroll-limit-y-min',
      '-ms-scroll-rails',
      '-ms-scroll-snap-points-x',
      '-ms-scroll-snap-points-y',
      '-ms-scroll-snap-x',
      '-ms-scroll-snap-y',
      '-ms-scroll-translation',
      '-ms-text-autospace',
      '-ms-touch-select',
      '-ms-wrap-flow',
      '-ms-wrap-margin',
      '-ms-wrap-through',
      'zoom',

      /* mozilla / firefox only properties */

      '-moz-binding',
      '-moz-border-bottom-colors',
      '-moz-border-left-colors',
      '-moz-border-right-colors',
      '-moz-border-top-colors',
      '-moz-box-align',
      '-moz-box-direction',
      '-moz-box-flex',
      '-moz-box-ordinal-group',
      '-moz-box-orient',
      '-moz-box-pack',
      '-moz-context-properties',
      '-moz-float-edge',
      '-moz-force-broken-image-icon',
      '-moz-image-region',
      '-moz-orient',
      '-moz-osx-font-smoothing',
      '-moz-outline-radius',
      '-moz-outline-radius-bottomleft',
      '-moz-outline-radius-bottomright',
      '-moz-outline-radius-topleft',
      '-moz-outline-radius-topright',
      '-moz-stack-sizing',
      '-moz-user-focus',
      '-moz-user-input',
      '-moz-user-modify',
      '-moz-window-dragging',
      '-moz-window-shadow',
      'overflow-clip-box',
      'overflow-clip-box-block',
      'overflow-clip-box-inline',

      /* webkit-only - WebKit supports without -webkit prefix, but not standard or on standards track */
      '-webkit-mask-repeat-x',
      '-webkit-mask-repeat-y',

      /* webkit-only - New syntax has been standardized. Property links to the new syntax. Old prefixed syntax is still supported in some browsers. */
      '-webkit-border-after',
      '-webkit-border-after-color',
      '-webkit-border-after-style',
      '-webkit-border-after-width',
      '-webkit-border-before',
      '-webkit-border-before-color',
      '-webkit-border-before-style',
      '-webkit-border-before-width',
      '-webkit-border-end',
      '-webkit-border-end-color',
      '-webkit-border-end-style',
      '-webkit-border-end-width',
      '-webkit-border-start',
      '-webkit-border-start-color',
      '-webkit-border-start-style',
      '-webkit-border-start-width',
      '-webkit-box-align',
      '-webkit-box-direction',
      '-webkit-box-flex',
      '-webkit-box-flex-group',
      '-webkit-box-lines',
      '-webkit-box-ordinal-group',
      '-webkit-box-orient',
      '-webkit-box-pack',
      '-webkit-box-reflect',
      '-webkit-margin-end',
      '-webkit-margin-start',
      '-webkit-padding-after',
      '-webkit-padding-before',
      '-webkit-padding-end',
      '-webkit-padding-start',

      /* other webkit-only */
      '-webkit-animation-trigger',
      '-webkit-app-region',
      '-webkit-aspect-ratio',
      '-webkit-backdrop-filter',
      '-webkit-border-fit',
      '-webkit-border-horizontal-spacing',
      '-webkit-border-vertical-spacing',
      '-webkit-column-axis',
      '-webkit-column-break-after',
      '-webkit-column-break-before',
      '-webkit-column-break-inside',
      '-webkit-column-progression',
      '-webkit-cursor-visibility',
      '-webkit-dashboard-region',
      '-webkit-font-size-delta',
      '-webkit-font-smoothing',
      '-webkit-highlight',
      '-webkit-hyphenate-character',
      '-webkit-hyphenate-limit-after',
      '-webkit-hyphenate-limit-before',
      '-webkit-hyphenate-limit-lines',
      '-webkit-initial-letter',
      '-webkit-line-align',
      '-webkit-line-box-contain',
      '-webkit-line-clamp',
      '-webkit-line-grid',
      '-webkit-line-snap',
      '-webkit-locale',
      '-webkit-logical-height',
      '-webkit-logical-width',
      '-webkit-margin-after',
      '-webkit-margin-before',
      '-webkit-marquee',
      '-webkit-marquee-direction',
      '-webkit-marquee-increment',
      '-webkit-marquee-repetition',
      '-webkit-marquee-speed',
      '-webkit-marquee-style',
      '-webkit-mask-box-image',
      '-webkit-mask-box-image-outset',
      '-webkit-mask-box-image-repeat',
      '-webkit-mask-box-image-slice',
      '-webkit-mask-box-image-source',
      '-webkit-mask-box-image-width',
      '-webkit-mask-position-x',
      '-webkit-mask-position-y',
      '-webkit-mask-source-type',
      '-webkit-max-logical-height',
      '-webkit-max-logical-width',
      '-webkit-min-logical-height',
      '-webkit-min-logical-width',
      '-webkit-nbsp-mode',
      '-webkit-perspective-origin-x',
      '-webkit-perspective-origin-y',
      '-webkit-rtl-ordering',
      '-webkit-svg-shadow',
      '-webkit-tap-highlight-color',
      '-webkit-text-decoration-skip',
      '-webkit-text-decorations-in-effect',
      '-webkit-text-fill-color',
      '-webkit-text-security',
      '-webkit-text-stroke',
      '-webkit-text-stroke-color',
      '-webkit-text-stroke-width',
      '-webkit-text-zoom',
      '-webkit-transform-origin-x',
      '-webkit-transform-origin-y',
      '-webkit-transform-origin-z',
      '-webkit-user-drag',
      '-webkit-user-modify',

      /* deprecated safari webkit properties, see:
      https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/ */
      '-webkit-alt*',
      '-webkit-background-composite',
      '-webkit-border-fit',
      '-webkit-color-correction',
      '-webkit-flow-from',
      '-webkit-flow-into',
      '-webkit-grid-columns',
      '-webkit-grid-rows',
      '-webkit-hyphenate-charset',
      '-webkit-image-set',
      '-webkit-mask-attachment',
      '-webkit-match-nearest-mail-blockquote-color',
      '-webkit-margin-collapse',
      '-webkit-margin-after-collapse',
      '-webkit-margin-before-collapse',
      '-webkit-margin-bottom-collapse',
      '-webkit-margin-top-collapse',
      '-webkit-overflow-scrolling',
      '-webkit-region-break-after',
      '-webkit-region-break-before',
      '-webkit-region-break-inside',
      '-webkit-region-fragment',
      '-webkit-shape-inside',
      '-webkit-touch-callout',
      'background-origin-x',
      'background-origin-y',

      /* webkit prefixes */
      '-webkit-appearance',
      '-webkit-mask',
      '-webkit-mask-image',
      '-webkit-mask-size',
      '-webkit-mask-repeat-x',
      '-webkit-mask-repeat-y',
      '-webkit-mask-origin',
      '-webkit-backface-visibility',
      '-webkit-text-combine-upright',
      '-webkit-print-color-adjust',

      /* legacy */
      'text-decoration-skip',

      '-moz-outline-radius',
      '-moz-outline-radius-bottomleft',
      '-moz-outline-radius-bottomright',
      '-moz-outline-radius-topleft',
      '-moz-outline-radius-topright',

      '-webkit-font-smoothing',
      '-moz-osx-font-smoothing',
      'font-smoothing',
      'osx-font-smoothing',

      'box-orient',

      'zoom',

      'word-break',
      'page-break-inside',
      'clip',

      /* compatibility */
      '-webkit-text-stroke', // use -webkit-text-stroke-width or -webkit-text-stroke-color

      /* opinionated */
      'float',

      'font-smooth'
    ],
    'time-min-milliseconds': 75,
    'selector-no-qualifying-type': true,
    'selector-max-attribute': 1,
    'selector-max-id': 0,
    'selector-max-universal': 0,
    'selector-max-pseudo-class': 2,
    'selector-max-type': 2,
    'selector-disallowed-list': [':root'],
    'selector-pseudo-class-disallowed-list': [':scope', ':has', ':matches'],
    'unit-disallowed-list': [
      'cm', 'mm', 'Q', 'in', 'pc', 'pt',
      'ex', 'ch',
      's'
    ],

    'font-weight-notation': [
      'numeric',
      {
        ignore: [
          'relative'
        ]
      }
    ],
    'function-url-no-scheme-relative': true,
    'max-nesting-depth': 2,
    'color-named': 'never',
    'no-unknown-animations': true,

    /* prettier-overlap */
    linebreaks: 'unix',
    'unicode-bom': 'never',
    'at-rule-semicolon-space-before': 'never',
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
    'selector-combinator-space-before': null
    */

    /* prettier-conflicts, prefer prettier */
    'max-line-length': 80,

    'prettier/prettier': [
      true,
      {
        quoteProps: 'preserve'
      }
    ],

    'color-format/format': {
      format: 'rgb'
    },

    'plugin/stylelint-selector-no-empty': true,

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
