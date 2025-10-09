(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	7856,
	(e) => {
		'use strict';
		e.s(['default', () => td], 7856);
		var t,
			n,
			r = e.i(4601);
		let {
				entries: i,
				setPrototypeOf: l,
				isFrozen: s,
				getPrototypeOf: a,
				getOwnPropertyDescriptor: o,
			} = Object,
			{ freeze: c, seal: p, create: u } = Object,
			{ apply: h, construct: d } = 'undefined' != typeof Reflect && Reflect;
		(c ||
			(c = function (e) {
				return e;
			}),
			p ||
				(p = function (e) {
					return e;
				}),
			h ||
				(h = function (e, t) {
					for (
						var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
						i < n;
						i++
					)
						r[i - 2] = arguments[i];
					return e.apply(t, r);
				}),
			d ||
				(d = function (e) {
					for (
						var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
						r < t;
						r++
					)
						n[r - 1] = arguments[r];
					return new e(...n);
				}));
		let f = E(Array.prototype.forEach),
			g = E(Array.prototype.lastIndexOf),
			m = E(Array.prototype.pop),
			k = E(Array.prototype.push),
			x = E(Array.prototype.splice),
			b = E(String.prototype.toLowerCase),
			w = E(String.prototype.toString),
			y = E(String.prototype.match),
			T = E(String.prototype.replace),
			S = E(String.prototype.indexOf),
			A = E(String.prototype.trim),
			_ = E(Object.prototype.hasOwnProperty),
			v = E(RegExp.prototype.test),
			R =
				((t = TypeError),
				function () {
					for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
						n[r] = arguments[r];
					return d(t, n);
				});
		function E(e) {
			return function (t) {
				t instanceof RegExp && (t.lastIndex = 0);
				for (
					var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
					i < n;
					i++
				)
					r[i - 1] = arguments[i];
				return h(e, t, r);
			};
		}
		function N(e, t) {
			let n =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
			l && l(e, null);
			let r = t.length;
			for (; r--; ) {
				let i = t[r];
				if ('string' == typeof i) {
					let e = n(i);
					e !== i && (s(t) || (t[r] = e), (i = e));
				}
				e[i] = !0;
			}
			return e;
		}
		function L(e) {
			let t = u(null);
			for (let [n, r] of i(e))
				_(e, n) &&
					(Array.isArray(r)
						? (t[n] = (function (e) {
								for (let t = 0; t < e.length; t++) _(e, t) || (e[t] = null);
								return e;
							})(r))
						: r && 'object' == typeof r && r.constructor === Object
							? (t[n] = L(r))
							: (t[n] = r));
			return t;
		}
		function I(e, t) {
			for (; null !== e; ) {
				let n = o(e, t);
				if (n) {
					if (n.get) return E(n.get);
					if ('function' == typeof n.value) return E(n.value);
				}
				e = a(e);
			}
			return function () {
				return null;
			};
		}
		let C = c([
				'a',
				'abbr',
				'acronym',
				'address',
				'area',
				'article',
				'aside',
				'audio',
				'b',
				'bdi',
				'bdo',
				'big',
				'blink',
				'blockquote',
				'body',
				'br',
				'button',
				'canvas',
				'caption',
				'center',
				'cite',
				'code',
				'col',
				'colgroup',
				'content',
				'data',
				'datalist',
				'dd',
				'decorator',
				'del',
				'details',
				'dfn',
				'dialog',
				'dir',
				'div',
				'dl',
				'dt',
				'element',
				'em',
				'fieldset',
				'figcaption',
				'figure',
				'font',
				'footer',
				'form',
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'head',
				'header',
				'hgroup',
				'hr',
				'html',
				'i',
				'img',
				'input',
				'ins',
				'kbd',
				'label',
				'legend',
				'li',
				'main',
				'map',
				'mark',
				'marquee',
				'menu',
				'menuitem',
				'meter',
				'nav',
				'nobr',
				'ol',
				'optgroup',
				'option',
				'output',
				'p',
				'picture',
				'pre',
				'progress',
				'q',
				'rp',
				'rt',
				'ruby',
				's',
				'samp',
				'search',
				'section',
				'select',
				'shadow',
				'slot',
				'small',
				'source',
				'spacer',
				'span',
				'strike',
				'strong',
				'style',
				'sub',
				'summary',
				'sup',
				'table',
				'tbody',
				'td',
				'template',
				'textarea',
				'tfoot',
				'th',
				'thead',
				'time',
				'tr',
				'track',
				'tt',
				'u',
				'ul',
				'var',
				'video',
				'wbr',
			]),
			z = c([
				'svg',
				'a',
				'altglyph',
				'altglyphdef',
				'altglyphitem',
				'animatecolor',
				'animatemotion',
				'animatetransform',
				'circle',
				'clippath',
				'defs',
				'desc',
				'ellipse',
				'enterkeyhint',
				'exportparts',
				'filter',
				'font',
				'g',
				'glyph',
				'glyphref',
				'hkern',
				'image',
				'inputmode',
				'line',
				'lineargradient',
				'marker',
				'mask',
				'metadata',
				'mpath',
				'part',
				'path',
				'pattern',
				'polygon',
				'polyline',
				'radialgradient',
				'rect',
				'slot',
				'stop',
				'style',
				'switch',
				'symbol',
				'text',
				'textpath',
				'title',
				'tref',
				'tspan',
				'view',
				'vkern',
			]),
			O = c([
				'feBlend',
				'feColorMatrix',
				'feComponentTransfer',
				'feComposite',
				'feConvolveMatrix',
				'feDiffuseLighting',
				'feDisplacementMap',
				'feDistantLight',
				'feDropShadow',
				'feFlood',
				'feFuncA',
				'feFuncB',
				'feFuncG',
				'feFuncR',
				'feGaussianBlur',
				'feImage',
				'feMerge',
				'feMergeNode',
				'feMorphology',
				'feOffset',
				'fePointLight',
				'feSpecularLighting',
				'feSpotLight',
				'feTile',
				'feTurbulence',
			]),
			D = c([
				'animate',
				'color-profile',
				'cursor',
				'discard',
				'font-face',
				'font-face-format',
				'font-face-name',
				'font-face-src',
				'font-face-uri',
				'foreignobject',
				'hatch',
				'hatchpath',
				'mesh',
				'meshgradient',
				'meshpatch',
				'meshrow',
				'missing-glyph',
				'script',
				'set',
				'solidcolor',
				'unknown',
				'use',
			]),
			M = c([
				'math',
				'menclose',
				'merror',
				'mfenced',
				'mfrac',
				'mglyph',
				'mi',
				'mlabeledtr',
				'mmultiscripts',
				'mn',
				'mo',
				'mover',
				'mpadded',
				'mphantom',
				'mroot',
				'mrow',
				'ms',
				'mspace',
				'msqrt',
				'mstyle',
				'msub',
				'msup',
				'msubsup',
				'mtable',
				'mtd',
				'mtext',
				'mtr',
				'munder',
				'munderover',
				'mprescripts',
			]),
			P = c([
				'maction',
				'maligngroup',
				'malignmark',
				'mlongdiv',
				'mscarries',
				'mscarry',
				'msgroup',
				'mstack',
				'msline',
				'msrow',
				'semantics',
				'annotation',
				'annotation-xml',
				'mprescripts',
				'none',
			]),
			$ = c(['#text']),
			B = c([
				'accept',
				'action',
				'align',
				'alt',
				'autocapitalize',
				'autocomplete',
				'autopictureinpicture',
				'autoplay',
				'background',
				'bgcolor',
				'border',
				'capture',
				'cellpadding',
				'cellspacing',
				'checked',
				'cite',
				'class',
				'clear',
				'color',
				'cols',
				'colspan',
				'controls',
				'controlslist',
				'coords',
				'crossorigin',
				'datetime',
				'decoding',
				'default',
				'dir',
				'disabled',
				'disablepictureinpicture',
				'disableremoteplayback',
				'download',
				'draggable',
				'enctype',
				'enterkeyhint',
				'exportparts',
				'face',
				'for',
				'headers',
				'height',
				'hidden',
				'high',
				'href',
				'hreflang',
				'id',
				'inert',
				'inputmode',
				'integrity',
				'ismap',
				'kind',
				'label',
				'lang',
				'list',
				'loading',
				'loop',
				'low',
				'max',
				'maxlength',
				'media',
				'method',
				'min',
				'minlength',
				'multiple',
				'muted',
				'name',
				'nonce',
				'noshade',
				'novalidate',
				'nowrap',
				'open',
				'optimum',
				'part',
				'pattern',
				'placeholder',
				'playsinline',
				'popover',
				'popovertarget',
				'popovertargetaction',
				'poster',
				'preload',
				'pubdate',
				'radiogroup',
				'readonly',
				'rel',
				'required',
				'rev',
				'reversed',
				'role',
				'rows',
				'rowspan',
				'spellcheck',
				'scope',
				'selected',
				'shape',
				'size',
				'sizes',
				'slot',
				'span',
				'srclang',
				'start',
				'src',
				'srcset',
				'step',
				'style',
				'summary',
				'tabindex',
				'title',
				'translate',
				'type',
				'usemap',
				'valign',
				'value',
				'width',
				'wrap',
				'xmlns',
				'slot',
			]),
			U = c([
				'accent-height',
				'accumulate',
				'additive',
				'alignment-baseline',
				'amplitude',
				'ascent',
				'attributename',
				'attributetype',
				'azimuth',
				'basefrequency',
				'baseline-shift',
				'begin',
				'bias',
				'by',
				'class',
				'clip',
				'clippathunits',
				'clip-path',
				'clip-rule',
				'color',
				'color-interpolation',
				'color-interpolation-filters',
				'color-profile',
				'color-rendering',
				'cx',
				'cy',
				'd',
				'dx',
				'dy',
				'diffuseconstant',
				'direction',
				'display',
				'divisor',
				'dur',
				'edgemode',
				'elevation',
				'end',
				'exponent',
				'fill',
				'fill-opacity',
				'fill-rule',
				'filter',
				'filterunits',
				'flood-color',
				'flood-opacity',
				'font-family',
				'font-size',
				'font-size-adjust',
				'font-stretch',
				'font-style',
				'font-variant',
				'font-weight',
				'fx',
				'fy',
				'g1',
				'g2',
				'glyph-name',
				'glyphref',
				'gradientunits',
				'gradienttransform',
				'height',
				'href',
				'id',
				'image-rendering',
				'in',
				'in2',
				'intercept',
				'k',
				'k1',
				'k2',
				'k3',
				'k4',
				'kerning',
				'keypoints',
				'keysplines',
				'keytimes',
				'lang',
				'lengthadjust',
				'letter-spacing',
				'kernelmatrix',
				'kernelunitlength',
				'lighting-color',
				'local',
				'marker-end',
				'marker-mid',
				'marker-start',
				'markerheight',
				'markerunits',
				'markerwidth',
				'maskcontentunits',
				'maskunits',
				'max',
				'mask',
				'media',
				'method',
				'mode',
				'min',
				'name',
				'numoctaves',
				'offset',
				'operator',
				'opacity',
				'order',
				'orient',
				'orientation',
				'origin',
				'overflow',
				'paint-order',
				'path',
				'pathlength',
				'patterncontentunits',
				'patterntransform',
				'patternunits',
				'points',
				'preservealpha',
				'preserveaspectratio',
				'primitiveunits',
				'r',
				'rx',
				'ry',
				'radius',
				'refx',
				'refy',
				'repeatcount',
				'repeatdur',
				'restart',
				'result',
				'rotate',
				'scale',
				'seed',
				'shape-rendering',
				'slope',
				'specularconstant',
				'specularexponent',
				'spreadmethod',
				'startoffset',
				'stddeviation',
				'stitchtiles',
				'stop-color',
				'stop-opacity',
				'stroke-dasharray',
				'stroke-dashoffset',
				'stroke-linecap',
				'stroke-linejoin',
				'stroke-miterlimit',
				'stroke-opacity',
				'stroke',
				'stroke-width',
				'style',
				'surfacescale',
				'systemlanguage',
				'tabindex',
				'tablevalues',
				'targetx',
				'targety',
				'transform',
				'transform-origin',
				'text-anchor',
				'text-decoration',
				'text-rendering',
				'textlength',
				'type',
				'u1',
				'u2',
				'unicode',
				'values',
				'viewbox',
				'visibility',
				'version',
				'vert-adv-y',
				'vert-origin-x',
				'vert-origin-y',
				'width',
				'word-spacing',
				'wrap',
				'writing-mode',
				'xchannelselector',
				'ychannelselector',
				'x',
				'x1',
				'x2',
				'xmlns',
				'y',
				'y1',
				'y2',
				'z',
				'zoomandpan',
			]),
			H = c([
				'accent',
				'accentunder',
				'align',
				'bevelled',
				'close',
				'columnsalign',
				'columnlines',
				'columnspan',
				'denomalign',
				'depth',
				'dir',
				'display',
				'displaystyle',
				'encoding',
				'fence',
				'frame',
				'height',
				'href',
				'id',
				'largeop',
				'length',
				'linethickness',
				'lspace',
				'lquote',
				'mathbackground',
				'mathcolor',
				'mathsize',
				'mathvariant',
				'maxsize',
				'minsize',
				'movablelimits',
				'notation',
				'numalign',
				'open',
				'rowalign',
				'rowlines',
				'rowspacing',
				'rowspan',
				'rspace',
				'rquote',
				'scriptlevel',
				'scriptminsize',
				'scriptsizemultiplier',
				'selection',
				'separator',
				'separators',
				'stretchy',
				'subscriptshift',
				'supscriptshift',
				'symmetric',
				'voffset',
				'width',
				'xmlns',
			]),
			j = c([
				'xlink:href',
				'xml:id',
				'xlink:title',
				'xml:space',
				'xmlns:xlink',
			]),
			F = p(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
			q = p(/<%[\w\W]*|[\w\W]*%>/gm),
			G = p(/\$\{[\w\W]*/gm),
			W = p(/^data-[\-\w.\u00B7-\uFFFF]+$/),
			Z = p(/^aria-[\-\w]+$/),
			Y = p(
				/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
			),
			X = p(/^(?:\w+script|data):/i),
			Q = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
			K = p(/^html$/i);
		var V = Object.freeze({
			__proto__: null,
			ARIA_ATTR: Z,
			ATTR_WHITESPACE: Q,
			CUSTOM_ELEMENT: p(/^[a-z][.\w]*(-[.\w]+)+$/i),
			DATA_ATTR: W,
			DOCTYPE_NAME: K,
			ERB_EXPR: q,
			IS_ALLOWED_URI: Y,
			IS_SCRIPT_OR_DATA: X,
			MUSTACHE_EXPR: F,
			TMPLIT_EXPR: G,
		});
		let J = {
				element: 1,
				text: 3,
				progressingInstruction: 7,
				comment: 8,
				document: 9,
			},
			ee = function (e, t) {
				if ('object' != typeof e || 'function' != typeof e.createPolicy)
					return null;
				let n = null,
					r = 'data-tt-policy-suffix';
				t && t.hasAttribute(r) && (n = t.getAttribute(r));
				let i = 'dompurify' + (n ? '#' + n : '');
				try {
					return e.createPolicy(i, {
						createHTML: (e) => e,
						createScriptURL: (e) => e,
					});
				} catch (e) {
					return (
						console.warn('TrustedTypes policy ' + i + ' could not be created.'),
						null
					);
				}
			},
			et = function () {
				return {
					afterSanitizeAttributes: [],
					afterSanitizeElements: [],
					afterSanitizeShadowDOM: [],
					beforeSanitizeAttributes: [],
					beforeSanitizeElements: [],
					beforeSanitizeShadowDOM: [],
					uponSanitizeAttribute: [],
					uponSanitizeElement: [],
					uponSanitizeShadowNode: [],
				};
			};
		var en = (function e() {
				let t,
					n =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: 'undefined' == typeof window
								? null
								: window,
					r = (t) => e(t);
				if (
					((r.version = '3.2.7'),
					(r.removed = []),
					!n || !n.document || n.document.nodeType !== J.document || !n.Element)
				)
					return ((r.isSupported = !1), r);
				let { document: l } = n,
					s = l,
					a = s.currentScript,
					{
						DocumentFragment: o,
						HTMLTemplateElement: p,
						Node: h,
						Element: d,
						NodeFilter: E,
						NamedNodeMap: F = n.NamedNodeMap || n.MozNamedAttrMap,
						HTMLFormElement: q,
						DOMParser: G,
						trustedTypes: W,
					} = n,
					Z = d.prototype,
					X = I(Z, 'cloneNode'),
					Q = I(Z, 'remove'),
					en = I(Z, 'nextSibling'),
					er = I(Z, 'childNodes'),
					ei = I(Z, 'parentNode');
				if ('function' == typeof p) {
					let e = l.createElement('template');
					e.content && e.content.ownerDocument && (l = e.content.ownerDocument);
				}
				let el = '',
					{
						implementation: es,
						createNodeIterator: ea,
						createDocumentFragment: eo,
						getElementsByTagName: ec,
					} = l,
					{ importNode: ep } = s,
					eu = et();
				r.isSupported =
					'function' == typeof i &&
					'function' == typeof ei &&
					es &&
					void 0 !== es.createHTMLDocument;
				let {
						MUSTACHE_EXPR: eh,
						ERB_EXPR: ed,
						TMPLIT_EXPR: ef,
						DATA_ATTR: eg,
						ARIA_ATTR: em,
						IS_SCRIPT_OR_DATA: ek,
						ATTR_WHITESPACE: ex,
						CUSTOM_ELEMENT: eb,
					} = V,
					{ IS_ALLOWED_URI: ew } = V,
					ey = null,
					eT = N({}, [...C, ...z, ...O, ...M, ...$]),
					eS = null,
					eA = N({}, [...B, ...U, ...H, ...j]),
					e_ = Object.seal(
						u(null, {
							tagNameCheck: {
								writable: !0,
								configurable: !1,
								enumerable: !0,
								value: null,
							},
							attributeNameCheck: {
								writable: !0,
								configurable: !1,
								enumerable: !0,
								value: null,
							},
							allowCustomizedBuiltInElements: {
								writable: !0,
								configurable: !1,
								enumerable: !0,
								value: !1,
							},
						}),
					),
					ev = null,
					eR = null,
					eE = !0,
					eN = !0,
					eL = !1,
					eI = !0,
					eC = !1,
					ez = !0,
					eO = !1,
					eD = !1,
					eM = !1,
					eP = !1,
					e$ = !1,
					eB = !1,
					eU = !0,
					eH = !1,
					ej = !0,
					eF = !1,
					eq = {},
					eG = null,
					eW = N({}, [
						'annotation-xml',
						'audio',
						'colgroup',
						'desc',
						'foreignobject',
						'head',
						'iframe',
						'math',
						'mi',
						'mn',
						'mo',
						'ms',
						'mtext',
						'noembed',
						'noframes',
						'noscript',
						'plaintext',
						'script',
						'style',
						'svg',
						'template',
						'thead',
						'title',
						'video',
						'xmp',
					]),
					eZ = null,
					eY = N({}, ['audio', 'video', 'img', 'source', 'image', 'track']),
					eX = null,
					eQ = N({}, [
						'alt',
						'class',
						'for',
						'id',
						'label',
						'name',
						'pattern',
						'placeholder',
						'role',
						'summary',
						'title',
						'value',
						'style',
						'xmlns',
					]),
					eK = 'http://www.w3.org/1998/Math/MathML',
					eV = 'http://www.w3.org/2000/svg',
					eJ = 'http://www.w3.org/1999/xhtml',
					e0 = eJ,
					e1 = !1,
					e3 = null,
					e2 = N({}, [eK, eV, eJ], w),
					e9 = N({}, ['mi', 'mo', 'mn', 'ms', 'mtext']),
					e6 = N({}, ['annotation-xml']),
					e4 = N({}, ['title', 'style', 'font', 'a', 'script']),
					e8 = null,
					e5 = ['application/xhtml+xml', 'text/html'],
					e7 = null,
					te = null,
					tt = l.createElement('form'),
					tn = function (e) {
						return e instanceof RegExp || e instanceof Function;
					},
					tr = function () {
						let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
						if (!te || te !== e) {
							if (
								((e && 'object' == typeof e) || (e = {}),
								(e = L(e)),
								(e7 =
									'application/xhtml+xml' ===
									(e8 =
										-1 === e5.indexOf(e.PARSER_MEDIA_TYPE)
											? 'text/html'
											: e.PARSER_MEDIA_TYPE)
										? w
										: b),
								(ey = _(e, 'ALLOWED_TAGS') ? N({}, e.ALLOWED_TAGS, e7) : eT),
								(eS = _(e, 'ALLOWED_ATTR') ? N({}, e.ALLOWED_ATTR, e7) : eA),
								(e3 = _(e, 'ALLOWED_NAMESPACES')
									? N({}, e.ALLOWED_NAMESPACES, w)
									: e2),
								(eX = _(e, 'ADD_URI_SAFE_ATTR')
									? N(L(eQ), e.ADD_URI_SAFE_ATTR, e7)
									: eQ),
								(eZ = _(e, 'ADD_DATA_URI_TAGS')
									? N(L(eY), e.ADD_DATA_URI_TAGS, e7)
									: eY),
								(eG = _(e, 'FORBID_CONTENTS')
									? N({}, e.FORBID_CONTENTS, e7)
									: eW),
								(ev = _(e, 'FORBID_TAGS') ? N({}, e.FORBID_TAGS, e7) : L({})),
								(eR = _(e, 'FORBID_ATTR') ? N({}, e.FORBID_ATTR, e7) : L({})),
								(eq = !!_(e, 'USE_PROFILES') && e.USE_PROFILES),
								(eE = !1 !== e.ALLOW_ARIA_ATTR),
								(eN = !1 !== e.ALLOW_DATA_ATTR),
								(eL = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
								(eI = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
								(eC = e.SAFE_FOR_TEMPLATES || !1),
								(ez = !1 !== e.SAFE_FOR_XML),
								(eO = e.WHOLE_DOCUMENT || !1),
								(eP = e.RETURN_DOM || !1),
								(e$ = e.RETURN_DOM_FRAGMENT || !1),
								(eB = e.RETURN_TRUSTED_TYPE || !1),
								(eM = e.FORCE_BODY || !1),
								(eU = !1 !== e.SANITIZE_DOM),
								(eH = e.SANITIZE_NAMED_PROPS || !1),
								(ej = !1 !== e.KEEP_CONTENT),
								(eF = e.IN_PLACE || !1),
								(ew = e.ALLOWED_URI_REGEXP || Y),
								(e0 = e.NAMESPACE || eJ),
								(e9 = e.MATHML_TEXT_INTEGRATION_POINTS || e9),
								(e6 = e.HTML_INTEGRATION_POINTS || e6),
								(e_ = e.CUSTOM_ELEMENT_HANDLING || {}),
								e.CUSTOM_ELEMENT_HANDLING &&
									tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
									(e_.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
								e.CUSTOM_ELEMENT_HANDLING &&
									tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
									(e_.attributeNameCheck =
										e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
								e.CUSTOM_ELEMENT_HANDLING &&
									'boolean' ==
										typeof e.CUSTOM_ELEMENT_HANDLING
											.allowCustomizedBuiltInElements &&
									(e_.allowCustomizedBuiltInElements =
										e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
								eC && (eN = !1),
								e$ && (eP = !0),
								eq &&
									((ey = N({}, $)),
									(eS = []),
									!0 === eq.html && (N(ey, C), N(eS, B)),
									!0 === eq.svg && (N(ey, z), N(eS, U), N(eS, j)),
									!0 === eq.svgFilters && (N(ey, O), N(eS, U), N(eS, j)),
									!0 === eq.mathMl && (N(ey, M), N(eS, H), N(eS, j))),
								e.ADD_TAGS &&
									(ey === eT && (ey = L(ey)), N(ey, e.ADD_TAGS, e7)),
								e.ADD_ATTR &&
									(eS === eA && (eS = L(eS)), N(eS, e.ADD_ATTR, e7)),
								e.ADD_URI_SAFE_ATTR && N(eX, e.ADD_URI_SAFE_ATTR, e7),
								e.FORBID_CONTENTS &&
									(eG === eW && (eG = L(eG)), N(eG, e.FORBID_CONTENTS, e7)),
								ej && (ey['#text'] = !0),
								eO && N(ey, ['html', 'head', 'body']),
								ey.table && (N(ey, ['tbody']), delete ev.tbody),
								e.TRUSTED_TYPES_POLICY)
							) {
								if ('function' != typeof e.TRUSTED_TYPES_POLICY.createHTML)
									throw R(
										'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
									);
								if ('function' != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
									throw R(
										'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
									);
								el = (t = e.TRUSTED_TYPES_POLICY).createHTML('');
							} else
								(void 0 === t && (t = ee(W, a)),
									null !== t &&
										'string' == typeof el &&
										(el = t.createHTML('')));
							(c && c(e), (te = e));
						}
					},
					ti = N({}, [...z, ...O, ...D]),
					tl = N({}, [...M, ...P]),
					ts = function (e) {
						let t = ei(e);
						(t && t.tagName) || (t = { namespaceURI: e0, tagName: 'template' });
						let n = b(e.tagName),
							r = b(t.tagName);
						return (
							!!e3[e.namespaceURI] &&
							(e.namespaceURI === eV
								? t.namespaceURI === eJ
									? 'svg' === n
									: t.namespaceURI === eK
										? 'svg' === n && ('annotation-xml' === r || e9[r])
										: !!ti[n]
								: e.namespaceURI === eK
									? t.namespaceURI === eJ
										? 'math' === n
										: t.namespaceURI === eV
											? 'math' === n && e6[r]
											: !!tl[n]
									: e.namespaceURI === eJ
										? (t.namespaceURI !== eV || !!e6[r]) &&
											(t.namespaceURI !== eK || !!e9[r]) &&
											!tl[n] &&
											(e4[n] || !ti[n])
										: 'application/xhtml+xml' === e8 && !!e3[e.namespaceURI])
						);
					},
					ta = function (e) {
						k(r.removed, { element: e });
						try {
							ei(e).removeChild(e);
						} catch (t) {
							Q(e);
						}
					},
					to = function (e, t) {
						try {
							k(r.removed, { attribute: t.getAttributeNode(e), from: t });
						} catch (e) {
							k(r.removed, { attribute: null, from: t });
						}
						if ((t.removeAttribute(e), 'is' === e))
							if (eP || e$)
								try {
									ta(t);
								} catch (e) {}
							else
								try {
									t.setAttribute(e, '');
								} catch (e) {}
					},
					tc = function (e) {
						let n = null,
							r = null;
						if (eM) e = '<remove></remove>' + e;
						else {
							let t = y(e, /^[\r\n\t ]+/);
							r = t && t[0];
						}
						'application/xhtml+xml' === e8 &&
							e0 === eJ &&
							(e =
								'<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
								e +
								'</body></html>');
						let i = t ? t.createHTML(e) : e;
						if (e0 === eJ)
							try {
								n = new G().parseFromString(i, e8);
							} catch (e) {}
						if (!n || !n.documentElement) {
							n = es.createDocument(e0, 'template', null);
							try {
								n.documentElement.innerHTML = e1 ? el : i;
							} catch (e) {}
						}
						let s = n.body || n.documentElement;
						return (e &&
							r &&
							s.insertBefore(l.createTextNode(r), s.childNodes[0] || null),
						e0 === eJ)
							? ec.call(n, eO ? 'html' : 'body')[0]
							: eO
								? n.documentElement
								: s;
					},
					tp = function (e) {
						return ea.call(
							e.ownerDocument || e,
							e,
							E.SHOW_ELEMENT |
								E.SHOW_COMMENT |
								E.SHOW_TEXT |
								E.SHOW_PROCESSING_INSTRUCTION |
								E.SHOW_CDATA_SECTION,
							null,
						);
					},
					tu = function (e) {
						return (
							e instanceof q &&
							('string' != typeof e.nodeName ||
								'string' != typeof e.textContent ||
								'function' != typeof e.removeChild ||
								!(e.attributes instanceof F) ||
								'function' != typeof e.removeAttribute ||
								'function' != typeof e.setAttribute ||
								'string' != typeof e.namespaceURI ||
								'function' != typeof e.insertBefore ||
								'function' != typeof e.hasChildNodes)
						);
					},
					th = function (e) {
						return 'function' == typeof h && e instanceof h;
					};
				function td(e, t, n) {
					f(e, (e) => {
						e.call(r, t, n, te);
					});
				}
				let tf = function (e) {
						let t = null;
						if ((td(eu.beforeSanitizeElements, e, null), tu(e)))
							return (ta(e), !0);
						let n = e7(e.nodeName);
						if (
							(td(eu.uponSanitizeElement, e, { tagName: n, allowedTags: ey }),
							(ez &&
								e.hasChildNodes() &&
								!th(e.firstElementChild) &&
								v(/<[/\w!]/g, e.innerHTML) &&
								v(/<[/\w!]/g, e.textContent)) ||
								e.nodeType === J.progressingInstruction ||
								(ez && e.nodeType === J.comment && v(/<[/\w]/g, e.data)))
						)
							return (ta(e), !0);
						if (!ey[n] || ev[n]) {
							if (
								!ev[n] &&
								tm(n) &&
								((e_.tagNameCheck instanceof RegExp && v(e_.tagNameCheck, n)) ||
									(e_.tagNameCheck instanceof Function && e_.tagNameCheck(n)))
							)
								return !1;
							if (ej && !eG[n]) {
								let t = ei(e) || e.parentNode,
									n = er(e) || e.childNodes;
								if (n && t) {
									let r = n.length;
									for (let i = r - 1; i >= 0; --i) {
										let r = X(n[i], !0);
										((r.__removalCount = (e.__removalCount || 0) + 1),
											t.insertBefore(r, en(e)));
									}
								}
							}
							return (ta(e), !0);
						}
						return (e instanceof d && !ts(e)) ||
							(('noscript' === n || 'noembed' === n || 'noframes' === n) &&
								v(/<\/no(script|embed|frames)/i, e.innerHTML))
							? (ta(e), !0)
							: (eC &&
									e.nodeType === J.text &&
									((t = e.textContent),
									f([eh, ed, ef], (e) => {
										t = T(t, e, ' ');
									}),
									e.textContent !== t &&
										(k(r.removed, { element: e.cloneNode() }),
										(e.textContent = t))),
								td(eu.afterSanitizeElements, e, null),
								!1);
					},
					tg = function (e, t, n) {
						if (eU && ('id' === t || 'name' === t) && (n in l || n in tt))
							return !1;
						if (eN && !eR[t] && v(eg, t));
						else if (eE && v(em, t));
						else if (!eS[t] || eR[t]) {
							if (
								!(
									(tm(e) &&
										((e_.tagNameCheck instanceof RegExp &&
											v(e_.tagNameCheck, e)) ||
											(e_.tagNameCheck instanceof Function &&
												e_.tagNameCheck(e))) &&
										((e_.attributeNameCheck instanceof RegExp &&
											v(e_.attributeNameCheck, t)) ||
											(e_.attributeNameCheck instanceof Function &&
												e_.attributeNameCheck(t, e)))) ||
									('is' === t &&
										e_.allowCustomizedBuiltInElements &&
										((e_.tagNameCheck instanceof RegExp &&
											v(e_.tagNameCheck, n)) ||
											(e_.tagNameCheck instanceof Function &&
												e_.tagNameCheck(n))))
								)
							)
								return !1;
						} else if (eX[t]);
						else if (v(ew, T(n, ex, '')));
						else if (
							('src' === t || 'xlink:href' === t || 'href' === t) &&
							'script' !== e &&
							0 === S(n, 'data:') &&
							eZ[e]
						);
						else if (eL && !v(ek, T(n, ex, '')));
						else if (n) return !1;
						return !0;
					},
					tm = function (e) {
						return 'annotation-xml' !== e && y(e, eb);
					},
					tk = function (e) {
						td(eu.beforeSanitizeAttributes, e, null);
						let { attributes: n } = e;
						if (!n || tu(e)) return;
						let i = {
								attrName: '',
								attrValue: '',
								keepAttr: !0,
								allowedAttributes: eS,
								forceKeepAttr: void 0,
							},
							l = n.length;
						for (; l--; ) {
							let { name: s, namespaceURI: a, value: o } = n[l],
								c = e7(s),
								p = 'value' === s ? o : A(o);
							if (
								((i.attrName = c),
								(i.attrValue = p),
								(i.keepAttr = !0),
								(i.forceKeepAttr = void 0),
								td(eu.uponSanitizeAttribute, e, i),
								(p = i.attrValue),
								eH &&
									('id' === c || 'name' === c) &&
									(to(s, e), (p = 'user-content-' + p)),
								(ez && v(/((--!?|])>)|<\/(style|title|textarea)/i, p)) ||
									('attributename' === c && y(p, 'href')))
							) {
								to(s, e);
								continue;
							}
							if (i.forceKeepAttr) continue;
							if (!i.keepAttr || (!eI && v(/\/>/i, p))) {
								to(s, e);
								continue;
							}
							eC &&
								f([eh, ed, ef], (e) => {
									p = T(p, e, ' ');
								});
							let u = e7(e.nodeName);
							if (!tg(u, c, p)) {
								to(s, e);
								continue;
							}
							if (
								t &&
								'object' == typeof W &&
								'function' == typeof W.getAttributeType
							)
								if (a);
								else
									switch (W.getAttributeType(u, c)) {
										case 'TrustedHTML':
											p = t.createHTML(p);
											break;
										case 'TrustedScriptURL':
											p = t.createScriptURL(p);
									}
							if (p !== o)
								try {
									(a ? e.setAttributeNS(a, s, p) : e.setAttribute(s, p),
										tu(e) ? ta(e) : m(r.removed));
								} catch (t) {
									to(s, e);
								}
						}
						td(eu.afterSanitizeAttributes, e, null);
					},
					tx = function e(t) {
						let n = null,
							r = tp(t);
						for (td(eu.beforeSanitizeShadowDOM, t, null); (n = r.nextNode()); )
							(td(eu.uponSanitizeShadowNode, n, null),
								tf(n),
								tk(n),
								n.content instanceof o && e(n.content));
						td(eu.afterSanitizeShadowDOM, t, null);
					};
				return (
					(r.sanitize = function (e) {
						let n =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {},
							i = null,
							l = null,
							a = null,
							c = null;
						if (((e1 = !e) && (e = '<!-->'), 'string' != typeof e && !th(e)))
							if ('function' == typeof e.toString) {
								if ('string' != typeof (e = e.toString()))
									throw R('dirty is not a string, aborting');
							} else throw R('toString is not a function');
						if (!r.isSupported) return e;
						if (
							(eD || tr(n),
							(r.removed = []),
							'string' == typeof e && (eF = !1),
							eF)
						) {
							if (e.nodeName) {
								let t = e7(e.nodeName);
								if (!ey[t] || ev[t])
									throw R(
										'root node is forbidden and cannot be sanitized in-place',
									);
							}
						} else if (e instanceof h)
							((l = (i = tc('<!---->')).ownerDocument.importNode(e, !0))
								.nodeType === J.element &&
								'BODY' === l.nodeName) ||
							'HTML' === l.nodeName
								? (i = l)
								: i.appendChild(l);
						else {
							if (!eP && !eC && !eO && -1 === e.indexOf('<'))
								return t && eB ? t.createHTML(e) : e;
							if (!(i = tc(e))) return eP ? null : eB ? el : '';
						}
						i && eM && ta(i.firstChild);
						let p = tp(eF ? e : i);
						for (; (a = p.nextNode()); )
							(tf(a), tk(a), a.content instanceof o && tx(a.content));
						if (eF) return e;
						if (eP) {
							if (e$)
								for (c = eo.call(i.ownerDocument); i.firstChild; )
									c.appendChild(i.firstChild);
							else c = i;
							return (
								(eS.shadowroot || eS.shadowrootmode) && (c = ep.call(s, c, !0)),
								c
							);
						}
						let u = eO ? i.outerHTML : i.innerHTML;
						return (
							eO &&
								ey['!doctype'] &&
								i.ownerDocument &&
								i.ownerDocument.doctype &&
								i.ownerDocument.doctype.name &&
								v(K, i.ownerDocument.doctype.name) &&
								(u = '<!DOCTYPE ' + i.ownerDocument.doctype.name + '>\n' + u),
							eC &&
								f([eh, ed, ef], (e) => {
									u = T(u, e, ' ');
								}),
							t && eB ? t.createHTML(u) : u
						);
					}),
					(r.setConfig = function () {
						let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
						(tr(e), (eD = !0));
					}),
					(r.clearConfig = function () {
						((te = null), (eD = !1));
					}),
					(r.isValidAttribute = function (e, t, n) {
						return (te || tr({}), tg(e7(e), e7(t), n));
					}),
					(r.addHook = function (e, t) {
						'function' == typeof t && k(eu[e], t);
					}),
					(r.removeHook = function (e, t) {
						if (void 0 !== t) {
							let n = g(eu[e], t);
							return -1 === n ? void 0 : x(eu[e], n, 1)[0];
						}
						return m(eu[e]);
					}),
					(r.removeHooks = function (e) {
						eu[e] = [];
					}),
					(r.removeAllHooks = function () {
						eu = et();
					}),
					r
				);
			})(),
			er = e.i(6960);
		let ei = (e) => {
			let { html: t = '' } = e,
				[n, i] = (0, er.useState)('');
			return (
				(0, er.useEffect)(() => {
					i(en.sanitize(t));
				}, [t]),
				(0, r.jsx)('div', {
					dangerouslySetInnerHTML: { __html: n },
					className: 'markdown-body h-full w-full !bg-black !text-neutral-100',
				})
			);
		};
		var el = e.i(6638),
			es = e.i(5724);
		let ea = () =>
			(0, r.jsx)('nav', {
				children: (0, r.jsx)('div', {
					className: 'mx-auto px-4 py-2 md:px-8 md:py-4',
					children: (0, r.jsxs)('div', {
						className: 'flex items-center justify-between',
						children: [
							(0, r.jsx)('div', {
								className: 'text-xl font-bold',
								children: (0, r.jsx)(es.default, {
									href: '/',
									children: el.APP_NAME,
								}),
							}),
							(0, r.jsx)(es.default, { href: '/posts', children: 'Notes' }),
						],
					}),
				}),
			});
		function eo(e, t, n) {
			return (
				t in e
					? Object.defineProperty(e, t, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						})
					: (e[t] = n),
				e
			);
		}
		function ec() {
			return {
				async: !1,
				breaks: !1,
				extensions: null,
				gfm: !0,
				hooks: null,
				pedantic: !1,
				renderer: null,
				silent: !1,
				tokenizer: null,
				walkTokens: null,
			};
		}
		var ep = ec(),
			eu = { exec: () => null };
		function eh(e) {
			let t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
				n = 'string' == typeof e ? e : e.source,
				r = {
					replace: (e, t) => {
						let i = 'string' == typeof t ? t : t.source;
						return ((i = i.replace(ed.caret, '$1')), (n = n.replace(e, i)), r);
					},
					getRegex: () => new RegExp(n, t),
				};
			return r;
		}
		var ed = {
				codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
				outputLinkReplace: /\\([\[\]])/g,
				indentCodeCompensation: /^(\s+)(?:```)/,
				beginningSpace: /^\s+/,
				endingHash: /#$/,
				startingSpaceChar: /^ /,
				endingSpaceChar: / $/,
				nonSpaceChar: /[^ ]/,
				newLineCharGlobal: /\n/g,
				tabCharGlobal: /\t/g,
				multipleSpaceGlobal: /\s+/g,
				blankLine: /^[ \t]*$/,
				doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
				blockquoteStart: /^ {0,3}>/,
				blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
				blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
				listReplaceTabs: /^\t+/,
				listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
				listIsTask: /^\[[ xX]\] /,
				listReplaceTask: /^\[[ xX]\] +/,
				anyLine: /\n.*\n/,
				hrefBrackets: /^<(.*)>$/,
				tableDelimiter: /[:|]/,
				tableAlignChars: /^\||\| *$/g,
				tableRowBlankLine: /\n[ \t]*$/,
				tableAlignRight: /^ *-+: *$/,
				tableAlignCenter: /^ *:-+: *$/,
				tableAlignLeft: /^ *:-+ *$/,
				startATag: /^<a /i,
				endATag: /^<\/a>/i,
				startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
				endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
				startAngleBracket: /^</,
				endAngleBracket: />$/,
				pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
				unicodeAlphaNumeric: RegExp('[\\p{L}\\p{N}]', 'u'),
				escapeTest: /[&<>"']/,
				escapeReplace: /[&<>"']/g,
				escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
				escapeReplaceNoEncode:
					/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
				unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
				caret: /(^|[^\[])\^/g,
				percentDecode: /%25/g,
				findPipe: /\|/g,
				splitPipe: / \|/,
				slashPipe: /\\\|/g,
				carriageReturn: /\r\n|\r/g,
				spaceLine: /^ +$/gm,
				notSpaceStart: /^\S*/,
				endingNewline: /\n$/,
				listItemRegex: (e) =>
					new RegExp('^( {0,3}'.concat(e, ')((?:[	 ][^\\n]*)?(?:\\n|$))')),
				nextBulletRegex: (e) =>
					new RegExp(
						'^ {0,'.concat(
							Math.min(3, e - 1),
							'}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))',
						),
					),
				hrRegex: (e) =>
					new RegExp(
						'^ {0,'.concat(
							Math.min(3, e - 1),
							'}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)',
						),
					),
				fencesBeginRegex: (e) =>
					new RegExp('^ {0,'.concat(Math.min(3, e - 1), '}(?:```|~~~)')),
				headingBeginRegex: (e) =>
					new RegExp('^ {0,'.concat(Math.min(3, e - 1), '}#')),
				htmlBeginRegex: (e) =>
					RegExp('^ {0,'.concat(Math.min(3, e - 1), '}<(?:[a-z].*>|!--)'), 'i'),
			},
			ef = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
			eg = /(?:[*+-]|\d{1,9}[.)])/,
			em =
				/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
			ek = eh(em)
				.replace(/bull/g, eg)
				.replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
				.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
				.replace(/blockquote/g, / {0,3}>/)
				.replace(/heading/g, / {0,3}#{1,6}/)
				.replace(/html/g, / {0,3}<[^\n>]+>\n/)
				.replace(/\|table/g, '')
				.getRegex(),
			ex = eh(em)
				.replace(/bull/g, eg)
				.replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
				.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
				.replace(/blockquote/g, / {0,3}>/)
				.replace(/heading/g, / {0,3}#{1,6}/)
				.replace(/html/g, / {0,3}<[^\n>]+>\n/)
				.replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
				.getRegex(),
			eb =
				/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
			ew = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
			ey = eh(
				/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
			)
				.replace('label', ew)
				.replace(
					'title',
					/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
				)
				.getRegex(),
			eT = eh(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
				.replace(/bull/g, eg)
				.getRegex(),
			eS =
				'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
			eA = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
			e_ = eh(
				'^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))',
				'i',
			)
				.replace('comment', eA)
				.replace('tag', eS)
				.replace(
					'attribute',
					/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
				)
				.getRegex(),
			ev = eh(eb)
				.replace('hr', ef)
				.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
				.replace('|lheading', '')
				.replace('|table', '')
				.replace('blockquote', ' {0,3}>')
				.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
				.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
				.replace(
					'html',
					'</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
				)
				.replace('tag', eS)
				.getRegex(),
			eR = {
				blockquote: eh(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
					.replace('paragraph', ev)
					.getRegex(),
				code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
				def: ey,
				fences:
					/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
				heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
				hr: ef,
				html: e_,
				lheading: ek,
				list: eT,
				newline: /^(?:[ \t]*(?:\n|$))+/,
				paragraph: ev,
				table: eu,
				text: /^[^\n]+/,
			},
			eE = eh(
				'^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
			)
				.replace('hr', ef)
				.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
				.replace('blockquote', ' {0,3}>')
				.replace('code', '(?: {4}| {0,3}	)[^\\n]')
				.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
				.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
				.replace(
					'html',
					'</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
				)
				.replace('tag', eS)
				.getRegex(),
			eN = {
				...eR,
				lheading: ex,
				table: eE,
				paragraph: eh(eb)
					.replace('hr', ef)
					.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
					.replace('|lheading', '')
					.replace('table', eE)
					.replace('blockquote', ' {0,3}>')
					.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
					.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
					.replace(
						'html',
						'</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
					)
					.replace('tag', eS)
					.getRegex(),
			},
			eL = {
				...eR,
				html: eh(
					'^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))',
				)
					.replace('comment', eA)
					.replace(
						/tag/g,
						'(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
					)
					.getRegex(),
				def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
				heading: /^(#{1,6})(.*)(?:\n+|$)/,
				fences: eu,
				lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
				paragraph: eh(eb)
					.replace('hr', ef)
					.replace('heading', ' *#{1,6} *[^\n]')
					.replace('lheading', ek)
					.replace('|table', '')
					.replace('blockquote', ' {0,3}>')
					.replace('|fences', '')
					.replace('|list', '')
					.replace('|html', '')
					.replace('|tag', '')
					.getRegex(),
			},
			eI = /^( {2,}|\\)\n(?!\s*$)/,
			eC = RegExp('[\\p{P}\\p{S}]', 'u'),
			ez = RegExp('[\\s\\p{P}\\p{S}]', 'u'),
			eO = RegExp('[^\\s\\p{P}\\p{S}]', 'u'),
			eD = eh(/^((?![*_])punctSpace)/, 'u')
				.replace(/punctSpace/g, ez)
				.getRegex(),
			eM = RegExp('(?!~)[\\p{P}\\p{S}]', 'u'),
			eP = RegExp('(?!~)[\\s\\p{P}\\p{S}]', 'u'),
			e$ = RegExp('(?:[^\\s\\p{P}\\p{S}]|~)', 'u'),
			eB = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
			eU = eh(eB, 'u').replace(/punct/g, eC).getRegex(),
			eH = eh(eB, 'u').replace(/punct/g, eM).getRegex(),
			ej =
				'^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)',
			eF = eh(ej, 'gu')
				.replace(/notPunctSpace/g, eO)
				.replace(/punctSpace/g, ez)
				.replace(/punct/g, eC)
				.getRegex(),
			eq = eh(ej, 'gu')
				.replace(/notPunctSpace/g, e$)
				.replace(/punctSpace/g, eP)
				.replace(/punct/g, eM)
				.getRegex(),
			eG = eh(
				'^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)',
				'gu',
			)
				.replace(/notPunctSpace/g, eO)
				.replace(/punctSpace/g, ez)
				.replace(/punct/g, eC)
				.getRegex(),
			eW = eh(/\\(punct)/, 'gu')
				.replace(/punct/g, eC)
				.getRegex(),
			eZ = eh(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
				.replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
				.replace(
					'email',
					/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
				)
				.getRegex(),
			eY = eh(eA).replace('(?:-->|$)', '-->').getRegex(),
			eX = eh(
				'^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
			)
				.replace('comment', eY)
				.replace(
					'attribute',
					/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
				)
				.getRegex(),
			eQ =
				/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,
			eK = eh(
				/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/,
			)
				.replace('label', eQ)
				.replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
				.replace(
					'title',
					/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
				)
				.getRegex(),
			eV = eh(/^!?\[(label)\]\[(ref)\]/)
				.replace('label', eQ)
				.replace('ref', ew)
				.getRegex(),
			eJ = eh(/^!?\[(ref)\](?:\[\])?/)
				.replace('ref', ew)
				.getRegex(),
			e0 = eh('reflink|nolink(?!\\()', 'g')
				.replace('reflink', eV)
				.replace('nolink', eJ)
				.getRegex(),
			e1 = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
			e3 = {
				_backpedal: eu,
				anyPunctuation: eW,
				autolink: eZ,
				blockSkip:
					/\[(?:[^\[\]`]|`[^`]*?`)*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,
				br: eI,
				code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
				del: eu,
				emStrongLDelim: eU,
				emStrongRDelimAst: eF,
				emStrongRDelimUnd: eG,
				escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
				link: eK,
				nolink: eJ,
				punctuation: eD,
				reflink: eV,
				reflinkSearch: e0,
				tag: eX,
				text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
				url: eu,
			},
			e2 = {
				...e3,
				link: eh(/^!?\[(label)\]\((.*?)\)/)
					.replace('label', eQ)
					.getRegex(),
				reflink: eh(/^!?\[(label)\]\s*\[([^\]]*)\]/)
					.replace('label', eQ)
					.getRegex(),
			},
			e9 = {
				...e3,
				emStrongRDelimAst: eq,
				emStrongLDelim: eH,
				url: eh(
					/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
				)
					.replace('protocol', e1)
					.replace(
						'email',
						/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
					)
					.getRegex(),
				_backpedal:
					/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
				del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
				text: eh(
					/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
				)
					.replace('protocol', e1)
					.getRegex(),
			},
			e6 = {
				...e9,
				br: eh(eI).replace('{2,}', '*').getRegex(),
				text: eh(e9.text)
					.replace('\\b_', '\\b_| {2,}\\n')
					.replace(/\{2,\}/g, '*')
					.getRegex(),
			},
			e4 = { normal: eR, gfm: eN, pedantic: eL },
			e8 = { normal: e3, gfm: e9, breaks: e6, pedantic: e2 },
			e5 = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;',
			},
			e7 = (e) => e5[e];
		function te(e, t) {
			if (t) {
				if (ed.escapeTest.test(e)) return e.replace(ed.escapeReplace, e7);
			} else if (ed.escapeTestNoEncode.test(e))
				return e.replace(ed.escapeReplaceNoEncode, e7);
			return e;
		}
		function tt(e) {
			try {
				e = encodeURI(e).replace(ed.percentDecode, '%');
			} catch (e) {
				return null;
			}
			return e;
		}
		function tn(e, t) {
			var n;
			let r = e
					.replace(ed.findPipe, (e, t, n) => {
						let r = !1,
							i = t;
						for (; --i >= 0 && '\\' === n[i]; ) r = !r;
						return r ? '|' : ' |';
					})
					.split(ed.splitPipe),
				i = 0;
			if (
				(r[0].trim() || r.shift(),
				!(r.length > 0) ||
					(null == (n = r.at(-1)) ? void 0 : n.trim()) ||
					r.pop(),
				t)
			)
				if (r.length > t) r.splice(t);
				else for (; r.length < t; ) r.push('');
			for (; i < r.length; i++) r[i] = r[i].trim().replace(ed.slashPipe, '|');
			return r;
		}
		function tr(e, t, n) {
			let r = e.length;
			if (0 === r) return '';
			let i = 0;
			for (; i < r; ) {
				let l = e.charAt(r - i - 1);
				if (l !== t || n)
					if (l !== t && n) i++;
					else break;
				else i++;
			}
			return e.slice(0, r - i);
		}
		function ti(e, t, n, r, i) {
			let l = t.href,
				s = t.title || null,
				a = e[1].replace(i.other.outputLinkReplace, '$1');
			r.state.inLink = !0;
			let o = {
				type: '!' === e[0].charAt(0) ? 'image' : 'link',
				raw: n,
				href: l,
				title: s,
				text: a,
				tokens: r.inlineTokens(a),
			};
			return ((r.state.inLink = !1), o);
		}
		var tl = class {
				space(e) {
					let t = this.rules.block.newline.exec(e);
					if (t && t[0].length > 0) return { type: 'space', raw: t[0] };
				}
				code(e) {
					let t = this.rules.block.code.exec(e);
					if (t) {
						let e = t[0].replace(this.rules.other.codeRemoveIndent, '');
						return {
							type: 'code',
							raw: t[0],
							codeBlockStyle: 'indented',
							text: this.options.pedantic ? e : tr(e, '\n'),
						};
					}
				}
				fences(e) {
					let t = this.rules.block.fences.exec(e);
					if (t) {
						let e = t[0],
							n = (function (e, t, n) {
								let r = e.match(n.other.indentCodeCompensation);
								if (null === r) return t;
								let i = r[1];
								return t
									.split('\n')
									.map((e) => {
										let t = e.match(n.other.beginningSpace);
										if (null === t) return e;
										let [r] = t;
										return r.length >= i.length ? e.slice(i.length) : e;
									})
									.join('\n');
							})(e, t[3] || '', this.rules);
						return {
							type: 'code',
							raw: e,
							lang: t[2]
								? t[2].trim().replace(this.rules.inline.anyPunctuation, '$1')
								: t[2],
							text: n,
						};
					}
				}
				heading(e) {
					let t = this.rules.block.heading.exec(e);
					if (t) {
						let e = t[2].trim();
						if (this.rules.other.endingHash.test(e)) {
							let t = tr(e, '#');
							(this.options.pedantic ||
								!t ||
								this.rules.other.endingSpaceChar.test(t)) &&
								(e = t.trim());
						}
						return {
							type: 'heading',
							raw: t[0],
							depth: t[1].length,
							text: e,
							tokens: this.lexer.inline(e),
						};
					}
				}
				hr(e) {
					let t = this.rules.block.hr.exec(e);
					if (t) return { type: 'hr', raw: tr(t[0], '\n') };
				}
				blockquote(e) {
					let t = this.rules.block.blockquote.exec(e);
					if (t) {
						let e = tr(t[0], '\n').split('\n'),
							n = '',
							r = '',
							i = [];
						for (; e.length > 0; ) {
							let t = !1,
								l = [],
								s;
							for (s = 0; s < e.length; s++)
								if (this.rules.other.blockquoteStart.test(e[s]))
									(l.push(e[s]), (t = !0));
								else if (t) break;
								else l.push(e[s]);
							e = e.slice(s);
							let a = l.join('\n'),
								o = a
									.replace(this.rules.other.blockquoteSetextReplace, '\n    $1')
									.replace(this.rules.other.blockquoteSetextReplace2, '');
							((n = n ? ''.concat(n, '\n').concat(a) : a),
								(r = r ? ''.concat(r, '\n').concat(o) : o));
							let c = this.lexer.state.top;
							if (
								((this.lexer.state.top = !0),
								this.lexer.blockTokens(o, i, !0),
								(this.lexer.state.top = c),
								0 === e.length)
							)
								break;
							let p = i.at(-1);
							if ((null == p ? void 0 : p.type) === 'code') break;
							if ((null == p ? void 0 : p.type) === 'blockquote') {
								let t = p.raw + '\n' + e.join('\n'),
									l = this.blockquote(t);
								((i[i.length - 1] = l),
									(n = n.substring(0, n.length - p.raw.length) + l.raw),
									(r = r.substring(0, r.length - p.text.length) + l.text));
								break;
							}
							if ((null == p ? void 0 : p.type) === 'list') {
								let t = p.raw + '\n' + e.join('\n'),
									l = this.list(t);
								((i[i.length - 1] = l),
									(n = n.substring(0, n.length - p.raw.length) + l.raw),
									(r = r.substring(0, r.length - p.raw.length) + l.raw),
									(e = t.substring(i.at(-1).raw.length).split('\n')));
								continue;
							}
						}
						return { type: 'blockquote', raw: n, tokens: i, text: r };
					}
				}
				list(e) {
					let t = this.rules.block.list.exec(e);
					if (t) {
						let n = t[1].trim(),
							r = n.length > 1,
							i = {
								type: 'list',
								raw: '',
								ordered: r,
								start: r ? +n.slice(0, -1) : '',
								loose: !1,
								items: [],
							};
						((n = r ? '\\d{1,9}\\'.concat(n.slice(-1)) : '\\'.concat(n)),
							this.options.pedantic && (n = r ? n : '[*+-]'));
						let l = this.rules.other.listItemRegex(n),
							s = !1;
						for (; e; ) {
							let n = !1,
								r = '',
								a = '';
							if (!(t = l.exec(e)) || this.rules.block.hr.test(e)) break;
							((r = t[0]), (e = e.substring(r.length)));
							let o = t[2]
									.split('\n', 1)[0]
									.replace(this.rules.other.listReplaceTabs, (e) =>
										' '.repeat(3 * e.length),
									),
								c = e.split('\n', 1)[0],
								p = !o.trim(),
								u = 0;
							if (
								(this.options.pedantic
									? ((u = 2), (a = o.trimStart()))
									: p
										? (u = t[1].length + 1)
										: ((u =
												(u = t[2].search(this.rules.other.nonSpaceChar)) > 4
													? 1
													: u),
											(a = o.slice(u)),
											(u += t[1].length)),
								p &&
									this.rules.other.blankLine.test(c) &&
									((r += c + '\n'), (e = e.substring(c.length + 1)), (n = !0)),
								!n)
							) {
								let t = this.rules.other.nextBulletRegex(u),
									n = this.rules.other.hrRegex(u),
									i = this.rules.other.fencesBeginRegex(u),
									l = this.rules.other.headingBeginRegex(u),
									s = this.rules.other.htmlBeginRegex(u);
								for (; e; ) {
									let h = e.split('\n', 1)[0],
										d;
									if (
										((c = h),
										(d = this.options.pedantic
											? (c = c.replace(
													this.rules.other.listReplaceNesting,
													'  ',
												))
											: c.replace(this.rules.other.tabCharGlobal, '    ')),
										i.test(c) ||
											l.test(c) ||
											s.test(c) ||
											t.test(c) ||
											n.test(c))
									)
										break;
									if (d.search(this.rules.other.nonSpaceChar) >= u || !c.trim())
										a += '\n' + d.slice(u);
									else {
										if (
											p ||
											o
												.replace(this.rules.other.tabCharGlobal, '    ')
												.search(this.rules.other.nonSpaceChar) >= 4 ||
											i.test(o) ||
											l.test(o) ||
											n.test(o)
										)
											break;
										a += '\n' + c;
									}
									(p || c.trim() || (p = !0),
										(r += h + '\n'),
										(e = e.substring(h.length + 1)),
										(o = d.slice(u)));
								}
							}
							i.loose ||
								(s
									? (i.loose = !0)
									: this.rules.other.doubleBlankLine.test(r) && (s = !0));
							let h = null,
								d;
							(this.options.gfm &&
								(h = this.rules.other.listIsTask.exec(a)) &&
								((d = '[ ] ' !== h[0]),
								(a = a.replace(this.rules.other.listReplaceTask, ''))),
								i.items.push({
									type: 'list_item',
									raw: r,
									task: !!h,
									checked: d,
									loose: !1,
									text: a,
									tokens: [],
								}),
								(i.raw += r));
						}
						let a = i.items.at(-1);
						if (!a) return;
						((a.raw = a.raw.trimEnd()),
							(a.text = a.text.trimEnd()),
							(i.raw = i.raw.trimEnd()));
						for (let e = 0; e < i.items.length; e++)
							if (
								((this.lexer.state.top = !1),
								(i.items[e].tokens = this.lexer.blockTokens(
									i.items[e].text,
									[],
								)),
								!i.loose)
							) {
								let t = i.items[e].tokens.filter((e) => 'space' === e.type);
								i.loose =
									t.length > 0 &&
									t.some((e) => this.rules.other.anyLine.test(e.raw));
							}
						if (i.loose)
							for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
						return i;
					}
				}
				html(e) {
					let t = this.rules.block.html.exec(e);
					if (t)
						return {
							type: 'html',
							block: !0,
							raw: t[0],
							pre: 'pre' === t[1] || 'script' === t[1] || 'style' === t[1],
							text: t[0],
						};
				}
				def(e) {
					let t = this.rules.block.def.exec(e);
					if (t) {
						let e = t[1]
								.toLowerCase()
								.replace(this.rules.other.multipleSpaceGlobal, ' '),
							n = t[2]
								? t[2]
										.replace(this.rules.other.hrefBrackets, '$1')
										.replace(this.rules.inline.anyPunctuation, '$1')
								: '',
							r = t[3]
								? t[3]
										.substring(1, t[3].length - 1)
										.replace(this.rules.inline.anyPunctuation, '$1')
								: t[3];
						return { type: 'def', tag: e, raw: t[0], href: n, title: r };
					}
				}
				table(e) {
					var t;
					let n = this.rules.block.table.exec(e);
					if (!n || !this.rules.other.tableDelimiter.test(n[2])) return;
					let r = tn(n[1]),
						i = n[2].replace(this.rules.other.tableAlignChars, '').split('|'),
						l = (null == (t = n[3]) ? void 0 : t.trim())
							? n[3].replace(this.rules.other.tableRowBlankLine, '').split('\n')
							: [],
						s = { type: 'table', raw: n[0], header: [], align: [], rows: [] };
					if (r.length === i.length) {
						for (let e of i)
							this.rules.other.tableAlignRight.test(e)
								? s.align.push('right')
								: this.rules.other.tableAlignCenter.test(e)
									? s.align.push('center')
									: this.rules.other.tableAlignLeft.test(e)
										? s.align.push('left')
										: s.align.push(null);
						for (let e = 0; e < r.length; e++)
							s.header.push({
								text: r[e],
								tokens: this.lexer.inline(r[e]),
								header: !0,
								align: s.align[e],
							});
						for (let e of l)
							s.rows.push(
								tn(e, s.header.length).map((e, t) => ({
									text: e,
									tokens: this.lexer.inline(e),
									header: !1,
									align: s.align[t],
								})),
							);
						return s;
					}
				}
				lheading(e) {
					let t = this.rules.block.lheading.exec(e);
					if (t)
						return {
							type: 'heading',
							raw: t[0],
							depth: '=' === t[2].charAt(0) ? 1 : 2,
							text: t[1],
							tokens: this.lexer.inline(t[1]),
						};
				}
				paragraph(e) {
					let t = this.rules.block.paragraph.exec(e);
					if (t) {
						let e =
							'\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
						return {
							type: 'paragraph',
							raw: t[0],
							text: e,
							tokens: this.lexer.inline(e),
						};
					}
				}
				text(e) {
					let t = this.rules.block.text.exec(e);
					if (t)
						return {
							type: 'text',
							raw: t[0],
							text: t[0],
							tokens: this.lexer.inline(t[0]),
						};
				}
				escape(e) {
					let t = this.rules.inline.escape.exec(e);
					if (t) return { type: 'escape', raw: t[0], text: t[1] };
				}
				tag(e) {
					let t = this.rules.inline.tag.exec(e);
					if (t)
						return (
							!this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
								? (this.lexer.state.inLink = !0)
								: this.lexer.state.inLink &&
									this.rules.other.endATag.test(t[0]) &&
									(this.lexer.state.inLink = !1),
							!this.lexer.state.inRawBlock &&
							this.rules.other.startPreScriptTag.test(t[0])
								? (this.lexer.state.inRawBlock = !0)
								: this.lexer.state.inRawBlock &&
									this.rules.other.endPreScriptTag.test(t[0]) &&
									(this.lexer.state.inRawBlock = !1),
							{
								type: 'html',
								raw: t[0],
								inLink: this.lexer.state.inLink,
								inRawBlock: this.lexer.state.inRawBlock,
								block: !1,
								text: t[0],
							}
						);
				}
				link(e) {
					let t = this.rules.inline.link.exec(e);
					if (t) {
						let e = t[2].trim();
						if (
							!this.options.pedantic &&
							this.rules.other.startAngleBracket.test(e)
						) {
							if (!this.rules.other.endAngleBracket.test(e)) return;
							let t = tr(e.slice(0, -1), '\\');
							if ((e.length - t.length) % 2 == 0) return;
						} else {
							let e = (function (e, t) {
								if (-1 === e.indexOf(')')) return -1;
								let n = 0;
								for (let r = 0; r < e.length; r++)
									if ('\\' === e[r]) r++;
									else if ('(' === e[r]) n++;
									else if (e[r] === t[1] && --n < 0) return r;
								return n > 0 ? -2 : -1;
							})(t[2], '()');
							if (-2 === e) return;
							if (e > -1) {
								let n = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + e;
								((t[2] = t[2].substring(0, e)),
									(t[0] = t[0].substring(0, n).trim()),
									(t[3] = ''));
							}
						}
						let n = t[2],
							r = '';
						if (this.options.pedantic) {
							let e = this.rules.other.pedanticHrefTitle.exec(n);
							e && ((n = e[1]), (r = e[3]));
						} else r = t[3] ? t[3].slice(1, -1) : '';
						return (
							(n = n.trim()),
							this.rules.other.startAngleBracket.test(n) &&
								(n =
									this.options.pedantic &&
									!this.rules.other.endAngleBracket.test(e)
										? n.slice(1)
										: n.slice(1, -1)),
							ti(
								t,
								{
									href: n && n.replace(this.rules.inline.anyPunctuation, '$1'),
									title: r && r.replace(this.rules.inline.anyPunctuation, '$1'),
								},
								t[0],
								this.lexer,
								this.rules,
							)
						);
					}
				}
				reflink(e, t) {
					let n;
					if (
						(n = this.rules.inline.reflink.exec(e)) ||
						(n = this.rules.inline.nolink.exec(e))
					) {
						let e =
							t[
								(n[2] || n[1])
									.replace(this.rules.other.multipleSpaceGlobal, ' ')
									.toLowerCase()
							];
						if (!e) {
							let e = n[0].charAt(0);
							return { type: 'text', raw: e, text: e };
						}
						return ti(n, e, n[0], this.lexer, this.rules);
					}
				}
				emStrong(e, t) {
					let n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: '',
						r = this.rules.inline.emStrongLDelim.exec(e);
					if (
						!(!r || (r[3] && n.match(this.rules.other.unicodeAlphaNumeric))) &&
						(!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))
					) {
						let n = [...r[0]].length - 1,
							i,
							l,
							s = n,
							a = 0,
							o =
								'*' === r[0][0]
									? this.rules.inline.emStrongRDelimAst
									: this.rules.inline.emStrongRDelimUnd;
						for (
							o.lastIndex = 0, t = t.slice(-1 * e.length + n);
							null != (r = o.exec(t));

						) {
							if (!(i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])) continue;
							if (((l = [...i].length), r[3] || r[4])) {
								s += l;
								continue;
							}
							if ((r[5] || r[6]) && n % 3 && !((n + l) % 3)) {
								a += l;
								continue;
							}
							if ((s -= l) > 0) continue;
							l = Math.min(l, l + s + a);
							let t = [...r[0]][0].length,
								o = e.slice(0, n + r.index + t + l);
							if (Math.min(n, l) % 2) {
								let e = o.slice(1, -1);
								return {
									type: 'em',
									raw: o,
									text: e,
									tokens: this.lexer.inlineTokens(e),
								};
							}
							let c = o.slice(2, -2);
							return {
								type: 'strong',
								raw: o,
								text: c,
								tokens: this.lexer.inlineTokens(c),
							};
						}
					}
				}
				codespan(e) {
					let t = this.rules.inline.code.exec(e);
					if (t) {
						let e = t[2].replace(this.rules.other.newLineCharGlobal, ' '),
							n = this.rules.other.nonSpaceChar.test(e),
							r =
								this.rules.other.startingSpaceChar.test(e) &&
								this.rules.other.endingSpaceChar.test(e);
						return (
							n && r && (e = e.substring(1, e.length - 1)),
							{ type: 'codespan', raw: t[0], text: e }
						);
					}
				}
				br(e) {
					let t = this.rules.inline.br.exec(e);
					if (t) return { type: 'br', raw: t[0] };
				}
				del(e) {
					let t = this.rules.inline.del.exec(e);
					if (t)
						return {
							type: 'del',
							raw: t[0],
							text: t[2],
							tokens: this.lexer.inlineTokens(t[2]),
						};
				}
				autolink(e) {
					let t = this.rules.inline.autolink.exec(e);
					if (t) {
						let e, n;
						return (
							(n = '@' === t[2] ? 'mailto:' + (e = t[1]) : (e = t[1])),
							{
								type: 'link',
								raw: t[0],
								text: e,
								href: n,
								tokens: [{ type: 'text', raw: e, text: e }],
							}
						);
					}
				}
				url(e) {
					let t;
					if ((t = this.rules.inline.url.exec(e))) {
						let e, i;
						if ('@' === t[2]) i = 'mailto:' + (e = t[0]);
						else {
							var n, r;
							let l;
							do
								((l = t[0]),
									(t[0] =
										null !=
										(r =
											null == (n = this.rules.inline._backpedal.exec(t[0]))
												? void 0
												: n[0])
											? r
											: ''));
							while (l !== t[0]);
							((e = t[0]), (i = 'www.' === t[1] ? 'http://' + t[0] : t[0]));
						}
						return {
							type: 'link',
							raw: t[0],
							text: e,
							href: i,
							tokens: [{ type: 'text', raw: e, text: e }],
						};
					}
				}
				inlineText(e) {
					let t = this.rules.inline.text.exec(e);
					if (t) {
						let e = this.lexer.state.inRawBlock;
						return { type: 'text', raw: t[0], text: t[0], escaped: e };
					}
				}
				constructor(e) {
					(eo(this, 'options', void 0),
						eo(this, 'rules', void 0),
						eo(this, 'lexer', void 0),
						(this.options = e || ep));
				}
			},
			ts = class e {
				static get rules() {
					return { block: e4, inline: e8 };
				}
				static lex(t, n) {
					return new e(n).lex(t);
				}
				static lexInline(t, n) {
					return new e(n).inlineTokens(t);
				}
				lex(e) {
					((e = e.replace(ed.carriageReturn, '\n')),
						this.blockTokens(e, this.tokens));
					for (let e = 0; e < this.inlineQueue.length; e++) {
						let t = this.inlineQueue[e];
						this.inlineTokens(t.src, t.tokens);
					}
					return ((this.inlineQueue = []), this.tokens);
				}
				blockTokens(e) {
					let t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: [],
						n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					for (
						this.options.pedantic &&
						(e = e.replace(ed.tabCharGlobal, '    ').replace(ed.spaceLine, ''));
						e;

					) {
						var r, i, l;
						let s;
						if (
							null == (i = this.options.extensions) || null == (r = i.block)
								? void 0
								: r.some(
										(n) =>
											!!(s = n.call({ lexer: this }, e, t)) &&
											((e = e.substring(s.raw.length)), t.push(s), !0),
									)
						)
							continue;
						if ((s = this.tokenizer.space(e))) {
							e = e.substring(s.raw.length);
							let n = t.at(-1);
							1 === s.raw.length && void 0 !== n ? (n.raw += '\n') : t.push(s);
							continue;
						}
						if ((s = this.tokenizer.code(e))) {
							e = e.substring(s.raw.length);
							let n = t.at(-1);
							(null == n ? void 0 : n.type) === 'paragraph' ||
							(null == n ? void 0 : n.type) === 'text'
								? ((n.raw += (n.raw.endsWith('\n') ? '' : '\n') + s.raw),
									(n.text += '\n' + s.text),
									(this.inlineQueue.at(-1).src = n.text))
								: t.push(s);
							continue;
						}
						if (
							(s = this.tokenizer.fences(e)) ||
							(s = this.tokenizer.heading(e)) ||
							(s = this.tokenizer.hr(e)) ||
							(s = this.tokenizer.blockquote(e)) ||
							(s = this.tokenizer.list(e)) ||
							(s = this.tokenizer.html(e))
						) {
							((e = e.substring(s.raw.length)), t.push(s));
							continue;
						}
						if ((s = this.tokenizer.def(e))) {
							e = e.substring(s.raw.length);
							let n = t.at(-1);
							(null == n ? void 0 : n.type) === 'paragraph' ||
							(null == n ? void 0 : n.type) === 'text'
								? ((n.raw += (n.raw.endsWith('\n') ? '' : '\n') + s.raw),
									(n.text += '\n' + s.raw),
									(this.inlineQueue.at(-1).src = n.text))
								: this.tokens.links[s.tag] ||
									((this.tokens.links[s.tag] = {
										href: s.href,
										title: s.title,
									}),
									t.push(s));
							continue;
						}
						if (
							(s = this.tokenizer.table(e)) ||
							(s = this.tokenizer.lheading(e))
						) {
							((e = e.substring(s.raw.length)), t.push(s));
							continue;
						}
						let a = e;
						if (null == (l = this.options.extensions) ? void 0 : l.startBlock) {
							let t = 1 / 0,
								n = e.slice(1),
								r;
							(this.options.extensions.startBlock.forEach((e) => {
								'number' == typeof (r = e.call({ lexer: this }, n)) &&
									r >= 0 &&
									(t = Math.min(t, r));
							}),
								t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1)));
						}
						if (this.state.top && (s = this.tokenizer.paragraph(a))) {
							let r = t.at(-1);
							(n && (null == r ? void 0 : r.type) === 'paragraph'
								? ((r.raw += (r.raw.endsWith('\n') ? '' : '\n') + s.raw),
									(r.text += '\n' + s.text),
									this.inlineQueue.pop(),
									(this.inlineQueue.at(-1).src = r.text))
								: t.push(s),
								(n = a.length !== e.length),
								(e = e.substring(s.raw.length)));
							continue;
						}
						if ((s = this.tokenizer.text(e))) {
							e = e.substring(s.raw.length);
							let n = t.at(-1);
							(null == n ? void 0 : n.type) === 'text'
								? ((n.raw += (n.raw.endsWith('\n') ? '' : '\n') + s.raw),
									(n.text += '\n' + s.text),
									this.inlineQueue.pop(),
									(this.inlineQueue.at(-1).src = n.text))
								: t.push(s);
							continue;
						}
						if (e) {
							let t = 'Infinite loop on byte: ' + e.charCodeAt(0);
							if (this.options.silent) {
								console.error(t);
								break;
							}
							throw Error(t);
						}
					}
					return ((this.state.top = !0), t);
				}
				inline(e) {
					let t =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
					return (this.inlineQueue.push({ src: e, tokens: t }), t);
				}
				inlineTokens(e) {
					var t, n, r, i, l, s;
					let a =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: [],
						o = e,
						c = null;
					if (this.tokens.links) {
						let e = Object.keys(this.tokens.links);
						if (e.length > 0)
							for (
								;
								null != (c = this.tokenizer.rules.inline.reflinkSearch.exec(o));

							)
								e.includes(c[0].slice(c[0].lastIndexOf('[') + 1, -1)) &&
									(o =
										o.slice(0, c.index) +
										'[' +
										'a'.repeat(c[0].length - 2) +
										']' +
										o.slice(
											this.tokenizer.rules.inline.reflinkSearch.lastIndex,
										));
					}
					for (
						;
						null != (c = this.tokenizer.rules.inline.anyPunctuation.exec(o));

					)
						o =
							o.slice(0, c.index) +
							'++' +
							o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
					for (; null != (c = this.tokenizer.rules.inline.blockSkip.exec(o)); )
						o =
							o.slice(0, c.index) +
							'[' +
							'a'.repeat(c[0].length - 2) +
							']' +
							o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
					o =
						null !=
						(r =
							null == (n = this.options.hooks) || null == (t = n.emStrongMask)
								? void 0
								: t.call({ lexer: this }, o))
							? r
							: o;
					let p = !1,
						u = '';
					for (; e; ) {
						let t;
						if (
							(p || (u = ''),
							(p = !1),
							null == (l = this.options.extensions) || null == (i = l.inline)
								? void 0
								: i.some(
										(n) =>
											!!(t = n.call({ lexer: this }, e, a)) &&
											((e = e.substring(t.raw.length)), a.push(t), !0),
									))
						)
							continue;
						if (
							(t = this.tokenizer.escape(e)) ||
							(t = this.tokenizer.tag(e)) ||
							(t = this.tokenizer.link(e))
						) {
							((e = e.substring(t.raw.length)), a.push(t));
							continue;
						}
						if ((t = this.tokenizer.reflink(e, this.tokens.links))) {
							e = e.substring(t.raw.length);
							let n = a.at(-1);
							'text' === t.type && (null == n ? void 0 : n.type) === 'text'
								? ((n.raw += t.raw), (n.text += t.text))
								: a.push(t);
							continue;
						}
						if (
							(t = this.tokenizer.emStrong(e, o, u)) ||
							(t = this.tokenizer.codespan(e)) ||
							(t = this.tokenizer.br(e)) ||
							(t = this.tokenizer.del(e)) ||
							(t = this.tokenizer.autolink(e)) ||
							(!this.state.inLink && (t = this.tokenizer.url(e)))
						) {
							((e = e.substring(t.raw.length)), a.push(t));
							continue;
						}
						let n = e;
						if (
							null == (s = this.options.extensions) ? void 0 : s.startInline
						) {
							let t = 1 / 0,
								r = e.slice(1),
								i;
							(this.options.extensions.startInline.forEach((e) => {
								'number' == typeof (i = e.call({ lexer: this }, r)) &&
									i >= 0 &&
									(t = Math.min(t, i));
							}),
								t < 1 / 0 && t >= 0 && (n = e.substring(0, t + 1)));
						}
						if ((t = this.tokenizer.inlineText(n))) {
							((e = e.substring(t.raw.length)),
								'_' !== t.raw.slice(-1) && (u = t.raw.slice(-1)),
								(p = !0));
							let n = a.at(-1);
							(null == n ? void 0 : n.type) === 'text'
								? ((n.raw += t.raw), (n.text += t.text))
								: a.push(t);
							continue;
						}
						if (e) {
							let t = 'Infinite loop on byte: ' + e.charCodeAt(0);
							if (this.options.silent) {
								console.error(t);
								break;
							}
							throw Error(t);
						}
					}
					return a;
				}
				constructor(e) {
					(eo(this, 'tokens', void 0),
						eo(this, 'options', void 0),
						eo(this, 'state', void 0),
						eo(this, 'tokenizer', void 0),
						eo(this, 'inlineQueue', void 0),
						(this.tokens = []),
						(this.tokens.links = Object.create(null)),
						(this.options = e || ep),
						(this.options.tokenizer = this.options.tokenizer || new tl()),
						(this.tokenizer = this.options.tokenizer),
						(this.tokenizer.options = this.options),
						(this.tokenizer.lexer = this),
						(this.inlineQueue = []),
						(this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
					let t = { other: ed, block: e4.normal, inline: e8.normal };
					(this.options.pedantic
						? ((t.block = e4.pedantic), (t.inline = e8.pedantic))
						: this.options.gfm &&
							((t.block = e4.gfm),
							this.options.breaks
								? (t.inline = e8.breaks)
								: (t.inline = e8.gfm)),
						(this.tokenizer.rules = t));
				}
			},
			ta = class {
				space(e) {
					return '';
				}
				code(e) {
					var t;
					let { text: n, lang: r, escaped: i } = e,
						l = null == (t = (r || '').match(ed.notSpaceStart)) ? void 0 : t[0],
						s = n.replace(ed.endingNewline, '') + '\n';
					return l
						? '<pre><code class="language-' +
								te(l) +
								'">' +
								(i ? s : te(s, !0)) +
								'</code></pre>\n'
						: '<pre><code>' + (i ? s : te(s, !0)) + '</code></pre>\n';
				}
				blockquote(e) {
					let { tokens: t } = e;
					return '<blockquote>\n'.concat(
						this.parser.parse(t),
						'</blockquote>\n',
					);
				}
				html(e) {
					let { text: t } = e;
					return t;
				}
				def(e) {
					return '';
				}
				heading(e) {
					let { tokens: t, depth: n } = e;
					return '<h'
						.concat(n, '>')
						.concat(this.parser.parseInline(t), '</h')
						.concat(n, '>\n');
				}
				hr(e) {
					return '<hr>\n';
				}
				list(e) {
					let t = e.ordered,
						n = e.start,
						r = '';
					for (let t = 0; t < e.items.length; t++) {
						let n = e.items[t];
						r += this.listitem(n);
					}
					let i = t ? 'ol' : 'ul';
					return (
						'<' +
						i +
						(t && 1 !== n ? ' start="' + n + '"' : '') +
						'>\n' +
						r +
						'</' +
						i +
						'>\n'
					);
				}
				listitem(e) {
					let t = '';
					if (e.task) {
						var n;
						let r = this.checkbox({ checked: !!e.checked });
						e.loose
							? (null == (n = e.tokens[0]) ? void 0 : n.type) === 'paragraph'
								? ((e.tokens[0].text = r + ' ' + e.tokens[0].text),
									e.tokens[0].tokens &&
										e.tokens[0].tokens.length > 0 &&
										'text' === e.tokens[0].tokens[0].type &&
										((e.tokens[0].tokens[0].text =
											r + ' ' + te(e.tokens[0].tokens[0].text)),
										(e.tokens[0].tokens[0].escaped = !0)))
								: e.tokens.unshift({
										type: 'text',
										raw: r + ' ',
										text: r + ' ',
										escaped: !0,
									})
							: (t += r + ' ');
					}
					return (
						(t += this.parser.parse(e.tokens, !!e.loose)),
						'<li>'.concat(t, '</li>\n')
					);
				}
				checkbox(e) {
					let { checked: t } = e;
					return (
						'<input ' +
						(t ? 'checked="" ' : '') +
						'disabled="" type="checkbox">'
					);
				}
				paragraph(e) {
					let { tokens: t } = e;
					return '<p>'.concat(this.parser.parseInline(t), '</p>\n');
				}
				table(e) {
					let t = '',
						n = '';
					for (let t = 0; t < e.header.length; t++)
						n += this.tablecell(e.header[t]);
					t += this.tablerow({ text: n });
					let r = '';
					for (let t = 0; t < e.rows.length; t++) {
						let i = e.rows[t];
						n = '';
						for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
						r += this.tablerow({ text: n });
					}
					return (
						r && (r = '<tbody>'.concat(r, '</tbody>')),
						'<table>\n<thead>\n' + t + '</thead>\n' + r + '</table>\n'
					);
				}
				tablerow(e) {
					let { text: t } = e;
					return '<tr>\n'.concat(t, '</tr>\n');
				}
				tablecell(e) {
					let t = this.parser.parseInline(e.tokens),
						n = e.header ? 'th' : 'td';
					return (
						(e.align
							? '<'.concat(n, ' align="').concat(e.align, '">')
							: '<'.concat(n, '>')) +
						t +
						'</'.concat(n, '>\n')
					);
				}
				strong(e) {
					let { tokens: t } = e;
					return '<strong>'.concat(this.parser.parseInline(t), '</strong>');
				}
				em(e) {
					let { tokens: t } = e;
					return '<em>'.concat(this.parser.parseInline(t), '</em>');
				}
				codespan(e) {
					let { text: t } = e;
					return '<code>'.concat(te(t, !0), '</code>');
				}
				br(e) {
					return '<br>';
				}
				del(e) {
					let { tokens: t } = e;
					return '<del>'.concat(this.parser.parseInline(t), '</del>');
				}
				link(e) {
					let { href: t, title: n, tokens: r } = e,
						i = this.parser.parseInline(r),
						l = tt(t);
					if (null === l) return i;
					let s = '<a href="' + (t = l) + '"';
					return (
						n && (s += ' title="' + te(n) + '"'),
						(s += '>' + i + '</a>')
					);
				}
				image(e) {
					let { href: t, title: n, text: r, tokens: i } = e;
					i && (r = this.parser.parseInline(i, this.parser.textRenderer));
					let l = tt(t);
					if (null === l) return te(r);
					t = l;
					let s = '<img src="'.concat(t, '" alt="').concat(r, '"');
					return (n && (s += ' title="'.concat(te(n), '"')), (s += '>'));
				}
				text(e) {
					return 'tokens' in e && e.tokens
						? this.parser.parseInline(e.tokens)
						: 'escaped' in e && e.escaped
							? e.text
							: te(e.text);
				}
				constructor(e) {
					(eo(this, 'options', void 0),
						eo(this, 'parser', void 0),
						(this.options = e || ep));
				}
			},
			to = class {
				strong(e) {
					let { text: t } = e;
					return t;
				}
				em(e) {
					let { text: t } = e;
					return t;
				}
				codespan(e) {
					let { text: t } = e;
					return t;
				}
				del(e) {
					let { text: t } = e;
					return t;
				}
				html(e) {
					let { text: t } = e;
					return t;
				}
				text(e) {
					let { text: t } = e;
					return t;
				}
				link(e) {
					let { text: t } = e;
					return '' + t;
				}
				image(e) {
					let { text: t } = e;
					return '' + t;
				}
				br() {
					return '';
				}
			},
			tc = class e {
				static parse(t, n) {
					return new e(n).parse(t);
				}
				static parseInline(t, n) {
					return new e(n).parseInline(t);
				}
				parse(e) {
					let t =
							!(arguments.length > 1) ||
							void 0 === arguments[1] ||
							arguments[1],
						n = '';
					for (let l = 0; l < e.length; l++) {
						var r, i;
						let s = e[l];
						if (
							null == (i = this.options.extensions) || null == (r = i.renderers)
								? void 0
								: r[s.type]
						) {
							let e = this.options.extensions.renderers[s.type].call(
								{ parser: this },
								s,
							);
							if (
								!1 !== e ||
								![
									'space',
									'hr',
									'heading',
									'code',
									'table',
									'blockquote',
									'list',
									'html',
									'def',
									'paragraph',
									'text',
								].includes(s.type)
							) {
								n += e || '';
								continue;
							}
						}
						switch (s.type) {
							case 'space':
								n += this.renderer.space(s);
								continue;
							case 'hr':
								n += this.renderer.hr(s);
								continue;
							case 'heading':
								n += this.renderer.heading(s);
								continue;
							case 'code':
								n += this.renderer.code(s);
								continue;
							case 'table':
								n += this.renderer.table(s);
								continue;
							case 'blockquote':
								n += this.renderer.blockquote(s);
								continue;
							case 'list':
								n += this.renderer.list(s);
								continue;
							case 'html':
								n += this.renderer.html(s);
								continue;
							case 'def':
								n += this.renderer.def(s);
								continue;
							case 'paragraph':
								n += this.renderer.paragraph(s);
								continue;
							case 'text': {
								let r = s,
									i = this.renderer.text(r);
								for (; l + 1 < e.length && 'text' === e[l + 1].type; )
									((r = e[++l]), (i += '\n' + this.renderer.text(r)));
								t
									? (n += this.renderer.paragraph({
											type: 'paragraph',
											raw: i,
											text: i,
											tokens: [{ type: 'text', raw: i, text: i, escaped: !0 }],
										}))
									: (n += i);
								continue;
							}
							default: {
								let e = 'Token with "' + s.type + '" type was not found.';
								if (this.options.silent) return (console.error(e), '');
								throw Error(e);
							}
						}
					}
					return n;
				}
				parseInline(e) {
					let t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: this.renderer,
						n = '';
					for (let l = 0; l < e.length; l++) {
						var r, i;
						let s = e[l];
						if (
							null == (i = this.options.extensions) || null == (r = i.renderers)
								? void 0
								: r[s.type]
						) {
							let e = this.options.extensions.renderers[s.type].call(
								{ parser: this },
								s,
							);
							if (
								!1 !== e ||
								![
									'escape',
									'html',
									'link',
									'image',
									'strong',
									'em',
									'codespan',
									'br',
									'del',
									'text',
								].includes(s.type)
							) {
								n += e || '';
								continue;
							}
						}
						switch (s.type) {
							case 'escape':
							case 'text':
								n += t.text(s);
								break;
							case 'html':
								n += t.html(s);
								break;
							case 'link':
								n += t.link(s);
								break;
							case 'image':
								n += t.image(s);
								break;
							case 'strong':
								n += t.strong(s);
								break;
							case 'em':
								n += t.em(s);
								break;
							case 'codespan':
								n += t.codespan(s);
								break;
							case 'br':
								n += t.br(s);
								break;
							case 'del':
								n += t.del(s);
								break;
							default: {
								let e = 'Token with "' + s.type + '" type was not found.';
								if (this.options.silent) return (console.error(e), '');
								throw Error(e);
							}
						}
					}
					return n;
				}
				constructor(e) {
					(eo(this, 'options', void 0),
						eo(this, 'renderer', void 0),
						eo(this, 'textRenderer', void 0),
						(this.options = e || ep),
						(this.options.renderer = this.options.renderer || new ta()),
						(this.renderer = this.options.renderer),
						(this.renderer.options = this.options),
						(this.renderer.parser = this),
						(this.textRenderer = new to()));
				}
			},
			tp =
				((n = class {
					preprocess(e) {
						return e;
					}
					postprocess(e) {
						return e;
					}
					processAllTokens(e) {
						return e;
					}
					emStrongMask(e) {
						return e;
					}
					provideLexer() {
						return this.block ? ts.lex : ts.lexInline;
					}
					provideParser() {
						return this.block ? tc.parse : tc.parseInline;
					}
					constructor(e) {
						(eo(this, 'options', void 0),
							eo(this, 'block', void 0),
							(this.options = e || ep));
					}
				}),
				eo(
					n,
					'passThroughHooks',
					new Set([
						'preprocess',
						'postprocess',
						'processAllTokens',
						'emStrongMask',
					]),
				),
				eo(
					n,
					'passThroughHooksRespectAsync',
					new Set(['preprocess', 'postprocess', 'processAllTokens']),
				),
				n),
			tu = new (class {
				walkTokens(e, t) {
					let n = [];
					for (let l of e)
						switch (((n = n.concat(t.call(this, l))), l.type)) {
							case 'table':
								for (let e of l.header)
									n = n.concat(this.walkTokens(e.tokens, t));
								for (let e of l.rows)
									for (let r of e) n = n.concat(this.walkTokens(r.tokens, t));
								break;
							case 'list':
								n = n.concat(this.walkTokens(l.items, t));
								break;
							default: {
								var r, i;
								let e = l;
								(
									null == (i = this.defaults.extensions) ||
									null == (r = i.childTokens)
										? void 0
										: r[e.type]
								)
									? this.defaults.extensions.childTokens[e.type].forEach(
											(r) => {
												let i = e[r].flat(1 / 0);
												n = n.concat(this.walkTokens(i, t));
											},
										)
									: e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
							}
						}
					return n;
				}
				use() {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
						t[n] = arguments[n];
					let r = this.defaults.extensions || {
						renderers: {},
						childTokens: {},
					};
					return (
						t.forEach((e) => {
							let t = { ...e };
							if (
								((t.async = this.defaults.async || t.async || !1),
								e.extensions &&
									(e.extensions.forEach((e) => {
										if (!e.name) throw Error('extension name required');
										if ('renderer' in e) {
											let t = r.renderers[e.name];
											t
												? (r.renderers[e.name] = function () {
														for (
															var n = arguments.length, r = Array(n), i = 0;
															i < n;
															i++
														)
															r[i] = arguments[i];
														let l = e.renderer.apply(this, r);
														return (!1 === l && (l = t.apply(this, r)), l);
													})
												: (r.renderers[e.name] = e.renderer);
										}
										if ('tokenizer' in e) {
											if (
												!e.level ||
												('block' !== e.level && 'inline' !== e.level)
											)
												throw Error(
													"extension level must be 'block' or 'inline'",
												);
											let t = r[e.level];
											(t
												? t.unshift(e.tokenizer)
												: (r[e.level] = [e.tokenizer]),
												e.start &&
													('block' === e.level
														? r.startBlock
															? r.startBlock.push(e.start)
															: (r.startBlock = [e.start])
														: 'inline' === e.level &&
															(r.startInline
																? r.startInline.push(e.start)
																: (r.startInline = [e.start]))));
										}
										'childTokens' in e &&
											e.childTokens &&
											(r.childTokens[e.name] = e.childTokens);
									}),
									(t.extensions = r)),
								e.renderer)
							) {
								let n = this.defaults.renderer || new ta(this.defaults);
								for (let t in e.renderer) {
									if (!(t in n))
										throw Error("renderer '".concat(t, "' does not exist"));
									if (['options', 'parser'].includes(t)) continue;
									let r = e.renderer[t],
										i = n[t];
									n[t] = function () {
										for (
											var e = arguments.length, t = Array(e), l = 0;
											l < e;
											l++
										)
											t[l] = arguments[l];
										let s = r.apply(n, t);
										return (!1 === s && (s = i.apply(n, t)), s || '');
									};
								}
								t.renderer = n;
							}
							if (e.tokenizer) {
								let n = this.defaults.tokenizer || new tl(this.defaults);
								for (let t in e.tokenizer) {
									if (!(t in n))
										throw Error("tokenizer '".concat(t, "' does not exist"));
									if (['options', 'rules', 'lexer'].includes(t)) continue;
									let r = e.tokenizer[t],
										i = n[t];
									n[t] = function () {
										for (
											var e = arguments.length, t = Array(e), l = 0;
											l < e;
											l++
										)
											t[l] = arguments[l];
										let s = r.apply(n, t);
										return (!1 === s && (s = i.apply(n, t)), s);
									};
								}
								t.tokenizer = n;
							}
							if (e.hooks) {
								let r = this.defaults.hooks || new tp();
								for (let t in e.hooks) {
									var n = this;
									if (!(t in r))
										throw Error("hook '".concat(t, "' does not exist"));
									if (['options', 'block'].includes(t)) continue;
									let i = e.hooks[t],
										l = r[t];
									tp.passThroughHooks.has(t)
										? (r[t] = (e) => {
												if (
													this.defaults.async &&
													tp.passThroughHooksRespectAsync.has(t)
												)
													return (async () => {
														let t = await i.call(r, e);
														return l.call(r, t);
													})();
												let n = i.call(r, e);
												return l.call(r, n);
											})
										: (r[t] = function () {
												for (
													var e = arguments.length, t = Array(e), s = 0;
													s < e;
													s++
												)
													t[s] = arguments[s];
												if (n.defaults.async)
													return (async () => {
														let e = await i.apply(r, t);
														return (!1 === e && (e = await l.apply(r, t)), e);
													})();
												let a = i.apply(r, t);
												return (!1 === a && (a = l.apply(r, t)), a);
											});
								}
								t.hooks = r;
							}
							if (e.walkTokens) {
								let n = this.defaults.walkTokens,
									r = e.walkTokens;
								t.walkTokens = function (e) {
									let t = [];
									return (
										t.push(r.call(this, e)),
										n && (t = t.concat(n.call(this, e))),
										t
									);
								};
							}
							this.defaults = { ...this.defaults, ...t };
						}),
						this
					);
				}
				setOptions(e) {
					return ((this.defaults = { ...this.defaults, ...e }), this);
				}
				lexer(e, t) {
					return ts.lex(e, null != t ? t : this.defaults);
				}
				parser(e, t) {
					return tc.parse(e, null != t ? t : this.defaults);
				}
				parseMarkdown(e) {
					return (t, n) => {
						let r = { ...n },
							i = { ...this.defaults, ...r },
							l = this.onError(!!i.silent, !!i.async);
						if (!0 === this.defaults.async && !1 === r.async)
							return l(
								Error(
									'marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.',
								),
							);
						if (typeof t > 'u' || null === t)
							return l(Error('marked(): input parameter is undefined or null'));
						if ('string' != typeof t)
							return l(
								Error(
									'marked(): input parameter is of type ' +
										Object.prototype.toString.call(t) +
										', string expected',
								),
							);
						if (
							(i.hooks && ((i.hooks.options = i), (i.hooks.block = e)), i.async)
						)
							return (async () => {
								let n = i.hooks ? await i.hooks.preprocess(t) : t,
									r = await (
										i.hooks
											? await i.hooks.provideLexer()
											: e
												? ts.lex
												: ts.lexInline
									)(n, i),
									l = i.hooks ? await i.hooks.processAllTokens(r) : r;
								i.walkTokens &&
									(await Promise.all(this.walkTokens(l, i.walkTokens)));
								let s = await (
									i.hooks
										? await i.hooks.provideParser()
										: e
											? tc.parse
											: tc.parseInline
								)(l, i);
								return i.hooks ? await i.hooks.postprocess(s) : s;
							})().catch(l);
						try {
							i.hooks && (t = i.hooks.preprocess(t));
							let n = (
								i.hooks ? i.hooks.provideLexer() : e ? ts.lex : ts.lexInline
							)(t, i);
							(i.hooks && (n = i.hooks.processAllTokens(n)),
								i.walkTokens && this.walkTokens(n, i.walkTokens));
							let r = (
								i.hooks
									? i.hooks.provideParser()
									: e
										? tc.parse
										: tc.parseInline
							)(n, i);
							return (i.hooks && (r = i.hooks.postprocess(r)), r);
						} catch (e) {
							return l(e);
						}
					};
				}
				onError(e, t) {
					return (n) => {
						if (
							((n.message +=
								'\nPlease report this to https://github.com/markedjs/marked.'),
							e)
						) {
							let e =
								'<p>An error occurred:</p><pre>' +
								te(n.message + '', !0) +
								'</pre>';
							return t ? Promise.resolve(e) : e;
						}
						if (t) return Promise.reject(n);
						throw n;
					};
				}
				constructor(...e) {
					(eo(this, 'defaults', ec()),
						eo(this, 'options', this.setOptions),
						eo(this, 'parse', this.parseMarkdown(!0)),
						eo(this, 'parseInline', this.parseMarkdown(!1)),
						eo(this, 'Parser', tc),
						eo(this, 'Renderer', ta),
						eo(this, 'TextRenderer', to),
						eo(this, 'Lexer', ts),
						eo(this, 'Tokenizer', tl),
						eo(this, 'Hooks', tp),
						this.use(...e));
				}
			})();
		function th(e, t) {
			return tu.parse(e, t);
		}
		((th.options = th.setOptions =
			function (e) {
				return (
					tu.setOptions(e),
					(th.defaults = tu.defaults),
					(ep = th.defaults),
					th
				);
			}),
			(th.getDefaults = ec),
			(th.defaults = ep),
			(th.use = function () {
				for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
					t[n] = arguments[n];
				return (
					tu.use(...t),
					(th.defaults = tu.defaults),
					(ep = th.defaults),
					th
				);
			}),
			(th.walkTokens = function (e, t) {
				return tu.walkTokens(e, t);
			}),
			(th.parseInline = tu.parseInline),
			(th.Parser = tc),
			(th.parser = tc.parse),
			(th.Renderer = ta),
			(th.TextRenderer = to),
			(th.Lexer = ts),
			(th.lexer = ts.lex),
			(th.Tokenizer = tl),
			(th.Hooks = tp),
			(th.parse = th),
			th.options,
			th.setOptions,
			th.use,
			th.walkTokens,
			th.parseInline,
			tc.parse,
			ts.lex);
		let td = () => {
			let [{ markdown: e = el.INITIAL_MARKDOWN, html: t = '' }, n] = (0,
			er.useState)({ markdown: el.INITIAL_MARKDOWN, html: '' });
			return (
				(0, er.useEffect)(() => {
					(async () => {
						let t = await th(e);
						n((e) => ({ ...e, html: t }));
					})();
				}, [e]),
				(0, r.jsxs)('div', {
					className: 'flex h-screen w-screen flex-col overflow-hidden',
					children: [
						(0, r.jsx)(ea, {}),
						(0, r.jsx)('div', {
							className: 'w-full border-t border-neutral-800',
						}),
						(0, r.jsxs)('div', {
							className:
								'grid grow divide-x divide-neutral-800 overflow-hidden md:grid-cols-2',
							children: [
								(0, r.jsx)('div', {
									className: 'h-full overflow-hidden md:col-span-1',
									children: (0, r.jsx)('textarea', {
										id: 'markdown',
										name: 'markdown',
										placeholder: 'Markdown',
										className:
											'scrollbar-none h-full w-full resize-none p-4 focus:outline-none md:p-8',
										value: e,
										onChange: (e) => {
											n((t) => ({ ...t, markdown: e.target.value }));
										},
									}),
								}),
								(0, r.jsx)('div', {
									className: 'h-full overflow-hidden md:col-span-1',
									children: (0, r.jsx)('div', {
										className:
											'scrollbar-none h-full w-full overflow-auto p-4 md:p-8',
										children: (0, r.jsx)(ei, { html: t }),
									}),
								}),
							],
						}),
					],
				})
			);
		};
	},
	5075,
	(e, t, n) => {
		((window.__NEXT_P = window.__NEXT_P || []).push(['/', () => e.r(7856)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push(['/']);
				}));
	},
]);
