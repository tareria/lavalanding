(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        8679: function (e, t, n) {
            "use strict";
            var r = n(1296),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                a = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {};

            function u(e) {
                return r.isMemo(e) ? a : s[e.$$typeof] || o
            }
            s[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[r.Memo] = a;
            var c = Object.defineProperty,
                l = Object.getOwnPropertyNames,
                f = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                g = Object.getPrototypeOf,
                h = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" !== typeof n) {
                    if (h) {
                        var o = g(n);
                        o && o !== h && e(t, o, r)
                    }
                    var a = l(n);
                    f && (a = a.concat(f(n)));
                    for (var s = u(t), d = u(n), v = 0; v < a.length; ++v) {
                        var y = a[v];
                        if (!i[y] && (!r || !r[y]) && (!d || !d[y]) && (!s || !s[y])) {
                            var m = p(n, y);
                            try {
                                c(t, y, m)
                            } catch (b) {}
                        }
                    }
                }
                return t
            }
        },
        6103: function (e, t) {
            "use strict";
            var n = "function" === typeof Symbol && Symbol.for,
                r = n ? Symbol.for("react.element") : 60103,
                o = n ? Symbol.for("react.portal") : 60106,
                i = n ? Symbol.for("react.fragment") : 60107,
                a = n ? Symbol.for("react.strict_mode") : 60108,
                s = n ? Symbol.for("react.profiler") : 60114,
                u = n ? Symbol.for("react.provider") : 60109,
                c = n ? Symbol.for("react.context") : 60110,
                l = n ? Symbol.for("react.async_mode") : 60111,
                f = n ? Symbol.for("react.concurrent_mode") : 60111,
                p = n ? Symbol.for("react.forward_ref") : 60112,
                g = n ? Symbol.for("react.suspense") : 60113,
                h = n ? Symbol.for("react.suspense_list") : 60120,
                d = n ? Symbol.for("react.memo") : 60115,
                v = n ? Symbol.for("react.lazy") : 60116,
                y = n ? Symbol.for("react.block") : 60121,
                m = n ? Symbol.for("react.fundamental") : 60117,
                b = n ? Symbol.for("react.responder") : 60118,
                k = n ? Symbol.for("react.scope") : 60119;

            function w(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case r:
                            switch (e = e.type) {
                                case l:
                                case f:
                                case i:
                                case s:
                                case a:
                                case g:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case p:
                                        case v:
                                        case d:
                                        case u:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                            case o:
                                return t
                    }
                }
            }

            function x(e) {
                return w(e) === f
            }
            t.AsyncMode = l, t.ConcurrentMode = f, t.ContextConsumer = c, t.ContextProvider = u, t.Element = r, t.ForwardRef = p, t.Fragment = i, t.Lazy = v, t.Memo = d, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = g, t.isAsyncMode = function (e) {
                return x(e) || w(e) === l
            }, t.isConcurrentMode = x, t.isContextConsumer = function (e) {
                return w(e) === c
            }, t.isContextProvider = function (e) {
                return w(e) === u
            }, t.isElement = function (e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }, t.isForwardRef = function (e) {
                return w(e) === p
            }, t.isFragment = function (e) {
                return w(e) === i
            }, t.isLazy = function (e) {
                return w(e) === v
            }, t.isMemo = function (e) {
                return w(e) === d
            }, t.isPortal = function (e) {
                return w(e) === o
            }, t.isProfiler = function (e) {
                return w(e) === s
            }, t.isStrictMode = function (e) {
                return w(e) === a
            }, t.isSuspense = function (e) {
                return w(e) === g
            }, t.isValidElementType = function (e) {
                return "string" === typeof e || "function" === typeof e || e === i || e === f || e === s || e === a || e === g || e === h || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === d || e.$$typeof === u || e.$$typeof === c || e.$$typeof === p || e.$$typeof === m || e.$$typeof === b || e.$$typeof === k || e.$$typeof === y)
            }, t.typeOf = w
        },
        1296: function (e, t, n) {
            "use strict";
            e.exports = n(6103)
        },
        7985: function (e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                        } catch (u) {
                            s = !0, o = u
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function (e, t) {
                    if (e) {
                        if ("string" === typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                Jc: function () {
                    return Oe
                },
                $G: function () {
                    return O
                }
            });
            var a = n(7294);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t, n) {
                return t && u(e.prototype, t), n && u(e, n), e
            }
            var l, f = {
                    bindI18n: "languageChanged",
                    bindI18nStore: "",
                    transEmptyNodeValue: "",
                    transSupportBasicHtmlNodes: !0,
                    transWrapTextNodes: "",
                    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                    useSuspense: !0
                },
                p = a.createContext();

            function g() {
                return f
            }
            var h = function () {
                function e() {
                    s(this, e), this.usedNamespaces = {}
                }
                return c(e, [{
                    key: "addUsedNamespaces",
                    value: function (e) {
                        var t = this;
                        e.forEach((function (e) {
                            t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                        }))
                    }
                }, {
                    key: "getUsedNamespaces",
                    value: function () {
                        return Object.keys(this.usedNamespaces)
                    }
                }]), e
            }();

            function d() {
                return l
            }

            function v() {
                if (console && console.warn) {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    "string" === typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])), (e = console).warn.apply(e, n)
                }
            }
            var y = {};

            function m() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                "string" === typeof t[0] && y[t[0]] || ("string" === typeof t[0] && (y[t[0]] = new Date), v.apply(void 0, t))
            }

            function b(e, t, n) {
                e.loadNamespaces(t, (function () {
                    if (e.isInitialized) n();
                    else {
                        e.on("initialized", (function t() {
                            setTimeout((function () {
                                e.off("initialized", t)
                            }), 0), n()
                        }))
                    }
                }))
            }

            function k(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!t.languages || !t.languages.length) return m("i18n.languages were undefined or empty", t.languages), !0;
                var r = t.languages[0],
                    o = !!t.options && t.options.fallbackLng,
                    i = t.languages[t.languages.length - 1];
                if ("cimode" === r.toLowerCase()) return !0;
                var a = function (e, n) {
                    var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                    return -1 === r || 2 === r
                };
                return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(r, e) || (!t.services.backendConnector.backend || !(!a(r, e) || o && !a(i, e))))
            }

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function (t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.i18n,
                    r = (0, a.useContext)(p) || {},
                    i = r.i18n,
                    s = r.defaultNS,
                    u = n || i || d();
                if (u && !u.reportNamespaces && (u.reportNamespaces = new h), !u) {
                    m("You will need to pass in an i18next instance by using initReactI18next");
                    var c = function (e) {
                            return Array.isArray(e) ? e[e.length - 1] : e
                        },
                        l = [c, {}, !1];
                    return l.t = c, l.i18n = {}, l.ready = !1, l
                }
                u.options.react && void 0 !== u.options.react.wait && m("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                var f = x(x(x({}, g()), u.options.react), t),
                    v = f.useSuspense,
                    y = f.keyPrefix,
                    w = e || s || u.options && u.options.defaultNS;
                w = "string" === typeof w ? [w] : w || ["translation"], u.reportNamespaces.addUsedNamespaces && u.reportNamespaces.addUsedNamespaces(w);
                var O = (u.isInitialized || u.initializedStoreOnce) && w.every((function (e) {
                    return k(e, u, f)
                }));

                function S() {
                    return u.getFixedT(null, "fallback" === f.nsMode ? w : w[0], y)
                }
                var j = (0, a.useState)(S),
                    P = o(j, 2),
                    L = P[0],
                    N = P[1],
                    C = (0, a.useRef)(!0);
                (0, a.useEffect)((function () {
                    var e = f.bindI18n,
                        t = f.bindI18nStore;

                    function n() {
                        C.current && N(S)
                    }
                    return C.current = !0, O || v || b(u, w, (function () {
                            C.current && N(S)
                        })), e && u && u.on(e, n), t && u && u.store.on(t, n),
                        function () {
                            C.current = !1, e && u && e.split(" ").forEach((function (e) {
                                return u.off(e, n)
                            })), t && u && t.split(" ").forEach((function (e) {
                                return u.store.off(e, n)
                            }))
                        }
                }), [u, w.join()]);
                var E = (0, a.useRef)(!0);
                (0, a.useEffect)((function () {
                    C.current && !E.current && N(S), E.current = !1
                }), [u]);
                var R = [L, u, O];
                if (R.t = L, R.i18n = u, R.ready = O, O) return R;
                if (!O && !v) return R;
                throw new Promise((function (e) {
                    b(u, w, (function () {
                        e()
                    }))
                }))
            }

            function S() {
                return (S = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            var j = n(8679),
                P = n.n(j);

            function L(e) {
                var t = e.i18n,
                    n = e.defaultNS,
                    r = e.children,
                    o = (0, a.useMemo)((function () {
                        return {
                            i18n: t,
                            defaultNS: n
                        }
                    }), [t, n]);
                return (0, a.createElement)(p.Provider, {
                    value: o
                }, r)
            }

            function N(e, t) {
                if (null == e) return {};
                var n, r, o = function (e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                }
                return o
            }
            var C = {
                defaultNS: "common",
                errorStackTraceLimit: 0,
                i18n: {
                    defaultLocale: "en",
                    locales: ["en"]
                },
                get initImmediate() {
                    return "undefined" !== typeof window
                },
                interpolation: {
                    escapeValue: !1,
                    format: function (e, t) {
                        return "uppercase" === t ? e.toUpperCase() : e
                    },
                    formatSeparator: ","
                },
                load: "currentOnly",
                localeExtension: "json",
                localePath: "./public/locales",
                localeStructure: "{{lng}}/{{ns}}",
                react: {
                    useSuspense: !0
                },
                reloadOnPrerender: !1,
                serializeConfig: !0,
                strictMode: !0,
                use: []
            };

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function (t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var F = ["backend", "detection"],
                T = function (e) {
                    var t;
                    if ("string" !== typeof (null === e || void 0 === e ? void 0 : e.lng)) throw new Error("config.lng was not passed into createConfig");
                    var n = e.i18n,
                        r = N(e, ["i18n"]),
                        o = C.i18n,
                        i = R(R(R(R({}, N(C, ["i18n"])), r), o), n),
                        a = i.defaultNS,
                        s = i.lng,
                        u = (i.locales, i.localeExtension),
                        c = i.localePath,
                        l = i.localeStructure;
                    if ("cimode" === s) return i;
                    "undefined" === typeof i.fallbackLng && (i.fallbackLng = i.defaultLocale);
                    var f = null === e || void 0 === e || null === (t = e.use) || void 0 === t ? void 0 : t.some((function (e) {
                            return "backend" === e.type
                        })),
                        p = c;
                    return c.match(/^\.?\/public\//) && (p = c.replace(/^\.?\/public/, "")), f || (i.backend = {
                        addPath: "".concat(p, "/").concat(l, ".missing.").concat(u),
                        loadPath: "".concat(p, "/").concat(l, ".").concat(u)
                    }), "string" === typeof i.ns || Array.isArray(i.ns) || (i.ns = [a]), F.forEach((function (t) {
                        e[t] && (i[t] = R(R({}, i[t]), e[t]))
                    })), i
                };

            function D(e) {
                return (D = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? Object(arguments[t]) : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(n).filter((function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach((function (t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function V(e, t) {
                if (t && ("object" === D(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return A(e)
            }

            function $(e) {
                return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function M(e, t) {
                return (M = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function U(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && M(e, t)
            }
            var _ = {
                    type: "logger",
                    log: function (e) {
                        this.output("log", e)
                    },
                    warn: function (e) {
                        this.output("warn", e)
                    },
                    error: function (e) {
                        this.output("error", e)
                    },
                    output: function (e, t) {
                        console && console[e] && console[e].apply(console, t)
                    }
                },
                z = new(function () {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        s(this, e), this.init(t, n)
                    }
                    return c(e, [{
                        key: "init",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.prefix = t.prefix || "i18next:", this.logger = e || _, this.options = t, this.debug = t.debug
                        }
                    }, {
                        key: "setDebug",
                        value: function (e) {
                            this.debug = e
                        }
                    }, {
                        key: "log",
                        value: function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "log", "", !0)
                        }
                    }, {
                        key: "warn",
                        value: function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "warn", "", !0)
                        }
                    }, {
                        key: "error",
                        value: function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "error", "")
                        }
                    }, {
                        key: "deprecate",
                        value: function () {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                        }
                    }, {
                        key: "forward",
                        value: function (e, t, n, r) {
                            return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e))
                        }
                    }, {
                        key: "create",
                        value: function (t) {
                            return new e(this.logger, I({}, {
                                prefix: "".concat(this.prefix, ":").concat(t, ":")
                            }, this.options))
                        }
                    }]), e
                }()),
                K = function () {
                    function e() {
                        s(this, e), this.observers = {}
                    }
                    return c(e, [{
                        key: "on",
                        value: function (e, t) {
                            var n = this;
                            return e.split(" ").forEach((function (e) {
                                n.observers[e] = n.observers[e] || [], n.observers[e].push(t)
                            })), this
                        }
                    }, {
                        key: "off",
                        value: function (e, t) {
                            this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function (e) {
                                return e !== t
                            })) : delete this.observers[e])
                        }
                    }, {
                        key: "emit",
                        value: function (e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            if (this.observers[e]) {
                                var o = [].concat(this.observers[e]);
                                o.forEach((function (e) {
                                    e.apply(void 0, n)
                                }))
                            }
                            if (this.observers["*"]) {
                                var i = [].concat(this.observers["*"]);
                                i.forEach((function (t) {
                                    t.apply(t, [e].concat(n))
                                }))
                            }
                        }
                    }]), e
                }();

            function H() {
                var e, t, n = new Promise((function (n, r) {
                    e = n, t = r
                }));
                return n.resolve = e, n.reject = t, n
            }

            function B(e) {
                return null == e ? "" : "" + e
            }

            function W(e, t, n) {
                e.forEach((function (e) {
                    t[e] && (n[e] = t[e])
                }))
            }

            function J(e, t, n) {
                function r(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                }

                function o() {
                    return !e || "string" === typeof e
                }
                for (var i = "string" !== typeof t ? [].concat(t) : t.split("."); i.length > 1;) {
                    if (o()) return {};
                    var a = r(i.shift());
                    !e[a] && n && (e[a] = new n), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
                }
                return o() ? {} : {
                    obj: e,
                    k: r(i.shift())
                }
            }

            function q(e, t, n) {
                var r = J(e, t, Object);
                r.obj[r.k] = n
            }

            function Y(e, t) {
                var n = J(e, t),
                    r = n.obj,
                    o = n.k;
                if (r) return r[o]
            }

            function G(e, t, n) {
                var r = Y(e, n);
                return void 0 !== r ? r : Y(t, n)
            }

            function X(e, t, n) {
                for (var r in t) "__proto__" !== r && "constructor" !== r && (r in e ? "string" === typeof e[r] || e[r] instanceof String || "string" === typeof t[r] || t[r] instanceof String ? n && (e[r] = t[r]) : X(e[r], t[r], n) : e[r] = t[r]);
                return e
            }

            function Q(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var Z = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function ee(e) {
                return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function (e) {
                    return Z[e]
                })) : e
            }
            var te = "undefined" !== typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;

            function ne(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                if (e) {
                    if (e[t]) return e[t];
                    for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
                        if (!o) return;
                        if ("string" === typeof o[r[i]] && i + 1 < r.length) return;
                        if (void 0 === o[r[i]]) {
                            for (var a = 2, s = r.slice(i, i + a).join(n), u = o[s]; void 0 === u && r.length > i + a;) a++, u = o[s = r.slice(i, i + a).join(n)];
                            if (void 0 === u) return;
                            if ("string" === typeof u) return u;
                            if (s && "string" === typeof u[s]) return u[s];
                            var c = r.slice(i + a).join(n);
                            return c ? ne(u, c, n) : void 0
                        }
                        o = o[r[i]]
                    }
                    return o
                }
            }
            var re = function (e) {
                    function t(e) {
                        var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        return s(this, t), n = V(this, $(t).call(this)), te && K.call(A(n)), n.data = e || {}, n.options = r, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), void 0 === n.options.ignoreJSONStructure && (n.options.ignoreJSONStructure = !0), n
                    }
                    return U(t, e), c(t, [{
                        key: "addNamespaces",
                        value: function (e) {
                            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                        }
                    }, {
                        key: "removeNamespaces",
                        value: function (e) {
                            var t = this.options.ns.indexOf(e);
                            t > -1 && this.options.ns.splice(t, 1)
                        }
                    }, {
                        key: "getResource",
                        value: function (e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                                i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                a = [e, t];
                            n && "string" !== typeof n && (a = a.concat(n)), n && "string" === typeof n && (a = a.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (a = e.split("."));
                            var s = Y(this.data, a);
                            return s || !i || "string" !== typeof n ? s : ne(this.data && this.data[e] && this.data[e][t], n, o)
                        }
                    }, {
                        key: "addResource",
                        value: function (e, t, n, r) {
                            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                    silent: !1
                                },
                                i = this.options.keySeparator;
                            void 0 === i && (i = ".");
                            var a = [e, t];
                            n && (a = a.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (r = t, t = (a = e.split("."))[1]), this.addNamespaces(t), q(this.data, a, r), o.silent || this.emit("added", e, t, n, r)
                        }
                    }, {
                        key: "addResources",
                        value: function (e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                silent: !1
                            };
                            for (var o in n) "string" !== typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                                silent: !0
                            });
                            r.silent || this.emit("added", e, t, n)
                        }
                    }, {
                        key: "addResourceBundle",
                        value: function (e, t, n, r, o) {
                            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                    silent: !1
                                },
                                a = [e, t];
                            e.indexOf(".") > -1 && (r = n, n = t, t = (a = e.split("."))[1]), this.addNamespaces(t);
                            var s = Y(this.data, a) || {};
                            r ? X(s, n, o) : s = I({}, s, n), q(this.data, a, s), i.silent || this.emit("added", e, t, n)
                        }
                    }, {
                        key: "removeResourceBundle",
                        value: function (e, t) {
                            this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                        }
                    }, {
                        key: "hasResourceBundle",
                        value: function (e, t) {
                            return void 0 !== this.getResource(e, t)
                        }
                    }, {
                        key: "getResourceBundle",
                        value: function (e, t) {
                            return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? I({}, {}, this.getResource(e, t)) : this.getResource(e, t)
                        }
                    }, {
                        key: "getDataByLanguage",
                        value: function (e) {
                            return this.data[e]
                        }
                    }, {
                        key: "toJSON",
                        value: function () {
                            return this.data
                        }
                    }]), t
                }(K),
                oe = {
                    processors: {},
                    addPostProcessor: function (e) {
                        this.processors[e.name] = e
                    },
                    handle: function (e, t, n, r, o) {
                        var i = this;
                        return e.forEach((function (e) {
                            i.processors[e] && (t = i.processors[e].process(t, n, r, o))
                        })), t
                    }
                },
                ie = {},
                ae = function (e) {
                    function t(e) {
                        var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return s(this, t), n = V(this, $(t).call(this)), te && K.call(A(n)), W(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, A(n)), n.options = r, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = z.create("translator"), n
                    }
                    return U(t, e), c(t, [{
                        key: "changeLanguage",
                        value: function (e) {
                            e && (this.language = e)
                        }
                    }, {
                        key: "exists",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                interpolation: {}
                            };
                            if (void 0 === e || null === e) return !1;
                            var n = this.resolve(e, t);
                            return n && void 0 !== n.res
                        }
                    }, {
                        key: "extractFromKey",
                        value: function (e, t) {
                            var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                            void 0 === n && (n = ":");
                            var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                o = t.ns || this.options.defaultNS;
                            if (n && e.indexOf(n) > -1) {
                                var i = e.match(this.interpolator.nestingRegexp);
                                if (i && i.length > 0) return {
                                    key: e,
                                    namespaces: o
                                };
                                var a = e.split(n);
                                (n !== r || n === r && this.options.ns.indexOf(a[0]) > -1) && (o = a.shift()), e = a.join(r)
                            }
                            return "string" === typeof o && (o = [o]), {
                                key: e,
                                namespaces: o
                            }
                        }
                    }, {
                        key: "translate",
                        value: function (e, n, r) {
                            var o = this;
                            if ("object" !== D(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), void 0 === e || null === e) return "";
                            Array.isArray(e) || (e = [String(e)]);
                            var i = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                a = this.extractFromKey(e[e.length - 1], n),
                                s = a.key,
                                u = a.namespaces,
                                c = u[u.length - 1],
                                l = n.lng || this.language,
                                f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                            if (l && "cimode" === l.toLowerCase()) {
                                if (f) {
                                    var p = n.nsSeparator || this.options.nsSeparator;
                                    return c + p + s
                                }
                                return s
                            }
                            var g = this.resolve(e, n),
                                h = g && g.res,
                                d = g && g.usedKey || s,
                                v = g && g.exactUsedKey || s,
                                y = Object.prototype.toString.apply(h),
                                m = ["[object Number]", "[object Function]", "[object RegExp]"],
                                b = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                k = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                w = "string" !== typeof h && "boolean" !== typeof h && "number" !== typeof h;
                            if (k && h && w && m.indexOf(y) < 0 && ("string" !== typeof b || "[object Array]" !== y)) {
                                if (!n.returnObjects && !this.options.returnObjects) return this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(d, h, I({}, n, {
                                    ns: u
                                })) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.");
                                if (i) {
                                    var x = "[object Array]" === y,
                                        O = x ? [] : {},
                                        S = x ? v : d;
                                    for (var j in h)
                                        if (Object.prototype.hasOwnProperty.call(h, j)) {
                                            var P = "".concat(S).concat(i).concat(j);
                                            O[j] = this.translate(P, I({}, n, {
                                                joinArrays: !1,
                                                ns: u
                                            })), O[j] === P && (O[j] = h[j])
                                        } h = O
                                }
                            } else if (k && "string" === typeof b && "[object Array]" === y)(h = h.join(b)) && (h = this.extendTranslation(h, e, n, r));
                            else {
                                var L = !1,
                                    N = !1,
                                    C = void 0 !== n.count && "string" !== typeof n.count,
                                    E = t.hasDefaultValue(n),
                                    R = C ? this.pluralResolver.getSuffix(l, n.count) : "",
                                    F = n["defaultValue".concat(R)] || n.defaultValue;
                                !this.isValidLookup(h) && E && (L = !0, h = F), this.isValidLookup(h) || (N = !0, h = s);
                                var T = n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                                    A = T && N ? void 0 : h,
                                    V = E && F !== h && this.options.updateMissing;
                                if (N || L || V) {
                                    if (this.logger.log(V ? "updateKey" : "missingKey", l, c, s, V ? F : h), i) {
                                        var $ = this.resolve(s, I({}, n, {
                                            keySeparator: !1
                                        }));
                                        $ && $.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                    }
                                    var M = [],
                                        U = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                    if ("fallback" === this.options.saveMissingTo && U && U[0])
                                        for (var _ = 0; _ < U.length; _++) M.push(U[_]);
                                    else "all" === this.options.saveMissingTo ? M = this.languageUtils.toResolveHierarchy(n.lng || this.language) : M.push(n.lng || this.language);
                                    var z = function (e, t, r) {
                                        o.options.missingKeyHandler ? o.options.missingKeyHandler(e, c, t, V ? r : A, V, n) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, c, t, V ? r : A, V, n), o.emit("missingKey", e, c, t, h)
                                    };
                                    this.options.saveMissing && (this.options.saveMissingPlurals && C ? M.forEach((function (e) {
                                        o.pluralResolver.getSuffixes(e).forEach((function (t) {
                                            z([e], s + t, n["defaultValue".concat(t)] || F)
                                        }))
                                    })) : z(M, s, F))
                                }
                                h = this.extendTranslation(h, e, n, g, r), N && h === s && this.options.appendNamespaceToMissingKey && (h = "".concat(c, ":").concat(s)), (N || L) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h))
                            }
                            return h
                        }
                    }, {
                        key: "extendTranslation",
                        value: function (e, t, n, r, o) {
                            var i = this;
                            if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
                                resolved: r
                            });
                            else if (!n.skipInterpolation) {
                                n.interpolation && this.interpolator.init(I({}, n, {
                                    interpolation: I({}, this.options.interpolation, n.interpolation)
                                }));
                                var a, s = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                if (s) {
                                    var u = e.match(this.interpolator.nestingRegexp);
                                    a = u && u.length
                                }
                                var c = n.replace && "string" !== typeof n.replace ? n.replace : n;
                                if (this.options.interpolation.defaultVariables && (c = I({}, this.options.interpolation.defaultVariables, c)), e = this.interpolator.interpolate(e, c, n.lng || this.language, n), s) {
                                    var l = e.match(this.interpolator.nestingRegexp);
                                    a < (l && l.length) && (n.nest = !1)
                                }!1 !== n.nest && (e = this.interpolator.nest(e, (function () {
                                    for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++) r[a] = arguments[a];
                                    return o && o[0] === r[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])), null) : i.translate.apply(i, r.concat([t]))
                                }), n)), n.interpolation && this.interpolator.reset()
                            }
                            var f = n.postProcess || this.options.postProcess,
                                p = "string" === typeof f ? [f] : f;
                            return void 0 !== e && null !== e && p && p.length && !1 !== n.applyPostProcessor && (e = oe.handle(p, e, t, this.options && this.options.postProcessPassResolved ? I({
                                i18nResolved: r
                            }, n) : n, this)), e
                        }
                    }, {
                        key: "resolve",
                        value: function (e) {
                            var t, n, r, o, i, a = this,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return "string" === typeof e && (e = [e]), e.forEach((function (e) {
                                if (!a.isValidLookup(t)) {
                                    var u = a.extractFromKey(e, s),
                                        c = u.key;
                                    n = c;
                                    var l = u.namespaces;
                                    a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                                    var f = void 0 !== s.count && "string" !== typeof s.count,
                                        p = void 0 !== s.context && ("string" === typeof s.context || "number" === typeof s.context) && "" !== s.context,
                                        g = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                    l.forEach((function (e) {
                                        a.isValidLookup(t) || (i = e, !ie["".concat(g[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (ie["".concat(g[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(g.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((function (n) {
                                            if (!a.isValidLookup(t)) {
                                                o = n;
                                                var i, u, l = c,
                                                    g = [l];
                                                if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(g, c, n, e, s);
                                                else f && (i = a.pluralResolver.getSuffix(n, s.count)), f && p && g.push(l + i), p && g.push(l += "".concat(a.options.contextSeparator).concat(s.context)), f && g.push(l += i);
                                                for (; u = g.pop();) a.isValidLookup(t) || (r = u, t = a.getResource(n, e, u, s))
                                            }
                                        })))
                                    }))
                                }
                            })), {
                                res: t,
                                usedKey: n,
                                exactUsedKey: r,
                                usedLng: o,
                                usedNS: i
                            }
                        }
                    }, {
                        key: "isValidLookup",
                        value: function (e) {
                            return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                        }
                    }, {
                        key: "getResource",
                        value: function (e, t, n) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                        }
                    }], [{
                        key: "hasDefaultValue",
                        value: function (e) {
                            var t = "defaultValue";
                            for (var n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                            return !1
                        }
                    }]), t
                }(K);

            function se(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            var ue = function () {
                    function e(t) {
                        s(this, e), this.options = t, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = z.create("languageUtils")
                    }
                    return c(e, [{
                        key: "getScriptPartFromCode",
                        value: function (e) {
                            if (!e || e.indexOf("-") < 0) return null;
                            var t = e.split("-");
                            return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                        }
                    }, {
                        key: "getLanguagePartFromCode",
                        value: function (e) {
                            if (!e || e.indexOf("-") < 0) return e;
                            var t = e.split("-");
                            return this.formatLanguageCode(t[0])
                        }
                    }, {
                        key: "formatLanguageCode",
                        value: function (e) {
                            if ("string" === typeof e && e.indexOf("-") > -1) {
                                var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                    n = e.split("-");
                                return this.options.lowerCaseLng ? n = n.map((function (e) {
                                    return e.toLowerCase()
                                })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = se(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = se(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = se(n[2].toLowerCase()))), n.join("-")
                            }
                            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                        }
                    }, {
                        key: "isWhitelisted",
                        value: function (e) {
                            return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e)
                        }
                    }, {
                        key: "isSupportedCode",
                        value: function (e) {
                            return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                        }
                    }, {
                        key: "getBestMatchFromCodes",
                        value: function (e) {
                            var t, n = this;
                            return e ? (e.forEach((function (e) {
                                if (!t) {
                                    var r = n.formatLanguageCode(e);
                                    n.options.supportedLngs && !n.isSupportedCode(r) || (t = r)
                                }
                            })), !t && this.options.supportedLngs && e.forEach((function (e) {
                                if (!t) {
                                    var r = n.getLanguagePartFromCode(e);
                                    if (n.isSupportedCode(r)) return t = r;
                                    t = n.options.supportedLngs.find((function (e) {
                                        if (0 === e.indexOf(r)) return e
                                    }))
                                }
                            })), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                        }
                    }, {
                        key: "getFallbackCodes",
                        value: function (e, t) {
                            if (!e) return [];
                            if ("function" === typeof e && (e = e(t)), "string" === typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                            if (!t) return e.default || [];
                            var n = e[t];
                            return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                        }
                    }, {
                        key: "toResolveHierarchy",
                        value: function (e, t) {
                            var n = this,
                                r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                o = [],
                                i = function (e) {
                                    e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                                };
                            return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" === typeof e && i(this.formatLanguageCode(e)), r.forEach((function (e) {
                                o.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                            })), o
                        }
                    }]), e
                }(),
                ce = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                le = {
                    1: function (e) {
                        return Number(e > 1)
                    },
                    2: function (e) {
                        return Number(1 != e)
                    },
                    3: function (e) {
                        return 0
                    },
                    4: function (e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    5: function (e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                    },
                    6: function (e) {
                        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                    },
                    7: function (e) {
                        return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    8: function (e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                    },
                    9: function (e) {
                        return Number(e >= 2)
                    },
                    10: function (e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                    },
                    11: function (e) {
                        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                    },
                    12: function (e) {
                        return Number(e % 10 != 1 || e % 100 == 11)
                    },
                    13: function (e) {
                        return Number(0 !== e)
                    },
                    14: function (e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                    },
                    15: function (e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    16: function (e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                    },
                    17: function (e) {
                        return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                    },
                    18: function (e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                    },
                    19: function (e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                    },
                    20: function (e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                    },
                    21: function (e) {
                        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                    },
                    22: function (e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                    }
                };

            function fe() {
                var e = {};
                return ce.forEach((function (t) {
                    t.lngs.forEach((function (n) {
                        e[n] = {
                            numbers: t.nr,
                            plurals: le[t.fc]
                        }
                    }))
                })), e
            }
            var pe = function () {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        s(this, e), this.languageUtils = t, this.options = n, this.logger = z.create("pluralResolver"), this.rules = fe()
                    }
                    return c(e, [{
                        key: "addRule",
                        value: function (e, t) {
                            this.rules[e] = t
                        }
                    }, {
                        key: "getRule",
                        value: function (e) {
                            return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                        }
                    }, {
                        key: "needsPlural",
                        value: function (e) {
                            var t = this.getRule(e);
                            return t && t.numbers.length > 1
                        }
                    }, {
                        key: "getPluralFormsOfKey",
                        value: function (e, t) {
                            return this.getSuffixes(e).map((function (e) {
                                return t + e
                            }))
                        }
                    }, {
                        key: "getSuffixes",
                        value: function (e) {
                            var t = this,
                                n = this.getRule(e);
                            return n ? n.numbers.map((function (n) {
                                return t.getSuffix(e, n)
                            })) : []
                        }
                    }, {
                        key: "getSuffix",
                        value: function (e, t) {
                            var n = this,
                                r = this.getRule(e);
                            if (r) {
                                var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
                                    i = r.numbers[o];
                                this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                                var a = function () {
                                    return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString()
                                };
                                return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" === typeof i ? "_plural_".concat(i.toString()) : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                            }
                            return this.logger.warn("no plural rule found for: ".concat(e)), ""
                        }
                    }]), e
                }(),
                ge = function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        s(this, e), this.logger = z.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || function (e) {
                            return e
                        }, this.init(t)
                    }
                    return c(e, [{
                        key: "init",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.interpolation || (e.interpolation = {
                                escapeValue: !0
                            });
                            var t = e.interpolation;
                            this.escape = void 0 !== t.escape ? t.escape : ee, this.escapeValue = void 0 === t.escapeValue || t.escapeValue, this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape, this.prefix = t.prefix ? Q(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? Q(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? Q(t.nestingPrefix) : t.nestingPrefixEscaped || Q("$t("), this.nestingSuffix = t.nestingSuffix ? Q(t.nestingSuffix) : t.nestingSuffixEscaped || Q(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat, this.resetRegExp()
                        }
                    }, {
                        key: "reset",
                        value: function () {
                            this.options && this.init(this.options)
                        }
                    }, {
                        key: "resetRegExp",
                        value: function () {
                            var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                            this.regexp = new RegExp(e, "g");
                            var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                            this.regexpUnescape = new RegExp(t, "g");
                            var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                            this.nestingRegexp = new RegExp(n, "g")
                        }
                    }, {
                        key: "interpolate",
                        value: function (e, t, n, r) {
                            var o, i, a, s = this,
                                u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                            function c(e) {
                                return e.replace(/\$/g, "$$$$")
                            }
                            var l = function (e) {
                                if (e.indexOf(s.formatSeparator) < 0) {
                                    var o = G(t, u, e);
                                    return s.alwaysFormat ? s.format(o, void 0, n, I({}, r, t, {
                                        interpolationkey: e
                                    })) : o
                                }
                                var i = e.split(s.formatSeparator),
                                    a = i.shift().trim(),
                                    c = i.join(s.formatSeparator).trim();
                                return s.format(G(t, u, a), c, n, I({}, r, t, {
                                    interpolationkey: a
                                }))
                            };
                            this.resetRegExp();
                            var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                p = r && r.interpolation && r.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                            return [{
                                regex: this.regexpUnescape,
                                safeValue: function (e) {
                                    return c(e)
                                }
                            }, {
                                regex: this.regexp,
                                safeValue: function (e) {
                                    return s.escapeValue ? c(s.escape(e)) : c(e)
                                }
                            }].forEach((function (t) {
                                for (a = 0; o = t.regex.exec(e);) {
                                    if (void 0 === (i = l(o[1].trim())))
                                        if ("function" === typeof f) {
                                            var n = f(e, o, r);
                                            i = "string" === typeof n ? n : ""
                                        } else {
                                            if (p) {
                                                i = o[0];
                                                continue
                                            }
                                            s.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), i = ""
                                        }
                                    else "string" === typeof i || s.useRawValueToEscape || (i = B(i));
                                    var u = t.safeValue(i);
                                    if (e = e.replace(o[0], u), p ? (t.regex.lastIndex += u.length, t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0, ++a >= s.maxReplaces) break
                                }
                            })), e
                        }
                    }, {
                        key: "nest",
                        value: function (e, t) {
                            var n, r, o = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                a = I({}, i);

                            function s(e, t) {
                                var n = this.nestingOptionsSeparator;
                                if (e.indexOf(n) < 0) return e;
                                var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                    o = "{".concat(r[1]);
                                e = r[0], o = (o = this.interpolate(o, a)).replace(/'/g, '"');
                                try {
                                    a = JSON.parse(o), t && (a = I({}, t, a))
                                } catch (i) {
                                    return this.logger.warn("failed parsing options string in nesting for key ".concat(e), i), "".concat(e).concat(n).concat(o)
                                }
                                return delete a.defaultValue, e
                            }
                            for (a.applyPostProcessor = !1, delete a.defaultValue; n = this.nestingRegexp.exec(e);) {
                                var u = [],
                                    c = !1;
                                if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                    var l = n[1].split(this.formatSeparator).map((function (e) {
                                        return e.trim()
                                    }));
                                    n[1] = l.shift(), u = l, c = !0
                                }
                                if ((r = t(s.call(this, n[1].trim(), a), a)) && n[0] === e && "string" !== typeof r) return r;
                                "string" !== typeof r && (r = B(r)), r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), r = ""), c && (r = u.reduce((function (e, t) {
                                    return o.format(e, t, i.lng, I({}, i, {
                                        interpolationkey: n[1].trim()
                                    }))
                                }), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0
                            }
                            return e
                        }
                    }]), e
                }();
            var he = function (e) {
                function t(e, n, r) {
                    var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return s(this, t), o = V(this, $(t).call(this)), te && K.call(A(o)), o.backend = e, o.store = n, o.services = r, o.languageUtils = r.languageUtils, o.options = i, o.logger = z.create("backendConnector"), o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(r, i.backend, i), o
                }
                return U(t, e), c(t, [{
                    key: "queueLoad",
                    value: function (e, t, n, r) {
                        var o = this,
                            i = [],
                            a = [],
                            s = [],
                            u = [];
                        return e.forEach((function (e) {
                            var r = !0;
                            t.forEach((function (t) {
                                var s = "".concat(e, "|").concat(t);
                                !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1, r = !1, a.indexOf(s) < 0 && a.push(s), i.indexOf(s) < 0 && i.push(s), u.indexOf(t) < 0 && u.push(t)))
                            })), r || s.push(e)
                        })), (i.length || a.length) && this.queue.push({
                            pending: a,
                            loaded: {},
                            errors: [],
                            callback: r
                        }), {
                            toLoad: i,
                            pending: a,
                            toLoadLanguages: s,
                            toLoadNamespaces: u
                        }
                    }
                }, {
                    key: "loaded",
                    value: function (e, t, n) {
                        var r = e.split("|"),
                            o = r[0],
                            i = r[1];
                        t && this.emit("failedLoading", o, i, t), n && this.store.addResourceBundle(o, i, n), this.state[e] = t ? -1 : 2;
                        var a = {};
                        this.queue.forEach((function (n) {
                            ! function (e, t, n, r) {
                                var o = J(e, t, Object),
                                    i = o.obj,
                                    a = o.k;
                                i[a] = i[a] || [], r && (i[a] = i[a].concat(n)), r || i[a].push(n)
                            }(n.loaded, [o], i),
                            function (e, t) {
                                for (var n = e.indexOf(t); - 1 !== n;) e.splice(n, 1), n = e.indexOf(t)
                            }(n.pending, e), t && n.errors.push(t), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function (e) {
                                a[e] || (a[e] = []), n.loaded[e].length && n.loaded[e].forEach((function (t) {
                                    a[e].indexOf(t) < 0 && a[e].push(t)
                                }))
                            })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                        })), this.emit("loaded", a), this.queue = this.queue.filter((function (e) {
                            return !e.done
                        }))
                    }
                }, {
                    key: "read",
                    value: function (e, t, n) {
                        var r = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                            a = arguments.length > 5 ? arguments[5] : void 0;
                        return e.length ? this.backend[n](e, t, (function (s, u) {
                            s && u && o < 5 ? setTimeout((function () {
                                r.read.call(r, e, t, n, o + 1, 2 * i, a)
                            }), i) : a(s, u)
                        })) : a(null, {})
                    }
                }, {
                    key: "prepareLoading",
                    value: function (e, t) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                        "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof t && (t = [t]);
                        var i = this.queueLoad(e, t, r, o);
                        if (!i.toLoad.length) return i.pending.length || o(), null;
                        i.toLoad.forEach((function (e) {
                            n.loadOne(e)
                        }))
                    }
                }, {
                    key: "load",
                    value: function (e, t, n) {
                        this.prepareLoading(e, t, {}, n)
                    }
                }, {
                    key: "reload",
                    value: function (e, t, n) {
                        this.prepareLoading(e, t, {
                            reload: !0
                        }, n)
                    }
                }, {
                    key: "loadOne",
                    value: function (e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = e.split("|"),
                            o = r[0],
                            i = r[1];
                        this.read(o, i, "read", void 0, void 0, (function (r, a) {
                            r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a), t.loaded(e, r, a)
                        }))
                    }
                }, {
                    key: "saveMissing",
                    value: function (e, t, n, r, o) {
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== n && null !== n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, I({}, i, {
                            isUpdate: o
                        })), e && e[0] && this.store.addResource(e[0], t, n, r))
                    }
                }]), t
            }(K);

            function de() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    whitelist: !1,
                    nonExplicitWhitelist: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function (e) {
                        var t = {};
                        if ("object" === D(e[1]) && (t = e[1]), "string" === typeof e[1] && (t.defaultValue = e[1]), "string" === typeof e[2] && (t.tDescription = e[2]), "object" === D(e[2]) || "object" === D(e[3])) {
                            var n = e[3] || e[2];
                            Object.keys(n).forEach((function (e) {
                                t[e] = n[e]
                            }))
                        }
                        return t
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function (e, t, n, r) {
                            return e
                        },
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !1
                    }
                }
            }

            function ve(e) {
                return "string" === typeof e.ns && (e.ns = [e.ns]), "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
            }

            function ye() {}
            var me = new(function (e) {
                    function t() {
                        var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        if (s(this, t), e = V(this, $(t).call(this)), te && K.call(A(e)), e.options = ve(n), e.services = {}, e.logger = z, e.modules = {
                                external: []
                            }, r && !e.isInitialized && !n.isClone) {
                            if (!e.options.initImmediate) return e.init(n, r), V(e, A(e));
                            setTimeout((function () {
                                e.init(n, r)
                            }), 0)
                        }
                        return e
                    }
                    return U(t, e), c(t, [{
                        key: "init",
                        value: function () {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;

                            function r(e) {
                                return e ? "function" === typeof e ? new e : e : null
                            }
                            if ("function" === typeof t && (n = t, t = {}), t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), t.nonExplicitWhitelist && !t.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = I({}, de(), this.options, ve(t)), this.format = this.options.interpolation.format, n || (n = ye), !this.options.isClone) {
                                this.modules.logger ? z.init(r(this.modules.logger), this.options) : z.init(null, this.options);
                                var o = new ue(this.options);
                                this.store = new re(this.options.resources, this.options);
                                var i = this.services;
                                i.logger = z, i.resourceStore = this.store, i.languageUtils = o, i.pluralResolver = new pe(o, {
                                    prepend: this.options.pluralSeparator,
                                    compatibilityJSON: this.options.compatibilityJSON,
                                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                                }), i.interpolator = new ge(this.options), i.utils = {
                                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                                }, i.backendConnector = new he(r(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", (function (t) {
                                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                    e.emit.apply(e, [t].concat(r))
                                })), this.modules.languageDetector && (i.languageDetector = r(this.modules.languageDetector), i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = r(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new ae(this.services, this.options), this.translator.on("*", (function (t) {
                                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                                    e.emit.apply(e, [t].concat(r))
                                })), this.modules.external.forEach((function (t) {
                                    t.init && t.init(e)
                                }))
                            }
                            if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                var a = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                a.length > 0 && "dev" !== a[0] && (this.options.lng = a[0])
                            }
                            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                            var s = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                            s.forEach((function (t) {
                                e[t] = function () {
                                    var n;
                                    return (n = e.store)[t].apply(n, arguments)
                                }
                            }));
                            var u = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                            u.forEach((function (t) {
                                e[t] = function () {
                                    var n;
                                    return (n = e.store)[t].apply(n, arguments), e
                                }
                            }));
                            var c = H(),
                                l = function () {
                                    var t = function (t, r) {
                                        e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"), e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), c.resolve(r), n(t, r)
                                    };
                                    if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
                                    e.changeLanguage(e.options.lng, t)
                                };
                            return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), c
                        }
                    }, {
                        key: "loadResources",
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye,
                                r = n,
                                o = "string" === typeof e ? e : this.language;
                            if ("function" === typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
                                if (o && "cimode" === o.toLowerCase()) return r();
                                var i = [],
                                    a = function (e) {
                                        e && t.services.languageUtils.toResolveHierarchy(e).forEach((function (e) {
                                            i.indexOf(e) < 0 && i.push(e)
                                        }))
                                    };
                                if (o) a(o);
                                else {
                                    var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    s.forEach((function (e) {
                                        return a(e)
                                    }))
                                }
                                this.options.preload && this.options.preload.forEach((function (e) {
                                    return a(e)
                                })), this.services.backendConnector.load(i, this.options.ns, r)
                            } else r(null)
                        }
                    }, {
                        key: "reloadResources",
                        value: function (e, t, n) {
                            var r = H();
                            return e || (e = this.languages), t || (t = this.options.ns), n || (n = ye), this.services.backendConnector.reload(e, t, (function (e) {
                                r.resolve(), n(e)
                            })), r
                        }
                    }, {
                        key: "use",
                        value: function (e) {
                            if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                            if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                            return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && oe.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                        }
                    }, {
                        key: "changeLanguage",
                        value: function (e, t) {
                            var n = this;
                            this.isLanguageChangingTo = e;
                            var r = H();
                            this.emit("languageChanging", e);
                            var o = function (o) {
                                e || o || !n.services.languageDetector || (o = []);
                                var i = "string" === typeof o ? o : n.services.languageUtils.getBestMatchFromCodes(o);
                                i && (n.language || (n.language = i, n.languages = n.services.languageUtils.toResolveHierarchy(i)), n.translator.language || n.translator.changeLanguage(i), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(i)), n.loadResources(i, (function (e) {
                                    ! function (e, o) {
                                        o ? (n.language = o, n.languages = n.services.languageUtils.toResolveHierarchy(o), n.translator.changeLanguage(o), n.isLanguageChangingTo = void 0, n.emit("languageChanged", o), n.logger.log("languageChanged", o)) : n.isLanguageChangingTo = void 0, r.resolve((function () {
                                            return n.t.apply(n, arguments)
                                        })), t && t(e, (function () {
                                            return n.t.apply(n, arguments)
                                        }))
                                    }(e, i)
                                }))
                            };
                            return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), r
                        }
                    }, {
                        key: "getFixedT",
                        value: function (e, t, n) {
                            var r = this,
                                o = function e(t, o) {
                                    var i;
                                    if ("object" !== D(o)) {
                                        for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++) s[u - 2] = arguments[u];
                                        i = r.options.overloadTranslationOptionHandler([t, o].concat(s))
                                    } else i = I({}, o);
                                    i.lng = i.lng || e.lng, i.lngs = i.lngs || e.lngs, i.ns = i.ns || e.ns;
                                    var c = r.options.keySeparator || ".",
                                        l = n ? "".concat(n).concat(c).concat(t) : t;
                                    return r.t(l, i)
                                };
                            return "string" === typeof e ? o.lng = e : o.lngs = e, o.ns = t, o.keyPrefix = n, o
                        }
                    }, {
                        key: "t",
                        value: function () {
                            var e;
                            return this.translator && (e = this.translator).translate.apply(e, arguments)
                        }
                    }, {
                        key: "exists",
                        value: function () {
                            var e;
                            return this.translator && (e = this.translator).exists.apply(e, arguments)
                        }
                    }, {
                        key: "setDefaultNamespace",
                        value: function (e) {
                            this.options.defaultNS = e
                        }
                    }, {
                        key: "hasLoadedNamespace",
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                            var r = this.languages[0],
                                o = !!this.options && this.options.fallbackLng,
                                i = this.languages[this.languages.length - 1];
                            if ("cimode" === r.toLowerCase()) return !0;
                            var a = function (e, n) {
                                var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                                return -1 === r || 2 === r
                            };
                            if (n.precheck) {
                                var s = n.precheck(this, a);
                                if (void 0 !== s) return s
                            }
                            return !!this.hasResourceBundle(r, e) || (!this.services.backendConnector.backend || !(!a(r, e) || o && !a(i, e)))
                        }
                    }, {
                        key: "loadNamespaces",
                        value: function (e, t) {
                            var n = this,
                                r = H();
                            return this.options.ns ? ("string" === typeof e && (e = [e]), e.forEach((function (e) {
                                n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                            })), this.loadResources((function (e) {
                                r.resolve(), t && t(e)
                            })), r) : (t && t(), Promise.resolve())
                        }
                    }, {
                        key: "loadLanguages",
                        value: function (e, t) {
                            var n = H();
                            "string" === typeof e && (e = [e]);
                            var r = this.options.preload || [],
                                o = e.filter((function (e) {
                                    return r.indexOf(e) < 0
                                }));
                            return o.length ? (this.options.preload = r.concat(o), this.loadResources((function (e) {
                                n.resolve(), t && t(e)
                            })), n) : (t && t(), Promise.resolve())
                        }
                    }, {
                        key: "dir",
                        value: function (e) {
                            if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e) return "rtl";
                            return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
                        }
                    }, {
                        key: "createInstance",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return new t(e, n)
                        }
                    }, {
                        key: "cloneInstance",
                        value: function () {
                            var e = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye,
                                o = I({}, this.options, n, {
                                    isClone: !0
                                }),
                                i = new t(o),
                                a = ["store", "services", "language"];
                            return a.forEach((function (t) {
                                i[t] = e[t]
                            })), i.services = I({}, this.services), i.services.utils = {
                                hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                            }, i.translator = new ae(i.services, i.options), i.translator.on("*", (function (e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                                i.emit.apply(i, [e].concat(n))
                            })), i.init(o, r), i.translator.options = i.options, i.translator.backendConnector.services.utils = {
                                hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                            }, i
                        }
                    }, {
                        key: "toJSON",
                        value: function () {
                            return {
                                options: this.options,
                                store: this.store,
                                language: this.language,
                                languages: this.languages
                            }
                        }
                    }]), t
                }(K)),
                be = function (e) {
                    var t, n, r = me.createInstance(e);
                    r.isInitialized ? t = Promise.resolve(me.t) : (null === e || void 0 === e || null === (n = e.use) || void 0 === n || n.forEach((function (e) {
                        return r.use(e)
                    })), t = r.init(e));
                    return {
                        i18n: r,
                        initPromise: t
                    }
                },
                ke = a.createElement;

            function we(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function xe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? we(Object(n), !0).forEach((function (t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : we(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Oe = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = function (n) {
                        var r = n.pageProps._nextI18Next,
                            o = n.router.locale,
                            i = (0, a.useMemo)((function () {
                                var e;
                                if (!o || !r) return null;
                                var n = r.userConfig,
                                    i = r.initialI18nStore;
                                if (null === n && null === t) throw new Error("appWithTranslation was called without a next-i18next config");
                                if (null !== t && (n = t), null === (e = n) || void 0 === e || !e.i18n) throw new Error("appWithTranslation was called without config.i18n");
                                var a = be(xe(xe({}, T(xe(xe({}, n), {}, {
                                    lng: o
                                }))), {}, {
                                    lng: o,
                                    resources: i
                                })).i18n;
                                return a, a
                            }), [r, o]);
                        return null !== i ? ke(L, {
                            i18n: i
                        }, ke(e, S({
                            key: o
                        }, n))) : ke(e, S({
                            key: o
                        }, n))
                    };
                return P()(n, e)
            }
        },
        6363: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n(5656)
            }])
        },
        5656: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893),
                o = (n(2739), n(5960), n(6019), n(7985));

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            t.default = (0, o.Jc)((function (e) {
                var t = e.Component,
                    n = e.pageProps;
                return (0, r.jsx)(t, function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), r.forEach((function (t) {
                            i(e, t, n[t])
                        }))
                    }
                    return e
                }({}, n))
            }))
        },
        6019: function () {},
        2739: function () {},
        5960: function () {}
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], (function () {
            return t(6363), t(387)
        }));
        var n = e.O();
        _N_E = n
    }
]);