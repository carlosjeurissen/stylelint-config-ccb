export default [
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

  /* webkit-only - WebKit supports without -webkit prefix, but not standard
  or on standards track */
  'mask-repeat-x',
  'mask-repeat-y',

  /* webkit-only - New syntax has been standardized.Property links to the
  new syntax. Old prefixed syntax is still supported in some browsers. */
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
  '-webkit-text-decoration-skip',
  '-webkit-text-decorations-in-effect',
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

  /* webkit-only allowed
  '-webkit-text-fill-color',
  '-webkit-tap-highlight-color',
  '-webkit-user-drag', // for now, html[draggable="true"] is preferred
  '-webkit-touch-callout', // see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout
  */

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

  'color-adjust',

  'word-wrap',
  'page-break-inside',
  'clip',

  /* compatibility */
  '-webkit-text-stroke', // use -webkit-text-stroke-width or -webkit-text-stroke-color

  /* opinionated */
  'float',

  'font-smooth',

  'word-break',
];
