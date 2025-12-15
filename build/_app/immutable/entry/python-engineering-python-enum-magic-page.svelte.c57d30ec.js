import {
  S as gn,
  i as yn,
  s as _n,
  y as In,
  a as i,
  k as a,
  q as n,
  z as On,
  c,
  l as s,
  m as r,
  r as o,
  h as t,
  n as m,
  A as Rn,
  b as vn,
  C as e,
  F as wn,
  g as Nn,
  d as Cn,
  B as Sn,
  o as bn,
} from "../chunks/index.dd6ea1d3.js";
import { S as Dn } from "../chunks/Seo.4277da45.js";
function Un(Pt) {
  let p,
    _,
    d,
    S,
    O,
    fe,
    ve,
    b,
    ge,
    ye,
    D,
    _e,
    Ie,
    U,
    Oe,
    Re,
    l,
    $,
    we,
    Ne,
    j,
    P,
    Ce,
    Se,
    y,
    be,
    V,
    De,
    Ue,
    Q,
    Pe,
    Fe,
    xe,
    B,
    F,
    Te,
    Ae,
    R,
    Le,
    K,
    ke,
    We,
    qe,
    z,
    x,
    Ge,
    Me,
    f,
    $e,
    H,
    je,
    Ve,
    X,
    Qe,
    Be,
    J,
    Ke,
    ze,
    Y,
    He,
    Xe,
    Je,
    Z,
    T,
    Ye,
    Ze,
    w,
    et,
    ee,
    tt,
    nt,
    ot,
    te,
    A,
    at,
    st,
    v,
    rt,
    ne,
    lt,
    ut,
    oe,
    it,
    ct,
    ae,
    dt,
    mt,
    ht,
    se,
    L,
    Et,
    pt,
    re,
    ft,
    vt,
    N,
    gt,
    le,
    yt,
    _t,
    It,
    ue,
    k,
    Ot,
    Rt,
    C,
    wt,
    ie,
    Nt,
    Ct,
    St,
    ce,
    W,
    bt,
    Dt,
    q,
    G,
    Ut,
    de;
  return (
    (p = new Dn({
      props: {
        title: "Enum Magic - Alex Wang",
        description:
          "Mastering Python's Enum, StrEnum, IntEnum, and Flags for type-safe constants",
      },
    })),
    {
      c() {
        In(p.$$.fragment),
          (_ = i()),
          (d = a("article")),
          (S = a("div")),
          (O = a("a")),
          (fe = n("← Back to Python")),
          (ve = i()),
          (b = a("h1")),
          (ge = n("Enum Magic")),
          (ye = i()),
          (D = a("div")),
          (_e = n("September 3, 2025 • 8 min read")),
          (Ie = i()),
          (U = a("div")),
          (Oe =
            n(`Mastering Python's Enum, StrEnum, IntEnum, and Flags for type-safe constants
    and better code organization.`)),
          (Re = i()),
          (l = a("div")),
          ($ = a("p")),
          (we =
            n(`Imagine you are writing a function that takes in levels of log levels and
      wants to do something such as printing or notifying specific individuals
      based on the level. For the sake of simplicity, the levels are info,
      warning, error:`)),
          (Ne = i()),
          (j = a("pre")),
          (P = a("code")),
          (Ce = n(`def log(level: str, message: str) -> None:
    ...`)),
          (Se = i()),
          (y = a("p")),
          (be = n("If you use ")),
          (V = a("code")),
          (De = n("str")),
          (Ue = n(` as arguments, you are susceptible to
      misspellings and potential unreal levels as someone might pass "errror" or
      "critical". To resolve this, you should use Enum, but preferably use
      `)),
          (Q = a("code")),
          (Pe = n("StrEnum")),
          (Fe = n(" (Python 3.11+) with something like this:")),
          (xe = i()),
          (B = a("pre")),
          (F = a("code")),
          (Te = n(`from enum import StrEnum

class LogLevel(StrEnum):
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"`)),
          (Ae = i()),
          (R = a("p")),
          (Le =
            n(`If, instead, you wanted to use integers to log different levels of
      warnings you could use `)),
          (K = a("code")),
          (ke = n("IntEnum")),
          (We = n(`. This is especially useful if
      you wanted to do mathematical operations on these values, such as if you
      wanted to sum the values of total ExitCode's generated.`)),
          (qe = i()),
          (z = a("pre")),
          (x = a("code")),
          (Ge = n(`from enum import IntEnum

class LogLevel(IntEnum):
    INFO = 0
    WARNING = 1
    ERROR = 2
    BIGERROR = 3

def log(level: LogLevel, message: str) -> None:
    ...`)),
          (Me = i()),
          (f = a("p")),
          ($e = n("Or even better, you could use ")),
          (H = a("code")),
          (je = n("auto()")),
          (Ve = n(` for both
      `)),
          (X = a("code")),
          (Qe = n("StrEnum")),
          (Be = n(`
      and `)),
          (J = a("code")),
          (Ke = n("IntEnum")),
          (ze = n(`, this way you can guarantee uniqueness and adding
      new values is easier. For `)),
          (Y = a("code")),
          (He = n("StrEnum")),
          (Xe = n(`, it represents the value as
      a lowercase of the real member name.`)),
          (Je = i()),
          (Z = a("pre")),
          (T = a("code")),
          (Ye = n(`from enum import StrEnum, auto

class LogLevel(StrEnum):
    INFO = auto()     # "info"
    WARNING = auto()  # "warning"
    ERROR = auto()    # "error"
    SUCCESS = auto()  # "success"`)),
          (Ze = i()),
          (w = a("p")),
          (et = n("For ")),
          (ee = a("code")),
          (tt = n("IntEnum")),
          (nt = n(`, it automatically creates order and generates
      uniqueness so no need to hardcode, and also makes adding new items easier.`)),
          (ot = i()),
          (te = a("pre")),
          (A = a("code")),
          (at = n(`from enum import IntEnum, auto

class LogLevel(IntEnum):
    INFO = auto()     # 1
    WARNING = auto()  # 2
    ERROR = auto()    # 3
    SUCCESS = auto()  # 4`)),
          (st = i()),
          (v = a("p")),
          (rt = n("Finally, you can also use ")),
          (ne = a("code")),
          (lt = n("Flags")),
          (ut = n(` which are assigned bitwise
      combinations of values (1, 2, 4, 8, 16). They are useful when you want to
      represent multiple boolean options at once, and together. To combine these
      use OR (`)),
          (oe = a("code")),
          (it = n("|")),
          (ct = n(") and AND (")),
          (ae = a("code")),
          (dt = n("&")),
          (mt = n(") operators.")),
          (ht = i()),
          (se = a("pre")),
          (L = a("code")),
          (Et = n(`from enum import Flag, auto

class Permission(Flag):
    READ = auto()     # 1
    WRITE = auto()    # 2
    EXECUTE = auto()  # 4

# Give read and write perms to the user
user_perms = Permission.READ | Permission.WRITE`)),
          (pt = i()),
          (re = a("h2")),
          (ft = n("Useful Decorators")),
          (vt = i()),
          (N = a("p")),
          (gt = n("A useful decorator would be the ")),
          (le = a("code")),
          (yt = n("@unique")),
          (_t = n(`, which guarantees
      that you don't have duplicate values.`)),
          (It = i()),
          (ue = a("pre")),
          (k = a("code")),
          (Ot = n(`from enum import Enum, unique

@unique
class Status(Enum):
    OK = 1
    SUCCESS = 1   # ❌ ValueError: duplicate value 1`)),
          (Rt = i()),
          (C = a("p")),
          (wt = n("Another potentially useful decorator for ENUMs is ")),
          (ie = a("code")),
          (Nt = n("@verify")),
          (Ct = n(` which
      helps you confirm that your values satisfy a certain set of conditions.`)),
          (St = i()),
          (ce = a("pre")),
          (W = a("code")),
          (bt = n(`from enum import Enum, verify, UNIQUE, CONTINUOUS

@verify(UNIQUE, CONTINUOUS)
class ErrorCode(Enum):
    NOT_FOUND = 1
    TIMEOUT = 2
    UNKNOWN = 3   # ✅ values are unique + continuous (1, 2, 3)`)),
          (Dt = i()),
          (q = a("div")),
          (G = a("p")),
          (Ut = n("Questions or feedback? Feel free to reach out!")),
          this.h();
      },
      l(E) {
        On(p.$$.fragment, E), (_ = c(E)), (d = s(E, "ARTICLE", { class: !0 }));
        var h = r(d);
        S = s(h, "DIV", { class: !0 });
        var Ft = r(S);
        O = s(Ft, "A", { href: !0, class: !0 });
        var xt = r(O);
        (fe = o(xt, "← Back to Python")),
          xt.forEach(t),
          Ft.forEach(t),
          (ve = c(h)),
          (b = s(h, "H1", { class: !0 }));
        var Tt = r(b);
        (ge = o(Tt, "Enum Magic")),
          Tt.forEach(t),
          (ye = c(h)),
          (D = s(h, "DIV", { class: !0 }));
        var At = r(D);
        (_e = o(At, "September 3, 2025 • 8 min read")),
          At.forEach(t),
          (Ie = c(h)),
          (U = s(h, "DIV", { class: !0 }));
        var Lt = r(U);
        (Oe = o(
          Lt,
          `Mastering Python's Enum, StrEnum, IntEnum, and Flags for type-safe constants
    and better code organization.`
        )),
          Lt.forEach(t),
          (Re = c(h)),
          (l = s(h, "DIV", { class: !0 }));
        var u = r(l);
        $ = s(u, "P", {});
        var kt = r($);
        (we = o(
          kt,
          `Imagine you are writing a function that takes in levels of log levels and
      wants to do something such as printing or notifying specific individuals
      based on the level. For the sake of simplicity, the levels are info,
      warning, error:`
        )),
          kt.forEach(t),
          (Ne = c(u)),
          (j = s(u, "PRE", {}));
        var Wt = r(j);
        P = s(Wt, "CODE", { class: !0 });
        var qt = r(P);
        (Ce = o(
          qt,
          `def log(level: str, message: str) -> None:
    ...`
        )),
          qt.forEach(t),
          Wt.forEach(t),
          (Se = c(u)),
          (y = s(u, "P", {}));
        var M = r(y);
        (be = o(M, "If you use ")), (V = s(M, "CODE", {}));
        var Gt = r(V);
        (De = o(Gt, "str")),
          Gt.forEach(t),
          (Ue = o(
            M,
            ` as arguments, you are susceptible to
      misspellings and potential unreal levels as someone might pass "errror" or
      "critical". To resolve this, you should use Enum, but preferably use
      `
          )),
          (Q = s(M, "CODE", {}));
        var Mt = r(Q);
        (Pe = o(Mt, "StrEnum")),
          Mt.forEach(t),
          (Fe = o(M, " (Python 3.11+) with something like this:")),
          M.forEach(t),
          (xe = c(u)),
          (B = s(u, "PRE", {}));
        var $t = r(B);
        F = s($t, "CODE", { class: !0 });
        var jt = r(F);
        (Te = o(
          jt,
          `from enum import StrEnum

class LogLevel(StrEnum):
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"`
        )),
          jt.forEach(t),
          $t.forEach(t),
          (Ae = c(u)),
          (R = s(u, "P", {}));
        var me = r(R);
        (Le = o(
          me,
          `If, instead, you wanted to use integers to log different levels of
      warnings you could use `
        )),
          (K = s(me, "CODE", {}));
        var Vt = r(K);
        (ke = o(Vt, "IntEnum")),
          Vt.forEach(t),
          (We = o(
            me,
            `. This is especially useful if
      you wanted to do mathematical operations on these values, such as if you
      wanted to sum the values of total ExitCode's generated.`
          )),
          me.forEach(t),
          (qe = c(u)),
          (z = s(u, "PRE", {}));
        var Qt = r(z);
        x = s(Qt, "CODE", { class: !0 });
        var Bt = r(x);
        (Ge = o(
          Bt,
          `from enum import IntEnum

class LogLevel(IntEnum):
    INFO = 0
    WARNING = 1
    ERROR = 2
    BIGERROR = 3

def log(level: LogLevel, message: str) -> None:
    ...`
        )),
          Bt.forEach(t),
          Qt.forEach(t),
          (Me = c(u)),
          (f = s(u, "P", {}));
        var g = r(f);
        ($e = o(g, "Or even better, you could use ")), (H = s(g, "CODE", {}));
        var Kt = r(H);
        (je = o(Kt, "auto()")),
          Kt.forEach(t),
          (Ve = o(
            g,
            ` for both
      `
          )),
          (X = s(g, "CODE", {}));
        var zt = r(X);
        (Qe = o(zt, "StrEnum")),
          zt.forEach(t),
          (Be = o(
            g,
            `
      and `
          )),
          (J = s(g, "CODE", {}));
        var Ht = r(J);
        (Ke = o(Ht, "IntEnum")),
          Ht.forEach(t),
          (ze = o(
            g,
            `, this way you can guarantee uniqueness and adding
      new values is easier. For `
          )),
          (Y = s(g, "CODE", {}));
        var Xt = r(Y);
        (He = o(Xt, "StrEnum")),
          Xt.forEach(t),
          (Xe = o(
            g,
            `, it represents the value as
      a lowercase of the real member name.`
          )),
          g.forEach(t),
          (Je = c(u)),
          (Z = s(u, "PRE", {}));
        var Jt = r(Z);
        T = s(Jt, "CODE", { class: !0 });
        var Yt = r(T);
        (Ye = o(
          Yt,
          `from enum import StrEnum, auto

class LogLevel(StrEnum):
    INFO = auto()     # "info"
    WARNING = auto()  # "warning"
    ERROR = auto()    # "error"
    SUCCESS = auto()  # "success"`
        )),
          Yt.forEach(t),
          Jt.forEach(t),
          (Ze = c(u)),
          (w = s(u, "P", {}));
        var he = r(w);
        (et = o(he, "For ")), (ee = s(he, "CODE", {}));
        var Zt = r(ee);
        (tt = o(Zt, "IntEnum")),
          Zt.forEach(t),
          (nt = o(
            he,
            `, it automatically creates order and generates
      uniqueness so no need to hardcode, and also makes adding new items easier.`
          )),
          he.forEach(t),
          (ot = c(u)),
          (te = s(u, "PRE", {}));
        var en = r(te);
        A = s(en, "CODE", { class: !0 });
        var tn = r(A);
        (at = o(
          tn,
          `from enum import IntEnum, auto

class LogLevel(IntEnum):
    INFO = auto()     # 1
    WARNING = auto()  # 2
    ERROR = auto()    # 3
    SUCCESS = auto()  # 4`
        )),
          tn.forEach(t),
          en.forEach(t),
          (st = c(u)),
          (v = s(u, "P", {}));
        var I = r(v);
        (rt = o(I, "Finally, you can also use ")), (ne = s(I, "CODE", {}));
        var nn = r(ne);
        (lt = o(nn, "Flags")),
          nn.forEach(t),
          (ut = o(
            I,
            ` which are assigned bitwise
      combinations of values (1, 2, 4, 8, 16). They are useful when you want to
      represent multiple boolean options at once, and together. To combine these
      use OR (`
          )),
          (oe = s(I, "CODE", {}));
        var on = r(oe);
        (it = o(on, "|")),
          on.forEach(t),
          (ct = o(I, ") and AND (")),
          (ae = s(I, "CODE", {}));
        var an = r(ae);
        (dt = o(an, "&")),
          an.forEach(t),
          (mt = o(I, ") operators.")),
          I.forEach(t),
          (ht = c(u)),
          (se = s(u, "PRE", {}));
        var sn = r(se);
        L = s(sn, "CODE", { class: !0 });
        var rn = r(L);
        (Et = o(
          rn,
          `from enum import Flag, auto

class Permission(Flag):
    READ = auto()     # 1
    WRITE = auto()    # 2
    EXECUTE = auto()  # 4

# Give read and write perms to the user
user_perms = Permission.READ | Permission.WRITE`
        )),
          rn.forEach(t),
          sn.forEach(t),
          (pt = c(u)),
          (re = s(u, "H2", {}));
        var ln = r(re);
        (ft = o(ln, "Useful Decorators")),
          ln.forEach(t),
          (vt = c(u)),
          (N = s(u, "P", {}));
        var Ee = r(N);
        (gt = o(Ee, "A useful decorator would be the ")),
          (le = s(Ee, "CODE", {}));
        var un = r(le);
        (yt = o(un, "@unique")),
          un.forEach(t),
          (_t = o(
            Ee,
            `, which guarantees
      that you don't have duplicate values.`
          )),
          Ee.forEach(t),
          (It = c(u)),
          (ue = s(u, "PRE", {}));
        var cn = r(ue);
        k = s(cn, "CODE", { class: !0 });
        var dn = r(k);
        (Ot = o(
          dn,
          `from enum import Enum, unique

@unique
class Status(Enum):
    OK = 1
    SUCCESS = 1   # ❌ ValueError: duplicate value 1`
        )),
          dn.forEach(t),
          cn.forEach(t),
          (Rt = c(u)),
          (C = s(u, "P", {}));
        var pe = r(C);
        (wt = o(pe, "Another potentially useful decorator for ENUMs is ")),
          (ie = s(pe, "CODE", {}));
        var mn = r(ie);
        (Nt = o(mn, "@verify")),
          mn.forEach(t),
          (Ct = o(
            pe,
            ` which
      helps you confirm that your values satisfy a certain set of conditions.`
          )),
          pe.forEach(t),
          (St = c(u)),
          (ce = s(u, "PRE", {}));
        var hn = r(ce);
        W = s(hn, "CODE", { class: !0 });
        var En = r(W);
        (bt = o(
          En,
          `from enum import Enum, verify, UNIQUE, CONTINUOUS

@verify(UNIQUE, CONTINUOUS)
class ErrorCode(Enum):
    NOT_FOUND = 1
    TIMEOUT = 2
    UNKNOWN = 3   # ✅ values are unique + continuous (1, 2, 3)`
        )),
          En.forEach(t),
          hn.forEach(t),
          u.forEach(t),
          (Dt = c(h)),
          (q = s(h, "DIV", { class: !0 }));
        var pn = r(q);
        G = s(pn, "P", { class: !0 });
        var fn = r(G);
        (Ut = o(fn, "Questions or feedback? Feel free to reach out!")),
          fn.forEach(t),
          pn.forEach(t),
          h.forEach(t),
          this.h();
      },
      h() {
        m(O, "href", "/python"),
          m(O, "class", "text-blue-600 hover:underline text-sm"),
          m(S, "class", "mb-8"),
          m(b, "class", "text-3xl font-bold mb-4"),
          m(D, "class", "text-sm text-neutral-500 mb-8"),
          m(U, "class", "text-lg text-neutral-700 mb-8 leading-relaxed"),
          m(P, "class", "language-python"),
          m(F, "class", "language-python"),
          m(x, "class", "language-python"),
          m(T, "class", "language-python"),
          m(A, "class", "language-python"),
          m(L, "class", "language-python"),
          m(k, "class", "language-python"),
          m(W, "class", "language-python"),
          m(l, "class", "prose prose-neutral max-w-none"),
          m(G, "class", "text-sm text-neutral-500"),
          m(q, "class", "border-t pt-8 mt-12"),
          m(
            d,
            "class",
            "layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"
          );
      },
      m(E, h) {
        Rn(p, E, h),
          vn(E, _, h),
          vn(E, d, h),
          e(d, S),
          e(S, O),
          e(O, fe),
          e(d, ve),
          e(d, b),
          e(b, ge),
          e(d, ye),
          e(d, D),
          e(D, _e),
          e(d, Ie),
          e(d, U),
          e(U, Oe),
          e(d, Re),
          e(d, l),
          e(l, $),
          e($, we),
          e(l, Ne),
          e(l, j),
          e(j, P),
          e(P, Ce),
          e(l, Se),
          e(l, y),
          e(y, be),
          e(y, V),
          e(V, De),
          e(y, Ue),
          e(y, Q),
          e(Q, Pe),
          e(y, Fe),
          e(l, xe),
          e(l, B),
          e(B, F),
          e(F, Te),
          e(l, Ae),
          e(l, R),
          e(R, Le),
          e(R, K),
          e(K, ke),
          e(R, We),
          e(l, qe),
          e(l, z),
          e(z, x),
          e(x, Ge),
          e(l, Me),
          e(l, f),
          e(f, $e),
          e(f, H),
          e(H, je),
          e(f, Ve),
          e(f, X),
          e(X, Qe),
          e(f, Be),
          e(f, J),
          e(J, Ke),
          e(f, ze),
          e(f, Y),
          e(Y, He),
          e(f, Xe),
          e(l, Je),
          e(l, Z),
          e(Z, T),
          e(T, Ye),
          e(l, Ze),
          e(l, w),
          e(w, et),
          e(w, ee),
          e(ee, tt),
          e(w, nt),
          e(l, ot),
          e(l, te),
          e(te, A),
          e(A, at),
          e(l, st),
          e(l, v),
          e(v, rt),
          e(v, ne),
          e(ne, lt),
          e(v, ut),
          e(v, oe),
          e(oe, it),
          e(v, ct),
          e(v, ae),
          e(ae, dt),
          e(v, mt),
          e(l, ht),
          e(l, se),
          e(se, L),
          e(L, Et),
          e(l, pt),
          e(l, re),
          e(re, ft),
          e(l, vt),
          e(l, N),
          e(N, gt),
          e(N, le),
          e(le, yt),
          e(N, _t),
          e(l, It),
          e(l, ue),
          e(ue, k),
          e(k, Ot),
          e(l, Rt),
          e(l, C),
          e(C, wt),
          e(C, ie),
          e(ie, Nt),
          e(C, Ct),
          e(l, St),
          e(l, ce),
          e(ce, W),
          e(W, bt),
          e(d, Dt),
          e(d, q),
          e(q, G),
          e(G, Ut),
          (de = !0);
      },
      p: wn,
      i(E) {
        de || (Nn(p.$$.fragment, E), (de = !0));
      },
      o(E) {
        Cn(p.$$.fragment, E), (de = !1);
      },
      d(E) {
        Sn(p, E), E && t(_), E && t(d);
      },
    }
  );
}
function Pn(Pt) {
  return (
    bn(async () => {
      if (typeof window < "u" && !window.Prism) {
        const p = document.createElement("link");
        (p.rel = "stylesheet"),
          (p.href =
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"),
          document.head.appendChild(p);
        const _ = document.createElement("script");
        (_.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"),
          (_.onload = () => {
            const d = document.createElement("script");
            (d.src =
              "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"),
              (d.onload = () => {
                window.Prism.highlightAll();
              }),
              document.head.appendChild(d);
          }),
          document.head.appendChild(_);
      }
    }),
    []
  );
}
class Tn extends gn {
  constructor(p) {
    super(), yn(this, p, Pn, Un, _n, {});
  }
}
export { Tn as default };
