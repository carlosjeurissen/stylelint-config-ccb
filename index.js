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
        'content',
        'position',
        'top',
        'right',
        'bottom',
        'left',
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
        'align-content',
        'align-items',
        'align-self',
        'justify-content',
        'justify-items',
        'justify-self',
        'order',
        'float',
        'clear',
        'object-fit',
        'overflow',
        'overflow-x',
        'overflow-y',
        'overflow-scrolling',
        'clip',

        //
        'box-sizing',
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

        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',

        'border',
        'border-spacing',
        'border-collapse',
        'border-width',
        'border-style',
        'border-color',
        'border-top',
        'border-top-width',
        'border-top-style',
        'border-top-color',
        'border-right',
        'border-right-width',
        'border-right-style',
        'border-right-color',
        'border-bottom',
        'border-bottom-width',
        'border-bottom-style',
        'border-bottom-color',
        'border-left',
        'border-left-width',
        'border-left-style',
        'border-left-color',
        'border-radius',
        'border-top-left-radius',
        'border-top-right-radius',
        'border-bottom-right-radius',
        'border-bottom-left-radius',
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
        'border-top-image',
        'border-right-image',
        'border-bottom-image',
        'border-left-image',
        'border-corner-image',
        'border-top-left-image',
        'border-top-right-image',
        'border-bottom-right-image',
        'border-bottom-left-image',

        //
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

        'color',
        'fill',
        'stroke',
        'box-decoration-break',
        'box-shadow',
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

        //
        'font',

        'font-style',
        'font-variant',
        'font-weight',
        'font-stretch',
        'font-size',
        'line-height',
        'font-family',

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
        'text-decoration',
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
        'white-space',
        'word-spacing',
        'word-wrap',
        'word-break',
        'overflow-wrap',
        'tab-size',
        'hyphens',
        'interpolation-mode',

        //
        'opacity',
        'visibility',
        'filter',
        'resize',
        'cursor',
        'pointer-events',
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

        //
        'transition',
        'transition-delay',
        'transition-timing-function',
        'transition-duration',
        'transition-property',
        'transform',
        'transform-origin',

        'animation',
        'animation-name',
        'animation-duration',
        'animation-play-state',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode'
      ],
      {
        unspecified: 'bottom',
        severity: 'warning'
      }
    ]
  }
};
