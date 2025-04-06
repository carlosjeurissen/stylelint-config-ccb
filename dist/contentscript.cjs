"use strict"; module.exports = {"extends":"stylelint-config-standard","plugins":["@carlosjeurissen/stylelint-csstree-validator","@double-great/stylelint-a11y","@stylistic/stylelint-plugin","stylelint-color-format","stylelint-declaration-block-no-ignored-properties","stylelint-high-performance-animation","stylelint-no-indistinguishable-colors","stylelint-no-nested-media","stylelint-no-unsupported-browser-features","stylelint-order","stylelint-prettier","stylelint-require-units","stylelint-selector-no-empty","stylelint-selector-pseudo-class-lvhfa","stylelint-value-no-unknown-custom-properties"],"rules":{"alpha-value-notation":"percentage","color-hex-length":"long","declaration-block-no-redundant-longhand-properties":null,"font-family-no-duplicate-names":[true,{"ignoreFontFamilyNames":["monospace"]}],"function-url-quotes":["always",{"except":["empty"]}],"number-max-precision":5,"value-keyword-case":["lower",{"camelCaseSvgKeywords":true,"ignoreProperties":["unicode-range"]}],"declaration-property-value-no-unknown":true,"function-linear-gradient-no-nonstandard-direction":true,"function-no-unknown":true,"keyframe-block-no-duplicate-selectors":true,"media-feature-name-value-no-unknown":true,"no-unknown-animations":true,"no-unknown-custom-media":true,"no-unknown-custom-properties":true,"unit-no-unknown":true,"declaration-property-max-values":{"border":3,"border-width":2,"margin":2,"padding":2},"rule-selector-property-disallowed-list":{":root":["/^background/","/^margin/","font-family","font","position"],"html":["/^background/","/^margin/","font-family","font","position"],"body":["position"],"/::-webkit-scrollbar$/":["display","visibility"],"/:(hover|focus|focus-visible)/":["cursor"],"a":["/^margin/"]},"at-rule-allowed-list":["charset","font-face","import","keyframes","media","page","supports"],"at-rule-disallowed-list":["custom-selector","-moz-document"],"at-rule-property-required-list":{"font-face":["font-display","font-family","font-style","src"]},"color-hex-alpha":"never","color-named":"never","color-no-hex":true,"color-no-invalid-hex":true,"comment-word-disallowed-list":["todo","aka","allowlisting","allowlisted","authN","authZ","autoupdate","blackhat","black-hat","blackhole","blackholed","blacklist","black-list","blacklisted","black-listed","blacklisting","black-listing","chubby","comprise","crazy","bonkers","mad","lunatic","insane","loony","cripple","cripples","dead-letter","denylisted","denylisting","desire","desired","first-class","ghetto","grandfather","grandfathered","grand-father","grayhat","housekeeping","male-adapter","female-adapter","fat","man-in-the-middle","manpower","master","monkey","ninja","outpost","retarded","sane","sanity-check","sexy","sherpa","slave","smartphone","tarball","textbox","tribal","voodoo","webmaster","whitehat","white-hat","whitelist","white-list","whitelisted","white-listed","whitelisting","white-listing","ymmv"],"declaration-no-important":null,"declaration-property-unit-allowed-list":{"animation":["ms"],"animation-delay":["ms"],"animation-duration":["ms"],"transition-delay":["ms"],"font-size":["rem","em"],"letter-spacing":["em"],"line-height":[],"opacity":["%"],"z-index":[]},"declaration-property-value-allowed-list":{"all":["initial","revert"],"animation":["/^[0-9]/","initial","none"],"appearance":["none","auto"],"content":["none","\"\"","\"*\"","\":\"","\"ǀ\"","\"#\"","\"…\"","\"✓\"","/^var\\(/","/^attr\\(aria-/","/^attr\\(data-/"],"fill":["currentColor","inherit","none"],"font":["inherit"],"position":["fixed","absolute","relative","sticky"],"text-decoration":["inherit","underline","none"],"user-select":["none","text"],"/^overflow(?:-block|-inline|-x|-y|)$/":["initial","hidden","clip","auto"]},"declaration-property-value-disallowed-list":{"all":["inherit"],"background-color":["none","rebeccapurple"],"font":["0"],"outline":["none","0"],"scrollbar-width":["none","0"],"text-align":["justify"],"word-break":["break-word"],"transition":["/all|-webkit-|-moz-|-ms-|-o-/"],"transition-property":["/all|-webkit-|-moz-|-ms-|-o-/"],"/^border(-block|-inline)?(-top|-right|-bottom|-left|-end|-start)?$/":["0"],"/^overflow(?:-block|-inline|-x|-y|)$/":["overlay"],"/^padding/":["auto"],"/.*/":["rebeccapurple","unset"]},"function-url-no-scheme-relative":true,"function-url-scheme-allowed-list":["data","https"],"function-url-scheme-disallowed-list":["ftp","http"],"function-disallowed-list":["rgba","gray","color-mod","hsla","hwb","hsl","lab","oklab","lch","oklch","color","color-mix","color-contrast","round","mod","rem","tan","sin","cos","atan","asin","acos","atan2","anchor","toggle","expression","image-set","-webkit-image-set"],"property-disallowed-list":["-ms-accelerator","-ms-block-progression","-ms-content-zoom-chaining","-ms-content-zooming","-ms-content-zoom-limit","-ms-content-zoom-limit-max","-ms-content-zoom-limit-min","-ms-content-zoom-snap","-ms-content-zoom-snap-points","-ms-content-zoom-snap-type","-ms-filter","-ms-flow-from","-ms-flow-into","-ms-high-contrast-adjust","-ms-hyphenate-limit-chars","-ms-hyphenate-limit-lines","-ms-hyphenate-limit-zone","-ms-ime-align","-ms-overflow-style","-ms-scrollbar-3dlight-color","-ms-scrollbar-arrow-color","-ms-scrollbar-base-color","-ms-scrollbar-darkshadow-color","-ms-scrollbar-face-color","-ms-scrollbar-highlight-color","-ms-scrollbar-shadow-color","-ms-scrollbar-track-color","-ms-scroll-chaining","-ms-scroll-limit","-ms-scroll-limit-x-max","-ms-scroll-limit-x-min","-ms-scroll-limit-y-max","-ms-scroll-limit-y-min","-ms-scroll-rails","-ms-scroll-snap-points-x","-ms-scroll-snap-points-y","-ms-scroll-snap-x","-ms-scroll-snap-y","-ms-scroll-translation","-ms-text-autospace","-ms-touch-select","-ms-wrap-flow","-ms-wrap-margin","-ms-wrap-through","zoom","-moz-binding","-moz-border-bottom-colors","-moz-border-left-colors","-moz-border-right-colors","-moz-border-top-colors","-moz-box-align","-moz-box-direction","-moz-box-flex","-moz-box-ordinal-group","-moz-box-orient","-moz-box-pack","-moz-context-properties","-moz-float-edge","-moz-force-broken-image-icon","-moz-image-region","-moz-orient","-moz-osx-font-smoothing","-moz-outline-radius","-moz-outline-radius-bottomleft","-moz-outline-radius-bottomright","-moz-outline-radius-topleft","-moz-outline-radius-topright","-moz-stack-sizing","-moz-user-focus","-moz-user-input","-moz-user-modify","-moz-window-dragging","-moz-window-shadow","overflow-clip-box","overflow-clip-box-block","overflow-clip-box-inline","mask-repeat-x","mask-repeat-y","-webkit-border-after","-webkit-border-after-color","-webkit-border-after-style","-webkit-border-after-width","-webkit-border-before","-webkit-border-before-color","-webkit-border-before-style","-webkit-border-before-width","-webkit-border-end","-webkit-border-end-color","-webkit-border-end-style","-webkit-border-end-width","-webkit-border-start","-webkit-border-start-color","-webkit-border-start-style","-webkit-border-start-width","-webkit-box-align","-webkit-box-direction","-webkit-box-flex","-webkit-box-flex-group","-webkit-box-lines","-webkit-box-ordinal-group","-webkit-box-orient","-webkit-box-pack","-webkit-box-reflect","-webkit-margin-end","-webkit-margin-start","-webkit-padding-after","-webkit-padding-before","-webkit-padding-end","-webkit-padding-start","-webkit-animation-trigger","-webkit-aspect-ratio","-webkit-backdrop-filter","-webkit-border-fit","-webkit-border-horizontal-spacing","-webkit-border-vertical-spacing","-webkit-column-axis","-webkit-column-break-after","-webkit-column-break-before","-webkit-column-break-inside","-webkit-column-progression","-webkit-cursor-visibility","-webkit-dashboard-region","-webkit-font-size-delta","-webkit-font-smoothing","-webkit-highlight","-webkit-hyphenate-character","-webkit-hyphenate-limit-after","-webkit-hyphenate-limit-before","-webkit-hyphenate-limit-lines","-webkit-initial-letter","-webkit-line-align","-webkit-line-box-contain","-webkit-line-clamp","-webkit-line-grid","-webkit-line-snap","-webkit-locale","-webkit-logical-height","-webkit-logical-width","-webkit-margin-after","-webkit-margin-before","-webkit-marquee","-webkit-marquee-direction","-webkit-marquee-increment","-webkit-marquee-repetition","-webkit-marquee-speed","-webkit-marquee-style","-webkit-mask-box-image","-webkit-mask-box-image-outset","-webkit-mask-box-image-repeat","-webkit-mask-box-image-slice","-webkit-mask-box-image-source","-webkit-mask-box-image-width","-webkit-mask-position-x","-webkit-mask-position-y","-webkit-mask-source-type","-webkit-max-logical-height","-webkit-max-logical-width","-webkit-min-logical-height","-webkit-min-logical-width","-webkit-nbsp-mode","-webkit-perspective-origin-x","-webkit-perspective-origin-y","-webkit-rtl-ordering","-webkit-svg-shadow","-webkit-text-decoration-skip","-webkit-text-decorations-in-effect","-webkit-text-security","-webkit-text-stroke","-webkit-text-stroke-color","-webkit-text-stroke-width","-webkit-text-zoom","-webkit-transform-origin-x","-webkit-transform-origin-y","-webkit-transform-origin-z","-webkit-user-drag","-webkit-user-modify","-webkit-alt*","-webkit-background-composite","-webkit-border-fit","-webkit-color-correction","-webkit-flow-from","-webkit-flow-into","-webkit-grid-columns","-webkit-grid-rows","-webkit-hyphenate-charset","-webkit-image-set","-webkit-mask-attachment","-webkit-match-nearest-mail-blockquote-color","-webkit-margin-collapse","-webkit-margin-after-collapse","-webkit-margin-before-collapse","-webkit-margin-bottom-collapse","-webkit-margin-top-collapse","-webkit-overflow-scrolling","-webkit-region-break-after","-webkit-region-break-before","-webkit-region-break-inside","-webkit-region-fragment","-webkit-shape-inside","background-origin-x","background-origin-y","-webkit-appearance","-webkit-mask","-webkit-mask-image","-webkit-mask-size","-webkit-mask-repeat-x","-webkit-mask-repeat-y","-webkit-mask-origin","-webkit-backface-visibility","-webkit-text-combine-upright","-webkit-print-color-adjust","text-decoration-skip","-moz-outline-radius","-moz-outline-radius-bottomleft","-moz-outline-radius-bottomright","-moz-outline-radius-topleft","-moz-outline-radius-topright","-webkit-font-smoothing","-moz-osx-font-smoothing","font-smoothing","osx-font-smoothing","box-orient","zoom","color-adjust","word-wrap","page-break-inside","clip","scroll-start","scroll-start-x","scroll-start-y","-webkit-user-modify","-moz-user-modify","user-modify","-webkit-border-before","-webkit-border-before-color","-webkit-border-before-style","-webkit-border-before-width","-webkit-border-after","-webkit-border-after-color","-webkit-border-after-style","-webkit-border-after-width","-webkit-border-end","-webkit-border-end-color","-webkit-border-end-style","-webkit-border-end-width","-webkit-border-start","-webkit-border-start-color","-webkit-border-start-style","-webkit-border-start-width","-webkit-text-stroke","gap","row-gap","font-smooth","word-break"],"selector-disallowed-list":["div","span","/:nth(-last)?(-child|-of-type)\\([\\s]{0,}1?n[\\s]{0,}\\)/","head","link","meta","script","style","title","applet","acronym","bgsound","dir","frame","frameset","noframes","hgroup","isindex","listing","nextid","noembed","plaintext","rb","rtc","strike","xmp","basefont","big","blink","center","font","marquee","multicol","nobr","spacer","tt","keygen","menu","menuitem","[dropzone]","a[charset]","link[charset]","a[coords]","a[shape]","a[methods]","link[methods]","a[name]","option[name]","embed[name]","img[name]","a[rev]","link[rev]","a[urn]","link[urn]","form[accept]","head[profile]","html[version]","link[target]","param[type]","param[valuetype]","script[language]","script[event]","script[for]","table[datapagesize]","table[summary]","td[axis]","th[axis]","td[scope]","td[abbr]","a[datasrc]","applet[datasrc]","button[datasrc]","div[datasrc]","frame[datasrc]","label[datasrc]","legend[datasrc]","marquee[datasrc]","option[datasrc]","span[datasrc]","table[datasrc]","a[datafld]","applet[datafld]","button[datafld]","div[datafld]","fieldset[datafld]","frame[datafld]","label[datafld]","legend[datafld]","marquee[datafld]","param[datafld]","span[datafld]","button[dataformatas]","div[dataformatas]","label[dataformatas]","legend[dataformatas]","marquee[dataformatas]","option[dataformatas]","span[dataformatas]","table[dataformatas]","body[alink]","body[bgcolor]","table[bgcolor]","td[bgcolor]","th[bgcolor]","tr[bgcolor]","body[link]","body[marginbottom]","body[marginheight]","body[marginleft]","body[marginright]","body[margintop]","body[marginwidth]","body[text]","body[vlink]","col[char]","tbody[char]","thead[char]","tfoot[char]","td[char]","th[char]","tr[char]","col[charoff]","tbody[charoff]","thead[charoff]","tfoot[charoff]","td[charoff]","th[charoff]","tr[charoff]","col[valign]","tbody[valign]","thead[valign]","tfoot[valign]","td[valign]","th[valign]","tr[valign]","col[width]","pre[width]","table[width]","td[width]","th[width]","dl[compact]","ol[compact]","ul[compact]","h1[align]","h2[align]","h3[align]","h4[align]","h5[align]","h6[align]","caption[align]","col[align]","div[align]","legend[align]","p[align]","table[align]","tbody[align]","thead[align]","tfoot[align]","td[align]","th[align]","tr[align]","li[type]","ul[type]","table[cellpadding]","table[cellspacing]","table[frame]","table[rules]","td[height]","th[height]","td[nowrap]","th[nowrap]","body[background]","table[background]","thead[background]","tbody[background]","tfoot[background]","tr[background]","td[background]","th[background]","embed[name]","img[name]","area[nohref]","area[type]","area[hreflang]","input[ismap]","input[usemap]","iframe[longdesc]","img[longdesc]","img[lowsrc]","object[archive]","object[classid]","object[code]","object[codebase]","object[codetype]","object[declare]","object[standby]","iframe[datasrc]","img[datasrc]","input[datasrc]","object[datasrc]","select[datasrc]","textarea[datasrc]","iframe[datafld]","img[datafld]","input[datafld]","object[datafld]","select[datafld]","textarea[datafld]","input[dataformatas]","object[dataformatas]","select[dataformatas]","iframe[marginheight]","iframe[marginwidth]","br[clear]","hr[width]","embed[hspace]","iframe[hspace]","input[hspace]","img[hspace]","object[hspace]","embed[vspace]","iframe[vspace]","input[vspace]","img[vspace]","object[vspace]","hr[color]","hr[noshade]","hr[size]","iframe[align]","embed[align]","hr[align]","input[align]","img[align]","object[align]","iframe[allowtransparency]","iframe[frameborder]","iframe[framespacing]","iframe[scrolling]","img[border]","object[border]","input[inputmode]"],"selector-max-attribute":null,"selector-max-id":null,"selector-max-pseudo-class":null,"selector-max-type":null,"selector-max-universal":null,"selector-no-qualifying-type":null,"selector-pseudo-class-disallowed-list":["-webkit-any","-moz-any","any","matches","root","scope","modal","host","host-contex"],"selector-pseudo-element-allowed-list":["first-letter","first-line","file-selector-button","before","after","backdrop","placeholder","-moz-focus-inner","-webkit-search-decoration","-webkit-search-cancel-button","-webkit-search-results-button","-webkit-search-results-decoration","-webkit-scrollbar","-webkit-scrollbar-corner","-webkit-scrollbar-thumb","-webkit-scrollbar-track","-webkit-scrollbar-track-piece"],"selector-nested-pattern":["^&",{"splitList":true}],"time-min-milliseconds":75,"unit-disallowed-list":["cm","mm","Q","in","pc","pt","ex","ch","ic","cap","lh","rlh","s","grad","rad","turn","dpcm"],"font-weight-notation":["numeric",{"ignore":["relative"]}],"max-nesting-depth":[2,{"ignore":["pseudo-classes","blockless-at-rules"]}],"@stylistic/at-rule-name-case":"lower","@stylistic/at-rule-name-space-after":"always-single-line","@stylistic/at-rule-semicolon-newline-after":"always","@stylistic/block-closing-brace-empty-line-before":"never","@stylistic/block-closing-brace-newline-after":"always","@stylistic/block-closing-brace-newline-before":"always-multi-line","@stylistic/block-closing-brace-space-before":"always-single-line","@stylistic/block-opening-brace-newline-after":"always-multi-line","@stylistic/block-opening-brace-space-after":"always-single-line","@stylistic/block-opening-brace-space-before":"always","@stylistic/color-hex-case":"lower","@stylistic/declaration-bang-space-after":"never","@stylistic/declaration-bang-space-before":"always","@stylistic/declaration-block-semicolon-newline-after":"always-multi-line","@stylistic/declaration-block-semicolon-space-after":"always-single-line","@stylistic/declaration-block-semicolon-space-before":"never","@stylistic/declaration-block-trailing-semicolon":"always","@stylistic/declaration-colon-newline-after":"always-multi-line","@stylistic/declaration-colon-space-after":"always-single-line","@stylistic/declaration-colon-space-before":"never","@stylistic/function-comma-newline-after":"always-multi-line","@stylistic/function-comma-space-after":"always-single-line","@stylistic/function-comma-space-before":"never","@stylistic/function-max-empty-lines":0,"@stylistic/function-parentheses-newline-inside":"always-multi-line","@stylistic/function-parentheses-space-inside":"never-single-line","@stylistic/function-whitespace-after":"always","@stylistic/indentation":2,"@stylistic/max-empty-lines":1,"@stylistic/media-feature-colon-space-after":"always","@stylistic/media-feature-colon-space-before":"never","@stylistic/media-feature-name-case":"lower","@stylistic/media-feature-parentheses-space-inside":"never","@stylistic/media-feature-range-operator-space-after":"always","@stylistic/media-feature-range-operator-space-before":"always","@stylistic/media-query-list-comma-newline-after":"always-multi-line","@stylistic/media-query-list-comma-space-after":"always-single-line","@stylistic/media-query-list-comma-space-before":"never","@stylistic/no-empty-first-line":true,"@stylistic/no-eol-whitespace":true,"@stylistic/no-missing-end-of-source-newline":true,"@stylistic/number-leading-zero":"always","@stylistic/number-no-trailing-zeros":true,"@stylistic/property-case":"lower","@stylistic/selector-attribute-brackets-space-inside":"never","@stylistic/selector-attribute-operator-space-after":"never","@stylistic/selector-attribute-operator-space-before":"never","@stylistic/selector-combinator-space-after":"always","@stylistic/selector-combinator-space-before":"always","@stylistic/selector-descendant-combinator-no-non-space":true,"@stylistic/selector-list-comma-newline-after":"always","@stylistic/selector-list-comma-space-before":"never","@stylistic/selector-max-empty-lines":0,"@stylistic/selector-pseudo-class-case":"lower","@stylistic/selector-pseudo-class-parentheses-space-inside":"never","@stylistic/selector-pseudo-element-case":"lower","@stylistic/string-quotes":"double","@stylistic/unit-case":"lower","@stylistic/value-list-comma-newline-after":"always-multi-line","@stylistic/value-list-comma-space-after":"always-single-line","@stylistic/value-list-comma-space-before":"never","@stylistic/value-list-max-empty-lines":0,"@stylistic/at-rule-semicolon-space-before":"never","@stylistic/max-line-length":160,"@stylistic/named-grid-areas-alignment":true,"@stylistic/linebreaks":"unix","@stylistic/unicode-bom":"never","@stylistic/block-opening-brace-newline-before":"never-single-line","@stylistic/declaration-block-semicolon-newline-before":"never-multi-line","@stylistic/function-comma-newline-before":"never-multi-line","@stylistic/media-query-list-comma-newline-before":"never-multi-line","@stylistic/selector-list-comma-newline-before":"never-multi-line","@stylistic/selector-list-comma-space-after":"always-single-line","@stylistic/value-list-comma-newline-before":"never-multi-line","prettier/prettier":[true,{"printWidth":2000,"quoteProps":"preserve"}],"color-format/format":{"format":"rgb"},"matterialize/stylelint-require-units":[true,{"checkUnknownUnits":true}],"plugin/selector-pseudo-class-lvhfa":true,"plugin/stylelint-selector-no-empty":true,"plugin/stylelint-no-indistinguishable-colors":true,"plugin/declaration-block-no-ignored-properties":true,"pitcher/no-nested-media":true,"csstools/value-no-unknown-custom-properties":true,"plugin/no-low-performance-animation-properties":[true,{"ignoreProperties":["background-color","border-color","border-radius","box-shadow","color"]}],"order/order":[["dollar-variables","custom-properties","at-rules","declarations",{"name":"supports","type":"at-rule"},{"name":"media","type":"at-rule"},"rules"],{"severity":"warning"}],"order/properties-order":[["all","will-change","appearance","content","contain","contain-intrinsic-size","contain-intrinsic-block-size","contain-intrinsic-inline-size","contain-intrinsic-width","contain-intrinsic-height","container","container-name","container-type","position","inset","inset-block","inset-inline","top","right","bottom","left","inset-block-end","inset-block-start","inset-inline-end","inset-inline-start","z-index","display","content-visibility","vertical-align","flex","flex-grow","flex-shrink","flex-basis","flex-direction","flex-flow","flex-wrap","grid","grid-area","grid-template","grid-template-areas","grid-template-rows","grid-template-columns","grid-row","grid-row-start","grid-row-end","grid-column","grid-column-start","grid-column-end","grid-auto-rows","grid-auto-columns","grid-auto-flow","grid-gap","grid-row-gap","grid-column-gap","gap","row-gap","column-gap","place-content","align-content","justify-content","place-items","align-items","justify-items","place-self","align-self","justify-self","align-tracks","justify-tracks","order","float","clear","object-fit","object-position","scroll-behavior","overflow","overflow-x","overflow-y","overflow-block","overflow-inline","overflow-scrolling","overflow-anchor","overflow-clip-margin","overscroll-behavior","overscroll-behavior-x","overscroll-behavior-y","overscroll-behavior-block","overscroll-behavior-inline","box-sizing","block-size","min-block-size","max-block-size","inline-size","min-inline-size","max-inline-size","width","min-width","max-width","height","min-height","max-height","margin","margin-top","margin-right","margin-bottom","margin-left","margin-block","margin-block-end","margin-block-start","margin-inline","margin-inline-end","margin-inline-start","margin-trim","padding","padding-top","padding-right","padding-bottom","padding-left","padding-block","padding-block-end","padding-block-start","padding-inline","padding-inline-end","padding-inline-start","border","border-color","border-style","border-width","border-top","border-top-color","border-top-style","border-top-width","border-right","border-right-color","border-right-style","border-right-width","border-bottom","border-bottom-color","border-bottom-style","border-bottom-width","border-left","border-left-color","border-left-style","border-left-width","-webkit-border-before","-webkit-border-before-color","-webkit-border-before-style","-webkit-border-before-width","-webkit-border-after","-webkit-border-after-color","-webkit-border-after-style","-webkit-border-after-width","-webkit-border-end","-webkit-border-end-color","-webkit-border-end-style","-webkit-border-end-width","-webkit-border-start","-webkit-border-start-color","-webkit-border-start-style","-webkit-border-start-width","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-collapse","border-spacing","border-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius","border-top-left-radius","border-end-start-radius","border-end-end-radius","border-start-end-radius","border-start-start-radius","scroll-margin","scroll-margin-block","scroll-margin-inline","scroll-margin-top","scroll-margin-right","scroll-margin-bottom","scroll-margin-left","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-inline-end","scroll-margin-inline-start","scroll-padding","scroll-padding-block","scroll-padding-inline","scroll-padding-top","scroll-padding-right","scroll-padding-bottom","scroll-padding-left","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-inline-end","scroll-padding-inline-start","scroll-start","scroll-start-x","scroll-start-y","scroll-snap-align","scroll-snap-coordinate","scroll-snap-destination","scroll-snap-points-x","scroll-snap-points-y","scroll-snap-stop","scroll-snap-type","scroll-snap-type-x","scroll-snap-type-y","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","background","background-color","background-image","background-position","background-position-x","background-position-y","background-size","background-repeat","background-attachment","background-blend-mode","background-clip","background-origin","background-origin-x","background-origin-y","color","-webkit-text-fill-color","accent-color","caret-color","forced-color-adjust","-webkit-print-color-adjust","color-adjust","print-color-adjust","paint-order","fill","fill-opacity","fill-rule","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","stop-color","stop-opacity","flood-color","flood-opacity","marker","marker-end","marker-mid","marker-start","color-scheme","color-interpolation","color-interpolation-filters","color-profile","color-rendering","-webkit-tap-highlight-color","box-decoration-break","scrollbar-color","scrollbar-width","scrollbar-gutter","outline","outline-width","outline-style","outline-color","outline-offset","table-layout","caption-side","empty-cells","list-style","list-style-position","list-style-type","list-style-image","image-orientation","image-rendering","image-resolution","clip","clip-path","mask","mask-image","mask-position","mask-size","mask-repeat","mask-origin","mask-clip","mask-composite","mask-type","mask-mode","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","font","font-family","font-style","font-weight","font-stretch","font-size","line-height","line-height-step","line-break","font-variant","font-variant-alternates","font-variant-caps","font-variant-emoji","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-kerning","font-size-adjust","font-display","font-language-override","font-optical-sizing","font-synthesis","font-variation-settings","-moz-osx-font-smoothing","-webkit-font-smoothing","osx-font-smoothing","font-smoothing","font-smooth","src","font-palette","base-palette","override-colors","letter-spacing","initial-letter","initial-letter-align","quotes","hanging-punctuation","text-align","text-align-last","text-anchor","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-underline-offset","text-underline-position","text-emphasis","text-emphasis-position","text-emphasis-style","text-emphasis-color","text-indent","text-justify","text-outline","text-transform","text-wrap","text-overflow","text-overflow-ellipsis","text-overflow-mode","text-shadow","text-rendering","white-space","word-spacing","word-wrap","word-break","overflow-wrap","tab-size","interpolation-mode","hyphens","-webkit-hyphenate-charset","-webkit-hyphenate-character","-webkit-hyphenate-limit-after","-webkit-hyphenate-limit-before","-webkit-hyphenate-limit-lines","hyphenate-character","hyphenate-limit-chars","counter-set","counter-reset","counter-increment","math-depth","math-shift","math-style","ruby-align","ruby-merge","ruby-position","opacity","visibility","box-shadow","filter","backdrop-filter","mix-blend-mode","resize","cursor","pointer-events","touch-action","user-select","-webkit-user-modify","-moz-user-modify","user-modify","unicode-bidi","direction","-ms-writing-mode","writing-mode","columns","column-span","column-width","column-count","column-fill","column-gap","column-rule","column-rule-width","column-rule-style","column-rule-color","break-before","break-inside","break-after","page-break-before","page-break-inside","page-break-after","orphans","widows","zoom","max-zoom","min-zoom","user-zoom","orientation","transition","transition-delay","transition-timing-function","transition-duration","transition-property","view-transition-name","rotate","scale","translate","backface-visibility","perspective","perspective-origin","transform","transform-origin","-webkit-transform-origin-x","-webkit-transform-origin-y","-webkit-transform-origin-z","transform-box","transform-style","animation","animation-name","animation-duration","animation-play-state","animation-timing-function","animation-delay","animation-iteration-count","animation-direction","animation-fill-mode","animation-composition","animation-timeline","offset","offset-position","offset-path","offset-distance","offset-rotate","offset-anchor"],{"severity":"warning","unspecified":"bottom"}],"csstree/validator":{"ignoreValue":"env\\(","syntaxExtensions":false},"plugin/no-unsupported-browser-features":[true,{"ignore":["alternate-stylesheet","background-attachment","background-clip-text","background-position-x-y","border-image","border-radius","calc","ch-unit","css-all","css-animation","css-appearance","css-at-counter-style","css-autofill","css-backdrop-filter","css-background-offsets","css-backgroundblendmode","css-boxdecorationbreak","css-boxshadow","css-canvas","css-caret-color","css-cascade-layers","css-case-insensitive","css-clip-path","css-color-adjust","css-color-function","css-conic-gradients","css-containment","css-content-visibility","css-crisp-edges","css-cross-fade","css-default-pseudo","css-descendant-gtgt","css-deviceadaptation","css-display-contents","css-element-function","css-env-function","css-exclusions","css-file-selector-button","css-filter-function","css-filters","css-first-letter","css-first-line","css-fixed","css-focus-visible","css-focus-within","css-font-palette","css-font-rendering-controls","css-font-stretch","css-gradients","css-grid","css-hanging-punctuation","css-has","css-hyphens","css-image-orientation","css-image-set","css-in-out-of-range","css-indeterminate-pseudo","css-initial-letter","css-initial-value","css-letter-spacing","css-line-clamp","css-logical-props","css-marker-pseudo","css-masks","css-matches-pseudo","css-media-interaction","css-media-range-syntax","css-media-resolution","css-mediaqueries","css-nesting","css-not-sel-list","css-nth-child-of","css-opacity","css-optional-pseudo","css-overflow","css-overscroll-behavior","css-page-break","css-paged-media","css-paint-api","css-placeholder","css-placeholder-shown","css-print-color-adjust","css-read-only-write","css-rebeccapurple","css-reflections","css-regions","css-relative-colors","css-repeating-gradients","css-resize","css-revert-value","css-scroll-behavior","css-scrollbar","css-sel2","css-sel3","css-snappoints","css-sticky","css-subgrid","css-supports-api","css-table","css-text-align-last","css-text-box-trim","css-text-indent","css-text-justify","css-text-orientation","css-text-spacing","css-textshadow","css-touch-action","css-transitions","css-unicode-bidi","css-unset-value","css-variables","css-when-else","css-widows-orphans","css-width-stretch","css-writing-mode","css-zoom","css3-attr","css3-boxsizing","css3-colors","css3-cursors","css3-tabsize","currentcolor","devicepixelratio","extended-system-fonts","flexbox","font-family-system-ui","font-feature","font-kerning","font-loading","font-size-adjust","font-smooth","font-unicode-range","font-variant-alternates","font-variant-numeric","fontface","fullscreen","getcomputedstyle","inline-block","intrinsic-width","justify-content-space-evenly","kerning-pairs-ligatures","mdn-css-unicode-bidi-isolate","mdn-css-unicode-bidi-isolate-override","mdn-css-unicode-bidi-plaintext","mdn-text-decoration-color","mdn-text-decoration-line","mdn-text-decoration-shorthand","mdn-text-decoration-style","minmaxwh","multibackgrounds","multicolumn","object-fit","outline","pointer","pointer-events","prefers-color-scheme","prefers-reduced-motion","rem","run-in","style-scoped","svg-css","text-decoration","text-emphasis","text-overflow","text-size-adjust","text-stroke","transforms2d","transforms3d","ttf","user-select-none","variable-fonts","viewport-units","webkit-user-drag","will-change","word-break","wordwrap"],"ignorePartialSupport":false}],"a11y/font-size-is-readable":true,"a11y/no-spread-text":true,"no-descending-specificity":null,"selector-class-pattern":null,"selector-id-pattern":null}}