import {
  S as ps,
  i as gs,
  s as hs,
  y as us,
  a as c,
  k as a,
  q as t,
  z as fs,
  c as d,
  l as s,
  m as r,
  r as o,
  h as n,
  n as T,
  A as vs,
  b as ds,
  C as e,
  F as _s,
  g as ms,
  d as ys,
  B as Ps,
  o as Es,
} from "../chunks/index.dd6ea1d3.js";
import { S as bs } from "../chunks/Seo.4277da45.js";
function Ls(Gn) {
  let P,
    D,
    f,
    S,
    A,
    Fe,
    Ge,
    H,
    qe,
    Qe,
    l,
    j,
    J,
    ze,
    Me,
    Je,
    K,
    Ke,
    Xe,
    k,
    R,
    X,
    Ze,
    et,
    tt,
    U,
    Z,
    ot,
    nt,
    at,
    W,
    ee,
    st,
    rt,
    lt,
    te,
    it,
    ct,
    oe,
    dt,
    pt,
    ne,
    gt,
    ht,
    ae,
    $,
    ut,
    ft,
    se,
    vt,
    _t,
    re,
    p,
    mt,
    qn = "{",
    yt,
    Pt,
    Qn = "}",
    Et,
    bt,
    zn = "{",
    Lt,
    Tt,
    Mn = "}",
    Ct,
    Vt,
    Jn = "{",
    wt,
    kt,
    Kn = "}",
    It,
    Dt,
    Xn = "{",
    Ot,
    Nt,
    Zn = "}",
    At,
    Bt,
    ea = "{",
    xt,
    St,
    ta = "}",
    Ht,
    jt,
    Rt,
    le,
    Ut,
    Wt,
    ie,
    $t,
    Yt,
    _,
    Ft,
    ce,
    Gt,
    qt,
    de,
    Qt,
    zt,
    pe,
    Mt,
    Jt,
    ge,
    Kt,
    Xt,
    he,
    Zt,
    eo,
    to,
    I,
    oo,
    ue,
    no,
    ao,
    fe,
    so,
    ro,
    lo,
    Y,
    io,
    ve,
    co,
    po,
    B,
    go,
    _e,
    ho,
    uo,
    fo,
    me,
    g,
    vo,
    oa = "{",
    _o,
    mo,
    na = "}",
    yo,
    Po,
    aa = "{",
    Eo,
    bo,
    sa = "}",
    Lo,
    To,
    ra = "{",
    Co,
    Vo,
    la = "}",
    wo,
    ko,
    ia = "{",
    Io,
    Do,
    ca = "}",
    Oo,
    No,
    da = "{",
    Ao,
    Bo,
    pa = "}",
    xo,
    So,
    Ho,
    ye,
    jo,
    Ro,
    C,
    Uo,
    Pe,
    Wo,
    $o,
    Ee,
    Yo,
    Fo,
    be,
    Go,
    qo,
    Qo,
    E,
    zo,
    Le,
    Mo,
    Jo,
    Te,
    Ko,
    Xo,
    Ce,
    Zo,
    en,
    Ve,
    tn,
    on,
    nn,
    v,
    an,
    we,
    sn,
    rn,
    ke,
    ln,
    cn,
    Ie,
    dn,
    pn,
    De,
    gn,
    hn,
    Oe,
    un,
    fn,
    Ne,
    vn,
    _n,
    mn,
    Ae,
    yn,
    Pn,
    Be,
    F,
    En,
    bn,
    G,
    Ln,
    xe,
    Tn,
    Cn,
    x,
    Vn,
    Se,
    wn,
    kn,
    In,
    V,
    He,
    Dn,
    On,
    je,
    Nn,
    An,
    Re,
    Bn,
    xn,
    Ue,
    Sn,
    Hn,
    q,
    Q,
    jn,
    We;
  return (
    (P = new bs({
      props: {
        title: "TypeVar Contravariance - Python Engineering Notes",
        description:
          "TypeVar contravariance for type-safe class hierarchies and proper subtyping in Python",
      },
    })),
    {
      c() {
        us(P.$$.fragment),
          (D = c()),
          (f = a("article")),
          (S = a("div")),
          (A = a("a")),
          (Fe = t("← Back to Python")),
          (Ge = c()),
          (H = a("h1")),
          (qe = t("TypeVar Contravariance")),
          (Qe = c()),
          (l = a("div")),
          (j = a("p")),
          (J = a("code")),
          (ze = t("TypeVar")),
          (Me = t(` contravariance helps resolve type checking issues in class
      hierarchies, particularly for consumer functions that take parameters of generic
      types.`)),
          (Je = c()),
          (K = a("p")),
          (Ke =
            t(`Before diving into contravariance, we need to define three fundamental
      terms in type theory and subtyping:`)),
          (Xe = c()),
          (k = a("ul")),
          (R = a("li")),
          (X = a("strong")),
          (Ze = t("Covariance:")),
          (et = t(` A is a subtype of B → Container[A] is a subtype
        of Container[B].`)),
          (tt = c()),
          (U = a("li")),
          (Z = a("strong")),
          (ot = t("Contravariance:")),
          (nt = t(` A is a subtype of B → Container[B] is a
        subtype of Container[A].`)),
          (at = c()),
          (W = a("li")),
          (ee = a("strong")),
          (st = t("Invariance:")),
          (rt = t(` A is a subtype of B → Container[A] is distinct
        from Container[B].`)),
          (lt = c()),
          (te = a("p")),
          (it =
            t(`From object-oriented programming, a subtype means that whenever you have
      something that expects type A, if B is a subtype of A, you can replace A
      with B and everything should still work correctly. This is the essence of
      the Liskov Substitution Principle.`)),
          (ct = c()),
          (oe = a("h2")),
          (dt = t("The Problem: Type Errors in Class Hierarchies")),
          (pt = c()),
          (ne = a("p")),
          (gt =
            t(`Let's imagine you want to create a class hierarchy with logging methods
      for different types of posts. The highest level is a general post, then
      there are subtypes like VideoPost and ImagePost.`)),
          (ht = c()),
          (ae = a("pre")),
          ($ = a("code")),
          (ut = t(`class Post:
    def __init__(self, content: str) -> None:
        self.content = content

class VideoPost(Post):
    def __init__(self, content: str, duration: int) -> None:
        super().__init__(content)
        self.duration = duration

class ImagePost(Post):
    def __init__(self, content: str, image_url: str) -> None:
        super().__init__(content)
        self.image_url = image_url`)),
          (ft = c()),
          (se = a("p")),
          (vt = t(
            "Now, if you write a logger hierarchy, you'll encounter a type error:"
          )),
          (_t = c()),
          (re = a("pre")),
          (p = a("code")),
          (mt = t(`class PostLogger:
    def log(self, post: Post) -> None:
        print(f"Logging post: `)),
          (yt = t(qn)),
          (Pt = t("post.content")),
          (Et = t(Qn)),
          (bt = t(`")

class VideoLogger(PostLogger):
    def log(self, post: VideoPost) -> None:  # Type error!
        print(f"Logging video: `)),
          (Lt = t(zn)),
          (Tt = t("post.content")),
          (Ct = t(Mn)),
          (Vt = t(" (duration: ")),
          (wt = t(Jn)),
          (kt = t("post.duration")),
          (It = t(Kn)),
          (Dt = t(`s)")

class ImageLogger(PostLogger):
    def log(self, post: ImagePost) -> None:  # Type error!
        print(f"Logging image: `)),
          (Ot = t(Xn)),
          (Nt = t("post.content")),
          (At = t(Zn)),
          (Bt = t(" (image: ")),
          (xt = t(ea)),
          (St = t("post.image_url")),
          (Ht = t(ta)),
          (jt = t('))")')),
          (Rt = c()),
          (le = a("h2")),
          (Ut = t("Why Does This Fail?")),
          (Wt = c()),
          (ie = a("p")),
          ($t =
            t(`The issue arises because of contravariance in method parameters. When you
      override a method, the input parameters must be contravariant—meaning you
      can only accept more general types, not more specific ones.`)),
          (Yt = c()),
          (_ = a("p")),
          (Ft = t("Think about it: ")),
          (ce = a("code")),
          (Gt = t("VideoLogger")),
          (qt = t(` cannot only accept
      `)),
          (de = a("code")),
          (Qt = t("VideoPost")),
          (zt = t(`
      because the base class `)),
          (pe = a("code")),
          (Mt = t("PostLogger")),
          (Jt = t(` accepts any
      `)),
          (ge = a("code")),
          (Kt = t("Post")),
          (Xt = t(". Therefore, ")),
          (he = a("code")),
          (Zt = t("ImagePost")),
          (eo = t(` should also be acceptable
      to maintain the substitutability principle.`)),
          (to = c()),
          (I = a("p")),
          (oo = t(
            "However, by default, type variables are invariant, which means "
          )),
          (ue = a("code")),
          (no = t("Logger[VideoPost]")),
          (ao = t(`
      and `)),
          (fe = a("code")),
          (so = t("Logger[Post]")),
          (ro = t(" are considered completely different types.")),
          (lo = c()),
          (Y = a("h2")),
          (io = t("The Solution: Contravariant ")),
          (ve = a("code")),
          (co = t("TypeVar")),
          (po = c()),
          (B = a("p")),
          (go = t("We can use ")),
          (_e = a("code")),
          (ho = t("TypeVar")),
          (uo = t(` with contravariance to define the proper relationship.
      This aligns with the Liskov Substitution Principle and works correctly since
      our functions are consumers of the generic type.`)),
          (fo = c()),
          (me = a("pre")),
          (g = a("code")),
          (vo = t(`from typing import TypeVar, Generic

T = TypeVar("T", bound=Post, contravariant=True)  # bound is the most-super type

class Logger(Generic[T]):
    def log(self, post: T) -> None:
        pass

class PostLogger(Logger[Post]):
    def log(self, post: Post) -> None:
        print(f"Logging post: `)),
          (_o = t(oa)),
          (mo = t("post.content")),
          (yo = t(na)),
          (Po = t(`")

class VideoLogger(Logger[VideoPost]):
    def log(self, post: VideoPost) -> None:
        print(f"Logging video: `)),
          (Eo = t(aa)),
          (bo = t("post.content")),
          (Lo = t(sa)),
          (To = t(" (duration: ")),
          (Co = t(ra)),
          (Vo = t("post.duration")),
          (wo = t(la)),
          (ko = t(`s)")

class ImageLogger(Logger[ImagePost]):
    def log(self, post: ImagePost) -> None:
        print(f"Logging image: `)),
          (Io = t(ia)),
          (Do = t("post.content")),
          (Oo = t(ca)),
          (No = t(" (image: ")),
          (Ao = t(da)),
          (Bo = t("post.image_url")),
          (xo = t(pa)),
          (So = t('))")')),
          (Ho = c()),
          (ye = a("h2")),
          (jo = t("Understanding the Contravariant Relationship")),
          (Ro = c()),
          (C = a("p")),
          (Uo = t("Using our initial analogy: ")),
          (Pe = a("code")),
          (Wo = t("Post")),
          ($o = t(` is B, and
      `)),
          (Ee = a("code")),
          (Yo = t("VideoPost")),
          (Fo = t("/")),
          (be = a("code")),
          (Go = t("ImagePost")),
          (qo = t(`
      are A, where the latter are subtypes of the former.`)),
          (Qo = c()),
          (E = a("p")),
          (zo = t("We know that ")),
          (Le = a("code")),
          (Mo = t("Logger[Post]")),
          (Jo = t(` should be able to accept any
      `)),
          (Te = a("code")),
          (Ko = t("VideoPost")),
          (Xo = t(`
      or
      `)),
          (Ce = a("code")),
          (Zo = t("ImagePost")),
          (en = t(`, because any information available in a
      `)),
          (Ve = a("code")),
          (tn = t("Post")),
          (on = t(" type should automatically be available in its subtypes.")),
          (nn = c()),
          (v = a("p")),
          (an = t("Thus, ")),
          (we = a("code")),
          (sn = t("Logger[Post]")),
          (rn = t(` is a subtype of
      `)),
          (ke = a("code")),
          (ln = t("Logger[VideoPost]")),
          (cn = t(`
      because if you needed a `)),
          (Ie = a("code")),
          (dn = t("Logger[VideoPost]")),
          (pn = t(`, I could give you a
      `)),
          (De = a("code")),
          (gn = t("Logger[Post]")),
          (hn = t(", which accepts both ")),
          (Oe = a("code")),
          (un = t("Post")),
          (fn = t(` and
      `)),
          (Ne = a("code")),
          (vn = t("VideoPost")),
          (_n = t(", and it would be safe.")),
          (mn = c()),
          (Ae = a("p")),
          (yn = t("Here's how this works in practice:")),
          (Pn = c()),
          (Be = a("pre")),
          (F = a("code")),
          (En = t(`def process_video_logger(logger: Logger[VideoPost]) -> None:
    video = VideoPost("Check out this video!", 120)
    logger.log(video)

# This works because Logger[Post] is a subtype of Logger[VideoPost]
post_logger = PostLogger()
process_video_logger(post_logger)  # ✓ Type checker approves!

# This also works
video_logger = VideoLogger()
process_video_logger(video_logger)  # ✓ Type checker approves!`)),
          (bn = c()),
          (G = a("h2")),
          (Ln = t("When to Use Contravariant ")),
          (xe = a("code")),
          (Tn = t("TypeVar")),
          (Cn = c()),
          (x = a("p")),
          (Vn = t("Use contravariant ")),
          (Se = a("code")),
          (wn = t("TypeVar")),
          (kn = t(" when:")),
          (In = c()),
          (V = a("ul")),
          (He = a("li")),
          (Dn = t(
            "You have a function or method that takes a parameter of a generic type."
          )),
          (On = c()),
          (je = a("li")),
          (Nn = t("You want it to accept arguments of a more general type.")),
          (An = c()),
          (Re = a("li")),
          (Bn = t("Your class/function is a consumer of the generic type.")),
          (xn = c()),
          (Ue = a("li")),
          (Sn =
            t(`You need to maintain proper subtyping relationships in inheritance
        hierarchies.`)),
          (Hn = c()),
          (q = a("div")),
          (Q = a("p")),
          (jn = t("Questions or feedback? Feel free to reach out!")),
          this.h();
      },
      l(m) {
        fs(P.$$.fragment, m), (D = d(m)), (f = s(m, "ARTICLE", { class: !0 }));
        var b = r(f);
        S = s(b, "DIV", { class: !0 });
        var ga = r(S);
        A = s(ga, "A", { href: !0, class: !0 });
        var ha = r(A);
        (Fe = o(ha, "← Back to Python")),
          ha.forEach(n),
          ga.forEach(n),
          (Ge = d(b)),
          (H = s(b, "H1", { class: !0 }));
        var ua = r(H);
        (qe = o(ua, "TypeVar Contravariance")),
          ua.forEach(n),
          (Qe = d(b)),
          (l = s(b, "DIV", { class: !0 }));
        var i = r(l);
        j = s(i, "P", {});
        var Rn = r(j);
        J = s(Rn, "CODE", {});
        var fa = r(J);
        (ze = o(fa, "TypeVar")),
          fa.forEach(n),
          (Me = o(
            Rn,
            ` contravariance helps resolve type checking issues in class
      hierarchies, particularly for consumer functions that take parameters of generic
      types.`
          )),
          Rn.forEach(n),
          (Je = d(i)),
          (K = s(i, "P", {}));
        var va = r(K);
        (Ke = o(
          va,
          `Before diving into contravariance, we need to define three fundamental
      terms in type theory and subtyping:`
        )),
          va.forEach(n),
          (Xe = d(i)),
          (k = s(i, "UL", {}));
        var z = r(k);
        R = s(z, "LI", {});
        var Un = r(R);
        X = s(Un, "STRONG", {});
        var _a = r(X);
        (Ze = o(_a, "Covariance:")),
          _a.forEach(n),
          (et = o(
            Un,
            ` A is a subtype of B → Container[A] is a subtype
        of Container[B].`
          )),
          Un.forEach(n),
          (tt = d(z)),
          (U = s(z, "LI", {}));
        var Wn = r(U);
        Z = s(Wn, "STRONG", {});
        var ma = r(Z);
        (ot = o(ma, "Contravariance:")),
          ma.forEach(n),
          (nt = o(
            Wn,
            ` A is a subtype of B → Container[B] is a
        subtype of Container[A].`
          )),
          Wn.forEach(n),
          (at = d(z)),
          (W = s(z, "LI", {}));
        var $n = r(W);
        ee = s($n, "STRONG", {});
        var ya = r(ee);
        (st = o(ya, "Invariance:")),
          ya.forEach(n),
          (rt = o(
            $n,
            ` A is a subtype of B → Container[A] is distinct
        from Container[B].`
          )),
          $n.forEach(n),
          z.forEach(n),
          (lt = d(i)),
          (te = s(i, "P", {}));
        var Pa = r(te);
        (it = o(
          Pa,
          `From object-oriented programming, a subtype means that whenever you have
      something that expects type A, if B is a subtype of A, you can replace A
      with B and everything should still work correctly. This is the essence of
      the Liskov Substitution Principle.`
        )),
          Pa.forEach(n),
          (ct = d(i)),
          (oe = s(i, "H2", {}));
        var Ea = r(oe);
        (dt = o(Ea, "The Problem: Type Errors in Class Hierarchies")),
          Ea.forEach(n),
          (pt = d(i)),
          (ne = s(i, "P", {}));
        var ba = r(ne);
        (gt = o(
          ba,
          `Let's imagine you want to create a class hierarchy with logging methods
      for different types of posts. The highest level is a general post, then
      there are subtypes like VideoPost and ImagePost.`
        )),
          ba.forEach(n),
          (ht = d(i)),
          (ae = s(i, "PRE", {}));
        var La = r(ae);
        $ = s(La, "CODE", { class: !0 });
        var Ta = r($);
        (ut = o(
          Ta,
          `class Post:
    def __init__(self, content: str) -> None:
        self.content = content

class VideoPost(Post):
    def __init__(self, content: str, duration: int) -> None:
        super().__init__(content)
        self.duration = duration

class ImagePost(Post):
    def __init__(self, content: str, image_url: str) -> None:
        super().__init__(content)
        self.image_url = image_url`
        )),
          Ta.forEach(n),
          La.forEach(n),
          (ft = d(i)),
          (se = s(i, "P", {}));
        var Ca = r(se);
        (vt = o(
          Ca,
          "Now, if you write a logger hierarchy, you'll encounter a type error:"
        )),
          Ca.forEach(n),
          (_t = d(i)),
          (re = s(i, "PRE", {}));
        var Va = r(re);
        p = s(Va, "CODE", { class: !0 });
        var h = r(p);
        (mt = o(
          h,
          `class PostLogger:
    def log(self, post: Post) -> None:
        print(f"Logging post: `
        )),
          (yt = o(h, qn)),
          (Pt = o(h, "post.content")),
          (Et = o(h, Qn)),
          (bt = o(
            h,
            `")

class VideoLogger(PostLogger):
    def log(self, post: VideoPost) -> None:  # Type error!
        print(f"Logging video: `
          )),
          (Lt = o(h, zn)),
          (Tt = o(h, "post.content")),
          (Ct = o(h, Mn)),
          (Vt = o(h, " (duration: ")),
          (wt = o(h, Jn)),
          (kt = o(h, "post.duration")),
          (It = o(h, Kn)),
          (Dt = o(
            h,
            `s)")

class ImageLogger(PostLogger):
    def log(self, post: ImagePost) -> None:  # Type error!
        print(f"Logging image: `
          )),
          (Ot = o(h, Xn)),
          (Nt = o(h, "post.content")),
          (At = o(h, Zn)),
          (Bt = o(h, " (image: ")),
          (xt = o(h, ea)),
          (St = o(h, "post.image_url")),
          (Ht = o(h, ta)),
          (jt = o(h, '))")')),
          h.forEach(n),
          Va.forEach(n),
          (Rt = d(i)),
          (le = s(i, "H2", {}));
        var wa = r(le);
        (Ut = o(wa, "Why Does This Fail?")),
          wa.forEach(n),
          (Wt = d(i)),
          (ie = s(i, "P", {}));
        var ka = r(ie);
        ($t = o(
          ka,
          `The issue arises because of contravariance in method parameters. When you
      override a method, the input parameters must be contravariant—meaning you
      can only accept more general types, not more specific ones.`
        )),
          ka.forEach(n),
          (Yt = d(i)),
          (_ = s(i, "P", {}));
        var L = r(_);
        (Ft = o(L, "Think about it: ")), (ce = s(L, "CODE", {}));
        var Ia = r(ce);
        (Gt = o(Ia, "VideoLogger")),
          Ia.forEach(n),
          (qt = o(
            L,
            ` cannot only accept
      `
          )),
          (de = s(L, "CODE", {}));
        var Da = r(de);
        (Qt = o(Da, "VideoPost")),
          Da.forEach(n),
          (zt = o(
            L,
            `
      because the base class `
          )),
          (pe = s(L, "CODE", {}));
        var Oa = r(pe);
        (Mt = o(Oa, "PostLogger")),
          Oa.forEach(n),
          (Jt = o(
            L,
            ` accepts any
      `
          )),
          (ge = s(L, "CODE", {}));
        var Na = r(ge);
        (Kt = o(Na, "Post")),
          Na.forEach(n),
          (Xt = o(L, ". Therefore, ")),
          (he = s(L, "CODE", {}));
        var Aa = r(he);
        (Zt = o(Aa, "ImagePost")),
          Aa.forEach(n),
          (eo = o(
            L,
            ` should also be acceptable
      to maintain the substitutability principle.`
          )),
          L.forEach(n),
          (to = d(i)),
          (I = s(i, "P", {}));
        var M = r(I);
        (oo = o(
          M,
          "However, by default, type variables are invariant, which means "
        )),
          (ue = s(M, "CODE", {}));
        var Ba = r(ue);
        (no = o(Ba, "Logger[VideoPost]")),
          Ba.forEach(n),
          (ao = o(
            M,
            `
      and `
          )),
          (fe = s(M, "CODE", {}));
        var xa = r(fe);
        (so = o(xa, "Logger[Post]")),
          xa.forEach(n),
          (ro = o(M, " are considered completely different types.")),
          M.forEach(n),
          (lo = d(i)),
          (Y = s(i, "H2", {}));
        var Yn = r(Y);
        (io = o(Yn, "The Solution: Contravariant ")), (ve = s(Yn, "CODE", {}));
        var Sa = r(ve);
        (co = o(Sa, "TypeVar")),
          Sa.forEach(n),
          Yn.forEach(n),
          (po = d(i)),
          (B = s(i, "P", {}));
        var $e = r(B);
        (go = o($e, "We can use ")), (_e = s($e, "CODE", {}));
        var Ha = r(_e);
        (ho = o(Ha, "TypeVar")),
          Ha.forEach(n),
          (uo = o(
            $e,
            ` with contravariance to define the proper relationship.
      This aligns with the Liskov Substitution Principle and works correctly since
      our functions are consumers of the generic type.`
          )),
          $e.forEach(n),
          (fo = d(i)),
          (me = s(i, "PRE", {}));
        var ja = r(me);
        g = s(ja, "CODE", { class: !0 });
        var u = r(g);
        (vo = o(
          u,
          `from typing import TypeVar, Generic

T = TypeVar("T", bound=Post, contravariant=True)  # bound is the most-super type

class Logger(Generic[T]):
    def log(self, post: T) -> None:
        pass

class PostLogger(Logger[Post]):
    def log(self, post: Post) -> None:
        print(f"Logging post: `
        )),
          (_o = o(u, oa)),
          (mo = o(u, "post.content")),
          (yo = o(u, na)),
          (Po = o(
            u,
            `")

class VideoLogger(Logger[VideoPost]):
    def log(self, post: VideoPost) -> None:
        print(f"Logging video: `
          )),
          (Eo = o(u, aa)),
          (bo = o(u, "post.content")),
          (Lo = o(u, sa)),
          (To = o(u, " (duration: ")),
          (Co = o(u, ra)),
          (Vo = o(u, "post.duration")),
          (wo = o(u, la)),
          (ko = o(
            u,
            `s)")

class ImageLogger(Logger[ImagePost]):
    def log(self, post: ImagePost) -> None:
        print(f"Logging image: `
          )),
          (Io = o(u, ia)),
          (Do = o(u, "post.content")),
          (Oo = o(u, ca)),
          (No = o(u, " (image: ")),
          (Ao = o(u, da)),
          (Bo = o(u, "post.image_url")),
          (xo = o(u, pa)),
          (So = o(u, '))")')),
          u.forEach(n),
          ja.forEach(n),
          (Ho = d(i)),
          (ye = s(i, "H2", {}));
        var Ra = r(ye);
        (jo = o(Ra, "Understanding the Contravariant Relationship")),
          Ra.forEach(n),
          (Ro = d(i)),
          (C = s(i, "P", {}));
        var O = r(C);
        (Uo = o(O, "Using our initial analogy: ")), (Pe = s(O, "CODE", {}));
        var Ua = r(Pe);
        (Wo = o(Ua, "Post")),
          Ua.forEach(n),
          ($o = o(
            O,
            ` is B, and
      `
          )),
          (Ee = s(O, "CODE", {}));
        var Wa = r(Ee);
        (Yo = o(Wa, "VideoPost")),
          Wa.forEach(n),
          (Fo = o(O, "/")),
          (be = s(O, "CODE", {}));
        var $a = r(be);
        (Go = o($a, "ImagePost")),
          $a.forEach(n),
          (qo = o(
            O,
            `
      are A, where the latter are subtypes of the former.`
          )),
          O.forEach(n),
          (Qo = d(i)),
          (E = s(i, "P", {}));
        var w = r(E);
        (zo = o(w, "We know that ")), (Le = s(w, "CODE", {}));
        var Ya = r(Le);
        (Mo = o(Ya, "Logger[Post]")),
          Ya.forEach(n),
          (Jo = o(
            w,
            ` should be able to accept any
      `
          )),
          (Te = s(w, "CODE", {}));
        var Fa = r(Te);
        (Ko = o(Fa, "VideoPost")),
          Fa.forEach(n),
          (Xo = o(
            w,
            `
      or
      `
          )),
          (Ce = s(w, "CODE", {}));
        var Ga = r(Ce);
        (Zo = o(Ga, "ImagePost")),
          Ga.forEach(n),
          (en = o(
            w,
            `, because any information available in a
      `
          )),
          (Ve = s(w, "CODE", {}));
        var qa = r(Ve);
        (tn = o(qa, "Post")),
          qa.forEach(n),
          (on = o(
            w,
            " type should automatically be available in its subtypes."
          )),
          w.forEach(n),
          (nn = d(i)),
          (v = s(i, "P", {}));
        var y = r(v);
        (an = o(y, "Thus, ")), (we = s(y, "CODE", {}));
        var Qa = r(we);
        (sn = o(Qa, "Logger[Post]")),
          Qa.forEach(n),
          (rn = o(
            y,
            ` is a subtype of
      `
          )),
          (ke = s(y, "CODE", {}));
        var za = r(ke);
        (ln = o(za, "Logger[VideoPost]")),
          za.forEach(n),
          (cn = o(
            y,
            `
      because if you needed a `
          )),
          (Ie = s(y, "CODE", {}));
        var Ma = r(Ie);
        (dn = o(Ma, "Logger[VideoPost]")),
          Ma.forEach(n),
          (pn = o(
            y,
            `, I could give you a
      `
          )),
          (De = s(y, "CODE", {}));
        var Ja = r(De);
        (gn = o(Ja, "Logger[Post]")),
          Ja.forEach(n),
          (hn = o(y, ", which accepts both ")),
          (Oe = s(y, "CODE", {}));
        var Ka = r(Oe);
        (un = o(Ka, "Post")),
          Ka.forEach(n),
          (fn = o(
            y,
            ` and
      `
          )),
          (Ne = s(y, "CODE", {}));
        var Xa = r(Ne);
        (vn = o(Xa, "VideoPost")),
          Xa.forEach(n),
          (_n = o(y, ", and it would be safe.")),
          y.forEach(n),
          (mn = d(i)),
          (Ae = s(i, "P", {}));
        var Za = r(Ae);
        (yn = o(Za, "Here's how this works in practice:")),
          Za.forEach(n),
          (Pn = d(i)),
          (Be = s(i, "PRE", {}));
        var es = r(Be);
        F = s(es, "CODE", { class: !0 });
        var ts = r(F);
        (En = o(
          ts,
          `def process_video_logger(logger: Logger[VideoPost]) -> None:
    video = VideoPost("Check out this video!", 120)
    logger.log(video)

# This works because Logger[Post] is a subtype of Logger[VideoPost]
post_logger = PostLogger()
process_video_logger(post_logger)  # ✓ Type checker approves!

# This also works
video_logger = VideoLogger()
process_video_logger(video_logger)  # ✓ Type checker approves!`
        )),
          ts.forEach(n),
          es.forEach(n),
          (bn = d(i)),
          (G = s(i, "H2", {}));
        var Fn = r(G);
        (Ln = o(Fn, "When to Use Contravariant ")), (xe = s(Fn, "CODE", {}));
        var os = r(xe);
        (Tn = o(os, "TypeVar")),
          os.forEach(n),
          Fn.forEach(n),
          (Cn = d(i)),
          (x = s(i, "P", {}));
        var Ye = r(x);
        (Vn = o(Ye, "Use contravariant ")), (Se = s(Ye, "CODE", {}));
        var ns = r(Se);
        (wn = o(ns, "TypeVar")),
          ns.forEach(n),
          (kn = o(Ye, " when:")),
          Ye.forEach(n),
          (In = d(i)),
          (V = s(i, "UL", {}));
        var N = r(V);
        He = s(N, "LI", {});
        var as = r(He);
        (Dn = o(
          as,
          "You have a function or method that takes a parameter of a generic type."
        )),
          as.forEach(n),
          (On = d(N)),
          (je = s(N, "LI", {}));
        var ss = r(je);
        (Nn = o(ss, "You want it to accept arguments of a more general type.")),
          ss.forEach(n),
          (An = d(N)),
          (Re = s(N, "LI", {}));
        var rs = r(Re);
        (Bn = o(rs, "Your class/function is a consumer of the generic type.")),
          rs.forEach(n),
          (xn = d(N)),
          (Ue = s(N, "LI", {}));
        var ls = r(Ue);
        (Sn = o(
          ls,
          `You need to maintain proper subtyping relationships in inheritance
        hierarchies.`
        )),
          ls.forEach(n),
          N.forEach(n),
          i.forEach(n),
          (Hn = d(b)),
          (q = s(b, "DIV", { class: !0 }));
        var is = r(q);
        Q = s(is, "P", { class: !0 });
        var cs = r(Q);
        (jn = o(cs, "Questions or feedback? Feel free to reach out!")),
          cs.forEach(n),
          is.forEach(n),
          b.forEach(n),
          this.h();
      },
      h() {
        T(A, "href", "/python"),
          T(A, "class", "text-blue-600 hover:underline text-sm"),
          T(S, "class", "mb-8"),
          T(H, "class", "text-3xl font-bold mb-4"),
          T($, "class", "language-python"),
          T(p, "class", "language-python"),
          T(g, "class", "language-python"),
          T(F, "class", "language-python"),
          T(l, "class", "prose prose-neutral max-w-none"),
          T(Q, "class", "text-sm text-neutral-500"),
          T(q, "class", "border-t pt-8 mt-12"),
          T(f, "class", "layout-md py-12 mx-auto max-w-3xl px-6 svelte-8bcc0v");
      },
      m(m, b) {
        vs(P, m, b),
          ds(m, D, b),
          ds(m, f, b),
          e(f, S),
          e(S, A),
          e(A, Fe),
          e(f, Ge),
          e(f, H),
          e(H, qe),
          e(f, Qe),
          e(f, l),
          e(l, j),
          e(j, J),
          e(J, ze),
          e(j, Me),
          e(l, Je),
          e(l, K),
          e(K, Ke),
          e(l, Xe),
          e(l, k),
          e(k, R),
          e(R, X),
          e(X, Ze),
          e(R, et),
          e(k, tt),
          e(k, U),
          e(U, Z),
          e(Z, ot),
          e(U, nt),
          e(k, at),
          e(k, W),
          e(W, ee),
          e(ee, st),
          e(W, rt),
          e(l, lt),
          e(l, te),
          e(te, it),
          e(l, ct),
          e(l, oe),
          e(oe, dt),
          e(l, pt),
          e(l, ne),
          e(ne, gt),
          e(l, ht),
          e(l, ae),
          e(ae, $),
          e($, ut),
          e(l, ft),
          e(l, se),
          e(se, vt),
          e(l, _t),
          e(l, re),
          e(re, p),
          e(p, mt),
          e(p, yt),
          e(p, Pt),
          e(p, Et),
          e(p, bt),
          e(p, Lt),
          e(p, Tt),
          e(p, Ct),
          e(p, Vt),
          e(p, wt),
          e(p, kt),
          e(p, It),
          e(p, Dt),
          e(p, Ot),
          e(p, Nt),
          e(p, At),
          e(p, Bt),
          e(p, xt),
          e(p, St),
          e(p, Ht),
          e(p, jt),
          e(l, Rt),
          e(l, le),
          e(le, Ut),
          e(l, Wt),
          e(l, ie),
          e(ie, $t),
          e(l, Yt),
          e(l, _),
          e(_, Ft),
          e(_, ce),
          e(ce, Gt),
          e(_, qt),
          e(_, de),
          e(de, Qt),
          e(_, zt),
          e(_, pe),
          e(pe, Mt),
          e(_, Jt),
          e(_, ge),
          e(ge, Kt),
          e(_, Xt),
          e(_, he),
          e(he, Zt),
          e(_, eo),
          e(l, to),
          e(l, I),
          e(I, oo),
          e(I, ue),
          e(ue, no),
          e(I, ao),
          e(I, fe),
          e(fe, so),
          e(I, ro),
          e(l, lo),
          e(l, Y),
          e(Y, io),
          e(Y, ve),
          e(ve, co),
          e(l, po),
          e(l, B),
          e(B, go),
          e(B, _e),
          e(_e, ho),
          e(B, uo),
          e(l, fo),
          e(l, me),
          e(me, g),
          e(g, vo),
          e(g, _o),
          e(g, mo),
          e(g, yo),
          e(g, Po),
          e(g, Eo),
          e(g, bo),
          e(g, Lo),
          e(g, To),
          e(g, Co),
          e(g, Vo),
          e(g, wo),
          e(g, ko),
          e(g, Io),
          e(g, Do),
          e(g, Oo),
          e(g, No),
          e(g, Ao),
          e(g, Bo),
          e(g, xo),
          e(g, So),
          e(l, Ho),
          e(l, ye),
          e(ye, jo),
          e(l, Ro),
          e(l, C),
          e(C, Uo),
          e(C, Pe),
          e(Pe, Wo),
          e(C, $o),
          e(C, Ee),
          e(Ee, Yo),
          e(C, Fo),
          e(C, be),
          e(be, Go),
          e(C, qo),
          e(l, Qo),
          e(l, E),
          e(E, zo),
          e(E, Le),
          e(Le, Mo),
          e(E, Jo),
          e(E, Te),
          e(Te, Ko),
          e(E, Xo),
          e(E, Ce),
          e(Ce, Zo),
          e(E, en),
          e(E, Ve),
          e(Ve, tn),
          e(E, on),
          e(l, nn),
          e(l, v),
          e(v, an),
          e(v, we),
          e(we, sn),
          e(v, rn),
          e(v, ke),
          e(ke, ln),
          e(v, cn),
          e(v, Ie),
          e(Ie, dn),
          e(v, pn),
          e(v, De),
          e(De, gn),
          e(v, hn),
          e(v, Oe),
          e(Oe, un),
          e(v, fn),
          e(v, Ne),
          e(Ne, vn),
          e(v, _n),
          e(l, mn),
          e(l, Ae),
          e(Ae, yn),
          e(l, Pn),
          e(l, Be),
          e(Be, F),
          e(F, En),
          e(l, bn),
          e(l, G),
          e(G, Ln),
          e(G, xe),
          e(xe, Tn),
          e(l, Cn),
          e(l, x),
          e(x, Vn),
          e(x, Se),
          e(Se, wn),
          e(x, kn),
          e(l, In),
          e(l, V),
          e(V, He),
          e(He, Dn),
          e(V, On),
          e(V, je),
          e(je, Nn),
          e(V, An),
          e(V, Re),
          e(Re, Bn),
          e(V, xn),
          e(V, Ue),
          e(Ue, Sn),
          e(f, Hn),
          e(f, q),
          e(q, Q),
          e(Q, jn),
          (We = !0);
      },
      p: _s,
      i(m) {
        We || (ms(P.$$.fragment, m), (We = !0));
      },
      o(m) {
        ys(P.$$.fragment, m), (We = !1);
      },
      d(m) {
        Ps(P, m), m && n(D), m && n(f);
      },
    }
  );
}
function Ts(Gn) {
  return (
    Es(async () => {
      if (typeof window < "u" && !window.Prism) {
        const P = document.createElement("link");
        (P.rel = "stylesheet"),
          (P.href =
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"),
          document.head.appendChild(P);
        const D = document.createElement("script");
        (D.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"),
          (D.onload = () => {
            const f = document.createElement("script");
            (f.src =
              "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"),
              (f.onload = () => {
                window.Prism.highlightAll();
              }),
              document.head.appendChild(f);
          }),
          document.head.appendChild(D);
      }
    }),
    []
  );
}
class ws extends ps {
  constructor(P) {
    super(), gs(this, P, Ts, Ls, hs, {});
  }
}
export { ws as default };
