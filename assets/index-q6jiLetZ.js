(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(i => {
        for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }).observe(document, {childList: !0, subtree: !0});

    function s(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
    }

    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const r = s(i);
        fetch(i.href, r)
    }
})();

/**
 * @vue/shared v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function $i(e, t) {
    const s = new Set(e.split(","));
    return t ? n => s.has(n.toLowerCase()) : n => s.has(n)
}

const J = {}, Je = [], Ot = () => {
    }, Na = () => !1,
    yn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Ii = e => e.startsWith("onUpdate:"), ct = Object.assign, Pi = (e, t) => {
        const s = e.indexOf(t);
        s > -1 && e.splice(s, 1)
    }, xa = Object.prototype.hasOwnProperty, K = (e, t) => xa.call(e, t), k = Array.isArray,
    Ze = e => An(e) === "[object Map]", Io = e => An(e) === "[object Set]", F = e => typeof e == "function",
    rt = e => typeof e == "string", ds = e => typeof e == "symbol", st = e => e !== null && typeof e == "object",
    Po = e => (st(e) || F(e)) && F(e.then) && F(e.catch), Mo = Object.prototype.toString, An = e => Mo.call(e),
    Da = e => An(e).slice(8, -1), Ro = e => An(e) === "[object Object]",
    Mi = e => rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Os = $i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Tn = e => {
        const t = Object.create(null);
        return s => t[s] || (t[s] = e(s))
    }, La = /-(\w)/g, ss = Tn(e => e.replace(La, (t, s) => s ? s.toUpperCase() : "")), $a = /\B([A-Z])/g,
    hs = Tn(e => e.replace($a, "-$1").toLowerCase()), Vo = Tn(e => e.charAt(0).toUpperCase() + e.slice(1)),
    jn = Tn(e => e ? `on${Vo(e)}` : ""), Ee = (e, t) => !Object.is(e, t), nn = (e, t) => {
        for (let s = 0; s < e.length; s++) e[s](t)
    }, dn = (e, t, s) => {
        Object.defineProperty(e, t, {configurable: !0, enumerable: !1, value: s})
    }, di = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let mr;
const ko = () => mr || (mr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ri(e) {
    if (k(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
            const n = e[s], i = rt(n) ? Ra(n) : Ri(n);
            if (i) for (const r in i) t[r] = i[r]
        }
        return t
    } else if (rt(e) || st(e)) return e
}

const Ia = /;(?![^(]*\))/g, Pa = /:([^]+)/, Ma = /\/\*[^]*?\*\//g;

function Ra(e) {
    const t = {};
    return e.replace(Ma, "").split(Ia).forEach(s => {
        if (s) {
            const n = s.split(Pa);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }), t
}

function _e(e) {
    let t = "";
    if (rt(e)) t = e; else if (k(e)) for (let s = 0; s < e.length; s++) {
        const n = _e(e[s]);
        n && (t += n + " ")
    } else if (st(e)) for (const s in e) e[s] && (t += s + " ");
    return t.trim()
}

const Va = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ka = $i(Va);

function Ho(e) {
    return !!e || e === ""
}

const Jt = e => rt(e) ? e : e == null ? "" : k(e) || st(e) && (e.toString === Mo || !F(e.toString)) ? JSON.stringify(e, Fo, 2) : String(e),
    Fo = (e, t) => t && t.__v_isRef ? Fo(e, t.value) : Ze(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((s, [n, i], r) => (s[Wn(n, r) + " =>"] = i, s), {})} : Io(t) ? {[`Set(${t.size})`]: [...t.values()].map(s => Wn(s))} : ds(t) ? Wn(t) : st(t) && !k(t) && !Ro(t) ? String(t) : t,
    Wn = (e, t = "") => {
        var s;
        return ds(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
    };
/**
 * @vue/reactivity v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let Mt;

class Ha {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Mt, !t && Mt && (this.index = (Mt.scopes || (Mt.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    run(t) {
        if (this._active) {
            const s = Mt;
            try {
                return Mt = this, t()
            } finally {
                Mt = s
            }
        }
    }

    on() {
        Mt = this
    }

    off() {
        Mt = this.parent
    }

    stop(t) {
        if (this._active) {
            let s, n;
            for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
            for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]();
            if (this.scopes) for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function Fa(e, t = Mt) {
    t && t.active && t.effects.push(e)
}

function ja() {
    return Mt
}

let Ie;

class Vi {
    constructor(t, s, n, i) {
        this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Fa(this, i)
    }

    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1, He();
            for (let t = 0; t < this._depsLength; t++) {
                const s = this.deps[t];
                if (s.computed && (Wa(s.computed), this._dirtyLevel >= 4)) break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), Fe()
        }
        return this._dirtyLevel >= 4
    }

    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }

    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = ge, s = Ie;
        try {
            return ge = !0, Ie = this, this._runnings++, Er(this), this.fn()
        } finally {
            vr(this), this._runnings--, Ie = s, ge = t
        }
    }

    stop() {
        var t;
        this.active && (Er(this), vr(this), (t = this.onStop) == null || t.call(this), this.active = !1)
    }
}

function Wa(e) {
    return e.value
}

function Er(e) {
    e._trackId++, e._depsLength = 0
}

function vr(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) jo(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function jo(e, t) {
    const s = e.get(t);
    s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup())
}

let ge = !0, hi = 0;
const Wo = [];

function He() {
    Wo.push(ge), ge = !1
}

function Fe() {
    const e = Wo.pop();
    ge = e === void 0 ? !0 : e
}

function ki() {
    hi++
}

function Hi() {
    for (hi--; !hi && pi.length;) pi.shift()()
}

function Ko(e, t, s) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const n = e.deps[e._depsLength];
        n !== t ? (n && jo(n, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}

const pi = [];

function Bo(e, t, s) {
    ki();
    for (const n of e.keys()) {
        let i;
        n._dirtyLevel < t && (i ?? (i = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (i ?? (i = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && pi.push(n.scheduler)))
    }
    Hi()
}

const Uo = (e, t) => {
    const s = new Map;
    return s.cleanup = e, s.computed = t, s
}, _i = new WeakMap, Pe = Symbol(""), gi = Symbol("");

function Et(e, t, s) {
    if (ge && Ie) {
        let n = _i.get(e);
        n || _i.set(e, n = new Map);
        let i = n.get(s);
        i || n.set(s, i = Uo(() => n.delete(s))), Ko(Ie, i)
    }
}

function ee(e, t, s, n, i, r) {
    const o = _i.get(e);
    if (!o) return;
    let l = [];
    if (t === "clear") l = [...o.values()]; else if (s === "length" && k(e)) {
        const a = Number(n);
        o.forEach((d, u) => {
            (u === "length" || !ds(u) && u >= a) && l.push(d)
        })
    } else switch (s !== void 0 && l.push(o.get(s)), t) {
        case"add":
            k(e) ? Mi(s) && l.push(o.get("length")) : (l.push(o.get(Pe)), Ze(e) && l.push(o.get(gi)));
            break;
        case"delete":
            k(e) || (l.push(o.get(Pe)), Ze(e) && l.push(o.get(gi)));
            break;
        case"set":
            Ze(e) && l.push(o.get(Pe));
            break
    }
    ki();
    for (const a of l) a && Bo(a, 4);
    Hi()
}

const Ka = $i("__proto__,__v_isRef,__isVue"),
    Yo = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(ds)),
    br = Ba();

function Ba() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...s) {
            const n = G(this);
            for (let r = 0, o = this.length; r < o; r++) Et(n, "get", r + "");
            const i = n[t](...s);
            return i === -1 || i === !1 ? n[t](...s.map(G)) : i
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...s) {
            He(), ki();
            const n = G(this)[t].apply(this, s);
            return Hi(), Fe(), n
        }
    }), e
}

function Ua(e) {
    const t = G(this);
    return Et(t, "has", e), t.hasOwnProperty(e)
}

class zo {
    constructor(t = !1, s = !1) {
        this._isReadonly = t, this._shallow = s
    }

    get(t, s, n) {
        const i = this._isReadonly, r = this._shallow;
        if (s === "__v_isReactive") return !i;
        if (s === "__v_isReadonly") return i;
        if (s === "__v_isShallow") return r;
        if (s === "__v_raw") return n === (i ? r ? ic : Qo : r ? Xo : qo).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
        const o = k(t);
        if (!i) {
            if (o && K(br, s)) return Reflect.get(br, s, n);
            if (s === "hasOwnProperty") return Ua
        }
        const l = Reflect.get(t, s, n);
        return (ds(s) ? Yo.has(s) : Ka(s)) || (i || Et(t, "get", s), r) ? l : vt(l) ? o && Mi(s) ? l : l.value : st(l) ? i ? Jo(l) : Wi(l) : l
    }
}

class Go extends zo {
    constructor(t = !1) {
        super(!1, t)
    }

    set(t, s, n, i) {
        let r = t[s];
        if (!this._shallow) {
            const a = ns(r);
            if (!hn(n) && !ns(n) && (r = G(r), n = G(n)), !k(t) && vt(r) && !vt(n)) return a ? !1 : (r.value = n, !0)
        }
        const o = k(t) && Mi(s) ? Number(s) < t.length : K(t, s), l = Reflect.set(t, s, n, i);
        return t === G(i) && (o ? Ee(n, r) && ee(t, "set", s, n) : ee(t, "add", s, n)), l
    }

    deleteProperty(t, s) {
        const n = K(t, s);
        t[s];
        const i = Reflect.deleteProperty(t, s);
        return i && n && ee(t, "delete", s, void 0), i
    }

    has(t, s) {
        const n = Reflect.has(t, s);
        return (!ds(s) || !Yo.has(s)) && Et(t, "has", s), n
    }

    ownKeys(t) {
        return Et(t, "iterate", k(t) ? "length" : Pe), Reflect.ownKeys(t)
    }
}

class Ya extends zo {
    constructor(t = !1) {
        super(!0, t)
    }

    set(t, s) {
        return !0
    }

    deleteProperty(t, s) {
        return !0
    }
}

const za = new Go, Ga = new Ya, qa = new Go(!0), Fi = e => e, wn = e => Reflect.getPrototypeOf(e);

function Ks(e, t, s = !1, n = !1) {
    e = e.__v_raw;
    const i = G(e), r = G(t);
    s || (Ee(t, r) && Et(i, "get", t), Et(i, "get", r));
    const {has: o} = wn(i), l = n ? Fi : s ? Bi : $s;
    if (o.call(i, t)) return l(e.get(t));
    if (o.call(i, r)) return l(e.get(r));
    e !== i && e.get(t)
}

function Bs(e, t = !1) {
    const s = this.__v_raw, n = G(s), i = G(e);
    return t || (Ee(e, i) && Et(n, "has", e), Et(n, "has", i)), e === i ? s.has(e) : s.has(e) || s.has(i)
}

function Us(e, t = !1) {
    return e = e.__v_raw, !t && Et(G(e), "iterate", Pe), Reflect.get(e, "size", e)
}

function yr(e) {
    e = G(e);
    const t = G(this);
    return wn(t).has.call(t, e) || (t.add(e), ee(t, "add", e, e)), this
}

function Ar(e, t) {
    t = G(t);
    const s = G(this), {has: n, get: i} = wn(s);
    let r = n.call(s, e);
    r || (e = G(e), r = n.call(s, e));
    const o = i.call(s, e);
    return s.set(e, t), r ? Ee(t, o) && ee(s, "set", e, t) : ee(s, "add", e, t), this
}

function Tr(e) {
    const t = G(this), {has: s, get: n} = wn(t);
    let i = s.call(t, e);
    i || (e = G(e), i = s.call(t, e)), n && n.call(t, e);
    const r = t.delete(e);
    return i && ee(t, "delete", e, void 0), r
}

function wr() {
    const e = G(this), t = e.size !== 0, s = e.clear();
    return t && ee(e, "clear", void 0, void 0), s
}

function Ys(e, t) {
    return function (n, i) {
        const r = this, o = r.__v_raw, l = G(o), a = t ? Fi : e ? Bi : $s;
        return !e && Et(l, "iterate", Pe), o.forEach((d, u) => n.call(i, a(d), a(u), r))
    }
}

function zs(e, t, s) {
    return function (...n) {
        const i = this.__v_raw, r = G(i), o = Ze(r), l = e === "entries" || e === Symbol.iterator && o,
            a = e === "keys" && o, d = i[e](...n), u = s ? Fi : t ? Bi : $s;
        return !t && Et(r, "iterate", a ? gi : Pe), {
            next() {
                const {value: p, done: m} = d.next();
                return m ? {value: p, done: m} : {value: l ? [u(p[0]), u(p[1])] : u(p), done: m}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function ce(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function Xa() {
    const e = {
        get(r) {
            return Ks(this, r)
        }, get size() {
            return Us(this)
        }, has: Bs, add: yr, set: Ar, delete: Tr, clear: wr, forEach: Ys(!1, !1)
    }, t = {
        get(r) {
            return Ks(this, r, !1, !0)
        }, get size() {
            return Us(this)
        }, has: Bs, add: yr, set: Ar, delete: Tr, clear: wr, forEach: Ys(!1, !0)
    }, s = {
        get(r) {
            return Ks(this, r, !0)
        }, get size() {
            return Us(this, !0)
        }, has(r) {
            return Bs.call(this, r, !0)
        }, add: ce("add"), set: ce("set"), delete: ce("delete"), clear: ce("clear"), forEach: Ys(!0, !1)
    }, n = {
        get(r) {
            return Ks(this, r, !0, !0)
        }, get size() {
            return Us(this, !0)
        }, has(r) {
            return Bs.call(this, r, !0)
        }, add: ce("add"), set: ce("set"), delete: ce("delete"), clear: ce("clear"), forEach: Ys(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        e[r] = zs(r, !1, !1), s[r] = zs(r, !0, !1), t[r] = zs(r, !1, !0), n[r] = zs(r, !0, !0)
    }), [e, s, t, n]
}

const [Qa, Ja, Za, tc] = Xa();

function ji(e, t) {
    const s = t ? e ? tc : Za : e ? Ja : Qa;
    return (n, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(K(s, i) && i in n ? s : n, i, r)
}

const ec = {get: ji(!1, !1)}, sc = {get: ji(!1, !0)}, nc = {get: ji(!0, !1)}, qo = new WeakMap, Xo = new WeakMap,
    Qo = new WeakMap, ic = new WeakMap;

function rc(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function oc(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : rc(Da(e))
}

function Wi(e) {
    return ns(e) ? e : Ki(e, !1, za, ec, qo)
}

function lc(e) {
    return Ki(e, !1, qa, sc, Xo)
}

function Jo(e) {
    return Ki(e, !0, Ga, nc, Qo)
}

function Ki(e, t, s, n, i) {
    if (!st(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const r = i.get(e);
    if (r) return r;
    const o = oc(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? n : s);
    return i.set(e, l), l
}

function ts(e) {
    return ns(e) ? ts(e.__v_raw) : !!(e && e.__v_isReactive)
}

function ns(e) {
    return !!(e && e.__v_isReadonly)
}

function hn(e) {
    return !!(e && e.__v_isShallow)
}

function Zo(e) {
    return ts(e) || ns(e)
}

function G(e) {
    const t = e && e.__v_raw;
    return t ? G(t) : e
}

function tl(e) {
    return Object.isExtensible(e) && dn(e, "__v_skip", !0), e
}

const $s = e => st(e) ? Wi(e) : e, Bi = e => st(e) ? Jo(e) : e;

class el {
    constructor(t, s, n, i) {
        this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Vi(() => t(this._value), () => rn(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = n
    }

    get value() {
        const t = G(this);
        return (!t._cacheable || t.effect.dirty) && Ee(t._value, t._value = t.effect.run()) && rn(t, 4), sl(t), t.effect._dirtyLevel >= 2 && rn(t, 2), t._value
    }

    set value(t) {
        this._setter(t)
    }

    get _dirty() {
        return this.effect.dirty
    }

    set _dirty(t) {
        this.effect.dirty = t
    }
}

function ac(e, t, s = !1) {
    let n, i;
    const r = F(e);
    return r ? (n = e, i = Ot) : (n = e.get, i = e.set), new el(n, i, r || !i, s)
}

function sl(e) {
    var t;
    ge && Ie && (e = G(e), Ko(Ie, (t = e.dep) != null ? t : e.dep = Uo(() => e.dep = void 0, e instanceof el ? e : void 0)))
}

function rn(e, t = 4, s) {
    e = G(e);
    const n = e.dep;
    n && Bo(n, t)
}

function vt(e) {
    return !!(e && e.__v_isRef === !0)
}

function yt(e) {
    return cc(e, !1)
}

function cc(e, t) {
    return vt(e) ? e : new uc(e, t)
}

class uc {
    constructor(t, s) {
        this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : G(t), this._value = s ? t : $s(t)
    }

    get value() {
        return sl(this), this._value
    }

    set value(t) {
        const s = this.__v_isShallow || hn(t) || ns(t);
        t = s ? t : G(t), Ee(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : $s(t), rn(this, 4))
    }
}

function fc(e) {
    return vt(e) ? e.value : e
}

const dc = {
    get: (e, t, s) => fc(Reflect.get(e, t, s)), set: (e, t, s, n) => {
        const i = e[t];
        return vt(i) && !vt(s) ? (i.value = s, !0) : Reflect.set(e, t, s, n)
    }
};

function nl(e) {
    return ts(e) ? e : new Proxy(e, dc)
}

/**
 * @vue/runtime-core v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function me(e, t, s, n) {
    let i;
    try {
        i = n ? e(...n) : e()
    } catch (r) {
        Cn(r, t, s)
    }
    return i
}

function Vt(e, t, s, n) {
    if (F(e)) {
        const r = me(e, t, s, n);
        return r && Po(r) && r.catch(o => {
            Cn(o, t, s)
        }), r
    }
    const i = [];
    for (let r = 0; r < e.length; r++) i.push(Vt(e[r], t, s, n));
    return i
}

function Cn(e, t, s, n = !0) {
    const i = t ? t.vnode : null;
    if (t) {
        let r = t.parent;
        const o = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${s}`;
        for (; r;) {
            const d = r.ec;
            if (d) {
                for (let u = 0; u < d.length; u++) if (d[u](e, o, l) === !1) return
            }
            r = r.parent
        }
        const a = t.appContext.config.errorHandler;
        if (a) {
            me(a, null, 10, [e, o, l]);
            return
        }
    }
    hc(e, s, i, n)
}

function hc(e, t, s, n = !0) {
    console.error(e)
}

let Is = !1, mi = !1;
const at = [];
let Bt = 0;
const es = [];
let de = null, xe = 0;
const il = Promise.resolve();
let Ui = null;

function pc(e) {
    const t = Ui || il;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function _c(e) {
    let t = Bt + 1, s = at.length;
    for (; t < s;) {
        const n = t + s >>> 1, i = at[n], r = Ps(i);
        r < e || r === e && i.pre ? t = n + 1 : s = n
    }
    return t
}

function Yi(e) {
    (!at.length || !at.includes(e, Is && e.allowRecurse ? Bt + 1 : Bt)) && (e.id == null ? at.push(e) : at.splice(_c(e.id), 0, e), rl())
}

function rl() {
    !Is && !mi && (mi = !0, Ui = il.then(ll))
}

function gc(e) {
    const t = at.indexOf(e);
    t > Bt && at.splice(t, 1)
}

function mc(e) {
    k(e) ? es.push(...e) : (!de || !de.includes(e, e.allowRecurse ? xe + 1 : xe)) && es.push(e), rl()
}

function Cr(e, t, s = Is ? Bt + 1 : 0) {
    for (; s < at.length; s++) {
        const n = at[s];
        if (n && n.pre) {
            if (e && n.id !== e.uid) continue;
            at.splice(s, 1), s--, n()
        }
    }
}

function ol(e) {
    if (es.length) {
        const t = [...new Set(es)].sort((s, n) => Ps(s) - Ps(n));
        if (es.length = 0, de) {
            de.push(...t);
            return
        }
        for (de = t, xe = 0; xe < de.length; xe++) de[xe]();
        de = null, xe = 0
    }
}

const Ps = e => e.id == null ? 1 / 0 : e.id, Ec = (e, t) => {
    const s = Ps(e) - Ps(t);
    if (s === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1
    }
    return s
};

function ll(e) {
    mi = !1, Is = !0, at.sort(Ec);
    try {
        for (Bt = 0; Bt < at.length; Bt++) {
            const t = at[Bt];
            t && t.active !== !1 && me(t, null, 14)
        }
    } finally {
        Bt = 0, at.length = 0, ol(), Is = !1, Ui = null, (at.length || es.length) && ll()
    }
}

function vc(e, t, ...s) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || J;
    let i = s;
    const r = t.startsWith("update:"), o = r && t.slice(7);
    if (o && o in n) {
        const u = `${o === "modelValue" ? "model" : o}Modifiers`, {number: p, trim: m} = n[u] || J;
        m && (i = s.map(y => rt(y) ? y.trim() : y)), p && (i = s.map(di))
    }
    let l, a = n[l = jn(t)] || n[l = jn(ss(t))];
    !a && r && (a = n[l = jn(hs(t))]), a && Vt(a, e, 6, i);
    const d = n[l + "Once"];
    if (d) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[l]) return;
        e.emitted[l] = !0, Vt(d, e, 6, i)
    }
}

function al(e, t, s = !1) {
    const n = t.emitsCache, i = n.get(e);
    if (i !== void 0) return i;
    const r = e.emits;
    let o = {}, l = !1;
    if (!F(e)) {
        const a = d => {
            const u = al(d, t, !0);
            u && (l = !0, ct(o, u))
        };
        !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    return !r && !l ? (st(e) && n.set(e, null), null) : (k(r) ? r.forEach(a => o[a] = null) : ct(o, r), st(e) && n.set(e, o), o)
}

function On(e, t) {
    return !e || !yn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, hs(t)) || K(e, t))
}

let At = null, Sn = null;

function pn(e) {
    const t = At;
    return At = e, Sn = e && e.type.__scopeId || null, t
}

function bc(e) {
    Sn = e
}

function yc() {
    Sn = null
}

function Ac(e, t = At, s) {
    if (!t || e._n) return e;
    const n = (...i) => {
        n._d && Mr(-1);
        const r = pn(t);
        let o;
        try {
            o = e(...i)
        } finally {
            pn(r), n._d && Mr(1)
        }
        return o
    };
    return n._n = !0, n._c = !0, n._d = !0, n
}

function Kn(e) {
    const {
        type: t,
        vnode: s,
        proxy: n,
        withProxy: i,
        props: r,
        propsOptions: [o],
        slots: l,
        attrs: a,
        emit: d,
        render: u,
        renderCache: p,
        data: m,
        setupState: y,
        ctx: P,
        inheritAttrs: C
    } = e;
    let S, x;
    const B = pn(e);
    try {
        if (s.shapeFlag & 4) {
            const L = i || n, H = L;
            S = Kt(u.call(H, L, p, r, y, m, P)), x = a
        } else {
            const L = t;
            S = Kt(L.length > 1 ? L(r, {attrs: a, slots: l, emit: d}) : L(r, null)), x = t.props ? a : Tc(a)
        }
    } catch (L) {
        xs.length = 0, Cn(L, e, 1), S = Ut(Re)
    }
    let M = S;
    if (x && C !== !1) {
        const L = Object.keys(x), {shapeFlag: H} = M;
        L.length && H & 7 && (o && L.some(Ii) && (x = wc(x, o)), M = is(M, x))
    }
    return s.dirs && (M = is(M), M.dirs = M.dirs ? M.dirs.concat(s.dirs) : s.dirs), s.transition && (M.transition = s.transition), S = M, pn(B), S
}

const Tc = e => {
    let t;
    for (const s in e) (s === "class" || s === "style" || yn(s)) && ((t || (t = {}))[s] = e[s]);
    return t
}, wc = (e, t) => {
    const s = {};
    for (const n in e) (!Ii(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s
};

function Cc(e, t, s) {
    const {props: n, children: i, component: r} = e, {props: o, children: l, patchFlag: a} = t, d = r.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (s && a >= 0) {
        if (a & 1024) return !0;
        if (a & 16) return n ? Or(n, o, d) : !!o;
        if (a & 8) {
            const u = t.dynamicProps;
            for (let p = 0; p < u.length; p++) {
                const m = u[p];
                if (o[m] !== n[m] && !On(d, m)) return !0
            }
        }
    } else return (i || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? Or(n, o, d) : !0 : !!o;
    return !1
}

function Or(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let i = 0; i < n.length; i++) {
        const r = n[i];
        if (t[r] !== e[r] && !On(s, r)) return !0
    }
    return !1
}

function Oc({vnode: e, parent: t}, s) {
    for (; t;) {
        const n = t.subTree;
        if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e) (e = t.vnode).el = s, t = t.parent; else break
    }
}

const Sc = Symbol.for("v-ndc"), Nc = e => e.__isSuspense;

function xc(e, t) {
    t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : mc(e)
}

const Dc = Symbol.for("v-scx"), Lc = () => ln(Dc), Gs = {};

function Bn(e, t, s) {
    return cl(e, t, s)
}

function cl(e, t, {immediate: s, deep: n, flush: i, once: r, onTrack: o, onTrigger: l} = J) {
    if (t && r) {
        const N = t;
        t = (...U) => {
            N(...U), H()
        }
    }
    const a = ht, d = N => n === !0 ? N : De(N, n === !1 ? 1 : void 0);
    let u, p = !1, m = !1;
    if (vt(e) ? (u = () => e.value, p = hn(e)) : ts(e) ? (u = () => d(e), p = !0) : k(e) ? (m = !0, p = e.some(N => ts(N) || hn(N)), u = () => e.map(N => {
        if (vt(N)) return N.value;
        if (ts(N)) return d(N);
        if (F(N)) return me(N, a, 2)
    })) : F(e) ? t ? u = () => me(e, a, 2) : u = () => (y && y(), Vt(e, a, 3, [P])) : u = Ot, t && n) {
        const N = u;
        u = () => De(N())
    }
    let y, P = N => {
        y = M.onStop = () => {
            me(N, a, 4), y = M.onStop = void 0
        }
    }, C;
    if (Ln) if (P = Ot, t ? s && Vt(t, a, 3, [u(), m ? [] : void 0, P]) : u(), i === "sync") {
        const N = Lc();
        C = N.__watcherHandles || (N.__watcherHandles = [])
    } else return Ot;
    let S = m ? new Array(e.length).fill(Gs) : Gs;
    const x = () => {
        if (!(!M.active || !M.dirty)) if (t) {
            const N = M.run();
            (n || p || (m ? N.some((U, X) => Ee(U, S[X])) : Ee(N, S))) && (y && y(), Vt(t, a, 3, [N, S === Gs ? void 0 : m && S[0] === Gs ? [] : S, P]), S = N)
        } else M.run()
    };
    x.allowRecurse = !!t;
    let B;
    i === "sync" ? B = x : i === "post" ? B = () => gt(x, a && a.suspense) : (x.pre = !0, a && (x.id = a.uid), B = () => Yi(x));
    const M = new Vi(u, Ot, B), L = ja(), H = () => {
        M.stop(), L && Pi(L.effects, M)
    };
    return t ? s ? x() : S = M.run() : i === "post" ? gt(M.run.bind(M), a && a.suspense) : M.run(), C && C.push(H), H
}

function $c(e, t, s) {
    const n = this.proxy, i = rt(e) ? e.includes(".") ? ul(n, e) : () => n[e] : e.bind(n, n);
    let r;
    F(t) ? r = t : (r = t.handler, s = t);
    const o = Vs(this), l = cl(i, r.bind(n), s);
    return o(), l
}

function ul(e, t) {
    const s = t.split(".");
    return () => {
        let n = e;
        for (let i = 0; i < s.length && n; i++) n = n[s[i]];
        return n
    }
}

function De(e, t, s = 0, n) {
    if (!st(e) || e.__v_skip) return e;
    if (t && t > 0) {
        if (s >= t) return e;
        s++
    }
    if (n = n || new Set, n.has(e)) return e;
    if (n.add(e), vt(e)) De(e.value, t, s, n); else if (k(e)) for (let i = 0; i < e.length; i++) De(e[i], t, s, n); else if (Io(e) || Ze(e)) e.forEach(i => {
        De(i, t, s, n)
    }); else if (Ro(e)) for (const i in e) De(e[i], t, s, n);
    return e
}

function bs(e, t) {
    if (At === null) return e;
    const s = $n(At) || At.proxy, n = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let [r, o, l, a = J] = t[i];
        r && (F(r) && (r = {mounted: r, updated: r}), r.deep && De(o), n.push({
            dir: r,
            instance: s,
            value: o,
            oldValue: void 0,
            arg: l,
            modifiers: a
        }))
    }
    return e
}

function Se(e, t, s, n) {
    const i = e.dirs, r = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        const l = i[o];
        r && (l.oldValue = r[o].value);
        let a = l.dir[n];
        a && (He(), Vt(a, s, 8, [e.el, l, e, t]), Fe())
    }
}

const on = e => !!e.type.__asyncLoader, fl = e => e.type.__isKeepAlive;

function Ic(e, t) {
    dl(e, "a", t)
}

function Pc(e, t) {
    dl(e, "da", t)
}

function dl(e, t, s = ht) {
    const n = e.__wdc || (e.__wdc = () => {
        let i = s;
        for (; i;) {
            if (i.isDeactivated) return;
            i = i.parent
        }
        return e()
    });
    if (Nn(t, n, s), s) {
        let i = s.parent;
        for (; i && i.parent;) fl(i.parent.vnode) && Mc(n, t, s, i), i = i.parent
    }
}

function Mc(e, t, s, n) {
    const i = Nn(t, e, n, !0);
    hl(() => {
        Pi(n[t], i)
    }, s)
}

function Nn(e, t, s = ht, n = !1) {
    if (s) {
        const i = s[e] || (s[e] = []), r = t.__weh || (t.__weh = (...o) => {
            if (s.isUnmounted) return;
            He();
            const l = Vs(s), a = Vt(t, s, e, o);
            return l(), Fe(), a
        });
        return n ? i.unshift(r) : i.push(r), r
    }
}

const re = e => (t, s = ht) => (!Ln || e === "sp") && Nn(e, (...n) => t(...n), s), Rc = re("bm"), Vc = re("m"),
    kc = re("bu"), Hc = re("u"), Fc = re("bum"), hl = re("um"), jc = re("sp"), Wc = re("rtg"), Kc = re("rtc");

function Bc(e, t = ht) {
    Nn("ec", e, t)
}

const Ei = e => e ? Cl(e) ? $n(e) || e.proxy : Ei(e.parent) : null, Ss = ct(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ei(e.parent),
    $root: e => Ei(e.root),
    $emit: e => e.emit,
    $options: e => zi(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0, Yi(e.update)
    }),
    $nextTick: e => e.n || (e.n = pc.bind(e.proxy)),
    $watch: e => $c.bind(e)
}), Un = (e, t) => e !== J && !e.__isScriptSetup && K(e, t), Uc = {
    get({_: e}, t) {
        const {ctx: s, setupState: n, data: i, props: r, accessCache: o, type: l, appContext: a} = e;
        let d;
        if (t[0] !== "$") {
            const y = o[t];
            if (y !== void 0) switch (y) {
                case 1:
                    return n[t];
                case 2:
                    return i[t];
                case 4:
                    return s[t];
                case 3:
                    return r[t]
            } else {
                if (Un(n, t)) return o[t] = 1, n[t];
                if (i !== J && K(i, t)) return o[t] = 2, i[t];
                if ((d = e.propsOptions[0]) && K(d, t)) return o[t] = 3, r[t];
                if (s !== J && K(s, t)) return o[t] = 4, s[t];
                vi && (o[t] = 0)
            }
        }
        const u = Ss[t];
        let p, m;
        if (u) return t === "$attrs" && Et(e, "get", t), u(e);
        if ((p = l.__cssModules) && (p = p[t])) return p;
        if (s !== J && K(s, t)) return o[t] = 4, s[t];
        if (m = a.config.globalProperties, K(m, t)) return m[t]
    }, set({_: e}, t, s) {
        const {data: n, setupState: i, ctx: r} = e;
        return Un(i, t) ? (i[t] = s, !0) : n !== J && K(n, t) ? (n[t] = s, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = s, !0)
    }, has({_: {data: e, setupState: t, accessCache: s, ctx: n, appContext: i, propsOptions: r}}, o) {
        let l;
        return !!s[o] || e !== J && K(e, o) || Un(t, o) || (l = r[0]) && K(l, o) || K(n, o) || K(Ss, o) || K(i.config.globalProperties, o)
    }, defineProperty(e, t, s) {
        return s.get != null ? e._.accessCache[t] = 0 : K(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s)
    }
};

function Sr(e) {
    return k(e) ? e.reduce((t, s) => (t[s] = null, t), {}) : e
}

let vi = !0;

function Yc(e) {
    const t = zi(e), s = e.proxy, n = e.ctx;
    vi = !1, t.beforeCreate && Nr(t.beforeCreate, e, "bc");
    const {
        data: i,
        computed: r,
        methods: o,
        watch: l,
        provide: a,
        inject: d,
        created: u,
        beforeMount: p,
        mounted: m,
        beforeUpdate: y,
        updated: P,
        activated: C,
        deactivated: S,
        beforeDestroy: x,
        beforeUnmount: B,
        destroyed: M,
        unmounted: L,
        render: H,
        renderTracked: N,
        renderTriggered: U,
        errorCaptured: X,
        serverPrefetch: tt,
        expose: Q,
        inheritAttrs: et,
        components: ot,
        directives: nt,
        filters: Lt
    } = t;
    if (d && zc(d, n, null), o) for (const W in o) {
        const Y = o[W];
        F(Y) && (n[W] = Y.bind(s))
    }
    if (i) {
        const W = i.call(s, s);
        st(W) && (e.data = Wi(W))
    }
    if (vi = !0, r) for (const W in r) {
        const Y = r[W], ut = F(Y) ? Y.bind(s, s) : F(Y.get) ? Y.get.bind(s, s) : Ot,
            Xt = !F(Y) && F(Y.set) ? Y.set.bind(s) : Ot, $t = Cu({get: ut, set: Xt});
        Object.defineProperty(n, W, {enumerable: !0, configurable: !0, get: () => $t.value, set: lt => $t.value = lt})
    }
    if (l) for (const W in l) pl(l[W], n, s, W);
    if (a) {
        const W = F(a) ? a.call(s) : a;
        Reflect.ownKeys(W).forEach(Y => {
            Zc(Y, W[Y])
        })
    }
    u && Nr(u, e, "c");

    function q(W, Y) {
        k(Y) ? Y.forEach(ut => W(ut.bind(s))) : Y && W(Y.bind(s))
    }

    if (q(Rc, p), q(Vc, m), q(kc, y), q(Hc, P), q(Ic, C), q(Pc, S), q(Bc, X), q(Kc, N), q(Wc, U), q(Fc, B), q(hl, L), q(jc, tt), k(Q)) if (Q.length) {
        const W = e.exposed || (e.exposed = {});
        Q.forEach(Y => {
            Object.defineProperty(W, Y, {get: () => s[Y], set: ut => s[Y] = ut})
        })
    } else e.exposed || (e.exposed = {});
    H && e.render === Ot && (e.render = H), et != null && (e.inheritAttrs = et), ot && (e.components = ot), nt && (e.directives = nt)
}

function zc(e, t, s = Ot) {
    k(e) && (e = bi(e));
    for (const n in e) {
        const i = e[n];
        let r;
        st(i) ? "default" in i ? r = ln(i.from || n, i.default, !0) : r = ln(i.from || n) : r = ln(i), vt(r) ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: o => r.value = o
        }) : t[n] = r
    }
}

function Nr(e, t, s) {
    Vt(k(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}

function pl(e, t, s, n) {
    const i = n.includes(".") ? ul(s, n) : () => s[n];
    if (rt(e)) {
        const r = t[e];
        F(r) && Bn(i, r)
    } else if (F(e)) Bn(i, e.bind(s)); else if (st(e)) if (k(e)) e.forEach(r => pl(r, t, s, n)); else {
        const r = F(e.handler) ? e.handler.bind(s) : t[e.handler];
        F(r) && Bn(i, r, e)
    }
}

function zi(e) {
    const t = e.type, {mixins: s, extends: n} = t, {
        mixins: i,
        optionsCache: r,
        config: {optionMergeStrategies: o}
    } = e.appContext, l = r.get(t);
    let a;
    return l ? a = l : !i.length && !s && !n ? a = t : (a = {}, i.length && i.forEach(d => _n(a, d, o, !0)), _n(a, t, o)), st(t) && r.set(t, a), a
}

function _n(e, t, s, n = !1) {
    const {mixins: i, extends: r} = t;
    r && _n(e, r, s, !0), i && i.forEach(o => _n(e, o, s, !0));
    for (const o in t) if (!(n && o === "expose")) {
        const l = Gc[o] || s && s[o];
        e[o] = l ? l(e[o], t[o]) : t[o]
    }
    return e
}

const Gc = {
    data: xr,
    props: Dr,
    emits: Dr,
    methods: Cs,
    computed: Cs,
    beforeCreate: dt,
    created: dt,
    beforeMount: dt,
    mounted: dt,
    beforeUpdate: dt,
    updated: dt,
    beforeDestroy: dt,
    beforeUnmount: dt,
    destroyed: dt,
    unmounted: dt,
    activated: dt,
    deactivated: dt,
    errorCaptured: dt,
    serverPrefetch: dt,
    components: Cs,
    directives: Cs,
    watch: Xc,
    provide: xr,
    inject: qc
};

function xr(e, t) {
    return t ? e ? function () {
        return ct(F(e) ? e.call(this, this) : e, F(t) ? t.call(this, this) : t)
    } : t : e
}

function qc(e, t) {
    return Cs(bi(e), bi(t))
}

function bi(e) {
    if (k(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
        return t
    }
    return e
}

function dt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Cs(e, t) {
    return e ? ct(Object.create(null), e, t) : t
}

function Dr(e, t) {
    return e ? k(e) && k(t) ? [...new Set([...e, ...t])] : ct(Object.create(null), Sr(e), Sr(t ?? {})) : t
}

function Xc(e, t) {
    if (!e) return t;
    if (!t) return e;
    const s = ct(Object.create(null), e);
    for (const n in t) s[n] = dt(e[n], t[n]);
    return s
}

function _l() {
    return {
        app: null,
        config: {
            isNativeTag: Na,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let Qc = 0;

function Jc(e, t) {
    return function (n, i = null) {
        F(n) || (n = ct({}, n)), i != null && !st(i) && (i = null);
        const r = _l(), o = new WeakSet;
        let l = !1;
        const a = r.app = {
            _uid: Qc++,
            _component: n,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: Ou,
            get config() {
                return r.config
            },
            set config(d) {
            },
            use(d, ...u) {
                return o.has(d) || (d && F(d.install) ? (o.add(d), d.install(a, ...u)) : F(d) && (o.add(d), d(a, ...u))), a
            },
            mixin(d) {
                return r.mixins.includes(d) || r.mixins.push(d), a
            },
            component(d, u) {
                return u ? (r.components[d] = u, a) : r.components[d]
            },
            directive(d, u) {
                return u ? (r.directives[d] = u, a) : r.directives[d]
            },
            mount(d, u, p) {
                if (!l) {
                    const m = Ut(n, i);
                    return m.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), u && t ? t(m, d) : e(m, d, p), l = !0, a._container = d, d.__vue_app__ = a, $n(m.component) || m.component.proxy
                }
            },
            unmount() {
                l && (e(null, a._container), delete a._container.__vue_app__)
            },
            provide(d, u) {
                return r.provides[d] = u, a
            },
            runWithContext(d) {
                const u = Ns;
                Ns = a;
                try {
                    return d()
                } finally {
                    Ns = u
                }
            }
        };
        return a
    }
}

let Ns = null;

function Zc(e, t) {
    if (ht) {
        let s = ht.provides;
        const n = ht.parent && ht.parent.provides;
        n === s && (s = ht.provides = Object.create(n)), s[e] = t
    }
}

function ln(e, t, s = !1) {
    const n = ht || At;
    if (n || Ns) {
        const i = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : Ns._context.provides;
        if (i && e in i) return i[e];
        if (arguments.length > 1) return s && F(t) ? t.call(n && n.proxy) : t
    }
}

function tu(e, t, s, n = !1) {
    const i = {}, r = {};
    dn(r, Dn, 1), e.propsDefaults = Object.create(null), gl(e, t, i, r);
    for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
    s ? e.props = n ? i : lc(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r
}

function eu(e, t, s, n) {
    const {props: i, attrs: r, vnode: {patchFlag: o}} = e, l = G(i), [a] = e.propsOptions;
    let d = !1;
    if ((n || o > 0) && !(o & 16)) {
        if (o & 8) {
            const u = e.vnode.dynamicProps;
            for (let p = 0; p < u.length; p++) {
                let m = u[p];
                if (On(e.emitsOptions, m)) continue;
                const y = t[m];
                if (a) if (K(r, m)) y !== r[m] && (r[m] = y, d = !0); else {
                    const P = ss(m);
                    i[P] = yi(a, l, P, y, e, !1)
                } else y !== r[m] && (r[m] = y, d = !0)
            }
        }
    } else {
        gl(e, t, i, r) && (d = !0);
        let u;
        for (const p in l) (!t || !K(t, p) && ((u = hs(p)) === p || !K(t, u))) && (a ? s && (s[p] !== void 0 || s[u] !== void 0) && (i[p] = yi(a, l, p, void 0, e, !0)) : delete i[p]);
        if (r !== l) for (const p in r) (!t || !K(t, p)) && (delete r[p], d = !0)
    }
    d && ee(e, "set", "$attrs")
}

function gl(e, t, s, n) {
    const [i, r] = e.propsOptions;
    let o = !1, l;
    if (t) for (let a in t) {
        if (Os(a)) continue;
        const d = t[a];
        let u;
        i && K(i, u = ss(a)) ? !r || !r.includes(u) ? s[u] = d : (l || (l = {}))[u] = d : On(e.emitsOptions, a) || (!(a in n) || d !== n[a]) && (n[a] = d, o = !0)
    }
    if (r) {
        const a = G(s), d = l || J;
        for (let u = 0; u < r.length; u++) {
            const p = r[u];
            s[p] = yi(i, a, p, d[p], e, !K(d, p))
        }
    }
    return o
}

function yi(e, t, s, n, i, r) {
    const o = e[s];
    if (o != null) {
        const l = K(o, "default");
        if (l && n === void 0) {
            const a = o.default;
            if (o.type !== Function && !o.skipFactory && F(a)) {
                const {propsDefaults: d} = i;
                if (s in d) n = d[s]; else {
                    const u = Vs(i);
                    n = d[s] = a.call(null, t), u()
                }
            } else n = a
        }
        o[0] && (r && !l ? n = !1 : o[1] && (n === "" || n === hs(s)) && (n = !0))
    }
    return n
}

function ml(e, t, s = !1) {
    const n = t.propsCache, i = n.get(e);
    if (i) return i;
    const r = e.props, o = {}, l = [];
    let a = !1;
    if (!F(e)) {
        const u = p => {
            a = !0;
            const [m, y] = ml(p, t, !0);
            ct(o, m), y && l.push(...y)
        };
        !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!r && !a) return st(e) && n.set(e, Je), Je;
    if (k(r)) for (let u = 0; u < r.length; u++) {
        const p = ss(r[u]);
        Lr(p) && (o[p] = J)
    } else if (r) for (const u in r) {
        const p = ss(u);
        if (Lr(p)) {
            const m = r[u], y = o[p] = k(m) || F(m) ? {type: m} : ct({}, m);
            if (y) {
                const P = Pr(Boolean, y.type), C = Pr(String, y.type);
                y[0] = P > -1, y[1] = C < 0 || P < C, (P > -1 || K(y, "default")) && l.push(p)
            }
        }
    }
    const d = [o, l];
    return st(e) && n.set(e, d), d
}

function Lr(e) {
    return e[0] !== "$" && !Os(e)
}

function $r(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function Ir(e, t) {
    return $r(e) === $r(t)
}

function Pr(e, t) {
    return k(t) ? t.findIndex(s => Ir(s, e)) : F(t) && Ir(t, e) ? 0 : -1
}

const El = e => e[0] === "_" || e === "$stable", Gi = e => k(e) ? e.map(Kt) : [Kt(e)], su = (e, t, s) => {
    if (t._n) return t;
    const n = Ac((...i) => Gi(t(...i)), s);
    return n._c = !1, n
}, vl = (e, t, s) => {
    const n = e._ctx;
    for (const i in e) {
        if (El(i)) continue;
        const r = e[i];
        if (F(r)) t[i] = su(i, r, n); else if (r != null) {
            const o = Gi(r);
            t[i] = () => o
        }
    }
}, bl = (e, t) => {
    const s = Gi(t);
    e.slots.default = () => s
}, nu = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const s = t._;
        s ? (e.slots = G(t), dn(t, "_", s)) : vl(t, e.slots = {})
    } else e.slots = {}, t && bl(e, t);
    dn(e.slots, Dn, 1)
}, iu = (e, t, s) => {
    const {vnode: n, slots: i} = e;
    let r = !0, o = J;
    if (n.shapeFlag & 32) {
        const l = t._;
        l ? s && l === 1 ? r = !1 : (ct(i, t), !s && l === 1 && delete i._) : (r = !t.$stable, vl(t, i)), o = t
    } else t && (bl(e, t), o = {default: 1});
    if (r) for (const l in i) !El(l) && o[l] == null && delete i[l]
};

function Ai(e, t, s, n, i = !1) {
    if (k(e)) {
        e.forEach((m, y) => Ai(m, t && (k(t) ? t[y] : t), s, n, i));
        return
    }
    if (on(n) && !i) return;
    const r = n.shapeFlag & 4 ? $n(n.component) || n.component.proxy : n.el, o = i ? null : r, {i: l, r: a} = e,
        d = t && t.r, u = l.refs === J ? l.refs = {} : l.refs, p = l.setupState;
    if (d != null && d !== a && (rt(d) ? (u[d] = null, K(p, d) && (p[d] = null)) : vt(d) && (d.value = null)), F(a)) me(a, l, 12, [o, u]); else {
        const m = rt(a), y = vt(a);
        if (m || y) {
            const P = () => {
                if (e.f) {
                    const C = m ? K(p, a) ? p[a] : u[a] : a.value;
                    i ? k(C) && Pi(C, r) : k(C) ? C.includes(r) || C.push(r) : m ? (u[a] = [r], K(p, a) && (p[a] = u[a])) : (a.value = [r], e.k && (u[e.k] = a.value))
                } else m ? (u[a] = o, K(p, a) && (p[a] = o)) : y && (a.value = o, e.k && (u[e.k] = o))
            };
            o ? (P.id = -1, gt(P, s)) : P()
        }
    }
}

const gt = xc;

function ru(e) {
    return ou(e)
}

function ou(e, t) {
    const s = ko();
    s.__VUE__ = !0;
    const {
            insert: n,
            remove: i,
            patchProp: r,
            createElement: o,
            createText: l,
            createComment: a,
            setText: d,
            setElementText: u,
            parentNode: p,
            nextSibling: m,
            setScopeId: y = Ot,
            insertStaticContent: P
        } = e, C = (c, f, h, _ = null, g = null, A = null, w = void 0, b = null, T = !!f.dynamicChildren) => {
            if (c === f) return;
            c && !ys(c, f) && (_ = Qt(c), lt(c, g, A, !0), c = null), f.patchFlag === -2 && (T = !1, f.dynamicChildren = null);
            const {type: v, ref: O, shapeFlag: $} = f;
            switch (v) {
                case xn:
                    S(c, f, h, _);
                    break;
                case Re:
                    x(c, f, h, _);
                    break;
                case zn:
                    c == null && B(f, h, _, w);
                    break;
                case te:
                    ot(c, f, h, _, g, A, w, b, T);
                    break;
                default:
                    $ & 1 ? H(c, f, h, _, g, A, w, b, T) : $ & 6 ? nt(c, f, h, _, g, A, w, b, T) : ($ & 64 || $ & 128) && v.process(c, f, h, _, g, A, w, b, T, ae)
            }
            O != null && g && Ai(O, c && c.ref, A, f || c, !f)
        }, S = (c, f, h, _) => {
            if (c == null) n(f.el = l(f.children), h, _); else {
                const g = f.el = c.el;
                f.children !== c.children && d(g, f.children)
            }
        }, x = (c, f, h, _) => {
            c == null ? n(f.el = a(f.children || ""), h, _) : f.el = c.el
        }, B = (c, f, h, _) => {
            [c.el, c.anchor] = P(c.children, f, h, _, c.el, c.anchor)
        }, M = ({el: c, anchor: f}, h, _) => {
            let g;
            for (; c && c !== f;) g = m(c), n(c, h, _), c = g;
            n(f, h, _)
        }, L = ({el: c, anchor: f}) => {
            let h;
            for (; c && c !== f;) h = m(c), i(c), c = h;
            i(f)
        }, H = (c, f, h, _, g, A, w, b, T) => {
            f.type === "svg" ? w = "svg" : f.type === "math" && (w = "mathml"), c == null ? N(f, h, _, g, A, w, b, T) : tt(c, f, g, A, w, b, T)
        }, N = (c, f, h, _, g, A, w, b) => {
            let T, v;
            const {props: O, shapeFlag: $, transition: D, dirs: R} = c;
            if (T = c.el = o(c.type, A, O && O.is, O), $ & 8 ? u(T, c.children) : $ & 16 && X(c.children, T, null, _, g, Yn(c, A), w, b), R && Se(c, null, _, "created"), U(T, c, c.scopeId, w, _), O) {
                for (const z in O) z !== "value" && !Os(z) && r(T, z, null, O[z], A, c.children, _, g, ft);
                "value" in O && r(T, "value", null, O.value, A), (v = O.onVnodeBeforeMount) && Wt(v, _, c)
            }
            R && Se(c, null, _, "beforeMount");
            const j = lu(g, D);
            j && D.beforeEnter(T), n(T, f, h), ((v = O && O.onVnodeMounted) || j || R) && gt(() => {
                v && Wt(v, _, c), j && D.enter(T), R && Se(c, null, _, "mounted")
            }, g)
        }, U = (c, f, h, _, g) => {
            if (h && y(c, h), _) for (let A = 0; A < _.length; A++) y(c, _[A]);
            if (g) {
                let A = g.subTree;
                if (f === A) {
                    const w = g.vnode;
                    U(c, w, w.scopeId, w.slotScopeIds, g.parent)
                }
            }
        }, X = (c, f, h, _, g, A, w, b, T = 0) => {
            for (let v = T; v < c.length; v++) {
                const O = c[v] = b ? he(c[v]) : Kt(c[v]);
                C(null, O, f, h, _, g, A, w, b)
            }
        }, tt = (c, f, h, _, g, A, w) => {
            const b = f.el = c.el;
            let {patchFlag: T, dynamicChildren: v, dirs: O} = f;
            T |= c.patchFlag & 16;
            const $ = c.props || J, D = f.props || J;
            let R;
            if (h && Ne(h, !1), (R = D.onVnodeBeforeUpdate) && Wt(R, h, f, c), O && Se(f, c, h, "beforeUpdate"), h && Ne(h, !0), v ? Q(c.dynamicChildren, v, b, h, _, Yn(f, g), A) : w || Y(c, f, b, null, h, _, Yn(f, g), A, !1), T > 0) {
                if (T & 16) et(b, f, $, D, h, _, g); else if (T & 2 && $.class !== D.class && r(b, "class", null, D.class, g), T & 4 && r(b, "style", $.style, D.style, g), T & 8) {
                    const j = f.dynamicProps;
                    for (let z = 0; z < j.length; z++) {
                        const Z = j[z], it = $[Z], Pt = D[Z];
                        (Pt !== it || Z === "value") && r(b, Z, it, Pt, g, c.children, h, _, ft)
                    }
                }
                T & 1 && c.children !== f.children && u(b, f.children)
            } else !w && v == null && et(b, f, $, D, h, _, g);
            ((R = D.onVnodeUpdated) || O) && gt(() => {
                R && Wt(R, h, f, c), O && Se(f, c, h, "updated")
            }, _)
        }, Q = (c, f, h, _, g, A, w) => {
            for (let b = 0; b < f.length; b++) {
                const T = c[b], v = f[b], O = T.el && (T.type === te || !ys(T, v) || T.shapeFlag & 70) ? p(T.el) : h;
                C(T, v, O, null, _, g, A, w, !0)
            }
        }, et = (c, f, h, _, g, A, w) => {
            if (h !== _) {
                if (h !== J) for (const b in h) !Os(b) && !(b in _) && r(c, b, h[b], null, w, f.children, g, A, ft);
                for (const b in _) {
                    if (Os(b)) continue;
                    const T = _[b], v = h[b];
                    T !== v && b !== "value" && r(c, b, v, T, w, f.children, g, A, ft)
                }
                "value" in _ && r(c, "value", h.value, _.value, w)
            }
        }, ot = (c, f, h, _, g, A, w, b, T) => {
            const v = f.el = c ? c.el : l(""), O = f.anchor = c ? c.anchor : l("");
            let {patchFlag: $, dynamicChildren: D, slotScopeIds: R} = f;
            R && (b = b ? b.concat(R) : R), c == null ? (n(v, h, _), n(O, h, _), X(f.children || [], h, O, g, A, w, b, T)) : $ > 0 && $ & 64 && D && c.dynamicChildren ? (Q(c.dynamicChildren, D, h, g, A, w, b), (f.key != null || g && f === g.subTree) && yl(c, f, !0)) : Y(c, f, h, O, g, A, w, b, T)
        }, nt = (c, f, h, _, g, A, w, b, T) => {
            f.slotScopeIds = b, c == null ? f.shapeFlag & 512 ? g.ctx.activate(f, h, _, w, T) : Lt(f, h, _, g, A, w, T) : Ht(c, f, T)
        }, Lt = (c, f, h, _, g, A, w) => {
            const b = c.component = vu(c, _, g);
            if (fl(c) && (b.ctx.renderer = ae), bu(b), b.asyncDep) {
                if (g && g.registerDep(b, q), !c.el) {
                    const T = b.subTree = Ut(Re);
                    x(null, T, f, h)
                }
            } else q(b, c, f, h, g, A, w)
        }, Ht = (c, f, h) => {
            const _ = f.component = c.component;
            if (Cc(c, f, h)) if (_.asyncDep && !_.asyncResolved) {
                W(_, f, h);
                return
            } else _.next = f, gc(_.update), _.effect.dirty = !0, _.update(); else f.el = c.el, _.vnode = f
        }, q = (c, f, h, _, g, A, w) => {
            const b = () => {
                if (c.isMounted) {
                    let {next: O, bu: $, u: D, parent: R, vnode: j} = c;
                    {
                        const Be = Al(c);
                        if (Be) {
                            O && (O.el = j.el, W(c, O, w)), Be.asyncDep.then(() => {
                                c.isUnmounted || b()
                            });
                            return
                        }
                    }
                    let z = O, Z;
                    Ne(c, !1), O ? (O.el = j.el, W(c, O, w)) : O = j, $ && nn($), (Z = O.props && O.props.onVnodeBeforeUpdate) && Wt(Z, R, O, j), Ne(c, !0);
                    const it = Kn(c), Pt = c.subTree;
                    c.subTree = it, C(Pt, it, p(Pt.el), Qt(Pt), c, g, A), O.el = it.el, z === null && Oc(c, it.el), D && gt(D, g), (Z = O.props && O.props.onVnodeUpdated) && gt(() => Wt(Z, R, O, j), g)
                } else {
                    let O;
                    const {el: $, props: D} = f, {bm: R, m: j, parent: z} = c, Z = on(f);
                    if (Ne(c, !1), R && nn(R), !Z && (O = D && D.onVnodeBeforeMount) && Wt(O, z, f), Ne(c, !0), $ && Es) {
                        const it = () => {
                            c.subTree = Kn(c), Es($, c.subTree, c, g, null)
                        };
                        Z ? f.type.__asyncLoader().then(() => !c.isUnmounted && it()) : it()
                    } else {
                        const it = c.subTree = Kn(c);
                        C(null, it, h, _, c, g, A), f.el = it.el
                    }
                    if (j && gt(j, g), !Z && (O = D && D.onVnodeMounted)) {
                        const it = f;
                        gt(() => Wt(O, z, it), g)
                    }
                    (f.shapeFlag & 256 || z && on(z.vnode) && z.vnode.shapeFlag & 256) && c.a && gt(c.a, g), c.isMounted = !0, f = h = _ = null
                }
            }, T = c.effect = new Vi(b, Ot, () => Yi(v), c.scope), v = c.update = () => {
                T.dirty && T.run()
            };
            v.id = c.uid, Ne(c, !0), v()
        }, W = (c, f, h) => {
            f.component = c;
            const _ = c.vnode.props;
            c.vnode = f, c.next = null, eu(c, f.props, _, h), iu(c, f.children, h), He(), Cr(c), Fe()
        }, Y = (c, f, h, _, g, A, w, b, T = !1) => {
            const v = c && c.children, O = c ? c.shapeFlag : 0, $ = f.children, {patchFlag: D, shapeFlag: R} = f;
            if (D > 0) {
                if (D & 128) {
                    Xt(v, $, h, _, g, A, w, b, T);
                    return
                } else if (D & 256) {
                    ut(v, $, h, _, g, A, w, b, T);
                    return
                }
            }
            R & 8 ? (O & 16 && ft(v, g, A), $ !== v && u(h, $)) : O & 16 ? R & 16 ? Xt(v, $, h, _, g, A, w, b, T) : ft(v, g, A, !0) : (O & 8 && u(h, ""), R & 16 && X($, h, _, g, A, w, b, T))
        }, ut = (c, f, h, _, g, A, w, b, T) => {
            c = c || Je, f = f || Je;
            const v = c.length, O = f.length, $ = Math.min(v, O);
            let D;
            for (D = 0; D < $; D++) {
                const R = f[D] = T ? he(f[D]) : Kt(f[D]);
                C(c[D], R, h, null, g, A, w, b, T)
            }
            v > O ? ft(c, g, A, !0, !1, $) : X(f, h, _, g, A, w, b, T, $)
        }, Xt = (c, f, h, _, g, A, w, b, T) => {
            let v = 0;
            const O = f.length;
            let $ = c.length - 1, D = O - 1;
            for (; v <= $ && v <= D;) {
                const R = c[v], j = f[v] = T ? he(f[v]) : Kt(f[v]);
                if (ys(R, j)) C(R, j, h, null, g, A, w, b, T); else break;
                v++
            }
            for (; v <= $ && v <= D;) {
                const R = c[$], j = f[D] = T ? he(f[D]) : Kt(f[D]);
                if (ys(R, j)) C(R, j, h, null, g, A, w, b, T); else break;
                $--, D--
            }
            if (v > $) {
                if (v <= D) {
                    const R = D + 1, j = R < O ? f[R].el : _;
                    for (; v <= D;) C(null, f[v] = T ? he(f[v]) : Kt(f[v]), h, j, g, A, w, b, T), v++
                }
            } else if (v > D) for (; v <= $;) lt(c[v], g, A, !0), v++; else {
                const R = v, j = v, z = new Map;
                for (v = j; v <= D; v++) {
                    const bt = f[v] = T ? he(f[v]) : Kt(f[v]);
                    bt.key != null && z.set(bt.key, v)
                }
                let Z, it = 0;
                const Pt = D - j + 1;
                let Be = !1, pr = 0;
                const vs = new Array(Pt);
                for (v = 0; v < Pt; v++) vs[v] = 0;
                for (v = R; v <= $; v++) {
                    const bt = c[v];
                    if (it >= Pt) {
                        lt(bt, g, A, !0);
                        continue
                    }
                    let jt;
                    if (bt.key != null) jt = z.get(bt.key); else for (Z = j; Z <= D; Z++) if (vs[Z - j] === 0 && ys(bt, f[Z])) {
                        jt = Z;
                        break
                    }
                    jt === void 0 ? lt(bt, g, A, !0) : (vs[jt - j] = v + 1, jt >= pr ? pr = jt : Be = !0, C(bt, f[jt], h, null, g, A, w, b, T), it++)
                }
                const _r = Be ? au(vs) : Je;
                for (Z = _r.length - 1, v = Pt - 1; v >= 0; v--) {
                    const bt = j + v, jt = f[bt], gr = bt + 1 < O ? f[bt + 1].el : _;
                    vs[v] === 0 ? C(null, jt, h, gr, g, A, w, b, T) : Be && (Z < 0 || v !== _r[Z] ? $t(jt, h, gr, 2) : Z--)
                }
            }
        }, $t = (c, f, h, _, g = null) => {
            const {el: A, type: w, transition: b, children: T, shapeFlag: v} = c;
            if (v & 6) {
                $t(c.component.subTree, f, h, _);
                return
            }
            if (v & 128) {
                c.suspense.move(f, h, _);
                return
            }
            if (v & 64) {
                w.move(c, f, h, ae);
                return
            }
            if (w === te) {
                n(A, f, h);
                for (let $ = 0; $ < T.length; $++) $t(T[$], f, h, _);
                n(c.anchor, f, h);
                return
            }
            if (w === zn) {
                M(c, f, h);
                return
            }
            if (_ !== 2 && v & 1 && b) if (_ === 0) b.beforeEnter(A), n(A, f, h), gt(() => b.enter(A), g); else {
                const {leave: $, delayLeave: D, afterLeave: R} = b, j = () => n(A, f, h), z = () => {
                    $(A, () => {
                        j(), R && R()
                    })
                };
                D ? D(A, j, z) : z()
            } else n(A, f, h)
        }, lt = (c, f, h, _ = !1, g = !1) => {
            const {type: A, props: w, ref: b, children: T, dynamicChildren: v, shapeFlag: O, patchFlag: $, dirs: D} = c;
            if (b != null && Ai(b, null, h, c, !0), O & 256) {
                f.ctx.deactivate(c);
                return
            }
            const R = O & 1 && D, j = !on(c);
            let z;
            if (j && (z = w && w.onVnodeBeforeUnmount) && Wt(z, f, c), O & 6) Ft(c.component, h, _); else {
                if (O & 128) {
                    c.suspense.unmount(h, _);
                    return
                }
                R && Se(c, null, f, "beforeUnmount"), O & 64 ? c.type.remove(c, f, h, g, ae, _) : v && (A !== te || $ > 0 && $ & 64) ? ft(v, f, h, !1, !0) : (A === te && $ & 384 || !g && O & 16) && ft(T, f, h), _ && Ce(c)
            }
            (j && (z = w && w.onVnodeUnmounted) || R) && gt(() => {
                z && Wt(z, f, c), R && Se(c, null, f, "unmounted")
            }, h)
        }, Ce = c => {
            const {type: f, el: h, anchor: _, transition: g} = c;
            if (f === te) {
                le(h, _);
                return
            }
            if (f === zn) {
                L(c);
                return
            }
            const A = () => {
                i(h), g && !g.persisted && g.afterLeave && g.afterLeave()
            };
            if (c.shapeFlag & 1 && g && !g.persisted) {
                const {leave: w, delayLeave: b} = g, T = () => w(h, A);
                b ? b(c.el, A, T) : T()
            } else A()
        }, le = (c, f) => {
            let h;
            for (; c !== f;) h = m(c), i(c), c = h;
            i(f)
        }, Ft = (c, f, h) => {
            const {bum: _, scope: g, update: A, subTree: w, um: b} = c;
            _ && nn(_), g.stop(), A && (A.active = !1, lt(w, c, f, h)), b && gt(b, f), gt(() => {
                c.isUnmounted = !0
            }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve())
        }, ft = (c, f, h, _ = !1, g = !1, A = 0) => {
            for (let w = A; w < c.length; w++) lt(c[w], f, h, _, g)
        },
        Qt = c => c.shapeFlag & 6 ? Qt(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : m(c.anchor || c.el);
    let It = !1;
    const Ke = (c, f, h) => {
        c == null ? f._vnode && lt(f._vnode, null, null, !0) : C(f._vnode || null, c, f, null, null, null, h), It || (It = !0, Cr(), ol(), It = !1), f._vnode = c
    }, ae = {p: C, um: lt, m: $t, r: Ce, mt: Lt, mc: X, pc: Y, pbc: Q, n: Qt, o: e};
    let Oe, Es;
    return t && ([Oe, Es] = t(ae)), {render: Ke, hydrate: Oe, createApp: Jc(Ke, Oe)}
}

function Yn({type: e, props: t}, s) {
    return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s
}

function Ne({effect: e, update: t}, s) {
    e.allowRecurse = t.allowRecurse = s
}

function lu(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function yl(e, t, s = !1) {
    const n = e.children, i = t.children;
    if (k(n) && k(i)) for (let r = 0; r < n.length; r++) {
        const o = n[r];
        let l = i[r];
        l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = he(i[r]), l.el = o.el), s || yl(o, l)), l.type === xn && (l.el = o.el)
    }
}

function au(e) {
    const t = e.slice(), s = [0];
    let n, i, r, o, l;
    const a = e.length;
    for (n = 0; n < a; n++) {
        const d = e[n];
        if (d !== 0) {
            if (i = s[s.length - 1], e[i] < d) {
                t[n] = i, s.push(n);
                continue
            }
            for (r = 0, o = s.length - 1; r < o;) l = r + o >> 1, e[s[l]] < d ? r = l + 1 : o = l;
            d < e[s[r]] && (r > 0 && (t[n] = s[r - 1]), s[r] = n)
        }
    }
    for (r = s.length, o = s[r - 1]; r-- > 0;) s[r] = o, o = t[o];
    return s
}

function Al(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Al(t)
}

const cu = e => e.__isTeleport, te = Symbol.for("v-fgt"), xn = Symbol.for("v-txt"), Re = Symbol.for("v-cmt"),
    zn = Symbol.for("v-stc"), xs = [];
let Rt = null;

function Zt(e = !1) {
    xs.push(Rt = e ? null : [])
}

function uu() {
    xs.pop(), Rt = xs[xs.length - 1] || null
}

let Ms = 1;

function Mr(e) {
    Ms += e
}

function Tl(e) {
    return e.dynamicChildren = Ms > 0 ? Rt || Je : null, uu(), Ms > 0 && Rt && Rt.push(e), e
}

function fe(e, t, s, n, i, r) {
    return Tl(V(e, t, s, n, i, r, !0))
}

function fu(e, t, s, n, i) {
    return Tl(Ut(e, t, s, n, i, !0))
}

function du(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function ys(e, t) {
    return e.type === t.type && e.key === t.key
}

const Dn = "__vInternal", wl = ({key: e}) => e ?? null, an = ({
                                                                  ref: e,
                                                                  ref_key: t,
                                                                  ref_for: s
                                                              }) => (typeof e == "number" && (e = "" + e), e != null ? rt(e) || vt(e) || F(e) ? {
    i: At,
    r: e,
    k: t,
    f: !!s
} : e : null);

function V(e, t = null, s = null, n = 0, i = null, r = e === te ? 0 : 1, o = !1, l = !1) {
    const a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && wl(t),
        ref: t && an(t),
        scopeId: Sn,
        slotScopeIds: null,
        children: s,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: n,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: At
    };
    return l ? (qi(a, s), r & 128 && e.normalize(a)) : s && (a.shapeFlag |= rt(s) ? 8 : 16), Ms > 0 && !o && Rt && (a.patchFlag > 0 || r & 6) && a.patchFlag !== 32 && Rt.push(a), a
}

const Ut = hu;

function hu(e, t = null, s = null, n = 0, i = null, r = !1) {
    if ((!e || e === Sc) && (e = Re), du(e)) {
        const l = is(e, t, !0);
        return s && qi(l, s), Ms > 0 && !r && Rt && (l.shapeFlag & 6 ? Rt[Rt.indexOf(e)] = l : Rt.push(l)), l.patchFlag |= -2, l
    }
    if (wu(e) && (e = e.__vccOpts), t) {
        t = pu(t);
        let {class: l, style: a} = t;
        l && !rt(l) && (t.class = _e(l)), st(a) && (Zo(a) && !k(a) && (a = ct({}, a)), t.style = Ri(a))
    }
    const o = rt(e) ? 1 : Nc(e) ? 128 : cu(e) ? 64 : st(e) ? 4 : F(e) ? 2 : 0;
    return V(e, t, s, n, i, o, r, !0)
}

function pu(e) {
    return e ? Zo(e) || Dn in e ? ct({}, e) : e : null
}

function is(e, t, s = !1) {
    const {props: n, ref: i, patchFlag: r, children: o} = e, l = t ? gu(n || {}, t) : n;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && wl(l),
        ref: t && t.ref ? s && i ? k(i) ? i.concat(an(t)) : [i, an(t)] : an(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: o,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== te ? r === -1 ? 16 : r | 16 : r,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && is(e.ssContent),
        ssFallback: e.ssFallback && is(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function _u(e = " ", t = 0) {
    return Ut(xn, null, e, t)
}

function qs(e = "", t = !1) {
    return t ? (Zt(), fu(Re, null, e)) : Ut(Re, null, e)
}

function Kt(e) {
    return e == null || typeof e == "boolean" ? Ut(Re) : k(e) ? Ut(te, null, e.slice()) : typeof e == "object" ? he(e) : Ut(xn, null, String(e))
}

function he(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : is(e)
}

function qi(e, t) {
    let s = 0;
    const {shapeFlag: n} = e;
    if (t == null) t = null; else if (k(t)) s = 16; else if (typeof t == "object") if (n & 65) {
        const i = t.default;
        i && (i._c && (i._d = !1), qi(e, i()), i._c && (i._d = !0));
        return
    } else {
        s = 32;
        const i = t._;
        !i && !(Dn in t) ? t._ctx = At : i === 3 && At && (At.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else F(t) ? (t = {default: t, _ctx: At}, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [_u(t)]) : s = 8);
    e.children = t, e.shapeFlag |= s
}

function gu(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        for (const i in n) if (i === "class") t.class !== n.class && (t.class = _e([t.class, n.class])); else if (i === "style") t.style = Ri([t.style, n.style]); else if (yn(i)) {
            const r = t[i], o = n[i];
            o && r !== o && !(k(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o)
        } else i !== "" && (t[i] = n[i])
    }
    return t
}

function Wt(e, t, s, n = null) {
    Vt(e, t, 7, [s, n])
}

const mu = _l();
let Eu = 0;

function vu(e, t, s) {
    const n = e.type, i = (t ? t.appContext : e.appContext) || mu, r = {
        uid: Eu++,
        vnode: e,
        type: n,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Ha(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: ml(n, i),
        emitsOptions: al(n, i),
        emit: null,
        emitted: null,
        propsDefaults: J,
        inheritAttrs: n.inheritAttrs,
        ctx: J,
        data: J,
        props: J,
        attrs: J,
        slots: J,
        refs: J,
        setupState: J,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: s,
        suspenseId: s ? s.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return r.ctx = {_: r}, r.root = t ? t.root : r, r.emit = vc.bind(null, r), e.ce && e.ce(r), r
}

let ht = null, gn, Ti;
{
    const e = ko(), t = (s, n) => {
        let i;
        return (i = e[s]) || (i = e[s] = []), i.push(n), r => {
            i.length > 1 ? i.forEach(o => o(r)) : i[0](r)
        }
    };
    gn = t("__VUE_INSTANCE_SETTERS__", s => ht = s), Ti = t("__VUE_SSR_SETTERS__", s => Ln = s)
}
const Vs = e => {
    const t = ht;
    return gn(e), e.scope.on(), () => {
        e.scope.off(), gn(t)
    }
}, Rr = () => {
    ht && ht.scope.off(), gn(null)
};

function Cl(e) {
    return e.vnode.shapeFlag & 4
}

let Ln = !1;

function bu(e, t = !1) {
    t && Ti(t);
    const {props: s, children: n} = e.vnode, i = Cl(e);
    tu(e, s, i, t), nu(e, n);
    const r = i ? yu(e, t) : void 0;
    return t && Ti(!1), r
}

function yu(e, t) {
    const s = e.type;
    e.accessCache = Object.create(null), e.proxy = tl(new Proxy(e.ctx, Uc));
    const {setup: n} = s;
    if (n) {
        const i = e.setupContext = n.length > 1 ? Tu(e) : null, r = Vs(e);
        He();
        const o = me(n, e, 0, [e.props, i]);
        if (Fe(), r(), Po(o)) {
            if (o.then(Rr, Rr), t) return o.then(l => {
                Vr(e, l, t)
            }).catch(l => {
                Cn(l, e, 0)
            });
            e.asyncDep = o
        } else Vr(e, o, t)
    } else Ol(e, t)
}

function Vr(e, t, s) {
    F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : st(t) && (e.setupState = nl(t)), Ol(e, s)
}

let kr;

function Ol(e, t, s) {
    const n = e.type;
    if (!e.render) {
        if (!t && kr && !n.render) {
            const i = n.template || zi(e).template;
            if (i) {
                const {isCustomElement: r, compilerOptions: o} = e.appContext.config, {
                    delimiters: l,
                    compilerOptions: a
                } = n, d = ct(ct({isCustomElement: r, delimiters: l}, o), a);
                n.render = kr(i, d)
            }
        }
        e.render = n.render || Ot
    }
    {
        const i = Vs(e);
        He();
        try {
            Yc(e)
        } finally {
            Fe(), i()
        }
    }
}

function Au(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, s) {
            return Et(e, "get", "$attrs"), t[s]
        }
    }))
}

function Tu(e) {
    const t = s => {
        e.exposed = s || {}
    };
    return {
        get attrs() {
            return Au(e)
        }, slots: e.slots, emit: e.emit, expose: t
    }
}

function $n(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(nl(tl(e.exposed)), {
        get(t, s) {
            if (s in t) return t[s];
            if (s in Ss) return Ss[s](e)
        }, has(t, s) {
            return s in t || s in Ss
        }
    }))
}

function wu(e) {
    return F(e) && "__vccOpts" in e
}

const Cu = (e, t) => ac(e, t, Ln), Ou = "3.4.18";
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/const Su = "http://www.w3.org/2000/svg", Nu = "http://www.w3.org/1998/Math/MathML",
    pe = typeof document < "u" ? document : null, Hr = pe && pe.createElement("template"), xu = {
        insert: (e, t, s) => {
            t.insertBefore(e, s || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, s, n) => {
            const i = t === "svg" ? pe.createElementNS(Su, e) : t === "mathml" ? pe.createElementNS(Nu, e) : pe.createElement(e, s ? {is: s} : void 0);
            return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i
        },
        createText: e => pe.createTextNode(e),
        createComment: e => pe.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => pe.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, s, n, i, r) {
            const o = s ? s.previousSibling : t.lastChild;
            if (i && (i === r || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), s), !(i === r || !(i = i.nextSibling));) ; else {
                Hr.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
                const l = Hr.content;
                if (n === "svg" || n === "mathml") {
                    const a = l.firstChild;
                    for (; a.firstChild;) l.appendChild(a.firstChild);
                    l.removeChild(a)
                }
                t.insertBefore(l, s)
            }
            return [o ? o.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
        }
    }, Du = Symbol("_vtc");

function Lu(e, t, s) {
    const n = e[Du];
    n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t
}

const Fr = Symbol("_vod"), $u = Symbol(""), Iu = /(^|;)\s*display\s*:/;

function Pu(e, t, s) {
    const n = e.style, i = rt(s), r = n.display;
    let o = !1;
    if (s && !i) {
        if (t && !rt(t)) for (const l in t) s[l] == null && wi(n, l, "");
        for (const l in s) l === "display" && (o = !0), wi(n, l, s[l])
    } else if (i) {
        if (t !== s) {
            const l = n[$u];
            l && (s += ";" + l), n.cssText = s, o = Iu.test(s)
        }
    } else t && e.removeAttribute("style");
    Fr in e && (e[Fr] = o ? n.display : "", n.display = r)
}

const jr = /\s*!important$/;

function wi(e, t, s) {
    if (k(s)) s.forEach(n => wi(e, t, n)); else if (s == null && (s = ""), t.startsWith("--")) e.setProperty(t, s); else {
        const n = Mu(e, t);
        jr.test(s) ? e.setProperty(hs(n), s.replace(jr, ""), "important") : e[n] = s
    }
}

const Wr = ["Webkit", "Moz", "ms"], Gn = {};

function Mu(e, t) {
    const s = Gn[t];
    if (s) return s;
    let n = ss(t);
    if (n !== "filter" && n in e) return Gn[t] = n;
    n = Vo(n);
    for (let i = 0; i < Wr.length; i++) {
        const r = Wr[i] + n;
        if (r in e) return Gn[t] = r
    }
    return t
}

const Kr = "http://www.w3.org/1999/xlink";

function Ru(e, t, s, n, i) {
    if (n && t.startsWith("xlink:")) s == null ? e.removeAttributeNS(Kr, t.slice(6, t.length)) : e.setAttributeNS(Kr, t, s); else {
        const r = ka(t);
        s == null || r && !Ho(s) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : s)
    }
}

function Vu(e, t, s, n, i, r, o) {
    if (t === "innerHTML" || t === "textContent") {
        n && o(n, i, r), e[t] = s ?? "";
        return
    }
    const l = e.tagName;
    if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
        e._value = s;
        const d = l === "OPTION" ? e.getAttribute("value") : e.value, u = s ?? "";
        d !== u && (e.value = u), s == null && e.removeAttribute(t);
        return
    }
    let a = !1;
    if (s === "" || s == null) {
        const d = typeof e[t];
        d === "boolean" ? s = Ho(s) : s == null && d === "string" ? (s = "", a = !0) : d === "number" && (s = 0, a = !0)
    }
    try {
        e[t] = s
    } catch {
    }
    a && e.removeAttribute(t)
}

function ze(e, t, s, n) {
    e.addEventListener(t, s, n)
}

function ku(e, t, s, n) {
    e.removeEventListener(t, s, n)
}

const Br = Symbol("_vei");

function Hu(e, t, s, n, i = null) {
    const r = e[Br] || (e[Br] = {}), o = r[t];
    if (n && o) o.value = n; else {
        const [l, a] = Fu(t);
        if (n) {
            const d = r[t] = Ku(n, i);
            ze(e, l, d, a)
        } else o && (ku(e, l, o, a), r[t] = void 0)
    }
}

const Ur = /(?:Once|Passive|Capture)$/;

function Fu(e) {
    let t;
    if (Ur.test(e)) {
        t = {};
        let n;
        for (; n = e.match(Ur);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : hs(e.slice(2)), t]
}

let qn = 0;
const ju = Promise.resolve(), Wu = () => qn || (ju.then(() => qn = 0), qn = Date.now());

function Ku(e, t) {
    const s = n => {
        if (!n._vts) n._vts = Date.now(); else if (n._vts <= s.attached) return;
        Vt(Bu(n, s.value), t, 5, [n])
    };
    return s.value = e, s.attached = Wu(), s
}

function Bu(e, t) {
    if (k(t)) {
        const s = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            s.call(e), e._stopped = !0
        }, t.map(n => i => !i._stopped && n && n(i))
    } else return t
}

const Yr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Uu = (e, t, s, n, i, r, o, l, a) => {
        const d = i === "svg";
        t === "class" ? Lu(e, n, d) : t === "style" ? Pu(e, s, n) : yn(t) ? Ii(t) || Hu(e, t, s, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Yu(e, t, n, d)) ? Vu(e, t, n, r, o, l, a) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ru(e, t, n, d))
    };

function Yu(e, t, s, n) {
    if (n) return !!(t === "innerHTML" || t === "textContent" || t in e && Yr(t) && F(s));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE") return !1
    }
    return Yr(t) && rt(s) ? !1 : t in e
}

const zr = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return k(t) ? s => nn(t, s) : t
};

function zu(e) {
    e.target.composing = !0
}

function Gr(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}

const Xn = Symbol("_assign"), As = {
    created(e, {modifiers: {lazy: t, trim: s, number: n}}, i) {
        e[Xn] = zr(i);
        const r = n || i.props && i.props.type === "number";
        ze(e, t ? "change" : "input", o => {
            if (o.target.composing) return;
            let l = e.value;
            s && (l = l.trim()), r && (l = di(l)), e[Xn](l)
        }), s && ze(e, "change", () => {
            e.value = e.value.trim()
        }), t || (ze(e, "compositionstart", zu), ze(e, "compositionend", Gr), ze(e, "change", Gr))
    }, mounted(e, {value: t}) {
        e.value = t ?? ""
    }, beforeUpdate(e, {value: t, modifiers: {lazy: s, trim: n, number: i}}, r) {
        if (e[Xn] = zr(r), e.composing) return;
        const o = i || e.type === "number" ? di(e.value) : e.value, l = t ?? "";
        o !== l && (document.activeElement === e && e.type !== "range" && (s || n && e.value.trim() === l) || (e.value = l))
    }
}, Gu = ["ctrl", "shift", "alt", "meta"], qu = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => Gu.some(s => e[`${s}Key`] && !t.includes(s))
}, Xu = (e, t) => {
    const s = e._withMods || (e._withMods = {}), n = t.join(".");
    return s[n] || (s[n] = (i, ...r) => {
        for (let o = 0; o < t.length; o++) {
            const l = qu[t[o]];
            if (l && l(i, t)) return
        }
        return e(i, ...r)
    })
}, Qu = ct({patchProp: Uu}, xu);
let qr;

function Ju() {
    return qr || (qr = ru(Qu))
}

const Zu = (...e) => {
    const t = Ju().createApp(...e), {mount: s} = t;
    return t.mount = n => {
        const i = ef(n);
        if (!i) return;
        const r = t._component;
        !F(r) && !r.render && !r.template && (r.template = i.innerHTML), i.innerHTML = "";
        const o = s(i, !1, tf(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o
    }, t
};

function tf(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function ef(e) {
    return rt(e) ? document.querySelector(e) : e
}

const sf = "assets/bg-card-front-BU9fUX8l.png",
    nf = "data:image/svg+xml,%3csvg%20width='84'%20height='47'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='23.478'%20cy='23.5'%20rx='23.478'%20ry='23.5'%20fill='%23fff'/%3e%3cpath%20d='M83.5%2023.5c0%205.565-4.507%2010.075-10.065%2010.075-5.559%200-10.065-4.51-10.065-10.075%200-5.565%204.506-10.075%2010.065-10.075%205.558%200%2010.065%204.51%2010.065%2010.075Z'%20stroke='%23fff'/%3e%3c/svg%3e",
    rf = "assets/bg-card-back-BUIwGWj0.png",
    of = "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='url(%23a)'/%3e%3cpath%20d='M28%2039.92%2036.08%2048l16-16'%20stroke='%23fff'%20stroke-width='3'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='-23.014'%20y1='11.507'%20x2='0'%20y2='91.507'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%236348FE'/%3e%3cstop%20offset='1'%20stop-color='%23610595'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
    Sl = (e, t) => {
        const s = e.__vccOpts || e;
        for (const [n, i] of t) s[n] = i;
        return s
    }, qt = e => (bc("data-v-a03a3e59"), e = e(), yc(), e), lf = {class: "container"},
    af = {class: "row d-flex justify-content-between"},
    cf = {class: "cards col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pe-5"},
    uf = {class: "front-card-container mb-5 ms-3 d-flex justify-content-start"},
    ff = qt(() => V("img", {src: sf, alt: "", class: "position-relative front-card-img"}, null, -1)),
    df = {class: "front-card shadow-lg rounded-3 p-4 d-flex flex-column justify-content-between position-absolute"},
    hf = qt(() => V("div", {class: "logo"}, [V("img", {src: nf, alt: ""})], -1)),
    pf = {class: "card-details text-light"}, _f = {class: "top-details mb-3"},
    gf = {class: "bottom-details d-flex justify-content-between"}, mf = {class: "name"}, Ef = {class: "date"},
    vf = {class: "back-card-container d-flex justify-content-end"},
    bf = qt(() => V("img", {src: rf, alt: "", class: "position-relative back-card-img"}, null, -1)),
    yf = {class: "back-card shadow-lg rounded-3 position-absolute"}, Af = {class: "cvc position-absolute"},
    Tf = {class: "text-light"}, wf = {class: "form col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0 my-auto me-5"},
    Cf = {key: 0, class: "mb-0"}, Of = {class: "input-wrapper"}, Sf = qt(() => V("p", null, "CARDHOLDER NAME", -1)),
    Nf = {key: 0, class: "text-danger"}, xf = {class: "input-wrapper mt-3"},
    Df = qt(() => V("p", null, "CARD NUMBER", -1)), Lf = {key: 0, class: "text-danger"},
    $f = {class: "bottom-form mt-5 d-flex justify-content-between gap-3"},
    If = {class: "exp-date-inputs position-relative d-flex gap-2 w-50"},
    Pf = qt(() => V("p", {class: "position-absolute bottom-100"}, "EXP. DATE (MM/YY)", -1)),
    Mf = {class: "cvc-input position-relative"},
    Rf = qt(() => V("p", {class: "position-absolute bottom-100"}, "CVC", -1)), Vf = {class: "d-flex w-100 mt-2"},
    kf = {key: 0, class: "text-danger w-50"}, Hf = {key: 1, class: "text-danger w-50"},
    Ff = {key: 1, class: "completed-container text-center"}, jf = qt(() => V("img", {src: of, alt: ""}, null, -1)),
    Wf = qt(() => V("h1", {class: "mt-4 mb-3"}, "THANK YOU!", -1)),
    Kf = qt(() => V("h5", null, "We've added your card details", -1)), Bf = {
        __name: "CardForm", setup(e) {
            const t = yt("0000 0000 0000 0000"), s = yt("JANE APPLESEED"), n = yt("00"), i = yt("00"), r = yt("000"),
                o = yt(!0), l = yt(""), a = yt(!1), d = yt(""), u = yt(""), p = yt(""), m = yt(""), y = yt(""), P = C => {
                    if (!d.value || !u.value || !p.value || !m.value || !y.value) {
                        l.value = "Can't be blank", o.value = !C.value, a.value = !0;
                        return
                    } else l.value = "";
                    t.value = d.value, s.value = u.value, n.value = p.value, i.value = m.value, r.value = y.value, d.value = "", u.value = "", p.value = "", m.value = "", y.value = "", l.value = "", a.value = !1
                };
            return (C, S) => (Zt(), fe("div", lf, [V("div", af, [V("div", cf, [V("div", uf, [ff, V("div", df, [hf, V("div", pf, [V("div", _f, [V("p", null, Jt(t.value), 1)]), V("div", gf, [V("div", mf, [V("p", null, Jt(s.value.toUpperCase()), 1)]), V("div", Ef, [V("p", null, Jt(n.value) + "/" + Jt(i.value), 1)])])])])]), V("div", vf, [bf, V("div", yf, [V("div", Af, [V("p", Tf, Jt(r.value), 1)])])])]), V("div", wf, [o.value ? (Zt(), fe("form", Cf, [V("div", Of, [Sf, bs(V("input", {
                type: "text",
                placeholder: "e.g Jane Appleseed",
                class: _e(["form-control w-100 my-2", {"border border-danger": a.value}]),
                "onUpdate:modelValue": S[0] || (S[0] = x => u.value = x)
            }, null, 2), [[As, u.value, void 0, {trim: !0}]]), l.value ? (Zt(), fe("p", Nf, Jt(l.value), 1)) : qs("", !0)]), V("div", xf, [Df, bs(V("input", {
                type: "text",
                placeholder: "e.g 1234 5678 9123 0000",
                class: _e(["form-control w-100 my-2", {"border border-danger": a.value}]),
                "onUpdate:modelValue": S[1] || (S[1] = x => d.value = x)
            }, null, 2), [[As, d.value, void 0, {trim: !0}]]), l.value ? (Zt(), fe("p", Lf, Jt(l.value), 1)) : qs("", !0)]), V("div", $f, [V("div", If, [Pf, bs(V("input", {
                type: "text",
                placeholder: "MM",
                class: _e(["form-control w-50 mt-2", {"border border-danger": a.value}]),
                "onUpdate:modelValue": S[2] || (S[2] = x => p.value = x)
            }, null, 2), [[As, p.value, void 0, {trim: !0}]]), bs(V("input", {
                type: "text",
                placeholder: "YY",
                class: _e(["form-control w-50 mt-2", {"border border-danger": a.value}]),
                "onUpdate:modelValue": S[3] || (S[3] = x => m.value = x)
            }, null, 2), [[As, m.value, void 0, {trim: !0}]])]), V("div", Mf, [Rf, bs(V("input", {
                type: "text",
                placeholder: "e.g 123",
                class: _e(["form-control w-100 mt-2", {"border border-danger": a.value}]),
                "onUpdate:modelValue": S[4] || (S[4] = x => y.value = x)
            }, null, 2), [[As, y.value, void 0, {trim: !0}]])])]), V("div", Vf, [l.value ? (Zt(), fe("p", kf, Jt(l.value), 1)) : qs("", !0), l.value ? (Zt(), fe("p", Hf, Jt(l.value), 1)) : qs("", !0)]), V("button", {
                onClick: S[5] || (S[5] = Xu(x => P(o.value = !1), ["prevent"])),
                class: "confirm w-100 mt-5 text-light rounded-2"
            }, " Confirm ")])) : (Zt(), fe("div", Ff, [jf, Wf, Kf, V("button", {
                class: "continue w-100 mt-4 text-light rounded-2",
                onClick: S[6] || (S[6] = x => o.value = !0)
            }, " Continue ")]))])])]))
        }
    }, Uf = Sl(Bf, [["__scopeId", "data-v-a03a3e59"]]), Yf = {class: "d-flex align-items-center"},
    zf = {class: "container"}, Gf = {
        __name: "App", setup(e) {
            return (t, s) => (Zt(), fe("main", Yf, [V("div", zf, [Ut(Uf)])]))
        }
    }, qf = Sl(Gf, [["__scopeId", "data-v-08b6c7f3"]]);
var pt = "top", Tt = "bottom", wt = "right", _t = "left", In = "auto", ps = [pt, Tt, wt, _t], Ve = "start", rs = "end",
    Nl = "clippingParents", Xi = "viewport", Ge = "popper", xl = "reference", Ci = ps.reduce(function (e, t) {
        return e.concat([t + "-" + Ve, t + "-" + rs])
    }, []), Qi = [].concat(ps, [In]).reduce(function (e, t) {
        return e.concat([t, t + "-" + Ve, t + "-" + rs])
    }, []), Dl = "beforeRead", Ll = "read", $l = "afterRead", Il = "beforeMain", Pl = "main", Ml = "afterMain",
    Rl = "beforeWrite", Vl = "write", kl = "afterWrite", Hl = [Dl, Ll, $l, Il, Pl, Ml, Rl, Vl, kl];

function Gt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function Ct(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function ke(e) {
    var t = Ct(e).Element;
    return e instanceof t || e instanceof Element
}

function St(e) {
    var t = Ct(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function Ji(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = Ct(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function Xf(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function (s) {
        var n = t.styles[s] || {}, i = t.attributes[s] || {}, r = t.elements[s];
        !St(r) || !Gt(r) || (Object.assign(r.style, n), Object.keys(i).forEach(function (o) {
            var l = i[o];
            l === !1 ? r.removeAttribute(o) : r.setAttribute(o, l === !0 ? "" : l)
        }))
    })
}

function Qf(e) {
    var t = e.state, s = {
        popper: {position: t.options.strategy, left: "0", top: "0", margin: "0"},
        arrow: {position: "absolute"},
        reference: {}
    };
    return Object.assign(t.elements.popper.style, s.popper), t.styles = s, t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow), function () {
        Object.keys(t.elements).forEach(function (n) {
            var i = t.elements[n], r = t.attributes[n] || {},
                o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : s[n]), l = o.reduce(function (a, d) {
                    return a[d] = "", a
                }, {});
            !St(i) || !Gt(i) || (Object.assign(i.style, l), Object.keys(r).forEach(function (a) {
                i.removeAttribute(a)
            }))
        })
    }
}

const Zi = {name: "applyStyles", enabled: !0, phase: "write", fn: Xf, effect: Qf, requires: ["computeStyles"]};

function Yt(e) {
    return e.split("-")[0]
}

var Me = Math.max, mn = Math.min, os = Math.round;

function Oi() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function (t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function Fl() {
    return !/^((?!chrome|android).)*safari/i.test(Oi())
}

function ls(e, t, s) {
    t === void 0 && (t = !1), s === void 0 && (s = !1);
    var n = e.getBoundingClientRect(), i = 1, r = 1;
    t && St(e) && (i = e.offsetWidth > 0 && os(n.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && os(n.height) / e.offsetHeight || 1);
    var o = ke(e) ? Ct(e) : window, l = o.visualViewport, a = !Fl() && s,
        d = (n.left + (a && l ? l.offsetLeft : 0)) / i, u = (n.top + (a && l ? l.offsetTop : 0)) / r, p = n.width / i,
        m = n.height / r;
    return {width: p, height: m, top: u, right: d + p, bottom: u + m, left: d, x: d, y: u}
}

function tr(e) {
    var t = ls(e), s = e.offsetWidth, n = e.offsetHeight;
    return Math.abs(t.width - s) <= 1 && (s = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: s,
        height: n
    }
}

function jl(e, t) {
    var s = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (s && Ji(s)) {
        var n = t;
        do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host
        } while (n)
    }
    return !1
}

function ie(e) {
    return Ct(e).getComputedStyle(e)
}

function Jf(e) {
    return ["table", "td", "th"].indexOf(Gt(e)) >= 0
}

function Ae(e) {
    return ((ke(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function Pn(e) {
    return Gt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ji(e) ? e.host : null) || Ae(e)
}

function Xr(e) {
    return !St(e) || ie(e).position === "fixed" ? null : e.offsetParent
}

function Zf(e) {
    var t = /firefox/i.test(Oi()), s = /Trident/i.test(Oi());
    if (s && St(e)) {
        var n = ie(e);
        if (n.position === "fixed") return null
    }
    var i = Pn(e);
    for (Ji(i) && (i = i.host); St(i) && ["html", "body"].indexOf(Gt(i)) < 0;) {
        var r = ie(i);
        if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return i;
        i = i.parentNode
    }
    return null
}

function ks(e) {
    for (var t = Ct(e), s = Xr(e); s && Jf(s) && ie(s).position === "static";) s = Xr(s);
    return s && (Gt(s) === "html" || Gt(s) === "body" && ie(s).position === "static") ? t : s || Zf(e) || t
}

function er(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function Ds(e, t, s) {
    return Me(e, mn(t, s))
}

function td(e, t, s) {
    var n = Ds(e, t, s);
    return n > s ? s : n
}

function Wl() {
    return {top: 0, right: 0, bottom: 0, left: 0}
}

function Kl(e) {
    return Object.assign({}, Wl(), e)
}

function Bl(e, t) {
    return t.reduce(function (s, n) {
        return s[n] = e, s
    }, {})
}

var ed = function (t, s) {
    return t = typeof t == "function" ? t(Object.assign({}, s.rects, {placement: s.placement})) : t, Kl(typeof t != "number" ? t : Bl(t, ps))
};

function sd(e) {
    var t, s = e.state, n = e.name, i = e.options, r = s.elements.arrow, o = s.modifiersData.popperOffsets,
        l = Yt(s.placement), a = er(l), d = [_t, wt].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!r || !o)) {
        var p = ed(i.padding, s), m = tr(r), y = a === "y" ? pt : _t, P = a === "y" ? Tt : wt,
            C = s.rects.reference[u] + s.rects.reference[a] - o[a] - s.rects.popper[u], S = o[a] - s.rects.reference[a],
            x = ks(r), B = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, M = C / 2 - S / 2, L = p[y],
            H = B - m[u] - p[P], N = B / 2 - m[u] / 2 + M, U = Ds(L, N, H), X = a;
        s.modifiersData[n] = (t = {}, t[X] = U, t.centerOffset = U - N, t)
    }
}

function nd(e) {
    var t = e.state, s = e.options, n = s.element, i = n === void 0 ? "[data-popper-arrow]" : n;
    i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || jl(t.elements.popper, i) && (t.elements.arrow = i))
}

const Ul = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: sd,
    effect: nd,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function as(e) {
    return e.split("-")[1]
}

var id = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

function rd(e, t) {
    var s = e.x, n = e.y, i = t.devicePixelRatio || 1;
    return {x: os(s * i) / i || 0, y: os(n * i) / i || 0}
}

function Qr(e) {
    var t, s = e.popper, n = e.popperRect, i = e.placement, r = e.variation, o = e.offsets, l = e.position,
        a = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, p = e.isFixed, m = o.x, y = m === void 0 ? 0 : m,
        P = o.y, C = P === void 0 ? 0 : P, S = typeof u == "function" ? u({x: y, y: C}) : {x: y, y: C};
    y = S.x, C = S.y;
    var x = o.hasOwnProperty("x"), B = o.hasOwnProperty("y"), M = _t, L = pt, H = window;
    if (d) {
        var N = ks(s), U = "clientHeight", X = "clientWidth";
        if (N === Ct(s) && (N = Ae(s), ie(N).position !== "static" && l === "absolute" && (U = "scrollHeight", X = "scrollWidth")), N = N, i === pt || (i === _t || i === wt) && r === rs) {
            L = Tt;
            var tt = p && N === H && H.visualViewport ? H.visualViewport.height : N[U];
            C -= tt - n.height, C *= a ? 1 : -1
        }
        if (i === _t || (i === pt || i === Tt) && r === rs) {
            M = wt;
            var Q = p && N === H && H.visualViewport ? H.visualViewport.width : N[X];
            y -= Q - n.width, y *= a ? 1 : -1
        }
    }
    var et = Object.assign({position: l}, d && id), ot = u === !0 ? rd({x: y, y: C}, Ct(s)) : {x: y, y: C};
    if (y = ot.x, C = ot.y, a) {
        var nt;
        return Object.assign({}, et, (nt = {}, nt[L] = B ? "0" : "", nt[M] = x ? "0" : "", nt.transform = (H.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + C + "px)" : "translate3d(" + y + "px, " + C + "px, 0)", nt))
    }
    return Object.assign({}, et, (t = {}, t[L] = B ? C + "px" : "", t[M] = x ? y + "px" : "", t.transform = "", t))
}

function od(e) {
    var t = e.state, s = e.options, n = s.gpuAcceleration, i = n === void 0 ? !0 : n, r = s.adaptive,
        o = r === void 0 ? !0 : r, l = s.roundOffsets, a = l === void 0 ? !0 : l, d = {
            placement: Yt(t.placement),
            variation: as(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: i,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qr(Object.assign({}, d, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: o,
        roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qr(Object.assign({}, d, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {"data-popper-placement": t.placement})
}

const sr = {name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: od, data: {}};
var Xs = {passive: !0};

function ld(e) {
    var t = e.state, s = e.instance, n = e.options, i = n.scroll, r = i === void 0 ? !0 : i, o = n.resize,
        l = o === void 0 ? !0 : o, a = Ct(t.elements.popper),
        d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return r && d.forEach(function (u) {
        u.addEventListener("scroll", s.update, Xs)
    }), l && a.addEventListener("resize", s.update, Xs), function () {
        r && d.forEach(function (u) {
            u.removeEventListener("scroll", s.update, Xs)
        }), l && a.removeEventListener("resize", s.update, Xs)
    }
}

const nr = {
    name: "eventListeners", enabled: !0, phase: "write", fn: function () {
    }, effect: ld, data: {}
};
var ad = {left: "right", right: "left", bottom: "top", top: "bottom"};

function cn(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
        return ad[t]
    })
}

var cd = {start: "end", end: "start"};

function Jr(e) {
    return e.replace(/start|end/g, function (t) {
        return cd[t]
    })
}

function ir(e) {
    var t = Ct(e), s = t.pageXOffset, n = t.pageYOffset;
    return {scrollLeft: s, scrollTop: n}
}

function rr(e) {
    return ls(Ae(e)).left + ir(e).scrollLeft
}

function ud(e, t) {
    var s = Ct(e), n = Ae(e), i = s.visualViewport, r = n.clientWidth, o = n.clientHeight, l = 0, a = 0;
    if (i) {
        r = i.width, o = i.height;
        var d = Fl();
        (d || !d && t === "fixed") && (l = i.offsetLeft, a = i.offsetTop)
    }
    return {width: r, height: o, x: l + rr(e), y: a}
}

function fd(e) {
    var t, s = Ae(e), n = ir(e), i = (t = e.ownerDocument) == null ? void 0 : t.body,
        r = Me(s.scrollWidth, s.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
        o = Me(s.scrollHeight, s.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
        l = -n.scrollLeft + rr(e), a = -n.scrollTop;
    return ie(i || s).direction === "rtl" && (l += Me(s.clientWidth, i ? i.clientWidth : 0) - r), {
        width: r,
        height: o,
        x: l,
        y: a
    }
}

function or(e) {
    var t = ie(e), s = t.overflow, n = t.overflowX, i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(s + i + n)
}

function Yl(e) {
    return ["html", "body", "#document"].indexOf(Gt(e)) >= 0 ? e.ownerDocument.body : St(e) && or(e) ? e : Yl(Pn(e))
}

function Ls(e, t) {
    var s;
    t === void 0 && (t = []);
    var n = Yl(e), i = n === ((s = e.ownerDocument) == null ? void 0 : s.body), r = Ct(n),
        o = i ? [r].concat(r.visualViewport || [], or(n) ? n : []) : n, l = t.concat(o);
    return i ? l : l.concat(Ls(Pn(o)))
}

function Si(e) {
    return Object.assign({}, e, {left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height})
}

function dd(e, t) {
    var s = ls(e, !1, t === "fixed");
    return s.top = s.top + e.clientTop, s.left = s.left + e.clientLeft, s.bottom = s.top + e.clientHeight, s.right = s.left + e.clientWidth, s.width = e.clientWidth, s.height = e.clientHeight, s.x = s.left, s.y = s.top, s
}

function Zr(e, t, s) {
    return t === Xi ? Si(ud(e, s)) : ke(t) ? dd(t, s) : Si(fd(Ae(e)))
}

function hd(e) {
    var t = Ls(Pn(e)), s = ["absolute", "fixed"].indexOf(ie(e).position) >= 0, n = s && St(e) ? ks(e) : e;
    return ke(n) ? t.filter(function (i) {
        return ke(i) && jl(i, n) && Gt(i) !== "body"
    }) : []
}

function pd(e, t, s, n) {
    var i = t === "clippingParents" ? hd(e) : [].concat(t), r = [].concat(i, [s]), o = r[0],
        l = r.reduce(function (a, d) {
            var u = Zr(e, d, n);
            return a.top = Me(u.top, a.top), a.right = mn(u.right, a.right), a.bottom = mn(u.bottom, a.bottom), a.left = Me(u.left, a.left), a
        }, Zr(e, o, n));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
}

function zl(e) {
    var t = e.reference, s = e.element, n = e.placement, i = n ? Yt(n) : null, r = n ? as(n) : null,
        o = t.x + t.width / 2 - s.width / 2, l = t.y + t.height / 2 - s.height / 2, a;
    switch (i) {
        case pt:
            a = {x: o, y: t.y - s.height};
            break;
        case Tt:
            a = {x: o, y: t.y + t.height};
            break;
        case wt:
            a = {x: t.x + t.width, y: l};
            break;
        case _t:
            a = {x: t.x - s.width, y: l};
            break;
        default:
            a = {x: t.x, y: t.y}
    }
    var d = i ? er(i) : null;
    if (d != null) {
        var u = d === "y" ? "height" : "width";
        switch (r) {
            case Ve:
                a[d] = a[d] - (t[u] / 2 - s[u] / 2);
                break;
            case rs:
                a[d] = a[d] + (t[u] / 2 - s[u] / 2);
                break
        }
    }
    return a
}

function cs(e, t) {
    t === void 0 && (t = {});
    var s = t, n = s.placement, i = n === void 0 ? e.placement : n, r = s.strategy, o = r === void 0 ? e.strategy : r,
        l = s.boundary, a = l === void 0 ? Nl : l, d = s.rootBoundary, u = d === void 0 ? Xi : d, p = s.elementContext,
        m = p === void 0 ? Ge : p, y = s.altBoundary, P = y === void 0 ? !1 : y, C = s.padding,
        S = C === void 0 ? 0 : C, x = Kl(typeof S != "number" ? S : Bl(S, ps)), B = m === Ge ? xl : Ge,
        M = e.rects.popper, L = e.elements[P ? B : m],
        H = pd(ke(L) ? L : L.contextElement || Ae(e.elements.popper), a, u, o), N = ls(e.elements.reference),
        U = zl({reference: N, element: M, strategy: "absolute", placement: i}), X = Si(Object.assign({}, M, U)),
        tt = m === Ge ? X : N, Q = {
            top: H.top - tt.top + x.top,
            bottom: tt.bottom - H.bottom + x.bottom,
            left: H.left - tt.left + x.left,
            right: tt.right - H.right + x.right
        }, et = e.modifiersData.offset;
    if (m === Ge && et) {
        var ot = et[i];
        Object.keys(Q).forEach(function (nt) {
            var Lt = [wt, Tt].indexOf(nt) >= 0 ? 1 : -1, Ht = [pt, Tt].indexOf(nt) >= 0 ? "y" : "x";
            Q[nt] += ot[Ht] * Lt
        })
    }
    return Q
}

function _d(e, t) {
    t === void 0 && (t = {});
    var s = t, n = s.placement, i = s.boundary, r = s.rootBoundary, o = s.padding, l = s.flipVariations,
        a = s.allowedAutoPlacements, d = a === void 0 ? Qi : a, u = as(n), p = u ? l ? Ci : Ci.filter(function (P) {
            return as(P) === u
        }) : ps, m = p.filter(function (P) {
            return d.indexOf(P) >= 0
        });
    m.length === 0 && (m = p);
    var y = m.reduce(function (P, C) {
        return P[C] = cs(e, {placement: C, boundary: i, rootBoundary: r, padding: o})[Yt(C)], P
    }, {});
    return Object.keys(y).sort(function (P, C) {
        return y[P] - y[C]
    })
}

function gd(e) {
    if (Yt(e) === In) return [];
    var t = cn(e);
    return [Jr(e), t, Jr(t)]
}

function md(e) {
    var t = e.state, s = e.options, n = e.name;
    if (!t.modifiersData[n]._skip) {
        for (var i = s.mainAxis, r = i === void 0 ? !0 : i, o = s.altAxis, l = o === void 0 ? !0 : o, a = s.fallbackPlacements, d = s.padding, u = s.boundary, p = s.rootBoundary, m = s.altBoundary, y = s.flipVariations, P = y === void 0 ? !0 : y, C = s.allowedAutoPlacements, S = t.options.placement, x = Yt(S), B = x === S, M = a || (B || !P ? [cn(S)] : gd(S)), L = [S].concat(M).reduce(function (le, Ft) {
            return le.concat(Yt(Ft) === In ? _d(t, {
                placement: Ft,
                boundary: u,
                rootBoundary: p,
                padding: d,
                flipVariations: P,
                allowedAutoPlacements: C
            }) : Ft)
        }, []), H = t.rects.reference, N = t.rects.popper, U = new Map, X = !0, tt = L[0], Q = 0; Q < L.length; Q++) {
            var et = L[Q], ot = Yt(et), nt = as(et) === Ve, Lt = [pt, Tt].indexOf(ot) >= 0,
                Ht = Lt ? "width" : "height",
                q = cs(t, {placement: et, boundary: u, rootBoundary: p, altBoundary: m, padding: d}),
                W = Lt ? nt ? wt : _t : nt ? Tt : pt;
            H[Ht] > N[Ht] && (W = cn(W));
            var Y = cn(W), ut = [];
            if (r && ut.push(q[ot] <= 0), l && ut.push(q[W] <= 0, q[Y] <= 0), ut.every(function (le) {
                return le
            })) {
                tt = et, X = !1;
                break
            }
            U.set(et, ut)
        }
        if (X) for (var Xt = P ? 3 : 1, $t = function (Ft) {
            var ft = L.find(function (Qt) {
                var It = U.get(Qt);
                if (It) return It.slice(0, Ft).every(function (Ke) {
                    return Ke
                })
            });
            if (ft) return tt = ft, "break"
        }, lt = Xt; lt > 0; lt--) {
            var Ce = $t(lt);
            if (Ce === "break") break
        }
        t.placement !== tt && (t.modifiersData[n]._skip = !0, t.placement = tt, t.reset = !0)
    }
}

const Gl = {name: "flip", enabled: !0, phase: "main", fn: md, requiresIfExists: ["offset"], data: {_skip: !1}};

function to(e, t, s) {
    return s === void 0 && (s = {x: 0, y: 0}), {
        top: e.top - t.height - s.y,
        right: e.right - t.width + s.x,
        bottom: e.bottom - t.height + s.y,
        left: e.left - t.width - s.x
    }
}

function eo(e) {
    return [pt, wt, Tt, _t].some(function (t) {
        return e[t] >= 0
    })
}

function Ed(e) {
    var t = e.state, s = e.name, n = t.rects.reference, i = t.rects.popper, r = t.modifiersData.preventOverflow,
        o = cs(t, {elementContext: "reference"}), l = cs(t, {altBoundary: !0}), a = to(o, n), d = to(l, i, r),
        u = eo(a), p = eo(d);
    t.modifiersData[s] = {
        referenceClippingOffsets: a,
        popperEscapeOffsets: d,
        isReferenceHidden: u,
        hasPopperEscaped: p
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": u,
        "data-popper-escaped": p
    })
}

const ql = {name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Ed};

function vd(e, t, s) {
    var n = Yt(e), i = [_t, pt].indexOf(n) >= 0 ? -1 : 1,
        r = typeof s == "function" ? s(Object.assign({}, t, {placement: e})) : s, o = r[0], l = r[1];
    return o = o || 0, l = (l || 0) * i, [_t, wt].indexOf(n) >= 0 ? {x: l, y: o} : {x: o, y: l}
}

function bd(e) {
    var t = e.state, s = e.options, n = e.name, i = s.offset, r = i === void 0 ? [0, 0] : i,
        o = Qi.reduce(function (u, p) {
            return u[p] = vd(p, t.rects, r), u
        }, {}), l = o[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = o
}

const Xl = {name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: bd};

function yd(e) {
    var t = e.state, s = e.name;
    t.modifiersData[s] = zl({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}

const lr = {name: "popperOffsets", enabled: !0, phase: "read", fn: yd, data: {}};

function Ad(e) {
    return e === "x" ? "y" : "x"
}

function Td(e) {
    var t = e.state, s = e.options, n = e.name, i = s.mainAxis, r = i === void 0 ? !0 : i, o = s.altAxis,
        l = o === void 0 ? !1 : o, a = s.boundary, d = s.rootBoundary, u = s.altBoundary, p = s.padding, m = s.tether,
        y = m === void 0 ? !0 : m, P = s.tetherOffset, C = P === void 0 ? 0 : P,
        S = cs(t, {boundary: a, rootBoundary: d, padding: p, altBoundary: u}), x = Yt(t.placement), B = as(t.placement),
        M = !B, L = er(x), H = Ad(L), N = t.modifiersData.popperOffsets, U = t.rects.reference, X = t.rects.popper,
        tt = typeof C == "function" ? C(Object.assign({}, t.rects, {placement: t.placement})) : C,
        Q = typeof tt == "number" ? {mainAxis: tt, altAxis: tt} : Object.assign({mainAxis: 0, altAxis: 0}, tt),
        et = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ot = {x: 0, y: 0};
    if (N) {
        if (r) {
            var nt, Lt = L === "y" ? pt : _t, Ht = L === "y" ? Tt : wt, q = L === "y" ? "height" : "width", W = N[L],
                Y = W + S[Lt], ut = W - S[Ht], Xt = y ? -X[q] / 2 : 0, $t = B === Ve ? U[q] : X[q],
                lt = B === Ve ? -X[q] : -U[q], Ce = t.elements.arrow, le = y && Ce ? tr(Ce) : {width: 0, height: 0},
                Ft = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Wl(),
                ft = Ft[Lt], Qt = Ft[Ht], It = Ds(0, U[q], le[q]),
                Ke = M ? U[q] / 2 - Xt - It - ft - Q.mainAxis : $t - It - ft - Q.mainAxis,
                ae = M ? -U[q] / 2 + Xt + It + Qt + Q.mainAxis : lt + It + Qt + Q.mainAxis,
                Oe = t.elements.arrow && ks(t.elements.arrow),
                Es = Oe ? L === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0,
                c = (nt = et == null ? void 0 : et[L]) != null ? nt : 0, f = W + Ke - c - Es, h = W + ae - c,
                _ = Ds(y ? mn(Y, f) : Y, W, y ? Me(ut, h) : ut);
            N[L] = _, ot[L] = _ - W
        }
        if (l) {
            var g, A = L === "x" ? pt : _t, w = L === "x" ? Tt : wt, b = N[H], T = H === "y" ? "height" : "width",
                v = b + S[A], O = b - S[w], $ = [pt, _t].indexOf(x) !== -1,
                D = (g = et == null ? void 0 : et[H]) != null ? g : 0, R = $ ? v : b - U[T] - X[T] - D + Q.altAxis,
                j = $ ? b + U[T] + X[T] - D - Q.altAxis : O, z = y && $ ? td(R, b, j) : Ds(y ? R : v, b, y ? j : O);
            N[H] = z, ot[H] = z - b
        }
        t.modifiersData[n] = ot
    }
}

const Ql = {name: "preventOverflow", enabled: !0, phase: "main", fn: Td, requiresIfExists: ["offset"]};

function wd(e) {
    return {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop}
}

function Cd(e) {
    return e === Ct(e) || !St(e) ? ir(e) : wd(e)
}

function Od(e) {
    var t = e.getBoundingClientRect(), s = os(t.width) / e.offsetWidth || 1, n = os(t.height) / e.offsetHeight || 1;
    return s !== 1 || n !== 1
}

function Sd(e, t, s) {
    s === void 0 && (s = !1);
    var n = St(t), i = St(t) && Od(t), r = Ae(t), o = ls(e, i, s), l = {scrollLeft: 0, scrollTop: 0}, a = {x: 0, y: 0};
    return (n || !n && !s) && ((Gt(t) !== "body" || or(r)) && (l = Cd(t)), St(t) ? (a = ls(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : r && (a.x = rr(r))), {
        x: o.left + l.scrollLeft - a.x,
        y: o.top + l.scrollTop - a.y,
        width: o.width,
        height: o.height
    }
}

function Nd(e) {
    var t = new Map, s = new Set, n = [];
    e.forEach(function (r) {
        t.set(r.name, r)
    });

    function i(r) {
        s.add(r.name);
        var o = [].concat(r.requires || [], r.requiresIfExists || []);
        o.forEach(function (l) {
            if (!s.has(l)) {
                var a = t.get(l);
                a && i(a)
            }
        }), n.push(r)
    }

    return e.forEach(function (r) {
        s.has(r.name) || i(r)
    }), n
}

function xd(e) {
    var t = Nd(e);
    return Hl.reduce(function (s, n) {
        return s.concat(t.filter(function (i) {
            return i.phase === n
        }))
    }, [])
}

function Dd(e) {
    var t;
    return function () {
        return t || (t = new Promise(function (s) {
            Promise.resolve().then(function () {
                t = void 0, s(e())
            })
        })), t
    }
}

function Ld(e) {
    var t = e.reduce(function (s, n) {
        var i = s[n.name];
        return s[n.name] = i ? Object.assign({}, i, n, {
            options: Object.assign({}, i.options, n.options),
            data: Object.assign({}, i.data, n.data)
        }) : n, s
    }, {});
    return Object.keys(t).map(function (s) {
        return t[s]
    })
}

var so = {placement: "bottom", modifiers: [], strategy: "absolute"};

function no() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
    return !t.some(function (n) {
        return !(n && typeof n.getBoundingClientRect == "function")
    })
}

function Mn(e) {
    e === void 0 && (e = {});
    var t = e, s = t.defaultModifiers, n = s === void 0 ? [] : s, i = t.defaultOptions, r = i === void 0 ? so : i;
    return function (l, a, d) {
        d === void 0 && (d = r);
        var u = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, so, r),
            modifiersData: {},
            elements: {reference: l, popper: a},
            attributes: {},
            styles: {}
        }, p = [], m = !1, y = {
            state: u, setOptions: function (x) {
                var B = typeof x == "function" ? x(u.options) : x;
                C(), u.options = Object.assign({}, r, u.options, B), u.scrollParents = {
                    reference: ke(l) ? Ls(l) : l.contextElement ? Ls(l.contextElement) : [],
                    popper: Ls(a)
                };
                var M = xd(Ld([].concat(n, u.options.modifiers)));
                return u.orderedModifiers = M.filter(function (L) {
                    return L.enabled
                }), P(), y.update()
            }, forceUpdate: function () {
                if (!m) {
                    var x = u.elements, B = x.reference, M = x.popper;
                    if (no(B, M)) {
                        u.rects = {
                            reference: Sd(B, ks(M), u.options.strategy === "fixed"),
                            popper: tr(M)
                        }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function (Q) {
                            return u.modifiersData[Q.name] = Object.assign({}, Q.data)
                        });
                        for (var L = 0; L < u.orderedModifiers.length; L++) {
                            if (u.reset === !0) {
                                u.reset = !1, L = -1;
                                continue
                            }
                            var H = u.orderedModifiers[L], N = H.fn, U = H.options, X = U === void 0 ? {} : U,
                                tt = H.name;
                            typeof N == "function" && (u = N({state: u, options: X, name: tt, instance: y}) || u)
                        }
                    }
                }
            }, update: Dd(function () {
                return new Promise(function (S) {
                    y.forceUpdate(), S(u)
                })
            }), destroy: function () {
                C(), m = !0
            }
        };
        if (!no(l, a)) return y;
        y.setOptions(d).then(function (S) {
            !m && d.onFirstUpdate && d.onFirstUpdate(S)
        });

        function P() {
            u.orderedModifiers.forEach(function (S) {
                var x = S.name, B = S.options, M = B === void 0 ? {} : B, L = S.effect;
                if (typeof L == "function") {
                    var H = L({state: u, name: x, instance: y, options: M}), N = function () {
                    };
                    p.push(H || N)
                }
            })
        }

        function C() {
            p.forEach(function (S) {
                return S()
            }), p = []
        }

        return y
    }
}

var $d = Mn(), Id = [nr, lr, sr, Zi], Pd = Mn({defaultModifiers: Id}), Md = [nr, lr, sr, Zi, Xl, Gl, Ql, Ul, ql],
    ar = Mn({defaultModifiers: Md});
const Jl = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterMain: Ml,
    afterRead: $l,
    afterWrite: kl,
    applyStyles: Zi,
    arrow: Ul,
    auto: In,
    basePlacements: ps,
    beforeMain: Il,
    beforeRead: Dl,
    beforeWrite: Rl,
    bottom: Tt,
    clippingParents: Nl,
    computeStyles: sr,
    createPopper: ar,
    createPopperBase: $d,
    createPopperLite: Pd,
    detectOverflow: cs,
    end: rs,
    eventListeners: nr,
    flip: Gl,
    hide: ql,
    left: _t,
    main: Pl,
    modifierPhases: Hl,
    offset: Xl,
    placements: Qi,
    popper: Ge,
    popperGenerator: Mn,
    popperOffsets: lr,
    preventOverflow: Ql,
    read: Ll,
    reference: xl,
    right: wt,
    start: Ve,
    top: pt,
    variationPlacements: Ci,
    viewport: Xi,
    write: Vl
}, Symbol.toStringTag, {value: "Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ue = new Map, Qn = {
        set(e, t, s) {
            ue.has(e) || ue.set(e, new Map);
            const n = ue.get(e);
            if (!n.has(t) && n.size !== 0) {
                console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
                return
            }
            n.set(t, s)
        }, get(e, t) {
            return ue.has(e) && ue.get(e).get(t) || null
        }, remove(e, t) {
            if (!ue.has(e)) return;
            const s = ue.get(e);
            s.delete(t), s.size === 0 && ue.delete(e)
        }
    }, Rd = 1e6, Vd = 1e3, Ni = "transitionend",
    Zl = e => (e && window.CSS && window.CSS.escape && (e = e.replace(/#([^\s"#']+)/g, (t, s) => `#${CSS.escape(s)}`)), e),
    kd = e => e == null ? `${e}` : Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(), Hd = e => {
        do e += Math.floor(Math.random() * Rd); while (document.getElementById(e));
        return e
    }, Fd = e => {
        if (!e) return 0;
        let {transitionDuration: t, transitionDelay: s} = window.getComputedStyle(e);
        const n = Number.parseFloat(t), i = Number.parseFloat(s);
        return !n && !i ? 0 : (t = t.split(",")[0], s = s.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(s)) * Vd)
    }, ta = e => {
        e.dispatchEvent(new Event(Ni))
    }, se = e => !e || typeof e != "object" ? !1 : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"),
    ve = e => se(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(Zl(e)) : null,
    _s = e => {
        if (!se(e) || e.getClientRects().length === 0) return !1;
        const t = getComputedStyle(e).getPropertyValue("visibility") === "visible",
            s = e.closest("details:not([open])");
        if (!s) return t;
        if (s !== e) {
            const n = e.closest("summary");
            if (n && n.parentNode !== s || n === null) return !1
        }
        return t
    },
    be = e => !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled") ? !0 : typeof e.disabled < "u" ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
    ea = e => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof e.getRootNode == "function") {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? ea(e.parentNode) : null
    }, En = () => {
    }, Hs = e => {
        e.offsetHeight
    }, sa = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Jn = [],
    jd = e => {
        document.readyState === "loading" ? (Jn.length || document.addEventListener("DOMContentLoaded", () => {
            for (const t of Jn) t()
        }), Jn.push(e)) : e()
    }, Nt = () => document.documentElement.dir === "rtl", Dt = e => {
        jd(() => {
            const t = sa();
            if (t) {
                const s = e.NAME, n = t.fn[s];
                t.fn[s] = e.jQueryInterface, t.fn[s].Constructor = e, t.fn[s].noConflict = () => (t.fn[s] = n, e.jQueryInterface)
            }
        })
    }, mt = (e, t = [], s = e) => typeof e == "function" ? e(...t) : s, na = (e, t, s = !0) => {
        if (!s) {
            mt(e);
            return
        }
        const i = Fd(t) + 5;
        let r = !1;
        const o = ({target: l}) => {
            l === t && (r = !0, t.removeEventListener(Ni, o), mt(e))
        };
        t.addEventListener(Ni, o), setTimeout(() => {
            r || ta(t)
        }, i)
    }, cr = (e, t, s, n) => {
        const i = e.length;
        let r = e.indexOf(t);
        return r === -1 ? !s && n ? e[i - 1] : e[0] : (r += s ? 1 : -1, n && (r = (r + i) % i), e[Math.max(0, Math.min(r, i - 1))])
    }, Wd = /[^.]*(?=\..*)\.|.*/, Kd = /\..*/, Bd = /::\d+$/, Zn = {};
