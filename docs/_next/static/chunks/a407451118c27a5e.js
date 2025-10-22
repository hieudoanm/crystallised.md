(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	5402,
	(e, t, r) => {
		var n = {
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
					function a(e) {
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
					var s = [],
						l = !1,
						c = -1;
					function f() {
						l &&
							n &&
							((l = !1),
							n.length ? (s = n.concat(s)) : (c = -1),
							s.length && d());
					}
					function d() {
						if (!l) {
							var e = a(f);
							l = !0;
							for (var t = s.length; t; ) {
								for (n = s, s = []; ++c < t; ) n && n[c].run();
								((c = -1), (t = s.length));
							}
							((n = null),
								(l = !1),
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
					function p(e, t) {
						((this.fun = e), (this.array = t));
					}
					function y() {}
					((o.nextTick = function (e) {
						var t = Array(arguments.length - 1);
						if (arguments.length > 1)
							for (var r = 1; r < arguments.length; r++)
								t[r - 1] = arguments[r];
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
			o = {};
		function u(e) {
			var t = o[e];
			if (void 0 !== t) return t.exports;
			var r = (o[e] = { exports: {} }),
				i = !0;
			try {
				(n[e](r, r.exports, u), (i = !1));
			} finally {
				i && delete o[e];
			}
			return r.exports;
		}
		((u.ab =
			'/ROOT/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
			(t.exports = u(229)));
	},
	9779,
	(e, t, r) => {
		'use strict';
		var n, o;
		t.exports =
			(null == (n = e.g.process) ? void 0 : n.env) &&
			'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(5402);
	},
	2879,
	(e, t, r) => {
		'use strict';
		r._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	2983,
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
		t.exports = e.r(2983);
	},
	4513,
	(e, t, r) => {
		'use strict';
		var n = e.i(9779),
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
		function _(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = v),
				(this.updater = r || g));
		}
		function w() {}
		function E(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = v),
				(this.updater = r || g));
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
		function T(e, t, r) {
			var n = r.ref;
			return {
				$$typeof: o,
				type: e,
				key: t,
				ref: void 0 !== n ? n : null,
				props: r,
			};
		}
		function P(e) {
			return 'object' == typeof e && null !== e && e.$$typeof === o;
		}
		var C = /\/+/g;
		function M(e, t) {
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
		function R(e, t, r) {
			if (null == e) return e;
			var n = [],
				i = 0;
			return (
				!(function e(t, r, n, i, a) {
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
										return e((d = t._init)(t._payload), r, n, i, a);
								}
						}
					if (d)
						return (
							(a = a(t)),
							(d = '' === i ? '.' + M(t, 0) : i),
							x(a)
								? ((n = ''),
									null != d && (n = d.replace(C, '$&/') + '/'),
									e(a, r, n, '', function (e) {
										return e;
									}))
								: null != a &&
									(P(a) &&
										((s = a),
										(l =
											n +
											(null == a.key || (t && t.key === a.key)
												? ''
												: ('' + a.key).replace(C, '$&/') + '/') +
											d),
										(a = T(s.type, l, s.props))),
									r.push(a)),
							1
						);
					d = 0;
					var p = '' === i ? '.' : i + ':';
					if (x(t))
						for (var h = 0; h < t.length; h++)
							((f = p + M((i = t[h]), h)), (d += e(i, r, n, f, a)));
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
							((f = p + M((i = i.value), h++)), (d += e(i, r, n, f, a)));
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
								r,
								n,
								i,
								a,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (r = String(t))
									? 'object with keys {' + Object.keys(t).join(', ') + '}'
									: r) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return d;
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
							'object' == typeof n.default &&
							'function' == typeof n.default.emit
						)
							return void n.default.emit('uncaughtException', e);
						console.error(e);
					};
		((r.Activity = h),
			(r.Children = {
				map: R,
				forEach: function (e, t, r) {
					R(
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
			(r.Component = _),
			(r.Fragment = i),
			(r.Profiler = s),
			(r.PureComponent = E),
			(r.StrictMode = a),
			(r.Suspense = d),
			(r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
			(r.__COMPILER_RUNTIME = {
				__proto__: null,
				c: function (e) {
					return k.H.useMemoCache(e);
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
				var n = b({}, e.props),
					o = e.key;
				if (null != t)
					for (u in (void 0 !== t.key && (o = '' + t.key), t))
						O.call(t, u) &&
							'key' !== u &&
							'__self' !== u &&
							'__source' !== u &&
							('ref' !== u || void 0 !== t.ref) &&
							(n[u] = t[u]);
				var u = arguments.length - 2;
				if (1 === u) n.children = r;
				else if (1 < u) {
					for (var i = Array(u), a = 0; a < u; a++) i[a] = arguments[a + 2];
					n.children = i;
				}
				return T(e.type, o, n);
			}),
			(r.createContext = function (e) {
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
			(r.createElement = function (e, t, r) {
				var n,
					o = {},
					u = null;
				if (null != t)
					for (n in (void 0 !== t.key && (u = '' + t.key), t))
						O.call(t, n) &&
							'key' !== n &&
							'__self' !== n &&
							'__source' !== n &&
							(o[n] = t[n]);
				var i = arguments.length - 2;
				if (1 === i) o.children = r;
				else if (1 < i) {
					for (var a = Array(i), s = 0; s < i; s++) a[s] = arguments[s + 2];
					o.children = a;
				}
				if (e && e.defaultProps)
					for (n in (i = e.defaultProps)) void 0 === o[n] && (o[n] = i[n]);
				return T(e, u, o);
			}),
			(r.createRef = function () {
				return { current: null };
			}),
			(r.forwardRef = function (e) {
				return { $$typeof: f, render: e };
			}),
			(r.isValidElement = P),
			(r.lazy = function (e) {
				return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: H };
			}),
			(r.memo = function (e, t) {
				return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
			}),
			(r.startTransition = function (e) {
				var t = k.T,
					r = {};
				k.T = r;
				try {
					var n = e(),
						o = k.S;
					(null !== o && o(r, n),
						'object' == typeof n &&
							null !== n &&
							'function' == typeof n.then &&
							n.then(S, I));
				} catch (e) {
					I(e);
				} finally {
					(null !== t && null !== r.types && (t.types = r.types), (k.T = t));
				}
			}),
			(r.unstable_useCacheRefresh = function () {
				return k.H.useCacheRefresh();
			}),
			(r.use = function (e) {
				return k.H.use(e);
			}),
			(r.useActionState = function (e, t, r) {
				return k.H.useActionState(e, t, r);
			}),
			(r.useCallback = function (e, t) {
				return k.H.useCallback(e, t);
			}),
			(r.useContext = function (e) {
				return k.H.useContext(e);
			}),
			(r.useDebugValue = function () {}),
			(r.useDeferredValue = function (e, t) {
				return k.H.useDeferredValue(e, t);
			}),
			(r.useEffect = function (e, t) {
				return k.H.useEffect(e, t);
			}),
			(r.useEffectEvent = function (e) {
				return k.H.useEffectEvent(e);
			}),
			(r.useId = function () {
				return k.H.useId();
			}),
			(r.useImperativeHandle = function (e, t, r) {
				return k.H.useImperativeHandle(e, t, r);
			}),
			(r.useInsertionEffect = function (e, t) {
				return k.H.useInsertionEffect(e, t);
			}),
			(r.useLayoutEffect = function (e, t) {
				return k.H.useLayoutEffect(e, t);
			}),
			(r.useMemo = function (e, t) {
				return k.H.useMemo(e, t);
			}),
			(r.useOptimistic = function (e, t) {
				return k.H.useOptimistic(e, t);
			}),
			(r.useReducer = function (e, t, r) {
				return k.H.useReducer(e, t, r);
			}),
			(r.useRef = function (e) {
				return k.H.useRef(e);
			}),
			(r.useState = function (e) {
				return k.H.useState(e);
			}),
			(r.useSyncExternalStore = function (e, t, r) {
				return k.H.useSyncExternalStore(e, t, r);
			}),
			(r.useTransition = function () {
				return k.H.useTransition();
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
					var a = u ? Object.getOwnPropertyDescriptor(e, i) : null;
					a && (a.get || a.set)
						? Object.defineProperty(o, i, a)
						: (o[i] = e[i]);
				}
			return ((o.default = e), r && r.set(e, o), o);
		};
	},
	3790,
	(e, t, r) => {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		var n = {
			DecodeError: function () {
				return g;
			},
			MiddlewareNotFoundError: function () {
				return w;
			},
			MissingStaticPage: function () {
				return _;
			},
			NormalizeError: function () {
				return b;
			},
			PageNotFoundError: function () {
				return v;
			},
			SP: function () {
				return h;
			},
			ST: function () {
				return m;
			},
			WEB_VITALS: function () {
				return u;
			},
			execOnce: function () {
				return i;
			},
			getDisplayName: function () {
				return f;
			},
			getLocationOrigin: function () {
				return l;
			},
			getURL: function () {
				return c;
			},
			isAbsoluteUrl: function () {
				return s;
			},
			isResSent: function () {
				return d;
			},
			loadGetInitialProps: function () {
				return y;
			},
			normalizeRepeatedSlashes: function () {
				return p;
			},
			stringifyError: function () {
				return E;
			},
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		let u = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function i(e) {
			let t,
				r = !1;
			return (...n) => (r || ((r = !0), (t = e(...n))), t);
		}
		let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			s = (e) => a.test(e);
		function l() {
			let { protocol: e, hostname: t, port: r } = window.location;
			return `${e}//${t}${r ? ':' + r : ''}`;
		}
		function c() {
			let { href: e } = window.location,
				t = l();
			return e.substring(t.length);
		}
		function f(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function d(e) {
			return e.finished || e.headersSent;
		}
		function p(e) {
			let t = e.split('?');
			return (
				t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
				(t[1] ? `?${t.slice(1).join('?')}` : '')
			);
		}
		async function y(e, t) {
			let r = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps)
				return t.ctx && t.Component
					? { pageProps: await y(t.Component, t.ctx) }
					: {};
			let n = await e.getInitialProps(t);
			if (r && d(r)) return n;
			if (!n)
				throw Object.defineProperty(
					Error(
						`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
					),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return n;
		}
		let h = 'undefined' != typeof performance,
			m =
				h &&
				['mark', 'measure', 'getEntriesByName'].every(
					(e) => 'function' == typeof performance[e],
				);
		class g extends Error {}
		class b extends Error {}
		class v extends Error {
			constructor(e) {
				(super(),
					(this.code = 'ENOENT'),
					(this.name = 'PageNotFoundError'),
					(this.message = `Cannot find module for page: ${e}`));
			}
		}
		class _ extends Error {
			constructor(e, t) {
				(super(),
					(this.message = `Failed to load static file for page: ${e} ${t}`));
			}
		}
		class w extends Error {
			constructor() {
				(super(),
					(this.code = 'ENOENT'),
					(this.message = 'Cannot find the middleware module'));
			}
		}
		function E(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	2410,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'useIntersection', {
				enumerable: !0,
				get: function () {
					return s;
				},
			}));
		let n = e.r(6960),
			o = e.r(1826),
			u = 'function' == typeof IntersectionObserver,
			i = new Map(),
			a = [];
		function s({ rootRef: e, rootMargin: t, disabled: r }) {
			let s = r || !u,
				[l, c] = (0, n.useState)(!1),
				f = (0, n.useRef)(null),
				d = (0, n.useCallback)((e) => {
					f.current = e;
				}, []);
			return (
				(0, n.useEffect)(() => {
					if (u) {
						if (s || l) return;
						let r = f.current;
						if (r && r.tagName)
							return (function (e, t, r) {
								let {
									id: n,
									observer: o,
									elements: u,
								} = (function (e) {
									let t,
										r = { root: e.root || null, margin: e.rootMargin || '' },
										n = a.find(
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
										a.push(r),
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
											let e = a.findIndex(
												(e) => e.root === n.root && e.margin === n.margin,
											);
											e > -1 && a.splice(e, 1);
										}
									}
								);
							})(r, (e) => e && c(e), { root: e?.current, rootMargin: t });
					} else if (!l) {
						let e = (0, o.requestIdleCallback)(() => c(!0));
						return () => (0, o.cancelIdleCallback)(e);
					}
				}, [s, t, e, l, f.current]),
				[
					d,
					l,
					(0, n.useCallback)(() => {
						c(!1);
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
	4691,
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
			e.r(8292),
			('function' == typeof r.default ||
				('object' == typeof r.default && null !== r.default)) &&
				void 0 === r.default.__esModule &&
				(Object.defineProperty(r.default, '__esModule', { value: !0 }),
				Object.assign(r.default, r),
				(t.exports = r.default)));
	},
	3003,
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
	9638,
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
	4988,
	(e, t, r) => {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		var n = {
			default: function () {
				return x;
			},
			useLinkStatus: function () {
				return j;
			},
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		let u = e.r(7602),
			i = e.r(4601),
			a = u._(e.r(6960)),
			s = e.r(4025),
			l = e.r(3729),
			c = e.r(4363),
			f = e.r(3790),
			d = e.r(5282),
			p = e.r(728),
			y = e.r(2410),
			h = e.r(4691),
			m = e.r(3706),
			g = e.r(3003);
		e.r(9638);
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
		function _(e) {
			return 'string' == typeof e ? e : (0, c.formatUrl)(e);
		}
		let w = a.default.forwardRef(function (e, t) {
				let r,
					n,
					{
						href: o,
						as: u,
						children: c,
						prefetch: b = null,
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
				((r = c),
					C &&
						('string' == typeof r || 'number' == typeof r) &&
						(r = (0, i.jsx)('a', { children: r })));
				let R = a.default.useContext(p.RouterContext),
					H = !1 !== b,
					{ href: I, as: L } = a.default.useMemo(() => {
						if (!R) {
							let e = _(o);
							return { href: e, as: u ? _(u) : e };
						}
						let [e, t] = (0, s.resolveHref)(R, o, !0);
						return { href: e, as: u ? (0, s.resolveHref)(R, u) : t || e };
					}, [R, o, u]),
					A = a.default.useRef(I),
					$ = a.default.useRef(L);
				C && (n = a.default.Children.only(r));
				let N = C ? n && 'object' == typeof n && n.ref : t,
					[D, U, F] = (0, y.useIntersection)({ rootMargin: '200px' }),
					B = a.default.useCallback(
						(e) => {
							(($.current !== L || A.current !== I) &&
								(F(), ($.current = L), (A.current = I)),
								D(e));
						},
						[L, I, F, D],
					),
					q = (0, g.useMergedRef)(B, N);
				a.default.useEffect(() => {
					!R || (U && H && v(R, I, L, { locale: S }));
				}, [L, I, U, S, H, R?.locale, R]);
				let z = {
					ref: q,
					onClick(e) {
						(C || 'function' != typeof k || k(e),
							C &&
								n.props &&
								'function' == typeof n.props.onClick &&
								n.props.onClick(e),
							!R ||
								e.defaultPrevented ||
								(function (e, t, r, n, o, u, i, a, s) {
									let c,
										{ nodeName: f } = e.currentTarget;
									if (
										!(
											('A' === f.toUpperCase() &&
												(((c = e.currentTarget.getAttribute('target')) &&
													'_self' !== c) ||
													e.metaKey ||
													e.ctrlKey ||
													e.shiftKey ||
													e.altKey ||
													(e.nativeEvent && 2 === e.nativeEvent.which))) ||
											e.currentTarget.hasAttribute('download')
										)
									) {
										if (!(0, l.isLocalURL)(r)) {
											o && (e.preventDefault(), location.replace(r));
											return;
										}
										(e.preventDefault(),
											(() => {
												if (s) {
													let e = !1;
													if (
														(s({
															preventDefault: () => {
																e = !0;
															},
														}),
														e)
													)
														return;
												}
												let e = i ?? !0;
												'beforePopState' in t
													? t[o ? 'replace' : 'push'](r, n, {
															shallow: u,
															locale: a,
															scroll: e,
														})
													: t[o ? 'replace' : 'push'](n || r, { scroll: e });
											})());
									}
								})(e, R, I, L, E, j, x, S, O));
					},
					onMouseEnter(e) {
						(C || 'function' != typeof T || T(e),
							C &&
								n.props &&
								'function' == typeof n.props.onMouseEnter &&
								n.props.onMouseEnter(e),
							R &&
								v(R, I, L, {
									locale: S,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
					onTouchStart: function (e) {
						(C || 'function' != typeof P || P(e),
							C &&
								n.props &&
								'function' == typeof n.props.onTouchStart &&
								n.props.onTouchStart(e),
							R &&
								v(R, I, L, {
									locale: S,
									priority: !0,
									bypassPrefetchedCheck: !0,
								}));
					},
				};
				if ((0, f.isAbsoluteUrl)(L)) z.href = L;
				else if (!C || w || ('a' === n.type && !('href' in n.props))) {
					let e = void 0 !== S ? S : R?.locale;
					z.href =
						(R?.isLocaleDomain &&
							(0, h.getDomainLocale)(L, e, R?.locales, R?.domainLocales)) ||
						(0, m.addBasePath)((0, d.addLocale)(L, e, R?.defaultLocale));
				}
				return C
					? a.default.cloneElement(n, z)
					: (0, i.jsx)('a', { ...M, ...z, children: r });
			}),
			E = (0, a.createContext)({ pending: !1 }),
			j = () => (0, a.useContext)(E),
			x = w;
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	4017,
	(e, t, r) => {
		t.exports = e.r(4988);
	},
	8065,
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
	8114,
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
	3083,
	(e) => {
		'use strict';
		let t = `# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can't cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

\`code\`

### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^`;
		e.s(['APP_NAME', 0, 'crystallised.md', 'INITIAL_MARKDOWN', 0, t]);
	},
	7114,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/0ba818133001a8cb.js'].map((t) => e.l(t)),
			).then(() => t(1201)),
		);
	},
	8093,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/001ccb3ba18d9746.js'].map((t) => e.l(t)),
			).then(() => t(2314)),
		);
	},
]);
