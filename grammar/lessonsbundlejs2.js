! function(n, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) { if (!n.document) throw new Error("jQuery requires a window with a document"); return t(n) } : t(n) }("undefined" != typeof window ? window : this, function(n, t) { "use strict";

    function gi(n, t) { t = t || u; var i = t.createElement("script");
        i.text = n;
        t.head.appendChild(i).parentNode.removeChild(i) }

    function ui(n) { var t = !!n && "length" in n && n.length,
            r = i.type(n); return "function" === r || i.isWindow(n) ? !1 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n }

    function fi(n, t, r) { if (i.isFunction(t)) return i.grep(n, function(n, i) { return !!t.call(n, i, n) !== r }); if (t.nodeType) return i.grep(n, function(n) { return n === t !== r }); if ("string" == typeof t) { if (gf.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n) } return i.grep(n, function(n) { return lt.call(t, n) > -1 !== r && 1 === n.nodeType }) }

    function hr(n, t) { while ((n = n[t]) && 1 !== n.nodeType); return n }

    function ne(n) { var t = {}; return i.each(n.match(h) || [], function(n, i) { t[i] = !0 }), t }

    function d(n) { return n }

    function yt(n) { throw n; }

    function cr(n, t, r) { var u; try { n && i.isFunction(u = n.promise) ? u.call(n).done(t).fail(r) : n && i.isFunction(u = n.then) ? u.call(n, t, r) : t.call(void 0, n) } catch (n) { r.call(void 0, n) } }

    function wt() { u.removeEventListener("DOMContentLoaded", wt);
        n.removeEventListener("load", wt);
        i.ready() }

    function ot() { this.expando = i.expando + ot.uid++ }

    function ar(n, t, i) { var r; if (void 0 === i && 1 === n.nodeType)
            if (r = "data-" + t.replace(ie, "-$&").toLowerCase(), i = n.getAttribute(r), "string" == typeof i) { try { i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : te.test(i) ? JSON.parse(i) : i } catch (u) {}
                e.set(n, t, i) } else i = void 0;
        return i }

    function pr(n, t, r, u) { var h, e = 1,
            l = 20,
            c = u ? function() { return u.cur() } : function() { return i.css(n, t, "") },
            s = c(),
            o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || "px" !== o && +s) && st.exec(i.css(n, t)); if (f && f[3] !== o) { o = o || f[3];
            r = r || [];
            f = +s || 1;
            do e = e || ".5", f /= e, i.style(n, t, f + o); while (e !== (e = c() / s) && 1 !== e && --l) } return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h }

    function re(n) { var r, f = n.ownerDocument,
            u = n.nodeName,
            t = ei[u]; return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), "none" === t && (t = "block"), ei[u] = t, t) }

    function g(n, t) { for (var e, u, f = [], i = 0, o = n.length; o > i; i++) u = n[i], u.style && (e = u.style.display, t ? ("none" === e && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), "" === u.style.display && bt(u) && (f[i] = re(u))) : "none" !== e && (f[i] = "none", r.set(u, "display", e))); for (i = 0; o > i; i++) null != f[i] && (n[i].style.display = f[i]); return n }

    function o(n, t) { var r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : []; return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r }

    function oi(n, t) { for (var i = 0, u = n.length; u > i; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval")) }

    function gr(n, t, r, u, f) { for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; b > l; l++)
            if (e = n[l], e || 0 === e)
                if ("object" === i.type(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (dr.test(e)) { for (s = s || h.appendChild(t.createElement("div")), p = (br.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
            i.merge(y, s.childNodes);
            s = h.firstChild;
            s.textContent = "" } else y.push(t.createTextNode(e)); for (h.textContent = "", l = 0; e = y[l++];)
            if (u && i.inArray(e, u) > -1) f && f.push(e);
            else if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && oi(s), r)
            for (v = 0; e = s[v++];) kr.test(e.type || "") && r.push(e); return h }

    function dt() { return !0 }

    function nt() { return !1 }

    function tu() { try { return u.activeElement } catch (n) {} }

    function si(n, t, r, u, f, e) { var o, s; if ("object" == typeof t) { "string" != typeof r && (u = u || r, r = void 0); for (s in t) si(n, s, r, u, t[s], e); return n } if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), f === !1) f = nt;
        else if (!f) return n; return 1 === e && (o = f, f = function(n) { return i().off(n), o.apply(this, arguments) }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() { i.event.add(this, t, f, u, r) }) }

    function iu(n, t) { return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n : n }

    function le(n) { return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n }

    function ae(n) { var t = he.exec(n.type); return t ? n.type = t[1] : n.removeAttribute("type"), n }

    function ru(n, t) { var u, c, f, s, h, l, a, o; if (1 === t.nodeType) { if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) { delete h.handle;
                h.events = {}; for (f in o)
                    for (u = 0, c = o[f].length; c > u; u++) i.event.add(t, f, o[f][u]) }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a)) } }

    function ve(n, t) { var i = t.nodeName.toLowerCase(); "input" === i && wr.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue) }

    function tt(n, t, u, e) { t = bi.apply([], t); var l, p, c, a, s, w, h = 0,
            v = n.length,
            k = v - 1,
            y = t[0],
            b = i.isFunction(y); if (b || v > 1 && "string" == typeof y && !f.checkClone && se.test(y)) return n.each(function(i) { var r = n.eq(i);
            b && (t[0] = y.call(this, i, r.html()));
            tt(r, t, u, e) }); if (v && (l = gr(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, 1 === l.childNodes.length && (l = p), p || e)) { for (c = i.map(o(l, "script"), le), a = c.length; v > h; h++) s = l, h !== k && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h); if (a)
                for (w = c[c.length - 1].ownerDocument, i.map(c, ae), h = 0; a > h; h++) s = c[h], kr.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : gi(s.textContent.replace(ce, ""), w)) } return n }

    function uu(n, t, r) { for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && oi(o(u, "script")), u.parentNode.removeChild(u)); return n }

    function ht(n, t, r) { var o, s, h, u, e = n.style; return r = r || gt(n), r && (u = r.getPropertyValue(t) || r[t], "" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), !f.pixelMarginRight() && hi.test(u) && fu.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), void 0 !== u ? u + "" : u }

    function eu(n, t) { return { get: function() { return n() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function cu(n) { if (n in hu) return n; for (var i = n[0].toUpperCase() + n.slice(1), t = su.length; t--;)
            if (n = su[t] + i, n in hu) return n }

    function lu(n, t, i) { var r = st.exec(t); return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t }

    function au(n, t, r, u, f) { for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f))); return o }

    function vu(n, t, r) { var u, o = !0,
            e = gt(n),
            s = "border-box" === i.css(n, "boxSizing", !1, e); if (n.getClientRects().length && (u = n.getBoundingClientRect()[t]), 0 >= u || null == u) { if (u = ht(n, t, e), (0 > u || null == u) && (u = n.style[t]), hi.test(u)) return u;
            o = s && (f.boxSizingReliable() || u === n.style[t]);
            u = parseFloat(u) || 0 } return u + au(n, t, r || (s ? "border" : "content"), o, e) + "px" }

    function s(n, t, i, r, u) { return new s.prototype.init(n, t, i, r, u) }

    function wu() { rt && (n.requestAnimationFrame(wu), i.fx.tick()) }

    function bu() { return n.setTimeout(function() { it = void 0 }), it = i.now() }

    function ni(n, t) { var r, u = 0,
            i = { height: n }; for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n; return t && (i.opacity = i.width = n), i }

    function ku(n, t, i) { for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n)) return u }

    function we(n, t, u) { var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
            v = this,
            p = {},
            h = n.style,
            a = n.nodeType && bt(n),
            e = r.get(n, "fxshow");
        u.queue || (c = i._queueHooks(n, "fx"), null == c.unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() { c.unqueued || b() }), c.unqueued++, v.always(function() { v.always(function() { c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire() }) })); for (f in t)
            if (y = t[f], yu.test(y)) { if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) { if ("show" !== y || !e || void 0 === e[f]) continue;
                    a = !0 }
                p[f] = e && e[f] || i.style(n, f) }
        if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) { k && 1 === n.nodeType && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, null == o && (o = r.get(n, "display")), l = i.css(n, "display"), "none" === l && (o ? l = o : (g([n], !0), o = n.style.display || o, l = i.css(n, "display"), g([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (s || (v.done(function() { h.display = o }), null == o && (l = h.display, o = "none" === l ? "" : l)), h.display = "inline-block"));
            u.overflow && (h.overflow = "hidden", v.always(function() { h.overflow = u.overflow[0];
                h.overflowX = u.overflow[1];
                h.overflowY = u.overflow[2] }));
            s = !1; for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", { display: o }), w && (e.hidden = !a), a && g([n], !0), v.done(function() { a || g([n]);
                r.remove(n, "fxshow"); for (f in p) i.style(n, f, p[f]) })), s = ku(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0)) } }

    function be(n, t) { var r, f, e, u, o; for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) { u = o.expand(u);
                delete n[f]; for (r in u) r in n || (n[r] = u[r], t[r] = e) } else t[f] = e }

    function l(n, t, r) { var e, o, s = 0,
            a = l.prefilters.length,
            f = i.Deferred().always(function() { delete c.elem }),
            c = function() { if (o) return !1; for (var s = it || bu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; e > r; r++) u.tweens[r].run(i); return f.notifyWith(n, [u, i, t]), 1 > i && e ? t : (f.resolveWith(n, [u]), !1) },
            u = f.promise({ elem: n, props: i.extend({}, t), opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r), originalProperties: t, originalOptions: r, startTime: it || bu(), duration: r.duration, tweens: [], createTween: function(t, r) { var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(f), f }, stop: function(t) { var i = 0,
                        r = t ? u.tweens.length : 0; if (o) return this; for (o = !0; r > i; i++) u.tweens[i].run(1); return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this } }),
            h = u.props; for (be(h, u.opts.specialEasing); a > s; s++)
            if (e = l.prefilters[s].call(u, n, h, u.opts)) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
        return i.map(h, ku, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, { elem: n, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }

    function b(n) { return n.getAttribute && n.getAttribute("class") || "" }

    function ai(n, t, r, u) { var f; if (i.isArray(t)) i.each(t, function(t, i) { r || ke.test(n) ? u(n, i) : ai(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u) });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) ai(n + "[" + f + "]", t[f], r, u) }

    function sf(n) { return function(t, r) { "string" != typeof t && (r = t, t = "*"); var u, f = 0,
                e = t.toLowerCase().match(h) || []; if (i.isFunction(r))
                while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r) } }

    function hf(n, t, r, u) {
        function e(s) { var h; return f[s] = !0, i.each(n[s] || [], function(n, i) { var s = i(t, r, u); return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1) }), h } var f = {},
            o = n === vi; return e(t.dataTypes[0]) || !f["*"] && e("*") }

    function pi(n, t) { var r, u, f = i.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]); return u && i.extend(!0, n, u), n }

    function eo(n, t, i) { for (var e, u, f, o, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type")); if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) { r.unshift(u); break }
        if (r[0] in i) f = r[0];
        else { for (u in i) { if (!r[0] || n.converters[u + " " + r[0]]) { f = u; break }
                o || (o = u) }
            f = f || o } if (f) return (f !== r[0] && r.unshift(f), i[f]) }

    function oo(n, t, i, r) { var h, u, f, s, e, o = {},
            c = n.dataTypes.slice(); if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f]; for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) { if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) { f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1])); break }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try { t = f(t) } catch (l) { return { state: "parsererror", error: f ? l : "No conversion from " + e + " to " + u } } } return { state: "success", data: t } }

    function lf(n) { return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView } var y = [],
        u = n.document,
        yf = Object.getPrototypeOf,
        p = y.slice,
        bi = y.concat,
        ri = y.push,
        lt = y.indexOf,
        at = {},
        ki = at.toString,
        vt = at.hasOwnProperty,
        di = vt.toString,
        pf = di.call(Object),
        f = {},
        nr = "3.0.0",
        i = function(n, t) { return new i.fn.init(n, t) },
        wf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bf = /^-ms-/,
        kf = /-([a-z])/g,
        df = function(n, t) { return t.toUpperCase() },
        v, ur, fr, er, or, sr, h, lr, pt, a, et, ei, dr, it, rt, yu, pu, du, ut, gu, nf, ti, tf, rf, ci, cf, ft, wi, ii, af, vf;
    i.fn = i.prototype = { jquery: nr, constructor: i, length: 0, toArray: function() { return p.call(this) }, get: function(n) { return null != n ? 0 > n ? this[n + this.length] : this[n] : p.call(this) }, pushStack: function(n) { var t = i.merge(this.constructor(), n); return t.prevObject = this, t }, each: function(n) { return i.each(this, n) }, map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) }, slice: function() { return this.pushStack(p.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(n) { var i = this.length,
                t = +n + (0 > n ? i : 0); return this.pushStack(t >= 0 && i > t ? [this[t]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: ri, sort: y.sort, splice: y.splice };
    i.extend = i.fn.extend = function() { var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1; for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
            if (null != (e = arguments[u]))
                for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n };
    i.extend({ expando: "jQuery" + (nr + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(n) { throw new Error(n); }, noop: function() {}, isFunction: function(n) { return "function" === i.type(n) }, isArray: Array.isArray, isWindow: function(n) { return null != n && n === n.window }, isNumeric: function(n) { var t = i.type(n); return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n)) }, isPlainObject: function(n) { var t, i; return n && "[object Object]" === ki.call(n) ? (t = yf(n)) ? (i = vt.call(t, "constructor") && t.constructor, "function" == typeof i && di.call(i) === pf) : !0 : !1 }, isEmptyObject: function(n) { for (var t in n) return !1; return !0 }, type: function(n) { return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? at[ki.call(n)] || "object" : typeof n }, globalEval: function(n) { gi(n) }, camelCase: function(n) { return n.replace(bf, "ms-").replace(kf, df) }, nodeName: function(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() }, each: function(n, t) { var r, i = 0; if (ui(n)) { for (r = n.length; r > i; i++)
                    if (t.call(n[i], i, n[i]) === !1) break } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1) break; return n }, trim: function(n) { return null == n ? "" : (n + "").replace(wf, "") }, makeArray: function(n, t) { var r = t || []; return null != n && (ui(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ri.call(r, n)), r }, inArray: function(n, t, i) { return null == t ? -1 : lt.call(t, n, i) }, merge: function(n, t) { for (var u = +t.length, i = 0, r = n.length; u > i; i++) n[r++] = t[i]; return n.length = r, n }, grep: function(n, t, i) { for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]); return f }, map: function(n, t, i) { var e, u, r = 0,
                f = []; if (ui(n))
                for (e = n.length; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), null != u && f.push(u); return bi.apply([], f) }, guid: 1, proxy: function(n, t) { var u, f, r; return "string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = p.call(arguments, 2), r = function() { return n.apply(t || this, f.concat(p.call(arguments))) }, r.guid = n.guid = n.guid || i.guid++, r) : void 0 }, now: Date.now, support: f }); "function" == typeof Symbol && (i.fn[Symbol.iterator] = y[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) { at["[object " + t + "]"] = t.toLowerCase() });
    v = function(n) {
        function u(n, t, r, u) { var s, w, l, a, d, y, g, p = t && t.ownerDocument,
                v = t ? t.nodeType : 9; if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r; if (!u && ((t ? t.ownerDocument || t : h) !== i && b(t), t = t || i, c)) { if (11 !== v && (d = cr.exec(n)))
                    if (s = d[1]) { if (9 === v) { if (!(l = t.getElementById(s))) return r; if (l.id === s) return r.push(l), r } else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r } else { if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r; if ((s = d[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r }
                if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) { if (1 !== v) p = t, g = n;
                    else if ("object" !== t.nodeName.toLowerCase()) { for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = e), y = ft(n), w = y.length; w--;) y[w] = "#" + a + " " + yt(y[w]);
                        g = y.join(",");
                        p = ni.test(n) && ri(t.parentNode) || t } if (g) try { return k.apply(r, p.querySelectorAll(g)), r } catch (nt) {} finally { a === e && t.removeAttribute("id") } } } return si(n.replace(at, "$1"), t, r, u) }

        function ti() {
            function n(r, u) { return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u } var i = []; return n }

        function l(n) { return n[e] = !0, n }

        function a(n) { var t = i.createElement("fieldset"); try { return !!n(t) } catch (r) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t);
                t = null } }

        function ii(n, i) { for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i }

        function wi(n, t) { var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex; if (r) return r; if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1 }

        function ar(n) { return function(t) { var i = t.nodeName.toLowerCase(); return "input" === i && t.type === n } }

        function vr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === n } }

        function bi(n) { return function(t) { return "label" in t && t.disabled === n || "form" in t && t.disabled === n || "form" in t && t.disabled === !1 && (t.isDisabled === n || t.isDisabled !== !n && ("label" in t || !lr(t)) !== n) } }

        function it(n) { return l(function(t) { return t = +t, l(function(i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) }

        function ri(n) { return n && "undefined" != typeof n.getElementsByTagName && n }

        function ki() {}

        function yt(n) { for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value; return i }

        function pt(n, t, i) { var r = t.dir,
                u = t.next,
                f = u || r,
                o = i && "parentNode" === f,
                s = di++; return t.first ? function(t, i, u) { while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u) } : function(t, i, h) { var c, l, a, y = [v, s]; if (h) { while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0 } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (a = t[e] || (t[e] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((c = l[f]) && c[0] === v && c[1] === s) return y[2] = c[2]; if (l[f] = y, y[2] = n(t, i, h)) return !0 } } }

        function ui(n) { return n.length > 1 ? function(t, i, r) { for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0 } : n[0] }

        function yr(n, t, i) { for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i); return i }

        function wt(n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f))); return o }

        function fi(n, t, i, r, u, f) { return r && !r[e] && (r = fi(r)), u && !u[e] && (u = fi(u, f)), l(function(f, e, o, s) { var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || !f && t ? b : wt(b, p, n, o, s),
                    h = i ? u || (f ? n : w || r) ? [] : e : v; if (i && i(v, h, o, s), r)
                    for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a)); if (f) { if (u || n) { if (u) { for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s) } for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a)) } } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h) }) }

        function ei(n) { for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) { return n === o }, c, !0), a = pt(function(n) { return nt(o, n) > -1 }, c, !0), f = [function(n, t, i) { var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i)); return o = null, r }]; s > i; i++)
                if (u = t.relative[n[i].type]) f = [pt(ui(f), u)];
                else { if (u = t.filter[n[i].type].apply(null, n[i].matches), u[e]) { for (r = ++i; s > r; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(f), i > 1 && yt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(at, "$1"), u, r > i && ei(n.slice(i, r)), s > r && ei(n = n.slice(r)), s > r && yt(n)) }
                    f.push(u) }
            return ui(f) }

        function pr(n, r) { var f = r.length > 0,
                e = n.length > 0,
                o = function(o, s, h, l, a) { var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length; for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) { if (e && y) { for (nt = 0, s || y.ownerDocument === i || (b(y), h = !c); d = n[nt++];)
                                if (d(y, s || i, h)) { l.push(y); break }
                            a && (v = ut) }
                        f && ((y = !d && y) && g--, o && tt.push(y)) } if (g += p, f && p !== g) { for (nt = 0; d = r[nt++];) d(tt, w, s, h); if (o) { if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                            w = wt(w) }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l) } return a && (v = ut, ht = it), tt }; return f ? l(o) : o } var rt, f, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, c, o, d, ct, et, e = "sizzle" + 1 * new Date,
            h = n.document,
            v = 0,
            di = 0,
            hi = ti(),
            ci = ti(),
            lt = ti(),
            kt = function(n, t) { return n === t && (ut = !0), 0 },
            gi = {}.hasOwnProperty,
            g = [],
            nr = g.pop,
            tr = g.push,
            k = g.push,
            li = g.slice,
            nt = function(n, t) { for (var i = 0, r = n.length; r > i; i++)
                    if (n[i] === t) return i;
                return -1 },
            dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
            ir = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            rr = new RegExp("^" + r + "*," + r + "*"),
            ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            er = new RegExp(gt),
            or = new RegExp("^" + tt + "$"),
            vt = { ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), TAG: new RegExp("^(" + tt + "|[*])"), ATTR: new RegExp("^" + ai), PSEUDO: new RegExp("^" + gt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"), bool: new RegExp("^(?:" + dt + ")$", "i"), needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i") },
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ni = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) { var r = "0x" + t - 65536; return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            yi = function(n, t) { return t ? "\x00" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n },
            pi = function() { b() },
            lr = pt(function(n) { return n.disabled === !0 }, { dir: "parentNode", next: "legend" }); try { k.apply(g = li.call(h.childNodes), h.childNodes);
            g[h.childNodes.length].nodeType } catch (wr) { k = { apply: g.length ? function(n, t) { tr.apply(n, li.call(t)) } : function(n, t) { for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1 } } }
        f = u.support = {};
        oi = u.isXML = function(n) { var t = n && (n.ownerDocument || n).documentElement; return t ? "HTML" !== t.nodeName : !1 };
        b = u.setDocument = function(n) { var v, u, l = n ? n.ownerDocument || n : h; return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, c = !oi(i), h !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), f.attributes = a(function(n) { return n.className = "i", !n.getAttribute("className") }), f.getElementsByTagName = a(function(n) { return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) { return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length }), f.getById ? (t.find.ID = function(n, t) { if ("undefined" != typeof t.getElementById && c) { var i = t.getElementById(n); return i ? [i] : [] } }, t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { return n.getAttribute("id") === t } }) : (delete t.find.ID, t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id"); return i && i.value === t } }), t.find.TAG = f.getElementsByTagName ? function(n, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0 } : function(n, t) { var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n); if ("*" === n) { while (i = u[f++]) 1 === i.nodeType && r.push(i); return r } return u }, t.find.CLASS = f.getElementsByClassName && function(n, t) { if ("undefined" != typeof t.getElementsByClassName && c) return t.getElementsByClassName(n) }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) { s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]") }), a(function(n) { n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>"; var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:") })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) { f.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt) }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) { var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode; return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i))) } : function(n, t) { if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1 }, kt = v ? function(n, t) { if (n === t) return ut = !0, 0; var r = !n.compareDocumentPosition - !t.compareDocumentPosition; return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & r || !f.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === h && et(h, n) ? -1 : t === i || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1) } : function(n, t) { if (n === t) return ut = !0, 0; var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t]; if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0; if (o === s) return wi(n, t); for (r = n; r = r.parentNode;) f.unshift(r); for (r = t; r = r.parentNode;) e.unshift(r); while (f[u] === e[u]) u++; return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0 }, i) : i };
        u.matches = function(n, t) { return u(n, null, null, t) };
        u.matchesSelector = function(n, t) { if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), f.matchesSelector && c && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try { var r = ct.call(n, t); if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r } catch (e) {}
            return u(t, i, null, [n]).length > 0 };
        u.contains = function(n, t) { return (n.ownerDocument || n) !== i && b(n), et(n, t) };
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n); var e = t.attrHandle[r.toLowerCase()],
                u = e && gi.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !c) : void 0; return void 0 !== u ? u : f.attributes || !c ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null };
        u.escape = function(n) { return (n + "").replace(vi, yi) };
        u.error = function(n) { throw new Error("Syntax error, unrecognized expression: " + n); };
        u.uniqueSort = function(n) { var r, u = [],
                t = 0,
                i = 0; if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(kt), ut) { while (r = n[i++]) r === n[i] && (t = u.push(i)); while (t--) n.splice(u[t], 1) } return w = null, n };
        st = u.getText = function(n) { var r, i = "",
                u = 0,
                t = n.nodeType; if (t) { if (1 === t || 9 === t || 11 === t) { if ("string" == typeof n.textContent) return n.textContent; for (n = n.firstChild; n; n = n.nextSibling) i += st(n) } else if (3 === t || 4 === t) return n.nodeValue } else
                while (r = n[u++]) i += st(r); return i };
        t = u.selectors = { cacheLength: 50, createPseudo: l, match: vt, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(n) { return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function(n) { return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n }, PSEUDO: function(n) { var i, t = !n[6] && n[2]; return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3)) } }, filter: { TAG: function(n) { var t = n.replace(y, p).toLowerCase(); return "*" === n ? function() { return !0 } : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t } }, CLASS: function(n) { var t = hi[n + " "]; return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) { return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "") }) }, ATTR: function(n, t, i) { return function(r) { var f = u.attr(r, n); return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0 } }, CHILD: function(n, t, i, r, u) { var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        f = "of-type" === t; return 1 === r && 0 === u ? function(n) { return !!n.parentNode } : function(t, i, h) { var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                            d = t.parentNode,
                            nt = f && t.nodeName.toLowerCase(),
                            g = !h && !f,
                            l = !1; if (d) { if (s) { while (k) { for (c = t; c = c[k];)
                                        if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                    b = k = "only" === n && !b && "nextSibling" } return !0 } if (b = [o ? d.firstChild : d.lastChild], o && g) { for (c = d, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                    if (1 === c.nodeType && ++l && c === t) { w[n] = [v, a, l]; break } } else if (g && (c = t, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && (y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0 } } }, PSEUDO: function(n, i) { var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n); return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) { for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e]) }) : function(n) { return r(n, 0, f) }) : r } }, pseudos: { not: l(function(n) { var t = [],
                        r = [],
                        i = bt(n.replace(at, "$1")); return i[e] ? l(function(n, t, r, u) { for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e)) }) : function(n, u, f) { return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop() } }), has: l(function(n) { return function(t) { return u(n, t).length > 0 } }), contains: l(function(n) { return n = n.replace(y, p),
                        function(t) { return (t.textContent || t.innerText || st(t)).indexOf(n) > -1 } }), lang: l(function(n) { return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) { var i;
                            do
                                if (i = c ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1 } }), target: function(t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id }, root: function(n) { return n === s }, focus: function(n) { return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) }, enabled: bi(!1), disabled: bi(!0), checked: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && !!n.checked || "option" === t && !!n.selected }, selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, n.selected === !0 }, empty: function(n) { for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0 }, parent: function(n) { return !t.pseudos.empty(n) }, header: function(n) { return hr.test(n.nodeName) }, input: function(n) { return sr.test(n.nodeName) }, button: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && "button" === n.type || "button" === t }, text: function(n) { var t; return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase()) }, first: it(function() { return [0] }), last: it(function(n, t) { return [t - 1] }), eq: it(function(n, t, i) { return [0 > i ? i + t : i] }), even: it(function(n, t) { for (var i = 0; t > i; i += 2) n.push(i); return n }), odd: it(function(n, t) { for (var i = 1; t > i; i += 2) n.push(i); return n }), lt: it(function(n, t, i) { for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r); return n }), gt: it(function(n, t, i) { for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r); return n }) } };
        t.pseudos.nth = t.pseudos.eq; for (rt in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[rt] = ar(rt); for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = vr(rt); return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function(n, i) { var e, f, s, o, r, h, c, l = ci[n + " "]; if (l) return i ? 0 : l.slice(0); for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = ur.exec(r)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(at, " ") }), r = r.slice(e.length)); for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), r = r.slice(e.length)); if (!e) break } return i ? r.length : r ? u.error(n) : ci(n, h).slice(0) }, bt = u.compile = function(n, t) { var r, u = [],
                f = [],
                i = lt[n + " "]; if (!i) { for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[e] ? u.push(i) : f.push(i);
                i = lt(n, pr(f, u));
                i.selector = n } return i }, si = u.select = function(n, i, r, u) { var s, e, o, a, v, l = "function" == typeof n && n,
                h = !u && ft(n = l.selector || n); if (r = r || [], 1 === h.length) { if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && f.getById && 9 === i.nodeType && c && t.relative[e[1].type]) { if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], !i) return r;
                    l && (i = i.parentNode);
                    n = n.slice(e.shift().value.length) } for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) { if (o = e[s], t.relative[a = o.type]) break; if ((v = t.find[a]) && (u = v(o.matches[0].replace(y, p), ni.test(e[0].type) && ri(i.parentNode) || i))) { if (e.splice(s, 1), n = u.length && yt(e), !n) return k.apply(r, u), r; break } } } return (l || bt(n, h))(u, i, !c, r, !i || ni.test(n) && ri(i.parentNode) || i), r }, f.sortStable = e.split("").sort(kt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) { return 1 & n.compareDocumentPosition(i.createElement("fieldset")) }), a(function(n) { return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href") }) || ii("type|href|height|width", function(n, t, i) { if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), f.attributes && a(function(n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value") }) || ii("value", function(n, t, i) { if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue }), a(function(n) { return null == n.getAttribute("disabled") }) || ii(dt, function(n, t, i) { var r; if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null }), u }(n);
    i.find = v;
    i.expr = v.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = v.uniqueSort;
    i.text = v.getText;
    i.isXMLDoc = v.isXML;
    i.contains = v.contains;
    i.escapeSelector = v.escape; var k = function(n, t, r) { for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) { if (f && i(n).is(r)) break;
                    u.push(n) }
            return u },
        tr = function(n, t) { for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n); return i },
        ir = i.expr.match.needsContext,
        rr = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        gf = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) { var u = t[0]; return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) { return 1 === n.nodeType })) };
    i.fn.extend({ find: function(n) { var t, r, u = this.length,
                f = this; if ("string" != typeof n) return this.pushStack(i(n).filter(function() { for (t = 0; u > t; t++)
                    if (i.contains(f[t], this)) return !0 })); for (r = this.pushStack([]), t = 0; u > t; t++) i.find(n, f[t], r); return u > 1 ? i.uniqueSort(r) : r }, filter: function(n) { return this.pushStack(fi(this, n || [], !1)) }, not: function(n) { return this.pushStack(fi(this, n || [], !0)) }, is: function(n) { return !!fi(this, "string" == typeof n && ir.test(n) ? i(n) : n || [], !1).length } });
    fr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    er = i.fn.init = function(n, t, r) { var f, e; if (!n) return this; if (r = r || ur, "string" == typeof n) { if (f = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : fr.exec(n), !f || !f[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n); if (f[1]) { if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), rr.test(f[1]) && i.isPlainObject(t))
                    for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]); return this } return e = u.getElementById(f[2]), e && (this[0] = e, this.length = 1), this } return n.nodeType ? (this[0] = n, this.length = 1, this) : i.isFunction(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this) };
    er.prototype = i.fn;
    ur = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({ has: function(n) { var t = i(n, this),
                r = t.length; return this.filter(function() { for (var n = 0; r > n; n++)
                    if (i.contains(this, t[n])) return !0 }) }, closest: function(n, t) { var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n); if (!ir.test(n))
                for (; o > f; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) { u.push(r); break }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u) }, index: function(n) { return n ? "string" == typeof n ? lt.call(i(n), this[0]) : lt.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(n, t) { return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t)))) }, addBack: function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) } });
    i.each({ parent: function(n) { var t = n.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(n) { return k(n, "parentNode") }, parentsUntil: function(n, t, i) { return k(n, "parentNode", i) }, next: function(n) { return hr(n, "nextSibling") }, prev: function(n) { return hr(n, "previousSibling") }, nextAll: function(n) { return k(n, "nextSibling") }, prevAll: function(n) { return k(n, "previousSibling") }, nextUntil: function(n, t, i) { return k(n, "nextSibling", i) }, prevUntil: function(n, t, i) { return k(n, "previousSibling", i) }, siblings: function(n) { return tr((n.parentNode || {}).firstChild, n) }, children: function(n) { return tr(n.firstChild) }, contents: function(n) { return n.contentDocument || i.merge([], n.childNodes) } }, function(n, t) { i.fn[n] = function(r, u) { var f = i.map(this, t, r); return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (sr[n] || i.uniqueSort(f), or.test(n) && f.reverse()), this.pushStack(f) } });
    h = /\S+/g;
    i.Callbacks = function(n) { n = "string" == typeof n ? ne(n) : i.extend({}, n); var f, r, h, e, t = [],
            o = [],
            u = -1,
            c = function() { for (e = n.once, h = f = !0; o.length; u = -1)
                    for (r = o.shift(); ++u < t.length;) t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length, r = !1);
                n.memory || (r = !1);
                f = !1;
                e && (t = r ? [] : "") },
            s = { add: function() { return t && (r && !f && (u = t.length - 1, o.push(r)), function e(r) { i.each(r, function(r, u) { i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== i.type(u) && e(u) }) }(arguments), r && !f && c()), this }, remove: function() { return i.each(arguments, function(n, r) { for (var f;
                            (f = i.inArray(r, t, f)) > -1;) t.splice(f, 1), u >= f && u-- }), this }, has: function(n) { return n ? i.inArray(n, t) > -1 : t.length > 0 }, empty: function() { return t && (t = []), this }, disable: function() { return e = o = [], t = r = "", this }, disabled: function() { return !t }, lock: function() { return e = o = [], r || f || (t = r = ""), this }, locked: function() { return !!e }, fireWith: function(n, t) { return e || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), f || c()), this }, fire: function() { return s.fireWith(this, arguments), this }, fired: function() { return !!h } }; return s };
    i.extend({ Deferred: function(t) { var u = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                e = "pending",
                f = { state: function() { return e }, always: function() { return r.done(arguments).fail(arguments), this }, "catch": function(n) { return f.then(null, n) }, pipe: function() { var n = arguments; return i.Deferred(function(t) { i.each(u, function(u, f) { var e = i.isFunction(n[f[4]]) && n[f[4]];
                                r[f[1]](function() { var n = e && e.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments) }) });
                            n = null }).promise() }, then: function(t, r, f) {
                        function o(t, r, u, f) { return function() { var s = this,
                                    h = arguments,
                                    l = function() { var n, c; if (!(e > t)) { if (n = u.apply(s, h), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            i.isFunction(c) ? f ? c.call(n, o(e, r, d, f), o(e, r, yt, f)) : (e++, c.call(n, o(e, r, d, f), o(e, r, yt, f), o(e, r, d, r.notifyWith))) : (u !== d && (s = void 0, h = [n]), (f || r.resolveWith)(s, h)) } },
                                    c = f ? l : function() { try { l() } catch (n) { i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, c.stackTrace);
                                            t + 1 >= e && (u !== yt && (s = void 0, h = [n]), r.rejectWith(s, h)) } };
                                t ? c() : (i.Deferred.getStackHook && (c.stackTrace = i.Deferred.getStackHook()), n.setTimeout(c)) } } var e = 0; return i.Deferred(function(n) { u[0][3].add(o(0, n, i.isFunction(f) ? f : d, n.notifyWith));
                            u[1][3].add(o(0, n, i.isFunction(t) ? t : d));
                            u[2][3].add(o(0, n, i.isFunction(r) ? r : yt)) }).promise() }, promise: function(n) { return null != n ? i.extend(n, f) : f } },
                r = {}; return i.each(u, function(n, t) { var i = t[2],
                    o = t[5];
                f[t[1]] = i.add;
                o && i.add(function() { e = o }, u[3 - n][2].disable, u[0][2].lock);
                i.add(t[3].fire);
                r[t[0]] = function() { return r[t[0] + "With"](this === r ? void 0 : this, arguments), this };
                r[t[0] + "With"] = i.fireWith }), f.promise(r), t && t.call(r, r), r }, when: function(n) { var f = arguments.length,
                t = f,
                e = Array(t),
                u = p.call(arguments),
                r = i.Deferred(),
                o = function(n) { return function(t) { e[n] = this;
                        u[n] = arguments.length > 1 ? p.call(arguments) : t;--f || r.resolveWith(e, u) } }; if (1 >= f && (cr(n, r.done(o(t)).resolve, r.reject), "pending" === r.state() || i.isFunction(u[t] && u[t].then))) return r.then(); while (t--) cr(u[t], o(t), r.reject); return r.promise() } });
    lr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) { n.console && n.console.warn && t && lr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i) };
    pt = i.Deferred();
    i.fn.ready = function(n) { return pt.then(n), this };
    i.extend({ isReady: !1, readyWait: 1, holdReady: function(n) { n ? i.readyWait++ : i.ready(!0) }, ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || pt.resolveWith(u, [i])) } });
    i.ready.then = pt.then; "complete" === u.readyState || "loading" !== u.readyState && !u.documentElement.doScroll ? n.setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", wt), n.addEventListener("load", wt));
    a = function(n, t, r, u, f, e, o) { var s = 0,
            c = n.length,
            h = null == r; if ("object" === i.type(r)) { f = !0; for (s in r) a(n, t, s, r[s], !0, e, o) } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) { return h.call(i(n), r) })), t))
            for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r))); return f ? n : h ? t.call(n) : c ? t(n[0], r) : e };
    et = function(n) { return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType };
    ot.uid = 1;
    ot.prototype = { cache: function(n) { var t = n[this.expando]; return t || (t = {}, et(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))), t }, set: function(n, t, r) { var u, f = this.cache(n); if ("string" == typeof t) f[i.camelCase(t)] = r;
            else
                for (u in t) f[i.camelCase(u)] = t[u]; return f }, get: function(n, t) { return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][i.camelCase(t)] }, access: function(n, t, i) { return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t) }, remove: function(n, t) { var u, r = n[this.expando]; if (void 0 !== r) { if (void 0 !== t)
                    for (i.isArray(t) ? t = t.map(i.camelCase) : (t = i.camelCase(t), t = (t in r) ? [t] : t.match(h) || []), u = t.length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando]) } }, hasData: function(n) { var t = n[this.expando]; return void 0 !== t && !i.isEmptyObject(t) } }; var r = new ot,
        e = new ot,
        te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ie = /[A-Z]/g;
    i.extend({ hasData: function(n) { return e.hasData(n) || r.hasData(n) }, data: function(n, t, i) { return e.access(n, t, i) }, removeData: function(n, t) { e.remove(n, t) }, _data: function(n, t, i) { return r.access(n, t, i) }, _removeData: function(n, t) { r.remove(n, t) } });
    i.fn.extend({ data: function(n, t) { var o, f, s, u = this[0],
                h = u && u.attributes; if (void 0 === n) { if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) { for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), ar(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0) } return s } return "object" == typeof n ? this.each(function() { e.set(this, n) }) : a(this, function(t) { var i; if (u && void 0 === t) { if ((i = e.get(u, n), void 0 !== i) || (i = ar(u, n), void 0 !== i)) return i } else this.each(function() { e.set(this, n, t) }) }, null, t, arguments.length > 1, null, !0) }, removeData: function(n) { return this.each(function() { e.remove(this, n) }) } });
    i.extend({ queue: function(n, t, u) { var f; if (n) return (t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []) }, dequeue: function(n, t) { t = t || "fx"; var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() { i.dequeue(n, t) }; "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));!e && f && f.empty.fire() }, _queueHooks: function(n, t) { var u = t + "queueHooks"; return r.get(n, u) || r.access(n, u, { empty: i.Callbacks("once memory").add(function() { r.remove(n, [t + "queue", u]) }) }) } });
    i.fn.extend({ queue: function(n, t) { var r = 2; return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() { var r = i.queue(this, n, t);
                i._queueHooks(this, n); "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n) }) }, dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) }, clearQueue: function(n) { return this.queue(n || "fx", []) }, promise: function(n, t) { var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {--e || o.resolveWith(f, [f]) }; for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h)); return h(), o.promise(t) } }); var vr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        st = new RegExp("^(?:([+-])=|)(" + vr + ")([a-z%]*)$", "i"),
        w = ["Top", "Right", "Bottom", "Left"],
        bt = function(n, t) { return n = t || n, "none" === n.style.display || "" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display") },
        yr = function(n, t, i, r) { var f, u, e = {}; for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []); for (u in t) n.style[u] = e[u]; return f };
    ei = {};
    i.fn.extend({ show: function() { return g(this, !0) }, hide: function() { return g(this) }, toggle: function(n) { return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() { bt(this) ? i(this).show() : i(this).hide() }) } }); var wr = /^(?:checkbox|radio)$/i,
        br = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        kr = /^$|\/(?:java|ecma)script/i,
        c = { option: [1, "<select multiple='multiple'>", "<\/select>"], thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    dr = /<|&#?\w+;/;! function() { var i = u.createDocumentFragment(),
            n = i.appendChild(u.createElement("div")),
            t = u.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue }(); var kt = u.documentElement,
        ue = /^key/,
        fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        nu = /^([^.]*)(?:\.(.+)|)/;
    i.event = { global: {}, add: function(n, t, u, f, e) { var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n); if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), e && i.find.matchesSelector(kt, e), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) { if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments) }), t = (t || "").match(h) || [""], b = t.length; b--;) w = nu.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({ type: o, origType: d, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: k.join(".") }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0) }, remove: function(n, t, u, f, e) { var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n); if (w && (v = w.events)) { for (t = (t || "").match(h) || [""], p = t.length; p--;)
                    if (c = nu.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), o) { for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o]) } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events") } }, dispatch: function(n) { var t = i.event.fix(n),
                u, c, s, e, f, l, h = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {}; for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u]; if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) { for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== s && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation())); return o.postDispatch && o.postDispatch.call(this, t), t.result } }, handlers: function(n, t) { var e, u, f, o, h = [],
                s = t.delegateCount,
                r = n.target; if (s && r.nodeType && ("click" !== n.type || isNaN(n.button) || n.button < 1))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) { for (u = [], e = 0; s > e; e++) o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) > -1 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                        u.length && h.push({ elem: r, handlers: u }) }
            return s < t.length && h.push({ elem: this, handlers: t.slice(s) }), h }, addProp: function(n, t) { Object.defineProperty(i.Event.prototype, n, { enumerable: !0, configurable: !0, get: i.isFunction(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[n] }, set: function(t) { Object.defineProperty(this, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) }, fix: function(n) { return n[i.expando] ? n : new i.Event(n) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== tu() && this.focus) return (this.focus(), !1) }, delegateType: "focusin" }, blur: { trigger: function() { if (this === tu() && this.blur) return (this.blur(), !1) }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && i.nodeName(this, "input")) return (this.click(), !1) }, _default: function(n) { return i.nodeName(n.target, "a") } }, beforeunload: { postDispatch: function(n) { void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result) } } } };
    i.removeEvent = function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i) };
    i.Event = function(n, t) { return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? dt : nt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t) };
    i.Event.prototype = { constructor: i.Event, isDefaultPrevented: nt, isPropagationStopped: nt, isImmediatePropagationStopped: nt, isSimulated: !1, preventDefault: function() { var n = this.originalEvent;
            this.isDefaultPrevented = dt;
            n && !this.isSimulated && n.preventDefault() }, stopPropagation: function() { var n = this.originalEvent;
            this.isPropagationStopped = dt;
            n && !this.isSimulated && n.stopPropagation() }, stopImmediatePropagation: function() { var n = this.originalEvent;
            this.isImmediatePropagationStopped = dt;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation() } };
    i.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(n) { var t = n.button; return null == n.which && ue.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && fe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which } }, i.event.addProp);
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(n, t) { i.event.special[n] = { delegateType: t, bindType: t, handle: function(n) { var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj; return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u } } });
    i.fn.extend({ on: function(n, t, i, r) { return si(this, n, t, i, r) }, one: function(n, t, i, r) { return si(this, n, t, i, r, 1) }, off: function(n, t, r) { var u, f; if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this; if ("object" == typeof n) { for (f in n) this.off(f, t, n[f]); return this } return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = nt), this.each(function() { i.event.remove(this, n, r, t) }) } }); var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        oe = /<script|<style|<link/i,
        se = /checked\s*(?:[^=]|=\s*.checked.)/i,
        he = /^true\/(.*)/,
        ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({ htmlPrefilter: function(n) { return n.replace(ee, "<$1><\/$2>") }, clone: function(n, t, r) { var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n); if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++) ve(s[u], e[u]); if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++) ru(s[u], e[u]);
                else ru(n, h);
            return e = o(h, "script"), e.length > 0 && oi(e, !l && o(n, "script")), h }, cleanData: function(n) { for (var u, t, f, s = i.event.special, o = 0; void 0 !== (t = n[o]); o++)
                if (et(t)) { if (u = t[r.expando]) { if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0 }
                    t[e.expando] && (t[e.expando] = void 0) } } });
    i.fn.extend({ detach: function(n) { return uu(this, n, !0) }, remove: function(n) { return uu(this, n) }, text: function(n) { return a(this, function(n) { return void 0 === n ? i.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n) }) }, null, n, arguments.length) }, append: function() { return tt(this, arguments, function(n) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = iu(this, n);
                    t.appendChild(n) } }) }, prepend: function() { return tt(this, arguments, function(n) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = iu(this, n);
                    t.insertBefore(n, t.firstChild) } }) }, before: function() { return tt(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) }) }, after: function() { return tt(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) }) }, empty: function() { for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = ""); return this }, clone: function(n, t) { return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() { return i.clone(this, n, t) }) }, html: function(n) { return a(this, function(n) { var t = this[0] || {},
                    r = 0,
                    u = this.length; if (void 0 === n && 1 === t.nodeType) return t.innerHTML; if ("string" == typeof n && !oe.test(n) && !c[(br.exec(n) || ["", ""])[1].toLowerCase()]) { n = i.htmlPrefilter(n); try { for (; u > r; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0 } catch (f) {} }
                t && this.empty().append(n) }, null, n, arguments.length) }, replaceWith: function() { var n = []; return tt(this, arguments, function(t) { var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this)) }, n) } });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(n) { for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ri.apply(f, u.get()); return this.pushStack(f) } }); var fu = /^margin/,
        hi = new RegExp("^(" + vr + ")(?!px)[a-z%]+$", "i"),
        gt = function(t) { var i = t.ownerDocument.defaultView; return i && i.opener || (i = n), i.getComputedStyle(t) };! function() {
        function r() { if (t) { t.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                t.innerHTML = "";
                kt.appendChild(e); var i = n.getComputedStyle(t);
                o = "1%" !== i.top;
                c = "2px" === i.marginLeft;
                s = "4px" === i.width;
                t.style.marginRight = "50%";
                h = "4px" === i.marginRight;
                kt.removeChild(e);
                t = null } } var o, s, h, c, e = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === t.style.backgroundClip, e.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", e.appendChild(t), i.extend(f, { pixelPosition: function() { return r(), o }, boxSizingReliable: function() { return r(), s }, pixelMarginRight: function() { return r(), h }, reliableMarginLeft: function() { return r(), c } })) }(); var ye = /^(none|table(?!-c[ea]).+)/,
        pe = { position: "absolute", visibility: "hidden", display: "block" },
        ou = { letterSpacing: "0", fontWeight: "400" },
        su = ["Webkit", "Moz", "ms"],
        hu = u.createElement("div").style;
    i.extend({ cssHooks: { opacity: { get: function(n, t) { if (t) { var i = ht(n, "opacity"); return "" === i ? "1" : i } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function(n, t, r, u) { if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) { var e, h, o, s = i.camelCase(t),
                    c = n.style; return t = i.cssProps[s] || (i.cssProps[s] = cu(s) || s), o = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? o && "get" in o && void 0 !== (e = o.get(n, !1, u)) ? e : c[t] : (h = typeof r, "string" === h && (e = st.exec(r)) && e[1] && (r = pr(n, t, e), h = "number"), null != r && r === r && ("number" === h && (r += e && e[3] || (i.cssNumber[s] ? "" : "px")), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (c[t] = r)), void 0) } }, css: function(n, t, r, u) { var f, s, o, e = i.camelCase(t); return t = i.cssProps[e] || (i.cssProps[e] = cu(e) || e), o = i.cssHooks[t] || i.cssHooks[e], o && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ht(n, t, u)), "normal" === f && t in ou && (f = ou[t]), "" === r || r ? (s = parseFloat(f), r === !0 || isFinite(s) ? s || 0 : f) : f } });
    i.each(["height", "width"], function(n, t) { i.cssHooks[t] = { get: function(n, r, u) { if (r) return !ye.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? vu(n, t, u) : yr(n, pe, function() { return vu(n, t, u) }) }, set: function(n, r, u) { var f, e = u && gt(n),
                    o = u && au(n, t, u, "border-box" === i.css(n, "boxSizing", !1, e), e); return o && (f = st.exec(r)) && "px" !== (f[3] || "px") && (n.style[t] = r, r = i.css(n, t)), lu(n, r, o) } } });
    i.cssHooks.marginLeft = eu(f.reliableMarginLeft, function(n, t) { if (t) return (parseFloat(ht(n, "marginLeft")) || n.getBoundingClientRect().left - yr(n, { marginLeft: 0 }, function() { return n.getBoundingClientRect().left })) + "px" });
    i.each({ margin: "", padding: "", border: "Width" }, function(n, t) { i.cssHooks[n + t] = { expand: function(i) { for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0]; return f } };
        fu.test(n) || (i.cssHooks[n + t].set = lu) });
    i.fn.extend({ css: function(n, t) { return a(this, function(n, t, r) { var f, e, o = {},
                    u = 0; if (i.isArray(t)) { for (f = gt(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f); return o } return void 0 !== r ? i.style(n, t, r) : i.css(n, t) }, n, t, arguments.length > 1) } });
    i.Tween = s;
    s.prototype = { constructor: s, init: function(n, t, r, u, f, e) { this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px") }, cur: function() { var n = s.propHooks[this.prop]; return n && n.get ? n.get(this) : s.propHooks._default.get(this) }, run: function(n) { var t, r = s.propHooks[this.prop]; return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this } };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = { _default: { get: function(n) { var t; return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) }, set: function(n) { i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit) } } };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = { set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) } };
    i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 }, _default: "swing" };
    i.fx = s.prototype.init;
    i.fx.step = {};
    yu = /^(?:toggle|show|hide)$/;
    pu = /queueHooks$/;
    i.Animation = i.extend(l, { tweeners: { "*": [function(n, t) { var i = this.createTween(n, t); return pr(i.elem, n, st.exec(t), i), i }] }, tweener: function(n, t) { i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h); for (var r, u = 0, f = n.length; f > u; u++) r = n[u], l.tweeners[r] = l.tweeners[r] || [], l.tweeners[r].unshift(t) }, prefilters: [we], prefilter: function(n, t) { t ? l.prefilters.unshift(n) : l.prefilters.push(n) } });
    i.speed = function(n, t, r) { var f = n && "object" == typeof n ? i.extend({}, n) : { complete: r || !r && t || i.isFunction(n) && n, duration: n, easing: r && t || t && !i.isFunction(t) && t }; return f.duration = i.fx.off || u.hidden ? 0 : "number" == typeof f.duration ? f.duration : f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default, null != f.queue && f.queue !== !0 || (f.queue = "fx"), f.old = f.complete, f.complete = function() { i.isFunction(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue) }, f };
    i.fn.extend({ fadeTo: function(n, t, i, r) { return this.filter(bt).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) }, animate: function(n, t, u, f) { var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() { var t = l(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0) }; return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e) }, stop: function(n, t, u) { var f = function(n) { var t = n.stop;
                delete n.stop;
                t(u) }; return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() { var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this); if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && pu.test(t) && f(e[t]); for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));!s && u || i.dequeue(this, n) }) }, finish: function(n) { return n !== !1 && (n = n || "fx"), this.each(function() { var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0; for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1)); for (t = 0; s > t; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish }) } });
    i.each(["toggle", "show", "hide"], function(n, t) { var r = i.fn[t];
        i.fn[t] = function(n, i, u) { return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ni(t, !0), n, i, u) } });
    i.each({ slideDown: ni("show"), slideUp: ni("hide"), slideToggle: ni("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
    i.timers = [];
    i.fx.tick = function() { var r, n = 0,
            t = i.timers; for (it = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        it = void 0 };
    i.fx.timer = function(n) { i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop() };
    i.fx.interval = 13;
    i.fx.start = function() { rt || (rt = n.requestAnimationFrame ? n.requestAnimationFrame(wu) : n.setInterval(i.fx.tick, i.fx.interval)) };
    i.fx.stop = function() { n.cancelAnimationFrame ? n.cancelAnimationFrame(rt) : n.clearInterval(rt);
        rt = null };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fn.delay = function(t, r) { return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) { var u = n.setTimeout(i, t);
                r.stop = function() { n.clearTimeout(u) } }) },
        function() { var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = "" !== n.value;
            f.optSelected = i.selected;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = "t" === n.value }();
    ut = i.expr.attrHandle;
    i.fn.extend({ attr: function(n, t) { return a(this, i.attr, n, t, arguments.length > 1) }, removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) } });
    i.extend({ attr: function(n, t, r) { var u, f, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? du : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : f && "set" in f && void 0 !== (u = f.set(n, r, t)) ? u : (n.setAttribute(t, r + ""), r) : f && "get" in f && null !== (u = f.get(n, t)) ? u : (u = i.find.attr(n, t), null == u ? void 0 : u)) }, attrHooks: { type: { set: function(n, t) { if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) { var r = n.value; return n.setAttribute("type", t), r && (n.value = r), t } } } }, removeAttr: function(n, t) { var i, u = 0,
                r = t && t.match(h); if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i) } });
    du = { set: function(n, t, r) { return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) { var r = ut[t] || i.find.attr;
        ut[t] = function(n, t, i) { var f, e, u = t.toLowerCase(); return i || (e = ut[u], ut[u] = f, f = null != r(n, t, i) ? u : null, ut[u] = e), f } });
    gu = /^(?:input|select|textarea|button)$/i;
    nf = /^(?:a|area)$/i;
    i.fn.extend({ prop: function(n, t) { return a(this, i.prop, n, t, arguments.length > 1) }, removeProp: function(n) { return this.each(function() { delete this[i.propFix[n] || n] }) } });
    i.extend({ prop: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t] }, propHooks: { tabIndex: { get: function(n) { var t = i.find.attr(n, "tabindex"); return t ? parseInt(t, 10) : gu.test(n.nodeName) || nf.test(n.nodeName) && n.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } });
    f.optSelected || (i.propHooks.selected = { get: function(n) { var t = n.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null }, set: function(n) { var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex) } });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { i.propFix[this.toLowerCase()] = this });
    ti = /[\t\r\n\f]/g;
    i.fn.extend({ addClass: function(n) { var o, t, r, u, f, s, e, c = 0; if (i.isFunction(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, b(this))) }); if ("string" == typeof n && n)
                for (o = n.match(h) || []; t = this[c++];)
                    if (u = b(t), r = 1 === t.nodeType && (" " + u + " ").replace(ti, " ")) { for (s = 0; f = o[s++];) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                        e = i.trim(r);
                        u !== e && t.setAttribute("class", e) }
            return this }, removeClass: function(n) { var o, r, t, u, f, s, e, c = 0; if (i.isFunction(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, b(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof n && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = b(r), t = 1 === r.nodeType && (" " + u + " ").replace(ti, " ")) { for (s = 0; f = o[s++];)
                            while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                        e = i.trim(t);
                        u !== e && r.setAttribute("class", e) }
            return this }, toggleClass: function(n, t) { var u = typeof n; return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) { i(this).toggleClass(n.call(this, r, b(this), t), t) }) : this.each(function() { var t, e, f, o; if ("string" === u)
                    for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else void 0 !== n && "boolean" !== u || (t = b(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || "")) }) }, hasClass: function(n) { for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && (" " + b(t) + " ").replace(ti, " ").indexOf(i) > -1) return !0;
            return !1 } });
    tf = /\r/g;
    rf = /[\x20\t\r\n\f]+/g;
    i.fn.extend({ val: function(n) { var t, r, f, u = this[0]; return arguments.length ? (f = i.isFunction(n), this.each(function(r) { var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) { return null == n ? "" : n + "" })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u)) })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(tf, "") : null == r ? "" : r)) : void 0 } });
    i.extend({ valHooks: { option: { get: function(n) { var t = i.find.attr(n, "value"); return null != t ? t : i.trim(i.text(n)).replace(rf, " ") } }, select: { get: function(n) { for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type, s = u ? null : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
                        if (t = o[f], (t.selected || f === r) && !t.disabled && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) { if (e = i(t).val(), u) return e;
                            s.push(e) }
                    return s }, set: function(n, t) { for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0); return u || (n.selectedIndex = -1), e } } } });
    i.each(["radio", "checkbox"], function() { i.valHooks[this] = { set: function(n, t) { if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1 } };
        f.checkOn || (i.valHooks[this].get = function(n) { return null === n.getAttribute("value") ? "on" : n.value }) });
    ci = /^(?:focusinfocus|focusoutblur)$/;
    i.extend(i.event, { trigger: function(t, f, e, o) { var w, s, c, b, a, v, l, p = [e || u],
                h = vt.call(t, "type") ? t.type : t,
                y = vt.call(t, "namespace") ? t.namespace.split(".") : []; if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !ci.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) { if (!o && !l.noBubble && !i.isWindow(e)) { for (b = l.delegateType || h, ci.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n) } for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && et(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault()); return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !et(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result } }, simulate: function(n, t, r) { var u = i.extend(new i.Event, r, { type: n, isSimulated: !0 });
            i.event.trigger(u, null, t) } });
    i.fn.extend({ trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, t) { var r = this[0]; if (r) return i.event.trigger(n, t, r, !0) } });
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t) } });
    i.fn.extend({ hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) } });
    f.focusin = "onfocusin" in n;
    f.focusin || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) { var u = function(n) { i.event.simulate(t, n.target, i.event.fix(n)) };
        i.event.special[t] = { setup: function() { var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1) }, teardown: function() { var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t)) } } }); var ct = n.location,
        uf = i.now(),
        li = /\?/;
    i.parseXML = function(t) { var r; if (!t || "string" != typeof t) return null; try { r = (new n.DOMParser).parseFromString(t, "text/xml") } catch (u) { r = void 0 } return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r }; var ke = /\[\]$/,
        ff = /\r?\n/g,
        de = /^(?:submit|button|image|reset|file)$/i,
        ge = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) { var r, u = [],
            f = function(n, t) { var r = i.isFunction(t) ? t() : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == r ? "" : r) }; if (i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { f(this.name, this.value) });
        else
            for (r in n) ai(r, n[r], t, f); return u.join("&") };
    i.fn.extend({ serialize: function() { return i.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var n = i.prop(this, "elements"); return n ? i.makeArray(n) : this }).filter(function() { var n = this.type; return this.name && !i(this).is(":disabled") && ge.test(this.nodeName) && !de.test(n) && (this.checked || !wr.test(n)) }).map(function(n, t) { var r = i(this).val(); return null == r ? null : i.isArray(r) ? i.map(r, function(n) { return { name: t.name, value: n.replace(ff, "\r\n") } }) : { name: t.name, value: r.replace(ff, "\r\n") } }).get() } }); var no = /%20/g,
        to = /#.*$/,
        io = /([?&])_=[^&]*/,
        ro = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        uo = /^(?:GET|HEAD)$/,
        fo = /^\/\//,
        ef = {},
        vi = {},
        of = "*/".concat("*"),
        yi = u.createElement("a"); return yi.href = ct.href, i.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ct.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": of, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(n, t) { return t ? pi(pi(n, i.ajaxSettings), t) : pi(i.ajaxSettings, n) }, ajaxPrefilter: sf(ef), ajaxTransport: sf(vi), ajax: function(t, r) {
            function b(t, r, u, h) { var y, rt, g, p, b, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = h || "", e.readyState = t > 0 ? 4 : 0, y = t >= 200 && 300 > t || 304 === t, u && (p = eo(f, e, u)), p = oo(f, p, e, y), y ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), 204 === t || "HEAD" === f.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, g = p.error, y = !g)) : (g = l, !t && l || (l = "error", 0 > t && (t = 0))), e.status = t, e.statusText = (r || l) + "", y ? tt.resolveWith(c, [rt, l, e]) : tt.rejectWith(c, [e, l, g]), e.statusCode(w), w = void 0, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : g]), it.fireWith(c, [e, l]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop"))) } "object" == typeof t && (r = t, t = void 0);
            r = r || {}; var a, o, k, y, d, l, s, v, g, p, f = i.ajaxSetup({}, r),
                c = f.context || f,
                nt = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = f.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = { readyState: 0, getResponseHeader: function(n) { var t; if (s) { if (!y)
                                for (y = {}; t = ro.exec(k);) y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return s ? k : null }, setRequestHeader: function(n, t) { return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this }, overrideMimeType: function(n) { return null == s && (f.mimeType = n), this }, statusCode: function(n) { var t; if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this }, abort: function(n) { var t = n || ft; return a && a.abort(t), b(0, t), this } }; if (tt.promise(e), f.url = ((t || f.url || ct.href) + "").replace(fo, ct.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(h) || [""], null == f.crossDomain) { l = u.createElement("a"); try { l.href = f.url;
                    l.href = l.href;
                    f.crossDomain = yi.protocol + "//" + yi.host != l.protocol + "//" + l.host } catch (et) { f.crossDomain = !0 } } if (f.data && f.processData && "string" != typeof f.data && (f.data = i.param(f.data, f.traditional)), hf(ef, f, r, e), s) return e;
            v = i.event && f.global;
            v && 0 == i.active++ && i.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !uo.test(f.type);
            o = f.url.replace(to, "");
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(no, "+")) : (p = f.url.slice(o.length), f.data && (o += (li.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(io, ""), p = (li.test(o) ? "&" : "?") + "_=" + uf++ + p), f.url = o + p);
            f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
            e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + of + "; q=0.01" : "") : f.accepts["*"]); for (g in f.headers) e.setRequestHeader(g, f.headers[g]); if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s)) return e.abort(); if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), a = hf(vi, f, r, e)) { if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                f.async && f.timeout > 0 && (d = n.setTimeout(function() { e.abort("timeout") }, f.timeout)); try { s = !1;
                    a.send(rt, b) } catch (et) { if (s) throw et;
                    b(-1, et) } } else b(-1, "No Transport"); return e }, getJSON: function(n, t, r) { return i.get(n, t, r, "json") }, getScript: function(n, t) { return i.get(n, void 0, t, "script") } }), i.each(["get", "post"], function(n, t) { i[t] = function(n, r, u, f) { return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax(i.extend({ url: n, type: t, dataType: f, data: r, success: u }, i.isPlainObject(n) && n)) } }), i._evalUrl = function(n) { return i.ajax({ url: n, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, i.fn.extend({ wrapAll: function(n) { var t; return this[0] && (i.isFunction(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var n = this; n.firstElementChild;) n = n.firstElementChild; return n }).append(this)), this }, wrapInner: function(n) { return i.isFunction(n) ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) }) : this.each(function() { var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n) }) }, wrap: function(n) { var t = i.isFunction(n); return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) }, unwrap: function(n) { return this.parent(n).not("body").each(function() { i(this).replaceWith(this.childNodes) }), this } }), i.expr.pseudos.hidden = function(n) { return !i.expr.pseudos.visible(n) }, i.expr.pseudos.visible = function(n) { return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length) }, i.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (t) {} }, cf = { 0: 200, 1223: 204 }, ft = i.ajaxSettings.xhr(), f.cors = !!ft && "withCredentials" in ft, f.ajax = ft = !!ft, i.ajaxTransport(function(t) { var i, r; if (f.cors || ft && !t.crossDomain) return { send: function(u, f) { var o, e = t.xhr(); if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"); for (o in u) e.setRequestHeader(o, u[o]);
                i = function(n) { return function() { i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(cf[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? { binary: e.response } : { text: e.responseText }, e.getAllResponseHeaders())) } };
                e.onload = i();
                r = e.onerror = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() { 4 === e.readyState && n.setTimeout(function() { i && r() }) };
                i = i("abort"); try { e.send(t.hasContent && t.data || null) } catch (s) { if (i) throw s; } }, abort: function() { i && i() } } }), i.ajaxPrefilter(function(n) { n.crossDomain && (n.contents.script = !1) }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(n) { return i.globalEval(n), n } } }), i.ajaxPrefilter("script", function(n) { void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET") }), i.ajaxTransport("script", function(n) { if (n.crossDomain) { var r, t; return { send: function(f, e) { r = i("<script>").prop({ charset: n.scriptCharset, src: n.url }).on("load error", t = function(n) { r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type) });
                    u.head.appendChild(r[0]) }, abort: function() { t && t() } } } }), wi = [], ii = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var n = wi.pop() || i.expando + "_" + uf++; return this[n] = !0, n } }), i.ajaxPrefilter("json jsonp", function(t, r, u) { var f, e, o, s = t.jsonp !== !1 && (ii.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(t.data) && "data"); if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ii, "$1" + f) : t.jsonp !== !1 && (t.url += (li.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() { return o || i.error(f + " was not called"), o[0] }, t.dataTypes[0] = "json", e = n[f], n[f] = function() { o = arguments }, u.always(function() { void 0 === e ? i(n).removeProp(f) : n[f] = e;
            t[f] && (t.jsonpCallback = r.jsonpCallback, wi.push(f));
            o && i.isFunction(e) && e(o[0]);
            o = e = void 0 }), "script") }), f.createHTMLDocument = function() { var n = u.implementation.createHTMLDocument("").body; return n.innerHTML = "<form><\/form><form><\/form>", 2 === n.childNodes.length }(), i.parseHTML = function(n, t, r) { if ("string" != typeof n) return []; "boolean" == typeof t && (r = t, t = !1); var s, e, o; return t || (f.createHTMLDocument ? (t = u.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = u.location.href, t.head.appendChild(s)) : t = u), e = rr.exec(n), o = !r && [], e ? [t.createElement(e[1])] : (e = gr([n], t, o), o && o.length && i(o).remove(), i.merge([], e.childNodes)) }, i.fn.load = function(n, t, r) { var u, o, s, f = this,
            e = n.indexOf(" "); return e > -1 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({ url: n, type: o || "GET", dataType: "html", data: t }).done(function(n) { s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n) }).always(r && function(n, t) { f.each(function() { r.apply(this, s || [n.responseText, t, n]) }) }), this }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } }), i.expr.pseudos.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length }, i.offset = { setOffset: function(n, t, r) { var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {}; "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o); "using" in t ? t.using.call(n, f) : a.css(f) } }, i.fn.extend({ offset: function(n) { if (arguments.length) return void 0 === n ? this : this.each(function(t) { i.offset.setOffset(this, n, t) }); var u, f, t, e, r = this[0]; if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), t.width || t.height ? (e = r.ownerDocument, f = lf(e), u = e.documentElement, { top: t.top + f.pageYOffset - u.clientTop, left: t.left + f.pageXOffset - u.clientLeft }) : t) : { top: 0, left: 0 } }, position: function() { if (this[0]) { var t, r, u = this[0],
                    n = { top: 0, left: 0 }; return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), i.nodeName(t[0], "html") || (n = t.offset()), n = { top: n.top + i.css(t[0], "borderTopWidth", !0), left: n.left + i.css(t[0], "borderLeftWidth", !0) }), { top: r.top - n.top - i.css(u, "marginTop", !0), left: r.left - n.left - i.css(u, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent; return n || kt }) } }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(n, t) { var r = "pageYOffset" === t;
        i.fn[n] = function(i) { return a(this, function(n, i, u) { var f = lf(n); return void 0 === u ? f ? f[t] : n[i] : void(f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u) }, n, i, arguments.length) } }), i.each(["top", "left"], function(n, t) { i.cssHooks[t] = eu(f.pixelPosition, function(n, r) { if (r) return (r = ht(n, t), hi.test(r) ? i(n).position()[t] + "px" : r) }) }), i.each({ Height: "height", Width: "width" }, function(n, t) { i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function(r, u) { i.fn[u] = function(f, e) { var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (f === !0 || e === !0 ? "margin" : "border"); return a(this, function(t, r, f) { var e; return i.isWindow(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s) }, t, o ? f : void 0, o) } }) }), i.fn.extend({ bind: function(n, t, i) { return this.on(n, null, t, i) }, unbind: function(n, t) { return this.off(n, null, t) }, delegate: function(n, t, i, r) { return this.on(t, n, i, r) }, undelegate: function(n, t, i) { return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i) } }), i.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() { return i }), af = n.jQuery, vf = n.$, i.noConflict = function(t) { return n.$ === i && (n.$ = vf), t && n.jQuery === i && (n.jQuery = af), i }, t || (n.jQuery = n.$ = i), i }),
