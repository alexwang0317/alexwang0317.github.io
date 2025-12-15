import {
  S as bt,
  i as It,
  s as wt,
  y as kt,
  a as p,
  k as n,
  q as a,
  z as Nt,
  c as d,
  l as o,
  m as r,
  r as s,
  h as t,
  n as f,
  A as Gt,
  b as Pt,
  C as e,
  F as Kt,
  g as Yt,
  d as Ht,
  B as Ot,
  o as Dt,
} from "../chunks/index.dd6ea1d3.js";
import { S as St } from "../chunks/Seo.4277da45.js";
function $t(Me) {
  let h,
    E,
    c,
    g,
    C,
    Z,
    ee,
    T,
    te,
    ne,
    x,
    oe,
    re,
    i,
    D,
    ae,
    se,
    v,
    ie,
    S,
    le,
    ce,
    pe,
    $,
    P,
    de,
    me,
    y,
    ue,
    R,
    fe,
    he,
    j,
    ye,
    _e,
    U,
    Ee,
    Ce,
    B,
    ve,
    ge,
    Te,
    F,
    xe,
    Pe,
    b,
    A,
    be,
    Ie,
    we,
    q,
    I,
    ke,
    Ne,
    V,
    w,
    Ge,
    Ke,
    k,
    z,
    Ye,
    He,
    Oe,
    Q,
    N,
    De,
    Se,
    G,
    W,
    $e,
    Re,
    je,
    L,
    K,
    Ue,
    Be,
    Y,
    M,
    Fe,
    Ae,
    qe,
    H,
    O,
    Ve,
    J;
  return (
    (h = new St({
      props: {
        title: "TYPE_CHECKING - Python Engineering Notes",
        description:
          "Import types conditionally to avoid circular imports and heavy dependencies",
      },
    })),
    {
      c() {
        kt(h.$$.fragment),
          (E = p()),
          (c = n("article")),
          (g = n("div")),
          (C = n("a")),
          (Z = a("← Back to Python")),
          (ee = p()),
          (T = n("h1")),
          (te = a("TYPE_CHECKING")),
          (ne = p()),
          (x = n("div")),
          (oe =
            a(`Import types conditionally to avoid circular imports and heavy dependencies
    while maintaining clean type annotations.`)),
          (re = p()),
          (i = n("div")),
          (D = n("p")),
          (ae =
            a(`Imagine you have a case where you have a circular dependency. Usually,
      this is a problem, and a quick post on interface stubs may be helpful, but
      sometimes refactoring it wouldn't make sense, and the circular import may
      not be practical to refactor.`)),
          (se = p()),
          (v = n("p")),
          (ie = a("Instead, what you may do is use ")),
          (S = n("code")),
          (le = a("TYPE_CHECKING")),
          (ce = a(":")),
          (pe = p()),
          ($ = n("pre")),
          (P = n("code")),
          (de =
            a(`from __future__ import annotations  # optional but handy for forward refs
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    # Only imported for type checkers; not executed at runtime
    from some_heavy_lib import BigType

class Thing:
    def __init__(self, x: BigType):  # works for type checkers
        self.x = x`)),
          (me = p()),
          (y = n("p")),
          (ue = a("The ")),
          (R = n("code")),
          (fe = a("TYPE_CHECKING")),
          (he = a(" constant is ")),
          (j = n("code")),
          (ye = a("False")),
          (_e = a(` at runtime
      but `)),
          (U = n("code")),
          (Ee = a("True")),
          (Ce = a(`
      when type checkers like mypy or PyCharm analyze your code. This means imports
      inside the
      `)),
          (B = n("code")),
          (ve = a("if TYPE_CHECKING:")),
          (ge = a(` block are only processed during static type
      checking.`)),
          (Te = p()),
          (F = n("p")),
          (xe = a("This pattern is useful for several scenarios:")),
          (Pe = p()),
          (b = n("p")),
          (A = n("strong")),
          (be = a("Avoiding circular imports:")),
          (Ie = a(` When two modules need to reference
      each other's types, you can break the cycle by importing one side only for
      type checking.`)),
          (we = p()),
          (q = n("pre")),
          (I = n("code")),
          (ke = a(`# user.py
from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from order import Order

class User:
    def __init__(self, name: str):
        self.name = name
        self.orders: list[Order] = []`)),
          (Ne = p()),
          (V = n("pre")),
          (w = n("code")),
          (Ge = a(`# order.py  
from user import User

class Order:
    def __init__(self, user: User, amount: float):
        self.user = user
        self.amount = amount`)),
          (Ke = p()),
          (k = n("p")),
          (z = n("strong")),
          (Ye = a("Skipping heavy dependencies:")),
          (He = a(` Import expensive libraries only
      for type hints without the runtime overhead.`)),
          (Oe = p()),
          (Q = n("pre")),
          (N = n("code")),
          (De = a(`from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import pandas as pd
    import numpy as np

def process_data(df: pd.DataFrame) -> np.ndarray:
    # pandas and numpy aren't imported at runtime
    # but type checkers understand the annotations
    pass`)),
          (Se = p()),
          (G = n("p")),
          (W = n("strong")),
          ($e = a("Clean annotations:")),
          (Re = a(` Keep type annotations readable without
      string literals or complex workarounds.`)),
          (je = p()),
          (L = n("pre")),
          (K = n("code")),
          (Ue = a(`# Instead of this:
def bad_example(data: "ComplexType") -> "list[ComplexType]":
    pass

# You can write this:
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from complex_module import ComplexType

def good_example(data: ComplexType) -> list[ComplexType]:
    pass`)),
          (Be = p()),
          (Y = n("p")),
          (M = n("code")),
          (Fe = a("TYPE_CHECKING")),
          (Ae = a(` is essential when you need to reference types that
      would cause circular imports, performance issues, or dependency problems, while
      still maintaining excellent static type checking support.`)),
          (qe = p()),
          (H = n("div")),
          (O = n("p")),
          (Ve = a("Questions or feedback? Feel free to reach out!")),
          this.h();
      },
      l(m) {
        Nt(h.$$.fragment, m), (E = d(m)), (c = o(m, "ARTICLE", { class: !0 }));
        var u = r(c);
        g = o(u, "DIV", { class: !0 });
        var Je = r(g);
        C = o(Je, "A", { href: !0, class: !0 });
        var Xe = r(C);
        (Z = s(Xe, "← Back to Python")),
          Xe.forEach(t),
          Je.forEach(t),
          (ee = d(u)),
          (T = o(u, "H1", { class: !0 }));
        var Ze = r(T);
        (te = s(Ze, "TYPE_CHECKING")),
          Ze.forEach(t),
          (ne = d(u)),
          (x = o(u, "DIV", { class: !0 }));
        var et = r(x);
        (oe = s(
          et,
          `Import types conditionally to avoid circular imports and heavy dependencies
    while maintaining clean type annotations.`
        )),
          et.forEach(t),
          (re = d(u)),
          (i = o(u, "DIV", { class: !0 }));
        var l = r(i);
        D = o(l, "P", {});
        var tt = r(D);
        (ae = s(
          tt,
          `Imagine you have a case where you have a circular dependency. Usually,
      this is a problem, and a quick post on interface stubs may be helpful, but
      sometimes refactoring it wouldn't make sense, and the circular import may
      not be practical to refactor.`
        )),
          tt.forEach(t),
          (se = d(l)),
          (v = o(l, "P", {}));
        var X = r(v);
        (ie = s(X, "Instead, what you may do is use ")), (S = o(X, "CODE", {}));
        var nt = r(S);
        (le = s(nt, "TYPE_CHECKING")),
          nt.forEach(t),
          (ce = s(X, ":")),
          X.forEach(t),
          (pe = d(l)),
          ($ = o(l, "PRE", {}));
        var ot = r($);
        P = o(ot, "CODE", { class: !0 });
        var rt = r(P);
        (de = s(
          rt,
          `from __future__ import annotations  # optional but handy for forward refs
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    # Only imported for type checkers; not executed at runtime
    from some_heavy_lib import BigType

class Thing:
    def __init__(self, x: BigType):  # works for type checkers
        self.x = x`
        )),
          rt.forEach(t),
          ot.forEach(t),
          (me = d(l)),
          (y = o(l, "P", {}));
        var _ = r(y);
        (ue = s(_, "The ")), (R = o(_, "CODE", {}));
        var at = r(R);
        (fe = s(at, "TYPE_CHECKING")),
          at.forEach(t),
          (he = s(_, " constant is ")),
          (j = o(_, "CODE", {}));
        var st = r(j);
        (ye = s(st, "False")),
          st.forEach(t),
          (_e = s(
            _,
            ` at runtime
      but `
          )),
          (U = o(_, "CODE", {}));
        var it = r(U);
        (Ee = s(it, "True")),
          it.forEach(t),
          (Ce = s(
            _,
            `
      when type checkers like mypy or PyCharm analyze your code. This means imports
      inside the
      `
          )),
          (B = o(_, "CODE", {}));
        var lt = r(B);
        (ve = s(lt, "if TYPE_CHECKING:")),
          lt.forEach(t),
          (ge = s(
            _,
            ` block are only processed during static type
      checking.`
          )),
          _.forEach(t),
          (Te = d(l)),
          (F = o(l, "P", {}));
        var ct = r(F);
        (xe = s(ct, "This pattern is useful for several scenarios:")),
          ct.forEach(t),
          (Pe = d(l)),
          (b = o(l, "P", {}));
        var ze = r(b);
        A = o(ze, "STRONG", {});
        var pt = r(A);
        (be = s(pt, "Avoiding circular imports:")),
          pt.forEach(t),
          (Ie = s(
            ze,
            ` When two modules need to reference
      each other's types, you can break the cycle by importing one side only for
      type checking.`
          )),
          ze.forEach(t),
          (we = d(l)),
          (q = o(l, "PRE", {}));
        var dt = r(q);
        I = o(dt, "CODE", { class: !0 });
        var mt = r(I);
        (ke = s(
          mt,
          `# user.py
from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from order import Order

class User:
    def __init__(self, name: str):
        self.name = name
        self.orders: list[Order] = []`
        )),
          mt.forEach(t),
          dt.forEach(t),
          (Ne = d(l)),
          (V = o(l, "PRE", {}));
        var ut = r(V);
        w = o(ut, "CODE", { class: !0 });
        var ft = r(w);
        (Ge = s(
          ft,
          `# order.py  
from user import User

class Order:
    def __init__(self, user: User, amount: float):
        self.user = user
        self.amount = amount`
        )),
          ft.forEach(t),
          ut.forEach(t),
          (Ke = d(l)),
          (k = o(l, "P", {}));
        var Qe = r(k);
        z = o(Qe, "STRONG", {});
        var ht = r(z);
        (Ye = s(ht, "Skipping heavy dependencies:")),
          ht.forEach(t),
          (He = s(
            Qe,
            ` Import expensive libraries only
      for type hints without the runtime overhead.`
          )),
          Qe.forEach(t),
          (Oe = d(l)),
          (Q = o(l, "PRE", {}));
        var yt = r(Q);
        N = o(yt, "CODE", { class: !0 });
        var _t = r(N);
        (De = s(
          _t,
          `from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import pandas as pd
    import numpy as np

def process_data(df: pd.DataFrame) -> np.ndarray:
    # pandas and numpy aren't imported at runtime
    # but type checkers understand the annotations
    pass`
        )),
          _t.forEach(t),
          yt.forEach(t),
          (Se = d(l)),
          (G = o(l, "P", {}));
        var We = r(G);
        W = o(We, "STRONG", {});
        var Et = r(W);
        ($e = s(Et, "Clean annotations:")),
          Et.forEach(t),
          (Re = s(
            We,
            ` Keep type annotations readable without
      string literals or complex workarounds.`
          )),
          We.forEach(t),
          (je = d(l)),
          (L = o(l, "PRE", {}));
        var Ct = r(L);
        K = o(Ct, "CODE", { class: !0 });
        var vt = r(K);
        (Ue = s(
          vt,
          `# Instead of this:
def bad_example(data: "ComplexType") -> "list[ComplexType]":
    pass

# You can write this:
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from complex_module import ComplexType

def good_example(data: ComplexType) -> list[ComplexType]:
    pass`
        )),
          vt.forEach(t),
          Ct.forEach(t),
          (Be = d(l)),
          (Y = o(l, "P", {}));
        var Le = r(Y);
        M = o(Le, "CODE", {});
        var gt = r(M);
        (Fe = s(gt, "TYPE_CHECKING")),
          gt.forEach(t),
          (Ae = s(
            Le,
            ` is essential when you need to reference types that
      would cause circular imports, performance issues, or dependency problems, while
      still maintaining excellent static type checking support.`
          )),
          Le.forEach(t),
          l.forEach(t),
          (qe = d(u)),
          (H = o(u, "DIV", { class: !0 }));
        var Tt = r(H);
        O = o(Tt, "P", { class: !0 });
        var xt = r(O);
        (Ve = s(xt, "Questions or feedback? Feel free to reach out!")),
          xt.forEach(t),
          Tt.forEach(t),
          u.forEach(t),
          this.h();
      },
      h() {
        f(C, "href", "/python"),
          f(C, "class", "text-blue-600 hover:underline text-sm"),
          f(g, "class", "mb-8"),
          f(T, "class", "text-3xl font-bold mb-4"),
          f(x, "class", "text-lg text-neutral-700 mb-8 leading-relaxed"),
          f(P, "class", "language-python"),
          f(I, "class", "language-python"),
          f(w, "class", "language-python"),
          f(N, "class", "language-python"),
          f(K, "class", "language-python"),
          f(i, "class", "prose prose-neutral max-w-none"),
          f(O, "class", "text-sm text-neutral-500"),
          f(H, "class", "border-t pt-8 mt-12"),
          f(c, "class", "layout-md py-12 mx-auto max-w-3xl px-6 svelte-ufiiy0");
      },
      m(m, u) {
        Gt(h, m, u),
          Pt(m, E, u),
          Pt(m, c, u),
          e(c, g),
          e(g, C),
          e(C, Z),
          e(c, ee),
          e(c, T),
          e(T, te),
          e(c, ne),
          e(c, x),
          e(x, oe),
          e(c, re),
          e(c, i),
          e(i, D),
          e(D, ae),
          e(i, se),
          e(i, v),
          e(v, ie),
          e(v, S),
          e(S, le),
          e(v, ce),
          e(i, pe),
          e(i, $),
          e($, P),
          e(P, de),
          e(i, me),
          e(i, y),
          e(y, ue),
          e(y, R),
          e(R, fe),
          e(y, he),
          e(y, j),
          e(j, ye),
          e(y, _e),
          e(y, U),
          e(U, Ee),
          e(y, Ce),
          e(y, B),
          e(B, ve),
          e(y, ge),
          e(i, Te),
          e(i, F),
          e(F, xe),
          e(i, Pe),
          e(i, b),
          e(b, A),
          e(A, be),
          e(b, Ie),
          e(i, we),
          e(i, q),
          e(q, I),
          e(I, ke),
          e(i, Ne),
          e(i, V),
          e(V, w),
          e(w, Ge),
          e(i, Ke),
          e(i, k),
          e(k, z),
          e(z, Ye),
          e(k, He),
          e(i, Oe),
          e(i, Q),
          e(Q, N),
          e(N, De),
          e(i, Se),
          e(i, G),
          e(G, W),
          e(W, $e),
          e(G, Re),
          e(i, je),
          e(i, L),
          e(L, K),
          e(K, Ue),
          e(i, Be),
          e(i, Y),
          e(Y, M),
          e(M, Fe),
          e(Y, Ae),
          e(c, qe),
          e(c, H),
          e(H, O),
          e(O, Ve),
          (J = !0);
      },
      p: Kt,
      i(m) {
        J || (Yt(h.$$.fragment, m), (J = !0));
      },
      o(m) {
        Ht(h.$$.fragment, m), (J = !1);
      },
      d(m) {
        Ot(h, m), m && t(E), m && t(c);
      },
    }
  );
}
function Rt(Me) {
  return (
    Dt(async () => {
      if (typeof window < "u" && !window.Prism) {
        const h = document.createElement("link");
        (h.rel = "stylesheet"),
          (h.href =
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"),
          document.head.appendChild(h);
        const E = document.createElement("script");
        (E.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"),
          (E.onload = () => {
            const c = document.createElement("script");
            (c.src =
              "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"),
              (c.onload = () => {
                window.Prism.highlightAll();
              }),
              document.head.appendChild(c);
          }),
          document.head.appendChild(E);
      }
    }),
    []
  );
}
class Bt extends bt {
  constructor(h) {
    super(), It(this, h, Rt, $t, wt, {});
  }
}
export { Bt as default };
