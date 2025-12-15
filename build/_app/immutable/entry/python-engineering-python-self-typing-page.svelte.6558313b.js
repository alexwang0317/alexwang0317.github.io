import {
  S as ut,
  i as pt,
  s as yt,
  y as _t,
  a as c,
  k as n,
  q as r,
  z as gt,
  c as d,
  l as s,
  m as a,
  r as l,
  h as t,
  n as p,
  A as vt,
  b as mt,
  C as e,
  F as Et,
  g as wt,
  d as St,
  B as bt,
  o as xt,
} from "../chunks/index.dd6ea1d3.js";
import { S as Bt } from "../chunks/Seo.4277da45.js";
function It(qe) {
  let u,
    _,
    o,
    b,
    E,
    Z,
    ee,
    x,
    te,
    ne,
    B,
    se,
    ae,
    I,
    re,
    le,
    i,
    D,
    oe,
    ie,
    L,
    P,
    ce,
    de,
    O,
    fe,
    he,
    w,
    M,
    $,
    me,
    ue,
    pe,
    R,
    N,
    ye,
    _e,
    ge,
    S,
    ve,
    F,
    Ee,
    we,
    Se,
    G,
    C,
    be,
    xe,
    U,
    Be,
    Ie,
    y,
    T,
    V,
    Pe,
    Me,
    Re,
    g,
    q,
    Ce,
    Te,
    H,
    je,
    ke,
    Ae,
    v,
    Q,
    De,
    Le,
    z,
    Oe,
    $e,
    Ne,
    j,
    k,
    Fe,
    K;
  return (
    (u = new Bt({
      props: {
        title: "Self Typing - Alex Wang",
        description:
          "Understanding Python's Self type hint for better type safety",
      },
    })),
    {
      c() {
        _t(u.$$.fragment),
          (_ = c()),
          (o = n("article")),
          (b = n("div")),
          (E = n("a")),
          (Z = r("← Back to Python")),
          (ee = c()),
          (x = n("h1")),
          (te = r("Self Typing")),
          (ne = c()),
          (B = n("div")),
          (se = r("August 15, 2025 • 6 min read")),
          (ae = c()),
          (I = n("div")),
          (re =
            r(`Understanding Python's Self type hint for better type safety and method
    chaining. Learn how to properly annotate methods that return the current
    instance.`)),
          (le = c()),
          (i = n("div")),
          (D = n("p")),
          (oe =
            r(`Imagine you are writing a class that returns the current object in python
      such as when you want to allow for method-chaining in a sequence of calls,
      or using a setter-like method. For the type annotations here, two common
      ways other devs write this is:`)),
          (ie = c()),
          (L = n("pre")),
          (P = n("code")),
          (ce = r(`# String forward reference
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> "MyBuilder":
        self.name = name
        return self
# Bare class name
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> MyBuilder:
        self.name = name
        return self`)),
          (de = c()),
          (O = n("p")),
          (fe = r("However, this causes two major problems where:")),
          (he = c()),
          (w = n("ul")),
          (M = n("li")),
          ($ = n("strong")),
          (me = r("Refactoring:")),
          (ue = r(` The return type of either the string 'MyBuilder'
        or class name MyBuilder will make refactoring difficult.`)),
          (pe = c()),
          (R = n("li")),
          (N = n("strong")),
          (ye = r("Subclassing:")),
          (_e = r(" If you subclass, the return type is incorrect.")),
          (ge = c()),
          (S = n("p")),
          (ve = r("Instead, you can import ")),
          (F = n("code")),
          (Ee = r("Self")),
          (we = r(" as the type annotation as such:")),
          (Se = c()),
          (G = n("pre")),
          (C = n("code")),
          (be =
            r(`from typing import Self  # Python 3.11+ else 'from typing_extensions import Self'
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> Self:
        self.name = name
        return self`)),
          (xe = c()),
          (U = n("h2")),
          (Be = r("Advantages of This Approach")),
          (Ie = c()),
          (y = n("ul")),
          (T = n("li")),
          (V = n("strong")),
          (Pe = r("Refactoring:")),
          (Me = r(` No hardcoded class, which means it is resilient
        to class renaming.`)),
          (Re = c()),
          (g = n("li")),
          (q = n("strong")),
          (Ce = r("Easier Subclassing:")),
          (Te = c()),
          (H = n("code")),
          (je = r("Self")),
          (ke = r(` is covariant and dynamically
        binds to self at runtime. Chain methods will now return the correct subclass
        type.`)),
          (Ae = c()),
          (v = n("li")),
          (Q = n("strong")),
          (De = r("Readability:")),
          (Le = c()),
          (z = n("code")),
          (Oe = r("Self")),
          ($e = r(` clearly communicates to readers
        that we are using the same type as the instance.`)),
          (Ne = c()),
          (j = n("div")),
          (k = n("p")),
          (Fe = r("Questions or feedback? Feel free to reach out!")),
          this.h();
      },
      l(m) {
        gt(u.$$.fragment, m), (_ = d(m)), (o = s(m, "ARTICLE", { class: !0 }));
        var f = a(o);
        b = s(f, "DIV", { class: !0 });
        var He = a(b);
        E = s(He, "A", { href: !0, class: !0 });
        var Qe = a(E);
        (Z = l(Qe, "← Back to Python")),
          Qe.forEach(t),
          He.forEach(t),
          (ee = d(f)),
          (x = s(f, "H1", { class: !0 }));
        var ze = a(x);
        (te = l(ze, "Self Typing")),
          ze.forEach(t),
          (ne = d(f)),
          (B = s(f, "DIV", { class: !0 }));
        var We = a(B);
        (se = l(We, "August 15, 2025 • 6 min read")),
          We.forEach(t),
          (ae = d(f)),
          (I = s(f, "DIV", { class: !0 }));
        var Je = a(I);
        (re = l(
          Je,
          `Understanding Python's Self type hint for better type safety and method
    chaining. Learn how to properly annotate methods that return the current
    instance.`
        )),
          Je.forEach(t),
          (le = d(f)),
          (i = s(f, "DIV", { class: !0 }));
        var h = a(i);
        D = s(h, "P", {});
        var Ke = a(D);
        (oe = l(
          Ke,
          `Imagine you are writing a class that returns the current object in python
      such as when you want to allow for method-chaining in a sequence of calls,
      or using a setter-like method. For the type annotations here, two common
      ways other devs write this is:`
        )),
          Ke.forEach(t),
          (ie = d(h)),
          (L = s(h, "PRE", {}));
        var Xe = a(L);
        P = s(Xe, "CODE", { class: !0 });
        var Ye = a(P);
        (ce = l(
          Ye,
          `# String forward reference
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> "MyBuilder":
        self.name = name
        return self
# Bare class name
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> MyBuilder:
        self.name = name
        return self`
        )),
          Ye.forEach(t),
          Xe.forEach(t),
          (de = d(h)),
          (O = s(h, "P", {}));
        var Ze = a(O);
        (fe = l(Ze, "However, this causes two major problems where:")),
          Ze.forEach(t),
          (he = d(h)),
          (w = s(h, "UL", {}));
        var X = a(w);
        M = s(X, "LI", {});
        var Ge = a(M);
        $ = s(Ge, "STRONG", {});
        var et = a($);
        (me = l(et, "Refactoring:")),
          et.forEach(t),
          (ue = l(
            Ge,
            ` The return type of either the string 'MyBuilder'
        or class name MyBuilder will make refactoring difficult.`
          )),
          Ge.forEach(t),
          (pe = d(X)),
          (R = s(X, "LI", {}));
        var Ue = a(R);
        N = s(Ue, "STRONG", {});
        var tt = a(N);
        (ye = l(tt, "Subclassing:")),
          tt.forEach(t),
          (_e = l(Ue, " If you subclass, the return type is incorrect.")),
          Ue.forEach(t),
          X.forEach(t),
          (ge = d(h)),
          (S = s(h, "P", {}));
        var Y = a(S);
        (ve = l(Y, "Instead, you can import ")), (F = s(Y, "CODE", {}));
        var nt = a(F);
        (Ee = l(nt, "Self")),
          nt.forEach(t),
          (we = l(Y, " as the type annotation as such:")),
          Y.forEach(t),
          (Se = d(h)),
          (G = s(h, "PRE", {}));
        var st = a(G);
        C = s(st, "CODE", { class: !0 });
        var at = a(C);
        (be = l(
          at,
          `from typing import Self  # Python 3.11+ else 'from typing_extensions import Self'
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> Self:
        self.name = name
        return self`
        )),
          at.forEach(t),
          st.forEach(t),
          (xe = d(h)),
          (U = s(h, "H2", {}));
        var rt = a(U);
        (Be = l(rt, "Advantages of This Approach")),
          rt.forEach(t),
          (Ie = d(h)),
          (y = s(h, "UL", {}));
        var A = a(y);
        T = s(A, "LI", {});
        var Ve = a(T);
        V = s(Ve, "STRONG", {});
        var lt = a(V);
        (Pe = l(lt, "Refactoring:")),
          lt.forEach(t),
          (Me = l(
            Ve,
            ` No hardcoded class, which means it is resilient
        to class renaming.`
          )),
          Ve.forEach(t),
          (Re = d(A)),
          (g = s(A, "LI", {}));
        var W = a(g);
        q = s(W, "STRONG", {});
        var ot = a(q);
        (Ce = l(ot, "Easier Subclassing:")),
          ot.forEach(t),
          (Te = d(W)),
          (H = s(W, "CODE", {}));
        var it = a(H);
        (je = l(it, "Self")),
          it.forEach(t),
          (ke = l(
            W,
            ` is covariant and dynamically
        binds to self at runtime. Chain methods will now return the correct subclass
        type.`
          )),
          W.forEach(t),
          (Ae = d(A)),
          (v = s(A, "LI", {}));
        var J = a(v);
        Q = s(J, "STRONG", {});
        var ct = a(Q);
        (De = l(ct, "Readability:")),
          ct.forEach(t),
          (Le = d(J)),
          (z = s(J, "CODE", {}));
        var dt = a(z);
        (Oe = l(dt, "Self")),
          dt.forEach(t),
          ($e = l(
            J,
            ` clearly communicates to readers
        that we are using the same type as the instance.`
          )),
          J.forEach(t),
          A.forEach(t),
          h.forEach(t),
          (Ne = d(f)),
          (j = s(f, "DIV", { class: !0 }));
        var ft = a(j);
        k = s(ft, "P", { class: !0 });
        var ht = a(k);
        (Fe = l(ht, "Questions or feedback? Feel free to reach out!")),
          ht.forEach(t),
          ft.forEach(t),
          f.forEach(t),
          this.h();
      },
      h() {
        p(E, "href", "/python"),
          p(E, "class", "text-blue-600 hover:underline text-sm"),
          p(b, "class", "mb-8"),
          p(x, "class", "text-3xl font-bold mb-4"),
          p(B, "class", "text-sm text-neutral-500 mb-8"),
          p(I, "class", "text-lg text-neutral-700 mb-8 leading-relaxed"),
          p(P, "class", "language-python"),
          p(C, "class", "language-python"),
          p(i, "class", "prose prose-neutral max-w-none"),
          p(k, "class", "text-sm text-neutral-500"),
          p(j, "class", "border-t pt-8 mt-12"),
          p(
            o,
            "class",
            "layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"
          );
      },
      m(m, f) {
        vt(u, m, f),
          mt(m, _, f),
          mt(m, o, f),
          e(o, b),
          e(b, E),
          e(E, Z),
          e(o, ee),
          e(o, x),
          e(x, te),
          e(o, ne),
          e(o, B),
          e(B, se),
          e(o, ae),
          e(o, I),
          e(I, re),
          e(o, le),
          e(o, i),
          e(i, D),
          e(D, oe),
          e(i, ie),
          e(i, L),
          e(L, P),
          e(P, ce),
          e(i, de),
          e(i, O),
          e(O, fe),
          e(i, he),
          e(i, w),
          e(w, M),
          e(M, $),
          e($, me),
          e(M, ue),
          e(w, pe),
          e(w, R),
          e(R, N),
          e(N, ye),
          e(R, _e),
          e(i, ge),
          e(i, S),
          e(S, ve),
          e(S, F),
          e(F, Ee),
          e(S, we),
          e(i, Se),
          e(i, G),
          e(G, C),
          e(C, be),
          e(i, xe),
          e(i, U),
          e(U, Be),
          e(i, Ie),
          e(i, y),
          e(y, T),
          e(T, V),
          e(V, Pe),
          e(T, Me),
          e(y, Re),
          e(y, g),
          e(g, q),
          e(q, Ce),
          e(g, Te),
          e(g, H),
          e(H, je),
          e(g, ke),
          e(y, Ae),
          e(y, v),
          e(v, Q),
          e(Q, De),
          e(v, Le),
          e(v, z),
          e(z, Oe),
          e(v, $e),
          e(o, Ne),
          e(o, j),
          e(j, k),
          e(k, Fe),
          (K = !0);
      },
      p: Et,
      i(m) {
        K || (wt(u.$$.fragment, m), (K = !0));
      },
      o(m) {
        St(u.$$.fragment, m), (K = !1);
      },
      d(m) {
        bt(u, m), m && t(_), m && t(o);
      },
    }
  );
}
function Pt(qe) {
  return (
    xt(async () => {
      if (typeof window < "u" && !window.Prism) {
        const u = document.createElement("link");
        (u.rel = "stylesheet"),
          (u.href =
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"),
          document.head.appendChild(u);
        const _ = document.createElement("script");
        (_.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"),
          (_.onload = () => {
            const o = document.createElement("script");
            (o.src =
              "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"),
              (o.onload = () => {
                window.Prism.highlightAll();
              }),
              document.head.appendChild(o);
          }),
          document.head.appendChild(_);
      }
    }),
    []
  );
}
class Ct extends ut {
  constructor(u) {
    super(), pt(this, u, Pt, It, yt, {});
  }
}
export { Ct as default };