function(n) { n.fn.input = function() { var t = {}; return n.each(this.serializeArray(), function() { t[this.name] !== undefined ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || "" }), t } }(jQuery),
function(n) { n.fn.modal = function(t) { t = n.extend({ toggle: "", backdrop: '<div id="modalBackdrop"><\/div>', onBeforeToggle: null, onAfterToggle: null }, t); var i = n(t.backdrop),
            u = function() { if ($body.append(i), cingletree.client.isTouchEnabled() && cingletree.events) i.on("clicktap", f);
                else i.on("click", f);
                setTimeout(function() { $view.addClass("blur");
                    i.addClass("show") }, 30) },
            r = function() { $view.removeClass("blur");
                i.removeClass("show");
                setTimeout(function() { i.remove() }, 500) },
            f = function() { n(".modal-overlay").each(function() { var t = n(this);
                    t.removeClass("show") });
                r() }; return n.each(this, function() { var i = n(this).addClass("modal-overlay"),
                f = n(t.toggle);
            i.on("click", function(n) { n.stopPropagation() });
            f.on("click", function(f) { var e = n(f.target); if (t.onBeforeToggle) t.onBeforeToggle(e, i); if (i.hasClass("show") ? (i.removeClass("show"), r()) : (i.addClass("show"), u()), t.onAfterToggle) t.onAfterToggle(e, i) });
            i.close = function() { i.removeClass("show") } }), this.open = function() { n(this).addClass("show");
            u() }, this.close = function() { n(this).removeClass("show");
            r() }, this } }(jQuery),
