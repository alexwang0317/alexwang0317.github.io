import {
  S as et,
  i as nt,
  s as it,
  k as y,
  l as g,
  m as v,
  h as o,
  n as u,
  b as C,
  F as I,
  $ as st,
  q as V,
  a as P,
  r as z,
  c as x,
  C as c,
  u as L,
  y as F,
  z as M,
  A as j,
  g as q,
  d as G,
  B as K,
} from "../chunks/index.dd6ea1d3.js";
import { S as ct } from "../chunks/Seo.4277da45.js";
import { f as J } from "../chunks/utils.7d7f714d.js";
function Q(r, t, i) {
  const e = r.slice();
  return (e[1] = t[i]), e;
}
function X(r) {
  let t, i;
  return {
    c() {
      (t = y("span")), (i = V("↗")), this.h();
    },
    l(e) {
      t = g(e, "SPAN", { class: !0 });
      var n = v(t);
      (i = z(n, "↗")), n.forEach(o), this.h();
    },
    h() {
      u(t, "class", "text-neutral-400 text-sm ml-1");
    },
    m(e, n) {
      C(e, t, n), c(t, i);
    },
    d(e) {
      e && o(t);
    },
  };
}
function Z(r) {
  let t,
    i = J("%B %-d, %Y", r[1].date) + "",
    e;
  return {
    c() {
      (t = y("div")), (e = V(i)), this.h();
    },
    l(n) {
      t = g(n, "DIV", { class: !0 });
      var s = v(t);
      (e = z(s, i)), s.forEach(o), this.h();
    },
    h() {
      u(t, "class", "sm:ml-auto mb-0.5 text-neutral-500");
    },
    m(n, s) {
      C(n, t, s), c(t, e);
    },
    p(n, s) {
      s & 1 && i !== (i = J("%B %-d, %Y", n[1].date) + "") && L(e, i);
    },
    d(n) {
      n && o(t);
    },
  };
}
function tt(r) {
  let t,
    i,
    e,
    n = r[1].title + "",
    s,
    a,
    b = !r[1].link.startsWith("/"),
    A,
    w,
    k,
    $ = r[1].summary + "",
    _,
    E,
    S,
    T,
    f = b && X(),
    h = r[1].date && Z(r);
  return {
    c() {
      (t = y("a")),
        (i = y("div")),
        (e = y("div")),
        (s = V(n)),
        (a = P()),
        f && f.c(),
        (A = P()),
        h && h.c(),
        (w = P()),
        (k = y("div")),
        (_ = V($)),
        (E = P()),
        this.h();
    },
    l(m) {
      t = g(m, "A", { href: !0, class: !0, target: !0, rel: !0 });
      var p = v(t);
      i = g(p, "DIV", { class: !0 });
      var D = v(i);
      e = g(D, "DIV", { class: !0 });
      var N = v(e);
      (s = z(N, n)),
        (a = x(N)),
        f && f.l(N),
        N.forEach(o),
        (A = x(D)),
        h && h.l(D),
        D.forEach(o),
        (w = x(p)),
        (k = g(p, "DIV", { class: !0 }));
      var B = v(k);
      (_ = z(B, $)), B.forEach(o), (E = x(p)), p.forEach(o), this.h();
    },
    h() {
      u(e, "class", "text-lg text-black"),
        u(i, "class", "flex flex-col sm:flex-row sm:items-end mb-1.5"),
        u(k, "class", "text-lg leading-snug font-serif italic"),
        u(t, "href", (S = r[1].link)),
        u(
          t,
          "class",
          "block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
        ),
        u(t, "target", (T = r[1].link.startsWith("/") ? "_self" : "_blank")),
        u(t, "rel", "noreferrer");
    },
    m(m, p) {
      C(m, t, p),
        c(t, i),
        c(i, e),
        c(e, s),
        c(e, a),
        f && f.m(e, null),
        c(i, A),
        h && h.m(i, null),
        c(t, w),
        c(t, k),
        c(k, _),
        c(t, E);
    },
    p(m, p) {
      p & 1 && n !== (n = m[1].title + "") && L(s, n),
        p & 1 && (b = !m[1].link.startsWith("/")),
        b ? f || ((f = X()), f.c(), f.m(e, null)) : f && (f.d(1), (f = null)),
        m[1].date
          ? h
            ? h.p(m, p)
            : ((h = Z(m)), h.c(), h.m(i, null))
          : h && (h.d(1), (h = null)),
        p & 1 && $ !== ($ = m[1].summary + "") && L(_, $),
        p & 1 && S !== (S = m[1].link) && u(t, "href", S),
        p & 1 &&
          T !== (T = m[1].link.startsWith("/") ? "_self" : "_blank") &&
          u(t, "target", T);
    },
    d(m) {
      m && o(t), f && f.d(), h && h.d();
    },
  };
}
function ft(r) {
  let t,
    i = r[0],
    e = [];
  for (let n = 0; n < i.length; n += 1) e[n] = tt(Q(r, i, n));
  return {
    c() {
      t = y("div");
      for (let n = 0; n < e.length; n += 1) e[n].c();
      this.h();
    },
    l(n) {
      t = g(n, "DIV", { class: !0 });
      var s = v(t);
      for (let a = 0; a < e.length; a += 1) e[a].l(s);
      s.forEach(o), this.h();
    },
    h() {
      u(t, "class", "grid gap-y-6");
    },
    m(n, s) {
      C(n, t, s);
      for (let a = 0; a < e.length; a += 1) e[a] && e[a].m(t, null);
    },
    p(n, [s]) {
      if (s & 1) {
        i = n[0];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const b = Q(n, i, a);
          e[a] ? e[a].p(b, s) : ((e[a] = tt(b)), e[a].c(), e[a].m(t, null));
        }
        for (; a < e.length; a += 1) e[a].d(1);
        e.length = i.length;
      }
    },
    i: I,
    o: I,
    d(n) {
      n && o(t), st(e, n);
    },
  };
}
function pt(r, t, i) {
  let { data: e = [] } = t;
  return (
    (r.$$set = (n) => {
      "data" in n && i(0, (e = n.data));
    }),
    [e]
  );
}
class at extends et {
  constructor(t) {
    super(), nt(this, t, pt, ft, it, { data: 0 });
  }
}
var O = {
    posts: [
      {
        title: "TypeVar Contravariance",
        summary: `TypeVar contravariance for type-safe class hierarchies and proper subtyping
`,
        link: "/python/engineering/python-typevar-contravariance",
      },
      {
        title: "Lazy Logging",
        summary: `Optimize Python logging performance with lazy evaluation techniques
`,
        link: "/python/engineering/python-lazy-logging",
      },
      {
        title: "Interface Stubs",
        summary: `Resolve circular imports using Abstract Base Classes for cleaner module dependencies
`,
        link: "/python/engineering/python-circular-imports-abc",
      },
      {
        title: "__slots__",
        summary: `__slots__ for compact and faster object storage
`,
        link: "/python/engineering/python-slots-dunder",
      },
      {
        title: "TypedDict",
        summary: `TypedDict for type-safe dictionaries with optional keys
`,
        link: "/python/engineering/python-typeddict",
      },
      {
        title: "__bool__",
        summary: `__bool__ dunder method for truthiness evaluation
`,
        link: "/python/engineering/python-bool-dunder",
      },
      {
        title: "TypeGuard",
        summary: `TypeGuard for type narrowing and better type safety
`,
        link: "/python/engineering/python-typeguard",
      },
      {
        title: "__all__",
        summary: `Control module exports explicitly with Python's __all__
`,
        link: "/python/engineering/python-all-dunder",
      },
      {
        title: "Enum Magic",
        summary: `Enum, StrEnum, IntEnum, and Flags for type-safe constants
`,
        link: "/python/engineering/python-enum-magic",
      },
      {
        title: "ABC (Abstract Base Classes)",
        summary: `Enforce method implementation at instantiation time with Python's ABC
`,
        link: "/python/engineering/python-abc",
      },
      {
        title: "__post_init__",
        summary: `Validate dataclass fields at instantiation time using __post_init__ for better encapsulation
`,
        link: "/python/engineering/python-post-init",
      },
      {
        title: "TYPE_CHECKING",
        summary: `Import types conditionally to avoid circular imports and heavy dependencies
`,
        link: "/python/engineering/python-type-checking",
      },
      {
        title: "NotImplemented",
        summary: `Use NotImplemented constant for binary operations and method delegation
`,
        link: "/python/engineering/python-notimplemented",
      },
      {
        title: "Self",
        summary: `Self type hint for better type safety
`,
        link: "/python/engineering/python-self-typing",
      },
      {
        title: "functools.partial",
        summary: `functools.partial for elegant function composition and cleaner code
`,
        link: "/python/engineering/python-functools-partial",
      },
      {
        title: "@override Decorator",
        summary: `@override decorator prevents inheritance bugs and makes your code more maintainable
`,
        link: "/python/engineering/python-override-decorator",
      },
      {
        title: "Patch Stack",
        summary: `ExitStack-powered teardown for reliable tests
`,
        link: "/python/engineering/python-patch-stack",
      },
    ],
  },
  Y = {
    posts: [
      {
        title: "Python Profiling",
        date: new Date(17570304e5),
        summary: `Master Python profiling techniques to optimize performance and avoid premature optimization
`,
        link: "/python/performative/python-profiling",
      },
    ],
  };