let io = 1;
const ia = {mouseenter: "mouseover", mouseleave: "mouseout"},
    Ud = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

function ra(e, t) {
    return t && `${t}::${io++}` || e.uidEvent || io++
}

function oa(e) {
    const t = ra(e);
    return e.uidEvent = t, Zn[t] = Zn[t] || {}, Zn[t]
}

function Yd(e, t) {
    return function s(n) {
        return ur(n, {delegateTarget: e}), s.oneOff && E.off(e, n.type, t), t.apply(e, [n])
    }
}

function zd(e, t, s) {
    return function n(i) {
        const r = e.querySelectorAll(t);
        for (let {target: o} = i; o && o !== this; o = o.parentNode) for (const l of r) if (l === o) return ur(i, {delegateTarget: o}), n.oneOff && E.off(e, i.type, t, s), s.apply(o, [i])
    }
}

function la(e, t, s = null) {
    return Object.values(e).find(n => n.callable === t && n.delegationSelector === s)
}

function aa(e, t, s) {
    const n = typeof t == "string", i = n ? s : t || s;
    let r = ca(e);
    return Ud.has(r) || (r = e), [n, i, r]
}

function ro(e, t, s, n, i) {
    if (typeof t != "string" || !e) return;
    let [r, o, l] = aa(t, s, n);
    t in ia && (o = (P => function (C) {
        if (!C.relatedTarget || C.relatedTarget !== C.delegateTarget && !C.delegateTarget.contains(C.relatedTarget)) return P.call(this, C)
    })(o));
    const a = oa(e), d = a[l] || (a[l] = {}), u = la(d, o, r ? s : null);
    if (u) {
        u.oneOff = u.oneOff && i;
        return
    }
    const p = ra(o, t.replace(Wd, "")), m = r ? zd(e, s, o) : Yd(e, o);
    m.delegationSelector = r ? s : null, m.callable = o, m.oneOff = i, m.uidEvent = p, d[p] = m, e.addEventListener(l, m, r)
}