function(n) { n.fn.selectable = function(t) { t = n.extend({ multiSelect: !0, onActivateRow: null, onClearRow: null, onAnchorChange: null, onAnchorClear: null }, t); var i = function(n) { if (n.hasClass("selectable") && (n.addClass("active"), t.onActivateRow)) t.onActivateRow(n) },
            o = function(t, r) { i(r); var u = t.find("tr.anchor");
                i(u);
                r.index() < u.index() ? r.nextUntil(u).each(function() { i(n(this)) }) : u.nextUntil(r).each(function() { i(n(this)) }) },
            f = function(n) { if (n.hasClass("selectable") && (n.removeClass("active"), t.onClearRow)) t.onClearRow(n) },
            r = function(t) { t.find("tr.selectable.active").each(function() { f(n(this)) }) },
            e = function(n, i) { if (n.find("tr.anchor").removeClass("anchor"), i.addClass("anchor"), t.onAnchorChange) t.onAnchorChange(i) },
            s = function(n) { n.removeClass("anchor");
                t.onAnchorClear && t.onAnchorClear() },
            u = function(n) { var t = n.find("tr.active:first");
                t.hasClass("anchor") || e(n, t) }; return n.each(this, function() { var h = n(this).addClass("no-select").find("tbody");
            h.on("click", "tr.selectable", function(c) { var l = n(this);
                t.multiSelect && c.ctrlKey ? l.hasClass("active") ? h.find("tr.active").length > 1 && (f(l), l.hasClass("anchor") && u(h)) : (i(l), u(h)) : t.multiSelect && c.shiftKey ? l.hasClass("anchor") || (r(h), o(h, l), u(h)) : t.multiSelect ? l.hasClass("active") ? (r(h), s(l)) : (r(h), i(l), e(h, l)) : l.hasClass("active") || (r(h), i(l)) }) }), this.clearRows = function() { var t = n(this).find("tbody");
            r(t) }, this } }(jQuery);