function ht(r) {
  let t, i;
  return {
    c() {
      (t = y("p")), (i = V("Coming soon")), this.h();
    },
    l(e) {
      t = g(e, "P", { class: !0 });
      var n = v(t);
      (i = z(n, "Coming soon")), n.forEach(o), this.h();
    },
    h() {
      u(t, "class", "text-neutral-600");
    },
    m(e, n) {
      C(e, t, n), c(t, i);
    },
    p: I,
    i: I,
    o: I,
    d(e) {
      e && o(t);
    },
  };
}
function mt(r) {
  let t, i;
  return (
    (t = new at({ props: { data: O.posts } })),
    {
      c() {
        F(t.$$.fragment);
      },
      l(e) {
        M(t.$$.fragment, e);
      },
      m(e, n) {
        j(t, e, n), (i = !0);
      },
      p: I,
      i(e) {
        i || (q(t.$$.fragment, e), (i = !0));
      },
      o(e) {
        G(t.$$.fragment, e), (i = !1);
      },
      d(e) {
        K(t, e);
      },
    }
  );
}
function ut(r) {
  let t, i;
  return {
    c() {
      (t = y("p")), (i = V("Coming soon")), this.h();
    },
    l(e) {
      t = g(e, "P", { class: !0 });
      var n = v(t);
      (i = z(n, "Coming soon")), n.forEach(o), this.h();
    },
    h() {
      u(t, "class", "text-neutral-600");
    },
    m(e, n) {
      C(e, t, n), c(t, i);
    },
    p: I,
    i: I,
    o: I,
    d(e) {
      e && o(t);
    },
  };
}
function dt(r) {
  let t, i;
  return (
    (t = new at({ props: { data: Y.posts } })),
    {
      c() {
        F(t.$$.fragment);
      },
      l(e) {
        M(t.$$.fragment, e);
      },
      m(e, n) {
        j(t, e, n), (i = !0);
      },
      p: I,
      i(e) {
        i || (q(t.$$.fragment, e), (i = !0));
      },
      o(e) {
        G(t.$$.fragment, e), (i = !1);
      },
      d(e) {
        K(t, e);
      },
    }
  );
}
function _t(r) {
  let t, i, e, n, s, a, b, A, w, k, $, _, E, S, T, f, h, m, p, D;
  t = new ct({
    props: {
      title: "Alex Wang – Python",
      description: "Python engineering and performance optimization",
    },
  });
  const N = [mt, ht],
    B = [];
  function rt(l, d) {
    return O.posts && O.posts.length > 0 ? 0 : 1;
  }
  (w = rt()), (k = B[w] = N[w](r));
  const lt = [dt, ut],
    H = [];
  function ot(l, d) {
    return Y.posts && Y.posts.length > 0 ? 0 : 1;
  }
  return (
    (m = ot()),
    (p = H[m] = lt[m](r)),
    {
      c() {
        F(t.$$.fragment),
          (i = P()),
          (e = y("section")),
          (n = y("h2")),
          (s = V("Python Dev Notes")),
          (a = P()),
          (b = y("div")),
          (A = P()),
          k.c(),
          ($ = P()),
          (_ = y("section")),
          (E = y("h2")),
          (S = V("Performative Python")),
          (T = P()),
          (f = y("div")),
          (h = P()),
          p.c(),
          this.h();
      },
      l(l) {
        M(t.$$.fragment, l), (i = x(l)), (e = g(l, "SECTION", { class: !0 }));
        var d = v(e);
        n = g(d, "H2", { class: !0 });
        var R = v(n);
        (s = z(R, "Python Dev Notes")),
          R.forEach(o),
          (a = x(d)),
          (b = g(d, "DIV", { class: !0 })),
          v(b).forEach(o),
          (A = x(d)),
          k.l(d),
          d.forEach(o),
          ($ = x(l)),
          (_ = g(l, "SECTION", { class: !0 }));
        var W = v(_);
        E = g(W, "H2", { class: !0 });
        var U = v(E);
        (S = z(U, "Performative Python")),
          U.forEach(o),
          (T = x(W)),
          (f = g(W, "DIV", { class: !0 })),
          v(f).forEach(o),
          (h = x(W)),
          p.l(W),
          W.forEach(o),
          this.h();
      },
      h() {
        u(n, "class", "heading2"),
          u(b, "class", "border-b border-neutral-300 mb-6"),
          u(e, "class", "layout-md py-12"),
          u(E, "class", "heading2"),
          u(f, "class", "border-b border-neutral-300 mb-6"),
          u(_, "class", "layout-md py-12");
      },
      m(l, d) {
        j(t, l, d),
          C(l, i, d),
          C(l, e, d),
          c(e, n),
          c(n, s),
          c(e, a),
          c(e, b),
          c(e, A),
          B[w].m(e, null),
          C(l, $, d),
          C(l, _, d),
          c(_, E),
          c(E, S),
          c(_, T),
          c(_, f),
          c(_, h),
          H[m].m(_, null),
          (D = !0);
      },
      p(l, [d]) {
        k.p(l, d), p.p(l, d);
      },
      i(l) {
        D || (q(t.$$.fragment, l), q(k), q(p), (D = !0));
      },
      o(l) {
        G(t.$$.fragment, l), G(k), G(p), (D = !1);
      },
      d(l) {
        K(t, l), l && o(i), l && o(e), B[w].d(), l && o($), l && o(_), H[m].d();
      },
    }
  );
}
class kt extends et {
  constructor(t) {
    super(), nt(this, t, null, _t, it, {});
  }
}
export { kt as default };
