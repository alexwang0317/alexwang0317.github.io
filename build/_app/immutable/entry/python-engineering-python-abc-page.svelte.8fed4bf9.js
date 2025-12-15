import {
  S as Va,
  i as qa,
  s as za,
  y as Ja,
  a as m,
  k as s,
  q as t,
  z as Ka,
  c as h,
  l as o,
  m as r,
  r as a,
  h as n,
  n as E,
  A as Qa,
  b as Ha,
  C as e,
  F as Ua,
  g as Wa,
  d as Xa,
  B as Ya,
  o as Za,
} from "../chunks/index.dd6ea1d3.js";
import { S as en } from "../chunks/Seo.4277da45.js";
function tn(Zt) {
  let b,
    S,
    d,
    T,
    x,
    he,
    ue,
    D,
    pe,
    fe,
    P,
    ve,
    ye,
    O,
    be,
    ge,
    l,
    F,
    Ee,
    _e,
    A,
    we,
    H,
    Ie,
    Se,
    Ce,
    B,
    V,
    ke,
    xe,
    q,
    Ae,
    Be,
    z,
    Me,
    Te,
    J,
    c,
    De,
    ea = "{",
    Pe,
    Oe,
    ta = "}",
    Ne,
    Le,
    aa = "{",
    je,
    $e,
    na = "}",
    Re,
    Ge,
    sa = "{",
    Fe,
    He,
    oa = "}",
    Ve,
    qe,
    ra = "{",
    ze,
    Je,
    la = "}",
    Ke,
    Qe,
    Ue,
    g,
    We,
    K,
    Xe,
    Ye,
    Q,
    Ze,
    et,
    U,
    tt,
    at,
    W,
    nt,
    st,
    ot,
    X,
    rt,
    lt,
    _,
    it,
    Y,
    ct,
    dt,
    Z,
    mt,
    ht,
    ee,
    ut,
    pt,
    ft,
    te,
    u,
    vt,
    ia = "{",
    yt,
    bt,
    ca = "}",
    gt,
    Et,
    da = "{",
    _t,
    wt,
    ma = "}",
    It,
    St,
    ha = "{",
    Ct,
    kt,
    ua = "}",
    xt,
    At,
    Bt,
    M,
    Mt,
    ae,
    Tt,
    Dt,
    Pt,
    ne,
    Ot,
    Nt,
    w,
    N,
    se,
    Lt,
    jt,
    $t,
    L,
    oe,
    Rt,
    Gt,
    Ft,
    j,
    re,
    Ht,
    Vt,
    qt,
    $,
    le,
    zt,
    Jt,
    Kt,
    R,
    G,
    Qt,
    ie;
  return (
    (b = new en({
      props: {
        title: "ABC (Abstract Base Classes) - Alex Wang",
        description:
          "Enforce method implementation at instantiation time with Python's ABC",
      },
    })),
    {
      c() {
        Ja(b.$$.fragment),
          (S = m()),
          (d = s("article")),
          (T = s("div")),
          (x = s("a")),
          (he = t("← Back to Python")),
          (ue = m()),
          (D = s("h1")),
          (pe = t("ABC (Abstract Base Classes)")),
          (fe = m()),
          (P = s("div")),
          (ve = t("January 3, 2025 • 4 min read")),
          (ye = m()),
          (O = s("div")),
          (be =
            t(`Prevent runtime errors by enforcing method implementation at instantiation
    time with Python's Abstract Base Classes. Learn how to build safer class
    hierarchies that catch missing methods before they reach production.`)),
          (ge = m()),
          (l = s("div")),
          (F = s("p")),
          (Ee =
            t(`Imagine you are designing a set of class hierarchies where you have a
      parent class with an "abstract" method that needs to be implemented by
      subclasses to work.`)),
          (_e = m()),
          (A = s("p")),
          (we = t("Generally, when you do this, you will use a ")),
          (H = s("code")),
          (Ie = t("NotImplementedError")),
          (Se = t(" in the methods. However there are two major problems:")),
          (Ce = m()),
          (B = s("ul")),
          (V = s("li")),
          (ke =
            t(`Declaring the class succeeds even when certain subclass required methods
        are not implemented.`)),
          (xe = m()),
          (q = s("li")),
          (Ae =
            t(`Calling that not-yet implemented method of your subclass fails because
        it wasn't caught at instantiation-time.`)),
          (Be = m()),
          (z = s("p")),
          (Me = t("The most common example is something like this:")),
          (Te = m()),
          (J = s("pre")),
          (c = s("code")),
          (De = t(`import abc

class StorageService:
    @abc.abstractmethod
    def save(self, key, value):
        raise NotImplementedError("Subclasses must implement 'save'")
    
    @abc.abstractmethod
    def load(self, key):
        raise NotImplementedError("Subclasses must implement 'load'")

class InMemoryStorage(StorageService):
    def save(self, key, value):
        print(f"[InMemory] Saving `)),
          (Pe = t(ea)),
          (Oe = t("key")),
          (Ne = t(ta)),
          (Le = t(" -> ")),
          (je = t(aa)),
          ($e = t("value")),
          (Re = t(na)),
          (Ge = t(`")
        # stores it somewhere in memory (fake impl for demo)
        self._data = `)),
          (Fe = t(sa)),
          (He = t("key: value")),
          (Ve = t(oa)),
          (qe = t(`

# Instantiation succeeds
store = InMemoryStorage()
store.save("user:1", `)),
          (ze = t(ra)),
          (Je = t('\\"name\\": \\"Alex\\"')),
          (Ke = t(la)),
          (Qe = t(`)

# But calling the missing method fails only at runtime
print(store.load("user:1"))  # NotImplementedError`)),
          (Ue = m()),
          (g = s("p")),
          (We = t("In the above example, you can still create ")),
          (K = s("code")),
          (Xe = t("InMemoryStorage")),
          (Ye = t(`
      even though
      `)),
          (Q = s("code")),
          (Ze = t("load()")),
          (et = t(` isn't defined. Only when another engineer (or your API
      call) tries `)),
          (U = s("code")),
          (tt = t("load()")),
          (at = t(` do you hit a
      `)),
          (W = s("code")),
          (nt = t("NotImplementedError")),
          (st = t(` — potentially in production—do you realize
      this problem.`)),
          (ot = m()),
          (X = s("h2")),
          (rt = t("The Solution: ABC with ABCMeta")),
          (lt = m()),
          (_ = s("p")),
          (it = t("To resolve this, use the built-in ")),
          (Y = s("code")),
          (ct = t("abc.ABCMeta")),
          (dt = t(` metaclass from
      `)),
          (Z = s("code")),
          (mt = t("abc")),
          (ht = t(`
      to define abstract classes. This basically prevents you from instantiating
      a class at creation time with a `)),
          (ee = s("code")),
          (ut = t("TypeError")),
          (pt = t(`, rather than
      failing later.`)),
          (ft = m()),
          (te = s("pre")),
          (u = s("code")),
          (vt = t(`import abc
from abc import ABC, abstractmethod

class StorageService(ABC):  # or metaclass=abc.ABCMeta
    @abstractmethod
    def save(self, key, value):
        """Save a value by key"""
        pass
    
    @abstractmethod
    def load(self, key):
        """Load a value by key"""
        pass

class InMemoryStorage(StorageService):
    def save(self, key, value):
        print(f"[InMemory] Saving `)),
          (yt = t(ia)),
          (bt = t("key")),
          (gt = t(ca)),
          (Et = t(" -> ")),
          (_t = t(da)),
          (wt = t("value")),
          (It = t(ma)),
          (St = t(`")
        self._data = `)),
          (Ct = t(ha)),
          (kt = t("key: value")),
          (xt = t(ua)),
          (At = t(`
    # Oops: still forgot load()!

# Instantiation FAILS immediately
store = InMemoryStorage()
# TypeError: Can't instantiate abstract class InMemoryStorage with abstract method load`)),
          (Bt = m()),
          (M = s("p")),
          (Mt = t("Now your instantiations will be safe! The ")),
          (ae = s("code")),
          (Tt = t("TypeError")),
          (Dt = t(` happens at
      the moment you try to create an instance, not later when you call the missing
      method. This catches errors during development rather than in production.`)),
          (Pt = m()),
          (ne = s("h2")),
          (Ot = t("Key Benefits")),
          (Nt = m()),
          (w = s("ul")),
          (N = s("li")),
          (se = s("strong")),
          (Lt = t("Early error detection:")),
          (jt = t(` Missing implementations are caught
        at instantiation time, not runtime`)),
          ($t = m()),
          (L = s("li")),
          (oe = s("strong")),
          (Rt = t("Clear contracts:")),
          (Gt = t(` Abstract methods explicitly define what
        subclasses must implement`)),
          (Ft = m()),
          (j = s("li")),
          (re = s("strong")),
          (Ht = t("Better IDE support:")),
          (Vt = t(` Most IDEs will warn about missing abstract
        method implementations`)),
          (qt = m()),
          ($ = s("li")),
          (le = s("strong")),
          (zt = t("Type checker friendly:")),
          (Jt = t(` Tools like mypy understand and enforce
        abstract base classes`)),
          (Kt = m()),
          (R = s("div")),
          (G = s("p")),
          (Qt = t("Questions or feedback? Feel free to reach out!")),
          this.h();
      },
      l(v) {
        Ka(b.$$.fragment, v), (S = h(v)), (d = o(v, "ARTICLE", { class: !0 }));
        var f = r(d);
        T = o(f, "DIV", { class: !0 });
        var pa = r(T);
        x = o(pa, "A", { href: !0, class: !0 });
        var fa = r(x);
        (he = a(fa, "← Back to Python")),
          fa.forEach(n),
          pa.forEach(n),
          (ue = h(f)),
          (D = o(f, "H1", { class: !0 }));
        var va = r(D);
        (pe = a(va, "ABC (Abstract Base Classes)")),
          va.forEach(n),
          (fe = h(f)),
          (P = o(f, "DIV", { class: !0 }));
        var ya = r(P);
        (ve = a(ya, "January 3, 2025 • 4 min read")),
          ya.forEach(n),
          (ye = h(f)),
          (O = o(f, "DIV", { class: !0 }));
        var ba = r(O);
        (be = a(
          ba,
          `Prevent runtime errors by enforcing method implementation at instantiation
    time with Python's Abstract Base Classes. Learn how to build safer class
    hierarchies that catch missing methods before they reach production.`
        )),
          ba.forEach(n),
          (ge = h(f)),
          (l = o(f, "DIV", { class: !0 }));
        var i = r(l);
        F = o(i, "P", {});
        var ga = r(F);
        (Ee = a(
          ga,
          `Imagine you are designing a set of class hierarchies where you have a
      parent class with an "abstract" method that needs to be implemented by
      subclasses to work.`
        )),
          ga.forEach(n),
          (_e = h(i)),
          (A = o(i, "P", {}));
        var ce = r(A);
        (we = a(ce, "Generally, when you do this, you will use a ")),
          (H = o(ce, "CODE", {}));
        var Ea = r(H);
        (Ie = a(Ea, "NotImplementedError")),
          Ea.forEach(n),
          (Se = a(
            ce,
            " in the methods. However there are two major problems:"
          )),
          ce.forEach(n),
          (Ce = h(i)),
          (B = o(i, "UL", {}));
        var de = r(B);
        V = o(de, "LI", {});
        var _a = r(V);
        (ke = a(
          _a,
          `Declaring the class succeeds even when certain subclass required methods
        are not implemented.`
        )),
          _a.forEach(n),
          (xe = h(de)),
          (q = o(de, "LI", {}));
        var wa = r(q);
        (Ae = a(
          wa,
          `Calling that not-yet implemented method of your subclass fails because
        it wasn't caught at instantiation-time.`
        )),
          wa.forEach(n),
          de.forEach(n),
          (Be = h(i)),
          (z = o(i, "P", {}));
        var Ia = r(z);
        (Me = a(Ia, "The most common example is something like this:")),
          Ia.forEach(n),
          (Te = h(i)),
          (J = o(i, "PRE", {}));
        var Sa = r(J);
        c = o(Sa, "CODE", { class: !0 });
        var p = r(c);
        (De = a(
          p,
          `import abc

class StorageService:
    @abc.abstractmethod
    def save(self, key, value):
        raise NotImplementedError("Subclasses must implement 'save'")
    
    @abc.abstractmethod
    def load(self, key):
        raise NotImplementedError("Subclasses must implement 'load'")

class InMemoryStorage(StorageService):
    def save(self, key, value):
        print(f"[InMemory] Saving `
        )),
          (Pe = a(p, ea)),
          (Oe = a(p, "key")),
          (Ne = a(p, ta)),
          (Le = a(p, " -> ")),
          (je = a(p, aa)),
          ($e = a(p, "value")),
          (Re = a(p, na)),
          (Ge = a(
            p,
            `")
        # stores it somewhere in memory (fake impl for demo)
        self._data = `
          )),
          (Fe = a(p, sa)),
          (He = a(p, "key: value")),
          (Ve = a(p, oa)),
          (qe = a(
            p,
            `

# Instantiation succeeds
store = InMemoryStorage()
store.save("user:1", `
          )),
          (ze = a(p, ra)),
          (Je = a(p, '\\"name\\": \\"Alex\\"')),
          (Ke = a(p, la)),
          (Qe = a(
            p,
            `)

# But calling the missing method fails only at runtime
print(store.load("user:1"))  # NotImplementedError`
          )),
          p.forEach(n),
          Sa.forEach(n),
          (Ue = h(i)),
          (g = o(i, "P", {}));
        var I = r(g);
        (We = a(I, "In the above example, you can still create ")),
          (K = o(I, "CODE", {}));
        var Ca = r(K);
        (Xe = a(Ca, "InMemoryStorage")),
          Ca.forEach(n),
          (Ye = a(
            I,
            `
      even though
      `
          )),
          (Q = o(I, "CODE", {}));
        var ka = r(Q);
        (Ze = a(ka, "load()")),
          ka.forEach(n),
          (et = a(
            I,
            ` isn't defined. Only when another engineer (or your API
      call) tries `
          )),
          (U = o(I, "CODE", {}));
        var xa = r(U);
        (tt = a(xa, "load()")),
          xa.forEach(n),
          (at = a(
            I,
            ` do you hit a
      `
          )),
          (W = o(I, "CODE", {}));
        var Aa = r(W);
        (nt = a(Aa, "NotImplementedError")),
          Aa.forEach(n),
          (st = a(
            I,
            ` — potentially in production—do you realize
      this problem.`
          )),
          I.forEach(n),
          (ot = h(i)),
          (X = o(i, "H2", {}));
        var Ba = r(X);
        (rt = a(Ba, "The Solution: ABC with ABCMeta")),
          Ba.forEach(n),
          (lt = h(i)),
          (_ = o(i, "P", {}));
        var C = r(_);
        (it = a(C, "To resolve this, use the built-in ")),
          (Y = o(C, "CODE", {}));
        var Ma = r(Y);
        (ct = a(Ma, "abc.ABCMeta")),
          Ma.forEach(n),
          (dt = a(
            C,
            ` metaclass from
      `
          )),
          (Z = o(C, "CODE", {}));
        var Ta = r(Z);
        (mt = a(Ta, "abc")),
          Ta.forEach(n),
          (ht = a(
            C,
            `
      to define abstract classes. This basically prevents you from instantiating
      a class at creation time with a `
          )),
          (ee = o(C, "CODE", {}));
        var Da = r(ee);
        (ut = a(Da, "TypeError")),
          Da.forEach(n),
          (pt = a(
            C,
            `, rather than
      failing later.`
          )),
          C.forEach(n),
          (ft = h(i)),
          (te = o(i, "PRE", {}));
        var Pa = r(te);
        u = o(Pa, "CODE", { class: !0 });
        var y = r(u);
        (vt = a(
          y,
          `import abc
from abc import ABC, abstractmethod

class StorageService(ABC):  # or metaclass=abc.ABCMeta
    @abstractmethod
    def save(self, key, value):
        """Save a value by key"""
        pass
    
    @abstractmethod
    def load(self, key):
        """Load a value by key"""
        pass

class InMemoryStorage(StorageService):
    def save(self, key, value):
        print(f"[InMemory] Saving `
        )),
          (yt = a(y, ia)),
          (bt = a(y, "key")),
          (gt = a(y, ca)),
          (Et = a(y, " -> ")),
          (_t = a(y, da)),
          (wt = a(y, "value")),
          (It = a(y, ma)),
          (St = a(
            y,
            `")
        self._data = `
          )),
          (Ct = a(y, ha)),
          (kt = a(y, "key: value")),
          (xt = a(y, ua)),
          (At = a(
            y,
            `
    # Oops: still forgot load()!

# Instantiation FAILS immediately
store = InMemoryStorage()
# TypeError: Can't instantiate abstract class InMemoryStorage with abstract method load`
          )),
          y.forEach(n),
          Pa.forEach(n),
          (Bt = h(i)),
          (M = o(i, "P", {}));
        var me = r(M);
        (Mt = a(me, "Now your instantiations will be safe! The ")),
          (ae = o(me, "CODE", {}));
        var Oa = r(ae);
        (Tt = a(Oa, "TypeError")),
          Oa.forEach(n),
          (Dt = a(
            me,
            ` happens at
      the moment you try to create an instance, not later when you call the missing
      method. This catches errors during development rather than in production.`
          )),
          me.forEach(n),
          (Pt = h(i)),
          (ne = o(i, "H2", {}));
        var Na = r(ne);
        (Ot = a(Na, "Key Benefits")),
          Na.forEach(n),
          (Nt = h(i)),
          (w = o(i, "UL", {}));
        var k = r(w);
        N = o(k, "LI", {});
        var Ut = r(N);
        se = o(Ut, "STRONG", {});
        var La = r(se);
        (Lt = a(La, "Early error detection:")),
          La.forEach(n),
          (jt = a(
            Ut,
            ` Missing implementations are caught
        at instantiation time, not runtime`
          )),
          Ut.forEach(n),
          ($t = h(k)),
          (L = o(k, "LI", {}));
        var Wt = r(L);
        oe = o(Wt, "STRONG", {});
        var ja = r(oe);
        (Rt = a(ja, "Clear contracts:")),
          ja.forEach(n),
          (Gt = a(
            Wt,
            ` Abstract methods explicitly define what
        subclasses must implement`
          )),
          Wt.forEach(n),
          (Ft = h(k)),
          (j = o(k, "LI", {}));
        var Xt = r(j);
        re = o(Xt, "STRONG", {});
        var $a = r(re);
        (Ht = a($a, "Better IDE support:")),
          $a.forEach(n),
          (Vt = a(
            Xt,
            ` Most IDEs will warn about missing abstract
        method implementations`
          )),
          Xt.forEach(n),
          (qt = h(k)),
          ($ = o(k, "LI", {}));
        var Yt = r($);
        le = o(Yt, "STRONG", {});
        var Ra = r(le);
        (zt = a(Ra, "Type checker friendly:")),
          Ra.forEach(n),
          (Jt = a(
            Yt,
            ` Tools like mypy understand and enforce
        abstract base classes`
          )),
          Yt.forEach(n),
          k.forEach(n),
          i.forEach(n),
          (Kt = h(f)),
          (R = o(f, "DIV", { class: !0 }));
        var Ga = r(R);
        G = o(Ga, "P", { class: !0 });
        var Fa = r(G);
        (Qt = a(Fa, "Questions or feedback? Feel free to reach out!")),
          Fa.forEach(n),
          Ga.forEach(n),
          f.forEach(n),
          this.h();
      },
      h() {
        E(x, "href", "/python"),
          E(x, "class", "text-blue-600 hover:underline text-sm"),
          E(T, "class", "mb-8"),
          E(D, "class", "text-3xl font-bold mb-4"),
          E(P, "class", "text-sm text-neutral-500 mb-8"),
          E(O, "class", "text-lg text-neutral-700 mb-8 leading-relaxed"),
          E(c, "class", "language-python"),
          E(u, "class", "language-python"),
          E(l, "class", "prose prose-neutral max-w-none"),
          E(G, "class", "text-sm text-neutral-500"),
          E(R, "class", "border-t pt-8 mt-12"),
          E(
            d,
            "class",
            "layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"
          );
      },
      m(v, f) {
        Qa(b, v, f),
          Ha(v, S, f),
          Ha(v, d, f),
          e(d, T),
          e(T, x),
          e(x, he),
          e(d, ue),
          e(d, D),
          e(D, pe),
          e(d, fe),
          e(d, P),
          e(P, ve),
          e(d, ye),
          e(d, O),
          e(O, be),
          e(d, ge),
          e(d, l),
          e(l, F),
          e(F, Ee),
          e(l, _e),
          e(l, A),
          e(A, we),
          e(A, H),
          e(H, Ie),
          e(A, Se),
          e(l, Ce),
          e(l, B),
          e(B, V),
          e(V, ke),
          e(B, xe),
          e(B, q),
          e(q, Ae),
          e(l, Be),
          e(l, z),
          e(z, Me),
          e(l, Te),
          e(l, J),
          e(J, c),
          e(c, De),
          e(c, Pe),
          e(c, Oe),
          e(c, Ne),
          e(c, Le),
          e(c, je),
          e(c, $e),
          e(c, Re),
          e(c, Ge),
          e(c, Fe),
          e(c, He),
          e(c, Ve),
          e(c, qe),
          e(c, ze),
          e(c, Je),
          e(c, Ke),
          e(c, Qe),
          e(l, Ue),
          e(l, g),
          e(g, We),
          e(g, K),
          e(K, Xe),
          e(g, Ye),
          e(g, Q),
          e(Q, Ze),
          e(g, et),
          e(g, U),
          e(U, tt),
          e(g, at),
          e(g, W),
          e(W, nt),
          e(g, st),
          e(l, ot),
          e(l, X),
          e(X, rt),
          e(l, lt),
          e(l, _),
          e(_, it),
          e(_, Y),
          e(Y, ct),
          e(_, dt),
          e(_, Z),
          e(Z, mt),
          e(_, ht),
          e(_, ee),
          e(ee, ut),
          e(_, pt),
          e(l, ft),
          e(l, te),
          e(te, u),
          e(u, vt),
          e(u, yt),
          e(u, bt),
          e(u, gt),
          e(u, Et),
          e(u, _t),
          e(u, wt),
          e(u, It),
          e(u, St),
          e(u, Ct),
          e(u, kt),
          e(u, xt),
          e(u, At),
          e(l, Bt),
          e(l, M),
          e(M, Mt),
          e(M, ae),
          e(ae, Tt),
          e(M, Dt),
          e(l, Pt),
          e(l, ne),
          e(ne, Ot),
          e(l, Nt),
          e(l, w),
          e(w, N),
          e(N, se),
          e(se, Lt),
          e(N, jt),
          e(w, $t),
          e(w, L),
          e(L, oe),
          e(oe, Rt),
          e(L, Gt),
          e(w, Ft),
          e(w, j),
          e(j, re),
          e(re, Ht),
          e(j, Vt),
          e(w, qt),
          e(w, $),
          e($, le),
          e(le, zt),
          e($, Jt),
          e(d, Kt),
          e(d, R),
          e(R, G),
          e(G, Qt),
          (ie = !0);
      },
      p: Ua,
      i(v) {
        ie || (Wa(b.$$.fragment, v), (ie = !0));
      },
      o(v) {
        Xa(b.$$.fragment, v), (ie = !1);
      },
      d(v) {
        Ya(b, v), v && n(S), v && n(d);
      },
    }
  );
}
function an(Zt) {
  return (
    Za(async () => {
      if (typeof window < "u" && !window.Prism) {
        const b = document.createElement("link");
        (b.rel = "stylesheet"),
          (b.href =
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"),
          document.head.appendChild(b);
        const S = document.createElement("script");
        (S.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"),
          (S.onload = () => {
            const d = document.createElement("script");
            (d.src =
              "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"),
              (d.onload = () => {
                window.Prism.highlightAll();
              }),
              document.head.appendChild(d);
          }),
          document.head.appendChild(S);
      }
    }),
    []
  );
}
class on extends Va {
  constructor(b) {
    super(), qa(this, b, an, tn, za, {});
  }
}
export { on as default };