function xi(e, t, s, n, i) {
    const r = la(t[s], n, i);
    r && (e.removeEventListener(s, r, !!i), delete t[s][r.uidEvent])
}

function Gd(e, t, s, n) {
    const i = t[s] || {};
    for (const [r, o] of Object.entries(i)) r.includes(n) && xi(e, t, s, o.callable, o.delegationSelector)
}

function ca(e) {
    return e = e.replace(Kd, ""), ia[e] || e
}

const E = {
    on(e, t, s, n) {
        ro(e, t, s, n, !1)
    }, one(e, t, s, n) {
        ro(e, t, s, n, !0)
    }, off(e, t, s, n) {
        if (typeof t != "string" || !e) return;
        const [i, r, o] = aa(t, s, n), l = o !== t, a = oa(e), d = a[o] || {}, u = t.startsWith(".");
        if (typeof r < "u") {
            if (!Object.keys(d).length) return;
            xi(e, a, o, r, i ? s : null);
            return
        }
        if (u) for (const p of Object.keys(a)) Gd(e, a, p, t.slice(1));
        for (const [p, m] of Object.entries(d)) {
            const y = p.replace(Bd, "");
            (!l || t.includes(y)) && xi(e, a, o, m.callable, m.delegationSelector)
        }
    }, trigger(e, t, s) {
        if (typeof t != "string" || !e) return null;
        const n = sa(), i = ca(t), r = t !== i;
        let o = null, l = !0, a = !0, d = !1;
        r && n && (o = n.Event(t, s), n(e).trigger(o), l = !o.isPropagationStopped(), a = !o.isImmediatePropagationStopped(), d = o.isDefaultPrevented());
        const u = ur(new Event(t, {bubbles: l, cancelable: !0}), s);
        return d && u.preventDefault(), a && e.dispatchEvent(u), u.defaultPrevented && o && o.preventDefault(), u
    }
};

