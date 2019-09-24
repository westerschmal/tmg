var Didomi = function(e) {
    function t(n) {
        if (r[n])
            return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = window.webpackJsonpDidomi;
    window.webpackJsonpDidomi = function(t, r, i) {
        for (var s, a, u = 0, d = []; u < t.length; u++)
            a = t[u],
            o[a] && d.push(o[a][0]),
            o[a] = 0;
        for (s in r)
            Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
        for (n && n(t, r, i); d.length; )
            d.shift()()
    }
    ;
    var r = {}
      , o = {
        main: 0
    };
    return t.e = function(e) {
        function n() {
            a.onerror = a.onload = null,
            clearTimeout(u);
            var t = o[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")),
            o[e] = void 0)
        }
        var r = o[e];
        if (0 === r)
            return new Promise(function(e) {
                e()
            }
            );
        if (r)
            return r[2];
        var i = new Promise(function(t, n) {
            r = o[e] = [t, n]
        }
        );
        r[2] = i;
        var s = document.getElementsByTagName("head")[0]
          , a = document.createElement("script");
        a.type = "text/javascript",
        a.charset = "utf-8",
        a.async = !0,
        a.timeout = 12e4,
        t.nc && a.setAttribute("nonce", t.nc),
        a.src = t.p + "" + ({
            "ui-bg": "ui-bg",
            "ui-ca": "ui-ca",
            "ui-cs": "ui-cs",
            "ui-da": "ui-da",
            "ui-de": "ui-de",
            "ui-el": "ui-el",
            "ui-en": "ui-en",
            "ui-es": "ui-es",
            "ui-et": "ui-et",
            "ui-fi": "ui-fi",
            "ui-fr": "ui-fr",
            "ui-hr": "ui-hr",
            "ui-hu": "ui-hu",
            "ui-it": "ui-it",
            "ui-lt": "ui-lt",
            "ui-lv": "ui-lv",
            "ui-nl": "ui-nl",
            "ui-pl": "ui-pl",
            "ui-pt": "ui-pt",
            "ui-ro": "ui-ro",
            "ui-ru": "ui-ru",
            "ui-sk": "ui-sk",
            "ui-sl": "ui-sl",
            "ui-sv": "ui-sv",
            "ui-tr": "ui-tr",
            "ui-uk": "ui-uk"
        }[e] || e) + ".dcf9dd060c784608c6624ce648f1de9b0990320b.js";
        var u = setTimeout(n, 12e4);
        return a.onerror = a.onload = n,
        s.appendChild(a),
        i
    }
    ,
    t.m = e,
    t.c = r,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "https://sdk.privacy-center.org/",
    t.oe = function(e) {
        throw console.error(e),
        e
    }
    ,
    t(t.s = 139)
}([function(e, t, n) {
    "use strict";
    t.__esModule = !0,
    t.default = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(86));
    t.default = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                (0,
                r.default)(e, o.key, o)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e) {
        return "object" === (void 0 === e ? "undefined" : (0,
        l.default)(e)) && null !== e && e.constructor === Object
    }
    function i(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (n in e && o(e[n]) && o(t[n]) ? i(e[n], t[n]) : e[n] = t[n]);
        return e
    }
    function s(e) {
        return e = "object" === (void 0 === e ? "undefined" : (0,
        l.default)(e)) ? e : {},
        JSON.parse((0,
        d.default)(e))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.get = t.set = void 0;
    var a = r(n(7))
      , u = r(n(22))
      , d = r(n(25))
      , c = r(n(8))
      , l = r(n(17));
    t.isPlainObject = o,
    t.deepExtend = i,
    t.clone = function(e) {
        return (0,
        c.default)({}, e)
    }
    ,
    t.deepClone = s,
    t.deepExtendClone = function(e, t) {
        return i(s(e), t)
    }
    ,
    t.shallowEqual = function(e, t) {
        for (var n in e)
            if (e[n] !== t[n])
                return !1;
        for (var r in t)
            if (!(r in e))
                return !1;
        return !0
    }
    ,
    t.deepEqual = function(e, t) {
        return (0,
        v.default)(e, t)
    }
    ,
    t.isEmpty = function(e) {
        return e && e.constructor === Object && 0 === (0,
        u.default)(e).length
    }
    ,
    t.arraysEqual = function(e, t) {
        if (!Array.isArray(e) || !Array.isArray(t))
            return !1;
        if (e.length !== t.length)
            return !1;
        var n = !0
          , r = !1
          , o = void 0;
        try {
            for (var i, s = (0,
            a.default)(e); !(n = (i = s.next()).done); n = !0) {
                var u = i.value;
                if (-1 === t.indexOf(u))
                    return !1
            }
        } catch (e) {
            r = !0,
            o = e
        } finally {
            try {
                !n && s.return && s.return()
            } finally {
                if (r)
                    throw o
            }
        }
        var d = !0
          , c = !1
          , l = void 0;
        try {
            for (var p, f = (0,
            a.default)(t); !(d = (p = f.next()).done); d = !0) {
                var v = p.value;
                if (-1 === e.indexOf(v))
                    return !1
            }
        } catch (e) {
            c = !0,
            l = e
        } finally {
            try {
                !d && f.return && f.return()
            } finally {
                if (c)
                    throw l
            }
        }
        return !0
    }
    ;
    var p = n(200);
    Object.defineProperty(t, "set", {
        enumerable: !0,
        get: function() {
            return r(p).default
        }
    });
    var f = n(201);
    Object.defineProperty(t, "get", {
        enumerable: !0,
        get: function() {
            return r(f).default
        }
    });
    var v = r(n(202))
}
, function(e, t, n) {
    e.exports = {
        default: n(213),
        __esModule: !0
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(17));
    t.default = function(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0,
        r.default)(t)) && "function" != typeof t ? e : t
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = r(n(215))
      , i = r(n(219))
      , s = r(n(17));
    t.default = function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0,
            s.default)(t)));
        e.prototype = (0,
        i.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (o.default ? (0,
        o.default)(e, t) : e.__proto__ = t)
    }
}
, function(e, t) {
    var n = e.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    e.exports = {
        default: n(182),
        __esModule: !0
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(93));
    t.default = r.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(0));
    t.default = function e(t, n, o) {
        (0,
        r.default)(this, e),
        this.store = t,
        this.actions = n,
        this.services = o || {}
    }
}
, function(e, t, n) {
    var r = n(11)
      , o = n(6)
      , i = n(18)
      , s = n(20)
      , a = n(24)
      , u = function(e, t, n) {
        var d, c, l, p = e & u.F, f = e & u.G, v = e & u.S, y = e & u.P, h = e & u.B, m = e & u.W, I = f ? o : o[t] || (o[t] = {}), g = I.prototype, w = f ? r : v ? r[t] : (r[t] || {}).prototype;
        for (d in f && (n = t),
        n)
            (c = !p && w && void 0 !== w[d]) && a(I, d) || (l = c ? w[d] : n[d],
            I[d] = f && "function" != typeof w[d] ? n[d] : h && c ? i(l, r) : m && w[d] == l ? function(e) {
                var t = function(t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t,n)
                        }
                        return new e(t,n,r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype,
                t
            }(l) : y && "function" == typeof l ? i(Function.call, l) : l,
            y && ((I.virtual || (I.virtual = {}))[d] = l,
            e & u.R && g && !g[d] && s(g, d, l)))
    };
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    e.exports = u
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t, n) {
    var r = n(63)("wks")
      , o = n(46)
      , i = n(11).Symbol
      , s = "function" == typeof i;
    (e.exports = function(e) {
        return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
    }
    ).store = r
}
, function(e, t, n) {
    var r = n(15)
      , o = n(94)
      , i = n(58)
      , s = Object.defineProperty;
    t.f = n(16) ? Object.defineProperty : function(e, t, n) {
        if (r(e),
        t = i(t, !0),
        r(n),
        o)
            try {
                return s(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    var r = n(14);
    e.exports = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t, n) {
    e.exports = !n(23)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = r(n(110))
      , i = r(n(111))
      , s = "function" == typeof i.default && "symbol" == typeof o.default ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e
    }
    ;
    t.default = "function" == typeof i.default && "symbol" === s(o.default) ? function(e) {
        return void 0 === e ? "undefined" : s(e)
    }
    : function(e) {
        return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : s(e)
    }
}
, function(e, t, n) {
    var r = n(33);
    e.exports = function(e, t, n) {
        if (r(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t, n) {
    var r = n(100)("wks")
      , o = n(68)
      , i = n(29).Symbol
      , s = "function" == typeof i;
    (e.exports = function(e) {
        return r[e] || (r[e] = s && i[e] || (s ? i : o)("Symbol." + e))
    }
    ).store = r
}
, function(e, t, n) {
    var r = n(13)
      , o = n(34);
    e.exports = n(16) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var r = n(59)
      , o = n(60);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(180),
        __esModule: !0
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(192),
        __esModule: !0
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(92));
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
                n[t] = e[t];
            return n
        }
        return (0,
        r.default)(e)
    }
}
, function(e, t, n) {
    var r = n(95)
      , o = n(64);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(60);
    e.exports = function(e) {
        return Object(r(e))
    }
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t) {
    var n = e.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(4))
      , a = r(n(5))
      , u = n(260)
      , d = function(e) {
        function t(e, n, r) {
            (0,
            i.default)(this, t);
            var a = (0,
            s.default)(this, (t.__proto__ || (0,
            o.default)(t)).call(this, e, n, r));
            return (0,
            u.EventEmitter)(a),
            a
        }
        return (0,
        a.default)(t, e),
        t
    }(r(n(9)).default);
    t.default = d
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.checkAndAddHttp = function(e) {
        return "string" != typeof e || 0 === e.indexOf("javascript:") || /^https?:\/\//i.test(e) || (e = "http://" + e),
        e
    }
    ,
    t.removeProtocol = function(e) {
        return e.replace(/^https?:\/\//, "")
    }
    ,
    t.getCurrentDateToISOString = function() {
        return (new Date).toISOString()
    }
    ,
    t.getVersion = function() {
        return "dcf9dd060c784608c6624ce648f1de9b0990320b"
    }
    ,
    t.getNumberOfDaysBetweenTodayAndADate = function(e) {
        var t = Math.round((new Date - e) / 864e5);
        if (t < 0)
            throw new Error("The date " + e + " cannot be in the future");
        return t
    }
    ,
    t.isIOS = function() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    }
    ,
    t.setBoundedInterval = function(e, t, n) {
        if (!e || n < t)
            return !1;
        var r = 0
          , o = setInterval(function() {
            r += t,
            e(function() {
                return clearInterval(o)
            }),
            r >= n && clearInterval(o)
        }, t);
        return !0
    }
    ,
    t.hasPreferencesVendorsViewLink = function(e) {
        return "string" == typeof e && -1 !== e.indexOf("Didomi.preferences.show('vendors')")
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t) {
    e.exports = !0
}
, function(e, t) {
    t.f = {}.propertyIsEnumerable
}
, function(e, t, n) {
    var r = n(47)
      , o = n(67);
    e.exports = n(50) ? function(e, t, n) {
        return r.f(e, t, o(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, n) {
    var r = n(13).f
      , o = n(24)
      , i = n(12)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(187)(!0);
    n(78)(String, "String", function(e) {
        this._t = String(e),
        this._i = 0
    }, function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n),
        this._i += e.length,
        {
            value: e,
            done: !1
        })
    })
}
, function(e, t, n) {
    var r = n(18)
      , o = n(121)
      , i = n(122)
      , s = n(15)
      , a = n(45)
      , u = n(79)
      , d = {}
      , c = {};
    (t = e.exports = function(e, t, n, l, p) {
        var f, v, y, h, m = p ? function() {
            return e
        }
        : u(e), I = r(n, l, t ? 2 : 1), g = 0;
        if ("function" != typeof m)
            throw TypeError(e + " is not iterable!");
        if (i(m)) {
            for (f = a(e.length); f > g; g++)
                if ((h = t ? I(s(v = e[g])[0], v[1]) : I(e[g])) === d || h === c)
                    return h
        } else
            for (y = m.call(e); !(v = y.next()).done; )
                if ((h = o(y, I, v.value, t)) === d || h === c)
                    return h
    }
    ).BREAK = d,
    t.RETURN = c
}
, function(e, t, n) {
    e.exports = {
        default: n(263),
        __esModule: !0
    }
}
, function(e, t, n) {
    var r = n(61)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var n = 0
      , r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}
, function(e, t, n) {
    var r = n(48)
      , o = n(148)
      , i = n(149)
      , s = Object.defineProperty;
    t.f = n(50) ? Object.defineProperty : function(e, t, n) {
        if (r(e),
        t = i(t, !0),
        r(n),
        o)
            try {
                return s(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var r = n(49);
    e.exports = function(e) {
        if (!r(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    e.exports = !n(96)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t, n) {
    n(183);
    for (var r = n(11), o = n(20), i = n(40), s = n(12)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < a.length; u++) {
        var d = a[u]
          , c = r[d]
          , l = c && c.prototype;
        l && !l[s] && o(l, s, d),
        i[d] = i.Array
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(186)
      , i = n(64)
      , s = n(62)("IE_PROTO")
      , a = function() {}
      , u = function() {
        var e, t = n(57)("iframe"), r = i.length;
        for (t.style.display = "none",
        n(108).appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        u = e.F; r--; )
            delete u.prototype[i[r]];
        return u()
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (a.prototype = r(e),
        n = new a,
        a.prototype = null,
        n[s] = e) : n = u(),
        void 0 === t ? n : o(n, t)
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e) {
        var t = !0
          , n = !1
          , r = void 0;
        try {
            for (var o, i = (0,
            d.default)((0,
            u.default)(f)); !(t = (o = i.next()).done); t = !0) {
                var s = o.value;
                if (String(e) === String(f[s]))
                    return s
            }
        } catch (e) {
            n = !0,
            r = e
        } finally {
            try {
                !t && i.return && i.return()
            } finally {
                if (n)
                    throw r
            }
        }
        return null
    }
    function i(e, t, n) {
        var r = n.purposes.map(function(e) {
            return e.id
        })
          , i = n.vendors.map(function(e) {
            return e.id
        })
          , s = {}
          , a = {}
          , u = !0
          , c = !1
          , l = void 0;
        try {
            for (var p, f = (0,
            d.default)(r); !(u = (p = f.next()).done); u = !0) {
                var v = p.value;
                s[v] = !1;
                var y = o(v);
                y && (s[v] = -1 !== e.indexOf(y))
            }
        } catch (e) {
            c = !0,
            l = e
        } finally {
            try {
                !u && f.return && f.return()
            } finally {
                if (c)
                    throw l
            }
        }
        var h = !0
          , m = !1
          , I = void 0;
        try {
            for (var g, w = (0,
            d.default)(i); !(h = (g = w.next()).done); h = !0) {
                var b = g.value;
                a[b] = -1 !== t.indexOf(b)
            }
        } catch (e) {
            m = !0,
            I = e
        } finally {
            try {
                !h && w.return && w.return()
            } finally {
                if (m)
                    throw I
            }
        }
        return {
            iabPurposesStatus: s,
            iabVendorsStatus: a
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.IABVisiblePurposesMap = t.IABPurposesMap = t.Purposes = void 0;
    var s, a, u = r(n(22)), d = r(n(7)), c = r(n(138));
    t.getDidomiPurposeId = o,
    t.getAllowedIABIds = i,
    t.getConsentString = function(e, t, n, r, o, s) {
        var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 7
          , d = i(e, t, s)
          , c = d.iabPurposesStatus
          , p = d.iabVendorsStatus
          , f = new l.ConsentString;
        return f.created = n,
        f.lastUpdated = r,
        f.setCmpId(a),
        f.setCmpVersion(1),
        f.setConsentScreen(1),
        f.setConsentLanguage(o),
        f.setPurposesAllowed((0,
        u.default)(c).filter(function(e) {
            return !0 === c[e]
        }).map(function(e) {
            return Number(e)
        })),
        f.setVendorsAllowed((0,
        u.default)(p).filter(function(e) {
            return !0 === p[e]
        }).map(function(e) {
            return Number(e)
        })),
        f.setGlobalVendorList(s),
        {
            consentData: f,
            iabPurposesStatus: c,
            iabVendorsStatus: p
        }
    }
    ,
    t.decodeIABConsentString = function(e) {
        try {
            var t = new l.ConsentString(e)
              , n = t.getCmpId();
            return 0 === n || 1 === n ? null : t
        } catch (e) {
            return null
        }
    }
    ;
    var l = n(232)
      , p = t.Purposes = {
        Cookies: "cookies",
        CookiesAnalytics: "cookies_analytics",
        CookiesMarketing: "cookies_marketing",
        CookiesSocial: "cookies_social",
        AdvertisingPersonalization: "advertising_personalization",
        Analytics: "analytics",
        ContentPersonalization: "content_personalization",
        DeviceAccess: "device_access",
        OfflineMatch: "offline_match",
        LinkDevices: "link_devices",
        PreciseGeo: "precise_geo"
    }
      , f = t.IABPurposesMap = (s = {},
    (0,
    c.default)(s, p.Cookies, 1),
    (0,
    c.default)(s, p.CookiesAnalytics, 1),
    (0,
    c.default)(s, p.CookiesMarketing, 1),
    (0,
    c.default)(s, p.CookiesSocial, 1),
    (0,
    c.default)(s, p.DeviceAccess, 1),
    (0,
    c.default)(s, p.AdvertisingPersonalization, 2),
    (0,
    c.default)(s, p.Analytics, 5),
    (0,
    c.default)(s, p.ContentPersonalization, 4),
    (0,
    c.default)(s, "ad_delivery", 3),
    s);
    t.IABVisiblePurposesMap = (a = {},
    (0,
    c.default)(a, p.Cookies, 1),
    (0,
    c.default)(a, p.AdvertisingPersonalization, 2),
    (0,
    c.default)(a, p.Analytics, 5),
    (0,
    c.default)(a, p.ContentPersonalization, 4),
    (0,
    c.default)(a, "ad_delivery", 3),
    a)
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getCookie = function(e) {
        var t = ("; " + document.cookie).split("; " + e + "=");
        return 2 !== t.length ? void 0 : t.pop().split(";").shift()
    }
    ,
    t.removeSubdomain = function(e) {
        for (var t = (e = e.replace(/^www\./, "")).split("."); t.length > 3; )
            t.shift();
        return 3 === t.length && (t[1].length > 2 && t[2].length > 2 || -1 === o.indexOf(t[1]) && -1 === r.indexOf(t[2]) || t[1].length > 3 && -1 !== r.indexOf(t[2])) && t.shift(),
        t.join(".")
    }
    ,
    t.setCookie = function(e, t, n, r, o) {
        var i = new Date;
        i.setDate(i.getDate() + (n || 365));
        var s = [e + "=" + t, "expires=" + i.toUTCString(), "path=" + (o || "/")];
        r && s.push("domain=" + r),
        document.cookie = s.join(";")
    }
    ,
    t.deleteCookie = function(e, t, n) {
        var r = [e + "=", "expires=Thu, 01 Jan 1970 00:00:01 GMT", "path=" + (n || "/")];
        t && r.push("domain=" + t),
        document.cookie = r.join(";")
    }
    ;
    var r = "ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|be|bf|bg|bh|bi|bj|bm|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|cl|cm|cn|co|cr|cu|cv|cw|cx|cz|de|dj|dk|dm|do|dz|ec|ee|eg|es|et|eu|fi|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|im|in|io|iq|ir|is|it|je|jo|jp|kg|ki|km|kn|kp|kr|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|na|nc|ne|nf|ng|nl|no|nr|nu|nz|om|pa|pe|pf|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|yt".split("|")
      , o = "com|edu|gov|net|mil|org|nom|sch|caa|res|off|gob|int|tur|ip6|uri|urn|asn|act|nsw|qld|tas|vic|pro|biz|adm|adv|agr|arq|art|ato|bio|bmd|cim|cng|cnt|ecn|eco|emp|eng|esp|etc|eti|far|fnd|fot|fst|g12|ggf|imb|ind|inf|jor|jus|leg|lel|mat|med|mus|not|ntr|odo|ppg|psc|psi|qsl|rec|slg|srv|teo|tmp|trd|vet|zlg|web|ltd|sld|pol|fin|k12|lib|pri|aip|fie|eun|sci|prd|cci|pvt|mod|idv|rel|sex|gen|nic|abr|bas|cal|cam|emr|fvg|laz|lig|lom|mar|mol|pmn|pug|sar|sic|taa|tos|umb|vao|vda|ven|mie|北海道|和歌山|神奈川|鹿児島|ass|rep|tra|per|ngo|soc|grp|plc|its|air|and|bus|can|ddr|jfk|mad|nrw|nyc|ski|spy|tcm|ulm|usa|war|fhs|vgs|dep|eid|fet|fla|flå|gol|hof|hol|sel|vik|cri|iwi|ing|abo|fam|gok|gon|gop|gos|aid|atm|gsm|sos|elk|waw|est|aca|bar|cpa|jur|law|sec|plo|www|bir|cbg|jar|khv|msk|nov|nsk|ptz|rnd|spb|stv|tom|tsk|udm|vrn|cmw|kms|nkz|snz|pub|fhv|red|ens|nat|rns|rnu|bbs|tel|bel|kep|nhs|dni|fed|isa|nsn|gub|e12|tec|орг|обр|упр|alt|nis|jpn|mex|ath|iki|nid|gda|inc".split("|")
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(7))
      , i = r(n(0))
      , s = r(n(1))
      , a = function() {
        function e(t, n, r) {
            (0,
            i.default)(this, e),
            this.consents = t(),
            this.setConsents = n,
            this.action = r
        }
        return (0,
        s.default)(e, [{
            key: "enablePurpose",
            value: function(e) {
                -1 === this.consents.purposes.enabled.indexOf(e) && this.consents.purposes.enabled.push(e);
                var t = this.consents.purposes.disabled.indexOf(e);
                return -1 !== t && this.consents.purposes.disabled.splice(t, 1),
                this
            }
        }, {
            key: "enablePurposes",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r = !0
                  , i = !1
                  , s = void 0;
                try {
                    for (var a, u = (0,
                    o.default)(t); !(r = (a = u.next()).done); r = !0) {
                        var d = a.value;
                        this.enablePurpose(d)
                    }
                } catch (e) {
                    i = !0,
                    s = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i)
                            throw s
                    }
                }
                return this
            }
        }, {
            key: "disablePurpose",
            value: function(e) {
                -1 === this.consents.purposes.disabled.indexOf(e) && this.consents.purposes.disabled.push(e);
                var t = this.consents.purposes.enabled.indexOf(e);
                return -1 !== t && this.consents.purposes.enabled.splice(t, 1),
                this
            }
        }, {
            key: "disablePurposes",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r = !0
                  , i = !1
                  , s = void 0;
                try {
                    for (var a, u = (0,
                    o.default)(t); !(r = (a = u.next()).done); r = !0) {
                        var d = a.value;
                        this.disablePurpose(d)
                    }
                } catch (e) {
                    i = !0,
                    s = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i)
                            throw s
                    }
                }
                return this
            }
        }, {
            key: "enableVendor",
            value: function(e) {
                -1 === this.consents.vendors.enabled.indexOf(e) && this.consents.vendors.enabled.push(e);
                var t = this.consents.vendors.disabled.indexOf(e);
                return -1 !== t && this.consents.vendors.disabled.splice(t, 1),
                this
            }
        }, {
            key: "enableVendors",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r = !0
                  , i = !1
                  , s = void 0;
                try {
                    for (var a, u = (0,
                    o.default)(t); !(r = (a = u.next()).done); r = !0) {
                        var d = a.value;
                        this.enableVendor(d)
                    }
                } catch (e) {
                    i = !0,
                    s = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i)
                            throw s
                    }
                }
                return this
            }
        }, {
            key: "disableVendor",
            value: function(e) {
                -1 === this.consents.vendors.disabled.indexOf(e) && this.consents.vendors.disabled.push(e);
                var t = this.consents.vendors.enabled.indexOf(e);
                return -1 !== t && this.consents.vendors.enabled.splice(t, 1),
                this
            }
        }, {
            key: "disableVendors",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r = !0
                  , i = !1
                  , s = void 0;
                try {
                    for (var a, u = (0,
                    o.default)(t); !(r = (a = u.next()).done); r = !0) {
                        var d = a.value;
                        this.disableVendor(d)
                    }
                } catch (e) {
                    i = !0,
                    s = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i)
                            throw s
                    }
                }
                return this
            }
        }, {
            key: "commit",
            value: function() {
                this.setConsents(this.consents.purposes.enabled, this.consents.purposes.disabled, this.consents.vendors.enabled, this.consents.vendors.disabled, this.action)
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    var r = n(14)
      , o = n(11).document
      , i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(14);
    e.exports = function(e, t) {
        if (!r(e))
            return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
            return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t, n) {
    var r = n(35);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}
, function(e, t, n) {
    var r = n(63)("keys")
      , o = n(46);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}
, function(e, t, n) {
    var r = n(6)
      , o = n(11)
      , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: r.version,
        mode: n(36) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t, n) {
    var r = n(29)
      , o = n(30)
      , i = n(38)
      , s = n(98)
      , a = n(69)
      , u = function(e, t, n) {
        var d, c, l, p, f = e & u.F, v = e & u.G, y = e & u.S, h = e & u.P, m = e & u.B, I = v ? r : y ? r[t] || (r[t] = {}) : (r[t] || {}).prototype, g = v ? o : o[t] || (o[t] = {}), w = g.prototype || (g.prototype = {});
        for (d in v && (n = t),
        n)
            l = ((c = !f && I && void 0 !== I[d]) ? I : n)[d],
            p = m && c ? a(l, r) : h && "function" == typeof l ? a(Function.call, l) : l,
            I && s(I, d, l, e & u.U),
            g[d] != l && i(g, d, p),
            h && w[d] != l && (w[d] = l)
    };
    r.core = o,
    u.F = 1,
    u.G = 2,
    u.S = 4,
    u.P = 8,
    u.B = 16,
    u.W = 32,
    u.U = 64,
    u.R = 128,
    e.exports = u
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t) {
    var n = 0
      , r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}
, function(e, t, n) {
    var r = n(150);
    e.exports = function(e, t, n) {
        if (r(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t, n) {
    var r = n(72);
    e.exports = function(e) {
        return Object(r(e))
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t, n) {
    var r = n(74)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var n = Math.ceil
      , r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
    }
}
, function(e, t) {
    e.exports = {}
}
, function(e, t, n) {
    var r = n(100)("keys")
      , o = n(68);
    e.exports = function(e) {
        return r[e] || (r[e] = o(e))
    }
}
, function(e, t, n) {
    var r = n(10)
      , o = n(6)
      , i = n(23);
    e.exports = function(e, t) {
        var n = (o.Object || {})[e] || Object[e]
          , s = {};
        s[e] = t(n),
        r(r.S + r.F * i(function() {
            n(1)
        }), "Object", s)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(36)
      , o = n(10)
      , i = n(107)
      , s = n(20)
      , a = n(40)
      , u = n(185)
      , d = n(41)
      , c = n(109)
      , l = n(12)("iterator")
      , p = !([].keys && "next"in [].keys())
      , f = function() {
        return this
    };
    e.exports = function(e, t, n, v, y, h, m) {
        u(n, t, v);
        var I, g, w, b = function(e) {
            if (!p && e in k)
                return k[e];
            switch (e) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }, P = t + " Iterator", S = "values" == y, _ = !1, k = e.prototype, C = k[l] || k["@@iterator"] || y && k[y], U = C || b(y), x = y ? S ? b("entries") : U : void 0, A = "Array" == t && k.entries || C;
        if (A && (w = c(A.call(new e))) !== Object.prototype && w.next && (d(w, P, !0),
        r || "function" == typeof w[l] || s(w, l, f)),
        S && C && "values" !== C.name && (_ = !0,
        U = function() {
            return C.call(this)
        }
        ),
        r && !m || !p && !_ && k[l] || s(k, l, U),
        a[t] = U,
        a[P] = f,
        y)
            if (I = {
                values: S ? U : b("values"),
                keys: h ? U : b("keys"),
                entries: x
            },
            m)
                for (g in I)
                    g in k || i(k, g, I[g]);
            else
                o(o.P + o.F * (p || _), t, I);
        return I
    }
}
, function(e, t, n) {
    var r = n(80)
      , o = n(12)("iterator")
      , i = n(40);
    e.exports = n(6).getIteratorMethod = function(e) {
        if (void 0 != e)
            return e[o] || e["@@iterator"] || i[r(e)]
    }
}
, function(e, t, n) {
    var r = n(35)
      , o = n(12)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }());
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}
, function(e, t, n) {
    t.f = n(12)
}
, function(e, t, n) {
    var r = n(46)("meta")
      , o = n(14)
      , i = n(24)
      , s = n(13).f
      , a = 0
      , u = Object.isExtensible || function() {
        return !0
    }
      , d = !n(23)(function() {
        return u(Object.preventExtensions({}))
    })
      , c = function(e) {
        s(e, r, {
            value: {
                i: "O" + ++a,
                w: {}
            }
        })
    }
      , l = e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(e, t) {
            if (!o(e))
                return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, r)) {
                if (!u(e))
                    return "F";
                if (!t)
                    return "E";
                c(e)
            }
            return e[r].i
        },
        getWeak: function(e, t) {
            if (!i(e, r)) {
                if (!u(e))
                    return !0;
                if (!t)
                    return !1;
                c(e)
            }
            return e[r].w
        },
        onFreeze: function(e) {
            return d && l.NEED && u(e) && !i(e, r) && c(e),
            e
        }
    }
}
, function(e, t, n) {
    var r = n(11)
      , o = n(6)
      , i = n(36)
      , s = n(81)
      , a = n(13).f;
    e.exports = function(e) {
        var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == e.charAt(0) || e in t || a(t, e, {
            value: s.f(e)
        })
    }
}
, function(e, t, n) {
    var r = n(37)
      , o = n(34)
      , i = n(21)
      , s = n(58)
      , a = n(24)
      , u = n(94)
      , d = Object.getOwnPropertyDescriptor;
    t.f = n(16) ? d : function(e, t) {
        if (e = i(e),
        t = s(t, !0),
        u)
            try {
                return d(e, t)
            } catch (e) {}
        if (a(e, t))
            return o(!r.f.call(e, t), e[t])
    }
}
, function(e, t) {}
, function(e, t, n) {
    e.exports = {
        default: n(208),
        __esModule: !0
    }
}
, function(e, t, n) {
    (function(e, r) {
        var o;
        /*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
        !function(r) {
            var i = ("object" == typeof e && e && e.exports,
            function(e) {
                this.message = e
            }
            );
            (i.prototype = new Error).name = "InvalidCharacterError";
            var s = function(e) {
                throw new i(e)
            }
              , a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , u = /[\t\n\f\r ]/g
              , d = {
                encode: function(e) {
                    e = String(e),
                    /[^\0-\xFF]/.test(e) && s("The string to be encoded contains characters outside of the Latin1 range.");
                    for (var t, n, r, o, i = e.length % 3, u = "", d = -1, c = e.length - i; ++d < c; )
                        t = e.charCodeAt(d) << 16,
                        n = e.charCodeAt(++d) << 8,
                        r = e.charCodeAt(++d),
                        u += a.charAt((o = t + n + r) >> 18 & 63) + a.charAt(o >> 12 & 63) + a.charAt(o >> 6 & 63) + a.charAt(63 & o);
                    return 2 == i ? (t = e.charCodeAt(d) << 8,
                    n = e.charCodeAt(++d),
                    u += a.charAt((o = t + n) >> 10) + a.charAt(o >> 4 & 63) + a.charAt(o << 2 & 63) + "=") : 1 == i && (o = e.charCodeAt(d),
                    u += a.charAt(o >> 2) + a.charAt(o << 4 & 63) + "=="),
                    u
                },
                decode: function(e) {
                    var t = (e = String(e).replace(u, "")).length;
                    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                    (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && s("Invalid character: the string to be decoded is not correctly encoded.");
                    for (var n, r, o = 0, i = "", d = -1; ++d < t; )
                        r = a.indexOf(e.charAt(d)),
                        n = o % 4 ? 64 * n + r : r,
                        o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
                    return i
                },
                version: "0.1.0"
            };
            void 0 === (o = function() {
                return d
            }
            .call(t, n, t, e)) || (e.exports = o)
        }()
    }
    ).call(t, n(231)(e), n(39))
}
, function(e, t, n) {
    var r = n(20);
    e.exports = function(e, t, n) {
        for (var o in t)
            n && e[o] ? e[o] = t[o] : r(e, o, t[o]);
        return e
    }
}
, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e)
            throw TypeError(n + ": incorrect invocation!");
        return e
    }
}
, function(e, t, n) {
    (function(e) {
        function n(e, t, n) {
            e[t] = e[t] || n
        }
        var r = ["responseType", "withCredentials", "timeout", "onprogress"];
        t.ajax = function(t, o) {
            function i(e, t) {
                return function() {
                    d || (o(void 0 === c.status ? e : c.status, 0 === c.status ? "Error" : c.response || c.responseText || t, c),
                    d = !0)
                }
            }
            var s = t.headers || {}
              , a = t.body
              , u = t.method || (a ? "POST" : "GET")
              , d = !1
              , c = function(t) {
                return t && e.XDomainRequest && !/MSIE 1/.test(navigator.userAgent) ? new XDomainRequest : e.XMLHttpRequest ? new XMLHttpRequest : void 0
            }(t.cors);
            c.open(u, t.url, !0);
            var l = c.onload = i(200);
            c.onreadystatechange = function() {
                4 === c.readyState && l()
            }
            ,
            c.onerror = i(null, "Error"),
            c.ontimeout = i(null, "Timeout"),
            c.onabort = i(null, "Abort"),
            a && (n(s, "X-Requested-With", "XMLHttpRequest"),
            e.FormData && a instanceof e.FormData || n(s, "Content-Type", "application/x-www-form-urlencoded"));
            for (var p = 0, f = r.length; p < f; p++)
                void 0 !== t[v = r[p]] && (c[v] = t[v]);
            for (var v in s)
                c.setRequestHeader(v, s[v]);
            return c.send(a),
            c
        }
    }
    ).call(t, n(39))
}
, function(e, t, n) {
    "use strict";
    var r = n(33);
    e.exports.f = function(e) {
        return new function(e) {
            var t, n;
            this.promise = new e(function(e, r) {
                if (void 0 !== t || void 0 !== n)
                    throw TypeError("Bad Promise constructor");
                t = e,
                n = r
            }
            ),
            this.resolve = r(t),
            this.reject = r(n)
        }
        (e)
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(251),
        __esModule: !0
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(141),
        __esModule: !0
    }
}
, function(e, t, n) {
    e.exports = !n(16) && !n(23)(function() {
        return 7 != Object.defineProperty(n(57)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t, n) {
    var r = n(24)
      , o = n(21)
      , i = n(144)(!1)
      , s = n(62)("IE_PROTO");
    e.exports = function(e, t) {
        var n, a = o(e), u = 0, d = [];
        for (n in a)
            n != s && r(a, n) && d.push(n);
        for (; t.length > u; )
            r(a, n = t[u++]) && (~i(d, n) || d.push(n));
        return d
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var r = n(49)
      , o = n(29).document
      , i = r(o) && r(o.createElement);
    e.exports = function(e) {
        return i ? o.createElement(e) : {}
    }
}
, function(e, t, n) {
    var r = n(29)
      , o = n(38)
      , i = n(51)
      , s = n(68)("src")
      , a = Function.toString
      , u = ("" + a).split("toString");
    n(30).inspectSource = function(e) {
        return a.call(e)
    }
    ,
    (e.exports = function(e, t, n, a) {
        var d = "function" == typeof n;
        d && (i(n, "name") || o(n, "name", t)),
        e[t] !== n && (d && (i(n, s) || o(n, s, e[t] ? "" + e[t] : u.join(String(t)))),
        e === r ? e[t] = n : a ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t],
        o(e, t, n)))
    }
    )(Function.prototype, "toString", function() {
        return "function" == typeof this && this[s] || a.call(this)
    })
}
, function(e, t, n) {
    var r = n(70);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}
, function(e, t, n) {
    var r = n(30)
      , o = n(29)
      , i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: r.version,
        mode: n(101) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    e.exports = !1
}
, function(e, t, n) {
    var r = n(99)
      , o = n(72);
    e.exports = function(e) {
        return r(o(e))
    }
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t, n) {
    var r = n(47).f
      , o = n(51)
      , i = n(19)("toStringTag");
    e.exports = function(e, t, n) {
        e && !o(e = n ? e : e.prototype, i) && r(e, i, {
            configurable: !0,
            value: t
        })
    }
}
, function(e, t, n) {
    (function(e) {
        function r(e, t) {
            this._id = e,
            this._clearFn = t
        }
        var o = void 0 !== e && e || "undefined" != typeof self && self || window
          , i = Function.prototype.apply;
        t.setTimeout = function() {
            return new r(i.call(setTimeout, o, arguments),clearTimeout)
        }
        ,
        t.setInterval = function() {
            return new r(i.call(setInterval, o, arguments),clearInterval)
        }
        ,
        t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }
        ,
        r.prototype.unref = r.prototype.ref = function() {}
        ,
        r.prototype.close = function() {
            this._clearFn.call(o, this._id)
        }
        ,
        t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = t
        }
        ,
        t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId),
            e._idleTimeout = -1
        }
        ,
        t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }
        ,
        n(178),
        t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
        t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
    }
    ).call(t, n(39))
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}
, function(e, t, n) {
    e.exports = n(20)
}
, function(e, t, n) {
    var r = n(11).document;
    e.exports = r && r.documentElement
}
, function(e, t, n) {
    var r = n(24)
      , o = n(28)
      , i = n(62)("IE_PROTO")
      , s = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e),
        r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(193),
        __esModule: !0
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(194),
        __esModule: !0
    }
}
, function(e, t, n) {
    var r = n(35);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}
, function(e, t, n) {
    var r = n(95)
      , o = n(64).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.availableLanguages = void 0;
    var o = r(n(7))
      , i = r(n(3))
      , s = r(n(0))
      , a = r(n(1))
      , u = r(n(4))
      , d = r(n(5))
      , c = r(n(9))
      , l = t.availableLanguages = ["ca", "de", "en", "es", "fr", "hr", "it", "nl", "pt", "fi", "cs", "pl", "ro", "el", "hu", "da", "sk", "bg", "sl", "lt", "sv", "et", "lv", "tr", "ru", "uk"]
      , p = function(e) {
        function t() {
            return (0,
            s.default)(this, t),
            (0,
            u.default)(this, (t.__proto__ || (0,
            i.default)(t)).apply(this, arguments))
        }
        return (0,
        d.default)(t, e),
        (0,
        a.default)(t, [{
            key: "init",
            value: function() {
                this.setLocale(this.checkLanguage(this.getBrowserLanguage()))
            }
        }, {
            key: "configure",
            value: function(e) {
                if (e) {
                    var t = this.store.getState().languages;
                    if (Array.isArray(e.enabled) && e.enabled.length > 0) {
                        var n = []
                          , r = !0
                          , i = !1
                          , s = void 0;
                        try {
                            for (var a, u = (0,
                            o.default)(e.enabled); !(r = (a = u.next()).done); r = !0) {
                                var d = a.value;
                                -1 === l.indexOf(d) ? console.error("Didomi - The language " + d + " is not supported") : n.push(d)
                            }
                        } catch (e) {
                            i = !0,
                            s = e
                        } finally {
                            try {
                                !r && u.return && u.return()
                            } finally {
                                if (i)
                                    throw s
                            }
                        }
                        n.length > 0 && (t.enabled = n),
                        -1 === t.enabled.indexOf(t.default) && (t.default = t.enabled[0]),
                        1 === n.length && (t.default = n[0])
                    }
                    e.default && (-1 === t.enabled.indexOf(e.default) ? console.error("Didomi - Default language '" + e.default + "' must be in the list of enabled languages") : t.default = e.default),
                    this.actions.setLanguagesConfig(t),
                    this.setLocale(this.checkLanguage(this.getBrowserLanguage()))
                }
            }
        }, {
            key: "getLocale",
            value: function() {
                return this.locale
            }
        }, {
            key: "setLocale",
            value: function(e) {
                this.locale = e
            }
        }, {
            key: "getBrowserLanguage",
            value: function() {
                return navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage
            }
        }, {
            key: "checkLanguage",
            value: function(e) {
                var t = e.substr(0, 2);
                return -1 !== this.store.getState().languages.enabled.indexOf(t) ? t : this.store.getState().languages.default
            }
        }, {
            key: "localeCompare",
            value: function(e, t) {
                try {
                    return e.localeCompare(t, this.getLocale())
                } catch (n) {
                    return e > t ? 1 : -1
                }
            }
        }]),
        t
    }(c.default);
    t.default = p
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(116))
      , o = (new Date).toISOString();
    t.initialState = {
        consent: {
            user_id: (0,
            r.default)(),
            created: o,
            updated: o,
            vendors: {
                enabled: [],
                disabled: []
            },
            purposes: {
                enabled: [],
                disabled: []
            }
        }
    },
    t.actions = function() {
        return {
            setConsentByVendor: function(e, t) {
                return {
                    consentByVendor: t
                }
            },
            setConsent: function(e, t) {
                return {
                    consent: t
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function() {
        var e = Math.round((new Date).getTime()).toString(16);
        return (e.substring(0, 8) + "-" + e.substring(8) + "x-6xxx-yxxx-xxxxxxxxxxxx").replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }
}
, function(e, t, n) {
    "use strict";
    (function(t) {
        function n() {}
        function r(e) {
            if (!(this instanceof r))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            u(e, this)
        }
        function o(e, t) {
            for (; 3 === e._state; )
                e = e._value;
            0 !== e._state ? (e._handled = !0,
            r._immediateFn(function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void s(t.promise, e)
                    }
                    i(t.promise, r)
                } else
                    (1 === e._state ? i : s)(t.promise, e._value)
            })) : e._deferreds.push(t)
        }
        function i(e, t) {
            try {
                if (t === e)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof r)
                        return e._state = 3,
                        e._value = t,
                        void a(e);
                    if ("function" == typeof n)
                        return void u(function(e, t) {
                            return function() {
                                e.apply(t, arguments)
                            }
                        }(n, t), e)
                }
                e._state = 1,
                e._value = t,
                a(e)
            } catch (t) {
                s(e, t)
            }
        }
        function s(e, t) {
            e._state = 2,
            e._value = t,
            a(e)
        }
        function a(e) {
            2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
                e._handled || r._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++)
                o(e, e._deferreds[t]);
            e._deferreds = null
        }
        function u(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0,
                    i(t, e))
                }, function(e) {
                    n || (n = !0,
                    s(t, e))
                })
            } catch (e) {
                if (n)
                    return;
                n = !0,
                s(t, e)
            }
        }
        var d = setTimeout;
        r.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        r.prototype.then = function(e, t) {
            var r = new this.constructor(n);
            return o(this, new function(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            (e,t,r)),
            r
        }
        ,
        r.prototype.finally = function(e) {
            var t = this.constructor;
            return this.then(function(n) {
                return t.resolve(e()).then(function() {
                    return n
                })
            }, function(n) {
                return t.resolve(e()).then(function() {
                    return t.reject(n)
                })
            })
        }
        ,
        r.all = function(e) {
            return new r(function(t, n) {
                function r(e, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var a = s.then;
                            if ("function" == typeof a)
                                return void a.call(s, function(t) {
                                    r(e, t)
                                }, n)
                        }
                        o[e] = s,
                        0 == --i && t(o)
                    } catch (e) {
                        n(e)
                    }
                }
                if (!e || void 0 === e.length)
                    throw new TypeError("Promise.all accepts an array");
                var o = Array.prototype.slice.call(e);
                if (0 === o.length)
                    return t([]);
                for (var i = o.length, s = 0; s < o.length; s++)
                    r(s, o[s])
            }
            )
        }
        ,
        r.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === r ? e : new r(function(t) {
                t(e)
            }
            )
        }
        ,
        r.reject = function(e) {
            return new r(function(t, n) {
                n(e)
            }
            )
        }
        ,
        r.race = function(e) {
            return new r(function(t, n) {
                for (var r = 0, o = e.length; r < o; r++)
                    e[r].then(t, n)
            }
            )
        }
        ,
        r._immediateFn = "function" == typeof t && function(e) {
            t(e)
        }
        || function(e) {
            d(e, 0)
        }
        ,
        r._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }
        ,
        e.exports = r
    }
    ).call(t, n(105).setImmediate)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(17))
      , i = r(n(25));
    t.base64ToToken = function(e) {
        try {
            return JSON.parse(s.default.decode(e))
        } catch (e) {
            return null
        }
    }
    ,
    t.tokenToBase64 = function(e) {
        try {
            return s.default.encode((0,
            i.default)(e))
        } catch (e) {
            return null
        }
    }
    ,
    t.tokenToBase64CookieFormat = function(e) {
        if (!e || "object" !== (void 0 === e ? "undefined" : (0,
        o.default)(e)))
            return null;
        var t = (0,
        u.deepClone)(e)
          , n = (0,
        u.get)(e, "vendors.enabled")
          , r = (0,
        u.get)(e, "vendors.disabled");
        return Array.isArray(n) && (t.vendors.enabled = n.filter(function(e) {
            return "number" != typeof e
        })),
        Array.isArray(r) && (t.vendors.disabled = r.filter(function(e) {
            return "number" != typeof e
        })),
        s.default.encode((0,
        i.default)(t))
    }
    ,
    t.tokenToIABConsentString = function(e, t, n) {
        return (0,
        a.getConsentString)((0,
        u.get)(e, "purposes.enabled") || [], (0,
        u.get)(e, "vendors.enabled") || [], new Date((0,
        u.get)(e, "created")), new Date((0,
        u.get)(e, "updated")), t, n).consentData.getConsentString(!1)
    }
    ,
    t.tokenToIABConsentData = function(e, t, n) {
        return (0,
        a.getConsentString)((0,
        u.get)(e, "purposes.enabled") || [], (0,
        u.get)(e, "vendors.enabled") || [], new Date((0,
        u.get)(e, "created")), new Date((0,
        u.get)(e, "updated")), t, n)
    }
    ;
    var s = r(n(87))
      , a = n(54)
      , u = n(2)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = "", r = 1; r <= e; r += 1)
            n += -1 !== t.indexOf(r) ? "1" : "0";
        return p(n, Math.max(0, e - n.length))
    }
    function i(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new u.default, n = 0, r = 0; r < e.length; r += 1)
            n = Math.max(n, e[r].id);
        for (var o = 0; o < t.length; o += 1)
            n = Math.max(n, t[o]);
        for (var i = "", s = 1; s <= n; s += 1)
            i += -1 !== t.indexOf(s) ? "1" : "0";
        return i
    }
    function s(e, t) {
        for (var n = [], r = [], o = e.map(function(e) {
            return e.id
        }), i = 0; i < e.length; i += 1) {
            var s = e[i].id;
            if (-1 !== t.indexOf(s) && n.push(s),
            (-1 === t.indexOf(s) || i === e.length - 1 || -1 === o.indexOf(s + 1)) && n.length) {
                var a = n.shift()
                  , u = n.pop();
                n = [],
                r.push({
                    isRange: "number" == typeof u,
                    startVendorId: a,
                    endVendorId: u
                })
            }
        }
        return r
    }
    function a(e) {
        var t = 0;
        return e.forEach(function(e) {
            e.id > t && (t = e.id)
        }),
        t
    }
    var u = r(n(120))
      , d = r(n(93)).default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , c = n(125)
      , l = c.encodeToBase64
      , p = c.padRight;
    e.exports = {
        convertVendorsToRanges: s,
        encodeConsentString: function(e) {
            var t = e.maxVendorId
              , n = e.vendorList
              , r = void 0 === n ? {} : n
              , u = e.allowedPurposeIds
              , c = e.allowedVendorIds
              , p = r.vendors
              , f = void 0 === p ? [] : p
              , v = r.purposes
              , y = void 0 === v ? [] : v;
            t || (t = a(f));
            var h = l(d({}, e, {
                maxVendorId: t,
                purposeIdBitString: i(y, u),
                isRange: !1,
                vendorIdBitString: o(t, c)
            }))
              , m = s(f, c)
              , I = l(d({}, e, {
                maxVendorId: t,
                purposeIdBitString: i(y, u),
                isRange: !0,
                defaultConsent: !1,
                numEntries: m.length,
                vendorRangeList: m
            }));
            return h.length < I.length ? h : I
        },
        getMaxVendorId: a,
        encodeVendorIdsToBits: o,
        encodePurposeIdsToBits: i
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(234),
        __esModule: !0
    }
}
, function(e, t, n) {
    var r = n(15);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)),
            t
        }
    }
}
, function(e, t, n) {
    var r = n(40)
      , o = n(12)("iterator")
      , i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(11)
      , o = n(6)
      , i = n(13)
      , s = n(16)
      , a = n(12)("species");
    e.exports = function(e) {
        var t = "function" == typeof o[e] ? o[e] : r[e];
        s && t && !t[a] && i.f(t, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}
, function(e, t, n) {
    var r = n(14);
    e.exports = function(e, t) {
        if (!r(e) || e._t !== t)
            throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0", n = "", r = 0; r < e; r += 1)
            n += t;
        return n
    }
    function o(e, t) {
        return r(Math.max(0, t)) + e
    }
    function i(e, t) {
        return e + r(Math.max(0, t))
    }
    function s(e, t) {
        var n = "";
        return "number" != typeof e || isNaN(e) || (n = parseInt(e, 10).toString(2)),
        t >= n.length && (n = o(n, t - n.length)),
        n.length > t && (n = n.substring(0, t)),
        n
    }
    function a(e) {
        return s(!0 === e ? 1 : 0, 1)
    }
    function u(e, t) {
        return e instanceof Date ? s(e.getTime() / 100, t) : s(e, t)
    }
    function d(e, t) {
        return s(e.toUpperCase().charCodeAt(0) - 65, t)
    }
    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
        return d(e.slice(0, 1), t / 2) + d(e.slice(1), t / 2)
    }
    function l(e, t, n) {
        return parseInt(e.substr(t, n), 2)
    }
    function p(e, t, n) {
        return new Date(100 * l(e, t, n))
    }
    function f(e, t) {
        return 1 === parseInt(e.substr(t, 1), 2)
    }
    function v(e) {
        var t = l(e);
        return String.fromCharCode(t + 65).toLowerCase()
    }
    function y(e, t, n) {
        var r = e.substr(t, n);
        return v(r.slice(0, n / 2)) + v(r.slice(n / 2))
    }
    function h(e) {
        var t = e.input
          , n = e.field
          , r = n.name
          , o = n.type
          , d = n.numBits
          , l = n.encoder
          , p = n.validator;
        if ("function" == typeof p && !p(t))
            return "";
        if ("function" == typeof l)
            return l(t);
        var f = "function" == typeof d ? d(t) : d
          , v = t[r]
          , y = null === v || void 0 === v ? "" : v;
        switch (o) {
        case "int":
            return s(y, f);
        case "bool":
            return a(y);
        case "date":
            return u(y, f);
        case "bits":
            return i(y, f - y.length).substring(0, f);
        case "list":
            return y.reduce(function(e, t) {
                return e + m({
                    input: t,
                    fields: n.fields
                })
            }, "");
        case "language":
            return c(y, f);
        default:
            throw new Error("ConsentString - Unknown field type " + o + " for encoding")
        }
    }
    function m(e) {
        var t = e.input;
        return e.fields.reduce(function(e, n) {
            return e += h({
                input: t,
                field: n
            })
        }, "")
    }
    function I(e) {
        var t = e.input
          , n = e.output
          , r = e.startPosition
          , o = e.field
          , i = o.type
          , s = o.numBits
          , a = o.decoder
          , u = o.validator
          , d = o.listCount;
        if ("function" == typeof u && !u(n))
            return {
                newPosition: r
            };
        if ("function" == typeof a)
            return a(t, n, r);
        var c = "function" == typeof s ? s(n) : s;
        switch (i) {
        case "int":
            return {
                fieldValue: l(t, r, c)
            };
        case "bool":
            return {
                fieldValue: f(t, r)
            };
        case "date":
            return {
                fieldValue: p(t, r, c)
            };
        case "bits":
            return {
                fieldValue: t.substr(r, c)
            };
        case "list":
            return function(e, t, n, r, o) {
                var i = 0;
                "function" == typeof o ? i = o(t) : "number" == typeof o && (i = o);
                for (var s = n, a = [], u = 0; u < i; u += 1) {
                    var d = g({
                        input: e,
                        fields: r.fields,
                        startPosition: s
                    });
                    s = d.newPosition,
                    a.push(d.decodedObject)
                }
                return {
                    fieldValue: a,
                    newPosition: s
                }
            }(t, n, r, o, d);
        case "language":
            return {
                fieldValue: y(t, r, c)
            };
        default:
            throw new Error("ConsentString - Unknown field type " + i + " for decoding")
        }
    }
    function g(e) {
        var t = e.input
          , n = e.fields
          , r = e.startPosition
          , o = void 0 === r ? 0 : r;
        return {
            decodedObject: n.reduce(function(e, n) {
                var r = n.name
                  , i = n.numBits
                  , s = I({
                    input: t,
                    output: e,
                    startPosition: o,
                    field: n
                })
                  , a = s.fieldValue
                  , u = s.newPosition;
                return void 0 !== a && (e[r] = a),
                void 0 !== u ? o = u : "number" == typeof i && (o += i),
                e
            }, {}),
            newPosition: o
        }
    }
    function w(e, t) {
        var n = e.version;
        if ("number" != typeof n)
            throw new Error("ConsentString - No version field to encode");
        if (t[n])
            return m({
                input: e,
                fields: t[n].fields
            });
        throw new Error("ConsentString - No definition for version " + n)
    }
    var b = n(87)
      , P = n(126)
      , S = P.versionNumBits
      , _ = P.vendorVersionMap;
    e.exports = {
        padRight: i,
        padLeft: o,
        encodeField: h,
        encodeDataToBits: w,
        encodeIntToBits: s,
        encodeBoolToBits: a,
        encodeDateToBits: u,
        encodeLanguageToBits: c,
        encodeLetterToBits: d,
        encodeToBase64: function(e) {
            var t = w(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _);
            if (t) {
                for (var n = i(t, 7 - (t.length + 7) % 8), r = "", o = 0; o < n.length; o += 8)
                    r += String.fromCharCode(parseInt(n.substr(o, 8), 2));
                return b.encode(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }
            return null
        },
        decodeBitsToIds: function(e) {
            return e.split("").reduce(function(e, t, n) {
                return "1" === t && -1 === e.indexOf(n + 1) && e.push(n + 1),
                e
            }, [])
        },
        decodeBitsToInt: l,
        decodeBitsToDate: p,
        decodeBitsToBool: f,
        decodeBitsToLanguage: y,
        decodeBitsToLetter: v,
        decodeFromBase64: function(e, t) {
            for (var n = e; n.length % 4 != 0; )
                n += "=";
            n = n.replace(/-/g, "+").replace(/_/g, "/");
            for (var r = b.decode(n), i = "", s = 0; s < r.length; s += 1) {
                var a = r.charCodeAt(s).toString(2);
                i += o(a, 8 - a.length)
            }
            return function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _
                  , n = l(e, 0, S);
                if ("number" != typeof n)
                    throw new Error("ConsentString - Unknown version number in the string to decode");
                if (!_[n])
                    throw new Error("ConsentString - Unsupported version " + n + " in the string to decode");
                return g({
                    input: e,
                    fields: t[n].fields
                }).decodedObject
            }(i, t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        versionNumBits: 6,
        vendorVersionMap: {
            1: {
                version: 1,
                metadataFields: ["version", "created", "lastUpdated", "cmpId", "cmpVersion", "consentScreen", "vendorListVersion"],
                fields: [{
                    name: "version",
                    type: "int",
                    numBits: 6
                }, {
                    name: "created",
                    type: "date",
                    numBits: 36
                }, {
                    name: "lastUpdated",
                    type: "date",
                    numBits: 36
                }, {
                    name: "cmpId",
                    type: "int",
                    numBits: 12
                }, {
                    name: "cmpVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "consentScreen",
                    type: "int",
                    numBits: 6
                }, {
                    name: "consentLanguage",
                    type: "language",
                    numBits: 12
                }, {
                    name: "vendorListVersion",
                    type: "int",
                    numBits: 12
                }, {
                    name: "purposeIdBitString",
                    type: "bits",
                    numBits: 24
                }, {
                    name: "maxVendorId",
                    type: "int",
                    numBits: 16
                }, {
                    name: "isRange",
                    type: "bool",
                    numBits: 1
                }, {
                    name: "vendorIdBitString",
                    type: "bits",
                    numBits: function(e) {
                        return e.maxVendorId
                    },
                    validator: function(e) {
                        return !e.isRange
                    }
                }, {
                    name: "defaultConsent",
                    type: "bool",
                    numBits: 1,
                    validator: function(e) {
                        return e.isRange
                    }
                }, {
                    name: "numEntries",
                    numBits: 12,
                    type: "int",
                    validator: function(e) {
                        return e.isRange
                    }
                }, {
                    name: "vendorRangeList",
                    type: "list",
                    listCount: function(e) {
                        return e.numEntries
                    },
                    validator: function(e) {
                        return e.isRange
                    },
                    fields: [{
                        name: "isRange",
                        type: "bool",
                        numBits: 1
                    }, {
                        name: "startVendorId",
                        type: "int",
                        numBits: 16
                    }, {
                        name: "endVendorId",
                        type: "int",
                        numBits: 16,
                        validator: function(e) {
                            return e.isRange
                        }
                    }]
                }]
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(125)
      , o = r.decodeBitsToIds
      , i = r.decodeFromBase64;
    e.exports = {
        decodeConsentString: function(e) {
            var t = i(e)
              , n = t.version
              , r = t.cmpId
              , s = t.vendorListVersion
              , a = t.purposeIdBitString
              , u = t.maxVendorId
              , d = t.created
              , c = t.lastUpdated
              , l = t.isRange
              , p = t.defaultConsent
              , f = t.vendorIdBitString
              , v = t.vendorRangeList
              , y = t.cmpVersion
              , h = t.consentScreen
              , m = t.consentLanguage
              , I = {
                version: n,
                cmpId: r,
                vendorListVersion: s,
                allowedPurposeIds: o(a),
                maxVendorId: u,
                created: d,
                lastUpdated: c,
                cmpVersion: y,
                consentScreen: h,
                consentLanguage: m
            };
            if (l) {
                var g = v.reduce(function(e, t) {
                    for (var n = t.isRange, r = t.startVendorId, o = t.endVendorId, i = n ? o : r, s = r; s <= i; s += 1)
                        e[s] = !0;
                    return e
                }, {});
                I.allowedVendorIds = [];
                for (var w = 1; w <= u; w += 1)
                    (p && !g[w] || !p && g[w]) && -1 === I.allowedVendorIds.indexOf(w) && I.allowedVendorIds.push(w)
            } else
                I.allowedVendorIds = o(f);
            return I
        }
    }
}
, function(e, t, n) {
    var r = n(12)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , s = i[r]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return s
            }
            ,
            e(i)
        } catch (e) {}
        return n
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(33)
      , i = n(12)("species");
    e.exports = function(e, t) {
        var n, s = r(e).constructor;
        return void 0 === s || void 0 == (n = r(s)[i]) ? t : o(n)
    }
}
, function(e, t, n) {
    var r, o, i, s = n(18), a = n(282), u = n(108), d = n(57), c = n(11), l = c.process, p = c.setImmediate, f = c.clearImmediate, v = c.MessageChannel, y = c.Dispatch, h = 0, m = {}, I = function() {
        var e = +this;
        if (m.hasOwnProperty(e)) {
            var t = m[e];
            delete m[e],
            t()
        }
    }, g = function(e) {
        I.call(e.data)
    };
    p && f || (p = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return m[++h] = function() {
            a("function" == typeof e ? e : Function(e), t)
        }
        ,
        r(h),
        h
    }
    ,
    f = function(e) {
        delete m[e]
    }
    ,
    "process" == n(35)(l) ? r = function(e) {
        l.nextTick(s(I, e, 1))
    }
    : y && y.now ? r = function(e) {
        y.now(s(I, e, 1))
    }
    : v ? (i = (o = new v).port2,
    o.port1.onmessage = g,
    r = s(i.postMessage, i, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(e) {
        c.postMessage(e + "", "*")
    }
    ,
    c.addEventListener("message", g, !1)) : r = "onreadystatechange"in d("script") ? function(e) {
        u.appendChild(d("script")).onreadystatechange = function() {
            u.removeChild(this),
            I.call(e)
        }
    }
    : function(e) {
        setTimeout(s(I, e, 1), 0)
    }
    ),
    e.exports = {
        set: p,
        clear: f
    }
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(14)
      , i = n(91);
    e.exports = function(e, t) {
        if (r(e),
        o(t) && t.constructor === e)
            return t;
        var n = i.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getStoredItem = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s
          , n = void 0
          , i = void 0;
        return t.cookies && (n = (0,
        r.getCookie)(e)),
        t.localStorage && (i = (0,
        o.getLocalStorageItem)(e)),
        n || i
    }
    ,
    t.setStoredItem = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s;
        a.cookies && (0,
        r.setCookie)(e, t, i.expiry, n, i.path),
        a.localStorage && (0,
        o.setLocalStorageItem)(e, t)
    }
    ,
    t.deleteStoredItem = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        (0,
        r.deleteCookie)(e, t),
        (0,
        o.deleteLocalStorageItem)(e)
    }
    ;
    var r = n(55)
      , o = n(294)
      , i = {
        path: "/",
        expiry: 365
    }
      , s = {
        cookies: !0,
        localStorage: !0
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function i(e) {
        var t = {}
          , n = !0
          , r = !1
          , o = void 0;
        try {
            for (var i, s = (0,
            d.default)(x); !(n = (i = s.next()).done); n = !0) {
                var a = i.value;
                (0,
                p.deepExtend)(t, (0,
                l.bindActions)(a.actions, e))
            }
        } catch (e) {
            r = !0,
            o = e
        } finally {
            try {
                !n && s.return && s.return()
            } finally {
                if (r)
                    throw o
            }
        }
        return t
    }
    function s() {
        var e = {}
          , t = !0
          , n = !1
          , r = void 0;
        try {
            for (var o, i = (0,
            d.default)(x); !(t = (o = i.next()).done); t = !0) {
                var s = o.value;
                (0,
                p.deepExtend)(e, s.initialState)
            }
        } catch (e) {
            n = !0,
            r = e
        } finally {
            try {
                !t && i.return && i.return()
            } finally {
                if (n)
                    throw r
            }
        }
        return e
    }
    function a(e) {
        var t = e || s()
          , n = []
          , r = (0,
        c.default)(t, n);
        return {
            store: r,
            actions: i(r)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.globalActions = t.globalStore = t.actions = t.modules = void 0;
    var u = o(n(22))
      , d = o(n(7));
    t.bindActions = i,
    t.getInitialState = s,
    t.createStoreAndActions = a;
    var c = o(n(189))
      , l = n(136)
      , p = (n(190),
    n(191),
    n(2))
      , f = r(n(203))
      , v = r(n(204))
      , y = r(n(205))
      , h = r(n(206))
      , m = r(n(210))
      , I = r(n(211))
      , g = r(n(212))
      , w = r(n(222))
      , b = r(n(223))
      , P = r(n(224))
      , S = r(n(225))
      , _ = r(n(226))
      , k = r(n(115))
      , C = r(n(227))
      , U = r(n(228))
      , x = t.modules = [f, v, y, h, m, I, g, w, b, P, S, _, k, C, U]
      , A = t.actions = {}
      , T = !0
      , O = !1
      , L = void 0;
    try {
        for (var M, E = (0,
        d.default)(x); !(T = (M = E.next()).done); T = !0) {
            var D = M.value;
            A[(0,
            u.default)(D.initialState)[0]] = D.actions
        }
    } catch (e) {
        O = !0,
        L = e
    } finally {
        try {
            !T && E.return && E.return()
        } finally {
            if (O)
                throw L
        }
    }
    var j = a();
    t.globalStore = j.store,
    t.globalActions = j.actions
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.__esModule = !0;
    var o = r(n(3))
      , i = r(n(256));
    t.default = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var s = (0,
        i.default)(t, n);
        if (void 0 === s) {
            var a = (0,
            o.default)(t);
            return null === a ? void 0 : e(a, n, r)
        }
        if ("value"in s)
            return s.value;
        var u = s.get;
        return void 0 !== u ? u.call(r) : void 0
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var r = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
    }
    ;
    t.bindActions = function(e, t) {
        e = "function" == typeof e ? e(t) : e;
        var n = {};
        for (var r in e)
            !function(r) {
                n[r] = function() {
                    for (var n = [], o = 0; o < arguments.length; o++)
                        n[o] = arguments[o];
                    var i = e[r];
                    return "function" == typeof t.middleware ? t.middleware(t, i, n) : function(e, t) {
                        if (null != t) {
                            if (t.then)
                                return t.then(e.setState);
                            e.setState(t)
                        }
                    }(t, i.apply(void 0, [t.getState()].concat(n)))
                }
            }(r);
        return n
    }
    ,
    t.combineActions = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            return e.reduce(function(e, n) {
                return r({}, e, "function" == typeof n ? n.apply(void 0, t) : n)
            }, {})
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.addClass = function(e, t) {
        e.classList ? e.classList.add(t) : e.className += " " + t
    }
    ,
    t.removeClass = function(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " ")
    }
}
, function(e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(86));
    t.default = function(e, t, n) {
        return t in e ? (0,
        r.default)(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
}
, function(e, t, n) {
    e.exports = n(140)
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o() {
        (0,
        a.createServices)(s.globalStore, s.globalActions),
        a.UIService.createHostElement(),
        window.addEventListener("unload", function() {
            a.EventsService.sendPageview(!0)
        }),
        (0,
        i.default)(e.exports, {
            isConsentRequired: function() {
                return a.UserService.isConsentRequired()
            },
            Purposes: a.ConsentService.Purposes,
            on: function(e, t) {
                if (0 === (e = e.toLowerCase()).indexOf("consent."))
                    return a.ConsentService.on(e, t);
                if (0 === e.indexOf("cookies."))
                    return a.CookiesService.on(e, t);
                if (0 === e.indexOf("integrations."))
                    return a.IntegrationsService.on(e, t);
                if (0 === e.indexOf("notice."))
                    return a.NoticeService.on(e, t);
                if (0 === e.indexOf("preferences."))
                    return a.PreferencesService.on(e, t);
                if (0 === e.indexOf("ui."))
                    return a.UIService.on(e, t);
                throw new Error('Didomi SDK - Cannot subscribe to unknown event type "' + e + '"')
            },
            getUserConsentToken: function() {
                return a.ConsentService.getUserConsentTokenDeprecated()
            },
            getUserConsentStatus: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return a.ConsentService.getUserConsentStatus(e, t)
            },
            getUserConsentStatusForVendor: function(e) {
                return a.ConsentService.getUserConsentStatusForAllPurposesByVendor(e)
            },
            getObservableOnUserConsentStatusForVendor: function(e) {
                return a.ConsentService.getObservableOnUserConsentStatusForAllPurposesByVendor(e)
            },
            setUserConsentStatus: function(e, t, n) {
                return a.ConsentService.setUserConsentStatusDeprecated(e, t, n)
            },
            setUserConsentStatusForAll: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                return a.ConsentService.setUserConsentStatus(e, t, n, r)
            },
            getUserConsentStatusForAll: function() {
                return a.ConsentService.getUserConsentStatusForAll()
            },
            getUserConsentStatusForPurpose: function(e) {
                return a.ConsentService.getUserConsentStatusByPurpose(e)
            },
            openTransaction: function() {
                return new u.default(a.ConsentService.getUserConsentStatusForAll.bind(a.ConsentService),a.ConsentService.setUserConsentStatus.bind(a.ConsentService))
            },
            configure: function(e) {
                a.SiteConfigService.configure(e),
                p && a.WebsiteService.determineConsentNoticeStatus()
            },
            notice: {
                configure: function(e) {
                    s.globalActions.setConsentNoticeConfig(e)
                },
                show: function() {
                    a.NoticeService.show()
                },
                hide: function() {
                    a.NoticeService.hide()
                },
                isVisible: function() {
                    return a.NoticeService.isVisible()
                }
            },
            policy: {
                close: function() {
                    s.globalActions.closePolicyDialog()
                },
                open: function() {
                    s.globalActions.openPolicyDialog()
                }
            },
            preferences: {
                hide: function() {
                    a.PreferencesService.hide()
                },
                show: function(e) {
                    a.PreferencesService.show(e)
                },
                isVisible: function() {
                    return a.PreferencesService.isVisible()
                }
            },
            setUserAgreeToAll: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "external";
                a.WebsiteService.setUserAgreeToAll(e)
            },
            setUserDisagreeToAll: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "external";
                a.WebsiteService.setUserDisagreeToAll(e)
            },
            isUserConsentStatusPartial: function() {
                return a.WebsiteService.isUserConsentStatusPartial()
            },
            getConfig: function() {
                return a.SiteConfigService.getConfig()
            },
            setConfigParameter: function(e, t) {
                return a.SiteConfigService.set(e, t)
            },
            theme: {
                set: function(e, t) {
                    var n = e || t;
                    s.globalActions.setTheme({
                        color: n
                    })
                }
            },
            reset: function() {
                a.StorageService.reset()
            },
            getRequiredVendorIds: function() {
                return a.WebsiteService.getRequiredVendorIds()
            },
            getRequiredVendors: function(e) {
                return a.WebsiteService.getRequiredVendors(e)
            },
            getVendorById: function(e) {
                return a.DatabasesService.getVendor(e)
            },
            getVendors: function() {
                return a.DatabasesService.getVendors()
            },
            getRequiredPurposeIds: function() {
                return a.WebsiteService.getRequiredPurposeIds()
            },
            getRequiredPurposes: function(e) {
                return a.WebsiteService.getRequiredPurposes(e)
            },
            getPurposeById: function(e) {
                return a.DatabasesService.getPurpose(e)
            },
            getPurposes: function() {
                return a.DatabasesService.getPurposes()
            },
            getLanguage: function() {
                return a.I18nService.getLocale()
            },
            getTranslationAsHTML: function() {
                return console.error("Didomi - The UI module needs to be loaded before using the getTranslationAsHTML function"),
                null
            },
            shouldConsentBeCollected: function() {
                return a.WebsiteService.shouldConsentBeCollected()
            },
            getExperiment: function() {
                return a.ExperimentsService.getCurrentExperiment()
            },
            version: "dcf9dd060c784608c6624ce648f1de9b0990320b-2019-09-17T22:20:44.551Z"
        }),
        (0,
        l.registerEventListeners)(e.exports.on),
        a.UserService.initCountry(function() {
            (0,
            c.initCustomSDK)(a.SDKConfigService.get("customSDKPath"), a.SiteConfigService.get("website.customSDK") || a.SiteConfigService.get("app.customSDK"), a.SiteConfigService.get("website.apiKey") || a.SiteConfigService.get("app.apiKey"), e.exports, function() {
                e.exports.configure(a.SiteConfigService.getConfig()),
                a.StorageService.initStorages(function() {
                    var t = a.StorageService.initStoreFromStorage()
                      , n = t.didomiTokenCreatedFromIABToken
                      , r = t.token;
                    (0,
                    d.callInitFunctions)(e.exports) && (r = a.StorageService.initStoreFromStorage().token,
                    a.MetricsService.sendMonitoringDidomiOnLoad()),
                    a.CookiesService.enable();
                    var o = a.ExperimentsService.run(r);
                    o && e.exports.configure(o),
                    a.CMPService.setupPublicAPI(),
                    a.WebsiteService.determineConsentNoticeStatus(),
                    a.IntegrationsService.run(),
                    p = !0,
                    ("popup" !== a.NoticeService.getPosition() || "popup" === a.NoticeService.getPosition() && !a.WebsiteService.shouldConsentBeCollected()) && a.EventsService.sendPageview(),
                    window.Didomi = e.exports,
                    a.TagManagersService.run(),
                    a.UIService.isLoading() ? a.UIService.on("ui.ready", function() {
                        return (0,
                        d.callReadyFunctions)(e.exports)
                    }) : (0,
                    d.callReadyFunctions)(e.exports),
                    n && a.ConsentService.sendEvents(r, !0)
                })
            })
        })
    }
    var i = r(n(8));
    n(146),
    n(156),
    n(176);
    var s = n(134)
      , a = n(229)
      , u = r(n(56))
      , d = n(305)
      , c = n(306)
      , l = n(307);
    e.exports = {};
    var p = !1;
    if (document.body)
        o();
    else
        var f = setInterval(function() {
            document.body && (clearInterval(f),
            o())
        }, 1e3)
}
, function(e, t, n) {
    n(142),
    e.exports = n(6).Object.assign
}
, function(e, t, n) {
    var r = n(10);
    r(r.S + r.F, "Object", {
        assign: n(143)
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(27)
      , o = n(65)
      , i = n(37)
      , s = n(28)
      , a = n(59)
      , u = Object.assign;
    e.exports = !u || n(23)(function() {
        var e = {}
          , t = {}
          , n = Symbol()
          , r = "abcdefghijklmnopqrst";
        return e[n] = 7,
        r.split("").forEach(function(e) {
            t[e] = e
        }),
        7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = s(e), u = arguments.length, d = 1, c = o.f, l = i.f; u > d; )
            for (var p, f = a(arguments[d++]), v = c ? r(f).concat(c(f)) : r(f), y = v.length, h = 0; y > h; )
                l.call(f, p = v[h++]) && (n[p] = f[p]);
        return n
    }
    : u
}
, function(e, t, n) {
    var r = n(21)
      , o = n(45)
      , i = n(145);
    e.exports = function(e) {
        return function(t, n, s) {
            var a, u = r(t), d = o(u.length), c = i(s, d);
            if (e && n != n) {
                for (; d > c; )
                    if ((a = u[c++]) != a)
                        return !0
            } else
                for (; d > c; c++)
                    if ((e || c in u) && u[c] === n)
                        return e || c || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    var r = n(61)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}
, function(e, t, n) {
    n(147),
    e.exports = n(30).Array.find
}
, function(e, t, n) {
    "use strict";
    var r = n(66)
      , o = n(151)(5)
      , i = !0;
    "find"in [] && Array(1).find(function() {
        i = !1
    }),
    r(r.P + r.F * i, "Array", {
        find: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    n(155)("find")
}
, function(e, t, n) {
    e.exports = !n(50) && !n(96)(function() {
        return 7 != Object.defineProperty(n(97)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t, n) {
    var r = n(49);
    e.exports = function(e, t) {
        if (!r(e))
            return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
            return o;
        if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, n) {
    var r = n(69)
      , o = n(99)
      , i = n(71)
      , s = n(73)
      , a = n(152);
    e.exports = function(e, t) {
        var n = 1 == e
          , u = 2 == e
          , d = 3 == e
          , c = 4 == e
          , l = 6 == e
          , p = 5 == e || l
          , f = t || a;
        return function(t, a, v) {
            for (var y, h, m = i(t), I = o(m), g = r(a, v, 3), w = s(I.length), b = 0, P = n ? f(t, w) : u ? f(t, 0) : void 0; w > b; b++)
                if ((p || b in I) && (h = g(y = I[b], b, m),
                e))
                    if (n)
                        P[b] = h;
                    else if (h)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return y;
                        case 6:
                            return b;
                        case 2:
                            P.push(y)
                        }
                    else if (c)
                        return !1;
            return l ? -1 : d || c ? c : P
        }
    }
}
, function(e, t, n) {
    var r = n(153);
    e.exports = function(e, t) {
        return new (r(e))(t)
    }
}
, function(e, t, n) {
    var r = n(49)
      , o = n(154)
      , i = n(19)("species");
    e.exports = function(e) {
        var t;
        return o(e) && ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype) || (t = void 0),
        r(t) && null === (t = t[i]) && (t = void 0)),
        void 0 === t ? Array : t
    }
}
, function(e, t, n) {
    var r = n(70);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}
, function(e, t, n) {
    var r = n(19)("unscopables")
      , o = Array.prototype;
    void 0 == o[r] && n(38)(o, r, {}),
    e.exports = function(e) {
        o[r][e] = !0
    }
}
, function(e, t, n) {
    n(157),
    n(169),
    e.exports = n(30).Array.from
}
, function(e, t, n) {
    "use strict";
    var r = n(158)(!0);
    n(159)(String, "String", function(e) {
        this._t = String(e),
        this._i = 0
    }, function() {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n),
        this._i += e.length,
        {
            value: e,
            done: !1
        })
    })
}
, function(e, t, n) {
    var r = n(74)
      , o = n(72);
    e.exports = function(e) {
        return function(t, n) {
            var i, s, a = String(o(t)), u = r(n), d = a.length;
            return u < 0 || u >= d ? e ? "" : void 0 : (i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === d || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : i : e ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(101)
      , o = n(66)
      , i = n(98)
      , s = n(38)
      , a = n(75)
      , u = n(160)
      , d = n(104)
      , c = n(168)
      , l = n(19)("iterator")
      , p = !([].keys && "next"in [].keys())
      , f = function() {
        return this
    };
    e.exports = function(e, t, n, v, y, h, m) {
        u(n, t, v);
        var I, g, w, b = function(e) {
            if (!p && e in k)
                return k[e];
            switch (e) {
            case "keys":
            case "values":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this,e)
            }
        }, P = t + " Iterator", S = "values" == y, _ = !1, k = e.prototype, C = k[l] || k["@@iterator"] || y && k[y], U = C || b(y), x = y ? S ? b("entries") : U : void 0, A = "Array" == t && k.entries || C;
        if (A && (w = c(A.call(new e))) !== Object.prototype && w.next && (d(w, P, !0),
        r || "function" == typeof w[l] || s(w, l, f)),
        S && C && "values" !== C.name && (_ = !0,
        U = function() {
            return C.call(this)
        }
        ),
        r && !m || !p && !_ && k[l] || s(k, l, U),
        a[t] = U,
        a[P] = f,
        y)
            if (I = {
                values: S ? U : b("values"),
                keys: h ? U : b("keys"),
                entries: x
            },
            m)
                for (g in I)
                    g in k || i(k, g, I[g]);
            else
                o(o.P + o.F * (p || _), t, I);
        return I
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(161)
      , o = n(67)
      , i = n(104)
      , s = {};
    n(38)(s, n(19)("iterator"), function() {
        return this
    }),
    e.exports = function(e, t, n) {
        e.prototype = r(s, {
            next: o(1, n)
        }),
        i(e, t + " Iterator")
    }
}
, function(e, t, n) {
    var r = n(48)
      , o = n(162)
      , i = n(103)
      , s = n(76)("IE_PROTO")
      , a = function() {}
      , u = function() {
        var e, t = n(97)("iframe"), r = i.length;
        for (t.style.display = "none",
        n(167).appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object<\/script>"),
        e.close(),
        u = e.F; r--; )
            delete u.prototype[i[r]];
        return u()
    };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (a.prototype = r(e),
        n = new a,
        a.prototype = null,
        n[s] = e) : n = u(),
        void 0 === t ? n : o(n, t)
    }
}
, function(e, t, n) {
    var r = n(47)
      , o = n(48)
      , i = n(163);
    e.exports = n(50) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, s = i(t), a = s.length, u = 0; a > u; )
            r.f(e, n = s[u++], t[n]);
        return e
    }
}
, function(e, t, n) {
    var r = n(164)
      , o = n(103);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}
, function(e, t, n) {
    var r = n(51)
      , o = n(102)
      , i = n(165)(!1)
      , s = n(76)("IE_PROTO");
    e.exports = function(e, t) {
        var n, a = o(e), u = 0, d = [];
        for (n in a)
            n != s && r(a, n) && d.push(n);
        for (; t.length > u; )
            r(a, n = t[u++]) && (~i(d, n) || d.push(n));
        return d
    }
}
, function(e, t, n) {
    var r = n(102)
      , o = n(73)
      , i = n(166);
    e.exports = function(e) {
        return function(t, n, s) {
            var a, u = r(t), d = o(u.length), c = i(s, d);
            if (e && n != n) {
                for (; d > c; )
                    if ((a = u[c++]) != a)
                        return !0
            } else
                for (; d > c; c++)
                    if ((e || c in u) && u[c] === n)
                        return e || c || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    var r = n(74)
      , o = Math.max
      , i = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
    }
}
, function(e, t, n) {
    var r = n(29).document;
    e.exports = r && r.documentElement
}
, function(e, t, n) {
    var r = n(51)
      , o = n(71)
      , i = n(76)("IE_PROTO")
      , s = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e),
        r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(69)
      , o = n(66)
      , i = n(71)
      , s = n(170)
      , a = n(171)
      , u = n(73)
      , d = n(172)
      , c = n(173);
    o(o.S + o.F * !n(175)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, o, l, p = i(e), f = "function" == typeof this ? this : Array, v = arguments.length, y = v > 1 ? arguments[1] : void 0, h = void 0 !== y, m = 0, I = c(p);
            if (h && (y = r(y, v > 2 ? arguments[2] : void 0, 2)),
            void 0 == I || f == Array && a(I))
                for (n = new f(t = u(p.length)); t > m; m++)
                    d(n, m, h ? y(p[m], m) : p[m]);
            else
                for (l = I.call(p),
                n = new f; !(o = l.next()).done; m++)
                    d(n, m, h ? s(l, y, [o.value, m], !0) : o.value);
            return n.length = m,
            n
        }
    })
}
, function(e, t, n) {
    var r = n(48);
    e.exports = function(e, t, n, o) {
        try {
            return o ? t(r(n)[0], n[1]) : t(n)
        } catch (t) {
            var i = e.return;
            throw void 0 !== i && r(i.call(e)),
            t
        }
    }
}
, function(e, t, n) {
    var r = n(75)
      , o = n(19)("iterator")
      , i = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || i[o] === e)
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(47)
      , o = n(67);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}
, function(e, t, n) {
    var r = n(174)
      , o = n(19)("iterator")
      , i = n(75);
    e.exports = n(30).getIteratorMethod = function(e) {
        if (void 0 != e)
            return e[o] || e["@@iterator"] || i[r(e)]
    }
}
, function(e, t, n) {
    var r = n(70)
      , o = n(19)("toStringTag")
      , i = "Arguments" == r(function() {
        return arguments
    }());
    e.exports = function(e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}
, function(e, t, n) {
    var r = n(19)("iterator")
      , o = !1;
    try {
        var i = [7][r]();
        i.return = function() {
            o = !0
        }
        ,
        Array.from(i, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o)
            return !1;
        var n = !1;
        try {
            var i = [7]
              , s = i[r]();
            s.next = function() {
                return {
                    done: n = !0
                }
            }
            ,
            i[r] = function() {
                return s
            }
            ,
            e(i)
        } catch (e) {}
        return n
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    function(e) {
        var t = n(177)
          , r = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== e)
                return e;
            throw new Error("unable to locate global object")
        }();
        r.Promise || (r.Promise = t.a)
    }
    .call(t, n(39))
}
, function(e, t, n) {
    "use strict";
    (function(e) {
        function n() {}
        function r(e) {
            if (!(this instanceof r))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            u(e, this)
        }
        function o(e, t) {
            for (; 3 === e._state; )
                e = e._value;
            0 !== e._state ? (e._handled = !0,
            r._immediateFn(function() {
                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r;
                    try {
                        r = n(e._value)
                    } catch (e) {
                        return void s(t.promise, e)
                    }
                    i(t.promise, r)
                } else
                    (1 === e._state ? i : s)(t.promise, e._value)
            })) : e._deferreds.push(t)
        }
        function i(e, t) {
            try {
                if (t === e)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var n = t.then;
                    if (t instanceof r)
                        return e._state = 3,
                        e._value = t,
                        void a(e);
                    if ("function" == typeof n)
                        return void u(function(e, t) {
                            return function() {
                                e.apply(t, arguments)
                            }
                        }(n, t), e)
                }
                e._state = 1,
                e._value = t,
                a(e)
            } catch (t) {
                s(e, t)
            }
        }
        function s(e, t) {
            e._state = 2,
            e._value = t,
            a(e)
        }
        function a(e) {
            2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
                e._handled || r._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++)
                o(e, e._deferreds[t]);
            e._deferreds = null
        }
        function u(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0,
                    i(t, e))
                }, function(e) {
                    n || (n = !0,
                    s(t, e))
                })
            } catch (e) {
                if (n)
                    return;
                n = !0,
                s(t, e)
            }
        }
        var d = setTimeout;
        r.prototype.catch = function(e) {
            return this.then(null, e)
        }
        ,
        r.prototype.then = function(e, t) {
            var r = new this.constructor(n);
            return o(this, new function(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null,
                this.onRejected = "function" == typeof t ? t : null,
                this.promise = n
            }
            (e,t,r)),
            r
        }
        ,
        r.prototype.finally = function(e) {
            var t = this.constructor;
            return this.then(function(n) {
                return t.resolve(e()).then(function() {
                    return n
                })
            }, function(n) {
                return t.resolve(e()).then(function() {
                    return t.reject(n)
                })
            })
        }
        ,
        r.all = function(e) {
            return new r(function(t, n) {
                function r(e, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var a = s.then;
                            if ("function" == typeof a)
                                return void a.call(s, function(t) {
                                    r(e, t)
                                }, n)
                        }
                        o[e] = s,
                        0 == --i && t(o)
                    } catch (e) {
                        n(e)
                    }
                }
                if (!e || void 0 === e.length)
                    throw new TypeError("Promise.all accepts an array");
                var o = Array.prototype.slice.call(e);
                if (0 === o.length)
                    return t([]);
                for (var i = o.length, s = 0; s < o.length; s++)
                    r(s, o[s])
            }
            )
        }
        ,
        r.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === r ? e : new r(function(t) {
                t(e)
            }
            )
        }
        ,
        r.reject = function(e) {
            return new r(function(t, n) {
                n(e)
            }
            )
        }
        ,
        r.race = function(e) {
            return new r(function(t, n) {
                for (var r = 0, o = e.length; r < o; r++)
                    e[r].then(t, n)
            }
            )
        }
        ,
        r._immediateFn = "function" == typeof e && function(t) {
            e(t)
        }
        || function(e) {
            d(e, 0)
        }
        ,
        r._unhandledRejectionFn = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }
        ,
        t.a = r
    }
    ).call(t, n(105).setImmediate)
}
, function(e, t, n) {
    (function(e, t) {
        !function(e, n) {
            "use strict";
            function r(e) {
                delete a[e]
            }
            function o(e) {
                if (u)
                    setTimeout(o, 0, e);
                else {
                    var t = a[e];
                    if (t) {
                        u = !0;
                        try {
                            !function(e) {
                                var t = e.callback
                                  , r = e.args;
                                switch (r.length) {
                                case 0:
                                    t();
                                    break;
                                case 1:
                                    t(r[0]);
                                    break;
                                case 2:
                                    t(r[0], r[1]);
                                    break;
                                case 3:
                                    t(r[0], r[1], r[2]);
                                    break;
                                default:
                                    t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            r(e),
                            u = !1
                        }
                    }
                }
            }
            if (!e.setImmediate) {
                var i, s = 1, a = {}, u = !1, d = e.document, c = Object.getPrototypeOf && Object.getPrototypeOf(e);
                c = c && c.setTimeout ? c : e,
                "[object process]" === {}.toString.call(e.process) ? i = function(e) {
                    t.nextTick(function() {
                        o(e)
                    })
                }
                : function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0
                          , n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }
                        ,
                        e.postMessage("", "*"),
                        e.onmessage = n,
                        t
                    }
                }() ? function() {
                    var t = "setImmediate$" + Math.random() + "$"
                      , n = function(n) {
                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
                    };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                    i = function(n) {
                        e.postMessage(t + n, "*")
                    }
                }() : e.MessageChannel ? function() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        o(e.data)
                    }
                    ,
                    i = function(t) {
                        e.port2.postMessage(t)
                    }
                }() : d && "onreadystatechange"in d.createElement("script") ? function() {
                    var e = d.documentElement;
                    i = function(t) {
                        var n = d.createElement("script");
                        n.onreadystatechange = function() {
                            o(t),
                            n.onreadystatechange = null,
                            e.removeChild(n),
                            n = null
                        }
                        ,
                        e.appendChild(n)
                    }
                }() : i = function(e) {
                    setTimeout(o, 0, e)
                }
                ,
                c.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                        t[n] = arguments[n + 1];
                    var r = {
                        callback: e,
                        args: t
                    };
                    return a[s] = r,
                    i(s),
                    s++
                }
                ,
                c.clearImmediate = r
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }
    ).call(t, n(39), n(179))
}
, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function r() {
        throw new Error("clearTimeout has not been defined")
    }
    function o(e) {
        if (d === setTimeout)
            return setTimeout(e, 0);
        if ((d === n || !d) && setTimeout)
            return d = setTimeout,
            setTimeout(e, 0);
        try {
            return d(e, 0)
        } catch (t) {
            try {
                return d.call(null, e, 0)
            } catch (t) {
                return d.call(this, e, 0)
            }
        }
    }
    function i() {
        v && p && (v = !1,
        p.length ? f = p.concat(f) : y = -1,
        f.length && s())
    }
    function s() {
        if (!v) {
            var e = o(i);
            v = !0;
            for (var t = f.length; t; ) {
                for (p = f,
                f = []; ++y < t; )
                    p && p[y].run();
                y = -1,
                t = f.length
            }
            p = null,
            v = !1,
            function(e) {
                if (c === clearTimeout)
                    return clearTimeout(e);
                if ((c === r || !c) && clearTimeout)
                    return c = clearTimeout,
                    clearTimeout(e);
                try {
                    c(e)
                } catch (t) {
                    try {
                        return c.call(null, e)
                    } catch (t) {
                        return c.call(this, e)
                    }
                }
            }(e)
        }
    }
    function a(e, t) {
        this.fun = e,
        this.array = t
    }
    function u() {}
    var d, c, l = e.exports = {};
    !function() {
        try {
            d = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            d = n
        }
        try {
            c = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (e) {
            c = r
        }
    }();
    var p, f = [], v = !1, y = -1;
    l.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        f.push(new a(e,t)),
        1 !== f.length || v || o(s)
    }
    ,
    a.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    l.title = "browser",
    l.browser = !0,
    l.env = {},
    l.argv = [],
    l.version = "",
    l.versions = {},
    l.on = u,
    l.addListener = u,
    l.once = u,
    l.off = u,
    l.removeListener = u,
    l.removeAllListeners = u,
    l.emit = u,
    l.prependListener = u,
    l.prependOnceListener = u,
    l.listeners = function(e) {
        return []
    }
    ,
    l.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    l.cwd = function() {
        return "/"
    }
    ,
    l.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    l.umask = function() {
        return 0
    }
}
, function(e, t, n) {
    n(181),
    e.exports = n(6).Object.keys
}
, function(e, t, n) {
    var r = n(28)
      , o = n(27);
    n(77)("keys", function() {
        return function(e) {
            return o(r(e))
        }
    })
}
, function(e, t, n) {
    n(52),
    n(42),
    e.exports = n(188)
}
, function(e, t, n) {
    "use strict";
    var r = n(184)
      , o = n(106)
      , i = n(40)
      , s = n(21);
    e.exports = n(78)(Array, "Array", function(e, t) {
        this._t = s(e),
        this._i = 0,
        this._k = t
    }, function() {
        var e = this._t
          , t = this._k
          , n = this._i++;
        return !e || n >= e.length ? (this._t = void 0,
        o(1)) : o(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"),
    i.Arguments = i.Array,
    r("keys"),
    r("values"),
    r("entries")
}
, function(e, t) {
    e.exports = function() {}
}
, function(e, t, n) {
    "use strict";
    var r = n(53)
      , o = n(34)
      , i = n(41)
      , s = {};
    n(20)(s, n(12)("iterator"), function() {
        return this
    }),
    e.exports = function(e, t, n) {
        e.prototype = r(s, {
            next: o(1, n)
        }),
        i(e, t + " Iterator")
    }
}
, function(e, t, n) {
    var r = n(13)
      , o = n(15)
      , i = n(27);
    e.exports = n(16) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var n, s = i(t), a = s.length, u = 0; a > u; )
            r.f(e, n = s[u++], t[n]);
        return e
    }
}
, function(e, t, n) {
    var r = n(61)
      , o = n(60);
    e.exports = function(e) {
        return function(t, n) {
            var i, s, a = String(o(t)), u = r(n), d = a.length;
            return u < 0 || u >= d ? e ? "" : void 0 : (i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === d || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : i : e ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536
        }
    }
}
, function(e, t, n) {
    var r = n(15)
      , o = n(79);
    e.exports = n(6).getIterator = function(e) {
        var t = o(e);
        if ("function" != typeof t)
            throw TypeError(e + " is not iterable!");
        return r(t.call(e))
    }
}
, function(e, t, n) {
    "use strict";
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var r = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n])
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e
    }
    ;
    e.exports = function(e, t) {
        void 0 === e && (e = {}),
        void 0 === t && (t = null);
        var n = [];
        return {
            middleware: t,
            setState: function(t) {
                e = r({}, e, "function" == typeof t ? t(e) : t),
                n.forEach(function(t) {
                    return t(e)
                })
            },
            subscribe: function(e) {
                return n.push(e),
                function() {
                    n.splice(n.indexOf(e), 1)
                }
            },
            getState: function() {
                return e
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (null != t) {
            if (t.then)
                return t.then(e.setState);
            e.setState(t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e, t) {
        return function(n) {
            return r(e, n.apply(void 0, [e.getState()].concat(t)))
        }
    };
    t.applyMiddleware = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return e.reverse(),
        function(t, n, i) {
            return e.length < 1 ? r(t, n.apply(void 0, [t.getState()].concat(i))) : e.map(function(e) {
                return e(t)
            }).reduce(function(e, t) {
                return t(e, i)
            }, o(t, i))(n)
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = JSON.parse(t.state)
          , r = Object.keys(n.actionsById).filter(function(e) {
            return parseInt(e, 10) <= t.payload.id
        })
          , o = 0;
        setTimeout(function t() {
            !function(t) {
                if ("initialState" === t.type)
                    e.setState(n.computedStates[0].state);
                else {
                    var r = s.find(function(e) {
                        return t.type === e.key
                    });
                    r && r.fn()
                }
            }(n.actionsById[r[o]].action),
            ++o >= r.length || setTimeout(t, a)
        }, 0)
    }
    function o(e, t) {
        if (!t.initialized) {
            var n = function(e) {
                "DISPATCH" === e.type && ("JUMP_TO_ACTION" === e.payload.type || "JUMP_TO_STATE" === e.payload.type ? this.setState(JSON.parse(e.state)) : "TOGGLE_ACTION" === e.payload.type && r(this, e))
            }
            .bind(e);
            i.instance.subscribe(n),
            t.initialized = !0
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = {
        instance: null
    }
      , s = []
      , a = 10
      , u = function(e) {
        return function(t, n) {
            return function(r) {
                var a = t(r);
                o(e, u),
                function(e, t) {
                    var n = s.find(function(t) {
                        return e.name === t.key
                    });
                    n || (n = {
                        key: e.name,
                        fn: t
                    },
                    s.push(n))
                }(r, function() {
                    return t(r)
                });
                var d = {
                    type: r.name,
                    args: n
                };
                return a && a.then ? a.then(function() {
                    return i.instance.send(d, e.getState())
                }) : (i.instance.send(d, e.getState()),
                a)
            }
        }
    };
    void 0 !== window && window.__REDUX_DEVTOOLS_EXTENSION__ && (t.connect = function(e) {
        return i.instance = window.__REDUX_DEVTOOLS_EXTENSION__.connect(),
        i.instance.send("initialState", e),
        u
    }
    )
}
, function(e, t, n) {
    var r = n(6)
      , o = r.JSON || (r.JSON = {
        stringify: JSON.stringify
    });
    e.exports = function(e) {
        return o.stringify.apply(o, arguments)
    }
}
, function(e, t, n) {
    n(42),
    n(52),
    e.exports = n(81).f("iterator")
}
, function(e, t, n) {
    n(195),
    n(85),
    n(198),
    n(199),
    e.exports = n(6).Symbol
}
, function(e, t, n) {
    "use strict";
    var r = n(11)
      , o = n(24)
      , i = n(16)
      , s = n(10)
      , a = n(107)
      , u = n(82).KEY
      , d = n(23)
      , c = n(63)
      , l = n(41)
      , p = n(46)
      , f = n(12)
      , v = n(81)
      , y = n(83)
      , h = n(196)
      , m = n(112)
      , I = n(15)
      , g = n(14)
      , w = n(21)
      , b = n(58)
      , P = n(34)
      , S = n(53)
      , _ = n(197)
      , k = n(84)
      , C = n(13)
      , U = n(27)
      , x = k.f
      , A = C.f
      , T = _.f
      , O = r.Symbol
      , L = r.JSON
      , M = L && L.stringify
      , E = f("_hidden")
      , D = f("toPrimitive")
      , j = {}.propertyIsEnumerable
      , V = c("symbol-registry")
      , B = c("symbols")
      , R = c("op-symbols")
      , G = Object.prototype
      , z = "function" == typeof O
      , N = r.QObject
      , F = !N || !N.prototype || !N.prototype.findChild
      , H = i && d(function() {
        return 7 != S(A({}, "a", {
            get: function() {
                return A(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }) ? function(e, t, n) {
        var r = x(G, t);
        r && delete G[t],
        A(e, t, n),
        r && e !== G && A(G, t, r)
    }
    : A
      , q = function(e) {
        var t = B[e] = S(O.prototype);
        return t._k = e,
        t
    }
      , K = z && "symbol" == typeof O.iterator ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        return e instanceof O
    }
      , W = function(e, t, n) {
        return e === G && W(R, t, n),
        I(e),
        t = b(t, !0),
        I(n),
        o(B, t) ? (n.enumerable ? (o(e, E) && e[E][t] && (e[E][t] = !1),
        n = S(n, {
            enumerable: P(0, !1)
        })) : (o(e, E) || A(e, E, P(1, {})),
        e[E][t] = !0),
        H(e, t, n)) : A(e, t, n)
    }
      , Z = function(e, t) {
        I(e);
        for (var n, r = h(t = w(t)), o = 0, i = r.length; i > o; )
            W(e, n = r[o++], t[n]);
        return e
    }
      , J = function(e) {
        var t = j.call(this, e = b(e, !0));
        return !(this === G && o(B, e) && !o(R, e)) && (!(t || !o(this, e) || !o(B, e) || o(this, E) && this[E][e]) || t)
    }
      , Y = function(e, t) {
        if (e = w(e),
        t = b(t, !0),
        e !== G || !o(B, t) || o(R, t)) {
            var n = x(e, t);
            return !n || !o(B, t) || o(e, E) && e[E][t] || (n.enumerable = !0),
            n
        }
    }
      , X = function(e) {
        for (var t, n = T(w(e)), r = [], i = 0; n.length > i; )
            o(B, t = n[i++]) || t == E || t == u || r.push(t);
        return r
    }
      , $ = function(e) {
        for (var t, n = e === G, r = T(n ? R : w(e)), i = [], s = 0; r.length > s; )
            !o(B, t = r[s++]) || n && !o(G, t) || i.push(B[t]);
        return i
    };
    z || (a((O = function() {
        if (this instanceof O)
            throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0)
          , t = function(n) {
            this === G && t.call(R, n),
            o(this, E) && o(this[E], e) && (this[E][e] = !1),
            H(this, e, P(1, n))
        };
        return i && F && H(G, e, {
            configurable: !0,
            set: t
        }),
        q(e)
    }
    ).prototype, "toString", function() {
        return this._k
    }),
    k.f = Y,
    C.f = W,
    n(113).f = _.f = X,
    n(37).f = J,
    n(65).f = $,
    i && !n(36) && a(G, "propertyIsEnumerable", J, !0),
    v.f = function(e) {
        return q(f(e))
    }
    ),
    s(s.G + s.W + s.F * !z, {
        Symbol: O
    });
    for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ee = 0; Q.length > ee; )
        f(Q[ee++]);
    for (var te = U(f.store), ne = 0; te.length > ne; )
        y(te[ne++]);
    s(s.S + s.F * !z, "Symbol", {
        for: function(e) {
            return o(V, e += "") ? V[e] : V[e] = O(e)
        },
        keyFor: function(e) {
            if (!K(e))
                throw TypeError(e + " is not a symbol!");
            for (var t in V)
                if (V[t] === e)
                    return t
        },
        useSetter: function() {
            F = !0
        },
        useSimple: function() {
            F = !1
        }
    }),
    s(s.S + s.F * !z, "Object", {
        create: function(e, t) {
            return void 0 === t ? S(e) : Z(S(e), t)
        },
        defineProperty: W,
        defineProperties: Z,
        getOwnPropertyDescriptor: Y,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: $
    }),
    L && s(s.S + s.F * (!z || d(function() {
        var e = O();
        return "[null]" != M([e]) || "{}" != M({
            a: e
        }) || "{}" != M(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, n, r = [e], o = 1; arguments.length > o; )
                r.push(arguments[o++]);
            if (n = t = r[1],
            (g(t) || void 0 !== e) && !K(e))
                return m(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)),
                    !K(t))
                        return t
                }
                ),
                r[1] = t,
                M.apply(L, r)
        }
    }),
    O.prototype[D] || n(20)(O.prototype, D, O.prototype.valueOf),
    l(O, "Symbol"),
    l(Math, "Math", !0),
    l(r.JSON, "JSON", !0)
}
, function(e, t, n) {
    var r = n(27)
      , o = n(65)
      , i = n(37);
    e.exports = function(e) {
        var t = r(e)
          , n = o.f;
        if (n)
            for (var s, a = n(e), u = i.f, d = 0; a.length > d; )
                u.call(e, s = a[d++]) && t.push(s);
        return t
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(113).f
      , i = {}.toString
      , s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return s && "[object Window]" == i.call(e) ? function(e) {
            try {
                return o(e)
            } catch (e) {
                return s.slice()
            }
        }(e) : o(r(e))
    }
}
, function(e, t, n) {
    n(83)("asyncIterator")
}
, function(e, t, n) {
    n(83)("observable")
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e, t, n) {
        t.split && (t = t.split("."));
        for (var r, o = 0, i = t.length, s = e; o < i; ++o)
            r = s[t[o]],
            s = s[t[o]] = o === i - 1 ? n : null == r ? {} : r
    }
}
, function(e, t, n) {
    e.exports = function(e, t, n, r) {
        for (r = 0,
        t = t.split ? t.split(".") : t; e && r < t.length; )
            e = e[t[r++]];
        return void 0 === e || r < t.length ? n : e
    }
}
, function(e, t, n) {
    "use strict";
    var r = Array.isArray
      , o = Object.keys
      , i = Object.prototype.hasOwnProperty;
    e.exports = function e(t, n) {
        if (t === n)
            return !0;
        var s, a, u, d = r(t), c = r(n);
        if (d && c) {
            if ((a = t.length) != n.length)
                return !1;
            for (s = 0; s < a; s++)
                if (!e(t[s], n[s]))
                    return !1;
            return !0
        }
        if (d != c)
            return !1;
        var l = t instanceof Date
          , p = n instanceof Date;
        if (l != p)
            return !1;
        if (l && p)
            return t.getTime() == n.getTime();
        var f = t instanceof RegExp
          , v = n instanceof RegExp;
        if (f != v)
            return !1;
        if (f && v)
            return t.toString() == n.toString();
        if (t instanceof Object && n instanceof Object) {
            var y = o(t);
            if ((a = y.length) !== o(n).length)
                return !1;
            for (s = 0; s < a; s++)
                if (!i.call(n, y[s]))
                    return !1;
            for (s = 0; s < a; s++)
                if (!e(t[u = y[s]], n[u]))
                    return !1;
            return !0
        }
        return !1
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(8))
      , o = n(2);
    t.initialState = {
        user: {
            country: null,
            isBot: !1,
            bots: {
                consentRequired: !0,
                types: ["crawlers", "performance"],
                extraUserAgents: []
            }
        }
    },
    t.actions = function() {
        return {
            setUserConfig: function(e, t) {
                return (0,
                r.default)({}, e, {
                    user: (0,
                    o.deepExtend)(e.user || {}, t)
                })
            },
            setUserCountry: function(e, t) {
                return (0,
                r.default)({}, e, {
                    user: (0,
                    r.default)({}, e.user, {
                        country: t
                    })
                })
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(8))
      , o = n(2);
    t.initialState = {
        consentNotice: {
            enable: !0,
            show: !1,
            daysBeforeShowingAgain: 0,
            closeOnClick: !1,
            closeOnClickNavigationDelay: 0,
            closeOnClickBackdrop: !1,
            type: "info",
            position: "panel-bottom-right",
            textAlignment: "left",
            logoAlignment: "center",
            learnMore: !0,
            learnMoreURL: null,
            learnMorePosition: null,
            palette: {
                notice: {
                    background: "#ffffff",
                    text: null
                },
                button: {
                    background: null,
                    border: "rgba(34, 34, 34, 0.2)",
                    text: null
                },
                hightlightButton: {
                    background: null,
                    border: "rgba(34, 34, 34, 0.2)",
                    text: null
                }
            }
        }
    },
    t.actions = function() {
        return {
            showConsentNotice: function(e) {
                return {
                    consentNotice: (0,
                    r.default)({}, e.consentNotice, {
                        show: !0
                    })
                }
            },
            hideConsentNotice: function(e) {
                return {
                    consentNotice: (0,
                    r.default)({}, e.consentNotice, {
                        show: !1
                    })
                }
            },
            enableConsentNotice: function(e) {
                return {
                    consentNotice: (0,
                    r.default)({}, e.consentNotice, {
                        enable: !0
                    })
                }
            },
            disableConsentNotice: function(e) {
                return {
                    consentNotice: (0,
                    r.default)({}, e.consentNotice, {
                        enable: !1
                    })
                }
            },
            setConsentNoticeConfig: function(e, t) {
                return {
                    consentNotice: (0,
                    o.deepExtendClone)(e.consentNotice, t)
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = n(2)
      , o = n(137);
    t.initialState = {
        policy: {
            open: !1,
            activeTab: "cookies"
        }
    },
    t.actions = function() {
        return {
            closePolicyDialog: function(e) {
                return (0,
                o.removeClass)(document.body, "didomi-policy-dialog-open"),
                {
                    policy: (0,
                    r.deepExtendClone)(e.policy, {
                        open: !1
                    })
                }
            },
            openPolicyDialog: function(e) {
                return {
                    policy: (0,
                    r.deepExtendClone)(e.policy, {
                        open: !0
                    })
                }
            },
            changePolicyTab: function(e, t) {
                return {
                    policy: (0,
                    r.deepExtendClone)(e.policy, {
                        activeTab: t
                    })
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = new i.default(e.color || e.accentColor || e.primaryColor || "#05687B")
          , n = e.linkColor || t.toRGBAString()
          , r = e.font || "Arial"
          , s = (0,
        o.deepExtendClone)({
            regularButtons: {
                borderRadius: "0px",
                backgroundColor: "#eeeeee",
                textColor: "#999999",
                borderColor: "rgba(34, 34, 34, 0.2)",
                borderWidth: "1px"
            },
            highlightButtons: {
                borderRadius: "0px",
                backgroundColor: t.toRGBAString(),
                textColor: t.isLight() ? "#000000" : "#ffffff",
                borderColor: t.clone().setAlpha(.3).toRGBAString(),
                borderWidth: "1px"
            }
        }, e.buttons)
          , a = e.css && "string" == typeof e.css && e.css.length > 0 ? e.css : "";
        return {
            color: t.toRGBAString(),
            lightColor: t.clone().setAlpha(.3).toRGBAString(),
            textOnColor: t.isLight() ? "#000000" : "#ffffff",
            linkColor: n,
            font: r,
            buttons: s,
            css: a
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var o = n(2)
      , i = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(207))
      , s = r();
    t.initialState = {
        theme: s
    },
    t.actions = function() {
        return {
            setTheme: function(e, t) {
                return {
                    theme: (0,
                    o.deepExtendClone)(e.theme, r(t))
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(8))
      , i = r(n(0))
      , s = r(n(1))
      , a = /^#[0-9a-f]{3}$/i
      , u = /^#[0-9a-f]{6}$/i
      , d = /^rgb\(\s*([0-9]+),\s*([0-9]+),\s*([0-9]+)\s*\)$/i
      , c = /^rgba\(\s*([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9.]+)\s*\)$/i
      , l = function() {
        function e(t) {
            if ((0,
            i.default)(this, e),
            this.color = {},
            t.match(a)) {
                var n = e.normalize({
                    r: 17 * parseInt(t.charAt(1), 16),
                    g: 17 * parseInt(t.charAt(2), 16),
                    b: 17 * parseInt(t.charAt(3), 16),
                    a: 1
                });
                (0,
                o.default)(this, n)
            } else if (t.match(u)) {
                var r = e.normalize({
                    r: parseInt(t.slice(1, 3), 16),
                    g: parseInt(t.slice(3, 5), 16),
                    b: parseInt(t.slice(5, 7), 16),
                    a: 1
                });
                (0,
                o.default)(this, r)
            } else {
                var s = t.match(d);
                if (s) {
                    var l = e.normalize({
                        r: parseInt(s[1], 10),
                        g: parseInt(s[2], 10),
                        b: parseInt(s[3], 10),
                        a: 1
                    });
                    (0,
                    o.default)(this, l)
                } else {
                    var p = t.match(c);
                    if (!p)
                        throw new TypeError("Didomi SDK - " + t + " is not a valid CSS color string");
                    var f = e.normalize({
                        r: parseInt(p[1], 10),
                        g: parseInt(p[2], 10),
                        b: parseInt(p[3], 10),
                        a: parseFloat(p[4])
                    });
                    (0,
                    o.default)(this, f)
                }
            }
        }
        return (0,
        s.default)(e, [{
            key: "alpha",
            value: function() {
                return this.a
            }
        }, {
            key: "blue",
            value: function() {
                return Math.round(this.b)
            }
        }], [{
            key: "clamp",
            value: function(e, t, n) {
                return e = void 0 === e ? 0 : e,
                t = void 0 !== t ? t : 0,
                n = void 0 !== n ? n : 1,
                Math.max(t, Math.min(n, e))
            }
        }, {
            key: "normalize",
            value: function(t) {
                return t.r = e.clamp(t.r, 0, 255),
                t.g = e.clamp(t.g, 0, 255),
                t.b = e.clamp(t.b, 0, 255),
                t.a = e.clamp(t.a, 0, 1),
                t
            }
        }]),
        (0,
        s.default)(e, [{
            key: "clone",
            value: function() {
                return new e(this.toRGBAString())
            }
        }, {
            key: "green",
            value: function() {
                return Math.round(this.g)
            }
        }, {
            key: "isDark",
            value: function() {
                return (299 * this.red() + 587 * this.green() + 144 * this.blue()) / 1e3 < 133
            }
        }, {
            key: "isLight",
            value: function() {
                return !this.isDark()
            }
        }, {
            key: "red",
            value: function() {
                return Math.round(this.r)
            }
        }, {
            key: "setAlpha",
            value: function(e) {
                return this.a = e,
                this
            }
        }, {
            key: "toRGBAString",
            value: function() {
                return "rgba(" + this.red() + "," + this.green() + "," + this.blue() + "," + this.alpha() + ")"
            }
        }, {
            key: "toString",
            value: function() {
                return this.toRGBAString()
            }
        }]),
        e
    }();
    t.default = l
}
, function(e, t, n) {
    n(209);
    var r = n(6).Object;
    e.exports = function(e, t, n) {
        return r.defineProperty(e, t, n)
    }
}
, function(e, t, n) {
    var r = n(10);
    r(r.S + r.F * !n(16), "Object", {
        defineProperty: n(13).f
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(8))
      , o = n(2);
    t.initialState = {
        consentPopup: {
            enable: !0,
            open: !1,
            defaultChoice: void 0,
            enableAllButtons: !0,
            showWhenConsentIsMissing: !1,
            canCloseWhenConsentIsMissing: !0,
            view: "preferences",
            preferencesView: "purposes",
            information: {
                enable: !1,
                content: {
                    text: {}
                }
            }
        }
    },
    t.actions = function() {
        return {
            hideConsentPopup: function(e) {
                return {
                    consentPopup: (0,
                    r.default)({}, e.consentPopup, {
                        open: !1
                    })
                }
            },
            disableConsentPopup: function(e) {
                return {
                    consentPopup: (0,
                    r.default)({}, e.consentPopup, {
                        enable: !1
                    })
                }
            },
            enableConsentPopup: function(e) {
                return {
                    consentPopup: (0,
                    r.default)({}, e.consentPopup, {
                        enable: !0
                    })
                }
            },
            showConsentPopup: function(e) {
                return {
                    consentPopup: (0,
                    r.default)({}, e.consentPopup, {
                        open: !0
                    })
                }
            },
            switchViewConsentPopup: function(e, t) {
                return {
                    consentPopup: (0,
                    r.default)({}, e.consentPopup, {
                        view: t
                    })
                }
            },
            switchPreferencesViewConsentPopup: function(e, t) {
                return {
                    consentPopup: (0,
                    r.default)({}, e.consentPopup, {
                        preferencesView: t
                    })
                }
            },
            setConsentPopupConfig: function(e, t) {
                return {
                    consentPopup: (0,
                    o.deepExtendClone)(e.consentPopup, t)
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = n(2);
    t.initialState = {
        website: {
            name: null,
            apiKey: null,
            providerKey: null,
            privacyPolicyURL: null,
            ignoreCountry: !1,
            purposes: [],
            disabledPurposes: [],
            vendors: [],
            customSDK: null,
            enableGlobalConsentForCustomsVendorsAndPurposes: !1
        }
    },
    t.actions = function() {
        return {
            setIgnoreCountry: function(e, t) {
                return {
                    website: (0,
                    r.deepExtendClone)(e.website, {
                        ignoreCountry: t
                    })
                }
            },
            setPrivacyPolicyURL: function(e, t) {
                return {
                    website: (0,
                    r.deepExtendClone)(e.website, {
                        privacyPolicyURL: t
                    })
                }
            },
            setWebsiteConfig: function(e, t) {
                return {
                    website: (0,
                    r.deepExtendClone)(e.website, t)
                }
            },
            setProviderKey: function(e, t) {
                return {
                    website: (0,
                    r.deepExtendClone)(e.website, {
                        providerKey: t
                    })
                }
            },
            setAPIKey: function(e, t) {
                return {
                    website: (0,
                    r.deepExtendClone)(e.website, {
                        apiKey: t
                    })
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = n(2)
      , o = n(114);
    t.initialState = {
        languages: {
            enabled: o.availableLanguages,
            default: "en"
        }
    },
    t.actions = function() {
        return {
            setLanguagesConfig: function(e, t) {
                return {
                    languages: (0,
                    r.deepExtendClone)(e.languages, t)
                }
            }
        }
    }
}
, function(e, t, n) {
    n(214),
    e.exports = n(6).Object.getPrototypeOf
}
, function(e, t, n) {
    var r = n(28)
      , o = n(109);
    n(77)("getPrototypeOf", function() {
        return function(e) {
            return o(r(e))
        }
    })
}
, function(e, t, n) {
    e.exports = {
        default: n(216),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(217),
    e.exports = n(6).Object.setPrototypeOf
}
, function(e, t, n) {
    var r = n(10);
    r(r.S, "Object", {
        setPrototypeOf: n(218).set
    })
}
, function(e, t, n) {
    var r = n(14)
      , o = n(15)
      , i = function(e, t) {
        if (o(e),
        !r(t) && null !== t)
            throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, r) {
            try {
                (r = n(18)(Function.call, n(84).f(Object.prototype, "__proto__").set, 2))(e, []),
                t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, n) {
                return i(e, n),
                t ? e.__proto__ = n : r(e, n),
                e
            }
        }({}, !1) : void 0),
        check: i
    }
}
, function(e, t, n) {
    e.exports = {
        default: n(220),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(221);
    var r = n(6).Object;
    e.exports = function(e, t) {
        return r.create(e, t)
    }
}
, function(e, t, n) {
    var r = n(10);
    r(r.S, "Object", {
        create: n(53)
    })
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(8));
    t.initialState = {
        experiment: {
            config: null,
            id: null,
            size: null,
            group: null,
            startDate: null
        }
    },
    t.actions = function() {
        return {
            setExperimentConfig: function(e, t) {
                return {
                    experiment: (0,
                    r.default)({}, e.experiment, {
                        config: t
                    })
                }
            },
            setExperimentGroup: function(e, t) {
                return {
                    experiment: (0,
                    r.default)({}, e.experiment, {
                        group: t
                    })
                }
            },
            setExperimentID: function(e, t) {
                return {
                    experiment: (0,
                    r.default)({}, e.experiment, {
                        id: t
                    })
                }
            },
            setExperimentSize: function(e, t) {
                return {
                    experiment: (0,
                    r.default)({}, e.experiment, {
                        size: t
                    })
                }
            },
            setExperimentStartDate: function(e, t) {
                return {
                    experiment: (0,
                    r.default)({}, e.experiment, {
                        startDate: t
                    })
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var o = r(n(7))
      , i = r(n(8))
      , s = n(2)
      , a = n(32);
    t.initialState = {
        databases: {
            vendors: {},
            purposes: {},
            features: {},
            iabVendorList: null
        }
    },
    t.actions = function() {
        return {
            addFeaturesToDatabase: function(e, t) {
                if (Array.isArray(t)) {
                    var n = {}
                      , r = !0
                      , a = !1
                      , u = void 0;
                    try {
                        for (var d, c = (0,
                        o.default)(t); !(r = (d = c.next()).done); r = !0) {
                            var l = d.value;
                            n[l.id] = (0,
                            i.default)({}, l, {
                                name: "iab_feature_" + l.id + "_name",
                                description: "iab_feature_" + l.id + "_description"
                            })
                        }
                    } catch (e) {
                        a = !0,
                        u = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (a)
                                throw u
                        }
                    }
                    return {
                        databases: (0,
                        i.default)({}, e.databases, {
                            features: (0,
                            i.default)({}, (0,
                            s.get)(e, "databases.features"), n)
                        })
                    }
                }
                return {}
            },
            addVendorsToDatabase: function(e, t) {
                if (!Array.isArray(t))
                    return {};
                var n = {}
                  , r = !0
                  , u = !1
                  , d = void 0;
                try {
                    for (var c, l = (0,
                    o.default)(t); !(r = (c = l.next()).done); r = !0) {
                        var p = c.value;
                        p.policyUrl && (p.policyUrl = (0,
                        a.checkAndAddHttp)(p.policyUrl)),
                        n[p.id] = p
                    }
                } catch (e) {
                    u = !0,
                    d = e
                } finally {
                    try {
                        !r && l.return && l.return()
                    } finally {
                        if (u)
                            throw d
                    }
                }
                return {
                    databases: (0,
                    i.default)({}, e.databases, {
                        vendors: (0,
                        i.default)({}, (0,
                        s.get)(e, "databases.vendors"), n)
                    })
                }
            },
            addPurposesToDatabase: function(e, t) {
                if (!Array.isArray(t))
                    return {};
                var n = (0,
                s.get)(e, "databases.purposes") || {}
                  , r = !0
                  , a = !1
                  , u = void 0;
                try {
                    for (var d, c = (0,
                    o.default)(t); !(r = (d = c.next()).done); r = !0) {
                        var l = d.value;
                        n[l.id] = l
                    }
                } catch (e) {
                    a = !0,
                    u = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (a)
                            throw u
                    }
                }
                return {
                    databases: (0,
                    i.default)({}, e.databases, {
                        purposes: (0,
                        i.default)({}, (0,
                        s.get)(e, "databases.purposes"), n)
                    })
                }
            },
            setIABVendorList: function(e, t) {
                var n = e.databases || {};
                return n.iabVendorList = t,
                {
                    databases: n
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = n(2);
    t.initialState = {
        cookies: {
            storageSources: {
                cookies: !0,
                localStorage: !0
            }
        }
    },
    t.actions = function() {
        return {
            setStorageConfig: function(e, t) {
                return {
                    cookies: (0,
                    r.deepExtendClone)(e.cookies, t)
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = n(2);
    t.initialState = {
        cookies: {
            global: {
                enabled: !1
            },
            group: {
                enabled: !1,
                customDomain: null
            }
        }
    },
    t.actions = function() {
        return {
            setThirdPartyCookiesConfig: function(e, t) {
                return {
                    cookies: (0,
                    r.deepExtendClone)(e.cookies, t)
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = n(55)
      , o = n(2);
    t.initialState = {
        cookies: {
            local: {
                customDomain: (0,
                r.removeSubdomain)(document.location.hostname)
            }
        }
    },
    t.actions = function() {
        return {
            setLocalCookiesConfig: function(e, t) {
                return {
                    cookies: (0,
                    o.deepExtendClone)(e.cookies, t)
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = n(2);
    t.initialState = {
        events: {
            source: {
                type: "sdk-web",
                domain: location.host
            },
            user: {
                agent: navigator.userAgent,
                id_type: "uuid"
            }
        }
    },
    t.actions = function() {
        return {
            setEventsConfig: function(e, t) {
                return {
                    events: (0,
                    r.deepExtendClone)(e.events, t)
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.actions = t.initialState = void 0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(8));
    t.initialState = {
        ui: {
            loading: !1,
            loaded: !1
        }
    },
    t.actions = function() {
        return {
            loadingUI: function(e) {
                return {
                    ui: (0,
                    r.default)({}, e.ui, {
                        loading: !0
                    })
                }
            },
            loadedUI: function(e) {
                return {
                    ui: (0,
                    r.default)({}, e.ui, {
                        loaded: !0,
                        loading: !1
                    })
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = r(n(230))
      , i = r(n(248))
      , s = r(n(249))
      , a = r(n(250))
      , u = r(n(261))
      , d = r(n(262))
      , c = r(n(268))
      , l = r(n(269))
      , p = r(n(271))
      , f = r(n(275))
      , v = r(n(276))
      , y = r(n(277))
      , h = r(n(290))
      , m = r(n(292))
      , I = r(n(114))
      , g = r(n(293))
      , w = r(n(296))
      , b = r(n(297))
      , P = r(n(298))
      , S = r(n(299))
      , _ = r(n(301))
      , k = r(n(302))
      , C = r(n(304))
      , U = {
        createServices: function(e, t) {
            for (var n in U.SiteConfigService = new S.default(e,t,U),
            U.EventsService = new c.default(e,t,U),
            U.ThemeService = new s.default(e,t,U),
            U.NoticeService = new f.default(e,t,U),
            U.PreferencesService = new v.default(e,t,U),
            U.DatabasesService = new d.default(e,t,U),
            U.ConsentService = new a.default(e,t,U),
            U.CookiesService = new u.default(e,t,U),
            U.TagManagersService = new y.default(e,t,U),
            U.UserService = new h.default(e,t,U),
            U.WebsiteService = new m.default(e,t,U),
            U.CMPService = new o.default(e,t,U),
            U.ExperimentsService = new l.default(e,t,U),
            U.IntegrationsService = new p.default(e,t,U),
            U.I18nService = new I.default(e,t,U),
            U.ThirdPartyCookiesService = new g.default(e,t,U),
            U.LocalCookiesService = new w.default(e,t,U),
            U.LocalStoreService = new b.default(e,t,U),
            U.StorageService = new P.default(e,t,U),
            U.HooksService = new _.default(e,t,U),
            U.UIService = new k.default(e,t,U),
            U.MetricsService = new C.default(e,t,U),
            U)
                "function" == typeof U[n].init && U[n].init();
            return U
        },
        CMPService: null,
        SDKConfigService: new i.default,
        SiteConfigService: null,
        ThemeService: null,
        ConsentService: null,
        CookiesService: null,
        DatabasesService: null,
        EventsService: null,
        ExperimentsService: null,
        IntegrationsService: null,
        NoticeService: null,
        PreferencesService: null,
        TagManagersService: null,
        UserService: null,
        WebsiteService: null,
        I18nService: null,
        ThirdPartyCookiesService: null,
        LocalCookiesService: null,
        LocalStoreService: null,
        StorageService: null,
        HooksService: null,
        UIService: null,
        MetricsService: null
    };
    e.exports = U
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(25))
      , i = r(n(7))
      , s = r(n(3))
      , a = r(n(0))
      , u = r(n(1))
      , d = r(n(4))
      , c = r(n(5))
      , l = r(n(117))
      , p = r(n(9))
      , f = n(2)
      , v = n(118)
      , y = function(e) {
        function t() {
            return (0,
            a.default)(this, t),
            (0,
            d.default)(this, (t.__proto__ || (0,
            s.default)(t)).apply(this, arguments))
        }
        return (0,
        c.default)(t, e),
        (0,
        u.default)(t, [{
            key: "init",
            value: function() {
                !0 === window.gdprAppliesGlobally && this.actions.setIgnoreCountry(!0)
            }
        }, {
            key: "getConsentData",
            value: function(e) {
                return e && 1 !== e ? null : {
                    consentData: this.services.UserService.isConsentRequired() || !1 !== this.services.ConsentService.hasAnyConsentStatus() ? (0,
                    v.tokenToIABConsentString)(this.services.StorageService.getTokenFromLocalStore(), this.services.I18nService.locale, this.services.DatabasesService.getIABVendorList()) : "",
                    gdprApplies: this.services.UserService.isConsentRequired(),
                    hasGlobalScope: !1
                }
            }
        }, {
            key: "getVendorConsents",
            value: function(e) {
                if (this.services.UserService.isConsentRequired() || !1 !== this.services.ConsentService.hasAnyConsentStatus()) {
                    var t = (0,
                    v.tokenToIABConsentData)(this.services.StorageService.getTokenFromLocalStore(), this.services.I18nService.locale, this.services.DatabasesService.getIABVendorList())
                      , n = t.consentData
                      , r = t.iabPurposesStatus
                      , o = t.iabVendorsStatus
                      , s = {
                        metadata: n.getMetadataString(),
                        hasGlobalScope: !1,
                        gdprApplies: this.services.UserService.isConsentRequired(),
                        purposeConsents: r,
                        vendorConsents: o
                    };
                    if (e) {
                        s.vendorConsents = {};
                        var a = !0
                          , u = !1
                          , d = void 0;
                        try {
                            for (var c, l = (0,
                            i.default)(e); !(a = (c = l.next()).done); a = !0) {
                                var p = c.value;
                                s.vendorConsents[p] = !0 === o[p]
                            }
                        } catch (e) {
                            u = !0,
                            d = e
                        } finally {
                            try {
                                !a && l.return && l.return()
                            } finally {
                                if (u)
                                    throw d
                            }
                        }
                    }
                    return s
                }
                return {
                    metadata: "",
                    hasGlobalScope: !1,
                    gdprApplies: !1,
                    purposeConsents: {},
                    vendorConsents: {}
                }
            }
        }, {
            key: "getVendorList",
            value: function() {
                return this.services.DatabasesService.getIABVendorList()
            }
        }, {
            key: "handleCommand",
            value: function(e, t, n) {
                var r = this;
                if ("function" == typeof n)
                    switch (e) {
                    case "getVendorConsents":
                        this.consentCollected.then(function() {
                            n(r.getVendorConsents(t), !0)
                        });
                        break;
                    case "getConsentData":
                        this.consentCollected.then(function() {
                            n(r.getConsentData(t), !0)
                        });
                        break;
                    case "getVendorList":
                        n(this.getVendorList(t), !0);
                        break;
                    case "ping":
                        n(this.ping(), !0)
                    }
            }
        }, {
            key: "handleCommandMessage",
            value: function(e) {
                if (e && e.data) {
                    var t = "string" == typeof e.data
                      , n = void 0;
                    try {
                        n = t ? JSON.parse(e.data) : e.data
                    } catch (e) {
                        return
                    }
                    if (n.__cmpCall) {
                        var r = n.__cmpCall;
                        this.handleCommand(r.command, r.parameter, function(n, i) {
                            var s = {
                                __cmpReturn: {
                                    returnValue: n,
                                    success: i,
                                    callId: r.callId
                                }
                            };
                            e.source && "function" == typeof e.source.postMessage ? e.source.postMessage(t ? (0,
                            o.default)(s) : s, "*") : window.postMessage(t ? (0,
                            o.default)(s) : s, "*")
                        })
                    }
                }
            }
        }, {
            key: "ping",
            value: function() {
                return {
                    gdprAppliesGlobally: !0 === (0,
                    f.get)(this.store.getState(), "website.ignoreCountry"),
                    cmpLoaded: !0
                }
            }
        }, {
            key: "setupPublicAPI",
            value: function() {
                var e = this;
                if (window.__cmp = this.handleCommand.bind(this),
                window.addEventListener ? window.addEventListener("message", this.handleCommandMessage.bind(this), !1) : window.attachEvent("onmessage", this.handleCommandMessage.bind(this)),
                this.consentCollected = new l.default(function(t) {
                    !1 !== e.services.UserService.isConsentRequired() ? e.services.ConsentService.hasAnyConsentStatus() ? t() : 0 !== e.services.WebsiteService.getRequiredVendors().length ? e.services.ConsentService.on("consent.changed", t) : t() : t()
                }
                ),
                Array.isArray(window.__cmpBuffer) && window.__cmpBuffer.length > 0) {
                    var t = !0
                      , n = !1
                      , r = void 0;
                    try {
                        for (var o, s = (0,
                        i.default)(window.__cmpBuffer); !(t = (o = s.next()).done); t = !0) {
                            var a = o.value;
                            this.handleCommand(a.command, a.parameter, a.callback)
                        }
                    } catch (e) {
                        n = !0,
                        r = e
                    } finally {
                        try {
                            !t && s.return && s.return()
                        } finally {
                            if (n)
                                throw r
                        }
                    }
                }
            }
        }]),
        t
    }(p.default);
    t.default = y
}
, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(233).ConsentString
      , o = n(127).decodeConsentString
      , i = n(119).encodeConsentString;
    e.exports = {
        ConsentString: r,
        decodeConsentString: o,
        encodeConsentString: i
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = r(n(8))
      , i = r(n(86))
      , s = r(n(110))
      , a = r(n(17))
      , u = r(n(111))
      , d = "function" == typeof u.default && "symbol" === (0,
    a.default)(s.default) ? function(e) {
        return void 0 === e ? "undefined" : (0,
        a.default)(e)
    }
    : function(e) {
        return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : void 0 === e ? "undefined" : (0,
        a.default)(e)
    }
      , c = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                (0,
                i.default)(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , l = n(119)
      , p = l.encodeConsentString
      , f = l.getMaxVendorId
      , v = l.encodeVendorIdsToBits
      , y = l.encodePurposeIdsToBits
      , h = n(127).decodeConsentString
      , m = n(126).vendorVersionMap
      , I = /^[a-z]{2}$/
      , g = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            this.created = new Date,
            this.lastUpdated = new Date,
            this.version = 1,
            this.vendorList = null,
            this.vendorListVersion = null,
            this.cmpId = null,
            this.cmpVersion = null,
            this.consentScreen = null,
            this.consentLanguage = null,
            this.allowedPurposeIds = [],
            this.allowedVendorIds = [],
            t && (0,
            o.default)(this, h(t))
        }
        return c(e, [{
            key: "getConsentString",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                if (!this.vendorList)
                    throw new Error("ConsentString - A vendor list is required to encode a consent string");
                return !0 === e && (this.lastUpdated = new Date),
                p({
                    version: this.getVersion(),
                    vendorList: this.vendorList,
                    allowedPurposeIds: this.allowedPurposeIds,
                    allowedVendorIds: this.allowedVendorIds,
                    created: this.created,
                    lastUpdated: this.lastUpdated,
                    cmpId: this.cmpId,
                    cmpVersion: this.cmpVersion,
                    consentScreen: this.consentScreen,
                    consentLanguage: this.consentLanguage,
                    vendorListVersion: this.vendorListVersion
                })
            }
        }, {
            key: "getMaxVendorId",
            value: function() {
                return f(this.vendorList.vendors)
            }
        }, {
            key: "getParsedVendorConsents",
            value: function() {
                return v(f(this.vendorList.vendors), this.allowedVendorIds)
            }
        }, {
            key: "getParsedPurposeConsents",
            value: function() {
                return y(this.vendorList.purposes, this.allowedPurposeIds)
            }
        }, {
            key: "getMetadataString",
            value: function() {
                return p({
                    version: this.getVersion(),
                    created: this.created,
                    lastUpdated: this.lastUpdated,
                    cmpId: this.cmpId,
                    cmpVersion: this.cmpVersion,
                    consentScreen: this.consentScreen,
                    vendorListVersion: this.vendorListVersion
                })
            }
        }, {
            key: "getVersion",
            value: function() {
                return this.version
            }
        }, {
            key: "getVendorListVersion",
            value: function() {
                return this.vendorListVersion
            }
        }, {
            key: "setGlobalVendorList",
            value: function(e) {
                if ("object" !== (void 0 === e ? "undefined" : d(e)))
                    throw new Error("ConsentString - You must provide an object when setting the global vendor list");
                if (!e.vendorListVersion || !Array.isArray(e.purposes) || !Array.isArray(e.vendors))
                    throw new Error("ConsentString - The provided vendor list does not respect the schema from the IAB EU’s GDPR Consent and Transparency Framework");
                this.vendorList = {
                    vendorListVersion: e.vendorListVersion,
                    lastUpdated: e.lastUpdated,
                    purposes: e.purposes,
                    features: e.features,
                    vendors: e.vendors.slice(0).sort(function(e, t) {
                        return e.id < t.id ? -1 : 1
                    })
                },
                this.vendorListVersion = e.vendorListVersion
            }
        }, {
            key: "setCmpId",
            value: function(e) {
                this.cmpId = e
            }
        }, {
            key: "getCmpId",
            value: function() {
                return this.cmpId
            }
        }, {
            key: "setCmpVersion",
            value: function(e) {
                this.cmpVersion = e
            }
        }, {
            key: "getCmpVersion",
            value: function() {
                return this.cmpVersion
            }
        }, {
            key: "setConsentScreen",
            value: function(e) {
                this.consentScreen = e
            }
        }, {
            key: "getConsentScreen",
            value: function() {
                return this.consentScreen
            }
        }, {
            key: "setConsentLanguage",
            value: function(e) {
                if (!1 === I.test(e))
                    throw new Error("ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)");
                this.consentLanguage = e
            }
        }, {
            key: "getConsentLanguage",
            value: function() {
                return this.consentLanguage
            }
        }, {
            key: "setPurposesAllowed",
            value: function(e) {
                this.allowedPurposeIds = e
            }
        }, {
            key: "getPurposesAllowed",
            value: function() {
                return this.allowedPurposeIds
            }
        }, {
            key: "setPurposeAllowed",
            value: function(e, t) {
                var n = this.allowedPurposeIds.indexOf(e);
                !0 === t ? -1 === n && this.allowedPurposeIds.push(e) : !1 === t && -1 !== n && this.allowedPurposeIds.splice(n, 1)
            }
        }, {
            key: "isPurposeAllowed",
            value: function(e) {
                return -1 !== this.allowedPurposeIds.indexOf(e)
            }
        }, {
            key: "setVendorsAllowed",
            value: function(e) {
                this.allowedVendorIds = e
            }
        }, {
            key: "getVendorsAllowed",
            value: function() {
                return this.allowedVendorIds
            }
        }, {
            key: "setVendorAllowed",
            value: function(e, t) {
                var n = this.allowedVendorIds.indexOf(e);
                !0 === t ? -1 === n && this.allowedVendorIds.push(e) : !1 === t && -1 !== n && this.allowedVendorIds.splice(n, 1)
            }
        }, {
            key: "isVendorAllowed",
            value: function(e) {
                return -1 !== this.allowedVendorIds.indexOf(e)
            }
        }], [{
            key: "decodeMetadataString",
            value: function(e) {
                var t = h(e)
                  , n = {};
                return m[t.version].metadataFields.forEach(function(e) {
                    n[e] = t[e]
                }),
                n
            }
        }]),
        e
    }();
    e.exports = {
        ConsentString: g
    }
}
, function(e, t, n) {
    n(85),
    n(42),
    n(52),
    n(235),
    n(241),
    n(244),
    n(246),
    e.exports = n(6).Set
}
, function(e, t, n) {
    "use strict";
    var r = n(236)
      , o = n(124);
    e.exports = n(237)("Set", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(e) {
            return r.def(o(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, r)
}
, function(e, t, n) {
    "use strict";
    var r = n(13).f
      , o = n(53)
      , i = n(88)
      , s = n(18)
      , a = n(89)
      , u = n(43)
      , d = n(78)
      , c = n(106)
      , l = n(123)
      , p = n(16)
      , f = n(82).fastKey
      , v = n(124)
      , y = p ? "_s" : "size"
      , h = function(e, t) {
        var n, r = f(t);
        if ("F" !== r)
            return e._i[r];
        for (n = e._f; n; n = n.n)
            if (n.k == t)
                return n
    };
    e.exports = {
        getConstructor: function(e, t, n, d) {
            var c = e(function(e, r) {
                a(e, c, t, "_i"),
                e._t = t,
                e._i = o(null),
                e._f = void 0,
                e._l = void 0,
                e[y] = 0,
                void 0 != r && u(r, n, e[d], e)
            });
            return i(c.prototype, {
                clear: function() {
                    for (var e = v(this, t), n = e._i, r = e._f; r; r = r.n)
                        r.r = !0,
                        r.p && (r.p = r.p.n = void 0),
                        delete n[r.i];
                    e._f = e._l = void 0,
                    e[y] = 0
                },
                delete: function(e) {
                    var n = v(this, t)
                      , r = h(n, e);
                    if (r) {
                        var o = r.n
                          , i = r.p;
                        delete n._i[r.i],
                        r.r = !0,
                        i && (i.n = o),
                        o && (o.p = i),
                        n._f == r && (n._f = o),
                        n._l == r && (n._l = i),
                        n[y]--
                    }
                    return !!r
                },
                forEach: function(e) {
                    v(this, t);
                    for (var n, r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f; )
                        for (r(n.v, n.k, this); n && n.r; )
                            n = n.p
                },
                has: function(e) {
                    return !!h(v(this, t), e)
                }
            }),
            p && r(c.prototype, "size", {
                get: function() {
                    return v(this, t)[y]
                }
            }),
            c
        },
        def: function(e, t, n) {
            var r, o, i = h(e, t);
            return i ? i.v = n : (e._l = i = {
                i: o = f(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            },
            e._f || (e._f = i),
            r && (r.n = i),
            e[y]++,
            "F" !== o && (e._i[o] = i)),
            e
        },
        getEntry: h,
        setStrong: function(e, t, n) {
            d(e, t, function(e, n) {
                this._t = v(e, t),
                this._k = n,
                this._l = void 0
            }, function() {
                for (var e = this._k, t = this._l; t && t.r; )
                    t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? c(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0,
                c(1))
            }, n ? "entries" : "values", !n, !0),
            l(t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(11)
      , o = n(10)
      , i = n(82)
      , s = n(23)
      , a = n(20)
      , u = n(88)
      , d = n(43)
      , c = n(89)
      , l = n(14)
      , p = n(41)
      , f = n(13).f
      , v = n(238)(0)
      , y = n(16);
    e.exports = function(e, t, n, h, m, I) {
        var g = r[e]
          , w = g
          , b = m ? "set" : "add"
          , P = w && w.prototype
          , S = {};
        return y && "function" == typeof w && (I || P.forEach && !s(function() {
            (new w).entries().next()
        })) ? (w = t(function(t, n) {
            c(t, w, e, "_c"),
            t._c = new g,
            void 0 != n && d(n, m, t[b], t)
        }),
        v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
            var t = "add" == e || "set" == e;
            e in P && (!I || "clear" != e) && a(w.prototype, e, function(n, r) {
                if (c(this, w, e),
                !t && I && !l(n))
                    return "get" == e && void 0;
                var o = this._c[e](0 === n ? 0 : n, r);
                return t ? this : o
            })
        }),
        I || f(w.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (w = h.getConstructor(t, e, m, b),
        u(w.prototype, n),
        i.NEED = !0),
        p(w, e),
        S[e] = w,
        o(o.G + o.W + o.F, S),
        I || h.setStrong(w, e, m),
        w
    }
}
, function(e, t, n) {
    var r = n(18)
      , o = n(59)
      , i = n(28)
      , s = n(45)
      , a = n(239);
    e.exports = function(e, t) {
        var n = 1 == e
          , u = 2 == e
          , d = 3 == e
          , c = 4 == e
          , l = 6 == e
          , p = 5 == e || l
          , f = t || a;
        return function(t, a, v) {
            for (var y, h, m = i(t), I = o(m), g = r(a, v, 3), w = s(I.length), b = 0, P = n ? f(t, w) : u ? f(t, 0) : void 0; w > b; b++)
                if ((p || b in I) && (h = g(y = I[b], b, m),
                e))
                    if (n)
                        P[b] = h;
                    else if (h)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return y;
                        case 6:
                            return b;
                        case 2:
                            P.push(y)
                        }
                    else if (c)
                        return !1;
            return l ? -1 : d || c ? c : P
        }
    }
}
, function(e, t, n) {
    var r = n(240);
    e.exports = function(e, t) {
        return new (r(e))(t)
    }
}
, function(e, t, n) {
    var r = n(14)
      , o = n(112)
      , i = n(12)("species");
    e.exports = function(e) {
        var t;
        return o(e) && ("function" != typeof (t = e.constructor) || t !== Array && !o(t.prototype) || (t = void 0),
        r(t) && null === (t = t[i]) && (t = void 0)),
        void 0 === t ? Array : t
    }
}
, function(e, t, n) {
    var r = n(10);
    r(r.P + r.R, "Set", {
        toJSON: n(242)("Set")
    })
}
, function(e, t, n) {
    var r = n(80)
      , o = n(243);
    e.exports = function(e) {
        return function() {
            if (r(this) != e)
                throw TypeError(e + "#toJSON isn't generic");
            return o(this)
        }
    }
}
, function(e, t, n) {
    var r = n(43);
    e.exports = function(e, t) {
        var n = [];
        return r(e, !1, n.push, n, t),
        n
    }
}
, function(e, t, n) {
    n(245)("Set")
}
, function(e, t, n) {
    "use strict";
    var r = n(10);
    e.exports = function(e) {
        r(r.S, e, {
            of: function() {
                for (var e = arguments.length, t = new Array(e); e--; )
                    t[e] = arguments[e];
                return new this(t)
            }
        })
    }
}
, function(e, t, n) {
    n(247)("Set")
}
, function(e, t, n) {
    "use strict";
    var r = n(10)
      , o = n(33)
      , i = n(18)
      , s = n(43);
    e.exports = function(e) {
        r(r.S, e, {
            from: function(e) {
                var t, n, r, a, u = arguments[1];
                return o(this),
                (t = void 0 !== u) && o(u),
                void 0 == e ? new this : (n = [],
                t ? (r = 0,
                a = i(u, arguments[2], 2),
                s(e, !1, function(e) {
                    n.push(a(e, r++))
                })) : s(e, !1, n.push, n),
                new this(n))
            }
        })
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(0))
      , i = r(n(1))
      , s = function() {
        function e(t) {
            (0,
            o.default)(this, e),
            this.config = t || {
                apiBaseURL: "https://api.privacy-center.org/v1",
                customSDKPath: "https://sdk.privacy-center.org/custom/",
                iabGlobalCookiesDomain: "didomi.mgr.consensu.org",
                globalCookiesProtocol: "https",
                events: {
                    pageviewSampleSize: .03,
                    consentAskedSampleSize: .1,
                    consentGivenSampleSize: 1,
                    uiActionPreferencesPurposesSampleSize: 1,
                    uiActionPreferencesVendorsSampleSize: 1,
                    uiActionPreferencesPurposeChangedSampleSize: 1,
                    uiActionPreferencesVendorChangedSampleSize: 1
                },
                metrics: {
                    monitoringDidomiOnLoadSampleSize: .1
                }
            }
        }
        return (0,
        i.default)(e, [{
            key: "get",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return null === e ? this.config : this.config[e] ? this.config[e] : null
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(1))
      , a = r(n(4))
      , u = r(n(5))
      , d = r(n(9))
      , c = n(2)
      , l = function(e) {
        function t() {
            return (0,
            i.default)(this, t),
            (0,
            a.default)(this, (t.__proto__ || (0,
            o.default)(t)).apply(this, arguments))
        }
        return (0,
        u.default)(t, e),
        (0,
        s.default)(t, [{
            key: "configure",
            value: function(e) {
                e && this.actions.setTheme(e)
            }
        }, {
            key: "getCss",
            value: function() {
                return (0,
                c.get)(this.store.getState(), "theme.css", null)
            }
        }]),
        t
    }(d.default);
    t.default = l
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(7))
      , i = r(n(26))
      , s = r(n(25))
      , a = r(n(3))
      , u = r(n(0))
      , d = r(n(1))
      , c = r(n(4))
      , l = r(n(5))
      , p = n(254)
      , f = n(2)
      , v = r(n(56))
      , y = r(n(255))
      , h = r(n(31))
      , m = n(54)
      , I = function(e) {
        function t() {
            return (0,
            u.default)(this, t),
            (0,
            c.default)(this, (t.__proto__ || (0,
            a.default)(t)).apply(this, arguments))
        }
        return (0,
        l.default)(t, e),
        (0,
        d.default)(t, [{
            key: "getUserConsentTokenDeprecated",
            value: function() {
                return (0,
                p.CWTFromCompressedJSON)((0,
                s.default)(this.services.StorageService.getTokenFromLocalStore()))
            }
        }, {
            key: "getUserConsentStatusForAll",
            value: function() {
                var e = this.services.StorageService.getTokenFromLocalStore()
                  , t = e.purposes.enabled || []
                  , n = e.purposes.disabled || []
                  , r = e.vendors.enabled || []
                  , o = e.vendors.disabled || [];
                return {
                    purposes: {
                        enabled: [].concat((0,
                        i.default)(t)),
                        disabled: [].concat((0,
                        i.default)(n))
                    },
                    vendors: {
                        enabled: [].concat((0,
                        i.default)(r)),
                        disabled: [].concat((0,
                        i.default)(o))
                    }
                }
            }
        }, {
            key: "getUserConsentStatus",
            value: function(e, t) {
                t = parseInt(t, 10) || t;
                var n = this.services.StorageService.getTokenFromLocalStore()
                  , r = n.purposes.enabled || []
                  , o = n.purposes.disabled || []
                  , i = n.vendors.enabled || []
                  , s = n.vendors.disabled || [];
                return -1 !== r.indexOf(e) && -1 !== i.indexOf(t) || (-1 === r.indexOf(e) && -1 === o.indexOf(e) || -1 === i.indexOf(t) && -1 === s.indexOf(t)) && void 0
            }
        }, {
            key: "hasAllConsentStatus",
            value: function(e, t) {
                var n = []
                  , r = !0
                  , i = !1
                  , s = void 0;
                try {
                    for (var a, u = (0,
                    o.default)(e); !(r = (a = u.next()).done); r = !0) {
                        var d = a.value
                          , c = !0
                          , l = !1
                          , p = void 0;
                        try {
                            for (var f, v = (0,
                            o.default)(t); !(c = (f = v.next()).done); c = !0) {
                                var y = f.value;
                                n.push(this.getUserConsentStatus(d, y.id))
                            }
                        } catch (e) {
                            l = !0,
                            p = e
                        } finally {
                            try {
                                !c && v.return && v.return()
                            } finally {
                                if (l)
                                    throw p
                            }
                        }
                    }
                } catch (e) {
                    i = !0,
                    s = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i)
                            throw s
                    }
                }
                return !1 === n.some(function(e) {
                    return void 0 === e
                })
            }
        }, {
            key: "hasAnyConsentStatus",
            value: function() {
                var e = this.services.StorageService.getTokenFromLocalStore()
                  , t = e.purposes.enabled || []
                  , n = e.purposes.disabled || []
                  , r = e.vendors.enabled || []
                  , o = e.vendors.disabled || [];
                return t.length > 0 || n.length > 0 || r.length > 0 || o.length > 0
            }
        }, {
            key: "getUserConsentStatusForAllPurposesByVendor",
            value: function(e) {
                e = parseInt(e, 10) || e;
                var t = (0,
                f.get)(this.store.getState(), "consentByVendor." + e + ".consentToAllPurposes");
                if ("boolean" == typeof t)
                    return t
            }
        }, {
            key: "getObservableOnUserConsentStatusForAllPurposesByVendor",
            value: function(e) {
                var t = this
                  , n = new y.default(null,this.getUserConsentStatusForAllPurposesByVendor(e));
                return this.on("consent.changed", function() {
                    n.next(t.getUserConsentStatusForAllPurposesByVendor(e))
                }),
                n.distinctUntilChanged()
            }
        }, {
            key: "getUserConsentStatusByVendor",
            value: function(e) {
                e = parseInt(e, 10) || e;
                var t = this.services.StorageService.getTokenFromLocalStore()
                  , n = t.vendors.enabled || []
                  , r = t.vendors.disabled || [];
                return -1 !== n.indexOf(e) || -1 === r.indexOf(e) && void 0
            }
        }, {
            key: "getUserConsentStatusByPurpose",
            value: function(e) {
                var t = this.services.StorageService.getTokenFromLocalStore()
                  , n = t.purposes.enabled || []
                  , r = t.purposes.disabled || [];
                return -1 !== n.indexOf(e) || -1 === r.indexOf(e) && void 0
            }
        }, {
            key: "getUndefinedPurposes",
            value: function() {
                var e = this.services.StorageService.getTokenFromLocalStore()
                  , t = [].concat((0,
                i.default)(e.purposes.enabled), (0,
                i.default)(e.purposes.disabled));
                return this.services.WebsiteService.getRequiredPurposeIds().filter(function(e) {
                    return -1 === t.indexOf(e)
                })
            }
        }, {
            key: "getCommonConsentStatus",
            value: function(e, t) {
                if (0 !== t.length) {
                    var n = this.getUserConsentStatus(e, t[0].id)
                      , r = !0
                      , i = !1
                      , s = void 0;
                    try {
                        for (var a, u = (0,
                        o.default)(t.slice(1)); !(r = (a = u.next()).done); r = !0) {
                            var d = a.value;
                            if (n !== this.getUserConsentStatus(e, d.id))
                                return
                        }
                    } catch (e) {
                        i = !0,
                        s = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i)
                                throw s
                        }
                    }
                    return n
                }
            }
        }, {
            key: "setUserConsentStatusDeprecated",
            value: function(e, t, n) {
                t = Array.isArray(t) ? t : [t],
                n = Array.isArray(n) ? n : [n];
                var r = new v.default(this.getUserConsentStatusForAll.bind(this),this.setUserConsentStatus.bind(this));
                !0 === e ? (r.enablePurposes.apply(r, (0,
                i.default)(t)),
                r.enableVendors.apply(r, (0,
                i.default)(n))) : (r.enablePurposes.apply(r, (0,
                i.default)(this.getUndefinedPurposes())),
                r.disableVendors.apply(r, (0,
                i.default)(n))),
                r.commit()
            }
        }, {
            key: "setUserConsentStatus",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []
                  , o = arguments[4];
                e = Array.isArray(e) ? e : [e],
                t = Array.isArray(t) ? t : [t],
                n = Array.isArray(n) ? n : [n],
                r = Array.isArray(r) ? r : [r];
                var i = this.services.StorageService.getTokenFromLocalStore()
                  , s = (0,
                f.deepClone)(i);
                s.vendors = {
                    enabled: n,
                    disabled: r
                },
                s.purposes = {
                    enabled: e,
                    disabled: t
                },
                (0,
                f.deepEqual)(i, s) || (s = this.services.StorageService.updateAndSetToken(s),
                this.sendEvents(s, !1, o))
            }
        }, {
            key: "sendEvents",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = arguments[2]
                  , r = e.purposes
                  , o = e.vendors
                  , i = e.created
                  , s = e.updated;
                this.services.EventsService.sendConsentGiven({
                    purposes: r,
                    vendors: o,
                    created: i,
                    updated: s,
                    from_euconsent: t,
                    action: "string" == typeof n ? n : void 0
                }, "navigate" === n),
                this.emit("consent.changed", {
                    consentToken: this.getUserConsentTokenDeprecated(),
                    fromEUConsent: t,
                    action: n
                }),
                this.setBrowserCookieState(e.purposes.enabled)
            }
        }, {
            key: "setBrowserCookieState",
            value: function(e) {
                e.some(function(e) {
                    return 0 === e.indexOf("cookies")
                }) && this.services.CookiesService.enable()
            }
        }]),
        t
    }(h.default);
    t.default = I,
    I.Purposes = m.Purposes,
    I.prototype.Purposes = m.Purposes
}
, function(e, t, n) {
    n(42),
    n(252),
    e.exports = n(6).Array.from
}
, function(e, t, n) {
    "use strict";
    var r = n(18)
      , o = n(10)
      , i = n(28)
      , s = n(121)
      , a = n(122)
      , u = n(45)
      , d = n(253)
      , c = n(79);
    o(o.S + o.F * !n(128)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, o, l, p = i(e), f = "function" == typeof this ? this : Array, v = arguments.length, y = v > 1 ? arguments[1] : void 0, h = void 0 !== y, m = 0, I = c(p);
            if (h && (y = r(y, v > 2 ? arguments[2] : void 0, 2)),
            void 0 == I || f == Array && a(I))
                for (n = new f(t = u(p.length)); t > m; m++)
                    d(n, m, h ? y(p[m], m) : p[m]);
            else
                for (l = I.call(p),
                n = new f; !(o = l.next()).done; m++)
                    d(n, m, h ? s(l, y, [o.value, m], !0) : o.value);
            return n.length = m,
            n
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(13)
      , o = n(34);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, o(0, n)) : e[t] = n
    }
}
, function(e, t, n) {
    function r(e) {
        if (!e)
            return null;
        var t = void 0;
        try {
            t = JSON.parse(e)
        } catch (e) {
            return null
        }
        return t.purposes || t.vendors ? null : new a(t)
    }
    function o(e) {
        if (!e)
            return null;
        var t = void 0;
        try {
            t = JSON.parse(e)
        } catch (e) {
            return null
        }
        if (t.consents || !t.purposes || !t.vendors || !t.purposes.enabled || !t.purposes.disabled || !t.vendors.enabled || !t.vendors.disabled)
            return null;
        var n = new a({
            issuer: t.issuer,
            user_id: t.user_id,
            user_id_type: t.user_id_type,
            user_id_hash_method: t.user_id_hash_method,
            consents: [],
            version: t.version
        });
        for (var r in t.purposes.enabled)
            if (t.purposes.enabled.hasOwnProperty(r)) {
                var o = t.purposes.enabled[r];
                for (var i in t.vendors.enabled)
                    if (t.vendors.enabled.hasOwnProperty(i)) {
                        var s = t.vendors.enabled[i];
                        n.setConsentStatus(!0, o, s)
                    }
                for (var u in t.vendors.disabled)
                    if (t.vendors.disabled.hasOwnProperty(u)) {
                        var d = t.vendors.disabled[u];
                        n.setConsentStatus(!1, o, d)
                    }
            }
        for (var c in t.purposes.disabled)
            if (t.purposes.disabled.hasOwnProperty(c)) {
                var l = t.purposes.disabled[c];
                for (var p in t.vendors.enabled)
                    if (t.vendors.enabled.hasOwnProperty(p)) {
                        var f = t.vendors.enabled[p];
                        n.setConsentStatus(!1, l, f)
                    }
                for (var v in t.vendors.disabled)
                    if (t.vendors.disabled.hasOwnProperty(v)) {
                        var y = t.vendors.disabled[v];
                        n.setConsentStatus(!1, l, y)
                    }
            }
        return n
    }
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }()
      , s = n(87)
      , a = function() {
        function e(t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
            t = t || {},
            this.issuer = t.issuer || null,
            this.user_id = t.user_id || null,
            this.user_id_type = t.user_id_type || null,
            this.user_id_hash_method = t.user_id_hash_method || null,
            this.consents = t.consents || [],
            this.version = 1
        }
        return i(e, [{
            key: "toObject",
            value: function() {
                return {
                    issuer: this.issuer,
                    user_id: this.user_id,
                    user_id_type: this.user_id_type,
                    user_id_hash_method: this.user_id_hash_method,
                    consents: this.consents,
                    version: this.version
                }
            }
        }, {
            key: "toJSON",
            value: function() {
                return JSON.stringify(this.toObject())
            }
        }, {
            key: "toCompressedJSON",
            value: function() {
                var e = this.toObject()
                  , t = {
                    issuer: e.issuer,
                    user_id: e.user_id,
                    user_id_type: e.user_id_type,
                    user_id_hash_method: e.user_id_hash_method,
                    version: e.version,
                    purposes: {
                        enabled: [],
                        disabled: []
                    },
                    vendors: {
                        enabled: [],
                        disabled: []
                    }
                }
                  , n = {}
                  , r = {};
                for (var o in e.consents)
                    if (e.consents.hasOwnProperty(o)) {
                        var i = e.consents[o]
                          , s = i.purpose
                          , a = i.vendors;
                        r[s] = {};
                        var u = !0;
                        for (var d in a)
                            if (a.hasOwnProperty(d)) {
                                var c = a[d];
                                u = u && !1 === c.status,
                                n[c.id] || (n[c.id] = {
                                    id: c.id,
                                    purposes: {}
                                }),
                                n[c.id].purposes[s] = c.status,
                                r[s][c.id] = c.status
                            }
                        u ? t.purposes.disabled.push(s) : t.purposes.enabled.push(s)
                    }
                var l = Object.keys(n);
                for (var p in l)
                    if (l.hasOwnProperty(p)) {
                        var f = l[p]
                          , v = !0;
                        for (var y in t.purposes.enabled)
                            if (t.purposes.enabled.hasOwnProperty(y)) {
                                var h = t.purposes.enabled[y];
                                v = v && !0 === n[f].purposes[h]
                            }
                        v ? t.vendors.enabled.push(n[f].id) : t.vendors.disabled.push(n[f].id)
                    }
                return JSON.stringify(t)
            }
        }, {
            key: "toBase64",
            value: function() {
                return s.encode(this.toJSON())
            }
        }, {
            key: "toCompressedBase64",
            value: function() {
                return s.encode(this.toCompressedJSON())
            }
        }, {
            key: "setConsentStatus",
            value: function(e, t, n) {
                var r = this.consents.find(function(e) {
                    return e.purpose === t
                });
                r || (r = {
                    purpose: t,
                    vendors: []
                },
                this.consents.push(r));
                var o = r.vendors.find(function(e) {
                    return e.id === n
                });
                o || (o = {
                    id: n,
                    status: void 0
                },
                r.vendors.push(o)),
                o.status = e
            }
        }, {
            key: "getConsentStatus",
            value: function(e, t) {
                var n = this.consents.find(function(t) {
                    return t.purpose === e
                });
                if (n) {
                    var r = n.vendors.find(function(e) {
                        return e.id === t
                    });
                    if (r)
                        return r.status;
                    var o = n.vendors.find(function(e) {
                        return "*" === e.id
                    });
                    if (o)
                        return o.status
                }
            }
        }]),
        e
    }();
    e.exports = {
        CWT: a,
        CWTFromBase64: function(e) {
            if (!e)
                return null;
            try {
                return r(s.decode(e))
            } catch (e) {
                return null
            }
        },
        CWTFromCompressedBase64: function(e) {
            if (!e)
                return null;
            try {
                return o(s.decode(e))
            } catch (e) {
                return null
            }
        },
        CWTFromJSON: r,
        CWTFromCompressedJSON: o,
        Purposes: {
            Cookies: "cookies",
            CookiesAnalytics: "cookies_analytics",
            CookiesMarketing: "cookies_marketing",
            CookiesSocial: "cookies_social",
            AdvertisingPersonalization: "advertising_personalization",
            Analytics: "analytics",
            ContentPersonalization: "content_personalization",
            DeviceAccess: "device_access",
            OfflineMatch: "offline_match",
            LinkDevices: "link_devices",
            PreciseGeo: "precise_geo"
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(7))
      , i = r(n(8))
      , s = r(n(3))
      , a = r(n(0))
      , u = r(n(1))
      , d = r(n(4))
      , c = r(n(135))
      , l = r(n(5))
      , p = function(e) {
        function t(e, n) {
            return (0,
            a.default)(this, t),
            (0,
            d.default)(this, (t.__proto__ || (0,
            s.default)(t)).call(this, (0,
            i.default)({}, e, {
                currentValue: n,
                hasCurrentValue: !0
            })))
        }
        return (0,
        l.default)(t, e),
        (0,
        u.default)(t, [{
            key: "clone",
            value: function(e) {
                var n = new t(e,this.parameters.currentValue);
                return this.subscribe(n.next.bind(n)),
                n
            }
        }, {
            key: "getValue",
            value: function() {
                return this.parameters.currentValue
            }
        }, {
            key: "subscribe",
            value: function(e) {
                var n = (0,
                c.default)(t.prototype.__proto__ || (0,
                s.default)(t.prototype), "subscribe", this).call(this, e)
                  , r = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var u, d = (0,
                    o.default)(this.parameters.filters); !(r = (u = d.next()).done); r = !0)
                        if (!0 !== (0,
                        u.value)(this.parameters.currentValue))
                            return
                } catch (e) {
                    i = !0,
                    a = e
                } finally {
                    try {
                        !r && d.return && d.return()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                n(this.parameters.currentValue)
            }
        }]),
        t
    }(r(n(259)).default);
    t.default = p
}
, function(e, t, n) {
    e.exports = {
        default: n(257),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(258);
    var r = n(6).Object;
    e.exports = function(e, t) {
        return r.getOwnPropertyDescriptor(e, t)
    }
}
, function(e, t, n) {
    var r = n(21)
      , o = n(84).f;
    n(77)("getOwnPropertyDescriptor", function() {
        return function(e, t) {
            return o(r(e), t)
        }
    })
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(7))
      , i = r(n(26))
      , s = r(n(8))
      , a = r(n(0))
      , u = r(n(1))
      , d = n(2)
      , c = function() {
        function e(t) {
            (0,
            a.default)(this, e),
            this.parameters = {
                filters: (0,
                d.get)(t, "filters", []),
                first: (0,
                d.get)(t, "first", !1),
                distinctUntilChanged: (0,
                d.get)(t, "distinctUntilChanged", !1),
                currentValue: (0,
                d.get)(t, "currentValue"),
                hasCurrentValue: (0,
                d.get)(t, "hasCurrentValue", !1)
            },
            this.subscribers = []
        }
        return (0,
        u.default)(e, [{
            key: "clone",
            value: function(t) {
                var n = new e(t);
                return this.subscribe(n.next.bind(n)),
                n
            }
        }, {
            key: "distinctUntilChanged",
            value: function() {
                return this.clone((0,
                s.default)({}, this.parameters, {
                    distinctUntilChanged: !0
                }))
            }
        }, {
            key: "filter",
            value: function(e) {
                if ("function" != typeof e)
                    throw new Error("You must pass a Function to filter an observable");
                return this.clone((0,
                s.default)({}, this.parameters, {
                    filters: [].concat((0,
                    i.default)(this.parameters.filters), [e])
                }))
            }
        }, {
            key: "first",
            value: function() {
                return this.clone((0,
                s.default)({}, this.parameters, {
                    first: !0
                }))
            }
        }, {
            key: "subscribe",
            value: function(e) {
                if ("function" != typeof e)
                    throw new Error("You must pass a Function to subscribe to an observable");
                var t = this
                  , n = function n(r) {
                    e(r),
                    !0 === t.parameters.first && n.unsubscribe()
                };
                return n.unsubscribe = function() {
                    var e = t.subscribers.indexOf(n);
                    -1 !== e && t.subscribers.splice(e, 1)
                }
                ,
                this.subscribers.push(n),
                n
            }
        }, {
            key: "next",
            value: function(e) {
                var t = !0
                  , n = !1
                  , r = void 0;
                try {
                    for (var i, s = (0,
                    o.default)(this.parameters.filters); !(t = (i = s.next()).done); t = !0)
                        if (!0 !== (0,
                        i.value)(e))
                            return
                } catch (e) {
                    n = !0,
                    r = e
                } finally {
                    try {
                        !t && s.return && s.return()
                    } finally {
                        if (n)
                            throw r
                    }
                }
                if (!0 !== this.parameters.distinctUntilChanged || !0 !== this.parameters.hasCurrentValue || e !== this.parameters.currentValue) {
                    var a = !0
                      , u = !1
                      , d = void 0;
                    try {
                        for (var c, l = (0,
                        o.default)(this.subscribers); !(a = (c = l.next()).done); a = !0)
                            (0,
                            c.value)(e)
                    } catch (e) {
                        u = !0,
                        d = e
                    } finally {
                        try {
                            !a && l.return && l.return()
                        } finally {
                            if (u)
                                throw d
                        }
                    }
                    this.parameters.currentValue = e,
                    this.parameters.hasCurrentValue = !0
                }
            }
        }]),
        e
    }();
    t.default = c
}
, function(e, t) {
    function n(e, t) {
        return e || (e = this instanceof n ? this : {}),
        function(t, r) {
            function o(n) {
                var r, o;
                if (!("error" !== n || t.error && t.error.length))
                    throw arguments[1]instanceof Error ? o = arguments[1] : (o = new Error("Unhandled error event: " + arguments[1])).context = arguments[1],
                    o;
                return !!t[n] && (r = Array.prototype.slice.call(arguments, 1),
                t[n].slice().forEach(function(t) {
                    t._once && 1 !== t._once || (t._once++,
                    t.apply(e, r)),
                    t._once && s(n, t)
                }),
                e)
            }
            function i(n, r) {
                if (t.newListener && e.emit("newListener", n, r),
                t[n] = t[n] || [],
                t[n].push(r),
                !t[n].warned) {
                    var o = e.maxListeners;
                    o && o > 0 && t[n].length > o && (t[n].warned = !0,
                    e.logger.warn("Possible EventEmitter memory leak detected for '%s' event. %d listeners added. Use emitter.setMaxListeners() to increase limit.", n, t[n].length),
                    e.logger.trace && e.logger.trace())
                }
                return e
            }
            function s(n, r) {
                if (!r && !t.removeListener)
                    return n ? t[n] && delete t[n] : t = {},
                    e;
                if (!n) {
                    for (var i in t)
                        "removeListener" != i && s(i);
                    return s("removeListener"),
                    t = {},
                    e
                }
                if (!t[n])
                    return e;
                if (!r) {
                    for (; t[n].length; )
                        s(n, t[n][t[n].length - 1]);
                    return delete t[n],
                    e
                }
                var a = t[n].indexOf(r);
                return a < 0 ? e : (t[n].splice(a, 1),
                t.removeListener && o("removeListener", n, r),
                e)
            }
            function a() {
                return Object.keys(t)
            }
            return Object.defineProperties(e, {
                setMaxListeners: {
                    value: function(t) {
                        return r.maxListeners = t,
                        e
                    }
                },
                maxListeners: {
                    get: function() {
                        return void 0 === r.maxListeners ? n.defaultMaxListeners : r.maxListeners
                    }
                },
                setLogger: {
                    value: function(t) {
                        return r.logger = t,
                        e
                    }
                },
                logger: {
                    get: function() {
                        return void 0 === r.logger ? n.logger : r.logger
                    }
                },
                emit: {
                    value: o
                },
                on: {
                    value: i
                },
                once: {
                    value: function(t, n) {
                        return n._once = 1,
                        e.on(t, n)
                    }
                },
                off: {
                    value: s
                },
                addListener: {
                    value: i
                },
                removeListener: {
                    value: s
                },
                removeAllListeners: {
                    value: s
                },
                listeners: {
                    value: function(e) {
                        return t[e] ? t[e].slice() : []
                    }
                },
                listenerTypes: {
                    value: a
                },
                listenerCount: {
                    value: function e(n) {
                        if (!n) {
                            var r = 0;
                            return a().forEach(function(t) {
                                r += e(t)
                            }),
                            r
                        }
                        return "object" == typeof n && n.length ? a().map(function(t) {
                            return e(t)
                        }) : t[n] && t[n].length || 0
                    }
                }
            })
        }({}, {
            logger: t && t.logger,
            maxListeners: t && t.maxListeners
        })
    }
    n.EventEmitter = n,
    n.defaultMaxListeners = 10,
    n.logger = "object" == typeof console && console || {
        warn: function() {}
    },
    n.setLogger = function(e) {
        n.logger = e
    }
    ,
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(1))
      , a = r(n(4))
      , u = r(n(5))
      , d = function(e) {
        function t() {
            return (0,
            i.default)(this, t),
            (0,
            a.default)(this, (t.__proto__ || (0,
            o.default)(t)).apply(this, arguments))
        }
        return (0,
        u.default)(t, e),
        (0,
        s.default)(t, [{
            key: "getConsentStatusByCookieCategory",
            value: function(e) {
                if (!this.services.UserService.isConsentRequired())
                    return !0;
                var t = this.services.ConsentService.getUserConsentStatusByPurpose(e);
                return void 0 !== t ? t : !0 === this.services.ConsentService.getUserConsentStatusByPurpose("cookies")
            }
        }, {
            key: "getAllowedCategories",
            value: function() {
                var e = ["essential"];
                return this.getConsentStatusByCookieCategory("cookies_analytics") && e.push("analytics"),
                this.getConsentStatusByCookieCategory("cookies_marketing") && e.push("marketing"),
                this.getConsentStatusByCookieCategory("cookies_social") && e.push("social"),
                e
            }
        }, {
            key: "enable",
            value: function() {
                var e = this.getAllowedCategories();
                this.emit("cookies.enable", e)
            }
        }]),
        t
    }(r(n(31)).default);
    t.default = d
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(44))
      , i = r(n(8))
      , s = r(n(7))
      , a = r(n(26))
      , u = r(n(3))
      , d = r(n(0))
      , c = r(n(1))
      , l = r(n(4))
      , p = r(n(5))
      , f = r(n(9))
      , v = r(n(266))
      , y = r(n(267))
      , h = n(2)
      , m = n(54)
      , I = (0,
    h.get)(window, "didomiConfig.website.vendors.iab.vendorList") || (0,
    h.get)(window, "didomiConfig.app.vendors.iab.vendorList") || v.default
      , g = function(e) {
        function t() {
            return (0,
            d.default)(this, t),
            (0,
            l.default)(this, (t.__proto__ || (0,
            u.default)(t)).apply(this, arguments))
        }
        return (0,
        p.default)(t, e),
        (0,
        c.default)(t, [{
            key: "init",
            value: function() {
                this.addPurposesToDatabase([{
                    id: m.Purposes.Cookies,
                    name: "information_storage_and_access_19227997",
                    description: "information_storage_and_access_description_19227997",
                    namespace: "iab"
                }, {
                    id: m.Purposes.CookiesAnalytics
                }, {
                    id: m.Purposes.CookiesMarketing
                }, {
                    id: m.Purposes.CookiesSocial
                }, {
                    id: m.Purposes.AdvertisingPersonalization,
                    name: "personalisation_20601824",
                    description: "personalisation_description_20601824",
                    namespace: "iab"
                }, {
                    id: m.Purposes.Analytics,
                    name: "measurement_268d0e0",
                    description: "measurement_description_268d0e0",
                    namespace: "iab"
                }, {
                    id: m.Purposes.ContentPersonalization,
                    name: "content_selection_delivery_reporting_10c29447",
                    description: "content_selection_delivery_reporting_description_10c29447",
                    namespace: "iab"
                }, {
                    id: "ad_delivery",
                    name: "ad_selection_delivery_reporting_3fb55e57",
                    description: "ad_selection_delivery_reporting_description_3fb55e57",
                    namespace: "iab"
                }]),
                this.actions.addVendorsToDatabase([].concat((0,
                a.default)(y.default), (0,
                a.default)(this.loadIABVendors(I)))),
                this.actions.addFeaturesToDatabase(I.features)
            }
        }, {
            key: "loadIABVendors",
            value: function(e) {
                var t = []
                  , n = !0
                  , r = !1
                  , o = void 0;
                try {
                    for (var a, u = (0,
                    s.default)(e.vendors); !(n = (a = u.next()).done); n = !0) {
                        var d = a.value;
                        t.push((0,
                        i.default)({}, d, {
                            namespace: "iab",
                            purposeIds: (d.purposeIds || []).map(function(e) {
                                return (0,
                                m.getDidomiPurposeId)(e)
                            }),
                            legIntPurposeIds: (d.legIntPurposeIds || []).map(function(e) {
                                return (0,
                                m.getDidomiPurposeId)(e)
                            })
                        }))
                    }
                } catch (e) {
                    r = !0,
                    o = e
                } finally {
                    try {
                        !n && u.return && u.return()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return this.actions.setIABVendorList(e),
                t
            }
        }, {
            key: "getIABVendorList",
            value: function() {
                return (0,
                h.get)(this.store.getState(), "databases.iabVendorList")
            }
        }, {
            key: "getPurpose",
            value: function(e) {
                return (0,
                h.get)(this.store.getState(), ["databases", "purposes", e])
            }
        }, {
            key: "getPurposes",
            value: function() {
                return (0,
                h.get)(this.store.getState(), "databases.purposes") || {}
            }
        }, {
            key: "getVendor",
            value: function(e) {
                return (0,
                h.get)(this.store.getState(), ["databases", "vendors", e])
            }
        }, {
            key: "getFeature",
            value: function(e) {
                return (0,
                h.get)(this.store.getState(), ["databases", "features", e])
            }
        }, {
            key: "getVendors",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = (0,
                o.default)((0,
                h.get)(this.store.getState(), "databases.vendors") || {});
                return e && (t = t.filter(function(t) {
                    return t.namespace === e
                })),
                t
            }
        }, {
            key: "addPurposesToDatabase",
            value: function(e) {
                this.actions.addPurposesToDatabase(e)
            }
        }, {
            key: "addVendorsToDatabase",
            value: function(e) {
                this.actions.addVendorsToDatabase(e)
            }
        }]),
        t
    }(f.default);
    t.default = g
}
, function(e, t, n) {
    n(264),
    e.exports = n(6).Object.values
}
, function(e, t, n) {
    var r = n(10)
      , o = n(265)(!1);
    r(r.S, "Object", {
        values: function(e) {
            return o(e)
        }
    })
}
, function(e, t, n) {
    var r = n(27)
      , o = n(21)
      , i = n(37).f;
    e.exports = function(e) {
        return function(t) {
            for (var n, s = o(t), a = r(s), u = a.length, d = 0, c = []; u > d; )
                i.call(s, n = a[d++]) && c.push(e ? [n, s[n]] : s[n]);
            return c
        }
    }
}
, function(e, t) {
    e.exports = {
        vendorListVersion: 164,
        lastUpdated: "2019-09-05T16:00:20Z",
        purposes: [{
            id: 1,
            name: "Information storage and access",
            description: "The storage of information, or access to information that is already stored, on your device such as advertising identifiers, device identifiers, cookies, and similar technologies."
        }, {
            id: 2,
            name: "Personalisation",
            description: "The collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as on other websites or apps, over time. Typically, the content of the site or app is used to make inferences about your interests, which inform future selection of advertising and/or content."
        }, {
            id: 3,
            name: "Ad selection, delivery, reporting",
            description: "The collection of information, and combination with previously collected information, to select and deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what advertisements were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise advertising and/or content for you in other contexts, such as websites or apps, over time."
        }, {
            id: 4,
            name: "Content selection, delivery, reporting",
            description: "The collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what content was shown, how often or how long it was shown, when and where it was shown, and whether the you took any action related to the content, including for example clicking on content. This does not include personalisation, which is the collection and processing of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, such as websites or apps, over time."
        }, {
            id: 5,
            name: "Measurement",
            description: "The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time."
        }],
        features: [{
            id: 1,
            name: "Matching Data to Offline Sources",
            description: "Combining data from offline sources that were initially collected in other contexts."
        }, {
            id: 2,
            name: "Linking Devices",
            description: "Allow processing of a user's data to connect such user across multiple devices."
        }, {
            id: 3,
            name: "Precise Geographic Location Data",
            description: "Allow processing of a user's precise geographic location data in support of a purpose for which that certain third party has consent."
        }],
        vendors: [{
            id: 8,
            name: "Emerse Sverige AB",
            policyUrl: "https://www.emerse.com/privacy-policy/",
            purposeIds: [1, 2, 4],
            legIntPurposeIds: [3, 5],
            featureIds: [1, 2]
        }, {
            id: 9,
            name: "AdMaxim Inc.",
            policyUrl: "http://www.admaxim.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 12,
            name: "BeeswaxIO Corporation",
            policyUrl: "https://www.beeswax.com/privacy.html",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 28,
            name: "TripleLift, Inc.",
            policyUrl: "https://triplelift.com/privacy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 27,
            name: "ADventori SAS",
            policyUrl: "https://www.adventori.com/with-us/legal-notice/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 25,
            name: "Oath (EMEA) Limited",
            policyUrl: "https://policies.oath.com/ie/en/oath/privacy/index.html",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 26,
            name: "Venatus Media Limited",
            policyUrl: "https://www.venatusmedia.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 1,
            name: "Exponential Interactive, Inc",
            policyUrl: "http://exponential.com/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 6,
            name: "AdSpirit GmbH",
            policyUrl: "http://www.adspirit.de/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 30,
            name: "BidTheatre AB",
            policyUrl: "https://www.bidtheatre.com/privacy-policy",
            purposeIds: [2],
            legIntPurposeIds: [1, 3],
            featureIds: [2, 3]
        }, {
            id: 24,
            name: "Conversant Europe Ltd.",
            policyUrl: "https://www.conversantmedia.eu/legal/privacy-policy",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 29,
            name: "Etarget SE",
            policyUrl: "https://www.etarget.sk/privacy.php",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1]
        }, {
            id: 39,
            name: "ADITION technologies AG",
            policyUrl: "https://www.adition.com/datenschutz",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 11,
            name: "Quantcast International Limited",
            policyUrl: "https://www.quantcast.com/privacy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 15,
            name: "Adikteev / Emoteev",
            policyUrl: "https://www.adikteev.com/eu/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 4,
            name: "Roq.ad GmbH",
            policyUrl: "https://www.roq.ad/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 7,
            name: "Vibrant Media Limited",
            policyUrl: "https://www.vibrantmedia.com/en/privacy-policy/",
            purposeIds: [2, 3, 4, 5],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 2,
            name: "Captify Technologies Limited",
            policyUrl: "http://www.captify.co.uk/privacy-policy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: [2]
        }, {
            id: 37,
            name: "NEURAL.ONE",
            policyUrl: "https://web.neural.one/privacy-policy/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 13,
            name: "Sovrn Holdings Inc",
            policyUrl: "https://www.sovrn.com/sovrn-privacy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 34,
            name: "NEORY GmbH",
            policyUrl: "https://www.neory.com/privacy.html",
            purposeIds: [1, 2, 4, 5],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 32,
            name: "AppNexus Inc.",
            policyUrl: "https://www.appnexus.com/en/company/platform-privacy-policy",
            purposeIds: [1],
            legIntPurposeIds: [3],
            featureIds: [2, 3]
        }, {
            id: 10,
            name: "Index Exchange, Inc. ",
            policyUrl: "https://www.indexexchange.com/privacy",
            purposeIds: [1],
            legIntPurposeIds: [3],
            featureIds: [2, 3]
        }, {
            id: 57,
            name: "ADARA MEDIA UNLIMITED",
            policyUrl: "https://adara.com/privacy-promise/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 63,
            name: "Avocet Systems Limited",
            policyUrl: "http://www.avocet.io/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 3],
            featureIds: []
        }, {
            id: 51,
            name: "xAd, Inc. dba GroundTruth",
            policyUrl: "https://www.groundtruth.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 49,
            name: "Tradelab, SAS",
            policyUrl: "http://tradelab.com/en/privacy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: [1, 2, 3]
        }, {
            id: 45,
            name: "Smart Adserver",
            policyUrl: "https://smartadserver.com/end-user-privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [3, 5],
            featureIds: [3]
        }, {
            id: 52,
            name: "The Rubicon Project, Inc. ",
            policyUrl: "http://www.rubiconproject.com/rubicon-project-yield-optimization-privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 71,
            name: "Dataxu, Inc. ",
            policyUrl: "https://www.dataxu.com/about-us/privacy/data-collection-platform/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 79,
            name: "MediaMath, Inc.",
            policyUrl: "http://www.mediamath.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 91,
            name: "Criteo SA",
            policyUrl: "https://www.criteo.com/privacy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 85,
            name: "Crimtan Holdings Limited",
            policyUrl: "https://crimtan.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 16,
            name: "RTB House S.A.",
            policyUrl: "https://www.rtbhouse.com/privacy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 86,
            name: "Scene Stealer Limited",
            policyUrl: "http://scenestealer.tv/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 94,
            name: "Blis Media Limited",
            policyUrl: "http://www.blis.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 73,
            name: "Simplifi Holdings Inc.",
            policyUrl: "https://www.simpli.fi/site-privacy-policy2/",
            purposeIds: [2, 3, 4, 5],
            legIntPurposeIds: [1],
            featureIds: [2, 3]
        }, {
            id: 33,
            name: "ShareThis, Inc.",
            policyUrl: "http://www.sharethis.com/privacy/",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [2]
        }, {
            id: 20,
            name: "N Technologies Inc.",
            policyUrl: "https://n.rich/privacy-notice",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [2]
        }, {
            id: 55,
            name: "Madison Logic, Inc.",
            policyUrl: "https://www.madisonlogic.com/privacy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 53,
            name: "Sirdata",
            policyUrl: "https://www.sirdata.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 69,
            name: "OpenX",
            policyUrl: "https://www.openx.com/legal/privacy-policy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 98,
            name: "GroupM",
            policyUrl: "https://www.groupm.com/privacy-policy",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [1, 2, 3]
        }, {
            id: 62,
            name: "Justpremium BV",
            policyUrl: "http://justpremium.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 19,
            name: "Intent Media, Inc.",
            policyUrl: "https://intentmedia.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [2]
        }, {
            id: 43,
            name: "Vdopia DBA Chocolate Platform",
            policyUrl: "https://chocolateplatform.com/privacy-policy/",
            deletedDate: "2019-08-06T00:00:00Z",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 36,
            name: "RhythmOne, LLC",
            policyUrl: "https://www.rhythmone.com/privacy-policy",
            purposeIds: [5],
            legIntPurposeIds: [1, 2, 3, 4],
            featureIds: [1, 2, 3]
        }, {
            id: 80,
            name: "Sharethrough, Inc",
            policyUrl: "https://platform-cdn.sharethrough.com/privacy-policy",
            purposeIds: [3, 5],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 81,
            name: "PulsePoint, Inc.",
            policyUrl: "https://www.pulsepoint.com/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 23,
            name: "Amobee, Inc. ",
            policyUrl: "https://www.amobee.com/trust/privacy-guidelines",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 35,
            name: "Purch Group, Inc.",
            policyUrl: "http://www.purch.com/privacy-policy/",
            deletedDate: "2019-05-30T00:00:00Z",
            purposeIds: [1],
            legIntPurposeIds: [3, 5],
            featureIds: []
        }, {
            id: 67,
            name: "LifeStreet Corporation",
            policyUrl: "http://www.lifestreet.com/privacy/",
            deletedDate: "2019-05-30T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 3,
            name: "affilinet",
            policyUrl: "https://www.affili.net/de/footeritem/datenschutz",
            deletedDate: "2019-06-21T00:00:00Z",
            purposeIds: [2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 74,
            name: "Admotion SRL",
            policyUrl: "http://www.admotion.com/policy/",
            deletedDate: "2019-07-24T00:00:00Z",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 191,
            name: "realzeit GmbH",
            policyUrl: "https://realzeitmedia.com/privacy.html",
            deletedDate: "2019-04-29T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 197,
            name: "Switch Concepts Limited",
            policyUrl: "https://www.switchconcepts.com/privacy-policy",
            deletedDate: "2019-07-26T00:00:00Z",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 390,
            name: "Parsec Media Inc.",
            policyUrl: "www.parsec.media/privacy-policy",
            deletedDate: "2019-06-27T00:00:00Z",
            purposeIds: [1, 3],
            legIntPurposeIds: [5],
            featureIds: [1, 3]
        }, {
            id: 459,
            name: "uppr GmbH",
            policyUrl: "https://netzwerk.uppr.de/privacy-policy.do",
            deletedDate: "2019-06-17T00:00:00Z",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 5],
            featureIds: []
        }, {
            id: 221,
            name: "LEMO MEDIA GROUP LIMITED",
            policyUrl: "http://www.lemomedia.com/terms.pdf",
            deletedDate: "2019-06-28T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 478,
            name: "RevLifter Ltd",
            policyUrl: "https://www.revlifter.com/privacy-policy",
            deletedDate: "2019-07-15T00:00:00Z",
            purposeIds: [1],
            legIntPurposeIds: [2],
            featureIds: []
        }, {
            id: 500,
            name: "Turbo",
            policyUrl: "http://www.turboadv.com/white-rabbit-privacy-policy/",
            deletedDate: "2019-07-12T00:00:00Z",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 68,
            name: "Sizmek Technologies, Inc. ",
            policyUrl: "https://www.sizmek.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [2]
        }, {
            id: 75,
            name: "M32 Connect Inc",
            policyUrl: "https://m32.media/privacy-cookie-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 17,
            name: "Greenhouse Group BV (with its trademark LemonPI)",
            policyUrl: "https://www.lemonpi.io/privacy-policy/",
            deletedDate: "2019-08-06T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 61,
            name: "GumGum, Inc.",
            policyUrl: "https://gumgum.com/privacy-policy",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 40,
            name: "Active Agent AG",
            policyUrl: "http://www.active-agent.com/de/unternehmen/datenschutzerklaerung/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 76,
            name: "PubMatic, Inc.",
            policyUrl: "https://pubmatic.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: []
        }, {
            id: 89,
            name: "Tapad, Inc. ",
            policyUrl: "https://www.tapad.com/privacy",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 5],
            featureIds: [2]
        }, {
            id: 46,
            name: "Skimbit Ltd",
            policyUrl: "https://skimlinks.com/pages/privacy-policy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: [2]
        }, {
            id: 66,
            name: "adsquare GmbH",
            policyUrl: "https://www.adsquare.com/privacy",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 105,
            name: "Impression Desk Technologies Limited",
            policyUrl: "https://impressiondesk.com/privacy-policy/",
            deletedDate: "2019-08-06T00:00:00Z",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 41,
            name: "Adverline",
            policyUrl: "https://www.adverline.com/privacy/",
            purposeIds: [2],
            legIntPurposeIds: [1, 3],
            featureIds: []
        }, {
            id: 82,
            name: "Smaato, Inc.",
            policyUrl: "https://www.smaato.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 60,
            name: "Rakuten Marketing LLC",
            policyUrl: "https://rakutenmarketing.com/legal-notices/services-privacy-policy",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 70,
            name: "Yieldlab AG",
            policyUrl: "http://www.yieldlab.de/meta-navigation/datenschutz/",
            purposeIds: [],
            legIntPurposeIds: [1, 3],
            featureIds: [3]
        }, {
            id: 50,
            name: "Adform A/S",
            policyUrl: "https://site.adform.com/privacy-policy-opt-out/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 48,
            name: "NetSuccess, s.r.o.",
            policyUrl: "https://www.inres.sk/pp/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 100,
            name: "Fifty Technology Limited",
            policyUrl: "https://fifty.io/privacy-policy.php",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 21,
            name: "The Trade Desk",
            policyUrl: "https://www.thetradedesk.com/general/privacy-policy",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 110,
            name: "Hottraffic BV (DMA Institute)",
            policyUrl: "https://www.dma-institute.com/privacy-compliancy/",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 42,
            name: "Taboola Europe Limited",
            policyUrl: "https://www.taboola.com/privacy-policy",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 112,
            name: "Maytrics GmbH",
            policyUrl: "https://maytrics.com/node/2",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 77,
            name: "comScore, Inc.",
            policyUrl: "https://www.comscore.com/About-comScore/Privacy-Policy",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 109,
            name: "LoopMe Ltd",
            policyUrl: "https://loopme.com/privacy/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 120,
            name: "Eyeota Ptd Ltd",
            policyUrl: "https://www.eyeota.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1]
        }, {
            id: 93,
            name: "Adloox SA",
            policyUrl: "http://adloox.com/disclaimer",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 132,
            name: "Teads ",
            policyUrl: "https://teads.tv/privacy-policy/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 22,
            name: "admetrics GmbH",
            policyUrl: "https://admetrics.io/en/privacy_policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 102,
            name: "SlimCut Media SAS",
            policyUrl: "http://www.slimcutmedia.com/privacy-policy/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 108,
            name: "Rich Audience",
            policyUrl: "https://richaudience.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 18,
            name: "Widespace AB",
            policyUrl: "https://www.widespace.com/legal/privacy-policy-notice/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 122,
            name: "Avid Media Ltd",
            policyUrl: "http://www.avidglobalmedia.eu/privacy-policy.html",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 97,
            name: "LiveRamp, Inc.",
            policyUrl: "https://www.liveramp.com/service-privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 138,
            name: "ConnectAd Realtime GmbH",
            policyUrl: "http://connectadrealtime.com/privacy/",
            purposeIds: [1],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 72,
            name: "Nano Interactive GmbH",
            policyUrl: "http://www.nanointeractive.com/privacy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 127,
            name: "PIXIMEDIA SAS",
            policyUrl: "https://piximedia.com/privacy/",
            purposeIds: [1, 2, 4],
            legIntPurposeIds: [3, 5],
            featureIds: [3]
        }, {
            id: 136,
            name: "Ströer SSP GmbH",
            policyUrl: "https://www.stroeer.de/fileadmin/user_upload/Datenschutz.pdf",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 5],
            featureIds: [2, 3]
        }, {
            id: 111,
            name: "ShowHeroes GmbH",
            policyUrl: "http://showheroes.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: [3]
        }, {
            id: 56,
            name: "Confiant Inc.",
            policyUrl: "https://www.confiant.com/privacy",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 124,
            name: "Teemo SA",
            policyUrl: "https://teemo.co/fr/confidentialite/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 154,
            name: "YOC AG",
            policyUrl: "https://yoc.com/privacy/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 5],
            featureIds: [3]
        }, {
            id: 38,
            name: "Beemray Oy",
            policyUrl: "https://www.beemray.com/privacy-policy/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 101,
            name: "MiQ",
            policyUrl: "http://wearemiq.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 149,
            name: "ADman Interactive SL",
            policyUrl: "http://admanmedia.com/politica",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 151,
            name: "Admedo Ltd",
            policyUrl: "https://www.admedo.com/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3],
            featureIds: [3]
        }, {
            id: 153,
            name: "MADVERTISE MEDIA",
            policyUrl: "https://madvertise.com/en/gdpr/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 159,
            name: "Underdog Media LLC ",
            policyUrl: "https://underdogmedia.com/privacy-policy/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 157,
            name: "Seedtag Advertising S.L",
            policyUrl: "https://www.seedtag.com/en/privacy-policy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 145,
            name: "Snapsort Inc., operating as Sortable",
            policyUrl: "https://sortable.com/privacy",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 131,
            name: "ID5 Technology SAS",
            policyUrl: "https://www.id5.io/privacy",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 158,
            name: "Reveal Mobile, Inc",
            policyUrl: "https://revealmobile.com/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 147,
            name: "Adacado Technologies Inc. (DBA Adacado)",
            policyUrl: "https://www.adacado.com/privacy-policy-april-25-2018/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 130,
            name: "AdRoll Inc",
            policyUrl: "https://www.adrollgroup.com/privacy",
            purposeIds: [1],
            legIntPurposeIds: [2, 3],
            featureIds: [1, 2]
        }, {
            id: 129,
            name: "IPONWEB GmbH",
            policyUrl: "https://www.iponweb.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 128,
            name: "BIDSWITCH GmbH",
            policyUrl: "http://www.bidswitch.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 168,
            name: "EASYmedia GmbH",
            policyUrl: "https://login.rtbmarket.com/gdpr",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 164,
            name: "Outbrain UK Ltd",
            policyUrl: "https://www.outbrain.com/legal/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [4],
            featureIds: [1]
        }, {
            id: 144,
            name: "district m inc.",
            policyUrl: "https://districtm.net/en/page/platforms-data-and-privacy-policy/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 163,
            name: "Bombora Inc.",
            policyUrl: "https://bombora.com/privacy",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 173,
            name: "Yieldmo, Inc.",
            policyUrl: "https://www.yieldmo.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 88,
            name: "TreSensa, Inc.",
            policyUrl: "https://www.tresensa.com/eu-privacy",
            purposeIds: [1],
            legIntPurposeIds: [2, 3],
            featureIds: []
        }, {
            id: 78,
            name: "Flashtalking, Inc.",
            policyUrl: "http://www.flashtalking.com/privacypolicy/",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 59,
            name: "Sift Media, Inc",
            policyUrl: "https://www.sift.co/privacy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 114,
            name: "Sublime",
            policyUrl: "http://ayads.co/privacy.php",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 175,
            name: "FORTVISION",
            policyUrl: "http://fortvision.com/POC/index.html",
            deletedDate: "2019-08-09T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 133,
            name: "digitalAudience",
            policyUrl: "https://digitalaudience.io/legal/privacy-cookies/",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 14,
            name: "Adkernel LLC",
            policyUrl: "http://adkernel.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 180,
            name: "Thirdpresence Oy",
            policyUrl: "http://www.thirdpresence.com/privacy",
            purposeIds: [1],
            legIntPurposeIds: [3],
            featureIds: [3]
        }, {
            id: 183,
            name: "EMX Digital LLC",
            policyUrl: "https://emxdigital.com/privacy/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [2, 3]
        }, {
            id: 58,
            name: "33Across",
            policyUrl: "http://www.33across.com/privacy-policy",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 140,
            name: "Platform161",
            policyUrl: "https://platform161.com/cookie-and-privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 90,
            name: "Teroa S.A.",
            policyUrl: "https://www.e-planning.net/en/privacy.html",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: []
        }, {
            id: 141,
            name: "1020, Inc. dba Placecast and Ericsson Emodo",
            policyUrl: "https://www.ericsson-emodo.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [3]
        }, {
            id: 142,
            name: "Media.net Advertising FZ-LLC",
            policyUrl: "https://www.media.net/en/privacy-policy",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 5],
            featureIds: [3]
        }, {
            id: 209,
            name: "Delta Projects AB",
            policyUrl: "http://www.deltaprojects.com/data-collection-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 5],
            featureIds: [3]
        }, {
            id: 195,
            name: "advanced store GmbH",
            policyUrl: "http://www.advanced-store.com/de/datenschutz/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3],
            featureIds: [3]
        }, {
            id: 190,
            name: "video intelligence AG",
            policyUrl: "https://www.vi.ai/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 84,
            name: "Semasio GmbH",
            policyUrl: "http://www.semasio.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 4, 5],
            featureIds: []
        }, {
            id: 65,
            name: "Location Sciences AI Ltd",
            policyUrl: "https://www.locationsciences.ai/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 210,
            name: "Zemanta, Inc.",
            policyUrl: "http://www.zemanta.com/legal/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1]
        }, {
            id: 200,
            name: "Tapjoy, Inc.",
            policyUrl: "https://www.tapjoy.com/legal/#privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 188,
            name: "Sellpoints Inc.",
            policyUrl: "https://retargeter.com/service-privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 217,
            name: "2KDirect, Inc. (dba iPromote)",
            policyUrl: "https://www.ipromote.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 3],
            featureIds: []
        }, {
            id: 156,
            name: "Centro, Inc.",
            policyUrl: "https://www.centro.net/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1]
        }, {
            id: 194,
            name: "Rezonence Limited",
            policyUrl: "https://rezonence.com/privacy-policy/",
            purposeIds: [3, 5],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 226,
            name: "Publicis Media GmbH",
            policyUrl: "https://www.publicismedia.de/datenschutz/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1]
        }, {
            id: 198,
            name: "SYNC",
            policyUrl: "https://redirect.sync.tv/privacy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 227,
            name: "ORTEC B.V.",
            policyUrl: "https://www.ortecadscience.com/privacy-policy/",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 225,
            name: "Ligatus GmbH",
            policyUrl: "https://www.ligatus.com/en/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 5],
            featureIds: [3]
        }, {
            id: 205,
            name: "Adssets AB",
            policyUrl: "http://adssets.com/policy/",
            purposeIds: [],
            legIntPurposeIds: [3, 5],
            featureIds: []
        }, {
            id: 179,
            name: "Collective Europe Ltd.",
            policyUrl: "https://www.timeincuk.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 31,
            name: "Ogury Ltd.",
            policyUrl: "https://www.ogury.com/privacy/",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [2]
        }, {
            id: 92,
            name: "1plusX AG",
            policyUrl: "https://www.1plusx.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 155,
            name: "AntVoice",
            policyUrl: "https://www.antvoice.com/en/privacypolicy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 115,
            name: "smartclip Holding AG",
            policyUrl: "http://privacy-portal.smartclip.net/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 126,
            name: "DoubleVerify Inc.​",
            policyUrl: "https://www.doubleverify.com/privacy/",
            purposeIds: [5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 193,
            name: "Mediasmart Mobile S.L.",
            policyUrl: "http://mediasmart.io/privacy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 245,
            name: "IgnitionOne",
            policyUrl: "https://www.ignitionone.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 213,
            name: "emetriq GmbH",
            policyUrl: "https://www.emetriq.com/datenschutz/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 5],
            featureIds: [1, 2]
        }, {
            id: 244,
            name: "Leadplace - Temelio",
            policyUrl: "https://temelio.com/vie-privee",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 224,
            name: "adrule mobile GmbH",
            policyUrl: "https://www.adrule.net/de/datenschutz/",
            purposeIds: [2, 4],
            legIntPurposeIds: [1, 3, 5],
            featureIds: [3]
        }, {
            id: 174,
            name: "A Million Ads Limited",
            policyUrl: "https://www.amillionads.com/privacy-policy",
            deletedDate: "2019-08-06T00:00:00Z",
            purposeIds: [],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 192,
            name: "remerge GmbH",
            policyUrl: "https://remerge.io/privacy-policy.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 232,
            name: "Rockerbox, Inc",
            policyUrl: "http://rockerbox.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 5],
            featureIds: [3]
        }, {
            id: 256,
            name: "Bounce Exchange, Inc",
            policyUrl: "https://www.bouncex.com/privacy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 234,
            name: "ZBO Media",
            policyUrl: "https://zbo.media/mentions-legales/politique-de-confidentialite-service-publicitaire/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: [1, 2]
        }, {
            id: 246,
            name: "Smartology Limited",
            policyUrl: "https://www.smartology.net/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 241,
            name: "OneTag Ltd",
            policyUrl: "https://www.onetag.net/privacy/",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [1, 2, 3]
        }, {
            id: 254,
            name: "LiquidM Technology GmbH",
            policyUrl: "https://liquidm.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 5],
            featureIds: [3]
        }, {
            id: 215,
            name: "ARMIS SAS",
            policyUrl: "https://armis.tech/en/armis-personal-data-privacy-policy/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3],
            featureIds: [1, 2, 3]
        }, {
            id: 167,
            name: "Audiens S.r.l.",
            policyUrl: "http://www.audiens.com/privacy",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 240,
            name: "7Hops.com Inc. (ZergNet)",
            policyUrl: "https://zergnet.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 4, 5],
            featureIds: []
        }, {
            id: 235,
            name: "Bucksense Inc",
            policyUrl: "http://www.bucksense.com/platform-privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [2, 3]
        }, {
            id: 185,
            name: "Bidtellect, Inc",
            policyUrl: "https://www.bidtellect.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 258,
            name: "Adello Group AG",
            policyUrl: "https://www.adello.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 5],
            featureIds: [3]
        }, {
            id: 169,
            name: "RTK.IO, Inc",
            policyUrl: "http://www.rtk.io/privacy.html",
            purposeIds: [1, 4],
            legIntPurposeIds: [2, 3, 5],
            featureIds: [1, 3]
        }, {
            id: 208,
            name: "Spotad",
            policyUrl: "http://www.spotad.co/privacy-policy/",
            purposeIds: [2, 3],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 211,
            name: "AdTheorent, Inc",
            policyUrl: "http://adtheorent.com/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 229,
            name: "Digitize New Media Ltd",
            policyUrl: "http://www.digitize.ie/online-privacy",
            purposeIds: [2, 4],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 273,
            name: "Bannerflow AB",
            policyUrl: "https://www.bannerflow.com/privacy ",
            purposeIds: [],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 104,
            name: "Sonobi, Inc",
            policyUrl: "http://sonobi.com/privacy-policy/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3],
            featureIds: [1, 2, 3]
        }, {
            id: 162,
            name: "Unruly Group Ltd",
            policyUrl: "https://unruly.co/privacy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 5],
            featureIds: [1, 2]
        }, {
            id: 249,
            name: "Spolecznosci Sp. z o.o. Sp. k.",
            policyUrl: "https://www.spolecznosci.pl/polityka-prywatnosci",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 125,
            name: "Research Now Group, Inc",
            policyUrl: "https://www.valuedopinions.co.uk/privacy",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 170,
            name: "Goodway Group, Inc.",
            policyUrl: "https://goodwaygroup.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 160,
            name: "Netsprint SA",
            policyUrl: "http://spoldzielnia.nsaudience.pl/opt-out/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 189,
            name: "Intowow Innovation Ltd.",
            policyUrl: "http://www.intowow.com/privacy/",
            deletedDate: "2019-08-12T00:00:00Z",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 279,
            name: "Mirando GmbH &amp; Co KG",
            policyUrl: "https://wwwmirando.de/datenschutz/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 269,
            name: "Sanoma Media Finland",
            policyUrl: "https://sanoma.fi/tietoa-meista/tietosuoja/",
            deletedDate: "2019-08-07T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 276,
            name: "Viralize SRL",
            policyUrl: "https://viralize.com/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 87,
            name: "Genius Sports Media Limited",
            policyUrl: "http://www.geniussports.com/privacy-policy/",
            purposeIds: [2, 4],
            legIntPurposeIds: [1, 3, 5],
            featureIds: [2, 3]
        }, {
            id: 182,
            name: "Collective, Inc. dba Visto",
            policyUrl: "https://www.vistohub.com/privacy-policy/",
            deletedDate: "2019-07-26T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 255,
            name: "Onnetwork Sp. z o.o.",
            policyUrl: "https://www.onnetwork.tv/pp_services.php",
            purposeIds: [2, 3, 5],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 203,
            name: "Revcontent, LLC",
            policyUrl: "https://faq.revcontent.com/customer/en/portal/articles/2703838-revcontent-s-privacy-and-cookie-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 260,
            name: "RockYou, Inc.",
            policyUrl: "https://rockyou.com/privacy-policy/",
            deletedDate: "2019-08-09T00:00:00Z",
            purposeIds: [3],
            legIntPurposeIds: [1, 2, 5],
            featureIds: [3]
        }, {
            id: 237,
            name: "LKQD, a division of Nexstar Digital, LLC.",
            policyUrl: "http://www.lkqd.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [2, 3]
        }, {
            id: 274,
            name: "Golden Bees",
            policyUrl: "http://goldenbees.fr/notre-politique-de-confidentialite/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 280,
            name: "Spot.IM Ltd.",
            policyUrl: "http://spot.im/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 239,
            name: "Triton Digital Canada Inc.",
            policyUrl: "https://www.tritondigital.com/privacy-policies",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: []
        }, {
            id: 177,
            name: "plista GmbH",
            policyUrl: "https://www.plista.com/about/privacy/",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 201,
            name: "TimeOne",
            policyUrl: "https://privacy.timeonegroup.com/en/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [5],
            featureIds: [1, 2, 3]
        }, {
            id: 150,
            name: "Inskin Media LTD",
            policyUrl: "http://www.inskinmedia.com/privacy-policy.html",
            purposeIds: [2, 3, 5],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 252,
            name: "Jaduda GmbH",
            policyUrl: "https://www.jadudamobile.com/datenschutzerklaerung/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 248,
            name: "Converge-Digital",
            policyUrl: "https://converge-digital.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [3]
        }, {
            id: 161,
            name: "Smadex SL",
            policyUrl: "http://smadex.com/end-user-privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 285,
            name: "Comcast International France SAS",
            policyUrl: "http://freewheel.tv/privacy-policy",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 228,
            name: "McCann Discipline LTD",
            policyUrl: "https://www.primis.tech/wp-content/uploads/2019/03/Primis-Privacy-Policy-GDPR.pdf",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 299,
            name: "AdClear GmbH",
            policyUrl: "https://www.adclear.de/datenschutzerklaerung/",
            purposeIds: [1, 5],
            legIntPurposeIds: [2, 3, 4],
            featureIds: [1, 2]
        }, {
            id: 277,
            name: "Codewise Sp. z o.o. Sp. k",
            policyUrl: "https://voluumdsp.com/end-user-privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 259,
            name: "ADYOULIKE SA",
            policyUrl: "https://www.adyoulike.com/privacy_policy.php",
            purposeIds: [2, 4],
            legIntPurposeIds: [1, 3, 5],
            featureIds: []
        }, {
            id: 289,
            name: "mobalo GmbH",
            policyUrl: "https://www.mobalo.com/datenschutz/",
            deletedDate: "2019-07-25T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 272,
            name: "A.Mob",
            policyUrl: "https://www.we-are-adot.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 230,
            name: "Steel House, Inc.",
            policyUrl: "https://steelhouse.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 253,
            name: "Improve Digital International BV",
            policyUrl: "https://www.improvedigital.com/platform-privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 304,
            name: "On Device Research Limited",
            policyUrl: "https://s.on-device.com/privacyPolicy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 314,
            name: "Keymantics",
            policyUrl: "https://www.keymantics.com/assets/privacy-policy.pdf",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 257,
            name: "R-TARGET",
            policyUrl: "http://www.r-target.com/privacy",
            deletedDate: "2019-08-26T00:00:00Z",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 317,
            name: "mainADV Srl",
            policyUrl: "http://www.mainad.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 278,
            name: "Integral Ad Science, Inc.",
            policyUrl: "https://integralads.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 291,
            name: "Qwertize",
            policyUrl: "https://www.qwertize.com/en/privacy",
            deletedDate: "2019-08-26T00:00:00Z",
            purposeIds: [1, 2, 4],
            legIntPurposeIds: [3, 5],
            featureIds: []
        }, {
            id: 295,
            name: "Sojern, Inc.",
            policyUrl: "https://www.sojern.com/privacy/product-privacy-policy/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 315,
            name: "Celtra, Inc.",
            policyUrl: "https://www.celtra.com/privacy-policy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 165,
            name: "SpotX",
            policyUrl: "https://www.spotx.tv/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 47,
            name: "ADMAN - Phaistos Networks, S.A.",
            policyUrl: "http://www.adman.gr/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 134,
            name: "SMARTSTREAM.TV GmbH",
            policyUrl: "https://www.smartstream.tv/en/privacy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 325,
            name: "Knorex Pte Ltd",
            policyUrl: "https://www.knorex.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 316,
            name: "Gamned",
            policyUrl: "https://www.gamned.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 318,
            name: "Accorp Sp. z o.o.",
            policyUrl: "http://www.instytut-pollster.pl/privacy-policy/",
            purposeIds: [2, 3, 4],
            legIntPurposeIds: [1, 5],
            featureIds: []
        }, {
            id: 199,
            name: "ADUX",
            policyUrl: "http://www.adux.com/donnees-personelles/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 236,
            name: "PowerLinks Media Limited",
            policyUrl: "https://www.powerlinks.com/privacy-policy/",
            purposeIds: [1, 2, 5],
            legIntPurposeIds: [3, 4],
            featureIds: [3]
        }, {
            id: 294,
            name: "Jivox Corporation",
            policyUrl: "https://www.jivox.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 143,
            name: "Connatix Native Exchange Inc.",
            policyUrl: "https://connatix.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 297,
            name: "Polar Mobile Group Inc.",
            policyUrl: "https://privacy.polar.me",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: []
        }, {
            id: 319,
            name: "Clipcentric, Inc.",
            policyUrl: "https://clipcentric.com/privacy.bhtml",
            purposeIds: [1, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 290,
            name: "Readpeak Oy",
            policyUrl: "http://readpeak.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 323,
            name: "Perform Media Services Ltd",
            policyUrl: "http://www.performgroup.com/media-privacy-notice",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 119,
            name: "S4M",
            policyUrl: "http://www.s4m.io/privacy-policy/",
            purposeIds: [2],
            legIntPurposeIds: [1, 3],
            featureIds: [1, 3]
        }, {
            id: 302,
            name: "Mobile Professionals BV",
            policyUrl: "https://mobpro.com/privacy.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 212,
            name: "usemax advertisement (Emego GmbH)",
            policyUrl: "http://www.usemax.de/?l=privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 264,
            name: "Adobe Advertising Cloud",
            policyUrl: "https://www.adobe.com/nz/privacy/marketing-cloud.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 44,
            name: "The ADEX GmbH",
            policyUrl: "https://www.theadex.com/privacy-opt-out/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 282,
            name: "Welect GmbH",
            policyUrl: "https://www.welect.de/datenschutz",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 238,
            name: "StackAdapt",
            policyUrl: "https://www.stackadapt.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 284,
            name: "WEBORAMA",
            policyUrl: "https://weborama.com/privacy_en/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 148,
            name: "Liveintent Inc.",
            policyUrl: "https://liveintent.com/services-privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 64,
            name: "DigiTrust / IAB Tech Lab",
            policyUrl: "http://www.digitru.st/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 301,
            name: "zeotap GmbH",
            policyUrl: "https://www.zeotap.com/privacy_policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 275,
            name: "TabMo SAS",
            policyUrl: "http://static.tabmo.io.s3.amazonaws.com/privacy-policy/index.html",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [1, 3]
        }, {
            id: 310,
            name: "Schibsted Classified Media Spain, S.L.",
            policyUrl: "https://www.vibbo.com/privacidad.htm?ca=0_s",
            purposeIds: [],
            legIntPurposeIds: [4],
            featureIds: []
        }, {
            id: 139,
            name: "Permodo GmbH",
            policyUrl: "https://permodo.com/de/privacy.html",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 326,
            name: "AdTiming Technology Company Limited",
            policyUrl: "http://www.adtiming.com/en/privacypolicy.html",
            purposeIds: [3, 5],
            legIntPurposeIds: [1, 2, 4],
            featureIds: []
        }, {
            id: 262,
            name: "Fyber ",
            policyUrl: "https://www.fyber.com/legal/privacy-policy/",
            purposeIds: [3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 331,
            name: "ad6media",
            policyUrl: "https://www.ad6media.fr/privacy",
            purposeIds: [1, 2, 4],
            legIntPurposeIds: [3, 5],
            featureIds: [2, 3]
        }, {
            id: 345,
            name: "The Kantar Group Limited",
            policyUrl: "http://www.kantar.com/cookies-policies",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 308,
            name: "Rockabox Media Ltd",
            policyUrl: "http://scoota.com/privacy-policy",
            purposeIds: [1],
            legIntPurposeIds: [2, 3],
            featureIds: []
        }, {
            id: 270,
            name: "Marfeel Solutions S.L",
            policyUrl: "https://www.marfeel.com/privacy-policy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 333,
            name: "InMobi Pte Ltd",
            policyUrl: "https://www.inmobi.com/privacy-policy-for-eea",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 202,
            name: "Telaria, Inc",
            policyUrl: "https://telaria.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 328,
            name: "Gemius SA",
            policyUrl: "https://www.gemius.com/cookie-policy.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 281,
            name: "Wizaly",
            policyUrl: "https://www.wizaly.com/terms-of-use#privacy-policy",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 354,
            name: "Apester Ltd",
            policyUrl: "https://apester.com/privacy-policy/",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: []
        }, {
            id: 320,
            name: "Adelphic LLC",
            policyUrl: "https://adelphic.com/platform/privacy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 359,
            name: "Aerserv LLC",
            policyUrl: "https://www.aerserv.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 265,
            name: "Instinctive, Inc.",
            policyUrl: "https://instinctive.io/privacy",
            purposeIds: [2, 3, 4],
            legIntPurposeIds: [1, 5],
            featureIds: []
        }, {
            id: 349,
            name: "Optomaton UG",
            policyUrl: "http://optomaton.com/privacy.html",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 288,
            name: "Video Media Groep B.V.",
            policyUrl: "http://www.videomediagroup.com/wp-content/uploads/2016/01/Privacy-policy-VMG.pdf",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: []
        }, {
            id: 266,
            name: "Digilant Spain, SLU",
            policyUrl: "https://www.digilant.com/es/politica-privacidad/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1]
        }, {
            id: 339,
            name: "Vuble",
            policyUrl: "https://www.vuble.tv/us/privacy",
            deletedDate: "2019-08-26T00:00:00Z",
            purposeIds: [2, 3, 4, 5],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 303,
            name: "Orion Semantics",
            policyUrl: "http://static.orion-semantics.com/privacy.html",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 261,
            name: "Signal Digital Inc.",
            policyUrl: "https://www.signal.co/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 83,
            name: "Visarity Technologies GmbH",
            policyUrl: "http://primo.design/docs/PrivacyPolicyPrimo.html",
            purposeIds: [5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 343,
            name: "DIGITEKA Technologies",
            policyUrl: "https://www.ultimedia.com/POLICY.html",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 330,
            name: "Linicom",
            policyUrl: "https://www.linicom.com/privacy/",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: []
        }, {
            id: 231,
            name: "Acuityads Inc.",
            policyUrl: "https://www.acuityads.com/privacy-policy/",
            deletedDate: "2019-08-07T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 216,
            name: "Mindlytix SAS",
            policyUrl: "http://mindlytix.com/privacy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 360,
            name: "Permutive Technologies, Inc.",
            policyUrl: "https://permutive.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1],
            featureIds: [1, 2]
        }, {
            id: 361,
            name: "Permutive Ltd.",
            policyUrl: "https://permutive.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1],
            featureIds: [1, 2]
        }, {
            id: 311,
            name: "Mobfox US LLC",
            policyUrl: "https://www.mobfox.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 358,
            name: "MGID Inc.",
            policyUrl: "https://www.mgid.com/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1]
        }, {
            id: 152,
            name: "Meetrics GmbH",
            policyUrl: "https://www.meetrics.com/en/data-privacy/",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 251,
            name: "Yieldlove GmbH",
            policyUrl: "http://www.yieldlove.com/cookie-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 371,
            name: "Seeding Alliance GmbH",
            policyUrl: "http://seeding-alliance.de/datenschutz",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 344,
            name: "My6sense Inc.",
            policyUrl: "https://my6sense.com/privacy-policy/",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [2, 4],
            featureIds: []
        }, {
            id: 347,
            name: "Ezoic Inc.",
            policyUrl: "https://www.ezoic.com/terms/",
            purposeIds: [2, 4, 5],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 218,
            name: "Bigabid Media Ltd",
            policyUrl: "http://www.bigabid.com/data-protection/gdpr",
            deletedDate: "2019-08-26T00:00:00Z",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [2, 3]
        }, {
            id: 350,
            name: "Free Stream Media Corp. dba Samba TV",
            policyUrl: "https://samba.tv/legal/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 351,
            name: "Samba TV UK Limited",
            policyUrl: "https://samba.tv/legal/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 341,
            name: "Somo Audience Corp",
            policyUrl: "https://somoaudience.com/legal/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3],
            featureIds: [1, 2, 3]
        }, {
            id: 380,
            name: "Vidoomy Media SL",
            policyUrl: "http://vidoomy.com/privacy-policy.html",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [2, 3]
        }, {
            id: 378,
            name: "communicationAds GmbH &amp; Co. KG",
            policyUrl: "https://www.communicationads.net/aboutus/privacy/",
            purposeIds: [],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 369,
            name: "Getintent USA, inc.",
            policyUrl: "https://getintent.com/privacy/",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 184,
            name: "mediarithmics SAS",
            policyUrl: "https://www.mediarithmics.com/en-us/content/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 368,
            name: "VECTAURY",
            policyUrl: "https://www.vectaury.io/en/personal-data",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 373,
            name: "Nielsen Marketing Cloud",
            policyUrl: "http://www.nielsen.com/us/en/privacy-statement/exelate-privacy-policy.html",
            purposeIds: [1, 2],
            legIntPurposeIds: [5],
            featureIds: [1, 2]
        }, {
            id: 214,
            name: "Digital Control GmbH &amp; Co. KG",
            policyUrl: "http://advolution.de/privacy.php",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 388,
            name: "numberly",
            policyUrl: "http://ads.1000mercis.com/fr.html",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 250,
            name: "Qriously",
            policyUrl: "https://www.qriously.com/privacy",
            purposeIds: [2, 3, 4],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 223,
            name: "Audience Trading Platform Ltd.",
            policyUrl: "https://atp.io/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: [2]
        }, {
            id: 384,
            name: "Pixalate, Inc.",
            policyUrl: "http://pixalate.com/privacypolicy/",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: []
        }, {
            id: 387,
            name: "Triapodi Ltd.",
            policyUrl: "https://appreciate.mobi/page.html#/end-user-privacy-policy",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 312,
            name: "Exactag GmbH",
            policyUrl: "https://www.exactag.com/en/data-privacy/",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 178,
            name: "Affectv Ltd",
            policyUrl: "https://affectv.com/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 377,
            name: "AddApptr GmbH",
            policyUrl: "https://www.addapptr.com/data-privacy",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 382,
            name: "The Reach Group GmbH",
            policyUrl: "https://www.reachgroup.com/en/privacy-statement/",
            purposeIds: [1, 2, 4, 5],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 206,
            name: "Hybrid Adtech GmbH",
            policyUrl: "https://hybrid.ai/data_protection_policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 403,
            name: "Mobusi Mobile Advertising S.L.",
            policyUrl: "https://www.mobusi.com/privacy.en.html",
            purposeIds: [1, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 385,
            name: "Oracle",
            policyUrl: "https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [2]
        }, {
            id: 404,
            name: "Duplo Media AS",
            policyUrl: "https://www.easy-ads.com/privacypolicy.htm",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: []
        }, {
            id: 242,
            name: "twiago GmbH",
            policyUrl: "https://www.twiago.com/datenschutz/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [2, 3]
        }, {
            id: 376,
            name: "Pocketmath Pte Ltd",
            policyUrl: "https://www.pocketmath.com/privacy-policy",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 402,
            name: "Effiliation",
            policyUrl: "https://inter.effiliation.com/politique-confidentialite.html",
            purposeIds: [2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 413,
            name: "Eulerian Technologies",
            policyUrl: "https://www.eulerian.com/en/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 400,
            name: "Whenever Media Ltd",
            policyUrl: "https://www.whenevermedia.com/privacy-policy",
            deletedDate: "2019-07-29T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 171,
            name: "Webedia",
            policyUrl: "http://www.webedia-group.com/site/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 398,
            name: "Yormedia Solutions Ltd",
            policyUrl: "http://www.yormedia.com/privacy-and-cookies-notice/",
            deletedDate: "2019-08-06T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 415,
            name: "Seenthis AB",
            policyUrl: "https://seenthis.co/privacy-notice-2018-04-18.pdf",
            purposeIds: [],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 263,
            name: "Nativo, Inc.",
            policyUrl: "https://www.nativo.com/interest-based-ads",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 329,
            name: "Browsi Mobile Ltd",
            policyUrl: "http://gobrowsi.com/browsi-privacy-policy/",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 389,
            name: "Bidmanagement GmbH",
            policyUrl: "https://www.adspert.net/en/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 337,
            name: "SheMedia, LLC",
            policyUrl: "http://corporate.shemedia.com/faq/ad-services-privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 422,
            name: "Brand Metrics Sweden AB",
            policyUrl: "https://collector.brandmetrics.com/brandmetrics_privacypolicy.pdf",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 421,
            name: "LeftsnRight, Inc. dba LIQWID",
            policyUrl: "https://liqwid.solutions/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 426,
            name: "TradeTracker",
            policyUrl: "https://tradetracker.com/privacy-policy/",
            deletedDate: "2019-08-21T00:00:00Z",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 5],
            featureIds: [2]
        }, {
            id: 394,
            name: "AudienceProject Aps",
            policyUrl: "https://privacy.audienceproject.com",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 287,
            name: "Avazu Inc.",
            policyUrl: "http://avazuinc.com/opt-out/",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 4],
            featureIds: [3]
        }, {
            id: 243,
            name: "Cloud Technologies S.A.",
            policyUrl: "https://www.onaudience.com/internet-advertising-privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 113,
            name: "iotec global Ltd.",
            policyUrl: "https://www.iotecglobal.com/privacy-policy/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 338,
            name: "dunnhumby Germany GmbH",
            policyUrl: "https://www.sociomantic.com/privacy/en/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 405,
            name: "IgnitionAi Ltd",
            policyUrl: "https://www.isitelab.io/default.aspx",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: [2]
        }, {
            id: 416,
            name: "Commanders Act",
            policyUrl: "https://www.commandersact.com/en/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 434,
            name: "DynAdmic",
            policyUrl: "http://eu.dynadmic.com/privacy-policy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [2, 4],
            featureIds: [1, 3]
        }, {
            id: 435,
            name: "SINGLESPOT SAS ",
            policyUrl: "https://www.singlespot.com/privacy_policy?locale=fr",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [1, 3]
        }, {
            id: 409,
            name: "Arrivalist Co.",
            policyUrl: "https://www.arrivalist.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 5],
            featureIds: [1, 2]
        }, {
            id: 321,
            name: "Ziff Davis LLC",
            policyUrl: "http://www.ziffdavis.com/privacy-policy",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 436,
            name: "INVIBES GROUP",
            policyUrl: "http://www.invibes.com/terms",
            purposeIds: [2, 3, 4],
            legIntPurposeIds: [1, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 442,
            name: "R-Advertising",
            policyUrl: "http://www.tradedoubler.com/en/privacy-policy/",
            deletedDate: "2019-08-20T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 362,
            name: "Myntelligence Limited",
            policyUrl: "http://www.myntelligence.com/privacy-page/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 418,
            name: "PROXISTORE",
            policyUrl: "https://www.proxistore.com/common/en/cgv",
            purposeIds: [1],
            legIntPurposeIds: [3],
            featureIds: [3]
        }, {
            id: 449,
            name: "Mobile Journey B.V.",
            policyUrl: "https://mobilejourney.com/Privacy-Policy",
            deletedDate: "2019-09-05T00:00:00Z",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 5],
            featureIds: [3]
        }, {
            id: 443,
            name: "Tradedoubler AB",
            policyUrl: "https://www.tradedoubler.com/en/privacy-policy/",
            deletedDate: "2019-08-13T00:00:00Z",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: [2]
        }, {
            id: 429,
            name: "Signals",
            policyUrl: "https://signalsdata.com/platform-cookie-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 335,
            name: "Beachfront Media LLC",
            policyUrl: "http://beachfront.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: []
        }, {
            id: 407,
            name: "Publishers Internationale Pty Ltd",
            policyUrl: "https://www.pi-rate.com.au/privacy.html",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 427,
            name: "Proxi.cloud Sp. z o.o.",
            policyUrl: "https://proxi.cloud/info/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 374,
            name: "Bmind a Sales Maker Company, S.L.",
            policyUrl: "http://www.bmind.es/legal-notice/",
            purposeIds: [1, 2, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 438,
            name: "Ooyala Inc",
            policyUrl: "https://ooyala.com/privacy",
            deletedDate: "2019-08-13T00:00:00Z",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 450,
            name: "Neodata Group srl",
            policyUrl: "https://www.neodatagroup.com/en/security-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 3]
        }, {
            id: 452,
            name: "Innovid Inc.",
            policyUrl: "http://www.innovid.com/privacy-policy",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [2]
        }, {
            id: 444,
            name: "Playbuzz Ltd. ",
            policyUrl: "https://www.playbuzz.com/PrivacyPolicy",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 412,
            name: "Cxense ASA",
            policyUrl: "https://www.cxense.com/about-us/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 454,
            name: "Adimo",
            policyUrl: "https://adimo.co/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [5],
            featureIds: [3]
        }, {
            id: 455,
            name: "GDMServices, Inc. d/b/a FiksuDSP",
            policyUrl: "https://fiksu.com/privacy-policy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 298,
            name: "Cuebiq Inc.",
            policyUrl: "https://www.cuebiq.com/privacypolicy/",
            deletedDate: "2019-08-30T00:00:00Z",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 423,
            name: "travel audience GmbH",
            policyUrl: "https://travelaudience.com/product-privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 397,
            name: "Demandbase, Inc. ",
            policyUrl: "https://www.demandbase.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 381,
            name: "Solocal",
            policyUrl: "https://client.adhslx.com/privacy.html ",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 425,
            name: "ADRINO Sp. z o.o.",
            policyUrl: "http://www.adrino.pl/ciasteczkowa-polityka/",
            deletedDate: "2019-09-05T00:00:00Z",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 365,
            name: "Forensiq LLC",
            policyUrl: "https://impact.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: []
        }, {
            id: 447,
            name: "Adludio Ltd",
            policyUrl: "https://adludio.com/privacypolicy",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 410,
            name: "Adtelligent Inc.",
            policyUrl: "https://adtelligent.com/privacy-policy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 137,
            name: "mbr targeting GmbH",
            policyUrl: "https://privacy.mbr-targeting.com/?optedIn=true",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3],
            featureIds: []
        }, {
            id: 395,
            name: "PREX Programmatic Exchange GmbH&amp;Co KG",
            policyUrl: "http://www.programmatic-exchange.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 5],
            featureIds: []
        }, {
            id: 462,
            name: "bidstack ltd",
            policyUrl: "https://bidstack.com/policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 466,
            name: "TACTIC™ Real-Time Marketing AS",
            policyUrl: "https://tacticrealtime.com/privacy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 340,
            name: "Yieldr UK",
            policyUrl: "https://www.yieldr.com/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 3]
        }, {
            id: 431,
            name: "White Ops, Inc.",
            policyUrl: "https://www.whiteops.com/privacy",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: [1, 3]
        }, {
            id: 336,
            name: "Telecoming S.A.",
            policyUrl: "http://www.telecoming.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4],
            featureIds: [3]
        }, {
            id: 430,
            name: "Ad Unity Ltd",
            policyUrl: "http://www.adunity.com/privacy-policy.html",
            deletedDate: "2019-08-13T00:00:00Z",
            purposeIds: [],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 346,
            name: "Cybba, Inc.",
            policyUrl: "http://cybba.com/about/legal/data-processing-agreement/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 469,
            name: "Zeta Global",
            policyUrl: "https://zetaglobal.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 440,
            name: "DEFINE MEDIA GMBH",
            policyUrl: "http://www.definemedia.de/datenschutz-conative/",
            purposeIds: [2, 3, 4],
            legIntPurposeIds: [1, 5],
            featureIds: []
        }, {
            id: 375,
            name: "Affle International",
            policyUrl: "https://affle.com/privacy-policy ",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 196,
            name: "AdElement Media Solutions Pvt Ltd",
            policyUrl: "http://adelement.com/privacy-policy.html",
            purposeIds: [1, 2, 4],
            legIntPurposeIds: [3, 5],
            featureIds: [3]
        }, {
            id: 268,
            name: "Social Tokens Ltd. ",
            policyUrl: "http://woobi.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 475,
            name: "TAPTAP Networks SL",
            policyUrl: "http://www.taptapnetworks.com/privacy_policy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 474,
            name: "hbfsTech",
            policyUrl: "http://www.hbfstech.com/fr/privacy.html",
            purposeIds: [],
            legIntPurposeIds: [1, 2],
            featureIds: []
        }, {
            id: 448,
            name: "TARGETSPOT BELGIUM SPRL",
            policyUrl: "http://marketing.targetspot.com/Targetspot/Legal/TargetSpot%20Privacy%20Policy%20-%20June%202018.pdf",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 428,
            name: "Internet BillBoard a.s.",
            policyUrl: "http://www.ibillboard.com/en/privacy-information/",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: []
        }, {
            id: 461,
            name: "B2B Media Group EMEA GmbH",
            policyUrl: "https://www.selfcampaign.com/static/privacy",
            deletedDate: "2019-08-14T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 476,
            name: "HIRO Media Ltd",
            policyUrl: "http://hiro-media.com/privacy.php",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1]
        }, {
            id: 480,
            name: "pilotx.tv",
            policyUrl: "https://pilotx.tv/privacy/",
            purposeIds: [2, 3],
            legIntPurposeIds: [1, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 366,
            name: "CerebroAd.com s.r.o.",
            policyUrl: "https://www.cerebroad.com/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 392,
            name: "Ströer Mobile Performance GmbH",
            policyUrl: "https://stroeermobileperformance.com/?dl=privacy",
            purposeIds: [2, 3, 4],
            legIntPurposeIds: [1, 5],
            featureIds: [3]
        }, {
            id: 357,
            name: "Totaljobs Group Ltd ",
            policyUrl: "https://www.totaljobs.com/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 486,
            name: "Madington",
            policyUrl: "https://delivered-by-madington.com/dat-privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: []
        }, {
            id: 468,
            name: "Neustar, Inc.",
            policyUrl: "https://www.home.neustar/privacy",
            purposeIds: [1],
            legIntPurposeIds: [2, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 458,
            name: "AdColony, Inc.",
            policyUrl: "http://www.adcolony.com/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1]
        }, {
            id: 489,
            name: "YellowHammer Media Group",
            policyUrl: "http://www.yhmg.com/privacy-policy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 484,
            name: "Adledge",
            policyUrl: "https://adledge.com/data-privacy/",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 493,
            name: "Clicksco Digital Limited",
            policyUrl: "https://carbondmp.com/privacy.html",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [2]
        }, {
            id: 495,
            name: "Arcspire Limited",
            policyUrl: "https://s3.eu-west-2.amazonaws.com/public.arcspire.io/docs/ARCSPIRE-PrivacyPolicy_v1.0.pdf",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 496,
            name: "Automattic Inc.",
            policyUrl: "https://en.blog.wordpress.com/2017/12/04/updated-privacy-policy/",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 424,
            name: "KUPONA GmbH",
            policyUrl: "https://www.kupona.de/dsgvo/",
            purposeIds: [],
            legIntPurposeIds: [3, 5],
            featureIds: []
        }, {
            id: 408,
            name: "Kubient",
            policyUrl: "https://fidelity-media.com/privacy-policy/",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 473,
            name: "Sub2 Technologies Ltd",
            policyUrl: "http://www.sub2tech.com/privacy-policy/",
            purposeIds: [3, 4, 5],
            legIntPurposeIds: [1, 2],
            featureIds: []
        }, {
            id: 467,
            name: "Haensel AMS GmbH",
            policyUrl: "https://haensel-ams.com/data-privacy/",
            purposeIds: [3, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 488,
            name: "Opinary GmbH",
            policyUrl: "https://opinary.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 490,
            name: "PLAYGROUND XYZ EMEA LTD",
            policyUrl: "https://playground.xyz/privacy/privacy-policy.pdf",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 464,
            name: "Oracle AddThis",
            policyUrl: "http://www.addthis.com/privacy/privacy-policy/",
            purposeIds: [1, 2, 3, 4],
            legIntPurposeIds: [5],
            featureIds: [2]
        }, {
            id: 491,
            name: "Triboo Data Analytics",
            policyUrl: "https://www.shinystat.com/it/informativa_sito.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 499,
            name: "PurposeLab, LLC",
            policyUrl: "https://purposelab.com/privacy/",
            purposeIds: [5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 502,
            name: "NEXD",
            policyUrl: "https://nexd.com/privacy-policy",
            purposeIds: [3, 5],
            legIntPurposeIds: [1, 2, 4],
            featureIds: [3]
        }, {
            id: 465,
            name: "Schibsted Product and Tech UK",
            policyUrl: "https://www.schibsted.com/",
            deletedDate: "2019-07-26T00:00:00Z",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1]
        }, {
            id: 497,
            name: "Little Big Data sp.z.o.o.",
            policyUrl: "http://dtxngr.com/legal/",
            purposeIds: [1, 2, 4],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 492,
            name: "LotaData, Inc.",
            policyUrl: "https://lotadata.com/privacy_policy",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: [1]
        }, {
            id: 508,
            name: "Lucid Holdings, LLC",
            policyUrl: "https://luc.id/gdpr",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 512,
            name: "PubNative GmbH",
            policyUrl: "https://pubnative.net/privacy-notice/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 471,
            name: "FlexOffers.com, LLC",
            policyUrl: "https://www.flexoffers.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 494,
            name: "Cablato Limited",
            policyUrl: "https://cablato.com/privacy",
            purposeIds: [1, 2, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 516,
            name: "Pexi B.V.",
            policyUrl: "https://pexi.nl/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 507,
            name: "AdsWizz Inc.",
            policyUrl: "https://www.adswizz.com/our-privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 482,
            name: "UberMedia, Inc.",
            policyUrl: "http://ubermedia.com/company/products-privacy-policy/#ADDITIONAL_NOTICE",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 505,
            name: "Shopalyst Inc",
            policyUrl: "https://www.shortlyst.com/eu/privacy_terms.html",
            purposeIds: [1, 2],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 517,
            name: "SunMedia ",
            policyUrl: "https://www.sunmedia.tv/en/cookies",
            purposeIds: [1, 2],
            legIntPurposeIds: [3],
            featureIds: [2]
        }, {
            id: 518,
            name: "Accelerize Inc.",
            policyUrl: "https://getcake.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [5],
            featureIds: [2, 3]
        }, {
            id: 511,
            name: "Admixer EU GmbH",
            policyUrl: "https://admixer.net/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 479,
            name: "INFINIA MOBILE S.L.",
            policyUrl: "http://www.infiniamobile.com/privacy_policy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 513,
            name: "Shopstyle",
            policyUrl: "https://www.shopstyle.co.uk/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 509,
            name: "ATG Ad Tech Group GmbH",
            policyUrl: "http://advandeo.com/privacy-policy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 521,
            name: "netzeffekt GmbH",
            policyUrl: "https://www.netzeffekt.de/en/imprint",
            purposeIds: [1],
            legIntPurposeIds: [3, 5],
            featureIds: []
        }, {
            id: 487,
            name: "nugg.ad GmbH",
            policyUrl: "https://www.nugg.ad/en/privacy/general-information.html",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 5],
            featureIds: [1]
        }, {
            id: 515,
            name: "ZighZag",
            policyUrl: "https://zighzag.com/privacy",
            purposeIds: [1, 3],
            legIntPurposeIds: [5],
            featureIds: [1, 2]
        }, {
            id: 520,
            name: "ChannelSight ",
            policyUrl: "https://www.channelsight.com/privacypolicy/",
            purposeIds: [1],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 524,
            name: "The Ozone Project Limited",
            policyUrl: "https://ozoneproject.com/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 529,
            name: "Fidzup",
            policyUrl: "https://www.fidzup.com/en/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 528,
            name: "AppLift GmbH ",
            policyUrl: "https://www.applift.com/privacy-notice",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 527,
            name: "Jampp LTD",
            policyUrl: "https://jampp.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 506,
            name: "salesforce.com, inc.",
            policyUrl: "https://www.salesforce.com/company/privacy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 534,
            name: "SmartyAds Inc.",
            policyUrl: "https://smartyads.com/privacy-policy",
            purposeIds: [1, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 535,
            name: "INNITY",
            policyUrl: "https://www.innity.com/privacy-policy.php",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 514,
            name: "Uprival LLC",
            policyUrl: "https://uprival.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 522,
            name: "Tealium Inc",
            policyUrl: "https://tealium.com/privacy/",
            purposeIds: [2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 530,
            name: "Near Pte Ltd",
            policyUrl: "https://near.co/privacy",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 539,
            name: "AdDefend GmbH",
            policyUrl: "https://www.addefend.com/en/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 501,
            name: "Alliance Gravity Data Media",
            policyUrl: "https://www.alliancegravity.com/politiquedeprotectiondesdonneespersonnelles",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 519,
            name: "Chargeads",
            policyUrl: "https://www.chargeplatform.com/privacy",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 523,
            name: "X-Mode Social, Inc.",
            policyUrl: "http://xmode.io/privacy-policy.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 537,
            name: "RUN, Inc.",
            policyUrl: "http://www.runads.com/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 531,
            name: "Smartclip Hispania SL",
            policyUrl: "http://rgpd-smartclip.com/",
            purposeIds: [1, 2, 3, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 536,
            name: "GlobalWebIndex",
            policyUrl: "http://legal.trendstream.net/non-panellist_privacy_policy",
            purposeIds: [1],
            legIntPurposeIds: [3, 5],
            featureIds: [1, 2]
        }, {
            id: 542,
            name: "Densou Trading Desk ApS",
            policyUrl: "https://densou.dk/Policy.html",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 525,
            name: "PUB OCEAN LIMITED",
            policyUrl: "https://rta.pubocean.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [5],
            featureIds: [3]
        }, {
            id: 544,
            name: "Kochava Inc.",
            policyUrl: "https://www.kochava.com/support-privacy/",
            purposeIds: [],
            legIntPurposeIds: [1, 5],
            featureIds: []
        }, {
            id: 543,
            name: "PaperG, Inc. dba Thunder Industries",
            policyUrl: "https://www.makethunder.com/privacy",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: []
        }, {
            id: 334,
            name: "Cydersoft",
            policyUrl: "http://www.videmob.com/privacy.html",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4],
            featureIds: [2, 3]
        }, {
            id: 551,
            name: "Illuma Technology Limited",
            policyUrl: "https://www.weareilluma.com/endddd",
            purposeIds: [1],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 540,
            name: "Tunnl BV",
            policyUrl: "https://tunnl.com/privacy.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 547,
            name: "Video Reach",
            policyUrl: "https://www.videoreach.de/about/privacy-policy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 546,
            name: "Smart Traffik",
            policyUrl: "https://smart-traffik.io/politique-de-confidentialite",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 541,
            name: "DeepIntent, Inc.",
            policyUrl: "https://www.deepintent.com/platform-privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 545,
            name: "ReigNN Platform Ltd.",
            policyUrl: "https://www.reignn.com/user-privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 439,
            name: "Bit Q Holdings Limited",
            policyUrl: "https://bitqueen.com/privacy",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 553,
            name: "Adhese",
            policyUrl: "https://adhese.com/privacy-and-cookie-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 556,
            name: "adhood.com",
            policyUrl: "http://v3.adhood.com/en/site/politikavekurallar/gizlilik.php?lang=en",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 550,
            name: "Happydemics",
            policyUrl: "https://www.iubenda.com/privacy-policy/69056167/full-legal",
            purposeIds: [5],
            legIntPurposeIds: [],
            featureIds: [1, 3]
        }, {
            id: 560,
            name: "Leiki Ltd.",
            policyUrl: "http://www.leiki.com/privacy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [4],
            featureIds: []
        }, {
            id: 554,
            name: "RMSi Radio Marketing Service interactive GmbH",
            policyUrl: "https://www.rms.de/datenschutz/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 498,
            name: "Dr. Banner",
            policyUrl: "https://drbanner.com/privacypolicy_en/",
            purposeIds: [1],
            legIntPurposeIds: [3],
            featureIds: [3]
        }, {
            id: 565,
            name: "Adobe Audience Manager",
            policyUrl: "https://www.adobe.com/privacy/policy.html",
            purposeIds: [1, 2, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 118,
            name: "Drawbridge, Inc.",
            policyUrl: "http://www.drawbridge.com/privacy/",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 572,
            name: "CHEQ AI TECHNOLOGIES LTD.",
            policyUrl: "http://www.cheq.ai/privacy",
            purposeIds: [1],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 571,
            name: "ViewPay",
            policyUrl: "http://viewpay.tv/mentions-legales/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 568,
            name: "Jointag S.r.l.",
            policyUrl: "https://www.jointag.com/privacy/kariboo/publisher/third/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 570,
            name: "Czech Publisher Exchange z.s.p.o.",
            policyUrl: "https://www.cpex.cz/pro-uzivatele/ochrana-soukromi/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 559,
            name: "Otto (GmbH &amp; Co KG)",
            policyUrl: "https://www.otto.de/shoppages/service/datenschutz",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [2]
        }, {
            id: 548,
            name: "LBC France",
            policyUrl: "https://www.leboncoin.fr/dc/cookies",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 569,
            name: "Kairos Fire",
            policyUrl: "https://www.kairosfire.com/wp-content/uploads/2019/02/Kairos-Fire_Politique-de-confidentialite%CC%81_jan19.pdf",
            purposeIds: [1, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 3]
        }, {
            id: 577,
            name: "Neustar on behalf of The Procter & Gamble Company",
            policyUrl: "https://www.pg.com/privacy/english/privacy_statement.shtml",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2]
        }, {
            id: 590,
            name: "Sourcepoint Technologies, Inc.",
            policyUrl: "https://www.sourcepoint.com/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: []
        }, {
            id: 587,
            name: "Localsensor B.V.",
            policyUrl: "https://www.localsensor.com/privacy.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 3]
        }, {
            id: 578,
            name: "MAIRDUMONT NETLETIX GmbH&amp;Co. KG",
            policyUrl: "https://mairdumont-netletix.com/datenschutz",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 580,
            name: "Goldbach Group AG",
            policyUrl: "https://goldbach.com/ch/de/datenschutz",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 593,
            name: "Programatica de publicidad S.L.",
            policyUrl: "https://datmean.com/politica-privacidad/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 574,
            name: "Realeyes OÜ",
            policyUrl: "https://www.realeyesit.com/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 581,
            name: "Mobilewalla, Inc.",
            policyUrl: "https://www.mobilewalla.com/business-services-privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 598,
            name: "audio content & control GmbH",
            policyUrl: "https://www.audio-cc.com/audiocc_privacy_policy.pdf",
            purposeIds: [1],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [3]
        }, {
            id: 596,
            name: "InsurAds Technologies SA.",
            policyUrl: "https://www.insurads.com/privacy.html",
            purposeIds: [3],
            legIntPurposeIds: [5],
            featureIds: [3]
        }, {
            id: 576,
            name: "StartApp Inc.",
            policyUrl: "https://www.startapp.com/policy/privacy-policy/",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 592,
            name: "Colpirio.com",
            policyUrl: "https://privacy-policy.colpirio.com/en/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 549,
            name: "Bandsintown Amplified LLC",
            policyUrl: "http://corp.bandsintown.com/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 597,
            name: "Better Banners A/S",
            policyUrl: "https://betterbanners.com/en/privacy",
            purposeIds: [],
            legIntPurposeIds: [3, 5],
            featureIds: []
        }, {
            id: 584,
            name: "Dynamic 1001 GmbH",
            policyUrl: "https://dynamic-tracking.com/Datenschutz.aspx",
            purposeIds: [3],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 601,
            name: "WebAds B.V",
            policyUrl: "http://privacy.webads.eu/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 599,
            name: "Maximus Live LLC",
            policyUrl: "https://maximusx.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [3, 4, 5],
            featureIds: [2, 3]
        }, {
            id: 604,
            name: "Join",
            policyUrl: "https://www.teamjoin.fr/privacy.html",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 606,
            name: "Impactify ",
            policyUrl: "https://impactify.io/privacy-policy/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: []
        }, {
            id: 608,
            name: "News and Media Holding, a.s.",
            policyUrl: "https://www.newsandmedia.sk/gdpr/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 602,
            name: "Online Solution Int Limited",
            policyUrl: "https://adsafety.net/privacy.html/",
            purposeIds: [1, 2],
            legIntPurposeIds: [3, 4, 5],
            featureIds: []
        }, {
            id: 612,
            name: "Adnami Aps",
            policyUrl: "https://www.adnami.io/adnami_privacy",
            purposeIds: [],
            legIntPurposeIds: [3],
            featureIds: []
        }, {
            id: 591,
            name: "Consumable, Inc.",
            policyUrl: "http://consumable.com/privacy-policy.html",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 614,
            name: "Market Resource Partners LLC",
            policyUrl: "https://www.mrpfd.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 615,
            name: "Adsolutions BV",
            policyUrl: "https://www.adsolutions.com/privacy-policy/",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 607,
            name: "ucfunnel Co., Ltd.",
            policyUrl: "https://www.ucfunnel.com/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 609,
            name: "Predicio",
            policyUrl: "http://www.predic.io/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 617,
            name: "Onfocus (Adagio)",
            policyUrl: "https://adagio.io/privacy",
            purposeIds: [],
            legIntPurposeIds: [1],
            featureIds: []
        }, {
            id: 620,
            name: "Blue",
            policyUrl: "http://www.getblue.io/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 610,
            name: "Azerion Holding B.V.",
            policyUrl: "https://azerion.com/business/privacy.html",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 621,
            name: "Seznam.cz, a.s.",
            policyUrl: "https://www.seznam.cz/ochranaudaju",
            purposeIds: [2, 3, 4],
            legIntPurposeIds: [1, 5],
            featureIds: [2, 3]
        }, {
            id: 624,
            name: "Norstat Danmark A/S",
            policyUrl: "https://panel.norstat.dk/sikkerhed",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 623,
            name: "Adprime Media Inc. ",
            policyUrl: "http://adprimehealth.com/privacy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 95,
            name: "Lotame Solutions, Inc.",
            policyUrl: "https://www.lotame.com/about-lotame/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 618,
            name: "BEINTOO SPA",
            policyUrl: "http://www.beintoo.com/privacy-cookie-policy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 619,
            name: "Capitaldata",
            policyUrl: "https://www.capitaldata.fr/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 625,
            name: "BILENDI SA",
            policyUrl: "https://www.maximiles.com/privacy-policy",
            purposeIds: [1, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2]
        }, {
            id: 628,
            name: ": Tappx",
            policyUrl: "https://www.tappx.com/en/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [2, 3],
            featureIds: [2, 3]
        }, {
            id: 630,
            name: "Contact Impact GmbH",
            policyUrl: "https://contactimpact.de/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 626,
            name: "Hivestack Inc.",
            policyUrl: "https://hivestack.com/privacy-policy",
            purposeIds: [],
            legIntPurposeIds: [1],
            featureIds: [3]
        }, {
            id: 631,
            name: "Relay42 Netherlands B.V.",
            policyUrl: "https://relay42.com/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 627,
            name: "D-Edge",
            policyUrl: "https://www.d-edge.com/privacy-policy/",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 638,
            name: "Passendo ApS",
            policyUrl: "https://www.passendo.com/users-privacy-policy/",
            purposeIds: [1, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 644,
            name: "Gamoshi LTD",
            policyUrl: "https://www.gamoshi.com/privacy-policy",
            purposeIds: [1],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 639,
            name: "Smile Wanted Group",
            policyUrl: "https://www.smilewanted.com/privacy.php",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 635,
            name: "WebMediaRM",
            policyUrl: "http://www.webmediarm.com/vie_privee_et_opposition_en.php",
            purposeIds: [3, 4],
            legIntPurposeIds: [1, 2, 5],
            featureIds: []
        }, {
            id: 579,
            name: "Ve Global",
            policyUrl: "https://www.ve.com/privacy-policy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 645,
            name: "Noster Finance S.L.",
            policyUrl: "https://www.finect.com/terminos-legales/politica-de-cookies",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 653,
            name: "Smartme Analytics",
            policyUrl: "http://smartmeapp.com/info/smartme/aviso_legal.php",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: [1]
        }, {
            id: 613,
            name: "Adserve.zone / Artworx AS",
            policyUrl: "http://adserve.zone/adserveprivacypolicy.html",
            purposeIds: [1],
            legIntPurposeIds: [3, 4, 5],
            featureIds: []
        }, {
            id: 573,
            name: "Dailymotion SA",
            policyUrl: "https://www.dailymotion.com/legal/privacy?localization=fr",
            purposeIds: [2, 3, 4, 5],
            legIntPurposeIds: [1],
            featureIds: [2]
        }, {
            id: 652,
            name: "Skaze",
            policyUrl: "http://www.skaze.fr/rgpd/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [1, 2, 3]
        }, {
            id: 646,
            name: "Notify",
            policyUrl: "https://notify-group.com/en/mentions-legales/",
            purposeIds: [1, 2, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 648,
            name: "TrueData Solutions, Inc.",
            policyUrl: "https://www.truedata.co/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 647,
            name: "Axel Springer Teaser Ad GmbH",
            policyUrl: "https://www.adup-tech.com/privacy",
            purposeIds: [2],
            legIntPurposeIds: [1, 3, 5],
            featureIds: []
        }, {
            id: 654,
            name: "GRAPHINIUM",
            policyUrl: "https://www.graphinium.com/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2]
        }, {
            id: 659,
            name: "Research and Analysis of Media in Sweden AB",
            policyUrl: "https://www2.rampanel.com/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [5],
            featureIds: []
        }, {
            id: 656,
            name: "Think Clever Media",
            policyUrl: "https://www.contentignite.com/privacy-policy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 504,
            name: "Alive & Kicking Global Limited",
            policyUrl: "http://www.mcsaatchiplc.com/privacy-and-cookies",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 657,
            name: "GP One GmbH",
            policyUrl: "https://www.gsi-one.org/de/privacy-policy.html",
            purposeIds: [],
            legIntPurposeIds: [1, 3, 5],
            featureIds: [3]
        }, {
            id: 655,
            name: "Sportradar AG",
            policyUrl: "https://www.sportradar.com/about-us/privacy/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 662,
            name: "Soundcast",
            policyUrl: "https://soundcast.fm/en/data-privacy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 665,
            name: "Digital East GmbH",
            policyUrl: "https://www.digitaleast.mobi/en/legal/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 650,
            name: "Telefonica Investigación y Desarrollo S.A.U",
            policyUrl: "http://www.cognitivemarketing.tid.es/",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 666,
            name: "BeOp",
            policyUrl: "https://beop.io/privacy",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [2, 3]
        }, {
            id: 663,
            name: "Mobsuccess",
            policyUrl: "https://www.mobsuccess.com/en/privacy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 658,
            name: "BLIINK SAS",
            policyUrl: "https://bliink.io/privacy-policy",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 667,
            name: "Liftoff Mobile, Inc.",
            policyUrl: "https://liftoff.io/privacy-policy/",
            purposeIds: [],
            legIntPurposeIds: [1, 2, 3, 4, 5],
            featureIds: [3]
        }, {
            id: 668,
            name: "WhatRocks Inc. ",
            policyUrl: "https://www.whatrocks.co/en/privacy-policy ",
            purposeIds: [1, 5],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 670,
            name: "Timehop, Inc.",
            policyUrl: "https://www.timehop.com/privacy",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: [3]
        }, {
            id: 674,
            name: "Duration Media, LLC.",
            policyUrl: "https://www.durationmedia.net/privacy-policy",
            purposeIds: [1, 3, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }, {
            id: 675,
            name: "Instreamatic inc.",
            policyUrl: "http://instreamatic.com/privacy-policy/",
            purposeIds: [1, 2, 3],
            legIntPurposeIds: [],
            featureIds: []
        }, {
            id: 676,
            name: "BusinessClick",
            policyUrl: "https://www.businessclick.com/documents/RegulaminProgramuBusinessClick-2019.pdf",
            purposeIds: [1, 2, 3, 4, 5],
            legIntPurposeIds: [],
            featureIds: [1, 2, 3]
        }]
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = [{
        id: "*",
        name: "Any",
        purposeIds: ["cookies"],
        legIntPurposeIds: []
    }, {
        id: "amazon",
        name: "Amazon",
        purposeIds: ["cookies", "advertising_personalization", "content_personalization", "ad_delivery", "analytics"],
        legIntPurposeIds: [],
        policyUrl: "https://aps.amazon.com/aps/privacy-policy/index.html",
        namespace: "didomi"
    }, {
        id: "facebook",
        name: "Facebook",
        purposeIds: ["cookies"],
        legIntPurposeIds: [],
        policyUrl: "https://www.facebook.com/policy.php",
        namespace: "didomi"
    }, {
        id: "twitter",
        name: "Twitter",
        purposeIds: ["cookies"],
        legIntPurposeIds: [],
        policyUrl: "https://twitter.com/privacy",
        namespace: "didomi"
    }, {
        id: "whatsapp",
        name: "Whatsapp",
        purposeIds: ["cookies"],
        legIntPurposeIds: [],
        policyUrl: "https://www.whatsapp.com/legal/#privacy-policy",
        namespace: "didomi"
    }, {
        id: "google",
        name: "Google",
        purposeIds: ["cookies", "advertising_personalization", "content_personalization", "ad_delivery", "analytics"],
        legIntPurposeIds: [],
        policyUrl: "https://policies.google.com/privacy",
        namespace: "didomi"
    }, {
        id: "google-adsense",
        name: "Google Adsense",
        purposeIds: ["cookies", "advertising_personalization", "content_personalization", "ad_delivery", "analytics"],
        legIntPurposeIds: [],
        policyUrl: "https://policies.google.com/privacy",
        namespace: "didomi"
    }, {
        id: "google-adx",
        name: "Google Adx",
        purposeIds: ["cookies", "advertising_personalization", "content_personalization", "ad_delivery", "analytics"],
        legIntPurposeIds: [],
        policyUrl: "https://policies.google.com/privacy",
        namespace: "didomi"
    }, {
        id: "google-dfp",
        name: "Google DFP",
        purposeIds: ["cookies", "advertising_personalization", "content_personalization", "ad_delivery", "analytics"],
        legIntPurposeIds: [],
        policyUrl: "https://policies.google.com/privacy",
        namespace: "didomi"
    }, {
        id: "addthis",
        name: "AddThis",
        purposeIds: ["cookies", "advertising_personalization", "content_personalization", "ad_delivery", "analytics"],
        legIntPurposeIds: [],
        policyUrl: "http://www.addthis.com/privacy",
        namespace: "didomi"
    }, {
        id: "salesforce",
        name: "Salesforce",
        purposeIds: ["cookies", "advertising_personalization", "content_personalization", "ad_delivery", "analytics"],
        legIntPurposeIds: [],
        policyUrl: "https://www.salesforce.com/company/privacy/",
        namespace: "didomi"
    }]
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(25))
      , i = r(n(44))
      , s = r(n(22))
      , a = r(n(3))
      , u = r(n(0))
      , d = r(n(1))
      , c = r(n(4))
      , l = r(n(5))
      , p = r(n(90))
      , f = n(2)
      , v = function(e) {
        function t(e, n, r) {
            (0,
            u.default)(this, t);
            var o = (0,
            c.default)(this, (t.__proto__ || (0,
            a.default)(t)).call(this, e, n, r));
            return o.sentEvents = {},
            o
        }
        return (0,
        l.default)(t, e),
        (0,
        d.default)(t, [{
            key: "configure",
            value: function(e) {
                var t = {};
                e && e.source && (e.source.type && "string" == typeof e.source.type && (0,
                f.set)(t, "source.type", e.source.type),
                e.source.domain && "string" == typeof e.source.domain && (0,
                f.set)(t, "source.domain", e.source.domain)),
                this.actions.setEventsConfig(t),
                window.didomiEventListeners = window.didomiEventListeners || [],
                window.didomiEventListeners.push({
                    event: "preferences.shownpurposes",
                    listener: this.sendPreferencesPurposesShown.bind(this)
                }, {
                    event: "preferences.shownvendors",
                    listener: this.sendPreferencesVendorsShown.bind(this)
                }, {
                    event: "preferences.clickpurposeagree",
                    listener: this.sendPreferencesPurposeStatusChanged.bind(this)
                }, {
                    event: "preferences.clickpurposedisagree",
                    listener: this.sendPreferencesPurposeStatusChanged.bind(this)
                }, {
                    event: "preferences.clickvendoragree",
                    listener: this.sendPreferencesVendorStatusChanged.bind(this)
                }, {
                    event: "preferences.clickvendordisagree",
                    listener: this.sendPreferencesVendorStatusChanged.bind(this)
                });
                var n = this.services.WebsiteService.getAPIKey();
                this.samplingType = "7dd8ec4e-746c-455e-a610-99121b4148df" === n || "c14d9f22-e4ae-4340-9d2e-85bd57387eb4" === n || "d7201d28-5a59-42b8-8d09-07dbd5300add" === n || "c6616eb3-2250-4f20-a1f6-11a6ad14835c" === n || "178119d0-5586-4a4c-953e-04aaf9ac0994" === n || "8ba38674-edba-484d-8053-435051d79f72" === n ? "user" : "random"
            }
        }, {
            key: "customizeEvent",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.services.WebsiteService.getProviderKey() && (0,
                f.set)(e, "source.provider", this.services.WebsiteService.getProviderKey()),
                this.services.WebsiteService.getAPIKey() && (0,
                f.set)(e, "source.key", this.services.WebsiteService.getAPIKey());
                var n = this.services.UserService.getCountry();
                n && (0,
                f.set)(e, "user.country", n);
                var r = this.services.StorageService.getTokenFromLocalStore();
                r.user_id && (0,
                f.set)(e, "user.id", r.user_id),
                t && r && (0,
                s.default)(r).length > 0 && (0,
                f.set)(e, "user.token", r);
                var o = this.services.ExperimentsService.getCurrentExperiment();
                return o && (e.experiment = o),
                e
            }
        }, {
            key: "send",
            value: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                  , a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                if (-1 === (0,
                i.default)(this.eventTypes).indexOf(e))
                    throw new Error("Invalid event type " + e);
                if ("number" == typeof r) {
                    if ("user" === this.samplingType) {
                        if (!t.isUUIDInSample(this.services.UserService.getId(), r))
                            return null
                    } else if (Math.random() > r)
                        return null
                } else
                    r = 1;
                var u = this.customizeEvent((0,
                f.deepClone)(this.store.getState().events), a);
                return u.type = e,
                u.rate = r,
                (0,
                f.set)(u, "source.sampling", this.samplingType),
                n && (u.parameters = n),
                (0,
                f.set)(u, "source.beacon", !1),
                !0 === s && "function" == typeof navigator.sendBeacon ? ((0,
                f.set)(u, "source.beacon", !0),
                navigator.sendBeacon(this.services.SDKConfigService.get("apiBaseURL") + "/events?data_format=json", (0,
                o.default)(u))) : p.default.ajax({
                    method: "POST",
                    url: this.services.SDKConfigService.get("apiBaseURL") + "/events",
                    body: (0,
                    o.default)(u),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    cors: !0
                }, function() {}),
                u
            }
        }, {
            key: "sendPageview",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                void 0 === this.sentEvents[this.eventTypes.pageview] && (this.send(this.eventTypes.pageview, null, this.services.SDKConfigService.get("events").pageviewSampleSize, e),
                this.sentEvents[this.eventTypes.pageview] = !0)
            }
        }, {
            key: "sendConsentAsked",
            value: function(e, t, n) {
                void 0 === this.sentEvents[this.eventTypes.consentAsked] && (this.send(this.eventTypes.consentAsked, {
                    purposes: e,
                    vendors: t,
                    position: n
                }, this.services.SDKConfigService.get("events").consentAskedSampleSize),
                this.sentEvents[this.eventTypes.consentAsked] = !0)
            }
        }, {
            key: "sendConsentGiven",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.send(this.eventTypes.consentGiven, e, this.services.SDKConfigService.get("events").consentGivenSampleSize, t)
            }
        }, {
            key: "sendPreferencesPurposesShown",
            value: function() {
                var e = this.eventTypes.uiAction + "-preferences.showpurposes";
                void 0 === this.sentEvents[e] && (this.send(this.eventTypes.uiAction, {
                    action: "preferences.shownpurposes"
                }, this.services.SDKConfigService.get("events").uiActionPreferencesPurposesSampleSize, !1, !1),
                this.sentEvents[e] = !0)
            }
        }, {
            key: "sendPreferencesVendorsShown",
            value: function() {
                var e = this.eventTypes.uiAction + "-preferences.showvendors";
                void 0 === this.sentEvents[e] && (this.send(this.eventTypes.uiAction, {
                    action: "preferences.shownvendors"
                }, this.services.SDKConfigService.get("events").uiActionPreferencesVendorsSampleSize, !1, !1),
                this.sentEvents[e] = !0)
            }
        }, {
            key: "sendPreferencesPurposeStatusChanged",
            value: function() {
                var e = this.eventTypes.uiAction + "-preferences.purposechanged";
                void 0 === this.sentEvents[e] && (this.send(this.eventTypes.uiAction, {
                    action: "preferences.purposechanged"
                }, this.services.SDKConfigService.get("events").uiActionPreferencesPurposeChangedSampleSize, !1, !1),
                this.sentEvents[e] = !0)
            }
        }, {
            key: "sendPreferencesVendorStatusChanged",
            value: function() {
                var e = this.eventTypes.uiAction + "-preferences.vendorchanged";
                void 0 === this.sentEvents[e] && (this.send(this.eventTypes.uiAction, {
                    action: "preferences.vendorchanged"
                }, this.services.SDKConfigService.get("events").uiActionPreferencesVendorChangedSampleSize, !1, !1),
                this.sentEvents[e] = !0)
            }
        }], [{
            key: "isUUIDInSample",
            value: function(e, t) {
                return !(!e || 36 !== e.length || !t || "number" != typeof t || t < 0 || t > 1) && parseInt(e.slice(-2), 16) / 255 <= t
            }
        }]),
        t
    }(r(n(9)).default);
    t.default = v,
    v.prototype.eventTypes = {
        pageview: "pageview",
        consentAsked: "consent.asked",
        consentGiven: "consent.given",
        uiAction: "ui.action"
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(1))
      , a = r(n(4))
      , u = r(n(5))
      , d = r(n(9))
      , c = r(n(270))
      , l = function(e) {
        function t() {
            return (0,
            i.default)(this, t),
            (0,
            a.default)(this, (t.__proto__ || (0,
            o.default)(t)).apply(this, arguments))
        }
        return (0,
        u.default)(t, e),
        (0,
        s.default)(t, [{
            key: "configure",
            value: function(e) {
                var t = e && e.id && e.config
                  , n = e && "number" == typeof e.size && e.size >= 0 && e.size <= 1;
                if (t && n) {
                    if (e.config.experiment && delete e.config.experiment,
                    e.startDate) {
                        var r = (0,
                        c.default)(e.startDate);
                        return r instanceof Date ? (this.actions.setExperimentConfig(e.config),
                        this.actions.setExperimentID(e.id),
                        this.actions.setExperimentSize(e.size),
                        this.actions.setExperimentStartDate(r),
                        !0) : (console.log("Didomi - The test start date must be a date formatted as an ISO-8601 string"),
                        !1)
                    }
                    return this.actions.setExperimentConfig(e.config),
                    this.actions.setExperimentID(e.id),
                    this.actions.setExperimentSize(e.size),
                    !0
                }
                return t ? n || console.log("Didomi - The test group size must be between 0 and 1") : console.log("Didomi - Experiment requires an ID, a size and a config to run"),
                !1
            }
        }, {
            key: "run",
            value: function(e) {
                var t = this.store.getState().experiment
                  , n = t.id
                  , r = t.size
                  , o = t.config
                  , i = t.startDate;
                if (!n || "number" != typeof r || !o)
                    return null;
                if (!this.isUserPartOfExperiment(i, e.created))
                    return null;
                var s = this.getUserGroup(e.user_id, r);
                return s ? (this.actions.setExperimentGroup(s),
                "test" === s ? o : null) : null
            }
        }, {
            key: "isUserPartOfExperiment",
            value: function(e, t) {
                if (!e)
                    return !0;
                var n = (0,
                c.default)(t);
                return n instanceof Date && e.getTime() <= n.getTime()
            }
        }, {
            key: "getCurrentExperiment",
            value: function() {
                var e = this.store.getState().experiment;
                return e.id ? {
                    group: e.group,
                    id: e.id,
                    size: e.size,
                    startDate: e.startDate instanceof Date ? e.startDate.toISOString() : null
                } : null
            }
        }, {
            key: "getUserGroup",
            value: function(e, t) {
                return e && 36 === e.length ? 0 === t ? "control" : parseInt(e.charAt(e.length - 1), 16) <= 15 * t ? "test" : "control" : null
            }
        }]),
        t
    }(d.default);
    t.default = l
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.default = function(e) {
        if ("string" != typeof e)
            return null;
        var t = e.match(r);
        if (null === t)
            return null;
        var n = 0
          , o = new Date(t[1],0,1);
        t[3] && o.setMonth(t[3] - 1),
        t[5] && o.setDate(t[5]),
        t[7] && o.setHours(t[7]),
        t[8] && o.setMinutes(t[8]),
        t[10] && o.setSeconds(t[10]),
        t[12] && o.setMilliseconds(1e3 * ("0." + t[12])),
        t[14] && (n = 60 * t[16] + parseInt(t[17], 10),
        n *= "-" === t[15] ? 1 : -1),
        n -= o.getTimezoneOffset();
        var i = o.getTime() + 60 * n * 1e3;
        return new Date(i)
    }
    ;
    var r = new RegExp("([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?")
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(8))
      , i = r(n(7))
      , s = r(n(3))
      , a = r(n(0))
      , u = r(n(1))
      , d = r(n(4))
      , c = r(n(5))
      , l = r(n(31))
      , p = r(n(272))
      , f = function(e) {
        function t(e, n, r) {
            (0,
            a.default)(this, t);
            var o = (0,
            d.default)(this, (t.__proto__ || (0,
            s.default)(t)).call(this, e, n, r));
            return o.providers = [],
            o
        }
        return (0,
        c.default)(t, e),
        (0,
        u.default)(t, [{
            key: "configure",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = !1 !== e.refreshOnConsent;
                if (e.vendors) {
                    var n = e.vendors
                      , r = !0
                      , s = !1
                      , a = void 0;
                    try {
                        for (var u, d = (0,
                        i.default)(p.default); !(r = (u = d.next()).done); r = !0) {
                            var c = u.value;
                            if (n[c.id] && !0 === n[c.id].enable) {
                                var l = (0,
                                o.default)({
                                    refreshOnConsent: t
                                }, n[c.id]);
                                this.providers.push({
                                    vendorIds: c.vendorIds,
                                    provider: new c.cls(l,this.emit.bind(this)),
                                    parameters: l
                                })
                            }
                        }
                    } catch (e) {
                        s = !0,
                        a = e
                    } finally {
                        try {
                            !r && d.return && d.return()
                        } finally {
                            if (s)
                                throw a
                        }
                    }
                }
            }
        }, {
            key: "run",
            value: function() {
                var e = this;
                if (!1 === this.services.UserService.isConsentRequired()) {
                    var t = !0
                      , n = !1
                      , r = void 0;
                    try {
                        for (var o, s = (0,
                        i.default)(this.providers); !(t = (o = s.next()).done); t = !0)
                            o.value.provider.setConsentStatus(!0, !0, "", !1)
                    } catch (e) {
                        n = !0,
                        r = e
                    } finally {
                        try {
                            !t && s.return && s.return()
                        } finally {
                            if (n)
                                throw r
                        }
                    }
                } else
                    this.updateProviders(!0),
                    this.services.ConsentService.on("consent.changed", function() {
                        return e.updateProviders(!1)
                    })
            }
        }, {
            key: "updateProviders",
            value: function(e) {
                var t = this
                  , n = this.services.CMPService.getConsentData(1)
                  , r = !0
                  , o = !1
                  , s = void 0;
                try {
                    for (var a, u = (0,
                    i.default)(this.providers); !(r = (a = u.next()).done); r = !0) {
                        var d = a.value
                          , c = d.vendorIds.map(function(e) {
                            return t.services.ConsentService.getUserConsentStatusForAllPurposesByVendor(e)
                        }).filter(function(e) {
                            return void 0 !== e
                        })[0];
                        d.provider.setConsentStatus(c, e, n.consentData, n.gdprApplies)
                    }
                } catch (e) {
                    o = !0,
                    s = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
            }
        }]),
        t
    }(l.default);
    t.default = f
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(273))
      , i = r(n(274));
    t.default = [{
        id: "google",
        cls: o.default,
        vendorIds: ["google"]
    }, {
        id: "salesforce-dmp",
        cls: i.default,
        vendorIds: ["salesforce", 506]
    }]
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(0))
      , i = r(n(1))
      , s = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = arguments[1];
            (0,
            o.default)(this, e),
            this.previousGoogleStatusForRefresh = void 0,
            this.requireCookieConsent = "boolean" != typeof t.eprivacy || t.eprivacy,
            this.refresh = "boolean" != typeof t.refresh || t.refresh,
            this.refreshOnConsent = "boolean" != typeof t.refreshOnConsent || t.refreshOnConsent,
            this.consentPassedToDFPEvents = 0,
            this.emit = n || function() {}
            ,
            this.passTargetingVariables = !0 === t.passTargetingVariables
        }
        return (0,
        i.default)(e, [{
            key: "setConsentStatus",
            value: function(e, t, n, r) {
                var o = this
                  , i = !0 === e ? 0 : 1;
                window.googletag || (window.googletag = {}),
                window.googletag.cmd = window.googletag.cmd || [],
                window.googletag.cmd.push(function() {
                    o.passTargetingVariables && (window.googletag.pubads().setTargeting("iabconsentstring", n),
                    window.googletag.pubads().setTargeting("iabgdprapplies", r ? "1" : "0")),
                    //window.googletag.pubads().setRequestNonPersonalizedAds(i)
                }),
                window.adsbygoogle || (window.adsbygoogle = []),
                window.adsbygoogle.requestNonPersonalizedAds = i,
                this.emit("integrations.consentpassedtodfp", {
                    consentStatus: e,
                    index: this.consentPassedToDFPEvents
                }),
                this.consentPassedToDFPEvents += 1,
                this.refresh && (!0 === t || this.refreshOnConsent) && (!0 !== e && this.requireCookieConsent || 0 !== this.previousGoogleStatusForRefresh && this.previousGoogleStatusForRefresh !== i && (this.previousGoogleStatusForRefresh = i,
                this.resumeAdRequests()))
            }
        }, {
            key: "resumeAdRequests",
            value: function() {
                window.googletag || (window.googletag = {}),
                window.googletag.cmd = window.googletag.cmd || [],
                window.googletag.cmd.push(function() {
                    if (window.googletag.pubadsReady)
                        window.googletag.pubads().refresh();
                    else
                        var e = 0
                          , t = setInterval(function() {
                            e += 40,
                            window.googletag.pubadsReady ? (window.googletag.pubads().refresh(),
                            clearInterval(t)) : e >= 1e4 && clearInterval(t)
                        }, 40)
                }),
                window.adsbygoogle || (window.adsbygoogle = []),
                window.adsbygoogle.pauseAdRequests = 0
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(0))
      , i = r(n(1))
      , s = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            o.default)(this, e),
            this.config = t
        }
        return (0,
        i.default)(e, [{
            key: "setConsentStatus",
            value: function(e, t) {
                if (!0 !== t) {
                    var n = {
                        dc: !0 === e,
                        al: !0 === e,
                        tg: !0 === e,
                        cd: !0 === e,
                        sh: !0 === e,
                        re: !1
                    };
                    if (window.Krux || ((window.Krux = function() {
                        window.Krux.q.push(arguments)
                    }
                    ).q = []),
                    this.config.namespace) {
                        var r = this.config.namespace;
                        -1 === r.indexOf("ns:") && (r = "ns:" + r),
                        window.Krux(r, "consent:set", n)
                    } else
                        window.Krux("consent:set", n)
                }
            }
        }]),
        e
    }();
    t.default = s
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(1))
      , a = r(n(4))
      , u = r(n(5))
      , d = r(n(31))
      , c = n(2)
      , l = function(e) {
        function t() {
            return (0,
            i.default)(this, t),
            (0,
            a.default)(this, (t.__proto__ || (0,
            o.default)(t)).apply(this, arguments))
        }
        return (0,
        u.default)(t, e),
        (0,
        s.default)(t, [{
            key: "configure",
            value: function(e) {
                e && this.actions.setConsentNoticeConfig(e)
            }
        }, {
            key: "isEnabled",
            value: function() {
                return (0,
                c.get)(this.store.getState(), "consentNotice.enable")
            }
        }, {
            key: "isVisible",
            value: function() {
                return (0,
                c.get)(this.store.getState(), "consentNotice.show") || !1
            }
        }, {
            key: "getPosition",
            value: function() {
                return (0,
                c.get)(this.store.getState(), "consentNotice.position") || "top"
            }
        }, {
            key: "getDaysBeforeShowingAgain",
            value: function() {
                return (0,
                c.get)(this.store.getState(), "consentNotice.daysBeforeShowingAgain") || 0
            }
        }, {
            key: "uiLoaded",
            value: function() {
                this.actions.showConsentNotice(),
                (!this.isEnabled() && !this.services.PreferencesService.shouldShowWhenConsentIsMissing() || this.isEnabled()) && this.emit("notice.shown")
            }
        }, {
            key: "show",
            value: function() {
                this.isVisible() || this.services.UIService.load(this.uiLoaded.bind(this))
            }
        }, {
            key: "hide",
            value: function() {
                this.isVisible() && (this.actions.hideConsentNotice(),
                this.emit("notice.hidden"))
            }
        }]),
        t
    }(d.default);
    t.default = l
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(8))
      , i = r(n(7))
      , s = r(n(3))
      , a = r(n(0))
      , u = r(n(1))
      , d = r(n(4))
      , c = r(n(5))
      , l = r(n(31))
      , p = n(2)
      , f = function(e) {
        function t() {
            return (0,
            a.default)(this, t),
            (0,
            d.default)(this, (t.__proto__ || (0,
            s.default)(t)).apply(this, arguments))
        }
        return (0,
        c.default)(t, e),
        (0,
        u.default)(t, [{
            key: "configure",
            value: function(e) {
                if (e) {
                    !0 === (0,
                    p.get)(e, "information.enable") && (e.view = "information");
                    var t = [];
                    if (e.categories) {
                        var n = !0
                          , r = !1
                          , s = void 0;
                        try {
                            for (var a, u = (0,
                            i.default)(e.categories); !(n = (a = u.next()).done); n = !0) {
                                var d = a.value;
                                /^[A-Za-z0-9-_]+$/.test(d.id) ? t.push(d) : console.error('Didomi - The category ID "' + d.id + '" is not valid. Ignoring it.')
                            }
                        } catch (e) {
                            r = !0,
                            s = e
                        } finally {
                            try {
                                !n && u.return && u.return()
                            } finally {
                                if (r)
                                    throw s
                            }
                        }
                    }
                    this.actions.setConsentPopupConfig((0,
                    o.default)({}, e, {
                        categories: t
                    }))
                }
            }
        }, {
            key: "shouldShowWhenConsentIsMissing",
            value: function() {
                return (0,
                p.get)(this.store.getState(), "consentPopup.showWhenConsentIsMissing") || !1
            }
        }, {
            key: "isEnabled",
            value: function() {
                return (0,
                p.get)(this.store.getState(), "consentPopup.enable")
            }
        }, {
            key: "isVisible",
            value: function() {
                return (0,
                p.get)(this.store.getState(), "consentPopup.open") || !1
            }
        }, {
            key: "isInformationEnabled",
            value: function() {
                return (0,
                p.get)(this.store.getState(), "consentPopup.information.enable") || !1
            }
        }, {
            key: "uiLoaded",
            value: function(e) {
                "information" === e ? this.isInformationEnabled() && (this.isVisible() || this.emit("preferences.shown"),
                this.actions.showConsentPopup(),
                this.actions.switchViewConsentPopup(e)) : (this.isVisible() || this.emit("preferences.shown"),
                this.actions.showConsentPopup(),
                -1 !== ["purposes", "vendors"].indexOf(e) ? (this.actions.switchViewConsentPopup("preferences"),
                this.actions.switchPreferencesViewConsentPopup(e)) : this.isInformationEnabled() ? this.actions.switchViewConsentPopup("information") : (this.actions.switchViewConsentPopup("preferences"),
                this.actions.switchPreferencesViewConsentPopup("purposes")))
            }
        }, {
            key: "show",
            value: function(e) {
                this.services.UIService.load(this.uiLoaded.bind(this, e))
            }
        }, {
            key: "hide",
            value: function() {
                this.isVisible() && (this.actions.hideConsentPopup(),
                this.emit("preferences.hidden"))
            }
        }]),
        t
    }(l.default);
    t.default = f
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.availableProviders = void 0;
    var o = r(n(7))
      , i = r(n(44))
      , s = r(n(22))
      , a = r(n(3))
      , u = r(n(0))
      , d = r(n(1))
      , c = r(n(4))
      , l = r(n(5))
      , p = r(n(9))
      , f = r(n(278))
      , v = r(n(287))
      , y = r(n(288))
      , h = r(n(289))
      , m = n(2)
      , I = t.availableProviders = {
        adobe: f.default,
        commandersact: v.default,
        didomi: y.default,
        gtm: h.default
    }
      , g = function(e) {
        function t(e, n, r) {
            (0,
            u.default)(this, t);
            var o = (0,
            c.default)(this, (t.__proto__ || (0,
            a.default)(t)).call(this, e, n, r));
            return o.providers = {},
            o.oldAllowedCategories = [],
            o.oldVendorsByStatus = {
                allowed: [],
                unknown: [],
                denied: []
            },
            o.oldPurposesByStatus = {
                allowed: [],
                unknown: [],
                denied: []
            },
            o
        }
        return (0,
        l.default)(t, e),
        (0,
        d.default)(t, [{
            key: "configure",
            value: function(e, t) {
                I[e] ? this.providers[e] || (this.providers[e] = new I[e](t)) : console.error('Didomi SDK - The tag manager "' + e + '" is not supported. Possible values: ' + (0,
                s.default)(I).join(", "))
            }
        }, {
            key: "run",
            value: function() {
                var e = this
                  , t = (0,
                i.default)(this.providers);
                t.length > 0 && (this.setup(t, !0),
                this.services.CookiesService.on("cookies.enable", function() {
                    e.setup(t, !1)
                }),
                this.services.ConsentService.on("consent.changed", function() {
                    e.setup(t, !1)
                }))
            }
        }, {
            key: "areStatusDifferent",
            value: function(e, t) {
                return !(0,
                m.arraysEqual)(e.allowed, t.allowed) || !(0,
                m.arraysEqual)(e.unknown, t.unknown) || !(0,
                m.arraysEqual)(e.denied, t.denied)
            }
        }, {
            key: "areCategoriesDifferent",
            value: function(e) {
                return !(0,
                m.arraysEqual)(e, this.oldAllowedCategories)
            }
        }, {
            key: "getVendorsByStatus",
            value: function() {
                var e = []
                  , t = []
                  , n = []
                  , r = this.services.WebsiteService.getRequiredVendors()
                  , i = !0
                  , s = !1
                  , a = void 0;
                try {
                    for (var u, d = (0,
                    o.default)(r); !(i = (u = d.next()).done); i = !0) {
                        var c = u.value
                          , l = this.services.ConsentService.getUserConsentStatusForAllPurposesByVendor(c.id)
                          , p = "";
                        p = "didomi" === c.namespace || "iab" === c.namespace ? c.namespace + ":" + c.id : c.id,
                        !0 !== l && this.services.UserService.isConsentRequired() ? !1 === l ? n.push(p) : t.push(p) : e.push(p)
                    }
                } catch (e) {
                    s = !0,
                    a = e
                } finally {
                    try {
                        !i && d.return && d.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
                return {
                    allowed: e,
                    unknown: t,
                    denied: n
                }
            }
        }, {
            key: "getPurposesByStatus",
            value: function() {
                var e = []
                  , t = []
                  , n = []
                  , r = this.services.WebsiteService.getRequiredPurposeIds()
                  , i = !0
                  , s = !1
                  , a = void 0;
                try {
                    for (var u, d = (0,
                    o.default)(r); !(i = (u = d.next()).done); i = !0) {
                        var c = u.value
                          , l = this.services.ConsentService.getUserConsentStatusByPurpose(c);
                        !0 !== l && this.services.UserService.isConsentRequired() ? !1 === l ? n.push(c) : t.push(c) : e.push(c)
                    }
                } catch (e) {
                    s = !0,
                    a = e
                } finally {
                    try {
                        !i && d.return && d.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
                return {
                    allowed: e,
                    unknown: t,
                    denied: n
                }
            }
        }, {
            key: "getCustomVariables",
            value: function(e, t, n, r, o) {
                var i = {
                    didomiGDPRApplies: e,
                    didomiIABConsent: t || "",
                    didomiVendorsConsent: this.formatStatusString(n.allowed),
                    didomiVendorsConsentUnknown: this.formatStatusString(n.unknown),
                    didomiVendorsConsentDenied: this.formatStatusString(n.denied),
                    didomiPurposesConsent: this.formatStatusString(r.allowed),
                    didomiPurposesConsentUnknown: this.formatStatusString(r.unknown),
                    didomiPurposesConsentDenied: this.formatStatusString(r.denied),
                    didomiExperimentId: "",
                    didomiExperimentUserGroup: ""
                };
                return o && (i.didomiExperimentId = o.id || "",
                i.didomiExperimentUserGroup = o.group || ""),
                i
            }
        }, {
            key: "formatStatusString",
            value: function(e) {
                return Array.isArray(e) && e.length > 0 ? e.join(",") + "," : ""
            }
        }, {
            key: "setup",
            value: function(e, t) {
                var n = this.services.CookiesService.getAllowedCategories()
                  , r = this.getVendorsByStatus()
                  , i = this.getPurposesByStatus();
                if (t || this.areStatusDifferent(r, this.oldVendorsByStatus) || this.areStatusDifferent(i, this.oldPurposesByStatus) || this.areCategoriesDifferent(n)) {
                    this.oldVendorsByStatus = r,
                    this.oldPurposesByStatus = i,
                    this.oldAllowedCategories = n;
                    var s = this.services.UserService.isConsentRequired() ? 1 : 0
                      , a = this.services.CMPService.getConsentData().consentData
                      , u = this.services.ExperimentsService.getCurrentExperiment()
                      , d = this.getCustomVariables(s, a, r, i, u)
                      , c = !0
                      , l = !1
                      , p = void 0;
                    try {
                        for (var f, v = (0,
                        o.default)(e); !(c = (f = v.next()).done); c = !0)
                            f.value.setup(t, d, s, a || "", r, i, n, u)
                    } catch (e) {
                        l = !0,
                        p = e
                    } finally {
                        try {
                            !c && v.return && v.return()
                        } finally {
                            if (l)
                                throw p
                        }
                    }
                }
            }
        }]),
        t
    }(p.default);
    t.default = g
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.SatelliteWrapper = void 0;
    var o = r(n(279))
      , i = r(n(0))
      , s = r(n(1))
      , a = n(32)
      , u = t.SatelliteWrapper = function() {
        function e() {
            var t = this;
            (0,
            i.default)(this, e),
            window._satellite ? this.isSatelliteLoaded = !0 : (this.isSatelliteLoaded = !1,
            this.satelliteLoading = new o.default(function(e) {
                (0,
                a.setBoundedInterval)(function(n) {
                    window._satellite && (t.isSatelliteLoaded = !0,
                    e(),
                    n())
                }, 100, 3e4)
            }
            ))
        }
        return (0,
        s.default)(e, [{
            key: "call",
            value: function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                var o;
                return this.isSatelliteLoaded ? (o = window._satellite)[e].apply(o, n) : this.satelliteLoading.then(function() {
                    var t;
                    (t = window._satellite)[e].apply(t, n)
                })
            }
        }, {
            key: "setVar",
            value: function(e, t) {
                return this.call("setVar", e, t)
            }
        }, {
            key: "track",
            value: function(e) {
                return this.call("track", e)
            }
        }]),
        e
    }()
      , d = function() {
        function e() {
            (0,
            i.default)(this, e),
            this.satellite = new u
        }
        return (0,
        s.default)(e, [{
            key: "setup",
            value: function(e, t) {
                this.setupVendors(e, t)
            }
        }, {
            key: "setupVendors",
            value: function(e, t) {
                for (var n in t)
                    this.satellite.setVar(n, t[n]);
                e ? this.satellite.track("didomi-ready") : this.satellite.track("didomi-consent-changed")
            }
        }]),
        e
    }();
    t.default = d
}
, function(e, t, n) {
    e.exports = {
        default: n(280),
        __esModule: !0
    }
}
, function(e, t, n) {
    n(85),
    n(42),
    n(52),
    n(281),
    n(285),
    n(286),
    e.exports = n(6).Promise
}
, function(e, t, n) {
    "use strict";
    var r, o, i, s, a = n(36), u = n(11), d = n(18), c = n(80), l = n(10), p = n(14), f = n(33), v = n(89), y = n(43), h = n(129), m = n(130).set, I = n(283)(), g = n(91), w = n(131), b = n(284), P = n(132), S = u.TypeError, _ = u.process, k = _ && _.versions, C = k && k.v8 || "", U = u.Promise, x = "process" == c(_), A = function() {}, T = o = g.f, O = !!function() {
        try {
            var e = U.resolve(1)
              , t = (e.constructor = {})[n(12)("species")] = function(e) {
                e(A, A)
            }
            ;
            return (x || "function" == typeof PromiseRejectionEvent) && e.then(A)instanceof t && 0 !== C.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
        } catch (e) {}
    }(), L = function(e) {
        var t;
        return !(!p(e) || "function" != typeof (t = e.then)) && t
    }, M = function(e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            I(function() {
                for (var r = e._v, o = 1 == e._s, i = 0; n.length > i; )
                    !function(t) {
                        var n, i, s, a = o ? t.ok : t.fail, u = t.resolve, d = t.reject, c = t.domain;
                        try {
                            a ? (o || (2 == e._h && j(e),
                            e._h = 1),
                            !0 === a ? n = r : (c && c.enter(),
                            n = a(r),
                            c && (c.exit(),
                            s = !0)),
                            n === t.promise ? d(S("Promise-chain cycle")) : (i = L(n)) ? i.call(n, u, d) : u(n)) : d(r)
                        } catch (e) {
                            c && !s && c.exit(),
                            d(e)
                        }
                    }(n[i++]);
                e._c = [],
                e._n = !1,
                t && !e._h && E(e)
            })
        }
    }, E = function(e) {
        m.call(u, function() {
            var t, n, r, o = e._v, i = D(e);
            if (i && (t = w(function() {
                x ? _.emit("unhandledRejection", o, e) : (n = u.onunhandledrejection) ? n({
                    promise: e,
                    reason: o
                }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
            }),
            e._h = x || D(e) ? 2 : 1),
            e._a = void 0,
            i && t.e)
                throw t.v
        })
    }, D = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
    }, j = function(e) {
        m.call(u, function() {
            var t;
            x ? _.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                promise: e,
                reason: e._v
            })
        })
    }, V = function(e) {
        var t = this;
        t._d || (t._d = !0,
        (t = t._w || t)._v = e,
        t._s = 2,
        t._a || (t._a = t._c.slice()),
        M(t, !0))
    }, B = function(e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0,
            n = n._w || n;
            try {
                if (n === e)
                    throw S("Promise can't be resolved itself");
                (t = L(e)) ? I(function() {
                    var r = {
                        _w: n,
                        _d: !1
                    };
                    try {
                        t.call(e, d(B, r, 1), d(V, r, 1))
                    } catch (e) {
                        V.call(r, e)
                    }
                }) : (n._v = e,
                n._s = 1,
                M(n, !1))
            } catch (e) {
                V.call({
                    _w: n,
                    _d: !1
                }, e)
            }
        }
    };
    O || (U = function(e) {
        v(this, U, "Promise", "_h"),
        f(e),
        r.call(this);
        try {
            e(d(B, this, 1), d(V, this, 1))
        } catch (e) {
            V.call(this, e)
        }
    }
    ,
    (r = function(e) {
        this._c = [],
        this._a = void 0,
        this._s = 0,
        this._d = !1,
        this._v = void 0,
        this._h = 0,
        this._n = !1
    }
    ).prototype = n(88)(U.prototype, {
        then: function(e, t) {
            var n = T(h(this, U));
            return n.ok = "function" != typeof e || e,
            n.fail = "function" == typeof t && t,
            n.domain = x ? _.domain : void 0,
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && M(this, !1),
            n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    i = function() {
        var e = new r;
        this.promise = e,
        this.resolve = d(B, e, 1),
        this.reject = d(V, e, 1)
    }
    ,
    g.f = T = function(e) {
        return e === U || e === s ? new i(e) : o(e)
    }
    ),
    l(l.G + l.W + l.F * !O, {
        Promise: U
    }),
    n(41)(U, "Promise"),
    n(123)("Promise"),
    s = n(6).Promise,
    l(l.S + l.F * !O, "Promise", {
        reject: function(e) {
            var t = T(this);
            return (0,
            t.reject)(e),
            t.promise
        }
    }),
    l(l.S + l.F * (a || !O), "Promise", {
        resolve: function(e) {
            return P(a && this === s ? U : this, e)
        }
    }),
    l(l.S + l.F * !(O && n(128)(function(e) {
        U.all(e).catch(A)
    })), "Promise", {
        all: function(e) {
            var t = this
              , n = T(t)
              , r = n.resolve
              , o = n.reject
              , i = w(function() {
                var n = []
                  , i = 0
                  , s = 1;
                y(e, !1, function(e) {
                    var a = i++
                      , u = !1;
                    n.push(void 0),
                    s++,
                    t.resolve(e).then(function(e) {
                        u || (u = !0,
                        n[a] = e,
                        --s || r(n))
                    }, o)
                }),
                --s || r(n)
            });
            return i.e && o(i.v),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = T(t)
              , r = n.reject
              , o = w(function() {
                y(e, !1, function(e) {
                    t.resolve(e).then(n.resolve, r)
                })
            });
            return o.e && r(o.v),
            n.promise
        }
    })
}
, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
        case 0:
            return r ? e() : e.call(n);
        case 1:
            return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}
, function(e, t, n) {
    var r = n(11)
      , o = n(130).set
      , i = r.MutationObserver || r.WebKitMutationObserver
      , s = r.process
      , a = r.Promise
      , u = "process" == n(35)(s);
    e.exports = function() {
        var e, t, n, d = function() {
            var r, o;
            for (u && (r = s.domain) && r.exit(); e; ) {
                o = e.fn,
                e = e.next;
                try {
                    o()
                } catch (r) {
                    throw e ? n() : t = void 0,
                    r
                }
            }
            t = void 0,
            r && r.enter()
        };
        if (u)
            n = function() {
                s.nextTick(d)
            }
            ;
        else if (!i || r.navigator && r.navigator.standalone)
            if (a && a.resolve) {
                var c = a.resolve(void 0);
                n = function() {
                    c.then(d)
                }
            } else
                n = function() {
                    o.call(r, d)
                }
                ;
        else {
            var l = !0
              , p = document.createTextNode("");
            new i(d).observe(p, {
                characterData: !0
            }),
            n = function() {
                p.data = l = !l
            }
        }
        return function(r) {
            var o = {
                fn: r,
                next: void 0
            };
            t && (t.next = o),
            e || (e = o,
            n()),
            t = o
        }
    }
}
, function(e, t, n) {
    var r = n(11).navigator;
    e.exports = r && r.userAgent || ""
}
, function(e, t, n) {
    "use strict";
    var r = n(10)
      , o = n(6)
      , i = n(11)
      , s = n(129)
      , a = n(132);
    r(r.P + r.R, "Promise", {
        finally: function(e) {
            var t = s(this, o.Promise || i.Promise)
              , n = "function" == typeof e;
            return this.then(n ? function(n) {
                return a(t, e()).then(function() {
                    return n
                })
            }
            : e, n ? function(n) {
                return a(t, e()).then(function() {
                    throw n
                })
            }
            : e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    var r = n(10)
      , o = n(91)
      , i = n(131);
    r(r.S, "Promise", {
        try: function(e) {
            var t = o.f(this)
              , n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v),
            t.promise
        }
    })
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(0))
      , i = r(n(1))
      , s = function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e,
        t
    }(n(55))
      , a = function() {
        function e() {
            (0,
            o.default)(this, e)
        }
        return (0,
        i.default)(e, [{
            key: "setup",
            value: function(e, t, n, r, o, i, s) {
                this.setupCookies(s)
            }
        }, {
            key: "setupCookies",
            value: function(e) {
                var t = e.join(",");
                s.getCookie("didomi_cookies") !== t && s.setCookie("didomi_cookies", t, 365)
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(8))
      , i = r(n(22))
      , s = r(n(7))
      , a = r(n(0))
      , u = r(n(1))
      , d = function() {
        function e() {
            (0,
            a.default)(this, e)
        }
        return (0,
        u.default)(e, [{
            key: "setup",
            value: function(e, t, n, r, o, a, u) {
                var d = this;
                window.didomiState = {};
                var c = !0
                  , l = !1
                  , p = void 0;
                try {
                    for (var f, v = (0,
                    s.default)((0,
                    i.default)(t)); !(c = (f = v.next()).done); c = !0) {
                        var y = f.value;
                        window.didomiState[y] = t[y]
                    }
                } catch (e) {
                    l = !0,
                    p = e
                } finally {
                    try {
                        !c && v.return && v.return()
                    } finally {
                        if (l)
                            throw p
                    }
                }
                "complete" !== document.readyState && window.addEventListener("load", function() {
                    return d.enableTags(n, r, o.allowed, u)
                }),
                this.enableTags(n, r, o.allowed, u)
            }
        }, {
            key: "enableTags",
            value: function(e, t, n, r) {
                var o = {
                    gdpr: e ? 1 : 0,
                    gdpr_consent: t
                };
                this.enableScriptTags([{
                    attribute: "data-category",
                    values: r
                }, {
                    attribute: "data-vendor",
                    values: n
                }], o),
                this.enableHTMLTags([{
                    attribute: "data-category",
                    values: r
                }, {
                    attribute: "data-vendor",
                    values: n
                }], o)
            }
        }, {
            key: "enableScriptTags",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = document.querySelectorAll('script[type="didomi/javascript"]')
                  , i = !0
                  , a = !1
                  , u = void 0;
                try {
                    for (var d, c = (0,
                    s.default)(r); !(i = (d = c.next()).done); i = !0)
                        !function() {
                            var r = d.value
                              , i = !0;
                            "true" !== r.getAttribute("data-processed") && (e.filter(function(e) {
                                var t = e.attribute;
                                return r.hasAttribute(t)
                            }).map(function(e) {
                                var s = e.attribute
                                  , a = e.values;
                                if ("immediate" === r.getAttribute("data-loading") || a.length > 0) {
                                    var u = r.getAttribute(s);
                                    "data-vendor" === s && (n = (0,
                                    o.default)({}, n, t.addVendorsRelatedMacros(-1 !== a.indexOf(String(u))))),
                                    -1 === a.indexOf(String(u)) && "immediate" !== r.getAttribute("data-loading") && (i = !1)
                                } else
                                    i = !1;
                                return null
                            }),
                            !0 === i && t.replaceTags("script", r, n))
                        }()
                } catch (e) {
                    a = !0,
                    u = e
                } finally {
                    try {
                        !i && c.return && c.return()
                    } finally {
                        if (a)
                            throw u
                    }
                }
            }
        }, {
            key: "enableHTMLTags",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = document.querySelectorAll('script[type="didomi/html"]')
                  , i = !0
                  , a = !1
                  , u = void 0;
                try {
                    for (var d, c = (0,
                    s.default)(r); !(i = (d = c.next()).done); i = !0)
                        !function() {
                            var r = d.value
                              , i = !0;
                            "true" !== r.getAttribute("data-processed") && (e.filter(function(e) {
                                var t = e.attribute;
                                return r.hasAttribute(t)
                            }).map(function(e) {
                                var s = e.attribute
                                  , a = e.values;
                                if ("immediate" === r.getAttribute("data-loading") || a.length > 0) {
                                    var u = r.getAttribute(s);
                                    "data-vendor" === s && (n = (0,
                                    o.default)({}, n, t.addVendorsRelatedMacros(-1 !== a.indexOf(String(u))))),
                                    -1 === a.indexOf(String(u)) && "immediate" !== r.getAttribute("data-loading") && (i = !1)
                                } else
                                    i = !1;
                                return null
                            }),
                            !0 === i && t.replaceTags("div", r, n))
                        }()
                } catch (e) {
                    a = !0,
                    u = e
                } finally {
                    try {
                        !i && c.return && c.return()
                    } finally {
                        if (a)
                            throw u
                    }
                }
            }
        }, {
            key: "replaceMacros",
            value: function(e, t) {
                var n = !0
                  , r = !1
                  , o = void 0;
                try {
                    for (var a, u = (0,
                    s.default)((0,
                    i.default)(e)); !(n = (a = u.next()).done); n = !0) {
                        var d = a.value
                          , c = new RegExp("{" + d + "}","gi");
                        t = t.replace(c, e[d])
                    }
                } catch (e) {
                    r = !0,
                    o = e
                } finally {
                    try {
                        !n && u.return && u.return()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return t
            }
        }, {
            key: "replaceTags",
            value: function(e, t, n) {
                var r = document.createElement(e);
                "script" === e && (r.type = "text/javascript"),
                r.innerHTML = this.replaceMacros(n, t.innerHTML);
                var o = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var u, d = (0,
                    s.default)(t.attributes); !(o = (u = d.next()).done); o = !0) {
                        var c = u.value;
                        "type" !== c.name && r.setAttribute(c.name, c.value)
                    }
                } catch (e) {
                    i = !0,
                    a = e
                } finally {
                    try {
                        !o && d.return && d.return()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                t.parentNode.insertBefore(r, t),
                t.setAttribute("data-processed", !0)
            }
        }, {
            key: "addVendorsRelatedMacros",
            value: function(e) {
                return {
                    gdpr_consent_vendor: e ? 1 : 0,
                    gdpr_consent_vendor_boolean: e
                }
            }
        }]),
        e
    }();
    t.default = d
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(8))
      , i = r(n(0))
      , s = r(n(1))
      , a = function() {
        function e(t) {
            (0,
            i.default)(this, e),
            this.dataLayerName = "dataLayer",
            t && "string" == typeof t.dataLayerName && t.dataLayerName.length > 0 && (this.dataLayerName = t.dataLayerName),
            window[this.dataLayerName] = window[this.dataLayerName] || []
        }
        return (0,
        s.default)(e, [{
            key: "pushToDataLayer",
            value: function(e) {
                window[this.dataLayerName] && "function" == typeof window[this.dataLayerName].push && window[this.dataLayerName].push(e)
            }
        }, {
            key: "setup",
            value: function(e, t, n, r, o, i, s) {
                this.setupCookies(s),
                this.setupVendors(e, t)
            }
        }, {
            key: "setupCookies",
            value: function(e) {
                0 !== e.length && (1 === e.length && "essential" === e[0] || this.pushToDataLayer({
                    event: "didomi-cookies-consent",
                    didomiCookiesConsent: e.join(",")
                }))
            }
        }, {
            key: "setupVendors",
            value: function(e, t) {
                this.pushToDataLayer((0,
                o.default)({
                    event: "didomi-consent"
                }, t)),
                e ? this.pushToDataLayer((0,
                o.default)({
                    event: "didomi-ready"
                }, t)) : this.pushToDataLayer((0,
                o.default)({
                    event: "didomi-consent-changed"
                }, t))
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(1))
      , a = r(n(4))
      , u = r(n(5))
      , d = r(n(90))
      , c = r(n(9))
      , l = n(2)
      , p = n(291)
      , f = ["AD", "AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GB", "GF", "GG", "GI", "GP", "GR", "HR", "HU", "JE", "IE", "IT", "LI", "LT", "LU", "LV", "MC", "MF", "MT", "MQ", "NL", "PL", "PT", "RE", "RO", "SE", "SI", "SK", "SM", "VA", "YT"]
      , v = function(e) {
        function t() {
            return (0,
            i.default)(this, t),
            (0,
            a.default)(this, (t.__proto__ || (0,
            o.default)(t)).apply(this, arguments))
        }
        return (0,
        u.default)(t, e),
        (0,
        s.default)(t, [{
            key: "configure",
            value: function(e) {
                e && this.actions.setUserConfig(e);
                var t = (0,
                l.get)(this.store.getState(), "user.bots", {});
                this.actions.setUserConfig({
                    isBot: (0,
                    p.isBot)(t.types, t.extraUserAgents, navigator.userAgent)
                })
            }
        }, {
            key: "getCountry",
            value: function() {
                var e = this.store.getState();
                return (0,
                l.get)(e, "user.country") || null
            }
        }, {
            key: "getId",
            value: function() {
                return this.services.StorageService.getTokenFromLocalStore().user_id || null
            }
        }, {
            key: "initCountry",
            value: function(e) {
                var t = this;
                "function" == typeof e && ("string" == typeof window.didomiCountry && 2 === window.didomiCountry.length ? (this.setCountry(window.didomiCountry),
                e(null, window.didomiCountry)) : d.default.ajax({
                    method: "GET",
                    url: this.services.SDKConfigService.get("apiBaseURL") + "/locations/current",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    cors: !0
                }, function(n, r) {
                    if (200 === n)
                        try {
                            var o = JSON.parse(r);
                            o.country_code && t.setCountry(o.country_code),
                            e(null, o.country_code)
                        } catch (t) {
                            e(!0)
                        }
                    else
                        e(!0)
                }))
            }
        }, {
            key: "isConsentRequired",
            value: function() {
                var e = (0,
                l.get)(this.store.getState(), "user", {});
                return !(e.bots && !1 === e.bots.consentRequired && e.isBot || !0 !== (0,
                l.get)(this.store.getState(), "website.ignoreCountry") && -1 === f.indexOf(this.getCountry()))
            }
        }, {
            key: "setCountry",
            value: function(e) {
                this.actions.setUserCountry(e)
            }
        }]),
        t
    }(c.default);
    t.default = v
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.botRegExps = void 0;
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(7));
    t.isBot = function(e, t, n) {
        var i = [];
        if (Array.isArray(e)) {
            var s = !0
              , a = !1
              , u = void 0;
            try {
                for (var d, c = (0,
                r.default)(e); !(s = (d = c.next()).done); s = !0) {
                    var l = d.value
                      , p = o[l];
                    p ? i.push(p) : console.error('Didomi - Bot detector - Bot type "' + l + '" does not exist')
                }
            } catch (e) {
                a = !0,
                u = e
            } finally {
                try {
                    !s && c.return && c.return()
                } finally {
                    if (a)
                        throw u
                }
            }
        }
        if (Array.isArray(t)) {
            var f = !0
              , v = !1
              , y = void 0;
            try {
                for (var h, m = (0,
                r.default)(t); !(f = (h = m.next()).done); f = !0) {
                    var I = h.value;
                    try {
                        if (!I || "string" != typeof I)
                            throw new Error("User-Agent cannot be null, undefined or an empty string");
                        i.push(new RegExp(I))
                    } catch (e) {
                        console.error('Didomi - Bot detector - User-agent "' + I + '" is not a valid regular expression: ' + e.message)
                    }
                }
            } catch (e) {
                v = !0,
                y = e
            } finally {
                try {
                    !f && m.return && m.return()
                } finally {
                    if (v)
                        throw y
                }
            }
        }
        return i.filter(function(e) {
            return e.test(n)
        }).length > 0
    }
    ;
    var o = t.botRegExps = {
        crawlers: /googlebot|adsbot|feedfetcher|mediapartners|bingbot|bingpreview|slurp|linkedin|msnbot|teoma|alexabot|exabot|facebot|facebook|twitter|yandex|baidu|duckduckbot|qwant|archive|applebot|addthis|slackbot|reddit|whatsapp|pinterest|moatbot|google-xrawler|crawler|spider|crawling/i,
        performance: /Chrome-Lighthouse|gtmetrix|speedcurve/i
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(92))
      , i = r(n(120))
      , s = r(n(17))
      , a = r(n(8))
      , u = r(n(26))
      , d = r(n(7))
      , c = r(n(3))
      , l = r(n(0))
      , p = r(n(1))
      , f = r(n(4))
      , v = r(n(5))
      , y = r(n(9))
      , h = n(2)
      , m = r(n(56))
      , I = n(32)
      , g = function(e) {
        function t() {
            return (0,
            l.default)(this, t),
            (0,
            f.default)(this, (t.__proto__ || (0,
            c.default)(t)).apply(this, arguments))
        }
        return (0,
        v.default)(t, e),
        (0,
        p.default)(t, [{
            key: "init",
            value: function() {
                this.loadStateFromURL()
            }
        }, {
            key: "configure",
            value: function(e) {
                if (e) {
                    var t = {};
                    if (void 0 !== e.ignoreCountry && (t.ignoreCountry = e.ignoreCountry),
                    void 0 !== e.privacyPolicyURL && (t.privacyPolicyURL = e.privacyPolicyURL),
                    void 0 !== e.name && (t.name = e.name),
                    "string" == typeof e.apiKey && (t.apiKey = e.apiKey),
                    "string" == typeof e.providerKey && (t.providerKey = e.providerKey),
                    "string" == typeof e.logoUrl && (t.logoUrl = e.logoUrl),
                    "string" == typeof e.customSDK && (t.customSDK = e.customSDK),
                    "boolean" == typeof e.enableGlobalConsentForCustomsVendorsAndPurposes && (t.enableGlobalConsentForCustomsVendorsAndPurposes = e.enableGlobalConsentForCustomsVendorsAndPurposes),
                    t.vendors = [],
                    t.purposes = [],
                    t.disabledPurposes = [],
                    Array.isArray(e.disabledPurposes) && (t.disabledPurposes = e.disabledPurposes),
                    e.customPurposes) {
                        var n = !0
                          , r = !1
                          , o = void 0;
                        try {
                            for (var i, s = (0,
                            d.default)(e.customPurposes); !(n = (i = s.next()).done); n = !0) {
                                var c = i.value;
                                /^[A-Za-z0-9-_]+$/.test(c.id) ? (c.namespace = "custom",
                                this.services.DatabasesService.addPurposesToDatabase([c]),
                                t.purposes.push(c.id)) : console.error('Didomi - The purpose id "' + c.id + '" is not valid. Ignoring it. ')
                            }
                        } catch (e) {
                            r = !0,
                            o = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (r)
                                    throw o
                            }
                        }
                    }
                    var l = (0,
                    h.get)(e, "vendors.iab");
                    if (l && Array.isArray(l)) {
                        var p = !0
                          , f = !1
                          , v = void 0;
                        try {
                            for (var y, m = (0,
                            d.default)(l); !(p = (y = m.next()).done); p = !0) {
                                var I = y.value
                                  , g = this.services.DatabasesService.getVendor(I);
                                g && -1 === t.vendors.indexOf(g.id) && t.vendors.push(I)
                            }
                        } catch (e) {
                            f = !0,
                            v = e
                        } finally {
                            try {
                                !p && m.return && m.return()
                            } finally {
                                if (f)
                                    throw v
                            }
                        }
                    } else if (l && l === Object(l)) {
                        if (!0 === l.all) {
                            var w, b = this.services.DatabasesService.getIABVendorList().vendors;
                            (w = t.vendors).push.apply(w, (0,
                            u.default)(b.map(function(e) {
                                return e.id
                            })))
                        } else if (l.include && Array.isArray(l.include)) {
                            var P = !0
                              , S = !1
                              , _ = void 0;
                            try {
                                for (var k, C = (0,
                                d.default)(l.include); !(P = (k = C.next()).done); P = !0) {
                                    var U = k.value
                                      , x = this.services.DatabasesService.getVendor(U);
                                    x && -1 === t.vendors.indexOf(x.id) && t.vendors.push(U)
                                }
                            } catch (e) {
                                S = !0,
                                _ = e
                            } finally {
                                try {
                                    !P && C.return && C.return()
                                } finally {
                                    if (S)
                                        throw _
                                }
                            }
                        }
                        l.exclude && Array.isArray(l.exclude) && (t.vendors = t.vendors.filter(function(e) {
                            return -1 === l.exclude.indexOf(e)
                        }))
                    }
                    var A = (0,
                    h.get)(e, "vendors.didomi");
                    if (A && Array.isArray(A)) {
                        var T = !0
                          , O = !1
                          , L = void 0;
                        try {
                            for (var M, E = (0,
                            d.default)(A); !(T = (M = E.next()).done); T = !0) {
                                var D = M.value
                                  , j = this.services.DatabasesService.getVendor(D);
                                j && -1 === t.vendors.indexOf(j.id) && t.vendors.push(D)
                            }
                        } catch (e) {
                            O = !0,
                            L = e
                        } finally {
                            try {
                                !T && E.return && E.return()
                            } finally {
                                if (O)
                                    throw L
                            }
                        }
                    }
                    var V = (0,
                    h.get)(e, "vendors.custom");
                    if (V && Array.isArray(V)) {
                        var B = V.map(function(e) {
                            return -1 === t.vendors.indexOf("c:" + e.id) && t.vendors.push("c:" + e.id),
                            (0,
                            a.default)({
                                purposeIds: [],
                                legIntPurposeIds: []
                            }, e, {
                                id: "c:" + e.id,
                                namespace: "custom"
                            })
                        });
                        this.services.DatabasesService.addVendorsToDatabase(B)
                    }
                    var R, G = !0, z = !1, N = void 0;
                    try {
                        for (var F, H = (0,
                        d.default)(t.vendors); !(G = (F = H.next()).done); G = !0) {
                            var q = F.value
                              , K = this.services.DatabasesService.getVendor(q);
                            if (K && K.purposeIds) {
                                var W = !0
                                  , Z = !1
                                  , J = void 0;
                                try {
                                    for (var Y, X = (0,
                                    d.default)(K.purposeIds); !(W = (Y = X.next()).done); W = !0) {
                                        var $ = Y.value
                                          , Q = this.services.DatabasesService.getPurpose($);
                                        Q && -1 === t.purposes.indexOf(Q.id) && -1 === t.disabledPurposes.indexOf(Q.id) && t.purposes.push(Q.id)
                                    }
                                } catch (e) {
                                    Z = !0,
                                    J = e
                                } finally {
                                    try {
                                        !W && X.return && X.return()
                                    } finally {
                                        if (Z)
                                            throw J
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        z = !0,
                        N = e
                    } finally {
                        try {
                            !G && H.return && H.return()
                        } finally {
                            if (z)
                                throw N
                        }
                    }
                    e.purposes && (R = t.purposes).push.apply(R, (0,
                    u.default)(e.purposes)),
                    0 === t.vendors.length && delete t.vendors,
                    0 === t.purposes.length && delete t.purposes,
                    this.actions.setWebsiteConfig(t)
                }
            }
        }, {
            key: "numberOfDaysHasExceeded",
            value: function() {
                var e = this.services.NoticeService.getDaysBeforeShowingAgain()
                  , t = this.services.StorageService.getTokenFromCookies().token;
                return t = t || {},
                (0,
                I.getNumberOfDaysBetweenTodayAndADate)(new Date(t.updated || null)) >= e
            }
        }, {
            key: "determineConsentNoticeStatus",
            value: function() {
                this.shouldConsentBeCollected() ? (this.services.NoticeService.show(),
                this.services.PreferencesService.shouldShowWhenConsentIsMissing() && this.services.PreferencesService.show()) : (this.services.NoticeService.hide(),
                this.services.PreferencesService.hide())
            }
        }, {
            key: "shouldConsentBeCollected",
            value: function() {
                return !0 !== this.services.ConsentService.hasAllConsentStatus(this.getRequiredPurposeIds(), this.getRequiredVendors()) && (this.numberOfDaysHasExceeded() || !this.services.ConsentService.hasAnyConsentStatus()) && this.services.UserService.isConsentRequired()
            }
        }, {
            key: "setUserAgreeToAll",
            value: function(e) {
                var t = this.getRequiredPurposeIds()
                  , n = this.getRequiredVendors().map(function(e) {
                    return e.id
                });
                if (0 !== t.length && 0 !== n.length) {
                    var r = new m.default(this.services.ConsentService.getUserConsentStatusForAll.bind(this.services.ConsentService),this.services.ConsentService.setUserConsentStatus.bind(this.services.ConsentService),e);
                    r.enablePurposes.apply(r, (0,
                    u.default)(t)),
                    r.enableVendors.apply(r, (0,
                    u.default)(n)),
                    r.commit(),
                    this.services.NoticeService.hide()
                }
            }
        }, {
            key: "setUserDisagreeToAll",
            value: function(e) {
                var t = this.getRequiredPurposeIds()
                  , n = this.getRequiredVendors().map(function(e) {
                    return e.id
                });
                if (0 !== t.length && 0 !== n.length) {
                    var r = new m.default(this.services.ConsentService.getUserConsentStatusForAll.bind(this.services.ConsentService),this.services.ConsentService.setUserConsentStatus.bind(this.services.ConsentService),e);
                    r.disablePurposes.apply(r, (0,
                    u.default)(t)),
                    r.disableVendors.apply(r, (0,
                    u.default)(n)),
                    r.commit(),
                    this.services.NoticeService.hide()
                }
            }
        }, {
            key: "isUserConsentStatusPartial",
            value: function() {
                return !1 !== this.services.UserService.isConsentRequired() && 0 !== this.getRequiredVendors().length && !this.services.ConsentService.hasAllConsentStatus(this.getRequiredPurposeIds(), this.getRequiredVendors())
            }
        }, {
            key: "getRequiredVendorIds",
            value: function() {
                return (0,
                h.get)(this.store.getState(), "website.vendors", [])
            }
        }, {
            key: "getRequiredVendors",
            value: function(e) {
                var t = this;
                return this.getRequiredVendorIds().map(function(e) {
                    return t.services.DatabasesService.getVendor(e)
                }).filter(function(t) {
                    return !e || t.namespace === e
                }).filter(function(e) {
                    return "object" === (void 0 === e ? "undefined" : (0,
                    s.default)(e))
                })
            }
        }, {
            key: "getRequiredVendorsSorted",
            value: function() {
                return this.getRequiredVendors().sort(function(e, t) {
                    var n = e.name.toLowerCase()
                      , r = t.name.toLowerCase();
                    return n < r ? -1 : n > r ? 1 : 0
                })
            }
        }, {
            key: "getRequiredFeatures",
            value: function() {
                var e = this
                  , t = new i.default
                  , n = this.getRequiredVendors("iab")
                  , r = !0
                  , s = !1
                  , a = void 0;
                try {
                    for (var u, c = (0,
                    d.default)(n); !(r = (u = c.next()).done); r = !0) {
                        var l = u.value;
                        if (Array.isArray(l.featureIds)) {
                            var p = !0
                              , f = !1
                              , v = void 0;
                            try {
                                for (var y, h = (0,
                                d.default)(l.featureIds); !(p = (y = h.next()).done); p = !0) {
                                    var m = y.value;
                                    t.add(m)
                                }
                            } catch (e) {
                                f = !0,
                                v = e
                            } finally {
                                try {
                                    !p && h.return && h.return()
                                } finally {
                                    if (f)
                                        throw v
                                }
                            }
                        }
                    }
                } catch (e) {
                    s = !0,
                    a = e
                } finally {
                    try {
                        !r && c.return && c.return()
                    } finally {
                        if (s)
                            throw a
                    }
                }
                return (0,
                o.default)(t.values()).map(function(t) {
                    return e.services.DatabasesService.getFeature(t)
                })
            }
        }, {
            key: "getRequiredPurposeIds",
            value: function() {
                return (0,
                h.get)(this.store.getState(), "website.purposes", [])
            }
        }, {
            key: "getRequiredPurposes",
            value: function(e) {
                var t = this;
                return this.getRequiredPurposeIds().map(function(e) {
                    return t.services.DatabasesService.getPurpose(e)
                }).filter(function(t) {
                    return !e || t.namespace === e
                }).filter(function(e) {
                    return "object" === (void 0 === e ? "undefined" : (0,
                    s.default)(e))
                })
            }
        }, {
            key: "loadStateFromURL",
            value: function() {
                "#didomi:notice.ignoreCountry=true" !== document.location.hash && -1 === document.location.href.indexOf("didomi:notice.ignoreCountry=true") && -1 === document.location.href.indexOf("didomi%3Anotice.ignoreCountry=true") || this.actions.setIgnoreCountry(!0),
                "#didomi:website.ignoreCountry=true" !== document.location.hash && -1 === document.location.href.indexOf("didomi:website.ignoreCountry=true") && -1 === document.location.href.indexOf("didomi%3Awebsite.ignoreCountry=true") || this.actions.setIgnoreCountry(!0)
            }
        }, {
            key: "getAPIKey",
            value: function() {
                var e = (0,
                h.get)(this.store.getState(), "website.apiKey");
                if (!e) {
                    var t = document.getElementById("spcloader");
                    if (t && t.getAttribute) {
                        var n = t.getAttribute("data-key");
                        "string" == typeof n && n.length > 0 && (e = n,
                        this.actions.setAPIKey(e))
                    }
                }
                return e
            }
        }, {
            key: "getProviderKey",
            value: function() {
                var e = (0,
                h.get)(this.store.getState(), "website.providerKey");
                if (!e) {
                    var t = document.getElementById("spcloader");
                    if (t && t.getAttribute) {
                        var n = t.getAttribute("data-provider");
                        "string" == typeof n && n.length > 0 && (e = n,
                        this.actions.setProviderKey(e))
                    }
                }
                return e
            }
        }, {
            key: "getCustomSDKKey",
            value: function() {
                return (0,
                h.get)(this.store.getState(), "website.customSDK")
            }
        }, {
            key: "getEnableGlobalConsentForCustomsVendorsAndPurposes",
            value: function() {
                return (0,
                h.get)(this.store.getState(), "website.enableGlobalConsentForCustomsVendorsAndPurposes")
            }
        }]),
        t
    }(y.default);
    t.default = g
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(1))
      , a = r(n(4))
      , u = r(n(5))
      , d = n(32)
      , c = r(n(9))
      , l = n(133)
      , p = n(2)
      , f = r(n(295))
      , v = function(e) {
        function t() {
            return (0,
            i.default)(this, t),
            (0,
            a.default)(this, (t.__proto__ || (0,
            o.default)(t)).apply(this, arguments))
        }
        return (0,
        u.default)(t, e),
        (0,
        s.default)(t, [{
            key: "init",
            value: function() {
                this.types = ["group", "global"],
                this.group = {
                    iframe: null,
                    didomiToken: null,
                    euconsent: null,
                    iframeNotResponding: !1
                },
                this.global = {
                    iframe: null,
                    didomiToken: null,
                    euconsent: null,
                    iframeNotResponding: !1
                },
                this.callbackCalled = !1,
                this.iframesCalled = 0,
                this.iframesError = 0
            }
        }, {
            key: "configure",
            value: function(e, t, n) {
                if (e) {
                    var r = {}
                      , o = (0,
                    p.get)(e, "global")
                      , i = {};
                    if (void 0 !== o && o === Object(o)) {
                        if (o.enabled && "boolean" == typeof o.enabled) {
                            if (!0 === o.enabled && !0 !== t)
                                throw new Error("Didomi - You must enable all the IAB Vendors if you use global cookies: https://developers.didomi.io/cmp/web-sdk/consent-notice/vendors-and-purposes#include-all-vendors-from-the-iab-list");
                            i.enabled = o.enabled
                        }
                        r.global = i
                    }
                    var s = (0,
                    p.get)(e, "group")
                      , a = {};
                    void 0 !== s && s === Object(s) && (s.customDomain && "string" == typeof s.customDomain && (a.customDomain = s.customDomain),
                    s.enabled && "boolean" == typeof s.enabled && (a.enabled = s.enabled),
                    r.group = a),
                    this.actions.setThirdPartyCookiesConfig(r),
                    this.storageSources = n
                }
            }
        }, {
            key: "getStorageSources",
            value: function() {
                return this.store.getState().cookies.storageSources
            }
        }, {
            key: "createIframe",
            value: function(e) {
                var t = void 0
                  , n = this.services.SDKConfigService.get("globalCookiesProtocol");
                "global" === e ? t = this.services.SDKConfigService.get("iabGlobalCookiesDomain") : "group" === e && (t = (0,
                p.get)(this.getConfigCookie(e), "customDomain"));
                var r = n + "://" + (0,
                d.removeProtocol)(t) + "/global-cookies." + (0,
                d.getVersion)() + ".html";
                return new f.default(r,e)
            }
        }, {
            key: "initThirdParties",
            value: function(e) {
                var t = this
                  , n = this.getEnabledThirdParties();
                n.length >= 1 ? (window.addEventListener ? window.addEventListener("message", function(e) {
                    return t.receiveMessageFromIframe(e)
                }, !1) : window.attachEvent("onmessage", function(e) {
                    return t.receiveMessageFromIframe(e)
                }),
                n.forEach(function(n) {
                    t[n].iframe = t.createIframe(n),
                    t[n].iframe.getTokens(n, t.storageSources, function(r, o) {
                        return t.getTokenFromIframe(r, o, n, e)
                    })
                })) : e()
            }
        }, {
            key: "receiveMessageFromIframe",
            value: function(e) {
                var t = this;
                this.getEnabledThirdParties().map(function(n) {
                    t[n].iframe.receiveMessageFromIframe(e)
                })
            }
        }, {
            key: "getConfigCookie",
            value: function(e) {
                return (0,
                p.get)(this.store.getState(), "cookies." + e)
            }
        }, {
            key: "getEnabledCookies",
            value: function() {
                var e = this;
                return this.getEnabledThirdParties().map(function(t) {
                    return e.getCookie(t)
                })
            }
        }, {
            key: "getCookie",
            value: function(e) {
                return {
                    didomiToken: this[e].didomiToken,
                    euconsent: this[e].euconsent
                }
            }
        }, {
            key: "setEnabledCookies",
            value: function(e, t) {
                var n = this;
                this.getEnabledThirdParties().forEach(function(r) {
                    return n.setCookie(r, e, t)
                })
            }
        }, {
            key: "hasEnabledThirdParties",
            value: function() {
                return this.getEnabledThirdParties().length >= 1
            }
        }, {
            key: "setCookie",
            value: function(e, t, n) {
                this[e].iframe.setToken("didomi_token", t, this.storageSources),
                n && this[e].iframe.setToken("euconsent", n, this.storageSources)
            }
        }, {
            key: "hasTriedLoadingAllEnabledThirdParties",
            value: function() {
                return this.iframesCalled === this.getEnabledThirdParties().length + this.iframesError
            }
        }, {
            key: "getEnabledThirdParties",
            value: function() {
                var e = this;
                return this.types.filter(function(t) {
                    return e.isThirdPartyActive(t)
                })
            }
        }, {
            key: "isThirdPartyActive",
            value: function(e) {
                return this.getConfigCookie(e).enabled && !1 !== this.isThirdPartySupported() && !0 !== this[e].iframeNotResponding
            }
        }, {
            key: "isThirdPartySupported",
            value: function() {
                return "false" !== (0,
                l.getStoredItem)("didomi_third_party_cookie", this.storageSources)
            }
        }, {
            key: "getTokenFromIframe",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments[2]
                  , r = arguments[3];
                if (this.iframesCalled += 1,
                e && "Timeout" === e.message)
                    this.iframesError += 1,
                    this[n].iframeNotResponding = !0,
                    !this.callbackCalled && this.hasTriedLoadingAllEnabledThirdParties() && (this.callbackCalled = !0,
                    r());
                else {
                    if (t.didomi_accept_cookie) {
                        var o = null;
                        t.euconsent && (this[t.didomi_type].euconsent = t.euconsent),
                        t.didomi_token && (o = t.didomi_token),
                        this[t.didomi_type].didomiToken = o
                    } else
                        (0,
                        l.setStoredItem)("didomi_third_party_cookie", !1, this.services.LocalCookiesService.getCookieDomain(), this.storageSources);
                    !this.callbackCalled && this.hasTriedLoadingAllEnabledThirdParties() && (this.callbackCalled = !0,
                    r())
                }
            }
        }, {
            key: "resetIABToken",
            value: function() {
                var e = this;
                this.getEnabledThirdParties().forEach(function(t) {
                    return e[t].iframe.deleteToken("euconsent")
                })
            }
        }]),
        t
    }(c.default);
    t.default = v
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getLocalStorageItem = function(e) {
        return window.localStorage ? window.localStorage.getItem(e) : null
    }
    ,
    t.setLocalStorageItem = function(e, t) {
        if (window.localStorage)
            try {
                window.localStorage.setItem(e, t)
            } catch (e) {}
    }
    ,
    t.deleteLocalStorageItem = function(e) {
        window.localStorage && window.localStorage.removeItem(e)
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(0))
      , i = r(n(1))
      , s = r(n(116))
      , a = function() {
        function e(t, n) {
            (0,
            o.default)(this, e),
            this.callbacks = {},
            this.timeoutCalled = !1,
            this.type = n;
            var r = document.createElement("iframe");
            r.setAttribute("src", t),
            r.setAttribute("id", "iframe-cookies-" + n),
            r.setAttribute("style", "display:none"),
            document.body.appendChild(r),
            this.iframe = r
        }
        return (0,
        i.default)(e, [{
            key: "isNotResponding",
            value: function() {
                return this.timeoutCalled
            }
        }, {
            key: "getType",
            value: function() {
                return this.type
            }
        }, {
            key: "getTokens",
            value: function(e, t, n, r) {
                var o = this;
                this.iframe.onload = function() {
                    o.postMessageToIframe("getTokens", {
                        type: e,
                        storageSources: t
                    }, n, r)
                }
            }
        }, {
            key: "setToken",
            value: function(e, t, n) {
                this.postMessageToIframe("setToken", {
                    name: e,
                    value: t,
                    storageSources: n
                })
            }
        }, {
            key: "deleteToken",
            value: function(e) {
                this.postMessageToIframe("deleteToken", {
                    name: e
                })
            }
        }, {
            key: "postMessageToIframe",
            value: function(e, t, n) {
                var r = this
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4e3;
                if (this.iframe && !this.isNotResponding()) {
                    var i = (0,
                    s.default)()
                      , a = this.getType();
                    this.iframe.contentWindow.postMessage({
                        __didomiCall: {
                            call: e,
                            callId: i,
                            type: a,
                            params: t
                        }
                    }, "*"),
                    n && (this.callbacks[i] = n,
                    setTimeout(function() {
                        r.callbacks[i] && (r.callbacks[i](new Error("Timeout")),
                        delete r.callbacks[i],
                        r.timeoutCalled = !0)
                    }, o))
                }
            }
        }, {
            key: "receiveMessageFromIframe",
            value: function(e) {
                if (e && e.data) {
                    var t = void 0;
                    try {
                        t = "string" == typeof e.data ? JSON.parse(e.data) : e.data
                    } catch (e) {
                        return
                    }
                    if (t.__didomiCall) {
                        var n = t.__didomiCall;
                        this.callbacks[n.callId] && this.getType() === n.type && (this.callbacks[n.callId](null, n.params),
                        delete this.callbacks[n.callId])
                    }
                }
            }
        }]),
        e
    }();
    t.default = a
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(1))
      , a = r(n(4))
      , u = r(n(5))
      , d = r(n(9))
      , c = n(133)
      , l = n(2)
      , p = function(e) {
        function t() {
            return (0,
            i.default)(this, t),
            (0,
            a.default)(this, (t.__proto__ || (0,
            o.default)(t)).apply(this, arguments))
        }
        return (0,
        u.default)(t, e),
        (0,
        s.default)(t, [{
            key: "configure",
            value: function(e, t) {
                if (e) {
                    var n = {}
                      , r = (0,
                    l.get)(e, "local")
                      , o = {};
                    void 0 !== r && r === Object(r) && ("string" == typeof r.customDomain && (o.customDomain = r.customDomain),
                    n.local = o),
                    this.actions.setLocalCookiesConfig(n),
                    this.storageSources = t
                }
            }
        }, {
            key: "getLocalCookies",
            value: function() {
                return {
                    didomiToken: (0,
                    c.getStoredItem)("didomi_token", this.storageSources),
                    euconsent: (0,
                    c.getStoredItem)("euconsent", this.storageSources)
                }
            }
        }, {
            key: "setLocalCookies",
            value: function(e, t) {
                var n = this.getCookieDomain();
                (0,
                c.setStoredItem)("didomi_token", e, n, this.storageSources),
                t && (0,
                c.setStoredItem)("euconsent", t, n, this.storageSources)
            }
        }, {
            key: "getCookieDomain",
            value: function() {
                return (0,
                l.get)(this.store.getState(), "cookies.local.customDomain")
            }
        }, {
            key: "resetIABToken",
            value: function() {
                (0,
                c.deleteStoredItem)("euconsent", this.getCookieDomain())
            }
        }]),
        t
    }(d.default);
    t.default = p
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(26))
      , i = r(n(7))
      , s = r(n(3))
      , a = r(n(0))
      , u = r(n(1))
      , d = r(n(4))
      , c = r(n(5))
      , l = r(n(9))
      , p = n(2)
      , f = n(115)
      , v = function(e) {
        function t() {
            return (0,
            a.default)(this, t),
            (0,
            d.default)(this, (t.__proto__ || (0,
            s.default)(t)).apply(this, arguments))
        }
        return (0,
        c.default)(t, e),
        (0,
        u.default)(t, [{
            key: "getInitialState",
            value: function() {
                return (0,
                p.deepClone)(f.initialState.consent)
            }
        }, {
            key: "getUserConsentToken",
            value: function() {
                return (0,
                p.get)(this.store.getState(), "consent")
            }
        }, {
            key: "setConsentToken",
            value: function(e) {
                var t = this.createConsentByVendorFromToken(e);
                this.actions.setConsentByVendor(t),
                this.actions.setConsent(e)
            }
        }, {
            key: "isVendorEnabled",
            value: function(e) {
                var t = e.vendor
                  , n = e.enabledPurposes;
                if (-1 === e.enabledVendors.indexOf(t.id))
                    return !1;
                var r = !0
                  , o = !1
                  , s = void 0;
                try {
                    for (var a, u = (0,
                    i.default)(t.purposeIds); !(r = (a = u.next()).done); r = !0) {
                        var d = a.value;
                        if (-1 === n.indexOf(d))
                            return !1
                    }
                } catch (e) {
                    o = !0,
                    s = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
                return !0
            }
        }, {
            key: "createConsentByVendorFromToken",
            value: function(e) {
                var t = this
                  , n = {}
                  , r = e.purposes
                  , i = e.vendors
                  , s = this.services.HooksService.get("isVendorEnabled", this.isVendorEnabled);
                return [].concat((0,
                o.default)(i.enabled), (0,
                o.default)(i.disabled)).forEach(function(e) {
                    var o = t.services.DatabasesService.getVendor(e);
                    n[e] = {
                        consentToAllPurposes: !o || s({
                            vendor: o,
                            enabledPurposes: r.enabled,
                            disabledPurposes: r.disabled,
                            enabledVendors: i.enabled,
                            disabledVendors: i.disabled
                        })
                    }
                }),
                n
            }
        }]),
        t
    }(l.default);
    t.default = v
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(26))
      , i = r(n(22))
      , s = r(n(3))
      , a = r(n(0))
      , u = r(n(1))
      , d = r(n(4))
      , c = r(n(5))
      , l = r(n(9))
      , p = n(2)
      , f = n(32)
      , v = n(54)
      , y = n(118)
      , h = function(e) {
        function t() {
            return (0,
            a.default)(this, t),
            (0,
            d.default)(this, (t.__proto__ || (0,
            s.default)(t)).apply(this, arguments))
        }
        return (0,
        c.default)(t, e),
        (0,
        u.default)(t, [{
            key: "configure",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e) {
                    var n = {};
                    e.storageSources && (n.storageSources = {
                        cookies: !1 !== e.storageSources.cookies,
                        localStorage: !1 !== e.storageSources.localStorage
                    }),
                    this.actions.setStorageConfig(n),
                    e && this.services.ThirdPartyCookiesService.configure(e, t, this.store.getState().cookies.storageSources),
                    e && this.services.LocalCookiesService.configure(e, this.store.getState().cookies.storageSources)
                }
            }
        }, {
            key: "initStorages",
            value: function(e) {
                this.services.ThirdPartyCookiesService.initThirdParties(e)
            }
        }, {
            key: "getNewToken",
            value: function() {
                var e = this.services.LocalStoreService.getInitialState()
                  , t = (0,
                f.getCurrentDateToISOString)();
                return e.created = t,
                e.updated = t,
                e
            }
        }, {
            key: "createNewToken",
            value: function() {
                var e = this.getNewToken();
                return this.resetIABToken(),
                this.updateAndSetToken(e),
                e
            }
        }, {
            key: "initStoreFromStorage",
            value: function() {
                var e = this.getTokenFromCookies()
                  , t = e.token
                  , n = e.didomiTokenCreatedFromIABToken;
                return t && n ? this.updateAndSetToken(t) : t ? this.fixToken(t) : t = this.createNewToken(),
                {
                    token: t,
                    didomiTokenCreatedFromIABToken: n
                }
            }
        }, {
            key: "updateAndSetToken",
            value: function(e, t) {
                if (t || (e = this.updateToken(e)),
                this.setTokenToLocalStore(e),
                !t) {
                    var n = this.createConsentCookiesFromToken(e);
                    this.setCookies(n)
                }
                return e
            }
        }, {
            key: "updateToken",
            value: function(e) {
                var t = (0,
                p.deepClone)(e);
                return t.updated = (0,
                f.getCurrentDateToISOString)(),
                t
            }
        }, {
            key: "createConsentCookiesFromToken",
            value: function(e) {
                var t = null
                  , n = (0,
                p.get)(e, "vendors.enabled") || []
                  , r = (0,
                p.get)(e, "vendors.disabled") || [];
                return (n.length > 0 || r.length > 0) && (t = (0,
                y.tokenToIABConsentString)(e, this.services.I18nService.locale, this.services.DatabasesService.getIABVendorList())),
                {
                    iabConsentString: t,
                    didomiTokenAsBase64: (0,
                    y.tokenToBase64CookieFormat)(e)
                }
            }
        }, {
            key: "setCookies",
            value: function(e) {
                var t = this
                  , n = e.iabConsentString
                  , r = e.didomiTokenAsBase64;
                return this.services.HooksService.get("setCookies", function() {
                    t.services.ThirdPartyCookiesService.hasEnabledThirdParties() ? t.services.ThirdPartyCookiesService.setEnabledCookies(r, n) : t.services.LocalCookiesService.setLocalCookies(r, n)
                })()
            }
        }, {
            key: "getCookies",
            value: function() {
                var e = this;
                return this.services.HooksService.get("getCookies", function() {
                    var t = e.services.ThirdPartyCookiesService.getEnabledCookies();
                    return t.push(e.services.LocalCookiesService.getLocalCookies()),
                    t[0]
                })(this.getNewToken())
            }
        }, {
            key: "getTokenFromCookies",
            value: function() {
                var e = this.getCookies()
                  , t = {
                    didomiToken: e.didomiToken ? (0,
                    y.base64ToToken)(e.didomiToken) : null,
                    iabToken: e.euconsent ? (0,
                    v.decodeIABConsentString)(e.euconsent) : null
                }
                  , n = this.mergeTokens(t.didomiToken, t.iabToken);
                return {
                    didomiTokenCreatedFromIABToken: n && t.iabToken && !t.didomiToken,
                    token: n
                }
            }
        }, {
            key: "mergeTokens",
            value: function(e, t) {
                if (!e && !t)
                    return null;
                var n = (0,
                p.deepClone)(e) || this.services.LocalStoreService.getInitialState();
                if (t) {
                    var r = this.services.DatabasesService.getIABVendorList().vendors.filter(function(e) {
                        return e.id <= t.maxVendorId
                    }).map(function(e) {
                        return e.id
                    })
                      , s = (0,
                    p.get)(n, "vendors.enabled", []).filter(function(e) {
                        return -1 === r.indexOf(e)
                    })
                      , a = (0,
                    p.get)(n, "vendors.disabled", []).filter(function(e) {
                        return -1 === r.indexOf(e)
                    })
                      , u = (0,
                    p.get)(n, "purposes.enabled", []).filter(function(e) {
                        return -1 === (0,
                        i.default)(v.IABVisiblePurposesMap).indexOf(e)
                    })
                      , d = (0,
                    p.get)(n, "purposes.disabled", []).filter(function(e) {
                        return -1 === (0,
                        i.default)(v.IABVisiblePurposesMap).indexOf(e)
                    })
                      , c = t.allowedVendorIds
                      , l = r.filter(function(e) {
                        return -1 === t.allowedVendorIds.indexOf(e)
                    })
                      , f = t.allowedPurposeIds.map(function(e) {
                        return (0,
                        v.getDidomiPurposeId)(e)
                    })
                      , y = (0,
                    i.default)(v.IABVisiblePurposesMap).filter(function(e) {
                        return -1 === f.indexOf(e)
                    });
                    n.vendors.enabled = [].concat((0,
                    o.default)(s), (0,
                    o.default)(c)),
                    n.vendors.disabled = [].concat((0,
                    o.default)(a), (0,
                    o.default)(l)),
                    n.purposes.enabled = [].concat((0,
                    o.default)(u), (0,
                    o.default)(f)),
                    n.purposes.disabled = [].concat((0,
                    o.default)(d), (0,
                    o.default)(y))
                }
                return n
            }
        }, {
            key: "getTokenFromLocalStore",
            value: function() {
                return this.services.LocalStoreService.getUserConsentToken()
            }
        }, {
            key: "setTokenToLocalStore",
            value: function(e) {
                this.services.LocalStoreService.setConsentToken(e)
            }
        }, {
            key: "fixToken",
            value: function(e) {
                var t = !1;
                void 0 !== e.consents && delete e.consents,
                e.purposes || (e.purposes = {
                    disabled: [],
                    enabled: []
                }),
                e.vendors || (e.vendors = {
                    disabled: [],
                    enabled: []
                });
                var n = e.purposes.disabled
                  , r = e.purposes.enabled;
                e.purposes.disabled = n.map(function(e) {
                    return "cookies_social`" === e && (e = "cookies_social",
                    t = !0),
                    e
                }),
                e.purposes.enabled = r.map(function(e) {
                    return "cookies_social`" === e && (e = "cookies_social",
                    t = !0),
                    e
                }),
                e.created || (e.created = "2018-05-25T00:00:00.000Z",
                t = !0),
                this.updateAndSetToken(e, !t)
            }
        }, {
            key: "reset",
            value: function() {
                this.createNewToken()
            }
        }, {
            key: "resetIABToken",
            value: function() {
                var e = this;
                this.services.HooksService.get("resetCookies", function() {
                    e.services.LocalCookiesService.resetIABToken(),
                    e.services.ThirdPartyCookiesService.resetIABToken()
                })()
            }
        }]),
        t
    }(l.default);
    t.default = h
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(17))
      , i = r(n(3))
      , s = r(n(0))
      , a = r(n(1))
      , u = r(n(4))
      , d = r(n(5))
      , c = r(n(9))
      , l = n(2)
      , p = r(n(300))
      , f = function(e) {
        function t(e, n, r) {
            (0,
            s.default)(this, t);
            var o = (0,
            u.default)(this, (t.__proto__ || (0,
            i.default)(t)).call(this, e, n, r));
            return o.config = {},
            o.loadedConfig = !1,
            o
        }
        return (0,
        d.default)(t, e),
        (0,
        a.default)(t, [{
            key: "configure",
            value: function(e) {
                if (!e || "object" !== (void 0 === e ? "undefined" : (0,
                o.default)(e)))
                    return null;
                if ("object" === (0,
                o.default)(e.configByCountry) && this.services.UserService.getCountry()) {
                    var t = e.configByCountry[this.services.UserService.getCountry().toUpperCase()];
                    t && (e = (0,
                    l.deepExtendClone)(e, t))
                }
                return e.privacyPolicyURL && (0,
                l.set)(e, "website.privacyPolicyURL", e.privacyPolicyURL),
                "object" === (0,
                o.default)(e.hooks) && this.services.HooksService.configure(e.hooks),
                (e.website || e.app) && this.services.WebsiteService.configure((0,
                l.deepExtendClone)(e.website, e.app)),
                this.services.StorageService.configure(e.cookies, (0,
                l.get)(e, "website.vendors.iab.all") || (0,
                l.get)(e, "app.vendors.iab.all")),
                "object" === (0,
                o.default)(e.user) && this.services.UserService.configure(e.user),
                e.languages && this.services.I18nService.configure(e.languages),
                e.notice && this.services.NoticeService.configure(e.notice),
                e.preferences && this.services.PreferencesService.configure(e.preferences),
                e.theme && this.services.ThemeService.configure(e.theme),
                this.services.TagManagersService.configure("didomi"),
                e.tagManager && "didomi" !== e.tagManager.provider && this.services.TagManagersService.configure(e.tagManager.provider, e.tagManager),
                this.services.EventsService.configure(e.events),
                e.experiment && this.services.ExperimentsService.configure(e.experiment),
                e.integrations && this.services.IntegrationsService.configure(e.integrations),
                e
            }
        }, {
            key: "getConfig",
            value: function() {
                if (!this.loadedConfig) {
                    if (this.loadedConfig = !0,
                    window.didomiRemoteConfig && "object" === (0,
                    o.default)(window.didomiRemoteConfig)) {
                        var e = (0,
                        l.get)(window.didomiRemoteConfig, "notices.0");
                        e && "object" === (void 0 === e ? "undefined" : (0,
                        o.default)(e)) && e.config && "object" === (0,
                        o.default)(e.config) && (0,
                        l.deepExtend)(this.config, e.config)
                    }
                    window.didomiConfig && "object" === (0,
                    o.default)(window.didomiConfig) && (0,
                    l.deepExtend)(this.config, window.didomiConfig),
                    (0,
                    l.deepExtend)(this.config, (0,
                    p.default)(this.services.WebsiteService.getProviderKey() || (0,
                    l.get)(this.config, "website.providerKey"), this.services.WebsiteService.getProviderKey() || (0,
                    l.get)(this.config, "website.apiKey")))
                }
                return this.config
            }
        }, {
            key: "get",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return (0,
                l.get)(this.getConfig(), e) || t
            }
        }, {
            key: "set",
            value: function(e, t) {
                (0,
                l.set)(this.config, e, t)
            }
        }]),
        t
    }(c.default);
    t.default = f
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(8));
    t.default = function(e) {
        var t = {};
        return "rygGcpO2Wf" === e && (0,
        r.default)(t, {
            website: {
                privacyPolicyURL: "javascript:Didomi.policy.open()",
                vendors: {
                    didomi: ["*"]
                },
                purposes: ["cookies_analytics", "cookies_marketing", "cookies_social"]
            },
            experiment: {
                id: "lrcoc",
                size: .5,
                config: {
                    notice: {
                        closeOnClick: !0
                    }
                }
            },
            notice: {
                closeOnClick: !1,
                position: "bottom",
                learnMore: !1,
                content: {
                    notice: {
                        en: 'By continuing to navigate this website you agree that, to personalize ads and other content throughout your online experience (across devices, web, email and in app), we and our partners may place cookies through this website. To learn more or review your options, visit our <a href="{privacyPolicyURL}" target="_blank">privacy policy</a>.',
                        fr: 'En poursuivant votre navigation sur ce site, vous acceptez que nous et nos partenaires déposions des cookies à des fins de mesure de la fréquentation de nos services et de ciblage publicitaire ou de personnalisation de contenu, au travers de l\'ensemble de votre expérience en ligne et pas uniquement sur notre site, en adéquation avec vos centres d’intérêts. Cliquez pour en savoir plus sur <a href="{privacyPolicyURL}" target="_blank">notre politique de confidentialité</a>.'
                    }
                },
                palette: {
                    notice: {
                        background: "rgb(240, 240, 240)"
                    }
                }
            }
        }),
        t
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(17))
      , i = r(n(3))
      , s = r(n(0))
      , a = r(n(1))
      , u = r(n(4))
      , d = r(n(5))
      , c = function(e) {
        function t(e, n, r) {
            (0,
            s.default)(this, t);
            var o = (0,
            u.default)(this, (t.__proto__ || (0,
            i.default)(t)).call(this, e, n, r));
            return o.hooks = {},
            o
        }
        return (0,
        d.default)(t, e),
        (0,
        a.default)(t, [{
            key: "configure",
            value: function(e) {
                e && "object" === (0,
                o.default)(e.functions) && (this.hooks = e.functions)
            }
        }, {
            key: "get",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                return "function" == typeof this.hooks[e] ? this.hooks[e] : t
            }
        }]),
        t
    }(r(n(9)).default);
    t.default = c
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(3))
      , i = r(n(0))
      , s = r(n(1))
      , a = r(n(4))
      , u = r(n(5))
      , d = r(n(117))
      , c = r(n(31))
      , l = n(2)
      , p = function(e) {
        function t() {
            return (0,
            i.default)(this, t),
            (0,
            a.default)(this, (t.__proto__ || (0,
            o.default)(t)).apply(this, arguments))
        }
        return (0,
        u.default)(t, e),
        (0,
        s.default)(t, [{
            key: "componentWillMount",
            value: function() {
                this.hostElement = null,
                this.loadingPromise = null
            }
        }, {
            key: "createHostElement",
            value: function() {
                this.hostElement = document.createElement("div"),
                this.hostElement.id = "didomi-host",
                document.body.insertBefore(this.hostElement, document.body.firstChild)
            }
        }, {
            key: "load",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                ;
                this.loadingPromise || (this.actions.loadingUI(),
                this.loadingPromise = this.importUI().then(function() {
                    e.actions.loadedUI(),
                    e.emitEventOnceReady(e.loadingPromise)
                })),
                this.loadingPromise.then(t)
            }
        }, {
            key: "emitEventOnceReady",
            value: function(e) {
                var t = this;
                return new d.default(function(t) {
                    e.then(t)
                }
                ).then(function() {
                    t.emit("ui.ready")
                })
            }
        }, {
            key: "isLoading",
            value: function() {
                return (0,
                l.get)(this.store.getState(), "ui.loading") || !1
            }
        }, {
            key: "isLoaded",
            value: function() {
                return (0,
                l.get)(this.store.getState(), "ui.loaded") || !1
            }
        }, {
            key: "importUI",
            value: function() {
                var e = this;
                return this.importModule().then(function(t) {
                    (0,
                    t.default)(e.hostElement, e.store, e.services)
                })
            }
        }, {
            key: "importModule",
            value: function() {
                var e = this.services.I18nService.getLocale();
                return n(303)("./" + e + "/")
            }
        }]),
        t
    }(c.default);
    t.default = p
}
, function(e, t, n) {
    function r(e) {
        var t = o[e];
        return t ? n.e(t[1]).then(function() {
            return n(t[0])
        }) : Promise.reject(new Error("Cannot find module '" + e + "'."))
    }
    var o = {
        "./bg/": [308, "ui-bg"],
        "./ca/": [309, "ui-ca"],
        "./cs/": [310, "ui-cs"],
        "./da/": [311, "ui-da"],
        "./de/": [312, "ui-de"],
        "./el/": [313, "ui-el"],
        "./en/": [314, "ui-en"],
        "./es/": [315, "ui-es"],
        "./et/": [316, "ui-et"],
        "./fi/": [317, "ui-fi"],
        "./fr/": [318, "ui-fr"],
        "./hr/": [319, "ui-hr"],
        "./hu/": [320, "ui-hu"],
        "./it/": [321, "ui-it"],
        "./lt/": [322, "ui-lt"],
        "./lv/": [323, "ui-lv"],
        "./nl/": [324, "ui-nl"],
        "./pl/": [325, "ui-pl"],
        "./pt/": [326, "ui-pt"],
        "./ro/": [327, "ui-ro"],
        "./ru/": [328, "ui-ru"],
        "./sk/": [329, "ui-sk"],
        "./sl/": [330, "ui-sl"],
        "./sv/": [331, "ui-sv"],
        "./tr/": [332, "ui-tr"],
        "./uk/": [333, "ui-uk"]
    };
    r.keys = function() {
        return Object.keys(o)
    }
    ,
    r.id = 303,
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = r(n(25))
      , i = r(n(44))
      , s = r(n(3))
      , a = r(n(0))
      , u = r(n(1))
      , d = r(n(4))
      , c = r(n(5))
      , l = r(n(90))
      , p = function(e) {
        function t(e, n, r) {
            (0,
            a.default)(this, t);
            var o = (0,
            d.default)(this, (t.__proto__ || (0,
            s.default)(t)).call(this, e, n, r));
            return o.sentMetrics = {},
            o
        }
        return (0,
        c.default)(t, e),
        (0,
        u.default)(t, [{
            key: "addDimensions",
            value: function() {
                var e = this;
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(t) {
                    switch (t) {
                    case "apiKey":
                        return e.services.WebsiteService.getAPIKey() ? {
                            type: t,
                            value: e.services.WebsiteService.getAPIKey()
                        } : null;
                    default:
                        return null
                    }
                }).filter(function(e) {
                    return e
                })
            }
        }, {
            key: "send",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []
                  , s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (-1 === (0,
                i.default)(this.metricTypes).indexOf(e))
                    return console.error("Invalid metric type " + e),
                    null;
                if ("number" == typeof n) {
                    if (Math.random() > n)
                        return null
                } else
                    n = 1;
                var a = {};
                return a.type = e,
                a.rate = n,
                r && (a.dimensions = r),
                t && (a.value = t),
                !0 === s && "function" == typeof navigator.sendBeacon ? navigator.sendBeacon(this.services.SDKConfigService.get("apiBaseURL") + "/metrics?data_format=json", (0,
                o.default)(a)) : l.default.ajax({
                    method: "POST",
                    url: this.services.SDKConfigService.get("apiBaseURL") + "/metrics",
                    body: (0,
                    o.default)(a),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    cors: !0
                }, function() {}),
                a
            }
        }, {
            key: "sendMonitoringDidomiOnLoad",
            value: function() {
                void 0 === this.sentMetrics[this.metricTypes.monitoringDidomiOnLoad] && (this.send(this.metricTypes.monitoringDidomiOnLoad, null, this.services.SDKConfigService.get("metrics").monitoringDidomiOnLoadSampleSize, this.addDimensions(["apiKey"])),
                this.sentMetrics[this.metricTypes.monitoringDidomiOnLoad] = !0)
            }
        }]),
        t
    }(r(n(9)).default);
    t.default = p,
    p.prototype.metricTypes = {
        monitoringDidomiOnLoad: "monitoring.didomi-on-load"
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }(n(7));
    t.callInitFunctions = function(e) {
        if (window.didomiOnLoad && window.didomiOnLoad.length) {
            for (var t = window.didomiOnLoad.length, n = 0; n < t; n += 1) {
                var r = window.didomiOnLoad.shift();
                "function" == typeof r && r(e)
            }
            return !0
        }
        return !1
    }
    ,
    t.callReadyFunctions = function(e) {
        if (!window.didomiOnReady || !0 !== window.didomiOnReady.stub) {
            if (Array.isArray(window.didomiOnReady)) {
                var t = !0
                  , n = !1
                  , o = void 0;
                try {
                    for (var i, s = (0,
                    r.default)(window.didomiOnReady); !(t = (i = s.next()).done); t = !0) {
                        var a = i.value;
                        "function" == typeof a && a(e)
                    }
                } catch (e) {
                    n = !0,
                    o = e
                } finally {
                    try {
                        !t && s.return && s.return()
                    } finally {
                        if (n)
                            throw o
                    }
                }
            }
            window.didomiOnReady = {
                stub: !0,
                push: function() {
                    for (var t = arguments.length, n = Array(t), o = 0; o < t; o++)
                        n[o] = arguments[o];
                    var i = !0
                      , s = !1
                      , a = void 0;
                    try {
                        for (var u, d = (0,
                        r.default)(n); !(i = (u = d.next()).done); i = !0) {
                            var c = u.value;
                            "function" == typeof c && c(e)
                        }
                    } catch (e) {
                        s = !0,
                        a = e
                    } finally {
                        try {
                            !i && d.return && d.return()
                        } finally {
                            if (s)
                                throw a
                        }
                    }
                }
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        var r = document.createElement("script");
        r.id = "spccustom",
        r.type = "text/javascript",
        r.async = !0,
        r.src = "" + e + n + "/" + t + ".js",
        r.charset = "utf-8";
        var o = document.getElementsByTagName("script")[0];
        o.parentNode.insertBefore(r, o)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.loadCustomSDK = r,
    t.initCustomSDK = function(e, t, n, o, i) {
        t && n ? (r(e, t, n),
        o.resume = function() {
            i(),
            delete o.resume
        }
        ,
        setTimeout(function() {
            o.resume && console.error("Didomi - 10 seconds timeout for loading custom SDK has expired")
        }, 1e4)) : i()
    }
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function o(e, t, n) {
        "object" === (void 0 === n ? "undefined" : (0,
        i.default)(n)) && "string" == typeof n.event && n.event && "function" == typeof n.listener && t(n.event, e.delayUntilReady(n.listener))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.EventsDelayer = void 0;
    var i = r(n(17))
      , s = r(n(7))
      , a = r(n(0))
      , u = r(n(1));
    t.registerEventListener = o,
    t.registerEventListeners = function(e) {
        if (!window.didomiEventListeners || !0 !== window.didomiEventListeners.stub) {
            var t = new d;
            if (window.didomiOnReady = window.didomiOnReady || [],
            window.didomiOnReady.push(function() {
                t.markAsReady()
            }),
            Array.isArray(window.didomiEventListeners)) {
                var n = !0
                  , r = !1
                  , i = void 0;
                try {
                    for (var a, u = (0,
                    s.default)(window.didomiEventListeners); !(n = (a = u.next()).done); n = !0) {
                        var c = a.value;
                        o(t, e, c)
                    }
                } catch (e) {
                    r = !0,
                    i = e
                } finally {
                    try {
                        !n && u.return && u.return()
                    } finally {
                        if (r)
                            throw i
                    }
                }
            }
            window.didomiEventListeners = {
                stub: !0,
                push: function() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
                        r[i] = arguments[i];
                    var a = !0
                      , u = !1
                      , d = void 0;
                    try {
                        for (var c, l = (0,
                        s.default)(r); !(a = (c = l.next()).done); a = !0) {
                            var p = c.value;
                            o(t, e, p)
                        }
                    } catch (e) {
                        u = !0,
                        d = e
                    } finally {
                        try {
                            !a && l.return && l.return()
                        } finally {
                            if (u)
                                throw d
                        }
                    }
                }
            }
        }
    }
    ;
    var d = t.EventsDelayer = function() {
        function e() {
            (0,
            a.default)(this, e),
            this.delayedEvents = [],
            this.isReady = !1
        }
        return (0,
        u.default)(e, [{
            key: "delayUntilReady",
            value: function(e) {
                var t = this;
                return function() {
                    for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
                        r[o] = arguments[o];
                    t.isReady ? e.apply(void 0, r) : t.delayedEvents.push(e.bind.apply(e, [null].concat(r)))
                }
            }
        }, {
            key: "markAsReady",
            value: function() {
                var e = !0
                  , t = !1
                  , n = void 0;
                try {
                    for (var r, o = (0,
                    s.default)(this.delayedEvents); !(e = (r = o.next()).done); e = !0)
                        (0,
                        r.value)()
                } catch (e) {
                    t = !0,
                    n = e
                } finally {
                    try {
                        !e && o.return && o.return()
                    } finally {
                        if (t)
                            throw n
                    }
                }
                this.delayedEvents = [],
                this.isReady = !0
            }
        }]),
        e
    }()
}
]);
