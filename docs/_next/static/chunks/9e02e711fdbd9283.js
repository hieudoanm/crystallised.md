(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	1326,
	(e, t, r) => {
		!(function () {
			var e = {
					229: function (e) {
						var t,
							r,
							n,
							o = (e.exports = {});
						function u() {
							throw Error('setTimeout has not been defined');
						}
						function i() {
							throw Error('clearTimeout has not been defined');
						}
						try {
							t = 'function' == typeof setTimeout ? setTimeout : u;
						} catch (e) {
							t = u;
						}
						try {
							r = 'function' == typeof clearTimeout ? clearTimeout : i;
						} catch (e) {
							r = i;
						}
						function l(e) {
							if (t === setTimeout) return setTimeout(e, 0);
							if ((t === u || !t) && setTimeout)
								return ((t = setTimeout), setTimeout(e, 0));
							try {
								return t(e, 0);
							} catch (r) {
								try {
									return t.call(null, e, 0);
								} catch (r) {
									return t.call(this, e, 0);
								}
							}
						}
						var c = [],
							a = !1,
							s = -1;
						function f() {
							a &&
								n &&
								((a = !1),
								n.length ? (c = n.concat(c)) : (s = -1),
								c.length && p());
						}
						function p() {
							if (!a) {
								var e = l(f);
								a = !0;
								for (var t = c.length; t; ) {
									for (n = c, c = []; ++s < t; ) n && n[s].run();
									((s = -1), (t = c.length));
								}
								((n = null),
									(a = !1),
									(function (e) {
										if (r === clearTimeout) return clearTimeout(e);
										if ((r === i || !r) && clearTimeout)
											return ((r = clearTimeout), clearTimeout(e));
										try {
											r(e);
										} catch (t) {
											try {
												return r.call(null, e);
											} catch (t) {
												return r.call(this, e);
											}
										}
									})(e));
							}
						}
						function d(e, t) {
							((this.fun = e), (this.array = t));
						}
						function y() {}
						((o.nextTick = function (e) {
							var t = Array(arguments.length - 1);
							if (arguments.length > 1)
								for (var r = 1; r < arguments.length; r++)
									t[r - 1] = arguments[r];
							(c.push(new d(e, t)), 1 !== c.length || a || l(p));
						}),
							(d.prototype.run = function () {
								this.fun.apply(null, this.array);
							}),
							(o.title = 'browser'),
							(o.browser = !0),
							(o.env = {}),
							(o.argv = []),
							(o.version = ''),
							(o.versions = {}),
							(o.on = y),
							(o.addListener = y),
							(o.once = y),
							(o.off = y),
							(o.removeListener = y),
							(o.removeAllListeners = y),
							(o.emit = y),
							(o.prependListener = y),
							(o.prependOnceListener = y),
							(o.listeners = function (e) {
								return [];
							}),
							(o.binding = function (e) {
								throw Error('process.binding is not supported');
							}),
							(o.cwd = function () {
								return '/';
							}),
							(o.chdir = function (e) {
								throw Error('process.chdir is not supported');
							}),
							(o.umask = function () {
								return 0;
							}));
					},
				},
				r = {};
			function n(t) {
				var o = r[t];
				if (void 0 !== o) return o.exports;
				var u = (r[t] = { exports: {} }),
					i = !0;
				try {
					(e[t](u, u.exports, n), (i = !1));
				} finally {
					i && delete r[t];
				}
				return u.exports;
			}
			((n.ab =
				'/ROOT/node_modules/.pnpm/next@15.5.4_@babel+core@7.28.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
				(t.exports = n(229)));
		})();
	},
	9828,
	(e, t, r) => {
		'use strict';
		var n, o;
		t.exports =
			(null == (n = e.g.process) ? void 0 : n.env) &&
			'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(1326);
	},
	2879,
	(e, t, r) => {
		'use strict';
		r._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	6234,
	(e, t, r) => {
		'use strict';
		var n = Symbol.for('react.transitional.element');
		function o(e, t, r) {
			var o = null;
			if (
				(void 0 !== r && (o = '' + r),
				void 0 !== t.key && (o = '' + t.key),
				'key' in t)
			)
				for (var u in ((r = {}), t)) 'key' !== u && (r[u] = t[u]);
			else r = t;
			return {
				$$typeof: n,
				type: e,
				key: o,
				ref: void 0 !== (t = r.ref) ? t : null,
				props: r,
			};
		}
		((r.Fragment = Symbol.for('react.fragment')), (r.jsx = o), (r.jsxs = o));
	},
	4601,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(6234);
	},
	4513,
	(e, t, r) => {
		'use strict';
		var n = e.i(9828),
			o = Symbol.for('react.transitional.element'),
			u = Symbol.for('react.portal'),
			i = Symbol.for('react.fragment'),
			l = Symbol.for('react.strict_mode'),
			c = Symbol.for('react.profiler'),
			a = Symbol.for('react.consumer'),
			s = Symbol.for('react.context'),
			f = Symbol.for('react.forward_ref'),
			p = Symbol.for('react.suspense'),
			d = Symbol.for('react.memo'),
			y = Symbol.for('react.lazy'),
			h = Symbol.for('react.activity'),
			b = Symbol.iterator,
			v = {
				isMounted: function () {
					return !1;
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {},
			},
			m = Object.assign,
			g = {};
		function _(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = g),
				(this.updater = r || v));
		}
		function E() {}
		function j(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = g),
				(this.updater = r || v));
		}
		((_.prototype.isReactComponent = {}),
			(_.prototype.setState = function (e, t) {
				if ('object' != typeof e && 'function' != typeof e && null != e)
					throw Error(
						'takes an object of state variables to update or a function which returns an object of state variables.',
					);
				this.updater.enqueueSetState(this, e, t, 'setState');
			}),
			(_.prototype.forceUpdate = function (e) {
				this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
			}),
			(E.prototype = _.prototype));
		var O = (j.prototype = new E());
		((O.constructor = j), m(O, _.prototype), (O.isPureReactComponent = !0));
		var S = Array.isArray;
		function w() {}
		var P = { H: null, A: null, T: null, S: null },
			x = Object.prototype.hasOwnProperty;
		function k(e, t, r) {
			var n = r.ref;
			return {
				$$typeof: o,
				type: e,
				key: t,
				ref: void 0 !== n ? n : null,
				props: r,
			};
		}
		function C(e) {
			return 'object' == typeof e && null !== e && e.$$typeof === o;
		}
		var T = /\/+/g;
		function R(e, t) {
			var r, n;
			return 'object' == typeof e && null !== e && null != e.key
				? ((r = '' + e.key),
					(n = { '=': '=0', ':': '=2' }),
					'$' +
						r.replace(/[=:]/g, function (e) {
							return n[e];
						}))
				: t.toString(36);
		}
		function M(e, t, r) {
			if (null == e) return e;
			var n = [],
				i = 0;
			return (
				!(function e(t, r, n, i, l) {
					var c,
						a,
						s,
						f = typeof t;
					('undefined' === f || 'boolean' === f) && (t = null);
					var p = !1;
					if (null === t) p = !0;
					else
						switch (f) {
							case 'bigint':
							case 'string':
							case 'number':
								p = !0;
								break;
							case 'object':
								switch (t.$$typeof) {
									case o:
									case u:
										p = !0;
										break;
									case y:
										return e((p = t._init)(t._payload), r, n, i, l);
								}
						}
					if (p)
						return (
							(l = l(t)),
							(p = '' === i ? '.' + R(t, 0) : i),
							S(l)
								? ((n = ''),
									null != p && (n = p.replace(T, '$&/') + '/'),
									e(l, r, n, '', function (e) {
										return e;
									}))
								: null != l &&
									(C(l) &&
										((c = l),
										(a =
											n +
											(null == l.key || (t && t.key === l.key)
												? ''
												: ('' + l.key).replace(T, '$&/') + '/') +
											p),
										(l = k(c.type, a, c.props))),
									r.push(l)),
							1
						);
					p = 0;
					var d = '' === i ? '.' : i + ':';
					if (S(t))
						for (var h = 0; h < t.length; h++)
							((f = d + R((i = t[h]), h)), (p += e(i, r, n, f, l)));
					else if (
						'function' ==
						typeof (h =
							null === (s = t) || 'object' != typeof s
								? null
								: 'function' == typeof (s = (b && s[b]) || s['@@iterator'])
									? s
									: null)
					)
						for (t = h.call(t), h = 0; !(i = t.next()).done; )
							((f = d + R((i = i.value), h++)), (p += e(i, r, n, f, l)));
					else if ('object' === f) {
						if ('function' == typeof t.then)
							return e(
								(function (e) {
									switch (e.status) {
										case 'fulfilled':
											return e.value;
										case 'rejected':
											throw e.reason;
										default:
											switch (
												('string' == typeof e.status
													? e.then(w, w)
													: ((e.status = 'pending'),
														e.then(
															function (t) {
																'pending' === e.status &&
																	((e.status = 'fulfilled'), (e.value = t));
															},
															function (t) {
																'pending' === e.status &&
																	((e.status = 'rejected'), (e.reason = t));
															},
														)),
												e.status)
											) {
												case 'fulfilled':
													return e.value;
												case 'rejected':
													throw e.reason;
											}
									}
									throw e;
								})(t),
								r,
								n,
								i,
								l,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (r = String(t))
									? 'object with keys {' + Object.keys(t).join(', ') + '}'
									: r) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return p;
				})(e, n, '', '', function (e) {
					return t.call(r, e, i++);
				}),
				n
			);
		}
		function H(e) {
			if (-1 === e._status) {
				var t = e._result;
				((t = t()).then(
					function (t) {
						(0 === e._status || -1 === e._status) &&
							((e._status = 1), (e._result = t));
					},
					function (t) {
						(0 === e._status || -1 === e._status) &&
							((e._status = 2), (e._result = t));
					},
				),
					-1 === e._status && ((e._status = 0), (e._result = t)));
			}
			if (1 === e._status) return e._result.default;
			throw e._result;
		}
		var A =
			'function' == typeof reportError
				? reportError
				: function (e) {
						if (
							'object' == typeof window &&
							'function' == typeof window.ErrorEvent
						) {
							var t = new window.ErrorEvent('error', {
								bubbles: !0,
								cancelable: !0,
								message:
									'object' == typeof e &&
									null !== e &&
									'string' == typeof e.message
										? String(e.message)
										: String(e),
								error: e,
							});
							if (!window.dispatchEvent(t)) return;
						} else if (
							'object' == typeof n.default &&
							'function' == typeof n.default.emit
						)
							return void n.default.emit('uncaughtException', e);
						console.error(e);
					};
		((r.Activity = h),
			(r.Children = {
				map: M,
				forEach: function (e, t, r) {
					M(
						e,
						function () {
							t.apply(this, arguments);
						},
						r,
					);
				},
				count: function (e) {
					var t = 0;
					return (
						M(e, function () {
							t++;
						}),
						t
					);
				},
				toArray: function (e) {
					return (
						M(e, function (e) {
							return e;
						}) || []
					);
				},
				only: function (e) {
					if (!C(e))
						throw Error(
							'React.Children.only expected to receive a single React element child.',
						);
					return e;
				},
			}),
			(r.Component = _),
			(r.Fragment = i),
			(r.Profiler = c),
			(r.PureComponent = j),
			(r.StrictMode = l),
			(r.Suspense = p),
			(r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
			(r.__COMPILER_RUNTIME = {
				__proto__: null,
				c: function (e) {
					return P.H.useMemoCache(e);
				},
			}),
			(r.cache = function (e) {
				return function () {
					return e.apply(null, arguments);
				};
			}),
			(r.cacheSignal = function () {
				return null;
			}),
			(r.cloneElement = function (e, t, r) {
				if (null == e)
					throw Error(
						'The argument must be a React element, but you passed ' + e + '.',
					);
				var n = m({}, e.props),
					o = e.key;
				if (null != t)
					for (u in (void 0 !== t.key && (o = '' + t.key), t))
						x.call(t, u) &&
							'key' !== u &&
							'__self' !== u &&
							'__source' !== u &&
							('ref' !== u || void 0 !== t.ref) &&
							(n[u] = t[u]);
				var u = arguments.length - 2;
				if (1 === u) n.children = r;
				else if (1 < u) {
					for (var i = Array(u), l = 0; l < u; l++) i[l] = arguments[l + 2];
					n.children = i;
				}
				return k(e.type, o, n);
			}),
			(r.createContext = function (e) {
				return (
					((e = {
						$$typeof: s,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
					}).Provider = e),
					(e.Consumer = { $$typeof: a, _context: e }),
					e
				);
			}),
			(r.createElement = function (e, t, r) {
				var n,
					o = {},
					u = null;
				if (null != t)
					for (n in (void 0 !== t.key && (u = '' + t.key), t))
						x.call(t, n) &&
							'key' !== n &&
							'__self' !== n &&
							'__source' !== n &&
							(o[n] = t[n]);
				var i = arguments.length - 2;
				if (1 === i) o.children = r;
				else if (1 < i) {
					for (var l = Array(i), c = 0; c < i; c++) l[c] = arguments[c + 2];
					o.children = l;
				}
				if (e && e.defaultProps)
					for (n in (i = e.defaultProps)) void 0 === o[n] && (o[n] = i[n]);
				return k(e, u, o);
			}),
			(r.createRef = function () {
				return { current: null };
			}),
			(r.forwardRef = function (e) {
				return { $$typeof: f, render: e };
			}),
			(r.isValidElement = C),
			(r.lazy = function (e) {
				return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: H };
			}),
			(r.memo = function (e, t) {
				return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
			}),
			(r.startTransition = function (e) {
				var t = P.T,
					r = {};
				P.T = r;
				try {
					var n = e(),
						o = P.S;
					(null !== o && o(r, n),
						'object' == typeof n &&
							null !== n &&
							'function' == typeof n.then &&
							n.then(w, A));
				} catch (e) {
					A(e);
				} finally {
					(null !== t && null !== r.types && (t.types = r.types), (P.T = t));
				}
			}),
			(r.unstable_useCacheRefresh = function () {
				return P.H.useCacheRefresh();
			}),
			(r.use = function (e) {
				return P.H.use(e);
			}),
			(r.useActionState = function (e, t, r) {
				return P.H.useActionState(e, t, r);
			}),
			(r.useCallback = function (e, t) {
				return P.H.useCallback(e, t);
			}),
			(r.useContext = function (e) {
				return P.H.useContext(e);
			}),
			(r.useDebugValue = function () {}),
			(r.useDeferredValue = function (e, t) {
				return P.H.useDeferredValue(e, t);
			}),
			(r.useEffect = function (e, t) {
				return P.H.useEffect(e, t);
			}),
			(r.useEffectEvent = function (e) {
				return P.H.useEffectEvent(e);
			}),
			(r.useId = function () {
				return P.H.useId();
			}),
			(r.useImperativeHandle = function (e, t, r) {
				return P.H.useImperativeHandle(e, t, r);
			}),
			(r.useInsertionEffect = function (e, t) {
				return P.H.useInsertionEffect(e, t);
			}),
			(r.useLayoutEffect = function (e, t) {
				return P.H.useLayoutEffect(e, t);
			}),
			(r.useMemo = function (e, t) {
				return P.H.useMemo(e, t);
			}),
			(r.useOptimistic = function (e, t) {
				return P.H.useOptimistic(e, t);
			}),
			(r.useReducer = function (e, t, r) {
				return P.H.useReducer(e, t, r);
			}),
			(r.useRef = function (e) {
				return P.H.useRef(e);
			}),
			(r.useState = function (e) {
				return P.H.useState(e);
			}),
			(r.useSyncExternalStore = function (e, t, r) {
				return P.H.useSyncExternalStore(e, t, r);
			}),
			(r.useTransition = function () {
				return P.H.useTransition();
			}),
			(r.version = '19.2.0'));
	},
	6960,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(4513);
	},
	7602,
	(e, t, r) => {
		'use strict';
		function n(e) {
			if ('function' != typeof WeakMap) return null;
			var t = new WeakMap(),
				r = new WeakMap();
			return (n = function (e) {
				return e ? r : t;
			})(e);
		}
		r._ = function (e, t) {
			if (!t && e && e.__esModule) return e;
			if (null === e || ('object' != typeof e && 'function' != typeof e))
				return { default: e };
			var r = n(t);
			if (r && r.has(e)) return r.get(e);
			var o = { __proto__: null },
				u = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
					var l = u ? Object.getOwnPropertyDescriptor(e, i) : null;
					l && (l.get || l.set)
						? Object.defineProperty(o, i, l)
						: (o[i] = e[i]);
				}
			return ((o.default = e), r && r.set(e, o), o);
		};
	},
	2927,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			!(function (e, t) {
				for (var r in t)
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
			})(r, {
				DecodeError: function () {
					return h;
				},
				MiddlewareNotFoundError: function () {
					return g;
				},
				MissingStaticPage: function () {
					return m;
				},
				NormalizeError: function () {
					return b;
				},
				PageNotFoundError: function () {
					return v;
				},
				SP: function () {
					return d;
				},
				ST: function () {
					return y;
				},
				WEB_VITALS: function () {
					return n;
				},
				execOnce: function () {
					return o;
				},
				getDisplayName: function () {
					return a;
				},
				getLocationOrigin: function () {
					return l;
				},
				getURL: function () {
					return c;
				},
				isAbsoluteUrl: function () {
					return i;
				},
				isResSent: function () {
					return s;
				},
				loadGetInitialProps: function () {
					return p;
				},
				normalizeRepeatedSlashes: function () {
					return f;
				},
				stringifyError: function () {
					return _;
				},
			}));
		let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function o(e) {
			let t,
				r = !1;
			return function () {
				for (var n = arguments.length, o = Array(n), u = 0; u < n; u++)
					o[u] = arguments[u];
				return (r || ((r = !0), (t = e(...o))), t);
			};
		}
		let u = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			i = (e) => u.test(e);
		function l() {
			let { protocol: e, hostname: t, port: r } = window.location;
			return e + '//' + t + (r ? ':' + r : '');
		}
		function c() {
			let { href: e } = window.location,
				t = l();
			return e.substring(t.length);
		}
		function a(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function s(e) {
			return e.finished || e.headersSent;
		}
		function f(e) {
			let t = e.split('?');
			return (
				t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
				(t[1] ? '?' + t.slice(1).join('?') : '')
			);
		}
		async function p(e, t) {
			let r = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps)
				return t.ctx && t.Component
					? { pageProps: await p(t.Component, t.ctx) }
					: {};
			let n = await e.getInitialProps(t);
			if (r && s(r)) return n;
			if (!n)
				throw Object.defineProperty(
					Error(
						'"' +
							a(e) +
							'.getInitialProps()" should resolve to an object. But found "' +
							n +
							'" instead.',
					),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return n;
		}
		let d = 'undefined' != typeof performance,
			y =
				d &&
				['mark', 'measure', 'getEntriesByName'].every(
					(e) => 'function' == typeof performance[e],
				);
		class h extends Error {}
		class b extends Error {}
		class v extends Error {
			constructor(e) {
				(super(),
					(this.code = 'ENOENT'),
					(this.name = 'PageNotFoundError'),
					(this.message = 'Cannot find module for page: ' + e));
			}
		}
		class m extends Error {
			constructor(e, t) {
				(super(),
					(this.message =
						'Failed to load static file for page: ' + e + ' ' + t));
			}
		}
		class g extends Error {
			constructor() {
				(super(),
					(this.code = 'ENOENT'),
					(this.message = 'Cannot find the middleware module'));
			}
		}
		function _(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	9076,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'useIntersection', {
				enumerable: !0,
				get: function () {
					return c;
				},
			}));
		let n = e.r(6960),
			o = e.r(6955),
			u = 'function' == typeof IntersectionObserver,
			i = new Map(),
			l = [];
		function c(e) {
			let { rootRef: t, rootMargin: r, disabled: c } = e,
				a = c || !u,
				[s, f] = (0, n.useState)(!1),
				p = (0, n.useRef)(null),
				d = (0, n.useCallback)((e) => {
					p.current = e;
				}, []);
			return (
				(0, n.useEffect)(() => {
					if (u) {
						if (a || s) return;
						let e = p.current;
						if (e && e.tagName)
							return (function (e, t, r) {
								let {
									id: n,
									observer: o,
									elements: u,
								} = (function (e) {
									let t,
										r = { root: e.root || null, margin: e.rootMargin || '' },
										n = l.find(
											(e) => e.root === r.root && e.margin === r.margin,
										);
									if (n && (t = i.get(n))) return t;
									let o = new Map();
									return (
										(t = {
											id: r,
											observer: new IntersectionObserver((e) => {
												e.forEach((e) => {
													let t = o.get(e.target),
														r = e.isIntersecting || e.intersectionRatio > 0;
													t && r && t(r);
												});
											}, e),
											elements: o,
										}),
										l.push(r),
										i.set(r, t),
										t
									);
								})(r);
								return (
									u.set(e, t),
									o.observe(e),
									function () {
										if ((u.delete(e), o.unobserve(e), 0 === u.size)) {
											(o.disconnect(), i.delete(n));
											let e = l.findIndex(
												(e) => e.root === n.root && e.margin === n.margin,
											);
											e > -1 && l.splice(e, 1);
										}
									}
								);
							})(e, (e) => e && f(e), {
								root: null == t ? void 0 : t.current,
								rootMargin: r,
							});
					} else if (!s) {
						let e = (0, o.requestIdleCallback)(() => f(!0));
						return () => (0, o.cancelIdleCallback)(e);
					}
				}, [a, r, t, s, p.current]),
				[
					d,
					s,
					(0, n.useCallback)(() => {
						f(!1);
					}, []),
				]
			);
		}
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	3028,
	(e, t, r) => {
		'use strict';
		function n(e, t, r, n) {
			return !1;
		}
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'getDomainLocale', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}),
			e.r(407),
			('function' == typeof r.default ||
				('object' == typeof r.default && null !== r.default)) &&
				void 0 === r.default.__esModule &&
				(Object.defineProperty(r.default, '__esModule', { value: !0 }),
				Object.assign(r.default, r),
				(t.exports = r.default)));
	},
	2654,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'useMergedRef', {
				enumerable: !0,
				get: function () {
					return o;
				},
			}));
		let n = e.r(6960);
		function o(e, t) {
			let r = (0, n.useRef)(null),
				o = (0, n.useRef)(null);
			return (0, n.useCallback)(
				(n) => {
					if (null === n) {
						let e = r.current;
						e && ((r.current = null), e());
						let t = o.current;
						t && ((o.current = null), t());
					} else (e && (r.current = u(e, n)), t && (o.current = u(t, n)));
				},
				[e, t],
			);
		}
		function u(e, t) {
			if ('function' != typeof e)
				return (
					(e.current = t),
					() => {
						e.current = null;
					}
				);
			{
				let r = e(t);
				return 'function' == typeof r ? r : () => e(null);
			}
		}
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	8023,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'errorOnce', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = (e) => {};
	},
	6855,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			!(function (e, t) {
				for (var r in t)
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
			})(r, {
				default: function () {
					return j;
				},
				useLinkStatus: function () {
					return E;
				},
			}));
		let n = e.r(7602),
			o = e.r(4601),
			u = n._(e.r(6960)),
			i = e.r(6695),
			l = e.r(8844),
			c = e.r(8168),
			a = e.r(2927),
			s = e.r(309),
			f = e.r(7663),
			p = e.r(9076),
			d = e.r(3028),
			y = e.r(6824),
			h = e.r(2654);
		e.r(8023);
		let b = new Set();
		function v(e, t, r, n) {
			if ('undefined' != typeof window && (0, l.isLocalURL)(t)) {
				if (!n.bypassPrefetchedCheck) {
					let o =
						t +
						'%' +
						r +
						'%' +
						(void 0 !== n.locale
							? n.locale
							: 'locale' in e
								? e.locale
								: void 0);
					if (b.has(o)) return;
					b.add(o);
				}
				e.prefetch(t, r, n).catch((e) => {});
			}
		}
		function m(e) {
			return 'string' == typeof e ? e : (0, c.formatUrl)(e);
		}
		let g = u.default.forwardRef(function (e, t) {
				let r,
					n,
					{
						href: c,
						as: b,
						children: g,
						prefetch: _ = null,
						passHref: E,
						replace: j,
						shallow: O,
						scroll: S,
						locale: w,
						onClick: P,
						onNavigate: x,
						onMouseEnter: k,
						onTouchStart: C,
						legacyBehavior: T = !1,
						...R
					} = e;
				((r = g),
					T &&
						('string' == typeof r || 'number' == typeof r) &&
						(r = (0, o.jsx)('a', { children: r })));
				let M = u.default.useContext(f.RouterContext),
					H = !1 !== _,
					{ href: A, as: I } = u.default.useMemo(() => {
						if (!M) {
							let e = m(c);
							return { href: e, as: b ? m(b) : e };
						}
						let [e, t] = (0, i.resolveHref)(M, c, !0);
						return { href: e, as: b ? (0, i.resolveHref)(M, b) : t || e };
					}, [M, c, b]),
					L = u.default.useRef(A),
					N = u.default.useRef(I);
				T && (n = u.default.Children.only(r));
				let $ = T ? n && 'object' == typeof n && n.ref : t,
					[U, D, F] = (0, p.useIntersection)({ rootMargin: '200px' }),
					z = u.default.useCallback(
						(e) => {
							((N.current !== I || L.current !== A) &&
								(F(), (N.current = I), (L.current = A)),
								U(e));
						},
						[I, A, F, U],
					),
					B = (0, h.useMergedRef)(z, $);
				u.default.useEffect(() => {
					M && D && H && v(M, A, I, { locale: w });
				}, [I, A, D, w, H, null == M ? void 0 : M.locale, M]);
				let V = {
					ref: B,
					onClick(e) {
						(T || 'function' != typeof P || P(e),
							T &&
								n.props &&
								'function' == typeof n.props.onClick &&
								n.props.onClick(e),
							M &&
								(e.defaultPrevented ||
									(function (e, t, r, n, o, u, i, c, a) {
										let { nodeName: s } = e.currentTarget;
										if (
											!(
												('A' === s.toUpperCase() &&
													(function (e) {
														let t = e.currentTarget.getAttribute('target');
														return (
															(t && '_self' !== t) ||
															e.metaKey ||
															e.ctrlKey ||
															e.shiftKey ||
															e.altKey ||
															(e.nativeEvent && 2 === e.nativeEvent.which)
														);
													})(e)) ||
												e.currentTarget.hasAttribute('download')
											)
										) {
											if (!(0, l.isLocalURL)(r)) {
												o && (e.preventDefault(), location.replace(r));
												return;
											}
											(e.preventDefault(),
												(() => {
													if (a) {
														let e = !1;
														if (
															(a({
																preventDefault: () => {
																	e = !0;
																},
															}),
															e)
														)
															return;
													}
													let e = null == i || i;
													'beforePopState' in t
														? t[o ? 'replace' : 'push'](r, n, {
																shallow: u,
																locale: c,
																scroll: e,
															})
														: t[o ? 'replace' : 'push'](n || r, { scroll: e });
												})());
										}
									})(e, M, A, I, j, O, S, w, x)));
					},
					onMouseEnter(e) {
						(T || 'function' != typeof k || k(e),
							T &&
								n.props &&
								'function' == typeof n.props.onMouseEnter &&
								n.props.onMouseEnter(e),
							M &&
								v(M, A, I, {
									locale: w,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
					onTouchStart: function (e) {
						(T || 'function' != typeof C || C(e),
							T &&
								n.props &&
								'function' == typeof n.props.onTouchStart &&
								n.props.onTouchStart(e),
							M &&
								v(M, A, I, {
									locale: w,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
				};
				if ((0, a.isAbsoluteUrl)(I)) V.href = I;
				else if (!T || E || ('a' === n.type && !('href' in n.props))) {
					let e = void 0 !== w ? w : null == M ? void 0 : M.locale;
					V.href =
						((null == M ? void 0 : M.isLocaleDomain) &&
							(0, d.getDomainLocale)(
								I,
								e,
								null == M ? void 0 : M.locales,
								null == M ? void 0 : M.domainLocales,
							)) ||
						(0, y.addBasePath)(
							(0, s.addLocale)(I, e, null == M ? void 0 : M.defaultLocale),
						);
				}
				return T
					? u.default.cloneElement(n, V)
					: (0, o.jsx)('a', { ...R, ...V, children: r });
			}),
			_ = (0, u.createContext)({ pending: !1 }),
			E = () => (0, u.useContext)(_),
			j = g;
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	5724,
	(e, t, r) => {
		t.exports = e.r(6855);
	},
	6535,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'HeadManagerContext', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = e.r(2879)._(e.r(6960)).default.createContext({});
	},
	8443,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'warnOnce', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = (e) => {};
	},
	5923,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/0fb336360b7ea4c3.js'].map((t) => e.l(t)),
			).then(() => t(3933)),
		);
	},
	6376,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/db995d3b81bcf324.js'].map((t) => e.l(t)),
			).then(() => t(9979)),
		);
	},
]);
