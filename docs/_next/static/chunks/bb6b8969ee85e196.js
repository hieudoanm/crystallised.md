(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	7856,
	(e) => {
		'use strict';
		var t,
			n = e.i(4601);
		let {
				entries: r,
				setPrototypeOf: i,
				isFrozen: l,
				getPrototypeOf: s,
				getOwnPropertyDescriptor: a,
			} = Object,
			{ freeze: o, seal: c, create: p } = Object,
			{ apply: u, construct: h } = 'undefined' != typeof Reflect && Reflect;
		(o ||
			(o = function (e) {
				return e;
			}),
			c ||
				(c = function (e) {
					return e;
				}),
			u ||
				(u = function (e, t) {
					for (
						var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
						i < n;
						i++
					)
						r[i - 2] = arguments[i];
					return e.apply(t, r);
				}),
			h ||
				(h = function (e) {
					for (
						var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
						r < t;
						r++
					)
						n[r - 1] = arguments[r];
					return new e(...n);
				}));
		let d = E(Array.prototype.forEach),
			f = E(Array.prototype.lastIndexOf),
			g = E(Array.prototype.pop),
			m = E(Array.prototype.push),
			k = E(Array.prototype.splice),
			x = E(String.prototype.toLowerCase),
			b = E(String.prototype.toString),
			w = E(String.prototype.match),
			y = E(String.prototype.replace),
			T = E(String.prototype.indexOf),
			S = E(String.prototype.trim),
			A = E(Object.prototype.hasOwnProperty),
			_ = E(RegExp.prototype.test),
			R =
				((t = TypeError),
				function () {
					for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
						n[r] = arguments[r];
					return h(t, n);
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
				return u(e, t, r);
			};
		}
		function N(e, t) {
			let n =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : x;
			i && i(e, null);
			let r = t.length;
			for (; r--; ) {
				let i = t[r];
				if ('string' == typeof i) {
					let e = n(i);
					e !== i && (l(t) || (t[r] = e), (i = e));
				}
				e[i] = !0;
			}
			return e;
		}
		function v(e) {
			let t = p(null);
			for (let [n, i] of r(e))
				A(e, n) &&
					(Array.isArray(i)
						? (t[n] = (function (e) {
								for (let t = 0; t < e.length; t++) A(e, t) || (e[t] = null);
								return e;
							})(i))
						: i && 'object' == typeof i && i.constructor === Object
							? (t[n] = v(i))
							: (t[n] = i));
			return t;
		}
		function C(e, t) {
			for (; null !== e; ) {
				let n = a(e, t);
				if (n) {
					if (n.get) return E(n.get);
					if ('function' == typeof n.value) return E(n.value);
				}
				e = s(e);
			}
			return function () {
				return null;
			};
		}
		let L = o([
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
			I = o([
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
			z = o([
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
			$ = o([
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
			D = o([
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
			O = o([
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
			M = o(['#text']),
			P = o([
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
			B = o([
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
				'mask-type',
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
			U = o([
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
			H = o([
				'xlink:href',
				'xml:id',
				'xlink:title',
				'xml:space',
				'xmlns:xlink',
			]),
			j = c(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
			F = c(/<%[\w\W]*|[\w\W]*%>/gm),
			q = c(/\$\{[\w\W]*/gm),
			G = c(/^data-[\-\w.\u00B7-\uFFFF]+$/),
			W = c(/^aria-[\-\w]+$/),
			Z = c(
				/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
			),
			Y = c(/^(?:\w+script|data):/i),
			X = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
			Q = c(/^html$/i);
		var K = Object.freeze({
			__proto__: null,
			ARIA_ATTR: W,
			ATTR_WHITESPACE: X,
			CUSTOM_ELEMENT: c(/^[a-z][.\w]*(-[.\w]+)+$/i),
			DATA_ATTR: G,
			DOCTYPE_NAME: Q,
			ERB_EXPR: F,
			IS_ALLOWED_URI: Z,
			IS_SCRIPT_OR_DATA: Y,
			MUSTACHE_EXPR: j,
			TMPLIT_EXPR: q,
		});
		let V = function (e, t) {
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
			J = function () {
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
		var ee = (function e() {
				let t,
					n =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: 'undefined' == typeof window
								? null
								: window,
					i = (t) => e(t);
				if (
					((i.version = '3.3.0'),
					(i.removed = []),
					!n || !n.document || 9 !== n.document.nodeType || !n.Element)
				)
					return ((i.isSupported = !1), i);
				let { document: l } = n,
					s = l,
					a = s.currentScript,
					{
						DocumentFragment: c,
						HTMLTemplateElement: u,
						Node: h,
						Element: E,
						NodeFilter: j,
						NamedNodeMap: F = n.NamedNodeMap || n.MozNamedAttrMap,
						HTMLFormElement: q,
						DOMParser: G,
						trustedTypes: W,
					} = n,
					Y = E.prototype,
					X = C(Y, 'cloneNode'),
					ee = C(Y, 'remove'),
					et = C(Y, 'nextSibling'),
					en = C(Y, 'childNodes'),
					er = C(Y, 'parentNode');
				if ('function' == typeof u) {
					let e = l.createElement('template');
					e.content && e.content.ownerDocument && (l = e.content.ownerDocument);
				}
				let ei = '',
					{
						implementation: el,
						createNodeIterator: es,
						createDocumentFragment: ea,
						getElementsByTagName: eo,
					} = l,
					{ importNode: ec } = s,
					ep = J();
				i.isSupported =
					'function' == typeof r &&
					'function' == typeof er &&
					el &&
					void 0 !== el.createHTMLDocument;
				let {
						MUSTACHE_EXPR: eu,
						ERB_EXPR: eh,
						TMPLIT_EXPR: ed,
						DATA_ATTR: ef,
						ARIA_ATTR: eg,
						IS_SCRIPT_OR_DATA: em,
						ATTR_WHITESPACE: ek,
						CUSTOM_ELEMENT: ex,
					} = K,
					{ IS_ALLOWED_URI: eb } = K,
					ew = null,
					ey = N({}, [...L, ...I, ...z, ...D, ...M]),
					eT = null,
					eS = N({}, [...P, ...B, ...U, ...H]),
					eA = Object.seal(
						p(null, {
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
					e_ = null,
					eR = null,
					eE = Object.seal(
						p(null, {
							tagCheck: {
								writable: !0,
								configurable: !1,
								enumerable: !0,
								value: null,
							},
							attributeCheck: {
								writable: !0,
								configurable: !1,
								enumerable: !0,
								value: null,
							},
						}),
					),
					eN = !0,
					ev = !0,
					eC = !1,
					eL = !0,
					eI = !1,
					ez = !0,
					e$ = !1,
					eD = !1,
					eO = !1,
					eM = !1,
					eP = !1,
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
					e2 = N({}, [eK, eV, eJ], b),
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
								(e = v(e)),
								(e7 =
									'application/xhtml+xml' ===
									(e8 =
										-1 === e5.indexOf(e.PARSER_MEDIA_TYPE)
											? 'text/html'
											: e.PARSER_MEDIA_TYPE)
										? b
										: x),
								(ew = A(e, 'ALLOWED_TAGS') ? N({}, e.ALLOWED_TAGS, e7) : ey),
								(eT = A(e, 'ALLOWED_ATTR') ? N({}, e.ALLOWED_ATTR, e7) : eS),
								(e3 = A(e, 'ALLOWED_NAMESPACES')
									? N({}, e.ALLOWED_NAMESPACES, b)
									: e2),
								(eX = A(e, 'ADD_URI_SAFE_ATTR')
									? N(v(eQ), e.ADD_URI_SAFE_ATTR, e7)
									: eQ),
								(eZ = A(e, 'ADD_DATA_URI_TAGS')
									? N(v(eY), e.ADD_DATA_URI_TAGS, e7)
									: eY),
								(eG = A(e, 'FORBID_CONTENTS')
									? N({}, e.FORBID_CONTENTS, e7)
									: eW),
								(e_ = A(e, 'FORBID_TAGS') ? N({}, e.FORBID_TAGS, e7) : v({})),
								(eR = A(e, 'FORBID_ATTR') ? N({}, e.FORBID_ATTR, e7) : v({})),
								(eq = !!A(e, 'USE_PROFILES') && e.USE_PROFILES),
								(eN = !1 !== e.ALLOW_ARIA_ATTR),
								(ev = !1 !== e.ALLOW_DATA_ATTR),
								(eC = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
								(eL = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
								(eI = e.SAFE_FOR_TEMPLATES || !1),
								(ez = !1 !== e.SAFE_FOR_XML),
								(e$ = e.WHOLE_DOCUMENT || !1),
								(eM = e.RETURN_DOM || !1),
								(eP = e.RETURN_DOM_FRAGMENT || !1),
								(eB = e.RETURN_TRUSTED_TYPE || !1),
								(eO = e.FORCE_BODY || !1),
								(eU = !1 !== e.SANITIZE_DOM),
								(eH = e.SANITIZE_NAMED_PROPS || !1),
								(ej = !1 !== e.KEEP_CONTENT),
								(eF = e.IN_PLACE || !1),
								(eb = e.ALLOWED_URI_REGEXP || Z),
								(e0 = e.NAMESPACE || eJ),
								(e9 = e.MATHML_TEXT_INTEGRATION_POINTS || e9),
								(e6 = e.HTML_INTEGRATION_POINTS || e6),
								(eA = e.CUSTOM_ELEMENT_HANDLING || {}),
								e.CUSTOM_ELEMENT_HANDLING &&
									tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
									(eA.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
								e.CUSTOM_ELEMENT_HANDLING &&
									tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
									(eA.attributeNameCheck =
										e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
								e.CUSTOM_ELEMENT_HANDLING &&
									'boolean' ==
										typeof e.CUSTOM_ELEMENT_HANDLING
											.allowCustomizedBuiltInElements &&
									(eA.allowCustomizedBuiltInElements =
										e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
								eI && (ev = !1),
								eP && (eM = !0),
								eq &&
									((ew = N({}, M)),
									(eT = []),
									!0 === eq.html && (N(ew, L), N(eT, P)),
									!0 === eq.svg && (N(ew, I), N(eT, B), N(eT, H)),
									!0 === eq.svgFilters && (N(ew, z), N(eT, B), N(eT, H)),
									!0 === eq.mathMl && (N(ew, D), N(eT, U), N(eT, H))),
								e.ADD_TAGS &&
									('function' == typeof e.ADD_TAGS
										? (eE.tagCheck = e.ADD_TAGS)
										: (ew === ey && (ew = v(ew)), N(ew, e.ADD_TAGS, e7))),
								e.ADD_ATTR &&
									('function' == typeof e.ADD_ATTR
										? (eE.attributeCheck = e.ADD_ATTR)
										: (eT === eS && (eT = v(eT)), N(eT, e.ADD_ATTR, e7))),
								e.ADD_URI_SAFE_ATTR && N(eX, e.ADD_URI_SAFE_ATTR, e7),
								e.FORBID_CONTENTS &&
									(eG === eW && (eG = v(eG)), N(eG, e.FORBID_CONTENTS, e7)),
								ej && (ew['#text'] = !0),
								e$ && N(ew, ['html', 'head', 'body']),
								ew.table && (N(ew, ['tbody']), delete e_.tbody),
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
								ei = (t = e.TRUSTED_TYPES_POLICY).createHTML('');
							} else
								(void 0 === t && (t = V(W, a)),
									null !== t &&
										'string' == typeof ei &&
										(ei = t.createHTML('')));
							(o && o(e), (te = e));
						}
					},
					ti = N({}, [...I, ...z, ...$]),
					tl = N({}, [...D, ...O]),
					ts = function (e) {
						let t = er(e);
						(t && t.tagName) || (t = { namespaceURI: e0, tagName: 'template' });
						let n = x(e.tagName),
							r = x(t.tagName);
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
						m(i.removed, { element: e });
						try {
							er(e).removeChild(e);
						} catch (t) {
							ee(e);
						}
					},
					to = function (e, t) {
						try {
							m(i.removed, { attribute: t.getAttributeNode(e), from: t });
						} catch (e) {
							m(i.removed, { attribute: null, from: t });
						}
						if ((t.removeAttribute(e), 'is' === e))
							if (eM || eP)
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
						if (eO) e = '<remove></remove>' + e;
						else {
							let t = w(e, /^[\r\n\t ]+/);
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
							n = el.createDocument(e0, 'template', null);
							try {
								n.documentElement.innerHTML = e1 ? ei : i;
							} catch (e) {}
						}
						let s = n.body || n.documentElement;
						return (e &&
							r &&
							s.insertBefore(l.createTextNode(r), s.childNodes[0] || null),
						e0 === eJ)
							? eo.call(n, e$ ? 'html' : 'body')[0]
							: e$
								? n.documentElement
								: s;
					},
					tp = function (e) {
						return es.call(
							e.ownerDocument || e,
							e,
							j.SHOW_ELEMENT |
								j.SHOW_COMMENT |
								j.SHOW_TEXT |
								j.SHOW_PROCESSING_INSTRUCTION |
								j.SHOW_CDATA_SECTION,
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
					d(e, (e) => {
						e.call(i, t, n, te);
					});
				}
				let tf = function (e) {
						let t = null;
						if ((td(ep.beforeSanitizeElements, e, null), tu(e)))
							return (ta(e), !0);
						let n = e7(e.nodeName);
						if (
							(td(ep.uponSanitizeElement, e, { tagName: n, allowedTags: ew }),
							(ez &&
								e.hasChildNodes() &&
								!th(e.firstElementChild) &&
								_(/<[/\w!]/g, e.innerHTML) &&
								_(/<[/\w!]/g, e.textContent)) ||
								7 === e.nodeType ||
								(ez && 8 === e.nodeType && _(/<[/\w]/g, e.data)))
						)
							return (ta(e), !0);
						if (
							!(eE.tagCheck instanceof Function && eE.tagCheck(n)) &&
							(!ew[n] || e_[n])
						) {
							if (
								!e_[n] &&
								tm(n) &&
								((eA.tagNameCheck instanceof RegExp && _(eA.tagNameCheck, n)) ||
									(eA.tagNameCheck instanceof Function && eA.tagNameCheck(n)))
							)
								return !1;
							if (ej && !eG[n]) {
								let t = er(e) || e.parentNode,
									n = en(e) || e.childNodes;
								if (n && t) {
									let r = n.length;
									for (let i = r - 1; i >= 0; --i) {
										let r = X(n[i], !0);
										((r.__removalCount = (e.__removalCount || 0) + 1),
											t.insertBefore(r, et(e)));
									}
								}
							}
							return (ta(e), !0);
						}
						return (e instanceof E && !ts(e)) ||
							(('noscript' === n || 'noembed' === n || 'noframes' === n) &&
								_(/<\/no(script|embed|frames)/i, e.innerHTML))
							? (ta(e), !0)
							: (eI &&
									3 === e.nodeType &&
									((t = e.textContent),
									d([eu, eh, ed], (e) => {
										t = y(t, e, ' ');
									}),
									e.textContent !== t &&
										(m(i.removed, { element: e.cloneNode() }),
										(e.textContent = t))),
								td(ep.afterSanitizeElements, e, null),
								!1);
					},
					tg = function (e, t, n) {
						if (eU && ('id' === t || 'name' === t) && (n in l || n in tt))
							return !1;
						if (ev && !eR[t] && _(ef, t));
						else if (eN && _(eg, t));
						else if (
							eE.attributeCheck instanceof Function &&
							eE.attributeCheck(t, e)
						);
						else if (!eT[t] || eR[t]) {
							if (
								!(
									(tm(e) &&
										((eA.tagNameCheck instanceof RegExp &&
											_(eA.tagNameCheck, e)) ||
											(eA.tagNameCheck instanceof Function &&
												eA.tagNameCheck(e))) &&
										((eA.attributeNameCheck instanceof RegExp &&
											_(eA.attributeNameCheck, t)) ||
											(eA.attributeNameCheck instanceof Function &&
												eA.attributeNameCheck(t, e)))) ||
									('is' === t &&
										eA.allowCustomizedBuiltInElements &&
										((eA.tagNameCheck instanceof RegExp &&
											_(eA.tagNameCheck, n)) ||
											(eA.tagNameCheck instanceof Function &&
												eA.tagNameCheck(n))))
								)
							)
								return !1;
						} else if (eX[t]);
						else if (_(eb, y(n, ek, '')));
						else if (
							('src' === t || 'xlink:href' === t || 'href' === t) &&
							'script' !== e &&
							0 === T(n, 'data:') &&
							eZ[e]
						);
						else if (eC && !_(em, y(n, ek, '')));
						else if (n) return !1;
						return !0;
					},
					tm = function (e) {
						return 'annotation-xml' !== e && w(e, ex);
					},
					tk = function (e) {
						td(ep.beforeSanitizeAttributes, e, null);
						let { attributes: n } = e;
						if (!n || tu(e)) return;
						let r = {
								attrName: '',
								attrValue: '',
								keepAttr: !0,
								allowedAttributes: eT,
								forceKeepAttr: void 0,
							},
							l = n.length;
						for (; l--; ) {
							let { name: s, namespaceURI: a, value: o } = n[l],
								c = e7(s),
								p = 'value' === s ? o : S(o);
							if (
								((r.attrName = c),
								(r.attrValue = p),
								(r.keepAttr = !0),
								(r.forceKeepAttr = void 0),
								td(ep.uponSanitizeAttribute, e, r),
								(p = r.attrValue),
								eH &&
									('id' === c || 'name' === c) &&
									(to(s, e), (p = 'user-content-' + p)),
								(ez && _(/((--!?|])>)|<\/(style|title|textarea)/i, p)) ||
									('attributename' === c && w(p, 'href')))
							) {
								to(s, e);
								continue;
							}
							if (r.forceKeepAttr) continue;
							if (!r.keepAttr || (!eL && _(/\/>/i, p))) {
								to(s, e);
								continue;
							}
							eI &&
								d([eu, eh, ed], (e) => {
									p = y(p, e, ' ');
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
										tu(e) ? ta(e) : g(i.removed));
								} catch (t) {
									to(s, e);
								}
						}
						td(ep.afterSanitizeAttributes, e, null);
					},
					tx = function e(t) {
						let n = null,
							r = tp(t);
						for (td(ep.beforeSanitizeShadowDOM, t, null); (n = r.nextNode()); )
							(td(ep.uponSanitizeShadowNode, n, null),
								tf(n),
								tk(n),
								n.content instanceof c && e(n.content));
						td(ep.afterSanitizeShadowDOM, t, null);
					};
				return (
					(i.sanitize = function (e) {
						let n =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {},
							r = null,
							l = null,
							a = null,
							o = null;
						if (((e1 = !e) && (e = '<!-->'), 'string' != typeof e && !th(e)))
							if ('function' == typeof e.toString) {
								if ('string' != typeof (e = e.toString()))
									throw R('dirty is not a string, aborting');
							} else throw R('toString is not a function');
						if (!i.isSupported) return e;
						if (
							(eD || tr(n),
							(i.removed = []),
							'string' == typeof e && (eF = !1),
							eF)
						) {
							if (e.nodeName) {
								let t = e7(e.nodeName);
								if (!ew[t] || e_[t])
									throw R(
										'root node is forbidden and cannot be sanitized in-place',
									);
							}
						} else if (e instanceof h)
							(1 ===
								(l = (r = tc('<!---->')).ownerDocument.importNode(e, !0))
									.nodeType &&
								'BODY' === l.nodeName) ||
							'HTML' === l.nodeName
								? (r = l)
								: r.appendChild(l);
						else {
							if (!eM && !eI && !e$ && -1 === e.indexOf('<'))
								return t && eB ? t.createHTML(e) : e;
							if (!(r = tc(e))) return eM ? null : eB ? ei : '';
						}
						r && eO && ta(r.firstChild);
						let p = tp(eF ? e : r);
						for (; (a = p.nextNode()); )
							(tf(a), tk(a), a.content instanceof c && tx(a.content));
						if (eF) return e;
						if (eM) {
							if (eP)
								for (o = ea.call(r.ownerDocument); r.firstChild; )
									o.appendChild(r.firstChild);
							else o = r;
							return (
								(eT.shadowroot || eT.shadowrootmode) && (o = ec.call(s, o, !0)),
								o
							);
						}
						let u = e$ ? r.outerHTML : r.innerHTML;
						return (
							e$ &&
								ew['!doctype'] &&
								r.ownerDocument &&
								r.ownerDocument.doctype &&
								r.ownerDocument.doctype.name &&
								_(Q, r.ownerDocument.doctype.name) &&
								(u = '<!DOCTYPE ' + r.ownerDocument.doctype.name + '>\n' + u),
							eI &&
								d([eu, eh, ed], (e) => {
									u = y(u, e, ' ');
								}),
							t && eB ? t.createHTML(u) : u
						);
					}),
					(i.setConfig = function () {
						let e =
							arguments.length > 0 && void 0 !== arguments[0]
								? arguments[0]
								: {};
						(tr(e), (eD = !0));
					}),
					(i.clearConfig = function () {
						((te = null), (eD = !1));
					}),
					(i.isValidAttribute = function (e, t, n) {
						return (te || tr({}), tg(e7(e), e7(t), n));
					}),
					(i.addHook = function (e, t) {
						'function' == typeof t && m(ep[e], t);
					}),
					(i.removeHook = function (e, t) {
						if (void 0 !== t) {
							let n = f(ep[e], t);
							return -1 === n ? void 0 : k(ep[e], n, 1)[0];
						}
						return g(ep[e]);
					}),
					(i.removeHooks = function (e) {
						ep[e] = [];
					}),
					(i.removeAllHooks = function () {
						ep = J();
					}),
					i
				);
			})(),
			et = e.i(6960);
		let en = ({ html: e = '' }) => {
			let [t, r] = (0, et.useState)('');
			return (
				(0, et.useEffect)(() => {
					r(ee.sanitize(e));
				}, [e]),
				(0, n.jsx)('div', {
					dangerouslySetInnerHTML: { __html: t },
					className: 'markdown-body h-full w-full !bg-black !text-neutral-100',
				})
			);
		};
		var er = e.i(3083),
			ei = e.i(4017);
		let el = () =>
			(0, n.jsx)('nav', {
				children: (0, n.jsx)('div', {
					className: 'mx-auto px-4 py-2 md:px-8 md:py-4',
					children: (0, n.jsxs)('div', {
						className: 'flex items-center justify-between',
						children: [
							(0, n.jsx)('div', {
								className: 'text-xl font-bold',
								children: (0, n.jsx)(ei.default, {
									href: '/',
									children: er.APP_NAME,
								}),
							}),
							(0, n.jsx)(ei.default, { href: '/posts', children: 'Notes' }),
						],
					}),
				}),
			});
		function es() {
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
		var ea = es(),
			eo = { exec: () => null };
		function ec(e, t = '') {
			let n = 'string' == typeof e ? e : e.source,
				r = {
					replace: (e, t) => {
						let i = 'string' == typeof t ? t : t.source;
						return ((i = i.replace(ep.caret, '$1')), (n = n.replace(e, i)), r);
					},
					getRegex: () => new RegExp(n, t),
				};
			return r;
		}
		var ep = {
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
				unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
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
				listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
				nextBulletRegex: (e) =>
					RegExp(
						`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
					),
				hrRegex: (e) =>
					RegExp(
						`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
					),
				fencesBeginRegex: (e) =>
					RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
				headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
				htmlBeginRegex: (e) =>
					RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, 'i'),
			},
			eu = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
			eh = /(?:[*+-]|\d{1,9}[.)])/,
			ed =
				/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
			ef = ec(ed)
				.replace(/bull/g, eh)
				.replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
				.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
				.replace(/blockquote/g, / {0,3}>/)
				.replace(/heading/g, / {0,3}#{1,6}/)
				.replace(/html/g, / {0,3}<[^\n>]+>\n/)
				.replace(/\|table/g, '')
				.getRegex(),
			eg = ec(ed)
				.replace(/bull/g, eh)
				.replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
				.replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
				.replace(/blockquote/g, / {0,3}>/)
				.replace(/heading/g, / {0,3}#{1,6}/)
				.replace(/html/g, / {0,3}<[^\n>]+>\n/)
				.replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
				.getRegex(),
			em =
				/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
			ek = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
			ex = ec(
				/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
			)
				.replace('label', ek)
				.replace(
					'title',
					/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
				)
				.getRegex(),
			eb = ec(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
				.replace(/bull/g, eh)
				.getRegex(),
			ew =
				'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
			ey = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
			eT = ec(
				'^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))',
				'i',
			)
				.replace('comment', ey)
				.replace('tag', ew)
				.replace(
					'attribute',
					/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
				)
				.getRegex(),
			eS = ec(em)
				.replace('hr', eu)
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
				.replace('tag', ew)
				.getRegex(),
			eA = {
				blockquote: ec(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
					.replace('paragraph', eS)
					.getRegex(),
				code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
				def: ex,
				fences:
					/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
				heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
				hr: eu,
				html: eT,
				lheading: ef,
				list: eb,
				newline: /^(?:[ \t]*(?:\n|$))+/,
				paragraph: eS,
				table: eo,
				text: /^[^\n]+/,
			},
			e_ = ec(
				'^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
			)
				.replace('hr', eu)
				.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
				.replace('blockquote', ' {0,3}>')
				.replace('code', '(?: {4}| {0,3}	)[^\\n]')
				.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
				.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
				.replace(
					'html',
					'</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
				)
				.replace('tag', ew)
				.getRegex(),
			eR = {
				...eA,
				lheading: eg,
				table: e_,
				paragraph: ec(em)
					.replace('hr', eu)
					.replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
					.replace('|lheading', '')
					.replace('table', e_)
					.replace('blockquote', ' {0,3}>')
					.replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
					.replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
					.replace(
						'html',
						'</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
					)
					.replace('tag', ew)
					.getRegex(),
			},
			eE = {
				...eA,
				html: ec(
					`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
				)
					.replace('comment', ey)
					.replace(
						/tag/g,
						'(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
					)
					.getRegex(),
				def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
				heading: /^(#{1,6})(.*)(?:\n+|$)/,
				fences: eo,
				lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
				paragraph: ec(em)
					.replace('hr', eu)
					.replace(
						'heading',
						` *#{1,6} *[^
]`,
					)
					.replace('lheading', ef)
					.replace('|table', '')
					.replace('blockquote', ' {0,3}>')
					.replace('|fences', '')
					.replace('|list', '')
					.replace('|html', '')
					.replace('|tag', '')
					.getRegex(),
			},
			eN = /^( {2,}|\\)\n(?!\s*$)/,
			ev = /[\p{P}\p{S}]/u,
			eC = /[\s\p{P}\p{S}]/u,
			eL = /[^\s\p{P}\p{S}]/u,
			eI = ec(/^((?![*_])punctSpace)/, 'u')
				.replace(/punctSpace/g, eC)
				.getRegex(),
			ez = /(?!~)[\p{P}\p{S}]/u,
			e$ = ec(/link|code|html/, 'g')
				.replace(
					'link',
					/\[(?:[^\[\]`]|(?<!`)(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
				)
				.replace('code', /(?<!`)(?<b>`+)[^`]+\k<b>(?!`)/)
				.replace('html', /<(?! )[^<>]*?>/)
				.getRegex(),
			eD = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
			eO = ec(eD, 'u').replace(/punct/g, ev).getRegex(),
			eM = ec(eD, 'u').replace(/punct/g, ez).getRegex(),
			eP =
				'^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)',
			eB = ec(eP, 'gu')
				.replace(/notPunctSpace/g, eL)
				.replace(/punctSpace/g, eC)
				.replace(/punct/g, ev)
				.getRegex(),
			eU = ec(eP, 'gu')
				.replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u)
				.replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u)
				.replace(/punct/g, ez)
				.getRegex(),
			eH = ec(
				'^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)',
				'gu',
			)
				.replace(/notPunctSpace/g, eL)
				.replace(/punctSpace/g, eC)
				.replace(/punct/g, ev)
				.getRegex(),
			ej = ec(/\\(punct)/, 'gu')
				.replace(/punct/g, ev)
				.getRegex(),
			eF = ec(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
				.replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
				.replace(
					'email',
					/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
				)
				.getRegex(),
			eq = ec(ey).replace('(?:-->|$)', '-->').getRegex(),
			eG = ec(
				'^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
			)
				.replace('comment', eq)
				.replace(
					'attribute',
					/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
				)
				.getRegex(),
			eW =
				/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,
			eZ = ec(
				/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/,
			)
				.replace('label', eW)
				.replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
				.replace(
					'title',
					/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
				)
				.getRegex(),
			eY = ec(/^!?\[(label)\]\[(ref)\]/)
				.replace('label', eW)
				.replace('ref', ek)
				.getRegex(),
			eX = ec(/^!?\[(ref)\](?:\[\])?/)
				.replace('ref', ek)
				.getRegex(),
			eQ = ec('reflink|nolink(?!\\()', 'g')
				.replace('reflink', eY)
				.replace('nolink', eX)
				.getRegex(),
			eK = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
			eV = {
				_backpedal: eo,
				anyPunctuation: ej,
				autolink: eF,
				blockSkip: e$,
				br: eN,
				code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
				del: eo,
				emStrongLDelim: eO,
				emStrongRDelimAst: eB,
				emStrongRDelimUnd: eH,
				escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
				link: eZ,
				nolink: eX,
				punctuation: eI,
				reflink: eY,
				reflinkSearch: eQ,
				tag: eG,
				text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
				url: eo,
			},
			eJ = {
				...eV,
				link: ec(/^!?\[(label)\]\((.*?)\)/)
					.replace('label', eW)
					.getRegex(),
				reflink: ec(/^!?\[(label)\]\s*\[([^\]]*)\]/)
					.replace('label', eW)
					.getRegex(),
			},
			e0 = {
				...eV,
				emStrongRDelimAst: eU,
				emStrongLDelim: eM,
				url: ec(
					/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
				)
					.replace('protocol', eK)
					.replace(
						'email',
						/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
					)
					.getRegex(),
				_backpedal:
					/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
				del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
				text: ec(
					/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
				)
					.replace('protocol', eK)
					.getRegex(),
			},
			e1 = {
				...e0,
				br: ec(eN).replace('{2,}', '*').getRegex(),
				text: ec(e0.text)
					.replace('\\b_', '\\b_| {2,}\\n')
					.replace(/\{2,\}/g, '*')
					.getRegex(),
			},
			e3 = { normal: eA, gfm: eR, pedantic: eE },
			e2 = { normal: eV, gfm: e0, breaks: e1, pedantic: eJ },
			e9 = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;',
			},
			e6 = (e) => e9[e];
		function e4(e, t) {
			if (t) {
				if (ep.escapeTest.test(e)) return e.replace(ep.escapeReplace, e6);
			} else if (ep.escapeTestNoEncode.test(e))
				return e.replace(ep.escapeReplaceNoEncode, e6);
			return e;
		}
		function e8(e) {
			try {
				e = encodeURI(e).replace(ep.percentDecode, '%');
			} catch {
				return null;
			}
			return e;
		}
		function e5(e, t) {
			let n = e
					.replace(ep.findPipe, (e, t, n) => {
						let r = !1,
							i = t;
						for (; --i >= 0 && '\\' === n[i]; ) r = !r;
						return r ? '|' : ' |';
					})
					.split(ep.splitPipe),
				r = 0;
			if (
				(n[0].trim() || n.shift(),
				n.length > 0 && !n.at(-1)?.trim() && n.pop(),
				t)
			)
				if (n.length > t) n.splice(t);
				else for (; n.length < t; ) n.push('');
			for (; r < n.length; r++) n[r] = n[r].trim().replace(ep.slashPipe, '|');
			return n;
		}
		function e7(e, t, n) {
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
		function te(e, t, n, r, i) {
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
		var tt = class {
				options;
				rules;
				lexer;
				constructor(e) {
					this.options = e || ea;
				}
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
							text: this.options.pedantic
								? e
								: e7(
										e,
										`
`,
									),
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
									.split(
										`
`,
									)
									.map((e) => {
										let t = e.match(n.other.beginningSpace);
										if (null === t) return e;
										let [r] = t;
										return r.length >= i.length ? e.slice(i.length) : e;
									}).join(`
`);
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
							let t = e7(e, '#');
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
					if (t)
						return {
							type: 'hr',
							raw: e7(
								t[0],
								`
`,
							),
						};
				}
				blockquote(e) {
					let t = this.rules.block.blockquote.exec(e);
					if (t) {
						let e = e7(
								t[0],
								`
`,
							).split(`
`),
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
							let a = l.join(`
`),
								o = a
									.replace(
										this.rules.other.blockquoteSetextReplace,
										`
    $1`,
									)
									.replace(this.rules.other.blockquoteSetextReplace2, '');
							((n = n
								? `${n}
${a}`
								: a),
								(r = r
									? `${r}
${o}`
									: o));
							let c = this.lexer.state.top;
							if (
								((this.lexer.state.top = !0),
								this.lexer.blockTokens(o, i, !0),
								(this.lexer.state.top = c),
								0 === e.length)
							)
								break;
							let p = i.at(-1);
							if (p?.type === 'code') break;
							if (p?.type === 'blockquote') {
								let t =
										p.raw +
										`
` +
										e.join(`
`),
									l = this.blockquote(t);
								((i[i.length - 1] = l),
									(n = n.substring(0, n.length - p.raw.length) + l.raw),
									(r = r.substring(0, r.length - p.text.length) + l.text));
								break;
							}
							if (p?.type === 'list') {
								let t =
										p.raw +
										`
` +
										e.join(`
`),
									l = this.list(t);
								((i[i.length - 1] = l),
									(n = n.substring(0, n.length - p.raw.length) + l.raw),
									(r = r.substring(0, r.length - p.raw.length) + l.raw),
									(e = t.substring(i.at(-1).raw.length).split(`
`)));
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
						((n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
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
									.split(
										`
`,
										1,
									)[0]
									.replace(this.rules.other.listReplaceTabs, (e) =>
										' '.repeat(3 * e.length),
									),
								c = e.split(
									`
`,
									1,
								)[0],
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
									((r +=
										c +
										`
`),
									(e = e.substring(c.length + 1)),
									(n = !0)),
								!n)
							) {
								let t = this.rules.other.nextBulletRegex(u),
									n = this.rules.other.hrRegex(u),
									i = this.rules.other.fencesBeginRegex(u),
									l = this.rules.other.headingBeginRegex(u),
									s = this.rules.other.htmlBeginRegex(u);
								for (; e; ) {
									let h = e.split(
											`
`,
											1,
										)[0],
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
										a +=
											`
` + d.slice(u);
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
										a +=
											`
` + c;
									}
									(p || c.trim() || (p = !0),
										(r +=
											h +
											`
`),
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
					let t = this.rules.block.table.exec(e);
					if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
					let n = e5(t[1]),
						r = t[2].replace(this.rules.other.tableAlignChars, '').split('|'),
						i = t[3]?.trim()
							? t[3].replace(this.rules.other.tableRowBlankLine, '').split(`
`)
							: [],
						l = { type: 'table', raw: t[0], header: [], align: [], rows: [] };
					if (n.length === r.length) {
						for (let e of r)
							this.rules.other.tableAlignRight.test(e)
								? l.align.push('right')
								: this.rules.other.tableAlignCenter.test(e)
									? l.align.push('center')
									: this.rules.other.tableAlignLeft.test(e)
										? l.align.push('left')
										: l.align.push(null);
						for (let e = 0; e < n.length; e++)
							l.header.push({
								text: n[e],
								tokens: this.lexer.inline(n[e]),
								header: !0,
								align: l.align[e],
							});
						for (let e of i)
							l.rows.push(
								e5(e, l.header.length).map((e, t) => ({
									text: e,
									tokens: this.lexer.inline(e),
									header: !1,
									align: l.align[t],
								})),
							);
						return l;
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
							t[1].charAt(t[1].length - 1) ===
							`
`
								? t[1].slice(0, -1)
								: t[1];
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
							let t = e7(e.slice(0, -1), '\\');
							if ((e.length - t.length) % 2 == 0) return;
						} else {
							let e = (function (e, t) {
								if (-1 === e.indexOf(')')) return -1;
								let n = 0;
								for (let t = 0; t < e.length; t++)
									if ('\\' === e[t]) t++;
									else if ('(' === e[t]) n++;
									else if (')' === e[t] && --n < 0) return t;
								return n > 0 ? -2 : -1;
							})(t[2], 0);
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
							te(
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
						return te(n, e, n[0], this.lexer, this.rules);
					}
				}
				emStrong(e, t, n = '') {
					let r = this.rules.inline.emStrongLDelim.exec(e);
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
						let e, n;
						if ('@' === t[2]) n = 'mailto:' + (e = t[0]);
						else {
							let r;
							do
								((r = t[0]),
									(t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ''));
							while (r !== t[0]);
							((e = t[0]), (n = 'www.' === t[1] ? 'http://' + t[0] : t[0]));
						}
						return {
							type: 'link',
							raw: t[0],
							text: e,
							href: n,
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
			},
			tn = class e {
				tokens;
				options;
				state;
				tokenizer;
				inlineQueue;
				constructor(e) {
					((this.tokens = []),
						(this.tokens.links = Object.create(null)),
						(this.options = e || ea),
						(this.options.tokenizer = this.options.tokenizer || new tt()),
						(this.tokenizer = this.options.tokenizer),
						(this.tokenizer.options = this.options),
						(this.tokenizer.lexer = this),
						(this.inlineQueue = []),
						(this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
					let t = { other: ep, block: e3.normal, inline: e2.normal };
					(this.options.pedantic
						? ((t.block = e3.pedantic), (t.inline = e2.pedantic))
						: this.options.gfm &&
							((t.block = e3.gfm),
							this.options.breaks
								? (t.inline = e2.breaks)
								: (t.inline = e2.gfm)),
						(this.tokenizer.rules = t));
				}
				static get rules() {
					return { block: e3, inline: e2 };
				}
				static lex(t, n) {
					return new e(n).lex(t);
				}
				static lexInline(t, n) {
					return new e(n).inlineTokens(t);
				}
				lex(e) {
					((e = e.replace(
						ep.carriageReturn,
						`
`,
					)),
						this.blockTokens(e, this.tokens));
					for (let e = 0; e < this.inlineQueue.length; e++) {
						let t = this.inlineQueue[e];
						this.inlineTokens(t.src, t.tokens);
					}
					return ((this.inlineQueue = []), this.tokens);
				}
				blockTokens(e, t = [], n = !1) {
					for (
						this.options.pedantic &&
						(e = e.replace(ep.tabCharGlobal, '    ').replace(ep.spaceLine, ''));
						e;

					) {
						let r;
						if (
							this.options.extensions?.block?.some(
								(n) =>
									!!(r = n.call({ lexer: this }, e, t)) &&
									((e = e.substring(r.raw.length)), t.push(r), !0),
							)
						)
							continue;
						if ((r = this.tokenizer.space(e))) {
							e = e.substring(r.raw.length);
							let n = t.at(-1);
							1 === r.raw.length && void 0 !== n
								? (n.raw += `
`)
								: t.push(r);
							continue;
						}
						if ((r = this.tokenizer.code(e))) {
							e = e.substring(r.raw.length);
							let n = t.at(-1);
							n?.type === 'paragraph' || n?.type === 'text'
								? ((n.raw +=
										(n.raw.endsWith(`
`)
											? ''
											: `
`) + r.raw),
									(n.text +=
										`
` + r.text),
									(this.inlineQueue.at(-1).src = n.text))
								: t.push(r);
							continue;
						}
						if (
							(r = this.tokenizer.fences(e)) ||
							(r = this.tokenizer.heading(e)) ||
							(r = this.tokenizer.hr(e)) ||
							(r = this.tokenizer.blockquote(e)) ||
							(r = this.tokenizer.list(e)) ||
							(r = this.tokenizer.html(e))
						) {
							((e = e.substring(r.raw.length)), t.push(r));
							continue;
						}
						if ((r = this.tokenizer.def(e))) {
							e = e.substring(r.raw.length);
							let n = t.at(-1);
							n?.type === 'paragraph' || n?.type === 'text'
								? ((n.raw +=
										(n.raw.endsWith(`
`)
											? ''
											: `
`) + r.raw),
									(n.text +=
										`
` + r.raw),
									(this.inlineQueue.at(-1).src = n.text))
								: this.tokens.links[r.tag] ||
									((this.tokens.links[r.tag] = {
										href: r.href,
										title: r.title,
									}),
									t.push(r));
							continue;
						}
						if (
							(r = this.tokenizer.table(e)) ||
							(r = this.tokenizer.lheading(e))
						) {
							((e = e.substring(r.raw.length)), t.push(r));
							continue;
						}
						let i = e;
						if (this.options.extensions?.startBlock) {
							let t = 1 / 0,
								n = e.slice(1),
								r;
							(this.options.extensions.startBlock.forEach((e) => {
								'number' == typeof (r = e.call({ lexer: this }, n)) &&
									r >= 0 &&
									(t = Math.min(t, r));
							}),
								t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1)));
						}
						if (this.state.top && (r = this.tokenizer.paragraph(i))) {
							let l = t.at(-1);
							(n && l?.type === 'paragraph'
								? ((l.raw +=
										(l.raw.endsWith(`
`)
											? ''
											: `
`) + r.raw),
									(l.text +=
										`
` + r.text),
									this.inlineQueue.pop(),
									(this.inlineQueue.at(-1).src = l.text))
								: t.push(r),
								(n = i.length !== e.length),
								(e = e.substring(r.raw.length)));
							continue;
						}
						if ((r = this.tokenizer.text(e))) {
							e = e.substring(r.raw.length);
							let n = t.at(-1);
							n?.type === 'text'
								? ((n.raw +=
										(n.raw.endsWith(`
`)
											? ''
											: `
`) + r.raw),
									(n.text +=
										`
` + r.text),
									this.inlineQueue.pop(),
									(this.inlineQueue.at(-1).src = n.text))
								: t.push(r);
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
				inline(e, t = []) {
					return (this.inlineQueue.push({ src: e, tokens: t }), t);
				}
				inlineTokens(e, t = []) {
					let n = e,
						r = null;
					if (this.tokens.links) {
						let e = Object.keys(this.tokens.links);
						if (e.length > 0)
							for (
								;
								null != (r = this.tokenizer.rules.inline.reflinkSearch.exec(n));

							)
								e.includes(r[0].slice(r[0].lastIndexOf('[') + 1, -1)) &&
									(n =
										n.slice(0, r.index) +
										'[' +
										'a'.repeat(r[0].length - 2) +
										']' +
										n.slice(
											this.tokenizer.rules.inline.reflinkSearch.lastIndex,
										));
					}
					for (
						;
						null != (r = this.tokenizer.rules.inline.anyPunctuation.exec(n));

					)
						n =
							n.slice(0, r.index) +
							'++' +
							n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
					for (; null != (r = this.tokenizer.rules.inline.blockSkip.exec(n)); )
						n =
							n.slice(0, r.index) +
							'[' +
							'a'.repeat(r[0].length - 2) +
							']' +
							n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
					n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
					let i = !1,
						l = '';
					for (; e; ) {
						let r;
						if (
							(i || (l = ''),
							(i = !1),
							this.options.extensions?.inline?.some(
								(n) =>
									!!(r = n.call({ lexer: this }, e, t)) &&
									((e = e.substring(r.raw.length)), t.push(r), !0),
							))
						)
							continue;
						if (
							(r = this.tokenizer.escape(e)) ||
							(r = this.tokenizer.tag(e)) ||
							(r = this.tokenizer.link(e))
						) {
							((e = e.substring(r.raw.length)), t.push(r));
							continue;
						}
						if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
							e = e.substring(r.raw.length);
							let n = t.at(-1);
							'text' === r.type && n?.type === 'text'
								? ((n.raw += r.raw), (n.text += r.text))
								: t.push(r);
							continue;
						}
						if (
							(r = this.tokenizer.emStrong(e, n, l)) ||
							(r = this.tokenizer.codespan(e)) ||
							(r = this.tokenizer.br(e)) ||
							(r = this.tokenizer.del(e)) ||
							(r = this.tokenizer.autolink(e)) ||
							(!this.state.inLink && (r = this.tokenizer.url(e)))
						) {
							((e = e.substring(r.raw.length)), t.push(r));
							continue;
						}
						let s = e;
						if (this.options.extensions?.startInline) {
							let t = 1 / 0,
								n = e.slice(1),
								r;
							(this.options.extensions.startInline.forEach((e) => {
								'number' == typeof (r = e.call({ lexer: this }, n)) &&
									r >= 0 &&
									(t = Math.min(t, r));
							}),
								t < 1 / 0 && t >= 0 && (s = e.substring(0, t + 1)));
						}
						if ((r = this.tokenizer.inlineText(s))) {
							((e = e.substring(r.raw.length)),
								'_' !== r.raw.slice(-1) && (l = r.raw.slice(-1)),
								(i = !0));
							let n = t.at(-1);
							n?.type === 'text'
								? ((n.raw += r.raw), (n.text += r.text))
								: t.push(r);
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
					return t;
				}
			},
			tr = class {
				options;
				parser;
				constructor(e) {
					this.options = e || ea;
				}
				space(e) {
					return '';
				}
				code({ text: e, lang: t, escaped: n }) {
					let r = (t || '').match(ep.notSpaceStart)?.[0],
						i =
							e.replace(ep.endingNewline, '') +
							`
`;
					return r
						? '<pre><code class="language-' +
								e4(r) +
								'">' +
								(n ? i : e4(i, !0)) +
								`</code></pre>
`
						: '<pre><code>' +
								(n ? i : e4(i, !0)) +
								`</code></pre>
`;
				}
				blockquote({ tokens: e }) {
					return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
				}
				html({ text: e }) {
					return e;
				}
				def(e) {
					return '';
				}
				heading({ tokens: e, depth: t }) {
					return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
				}
				hr(e) {
					return `<hr>
`;
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
						`>
` +
						r +
						'</' +
						i +
						`>
`
					);
				}
				listitem(e) {
					let t = '';
					if (e.task) {
						let n = this.checkbox({ checked: !!e.checked });
						e.loose
							? e.tokens[0]?.type === 'paragraph'
								? ((e.tokens[0].text = n + ' ' + e.tokens[0].text),
									e.tokens[0].tokens &&
										e.tokens[0].tokens.length > 0 &&
										'text' === e.tokens[0].tokens[0].type &&
										((e.tokens[0].tokens[0].text =
											n + ' ' + e4(e.tokens[0].tokens[0].text)),
										(e.tokens[0].tokens[0].escaped = !0)))
								: e.tokens.unshift({
										type: 'text',
										raw: n + ' ',
										text: n + ' ',
										escaped: !0,
									})
							: (t += n + ' ');
					}
					return (
						(t += this.parser.parse(e.tokens, !!e.loose)),
						`<li>${t}</li>
`
					);
				}
				checkbox({ checked: e }) {
					return (
						'<input ' +
						(e ? 'checked="" ' : '') +
						'disabled="" type="checkbox">'
					);
				}
				paragraph({ tokens: e }) {
					return `<p>${this.parser.parseInline(e)}</p>
`;
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
						r && (r = `<tbody>${r}</tbody>`),
						`<table>
<thead>
` +
							t +
							`</thead>
` +
							r +
							`</table>
`
					);
				}
				tablerow({ text: e }) {
					return `<tr>
${e}</tr>
`;
				}
				tablecell(e) {
					let t = this.parser.parseInline(e.tokens),
						n = e.header ? 'th' : 'td';
					return (
						(e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
						t +
						`</${n}>
`
					);
				}
				strong({ tokens: e }) {
					return `<strong>${this.parser.parseInline(e)}</strong>`;
				}
				em({ tokens: e }) {
					return `<em>${this.parser.parseInline(e)}</em>`;
				}
				codespan({ text: e }) {
					return `<code>${e4(e, !0)}</code>`;
				}
				br(e) {
					return '<br>';
				}
				del({ tokens: e }) {
					return `<del>${this.parser.parseInline(e)}</del>`;
				}
				link({ href: e, title: t, tokens: n }) {
					let r = this.parser.parseInline(n),
						i = e8(e);
					if (null === i) return r;
					let l = '<a href="' + (e = i) + '"';
					return (
						t && (l += ' title="' + e4(t) + '"'),
						(l += '>' + r + '</a>')
					);
				}
				image({ href: e, title: t, text: n, tokens: r }) {
					r && (n = this.parser.parseInline(r, this.parser.textRenderer));
					let i = e8(e);
					if (null === i) return e4(n);
					e = i;
					let l = `<img src="${e}" alt="${n}"`;
					return (t && (l += ` title="${e4(t)}"`), (l += '>'));
				}
				text(e) {
					return 'tokens' in e && e.tokens
						? this.parser.parseInline(e.tokens)
						: 'escaped' in e && e.escaped
							? e.text
							: e4(e.text);
				}
			},
			ti = class {
				strong({ text: e }) {
					return e;
				}
				em({ text: e }) {
					return e;
				}
				codespan({ text: e }) {
					return e;
				}
				del({ text: e }) {
					return e;
				}
				html({ text: e }) {
					return e;
				}
				text({ text: e }) {
					return e;
				}
				link({ text: e }) {
					return '' + e;
				}
				image({ text: e }) {
					return '' + e;
				}
				br() {
					return '';
				}
			},
			tl = class e {
				options;
				renderer;
				textRenderer;
				constructor(e) {
					((this.options = e || ea),
						(this.options.renderer = this.options.renderer || new tr()),
						(this.renderer = this.options.renderer),
						(this.renderer.options = this.options),
						(this.renderer.parser = this),
						(this.textRenderer = new ti()));
				}
				static parse(t, n) {
					return new e(n).parse(t);
				}
				static parseInline(t, n) {
					return new e(n).parseInline(t);
				}
				parse(e, t = !0) {
					let n = '';
					for (let r = 0; r < e.length; r++) {
						let i = e[r];
						if (this.options.extensions?.renderers?.[i.type]) {
							let e = this.options.extensions.renderers[i.type].call(
								{ parser: this },
								i,
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
								].includes(i.type)
							) {
								n += e || '';
								continue;
							}
						}
						switch (i.type) {
							case 'space':
								n += this.renderer.space(i);
								continue;
							case 'hr':
								n += this.renderer.hr(i);
								continue;
							case 'heading':
								n += this.renderer.heading(i);
								continue;
							case 'code':
								n += this.renderer.code(i);
								continue;
							case 'table':
								n += this.renderer.table(i);
								continue;
							case 'blockquote':
								n += this.renderer.blockquote(i);
								continue;
							case 'list':
								n += this.renderer.list(i);
								continue;
							case 'html':
								n += this.renderer.html(i);
								continue;
							case 'def':
								n += this.renderer.def(i);
								continue;
							case 'paragraph':
								n += this.renderer.paragraph(i);
								continue;
							case 'text': {
								let l = i,
									s = this.renderer.text(l);
								for (; r + 1 < e.length && 'text' === e[r + 1].type; )
									((l = e[++r]),
										(s +=
											`
` + this.renderer.text(l)));
								t
									? (n += this.renderer.paragraph({
											type: 'paragraph',
											raw: s,
											text: s,
											tokens: [{ type: 'text', raw: s, text: s, escaped: !0 }],
										}))
									: (n += s);
								continue;
							}
							default: {
								let e = 'Token with "' + i.type + '" type was not found.';
								if (this.options.silent) return (console.error(e), '');
								throw Error(e);
							}
						}
					}
					return n;
				}
				parseInline(e, t = this.renderer) {
					let n = '';
					for (let r = 0; r < e.length; r++) {
						let i = e[r];
						if (this.options.extensions?.renderers?.[i.type]) {
							let e = this.options.extensions.renderers[i.type].call(
								{ parser: this },
								i,
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
								].includes(i.type)
							) {
								n += e || '';
								continue;
							}
						}
						switch (i.type) {
							case 'escape':
							case 'text':
								n += t.text(i);
								break;
							case 'html':
								n += t.html(i);
								break;
							case 'link':
								n += t.link(i);
								break;
							case 'image':
								n += t.image(i);
								break;
							case 'strong':
								n += t.strong(i);
								break;
							case 'em':
								n += t.em(i);
								break;
							case 'codespan':
								n += t.codespan(i);
								break;
							case 'br':
								n += t.br(i);
								break;
							case 'del':
								n += t.del(i);
								break;
							default: {
								let e = 'Token with "' + i.type + '" type was not found.';
								if (this.options.silent) return (console.error(e), '');
								throw Error(e);
							}
						}
					}
					return n;
				}
			},
			ts = class {
				options;
				block;
				constructor(e) {
					this.options = e || ea;
				}
				static passThroughHooks = new Set([
					'preprocess',
					'postprocess',
					'processAllTokens',
					'emStrongMask',
				]);
				static passThroughHooksRespectAsync = new Set([
					'preprocess',
					'postprocess',
					'processAllTokens',
				]);
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
					return this.block ? tn.lex : tn.lexInline;
				}
				provideParser() {
					return this.block ? tl.parse : tl.parseInline;
				}
			},
			ta = new (class {
				defaults = es();
				options = this.setOptions;
				parse = this.parseMarkdown(!0);
				parseInline = this.parseMarkdown(!1);
				Parser = tl;
				Renderer = tr;
				TextRenderer = ti;
				Lexer = tn;
				Tokenizer = tt;
				Hooks = ts;
				constructor(...e) {
					this.use(...e);
				}
				walkTokens(e, t) {
					let n = [];
					for (let r of e)
						switch (((n = n.concat(t.call(this, r))), r.type)) {
							case 'table':
								for (let e of r.header)
									n = n.concat(this.walkTokens(e.tokens, t));
								for (let e of r.rows)
									for (let r of e) n = n.concat(this.walkTokens(r.tokens, t));
								break;
							case 'list':
								n = n.concat(this.walkTokens(r.items, t));
								break;
							default: {
								let e = r;
								this.defaults.extensions?.childTokens?.[e.type]
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
				use(...e) {
					let t = this.defaults.extensions || {
						renderers: {},
						childTokens: {},
					};
					return (
						e.forEach((e) => {
							let n = { ...e };
							if (
								((n.async = this.defaults.async || n.async || !1),
								e.extensions &&
									(e.extensions.forEach((e) => {
										if (!e.name) throw Error('extension name required');
										if ('renderer' in e) {
											let n = t.renderers[e.name];
											n
												? (t.renderers[e.name] = function (...t) {
														let r = e.renderer.apply(this, t);
														return (!1 === r && (r = n.apply(this, t)), r);
													})
												: (t.renderers[e.name] = e.renderer);
										}
										if ('tokenizer' in e) {
											if (
												!e.level ||
												('block' !== e.level && 'inline' !== e.level)
											)
												throw Error(
													"extension level must be 'block' or 'inline'",
												);
											let n = t[e.level];
											(n
												? n.unshift(e.tokenizer)
												: (t[e.level] = [e.tokenizer]),
												e.start &&
													('block' === e.level
														? t.startBlock
															? t.startBlock.push(e.start)
															: (t.startBlock = [e.start])
														: 'inline' === e.level &&
															(t.startInline
																? t.startInline.push(e.start)
																: (t.startInline = [e.start]))));
										}
										'childTokens' in e &&
											e.childTokens &&
											(t.childTokens[e.name] = e.childTokens);
									}),
									(n.extensions = t)),
								e.renderer)
							) {
								let t = this.defaults.renderer || new tr(this.defaults);
								for (let n in e.renderer) {
									if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
									if (['options', 'parser'].includes(n)) continue;
									let r = e.renderer[n],
										i = t[n];
									t[n] = (...e) => {
										let n = r.apply(t, e);
										return (!1 === n && (n = i.apply(t, e)), n || '');
									};
								}
								n.renderer = t;
							}
							if (e.tokenizer) {
								let t = this.defaults.tokenizer || new tt(this.defaults);
								for (let n in e.tokenizer) {
									if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
									if (['options', 'rules', 'lexer'].includes(n)) continue;
									let r = e.tokenizer[n],
										i = t[n];
									t[n] = (...e) => {
										let n = r.apply(t, e);
										return (!1 === n && (n = i.apply(t, e)), n);
									};
								}
								n.tokenizer = t;
							}
							if (e.hooks) {
								let t = this.defaults.hooks || new ts();
								for (let n in e.hooks) {
									if (!(n in t)) throw Error(`hook '${n}' does not exist`);
									if (['options', 'block'].includes(n)) continue;
									let r = e.hooks[n],
										i = t[n];
									ts.passThroughHooks.has(n)
										? (t[n] = (e) => {
												if (
													this.defaults.async &&
													ts.passThroughHooksRespectAsync.has(n)
												)
													return (async () => {
														let n = await r.call(t, e);
														return i.call(t, n);
													})();
												let l = r.call(t, e);
												return i.call(t, l);
											})
										: (t[n] = (...e) => {
												if (this.defaults.async)
													return (async () => {
														let n = await r.apply(t, e);
														return (!1 === n && (n = await i.apply(t, e)), n);
													})();
												let n = r.apply(t, e);
												return (!1 === n && (n = i.apply(t, e)), n);
											});
								}
								n.hooks = t;
							}
							if (e.walkTokens) {
								let t = this.defaults.walkTokens,
									r = e.walkTokens;
								n.walkTokens = function (e) {
									let n = [];
									return (
										n.push(r.call(this, e)),
										t && (n = n.concat(t.call(this, e))),
										n
									);
								};
							}
							this.defaults = { ...this.defaults, ...n };
						}),
						this
					);
				}
				setOptions(e) {
					return ((this.defaults = { ...this.defaults, ...e }), this);
				}
				lexer(e, t) {
					return tn.lex(e, t ?? this.defaults);
				}
				parser(e, t) {
					return tl.parse(e, t ?? this.defaults);
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
												? tn.lex
												: tn.lexInline
									)(n, i),
									l = i.hooks ? await i.hooks.processAllTokens(r) : r;
								i.walkTokens &&
									(await Promise.all(this.walkTokens(l, i.walkTokens)));
								let s = await (
									i.hooks
										? await i.hooks.provideParser()
										: e
											? tl.parse
											: tl.parseInline
								)(l, i);
								return i.hooks ? await i.hooks.postprocess(s) : s;
							})().catch(l);
						try {
							i.hooks && (t = i.hooks.preprocess(t));
							let n = (
								i.hooks ? i.hooks.provideLexer() : e ? tn.lex : tn.lexInline
							)(t, i);
							(i.hooks && (n = i.hooks.processAllTokens(n)),
								i.walkTokens && this.walkTokens(n, i.walkTokens));
							let r = (
								i.hooks
									? i.hooks.provideParser()
									: e
										? tl.parse
										: tl.parseInline
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
							((n.message += `
Please report this to https://github.com/markedjs/marked.`),
							e)
						) {
							let e =
								'<p>An error occurred:</p><pre>' +
								e4(n.message + '', !0) +
								'</pre>';
							return t ? Promise.resolve(e) : e;
						}
						if (t) return Promise.reject(n);
						throw n;
					};
				}
			})();
		function to(e, t) {
			return ta.parse(e, t);
		}
		((to.options = to.setOptions =
			function (e) {
				return (
					ta.setOptions(e),
					(to.defaults = ta.defaults),
					(ea = to.defaults),
					to
				);
			}),
			(to.getDefaults = es),
			(to.defaults = ea),
			(to.use = function (...e) {
				return (
					ta.use(...e),
					(to.defaults = ta.defaults),
					(ea = to.defaults),
					to
				);
			}),
			(to.walkTokens = function (e, t) {
				return ta.walkTokens(e, t);
			}),
			(to.parseInline = ta.parseInline),
			(to.Parser = tl),
			(to.parser = tl.parse),
			(to.Renderer = tr),
			(to.TextRenderer = ti),
			(to.Lexer = tn),
			(to.lexer = tn.lex),
			(to.Tokenizer = tt),
			(to.Hooks = ts),
			(to.parse = to),
			to.options,
			to.setOptions,
			to.use,
			to.walkTokens,
			to.parseInline,
			tl.parse,
			tn.lex,
			e.s(
				[
					'default',
					0,
					() => {
						let [{ markdown: e = er.INITIAL_MARKDOWN, html: t = '' }, r] = (0,
						et.useState)({ markdown: er.INITIAL_MARKDOWN, html: '' });
						return (
							(0, et.useEffect)(() => {
								(async () => {
									let t = await to(e);
									r((e) => ({ ...e, html: t }));
								})();
							}, [e]),
							(0, n.jsxs)('div', {
								className: 'flex h-screen w-screen flex-col overflow-hidden',
								children: [
									(0, n.jsx)(el, {}),
									(0, n.jsx)('div', {
										className: 'w-full border-t border-neutral-800',
									}),
									(0, n.jsxs)('div', {
										className:
											'grid grow divide-x divide-neutral-800 overflow-hidden md:grid-cols-2',
										children: [
											(0, n.jsx)('div', {
												className: 'h-full overflow-hidden md:col-span-1',
												children: (0, n.jsx)('textarea', {
													id: 'markdown',
													name: 'markdown',
													placeholder: 'Markdown',
													className:
														'scrollbar-none h-full w-full resize-none p-4 focus:outline-none md:p-8',
													value: e,
													onChange: (e) => {
														r((t) => ({ ...t, markdown: e.target.value }));
													},
												}),
											}),
											(0, n.jsx)('div', {
												className: 'h-full overflow-hidden md:col-span-1',
												children: (0, n.jsx)('div', {
													className:
														'scrollbar-none h-full w-full overflow-auto p-4 md:p-8',
													children: (0, n.jsx)(en, { html: t }),
												}),
											}),
										],
									}),
								],
							})
						);
					},
				],
				7856,
			));
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