var $window = $(window),
    $html = $("html"),
    $body = $("body"),
    $view = $("#view"),
    $document = $(document);
$(".hover-tip").hover(function() { var t = $(this),
        n = t.offset();
    n.top -= 24;
    n.left += 32;
    t.find(".hover-message").css(n).removeClass("hidden") }, function() { $(this).find(".hover-message").addClass("hidden") });
$(".full-screen-button").click(function() { $html.toggleClass("full-screen");
        $(this).blur() }),
    function() { for (var i = window.console = window.console || {}, r = function() {}, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], n = 0; n < t.length; n++) i[t[n]] || (i[t[n]] = r) }();
cingletree.forms = function() { var i = function() { $("input, select[required]").on("change", r);
            $("form").attr("novalidate", "novalidate").on("click", o).submit(f).on("reset", e) },
        r = function() { $this = $(this); var n = $this.val();
            n = n.replace(/(\s+$)|(^\s+)/g, "");
            $this.val(n);
            u(this, $this);
            this.checkValidity() || ($this.addClass("invalid"), this.setCustomValidity(t(this))) },
        u = function(n, t) { t.closest("form").find("input[name=" + t.attr("name") + "], select[name=" + t.attr("name") + "]").each(function() { this.setCustomValidity("");
                $(this).removeClass("invalid") }) },
        f = function(t) { var i = $(this),
                r = n(i.find("input, select[required]").not("[disabled]")); return r ? (alert(r), i.find(".invalid").first().focus(), t.stopImmediatePropagation(), !1) : !0 },
        e = function() { $(this).find("input, select").each(function() { $(this).removeClass("invalid") }) },
        n = function(n) { var i = "",
                r = []; return n.each(function() { var n = $(this),
                    u = n.attr("name");
                $.inArray(u, r) > -1 || (this.validity.customError || this.checkValidity() || (n.addClass("invalid"), this.setCustomValidity(t(this))), this.validity.customError && (i += "* " + this.validationMessage + "\n"), r.push(u)) }), i },
        t = function(n) { var t = $(n),
                i = t.attr("title"); return n.validity.valueMissing ? t.data("valuemissing") || i || "Field is required" : n.validity.typeMismatch ? t.data("typemismatch") || t.data("invalid") || i || "Field is invalid" : n.validity.patternMismatch ? t.data("patternmismatch") || t.data("invalid") || i || "Field is invalid" : t.data("invalid") || i || "Field is invalid" },
        o = function(n) { var t = $(this);
            n.target.type != "submit" || n.isDefaultPrevented() ? t.removeData("$clickedButton") : t.data("$clickedButton", $(n.target)) }; return { init: i, checkFormFields: n } }();