function ur(e, t = {}) {
    for (const [s, n] of Object.entries(t)) try {
        e[s] = n
    } catch {
        Object.defineProperty(e, s, {
            configurable: !0, get() {
                return n
            }
        })
    }
    return e
}

function oo(e) {
    if (e === "true") return !0;
    if (e === "false") return !1;
    if (e === Number(e).toString()) return Number(e);
    if (e === "" || e === "null") return null;
    if (typeof e != "string") return e;
    try {
        return JSON.parse(decodeURIComponent(e))
    } catch {
        return e
    }
}

function ti(e) {
    return e.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
}

const ne = {
    setDataAttribute(e, t, s) {
        e.setAttribute(`data-bs-${ti(t)}`, s)
    }, removeDataAttribute(e, t) {
        e.removeAttribute(`data-bs-${ti(t)}`)
    }, getDataAttributes(e) {
        if (!e) return {};
        const t = {}, s = Object.keys(e.dataset).filter(n => n.startsWith("bs") && !n.startsWith("bsConfig"));
        for (const n of s) {
            let i = n.replace(/^bs/, "");
            i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = oo(e.dataset[n])
        }
        return t
    }, getDataAttribute(e, t) {
        return oo(e.getAttribute(`data-bs-${ti(t)}`))
    }
};

