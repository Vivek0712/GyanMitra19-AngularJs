/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) { b = b || d; var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c) }
    var q = "3.2.1",
        r = function(a, b) { return new r.fn.init(a, b) },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) { return b.toUpperCase() };
    r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function() { return f.call(this) }, get: function(a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] }, pushStack: function(a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b }, each: function(a) { return r.each(this, a) }, map: function(a) { return this.pushStack(r.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(f.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === r.type(a) }, isWindow: function(a) { return null != a && a === a.window }, isNumeric: function(a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a }, globalEval: function(a) { p(a) }, camelCase: function(a) { return a.replace(t, "ms-").replace(u, v) }, each: function(a, b) { var c, d = 0; if (w(a)) { for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(s, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c }, inArray: function(a, b, c) { return null == b ? -1 : i.call(b, a, c) }, merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, e, f = 0,
                h = []; if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e); return g.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { j["[object " + b + "]"] = b.toLowerCase() });

    function w(a) { var b = !!a && "length" in a && a.length,
            c = r.type(a); return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) }
    var x = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) { for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1 },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
            da = function() { m() },
            ea = ta(function(a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" }); try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) { G = { apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) { var c = a.length,
                        d = 0; while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function ga(a, b, d, e) { var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length; while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b } if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) {} finally { k === u && b.removeAttribute("id") } } } return i(a.replace(P, "$1"), b, d, e) }

        function ha() { var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b }

        function ia(a) { return a[u] = !0, a }

        function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ka(a, b) { var c = a.split("|"),
                e = c.length; while (e--) d.attrHandle[c[e]] = b }

        function la(a, b) { var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function na(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function oa(a) { return function(b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } }

        function pa(a) { return ia(function(b) { return b = +b, ia(function(c, d) { var e, f = a([], c.length, b),
                        g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = ga.support = {}, f = ga.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function(a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { return a.getAttribute("id") === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c, d, e, f = b.getElementById(a); if (f) { if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0; while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f] } return [] } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function(a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0; if (e === f) return la(a, b);
                c = a; while (c = c.parentNode) g.unshift(c);
                c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, ga.matches = function(a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return ga(b, n, null, [a]).length > 0 }, ga.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ga.escape = function(a) { return (a + "").replace(ba, ca) }, ga.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function(a) { var b, d = [],
                e = 0,
                f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function(a) { var b, c = "",
                d = 0,
                f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b); return c }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) { var d, f = e(a, b),
                            g = f.length; while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: ia(function(a) { var b = [],
                        c = [],
                        d = h(a.replace(P, "$1")); return d[u] ? ia(function(a, b, c, e) { var f, g = d(a, null, e, []),
                            h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function(a) { return function(b) { return ga(a, b).length > 0 } }), contains: ia(function(a) { return a = a.replace(_, aa),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function(a) { return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) { var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: oa(!1), disabled: oa(!0), checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return X.test(a.nodeName) }, input: function(a) { return W.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: pa(function() { return [0] }), last: pa(function(a, b) { return [b - 1] }), eq: pa(function(a, b, c) { return [c < 0 ? c + b : c] }), even: pa(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }), odd: pa(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }), lt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }), gt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter; while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0) };

        function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

        function ta(a, b, c) { var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++; return b.first ? function(b, c, e) { while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1 } : function(b, c, i) { var j, k, l, m = [w, h]; if (i) { while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1 } }

        function ua(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c); return c }

        function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function xa(a, b, c, d, e, f) { return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) { var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length; while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) }

        function ya(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) { return a === b }, h, !0), l = ta(function(a) { return I(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a)) }
                    m.push(c) }
            return ua(m) }

        function za(a, b) { var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) { var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y) }
                        c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u) }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ia(f) : f } return h = ga.compile = function(a, b) { var c, d = [],
                e = [],
                f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a } return f }, i = ga.select = function(a, b, c, e) { var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a); if (c = c || [], 1 === n.length) { if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length) }
                f = V.needsContext.test(a) ? 0 : i.length; while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } } } return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function(a) { return null == a.getAttribute("disabled") }) || ka(J, function(a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) { var d = [],
                e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) { if (e && r(a).is(c)) break;
                    d.push(a) }
            return d },
        z = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        A = r.expr.match.needsContext;

    function B(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }
    var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        D = /^.[^:#\[\.,]*$/;

    function E(a, b, c) { return r.isFunction(b) ? r.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function(a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function(a) { return i.call(b, a) > -1 !== c }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) }
    r.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) { return 1 === a.nodeType })) }, r.fn.extend({ find: function(a) { var b, c, d = this.length,
                e = this; if ("string" != typeof a) return this.pushStack(r(a).filter(function() { for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0 })); for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c); return d > 1 ? r.uniqueSort(c) : c }, filter: function(a) { return this.pushStack(E(this, a || [], !1)) }, not: function(a) { return this.pushStack(E(this, a || [], !0)) }, is: function(a) { return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length } });
    var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        H = r.fn.init = function(a, b, c) { var e, f; if (!a) return this; if (c = c || F, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this) };
    H.prototype = r.fn, F = r(d);
    var I = /^(?:parents|prev(?:Until|All))/,
        J = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({ has: function(a) { var b = r(a, this),
                c = b.length; return this.filter(function() { for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0 }) }, closest: function(a, b) { var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a); if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function K(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    r.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return y(a, "parentNode") }, parentsUntil: function(a, b, c) { return y(a, "parentNode", c) }, next: function(a) { return K(a, "nextSibling") }, prev: function(a) { return K(a, "previousSibling") }, nextAll: function(a) { return y(a, "nextSibling") }, prevAll: function(a) { return y(a, "previousSibling") }, nextUntil: function(a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return y(a, "previousSibling", c) }, siblings: function(a) { return z((a.parentNode || {}).firstChild, a) }, children: function(a) { return z(a.firstChild) }, contents: function(a) { return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes)) } }, function(a, b) { r.fn[a] = function(c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e) } });
    var L = /[^\x20\t\r\n\f]+/g;

    function M(a) { var b = {}; return r.each(a.match(L) || [], function(a, c) { b[c] = !0 }), b }
    r.Callbacks = function(a) { a = "string" == typeof a ? M(a) : r.extend({}, a); var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() { for (e = e || a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function(b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return r.each(arguments, function(a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function(a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || b || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } }; return j };

    function N(a) { return a }

    function O(a) { throw a }

    function P(a, b, c, d) { var e; try { a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d)) } catch (a) { c.apply(void 0, [a]) } }
    r.extend({ Deferred: function(b) { var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = { state: function() { return d }, always: function() { return f.done(arguments).fail(arguments), this }, "catch": function(a) { return e.then(null, a) }, pipe: function() { var a = arguments; return r.Deferred(function(b) { r.each(c, function(c, d) { var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() { var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments) }) }), a = null }).promise() }, then: function(b, d, e) { var f = 0;

                        function g(b, c, d, e) { return function() { var h = this,
                                    i = arguments,
                                    j = function() { var a, j; if (!(b < f)) { if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i)) } },
                                    k = e ? j : function() { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i)) } };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k)) } } return r.Deferred(function(a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O)) }).promise() }, promise: function(a) { return null != a ? r.extend(a, e) : e } },
                f = {}; return r.each(c, function(a, b) { var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith }), e.promise(f), b && b.call(f, f), f }, when: function(a) { var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } }; if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then(); while (c--) P(e[c], h(c), g.reject); return g.promise() } });
    var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function(b) { a.setTimeout(function() { throw b }) };
    var R = r.Deferred();
    r.fn.ready = function(a) { return R.then(a)["catch"](function(a) { r.readyException(a) }), this }, r.extend({ isReady: !1, readyWait: 1, ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r])) } }), r.ready.then = R.then;

    function S() {
        d.removeEventListener("DOMContentLoaded", S),
            a.removeEventListener("load", S), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));
    var T = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === r.type(c)) { e = !0; for (h in c) T(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(r(a), c) })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        U = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function V() { this.expando = r.expando + V.uid++ }
    V.uid = 1, V.prototype = { cache: function(a) { var b = a[this.expando]; return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function(a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d]; return e }, get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] }, access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length; while (c--) delete d[b[c]] }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) } };
    var W = new V,
        X = new V,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function $(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a) }

    function _(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = $(c) } catch (e) {}
                X.set(a, b, c) } else c = void 0;
        return c }
    r.extend({ hasData: function(a) { return X.hasData(a) || W.hasData(a) }, data: function(a, b, c) { return X.access(a, b, c) }, removeData: function(a, b) { X.remove(a, b) }, _data: function(a, b, c) { return W.access(a, b, c) }, _removeData: function(a, b) { W.remove(a, b) } }), r.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                g = f && f.attributes; if (void 0 === a) { if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
                    W.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { X.set(this, a) }) : T(this, function(b) { var c; if (f && void 0 === b) { if (c = X.get(f, a), void 0 !== c) return c; if (c = _(f, a), void 0 !== c) return c } else this.each(function() { X.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function(a) { return this.each(function() { X.remove(this, a) }) } }), r.extend({ queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [] }, dequeue: function(a, b) { b = b || "fx"; var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() { r.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function() { W.remove(a, [b + "queue", c]) }) }) } }), r.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { r.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } });
    var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
        ca = ["Top", "Right", "Bottom", "Left"],
        da = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") },
        ea = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e };

    function fa(a, b, c, d) { var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return r.css(a, b, "") },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e }
    var ga = {};

    function ha(a) { var b, c = a.ownerDocument,
            d = a.nodeName,
            e = ga[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e) }

    function ia(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a }
    r.fn.extend({ show: function() { return ia(this, !0) }, hide: function() { return ia(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { da(this) ? r(this).show() : r(this).hide() }) } });
    var ja = /^(?:checkbox|radio)$/i,
        ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        la = /^$|\/(?:java|ecma)script/i,
        ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

    function na(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c }

    function oa(a, b) { for (var c = 0, d = a.length; c < d; c++) W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval")) }
    var pa = /<|&#?\w+;/;

    function qa(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (pa.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0; while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) { k = 0; while (f = g[k++]) la.test(f.type || "") && c.push(f) } return l }! function() { var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }();
    var ra = d.documentElement,
        sa = /^key/,
        ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ua = /^([^.]*)(?:\.(.+)|)/;

    function va() { return !0 }

    function wa() { return !1 }

    function xa() { try { return d.activeElement } catch (a) {} }

    function ya(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ya(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;
        else if (!e) return a; return 1 === f && (g = e, e = function(a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() { r.event.add(this, b, e, d, c) }) }
    r.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(L) || [""], j = b.length; while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a); if (q && (i = q.events)) { b = (b || "").match(L) || [""], j = b.length; while (j--)
                    if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]) } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && W.remove(a, "handle events") } }, dispatch: function(a) { var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (W.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {}; for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c]; if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result } }, handlers: function(a, b) { var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target; if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) { for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({ elem: j, handlers: f }) }
            return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h }, addProp: function(a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function(a) { return a[r.expando] ? a : new r.Event(a) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== xa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === xa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1 }, _default: function(a) { return B(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, r.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function(a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function() { var a = this.originalEvent;
            this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function() { var a = this.originalEvent;
            this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function() { var a = this.originalEvent;
            this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { r.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj; return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), r.fn.extend({ on: function(a, b, c, d) { return ya(this, a, b, c, d) }, one: function(a, b, c, d) { return ya(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() { r.event.remove(this, a, c, b) }) } });
    var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Aa = /<script|<style|<link/i,
        Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ca = /^true\/(.*)/,
        Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ea(a, b) { return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a }

    function Fa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function Ga(a) { var b = Ca.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Ha(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]) }
            X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i)) } }

    function Ia(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function Ja(a, b, c, d) { b = g.apply([], b); var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q); if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) { var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d) }); if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) { for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l); if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k)) } return a }

    function Ka(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d)); return a }
    r.extend({ htmlPrefilter: function(a) { return a.replace(za, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a); if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) Ia(f[d], g[d]); if (b)
                if (c)
                    for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
                else Ha(a, h);
            return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h }, cleanData: function(a) { for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (U(c)) { if (b = c[W.expando]) { if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[W.expando] = void 0 }
                    c[X.expando] && (c[X.expando] = void 0) } } }), r.fn.extend({ detach: function(a) { return Ka(this, a, !0) }, remove: function(a) { return Ka(this, a) }, text: function(a) { return T(this, function(a) { return void 0 === a ? r.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function() { return Ja(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ea(this, a);
                    b.appendChild(a) } }) }, prepend: function() { return Ja(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return Ja(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return Ja(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = ""); return this }, clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return r.clone(this, a, b) }) }, html: function(a) { return T(this, function(a) { var b = this[0] || {},
                    c = 0,
                    d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) { a = r.htmlPrefilter(a); try { for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return Ja(this, arguments, function(b) { var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this)) }, a) } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { r.fn[a] = function(a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } });
    var La = /^margin/,
        Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
        Na = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) };
    ! function() {
        function b() { if (i) { i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h); var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null } } var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), e }, pixelMarginRight: function() { return b(), f }, reliableMarginLeft: function() { return b(), g } })) }();

    function Oa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

    function Pa(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Qa = /^(none|table(?!-c[ea]).+)/,
        Ra = /^--/,
        Sa = { position: "absolute", visibility: "hidden", display: "block" },
        Ta = { letterSpacing: "0", fontWeight: "400" },
        Ua = ["Webkit", "Moz", "ms"],
        Va = d.createElement("div").style;

    function Wa(a) { if (a in Va) return a; var b = a[0].toUpperCase() + a.slice(1),
            c = Ua.length; while (c--)
            if (a = Ua[c] + b, a in Va) return a }

    function Xa(a) { var b = r.cssProps[a]; return b || (b = r.cssProps[a] = Wa(a) || a), b }

    function Ya(a, b, c) { var d = ba.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Za(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e))); return g }

    function $a(a, b, c) { var d, e = Na(a),
            f = Oa(a, b, e),
            g = "border-box" === r.css(a, "boxSizing", !1, e); return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px") }
    r.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Oa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = r.camelCase(b),
                    i = Ra.test(b),
                    j = a.style; return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0) } }, css: function(a, b, c, d) { var e, f, g, h = r.camelCase(b),
                i = Ra.test(b); return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), r.each(["height", "width"], function(a, b) { r.cssHooks[b] = { get: function(a, c, d) { if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() { return $a(a, b, d) }) }, set: function(a, c, d) { var e, f = d && Na(a),
                    g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f); return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g) } } }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function(a, b) { r.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ca[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, La.test(a) || (r.cssHooks[a + b].set = Ya) }), r.fn.extend({ css: function(a, b) { return T(this, function(a, b, c) { var d, e, f = {},
                    g = 0; if (Array.isArray(b)) { for (d = Na(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d); return f } return void 0 !== c ? r.style(a, b, c) : r.css(a, b) }, a, b, arguments.length > 1) } });

    function _a(a, b, c, d, e) { return new _a.prototype.init(a, b, c, d, e) }
    r.Tween = _a, _a.prototype = { constructor: _a, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function() { var a = _a.propHooks[this.prop]; return a && a.get ? a.get(this) : _a.propHooks._default.get(this) }, run: function(a) { var b, c = _a.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/,
        db = /queueHooks$/;

    function eb() { bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick()) }

    function fb() { return a.setTimeout(function() { ab = void 0 }), ab = r.now() }

    function gb(a, b) { var c, d = 0,
            e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ca[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e }

    function hb(a, b, c) { for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d }

    function ib(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && da(a),
            q = W.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) })); for (d in b)
            if (e = b[d], cb.test(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0 }
                n[d] = q && q[d] || r.style(a, d) }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() { p || ia([a]), W.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) } }

    function jb(a, b) { var c, d, e, f, g; for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function kb(a, b, c) { var d, e, f = 0,
            g = kb.prefilters.length,
            h = r.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                        d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
            k = j.props; for (jb(k, j.opts.specialEasing); f < g; f++)
            if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j }
    r.Animation = r.extend(kb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return fa(c.elem, a, ba.exec(b), c), c }] }, tweener: function(a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b) }, prefilters: [ib], prefilter: function(a, b) { b ? kb.prefilters.unshift(a) : kb.prefilters.push(a) } }), r.speed = function(a, b, c) { var d = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue) }, d }, r.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() { var b = kb(this, r.extend({}, a), f);
                        (e || W.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                    delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = W.get(this); if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));!b && c || r.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = W.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0; for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), r.each(["toggle", "show", "hide"], function(a, b) { var c = r.fn[b];
            r.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e) } }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { r.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function() { var a, b = 0,
                c = r.timers; for (ab = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), ab = void 0 }, r.fx.timer = function(a) { r.timers.push(a), r.fx.start() }, r.fx.interval = 13, r.fx.start = function() { bb || (bb = !0, eb()) }, r.fx.stop = function() { bb = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b, c) { return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) } }) },
        function() { var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value }();
    var lb, mb = r.expr.attrHandle;
    r.fn.extend({ attr: function(a, b) { return T(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { r.removeAttr(this, a) }) } }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: { type: { set: function(a, b) { if (!o.radioValue && "radio" === b && B(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) { var c, d = 0,
                e = b && b.match(L); if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c) }
    }), lb = { set: function(a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = mb[b] || r.find.attr;
        mb[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e } });
    var nb = /^(?:input|select|textarea|button)$/i,
        ob = /^(?:a|area)$/i;
    r.fn.extend({ prop: function(a, b) { return T(this, r.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function(a) { var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { r.propFix[this.toLowerCase()] = this });

    function pb(a) { var b = a.match(L) || []; return b.join(" ") }

    function qb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    r.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function(b) { r(this).addClass(a.call(this, b, qb(this))) }); if ("string" == typeof a && a) { b = a.match(L) || []; while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = pb(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function(b) { r(this).removeClass(a.call(this, b, qb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(L) || []; while (c = this[i++])
                    if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") { g = 0; while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = pb(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) { r(this).toggleClass(a.call(this, c, qb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(L) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0;
            b = " " + a + " "; while (c = this[d++])
                if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1 } });
    var rb = /\r/g;
    r.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = r.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c) } } }), r.extend({ valHooks: { option: { get: function(a) { var b = r.find.attr(a, "value"); return null != b ? b : pb(r.text(a)) } }, select: { get: function(a) { var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length; for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) { if (b = r(c).val(), g) return b;
                            h.push(b) }
                    return h }, set: function(a, b) { var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length; while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), r.each(["radio", "checkbox"], function() { r.valHooks[this] = { set: function(a, b) { if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, { trigger: function(b, c, e, f) { var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) { if (!f && !n.noBubble && !r.isWindow(e)) { for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a) }
                g = 0; while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result } }, simulate: function(a, b, c) { var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 });
            r.event.trigger(d, null, b) } }), r.fn.extend({ trigger: function(a, b) { return this.each(function() { r.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { r.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { r.event.simulate(b, a.target, r.event.fix(a)) };
        r.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                    e = W.access(d, b);
                e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                    e = W.access(d, b) - 1;
                e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b)) } } });
    var tb = a.location,
        ub = r.now(),
        vb = /\?/;
    r.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c };
    var wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) { var e; if (Array.isArray(b)) r.each(b, function(b, e) { c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d) }
    r.param = function(a, b) { var c, d = [],
            e = function(a, b) { var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c) }; if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Ab(c, a[c], b, e); return d.join("&") }, r.fn.extend({ serialize: function() { return r.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a)) }).map(function(a, b) { var c = r(this).val(); return null == c ? null : Array.isArray(c) ? r.map(c, function(a) { return { name: b.name, value: a.replace(xb, "\r\n") } }) : { name: b.name, value: c.replace(xb, "\r\n") } }).get() } });
    var Bb = /%20/g,
        Cb = /#.*$/,
        Db = /([?&])_=[^&]*/,
        Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Gb = /^(?:GET|HEAD)$/,
        Hb = /^\/\//,
        Ib = {},
        Jb = {},
        Kb = "*/".concat("*"),
        Lb = d.createElement("a");
    Lb.href = tb.href;

    function Mb(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                f = b.toLowerCase().match(L) || []; if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function Nb(a, b, c, d) { var e = {},
            f = a === Jb;

        function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function Ob(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a }

    function Pb(a, b, c) { var d, e, f, g, h = a.contents,
            i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e) }
            f = f || g } if (f) return f !== i[0] && i.unshift(f), c[f] }

    function Qb(a, b, c, d) { var e, f, g, h, i, j = {},
            k = a.dataTypes.slice(); if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift(); while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }
    r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a) }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = { readyState: 0, getResponseHeader: function(a) { var b; if (k) { if (!h) { h = {}; while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return k ? g : null }, setRequestHeader: function(a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this }, overrideMimeType: function(a) { return null == k && (o.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this }, abort: function(a) { var b = a || x; return e && e.abort(b), A(0, b), this } }; if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } } if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers) y.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort(); if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) { if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() { y.abort("timeout") }, o.timeout)); try { k = !1, e.send(v, A) } catch (z) { if (k) throw z;
                    A(-1, z) } } else A(-1, "No Transport");

            function A(b, c, d, h) { var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop"))) } return y }, getJSON: function(a, b, c) { return r.get(a, b, c, "json") }, getScript: function(a, b) { return r.get(a, void 0, b, "script") } }), r.each(["get", "post"], function(a, b) { r[b] = function(a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function(a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({ wrapAll: function(a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this }, wrapInner: function(a) { return r.isFunction(a) ? this.each(function(b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = r.isFunction(a); return this.each(function(c) { r(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function(a) { return this.parent(a).not("body").each(function() { r(this).replaceWith(this.childNodes) }), this } }), r.expr.pseudos.hidden = function(a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Rb = { 0: 200, 1223: 204 },
        Sb = r.ajaxSettings.xhr();
    o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) { var c, d; if (o.cors || Sb && !b.crossDomain) return { send: function(e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function() { c && c() } } }), r.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Tb = [],
        Ub = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Tb.pop() || r.expando + "_" + ub++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function() { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function(a, b, c) { var d, e, f, g = this,
            h = a.indexOf(" "); return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { r.fn[b] = function(a) { return this.on(b, a) } }), r.expr.pseudos.animated = function(a) { return r.grep(r.timers, function(b) { return a === b.elem }).length }, r.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, r.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 } }, position: function() { if (this[0]) { var a, b, c = this[0],
                    d = { top: 0, left: 0 }; return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || ra }) } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = "pageYOffset" === b;
        r.fn[a] = function(d) { return T(this, function(a, d, e) { var f; return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), r.each(["top", "left"], function(a, b) { r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) { if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function(a, b) { r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { r.fn[d] = function(e, f) { var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border"); return T(this, function(b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g) } }) }), r.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.holdReady = function(a) { a ? r.readyWait++ : r.ready(!0) }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() { return r });
    var Vb = a.jQuery,
        Wb = a.$;
    return r.noConflict = function(b) { return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r }, b || (a.jQuery = a.$ = r), r
});

/* popper JS */
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) { 'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t() })(this, function() { 'use strict';

    function e(e) { return e && '[object Function]' === {}.toString.call(e) }

    function t(e, t) { if (1 !== e.nodeType) return []; var o = window.getComputedStyle(e, null); return t ? o[t] : o }

    function o(e) { return 'HTML' === e.nodeName ? e : e.parentNode || e.host }

    function n(e) { if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body; var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY; return /(auto|scroll)/.test(r + s + p) ? e : n(o(e)) }

    function r(e) { var o = e && e.offsetParent,
            i = o && o.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement }

    function p(e) { var t = e.nodeName; return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e) }

    function s(e) { return null === e.parentNode ? e : s(e.parentNode) }

    function d(e, t) { if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = o ? e : t,
            n = o ? t : e,
            a = document.createRange();
        a.setStart(i, 0), a.setEnd(n, 0); var l = a.commonAncestorContainer; if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l); var f = s(e); return f.host ? d(f.host, t) : d(e, s(t).host) }

    function a(e) { var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            i = e.nodeName; if ('BODY' === i || 'HTML' === i) { var n = window.document.documentElement,
                r = window.document.scrollingElement || n; return r[o] } return e[o] }

    function l(e, t) { var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(t, 'top'),
            n = a(t, 'left'),
            r = o ? -1 : 1; return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e }

    function f(e, t) { var o = 'x' === t ? 'Left' : 'Top',
            i = 'Left' == o ? 'Right' : 'Bottom'; return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0] }

    function m(e, t, o, i) { return X(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ne() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0) }

    function c() { var e = window.document.body,
            t = window.document.documentElement,
            o = ne() && window.getComputedStyle(t); return { height: m('Height', e, t, o), width: m('Width', e, t, o) } }

    function h(e) { return de({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

    function g(e) { var o = {}; if (ne()) try { o = e.getBoundingClientRect(); var i = a(e, 'top'),
                n = a(e, 'left');
            o.top += i, o.left += n, o.bottom += i, o.right += n } catch (e) {} else o = e.getBoundingClientRect(); var r = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
            p = 'HTML' === e.nodeName ? c() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            m = e.offsetHeight - d; if (l || m) { var g = t(e);
            l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m } return h(r) }

    function u(e, o) { var i = ne(),
            r = 'HTML' === o.nodeName,
            p = g(e),
            s = g(o),
            d = n(e),
            a = t(o),
            f = +a.borderTopWidth.split('px')[0],
            m = +a.borderLeftWidth.split('px')[0],
            c = h({ top: p.top - s.top - f, left: p.left - s.left - m, width: p.width, height: p.height }); if (c.marginTop = 0, c.marginLeft = 0, !i && r) { var u = +a.marginTop.split('px')[0],
                b = +a.marginLeft.split('px')[0];
            c.top -= f - u, c.bottom -= f - u, c.left -= m - b, c.right -= m - b, c.marginTop = u, c.marginLeft = b } return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (c = l(c, o)), c }

    function b(e) { var t = window.document.documentElement,
            o = u(e, t),
            i = X(t.clientWidth, window.innerWidth || 0),
            n = X(t.clientHeight, window.innerHeight || 0),
            r = a(t),
            p = a(t, 'left'),
            s = { top: r - o.top + o.marginTop, left: p - o.left + o.marginLeft, width: i, height: n }; return h(s) }

    function y(e) { var i = e.nodeName; return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e)) }

    function w(e, t, i, r) { var p = { top: 0, left: 0 },
            s = d(e, t); if ('viewport' === r) p = b(s);
        else { var a; 'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r; var l = u(a, s); if ('HTML' === a.nodeName && !y(s)) { var f = c(),
                    m = f.height,
                    h = f.width;
                p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = h + l.left } else p = l } return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p }

    function E(e) { var t = e.width,
            o = e.height; return t * o }

    function v(e, t, o, i, n) { var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0; if (-1 === e.indexOf('auto')) return e; var p = w(o, i, r, n),
            s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
            d = Object.keys(s).map(function(e) { return de({ key: e }, s[e], { area: E(s[e]) }) }).sort(function(e, t) { return t.area - e.area }),
            a = d.filter(function(e) { var t = e.width,
                    i = e.height; return t >= o.clientWidth && i >= o.clientHeight }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1]; return l + (f ? '-' + f : '') }

    function x(e, t, o) { var i = d(t, o); return u(o, i) }

    function O(e) { var t = window.getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            n = { width: e.offsetWidth + i, height: e.offsetHeight + o }; return n }

    function L(e) { var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

    function S(e, t, o) { o = o.split('-')[0]; var i = O(e),
            n = { width: i.width, height: i.height },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height'; return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n }

    function T(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

    function C(e, t, o) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === o }); var i = T(e, function(e) { return e[t] === o }); return e.indexOf(i) }

    function N(t, o, i) { var n = void 0 === i ? t : t.slice(0, C(t, 'name', i)); return n.forEach(function(t) { t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!'); var i = t.function || t.fn;
            t.enabled && e(i) && (o.offsets.popper = h(o.offsets.popper), o.offsets.reference = h(o.offsets.reference), o = i(o, t)) }), o }

    function k() { if (!this.state.isDestroyed) { var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
            e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)) } }

    function W(e, t) { return e.some(function(e) { var o = e.name,
                i = e.enabled; return i && o === t }) }

    function B(e) { for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) { var i = t[n],
                r = i ? '' + i + o : e; if ('undefined' != typeof window.document.body.style[r]) return r } return null }

    function P() { return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }

    function D(e, t, o, i) { var r = 'BODY' === e.nodeName,
            p = r ? window : e;
        p.addEventListener(t, o, { passive: !0 }), r || D(n(p.parentNode), t, o, i), i.push(p) }

    function H(e, t, o, i) { o.updateBound = i, window.addEventListener('resize', o.updateBound, { passive: !0 }); var r = n(e); return D(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o }

    function A() { this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function M(e, t) { return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener('scroll', t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t }

    function I() { this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state)) }

    function R(e) { return '' !== e && !isNaN(parseFloat(e)) && isFinite(e) }

    function U(e, t) { Object.keys(t).forEach(function(o) { var i = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i }) }

    function Y(e, t) { Object.keys(t).forEach(function(o) { var i = t[o];!1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]) }) }

    function F(e, t, o) { var i = T(e, function(e) { var o = e.name; return o === t }),
            n = !!i && e.some(function(e) { return e.name === o && e.enabled && e.order < i.order }); if (!n) { var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!') } return n }

    function j(e) { return 'end' === e ? 'start' : 'start' === e ? 'end' : e }

    function K(e) { var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = le.indexOf(e),
            i = le.slice(o + 1).concat(le.slice(0, o)); return t ? i.reverse() : i }

    function q(e, t, o, i) { var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +n[1],
            p = n[2]; if (!r) return e; if (0 === p.indexOf('%')) { var s; switch (p) {
                case '%p':
                    s = o; break;
                case '%':
                case '%r':
                default:
                    s = i; } var d = h(s); return d[t] / 100 * r } if ('vh' === p || 'vw' === p) { var a; return a = 'vh' === p ? X(document.documentElement.clientHeight, window.innerHeight || 0) : X(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r } return r }

    function G(e, t, o, i) { var n = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(i),
            p = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
            s = p.indexOf(T(p, function(e) { return -1 !== e.search(/,|\s/) }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.'); var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function(e, i) { var n = (1 === i ? !r : r) ? 'height' : 'width',
                p = !1; return e.reduce(function(e, t) { return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t) }, []).map(function(e) { return q(e, n, t, o) }) }), a.forEach(function(e, t) { e.forEach(function(o, i) { R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1)) }) }), n }

    function z(e, t) { var o, i = t.offset,
            n = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = n.split('-')[0]; return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e } for (var V = Math.min, _ = Math.floor, X = Math.max, Q = ['native code', '[object MutationObserverConstructor]'], J = function(e) { return Q.some(function(t) { return -1 < (e || '').toString().indexOf(t) }) }, Z = 'undefined' != typeof window, $ = ['Edge', 'Trident', 'Firefox'], ee = 0, te = 0; te < $.length; te += 1)
        if (Z && 0 <= navigator.userAgent.indexOf($[te])) { ee = 1; break }
    var i, oe = Z && J(window.MutationObserver),
        ie = oe ? function(e) { var t = !1,
                o = 0,
                i = document.createElement('span'),
                n = new MutationObserver(function() { e(), t = !1 }); return n.observe(i, { attributes: !0 }),
                function() { t || (t = !0, i.setAttribute('x-index', o), ++o) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, ee)) } },
        ne = function() { return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i },
        re = function(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function') },
        pe = function() {
            function e(e, t) { for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } return function(t, o, i) { return o && e(t.prototype, o), i && e(t, i), t } }(),
        se = function(e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e },
        de = Object.assign || function(e) { for (var t, o = 1; o < arguments.length; o++)
                for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e },
        ae = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        le = ae.slice(3),
        fe = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
        me = function() {
            function t(o, i) { var n = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                re(this, t), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = ie(this.update.bind(this)), this.options = de({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) { n.options.modifiers[e] = de({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return de({ name: e }, n.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(t) { t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state) }), this.update(); var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p } return pe(t, [{ key: 'update', value: function() { return k.call(this) } }, { key: 'destroy', value: function() { return P.call(this) } }, { key: 'enableEventListeners', value: function() { return A.call(this) } }, { key: 'disableEventListeners', value: function() { return I.call(this) } }]), t }(); return me.Utils = ('undefined' == typeof window ? global : window).PopperUtils, me.placements = ae, me.Defaults = { placement: 'bottom', eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {}, onUpdate: function() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function(e) { var t = e.placement,
                        o = t.split('-')[0],
                        i = t.split('-')[1]; if (i) { var n = e.offsets,
                            r = n.reference,
                            p = n.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = { start: se({}, d, r[d]), end: se({}, d, r[d] + r[a] - p[a]) };
                        e.offsets.popper = de({}, p, l[i]) } return e } }, offset: { order: 200, enabled: !0, fn: z, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(e, t) { var o = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === o && (o = r(o)); var i = w(e.instance.popper, e.instance.reference, t.padding, o);
                    t.boundaries = i; var n = t.priority,
                        p = e.offsets.popper,
                        s = { primary: function(e) { var o = p[e]; return p[e] < i[e] && !t.escapeWithReference && (o = X(p[e], i[e])), se({}, e, o) }, secondary: function(e) { var o = 'right' === e ? 'left' : 'top',
                                    n = p[o]; return p[e] > i[e] && !t.escapeWithReference && (n = V(p[o], i[e] - ('right' === e ? p.width : p.height))), se({}, o, n) } }; return n.forEach(function(e) { var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        p = de({}, p, s[t](e)) }), e.offsets.popper = p, e }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function(e) { var t = e.offsets,
                        o = t.popper,
                        i = t.reference,
                        n = e.placement.split('-')[0],
                        r = _,
                        p = -1 !== ['top', 'bottom'].indexOf(n),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height'; return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e } }, arrow: { order: 500, enabled: !0, fn: function(e, o) { if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) { if (i = e.instance.popper.querySelector(i), !i) return e; } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var n = e.placement.split('-')[0],
                        r = e.offsets,
                        p = r.popper,
                        s = r.reference,
                        d = -1 !== ['left', 'right'].indexOf(n),
                        a = d ? 'height' : 'width',
                        l = d ? 'Top' : 'Left',
                        f = l.toLowerCase(),
                        m = d ? 'left' : 'top',
                        c = d ? 'bottom' : 'right',
                        g = O(i)[a];
                    s[c] - g < p[f] && (e.offsets.popper[f] -= p[f] - (s[c] - g)), s[f] + g > p[c] && (e.offsets.popper[f] += s[f] + g - p[c]); var u = s[f] + s[a] / 2 - g / 2,
                        b = t(e.instance.popper, 'margin' + l).replace('px', ''),
                        y = u - h(e.offsets.popper)[f] - b; return y = X(V(p[a] - g, y), 0), e.arrowElement = i, e.offsets.arrow = {}, e.offsets.arrow[f] = Math.round(y), e.offsets.arrow[m] = '', e }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function(e, t) { if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split('-')[0],
                        n = L(i),
                        r = e.placement.split('-')[1] || '',
                        p = []; switch (t.behavior) {
                        case fe.FLIP:
                            p = [i, n]; break;
                        case fe.CLOCKWISE:
                            p = K(i); break;
                        case fe.COUNTERCLOCKWISE:
                            p = K(i, !0); break;
                        default:
                            p = t.behavior; } return p.forEach(function(s, d) { if (i !== s || p.length === d + 1) return e;
                        i = e.placement.split('-')[0], n = L(i); var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = _,
                            m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
                            c = f(a.left) < f(o.left),
                            h = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === i && c || 'right' === i && h || 'top' === i && g || 'bottom' === i && u,
                            y = -1 !== ['top', 'bottom'].indexOf(i),
                            w = !!t.flipVariations && (y && 'start' === r && c || y && 'end' === r && h || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = de({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip')) }), e }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function(e) { var t = e.placement,
                        o = t.split('-')[0],
                        i = e.offsets,
                        n = i.popper,
                        r = i.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o); return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = h(n), e } }, hide: { order: 800, enabled: !0, fn: function(e) { if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference,
                        o = T(e.instance.modifiers, function(e) { return 'preventOverflow' === e.name }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) { if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = '' } else { if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1 } return e } }, computeStyle: { order: 850, enabled: !0, fn: function(e, t) { var o = t.x,
                        i = t.y,
                        n = e.offsets.popper,
                        p = T(e.instance.modifiers, function(e) { return 'applyStyle' === e.name }).gpuAcceleration;
                    void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'); var s, d, a = void 0 === p ? t.gpuAcceleration : p,
                        l = r(e.instance.popper),
                        f = g(l),
                        m = { position: n.position },
                        c = { left: _(n.left), top: _(n.top), bottom: _(n.bottom), right: _(n.right) },
                        h = 'bottom' === o ? 'top' : 'bottom',
                        u = 'right' === i ? 'left' : 'right',
                        b = B('transform'); if (d = 'bottom' == h ? -f.height + c.bottom : c.top, s = 'right' == u ? -f.width + c.right : c.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[h] = 0, m[u] = 0, m.willChange = 'transform';
                    else { var y = 'bottom' == h ? -1 : 1,
                            w = 'right' == u ? -1 : 1;
                        m[h] = d * y, m[u] = s * w, m.willChange = h + ', ' + u } var E = { "x-placement": e.placement }; return e.attributes = de({}, E, e.attributes), e.styles = de({}, m, e.styles), e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles), e }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function(e) { return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles), e }, onLoad: function(e, t, o, i, n) { var r = x(n, t, e),
                        p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding); return t.setAttribute('x-placement', p), U(t, { position: 'absolute' }), o }, gpuAcceleration: void 0 } } }, me });

/*!
 * Bootstrap v4.1.0 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper) }(this, function(t, e, c) { "use strict";

    function i(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } }

    function o(t, e, n) { return e && i(t.prototype, e), n && i(t, n), t }

    function h(r) { for (var t = 1; t < arguments.length; t++) { var s = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(s); "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function(t) { return Object.getOwnPropertyDescriptor(s, t).enumerable }))), e.forEach(function(t) { var e, n, i;
                e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i }) } return r }
    e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c; var r, n, s, a, l, u, f, d, _, g, m, p, v, E, y, T, C, I, A, D, b, S, w, N, O, k, P, L, j, R, H, W, M, x, U, K, F, V, Q, B, Y, G, q, z, X, J, Z, $, tt, et, nt, it, rt, st, ot, at, lt, ht, ct, ut, ft, dt, _t, gt, mt, pt, vt, Et, yt, Tt, Ct, It, At, Dt, bt, St, wt, Nt, Ot, kt, Pt, Lt, jt, Rt, Ht, Wt, Mt, xt, Ut, Kt, Ft, Vt, Qt, Bt, Yt, Gt, qt, zt, Xt, Jt, Zt, $t, te, ee, ne, ie, re, se, oe, ae, le, he, ce, ue, fe, de, _e, ge, me, pe, ve, Ee, ye, Te, Ce, Ie, Ae, De, be, Se, we, Ne, Oe, ke, Pe, Le, je, Re, He, We, Me, xe, Ue, Ke, Fe, Ve, Qe, Be, Ye, Ge, qe, ze, Xe, Je, Ze, $e, tn, en, nn, rn, sn, on, an, ln, hn, cn, un, fn, dn, _n, gn, mn, pn, vn, En, yn, Tn, Cn = function(i) { var e = "transitionend";

            function t(t) { var e = this,
                    n = !1; return i(this).one(l.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || l.triggerTransitionEnd(e) }, t), this } var l = { TRANSITION_END: "bsTransitionEnd", getUID: function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, getSelectorFromElement: function(t) { var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || ""); try { return 0 < i(document).find(e).length ? e : null } catch (t) { return null } }, getTransitionDurationFromElement: function(t) { if (!t) return 0; var e = i(t).css("transition-duration"); return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0 }, reflow: function(t) { return t.offsetHeight }, triggerTransitionEnd: function(t) { i(t).trigger(e) }, supportsTransitionEnd: function() { return Boolean(e) }, isElement: function(t) { return (t[0] || t).nodeType }, typeCheckConfig: function(t, e, n) { for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) { var r = n[i],
                                s = e[i],
                                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()); if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".') }
                    var a } }; return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function(t) { if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }, l }(e),
        In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", _ = "show", g = function() {
            function i(t) { this._element = t } var t = i.prototype; return t.close = function(t) { t = t || this._element; var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e) }, t.dispose = function() { r.removeData(this._element, s), this._element = null }, t._getRootElement = function(t) { var e = Cn.getSelectorFromElement(t),
                    n = !1; return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n }, t._triggerCloseEvent = function(t) { var e = r.Event(u.CLOSE); return r(t).trigger(e), e }, t._removeElement = function(e) { var n = this; if (r(e).removeClass(_), r(e).hasClass(d)) { var t = Cn.getTransitionDurationFromElement(e);
                    r(e).one(Cn.TRANSITION_END, function(t) { return n._destroyElement(e, t) }).emulateTransitionEnd(t) } else this._destroyElement(e) }, t._destroyElement = function(t) { r(t).detach().trigger(u.CLOSED).remove() }, i._jQueryInterface = function(n) { return this.each(function() { var t = r(this),
                        e = t.data(s);
                    e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this) }) }, i._handleDismiss = function(e) { return function(t) { t && t.preventDefault(), e.close(this) } }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.0" } }]), i }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function() { return r.fn[n] = l, g._jQueryInterface }, g),
        An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + E + y, FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y }, k = function() {
            function n(t) { this._element = t } var t = n.prototype; return t.toggle = function() { var t = !0,
                    e = !0,
                    n = m(this._element).closest(b)[0]; if (n) { var i = m(this._element).find(S)[0]; if (i) { if ("radio" === i.type)
                            if (i.checked && m(this._element).hasClass(C)) t = !1;
                            else { var r = m(n).find(w)[0];
                                r && m(r).removeClass(C) }
                        if (t) { if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !m(this._element).hasClass(C), m(i).trigger("change") }
                        i.focus(), e = !1 } }
                e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C) }, t.dispose = function() { m.removeData(this._element, v), this._element = null }, n._jQueryInterface = function(e) { return this.each(function() { var t = m(this).data(v);
                    t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]() }) }, o(n, null, [{ key: "VERSION", get: function() { return "4.1.0" } }]), n }(), m(document).on(O.CLICK_DATA_API, D, function(t) { t.preventDefault(); var e = t.target;
            m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle") }).on(O.FOCUS_BLUR_DATA_API, D, function(t) { var e = m(t.target).closest(N)[0];
            m(e).toggleClass(A, /^focus(in)?$/.test(t.type)) }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() { return m.fn[p] = T, k._jQueryInterface }, k),
        Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, x = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, U = "next", K = "prev", F = "left", V = "right", Q = { SLIDE: "slide" + R, SLID: "slid" + R, KEYDOWN: "keydown" + R, MOUSEENTER: "mouseenter" + R, MOUSELEAVE: "mouseleave" + R, TOUCHEND: "touchend" + R, LOAD_DATA_API: "load" + R + H, CLICK_DATA_API: "click" + R + H }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, $ = function() {
            function s(t, e) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners() } var t = s.prototype; return t.next = function() { this._isSliding || this._slide(U) }, t.nextWhenVisible = function() {!document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next() }, t.prev = function() { this._isSliding || this._slide(K) }, t.pause = function(t) { t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, t.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, t.to = function(t) { var e = this;
                this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0]; var n = this._getItemIndex(this._activeElement); if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) P(this._element).one(Q.SLID, function() { return e.to(t) });
                    else { if (n === t) return this.pause(), void this.cycle(); var i = n < t ? U : K;
                        this._slide(i, this._items[t]) } }, t.dispose = function() { P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, t._getConfig = function(t) { return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t }, t._addEventListeners = function() { var e = this;
                this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) { return e.pause(t) }).on(Q.MOUSELEAVE, function(t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval) })) }, t._keydown = function(t) { if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev(); break;
                    case 39:
                        t.preventDefault(), this.next() } }, t._getItemIndex = function(t) { return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t) }, t._getItemByDirection = function(t, e) { var n = t === U,
                    i = t === K,
                    r = this._getItemIndex(e),
                    s = this._items.length - 1; if ((i && 0 === r || n && r === s) && !this._config.wrap) return e; var o = (r + (t === K ? -1 : 1)) % this._items.length; return -1 === o ? this._items[this._items.length - 1] : this._items[o] }, t._triggerSlideEvent = function(t, e) { var n = this._getItemIndex(t),
                    i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
                    r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n }); return P(this._element).trigger(r), r }, t._setActiveIndicatorElement = function(t) { if (this._indicatorsElement) { P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y); var e = this._indicatorsElement.children[this._getItemIndex(t)];
                    e && P(e).addClass(Y) } }, t._slide = function(t, e) { var n, i, r, s = this,
                    o = P(this._element).find(Z.ACTIVE_ITEM)[0],
                    a = this._getItemIndex(o),
                    l = e || o && this._getItemByDirection(t, o),
                    h = this._getItemIndex(l),
                    c = Boolean(this._interval); if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) { this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l); var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: h }); if (P(this._element).hasClass(G)) { P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n); var f = Cn.getTransitionDurationFromElement(o);
                        P(o).one(Cn.TRANSITION_END, function() { P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function() { return P(s._element).trigger(u) }, 0) }).emulateTransitionEnd(f) } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);
                    c && this.cycle() } }, s._jQueryInterface = function(i) { return this.each(function() { var t = P(this).data(j),
                        e = h({}, M, P(this).data()); "object" == typeof i && (e = h({}, e, i)); var n = "string" == typeof i ? i : e.slide; if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } else e.interval && (t.pause(), t.cycle()) }) }, s._dataApiClickHandler = function(t) { var e = Cn.getSelectorFromElement(this); if (e) { var n = P(e)[0]; if (n && P(n).hasClass(B)) { var i = h({}, P(n).data(), P(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault() } } }, o(s, null, [{ key: "VERSION", get: function() { return "4.1.0" } }, { key: "Default", get: function() { return M } }]), s }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() { P(Z.DATA_RIDE).each(function() { var t = P(this);
                $._jQueryInterface.call(t, t.data()) }) }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function() { return P.fn[L] = W, $._jQueryInterface }, $),
        bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = { toggle: !0, parent: "" }, ot = { toggle: "boolean", parent: "(string|element)" }, at = { SHOW: "show" + it, SHOWN: "shown" + it, HIDE: "hide" + it, HIDDEN: "hidden" + it, CLICK_DATA_API: "click" + it + ".data-api" }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, gt = function() {
            function a(t, e) { this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')); for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) { var r = n[i],
                        s = Cn.getSelectorFromElement(r);
                    null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r)) }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() } var t = a.prototype; return t.toggle = function() { tt(this._element).hasClass(lt) ? this.hide() : this.show() }, t.show = function() { var t, e, n = this; if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) { var i = tt.Event(at.SHOW); if (tt(this._element).trigger(i), !i.isDefaultPrevented()) { t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null)); var r = this._getDimension();
                        tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0); var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function() { tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN) }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px" } } }, t.hide = function() { var t = this; if (!this._isTransitioning && tt(this._element).hasClass(lt)) { var e = tt.Event(at.HIDE); if (tt(this._element).trigger(e), !e.isDefaultPrevented()) { var n = this._getDimension(); if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length)
                            for (var i = 0; i < this._triggerArray.length; i++) { var r = this._triggerArray[i],
                                    s = Cn.getSelectorFromElement(r); if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1) }
                        this.setTransitioning(!0);
                        this._element.style[n] = ""; var o = Cn.getTransitionDurationFromElement(this._element);
                        tt(this._element).one(Cn.TRANSITION_END, function() { t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN) }).emulateTransitionEnd(o) } } }, t.setTransitioning = function(t) { this._isTransitioning = t }, t.dispose = function() { tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, t._getConfig = function(t) { return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t }, t._getDimension = function() { return tt(this._element).hasClass(ft) ? ft : dt }, t._getParent = function() { var n = this,
                    t = null;
                Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0]; var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'; return tt(t).find(e).each(function(t, e) { n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]) }), t }, t._addAriaAndCollapsedClass = function(t, e) { if (t) { var n = tt(t).hasClass(lt);
                    0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n) } }, a._getTargetFromElement = function(t) { var e = Cn.getSelectorFromElement(t); return e ? tt(e)[0] : null }, a._jQueryInterface = function(i) { return this.each(function() { var t = tt(this),
                        e = t.data(nt),
                        n = h({}, st, t.data(), "object" == typeof i && i); if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) { if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]() } }) }, o(a, null, [{ key: "VERSION", get: function() { return "4.1.0" } }, { key: "Default", get: function() { return st } }]), a }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function(t) { "A" === t.currentTarget.tagName && t.preventDefault(); var n = tt(this),
                e = Cn.getSelectorFromElement(this);
            tt(e).each(function() { var t = tt(this),
                    e = t.data(nt) ? "toggle" : n.data();
                gt._jQueryInterface.call(t, e) }) }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function() { return tt.fn[et] = rt, gt._jQueryInterface }, gt),
        Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = { HIDE: "hide" + Et, HIDDEN: "hidden" + Et, SHOW: "show" + Et, SHOWN: "shown" + Et, CLICK: "click" + Et, CLICK_DATA_API: "click" + Et + yt, KEYDOWN_DATA_API: "keydown" + Et + yt, KEYUP_DATA_API: "keyup" + Et + yt }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Vt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Qt = function() {
            function l(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() } var t = l.prototype; return t.toggle = function() { if (!this._element.disabled && !mt(this._element).hasClass(At)) { var t = l._getParentFromElement(this._element),
                        e = mt(this._menu).hasClass(Dt); if (l._clearMenus(), !e) { var n = { relatedTarget: this._element },
                            i = mt.Event(It.SHOW, n); if (mt(t).trigger(i), !i.isDefaultPrevented()) { if (!this._inNavbar) { if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)"); var r = this._element; "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig()) } "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n)) } } } }, t.dispose = function() { mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, t.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, t._addEventListeners = function() { var e = this;
                mt(this._element).on(It.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() }) }, t._getConfig = function(t) { return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t }, t._getMenuElement = function() { if (!this._menu) { var t = l._getParentFromElement(this._element);
                    this._menu = mt(t).find(Lt)[0] } return this._menu }, t._getPlacement = function() { var t = mt(this._element).parent(),
                    e = Mt; return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e }, t._detectNavbar = function() { return 0 < mt(this._element).closest(".navbar").length }, t._getPopperConfig = function() { var e = this,
                    t = {}; "function" == typeof this._config.offset ? t.fn = function(t) { return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t } : t.offset = this._config.offset; var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n }, l._jQueryInterface = function(e) { return this.each(function() { var t = mt(this).data(vt); if (t || (t = new l(this, "object" == typeof e ? e : null), mt(this).data(vt, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]() } }) }, l._clearMenus = function(t) { if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) { var i = l._getParentFromElement(e[n]),
                            r = mt(e[n]).data(vt),
                            s = { relatedTarget: e[n] }; if (r) { var o = r._menu; if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) { var a = mt.Event(It.HIDE, s);
                                mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s))) } } } }, l._getParentFromElement = function(t) { var e, n = Cn.getSelectorFromElement(t); return n && (e = mt(n)[0]), e || t.parentNode }, l._dataApiKeydownHandler = function(t) { if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) { var e = l._getParentFromElement(this),
                        n = mt(e).hasClass(Dt); if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) { var i = mt(e).find(Rt).get(); if (0 !== i.length) { var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus() } } else { if (27 === t.which) { var s = mt(e).find(kt)[0];
                            mt(s).trigger("focus") }
                        mt(this).trigger("click") } } }, o(l, null, [{ key: "VERSION", get: function() { return "4.1.0" } }, { key: "Default", get: function() { return Ft } }, { key: "DefaultType", get: function() { return Vt } }]), l }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function(t) { t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle") }).on(It.CLICK_DATA_API, Pt, function(t) { t.stopPropagation() }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function() { return mt.fn[pt] = Tt, Qt._jQueryInterface }, Qt),
        wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Jt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Zt = { HIDE: "hide" + qt, HIDDEN: "hidden" + qt, SHOW: "show" + qt, SHOWN: "shown" + qt, FOCUSIN: "focusin" + qt, RESIZE: "resize" + qt, CLICK_DISMISS: "click.dismiss" + qt, KEYDOWN_DISMISS: "keydown.dismiss" + qt, MOUSEUP_DISMISS: "mouseup.dismiss" + qt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt, CLICK_DATA_API: "click" + qt + ".data-api" }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, se = function() {
            function r(t, e) { this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0 } var t = r.prototype; return t.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, t.show = function(t) { var e = this; if (!this._isTransitioning && !this._isShown) { Bt(this._element).hasClass(ne) && (this._isTransitioning = !0); var n = Bt.Event(Zt.SHOW, { relatedTarget: t });
                    Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function(t) { return e.hide(t) }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function() { Bt(e._element).one(Zt.MOUSEUP_DISMISS, function(t) { Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return e._showElement(t) })) } }, t.hide = function(t) { var e = this; if (t && t.preventDefault(), !this._isTransitioning && this._isShown) { var n = Bt.Event(Zt.HIDE); if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) { this._isShown = !1; var i = Bt(this._element).hasClass(ne); if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) { var r = Cn.getTransitionDurationFromElement(this._element);
                            Bt(this._element).one(Cn.TRANSITION_END, function(t) { return e._hideModal(t) }).emulateTransitionEnd(r) } else this._hideModal() } } }, t.dispose = function() { Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, t.handleUpdate = function() { this._adjustDialog() }, t._getConfig = function(t) { return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t }, t._showElement = function(t) { var e = this,
                    n = Bt(this._element).hasClass(ne);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus(); var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }),
                    r = function() { e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i) }; if (n) { var s = Cn.getTransitionDurationFromElement(this._element);
                    Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s) } else r() }, t._enforceFocus = function() { var e = this;
                Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function(t) { document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus() }) }, t._setEscapeEvent = function() { var e = this;
                this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS) }, t._setResizeEvent = function() { var e = this;
                this._isShown ? Bt(window).on(Zt.RESIZE, function(t) { return e.handleUpdate(t) }) : Bt(window).off(Zt.RESIZE) }, t._hideModal = function() { var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN) }) }, t._removeBackdrop = function() { this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null) }, t._showBackdrop = function(t) { var e = this,
                    n = Bt(this._element).hasClass(ne) ? ne : ""; if (this._isShown && this._config.backdrop) { if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function(t) { e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide()) }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return; if (!n) return void t(); var i = Cn.getTransitionDurationFromElement(this._backdrop);
                    Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i) } else if (!this._isShown && this._backdrop) { Bt(this._backdrop).removeClass(ie); var r = function() { e._removeBackdrop(), t && t() }; if (Bt(this._element).hasClass(ne)) { var s = Cn.getTransitionDurationFromElement(this._backdrop);
                        Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s) } else r() } else t && t() }, t._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, t._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, t._checkScrollbar = function() { var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, t._setScrollbar = function() { var r = this; if (this._isBodyOverflowing) { Bt(re.FIXED_CONTENT).each(function(t, e) { var n = Bt(e)[0].style.paddingRight,
                            i = Bt(e).css("padding-right");
                        Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px") }), Bt(re.STICKY_CONTENT).each(function(t, e) { var n = Bt(e)[0].style.marginRight,
                            i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px") }), Bt(re.NAVBAR_TOGGLER).each(function(t, e) { var n = Bt(e)[0].style.marginRight,
                            i = Bt(e).css("margin-right");
                        Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px") }); var t = document.body.style.paddingRight,
                        e = Bt(document.body).css("padding-right");
                    Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px") } }, t._resetScrollbar = function() { Bt(re.FIXED_CONTENT).each(function(t, e) { var n = Bt(e).data("padding-right"); "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right") }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function(t, e) { var n = Bt(e).data("margin-right"); "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right") }); var t = Bt(document.body).data("padding-right"); "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right") }, t._getScrollbarWidth = function() { var t = document.createElement("div");
                t.className = $t, document.body.appendChild(t); var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e }, r._jQueryInterface = function(n, i) { return this.each(function() { var t = Bt(this).data(Gt),
                        e = h({}, r.Default, Bt(this).data(), "object" == typeof n && n); if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i) } else e.show && t.show(i) }) }, o(r, null, [{ key: "VERSION", get: function() { return "4.1.0" } }, { key: "Default", get: function() { return Xt } }]), r }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function(t) { var e, n = this,
                i = Cn.getSelectorFromElement(this);
            i && (e = Bt(i)[0]); var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data()); "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(); var s = Bt(e).one(Zt.SHOW, function(t) { t.isDefaultPrevented() || s.one(Zt.HIDDEN, function() { Bt(n).is(":visible") && n.focus() }) });
            se._jQueryInterface.call(Bt(e), r, this) }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function() { return Bt.fn[Yt] = zt, se._jQueryInterface }, se),
        Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(_e = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(de = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, pe = "out", ve = { HIDE: "hide" + he, HIDDEN: "hidden" + he, SHOW: (me = "show") + he, SHOWN: "shown" + he, INSERTED: "inserted" + he, CLICK: "click" + he, FOCUSIN: "focusin" + he, FOCUSOUT: "focusout" + he, MOUSEENTER: "mouseenter" + he, MOUSELEAVE: "mouseleave" + he }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function() {
            function i(t, e) { if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners() } var t = i.prototype; return t.enable = function() { this._isEnabled = !0 }, t.disable = function() { this._isEnabled = !1 }, t.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, t.toggle = function(t) { if (this._isEnabled)
                    if (t) { var e = this.constructor.DATA_KEY,
                            n = oe(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n) } else { if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);
                        this._enter(null, this) } }, t.dispose = function() { clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, t.show = function() { var e = this; if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements"); var t = oe.Event(this.constructor.Event.SHOW); if (this.isWithContent() && this._isEnabled) { oe(this.element).trigger(t); var n = oe.contains(this.element.ownerDocument.documentElement, this.element); if (t.isDefaultPrevented() || !n) return; var i = this.getTipElement(),
                        r = Cn.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee); var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        o = this._getAttachment(s);
                    this.addAttachmentClass(o); var a = !1 === this.config.container ? document.body : oe(this.config.container);
                    oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, { placement: o, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Ce }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { e._handlePopperPlacementChange(t) } }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop); var l = function() { e.config.animation && e._fixTransition(); var t = e._hoverState;
                        e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e) }; if (oe(this.tip).hasClass(Ee)) { var h = Cn.getTransitionDurationFromElement(this.tip);
                        oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h) } else l() } }, t.hide = function(t) { var e = this,
                    n = this.getTipElement(),
                    i = oe.Event(this.constructor.Event.HIDE),
                    r = function() { e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t() }; if (oe(this.element).trigger(i), !i.isDefaultPrevented()) { if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) { var s = Cn.getTransitionDurationFromElement(n);
                        oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s) } else r();
                    this._hoverState = "" } }, t.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, t.isWithContent = function() { return Boolean(this.getTitle()) }, t.addAttachmentClass = function(t) { oe(this.getTipElement()).addClass(ue + "-" + t) }, t.getTipElement = function() { return this.tip = this.tip || oe(this.config.template)[0], this.tip }, t.setContent = function() { var t = oe(this.getTipElement());
                this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye) }, t.setElementContent = function(t, e) { var n = this.config.html; "object" == typeof e && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e) }, t.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, t._getAttachment = function(t) { return _e[t.toUpperCase()] }, t._setListeners = function() { var i = this;
                this.config.trigger.split(" ").forEach(function(t) { if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) { return i.toggle(t) });
                    else if (t !== be) { var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        oe(i.element).on(e, i.config.selector, function(t) { return i._enter(t) }).on(n, i.config.selector, function(t) { return i._leave(t) }) }
                    oe(i.element).closest(".modal").on("hide.bs.modal", function() { return i.hide() }) }), this.config.selector ? this.config = h({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle() }, t._fixTitle = function() { var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, t._enter = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() { e._hoverState === me && e.show() }, e.config.delay.show) : e.show()) }, t._leave = function(t, e) { var n = this.constructor.DATA_KEY;
                (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() { e._hoverState === pe && e.hide() }, e.config.delay.hide) : e.hide()) }, t._isWithActiveTrigger = function() { for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1 }, t._getConfig = function(t) { return "number" == typeof(t = h({}, this.constructor.Default, oe(this.element).data(), t)).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t }, t._getDelegateConfig = function() { var t = {}; if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]); return t }, t._cleanTipClass = function() { var t = oe(this.getTipElement()),
                    e = t.attr("class").match(fe);
                null !== e && 0 < e.length && t.removeClass(e.join("")) }, t._handlePopperPlacementChange = function(t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, t._fixTransition = function() { var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e) }, i._jQueryInterface = function(n) { return this.each(function() { var t = oe(this).data(le),
                        e = "object" == typeof n && n; if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.0" } }, { key: "Default", get: function() { return ge } }, { key: "NAME", get: function() { return ae } }, { key: "DATA_KEY", get: function() { return le } }, { key: "Event", get: function() { return ve } }, { key: "EVENT_KEY", get: function() { return he } }, { key: "DefaultType", get: function() { return de } }]), i }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function() { return oe.fn[ae] = ce, Se._jQueryInterface }, Se),
        On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), He = h({}, Nn.DefaultType, { content: "(string|element|function)" }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = { HIDE: "hide" + ke, HIDDEN: "hidden" + ke, SHOW: (Me = "show") + ke, SHOWN: "shown" + ke, INSERTED: "inserted" + ke, CLICK: "click" + ke, FOCUSIN: "focusin" + ke, FOCUSOUT: "focusout" + ke, MOUSEENTER: "mouseenter" + ke, MOUSELEAVE: "mouseleave" + ke }, Fe = function(t) { var e, n;

            function i() { return t.apply(this, arguments) || this }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n; var r = i.prototype; return r.isWithContent = function() { return this.getTitle() || this._getContent() }, r.addAttachmentClass = function(t) { we(this.getTipElement()).addClass(Le + "-" + t) }, r.getTipElement = function() { return this.tip = this.tip || we(this.config.template)[0], this.tip }, r.setContent = function() { var t = we(this.getTipElement());
                this.setElementContent(t.find(xe), this.getTitle()); var e = this._getContent(); "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me) }, r._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, r._cleanTipClass = function() { var t = we(this.getTipElement()),
                    e = t.attr("class").match(je);
                null !== e && 0 < e.length && t.removeClass(e.join("")) }, i._jQueryInterface = function(n) { return this.each(function() { var t = we(this).data(Oe),
                        e = "object" == typeof n ? n : null; if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) { if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]() } }) }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.0" } }, { key: "Default", get: function() { return Re } }, { key: "NAME", get: function() { return Ne } }, { key: "DATA_KEY", get: function() { return Oe } }, { key: "Event", get: function() { return Ke } }, { key: "EVENT_KEY", get: function() { return ke } }, { key: "DefaultType", get: function() { return He } }]), i }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function() { return we.fn[Ne] = Pe, Fe._jQueryInterface }, Fe),
        kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = { offset: 10, method: "auto", target: "" }, ze = { offset: "number", method: "string", target: "(string|element)" }, Xe = { ACTIVATE: "activate" + Ye, SCROLL: "scroll" + Ye, LOAD_DATA_API: "load" + Ye + ".data-api" }, Je = "dropdown-item", Ze = "active", $e = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, tn = "offset", en = "position", nn = function() {
            function n(t, e) { var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function(t) { return n._process(t) }), this.refresh(), this._process() } var t = n.prototype; return t.refresh = function() { var e = this,
                    t = this._scrollElement === this._scrollElement.window ? tn : en,
                    r = "auto" === this._config.method ? t : this._config.method,
                    s = r === en ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function(t) { var e, n = Cn.getSelectorFromElement(t); if (n && (e = Ve(n)[0]), e) { var i = e.getBoundingClientRect(); if (i.width || i.height) return [Ve(e)[r]().top + s, n] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) }) }, t.dispose = function() { Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, t._getConfig = function(t) { if ("string" != typeof(t = h({}, qe, t)).target) { var e = Ve(t.target).attr("id");
                    e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e } return Cn.typeCheckConfig(Qe, t, ze), t }, t._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, t._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, t._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, t._process = function() { var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight(); if (this._scrollHeight !== e && this.refresh(), n <= t) { var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i) } else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var r = this._offsets.length; r--;) { this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]) } } }, t._activate = function(e) { this._activeTarget = e, this._clear(); var t = this._selector.split(",");
                t = t.map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' }); var n = Ve(t.join(","));
                n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, { relatedTarget: e }) }, t._clear = function() { Ve(this._selector).filter($e.ACTIVE).removeClass(Ze) }, n._jQueryInterface = function(e) { return this.each(function() { var t = Ve(this).data(Be); if (t || (t = new n(this, "object" == typeof e && e), Ve(this).data(Be, t)), "string" == typeof e) { if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]() } }) }, o(n, null, [{ key: "VERSION", get: function() { return "4.1.0" } }, { key: "Default", get: function() { return qe } }]), n }(), Ve(window).on(Xe.LOAD_DATA_API, function() { for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) { var n = Ve(t[e]);
                nn._jQueryInterface.call(n, n.data()) } }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function() { return Ve.fn[Qe] = Ge, nn._jQueryInterface }, nn),
        Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = { HIDE: "hide" + on, HIDDEN: "hidden" + on, SHOW: "show" + on, SHOWN: "shown" + on, CLICK_DATA_API: "click" + on + ".data-api" }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function() {
            function i(t) { this._element = t } var t = i.prototype; return t.show = function() { var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) { var t, i, e = rn(this._element).closest(gn)[0],
                        r = Cn.getSelectorFromElement(this._element); if (e) { var s = "UL" === e.nodeName ? pn : mn;
                        i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1] } var o = rn.Event(ln.HIDE, { relatedTarget: this._element }),
                        a = rn.Event(ln.SHOW, { relatedTarget: i }); if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) { r && (t = rn(r)[0]), this._activate(this._element, e); var l = function() { var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }),
                                e = rn.Event(ln.SHOWN, { relatedTarget: i });
                            rn(i).trigger(t), rn(n._element).trigger(e) };
                        t ? this._activate(t, t.parentNode, l) : l() } } }, t.dispose = function() { rn.removeData(this._element, sn), this._element = null }, t._activate = function(t, e, n) { var i = this,
                    r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
                    s = n && r && rn(r).hasClass(fn),
                    o = function() { return i._transitionComplete(t, r, n) }; if (r && s) { var a = Cn.getTransitionDurationFromElement(r);
                    rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a) } else o() }, t._transitionComplete = function(t, e, n) { if (e) { rn(e).removeClass(dn + " " + cn); var i = rn(e.parentNode).find(yn)[0];
                    i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1) } if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) { var r = rn(t).closest(_n)[0];
                    r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0) }
                n && n() }, i._jQueryInterface = function(n) { return this.each(function() { var t = rn(this),
                        e = t.data(sn); if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) { if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]() } }) }, o(i, null, [{ key: "VERSION", get: function() { return "4.1.0" } }]), i }(), rn(document).on(ln.CLICK_DATA_API, vn, function(t) { t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show") }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function() { return rn.fn.tab = an, Tn._jQueryInterface }, Tn);! function(t) { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", { value: !0 }) });

/* perfect-scrollbar v0.6.11 */
! function t(e, n, r) {
    function o(l, a) { if (!n[l]) { if (!e[l]) { var s = "function" == typeof require && require; if (!a && s) return s(l, !0); if (i) return i(l, !0); var c = new Error("Cannot find module '" + l + "'"); throw c.code = "MODULE_NOT_FOUND", c } var u = n[l] = { exports: {} };
            e[l][0].call(u.exports, function(t) { var n = e[l][1][t]; return o(n ? n : t) }, u, u.exports, t, e, n, r) } return n[l].exports } for (var i = "function" == typeof require && require, l = 0; l < r.length; l++) o(r[l]); return o }({ 1: [function(t, e, n) { "use strict";

        function r(t) { t.fn.perfectScrollbar = function(t) { return this.each(function() { if ("object" == typeof t || "undefined" == typeof t) { var e = t;
                        i.get(this) || o.initialize(this, e) } else { var n = t; "update" === n ? o.update(this) : "destroy" === n && o.destroy(this) } }) } } var o = t("../main"),
            i = t("../plugin/instances"); if ("function" == typeof define && define.amd) define(["jquery"], r);
        else { var l = window.jQuery ? window.jQuery : window.$; "undefined" != typeof l && r(l) }
        e.exports = r }, { "../main": 7, "../plugin/instances": 18 }], 2: [function(t, e, n) { "use strict";

        function r(t, e) { var n = t.className.split(" ");
            n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ") }

        function o(t, e) { var n = t.className.split(" "),
                r = n.indexOf(e);
            r >= 0 && n.splice(r, 1), t.className = n.join(" ") }
        n.add = function(t, e) { t.classList ? t.classList.add(e) : r(t, e) }, n.remove = function(t, e) { t.classList ? t.classList.remove(e) : o(t, e) }, n.list = function(t) { return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ") } }, {}], 3: [function(t, e, n) { "use strict";

        function r(t, e) { return window.getComputedStyle(t)[e] }

        function o(t, e, n) { return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t }

        function i(t, e) { for (var n in e) { var r = e[n]; "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r } return t } var l = {};
        l.e = function(t, e) { var n = document.createElement(t); return n.className = e, n }, l.appendTo = function(t, e) { return e.appendChild(t), t }, l.css = function(t, e, n) { return "object" == typeof e ? i(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n) }, l.matches = function(t, e) { return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0 }, l.remove = function(t) { "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t) }, l.queryChildren = function(t, e) { return Array.prototype.filter.call(t.childNodes, function(t) { return l.matches(t, e) }) }, e.exports = l }, {}], 4: [function(t, e, n) { "use strict"; var r = function(t) { this.element = t, this.events = {} };
        r.prototype.bind = function(t, e) { "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1) }, r.prototype.unbind = function(t, e) { var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function(r) { return n && r !== e ? !0 : (this.element.removeEventListener(t, r, !1), !1) }, this) }, r.prototype.unbindAll = function() { for (var t in this.events) this.unbind(t) }; var o = function() { this.eventElements = [] };
        o.prototype.eventElement = function(t) { var e = this.eventElements.filter(function(e) { return e.element === t })[0]; return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e }, o.prototype.bind = function(t, e, n) { this.eventElement(t).bind(e, n) }, o.prototype.unbind = function(t, e, n) { this.eventElement(t).unbind(e, n) }, o.prototype.unbindAll = function() { for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll() }, o.prototype.once = function(t, e, n) { var r = this.eventElement(t),
                o = function(t) { r.unbind(e, o), n(t) };
            r.bind(e, o) }, e.exports = o }, {}], 5: [function(t, e, n) { "use strict";
        e.exports = function() {
            function t() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) } return function() { return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t() } }() }, {}], 6: [function(t, e, n) { "use strict"; var r = t("./class"),
            o = t("./dom"),
            i = n.toInt = function(t) { return parseInt(t, 10) || 0 },
            l = n.clone = function(t) { if (null === t) return null; if (t.constructor === Array) return t.map(l); if ("object" == typeof t) { var e = {}; for (var n in t) e[n] = l(t[n]); return e } return t };
        n.extend = function(t, e) { var n = l(t); for (var r in e) n[r] = l(e[r]); return n }, n.isEditable = function(t) { return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]") }, n.removePsClasses = function(t) { for (var e = r.list(t), n = 0; n < e.length; n++) { var o = e[n];
                0 === o.indexOf("ps-") && r.remove(t, o) } }, n.outerWidth = function(t) { return i(o.css(t, "width")) + i(o.css(t, "paddingLeft")) + i(o.css(t, "paddingRight")) + i(o.css(t, "borderLeftWidth")) + i(o.css(t, "borderRightWidth")) }, n.startScrolling = function(t, e) { r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y")) }, n.stopScrolling = function(t, e) { r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y")) }, n.env = { isWebKit: "WebkitAppearance" in document.documentElement.style, supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, supportsIePointer: null !== window.navigator.msMaxTouchPoints } }, { "./class": 2, "./dom": 3 }], 7: [function(t, e, n) { "use strict"; var r = t("./plugin/destroy"),
            o = t("./plugin/initialize"),
            i = t("./plugin/update");
        e.exports = { initialize: o, update: i, destroy: r } }, { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 }], 8: [function(t, e, n) { "use strict";
        e.exports = { handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, stopPropagationOnClick: !0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, useBothWheelAxes: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default" } }, {}], 9: [function(t, e, n) { "use strict"; var r = t("../lib/helper"),
            o = t("../lib/dom"),
            i = t("./instances");
        e.exports = function(t) { var e = i.get(t);
            e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), i.remove(t)) } }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 }], 10: [function(t, e, n) { "use strict";

        function r(t, e) {
            function n(t) { return t.getBoundingClientRect() } var r = function(t) { t.stopPropagation() };
            e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function(r) { var i = o.toInt(e.scrollbarYHeight / 2),
                    s = e.railYRatio * (r.pageY - window.pageYOffset - n(e.scrollbarYRail).top - i),
                    c = e.railYRatio * (e.railYHeight - e.scrollbarYHeight),
                    u = s / c;
                0 > u ? u = 0 : u > 1 && (u = 1), a(t, "top", (e.contentHeight - e.containerHeight) * u), l(t), r.stopPropagation() }), e.settings.stopPropagationOnClick && e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function(r) { var i = o.toInt(e.scrollbarXWidth / 2),
                    s = e.railXRatio * (r.pageX - window.pageXOffset - n(e.scrollbarXRail).left - i),
                    c = e.railXRatio * (e.railXWidth - e.scrollbarXWidth),
                    u = s / c;
                0 > u ? u = 0 : u > 1 && (u = 1), a(t, "left", (e.contentWidth - e.containerWidth) * u - e.negativeScrollAdjustment), l(t), r.stopPropagation() }) } var o = t("../../lib/helper"),
            i = t("../instances"),
            l = t("../update-geometry"),
            a = t("../update-scroll");
        e.exports = function(t) { var e = i.get(t);
            r(t, e) } }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 11: [function(t, e, n) { "use strict";

        function r(t, e) {
            function n(n) { var o = r + n * e.railXRatio,
                    l = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                0 > o ? e.scrollbarXLeft = 0 : o > l ? e.scrollbarXLeft = l : e.scrollbarXLeft = o; var a = i.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                c(t, "left", a) } var r = null,
                o = null,
                a = function(e) { n(e.pageX - o), s(t), e.stopPropagation(), e.preventDefault() },
                u = function() { i.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", a) };
            e.event.bind(e.scrollbarX, "mousedown", function(n) { o = n.pageX, r = i.toInt(l.css(e.scrollbarX, "left")) * e.railXRatio, i.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault() }) }

        function o(t, e) {
            function n(n) { var o = r + n * e.railYRatio,
                    l = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                0 > o ? e.scrollbarYTop = 0 : o > l ? e.scrollbarYTop = l : e.scrollbarYTop = o; var a = i.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                c(t, "top", a) } var r = null,
                o = null,
                a = function(e) { n(e.pageY - o), s(t), e.stopPropagation(), e.preventDefault() },
                u = function() { i.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", a) };
            e.event.bind(e.scrollbarY, "mousedown", function(n) { o = n.pageY, r = i.toInt(l.css(e.scrollbarY, "top")) * e.railYRatio, i.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", a), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault() }) } var i = t("../../lib/helper"),
            l = t("../../lib/dom"),
            a = t("../instances"),
            s = t("../update-geometry"),
            c = t("../update-scroll");
        e.exports = function(t) { var e = a.get(t);
            r(t, e), o(t, e) } }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 12: [function(t, e, n) { "use strict";

        function r(t, e) {
            function n(n, r) { var o = t.scrollTop; if (0 === n) { if (!e.scrollbarYActive) return !1; if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation } var i = t.scrollLeft; if (0 === r) { if (!e.scrollbarXActive) return !1; if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation } return !0 } var r = !1;
            e.event.bind(t, "mouseenter", function() { r = !0 }), e.event.bind(t, "mouseleave", function() { r = !1 }); var l = !1;
            e.event.bind(e.ownerDocument, "keydown", function(c) { if (!c.isDefaultPrevented || !c.isDefaultPrevented()) { var u = i.matches(e.scrollbarX, ":focus") || i.matches(e.scrollbarY, ":focus"); if (r || u) { var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement; if (d) { if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                            else
                                for (; d.shadowRoot;) d = d.shadowRoot.activeElement; if (o.isEditable(d)) return } var p = 0,
                            f = 0; switch (c.which) {
                            case 37:
                                p = -30; break;
                            case 38:
                                f = 30; break;
                            case 39:
                                p = 30; break;
                            case 40:
                                f = -30; break;
                            case 33:
                                f = 90; break;
                            case 32:
                                f = c.shiftKey ? 90 : -90; break;
                            case 34:
                                f = -90; break;
                            case 35:
                                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight; break;
                            case 36:
                                f = c.ctrlKey ? t.scrollTop : e.containerHeight; break;
                            default:
                                return }
                        s(t, "top", t.scrollTop - f), s(t, "left", t.scrollLeft + p), a(t), l = n(p, f), l && c.preventDefault() } } }) } var o = t("../../lib/helper"),
            i = t("../../lib/dom"),
            l = t("../instances"),
            a = t("../update-geometry"),
            s = t("../update-scroll");
        e.exports = function(t) { var e = l.get(t);
            r(t, e) } }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 13: [function(t, e, n) { "use strict";

        function r(t, e) {
            function n(n, r) { var o = t.scrollTop; if (0 === n) { if (!e.scrollbarYActive) return !1; if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && 0 > r) return !e.settings.wheelPropagation } var i = t.scrollLeft; if (0 === r) { if (!e.scrollbarXActive) return !1; if (0 === i && 0 > n || i >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation } return !0 }

            function r(t) { var e = t.deltaX,
                    n = -1 * t.deltaY; return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), [e, n] }

            function o(e, n) { var r = t.querySelector("textarea:hover, .ps-child:hover"); if (r) { if ("TEXTAREA" !== r.tagName && !window.getComputedStyle(r).overflow.match(/(scroll|auto)/)) return !1; var o = r.scrollHeight - r.clientHeight; if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && 0 > n)) return !0; var i = r.scrollLeft - r.clientWidth; if (i > 0 && !(0 === r.scrollLeft && 0 > e || r.scrollLeft === i && e > 0)) return !0 } return !1 }

            function a(a) { var c = r(a),
                    u = c[0],
                    d = c[1];
                o(u, d) || (s = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? l(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : l(t, "top", t.scrollTop + u * e.settings.wheelSpeed), s = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : l(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), s = !0) : (l(t, "top", t.scrollTop - d * e.settings.wheelSpeed), l(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), i(t), s = s || n(u, d), s && (a.stopPropagation(), a.preventDefault())) } var s = !1; "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", a) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", a) } var o = t("../instances"),
            i = t("../update-geometry"),
            l = t("../update-scroll");
        e.exports = function(t) { var e = o.get(t);
            r(t, e) } }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 14: [function(t, e, n) { "use strict";

        function r(t, e) { e.event.bind(t, "scroll", function() { i(t) }) } var o = t("../instances"),
            i = t("../update-geometry");
        e.exports = function(t) { var e = o.get(t);
            r(t, e) } }, { "../instances": 18, "../update-geometry": 19 }], 15: [function(t, e, n) { "use strict";

        function r(t, e) {
            function n() { var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : ""; return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer }

            function r() { c || (c = setInterval(function() { return i.get(t) ? (a(t, "top", t.scrollTop + u.top), a(t, "left", t.scrollLeft + u.left), void l(t)) : void clearInterval(c) }, 50)) }

            function s() { c && (clearInterval(c), c = null), o.stopScrolling(t) } var c = null,
                u = { top: 0, left: 0 },
                d = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function() { t.contains(n()) ? d = !0 : (d = !1, s()) }), e.event.bind(window, "mouseup", function() { d && (d = !1, s()) }), e.event.bind(window, "mousemove", function(e) { if (d) { var n = { x: e.pageX, y: e.pageY },
                        i = { left: t.offsetLeft, right: t.offsetLeft + t.offsetWidth, top: t.offsetTop, bottom: t.offsetTop + t.offsetHeight };
                    n.x < i.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > i.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < i.top + 3 ? (i.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > i.bottom - 3 ? (n.y - i.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? s() : r() } }) } var o = t("../../lib/helper"),
            i = t("../instances"),
            l = t("../update-geometry"),
            a = t("../update-scroll");
        e.exports = function(t) { var e = i.get(t);
            r(t, e) } }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 16: [function(t, e, n) { "use strict";

        function r(t, e, n, r) {
            function o(n, r) { var o = t.scrollTop,
                    i = t.scrollLeft,
                    l = Math.abs(n),
                    a = Math.abs(r); if (a > l) { if (0 > r && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation } else if (l > a && (0 > n && i === e.contentWidth - e.containerWidth || n > 0 && 0 === i)) return !e.settings.swipePropagation; return !0 }

            function s(e, n) { a(t, "top", t.scrollTop - n), a(t, "left", t.scrollLeft - e), l(t) }

            function c() { Y = !0 }

            function u() { Y = !1 }

            function d(t) { return t.targetTouches ? t.targetTouches[0] : t }

            function p(t) { return t.targetTouches && 1 === t.targetTouches.length ? !0 : !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE) }

            function f(t) { if (p(t)) { w = !0; var e = d(t);
                    v.pageX = e.pageX, v.pageY = e.pageY, g = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation() } }

            function h(t) { if (!w && e.settings.swipePropagation && f(t), !Y && w && p(t)) { var n = d(t),
                        r = { pageX: n.pageX, pageY: n.pageY },
                        i = r.pageX - v.pageX,
                        l = r.pageY - v.pageY;
                    s(i, l), v = r; var a = (new Date).getTime(),
                        c = a - g;
                    c > 0 && (m.x = i / c, m.y = l / c, g = a), o(i, l) && (t.stopPropagation(), t.preventDefault()) } }

            function b() {!Y && w && (w = !1, clearInterval(y), y = setInterval(function() { return i.get(t) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (s(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y) }, 10)) } var v = {},
                g = 0,
                m = {},
                y = null,
                Y = !1,
                w = !1;
            n && (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)), r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b))) } var o = t("../../lib/helper"),
            i = t("../instances"),
            l = t("../update-geometry"),
            a = t("../update-scroll");
        e.exports = function(t) { if (o.env.supportsTouch || o.env.supportsIePointer) { var e = i.get(t);
                r(t, e, o.env.supportsTouch, o.env.supportsIePointer) } } }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 17: [function(t, e, n) { "use strict"; var r = t("../lib/helper"),
            o = t("../lib/class"),
            i = t("./instances"),
            l = t("./update-geometry"),
            a = { "click-rail": t("./handler/click-rail"), "drag-scrollbar": t("./handler/drag-scrollbar"), keyboard: t("./handler/keyboard"), wheel: t("./handler/mouse-wheel"), touch: t("./handler/touch"), selection: t("./handler/selection") },
            s = t("./handler/native-scroll");
        e.exports = function(t, e) { e = "object" == typeof e ? e : {}, o.add(t, "ps-container"); var n = i.add(t);
            n.settings = r.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function(e) { a[e](t) }), s(t), l(t) } }, { "../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19 }], 18: [function(t, e, n) { "use strict";

        function r(t) {
            function e() { s.add(t, "ps-focus") }

            function n() { s.remove(t, "ps-focus") } var r = this;
            r.settings = a.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function() { var e = t.scrollLeft,
                    n = null; return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = a.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : a.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = a.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + a.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = a.toInt(u.css(r.scrollbarXRail, "marginLeft")) + a.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = a.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : a.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? a.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = a.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + a.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = a.toInt(u.css(r.scrollbarYRail, "marginTop")) + a.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null }

        function o(t) { return t.getAttribute("data-ps-id") }

        function i(t, e) { t.setAttribute("data-ps-id", e) }

        function l(t) { t.removeAttribute("data-ps-id") } var a = t("../lib/helper"),
            s = t("../lib/class"),
            c = t("./default-setting"),
            u = t("../lib/dom"),
            d = t("../lib/event-manager"),
            p = t("../lib/guid"),
            f = {};
        n.add = function(t) { var e = p(); return i(t, e), f[e] = new r(t), f[e] }, n.remove = function(t) { delete f[o(t)], l(t) }, n.get = function(t) { return f[o(t)] } }, { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 }], 19: [function(t, e, n) { "use strict";

        function r(t, e) { return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e }

        function o(t, e) { var n = { width: e.railXWidth };
            e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, a.css(e.scrollbarXRail, n); var r = { top: t.scrollTop, height: e.railYHeight };
            e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, a.css(e.scrollbarYRail, r), a.css(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }), a.css(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth }) } var i = t("../lib/helper"),
            l = t("../lib/class"),
            a = t("../lib/dom"),
            s = t("./instances"),
            c = t("./update-scroll");
        e.exports = function(t) { var e = s.get(t);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight; var n;
            t.contains(e.scrollbarXRail) || (n = a.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function(t) { a.remove(t) }), a.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = a.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function(t) { a.remove(t) }), a.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, i.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = i.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, i.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = i.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? l.add(t, "ps-active-x") : (l.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? l.add(t, "ps-active-y") : (l.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0)) } }, { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 }], 20: [function(t, e, n) { "use strict"; var r, o, i = t("./instances"),
            l = document.createEvent("Event"),
            a = document.createEvent("Event"),
            s = document.createEvent("Event"),
            c = document.createEvent("Event"),
            u = document.createEvent("Event"),
            d = document.createEvent("Event"),
            p = document.createEvent("Event"),
            f = document.createEvent("Event"),
            h = document.createEvent("Event"),
            b = document.createEvent("Event");
        l.initEvent("ps-scroll-up", !0, !0), a.initEvent("ps-scroll-down", !0, !0), s.initEvent("ps-scroll-left", !0, !0), c.initEvent("ps-scroll-right", !0, !0), u.initEvent("ps-scroll-y", !0, !0), d.initEvent("ps-scroll-x", !0, !0), p.initEvent("ps-x-reach-start", !0, !0), f.initEvent("ps-x-reach-end", !0, !0), h.initEvent("ps-y-reach-start", !0, !0), b.initEvent("ps-y-reach-end", !0, !0), e.exports = function(t, e, n) { if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function"; if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function"; if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function"; "top" === e && 0 >= n && (t.scrollTop = n = 0, t.dispatchEvent(h)), "left" === e && 0 >= n && (t.scrollLeft = n = 0, t.dispatchEvent(p)); var v = i.get(t); "top" === e && n >= v.contentHeight - v.containerHeight && (n = v.contentHeight - v.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(b)), "left" === e && n >= v.contentWidth - v.containerWidth && (n = v.contentWidth - v.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(f)), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && r > n && t.dispatchEvent(l), "top" === e && n > r && t.dispatchEvent(a), "left" === e && o > n && t.dispatchEvent(s), "left" === e && n > o && t.dispatchEvent(c), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(u)), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(d)) } }, { "./instances": 18 }], 21: [function(t, e, n) { "use strict"; var r = t("../lib/helper"),
            o = t("../lib/dom"),
            i = t("./instances"),
            l = t("./update-geometry"),
            a = t("./update-scroll");
        e.exports = function(t) { var e = i.get(t);
            e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), l(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", "")) } }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 }] }, {}, [1]);

/* Unison JS */
Unison = function() { "use strict"; var a, b = window,
        c = document,
        d = c.head,
        e = {},
        f = !1,
        g = { parseMQ: function(a) { var c = b.getComputedStyle(a, null).getPropertyValue("font-family"); return c.replace(/"/g, "").replace(/'/g, "") }, debounce: function(a, b, c) { var d; return function() { var e = this,
                        f = arguments;
                    clearTimeout(d), d = setTimeout(function() { d = null, c || a.apply(e, f) }, b), c && !d && a.apply(e, f) } }, isObject: function(a) { return "object" == typeof a }, isUndefined: function(a) { return "undefined" == typeof a } },
        h = { on: function(a, b) { g.isObject(e[a]) || (e[a] = []), e[a].push(b) }, emit: function(a, b) { if (g.isObject(e[a]))
                    for (var c = e[a].slice(), d = 0; d < c.length; d++) c[d].call(this, b) } },
        i = { all: function() { for (var a = {}, b = g.parseMQ(c.querySelector("title")).split(","), d = 0; d < b.length; d++) { var e = b[d].trim().split(" ");
                    a[e[0]] = e[1] } return f ? a : null }, now: function(a) { var b = g.parseMQ(d).split(" "),
                    c = { name: b[0], width: b[1] }; return f ? g.isUndefined(a) ? c : a(c) : null }, update: function() { i.now(function(b) { b.name !== a && (h.emit(b.name), h.emit("change", b), a = b.name) }) } }; return b.onresize = g.debounce(i.update, 100), c.addEventListener("DOMContentLoaded", function() { f = "none" !== b.getComputedStyle(d, null).getPropertyValue("clear"), i.update() }), { fetch: { all: i.all, now: i.now }, on: h.on, emit: h.emit, util: { debounce: g.debounce, isObject: g.isObject } } }();

/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

! function() { "use strict";

    function e(e) {
        function t(t, n) { var s, h, k = t == window,
                y = n && void 0 !== n.message ? n.message : void 0; if (n = e.extend({}, e.blockUI.defaults, n || {}), !n.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) { if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = void 0 === y ? n.message : y, k && p && o(window, { fadeOut: 0 }), y && "string" != typeof y && (y.parentNode || y.jquery)) { var m = y.jquery ? y[0] : y,
                        v = {};
                    e(t).data("blockUI.history", v), v.el = m, v.parent = m.parentNode, v.display = m.style.display, v.position = m.style.position, v.parent && v.parent.removeChild(m) }
                e(t).data("blockUI.onUnblock", n.onUnblock); var g, I, w, U, x = n.baseZ;
                g = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && g.css("opacity", 0); var C = [g, I, w],
                    S = e(k ? "body" : t);
                e.each(C, function() { this.appendTo(S) }), n.theme && n.draggable && e.fn.draggable && w.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" }); var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0); if (u || O) { if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = d(t, "borderTopWidth"),
                        T = d(t, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;
                    e.each(C, function(e, t) { var o = t[0].style; if (o.position = "absolute", 2 > e) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
                        else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
                        else if (!n.centerY && k) { var i = n.css && n.css.top ? parseInt(n.css.top, 10) : 0,
                                s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + i + ') + "px"';
                            o.setExpression("top", s) } }) } if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && g.show(), n.fadeIn) { var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;
                    n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z) } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)(); if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : a(w[0], n.centerX, n.centerY), n.timeout) { var W = setTimeout(function() { k ? e.unblockUI(n) : e(t).unblock(n) }, n.timeout);
                    e(t).data("blockUI.timeout", W) } } }

        function o(t, o) { var s, l = t == window,
                a = e(t),
                d = a.data("blockUI.history"),
                c = a.data("blockUI.timeout");
            c && (clearTimeout(c), a.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock")); var r;
            r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function() { 0 === --s && n(r, d, o, t) })) : n(r, d, o, t) }

        function n(t, o, n, i) { var s = e(i); if (!s.data("blockUI.isBlocked")) { t.each(function(e, t) { this.parentNode && this.parentNode.removeChild(this) }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n); var l = e(document.body),
                    a = l.width(),
                    d = l[0].style.width;
                l.width(a - 1).width(a), l[0].style.width = d } }

        function i(t, o, n) { var i = o == window,
                l = e(o); if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) { var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(a, n, s) : e(document).unbind(a, s) } }

        function s(t) { if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) { var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0]; if (n || i) return setTimeout(function() { l(i) }, 10), !1 } var s = t.data,
                a = e(t.target); return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length }

        function l(e) { if (b) { var t = b[e === !0 ? b.length - 1 : 0];
                t && t.focus() } }

        function a(e, t, o) { var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - d(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - d(n, "borderTopWidth");
            t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0") }

        function d(t, o) { return parseInt(e.css(t, o), 10) || 0 }
        e.fn._fadeIn = e.fn.fadeIn; var c = e.noop || function() {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) { t(window, e) }, e.unblockUI = function(e) { o(window, e) }, e.growlUI = function(t, o, n, i) { var s = e('<div class="growlUI"></div>');
            t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), void 0 === n && (n = 3e3); var l = function(t) { t = t || {}, e.blockUI({ message: s, fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700, fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3, timeout: "undefined" != typeof t.timeout ? t.timeout : n, centerY: !1, showOverlay: !1, onUnblock: i, css: e.blockUI.defaults.growlCSS }) };
            l();
            s.css("opacity");
            s.mouseover(function() { l({ fadeIn: 0, timeout: 3e4 }); var t = e(".blockMsg");
                t.stop(), t.fadeTo(300, 1) }).mouseout(function() { e(".blockMsg").fadeOut(1e3) }) }, e.fn.block = function(o) { if (this[0] === window) return e.blockUI(o), this; var n = e.extend({}, e.blockUI.defaults, o || {}); return this.each(function() { var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({ fadeOut: 0 }) }), this.each(function() { "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o) }) }, e.fn.unblock = function(t) { return this[0] === window ? (e.unblockUI(t), this) : this.each(function() { o(this, t) }) }, e.blockUI.version = 2.7, e.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 }; var p = null,
            b = [] } "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery) }();

/*
 * jquery-match-height 0.7.2 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
! function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
    var e = -1,
        o = -1,
        n = function(t) { return parseFloat(t) || 0 },
        a = function(e) { var o = 1,
                a = t(e),
                i = null,
                r = []; return a.each(function() { var e = t(this),
                    a = e.offset().top - n(e.css("margin-top")),
                    s = r.length > 0 ? r[r.length - 1] : null;
                null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a }), r },
        i = function(e) {
            var o = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
        },
        r = t.fn.matchHeight = function(e) { var o = i(e); if (o.remove) { var n = this; return this.css(o.property, ""), t.each(r._groups, function(t, e) { e.elements = e.elements.not(n) }), this } return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this) };
    r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
        r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function(e, o) {
            var s = i(o),
                h = t(e),
                l = [h],
                c = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                u = h.parents().filter(":hidden");
            return u.each(function() { var e = t(this);
                    e.data("style-cache", e.attr("style")) }), u.css("display", "block"), s.byRow && !s.target && (h.each(function() {
                    var e = t(this),
                        o = e.css("display");
                    "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                        display: o,
                        "padding-top": "0",
                        "padding-bottom": "0",
                        "margin-top": "0",
                        "margin-bottom": "0",
                        "border-top-width": "0",
                        "border-bottom-width": "0",
                        height: "100px",
                        overflow: "hidden"
                    })
                }), l = a(h), h.each(function() { var e = t(this);
                    e.attr("style", e.data("style-cache") || "") })), t.each(l, function(e, o) {
                    var a = t(o),
                        i = 0;
                    if (s.target) i = s.target.outerHeight(!1);
                    else {
                        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
                        a.each(function() {
                            var e = t(this),
                                o = e.attr("style"),
                                n = e.css("display");
                            "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                            var a = {
                                display: n
                            };
                            a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                        })
                    }
                    a.each(function() { var e = t(this),
                            o = 0;
                        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px")) })
                }), u.each(function() { var e = t(this);
                    e.attr("style", e.data("style-cache") || null) }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
                this
        }, r._applyDataApi = function() { var e = {};
            t("[data-match-height], [data-mh]").each(function() { var o = t(this),
                    n = o.attr("data-mh") || o.attr("data-match-height");
                n in e ? e[n] = e[n].add(o) : e[n] = o }), t.each(e, function() { this.matchHeight(!0) }) };
    var s = function(e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) };
    r._update = function(n, a) {
        if (a && "resize" === a.type) {
            var i = t(window).width();
            if (i === e) return;
            e = i;
        }
        n ? o === -1 && (o = setTimeout(function() { s(a), o = -1 }, r._throttle)) : s(a)
    }, t(r._applyDataApi);
    var h = t.fn.on ? "on" : "bind";
    t(window)[h]("load", function(t) { r._update(!1, t) }), t(window)[h]("resize orientationchange", function(t) { r._update(!0, t) })
});
/*
 *	jQuery Sliding Menu Plugin
 *	Mobile app list-style navigation in the browser
 *
 *	Written by Ali Zahid
 *	http://designplox.com/jquery-sliding-menu
 */
! function(a) { var e = [];
    a.fn.slidingMenu = function(t) {
        function n(e) { var t = a("ul", e),
                n = []; return a(t).each(function(e, t) { var r = a(t),
                    s = r.prev(),
                    l = i(); if (1 == s.length && (s.addClass("nav-has-children dropdown-item").attr("href", "#menu-panel-" + l), s.append('<i class="ft-arrow-right children-in"></i>')), r.attr("id", "menu-panel-" + l), 0 == e) r.addClass("menu-panel-root");
                else { r.addClass("menu-panel"); var d = (a("<li></li>"), a("<a></a>").addClass("nav-has-parent back primary dropdown-item").attr("href", "#menu-panel-back"));
                    r.prepend(d) }
                n.push(t) }), n }

        function r(e, t) { var n = { id: "menu-panel-" + i(), children: [], root: t ? !1 : !0 },
                s = []; return t && n.children.push({ styleClass: "back", href: "#" + t.id }), a(e).each(function(a, e) { if (n.children.push(e), e.children) { var t = r(e.children, n);
                    e.href = "#" + t[0].id, e.styleClass = "nav", s = s.concat(t) } }), [n].concat(s) }

        function i() { var a;
            do a = Math.random().toString(36).substring(3, 8); while (e.indexOf(a) >= 0); return e.push(a), a }

        function s() { var e = a(".sliding-menu-wrapper"),
                t = a(".sliding-menu-wrapper ul");
            t.length && setTimeout(function() { var n = a(l).width();
                e.width(t.length * n), t.each(function(e, t) { var r = a(t);
                    r.width(n) }), e.css("margin-left", "") }, 300) } var l = this.selector,
            d = !1; "rtl" == a("html").data("textdirection") && (d = !0); var h = a.extend({ dataJSON: !1, backLabel: "Back" }, t); return this.each(function() { var e, t = this,
                i = a(t); if (i.hasClass("sliding-menu")) return void s(); var l = i.outerWidth();
            e = h.dataJSON ? r(h.dataJSON) : n(i), i.empty().addClass("sliding-menu"); var p;
            h.dataJSON ? a(e).each(function(e, t) { var n = a("<ul></ul>");
                t.root && (p = "#" + t.id), n.attr("id", t.id), n.addClass("menu-panel"), n.width(l), a(t.children).each(function(e, t) { var r = a("<a></a>");
                    r.attr("class", t.styleClass), r.attr("href", t.href), r.text(t.label); var i = a("<li></li>");
                    i.append(r), n.append(i) }), i.append(n) }) : a(e).each(function(e, t) { var n = a(t);
                n.hasClass("menu-panel-root") && (p = "#" + n.attr("id")), n.width(l), i.append(t) }), p = a(p), p.addClass("menu-panel-root"); var c = p;
            i.height(p.height()); var u = a("<div></div>").addClass("sliding-menu-wrapper").width(e.length * l); return i.wrapInner(u), u = a(".sliding-menu-wrapper", i), a("a", t).on("click", function(e) { var t = a(this).attr("href"),
                    n = a(this).text(); if (u.is(":animated")) return void e.preventDefault(); if ("#" == t) e.preventDefault();
                else if (0 == t.indexOf("#menu-panel")) { var r, s, l = a(t),
                        o = a(this).hasClass("back");
                    d === !0 ? s = parseInt(u.css("margin-right")) : r = parseInt(u.css("margin-left")); var f = i.width();
                    a(this).closest("ul").hasClass("menu-panel-root") && (c = p), o ? ("#menu-panel-back" == t && (l = c.prev()), d === !0 ? properties = { marginRight: s + f } : properties = { marginLeft: r + f }, u.stop(!0, !0).animate(properties, "fast")) : (l.insertAfter(c), h.backLabel === !0 ? a(".back", l).html('<i class="la la-arrow-circle-o-left back-in"></i>' + n) : a(".back", l).text(h.backLabel), d === !0 ? properties = { marginRight: s - f } : properties = { marginLeft: r - f }, u.stop(!0, !0).animate(properties, "fast")), c = l, i.stop(!0, !0).animate({ height: l.height() }, "fast"), e.preventDefault() } }), this }) } }(jQuery);

/*!
 * screenfull
 * v3.3.2 - 2017-10-27
 * (c) Sindre Sorhus; MIT License
 */

! function() { "use strict"; var a = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
        b = "undefined" != typeof module && module.exports,
        c = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        d = function() { for (var b, c = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], d = 0, e = c.length, f = {}; d < e; d++)
                if ((b = c[d]) && b[1] in a) { for (d = 0; d < b.length; d++) f[c[0][d]] = b[d]; return f }
            return !1 }(),
        e = { change: d.fullscreenchange, error: d.fullscreenerror },
        f = { request: function(b) { var e = d.requestFullscreen;
                b = b || a.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? b[e]() : b[e](c && Element.ALLOW_KEYBOARD_INPUT) }, exit: function() { a[d.exitFullscreen]() }, toggle: function(a) { this.isFullscreen ? this.exit() : this.request(a) }, onchange: function(a) { this.on("change", a) }, onerror: function(a) { this.on("error", a) }, on: function(b, c) { var d = e[b];
                d && a.addEventListener(d, c, !1) }, off: function(b, c) { var d = e[b];
                d && a.removeEventListener(d, c, !1) }, raw: d }; if (!d) return void(b ? module.exports = !1 : window.screenfull = !1);
    Object.defineProperties(f, { isFullscreen: { get: function() { return Boolean(a[d.fullscreenElement]) } }, element: { enumerable: !0, get: function() { return a[d.fullscreenElement] } }, enabled: { enumerable: !0, get: function() { return Boolean(a[d.fullscreenEnabled]) } } }), b ? module.exports = f : window.screenfull = f }();

/*! pace 1.0.0 */
(function() { var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function(a, b) {
            function c() { this.constructor = a } for (var d in b) Y.call(b, d) && (a[d] = b[d]); return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a },
        $ = [].indexOf || function(a) { for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1 }; for (u = { catchupTime: 100, initialRate: .03, minTime: 250, ghostTime: 100, maxProgressPerFrame: 20, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] } }, C = function() { var a; return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) { return setTimeout(a, 50) }, t = function(a) { return clearTimeout(a) }), G = function(a) { var b, c; return b = C(), (c = function() { var d; return d = C() - b, d >= 33 ? (b = C(), a(d, function() { return E(c) })) : setTimeout(c, 33 - d) })() }, F = function() { var a, b, c; return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b] }, v = function() { var a, b, c, d, e, f, g; for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
                if (c = d[f])
                    for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
            return b }, q = function(a) { var b, c, d, e, f; for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++; return c / b }, x = function(a, b) { var c, d, e; if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) { if (c = e.getAttribute("data-pace-" + a), !b) return c; try { return JSON.parse(c) } catch (f) { return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0 } } }, g = function() {
            function a() {} return a.prototype.on = function(a, b, c, d) { var e; return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({ handler: b, ctx: c, once: d }) }, a.prototype.once = function(a, b, c) { return this.on(a, b, c, !0) }, a.prototype.off = function(a, b) { var c, d, e; if (null != (null != (d = this.bindings) ? d[a] : void 0)) { if (null == b) return delete this.bindings[a]; for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++); return e } }, a.prototype.trigger = function() { var a, b, c, d, e, f, g, h, i; if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) { for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++); return i } }, a }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function(a) {
        function b() { return V = b.__super__.constructor.apply(this, arguments) } return Z(b, a), b }(Error), b = function() {
        function a() { this.progress = 0 } return a.prototype.getElement = function() { var a; if (null == this.el) { if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el) } return this.el }, a.prototype.finish = function() { var a; return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done" }, a.prototype.update = function(a) { return this.progress = a, this.render() }, a.prototype.destroy = function() { try { this.getElement().parentNode.removeChild(this.getElement()) } catch (a) { i = a } return this.el = void 0 }, a.prototype.render = function() { var a, b, c, d, e, f, g; if (null == document.querySelector(D.target)) return !1; for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d; return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress }, a.prototype.done = function() { return this.progress >= 100 }, a }(), h = function() {
        function a() { this.bindings = {} } return a.prototype.trigger = function(a, b) { var c, d, e, f, g; if (null != this.bindings[a]) { for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b)); return g } }, a.prototype.on = function(a, b) { var c; return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b) }, a }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) { var c, d, e, f;
        f = []; for (d in b.prototype) try { e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0) } catch (g) { c = g }
        return f }, A = [], j.ignore = function() { var a, b, c; return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c }, j.track = function() { var a, b, c; return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c }, J = function(a) { var b; if (null == a && (a = "GET"), "track" === A[0]) return "force"; if (!A.length && D.ajax) { if ("socket" === a && D.ajax.trackWebSockets) return !0; if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0 } return !1 }, k = function(a) {
        function b() { var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function(a) { var b; return b = a.open, a.open = function(d, e) { return J(d) && c.trigger("request", { type: d, url: e, request: a }), b.apply(a, arguments) } }, window.XMLHttpRequest = function(b) { var c; return c = new P(b), a(c), c }; try { w(window.XMLHttpRequest, P) } catch (d) {} if (null != O) { window.XDomainRequest = function() { var b; return b = new O, a(b), b }; try { w(window.XDomainRequest, O) } catch (d) {} } if (null != N && D.ajax.trackWebSockets) { window.WebSocket = function(a, b) { var d; return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", { type: "socket", url: a, protocols: b, request: d }), d }; try { w(window.WebSocket, N) } catch (d) {} } } return Z(b, a), b }(h), R = null, y = function() { return null == R && (R = new k), R }, I = function(a) { var b, c, d, e; for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
            if (b = e[c], "string" == typeof b) { if (-1 !== a.indexOf(b)) return !0 } else if (b.test(a)) return !0; return !1 }, y().on("request", function(b) { var c, d, e, f, g; return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() { var b, c, g, h, i, k; if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) { for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) { if (K = i[c], K instanceof a) { K.watch.apply(K, d); break }
                    k.push(void 0) } return k } }, c)) }), a = function() {
        function a() { var a = this;
            this.elements = [], y().on("request", function() { return a.watch.apply(a, arguments) }) } return a.prototype.watch = function(a) { var b, c, d, e; return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c)) }, a }(), o = function() {
        function a(a) { var b, c, d, e, f, g, h = this; if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function(a) { return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2 }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() { return h.progress = 100 }, !1);
            else f = a.onreadystatechange, a.onreadystatechange = function() { var b; return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0 } } return a }(), n = function() {
        function a(a) { var b, c, d, e, f = this; for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() { return f.progress = 100 }, !1) } return a }(), d = function() {
        function a(a) { var b, c, d, f; for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b)) } return a }(), e = function() {
        function a(a) { this.selector = a, this.progress = 0, this.check() } return a.prototype.check = function() { var a = this; return document.querySelector(this.selector) ? this.done() : setTimeout(function() { return a.check() }, D.elements.checkInterval) }, a.prototype.done = function() { return this.progress = 100 }, a }(), c = function() {
        function a() { var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() { return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0 } } return a.prototype.states = { loading: 0, interactive: 50, complete: 100 }, a }(), f = function() {
        function a() { var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() { var g; return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3)) }, 50) } return a }(), m = function() {
        function a(a) { this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress")) } return a.prototype.tick = function(a, b) { var c; return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress }, a }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() { return D.restartOnPushState ? j.restart() : void 0 }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() { return z(), T.apply(window.history, arguments) }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() { return z(), W.apply(window.history, arguments) }), l = { ajax: a, elements: d, document: c, eventLag: f }, (B = function() { var a, c, d, e, f, g, h, i; for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a])); for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D)); return j.bar = r = new b, H = [], M = new m })(), j.stop = function() { return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B() }, j.restart = function() { return j.trigger("restart"), j.stop(), j.start() }, j.go = function() { var a; return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) { var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w; for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b)); return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() { return r.finish(), j.running = !1, j.trigger("hide") }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c() }) }, j.start = function(a) { v(D, a), j.running = !0; try { r.render() } catch (b) { i = b } return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50) }, "function" == typeof define && define.amd ? define(function() { return j }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start() }).call(this);
;/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get = function t(e, i, n) { null === e && (e = Function.prototype); var s = Object.getOwnPropertyDescriptor(e, i); if (void 0 === s) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : t(o, i, n) } if ("value" in s) return s.value; var a = s.get; return void 0 !== a ? a.call(n) : void 0 },
    _createClass = function() {
        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        return function(t, e, i) { return e && n(t.prototype, e), i && n(t, i), t }
    }();

function _possibleConstructorReturn(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}

function _classCallCheck(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
window.cash = function() {
    var i, o = document,
        a = window,
        t = Array.prototype,
        r = t.slice,
        n = t.filter,
        s = t.push,
        e = function() {},
        h = function(t) { return typeof t == typeof e && t.call },
        d = function(t) { return "string" == typeof t },
        l = /^#[\w-]*$/,
        u = /^\.[\w-]*$/,
        c = /<.+>/,
        p = /^\w+$/;

    function v(t, e) { e = e || o; var i = u.test(t) ? e.getElementsByClassName(t.slice(1)) : p.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t); return i }

    function f(t) {
        if (!i) {
            var e = (i = o.implementation.createHTMLDocument(null)).createElement("base");
            e.href = o.location.href, i.head.appendChild(e)
        }
        return i.body.innerHTML = t, i.body.childNodes
    }

    function m(t) { "loading" !== o.readyState ? t() : o.addEventListener("DOMContentLoaded", t) }

    function g(t, e) {
        if (!t) return this;
        if (t.cash && t !== a) return t;
        var i, n = t,
            s = 0;
        if (d(t)) n = l.test(t) ? o.getElementById(t.slice(1)) : c.test(t) ? f(t) : v(t, e);
        else if (h(t)) return m(t), this;
        if (!n) return this;
        if (n.nodeType || n === a) this[0] = n, this.length = 1;
        else
            for (i = this.length = n.length; s < i; s++) this[s] = n[s];
        return this
    }

    function _(t, e) { return new g(t, e) }
    var y = _.fn = _.prototype = g.prototype = { cash: !0, length: 0, push: s, splice: t.splice, map: t.map, init: g };

    function k(t, e) { for (var i = t.length, n = 0; n < i && !1 !== e.call(t[n], t[n], n, t); n++); }

    function b(t, e) { var i = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector); return !!i && i.call(t, e) }

    function w(e) { return d(e) ? b : e.cash ? function(t) { return e.is(t) } : function(t, e) { return t === e } }

    function C(t) { return _(r.call(t).filter(function(t, e, i) { return i.indexOf(t) === e })) }
    Object.defineProperty(y, "constructor", { value: _ }), _.parseHTML = f, _.noop = e, _.isFunction = h, _.isString = d, _.extend = y.extend = function(t) {
        t = t || {};
        var e = r.call(arguments),
            i = e.length,
            n = 1;
        for (1 === e.length && (t = this, n = 0); n < i; n++)
            if (e[n])
                for (var s in e[n]) e[n].hasOwnProperty(s) && (t[s] = e[n][s]);
        return t
    }, _.extend({ merge: function(t, e) { for (var i = +e.length, n = t.length, s = 0; s < i; n++, s++) t[n] = e[s]; return t.length = n, t }, each: k, matches: b, unique: C, isArray: Array.isArray, isNumeric: function(t) { return !isNaN(parseFloat(t)) && isFinite(t) } });
    var E = _.uid = "_cash" + Date.now();

    function M(t) { return t[E] = t[E] || {} }

    function O(t, e, i) { return M(t)[e] = i }

    function x(t, e) { var i = M(t); return void 0 === i[e] && (i[e] = t.dataset ? t.dataset[e] : _(t).attr("data-" + e)), i[e] }
    y.extend({ data: function(e, i) { if (d(e)) return void 0 === i ? x(this[0], e) : this.each(function(t) { return O(t, e, i) }); for (var t in e) this.data(t, e[t]); return this }, removeData: function(s) { return this.each(function(t) { return i = s, void((n = M(e = t)) ? delete n[i] : e.dataset ? delete e.dataset[i] : _(e).removeAttr("data-" + name)); var e, i, n }) } });
    var L = /\S+/g;

    function T(t) { return d(t) && t.match(L) }

    function $(t, e) { return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) }

    function B(t, e, i) { t.classList ? t.classList.add(e) : i.indexOf(" " + e + " ") && (t.className += " " + e) }

    function D(t, e) { t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "") }
    y.extend({
        addClass: function(t) {
            var n = T(t);
            return n ? this.each(function(e) {
                var i = " " + e.className + " ";
                k(n, function(t) { B(e, t, i) })
            }) : this
        },
        attr: function(e, i) { if (e) { if (d(e)) return void 0 === i ? this[0] ? this[0].getAttribute ? this[0].getAttribute(e) : this[0][e] : void 0 : this.each(function(t) { t.setAttribute ? t.setAttribute(e, i) : t[e] = i }); for (var t in e) this.attr(t, e[t]); return this } },
        hasClass: function(t) {
            var e = !1,
                i = T(t);
            return i && i.length && this.each(function(t) { return !(e = $(t, i[0])) }), e
        },
        prop: function(e, i) { if (d(e)) return void 0 === i ? this[0][e] : this.each(function(t) { t[e] = i }); for (var t in e) this.prop(t, e[t]); return this },
        removeAttr: function(e) { return this.each(function(t) { t.removeAttribute ? t.removeAttribute(e) : delete t[e] }) },
        removeClass: function(t) { if (!arguments.length) return this.attr("class", ""); var i = T(t); return i ? this.each(function(e) { k(i, function(t) { D(e, t) }) }) : this },
        removeProp: function(e) { return this.each(function(t) { delete t[e] }) },
        toggleClass: function(t, e) {
            if (void 0 !== e) return this[e ? "addClass" : "removeClass"](t);
            var n = T(t);
            return n ? this.each(function(e) {
                var i = " " + e.className + " ";
                k(n, function(t) { $(e, t) ? D(e, t) : B(e, t, i) })
            }) : this
        }
    }), y.extend({
        add: function(t, e) { return C(_.merge(this, _(t, e))) },
        each: function(t) { return k(this, t), this },
        eq: function(t) { return _(this.get(t)) },
        filter: function(e) { if (!e) return this; var i = h(e) ? e : w(e); return _(n.call(this, function(t) { return i(t, e) })) },
        first: function() { return this.eq(0) },
        get: function(t) { return void 0 === t ? r.call(this) : t < 0 ? this[t + this.length] : this[t] },
        index: function(t) {
            var e = t ? _(t)[0] : this[0],
                i = t ? this : _(e).parent().children();
            return r.call(i).indexOf(e)
        },
        last: function() { return this.eq(-1) }
    });
    var S, I, A, R, H, P, W = (H = /(?:^\w|[A-Z]|\b\w)/g, P = /[\s-_]+/g, function(t) { return t.replace(H, function(t, e) { return t[0 === e ? "toLowerCase" : "toUpperCase"]() }).replace(P, "") }),
        j = (S = {}, I = document, A = I.createElement("div"), R = A.style, function(e) {
            if (e = W(e), S[e]) return S[e];
            var t = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + ["webkit", "moz", "ms", "o"].join(t + " ") + t).split(" ");
            return k(i, function(t) { if (t in R) return S[t] = e = S[e] = t, !1 }), S[e]
        });

    function F(t, e) { return parseInt(a.getComputedStyle(t[0], null)[e], 10) || 0 }

    function q(e, i, t) {
        var n, s = x(e, "_cashEvents"),
            o = s && s[i];
        o && (t ? (e.removeEventListener(i, t), 0 <= (n = o.indexOf(t)) && o.splice(n, 1)) : (k(o, function(t) { e.removeEventListener(i, t) }), o = []))
    }

    function N(t, e) { return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+") }

    function z(t) {
        var e, i, n, s = t.type;
        if (!s) return null;
        switch (s.toLowerCase()) {
            case "select-one":
                return 0 <= (n = (i = t).selectedIndex) ? i.options[n].value : null;
            case "select-multiple":
                return e = [], k(t.options, function(t) { t.selected && e.push(t.value) }), e.length ? e : null;
            case "radio":
            case "checkbox":
                return t.checked ? t.value : null;
            default:
                return t.value ? t.value : null
        }
    }

    function V(e, i, n) {
        var t = d(i);
        t || !i.length ? k(e, t ? function(t) { return t.insertAdjacentHTML(n ? "afterbegin" : "beforeend", i) } : function(t, e) {
            return function(t, e, i) {
                if (i) {
                    var n = t.childNodes[0];
                    t.insertBefore(e, n)
                } else t.appendChild(e)
            }(t, 0 === e ? i : i.cloneNode(!0), n)
        }) : k(i, function(t) { return V(e, t, n) })
    }
    _.prefixedProp = j, _.camelCase = W, y.extend({ css: function(e, i) { if (d(e)) return e = j(e), 1 < arguments.length ? this.each(function(t) { return t.style[e] = i }) : a.getComputedStyle(this[0])[e]; for (var t in e) this.css(t, e[t]); return this } }), k(["Width", "Height"], function(e) {
        var t = e.toLowerCase();
        y[t] = function() { return this[0].getBoundingClientRect()[t] }, y["inner" + e] = function() { return this[0]["client" + e] }, y["outer" + e] = function(t) { return this[0]["offset" + e] + (t ? F(this, "margin" + ("Width" === e ? "Left" : "Top")) + F(this, "margin" + ("Width" === e ? "Right" : "Bottom")) : 0) }
    }), y.extend({
        off: function(e, i) { return this.each(function(t) { return q(t, e, i) }) },
        on: function(a, i, r, l) {
            var n;
            if (!d(a)) { for (var t in a) this.on(t, i, a[t]); return this }
            return h(i) && (r = i, i = null), "ready" === a ? (m(r), this) : (i && (n = r, r = function(t) {
                for (var e = t.target; !b(e, i);) {
                    if (e === this || null === e) return e = !1;
                    e = e.parentNode
                }
                e && n.call(e, t)
            }), this.each(function(t) {
                var e, i, n, s, o = r;
                l && (o = function() { r.apply(this, arguments), q(t, a, o) }), i = a, n = o, (s = x(e = t, "_cashEvents") || O(e, "_cashEvents", {}))[i] = s[i] || [], s[i].push(n), e.addEventListener(i, n)
            }))
        },
        one: function(t, e, i) { return this.on(t, e, i, !0) },
        ready: m,
        trigger: function(t, e) { if (document.createEvent) { var i = document.createEvent("HTMLEvents"); return i.initEvent(t, !0, !1), i = this.extend(i, e), this.each(function(t) { return t.dispatchEvent(i) }) } }
    }), y.extend({
        serialize: function() {
            var s = "";
            return k(this[0].elements || this, function(t) {
                if (!t.disabled && "FIELDSET" !== t.tagName) {
                    var e = t.name;
                    switch (t.type.toLowerCase()) {
                        case "file":
                        case "reset":
                        case "submit":
                        case "button":
                            break;
                        case "select-multiple":
                            var i = z(t);
                            null !== i && k(i, function(t) { s += N(e, t) });
                            break;
                        default:
                            var n = z(t);
                            null !== n && (s += N(e, n))
                    }
                }
            }), s.substr(1)
        },
        val: function(e) { return void 0 === e ? z(this[0]) : this.each(function(t) { return t.value = e }) }
    }), y.extend({
        after: function(t) { return _(t).insertAfter(this), this },
        append: function(t) { return V(this, t), this },
        appendTo: function(t) { return V(_(t), this), this },
        before: function(t) { return _(t).insertBefore(this), this },
        clone: function() { return _(this.map(function(t) { return t.cloneNode(!0) })) },
        empty: function() { return this.html(""), this },
        html: function(t) { if (void 0 === t) return this[0].innerHTML; var e = t.nodeType ? t[0].outerHTML : t; return this.each(function(t) { return t.innerHTML = e }) },
        insertAfter: function(t) {
            var s = this;
            return _(t).each(function(t, e) {
                var i = t.parentNode,
                    n = t.nextSibling;
                s.each(function(t) { i.insertBefore(0 === e ? t : t.cloneNode(!0), n) })
            }), this
        },
        insertBefore: function(t) {
            var s = this;
            return _(t).each(function(e, i) {
                var n = e.parentNode;
                s.each(function(t) { n.insertBefore(0 === i ? t : t.cloneNode(!0), e) })
            }), this
        },
        prepend: function(t) { return V(this, t, !0), this },
        prependTo: function(t) { return V(_(t), this, !0), this },
        remove: function() { return this.each(function(t) { if (t.parentNode) return t.parentNode.removeChild(t) }) },
        text: function(e) { return void 0 === e ? this[0].textContent : this.each(function(t) { return t.textContent = e }) }
    });
    var X = o.documentElement;
    return y.extend({ position: function() { var t = this[0]; return { left: t.offsetLeft, top: t.offsetTop } }, offset: function() { var t = this[0].getBoundingClientRect(); return { top: t.top + a.pageYOffset - X.clientTop, left: t.left + a.pageXOffset - X.clientLeft } }, offsetParent: function() { return _(this[0].offsetParent) } }), y.extend({
        children: function(e) { var i = []; return this.each(function(t) { s.apply(i, t.children) }), i = C(i), e ? i.filter(function(t) { return b(t, e) }) : i },
        closest: function(t) { return !t || this.length < 1 ? _() : this.is(t) ? this.filter(t) : this.parent().closest(t) },
        is: function(e) {
            if (!e) return !1;
            var i = !1,
                n = w(e);
            return this.each(function(t) { return !(i = n(t, e)) }), i
        },
        find: function(e) { if (!e || e.nodeType) return _(e && this.has(e).length ? e : null); var i = []; return this.each(function(t) { s.apply(i, v(e, t)) }), C(i) },
        has: function(e) { var t = d(e) ? function(t) { return 0 !== v(e, t).length } : function(t) { return t.contains(e) }; return this.filter(t) },
        next: function() { return _(this[0].nextElementSibling) },
        not: function(e) { if (!e) return this; var i = w(e); return this.filter(function(t) { return !i(t, e) }) },
        parent: function() { var e = []; return this.each(function(t) { t && t.parentNode && e.push(t.parentNode) }), C(e) },
        parents: function(e) { var i, n = []; return this.each(function(t) { for (i = t; i && i.parentNode && i !== o.body.parentNode;) i = i.parentNode, (!e || e && b(i, e)) && n.push(i) }), C(n) },
        prev: function() { return _(this[0].previousElementSibling) },
        siblings: function(t) {
            var e = this.parent().children(t),
                i = this[0];
            return e.filter(function(t) { return t !== i })
        }
    }), _
}();
var Component = function() {
    function s(t, e, i) {
        _classCallCheck(this, s), e instanceof Element || console.error(Error(e + " is not an HTML Element"));
        var n = t.getInstance(e);
        n && n.destroy(), this.el = e, this.$el = cash(e)
    }
    return _createClass(s, null, [{
        key: "init",
        value: function(t, e, i) {
            var n = null;
            if (e instanceof Element) n = new t(e, i);
            else if (e && (e.jquery || e.cash || e instanceof NodeList)) {
                for (var s = [], o = 0; o < e.length; o++) s.push(new t(e[o], i));
                n = s
            }
            return n
        }
    }]), s
}();
! function(t) { t.Package ? M = {} : t.M = {}, M.jQueryLoaded = !!t.jQuery }(window), "function" == typeof define && define.amd ? define("M", [], function() { return M }) : "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = M), exports.default = M), M.version = "1.0.0", M.keys = { TAB: 9, ENTER: 13, ESC: 27, ARROW_UP: 38, ARROW_DOWN: 40 }, M.tabPressed = !1, M.keyDown = !1;
var docHandleKeydown = function(t) { M.keyDown = !0, t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !0) },
    docHandleKeyup = function(t) { M.keyDown = !1, t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !1) },
    docHandleFocus = function(t) { M.keyDown && document.body.classList.add("keyboard-focused") },
    docHandleBlur = function(t) { document.body.classList.remove("keyboard-focused") };
document.addEventListener("keydown", docHandleKeydown, !0), document.addEventListener("keyup", docHandleKeyup, !0), document.addEventListener("focus", docHandleFocus, !0), document.addEventListener("blur", docHandleBlur, !0), M.initializeJqueryWrapper = function(n, s, o) {
    jQuery.fn[s] = function(e) {
        if (n.prototype[e]) {
            var i = Array.prototype.slice.call(arguments, 1);
            if ("get" === e.slice(0, 3)) { var t = this.first()[0][o]; return t[e].apply(t, i) }
            return this.each(function() {
                var t = this[o];
                t[e].apply(t, i)
            })
        }
        if ("object" == typeof e || !e) return n.init(this, e), this;
        jQuery.error("Method " + e + " does not exist on jQuery." + s)
    }
}, M.AutoInit = function(t) {
    var e = t || document.body,
        i = { Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"), Carousel: e.querySelectorAll(".carousel:not(.no-autoinit)"), Chips: e.querySelectorAll(".chips:not(.no-autoinit)"), Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"), Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"), Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"), Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"), Modal: e.querySelectorAll(".modal:not(.no-autoinit)"), Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"), Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"), ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"), FormSelect: e.querySelectorAll("select:not(.no-autoinit)"), Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"), Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"), TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"), Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"), Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"), FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)") };
    for (var n in i) { M[n].init(i[n]) }
}, M.objectSelectorString = function(t) { return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "") }, M.guid = function() {
    function t() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) }
    return function() { return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t() }
}(), M.escapeHash = function(t) { return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1") }, M.elementOrParentIsFixed = function(t) {
    var e = $(t),
        i = e.add(e.parents()),
        n = !1;
    return i.each(function() { if ("fixed" === $(this).css("position")) return !(n = !0) }), n
}, M.checkWithinContainer = function(t, e, i) {
    var n = { top: !1, right: !1, bottom: !1, left: !1 },
        s = t.getBoundingClientRect(),
        o = t === document.body ? Math.max(s.bottom, window.innerHeight) : s.bottom,
        a = t.scrollLeft,
        r = t.scrollTop,
        l = e.left - a,
        h = e.top - r;
    return (l < s.left + i || l < i) && (n.left = !0), (l + e.width > s.right - i || l + e.width > window.innerWidth - i) && (n.right = !0), (h < s.top + i || h < i) && (n.top = !0), (h + e.height > o - i || h + e.height > window.innerHeight - i) && (n.bottom = !0), n
}, M.checkPossibleAlignments = function(t, e, i, n) {
    var s = { top: !0, right: !0, bottom: !0, left: !0, spaceOnTop: null, spaceOnRight: null, spaceOnBottom: null, spaceOnLeft: null },
        o = "visible" === getComputedStyle(e).overflow,
        a = e.getBoundingClientRect(),
        r = Math.min(a.height, window.innerHeight),
        l = Math.min(a.width, window.innerWidth),
        h = t.getBoundingClientRect(),
        d = e.scrollLeft,
        u = e.scrollTop,
        c = i.left - d,
        p = i.top - u,
        v = i.top + h.height - u;
    return s.spaceOnRight = o ? window.innerWidth - (h.left + i.width) : l - (c + i.width), s.spaceOnRight < 0 && (s.left = !1), s.spaceOnLeft = o ? h.right - i.width : c - i.width + h.width, s.spaceOnLeft < 0 && (s.right = !1), s.spaceOnBottom = o ? window.innerHeight - (h.top + i.height + n) : r - (p + i.height + n), s.spaceOnBottom < 0 && (s.top = !1), s.spaceOnTop = o ? h.bottom - (i.height + n) : v - (i.height - n), s.spaceOnTop < 0 && (s.bottom = !1), s
}, M.getOverflowParent = function(t) { return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement) }, M.getIdFromTrigger = function(t) { var e = t.getAttribute("data-target"); return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""), e }, M.getDocumentScrollTop = function() { return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 }, M.getDocumentScrollLeft = function() { return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0 };
var getTime = Date.now || function() { return (new Date).getTime() };
M.throttle = function(i, n, s) {
    var o = void 0,
        a = void 0,
        r = void 0,
        l = null,
        h = 0;
    s || (s = {});
    var d = function() { h = !1 === s.leading ? 0 : getTime(), l = null, r = i.apply(o, a), o = a = null };
    return function() {
        var t = getTime();
        h || !1 !== s.leading || (h = t);
        var e = n - (t - h);
        return o = this, a = arguments, e <= 0 ? (clearTimeout(l), l = null, h = t, r = i.apply(o, a), o = a = null) : l || !1 === s.trailing || (l = setTimeout(d, e)), r
    }
};
var $jscomp = { scope: {} };
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
    if (i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = i.value)
}, $jscomp.getGlobal = function(t) { return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() { $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function(t) { return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++ }, $jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var t = $jscomp.global.Symbol.iterator;
    t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, { configurable: !0, writable: !0, value: function() { return $jscomp.arrayIterator(this) } }), $jscomp.initSymbolIterator = function() {}
}, $jscomp.arrayIterator = function(t) { var e = 0; return $jscomp.iteratorPrototype(function() { return e < t.length ? { done: !1, value: t[e++] } : { done: !0 } }) }, $jscomp.iteratorPrototype = function(t) { return $jscomp.initSymbolIterator(), (t = { next: t })[$jscomp.global.Symbol.iterator] = function() { return this }, t }, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function(e, i) {
    $jscomp.initSymbolIterator(), e instanceof String && (e += "");
    var n = 0,
        s = { next: function() { if (n < e.length) { var t = n++; return { value: i(t, e[t]), done: !1 } } return s.next = function() { return { done: !0, value: void 0 } }, s.next() } };
    return s[Symbol.iterator] = function() { return s }, s
}, $jscomp.polyfill = function(t, e, i, n) {
    if (e) {
        for (i = $jscomp.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
            var s = t[n];
            s in i || (i[s] = {}), i = i[s]
        }(e = e(n = i[t = t[t.length - 1]])) != n && null != e && $jscomp.defineProperty(i, t, { configurable: !0, writable: !0, value: e })
    }
}, $jscomp.polyfill("Array.prototype.keys", function(t) { return t || function() { return $jscomp.iteratorFromArray(this, function(t) { return t }) } }, "es6-impl", "es3");
var $jscomp$this = this;
M.anime = function() {
        function s(t) { if (!B.col(t)) try { return document.querySelectorAll(t) } catch (t) {} }

        function b(t, e) {
            for (var i = t.length, n = 2 <= arguments.length ? e : void 0, s = [], o = 0; o < i; o++)
                if (o in t) {
                    var a = t[o];
                    e.call(n, a, o, t) && s.push(a)
                }
            return s
        }

        function d(t) { return t.reduce(function(t, e) { return t.concat(B.arr(e) ? d(e) : e) }, []) }

        function o(t) { return B.arr(t) ? t : (B.str(t) && (t = s(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t]) }

        function a(t, e) { return t.some(function(t) { return t === e }) }

        function r(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i }

        function u(t, e) { var i, n = r(t); for (i in t) n[i] = e.hasOwnProperty(i) ? e[i] : t[i]; return n }

        function c(t, e) { var i, n = r(t); for (i in e) n[i] = B.und(t[i]) ? e[i] : t[i]; return n }

        function l(t) { if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t)) return t[2] }

        function h(t, e) { return B.fnc(t) ? t(e.target, e.id, e.total) : t }

        function w(t, e) { if (e in t.style) return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0" }

        function p(t, e) { return B.dom(t) && a($, e) ? "transform" : B.dom(t) && (t.getAttribute(e) || B.svg(t) && t[e]) ? "attribute" : B.dom(t) && "transform" !== e && w(t, e) ? "css" : null != t[e] ? "object" : void 0 }

        function v(t, e) {
            switch (p(t, e)) {
                case "transform":
                    return function(t, i) {
                        var e, n = -1 < (e = i).indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0,
                            n = -1 < i.indexOf("scale") ? 1 : 0 + n;
                        if (!(t = t.style.transform)) return n;
                        for (var s = [], o = [], a = [], r = /(\w+)\((.+?)\)/g; s = r.exec(t);) o.push(s[1]), a.push(s[2]);
                        return (t = b(a, function(t, e) { return o[e] === i })).length ? t[0] : n
                    }(t, e);
                case "css":
                    return w(t, e);
                case "attribute":
                    return t.getAttribute(e)
            }
            return t[e] || 0
        }

        function f(t, e) {
            var i = /^(\*=|\+=|-=)/.exec(t);
            if (!i) return t;
            var n = l(t) || 0;
            switch (e = parseFloat(e), t = parseFloat(t.replace(i[0], "")), i[0][0]) {
                case "+":
                    return e + t + n;
                case "-":
                    return e - t + n;
                case "*":
                    return e * t + n
            }
        }

        function m(t, e) { return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) }

        function i(t) {
            t = t.points;
            for (var e, i = 0, n = 0; n < t.numberOfItems; n++) {
                var s = t.getItem(n);
                0 < n && (i += m(e, s)), e = s
            }
            return i
        }

        function g(t) {
            if (t.getTotalLength) return t.getTotalLength();
            switch (t.tagName.toLowerCase()) {
                case "circle":
                    return 2 * Math.PI * t.getAttribute("r");
                case "rect":
                    return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
                case "line":
                    return m({ x: t.getAttribute("x1"), y: t.getAttribute("y1") }, { x: t.getAttribute("x2"), y: t.getAttribute("y2") });
                case "polyline":
                    return i(t);
                case "polygon":
                    var e = t.points;
                    return i(t) + m(e.getItem(e.numberOfItems - 1), e.getItem(0))
            }
        }

        function C(e, i) {
            function t(t) { return t = void 0 === t ? 0 : t, e.el.getPointAtLength(1 <= i + t ? i + t : 0) }
            var n = t(),
                s = t(-1),
                o = t(1);
            switch (e.property) {
                case "x":
                    return n.x;
                case "y":
                    return n.y;
                case "angle":
                    return 180 * Math.atan2(o.y - s.y, o.x - s.x) / Math.PI
            }
        }

        function _(t, e) {
            var i, n = /-?\d*\.?\d+/g;
            if (i = B.pth(t) ? t.totalLength : t, B.col(i))
                if (B.rgb(i)) {
                    var s = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
                    i = s ? "rgba(" + s[1] + ",1)" : i
                } else i = B.hex(i) ? function(t) {
                    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) { return e + e + i + i + n + n });
                    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    t = parseInt(e[1], 16);
                    var i = parseInt(e[2], 16),
                        e = parseInt(e[3], 16);
                    return "rgba(" + t + "," + i + "," + e + ",1)"
                }(i) : B.hsl(i) ? function(t) {
                    function e(t, e, i) { return i < 0 && (i += 1), 1 < i && --i, i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t }
                    var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                    t = parseInt(i[1]) / 360;
                    var n = parseInt(i[2]) / 100,
                        s = parseInt(i[3]) / 100,
                        i = i[4] || 1;
                    if (0 == n) s = n = t = s;
                    else {
                        var o = s < .5 ? s * (1 + n) : s + n - s * n,
                            a = 2 * s - o,
                            s = e(a, o, t + 1 / 3),
                            n = e(a, o, t);
                        t = e(a, o, t - 1 / 3)
                    }
                    return "rgba(" + 255 * s + "," + 255 * n + "," + 255 * t + "," + i + ")"
                }(i) : void 0;
            else s = (s = l(i)) ? i.substr(0, i.length - s.length) : i, i = e && !/\s/g.test(i) ? s + e : s;
            return { original: i += "", numbers: i.match(n) ? i.match(n).map(Number) : [0], strings: B.str(t) || e ? i.split(n) : [] }
        }

        function y(t) { return b(t = t ? d(B.arr(t) ? t.map(o) : o(t)) : [], function(t, e, i) { return i.indexOf(t) === e }) }

        function k(t, i) {
            var e = r(i);
            if (B.arr(t)) {
                var n = t.length;
                2 !== n || B.obj(t[0]) ? B.fnc(i.duration) || (e.duration = i.duration / n) : t = { value: t }
            }
            return o(t).map(function(t, e) { return e = e ? 0 : i.delay, t = B.obj(t) && !B.pth(t) ? t : { value: t }, B.und(t.delay) && (t.delay = e), t }).map(function(t) { return c(t, e) })
        }

        function E(o, a) {
            var r;
            return o.tweens.map(function(t) {
                var e = (t = function(t, e) {
                        var i, n = {};
                        for (i in t) {
                            var s = h(t[i], e);
                            B.arr(s) && 1 === (s = s.map(function(t) { return h(t, e) })).length && (s = s[0]), n[i] = s
                        }
                        return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
                    }(t, a)).value,
                    i = v(a.target, o.name),
                    n = r ? r.to.original : i,
                    n = B.arr(e) ? e[0] : n,
                    s = f(B.arr(e) ? e[1] : e, n),
                    i = l(s) || l(n) || l(i);
                return t.from = _(n, i), t.to = _(s, i), t.start = r ? r.end : o.offset, t.end = t.start + t.delay + t.duration, t.easing = function(t) { return B.arr(t) ? D.apply(this, t) : S[t] }(t.easing), t.elasticity = (1e3 - Math.min(Math.max(t.elasticity, 1), 999)) / 1e3, t.isPath = B.pth(e), t.isColor = B.col(t.from.original), t.isColor && (t.round = 1), r = t
            })
        }

        function M(e, t, i, n) { var s = "delay" === e; return t.length ? (s ? Math.min : Math.max).apply(Math, t.map(function(t) { return t[e] })) : s ? n.delay : i.offset + n.delay + n.duration }

        function n(t) {
            var e, i, n, s, o = u(L, t),
                a = u(T, t),
                r = (i = t.targets, (n = y(i)).map(function(t, e) { return { target: t, id: e, total: n.length } })),
                l = [],
                h = c(o, a);
            for (e in t) h.hasOwnProperty(e) || "targets" === e || l.push({ name: e, offset: h.offset, tweens: k(t[e], a) });
            return s = l, t = b(d(r.map(function(n) {
                return s.map(function(t) {
                    var e = p(n.target, t.name);
                    if (e) {
                        var i = E(t, n);
                        t = { type: e, property: t.name, animatable: n, tweens: i, duration: i[i.length - 1].end, delay: i[0].delay }
                    } else t = void 0;
                    return t
                })
            })), function(t) { return !B.und(t) }), c(o, { children: [], animatables: r, animations: t, duration: M("duration", t, o, a), delay: M("delay", t, o, a) })
        }

        function O(t) {
            function d() { return window.Promise && new Promise(function(t) { return _ = t }) }

            function u(t) { return k.reversed ? k.duration - t : t }

            function c(e) {
                for (var t = 0, i = {}, n = k.animations, s = n.length; t < s;) {
                    var o = n[t],
                        a = o.animatable,
                        r = o.tweens,
                        l = r.length - 1,
                        h = r[l];
                    l && (h = b(r, function(t) { return e < t.end })[0] || h);
                    for (var r = Math.min(Math.max(e - h.start - h.delay, 0), h.duration) / h.duration, d = isNaN(r) ? 1 : h.easing(r, h.elasticity), r = h.to.strings, u = h.round, l = [], c = void 0, c = h.to.numbers.length, p = 0; p < c; p++) {
                        var v = void 0,
                            v = h.to.numbers[p],
                            f = h.from.numbers[p],
                            v = h.isPath ? C(h.value, d * v) : f + d * (v - f);
                        u && (h.isColor && 2 < p || (v = Math.round(v * u) / u)), l.push(v)
                    }
                    if (h = r.length)
                        for (c = r[0], d = 0; d < h; d++) u = r[d + 1], p = l[d], isNaN(p) || (c = u ? c + (p + u) : c + (p + " "));
                    else c = l[0];
                    I[o.type](a.target, o.property, c, i, a.id), o.currentValue = c, t++
                }
                if (t = Object.keys(i).length)
                    for (n = 0; n < t; n++) x || (x = w(document.body, "transform") ? "transform" : "-webkit-transform"), k.animatables[n].target.style[x] = i[n].join(" ");
                k.currentTime = e, k.progress = e / k.duration * 100
            }

            function p(t) { k[t] && k[t](k) }

            function v() { k.remaining && !0 !== k.remaining && k.remaining-- }

            function e(t) {
                var e = k.duration,
                    i = k.offset,
                    n = i + k.delay,
                    s = k.currentTime,
                    o = k.reversed,
                    a = u(t);
                if (k.children.length) {
                    var r = k.children,
                        l = r.length;
                    if (a >= k.currentTime)
                        for (var h = 0; h < l; h++) r[h].seek(a);
                    else
                        for (; l--;) r[l].seek(a)
                }(n <= a || !e) && (k.began || (k.began = !0, p("begin")), p("run")), i < a && a < e ? c(a) : (a <= i && 0 !== s && (c(0), o && v()), (e <= a && s !== e || !e) && (c(e), o || v())), p("update"), e <= t && (k.remaining ? (m = f, "alternate" === k.direction && (k.reversed = !k.reversed)) : (k.pause(), k.completed || (k.completed = !0, p("complete"), "Promise" in window && (_(), y = d()))), g = 0)
            }
            t = void 0 === t ? {} : t;
            var f, m, g = 0,
                _ = null,
                y = d(),
                k = n(t);
            return k.reset = function() {
                var t = k.direction,
                    e = k.loop;
                for (k.currentTime = 0, k.progress = 0, k.paused = !0, k.began = !1, k.completed = !1, k.reversed = "reverse" === t, k.remaining = "alternate" === t && 1 === e ? 2 : e, c(0), t = k.children.length; t--;) k.children[t].reset()
            }, k.tick = function(t) { f = t, m || (m = f), e((g + f - m) * O.speed) }, k.seek = function(t) { e(u(t)) }, k.pause = function() { var t = A.indexOf(k); - 1 < t && A.splice(t, 1), k.paused = !0 }, k.play = function() { k.paused && (k.paused = !1, m = 0, g = u(k.currentTime), A.push(k), R || H()) }, k.reverse = function() { k.reversed = !k.reversed, m = 0, g = u(k.currentTime) }, k.restart = function() { k.pause(), k.reset(), k.play() }, k.finished = y, k.reset(), k.autoplay && k.play(), k
        }
        var x, L = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
            T = { duration: 1e3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
            $ = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
            B = { arr: function(t) { return Array.isArray(t) }, obj: function(t) { return -1 < Object.prototype.toString.call(t).indexOf("Object") }, pth: function(t) { return B.obj(t) && t.hasOwnProperty("totalLength") }, svg: function(t) { return t instanceof SVGElement }, dom: function(t) { return t.nodeType || B.svg(t) }, str: function(t) { return "string" == typeof t }, fnc: function(t) { return "function" == typeof t }, und: function(t) { return void 0 === t }, hex: function(t) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t) }, rgb: function(t) { return /^rgb/.test(t) }, hsl: function(t) { return /^hsl/.test(t) }, col: function(t) { return B.hex(t) || B.rgb(t) || B.hsl(t) } },
            D = function() {
                function u(t, e, i) { return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t }
                return function(a, r, l, h) {
                    if (0 <= a && a <= 1 && 0 <= l && l <= 1) {
                        var d = new Float32Array(11);
                        if (a !== r || l !== h)
                            for (var t = 0; t < 11; ++t) d[t] = u(.1 * t, a, l);
                        return function(t) {
                            if (a === r && l === h) return t;
                            if (0 === t) return 0;
                            if (1 === t) return 1;
                            for (var e = 0, i = 1; 10 !== i && d[i] <= t; ++i) e += .1;
                            var i = e + (t - d[--i]) / (d[i + 1] - d[i]) * .1,
                                n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a;
                            if (.001 <= n) {
                                for (e = 0; e < 4 && 0 != (n = 3 * (1 - 3 * l + 3 * a) * i * i + 2 * (3 * l - 6 * a) * i + 3 * a); ++e) var s = u(i, a, l) - t,
                                    i = i - s / n;
                                t = i
                            } else if (0 === n) t = i;
                            else {
                                for (var i = e, e = e + .1, o = 0; 0 < (n = u(s = i + (e - i) / 2, a, l) - t) ? e = s : i = s, 1e-7 < Math.abs(n) && ++o < 10;);
                                t = s
                            }
                            return u(t, r, h)
                        }
                    }
                }
            }(),
            S = function() {
                function i(t, e) { return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e) }
                var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                    e = {
                        In: [
                            [.55, .085, .68, .53],
                            [.55, .055, .675, .19],
                            [.895, .03, .685, .22],
                            [.755, .05, .855, .06],
                            [.47, 0, .745, .715],
                            [.95, .05, .795, .035],
                            [.6, .04, .98, .335],
                            [.6, -.28, .735, .045], i
                        ],
                        Out: [
                            [.25, .46, .45, .94],
                            [.215, .61, .355, 1],
                            [.165, .84, .44, 1],
                            [.23, 1, .32, 1],
                            [.39, .575, .565, 1],
                            [.19, 1, .22, 1],
                            [.075, .82, .165, 1],
                            [.175, .885, .32, 1.275],
                            function(t, e) { return 1 - i(1 - t, e) }
                        ],
                        InOut: [
                            [.455, .03, .515, .955],
                            [.645, .045, .355, 1],
                            [.77, 0, .175, 1],
                            [.86, 0, .07, 1],
                            [.445, .05, .55, .95],
                            [1, 0, 0, 1],
                            [.785, .135, .15, .86],
                            [.68, -.55, .265, 1.55],
                            function(t, e) { return t < .5 ? i(2 * t, e) / 2 : 1 - i(-2 * t + 2, e) / 2 }
                        ]
                    },
                    s = { linear: D(.25, .25, .75, .75) },
                    o = {};
                for (t in e) o.type = t, e[o.type].forEach(function(i) { return function(t, e) { s["ease" + i.type + n[e]] = B.fnc(t) ? t : D.apply($jscomp$this, t) } }(o)), o = { type: o.type };
                return s
            }(),
            I = { css: function(t, e, i) { return t.style[e] = i }, attribute: function(t, e, i) { return t.setAttribute(e, i) }, object: function(t, e, i) { return t[e] = i }, transform: function(t, e, i, n, s) { n[s] || (n[s] = []), n[s].push(e + "(" + i + ")") } },
            A = [],
            R = 0,
            H = function() {
                function n() { R = requestAnimationFrame(t) }

                function t(t) {
                    var e = A.length;
                    if (e) {
                        for (var i = 0; i < e;) A[i] && A[i].tick(t), i++;
                        n()
                    } else cancelAnimationFrame(R), R = 0
                }
                return n
            }();
        return O.version = "2.2.0", O.speed = 1, O.running = A, O.remove = function(t) {
            t = y(t);
            for (var e = A.length; e--;)
                for (var i = A[e], n = i.animations, s = n.length; s--;) a(t, n[s].animatable.target) && (n.splice(s, 1), n.length || i.pause())
        }, O.getValue = v, O.path = function(t, e) {
            var i = B.str(t) ? s(t)[0] : t,
                n = e || 100;
            return function(t) { return { el: i, property: t, totalLength: g(i) * (n / 100) } }
        }, O.setDashoffset = function(t) { var e = g(t); return t.setAttribute("stroke-dasharray", e), e }, O.bezier = D, O.easings = S, O.timeline = function(n) {
            var s = O(n);
            return s.pause(), s.duration = 0, s.add = function(t) {
                return s.children.forEach(function(t) { t.began = !0, t.completed = !0 }), o(t).forEach(function(t) {
                    var e = c(t, u(T, n || {}));
                    e.targets = e.targets || n.targets, t = s.duration;
                    var i = e.offset;
                    e.autoplay = !1, e.direction = s.direction, e.offset = B.und(i) ? t : f(i, t), s.began = !0, s.completed = !0, s.seek(e.offset), (e = O(e)).began = !0, e.completed = !0, e.duration > t && (s.duration = e.duration), s.children.push(e)
                }), s.seek(0), s.reset(), s.autoplay && s.restart(), s
            }, s
        }, O.random = function(t, e) { return Math.floor(Math.random() * (e - t + 1)) + t }, O
    }(),
    function(r, l) {
        "use strict";
        var e = { accordion: !0, onOpenStart: void 0, onOpenEnd: void 0, onCloseStart: void 0, onCloseEnd: void 0, inDuration: 300, outDuration: 300 },
            t = function(t) {
                function s(t, e) {
                    _classCallCheck(this, s);
                    var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e));
                    (i.el.M_Collapsible = i).options = r.extend({}, s.defaults, e), i.$headers = i.$el.children("li").children(".collapsible-header"), i.$headers.attr("tabindex", 0), i._setupEventHandlers();
                    var n = i.$el.children("li.active").children(".collapsible-body");
                    return i.options.accordion ? n.first().css("display", "block") : n.css("display", "block"), i
                }
                return _inherits(s, Component), _createClass(s, [{ key: "destroy", value: function() { this._removeEventHandlers(), this.el.M_Collapsible = void 0 } }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = this;
                        this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this), this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this), this.el.addEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function(t) { t.addEventListener("keydown", e._handleCollapsibleKeydownBound) })
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var e = this;
                        this.el.removeEventListener("click", this._handleCollapsibleClickBound), this.$headers.each(function(t) { t.removeEventListener("keydown", e._handleCollapsibleKeydownBound) })
                    }
                }, {
                    key: "_handleCollapsibleClick",
                    value: function(t) {
                        var e = r(t.target).closest(".collapsible-header");
                        if (t.target && e.length) {
                            var i = e.closest(".collapsible");
                            if (i[0] === this.el) {
                                var n = e.closest("li"),
                                    s = i.children("li"),
                                    o = n[0].classList.contains("active"),
                                    a = s.index(n);
                                o ? this.close(a) : this.open(a)
                            }
                        }
                    }
                }, { key: "_handleCollapsibleKeydown", value: function(t) { 13 === t.keyCode && this._handleCollapsibleClickBound(t) } }, {
                    key: "_animateIn",
                    value: function(t) {
                        var e = this,
                            i = this.$el.children("li").eq(t);
                        if (i.length) {
                            var n = i.children(".collapsible-body");
                            l.remove(n[0]), n.css({ display: "block", overflow: "hidden", height: 0, paddingTop: "", paddingBottom: "" });
                            var s = n.css("padding-top"),
                                o = n.css("padding-bottom"),
                                a = n[0].scrollHeight;
                            n.css({ paddingTop: 0, paddingBottom: 0 }), l({ targets: n[0], height: a, paddingTop: s, paddingBottom: o, duration: this.options.inDuration, easing: "easeInOutCubic", complete: function(t) { n.css({ overflow: "", paddingTop: "", paddingBottom: "", height: "" }), "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, i[0]) } })
                        }
                    }
                }, {
                    key: "_animateOut",
                    value: function(t) {
                        var e = this,
                            i = this.$el.children("li").eq(t);
                        if (i.length) {
                            var n = i.children(".collapsible-body");
                            l.remove(n[0]), n.css("overflow", "hidden"), l({ targets: n[0], height: 0, paddingTop: 0, paddingBottom: 0, duration: this.options.outDuration, easing: "easeInOutCubic", complete: function() { n.css({ height: "", overflow: "", padding: "", display: "" }), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, i[0]) } })
                        }
                    }
                }, {
                    key: "open",
                    value: function(t) {
                        var i = this,
                            e = this.$el.children("li").eq(t);
                        if (e.length && !e[0].classList.contains("active")) {
                            if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, e[0]), this.options.accordion) {
                                var n = this.$el.children("li");
                                this.$el.children("li.active").each(function(t) {
                                    var e = n.index(r(t));
                                    i.close(e)
                                })
                            }
                            e[0].classList.add("active"), this._animateIn(t)
                        }
                    }
                }, {
                    key: "close",
                    value: function(t) {
                        var e = this.$el.children("li").eq(t);
                        e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]), e[0].classList.remove("active"), this._animateOut(t))
                    }
                }], [{ key: "init", value: function(t, e) { return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Collapsible } }, { key: "defaults", get: function() { return e } }]), s
            }();
        M.Collapsible = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "collapsible", "M_Collapsible")
    }(cash, M.anime),
    function(h, i) {
        "use strict";
        var e = { alignment: "left", autoFocus: !0, constrainWidth: !0, container: null, coverTrigger: !0, closeOnClick: !0, hover: !1, inDuration: 150, outDuration: 250, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null, onItemClick: null },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return i.el.M_Dropdown = i, n._dropdowns.push(i), i.id = M.getIdFromTrigger(t), i.dropdownEl = document.getElementById(i.id), i.$dropdownEl = h(i.dropdownEl), i.options = h.extend({}, n.defaults, e), i.isOpen = !1, i.isScrollable = !1, i.isTouchMoving = !1, i.focusedIndex = -1, i.filterQuery = [], i.options.container ? h(i.options.container).append(i.dropdownEl) : i.$el.after(i.dropdownEl), i._makeDropdownFocusable(), i._resetFilterQueryBound = i._resetFilterQuery.bind(i), i._handleDocumentClickBound = i._handleDocumentClick.bind(i), i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind(i), i._handleDropdownClickBound = i._handleDropdownClick.bind(i), i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind(i), i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind(i), i._setupEventHandlers(), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this._resetDropdownStyles(), this._removeEventHandlers(), n._dropdowns.splice(n._dropdowns.indexOf(this), 1), this.el.M_Dropdown = void 0 } }, { key: "_setupEventHandlers", value: function() { this.el.addEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.addEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this), this.el.addEventListener("click", this._handleClickBound)) } }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("keydown", this._handleTriggerKeydownBound), this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound), this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound) } }, { key: "_setupTemporaryEventHandlers", value: function() { document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound), document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound) } }, { key: "_removeTemporaryEventHandlers", value: function() { document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound), document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound), this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound) } }, { key: "_handleClick", value: function(t) { t.preventDefault(), this.open() } }, { key: "_handleMouseEnter", value: function() { this.open() } }, {
                    key: "_handleMouseLeave",
                    value: function(t) {
                        var e = t.toElement || t.relatedTarget,
                            i = !!h(e).closest(".dropdown-content").length,
                            n = !1,
                            s = h(e).closest(".dropdown-trigger");
                        s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (n = !0), n || i || this.close()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(t) {
                        var e = this,
                            i = h(t.target);
                        this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() { e.close() }, 0) : !i.closest(".dropdown-trigger").length && i.closest(".dropdown-content").length || setTimeout(function() { e.close() }, 0), this.isTouchMoving = !1
                    }
                }, { key: "_handleTriggerKeydown", value: function(t) { t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(), this.open()) } }, { key: "_handleDocumentTouchmove", value: function(t) { h(t.target).closest(".dropdown-content").length && (this.isTouchMoving = !0) } }, {
                    key: "_handleDropdownClick",
                    value: function(t) {
                        if ("function" == typeof this.options.onItemClick) {
                            var e = h(t.target).closest("li")[0];
                            this.options.onItemClick.call(this, e)
                        }
                    }
                }, {
                    key: "_handleDropdownKeydown",
                    value: function(t) {
                        if (t.which === M.keys.TAB) t.preventDefault(), this.close();
                        else if (t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || !this.isOpen)
                            if (t.which === M.keys.ENTER && this.isOpen) {
                                var e = this.dropdownEl.children[this.focusedIndex],
                                    i = h(e).find("a, button").first();
                                i.length ? i[0].click() : e && e.click()
                            } else t.which === M.keys.ESC && this.isOpen && (t.preventDefault(), this.close());
                        else {
                            t.preventDefault();
                            var n = t.which === M.keys.ARROW_DOWN ? 1 : -1,
                                s = this.focusedIndex,
                                o = !1;
                            do { if (s += n, this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) { o = !0; break } } while (s < this.dropdownEl.children.length && 0 <= s);
                            o && (this.focusedIndex = s, this._focusFocusedItem())
                        }
                        var a = String.fromCharCode(t.which).toLowerCase();
                        if (a && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                            this.filterQuery.push(a);
                            var r = this.filterQuery.join(""),
                                l = h(this.dropdownEl).find("li").filter(function(t) { return 0 === h(t).text().toLowerCase().indexOf(r) })[0];
                            l && (this.focusedIndex = h(l).index(), this._focusFocusedItem())
                        }
                        this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3)
                    }
                }, { key: "_resetFilterQuery", value: function() { this.filterQuery = [] } }, { key: "_resetDropdownStyles", value: function() { this.$dropdownEl.css({ display: "", width: "", height: "", left: "", top: "", "transform-origin": "", transform: "", opacity: "" }) } }, { key: "_makeDropdownFocusable", value: function() { this.dropdownEl.tabIndex = 0, h(this.dropdownEl).children().each(function(t) { t.getAttribute("tabindex") || t.setAttribute("tabindex", 0) }) } }, { key: "_focusFocusedItem", value: function() { 0 <= this.focusedIndex && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus() } }, {
                    key: "_getDropdownPosition",
                    value: function() {
                        this.el.offsetParent.getBoundingClientRect();
                        var t = this.el.getBoundingClientRect(),
                            e = this.dropdownEl.getBoundingClientRect(),
                            i = e.height,
                            n = e.width,
                            s = t.left - e.left,
                            o = t.top - e.top,
                            a = { left: s, top: o, height: i, width: n },
                            r = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode,
                            l = M.checkPossibleAlignments(this.el, r, a, this.options.coverTrigger ? 0 : t.height),
                            h = "top",
                            d = this.options.alignment;
                        if (o += this.options.coverTrigger ? 0 : t.height, this.isScrollable = !1, l.top || (l.bottom ? h = "bottom" : (this.isScrollable = !0, l.spaceOnTop > l.spaceOnBottom ? (h = "bottom", i += l.spaceOnTop, o -= l.spaceOnTop) : i += l.spaceOnBottom)), !l[d]) {
                            var u = "left" === d ? "right" : "left";
                            l[u] ? d = u : l.spaceOnLeft > l.spaceOnRight ? (d = "right", n += l.spaceOnLeft, s -= l.spaceOnLeft) : (d = "left", n += l.spaceOnRight)
                        }
                        return "bottom" === h && (o = o - e.height + (this.options.coverTrigger ? t.height : 0)), "right" === d && (s = s - e.width + t.width), { x: s, y: o, verticalAlignment: h, horizontalAlignment: d, height: i, width: n }
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        var e = this;
                        i.remove(this.dropdownEl), i({ targets: this.dropdownEl, opacity: { value: [0, 1], easing: "easeOutQuad" }, scaleX: [.3, 1], scaleY: [.3, 1], duration: this.options.inDuration, easing: "easeOutQuint", complete: function(t) { e.options.autoFocus && e.dropdownEl.focus(), "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el) } })
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        var e = this;
                        i.remove(this.dropdownEl), i({ targets: this.dropdownEl, opacity: { value: 0, easing: "easeOutQuint" }, scaleX: .3, scaleY: .3, duration: this.options.outDuration, easing: "easeOutQuint", complete: function(t) { e._resetDropdownStyles(), "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el) } })
                    }
                }, {
                    key: "_placeDropdown",
                    value: function() {
                        var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
                        this.dropdownEl.style.width = t + "px";
                        var e = this._getDropdownPosition();
                        this.dropdownEl.style.left = e.x + "px", this.dropdownEl.style.top = e.y + "px", this.dropdownEl.style.height = e.height + "px", this.dropdownEl.style.width = e.width + "px", this.dropdownEl.style.transformOrigin = ("left" === e.horizontalAlignment ? "0" : "100%") + " " + ("top" === e.verticalAlignment ? "0" : "100%")
                    }
                }, { key: "open", value: function() { this.isOpen || (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._resetDropdownStyles(), this.dropdownEl.style.display = "block", this._placeDropdown(), this._animateIn(), this._setupTemporaryEventHandlers()) } }, { key: "close", value: function() { this.isOpen && (this.isOpen = !1, this.focusedIndex = -1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._animateOut(), this._removeTemporaryEventHandlers(), this.options.autoFocus && this.el.focus()) } }, { key: "recalculateDimensions", value: function() { this.isOpen && (this.$dropdownEl.css({ width: "", height: "", left: "", top: "", "transform-origin": "" }), this._placeDropdown()) } }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Dropdown } }, { key: "defaults", get: function() { return e } }]), n
            }();
        t._dropdowns = [], M.Dropdown = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "dropdown", "M_Dropdown")
    }(cash, M.anime),
    function(s, i) {
        "use strict";
        var e = { opacity: .5, inDuration: 250, outDuration: 250, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null, preventScrolling: !0, dismissible: !0, startingTop: "4%", endingTop: "10%" },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_Modal = i).options = s.extend({}, n.defaults, e), i.isOpen = !1, i.id = i.$el.attr("id"), i._openingTrigger = void 0, i.$overlay = s('<div class="modal-overlay"></div>'), i.el.tabIndex = 0, i._nthModalOpened = 0, n._count++, i._setupEventHandlers(), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { n._count--, this._removeEventHandlers(), this.el.removeAttribute("style"), this.$overlay.remove(), this.el.M_Modal = void 0 } }, { key: "_setupEventHandlers", value: function() { this._handleOverlayClickBound = this._handleOverlayClick.bind(this), this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this), 1 === n._count && document.body.addEventListener("click", this._handleTriggerClick), this.$overlay[0].addEventListener("click", this._handleOverlayClickBound), this.el.addEventListener("click", this._handleModalCloseClickBound) } }, { key: "_removeEventHandlers", value: function() { 0 === n._count && document.body.removeEventListener("click", this._handleTriggerClick), this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound), this.el.removeEventListener("click", this._handleModalCloseClickBound) } }, {
                    key: "_handleTriggerClick",
                    value: function(t) {
                        var e = s(t.target).closest(".modal-trigger");
                        if (e.length) {
                            var i = M.getIdFromTrigger(e[0]),
                                n = document.getElementById(i).M_Modal;
                            n && n.open(e), t.preventDefault()
                        }
                    }
                }, { key: "_handleOverlayClick", value: function() { this.options.dismissible && this.close() } }, { key: "_handleModalCloseClick", value: function(t) { s(t.target).closest(".modal-close").length && this.close() } }, { key: "_handleKeydown", value: function(t) { 27 === t.keyCode && this.options.dismissible && this.close() } }, { key: "_handleFocus", value: function(t) { this.el.contains(t.target) || this._nthModalOpened !== n._modalsOpen || this.el.focus() } }, {
                    key: "_animateIn",
                    value: function() {
                        var t = this;
                        s.extend(this.el.style, { display: "block", opacity: 0 }), s.extend(this.$overlay[0].style, { display: "block", opacity: 0 }), i({ targets: this.$overlay[0], opacity: this.options.opacity, duration: this.options.inDuration, easing: "easeOutQuad" });
                        var e = { targets: this.el, duration: this.options.inDuration, easing: "easeOutCubic", complete: function() { "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el, t._openingTrigger) } };
                        this.el.classList.contains("bottom-sheet") ? s.extend(e, { bottom: 0, opacity: 1 }) : s.extend(e, { top: [this.options.startingTop, this.options.endingTop], opacity: 1, scaleX: [.8, 1], scaleY: [.8, 1] }), i(e)
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        var t = this;
                        i({ targets: this.$overlay[0], opacity: 0, duration: this.options.outDuration, easing: "easeOutQuart" });
                        var e = { targets: this.el, duration: this.options.outDuration, easing: "easeOutCubic", complete: function() { t.el.style.display = "none", t.$overlay.remove(), "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el) } };
                        this.el.classList.contains("bottom-sheet") ? s.extend(e, { bottom: "-100%", opacity: 0 }) : s.extend(e, { top: [this.options.endingTop, this.options.startingTop], opacity: 0, scaleX: .8, scaleY: .8 }), i(e)
                    }
                }, { key: "open", value: function(t) { if (!this.isOpen) return this.isOpen = !0, n._modalsOpen++, this._nthModalOpened = n._modalsOpen, this.$overlay[0].style.zIndex = 1e3 + 2 * n._modalsOpen, this.el.style.zIndex = 1e3 + 2 * n._modalsOpen + 1, this._openingTrigger = t ? t[0] : void 0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger), this.options.preventScrolling && (document.body.style.overflow = "hidden"), this.el.classList.add("open"), this.el.insertAdjacentElement("afterend", this.$overlay[0]), this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this), this._handleFocusBound = this._handleFocus.bind(this), document.addEventListener("keydown", this._handleKeydownBound), document.addEventListener("focus", this._handleFocusBound, !0)), i.remove(this.el), i.remove(this.$overlay[0]), this._animateIn(), this.el.focus(), this } }, { key: "close", value: function() { if (this.isOpen) return this.isOpen = !1, n._modalsOpen--, this._nthModalOpened = 0, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this.el.classList.remove("open"), 0 === n._modalsOpen && (document.body.style.overflow = ""), this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound), document.removeEventListener("focus", this._handleFocusBound, !0)), i.remove(this.el), i.remove(this.$overlay[0]), this._animateOut(), this } }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Modal } }, { key: "defaults", get: function() { return e } }]), n
            }();
        t._modalsOpen = 0, t._count = 0, M.Modal = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "modal", "M_Modal")
    }(cash, M.anime),
    function(o, a) {
        "use strict";
        var e = { inDuration: 275, outDuration: 200, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_Materialbox = i).options = o.extend({}, n.defaults, e), i.overlayActive = !1, i.doneAnimating = !0, i.placeholder = o("<div></div>").addClass("material-placeholder"), i.originalWidth = 0, i.originalHeight = 0, i.originInlineStyles = i.$el.attr("style"), i.caption = i.el.getAttribute("data-caption") || "", i.$el.before(i.placeholder), i.placeholder.append(i.$el), i._setupEventHandlers(), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this._removeEventHandlers(), this.el.M_Materialbox = void 0, o(this.placeholder).after(this.el).remove(), this.$el.removeAttr("style") } }, { key: "_setupEventHandlers", value: function() { this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this), this.el.addEventListener("click", this._handleMaterialboxClickBound) } }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("click", this._handleMaterialboxClickBound) } }, { key: "_handleMaterialboxClick", value: function(t) {!1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open() } }, { key: "_handleWindowScroll", value: function() { this.overlayActive && this.close() } }, { key: "_handleWindowResize", value: function() { this.overlayActive && this.close() } }, { key: "_handleWindowEscape", value: function(t) { 27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close() } }, { key: "_makeAncestorsOverflowVisible", value: function() { this.ancestorsChanged = o(); for (var t = this.placeholder[0].parentNode; null !== t && !o(t).is(document);) { var e = o(t); "visible" !== e.css("overflow") && (e.css("overflow", "visible"), void 0 === this.ancestorsChanged ? this.ancestorsChanged = e : this.ancestorsChanged = this.ancestorsChanged.add(e)), t = t.parentNode } } }, {
                    key: "_animateImageIn",
                    value: function() {
                        var t = this,
                            e = { targets: this.el, height: [this.originalHeight, this.newHeight], width: [this.originalWidth, this.newWidth], left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2, top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2, duration: this.options.inDuration, easing: "easeOutQuad", complete: function() { t.doneAnimating = !0, "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el) } };
                        this.maxWidth = this.$el.css("max-width"), this.maxHeight = this.$el.css("max-height"), "none" !== this.maxWidth && (e.maxWidth = this.newWidth), "none" !== this.maxHeight && (e.maxHeight = this.newHeight), a(e)
                    }
                }, {
                    key: "_animateImageOut",
                    value: function() {
                        var t = this,
                            e = { targets: this.el, width: this.originalWidth, height: this.originalHeight, left: 0, top: 0, duration: this.options.outDuration, easing: "easeOutQuad", complete: function() { t.placeholder.css({ height: "", width: "", position: "", top: "", left: "" }), t.attrWidth && t.$el.attr("width", t.attrWidth), t.attrHeight && t.$el.attr("height", t.attrHeight), t.$el.removeAttr("style"), t.originInlineStyles && t.$el.attr("style", t.originInlineStyles), t.$el.removeClass("active"), t.doneAnimating = !0, t.ancestorsChanged.length && t.ancestorsChanged.css("overflow", ""), "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el) } };
                        a(e)
                    }
                }, { key: "_updateVars", value: function() { this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.caption = this.el.getAttribute("data-caption") || "" } }, {
                    key: "open",
                    value: function() {
                        var t = this;
                        this._updateVars(), this.originalWidth = this.el.getBoundingClientRect().width, this.originalHeight = this.el.getBoundingClientRect().height, this.doneAnimating = !1, this.$el.addClass("active"), this.overlayActive = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this.placeholder.css({ width: this.placeholder[0].getBoundingClientRect().width + "px", height: this.placeholder[0].getBoundingClientRect().height + "px", position: "relative", top: 0, left: 0 }), this._makeAncestorsOverflowVisible(), this.$el.css({ position: "absolute", "z-index": 1e3, "will-change": "left, top, width, height" }), this.attrWidth = this.$el.attr("width"), this.attrHeight = this.$el.attr("height"), this.attrWidth && (this.$el.css("width", this.attrWidth + "px"), this.$el.removeAttr("width")), this.attrHeight && (this.$el.css("width", this.attrHeight + "px"), this.$el.removeAttr("height")), this.$overlay = o('<div id="materialbox-overlay"></div>').css({ opacity: 0 }).one("click", function() { t.doneAnimating && t.close() }), this.$el.before(this.$overlay);
                        var e = this.$overlay[0].getBoundingClientRect();
                        this.$overlay.css({ width: this.windowWidth + "px", height: this.windowHeight + "px", left: -1 * e.left + "px", top: -1 * e.top + "px" }), a.remove(this.el), a.remove(this.$overlay[0]), a({ targets: this.$overlay[0], opacity: 1, duration: this.options.inDuration, easing: "easeOutQuad" }), "" !== this.caption && (this.$photocaption && a.remove(this.$photoCaption[0]), this.$photoCaption = o('<div class="materialbox-caption"></div>'), this.$photoCaption.text(this.caption), o("body").append(this.$photoCaption), this.$photoCaption.css({ display: "inline" }), a({ targets: this.$photoCaption[0], opacity: 1, duration: this.options.inDuration, easing: "easeOutQuad" }));
                        var i = 0,
                            n = this.originalWidth / this.windowWidth,
                            s = this.originalHeight / this.windowHeight;
                        this.newWidth = 0, this.newHeight = 0, s < n ? (i = this.originalHeight / this.originalWidth, this.newWidth = .9 * this.windowWidth, this.newHeight = .9 * this.windowWidth * i) : (i = this.originalWidth / this.originalHeight, this.newWidth = .9 * this.windowHeight * i, this.newHeight = .9 * this.windowHeight), this._animateImageIn(), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), this._handleWindowResizeBound = this._handleWindowResize.bind(this), this._handleWindowEscapeBound = this._handleWindowEscape.bind(this), window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleWindowResizeBound), window.addEventListener("keyup", this._handleWindowEscapeBound)
                    }
                }, {
                    key: "close",
                    value: function() {
                        var t = this;
                        this._updateVars(), this.doneAnimating = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), a.remove(this.el), a.remove(this.$overlay[0]), "" !== this.caption && a.remove(this.$photoCaption[0]), window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleWindowResizeBound), window.removeEventListener("keyup", this._handleWindowEscapeBound), a({ targets: this.$overlay[0], opacity: 0, duration: this.options.outDuration, easing: "easeOutQuad", complete: function() { t.overlayActive = !1, t.$overlay.remove() } }), this._animateImageOut(), "" !== this.caption && a({ targets: this.$photoCaption[0], opacity: 0, duration: this.options.outDuration, easing: "easeOutQuad", complete: function() { t.$photoCaption.remove() } })
                    }
                }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Materialbox } }, { key: "defaults", get: function() { return e } }]), n
            }();
        M.Materialbox = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "materialbox", "M_Materialbox")
    }(cash, M.anime),
    function(s) {
        "use strict";
        var e = { responsiveThreshold: 0 },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_Parallax = i).options = s.extend({}, n.defaults, e), i._enabled = window.innerWidth > i.options.responsiveThreshold, i.$img = i.$el.find("img").first(), i.$img.each(function() { this.complete && s(this).trigger("load") }), i._updateParallax(), i._setupEventHandlers(), i._setupStyles(), n._parallaxes.push(i), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { n._parallaxes.splice(n._parallaxes.indexOf(this), 1), this.$img[0].style.transform = "", this._removeEventHandlers(), this.$el[0].M_Parallax = void 0 } }, { key: "_setupEventHandlers", value: function() { this._handleImageLoadBound = this._handleImageLoad.bind(this), this.$img[0].addEventListener("load", this._handleImageLoadBound), 0 === n._parallaxes.length && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5), window.addEventListener("scroll", n._handleScrollThrottled), n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5), window.addEventListener("resize", n._handleWindowResizeThrottled)) } }, { key: "_removeEventHandlers", value: function() { this.$img[0].removeEventListener("load", this._handleImageLoadBound), 0 === n._parallaxes.length && (window.removeEventListener("scroll", n._handleScrollThrottled), window.removeEventListener("resize", n._handleWindowResizeThrottled)) } }, { key: "_setupStyles", value: function() { this.$img[0].style.opacity = 1 } }, { key: "_handleImageLoad", value: function() { this._updateParallax() } }, {
                    key: "_updateParallax",
                    value: function() {
                        var t = 0 < this.$el.height() ? this.el.parentNode.offsetHeight : 500,
                            e = this.$img[0].offsetHeight - t,
                            i = this.$el.offset().top + t,
                            n = this.$el.offset().top,
                            s = M.getDocumentScrollTop(),
                            o = window.innerHeight,
                            a = e * ((s + o - n) / (t + o));
                        this._enabled ? s < i && n < s + o && (this.$img[0].style.transform = "translate3D(-50%, " + a + "px, 0)") : this.$img[0].style.transform = ""
                    }
                }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Parallax } }, {
                    key: "_handleScroll",
                    value: function() {
                        for (var t = 0; t < n._parallaxes.length; t++) {
                            var e = n._parallaxes[t];
                            e._updateParallax.call(e)
                        }
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        for (var t = 0; t < n._parallaxes.length; t++) {
                            var e = n._parallaxes[t];
                            e._enabled = window.innerWidth > e.options.responsiveThreshold
                        }
                    }
                }, { key: "defaults", get: function() { return e } }]), n
            }();
        t._parallaxes = [], M.Parallax = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "parallax", "M_Parallax")
    }(cash),
    function(a, s) {
        "use strict";
        var e = { duration: 300, onShow: null, swipeable: !1, responsiveThreshold: 1 / 0 },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_Tabs = i).options = a.extend({}, n.defaults, e), i.$tabLinks = i.$el.children("li.tab").children("a"), i.index = 0, i._setupActiveTabLink(), i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(), i._setTabsAndTabWidth(), i._createIndicator(), i._setupEventHandlers(), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this._removeEventHandlers(), this._indicator.parentNode.removeChild(this._indicator), this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(), this.$el[0].M_Tabs = void 0 } }, { key: "_setupEventHandlers", value: function() { this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound), this._handleTabClickBound = this._handleTabClick.bind(this), this.el.addEventListener("click", this._handleTabClickBound) } }, { key: "_removeEventHandlers", value: function() { window.removeEventListener("resize", this._handleWindowResizeBound), this.el.removeEventListener("click", this._handleTabClickBound) } }, { key: "_handleWindowResize", value: function() { this._setTabsAndTabWidth(), 0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px", this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px") } }, {
                    key: "_handleTabClick",
                    value: function(t) {
                        var e = this,
                            i = a(t.target).closest("li.tab"),
                            n = a(t.target).closest("a");
                        if (n.length && n.parent().hasClass("tab"))
                            if (i.hasClass("disabled")) t.preventDefault();
                            else if (!n.attr("target")) {
                            this.$activeTabLink.removeClass("active");
                            var s = this.$content;
                            this.$activeTabLink = n, this.$content = a(M.escapeHash(n[0].hash)), this.$tabLinks = this.$el.children("li.tab").children("a"), this.$activeTabLink.addClass("active");
                            var o = this.index;
                            this.index = Math.max(this.$tabLinks.index(n), 0), this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function() { "function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0]) }) : this.$content.length && (this.$content[0].style.display = "block", this.$content.addClass("active"), "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]), s.length && !s.is(this.$content) && (s[0].style.display = "none", s.removeClass("active"))), this._setTabsAndTabWidth(), this._animateIndicator(o), t.preventDefault()
                        }
                    }
                }, {
                    key: "_createIndicator",
                    value: function() {
                        var t = this,
                            e = document.createElement("li");
                        e.classList.add("indicator"), this.el.appendChild(e), this._indicator = e, setTimeout(function() { t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px", t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px" }, 0)
                    }
                }, { key: "_setupActiveTabLink", value: function() { this.$activeTabLink = a(this.$tabLinks.filter('[href="' + location.hash + '"]')), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()), 0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()), this.$tabLinks.removeClass("active"), this.$activeTabLink[0].classList.add("active"), this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0), this.$activeTabLink.length && (this.$content = a(M.escapeHash(this.$activeTabLink[0].hash)), this.$content.addClass("active")) } }, {
                    key: "_setupSwipeableTabs",
                    value: function() {
                        var i = this;
                        window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
                        var n = a();
                        this.$tabLinks.each(function(t) {
                            var e = a(M.escapeHash(t.hash));
                            e.addClass("carousel-item"), n = n.add(e)
                        });
                        var t = a('<div class="tabs-content carousel carousel-slider"></div>');
                        n.first().before(t), t.append(n), n[0].style.display = "";
                        var e = this.$activeTabLink.closest(".tab").index();
                        this._tabsCarousel = M.Carousel.init(t[0], {
                            fullWidth: !0,
                            noWrap: !0,
                            onCycleTo: function(t) {
                                var e = i.index;
                                i.index = a(t).index(), i.$activeTabLink.removeClass("active"), i.$activeTabLink = i.$tabLinks.eq(i.index), i.$activeTabLink.addClass("active"), i._animateIndicator(e), "function" == typeof i.options.onShow && i.options.onShow.call(i, i.$content[0])
                            }
                        }), this._tabsCarousel.set(e)
                    }
                }, {
                    key: "_teardownSwipeableTabs",
                    value: function() {
                        var t = this._tabsCarousel.$el;
                        this._tabsCarousel.destroy(), t.after(t.children()), t.remove()
                    }
                }, {
                    key: "_setupNormalTabs",
                    value: function() {
                        this.$tabLinks.not(this.$activeTabLink).each(function(t) {
                            if (t.hash) {
                                var e = a(M.escapeHash(t.hash));
                                e.length && (e[0].style.display = "none")
                            }
                        })
                    }
                }, {
                    key: "_teardownNormalTabs",
                    value: function() {
                        this.$tabLinks.each(function(t) {
                            if (t.hash) {
                                var e = a(M.escapeHash(t.hash));
                                e.length && (e[0].style.display = "")
                            }
                        })
                    }
                }, { key: "_setTabsAndTabWidth", value: function() { this.tabsWidth = this.$el.width(), this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length } }, { key: "_calcRightPos", value: function(t) { return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width) } }, { key: "_calcLeftPos", value: function(t) { return Math.floor(t.position().left) } }, { key: "updateTabIndicator", value: function() { this._setTabsAndTabWidth(), this._animateIndicator(this.index) } }, {
                    key: "_animateIndicator",
                    value: function(t) {
                        var e = 0,
                            i = 0;
                        0 <= this.index - t ? e = 90 : i = 90;
                        var n = { targets: this._indicator, left: { value: this._calcLeftPos(this.$activeTabLink), delay: e }, right: { value: this._calcRightPos(this.$activeTabLink), delay: i }, duration: this.options.duration, easing: "easeOutQuad" };
                        s.remove(this._indicator), s(n)
                    }
                }, {
                    key: "select",
                    value: function(t) {
                        var e = this.$tabLinks.filter('[href="#' + t + '"]');
                        e.length && e.trigger("click")
                    }
                }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Tabs } }, { key: "defaults", get: function() { return e } }]), n
            }();
        M.Tabs = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tabs", "M_Tabs")
    }(cash, M.anime),
    function(d, e) {
        "use strict";
        var i = { exitDelay: 200, enterDelay: 0, html: null, margin: 5, inDuration: 250, outDuration: 200, position: "bottom", transitionMovement: 10 },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_Tooltip = i).options = d.extend({}, n.defaults, e), i.isOpen = !1, i.isHovered = !1, i.isFocused = !1, i._appendTooltipEl(), i._setupEventHandlers(), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { d(this.tooltipEl).remove(), this._removeEventHandlers(), this.el.M_Tooltip = void 0 } }, {
                    key: "_appendTooltipEl",
                    value: function() {
                        var t = document.createElement("div");
                        t.classList.add("material-tooltip"), this.tooltipEl = t;
                        var e = document.createElement("div");
                        e.classList.add("tooltip-content"), e.innerHTML = this.options.html, t.appendChild(e), document.body.appendChild(t)
                    }
                }, { key: "_updateTooltipContent", value: function() { this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html } }, { key: "_setupEventHandlers", value: function() { this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this._handleFocusBound = this._handleFocus.bind(this), this._handleBlurBound = this._handleBlur.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.el.addEventListener("focus", this._handleFocusBound, !0), this.el.addEventListener("blur", this._handleBlurBound, !0) } }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.el.removeEventListener("focus", this._handleFocusBound, !0), this.el.removeEventListener("blur", this._handleBlurBound, !0) } }, { key: "open", value: function(t) { this.isOpen || (t = void 0 === t || void 0, this.isOpen = !0, this.options = d.extend({}, this.options, this._getAttributeOptions()), this._updateTooltipContent(), this._setEnterDelayTimeout(t)) } }, { key: "close", value: function() { this.isOpen && (this.isHovered = !1, this.isFocused = !1, this.isOpen = !1, this._setExitDelayTimeout()) } }, {
                    key: "_setExitDelayTimeout",
                    value: function() {
                        var t = this;
                        clearTimeout(this._exitDelayTimeout), this._exitDelayTimeout = setTimeout(function() { t.isHovered || t.isFocused || t._animateOut() }, this.options.exitDelay)
                    }
                }, {
                    key: "_setEnterDelayTimeout",
                    value: function(t) {
                        var e = this;
                        clearTimeout(this._enterDelayTimeout), this._enterDelayTimeout = setTimeout(function() {
                            (e.isHovered || e.isFocused || t) && e._animateIn()
                        }, this.options.enterDelay)
                    }
                }, {
                    key: "_positionTooltip",
                    value: function() {
                        var t, e = this.el,
                            i = this.tooltipEl,
                            n = e.offsetHeight,
                            s = e.offsetWidth,
                            o = i.offsetHeight,
                            a = i.offsetWidth,
                            r = this.options.margin,
                            l = void 0,
                            h = void 0;
                        this.xMovement = 0, this.yMovement = 0, l = e.getBoundingClientRect().top + M.getDocumentScrollTop(), h = e.getBoundingClientRect().left + M.getDocumentScrollLeft(), "top" === this.options.position ? (l += -o - r, h += s / 2 - a / 2, this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (l += n / 2 - o / 2, h += s + r, this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (l += n / 2 - o / 2, h += -a - r, this.xMovement = -this.options.transitionMovement) : (l += n + r, h += s / 2 - a / 2, this.yMovement = this.options.transitionMovement), t = this._repositionWithinScreen(h, l, a, o), d(i).css({ top: t.y + "px", left: t.x + "px" })
                    }
                }, {
                    key: "_repositionWithinScreen",
                    value: function(t, e, i, n) {
                        var s = M.getDocumentScrollLeft(),
                            o = M.getDocumentScrollTop(),
                            a = t - s,
                            r = e - o,
                            l = { left: a, top: r, width: i, height: n },
                            h = this.options.margin + this.options.transitionMovement,
                            d = M.checkWithinContainer(document.body, l, h);
                        return d.left ? a = h : d.right && (a -= a + i - window.innerWidth), d.top ? r = h : d.bottom && (r -= r + n - window.innerHeight), { x: a + s, y: r + o }
                    }
                }, { key: "_animateIn", value: function() { this._positionTooltip(), this.tooltipEl.style.visibility = "visible", e.remove(this.tooltipEl), e({ targets: this.tooltipEl, opacity: 1, translateX: this.xMovement, translateY: this.yMovement, duration: this.options.inDuration, easing: "easeOutCubic" }) } }, { key: "_animateOut", value: function() { e.remove(this.tooltipEl), e({ targets: this.tooltipEl, opacity: 0, translateX: 0, translateY: 0, duration: this.options.outDuration, easing: "easeOutCubic" }) } }, { key: "_handleMouseEnter", value: function() { this.isHovered = !0, this.isFocused = !1, this.open(!1) } }, { key: "_handleMouseLeave", value: function() { this.isHovered = !1, this.isFocused = !1, this.close() } }, { key: "_handleFocus", value: function() { M.tabPressed && (this.isFocused = !0, this.open(!1)) } }, { key: "_handleBlur", value: function() { this.isFocused = !1, this.close() } }, {
                    key: "_getAttributeOptions",
                    value: function() {
                        var t = {},
                            e = this.el.getAttribute("data-tooltip"),
                            i = this.el.getAttribute("data-position");
                        return e && (t.html = e), i && (t.position = i), t
                    }
                }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Tooltip } }, { key: "defaults", get: function() { return i } }]), n
            }();
        M.Tooltip = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tooltip", "M_Tooltip")
    }(cash, M.anime),
    function(i) {
        "use strict";
        var t = t || {},
            e = document.querySelectorAll.bind(document);

        function m(t) { var e = ""; for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";"); return e }
        var g = {
                duration: 750,
                show: function(t, e) {
                    if (2 === t.button) return !1;
                    var i = e || this,
                        n = document.createElement("div");
                    n.className = "waves-ripple", i.appendChild(n);
                    var s, o, a, r, l, h, d, u = (h = { top: 0, left: 0 }, d = (s = i) && s.ownerDocument, o = d.documentElement, void 0 !== s.getBoundingClientRect && (h = s.getBoundingClientRect()), a = null !== (l = r = d) && l === l.window ? r : 9 === r.nodeType && r.defaultView, { top: h.top + a.pageYOffset - o.clientTop, left: h.left + a.pageXOffset - o.clientLeft }),
                        c = t.pageY - u.top,
                        p = t.pageX - u.left,
                        v = "scale(" + i.clientWidth / 100 * 10 + ")";
                    "touches" in t && (c = t.touches[0].pageY - u.top, p = t.touches[0].pageX - u.left), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-scale", v), n.setAttribute("data-x", p), n.setAttribute("data-y", c);
                    var f = { top: c + "px", left: p + "px" };
                    n.className = n.className + " waves-notransition", n.setAttribute("style", m(f)), n.className = n.className.replace("waves-notransition", ""), f["-webkit-transform"] = v, f["-moz-transform"] = v, f["-ms-transform"] = v, f["-o-transform"] = v, f.transform = v, f.opacity = "1", f["-webkit-transition-duration"] = g.duration + "ms", f["-moz-transition-duration"] = g.duration + "ms", f["-o-transition-duration"] = g.duration + "ms", f["transition-duration"] = g.duration + "ms", f["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", n.setAttribute("style", m(f))
                },
                hide: function(t) {
                    l.touchup(t);
                    var e = this,
                        i = (e.clientWidth, null),
                        n = e.getElementsByClassName("waves-ripple");
                    if (!(0 < n.length)) return !1;
                    var s = (i = n[n.length - 1]).getAttribute("data-x"),
                        o = i.getAttribute("data-y"),
                        a = i.getAttribute("data-scale"),
                        r = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                    r < 0 && (r = 0), setTimeout(function() {
                        var t = { top: o + "px", left: s + "px", opacity: "0", "-webkit-transition-duration": g.duration + "ms", "-moz-transition-duration": g.duration + "ms", "-o-transition-duration": g.duration + "ms", "transition-duration": g.duration + "ms", "-webkit-transform": a, "-moz-transform": a, "-ms-transform": a, "-o-transform": a, transform: a };
                        i.setAttribute("style", m(t)), setTimeout(function() { try { e.removeChild(i) } catch (t) { return !1 } }, g.duration)
                    }, r)
                },
                wrapInput: function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if ("input" === i.tagName.toLowerCase()) {
                            var n = i.parentNode;
                            if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
                            var s = document.createElement("i");
                            s.className = i.className + " waves-input-wrapper";
                            var o = i.getAttribute("style");
                            o || (o = ""), s.setAttribute("style", o), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(s, i), s.appendChild(i)
                        }
                    }
                }
            },
            l = { touches: 0, allowEvent: function(t) { var e = !0; return "touchstart" === t.type ? l.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() { 0 < l.touches && (l.touches -= 1) }, 500) : "mousedown" === t.type && 0 < l.touches && (e = !1), e }, touchup: function(t) { l.allowEvent(t) } };

        function n(t) {
            var e = function(t) {
                if (!1 === l.allowEvent(t)) return null;
                for (var e = null, i = t.target || t.srcElement; null !== i.parentNode;) {
                    if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) { e = i; break }
                    i = i.parentNode
                }
                return e
            }(t);
            null !== e && (g.show(t, e), "ontouchstart" in i && (e.addEventListener("touchend", g.hide, !1), e.addEventListener("touchcancel", g.hide, !1)), e.addEventListener("mouseup", g.hide, !1), e.addEventListener("mouseleave", g.hide, !1), e.addEventListener("dragend", g.hide, !1))
        }
        t.displayEffect = function(t) { "duration" in (t = t || {}) && (g.duration = t.duration), g.wrapInput(e(".waves-effect")), "ontouchstart" in i && document.body.addEventListener("touchstart", n, !1), document.body.addEventListener("mousedown", n, !1) }, t.attach = function(t) { "input" === t.tagName.toLowerCase() && (g.wrapInput([t]), t = t.parentNode), "ontouchstart" in i && t.addEventListener("touchstart", n, !1), t.addEventListener("mousedown", n, !1) }, i.Waves = t, document.addEventListener("DOMContentLoaded", function() { t.displayEffect() }, !1)
    }(window),
    function(i, n) {
        "use strict";
        var t = { html: "", displayLength: 4e3, inDuration: 300, outDuration: 375, classes: "", completeCallback: null, activationPercent: .8 },
            e = function() {
                function s(t) {
                    _classCallCheck(this, s), this.options = i.extend({}, s.defaults, t), this.message = this.options.html, this.panning = !1, this.timeRemaining = this.options.displayLength, 0 === s._toasts.length && s._createContainer(), s._toasts.push(this);
                    var e = this._createToast();
                    (e.M_Toast = this).el = e, this.$el = i(e), this._animateIn(), this._setTimer()
                }
                return _createClass(s, [{ key: "_createToast", value: function() { var t = document.createElement("div"); return t.classList.add("toast"), this.options.classes.length && i(t).addClass(this.options.classes), ("object" == typeof HTMLElement ? this.message instanceof HTMLElement : this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message.jquery ? i(t).append(this.message[0]) : t.innerHTML = this.message, s._container.appendChild(t), t } }, { key: "_animateIn", value: function() { n({ targets: this.el, top: 0, opacity: 1, duration: this.options.inDuration, easing: "easeOutCubic" }) } }, {
                    key: "_setTimer",
                    value: function() {
                        var t = this;
                        this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() { t.panning || (t.timeRemaining -= 20), t.timeRemaining <= 0 && t.dismiss() }, 20))
                    }
                }, {
                    key: "dismiss",
                    value: function() {
                        var t = this;
                        window.clearInterval(this.counterInterval);
                        var e = this.el.offsetWidth * this.options.activationPercent;
                        this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + e + "px)", this.el.style.opacity = 0), n({ targets: this.el, opacity: 0, marginTop: -40, duration: this.options.outDuration, easing: "easeOutExpo", complete: function() { "function" == typeof t.options.completeCallback && t.options.completeCallback(), t.$el.remove(), s._toasts.splice(s._toasts.indexOf(t), 1), 0 === s._toasts.length && s._removeContainer() } })
                    }
                }], [{ key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Toast } }, {
                    key: "_createContainer",
                    value: function() {
                        var t = document.createElement("div");
                        t.setAttribute("id", "toast-container"), t.addEventListener("touchstart", s._onDragStart), t.addEventListener("touchmove", s._onDragMove), t.addEventListener("touchend", s._onDragEnd), t.addEventListener("mousedown", s._onDragStart), document.addEventListener("mousemove", s._onDragMove), document.addEventListener("mouseup", s._onDragEnd), document.body.appendChild(t), s._container = t
                    }
                }, { key: "_removeContainer", value: function() { document.removeEventListener("mousemove", s._onDragMove), document.removeEventListener("mouseup", s._onDragEnd), i(s._container).remove(), s._container = null } }, {
                    key: "_onDragStart",
                    value: function(t) {
                        if (t.target && i(t.target).closest(".toast").length) {
                            var e = i(t.target).closest(".toast")[0].M_Toast;
                            e.panning = !0, (s._draggedToast = e).el.classList.add("panning"), e.el.style.transition = "", e.startingXPos = s._xPos(t), e.time = Date.now(), e.xPos = s._xPos(t)
                        }
                    }
                }, {
                    key: "_onDragMove",
                    value: function(t) {
                        if (s._draggedToast) {
                            t.preventDefault();
                            var e = s._draggedToast;
                            e.deltaX = Math.abs(e.xPos - s._xPos(t)), e.xPos = s._xPos(t), e.velocityX = e.deltaX / (Date.now() - e.time), e.time = Date.now();
                            var i = e.xPos - e.startingXPos,
                                n = e.el.offsetWidth * e.options.activationPercent;
                            e.el.style.transform = "translateX(" + i + "px)", e.el.style.opacity = 1 - Math.abs(i / n)
                        }
                    }
                }, {
                    key: "_onDragEnd",
                    value: function() {
                        if (s._draggedToast) {
                            var t = s._draggedToast;
                            t.panning = !1, t.el.classList.remove("panning");
                            var e = t.xPos - t.startingXPos,
                                i = t.el.offsetWidth * t.options.activationPercent;
                            Math.abs(e) > i || 1 < t.velocityX ? (t.wasSwiped = !0, t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s", t.el.style.transform = "", t.el.style.opacity = ""), s._draggedToast = null
                        }
                    }
                }, { key: "_xPos", value: function(t) { return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX } }, { key: "dismissAll", value: function() { for (var t in s._toasts) s._toasts[t].dismiss() } }, { key: "defaults", get: function() { return t } }]), s
            }();
        e._toasts = [], e._container = null, e._draggedToast = null, M.Toast = e, M.toast = function(t) { return new e(t) }
    }(cash, M.anime),
    function(s, o) {
        "use strict";
        var e = { edge: "left", draggable: !0, inDuration: 250, outDuration: 200, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null, preventScrolling: !0 },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_Sidenav = i).id = i.$el.attr("id"), i.options = s.extend({}, n.defaults, e), i.isOpen = !1, i.isFixed = i.el.classList.contains("sidenav-fixed"), i.isDragged = !1, i.lastWindowWidth = window.innerWidth, i.lastWindowHeight = window.innerHeight, i._createOverlay(), i._createDragTarget(), i._setupEventHandlers(), i._setupClasses(), i._setupFixed(), n._sidenavs.push(i), i }
                return _inherits(n, Component), _createClass(n, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(), this._enableBodyScrolling(), this._overlay.parentNode.removeChild(this._overlay), this.dragTarget.parentNode.removeChild(this.dragTarget), this.el.M_Sidenav = void 0, this.el.style.transform = "";
                        var t = n._sidenavs.indexOf(this);
                        0 <= t && n._sidenavs.splice(t, 1)
                    }
                }, {
                    key: "_createOverlay",
                    value: function() {
                        var t = document.createElement("div");
                        this._closeBound = this.close.bind(this), t.classList.add("sidenav-overlay"), t.addEventListener("click", this._closeBound), document.body.appendChild(t), this._overlay = t
                    }
                }, { key: "_setupEventHandlers", value: function() { 0 === n._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick), this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this), this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this), this._handleCloseDragBound = this._handleCloseDrag.bind(this), this._handleCloseReleaseBound = this._handleCloseRelease.bind(this), this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this), this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.addEventListener("touchmove", this._handleCloseDragBound), this._overlay.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("touchmove", this._handleCloseDragBound), this.el.addEventListener("touchend", this._handleCloseReleaseBound), this.el.addEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound)) } }, { key: "_removeEventHandlers", value: function() { 1 === n._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick), this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound), this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound), this._overlay.removeEventListener("touchmove", this._handleCloseDragBound), this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("touchmove", this._handleCloseDragBound), this.el.removeEventListener("touchend", this._handleCloseReleaseBound), this.el.removeEventListener("click", this._handleCloseTriggerClickBound), this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound) } }, {
                    key: "_handleTriggerClick",
                    value: function(t) {
                        var e = s(t.target).closest(".sidenav-trigger");
                        if (t.target && e.length) {
                            var i = M.getIdFromTrigger(e[0]),
                                n = document.getElementById(i).M_Sidenav;
                            n && n.open(e), t.preventDefault()
                        }
                    }
                }, {
                    key: "_startDrag",
                    value: function(t) {
                        var e = t.targetTouches[0].clientX;
                        this.isDragged = !0, this._startingXpos = e, this._xPos = this._startingXpos, this._time = Date.now(), this._width = this.el.getBoundingClientRect().width, this._overlay.style.display = "block", this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(), this._verticallyScrolling = !1, o.remove(this.el), o.remove(this._overlay)
                    }
                }, {
                    key: "_dragMoveUpdate",
                    value: function(t) {
                        var e = t.targetTouches[0].clientX,
                            i = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
                        this.deltaX = Math.abs(this._xPos - e), this._xPos = e, this.velocityX = this.deltaX / (Date.now() - this._time), this._time = Date.now(), this._initialScrollTop !== i && (this._verticallyScrolling = !0)
                    }
                }, {
                    key: "_handleDragTargetDrag",
                    value: function(t) {
                        if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
                            this.isDragged || this._startDrag(t), this._dragMoveUpdate(t);
                            var e = this._xPos - this._startingXpos,
                                i = 0 < e ? "right" : "left";
                            e = Math.min(this._width, Math.abs(e)), this.options.edge === i && (e = 0);
                            var n = e,
                                s = "translateX(-100%)";
                            "right" === this.options.edge && (s = "translateX(100%)", n = -n), this.percentOpen = Math.min(1, e / this._width), this.el.style.transform = s + " translateX(" + n + "px)", this._overlay.style.opacity = this.percentOpen
                        }
                    }
                }, { key: "_handleDragTargetRelease", value: function() { this.isDragged && (.2 < this.percentOpen ? this.open() : this._animateOut(), this.isDragged = !1, this._verticallyScrolling = !1) } }, {
                    key: "_handleCloseDrag",
                    value: function(t) {
                        if (this.isOpen) {
                            if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) return;
                            this.isDragged || this._startDrag(t), this._dragMoveUpdate(t);
                            var e = this._xPos - this._startingXpos,
                                i = 0 < e ? "right" : "left";
                            e = Math.min(this._width, Math.abs(e)), this.options.edge !== i && (e = 0);
                            var n = -e;
                            "right" === this.options.edge && (n = -n), this.percentOpen = Math.min(1, 1 - e / this._width), this.el.style.transform = "translateX(" + n + "px)", this._overlay.style.opacity = this.percentOpen
                        }
                    }
                }, { key: "_handleCloseRelease", value: function() { this.isOpen && this.isDragged && (.8 < this.percentOpen ? this._animateIn() : this.close(), this.isDragged = !1, this._verticallyScrolling = !1) } }, { key: "_handleCloseTriggerClick", value: function(t) { s(t.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close() } }, { key: "_handleWindowResize", value: function() { this.lastWindowWidth !== window.innerWidth && (992 < window.innerWidth ? this.open() : this.close()), this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight } }, { key: "_setupClasses", value: function() { "right" === this.options.edge && (this.el.classList.add("right-aligned"), this.dragTarget.classList.add("right-aligned")) } }, { key: "_removeClasses", value: function() { this.el.classList.remove("right-aligned"), this.dragTarget.classList.remove("right-aligned") } }, { key: "_setupFixed", value: function() { this._isCurrentlyFixed() && this.open() } }, { key: "_isCurrentlyFixed", value: function() { return this.isFixed && 992 < window.innerWidth } }, {
                    key: "_createDragTarget",
                    value: function() {
                        var t = document.createElement("div");
                        t.classList.add("drag-target"), document.body.appendChild(t), this.dragTarget = t
                    }
                }, { key: "_preventBodyScrolling", value: function() { document.body.style.overflow = "hidden" } }, { key: "_enableBodyScrolling", value: function() { document.body.style.overflow = "" } }, { key: "open", value: function() {!0 !== this.isOpen && (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._isCurrentlyFixed() ? (o.remove(this.el), o({ targets: this.el, translateX: 0, duration: 0, easing: "easeOutQuad" }), this._enableBodyScrolling(), this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(), this.isDragged && 1 == this.percentOpen || this._animateIn())) } }, {
                    key: "close",
                    value: function() {
                        if (!1 !== this.isOpen)
                            if (this.isOpen = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._isCurrentlyFixed()) {
                                var t = "left" === this.options.edge ? "-105%" : "105%";
                                this.el.style.transform = "translateX(" + t + ")"
                            } else this._enableBodyScrolling(), this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
                    }
                }, { key: "_animateIn", value: function() { this._animateSidenavIn(), this._animateOverlayIn() } }, {
                    key: "_animateSidenavIn",
                    value: function() {
                        var t = this,
                            e = "left" === this.options.edge ? -1 : 1;
                        this.isDragged && (e = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen), o.remove(this.el), o({ targets: this.el, translateX: [100 * e + "%", 0], duration: this.options.inDuration, easing: "easeOutQuad", complete: function() { "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el) } })
                    }
                }, {
                    key: "_animateOverlayIn",
                    value: function() {
                        var t = 0;
                        this.isDragged ? t = this.percentOpen : s(this._overlay).css({ display: "block" }), o.remove(this._overlay), o({ targets: this._overlay, opacity: [t, 1], duration: this.options.inDuration, easing: "easeOutQuad" })
                    }
                }, { key: "_animateOut", value: function() { this._animateSidenavOut(), this._animateOverlayOut() } }, {
                    key: "_animateSidenavOut",
                    value: function() {
                        var t = this,
                            e = "left" === this.options.edge ? -1 : 1,
                            i = 0;
                        this.isDragged && (i = "left" === this.options.edge ? e + this.percentOpen : e - this.percentOpen), o.remove(this.el), o({ targets: this.el, translateX: [100 * i + "%", 105 * e + "%"], duration: this.options.outDuration, easing: "easeOutQuad", complete: function() { "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el) } })
                    }
                }, {
                    key: "_animateOverlayOut",
                    value: function() {
                        var t = this;
                        o.remove(this._overlay), o({ targets: this._overlay, opacity: 0, duration: this.options.outDuration, easing: "easeOutQuad", complete: function() { s(t._overlay).css("display", "none") } })
                    }
                }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Sidenav } }, { key: "defaults", get: function() { return e } }]), n
            }();
        t._sidenavs = [], M.Sidenav = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "sidenav", "M_Sidenav")
    }(cash, M.anime),
    function(o, a) {
        "use strict";
        var e = { throttle: 100, scrollOffset: 200, activeClass: "active", getActiveElement: function(t) { return 'a[href="#' + t + '"]' } },
            t = function(t) {
                function c(t, e) { _classCallCheck(this, c); var i = _possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, c, t, e)); return (i.el.M_ScrollSpy = i).options = o.extend({}, c.defaults, e), c._elements.push(i), c._count++, c._increment++, i.tickId = -1, i.id = c._increment, i._setupEventHandlers(), i._handleWindowScroll(), i }
                return _inherits(c, Component), _createClass(c, [{ key: "destroy", value: function() { c._elements.splice(c._elements.indexOf(this), 1), c._elementsInView.splice(c._elementsInView.indexOf(this), 1), c._visibleElements.splice(c._visibleElements.indexOf(this.$el), 1), c._count--, this._removeEventHandlers(), o(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass), this.el.M_ScrollSpy = void 0 } }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = M.throttle(this._handleWindowScroll, 200);
                        this._handleThrottledResizeBound = t.bind(this), this._handleWindowScrollBound = this._handleWindowScroll.bind(this), 1 === c._count && (window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleThrottledResizeBound), document.body.addEventListener("click", this._handleTriggerClick))
                    }
                }, { key: "_removeEventHandlers", value: function() { 0 === c._count && (window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleThrottledResizeBound), document.body.removeEventListener("click", this._handleTriggerClick)) } }, {
                    key: "_handleTriggerClick",
                    value: function(t) {
                        for (var e = o(t.target), i = c._elements.length - 1; 0 <= i; i--) {
                            var n = c._elements[i];
                            if (e.is('a[href="#' + n.$el.attr("id") + '"]')) {
                                t.preventDefault();
                                var s = n.$el.offset().top + 1;
                                a({ targets: [document.documentElement, document.body], scrollTop: s - n.options.scrollOffset, duration: 400, easing: "easeOutCubic" });
                                break
                            }
                        }
                    }
                }, {
                    key: "_handleWindowScroll",
                    value: function() {
                        c._ticks++;
                        for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), i = e + window.innerWidth, n = t + window.innerHeight, s = c._findElements(t, i, n, e), o = 0; o < s.length; o++) {
                            var a = s[o];
                            a.tickId < 0 && a._enter(), a.tickId = c._ticks
                        }
                        for (var r = 0; r < c._elementsInView.length; r++) {
                            var l = c._elementsInView[r],
                                h = l.tickId;
                            0 <= h && h !== c._ticks && (l._exit(), l.tickId = -1)
                        }
                        c._elementsInView = s
                    }
                }, {
                    key: "_enter",
                    value: function() {
                        (c._visibleElements = c._visibleElements.filter(function(t) { return 0 != t.height() }))[0] ? (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), c._visibleElements[0][0].M_ScrollSpy && this.id < c._visibleElements[0][0].M_ScrollSpy.id ? c._visibleElements.unshift(this.$el) : c._visibleElements.push(this.$el)) : c._visibleElements.push(this.$el), o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
                    }
                }, {
                    key: "_exit",
                    value: function() {
                        var e = this;
                        (c._visibleElements = c._visibleElements.filter(function(t) { return 0 != t.height() }))[0] && (o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), (c._visibleElements = c._visibleElements.filter(function(t) { return t.attr("id") != e.$el.attr("id") }))[0] && o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
                    }
                }], [{ key: "init", value: function(t, e) { return _get(c.__proto__ || Object.getPrototypeOf(c), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_ScrollSpy } }, {
                    key: "_findElements",
                    value: function(t, e, i, n) {
                        for (var s = [], o = 0; o < c._elements.length; o++) {
                            var a = c._elements[o],
                                r = t + a.options.scrollOffset || 200;
                            if (0 < a.$el.height()) {
                                var l = a.$el.offset().top,
                                    h = a.$el.offset().left,
                                    d = h + a.$el.width(),
                                    u = l + a.$el.height();
                                !(e < h || d < n || i < l || u < r) && s.push(a)
                            }
                        }
                        return s
                    }
                }, { key: "defaults", get: function() { return e } }]), c
            }();
        t._elements = [], t._elementsInView = [], t._visibleElements = [], t._count = 0, t._increment = 0, t._ticks = 0, M.ScrollSpy = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "scrollSpy", "M_ScrollSpy")
    }(cash, M.anime),
    function(h) {
        "use strict";
        var e = { data: {}, limit: 1 / 0, onAutocomplete: null, minLength: 1, sortFunction: function(t, e, i) { return t.indexOf(i) - e.indexOf(i) } },
            t = function(t) {
                function s(t, e) { _classCallCheck(this, s); var i = _possibleConstructorReturn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, s, t, e)); return (i.el.M_Autocomplete = i).options = h.extend({}, s.defaults, e), i.isOpen = !1, i.count = 0, i.activeIndex = -1, i.oldVal, i.$inputField = i.$el.closest(".input-field"), i.$active = h(), i._mousedown = !1, i._setupDropdown(), i._setupEventHandlers(), i }
                return _inherits(s, Component), _createClass(s, [{ key: "destroy", value: function() { this._removeEventHandlers(), this._removeDropdown(), this.el.M_Autocomplete = void 0 } }, { key: "_setupEventHandlers", value: function() { this._handleInputBlurBound = this._handleInputBlur.bind(this), this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this), this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this), this.el.addEventListener("blur", this._handleInputBlurBound), this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("click", this._handleInputClickBound), this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), void 0 !== window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound)) } }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("blur", this._handleInputBlurBound), this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("click", this._handleInputClickBound), this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound), void 0 !== window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound)) } }, {
                    key: "_setupDropdown",
                    value: function() {
                        var e = this;
                        this.container = document.createElement("ul"), this.container.id = "autocomplete-options-" + M.guid(), h(this.container).addClass("autocomplete-content dropdown-content"), this.$inputField.append(this.container), this.el.setAttribute("data-target", this.container.id), this.dropdown = M.Dropdown.init(this.el, { autoFocus: !1, closeOnClick: !1, coverTrigger: !1, onItemClick: function(t) { e.selectOption(h(t)) } }), this.el.removeEventListener("click", this.dropdown._handleClickBound)
                    }
                }, { key: "_removeDropdown", value: function() { this.container.parentNode.removeChild(this.container) } }, { key: "_handleInputBlur", value: function() { this._mousedown || (this.close(), this._resetAutocomplete()) } }, {
                    key: "_handleInputKeyupAndFocus",
                    value: function(t) {
                        "keyup" === t.type && (s._keydown = !1), this.count = 0;
                        var e = this.el.value.toLowerCase();
                        13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal === e || !M.tabPressed && "focus" === t.type || this.open(), this.oldVal = e)
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(t) {
                        s._keydown = !0;
                        var e = t.keyCode,
                            i = void 0,
                            n = h(this.container).children("li").length;
                        e === M.keys.ENTER && 0 <= this.activeIndex ? (i = h(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(i), t.preventDefault()) : e !== M.keys.ARROW_UP && e !== M.keys.ARROW_DOWN || (t.preventDefault(), e === M.keys.ARROW_UP && 0 < this.activeIndex && this.activeIndex--, e === M.keys.ARROW_DOWN && this.activeIndex < n - 1 && this.activeIndex++, this.$active.removeClass("active"), 0 <= this.activeIndex && (this.$active = h(this.container).children("li").eq(this.activeIndex), this.$active.addClass("active")))
                    }
                }, { key: "_handleInputClick", value: function(t) { this.open() } }, { key: "_handleContainerMousedownAndTouchstart", value: function(t) { this._mousedown = !0 } }, { key: "_handleContainerMouseupAndTouchend", value: function(t) { this._mousedown = !1 } }, {
                    key: "_highlight",
                    value: function(t, e) {
                        var i = e.find("img"),
                            n = e.text().toLowerCase().indexOf("" + t.toLowerCase()),
                            s = n + t.length - 1,
                            o = e.text().slice(0, n),
                            a = e.text().slice(n, s + 1),
                            r = e.text().slice(s + 1);
                        e.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + r + "</span>"), i.length && e.prepend(i)
                    }
                }, { key: "_resetCurrentElement", value: function() { this.activeIndex = -1, this.$active.removeClass("active") } }, { key: "_resetAutocomplete", value: function() { h(this.container).empty(), this._resetCurrentElement(), this.oldVal = null, this.isOpen = !1, this._mousedown = !1 } }, {
                    key: "selectOption",
                    value: function(t) {
                        var e = t.text().trim();
                        this.el.value = e, this.$el.trigger("change"), this._resetAutocomplete(), this.close(), "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e)
                    }
                }, {
                    key: "_renderDropdown",
                    value: function(t, i) {
                        var n = this;
                        this._resetAutocomplete();
                        var e = [];
                        for (var s in t)
                            if (t.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(i)) {
                                if (this.count >= this.options.limit) break;
                                var o = { data: t[s], key: s };
                                e.push(o), this.count++
                            }
                        if (this.options.sortFunction) { e.sort(function(t, e) { return n.options.sortFunction(t.key.toLowerCase(), e.key.toLowerCase(), i.toLowerCase()) }) }
                        for (var a = 0; a < e.length; a++) {
                            var r = e[a],
                                l = h("<li></li>");
                            r.data ? l.append('<img src="' + r.data + '" class="right circle"><span>' + r.key + "</span>") : l.append("<span>" + r.key + "</span>"), h(this.container).append(l), this._highlight(i, l)
                        }
                    }
                }, {
                    key: "open",
                    value: function() {
                        var t = this.el.value.toLowerCase();
                        this._resetAutocomplete(), t.length >= this.options.minLength && (this.isOpen = !0, this._renderDropdown(this.options.data, t)), this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
                    }
                }, { key: "close", value: function() { this.dropdown.close() } }, {
                    key: "updateData",
                    value: function(t) {
                        var e = this.el.value.toLowerCase();
                        this.options.data = t, this.isOpen && this._renderDropdown(t, e)
                    }
                }], [{ key: "init", value: function(t, e) { return _get(s.__proto__ || Object.getPrototypeOf(s), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Autocomplete } }, { key: "defaults", get: function() { return e } }]), s
            }();
        t._keydown = !1, M.Autocomplete = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "autocomplete", "M_Autocomplete")
    }(cash),
    function(d) {
        M.updateTextFields = function() {
            d("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(t, e) {
                var i = d(this);
                0 < t.value.length || d(t).is(":focus") || t.autofocus || null !== i.attr("placeholder") ? i.siblings("label").addClass("active") : t.validity ? i.siblings("label").toggleClass("active", !0 === t.validity.badInput) : i.siblings("label").removeClass("active")
            })
        }, M.validate_field = function(t) {
            var e = null !== t.attr("data-length"),
                i = parseInt(t.attr("data-length")),
                n = t[0].value.length;
            0 !== n || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid"))
        }, M.textareaAutoResize = function(t) {
            if (t instanceof Element && (t = d(t)), t.length) {
                var e = d(".hiddendiv").first();
                e.length || (e = d('<div class="hiddendiv common"></div>'), d("body").append(e));
                var i = t.css("font-family"),
                    n = t.css("font-size"),
                    s = t.css("line-height"),
                    o = t.css("padding-top"),
                    a = t.css("padding-right"),
                    r = t.css("padding-bottom"),
                    l = t.css("padding-left");
                n && e.css("font-size", n), i && e.css("font-family", i), s && e.css("line-height", s), o && e.css("padding-top", o), a && e.css("padding-right", a), r && e.css("padding-bottom", r), l && e.css("padding-left", l), t.data("original-height") || t.data("original-height", t.height()), "off" === t.attr("wrap") && e.css("overflow-wrap", "normal").css("white-space", "pre"), e.text(t[0].value + "\n");
                var h = e.html().replace(/\n/g, "<br>");
                e.html(h), 0 < t[0].offsetWidth && 0 < t[0].offsetHeight ? e.css("width", t.width() + "px") : e.css("width", window.innerWidth / 2 + "px"), t.data("original-height") <= e.innerHeight() ? t.css("height", e.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"), t.data("previous-length", t[0].value.length)
            } else console.error("No textarea element found")
        }, d(document).ready(function() {
            var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
            d(document).on("change", n, function() { 0 === this.value.length && null === d(this).attr("placeholder") || d(this).siblings("label").addClass("active"), M.validate_field(d(this)) }), d(document).ready(function() { M.updateTextFields() }), d(document).on("reset", function(t) {
                var e = d(t.target);
                e.is("form") && (e.find(n).removeClass("valid").removeClass("invalid"), e.find(n).each(function(t) { this.value.length && d(this).siblings("label").removeClass("active") }), setTimeout(function() { e.find("select").each(function() { this.M_FormSelect && d(this).trigger("change") }) }, 0))
            }), document.addEventListener("focus", function(t) { d(t.target).is(n) && d(t.target).siblings("label, .prefix").addClass("active") }, !0), document.addEventListener("blur", function(t) {
                var e = d(t.target);
                if (e.is(n)) {
                    var i = ".prefix";
                    0 === e[0].value.length && !0 !== e[0].validity.badInput && null === e.attr("placeholder") && (i += ", label"), e.siblings(i).removeClass("active"), M.validate_field(e)
                }
            }, !0);
            d(document).on("keyup", "input[type=radio], input[type=checkbox]", function(t) { if (t.which === M.keys.TAB) return d(this).addClass("tabbed"), void d(this).one("blur", function(t) { d(this).removeClass("tabbed") }) });
            var t = ".materialize-textarea";
            d(t).each(function() {
                var t = d(this);
                t.data("original-height", t.height()), t.data("previous-length", this.value.length), M.textareaAutoResize(t)
            }), d(document).on("keyup", t, function() { M.textareaAutoResize(d(this)) }), d(document).on("keydown", t, function() { M.textareaAutoResize(d(this)) }), d(document).on("change", '.file-field input[type="file"]', function() {
                for (var t = d(this).closest(".file-field").find("input.file-path"), e = d(this)[0].files, i = [], n = 0; n < e.length; n++) i.push(e[n].name);
                t[0].value = i.join(", "), t.trigger("change")
            })
        })
    }(cash),
    function(s, o) {
        "use strict";
        var e = { indicators: !0, height: 400, duration: 500, interval: 6e3 },
            t = function(t) {
                function n(t, e) {
                    _classCallCheck(this, n);
                    var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e));
                    return (i.el.M_Slider = i).options = s.extend({}, n.defaults, e), i.$slider = i.$el.find(".slides"), i.$slides = i.$slider.children("li"), i.activeIndex = i.$slides.filter(function(t) { return s(t).hasClass("active") }).first().index(), -1 != i.activeIndex && (i.$active = i.$slides.eq(i.activeIndex)), i._setSliderHeight(), i.$slides.find(".caption").each(function(t) { i._animateCaptionIn(t, 0) }), i.$slides.find("img").each(function(t) {
                        var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        s(t).attr("src") !== e && (s(t).css("background-image", 'url("' + s(t).attr("src") + '")'), s(t).attr("src", e))
                    }), i._setupIndicators(), i.$active ? i.$active.css("display", "block") : (i.$slides.first().addClass("active"), o({ targets: i.$slides.first()[0], opacity: 1, duration: i.options.duration, easing: "easeOutQuad" }), i.activeIndex = 0, i.$active = i.$slides.eq(i.activeIndex), i.options.indicators && i.$indicators.eq(i.activeIndex).addClass("active")), i.$active.find("img").each(function(t) { o({ targets: i.$active.find(".caption")[0], opacity: 1, translateX: 0, translateY: 0, duration: i.options.duration, easing: "easeOutQuad" }) }), i._setupEventHandlers(), i.start(), i
                }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this.pause(), this._removeIndicators(), this._removeEventHandlers(), this.el.M_Slider = void 0 } }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = this;
                        this._handleIntervalBound = this._handleInterval.bind(this), this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.options.indicators && this.$indicators.each(function(t) { t.addEventListener("click", e._handleIndicatorClickBound) })
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var e = this;
                        this.options.indicators && this.$indicators.each(function(t) { t.removeEventListener("click", e._handleIndicatorClickBound) })
                    }
                }, {
                    key: "_handleIndicatorClick",
                    value: function(t) {
                        var e = s(t.target).index();
                        this.set(e)
                    }
                }, {
                    key: "_handleInterval",
                    value: function() {
                        var t = this.$slider.find(".active").index();
                        this.$slides.length === t + 1 ? t = 0 : t += 1, this.set(t)
                    }
                }, {
                    key: "_animateCaptionIn",
                    value: function(t, e) {
                        var i = { targets: t, opacity: 0, duration: e, easing: "easeOutQuad" };
                        s(t).hasClass("center-align") ? i.translateY = -100 : s(t).hasClass("right-align") ? i.translateX = 100 : s(t).hasClass("left-align") && (i.translateX = -100), o(i)
                    }
                }, { key: "_setSliderHeight", value: function() { this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"), this.$slider.css("height", this.options.height + "px")) } }, {
                    key: "_setupIndicators",
                    value: function() {
                        var n = this;
                        this.options.indicators && (this.$indicators = s('<ul class="indicators"></ul>'), this.$slides.each(function(t, e) {
                            var i = s('<li class="indicator-item"></li>');
                            n.$indicators.append(i[0])
                        }), this.$el.append(this.$indicators[0]), this.$indicators = this.$indicators.children("li.indicator-item"))
                    }
                }, { key: "_removeIndicators", value: function() { this.$el.find("ul.indicators").remove() } }, {
                    key: "set",
                    value: function(t) {
                        var e = this;
                        if (t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.activeIndex != t) {
                            this.$active = this.$slides.eq(this.activeIndex);
                            var i = this.$active.find(".caption");
                            this.$active.removeClass("active"), o({ targets: this.$active[0], opacity: 0, duration: this.options.duration, easing: "easeOutQuad", complete: function() { e.$slides.not(".active").each(function(t) { o({ targets: t, opacity: 0, translateX: 0, translateY: 0, duration: 0, easing: "easeOutQuad" }) }) } }), this._animateCaptionIn(i[0], this.options.duration), this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"), this.$indicators.eq(t).addClass("active")), o({ targets: this.$slides.eq(t)[0], opacity: 1, duration: this.options.duration, easing: "easeOutQuad" }), o({ targets: this.$slides.eq(t).find(".caption")[0], opacity: 1, translateX: 0, translateY: 0, duration: this.options.duration, delay: this.options.duration, easing: "easeOutQuad" }), this.$slides.eq(t).addClass("active"), this.activeIndex = t, this.start()
                        }
                    }
                }, { key: "pause", value: function() { clearInterval(this.interval) } }, { key: "start", value: function() { clearInterval(this.interval), this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval) } }, {
                    key: "next",
                    value: function() {
                        var t = this.activeIndex + 1;
                        t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.set(t)
                    }
                }, {
                    key: "prev",
                    value: function() {
                        var t = this.activeIndex - 1;
                        t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1), this.set(t)
                    }
                }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Slider } }, { key: "defaults", get: function() { return e } }]), n
            }();
        M.Slider = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "slider", "M_Slider")
    }(cash, M.anime),
    function(n, s) {
        n(document).on("click", ".card", function(t) {
            if (n(this).children(".card-reveal").length) {
                var i = n(t.target).closest(".card");
                void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow"));
                var e = n(this).find(".card-reveal");
                n(t.target).is(n(".card-reveal .card-title")) || n(t.target).is(n(".card-reveal .card-title i")) ? s({
                    targets: e[0],
                    translateY: 0,
                    duration: 225,
                    easing: "easeInOutQuad",
                    complete: function(t) {
                        var e = t.animatables[0].target;
                        n(e).css({ display: "none" }), i.css("overflow", i.data("initialOverflow"))
                    }
                }) : (n(t.target).is(n(".card .activator")) || n(t.target).is(n(".card .activator i"))) && (i.css("overflow", "hidden"), e.css({ display: "block" }), s({ targets: e[0], translateY: "-100%", duration: 300, easing: "easeInOutQuad" }))
            }
        })
    }(cash, M.anime),
    function(h) {
        "use strict";
        var e = { data: [], placeholder: "", secondaryPlaceholder: "", autocompleteOptions: {}, limit: 1 / 0, onChipAdd: null, onChipSelect: null, onChipDelete: null },
            t = function(t) {
                function l(t, e) { _classCallCheck(this, l); var i = _possibleConstructorReturn(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, l, t, e)); return (i.el.M_Chips = i).options = h.extend({}, l.defaults, e), i.$el.addClass("chips input-field"), i.chipsData = [], i.$chips = h(), i._setupInput(), i.hasAutocomplete = 0 < Object.keys(i.options.autocompleteOptions).length, i.$input.attr("id") || i.$input.attr("id", M.guid()), i.options.data.length && (i.chipsData = i.options.data, i._renderChips(i.chipsData)), i.hasAutocomplete && i._setupAutocomplete(), i._setPlaceholder(), i._setupLabel(), i._setupEventHandlers(), i }
                return _inherits(l, Component), _createClass(l, [{ key: "getData", value: function() { return this.chipsData } }, { key: "destroy", value: function() { this._removeEventHandlers(), this.$chips.remove(), this.el.M_Chips = void 0 } }, { key: "_setupEventHandlers", value: function() { this._handleChipClickBound = this._handleChipClick.bind(this), this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputFocusBound = this._handleInputFocus.bind(this), this._handleInputBlurBound = this._handleInputBlur.bind(this), this.el.addEventListener("click", this._handleChipClickBound), document.addEventListener("keydown", l._handleChipsKeydown), document.addEventListener("keyup", l._handleChipsKeyup), this.el.addEventListener("blur", l._handleChipsBlur, !0), this.$input[0].addEventListener("focus", this._handleInputFocusBound), this.$input[0].addEventListener("blur", this._handleInputBlurBound), this.$input[0].addEventListener("keydown", this._handleInputKeydownBound) } }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("click", this._handleChipClickBound), document.removeEventListener("keydown", l._handleChipsKeydown), document.removeEventListener("keyup", l._handleChipsKeyup), this.el.removeEventListener("blur", l._handleChipsBlur, !0), this.$input[0].removeEventListener("focus", this._handleInputFocusBound), this.$input[0].removeEventListener("blur", this._handleInputBlurBound), this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound) } }, {
                    key: "_handleChipClick",
                    value: function(t) {
                        var e = h(t.target).closest(".chip"),
                            i = h(t.target).is(".close");
                        if (e.length) {
                            var n = e.index();
                            i ? (this.deleteChip(n), this.$input[0].focus()) : this.selectChip(n)
                        } else this.$input[0].focus()
                    }
                }, { key: "_handleInputFocus", value: function() { this.$el.addClass("focus") } }, { key: "_handleInputBlur", value: function() { this.$el.removeClass("focus") } }, {
                    key: "_handleInputKeydown",
                    value: function(t) {
                        if (l._keydown = !0, 13 === t.keyCode) {
                            if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) return;
                            t.preventDefault(), this.addChip({ tag: this.$input[0].value }), this.$input[0].value = ""
                        } else 8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(), this.selectChip(this.chipsData.length - 1))
                    }
                }, {
                    key: "_renderChip",
                    value: function(t) {
                        if (t.tag) {
                            var e = document.createElement("div"),
                                i = document.createElement("i");
                            if (e.classList.add("chip"), e.textContent = t.tag, e.setAttribute("tabindex", 0), h(i).addClass("material-icons close"), i.textContent = "close", t.image) {
                                var n = document.createElement("img");
                                n.setAttribute("src", t.image), e.insertBefore(n, e.firstChild)
                            }
                            return e.appendChild(i), e
                        }
                    }
                }, {
                    key: "_renderChips",
                    value: function() {
                        this.$chips.remove();
                        for (var t = 0; t < this.chipsData.length; t++) {
                            var e = this._renderChip(this.chipsData[t]);
                            this.$el.append(e), this.$chips.add(e)
                        }
                        this.$el.append(this.$input[0])
                    }
                }, {
                    key: "_setupAutocomplete",
                    value: function() {
                        var e = this;
                        this.options.autocompleteOptions.onAutocomplete = function(t) { e.addChip({ tag: t }), e.$input[0].value = "", e.$input[0].focus() }, this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions)
                    }
                }, { key: "_setupInput", value: function() { this.$input = this.$el.find("input"), this.$input.length || (this.$input = h("<input></input>"), this.$el.append(this.$input)), this.$input.addClass("input") } }, { key: "_setupLabel", value: function() { this.$label = this.$el.find("label"), this.$label.length && this.$label.setAttribute("for", this.$input.attr("id")) } }, { key: "_setPlaceholder", value: function() { void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? h(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && h(this.$input).prop("placeholder", this.options.secondaryPlaceholder) } }, {
                    key: "_isValid",
                    value: function(t) {
                        if (t.hasOwnProperty("tag") && "" !== t.tag) {
                            for (var e = !1, i = 0; i < this.chipsData.length; i++)
                                if (this.chipsData[i].tag === t.tag) { e = !0; break }
                            return !e
                        }
                        return !1
                    }
                }, {
                    key: "addChip",
                    value: function(t) {
                        if (this._isValid(t) && !(this.chipsData.length >= this.options.limit)) {
                            var e = this._renderChip(t);
                            this.$chips.add(e), this.chipsData.push(t), h(this.$input).before(e), this._setPlaceholder(), "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, e)
                        }
                    }
                }, {
                    key: "deleteChip",
                    value: function(t) {
                        var e = this.$chips.eq(t);
                        this.$chips.eq(t).remove(), this.$chips = this.$chips.filter(function(t) { return 0 <= h(t).index() }), this.chipsData.splice(t, 1), this._setPlaceholder(), "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, e[0])
                    }
                }, {
                    key: "selectChip",
                    value: function(t) {
                        var e = this.$chips.eq(t);
                        (this._selectedChip = e)[0].focus(), "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0])
                    }
                }], [{ key: "init", value: function(t, e) { return _get(l.__proto__ || Object.getPrototypeOf(l), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Chips } }, {
                    key: "_handleChipsKeydown",
                    value: function(t) {
                        l._keydown = !0;
                        var e = h(t.target).closest(".chips"),
                            i = t.target && e.length;
                        if (!h(t.target).is("input, textarea") && i) {
                            var n = e[0].M_Chips;
                            if (8 === t.keyCode || 46 === t.keyCode) {
                                t.preventDefault();
                                var s = n.chipsData.length;
                                if (n._selectedChip) {
                                    var o = n._selectedChip.index();
                                    n.deleteChip(o), n._selectedChip = null, s = Math.max(o - 1, 0)
                                }
                                n.chipsData.length && n.selectChip(s)
                            } else if (37 === t.keyCode) {
                                if (n._selectedChip) {
                                    var a = n._selectedChip.index() - 1;
                                    if (a < 0) return;
                                    n.selectChip(a)
                                }
                            } else if (39 === t.keyCode && n._selectedChip) {
                                var r = n._selectedChip.index() + 1;
                                r >= n.chipsData.length ? n.$input[0].focus() : n.selectChip(r)
                            }
                        }
                    }
                }, { key: "_handleChipsKeyup", value: function(t) { l._keydown = !1 } }, { key: "_handleChipsBlur", value: function(t) { l._keydown || (h(t.target).closest(".chips")[0].M_Chips._selectedChip = null) } }, { key: "defaults", get: function() { return e } }]), l
            }();
        t._keydown = !1, M.Chips = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "chips", "M_Chips"), h(document).ready(function() {
            h(document.body).on("click", ".chip .close", function() {
                var t = h(this).closest(".chips");
                t.length && t[0].M_Chips || h(this).closest(".chip").remove()
            })
        })
    }(cash),
    function(s) {
        "use strict";
        var e = { top: 0, bottom: 1 / 0, offset: 0, onPositionChange: null },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_Pushpin = i).options = s.extend({}, n.defaults, e), i.originalOffset = i.el.offsetTop, n._pushpins.push(i), i._setupEventHandlers(), i._updatePosition(), i }
                return _inherits(n, Component), _createClass(n, [{
                    key: "destroy",
                    value: function() {
                        this.el.style.top = null, this._removePinClasses(), this._removeEventHandlers();
                        var t = n._pushpins.indexOf(this);
                        n._pushpins.splice(t, 1)
                    }
                }, { key: "_setupEventHandlers", value: function() { document.addEventListener("scroll", n._updateElements) } }, { key: "_removeEventHandlers", value: function() { document.removeEventListener("scroll", n._updateElements) } }, {
                    key: "_updatePosition",
                    value: function() {
                        var t = M.getDocumentScrollTop() + this.options.offset;
                        this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(), this.el.style.top = this.options.offset + "px", this.el.classList.add("pinned"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")), t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(), this.el.style.top = 0, this.el.classList.add("pin-top"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")), t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(), this.el.classList.add("pin-bottom"), this.el.style.top = this.options.bottom - this.originalOffset + "px", "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"))
                    }
                }, { key: "_removePinClasses", value: function() { this.el.classList.remove("pin-top"), this.el.classList.remove("pinned"), this.el.classList.remove("pin-bottom") } }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Pushpin } }, { key: "_updateElements", value: function() { for (var t in n._pushpins) { n._pushpins[t]._updatePosition() } } }, { key: "defaults", get: function() { return e } }]), n
            }();
        t._pushpins = [], M.Pushpin = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "pushpin", "M_Pushpin")
    }(cash),
    function(r, s) {
        "use strict";
        var e = { direction: "top", hoverEnabled: !0, toolbarEnabled: !1 };
        r.fn.reverse = [].reverse;
        var t = function(t) {
            function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_FloatingActionButton = i).options = r.extend({}, n.defaults, e), i.isOpen = !1, i.$anchor = i.$el.children("a").first(), i.$menu = i.$el.children("ul").first(), i.$floatingBtns = i.$el.find("ul .btn-floating"), i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(), i.offsetY = 0, i.offsetX = 0, i.$el.addClass("direction-" + i.options.direction), "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40, i._setupEventHandlers(), i }
            return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this._removeEventHandlers(), this.el.M_FloatingActionButton = void 0 } }, { key: "_setupEventHandlers", value: function() { this._handleFABClickBound = this._handleFABClick.bind(this), this._handleOpenBound = this.open.bind(this), this._handleCloseBound = this.close.bind(this), this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound), this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound) } }, { key: "_removeEventHandlers", value: function() { this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound), this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound) } }, { key: "_handleFABClick", value: function() { this.isOpen ? this.close() : this.open() } }, { key: "_handleDocumentClick", value: function(t) { r(t.target).closest(this.$menu).length || this.close() } }, { key: "open", value: function() { this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(), this.isOpen = !0) } }, { key: "close", value: function() { this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), this._animateOutToolbar()) : this._animateOutFAB(), this.isOpen = !1) } }, {
                key: "_animateInFAB",
                value: function() {
                    var e = this;
                    this.$el.addClass("active");
                    var i = 0;
                    this.$floatingBtnsReverse.each(function(t) { s({ targets: t, opacity: 1, scale: [.4, 1], translateY: [e.offsetY, 0], translateX: [e.offsetX, 0], duration: 275, delay: i, easing: "easeInOutQuad" }), i += 40 })
                }
            }, {
                key: "_animateOutFAB",
                value: function() {
                    var e = this;
                    this.$floatingBtnsReverse.each(function(t) { s.remove(t), s({ targets: t, opacity: 0, scale: .4, translateY: e.offsetY, translateX: e.offsetX, duration: 175, easing: "easeOutQuad", complete: function() { e.$el.removeClass("active") } }) })
                }
            }, {
                key: "_animateInToolbar",
                value: function() {
                    var t, e = this,
                        i = window.innerWidth,
                        n = window.innerHeight,
                        s = this.el.getBoundingClientRect(),
                        o = r('<div class="fab-backdrop"></div>'),
                        a = this.$anchor.css("background-color");
                    this.$anchor.append(o), this.offsetX = s.left - i / 2 + s.width / 2, this.offsetY = n - s.bottom, t = i / o[0].clientWidth, this.btnBottom = s.bottom, this.btnLeft = s.left, this.btnWidth = s.width, this.$el.addClass("active"), this.$el.css({ "text-align": "center", width: "100%", bottom: 0, left: 0, transform: "translateX(" + this.offsetX + "px)", transition: "none" }), this.$anchor.css({ transform: "translateY(" + -this.offsetY + "px)", transition: "none" }), o.css({ "background-color": a }), setTimeout(function() { e.$el.css({ transform: "", transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s" }), e.$anchor.css({ overflow: "visible", transform: "", transition: "transform .2s" }), setTimeout(function() { e.$el.css({ overflow: "hidden", "background-color": a }), o.css({ transform: "scale(" + t + ")", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)" }), e.$menu.children("li").children("a").css({ opacity: 1 }), e._handleDocumentClickBound = e._handleDocumentClick.bind(e), window.addEventListener("scroll", e._handleCloseBound, !0), document.body.addEventListener("click", e._handleDocumentClickBound, !0) }, 100) }, 0)
                }
            }, {
                key: "_animateOutToolbar",
                value: function() {
                    var t = this,
                        e = window.innerWidth,
                        i = window.innerHeight,
                        n = this.$el.find(".fab-backdrop"),
                        s = this.$anchor.css("background-color");
                    this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2, this.offsetY = i - this.btnBottom, this.$el.removeClass("active"), this.$el.css({ "background-color": "transparent", transition: "none" }), this.$anchor.css({ transition: "none" }), n.css({ transform: "scale(0)", "background-color": s }), this.$menu.children("li").children("a").css({ opacity: "" }), setTimeout(function() { n.remove(), t.$el.css({ "text-align": "", width: "", bottom: "", left: "", overflow: "", "background-color": "", transform: "translate3d(" + -t.offsetX + "px,0,0)" }), t.$anchor.css({ overflow: "", transform: "translate3d(0," + t.offsetY + "px,0)" }), setTimeout(function() { t.$el.css({ transform: "translate3d(0,0,0)", transition: "transform .2s" }), t.$anchor.css({ transform: "translate3d(0,0,0)", transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)" }) }, 20) }, 200)
                }
            }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_FloatingActionButton } }, { key: "defaults", get: function() { return e } }]), n
        }();
        M.FloatingActionButton = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "floatingActionButton", "M_FloatingActionButton")
    }(cash, M.anime),
    function(g) {
        "use strict";
        var e = { autoClose: !1, format: "mmm dd, yyyy", parse: null, defaultDate: null, setDefaultDate: !1, disableWeekends: !1, disableDayFn: null, firstDay: 0, minDate: null, maxDate: null, yearRange: 10, minYear: 0, maxYear: 9999, minMonth: void 0, maxMonth: void 0, startRange: null, endRange: null, isRTL: !1, showMonthAfterYear: !1, showDaysInNextAndPreviousMonths: !1, container: null, showClearBtn: !1, i18n: { cancel: "Cancel", clear: "Clear", done: "Ok", previousMonth: "‹", nextMonth: "›", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"] }, events: [], onSelect: null, onOpen: null, onClose: null, onDraw: null },
            t = function(t) {
                function B(t, e) {
                    _classCallCheck(this, B);
                    var i = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, B, t, e));
                    (i.el.M_Datepicker = i).options = g.extend({}, B.defaults, e), e && e.hasOwnProperty("i18n") && "object" == typeof e.i18n && (i.options.i18n = g.extend({}, B.defaults.i18n, e.i18n)), i.options.minDate && i.options.minDate.setHours(0, 0, 0, 0), i.options.maxDate && i.options.maxDate.setHours(0, 0, 0, 0), i.id = M.guid(), i._setupVariables(), i._insertHTMLIntoDOM(), i._setupModal(), i._setupEventHandlers(), i.options.defaultDate || (i.options.defaultDate = new Date(Date.parse(i.el.value)));
                    var n = i.options.defaultDate;
                    return B._isDate(n) ? i.options.setDefaultDate ? (i.setDate(n, !0), i.setInputValue()) : i.gotoDate(n) : i.gotoDate(new Date), i.isOpen = !1, i
                }
                return _inherits(B, Component), _createClass(B, [{ key: "destroy", value: function() { this._removeEventHandlers(), this.modal.destroy(), g(this.modalEl).remove(), this.destroySelects(), this.el.M_Datepicker = void 0 } }, {
                    key: "destroySelects",
                    value: function() {
                        var t = this.calendarEl.querySelector(".orig-select-year");
                        t && M.FormSelect.getInstance(t).destroy();
                        var e = this.calendarEl.querySelector(".orig-select-month");
                        e && M.FormSelect.getInstance(e).destroy()
                    }
                }, { key: "_insertHTMLIntoDOM", value: function() { this.options.showClearBtn && (g(this.clearBtn).css({ visibility: "" }), this.clearBtn.innerHTML = this.options.i18n.clear), this.doneBtn.innerHTML = this.options.i18n.done, this.cancelBtn.innerHTML = this.options.i18n.cancel, this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el) } }, {
                    key: "_setupModal",
                    value: function() {
                        var t = this;
                        this.modalEl.id = "modal-" + this.id, this.modal = M.Modal.init(this.modalEl, { onCloseEnd: function() { t.isOpen = !1 } })
                    }
                }, { key: "toString", value: function(t) { var e = this; return t = t || this.options.format, B._isDate(this.date) ? t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t) { return e.formats[t] ? e.formats[t]() : t }).join("") : "" } }, {
                    key: "setDate",
                    value: function(t, e) {
                        if (!t) return this.date = null, this._renderDateDisplay(), this.draw();
                        if ("string" == typeof t && (t = new Date(Date.parse(t))), B._isDate(t)) {
                            var i = this.options.minDate,
                                n = this.options.maxDate;
                            B._isDate(i) && t < i ? t = i : B._isDate(n) && n < t && (t = n), this.date = new Date(t.getTime()), this._renderDateDisplay(), B._setToStartOfDay(this.date), this.gotoDate(this.date), e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
                        }
                    }
                }, { key: "setInputValue", value: function() { this.el.value = this.toString(), this.$el.trigger("change", { firedBy: this }) } }, {
                    key: "_renderDateDisplay",
                    value: function() {
                        var t = B._isDate(this.date) ? this.date : new Date,
                            e = this.options.i18n,
                            i = e.weekdaysShort[t.getDay()],
                            n = e.monthsShort[t.getMonth()],
                            s = t.getDate();
                        this.yearTextEl.innerHTML = t.getFullYear(), this.dateTextEl.innerHTML = i + ", " + n + " " + s
                    }
                }, {
                    key: "gotoDate",
                    value: function(t) {
                        var e = !0;
                        if (B._isDate(t)) {
                            if (this.calendars) {
                                var i = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                                    n = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                                    s = t.getTime();
                                n.setMonth(n.getMonth() + 1), n.setDate(n.getDate() - 1), e = s < i.getTime() || n.getTime() < s
                            }
                            e && (this.calendars = [{ month: t.getMonth(), year: t.getFullYear() }]), this.adjustCalendars()
                        }
                    }
                }, { key: "adjustCalendars", value: function() { this.calendars[0] = this.adjustCalendar(this.calendars[0]), this.draw() } }, { key: "adjustCalendar", value: function(t) { return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12), t.month += 12), 11 < t.month && (t.year += Math.floor(Math.abs(t.month) / 12), t.month -= 12), t } }, { key: "nextMonth", value: function() { this.calendars[0].month++, this.adjustCalendars() } }, { key: "prevMonth", value: function() { this.calendars[0].month--, this.adjustCalendars() } }, {
                    key: "render",
                    value: function(t, e, i) {
                        var n = this.options,
                            s = new Date,
                            o = B._getDaysInMonth(t, e),
                            a = new Date(t, e, 1).getDay(),
                            r = [],
                            l = [];
                        B._setToStartOfDay(s), 0 < n.firstDay && (a -= n.firstDay) < 0 && (a += 7);
                        for (var h = 0 === e ? 11 : e - 1, d = 11 === e ? 0 : e + 1, u = 0 === e ? t - 1 : t, c = 11 === e ? t + 1 : t, p = B._getDaysInMonth(u, h), v = o + a, f = v; 7 < f;) f -= 7;
                        v += 7 - f;
                        for (var m = !1, g = 0, _ = 0; g < v; g++) {
                            var y = new Date(t, e, g - a + 1),
                                k = !!B._isDate(this.date) && B._compareDates(y, this.date),
                                b = B._compareDates(y, s),
                                w = -1 !== n.events.indexOf(y.toDateString()),
                                C = g < a || o + a <= g,
                                E = g - a + 1,
                                M = e,
                                O = t,
                                x = n.startRange && B._compareDates(n.startRange, y),
                                L = n.endRange && B._compareDates(n.endRange, y),
                                T = n.startRange && n.endRange && n.startRange < y && y < n.endRange;
                            C && (g < a ? (E = p + E, M = h, O = u) : (E -= o, M = d, O = c));
                            var $ = { day: E, month: M, year: O, hasEvent: w, isSelected: k, isToday: b, isDisabled: n.minDate && y < n.minDate || n.maxDate && y > n.maxDate || n.disableWeekends && B._isWeekend(y) || n.disableDayFn && n.disableDayFn(y), isEmpty: C, isStartRange: x, isEndRange: L, isInRange: T, showDaysInNextAndPreviousMonths: n.showDaysInNextAndPreviousMonths };
                            l.push(this.renderDay($)), 7 == ++_ && (r.push(this.renderRow(l, n.isRTL, m)), _ = 0, m = !(l = []))
                        }
                        return this.renderTable(n, r, i)
                    }
                }, {
                    key: "renderDay",
                    value: function(t) {
                        var e = [],
                            i = "false";
                        if (t.isEmpty) {
                            if (!t.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
                            e.push("is-outside-current-month"), e.push("is-selection-disabled")
                        }
                        return t.isDisabled && e.push("is-disabled"), t.isToday && e.push("is-today"), t.isSelected && (e.push("is-selected"), i = "true"), t.hasEvent && e.push("has-event"), t.isInRange && e.push("is-inrange"), t.isStartRange && e.push("is-startrange"), t.isEndRange && e.push("is-endrange"), '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + i + '"><button class="datepicker-day-button" type="button" data-year="' + t.year + '" data-month="' + t.month + '" data-day="' + t.day + '">' + t.day + "</button></td>"
                    }
                }, { key: "renderRow", value: function(t, e, i) { return '<tr class="datepicker-row' + (i ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>" } }, { key: "renderTable", value: function(t, e, i) { return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>" } }, {
                    key: "renderHead",
                    value: function(t) {
                        var e = void 0,
                            i = [];
                        for (e = 0; e < 7; e++) i.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
                        return "<thead><tr>" + (t.isRTL ? i.reverse() : i).join("") + "</tr></thead>"
                    }
                }, { key: "renderBody", value: function(t) { return "<tbody>" + t.join("") + "</tbody>" } }, {
                    key: "renderTitle",
                    value: function(t, e, i, n, s, o) {
                        var a, r, l = void 0,
                            h = void 0,
                            d = void 0,
                            u = this.options,
                            c = i === u.minYear,
                            p = i === u.maxYear,
                            v = '<div id="' + o + '" class="datepicker-controls" role="heading" aria-live="assertive">',
                            f = !0,
                            m = !0;
                        for (d = [], l = 0; l < 12; l++) d.push('<option value="' + (i === s ? l - e : 12 + l - e) + '"' + (l === n ? ' selected="selected"' : "") + (c && l < u.minMonth || p && l > u.maxMonth ? 'disabled="disabled"' : "") + ">" + u.i18n.months[l] + "</option>");
                        for (a = '<select class="datepicker-select orig-select-month" tabindex="-1">' + d.join("") + "</select>", g.isArray(u.yearRange) ? (l = u.yearRange[0], h = u.yearRange[1] + 1) : (l = i - u.yearRange, h = 1 + i + u.yearRange), d = []; l < h && l <= u.maxYear; l++) l >= u.minYear && d.push('<option value="' + l + '" ' + (l === i ? 'selected="selected"' : "") + ">" + l + "</option>");
                        r = '<select class="datepicker-select orig-select-year" tabindex="-1">' + d.join("") + "</select>";
                        v += '<button class="month-prev' + (f ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>', v += '<div class="selects-container">', u.showMonthAfterYear ? v += r + a : v += a + r, v += "</div>", c && (0 === n || u.minMonth >= n) && (f = !1), p && (11 === n || u.maxMonth <= n) && (m = !1);
                        return (v += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>"
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        if (this.isOpen || t) {
                            var e, i = this.options,
                                n = i.minYear,
                                s = i.maxYear,
                                o = i.minMonth,
                                a = i.maxMonth,
                                r = "";
                            this._y <= n && (this._y = n, !isNaN(o) && this._m < o && (this._m = o)), this._y >= s && (this._y = s, !isNaN(a) && this._m > a && (this._m = a)), e = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                            for (var l = 0; l < 1; l++) this._renderDateDisplay(), r += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, e) + this.render(this.calendars[l].year, this.calendars[l].month, e);
                            this.destroySelects(), this.calendarEl.innerHTML = r;
                            var h = this.calendarEl.querySelector(".orig-select-year"),
                                d = this.calendarEl.querySelector(".orig-select-month");
                            M.FormSelect.init(h, { classes: "select-year", dropdownOptions: { container: document.body, constrainWidth: !1 } }), M.FormSelect.init(d, { classes: "select-month", dropdownOptions: { container: document.body, constrainWidth: !1 } }), h.addEventListener("change", this._handleYearChange.bind(this)), d.addEventListener("change", this._handleMonthChange.bind(this)), "function" == typeof this.options.onDraw && this.options.onDraw(this)
                        }
                    }
                }, { key: "_setupEventHandlers", value: function() { this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleInputChangeBound = this._handleInputChange.bind(this), this._handleCalendarClickBound = this._handleCalendarClick.bind(this), this._finishSelectionBound = this._finishSelection.bind(this), this._handleMonthChange = this._handleMonthChange.bind(this), this._closeBound = this.close.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.el.addEventListener("change", this._handleInputChangeBound), this.calendarEl.addEventListener("click", this._handleCalendarClickBound), this.doneBtn.addEventListener("click", this._finishSelectionBound), this.cancelBtn.addEventListener("click", this._closeBound), this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this), this.clearBtn.addEventListener("click", this._handleClearClickBound)) } }, {
                    key: "_setupVariables",
                    value: function() {
                        var e = this;
                        this.$modalEl = g(B._template), this.modalEl = this.$modalEl[0], this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"), this.yearTextEl = this.modalEl.querySelector(".year-text"), this.dateTextEl = this.modalEl.querySelector(".date-text"), this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")), this.doneBtn = this.modalEl.querySelector(".datepicker-done"), this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"), this.formats = { d: function() { return e.date.getDate() }, dd: function() { var t = e.date.getDate(); return (t < 10 ? "0" : "") + t }, ddd: function() { return e.options.i18n.weekdaysShort[e.date.getDay()] }, dddd: function() { return e.options.i18n.weekdays[e.date.getDay()] }, m: function() { return e.date.getMonth() + 1 }, mm: function() { var t = e.date.getMonth() + 1; return (t < 10 ? "0" : "") + t }, mmm: function() { return e.options.i18n.monthsShort[e.date.getMonth()] }, mmmm: function() { return e.options.i18n.months[e.date.getMonth()] }, yy: function() { return ("" + e.date.getFullYear()).slice(2) }, yyyy: function() { return e.date.getFullYear() } }
                    }
                }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound), this.el.removeEventListener("change", this._handleInputChangeBound), this.calendarEl.removeEventListener("click", this._handleCalendarClickBound) } }, { key: "_handleInputClick", value: function() { this.open() } }, { key: "_handleInputKeydown", value: function(t) { t.which === M.keys.ENTER && (t.preventDefault(), this.open()) } }, {
                    key: "_handleCalendarClick",
                    value: function(t) {
                        if (this.isOpen) {
                            var e = g(t.target);
                            e.hasClass("is-disabled") || (!e.hasClass("datepicker-day-button") || e.hasClass("is-empty") || e.parent().hasClass("is-disabled") ? e.closest(".month-prev").length ? this.prevMonth() : e.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t.target.getAttribute("data-year"), t.target.getAttribute("data-month"), t.target.getAttribute("data-day"))), this.options.autoClose && this._finishSelection()))
                        }
                    }
                }, { key: "_handleClearClick", value: function() { this.date = null, this.setInputValue(), this.close() } }, { key: "_handleMonthChange", value: function(t) { this.gotoMonth(t.target.value) } }, { key: "_handleYearChange", value: function(t) { this.gotoYear(t.target.value) } }, { key: "gotoMonth", value: function(t) { isNaN(t) || (this.calendars[0].month = parseInt(t, 10), this.adjustCalendars()) } }, { key: "gotoYear", value: function(t) { isNaN(t) || (this.calendars[0].year = parseInt(t, 10), this.adjustCalendars()) } }, {
                    key: "_handleInputChange",
                    value: function(t) {
                        var e = void 0;
                        t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)), B._isDate(e) && this.setDate(e))
                    }
                }, { key: "renderDayName", value: function(t, e, i) { for (e += t.firstDay; 7 <= e;) e -= 7; return i ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e] } }, { key: "_finishSelection", value: function() { this.setInputValue(), this.close() } }, { key: "open", value: function() { if (!this.isOpen) return this.isOpen = !0, "function" == typeof this.options.onOpen && this.options.onOpen.call(this), this.draw(), this.modal.open(), this } }, { key: "close", value: function() { if (this.isOpen) return this.isOpen = !1, "function" == typeof this.options.onClose && this.options.onClose.call(this), this.modal.close(), this } }], [{ key: "init", value: function(t, e) { return _get(B.__proto__ || Object.getPrototypeOf(B), "init", this).call(this, this, t, e) } }, { key: "_isDate", value: function(t) { return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime()) } }, { key: "_isWeekend", value: function(t) { var e = t.getDay(); return 0 === e || 6 === e } }, { key: "_setToStartOfDay", value: function(t) { B._isDate(t) && t.setHours(0, 0, 0, 0) } }, { key: "_getDaysInMonth", value: function(t, e) { return [31, B._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e] } }, { key: "_isLeapYear", value: function(t) { return t % 4 == 0 && t % 100 != 0 || t % 400 == 0 } }, { key: "_compareDates", value: function(t, e) { return t.getTime() === e.getTime() } }, { key: "_setToStartOfDay", value: function(t) { B._isDate(t) && t.setHours(0, 0, 0, 0) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Datepicker } }, { key: "defaults", get: function() { return e } }]), B
            }();
        t._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""), M.Datepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "datepicker", "M_Datepicker")
    }(cash),
    function(h) {
        "use strict";
        var e = { dialRadius: 135, outerRadius: 105, innerRadius: 70, tickRadius: 20, duration: 350, container: null, defaultTime: "now", fromNow: 0, showClearBtn: !1, i18n: { cancel: "Cancel", clear: "Clear", done: "Ok" }, autoClose: !1, twelveHour: !0, vibrate: !0, onOpenStart: null, onOpenEnd: null, onCloseStart: null, onCloseEnd: null, onSelect: null },
            t = function(t) {
                function f(t, e) { _classCallCheck(this, f); var i = _possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, f, t, e)); return (i.el.M_Timepicker = i).options = h.extend({}, f.defaults, e), i.id = M.guid(), i._insertHTMLIntoDOM(), i._setupModal(), i._setupVariables(), i._setupEventHandlers(), i._clockSetup(), i._pickerSetup(), i }
                return _inherits(f, Component), _createClass(f, [{ key: "destroy", value: function() { this._removeEventHandlers(), this.modal.destroy(), h(this.modalEl).remove(), this.el.M_Timepicker = void 0 } }, { key: "_setupEventHandlers", value: function() { this._handleInputKeydownBound = this._handleInputKeydown.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), this._handleClockClickStartBound = this._handleClockClickStart.bind(this), this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this), this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this), this.el.addEventListener("click", this._handleInputClickBound), this.el.addEventListener("keydown", this._handleInputKeydownBound), this.plate.addEventListener("mousedown", this._handleClockClickStartBound), this.plate.addEventListener("touchstart", this._handleClockClickStartBound), h(this.spanHours).on("click", this.showView.bind(this, "hours")), h(this.spanMinutes).on("click", this.showView.bind(this, "minutes")) } }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("click", this._handleInputClickBound), this.el.removeEventListener("keydown", this._handleInputKeydownBound) } }, { key: "_handleInputClick", value: function() { this.open() } }, { key: "_handleInputKeydown", value: function(t) { t.which === M.keys.ENTER && (t.preventDefault(), this.open()) } }, {
                    key: "_handleClockClickStart",
                    value: function(t) {
                        t.preventDefault();
                        var e = this.plate.getBoundingClientRect(),
                            i = e.left,
                            n = e.top;
                        this.x0 = i + this.options.dialRadius, this.y0 = n + this.options.dialRadius, this.moved = !1;
                        var s = f._Pos(t);
                        this.dx = s.x - this.x0, this.dy = s.y - this.y0, this.setHand(this.dx, this.dy, !1), document.addEventListener("mousemove", this._handleDocumentClickMoveBound), document.addEventListener("touchmove", this._handleDocumentClickMoveBound), document.addEventListener("mouseup", this._handleDocumentClickEndBound), document.addEventListener("touchend", this._handleDocumentClickEndBound)
                    }
                }, {
                    key: "_handleDocumentClickMove",
                    value: function(t) {
                        t.preventDefault();
                        var e = f._Pos(t),
                            i = e.x - this.x0,
                            n = e.y - this.y0;
                        this.moved = !0, this.setHand(i, n, !1, !0)
                    }
                }, {
                    key: "_handleDocumentClickEnd",
                    value: function(t) {
                        var e = this;
                        t.preventDefault(), document.removeEventListener("mouseup", this._handleDocumentClickEndBound), document.removeEventListener("touchend", this._handleDocumentClickEndBound);
                        var i = f._Pos(t),
                            n = i.x - this.x0,
                            s = i.y - this.y0;
                        this.moved && n === this.dx && s === this.dy && this.setHand(n, s), "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (h(this.minutesView).addClass("timepicker-dial-out"), setTimeout(function() { e.done() }, this.options.duration / 2)), "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes), document.removeEventListener("mousemove", this._handleDocumentClickMoveBound), document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
                    }
                }, {
                    key: "_insertHTMLIntoDOM",
                    value: function() {
                        this.$modalEl = h(f._template), this.modalEl = this.$modalEl[0], this.modalEl.id = "modal-" + this.id;
                        var t = document.querySelector(this.options.container);
                        this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el)
                    }
                }, {
                    key: "_setupModal",
                    value: function() {
                        var t = this;
                        this.modal = M.Modal.init(this.modalEl, { onOpenStart: this.options.onOpenStart, onOpenEnd: this.options.onOpenEnd, onCloseStart: this.options.onCloseStart, onCloseEnd: function() { "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t), t.isOpen = !1 } })
                    }
                }, { key: "_setupVariables", value: function() { this.currentView = "hours", this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, this._canvas = this.modalEl.querySelector(".timepicker-canvas"), this.plate = this.modalEl.querySelector(".timepicker-plate"), this.hoursView = this.modalEl.querySelector(".timepicker-hours"), this.minutesView = this.modalEl.querySelector(".timepicker-minutes"), this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"), this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"), this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"), this.footer = this.modalEl.querySelector(".timepicker-footer"), this.amOrPm = "PM" } }, {
                    key: "_pickerSetup",
                    value: function() {
                        var t = h('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
                        this.options.showClearBtn && t.css({ visibility: "" });
                        var e = h('<div class="confirmation-btns"></div>');
                        h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(e).on("click", this.close.bind(this)), h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(e).on("click", this.done.bind(this)), e.appendTo(this.footer)
                    }
                }, { key: "_clockSetup", value: function() { this.options.twelveHour && (this.$amBtn = h('<div class="am-btn">AM</div>'), this.$pmBtn = h('<div class="pm-btn">PM</div>'), this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm), this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)), this._buildHoursView(), this._buildMinutesView(), this._buildSVGClock() } }, {
                    key: "_buildSVGClock",
                    value: function() {
                        var t = this.options.dialRadius,
                            e = this.options.tickRadius,
                            i = 2 * t,
                            n = f._createSVGEl("svg");
                        n.setAttribute("class", "timepicker-svg"), n.setAttribute("width", i), n.setAttribute("height", i);
                        var s = f._createSVGEl("g");
                        s.setAttribute("transform", "translate(" + t + "," + t + ")");
                        var o = f._createSVGEl("circle");
                        o.setAttribute("class", "timepicker-canvas-bearing"), o.setAttribute("cx", 0), o.setAttribute("cy", 0), o.setAttribute("r", 4);
                        var a = f._createSVGEl("line");
                        a.setAttribute("x1", 0), a.setAttribute("y1", 0);
                        var r = f._createSVGEl("circle");
                        r.setAttribute("class", "timepicker-canvas-bg"), r.setAttribute("r", e), s.appendChild(a), s.appendChild(r), s.appendChild(o), n.appendChild(s), this._canvas.appendChild(n), this.hand = a, this.bg = r, this.bearing = o, this.g = s
                    }
                }, {
                    key: "_buildHoursView",
                    value: function() {
                        var t = h('<div class="timepicker-tick"></div>');
                        if (this.options.twelveHour)
                            for (var e = 1; e < 13; e += 1) {
                                var i = t.clone(),
                                    n = e / 6 * Math.PI,
                                    s = this.options.outerRadius;
                                i.css({ left: this.options.dialRadius + Math.sin(n) * s - this.options.tickRadius + "px", top: this.options.dialRadius - Math.cos(n) * s - this.options.tickRadius + "px" }), i.html(0 === e ? "00" : e), this.hoursView.appendChild(i[0])
                            } else
                                for (var o = 0; o < 24; o += 1) {
                                    var a = t.clone(),
                                        r = o / 6 * Math.PI,
                                        l = 0 < o && o < 13 ? this.options.innerRadius : this.options.outerRadius;
                                    a.css({ left: this.options.dialRadius + Math.sin(r) * l - this.options.tickRadius + "px", top: this.options.dialRadius - Math.cos(r) * l - this.options.tickRadius + "px" }), a.html(0 === o ? "00" : o), this.hoursView.appendChild(a[0])
                                }
                    }
                }, {
                    key: "_buildMinutesView",
                    value: function() {
                        for (var t = h('<div class="timepicker-tick"></div>'), e = 0; e < 60; e += 5) {
                            var i = t.clone(),
                                n = e / 30 * Math.PI;
                            i.css({ left: this.options.dialRadius + Math.sin(n) * this.options.outerRadius - this.options.tickRadius + "px", top: this.options.dialRadius - Math.cos(n) * this.options.outerRadius - this.options.tickRadius + "px" }), i.html(f._addLeadingZero(e)), this.minutesView.appendChild(i[0])
                        }
                    }
                }, {
                    key: "_handleAmPmClick",
                    value: function(t) {
                        var e = h(t.target);
                        this.amOrPm = e.hasClass("am-btn") ? "AM" : "PM", this._updateAmPmView()
                    }
                }, { key: "_updateAmPmView", value: function() { this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm), this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm)) } }, {
                    key: "_updateTimeFromInput",
                    value: function() {
                        var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");
                        if (this.options.twelveHour && void 0 !== t[1] && (0 < t[1].toUpperCase().indexOf("AM") ? this.amOrPm = "AM" : this.amOrPm = "PM", t[1] = t[1].replace("AM", "").replace("PM", "")), "now" === t[0]) {
                            var e = new Date(+new Date + this.options.fromNow);
                            t = [e.getHours(), e.getMinutes()], this.options.twelveHour && (this.amOrPm = 12 <= t[0] && t[0] < 24 ? "PM" : "AM")
                        }
                        this.hours = +t[0] || 0, this.minutes = +t[1] || 0, this.spanHours.innerHTML = this.hours, this.spanMinutes.innerHTML = f._addLeadingZero(this.minutes), this._updateAmPmView()
                    }
                }, {
                    key: "showView",
                    value: function(t, e) {
                        "minutes" === t && h(this.hoursView).css("visibility");
                        var i = "hours" === t,
                            n = i ? this.hoursView : this.minutesView,
                            s = i ? this.minutesView : this.hoursView;
                        this.currentView = t, h(this.spanHours).toggleClass("text-primary", i), h(this.spanMinutes).toggleClass("text-primary", !i), s.classList.add("timepicker-dial-out"), h(n).css("visibility", "visible").removeClass("timepicker-dial-out"), this.resetClock(e), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() { h(s).css("visibility", "hidden") }, this.options.duration)
                    }
                }, {
                    key: "resetClock",
                    value: function(t) {
                        var e = this.currentView,
                            i = this[e],
                            n = "hours" === e,
                            s = i * (Math.PI / (n ? 6 : 30)),
                            o = n && 0 < i && i < 13 ? this.options.innerRadius : this.options.outerRadius,
                            a = Math.sin(s) * o,
                            r = -Math.cos(s) * o,
                            l = this;
                        t ? (h(this.canvas).addClass("timepicker-canvas-out"), setTimeout(function() { h(l.canvas).removeClass("timepicker-canvas-out"), l.setHand(a, r) }, t)) : this.setHand(a, r)
                    }
                }, {
                    key: "setHand",
                    value: function(t, e, i) {
                        var n = this,
                            s = Math.atan2(t, -e),
                            o = "hours" === this.currentView,
                            a = Math.PI / (o || i ? 6 : 30),
                            r = Math.sqrt(t * t + e * e),
                            l = o && r < (this.options.outerRadius + this.options.innerRadius) / 2,
                            h = l ? this.options.innerRadius : this.options.outerRadius;
                        this.options.twelveHour && (h = this.options.outerRadius), s < 0 && (s = 2 * Math.PI + s);
                        var d = Math.round(s / a);
                        s = d * a, this.options.twelveHour ? o ? 0 === d && (d = 12) : (i && (d *= 5), 60 === d && (d = 0)) : o ? (12 === d && (d = 0), d = l ? 0 === d ? 12 : d : 0 === d ? 0 : d + 12) : (i && (d *= 5), 60 === d && (d = 0)), this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10), this.vibrateTimer = setTimeout(function() { n.vibrateTimer = null }, 100))), this[this.currentView] = d, o ? this.spanHours.innerHTML = d : this.spanMinutes.innerHTML = f._addLeadingZero(d);
                        var u = Math.sin(s) * (h - this.options.tickRadius),
                            c = -Math.cos(s) * (h - this.options.tickRadius),
                            p = Math.sin(s) * h,
                            v = -Math.cos(s) * h;
                        this.hand.setAttribute("x2", u), this.hand.setAttribute("y2", c), this.bg.setAttribute("cx", p), this.bg.setAttribute("cy", v)
                    }
                }, { key: "open", value: function() { this.isOpen || (this.isOpen = !0, this._updateTimeFromInput(), this.showView("hours"), this.modal.open()) } }, { key: "close", value: function() { this.isOpen && (this.isOpen = !1, this.modal.close()) } }, {
                    key: "done",
                    value: function(t, e) {
                        var i = this.el.value,
                            n = e ? "" : f._addLeadingZero(this.hours) + ":" + f._addLeadingZero(this.minutes);
                        this.time = n, !e && this.options.twelveHour && (n = n + " " + this.amOrPm), (this.el.value = n) !== i && this.$el.trigger("change"), this.close(), this.el.focus()
                    }
                }, { key: "clear", value: function() { this.done(null, !0) } }], [{ key: "init", value: function(t, e) { return _get(f.__proto__ || Object.getPrototypeOf(f), "init", this).call(this, this, t, e) } }, { key: "_addLeadingZero", value: function(t) { return (t < 10 ? "0" : "") + t } }, { key: "_createSVGEl", value: function(t) { return document.createElementNS("http://www.w3.org/2000/svg", t) } }, { key: "_Pos", value: function(t) { return t.targetTouches && 1 <= t.targetTouches.length ? { x: t.targetTouches[0].clientX, y: t.targetTouches[0].clientY } : { x: t.clientX, y: t.clientY } } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Timepicker } }, { key: "defaults", get: function() { return e } }]), f
            }();
        t._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""), M.Timepicker = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "timepicker", "M_Timepicker")
    }(cash),
    function(s) {
        "use strict";
        var e = {},
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_CharacterCounter = i).options = s.extend({}, n.defaults, e), i.isInvalid = !1, i.isValidLength = !1, i._setupCounter(), i._setupEventHandlers(), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this._removeEventHandlers(), this.el.CharacterCounter = void 0, this._removeCounter() } }, { key: "_setupEventHandlers", value: function() { this._handleUpdateCounterBound = this.updateCounter.bind(this), this.el.addEventListener("focus", this._handleUpdateCounterBound, !0), this.el.addEventListener("input", this._handleUpdateCounterBound, !0) } }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0), this.el.removeEventListener("input", this._handleUpdateCounterBound, !0) } }, { key: "_setupCounter", value: function() { this.counterEl = document.createElement("span"), s(this.counterEl).addClass("character-counter").css({ float: "right", "font-size": "12px", height: 1 }), this.$el.parent().append(this.counterEl) } }, { key: "_removeCounter", value: function() { s(this.counterEl).remove() } }, {
                    key: "updateCounter",
                    value: function() {
                        var t = +this.$el.attr("data-length"),
                            e = this.el.value.length;
                        this.isValidLength = e <= t;
                        var i = e;
                        t && (i += "/" + t, this._validateInput()), s(this.counterEl).html(i)
                    }
                }, { key: "_validateInput", value: function() { this.isValidLength && this.isInvalid ? (this.isInvalid = !1, this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0, this.$el.removeClass("valid"), this.$el.addClass("invalid")) } }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_CharacterCounter } }, { key: "defaults", get: function() { return e } }]), n
            }();
        M.CharacterCounter = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "characterCounter", "M_CharacterCounter")
    }(cash),
    function(b) {
        "use strict";
        var e = { duration: 200, dist: -100, shift: 0, padding: 0, numVisible: 5, fullWidth: !1, indicators: !1, noWrap: !1, onCycleTo: null },
            t = function(t) {
                function i(t, e) {
                    _classCallCheck(this, i);
                    var n = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, e));
                    return (n.el.M_Carousel = n).options = b.extend({}, i.defaults, e), n.hasMultipleSlides = 1 < n.$el.find(".carousel-item").length, n.showIndicators = n.options.indicators && n.hasMultipleSlides, n.noWrap = n.options.noWrap || !n.hasMultipleSlides, n.pressed = !1, n.dragged = !1, n.offset = n.target = 0, n.images = [], n.itemWidth = n.$el.find(".carousel-item").first().innerWidth(), n.itemHeight = n.$el.find(".carousel-item").first().innerHeight(), n.dim = 2 * n.itemWidth + n.options.padding || 1, n._autoScrollBound = n._autoScroll.bind(n), n._trackBound = n._track.bind(n), n.options.fullWidth && (n.options.dist = 0, n._setCarouselHeight(), n.showIndicators && n.$el.find(".carousel-fixed-item").addClass("with-indicators")), n.$indicators = b('<ul class="indicators"></ul>'), n.$el.find(".carousel-item").each(function(t, e) {
                        if (n.images.push(t), n.showIndicators) {
                            var i = b('<li class="indicator-item"></li>');
                            0 === e && i[0].classList.add("active"), n.$indicators.append(i)
                        }
                    }), n.showIndicators && n.$el.append(n.$indicators), n.count = n.images.length, n.options.numVisible = Math.min(n.count, n.options.numVisible), n.xform = "transform", ["webkit", "Moz", "O", "ms"].every(function(t) { var e = t + "Transform"; return void 0 === document.body.style[e] || (n.xform = e, !1) }), n._setupEventHandlers(), n._scroll(n.offset), n
                }
                return _inherits(i, Component), _createClass(i, [{ key: "destroy", value: function() { this._removeEventHandlers(), this.el.M_Carousel = void 0 } }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var i = this;
                        this._handleCarouselTapBound = this._handleCarouselTap.bind(this), this._handleCarouselDragBound = this._handleCarouselDrag.bind(this), this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this), this._handleCarouselClickBound = this._handleCarouselClick.bind(this), void 0 !== window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound), this.el.addEventListener("touchmove", this._handleCarouselDragBound), this.el.addEventListener("touchend", this._handleCarouselReleaseBound)), this.el.addEventListener("mousedown", this._handleCarouselTapBound), this.el.addEventListener("mousemove", this._handleCarouselDragBound), this.el.addEventListener("mouseup", this._handleCarouselReleaseBound), this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.addEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.$indicators.find(".indicator-item").each(function(t, e) { t.addEventListener("click", i._handleIndicatorClickBound) }));
                        var t = M.throttle(this._handleResize, 200);
                        this._handleThrottledResizeBound = t.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var i = this;
                        void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound), this.el.removeEventListener("touchmove", this._handleCarouselDragBound), this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)), this.el.removeEventListener("mousedown", this._handleCarouselTapBound), this.el.removeEventListener("mousemove", this._handleCarouselDragBound), this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound), this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound), this.el.removeEventListener("click", this._handleCarouselClickBound), this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(t, e) { t.removeEventListener("click", i._handleIndicatorClickBound) }), window.removeEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, { key: "_handleCarouselTap", value: function(t) { "mousedown" === t.type && b(t.target).is("img") && t.preventDefault(), this.pressed = !0, this.dragged = !1, this.verticalDragged = !1, this.reference = this._xpos(t), this.referenceY = this._ypos(t), this.velocity = this.amplitude = 0, this.frame = this.offset, this.timestamp = Date.now(), clearInterval(this.ticker), this.ticker = setInterval(this._trackBound, 100) } }, {
                    key: "_handleCarouselDrag",
                    value: function(t) {
                        var e = void 0,
                            i = void 0,
                            n = void 0;
                        if (this.pressed)
                            if (e = this._xpos(t), i = this._ypos(t), n = this.reference - e, Math.abs(this.referenceY - i) < 30 && !this.verticalDragged)(2 < n || n < -2) && (this.dragged = !0, this.reference = e, this._scroll(this.offset + n));
                            else {
                                if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;
                                this.verticalDragged = !0
                            }
                        if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1
                    }
                }, { key: "_handleCarouselRelease", value: function(t) { if (this.pressed) return this.pressed = !1, clearInterval(this.ticker), this.target = this.offset, (10 < this.velocity || this.velocity < -10) && (this.amplitude = .9 * this.velocity, this.target = this.offset + this.amplitude), this.target = Math.round(this.target / this.dim) * this.dim, this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)), this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound), this.dragged && (t.preventDefault(), t.stopPropagation()), !1 } }, {
                    key: "_handleCarouselClick",
                    value: function(t) {
                        if (this.dragged) return t.preventDefault(), t.stopPropagation(), !1;
                        if (!this.options.fullWidth) {
                            var e = b(t.target).closest(".carousel-item").index();
                            0 !== this._wrap(this.center) - e && (t.preventDefault(), t.stopPropagation()), this._cycleTo(e)
                        }
                    }
                }, {
                    key: "_handleIndicatorClick",
                    value: function(t) {
                        t.stopPropagation();
                        var e = b(t.target).closest(".indicator-item");
                        e.length && this._cycleTo(e.index())
                    }
                }, { key: "_handleResize", value: function(t) { this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(), this.imageHeight = this.$el.find(".carousel-item.active").height(), this.dim = 2 * this.itemWidth + this.options.padding, this.offset = 2 * this.center * this.itemWidth, this.target = this.offset, this._setCarouselHeight(!0)) : this._scroll() } }, {
                    key: "_setCarouselHeight",
                    value: function(t) {
                        var i = this,
                            e = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first(),
                            n = e.find("img").first();
                        if (n.length)
                            if (n[0].complete) {
                                var s = n.height();
                                if (0 < s) this.$el.css("height", s + "px");
                                else {
                                    var o = n[0].naturalWidth,
                                        a = n[0].naturalHeight,
                                        r = this.$el.width() / o * a;
                                    this.$el.css("height", r + "px")
                                }
                            } else n.one("load", function(t, e) { i.$el.css("height", t.offsetHeight + "px") });
                        else if (!t) {
                            var l = e.height();
                            this.$el.css("height", l + "px")
                        }
                    }
                }, { key: "_xpos", value: function(t) { return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientX : t.clientX } }, { key: "_ypos", value: function(t) { return t.targetTouches && 1 <= t.targetTouches.length ? t.targetTouches[0].clientY : t.clientY } }, { key: "_wrap", value: function(t) { return t >= this.count ? t % this.count : t < 0 ? this._wrap(this.count + t % this.count) : t } }, {
                    key: "_track",
                    value: function() {
                        var t, e, i, n;
                        e = (t = Date.now()) - this.timestamp, this.timestamp = t, i = this.offset - this.frame, this.frame = this.offset, n = 1e3 * i / (1 + e), this.velocity = .8 * n + .2 * this.velocity
                    }
                }, {
                    key: "_autoScroll",
                    value: function() {
                        var t = void 0,
                            e = void 0;
                        this.amplitude && (t = Date.now() - this.timestamp, 2 < (e = this.amplitude * Math.exp(-t / this.options.duration)) || e < -2 ? (this._scroll(this.target - e), requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
                    }
                }, {
                    key: "_scroll",
                    value: function(t) {
                        var e = this;
                        this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"), null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout), this.scrollingTimeout = window.setTimeout(function() { e.$el.removeClass("scrolling") }, this.options.duration);
                        var i, n, s, o, a = void 0,
                            r = void 0,
                            l = void 0,
                            h = void 0,
                            d = void 0,
                            u = void 0,
                            c = this.center,
                            p = 1 / this.options.numVisible;
                        if (this.offset = "number" == typeof t ? t : this.offset, this.center = Math.floor((this.offset + this.dim / 2) / this.dim), o = -(s = (n = this.offset - this.center * this.dim) < 0 ? 1 : -1) * n * 2 / this.dim, i = this.count >> 1, this.options.fullWidth ? (l = "translateX(0)", u = 1) : (l = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ", l += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)", u = 1 - p * o), this.showIndicators) {
                            var v = this.center % this.count,
                                f = this.$indicators.find(".indicator-item.active");
                            f.index() !== v && (f.removeClass("active"), this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"))
                        }
                        if (!this.noWrap || 0 <= this.center && this.center < this.count) {
                            r = this.images[this._wrap(this.center)], b(r).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"), r.classList.add("active"));
                            var m = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o * a + "px) translateZ(" + this.options.dist * o + "px)";
                            this._updateItemStyle(r, u, 0, m)
                        }
                        for (a = 1; a <= i; ++a) {
                            if (this.options.fullWidth ? (h = this.options.dist, d = a === i && n < 0 ? 1 - o : 1) : (h = this.options.dist * (2 * a + o * s), d = 1 - p * (2 * a + o * s)), !this.noWrap || this.center + a < this.count) {
                                r = this.images[this._wrap(this.center + a)];
                                var g = l + " translateX(" + (this.options.shift + (this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";
                                this._updateItemStyle(r, d, -a, g)
                            }
                            if (this.options.fullWidth ? (h = this.options.dist, d = a === i && 0 < n ? 1 - o : 1) : (h = this.options.dist * (2 * a - o * s), d = 1 - p * (2 * a - o * s)), !this.noWrap || 0 <= this.center - a) {
                                r = this.images[this._wrap(this.center - a)];
                                var _ = l + " translateX(" + (-this.options.shift + (-this.dim * a - n) / 2) + "px) translateZ(" + h + "px)";
                                this._updateItemStyle(r, d, -a, _)
                            }
                        }
                        if (!this.noWrap || 0 <= this.center && this.center < this.count) {
                            r = this.images[this._wrap(this.center)];
                            var y = l + " translateX(" + -n / 2 + "px) translateX(" + s * this.options.shift * o + "px) translateZ(" + this.options.dist * o + "px)";
                            this._updateItemStyle(r, u, 0, y)
                        }
                        var k = this.$el.find(".carousel-item").eq(this._wrap(this.center));
                        c !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, k[0], this.dragged), "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, k[0], this.dragged), this.oneTimeCallback = null)
                    }
                }, { key: "_updateItemStyle", value: function(t, e, i, n) { t.style[this.xform] = n, t.style.zIndex = i, t.style.opacity = e, t.style.visibility = "visible" } }, {
                    key: "_cycleTo",
                    value: function(t, e) {
                        var i = this.center % this.count - t;
                        this.noWrap || (i < 0 ? Math.abs(i + this.count) < Math.abs(i) && (i += this.count) : 0 < i && Math.abs(i - this.count) < i && (i -= this.count)), this.target = this.dim * Math.round(this.offset / this.dim), i < 0 ? this.target += this.dim * Math.abs(i) : 0 < i && (this.target -= this.dim * i), "function" == typeof e && (this.oneTimeCallback = e), this.offset !== this.target && (this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound))
                    }
                }, {
                    key: "next",
                    value: function(t) {
                        (void 0 === t || isNaN(t)) && (t = 1);
                        var e = this.center + t;
                        if (e >= this.count || e < 0) {
                            if (this.noWrap) return;
                            e = this._wrap(e)
                        }
                        this._cycleTo(e)
                    }
                }, {
                    key: "prev",
                    value: function(t) {
                        (void 0 === t || isNaN(t)) && (t = 1);
                        var e = this.center - t;
                        if (e >= this.count || e < 0) {
                            if (this.noWrap) return;
                            e = this._wrap(e)
                        }
                        this._cycleTo(e)
                    }
                }, {
                    key: "set",
                    value: function(t, e) {
                        if ((void 0 === t || isNaN(t)) && (t = 0), t > this.count || t < 0) {
                            if (this.noWrap) return;
                            t = this._wrap(t)
                        }
                        this._cycleTo(t, e)
                    }
                }], [{ key: "init", value: function(t, e) { return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Carousel } }, { key: "defaults", get: function() { return e } }]), i
            }();
        M.Carousel = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "carousel", "M_Carousel")
    }(cash),
    function(S) {
        "use strict";
        var e = { onOpen: void 0, onClose: void 0 },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_TapTarget = i).options = S.extend({}, n.defaults, e), i.isOpen = !1, i.$origin = S("#" + i.$el.attr("data-target")), i._setup(), i._calculatePositioning(), i._setupEventHandlers(), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this._removeEventHandlers(), this.el.TapTarget = void 0 } }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleDocumentClickBound = this._handleDocumentClick.bind(this), this._handleTargetClickBound = this._handleTargetClick.bind(this), this._handleOriginClickBound = this._handleOriginClick.bind(this), this.el.addEventListener("click", this._handleTargetClickBound), this.originEl.addEventListener("click", this._handleOriginClickBound);
                        var t = M.throttle(this._handleResize, 200);
                        this._handleThrottledResizeBound = t.bind(this), window.addEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("click", this._handleTargetClickBound), this.originEl.removeEventListener("click", this._handleOriginClickBound), window.removeEventListener("resize", this._handleThrottledResizeBound) } }, { key: "_handleTargetClick", value: function(t) { this.open() } }, { key: "_handleOriginClick", value: function(t) { this.close() } }, { key: "_handleResize", value: function(t) { this._calculatePositioning() } }, { key: "_handleDocumentClick", value: function(t) { S(t.target).closest(".tap-target-wrapper").length || (this.close(), t.preventDefault(), t.stopPropagation()) } }, { key: "_setup", value: function() { this.wrapper = this.$el.parent()[0], this.waveEl = S(this.wrapper).find(".tap-target-wave")[0], this.originEl = S(this.wrapper).find(".tap-target-origin")[0], this.contentEl = this.$el.find(".tap-target-content")[0], S(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"), this.wrapper.classList.add("tap-target-wrapper"), this.$el.before(S(this.wrapper)), this.wrapper.append(this.el)), this.contentEl || (this.contentEl = document.createElement("div"), this.contentEl.classList.add("tap-target-content"), this.$el.append(this.contentEl)), this.waveEl || (this.waveEl = document.createElement("div"), this.waveEl.classList.add("tap-target-wave"), this.originEl || (this.originEl = this.$origin.clone(!0, !0), this.originEl.addClass("tap-target-origin"), this.originEl.removeAttr("id"), this.originEl.removeAttr("style"), this.originEl = this.originEl[0], this.waveEl.append(this.originEl)), this.wrapper.append(this.waveEl)) } }, {
                    key: "_calculatePositioning",
                    value: function() {
                        var t = "fixed" === this.$origin.css("position");
                        if (!t)
                            for (var e = this.$origin.parents(), i = 0; i < e.length && !(t = "fixed" == S(e[i]).css("position")); i++);
                        var n = this.$origin.outerWidth(),
                            s = this.$origin.outerHeight(),
                            o = t ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top,
                            a = t ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left,
                            r = window.innerWidth,
                            l = window.innerHeight,
                            h = r / 2,
                            d = l / 2,
                            u = a <= h,
                            c = h < a,
                            p = o <= d,
                            v = d < o,
                            f = .25 * r <= a && a <= .75 * r,
                            m = this.$el.outerWidth(),
                            g = this.$el.outerHeight(),
                            _ = o + s / 2 - g / 2,
                            y = a + n / 2 - m / 2,
                            k = t ? "fixed" : "absolute",
                            b = f ? m : m / 2 + n,
                            w = g / 2,
                            C = p ? g / 2 : 0,
                            E = u && !f ? m / 2 - n : 0,
                            O = n,
                            x = v ? "bottom" : "top",
                            L = 2 * n,
                            T = L,
                            $ = g / 2 - T / 2,
                            B = m / 2 - L / 2,
                            D = {};
                        D.top = p ? _ + "px" : "", D.right = c ? r - y - m + "px" : "", D.bottom = v ? l - _ - g + "px" : "", D.left = u ? y + "px" : "", D.position = k, S(this.wrapper).css(D), S(this.contentEl).css({ width: b + "px", height: w + "px", top: C + "px", right: "0px", bottom: "0px", left: E + "px", padding: O + "px", verticalAlign: x }), S(this.waveEl).css({ top: $ + "px", left: B + "px", width: L + "px", height: T + "px" })
                    }
                }, { key: "open", value: function() { this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]), this.isOpen = !0, this.wrapper.classList.add("open"), document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound)) } }, { key: "close", value: function() { this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]), this.isOpen = !1, this.wrapper.classList.remove("open"), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound)) } }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_TapTarget } }, { key: "defaults", get: function() { return e } }]), n
            }();
        M.TapTarget = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "tapTarget", "M_TapTarget")
    }(cash),
    function(d) {
        "use strict";
        var e = { classes: "", dropdownOptions: {} },
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return i.$el.hasClass("browser-default") ? _possibleConstructorReturn(i) : ((i.el.M_FormSelect = i).options = d.extend({}, n.defaults, e), i.isMultiple = i.$el.prop("multiple"), i.el.tabIndex = -1, i._keysSelected = {}, i._valueDict = {}, i._setupDropdown(), i._setupEventHandlers(), i) }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this._removeEventHandlers(), this._removeDropdown(), this.el.M_FormSelect = void 0 } }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = this;
                        this._handleSelectChangeBound = this._handleSelectChange.bind(this), this._handleOptionClickBound = this._handleOptionClick.bind(this), this._handleInputClickBound = this._handleInputClick.bind(this), d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) { t.addEventListener("click", e._handleOptionClickBound) }), this.el.addEventListener("change", this._handleSelectChangeBound), this.input.addEventListener("click", this._handleInputClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var e = this;
                        d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) { t.removeEventListener("click", e._handleOptionClickBound) }), this.el.removeEventListener("change", this._handleSelectChangeBound), this.input.removeEventListener("click", this._handleInputClickBound)
                    }
                }, { key: "_handleSelectChange", value: function(t) { this._setValueToInput() } }, {
                    key: "_handleOptionClick",
                    value: function(t) {
                        t.preventDefault();
                        var e = d(t.target).closest("li")[0],
                            i = e.id;
                        if (!d(e).hasClass("disabled") && !d(e).hasClass("optgroup") && i.length) {
                            var n = !0;
                            if (this.isMultiple) {
                                var s = d(this.dropdownOptions).find("li.disabled.selected");
                                s.length && (s.removeClass("selected"), s.find('input[type="checkbox"]').prop("checked", !1), this._toggleEntryFromArray(s[0].id)), n = this._toggleEntryFromArray(i)
                            } else d(this.dropdownOptions).find("li").removeClass("selected"), d(e).toggleClass("selected", n);
                            d(this._valueDict[i].el).prop("selected") !== n && (d(this._valueDict[i].el).prop("selected", n), this.$el.trigger("change"))
                        }
                        t.stopPropagation()
                    }
                }, { key: "_handleInputClick", value: function() { this.dropdown && this.dropdown.isOpen && (this._setValueToInput(), this._setSelectedStates()) } }, {
                    key: "_setupDropdown",
                    value: function() {
                        var n = this;
                        this.wrapper = document.createElement("div"), d(this.wrapper).addClass("select-wrapper " + this.options.classes), this.$el.before(d(this.wrapper)), this.wrapper.appendChild(this.el), this.el.disabled && this.wrapper.classList.add("disabled"), this.$selectOptions = this.$el.children("option, optgroup"), this.dropdownOptions = document.createElement("ul"), this.dropdownOptions.id = "select-options-" + M.guid(), d(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")), this.$selectOptions.length && this.$selectOptions.each(function(t) {
                            if (d(t).is("option")) {
                                var e = void 0;
                                e = n.isMultiple ? n._appendOptionWithIcon(n.$el, t, "multiple") : n._appendOptionWithIcon(n.$el, t), n._addOptionToValueDict(t, e)
                            } else if (d(t).is("optgroup")) {
                                var i = d(t).children("option");
                                d(n.dropdownOptions).append(d('<li class="optgroup"><span>' + t.getAttribute("label") + "</span></li>")[0]), i.each(function(t) {
                                    var e = n._appendOptionWithIcon(n.$el, t, "optgroup-option");
                                    n._addOptionToValueDict(t, e)
                                })
                            }
                        }), this.$el.after(this.dropdownOptions), this.input = document.createElement("input"), d(this.input).addClass("select-dropdown dropdown-trigger"), this.input.setAttribute("type", "text"), this.input.setAttribute("readonly", "true"), this.input.setAttribute("data-target", this.dropdownOptions.id), this.el.disabled && d(this.input).prop("disabled", "true"), this.$el.before(this.input), this._setValueToInput();
                        var t = d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
                        if (this.$el.before(t[0]), !this.el.disabled) {
                            var e = d.extend({}, this.options.dropdownOptions);
                            e.onOpenEnd = function(t) {
                                var e = d(n.dropdownOptions).find(".selected").first();
                                if (e.length && (M.keyDown = !0, n.dropdown.focusedIndex = e.index(), n.dropdown._focusFocusedItem(), M.keyDown = !1, n.dropdown.isScrollable)) {
                                    var i = e[0].getBoundingClientRect().top - n.dropdownOptions.getBoundingClientRect().top;
                                    i -= n.dropdownOptions.clientHeight / 2, n.dropdownOptions.scrollTop = i
                                }
                            }, this.isMultiple && (e.closeOnClick = !1), this.dropdown = M.Dropdown.init(this.input, e)
                        }
                        this._setSelectedStates()
                    }
                }, {
                    key: "_addOptionToValueDict",
                    value: function(t, e) {
                        var i = Object.keys(this._valueDict).length,
                            n = this.dropdownOptions.id + i,
                            s = {};
                        e.id = n, s.el = t, s.optionEl = e, this._valueDict[n] = s
                    }
                }, { key: "_removeDropdown", value: function() { d(this.wrapper).find(".caret").remove(), d(this.input).remove(), d(this.dropdownOptions).remove(), d(this.wrapper).before(this.$el), d(this.wrapper).remove() } }, {
                    key: "_appendOptionWithIcon",
                    value: function(t, e, i) {
                        var n = e.disabled ? "disabled " : "",
                            s = "optgroup-option" === i ? "optgroup-option " : "",
                            o = this.isMultiple ? '<label><input type="checkbox"' + n + '"/><span>' + e.innerHTML + "</span></label>" : e.innerHTML,
                            a = d("<li></li>"),
                            r = d("<span></span>");
                        r.html(o), a.addClass(n + " " + s), a.append(r);
                        var l = e.getAttribute("data-icon");
                        if (l) {
                            var h = d('<img alt="" src="' + l + '">');
                            a.prepend(h)
                        }
                        return d(this.dropdownOptions).append(a[0]), a[0]
                    }
                }, {
                    key: "_toggleEntryFromArray",
                    value: function(t) {
                        var e = !this._keysSelected.hasOwnProperty(t),
                            i = d(this._valueDict[t].optionEl);
                        return e ? this._keysSelected[t] = !0 : delete this._keysSelected[t], i.toggleClass("selected", e), i.find('input[type="checkbox"]').prop("checked", e), i.prop("selected", e), e
                    }
                }, {
                    key: "_setValueToInput",
                    value: function() {
                        var i = [];
                        if (this.$el.find("option").each(function(t) {
                                if (d(t).prop("selected")) {
                                    var e = d(t).text();
                                    i.push(e)
                                }
                            }), !i.length) {
                            var t = this.$el.find("option:disabled").eq(0);
                            t.length && "" === t[0].value && i.push(t.text())
                        }
                        this.input.value = i.join(", ")
                    }
                }, {
                    key: "_setSelectedStates",
                    value: function() {
                        for (var t in this._keysSelected = {}, this._valueDict) {
                            var e = this._valueDict[t],
                                i = d(e.el).prop("selected");
                            d(e.optionEl).find('input[type="checkbox"]').prop("checked", i), i ? (this._activateOption(d(this.dropdownOptions), d(e.optionEl)), this._keysSelected[t] = !0) : d(e.optionEl).removeClass("selected")
                        }
                    }
                }, { key: "_activateOption", value: function(t, e) { e && (this.isMultiple || t.find("li.selected").removeClass("selected"), d(e).addClass("selected")) } }, { key: "getSelectedValues", value: function() { var t = []; for (var e in this._keysSelected) t.push(this._valueDict[e].el.value); return t } }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_FormSelect } }, { key: "defaults", get: function() { return e } }]), n
            }();
        M.FormSelect = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "formSelect", "M_FormSelect")
    }(cash),
    function(s, e) {
        "use strict";
        var i = {},
            t = function(t) {
                function n(t, e) { _classCallCheck(this, n); var i = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, e)); return (i.el.M_Range = i).options = s.extend({}, n.defaults, e), i._mousedown = !1, i._setupThumb(), i._setupEventHandlers(), i }
                return _inherits(n, Component), _createClass(n, [{ key: "destroy", value: function() { this._removeEventHandlers(), this._removeThumb(), this.el.M_Range = void 0 } }, { key: "_setupEventHandlers", value: function() { this._handleRangeChangeBound = this._handleRangeChange.bind(this), this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this), this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this), this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this), this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this), this.el.addEventListener("change", this._handleRangeChangeBound), this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound) } }, { key: "_removeEventHandlers", value: function() { this.el.removeEventListener("change", this._handleRangeChangeBound), this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound), this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound), this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound), this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound), this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound) } }, {
                    key: "_handleRangeChange",
                    value: function() {
                        s(this.value).html(this.$el.val()), s(this.thumb).hasClass("active") || this._showRangeBubble();
                        var t = this._calcRangeOffset();
                        s(this.thumb).addClass("active").css("left", t + "px")
                    }
                }, {
                    key: "_handleRangeMousedownTouchstart",
                    value: function(t) {
                        if (s(this.value).html(this.$el.val()), this._mousedown = !0, this.$el.addClass("active"), s(this.thumb).hasClass("active") || this._showRangeBubble(), "input" !== t.type) {
                            var e = this._calcRangeOffset();
                            s(this.thumb).addClass("active").css("left", e + "px")
                        }
                    }
                }, {
                    key: "_handleRangeInputMousemoveTouchmove",
                    value: function() {
                        if (this._mousedown) {
                            s(this.thumb).hasClass("active") || this._showRangeBubble();
                            var t = this._calcRangeOffset();
                            s(this.thumb).addClass("active").css("left", t + "px"), s(this.value).html(this.$el.val())
                        }
                    }
                }, { key: "_handleRangeMouseupTouchend", value: function() { this._mousedown = !1, this.$el.removeClass("active") } }, {
                    key: "_handleRangeBlurMouseoutTouchleave",
                    value: function() {
                        if (!this._mousedown) {
                            var t = 7 + parseInt(this.$el.css("padding-left")) + "px";
                            s(this.thumb).hasClass("active") && (e.remove(this.thumb), e({ targets: this.thumb, height: 0, width: 0, top: 10, easing: "easeOutQuad", marginLeft: t, duration: 100 })), s(this.thumb).removeClass("active")
                        }
                    }
                }, { key: "_setupThumb", value: function() { this.thumb = document.createElement("span"), this.value = document.createElement("span"), s(this.thumb).addClass("thumb"), s(this.value).addClass("value"), s(this.thumb).append(this.value), this.$el.after(this.thumb) } }, { key: "_removeThumb", value: function() { s(this.thumb).remove() } }, {
                    key: "_showRangeBubble",
                    value: function() {
                        var t = -7 + parseInt(s(this.thumb).parent().css("padding-left")) + "px";
                        e.remove(this.thumb), e({ targets: this.thumb, height: 30, width: 30, top: -30, marginLeft: t, duration: 300, easing: "easeOutQuint" })
                    }
                }, {
                    key: "_calcRangeOffset",
                    value: function() {
                        var t = this.$el.width() - 15,
                            e = parseFloat(this.$el.attr("max")) || 100,
                            i = parseFloat(this.$el.attr("min")) || 0;
                        return (parseFloat(this.$el.val()) - i) / (e - i) * t
                    }
                }], [{ key: "init", value: function(t, e) { return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e) } }, { key: "getInstance", value: function(t) { return (t.jquery ? t[0] : t).M_Range } }, { key: "defaults", get: function() { return i } }]), n
            }();
        M.Range = t, M.jQueryLoaded && M.initializeJqueryWrapper(t, "range", "M_Range"), t.init(s("input[type=range]"))
    }(cash, M.anime);
;/*=====
  File Name: app-menu.js
  Description: Menu navigation, custom scrollbar, hover scroll bar, multilevel menu
  initialization and manipulations
  ----------------------------------------------------------------------------------------
  Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
  Version: 1.0
  Author: ThemeSelection
  Author URL: https://themeselection.com/
======*/
(function(window, document, $) {
  'use strict';

  $.app = $.app || {};

  var $body       = $('body');
  var $window     = $( window );
  var menuWrapper_el = $('div[data-menu="menu-wrapper"]').html();
  var menuWrapperClasses = $('div[data-menu="menu-wrapper"]').attr('class');

  // Main menu
  $.app.menu = {
    expanded: null,
    collapsed: null,
    hidden : null,
    container: null,
    horizontalMenu: false,

    manualScroller: {
      obj: null,

      init: function() {
        var scroll_theme = ($('.main-menu').hasClass('menu-dark')) ? 'light' : 'dark';
      },

      update: function() {
        if (this.obj) {
          // Scroll to currently active menu on page load if data-scroll-to-active is true
          if($('.main-menu').data('scroll-to-active') === true){
              var position;
              if( $(".main-menu-content").find('li.active').parents('li').length > 0 ){
                position = $(".main-menu-content").find('li.active').parents('li').last().position();
              }
              else{
                position = $(".main-menu-content").find('li.active').position();
              }
              setTimeout(function(){
                // $.app.menu.container.scrollTop(position.top);
                if(position !== undefined){
                  $.app.menu.container.stop().animate({scrollTop:position.top}, 300);
                }
                $('.main-menu').data('scroll-to-active', 'false');
              },300);
          }
        }
      },

      enable: function() {
        this.init();
      },

      updateHeight: function(){
        if( ($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern' || $body.data('menu') == 'vertical-overlay-menu' ) && $('.main-menu').hasClass('menu-fixed')){
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight() );
          this.update();
        }
      }
    },

    init: function(compactMenu) {
      if($('.main-menu-content').length > 0){
        this.container = $('.main-menu-content');

        var menuObj = this;
        var defMenu = '';

        if(compactMenu === true){
          defMenu = 'collapsed';
        }

        if($body.data('menu') == 'vertical-menu-modern') {
          var menuToggle = '';

          if (typeof(Storage) !== "undefined") {
            menuToggle = localStorage.getItem("menuLocked");
          }
          if(menuToggle === "false"){
            this.change('collapsed');
          }
          else{
            this.change();
          }
        }
        else{
          this.change(defMenu);
        }
      }
      /*if(defMenu === 'collapsed'){
        this.collapse();
      }*/
    },

    change: function(defMenu) {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint

      this.reset();

      var menuType = $body.data('menu');

      if (currentBreakpoint) {
        switch (currentBreakpoint.name) {
          case 'xl':
          case 'lg':
            this.expand();
            break;
          case 'md':
            this.expand();
            break;
          case 'sm':
            this.hide();
            break;
          case 'xs':
            this.hide();
            break;
        }
      }

      // On the small and extra small screen make them overlay menu
      if(menuType === 'vertical-menu' || menuType === 'vertical-menu-modern'){
        this.toOverlayMenu(currentBreakpoint.name);
      }

      if($body.is('.horizontal-layout') && !$body.hasClass('.horizontal-menu-demo')){
        this.changeMenu(currentBreakpoint.name);

        $('.menu-toggle').removeClass('is-active');
      }

      // Dropdown submenu on large screen on hover For Large screen only
      // ---------------------------------------------------------------
      if(currentBreakpoint.name == 'xl'){
        $('body[data-open="hover"] .dropdown').on('mouseenter', function(){
          if (!($(this).hasClass('show'))) {
            $(this).addClass('show');
          }else{
            $(this).removeClass('show');
          }
        }).on('mouseleave', function(event){
          $(this).removeClass('show');
        });

      }

      // Added data attribute brand-center for navbar-brand-center
      // TODO:AJ: Shift this feature in PUG.
      if($('.header-navbar').hasClass('navbar-brand-center')){
        $('.header-navbar').attr('data-nav','brand-center');
      }
      if(currentBreakpoint.name == 'sm' || currentBreakpoint.name == 'xs'){
        $('.header-navbar[data-nav=brand-center]').removeClass('navbar-brand-center');
      }else{
        $('.header-navbar[data-nav=brand-center]').addClass('navbar-brand-center');
      }

      // Dropdown submenu on small screen on click
      // --------------------------------------------------
      $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        if($(this).siblings('ul.dropdown-menu').length > 0){
          event.preventDefault();
        }
        event.stopPropagation();
        $(this).parent().siblings().removeClass('show');
        $(this).parent().toggleClass('show');
      });

      if($(".navbar-fixed").length){
        $(".navbar-fixed").sticky();
      }

      if(menuType === 'vertical-menu' || menuType === 'vertical-overlay-menu'){
        // custom css expression for a case-insensitive contains()
        jQuery.expr[':'].Contains = function(a,i,m){
            return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
        };
      }
    },

    transit: function(callback1, callback2) {
      var menuObj = this;
      $body.addClass('changing-menu');

      callback1.call(menuObj);

      if($body.hasClass('vertical-layout')){
        if($body.hasClass('menu-open') || $body.hasClass('menu-expanded')){
          $('.menu-toggle').addClass('is-active');

          // Show menu header search when menu is normally visible
          if( $body.data('menu') === 'vertical-menu' ){
            if($('.main-menu-header')){
              $('.main-menu-header').show();
            }
          }
        }
        else{
          $('.menu-toggle').removeClass('is-active');

          // Hide menu header search when only menu icons are visible
          if( $body.data('menu') === 'vertical-menu' ){
            if($('.main-menu-header')){
              $('.main-menu-header').hide();
            }
          }
        }
      }

      setTimeout(function() {
        callback2.call(menuObj);
        $body.removeClass('changing-menu');

        menuObj.update();
      }, 500);
    },

    open: function() {
      this.transit(function() {
        $body.removeClass('menu-hide menu-collapsed').addClass('menu-open');
        this.hidden = false;
        this.expanded = true;
      }, function() {
        if(!$('.main-menu').hasClass('menu-native-scroll') && $('.main-menu').hasClass('menu-fixed') ){
          this.manualScroller.enable();
          $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight() );
          // this.manualScroller.update();
        }
      });
    },

    hide: function() {

      this.transit(function() {
        $body.removeClass('menu-open menu-expanded').addClass('menu-hide');
        this.hidden = true;
        this.expanded = false;
      }, function() {
        if(!$('.main-menu').hasClass('menu-native-scroll') && $('.main-menu').hasClass('menu-fixed')){
          this.manualScroller.enable();
        }
      });
    },

    expand: function() {
      if (this.expanded === false) {
        if( $body.data('menu') == 'vertical-menu-modern' ){
          $('.modern-nav-toggle').find('.toggle-icon')
          .removeClass('ft-circle').addClass('ft-disc');

          // Code for localStorage
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem("menuLocked", "true");
          }
        }
        /*if( $body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern'){
          this.changeLogo('expand');
        }*/
        this.transit(function() {
          $body.removeClass('menu-collapsed').addClass('menu-expanded');
          this.collapsed = false;
          this.expanded = true;

        }, function() {

          if( ($('.main-menu').hasClass('menu-native-scroll') || $body.data('menu') == 'horizontal-menu')){
            this.manualScroller.disable();
          }
          else{
            if($('.main-menu').hasClass('menu-fixed'))
              this.manualScroller.enable();
          }

          if( ($body.data('menu') == 'vertical-menu' || $body.data('menu') == 'vertical-menu-modern') && $('.main-menu').hasClass('menu-fixed')){
            $('.main-menu-content').css('height', $(window).height() - $('.header-navbar').height() - $('.main-menu-header').outerHeight() - $('.main-menu-footer').outerHeight() );
            // this.manualScroller.update();
          }

        });
      }
    },

    toOverlayMenu: function(screen){
      var menu = $body.data('menu');
      if(screen == 'sm' || screen == 'xs'){
        if($body.hasClass(menu)){
          $body.removeClass(menu).addClass('vertical-overlay-menu');
        }
      }
      else{
        if($body.hasClass('vertical-overlay-menu')){
          $body.removeClass('vertical-overlay-menu').addClass(menu);
        }
      }
    },

    changeMenu: function(screen){
      // Replace menu html
      $('div[data-menu="menu-wrapper"]').html('');
      $('div[data-menu="menu-wrapper"]').html(menuWrapper_el);

      var menuWrapper    = $('div[data-menu="menu-wrapper"]'),
      menuNavigation     = $('ul[data-menu="menu-navigation"]'),
      dropdownMenu       = $('li[data-menu="dropdown"]'),
      dropdownSubMenu    = $('li[data-menu="dropdown-submenu"]');

      if(screen == 'sm' || screen == 'xs'){

        // Change body classes
        $body.removeClass($body.data('menu')).addClass('vertical-layout vertical-overlay-menu fixed-navbar');

        // Add navbar-fix-top class on small screens
        $('nav.header-navbar').addClass('fixed-top');

        // Change menu wrapper, menu container, menu navigation classes
        menuWrapper.removeClass().addClass('main-menu menu-light menu-fixed menu-shadow');
        // menuContainer.removeClass().addClass('main-menu-content');
        menuNavigation.removeClass().addClass('navigation navigation-main');

        // If Dropdown Menu
        dropdownMenu.removeClass('dropdown').addClass('has-sub');
        dropdownMenu.find('a').removeClass('dropdown-toggle nav-link');
        dropdownMenu.children('ul').find('a').removeClass('dropdown-item');
        dropdownMenu.find('ul').removeClass('dropdown-menu');
        dropdownSubMenu.removeClass().addClass('has-sub');

        $.app.nav.init();

        // Dropdown submenu on small screen on click
        // --------------------------------------------------
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          $(this).parent().siblings().removeClass('open');
          $(this).parent().toggleClass('open');
        });
      }
      else{
        // Change body classes
        $body.removeClass('vertical-layout vertical-overlay-menu fixed-navbar').addClass($body.data('menu'));

        // Remove navbar-fix-top class on large screens
        $('nav.header-navbar').removeClass('fixed-top');

        // Change menu wrapper, menu container, menu navigation classes
        menuWrapper.removeClass().addClass(menuWrapperClasses);

        $('a.dropdown-item.nav-has-children').on('click',function(){
          event.preventDefault();
          event.stopPropagation();
        });
        $('a.dropdown-item.nav-has-parent').on('click',function(){
          event.preventDefault();
          event.stopPropagation();
        });
      }
    },

    toggle: function() {
      var currentBreakpoint = Unison.fetch.now(); // Current Breakpoint
      var expanded = this.expanded;
      var hidden = this.hidden;
      var menu = $body.data('menu');

      switch (currentBreakpoint.name) {
        case 'xl':
        case 'lg':
        case 'md':
          if(expanded === true){
            if(menu == 'vertical-overlay-menu'){
              this.hide();
            }
          }
          else{
            if(menu == 'vertical-overlay-menu'){
              this.open();
            }
            else{
              this.expand();
            }
          }
          break;
        case 'sm':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }
          break;
        case 'xs':
          if (hidden === true) {
            this.open();
          } else {
            this.hide();
          }
          break;
      }

    },

    update: function() {
      this.manualScroller.update();
    },

    reset: function() {
      this.expanded  = false;
      this.collapsed = false;
      this.hidden    = false;
      $body.removeClass('menu-hide menu-open menu-collapsed menu-expanded');
    },
  };

  // Navigation Menu
  $.app.nav = {
    container: $('.navigation-main'),
    initialized : false,
    navItem: $('.navigation-main').find('li').not('.navigation-category'),

    config: {
      speed: 300,
    },

    init: function(config) {
      this.initialized = true; // Set to true when initialized
      $.extend(this.config, config);

      this.bind_events();
    },

    bind_events: function() {
      var menuObj = this;

      $('.navigation-main').on('mouseenter.app.menu', 'li', function() {
        var $this = $(this);
        $('.hover', '.navigation-main').removeClass('hover');
        if( ($body.hasClass('menu-collapsed') && $body.data('menu') != 'vertical-menu-modern') ){
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove();

          // Title
          var menuTitle = $this.find('span.menu-title').clone(),
          tempTitle,
          tempLink;
          if(!$this.hasClass('has-sub') ){
            tempTitle = $this.find('span.menu-title').text();
            tempLink = $this.children('a').attr('href');
            if(tempTitle !== ''){
              menuTitle = $("<a>");
              menuTitle.attr("href", tempLink);
              menuTitle.attr("title", tempTitle);
              menuTitle.text(tempTitle);
              menuTitle.addClass("menu-title");
            }
          }
          
          var menu_header_height = ($('.navbar-header').length) ? $('.navbar-header').height() : 0;
          // fromTop = menu_header_height + $this.position().top + parseInt($this.css( "border-top" ),10);
          var fromTop;
          if($this.css( "border-top" )){
            fromTop = $this.offset().top + parseInt($this.css( "border-top" ), 10);
          }
          else{
            fromTop = $this.offset().top;
          }

          menuTitle.appendTo('.main-menu-content').css({
            position:'fixed',
            top : fromTop,
          });
          

          // Content
          if($this.hasClass('has-sub') && $this.hasClass('nav-item')) {
            var menuContent = $this.children('ul:first');
            menuObj.adjustSubmenu($this);
          }
        }
        $this.addClass('hover');
      }).on('mouseleave.app.menu', 'li', function() {
        // $(this).removeClass('hover');
      }).on('active.app.menu', 'li', function(e) {
        $(this).addClass('active');
        e.stopPropagation();
      }).on('deactive.app.menu', 'li.active', function(e) {
        $(this).removeClass('active');
        e.stopPropagation();
      }).on('open.app.menu', 'li', function(e) {

        var $listItem = $(this);
        $listItem.addClass('open');

        menuObj.expand($listItem);

        // If menu collapsible then do not take any action
        if ($('.main-menu').hasClass('menu-collapsible')) {
          return false;
        }
        // If menu accordion then close all except clicked once
        else{
          $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
          $listItem.siblings('.open').trigger('close.app.menu');
        }

        e.stopPropagation();
      }).on('close.app.menu', 'li.open', function(e) {
        var $listItem = $(this);

        $listItem.removeClass('open');
        menuObj.collapse($listItem);

        e.stopPropagation();
      }).on('click.app.menu', 'li', function(e) {
        var $listItem = $(this);
        if($listItem.is('.disabled')){
          e.preventDefault();
        }
        else{
          if( ($body.hasClass('menu-collapsed') && $body.data('menu') != 'vertical-menu-modern') ){
            e.preventDefault();
          }
          else{
            if ($listItem.has('ul')) {
              if ($listItem.is('.open')) {
                $listItem.trigger('close.app.menu');
              } else {
                $listItem.trigger('open.app.menu');
              }
            } else {
              if (!$listItem.is('.active')) {
                $listItem.siblings('.active').trigger('deactive.app.menu');
                $listItem.trigger('active.app.menu');
              }
            }
          }
        }

        e.stopPropagation();
      });


      $('.navbar-header, .main-menu').on('mouseenter',modernMenuExpand).on('mouseleave',modernMenuCollapse);

      function modernMenuExpand(){
        if( $body.data('menu') == 'vertical-menu-modern'){
          $('.main-menu, .navbar-header').addClass('expanded');
          if($body.hasClass('menu-collapsed')){
            var $listItem = $('.main-menu li.menu-collapsed-open'),
            $subList = $listItem.children('ul');

            $subList.hide().slideDown(200, function() {
                $(this).css('display', '');
            });

            $listItem.addClass('open').removeClass('menu-collapsed-open');
            // $.app.menu.changeLogo('expand');
          }
        }
      }

      function modernMenuCollapse(){
        if($body.hasClass('menu-collapsed') && $body.data('menu') == 'vertical-menu-modern'){
          setTimeout(function(){
            if($('.main-menu:hover').length === 0 && $('.navbar-header:hover').length === 0){

              $('.main-menu, .navbar-header').removeClass('expanded');
              if($body.hasClass('menu-collapsed')){
                var $listItem = $('.main-menu li.open'),
                $subList = $listItem.children('ul');
                $listItem.addClass('menu-collapsed-open');

                $subList.show().slideUp(200, function() {
                    $(this).css('display', '');
                });

                $listItem.removeClass('open');
                // $.app.menu.changeLogo();
              }
            }
          },1);
        }
      }

      $('.main-menu-content').on('mouseleave', function(){
        if( $body.hasClass('menu-collapsed') ){
          $('.main-menu-content').children('span.menu-title').remove();
          $('.main-menu-content').children('a.menu-title').remove();
          $('.main-menu-content').children('ul.menu-content').remove();
        }
        $('.hover', '.navigation-main').removeClass('hover');
      });

      // If list item has sub menu items then prevent redirection.
      $('.navigation-main li.has-sub > a').on('click',function(e){
        e.preventDefault();
      });

      $('ul.menu-content').on('click', 'li', function(e) {
        var $listItem = $(this);
        if($listItem.is('.disabled')){
          e.preventDefault();
        }
        else{
          if ($listItem.has('ul')) {
            if ($listItem.is('.open')) {
              $listItem.removeClass('open');
              menuObj.collapse($listItem);
            } else {
              $listItem.addClass('open');

              menuObj.expand($listItem);

              // If menu collapsible then do not take any action
              if ($('.main-menu').hasClass('menu-collapsible')) {
                return false;
              }
              // If menu accordion then close all except clicked once
              else{
                $listItem.siblings('.open').find('li.open').trigger('close.app.menu');
                $listItem.siblings('.open').trigger('close.app.menu');
              }

              e.stopPropagation();
            }
          } else {
            if (!$listItem.is('.active')) {
              $listItem.siblings('.active').trigger('deactive.app.menu');
              $listItem.trigger('active.app.menu');
            }
          }
        }

        e.stopPropagation();
      });
    },

    /**
     * Ensure an admin submenu is within the visual viewport.
     * @param {jQuery} $menuItem The parent menu item containing the submenu.
     */
    adjustSubmenu: function ( $menuItem ) {
      var menuHeaderHeight, menutop, topPos, winHeight,
      bottomOffset, subMenuHeight, popOutMenuHeight, borderWidth, scroll_theme,
      $submenu = $menuItem.children('ul:first'),
      ul = $submenu.clone(true);

      menuHeaderHeight = $('.navbar-header').height();
      menutop          = $menuItem.offset().top - menuHeaderHeight;
      winHeight        = $window.height() - $('.header-navbar').height();
      borderWidth      = 0;
      subMenuHeight    = $submenu.height();

      if(parseInt($menuItem.css( "border-top" ),10) > 0){
        borderWidth = parseInt($menuItem.css( "border-top" ),10);
      }

      popOutMenuHeight = winHeight - menutop - $menuItem.height() - 30;
      scroll_theme     = ($('.main-menu').hasClass('menu-dark')) ? 'light' : 'dark';
      
      topPos = menuHeaderHeight + menutop + $menuItem.height() + borderWidth;
      
      ul.addClass('menu-popout').appendTo('.main-menu-content').css({
        'top' : topPos,
        'position' : 'fixed',
        'max-height': popOutMenuHeight,
      });
    },

    collapse: function($listItem, callback) {
      var $subList = $listItem.children('ul');

      $subList.show().slideUp($.app.nav.config.speed, function() {
        $(this).css('display', '');

        $(this).find('> li').removeClass('is-shown');

        if (callback) {
          callback();
        }

        $.app.nav.container.trigger('collapsed.app.menu');
      });
    },

    expand: function($listItem, callback) {
      var $subList  = $listItem.children('ul');
      var $children = $subList.children('li').addClass('is-hidden');

      $subList.hide().slideDown($.app.nav.config.speed, function() {
        $(this).css('display', '');

        if (callback) {
          callback();
        }

        $.app.nav.container.trigger('expanded.app.menu');
      });

      setTimeout(function() {
        $children.addClass('is-shown');
        $children.removeClass('is-hidden');
      }, 0);
    },

    refresh: function() {
      $.app.nav.container.find('.open').removeClass('open');
    },
  };

})(window, document, jQuery);
;/*=====
  File Name: app.js
  Description: Template related app JS.
  ----------------------------------------------------------------------------------------
  Item Name: Chameleon Admin - Modern Bootstrap 4 WebApp & Dashboard HTML Template + UI Kit
  Version: 1.0
  Author: ThemeSelection
  Author URL: https://themeselection.com/
======*/

(function(window, document, $) {
    'use strict';
    var $html = $('html');
    var $body = $('body');


    $(window).on('load', function() {
        var rtl;
        var compactMenu = false; // Set it to true, if you want default menu to be compact

        if ($('html').data('textdirection') == 'rtl') {
            rtl = true;
        }

        setTimeout(function() {
            $html.removeClass('loading').addClass('loaded');
        }, 1200);

        $.app.menu.init(compactMenu);

        // Navigation configurations
        var config = {
            speed: 300 // set speed to expand / collpase menu
        };
        if ($.app.nav.initialized === false) {
            $.app.nav.init(config);
        }

        Unison.on('change', function(bp) {
            $.app.menu.change();
        });

        var $sidebar_img = $('.main-menu').data('img'),
            $sidebar_img_container = $('.navigation-background');

        if ($sidebar_img_container.length > 0 && $sidebar_img !== undefined) {
            $sidebar_img_container.css('background-image', 'url("' + $sidebar_img + '")');
        }

        $('.nav-link-search').on('click', function() {
            var $this = $(this),
                searchInput = $(this).siblings('.search-input');

            if (searchInput.hasClass('open')) {
                searchInput.removeClass('open');
            } else {
                searchInput.addClass('open');
            }
        });

        //Hide navbar search box on close click
        var toogleBtn = $(".header-navbar .navbar-search-close");
        $(toogleBtn).click(function(event) {
            $('.navbar-search .dropdown-toggle').click();
        });


        // Tooltip Initialization
        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        // Top Navbars - Hide on Scroll
        if ($(".navbar-hide-on-scroll").length > 0) {
            $(".navbar-hide-on-scroll.fixed-top").headroom({
                "offset": 205,
                "tolerance": 5,
                "classes": {
                    // when element is initialised
                    initial: "headroom",
                    // when scrolling up
                    pinned: "headroom--pinned-top",
                    // when scrolling down
                    unpinned: "headroom--unpinned-top",
                }
            });
            // Bottom Navbars - Hide on Scroll
            $(".navbar-hide-on-scroll.fixed-bottom").headroom({
                "offset": 205,
                "tolerance": 5,
                "classes": {
                    // when element is initialised
                    initial: "headroom",
                    // when scrolling up
                    pinned: "headroom--pinned-bottom",
                    // when scrolling down
                    unpinned: "headroom--unpinned-bottom",
                }
            });
        }

        //Match content & menu height for content menu
        setTimeout(function() {
            if ($('body').hasClass('vertical-content-menu')) {
                setContentMenuHeight();
            }
        }, 500);

        function setContentMenuHeight() {
            var menuHeight = $('.main-menu').height();
            var bodyHeight = $('.content-body').height();
            if (bodyHeight < menuHeight) {
                $('.content-body').css('height', menuHeight);
            }
        }

        // Collapsible Card
        $('a[data-action="collapse"]').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.card').children('.card-content').collapse('toggle');
            $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ft-minus ft-plus');

        });

        // Toggle fullscreen
        $('a[data-action="expand"]').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.card').find('[data-action="expand"] i').toggleClass('ft-maximize ft-minimize');
            $(this).closest('.card').toggleClass('card-fullscreen');
        });

        // Reload Card
        $('a[data-action="reload"]').on('click', function() {
            var block_ele = $(this).closest('.card');

            // Block Element
            block_ele.block({
                message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
                timeout: 2000, //unblock after 2 seconds
                overlayCSS: {
                    backgroundColor: '#FFF',
                    cursor: 'wait',
                },
                css: {
                    border: 0,
                    padding: 0,
                    backgroundColor: 'none'
                }
            });
        });

        // Close Card
        $('a[data-action="close"]').on('click', function() {
            $(this).closest('.card').removeClass().slideUp('fast');
        });


        $('.card .heading-elements a[data-action="collapse"]').on('click', function() {
            var $this = $(this),
                card = $this.closest('.card');
            var cardHeight;

            if (parseInt(card[0].style.height, 10) > 0) {
                cardHeight = card.css('height');
                card.css('height', '').attr('data-height', cardHeight);
            } else {
                if (card.data('height')) {
                    cardHeight = card.data('height');
                    card.css('height', cardHeight).attr('data-height', '');
                }
            }
        });

        var menuType = $body.data('menu');
        if (menuType == 'vertical-compact-menu') {
            $(".main-menu-content").find('li.active').parents('li:not(.nav-item)').addClass('open');
            $(".main-menu-content").find('li.active').parents('li').addClass('active');
        }

        //card heading actions buttons small screen support
        $(".heading-elements-toggle").on("click", function() {
            $(this).parent().children(".heading-elements").toggleClass("visible");
        });

        //  Dynamic height for the chartjs div for the chart animations to work
        var chartjsDiv = $('.chartjs'),
            canvasHeight = chartjsDiv.children('canvas').attr('height');
        chartjsDiv.css('height', canvasHeight);

        if ($body.hasClass('boxed-layout')) {
            if ($body.hasClass('vertical-overlay-menu') || $body.hasClass('vertical-compact-menu')) {
                var menuWidth = $('.main-menu').width();
                var contentPosition = $('.app-content').position().left;
                var menuPositionAdjust = contentPosition - menuWidth;
                if ($body.hasClass('menu-flipped')) {
                    $('.main-menu').css('right', menuPositionAdjust + 'px');
                } else {
                    $('.main-menu').css('left', menuPositionAdjust + 'px');
                }
            }
        }

        $('.nav-link-search').on('click', function() {
            var $this = $(this),
                searchInput = $(this).siblings('.search-input');

            if (searchInput.hasClass('open')) {
                searchInput.removeClass('open');
            } else {
                searchInput.addClass('open');
            }
        });
    });

    $('.nav-link-search').on('click', function() {
        var $this = $(this),
            searchInput = $(this).siblings('.search-input');

        if (searchInput.hasClass('open')) {
            searchInput.removeClass('open');
        } else {
            searchInput.addClass('open');
        }
    });

    $(document).on('click', '.menu-toggle, .modern-nav-toggle', function(e) {
        e.preventDefault();

        // Toggle menu
        $.app.menu.toggle();

        setTimeout(function() {
            $(window).trigger("resize");
        }, 200);

        if ($('#collapsed-sidebar').length > 0) {
            setTimeout(function() {
                if ($body.hasClass('menu-expanded') || $body.hasClass('menu-open')) {
                    $('#collapsed-sidebar').prop('checked', false);
                } else {
                    $('#collapsed-sidebar').prop('checked', true);
                }
            }, 1000);
        }

        return false;
    });

    $(document).on('click', '.close-navbar', function(e) {
        e.preventDefault();

        // Toggle menu
        $.app.menu.toggle();
    });

    $(document).on('click', '.main-menu-footer .footer-toggle', function(e) {
        e.preventDefault();
        $(this).find('i').toggleClass('pe-is-i-angle-down pe-is-i-angle-up');
        $('.main-menu-footer').toggleClass('footer-close footer-open');
        return false;
    });


    $('.carousel').carousel({
        interval: 2000
    });

    // Page full screen
    $('.nav-link-expand').on('click', function(e) {
        if (typeof screenfull != 'undefined') {
            if (screenfull.enabled) {
                screenfull.toggle();
            }
        }
    });
    if (typeof screenfull != 'undefined') {
        if (screenfull.enabled) {
            $(document).on(screenfull.raw.fullscreenchange, function() {
                if (screenfull.isFullscreen) {
                    $('.nav-link-expand').find('i').toggleClass('ft-minimize ft-maximize');
                } else {
                    $('.nav-link-expand').find('i').toggleClass('ft-maximize ft-minimize');
                }
            });
        }
    }

    $(document).ready(function() {

        /**********************************
         *   Form Wizard Step Icon
         **********************************/
        $('.step-icon').each(function() {
            var $this = $(this);
            if ($this.siblings('span.step').length > 0) {
                $this.siblings('span.step').empty();
                $(this).appendTo($(this).siblings('span.step'));
            }
        });
    });

    // Update manual scroller when window is resized
    $(window).resize(function() {
        $.app.menu.manualScroller.updateHeight();
    });

})(window, document, jQuery);
;/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a, b) {
    function c() { return new Date(Date.UTC.apply(Date, arguments)) }

    function d() { var a = new Date; return c(a.getFullYear(), a.getMonth(), a.getDate()) }

    function e(a, b) { return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate() }

    function f(a) { return function() { return this[a].apply(this, arguments) } }

    function g(a) { return a && !isNaN(a.getTime()) }

    function h(b, c) {
        function d(a, b) { return b.toLowerCase() } var e, f = a(b).data(),
            g = {},
            h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase()); for (var i in f) c.test(i) && (e = i.replace(h, d), g[e] = f[i]); return g }

    function i(b) { var c = {}; if (q[b] || (b = b.split("-")[0], q[b])) { var d = q[b]; return a.each(p, function(a, b) { b in d && (c[b] = d[b]) }), c } }
    var j = function() { var b = { get: function(a) { return this.slice(a)[0] }, contains: function(a) { for (var b = a && a.valueOf(), c = 0, d = this.length; d > c; c++)
                        if (this[c].valueOf() === b) return c;
                    return -1 }, remove: function(a) { this.splice(a, 1) }, replace: function(b) { b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b)) }, clear: function() { this.length = 0 }, copy: function() { var a = new j; return a.replace(this), a } }; return function() { var c = []; return c.push.apply(c, arguments), a.extend(c, b), c } }(),
        k = function(b, c) { a(b).data("datepicker", this), this._process_options(c), this.dates = new j, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.inputField.length, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(a, b) { return parseInt(b) + 1 }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show() };
    k.prototype = { constructor: k, _resolveViewName: function(a, c) { return 0 === a || "days" === a || "month" === a ? 0 : 1 === a || "months" === a || "year" === a ? 1 : 2 === a || "years" === a || "decade" === a ? 2 : 3 === a || "decades" === a || "century" === a ? 3 : 4 === a || "centuries" === a || "millennium" === a ? 4 : c === b ? !1 : c }, _check_template: function(c) { try { if (c === b || "" === c) return !1; if ((c.match(/[<>]/g) || []).length <= 0) return !0; var d = a(c); return d.length > 0 } catch (e) { return !1 } }, _process_options: function(b) { this._o = a.extend({}, this._o, b); var e = this.o = a.extend({}, this._o),
                f = e.language;
            q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView, 0), e.minViewMode = this._resolveViewName(e.minViewMode, 0), e.maxViewMode = this._resolveViewName(e.maxViewMode, 4), e.startView = Math.min(e.startView, e.maxViewMode), e.startView = Math.max(e.startView, e.minViewMode), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7; var g = r.parseFormat(e.format);
            e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = e.daysOfWeekDisabled || [], a.isArray(e.daysOfWeekDisabled) || (e.daysOfWeekDisabled = e.daysOfWeekDisabled.split(/[,\s]*/)), e.daysOfWeekDisabled = a.map(e.daysOfWeekDisabled, function(a) { return parseInt(a, 10) }), e.daysOfWeekHighlighted = e.daysOfWeekHighlighted || [], a.isArray(e.daysOfWeekHighlighted) || (e.daysOfWeekHighlighted = e.daysOfWeekHighlighted.split(/[,\s]*/)), e.daysOfWeekHighlighted = a.map(e.daysOfWeekHighlighted, function(a) { return parseInt(a, 10) }), e.datesDisabled = e.datesDisabled || [], a.isArray(e.datesDisabled) || (e.datesDisabled = [e.datesDisabled]), e.datesDisabled = a.map(e.datesDisabled, function(a) { return r.parseDate(a, g, e.language, e.assumeNearbyYear) }); var h = String(e.orientation).toLowerCase().split(/\s+/g),
                i = e.orientation.toLowerCase(); if (h = a.grep(h, function(a) { return /^auto|left|right|top|bottom$/.test(a) }), e.orientation = { x: "auto", y: "auto" }, i && "auto" !== i)
                if (1 === h.length) switch (h[0]) {
                    case "top":
                    case "bottom":
                        e.orientation.y = h[0]; break;
                    case "left":
                    case "right":
                        e.orientation.x = h[0] } else i = a.grep(h, function(a) { return /^left|right$/.test(a) }), e.orientation.x = i[0] || "auto", i = a.grep(h, function(a) { return /^top|bottom$/.test(a) }), e.orientation.y = i[0] || "auto";
                else;
            if (e.defaultViewDate) { var j = e.defaultViewDate.year || (new Date).getFullYear(),
                    k = e.defaultViewDate.month || 0,
                    l = e.defaultViewDate.day || 1;
                e.defaultViewDate = c(j, k, l) } else e.defaultViewDate = d() }, _events: [], _secondaryEvents: [], _applyEvents: function(a) { for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d) }, _unapplyEvents: function(a) { for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e) }, _buildEvents: function() { var b = { keyup: a.proxy(function(b) {-1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update() }, this), keydown: a.proxy(this.keydown, this), paste: a.proxy(this.paste, this) };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [
                [this.element, b]
            ] : this.component && this.hasInput ? this._events = [
                [this.inputField, b],
                [this.component, { click: a.proxy(this.show, this) }]
            ] : this._events = [
                [this.element, { click: a.proxy(this.show, this), keydown: a.proxy(this.keydown, this) }]
            ], this._events.push([this.element, "*", { blur: a.proxy(function(a) { this._focused_from = a.target }, this) }], [this.element, { blur: a.proxy(function(a) { this._focused_from = a.target }, this) }]), this.o.immediateUpdates && this._events.push([this.element, { "changeYear changeMonth": a.proxy(function(a) { this.update(a.date) }, this) }]), this._secondaryEvents = [
                [this.picker, { click: a.proxy(this.click, this) }],
                [a(window), { resize: a.proxy(this.place, this) }],
                [a(document), { mousedown: a.proxy(function(a) { this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide() }, this) }]
            ] }, _attachEvents: function() { this._detachEvents(), this._applyEvents(this._events) }, _detachEvents: function() { this._unapplyEvents(this._events) }, _attachSecondaryEvents: function() { this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents) }, _detachSecondaryEvents: function() { this._unapplyEvents(this._secondaryEvents) }, _trigger: function(b, c) { var d = c || this.dates.get(-1),
                e = this._utc_to_local(d);
            this.element.trigger({ type: b, date: e, dates: a.map(this.dates, this._utc_to_local), format: a.proxy(function(a, b) { 0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format; var c = this.dates.get(a); return r.formatDate(c, b, this.o.language) }, this) }) }, show: function() { return this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1 ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this) }, hide: function() { return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this) }, destroy: function() { return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this }, paste: function(b) { var c; if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && -1 !== a.inArray("text/plain", b.originalEvent.clipboardData.types)) c = b.originalEvent.clipboardData.getData("text/plain");
            else { if (!window.clipboardData) return;
                c = window.clipboardData.getData("Text") }
            this.setDate(c), this.update(), b.preventDefault() }, _utc_to_local: function(a) { return a && new Date(a.getTime() + 6e4 * a.getTimezoneOffset()) }, _local_to_utc: function(a) { return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset()) }, _zero_time: function(a) { return a && new Date(a.getFullYear(), a.getMonth(), a.getDate()) }, _zero_utc_time: function(a) { return a && new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())) }, getDates: function() { return a.map(this.dates, this._utc_to_local) }, getUTCDates: function() { return a.map(this.dates, function(a) { return new Date(a) }) }, getDate: function() { return this._utc_to_local(this.getUTCDate()) }, getUTCDate: function() { var a = this.dates.get(-1); return "undefined" != typeof a ? new Date(a) : null }, clearDates: function() { this.inputField && this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide() }, setDates: function() { var b = a.isArray(arguments[0]) ? arguments[0] : arguments; return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this }, setUTCDates: function() { var b = a.isArray(arguments[0]) ? arguments[0] : arguments; return this.update.apply(this, a.map(b, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this }, setDate: f("setDates"), setUTCDate: f("setUTCDates"), remove: f("destroy"), setValue: function() { var a = this.getFormattedDate(); return this.inputField.val(a), this }, getFormattedDate: function(c) { c === b && (c = this.o.format); var d = this.o.language; return a.map(this.dates, function(a) { return r.formatDate(a, c, d) }).join(this.o.multidateSeparator) }, getStartDate: function() { return this.o.startDate }, setStartDate: function(a) { return this._process_options({ startDate: a }), this.update(), this.updateNavArrows(), this }, getEndDate: function() { return this.o.endDate }, setEndDate: function(a) { return this._process_options({ endDate: a }), this.update(), this.updateNavArrows(), this }, setDaysOfWeekDisabled: function(a) { return this._process_options({ daysOfWeekDisabled: a }), this.update(), this.updateNavArrows(), this }, setDaysOfWeekHighlighted: function(a) { return this._process_options({ daysOfWeekHighlighted: a }), this.update(), this }, setDatesDisabled: function(a) { this._process_options({ datesDisabled: a }), this.update(), this.updateNavArrows() }, place: function() { if (this.isInline) return this; var b = this.picker.outerWidth(),
                c = this.picker.outerHeight(),
                d = 10,
                e = a(this.o.container),
                f = e.width(),
                g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(),
                h = e.offset(),
                i = [];
            this.element.parents().each(function() { var b = a(this).css("z-index"); "auto" !== b && 0 !== b && i.push(parseInt(b)) }); var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
                k = this.component ? this.component.parent().offset() : this.element.offset(),
                l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                n = k.left - h.left,
                o = k.top - h.top; "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n += m - b) : this.picker.addClass("datepicker-orient-left"); var p, q = this.o.orientation.y; if ("auto" === q && (p = -g + o - c, q = 0 > p ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) { var r = f - (n + m);
                this.picker.css({ top: o, right: r, zIndex: j }) } else this.picker.css({ top: o, left: n, zIndex: j }); return this }, _allow_update: !0, update: function() { if (!this._allow_update) return this; var b = this.dates.copy(),
                c = [],
                d = !1; return arguments.length ? (a.each(arguments, a.proxy(function(a, b) { b instanceof Date && (b = this._local_to_utc(b)), c.push(b) }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function(a) { return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear) }, this)), c = a.grep(c, a.proxy(function(a) { return !this.dateWithinRange(a) || !a }, this), !0), this.dates.replace(c), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate, d ? this.setValue() : c.length && String(b) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && b.length && this._trigger("clearDate"), this.fill(), this.element.change(), this }, fillDow: function() { var b = this.o.weekStart,
                c = "<tr>"; for (this.o.calendarWeeks && (this.picker.find(".datepicker-days .datepicker-switch").attr("colspan", function(a, b) { return parseInt(b) + 1 }), c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7;) c += '<th class="dow', a.inArray(b, this.o.daysOfWeekDisabled) > -1 && (c += " disabled"), c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
            c += "</tr>", this.picker.find(".datepicker-days thead").append(c) }, fillMonths: function() { for (var a = this._utc_to_local(this.viewDate), b = "", c = 0; 12 > c;) { var d = a && a.getMonth() === c ? " focused" : "";
                b += '<span class="month' + d + '">' + q[this.o.language].monthsShort[c++] + "</span>" }
            this.picker.find(".datepicker-months td").html(b) }, setRange: function(b) { b && b.length ? this.range = a.map(b, function(a) { return a.valueOf() }) : delete this.range, this.fill() }, getClassNames: function(b) { var c = [],
                d = this.viewDate.getUTCFullYear(),
                e = this.viewDate.getUTCMonth(),
                f = new Date; return b.getUTCFullYear() < d || b.getUTCFullYear() === d && b.getUTCMonth() < e ? c.push("old") : (b.getUTCFullYear() > d || b.getUTCFullYear() === d && b.getUTCMonth() > e) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && b.getUTCFullYear() === f.getFullYear() && b.getUTCMonth() === f.getMonth() && b.getUTCDate() === f.getDate() && c.push("today"), -1 !== this.dates.contains(b) && c.push("active"), this.dateWithinRange(b) || c.push("disabled"), this.dateIsDisabled(b) && c.push("disabled", "disabled-date"), -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) && c.push("highlighted"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c }, _fill_yearsView: function(c, d, e, f, g, h, i, j) { var k, l, m, n, o, p, q, r, s, t, u; for (k = "", l = this.picker.find(c), m = parseInt(g / e, 10) * e, o = parseInt(h / f, 10) * f, p = parseInt(i / f, 10) * f, n = a.map(this.dates, function(a) { return parseInt(a.getUTCFullYear() / f, 10) * f }), l.find(".datepicker-switch").text(m + "-" + (m + 9 * f)), q = m - f, r = -1; 11 > r; r += 1) s = [d], t = null, -1 === r ? s.push("old") : 10 === r && s.push("new"), -1 !== a.inArray(q, n) && s.push("active"), (o > q || q > p) && s.push("disabled"), q === this.viewDate.getFullYear() && s.push("focused"), j !== a.noop && (u = j(new Date(q, 0, 1)), u === b ? u = {} : "boolean" == typeof u ? u = { enabled: u } : "string" == typeof u && (u = { classes: u }), u.enabled === !1 && s.push("disabled"), u.classes && (s = s.concat(u.classes.split(/\s+/))), u.tooltip && (t = u.tooltip)), k += '<span class="' + s.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ">" + q + "</span>", q += f;
            l.find("td").html(k) }, fill: function() { var d, e, f = new Date(this.viewDate),
                g = f.getUTCFullYear(),
                h = f.getUTCMonth(),
                i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                m = q[this.o.language].today || q.en.today || "",
                n = q[this.o.language].clear || q.en.clear || "",
                o = q[this.o.language].titleFormat || q.en.titleFormat; if (!isNaN(g) && !isNaN(h)) { this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)), this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths(); var p = c(g, h - 1, 28),
                    s = r.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                p.setUTCDate(s), p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7); var t = new Date(p);
                p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf(); for (var u, v = []; p.valueOf() < t;) { if (p.getUTCDay() === this.o.weekStart && (v.push("<tr>"), this.o.calendarWeeks)) { var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                            x = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
                            y = new Date(Number(y = c(x.getUTCFullYear(), 0, 1)) + (11 - y.getUTCDay()) % 7 * 864e5),
                            z = (x - y) / 864e5 / 7 + 1;
                        v.push('<td class="cw">' + z + "</td>") }
                    u = this.getClassNames(p), u.push("day"), this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), e === b ? e = {} : "boolean" == typeof e ? e = { enabled: e } : "string" == typeof e && (e = { classes: e }), e.enabled === !1 && u.push("disabled"), e.classes && (u = u.concat(e.classes.split(/\s+/))), e.tooltip && (d = e.tooltip)), u = a.isFunction(a.uniqueSort) ? a.uniqueSort(u) : a.unique(u), v.push('<td class="' + u.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + ">" + p.getUTCDate() + "</td>"), d = null, p.getUTCDay() === this.o.weekEnd && v.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1) }
                this.picker.find(".datepicker-days tbody").empty().append(v.join("")); var A = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
                    B = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? A : g).end().find("span").removeClass("active"); if (a.each(this.dates, function(a, b) { b.getUTCFullYear() === g && B.eq(b.getUTCMonth()).addClass("active") }), (i > g || g > k) && B.addClass("disabled"), g === i && B.slice(0, j).addClass("disabled"), g === k && B.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) { var C = this;
                    a.each(B, function(c, d) { var e = new Date(g, c, 1),
                            f = C.o.beforeShowMonth(e);
                        f === b ? f = {} : "boolean" == typeof f ? f = { enabled: f } : "string" == typeof f && (f = { classes: f }), f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"), f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop("title", f.tooltip) }) }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, g, i, k, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, g, i, k, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, g, i, k, this.o.beforeShowCentury) } }, updateNavArrows: function() { if (this._allow_update) { var a = new Date(this.viewDate),
                    b = a.getUTCFullYear(),
                    c = a.getUTCMonth(); switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() && c <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() && c >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" }); break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        this.o.startDate !== -(1 / 0) && b <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".prev").css({ visibility: "hidden" }) : this.picker.find(".prev").css({ visibility: "visible" }), this.o.endDate !== 1 / 0 && b >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2 ? this.picker.find(".next").css({ visibility: "hidden" }) : this.picker.find(".next").css({ visibility: "visible" }) } } }, click: function(b) { b.preventDefault(), b.stopPropagation(); var e, f, g, h, i, j, k;
            e = a(b.target), e.hasClass("datepicker-switch") && this.showMode(1); var l = e.closest(".prev, .next");
            l.length > 0 && (f = r.modes[this.viewMode].navStep * (l.hasClass("prev") ? -1 : 1), 0 === this.viewMode ? (this.viewDate = this.moveMonth(this.viewDate, f), this._trigger("changeMonth", this.viewDate)) : (this.viewDate = this.moveYear(this.viewDate, f), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)), this.fill()), e.hasClass("today") && !e.hasClass("day") && (this.showMode(-2), this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("day") && (g = parseInt(e.text(), 10) || 1, h = this.viewDate.getUTCFullYear(), i = this.viewDate.getUTCMonth(), e.hasClass("old") && (0 === i ? (i = 11, h -= 1, j = !0, k = !0) : (i -= 1, j = !0)), e.hasClass("new") && (11 === i ? (i = 0, h += 1, j = !0, k = !0) : (i += 1, j = !0)), this._setDate(c(h, i, g)), k && this._trigger("changeYear", this.viewDate), j && this._trigger("changeMonth", this.viewDate)), e.hasClass("month") && (this.viewDate.setUTCDate(1), g = 1, i = e.parent().find("span").index(e), h = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(i), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode ? (this._setDate(c(h, i, g)), this.showMode()) : this.showMode(-1), this.fill()), (e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), g = 1, i = 0, h = parseInt(e.text(), 10) || 0, this.viewDate.setUTCFullYear(h), e.hasClass("year") && (this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(c(h, i, g))), e.hasClass("decade") && (this._trigger("changeDecade", this.viewDate), 3 === this.o.minViewMode && this._setDate(c(h, i, g))), e.hasClass("century") && (this._trigger("changeCentury", this.viewDate), 4 === this.o.minViewMode && this._setDate(c(h, i, g))), this.showMode(-1), this.fill())), this.picker.is(":visible") && this._focused_from && a(this._focused_from).focus(), delete this._focused_from }, _toggle_multidate: function(a) { var b = this.dates.contains(a); if (a || this.dates.clear(), -1 !== b ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0) }, _setDate: function(a, b) { b && "date" !== b || this._toggle_multidate(a && new Date(a)), b && "view" !== b || (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate"), this.inputField && this.inputField.change(), !this.o.autoclose || b && "date" !== b || this.hide() }, moveDay: function(a, b) { var c = new Date(a); return c.setUTCDate(a.getUTCDate() + b), c }, moveWeek: function(a, b) { return this.moveDay(a, 7 * b) }, moveMonth: function(a, b) { if (!g(a)) return this.o.defaultViewDate; if (!b) return a; var c, d, e = new Date(a.valueOf()),
                f = e.getUTCDate(),
                h = e.getUTCMonth(),
                i = Math.abs(b); if (b = b > 0 ? 1 : -1, 1 === i) d = -1 === b ? function() { return e.getUTCMonth() === h } : function() { return e.getUTCMonth() !== c }, c = h + b, e.setUTCMonth(c), (0 > c || c > 11) && (c = (c + 12) % 12);
            else { for (var j = 0; i > j; j++) e = this.moveMonth(e, b);
                c = e.getUTCMonth(), e.setUTCDate(f), d = function() { return c !== e.getUTCMonth() } } for (; d();) e.setUTCDate(--f), e.setUTCMonth(c); return e }, moveYear: function(a, b) { return this.moveMonth(a, 12 * b) }, moveAvailableDate: function(a, b, c) { do { if (a = this[c](a, b), !this.dateWithinRange(a)) return !1;
                c = "moveDay" } while (this.dateIsDisabled(a)); return a }, weekOfDateIsDisabled: function(b) { return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) }, dateIsDisabled: function(b) { return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function(a) { return e(b, a) }).length > 0 }, dateWithinRange: function(a) { return a >= this.o.startDate && a <= this.o.endDate }, keydown: function(a) { if (!this.picker.is(":visible")) return void((40 === a.keyCode || 27 === a.keyCode) && (this.show(), a.stopPropagation())); var b, c, d = !1,
                e = this.focusDate || this.viewDate; switch (a.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation(); break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                    b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? ((38 === a.keyCode || 40 === a.keyCode) && (b = 4 * b), c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && ((38 === a.keyCode || 40 === a.keyCode) && (b = 4 * b), c = this.moveAvailableDate(e, b, "moveYear")), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault()); break;
                case 13:
                    if (!this.o.forceParse) break;
                    e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide()); break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide() }
            d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField && this.inputField.change()) }, showMode: function(a) { a && (this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + a))), this.picker.children("div").hide().filter(".datepicker-" + r.modes[this.viewMode].clsName).show(), this.updateNavArrows() } };
    var l = function(b, c) { a(b).data("datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function(a) { return a.jquery ? a[0] : a }), delete c.inputs, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) { return a(b).data("datepicker") }), this.updateDates() };
    l.prototype = { updateDates: function() { this.dates = a.map(this.pickers, function(a) { return a.getUTCDate() }), this.updateRanges() }, updateRanges: function() { var b = a.map(this.dates, function(a) { return a.valueOf() });
            a.each(this.pickers, function(a, c) { c.setRange(b) }) }, dateUpdated: function(b) { if (!this.updating) { this.updating = !0; var c = a(b.target).data("datepicker"); if ("undefined" != typeof c) { var d = c.getUTCDate(),
                        e = a.inArray(b.target, this.inputs),
                        f = e - 1,
                        g = e + 1,
                        h = this.inputs.length; if (-1 !== e) { if (a.each(this.pickers, function(a, b) { b.getUTCDate() || b.setUTCDate(d) }), d < this.dates[f])
                            for (; f >= 0 && d < this.dates[f];) this.pickers[f--].setUTCDate(d);
                        else if (d > this.dates[g])
                            for (; h > g && d > this.dates[g];) this.pickers[g++].setUTCDate(d);
                        this.updateDates(), delete this.updating } } } }, remove: function() { a.map(this.pickers, function(a) { a.remove() }), delete this.element.data().datepicker } };
    var m = a.fn.datepicker,
        n = function(c) { var d = Array.apply(null, arguments);
            d.shift(); var e; if (this.each(function() { var b = a(this),
                        f = b.data("datepicker"),
                        g = "object" == typeof c && c; if (!f) { var j = h(this, "date"),
                            m = a.extend({}, o, j, g),
                            n = i(m.language),
                            p = a.extend({}, o, n, j, g);
                        b.hasClass("input-daterange") || p.inputs ? (a.extend(p, { inputs: p.inputs || b.find("input").toArray() }), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f) } "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d)) }), e === b || e instanceof k || e instanceof l) return this; if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)"); return e };
    a.fn.datepicker = n;
    var o = a.fn.datepicker.defaults = { assumeNearbyYear: !1, autoclose: !1, beforeShowDay: a.noop, beforeShowMonth: a.noop, beforeShowYear: a.noop, beforeShowDecade: a.noop, beforeShowCentury: a.noop, calendarWeeks: !1, clearBtn: !1, toggleActive: !1, daysOfWeekDisabled: [], daysOfWeekHighlighted: [], datesDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keyboardNavigation: !0, language: "en", minViewMode: 0, maxViewMode: 4, multidate: !1, multidateSeparator: ",", orientation: "auto", rtl: !1, startDate: -(1 / 0), startView: 0, todayBtn: !1, todayHighlight: !1, weekStart: 0, disableTouchKeyboard: !1, enableOnReadonly: !0, showOnFocus: !0, zIndexOffset: 10, container: "body", immediateUpdates: !1, title: "", templates: { leftArrow: "&laquo;", rightArrow: "&raquo;" } },
        p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = k;
    var q = a.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear", titleFormat: "MM yyyy" } },
        r = {
            modes: [{ clsName: "days", navFnc: "Month", navStep: 1 }, { clsName: "months", navFnc: "FullYear", navStep: 1 }, { clsName: "years", navFnc: "FullYear", navStep: 10 }, { clsName: "decades", navFnc: "FullDecade", navStep: 100 }, { clsName: "centuries", navFnc: "FullCentury", navStep: 1e3 }],
            isLeapYear: function(a) { return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 },
            getDaysInMonth: function(a, b) { return [31, r.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b] },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
            parseFormat: function(a) { if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a; var b = a.replace(this.validParts, "\x00").split("\x00"),
                    c = a.match(this.validParts); if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format."); return { separators: b, parts: c } },
            parseDate: function(e, f, g, h) {
                function i(a, b) { return b === !0 && (b = 10), 100 > a && (a += 2e3, a > (new Date).getFullYear() + b && (a -= 100)), a }

                function j() { var a = this.slice(0, s[n].length),
                        b = s[n].slice(0, a.length); return a.toLowerCase() === b.toLowerCase() } if (!e) return b; if (e instanceof Date) return e; if ("string" == typeof f && (f = r.parseFormat(f)), f.toValue) return f.toValue(e, f, g); var l, m, n, o, p = /([\-+]\d+)([dmwy])/,
                    s = e.match(/([\-+]\d+)([dmwy])/g),
                    t = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
                    u = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" }; if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)) { for (e = new Date, n = 0; n < s.length; n++) l = p.exec(s[n]), m = parseInt(l[1]), o = t[l[2]], e = k.prototype[o](e, m); return c(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()) } if ("undefined" != typeof u[e] && (e = u[e], s = e.match(/([\-+]\d+)([dmwy])/g), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e))) { for (e = new Date, n = 0; n < s.length; n++) l = p.exec(s[n]), m = parseInt(l[1]), o = t[l[2]], e = k.prototype[o](e, m); return c(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()) }
                s = e && e.match(this.nonpunctuation) || [], e = new Date; var v, w, x = {},
                    y = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    z = { yyyy: function(a, b) { return a.setUTCFullYear(h ? i(b, h) : b) }, yy: function(a, b) { return a.setUTCFullYear(h ? i(b, h) : b) }, m: function(a, b) { if (isNaN(a)) return a; for (b -= 1; 0 > b;) b += 12; for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) a.setUTCDate(a.getUTCDate() - 1); return a }, d: function(a, b) { return a.setUTCDate(b) } };
                z.M = z.MM = z.mm = z.m, z.dd = z.d, e = d(); var A = f.parts.slice(); if (s.length !== A.length && (A = a(A).filter(function(b, c) { return -1 !== a.inArray(c, y) }).toArray()), s.length === A.length) { var B; for (n = 0, B = A.length; B > n; n++) { if (v = parseInt(s[n], 10), l = A[n], isNaN(v)) switch (l) {
                            case "MM":
                                w = a(q[g].months).filter(j), v = a.inArray(w[0], q[g].months) + 1; break;
                            case "M":
                                w = a(q[g].monthsShort).filter(j), v = a.inArray(w[0], q[g].monthsShort) + 1 }
                        x[l] = v } var C, D; for (n = 0; n < y.length; n++) D = y[n], D in x && !isNaN(x[D]) && (C = new Date(e), z[D](C, x[D]), isNaN(C) || (e = C)) } return e },
            formatDate: function(b, c, d) {
                if (!b) return "";
                if ("string" == typeof c && (c = r.parseFormat(c)),
                    c.toDisplay) return c.toDisplay(b, c, d);
                var e = { d: b.getUTCDate(), D: q[d].daysShort[b.getUTCDay()], DD: q[d].days[b.getUTCDay()], m: b.getUTCMonth() + 1, M: q[d].monthsShort[b.getUTCMonth()], MM: q[d].months[b.getUTCMonth()], yy: b.getUTCFullYear().toString().substring(2), yyyy: b.getUTCFullYear() };
                e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = [];
                for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; h >= g; g++) f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
                return b.join("")
            },
            headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function() { return a.fn.datepicker = m, this }, a.fn.datepicker.version = "1.6.4", a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) { var c = a(this);
        c.data("datepicker") || (b.preventDefault(), n.call(c, "show")) }), a(function() { n.call(a('[data-provide="datepicker-inline"]')) })
});
;/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = function (b, c) { return void 0 === c && (c = "undefined" != typeof window ? require("jquery") : require("jquery")(b)), a(c), c } : a(jQuery) }(function (a) { var b = function () { if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd; var b; return function () { if (!b || !b.requirejs) { b ? c = b : b = {}; var a, c, d; !function (b) { function e(a, b) { return v.call(a, b) } function f(a, b) { var c, d, e, f, g, h, i, j, k, l, m, n, o = b && b.split("/"), p = t.map, q = p && p["*"] || {}; if (a) { for (a = a.split("/"), g = a.length - 1, t.nodeIdCompat && x.test(a[g]) && (a[g] = a[g].replace(x, "")), "." === a[0].charAt(0) && o && (n = o.slice(0, o.length - 1), a = n.concat(a)), k = 0; k < a.length; k++)if ("." === (m = a[k])) a.splice(k, 1), k -= 1; else if (".." === m) { if (0 === k || 1 === k && ".." === a[2] || ".." === a[k - 1]) continue; k > 0 && (a.splice(k - 1, 2), k -= 2) } a = a.join("/") } if ((o || q) && p) { for (c = a.split("/"), k = c.length; k > 0; k -= 1) { if (d = c.slice(0, k).join("/"), o) for (l = o.length; l > 0; l -= 1)if ((e = p[o.slice(0, l).join("/")]) && (e = e[d])) { f = e, h = k; break } if (f) break; !i && q && q[d] && (i = q[d], j = k) } !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/")) } return a } function g(a, c) { return function () { var d = w.call(arguments, 0); return "string" != typeof d[0] && 1 === d.length && d.push(null), o.apply(b, d.concat([a, c])) } } function h(a) { return function (b) { return f(b, a) } } function i(a) { return function (b) { r[a] = b } } function j(a) { if (e(s, a)) { var c = s[a]; delete s[a], u[a] = !0, n.apply(b, c) } if (!e(r, a) && !e(u, a)) throw new Error("No " + a); return r[a] } function k(a) { var b, c = a ? a.indexOf("!") : -1; return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a] } function l(a) { return a ? k(a) : [] } function m(a) { return function () { return t && t.config && t.config[a] || {} } } var n, o, p, q, r = {}, s = {}, t = {}, u = {}, v = Object.prototype.hasOwnProperty, w = [].slice, x = /\.js$/; p = function (a, b) { var c, d = k(a), e = d[0], g = b[1]; return a = d[1], e && (e = f(e, g), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(g)) : f(a, g) : (a = f(a, g), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c } }, q = { require: function (a) { return g(a) }, exports: function (a) { var b = r[a]; return void 0 !== b ? b : r[a] = {} }, module: function (a) { return { id: a, uri: "", exports: r[a], config: m(a) } } }, n = function (a, c, d, f) { var h, k, m, n, o, t, v, w = [], x = typeof d; if (f = f || a, t = l(f), "undefined" === x || "function" === x) { for (c = !c.length && d.length ? ["require", "exports", "module"] : c, o = 0; o < c.length; o += 1)if (n = p(c[o], t), "require" === (k = n.f)) w[o] = q.require(a); else if ("exports" === k) w[o] = q.exports(a), v = !0; else if ("module" === k) h = w[o] = q.module(a); else if (e(r, k) || e(s, k) || e(u, k)) w[o] = j(k); else { if (!n.p) throw new Error(a + " missing " + k); n.p.load(n.n, g(f, !0), i(k), {}), w[o] = r[k] } m = d ? d.apply(r[a], w) : void 0, a && (h && h.exports !== b && h.exports !== r[a] ? r[a] = h.exports : m === b && v || (r[a] = m)) } else a && (r[a] = d) }, a = c = o = function (a, c, d, e, f) { if ("string" == typeof a) return q[a] ? q[a](c) : j(p(a, l(c)).f); if (!a.splice) { if (t = a, t.deps && o(t.deps, t.callback), !c) return; c.splice ? (a = c, c = d, d = null) : a = b } return c = c || function () { }, "function" == typeof d && (d = e, e = f), e ? n(b, a, c, d) : setTimeout(function () { n(b, a, c, d) }, 4), o }, o.config = function (a) { return o(a) }, a._defined = r, d = function (a, b, c) { if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name"); b.splice || (c = b, b = []), e(r, a) || e(s, a) || (s[a] = [a, b, c]) }, d.amd = { jQuery: !0 } }(), b.requirejs = a, b.require = c, b.define = d } }(), b.define("almond", function () { }), b.define("jquery", [], function () { var b = a || $; return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b }), b.define("select2/utils", ["jquery"], function (a) { function b(a) { var b = a.prototype, c = []; for (var d in b) { "function" == typeof b[d] && ("constructor" !== d && c.push(d)) } return c } var c = {}; c.Extend = function (a, b) { function c() { this.constructor = a } var d = {}.hasOwnProperty; for (var e in b) d.call(b, e) && (a[e] = b[e]); return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a }, c.Decorate = function (a, c) { function d() { var b = Array.prototype.unshift, d = c.prototype.constructor.length, e = a.prototype.constructor; d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments) } function e() { this.constructor = d } var f = b(c), g = b(a); c.displayName = a.displayName, d.prototype = new e; for (var h = 0; h < g.length; h++) { var i = g[h]; d.prototype[i] = a.prototype[i] } for (var j = (function (a) { var b = function () { }; a in d.prototype && (b = d.prototype[a]); var e = c.prototype[a]; return function () { return Array.prototype.unshift.call(arguments, b), e.apply(this, arguments) } }), k = 0; k < f.length; k++) { var l = f[k]; d.prototype[l] = j(l) } return d }; var d = function () { this.listeners = {} }; return d.prototype.on = function (a, b) { this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b] }, d.prototype.trigger = function (a) { var b = Array.prototype.slice, c = b.call(arguments, 1); this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, d.prototype.invoke = function (a, b) { for (var c = 0, d = a.length; c < d; c++)a[c].apply(this, b) }, c.Observable = d, c.generateChars = function (a) { for (var b = "", c = 0; c < a; c++) { b += Math.floor(36 * Math.random()).toString(36) } return b }, c.bind = function (a, b) { return function () { a.apply(b, arguments) } }, c._convertData = function (a) { for (var b in a) { var c = b.split("-"), d = a; if (1 !== c.length) { for (var e = 0; e < c.length; e++) { var f = c[e]; f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f] } delete a[b] } } return a }, c.hasScroll = function (b, c) { var d = a(c), e = c.style.overflowX, f = c.style.overflowY; return (e !== f || "hidden" !== f && "visible" !== f) && ("scroll" === e || "scroll" === f || (d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth)) }, c.escapeMarkup = function (a) { var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) { return b[a] }) }, c.appendMany = function (b, c) { if ("1.7" === a.fn.jquery.substr(0, 3)) { var d = a(); a.map(c, function (a) { d = d.add(a) }), c = d } b.append(c) }, c }), b.define("select2/results", ["jquery", "./utils"], function (a, b) { function c(a, b, d) { this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this) } return b.Extend(c, b.Observable), c.prototype.render = function () { var b = a('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b }, c.prototype.clear = function () { this.$results.empty() }, c.prototype.displayMessage = function (b) { var c = this.options.get("escapeMarkup"); this.clear(), this.hideLoading(); var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), e = this.options.get("translations").get(b.message); d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d) }, c.prototype.hideMessages = function () { this.$results.find(".select2-results__message").remove() }, c.prototype.append = function (a) { this.hideLoading(); var b = []; if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" })); a.results = this.sort(a.results); for (var c = 0; c < a.results.length; c++) { var d = a.results[c], e = this.option(d); b.push(e) } this.$results.append(b) }, c.prototype.position = function (a, b) { b.find(".select2-results").append(a) }, c.prototype.sort = function (a) { return this.options.get("sorter")(a) }, c.prototype.highlightFirstItem = function () { var a = this.$results.find(".select2-results__option[aria-selected]"), b = a.filter("[aria-selected=true]"); b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible() }, c.prototype.setClasses = function () { var b = this; this.data.current(function (c) { var d = a.map(c, function (a) { return a.id.toString() }); b.$results.find(".select2-results__option[aria-selected]").each(function () { var b = a(this), c = a.data(this, "data"), e = "" + c.id; null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false") }) }) }, c.prototype.showLoading = function (a) { this.hideLoading(); var b = this.options.get("translations").get("searching"), c = { disabled: !0, loading: !0, text: b(a) }, d = this.option(c); d.className += " loading-results", this.$results.prepend(d) }, c.prototype.hideLoading = function () { this.$results.find(".loading-results").remove() }, c.prototype.option = function (b) { var c = document.createElement("li"); c.className = "select2-results__option"; var d = { role: "treeitem", "aria-selected": "false" }; b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]); for (var e in d) { var f = d[e]; c.setAttribute(e, f) } if (b.children) { var g = a(c), h = document.createElement("strong"); h.className = "select2-results__group"; a(h); this.template(b, h); for (var i = [], j = 0; j < b.children.length; j++) { var k = b.children[j], l = this.option(k); i.push(l) } var m = a("<ul></ul>", { class: "select2-results__options select2-results__options--nested" }); m.append(i), g.append(h), g.append(m) } else this.template(b, c); return a.data(c, "data", b), c }, c.prototype.bind = function (b, c) { var d = this, e = b.id + "-results"; this.$results.attr("id", e), b.on("results:all", function (a) { d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("results:append", function (a) { d.append(a.data), b.isOpen() && d.setClasses() }), b.on("query", function (a) { d.hideMessages(), d.showLoading(a) }), b.on("select", function () { b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("unselect", function () { b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("open", function () { d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible() }), b.on("close", function () { d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant") }), b.on("results:toggle", function () { var a = d.getHighlightedResults(); 0 !== a.length && a.trigger("mouseup") }), b.on("results:select", function () { var a = d.getHighlightedResults(); if (0 !== a.length) { var b = a.data("data"); "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b }) } }), b.on("results:previous", function () { var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a); if (0 !== c) { var e = c - 1; 0 === a.length && (e = 0); var f = b.eq(e); f.trigger("mouseenter"); var g = d.$results.offset().top, h = f.offset().top, i = d.$results.scrollTop() + (h - g); 0 === e ? d.$results.scrollTop(0) : h - g < 0 && d.$results.scrollTop(i) } }), b.on("results:next", function () { var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a), e = c + 1; if (!(e >= b.length)) { var f = b.eq(e); f.trigger("mouseenter"); var g = d.$results.offset().top + d.$results.outerHeight(!1), h = f.offset().top + f.outerHeight(!1), i = d.$results.scrollTop() + h - g; 0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i) } }), b.on("results:focus", function (a) { a.element.addClass("select2-results__option--highlighted") }), b.on("results:message", function (a) { d.displayMessage(a) }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) { var b = d.$results.scrollTop(), c = d.$results.get(0).scrollHeight - b + a.deltaY, e = a.deltaY > 0 && b - a.deltaY <= 0, f = a.deltaY < 0 && c <= d.$results.height(); e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation()) }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) { var c = a(this), e = c.data("data"); if ("true" === c.attr("aria-selected")) return void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})); d.trigger("select", { originalEvent: b, data: e }) }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) { var c = a(this).data("data"); d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) }) }) }, c.prototype.getHighlightedResults = function () { return this.$results.find(".select2-results__option--highlighted") }, c.prototype.destroy = function () { this.$results.remove() }, c.prototype.ensureHighlightVisible = function () { var a = this.getHighlightedResults(); if (0 !== a.length) { var b = this.$results.find("[aria-selected]"), c = b.index(a), d = this.$results.offset().top, e = a.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d; f -= 2 * a.outerHeight(!1), c <= 2 ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || g < 0) && this.$results.scrollTop(f) } }, c.prototype.template = function (b, c) { var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b, c); null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f) }, c }), b.define("select2/keys", [], function () { return { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 } }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) { function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) } return b.Extend(d, b.Observable), d.prototype.render = function () { var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b }, d.prototype.bind = function (a, b) { var d = this, e = (a.id, a.id + "-results"); this.container = a, this.$selection.on("focus", function (a) { d.trigger("focus", a) }), this.$selection.on("blur", function (a) { d._handleBlur(a) }), this.$selection.on("keydown", function (a) { d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault() }), a.on("results:focus", function (a) { d.$selection.attr("aria-activedescendant", a.data._resultId) }), a.on("selection:update", function (a) { d.update(a.data) }), a.on("open", function () { d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a) }), a.on("close", function () { d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a) }), a.on("enable", function () { d.$selection.attr("tabindex", d._tabindex) }), a.on("disable", function () { d.$selection.attr("tabindex", "-1") }) }, d.prototype._handleBlur = function (b) { var c = this; window.setTimeout(function () { document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b) }, 1) }, d.prototype._attachCloseHandler = function (b) { a(document.body).on("mousedown.select2." + b.id, function (b) { var c = a(b.target), d = c.closest(".select2"); a(".select2.select2-container--open").each(function () { var b = a(this); this != d[0] && b.data("element").select2("close") }) }) }, d.prototype._detachCloseHandler = function (b) { a(document.body).off("mousedown.select2." + b.id) }, d.prototype.position = function (a, b) { b.find(".selection").append(a) }, d.prototype.destroy = function () { this._detachCloseHandler(this.container) }, d.prototype.update = function (a) { throw new Error("The `update` method must be defined in child classes.") }, d }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) { function e() { e.__super__.constructor.apply(this, arguments) } return c.Extend(e, b), e.prototype.render = function () { var a = e.__super__.render.call(this); return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a }, e.prototype.bind = function (a, b) { var c = this; e.__super__.bind.apply(this, arguments); var d = a.id + "-container"; this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) { 1 === a.which && c.trigger("toggle", { originalEvent: a }) }), this.$selection.on("focus", function (a) { }), this.$selection.on("blur", function (a) { }), a.on("focus", function (b) { a.isOpen() || c.$selection.focus() }), a.on("selection:update", function (a) { c.update(a.data) }) }, e.prototype.clear = function () { this.$selection.find(".select2-selection__rendered").empty() }, e.prototype.display = function (a, b) { var c = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(c(a, b)) }, e.prototype.selectionContainer = function () { return a("<span></span>") }, e.prototype.update = function (a) { if (0 === a.length) return void this.clear(); var b = a[0], c = this.$selection.find(".select2-selection__rendered"), d = this.display(b, c); c.empty().append(d), c.prop("title", b.title || b.text) }, e }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) { function d(a, b) { d.__super__.constructor.apply(this, arguments) } return c.Extend(d, b), d.prototype.render = function () { var a = d.__super__.render.call(this); return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a }, d.prototype.bind = function (b, c) { var e = this; d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) { e.trigger("toggle", { originalEvent: a }) }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) { if (!e.options.get("disabled")) { var c = a(this), d = c.parent(), f = d.data("data"); e.trigger("unselect", { originalEvent: b, data: f }) } }) }, d.prototype.clear = function () { this.$selection.find(".select2-selection__rendered").empty() }, d.prototype.display = function (a, b) { var c = this.options.get("templateSelection"); return this.options.get("escapeMarkup")(c(a, b)) }, d.prototype.selectionContainer = function () { return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>') }, d.prototype.update = function (a) { if (this.clear(), 0 !== a.length) { for (var b = [], d = 0; d < a.length; d++) { var e = a[d], f = this.selectionContainer(), g = this.display(e, f); f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f) } var h = this.$selection.find(".select2-selection__rendered"); c.appendMany(h, b) } }, d }), b.define("select2/selection/placeholder", ["../utils"], function (a) { function b(a, b, c) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c) } return b.prototype.normalizePlaceholder = function (a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, b.prototype.createPlaceholder = function (a, b) { var c = this.selectionContainer(); return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c }, b.prototype.update = function (a, b) { var c = 1 == b.length && b[0].id != this.placeholder.id; if (b.length > 1 || c) return a.call(this, b); this.clear(); var d = this.createPlaceholder(this.placeholder); this.$selection.find(".select2-selection__rendered").append(d) }, b }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) { function c() { } return c.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) { d._handleClear(a) }), b.on("keypress", function (a) { d._handleKeyboardClear(a, b) }) }, c.prototype._handleClear = function (a, b) { if (!this.options.get("disabled")) { var c = this.$selection.find(".select2-selection__clear"); if (0 !== c.length) { b.stopPropagation(); for (var d = c.data("data"), e = 0; e < d.length; e++) { var f = { data: d[e] }; if (this.trigger("unselect", f), f.prevented) return } this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {}) } } }, c.prototype._handleKeyboardClear = function (a, c, d) { d.isOpen() || c.which != b.DELETE && c.which != b.BACKSPACE || this._handleClear(c) }, c.prototype.update = function (b, c) { if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) { var d = a('<span class="select2-selection__clear">&times;</span>'); d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d) } }, c }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) { function d(a, b, c) { a.call(this, b, c) } return d.prototype.render = function (b) { var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'); this.$searchContainer = c, this.$search = c.find("input"); var d = b.call(this); return this._transferTabIndex(), d }, d.prototype.bind = function (a, b, d) { var e = this; a.call(this, b, d), b.on("open", function () { e.$search.trigger("focus") }), b.on("close", function () { e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus") }), b.on("enable", function () { e.$search.prop("disabled", !1), e._transferTabIndex() }), b.on("disable", function () { e.$search.prop("disabled", !0) }), b.on("focus", function (a) { e.$search.trigger("focus") }), b.on("results:focus", function (a) { e.$search.attr("aria-activedescendant", a.id) }), this.$selection.on("focusin", ".select2-search--inline", function (a) { e.trigger("focus", a) }), this.$selection.on("focusout", ".select2-search--inline", function (a) { e._handleBlur(a) }), this.$selection.on("keydown", ".select2-search--inline", function (a) { if (a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(), a.which === c.BACKSPACE && "" === e.$search.val()) { var b = e.$searchContainer.prev(".select2-selection__choice"); if (b.length > 0) { var d = b.data("data"); e.searchRemoveChoice(d), a.preventDefault() } } }); var f = document.documentMode, g = f && f <= 11; this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) { if (g) return void e.$selection.off("input.search input.searchcheck"); e.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) { if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck"); var b = a.which; b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a) }) }, d.prototype._transferTabIndex = function (a) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, d.prototype.createPlaceholder = function (a, b) { this.$search.attr("placeholder", b.text) }, d.prototype.update = function (a, b) { var c = this.$search[0] == document.activeElement; this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus() }, d.prototype.handleSearch = function () { if (this.resizeSearch(), !this._keyUpPrevented) { var a = this.$search.val(); this.trigger("query", { term: a }) } this._keyUpPrevented = !1 }, d.prototype.searchRemoveChoice = function (a, b) { this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch() }, d.prototype.resizeSearch = function () { this.$search.css("width", "25px"); var a = ""; if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth(); else { a = .75 * (this.$search.val().length + 1) + "em" } this.$search.css("width", a) }, d }), b.define("select2/selection/eventRelay", ["jquery"], function (a) { function b() { } return b.prototype.bind = function (b, c, d) { var e = this, f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], g = ["opening", "closing", "selecting", "unselecting"]; b.call(this, c, d), c.on("*", function (b, c) { if (-1 !== a.inArray(b, f)) { c = c || {}; var d = a.Event("select2:" + b, { params: c }); e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented()) } }) }, b }), b.define("select2/translation", ["jquery", "require"], function (a, b) { function c(a) { this.dict = a || {} } return c.prototype.all = function () { return this.dict }, c.prototype.get = function (a) { return this.dict[a] }, c.prototype.extend = function (b) { this.dict = a.extend({}, b.all(), this.dict) }, c._cache = {}, c.loadPath = function (a) { if (!(a in c._cache)) { var d = b(a); c._cache[a] = d } return new c(c._cache[a]) }, c }), b.define("select2/diacritics", [], function () { return { "â’¶": "A", "ï¼¡": "A", "Ã€": "A", "Ã": "A", "Ã‚": "A", "áº¦": "A", "áº¤": "A", "áºª": "A", "áº¨": "A", "Ãƒ": "A", "Ä€": "A", "Ä‚": "A", "áº°": "A", "áº®": "A", "áº´": "A", "áº²": "A", "È¦": "A", "Ç ": "A", "Ã„": "A", "Çž": "A", "áº¢": "A", "Ã…": "A", "Çº": "A", "Ç": "A", "È€": "A", "È‚": "A", "áº ": "A", "áº¬": "A", "áº¶": "A", "á¸€": "A", "Ä„": "A", "Èº": "A", "â±¯": "A", "êœ²": "AA", "Ã†": "AE", "Ç¼": "AE", "Ç¢": "AE", "êœ´": "AO", "êœ¶": "AU", "êœ¸": "AV", "êœº": "AV", "êœ¼": "AY", "â’·": "B", "ï¼¢": "B", "á¸‚": "B", "á¸„": "B", "á¸†": "B", "Éƒ": "B", "Æ‚": "B", "Æ": "B", "â’¸": "C", "ï¼£": "C", "Ä†": "C", "Äˆ": "C", "ÄŠ": "C", "ÄŒ": "C", "Ã‡": "C", "á¸ˆ": "C", "Æ‡": "C", "È»": "C", "êœ¾": "C", "â’¹": "D", "ï¼¤": "D", "á¸Š": "D", "ÄŽ": "D", "á¸Œ": "D", "á¸": "D", "á¸’": "D", "á¸Ž": "D", "Ä": "D", "Æ‹": "D", "ÆŠ": "D", "Æ‰": "D", "ê¹": "D", "Ç±": "DZ", "Ç„": "DZ", "Ç²": "Dz", "Ç…": "Dz", "â’º": "E", "ï¼¥": "E", "Ãˆ": "E", "Ã‰": "E", "ÃŠ": "E", "á»€": "E", "áº¾": "E", "á»„": "E", "á»‚": "E", "áº¼": "E", "Ä’": "E", "á¸”": "E", "á¸–": "E", "Ä”": "E", "Ä–": "E", "Ã‹": "E", "áºº": "E", "Äš": "E", "È„": "E", "È†": "E", "áº¸": "E", "á»†": "E", "È¨": "E", "á¸œ": "E", "Ä˜": "E", "á¸˜": "E", "á¸š": "E", "Æ": "E", "ÆŽ": "E", "â’»": "F", "ï¼¦": "F", "á¸ž": "F", "Æ‘": "F", "ê»": "F", "â’¼": "G", "ï¼§": "G", "Ç´": "G", "Äœ": "G", "á¸ ": "G", "Äž": "G", "Ä ": "G", "Ç¦": "G", "Ä¢": "G", "Ç¤": "G", "Æ“": "G", "êž ": "G", "ê½": "G", "ê¾": "G", "â’½": "H", "ï¼¨": "H", "Ä¤": "H", "á¸¢": "H", "á¸¦": "H", "Èž": "H", "á¸¤": "H", "á¸¨": "H", "á¸ª": "H", "Ä¦": "H", "â±§": "H", "â±µ": "H", "êž": "H", "â’¾": "I", "ï¼©": "I", "ÃŒ": "I", "Ã": "I", "ÃŽ": "I", "Ä¨": "I", "Äª": "I", "Ä¬": "I", "Ä°": "I", "Ã": "I", "á¸®": "I", "á»ˆ": "I", "Ç": "I", "Èˆ": "I", "ÈŠ": "I", "á»Š": "I", "Ä®": "I", "á¸¬": "I", "Æ—": "I", "â’¿": "J", "ï¼ª": "J", "Ä´": "J", "Éˆ": "J", "â“€": "K", "ï¼«": "K", "á¸°": "K", "Ç¨": "K", "á¸²": "K", "Ä¶": "K", "á¸´": "K", "Æ˜": "K", "â±©": "K", "ê€": "K", "ê‚": "K", "ê„": "K", "êž¢": "K", "â“": "L", "ï¼¬": "L", "Ä¿": "L", "Ä¹": "L", "Ä½": "L", "á¸¶": "L", "á¸¸": "L", "Ä»": "L", "á¸¼": "L", "á¸º": "L", "Å": "L", "È½": "L", "â±¢": "L", "â± ": "L", "êˆ": "L", "ê†": "L", "êž€": "L", "Ç‡": "LJ", "Çˆ": "Lj", "â“‚": "M", "ï¼­": "M", "á¸¾": "M", "á¹€": "M", "á¹‚": "M", "â±®": "M", "Æœ": "M", "â“ƒ": "N", "ï¼®": "N", "Ç¸": "N", "Åƒ": "N", "Ã‘": "N", "á¹„": "N", "Å‡": "N", "á¹†": "N", "Å…": "N", "á¹Š": "N", "á¹ˆ": "N", "È ": "N", "Æ": "N", "êž": "N", "êž¤": "N", "ÇŠ": "NJ", "Ç‹": "Nj", "â“„": "O", "ï¼¯": "O", "Ã’": "O", "Ã“": "O", "Ã”": "O", "á»’": "O", "á»": "O", "á»–": "O", "á»”": "O", "Ã•": "O", "á¹Œ": "O", "È¬": "O", "á¹Ž": "O", "ÅŒ": "O", "á¹": "O", "á¹’": "O", "ÅŽ": "O", "È®": "O", "È°": "O", "Ã–": "O", "Èª": "O", "á»Ž": "O", "Å": "O", "Ç‘": "O", "ÈŒ": "O", "ÈŽ": "O", "Æ ": "O", "á»œ": "O", "á»š": "O", "á» ": "O", "á»ž": "O", "á»¢": "O", "á»Œ": "O", "á»˜": "O", "Çª": "O", "Ç¬": "O", "Ã˜": "O", "Ç¾": "O", "Æ†": "O", "ÆŸ": "O", "êŠ": "O", "êŒ": "O", "Æ¢": "OI", "êŽ": "OO", "È¢": "OU", "â“…": "P", "ï¼°": "P", "á¹”": "P", "á¹–": "P", "Æ¤": "P", "â±£": "P", "ê": "P", "ê’": "P", "ê”": "P", "â“†": "Q", "ï¼±": "Q", "ê–": "Q", "ê˜": "Q", "ÉŠ": "Q", "â“‡": "R", "ï¼²": "R", "Å”": "R", "á¹˜": "R", "Å˜": "R", "È": "R", "È’": "R", "á¹š": "R", "á¹œ": "R", "Å–": "R", "á¹ž": "R", "ÉŒ": "R", "â±¤": "R", "êš": "R", "êž¦": "R", "êž‚": "R", "â“ˆ": "S", "ï¼³": "S", "áºž": "S", "Åš": "S", "á¹¤": "S", "Åœ": "S", "á¹ ": "S", "Å ": "S", "á¹¦": "S", "á¹¢": "S", "á¹¨": "S", "È˜": "S", "Åž": "S", "â±¾": "S", "êž¨": "S", "êž„": "S", "â“‰": "T", "ï¼´": "T", "á¹ª": "T", "Å¤": "T", "á¹¬": "T", "Èš": "T", "Å¢": "T", "á¹°": "T", "á¹®": "T", "Å¦": "T", "Æ¬": "T", "Æ®": "T", "È¾": "T", "êž†": "T", "êœ¨": "TZ", "â“Š": "U", "ï¼µ": "U", "Ã™": "U", "Ãš": "U", "Ã›": "U", "Å¨": "U", "á¹¸": "U", "Åª": "U", "á¹º": "U", "Å¬": "U", "Ãœ": "U", "Ç›": "U", "Ç—": "U", "Ç•": "U", "Ç™": "U", "á»¦": "U", "Å®": "U", "Å°": "U", "Ç“": "U", "È”": "U", "È–": "U", "Æ¯": "U", "á»ª": "U", "á»¨": "U", "á»®": "U", "á»¬": "U", "á»°": "U", "á»¤": "U", "á¹²": "U", "Å²": "U", "á¹¶": "U", "á¹´": "U", "É„": "U", "â“‹": "V", "ï¼¶": "V", "á¹¼": "V", "á¹¾": "V", "Æ²": "V", "êž": "V", "É…": "V", "ê ": "VY", "â“Œ": "W", "ï¼·": "W", "áº€": "W", "áº‚": "W", "Å´": "W", "áº†": "W", "áº„": "W", "áºˆ": "W", "â±²": "W", "â“": "X", "ï¼¸": "X", "áºŠ": "X", "áºŒ": "X", "â“Ž": "Y", "ï¼¹": "Y", "á»²": "Y", "Ã": "Y", "Å¶": "Y", "á»¸": "Y", "È²": "Y", "áºŽ": "Y", "Å¸": "Y", "á»¶": "Y", "á»´": "Y", "Æ³": "Y", "ÉŽ": "Y", "á»¾": "Y", "â“": "Z", "ï¼º": "Z", "Å¹": "Z", "áº": "Z", "Å»": "Z", "Å½": "Z", "áº’": "Z", "áº”": "Z", "Æµ": "Z", "È¤": "Z", "â±¿": "Z", "â±«": "Z", "ê¢": "Z", "â“": "a", "ï½": "a", "áºš": "a", "Ã ": "a", "Ã¡": "a", "Ã¢": "a", "áº§": "a", "áº¥": "a", "áº«": "a", "áº©": "a", "Ã£": "a", "Ä": "a", "Äƒ": "a", "áº±": "a", "áº¯": "a", "áºµ": "a", "áº³": "a", "È§": "a", "Ç¡": "a", "Ã¤": "a", "ÇŸ": "a", "áº£": "a", "Ã¥": "a", "Ç»": "a", "ÇŽ": "a", "È": "a", "Èƒ": "a", "áº¡": "a", "áº­": "a", "áº·": "a", "á¸": "a", "Ä…": "a", "â±¥": "a", "É": "a", "êœ³": "aa", "Ã¦": "ae", "Ç½": "ae", "Ç£": "ae", "êœµ": "ao", "êœ·": "au", "êœ¹": "av", "êœ»": "av", "êœ½": "ay", "â“‘": "b", "ï½‚": "b", "á¸ƒ": "b", "á¸…": "b", "á¸‡": "b", "Æ€": "b", "Æƒ": "b", "É“": "b", "â“’": "c", "ï½ƒ": "c", "Ä‡": "c", "Ä‰": "c", "Ä‹": "c", "Ä": "c", "Ã§": "c", "á¸‰": "c", "Æˆ": "c", "È¼": "c", "êœ¿": "c", "â†„": "c", "â““": "d", "ï½„": "d", "á¸‹": "d", "Ä": "d", "á¸": "d", "á¸‘": "d", "á¸“": "d", "á¸": "d", "Ä‘": "d", "ÆŒ": "d", "É–": "d", "É—": "d", "êº": "d", "Ç³": "dz", "Ç†": "dz", "â“”": "e", "ï½…": "e", "Ã¨": "e", "Ã©": "e", "Ãª": "e", "á»": "e", "áº¿": "e", "á»…": "e", "á»ƒ": "e", "áº½": "e", "Ä“": "e", "á¸•": "e", "á¸—": "e", "Ä•": "e", "Ä—": "e", "Ã«": "e", "áº»": "e", "Ä›": "e", "È…": "e", "È‡": "e", "áº¹": "e", "á»‡": "e", "È©": "e", "á¸": "e", "Ä™": "e", "á¸™": "e", "á¸›": "e", "É‡": "e", "É›": "e", "Ç": "e", "â“•": "f", "ï½†": "f", "á¸Ÿ": "f", "Æ’": "f", "ê¼": "f", "â“–": "g", "ï½‡": "g", "Çµ": "g", "Ä": "g", "á¸¡": "g", "ÄŸ": "g", "Ä¡": "g", "Ç§": "g", "Ä£": "g", "Ç¥": "g", "É ": "g", "êž¡": "g", "áµ¹": "g", "ê¿": "g", "â“—": "h", "ï½ˆ": "h", "Ä¥": "h", "á¸£": "h", "á¸§": "h", "ÈŸ": "h", "á¸¥": "h", "á¸©": "h", "á¸«": "h", "áº–": "h", "Ä§": "h", "â±¨": "h", "â±¶": "h", "É¥": "h", "Æ•": "hv", "â“˜": "i", "ï½‰": "i", "Ã¬": "i", "Ã­": "i", "Ã®": "i", "Ä©": "i", "Ä«": "i", "Ä­": "i", "Ã¯": "i", "á¸¯": "i", "á»‰": "i", "Ç": "i", "È‰": "i", "È‹": "i", "á»‹": "i", "Ä¯": "i", "á¸­": "i", "É¨": "i", "Ä±": "i", "â“™": "j", "ï½Š": "j", "Äµ": "j", "Ç°": "j", "É‰": "j", "â“š": "k", "ï½‹": "k", "á¸±": "k", "Ç©": "k", "á¸³": "k", "Ä·": "k", "á¸µ": "k", "Æ™": "k", "â±ª": "k", "ê": "k", "êƒ": "k", "ê…": "k", "êž£": "k", "â“›": "l", "ï½Œ": "l", "Å€": "l", "Äº": "l", "Ä¾": "l", "á¸·": "l", "á¸¹": "l", "Ä¼": "l", "á¸½": "l", "á¸»": "l", "Å¿": "l", "Å‚": "l", "Æš": "l", "É«": "l", "â±¡": "l", "ê‰": "l", "êž": "l", "ê‡": "l", "Ç‰": "lj", "â“œ": "m", "ï½": "m", "á¸¿": "m", "á¹": "m", "á¹ƒ": "m", "É±": "m", "É¯": "m", "â“": "n", "ï½Ž": "n", "Ç¹": "n", "Å„": "n", "Ã±": "n", "á¹…": "n", "Åˆ": "n", "á¹‡": "n", "Å†": "n", "á¹‹": "n", "á¹‰": "n", "Æž": "n", "É²": "n", "Å‰": "n", "êž‘": "n", "êž¥": "n", "ÇŒ": "nj", "â“ž": "o", "ï½": "o", "Ã²": "o", "Ã³": "o", "Ã´": "o", "á»“": "o", "á»‘": "o", "á»—": "o", "á»•": "o", "Ãµ": "o", "á¹": "o", "È­": "o", "á¹": "o", "Å": "o", "á¹‘": "o", "á¹“": "o", "Å": "o", "È¯": "o", "È±": "o", "Ã¶": "o", "È«": "o", "á»": "o", "Å‘": "o", "Ç’": "o", "È": "o", "È": "o", "Æ¡": "o", "á»": "o", "á»›": "o", "á»¡": "o", "á»Ÿ": "o", "á»£": "o", "á»": "o", "á»™": "o", "Ç«": "o", "Ç­": "o", "Ã¸": "o", "Ç¿": "o", "É”": "o", "ê‹": "o", "ê": "o", "Éµ": "o", "Æ£": "oi", "È£": "ou", "ê": "oo", "â“Ÿ": "p", "ï½": "p", "á¹•": "p", "á¹—": "p", "Æ¥": "p", "áµ½": "p", "ê‘": "p", "ê“": "p", "ê•": "p", "â“ ": "q", "ï½‘": "q", "É‹": "q", "ê—": "q", "ê™": "q", "â“¡": "r", "ï½’": "r", "Å•": "r", "á¹™": "r", "Å™": "r", "È‘": "r", "È“": "r", "á¹›": "r", "á¹": "r", "Å—": "r", "á¹Ÿ": "r", "É": "r", "É½": "r", "ê›": "r", "êž§": "r", "êžƒ": "r", "â“¢": "s", "ï½“": "s", "ÃŸ": "s", "Å›": "s", "á¹¥": "s", "Å": "s", "á¹¡": "s", "Å¡": "s", "á¹§": "s", "á¹£": "s", "á¹©": "s", "È™": "s", "ÅŸ": "s", "È¿": "s", "êž©": "s", "êž…": "s", "áº›": "s", "â“£": "t", "ï½”": "t", "á¹«": "t", "áº—": "t", "Å¥": "t", "á¹­": "t", "È›": "t", "Å£": "t", "á¹±": "t", "á¹¯": "t", "Å§": "t", "Æ­": "t", "Êˆ": "t", "â±¦": "t", "êž‡": "t", "êœ©": "tz", "â“¤": "u", "ï½•": "u", "Ã¹": "u", "Ãº": "u", "Ã»": "u", "Å©": "u", "á¹¹": "u", "Å«": "u", "á¹»": "u", "Å­": "u", "Ã¼": "u", "Çœ": "u", "Ç˜": "u", "Ç–": "u", "Çš": "u", "á»§": "u", "Å¯": "u", "Å±": "u", "Ç”": "u", "È•": "u", "È—": "u", "Æ°": "u", "á»«": "u", "á»©": "u", "á»¯": "u", "á»­": "u", "á»±": "u", "á»¥": "u", "á¹³": "u", "Å³": "u", "á¹·": "u", "á¹µ": "u", "Ê‰": "u", "â“¥": "v", "ï½–": "v", "á¹½": "v", "á¹¿": "v", "Ê‹": "v", "êŸ": "v", "ÊŒ": "v", "ê¡": "vy", "â“¦": "w", "ï½—": "w", "áº": "w", "áºƒ": "w", "Åµ": "w", "áº‡": "w", "áº…": "w", "áº˜": "w", "áº‰": "w", "â±³": "w", "â“§": "x", "ï½˜": "x", "áº‹": "x", "áº": "x", "â“¨": "y", "ï½™": "y", "á»³": "y", "Ã½": "y", "Å·": "y", "á»¹": "y", "È³": "y", "áº": "y", "Ã¿": "y", "á»·": "y", "áº™": "y", "á»µ": "y", "Æ´": "y", "É": "y", "á»¿": "y", "â“©": "z", "ï½š": "z", "Åº": "z", "áº‘": "z", "Å¼": "z", "Å¾": "z", "áº“": "z", "áº•": "z", "Æ¶": "z", "È¥": "z", "É€": "z", "â±¬": "z", "ê£": "z", "Î†": "Î‘", "Îˆ": "Î•", "Î‰": "Î—", "ÎŠ": "Î™", "Îª": "Î™", "ÎŒ": "ÎŸ", "ÎŽ": "Î¥", "Î«": "Î¥", "Î": "Î©", "Î¬": "Î±", "Î­": "Îµ", "Î®": "Î·", "Î¯": "Î¹", "ÏŠ": "Î¹", "Î": "Î¹", "ÏŒ": "Î¿", "Ï": "Ï…", "Ï‹": "Ï…", "Î°": "Ï…", "Ï‰": "Ï‰", "Ï‚": "Ïƒ" } }), b.define("select2/data/base", ["../utils"], function (a) { function b(a, c) { b.__super__.constructor.call(this) } return a.Extend(b, a.Observable), b.prototype.current = function (a) { throw new Error("The `current` method must be defined in child classes.") }, b.prototype.query = function (a, b) { throw new Error("The `query` method must be defined in child classes.") }, b.prototype.bind = function (a, b) { }, b.prototype.destroy = function () { }, b.prototype.generateResultId = function (b, c) { var d = b.id + "-result-"; return d += a.generateChars(4), null != c.id ? d += "-" + c.id.toString() : d += "-" + a.generateChars(4), d }, b }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) { function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) } return b.Extend(d, a), d.prototype.current = function (a) { var b = [], d = this; this.$element.find(":selected").each(function () { var a = c(this), e = d.item(a); b.push(e) }), a(b) }, d.prototype.select = function (a) { var b = this; if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change"); if (this.$element.prop("multiple")) this.current(function (d) { var e = []; a = [a], a.push.apply(a, d); for (var f = 0; f < a.length; f++) { var g = a[f].id; -1 === c.inArray(g, e) && e.push(g) } b.$element.val(e), b.$element.trigger("change") }); else { var d = a.id; this.$element.val(d), this.$element.trigger("change") } }, d.prototype.unselect = function (a) { var b = this; if (this.$element.prop("multiple")) { if (a.selected = !1, c(a.element).is("option")) return a.element.selected = !1, void this.$element.trigger("change"); this.current(function (d) { for (var e = [], f = 0; f < d.length; f++) { var g = d[f].id; g !== a.id && -1 === c.inArray(g, e) && e.push(g) } b.$element.val(e), b.$element.trigger("change") }) } }, d.prototype.bind = function (a, b) { var c = this; this.container = a, a.on("select", function (a) { c.select(a.data) }), a.on("unselect", function (a) { c.unselect(a.data) }) }, d.prototype.destroy = function () { this.$element.find("*").each(function () { c.removeData(this, "data") }) }, d.prototype.query = function (a, b) { var d = [], e = this; this.$element.children().each(function () { var b = c(this); if (b.is("option") || b.is("optgroup")) { var f = e.item(b), g = e.matches(a, f); null !== g && d.push(g) } }), b({ results: d }) }, d.prototype.addOptions = function (a) { b.appendMany(this.$element, a) }, d.prototype.option = function (a) { var b; a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), void 0 !== a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title); var d = c(b), e = this._normalizeItem(a); return e.element = b, c.data(b, "data", e), d }, d.prototype.item = function (a) { var b = {}; if (null != (b = c.data(a[0], "data"))) return b; if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") }; else if (a.is("optgroup")) { b = { text: a.prop("label"), children: [], title: a.prop("title") }; for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) { var g = c(d[f]), h = this.item(g); e.push(h) } b.children = e } return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b }, d.prototype._normalizeItem = function (a) { c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a); var b = { selected: !1, disabled: !1 }; return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a) }, d.prototype.matches = function (a, b) { return this.options.get("matcher")(a, b) }, d }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) { function d(a, b) { var c = b.get("data") || []; d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c)) } return b.Extend(d, a), d.prototype.select = function (a) { var b = this.$element.find("option").filter(function (b, c) { return c.value == a.id.toString() }); 0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a) }, d.prototype.convertToOptions = function (a) { function d(a) { return function () { return c(this).val() == a.id } } for (var e = this, f = this.$element.find("option"), g = f.map(function () { return e.item(c(this)).id }).get(), h = [], i = 0; i < a.length; i++) { var j = this._normalizeItem(a[i]); if (c.inArray(j.id, g) >= 0) { var k = f.filter(d(j)), l = this.item(k), m = c.extend(!0, {}, j, l), n = this.option(m); k.replaceWith(n) } else { var o = this.option(j); if (j.children) { var p = this.convertToOptions(j.children); b.appendMany(o, p) } h.push(o) } } return h }, d }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) { function d(a, b) { this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b) } return b.Extend(d, a), d.prototype._applyDefaults = function (a) { var b = { data: function (a) { return c.extend({}, a, { q: a.term }) }, transport: function (a, b, d) { var e = c.ajax(a); return e.then(b), e.fail(d), e } }; return c.extend({}, b, a, !0) }, d.prototype.processResults = function (a) { return a }, d.prototype.query = function (a, b) { function d() { var d = f.transport(f, function (d) { var f = e.processResults(d, a); e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f) }, function () { d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" }) }); e._request = d } var e = this; null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null); var f = c.extend({ type: "GET" }, this.ajaxOptions); "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d() }, d }), b.define("select2/data/tags", ["jquery"], function (a) { function b(b, c, d) { var e = d.get("tags"), f = d.get("createTag"); void 0 !== f && (this.createTag = f); var g = d.get("insertTag"); if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) { var i = e[h], j = this._normalizeItem(i), k = this.option(j); this.$element.append(k) } } return b.prototype.query = function (a, b, c) { function d(a, f) { for (var g = a.results, h = 0; h < g.length; h++) { var i = g[h], j = null != i.children && !d({ results: i.children }, !0); if ((i.text || "").toUpperCase() === (b.term || "").toUpperCase() || j) return !f && (a.data = g, void c(a)) } if (f) return !0; var k = e.createTag(b); if (null != k) { var l = e.option(k); l.attr("data-select2-tag", !0), e.addOptions([l]), e.insertTag(g, k) } a.results = g, c(a) } var e = this; if (this._removeOldTags(), null == b.term || null != b.page) return void a.call(this, b, c); a.call(this, b, d) }, b.prototype.createTag = function (b, c) { var d = a.trim(c.term); return "" === d ? null : { id: d, text: d } }, b.prototype.insertTag = function (a, b, c) { b.unshift(c) }, b.prototype._removeOldTags = function (b) { this._lastTag; this.$element.find("option[data-select2-tag]").each(function () { this.selected || a(this).remove() }) }, b }), b.define("select2/data/tokenizer", ["jquery"], function (a) { function b(a, b, c) { var d = c.get("tokenizer"); void 0 !== d && (this.tokenizer = d), a.call(this, b, c) } return b.prototype.bind = function (a, b, c) { a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field") }, b.prototype.query = function (b, c, d) { function e(b) { var c = g._normalizeItem(b); if (!g.$element.find("option").filter(function () { return a(this).val() === c.id }).length) { var d = g.option(c); d.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([d]) } f(c) } function f(a) { g.trigger("select", { data: a }) } var g = this; c.term = c.term || ""; var h = this.tokenizer(c, this.options, e); h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d) }, b.prototype.tokenizer = function (b, c, d, e) { for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) { return { id: a.term, text: a.term } }; h < g.length;) { var j = g[h]; if (-1 !== a.inArray(j, f)) { var k = g.substr(0, h), l = a.extend({}, c, { term: k }), m = i(l); null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++ } else h++ } return { term: g } }, b }), b.define("select2/data/minimumInputLength", [], function () { function a(a, b, c) { this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { if (b.term = b.term || "", b.term.length < this.minimumInputLength) return void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }); a.call(this, b, c) }, a }), b.define("select2/data/maximumInputLength", [], function () { function a(a, b, c) { this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { if (b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength) return void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }); a.call(this, b, c) }, a }), b.define("select2/data/maximumSelectionLength", [], function () { function a(a, b, c) { this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { var d = this; this.current(function (e) { var f = null != e ? e.length : 0; if (d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength) return void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }); a.call(d, b, c) }) }, a }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) { function c(a, b) { this.$element = a, this.options = b, c.__super__.constructor.call(this) } return b.Extend(c, b.Observable), c.prototype.render = function () { var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b }, c.prototype.bind = function () { }, c.prototype.position = function (a, b) { }, c.prototype.destroy = function () { this.$dropdown.remove() }, c }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) { function c() { } return c.prototype.render = function (b) { var c = b.call(this), d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>'); return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c }, c.prototype.bind = function (b, c, d) { var e = this; b.call(this, c, d), this.$search.on("keydown", function (a) { e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented() }), this.$search.on("input", function (b) { a(this).off("keyup") }), this.$search.on("keyup input", function (a) { e.handleSearch(a) }), c.on("open", function () { e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () { e.$search.focus() }, 0) }), c.on("close", function () { e.$search.attr("tabindex", -1), e.$search.val("") }), c.on("focus", function () { c.isOpen() || e.$search.focus() }), c.on("results:all", function (a) { if (null == a.query.term || "" === a.query.term) { e.showSearch(a) ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide") } }) }, c.prototype.handleSearch = function (a) { if (!this._keyUpPrevented) { var b = this.$search.val(); this.trigger("query", { term: b }) } this._keyUpPrevented = !1 }, c.prototype.showSearch = function (a, b) { return !0 }, c }), b.define("select2/dropdown/hidePlaceholder", [], function () { function a(a, b, c, d) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d) } return a.prototype.append = function (a, b) { b.results = this.removePlaceholder(b.results), a.call(this, b) }, a.prototype.normalizePlaceholder = function (a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, a.prototype.removePlaceholder = function (a, b) { for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) { var e = b[d]; this.placeholder.id === e.id && c.splice(d, 1) } return c }, a }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) { function b(a, b, c, d) { this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return b.prototype.append = function (a, b) { this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore) }, b.prototype.bind = function (b, c, d) { var e = this; b.call(this, c, d), c.on("query", function (a) { e.lastParams = a, e.loading = !0 }), c.on("query:append", function (a) { e.lastParams = a, e.loading = !0 }), this.$results.on("scroll", function () { var b = a.contains(document.documentElement, e.$loadingMore[0]); if (!e.loading && b) { e.$results.offset().top + e.$results.outerHeight(!1) + 50 >= e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1) && e.loadMore() } }) }, b.prototype.loadMore = function () { this.loading = !0; var b = a.extend({}, { page: 1 }, this.lastParams); b.page++ , this.trigger("query:append", b) }, b.prototype.showLoadingMore = function (a, b) { return b.pagination && b.pagination.more }, b.prototype.createLoadingMore = function () { var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), c = this.options.get("translations").get("loadingMore"); return b.html(c(this.lastParams)), b }, b }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) { function c(b, c, d) { this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d) } return c.prototype.bind = function (a, b, c) { var d = this, e = !1; a.call(this, b, c), b.on("open", function () { d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () { d._positionDropdown(), d._resizeDropdown() }), b.on("results:append", function () { d._positionDropdown(), d._resizeDropdown() })) }), b.on("close", function () { d._hideDropdown(), d._detachPositioningHandler(b) }), this.$dropdownContainer.on("mousedown", function (a) { a.stopPropagation() }) }, c.prototype.destroy = function (a) { a.call(this), this.$dropdownContainer.remove() }, c.prototype.position = function (a, b, c) { b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c }, c.prototype.render = function (b) { var c = a("<span></span>"), d = b.call(this); return c.append(d), this.$dropdownContainer = c, c }, c.prototype._hideDropdown = function (a) { this.$dropdownContainer.detach() }, c.prototype._attachPositioningHandler = function (c, d) { var e = this, f = "scroll.select2." + d.id, g = "resize.select2." + d.id, h = "orientationchange.select2." + d.id, i = this.$container.parents().filter(b.hasScroll); i.each(function () { a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() }) }), i.on(f, function (b) { var c = a(this).data("select2-scroll-position"); a(this).scrollTop(c.y) }), a(window).on(f + " " + g + " " + h, function (a) { e._positionDropdown(), e._resizeDropdown() }) }, c.prototype._detachPositioningHandler = function (c, d) { var e = "scroll.select2." + d.id, f = "resize.select2." + d.id, g = "orientationchange.select2." + d.id; this.$container.parents().filter(b.hasScroll).off(e), a(window).off(e + " " + f + " " + g) }, c.prototype._positionDropdown = function () { var b = a(window), c = this.$dropdown.hasClass("select2-dropdown--above"), d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = this.$container.offset(); f.bottom = f.top + this.$container.outerHeight(!1); var g = { height: this.$container.outerHeight(!1) }; g.top = f.top, g.bottom = f.top + g.height; var h = { height: this.$dropdown.outerHeight(!1) }, i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() }, j = i.top < f.top - h.height, k = i.bottom > f.bottom + h.height, l = { left: f.left, top: g.bottom }, m = this.$dropdownParent; "static" === m.css("position") && (m = m.offsetParent()); var n = m.offset(); l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l) }, c.prototype._resizeDropdown = function () { var a = { width: this.$container.outerWidth(!1) + "px" }; this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a) }, c.prototype._showDropdown = function (a) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, c }), b.define("select2/dropdown/minimumResultsForSearch", [], function () { function a(b) { for (var c = 0, d = 0; d < b.length; d++) { var e = b[d]; e.children ? c += a(e.children) : c++ } return c } function b(a, b, c, d) { this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d) } return b.prototype.showSearch = function (b, c) { return !(a(c.data.results) < this.minimumResultsForSearch) && b.call(this, c) }, b }), b.define("select2/dropdown/selectOnClose", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), b.on("close", function (a) { d._handleSelectOnClose(a) }) }, a.prototype._handleSelectOnClose = function (a, b) { if (b && null != b.originalSelect2Event) { var c = b.originalSelect2Event; if ("select" === c._type || "unselect" === c._type) return } var d = this.getHighlightedResults(); if (!(d.length < 1)) { var e = d.data("data"); null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e }) } }, a }), b.define("select2/dropdown/closeOnSelect", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), b.on("select", function (a) { d._selectTriggered(a) }), b.on("unselect", function (a) { d._selectTriggered(a) }) }, a.prototype._selectTriggered = function (a, b) { var c = b.originalEvent; c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b }) }, a }), b.define("select2/i18n/en", [], function () { return { errorLoading: function () { return "The results could not be loaded." }, inputTooLong: function (a) { var b = a.input.length - a.maximum, c = "Please delete " + b + " character"; return 1 != b && (c += "s"), c }, inputTooShort: function (a) { return "Please enter " + (a.minimum - a.input.length) + " or more characters" }, loadingMore: function () { return "Loading more resultsâ€¦" }, maximumSelected: function (a) { var b = "You can only select " + a.maximum + " item"; return 1 != a.maximum && (b += "s"), b }, noResults: function () { return "No results found" }, searching: function () { return "Searchingâ€¦" } } }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) { function D() { this.reset() } return D.prototype.apply = function (l) { if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) { if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), null == l.tokenSeparators && null == l.tokenizer || (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) { var C = b(l.amdBase + "compat/query"); l.dataAdapter = j.Decorate(l.dataAdapter, C) } if (null != l.initSelection) { var D = b(l.amdBase + "compat/initSelection"); l.dataAdapter = j.Decorate(l.dataAdapter, D) } } if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) { if (l.multiple) l.dropdownAdapter = u; else { var E = j.Decorate(u, v); l.dropdownAdapter = E } if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) { var F = b(l.amdBase + "compat/dropdownCss"); l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F) } l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y) } if (null == l.selectionAdapter) { if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) { var G = b(l.amdBase + "compat/containerCss"); l.selectionAdapter = j.Decorate(l.selectionAdapter, G) } l.selectionAdapter = j.Decorate(l.selectionAdapter, i) } if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) { var H = l.language.split("-"), I = H[0]; l.language = [l.language, I] } else l.language = [l.language]; if (a.isArray(l.language)) { var J = new k; l.language.push("en"); for (var K = l.language, L = 0; L < K.length; L++) { var M = K[L], N = {}; try { N = k.loadPath(M) } catch (a) { try { M = this.defaults.amdLanguageBase + M, N = k.loadPath(M) } catch (a) { l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.'); continue } } J.extend(N) } l.translations = J } else { var O = k.loadPath(this.defaults.amdLanguageBase + "en"), P = new k(l.language); P.extend(O), l.translations = P } return l }, D.prototype.reset = function () { function b(a) { function b(a) { return l[a] || a } return a.replace(/[^\u0000-\u007E]/g, b) } function c(d, e) { if ("" === a.trim(d.term)) return e; if (e.children && e.children.length > 0) { for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) { null == c(d, e.children[g]) && f.children.splice(g, 1) } return f.children.length > 0 ? f : c(d, f) } var h = b(e.text).toUpperCase(), i = b(d.term).toUpperCase(); return h.indexOf(i) > -1 ? e : null } this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function (a) { return a }, templateResult: function (a) { return a.text }, templateSelection: function (a) { return a.text }, theme: "default", width: "resolve" } }, D.prototype.set = function (b, c) { var d = a.camelCase(b), e = {}; e[d] = c; var f = j._convertData(e); a.extend(this.defaults, f) }, new D }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) { function e(b, e) { if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) { var f = a(this.get("amdBase") + "compat/inputData"); this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f) } } return e.prototype.fromElement = function (a) { var c = ["select2"]; null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl"))); var e = {}; e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data(); var f = b.extend(!0, {}, e); f = d._convertData(f); for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]); return this }, e.prototype.get = function (a) { return this.options[a] }, e.prototype.set = function (a, b) { this.options[a] = b }, e }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) { var e = function (a, c) { null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this); var d = a.attr("tabindex") || 0; a.data("old-tabindex", d), a.attr("tabindex", "-1"); var f = this.options.get("dataAdapter"); this.dataAdapter = new f(a, this.options); var g = this.render(); this._placeContainer(g); var h = this.options.get("selectionAdapter"); this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g); var i = this.options.get("dropdownAdapter"); this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g); var j = this.options.get("resultsAdapter"); this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var k = this; this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) { k.trigger("selection:update", { data: a }) }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this) }; return c.Extend(e, c.Observable), e.prototype._generateId = function (a) { var b = ""; return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b }, e.prototype._placeContainer = function (a) { a.insertAfter(this.$element); var b = this._resolveWidth(this.$element, this.options.get("width")); null != b && a.css("width", b) }, e.prototype._resolveWidth = function (a, b) { var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == b) { var d = this._resolveWidth(a, "style"); return null != d ? d : this._resolveWidth(a, "element") } if ("element" == b) { var e = a.outerWidth(!1); return e <= 0 ? "auto" : e + "px" } if ("style" == b) { var f = a.attr("style"); if ("string" != typeof f) return null; for (var g = f.split(";"), h = 0, i = g.length; h < i; h += 1) { var j = g[h].replace(/\s/g, ""), k = j.match(c); if (null !== k && k.length >= 1) return k[1] } return null } return b }, e.prototype._bindAdapters = function () { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, e.prototype._registerDomEvents = function () { var b = this; this.$element.on("change.select2", function () { b.dataAdapter.current(function (a) { b.trigger("selection:update", { data: a }) }) }), this.$element.on("focus.select2", function (a) { b.trigger("focus", a) }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA); var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; null != d ? (this._observer = new d(function (c) { a.each(c, b._syncA), a.each(c, b._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1)) }, e.prototype._registerDataEvents = function () { var a = this; this.dataAdapter.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerSelectionEvents = function () { var b = this, c = ["toggle", "focus"]; this.selection.on("toggle", function () { b.toggleDropdown() }), this.selection.on("focus", function (a) { b.focus(a) }), this.selection.on("*", function (d, e) { -1 === a.inArray(d, c) && b.trigger(d, e) }) }, e.prototype._registerDropdownEvents = function () { var a = this; this.dropdown.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerResultsEvents = function () { var a = this; this.results.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerEvents = function () { var a = this; this.on("open", function () { a.$container.addClass("select2-container--open") }), this.on("close", function () { a.$container.removeClass("select2-container--open") }), this.on("enable", function () { a.$container.removeClass("select2-container--disabled") }), this.on("disable", function () { a.$container.addClass("select2-container--disabled") }), this.on("blur", function () { a.$container.removeClass("select2-container--focus") }), this.on("query", function (b) { a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) { a.trigger("results:all", { data: c, query: b }) }) }), this.on("query:append", function (b) { this.dataAdapter.query(b, function (c) { a.trigger("results:append", { data: c, query: b }) }) }), this.on("keypress", function (b) { var c = b.which; a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault()) }) }, e.prototype._syncAttributes = function () { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, e.prototype._syncSubtree = function (a, b) { var c = !1, d = this; if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) { if (b) if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) { var f = b.addedNodes[e]; f.selected && (c = !0) } else b.removedNodes && b.removedNodes.length > 0 && (c = !0); else c = !0; c && this.dataAdapter.current(function (a) { d.trigger("selection:update", { data: a }) }) } }, e.prototype.trigger = function (a, b) { var c = e.__super__.trigger, d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" }; if (void 0 === b && (b = {}), a in d) { var f = d[a], g = { prevented: !1, name: a, args: b }; if (c.call(this, f, g), g.prevented) return void (b.prevented = !0) } c.call(this, a, b) }, e.prototype.toggleDropdown = function () { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, e.prototype.open = function () { this.isOpen() || this.trigger("query", {}) }, e.prototype.close = function () { this.isOpen() && this.trigger("close", {}) }, e.prototype.isOpen = function () { return this.$container.hasClass("select2-container--open") }, e.prototype.hasFocus = function () { return this.$container.hasClass("select2-container--focus") }, e.prototype.focus = function (a) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, e.prototype.enable = function (a) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != a && 0 !== a.length || (a = [!0]); var b = !a[0]; this.$element.prop("disabled", b) }, e.prototype.data = function () { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var a = []; return this.dataAdapter.current(function (b) { a = b }), a }, e.prototype.val = function (b) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val(); var c = b[0]; a.isArray(c) && (c = a.map(c, function (a) { return a.toString() })), this.$element.val(c).trigger("change") }, e.prototype.destroy = function () { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null }, e.prototype.render = function () { var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b }, e }), b.define("select2/compat/utils", ["jquery"], function (a) { function b(b, c, d) { var e, f, g = []; e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () { 0 === this.indexOf("select2-") && g.push(this) })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () { 0 !== this.indexOf("select2-") && null != (f = d(this)) && g.push(f) })), b.attr("class", g.join(" ")) } return { syncCssClasses: b } }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) { function c(a) { return null } function d() { } return d.prototype.render = function (d) { var e = d.call(this), f = this.options.get("containerCssClass") || ""; a.isFunction(f) && (f = f(this.$element)); var g = this.options.get("adaptContainerCssClass"); if (g = g || c, -1 !== f.indexOf(":all:")) { f = f.replace(":all:", ""); var h = g; g = function (a) { var b = h(a); return null != b ? b + " " + a : a } } var i = this.options.get("containerCss") || {}; return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e }, d }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) { function c(a) { return null } function d() { } return d.prototype.render = function (d) { var e = d.call(this), f = this.options.get("dropdownCssClass") || ""; a.isFunction(f) && (f = f(this.$element)); var g = this.options.get("adaptDropdownCssClass"); if (g = g || c, -1 !== f.indexOf(":all:")) { f = f.replace(":all:", ""); var h = g; g = function (a) { var b = h(a); return null != b ? b + " " + a : a } } var i = this.options.get("dropdownCss") || {}; return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e }, d }), b.define("select2/compat/initSelection", ["jquery"], function (a) { function b(a, b, c) { c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c) } return b.prototype.current = function (b, c) { var d = this; if (this._isInitialized) return void b.call(this, c); this.initSelection.call(null, this.$element, function (b) { d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b) }) }, b }), b.define("select2/compat/inputData", ["jquery"], function (a) { function b(a, b, c) { this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c) } return b.prototype.current = function (b, c) { function d(b, c) { var e = []; return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e } for (var e = [], f = 0; f < this._currentData.length; f++) { var g = this._currentData[f]; e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator))) } c(e) }, b.prototype.select = function (b, c) { if (this.options.get("multiple")) { var d = this.$element.val(); d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change") } else this.current(function (b) { a.map(b, function (a) { a.selected = !1 }) }), this.$element.val(c.id), this.$element.trigger("change") }, b.prototype.unselect = function (a, b) { var c = this; b.selected = !1, this.current(function (a) { for (var d = [], e = 0; e < a.length; e++) { var f = a[e]; b.id != f.id && d.push(f.id) } c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change") }) }, b.prototype.query = function (a, b, c) { for (var d = [], e = 0; e < this._currentData.length; e++) { var f = this._currentData[e], g = this.matches(b, f); null !== g && d.push(g) } c({ results: d }) }, b.prototype.addOptions = function (b, c) { var d = a.map(c, function (b) { return a.data(b[0], "data") }); this._currentData.push.apply(this._currentData, d) }, b }), b.define("select2/compat/matcher", ["jquery"], function (a) { function b(b) { function c(c, d) { var e = a.extend(!0, {}, d); if (null == c.term || "" === a.trim(c.term)) return e; if (d.children) { for (var f = d.children.length - 1; f >= 0; f--) { var g = d.children[f]; b(c.term, g.text, g) || e.children.splice(f, 1) } if (e.children.length > 0) return e } return b(c.term, d.text, d) ? e : null } return c } return b }), b.define("select2/compat/query", [], function () { function a(a, b, c) { c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { b.callback = c, this.options.get("query").call(null, b) }, a }), b.define("select2/dropdown/attachContainer", [], function () { function a(a, b, c) { a.call(this, b, c) } return a.prototype.position = function (a, b, c) { c.find(".dropdown-wrapper").append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below") }, a }), b.define("select2/dropdown/stopPropagation", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { a.call(this, b, c); var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"]; this.$dropdown.on(d.join(" "), function (a) { a.stopPropagation() }) }, a }), b.define("select2/selection/stopPropagation", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { a.call(this, b, c); var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"]; this.$selection.on(d.join(" "), function (a) { a.stopPropagation() }) }, a }), function (c) { "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a) }(function (a) { function b(b) { var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height"); j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height"); j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect(); o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } } function c() { f = null } function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 == 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice; if (a.event.fixHooks) for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function () { if (this.addEventListener) for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b; a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function () { if (this.removeEventListener) for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null; a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function (b) { var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function (b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } }; a.fn.extend({ mousewheel: function (a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function (a) { return this.unbind("mousewheel", a) } }) }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) { if (null == a.fn.select2) { var e = ["open", "close", "destroy"]; a.fn.select2 = function (b) { if ("object" == typeof (b = b || {})) return this.each(function () { var d = a.extend(!0, {}, b); new c(a(this), d) }), this; if ("string" == typeof b) { var d, f = Array.prototype.slice.call(arguments, 1); return this.each(function () { var c = a(this).data("select2"); null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f) }), a.inArray(b, e) > -1 ? this : d } throw new Error("Invalid arguments for Select2: " + b) } } return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c }), { define: b.define, require: b.require } }(), c = b.require("jquery.select2"); return a.fn.select2.amd = b, c });
;$(document).ready(function () {
    var date = new Date();
    date.setDate(date.getDate());

    $('.datepicker').datepicker({
        startDate: date
    });

});
;
//# sourceMappingURL=scripts.js.map