$document.ready(function() { cingletree.forms.init() });
cingletree.page = function() { var t = function(n) { sessionStorage.isAdFree = n.IsAdFree;
            sessionStorage.firstName = n.FirstName;
            sessionStorage.lastName = n.LastName;
            sessionStorage.sectionId = n.sectionId;
            sessionStorage.sectionName = n.SectionName;
            sessionStorage.instructorId = n.InstructorId;
            sessionStorage.instructorUserId = n.InstructorUserId;
            sessionStorage.accountId = n.AccountId;
            sessionStorage.accountName = n.AccountName;
            sessionStorage.expirationDate = n.ExpirationDateDisplay;
            sessionStorage.daysRemaining = n.DaysRemaining;
            sessionStorage.isLeapYear = n.IsLeapYear;
            sessionStorage.allowLessonView = n.AllowLessonView;
            sessionStorage.allowLessonResubmit = n.AllowLessonResubmit;
            sessionStorage.allowTestView = n.AllowTestView;
            sessionStorage.allowTestResubmit = n.AllowTestResubmit;
            sessionStorage.services = JSON.stringify(n.Services);
            n.UserName && (sessionStorage.userName = n.UserName) },
        n = function() { sessionStorage.removeItem("bearerToken");
            sessionStorage.removeItem("isAdministrator");
            sessionStorage.removeItem("isImpersonating");
            sessionStorage.removeItem("isAdFree");
            sessionStorage.removeItem("firstName");
            sessionStorage.removeItem("lastName");
            sessionStorage.removeItem("sectionId");
            sessionStorage.removeItem("sectionName");
            sessionStorage.removeItem("instructorId");
            sessionStorage.removeItem("instructorUserId");
            sessionStorage.removeItem("accountId");
            sessionStorage.removeItem("accountName");
            sessionStorage.removeItem("expirationDate");
            sessionStorage.removeItem("daysRemaining");
            sessionStorage.removeItem("isLeapYear");
            sessionStorage.removeItem("allowLessonView");
            sessionStorage.removeItem("allowLessonResubmit");
            sessionStorage.removeItem("allowTestView");
            sessionStorage.removeItem("allowTestResubmit");
            sessionStorage.removeItem("services");
            sessionStorage.userName && sessionStorage.removeItem("userName") },
        i = function() { cingletree.settings = $html.data("clientsettings");
            cingletree.settings.isPublic || cingletree.client.setAdFree(!0);
            $html.hasClass("account-login") || $html.hasClass("account-register") ? n() : cingletree.client.isAuthenticated() && $.extend(cingletree.settings.services, JSON.parse(sessionStorage.services));
            cingletree.client.isDynamicFont() && $window.resize(function() { cingletree.client.resetFontSize() }) }; return { init: i, setSessionStorage: t, clearSessionStorage: n } }();