class Fs {
    static get Default() {
        return {}
    }

    static get DefaultType() {
        return {}
    }

    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!')
    }

    _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }

    _configAfterMerge(t) {
        return t
    }

    _mergeConfigObj(t, s) {
        const n = se(s) ? ne.getDataAttribute(s, "config") : {};
        return {...this.constructor.Default, ...typeof n == "object" ? n : {}, ...se(s) ? ne.getDataAttributes(s) : {}, ...typeof t == "object" ? t : {}}
    }

    _typeCheckConfig(t, s = this.constructor.DefaultType) {
        for (const [n, i] of Object.entries(s)) {
            const r = t[n], o = se(r) ? "element" : kd(r);
            if (!new RegExp(i).test(o)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`)
        }
    }
}

const qd = "5.3.2";

class kt extends Fs {
    constructor(t, s) {
        super(), t = ve(t), t && (this._element = t, this._config = this._getConfig(s), Qn.set(this._element, this.constructor.DATA_KEY, this))
    }

    dispose() {
        Qn.remove(this._element, this.constructor.DATA_KEY), E.off(this._element, this.constructor.EVENT_KEY);
        for (const t of Object.getOwnPropertyNames(this)) this[t] = null
    }

    _queueCallback(t, s, n = !0) {
        na(t, s, n)
    }

    _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }

    static getInstance(t) {
        return Qn.get(ve(t), this.DATA_KEY)
    }

    static getOrCreateInstance(t, s = {}) {
        return this.getInstance(t) || new this(t, typeof s == "object" ? s : null)
    }

    static get VERSION() {
        return qd
    }

    static get DATA_KEY() {
        return `bs.${this.NAME}`
    }

    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`
    }

    static eventName(t) {
        return `${t}${this.EVENT_KEY}`
    }
}

const ei = e => {
    let t = e.getAttribute("data-bs-target");
    if (!t || t === "#") {
        let s = e.getAttribute("href");
        if (!s || !s.includes("#") && !s.startsWith(".")) return null;
        s.includes("#") && !s.startsWith("#") && (s = `#${s.split("#")[1]}`), t = s && s !== "#" ? Zl(s.trim()) : null
    }
    return t
}, I = {
    find(e, t = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(t, e))
    }, findOne(e, t = document.documentElement) {
        return Element.prototype.querySelector.call(t, e)
    }, children(e, t) {
        return [].concat(...e.children).filter(s => s.matches(t))
    }, parents(e, t) {
        const s = [];
        let n = e.parentNode.closest(t);
        for (; n;) s.push(n), n = n.parentNode.closest(t);
        return s
    }, prev(e, t) {
        let s = e.previousElementSibling;
        for (; s;) {
            if (s.matches(t)) return [s];
            s = s.previousElementSibling
        }
        return []
    }, next(e, t) {
        let s = e.nextElementSibling;
        for (; s;) {
            if (s.matches(t)) return [s];
            s = s.nextElementSibling
        }
        return []
    }, focusableChildren(e) {
        const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(s => `${s}:not([tabindex^="-"])`).join(",");
        return this.find(t, e).filter(s => !be(s) && _s(s))
    }, getSelectorFromElement(e) {
        const t = ei(e);
        return t && I.findOne(t) ? t : null
    }, getElementFromSelector(e) {
        const t = ei(e);
        return t ? I.findOne(t) : null
    }, getMultipleElementsFromSelector(e) {
        const t = ei(e);
        return t ? I.find(t) : []
    }
}, Rn = (e, t = "hide") => {
    const s = `click.dismiss${e.EVENT_KEY}`, n = e.NAME;
    E.on(document, s, `[data-bs-dismiss="${n}"]`, function (i) {
        if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), be(this)) return;
        const r = I.getElementFromSelector(this) || this.closest(`.${n}`);
        e.getOrCreateInstance(r)[t]()
    })
}, Xd = "alert", Qd = "bs.alert", ua = `.${Qd}`, Jd = `close${ua}`, Zd = `closed${ua}`, th = "fade", eh = "show";

