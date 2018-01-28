var regexr = function() {
    "use strict";
    function e(e) {
        try {
            new RegExp(".",e)
        } catch (e) {
            return T
        }
    }
    function t(e, r) {
        for (var i in e)
            !1 !== r[i] && ("object" === n(e[i]) ? r[i] = t(e[i], r[i] || {}) : void 0 === r[i] && (r[i] = e[i]));
        return r
    }
    !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.CodeMirror = t()
    }(window, function() {
        function e(e) {
            return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
        }
        function t(e) {
            for (var t = e.childNodes.length; t > 0; --t)
                e.removeChild(e.firstChild);
            return e
        }
        function n(e, n) {
            return t(e).appendChild(n)
        }
        function r(e, t, n, r) {
            var i = document.createElement(e);
            if (n && (i.className = n),
            r && (i.style.cssText = r),
            "string" == typeof t)
                i.appendChild(document.createTextNode(t));
            else if (t)
                for (var o = 0; o < t.length; ++o)
                    i.appendChild(t[o]);
            return i
        }
        function i(e, t, n, i) {
            var o = r(e, t, n, i);
            return o.setAttribute("role", "presentation"),
            o
        }
        function o(e, t) {
            if (3 == t.nodeType && (t = t.parentNode),
            e.contains)
                return e.contains(t);
            do {
                if (11 == t.nodeType && (t = t.host),
                t == e)
                    return !0
            } while (t = t.parentNode)
        }
        function s() {
            var e;
            try {
                e = document.activeElement
            } catch (t) {
                e = document.body || null
            }
            for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
                e = e.shadowRoot.activeElement;
            return e
        }
        function a(t, n) {
            var r = t.className;
            e(n).test(r) || (t.className += (r ? " " : "") + n)
        }
        function l(t, n) {
            for (var r = t.split(" "), i = 0; i < r.length; i++)
                r[i] && !e(r[i]).test(n) && (n += " " + r[i]);
            return n
        }
        function c(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return function() {
                return e.apply(null, t)
            }
        }
        function u(e, t, n) {
            t || (t = {});
            for (var r in e)
                !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
            return t
        }
        function h(e, t, n, r, i) {
            null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
            for (var o = r || 0, s = i || 0; ; ) {
                var a = e.indexOf("\t", o);
                if (a < 0 || a >= t)
                    return s + (t - o);
                s += a - o,
                s += n - s % n,
                o = a + 1
            }
        }
        function d(e, t) {
            for (var n = 0; n < e.length; ++n)
                if (e[n] == t)
                    return n;
            return -1
        }
        function f(e, t, n) {
            for (var r = 0, i = 0; ; ) {
                var o = e.indexOf("\t", r);
                -1 == o && (o = e.length);
                var s = o - r;
                if (o == e.length || i + s >= t)
                    return r + Math.min(s, t - i);
                if (i += o - r,
                i += n - i % n,
                r = o + 1,
                i >= t)
                    return r
            }
        }
        function p(e) {
            for (; Hs.length <= e; )
                Hs.push(g(Hs) + " ");
            return Hs[e]
        }
        function g(e) {
            return e[e.length - 1]
        }
        function v(e, t) {
            for (var n = [], r = 0; r < e.length; r++)
                n[r] = t(e[r], r);
            return n
        }
        function m(e, t, n) {
            for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; )
                r++;
            e.splice(r, 0, t)
        }
        function y() {}
        function b(e, t) {
            var n;
            return Object.create ? n = Object.create(e) : (y.prototype = e,
            n = new y),
            t && u(t, n),
            n
        }
        function w(e) {
            return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || qs.test(e))
        }
        function x(e, t) {
            return t ? !!(t.source.indexOf("\\w") > -1 && w(e)) || t.test(e) : w(e)
        }
        function k(e) {
            for (var t in e)
                if (e.hasOwnProperty(t) && e[t])
                    return !1;
            return !0
        }
        function C(e) {
            return e.charCodeAt(0) >= 768 && Ws.test(e)
        }
        function _(e, t, n) {
            for (; (n < 0 ? t > 0 : t < e.length) && C(e.charAt(t)); )
                t += n;
            return t
        }
        function S(e, t, n) {
            for (; ; ) {
                if (Math.abs(t - n) <= 1)
                    return e(t) ? t : n;
                var r = Math.floor((t + n) / 2);
                e(r) ? n = r : t = r
            }
        }
        function L(e, t, n) {
            var o = this;
            this.input = n,
            o.scrollbarFiller = r("div", null, "CodeMirror-scrollbar-filler"),
            o.scrollbarFiller.setAttribute("cm-not-content", "true"),
            o.gutterFiller = r("div", null, "CodeMirror-gutter-filler"),
            o.gutterFiller.setAttribute("cm-not-content", "true"),
            o.lineDiv = i("div", null, "CodeMirror-code"),
            o.selectionDiv = r("div", null, null, "position: relative; z-index: 1"),
            o.cursorDiv = r("div", null, "CodeMirror-cursors"),
            o.measure = r("div", null, "CodeMirror-measure"),
            o.lineMeasure = r("div", null, "CodeMirror-measure"),
            o.lineSpace = i("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
            var s = i("div", [o.lineSpace], "CodeMirror-lines");
            o.mover = r("div", [s], null, "position: relative"),
            o.sizer = r("div", [o.mover], "CodeMirror-sizer"),
            o.sizerWidth = null,
            o.heightForcer = r("div", null, null, "position: absolute; height: " + Os + "px; width: 1px;"),
            o.gutters = r("div", null, "CodeMirror-gutters"),
            o.lineGutter = null,
            o.scroller = r("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"),
            o.scroller.setAttribute("tabIndex", "-1"),
            o.wrapper = r("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"),
            cs && us < 8 && (o.gutters.style.zIndex = -1,
            o.scroller.style.paddingRight = 0),
            hs || os && ws || (o.scroller.draggable = !0),
            e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
            o.viewFrom = o.viewTo = t.first,
            o.reportedViewFrom = o.reportedViewTo = t.first,
            o.view = [],
            o.renderedView = null,
            o.externalMeasured = null,
            o.viewOffset = 0,
            o.lastWrapHeight = o.lastWrapWidth = 0,
            o.updateLineNumbers = null,
            o.nativeBarWidth = o.barHeight = o.barWidth = 0,
            o.scrollbarsClipped = !1,
            o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null,
            o.alignWidgets = !1,
            o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null,
            o.maxLine = null,
            o.maxLineLength = 0,
            o.maxLineChanged = !1,
            o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null,
            o.shift = !1,
            o.selForContextMenu = null,
            o.activeTouch = null,
            n.init(o)
        }
        function E(e, t) {
            if ((t -= e.first) < 0 || t >= e.size)
                throw new Error("There is no line " + (t + e.first) + " in the document.");
            for (var n = e; !n.lines; )
                for (var r = 0; ; ++r) {
                    var i = n.children[r]
                      , o = i.chunkSize();
                    if (t < o) {
                        n = i;
                        break
                    }
                    t -= o
                }
            return n.lines[t]
        }
        function T(e, t, n) {
            var r = []
              , i = t.line;
            return e.iter(t.line, n.line + 1, function(e) {
                var o = e.text;
                i == n.line && (o = o.slice(0, n.ch)),
                i == t.line && (o = o.slice(t.ch)),
                r.push(o),
                ++i
            }),
            r
        }
        function M(e, t, n) {
            var r = [];
            return e.iter(t, n, function(e) {
                r.push(e.text)
            }),
            r
        }
        function R(e, t) {
            var n = t - e.height;
            if (n)
                for (var r = e; r; r = r.parent)
                    r.height += n
        }
        function A(e) {
            if (null == e.parent)
                return null;
            for (var t = e.parent, n = d(t.lines, e), r = t.parent; r; t = r,
            r = r.parent)
                for (var i = 0; r.children[i] != t; ++i)
                    n += r.children[i].chunkSize();
            return n + t.first
        }
        function F(e, t) {
            var n = e.first;
            e: do {
                for (var r = 0; r < e.children.length; ++r) {
                    var i = e.children[r]
                      , o = i.height;
                    if (t < o) {
                        e = i;
                        continue e
                    }
                    t -= o,
                    n += i.chunkSize()
                }
                return n
            } while (!e.lines);for (var s = 0; s < e.lines.length; ++s) {
                var a = e.lines[s].height;
                if (t < a)
                    break;
                t -= a
            }
            return n + s
        }
        function O(e, t) {
            return t >= e.first && t < e.first + e.size
        }
        function N(e, t) {
            return String(e.lineNumberFormatter(t + e.firstLineNumber))
        }
        function I(e, t, n) {
            if (void 0 === n && (n = null),
            !(this instanceof I))
                return new I(e,t,n);
            this.line = e,
            this.ch = t,
            this.sticky = n
        }
        function P(e, t) {
            return e.line - t.line || e.ch - t.ch
        }
        function D(e, t) {
            return e.sticky == t.sticky && 0 == P(e, t)
        }
        function H(e) {
            return I(e.line, e.ch)
        }
        function q(e, t) {
            return P(e, t) < 0 ? t : e
        }
        function W(e, t) {
            return P(e, t) < 0 ? e : t
        }
        function B(e, t) {
            return Math.max(e.first, Math.min(t, e.first + e.size - 1))
        }
        function z(e, t) {
            if (t.line < e.first)
                return I(e.first, 0);
            var n = e.first + e.size - 1;
            return t.line > n ? I(n, E(e, n).text.length) : U(t, E(e, t.line).text.length)
        }
        function U(e, t) {
            var n = e.ch;
            return null == n || n > t ? I(e.line, t) : n < 0 ? I(e.line, 0) : e
        }
        function G(e, t) {
            for (var n = [], r = 0; r < t.length; r++)
                n[r] = z(e, t[r]);
            return n
        }
        function j() {
            Bs = !0
        }
        function V() {
            zs = !0
        }
        function K(e, t, n) {
            this.marker = e,
            this.from = t,
            this.to = n
        }
        function $(e, t) {
            if (e)
                for (var n = 0; n < e.length; ++n) {
                    var r = e[n];
                    if (r.marker == t)
                        return r
                }
        }
        function X(e, t) {
            for (var n, r = 0; r < e.length; ++r)
                e[r] != t && (n || (n = [])).push(e[r]);
            return n
        }
        function Y(e, t) {
            e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t],
            t.marker.attachLine(e)
        }
        function Z(e, t, n) {
            var r;
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i]
                      , s = o.marker;
                    if (null == o.from || (s.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == s.type && (!n || !o.marker.insertLeft)) {
                        var a = null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t);
                        (r || (r = [])).push(new K(s,o.from,a ? null : o.to))
                    }
                }
            return r
        }
        function Q(e, t, n) {
            var r;
            if (e)
                for (var i = 0; i < e.length; ++i) {
                    var o = e[i]
                      , s = o.marker;
                    if (null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == s.type && (!n || o.marker.insertLeft)) {
                        var a = null == o.from || (s.inclusiveLeft ? o.from <= t : o.from < t);
                        (r || (r = [])).push(new K(s,a ? null : o.from - t,null == o.to ? null : o.to - t))
                    }
                }
            return r
        }
        function J(e, t) {
            if (t.full)
                return null;
            var n = O(e, t.from.line) && E(e, t.from.line).markedSpans
              , r = O(e, t.to.line) && E(e, t.to.line).markedSpans;
            if (!n && !r)
                return null;
            var i = t.from.ch
              , o = t.to.ch
              , s = 0 == P(t.from, t.to)
              , a = Z(n, i, s)
              , l = Q(r, o, s)
              , c = 1 == t.text.length
              , u = g(t.text).length + (c ? i : 0);
            if (a)
                for (var h = 0; h < a.length; ++h) {
                    var d = a[h];
                    if (null == d.to) {
                        var f = $(l, d.marker);
                        f ? c && (d.to = null == f.to ? null : f.to + u) : d.to = i
                    }
                }
            if (l)
                for (var p = 0; p < l.length; ++p) {
                    var v = l[p];
                    null != v.to && (v.to += u),
                    null == v.from ? $(a, v.marker) || (v.from = u,
                    c && (a || (a = [])).push(v)) : (v.from += u,
                    c && (a || (a = [])).push(v))
                }
            a && (a = ee(a)),
            l && l != a && (l = ee(l));
            var m = [a];
            if (!c) {
                var y, b = t.text.length - 2;
                if (b > 0 && a)
                    for (var w = 0; w < a.length; ++w)
                        null == a[w].to && (y || (y = [])).push(new K(a[w].marker,null,null));
                for (var x = 0; x < b; ++x)
                    m.push(y);
                m.push(l)
            }
            return m
        }
        function ee(e) {
            for (var t = 0; t < e.length; ++t) {
                var n = e[t];
                null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1)
            }
            return e.length ? e : null
        }
        function te(e, t, n) {
            var r = null;
            if (e.iter(t.line, n.line + 1, function(e) {
                if (e.markedSpans)
                    for (var t = 0; t < e.markedSpans.length; ++t) {
                        var n = e.markedSpans[t].marker;
                        !n.readOnly || r && -1 != d(r, n) || (r || (r = [])).push(n)
                    }
            }),
            !r)
                return null;
            for (var i = [{
                from: t,
                to: n
            }], o = 0; o < r.length; ++o)
                for (var s = r[o], a = s.find(0), l = 0; l < i.length; ++l) {
                    var c = i[l];
                    if (!(P(c.to, a.from) < 0 || P(c.from, a.to) > 0)) {
                        var u = [l, 1]
                          , h = P(c.from, a.from)
                          , f = P(c.to, a.to);
                        (h < 0 || !s.inclusiveLeft && !h) && u.push({
                            from: c.from,
                            to: a.from
                        }),
                        (f > 0 || !s.inclusiveRight && !f) && u.push({
                            from: a.to,
                            to: c.to
                        }),
                        i.splice.apply(i, u),
                        l += u.length - 3
                    }
                }
            return i
        }
        function ne(e) {
            var t = e.markedSpans;
            if (t) {
                for (var n = 0; n < t.length; ++n)
                    t[n].marker.detachLine(e);
                e.markedSpans = null
            }
        }
        function re(e, t) {
            if (t) {
                for (var n = 0; n < t.length; ++n)
                    t[n].marker.attachLine(e);
                e.markedSpans = t
            }
        }
        function ie(e) {
            return e.inclusiveLeft ? -1 : 0
        }
        function oe(e) {
            return e.inclusiveRight ? 1 : 0
        }
        function se(e, t) {
            var n = e.lines.length - t.lines.length;
            if (0 != n)
                return n;
            var r = e.find()
              , i = t.find()
              , o = P(r.from, i.from) || ie(e) - ie(t);
            if (o)
                return -o;
            var s = P(r.to, i.to) || oe(e) - oe(t);
            return s || t.id - e.id
        }
        function ae(e, t) {
            var n, r = zs && e.markedSpans;
            if (r)
                for (var i = void 0, o = 0; o < r.length; ++o)
                    (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || se(n, i.marker) < 0) && (n = i.marker);
            return n
        }
        function le(e) {
            return ae(e, !0)
        }
        function ce(e) {
            return ae(e, !1)
        }
        function ue(e, t, n, r, i) {
            var o = E(e, t)
              , s = zs && o.markedSpans;
            if (s)
                for (var a = 0; a < s.length; ++a) {
                    var l = s[a];
                    if (l.marker.collapsed) {
                        var c = l.marker.find(0)
                          , u = P(c.from, n) || ie(l.marker) - ie(i)
                          , h = P(c.to, r) || oe(l.marker) - oe(i);
                        if (!(u >= 0 && h <= 0 || u <= 0 && h >= 0) && (u <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? P(c.to, n) >= 0 : P(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? P(c.from, r) <= 0 : P(c.from, r) < 0)))
                            return !0
                    }
                }
        }
        function he(e) {
            for (var t; t = le(e); )
                e = t.find(-1, !0).line;
            return e
        }
        function de(e) {
            for (var t; t = ce(e); )
                e = t.find(1, !0).line;
            return e
        }
        function fe(e) {
            for (var t, n; t = ce(e); )
                e = t.find(1, !0).line,
                (n || (n = [])).push(e);
            return n
        }
        function pe(e, t) {
            var n = E(e, t)
              , r = he(n);
            return n == r ? t : A(r)
        }
        function ge(e, t) {
            if (t > e.lastLine())
                return t;
            var n, r = E(e, t);
            if (!ve(e, r))
                return t;
            for (; n = ce(r); )
                r = n.find(1, !0).line;
            return A(r) + 1
        }
        function ve(e, t) {
            var n = zs && t.markedSpans;
            if (n)
                for (var r = void 0, i = 0; i < n.length; ++i)
                    if ((r = n[i]).marker.collapsed) {
                        if (null == r.from)
                            return !0;
                        if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && me(e, t, r))
                            return !0
                    }
        }
        function me(e, t, n) {
            if (null == n.to) {
                var r = n.marker.find(1, !0);
                return me(e, r.line, $(r.line.markedSpans, n.marker))
            }
            if (n.marker.inclusiveRight && n.to == t.text.length)
                return !0;
            for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
                if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && me(e, t, i))
                    return !0
        }
        function ye(e) {
            for (var t = 0, n = (e = he(e)).parent, r = 0; r < n.lines.length; ++r) {
                var i = n.lines[r];
                if (i == e)
                    break;
                t += i.height
            }
            for (var o = n.parent; o; n = o,
            o = n.parent)
                for (var s = 0; s < o.children.length; ++s) {
                    var a = o.children[s];
                    if (a == n)
                        break;
                    t += a.height
                }
            return t
        }
        function be(e) {
            if (0 == e.height)
                return 0;
            for (var t, n = e.text.length, r = e; t = le(r); ) {
                var i = t.find(0, !0);
                r = i.from.line,
                n += i.from.ch - i.to.ch
            }
            for (r = e; t = ce(r); ) {
                var o = t.find(0, !0);
                n -= r.text.length - o.from.ch,
                n += (r = o.to.line).text.length - o.to.ch
            }
            return n
        }
        function we(e) {
            var t = e.display
              , n = e.doc;
            t.maxLine = E(n, n.first),
            t.maxLineLength = be(t.maxLine),
            t.maxLineChanged = !0,
            n.iter(function(e) {
                var n = be(e);
                n > t.maxLineLength && (t.maxLineLength = n,
                t.maxLine = e)
            })
        }
        function xe(e, t, n, r) {
            if (!e)
                return r(t, n, "ltr");
            for (var i = !1, o = 0; o < e.length; ++o) {
                var s = e[o];
                (s.from < n && s.to > t || t == n && s.to == t) && (r(Math.max(s.from, t), Math.min(s.to, n), 1 == s.level ? "rtl" : "ltr"),
                i = !0)
            }
            i || r(t, n, "ltr")
        }
        function ke(e, t, n) {
            var r;
            Us = null;
            for (var i = 0; i < e.length; ++i) {
                var o = e[i];
                if (o.from < t && o.to > t)
                    return i;
                o.to == t && (o.from != o.to && "before" == n ? r = i : Us = i),
                o.from == t && (o.from != o.to && "before" != n ? r = i : Us = i)
            }
            return null != r ? r : Us
        }
        function Ce(e, t) {
            var n = e.order;
            return null == n && (n = e.order = Gs(e.text, t)),
            n
        }
        function _e(e, t, n) {
            var r = _(e.text, t + n, n);
            return r < 0 || r > e.text.length ? null : r
        }
        function Se(e, t, n) {
            var r = _e(e, t.ch, n);
            return null == r ? null : new I(t.line,r,n < 0 ? "after" : "before")
        }
        function Le(e, t, n, r, i) {
            if (e) {
                var o = Ce(n, t.doc.direction);
                if (o) {
                    var s, a = i < 0 ? g(o) : o[0], l = i < 0 == (1 == a.level) ? "after" : "before";
                    if (a.level > 0) {
                        var c = Yt(t, n);
                        s = i < 0 ? n.text.length - 1 : 0;
                        var u = Zt(t, c, s).top;
                        s = S(function(e) {
                            return Zt(t, c, e).top == u
                        }, i < 0 == (1 == a.level) ? a.from : a.to - 1, s),
                        "before" == l && (s = _e(n, s, 1))
                    } else
                        s = i < 0 ? a.to : a.from;
                    return new I(r,s,l)
                }
            }
            return new I(r,i < 0 ? n.text.length : 0,i < 0 ? "before" : "after")
        }
        function Ee(e, t, n, r) {
            var i = Ce(t, e.doc.direction);
            if (!i)
                return Se(t, n, r);
            n.ch >= t.text.length ? (n.ch = t.text.length,
            n.sticky = "before") : n.ch <= 0 && (n.ch = 0,
            n.sticky = "after");
            var o = ke(i, n.ch, n.sticky)
              , s = i[o];
            if ("ltr" == e.doc.direction && s.level % 2 == 0 && (r > 0 ? s.to > n.ch : s.from < n.ch))
                return Se(t, n, r);
            var a, l = function(e, n) {
                return _e(t, e instanceof I ? e.ch : e, n)
            }, c = function(n) {
                return e.options.lineWrapping ? (a = a || Yt(e, t),
                vn(e, t, a, n)) : {
                    begin: 0,
                    end: t.text.length
                }
            }, u = c("before" == n.sticky ? l(n, -1) : n.ch);
            if ("rtl" == e.doc.direction || 1 == s.level) {
                var h = 1 == s.level == r < 0
                  , d = l(n, h ? 1 : -1);
                if (null != d && (h ? d <= s.to && d <= u.end : d >= s.from && d >= u.begin)) {
                    var f = h ? "before" : "after";
                    return new I(n.line,d,f)
                }
            }
            var p = function(e, t, r) {
                for (var o = function(e, t) {
                    return t ? new I(n.line,l(e, 1),"before") : new I(n.line,e,"after")
                }; e >= 0 && e < i.length; e += t) {
                    var s = i[e]
                      , a = t > 0 == (1 != s.level)
                      , c = a ? r.begin : l(r.end, -1);
                    if (s.from <= c && c < s.to)
                        return o(c, a);
                    if (c = a ? s.from : l(s.to, -1),
                    r.begin <= c && c < r.end)
                        return o(c, a)
                }
            }
              , g = p(o + r, r, u);
            if (g)
                return g;
            var v = r > 0 ? u.end : l(u.begin, -1);
            return null == v || r > 0 && v == t.text.length || !(g = p(r > 0 ? 0 : i.length - 1, r, c(v))) ? null : g
        }
        function Te(e, t) {
            return e._handlers && e._handlers[t] || js
        }
        function Me(e, t, n) {
            if (e.removeEventListener)
                e.removeEventListener(t, n, !1);
            else if (e.detachEvent)
                e.detachEvent("on" + t, n);
            else {
                var r = e._handlers
                  , i = r && r[t];
                if (i) {
                    var o = d(i, n);
                    o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
                }
            }
        }
        function Re(e, t) {
            var n = Te(e, t);
            if (n.length)
                for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
                    n[i].apply(null, r)
        }
        function Ae(e, t, n) {
            return "string" == typeof t && (t = {
                type: t,
                preventDefault: function() {
                    this.defaultPrevented = !0
                }
            }),
            Re(e, n || t.type, e, t),
            De(t) || t.codemirrorIgnore
        }
        function Fe(e) {
            var t = e._handlers && e._handlers.cursorActivity;
            if (t)
                for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
                    -1 == d(n, t[r]) && n.push(t[r])
        }
        function Oe(e, t) {
            return Te(e, t).length > 0
        }
        function Ne(e) {
            e.prototype.on = function(e, t) {
                Vs(this, e, t)
            }
            ,
            e.prototype.off = function(e, t) {
                Me(this, e, t)
            }
        }
        function Ie(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }
        function Pe(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }
        function De(e) {
            return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
        }
        function He(e) {
            Ie(e),
            Pe(e)
        }
        function qe(e) {
            return e.target || e.srcElement
        }
        function We(e) {
            var t = e.which;
            return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
            xs && e.ctrlKey && 1 == t && (t = 3),
            t
        }
        function Be(e) {
            if (null == As) {
                var t = r("span", "​");
                n(e, r("span", [t, document.createTextNode("x")])),
                0 != e.firstChild.offsetHeight && (As = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(cs && us < 8))
            }
            var i = As ? r("span", "​") : r("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
            return i.setAttribute("cm-text", ""),
            i
        }
        function ze(e) {
            if (null != Fs)
                return Fs;
            var r = n(e, document.createTextNode("AخA"))
              , i = Ss(r, 0, 1).getBoundingClientRect()
              , o = Ss(r, 1, 2).getBoundingClientRect();
            return t(e),
            !(!i || i.left == i.right) && (Fs = o.right - i.right < 3)
        }
        function Ue(e) {
            if (null != Zs)
                return Zs;
            var t = n(e, r("span", "x"))
              , i = t.getBoundingClientRect()
              , o = Ss(t, 0, 1).getBoundingClientRect();
            return Zs = Math.abs(i.left - o.left) > 1
        }
        function Ge(e, t) {
            arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
            Qs[e] = t
        }
        function je(e) {
            if ("string" == typeof e && Js.hasOwnProperty(e))
                e = Js[e];
            else if (e && "string" == typeof e.name && Js.hasOwnProperty(e.name)) {
                var t = Js[e.name];
                "string" == typeof t && (t = {
                    name: t
                }),
                (e = b(t, e)).name = t.name
            } else {
                if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                    return je("application/xml");
                if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                    return je("application/json")
            }
            return "string" == typeof e ? {
                name: e
            } : e || {
                name: "null"
            }
        }
        function Ve(e, t) {
            t = je(t);
            var n = Qs[t.name];
            if (!n)
                return Ve(e, "text/plain");
            var r = n(e, t);
            if (ea.hasOwnProperty(t.name)) {
                var i = ea[t.name];
                for (var o in i)
                    i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]),
                    r[o] = i[o])
            }
            if (r.name = t.name,
            t.helperType && (r.helperType = t.helperType),
            t.modeProps)
                for (var s in t.modeProps)
                    r[s] = t.modeProps[s];
            return r
        }
        function Ke(e, t) {
            u(t, ea.hasOwnProperty(e) ? ea[e] : ea[e] = {})
        }
        function $e(e, t) {
            if (!0 === t)
                return t;
            if (e.copyState)
                return e.copyState(t);
            var n = {};
            for (var r in t) {
                var i = t[r];
                i instanceof Array && (i = i.concat([])),
                n[r] = i
            }
            return n
        }
        function Xe(e, t) {
            for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; )
                t = n.state,
                e = n.mode;
            return n || {
                mode: e,
                state: t
            }
        }
        function Ye(e, t, n) {
            return !e.startState || e.startState(t, n)
        }
        function Ze(e, t, n, r) {
            var i = [e.state.modeGen]
              , o = {};
            ot(e, t.text, e.doc.mode, n, function(e, t) {
                return i.push(e, t)
            }, o, r);
            for (var s = n.state, a = 0; a < e.state.overlays.length; ++a)
                !function(r) {
                    var s = e.state.overlays[r]
                      , a = 1
                      , l = 0;
                    n.state = !0,
                    ot(e, t.text, s.mode, n, function(e, t) {
                        for (var n = a; l < e; ) {
                            var r = i[a];
                            r > e && i.splice(a, 1, e, i[a + 1], r),
                            a += 2,
                            l = Math.min(e, r)
                        }
                        if (t)
                            if (s.opaque)
                                i.splice(n, a - n, e, "overlay " + t),
                                a = n + 2;
                            else
                                for (; n < a; n += 2) {
                                    var o = i[n + 1];
                                    i[n + 1] = (o ? o + " " : "") + "overlay " + t
                                }
                    }, o)
                }(a);
            return n.state = s,
            {
                styles: i,
                classes: o.bgClass || o.textClass ? o : null
            }
        }
        function Qe(e, t, n) {
            if (!t.styles || t.styles[0] != e.state.modeGen) {
                var r = Je(e, A(t))
                  , i = t.text.length > e.options.maxHighlightLength && $e(e.doc.mode, r.state)
                  , o = Ze(e, t, r);
                i && (r.state = i),
                t.stateAfter = r.save(!i),
                t.styles = o.styles,
                o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null),
                n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
            }
            return t.styles
        }
        function Je(e, t, n) {
            var r = e.doc
              , i = e.display;
            if (!r.mode.startState)
                return new ra(r,!0,t);
            var o = st(e, t, n)
              , s = o > r.first && E(r, o - 1).stateAfter
              , a = s ? ra.fromSaved(r, s, o) : new ra(r,Ye(r.mode),o);
            return r.iter(o, t, function(n) {
                et(e, n.text, a);
                var r = a.line;
                n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? a.save() : null,
                a.nextLine()
            }),
            n && (r.modeFrontier = a.line),
            a
        }
        function et(e, t, n, r) {
            var i = e.doc.mode
              , o = new ta(t,e.options.tabSize,n);
            for (o.start = o.pos = r || 0,
            "" == t && tt(i, n.state); !o.eol(); )
                nt(i, o, n.state),
                o.start = o.pos
        }
        function tt(e, t) {
            if (e.blankLine)
                return e.blankLine(t);
            if (e.innerMode) {
                var n = Xe(e, t);
                return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
            }
        }
        function nt(e, t, n, r) {
            for (var i = 0; i < 10; i++) {
                r && (r[0] = Xe(e, n).mode);
                var o = e.token(t, n);
                if (t.pos > t.start)
                    return o
            }
            throw new Error("Mode " + e.name + " failed to advance stream.")
        }
        function rt(e, t, n, r) {
            var i, o, s = e.doc, a = s.mode, l = E(s, (t = z(s, t)).line), c = Je(e, t.line, n), u = new ta(l.text,e.options.tabSize,c);
            for (r && (o = []); (r || u.pos < t.ch) && !u.eol(); )
                u.start = u.pos,
                i = nt(a, u, c.state),
                r && o.push(new ia(u,i,$e(s.mode, c.state)));
            return r ? o : new ia(u,i,c.state)
        }
        function it(e, t) {
            if (e)
                for (; ; ) {
                    var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                    if (!n)
                        break;
                    e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                    var r = n[1] ? "bgClass" : "textClass";
                    null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
                }
            return e
        }
        function ot(e, t, n, r, i, o, s) {
            var a = n.flattenSpans;
            null == a && (a = e.options.flattenSpans);
            var l, c = 0, u = null, h = new ta(t,e.options.tabSize,r), d = e.options.addModeClass && [null];
            for ("" == t && it(tt(n, r.state), o); !h.eol(); ) {
                if (h.pos > e.options.maxHighlightLength ? (a = !1,
                s && et(e, t, r, h.pos),
                h.pos = t.length,
                l = null) : l = it(nt(n, h, r.state, d), o),
                d) {
                    var f = d[0].name;
                    f && (l = "m-" + (l ? f + " " + l : f))
                }
                if (!a || u != l) {
                    for (; c < h.start; )
                        i(c = Math.min(h.start, c + 5e3), u);
                    u = l
                }
                h.start = h.pos
            }
            for (; c < h.pos; ) {
                var p = Math.min(h.pos, c + 5e3);
                i(p, u),
                c = p
            }
        }
        function st(e, t, n) {
            for (var r, i, o = e.doc, s = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > s; --a) {
                if (a <= o.first)
                    return o.first;
                var l = E(o, a - 1)
                  , c = l.stateAfter;
                if (c && (!n || a + (c instanceof na ? c.lookAhead : 0) <= o.modeFrontier))
                    return a;
                var u = h(l.text, null, e.options.tabSize);
                (null == i || r > u) && (i = a - 1,
                r = u)
            }
            return i
        }
        function at(e, t) {
            if (e.modeFrontier = Math.min(e.modeFrontier, t),
            !(e.highlightFrontier < t - 10)) {
                for (var n = e.first, r = t - 1; r > n; r--) {
                    var i = E(e, r).stateAfter;
                    if (i && (!(i instanceof na) || r + i.lookAhead < t)) {
                        n = r + 1;
                        break
                    }
                }
                e.highlightFrontier = Math.min(e.highlightFrontier, n)
            }
        }
        function lt(e, t, n, r) {
            e.text = t,
            e.stateAfter && (e.stateAfter = null),
            e.styles && (e.styles = null),
            null != e.order && (e.order = null),
            ne(e),
            re(e, n);
            var i = r ? r(e) : 1;
            i != e.height && R(e, i)
        }
        function ct(e) {
            e.parent = null,
            ne(e)
        }
        function ut(e, t) {
            if (!e || /^\s*$/.test(e))
                return null;
            var n = t.addModeClass ? la : aa;
            return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
        }
        function ht(e, t) {
            var n = i("span", null, null, hs ? "padding-right: .1px" : null)
              , r = {
                pre: i("pre", [n], "CodeMirror-line"),
                content: n,
                col: 0,
                pos: 0,
                cm: e,
                trailingSpace: !1,
                splitSpaces: (cs || hs) && e.getOption("lineWrapping")
            };
            t.measure = {};
            for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
                var s = o ? t.rest[o - 1] : t.line
                  , a = void 0;
                r.pos = 0,
                r.addToken = ft,
                ze(e.display.measure) && (a = Ce(s, e.doc.direction)) && (r.addToken = gt(r.addToken, a)),
                r.map = [],
                mt(s, r, Qe(e, s, t != e.display.externalMeasured && A(s))),
                s.styleClasses && (s.styleClasses.bgClass && (r.bgClass = l(s.styleClasses.bgClass, r.bgClass || "")),
                s.styleClasses.textClass && (r.textClass = l(s.styleClasses.textClass, r.textClass || ""))),
                0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Be(e.display.measure))),
                0 == o ? (t.measure.map = r.map,
                t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
                (t.measure.caches || (t.measure.caches = [])).push({}))
            }
            if (hs) {
                var c = r.content.lastChild;
                (/\bcm-tab\b/.test(c.className) || c.querySelector && c.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
            }
            return Re(e, "renderLine", e, t.line, r.pre),
            r.pre.className && (r.textClass = l(r.pre.className, r.textClass || "")),
            r
        }
        function dt(e) {
            var t = r("span", "•", "cm-invalidchar");
            return t.title = "\\u" + e.charCodeAt(0).toString(16),
            t.setAttribute("aria-label", t.title),
            t
        }
        function ft(e, t, n, i, o, s, a) {
            if (t) {
                var l, c = e.splitSpaces ? pt(t, e.trailingSpace) : t, u = e.cm.state.specialChars, h = !1;
                if (u.test(t)) {
                    l = document.createDocumentFragment();
                    for (var d = 0; ; ) {
                        u.lastIndex = d;
                        var f = u.exec(t)
                          , g = f ? f.index - d : t.length - d;
                        if (g) {
                            var v = document.createTextNode(c.slice(d, d + g));
                            cs && us < 9 ? l.appendChild(r("span", [v])) : l.appendChild(v),
                            e.map.push(e.pos, e.pos + g, v),
                            e.col += g,
                            e.pos += g
                        }
                        if (!f)
                            break;
                        d += g + 1;
                        var m = void 0;
                        if ("\t" == f[0]) {
                            var y = e.cm.options.tabSize
                              , b = y - e.col % y;
                            (m = l.appendChild(r("span", p(b), "cm-tab"))).setAttribute("role", "presentation"),
                            m.setAttribute("cm-text", "\t"),
                            e.col += b
                        } else
                            "\r" == f[0] || "\n" == f[0] ? ((m = l.appendChild(r("span", "\r" == f[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", f[0]),
                            e.col += 1) : ((m = e.cm.options.specialCharPlaceholder(f[0])).setAttribute("cm-text", f[0]),
                            cs && us < 9 ? l.appendChild(r("span", [m])) : l.appendChild(m),
                            e.col += 1);
                        e.map.push(e.pos, e.pos + 1, m),
                        e.pos++
                    }
                } else
                    e.col += t.length,
                    l = document.createTextNode(c),
                    e.map.push(e.pos, e.pos + t.length, l),
                    cs && us < 9 && (h = !0),
                    e.pos += t.length;
                if (e.trailingSpace = 32 == c.charCodeAt(t.length - 1),
                n || i || o || h || a) {
                    var w = n || "";
                    i && (w += i),
                    o && (w += o);
                    var x = r("span", [l], w, a);
                    return s && (x.title = s),
                    e.content.appendChild(x)
                }
                e.content.appendChild(l)
            }
        }
        function pt(e, t) {
            if (e.length > 1 && !/  /.test(e))
                return e;
            for (var n = t, r = "", i = 0; i < e.length; i++) {
                var o = e.charAt(i);
                " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "),
                r += o,
                n = " " == o
            }
            return r
        }
        function gt(e, t) {
            return function(n, r, i, o, s, a, l) {
                i = i ? i + " cm-force-border" : "cm-force-border";
                for (var c = n.pos, u = c + r.length; ; ) {
                    for (var h = void 0, d = 0; d < t.length && !((h = t[d]).to > c && h.from <= c); d++)
                        ;
                    if (h.to >= u)
                        return e(n, r, i, o, s, a, l);
                    e(n, r.slice(0, h.to - c), i, o, null, a, l),
                    o = null,
                    r = r.slice(h.to - c),
                    c = h.to
                }
            }
        }
        function vt(e, t, n, r) {
            var i = !r && n.widgetNode;
            i && e.map.push(e.pos, e.pos + t, i),
            !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))),
            i.setAttribute("cm-marker", n.id)),
            i && (e.cm.display.input.setUneditable(i),
            e.content.appendChild(i)),
            e.pos += t,
            e.trailingSpace = !1
        }
        function mt(e, t, n) {
            var r = e.markedSpans
              , i = e.text
              , o = 0;
            if (r)
                for (var s, a, l, c, u, h, d, f = i.length, p = 0, g = 1, v = "", m = 0; ; ) {
                    if (m == p) {
                        l = c = u = h = a = "",
                        d = null,
                        m = 1 / 0;
                        for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                            var x = r[w]
                              , k = x.marker;
                            "bookmark" == k.type && x.from == p && k.widgetNode ? y.push(k) : x.from <= p && (null == x.to || x.to > p || k.collapsed && x.to == p && x.from == p) ? (null != x.to && x.to != p && m > x.to && (m = x.to,
                            c = ""),
                            k.className && (l += " " + k.className),
                            k.css && (a = (a ? a + ";" : "") + k.css),
                            k.startStyle && x.from == p && (u += " " + k.startStyle),
                            k.endStyle && x.to == m && (b || (b = [])).push(k.endStyle, x.to),
                            k.title && !h && (h = k.title),
                            k.collapsed && (!d || se(d.marker, k) < 0) && (d = x)) : x.from > p && m > x.from && (m = x.from)
                        }
                        if (b)
                            for (var C = 0; C < b.length; C += 2)
                                b[C + 1] == m && (c += " " + b[C]);
                        if (!d || d.from == p)
                            for (var _ = 0; _ < y.length; ++_)
                                vt(t, 0, y[_]);
                        if (d && (d.from || 0) == p) {
                            if (vt(t, (null == d.to ? f + 1 : d.to) - p, d.marker, null == d.from),
                            null == d.to)
                                return;
                            d.to == p && (d = !1)
                        }
                    }
                    if (p >= f)
                        break;
                    for (var S = Math.min(f, m); ; ) {
                        if (v) {
                            var L = p + v.length;
                            if (!d) {
                                var E = L > S ? v.slice(0, S - p) : v;
                                t.addToken(t, E, s ? s + l : l, u, p + E.length == m ? c : "", h, a)
                            }
                            if (L >= S) {
                                v = v.slice(S - p),
                                p = S;
                                break
                            }
                            p = L,
                            u = ""
                        }
                        v = i.slice(o, o = n[g++]),
                        s = ut(n[g++], t.cm.options)
                    }
                }
            else
                for (var T = 1; T < n.length; T += 2)
                    t.addToken(t, i.slice(o, o = n[T]), ut(n[T + 1], t.cm.options))
        }
        function yt(e, t, n) {
            this.line = t,
            this.rest = fe(t),
            this.size = this.rest ? A(g(this.rest)) - n + 1 : 1,
            this.node = this.text = null,
            this.hidden = ve(e, t)
        }
        function bt(e, t, n) {
            for (var r, i = [], o = t; o < n; o = r) {
                var s = new yt(e.doc,E(e.doc, o),o);
                r = o + s.size,
                i.push(s)
            }
            return i
        }
        function wt(e) {
            ca ? ca.ops.push(e) : e.ownsGroup = ca = {
                ops: [e],
                delayedCallbacks: []
            }
        }
        function xt(e) {
            var t = e.delayedCallbacks
              , n = 0;
            do {
                for (; n < t.length; n++)
                    t[n].call(null);
                for (var r = 0; r < e.ops.length; r++) {
                    var i = e.ops[r];
                    if (i.cursorActivityHandlers)
                        for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                            i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                }
            } while (n < t.length)
        }
        function kt(e, t) {
            var n = e.ownsGroup;
            if (n)
                try {
                    xt(n)
                } finally {
                    ca = null,
                    t(n)
                }
        }
        function Ct(e, t) {
            var n = Te(e, t);
            if (n.length) {
                var r, i = Array.prototype.slice.call(arguments, 2);
                ca ? r = ca.delayedCallbacks : ua ? r = ua : (r = ua = [],
                setTimeout(_t, 0));
                for (var o = 0; o < n.length; ++o)
                    !function(e) {
                        r.push(function() {
                            return n[e].apply(null, i)
                        })
                    }(o)
            }
        }
        function _t() {
            var e = ua;
            ua = null;
            for (var t = 0; t < e.length; ++t)
                e[t]()
        }
        function St(e, t, n, r) {
            for (var i = 0; i < t.changes.length; i++) {
                var o = t.changes[i];
                "text" == o ? Mt(e, t) : "gutter" == o ? At(e, t, n, r) : "class" == o ? Rt(e, t) : "widget" == o && Ft(e, t, r)
            }
            t.changes = null
        }
        function Lt(e) {
            return e.node == e.text && (e.node = r("div", null, null, "position: relative"),
            e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
            e.node.appendChild(e.text),
            cs && us < 8 && (e.node.style.zIndex = 2)),
            e.node
        }
        function Et(e, t) {
            var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
            if (n && (n += " CodeMirror-linebackground"),
            t.background)
                n ? t.background.className = n : (t.background.parentNode.removeChild(t.background),
                t.background = null);
            else if (n) {
                var i = Lt(t);
                t.background = i.insertBefore(r("div", null, n), i.firstChild),
                e.display.input.setUneditable(t.background)
            }
        }
        function Tt(e, t) {
            var n = e.display.externalMeasured;
            return n && n.line == t.line ? (e.display.externalMeasured = null,
            t.measure = n.measure,
            n.built) : ht(e, t)
        }
        function Mt(e, t) {
            var n = t.text.className
              , r = Tt(e, t);
            t.text == t.node && (t.node = r.pre),
            t.text.parentNode.replaceChild(r.pre, t.text),
            t.text = r.pre,
            r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass,
            t.textClass = r.textClass,
            Rt(e, t)) : n && (t.text.className = n)
        }
        function Rt(e, t) {
            Et(e, t),
            t.line.wrapClass ? Lt(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
            var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
            t.text.className = n || ""
        }
        function At(e, t, n, i) {
            if (t.gutter && (t.node.removeChild(t.gutter),
            t.gutter = null),
            t.gutterBackground && (t.node.removeChild(t.gutterBackground),
            t.gutterBackground = null),
            t.line.gutterClass) {
                var o = Lt(t);
                t.gutterBackground = r("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"),
                e.display.input.setUneditable(t.gutterBackground),
                o.insertBefore(t.gutterBackground, t.text)
            }
            var s = t.line.gutterMarkers;
            if (e.options.lineNumbers || s) {
                var a = Lt(t)
                  , l = t.gutter = r("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px");
                if (e.display.input.setUneditable(l),
                a.insertBefore(l, t.text),
                t.line.gutterClass && (l.className += " " + t.line.gutterClass),
                !e.options.lineNumbers || s && s["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(r("div", N(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))),
                s)
                    for (var c = 0; c < e.options.gutters.length; ++c) {
                        var u = e.options.gutters[c]
                          , h = s.hasOwnProperty(u) && s[u];
                        h && l.appendChild(r("div", [h], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[u] + "px; width: " + i.gutterWidth[u] + "px"))
                    }
            }
        }
        function Ft(e, t, n) {
            t.alignable && (t.alignable = null);
            for (var r = t.node.firstChild, i = void 0; r; r = i)
                i = r.nextSibling,
                "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
            Nt(e, t, n)
        }
        function Ot(e, t, n, r) {
            var i = Tt(e, t);
            return t.text = t.node = i.pre,
            i.bgClass && (t.bgClass = i.bgClass),
            i.textClass && (t.textClass = i.textClass),
            Rt(e, t),
            At(e, t, n, r),
            Nt(e, t, r),
            t.node
        }
        function Nt(e, t, n) {
            if (It(e, t.line, t, n, !0),
            t.rest)
                for (var r = 0; r < t.rest.length; r++)
                    It(e, t.rest[r], t, n, !1)
        }
        function It(e, t, n, i, o) {
            if (t.widgets)
                for (var s = Lt(n), a = 0, l = t.widgets; a < l.length; ++a) {
                    var c = l[a]
                      , u = r("div", [c.node], "CodeMirror-linewidget");
                    c.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"),
                    Pt(c, u, n, i),
                    e.display.input.setUneditable(u),
                    o && c.above ? s.insertBefore(u, n.gutter || n.text) : s.appendChild(u),
                    Ct(c, "redraw")
                }
        }
        function Pt(e, t, n, r) {
            if (e.noHScroll) {
                (n.alignable || (n.alignable = [])).push(t);
                var i = r.wrapperWidth;
                t.style.left = r.fixedPos + "px",
                e.coverGutter || (i -= r.gutterTotalWidth,
                t.style.paddingLeft = r.gutterTotalWidth + "px"),
                t.style.width = i + "px"
            }
            e.coverGutter && (t.style.zIndex = 5,
            t.style.position = "relative",
            e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
        }
        function Dt(e) {
            if (null != e.height)
                return e.height;
            var t = e.doc.cm;
            if (!t)
                return 0;
            if (!o(document.body, e.node)) {
                var i = "position: relative;";
                e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
                e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"),
                n(t.display.measure, r("div", [e.node], null, i))
            }
            return e.height = e.node.parentNode.offsetHeight
        }
        function Ht(e, t) {
            for (var n = qe(t); n != e.wrapper; n = n.parentNode)
                if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover)
                    return !0
        }
        function qt(e) {
            return e.lineSpace.offsetTop
        }
        function Wt(e) {
            return e.mover.offsetHeight - e.lineSpace.offsetHeight
        }
        function Bt(e) {
            if (e.cachedPaddingH)
                return e.cachedPaddingH;
            var t = n(e.measure, r("pre", "x"))
              , i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
              , o = {
                left: parseInt(i.paddingLeft),
                right: parseInt(i.paddingRight)
            };
            return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o),
            o
        }
        function zt(e) {
            return Os - e.display.nativeBarWidth
        }
        function Ut(e) {
            return e.display.scroller.clientWidth - zt(e) - e.display.barWidth
        }
        function Gt(e) {
            return e.display.scroller.clientHeight - zt(e) - e.display.barHeight
        }
        function jt(e, t, n) {
            var r = e.options.lineWrapping
              , i = r && Ut(e);
            if (!t.measure.heights || r && t.measure.width != i) {
                var o = t.measure.heights = [];
                if (r) {
                    t.measure.width = i;
                    for (var s = t.text.firstChild.getClientRects(), a = 0; a < s.length - 1; a++) {
                        var l = s[a]
                          , c = s[a + 1];
                        Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top)
                    }
                }
                o.push(n.bottom - n.top)
            }
        }
        function Vt(e, t, n) {
            if (e.line == t)
                return {
                    map: e.measure.map,
                    cache: e.measure.cache
                };
            for (var r = 0; r < e.rest.length; r++)
                if (e.rest[r] == t)
                    return {
                        map: e.measure.maps[r],
                        cache: e.measure.caches[r]
                    };
            for (var i = 0; i < e.rest.length; i++)
                if (A(e.rest[i]) > n)
                    return {
                        map: e.measure.maps[i],
                        cache: e.measure.caches[i],
                        before: !0
                    }
        }
        function Kt(e, t) {
            var r = A(t = he(t))
              , i = e.display.externalMeasured = new yt(e.doc,t,r);
            i.lineN = r;
            var o = i.built = ht(e, i);
            return i.text = o.pre,
            n(e.display.lineMeasure, o.pre),
            i
        }
        function $t(e, t, n, r) {
            return Zt(e, Yt(e, t), n, r)
        }
        function Xt(e, t) {
            if (t >= e.display.viewFrom && t < e.display.viewTo)
                return e.display.view[Sn(e, t)];
            var n = e.display.externalMeasured;
            return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
        }
        function Yt(e, t) {
            var n = A(t)
              , r = Xt(e, n);
            r && !r.text ? r = null : r && r.changes && (St(e, r, n, wn(e)),
            e.curOp.forceUpdate = !0),
            r || (r = Kt(e, t));
            var i = Vt(r, t, n);
            return {
                line: t,
                view: r,
                rect: null,
                map: i.map,
                cache: i.cache,
                before: i.before,
                hasHeights: !1
            }
        }
        function Zt(e, t, n, r, i) {
            t.before && (n = -1);
            var o, s = n + (r || "");
            return t.cache.hasOwnProperty(s) ? o = t.cache[s] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
            t.hasHeights || (jt(e, t.view, t.rect),
            t.hasHeights = !0),
            (o = en(e, t, n, r)).bogus || (t.cache[s] = o)),
            {
                left: o.left,
                right: o.right,
                top: i ? o.rtop : o.top,
                bottom: i ? o.rbottom : o.bottom
            }
        }
        function Qt(e, t, n) {
            for (var r, i, o, s, a, l, c = 0; c < e.length; c += 3)
                if (a = e[c],
                l = e[c + 1],
                t < a ? (i = 0,
                o = 1,
                s = "left") : t < l ? o = (i = t - a) + 1 : (c == e.length - 3 || t == l && e[c + 3] > t) && (i = (o = l - a) - 1,
                t >= l && (s = "right")),
                null != i) {
                    if (r = e[c + 2],
                    a == l && n == (r.insertLeft ? "left" : "right") && (s = n),
                    "left" == n && 0 == i)
                        for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                            r = e[2 + (c -= 3)],
                            s = "left";
                    if ("right" == n && i == l - a)
                        for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft; )
                            r = e[(c += 3) + 2],
                            s = "right";
                    break
                }
            return {
                node: r,
                start: i,
                end: o,
                collapse: s,
                coverStart: a,
                coverEnd: l
            }
        }
        function Jt(e, t) {
            var n = ha;
            if ("left" == t)
                for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++)
                    ;
            else
                for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--)
                    ;
            return n
        }
        function en(e, t, n, r) {
            var i, o = Qt(t.map, n, r), s = o.node, a = o.start, l = o.end, c = o.collapse;
            if (3 == s.nodeType) {
                for (var u = 0; u < 4; u++) {
                    for (; a && C(t.line.text.charAt(o.coverStart + a)); )
                        --a;
                    for (; o.coverStart + l < o.coverEnd && C(t.line.text.charAt(o.coverStart + l)); )
                        ++l;
                    if ((i = cs && us < 9 && 0 == a && l == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : Jt(Ss(s, a, l).getClientRects(), r)).left || i.right || 0 == a)
                        break;
                    l = a,
                    a -= 1,
                    c = "right"
                }
                cs && us < 11 && (i = tn(e.display.measure, i))
            } else {
                a > 0 && (c = r = "right");
                var h;
                i = e.options.lineWrapping && (h = s.getClientRects()).length > 1 ? h["right" == r ? h.length - 1 : 0] : s.getBoundingClientRect()
            }
            if (cs && us < 9 && !a && (!i || !i.left && !i.right)) {
                var d = s.parentNode.getClientRects()[0];
                i = d ? {
                    left: d.left,
                    right: d.left + bn(e.display),
                    top: d.top,
                    bottom: d.bottom
                } : ha
            }
            for (var f = i.top - t.rect.top, p = i.bottom - t.rect.top, g = (f + p) / 2, v = t.view.measure.heights, m = 0; m < v.length - 1 && !(g < v[m]); m++)
                ;
            var y = m ? v[m - 1] : 0
              , b = v[m]
              , w = {
                left: ("right" == c ? i.right : i.left) - t.rect.left,
                right: ("left" == c ? i.left : i.right) - t.rect.left,
                top: y,
                bottom: b
            };
            return i.left || i.right || (w.bogus = !0),
            e.options.singleCursorHeightPerLine || (w.rtop = f,
            w.rbottom = p),
            w
        }
        function tn(e, t) {
            if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Ue(e))
                return t;
            var n = screen.logicalXDPI / screen.deviceXDPI
              , r = screen.logicalYDPI / screen.deviceYDPI;
            return {
                left: t.left * n,
                right: t.right * n,
                top: t.top * r,
                bottom: t.bottom * r
            }
        }
        function nn(e) {
            if (e.measure && (e.measure.cache = {},
            e.measure.heights = null,
            e.rest))
                for (var t = 0; t < e.rest.length; t++)
                    e.measure.caches[t] = {}
        }
        function rn(e) {
            e.display.externalMeasure = null,
            t(e.display.lineMeasure);
            for (var n = 0; n < e.display.view.length; n++)
                nn(e.display.view[n])
        }
        function on(e) {
            rn(e),
            e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null,
            e.options.lineWrapping || (e.display.maxLineChanged = !0),
            e.display.lineNumChars = null
        }
        function sn() {
            return fs && bs ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
        }
        function an() {
            return fs && bs ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
        }
        function ln(e, t, n, r, i) {
            if (!i && t.widgets)
                for (var o = 0; o < t.widgets.length; ++o)
                    if (t.widgets[o].above) {
                        var s = Dt(t.widgets[o]);
                        n.top += s,
                        n.bottom += s
                    }
            if ("line" == r)
                return n;
            r || (r = "local");
            var a = ye(t);
            if ("local" == r ? a += qt(e.display) : a -= e.display.viewOffset,
            "page" == r || "window" == r) {
                var l = e.display.lineSpace.getBoundingClientRect();
                a += l.top + ("window" == r ? 0 : an());
                var c = l.left + ("window" == r ? 0 : sn());
                n.left += c,
                n.right += c
            }
            return n.top += a,
            n.bottom += a,
            n
        }
        function cn(e, t, n) {
            if ("div" == n)
                return t;
            var r = t.left
              , i = t.top;
            if ("page" == n)
                r -= sn(),
                i -= an();
            else if ("local" == n || !n) {
                var o = e.display.sizer.getBoundingClientRect();
                r += o.left,
                i += o.top
            }
            var s = e.display.lineSpace.getBoundingClientRect();
            return {
                left: r - s.left,
                top: i - s.top
            }
        }
        function un(e, t, n, r, i) {
            return r || (r = E(e.doc, t.line)),
            ln(e, r, $t(e, r, t.ch, i), n)
        }
        function hn(e, t, n, r, i, o) {
            function s(t, s) {
                var a = Zt(e, i, t, s ? "right" : "left", o);
                return s ? a.left = a.right : a.right = a.left,
                ln(e, r, a, n)
            }
            function a(e, t, n) {
                var r = l[t].level % 2 != 0;
                return s(n ? e - 1 : e, r != n)
            }
            r = r || E(e.doc, t.line),
            i || (i = Yt(e, r));
            var l = Ce(r, e.doc.direction)
              , c = t.ch
              , u = t.sticky;
            if (c >= r.text.length ? (c = r.text.length,
            u = "before") : c <= 0 && (c = 0,
            u = "after"),
            !l)
                return s("before" == u ? c - 1 : c, "before" == u);
            var h = ke(l, c, u)
              , d = Us
              , f = a(c, h, "before" == u);
            return null != d && (f.other = a(c, d, "before" != u)),
            f
        }
        function dn(e, t) {
            var n = 0;
            t = z(e.doc, t),
            e.options.lineWrapping || (n = bn(e.display) * t.ch);
            var r = E(e.doc, t.line)
              , i = ye(r) + qt(e.display);
            return {
                left: n,
                right: n,
                top: i,
                bottom: i + r.height
            }
        }
        function fn(e, t, n, r, i) {
            var o = I(e, t, n);
            return o.xRel = i,
            r && (o.outside = !0),
            o
        }
        function pn(e, t, n) {
            var r = e.doc;
            if ((n += e.display.viewOffset) < 0)
                return fn(r.first, 0, null, !0, -1);
            var i = F(r, n)
              , o = r.first + r.size - 1;
            if (i > o)
                return fn(r.first + r.size - 1, E(r, o).text.length, null, !0, 1);
            t < 0 && (t = 0);
            for (var s = E(r, i); ; ) {
                var a = mn(e, s, i, t, n)
                  , l = ce(s)
                  , c = l && l.find(0, !0);
                if (!l || !(a.ch > c.from.ch || a.ch == c.from.ch && a.xRel > 0))
                    return a;
                i = A(s = c.to.line)
            }
        }
        function gn(e, t, n, r) {
            var i = function(r) {
                return ln(e, t, Zt(e, n, r), "line")
            }
              , o = t.text.length
              , s = S(function(e) {
                return i(e - 1).bottom <= r
            }, o, 0);
            return o = S(function(e) {
                return i(e).top > r
            }, s, o),
            {
                begin: s,
                end: o
            }
        }
        function vn(e, t, n, r) {
            return gn(e, t, n, ln(e, t, Zt(e, n, r), "line").top)
        }
        function mn(e, t, n, r, i) {
            i -= ye(t);
            var o, s = 0, a = t.text.length, l = Yt(e, t);
            if (Ce(t, e.doc.direction)) {
                if (e.options.lineWrapping) {
                    var c;
                    s = (c = gn(e, t, l, i)).begin,
                    a = c.end
                }
                o = new I(n,Math.floor(s + (a - s) / 2));
                var u, h, d = hn(e, o, "line", t, l).left, f = d < r ? 1 : -1, p = d - r, g = Math.ceil((a - s) / 4);
                e: do {
                    u = p,
                    h = o;
                    for (var v = 0; v < g; ++v) {
                        var m = o;
                        if (null == (o = Ee(e, t, o, f)) || o.ch < s || a <= ("before" == o.sticky ? o.ch - 1 : o.ch)) {
                            o = m;
                            break e
                        }
                    }
                    if (p = hn(e, o, "line", t, l).left - r,
                    g > 1) {
                        var y = Math.abs(p - u) / g;
                        g = Math.min(g, Math.ceil(Math.abs(p) / y)),
                        f = p < 0 ? 1 : -1
                    }
                } while (0 != p && (g > 1 || f < 0 != p < 0 && Math.abs(p) <= Math.abs(u)));if (Math.abs(p) > Math.abs(u)) {
                    if (p < 0 == u < 0)
                        throw new Error("Broke out of infinite loop in coordsCharInner");
                    o = h
                }
            } else {
                var b = S(function(n) {
                    var o = ln(e, t, Zt(e, l, n), "line");
                    return o.top > i ? (a = Math.min(n, a),
                    !0) : !(o.bottom <= i) && (o.left > r || !(o.right < r) && r - o.left < o.right - r)
                }, s, a);
                o = new I(n,b = _(t.text, b, 1),b == a ? "before" : "after")
            }
            var w = hn(e, o, "line", t, l);
            return (i < w.top || w.bottom < i) && (o.outside = !0),
            o.xRel = r < w.left ? -1 : r > w.right ? 1 : 0,
            o
        }
        function yn(e) {
            if (null != e.cachedTextHeight)
                return e.cachedTextHeight;
            if (null == sa) {
                sa = r("pre");
                for (var i = 0; i < 49; ++i)
                    sa.appendChild(document.createTextNode("x")),
                    sa.appendChild(r("br"));
                sa.appendChild(document.createTextNode("x"))
            }
            n(e.measure, sa);
            var o = sa.offsetHeight / 50;
            return o > 3 && (e.cachedTextHeight = o),
            t(e.measure),
            o || 1
        }
        function bn(e) {
            if (null != e.cachedCharWidth)
                return e.cachedCharWidth;
            var t = r("span", "xxxxxxxxxx")
              , i = r("pre", [t]);
            n(e.measure, i);
            var o = t.getBoundingClientRect()
              , s = (o.right - o.left) / 10;
            return s > 2 && (e.cachedCharWidth = s),
            s || 10
        }
        function wn(e) {
            for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, s = 0; o; o = o.nextSibling,
            ++s)
                n[e.options.gutters[s]] = o.offsetLeft + o.clientLeft + i,
                r[e.options.gutters[s]] = o.clientWidth;
            return {
                fixedPos: xn(t),
                gutterTotalWidth: t.gutters.offsetWidth,
                gutterLeft: n,
                gutterWidth: r,
                wrapperWidth: t.wrapper.clientWidth
            }
        }
        function xn(e) {
            return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
        }
        function kn(e) {
            var t = yn(e.display)
              , n = e.options.lineWrapping
              , r = n && Math.max(5, e.display.scroller.clientWidth / bn(e.display) - 3);
            return function(i) {
                if (ve(e.doc, i))
                    return 0;
                var o = 0;
                if (i.widgets)
                    for (var s = 0; s < i.widgets.length; s++)
                        i.widgets[s].height && (o += i.widgets[s].height);
                return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
            }
        }
        function Cn(e) {
            var t = e.doc
              , n = kn(e);
            t.iter(function(e) {
                var t = n(e);
                t != e.height && R(e, t)
            })
        }
        function _n(e, t, n, r) {
            var i = e.display;
            if (!n && "true" == qe(t).getAttribute("cm-not-content"))
                return null;
            var o, s, a = i.lineSpace.getBoundingClientRect();
            try {
                o = t.clientX - a.left,
                s = t.clientY - a.top
            } catch (t) {
                return null
            }
            var l, c = pn(e, o, s);
            if (r && 1 == c.xRel && (l = E(e.doc, c.line).text).length == c.ch) {
                var u = h(l, l.length, e.options.tabSize) - l.length;
                c = I(c.line, Math.max(0, Math.round((o - Bt(e.display).left) / bn(e.display)) - u))
            }
            return c
        }
        function Sn(e, t) {
            if (t >= e.display.viewTo)
                return null;
            if ((t -= e.display.viewFrom) < 0)
                return null;
            for (var n = e.display.view, r = 0; r < n.length; r++)
                if ((t -= n[r].size) < 0)
                    return r
        }
        function Ln(e) {
            e.display.input.showSelection(e.display.input.prepareSelection())
        }
        function En(e, t) {
            for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), s = 0; s < n.sel.ranges.length; s++)
                if (!1 !== t || s != n.sel.primIndex) {
                    var a = n.sel.ranges[s];
                    if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
                        var l = a.empty();
                        (l || e.options.showCursorWhenSelecting) && Tn(e, a.head, i),
                        l || Mn(e, a, o)
                    }
                }
            return r
        }
        function Tn(e, t, n) {
            var i = hn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine)
              , o = n.appendChild(r("div", " ", "CodeMirror-cursor"));
            if (o.style.left = i.left + "px",
            o.style.top = i.top + "px",
            o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px",
            i.other) {
                var s = n.appendChild(r("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                s.style.display = "",
                s.style.left = i.other.left + "px",
                s.style.top = i.other.top + "px",
                s.style.height = .85 * (i.other.bottom - i.other.top) + "px"
            }
        }
        function Mn(e, t, n) {
            function i(e, t, n, i) {
                t < 0 && (t = 0),
                t = Math.round(t),
                i = Math.round(i),
                l.appendChild(r("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? h - e : n) + "px;\n                             height: " + (i - t) + "px"))
            }
            function o(t, n, r) {
                function o(n, r) {
                    return un(e, I(t, n), "div", c, r)
                }
                var s, l, c = E(a, t), d = c.text.length;
                return xe(Ce(c, a.direction), n || 0, null == r ? d : r, function(e, t, a) {
                    var c, f, p, g = o(e, "left");
                    if (e == t)
                        c = g,
                        f = p = g.left;
                    else {
                        if (c = o(t - 1, "right"),
                        "rtl" == a) {
                            var v = g;
                            g = c,
                            c = v
                        }
                        f = g.left,
                        p = c.right
                    }
                    null == n && 0 == e && (f = u),
                    c.top - g.top > 3 && (i(f, g.top, null, g.bottom),
                    f = u,
                    g.bottom < c.top && i(f, g.bottom, null, c.top)),
                    null == r && t == d && (p = h),
                    (!s || g.top < s.top || g.top == s.top && g.left < s.left) && (s = g),
                    (!l || c.bottom > l.bottom || c.bottom == l.bottom && c.right > l.right) && (l = c),
                    f < u + 1 && (f = u),
                    i(f, c.top, p - f, c.bottom)
                }),
                {
                    start: s,
                    end: l
                }
            }
            var s = e.display
              , a = e.doc
              , l = document.createDocumentFragment()
              , c = Bt(e.display)
              , u = c.left
              , h = Math.max(s.sizerWidth, Ut(e) - s.sizer.offsetLeft) - c.right
              , d = t.from()
              , f = t.to();
            if (d.line == f.line)
                o(d.line, d.ch, f.ch);
            else {
                var p = E(a, d.line)
                  , g = E(a, f.line)
                  , v = he(p) == he(g)
                  , m = o(d.line, d.ch, v ? p.text.length + 1 : null).end
                  , y = o(f.line, v ? 0 : null, f.ch).start;
                v && (m.top < y.top - 2 ? (i(m.right, m.top, null, m.bottom),
                i(u, y.top, y.left, y.bottom)) : i(m.right, m.top, y.left - m.right, m.bottom)),
                m.bottom < y.top && i(u, m.bottom, null, y.top)
            }
            n.appendChild(l)
        }
        function Rn(e) {
            if (e.state.focused) {
                var t = e.display;
                clearInterval(t.blinker);
                var n = !0;
                t.cursorDiv.style.visibility = "",
                e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
                    return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
            }
        }
        function An(e) {
            e.state.focused || (e.display.input.focus(),
            On(e))
        }
        function Fn(e) {
            e.state.delayingBlurEvent = !0,
            setTimeout(function() {
                e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1,
                Nn(e))
            }, 100)
        }
        function On(e, t) {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
            "nocursor" != e.options.readOnly && (e.state.focused || (Re(e, "focus", e, t),
            e.state.focused = !0,
            a(e.display.wrapper, "CodeMirror-focused"),
            e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(),
            hs && setTimeout(function() {
                return e.display.input.reset(!0)
            }, 20)),
            e.display.input.receivedFocus()),
            Rn(e))
        }
        function Nn(e, t) {
            e.state.delayingBlurEvent || (e.state.focused && (Re(e, "blur", e, t),
            e.state.focused = !1,
            Ts(e.display.wrapper, "CodeMirror-focused")),
            clearInterval(e.display.blinker),
            setTimeout(function() {
                e.state.focused || (e.display.shift = !1)
            }, 150))
        }
        function In(e) {
            for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
                var i = t.view[r]
                  , o = void 0;
                if (!i.hidden) {
                    if (cs && us < 8) {
                        var s = i.node.offsetTop + i.node.offsetHeight;
                        o = s - n,
                        n = s
                    } else {
                        var a = i.node.getBoundingClientRect();
                        o = a.bottom - a.top
                    }
                    var l = i.line.height - o;
                    if (o < 2 && (o = yn(t)),
                    (l > .005 || l < -.005) && (R(i.line, o),
                    Pn(i.line),
                    i.rest))
                        for (var c = 0; c < i.rest.length; c++)
                            Pn(i.rest[c])
                }
            }
        }
        function Pn(e) {
            if (e.widgets)
                for (var t = 0; t < e.widgets.length; ++t)
                    e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight
        }
        function Dn(e, t, n) {
            var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
            r = Math.floor(r - qt(e));
            var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight
              , o = F(t, r)
              , s = F(t, i);
            if (n && n.ensure) {
                var a = n.ensure.from.line
                  , l = n.ensure.to.line;
                a < o ? (o = a,
                s = F(t, ye(E(t, a)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= s && (o = F(t, ye(E(t, l)) - e.wrapper.clientHeight),
                s = l)
            }
            return {
                from: o,
                to: Math.max(s, o + 1)
            }
        }
        function Hn(e) {
            var t = e.display
              , n = t.view;
            if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
                for (var r = xn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", s = 0; s < n.length; s++)
                    if (!n[s].hidden) {
                        e.options.fixedGutter && (n[s].gutter && (n[s].gutter.style.left = o),
                        n[s].gutterBackground && (n[s].gutterBackground.style.left = o));
                        var a = n[s].alignable;
                        if (a)
                            for (var l = 0; l < a.length; l++)
                                a[l].style.left = o
                    }
                e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
            }
        }
        function qn(e) {
            if (!e.options.lineNumbers)
                return !1;
            var t = e.doc
              , n = N(e.options, t.first + t.size - 1)
              , i = e.display;
            if (n.length != i.lineNumChars) {
                var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
                  , s = o.firstChild.offsetWidth
                  , a = o.offsetWidth - s;
                return i.lineGutter.style.width = "",
                i.lineNumInnerWidth = Math.max(s, i.lineGutter.offsetWidth - a) + 1,
                i.lineNumWidth = i.lineNumInnerWidth + a,
                i.lineNumChars = i.lineNumInnerWidth ? n.length : -1,
                i.lineGutter.style.width = i.lineNumWidth + "px",
                Rr(e),
                !0
            }
            return !1
        }
        function Wn(e, t) {
            if (!Ae(e, "scrollCursorIntoView")) {
                var n = e.display
                  , i = n.sizer.getBoundingClientRect()
                  , o = null;
                if (t.top + i.top < 0 ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1),
                null != o && !ms) {
                    var s = r("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - qt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + zt(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                    e.display.lineSpace.appendChild(s),
                    s.scrollIntoView(o),
                    e.display.lineSpace.removeChild(s)
                }
            }
        }
        function Bn(e, t, n, r) {
            null == r && (r = 0);
            var i;
            e.options.lineWrapping || t != n || (n = "before" == (t = t.ch ? I(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? I(t.line, t.ch + 1, "before") : t);
            for (var o = 0; o < 5; o++) {
                var s = !1
                  , a = hn(e, t)
                  , l = n && n != t ? hn(e, n) : a
                  , c = Un(e, i = {
                    left: Math.min(a.left, l.left),
                    top: Math.min(a.top, l.top) - r,
                    right: Math.max(a.left, l.left),
                    bottom: Math.max(a.bottom, l.bottom) + r
                })
                  , u = e.doc.scrollTop
                  , h = e.doc.scrollLeft;
                if (null != c.scrollTop && (Yn(e, c.scrollTop),
                Math.abs(e.doc.scrollTop - u) > 1 && (s = !0)),
                null != c.scrollLeft && (Qn(e, c.scrollLeft),
                Math.abs(e.doc.scrollLeft - h) > 1 && (s = !0)),
                !s)
                    break
            }
            return i
        }
        function zn(e, t) {
            var n = Un(e, t);
            null != n.scrollTop && Yn(e, n.scrollTop),
            null != n.scrollLeft && Qn(e, n.scrollLeft)
        }
        function Un(e, t) {
            var n = e.display
              , r = yn(e.display);
            t.top < 0 && (t.top = 0);
            var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop
              , o = Gt(e)
              , s = {};
            t.bottom - t.top > o && (t.bottom = t.top + o);
            var a = e.doc.height + Wt(n)
              , l = t.top < r
              , c = t.bottom > a - r;
            if (t.top < i)
                s.scrollTop = l ? 0 : t.top;
            else if (t.bottom > i + o) {
                var u = Math.min(t.top, (c ? a : t.bottom) - o);
                u != i && (s.scrollTop = u)
            }
            var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft
              , d = Ut(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0)
              , f = t.right - t.left > d;
            return f && (t.right = t.left + d),
            t.left < 10 ? s.scrollLeft = 0 : t.left < h ? s.scrollLeft = Math.max(0, t.left - (f ? 0 : 10)) : t.right > d + h - 3 && (s.scrollLeft = t.right + (f ? 0 : 10) - d),
            s
        }
        function Gn(e, t) {
            null != t && ($n(e),
            e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
        }
        function jn(e) {
            $n(e);
            var t = e.getCursor();
            e.curOp.scrollToPos = {
                from: t,
                to: t,
                margin: e.options.cursorScrollMargin
            }
        }
        function Vn(e, t, n) {
            null == t && null == n || $n(e),
            null != t && (e.curOp.scrollLeft = t),
            null != n && (e.curOp.scrollTop = n)
        }
        function Kn(e, t) {
            $n(e),
            e.curOp.scrollToPos = t
        }
        function $n(e) {
            var t = e.curOp.scrollToPos;
            t && (e.curOp.scrollToPos = null,
            Xn(e, dn(e, t.from), dn(e, t.to), t.margin))
        }
        function Xn(e, t, n, r) {
            var i = Un(e, {
                left: Math.min(t.left, n.left),
                top: Math.min(t.top, n.top) - r,
                right: Math.max(t.right, n.right),
                bottom: Math.max(t.bottom, n.bottom) + r
            });
            Vn(e, i.scrollLeft, i.scrollTop)
        }
        function Yn(e, t) {
            Math.abs(e.doc.scrollTop - t) < 2 || (os || Tr(e, {
                top: t
            }),
            Zn(e, t, !0),
            os && Tr(e),
            xr(e, 100))
        }
        function Zn(e, t, n) {
            t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t),
            (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t,
            e.display.scrollbars.setScrollTop(t),
            e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
        }
        function Qn(e, t, n, r) {
            t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth),
            (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t,
            Hn(e),
            e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
            e.display.scrollbars.setScrollLeft(t))
        }
        function Jn(e) {
            var t = e.display
              , n = t.gutters.offsetWidth
              , r = Math.round(e.doc.height + Wt(e.display));
            return {
                clientHeight: t.scroller.clientHeight,
                viewHeight: t.wrapper.clientHeight,
                scrollWidth: t.scroller.scrollWidth,
                clientWidth: t.scroller.clientWidth,
                viewWidth: t.wrapper.clientWidth,
                barLeft: e.options.fixedGutter ? n : 0,
                docHeight: r,
                scrollHeight: r + zt(e) + t.barHeight,
                nativeBarWidth: t.nativeBarWidth,
                gutterWidth: n
            }
        }
        function er(e, t) {
            t || (t = Jn(e));
            var n = e.display.barWidth
              , r = e.display.barHeight;
            tr(e, t);
            for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++)
                n != e.display.barWidth && e.options.lineWrapping && In(e),
                tr(e, Jn(e)),
                n = e.display.barWidth,
                r = e.display.barHeight
        }
        function tr(e, t) {
            var n = e.display
              , r = n.scrollbars.update(t);
            n.sizer.style.paddingRight = (n.barWidth = r.right) + "px",
            n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px",
            n.heightForcer.style.borderBottom = r.bottom + "px solid transparent",
            r.right && r.bottom ? (n.scrollbarFiller.style.display = "block",
            n.scrollbarFiller.style.height = r.bottom + "px",
            n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "",
            r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block",
            n.gutterFiller.style.height = r.bottom + "px",
            n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
        }
        function nr(e) {
            e.display.scrollbars && (e.display.scrollbars.clear(),
            e.display.scrollbars.addClass && Ts(e.display.wrapper, e.display.scrollbars.addClass)),
            e.display.scrollbars = new pa[e.options.scrollbarStyle](function(t) {
                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                Vs(t, "mousedown", function() {
                    e.state.focused && setTimeout(function() {
                        return e.display.input.focus()
                    }, 0)
                }),
                t.setAttribute("cm-not-content", "true")
            }
            ,function(t, n) {
                "horizontal" == n ? Qn(e, t) : Yn(e, t)
            }
            ,e),
            e.display.scrollbars.addClass && a(e.display.wrapper, e.display.scrollbars.addClass)
        }
        function rr(e) {
            e.curOp = {
                cm: e,
                viewChanged: !1,
                startHeight: e.doc.height,
                forceUpdate: !1,
                updateInput: null,
                typing: !1,
                changeObjs: null,
                cursorActivityHandlers: null,
                cursorActivityCalled: 0,
                selectionChanged: !1,
                updateMaxLine: !1,
                scrollLeft: null,
                scrollTop: null,
                scrollToPos: null,
                focus: !1,
                id: ++ga
            },
            wt(e.curOp)
        }
        function ir(e) {
            kt(e.curOp, function(e) {
                for (var t = 0; t < e.ops.length; t++)
                    e.ops[t].cm.curOp = null;
                or(e)
            })
        }
        function or(e) {
            for (var t = e.ops, n = 0; n < t.length; n++)
                sr(t[n]);
            for (var r = 0; r < t.length; r++)
                ar(t[r]);
            for (var i = 0; i < t.length; i++)
                lr(t[i]);
            for (var o = 0; o < t.length; o++)
                cr(t[o]);
            for (var s = 0; s < t.length; s++)
                ur(t[s])
        }
        function sr(e) {
            var t = e.cm
              , n = t.display;
            Cr(t),
            e.updateMaxLine && we(t),
            e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping,
            e.update = e.mustUpdate && new va(t,e.mustUpdate && {
                top: e.scrollTop,
                ensure: e.scrollToPos
            },e.forceUpdate)
        }
        function ar(e) {
            e.updatedDisplay = e.mustUpdate && Lr(e.cm, e.update)
        }
        function lr(e) {
            var t = e.cm
              , n = t.display;
            e.updatedDisplay && In(t),
            e.barMeasure = Jn(t),
            n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = $t(t, n.maxLine, n.maxLine.text.length).left + 3,
            t.display.sizerWidth = e.adjustWidthTo,
            e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + zt(t) + t.display.barWidth),
            e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Ut(t))),
            (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus))
        }
        function cr(e) {
            var t = e.cm;
            null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px",
            e.maxScrollLeft < t.doc.scrollLeft && Qn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
            t.display.maxLineChanged = !1);
            var n = e.focus && e.focus == s() && (!document.hasFocus || document.hasFocus());
            e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
            (e.updatedDisplay || e.startHeight != t.doc.height) && er(t, e.barMeasure),
            e.updatedDisplay && Ar(t, e.barMeasure),
            e.selectionChanged && Rn(t),
            t.state.focused && e.updateInput && t.display.input.reset(e.typing),
            n && An(e.cm)
        }
        function ur(e) {
            var t = e.cm
              , n = t.display
              , r = t.doc;
            e.updatedDisplay && Er(t, e.update),
            null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null),
            null != e.scrollTop && Zn(t, e.scrollTop, e.forceScroll),
            null != e.scrollLeft && Qn(t, e.scrollLeft, !0, !0),
            e.scrollToPos && Wn(t, Bn(t, z(r, e.scrollToPos.from), z(r, e.scrollToPos.to), e.scrollToPos.margin));
            var i = e.maybeHiddenMarkers
              , o = e.maybeUnhiddenMarkers;
            if (i)
                for (var s = 0; s < i.length; ++s)
                    i[s].lines.length || Re(i[s], "hide");
            if (o)
                for (var a = 0; a < o.length; ++a)
                    o[a].lines.length && Re(o[a], "unhide");
            n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
            e.changeObjs && Re(t, "changes", t, e.changeObjs),
            e.update && e.update.finish()
        }
        function hr(e, t) {
            if (e.curOp)
                return t();
            rr(e);
            try {
                return t()
            } finally {
                ir(e)
            }
        }
        function dr(e, t) {
            return function() {
                if (e.curOp)
                    return t.apply(e, arguments);
                rr(e);
                try {
                    return t.apply(e, arguments)
                } finally {
                    ir(e)
                }
            }
        }
        function fr(e) {
            return function() {
                if (this.curOp)
                    return e.apply(this, arguments);
                rr(this);
                try {
                    return e.apply(this, arguments)
                } finally {
                    ir(this)
                }
            }
        }
        function pr(e) {
            return function() {
                var t = this.cm;
                if (!t || t.curOp)
                    return e.apply(this, arguments);
                rr(t);
                try {
                    return e.apply(this, arguments)
                } finally {
                    ir(t)
                }
            }
        }
        function gr(e, t, n, r) {
            null == t && (t = e.doc.first),
            null == n && (n = e.doc.first + e.doc.size),
            r || (r = 0);
            var i = e.display;
            if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t),
            e.curOp.viewChanged = !0,
            t >= i.viewTo)
                zs && pe(e.doc, t) < i.viewTo && mr(e);
            else if (n <= i.viewFrom)
                zs && ge(e.doc, n + r) > i.viewFrom ? mr(e) : (i.viewFrom += r,
                i.viewTo += r);
            else if (t <= i.viewFrom && n >= i.viewTo)
                mr(e);
            else if (t <= i.viewFrom) {
                var o = yr(e, n, n + r, 1);
                o ? (i.view = i.view.slice(o.index),
                i.viewFrom = o.lineN,
                i.viewTo += r) : mr(e)
            } else if (n >= i.viewTo) {
                var s = yr(e, t, t, -1);
                s ? (i.view = i.view.slice(0, s.index),
                i.viewTo = s.lineN) : mr(e)
            } else {
                var a = yr(e, t, t, -1)
                  , l = yr(e, n, n + r, 1);
                a && l ? (i.view = i.view.slice(0, a.index).concat(bt(e, a.lineN, l.lineN)).concat(i.view.slice(l.index)),
                i.viewTo += r) : mr(e)
            }
            var c = i.externalMeasured;
            c && (n < c.lineN ? c.lineN += r : t < c.lineN + c.size && (i.externalMeasured = null))
        }
        function vr(e, t, n) {
            e.curOp.viewChanged = !0;
            var r = e.display
              , i = e.display.externalMeasured;
            if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null),
            !(t < r.viewFrom || t >= r.viewTo)) {
                var o = r.view[Sn(e, t)];
                if (null != o.node) {
                    var s = o.changes || (o.changes = []);
                    -1 == d(s, n) && s.push(n)
                }
            }
        }
        function mr(e) {
            e.display.viewFrom = e.display.viewTo = e.doc.first,
            e.display.view = [],
            e.display.viewOffset = 0
        }
        function yr(e, t, n, r) {
            var i, o = Sn(e, t), s = e.display.view;
            if (!zs || n == e.doc.first + e.doc.size)
                return {
                    index: o,
                    lineN: n
                };
            for (var a = e.display.viewFrom, l = 0; l < o; l++)
                a += s[l].size;
            if (a != t) {
                if (r > 0) {
                    if (o == s.length - 1)
                        return null;
                    i = a + s[o].size - t,
                    o++
                } else
                    i = a - t;
                t += i,
                n += i
            }
            for (; pe(e.doc, n) != n; ) {
                if (o == (r < 0 ? 0 : s.length - 1))
                    return null;
                n += r * s[o - (r < 0 ? 1 : 0)].size,
                o += r
            }
            return {
                index: o,
                lineN: n
            }
        }
        function br(e, t, n) {
            var r = e.display;
            0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = bt(e, t, n),
            r.viewFrom = t) : (r.viewFrom > t ? r.view = bt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Sn(e, t))),
            r.viewFrom = t,
            r.viewTo < n ? r.view = r.view.concat(bt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Sn(e, n)))),
            r.viewTo = n
        }
        function wr(e) {
            for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                var i = t[r];
                i.hidden || i.node && !i.changes || ++n
            }
            return n
        }
        function xr(e, t) {
            e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, c(kr, e))
        }
        function kr(e) {
            var t = e.doc;
            if (!(t.highlightFrontier >= e.display.viewTo)) {
                var n = +new Date + e.options.workTime
                  , r = Je(e, t.highlightFrontier)
                  , i = [];
                t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
                    if (r.line >= e.display.viewFrom) {
                        var s = o.styles
                          , a = o.text.length > e.options.maxHighlightLength ? $e(t.mode, r.state) : null
                          , l = Ze(e, o, r, !0);
                        a && (r.state = a),
                        o.styles = l.styles;
                        var c = o.styleClasses
                          , u = l.classes;
                        u ? o.styleClasses = u : c && (o.styleClasses = null);
                        for (var h = !s || s.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), d = 0; !h && d < s.length; ++d)
                            h = s[d] != o.styles[d];
                        h && i.push(r.line),
                        o.stateAfter = r.save(),
                        r.nextLine()
                    } else
                        o.text.length <= e.options.maxHighlightLength && et(e, o.text, r),
                        o.stateAfter = r.line % 5 == 0 ? r.save() : null,
                        r.nextLine();
                    if (+new Date > n)
                        return xr(e, e.options.workDelay),
                        !0
                }),
                t.highlightFrontier = r.line,
                t.modeFrontier = Math.max(t.modeFrontier, r.line),
                i.length && hr(e, function() {
                    for (var t = 0; t < i.length; t++)
                        vr(e, i[t], "text")
                })
            }
        }
        function Cr(e) {
            var t = e.display;
            !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth,
            t.heightForcer.style.height = zt(e) + "px",
            t.sizer.style.marginBottom = -t.nativeBarWidth + "px",
            t.sizer.style.borderRightWidth = zt(e) + "px",
            t.scrollbarsClipped = !0)
        }
        function _r(e) {
            if (e.hasFocus())
                return null;
            var t = s();
            if (!t || !o(e.display.lineDiv, t))
                return null;
            var n = {
                activeElt: t
            };
            if (window.getSelection) {
                var r = window.getSelection();
                r.anchorNode && r.extend && o(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode,
                n.anchorOffset = r.anchorOffset,
                n.focusNode = r.focusNode,
                n.focusOffset = r.focusOffset)
            }
            return n
        }
        function Sr(e) {
            if (e && e.activeElt && e.activeElt != s() && (e.activeElt.focus(),
            e.anchorNode && o(document.body, e.anchorNode) && o(document.body, e.focusNode))) {
                var t = window.getSelection()
                  , n = document.createRange();
                n.setEnd(e.anchorNode, e.anchorOffset),
                n.collapse(!1),
                t.removeAllRanges(),
                t.addRange(n),
                t.extend(e.focusNode, e.focusOffset)
            }
        }
        function Lr(e, n) {
            var r = e.display
              , i = e.doc;
            if (n.editorIsHidden)
                return mr(e),
                !1;
            if (!n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == wr(e))
                return !1;
            qn(e) && (mr(e),
            n.dims = wn(e));
            var o = i.first + i.size
              , s = Math.max(n.visible.from - e.options.viewportMargin, i.first)
              , a = Math.min(o, n.visible.to + e.options.viewportMargin);
            r.viewFrom < s && s - r.viewFrom < 20 && (s = Math.max(i.first, r.viewFrom)),
            r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(o, r.viewTo)),
            zs && (s = pe(e.doc, s),
            a = ge(e.doc, a));
            var l = s != r.viewFrom || a != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
            br(e, s, a),
            r.viewOffset = ye(E(e.doc, r.viewFrom)),
            e.display.mover.style.top = r.viewOffset + "px";
            var c = wr(e);
            if (!l && 0 == c && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo))
                return !1;
            var u = _r(e);
            return c > 4 && (r.lineDiv.style.display = "none"),
            Mr(e, r.updateLineNumbers, n.dims),
            c > 4 && (r.lineDiv.style.display = ""),
            r.renderedView = r.view,
            Sr(u),
            t(r.cursorDiv),
            t(r.selectionDiv),
            r.gutters.style.height = r.sizer.style.minHeight = 0,
            l && (r.lastWrapHeight = n.wrapperHeight,
            r.lastWrapWidth = n.wrapperWidth,
            xr(e, 400)),
            r.updateLineNumbers = null,
            !0
        }
        function Er(e, t) {
            for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != Ut(e) || (n && null != n.top && (n = {
                top: Math.min(e.doc.height + Wt(e.display) - Gt(e), n.top)
            }),
            t.visible = Dn(e.display, e.doc, n),
            !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && Lr(e, t); r = !1) {
                In(e);
                var i = Jn(e);
                Ln(e),
                er(e, i),
                Ar(e, i),
                t.force = !1
            }
            t.signal(e, "update", e),
            e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
            e.display.reportedViewFrom = e.display.viewFrom,
            e.display.reportedViewTo = e.display.viewTo)
        }
        function Tr(e, t) {
            var n = new va(e,t);
            if (Lr(e, n)) {
                In(e),
                Er(e, n);
                var r = Jn(e);
                Ln(e),
                er(e, r),
                Ar(e, r),
                n.finish()
            }
        }
        function Mr(e, n, r) {
            function i(t) {
                var n = t.nextSibling;
                return hs && xs && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t),
                n
            }
            for (var o = e.display, s = e.options.lineNumbers, a = o.lineDiv, l = a.firstChild, c = o.view, u = o.viewFrom, h = 0; h < c.length; h++) {
                var f = c[h];
                if (f.hidden)
                    ;
                else if (f.node && f.node.parentNode == a) {
                    for (; l != f.node; )
                        l = i(l);
                    var p = s && null != n && n <= u && f.lineNumber;
                    f.changes && (d(f.changes, "gutter") > -1 && (p = !1),
                    St(e, f, u, r)),
                    p && (t(f.lineNumber),
                    f.lineNumber.appendChild(document.createTextNode(N(e.options, u)))),
                    l = f.node.nextSibling
                } else {
                    var g = Ot(e, f, u, r);
                    a.insertBefore(g, l)
                }
                u += f.size
            }
            for (; l; )
                l = i(l)
        }
        function Rr(e) {
            var t = e.display.gutters.offsetWidth;
            e.display.sizer.style.marginLeft = t + "px"
        }
        function Ar(e, t) {
            e.display.sizer.style.minHeight = t.docHeight + "px",
            e.display.heightForcer.style.top = t.docHeight + "px",
            e.display.gutters.style.height = t.docHeight + e.display.barHeight + zt(e) + "px"
        }
        function Fr(e) {
            var n = e.display.gutters
              , i = e.options.gutters;
            t(n);
            for (var o = 0; o < i.length; ++o) {
                var s = i[o]
                  , a = n.appendChild(r("div", null, "CodeMirror-gutter " + s));
                "CodeMirror-linenumbers" == s && (e.display.lineGutter = a,
                a.style.width = (e.display.lineNumWidth || 1) + "px")
            }
            n.style.display = o ? "" : "none",
            Rr(e)
        }
        function Or(e) {
            var t = d(e.gutters, "CodeMirror-linenumbers");
            -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0),
            e.gutters.splice(t, 1))
        }
        function Nr(e) {
            var t = e.wheelDeltaX
              , n = e.wheelDeltaY;
            return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
            null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta),
            {
                x: t,
                y: n
            }
        }
        function Ir(e) {
            var t = Nr(e);
            return t.x *= ya,
            t.y *= ya,
            t
        }
        function Pr(e, t) {
            var n = Nr(t)
              , r = n.x
              , i = n.y
              , o = e.display
              , s = o.scroller
              , a = s.scrollWidth > s.clientWidth
              , l = s.scrollHeight > s.clientHeight;
            if (r && a || i && l) {
                if (i && xs && hs)
                    e: for (var c = t.target, u = o.view; c != s; c = c.parentNode)
                        for (var h = 0; h < u.length; h++)
                            if (u[h].node == c) {
                                e.display.currentWheelTarget = c;
                                break e
                            }
                if (r && !os && !ps && null != ya)
                    return i && l && Yn(e, Math.max(0, s.scrollTop + i * ya)),
                    Qn(e, Math.max(0, s.scrollLeft + r * ya)),
                    (!i || i && l) && Ie(t),
                    void (o.wheelStartX = null);
                if (i && null != ya) {
                    var d = i * ya
                      , f = e.doc.scrollTop
                      , p = f + o.wrapper.clientHeight;
                    d < 0 ? f = Math.max(0, f + d - 50) : p = Math.min(e.doc.height, p + d + 50),
                    Tr(e, {
                        top: f,
                        bottom: p
                    })
                }
                ma < 20 && (null == o.wheelStartX ? (o.wheelStartX = s.scrollLeft,
                o.wheelStartY = s.scrollTop,
                o.wheelDX = r,
                o.wheelDY = i,
                setTimeout(function() {
                    if (null != o.wheelStartX) {
                        var e = s.scrollLeft - o.wheelStartX
                          , t = s.scrollTop - o.wheelStartY
                          , n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
                        o.wheelStartX = o.wheelStartY = null,
                        n && (ya = (ya * ma + n) / (ma + 1),
                        ++ma)
                    }
                }, 200)) : (o.wheelDX += r,
                o.wheelDY += i))
            }
        }
        function Dr(e, t) {
            var n = e[t];
            e.sort(function(e, t) {
                return P(e.from(), t.from())
            }),
            t = d(e, n);
            for (var r = 1; r < e.length; r++) {
                var i = e[r]
                  , o = e[r - 1];
                if (P(o.to(), i.from()) >= 0) {
                    var s = W(o.from(), i.from())
                      , a = q(o.to(), i.to())
                      , l = o.empty() ? i.from() == i.head : o.from() == o.head;
                    r <= t && --t,
                    e.splice(--r, 2, new wa(l ? a : s,l ? s : a))
                }
            }
            return new ba(e,t)
        }
        function Hr(e, t) {
            return new ba([new wa(e,t || e)],0)
        }
        function qr(e) {
            return e.text ? I(e.from.line + e.text.length - 1, g(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
        }
        function Wr(e, t) {
            if (P(e, t.from) < 0)
                return e;
            if (P(e, t.to) <= 0)
                return qr(t);
            var n = e.line + t.text.length - (t.to.line - t.from.line) - 1
              , r = e.ch;
            return e.line == t.to.line && (r += qr(t).ch - t.to.ch),
            I(n, r)
        }
        function Br(e, t) {
            for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                var i = e.sel.ranges[r];
                n.push(new wa(Wr(i.anchor, t),Wr(i.head, t)))
            }
            return Dr(n, e.sel.primIndex)
        }
        function zr(e, t, n) {
            return e.line == t.line ? I(n.line, e.ch - t.ch + n.ch) : I(n.line + (e.line - t.line), e.ch)
        }
        function Ur(e, t, n) {
            for (var r = [], i = I(e.first, 0), o = i, s = 0; s < t.length; s++) {
                var a = t[s]
                  , l = zr(a.from, i, o)
                  , c = zr(qr(a), i, o);
                if (i = a.to,
                o = c,
                "around" == n) {
                    var u = e.sel.ranges[s]
                      , h = P(u.head, u.anchor) < 0;
                    r[s] = new wa(h ? c : l,h ? l : c)
                } else
                    r[s] = new wa(l,l)
            }
            return new ba(r,e.sel.primIndex)
        }
        function Gr(e) {
            e.doc.mode = Ve(e.options, e.doc.modeOption),
            jr(e)
        }
        function jr(e) {
            e.doc.iter(function(e) {
                e.stateAfter && (e.stateAfter = null),
                e.styles && (e.styles = null)
            }),
            e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first,
            xr(e, 100),
            e.state.modeGen++,
            e.curOp && gr(e)
        }
        function Vr(e, t) {
            return 0 == t.from.ch && 0 == t.to.ch && "" == g(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
        }
        function Kr(e, t, n, r) {
            function i(e) {
                return n ? n[e] : null
            }
            function o(e, n, i) {
                lt(e, n, i, r),
                Ct(e, "change", e, t)
            }
            function s(e, t) {
                for (var n = [], o = e; o < t; ++o)
                    n.push(new oa(c[o],i(o),r));
                return n
            }
            var a = t.from
              , l = t.to
              , c = t.text
              , u = E(e, a.line)
              , h = E(e, l.line)
              , d = g(c)
              , f = i(c.length - 1)
              , p = l.line - a.line;
            if (t.full)
                e.insert(0, s(0, c.length)),
                e.remove(c.length, e.size - c.length);
            else if (Vr(e, t)) {
                var v = s(0, c.length - 1);
                o(h, h.text, f),
                p && e.remove(a.line, p),
                v.length && e.insert(a.line, v)
            } else if (u == h)
                if (1 == c.length)
                    o(u, u.text.slice(0, a.ch) + d + u.text.slice(l.ch), f);
                else {
                    var m = s(1, c.length - 1);
                    m.push(new oa(d + u.text.slice(l.ch),f,r)),
                    o(u, u.text.slice(0, a.ch) + c[0], i(0)),
                    e.insert(a.line + 1, m)
                }
            else if (1 == c.length)
                o(u, u.text.slice(0, a.ch) + c[0] + h.text.slice(l.ch), i(0)),
                e.remove(a.line + 1, p);
            else {
                o(u, u.text.slice(0, a.ch) + c[0], i(0)),
                o(h, d + h.text.slice(l.ch), f);
                var y = s(1, c.length - 1);
                p > 1 && e.remove(a.line + 1, p - 1),
                e.insert(a.line + 1, y)
            }
            Ct(e, "change", e, t)
        }
        function $r(e, t, n) {
            function r(e, i, o) {
                if (e.linked)
                    for (var s = 0; s < e.linked.length; ++s) {
                        var a = e.linked[s];
                        if (a.doc != i) {
                            var l = o && a.sharedHist;
                            n && !l || (t(a.doc, l),
                            r(a.doc, e, l))
                        }
                    }
            }
            r(e, null, !0)
        }
        function Xr(e, t) {
            if (t.cm)
                throw new Error("This document is already in use.");
            e.doc = t,
            t.cm = e,
            Cn(e),
            Gr(e),
            Yr(e),
            e.options.lineWrapping || we(e),
            e.options.mode = t.modeOption,
            gr(e)
        }
        function Yr(e) {
            ("rtl" == e.doc.direction ? a : Ts)(e.display.lineDiv, "CodeMirror-rtl")
        }
        function Zr(e) {
            hr(e, function() {
                Yr(e),
                gr(e)
            })
        }
        function Qr(e) {
            this.done = [],
            this.undone = [],
            this.undoDepth = 1 / 0,
            this.lastModTime = this.lastSelTime = 0,
            this.lastOp = this.lastSelOp = null,
            this.lastOrigin = this.lastSelOrigin = null,
            this.generation = this.maxGeneration = e || 1
        }
        function Jr(e, t) {
            var n = {
                from: H(t.from),
                to: qr(t),
                text: T(e, t.from, t.to)
            };
            return si(e, n, t.from.line, t.to.line + 1),
            $r(e, function(e) {
                return si(e, n, t.from.line, t.to.line + 1)
            }, !0),
            n
        }
        function ei(e) {
            for (; e.length && g(e).ranges; )
                e.pop()
        }
        function ti(e, t) {
            return t ? (ei(e.done),
            g(e.done)) : e.done.length && !g(e.done).ranges ? g(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(),
            g(e.done)) : void 0
        }
        function ni(e, t, n, r) {
            var i = e.history;
            i.undone.length = 0;
            var o, s, a = +new Date;
            if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > a - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = ti(i, i.lastOp == r)))
                s = g(o.changes),
                0 == P(t.from, t.to) && 0 == P(t.from, s.to) ? s.to = qr(t) : o.changes.push(Jr(e, t));
            else {
                var l = g(i.done);
                for (l && l.ranges || oi(e.sel, i.done),
                o = {
                    changes: [Jr(e, t)],
                    generation: i.generation
                },
                i.done.push(o); i.done.length > i.undoDepth; )
                    i.done.shift(),
                    i.done[0].ranges || i.done.shift()
            }
            i.done.push(n),
            i.generation = ++i.maxGeneration,
            i.lastModTime = i.lastSelTime = a,
            i.lastOp = i.lastSelOp = r,
            i.lastOrigin = i.lastSelOrigin = t.origin,
            s || Re(e, "historyAdded")
        }
        function ri(e, t, n, r) {
            var i = t.charAt(0);
            return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
        }
        function ii(e, t, n, r) {
            var i = e.history
              , o = r && r.origin;
            n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ri(e, o, g(i.done), t)) ? i.done[i.done.length - 1] = t : oi(t, i.done),
            i.lastSelTime = +new Date,
            i.lastSelOrigin = o,
            i.lastSelOp = n,
            r && !1 !== r.clearRedo && ei(i.undone)
        }
        function oi(e, t) {
            var n = g(t);
            n && n.ranges && n.equals(e) || t.push(e)
        }
        function si(e, t, n, r) {
            var i = t["spans_" + e.id]
              , o = 0;
            e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
                n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans),
                ++o
            })
        }
        function ai(e) {
            if (!e)
                return null;
            for (var t, n = 0; n < e.length; ++n)
                e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
            return t ? t.length ? t : null : e
        }
        function li(e, t) {
            var n = t["spans_" + e.id];
            if (!n)
                return null;
            for (var r = [], i = 0; i < t.text.length; ++i)
                r.push(ai(n[i]));
            return r
        }
        function ci(e, t) {
            var n = li(e, t)
              , r = J(e, t);
            if (!n)
                return r;
            if (!r)
                return n;
            for (var i = 0; i < n.length; ++i) {
                var o = n[i]
                  , s = r[i];
                if (o && s)
                    e: for (var a = 0; a < s.length; ++a) {
                        for (var l = s[a], c = 0; c < o.length; ++c)
                            if (o[c].marker == l.marker)
                                continue e;
                        o.push(l)
                    }
                else
                    s && (n[i] = s)
            }
            return n
        }
        function ui(e, t, n) {
            for (var r = [], i = 0; i < e.length; ++i) {
                var o = e[i];
                if (o.ranges)
                    r.push(n ? ba.prototype.deepCopy.call(o) : o);
                else {
                    var s = o.changes
                      , a = [];
                    r.push({
                        changes: a
                    });
                    for (var l = 0; l < s.length; ++l) {
                        var c = s[l]
                          , u = void 0;
                        if (a.push({
                            from: c.from,
                            to: c.to,
                            text: c.text
                        }),
                        t)
                            for (var h in c)
                                (u = h.match(/^spans_(\d+)$/)) && d(t, Number(u[1])) > -1 && (g(a)[h] = c[h],
                                delete c[h])
                    }
                }
            }
            return r
        }
        function hi(e, t, n, r) {
            if (r) {
                var i = e.anchor;
                if (n) {
                    var o = P(t, i) < 0;
                    o != P(n, i) < 0 ? (i = t,
                    t = n) : o != P(t, n) < 0 && (t = n)
                }
                return new wa(i,t)
            }
            return new wa(n || t,t)
        }
        function di(e, t, n, r, i) {
            null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
            yi(e, new ba([hi(e.sel.primary(), t, n, i)],0), r)
        }
        function fi(e, t, n) {
            for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
                r[o] = hi(e.sel.ranges[o], t[o], null, i);
            yi(e, Dr(r, e.sel.primIndex), n)
        }
        function pi(e, t, n, r) {
            var i = e.sel.ranges.slice(0);
            i[t] = n,
            yi(e, Dr(i, e.sel.primIndex), r)
        }
        function gi(e, t, n, r) {
            yi(e, Hr(t, n), r)
        }
        function vi(e, t, n) {
            var r = {
                ranges: t.ranges,
                update: function(t) {
                    var n = this;
                    this.ranges = [];
                    for (var r = 0; r < t.length; r++)
                        n.ranges[r] = new wa(z(e, t[r].anchor),z(e, t[r].head))
                },
                origin: n && n.origin
            };
            return Re(e, "beforeSelectionChange", e, r),
            e.cm && Re(e.cm, "beforeSelectionChange", e.cm, r),
            r.ranges != t.ranges ? Dr(r.ranges, r.ranges.length - 1) : t
        }
        function mi(e, t, n) {
            var r = e.history.done
              , i = g(r);
            i && i.ranges ? (r[r.length - 1] = t,
            bi(e, t, n)) : yi(e, t, n)
        }
        function yi(e, t, n) {
            bi(e, t, n),
            ii(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
        }
        function bi(e, t, n) {
            (Oe(e, "beforeSelectionChange") || e.cm && Oe(e.cm, "beforeSelectionChange")) && (t = vi(e, t, n)),
            wi(e, ki(e, t, n && n.bias || (P(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)),
            n && !1 === n.scroll || !e.cm || jn(e.cm)
        }
        function wi(e, t) {
            t.equals(e.sel) || (e.sel = t,
            e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0,
            Fe(e.cm)),
            Ct(e, "cursorActivity", e))
        }
        function xi(e) {
            wi(e, ki(e, e.sel, null, !1))
        }
        function ki(e, t, n, r) {
            for (var i, o = 0; o < t.ranges.length; o++) {
                var s = t.ranges[o]
                  , a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o]
                  , l = _i(e, s.anchor, a && a.anchor, n, r)
                  , c = _i(e, s.head, a && a.head, n, r);
                (i || l != s.anchor || c != s.head) && (i || (i = t.ranges.slice(0, o)),
                i[o] = new wa(l,c))
            }
            return i ? Dr(i, t.primIndex) : t
        }
        function Ci(e, t, n, r, i) {
            var o = E(e, t.line);
            if (o.markedSpans)
                for (var s = 0; s < o.markedSpans.length; ++s) {
                    var a = o.markedSpans[s]
                      , l = a.marker;
                    if ((null == a.from || (l.inclusiveLeft ? a.from <= t.ch : a.from < t.ch)) && (null == a.to || (l.inclusiveRight ? a.to >= t.ch : a.to > t.ch))) {
                        if (i && (Re(l, "beforeCursorEnter"),
                        l.explicitlyCleared)) {
                            if (o.markedSpans) {
                                --s;
                                continue
                            }
                            break
                        }
                        if (!l.atomic)
                            continue;
                        if (n) {
                            var c = l.find(r < 0 ? 1 : -1)
                              , u = void 0;
                            if ((r < 0 ? l.inclusiveRight : l.inclusiveLeft) && (c = Si(e, c, -r, c && c.line == t.line ? o : null)),
                            c && c.line == t.line && (u = P(c, n)) && (r < 0 ? u < 0 : u > 0))
                                return Ci(e, c, t, r, i)
                        }
                        var h = l.find(r < 0 ? -1 : 1);
                        return (r < 0 ? l.inclusiveLeft : l.inclusiveRight) && (h = Si(e, h, r, h.line == t.line ? o : null)),
                        h ? Ci(e, h, t, r, i) : null
                    }
                }
            return t
        }
        function _i(e, t, n, r, i) {
            var o = r || 1
              , s = Ci(e, t, n, o, i) || !i && Ci(e, t, n, o, !0) || Ci(e, t, n, -o, i) || !i && Ci(e, t, n, -o, !0);
            return s || (e.cantEdit = !0,
            I(e.first, 0))
        }
        function Si(e, t, n, r) {
            return n < 0 && 0 == t.ch ? t.line > e.first ? z(e, I(t.line - 1)) : null : n > 0 && t.ch == (r || E(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? I(t.line + 1, 0) : null : new I(t.line,t.ch + n)
        }
        function Li(e) {
            e.setSelection(I(e.firstLine(), 0), I(e.lastLine()), Is)
        }
        function Ei(e, t, n) {
            var r = {
                canceled: !1,
                from: t.from,
                to: t.to,
                text: t.text,
                origin: t.origin,
                cancel: function() {
                    return r.canceled = !0
                }
            };
            return n && (r.update = function(t, n, i, o) {
                t && (r.from = z(e, t)),
                n && (r.to = z(e, n)),
                i && (r.text = i),
                void 0 !== o && (r.origin = o)
            }
            ),
            Re(e, "beforeChange", e, r),
            e.cm && Re(e.cm, "beforeChange", e.cm, r),
            r.canceled ? null : {
                from: r.from,
                to: r.to,
                text: r.text,
                origin: r.origin
            }
        }
        function Ti(e, t, n) {
            if (e.cm) {
                if (!e.cm.curOp)
                    return dr(e.cm, Ti)(e, t, n);
                if (e.cm.state.suppressEdits)
                    return
            }
            if (!(Oe(e, "beforeChange") || e.cm && Oe(e.cm, "beforeChange")) || (t = Ei(e, t, !0))) {
                var r = Bs && !n && te(e, t.from, t.to);
                if (r)
                    for (var i = r.length - 1; i >= 0; --i)
                        Mi(e, {
                            from: r[i].from,
                            to: r[i].to,
                            text: i ? [""] : t.text
                        });
                else
                    Mi(e, t)
            }
        }
        function Mi(e, t) {
            if (1 != t.text.length || "" != t.text[0] || 0 != P(t.from, t.to)) {
                var n = Br(e, t);
                ni(e, t, n, e.cm ? e.cm.curOp.id : NaN),
                Fi(e, t, n, J(e, t));
                var r = [];
                $r(e, function(e, n) {
                    n || -1 != d(r, e.history) || (Di(e.history, t),
                    r.push(e.history)),
                    Fi(e, t, null, J(e, t))
                })
            }
        }
        function Ri(e, t, n) {
            if (!e.cm || !e.cm.state.suppressEdits || n) {
                for (var r, i = e.history, o = e.sel, s = "undo" == t ? i.done : i.undone, a = "undo" == t ? i.undone : i.done, l = 0; l < s.length && (r = s[l],
                n ? !r.ranges || r.equals(e.sel) : r.ranges); l++)
                    ;
                if (l != s.length) {
                    for (i.lastOrigin = i.lastSelOrigin = null; (r = s.pop()).ranges; ) {
                        if (oi(r, a),
                        n && !r.equals(e.sel))
                            return void yi(e, r, {
                                clearRedo: !1
                            });
                        o = r
                    }
                    var c = [];
                    oi(o, a),
                    a.push({
                        changes: c,
                        generation: i.generation
                    }),
                    i.generation = r.generation || ++i.maxGeneration;
                    for (var u = Oe(e, "beforeChange") || e.cm && Oe(e.cm, "beforeChange"), h = r.changes.length - 1; h >= 0; --h) {
                        var f = function(n) {
                            var i = r.changes[n];
                            if (i.origin = t,
                            u && !Ei(e, i, !1))
                                return s.length = 0,
                                {};
                            c.push(Jr(e, i));
                            var o = n ? Br(e, i) : g(s);
                            Fi(e, i, o, ci(e, i)),
                            !n && e.cm && e.cm.scrollIntoView({
                                from: i.from,
                                to: qr(i)
                            });
                            var a = [];
                            $r(e, function(e, t) {
                                t || -1 != d(a, e.history) || (Di(e.history, i),
                                a.push(e.history)),
                                Fi(e, i, null, ci(e, i))
                            })
                        }(h);
                        if (f)
                            return f.v
                    }
                }
            }
        }
        function Ai(e, t) {
            if (0 != t && (e.first += t,
            e.sel = new ba(v(e.sel.ranges, function(e) {
                return new wa(I(e.anchor.line + t, e.anchor.ch),I(e.head.line + t, e.head.ch))
            }),e.sel.primIndex),
            e.cm)) {
                gr(e.cm, e.first, e.first - t, t);
                for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                    vr(e.cm, r, "gutter")
            }
        }
        function Fi(e, t, n, r) {
            if (e.cm && !e.cm.curOp)
                return dr(e.cm, Fi)(e, t, n, r);
            if (t.to.line < e.first)
                Ai(e, t.text.length - 1 - (t.to.line - t.from.line));
            else if (!(t.from.line > e.lastLine())) {
                if (t.from.line < e.first) {
                    var i = t.text.length - 1 - (e.first - t.from.line);
                    Ai(e, i),
                    t = {
                        from: I(e.first, 0),
                        to: I(t.to.line + i, t.to.ch),
                        text: [g(t.text)],
                        origin: t.origin
                    }
                }
                var o = e.lastLine();
                t.to.line > o && (t = {
                    from: t.from,
                    to: I(o, E(e, o).text.length),
                    text: [t.text[0]],
                    origin: t.origin
                }),
                t.removed = T(e, t.from, t.to),
                n || (n = Br(e, t)),
                e.cm ? Oi(e.cm, t, r) : Kr(e, t, r),
                bi(e, n, Is)
            }
        }
        function Oi(e, t, n) {
            var r = e.doc
              , i = e.display
              , o = t.from
              , s = t.to
              , a = !1
              , l = o.line;
            e.options.lineWrapping || (l = A(he(E(r, o.line))),
            r.iter(l, s.line + 1, function(e) {
                if (e == i.maxLine)
                    return a = !0,
                    !0
            })),
            r.sel.contains(t.from, t.to) > -1 && Fe(e),
            Kr(r, t, n, kn(e)),
            e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function(e) {
                var t = be(e);
                t > i.maxLineLength && (i.maxLine = e,
                i.maxLineLength = t,
                i.maxLineChanged = !0,
                a = !1)
            }),
            a && (e.curOp.updateMaxLine = !0)),
            at(r, o.line),
            xr(e, 400);
            var c = t.text.length - (s.line - o.line) - 1;
            t.full ? gr(e) : o.line != s.line || 1 != t.text.length || Vr(e.doc, t) ? gr(e, o.line, s.line + 1, c) : vr(e, o.line, "text");
            var u = Oe(e, "changes")
              , h = Oe(e, "change");
            if (h || u) {
                var d = {
                    from: o,
                    to: s,
                    text: t.text,
                    removed: t.removed,
                    origin: t.origin
                };
                h && Ct(e, "change", e, d),
                u && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d)
            }
            e.display.selForContextMenu = null
        }
        function Ni(e, t, n, r, i) {
            if (r || (r = n),
            P(r, n) < 0) {
                var o = r;
                r = n,
                n = o
            }
            "string" == typeof t && (t = e.splitLines(t)),
            Ti(e, {
                from: n,
                to: r,
                text: t,
                origin: i
            })
        }
        function Ii(e, t, n, r) {
            n < e.line ? e.line += r : t < e.line && (e.line = t,
            e.ch = 0)
        }
        function Pi(e, t, n, r) {
            for (var i = 0; i < e.length; ++i) {
                var o = e[i]
                  , s = !0;
                if (o.ranges) {
                    o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                    for (var a = 0; a < o.ranges.length; a++)
                        Ii(o.ranges[a].anchor, t, n, r),
                        Ii(o.ranges[a].head, t, n, r)
                } else {
                    for (var l = 0; l < o.changes.length; ++l) {
                        var c = o.changes[l];
                        if (n < c.from.line)
                            c.from = I(c.from.line + r, c.from.ch),
                            c.to = I(c.to.line + r, c.to.ch);
                        else if (t <= c.to.line) {
                            s = !1;
                            break
                        }
                    }
                    s || (e.splice(0, i + 1),
                    i = 0)
                }
            }
        }
        function Di(e, t) {
            var n = t.from.line
              , r = t.to.line
              , i = t.text.length - (r - n) - 1;
            Pi(e.done, n, r, i),
            Pi(e.undone, n, r, i)
        }
        function Hi(e, t, n, r) {
            var i = t
              , o = t;
            return "number" == typeof t ? o = E(e, B(e, t)) : i = A(t),
            null == i ? null : (r(o, i) && e.cm && vr(e.cm, i, n),
            o)
        }
        function qi(e) {
            var t = this;
            this.lines = e,
            this.parent = null;
            for (var n = 0, r = 0; r < e.length; ++r)
                e[r].parent = t,
                n += e[r].height;
            this.height = n
        }
        function Wi(e) {
            var t = this;
            this.children = e;
            for (var n = 0, r = 0, i = 0; i < e.length; ++i) {
                var o = e[i];
                n += o.chunkSize(),
                r += o.height,
                o.parent = t
            }
            this.size = n,
            this.height = r,
            this.parent = null
        }
        function Bi(e, t, n) {
            ye(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Gn(e, n)
        }
        function zi(e, t, n, r) {
            var i = new xa(e,n,r)
              , o = e.cm;
            return o && i.noHScroll && (o.display.alignWidgets = !0),
            Hi(e, t, "widget", function(t) {
                var n = t.widgets || (t.widgets = []);
                if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i),
                i.line = t,
                o && !ve(e, t)) {
                    var r = ye(t) < e.scrollTop;
                    R(t, t.height + Dt(i)),
                    r && Gn(o, i.height),
                    o.curOp.forceUpdate = !0
                }
                return !0
            }),
            Ct(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : A(t)),
            i
        }
        function Ui(e, t, n, r, o) {
            if (r && r.shared)
                return Gi(e, t, n, r, o);
            if (e.cm && !e.cm.curOp)
                return dr(e.cm, Ui)(e, t, n, r, o);
            var s = new Ca(e,o)
              , a = P(t, n);
            if (r && u(r, s, !1),
            a > 0 || 0 == a && !1 !== s.clearWhenEmpty)
                return s;
            if (s.replacedWith && (s.collapsed = !0,
            s.widgetNode = i("span", [s.replacedWith], "CodeMirror-widget"),
            r.handleMouseEvents || s.widgetNode.setAttribute("cm-ignore-events", "true"),
            r.insertLeft && (s.widgetNode.insertLeft = !0)),
            s.collapsed) {
                if (ue(e, t.line, t, n, s) || t.line != n.line && ue(e, n.line, t, n, s))
                    throw new Error("Inserting collapsed marker partially overlapping an existing one");
                V()
            }
            s.addToHistory && ni(e, {
                from: t,
                to: n,
                origin: "markText"
            }, e.sel, NaN);
            var l, c = t.line, h = e.cm;
            if (e.iter(c, n.line + 1, function(e) {
                h && s.collapsed && !h.options.lineWrapping && he(e) == h.display.maxLine && (l = !0),
                s.collapsed && c != t.line && R(e, 0),
                Y(e, new K(s,c == t.line ? t.ch : null,c == n.line ? n.ch : null)),
                ++c
            }),
            s.collapsed && e.iter(t.line, n.line + 1, function(t) {
                ve(e, t) && R(t, 0)
            }),
            s.clearOnEnter && Vs(s, "beforeCursorEnter", function() {
                return s.clear()
            }),
            s.readOnly && (j(),
            (e.history.done.length || e.history.undone.length) && e.clearHistory()),
            s.collapsed && (s.id = ++ka,
            s.atomic = !0),
            h) {
                if (l && (h.curOp.updateMaxLine = !0),
                s.collapsed)
                    gr(h, t.line, n.line + 1);
                else if (s.className || s.title || s.startStyle || s.endStyle || s.css)
                    for (var d = t.line; d <= n.line; d++)
                        vr(h, d, "text");
                s.atomic && xi(h.doc),
                Ct(h, "markerAdded", h, s)
            }
            return s
        }
        function Gi(e, t, n, r, i) {
            (r = u(r)).shared = !1;
            var o = [Ui(e, t, n, r, i)]
              , s = o[0]
              , a = r.widgetNode;
            return $r(e, function(e) {
                a && (r.widgetNode = a.cloneNode(!0)),
                o.push(Ui(e, z(e, t), z(e, n), r, i));
                for (var l = 0; l < e.linked.length; ++l)
                    if (e.linked[l].isParent)
                        return;
                s = g(o)
            }),
            new _a(o,s)
        }
        function ji(e) {
            return e.findMarks(I(e.first, 0), e.clipPos(I(e.lastLine())), function(e) {
                return e.parent
            })
        }
        function Vi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n]
                  , i = r.find()
                  , o = e.clipPos(i.from)
                  , s = e.clipPos(i.to);
                if (P(o, s)) {
                    var a = Ui(e, o, s, r.primary, r.primary.type);
                    r.markers.push(a),
                    a.parent = r
                }
            }
        }
        function Ki(e) {
            for (var t = 0; t < e.length; t++)
                !function(t) {
                    var n = e[t]
                      , r = [n.primary.doc];
                    $r(n.primary.doc, function(e) {
                        return r.push(e)
                    });
                    for (var i = 0; i < n.markers.length; i++) {
                        var o = n.markers[i];
                        -1 == d(r, o.doc) && (o.parent = null,
                        n.markers.splice(i--, 1))
                    }
                }(t)
        }
        function $i(e) {
            var t = this;
            if (Zi(t),
            !Ae(t, e) && !Ht(t.display, e)) {
                Ie(e),
                cs && (Ea = +new Date);
                var n = _n(t, e, !0)
                  , r = e.dataTransfer.files;
                if (n && !t.isReadOnly())
                    if (r && r.length && window.FileReader && window.File)
                        for (var i = r.length, o = Array(i), s = 0, a = 0; a < i; ++a)
                            !function(e, r) {
                                if (!t.options.allowDropFileTypes || -1 != d(t.options.allowDropFileTypes, e.type)) {
                                    var a = new FileReader;
                                    a.onload = dr(t, function() {
                                        var e = a.result;
                                        if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                                        o[r] = e,
                                        ++s == i) {
                                            var l = {
                                                from: n = z(t.doc, n),
                                                to: n,
                                                text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                                origin: "paste"
                                            };
                                            Ti(t.doc, l),
                                            mi(t.doc, Hr(n, qr(l)))
                                        }
                                    }),
                                    a.readAsText(e)
                                }
                            }(r[a], a);
                    else {
                        if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                            return t.state.draggingText(e),
                            void setTimeout(function() {
                                return t.display.input.focus()
                            }, 20);
                        try {
                            var l = e.dataTransfer.getData("Text");
                            if (l) {
                                var c;
                                if (t.state.draggingText && !t.state.draggingText.copy && (c = t.listSelections()),
                                bi(t.doc, Hr(n, n)),
                                c)
                                    for (var u = 0; u < c.length; ++u)
                                        Ni(t.doc, "", c[u].anchor, c[u].head, "drag");
                                t.replaceSelection(l, "around", "paste"),
                                t.display.input.focus()
                            }
                        } catch (e) {}
                    }
            }
        }
        function Xi(e, t) {
            if (cs && (!e.state.draggingText || +new Date - Ea < 100))
                He(t);
            else if (!Ae(e, t) && !Ht(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()),
            t.dataTransfer.effectAllowed = "copyMove",
            t.dataTransfer.setDragImage && !gs)) {
                var n = r("img", null, null, "position: fixed; left: 0; top: 0;");
                n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                ps && (n.width = n.height = 1,
                e.display.wrapper.appendChild(n),
                n._top = n.offsetTop),
                t.dataTransfer.setDragImage(n, 0, 0),
                ps && n.parentNode.removeChild(n)
            }
        }
        function Yi(e, t) {
            var i = _n(e, t);
            if (i) {
                var o = document.createDocumentFragment();
                Tn(e, i, o),
                e.display.dragCursor || (e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
                e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
                n(e.display.dragCursor, o)
            }
        }
        function Zi(e) {
            e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor),
            e.display.dragCursor = null)
        }
        function Qi(e) {
            if (document.getElementsByClassName)
                for (var t = document.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
                    var r = t[n].CodeMirror;
                    r && e(r)
                }
        }
        function Ji() {
            Ta || (eo(),
            Ta = !0)
        }
        function eo() {
            var e;
            Vs(window, "resize", function() {
                null == e && (e = setTimeout(function() {
                    e = null,
                    Qi(to)
                }, 100))
            }),
            Vs(window, "blur", function() {
                return Qi(Nn)
            })
        }
        function to(e) {
            var t = e.display;
            t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null,
            t.scrollbarsClipped = !1,
            e.setSize())
        }
        function no(e) {
            var t = e.split(/-(?!$)/);
            e = t[t.length - 1];
            for (var n, r, i, o, s = 0; s < t.length - 1; s++) {
                var a = t[s];
                if (/^(cmd|meta|m)$/i.test(a))
                    o = !0;
                else if (/^a(lt)?$/i.test(a))
                    n = !0;
                else if (/^(c|ctrl|control)$/i.test(a))
                    r = !0;
                else {
                    if (!/^s(hift)?$/i.test(a))
                        throw new Error("Unrecognized modifier name: " + a);
                    i = !0
                }
            }
            return n && (e = "Alt-" + e),
            r && (e = "Ctrl-" + e),
            o && (e = "Cmd-" + e),
            i && (e = "Shift-" + e),
            e
        }
        function ro(e) {
            var t = {};
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var r = e[n];
                    if (/^(name|fallthrough|(de|at)tach)$/.test(n))
                        continue;
                    if ("..." == r) {
                        delete e[n];
                        continue
                    }
                    for (var i = v(n.split(" "), no), o = 0; o < i.length; o++) {
                        var s = void 0
                          , a = void 0;
                        o == i.length - 1 ? (a = i.join(" "),
                        s = r) : (a = i.slice(0, o + 1).join(" "),
                        s = "...");
                        var l = t[a];
                        if (l) {
                            if (l != s)
                                throw new Error("Inconsistent bindings for " + a)
                        } else
                            t[a] = s
                    }
                    delete e[n]
                }
            for (var c in t)
                e[c] = t[c];
            return e
        }
        function io(e, t, n, r) {
            var i = (t = lo(t)).call ? t.call(e, r) : t[e];
            if (!1 === i)
                return "nothing";
            if ("..." === i)
                return "multi";
            if (null != i && n(i))
                return "handled";
            if (t.fallthrough) {
                if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
                    return io(e, t.fallthrough, n, r);
                for (var o = 0; o < t.fallthrough.length; o++) {
                    var s = io(e, t.fallthrough[o], n, r);
                    if (s)
                        return s
                }
            }
        }
        function oo(e) {
            var t = "string" == typeof e ? e : Ma[e.keyCode];
            return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
        }
        function so(e, t, n) {
            var r = e;
            return t.altKey && "Alt" != r && (e = "Alt-" + e),
            (Ls ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
            (Ls ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e),
            !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e),
            e
        }
        function ao(e, t) {
            if (ps && 34 == e.keyCode && e.char)
                return !1;
            var n = Ma[e.keyCode];
            return null != n && !e.altGraphKey && so(n, e, t)
        }
        function lo(e) {
            return "string" == typeof e ? Oa[e] : e
        }
        function co(e, t) {
            for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                for (var o = t(n[i]); r.length && P(o.from, g(r).to) <= 0; ) {
                    var s = r.pop();
                    if (P(s.from, o.from) < 0) {
                        o.from = s.from;
                        break
                    }
                }
                r.push(o)
            }
            hr(e, function() {
                for (var t = r.length - 1; t >= 0; t--)
                    Ni(e.doc, "", r[t].from, r[t].to, "+delete");
                jn(e)
            })
        }
        function uo(e, t) {
            var n = E(e.doc, t)
              , r = he(n);
            return r != n && (t = A(r)),
            Le(!0, e, r, t, 1)
        }
        function ho(e, t) {
            var n = E(e.doc, t)
              , r = de(n);
            return r != n && (t = A(r)),
            Le(!0, e, n, t, -1)
        }
        function fo(e, t) {
            var n = uo(e, t.line)
              , r = E(e.doc, n.line)
              , i = Ce(r, e.doc.direction);
            if (!i || 0 == i[0].level) {
                var o = Math.max(0, r.text.search(/\S/))
                  , s = t.line == n.line && t.ch <= o && t.ch;
                return I(n.line, s ? 0 : o, n.sticky)
            }
            return n
        }
        function po(e, t, n) {
            if ("string" == typeof t && !(t = Na[t]))
                return !1;
            e.display.input.ensurePolled();
            var r = e.display.shift
              , i = !1;
            try {
                e.isReadOnly() && (e.state.suppressEdits = !0),
                n && (e.display.shift = !1),
                i = t(e) != Ns
            } finally {
                e.display.shift = r,
                e.state.suppressEdits = !1
            }
            return i
        }
        function go(e, t, n) {
            for (var r = 0; r < e.state.keyMaps.length; r++) {
                var i = io(t, e.state.keyMaps[r], n, e);
                if (i)
                    return i
            }
            return e.options.extraKeys && io(t, e.options.extraKeys, n, e) || io(t, e.options.keyMap, n, e)
        }
        function vo(e, t, n, r) {
            var i = e.state.keySeq;
            if (i) {
                if (oo(t))
                    return "handled";
                Ia.set(50, function() {
                    e.state.keySeq == i && (e.state.keySeq = null,
                    e.display.input.reset())
                }),
                t = i + " " + t
            }
            var o = go(e, t, r);
            return "multi" == o && (e.state.keySeq = t),
            "handled" == o && Ct(e, "keyHandled", e, t, n),
            "handled" != o && "multi" != o || (Ie(n),
            Rn(e)),
            i && !o && /\'$/.test(t) ? (Ie(n),
            !0) : !!o
        }
        function mo(e, t) {
            var n = ao(t, !0);
            return !!n && (t.shiftKey && !e.state.keySeq ? vo(e, "Shift-" + n, t, function(t) {
                return po(e, t, !0)
            }) || vo(e, n, t, function(t) {
                if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion)
                    return po(e, t)
            }) : vo(e, n, t, function(t) {
                return po(e, t)
            }))
        }
        function yo(e, t, n) {
            return vo(e, "'" + n + "'", t, function(t) {
                return po(e, t, !0)
            })
        }
        function bo(e) {
            var t = this;
            if (t.curOp.focus = s(),
            !Ae(t, e)) {
                cs && us < 11 && 27 == e.keyCode && (e.returnValue = !1);
                var n = e.keyCode;
                t.display.shift = 16 == n || e.shiftKey;
                var r = mo(t, e);
                ps && (Pa = r ? n : null,
                !r && 88 == n && !Ys && (xs ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")),
                18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || wo(t)
            }
        }
        function wo(e) {
            function t(e) {
                18 != e.keyCode && e.altKey || (Ts(n, "CodeMirror-crosshair"),
                Me(document, "keyup", t),
                Me(document, "mouseover", t))
            }
            var n = e.display.lineDiv;
            a(n, "CodeMirror-crosshair"),
            Vs(document, "keyup", t),
            Vs(document, "mouseover", t)
        }
        function xo(e) {
            16 == e.keyCode && (this.doc.sel.shift = !1),
            Ae(this, e)
        }
        function ko(e) {
            var t = this;
            if (!(Ht(t.display, e) || Ae(t, e) || e.ctrlKey && !e.altKey || xs && e.metaKey)) {
                var n = e.keyCode
                  , r = e.charCode;
                if (ps && n == Pa)
                    return Pa = null,
                    void Ie(e);
                if (!ps || e.which && !(e.which < 10) || !mo(t, e)) {
                    var i = String.fromCharCode(null == r ? n : r);
                    "\b" != i && (yo(t, e, i) || t.display.input.onKeyPress(e))
                }
            }
        }
        function Co(e, t) {
            var n = +new Date;
            return qa && qa.compare(n, e, t) ? (Ha = qa = null,
            "triple") : Ha && Ha.compare(n, e, t) ? (qa = new Da(n,e,t),
            Ha = null,
            "double") : (Ha = new Da(n,e,t),
            qa = null,
            "single")
        }
        function _o(e) {
            var t = this
              , n = t.display;
            if (!(Ae(t, e) || n.activeTouch && n.input.supportsTouch()))
                if (n.input.ensurePolled(),
                n.shift = e.shiftKey,
                Ht(n, e))
                    hs || (n.scroller.draggable = !1,
                    setTimeout(function() {
                        return n.scroller.draggable = !0
                    }, 100));
                else if (!Fo(t, e)) {
                    var r = _n(t, e)
                      , i = We(e)
                      , o = r ? Co(r, i) : "single";
                    window.focus(),
                    1 == i && t.state.selectingText && t.state.selectingText(e),
                    r && So(t, i, r, o, e) || (1 == i ? r ? Eo(t, r, o, e) : qe(e) == n.scroller && Ie(e) : 2 == i ? (r && di(t.doc, r),
                    setTimeout(function() {
                        return n.input.focus()
                    }, 20)) : 3 == i && (Es ? Oo(t, e) : Fn(t)))
                }
        }
        function So(e, t, n, r, i) {
            var o = "Click";
            return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o),
            o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o,
            vo(e, so(o, i), i, function(t) {
                if ("string" == typeof t && (t = Na[t]),
                !t)
                    return !1;
                var r = !1;
                try {
                    e.isReadOnly() && (e.state.suppressEdits = !0),
                    r = t(e, n) != Ns
                } finally {
                    e.state.suppressEdits = !1
                }
                return r
            })
        }
        function Lo(e, t, n) {
            var r = e.getOption("configureMouse")
              , i = r ? r(e, t, n) : {};
            if (null == i.unit) {
                var o = ks ? n.shiftKey && n.metaKey : n.altKey;
                i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
            }
            return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey),
            null == i.addNew && (i.addNew = xs ? n.metaKey : n.ctrlKey),
            null == i.moveOnDrag && (i.moveOnDrag = !(xs ? n.altKey : n.ctrlKey)),
            i
        }
        function Eo(e, t, n, r) {
            cs ? setTimeout(c(An, e), 0) : e.curOp.focus = s();
            var i, o = Lo(e, n, r), a = e.doc.sel;
            e.options.dragDrop && Ks && !e.isReadOnly() && "single" == n && (i = a.contains(t)) > -1 && (P((i = a.ranges[i]).from(), t) < 0 || t.xRel > 0) && (P(i.to(), t) > 0 || t.xRel < 0) ? To(e, r, t, o) : Ro(e, r, t, o)
        }
        function To(e, t, n, r) {
            var i = e.display
              , o = !1
              , s = dr(e, function(t) {
                hs && (i.scroller.draggable = !1),
                e.state.draggingText = !1,
                Me(document, "mouseup", s),
                Me(document, "mousemove", a),
                Me(i.scroller, "dragstart", l),
                Me(i.scroller, "drop", s),
                o || (Ie(t),
                r.addNew || di(e.doc, n, null, null, r.extend),
                hs || cs && 9 == us ? setTimeout(function() {
                    document.body.focus(),
                    i.input.focus()
                }, 20) : i.input.focus())
            })
              , a = function(e) {
                o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
            }
              , l = function() {
                return o = !0
            };
            hs && (i.scroller.draggable = !0),
            e.state.draggingText = s,
            s.copy = !r.moveOnDrag,
            i.scroller.dragDrop && i.scroller.dragDrop(),
            Vs(document, "mouseup", s),
            Vs(document, "mousemove", a),
            Vs(i.scroller, "dragstart", l),
            Vs(i.scroller, "drop", s),
            Fn(e),
            setTimeout(function() {
                return i.input.focus()
            }, 20)
        }
        function Mo(e, t, n) {
            if ("char" == n)
                return new wa(t,t);
            if ("word" == n)
                return e.findWordAt(t);
            if ("line" == n)
                return new wa(I(t.line, 0),z(e.doc, I(t.line + 1, 0)));
            var r = n(e, t);
            return new wa(r.from,r.to)
        }
        function Ro(e, t, n, r) {
            function i(t) {
                if (0 != P(m, t))
                    if (m = t,
                    "rectangle" == r.unit) {
                        for (var i = [], o = e.options.tabSize, s = h(E(c, n.line).text, n.ch, o), a = h(E(c, t.line).text, t.ch, o), l = Math.min(s, a), g = Math.max(s, a), v = Math.min(n.line, t.line), y = Math.min(e.lastLine(), Math.max(n.line, t.line)); v <= y; v++) {
                            var b = E(c, v).text
                              , w = f(b, l, o);
                            l == g ? i.push(new wa(I(v, w),I(v, w))) : b.length > w && i.push(new wa(I(v, w),I(v, f(b, g, o))))
                        }
                        i.length || i.push(new wa(n,n)),
                        yi(c, Dr(p.ranges.slice(0, d).concat(i), d), {
                            origin: "*mouse",
                            scroll: !1
                        }),
                        e.scrollIntoView(t)
                    } else {
                        var x, k = u, C = Mo(e, t, r.unit), _ = k.anchor;
                        P(C.anchor, _) > 0 ? (x = C.head,
                        _ = W(k.from(), C.anchor)) : (x = C.anchor,
                        _ = q(k.to(), C.head));
                        var S = p.ranges.slice(0);
                        S[d] = new wa(z(c, _),x),
                        yi(c, Dr(S, d), Ps)
                    }
            }
            function o(t) {
                var n = ++b
                  , a = _n(e, t, !0, "rectangle" == r.unit);
                if (a)
                    if (0 != P(a, m)) {
                        e.curOp.focus = s(),
                        i(a);
                        var u = Dn(l, c);
                        (a.line >= u.to || a.line < u.from) && setTimeout(dr(e, function() {
                            b == n && o(t)
                        }), 150)
                    } else {
                        var h = t.clientY < y.top ? -20 : t.clientY > y.bottom ? 20 : 0;
                        h && setTimeout(dr(e, function() {
                            b == n && (l.scroller.scrollTop += h,
                            o(t))
                        }), 50)
                    }
            }
            function a(t) {
                e.state.selectingText = !1,
                b = 1 / 0,
                Ie(t),
                l.input.focus(),
                Me(document, "mousemove", w),
                Me(document, "mouseup", x),
                c.history.lastSelOrigin = null
            }
            var l = e.display
              , c = e.doc;
            Ie(t);
            var u, d, p = c.sel, g = p.ranges;
            if (r.addNew && !r.extend ? (d = c.sel.contains(n),
            u = d > -1 ? g[d] : new wa(n,n)) : (u = c.sel.primary(),
            d = c.sel.primIndex),
            "rectangle" == r.unit)
                r.addNew || (u = new wa(n,n)),
                n = _n(e, t, !0, !0),
                d = -1;
            else {
                var v = Mo(e, n, r.unit);
                u = r.extend ? hi(u, v.anchor, v.head, r.extend) : v
            }
            r.addNew ? -1 == d ? (d = g.length,
            yi(c, Dr(g.concat([u]), d), {
                scroll: !1,
                origin: "*mouse"
            })) : g.length > 1 && g[d].empty() && "char" == r.unit && !r.extend ? (yi(c, Dr(g.slice(0, d).concat(g.slice(d + 1)), 0), {
                scroll: !1,
                origin: "*mouse"
            }),
            p = c.sel) : pi(c, d, u, Ps) : (d = 0,
            yi(c, new ba([u],0), Ps),
            p = c.sel);
            var m = n
              , y = l.wrapper.getBoundingClientRect()
              , b = 0
              , w = dr(e, function(e) {
                We(e) ? o(e) : a(e)
            })
              , x = dr(e, a);
            e.state.selectingText = x,
            Vs(document, "mousemove", w),
            Vs(document, "mouseup", x)
        }
        function Ao(e, t, n, r) {
            var i, o;
            try {
                i = t.clientX,
                o = t.clientY
            } catch (t) {
                return !1
            }
            if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
                return !1;
            r && Ie(t);
            var s = e.display
              , a = s.lineDiv.getBoundingClientRect();
            if (o > a.bottom || !Oe(e, n))
                return De(t);
            o -= a.top - s.viewOffset;
            for (var l = 0; l < e.options.gutters.length; ++l) {
                var c = s.gutters.childNodes[l];
                if (c && c.getBoundingClientRect().right >= i)
                    return Re(e, n, e, F(e.doc, o), e.options.gutters[l], t),
                    De(t)
            }
        }
        function Fo(e, t) {
            return Ao(e, t, "gutterClick", !0)
        }
        function Oo(e, t) {
            Ht(e.display, t) || No(e, t) || Ae(e, t, "contextmenu") || e.display.input.onContextMenu(t)
        }
        function No(e, t) {
            return !!Oe(e, "gutterContextMenu") && Ao(e, t, "gutterContextMenu", !1)
        }
        function Io(e) {
            e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
            on(e)
        }
        function Po(e) {
            Fr(e),
            gr(e),
            Hn(e)
        }
        function Do(e, t, n) {
            if (!t != !(n && n != Wa)) {
                var r = e.display.dragFunctions
                  , i = t ? Vs : Me;
                i(e.display.scroller, "dragstart", r.start),
                i(e.display.scroller, "dragenter", r.enter),
                i(e.display.scroller, "dragover", r.over),
                i(e.display.scroller, "dragleave", r.leave),
                i(e.display.scroller, "drop", r.drop)
            }
        }
        function Ho(e) {
            e.options.lineWrapping ? (a(e.display.wrapper, "CodeMirror-wrap"),
            e.display.sizer.style.minWidth = "",
            e.display.sizerWidth = null) : (Ts(e.display.wrapper, "CodeMirror-wrap"),
            we(e)),
            Cn(e),
            gr(e),
            on(e),
            setTimeout(function() {
                return er(e)
            }, 100)
        }
        function qo(e, t) {
            var n = this;
            if (!(this instanceof qo))
                return new qo(e,t);
            this.options = t = t ? u(t) : {},
            u(Ba, t, !1),
            Or(t);
            var r = t.value;
            "string" == typeof r && (r = new La(r,t.mode,null,t.lineSeparator,t.direction)),
            this.doc = r;
            var i = new qo.inputStyles[t.inputStyle](this)
              , o = this.display = new L(e,r,i);
            o.wrapper.CodeMirror = this,
            Fr(this),
            Io(this),
            t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
            nr(this),
            this.state = {
                keyMaps: [],
                overlays: [],
                modeGen: 0,
                overwrite: !1,
                delayingBlurEvent: !1,
                focused: !1,
                suppressEdits: !1,
                pasteIncoming: !1,
                cutIncoming: !1,
                selectingText: !1,
                draggingText: !1,
                highlight: new Rs,
                keySeq: null,
                specialChars: null
            },
            t.autofocus && !ws && o.input.focus(),
            cs && us < 11 && setTimeout(function() {
                return n.display.input.reset(!0)
            }, 20),
            Wo(this),
            Ji(),
            rr(this),
            this.curOp.forceUpdate = !0,
            Xr(this, r),
            t.autofocus && !ws || this.hasFocus() ? setTimeout(c(On, this), 20) : Nn(this);
            for (var s in za)
                za.hasOwnProperty(s) && za[s](n, t[s], Wa);
            qn(this),
            t.finishInit && t.finishInit(this);
            for (var a = 0; a < Ua.length; ++a)
                Ua[a](n);
            ir(this),
            hs && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
        }
        function Wo(e) {
            function t() {
                i.activeTouch && (o = setTimeout(function() {
                    return i.activeTouch = null
                }, 1e3),
                (s = i.activeTouch).end = +new Date)
            }
            function n(e) {
                if (1 != e.touches.length)
                    return !1;
                var t = e.touches[0];
                return t.radiusX <= 1 && t.radiusY <= 1
            }
            function r(e, t) {
                if (null == t.left)
                    return !0;
                var n = t.left - e.left
                  , r = t.top - e.top;
                return n * n + r * r > 400
            }
            var i = e.display;
            Vs(i.scroller, "mousedown", dr(e, _o)),
            cs && us < 11 ? Vs(i.scroller, "dblclick", dr(e, function(t) {
                if (!Ae(e, t)) {
                    var n = _n(e, t);
                    if (n && !Fo(e, t) && !Ht(e.display, t)) {
                        Ie(t);
                        var r = e.findWordAt(n);
                        di(e.doc, r.anchor, r.head)
                    }
                }
            })) : Vs(i.scroller, "dblclick", function(t) {
                return Ae(e, t) || Ie(t)
            }),
            Es || Vs(i.scroller, "contextmenu", function(t) {
                return Oo(e, t)
            });
            var o, s = {
                end: 0
            };
            Vs(i.scroller, "touchstart", function(t) {
                if (!Ae(e, t) && !n(t)) {
                    i.input.ensurePolled(),
                    clearTimeout(o);
                    var r = +new Date;
                    i.activeTouch = {
                        start: r,
                        moved: !1,
                        prev: r - s.end <= 300 ? s : null
                    },
                    1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX,
                    i.activeTouch.top = t.touches[0].pageY)
                }
            }),
            Vs(i.scroller, "touchmove", function() {
                i.activeTouch && (i.activeTouch.moved = !0)
            }),
            Vs(i.scroller, "touchend", function(n) {
                var o = i.activeTouch;
                if (o && !Ht(i, n) && null != o.left && !o.moved && new Date - o.start < 300) {
                    var s, a = e.coordsChar(i.activeTouch, "page");
                    s = !o.prev || r(o, o.prev) ? new wa(a,a) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(a) : new wa(I(a.line, 0),z(e.doc, I(a.line + 1, 0))),
                    e.setSelection(s.anchor, s.head),
                    e.focus(),
                    Ie(n)
                }
                t()
            }),
            Vs(i.scroller, "touchcancel", t),
            Vs(i.scroller, "scroll", function() {
                i.scroller.clientHeight && (Yn(e, i.scroller.scrollTop),
                Qn(e, i.scroller.scrollLeft, !0),
                Re(e, "scroll", e))
            }),
            Vs(i.scroller, "mousewheel", function(t) {
                return Pr(e, t)
            }),
            Vs(i.scroller, "DOMMouseScroll", function(t) {
                return Pr(e, t)
            }),
            Vs(i.wrapper, "scroll", function() {
                return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
            }),
            i.dragFunctions = {
                enter: function(t) {
                    Ae(e, t) || He(t)
                },
                over: function(t) {
                    Ae(e, t) || (Yi(e, t),
                    He(t))
                },
                start: function(t) {
                    return Xi(e, t)
                },
                drop: dr(e, $i),
                leave: function(t) {
                    Ae(e, t) || Zi(e)
                }
            };
            var a = i.input.getField();
            Vs(a, "keyup", function(t) {
                return xo.call(e, t)
            }),
            Vs(a, "keydown", dr(e, bo)),
            Vs(a, "keypress", dr(e, ko)),
            Vs(a, "focus", function(t) {
                return On(e, t)
            }),
            Vs(a, "blur", function(t) {
                return Nn(e, t)
            })
        }
        function Bo(e, t, n, r) {
            var i, o = e.doc;
            null == n && (n = "add"),
            "smart" == n && (o.mode.indent ? i = Je(e, t).state : n = "prev");
            var s = e.options.tabSize
              , a = E(o, t)
              , l = h(a.text, null, s);
            a.stateAfter && (a.stateAfter = null);
            var c, u = a.text.match(/^\s*/)[0];
            if (r || /\S/.test(a.text)) {
                if ("smart" == n && ((c = o.mode.indent(i, a.text.slice(u.length), a.text)) == Ns || c > 150)) {
                    if (!r)
                        return;
                    n = "prev"
                }
            } else
                c = 0,
                n = "not";
            "prev" == n ? c = t > o.first ? h(E(o, t - 1).text, null, s) : 0 : "add" == n ? c = l + e.options.indentUnit : "subtract" == n ? c = l - e.options.indentUnit : "number" == typeof n && (c = l + n),
            c = Math.max(0, c);
            var d = ""
              , f = 0;
            if (e.options.indentWithTabs)
                for (var g = Math.floor(c / s); g; --g)
                    f += s,
                    d += "\t";
            if (f < c && (d += p(c - f)),
            d != u)
                return Ni(o, d, I(t, 0), I(t, u.length), "+input"),
                a.stateAfter = null,
                !0;
            for (var v = 0; v < o.sel.ranges.length; v++) {
                var m = o.sel.ranges[v];
                if (m.head.line == t && m.head.ch < u.length) {
                    var y = I(t, u.length);
                    pi(o, v, new wa(y,y));
                    break
                }
            }
        }
        function zo(e) {
            Ga = e
        }
        function Uo(e, t, n, r, i) {
            var o = e.doc;
            e.display.shift = !1,
            r || (r = o.sel);
            var s = e.state.pasteIncoming || "paste" == i
              , a = $s(t)
              , l = null;
            if (s && r.ranges.length > 1)
                if (Ga && Ga.text.join("\n") == t) {
                    if (r.ranges.length % Ga.text.length == 0) {
                        l = [];
                        for (var c = 0; c < Ga.text.length; c++)
                            l.push(o.splitLines(Ga.text[c]))
                    }
                } else
                    a.length == r.ranges.length && e.options.pasteLinesPerSelection && (l = v(a, function(e) {
                        return [e]
                    }));
            for (var u, h = r.ranges.length - 1; h >= 0; h--) {
                var d = r.ranges[h]
                  , f = d.from()
                  , p = d.to();
                d.empty() && (n && n > 0 ? f = I(f.line, f.ch - n) : e.state.overwrite && !s ? p = I(p.line, Math.min(E(o, p.line).text.length, p.ch + g(a).length)) : Ga && Ga.lineWise && Ga.text.join("\n") == t && (f = p = I(f.line, 0))),
                u = e.curOp.updateInput;
                var m = {
                    from: f,
                    to: p,
                    text: l ? l[h % l.length] : a,
                    origin: i || (s ? "paste" : e.state.cutIncoming ? "cut" : "+input")
                };
                Ti(e.doc, m),
                Ct(e, "inputRead", e, m)
            }
            t && !s && jo(e, t),
            jn(e),
            e.curOp.updateInput = u,
            e.curOp.typing = !0,
            e.state.pasteIncoming = e.state.cutIncoming = !1
        }
        function Go(e, t) {
            var n = e.clipboardData && e.clipboardData.getData("Text");
            if (n)
                return e.preventDefault(),
                t.isReadOnly() || t.options.disableInput || hr(t, function() {
                    return Uo(t, n, 0, null, "paste")
                }),
                !0
        }
        function jo(e, t) {
            if (e.options.electricChars && e.options.smartIndent)
                for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                    var i = n.ranges[r];
                    if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                        var o = e.getModeAt(i.head)
                          , s = !1;
                        if (o.electricChars) {
                            for (var a = 0; a < o.electricChars.length; a++)
                                if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                                    s = Bo(e, i.head.line, "smart");
                                    break
                                }
                        } else
                            o.electricInput && o.electricInput.test(E(e.doc, i.head.line).text.slice(0, i.head.ch)) && (s = Bo(e, i.head.line, "smart"));
                        s && Ct(e, "electricInput", e, i.head.line)
                    }
                }
        }
        function Vo(e) {
            for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                var i = e.doc.sel.ranges[r].head.line
                  , o = {
                    anchor: I(i, 0),
                    head: I(i + 1, 0)
                };
                n.push(o),
                t.push(e.getRange(o.anchor, o.head))
            }
            return {
                text: t,
                ranges: n
            }
        }
        function Ko(e, t) {
            e.setAttribute("autocorrect", "off"),
            e.setAttribute("autocapitalize", "off"),
            e.setAttribute("spellcheck", !!t)
        }
        function $o() {
            var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
              , t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
            return hs ? e.style.width = "1000px" : e.setAttribute("wrap", "off"),
            ys && (e.style.border = "1px solid black"),
            Ko(e),
            t
        }
        function Xo(e, t, n, r, i) {
            function o() {
                var r = t.line + n;
                return !(r < e.first || r >= e.first + e.size) && (t = new I(r,t.ch,t.sticky),
                c = E(e, r))
            }
            function s(r) {
                var s;
                if (null == (s = i ? Ee(e.cm, c, t, n) : Se(c, t, n))) {
                    if (r || !o())
                        return !1;
                    t = Le(i, e.cm, c, t.line, n)
                } else
                    t = s;
                return !0
            }
            var a = t
              , l = n
              , c = E(e, t.line);
            if ("char" == r)
                s();
            else if ("column" == r)
                s(!0);
            else if ("word" == r || "group" == r)
                for (var u = null, h = "group" == r, d = e.cm && e.cm.getHelper(t, "wordChars"), f = !0; !(n < 0) || s(!f); f = !1) {
                    var p = c.text.charAt(t.ch) || "\n"
                      , g = x(p, d) ? "w" : h && "\n" == p ? "n" : !h || /\s/.test(p) ? null : "p";
                    if (!h || f || g || (g = "s"),
                    u && u != g) {
                        n < 0 && (n = 1,
                        s(),
                        t.sticky = "after");
                        break
                    }
                    if (g && (u = g),
                    n > 0 && !s(!f))
                        break
                }
            var v = _i(e, t, a, l, !0);
            return D(a, v) && (v.hitSide = !0),
            v
        }
        function Yo(e, t, n, r) {
            var i, o = e.doc, s = t.left;
            if ("page" == r) {
                var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
                  , l = Math.max(a - .5 * yn(e.display), 3);
                i = (n > 0 ? t.bottom : t.top) + n * l
            } else
                "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
            for (var c; (c = pn(e, s, i)).outside; ) {
                if (n < 0 ? i <= 0 : i >= o.height) {
                    c.hitSide = !0;
                    break
                }
                i += 5 * n
            }
            return c
        }
        function Zo(e, t) {
            var n = Xt(e, t.line);
            if (!n || n.hidden)
                return null;
            var r = E(e.doc, t.line)
              , i = Vt(n, r, t.line)
              , o = Ce(r, e.doc.direction)
              , s = "left";
            o && (s = ke(o, t.ch) % 2 ? "right" : "left");
            var a = Qt(i.map, t.ch, s);
            return a.offset = "right" == a.collapse ? a.end : a.start,
            a
        }
        function Qo(e) {
            for (var t = e; t; t = t.parentNode)
                if (/CodeMirror-gutter-wrapper/.test(t.className))
                    return !0;
            return !1
        }
        function Jo(e, t) {
            return t && (e.bad = !0),
            e
        }
        function es(e, t, n, r, i) {
            function o(e) {
                return function(t) {
                    return t.id == e
                }
            }
            function s() {
                u && (c += h,
                u = !1)
            }
            function a(e) {
                e && (s(),
                c += e)
            }
            function l(t) {
                if (1 == t.nodeType) {
                    var n = t.getAttribute("cm-text");
                    if (null != n)
                        return void a(n || t.textContent.replace(/\u200b/g, ""));
                    var c, d = t.getAttribute("cm-marker");
                    if (d) {
                        var f = e.findMarks(I(r, 0), I(i + 1, 0), o(+d));
                        return void (f.length && (c = f[0].find()) && a(T(e.doc, c.from, c.to).join(h)))
                    }
                    if ("false" == t.getAttribute("contenteditable"))
                        return;
                    var p = /^(pre|div|p)$/i.test(t.nodeName);
                    p && s();
                    for (var g = 0; g < t.childNodes.length; g++)
                        l(t.childNodes[g]);
                    p && (u = !0)
                } else
                    3 == t.nodeType && a(t.nodeValue)
            }
            for (var c = "", u = !1, h = e.doc.lineSeparator(); l(t),
            t != n; )
                t = t.nextSibling;
            return c
        }
        function ts(e, t, n) {
            var r;
            if (t == e.display.lineDiv) {
                if (!(r = e.display.lineDiv.childNodes[n]))
                    return Jo(e.clipPos(I(e.display.viewTo - 1)), !0);
                t = null,
                n = 0
            } else
                for (r = t; ; r = r.parentNode) {
                    if (!r || r == e.display.lineDiv)
                        return null;
                    if (r.parentNode && r.parentNode == e.display.lineDiv)
                        break
                }
            for (var i = 0; i < e.display.view.length; i++) {
                var o = e.display.view[i];
                if (o.node == r)
                    return ns(o, t, n)
            }
        }
        function ns(e, t, n) {
            function r(t, n, r) {
                for (var i = -1; i < (h ? h.length : 0); i++)
                    for (var o = i < 0 ? u.map : h[i], s = 0; s < o.length; s += 3) {
                        var a = o[s + 2];
                        if (a == t || a == n) {
                            var l = A(i < 0 ? e.line : e.rest[i])
                              , c = o[s] + r;
                            return (r < 0 || a != t) && (c = o[s + (r ? 1 : 0)]),
                            I(l, c)
                        }
                    }
            }
            var i = e.text.firstChild
              , s = !1;
            if (!t || !o(i, t))
                return Jo(I(A(e.line), 0), !0);
            if (t == i && (s = !0,
            t = i.childNodes[n],
            n = 0,
            !t)) {
                var a = e.rest ? g(e.rest) : e.line;
                return Jo(I(A(a), a.text.length), s)
            }
            var l = 3 == t.nodeType ? t : null
              , c = t;
            for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild,
            n && (n = l.nodeValue.length)); c.parentNode != i; )
                c = c.parentNode;
            var u = e.measure
              , h = u.maps
              , d = r(l, c, n);
            if (d)
                return Jo(d, s);
            for (var f = c.nextSibling, p = l ? l.nodeValue.length - n : 0; f; f = f.nextSibling) {
                if (d = r(f, f.firstChild, 0))
                    return Jo(I(d.line, d.ch - p), s);
                p += f.textContent.length
            }
            for (var v = c.previousSibling, m = n; v; v = v.previousSibling) {
                if (d = r(v, v.firstChild, -1))
                    return Jo(I(d.line, d.ch + m), s);
                m += v.textContent.length
            }
        }
        var rs = navigator.userAgent
          , is = navigator.platform
          , os = /gecko\/\d/i.test(rs)
          , ss = /MSIE \d/.test(rs)
          , as = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(rs)
          , ls = /Edge\/(\d+)/.exec(rs)
          , cs = ss || as || ls
          , us = cs && (ss ? document.documentMode || 6 : +(ls || as)[1])
          , hs = !ls && /WebKit\//.test(rs)
          , ds = hs && /Qt\/\d+\.\d+/.test(rs)
          , fs = !ls && /Chrome\//.test(rs)
          , ps = /Opera\//.test(rs)
          , gs = /Apple Computer/.test(navigator.vendor)
          , vs = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(rs)
          , ms = /PhantomJS/.test(rs)
          , ys = !ls && /AppleWebKit/.test(rs) && /Mobile\/\w+/.test(rs)
          , bs = /Android/.test(rs)
          , ws = ys || bs || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(rs)
          , xs = ys || /Mac/.test(is)
          , ks = /\bCrOS\b/.test(rs)
          , Cs = /win/i.test(is)
          , _s = ps && rs.match(/Version\/(\d*\.\d*)/);
        _s && (_s = Number(_s[1])),
        _s && _s >= 15 && (ps = !1,
        hs = !0);
        var Ss, Ls = xs && (ds || ps && (null == _s || _s < 12.11)), Es = os || cs && us >= 9, Ts = function(t, n) {
            var r = t.className
              , i = e(n).exec(r);
            if (i) {
                var o = r.slice(i.index + i[0].length);
                t.className = r.slice(0, i.index) + (o ? i[1] + o : "")
            }
        };
        Ss = document.createRange ? function(e, t, n, r) {
            var i = document.createRange();
            return i.setEnd(r || e, n),
            i.setStart(e, t),
            i
        }
        : function(e, t, n) {
            var r = document.body.createTextRange();
            try {
                r.moveToElementText(e.parentNode)
            } catch (e) {
                return r
            }
            return r.collapse(!0),
            r.moveEnd("character", n),
            r.moveStart("character", t),
            r
        }
        ;
        var Ms = function(e) {
            e.select()
        };
        ys ? Ms = function(e) {
            e.selectionStart = 0,
            e.selectionEnd = e.value.length
        }
        : cs && (Ms = function(e) {
            try {
                e.select()
            } catch (e) {}
        }
        );
        var Rs = function() {
            this.id = null
        };
        Rs.prototype.set = function(e, t) {
            clearTimeout(this.id),
            this.id = setTimeout(t, e)
        }
        ;
        var As, Fs, Os = 30, Ns = {
            toString: function() {
                return "CodeMirror.Pass"
            }
        }, Is = {
            scroll: !1
        }, Ps = {
            origin: "*mouse"
        }, Ds = {
            origin: "+move"
        }, Hs = [""], qs = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, Ws = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/, Bs = !1, zs = !1, Us = null, Gs = function() {
            function e(e) {
                return e <= 247 ? n.charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1785 ? r.charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L"
            }
            function t(e, t, n) {
                this.level = e,
                this.from = t,
                this.to = n
            }
            var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
              , r = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
              , i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
              , o = /[stwN]/
              , s = /[LRr]/
              , a = /[Lb1n]/
              , l = /[1n]/;
            return function(n, r) {
                var c = "ltr" == r ? "L" : "R";
                if (0 == n.length || "ltr" == r && !i.test(n))
                    return !1;
                for (var u = n.length, h = [], d = 0; d < u; ++d)
                    h.push(e(n.charCodeAt(d)));
                for (var f = 0, p = c; f < u; ++f) {
                    var v = h[f];
                    "m" == v ? h[f] = p : p = v
                }
                for (var m = 0, y = c; m < u; ++m) {
                    var b = h[m];
                    "1" == b && "r" == y ? h[m] = "n" : s.test(b) && (y = b,
                    "r" == b && (h[m] = "R"))
                }
                for (var w = 1, x = h[0]; w < u - 1; ++w) {
                    var k = h[w];
                    "+" == k && "1" == x && "1" == h[w + 1] ? h[w] = "1" : "," != k || x != h[w + 1] || "1" != x && "n" != x || (h[w] = x),
                    x = k
                }
                for (var C = 0; C < u; ++C) {
                    var _ = h[C];
                    if ("," == _)
                        h[C] = "N";
                    else if ("%" == _) {
                        var S = void 0;
                        for (S = C + 1; S < u && "%" == h[S]; ++S)
                            ;
                        for (var L = C && "!" == h[C - 1] || S < u && "1" == h[S] ? "1" : "N", E = C; E < S; ++E)
                            h[E] = L;
                        C = S - 1
                    }
                }
                for (var T = 0, M = c; T < u; ++T) {
                    var R = h[T];
                    "L" == M && "1" == R ? h[T] = "L" : s.test(R) && (M = R)
                }
                for (var A = 0; A < u; ++A)
                    if (o.test(h[A])) {
                        var F = void 0;
                        for (F = A + 1; F < u && o.test(h[F]); ++F)
                            ;
                        for (var O = "L" == (A ? h[A - 1] : c), N = O == ("L" == (F < u ? h[F] : c)) ? O ? "L" : "R" : c, I = A; I < F; ++I)
                            h[I] = N;
                        A = F - 1
                    }
                for (var P, D = [], H = 0; H < u; )
                    if (a.test(h[H])) {
                        var q = H;
                        for (++H; H < u && a.test(h[H]); ++H)
                            ;
                        D.push(new t(0,q,H))
                    } else {
                        var W = H
                          , B = D.length;
                        for (++H; H < u && "L" != h[H]; ++H)
                            ;
                        for (var z = W; z < H; )
                            if (l.test(h[z])) {
                                W < z && D.splice(B, 0, new t(1,W,z));
                                var U = z;
                                for (++z; z < H && l.test(h[z]); ++z)
                                    ;
                                D.splice(B, 0, new t(2,U,z)),
                                W = z
                            } else
                                ++z;
                        W < H && D.splice(B, 0, new t(1,W,H))
                    }
                return 1 == D[0].level && (P = n.match(/^\s+/)) && (D[0].from = P[0].length,
                D.unshift(new t(0,0,P[0].length))),
                1 == g(D).level && (P = n.match(/\s+$/)) && (g(D).to -= P[0].length,
                D.push(new t(0,u - P[0].length,u))),
                "rtl" == r ? D.reverse() : D
            }
        }(), js = [], Vs = function(e, t, n) {
            if (e.addEventListener)
                e.addEventListener(t, n, !1);
            else if (e.attachEvent)
                e.attachEvent("on" + t, n);
            else {
                var r = e._handlers || (e._handlers = {});
                r[t] = (r[t] || js).concat(n)
            }
        }, Ks = function() {
            if (cs && us < 9)
                return !1;
            var e = r("div");
            return "draggable"in e || "dragDrop"in e
        }(), $s = 3 != "\n\nb".split(/\n/).length ? function(e) {
            for (var t = 0, n = [], r = e.length; t <= r; ) {
                var i = e.indexOf("\n", t);
                -1 == i && (i = e.length);
                var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i)
                  , s = o.indexOf("\r");
                -1 != s ? (n.push(o.slice(0, s)),
                t += s + 1) : (n.push(o),
                t = i + 1)
            }
            return n
        }
        : function(e) {
            return e.split(/\r\n?|\n/)
        }
        , Xs = window.getSelection ? function(e) {
            try {
                return e.selectionStart != e.selectionEnd
            } catch (e) {
                return !1
            }
        }
        : function(e) {
            var t;
            try {
                t = e.ownerDocument.selection.createRange()
            } catch (e) {}
            return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t)
        }
        , Ys = function() {
            var e = r("div");
            return "oncopy"in e || (e.setAttribute("oncopy", "return;"),
            "function" == typeof e.oncopy)
        }(), Zs = null, Qs = {}, Js = {}, ea = {}, ta = function(e, t, n) {
            this.pos = this.start = 0,
            this.string = e,
            this.tabSize = t || 8,
            this.lastColumnPos = this.lastColumnValue = 0,
            this.lineStart = 0,
            this.lineOracle = n
        };
        ta.prototype.eol = function() {
            return this.pos >= this.string.length
        }
        ,
        ta.prototype.sol = function() {
            return this.pos == this.lineStart
        }
        ,
        ta.prototype.peek = function() {
            return this.string.charAt(this.pos) || void 0
        }
        ,
        ta.prototype.next = function() {
            if (this.pos < this.string.length)
                return this.string.charAt(this.pos++)
        }
        ,
        ta.prototype.eat = function(e) {
            var t = this.string.charAt(this.pos);
            if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t)))
                return ++this.pos,
                t
        }
        ,
        ta.prototype.eatWhile = function(e) {
            for (var t = this.pos; this.eat(e); )
                ;
            return this.pos > t
        }
        ,
        ta.prototype.eatSpace = function() {
            for (var e = this, t = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
                ++e.pos;
            return this.pos > t
        }
        ,
        ta.prototype.skipToEnd = function() {
            this.pos = this.string.length
        }
        ,
        ta.prototype.skipTo = function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1)
                return this.pos = t,
                !0
        }
        ,
        ta.prototype.backUp = function(e) {
            this.pos -= e
        }
        ,
        ta.prototype.column = function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = h(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
            this.lastColumnPos = this.start),
            this.lastColumnValue - (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0)
        }
        ,
        ta.prototype.indentation = function() {
            return h(this.string, null, this.tabSize) - (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0)
        }
        ,
        ta.prototype.match = function(e, t, n) {
            if ("string" != typeof e) {
                var r = this.string.slice(this.pos).match(e);
                return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length),
                r)
            }
            var i = function(e) {
                return n ? e.toLowerCase() : e
            };
            if (i(this.string.substr(this.pos, e.length)) == i(e))
                return !1 !== t && (this.pos += e.length),
                !0
        }
        ,
        ta.prototype.current = function() {
            return this.string.slice(this.start, this.pos)
        }
        ,
        ta.prototype.hideFirstChars = function(e, t) {
            this.lineStart += e;
            try {
                return t()
            } finally {
                this.lineStart -= e
            }
        }
        ,
        ta.prototype.lookAhead = function(e) {
            var t = this.lineOracle;
            return t && t.lookAhead(e)
        }
        ;
        var na = function(e, t) {
            this.state = e,
            this.lookAhead = t
        }
          , ra = function(e, t, n, r) {
            this.state = t,
            this.doc = e,
            this.line = n,
            this.maxLookAhead = r || 0
        };
        ra.prototype.lookAhead = function(e) {
            var t = this.doc.getLine(this.line + e);
            return null != t && e > this.maxLookAhead && (this.maxLookAhead = e),
            t
        }
        ,
        ra.prototype.nextLine = function() {
            this.line++,
            this.maxLookAhead > 0 && this.maxLookAhead--
        }
        ,
        ra.fromSaved = function(e, t, n) {
            return t instanceof na ? new ra(e,$e(e.mode, t.state),n,t.lookAhead) : new ra(e,$e(e.mode, t),n)
        }
        ,
        ra.prototype.save = function(e) {
            var t = !1 !== e ? $e(this.doc.mode, this.state) : this.state;
            return this.maxLookAhead > 0 ? new na(t,this.maxLookAhead) : t
        }
        ;
        var ia = function(e, t, n) {
            this.start = e.start,
            this.end = e.pos,
            this.string = e.current(),
            this.type = t || null,
            this.state = n
        }
          , oa = function(e, t, n) {
            this.text = e,
            re(this, t),
            this.height = n ? n(this) : 1
        };
        oa.prototype.lineNo = function() {
            return A(this)
        }
        ,
        Ne(oa);
        var sa, aa = {}, la = {}, ca = null, ua = null, ha = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, da = function(e, t, n) {
            this.cm = n;
            var i = this.vert = r("div", [r("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
              , o = this.horiz = r("div", [r("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
            e(i),
            e(o),
            Vs(i, "scroll", function() {
                i.clientHeight && t(i.scrollTop, "vertical")
            }),
            Vs(o, "scroll", function() {
                o.clientWidth && t(o.scrollLeft, "horizontal")
            }),
            this.checkedZeroWidth = !1,
            cs && us < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
        };
        da.prototype.update = function(e) {
            var t = e.scrollWidth > e.clientWidth + 1
              , n = e.scrollHeight > e.clientHeight + 1
              , r = e.nativeBarWidth;
            if (n) {
                this.vert.style.display = "block",
                this.vert.style.bottom = t ? r + "px" : "0";
                var i = e.viewHeight - (t ? r : 0);
                this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
            } else
                this.vert.style.display = "",
                this.vert.firstChild.style.height = "0";
            if (t) {
                this.horiz.style.display = "block",
                this.horiz.style.right = n ? r + "px" : "0",
                this.horiz.style.left = e.barLeft + "px";
                var o = e.viewWidth - e.barLeft - (n ? r : 0);
                this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
            } else
                this.horiz.style.display = "",
                this.horiz.firstChild.style.width = "0";
            return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(),
            this.checkedZeroWidth = !0),
            {
                right: n ? r : 0,
                bottom: t ? r : 0
            }
        }
        ,
        da.prototype.setScrollLeft = function(e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
            this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
        }
        ,
        da.prototype.setScrollTop = function(e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e),
            this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
        }
        ,
        da.prototype.zeroWidthHack = function() {
            var e = xs && !vs ? "12px" : "18px";
            this.horiz.style.height = this.vert.style.width = e,
            this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
            this.disableHoriz = new Rs,
            this.disableVert = new Rs
        }
        ,
        da.prototype.enableZeroWidthBar = function(e, t, n) {
            function r() {
                var i = e.getBoundingClientRect();
                ("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, r)
            }
            e.style.pointerEvents = "auto",
            t.set(1e3, r)
        }
        ,
        da.prototype.clear = function() {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz),
            e.removeChild(this.vert)
        }
        ;
        var fa = function() {};
        fa.prototype.update = function() {
            return {
                bottom: 0,
                right: 0
            }
        }
        ,
        fa.prototype.setScrollLeft = function() {}
        ,
        fa.prototype.setScrollTop = function() {}
        ,
        fa.prototype.clear = function() {}
        ;
        var pa = {
            native: da,
            null: fa
        }
          , ga = 0
          , va = function(e, t, n) {
            var r = e.display;
            this.viewport = t,
            this.visible = Dn(r, e.doc, t),
            this.editorIsHidden = !r.wrapper.offsetWidth,
            this.wrapperHeight = r.wrapper.clientHeight,
            this.wrapperWidth = r.wrapper.clientWidth,
            this.oldDisplayWidth = Ut(e),
            this.force = n,
            this.dims = wn(e),
            this.events = []
        };
        va.prototype.signal = function(e, t) {
            Oe(e, t) && this.events.push(arguments)
        }
        ,
        va.prototype.finish = function() {
            for (var e = this, t = 0; t < this.events.length; t++)
                Re.apply(null, e.events[t])
        }
        ;
        var ma = 0
          , ya = null;
        cs ? ya = -.53 : os ? ya = 15 : fs ? ya = -.7 : gs && (ya = -1 / 3);
        var ba = function(e, t) {
            this.ranges = e,
            this.primIndex = t
        };
        ba.prototype.primary = function() {
            return this.ranges[this.primIndex]
        }
        ,
        ba.prototype.equals = function(e) {
            var t = this;
            if (e == this)
                return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
                return !1;
            for (var n = 0; n < this.ranges.length; n++) {
                var r = t.ranges[n]
                  , i = e.ranges[n];
                if (!D(r.anchor, i.anchor) || !D(r.head, i.head))
                    return !1
            }
            return !0
        }
        ,
        ba.prototype.deepCopy = function() {
            for (var e = this, t = [], n = 0; n < this.ranges.length; n++)
                t[n] = new wa(H(e.ranges[n].anchor),H(e.ranges[n].head));
            return new ba(t,this.primIndex)
        }
        ,
        ba.prototype.somethingSelected = function() {
            for (var e = this, t = 0; t < this.ranges.length; t++)
                if (!e.ranges[t].empty())
                    return !0;
            return !1
        }
        ,
        ba.prototype.contains = function(e, t) {
            var n = this;
            t || (t = e);
            for (var r = 0; r < this.ranges.length; r++) {
                var i = n.ranges[r];
                if (P(t, i.from()) >= 0 && P(e, i.to()) <= 0)
                    return r
            }
            return -1
        }
        ;
        var wa = function(e, t) {
            this.anchor = e,
            this.head = t
        };
        wa.prototype.from = function() {
            return W(this.anchor, this.head)
        }
        ,
        wa.prototype.to = function() {
            return q(this.anchor, this.head)
        }
        ,
        wa.prototype.empty = function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }
        ,
        qi.prototype = {
            chunkSize: function() {
                return this.lines.length
            },
            removeInner: function(e, t) {
                for (var n = this, r = e, i = e + t; r < i; ++r) {
                    var o = n.lines[r];
                    n.height -= o.height,
                    ct(o),
                    Ct(o, "delete")
                }
                this.lines.splice(e, t)
            },
            collapse: function(e) {
                e.push.apply(e, this.lines)
            },
            insertInner: function(e, t, n) {
                var r = this;
                this.height += n,
                this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
                for (var i = 0; i < t.length; ++i)
                    t[i].parent = r
            },
            iterN: function(e, t, n) {
                for (var r = this, i = e + t; e < i; ++e)
                    if (n(r.lines[e]))
                        return !0
            }
        },
        Wi.prototype = {
            chunkSize: function() {
                return this.size
            },
            removeInner: function(e, t) {
                var n = this;
                this.size -= t;
                for (var r = 0; r < this.children.length; ++r) {
                    var i = n.children[r]
                      , o = i.chunkSize();
                    if (e < o) {
                        var s = Math.min(t, o - e)
                          , a = i.height;
                        if (i.removeInner(e, s),
                        n.height -= a - i.height,
                        o == s && (n.children.splice(r--, 1),
                        i.parent = null),
                        0 == (t -= s))
                            break;
                        e = 0
                    } else
                        e -= o
                }
                if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0]instanceof qi))) {
                    var l = [];
                    this.collapse(l),
                    this.children = [new qi(l)],
                    this.children[0].parent = this
                }
            },
            collapse: function(e) {
                for (var t = this, n = 0; n < this.children.length; ++n)
                    t.children[n].collapse(e)
            },
            insertInner: function(e, t, n) {
                var r = this;
                this.size += t.length,
                this.height += n;
                for (var i = 0; i < this.children.length; ++i) {
                    var o = r.children[i]
                      , s = o.chunkSize();
                    if (e <= s) {
                        if (o.insertInner(e, t, n),
                        o.lines && o.lines.length > 50) {
                            for (var a = o.lines.length % 25 + 25, l = a; l < o.lines.length; ) {
                                var c = new qi(o.lines.slice(l, l += 25));
                                o.height -= c.height,
                                r.children.splice(++i, 0, c),
                                c.parent = r
                            }
                            o.lines = o.lines.slice(0, a),
                            r.maybeSpill()
                        }
                        break
                    }
                    e -= s
                }
            },
            maybeSpill: function() {
                if (!(this.children.length <= 10)) {
                    var e = this;
                    do {
                        var t = new Wi(e.children.splice(e.children.length - 5, 5));
                        if (e.parent) {
                            e.size -= t.size,
                            e.height -= t.height;
                            var n = d(e.parent.children, e);
                            e.parent.children.splice(n + 1, 0, t)
                        } else {
                            var r = new Wi(e.children);
                            r.parent = e,
                            e.children = [r, t],
                            e = r
                        }
                        t.parent = e.parent
                    } while (e.children.length > 10);e.parent.maybeSpill()
                }
            },
            iterN: function(e, t, n) {
                for (var r = this, i = 0; i < this.children.length; ++i) {
                    var o = r.children[i]
                      , s = o.chunkSize();
                    if (e < s) {
                        var a = Math.min(t, s - e);
                        if (o.iterN(e, a, n))
                            return !0;
                        if (0 == (t -= a))
                            break;
                        e = 0
                    } else
                        e -= s
                }
            }
        };
        var xa = function(e, t, n) {
            var r = this;
            if (n)
                for (var i in n)
                    n.hasOwnProperty(i) && (r[i] = n[i]);
            this.doc = e,
            this.node = t
        };
        xa.prototype.clear = function() {
            var e = this
              , t = this.doc.cm
              , n = this.line.widgets
              , r = this.line
              , i = A(r);
            if (null != i && n) {
                for (var o = 0; o < n.length; ++o)
                    n[o] == e && n.splice(o--, 1);
                n.length || (r.widgets = null);
                var s = Dt(this);
                R(r, Math.max(0, r.height - s)),
                t && (hr(t, function() {
                    Bi(t, r, -s),
                    vr(t, i, "widget")
                }),
                Ct(t, "lineWidgetCleared", t, this, i))
            }
        }
        ,
        xa.prototype.changed = function() {
            var e = this
              , t = this.height
              , n = this.doc.cm
              , r = this.line;
            this.height = null;
            var i = Dt(this) - t;
            i && (R(r, r.height + i),
            n && hr(n, function() {
                n.curOp.forceUpdate = !0,
                Bi(n, r, i),
                Ct(n, "lineWidgetChanged", n, e, A(r))
            }))
        }
        ,
        Ne(xa);
        var ka = 0
          , Ca = function(e, t) {
            this.lines = [],
            this.type = t,
            this.doc = e,
            this.id = ++ka
        };
        Ca.prototype.clear = function() {
            var e = this;
            if (!this.explicitlyCleared) {
                var t = this.doc.cm
                  , n = t && !t.curOp;
                if (n && rr(t),
                Oe(this, "clear")) {
                    var r = this.find();
                    r && Ct(this, "clear", r.from, r.to)
                }
                for (var i = null, o = null, s = 0; s < this.lines.length; ++s) {
                    var a = e.lines[s]
                      , l = $(a.markedSpans, e);
                    t && !e.collapsed ? vr(t, A(a), "text") : t && (null != l.to && (o = A(a)),
                    null != l.from && (i = A(a))),
                    a.markedSpans = X(a.markedSpans, l),
                    null == l.from && e.collapsed && !ve(e.doc, a) && t && R(a, yn(t.display))
                }
                if (t && this.collapsed && !t.options.lineWrapping)
                    for (var c = 0; c < this.lines.length; ++c) {
                        var u = he(e.lines[c])
                          , h = be(u);
                        h > t.display.maxLineLength && (t.display.maxLine = u,
                        t.display.maxLineLength = h,
                        t.display.maxLineChanged = !0)
                    }
                null != i && t && this.collapsed && gr(t, i, o + 1),
                this.lines.length = 0,
                this.explicitlyCleared = !0,
                this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
                t && xi(t.doc)),
                t && Ct(t, "markerCleared", t, this, i, o),
                n && ir(t),
                this.parent && this.parent.clear()
            }
        }
        ,
        Ca.prototype.find = function(e, t) {
            var n = this;
            null == e && "bookmark" == this.type && (e = 1);
            for (var r, i, o = 0; o < this.lines.length; ++o) {
                var s = n.lines[o]
                  , a = $(s.markedSpans, n);
                if (null != a.from && (r = I(t ? s : A(s), a.from),
                -1 == e))
                    return r;
                if (null != a.to && (i = I(t ? s : A(s), a.to),
                1 == e))
                    return i
            }
            return r && {
                from: r,
                to: i
            }
        }
        ,
        Ca.prototype.changed = function() {
            var e = this
              , t = this.find(-1, !0)
              , n = this
              , r = this.doc.cm;
            t && r && hr(r, function() {
                var i = t.line
                  , o = A(t.line)
                  , s = Xt(r, o);
                if (s && (nn(s),
                r.curOp.selectionChanged = r.curOp.forceUpdate = !0),
                r.curOp.updateMaxLine = !0,
                !ve(n.doc, i) && null != n.height) {
                    var a = n.height;
                    n.height = null;
                    var l = Dt(n) - a;
                    l && R(i, i.height + l)
                }
                Ct(r, "markerChanged", r, e)
            })
        }
        ,
        Ca.prototype.attachLine = function(e) {
            if (!this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                t.maybeHiddenMarkers && -1 != d(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
            }
            this.lines.push(e)
        }
        ,
        Ca.prototype.detachLine = function(e) {
            if (this.lines.splice(d(this.lines, e), 1),
            !this.lines.length && this.doc.cm) {
                var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
            }
        }
        ,
        Ne(Ca);
        var _a = function(e, t) {
            var n = this;
            this.markers = e,
            this.primary = t;
            for (var r = 0; r < e.length; ++r)
                e[r].parent = n
        };
        _a.prototype.clear = function() {
            var e = this;
            if (!this.explicitlyCleared) {
                this.explicitlyCleared = !0;
                for (var t = 0; t < this.markers.length; ++t)
                    e.markers[t].clear();
                Ct(this, "clear")
            }
        }
        ,
        _a.prototype.find = function(e, t) {
            return this.primary.find(e, t)
        }
        ,
        Ne(_a);
        var Sa = 0
          , La = function(e, t, n, r, i) {
            if (!(this instanceof La))
                return new La(e,t,n,r,i);
            null == n && (n = 0),
            Wi.call(this, [new qi([new oa("",null)])]),
            this.first = n,
            this.scrollTop = this.scrollLeft = 0,
            this.cantEdit = !1,
            this.cleanGeneration = 1,
            this.modeFrontier = this.highlightFrontier = n;
            var o = I(n, 0);
            this.sel = Hr(o),
            this.history = new Qr(null),
            this.id = ++Sa,
            this.modeOption = t,
            this.lineSep = r,
            this.direction = "rtl" == i ? "rtl" : "ltr",
            this.extend = !1,
            "string" == typeof e && (e = this.splitLines(e)),
            Kr(this, {
                from: o,
                to: o,
                text: e
            }),
            yi(this, Hr(o), Is)
        };
        La.prototype = b(Wi.prototype, {
            constructor: La,
            iter: function(e, t, n) {
                n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
            },
            insert: function(e, t) {
                for (var n = 0, r = 0; r < t.length; ++r)
                    n += t[r].height;
                this.insertInner(e - this.first, t, n)
            },
            remove: function(e, t) {
                this.removeInner(e - this.first, t)
            },
            getValue: function(e) {
                var t = M(this, this.first, this.first + this.size);
                return !1 === e ? t : t.join(e || this.lineSeparator())
            },
            setValue: pr(function(e) {
                var t = I(this.first, 0)
                  , n = this.first + this.size - 1;
                Ti(this, {
                    from: t,
                    to: I(n, E(this, n).text.length),
                    text: this.splitLines(e),
                    origin: "setValue",
                    full: !0
                }, !0),
                this.cm && Vn(this.cm, 0, 0),
                yi(this, Hr(t), Is)
            }),
            replaceRange: function(e, t, n, r) {
                Ni(this, e, t = z(this, t), n = n ? z(this, n) : t, r)
            },
            getRange: function(e, t, n) {
                var r = T(this, z(this, e), z(this, t));
                return !1 === n ? r : r.join(n || this.lineSeparator())
            },
            getLine: function(e) {
                var t = this.getLineHandle(e);
                return t && t.text
            },
            getLineHandle: function(e) {
                if (O(this, e))
                    return E(this, e)
            },
            getLineNumber: function(e) {
                return A(e)
            },
            getLineHandleVisualStart: function(e) {
                return "number" == typeof e && (e = E(this, e)),
                he(e)
            },
            lineCount: function() {
                return this.size
            },
            firstLine: function() {
                return this.first
            },
            lastLine: function() {
                return this.first + this.size - 1
            },
            clipPos: function(e) {
                return z(this, e)
            },
            getCursor: function(e) {
                var t = this.sel.primary();
                return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from()
            },
            listSelections: function() {
                return this.sel.ranges
            },
            somethingSelected: function() {
                return this.sel.somethingSelected()
            },
            setCursor: pr(function(e, t, n) {
                gi(this, z(this, "number" == typeof e ? I(e, t || 0) : e), null, n)
            }),
            setSelection: pr(function(e, t, n) {
                gi(this, z(this, e), z(this, t || e), n)
            }),
            extendSelection: pr(function(e, t, n) {
                di(this, z(this, e), t && z(this, t), n)
            }),
            extendSelections: pr(function(e, t) {
                fi(this, G(this, e), t)
            }),
            extendSelectionsBy: pr(function(e, t) {
                fi(this, G(this, v(this.sel.ranges, e)), t)
            }),
            setSelections: pr(function(e, t, n) {
                var r = this;
                if (e.length) {
                    for (var i = [], o = 0; o < e.length; o++)
                        i[o] = new wa(z(r, e[o].anchor),z(r, e[o].head));
                    null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                    yi(this, Dr(i, t), n)
                }
            }),
            addSelection: pr(function(e, t, n) {
                var r = this.sel.ranges.slice(0);
                r.push(new wa(z(this, e),z(this, t || e))),
                yi(this, Dr(r, r.length - 1), n)
            }),
            getSelection: function(e) {
                for (var t, n = this, r = this.sel.ranges, i = 0; i < r.length; i++) {
                    var o = T(n, r[i].from(), r[i].to());
                    t = t ? t.concat(o) : o
                }
                return !1 === e ? t : t.join(e || this.lineSeparator())
            },
            getSelections: function(e) {
                for (var t = this, n = [], r = this.sel.ranges, i = 0; i < r.length; i++) {
                    var o = T(t, r[i].from(), r[i].to());
                    !1 !== e && (o = o.join(e || t.lineSeparator())),
                    n[i] = o
                }
                return n
            },
            replaceSelection: function(e, t, n) {
                for (var r = [], i = 0; i < this.sel.ranges.length; i++)
                    r[i] = e;
                this.replaceSelections(r, t, n || "+input")
            },
            replaceSelections: pr(function(e, t, n) {
                for (var r = this, i = [], o = this.sel, s = 0; s < o.ranges.length; s++) {
                    var a = o.ranges[s];
                    i[s] = {
                        from: a.from(),
                        to: a.to(),
                        text: r.splitLines(e[s]),
                        origin: n
                    }
                }
                for (var l = t && "end" != t && Ur(this, i, t), c = i.length - 1; c >= 0; c--)
                    Ti(r, i[c]);
                l ? mi(this, l) : this.cm && jn(this.cm)
            }),
            undo: pr(function() {
                Ri(this, "undo")
            }),
            redo: pr(function() {
                Ri(this, "redo")
            }),
            undoSelection: pr(function() {
                Ri(this, "undo", !0)
            }),
            redoSelection: pr(function() {
                Ri(this, "redo", !0)
            }),
            setExtending: function(e) {
                this.extend = e
            },
            getExtending: function() {
                return this.extend
            },
            historySize: function() {
                for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
                    e.done[r].ranges || ++t;
                for (var i = 0; i < e.undone.length; i++)
                    e.undone[i].ranges || ++n;
                return {
                    undo: t,
                    redo: n
                }
            },
            clearHistory: function() {
                this.history = new Qr(this.history.maxGeneration)
            },
            markClean: function() {
                this.cleanGeneration = this.changeGeneration(!0)
            },
            changeGeneration: function(e) {
                return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                this.history.generation
            },
            isClean: function(e) {
                return this.history.generation == (e || this.cleanGeneration)
            },
            getHistory: function() {
                return {
                    done: ui(this.history.done),
                    undone: ui(this.history.undone)
                }
            },
            setHistory: function(e) {
                var t = this.history = new Qr(this.history.maxGeneration);
                t.done = ui(e.done.slice(0), null, !0),
                t.undone = ui(e.undone.slice(0), null, !0)
            },
            setGutterMarker: pr(function(e, t, n) {
                return Hi(this, e, "gutter", function(e) {
                    var r = e.gutterMarkers || (e.gutterMarkers = {});
                    return r[t] = n,
                    !n && k(r) && (e.gutterMarkers = null),
                    !0
                })
            }),
            clearGutter: pr(function(e) {
                var t = this;
                this.iter(function(n) {
                    n.gutterMarkers && n.gutterMarkers[e] && Hi(t, n, "gutter", function() {
                        return n.gutterMarkers[e] = null,
                        k(n.gutterMarkers) && (n.gutterMarkers = null),
                        !0
                    })
                })
            }),
            lineInfo: function(e) {
                var t;
                if ("number" == typeof e) {
                    if (!O(this, e))
                        return null;
                    if (t = e,
                    !(e = E(this, e)))
                        return null
                } else if (null == (t = A(e)))
                    return null;
                return {
                    line: t,
                    handle: e,
                    text: e.text,
                    gutterMarkers: e.gutterMarkers,
                    textClass: e.textClass,
                    bgClass: e.bgClass,
                    wrapClass: e.wrapClass,
                    widgets: e.widgets
                }
            },
            addLineClass: pr(function(t, n, r) {
                return Hi(this, t, "gutter" == n ? "gutter" : "class", function(t) {
                    var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
                    if (t[i]) {
                        if (e(r).test(t[i]))
                            return !1;
                        t[i] += " " + r
                    } else
                        t[i] = r;
                    return !0
                })
            }),
            removeLineClass: pr(function(t, n, r) {
                return Hi(this, t, "gutter" == n ? "gutter" : "class", function(t) {
                    var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass"
                      , o = t[i];
                    if (!o)
                        return !1;
                    if (null == r)
                        t[i] = null;
                    else {
                        var s = o.match(e(r));
                        if (!s)
                            return !1;
                        var a = s.index + s[0].length;
                        t[i] = o.slice(0, s.index) + (s.index && a != o.length ? " " : "") + o.slice(a) || null
                    }
                    return !0
                })
            }),
            addLineWidget: pr(function(e, t, n) {
                return zi(this, e, t, n)
            }),
            removeLineWidget: function(e) {
                e.clear()
            },
            markText: function(e, t, n) {
                return Ui(this, z(this, e), z(this, t), n, n && n.type || "range")
            },
            setBookmark: function(e, t) {
                var n = {
                    replacedWith: t && (null == t.nodeType ? t.widget : t),
                    insertLeft: t && t.insertLeft,
                    clearWhenEmpty: !1,
                    shared: t && t.shared,
                    handleMouseEvents: t && t.handleMouseEvents
                };
                return e = z(this, e),
                Ui(this, e, e, n, "bookmark")
            },
            findMarksAt: function(e) {
                var t = []
                  , n = E(this, (e = z(this, e)).line).markedSpans;
                if (n)
                    for (var r = 0; r < n.length; ++r) {
                        var i = n[r];
                        (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                    }
                return t
            },
            findMarks: function(e, t, n) {
                e = z(this, e),
                t = z(this, t);
                var r = []
                  , i = e.line;
                return this.iter(e.line, t.line + 1, function(o) {
                    var s = o.markedSpans;
                    if (s)
                        for (var a = 0; a < s.length; a++) {
                            var l = s[a];
                            null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
                        }
                    ++i
                }),
                r
            },
            getAllMarks: function() {
                var e = [];
                return this.iter(function(t) {
                    var n = t.markedSpans;
                    if (n)
                        for (var r = 0; r < n.length; ++r)
                            null != n[r].from && e.push(n[r].marker)
                }),
                e
            },
            posFromIndex: function(e) {
                var t, n = this.first, r = this.lineSeparator().length;
                return this.iter(function(i) {
                    var o = i.text.length + r;
                    if (o > e)
                        return t = e,
                        !0;
                    e -= o,
                    ++n
                }),
                z(this, I(n, t))
            },
            indexFromPos: function(e) {
                var t = (e = z(this, e)).ch;
                if (e.line < this.first || e.ch < 0)
                    return 0;
                var n = this.lineSeparator().length;
                return this.iter(this.first, e.line, function(e) {
                    t += e.text.length + n
                }),
                t
            },
            copy: function(e) {
                var t = new La(M(this, this.first, this.first + this.size),this.modeOption,this.first,this.lineSep,this.direction);
                return t.scrollTop = this.scrollTop,
                t.scrollLeft = this.scrollLeft,
                t.sel = this.sel,
                t.extend = !1,
                e && (t.history.undoDepth = this.history.undoDepth,
                t.setHistory(this.getHistory())),
                t
            },
            linkedDoc: function(e) {
                e || (e = {});
                var t = this.first
                  , n = this.first + this.size;
                null != e.from && e.from > t && (t = e.from),
                null != e.to && e.to < n && (n = e.to);
                var r = new La(M(this, t, n),e.mode || this.modeOption,t,this.lineSep,this.direction);
                return e.sharedHist && (r.history = this.history),
                (this.linked || (this.linked = [])).push({
                    doc: r,
                    sharedHist: e.sharedHist
                }),
                r.linked = [{
                    doc: this,
                    isParent: !0,
                    sharedHist: e.sharedHist
                }],
                Vi(r, ji(this)),
                r
            },
            unlinkDoc: function(e) {
                var t = this;
                if (e instanceof qo && (e = e.doc),
                this.linked)
                    for (var n = 0; n < this.linked.length; ++n)
                        if (t.linked[n].doc == e) {
                            t.linked.splice(n, 1),
                            e.unlinkDoc(t),
                            Ki(ji(t));
                            break
                        }
                if (e.history == this.history) {
                    var r = [e.id];
                    $r(e, function(e) {
                        return r.push(e.id)
                    }, !0),
                    e.history = new Qr(null),
                    e.history.done = ui(this.history.done, r),
                    e.history.undone = ui(this.history.undone, r)
                }
            },
            iterLinkedDocs: function(e) {
                $r(this, e)
            },
            getMode: function() {
                return this.mode
            },
            getEditor: function() {
                return this.cm
            },
            splitLines: function(e) {
                return this.lineSep ? e.split(this.lineSep) : $s(e)
            },
            lineSeparator: function() {
                return this.lineSep || "\n"
            },
            setDirection: pr(function(e) {
                "rtl" != e && (e = "ltr"),
                e != this.direction && (this.direction = e,
                this.iter(function(e) {
                    return e.order = null
                }),
                this.cm && Zr(this.cm))
            })
        }),
        La.prototype.eachLine = La.prototype.iter;
        for (var Ea = 0, Ta = !1, Ma = {
            3: "Enter",
            8: "Backspace",
            9: "Tab",
            13: "Enter",
            16: "Shift",
            17: "Ctrl",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Esc",
            32: "Space",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "Left",
            38: "Up",
            39: "Right",
            40: "Down",
            44: "PrintScrn",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Mod",
            92: "Mod",
            93: "Mod",
            106: "*",
            107: "=",
            109: "-",
            110: ".",
            111: "/",
            127: "Delete",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            63232: "Up",
            63233: "Down",
            63234: "Left",
            63235: "Right",
            63272: "Delete",
            63273: "Home",
            63275: "End",
            63276: "PageUp",
            63277: "PageDown",
            63302: "Insert"
        }, Ra = 0; Ra < 10; Ra++)
            Ma[Ra + 48] = Ma[Ra + 96] = String(Ra);
        for (var Aa = 65; Aa <= 90; Aa++)
            Ma[Aa] = String.fromCharCode(Aa);
        for (var Fa = 1; Fa <= 12; Fa++)
            Ma[Fa + 111] = Ma[Fa + 63235] = "F" + Fa;
        var Oa = {};
        Oa.basic = {
            Left: "goCharLeft",
            Right: "goCharRight",
            Up: "goLineUp",
            Down: "goLineDown",
            End: "goLineEnd",
            Home: "goLineStartSmart",
            PageUp: "goPageUp",
            PageDown: "goPageDown",
            Delete: "delCharAfter",
            Backspace: "delCharBefore",
            "Shift-Backspace": "delCharBefore",
            Tab: "defaultTab",
            "Shift-Tab": "indentAuto",
            Enter: "newlineAndIndent",
            Insert: "toggleOverwrite",
            Esc: "singleSelection"
        },
        Oa.pcDefault = {
            "Ctrl-A": "selectAll",
            "Ctrl-D": "deleteLine",
            "Ctrl-Z": "undo",
            "Shift-Ctrl-Z": "redo",
            "Ctrl-Y": "redo",
            "Ctrl-Home": "goDocStart",
            "Ctrl-End": "goDocEnd",
            "Ctrl-Up": "goLineUp",
            "Ctrl-Down": "goLineDown",
            "Ctrl-Left": "goGroupLeft",
            "Ctrl-Right": "goGroupRight",
            "Alt-Left": "goLineStart",
            "Alt-Right": "goLineEnd",
            "Ctrl-Backspace": "delGroupBefore",
            "Ctrl-Delete": "delGroupAfter",
            "Ctrl-S": "save",
            "Ctrl-F": "find",
            "Ctrl-G": "findNext",
            "Shift-Ctrl-G": "findPrev",
            "Shift-Ctrl-F": "replace",
            "Shift-Ctrl-R": "replaceAll",
            "Ctrl-[": "indentLess",
            "Ctrl-]": "indentMore",
            "Ctrl-U": "undoSelection",
            "Shift-Ctrl-U": "redoSelection",
            "Alt-U": "redoSelection",
            fallthrough: "basic"
        },
        Oa.emacsy = {
            "Ctrl-F": "goCharRight",
            "Ctrl-B": "goCharLeft",
            "Ctrl-P": "goLineUp",
            "Ctrl-N": "goLineDown",
            "Alt-F": "goWordRight",
            "Alt-B": "goWordLeft",
            "Ctrl-A": "goLineStart",
            "Ctrl-E": "goLineEnd",
            "Ctrl-V": "goPageDown",
            "Shift-Ctrl-V": "goPageUp",
            "Ctrl-D": "delCharAfter",
            "Ctrl-H": "delCharBefore",
            "Alt-D": "delWordAfter",
            "Alt-Backspace": "delWordBefore",
            "Ctrl-K": "killLine",
            "Ctrl-T": "transposeChars",
            "Ctrl-O": "openLine"
        },
        Oa.macDefault = {
            "Cmd-A": "selectAll",
            "Cmd-D": "deleteLine",
            "Cmd-Z": "undo",
            "Shift-Cmd-Z": "redo",
            "Cmd-Y": "redo",
            "Cmd-Home": "goDocStart",
            "Cmd-Up": "goDocStart",
            "Cmd-End": "goDocEnd",
            "Cmd-Down": "goDocEnd",
            "Alt-Left": "goGroupLeft",
            "Alt-Right": "goGroupRight",
            "Cmd-Left": "goLineLeft",
            "Cmd-Right": "goLineRight",
            "Alt-Backspace": "delGroupBefore",
            "Ctrl-Alt-Backspace": "delGroupAfter",
            "Alt-Delete": "delGroupAfter",
            "Cmd-S": "save",
            "Cmd-F": "find",
            "Cmd-G": "findNext",
            "Shift-Cmd-G": "findPrev",
            "Cmd-Alt-F": "replace",
            "Shift-Cmd-Alt-F": "replaceAll",
            "Cmd-[": "indentLess",
            "Cmd-]": "indentMore",
            "Cmd-Backspace": "delWrappedLineLeft",
            "Cmd-Delete": "delWrappedLineRight",
            "Cmd-U": "undoSelection",
            "Shift-Cmd-U": "redoSelection",
            "Ctrl-Up": "goDocStart",
            "Ctrl-Down": "goDocEnd",
            fallthrough: ["basic", "emacsy"]
        },
        Oa.default = xs ? Oa.macDefault : Oa.pcDefault;
        var Na = {
            selectAll: Li,
            singleSelection: function(e) {
                return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Is)
            },
            killLine: function(e) {
                return co(e, function(t) {
                    if (t.empty()) {
                        var n = E(e.doc, t.head.line).text.length;
                        return t.head.ch == n && t.head.line < e.lastLine() ? {
                            from: t.head,
                            to: I(t.head.line + 1, 0)
                        } : {
                            from: t.head,
                            to: I(t.head.line, n)
                        }
                    }
                    return {
                        from: t.from(),
                        to: t.to()
                    }
                })
            },
            deleteLine: function(e) {
                return co(e, function(t) {
                    return {
                        from: I(t.from().line, 0),
                        to: z(e.doc, I(t.to().line + 1, 0))
                    }
                })
            },
            delLineLeft: function(e) {
                return co(e, function(e) {
                    return {
                        from: I(e.from().line, 0),
                        to: e.from()
                    }
                })
            },
            delWrappedLineLeft: function(e) {
                return co(e, function(t) {
                    var n = e.charCoords(t.head, "div").top + 5;
                    return {
                        from: e.coordsChar({
                            left: 0,
                            top: n
                        }, "div"),
                        to: t.from()
                    }
                })
            },
            delWrappedLineRight: function(e) {
                return co(e, function(t) {
                    var n = e.charCoords(t.head, "div").top + 5
                      , r = e.coordsChar({
                        left: e.display.lineDiv.offsetWidth + 100,
                        top: n
                    }, "div");
                    return {
                        from: t.from(),
                        to: r
                    }
                })
            },
            undo: function(e) {
                return e.undo()
            },
            redo: function(e) {
                return e.redo()
            },
            undoSelection: function(e) {
                return e.undoSelection()
            },
            redoSelection: function(e) {
                return e.redoSelection()
            },
            goDocStart: function(e) {
                return e.extendSelection(I(e.firstLine(), 0))
            },
            goDocEnd: function(e) {
                return e.extendSelection(I(e.lastLine()))
            },
            goLineStart: function(e) {
                return e.extendSelectionsBy(function(t) {
                    return uo(e, t.head.line)
                }, {
                    origin: "+move",
                    bias: 1
                })
            },
            goLineStartSmart: function(e) {
                return e.extendSelectionsBy(function(t) {
                    return fo(e, t.head)
                }, {
                    origin: "+move",
                    bias: 1
                })
            },
            goLineEnd: function(e) {
                return e.extendSelectionsBy(function(t) {
                    return ho(e, t.head.line)
                }, {
                    origin: "+move",
                    bias: -1
                })
            },
            goLineRight: function(e) {
                return e.extendSelectionsBy(function(t) {
                    var n = e.cursorCoords(t.head, "div").top + 5;
                    return e.coordsChar({
                        left: e.display.lineDiv.offsetWidth + 100,
                        top: n
                    }, "div")
                }, Ds)
            },
            goLineLeft: function(e) {
                return e.extendSelectionsBy(function(t) {
                    var n = e.cursorCoords(t.head, "div").top + 5;
                    return e.coordsChar({
                        left: 0,
                        top: n
                    }, "div")
                }, Ds)
            },
            goLineLeftSmart: function(e) {
                return e.extendSelectionsBy(function(t) {
                    var n = e.cursorCoords(t.head, "div").top + 5
                      , r = e.coordsChar({
                        left: 0,
                        top: n
                    }, "div");
                    return r.ch < e.getLine(r.line).search(/\S/) ? fo(e, t.head) : r
                }, Ds)
            },
            goLineUp: function(e) {
                return e.moveV(-1, "line")
            },
            goLineDown: function(e) {
                return e.moveV(1, "line")
            },
            goPageUp: function(e) {
                return e.moveV(-1, "page")
            },
            goPageDown: function(e) {
                return e.moveV(1, "page")
            },
            goCharLeft: function(e) {
                return e.moveH(-1, "char")
            },
            goCharRight: function(e) {
                return e.moveH(1, "char")
            },
            goColumnLeft: function(e) {
                return e.moveH(-1, "column")
            },
            goColumnRight: function(e) {
                return e.moveH(1, "column")
            },
            goWordLeft: function(e) {
                return e.moveH(-1, "word")
            },
            goGroupRight: function(e) {
                return e.moveH(1, "group")
            },
            goGroupLeft: function(e) {
                return e.moveH(-1, "group")
            },
            goWordRight: function(e) {
                return e.moveH(1, "word")
            },
            delCharBefore: function(e) {
                return e.deleteH(-1, "char")
            },
            delCharAfter: function(e) {
                return e.deleteH(1, "char")
            },
            delWordBefore: function(e) {
                return e.deleteH(-1, "word")
            },
            delWordAfter: function(e) {
                return e.deleteH(1, "word")
            },
            delGroupBefore: function(e) {
                return e.deleteH(-1, "group")
            },
            delGroupAfter: function(e) {
                return e.deleteH(1, "group")
            },
            indentAuto: function(e) {
                return e.indentSelection("smart")
            },
            indentMore: function(e) {
                return e.indentSelection("add")
            },
            indentLess: function(e) {
                return e.indentSelection("subtract")
            },
            insertTab: function(e) {
                return e.replaceSelection("\t")
            },
            insertSoftTab: function(e) {
                for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                    var o = n[i].from()
                      , s = h(e.getLine(o.line), o.ch, r);
                    t.push(p(r - s % r))
                }
                e.replaceSelections(t)
            },
            defaultTab: function(e) {
                e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
            },
            transposeChars: function(e) {
                return hr(e, function() {
                    for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                        if (t[r].empty()) {
                            var i = t[r].head
                              , o = E(e.doc, i.line).text;
                            if (o)
                                if (i.ch == o.length && (i = new I(i.line,i.ch - 1)),
                                i.ch > 0)
                                    i = new I(i.line,i.ch + 1),
                                    e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), I(i.line, i.ch - 2), i, "+transpose");
                                else if (i.line > e.doc.first) {
                                    var s = E(e.doc, i.line - 1).text;
                                    s && (i = new I(i.line,1),
                                    e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + s.charAt(s.length - 1), I(i.line - 1, s.length - 1), i, "+transpose"))
                                }
                            n.push(new wa(i,i))
                        }
                    e.setSelections(n)
                })
            },
            newlineAndIndent: function(e) {
                return hr(e, function() {
                    for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                        e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                    t = e.listSelections();
                    for (var r = 0; r < t.length; r++)
                        e.indentLine(t[r].from().line, null, !0);
                    jn(e)
                })
            },
            openLine: function(e) {
                return e.replaceSelection("\n", "start")
            },
            toggleOverwrite: function(e) {
                return e.toggleOverwrite()
            }
        }
          , Ia = new Rs
          , Pa = null
          , Da = function(e, t, n) {
            this.time = e,
            this.pos = t,
            this.button = n
        };
        Da.prototype.compare = function(e, t, n) {
            return this.time + 400 > e && 0 == P(t, this.pos) && n == this.button
        }
        ;
        var Ha, qa, Wa = {
            toString: function() {
                return "CodeMirror.Init"
            }
        }, Ba = {}, za = {};
        qo.defaults = Ba,
        qo.optionHandlers = za;
        var Ua = [];
        qo.defineInitHook = function(e) {
            return Ua.push(e)
        }
        ;
        var Ga = null
          , ja = function(e) {
            this.cm = e,
            this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
            this.polling = new Rs,
            this.composing = null,
            this.gracePeriod = !1,
            this.readDOMTimeout = null
        };
        ja.prototype.init = function(e) {
            function t(e) {
                if (!Ae(i, e)) {
                    if (i.somethingSelected())
                        zo({
                            lineWise: !1,
                            text: i.getSelections()
                        }),
                        "cut" == e.type && i.replaceSelection("", null, "cut");
                    else {
                        if (!i.options.lineWiseCopyCut)
                            return;
                        var t = Vo(i);
                        zo({
                            lineWise: !0,
                            text: t.text
                        }),
                        "cut" == e.type && i.operation(function() {
                            i.setSelections(t.ranges, 0, Is),
                            i.replaceSelection("", null, "cut")
                        })
                    }
                    if (e.clipboardData) {
                        e.clipboardData.clearData();
                        var n = Ga.text.join("\n");
                        if (e.clipboardData.setData("Text", n),
                        e.clipboardData.getData("Text") == n)
                            return void e.preventDefault()
                    }
                    var s = $o()
                      , a = s.firstChild;
                    i.display.lineSpace.insertBefore(s, i.display.lineSpace.firstChild),
                    a.value = Ga.text.join("\n");
                    var l = document.activeElement;
                    Ms(a),
                    setTimeout(function() {
                        i.display.lineSpace.removeChild(s),
                        l.focus(),
                        l == o && r.showPrimarySelection()
                    }, 50)
                }
            }
            var n = this
              , r = this
              , i = r.cm
              , o = r.div = e.lineDiv;
            Ko(o, i.options.spellcheck),
            Vs(o, "paste", function(e) {
                Ae(i, e) || Go(e, i) || us <= 11 && setTimeout(dr(i, function() {
                    return n.updateFromDOM()
                }), 20)
            }),
            Vs(o, "compositionstart", function(e) {
                n.composing = {
                    data: e.data,
                    done: !1
                }
            }),
            Vs(o, "compositionupdate", function(e) {
                n.composing || (n.composing = {
                    data: e.data,
                    done: !1
                })
            }),
            Vs(o, "compositionend", function(e) {
                n.composing && (e.data != n.composing.data && n.readFromDOMSoon(),
                n.composing.done = !0)
            }),
            Vs(o, "touchstart", function() {
                return r.forceCompositionEnd()
            }),
            Vs(o, "input", function() {
                n.composing || n.readFromDOMSoon()
            }),
            Vs(o, "copy", t),
            Vs(o, "cut", t)
        }
        ,
        ja.prototype.prepareSelection = function() {
            var e = En(this.cm, !1);
            return e.focus = this.cm.state.focused,
            e
        }
        ,
        ja.prototype.showSelection = function(e, t) {
            e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(),
            this.showMultipleSelections(e))
        }
        ,
        ja.prototype.showPrimarySelection = function() {
            var e = window.getSelection()
              , t = this.cm
              , n = t.doc.sel.primary()
              , r = n.from()
              , i = n.to();
            if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom)
                e.removeAllRanges();
            else {
                var o = ts(t, e.anchorNode, e.anchorOffset)
                  , s = ts(t, e.focusNode, e.focusOffset);
                if (!o || o.bad || !s || s.bad || 0 != P(W(o, s), r) || 0 != P(q(o, s), i)) {
                    var a = t.display.view
                      , l = r.line >= t.display.viewFrom && Zo(t, r) || {
                        node: a[0].measure.map[2],
                        offset: 0
                    }
                      , c = i.line < t.display.viewTo && Zo(t, i);
                    if (!c) {
                        var u = a[a.length - 1].measure
                          , h = u.maps ? u.maps[u.maps.length - 1] : u.map;
                        c = {
                            node: h[h.length - 1],
                            offset: h[h.length - 2] - h[h.length - 3]
                        }
                    }
                    if (l && c) {
                        var d, f = e.rangeCount && e.getRangeAt(0);
                        try {
                            d = Ss(l.node, l.offset, c.offset, c.node)
                        } catch (e) {}
                        d && (!os && t.state.focused ? (e.collapse(l.node, l.offset),
                        d.collapsed || (e.removeAllRanges(),
                        e.addRange(d))) : (e.removeAllRanges(),
                        e.addRange(d)),
                        f && null == e.anchorNode ? e.addRange(f) : os && this.startGracePeriod()),
                        this.rememberSelection()
                    } else
                        e.removeAllRanges()
                }
            }
        }
        ,
        ja.prototype.startGracePeriod = function() {
            var e = this;
            clearTimeout(this.gracePeriod),
            this.gracePeriod = setTimeout(function() {
                e.gracePeriod = !1,
                e.selectionChanged() && e.cm.operation(function() {
                    return e.cm.curOp.selectionChanged = !0
                })
            }, 20)
        }
        ,
        ja.prototype.showMultipleSelections = function(e) {
            n(this.cm.display.cursorDiv, e.cursors),
            n(this.cm.display.selectionDiv, e.selection)
        }
        ,
        ja.prototype.rememberSelection = function() {
            var e = window.getSelection();
            this.lastAnchorNode = e.anchorNode,
            this.lastAnchorOffset = e.anchorOffset,
            this.lastFocusNode = e.focusNode,
            this.lastFocusOffset = e.focusOffset
        }
        ,
        ja.prototype.selectionInEditor = function() {
            var e = window.getSelection();
            if (!e.rangeCount)
                return !1;
            var t = e.getRangeAt(0).commonAncestorContainer;
            return o(this.div, t)
        }
        ,
        ja.prototype.focus = function() {
            "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0),
            this.div.focus())
        }
        ,
        ja.prototype.blur = function() {
            this.div.blur()
        }
        ,
        ja.prototype.getField = function() {
            return this.div
        }
        ,
        ja.prototype.supportsTouch = function() {
            return !0
        }
        ,
        ja.prototype.receivedFocus = function() {
            function e() {
                t.cm.state.focused && (t.pollSelection(),
                t.polling.set(t.cm.options.pollInterval, e))
            }
            var t = this;
            this.selectionInEditor() ? this.pollSelection() : hr(this.cm, function() {
                return t.cm.curOp.selectionChanged = !0
            }),
            this.polling.set(this.cm.options.pollInterval, e)
        }
        ,
        ja.prototype.selectionChanged = function() {
            var e = window.getSelection();
            return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
        }
        ,
        ja.prototype.pollSelection = function() {
            if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                var e = window.getSelection()
                  , t = this.cm;
                if (bs && fs && this.cm.options.gutters.length && Qo(e.anchorNode))
                    return this.cm.triggerOnKeyDown({
                        type: "keydown",
                        keyCode: 8,
                        preventDefault: Math.abs
                    }),
                    this.blur(),
                    void this.focus();
                if (!this.composing) {
                    this.rememberSelection();
                    var n = ts(t, e.anchorNode, e.anchorOffset)
                      , r = ts(t, e.focusNode, e.focusOffset);
                    n && r && hr(t, function() {
                        yi(t.doc, Hr(n, r), Is),
                        (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                    })
                }
            }
        }
        ,
        ja.prototype.pollContent = function() {
            null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout),
            this.readDOMTimeout = null);
            var e = this.cm
              , t = e.display
              , n = e.doc.sel.primary()
              , r = n.from()
              , i = n.to();
            if (0 == r.ch && r.line > e.firstLine() && (r = I(r.line - 1, E(e.doc, r.line - 1).length)),
            i.ch == E(e.doc, i.line).text.length && i.line < e.lastLine() && (i = I(i.line + 1, 0)),
            r.line < t.viewFrom || i.line > t.viewTo - 1)
                return !1;
            var o, s, a;
            r.line == t.viewFrom || 0 == (o = Sn(e, r.line)) ? (s = A(t.view[0].line),
            a = t.view[0].node) : (s = A(t.view[o].line),
            a = t.view[o - 1].node.nextSibling);
            var l, c, u = Sn(e, i.line);
            if (u == t.view.length - 1 ? (l = t.viewTo - 1,
            c = t.lineDiv.lastChild) : (l = A(t.view[u + 1].line) - 1,
            c = t.view[u + 1].node.previousSibling),
            !a)
                return !1;
            for (var h = e.doc.splitLines(es(e, a, c, s, l)), d = T(e.doc, I(s, 0), I(l, E(e.doc, l).text.length)); h.length > 1 && d.length > 1; )
                if (g(h) == g(d))
                    h.pop(),
                    d.pop(),
                    l--;
                else {
                    if (h[0] != d[0])
                        break;
                    h.shift(),
                    d.shift(),
                    s++
                }
            for (var f = 0, p = 0, v = h[0], m = d[0], y = Math.min(v.length, m.length); f < y && v.charCodeAt(f) == m.charCodeAt(f); )
                ++f;
            for (var b = g(h), w = g(d), x = Math.min(b.length - (1 == h.length ? f : 0), w.length - (1 == d.length ? f : 0)); p < x && b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1); )
                ++p;
            if (1 == h.length && 1 == d.length && s == r.line)
                for (; f && f > r.ch && b.charCodeAt(b.length - p - 1) == w.charCodeAt(w.length - p - 1); )
                    f--,
                    p++;
            h[h.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, ""),
            h[0] = h[0].slice(f).replace(/\u200b+$/, "");
            var k = I(s, f)
              , C = I(l, d.length ? g(d).length - p : 0);
            return h.length > 1 || h[0] || P(k, C) ? (Ni(e.doc, h, k, C, "+input"),
            !0) : void 0
        }
        ,
        ja.prototype.ensurePolled = function() {
            this.forceCompositionEnd()
        }
        ,
        ja.prototype.reset = function() {
            this.forceCompositionEnd()
        }
        ,
        ja.prototype.forceCompositionEnd = function() {
            this.composing && (clearTimeout(this.readDOMTimeout),
            this.composing = null,
            this.updateFromDOM(),
            this.div.blur(),
            this.div.focus())
        }
        ,
        ja.prototype.readFromDOMSoon = function() {
            var e = this;
            null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
                if (e.readDOMTimeout = null,
                e.composing) {
                    if (!e.composing.done)
                        return;
                    e.composing = null
                }
                e.updateFromDOM()
            }, 80))
        }
        ,
        ja.prototype.updateFromDOM = function() {
            var e = this;
            !this.cm.isReadOnly() && this.pollContent() || hr(this.cm, function() {
                return gr(e.cm)
            })
        }
        ,
        ja.prototype.setUneditable = function(e) {
            e.contentEditable = "false"
        }
        ,
        ja.prototype.onKeyPress = function(e) {
            0 != e.charCode && (e.preventDefault(),
            this.cm.isReadOnly() || dr(this.cm, Uo)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
        }
        ,
        ja.prototype.readOnlyChanged = function(e) {
            this.div.contentEditable = String("nocursor" != e)
        }
        ,
        ja.prototype.onContextMenu = function() {}
        ,
        ja.prototype.resetPosition = function() {}
        ,
        ja.prototype.needsContentAttribute = !0;
        var Va = function(e) {
            this.cm = e,
            this.prevInput = "",
            this.pollingFast = !1,
            this.polling = new Rs,
            this.hasSelection = !1,
            this.composing = null
        };
        Va.prototype.init = function(e) {
            function t(e) {
                if (!Ae(i, e)) {
                    if (i.somethingSelected())
                        zo({
                            lineWise: !1,
                            text: i.getSelections()
                        });
                    else {
                        if (!i.options.lineWiseCopyCut)
                            return;
                        var t = Vo(i);
                        zo({
                            lineWise: !0,
                            text: t.text
                        }),
                        "cut" == e.type ? i.setSelections(t.ranges, null, Is) : (r.prevInput = "",
                        s.value = t.text.join("\n"),
                        Ms(s))
                    }
                    "cut" == e.type && (i.state.cutIncoming = !0)
                }
            }
            var n = this
              , r = this
              , i = this.cm
              , o = this.wrapper = $o()
              , s = this.textarea = o.firstChild;
            e.wrapper.insertBefore(o, e.wrapper.firstChild),
            ys && (s.style.width = "0px"),
            Vs(s, "input", function() {
                cs && us >= 9 && n.hasSelection && (n.hasSelection = null),
                r.poll()
            }),
            Vs(s, "paste", function(e) {
                Ae(i, e) || Go(e, i) || (i.state.pasteIncoming = !0,
                r.fastPoll())
            }),
            Vs(s, "cut", t),
            Vs(s, "copy", t),
            Vs(e.scroller, "paste", function(t) {
                Ht(e, t) || Ae(i, t) || (i.state.pasteIncoming = !0,
                r.focus())
            }),
            Vs(e.lineSpace, "selectstart", function(t) {
                Ht(e, t) || Ie(t)
            }),
            Vs(s, "compositionstart", function() {
                var e = i.getCursor("from");
                r.composing && r.composing.range.clear(),
                r.composing = {
                    start: e,
                    range: i.markText(e, i.getCursor("to"), {
                        className: "CodeMirror-composing"
                    })
                }
            }),
            Vs(s, "compositionend", function() {
                r.composing && (r.poll(),
                r.composing.range.clear(),
                r.composing = null)
            })
        }
        ,
        Va.prototype.prepareSelection = function() {
            var e = this.cm
              , t = e.display
              , n = e.doc
              , r = En(e);
            if (e.options.moveInputWithCursor) {
                var i = hn(e, n.sel.primary().head, "div")
                  , o = t.wrapper.getBoundingClientRect()
                  , s = t.lineDiv.getBoundingClientRect();
                r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + s.top - o.top)),
                r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + s.left - o.left))
            }
            return r
        }
        ,
        Va.prototype.showSelection = function(e) {
            var t = this.cm.display;
            n(t.cursorDiv, e.cursors),
            n(t.selectionDiv, e.selection),
            null != e.teTop && (this.wrapper.style.top = e.teTop + "px",
            this.wrapper.style.left = e.teLeft + "px")
        }
        ,
        Va.prototype.reset = function(e) {
            if (!this.contextMenuPending && !this.composing) {
                var t = this.cm;
                if (t.somethingSelected()) {
                    this.prevInput = "";
                    var n = t.getSelection();
                    this.textarea.value = n,
                    t.state.focused && Ms(this.textarea),
                    cs && us >= 9 && (this.hasSelection = n)
                } else
                    e || (this.prevInput = this.textarea.value = "",
                    cs && us >= 9 && (this.hasSelection = null))
            }
        }
        ,
        Va.prototype.getField = function() {
            return this.textarea
        }
        ,
        Va.prototype.supportsTouch = function() {
            return !1
        }
        ,
        Va.prototype.focus = function() {
            if ("nocursor" != this.cm.options.readOnly && (!ws || s() != this.textarea))
                try {
                    this.textarea.focus()
                } catch (e) {}
        }
        ,
        Va.prototype.blur = function() {
            this.textarea.blur()
        }
        ,
        Va.prototype.resetPosition = function() {
            this.wrapper.style.top = this.wrapper.style.left = 0
        }
        ,
        Va.prototype.receivedFocus = function() {
            this.slowPoll()
        }
        ,
        Va.prototype.slowPoll = function() {
            var e = this;
            this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
                e.poll(),
                e.cm.state.focused && e.slowPoll()
            })
        }
        ,
        Va.prototype.fastPoll = function() {
            function e() {
                n.poll() || t ? (n.pollingFast = !1,
                n.slowPoll()) : (t = !0,
                n.polling.set(60, e))
            }
            var t = !1
              , n = this;
            n.pollingFast = !0,
            n.polling.set(20, e)
        }
        ,
        Va.prototype.poll = function() {
            var e = this
              , t = this.cm
              , n = this.textarea
              , r = this.prevInput;
            if (this.contextMenuPending || !t.state.focused || Xs(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
                return !1;
            var i = n.value;
            if (i == r && !t.somethingSelected())
                return !1;
            if (cs && us >= 9 && this.hasSelection === i || xs && /[\uf700-\uf7ff]/.test(i))
                return t.display.input.reset(),
                !1;
            if (t.doc.sel == t.display.selForContextMenu) {
                var o = i.charCodeAt(0);
                if (8203 != o || r || (r = "​"),
                8666 == o)
                    return this.reset(),
                    this.cm.execCommand("undo")
            }
            for (var s = 0, a = Math.min(r.length, i.length); s < a && r.charCodeAt(s) == i.charCodeAt(s); )
                ++s;
            return hr(t, function() {
                Uo(t, i.slice(s), r.length - s, null, e.composing ? "*compose" : null),
                i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i,
                e.composing && (e.composing.range.clear(),
                e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                    className: "CodeMirror-composing"
                }))
            }),
            !0
        }
        ,
        Va.prototype.ensurePolled = function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1)
        }
        ,
        Va.prototype.onKeyPress = function() {
            cs && us >= 9 && (this.hasSelection = null),
            this.fastPoll()
        }
        ,
        Va.prototype.onContextMenu = function(e) {
            function t() {
                if (null != s.selectionStart) {
                    var e = i.somethingSelected()
                      , t = "​" + (e ? s.value : "");
                    s.value = "⇚",
                    s.value = t,
                    r.prevInput = e ? "" : "​",
                    s.selectionStart = 1,
                    s.selectionEnd = t.length,
                    o.selForContextMenu = i.doc.sel
                }
            }
            function n() {
                if (r.contextMenuPending = !1,
                r.wrapper.style.cssText = u,
                s.style.cssText = c,
                cs && us < 9 && o.scrollbars.setScrollTop(o.scroller.scrollTop = l),
                null != s.selectionStart) {
                    (!cs || cs && us < 9) && t();
                    var e = 0
                      , n = function() {
                        o.selForContextMenu == i.doc.sel && 0 == s.selectionStart && s.selectionEnd > 0 && "​" == r.prevInput ? dr(i, Li)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : (o.selForContextMenu = null,
                        o.input.reset())
                    };
                    o.detectingSelectAll = setTimeout(n, 200)
                }
            }
            var r = this
              , i = r.cm
              , o = i.display
              , s = r.textarea
              , a = _n(i, e)
              , l = o.scroller.scrollTop;
            if (a && !ps) {
                i.options.resetSelectionOnContextMenu && -1 == i.doc.sel.contains(a) && dr(i, yi)(i.doc, Hr(a), Is);
                var c = s.style.cssText
                  , u = r.wrapper.style.cssText;
                r.wrapper.style.cssText = "position: absolute";
                var h = r.wrapper.getBoundingClientRect();
                s.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (cs ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
                var d;
                if (hs && (d = window.scrollY),
                o.input.focus(),
                hs && window.scrollTo(null, d),
                o.input.reset(),
                i.somethingSelected() || (s.value = r.prevInput = " "),
                r.contextMenuPending = !0,
                o.selForContextMenu = i.doc.sel,
                clearTimeout(o.detectingSelectAll),
                cs && us >= 9 && t(),
                Es) {
                    He(e);
                    var f = function() {
                        Me(window, "mouseup", f),
                        setTimeout(n, 20)
                    };
                    Vs(window, "mouseup", f)
                } else
                    setTimeout(n, 50)
            }
        }
        ,
        Va.prototype.readOnlyChanged = function(e) {
            e || this.reset(),
            this.textarea.disabled = "nocursor" == e
        }
        ,
        Va.prototype.setUneditable = function() {}
        ,
        Va.prototype.needsContentAttribute = !1,
        function(e) {
            function t(t, r, i, o) {
                e.defaults[t] = r,
                i && (n[t] = o ? function(e, t, n) {
                    n != Wa && i(e, t, n)
                }
                : i)
            }
            var n = e.optionHandlers;
            e.defineOption = t,
            e.Init = Wa,
            t("value", "", function(e, t) {
                return e.setValue(t)
            }, !0),
            t("mode", null, function(e, t) {
                e.doc.modeOption = t,
                Gr(e)
            }, !0),
            t("indentUnit", 2, Gr, !0),
            t("indentWithTabs", !1),
            t("smartIndent", !0),
            t("tabSize", 4, function(e) {
                jr(e),
                on(e),
                gr(e)
            }, !0),
            t("lineSeparator", null, function(e, t) {
                if (e.doc.lineSep = t,
                t) {
                    var n = []
                      , r = e.doc.first;
                    e.doc.iter(function(e) {
                        for (var i = 0; ; ) {
                            var o = e.text.indexOf(t, i);
                            if (-1 == o)
                                break;
                            i = o + t.length,
                            n.push(I(r, o))
                        }
                        r++
                    });
                    for (var i = n.length - 1; i >= 0; i--)
                        Ni(e.doc, t, n[i], I(n[i].line, n[i].ch + t.length))
                }
            }),
            t("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, n) {
                e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"),"g"),
                n != Wa && e.refresh()
            }),
            t("specialCharPlaceholder", dt, function(e) {
                return e.refresh()
            }, !0),
            t("electricChars", !0),
            t("inputStyle", ws ? "contenteditable" : "textarea", function() {
                throw new Error("inputStyle can not (yet) be changed in a running editor")
            }, !0),
            t("spellcheck", !1, function(e, t) {
                return e.getInputField().spellcheck = t
            }, !0),
            t("rtlMoveVisually", !Cs),
            t("wholeLineUpdateBefore", !0),
            t("theme", "default", function(e) {
                Io(e),
                Po(e)
            }, !0),
            t("keyMap", "default", function(e, t, n) {
                var r = lo(t)
                  , i = n != Wa && lo(n);
                i && i.detach && i.detach(e, r),
                r.attach && r.attach(e, i || null)
            }),
            t("extraKeys", null),
            t("configureMouse", null),
            t("lineWrapping", !1, Ho, !0),
            t("gutters", [], function(e) {
                Or(e.options),
                Po(e)
            }, !0),
            t("fixedGutter", !0, function(e, t) {
                e.display.gutters.style.left = t ? xn(e.display) + "px" : "0",
                e.refresh()
            }, !0),
            t("coverGutterNextToScrollbar", !1, function(e) {
                return er(e)
            }, !0),
            t("scrollbarStyle", "native", function(e) {
                nr(e),
                er(e),
                e.display.scrollbars.setScrollTop(e.doc.scrollTop),
                e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
            }, !0),
            t("lineNumbers", !1, function(e) {
                Or(e.options),
                Po(e)
            }, !0),
            t("firstLineNumber", 1, Po, !0),
            t("lineNumberFormatter", function(e) {
                return e
            }, Po, !0),
            t("showCursorWhenSelecting", !1, Ln, !0),
            t("resetSelectionOnContextMenu", !0),
            t("lineWiseCopyCut", !0),
            t("pasteLinesPerSelection", !0),
            t("readOnly", !1, function(e, t) {
                "nocursor" == t && (Nn(e),
                e.display.input.blur()),
                e.display.input.readOnlyChanged(t)
            }),
            t("disableInput", !1, function(e, t) {
                t || e.display.input.reset()
            }, !0),
            t("dragDrop", !0, Do),
            t("allowDropFileTypes", null),
            t("cursorBlinkRate", 530),
            t("cursorScrollMargin", 0),
            t("cursorHeight", 1, Ln, !0),
            t("singleCursorHeightPerLine", !0, Ln, !0),
            t("workTime", 100),
            t("workDelay", 100),
            t("flattenSpans", !0, jr, !0),
            t("addModeClass", !1, jr, !0),
            t("pollInterval", 100),
            t("undoDepth", 200, function(e, t) {
                return e.doc.history.undoDepth = t
            }),
            t("historyEventDelay", 1250),
            t("viewportMargin", 10, function(e) {
                return e.refresh()
            }, !0),
            t("maxHighlightLength", 1e4, jr, !0),
            t("moveInputWithCursor", !0, function(e, t) {
                t || e.display.input.resetPosition()
            }),
            t("tabindex", null, function(e, t) {
                return e.display.input.getField().tabIndex = t || ""
            }),
            t("autofocus", null),
            t("direction", "ltr", function(e, t) {
                return e.doc.setDirection(t)
            }, !0)
        }(qo),
        function(e) {
            var t = e.optionHandlers
              , n = e.helpers = {};
            e.prototype = {
                constructor: e,
                focus: function() {
                    window.focus(),
                    this.display.input.focus()
                },
                setOption: function(e, n) {
                    var r = this.options
                      , i = r[e];
                    r[e] == n && "mode" != e || (r[e] = n,
                    t.hasOwnProperty(e) && dr(this, t[e])(this, n, i),
                    Re(this, "optionChange", this, e))
                },
                getOption: function(e) {
                    return this.options[e]
                },
                getDoc: function() {
                    return this.doc
                },
                addKeyMap: function(e, t) {
                    this.state.keyMaps[t ? "push" : "unshift"](lo(e))
                },
                removeKeyMap: function(e) {
                    for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                        if (t[n] == e || t[n].name == e)
                            return t.splice(n, 1),
                            !0
                },
                addOverlay: fr(function(t, n) {
                    var r = t.token ? t : e.getMode(this.options, t);
                    if (r.startState)
                        throw new Error("Overlays may not be stateful.");
                    m(this.state.overlays, {
                        mode: r,
                        modeSpec: t,
                        opaque: n && n.opaque,
                        priority: n && n.priority || 0
                    }, function(e) {
                        return e.priority
                    }),
                    this.state.modeGen++,
                    gr(this)
                }),
                removeOverlay: fr(function(e) {
                    for (var t = this, n = this.state.overlays, r = 0; r < n.length; ++r) {
                        var i = n[r].modeSpec;
                        if (i == e || "string" == typeof e && i.name == e)
                            return n.splice(r, 1),
                            t.state.modeGen++,
                            void gr(t)
                    }
                }),
                indentLine: fr(function(e, t, n) {
                    "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"),
                    O(this.doc, e) && Bo(this, e, t, n)
                }),
                indentSelection: fr(function(e) {
                    for (var t = this, n = this.doc.sel.ranges, r = -1, i = 0; i < n.length; i++) {
                        var o = n[i];
                        if (o.empty())
                            o.head.line > r && (Bo(t, o.head.line, e, !0),
                            r = o.head.line,
                            i == t.doc.sel.primIndex && jn(t));
                        else {
                            var s = o.from()
                              , a = o.to()
                              , l = Math.max(r, s.line);
                            r = Math.min(t.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                            for (var c = l; c < r; ++c)
                                Bo(t, c, e);
                            var u = t.doc.sel.ranges;
                            0 == s.ch && n.length == u.length && u[i].from().ch > 0 && pi(t.doc, i, new wa(s,u[i].to()), Is)
                        }
                    }
                }),
                getTokenAt: function(e, t) {
                    return rt(this, e, t)
                },
                getLineTokens: function(e, t) {
                    return rt(this, I(e), t, !0)
                },
                getTokenTypeAt: function(e) {
                    e = z(this.doc, e);
                    var t, n = Qe(this, E(this.doc, e.line)), r = 0, i = (n.length - 1) / 2, o = e.ch;
                    if (0 == o)
                        t = n[2];
                    else
                        for (; ; ) {
                            var s = r + i >> 1;
                            if ((s ? n[2 * s - 1] : 0) >= o)
                                i = s;
                            else {
                                if (!(n[2 * s + 1] < o)) {
                                    t = n[2 * s + 2];
                                    break
                                }
                                r = s + 1
                            }
                        }
                    var a = t ? t.indexOf("overlay ") : -1;
                    return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1)
                },
                getModeAt: function(t) {
                    var n = this.doc.mode;
                    return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
                },
                getHelper: function(e, t) {
                    return this.getHelpers(e, t)[0]
                },
                getHelpers: function(e, t) {
                    var r = this
                      , i = [];
                    if (!n.hasOwnProperty(t))
                        return i;
                    var o = n[t]
                      , s = this.getModeAt(e);
                    if ("string" == typeof s[t])
                        o[s[t]] && i.push(o[s[t]]);
                    else if (s[t])
                        for (var a = 0; a < s[t].length; a++) {
                            var l = o[s[t][a]];
                            l && i.push(l)
                        }
                    else
                        s.helperType && o[s.helperType] ? i.push(o[s.helperType]) : o[s.name] && i.push(o[s.name]);
                    for (var c = 0; c < o._global.length; c++) {
                        var u = o._global[c];
                        u.pred(s, r) && -1 == d(i, u.val) && i.push(u.val)
                    }
                    return i
                },
                getStateAfter: function(e, t) {
                    var n = this.doc;
                    return e = B(n, null == e ? n.first + n.size - 1 : e),
                    Je(this, e + 1, t).state
                },
                cursorCoords: function(e, t) {
                    var n, r = this.doc.sel.primary();
                    return n = null == e ? r.head : "object" == typeof e ? z(this.doc, e) : e ? r.from() : r.to(),
                    hn(this, n, t || "page")
                },
                charCoords: function(e, t) {
                    return un(this, z(this.doc, e), t || "page")
                },
                coordsChar: function(e, t) {
                    return e = cn(this, e, t || "page"),
                    pn(this, e.left, e.top)
                },
                lineAtHeight: function(e, t) {
                    return e = cn(this, {
                        top: e,
                        left: 0
                    }, t || "page").top,
                    F(this.doc, e + this.display.viewOffset)
                },
                heightAtLine: function(e, t, n) {
                    var r, i = !1;
                    if ("number" == typeof e) {
                        var o = this.doc.first + this.doc.size - 1;
                        e < this.doc.first ? e = this.doc.first : e > o && (e = o,
                        i = !0),
                        r = E(this.doc, e)
                    } else
                        r = e;
                    return ln(this, r, {
                        top: 0,
                        left: 0
                    }, t || "page", n || i).top + (i ? this.doc.height - ye(r) : 0)
                },
                defaultTextHeight: function() {
                    return yn(this.display)
                },
                defaultCharWidth: function() {
                    return bn(this.display)
                },
                getViewport: function() {
                    return {
                        from: this.display.viewFrom,
                        to: this.display.viewTo
                    }
                },
                addWidget: function(e, t, n, r, i) {
                    var o = this.display
                      , s = (e = hn(this, z(this.doc, e))).bottom
                      , a = e.left;
                    if (t.style.position = "absolute",
                    t.setAttribute("cm-ignore-events", "true"),
                    this.display.input.setUneditable(t),
                    o.sizer.appendChild(t),
                    "over" == r)
                        s = e.top;
                    else if ("above" == r || "near" == r) {
                        var l = Math.max(o.wrapper.clientHeight, this.doc.height)
                          , c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                        ("above" == r || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? s = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (s = e.bottom),
                        a + t.offsetWidth > c && (a = c - t.offsetWidth)
                    }
                    t.style.top = s + "px",
                    t.style.left = t.style.right = "",
                    "right" == i ? (a = o.sizer.clientWidth - t.offsetWidth,
                    t.style.right = "0px") : ("left" == i ? a = 0 : "middle" == i && (a = (o.sizer.clientWidth - t.offsetWidth) / 2),
                    t.style.left = a + "px"),
                    n && zn(this, {
                        left: a,
                        top: s,
                        right: a + t.offsetWidth,
                        bottom: s + t.offsetHeight
                    })
                },
                triggerOnKeyDown: fr(bo),
                triggerOnKeyPress: fr(ko),
                triggerOnKeyUp: xo,
                triggerOnMouseDown: fr(_o),
                execCommand: function(e) {
                    if (Na.hasOwnProperty(e))
                        return Na[e].call(null, this)
                },
                triggerElectric: fr(function(e) {
                    jo(this, e)
                }),
                findPosH: function(e, t, n, r) {
                    var i = this
                      , o = 1;
                    t < 0 && (o = -1,
                    t = -t);
                    for (var s = z(this.doc, e), a = 0; a < t && !(s = Xo(i.doc, s, o, n, r)).hitSide; ++a)
                        ;
                    return s
                },
                moveH: fr(function(e, t) {
                    var n = this;
                    this.extendSelectionsBy(function(r) {
                        return n.display.shift || n.doc.extend || r.empty() ? Xo(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
                    }, Ds)
                }),
                deleteH: fr(function(e, t) {
                    var n = this.doc.sel
                      , r = this.doc;
                    n.somethingSelected() ? r.replaceSelection("", null, "+delete") : co(this, function(n) {
                        var i = Xo(r, n.head, e, t, !1);
                        return e < 0 ? {
                            from: i,
                            to: n.head
                        } : {
                            from: n.head,
                            to: i
                        }
                    })
                }),
                findPosV: function(e, t, n, r) {
                    var i = this
                      , o = 1
                      , s = r;
                    t < 0 && (o = -1,
                    t = -t);
                    for (var a = z(this.doc, e), l = 0; l < t; ++l) {
                        var c = hn(i, a, "div");
                        if (null == s ? s = c.left : c.left = s,
                        (a = Yo(i, c, o, n)).hitSide)
                            break
                    }
                    return a
                },
                moveV: fr(function(e, t) {
                    var n = this
                      , r = this.doc
                      , i = []
                      , o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                    if (r.extendSelectionsBy(function(s) {
                        if (o)
                            return e < 0 ? s.from() : s.to();
                        var a = hn(n, s.head, "div");
                        null != s.goalColumn && (a.left = s.goalColumn),
                        i.push(a.left);
                        var l = Yo(n, a, e, t);
                        return "page" == t && s == r.sel.primary() && Gn(n, un(n, l, "div").top - a.top),
                        l
                    }, Ds),
                    i.length)
                        for (var s = 0; s < r.sel.ranges.length; s++)
                            r.sel.ranges[s].goalColumn = i[s]
                }),
                findWordAt: function(e) {
                    var t = E(this.doc, e.line).text
                      , n = e.ch
                      , r = e.ch;
                    if (t) {
                        var i = this.getHelper(e, "wordChars");
                        "before" != e.sticky && r != t.length || !n ? ++r : --n;
                        for (var o = t.charAt(n), s = x(o, i) ? function(e) {
                            return x(e, i)
                        }
                        : /\s/.test(o) ? function(e) {
                            return /\s/.test(e)
                        }
                        : function(e) {
                            return !/\s/.test(e) && !x(e)
                        }
                        ; n > 0 && s(t.charAt(n - 1)); )
                            --n;
                        for (; r < t.length && s(t.charAt(r)); )
                            ++r
                    }
                    return new wa(I(e.line, n),I(e.line, r))
                },
                toggleOverwrite: function(e) {
                    null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? a(this.display.cursorDiv, "CodeMirror-overwrite") : Ts(this.display.cursorDiv, "CodeMirror-overwrite"),
                    Re(this, "overwriteToggle", this, this.state.overwrite))
                },
                hasFocus: function() {
                    return this.display.input.getField() == s()
                },
                isReadOnly: function() {
                    return !(!this.options.readOnly && !this.doc.cantEdit)
                },
                scrollTo: fr(function(e, t) {
                    Vn(this, e, t)
                }),
                getScrollInfo: function() {
                    var e = this.display.scroller;
                    return {
                        left: e.scrollLeft,
                        top: e.scrollTop,
                        height: e.scrollHeight - zt(this) - this.display.barHeight,
                        width: e.scrollWidth - zt(this) - this.display.barWidth,
                        clientHeight: Gt(this),
                        clientWidth: Ut(this)
                    }
                },
                scrollIntoView: fr(function(e, t) {
                    null == e ? (e = {
                        from: this.doc.sel.primary().head,
                        to: null
                    },
                    null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                        from: I(e, 0),
                        to: null
                    } : null == e.from && (e = {
                        from: e,
                        to: null
                    }),
                    e.to || (e.to = e.from),
                    e.margin = t || 0,
                    null != e.from.line ? Kn(this, e) : Xn(this, e.from, e.to, e.margin)
                }),
                setSize: fr(function(e, t) {
                    var n = this
                      , r = function(e) {
                        return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                    };
                    null != e && (this.display.wrapper.style.width = r(e)),
                    null != t && (this.display.wrapper.style.height = r(t)),
                    this.options.lineWrapping && rn(this);
                    var i = this.display.viewFrom;
                    this.doc.iter(i, this.display.viewTo, function(e) {
                        if (e.widgets)
                            for (var t = 0; t < e.widgets.length; t++)
                                if (e.widgets[t].noHScroll) {
                                    vr(n, i, "widget");
                                    break
                                }
                        ++i
                    }),
                    this.curOp.forceUpdate = !0,
                    Re(this, "refresh", this)
                }),
                operation: function(e) {
                    return hr(this, e)
                },
                startOperation: function() {
                    return rr(this)
                },
                endOperation: function() {
                    return ir(this)
                },
                refresh: fr(function() {
                    var e = this.display.cachedTextHeight;
                    gr(this),
                    this.curOp.forceUpdate = !0,
                    on(this),
                    Vn(this, this.doc.scrollLeft, this.doc.scrollTop),
                    Rr(this),
                    (null == e || Math.abs(e - yn(this.display)) > .5) && Cn(this),
                    Re(this, "refresh", this)
                }),
                swapDoc: fr(function(e) {
                    var t = this.doc;
                    return t.cm = null,
                    Xr(this, e),
                    on(this),
                    this.display.input.reset(),
                    Vn(this, e.scrollLeft, e.scrollTop),
                    this.curOp.forceScroll = !0,
                    Ct(this, "swapDoc", this, t),
                    t
                }),
                getInputField: function() {
                    return this.display.input.getField()
                },
                getWrapperElement: function() {
                    return this.display.wrapper
                },
                getScrollerElement: function() {
                    return this.display.scroller
                },
                getGutterElement: function() {
                    return this.display.gutters
                }
            },
            Ne(e),
            e.registerHelper = function(t, r, i) {
                n.hasOwnProperty(t) || (n[t] = e[t] = {
                    _global: []
                }),
                n[t][r] = i
            }
            ,
            e.registerGlobalHelper = function(t, r, i, o) {
                e.registerHelper(t, r, o),
                n[t]._global.push({
                    pred: i,
                    val: o
                })
            }
        }(qo);
        var Ka = "iter insert remove copy getEditor constructor".split(" ");
        for (var $a in La.prototype)
            La.prototype.hasOwnProperty($a) && d(Ka, $a) < 0 && (qo.prototype[$a] = function(e) {
                return function() {
                    return e.apply(this.doc, arguments)
                }
            }(La.prototype[$a]));
        return Ne(La),
        qo.inputStyles = {
            textarea: Va,
            contenteditable: ja
        },
        qo.defineMode = function(e) {
            qo.defaults.mode || "null" == e || (qo.defaults.mode = e),
            Ge.apply(this, arguments)
        }
        ,
        qo.defineMIME = function(e, t) {
            Js[e] = t
        }
        ,
        qo.defineMode("null", function() {
            return {
                token: function(e) {
                    return e.skipToEnd()
                }
            }
        }),
        qo.defineMIME("text/plain", "null"),
        qo.defineExtension = function(e, t) {
            qo.prototype[e] = t
        }
        ,
        qo.defineDocExtension = function(e, t) {
            La.prototype[e] = t
        }
        ,
        qo.fromTextArea = function(e, t) {
            function n() {
                e.value = l.getValue()
            }
            if (t = t ? u(t) : {},
            t.value = e.value,
            !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
            !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
            null == t.autofocus) {
                var r = s();
                t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
            }
            var i;
            if (e.form && (Vs(e.form, "submit", n),
            !t.leaveSubmitMethodAlone)) {
                var o = e.form;
                i = o.submit;
                try {
                    var a = o.submit = function() {
                        n(),
                        o.submit = i,
                        o.submit(),
                        o.submit = a
                    }
                } catch (e) {}
            }
            t.finishInit = function(t) {
                t.save = n,
                t.getTextArea = function() {
                    return e
                }
                ,
                t.toTextArea = function() {
                    t.toTextArea = isNaN,
                    n(),
                    e.parentNode.removeChild(t.getWrapperElement()),
                    e.style.display = "",
                    e.form && (Me(e.form, "submit", n),
                    "function" == typeof e.form.submit && (e.form.submit = i))
                }
            }
            ,
            e.style.display = "none";
            var l = qo(function(t) {
                return e.parentNode.insertBefore(t, e.nextSibling)
            }, t);
            return l
        }
        ,
        function(e) {
            e.off = Me,
            e.on = Vs,
            e.wheelEventPixels = Ir,
            e.Doc = La,
            e.splitLines = $s,
            e.countColumn = h,
            e.findColumn = f,
            e.isWordChar = w,
            e.Pass = Ns,
            e.signal = Re,
            e.Line = oa,
            e.changeEnd = qr,
            e.scrollbarModel = pa,
            e.Pos = I,
            e.cmpPos = P,
            e.modes = Qs,
            e.mimeModes = Js,
            e.resolveMode = je,
            e.getMode = Ve,
            e.modeExtensions = ea,
            e.extendMode = Ke,
            e.copyState = $e,
            e.startState = Ye,
            e.innerMode = Xe,
            e.commands = Na,
            e.keyMap = Oa,
            e.keyName = ao,
            e.isModifierKey = oo,
            e.lookupKey = io,
            e.normalizeKeyMap = ro,
            e.StringStream = ta,
            e.SharedTextMarker = _a,
            e.TextMarker = Ca,
            e.LineWidget = xa,
            e.e_preventDefault = Ie,
            e.e_stopPropagation = Pe,
            e.e_stop = He,
            e.addClass = a,
            e.contains = o,
            e.rmClass = Ts,
            e.keyNames = Ma
        }(qo),
        qo.version = "5.28.0",
        qo
    }),
    function(e) {
        if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = e();
        else if ("function" == typeof define && define.amd)
            define([], e);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = e()
        }
    }(function() {
        return function e(t, n, r) {
            function i(s, a) {
                if (!n[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!a && l)
                            return l(s, !0);
                        if (o)
                            return o(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND",
                        c
                    }
                    var u = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(u.exports, function(e) {
                        var n = t[s][1][e];
                        return i(n || e)
                    }, u, u.exports, e, t, n, r)
                }
                return n[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)
                i(r[s]);
            return i
        }({
            1: [function(e, t, n) {
                var r = 9;
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var i = Element.prototype;
                    i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
                }
                t.exports = function(e, t) {
                    for (; e && e.nodeType !== r; ) {
                        if ("function" == typeof e.matches && e.matches(t))
                            return e;
                        e = e.parentNode
                    }
                }
            }
            , {}],
            2: [function(e, t, n) {
                function r(e, t, n, r) {
                    return function(n) {
                        n.delegateTarget = i(n.target, t),
                        n.delegateTarget && r.call(e, n)
                    }
                }
                var i = e("./closest");
                t.exports = function(e, t, n, i, o) {
                    var s = r.apply(this, arguments);
                    return e.addEventListener(n, s, o),
                    {
                        destroy: function() {
                            e.removeEventListener(n, s, o)
                        }
                    }
                }
            }
            , {
                "./closest": 1
            }],
            3: [function(e, t, n) {
                n.node = function(e) {
                    return void 0 !== e && (e instanceof HTMLElement || e instanceof SVGElement) && 1 === e.nodeType
                }
                ,
                n.nodeList = function(e) {
                    var t = Object.prototype.toString.call(e);
                    return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length"in e && (0 === e.length || n.node(e[0]))
                }
                ,
                n.string = function(e) {
                    return "string" == typeof e || e instanceof String
                }
                ,
                n.fn = function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            }
            , {}],
            4: [function(e, t, n) {
                function r(e, t, n) {
                    return e.addEventListener(t, n),
                    {
                        destroy: function() {
                            e.removeEventListener(t, n)
                        }
                    }
                }
                function i(e, t, n) {
                    return Array.prototype.forEach.call(e, function(e) {
                        e.addEventListener(t, n)
                    }),
                    {
                        destroy: function() {
                            Array.prototype.forEach.call(e, function(e) {
                                e.removeEventListener(t, n)
                            })
                        }
                    }
                }
                function o(e, t, n) {
                    return a(document.body, e, t, n)
                }
                var s = e("./is")
                  , a = e("delegate");
                t.exports = function(e, t, n) {
                    if (!e && !t && !n)
                        throw new Error("Missing required arguments");
                    if (!s.string(t))
                        throw new TypeError("Second argument must be a String");
                    if (!s.fn(n))
                        throw new TypeError("Third argument must be a Function");
                    if (s.node(e))
                        return r(e, t, n);
                    if (s.nodeList(e))
                        return i(e, t, n);
                    if (s.string(e))
                        return o(e, t, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
            }
            , {
                "./is": 3,
                delegate: 2
            }],
            5: [function(e, t, n) {
                t.exports = function(e) {
                    var t;
                    if ("SELECT" === e.nodeName)
                        e.focus(),
                        t = e.value;
                    else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                        var n = e.hasAttribute("readonly");
                        n || e.setAttribute("readonly", ""),
                        e.select(),
                        e.setSelectionRange(0, e.value.length),
                        n || e.removeAttribute("readonly"),
                        t = e.value
                    } else {
                        e.hasAttribute("contenteditable") && e.focus();
                        var r = window.getSelection()
                          , i = document.createRange();
                        i.selectNodeContents(e),
                        r.removeAllRanges(),
                        r.addRange(i),
                        t = r.toString()
                    }
                    return t
                }
            }
            , {}],
            6: [function(e, t, n) {
                function r() {}
                r.prototype = {
                    on: function(e, t, n) {
                        var r = this.e || (this.e = {});
                        return (r[e] || (r[e] = [])).push({
                            fn: t,
                            ctx: n
                        }),
                        this
                    },
                    once: function(e, t, n) {
                        function r() {
                            i.off(e, r),
                            t.apply(n, arguments)
                        }
                        var i = this;
                        return r._ = t,
                        this.on(e, r, n)
                    },
                    emit: function(e) {
                        var t = [].slice.call(arguments, 1)
                          , n = ((this.e || (this.e = {}))[e] || []).slice()
                          , r = 0
                          , i = n.length;
                        for (r; r < i; r++)
                            n[r].fn.apply(n[r].ctx, t);
                        return this
                    },
                    off: function(e, t) {
                        var n = this.e || (this.e = {})
                          , r = n[e]
                          , i = [];
                        if (r && t)
                            for (var o = 0, s = r.length; o < s; o++)
                                r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                        return i.length ? n[e] = i : delete n[e],
                        this
                    }
                },
                t.exports = r
            }
            , {}],
            7: [function(e, t, n) {
                !function(r, i) {
                    if (void 0 !== n)
                        i(t, e("select"));
                    else {
                        var o = {
                            exports: {}
                        };
                        i(o, r.select),
                        r.clipboardAction = o.exports
                    }
                }(this, function(e, t) {
                    function n(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    var r = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(t)
                      , i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                      , o = function() {
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
                      , s = function() {
                        function e(t) {
                            n(this, e),
                            this.resolveOptions(t),
                            this.initSelection()
                        }
                        return o(e, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action,
                                this.container = e.container,
                                this.emitter = e.emitter,
                                this.target = e.target,
                                this.text = e.text,
                                this.trigger = e.trigger,
                                this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var e = this
                                  , t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(),
                                this.fakeHandlerCallback = function() {
                                    return e.removeFake()
                                }
                                ,
                                this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                                this.fakeElem = document.createElement("textarea"),
                                this.fakeElem.style.fontSize = "12pt",
                                this.fakeElem.style.border = "0",
                                this.fakeElem.style.padding = "0",
                                this.fakeElem.style.margin = "0",
                                this.fakeElem.style.position = "absolute",
                                this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                var n = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = n + "px",
                                this.fakeElem.setAttribute("readonly", ""),
                                this.fakeElem.value = this.text,
                                this.container.appendChild(this.fakeElem),
                                this.selectedText = (0,
                                r.default)(this.fakeElem),
                                this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                                this.fakeHandler = null,
                                this.fakeHandlerCallback = null),
                                this.fakeElem && (this.container.removeChild(this.fakeElem),
                                this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0,
                                r.default)(this.target),
                                this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action)
                                } catch (t) {
                                    e = !1
                                }
                                this.handleResult(e)
                            }
                        }, {
                            key: "handleResult",
                            value: function(e) {
                                this.emitter.emit(e ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.trigger && this.trigger.focus(),
                                window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = e,
                                "copy" !== this._action && "cut" !== this._action)
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : i(e)) || 1 !== e.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]),
                        e
                    }();
                    e.exports = s
                })
            }
            , {
                select: 5
            }],
            8: [function(e, t, n) {
                !function(r, i) {
                    if (void 0 !== n)
                        i(t, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                    else {
                        var o = {
                            exports: {}
                        };
                        i(o, r.clipboardAction, r.tinyEmitter, r.goodListener),
                        r.clipboard = o.exports
                    }
                }(this, function(e, t, n, r) {
                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    function o(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    function s(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }
                    function a(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }
                    function l(e, t) {
                        var n = "data-clipboard-" + e;
                        if (t.hasAttribute(n))
                            return t.getAttribute(n)
                    }
                    var c = i(t)
                      , u = i(n)
                      , h = i(r)
                      , d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                      , f = function() {
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
                      , p = function(e) {
                        function t(e, n) {
                            o(this, t);
                            var r = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return r.resolveOptions(n),
                            r.listenClick(e),
                            r
                        }
                        return a(t, u.default),
                        f(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                                this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                                this.text = "function" == typeof e.text ? e.text : this.defaultText,
                                this.container = "object" === d(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function(e) {
                                var t = this;
                                this.listener = (0,
                                h.default)(e, "click", function(e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null),
                                this.clipboardAction = new c.default({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    container: this.container,
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(e) {
                                return l("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(e) {
                                var t = l("target", e);
                                if (t)
                                    return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText",
                            value: function(e) {
                                return l("text", e)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(),
                                this.clipboardAction && (this.clipboardAction.destroy(),
                                this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                                  , t = "string" == typeof e ? [e] : e
                                  , n = !!document.queryCommandSupported;
                                return t.forEach(function(e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }),
                                n
                            }
                        }]),
                        t
                    }();
                    e.exports = p
                })
            }
            , {
                "./clipboard-action": 7,
                "good-listener": 4,
                "tiny-emitter": 6
            }]
        }, {}, [8])(8)
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , r = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , i = function() {
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
      , o = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
      , s = function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
      , a = function(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
      , l = function(e, t) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
      , c = function() {
        function e(t, n, i) {
            r(this, e),
            this.type = t,
            this.target = null,
            this.currentTarget = null,
            this.eventPhase = 0,
            this.bubbles = !!n,
            this.cancelable = !!i,
            this.timeStamp = (new Date).getTime(),
            this.defaultPrevented = !1,
            this.propagationStopped = !1,
            this.immediatePropagationStopped = !1,
            this.removed = !1
        }
        return i(e, [{
            key: "preventDefault",
            value: function() {
                this.defaultPrevented = this.cancelable && !0
            }
        }, {
            key: "stopPropagation",
            value: function() {
                this.propagationStopped = !0
            }
        }, {
            key: "stopImmediatePropagation",
            value: function() {
                this.immediatePropagationStopped = this.propagationStopped = !0
            }
        }, {
            key: "remove",
            value: function() {
                this.removed = !0
            }
        }, {
            key: "clone",
            value: function() {
                return new e(this.type,this.bubbles,this.cancelable)
            }
        }, {
            key: "set",
            value: function(e) {
                for (var t in e)
                    this[t] = e[t];
                return this
            }
        }, {
            key: "toString",
            value: function() {
                return "[Event (type=" + this.type + ")]"
            }
        }]),
        e
    }()
      , u = function() {
        function e() {
            r(this, e),
            this._listeners = null,
            this._captureListeners = null,
            this.off = this.removeEventListener
        }
        return i(e, [{
            key: "addEventListener",
            value: function(e, t, n) {
                var r = void 0
                  , i = (r = n ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {})[e];
                return i && this.removeEventListener(e, t, n),
                (i = r[e]) ? i.push(t) : r[e] = [t],
                t
            }
        }, {
            key: "on",
            value: function(e, t, n, r, i, o) {
                return t.handleEvent && (n = n || t,
                t = t.handleEvent),
                n = n || this,
                this.addEventListener(e, function(e) {
                    t.call(n, e, i),
                    r && e.remove()
                }, o)
            }
        }, {
            key: "removeEventListener",
            value: function(e, t, n) {
                var r = n ? this._captureListeners : this._listeners;
                if (r) {
                    var i = r[e];
                    if (i)
                        for (var o = 0, s = i.length; o < s; o++)
                            if (i[o] === t) {
                                1 == s ? delete r[e] : i.splice(o, 1);
                                break
                            }
                }
            }
        }, {
            key: "removeAllEventListeners",
            value: function(e) {
                e ? (this._listeners && delete this._listeners[e],
                this._captureListeners && delete this._captureListeners[e]) : this._listeners = this._captureListeners = null
            }
        }, {
            key: "dispatchEvent",
            value: function(e, t, n) {
                if ("string" == typeof e) {
                    var r = this._listeners;
                    if (!(t || r && r[e]))
                        return !0;
                    e = new c(e,t,n)
                } else
                    e.target && e.clone && (e = e.clone());
                try {
                    e.target = this
                } catch (e) {}
                if (e.bubbles && this.parent) {
                    for (var i = this, o = [i]; i.parent; )
                        o.push(i = i.parent);
                    var s = void 0
                      , a = o.length;
                    for (s = a - 1; s >= 0 && !e.propagationStopped; s--)
                        o[s]._dispatchEvent(e, 1 + (0 == s));
                    for (s = 1; s < a && !e.propagationStopped; s++)
                        o[s]._dispatchEvent(e, 3)
                } else
                    this._dispatchEvent(e, 2);
                return !e.defaultPrevented
            }
        }, {
            key: "hasEventListener",
            value: function(e) {
                var t = this._listeners
                  , n = this._captureListeners;
                return !!(t && t[e] || n && n[e])
            }
        }, {
            key: "willTrigger",
            value: function(e) {
                for (var t = this; t; ) {
                    if (t.hasEventListener(e))
                        return !0;
                    t = t.parent
                }
                return !1
            }
        }, {
            key: "toString",
            value: function() {
                return "[EventDispatcher]"
            }
        }, {
            key: "_dispatchEvent",
            value: function(e, t) {
                var n = void 0
                  , r = void 0
                  , i = t <= 2 ? this._captureListeners : this._listeners;
                if (e && i && (r = i[e.type]) && (n = r.length)) {
                    try {
                        e.currentTarget = this
                    } catch (e) {}
                    try {
                        e.eventPhase = 0 | t
                    } catch (e) {}
                    e.removed = !1,
                    r = r.slice();
                    for (var o = 0; o < n && !e.immediatePropagationStopped; o++) {
                        var s = r[o];
                        s.handleEvent ? s.handleEvent(e) : s(e),
                        e.removed && (this.off(e.type, s, 1 == t),
                        e.removed = !1)
                    }
                }
                2 === t && this._dispatchEvent(e, 2.1)
            }
        }], [{
            key: "EventDispatcher",
            value: function(e) {
                e.addEventListener = p.addEventListener,
                e.on = p.on,
                e.removeEventListener = e.off = p.removeEventListener,
                e.removeAllEventListeners = p.removeAllEventListeners,
                e.hasEventListener = p.hasEventListener,
                e.dispatchEvent = p.dispatchEvent,
                e._dispatchEvent = p._dispatchEvent,
                e.willTrigger = p.willTrigger
            }
        }]),
        e
    }()
      , h = {}
      , d = h;
    d.query = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;
        return ">" === e[0] ? d._childQuery(e, t, d.query) : t.querySelector(e)
    }
    ,
    d.queryAll = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;
        return ">" === e[0] ? d._childQuery(e, t, d.queryAll) : t.querySelectorAll(e)
    }
    ,
    d.removeClass = function(e, t) {
        if (d._runOnNodeList(d.removeClass, e, t))
            return e;
        if (t instanceof RegExp) {
            var n = (e.getAttribute("class") || "").split(" ")
              , r = t;
            e.setAttribute("class", n.filter(function(e) {
                return !r.test(e)
            }).join(" "))
        } else {
            var i = e.classList;
            i.remove.apply(i, t.split(" "))
        }
        return e
    }
    ,
    d.addClass = function(e, t) {
        if (d._runOnNodeList(d.addClass, e, t))
            return e;
        d.removeClass(e, t);
        for (var n = t.split(" "), r = 0; r < n.length; r++)
            e.classList.add(n[r]);
        return e
    }
    ,
    d.toggleClass = function(e, t, n) {
        if (d._runOnNodeList(d.toggleClass, e, t, n))
            return e;
        var r = d.hasClass(e, t);
        if (null == n)
            n = !r;
        else if (n === r)
            return;
        n ? d.addClass(e, t) : d.removeClass(e, t)
    }
    ,
    d.hasClass = function(e, t) {
        return !!(e.getAttribute("class") || "").match(new RegExp("\\b\\s?" + t + "\\b","g"))
    }
    ,
    d.swapClass = function(e, t, n) {
        return d.removeClass(e, t),
        d.addClass(e, n),
        e
    }
    ,
    d.remove = function(e) {
        return d._runOnNodeList(d.remove, e) ? e : (e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e),
        e)
    }
    ,
    d.empty = function(e) {
        if (d._runOnNodeList(d.empty, e))
            return e;
        for (; e.firstChild; )
            e.removeChild(e.firstChild);
        return e
    }
    ,
    d.create = function(e, t, n, r) {
        var i = document.createElement(e || "div");
        return t && (i.className = t),
        n && (i.innerHTML = n),
        r && r.appendChild(i),
        i
    }
    ,
    d.getEl = function(e, t) {
        return e instanceof HTMLElement || !e ? e : d.query(e, t)
    }
    ,
    d.togglePanel = function(e, t, n, r) {
        var i = d.getEl(t, e)
          , o = d.getEl(n, e)
          , s = void 0
          , a = !d.hasClass(e, "closed");
        if ((r = void 0 === r ? !a : !!r) !== a && (r ? (d.removeClass(e, "closed"),
        s = o,
        o = i,
        i = s) : d.addClass(e, "closed"),
        i && (i.style.display = "none"),
        o)) {
            e.addEventListener("transitionend", function t(n) {
                n.target === e && (o.style.display = "flex",
                e.removeEventListener("transitionend", t))
            })
        }
    }
    ,
    d.transition = function(e, t, n) {
        e.addEventListener("transitionend", function t(r) {
            r.target === e && (e.removeEventListener("transition", t),
            n())
        }),
        d.addClass(e, t)
    }
    ,
    d.template = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return function(t) {
            for (var r = e[0], i = 0, o = n.length; i < o; i++)
                r += t[n[i]] + e[i + 1];
            return r
        }
    }
    ,
    d.getCSSValue = function(e, t) {
        var n = d.create("div", e);
        n.style.display = "none",
        n.id = "export",
        document.body.appendChild(n);
        var r = window.getComputedStyle(n).getPropertyValue(t);
        return d.remove(n),
        r
    }
    ,
    d._runOnNodeList = function(e, t) {
        if (!t)
            return !0;
        if (void 0 === t.length)
            return !1;
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
            r[i - 2] = arguments[i];
        for (var o = 0, s = t.length; o < s; o++)
            e.call.apply(e, [h, t[o]].concat(r));
        return !0
    }
    ,
    d._childQuery = function(e, t, n) {
        t.id || (t.id = "___tmp_id");
        var r = n("#" + t.id + " " + e, t.parentNode);
        return "___tmp_id" === t.id && (t.id = ""),
        r
    }
    ;
    var f = {};
    f.prepMenuContent = function(e, t) {
        t.__next_id || (t.__next_id = 1);
        for (var n = e.kids, r = 0, i = n.length; r < i; r++) {
            var o = n[r];
            o.id || (o.id = "__id_" + t.__next_id++),
            t[o.id] = o,
            o.parent = e,
            o.kids && f.prepMenuContent(o, t)
        }
        return e
    }
    ,
    f.find = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (t(e[n]))
                return e[n]
    }
    ,
    f.findIndex = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (t(e[n]))
                return n;
        return -1
    }
    ,
    f.copy = function(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    ,
    f.mergeObject = function(e, t) {
        for (var n in e)
            t[n] = e[n]
    }
    ,
    f.searchRank = function(e, t) {
        var n = f.searchTest;
        return t = t.toLowerCase(),
        e.access ? n((e.keywords || "") + " " + (e.name || ""), t, 16) + n((e.description || "") + " " + (e.author || ""), t, 8) : n(e.token, t, 16) + n((e.id || "") + " " + (e.label || ""), t, 8) + n((e.desc || "") + " " + (e.ext || ""), t, 4)
    }
    ,
    f.searchTest = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e && -1 !== e.toLowerCase().indexOf(t) ? n : 0
    }
    ,
    f.htmlSafe = function(e) {
        return null == e ? "" : ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    }
    ,
    f.shorten = function(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        if (!e)
            return e;
        var i = t > 0 && e.length > t;
        return i && (e = e.substr(0, t - 1)),
        n && (e = f.htmlSafe(e)),
        i ? e + (r && "<" + r + ">") + "…" + (r && "</" + r + ">") : e
    }
    ,
    f.unescSubstStr = function(e) {
        return e.replace(f.SUBST_ESC_RE, function(e, t, n) {
            return f.SUBST_ESC_CHARS[t] || String.fromCharCode(parseInt(n, 16))
        })
    }
    ,
    f.getRegExp = function(e) {
        var t = e.match(/^\/(.+)\/([a-z]+)?$/)
          , n = null;
        try {
            n = t ? new RegExp(t[1],t[2] || "") : new RegExp(e,"g")
        } catch (e) {}
        return n
    }
    ,
    f.decomposeRegEx = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/"
          , n = e.lastIndexOf(t);
        return -1 !== n ? {
            source: e.substring(1, n),
            flags: e.substr(n + 1)
        } : {
            source: e,
            flags: "g"
        }
    }
    ,
    f.isMac = function() {
        return !!navigator.userAgent.match(/Mac\sOS/i)
    }
    ,
    f.getCtrlKey = function() {
        return f.isMac() ? "cmd" : "ctrl"
    }
    ,
    f.now = function() {
        return window.performance ? performance.now() : Date.now()
    }
    ,
    f.getUrlParams = function() {
        for (var e = void 0, t = /([^&=]+)=?([^&]*)/g, n = {}, r = window.location.search.substring(1).replace("+", " "); e = t.exec(r); )
            n[decodeURIComponent(e[1])] = decodeURIComponent(e[2]);
        return n
    }
    ;
    var g = {};
    f.defer = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        clearTimeout(g[t]),
        g[t] = setTimeout(function() {
            delete g[t],
            e()
        }, n)
    }
    ,
    f.getHashCode = function(e) {
        var t = 0
          , n = e.length
          , r = void 0;
        for (r = 0; r < n; r++)
            t = (t << 5) - t + e.charCodeAt(r) | 0;
        return t
    }
    ,
    f.SUBST_ESC_CHARS = {
        n: "\n",
        r: "\r",
        t: "\t",
        "\\": "\\"
    },
    f.SUBST_ESC_RE = /\\([nrt\\]|u([A-Z0-9]{4}))/gi;
    var v = {};
    v.create = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "100%"
          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "100%"
          , i = {}
          , o = (f.getCtrlKey(),
        f.copy({
            lineNumbers: !1,
            tabSize: 3,
            indentWithTabs: !0,
            extraKeys: i,
            specialChars: /[ \u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/,
            specialCharPlaceholder: function(e) {
                return h.create("span", " " === e ? "cm-space" : "cm-special", " ")
            }
        }, t))
          , s = CodeMirror(e, o);
        return s.setSize(n, r),
        s.getOption("maxLength") && s.on("beforeChange", v.enforceMaxLength),
        s.getOption("singleLine") && s.on("beforeChange", v.enforceSingleLine),
        s
    }
    ,
    v.getCharIndexAt = function(e, t, n) {
        for (var r = e.coordsChar({
            left: t,
            top: n
        }, "page"), i = 0; i <= 1; i++) {
            var o = e.charCoords(r, "page");
            if (t >= o.left && t <= o.right && n >= o.top && n <= o.bottom)
                return e.indexFromPos(r);
            if (r.ch-- <= 0)
                break
        }
        return null
    }
    ,
    v.getCharRect = function(e, t) {
        if (null == t)
            return null;
        var n = e.posFromIndex(t)
          , r = e.charCoords(n);
        return r.x = r.left,
        r.y = r.top,
        r.width = r.right - r.left,
        r.height = r.bottom - r.top,
        r
    }
    ,
    v.enforceMaxLength = function(e, t) {
        var n = e.getOption("maxLength");
        if (n && t.update) {
            var r = t.text.join("\n")
              , i = r.length - (e.indexFromPos(t.to) - e.indexFromPos(t.from));
            if (i <= 0)
                return !0;
            (i = e.getValue().length + i - n) > 0 && (r = r.substr(0, r.length - i),
            t.update(t.from, t.to, r.split("\n")))
        }
        return !0
    }
    ,
    v.enforceSingleLine = function(e, t) {
        if (t.update) {
            var n = t.text.join("").replace(/(\n|\r)/g, "");
            t.update(t.from, t.to, [n])
        }
        return !0
    }
    ;
    var m = function() {
        function e(t) {
            var n = this
              , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r(this, e),
            this.el = h.remove(t),
            this.transition = i,
            this.contentEl = h.query(".content", t),
            this.tipEl = h.query(".tip", t),
            this.hideF = function(e) {
                return Date.now() > n._showT && n.handleBodyClick(e)
            }
            ,
            this.curId = null
        }
        return i(e, [{
            key: "toggle",
            value: function(e, t, n, r, i, o) {
                if (e === this.curId)
                    return this.hide(e);
                this.show(e, t, n, r, i, o)
            }
        }, {
            key: "toggleOn",
            value: function(e, t, n, r, i) {
                if (e === this.curId)
                    return this.hide(e);
                this.showOn(e, t, n, r, i),
                this.toggleEl = n,
                h.addClass(n, "selected")
            }
        }, {
            key: "hide",
            value: function(e) {
                if (!e || this.curId === e) {
                    var t = this.el
                      , n = t.style;
                    h.empty(h.query(".content", h.remove(t))),
                    h.removeClass(t, "flipped"),
                    document.body.removeEventListener("mousedown", this.hideF),
                    this.toggleEl && (h.removeClass(this.toggleEl, "selected"),
                    this.toggleEl = null),
                    n.left = n.top = "0",
                    n.width = "",
                    this.transition && (n.opacity = 0,
                    n.marginTop = "-0.25em"),
                    this.curId = null
                }
            }
        }, {
            key: "show",
            value: function(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                  , o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (this.hide(),
                t) {
                    var s = this.el
                      , a = s.style
                      , l = this.contentEl
                      , c = document.body;
                    t instanceof HTMLElement ? l.appendChild(t) : l.innerHTML = t,
                    i && (this._showT = Date.now() + 30,
                    c.addEventListener("mousedown", this.hideF)),
                    c.appendChild(s);
                    var u = window.innerHeight
                      , d = window.innerWidth
                      , f = s.getBoundingClientRect()
                      , p = f.right - f.left
                      , g = 0;
                    r + (f.bottom - f.top) > u - 8 && (h.addClass(s, "flipped"),
                    r -= o),
                    n - p / 2 < 8 ? g = 8 - n + p / 2 : n + p / 2 > d - 8 && (g = d - 8 - n - p / 2),
                    this.tipEl.style.marginRight = 2 * Math.max(-p / 2 + 10, Math.min(p / 2 - 10, g)) + "px",
                    a.width = p + "px",
                    a.top = r + "px",
                    a.left = n + g + "px",
                    this.transition && (a.opacity = 1,
                    a.marginTop = 0),
                    this.curId = e
                }
            }
        }, {
            key: "showOn",
            value: function(e, t, n, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                  , o = n.getBoundingClientRect()
                  , s = Math.round((o.left + o.right) / 2)
                  , a = o.bottom + i
                  , l = o.bottom - o.top;
                this.show(e, t, s, a, r, l)
            }
        }, {
            key: "handleBodyClick",
            value: function(e) {
                var t = this.curId;
                this.el.contains(e.target) || this.toggleEl && this.toggleEl.contains(e.target) || this.hide(t)
            }
        }]),
        e
    }()
      , y = function(e) {
        function t(e, n) {
            r(this, t);
            var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return i.el = e,
            i.multi = n.multi,
            i.template = n.template,
            i.data = n.data,
            n.selected && (i.selected = n.selected),
            i
        }
        return s(t, u),
        i(t, [{
            key: "refresh",
            value: function() {
                var e = this.selected;
                this.data = this._data,
                this.selected = e
            }
        }, {
            key: "handleClick",
            value: function(e) {
                var t = e.currentTarget.dataset.id
                  , n = this.selected;
                if (this.multi)
                    h.toggleClass(e.currentTarget, "selected");
                else {
                    if (this.selected === t)
                        return void (null != t && this.dispatchEvent("selclick"));
                    this.selected = t
                }
                this.dispatchEvent("change", !1, !0) || (this.selected = n)
            }
        }, {
            key: "scrollTo",
            value: function(e) {
                var t = h.query("[data-id='" + e + "']", this.el);
                if (t) {
                    var n = t.offsetTop - this.el.offsetTop;
                    n + t.offsetHeight > this.el.scrollTop + this.el.offsetHeight ? this.el.scrollTop = n + t.offsetHeight - this.el.offsetHeight + 10 : n < this.el.scrollTop && (this.el.scrollTop = n - 10)
                }
            }
        }, {
            key: "data",
            set: function(e) {
                var t = this;
                if (h.empty(this.el),
                this._data = e,
                e && e.length)
                    for (var n = this.template, r = 0, i = e.length; r < i; r++) {
                        var o = e[r]
                          , s = void 0
                          , a = void 0
                          , l = void 0;
                        if ("string" == typeof o)
                            a = o,
                            s = n ? n(o) : o;
                        else {
                            if (o.hide)
                                continue;
                            a = o.id || o.label,
                            s = n ? n(o) : o.label,
                            l = o.selected
                        }
                        var c = h.create("li", l ? "selected" : null, s, this.el);
                        c.dataset.id = a,
                        c.item = o,
                        c.addEventListener("click", function(e) {
                            return t.handleClick(e)
                        })
                    }
            },
            get: function() {
                return this._data
            }
        }, {
            key: "selected",
            set: function(e) {
                var t = this;
                h.removeClass(h.queryAll(".selected", this.el), "selected"),
                e instanceof Array || (e = [e]),
                e.forEach(function(e) {
                    return h.addClass(h.query("[data-id='" + e + "']", t.el), "selected")
                }),
                this.multi || this.scrollTo(e[0])
            },
            get: function() {
                var e = h.queryAll("li.selected", this.el);
                if (!e[0])
                    return null;
                if (!this.multi)
                    return e[0].dataset.id;
                for (var t = [], n = 0, r = e.length; n < r; n++)
                    t.push(e[n].dataset.id);
                return t
            }
        }, {
            key: "selectedItem",
            get: function() {
                var e = h.query("li.selected", this.el);
                return e && e.item
            }
        }]),
        t
    }()
      , b = function() {
        function e() {
            r(this, e)
        }
        return i(e, null, [{
            key: "solve",
            value: function(t) {
                return e._getRequest("regex/solve", {
                    data: JSON.stringify(t)
                })
            }
        }, {
            key: "version",
            value: function(t) {
                return e._getRequest("regex/version", {
                    flavor: t
                })
            }
        }, {
            key: "communitySearch",
            value: function(t) {
                var n = this;
                return e._getRequest("patterns/search", {
                    query: t || "",
                    startIndex: 0,
                    limit: 100
                }, function(e) {
                    n._processPatternList(e)
                })
            }
        }, {
            key: "load",
            value: function(t) {
                var n = this;
                return e._getRequest("patterns/load", {
                    patternId: t
                }, function(e) {
                    return n._processPattern(e)
                })
            }
        }, {
            key: "save",
            value: function(t, n) {
                var r = this
                  , i = this._prepPattern(t, n);
                return e._getRequest("patterns/save", i, function(e) {
                    return r._processPattern(e)
                })
            }
        }, {
            key: "rate",
            value: function(t, n) {
                return e._getRequest("patterns/rate", {
                    patternId: t,
                    userRating: n
                }, function(e) {
                    return e.rating = Number(e.rating)
                })
            }
        }, {
            key: "delete",
            value: function(t) {
                return e._getRequest("patterns/delete", {
                    patternId: t
                })
            }
        }, {
            key: "favorite",
            value: function(t, n) {
                return e._getRequest("patterns/favorite", {
                    patternId: t,
                    favorite: !!n
                })
            }
        }, {
            key: "private",
            value: function(t, n) {
                return e.setAccess(t, n ? "private" : "protected")
            }
        }, {
            key: "setAccess",
            value: function(t, n) {
                return e._getRequest("patterns/setAccess", {
                    patternId: t,
                    access: n
                })
            }
        }, {
            key: "multiFavorite",
            value: function(t) {
                return e._getRequest("patterns/multiFavorite", {
                    patternIds: JSON.stringify(t)
                })
            }
        }, {
            key: "login",
            value: function(t) {
                window.location = e.url + "?action=account/login&type=" + t
            }
        }, {
            key: "logout",
            value: function() {
                return e._getRequest("account/logout", {})
            }
        }, {
            key: "verify",
            value: function() {
                return e._getRequest("account/verify", {})
            }
        }, {
            key: "patterns",
            value: function() {
                var t = this;
                return e._getRequest("account/patterns", {}, function(e) {
                    t._processPatternList(e),
                    e.results.sort(function(e, t) {
                        return e.favorite !== t.favorite ? t.favorite - e.favorite : t.dateAdded - e.dateAdded
                    })
                })
            }
        }, {
            key: "_processPatternList",
            value: function(e) {
                e.results.forEach(this._processPattern)
            }
        }, {
            key: "_processPattern",
            value: function(e) {
                e.rating = Number(e.rating),
                e.userRating = Number(e.userRating),
                e.flavor = e.flavor || "js",
                e.text = e.text || null,
                e.tool && e.tool.id && (e.tool.id = e.tool.id.toLowerCase())
            }
        }, {
            key: "_prepPattern",
            value: function(e, t) {
                if (e.id) {
                    if (t) {
                        e.parentId = e.id,
                        delete e.id;
                        var n = / ?\(fork ?(\d*)\)$/.exec(e.name);
                        if (n) {
                            var r = 1 * (n[1] || 1) + 1;
                            e.name = e.name.substr(0, n.index) + " (fork " + r + ")"
                        } else
                            e.name = e.name + " (fork)"
                    }
                } else
                    delete e.id;
                return e.parentId || delete e.parentId,
                e.tool = JSON.stringify(e.tool),
                e
            }
        }, {
            key: "_getRequest",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = arguments[2]
                  , i = new XMLHttpRequest
                  , o = new w(i,r)
                  , s = [];
                i.open("POST", e.url),
                i.setRequestHeader("Content-type", "application/x-www-form-urlencoded", !0),
                i.timeout = 5e3,
                n.action = t,
                e.isLocal && e.useBeta && (n.userId = 111);
                for (var a in n)
                    s.push(a + "=" + encodeURIComponent(n[a]));
                return e.isLocal && console.log(n),
                i.send(s.join("&")),
                o
            }
        }]),
        e
    }()
      , w = function() {
        function e(t, n) {
            var i = this;
            r(this, e),
            this._req = t,
            this._postprocess = n,
            t.addEventListener("load", function() {
                return i._load()
            }),
            t.addEventListener("timeout", function(e) {
                return i._error("servercomm")
            }),
            t.addEventListener("error", function(e) {
                return i._error("servercomm")
            })
        }
        return i(e, [{
            key: "then",
            value: function(e, t, n) {
                return this._loadF = e,
                t && this.catch(t),
                this._data && e(this._data),
                n && this.finally(n),
                this
            }
        }, {
            key: "catch",
            value: function(e) {
                return this._errorF = e,
                this._err && e(this._err),
                this
            }
        }, {
            key: "finally",
            value: function(e) {
                return this._finallyF = e,
                this._complete && e(),
                this
            }
        }, {
            key: "abort",
            value: function() {
                this._complete || (this._complete = !0,
                this._req.abort(),
                this._finallyF && this._finallyF(),
                this._loadF = this._errorF = this._finallyF = null)
            }
        }, {
            key: "_load",
            value: function() {
                var e = void 0;
                this._complete = !0,
                b.isLocal && console.log(this._req.response || this._req.responseText);
                try {
                    e = JSON.parse(this._req.response || this._req.responseText)
                } catch (e) {
                    return this._error(e)
                }
                if (!e.success)
                    return this._error(e.data);
                this._postprocess && this._postprocess(e.data),
                this._data = e.data,
                this._loadF && this._loadF(this._data),
                this._finallyF && this._finallyF()
            }
        }, {
            key: "_error",
            value: function(e) {
                this._err = e.data && e.data.error || e.message || e.detail || e.type || String(e),
                this._errorF && this._errorF(this._err),
                this._finallyF && this._finallyF()
            }
        }]),
        e
    }();
    b.isLocal = "localhost" === window.location.hostname,
    b.useBeta = b.isLocal || "beta.regexr.com" === window.location.hostname,
    b.host = (b.useBeta ? "http://beta." : "https://") + "regexr.com",
    b.url = b.host + "/server/api.php";
    var x = {};
    x.GA_ID = "UA-3579542-6",
    x.page = function(e) {
        gtag("config", x.GA_ID, {
            page_path: "/" + e
        })
    }
    ,
    x.event = function(e, t, n) {
        var r = {};
        t && (r.event_category = t),
        n && (r.event_label = n),
        gtag("event", e, r)
    }
    ;
    var k = function() {
        function e() {
            r(this, e),
            this.profile = null
        }
        return i(e, [{
            key: "parse",
            value: function(e) {
                if (!this._profile)
                    return null;
                if (e === this.string)
                    return this.token;
                this.token = null,
                this._modes = {},
                this.string = e,
                this.errors = [];
                for (var t = this.captureGroups = [], n = this.namedGroups = {}, r = [], i = [], o = 0, s = e.length, a = void 0, l = void 0, c = null, u = null, h = null, d = this._profile, f = d.unquantifiable, p = d.charTypes, g = e.lastIndexOf("/"), v = g + 1; v < s; v++)
                    this._modes[e[v]] = !0;
                for (; o < s; ) {
                    a = e[o],
                    l = {
                        i: o,
                        l: 1,
                        prev: u,
                        prv: h,
                        modes: this._modes
                    },
                    u ? u.next = l : this.token = l,
                    0 === o || o >= g ? this.parseFlag(e, l) : "(" !== a || c ? ")" !== a || c ? "[" === a ? c = this.parseSquareBracket(e, l, c) : "]" === a && c ? (l.type = "setclose",
                    l.open = c,
                    c.close = l,
                    c = null) : "+" === a && h && "quant" === h.clss && d.tokens.possessive ? (l.type = "possessive",
                    l.related = [h]) : "+" !== a && "*" !== a || c ? "{" !== a || c || -1 === e.substr(o).search(/^{\d+,?\d*}/) ? "\\" === a ? this.parseBackSlash(e, l, c, g) : "?" !== a || c ? "-" === a && c && void 0 !== h.code && h.prv && "range" !== h.prv.type ? l.type = "range" : (this.parseChar(e, l, c),
                    !c && this._modes.x && /\s/.test(a) && (l.ignore = !0,
                    l.type = "ignorews")) : h && "quant" === h.clss ? (l.type = "lazy",
                    l.related = [h]) : (l.type = p[a],
                    l.clss = "quant",
                    l.min = 0,
                    l.max = 1) : this.parseQuant(e, l) : (l.type = p[a],
                    l.clss = "quant",
                    l.min = "+" === a ? 1 : 0,
                    l.max = -1) : (l.type = "groupclose",
                    r.length ? (l.open = r.pop()).close = l : l.err = "groupclose") : (this.parseParen(e, l),
                    null === l.close && (l.depth = r.length,
                    r.push(l)),
                    l.capture && (t.push(l),
                    l.num = t.length,
                    l.name && !l.err && (/\d/.test(l.name[0]) ? l.err = "badname" : n[l.name] ? (l.err = "dupname",
                    l.related = [n[l.name]]) : n[l.name] = l))),
                    "quant" === l.clss && (!h || void 0 !== h.close || f[h.type] || h.open && f[h.open.type] ? l.err = "quanttarg" : l.related = [h.open || h]),
                    !0 === l.group && i.push(l);
                    var m = r.length ? r[r.length - 1] : null;
                    !m || "conditional" !== m.type && "conditionalgroup" !== m.type || "alt" !== l.type || (m.alt ? l.err = "extraelse" : m.alt = l,
                    l.related = [m],
                    l.type = "conditionalelse",
                    l.clss = "special"),
                    h && "range" === h.type && 1 === h.l && this.validateRange(e, l),
                    l.open && !l.clss && (l.clss = l.open.clss),
                    l.err && this.errors.push(l.err),
                    o += l.l,
                    u = l,
                    l.ignore || (h = l)
                }
                for (; r.length; )
                    this.errors.push(r.pop().err = "groupopen");
                return this.matchRefs(i, t, n),
                c && this.errors.push(c.err = "setopen"),
                this.token
            }
        }, {
            key: "getRef",
            value: function(e, t) {
                e.clss = "ref",
                e.group = !0,
                e.relIndex = this.captureGroups.length,
                e.name = t
            }
        }, {
            key: "matchRefs",
            value: function(e, t, n) {
                for (; e.length; ) {
                    var r = e.pop()
                      , i = r.name
                      , o = n[i];
                    if (!o && !isNaN(i)) {
                        var s = i[0]
                          , a = parseInt(i) + ("+" === s || "-" === s ? r.relIndex : 0);
                        "-" === s && a++,
                        o = t[a - 1]
                    }
                    o ? (r.group = o,
                    r.related = [o],
                    r.dir = r.i < o.i ? 1 : !o.close || r.i < o.close.i ? 0 : -1) : (delete r.group,
                    delete r.relIndex,
                    this.refToOctal(r),
                    r.err && this.errors.push(r.err))
                }
            }
        }, {
            key: "refToOctal",
            value: function(e) {
                var t = e.name
                  , n = this._profile;
                if ("numref" !== e.type)
                    e.err = "unmatchedref";
                else if (/^[0-7]{2}$/.test(t) || n.config.reftooctalalways && /^[0-7]$/.test(t)) {
                    var r = e.next
                      , i = String.fromCharCode(r.code);
                    "char" === r.type && i >= "0" && i <= "7" && parseInt(t + i, 8) <= 255 && (t += i,
                    this.mergeNext(e)),
                    e.code = parseInt(t, 8),
                    e.clss = "esc",
                    e.type = "escoctal",
                    delete e.name
                } else
                    "8" === t || "9" === t ? (this.parseEscChar(e, t),
                    delete e.name) : e.err = "unmatchedref"
            }
        }, {
            key: "mergeNext",
            value: function(e) {
                var t = e.next;
                e.next = t.next,
                e.next.prev = e,
                e.l++
            }
        }, {
            key: "parseFlag",
            value: function(e, t) {
                var n = t.i
                  , r = e[n];
                "/" === e[n] ? (t.type = 0 === n ? "open" : "close",
                0 !== n && (t.related = [this.token],
                this.token.related = [t])) : t.type = this._profile.flags[r],
                t.clear = !0
            }
        }, {
            key: "parseChar",
            value: function(t, n, r) {
                var i = t[n.i];
                return n.type = !r && this._profile.charTypes[i] || "char",
                r || "/" !== i || (n.err = "fwdslash"),
                "char" === n.type ? n.code = i.charCodeAt(0) : e.ANCHOR_TYPES[n.type] ? n.clss = "anchor" : "dot" === n.type && (n.clss = "charclass"),
                n
            }
        }, {
            key: "parseSquareBracket",
            value: function(e, t, n) {
                var r = void 0;
                return this._profile.tokens.posixcharclass && (r = e.substr(t.i).match(/^\[(:|.)(.*?)\1]/)) ? (t.l = r[0].length,
                t.value = r[2],
                t.clss = "charclass",
                ":" === r[1] ? (t.type = "posixcharclass",
                this._profile.posixCharClasses[r[2]] ? n || (t.err = "posixcharclassnoset") : t.err = "posixcharclassbad") : (t.type = "posixcollseq",
                t.err = "notsupported")) : n ? this.parseChar(e, t, n) : (t.type = t.clss = "set",
                "^" === e[t.i + 1] && (t.l++,
                t.type += "not"),
                n = t),
                n
            }
        }, {
            key: "parseParen",
            value: function(e, t) {
                if (t.clss = t.type = "group",
                "?" !== e[t.i + 1])
                    return t.close = null,
                    t.capture = !0,
                    t;
                var n = e.substr(t.i + 2)
                  , r = void 0
                  , i = n[0];
                if (":" === i)
                    t.type = "noncapgroup",
                    t.close = null,
                    t.l = 3;
                else if (">" === i)
                    t.type = "atomic",
                    t.close = null,
                    t.l = 3;
                else if ("|" === i)
                    t.type = "branchreset",
                    t.close = null,
                    t.l = 3,
                    t.err = "branchreseterr";
                else if ("#" === i && (r = n.match(/[^)]*\)/)))
                    t.clss = t.type = "comment",
                    t.ignore = !0,
                    t.l = 2 + r[0].length;
                else if (/^(R|0)\)/.test(n))
                    t.clss = "ref",
                    t.type = "recursion",
                    t.l = 4;
                else if (r = n.match(/^P=(\w+)\)/i))
                    t.type = "namedref",
                    this.getRef(t, r[1]),
                    t.l = r[0].length + 2;
                else if (/^\(DEFINE\)/.test(n))
                    t.type = "define",
                    t.close = null,
                    t.l = 10;
                else if (r = n.match(/^<?[=!]/)) {
                    var o = "conditional" === t.prv.type;
                    t.clss = o ? "special" : "lookaround",
                    t.close = null,
                    i = r[0],
                    t.behind = "<" === i[0],
                    t.negative = "!" === i[+t.behind],
                    t.type = o ? "condition" : (t.negative ? "neg" : "pos") + "look" + (t.behind ? "behind" : "ahead"),
                    o && (t.prv.related = [t],
                    t.prv.condition = t,
                    t.related = [t.prv]),
                    t.l = i.length + 2
                } else
                    (r = n.match(/^'(\w+)'/)) || (r = n.match(/^P?<(\w+)>/)) ? (t.type = "namedgroup",
                    t.close = null,
                    t.name = r[1],
                    t.capture = !0,
                    t.l = r[0].length + 2) : (r = n.match(/^([-+]?\d\d?)\)/)) || (r = n.match(/^(?:&|P>)(\w+)\)/)) ? (t.type = (isNaN(r[1]) ? "named" : "num") + "subroutine",
                    this.getRef(t, r[1]),
                    t.l = r[0].length + 2) : (r = n.match(/^\(([-+]?\d\d?)\)/)) || (r = n.match(/^\((\w+)\)/)) ? (this.getRef(t, r[1]),
                    t.clss = "special",
                    t.type = "conditionalgroup",
                    t.close = null,
                    t.l = r[0].length + 2) : /^\(\?<?[=!]/.test(n) ? (t.clss = "special",
                    t.type = "conditional",
                    t.close = null,
                    t.l = 2) : this.parseMode(t, n) || (t.close = null,
                    t.capture = !0);
                return this._profile.tokens[t.type] || (t.err = "notsupported"),
                t
            }
        }, {
            key: "parseBackSlash",
            value: function(t, n, r, i) {
                var o = n.i
                  , s = void 0
                  , a = this._profile
                  , l = t.substr(o + 1)
                  , c = l[0]
                  , u = void 0;
                if (o + 1 !== (i || t.length)) {
                    if (!r && (s = l.match(/^\d\d?/)))
                        return n.type = "numref",
                        this.getRef(n, s[0]),
                        n.l += s[0].length,
                        n;
                    if (a.tokens.namedref && !r && ("g" === c || "k" === c))
                        return this.parseRef(n, l);
                    if (a.tokens.unicodecat && ("p" === c || "P" === c))
                        return this.parseUnicode(n, l);
                    if (a.tokens.escsequence && "Q" === c) {
                        n.type = "escsequence";
                        var h = 2;
                        -1 !== (o = l.indexOf("\\E")) ? (n.l += o + 2,
                        h += 2) : n.l += i - n.i - 1,
                        n.value = t.substr(n.i + 2, n.l - h)
                    } else if (a.tokens.escunicodeub && this._modes.u && (s = l.match(/^u\{(\d+)}/)))
                        n.type = "escunicodeub",
                        n.l += s[0].length,
                        n.code = parseInt(s[1], 16);
                    else if (a.tokens.escunicodeu && (s = l.match(/^u([\da-fA-F]{4})/)))
                        n.type = "escunicodeu",
                        n.l += s[0].length,
                        n.code = parseInt(s[1], 16);
                    else if (a.tokens.escunicodexb && (s = l.match(/^x\{(.*?)}/)))
                        n.type = "escunicodexb",
                        n.l += s[0].length,
                        u = parseInt(s[1], 16),
                        isNaN(u) || u > 255 || /[^\da-f]/i.test(s[1]) ? n.err = "esccharbad" : n.code = u;
                    else if (s = l.match(/^x([\da-fA-F]{0,2})/))
                        n.type = "eschexadecimal",
                        n.l += s[0].length,
                        n.code = parseInt(s[1] || 0, 16);
                    else if (s = l.match(/^c([a-zA-Z])?/))
                        if (n.type = "esccontrolchar",
                        s[1])
                            n.code = s[1].toUpperCase().charCodeAt(0) - 64,
                            n.l += 2;
                        else {
                            if (!a.config.ctrlcodeerr)
                                return this.parseChar(t, n, r);
                            n.l++,
                            n.err = "esccharbad"
                        }
                    else if (s = l.match(/^[0-7]{1,3}/))
                        n.type = "escoctal",
                        l = s[0],
                        parseInt(l, 8) > 255 && (l = l.substr(0, 2)),
                        n.l += l.length,
                        n.code = parseInt(l, 8);
                    else if (a.tokens.escoctalo && (s = l.match(/^o\{(.*?)}/i)))
                        n.type = "escoctal",
                        n.l += s[0].length,
                        u = parseInt(s[1], 8),
                        isNaN(u) || u > 255 || /[^0-7]/.test(s[1]) ? n.err = "esccharbad" : n.code = u;
                    else {
                        if (n.type = a.escCharTypes[c])
                            return n.l++,
                            n.clss = e.ANCHOR_TYPES[n.type] ? "anchor" : "charclass",
                            n;
                        if (n.code = a.escCharCodes[c],
                        void 0 === n.code || !1 === n.code)
                            return this.parseEscChar(n, c);
                        n.l++,
                        n.type = "esc_" + n.code
                    }
                    return n.clss = "esc",
                    n
                }
                n.err = "esccharopen"
            }
        }, {
            key: "parseEscChar",
            value: function(e, t) {
                var n = this._profile;
                e.l = 2,
                !n.badEscChars[t] && n.tokens.escchar && !this._modes.u || n.escChars[t] ? (e.type = "escchar",
                e.code = t.charCodeAt(0),
                e.clss = "esc") : e.err = "esccharbad"
            }
        }, {
            key: "parseRef",
            value: function(e, t) {
                var n = t[0]
                  , r = ""
                  , i = void 0;
                (i = t.match(/^[gk](?:'\w*'|<\w*>|{\w*})/)) ? (r = i[0].substr(2, i[0].length - 3),
                "k" !== n || isNaN(r) || (r = "")) : (i = t.match(/^g(?:({[-+]?\d+}|<[-+]?\d+>|'[-+]?\d+')|([-+]?\d+))/)) && (r = void 0 !== i[2] ? i[2] : i[1].substr(1, i[1].length - 2));
                var o = "k" === n || !("'" === t[1] || "<" === t[1]);
                o || 0 != r ? (e.type = (isNaN(r) ? "named" : (o ? "ext" : "") + "num") + (o ? "ref" : "subroutine"),
                this.getRef(e, r)) : (e.type = "recursion",
                e.clss = "ref"),
                e.l += i ? i[0].length : 1
            }
        }, {
            key: "parseUnicode",
            value: function(e, t) {
                var n = t.match(/p\{\^?([^}]*)}/i)
                  , r = n && n[1]
                  , i = "P" === t[0];
                return !n && (n = t.match(/[pP]([LMZSNPC])/)) ? r = n[1] : i = i !== ("^" === t[2]),
                e.l += n ? n[0].length : 1,
                e.type = "unicodecat",
                this._profile.unicodeScripts[r] ? e.type = "unicodescript" : this._profile.unicodeCategories[r] || (r = null),
                i && (e.type = "not" + e.type),
                r || (e.err = "unicodebad"),
                e.value = r,
                e.clss = "charclass",
                e
            }
        }, {
            key: "parseMode",
            value: function(e, t) {
                var n = t.match(/^[-a-z]+\)/i);
                if (n) {
                    var r = this._profile.modes
                      , i = f.copy({}, this._modes)
                      , o = !1
                      , s = !1
                      , a = n[0]
                      , l = void 0;
                    e.on = e.off = "";
                    for (var c = 0, u = a.length - 1; c < u; c++)
                        if ("-" !== (l = a[c])) {
                            if (!r[l]) {
                                o = !0;
                                break
                            }
                            i[l] = !s,
                            e.on = e.on.replace(l, ""),
                            s ? (e.off = e.off.replace(l, ""),
                            e.off += l) : e.on += l
                        } else
                            s = !0;
                    return e.clss = "special",
                    e.type = "mode",
                    e.l = n[0].length + 2,
                    o ? (e.err = "modebad",
                    e.errmode = l) : this._modes = i,
                    e
                }
            }
        }, {
            key: "parseQuant",
            value: function(e, t) {
                t.type = t.clss = "quant";
                var n = t.i
                  , r = e.indexOf("}", n + 1);
                t.l += r - n;
                var i = e.substring(n + 1, r).split(",");
                return t.min = parseInt(i[0]),
                t.max = void 0 === i[1] ? t.min : "" === i[1] ? -1 : parseInt(i[1]),
                -1 !== t.max && t.min > t.max && (t.err = "quantrev"),
                t
            }
        }, {
            key: "validateRange",
            value: function(e, t) {
                var n = t
                  , r = t.prv
                  , i = r.prv;
                void 0 === i.code || void 0 === n.code ? this.parseChar(e, r) : (r.clss = "set",
                i.code > n.code && this.errors.push(r.err = "rangerev"),
                n.proxy = i.proxy = r,
                r.set = [i, r, n])
            }
        }, {
            key: "profile",
            set: function(e) {
                this._profile = e,
                this.string = this.token = this.errors = this.captureGroups = this.namedGroups = null
            }
        }]),
        e
    }();
    k.ANCHOR_TYPES = {
        bof: !0,
        eof: !0,
        bos: !0,
        eos: !0,
        abseos: !0,
        wordboundary: !0,
        notwordboundary: !0,
        prevmatchend: !0
    };
    var C = function(e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.cm = e,
            n._activeMarks = [],
            n._hoverMarks = [],
            n._hoverToken = null,
            n
        }
        return s(t, u),
        i(t, [{
            key: "clear",
            value: function() {
                var e = this;
                this.cm.operation(function() {
                    for (var t = e._activeMarks, n = 0, r = t.length; n < r; n++)
                        t[n].clear();
                    t.length = 0
                })
            }
        }, {
            key: "draw",
            value: function(e) {
                var n = this
                  , r = this.cm
                  , i = t.CSS_PREFIX;
                this.clear(),
                r.operation(function() {
                    for (var o = t.GROUP_CLASS_BY_TYPE, s = r.getDoc(), a = void 0, l = n._activeMarks; e; )
                        if (e.clear)
                            e = e.next;
                        else {
                            e = n._calcTokenPos(s, e);
                            var c = i + (e.clss || e.type);
                            e.err && (c += " " + i + "error"),
                            c && l.push(s.markText(e.startPos, e.endPos, {
                                className: c
                            })),
                            e.close && (a = n._calcTokenPos(s, e.close),
                            (c = o[e.clss || e.type]) && (c = c.replace("%depth%", e.depth),
                            l.push(s.markText(e.startPos, a.endPos, {
                                className: c
                            })))),
                            e = e.next
                        }
                })
            }
        }, {
            key: "_drawSelect",
            value: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.CSS_PREFIX + "selected"
                  , r = this.cm.getDoc()
                  , i = e.close || e;
                e.set && (i = e.set[e.set.length - 1],
                e = e.set[0]),
                this._calcTokenPos(r, i),
                this._calcTokenPos(r, e),
                this._hoverMarks.push(r.markText(e.startPos, i.endPos, {
                    className: n,
                    startStyle: n + "-left",
                    endStyle: n + "-right"
                }))
            }
        }, {
            key: "_calcTokenPos",
            value: function(e, t) {
                return t.startPos || null == t ? t : (t.startPos = e.posFromIndex(t.i),
                t.endPos = e.posFromIndex(t.i + t.l),
                t)
            }
        }, {
            key: "hoverToken",
            set: function(e) {
                if (!(e === this._hoverToken || e && e.set && -1 !== e.set.indexOf(this._hoverToken))) {
                    for (; this._hoverMarks.length; )
                        this._hoverMarks.pop().clear();
                    if (this._hoverToken = e,
                    e && (e.open ? this._drawSelect(e.open) : this._drawSelect(e),
                    e.related))
                        for (var n = 0, r = e.related.length; n < r; n++)
                            this._drawSelect(e.related[n], t.CSS_PREFIX + "related");
                    this.dispatchEvent("hover")
                }
            },
            get: function() {
                return this._hoverToken
            }
        }]),
        t
    }();
    C.CSS_PREFIX = "exp-",
    C.GROUP_CLASS_BY_TYPE = {
        set: C.CSS_PREFIX + "group-set",
        setnot: C.CSS_PREFIX + "group-set",
        group: C.CSS_PREFIX + "group-%depth%",
        lookaround: C.CSS_PREFIX + "group-%depth%"
    };
    var _ = function() {
        function e(t, n) {
            var i = this;
            r(this, e),
            this.editor = t,
            this.highlighter = n,
            this.isMouseDown = !1,
            this.token = null;
            var o = t.display.lineDiv;
            o.addEventListener("mousemove", function(e) {
                return i._handleMouseMove(e)
            }),
            o.addEventListener("mouseout", function(e) {
                return i._handleMouseOut(e)
            }),
            o.addEventListener("mousedown", function(e) {
                return i._handleMouseDown(e)
            })
        }
        return i(e, [{
            key: "_handleMouseMove",
            value: function(e) {
                if (!this.isMouseDown) {
                    var t = void 0
                      , n = this.editor
                      , r = this.token
                      , i = null;
                    if (e && r && null != (t = v.getCharIndexAt(n, e.clientX, e.clientY + window.pageYOffset)))
                        for (; r; ) {
                            if (t >= r.i && t < r.i + r.l) {
                                i = r;
                                break
                            }
                            r = r.next
                        }
                    for (; i; )
                        if (i.open)
                            i = i.open;
                        else {
                            if (!i.proxy)
                                break;
                            i = i.proxy
                        }
                    this.highlighter.hoverToken = i;
                    var o = null != t && v.getCharRect(n, t);
                    o && (o.right = o.left = e.clientX),
                    oe.tooltip.hover.show("ExpressionHover", oe.reference.tipForToken(i), e.clientX, o.bottom, !0, 0)
                }
            }
        }, {
            key: "_handleMouseOut",
            value: function(e) {
                this.highlighter.hoverToken = null,
                oe.tooltip.hover.hide("ExpressionHover")
            }
        }, {
            key: "_handleMouseDown",
            value: function(e) {
                var t = this;
                if (1 === e.which || 1 === e.button) {
                    this.isMouseDown = !0;
                    var n = void 0
                      , r = window.addEventListener ? window : document;
                    r.addEventListener("mouseup", n = function() {
                        r.removeEventListener("mouseup", n),
                        t.isMouseDown = !1
                    }
                    )
                }
            }
        }]),
        e
    }()
      , S = !0
      , L = {
        id: "core",
        flags: {
            g: "global",
            i: "caseinsensitive",
            m: "multiline",
            s: "dotall",
            u: "unicode",
            y: "sticky",
            x: "extended",
            U: "ungreedy"
        },
        escChars: "+*?^$\\.[]{}()|/".split("").reduce(function(e, t) {
            return e[t] = S,
            e
        }, {}),
        badEscChars: !1,
        escCharCodes: {
            0: 0,
            a: 7,
            t: 9,
            n: 10,
            v: 11,
            f: 12,
            r: 13,
            e: 27
        },
        escCharTypes: {
            A: "bos",
            b: "wordboundary",
            B: "notwordboundary",
            d: "digit",
            D: "notdigit",
            G: "prevmatchend",
            h: "hwhitespace",
            H: "nothwhitespace",
            K: "keepout",
            N: "notlinebreak",
            R: "linebreak",
            s: "whitespace",
            S: "notwhitespace",
            v: "vwhitespace",
            V: "notvwhitespace",
            w: "word",
            W: "notword",
            X: "unicodegrapheme",
            Z: "eos",
            z: "abseos"
        },
        charTypes: {
            ".": "dot",
            "|": "alt",
            $: "eof",
            "^": "bof",
            "?": "opt",
            "+": "plus",
            "*": "star"
        },
        unquantifiable: {
            quant: S,
            plus: S,
            star: S,
            opt: S,
            lazy: S,
            possessive: S,
            eof: S,
            bof: S,
            eos: S,
            abseos: S,
            alt: S,
            open: S,
            mode: S,
            comment: S,
            condition: S
        },
        unicodeScripts: {
            Arabic: S,
            Armenian: S,
            Avestan: S,
            Balinese: S,
            Bamum: S,
            Bassa_Vah: S,
            Batak: S,
            Bengali: S,
            Bopomofo: S,
            Brahmi: S,
            Braille: S,
            Buginese: S,
            Buhid: S,
            Canadian_Aboriginal: S,
            Carian: S,
            Caucasian_Albanian: S,
            Chakma: S,
            Cham: S,
            Cherokee: S,
            Common: S,
            Coptic: S,
            Cuneiform: S,
            Cypriot: S,
            Cyrillic: S,
            Deseret: S,
            Devanagari: S,
            Duployan: S,
            Egyptian_Hieroglyphs: S,
            Elbasan: S,
            Ethiopic: S,
            Georgian: S,
            Glagolitic: S,
            Gothic: S,
            Grantha: S,
            Greek: S,
            Gujarati: S,
            Gurmukhi: S,
            Han: S,
            Hangul: S,
            Hanunoo: S,
            Hebrew: S,
            Hiragana: S,
            Imperial_Aramaic: S,
            Inherited: S,
            Inscriptional_Pahlavi: S,
            Inscriptional_Parthian: S,
            Javanese: S,
            Kaithi: S,
            Kannada: S,
            Katakana: S,
            Kayah_Li: S,
            Kharoshthi: S,
            Khmer: S,
            Khojki: S,
            Khudawadi: S,
            Lao: S,
            Latin: S,
            Lepcha: S,
            Limbu: S,
            Linear_A: S,
            Linear_B: S,
            Lisu: S,
            Lycian: S,
            Lydian: S,
            Mahajani: S,
            Malayalam: S,
            Mandaic: S,
            Manichaean: S,
            Meetei_Mayek: S,
            Mende_Kikakui: S,
            Meroitic_Cursive: S,
            Meroitic_Hieroglyphs: S,
            Miao: S,
            Modi: S,
            Mongolian: S,
            Mro: S,
            Myanmar: S,
            Nabataean: S,
            New_Tai_Lue: S,
            Nko: S,
            Ogham: S,
            Ol_Chiki: S,
            Old_Italic: S,
            Old_North_Arabian: S,
            Old_Permic: S,
            Old_Persian: S,
            Old_South_Arabian: S,
            Old_Turkic: S,
            Oriya: S,
            Osmanya: S,
            Pahawh_Hmong: S,
            Palmyrene: S,
            Pau_Cin_Hau: S,
            Phags_Pa: S,
            Phoenician: S,
            Psalter_Pahlavi: S,
            Rejang: S,
            Runic: S,
            Samaritan: S,
            Saurashtra: S,
            Sharada: S,
            Shavian: S,
            Siddham: S,
            Sinhala: S,
            Sora_Sompeng: S,
            Sundanese: S,
            Syloti_Nagri: S,
            Syriac: S,
            Tagalog: S,
            Tagbanwa: S,
            Tai_Le: S,
            Tai_Tham: S,
            Tai_Viet: S,
            Takri: S,
            Tamil: S,
            Telugu: S,
            Thaana: S,
            Thai: S,
            Tibetan: S,
            Tifinagh: S,
            Tirhuta: S,
            Ugaritic: S,
            Vai: S,
            Warang_Citi: S,
            Yi: S
        },
        unicodeCategories: {
            C: S,
            Cc: S,
            Cf: S,
            Cn: S,
            Co: S,
            Cs: S,
            L: S,
            "L&": S,
            Ll: S,
            Lm: S,
            Lo: S,
            Lt: S,
            Lu: S,
            M: S,
            Mc: S,
            Me: S,
            Mn: S,
            N: S,
            Nd: S,
            Nl: S,
            No: S,
            P: S,
            Pc: S,
            Pd: S,
            Pe: S,
            Pf: S,
            Pi: S,
            Po: S,
            Ps: S,
            S: S,
            Sc: S,
            Sk: S,
            Sm: S,
            So: S,
            Z: S,
            Zl: S,
            Zp: S,
            Zs: S
        },
        posixCharClasses: {
            alnum: S,
            alpha: S,
            ascii: S,
            blank: S,
            cntrl: S,
            digit: S,
            graph: S,
            lower: S,
            print: S,
            punct: S,
            space: S,
            upper: S,
            word: S,
            xdigit: S
        },
        modes: {
            i: "caseinsensitive",
            s: "dotall",
            m: "multiline",
            x: "freespacing",
            J: "samename",
            U: "switchlazy"
        },
        tokens: {
            open: S,
            close: S,
            char: S,
            set: S,
            setnot: S,
            setclose: S,
            range: S,
            unicodecat: S,
            notunicodecat: S,
            unicodescript: S,
            notunicodescript: S,
            posixcharclass: S,
            escoctal: S,
            escunicodeu: S,
            escunicodeub: S,
            escunicodexb: S,
            escsequence: S,
            eschexadecimal: S,
            esccontrolchar: S,
            escoctalo: S,
            escchar: S,
            group: S,
            groupclose: S,
            noncapgroup: S,
            namedgroup: S,
            atomic: S,
            define: S,
            branchreset: S,
            poslookbehind: S,
            neglookbehind: S,
            poslookahead: S,
            neglookahead: S,
            namedref: S,
            numref: S,
            extnumref: S,
            recursion: S,
            numsubroutine: S,
            namedsubroutine: S,
            quant: S,
            possessive: S,
            lazy: S,
            conditional: S,
            condition: S,
            conditionalelse: S,
            conditionalgroup: S,
            mode: S,
            comment: S
        },
        substTokens: {
            subst_$esc: S,
            "subst_$&match": S,
            subst_$before: S,
            subst_$after: S,
            subst_$group: S,
            subst_$bgroup: S,
            subst_bsgroup: S,
            subst_group: S,
            subst_0match: S,
            subst_esc: S
        },
        config: {
            forwardref: S,
            nestedref: S,
            ctrlcodeerr: S,
            reftooctalalways: S,
            substdecomposeref: S,
            looseesc: S
        },
        docs: {}
    }
      , E = {
        id: "pcre",
        label: "PCRE",
        browser: !1,
        flags: {
            u: !1,
            y: !1
        },
        badEscChars: "uUlLN".split("").reduce(function(e, t) {
            return e[t] = !0,
            e
        }, {}),
        escCharCodes: {
            v: !1
        },
        tokens: {
            escunicodeu: !1,
            escunicodeub: !1
        },
        substTokens: {
            subst_$esc: !1,
            "subst_$&match": !1,
            subst_$before: !1,
            subst_$after: !1
        },
        config: {
            reftooctalalways: !1,
            substdecomposeref: !1,
            looseesc: !1
        },
        docs: {
            escoctal: {
                ext: "+<p>The syntax <code>\\o{FFF}</code> is also supported.</p>"
            },
            numref: {
                ext: "<p>There are multiple syntaxes for this feature: <code>\\1</code> <code>\\g1</code> <code>\\g{1}</code>.</p><p>The latter syntaxes support relative values preceded by <code>+</code> or <code>-</code>. For example <code>\\g-1</code> would match the group preceding the reference.</p>"
            },
            lazy: {
                ext: "+<p>This behaviour is reversed by the ungreedy (<code>U</code>) flag/modifier.</p>"
            }
        }
    }
      , T = !1
      , M = e("u")
      , R = e("y")
      , A = {
        id: "js",
        label: "JavaScript",
        browser: !0,
        flags: {
            s: T,
            x: T,
            u: M,
            y: R,
            U: T
        },
        escCharCodes: {
            a: T,
            e: T
        },
        escCharTypes: {
            A: T,
            G: T,
            h: T,
            H: T,
            K: T,
            N: T,
            R: T,
            v: T,
            V: T,
            X: T,
            Z: T,
            z: T
        },
        unicodeScripts: T,
        unicodeCategories: T,
        posixCharClasses: T,
        modes: T,
        tokens: {
            unicodecat: T,
            notunicodecat: T,
            unicodescript: T,
            notunicodescript: T,
            posixcharclass: T,
            escunicodeub: M,
            escunicodexb: T,
            escsequence: T,
            escoctalo: T,
            namedgroup: T,
            atomic: T,
            define: T,
            branchreset: T,
            poslookbehind: T,
            neglookbehind: T,
            namedref: T,
            extnumref: T,
            recursion: T,
            numsubroutine: T,
            namedsubroutine: T,
            possessive: T,
            conditional: T,
            conditionalif: T,
            conditionalelse: T,
            conditionalgroup: T,
            mode: T,
            comment: T
        },
        config: {
            forwardref: T,
            nestedref: T,
            ctrlcodeerr: T
        },
        substTokens: {
            subst_0match: T,
            subst_$bgroup: T,
            subst_bsgroup: T
        },
        docs: {
            subst_group: {
                ext: ""
            }
        }
    }
      , F = {
        core: L
    };
    F.pcre = t(L, E),
    F.js = t(L, A);
    var O = l(['<svg class="inline check icon"><use xlink:href="#check"></use></svg> ', ""], ['<svg class="inline check icon"><use xlink:href="#check"></use></svg> ', ""])
      , N = function(e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.el = e,
            n.delim = "/",
            n.lexer = new k,
            n._initUI(e),
            oe.flavor.on("change", function() {
                return n._onFlavorChange()
            }),
            n._onFlavorChange(),
            n
        }
        return s(t, u),
        i(t, [{
            key: "showFlags",
            value: function() {
                this.flagsList.selected = this.flags.split(""),
                oe.tooltip.toggle.toggleOn("flags", this.flagsEl, this.flagsBtn, !0, -2)
            }
        }, {
            key: "toggleFlag",
            value: function(e) {
                var t = this.flags
                  , n = t.indexOf(e);
                this.flags = n >= 0 ? t.replace(e, "") : t + e
            }
        }, {
            key: "showFlavors",
            value: function() {
                oe.tooltip.toggle.toggleOn("flavor", this.flavorEl, this.flavorBtn, !0, -2)
            }
        }, {
            key: "insert",
            value: function(e) {
                this.editor.replaceSelection(e, "end")
            }
        }, {
            key: "_initUI",
            value: function(e) {
                var n = this;
                this.editorEl = h.query("> .editor", e);
                var r = this.editor = v.create(this.editorEl, {
                    autofocus: !0,
                    maxLength: 2500,
                    singleLine: !0
                }, "100%", "100%");
                r.on("mousedown", function(e, t) {
                    return n._onEditorMouseDown(e, t)
                }),
                r.on("change", function(e, t) {
                    return n._onEditorChange(e, t)
                }),
                r.on("keydown", function(e, t) {
                    return n._onEditorKeyDown(e, t)
                }),
                r.toggleOverwrite = function() {}
                ,
                this.errorEl = h.query(".icon.alert", this.editorEl),
                this.errorEl.addEventListener("mouseenter", function(e) {
                    return n._onMouseError(e)
                }),
                this.errorEl.addEventListener("mouseleave", function(e) {
                    return n._onMouseError(e)
                }),
                this.highlighter = new C(r),
                this.hover = new _(r,this.highlighter),
                this._setInitialExpression(),
                this._initTooltips(e),
                this.value = t.DEFAULT_EXPRESSION
            }
        }, {
            key: "_setInitialExpression",
            value: function() {
                var e = this.editor;
                e.setValue("/./g"),
                e.getDoc().markText({
                    line: 0,
                    ch: 0
                }, {
                    line: 0,
                    ch: 1
                }, {
                    className: "exp-decorator",
                    readOnly: !0,
                    atomic: !0,
                    inclusiveLeft: !0
                }),
                e.getDoc().markText({
                    line: 0,
                    ch: 2
                }, {
                    line: 0,
                    ch: 4
                }, {
                    className: "exp-decorator",
                    readOnly: !1,
                    atomic: !0,
                    inclusiveRight: !0
                }),
                this._deferUpdate()
            }
        }, {
            key: "_deferUpdate",
            value: function() {
                var e = this;
                f.defer(function() {
                    return e._update()
                }, "Expression._update")
            }
        }, {
            key: "_update",
            value: function() {
                var e = this.editor.getValue();
                this.lexer.profile = oe.flavor.profile;
                var t = this.lexer.parse(e);
                h.toggleClass(this.editorEl, "error", !!this.lexer.errors.length),
                this.hover.token = t,
                this.highlighter.draw(t),
                this.dispatchEvent("change")
            }
        }, {
            key: "_initTooltips",
            value: function(e) {
                var t = this
                  , n = h.template(O, "label")
                  , r = oe.flavor.profiles.map(function(e) {
                    return {
                        id: e.id,
                        label: e.label + " (" + (e.browser ? "Browser" : "Server") + ")"
                    }
                });
                this.flavorBtn = h.query("section.expression .button.flavor", e),
                this.flavorEl = h.query("#library #tooltip-flavor"),
                this.flavorList = new y(h.query("ul.list", this.flavorEl),{
                    data: r,
                    template: n
                }),
                this.flavorList.on("change", function() {
                    return t._onFlavorListChange()
                }),
                this.flavorBtn.addEventListener("click", function(e) {
                    return t.showFlavors()
                }),
                h.query(".icon.help", this.flavorEl).addEventListener("click", function() {
                    return oe.sidebar.goto("engine")
                }),
                this.flagsBtn = h.query("section.expression .button.flags", e),
                this.flagsEl = h.query("#library #tooltip-flags"),
                this.flagsList = new y(h.query("ul.list", this.flagsEl),{
                    data: [],
                    multi: !0,
                    template: n
                }),
                this.flagsList.on("change", function() {
                    return t._onFlagListChange()
                }),
                this.flagsBtn.addEventListener("click", function(e) {
                    return t.showFlags()
                }),
                h.query(".icon.help", this.flagsEl).addEventListener("click", function() {
                    return oe.sidebar.goto("flags")
                })
            }
        }, {
            key: "_onFlavorListChange",
            value: function() {
                oe.tooltip.toggle.hide("flavor"),
                oe.flavor.value = this.flavorList.selected
            }
        }, {
            key: "_onFlagListChange",
            value: function() {
                var e = this.flagsList.selected;
                this.flags = e ? e.join("") : ""
            }
        }, {
            key: "_onFlavorChange",
            value: function() {
                var e = oe.flavor.profile;
                this.flavorList.selected = e.id,
                h.query("> .label", this.flavorBtn).innerText = e.label;
                var n = t.FLAGS.split("").filter(function(t) {
                    return !!e.flags[t]
                })
                  , r = t.FLAG_LABELS;
                this.flagsList.data = n.map(function(e) {
                    return {
                        id: e,
                        label: r[e]
                    }
                }),
                this.flags = this.flags.split("").filter(function(t) {
                    return !!e.flags[t]
                }).join("")
            }
        }, {
            key: "_onEditorMouseDown",
            value: function(e, t) {
                v.getCharIndexAt(e, t.clientX - .6 * e.defaultCharWidth(), t.clientY) >= e.getValue().lastIndexOf(this.delim) && this.showFlags()
            }
        }, {
            key: "_onEditorChange",
            value: function(e, t) {
                this._deferUpdate();
                var n = t.text[0];
                n.length < 3 || !n.match(/^\/.+[^\\]\/[a-z]*$/gi) || 1 !== t.from.ch || t.to.ch != 1 + t.removed[0].length || (this.value = n)
            }
        }, {
            key: "_onEditorKeyDown",
            value: function(e, t) {
                (t.ctrlKey || t.metaKey) && 68 == t.keyCode && (t.preventDefault(),
                this.pattern = "")
            }
        }, {
            key: "_onMouseError",
            value: function(e) {
                var t = oe.tooltip.hover
                  , n = this.lexer.errors;
                if ("mouseleave" === e.type)
                    return t.hide("error");
                if (0 !== n.length) {
                    var r = 1 === n.length ? oe.reference.getError(n[0]) : "Errors in the Expression are underlined in <span class='exp-error'>red</span>. Roll over them for details.";
                    t.showOn("error", "<span class='error'>PARSE ERROR:</span> " + r, this.errorEl)
                }
            }
        }, {
            key: "value",
            set: function(e) {
                var n = f.decomposeRegEx(e || t.DEFAULT_EXPRESSION, this.delim);
                this.pattern = n.source,
                this.flags = n.flags
            },
            get: function() {
                return this.editor.getValue()
            }
        }, {
            key: "pattern",
            set: function(e) {
                var t = this.editor.getValue().lastIndexOf(this.delim);
                this.editor.replaceRange(e, {
                    line: 0,
                    ch: 1
                }, {
                    line: 0,
                    ch: t
                }),
                this._deferUpdate()
            },
            get: function() {
                return f.decomposeRegEx(this.editor.getValue(), this.delim).source
            }
        }, {
            key: "flags",
            set: function(e) {
                e = oe.flavor.validateFlagsStr(e),
                x.event("set_flags", "engagement", {
                    flags: e
                });
                var t = this.editor.getValue()
                  , n = t.lastIndexOf(this.delim);
                this.editor.replaceRange(e, {
                    line: 0,
                    ch: n + 1
                }, {
                    line: 0,
                    ch: t.length
                })
            },
            get: function() {
                return f.decomposeRegEx(this.editor.getValue(), this.delim).flags
            }
        }, {
            key: "token",
            get: function() {
                return this.lexer.token
            }
        }]),
        t
    }();
    N.DEFAULT_EXPRESSION = "/([A-Z])\\w+/g",
    N.FLAGS = "gimsuxyU",
    N.FLAG_LABELS = {
        g: "<em>g</em>lobal",
        i: "case <em>i</em>nsensitive",
        m: "<em>m</em>ultiline",
        s: "<em>s</em>ingle line (dotall)",
        u: "<em>u</em>nicode",
        x: "e<em>x</em>tended",
        y: "stick<em>y</em>",
        U: "<em>U</em>ngreedy"
    };
    var I = function() {
        function e(t, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "#6CF"
              , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#888";
            r(this, e),
            this.lineSpacing = 2,
            this.capWidth = 4,
            this.lastBottom = -1,
            this.lastRight = -1,
            this.editor = t,
            this.canvas = n,
            this.fill = i,
            this.stroke = o
        }
        return i(e, [{
            key: "_deferUpdate",
            value: function() {
                var e = this;
                f.defer(function() {
                    return e._update()
                }, "TextHighlighter._update")
            }
        }, {
            key: "_update",
            value: function() {
                this.clear();
                var e = this._matches
                  , t = this._hoverMatch
                  , n = this._selectedMatch;
                if (e && e.length) {
                    var r = this.editor
                      , i = r.getDoc()
                      , o = this.canvas.getContext("2d");
                    o.fillStyle = this.fill,
                    o.strokeStyle = this.stroke,
                    o.lineWidth = 2;
                    for (var s = r.getScrollInfo(), a = r.indexFromPos(r.coordsChar({
                        left: 0,
                        top: s.top
                    }, "local")), l = r.indexFromPos(r.coordsChar({
                        left: s.clientWidth,
                        top: s.top + s.clientHeight
                    }, "local")), c = 0, u = e.length; c < u; c++) {
                        var h = e[c]
                          , d = h.i
                          , f = h.i + h.l - 1;
                        if (d > l)
                            break;
                        if (!(f < a || f < d)) {
                            var p = h.startPos || (h.startPos = i.posFromIndex(d))
                              , g = h.endPos || (h.endPos = i.posFromIndex(f))
                              , v = h === t || h === n
                              , m = r.charCoords(p, "local")
                              , y = r.charCoords(g, "local");
                            if (m.bottom === y.bottom)
                                this.drawHighlight(o, m.left, m.top, y.right, y.bottom, s.top, !1, !1, v);
                            else {
                                var b = r.getScrollInfo().width
                                  , w = r.defaultTextHeight();
                                this.drawHighlight(o, m.left, m.top, b - 2, m.bottom, s.top, !1, !0, v);
                                for (var x = m.top; (x += w) < y.top - 1; )
                                    this.drawHighlight(o, 0, x, b - 2, x + m.bottom - m.top, s.top, !0, !0, v);
                                this.drawHighlight(o, 0, y.top, y.right, y.bottom, s.top, !0, !1, v)
                            }
                        }
                    }
                }
            }
        }, {
            key: "drawHighlight",
            value: function(e, t, n, r, i, o, s, a, l) {
                var c = this.capWidth;
                if (!(r < 0 || t + 1 >= r)) {
                    t = t + .5 | 0,
                    r = r + .5 | 0,
                    i = i + .5 | 0,
                    (n = (n + .5 | 0) + this.lineSpacing) + 1 > this.lastBottom ? this.lastBottom = i : t < this.lastRight && (t = this.lastRight),
                    this.lastRight = r;
                    var u = e.globalAlpha;
                    s && (e.globalAlpha = .5 * u,
                    e.fillRect(t + 1 | 0, n - o, c + 1, i - n),
                    t += c),
                    a && (e.globalAlpha = .5 * u,
                    e.fillRect(r - c - 1 | 0, n - o, c + 1, i - n),
                    r -= c),
                    e.globalAlpha = u,
                    e.fillRect(t + 1, n - o, r - t - 1, i - n),
                    l && e.strokeRect(t + 1, n - o, r - t - 1, i - n)
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.canvas.width = this.canvas.width,
                this.lastBottom = -1
            }
        }, {
            key: "matches",
            set: function(e) {
                this._matches = e,
                this._deferUpdate()
            }
        }, {
            key: "hoverMatch",
            set: function(e) {
                this._hoverMatch = e,
                this._deferUpdate()
            }
        }, {
            key: "selectedMatch",
            set: function(e) {
                this._selectedMatch = e,
                this._deferUpdate()
            }
        }]),
        e
    }()
      , P = function() {
        function e(t, n) {
            var i = this;
            r(this, e),
            this.editor = t,
            this.highlighter = n,
            this.matches = null;
            var o = t.display.lineDiv;
            o.addEventListener("mousemove", function(e) {
                return i._handleMouseMove(e)
            }),
            o.addEventListener("mouseout", function(e) {
                return i._handleMouseOut(e)
            })
        }
        return i(e, [{
            key: "_handleMouseMove",
            value: function(e) {
                var t = void 0
                  , n = this.editor
                  , r = void 0
                  , i = this.matches;
                i && i.length && null != (t = v.getCharIndexAt(n, e.clientX, e.clientY + window.pageYOffset)) && (r = this.highlighter.hoverMatch = oe.text.getMatchAt(t));
                var o = null != t && v.getCharRect(n, t);
                o && (o.right = o.left = e.clientX),
                oe.tooltip.hover.show("TextHover", oe.reference.tipForMatch(r, n.getValue()), e.clientX, o.bottom, !0, 0)
            }
        }, {
            key: "_handleMouseOut",
            value: function(e) {
                this.highlighter.hoverMatch = null,
                oe.tooltip.hover.hide("TextHover")
            }
        }]),
        e
    }()
      , D = function(e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.el = e,
            n._initUI(e),
            oe.on("result", function() {
                return n._setResult(oe.result)
            }),
            n
        }
        return s(t, u),
        i(t, [{
            key: "getMatchValue",
            value: function(e) {
                return e ? this.value.substr(e.i, e.l) : null
            }
        }, {
            key: "getMatchAt",
            value: function(e, t) {
                var n = void 0
                  , r = t ? -1 : 0
                  , i = this._result && this._result.matches;
                if (!i)
                    return null;
                for (var o = 0, s = i.length; o < s; o++)
                    if (!((n = i[o]).l + n.i - 1 < e + r)) {
                        if (n.i > e)
                            break;
                        return n
                    }
                return null
            }
        }, {
            key: "_initUI",
            value: function(e) {
                var t = this;
                this.resultEl = h.query("> header .result", e),
                this.resultEl.addEventListener("mouseenter", function(e) {
                    return t._mouseResult(e)
                }),
                this.resultEl.addEventListener("mouseleave", function(e) {
                    return t._mouseResult(e)
                });
                var n = h.query("> .editor > .pad", e);
                this.defaultText = h.query("textarea", n).value;
                var r = this.editor = v.create(h.empty(n), {
                    lineWrapping: !0
                }, "100%", "100%");
                r.setValue(this.defaultText),
                r.on("change", function() {
                    return t._change()
                }),
                r.on("scroll", function() {
                    return t._update()
                }),
                r.on("cursorActivity", function() {
                    return t._updateSelected()
                });
                var i = h.create("iframe", "resizedetector", null, n).contentWindow
                  , o = this.canvas = h.create("canvas", "highlights", null, n);
                n.appendChild(r.display.wrapper),
                i.onresize = function() {
                    t._startResize(),
                    f.defer(function() {
                        return t._handleResize(i)
                    }, "text_resize", 250)
                }
                ,
                i.onresize(),
                this.highlighter = new I(r,o,h.getCSSValue("match", "color"),h.getCSSValue("selected-stroke", "color")),
                this.hover = new P(r,this.highlighter)
            }
        }, {
            key: "_setResult",
            value: function(e) {
                this._result = e,
                this._updateEmptyCount(),
                this._updateResult(),
                this._deferUpdate()
            }
        }, {
            key: "_updateResult",
            value: function() {
                var e = this._result
                  , t = e && e.matches
                  , n = t && t.length
                  , r = this.resultEl;
                h.removeClass(r, "error matches"),
                e && e.error ? (r.innerText = "ERROR",
                h.addClass(r, "error")) : n ? (r.innerHTML = n + " match" + (n > 1 ? "es" : "") + (this._emptyCount ? "*" : "") + (null != e.time ? "<em> (" + parseFloat(e.time).toFixed(1) + "ms)</em>" : ""),
                h.addClass(r, "matches")) : r.innerText = "No match",
                this._updateSelected()
            }
        }, {
            key: "_updateSelected",
            value: function() {
                var e = this.selectedMatch;
                this.highlighter.selectedMatch !== e && (this.highlighter.selectedMatch = e,
                this.dispatchEvent("select"))
            }
        }, {
            key: "_change",
            value: function() {
                this.dispatchEvent("change")
            }
        }, {
            key: "_deferUpdate",
            value: function() {
                var e = this;
                f.defer(function() {
                    return e._update()
                }, "Text._update")
            }
        }, {
            key: "_update",
            value: function() {
                var e = this._result
                  , t = e && e.matches;
                this.hover.matches = this.highlighter.matches = t
            }
        }, {
            key: "_startResize",
            value: function() {
                var e = this.canvas
                  , t = e.style;
                t.visibility = "hidden",
                t.opacity = 0,
                e.width = e.height = 1
            }
        }, {
            key: "_mouseResult",
            value: function(e) {
                var t = oe.tooltip.hover
                  , n = this._result
                  , r = n && n.error
                  , i = void 0;
                if ("mouseleave" === e.type)
                    return t.hide("result");
                if (r)
                    i = "<span class='error'>EXEC ERROR:</span> " + this._errorText(r);
                else {
                    var o = n && n.matches && n.matches.length;
                    i = (o || "No") + " match" + (o > 1 ? "es" : "") + " found in " + this.value.length + " characters",
                    i += this._emptyCount ? ", including " + this._emptyCount + " empty matches (* not displayed)." : ".";
                    var s = this.editor
                      , a = s.listSelections()[0]
                      , l = a.head
                      , c = s.indexFromPos(l)
                      , u = s.indexFromPos(a.anchor)
                      , h = Math.abs(c - u);
                    i += "<hr>Insertion point: line " + l.line + ", col " + l.ch + ", index " + c,
                    i += h > 0 ? " (" + h + " character" + (1 === h ? "" : "s") + " selected)" : ""
                }
                t.showOn("result", i, this.resultEl, !1, -2)
            }
        }, {
            key: "_updateEmptyCount",
            value: function() {
                var e = this._result
                  , t = e && e.matches;
                this._emptyCount = t ? t.reduce(function(e, t) {
                    return e + (t.l ? 0 : 1)
                }, 0) : 0
            }
        }, {
            key: "_errorText",
            value: function(e) {
                return e.message || oe.reference.getError(e.id)
            }
        }, {
            key: "_handleResize",
            value: function(e) {
                var t = this.canvas
                  , n = t.style;
                n.visibility = n.opacity = "",
                t.width = e.innerWidth,
                t.height = e.innerHeight,
                this.editor.refresh(),
                this._deferUpdate()
            }
        }, {
            key: "value",
            set: function(e) {
                this.editor.setValue(e || this.defaultText)
            },
            get: function() {
                return this.editor.getValue()
            }
        }, {
            key: "selectedMatch",
            get: function() {
                var e = this.editor;
                return this.getMatchAt(e.indexFromPos(e.getCursor()), !0)
            }
        }]),
        t
    }()
      , H = function() {
        function e(t) {
            var n = this;
            r(this, e),
            this.el = t,
            h.addClass(t, "explain"),
            this._update(),
            this._bound_handleEvent = function(e) {
                return n._handleEvent(e)
            }
            ,
            oe.expression.addEventListener("change", this._bound_handleEvent),
            oe.expression.highlighter.addEventListener("hover", this._bound_handleEvent)
        }
        return i(e, [{
            key: "cleanup",
            value: function() {
                h.empty(this.el),
                h.removeClass(this.el, "explain"),
                oe.expression.removeEventListener("change", this._bound_handleEvent),
                oe.expression.highlighter.removeEventListener("hover", this._bound_handleEvent)
            }
        }, {
            key: "_update",
            value: function() {
                var e = h.empty(this.el)
                  , t = oe.expression.token
                  , n = oe.expression.value;
                if (this._divs = [],
                t && "close" !== t.next.type) {
                    for (e.innerHTML = "<span class='desc'>Roll-over elements below to highlight in the Expression above. Click to open in Reference.</span>"; (t = t.next) && "close" !== t.type; )
                        if (!(t.proxy || t.open && t.open.proxy)) {
                            var r = C.GROUP_CLASS_BY_TYPE
                              , i = C.CSS_PREFIX
                              , o = t.i
                              , s = t.i + t.l
                              , a = n.substring(o, s).replace("<", "&lt;");
                            if (t.set) {
                                var l = t.set[0]
                                  , c = t.set[2];
                                a = "<span class='" + i + (l.clss || l.type) + "'>" + n.substring(l.i, l.i + l.l) + "</span>",
                                a += n.substring(o, s),
                                a += "<span class='" + i + (c.clss || c.type) + "'>" + n.substring(c.i, c.i + c.l) + "</span>"
                            }
                            var u = i + (t.clss || t.type);
                            a = "<code class='token " + u + "'>" + a + "</code> ",
                            t.open ? a += "&nbsp;" : a += oe.reference.tipForToken(t);
                            var d = h.create("div", null, a, e);
                            if (t.close) {
                                if ((u = r[t.clss || t.type]) && (u = u.replace("%depth%", Math.min(4, t.depth)),
                                h.addClass(d, u)),
                                t.depth > 3) {
                                    d.innerHTML = "So... you wanted to see what would happen if you just kept nesting groups, eh? Well, this is it. I was going to reward your curiosity with a RegEx joke, but a quick search on google reveals that not even the collective wisdom of the internet can make regular expressions funny. Well, except the whole 'now you've got two problems' shtick, but you've probably heard that one already. Wasn't really worth the effort, was it?",
                                    t = t.close,
                                    this._divs.push(d);
                                    continue
                                }
                                e = d
                            }
                            d.token = t,
                            t.open && (h.addClass(d, "close"),
                            d.proxy = e,
                            e = e.parentNode),
                            t.err && h.addClass(d, "error"),
                            t.open || (d.addEventListener("mouseover", this._handleMouseEvent),
                            d.addEventListener("mouseout", this._handleMouseEvent),
                            d.addEventListener("click", this._handleMouseEvent)),
                            "quant" === t.clss || "lazy" === t.type || "possessive" === t.type ? this._insertApplied(d) : this._divs.push(d)
                        }
                } else
                    e.innerHTML = "<span class='desc'>Enter an Expression above and it will be explained here.</span>"
            }
        }, {
            key: "_insertApplied",
            value: function(e) {
                for (var t = this._divs, n = e.token.prv, r = void 0, i = t.length; (r = t[--i]) && r.token !== n; )
                    ;
                r = r.proxy || r,
                t.splice(i, 0, e),
                r.insertAdjacentElement("afterend", e),
                h.addClass(e, "applied")
            }
        }, {
            key: "_handleHoverChange",
            value: function() {
                var e = oe.expression.highlighter.hoverToken;
                if (h.removeClass(h.queryAll("div.selected", this.el), "selected"),
                h.removeClass(h.queryAll("div.related", this.el), "related"),
                e) {
                    var t = this._findDiv(e);
                    if (h.addClass(t, "selected"),
                    e.related)
                        for (var n = 0, r = e.related.length; n < r; n++)
                            h.addClass(this._findDiv(e.related[n]), "related")
                }
            }
        }, {
            key: "_findDiv",
            value: function(e) {
                return f.find(this._divs, function(t) {
                    return t.token === e
                })
            }
        }, {
            key: "_handleMouseEvent",
            value: function(e) {
                var t = e.type
                  , n = e.currentTarget.token;
                "click" == t ? oe.sidebar.showToken(n) : oe.expression.highlighter.hoverToken = "mouseout" === t ? null : n,
                e.stopPropagation()
            }
        }, {
            key: "_handleEvent",
            value: function(e) {
                "change" === e.type ? this._update() : "hover" === e.type && this._handleHoverChange()
            }
        }]),
        e
    }()
      , q = function() {
        function e(t) {
            var n = this;
            r(this, e),
            this.el = t,
            h.addClass(t, "details"),
            this._update(),
            this._bound_handleEvent = function(e) {
                return n._handleEvent(e)
            }
            ,
            oe.addEventListener("result", this._bound_handleEvent),
            oe.text.addEventListener("select", this._bound_handleEvent)
        }
        return i(e, [{
            key: "cleanup",
            value: function() {
                h.empty(this.el),
                h.removeClass(this.el, "details"),
                oe.removeEventListener("result", this._bound_handleEvent),
                oe.text.removeEventListener("select", this._bound_handleEvent)
            }
        }, {
            key: "_update",
            value: function() {
                h.empty(this.el),
                h.create("div", "desc", "Click a <span class='match'>match</span> above to display match &amp; group details. Mouse over a <code>Group</code> row to highlight it in the Expression.", this.el),
                this._addMatch(oe.text.selectedMatch, oe.text.value)
            }
        }, {
            key: "_addMatch",
            value: function(e, t) {
                if (e) {
                    var n = e.groups
                      , r = n && n.length
                      , i = r && null != n[0].i
                      , o = this._getMatchVal(e, t)
                      , s = ""
                      , a = e.i + e.l
                      , l = oe.expression.lexer.captureGroups
                      , c = h.create("table", null, null, this.el)
                      , u = h.create("tr", "match", "<td>Match " + e.num + "</td><td>" + this._getRangeStr(e) + "</td><td></td>", c);
                    if (r) {
                        for (var d = [], p = e.i, g = 0; g <= r; g++) {
                            var v = n[g]
                              , m = v ? v.i : a
                              , y = g + 1
                              , b = l[g];
                            if (i)
                                for (var w = d.length - 1; w >= 0; w--) {
                                    var x = d[w]
                                      , k = x.i + x.l;
                                    if (k > m)
                                        break;
                                    d.pop(),
                                    s += f.htmlSafe(t.substring(p, k)) + "</span>",
                                    p = k
                                }
                            if (!v)
                                break;
                            v.l && (s += f.htmlSafe(t.substring(p, m)) + "<span class='group-" + y % 6 + " num-" + y + "'>",
                            d.push(v),
                            p = m);
                            var C = "<span" + (i ? " class='group-" + y % 6 + "'" : "") + ">" + this._getMatchVal(v, t) + "</span>"
                              , _ = b.name ? "'" + b.name + "'" : "Group " + y
                              , S = h.create("tr", "group", "<td>" + _ + "</td><td>" + this._getRangeStr(v) + "</td><td>" + C + "</td>", c);
                            S.token = b,
                            S.addEventListener("mouseover", this._handleMouseEvent),
                            S.addEventListener("mouseout", this._handleMouseEvent)
                        }
                        i && (s += f.htmlSafe(t.substring(p, a)))
                    } else
                        h.create("tr", "nogroup", "<td colspan='3'>No groups.</td>", c);
                    h.query("td:last-child", u).innerHTML = s || o
                }
            }
        }, {
            key: "_getMatchVal",
            value: function(e, t) {
                var n = e.s || (void 0 === e.i ? "" : t.substr(e.i, e.l));
                return n ? f.htmlSafe(n) : "<em>&lt;empty&gt;</em>"
            }
        }, {
            key: "_getRangeStr",
            value: function(e) {
                return null != e.i ? e.i + "-" + (e.i + e.l - 1) : "n/a"
            }
        }, {
            key: "_handleEvent",
            value: function(e) {
                var t = this;
                f.defer(function() {
                    return t._update()
                }, "Details._update")
            }
        }, {
            key: "_handleMouseEvent",
            value: function(e) {
                var t = e.type
                  , n = e.currentTarget.token;
                oe.expression.highlighter.hoverToken = "mouseout" === t ? null : n,
                "mouseover" === t ? h.addClass(h.query("span.num-" + n.num, this.el), "hover") : h.removeClass(h.query("span.hover", this.el), "hover"),
                e.stopPropagation()
            }
        }]),
        e
    }()
      , W = function() {
        function e(t, n) {
            var i = this;
            r(this, e),
            this.el = t,
            this.editor = n,
            this._bound_handleEvent = function(e) {
                return i._handleEvent(e)
            }
            ,
            oe.addEventListener("result", this._bound_handleEvent),
            this._initUI(),
            this._update()
        }
        return i(e, [{
            key: "cleanup",
            value: function() {
                h.empty(this.el),
                this.output.value = "",
                h.removeClass(this.el, "details"),
                oe.removeEventListener("result", this._bound_handleEvent)
            }
        }, {
            key: "_initUI",
            value: function() {
                this.output = h.create("textarea", null, null, this.el),
                this.output.readOnly = !0
            }
        }, {
            key: "_update",
            value: function() {
                var e = oe.result && oe.result.tool
                  , t = e && e.result;
                this.output.value = t || "no result"
            }
        }, {
            key: "_handleEvent",
            value: function(e) {
                var t = this;
                f.defer(function() {
                    return t._update()
                }, "Replace._update")
            }
        }]),
        e
    }()
      , B = function() {
        function e() {
            r(this, e),
            this.profile = null
        }
        return i(e, [{
            key: "parse",
            value: function(e) {
                if (!this._profile)
                    return null;
                this.token = null,
                this.string = e,
                this.errors = [];
                for (var t = oe.expression.lexer.captureGroups, n = null, r = void 0, i = void 0, o = 0, s = e.length; o < s; o += r.l)
                    r = {
                        prev: n,
                        i: o,
                        l: 1,
                        subst: !0
                    },
                    "$" === (i = e[o]) && o + 1 < s ? this.parseDollar(e, r, t) : "\\" == i && o + 1 < s && this.parseBackSlash(e, r, t),
                    r.type || (r.type = "char",
                    r.code = i.charCodeAt(0)),
                    n && (n.next = r),
                    this.token || (this.token = r),
                    r.err && this.errors.push(r.err),
                    n = r;
                return this.token
            }
        }, {
            key: "parseBackSlash",
            value: function(t, n, r) {
                var i = void 0
                  , o = t.substr(n.i)
                  , s = this._profile;
                s.substTokens.subst_bsgroup && (i = o.match(/^\\(\d\d?)/)) ? this._getRef(i[1], n, r, "subst_bsgroup") : (i = o.match(e.SUBST_ESC_RE)) && ("u" === i[1][0] ? (n.type = "escunicode",
                n.code = parseInt(i[2], 16)) : (n.code = s.escCharCodes[i[1]],
                n.type = "esc_" + n.code),
                n.type && (n.clss = "esc",
                n.l += i[1].length))
            }
        }, {
            key: "parseDollar",
            value: function(t, n, r) {
                var i = t.substr(n.i + 1).match(/^([$&`']|\d\d?|{\d\d?})/);
                if (i) {
                    var o = i[1]
                      , s = e.$_TYPES[o]
                      , a = this._profile;
                    if (s) {
                        if (!a.substTokens[s])
                            return;
                        n.type = s,
                        n.clss = "subst",
                        n.l += o.length
                    } else
                        this._getRef(o, n, r, "{" === o[0] ? "subst_$bgroup" : "subst_$group")
                }
            }
        }, {
            key: "_getRef",
            value: function(e, t, n, r) {
                if (this._profile.substTokens[r]) {
                    var i = parseInt(e.match(/\d\d?/)[0])
                      , o = 0;
                    !this._profile.config.substdecomposeref || n[i - 1] ? o = e.length : i >= 10 && n[(i = i / 10 | 0) - 1] && (o = e.length - 1),
                    o && (t.l += o,
                    t.type = i > 0 ? "subst_group" : "subst_0match",
                    t.clss = "subst",
                    i > 0 && (t.group = n[i - 1]))
                }
            }
        }, {
            key: "profile",
            set: function(e) {
                this._profile = e,
                this.string = this.token = this.errors = null
            }
        }]),
        e
    }();
    B.$_TYPES = {
        $: "subst_$esc",
        "&": "subst_$&match",
        "`": "subst_$before",
        "'": "subst_$after",
        0: "subst_0match"
    },
    B.SUBST_ESC_RE = new RegExp("^" + f.SUBST_ESC_RE.source,"i");
    var z = function(e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.el = e,
            n._initUI(),
            n.value = null,
            n
        }
        return s(t, u),
        i(t, [{
            key: "show",
            value: function(e) {
                if (e && e !== this._toolId) {
                    x.page("tool/" + e),
                    this.toolList.selected = this._toolId = e;
                    var t = "replace" === e || "list" === e;
                    this._tool && this._tool.cleanup(),
                    h.toggleClass(h.query("> article", this.el), "showinput", t),
                    t && (this.editor.setValue(this._toolValues[e]),
                    this.editor.refresh(),
                    this.editor.focus()),
                    "explain" === e ? this._tool = new H(this.contentEl) : "details" === e ? this._tool = new q(this.contentEl) : "replace" !== e && "list" !== e || (this._tool = new W(this.resultEl,this.editor)),
                    this._toolId = e,
                    this._updateHighlights()
                }
            }
        }, {
            key: "_initUI",
            value: function() {
                var e = this
                  , t = this.el;
                this.headerEl = h.query("header", this.el),
                this.headerEl.addEventListener("click", function(t) {
                    return e._handleHeaderClick(t)
                }),
                this.contentEl = h.query("> article > .content", t),
                this.resultEl = h.query("> article > .inputtool > .result", t),
                this.toolListEl = h.query(".toollist", this.headerEl);
                var n = ["Replace", "List", "Details", "Explain"].map(function(e) {
                    return {
                        label: e,
                        id: e.toLowerCase()
                    }
                });
                this.toolList = new y(this.toolListEl,{
                    data: n
                }),
                this.toolList.on("change", function() {
                    return e._handleListChange()
                });
                var r = this.editor = v.create(h.query(".inputtool .editor", t), {
                    maxLength: 2500,
                    singleLine: !0
                }, "100%", "100%");
                h.query(".help.icon", t).addEventListener("click", function() {
                    return oe.sidebar.goto(e._toolId)
                }),
                r.on("change", function() {
                    return e._handleEditorChange()
                }),
                oe.flavor.on("change", function() {
                    return e._updateHighlights()
                }),
                oe.expression.on("change", function() {
                    return e._updateHighlights()
                }),
                this.lexer = new B,
                this.highlighter = new C(r),
                this.hover = new _(r,this.highlighter)
            }
        }, {
            key: "_handleEditorChange",
            value: function() {
                this._updateHighlights(),
                this._toolValues[this._toolId] = this.editor.getValue(),
                this.dispatchEvent("change")
            }
        }, {
            key: "_updateHighlights",
            value: function() {
                if (this.hasInput) {
                    this.lexer.profile = oe.flavor.profile;
                    var e = this.lexer.parse(this.editor.getValue());
                    this.highlighter.draw(e),
                    this.hover.token = e
                }
            }
        }, {
            key: "_handleListChange",
            value: function() {
                this.show(this.toolList.selected)
            }
        }, {
            key: "_handleHeaderClick",
            value: function(e) {
                !h.hasClass(this.el, "closed") && this.toolListEl.contains(e.target) || h.togglePanel(this.el, "article")
            }
        }, {
            key: "value",
            set: function(e) {
                e ? (this.show(e.id),
                null != e.input && this.editor.setValue(e.input)) : (this.show("explain"),
                this._toolValues = f.copy({}, t.DEFAULT_VALUES))
            },
            get: function() {
                return {
                    id: this._toolId,
                    input: this.input
                }
            }
        }, {
            key: "input",
            get: function() {
                return this.hasInput ? this.editor.getValue() : null
            }
        }, {
            key: "hasInput",
            get: function() {
                var e = this._toolId;
                return "replace" === e || "list" === e
            }
        }]),
        t
    }();
    z.DEFAULT_VALUES = {
        replace: "<< $& >>",
        list: "$&\\n"
    };
    var U = {};
    U.id = "home",
    U.label = "Menu",
    U.desc = "[from HTML]",
    U.kids = [{
        label: "Help",
        id: "help",
        desc: "Help for the RegExr application. See the <b>Reference</b> for help with Regular Expressions.",
        kids: [{
            label: "About",
            desc: "Created by <a href='http://twitter.com/gskinner/' target='_blank'>Grant Skinner</a> and the <a href='http://gskinner.com/' target='_blank'>gskinner</a> team, using the <a href='http://createjs.com/' target='_blank'>CreateJS</a> & <a href='http://codemirror.net/' target='_blank'>CodeMirror</a> libraries.<p>You can provide feedback or log bugs on <a href='http://github.com/gskinner/regexr/' target='_blank'>GitHub</a>.</p>"
        }, {
            label: "Getting started",
            desc: "RegExr provides real-time visual results, syntax highlighting, tooltips, and undo/redo ({{getCtrlKey()}}-Z / Y) so it's easy and fun to explore Regular Expressions.<p>Browse through the <b>Reference</b> and test different tokens to see what they do, then check out the <b>Community</b> to see example patterns.</p><p>You can also <b>Save</b> your patterns for later reference, or to share with others. <b>Sign In</b> to ensure you don't lose your patterns.</p>",
            kids: [{
                label: "Expression panel",
                desc: "This is where you enter a regular expression to test. The results in the <b>Text</b> and <b>Tools</b> panel will update as you type.Roll over the expression for information on each token.<p>The buttons to the right allow you to switch RegEx engines, or edit the expression flags.</p>"
            }, {
                label: "Text panel",
                desc: "This is where you enter text to test your expression against. Drag & drop a text file to load its contents.<p>Matches will be highlighted as you type. Roll over a match for information on the match and its capture groups. The match count and execution time are shown in the title bar.</p><p>Lighter colored caps at the start or end of a line indicate the match continues between lines.</p>"
            }, {
                label: "Tools panel",
                desc: "Click the <b>Tools</b> title bar below the <b>Text</b> panel to show or hide the <b>Tools</b> panel.<p>Tools provide different ways of working with or exploring your results.</p>",
                kids: [{
                    label: "Replace",
                    id: "replace",
                    desc: "The <b>Replace</b> tool replaces matches with a specified string or pattern.<p>Matches in the <b>Text</b> panel are replaced by the substitution string & displayed as you type.</p><p>Substitution tokens and escaped characters are supported, such as <code>\\n</code>, <code>\\t</code> & <code>\\u0009</code>.</p><p>Roll over tokens for information, and check out the <b>Reference</b> for more information.</p>"
                }, {
                    label: "List",
                    id: "list",
                    desc: "The <b>List</b> tool lists all found matches.<p>You can specify either a simple delimiter (ex. <code>,</code> or <code>\\n</code>), or use substitution tokens to generate more advanced reports. For example, <code>$1\\n</code> would list all group 1 results (in the JavaScript engine).</p><p>Escaped characters are supported, such as <code>\\n</code>, <code>\\t</code> & <code>\\u0009</code>.</p><p>Roll over tokens for information.</p>"
                }, {
                    label: "Details",
                    id: "details",
                    desc: "The <b>Details</b> tool displays the full text of a match and its capture groups.<p>Click on a highlighted match in the <b>Text</b> panel to display the details for that match.</p><p>Roll over a group row to highlight that group in your <b>Expression</b>.</p>"
                }, {
                    label: "Explain",
                    id: "explain",
                    desc: "The <b>Explain</b> tool displays a detailed breakdown of the <b>Expression</b>.<p>Mouse over the explanation to highlight the related tokens in the <b>Expression</b> panel and vice versa.</p><p>Click an item in the explanation to show more info in the <b>Reference</b>.</p>"
                }]
            }, {
                label: "Menu",
                desc: "The <b>Menu</b> (this panel) includes <b>Help</b>, a full regular expression <b>Reference</b>, a <b>Cheatsheet</b>, and <b>Save &amp; Share</b> features.<p>Tap a selected item in the <b>Reference</b> to insert it into your <b>Expression</b>. Click the arrow beside an example to load it.</p><p>The library also includes searchable <b>Community</b> submissions, and patterns you've created or favorited in <b>My Patterns</b>.</p>"
            }]
        }, {
            label: "Signing in",
            id: "signin",
            desc: "Before you sign in, RegExr creates a temporary account which relies on a browser cookie. This means you can't access your patterns on other computers, and that you could lose your patterns if your cookies are deleted or expire.<p>Signing in creates a permanent account, so you can access your patterns anywhere, anytime.</p><p>Your existing patterns &amp; favorites will automatically be assigned to the new account.</p><p>We don't use your info for anything other than signing you into your RegExr account.</p>"
        }, {
            id: "engine",
            label: "RegEx engines",
            desc: "While the core feature set of regular expressions is fairly consistent, different implementations (ex. Perl vs Java) may have different features or behaviours.<p>RegExr currently supports JavaScript RegExp executed in your browser and PCRE via PHP.</p><p>You can switch engines using the dropdown in Expression.</p>",
            kids: [{
                label: "JavaScript",
                desc: "Your browser's JavaScript engine is used to execute RegEx in an asynchronous worker using <code>RegExp.exec()</code>.<p>Note that while implementations are mostly consistent, there are small variations between browsers. Here is a short list of known differences:<ul><li>Older browsers don't support the u or y flags</li><li>Differences in handling of certain ambiguous escapes: \\8 \\9</li><li>Chrome handles \\x & \\u escapes slightly differently than other browsers</li><li>Chrome supports lookbehind, but it isn't yet in the JS spec</li><li>Safari ignores leading zeros in octal escapes (ex. \\00020)</li></ul></p>"
            }, {
                label: "PCRE (PHP)",
                desc: "PHP {{getPHPVersion()}} and PCRE {{getPCREVersion()}} are used to execute your pattern on our server."
            }]
        }, {
            label: "Query string support",
            desc: "In addition to the built in <b>Save & Share</b> mechanism, RegExr also supports the ability to pre-populate a pattern via the query string.<p>The following query string params are recognized:<ul><li><code>expression</code> & <code>text</code> - populate their respective fields</li><li><code>tool</code> - sets the tool (replace, list, details, or explain)</li><li><code>input</code> - populates the tool input field</li></ul></p>Ex. <a href='http://regexr.com/?expression=.&text=testing'>regexr.com/?expression=.&text=testing</a>"
        }]
    }, {
        id: "reference"
    }, {
        label: "Cheatsheet",
        id: "cheatsheet",
        el: "#cheatsheet"
    }, {
        label: "Community",
        id: "community",
        desc: "Welcome to the Community, a searchable database of patterns submitted by users like you.<p>After selecting a pattern, use the arrows in this section to load the full pattern or components of it.</p><p>Help make the Community better by rating patterns, and submitting your own via <b>Search & Share</b> in the menu.</p>",
        search: !0,
        kids: []
    }, {
        label: "My Patterns",
        id: "favorites",
        desc: "The list above will display any patterns that you create or favorite.",
        search: !0,
        kids: []
    }, {
        label: "Save & Share",
        id: "share",
        el: "#share_main",
        list: !1,
        kids: [{
            label: "Save to my Favorites",
            id: "share_favorites",
            el: "#share_favorites"
        }, {
            label: "Share with the Community",
            id: "share_community",
            el: "#share_community"
        }]
    }];
    var G = function() {
        function e(t, n) {
            r(this, e),
            this.el = h.create("div", "example"),
            this.title = t,
            this.example = n
        }
        return i(e, [{
            key: "example",
            set: function(e) {
                if (e !== this._example) {
                    this._example = e;
                    var t = ""
                      , n = void 0
                      , r = void 0
                      , i = void 0;
                    if (e && (r = e[0],
                    n = e[1],
                    i = f.getRegExp(r, "g"),
                    this.title && (t += "<h1>" + this.title + "</h1><hr>"),
                    t += "<code class='expression'><svg class='icon load'><use xlink:href='#load'><title>Load expression</title></use></svg>" + r + "</code>",
                    n && i)) {
                        var o = Math.max(0, n.length - 160)
                          , s = n;
                        o && (s = f.htmlSafe(s.substr(0, 159))),
                        i && (s = s.replace(i, "<em>$&</em>")),
                        t += "<hr><code class='text'><svg class='icon load'><use xlink:href='#load'><title>Load text</title></use></svg>" + s + (o ? "<i>…</i>" : "") + "</code>"
                    }
                    this.el.innerHTML = t,
                    r && h.query("code.expression > .load", this.el).addEventListener("click", function() {
                        oe.expression.value = "/" === r[0] ? r : "/" + r + "/g"
                    }),
                    n && h.query("code.text > .load", this.el).addEventListener("click", function() {
                        return oe.text.value = n
                    })
                }
            }
        }]),
        e
    }()
      , j = function() {
        function e(t) {
            var n = this;
            r(this, e),
            this.el = t,
            this.example = new G,
            t.appendChild(this.example.el),
            h.query(".icon.load", t).addEventListener("click", function() {
                return n._loadClick()
            }),
            h.query(".icon.thumbup", t).addEventListener("click", function() {
                return n._rate(1)
            }),
            h.query(".icon.thumbdown", t).addEventListener("click", function() {
                return n._rate(-1)
            }),
            h.query(".icon.favorites", t).addEventListener("click", function() {
                return n._favorite()
            })
        }
        return i(e, [{
            key: "_loadClick",
            value: function() {
                oe.state = this._pattern
            }
        }, {
            key: "_updateRating",
            value: function() {
                var e = this._pattern
                  , t = this.el;
                h.query(".rating", t).innerText = e.rating.toFixed(1),
                h.removeClass(h.query(".icon.rate.selected", t), "selected"),
                1 === e.userRating ? h.addClass(h.query(".icon.thumbup", t), "selected") : -1 === e.userRating && h.addClass(h.query(".icon.thumbdown", t), "selected")
            }
        }, {
            key: "_updateFavorite",
            value: function() {
                var e = this._pattern
                  , t = this.el;
                h.toggleClass(h.query(".icon.favorites", t), "selected", !!e.favorite)
            }
        }, {
            key: "_rate",
            value: function(e) {
                var t = this
                  , n = this._pattern;
                n.userRating = e === n.userRating ? 0 : e,
                this._updateRating(),
                b.rate(n.id, n.userRating).then(function(e) {
                    return t._handleRate(e)
                })
            }
        }, {
            key: "_handleRate",
            value: function(e) {
                e.id === this._pattern.id && (this._pattern.rating = e.rating,
                this._updateRating())
            }
        }, {
            key: "_favorite",
            value: function() {
                var e = this
                  , t = this._pattern;
                b.favorite(t.id, !t.favorite).then(function(t) {
                    return e._handleFavorite(t)
                })
            }
        }, {
            key: "_handleFavorite",
            value: function(e) {
                e.id === this._pattern.id && (this._pattern.favorite = e.favorite,
                this._updateFavorite())
            }
        }, {
            key: "item",
            set: function(e) {
                var t = this.el;
                this._pattern = e,
                h.query(".author", t).innerText = e.author ? "by " + e.author : "",
                h.query(".desc", t).innerText = e.description || "No description available.",
                this._updateRating(),
                this._updateFavorite(),
                this.example.example = [e.expression, e.text]
            }
        }]),
        e
    }()
      , V = function() {
        function e(t) {
            var n = this;
            r(this, e),
            t || (t = document.createElement("div")),
            this.el = t,
            h.addClass(t, "status"),
            t.addEventListener("mouseover", function() {
                return n._showTooltip()
            }),
            t.addEventListener("mouseout", function() {
                return n._hideTooltip()
            })
        }
        return i(e, [{
            key: "distract",
            value: function() {
                return this.el.innerHTML = '<svg class="icon distractor anim-spin"><use xlink:href="#distractor"></use></svg>',
                this._show(),
                this
            }
        }, {
            key: "hide",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return this._clearTimeout(),
                t ? this._timeoutId = setTimeout(function() {
                    return e._hide()
                }, 1e3 * t) : this._hide(),
                this
            }
        }, {
            key: "success",
            value: function() {
                return this.el.innerHTML = '<svg class="icon success"><use xlink:href="#check"></use></svg>',
                this._show(),
                this
            }
        }, {
            key: "error",
            value: function(e) {
                return this.el.innerHTML = '<svg class="icon alert"><use xlink:href="#alert"></use></svg>',
                this._show(),
                this._ttMsg = e,
                this
            }
        }, {
            key: "_showTooltip",
            value: function() {
                this._ttMsg && oe.tooltip.hover.showOn("status", this._ttMsg, this.el, !0, 0)
            }
        }, {
            key: "_hideTooltip",
            value: function() {
                oe.tooltip.hover.hide("status")
            }
        }, {
            key: "_show",
            value: function() {
                this.el.style.display = null,
                this._ttMsg = null,
                this._hideTooltip(),
                this._clearTimeout()
            }
        }, {
            key: "_hide",
            value: function() {
                this.el.style.display = "none",
                this._hideTooltip(),
                this._clearTimeout()
            }
        }, {
            key: "_clearTimeout",
            value: function() {
                null != this._timeoutId && (clearTimeout(this._timeoutId),
                this._timeoutId = null)
            }
        }]),
        e
    }()
      , K = function(e) {
        function t() {
            r(this, t);
            var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e._value = {},
            e._initUI(),
            e
        }
        return s(t, u),
        i(t, [{
            key: "showTooltip",
            value: function() {
                oe.tooltip.toggle.toggleOn("signin", this.tooltipEl, this.signinBtn, !0, 20)
            }
        }, {
            key: "_initUI",
            value: function() {
                var e = this;
                this.signinBtn = h.query(".header .signin"),
                this.tooltipEl = h.query("#library > #tooltip-signin"),
                this.signinEl = h.query(".signin", this.tooltipEl),
                this.signoutEl = h.query(".signout", this.tooltipEl),
                h.query(".signoutbtn", this.signoutEl).addEventListener("click", function(t) {
                    return e._doSignout()
                }),
                this.signinBtn.addEventListener("click", function(t) {
                    return e.showTooltip()
                }),
                h.query(".icon.help", this.signinEl).addEventListener("click", function() {
                    return oe.sidebar.goto("signin")
                }),
                this.signinList = new y(h.query("ul.list", this.signinEl),{
                    data: ["GitHub", "Facebook", "Google"],
                    template: function(e) {
                        return '<svg class="icon inline"><use xlink:href="#' + e.toLowerCase() + '"></use></svg>' + e
                    }
                }),
                this.signinList.on("change", function() {
                    return e._signinListChange()
                })
            }
        }, {
            key: "_updateUI",
            value: function() {
                var e = this.authenticated;
                h.toggleClass(this.tooltipEl, "authenticated", e),
                h.query(".label", this.signinBtn).innerText = e ? "Sign Out" : "Sign In",
                e && (h.query(".username", this.signoutEl).innerText = this.username,
                h.query(".type", this.signoutEl).innerText = this.type)
            }
        }, {
            key: "_doSignout",
            value: function() {
                var e = this;
                h.addClass(this.tooltipEl, "wait"),
                b.logout().then(function(t) {
                    e._handleSignout(t)
                }).finally(function() {
                    return e._cleanSignout()
                })
            }
        }, {
            key: "_handleSignout",
            value: function(e) {
                this.value = e
            }
        }, {
            key: "_cleanSignout",
            value: function(e) {
                h.removeClass(this.tooltipEl, "wait")
            }
        }, {
            key: "_signinListChange",
            value: function() {
                var e = this.signinList.selected.toLowerCase();
                h.addClass(this.tooltipEl, "wait"),
                x.event("login", "access", e),
                setTimeout(function() {
                    return b.login(e)
                }, 100)
            }
        }, {
            key: "value",
            get: function() {
                return this._value
            },
            set: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this._value = e,
                this._updateUI(),
                this.dispatchEvent("change")
            }
        }, {
            key: "userId",
            get: function() {
                return this._value.userId
            }
        }, {
            key: "author",
            get: function() {
                return this._value.author || this._value.username || ""
            }
        }, {
            key: "username",
            get: function() {
                return this._value.username || ""
            }
        }, {
            key: "authenticated",
            get: function() {
                return !!this._value.username
            }
        }, {
            key: "type",
            get: function() {
                return this._value.type
            }
        }]),
        t
    }()
      , $ = function(e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.el = e,
            n._pattern = !1,
            n._initUI(),
            oe.on("change", function() {
                return n._handleAppChange()
            }),
            oe.on("load", function() {
                return n._handleAppLoad()
            }),
            oe.account.on("change", function() {
                return n._handleAccountChange()
            }),
            n
        }
        return s(t, u),
        i(t, [{
            key: "_initUI",
            value: function() {
                var e = this
                  , t = this.el;
                this.mainEl = h.query("> #share_main", t);
                var n = this.communityEl = h.query("> #share_community", t)
                  , r = h.query(".header .file");
                this.hNewBtn = h.query(".new", r),
                this.hForkBtn = h.query(".fork", r),
                this.hSaveBtn = h.query(".save", r),
                h.query(".savekey", this.hSaveBtn).innerText = "(" + f.getCtrlKey() + "-s)",
                this.hSaveBtn.addEventListener("click", function() {
                    return e._doSave()
                }),
                this.hForkBtn.addEventListener("click", function() {
                    return e._doSave(!0)
                }),
                this.hNewBtn.addEventListener("click", function() {
                    return e._doNew()
                }),
                this._privateRow = h.query(".row.private", this.mainEl),
                this._privateRow.addEventListener("click", function() {
                    return e._doPrivate()
                }),
                this._privateStatus = new V(h.query(".status", this._privateRow)),
                this._favoritesRow = h.query(".row.favorites", this.mainEl),
                this._favoritesRow.addEventListener("click", function() {
                    return e._doFavorite()
                }),
                this._favoritesStatus = new V(h.query(".status", this._favoritesRow)),
                this._communityRow = h.query(".row.community", this.mainEl),
                this._communityRow.addEventListener("click", function() {
                    return e._showCommunity()
                }),
                h.query(".row.signin a", this.mainEl).addEventListener("click", function() {
                    return e._doSignin()
                });
                var i = this.saveEl = h.query("> .save", this.mainEl);
                this.saveBtn = h.query(".button.save", i),
                this.forkBtn = h.query(".button.fork", i),
                this.saveBtn.addEventListener("click", function() {
                    return e._doSave()
                }),
                this.forkBtn.addEventListener("click", function() {
                    return e._doSave(!0)
                }),
                this.saveStatus = new V(h.query(".status", i));
                var o = h.query(".inputs", i);
                this.nameFld = h.query(".name", o),
                this.authorFld = h.query(".author", o),
                this.descriptionFld = h.query(".description", o),
                this.keywordsFld = h.query(".keywords", o),
                this.nameFld.addEventListener("input", function() {
                    return e._handleChange()
                }),
                this.authorFld.addEventListener("input", function() {
                    return e._handleChange()
                }),
                this.descriptionFld.addEventListener("input", function() {
                    return e._handleChange()
                }),
                this.keywordsFld.addEventListener("input", function() {
                    return e._handleChange()
                });
                var s = h.query(".row.link .label", this.mainEl)
                  , a = h.query(".link .copy", this.mainEl)
                  , l = new Clipboard(h.query(".link", this.mainEl),{
                    target: function() {
                        return s
                    }
                });
                l.on("success", function() {
                    return oe.tooltip.toggle.toggleOn("copy", "Copied to clipboard.", a, !0, 3)
                }),
                l.on("error", function(e) {
                    return oe.tooltip.toggle.toggleOn("copy", "Ctrl-C to copy.", a, !0, 3)
                });
                var c = h.query(".inputs", n);
                h.query(".button.cancel", n).addEventListener("click", function() {
                    return oe.sidebar.goto("share")
                }),
                h.query(".button.share", n).addEventListener("click", function() {
                    return e._doComSave()
                }),
                this.comSaveStatus = new V(h.query(".status", n)),
                this._comNameFld = h.query(".name", c),
                this._comAuthorFld = h.query(".author", c),
                this._comDescriptionFld = h.query(".description", c),
                this._comKeywordsFld = h.query(".keywords", c),
                window.document.addEventListener("keydown", function(t) {
                    return e._handleKey(t)
                })
            }
        }, {
            key: "_updateUI",
            value: function() {
                var e = this._pattern
                  , t = oe.unsaved
                  , n = !e.id
                  , r = void 0
                  , i = this._getURL();
                h.toggleClass([this.forkBtn, this.hForkBtn], "disabled", n),
                h.toggleClass([this.saveBtn, this.hSaveBtn], "disabled", !t),
                r = t ? n ? "Save will create a shareable public link." : "Save will update the current link." : "No unsaved changes.",
                n || (r += " Fork will create a new link" + (t ? " with your changes." : ".")),
                this._setSaveText(r),
                h.toggleClass(h.query(".row.link", this.mainEl), "disabled", n),
                h.toggleClass(h.query(".row.link", this.mainEl), "active", !n),
                h.query(".row.link .label").innerText = i || "Shareable link",
                h.toggleClass(this._privateRow, "disabled", n),
                h.toggleClass(this._favoritesRow, "disabled", n),
                h.toggleClass(this._communityRow, "disabled", n),
                h.toggleClass(this._privateRow, "active", "private" === e.access),
                h.toggleClass(this._favoritesRow, "active", !!e.favorite)
            }
        }, {
            key: "_pushHistory",
            value: function(e) {
                var t = window.history
                  , n = e.name ? "RegExr: " + e.name : "RegExr: Learn, Build, & Test RegEx";
                t.state && e.id === t.state.id ? t.replaceState(e, n, this._getURL()) : t.pushState(e, n, this._getURL()),
                window.document.title = n
            }
        }, {
            key: "_getURL",
            value: function() {
                return this._pattern.id ? window.location.origin + "/" + this._pattern.id : null
            }
        }, {
            key: "_handleKey",
            value: function(e) {
                var t = f.isMac();
                "s" === e.key && (t && e.metaKey || !t && e.ctrlKey) && (this._doSave(!1),
                e.preventDefault())
            }
        }, {
            key: "_doSave",
            value: function(e) {
                var t = this;
                if (e || oe.unsaved) {
                    var n = oe.state;
                    n.parentId = this._parentId,
                    h.addClass(h.query(".buttons", this.saveEl), "wait"),
                    this.saveStatus.distract(),
                    b.save(n, e).then(function(e) {
                        return t._handleSave(e)
                    }).catch(function(e) {
                        return t._handleSaveErr(e)
                    })
                }
            }
        }, {
            key: "_handleSave",
            value: function(e) {
                var t = null == this._pattern.id
                  , n = !t && e.id !== this._pattern.id;
                h.removeClass(h.query(".buttons", this.saveEl), "wait"),
                this.saveStatus.hide(),
                oe.state = e,
                (n || t) && (oe.sidebar.goto("share"),
                !n && this.name || (this.nameFld.focus(),
                this.nameFld.select()),
                setTimeout(function() {
                    return oe.tooltip.toggle.showOn("fork", "<b>Saved.</b> New share link created. Click to copy to clipboard.", h.query(".row.link .copy.icon"), !0, 0)
                }, 1))
            }
        }, {
            key: "_handleSaveErr",
            value: function(e) {
                h.removeClass(h.query(".buttons", this.saveEl), "wait"),
                this.saveStatus.error(this._getErrMsg(e))
            }
        }, {
            key: "_doNew",
            value: function() {
                oe.unsaved && !confirm("You have unsaved changes. Create new pattern without saving?") || (oe.state = {
                    flavor: oe.flavor.value
                })
            }
        }, {
            key: "_doPrivate",
            value: function() {
                var e = this
                  , t = this._pattern;
                this._privateStatus.distract(),
                b.private(t.id, "private" !== t.access).then(function(t) {
                    return e._handlePrivate(t)
                }).catch(function(t) {
                    return e._handleErr(t, e._privateStatus)
                })
            }
        }, {
            key: "_handlePrivate",
            value: function(e) {
                e.id === this._pattern.id && (this._pattern.access = e.access,
                this._privateStatus.hide(),
                this._updateUI())
            }
        }, {
            key: "_doFavorite",
            value: function() {
                var e = this
                  , t = this._pattern;
                this._favoritesStatus.distract(),
                b.favorite(t.id, !t.favorite).then(function(t) {
                    return e._handleFavorite(t)
                }).catch(function(t) {
                    return e._handleErr(t, e._favoritesStatus)
                })
            }
        }, {
            key: "_handleFavorite",
            value: function(e) {
                e.id === this._pattern.id && (this._pattern.favorite = e.favorite,
                this._favoritesStatus.hide(),
                this._updateUI())
            }
        }, {
            key: "_handleErr",
            value: function(e, t) {
                t.error(this._getErrMsg(e)).hide(6)
            }
        }, {
            key: "_showCommunity",
            value: function() {
                oe.sidebar.goto("share_community"),
                this._comNameFld.value = this.name,
                this._comAuthorFld.value = this.author,
                this._comDescriptionFld.value = this.description,
                this._comKeywordsFld.value = this.keywords
            }
        }, {
            key: "_doComSave",
            value: function() {
                var e = this;
                if (this._comNameFld.value) {
                    var t = oe.state;
                    this.name = t.name = this._comNameFld.value,
                    this.author = t.author = this._comAuthorFld.value,
                    this.description = t.description = this._comDescriptionFld.value,
                    this.keywords = t.keywords = this._comKeywordsFld.value,
                    t.access = "public",
                    h.addClass(h.query(".buttons", this.communityEl), "wait"),
                    this.comSaveStatus.distract(),
                    b.save(t, !0).then(function(t) {
                        return e._handleComSave(t)
                    }).catch(function(t) {
                        return e._handleComSaveErr(t)
                    })
                } else
                    this._comNameFld.focus()
            }
        }, {
            key: "_handleComSave",
            value: function(e) {
                h.removeClass(h.query(".buttons", this.communityEl), "wait"),
                this.comSaveStatus.hide(),
                oe.sidebar.goto("share")
            }
        }, {
            key: "_handleComSaveErr",
            value: function(e) {
                h.removeClass(h.query(".buttons", this.communityEl), "wait"),
                this.comSaveStatus.error(this._getErrMsg(e))
            }
        }, {
            key: "_handleChange",
            value: function() {
                this.dispatchEvent("change")
            }
        }, {
            key: "_handleAppChange",
            value: function() {
                this._updateUI()
            }
        }, {
            key: "_handleAccountChange",
            value: function() {
                var e = oe.account
                  , t = h.query(".signin.row", this.mainEl);
                this.authorFld.value || (this.authorFld.value = e.author || e.username),
                h.toggleClass(t, "authenticated", e.authenticated),
                h.query(".username", t).innerText = e.username
            }
        }, {
            key: "_handleAppLoad",
            value: function() {
                h.toggleClass(h.query(".save .actions", this.mainEl), "disabled")
            }
        }, {
            key: "_doSignin",
            value: function() {
                oe.account.showTooltip()
            }
        }, {
            key: "_setSaveText",
            value: function(e) {
                h.query(".save .message .label", this.mainEl).innerText = e
            }
        }, {
            key: "_getErrMsg",
            value: function(e) {
                return "<span class='error'>ERROR:</span> " + oe.reference.getError("servercomm")
            }
        }, {
            key: "value",
            get: function() {
                return {
                    id: this._pattern ? this._pattern.id : null,
                    name: this.name,
                    author: this.author,
                    description: this.description,
                    keywords: this.keywords
                }
            }
        }, {
            key: "pattern",
            set: function(e) {
                this._pattern = e,
                e.userId !== oe.account.userId ? (this._parentId = e.id,
                delete e.id,
                delete e.userId) : this._parentId = null,
                this.name = e.name,
                this.description = e.description,
                this.keywords = e.keywords,
                this._updateUI(),
                this._pushHistory(e)
            }
        }, {
            key: "name",
            get: function() {
                return this.nameFld.value
            },
            set: function(e) {
                this.nameFld.value = e || ""
            }
        }, {
            key: "author",
            get: function() {
                return this.authorFld.value
            },
            set: function(e) {
                this.authorFld.value = e || ""
            }
        }, {
            key: "description",
            get: function() {
                return this.descriptionFld.value
            },
            set: function(e) {
                this.descriptionFld.value = e || ""
            }
        }, {
            key: "keywords",
            get: function() {
                return this.keywordsFld.value
            },
            set: function(e) {
                this.keywordsFld.value = e || ""
            }
        }]),
        t
    }()
      , X = l(['<svg class="icon"><use xlink:href="#', '"></use></svg>'], ['<svg class="icon"><use xlink:href="#', '"></use></svg>'])
      , Y = function() {
        function e(t) {
            var n = this;
            r(this, e),
            this.el = t,
            this.itemEl = null,
            this.openReq = null,
            this._initUI(t),
            this._content = this._prepContent(U),
            this.minList.data = [{
                id: "menu",
                label: "Menu"
            }].concat(U.kids),
            this.goto("home"),
            oe.flavor.on("change", function() {
                return n._onFlavorChange()
            }),
            oe.isNarrow && setTimeout(function() {
                return n.minimize(!0, !1)
            }, 1500)
        }
        return i(e, [{
            key: "minimize",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                e !== this._minimized && (e && t && x.event("minimize_menu", "engagement"),
                h.togglePanel(this.el, ".full", ".min", !e),
                this._minimized = e,
                this._updateUI())
            }
        }, {
            key: "goto",
            value: function(e) {
                this.show(this._idMap[e])
            }
        }, {
            key: "showToken",
            value: function(e) {
                this.goto(oe.reference.idForToken(e))
            }
        }, {
            key: "show",
            value: function(e) {
                if (e) {
                    if (e.hide)
                        return this.show(e.parent);
                    if (e && "menu" !== e.id) {
                        if (this.minimize(!1),
                        e.id && x.page("sidebar/" + e.id),
                        !e.el && !e.kids) {
                            if (this.searchMode || !e.parent || e.parent === this.curItem)
                                return this.selItem = e,
                                this.menuList.selected = e.id,
                                this._showContent(e);
                            if (e.parent !== this.curItem)
                                return this.show(e.parent),
                                this.show(e)
                        }
                        this._resetFull(),
                        this.curItem = e,
                        h.query("h1", this.titleEl).innerText = e.label,
                        h.query("svg.back.icon use", this.titleEl).setAttribute("xlink:href", "#" + (e.parent ? "arrowleft" : "menu")),
                        e.el ? this._showEl(h.query("#library " + e.el)) : this._showContent(e),
                        e.kids && !1 !== e.list && (h.removeClass(this.fullEl, "no-list"),
                        this.menuList.data = e.kids || e.parent.kids),
                        e.search && h.removeClass(this.fullEl, "no-search"),
                        "community" === e.id ? (this.menuList.template = this.communityListTemplate,
                        this._onSearchSubmit()) : "favorites" === e.id && (this.menuList.template = this.communityListTemplate,
                        this._loadFavorites())
                    }
                }
            }
        }, {
            key: "back",
            value: function() {
                this.curItem.parent ? this.show(this.curItem.parent) : this.minimize(!0)
            }
        }, {
            key: "menuListTemplate",
            value: function(e) {
                return (e.parent && "home" === e.parent.id ? '<svg class="icon"><use xlink:href="#' + e.id + '"></use></svg>' : "") + '<span class="label">' + (e.label || e.id) + "</span>" + (e.token ? '<span class="token">' + e.token.replace("<", "&lt;") + "</span>" : "") + (e.kids || e.el ? '<svg class="small icon"><use xlink:href="#arrowright"></use></svg>' : "")
            }
        }, {
            key: "communityListTemplate",
            value: function(e) {
                return '<span class="label">' + f.htmlSafe(e.name) + '</span><span class="rating">' + (e.favorite ? '<svg class="small icon favorites"><use xlink:href="#favorites"></use></svg>' : "") + '<svg class="small icon thumb"><use xlink:href="#thumb"></use></svg>' + e.rating.toFixed(1) + "</span>"
            }
        }, {
            key: "_initUI",
            value: function(e) {
                var t = this;
                this.fullEl = h.query("> .full", e),
                this.titleEl = h.query("> header", this.fullEl),
                h.query("> .close.icon", this.titleEl).addEventListener("click", function() {
                    return t.minimize(!0)
                }),
                h.query("> .backrow", this.titleEl).addEventListener("click", function() {
                    return t.back()
                }),
                this.searchEl = h.query("> .search", this.fullEl),
                this.searchFld = h.query("> .search > input", this.fullEl),
                this.searchFld.addEventListener("input", function() {
                    return t._onSearchChange()
                }),
                this.searchFld.addEventListener("keyup", function(e) {
                    return 13 === e.keyCode && t._onSearchSubmit()
                }),
                h.query("> svg.icon.search", this.searchEl).addEventListener("click", function() {
                    return t._onSearchSubmit()
                }),
                this.listEl = h.query("> .list", this.fullEl),
                this.menuList = new y(this.listEl,{
                    data: U.kids,
                    template: this.menuListTemplate
                }),
                this.menuList.on("change", function() {
                    return t.show(t.menuList.selectedItem)
                }),
                this.menuList.on("selclick", function() {
                    return t._onSelClick(t.menuList.selectedItem)
                }),
                this.contentEl = h.query("> .content", this.fullEl),
                this.minEl = h.query("> .min", e),
                this.minEl.addEventListener("click", function() {
                    return t.minimize(!1)
                });
                var n = h.template(X, "id");
                this.minList = new y(h.query("> .list", this.minEl),{
                    template: n
                }),
                this.minList.on("change", function(e) {
                    t.show(t.minList.selectedItem),
                    e.preventDefault()
                }),
                this.community = new j(h.query("#library > #community")),
                this.share = new $(h.query("#library > #share")),
                this._prepCheatsheet(),
                h.query(".doc > .blocker").addEventListener("mousedown", function(e) {
                    t.minimize(!0)
                })
            }
        }, {
            key: "_updateUI",
            value: function() {
                var e = h.query(".doc");
                h.toggleClass(e, "fadeback", !this._minimized)
            }
        }, {
            key: "_resetFull",
            value: function() {
                this.itemEl && (h.query("#library").appendChild(this.itemEl),
                this.itemEl = null),
                this._abortReq(),
                h.addClass(this.fullEl, "no-search no-list"),
                this.searchFld.value = "",
                this.searchMode = !1,
                this.menuList.template = this.menuListTemplate,
                h.removeClass(this.searchEl, "wait")
            }
        }, {
            key: "_showContent",
            value: function(e) {
                if ("community" !== this.curItem.id && "favorites" !== this.curItem.id || e === this.curItem) {
                    var t = oe.reference;
                    this.contentEl.innerHTML = this._isInReference(e) ? t.getContent(e.id) : t.fillTags((e.desc || "") + (e.ext || ""), e, t),
                    e.example && this.contentEl.appendChild(new G("Example",e.example).el)
                } else
                    this._showEl(this.community.el),
                    this.community.item = e
            }
        }, {
            key: "_isInReference",
            value: function(e) {
                do {
                    if ("reference" === e.id)
                        return !0
                } while (e = e.parent);return !1
            }
        }, {
            key: "_onSelClick",
            value: function(e) {
                if (e.token) {
                    var t = oe.expression;
                    "flags" === e.parent.id ? t.toggleFlag(e.token) : t.insert(e.token)
                }
            }
        }, {
            key: "_showEl",
            value: function(e) {
                this.itemEl !== e && (this.itemEl = e,
                h.empty(this.contentEl).appendChild(e))
            }
        }, {
            key: "_prepContent",
            value: function(e) {
                var t = f.findIndex(e.kids, function(e) {
                    return "reference" === e.id
                });
                return e.kids.splice(t, 1, oe.reference.content),
                e.desc = this.contentEl.innerHTML,
                this._idMap = {
                    home: e
                },
                f.prepMenuContent(e, this._idMap)
            }
        }, {
            key: "_prepCheatsheet",
            value: function() {
                for (var e = this, t = h.queryAll("#cheatsheet *[data-id]"), n = 0, r = t.length; n < r; n++)
                    t[n].addEventListener("click", function(t) {
                        return e.goto(t.target.dataset.id)
                    })
            }
        }, {
            key: "_onSearchChange",
            value: function() {
                var e = this.curItem.id
                  , t = this.searchFld.value;
                if ("reference" === e)
                    this._searchReference(t);
                else {
                    if ("favorites" !== e)
                        return;
                    this._searchFavorites(t)
                }
                this.contentEl.innerHTML = this.curItem.desc,
                this.itemEl = null
            }
        }, {
            key: "_searchReference",
            value: function(e) {
                var t = oe.reference.search(e);
                this.searchMode = !!e,
                this.menuList.data = e ? t : this.curItem.kids
            }
        }, {
            key: "_searchFavorites",
            value: function(e) {
                var t = this.menuList.data
                  , n = f.searchRank;
                t.forEach(function(t) {
                    return t.hide = !n(t, e)
                }),
                this.menuList.data = t
            }
        }, {
            key: "_onFlavorChange",
            value: function() {
                var e = this.selItem || this.curItem;
                this._isInReference(e) && (this.selItem = this.curItem = null,
                this.show(e))
            }
        }, {
            key: "_onSearchSubmit",
            value: function() {
                var e = this;
                this._abortReq();
                var t = this.searchFld.value;
                "community" === this.curItem.id && (t && x.event("search", "engagement", {
                    search_term: t,
                    target: "community"
                }),
                h.addClass(this.searchEl, "wait"),
                this._showListMsg(),
                this.openReq = b.communitySearch(t).then(function(t) {
                    return e._showServerResults(t)
                }).catch(function(t) {
                    return e._showListMsg(t)
                }).finally(function() {
                    return e._reqCleanup()
                })),
                this.searchFld.select()
            }
        }, {
            key: "_loadFavorites",
            value: function() {
                var e = this;
                this._abortReq();
                this.searchFld.value;
                this.openReq = b.patterns().then(function(t) {
                    return e._showServerResults(t)
                }).catch(function(t) {
                    return e._showListMsg(t)
                }).finally(function() {
                    return e._reqCleanup()
                }),
                this._showListMsg()
            }
        }, {
            key: "_showListMsg",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Loading...";
                this.listEl.innerHTML = "<li class='loading'>" + e + "</li>"
            }
        }, {
            key: "_abortReq",
            value: function() {
                this.openReq && this.openReq.abort(),
                this.openReq = null
            }
        }, {
            key: "_showServerResults",
            value: function(e) {
                this.menuList.data = e.results,
                0 === e.results.length && this._showListMsg("community" === this.curItem.id ? "No matches." : "No patterns created or favorited.")
            }
        }, {
            key: "_reqCleanup",
            value: function(e) {
                h.removeClass(this.searchEl, "wait")
            }
        }]),
        e
    }()
      , Z = function() {
        function e(t, n, i) {
            var o = this;
            r(this, e),
            this._config = i,
            this._flavor = n,
            this._flavor.on("change", function() {
                return o._flavorChange()
            }),
            this._injectEscChars(t),
            this._idMap = {
                reference: t
            },
            this._content = f.prepMenuContent(t, this._idMap),
            this._misc = f.prepMenuContent(t.misc, this._idMap),
            this._flavorChange()
        }
        return i(e, [{
            key: "search",
            value: function(e) {
                function t(n, r) {
                    for (var i = 0, o = n.length; i < o; i++) {
                        var s = n[i]
                          , a = 0;
                        s.kids ? t(s.kids, r) : (a = f.searchRank(s, e)) && (s.__searchPoints = a,
                        r.push(s))
                    }
                    return r
                }
                return t(this.content.kids, []).sort(function(e, t) {
                    return t.__searchPoints - e.__searchPoints
                })
            }
        }, {
            key: "idForToken",
            value: function(e) {
                return this._idMap[e.err] ? e.err : this._idMap[e.type] ? e.type : this._idMap[e.clss] ? e.clss : e.err || e.type || e.clss
            }
        }, {
            key: "getChar",
            value: function(t) {
                var n = e.NONPRINTING_CHARS[t.code];
                return n || '"' + String.fromCharCode(t.code) + '"'
            }
        }, {
            key: "getQuant",
            value: function(e) {
                var t = e.min
                  , n = e.max;
                return t === n ? t : -1 === n ? t + " or more" : "between " + t + " and " + n
            }
        }, {
            key: "getUniCat",
            value: function(t) {
                return e.UNICODE_CATEGORIES[t.value] || "[Unrecognized]"
            }
        }, {
            key: "getModes",
            value: function(e) {
                var t = e.on ? ' Enable "<code>' + e.on + '</code>".' : "";
                return e.off && (t += ' Disable "<code>' + e.off + '</code>".'),
                t
            }
        }, {
            key: "getInsensitive",
            value: function(e) {
                return e.modes ? "Case " + (e.modes.i ? "in" : "") + "sensitive." : ""
            }
        }, {
            key: "getDotAll",
            value: function(e) {
                return (e.modes.s ? "including" : "except") + " line breaks"
            }
        }, {
            key: "getLabel",
            value: function(e) {
                var t = this.getNodeForToken(e);
                return t ? t.label || t.id || "" : e.type
            }
        }, {
            key: "getDesc",
            value: function(e) {
                return this.getVal(this.getNodeForToken(e), "desc")
            }
        }, {
            key: "getLazy",
            value: function(e) {
                return e.modes.U ? "greedy" : "lazy"
            }
        }, {
            key: "getLazyFew",
            value: function(e) {
                return e.modes.U ? "many" : "few"
            }
        }, {
            key: "getPHPVersion",
            value: function() {
                return this._config.PHPVersion
            }
        }, {
            key: "getPCREVersion",
            value: function() {
                return this._config.PCREVersion
            }
        }, {
            key: "getCtrlKey",
            value: function() {
                return f.getCtrlKey()
            }
        }, {
            key: "getEscChars",
            value: function() {
                var e = this._flavor.profile.escChars
                  , t = "";
                for (var n in e)
                    t += n;
                return t
            }
        }, {
            key: "fillTags",
            value: function(e, t, n, r) {
                for (var i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o = void 0; o = e.match(/{{~?[\w.()]+}}/); ) {
                    var s = void 0
                      , a = void 0
                      , l = !1;
                    "~" === (s = o[0].substring(2, o[0].length - 2))[0] && (s = s.substr(1),
                    l = !0);
                    var c = s.match(/\([\w.]*\)/);
                    c ? (a = s.substr(0, c.index),
                    s = c[0].substring(1, c[0].length - 1)) : a = null;
                    for (var u = t, h = s.split("."), d = 0; d < h.length; d++) {
                        var p = h[d];
                        p && u && (u = u[p])
                    }
                    s = u,
                    a && (s = n[a] ? n[a](s) : " <b class='exp-error'>[" + a + "]</b> "),
                    l || !r && !i || (s = f.shorten(s, r, i, "i")),
                    e = e.replace(o[0], s)
                }
                return e
            }
        }, {
            key: "getVal",
            value: function(e, t) {
                if (!e)
                    return "";
                var n = this._flavor.getDocs(e.id)
                  , r = n && n[t];
                if (null != r && "+" !== r[0])
                    return r;
                var i = e && e[t] || "";
                return null != r ? i + r.substr(1) : i
            }
        }, {
            key: "getNodeForToken",
            value: function(e) {
                var t = this.idForToken(e)
                  , n = e.clss;
                return "quant" === n && (t = n),
                "esc" === n && "escsequence" !== e.type && (t = "escchar"),
                this.getNode(t)
            }
        }, {
            key: "getNode",
            value: function(e) {
                for (var t = this._idMap, n = t[e]; n && n.proxy; )
                    n = t[n.proxy];
                return n
            }
        }, {
            key: "getError",
            value: function(e, t) {
                return this._content.errors[e] || "no docs for error='" + e + "'"
            }
        }, {
            key: "tipForToken",
            value: function(e) {
                if (!e)
                    return null;
                var t = this.getNodeForToken(e)
                  , n = void 0
                  , r = void 0;
                return e.err ? (n = "<span class='error'>ERROR: </span>",
                r = this.getError(e.err)) : (n = t ? t.label || t.id || "" : e.type,
                r = this.getVal(t, "tip") || this.getVal(t, "desc"),
                "group" === e.type && (n += " #" + e.num),
                n = "<b>" + n[0].toUpperCase() + n.substr(1) + ".</b> "),
                r ? n + this.fillTags(r, e, this, 20) : "no docs for id='" + this.idForToken(e) + "'"
            }
        }, {
            key: "getContent",
            value: function(e) {
                var t = this.getNode(e);
                return this.fillTags(this.getVal(t, "desc") + this.getVal(t, "ext"), t, this)
            }
        }, {
            key: "tipForMatch",
            value: function(e, t) {
                if (!e)
                    return null;
                for (var n = e.l > 150, r = "<b>match: </b>" + f.shorten(t.substr(e.i, e.l), 150, !0, "i") + "<br/><b>range: </b><code>" + e.i + "-" + (e.i + e.l - 1) + "</code>", i = e.groups, o = i && i.length, s = 0; s < o; s++) {
                    if (s > 3 && o > 5) {
                        n = !1,
                        r += "<br><span class='more'>see Details for " + (o - s) + " more</span>";
                        break
                    }
                    var a = i[s]
                      , l = void 0;
                    l = void 0 !== a.i ? t.substr(a.i, a.l) : a.s,
                    n = n || l && l.length > 50,
                    r += s > 0 ? "<br>" : "<hr>",
                    r += "<b>group #" + (s + 1) + ": </b>" + f.shorten(l, 50, !0, "i")
                }
                return n && (r += "<br><span class='more'>see Details for full matches</span>"),
                r
            }
        }, {
            key: "_flavorChange",
            value: function() {
                this._updateHide(this.content)
            }
        }, {
            key: "_updateHide",
            value: function(e, t) {
                var n = e.kids
                  , r = !0;
                if (n)
                    for (var i = 0, o = n.length; i < o; i++)
                        r = this._updateHide(n[i], t) && r;
                else
                    r = !1 === e.show || !0 !== e.show && e.id && !this._flavor.isTokenSupported(e.id);
                return t && r && t.push(e.id),
                e.hide = r
            }
        }, {
            key: "_injectEscChars",
            value: function(e) {
                for (var t = f.find(e.kids, function(e) {
                    return "escchars" === e.id
                }).kids, n = f.find(e.misc.kids, function(e) {
                    return "escchar" === e.id
                }).tip, r = 0, i = "\t\n\v\f\r\0".length; r < i; r++)
                    t.push(this._getEscCharDocs("\t\n\v\f\r\0"[r], "tnvfr0ae"[r], n))
            }
        }, {
            key: "_getEscCharDocs",
            value: function(t, n, r) {
                var i = t.charCodeAt(0)
                  , o = e.NONPRINTING_CHARS[i] || t;
                return {
                    id: "esc_" + i,
                    token: "\\" + (n || t),
                    label: o.toLowerCase(),
                    desc: this.fillTags(r, {
                        code: i
                    }, this)
                }
            }
        }, {
            key: "content",
            get: function() {
                return this._content
            }
        }]),
        e
    }();
    Z.NONPRINTING_CHARS = {
        0: "NULL",
        1: "SOH",
        2: "STX",
        3: "ETX",
        4: "EOT",
        5: "ENQ",
        6: "ACK",
        7: "BELL",
        8: "BS",
        9: "TAB",
        10: "LINE FEED",
        11: "VERTICAL TAB",
        12: "FORM FEED",
        13: "CARRIAGE RETURN",
        14: "SO",
        15: "SI",
        16: "DLE",
        17: "DC1",
        18: "DC2",
        19: "DC3",
        20: "DC4",
        21: "NAK",
        22: "SYN",
        23: "ETB",
        24: "CAN",
        25: "EM",
        26: "SUB",
        27: "ESC",
        28: "FS",
        29: "GS",
        30: "RS",
        31: "US",
        32: "SPACE",
        127: "DEL"
    },
    Z.UNICODE_CATEGORIES = {
        C: "Other",
        Cc: "Control",
        Cf: "Format",
        Cn: "Unassigned",
        Co: "Private use",
        Cs: "Surrogate",
        L: "Letter",
        "L&": "Any letter ",
        Ll: "Lower case letter",
        Lm: "Modifier letter",
        Lo: "Other letter",
        Lt: "Title case letter",
        Lu: "Upper case letter",
        M: "Mark",
        Mc: "Spacing mark",
        Me: "Enclosing mark",
        Mn: "Non-spacing mark",
        N: "Number",
        Nd: "Decimal number",
        Nl: "Letter number",
        No: "Other number",
        P: "Punctuation",
        Pc: "Connector punctuation",
        Pd: "Dash punctuation",
        Pe: "Close punctuation",
        Pf: "Final punctuation",
        Pi: "Initial punctuation",
        Po: "Other punctuation",
        Ps: "Open punctuation",
        S: "Symbol",
        Sc: "Currency symbol",
        Sk: "Modifier symbol",
        Sm: "Mathematical symbol",
        So: "Other symbol",
        Z: "Separator",
        Zl: "Line separator",
        Zp: "Paragraph separator",
        Zs: "Space separator"
    };
    var Q, J = {}, ee = J;
    ee.label = "Reference",
    ee.id = "reference",
    ee.search = !0,
    ee.desc = "Information on all of the tokens available to create regular expressions.\n\t<p>Click a selected item again to insert it into your Expression.</p>\n\t<p>Click the arrow beside an example to load it.</p>",
    ee.kids = [{
        label: "Character classes",
        id: "charclasses",
        desc: "Character classes match a character from a specific set. There are a number of predefined character classes and you can also define your own sets.",
        kids: [{
            id: "set",
            label: "character set",
            desc: "Match any character in the set.",
            example: ["[aeiou]", "glib jocks vex dwarves!"],
            token: "[ABC]"
        }, {
            id: "setnot",
            label: "negated set",
            desc: "Match any character that is not in the set.",
            example: ["[^aeiou]", "glib jocks vex dwarves!"],
            token: "[^ABC]"
        }, {
            id: "range",
            tip: "Matches a character in the range {{getChar(prev)}} to {{getChar(next)}} (char code {{prev.code}} to {{next.code}}). {{getInsensitive()}}",
            example: ["[g-s]", "abcdefghijklmnopqrstuvwxyz"],
            desc: "Matches a character having a character code between the two specified characters inclusive.",
            token: "[A-Z]"
        }, {
            id: "posixcharclass",
            tip: "Matches any character in the '{{value}}' POSIX class.",
            label: "POSIX class",
            desc: "Matches any character in the specified POSIX class. Must be in a character set. For example, <code>[[:alnum:]$]</code> will match alphanumeric characters and <code>$</code>.",
            ext: "<p>For a list of classes, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p>",
            token: "[:alnum:]"
        }, {
            id: "dot",
            tip: "Matches any character {{getDotAll()}}.",
            desc: "Matches any character except linebreaks.",
            ext: " Equivalent to <code>[^\\n\\r]</code>.",
            example: [".", "glib jocks vex dwarves!"],
            token: "."
        }, {
            label: "match any",
            desc: "A character set that can be used to match any character, including line breaks, without the dotall flag (<code>s</code>).<p>An alternative is <code>[^]</code>, but it is not supported in all browsers.</p>",
            example: ["[\\s\\S]", "glib jocks vex dwarves!"],
            token: "[\\s\\S]"
        }, {
            id: "unicodegrapheme",
            label: "unicode grapheme",
            desc: "Matches any single unicode grapheme (ie. character).",
            ext: " This includes line breaks (regardless of the dotall mode) and graphemes encoded as multiple code points.",
            token: "\\X"
        }, {
            id: "word",
            desc: "Matches any word character (alphanumeric & underscore).",
            ext: " Only matches low-ascii characters (no accented or non-roman characters). Equivalent to <code>[A-Za-z0-9_]</code>",
            example: ["\\w", "bonjour, mon frère"],
            token: "\\w"
        }, {
            id: "notword",
            label: "not word",
            desc: "Matches any character that is not a word character (alphanumeric & underscore).",
            ext: " Equivalent to <code>[^A-Za-z0-9_]</code>",
            example: ["\\W", "bonjour, mon frère"],
            token: "\\W"
        }, {
            id: "digit",
            desc: "Matches any digit character (0-9).",
            ext: " Equivalent to <code>[0-9]</code>.",
            example: ["\\d", "+1-(444)-555-1234"],
            token: "\\d"
        }, {
            id: "notdigit",
            label: "not digit",
            desc: "Matches any character that is not a digit character (0-9).",
            ext: " Equivalent to <code>[^0-9]</code>.",
            example: ["\\D", "+1-(444)-555-1234"],
            token: "\\D"
        }, {
            id: "whitespace",
            desc: "Matches any whitespace character (spaces, tabs, line breaks).",
            example: ["\\s", "glib jocks vex dwarves!"],
            token: "\\s"
        }, {
            id: "notwhitespace",
            label: "not whitespace",
            desc: "Matches any character that is not a whitespace character (spaces, tabs, line breaks).",
            example: ["\\S", "glib jocks vex dwarves!"],
            token: "\\S"
        }, {
            id: "hwhitespace",
            label: "horizontal whitespace",
            desc: "Matches any horizontal whitespace character (spaces, tabs).",
            token: "\\h"
        }, {
            id: "nothwhitespace",
            label: "not horizontal whitespace",
            desc: "Matches any character that is not a horizontal whitespace character (spaces, tabs).",
            token: "\\H"
        }, {
            id: "vwhitespace",
            label: "vertical whitespace",
            desc: "Matches any vertical whitespace character (line breaks).",
            token: "\\v"
        }, {
            id: "notvwhitespace",
            label: "not vertical whitespace",
            desc: "Matches any character that is not a vertical whitespace character (line breaks).",
            token: "\\V"
        }, {
            id: "linebreak",
            label: "line break",
            desc: "Matches any line break character, including the CRLF pair, and CR / LF individually.",
            token: "\\R"
        }, {
            id: "notlinebreak",
            label: "not line break",
            desc: "Matches any character that is not a line break.",
            ext: " Similar to dot (<code>.</code>) but is unaffected by the dotall flag (<code>s</code>).",
            token: "\\N"
        }, {
            id: "unicodecat",
            tip: "Matches any character in the '{{getUniCat()}}' unicode category.",
            label: "unicode category",
            desc: "Matches a character in the specified unicode category. For example, <code>\\p{Ll}</code> will match any lowercase letter.",
            ext: "<p>For a list of categories, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p><p>There are multiple syntaxes for this feature:</p><p><code>\\p{L}</code> <code>\\pL</code></p>",
            token: "\\p{L}"
        }, {
            id: "notunicodecat",
            tip: "Matches any character that is not in the '{{getUniCat()}}' unicode category.",
            label: "not unicode category",
            desc: "Matches any character that is not in the specified unicode category.",
            ext: "<p>For a list of categories, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p><p>There are multiple syntaxes for this feature:</p><p><code>\\P{L}</code> <code>\\p{^L}</code> <code>\\PL</code></p>",
            token: "\\P{L}"
        }, {
            id: "unicodescript",
            tip: "Matches any character in the '{{value}}' unicode script.",
            label: "unicode script",
            desc: "Matches any character in the specified unicode script. For example, <code>\\p{Arabic}</code> will match characters in the Arabic script.",
            ext: "<p>For a list of scripts, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p>",
            token: "\\p{Han}"
        }, {
            id: "notunicodescript",
            tip: "Matches any character that is not in the '{{value}}' unicode script.",
            label: "not unicode script",
            desc: "Matches any character that is not in the specified unicode script.",
            ext: "<p>For a list of scripts, see the <a href='http://www.pcre.org/original/doc/html/pcrepattern.html'>PCRE spec</a>.</p><p>There are multiple syntaxes for this feature:</p><p><code>\\P{Han}</code> <code>\\p{^Han}</code>",
            token: "\\P{Han}"
        }]
    }, {
        label: "Anchors",
        id: "anchors",
        desc: "Anchors are unique in that they match a position within a string, not a character.",
        kids: [{
            id: "bos",
            label: "beginning of string",
            desc: "Matches the beginning of the string.",
            ext: " Unlike <code>^</code>, this is unaffected by the multiline flag (<code>m</code>). This matches a position, not a character.",
            token: "\\A"
        }, {
            id: "eos",
            label: "end of string",
            desc: "Matches the end of the string.",
            ext: " Unlike <code>$</code>, this is unaffected by the multiline flag (<code>m</code>). This matches a position, not a character.",
            token: "\\Z"
        }, {
            id: "abseos",
            label: "strict end of string",
            desc: "Matches the end of the string. Unlike <code>$</code> or <code>\\Z</code>, it does not allow for a trailing newline.",
            ext: " This is unaffected by the multiline flag (<code>m</code>). This matches a position, not a character.",
            token: "\\z"
        }, {
            id: "bof",
            label: "beginning",
            desc: "Matches the beginning of the string, or the beginning of a line if the multiline flag (<code>m</code>) is enabled.",
            ext: " This matches a position, not a character.",
            example: ["^\\w+", "she sells seashells"],
            token: "^"
        }, {
            id: "eof",
            label: "end",
            desc: "Matches the end of the string, or the end of a line if the multiline flag (<code>m</code>) is enabled.",
            ext: " This matches a position, not a character.",
            example: ["\\w+$", "she sells seashells"],
            token: "$"
        }, {
            id: "wordboundary",
            label: "word boundary",
            desc: "Matches a word boundary position between a word character and non-word character or position (start / end of string).",
            ext: " See the word character class (<code>w</code>) for more info.",
            example: ["s\\b", "she sells seashells"],
            token: "\\b"
        }, {
            id: "notwordboundary",
            label: "not word boundary",
            desc: "Matches any position that is not a word boundary.",
            ext: " This matches a position, not a character.",
            example: ["s\\B", "she sells seashells"],
            token: "\\B"
        }, {
            id: "prevmatchend",
            label: "previous match end",
            desc: "Matches the end position of the previous match.",
            ext: " This matches a position, not a character.",
            token: "\\G"
        }]
    }, {
        label: "Escaped characters",
        id: "escchars",
        desc: "Escape sequences can be used to insert reserved, special, and unicode characters. All escaped characters begin with the <code>\\</code> character.",
        kids: [{
            id: "reservedchar",
            label: "reserved characters",
            desc: "The following character have special meaning, and must be preceded by a <code>\\</code> (backslash) to represent a literal character:<p><code>{{getEscChars()}}</code></p><p>Within a character set, only <code>\\</code>, <code>-</code>, and <code>]</code> need to be escaped.</p>",
            example: ["\\+", "1 + 1 = 2"],
            token: "\\+",
            show: !0
        }, {
            id: "escoctal",
            label: "octal escape",
            desc: "Octal escaped character in the form <code>\\000</code>.",
            ext: " Value must be less than 255 (<code>\\377</code>).",
            example: ["\\251", "RegExr is ©2014"],
            token: "\\000"
        }, {
            id: "eschexadecimal",
            label: "hexadecimal escape",
            desc: "Hexadecimal escaped character in the form <code>\\xFF</code>.",
            example: ["\\xA9", "RegExr is ©2014"],
            token: "\\xFF"
        }, {
            id: "escunicodeu",
            label: "unicode escape",
            desc: "Unicode escaped character in the form <code>\\uFFFF</code>",
            example: ["\\u00A9", "RegExr is ©2014"],
            token: "\\uFFFF"
        }, {
            id: "escunicodeub",
            label: "extended unicode escape",
            desc: "Unicode escaped character in the form <code>\\u{FFFF}</code>.",
            ext: " Supports a full range of unicode point escapes with any number of hex digits. <p>Requires the unicode flag (<code>u</code>).</p>",
            token: "\\u{FFFF}"
        }, {
            id: "escunicodexb",
            label: "unicode escape",
            desc: "Unicode escaped character in the form <code>\\x{FF}</code>.",
            token: "\\x{FF}"
        }, {
            id: "esccontrolchar",
            label: "control character escape",
            desc: "Escaped control character in the form <code>\\cZ</code>.",
            ext: " This can range from <code>\\cA</code> (SOH, char code 1) to <code>\\cZ</code> (SUB, char code 26). <h1>Example:</h1><code>\\cI</code> matches TAB (char code 9).",
            token: "\\cI"
        }, {
            id: "escsequence",
            label: "escape sequence",
            tip: "Matches the literal string '{{value}}'.",
            desc: "All characters between the <code>\\Q</code> and the <code>\\E</code> are interpreted as a literal string. If <code>\\E</code> is omitted, it continues to the end of the expression.",
            ext: " For example, the expression <code>/\\Q(?.)\\E/</code> will match the string <code>(?.)</code>.",
            token: "\\Q...\\E"
        }]
    }, {
        label: "Groups & References",
        id: "groups",
        desc: "Groups allow you to combine a sequence of tokens to operate on them together. Capture groups can be referenced by a backreference and accessed separately in the results.",
        kids: [{
            id: "group",
            label: "capturing group",
            desc: "Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.",
            example: ["(ha)+", "hahaha haa hah!"],
            token: "(ABC)"
        }, {
            id: "namedgroup",
            label: "named capturing group",
            tip: "Creates a capturing group named '{{name}}'.",
            desc: "Creates a capturing group that can be referenced via the specified name.",
            ext: "<p>There are multiple syntaxes for this feature:</p><p><code>(?'name'ABC)</code> <code>(?P&lt;name>ABC)</code> <code>(?&lt;name>ABC)</code></p>",
            token: "(?'name'ABC)"
        }, {
            id: "namedref",
            label: "named reference",
            tip: "Matches the results of the capture group named '{{group.name}}'.",
            desc: "Matches the results of a named capture group.",
            ext: "<p>There are multiple syntaxes for this feature:</p><p><code>\\k'name'</code> <code>\\k&lt;name></code> <code>\\k{name}</code> <code>\\g{name}</code> <code>(?P=name)</code></p>",
            token: "\\k'name'"
        }, {
            id: "numref",
            label: "numeric reference",
            tip: "Matches the results of capture group #{{group.num}}.",
            desc: "Matches the results of a capture group. For example <code>\\1</code> matches the results of the first capture group & <code>\\3</code> matches the third.",
            example: ["(\\w)a\\1", "hah dad bad dab gag gab"],
            token: "\\1"
        }, {
            id: "branchreset",
            label: "branch reset group",
            desc: "Define alternative groups that share the same group numbers.",
            ext: "<p>For example, in <code>(?|(a)|(b))</code> both groups (a and b) would be counted as group #1.",
            token: "(?|(a)|(b))"
        }, {
            id: "noncapgroup",
            label: "non-capturing group",
            desc: "Groups multiple tokens together without creating a capture group.",
            example: ["(?:ha)+", "hahaha haa hah!"],
            token: "(?:ABC)"
        }, {
            id: "atomic",
            label: "atomic group",
            desc: "Non-capturing group that discards backtracking positions once matched.",
            ext: "<p>For example, <code>/(?>ab|a)b/</code> will match <code>abb</code> but not <code>ab</code> because once the <code>ab</code> option has matched, the atomic group prevents backtracking to retry with the <code>a</code> option.</p>",
            token: "(?>ABC)"
        }, {
            id: "define",
            desc: "Used to define named groups for use as subroutines without including them in the match.",
            ext: "<p>For example, <code>/A(?(DEFINE)(?'foo'Z))B\\g'foo'/</code> will match <code>ABZ</code>, because the define group is ignored in the match except to define the <code>foo</code> subroutine that is referenced later with <code>\\g'foo'</code>.</p>",
            token: "(?(DEFINE)(?'foo'ABC))"
        }, {
            id: "numsubroutine",
            label: "numeric subroutine",
            tip: "Matches the expression in capture group #{{group.num}}.",
            desc: "Matches the expression in a capture group. Compare this to a reference, that matches the result. For example <code>/(a|b)\\g'1'/</code> can match <code>ab</code>, because the expression <code>a|b</code> is evaluated again.",
            ext: "<p>There are multiple syntaxes for this feature: <code>\\g&lt;1></code> <code>\\g'1'</code> <code>(?1)</code>.</p><p>Relative values preceded by <code>+</code> or <code>-</code> are also supported. For example <code>\\g<-1></code> would match the group preceding the reference.</p>",
            token: "\\g'1'"
        }, {
            id: "namedsubroutine",
            label: "named subroutine",
            tip: "Matches the expression in the capture group named '{{group.name}}'.",
            desc: "Matches the expression in a capture group. Compare this to a reference, that matches the result.",
            ext: "<p>There are multiple syntaxes for this feature: <code>\\g&lt;name></code> <code>\\g'name'</code> <code>(?&name)</code> <code>(?P>name)</code>.</p>",
            token: "\\g'name'"
        }]
    }, {
        label: "Lookaround",
        id: "lookaround",
        desc: "Lookaround lets you match a group before (lookbehind) or after (lookahead) your main pattern without including it in the result.<p>Negative lookarounds specify a group that can NOT match before or after the pattern.</p>",
        kids: [{
            id: "poslookahead",
            label: "positive lookahead",
            desc: "Matches a group after the main expression without including it in the result.",
            example: ["\\d(?=px)", "1pt 2px 3em 4px"],
            token: "(?=ABC)"
        }, {
            id: "neglookahead",
            label: "negative lookahead",
            desc: "Specifies a group that can not match after the main expression (if it matches, the result is discarded).",
            example: ["\\d(?!px)", "1pt 2px 3em 4px"],
            token: "(?!ABC)"
        }, {
            id: "poslookbehind",
            label: "positive lookbehind",
            desc: "Matches a group before the main expression without including it in the result.",
            token: "(?<=ABC)"
        }, {
            id: "neglookbehind",
            label: "negative lookbehind",
            desc: "Specifies a group that can not match before the main expression (if it matches, the result is discarded).",
            token: "(?<!ABC)"
        }, {
            id: "keepout",
            label: "keep out",
            desc: "Keep text matched so far out of the returned match, essentially discarding the match up to this point.",
            ext: "For example <code>/o\\Kbar/</code> will match <code>bar</code> within the string <code>foobar</code>",
            token: "\\K"
        }]
    }, {
        label: "Quantifiers & Alternation",
        id: "quants",
        desc: "Quantifiers indicate that the preceding token must be matched a certain number of times. By default, quantifiers are greedy, and will match as many characters as possible.<hr/>Alternation acts like a boolean OR, matching one sequence or another.",
        kids: [{
            id: "plus",
            desc: "Matches 1 or more of the preceding token.",
            example: ["b\\w+", "b be bee beer beers"],
            token: "+"
        }, {
            id: "star",
            desc: "Matches 0 or more of the preceding token.",
            example: ["b\\w*", "b be bee beer beers"],
            token: "*"
        }, {
            id: "quant",
            label: "quantifier",
            tip: "Match {{getQuant()}} of the preceding token.",
            desc: "Matches the specified quantity of the previous token. <code>{1,3}</code> will match 1 to 3. <code>{3}</code> will match exactly 3. <code>{3,}</code> will match 3 or more. ",
            example: ["b\\w{2,3}", "b be bee beer beers"],
            token: "{1,3}"
        }, {
            id: "opt",
            label: "optional",
            desc: "Matches 0 or 1 of the preceding token, effectively making it optional.",
            example: ["colou?r", "color colour"],
            token: "?"
        }, {
            id: "lazy",
            tip: "Makes the preceding quantifier {{getLazy()}}, causing it to match as {{getLazyFew()}} characters as possible.",
            desc: "Makes the preceding quantifier lazy, causing it to match as few characters as possible.",
            ext: " By default, quantifiers are greedy, and will match as many characters as possible.",
            example: ["b\\w+?", "b be bee beer beers"],
            token: "?"
        }, {
            id: "possessive",
            desc: "Makes the preceding quantifier possessive. It will match as many characters as possible, and will not release them to match subsequent tokens.",
            ext: "<p>For example <code>/.*a/</code> would match <code>aaa</code>, but <code>/.*+a/</code> would not, because the repeating dot would match and not release the last character to match <code>a</code>.</p>",
            token: "+"
        }, {
            id: "alt",
            label: "alternation",
            desc: "Acts like a boolean OR. Matches the expression before or after the <code>|</code>.",
            ext: "<p>It can operate within a group, or on a whole expression. The patterns will be tested in order.</p>",
            example: ["b(a|e|i)d", "bad bud bod bed bid"],
            token: "|"
        }]
    }, {
        label: "Special",
        id: "other",
        desc: "Tokens that don't quite fit anywhere else.",
        kids: [{
            id: "comment",
            desc: "Allows you to insert a comment into your expression that is ignored when finding a match.",
            token: "(?#foo)"
        }, {
            id: "conditional",
            desc: "Conditionally matches one of two options based on whether a lookaround is matched.",
            ext: "<p>For example, <code>/(?(?=a)ab|..)/</code> will match <code>ab</code> and <code>zx</code> but not <code>ax</code>, because if the first character matches the condition <code>a</code> then it evaluates the pattern <code>ab</code>.</p><p>Any lookaround can be used as the condition. A lookahead will start the subsequent match at the start of the condition, a lookbehind will start it after.</p>",
            token: "(?(?=A)B|C)"
        }, {
            id: "conditionalgroup",
            label: "group conditional",
            desc: "Conditionally matches one of two options based on whether group '{{name}}' matched.",
            ext: "<p>For example, <code>/(z)?(?(1)a|b)/</code> will match <code>za</code> because the first capture group matches <code>z</code> successfully, which causes the conditional to match the first option <code>a</code>.</p><p>The same pattern will also match <code>b</code> on its own, because group 1 doesn't match, so it instead tries to match the second option <code>b</code>.</p><p>You can reference a group by name, number, or relative position (ex. <code>-1</code>).</p>",
            token: "(?(1)B|C)"
        }, {
            id: "recursion",
            desc: "Attempts to match the full expression again at the current position.",
            ext: "<p>For example, <code>/a(?R)?b/</code> will match any number of <code>a</code> followed by the same number of <code>z</code>: the full text of <code>az</code> or <code>aaaazzzz</code>, but not <code>azzz</code>.</p><p>There are multiple syntaxes for this feature:</p><p><code>(?R)</code> <code>(?0)</code> <code>\\g<0></code> <code>\\g'0'</code></p>",
            token: "(?R)"
        }, {
            id: "mode",
            label: "mode modifier",
            tip: "{{~getDesc()}}{{~getModes()}}",
            desc: "Enables or disables modes for the remainder of the expression.",
            ext: "Matching modes generally map to expression flags. For example <code>(?i)</code> would enable case insensitivity for the remainder of the expression.<p>Multiple modifiers can be specified, and any modifiers that follow <code>-</code> are disabled. For example <code>(?im-s)</code> would enable case insensitivity &amp; multiline modes, and disable dotall.</p><p>Supported modifiers are: <code>i</code> - case insensitive, <code>s</code> - dotall, <code>m</code> - multiline, <code>x</code> - free spacing, <code>J</code> - allow duplicate names, <code>U</code> - ungreedy.</p>",
            token: "(?i)"
        }]
    }, {
        label: "Substitution",
        desc: "These tokens are used in a substitution string to insert different parts of the match.",
        target: "subst",
        id: "subst",
        kids: [{
            id: "subst_$&match",
            label: "match",
            desc: "Inserts the matched text.",
            token: "$&"
        }, {
            id: "subst_0match",
            label: "match",
            desc: "Inserts the matched text.",
            ext: "<p>There are multiple syntaxes for this feature:</p><p><code>$0</code> <code>\\0</code> <code>\\{0}</code></p>",
            token: "$0"
        }, {
            id: "subst_group",
            label: "capture group",
            tip: "Inserts the results of capture group #{{group.num}}.",
            desc: "Inserts the results of the specified capture group. For example, <code>$3</code> would insert the third capture group.",
            ext: "<p>There are multiple syntaxes for this feature:</p><p><code>$1</code> <code>\\1</code> <code>\\{1}</code></p>",
            token: "$1"
        }, {
            id: "subst_$before",
            label: "before match",
            desc: "Inserts the portion of the source string that precedes the match.",
            token: "$`"
        }, {
            id: "subst_$after",
            label: "after match",
            desc: "Inserts the portion of the source string that follows the match.",
            token: "$'"
        }, {
            id: "subst_$esc",
            label: "escaped $",
            desc: "Inserts a dollar sign character ($).",
            token: "$$"
        }, {
            id: "subst_esc",
            label: "escaped characters",
            token: "\\n",
            desc: "For convenience, these escaped characters are supported in the Replace string in RegExr: <code>\\n</code>, <code>\\r</code>, <code>\\t</code>, <code>\\\\</code>, and unicode escapes <code>\\uFFFF</code>. This may vary in your deploy environment."
        }]
    }, {
        id: "flags",
        label: "Flags",
        tooltip: "Expression flags change how the expression is interpreted. Click to edit.",
        desc: "Expression flags change how the expression is interpreted. There are three flags in JS: i, g, and m. Flags follow the closing backslash of the expression (ex. <code>/.+/igm</code> ).",
        target: "flags",
        kids: [{
            id: "caseinsensitive",
            label: "ignore case",
            desc: "Makes the whole expression case-insensitive.",
            ext: " For example, <code>/aBc/i</code> would match <code>AbC</code>.",
            token: "i"
        }, {
            id: "global",
            label: "global search",
            tip: "Retain the index of the last match, allowing iterative searches.",
            desc: "Retain the index of the last match, allowing subsequent searches to start from the end of the previous match.<p>Without the global flag, subsequent searches will return the same match.</p><hr/>RegExr only searches for a single match when the global flag is disabled to avoid infinite match errors.",
            token: "g"
        }, {
            id: "multiline",
            tip: "Beginning/end anchors (<b>^</b>/<b>$</b>) will match the start/end of a line.",
            desc: "When the multiline flag is enabled, beginning and end anchors (<code>^</code> and <code>$</code>) will match the start and end of a line, instead of the start and end of the whole string.<p>Note that patterns such as <code>/^[\\s\\S]+$/m</code> may return matches that span multiple lines because the anchors will match the start/end of <b>any</b> line.</p>",
            token: "m"
        }, {
            id: "unicode",
            tip: "Enables <code>\\x{FFFFF}</code> unicode escapes.",
            desc: "When the unicode flag is enabled, you can use extended unicode escapes in the form <code>\\x{FFFFF}</code>.<p>It also makes other escapes stricter, causing unrecognized escapes (ex. <code>\\j</code>) to throw an error.</p>",
            token: "u"
        }, {
            id: "sticky",
            desc: "The expression will only match from its lastIndex position and ignores the global (<code>g</code>) flag if set.",
            ext: " Because each search in RegExr is discrete, this flag has no further impact on the displayed results.",
            token: "y"
        }, {
            id: "dotall",
            desc: "Dot (<code>.</code>) will match any character, including newline.",
            token: "s"
        }, {
            id: "extended",
            desc: "Literal whitespace characters are ignored, except in character sets.",
            token: "x"
        }, {
            id: "ungreedy",
            tip: "Makes quantifiers ungreedy (lazy) by default.",
            desc: "Makes quantifiers ungreedy (lazy) by default. Quantifiers followed by <code>?</code> will become greedy.",
            token: "U"
        }]
    }],
    ee.misc = {
        kids: [{
            id: "ignorews",
            label: "ignored whitespace",
            tip: "Whitespace character ignored due to the e<b>x</b>tended flag or mode."
        }, {
            id: "extnumref",
            proxy: "numref"
        }, {
            id: "char",
            label: "character",
            tip: "Matches a {{getChar()}} character (char code {{code}}). {{getInsensitive()}}"
        }, {
            id: "escchar",
            label: "escaped character",
            tip: "Matches a {{getChar()}} character (char code {{code}})."
        }, {
            id: "open",
            tip: "Indicates the start of a regular expression."
        }, {
            id: "close",
            tip: "Indicates the end of a regular expression and the start of expression flags."
        }, {
            id: "condition",
            tip: "The lookaround to match in resolving the enclosing conditional statement. See 'conditional' in the Reference for info."
        }, {
            id: "conditionalelse",
            label: "conditional else",
            tip: "Delimits the 'else' portion of the conditional."
        }, {
            id: "ERROR",
            tip: "Errors in the expression are underlined in red. Roll over errors for more info."
        }, {
            id: "PREG_INTERNAL_ERROR",
            tip: "Internal PCRE error"
        }, {
            id: "PREG_BACKTRACK_LIMIT_ERROR",
            tip: "Backtrack limit was exhausted."
        }, {
            id: "PREG_RECURSION_LIMIT_ERROR",
            tip: "Recursion limit was exhausted"
        }, {
            id: "PREG_BAD_UTF8_ERROR",
            tip: "Malformed UTF-8 data"
        }, {
            id: "PREG_BAD_UTF8_OFFSET_ERROR",
            tip: "Malformed UTF-8 data"
        }]
    },
    ee.errors = (Q = {
        groupopen: "Unmatched opening parenthesis.",
        groupclose: "Unmatched closing parenthesis.",
        setopen: "Unmatched opening square bracket.",
        rangerev: "Range values reversed. Start char code is greater than end char code.",
        quanttarg: "Invalid target for quantifier.",
        quantrev: "Quantifier minimum is greater than maximum.",
        esccharopen: "Dangling backslash.",
        esccharbad: "Unrecognized or malformed escape character.",
        unicodebad: "Unrecognized unicode category or script.",
        posixcharclassbad: "Unrecognized POSIX character class.",
        posixcharclassnoset: "POSIX character class must be in a character set.",
        notsupported: 'The "{{~getLabel()}}" feature is not supported in this flavor of RegEx.',
        fwdslash: "Unescaped forward slash."
    },
    o(Q, "esccharbad", "Invalid escape sequence."),
    o(Q, "infinite", "The expression can match 0 characters, and therefore matches infinitely."),
    o(Q, "timeout", "The expression took longer than 250ms to execute."),
    o(Q, "servercomm", "An error occurred while communicating with the server."),
    o(Q, "extraelse", "Extra else in conditional group."),
    o(Q, "unmatchedref", 'Reference to non-existent group "{{name}}".'),
    o(Q, "modebad", 'Unrecognized mode flag "<code>{{errmode}}</code>".'),
    o(Q, "badname", "Group name can not start with a digit."),
    o(Q, "dupname", "Duplicate group name."),
    o(Q, "branchreseterr", "<b>Branch Reset.</b> Results will be ok, but RegExr's parser does not number branch reset groups correctly. Coming soon!"),
    Q);
    var te = function() {
        function e() {
            r(this, e)
        }
        return i(e, [{
            key: "solve",
            value: function(e, t) {
                var n = this;
                this._callback = t,
                this._req = e;
                var r = e.text
                  , i = void 0;
                try {
                    this._regex = i = new RegExp(e.pattern,e.flags)
                } catch (e) {
                    return this._onRegExComplete({
                        id: "regexparse",
                        name: e.name,
                        message: e.message
                    })
                }
                if (window.Worker) {
                    this._worker && (clearTimeout(this._timeoutId),
                    this._worker.terminate());
                    var o = this._worker = new Worker("assets/workers/RegExWorker.js");
                    o.onmessage = function(e) {
                        "onload" === e.data ? (n._startTime = f.now(),
                        n._timeoutId = setTimeout(function() {
                            n._doCallback({
                                id: "timeout"
                            }),
                            o.terminate()
                        }, 250)) : (clearTimeout(n._timeoutId),
                        n._onRegExComplete(e.data.error, e.data.matches))
                    }
                    ,
                    o.postMessage({
                        pattern: e.pattern,
                        flags: e.flags,
                        text: r
                    })
                } else {
                    this._startTime = f.now();
                    for (var s, a, l, c = []; s = i.exec(r); ) {
                        if (a === i.lastIndex) {
                            l = {
                                id: "infinite"
                            };
                            break
                        }
                        a = i.lastIndex;
                        var u = s.reduce(function(e, t, n) {
                            return (0 === n || e.push({
                                s: t
                            })) && e
                        }, []);
                        if (c.push({
                            i: s.index,
                            l: s[0].length,
                            groups: u
                        }),
                        !i.global)
                            break
                    }
                    this._onRegExComplete(l, c)
                }
            }
        }, {
            key: "_onRegExComplete",
            value: function(e, t) {
                var n = {
                    time: f.now() - this._startTime,
                    error: e,
                    matches: t
                }
                  , r = this._req.tool;
                if (n.tool = {
                    id: r.id
                },
                !e && null != r.input) {
                    var i = f.unescSubstStr(r.input);
                    n.tool.result = "replace" === r.id ? this._getReplace(i) : this._getList(i)
                }
                this._callback(n)
            }
        }, {
            key: "_getReplace",
            value: function(e) {
                return this._req.text.replace(this._regex, e)
            }
        }, {
            key: "_getList",
            value: function(e) {
                var t = this._req.text
                  , n = ""
                  , r = void 0
                  , i = void 0
                  , o = 0
                  , s = void 0;
                try {
                    s = new RegExp(this._req.pattern,this._req.flags.replace("g", ""))
                } catch (e) {
                    return null
                }
                for (-1 === e.search(/\$[&1-9`']/) && (o = e.length,
                e = "$&" + e); ; ) {
                    var a = (i = t.replace(s, "\b")).indexOf("\b");
                    if (-1 === a || i.length > t.length)
                        break;
                    n += (r = t.replace(s, e)).substr(a, r.length - i.length + 1),
                    t = i.substr(a + 1)
                }
                return o && (n = n.substr(0, n.length - o)),
                n
            }
        }]),
        e
    }()
      , ne = function() {
        function e() {
            r(this, e)
        }
        return i(e, [{
            key: "solve",
            value: function(e, t) {
                var n = this;
                null != e.tool.input && (e.tool.input = f.unescSubstStr(e.tool.input)),
                this._serverPromise && this._serverPromise.abort(),
                f.defer(function() {
                    return n._solve(e, t)
                }, "ServerSolver._solve", 250)
            }
        }, {
            key: "_solve",
            value: function(e, t) {
                var n = this;
                this._callback = t,
                this._serverPromise = b.solve(e).then(function(e) {
                    return n._onLoad(e)
                }).catch(function(e) {
                    return n._onError(e)
                })
            }
        }, {
            key: "_onLoad",
            value: function(e) {
                this._callback(e)
            }
        }, {
            key: "_onError",
            value: function(e) {
                this._callback({
                    error: {
                        id: e
                    }
                })
            }
        }]),
        e
    }()
      , re = function(e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return n.value = e,
            n._browserSolver = new te,
            n._serverSolver = new ne,
            n
        }
        return s(t, u),
        i(t, [{
            key: "isTokenSupported",
            value: function(e) {
                return !!this._profile._supportMap[e]
            }
        }, {
            key: "getDocs",
            value: function(e) {
                return this._profile.docs[e]
            }
        }, {
            key: "validateFlags",
            value: function(e) {
                var t = this._profile.flags
                  , n = {};
                return e.filter(function(e) {
                    return !!t[e] && !n[e] && (n[e] = !0)
                })
            }
        }, {
            key: "validateFlagsStr",
            value: function(e) {
                return this.validateFlags(e.split("")).join("")
            }
        }, {
            key: "isFlagSupported",
            value: function(e) {
                return !!this._profile.flags[e]
            }
        }, {
            key: "_buildSupportMap",
            value: function(e) {
                if (!e._supportMap) {
                    var n = e._supportMap = {}
                      , r = t.SUPPORT_MAP_PROPS
                      , i = void 0;
                    for (i in r)
                        this._addToSupportMap(n, e[i], !!r[i]);
                    var o = e.escCharCodes
                      , s = e.escChars;
                    for (i in o)
                        n["esc_" + o[i]] = !0;
                    for (i in s)
                        n["esc_" + s[i]] = !0
                }
            }
        }, {
            key: "_addToSupportMap",
            value: function(e, t, n) {
                if (n)
                    for (var r in t)
                        e[t[r]] = !0;
                else
                    for (var i in t)
                        e[i] = t[i]
            }
        }, {
            key: "value",
            set: function(e) {
                var t = F[e || "js"];
                t && t !== this._profile && (x.page("flavor/" + e),
                this._profile = t,
                this._buildSupportMap(t),
                this.dispatchEvent("change"))
            },
            get: function() {
                return this._profile.id
            }
        }, {
            key: "profile",
            get: function() {
                return this._profile
            }
        }, {
            key: "profiles",
            get: function() {
                return [F.js, F.pcre]
            }
        }, {
            key: "solver",
            get: function() {
                return this._profile.browser ? this._browserSolver : this._serverSolver
            }
        }]),
        t
    }();
    re.SUPPORT_MAP_PROPS = {
        flags: 1,
        escCharTypes: 1,
        charTypes: 1,
        tokens: 0,
        substTokens: 0
    };
    var ie = function e() {
        r(this, e),
        oe.flavor._buildSupportMap(L);
        var t = oe.reference._idMap
          , n = []
          , i = []
          , o = L._supportMap
          , s = {
            escchar: !0,
            groupclose: !0,
            setclose: !0,
            condition: !0,
            conditionalelse: !0,
            subst_$group: !0,
            subst_$bgroup: !0,
            subst_bsgroup: !0,
            escoctalo: !0
        };
        for (var a in o)
            t[a] || s[a] || n.push(a);
        for (var l in t)
            o[l] || t[l].kids || i.push(l);
        console.log("--- UNDOCUMENTED IDS ---\n" + n.join("\n") + "\n\n--- UNUSED DOCS? ---\n" + i.join("\n"))
    }
      , oe = new (function(e) {
        function t() {
            return r(this, t),
            a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return s(t, u),
        i(t, [{
            key: "init",
            value: function(e, t) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.flavor = new re("js"),
                this.reference = new Z(J,this.flavor,r),
                this._migrateFavorites(),
                this._initUI(),
                !1 === e ? this._localInit() : this.state = e,
                this.account.value = t,
                this._savedHash = null;
                var i = f.getUrlParams();
                i.expression && (this.expression.value = i.expression),
                i.text && (this.text.value = i.text),
                i.tool && (this.tools.value = {
                    id: i.tool,
                    input: i.input
                }),
                window.onbeforeunload = function(e) {
                    return n.unsaved ? "You have unsaved changes." : null
                }
                ,
                this.resetUnsaved()
            }
        }, {
            key: "_localInit",
            value: function() {
                console.log("local init"),
                new ie
            }
        }, {
            key: "resetUnsaved",
            value: function() {
                this._savedHash = this.hash
            }
        }, {
            key: "_initUI",
            value: function() {
                var e = this;
                screen.width < 500 && document.getElementById("viewport").setAttribute("content", "width=500, user-scalable=0"),
                this._matchList = window.matchMedia("(max-width: 900px)"),
                this._matchList.addListener(function(t) {
                    return e.dispatchEvent("narrow")
                }),
                this.el = h.query(".container"),
                this.tooltip = {
                    hover: new m(h.query("#library #tooltip").cloneNode(!0)),
                    toggle: new m(h.query("#library #tooltip"),!0)
                };
                var t = h.query(".app > .doc", this.el);
                this.expression = new N(h.query("> section.expression", t)),
                this.text = new D(h.query("> section.text", t)),
                this.tools = new z(h.query("> section.tools", t)),
                this.account = new K,
                this.sidebar = new Y(h.query(".app > .sidebar", this.el)),
                this.share = this.sidebar.share,
                this.expression.on("change", function() {
                    return e._change()
                }),
                this.text.on("change", function() {
                    return e._change()
                }),
                this.flavor.on("change", function() {
                    return e._change()
                }),
                this.tools.on("change", function() {
                    return e._change()
                }),
                this.share.on("change", function() {
                    return e._change()
                }),
                this._change()
            }
        }, {
            key: "_migrateFavorites",
            value: function() {
                var e = window.localStorage
                  , t = e.length;
                if (t && !(e.getItem("f_v3") >= "1")) {
                    for (var n = [], r = 0; r < t; r++) {
                        var i = e.key(r)
                          , o = e.getItem(i);
                        "f" === i[0] && "1" === o && n.push(i.substr(1))
                    }
                    n.length ? b.multiFavorite(n).then(function() {
                        return e.setItem("f_v3", "1")
                    }) : e.setItem("f_v3", "1")
                }
            }
        }, {
            key: "_change",
            value: function() {
                var e = this;
                this.dispatchEvent("change");
                var t = this.flavor.solver
                  , n = this.expression;
                t.solve({
                    pattern: n.pattern,
                    flags: n.flags,
                    text: this.text.value,
                    tool: this.tools.value
                }, function(t) {
                    return e._handleResult(t)
                })
            }
        }, {
            key: "_handleResult",
            value: function(e) {
                this.result = this._processResult(e),
                this.dispatchEvent("result")
            }
        }, {
            key: "_processResult",
            value: function(e) {
                return e.matches && e.matches.forEach(function(e, t) {
                    return e.num = t
                }),
                e
            }
        }, {
            key: "state",
            get: function() {
                var e = {
                    expression: this.expression.value,
                    text: this.text.value,
                    flavor: this.flavor.value,
                    tool: this.tools.value
                };
                return f.copy(this.share.value, e)
            },
            set: function(e) {
                e && (this.flavor.value = e.flavor,
                this.expression.value = e.expression,
                this.text.value = e.text,
                this.tools.value = e.tool,
                this.share.pattern = e,
                this.resetUnsaved())
            }
        }, {
            key: "hash",
            get: function() {
                var e = this.share;
                return f.getHashCode(this.expression.value + "\t" + this.text.value + "\t" + this.flavor.value + "\t" + e.author + "\t" + e.name + "\t" + e.description + "\t" + e.keywords + "\t")
            }
        }, {
            key: "unsaved",
            get: function() {
                return this.hash !== this._savedHash
            }
        }, {
            key: "isNarrow",
            get: function() {
                return this._matchList.matches
            }
        }]),
        t
    }());
    return oe
}();