cingletree.page.init();
cingletree.events = function() { var n = 750,
        t = 50,
        i = function() { $.event.special.clicktap = { setup: function() { var u = $(this),
                        i = !1; if (cingletree.client.isTouchEnabled()) { var r = !1,
                            f = 0,
                            e = 0,
                            o = null;
                        u.bind("touchstart", function(t) { i = !0;
                            r = !1; var u = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                            f = u.clientX;
                            e = u.clientY;
                            o = setTimeout(function() { r = !0 }, n) }).bind("touchend", function(n) { if (clearTimeout(o), !r) { var i = n.originalEvent.changedTouches[0] ? n.originalEvent.changedTouches[0] : n,
                                    u = i.clientX - f,
                                    s = i.clientY - e,
                                    h = Math.sqrt(u * u + s * s);
                                h < t && $(n.target).trigger("clicktap") } }) }
                    u.bind("click", function(n) { i ? i = !1 : $(n.target).trigger("clicktap") }) }, teardown: function() { var n = $(this);
                    cingletree.client.isTouchEnabled() && n.unbind("touchstart").unbind("touchend");
                    n.unbind("click") } } }; return { init: function() { i() } } }();
$document.ready(function() { cingletree.events.init() });
cingletree.templates = function() { var t = function() { $("[data-template]").each(function() { n(this) }) },
        n = function(t) { var i = $(t),
                r = i.data("template");
            i.find("[data-template]").each(function() { n(this) });
            cingletree.templates[r] || (cingletree.templates[r] = i.html(), i.empty().removeAttr("data-template").attr("data-container", r)) }; return { init: function() { t() } } }();
$document.ready(function() { cingletree.templates.init() });
cingletree.services = function() { var n = function(n, t) { document.body.style.cursor = "wait";
            n && n.addClass("in-progress");
            t && t.attr("disabled", "disabled") },
        t = function(n, t) { document.body.style.cursor = "auto";
            n && n.removeClass("in-progress");
            t && t.removeAttr("disabled") },
        i = function(n, t, i, r, u, f, e) { if (!cingletree.client.isStorageSupported()) { f || alert("Private Browsing must be turned off to use this website.");
                r && r(t); return }
            $.ajax({ url: n, type: "POST", async: !0, contentType: "application/json;charset=utf-8", headers: { Authorization: "Bearer " + (e || sessionStorage.bearerToken) }, data: JSON.stringify(t) }).done(function(n) { if (n && n.Message == "Validation failed") { f || alert("Validation failed.\n");
                    location.href = cingletree.settings.homeUrl; return }
                n && n.BearerToken && (sessionStorage.bearerToken = n.BearerToken);
                n && n.IsAdministrator && (sessionStorage.isAdministrator = n.IsAdministrator);
                n && n.IsImpersonating && (sessionStorage.isImpersonating = n.IsImpersonating);
                n && n.Capacity && cingletree.account && cingletree.account.showWarnings(n);
                i && i(n) }).fail(function(n) { n && n.responseJSON && n.responseJSON.Message == "Authentication failed" ? location.href = cingletree.settings.loginUrl : n && n.responseJSON && n.responseJSON.Message == "Authorization failed" ? location.href = cingletree.settings.homeUrl : (f || alert("Connection to the server failed.\n\nCheck your internet connection and try again.\n"), r && r(n)) }).always(function(n) { u && u(n) }) }; return { showInProgress: n, hideInProgress: t, post: i } }();
cingletree.user = function() { var i = $("#loginForm"),
        t = $("#feedbackOverlay"),
        r = $("#adminTransfer"),
        o = $("#authenticatedAdminTransfer"),
        s = $("#passwordAdminTransfer"),
        n = $("#renewIndividualTransfer"),
        f = function() { $("#sectionName").text(sessionStorage.sectionName);
            $("#accountId").text(sessionStorage.accountId);
            $("#expirationDate").text(sessionStorage.expirationDate);
            $("#studentName").addClass("active").text(sessionStorage.firstName + " " + sessionStorage.lastName);
            $("#loginTool").removeClass("disabled").addClass("hidden");
            $("#loginLink").removeClass("hidden").text("Log out");
            $("#freeLessonsLink").addClass("hidden");
            $("#registerLink").addClass("hidden");
            $("#signUpLink").addClass("hidden");
            $("#feedbackForm .studentName").text(sessionStorage.firstName + " " + sessionStorage.lastName);
            $("#feedbackForm .accountId").val(sessionStorage.accountId);
            $("#feedbackForm .accountName").val(sessionStorage.accountName);
            $("#feedbackForm .instructorUserId").val(sessionStorage.instructorUserId);
            $("#feedbackForm .sectionName").val(sessionStorage.sectionName);
            $("#feedbackForm .firstName").val(sessionStorage.firstName);
            $("#feedbackForm .lastName").val(sessionStorage.lastName) },
        e = function() { t.modal({ toggle: "#feedbackOpen" });
            $("#feedbackForm").submit(v) },
        h = function() { $(this).addClass("disabled");
            $("#loginOverlay").addClass("show") },
        c = function(t) { if (t.preventDefault(), !cingletree.client.isCorsSupported()) { alert("This website does not support Internet Explorer 9.\nPlease upgrade to one of the following:\n\nGoogle Chrome\nMozilla Firefox\nApple Safari\nInternet Explorer 11\nInternet Explorer 10\n"); return } var h = $(this),
                c = $("#loginSubmit"),
                l = h.input();
            cingletree.services.showInProgress(h, c);
            cingletree.settings.isPublic || (l.UserName = cingletree.settings.hostPrefix + l.UserName);
            cingletree.services.post(cingletree.settings.services.root + cingletree.settings.services.authentication, l, function(t) { if (t && t.IsInstructor)
                    if (t.IsAuthenticated && !t.IsTemporary) { var l = t.IsTemporary ? s : o;
                        l.find("[name=BearerToken]").val(t.BearerToken);
                        l.find("[name=IsAdministrator]").val(t.IsAdministrator);
                        l.find("[name=IsAdFree]").val(t.IsAdFree);
                        l.find("[name=FirstName]").val(t.FirstName);
                        l.find("[name=LastName]").val(t.LastName);
                        l.find("[name=AccountId]").val(t.AccountId);
                        l.find("[name=AccountName]").val(t.AccountName);
                        l.submit() } else r.find("[name=UserName]").val(i.find("[name=UserName]").val()), r.find("[name=Password]").val(i.find("[name=Password]").val()), r.submit();
                else if (t && t.IsAuthenticated)
                    if (cingletree.page.setSessionStorage(t), t.IsTemporary && h.data("updatepassword")) location.href = cingletree.settings.updatePasswordUrl;
                    else if (h.data("redirecthome")) location.href = cingletree.settings.homeUrl;
                else { if (cingletree.client.setAuthentication(), cingletree.session.allowLessonResubmit() || location.reload(!1), $.extend(cingletree.settings.services, JSON.parse(sessionStorage.services)), cingletree.lesson.isSecure ? cingletree.session.getLessonContent() : cingletree.session.loadLessonData(), f(), e(), a(h), cingletree.headers && cingletree.headers.init(), cingletree.controls && cingletree.controls.resetAssignmentList(), t.DaysRemaining < 30) { u(t);
                        $(".renew-subscription").removeClass("hidden");
                        $(".renew-subscription-link").on("click", _renewSubscription) }
                    cingletree.services.hideInProgress(h, c) } else t && t.IsExpired ? (cingletree.services.hideInProgress(h, c), t.IsAdministrator ? (alert("Your account has expired.\nPlease submit payment to renew your subscription.\n"), u(t), n.submit()) : alert("Your account has expired.\nPlease notify your teacher.\n")) : (cingletree.services.hideInProgress(h, c), alert("Log in failed.\n\nCheck your username and password.\n")) }, function() { cingletree.services.hideInProgress(h, c) }) },
        u = function(t) { n.find("[name=UserName]").val(t.UserName);
            n.find("[name=UserId]").val(t.UserId);
            n.find("[name=ReferenceId]").val(t.StudentId);
            n.find("[name=IsTemporary]").val(t.IsTemporary);
            n.find("[name=Email]").val(t.Email);
            n.find("[name=AccountId]").val(t.AccountId);
            n.find("[name=CountryCode]").val(t.CountryCode);
            n.find("[name=TimeZoneId]").val(t.TimeZoneId) },
        l = function(n) { if (n.preventDefault(), !cingletree.client.isCorsSupported()) { alert("This website does not support Internet Explorer 9.\nPlease upgrade to one of the following:\n\nGoogle Chrome\nMozilla Firefox\nApple Safari\nInternet Explorer 11\nInternet Explorer 10\n"); return } var t = $(this),
                i = $("#resetSubmit"),
                r = t.input();
            cingletree.services.showInProgress(t, i);
            cingletree.services.post(cingletree.settings.services.root + cingletree.settings.services.resetUserPassword, r, function(n) { n && n.Success ? ($("#passwordResetForm").addClass("hidden"), $("#passwordResetSuccess").removeClass("hidden")) : alert("We were unable to match your e-mail address to an account") }, null, function() { cingletree.services.hideInProgress(t, i) }) },
        a = function(n) { $("#loginOverlay").removeClass("show");
            n[0].reset() },
        v = function(n) { n.preventDefault(); var i = $(this),
                r = $("#feedbackSubmit"),
                u = i.input();
            cingletree.services.showInProgress(t, r);
            cingletree.services.post(cingletree.settings.services.root + cingletree.settings.services.sendFeedback, u, function() { alert("Thank you for the feedback.");
                i[0].reset();
                t.close() }, null, function() { cingletree.services.hideInProgress(t, r) }) }; return { init: function() { if (cingletree.client.isAuthenticated()) f(), e();
            else { $("#loginTool").on("clicktap", h);
                i.submit(c);
                $("#passwordResetForm").submit(l) } }, loadRenewTransferForm: u } }();
