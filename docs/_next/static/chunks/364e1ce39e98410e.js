(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	6388,
	(e, t, n) => {
		!(function () {
			var e = {
					229: function (e) {
						var t,
							n,
							r,
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
							n = 'function' == typeof clearTimeout ? clearTimeout : i;
						} catch (e) {
							n = i;
						}
						function a(e) {
							if (t === setTimeout) return setTimeout(e, 0);
							if ((t === u || !t) && setTimeout)
								return ((t = setTimeout), setTimeout(e, 0));
							try {
								return t(e, 0);
							} catch (n) {
								try {
									return t.call(null, e, 0);
								} catch (n) {
									return t.call(this, e, 0);
								}
							}
						}
						var s = [],
							l = !1,
							c = -1;
						function f() {
							l &&
								r &&
								((l = !1),
								r.length ? (s = r.concat(s)) : (c = -1),
								s.length && d());
						}
						function d() {
							if (!l) {
								var e = a(f);
								l = !0;
								for (var t = s.length; t; ) {
									for (r = s, s = []; ++c < t; ) r && r[c].run();
									((c = -1), (t = s.length));
								}
								((r = null),
									(l = !1),
									(function (e) {
										if (n === clearTimeout) return clearTimeout(e);
										if ((n === i || !n) && clearTimeout)
											return ((n = clearTimeout), clearTimeout(e));
										try {
											n(e);
										} catch (t) {
											try {
												return n.call(null, e);
											} catch (t) {
												return n.call(this, e);
											}
										}
									})(e));
							}
						}
						function p(e, t) {
							((this.fun = e), (this.array = t));
						}
						function y() {}
						((o.nextTick = function (e) {
							var t = Array(arguments.length - 1);
							if (arguments.length > 1)
								for (var n = 1; n < arguments.length; n++)
									t[n - 1] = arguments[n];
							(s.push(new p(e, t)), 1 !== s.length || l || a(d));
						}),
							(p.prototype.run = function () {
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
				n = {};
			function r(t) {
				var o = n[t];
				if (void 0 !== o) return o.exports;
				var u = (n[t] = { exports: {} }),
					i = !0;
				try {
					(e[t](u, u.exports, r), (i = !1));
				} finally {
					i && delete n[t];
				}
				return u.exports;
			}
			((r.ab =
				'/ROOT/node_modules/.pnpm/next@15.5.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
				(t.exports = r(229)));
		})();
	},
	7244,
	(e, t, n) => {
		'use strict';
		var r, o;
		t.exports =
			(null == (r = e.g.process) ? void 0 : r.env) &&
			'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(6388);
	},
	2879,
	(e, t, n) => {
		'use strict';
		n._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	6234,
	(e, t, n) => {
		'use strict';
		var r = Symbol.for('react.transitional.element');
		function o(e, t, n) {
			var o = null;
			if (
				(void 0 !== n && (o = '' + n),
				void 0 !== t.key && (o = '' + t.key),
				'key' in t)
			)
				for (var u in ((n = {}), t)) 'key' !== u && (n[u] = t[u]);
			else n = t;
			return {
				$$typeof: r,
				type: e,
				key: o,
				ref: void 0 !== (t = n.ref) ? t : null,
				props: n,
			};
		}
		((n.Fragment = Symbol.for('react.fragment')), (n.jsx = o), (n.jsxs = o));
	},
	4601,
	(e, t, n) => {
		'use strict';
		t.exports = e.r(6234);
	},
	4513,
	(e, t, n) => {
		'use strict';
		var r = e.i(7244),
			o = Symbol.for('react.transitional.element'),
			u = Symbol.for('react.portal'),
			i = Symbol.for('react.fragment'),
			a = Symbol.for('react.strict_mode'),
			s = Symbol.for('react.profiler'),
			l = Symbol.for('react.consumer'),
			c = Symbol.for('react.context'),
			f = Symbol.for('react.forward_ref'),
			d = Symbol.for('react.suspense'),
			p = Symbol.for('react.memo'),
			y = Symbol.for('react.lazy'),
			h = Symbol.for('react.activity'),
			m = Symbol.iterator,
			g = {
				isMounted: function () {
					return !1;
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {},
			},
			b = Object.assign,
			v = {};
		function _(e, t, n) {
			((this.props = e),
				(this.context = t),
				(this.refs = v),
				(this.updater = n || g));
		}
		function w() {}
		function E(e, t, n) {
			((this.props = e),
				(this.context = t),
				(this.refs = v),
				(this.updater = n || g));
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
			(w.prototype = _.prototype));
		var j = (E.prototype = new w());
		((j.constructor = E), b(j, _.prototype), (j.isPureReactComponent = !0));
		var x = Array.isArray;
		function S() {}
		var k = { H: null, A: null, T: null, S: null },
			O = Object.prototype.hasOwnProperty;
		function T(e, t, n) {
			var r = n.ref;
			return {
				$$typeof: o,
				type: e,
				key: t,
				ref: void 0 !== r ? r : null,
				props: n,
			};
		}
		function P(e) {
			return 'object' == typeof e && null !== e && e.$$typeof === o;
		}
		var C = /\/+/g;
		function M(e, t) {
			var n, r;
			return 'object' == typeof e && null !== e && null != e.key
				? ((n = '' + e.key),
					(r = { '=': '=0', ':': '=2' }),
					'$' +
						n.replace(/[=:]/g, function (e) {
							return r[e];
						}))
				: t.toString(36);
		}
		function R(e, t, n) {
			if (null == e) return e;
			var r = [],
				i = 0;
			return (
				!(function e(t, n, r, i, a) {
					var s,
						l,
						c,
						f = typeof t;
					('undefined' === f || 'boolean' === f) && (t = null);
					var d = !1;
					if (null === t) d = !0;
					else
						switch (f) {
							case 'bigint':
							case 'string':
							case 'number':
								d = !0;
								break;
							case 'object':
								switch (t.$$typeof) {
									case o:
									case u:
										d = !0;
										break;
									case y:
										return e((d = t._init)(t._payload), n, r, i, a);
								}
						}
					if (d)
						return (
							(a = a(t)),
							(d = '' === i ? '.' + M(t, 0) : i),
							x(a)
								? ((r = ''),
									null != d && (r = d.replace(C, '$&/') + '/'),
									e(a, n, r, '', function (e) {
										return e;
									}))
								: null != a &&
									(P(a) &&
										((s = a),
										(l =
											r +
											(null == a.key || (t && t.key === a.key)
												? ''
												: ('' + a.key).replace(C, '$&/') + '/') +
											d),
										(a = T(s.type, l, s.props))),
									n.push(a)),
							1
						);
					d = 0;
					var p = '' === i ? '.' : i + ':';
					if (x(t))
						for (var h = 0; h < t.length; h++)
							((f = p + M((i = t[h]), h)), (d += e(i, n, r, f, a)));
					else if (
						'function' ==
						typeof (h =
							null === (c = t) || 'object' != typeof c
								? null
								: 'function' == typeof (c = (m && c[m]) || c['@@iterator'])
									? c
									: null)
					)
						for (t = h.call(t), h = 0; !(i = t.next()).done; )
							((f = p + M((i = i.value), h++)), (d += e(i, n, r, f, a)));
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
													? e.then(S, S)
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
								n,
								r,
								i,
								a,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (n = String(t))
									? 'object with keys {' + Object.keys(t).join(', ') + '}'
									: n) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return d;
				})(e, r, '', '', function (e) {
					return t.call(n, e, i++);
				}),
				r
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
		var I =
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
							'object' == typeof r.default &&
							'function' == typeof r.default.emit
						)
							return void r.default.emit('uncaughtException', e);
						console.error(e);
					};
		((n.Activity = h),
			(n.Children = {
				map: R,
				forEach: function (e, t, n) {
					R(
						e,
						function () {
							t.apply(this, arguments);
						},
						n,
					);
				},
				count: function (e) {
					var t = 0;
					return (
						R(e, function () {
							t++;
						}),
						t
					);
				},
				toArray: function (e) {
					return (
						R(e, function (e) {
							return e;
						}) || []
					);
				},
				only: function (e) {
					if (!P(e))
						throw Error(
							'React.Children.only expected to receive a single React element child.',
						);
					return e;
				},
			}),
			(n.Component = _),
			(n.Fragment = i),
			(n.Profiler = s),
			(n.PureComponent = E),
			(n.StrictMode = a),
			(n.Suspense = d),
			(n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
			(n.__COMPILER_RUNTIME = {
				__proto__: null,
				c: function (e) {
					return k.H.useMemoCache(e);
				},
			}),
			(n.cache = function (e) {
				return function () {
					return e.apply(null, arguments);
				};
			}),
			(n.cacheSignal = function () {
				return null;
			}),
			(n.cloneElement = function (e, t, n) {
				if (null == e)
					throw Error(
						'The argument must be a React element, but you passed ' + e + '.',
					);
				var r = b({}, e.props),
					o = e.key;
				if (null != t)
					for (u in (void 0 !== t.key && (o = '' + t.key), t))
						O.call(t, u) &&
							'key' !== u &&
							'__self' !== u &&
							'__source' !== u &&
							('ref' !== u || void 0 !== t.ref) &&
							(r[u] = t[u]);
				var u = arguments.length - 2;
				if (1 === u) r.children = n;
				else if (1 < u) {
					for (var i = Array(u), a = 0; a < u; a++) i[a] = arguments[a + 2];
					r.children = i;
				}
				return T(e.type, o, r);
			}),
			(n.createContext = function (e) {
				return (
					((e = {
						$$typeof: c,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
					}).Provider = e),
					(e.Consumer = { $$typeof: l, _context: e }),
					e
				);
			}),
			(n.createElement = function (e, t, n) {
				var r,
					o = {},
					u = null;
				if (null != t)
					for (r in (void 0 !== t.key && (u = '' + t.key), t))
						O.call(t, r) &&
							'key' !== r &&
							'__self' !== r &&
							'__source' !== r &&
							(o[r] = t[r]);
				var i = arguments.length - 2;
				if (1 === i) o.children = n;
				else if (1 < i) {
					for (var a = Array(i), s = 0; s < i; s++) a[s] = arguments[s + 2];
					o.children = a;
				}
				if (e && e.defaultProps)
					for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
				return T(e, u, o);
			}),
			(n.createRef = function () {
				return { current: null };
			}),
			(n.forwardRef = function (e) {
				return { $$typeof: f, render: e };
			}),
			(n.isValidElement = P),
			(n.lazy = function (e) {
				return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: H };
			}),
			(n.memo = function (e, t) {
				return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
			}),
			(n.startTransition = function (e) {
				var t = k.T,
					n = {};
				k.T = n;
				try {
					var r = e(),
						o = k.S;
					(null !== o && o(n, r),
						'object' == typeof r &&
							null !== r &&
							'function' == typeof r.then &&
							r.then(S, I));
				} catch (e) {
					I(e);
				} finally {
					(null !== t && null !== n.types && (t.types = n.types), (k.T = t));
				}
			}),
			(n.unstable_useCacheRefresh = function () {
				return k.H.useCacheRefresh();
			}),
			(n.use = function (e) {
				return k.H.use(e);
			}),
			(n.useActionState = function (e, t, n) {
				return k.H.useActionState(e, t, n);
			}),
			(n.useCallback = function (e, t) {
				return k.H.useCallback(e, t);
			}),
			(n.useContext = function (e) {
				return k.H.useContext(e);
			}),
			(n.useDebugValue = function () {}),
			(n.useDeferredValue = function (e, t) {
				return k.H.useDeferredValue(e, t);
			}),
			(n.useEffect = function (e, t) {
				return k.H.useEffect(e, t);
			}),
			(n.useEffectEvent = function (e) {
				return k.H.useEffectEvent(e);
			}),
			(n.useId = function () {
				return k.H.useId();
			}),
			(n.useImperativeHandle = function (e, t, n) {
				return k.H.useImperativeHandle(e, t, n);
			}),
			(n.useInsertionEffect = function (e, t) {
				return k.H.useInsertionEffect(e, t);
			}),
			(n.useLayoutEffect = function (e, t) {
				return k.H.useLayoutEffect(e, t);
			}),
			(n.useMemo = function (e, t) {
				return k.H.useMemo(e, t);
			}),
			(n.useOptimistic = function (e, t) {
				return k.H.useOptimistic(e, t);
			}),
			(n.useReducer = function (e, t, n) {
				return k.H.useReducer(e, t, n);
			}),
			(n.useRef = function (e) {
				return k.H.useRef(e);
			}),
			(n.useState = function (e) {
				return k.H.useState(e);
			}),
			(n.useSyncExternalStore = function (e, t, n) {
				return k.H.useSyncExternalStore(e, t, n);
			}),
			(n.useTransition = function () {
				return k.H.useTransition();
			}),
			(n.version = '19.2.0'));
	},
	6960,
	(e, t, n) => {
		'use strict';
		t.exports = e.r(4513);
	},
	7602,
	(e, t, n) => {
		'use strict';
		function r(e) {
			if ('function' != typeof WeakMap) return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (r = function (e) {
				return e ? n : t;
			})(e);
		}
		n._ = function (e, t) {
			if (!t && e && e.__esModule) return e;
			if (null === e || ('object' != typeof e && 'function' != typeof e))
				return { default: e };
			var n = r(t);
			if (n && n.has(e)) return n.get(e);
			var o = { __proto__: null },
				u = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
					var a = u ? Object.getOwnPropertyDescriptor(e, i) : null;
					a && (a.get || a.set)
						? Object.defineProperty(o, i, a)
						: (o[i] = e[i]);
				}
			return ((o.default = e), n && n.set(e, o), o);
		};
	},
	5288,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			!(function (e, t) {
				for (var n in t)
					Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
			})(n, {
				DecodeError: function () {
					return h;
				},
				MiddlewareNotFoundError: function () {
					return v;
				},
				MissingStaticPage: function () {
					return b;
				},
				NormalizeError: function () {
					return m;
				},
				PageNotFoundError: function () {
					return g;
				},
				SP: function () {
					return p;
				},
				ST: function () {
					return y;
				},
				WEB_VITALS: function () {
					return r;
				},
				execOnce: function () {
					return o;
				},
				getDisplayName: function () {
					return l;
				},
				getLocationOrigin: function () {
					return a;
				},
				getURL: function () {
					return s;
				},
				isAbsoluteUrl: function () {
					return i;
				},
				isResSent: function () {
					return c;
				},
				loadGetInitialProps: function () {
					return d;
				},
				normalizeRepeatedSlashes: function () {
					return f;
				},
				stringifyError: function () {
					return _;
				},
			}));
		let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function o(e) {
			let t,
				n = !1;
			return function () {
				for (var r = arguments.length, o = Array(r), u = 0; u < r; u++)
					o[u] = arguments[u];
				return (n || ((n = !0), (t = e(...o))), t);
			};
		}
		let u = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			i = (e) => u.test(e);
		function a() {
			let { protocol: e, hostname: t, port: n } = window.location;
			return e + '//' + t + (n ? ':' + n : '');
		}
		function s() {
			let { href: e } = window.location,
				t = a();
			return e.substring(t.length);
		}
		function l(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function c(e) {
			return e.finished || e.headersSent;
		}
		function f(e) {
			let t = e.split('?');
			return (
				t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
				(t[1] ? '?' + t.slice(1).join('?') : '')
			);
		}
		async function d(e, t) {
			let n = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps)
				return t.ctx && t.Component
					? { pageProps: await d(t.Component, t.ctx) }
					: {};
			let r = await e.getInitialProps(t);
			if (n && c(n)) return r;
			if (!r)
				throw Object.defineProperty(
					Error(
						'"' +
							l(e) +
							'.getInitialProps()" should resolve to an object. But found "' +
							r +
							'" instead.',
					),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return r;
		}
		let p = 'undefined' != typeof performance,
			y =
				p &&
				['mark', 'measure', 'getEntriesByName'].every(
					(e) => 'function' == typeof performance[e],
				);
		class h extends Error {}
		class m extends Error {}
		class g extends Error {
			constructor(e) {
				(super(),
					(this.code = 'ENOENT'),
					(this.name = 'PageNotFoundError'),
					(this.message = 'Cannot find module for page: ' + e));
			}
		}
		class b extends Error {
			constructor(e, t) {
				(super(),
					(this.message =
						'Failed to load static file for page: ' + e + ' ' + t));
			}
		}
		class v extends Error {
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
	8271,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'useIntersection', {
				enumerable: !0,
				get: function () {
					return s;
				},
			}));
		let r = e.r(6960),
			o = e.r(6926),
			u = 'function' == typeof IntersectionObserver,
			i = new Map(),
			a = [];
		function s(e) {
			let { rootRef: t, rootMargin: n, disabled: s } = e,
				l = s || !u,
				[c, f] = (0, r.useState)(!1),
				d = (0, r.useRef)(null),
				p = (0, r.useCallback)((e) => {
					d.current = e;
				}, []);
			return (
				(0, r.useEffect)(() => {
					if (u) {
						if (l || c) return;
						let e = d.current;
						if (e && e.tagName)
							return (function (e, t, n) {
								let {
									id: r,
									observer: o,
									elements: u,
								} = (function (e) {
									let t,
										n = { root: e.root || null, margin: e.rootMargin || '' },
										r = a.find(
											(e) => e.root === n.root && e.margin === n.margin,
										);
									if (r && (t = i.get(r))) return t;
									let o = new Map();
									return (
										(t = {
											id: n,
											observer: new IntersectionObserver((e) => {
												e.forEach((e) => {
													let t = o.get(e.target),
														n = e.isIntersecting || e.intersectionRatio > 0;
													t && n && t(n);
												});
											}, e),
											elements: o,
										}),
										a.push(n),
										i.set(n, t),
										t
									);
								})(n);
								return (
									u.set(e, t),
									o.observe(e),
									function () {
										if ((u.delete(e), o.unobserve(e), 0 === u.size)) {
											(o.disconnect(), i.delete(r));
											let e = a.findIndex(
												(e) => e.root === r.root && e.margin === r.margin,
											);
											e > -1 && a.splice(e, 1);
										}
									}
								);
							})(e, (e) => e && f(e), {
								root: null == t ? void 0 : t.current,
								rootMargin: n,
							});
					} else if (!c) {
						let e = (0, o.requestIdleCallback)(() => f(!0));
						return () => (0, o.cancelIdleCallback)(e);
					}
				}, [l, n, t, c, d.current]),
				[
					p,
					c,
					(0, r.useCallback)(() => {
						f(!1);
					}, []),
				]
			);
		}
		('function' == typeof n.default ||
			('object' == typeof n.default && null !== n.default)) &&
			void 0 === n.default.__esModule &&
			(Object.defineProperty(n.default, '__esModule', { value: !0 }),
			Object.assign(n.default, n),
			(t.exports = n.default));
	},
	4e3,
	(e, t, n) => {
		'use strict';
		function r(e, t, n, r) {
			return !1;
		}
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'getDomainLocale', {
				enumerable: !0,
				get: function () {
					return r;
				},
			}),
			e.r(9214),
			('function' == typeof n.default ||
				('object' == typeof n.default && null !== n.default)) &&
				void 0 === n.default.__esModule &&
				(Object.defineProperty(n.default, '__esModule', { value: !0 }),
				Object.assign(n.default, n),
				(t.exports = n.default)));
	},
	9244,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'useMergedRef', {
				enumerable: !0,
				get: function () {
					return o;
				},
			}));
		let r = e.r(6960);
		function o(e, t) {
			let n = (0, r.useRef)(null),
				o = (0, r.useRef)(null);
			return (0, r.useCallback)(
				(r) => {
					if (null === r) {
						let e = n.current;
						e && ((n.current = null), e());
						let t = o.current;
						t && ((o.current = null), t());
					} else (e && (n.current = u(e, r)), t && (o.current = u(t, r)));
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
				let n = e(t);
				return 'function' == typeof n ? n : () => e(null);
			}
		}
		('function' == typeof n.default ||
			('object' == typeof n.default && null !== n.default)) &&
			void 0 === n.default.__esModule &&
			(Object.defineProperty(n.default, '__esModule', { value: !0 }),
			Object.assign(n.default, n),
			(t.exports = n.default));
	},
	942,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'errorOnce', {
				enumerable: !0,
				get: function () {
					return r;
				},
			}));
		let r = (e) => {};
	},
	694,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			!(function (e, t) {
				for (var n in t)
					Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
			})(n, {
				default: function () {
					return E;
				},
				useLinkStatus: function () {
					return w;
				},
			}));
		let r = e.r(7602),
			o = e.r(4601),
			u = r._(e.r(6960)),
			i = e.r(356),
			a = e.r(7138),
			s = e.r(7215),
			l = e.r(5288),
			c = e.r(2958),
			f = e.r(1379),
			d = e.r(8271),
			p = e.r(4e3),
			y = e.r(4243),
			h = e.r(9244);
		e.r(942);
		let m = new Set();
		function g(e, t, n, r) {
			if ('undefined' != typeof window && (0, a.isLocalURL)(t)) {
				if (!r.bypassPrefetchedCheck) {
					let o =
						t +
						'%' +
						n +
						'%' +
						(void 0 !== r.locale
							? r.locale
							: 'locale' in e
								? e.locale
								: void 0);
					if (m.has(o)) return;
					m.add(o);
				}
				e.prefetch(t, n, r).catch((e) => {});
			}
		}
		function b(e) {
			return 'string' == typeof e ? e : (0, s.formatUrl)(e);
		}
		let v = u.default.forwardRef(function (e, t) {
				let n,
					r,
					{
						href: s,
						as: m,
						children: v,
						prefetch: _ = null,
						passHref: w,
						replace: E,
						shallow: j,
						scroll: x,
						locale: S,
						onClick: k,
						onNavigate: O,
						onMouseEnter: T,
						onTouchStart: P,
						legacyBehavior: C = !1,
						...M
					} = e;
				((n = v),
					C &&
						('string' == typeof n || 'number' == typeof n) &&
						(n = (0, o.jsx)('a', { children: n })));
				let R = u.default.useContext(f.RouterContext),
					H = !1 !== _,
					{ href: I, as: L } = u.default.useMemo(() => {
						if (!R) {
							let e = b(s);
							return { href: e, as: m ? b(m) : e };
						}
						let [e, t] = (0, i.resolveHref)(R, s, !0);
						return { href: e, as: m ? (0, i.resolveHref)(R, m) : t || e };
					}, [R, s, m]),
					A = u.default.useRef(I),
					N = u.default.useRef(L);
				C && (r = u.default.Children.only(n));
				let D = C ? r && 'object' == typeof r && r.ref : t,
					[$, U, F] = (0, d.useIntersection)({ rootMargin: '200px' }),
					B = u.default.useCallback(
						(e) => {
							((N.current !== L || A.current !== I) &&
								(F(), (N.current = L), (A.current = I)),
								$(e));
						},
						[L, I, F, $],
					),
					q = (0, h.useMergedRef)(B, D);
				u.default.useEffect(() => {
					R && U && H && g(R, I, L, { locale: S });
				}, [L, I, U, S, H, null == R ? void 0 : R.locale, R]);
				let z = {
					ref: q,
					onClick(e) {
						(C || 'function' != typeof k || k(e),
							C &&
								r.props &&
								'function' == typeof r.props.onClick &&
								r.props.onClick(e),
							R &&
								(e.defaultPrevented ||
									(function (e, t, n, r, o, u, i, s, l) {
										let { nodeName: c } = e.currentTarget;
										if (
											!(
												('A' === c.toUpperCase() &&
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
											if (!(0, a.isLocalURL)(n)) {
												o && (e.preventDefault(), location.replace(n));
												return;
											}
											(e.preventDefault(),
												(() => {
													if (l) {
														let e = !1;
														if (
															(l({
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
														? t[o ? 'replace' : 'push'](n, r, {
																shallow: u,
																locale: s,
																scroll: e,
															})
														: t[o ? 'replace' : 'push'](r || n, { scroll: e });
												})());
										}
									})(e, R, I, L, E, j, x, S, O)));
					},
					onMouseEnter(e) {
						(C || 'function' != typeof T || T(e),
							C &&
								r.props &&
								'function' == typeof r.props.onMouseEnter &&
								r.props.onMouseEnter(e),
							R &&
								g(R, I, L, {
									locale: S,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
					onTouchStart: function (e) {
						(C || 'function' != typeof P || P(e),
							C &&
								r.props &&
								'function' == typeof r.props.onTouchStart &&
								r.props.onTouchStart(e),
							R &&
								g(R, I, L, {
									locale: S,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
				};
				if ((0, l.isAbsoluteUrl)(L)) z.href = L;
				else if (!C || w || ('a' === r.type && !('href' in r.props))) {
					let e = void 0 !== S ? S : null == R ? void 0 : R.locale;
					z.href =
						((null == R ? void 0 : R.isLocaleDomain) &&
							(0, p.getDomainLocale)(
								L,
								e,
								null == R ? void 0 : R.locales,
								null == R ? void 0 : R.domainLocales,
							)) ||
						(0, y.addBasePath)(
							(0, c.addLocale)(L, e, null == R ? void 0 : R.defaultLocale),
						);
				}
				return C
					? u.default.cloneElement(r, z)
					: (0, o.jsx)('a', { ...M, ...z, children: n });
			}),
			_ = (0, u.createContext)({ pending: !1 }),
			w = () => (0, u.useContext)(_),
			E = v;
		('function' == typeof n.default ||
			('object' == typeof n.default && null !== n.default)) &&
			void 0 === n.default.__esModule &&
			(Object.defineProperty(n.default, '__esModule', { value: !0 }),
			Object.assign(n.default, n),
			(t.exports = n.default));
	},
	1594,
	(e, t, n) => {
		t.exports = e.r(694);
	},
	9438,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'HeadManagerContext', {
				enumerable: !0,
				get: function () {
					return r;
				},
			}));
		let r = e.r(2879)._(e.r(6960)).default.createContext({});
	},
	6220,
	(e, t, n) => {
		'use strict';
		(Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'warnOnce', {
				enumerable: !0,
				get: function () {
					return r;
				},
			}));
		let r = (e) => {};
	},
	6638,
	(e) => {
		'use strict';
		e.s(['APP_NAME', () => t, 'INITIAL_MARKDOWN', () => n]);
		let t = 'crystallised.md',
			n =
				'# Markdown Cheat Sheet\n\nThanks for visiting [The Markdown Guide](https://www.markdownguide.org)!\n\nThis Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can\'t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/).\n\n## Basic Syntax\n\nThese are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.\n\n### Heading\n\n# H1\n## H2\n### H3\n\n### Bold\n\n**bold text**\n\n### Italic\n\n*italicized text*\n\n### Blockquote\n\n> blockquote\n\n### Ordered List\n\n1. First item\n2. Second item\n3. Third item\n\n### Unordered List\n\n- First item\n- Second item\n- Third item\n\n### Code\n\n`code`\n\n### Horizontal Rule\n\n---\n\n### Link\n\n[Markdown Guide](https://www.markdownguide.org)\n\n### Image\n\n![alt text](https://www.markdownguide.org/assets/images/tux.png)\n\n## Extended Syntax\n\nThese elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.\n\n### Table\n\n| Syntax | Description |\n| ----------- | ----------- |\n| Header | Title |\n| Paragraph | Text |\n\n### Fenced Code Block\n\n```\n{\n  "firstName": "John",\n  "lastName": "Smith",\n  "age": 25\n}\n```\n\n### Footnote\n\nHere\'s a sentence with a footnote. [^1]\n\n[^1]: This is the footnote.\n\n### Heading ID\n\n### My Great Heading {#custom-id}\n\n### Definition List\n\nterm\n: definition\n\n### Strikethrough\n\n~~The world is flat.~~\n\n### Task List\n\n- [x] Write the press release\n- [ ] Update the website\n- [ ] Contact the media\n\n### Emoji\n\nThat is so funny! :joy:\n\n(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))\n\n### Highlight\n\nI need to highlight these ==very important words==.\n\n### Subscript\n\nH~2~O\n\n### Superscript\n\nX^2^';
	},
	8858,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/be6022e3877460d4.js'].map((t) => e.l(t)),
			).then(() => t(5894)),
		);
	},
	3489,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/6ce9796b6bb77c2f.js'].map((t) => e.l(t)),
			).then(() => t(3672)),
		);
	},
]);