class Vn extends kt {
    static get NAME() {
        return Xd
    }

    close() {
        if (E.trigger(this._element, Jd).defaultPrevented) return;
        this._element.classList.remove(eh);
        const s = this._element.classList.contains(th);
        this._queueCallback(() => this._destroyElement(), this._element, s)
    }

    _destroyElement() {
        this._element.remove(), E.trigger(this._element, Zd), this.dispose()
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = Vn.getOrCreateInstance(this);
            if (typeof t == "string") {
                if (s[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                s[t](this)
            }
        })
    }
}

Rn(Vn, "close");
Dt(Vn);
const sh = "button", nh = "bs.button", ih = `.${nh}`, rh = ".data-api", oh = "active", lo = '[data-bs-toggle="button"]',
    lh = `click${ih}${rh}`;

class kn extends kt {
    static get NAME() {
        return sh
    }

    toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(oh))
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = kn.getOrCreateInstance(this);
            t === "toggle" && s[t]()
        })
    }
}

E.on(document, lh, lo, e => {
    e.preventDefault();
    const t = e.target.closest(lo);
    kn.getOrCreateInstance(t).toggle()
});
Dt(kn);
const ah = "swipe", gs = ".bs.swipe", ch = `touchstart${gs}`, uh = `touchmove${gs}`, fh = `touchend${gs}`,
    dh = `pointerdown${gs}`, hh = `pointerup${gs}`, ph = "touch", _h = "pen", gh = "pointer-event", mh = 40,
    Eh = {endCallback: null, leftCallback: null, rightCallback: null},
    vh = {endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)"};

class vn extends Fs {
    constructor(t, s) {
        super(), this._element = t, !(!t || !vn.isSupported()) && (this._config = this._getConfig(s), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents())
    }

    static get Default() {
        return Eh
    }

    static get DefaultType() {
        return vh
    }

    static get NAME() {
        return ah
    }

    dispose() {
        E.off(this._element, gs)
    }

    _start(t) {
        if (!this._supportPointerEvents) {
            this._deltaX = t.touches[0].clientX;
            return
        }
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
    }

    _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), mt(this._config.endCallback)
    }

    _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
    }

    _handleSwipe() {
        const t = Math.abs(this._deltaX);
        if (t <= mh) return;
        const s = t / this._deltaX;
        this._deltaX = 0, s && mt(s > 0 ? this._config.rightCallback : this._config.leftCallback)
    }

    _initEvents() {
        this._supportPointerEvents ? (E.on(this._element, dh, t => this._start(t)), E.on(this._element, hh, t => this._end(t)), this._element.classList.add(gh)) : (E.on(this._element, ch, t => this._start(t)), E.on(this._element, uh, t => this._move(t)), E.on(this._element, fh, t => this._end(t)))
    }

    _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && (t.pointerType === _h || t.pointerType === ph)
    }

    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    }
}

const bh = "carousel", yh = "bs.carousel", Te = `.${yh}`, fa = ".data-api", Ah = "ArrowLeft", Th = "ArrowRight",
    wh = 500, Ts = "next", Ue = "prev", qe = "left", un = "right", Ch = `slide${Te}`, si = `slid${Te}`,
    Oh = `keydown${Te}`, Sh = `mouseenter${Te}`, Nh = `mouseleave${Te}`, xh = `dragstart${Te}`, Dh = `load${Te}${fa}`,
    Lh = `click${Te}${fa}`, da = "carousel", Qs = "active", $h = "slide", Ih = "carousel-item-end",
    Ph = "carousel-item-start", Mh = "carousel-item-next", Rh = "carousel-item-prev", ha = ".active",
    pa = ".carousel-item", Vh = ha + pa, kh = ".carousel-item img", Hh = ".carousel-indicators",
    Fh = "[data-bs-slide], [data-bs-slide-to]", jh = '[data-bs-ride="carousel"]', Wh = {[Ah]: un, [Th]: qe},
    Kh = {interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0}, Bh = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };

class js extends kt {
    constructor(t, s) {
        super(t, s), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = I.findOne(Hh, this._element), this._addEventListeners(), this._config.ride === da && this.cycle()
    }

    static get Default() {
        return Kh
    }

    static get DefaultType() {
        return Bh
    }

    static get NAME() {
        return bh
    }

    next() {
        this._slide(Ts)
    }

    nextWhenVisible() {
        !document.hidden && _s(this._element) && this.next()
    }

    prev() {
        this._slide(Ue)
    }

    pause() {
        this._isSliding && ta(this._element), this._clearInterval()
    }

    cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
    }

    _maybeEnableCycle() {
        if (this._config.ride) {
            if (this._isSliding) {
                E.one(this._element, si, () => this.cycle());
                return
            }
            this.cycle()
        }
    }

    to(t) {
        const s = this._getItems();
        if (t > s.length - 1 || t < 0) return;
        if (this._isSliding) {
            E.one(this._element, si, () => this.to(t));
            return
        }
        const n = this._getItemIndex(this._getActive());
        if (n === t) return;
        const i = t > n ? Ts : Ue;
        this._slide(i, s[t])
    }

    dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
    }

    _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t
    }

    _addEventListeners() {
        this._config.keyboard && E.on(this._element, Oh, t => this._keydown(t)), this._config.pause === "hover" && (E.on(this._element, Sh, () => this.pause()), E.on(this._element, Nh, () => this._maybeEnableCycle())), this._config.touch && vn.isSupported() && this._addTouchEventListeners()
    }

    _addTouchEventListeners() {
        for (const n of I.find(kh, this._element)) E.on(n, xh, i => i.preventDefault());
        const s = {
            leftCallback: () => this._slide(this._directionToOrder(qe)),
            rightCallback: () => this._slide(this._directionToOrder(un)),
            endCallback: () => {
                this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), wh + this._config.interval))
            }
        };
        this._swipeHelper = new vn(this._element, s)
    }

    _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        const s = Wh[t.key];
        s && (t.preventDefault(), this._slide(this._directionToOrder(s)))
    }

    _getItemIndex(t) {
        return this._getItems().indexOf(t)
    }

    _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        const s = I.findOne(ha, this._indicatorsElement);
        s.classList.remove(Qs), s.removeAttribute("aria-current");
        const n = I.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
        n && (n.classList.add(Qs), n.setAttribute("aria-current", "true"))
    }

    _updateInterval() {
        const t = this._activeElement || this._getActive();
        if (!t) return;
        const s = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = s || this._config.defaultInterval
    }

    _slide(t, s = null) {
        if (this._isSliding) return;
        const n = this._getActive(), i = t === Ts, r = s || cr(this._getItems(), n, i, this._config.wrap);
        if (r === n) return;
        const o = this._getItemIndex(r), l = y => E.trigger(this._element, y, {
            relatedTarget: r,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(n),
            to: o
        });
        if (l(Ch).defaultPrevented || !n || !r) return;
        const d = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = r;
        const u = i ? Ph : Ih, p = i ? Mh : Rh;
        r.classList.add(p), Hs(r), n.classList.add(u), r.classList.add(u);
        const m = () => {
            r.classList.remove(u, p), r.classList.add(Qs), n.classList.remove(Qs, p, u), this._isSliding = !1, l(si)
        };
        this._queueCallback(m, n, this._isAnimated()), d && this.cycle()
    }

    _isAnimated() {
        return this._element.classList.contains($h)
    }

    _getActive() {
        return I.findOne(Vh, this._element)
    }

    _getItems() {
        return I.find(pa, this._element)
    }

    _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null)
    }

    _directionToOrder(t) {
        return Nt() ? t === qe ? Ue : Ts : t === qe ? Ts : Ue
    }

    _orderToDirection(t) {
        return Nt() ? t === Ue ? qe : un : t === Ue ? un : qe
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = js.getOrCreateInstance(this, t);
            if (typeof t == "number") {
                s.to(t);
                return
            }
            if (typeof t == "string") {
                if (s[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                s[t]()
            }
        })
    }
}

E.on(document, Lh, Fh, function (e) {
    const t = I.getElementFromSelector(this);
    if (!t || !t.classList.contains(da)) return;
    e.preventDefault();
    const s = js.getOrCreateInstance(t), n = this.getAttribute("data-bs-slide-to");
    if (n) {
        s.to(n), s._maybeEnableCycle();
        return
    }
    if (ne.getDataAttribute(this, "slide") === "next") {
        s.next(), s._maybeEnableCycle();
        return
    }
    s.prev(), s._maybeEnableCycle()
});
E.on(window, Dh, () => {
    const e = I.find(jh);
    for (const t of e) js.getOrCreateInstance(t)
});
Dt(js);
const Uh = "collapse", Yh = "bs.collapse", Ws = `.${Yh}`, zh = ".data-api", Gh = `show${Ws}`, qh = `shown${Ws}`,
    Xh = `hide${Ws}`, Qh = `hidden${Ws}`, Jh = `click${Ws}${zh}`, ni = "show", Qe = "collapse", Js = "collapsing",
    Zh = "collapsed", tp = `:scope .${Qe} .${Qe}`, ep = "collapse-horizontal", sp = "width", np = "height",
    ip = ".collapse.show, .collapse.collapsing", Di = '[data-bs-toggle="collapse"]', rp = {parent: null, toggle: !0},
    op = {parent: "(null|element)", toggle: "boolean"};

class Rs extends kt {
    constructor(t, s) {
        super(t, s), this._isTransitioning = !1, this._triggerArray = [];
        const n = I.find(Di);
        for (const i of n) {
            const r = I.getSelectorFromElement(i), o = I.find(r).filter(l => l === this._element);
            r !== null && o.length && this._triggerArray.push(i)
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
    }

    static get Default() {
        return rp
    }

    static get DefaultType() {
        return op
    }

    static get NAME() {
        return Uh
    }

    toggle() {
        this._isShown() ? this.hide() : this.show()
    }

    show() {
        if (this._isTransitioning || this._isShown()) return;
        let t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(ip).filter(l => l !== this._element).map(l => Rs.getOrCreateInstance(l, {toggle: !1}))), t.length && t[0]._isTransitioning || E.trigger(this._element, Gh).defaultPrevented) return;
        for (const l of t) l.hide();
        const n = this._getDimension();
        this._element.classList.remove(Qe), this._element.classList.add(Js), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const i = () => {
            this._isTransitioning = !1, this._element.classList.remove(Js), this._element.classList.add(Qe, ni), this._element.style[n] = "", E.trigger(this._element, qh)
        }, o = `scroll${n[0].toUpperCase() + n.slice(1)}`;
        this._queueCallback(i, this._element, !0), this._element.style[n] = `${this._element[o]}px`
    }

    hide() {
        if (this._isTransitioning || !this._isShown() || E.trigger(this._element, Xh).defaultPrevented) return;
        const s = this._getDimension();
        this._element.style[s] = `${this._element.getBoundingClientRect()[s]}px`, Hs(this._element), this._element.classList.add(Js), this._element.classList.remove(Qe, ni);
        for (const i of this._triggerArray) {
            const r = I.getElementFromSelector(i);
            r && !this._isShown(r) && this._addAriaAndCollapsedClass([i], !1)
        }
        this._isTransitioning = !0;
        const n = () => {
            this._isTransitioning = !1, this._element.classList.remove(Js), this._element.classList.add(Qe), E.trigger(this._element, Qh)
        };
        this._element.style[s] = "", this._queueCallback(n, this._element, !0)
    }

    _isShown(t = this._element) {
        return t.classList.contains(ni)
    }

    _configAfterMerge(t) {
        return t.toggle = !!t.toggle, t.parent = ve(t.parent), t
    }

    _getDimension() {
        return this._element.classList.contains(ep) ? sp : np
    }

    _initializeChildren() {
        if (!this._config.parent) return;
        const t = this._getFirstLevelChildren(Di);
        for (const s of t) {
            const n = I.getElementFromSelector(s);
            n && this._addAriaAndCollapsedClass([s], this._isShown(n))
        }
    }

    _getFirstLevelChildren(t) {
        const s = I.find(tp, this._config.parent);
        return I.find(t, this._config.parent).filter(n => !s.includes(n))
    }

    _addAriaAndCollapsedClass(t, s) {
        if (t.length) for (const n of t) n.classList.toggle(Zh, !s), n.setAttribute("aria-expanded", s)
    }

    static jQueryInterface(t) {
        const s = {};
        return typeof t == "string" && /show|hide/.test(t) && (s.toggle = !1), this.each(function () {
            const n = Rs.getOrCreateInstance(this, s);
            if (typeof t == "string") {
                if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
                n[t]()
            }
        })
    }
}

E.on(document, Jh, Di, function (e) {
    (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
    for (const t of I.getMultipleElementsFromSelector(this)) Rs.getOrCreateInstance(t, {toggle: !1}).toggle()
});
Dt(Rs);
const ao = "dropdown", lp = "bs.dropdown", je = `.${lp}`, fr = ".data-api", ap = "Escape", co = "Tab", cp = "ArrowUp",
    uo = "ArrowDown", up = 2, fp = `hide${je}`, dp = `hidden${je}`, hp = `show${je}`, pp = `shown${je}`,
    _a = `click${je}${fr}`, ga = `keydown${je}${fr}`, _p = `keyup${je}${fr}`, Xe = "show", gp = "dropup",
    mp = "dropend", Ep = "dropstart", vp = "dropup-center", bp = "dropdown-center",
    Le = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', yp = `${Le}.${Xe}`, fn = ".dropdown-menu",
    Ap = ".navbar", Tp = ".navbar-nav", wp = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    Cp = Nt() ? "top-end" : "top-start", Op = Nt() ? "top-start" : "top-end", Sp = Nt() ? "bottom-end" : "bottom-start",
    Np = Nt() ? "bottom-start" : "bottom-end", xp = Nt() ? "left-start" : "right-start",
    Dp = Nt() ? "right-start" : "left-start", Lp = "top", $p = "bottom", Ip = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    }, Pp = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };

class zt extends kt {
    constructor(t, s) {
        super(t, s), this._popper = null, this._parent = this._element.parentNode, this._menu = I.next(this._element, fn)[0] || I.prev(this._element, fn)[0] || I.findOne(fn, this._parent), this._inNavbar = this._detectNavbar()
    }

    static get Default() {
        return Ip
    }

    static get DefaultType() {
        return Pp
    }

    static get NAME() {
        return ao
    }

    toggle() {
        return this._isShown() ? this.hide() : this.show()
    }