$document.ready(function() { cingletree.user.init() });
cingletree.saveTimeoutId = 0;
cingletree.session = function() { var n = !1,
        t = null,
        y = Date.now(),
        p = 3e5,
        f = 50,
        e = $("#lessonBody"),
        w = $("#submitDate"),
        b = function() { if (sessionStorage[cingletree.lesson.lessonId + ".beginUtcTicks"] && (cingletree.lesson.isInProgress = !0), cingletree.client.isAuthenticated()) { cingletree.lesson.isSecure ? o() : i();
                $body.on("click", "a", rt) } else cingletree.settings.isPublic ? (cingletree.controls.showReset(), cingletree.lesson.isSecure && $("#loginMessage").removeClass("hidden")) : location.href = cingletree.settings.loginUrl },
        o = function() { var n = $("#lessonBody"),
                t;
            cingletree.services.showInProgress(n);
            t = cingletree.record;
            cingletree.services.post(cingletree.settings.services.root + cingletree.settings.services.getLessonContent, cingletree.lesson.lessonId, function(r) { r && r.ProblemsHtml ? ($("#problemsContent").html(r.ProblemsHtml), cingletree.record = t, cingletree.services.hideInProgress(n), i()) : cingletree.services.hideInProgress(n) }, function() { cingletree.services.hideInProgress(n) }) },
        i = function() { var n = $("#lessonBody");
            cingletree.services.showInProgress(n);
            cingletree.services.post(cingletree.settings.services.root + cingletree.settings.services.getStudentLesson, { ModuleId: cingletree.lesson.moduleId, LessonId: cingletree.lesson.lessonId, RecordId: cingletree.record.RecordId }, function(t) { var i, u, f, e, o; if (t && t.StudentLesson) { if (t.Message == "Lesson not assigned") { alert("You have not been assigned this lesson.\n\n");
                        location.href = cingletree.settings.homeUrl; return }
                    i = $("#lessonHeaderControls .scroll-left");
                    u = i.attr("href");
                    t.StudentLesson.PreviousLessonLink ? (i.attr("href", u.substring(0, u.indexOf("module")) + t.StudentLesson.PreviousLessonLink.LinkUrl), i.attr("title", t.StudentLesson.PreviousLessonLink.LinkText)) : u.indexOf("module") > 0 && (i.attr("href", u.substring(0, u.indexOf("module")) + "student-dashboard"), i.attr("title", "Student Dashboard"));
                    f = $("#lessonHeaderControls .scroll-right");
                    e = f.attr("href");
                    t.StudentLesson.NextLessonLink ? (f.attr("href", e.substring(0, e.indexOf("module")) + t.StudentLesson.NextLessonLink.LinkUrl), f.attr("title", t.StudentLesson.NextLessonLink.LinkText)) : e.indexOf("module") > 0 && (f.attr("href", e.substring(0, e.indexOf("module")) + "student-dashboard"), f.attr("title", "Student Dashboard"));
                    t.StudentLesson.Course && (cingletree.lesson.course = t.StudentLesson.Course);
                    t.StudentLesson.Record && t.StudentLesson.Record.Course && (cingletree.record.Course = t.StudentLesson.Record.Course);
                    (cingletree.lesson.course || cingletree.record.Course) && (o = cingletree.record.Course ? JSON.parse(cingletree.record.Course) : cingletree.lesson.course, cingletree.problems.setCourse(o));
                    t.StudentLesson.Record && t.StudentLesson.Record.SubmitUtcTicks || cingletree.problems.shuffle();
                    cingletree.problems.init();
                    t.StudentLesson.Record && t.StudentLesson.Record.LessonId && (cingletree.record.RecordId = t.StudentLesson.Record.RecordId, cingletree.record.IsViewable = t.StudentLesson.Record.IsViewable, cingletree.record.Scored = t.StudentLesson.Record.Scored, cingletree.record.Interactions = t.StudentLesson.Record.Interactions, cingletree.record.IsViewable && t.StudentLesson.Record.Interactions && (cingletree.problems.setInteractions(), cingletree.scoring.scoreProblems(!t.StudentLesson.Record.SubmitUtcTicks)), cingletree.record.ScoreRaw = t.StudentLesson.Record.ScoreRaw, cingletree.record.ScoreScaled = t.StudentLesson.Record.ScoreScaled, cingletree.scoring.setScoreBoard(), t.StudentLesson.Record.SubmitUtcTicks ? (cingletree.controls.setSubmitted(), w.text("(" + t.StudentLesson.Record.SubmitDateTime + ")"), r() && cingletree.controls.showReset(), c() || $("#problemsContent").addClass("hidden"), cingletree.scoring.displayReport(cingletree.record.IsViewable), h(), cingletree.lesson.isScored = !0, cingletree.lesson.isSubmitted = !0) : (s(), cingletree.lesson.isScored = !1, cingletree.lesson.isSubmitted = !1), window.scrollTo(0, 0)) }
                cingletree.services.hideInProgress(n) }, function() { cingletree.services.hideInProgress(n) }) },
        s = function() { sessionStorage[cingletree.lesson.lessonId + ".beginUtcTicks"] || (sessionStorage[cingletree.lesson.lessonId + ".beginUtcTicks"] = cingletree.record.BeginUtcTicks);
            cingletree.lesson.isInProgress = !0 },
        h = function() { sessionStorage.removeItem(cingletree.lesson.lessonId + ".beginUtcTicks");
            cingletree.lesson.isInProgress = !1 },
        k = function() { cingletree.scoring.resetProblems();
            cingletree.scoring.resetScoreBoard();
            cingletree.scoring.resetReport();
            cingletree.scoring.resetSubjectScores(); for (subject in cingletree.lesson.subjects) cingletree.lesson.subjects[subject].inCourse = !1;
            cingletree.lesson.isSubmitted && (cingletree.record.RecordId = null, cingletree.record.SubmitUtcTicks = null);
            cingletree.record.ScoreRaw = 0;
            cingletree.record.ScoreScaled = null;
            cingletree.record.Scored = null;
            cingletree.record.Interactions = null;
            (cingletree.lesson.course || cingletree.record.Course) && (cingletree.record.Course = null, cingletree.problems.setCourse(cingletree.lesson.course));
            cingletree.problems.shuffle();
            cingletree.problems.init();
            $("#problemsContent").removeClass("hidden");
            cingletree.lesson.isInProgress = !1;
            cingletree.lesson.isScored = !1;
            cingletree.lesson.isSubmitted = !1 },
        c = function() { return cingletree.record.IsViewable && (!cingletree.lesson.isTest && sessionStorage.allowLessonView.toString() == "true" || cingletree.lesson.isTest && sessionStorage.allowTestView.toString() == "true") },
        r = function() { return !cingletree.lesson.isTest && sessionStorage.allowLessonResubmit.toString() == "true" || cingletree.lesson.isTest && sessionStorage.allowTestResubmit.toString() == "true" },
        d = function() { return cingletree.problems.problemsAttempted() ? !0 : (alert("Answer all the questions before scoring."), a(), !1) },
        g = function() { cingletree.scoring.scoreProblems();
            cingletree.lesson.isScored = !0;
            alert(cingletree.scoring.getScoreMessage());
            cingletree.scoring.setScoreBoard();
            cingletree.scoring.displayReport(!0);
            cingletree.lesson.isInProgress = !1;
            cingletree.lesson.isSubmitted = !1 },
        l = function(n) { if (!n) { if (cingletree.saveTimeoutId) return; var i = Date.now() - (t || y);
                n = Math.max(p - i, f) }
            cingletree.saveTimeoutId = setTimeout(function() { u(!0) }, n) },
        u = function(i, r) { if (n && !r) { l(f); return }
            cingletree.saveTimeoutId && (i || clearTimeout(cingletree.saveTimeoutId), cingletree.saveTimeoutId = 0);
            n = !0;
            cingletree.services.post(cingletree.settings.services.root + cingletree.settings.services.saveStudentRecord, v(!1), function(n) { if (n && n.Message == "Record exists") { alert("** SAVE FAILED **\nA record for this lesson already exists.");
                    location.href = cingletree.settings.homeUrl; return }
                cingletree.record.RecordId = n.RecordId;
                t = Date.now() }, null, function() { n = !1;
                r && (location.href = r) }, !0) },
        nt = function() { var n = "",
                t = !1; return (cingletree.client.isAuthenticated() || (n += "* Log in before submitting.\n"), cingletree.problems.problemsAttempted() || (t = !0, n += "* Answer all the questions before submitting.\n"), n) ? (alert(n), t && a(), !1) : !0 },
        a = function() { $("html, body").animate({ scrollTop: $(".unanswered").offset().top - 400 }, 1e3) },
        tt = function() { cingletree.saveTimeoutId && (clearTimeout(cingletree.saveTimeoutId), cingletree.saveTimeoutId = 0);
            cingletree.scoring.scoreProblems();
            cingletree.lesson.isScored = !0;
            e.addClass("in-progress");
            cingletree.services.post(cingletree.settings.services.root + cingletree.settings.services.saveStudentRecord, v(!0), function(n) { if (n && n.Message == "Record exists") { alert("** SUBMIT FAILED **\nA record for this lesson already exists.");
                    location.href = cingletree.settings.homeUrl; return }
                cingletree.record.RecordId = n.RecordId;
                t = Date.now();
                alert("Lesson submitted.\n\n" + cingletree.scoring.getScoreMessage());
                r() && cingletree.controls.showReset();
                cingletree.scoring.setScoreBoard();
                cingletree.scoring.displayReport(!0);
                cingletree.controls.resetAssignmentList();
                h();
                cingletree.lesson.isSubmitted = !0 }, function() { cingletree.controls.enableSubmit() }, function() { e.removeClass("in-progress") }) },
        v = function(n) { for (var t, r, u = [], f = [], i = 1; i <= cingletree.lesson.qqq.length; i++) t = $("#" + i), (t.hasClass("correct") || t.hasClass("error") || t.hasClass("partial")) && f.push(i), r = t.data("selections"), u.push(r); return cingletree.record.ModuleId = cingletree.lesson.moduleId, cingletree.record.LessonId = cingletree.lesson.lessonId, cingletree.record.BeginUtcTicks = parseInt(sessionStorage[cingletree.lesson.lessonId + ".beginUtcTicks"]), n && (cingletree.record.SubmitUtcTicks = (new Date).getTime() * 1e4 + 621355968000000000), cingletree.record.ScoreRaw = Math.round(cingletree.record.ScoreRaw * 100) / 100, cingletree.record.ScoreScaled = Math.round(cingletree.record.ScoreRaw * 100 / cingletree.lesson.totalPoints) / 100, cingletree.record.Scored = JSON.stringify(f), cingletree.record.Interactions = JSON.stringify(u), cingletree.lesson.course && (cingletree.record.Course = JSON.stringify(cingletree.lesson.course)), cingletree.record },
        it = function(n) { if (48 < n.which && n.which < 58) { var t = n.which - 48;
                $(".header-toolbar, .lesson-toolbar").each(function() { $(this).children("button").eq(t - 1).click() }) } },
        rt = function(n) { if (cingletree.saveTimeoutId) { var t = $(this),
                    i = t.attr("href"),
                    r = t.attr("target");
                i && !r && (n.preventDefault(), u(!1, i)) } }; return { init: function() { b();
            $document.on("keypress", it) }, getLessonContent: o, loadLessonData: i, initSession: s, resetLesson: k, allowLessonView: c, allowLessonResubmit: r, validForScore: d, scoreLesson: g, queueSave: l, saveLesson: u, validForSubmit: nt, submitLesson: tt } }();
$document.ready(function() { cingletree.session.init() });
cingletree.headers = function() { var n = function() { $("#lessonHeaderControls").each(t) },
        t = function() { var n = $(this),
                t = n.offset().top - 55;
            $window.scroll(function() { $window.scrollTop() > t ? n.addClass("fixed") : n.removeClass("fixed") }) },
        i = function() { var n = $(this),
                t;
            n.find("th").each(function() { var n = $(this);
                n.css("width", n.width() + 1 + "px");
                n.css("padding", n.css("padding")) });
            n.after('<table class="sticky-header hidden"><thead>' + n.find("thead").clone().html() + "<\/thead><\/table>");
            t = n.next("table");
            t.css("width", n.width() + "px"); var i = n.offset().top - 140,
                r = n.offset().left,
                u = i + n.height() - t.height();
            $window.scroll(function() { var n = $window.scrollTop();
                n > i && n < u ? (t.css("left", r - $window.scrollLeft() + "px"), t.removeClass("hidden")) : t.addClass("hidden") });
            $window.on("resize report", function() { i = n.offset().top - 140;
                r = n.offset().left;
                u = i + n.height() - t.height();
                t.css("left", r - $window.scrollLeft() + "px") }) },
        r = function() { $("table.problems, table.with-sticky-header").each(i) },
        u = function(n) { var t = n.offset().top - 135;
            n.parent(".lesson-toolbar-container").css("min-height", n.outerHeight() + "px");
            $window.scroll(function() { $window.scrollTop() > t ? n.addClass("fixed") : n.removeClass("fixed") });
            $window.on("resize report", function() { n.hasClass("fixed") ? (n.removeClass("fixed"), t = n.offset().top - 135, n.addClass("fixed")) : t = n.offset().top - 135 }) }; return { init: n, initTableHeaders: r, initLessonToolbar: u } }();
$document.ready(function() { cingletree.headers.init() });
cingletree.instructions = function() { var n = function() { var n = $(this),
                i, t;
            n.empty();
            i = $(this).closest("tr");
            t = !1;
            i.find("td").each(function(n) { if (n != 0 && n != 1) { var i = $(this),
                        r = i.find(".verb-answer");
                    i.find(".verb-input").val().toLowerCase() != r.text() && (r.addClass("error"), t = !0) } });
            t ? n.addClass("error").append('<img class="redx" src="/Images/redx.png"/>') : n.addClass("correct") },
        t = function() { window.open("/content/irregularverbs.pdf") }; return { init: function() { $(".verb-check").on("click", n);
            $("#verbPrint").on("click", t) } } }();
$document.ready(function() { cingletree.instructions.init() });
cingletree.controls = function() { var r = $(".reset-button"),
        u = $(".score-button"),
        f = $(".submit-button"),
        h = $("#assignmentsButton"),
        n = $("#assignmentsPanel"),
        t = n.find("#assignmentList"),
        i = $('<div id="backdrop"><\/div>'),
        c = function() { u.attr("disabled", "disabled") },
        l = function() { u.removeAttr("disabled") },
        a = function() { cingletree.lesson.isSubmitted = !0;
            e() },
        e = function() { f.attr("disabled", "disabled") },
        o = function() { f.removeAttr("disabled");
            r.addClass("hidden") },
        v = function() { r.removeClass("hidden") },
        y = function() { cingletree.client.isAuthenticated() ? (cingletree.session.resetLesson(), o()) : location.reload(!1) },
        p = function() { if (!cingletree.lesson.isScored) { if (c(), document.body.style.cursor = "wait", !cingletree.session.validForScore()) { l();
                    document.body.style.cursor = "auto"; return }
                cingletree.session.scoreLesson();
                document.body.style.cursor = "auto" } },
        w = function() { if (!cingletree.lesson.isSubmitted) { if (e(), document.body.style.cursor = "wait", !cingletree.session.validForSubmit()) { o();
                    document.body.style.cursor = "auto"; return }
                cingletree.session.submitLesson();
                document.body.style.cursor = "auto" } },
        b = function(i) { if (i.stopPropagation(), n.hasClass("expanded")) { n.removeClass("expanded");
                s(); return }(n.addClass("expanded"), k(), t.is(":empty")) && (cingletree.services.showInProgress(n), cingletree.services.post(cingletree.settings.services.root + (cingletree.client.isAuthenticated() ? cingletree.settings.services.getStudentAssignments : cingletree.settings.services.getTableOfContents), null, function(n) { var f, i, c, a, e, r, v, o, l, s, u, h; if (n && n.StudentAssignments) { if (n.StudentAssignments.ModuleAssignments)
                        for (f = 0; f < n.StudentAssignments.ModuleAssignments.length; f++)
                            if (i = n.StudentAssignments.ModuleAssignments[f], i.Assignments.length > 0) { for (c = $(cingletree.templates.assignmentList.replace("{moduleTitle}", i.ModuleTitle).replace(/{moduleId}/g, i.ModuleId)), a = c.find("[data-container=assignmentRow]"), e = 0; e < i.Assignments.length; e++) r = i.Assignments[e], v = r.LessonDescriptor + ": " + (r.LessonTitle ? r.LessonTitle : i.ModuleTitle), a.append(cingletree.templates.assignmentRow.replace("{lessonId}", r.LessonId).replace(/{lesson}/g, v).replace("{lessonUrl}", r.LessonUrl).replace("{class}", r.LessonId == cingletree.lesson.lessonId ? "current-lesson" : ""));
                                t.append(c);
                                o = t.find("#module" + i.ModuleId + "Panel");
                                o.css("height", o.outerHeight() + "px");
                                i.ModuleId != cingletree.lesson.moduleId ? o.addClass("collapsed") : t.find("#module" + i.ModuleId + "Link").addClass("expanded") }
                    if (n.StudentAssignments.CompletedLessons)
                        for (u in n.StudentAssignments.CompletedLessons) l = n.StudentAssignments.CompletedLessons[u], s = "s0", l >= .8 ? s = "s80" : l >= .6 && (s = "s60"), h = $("#" + u), h.find(".mark").addClass(s); if (n.StudentAssignments.InProgressLessons)
                        for (u in n.StudentAssignments.InProgressLessons) h = $("#" + u), h.find(".mark").addClass("ip") } }, null, function() { cingletree.services.hideInProgress(n) })) },
        k = function() { $body.append(i);
            i.on("clicktap", nt);
            setTimeout(function() { i.addClass("gray") }, 30) },
        s = function() { i.removeClass("gray");
            setTimeout(function() { i.remove() }, 500) },
        d = function(n) { n.stopPropagation() },
        g = function() { var n = $(this),
                t = n.data("moduleid");
            n.toggleClass("expanded");
            $("#module" + t + "Panel").toggleClass("collapsed") },
        nt = function() { n.hasClass("expanded") && (n.removeClass("expanded"), s()) },
        tt = function() { t.empty() }; return { init: function() { r.on("click", y);
            u.on("click", p);
            f.on("click", w);
            h.on("click", b);
            n.on("click", d);
            t.on("click", ".module-link", g) }, setSubmitted: a, disableSubmit: e, enableSubmit: o, showReset: v, resetAssignmentList: tt } }();