    show() {
        if (be(this._element) || this._isShown()) return;
        const t = {relatedTarget: this._element};
        if (!E.trigger(this._element, hp, t).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(Tp)) for (const n of [].concat(...document.body.children)) E.on(n, "mouseover", En);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Xe), this._element.classList.add(Xe), E.trigger(this._element, pp, t)
        }
    }

    hide() {
        if (be(this._element) || !this._isShown()) return;
        const t = {relatedTarget: this._element};
        this._completeHide(t)
    }

    dispose() {
        this._popper && this._popper.destroy(), super.dispose()
    }

    update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
    }

    _completeHide(t) {
        if (!E.trigger(this._element, fp, t).defaultPrevented) {
            if ("ontouchstart" in document.documentElement) for (const n of [].concat(...document.body.children)) E.off(n, "mouseover", En);
            this._popper && this._popper.destroy(), this._menu.classList.remove(Xe), this._element.classList.remove(Xe), this._element.setAttribute("aria-expanded", "false"), ne.removeDataAttribute(this._menu, "popper"), E.trigger(this._element, dp, t)
        }
    }

    _getConfig(t) {
        if (t = super._getConfig(t), typeof t.reference == "object" && !se(t.reference) && typeof t.reference.getBoundingClientRect != "function") throw new TypeError(`${ao.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return t
    }

    _createPopper() {
        if (typeof Jl > "u") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let t = this._element;
        this._config.reference === "parent" ? t = this._parent : se(this._config.reference) ? t = ve(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
        const s = this._getPopperConfig();
        this._popper = ar(t, this._menu, s)
    }

    _isShown() {
        return this._menu.classList.contains(Xe)
    }

    _getPlacement() {
        const t = this._parent;
        if (t.classList.contains(mp)) return xp;
        if (t.classList.contains(Ep)) return Dp;
        if (t.classList.contains(vp)) return Lp;
        if (t.classList.contains(bp)) return $p;
        const s = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return t.classList.contains(gp) ? s ? Op : Cp : s ? Np : Sp
    }

    _detectNavbar() {
        return this._element.closest(Ap) !== null
    }

    _getOffset() {
        const {offset: t} = this._config;
        return typeof t == "string" ? t.split(",").map(s => Number.parseInt(s, 10)) : typeof t == "function" ? s => t(s, this._element) : t
    }

    _getPopperConfig() {
        const t = {
            placement: this._getPlacement(),
            modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                name: "offset",
                options: {offset: this._getOffset()}
            }]
        };
        return (this._inNavbar || this._config.display === "static") && (ne.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
            name: "applyStyles",
            enabled: !1
        }]), {...t, ...mt(this._config.popperConfig, [t])}
    }

    _selectMenuItem({key: t, target: s}) {
        const n = I.find(wp, this._menu).filter(i => _s(i));
        n.length && cr(n, s, t === uo, !n.includes(s)).focus()
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = zt.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                s[t]()
            }
        })
    }

    static clearMenus(t) {
        if (t.button === up || t.type === "keyup" && t.key !== co) return;
        const s = I.find(yp);
        for (const n of s) {
            const i = zt.getInstance(n);
            if (!i || i._config.autoClose === !1) continue;
            const r = t.composedPath(), o = r.includes(i._menu);
            if (r.includes(i._element) || i._config.autoClose === "inside" && !o || i._config.autoClose === "outside" && o || i._menu.contains(t.target) && (t.type === "keyup" && t.key === co || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            const l = {relatedTarget: i._element};
            t.type === "click" && (l.clickEvent = t), i._completeHide(l)
        }
    }

    static dataApiKeydownHandler(t) {
        const s = /input|textarea/i.test(t.target.tagName), n = t.key === ap, i = [cp, uo].includes(t.key);
        if (!i && !n || s && !n) return;
        t.preventDefault();
        const r = this.matches(Le) ? this : I.prev(this, Le)[0] || I.next(this, Le)[0] || I.findOne(Le, t.delegateTarget.parentNode),
            o = zt.getOrCreateInstance(r);
        if (i) {
            t.stopPropagation(), o.show(), o._selectMenuItem(t);
            return
        }
        o._isShown() && (t.stopPropagation(), o.hide(), r.focus())
    }
}

E.on(document, ga, Le, zt.dataApiKeydownHandler);
E.on(document, ga, fn, zt.dataApiKeydownHandler);
E.on(document, _a, zt.clearMenus);
E.on(document, _p, zt.clearMenus);
E.on(document, _a, Le, function (e) {
    e.preventDefault(), zt.getOrCreateInstance(this).toggle()
});
Dt(zt);
const ma = "backdrop", Mp = "fade", fo = "show", ho = `mousedown.bs.${ma}`,
    Rp = {className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body"}, Vp = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };

class Ea extends Fs {
    constructor(t) {
        super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
    }

    static get Default() {
        return Rp
    }

    static get DefaultType() {
        return Vp
    }

    static get NAME() {
        return ma
    }

    show(t) {
        if (!this._config.isVisible) {
            mt(t);
            return
        }
        this._append();
        const s = this._getElement();
        this._config.isAnimated && Hs(s), s.classList.add(fo), this._emulateAnimation(() => {
            mt(t)
        })
    }

    hide(t) {
        if (!this._config.isVisible) {
            mt(t);
            return
        }
        this._getElement().classList.remove(fo), this._emulateAnimation(() => {
            this.dispose(), mt(t)
        })
    }

    dispose() {
        this._isAppended && (E.off(this._element, ho), this._element.remove(), this._isAppended = !1)
    }

    _getElement() {
        if (!this._element) {
            const t = document.createElement("div");
            t.className = this._config.className, this._config.isAnimated && t.classList.add(Mp), this._element = t
        }
        return this._element
    }

    _configAfterMerge(t) {
        return t.rootElement = ve(t.rootElement), t
    }

    _append() {
        if (this._isAppended) return;
        const t = this._getElement();
        this._config.rootElement.append(t), E.on(t, ho, () => {
            mt(this._config.clickCallback)
        }), this._isAppended = !0
    }

    _emulateAnimation(t) {
        na(t, this._getElement(), this._config.isAnimated)
    }
}

const kp = "focustrap", Hp = "bs.focustrap", bn = `.${Hp}`, Fp = `focusin${bn}`, jp = `keydown.tab${bn}`, Wp = "Tab",
    Kp = "forward", po = "backward", Bp = {autofocus: !0, trapElement: null},
    Up = {autofocus: "boolean", trapElement: "element"};

class va extends Fs {
    constructor(t) {
        super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
    }

    static get Default() {
        return Bp
    }

    static get DefaultType() {
        return Up
    }

    static get NAME() {
        return kp
    }

    activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), E.off(document, bn), E.on(document, Fp, t => this._handleFocusin(t)), E.on(document, jp, t => this._handleKeydown(t)), this._isActive = !0)
    }

    deactivate() {
        this._isActive && (this._isActive = !1, E.off(document, bn))
    }

    _handleFocusin(t) {
        const {trapElement: s} = this._config;
        if (t.target === document || t.target === s || s.contains(t.target)) return;
        const n = I.focusableChildren(s);
        n.length === 0 ? s.focus() : this._lastTabNavDirection === po ? n[n.length - 1].focus() : n[0].focus()
    }

    _handleKeydown(t) {
        t.key === Wp && (this._lastTabNavDirection = t.shiftKey ? po : Kp)
    }
}

const _o = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", go = ".sticky-top", Zs = "padding-right",
    mo = "margin-right";

class Li {
    constructor() {
        this._element = document.body
    }

    getWidth() {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t)
    }

    hide() {
        const t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, Zs, s => s + t), this._setElementAttributes(_o, Zs, s => s + t), this._setElementAttributes(go, mo, s => s - t)
    }

    reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Zs), this._resetElementAttributes(_o, Zs), this._resetElementAttributes(go, mo)
    }

    isOverflowing() {
        return this.getWidth() > 0
    }

    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
    }

    _setElementAttributes(t, s, n) {
        const i = this.getWidth(), r = o => {
            if (o !== this._element && window.innerWidth > o.clientWidth + i) return;
            this._saveInitialAttribute(o, s);
            const l = window.getComputedStyle(o).getPropertyValue(s);
            o.style.setProperty(s, `${n(Number.parseFloat(l))}px`)
        };
        this._applyManipulationCallback(t, r)
    }

    _saveInitialAttribute(t, s) {
        const n = t.style.getPropertyValue(s);
        n && ne.setDataAttribute(t, s, n)
    }

    _resetElementAttributes(t, s) {
        const n = i => {
            const r = ne.getDataAttribute(i, s);
            if (r === null) {
                i.style.removeProperty(s);
                return
            }
            ne.removeDataAttribute(i, s), i.style.setProperty(s, r)
        };
        this._applyManipulationCallback(t, n)
    }

    _applyManipulationCallback(t, s) {
        if (se(t)) {
            s(t);
            return
        }
        for (const n of I.find(t, this._element)) s(n)
    }
}

const Yp = "modal", zp = "bs.modal", xt = `.${zp}`, Gp = ".data-api", qp = "Escape", Xp = `hide${xt}`,
    Qp = `hidePrevented${xt}`, ba = `hidden${xt}`, ya = `show${xt}`, Jp = `shown${xt}`, Zp = `resize${xt}`,
    t_ = `click.dismiss${xt}`, e_ = `mousedown.dismiss${xt}`, s_ = `keydown.dismiss${xt}`, n_ = `click${xt}${Gp}`,
    Eo = "modal-open", i_ = "fade", vo = "show", ii = "modal-static", r_ = ".modal.show", o_ = ".modal-dialog",
    l_ = ".modal-body", a_ = '[data-bs-toggle="modal"]', c_ = {backdrop: !0, focus: !0, keyboard: !0},
    u_ = {backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean"};

class us extends kt {
    constructor(t, s) {
        super(t, s), this._dialog = I.findOne(o_, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Li, this._addEventListeners()
    }

    static get Default() {
        return c_
    }

    static get DefaultType() {
        return u_
    }

    static get NAME() {
        return Yp
    }

    toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
    }

    show(t) {
        this._isShown || this._isTransitioning || E.trigger(this._element, ya, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Eo), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)))
    }

    hide() {
        !this._isShown || this._isTransitioning || E.trigger(this._element, Xp).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(vo), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))
    }

    dispose() {
        E.off(window, xt), E.off(this._dialog, xt), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }

    handleUpdate() {
        this._adjustDialog()
    }

    _initializeBackDrop() {
        return new Ea({isVisible: !!this._config.backdrop, isAnimated: this._isAnimated()})
    }

    _initializeFocusTrap() {
        return new va({trapElement: this._element})
    }

    _showElement(t) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const s = I.findOne(l_, this._dialog);
        s && (s.scrollTop = 0), Hs(this._element), this._element.classList.add(vo);
        const n = () => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, E.trigger(this._element, Jp, {relatedTarget: t})
        };
        this._queueCallback(n, this._dialog, this._isAnimated())
    }

    _addEventListeners() {
        E.on(this._element, s_, t => {
            if (t.key === qp) {
                if (this._config.keyboard) {
                    this.hide();
                    return
                }
                this._triggerBackdropTransition()
            }
        }), E.on(window, Zp, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog()
        }), E.on(this._element, e_, t => {
            E.one(this._element, t_, s => {
                if (!(this._element !== t.target || this._element !== s.target)) {
                    if (this._config.backdrop === "static") {
                        this._triggerBackdropTransition();
                        return
                    }
                    this._config.backdrop && this.hide()
                }
            })
        })
    }

    _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
            document.body.classList.remove(Eo), this._resetAdjustments(), this._scrollBar.reset(), E.trigger(this._element, ba)
        })
    }

    _isAnimated() {
        return this._element.classList.contains(i_)
    }

    _triggerBackdropTransition() {
        if (E.trigger(this._element, Qp).defaultPrevented) return;
        const s = this._element.scrollHeight > document.documentElement.clientHeight, n = this._element.style.overflowY;
        n === "hidden" || this._element.classList.contains(ii) || (s || (this._element.style.overflowY = "hidden"), this._element.classList.add(ii), this._queueCallback(() => {
            this._element.classList.remove(ii), this._queueCallback(() => {
                this._element.style.overflowY = n
            }, this._dialog)
        }, this._dialog), this._element.focus())
    }

    _adjustDialog() {
        const t = this._element.scrollHeight > document.documentElement.clientHeight, s = this._scrollBar.getWidth(),
            n = s > 0;
        if (n && !t) {
            const i = Nt() ? "paddingLeft" : "paddingRight";
            this._element.style[i] = `${s}px`
        }
        if (!n && t) {
            const i = Nt() ? "paddingRight" : "paddingLeft";
            this._element.style[i] = `${s}px`
        }
    }

    _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
    }

    static jQueryInterface(t, s) {
        return this.each(function () {
            const n = us.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
                n[t](s)
            }
        })
    }
}

E.on(document, n_, a_, function (e) {
    const t = I.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), E.one(t, ya, i => {
        i.defaultPrevented || E.one(t, ba, () => {
            _s(this) && this.focus()
        })
    });
    const s = I.findOne(r_);
    s && us.getInstance(s).hide(), us.getOrCreateInstance(t).toggle(this)
});
Rn(us);
Dt(us);
const f_ = "offcanvas", d_ = "bs.offcanvas", oe = `.${d_}`, Aa = ".data-api", h_ = `load${oe}${Aa}`, p_ = "Escape",
    bo = "show", yo = "showing", Ao = "hiding", __ = "offcanvas-backdrop", Ta = ".offcanvas.show", g_ = `show${oe}`,
    m_ = `shown${oe}`, E_ = `hide${oe}`, To = `hidePrevented${oe}`, wa = `hidden${oe}`, v_ = `resize${oe}`,
    b_ = `click${oe}${Aa}`, y_ = `keydown.dismiss${oe}`, A_ = '[data-bs-toggle="offcanvas"]',
    T_ = {backdrop: !0, keyboard: !0, scroll: !1},
    w_ = {backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean"};

class ye extends kt {
    constructor(t, s) {
        super(t, s), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
    }

    static get Default() {
        return T_
    }

    static get DefaultType() {
        return w_
    }

    static get NAME() {
        return f_
    }

    toggle(t) {
        return this._isShown ? this.hide() : this.show(t)
    }

    show(t) {
        if (this._isShown || E.trigger(this._element, g_, {relatedTarget: t}).defaultPrevented) return;
        this._isShown = !0, this._backdrop.show(), this._config.scroll || new Li().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(yo);
        const n = () => {
            (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(bo), this._element.classList.remove(yo), E.trigger(this._element, m_, {relatedTarget: t})
        };
        this._queueCallback(n, this._element, !0)
    }

    hide() {
        if (!this._isShown || E.trigger(this._element, E_).defaultPrevented) return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Ao), this._backdrop.hide();
        const s = () => {
            this._element.classList.remove(bo, Ao), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Li().reset(), E.trigger(this._element, wa)
        };
        this._queueCallback(s, this._element, !0)
    }

    dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }

    _initializeBackDrop() {
        const t = () => {
            if (this._config.backdrop === "static") {
                E.trigger(this._element, To);
                return
            }
            this.hide()
        }, s = !!this._config.backdrop;
        return new Ea({
            className: __,
            isVisible: s,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: s ? t : null
        })
    }

    _initializeFocusTrap() {
        return new va({trapElement: this._element})
    }

    _addEventListeners() {
        E.on(this._element, y_, t => {
            if (t.key === p_) {
                if (this._config.keyboard) {
                    this.hide();
                    return
                }
                E.trigger(this._element, To)
            }
        })
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = ye.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (s[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                s[t](this)
            }
        })
    }
}

E.on(document, b_, A_, function (e) {
    const t = I.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), be(this)) return;
    E.one(t, wa, () => {
        _s(this) && this.focus()
    });
    const s = I.findOne(Ta);
    s && s !== t && ye.getInstance(s).hide(), ye.getOrCreateInstance(t).toggle(this)
});
E.on(window, h_, () => {
    for (const e of I.find(Ta)) ye.getOrCreateInstance(e).show()
});
E.on(window, v_, () => {
    for (const e of I.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(e).position !== "fixed" && ye.getOrCreateInstance(e).hide()
});
Rn(ye);
Dt(ye);
const C_ = /^aria-[\w-]*$/i, Ca = {
        "*": ["class", "dir", "id", "lang", "role", C_],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, O_ = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    S_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, N_ = (e, t) => {
        const s = e.nodeName.toLowerCase();
        return t.includes(s) ? O_.has(s) ? !!S_.test(e.nodeValue) : !0 : t.filter(n => n instanceof RegExp).some(n => n.test(s))
    };

function x_(e, t, s) {
    if (!e.length) return e;
    if (s && typeof s == "function") return s(e);
    const i = new window.DOMParser().parseFromString(e, "text/html"), r = [].concat(...i.body.querySelectorAll("*"));
    for (const o of r) {
        const l = o.nodeName.toLowerCase();
        if (!Object.keys(t).includes(l)) {
            o.remove();
            continue
        }
        const a = [].concat(...o.attributes), d = [].concat(t["*"] || [], t[l] || []);
        for (const u of a) N_(u, d) || o.removeAttribute(u.nodeName)
    }
    return i.body.innerHTML
}

const D_ = "TemplateFactory", L_ = {
    allowList: Ca,
    content: {},
    extraClass: "",
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: "<div></div>"
}, $_ = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
}, I_ = {entry: "(string|element|function|null)", selector: "(string|element)"};

class P_ extends Fs {
    constructor(t) {
        super(), this._config = this._getConfig(t)
    }

    static get Default() {
        return L_
    }

    static get DefaultType() {
        return $_
    }

    static get NAME() {
        return D_
    }

    getContent() {
        return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean)
    }

    hasContent() {
        return this.getContent().length > 0
    }

    changeContent(t) {
        return this._checkContent(t), this._config.content = {...this._config.content, ...t}, this
    }

    toHtml() {
        const t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);
        for (const [i, r] of Object.entries(this._config.content)) this._setContent(t, r, i);
        const s = t.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
        return n && s.classList.add(...n.split(" ")), s
    }

    _typeCheckConfig(t) {
        super._typeCheckConfig(t), this._checkContent(t.content)
    }

    _checkContent(t) {
        for (const [s, n] of Object.entries(t)) super._typeCheckConfig({selector: s, entry: n}, I_)
    }

    _setContent(t, s, n) {
        const i = I.findOne(n, t);
        if (i) {
            if (s = this._resolvePossibleFunction(s), !s) {
                i.remove();
                return
            }
            if (se(s)) {
                this._putElementInTemplate(ve(s), i);
                return
            }
            if (this._config.html) {
                i.innerHTML = this._maybeSanitize(s);
                return
            }
            i.textContent = s
        }
    }

    _maybeSanitize(t) {
        return this._config.sanitize ? x_(t, this._config.allowList, this._config.sanitizeFn) : t
    }

    _resolvePossibleFunction(t) {
        return mt(t, [this])
    }

    _putElementInTemplate(t, s) {
        if (this._config.html) {
            s.innerHTML = "", s.append(t);
            return
        }
        s.textContent = t.textContent
    }
}

const M_ = "tooltip", R_ = new Set(["sanitize", "allowList", "sanitizeFn"]), ri = "fade", V_ = "modal", tn = "show",
    k_ = ".tooltip-inner", wo = `.${V_}`, Co = "hide.bs.modal", ws = "hover", oi = "focus", H_ = "click", F_ = "manual",
    j_ = "hide", W_ = "hidden", K_ = "show", B_ = "shown", U_ = "inserted", Y_ = "click", z_ = "focusin",
    G_ = "focusout", q_ = "mouseenter", X_ = "mouseleave",
    Q_ = {AUTO: "auto", TOP: "top", RIGHT: Nt() ? "left" : "right", BOTTOM: "bottom", LEFT: Nt() ? "right" : "left"},
    J_ = {
        allowList: Ca,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }, Z_ = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };

class ms extends kt {
    constructor(t, s) {
        if (typeof Jl > "u") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(t, s), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
    }

    static get Default() {
        return J_
    }

    static get DefaultType() {
        return Z_
    }

    static get NAME() {
        return M_
    }

    enable() {
        this._isEnabled = !0
    }

    disable() {
        this._isEnabled = !1
    }

    toggleEnabled() {
        this._isEnabled = !this._isEnabled
    }

    toggle() {
        if (this._isEnabled) {
            if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
                this._leave();
                return
            }
            this._enter()
        }
    }

    dispose() {
        clearTimeout(this._timeout), E.off(this._element.closest(wo), Co, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
    }

    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const t = E.trigger(this._element, this.constructor.eventName(K_)),
            n = (ea(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t.defaultPrevented || !n) return;
        this._disposePopper();
        const i = this._getTipElement();
        this._element.setAttribute("aria-describedby", i.getAttribute("id"));
        const {container: r} = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(i), E.trigger(this._element, this.constructor.eventName(U_))), this._popper = this._createPopper(i), i.classList.add(tn), "ontouchstart" in document.documentElement) for (const l of [].concat(...document.body.children)) E.on(l, "mouseover", En);
        const o = () => {
            E.trigger(this._element, this.constructor.eventName(B_)), this._isHovered === !1 && this._leave(), this._isHovered = !1
        };
        this._queueCallback(o, this.tip, this._isAnimated())
    }

    hide() {
        if (!this._isShown() || E.trigger(this._element, this.constructor.eventName(j_)).defaultPrevented) return;
        if (this._getTipElement().classList.remove(tn), "ontouchstart" in document.documentElement) for (const i of [].concat(...document.body.children)) E.off(i, "mouseover", En);
        this._activeTrigger[H_] = !1, this._activeTrigger[oi] = !1, this._activeTrigger[ws] = !1, this._isHovered = null;
        const n = () => {
            this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), E.trigger(this._element, this.constructor.eventName(W_)))
        };
        this._queueCallback(n, this.tip, this._isAnimated())
    }

    update() {
        this._popper && this._popper.update()
    }

    _isWithContent() {
        return !!this._getTitle()
    }

    _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
    }

    _createTipElement(t) {
        const s = this._getTemplateFactory(t).toHtml();
        if (!s) return null;
        s.classList.remove(ri, tn), s.classList.add(`bs-${this.constructor.NAME}-auto`);
        const n = Hd(this.constructor.NAME).toString();
        return s.setAttribute("id", n), this._isAnimated() && s.classList.add(ri), s
    }

    setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
    }

    _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new P_({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        }), this._templateFactory
    }

    _getContentForTemplate() {
        return {[k_]: this._getTitle()}
    }

    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
    }

    _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
    }

    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ri)
    }

    _isShown() {
        return this.tip && this.tip.classList.contains(tn)
    }

    _createPopper(t) {
        const s = mt(this._config.placement, [this, t, this._element]), n = Q_[s.toUpperCase()];
        return ar(this._element, t, this._getPopperConfig(n))
    }

    _getOffset() {
        const {offset: t} = this._config;
        return typeof t == "string" ? t.split(",").map(s => Number.parseInt(s, 10)) : typeof t == "function" ? s => t(s, this._element) : t
    }

    _resolvePossibleFunction(t) {
        return mt(t, [this._element])
    }

    _getPopperConfig(t) {
        const s = {
            placement: t,
            modifiers: [{name: "flip", options: {fallbackPlacements: this._config.fallbackPlacements}}, {
                name: "offset",
                options: {offset: this._getOffset()}
            }, {name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                name: "arrow",
                options: {element: `.${this.constructor.NAME}-arrow`}
            }, {
                name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: n => {
                    this._getTipElement().setAttribute("data-popper-placement", n.state.placement)
                }
            }]
        };
        return {...s, ...mt(this._config.popperConfig, [s])}
    }

    _setListeners() {
        const t = this._config.trigger.split(" ");
        for (const s of t) if (s === "click") E.on(this._element, this.constructor.eventName(Y_), this._config.selector, n => {
            this._initializeOnDelegatedTarget(n).toggle()
        }); else if (s !== F_) {
            const n = s === ws ? this.constructor.eventName(q_) : this.constructor.eventName(z_),
                i = s === ws ? this.constructor.eventName(X_) : this.constructor.eventName(G_);
            E.on(this._element, n, this._config.selector, r => {
                const o = this._initializeOnDelegatedTarget(r);
                o._activeTrigger[r.type === "focusin" ? oi : ws] = !0, o._enter()
            }), E.on(this._element, i, this._config.selector, r => {
                const o = this._initializeOnDelegatedTarget(r);
                o._activeTrigger[r.type === "focusout" ? oi : ws] = o._element.contains(r.relatedTarget), o._leave()
            })
        }
        this._hideModalHandler = () => {
            this._element && this.hide()
        }, E.on(this._element.closest(wo), Co, this._hideModalHandler)
    }

    _fixTitle() {
        const t = this._element.getAttribute("title");
        t && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
    }

    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = !0;
            return
        }
        this._isHovered = !0, this._setTimeout(() => {
            this._isHovered && this.show()
        }, this._config.delay.show)
    }

    _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
            this._isHovered || this.hide()
        }, this._config.delay.hide))
    }

    _setTimeout(t, s) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, s)
    }

    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0)
    }

    _getConfig(t) {
        const s = ne.getDataAttributes(this._element);
        for (const n of Object.keys(s)) R_.has(n) && delete s[n];
        return t = {...s, ...typeof t == "object" && t ? t : {}}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }

    _configAfterMerge(t) {
        return t.container = t.container === !1 ? document.body : ve(t.container), typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t
    }

    _getDelegateConfig() {
        const t = {};
        for (const [s, n] of Object.entries(this._config)) this.constructor.Default[s] !== n && (t[s] = n);
        return t.selector = !1, t.trigger = "manual", t
    }

    _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = ms.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                s[t]()
            }
        })
    }
}

Dt(ms);
const tg = "popover", eg = ".popover-header", sg = ".popover-body", ng = {
    ...ms.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
}, ig = {...ms.DefaultType, content: "(null|string|element|function)"};

class dr extends ms {
    static get Default() {
        return ng
    }

    static get DefaultType() {
        return ig
    }

    static get NAME() {
        return tg
    }

    _isWithContent() {
        return this._getTitle() || this._getContent()
    }

    _getContentForTemplate() {
        return {[eg]: this._getTitle(), [sg]: this._getContent()}
    }

    _getContent() {
        return this._resolvePossibleFunction(this._config.content)
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = dr.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                s[t]()
            }
        })
    }
}

Dt(dr);
const rg = "scrollspy", og = "bs.scrollspy", hr = `.${og}`, lg = ".data-api", ag = `activate${hr}`, Oo = `click${hr}`,
    cg = `load${hr}${lg}`, ug = "dropdown-item", Ye = "active", fg = '[data-bs-spy="scroll"]', li = "[href]",
    dg = ".nav, .list-group", So = ".nav-link", hg = ".nav-item", pg = ".list-group-item",
    _g = `${So}, ${hg} > ${So}, ${pg}`, gg = ".dropdown", mg = ".dropdown-toggle",
    Eg = {offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1]}, vg = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };

class Hn extends kt {
    constructor(t, s) {
        super(t, s), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        }, this.refresh()
    }

    static get Default() {
        return Eg
    }

    static get DefaultType() {
        return vg
    }

    static get NAME() {
        return rg
    }

    refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const t of this._observableSections.values()) this._observer.observe(t)
    }

    dispose() {
        this._observer.disconnect(), super.dispose()
    }

    _configAfterMerge(t) {
        return t.target = ve(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map(s => Number.parseFloat(s))), t
    }

    _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (E.off(this._config.target, Oo), E.on(this._config.target, Oo, li, t => {
            const s = this._observableSections.get(t.target.hash);
            if (s) {
                t.preventDefault();
                const n = this._rootElement || window, i = s.offsetTop - this._element.offsetTop;
                if (n.scrollTo) {
                    n.scrollTo({top: i, behavior: "smooth"});
                    return
                }
                n.scrollTop = i
            }
        }))
    }

    _getNewObserver() {
        const t = {root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin};
        return new IntersectionObserver(s => this._observerCallback(s), t)
    }

    _observerCallback(t) {
        const s = o => this._targetLinks.get(`#${o.target.id}`), n = o => {
                this._previousScrollData.visibleEntryTop = o.target.offsetTop, this._process(s(o))
            }, i = (this._rootElement || document.documentElement).scrollTop,
            r = i >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = i;
        for (const o of t) {
            if (!o.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(s(o));
                continue
            }
            const l = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (r && l) {
                if (n(o), !i) return;
                continue
            }
            !r && !l && n(o)
        }
    }

    _initializeTargetsAndObservables() {
        this._targetLinks = new Map, this._observableSections = new Map;
        const t = I.find(li, this._config.target);
        for (const s of t) {
            if (!s.hash || be(s)) continue;
            const n = I.findOne(decodeURI(s.hash), this._element);
            _s(n) && (this._targetLinks.set(decodeURI(s.hash), s), this._observableSections.set(s.hash, n))
        }
    }

    _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Ye), this._activateParents(t), E.trigger(this._element, ag, {relatedTarget: t}))
    }

    _activateParents(t) {
        if (t.classList.contains(ug)) {
            I.findOne(mg, t.closest(gg)).classList.add(Ye);
            return
        }
        for (const s of I.parents(t, dg)) for (const n of I.prev(s, _g)) n.classList.add(Ye)
    }

    _clearActiveClass(t) {
        t.classList.remove(Ye);
        const s = I.find(`${li}.${Ye}`, t);
        for (const n of s) n.classList.remove(Ye)
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = Hn.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (s[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                s[t]()
            }
        })
    }
}

E.on(window, cg, () => {
    for (const e of I.find(fg)) Hn.getOrCreateInstance(e)
});
Dt(Hn);
const bg = "tab", yg = "bs.tab", We = `.${yg}`, Ag = `hide${We}`, Tg = `hidden${We}`, wg = `show${We}`,
    Cg = `shown${We}`, Og = `click${We}`, Sg = `keydown${We}`, Ng = `load${We}`, xg = "ArrowLeft", No = "ArrowRight",
    Dg = "ArrowUp", xo = "ArrowDown", ai = "Home", Do = "End", $e = "active", Lo = "fade", ci = "show", Lg = "dropdown",
    Oa = ".dropdown-toggle", $g = ".dropdown-menu", ui = `:not(${Oa})`, Ig = '.list-group, .nav, [role="tablist"]',
    Pg = ".nav-item, .list-group-item", Mg = `.nav-link${ui}, .list-group-item${ui}, [role="tab"]${ui}`,
    Sa = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', fi = `${Mg}, ${Sa}`,
    Rg = `.${$e}[data-bs-toggle="tab"], .${$e}[data-bs-toggle="pill"], .${$e}[data-bs-toggle="list"]`;

class fs extends kt {
    constructor(t) {
        super(t), this._parent = this._element.closest(Ig), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), E.on(this._element, Sg, s => this._keydown(s)))
    }

    static get NAME() {
        return bg
    }

    show() {
        const t = this._element;
        if (this._elemIsActive(t)) return;
        const s = this._getActiveElem(), n = s ? E.trigger(s, Ag, {relatedTarget: t}) : null;
        E.trigger(t, wg, {relatedTarget: s}).defaultPrevented || n && n.defaultPrevented || (this._deactivate(s, t), this._activate(t, s))
    }

    _activate(t, s) {
        if (!t) return;
        t.classList.add($e), this._activate(I.getElementFromSelector(t));
        const n = () => {
            if (t.getAttribute("role") !== "tab") {
                t.classList.add(ci);
                return
            }
            t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), E.trigger(t, Cg, {relatedTarget: s})
        };
        this._queueCallback(n, t, t.classList.contains(Lo))
    }

    _deactivate(t, s) {
        if (!t) return;
        t.classList.remove($e), t.blur(), this._deactivate(I.getElementFromSelector(t));
        const n = () => {
            if (t.getAttribute("role") !== "tab") {
                t.classList.remove(ci);
                return
            }
            t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), E.trigger(t, Tg, {relatedTarget: s})
        };
        this._queueCallback(n, t, t.classList.contains(Lo))
    }

    _keydown(t) {
        if (![xg, No, Dg, xo, ai, Do].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        const s = this._getChildren().filter(i => !be(i));
        let n;
        if ([ai, Do].includes(t.key)) n = s[t.key === ai ? 0 : s.length - 1]; else {
            const i = [No, xo].includes(t.key);
            n = cr(s, t.target, i, !0)
        }
        n && (n.focus({preventScroll: !0}), fs.getOrCreateInstance(n).show())
    }

    _getChildren() {
        return I.find(fi, this._parent)
    }

    _getActiveElem() {
        return this._getChildren().find(t => this._elemIsActive(t)) || null
    }

    _setInitialAttributes(t, s) {
        this._setAttributeIfNotExists(t, "role", "tablist");
        for (const n of s) this._setInitialAttributesOnChild(n)
    }

    _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);
        const s = this._elemIsActive(t), n = this._getOuterElement(t);
        t.setAttribute("aria-selected", s), n !== t && this._setAttributeIfNotExists(n, "role", "presentation"), s || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
    }

    _setInitialAttributesOnTargetPanel(t) {
        const s = I.getElementFromSelector(t);
        s && (this._setAttributeIfNotExists(s, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(s, "aria-labelledby", `${t.id}`))
    }

    _toggleDropDown(t, s) {
        const n = this._getOuterElement(t);
        if (!n.classList.contains(Lg)) return;
        const i = (r, o) => {
            const l = I.findOne(r, n);
            l && l.classList.toggle(o, s)
        };
        i(Oa, $e), i($g, ci), n.setAttribute("aria-expanded", s)
    }

    _setAttributeIfNotExists(t, s, n) {
        t.hasAttribute(s) || t.setAttribute(s, n)
    }

    _elemIsActive(t) {
        return t.classList.contains($e)
    }

    _getInnerElement(t) {
        return t.matches(fi) ? t : I.findOne(fi, t)
    }

    _getOuterElement(t) {
        return t.closest(Pg) || t
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = fs.getOrCreateInstance(this);
            if (typeof t == "string") {
                if (s[t] === void 0 || t.startsWith("_") || t === "constructor") throw new TypeError(`No method named "${t}"`);
                s[t]()
            }
        })
    }
}

E.on(document, Og, Sa, function (e) {
    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), !be(this) && fs.getOrCreateInstance(this).show()
});
E.on(window, Ng, () => {
    for (const e of I.find(Rg)) fs.getOrCreateInstance(e)
});
Dt(fs);
const Vg = "toast", kg = "bs.toast", we = `.${kg}`, Hg = `mouseover${we}`, Fg = `mouseout${we}`, jg = `focusin${we}`,
    Wg = `focusout${we}`, Kg = `hide${we}`, Bg = `hidden${we}`, Ug = `show${we}`, Yg = `shown${we}`, zg = "fade",
    $o = "hide", en = "show", sn = "showing", Gg = {animation: "boolean", autohide: "boolean", delay: "number"},
    qg = {animation: !0, autohide: !0, delay: 5e3};

class Fn extends kt {
    constructor(t, s) {
        super(t, s), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
    }

    static get Default() {
        return qg
    }

    static get DefaultType() {
        return Gg
    }

    static get NAME() {
        return Vg
    }

    show() {
        if (E.trigger(this._element, Ug).defaultPrevented) return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(zg);
        const s = () => {
            this._element.classList.remove(sn), E.trigger(this._element, Yg), this._maybeScheduleHide()
        };
        this._element.classList.remove($o), Hs(this._element), this._element.classList.add(en, sn), this._queueCallback(s, this._element, this._config.animation)
    }

    hide() {
        if (!this.isShown() || E.trigger(this._element, Kg).defaultPrevented) return;
        const s = () => {
            this._element.classList.add($o), this._element.classList.remove(sn, en), E.trigger(this._element, Bg)
        };
        this._element.classList.add(sn), this._queueCallback(s, this._element, this._config.animation)
    }

    dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(en), super.dispose()
    }

    isShown() {
        return this._element.classList.contains(en)
    }

    _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
            this.hide()
        }, this._config.delay)))
    }

    _onInteraction(t, s) {
        switch (t.type) {
            case"mouseover":
            case"mouseout": {
                this._hasMouseInteraction = s;
                break
            }
            case"focusin":
            case"focusout": {
                this._hasKeyboardInteraction = s;
                break
            }
        }
        if (s) {
            this._clearTimeout();
            return
        }
        const n = t.relatedTarget;
        this._element === n || this._element.contains(n) || this._maybeScheduleHide()
    }

    _setListeners() {
        E.on(this._element, Hg, t => this._onInteraction(t, !0)), E.on(this._element, Fg, t => this._onInteraction(t, !1)), E.on(this._element, jg, t => this._onInteraction(t, !0)), E.on(this._element, Wg, t => this._onInteraction(t, !1))
    }

    _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null
    }

    static jQueryInterface(t) {
        return this.each(function () {
            const s = Fn.getOrCreateInstance(this, t);
            if (typeof t == "string") {
                if (typeof s[t] > "u") throw new TypeError(`No method named "${t}"`);
                s[t](this)
            }
        })
    }
}

Rn(Fn);
Dt(Fn);
const Xg = Zu(qf);
Xg.mount("#app");