$document.ready(function() { cingletree.controls.init() });
cingletree.problems = function() { var n = 0,
        o = function() { cingletree.headers && cingletree.headers.initTableHeaders();
            $(".problems .choice").on("clicktap", w);
            $(".problems .answer").on("click", k);
            $(".problems .problem").on("aftersaveselections", b);
            $(".problems .problem").on("calculatescore", d);
            $(".problems .problem").on("resetselections", e);
            $(".problems .problem").on("setselections", g);
            cingletree.problems.radio.init();
            cingletree.problems.multistate && cingletree.problems.multistate.init();
            cingletree.problems.sentenceparts && cingletree.problems.sentenceparts.init();
            cingletree.problems.modifiers && cingletree.problems.modifiers.init();
            cingletree.problems.prepositions && cingletree.problems.prepositions.init();
            cingletree.problems.multiradio && cingletree.problems.multiradio.init();
            cingletree.problems.parallel && cingletree.problems.parallel.init() },
        i = function(n) { return ($parent = n.closest("dd, td"), $parent.is("dd")) ? $parent.prev("dt.problem") : $parent.is("td") ? $parent.closest("tr.problem") : void 0 },
        t = function(n) { return n.is("dt") ? n.next("dd").find(".choice") : n.is("tr") ? n.find(".choice") : void 0 },
        r = function(n) { return n.is("dt") ? n.next("dd").find(".segment") : n.is("tr") ? n.find(".segment") : void 0 },
        s = function(n) { var i = !1,
                t;
            $("[data-lessonid]").each(function() { var t = $(this),
                    u = t.data("lessonid"),
                    r = t.data("subject");
                n.indexOf(u) < 0 ? (t.addClass("hidden"), i = !0) : (t.removeClass("hidden"), r && (cingletree.lesson.subjects[r].inCourse = !0)) });
            t = 0;
            cingletree.lesson.totalPoints = 0;
            $(".problem").each(function() { var n = $(this),
                    i;
                n.hasClass("hidden") || n.closest(".problems").hasClass("hidden") || (i = n[0].id - 1, cingletree.lesson.totalPoints += cingletree.lesson.weighting[i], t++, n.find(".id").text(t + ".")) });
            cingletree.lesson.isTest && $("#lessonSpecs").removeClass("hidden").text("(" + (i ? t : cingletree.lesson.qqq.length) + " Problems, " + cingletree.lesson.totalPoints + " Points)") },
        h = function() { $("dl.problems:not(.hidden)").each(function() { var n = $(this),
                    o, s, t = [],
                    r = [],
                    i = [],
                    u = [],
                    f, e; if (n.find("dt.problem").each(function() { t.push(this.outerHTML) }), n.find("dd").each(function() { i.push(this.outerHTML) }), n.empty(), n.hasClass("paired")) { for (f = t.length / 2; f > 1; f--) o = 2 * Math.floor(Math.random() * f), r = t.splice(o, 2), u = i.splice(o, 2), n.append(r[0]).append(u[0]).append(r[1]).append(u[1]);
                    n.append(t[0]).append(i[0]).append(t[1]).append(i[1]) } else { for (e = t.length; e > 1; e--) s = Math.floor(Math.random() * e), r = t.splice(s, 1), u = i.splice(s, 1), n.append(r[0]).append(u[0]);
                    n.append(t[0]).append(i[0]) } });
            $("table.problems:not(.hidden)").each(function() { var n = $(this).find("tbody"),
                    r, t = [],
                    u = [],
                    i; for (n.find("tr.problem").each(function() { t.push(this.outerHTML) }), n.empty(), i = t.length; i > 1; i--) r = Math.floor(Math.random() * i), u = t.splice(r, 1), n.append(u[0]);
                n.append(t[0]) }); var n = 0;
            $(".problem").each(function() { var t = $(this);
                t.hasClass("hidden") || t.closest(".problems").hasClass("hidden") || (n++, t.find(".id").text(n + ".")) }) },
        c = function() { var n = JSON.parse(cingletree.record.Interactions);
            $(".problems").each(function() { var t = $(this);
                t.find(".problem").each(function() { var t = $(this),
                        i = parseInt(this.id) - 1;
                    n[i] != null && (t.data("selections", n[i]), t.trigger("setselections")) }) }) },
        u = function(n) { return n.hasClass("correct") || n.hasClass("error") ? !1 : (cingletree.lesson.isInProgress || cingletree.session.initSession(), !0) },
        l = function(n) { var i = "";
            t(n).each(function() { i += $(this).hasClass("on") ? "1" : "0" });
            n.data("selections", i);
            n.trigger("aftersaveselections") },
        a = function() { var n = !0; return $(".problems .problem").each(function() { var t = $(this),
                    i = t.closest(".problems");
                t.hasClass("hidden") || i.hasClass("hidden") || f(t) || (n = !1, v(t)) }), n },
        f = function(n) { var i = t(n); return i.filter(".on").length > 0 },
        v = function(n) { return n.is("dt") ? n.next("dd").addClass("unanswered") : n.is("tr") ? n.addClass("unanswered") : void 0 },
        y = function(n) { return n.is("dt") ? n.next("dd").removeClass("unanswered") : n.is("tr") ? n.removeClass("unanswered") : void 0 },
        p = function(n) { var t = ""; return (cingletree.settings.isPublic || cingletree.client.isAuthenticated() || (t += "* Log in before checking answer.\n"), f(n) || (t += "* Make a selection before checking answer.\n"), t) ? (alert(t), !1) : !0 },
        w = function() { var n = $(this);
            u(n) && (n.toggleClass("on"), l(i(n))) },
        b = function() { var i = $(this),
                t = parseInt(i.get(0).id);
            n > 0 && t != n ? (n = t, cingletree.client.isAuthenticated() && cingletree.session.queueSave()) : n < 1 && (n = t);
            y(i) },
        k = function() { $(this).attr("disabled", "disabled"); var t = $(this).closest(".problem"); if (!p(t)) { $(this).removeAttr("disabled"); return }
            cingletree.scoring.scoreProblem(t);
            cingletree.client.isAuthenticated() && cingletree.scoring.problemsScored() ? (cingletree.controls.disableSubmit(), cingletree.session.submitLesson()) : cingletree.client.isAuthenticated() ? (cingletree.scoring.setScoreBoard(), cingletree.session.saveLesson()) : cingletree.scoring.setScoreBoard();
            n = parseInt(t.get(0).id) },
        d = function() { var n = $(this),
                h = t(n),
                f = n.data("selections"),
                a = parseInt(this.id) - 1,
                i = cingletree.lesson.qqq[a],
                s, l; if (f == i) h.addClass("correct"), n.data("scoreScaled", 1);
            else { var e = r(n),
                    c = 0,
                    u = 0,
                    o = 0;
                h.each(function(n) { var r = parseInt(i.charAt(n)) > 0,
                        t = f.charAt(n) == i.charAt(n);
                    $(this).addClass(t ? "correct" : "error");
                    r && t && c++ });
                e.length > 0 ? (e.each(function() { $(this).find(".choice.error").length < 1 && u++ }), o = u / e.length) : (s = i.replace(/0/g, "").length, l = f.replace(/0/g, "").length, u = Math.max(0, c - Math.max(0, l - s)), o = u / s);
                n.data("scoreScaled", o) } },
        e = function() { var n = $(this),
                i = t(n);
            i.removeClass("on correct error");
            n.data("selections", "") },
        g = function() { var n = $(this),
                r = t(n),
                i = n.data("selections");
            i && r.each(function(n) { var t = $(this);
                parseInt(i.charAt(n)) > 0 && t.addClass("on") }) }; return { init: o, $getProblem: i, $getChoices: t, $getSegments: r, setCourse: s, shuffle: h, setInteractions: c, isChoiceEnabled: u, problemsAttempted: a, resetSelections: e } }();
cingletree.problems.radio = function() { var n = function(n, t) { var i = t.index(t.filter(".on"));
            n.data("selections", i.toString());
            n.trigger("aftersaveselections") },
        t = function() { var t = $(this); if (cingletree.problems.isChoiceEnabled(t)) { var u = t.hasClass("on"),
                    i = cingletree.problems.$getProblem(t),
                    r = cingletree.problems.$getChoices(i);
                r.removeClass("on");
                u || t.addClass("on");
                n(i, r) } },
        i = function() { var n = $(this),
                t = cingletree.problems.$getChoices(n),
                i = parseInt(n.data("selections")),
                u = parseInt(this.id) - 1,
                r = parseInt(cingletree.lesson.qqq[u]);
            i == r ? (t.addClass("correct"), n.data("scoreScaled", 1)) : (t.each(function(n) { $(this).addClass(n == i || n == r ? "error" : "correct") }), n.data("scoreScaled", 0)) },
        r = function() { var t = $(this),
                i = cingletree.problems.$getChoices(t),
                n = t.data("selections");
            (n || n == "0") && $(i[parseInt(n)]).addClass("on") }; return { init: function() { $(".radio .choice").off("clicktap").on("clicktap", t);
            $(".radio .problem, .radio.problem").off("calculatescore").on("calculatescore", i);
            $(".radio .problem, .radio.problem").off("setselections").on("setselections", r) } } }();
cingletree.scoring = function() { var n = .8,
        i = "Good Job!",
        r = "Perfect Score!",
        e = "Suggested Lessons:",
        o = function(n) { var t = JSON.parse(cingletree.record.Scored),
                i = function() { for (var n in cingletree.lesson.subjects) return !0; return !1 }();
            i && u();
            $(".problems").each(function() { var i = $(this);
                i.find(".problem").each(function() { var r = $(this),
                        u = parseInt(this.id) - 1;
                    r.hasClass("hidden") || i.hasClass("hidden") || !(!n || t.indexOf(u + 1) > -1) || (r.data("selections") && (r.find(".answer").attr("disabled", "disabled"), f(r, i)), s(i, r)) }) }) },
        u = function() { for (var n in cingletree.lesson.subjects) cingletree.lesson.subjects[n].score = 0, cingletree.lesson.subjects[n].points = 0, cingletree.lesson.subjects[n].lessons = [] },
        s = function(n, t) { var i = t.data("subject") || n.data("subject"),
                u, r;
            i && (u = cingletree.lesson.weighting[t[0].id - 1], cingletree.lesson.subjects[i].score += (t.data("scoreScaled") || 0) * u, cingletree.lesson.subjects[i].points += u, r = t.data("lessonid") || n.data("lessonid"), r && cingletree.lesson.subjects[i].lessons.indexOf(r) < 0 && cingletree.lesson.subjects[i].lessons.push(r)) },
        h = function() { $(".problems").each(function() { var n = $(this);
                n.find(".problem").each(function() { var n = $(this);
                    n.removeClass("correct error partial");
                    n.find(".answer").removeAttr("disabled");
                    n.find(".partial-score").remove();
                    n.data("scoreScaled", 0);
                    n.trigger("resetselections") }) }) },
        f = function(t, i) { if (!t.hasClass("correct") && !t.hasClass("error") && !t.hasClass("partial")) { i || (i = t.closest(".problems"));
                t.trigger("calculatescore"); var u = t[0].id - 1,
                    f = cingletree.lesson.weighting[u],
                    r = t.data("scoreScaled"),
                    e = r * f;
                cingletree.record.ScoreRaw += e;
                r > .99 ? t.addClass("correct") : r > 0 ? (t.addClass("partial"), t.find(".id").before('<span class="partial-score' + (r < n ? " below-passing" : "") + '">' + (r * 100).toFixed(0) + "%<\/span>")) : t.addClass("error") } },
        c = function() { var n = !0; return $(".problems .problem").each(function() { var t = $(this),
                    i = t.closest(".problems"); if (!t.hasClass("hidden") && !i.hasClass("hidden") && !(t.hasClass("correct") || t.hasClass("error") || t.hasClass("partial"))) return n = !1, !1 }), n },
        l = function() { var n = Math.round(cingletree.record.ScoreRaw * 100) / 100,
                i = t() + "% (" + n + "/" + cingletree.lesson.totalPoints + ")";
            $(".student-score").html(i) },
        a = function() { $(".student-score").empty() },
        v = function(u) { var e = t(),
                h = e >= n * 100,
                o = $("#report"),
                f, s; if (o.removeClass("hidden"), o.append('<h2 class="report-overall">Overall Score: ' + e + '% <span class="report-overall-message' + (h ? " passed" : "") + '">' + (e == 100 ? r : e >= n * 100 ? i : "") + "<\/span><\/h2>"), u)
                for (f in cingletree.lesson.subjects) cingletree.lesson.subjects[f].inCourse && (s = Math.round(cingletree.lesson.subjects[f].score * 100 / cingletree.lesson.subjects[f].points), o.append('<div class="subject-report"><h5 class="subject-title">' + f + '<\/h5><p class="subject-score">Score: ' + s + "%<\/p>" + w(s, cingletree.lesson.subjects[f].lessons) + "<\/div>"));
            $window.trigger("report") },
        y = function() { var n = $("#report");
            n.addClass("hidden");
            n.find(".report-overall").remove();
            n.find(".subject-report").remove();
            $window.trigger("report") },
        p = function() { var u = t(),
                f = "Score: " + u + "%\n"; return u == 100 ? f += r + "\n" : u >= n * 100 && (f += i + "\n"), f },
        t = function() { var n = Math.round(cingletree.record.ScoreRaw * 100) / 100; return Math.round(n * 100 / cingletree.lesson.totalPoints) },
        w = function(t, u) { var s, h, o, f, c; if (t == 100) return '<p class="subject-message passed">' + r + "<\/p>"; if (t >= n * 100) return '<p class="subject-message passed">' + i + "<\/p>"; if (u.length > 0) { for (s = u.join().split(","), h = "", o = 0; o < s.length; o++) f = cingletree.lessons[s[o]], c = cingletree.modules[f.ModuleId], h += '<a class="report-suggested-link" href="/module-' + c.ModuleId + "/" + c.RouteModule + "/" + f.RouteDescriptor + "/" + f.RouteTitle + '">' + f.Descriptor + " " + (f.Title.length > 21 ? "<br />" + f.Title : f.Title) + "<\/a>"; return '<dl class="report-suggested-lessons"><dt class="subject-message">' + e + "<\/dt><dd>" + h + "<\/dd><\/dl>" } }; return { passingThreshold: function() { return n }, scoreProblems: o, resetProblems: h, scoreProblem: f, problemsScored: c, setScoreBoard: l, resetScoreBoard: a, displayReport: v, resetReport: y, resetSubjectScores: u, getScoreMessage: p, getOverallScore: t } }()