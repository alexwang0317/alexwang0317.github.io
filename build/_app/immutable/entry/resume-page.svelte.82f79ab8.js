import {
  S as St,
  i as Lt,
  s as kt,
  k as i,
  q as n,
  a as $,
  l as r,
  m as o,
  r as s,
  h as t,
  c as M,
  n as w,
  H as bt,
  b as O,
  C as e,
  a1 as Et,
  u as Oe,
  g as Y,
  v as At,
  d as ee,
  f as Ct,
  a2 as $t,
  K as Mt,
  L as Rt,
  M as It,
  N as Pt,
  O as Nt,
  P as Tt,
  y as de,
  z as me,
  A as ue,
  B as pe,
  F as $e,
} from "../chunks/index.dd6ea1d3.js";
import { S as Ot } from "../chunks/Seo.4277da45.js";
import { a as zt } from "../chunks/index.e8561fff.js";
function wt(T) {
  let a, u, l;
  const E = T[8].default,
    h = Mt(E, T, T[7], null);
  return {
    c() {
      (a = i("ul")), h && h.c(), this.h();
    },
    l(p) {
      a = r(p, "UL", { class: !0 });
      var d = o(a);
      h && h.l(d), d.forEach(t), this.h();
    },
    h() {
      w(a, "class", "list-disc pl-7 marker:text-neutral-400");
    },
    m(p, d) {
      O(p, a, d), h && h.m(a, null), (l = !0);
    },
    p(p, d) {
      h &&
        h.p &&
        (!l || d & 128) &&
        Rt(h, E, p, p[7], l ? Pt(E, p[7], d, null) : It(p[7]), null);
    },
    i(p) {
      l ||
        (Y(h, p),
        p &&
          (u ||
            Nt(() => {
              (u = Tt(a, zt, {})), u.start();
            })),
        (l = !0));
    },
    o(p) {
      ee(h, p), (l = !1);
    },
    d(p) {
      p && t(a), h && h.d(p);
    },
  };
}
function Dt(T) {
  let a,
    u,
    l,
    E,
    h,
    p,
    d,
    _,
    L,
    R,
    P,
    b,
    m,
    D,
    g,
    S,
    B,
    y,
    N,
    G,
    c = !T[5] && wt(T);
  return {
    c() {
      (a = i("div")),
        (u = i("h3")),
        (l = n(T[0])),
        (E = n(" at ")),
        (h = i("a")),
        (p = n(T[1])),
        (d = $()),
        (_ = i("p")),
        (L = i("span")),
        (R = n(T[3])),
        (P = $()),
        (b = i("span")),
        (m = n("•")),
        (D = $()),
        (g = i("span")),
        (S = n(T[4])),
        (B = $()),
        c && c.c(),
        this.h();
    },
    l(k) {
      a = r(k, "DIV", { class: !0 });
      var v = o(a);
      u = r(v, "H3", { class: !0 });
      var f = o(u);
      (l = s(f, T[0])),
        (E = s(f, " at ")),
        (h = r(f, "A", { class: !0, href: !0 }));
      var A = o(h);
      (p = s(A, T[1])),
        A.forEach(t),
        f.forEach(t),
        (d = M(v)),
        (_ = r(v, "P", { class: !0 }));
      var V = o(_);
      L = r(V, "SPAN", { class: !0 });
      var j = o(L);
      (R = s(j, T[3])),
        j.forEach(t),
        (P = M(V)),
        (b = r(V, "SPAN", { class: !0 }));
      var q = o(b);
      (m = s(q, "•")),
        q.forEach(t),
        (D = M(V)),
        (g = r(V, "SPAN", { class: !0 }));
      var W = o(g);
      (S = s(W, T[4])),
        W.forEach(t),
        V.forEach(t),
        (B = M(v)),
        c && c.l(v),
        v.forEach(t),
        this.h();
    },
    h() {
      w(h, "class", "link"),
        w(h, "href", T[2]),
        w(u, "class", "text-black text-lg leading-tight mb-1"),
        w(L, "class", "whitespace-nowrap"),
        w(b, "class", "px-0.5 text-neutral-500"),
        w(g, "class", "whitespace-nowrap"),
        w(_, "class", "font-light mb-2"),
        w(a, "class", "mb-8"),
        bt(a, "cursor-pointer", T[5]);
    },
    m(k, v) {
      O(k, a, v),
        e(a, u),
        e(u, l),
        e(u, E),
        e(u, h),
        e(h, p),
        e(a, d),
        e(a, _),
        e(_, L),
        e(L, R),
        e(_, P),
        e(_, b),
        e(b, m),
        e(_, D),
        e(_, g),
        e(g, S),
        e(a, B),
        c && c.m(a, null),
        (y = !0),
        N || ((G = [Et(a, "click", T[9]), Et(a, "keypress", Gt)]), (N = !0));
    },
    p(k, [v]) {
      (!y || v & 1) && Oe(l, k[0]),
        (!y || v & 2) && Oe(p, k[1]),
        (!y || v & 4) && w(h, "href", k[2]),
        (!y || v & 8) && Oe(R, k[3]),
        (!y || v & 16) && Oe(S, k[4]),
        k[5]
          ? c &&
            (At(),
            ee(c, 1, 1, () => {
              c = null;
            }),
            Ct())
          : c
          ? (c.p(k, v), v & 32 && Y(c, 1))
          : ((c = wt(k)), c.c(), Y(c, 1), c.m(a, null)),
        (!y || v & 32) && bt(a, "cursor-pointer", k[5]);
    },
    i(k) {
      y || (Y(c), (y = !0));
    },
    o(k) {
      ee(c), (y = !1);
    },
    d(k) {
      k && t(a), c && c.d(), (N = !1), $t(G);
    },
  };
}
const Gt = () => {};
function Bt(T, a, u) {
  let { $$slots: l = {}, $$scope: E } = a,
    { title: h } = a,
    { company: p } = a,
    { url: d } = a,
    { dates: _ } = a,
    { location: L } = a,
    { defaultHidden: R = !1 } = a,
    P = R;
  const b = () => u(5, (P = !1));
  return (
    (T.$$set = (m) => {
      "title" in m && u(0, (h = m.title)),
        "company" in m && u(1, (p = m.company)),
        "url" in m && u(2, (d = m.url)),
        "dates" in m && u(3, (_ = m.dates)),
        "location" in m && u(4, (L = m.location)),
        "defaultHidden" in m && u(6, (R = m.defaultHidden)),
        "$$scope" in m && u(7, (E = m.$$scope));
    }),
    [h, p, d, _, L, P, R, E, l, b]
  );
}
class Ce extends St {
  constructor(a) {
    super(),
      Lt(this, a, Bt, Dt, kt, {
        title: 0,
        company: 1,
        url: 2,
        dates: 3,
        location: 4,
        defaultHidden: 6,
      });
  }
}
function qt(T) {
  let a, u;
  return {
    c() {
      (a = i("li")), (u = n("Working on stealth projects."));
    },
    l(l) {
      a = r(l, "LI", {});
      var E = o(a);
      (u = s(E, "Working on stealth projects.")), E.forEach(t);
    },
    m(l, E) {
      O(l, a, E), e(a, u);
    },
    p: $e,
    d(l) {
      l && t(a);
    },
  };
}
function Ht(T) {
  let a, u, l, E, h, p, d, _, L, R, P, b, m, D;
  return {
    c() {
      (a = i("li")),
        (u = n("Advised by Chris Potts & Zhengxuan Wu. Developed ")),
        (l = i("a")),
        (E = i("strong")),
        (h = n("BoundBench")),
        (p =
          n(` and formalized the PRBO objective to measure & lower-bound steering techniques
      LLM behavior; combined concept-incorporation + distributional-shift metrics
      with IWAE-style, logit-based estimators for fast probability estimates without
      LLM judges.`)),
        (d = $()),
        (_ = i("li")),
        (L =
          n(`Designed a benchmarking plan across common steering methods (Rank-1 ReFT,
      activation patching, steering vectors, DiffMean, probes, SAEs, LoRA/FT),
      with criteria that elicit target behavior while preserving base-model
      propensities and linking scores to downstream tasks.`)),
        (R = $()),
        (P = i("li")),
        (b = n("Reference: ")),
        (m = i("a")),
        (D = n("BoundBench Presentation")),
        this.h();
    },
    l(g) {
      a = r(g, "LI", {});
      var S = o(a);
      (u = s(S, "Advised by Chris Potts & Zhengxuan Wu. Developed ")),
        (l = r(S, "A", { class: !0, href: !0 }));
      var B = o(l);
      E = r(B, "STRONG", {});
      var y = o(E);
      (h = s(y, "BoundBench")),
        y.forEach(t),
        B.forEach(t),
        (p = s(
          S,
          ` and formalized the PRBO objective to measure & lower-bound steering techniques
      LLM behavior; combined concept-incorporation + distributional-shift metrics
      with IWAE-style, logit-based estimators for fast probability estimates without
      LLM judges.`
        )),
        S.forEach(t),
        (d = M(g)),
        (_ = r(g, "LI", {}));
      var N = o(_);
      (L = s(
        N,
        `Designed a benchmarking plan across common steering methods (Rank-1 ReFT,
      activation patching, steering vectors, DiffMean, probes, SAEs, LoRA/FT),
      with criteria that elicit target behavior while preserving base-model
      propensities and linking scores to downstream tasks.`
      )),
        N.forEach(t),
        (R = M(g)),
        (P = r(g, "LI", {}));
      var G = o(P);
      (b = s(G, "Reference: ")), (m = r(G, "A", { class: !0, href: !0 }));
      var c = o(m);
      (D = s(c, "BoundBench Presentation")),
        c.forEach(t),
        G.forEach(t),
        this.h();
    },
    h() {
      w(l, "class", "link"),
        w(
          l,
          "href",
          "https://docs.google.com/presentation/d/1wkIOn2mpStnb5rJKQ5vth29V6C3bCFghzAJfED4W_fU/edit?usp=sharing"
        ),
        w(m, "class", "link"),
        w(
          m,
          "href",
          "https://docs.google.com/presentation/d/1wkIOn2mpStnb5rJKQ5vth29V6C3bCFghzAJfED4W_fU/edit?usp=sharing"
        );
    },
    m(g, S) {
      O(g, a, S),
        e(a, u),
        e(a, l),
        e(l, E),
        e(E, h),
        e(a, p),
        O(g, d, S),
        O(g, _, S),
        e(_, L),
        O(g, R, S),
        O(g, P, S),
        e(P, b),
        e(P, m),
        e(m, D);
    },
    p: $e,
    d(g) {
      g && t(a), g && t(d), g && t(_), g && t(R), g && t(P);
    },
  };
}
function jt(T) {
  let a, u, l, E, h, p, d, _, L, R, P, b, m, D, g, S, B, y, N, G, c, k;
  return {
    c() {
      (a = i("li")),
        (u = i("strong")),
        (l = n("Disaster Recovery Team")),
        (E = n(`. Leveraged Python and statistical
      analysis in a large-scale Linux environment to build an
      `)),
        (h = i("strong")),
        (p = n("automated reporting system")),
        (d = n(`
      that quantitatively analyzed disaster recovery test outcomes using time-series
      analysis and pattern recognition techniques,
      `)),
        (_ = i("strong")),
        (L = n("saving dozens of weekly engineering hours")),
        (R = n(` through data-driven
      optimization.`)),
        (P = $()),
        (b = i("li")),
        (m = n("Architected a systematic ")),
        (D = i("strong")),
        (g = n("data analysis pipeline")),
        (S = n(` to evaluate
      operational risk using statistical modeling approaches, implementing modules
      for time-series analysis of execution latency, error rate tracking with machine
      learning classification, and quantitative assessment of system failure events
      to inform data-driven engineering priorities.`)),
        (B = $()),
        (y = i("li")),
        (N =
          n(`Deployed a mission-critical analytics engine into production, engineering
      a full `)),
        (G = i("strong")),
        (c = n("CI/CD pipeline")),
        (k = n(` with automated model validation and
      scheduled job execution to ensure reliable, periodic delivery of quantitative
      risk insights to downstream systems—demonstrating experience with systematic,
      data-driven approaches to complex problem-solving.`));
    },
    l(v) {
      a = r(v, "LI", {});
      var f = o(a);
      u = r(f, "STRONG", {});
      var A = o(u);
      (l = s(A, "Disaster Recovery Team")),
        A.forEach(t),
        (E = s(
          f,
          `. Leveraged Python and statistical
      analysis in a large-scale Linux environment to build an
      `
        )),
        (h = r(f, "STRONG", {}));
      var V = o(h);
      (p = s(V, "automated reporting system")),
        V.forEach(t),
        (d = s(
          f,
          `
      that quantitatively analyzed disaster recovery test outcomes using time-series
      analysis and pattern recognition techniques,
      `
        )),
        (_ = r(f, "STRONG", {}));
      var j = o(_);
      (L = s(j, "saving dozens of weekly engineering hours")),
        j.forEach(t),
        (R = s(
          f,
          ` through data-driven
      optimization.`
        )),
        f.forEach(t),
        (P = M(v)),
        (b = r(v, "LI", {}));
      var q = o(b);
      (m = s(q, "Architected a systematic ")), (D = r(q, "STRONG", {}));
      var W = o(D);
      (g = s(W, "data analysis pipeline")),
        W.forEach(t),
        (S = s(
          q,
          ` to evaluate
      operational risk using statistical modeling approaches, implementing modules
      for time-series analysis of execution latency, error rate tracking with machine
      learning classification, and quantitative assessment of system failure events
      to inform data-driven engineering priorities.`
        )),
        q.forEach(t),
        (B = M(v)),
        (y = r(v, "LI", {}));
      var I = o(y);
      (N = s(
        I,
        `Deployed a mission-critical analytics engine into production, engineering
      a full `
      )),
        (G = r(I, "STRONG", {}));
      var H = o(G);
      (c = s(H, "CI/CD pipeline")),
        H.forEach(t),
        (k = s(
          I,
          ` with automated model validation and
      scheduled job execution to ensure reliable, periodic delivery of quantitative
      risk insights to downstream systems—demonstrating experience with systematic,
      data-driven approaches to complex problem-solving.`
        )),
        I.forEach(t);
    },
    m(v, f) {
      O(v, a, f),
        e(a, u),
        e(u, l),
        e(a, E),
        e(a, h),
        e(h, p),
        e(a, d),
        e(a, _),
        e(_, L),
        e(a, R),
        O(v, P, f),
        O(v, b, f),
        e(b, m),
        e(b, D),
        e(D, g),
        e(b, S),
        O(v, B, f),
        O(v, y, f),
        e(y, N),
        e(y, G),
        e(G, c),
        e(y, k);
    },
    p: $e,
    d(v) {
      v && t(a), v && t(P), v && t(b), v && t(B), v && t(y);
    },
  };
}
function Wt(T) {
  let a, u, l, E, h, p, d, _, L, R, P, b, m, D, g, S, B, y, N, G, c, k, v;
  return {
    c() {
      (a = i("li")),
        (u = n("Developed and implemented an ")),
        (l = i("strong")),
        (E = n("end-to-end ML pipeline")),
        (h = n(`
      utilizing bulk RNA-seq expression data from proprietary and public datasets
      to train a `)),
        (p = i("strong")),
        (d = n("100M+ parameter transformer model")),
        (_ = n(`, achieving
      state-of-the-art performance in autoregressive generation of "future"
      RNAseqs with biologically viable expression patterns.`)),
        (L = $()),
        (R = i("li")),
        (P =
          n(`Established comprehensive internal benchmarking protocols and implemented
      robust data tagging systems to prevent contamination during `)),
        (b = i("strong")),
        (m = n("large model pretraining")),
        (D = n(
          ", while specializing and curating datasets for performance testing."
        )),
        (g = $()),
        (S = i("li")),
        (B = n("Built and deployed an ")),
        (y = i("strong")),
        (N = n("automated bioinformatics platform")),
        (G = n(`
      that integrated omics data analysis pipelines with fine-tuned LLMs with DPO,
      optimized for generating scientific abstracts and publication-quality figures,
      streamlining research workflows while maintaining
      `)),
        (c = i("strong")),
        (k = n("95% expert-rated accuracy")),
        (v = n("."));
    },
    l(f) {
      a = r(f, "LI", {});
      var A = o(a);
      (u = s(A, "Developed and implemented an ")), (l = r(A, "STRONG", {}));
      var V = o(l);
      (E = s(V, "end-to-end ML pipeline")),
        V.forEach(t),
        (h = s(
          A,
          `
      utilizing bulk RNA-seq expression data from proprietary and public datasets
      to train a `
        )),
        (p = r(A, "STRONG", {}));
      var j = o(p);
      (d = s(j, "100M+ parameter transformer model")),
        j.forEach(t),
        (_ = s(
          A,
          `, achieving
      state-of-the-art performance in autoregressive generation of "future"
      RNAseqs with biologically viable expression patterns.`
        )),
        A.forEach(t),
        (L = M(f)),
        (R = r(f, "LI", {}));
      var q = o(R);
      (P = s(
        q,
        `Established comprehensive internal benchmarking protocols and implemented
      robust data tagging systems to prevent contamination during `
      )),
        (b = r(q, "STRONG", {}));
      var W = o(b);
      (m = s(W, "large model pretraining")),
        W.forEach(t),
        (D = s(
          q,
          ", while specializing and curating datasets for performance testing."
        )),
        q.forEach(t),
        (g = M(f)),
        (S = r(f, "LI", {}));
      var I = o(S);
      (B = s(I, "Built and deployed an ")), (y = r(I, "STRONG", {}));
      var H = o(y);
      (N = s(H, "automated bioinformatics platform")),
        H.forEach(t),
        (G = s(
          I,
          `
      that integrated omics data analysis pipelines with fine-tuned LLMs with DPO,
      optimized for generating scientific abstracts and publication-quality figures,
      streamlining research workflows while maintaining
      `
        )),
        (c = r(I, "STRONG", {}));
      var Q = o(c);
      (k = s(Q, "95% expert-rated accuracy")),
        Q.forEach(t),
        (v = s(I, ".")),
        I.forEach(t);
    },
    m(f, A) {
      O(f, a, A),
        e(a, u),
        e(a, l),
        e(l, E),
        e(a, h),
        e(a, p),
        e(p, d),
        e(a, _),
        O(f, L, A),
        O(f, R, A),
        e(R, P),
        e(R, b),
        e(b, m),
        e(R, D),
        O(f, g, A),
        O(f, S, A),
        e(S, B),
        e(S, y),
        e(y, N),
        e(S, G),
        e(S, c),
        e(c, k),
        e(S, v);
    },
    p: $e,
    d(f) {
      f && t(a), f && t(L), f && t(R), f && t(g), f && t(S);
    },
  };
}
function Vt(T) {
  let a,
    u,
    l,
    E,
    h,
    p,
    d,
    _,
    L,
    R,
    P,
    b,
    m,
    D,
    g,
    S,
    B,
    y,
    N,
    G,
    c,
    k,
    v,
    f,
    A,
    V,
    j,
    q,
    W;
  return {
    c() {
      (a = i("li")),
        (u = n("Student researcher working on ")),
        (l = i("strong")),
        (E = n("autonomous systems")),
        (h = n(` for trajectory
      optimization and applying on-board VLMs/LLMs/CV for anomaly detection/reaction
      under Professor Marco Pavone (Director of Nvidia's Autonomous Systems Division).`)),
        (p = $()),
        (d = i("li")),
        (_ = n("Engineered a unified software application for ")),
        (L = i("strong")),
        (R = n("Gazebo/Robot Operating System 2")),
        (P = n(`
      simulation integration with PX4, utilizing
      `)),
        (b = i("strong")),
        (m = n("Nvidia Orin Jetson Nano")),
        (D = n(`
      and `)),
        (g = i("strong")),
        (S = n("motion-capture Pub-Sub model")),
        (B = n(` for real-time autonomous
      system testing.`)),
        (y = $()),
        (N = i("li")),
        (G = n("Developed and implemented ")),
        (c = i("strong")),
        (k = n("trajectory optimization")),
        (v = n(` and
      `)),
        (f = i("strong")),
        (A = n(
          "obstacle avoidance algorithms for kinodynamic motion planning"
        )),
        (V = n(`
      in an indoor environment as part of a 3-person team. Project demo can be found
      `)),
        (j = i("a")),
        (q = n("here")),
        (W = n(".")),
        this.h();
    },
    l(I) {
      a = r(I, "LI", {});
      var H = o(a);
      (u = s(H, "Student researcher working on ")), (l = r(H, "STRONG", {}));
      var Q = o(l);
      (E = s(Q, "autonomous systems")),
        Q.forEach(t),
        (h = s(
          H,
          ` for trajectory
      optimization and applying on-board VLMs/LLMs/CV for anomaly detection/reaction
      under Professor Marco Pavone (Director of Nvidia's Autonomous Systems Division).`
        )),
        H.forEach(t),
        (p = M(I)),
        (d = r(I, "LI", {}));
      var X = o(d);
      (_ = s(X, "Engineered a unified software application for ")),
        (L = r(X, "STRONG", {}));
      var te = o(L);
      (R = s(te, "Gazebo/Robot Operating System 2")),
        te.forEach(t),
        (P = s(
          X,
          `
      simulation integration with PX4, utilizing
      `
        )),
        (b = r(X, "STRONG", {}));
      var ge = o(b);
      (m = s(ge, "Nvidia Orin Jetson Nano")),
        ge.forEach(t),
        (D = s(
          X,
          `
      and `
        )),
        (g = r(X, "STRONG", {}));
      var he = o(g);
      (S = s(he, "motion-capture Pub-Sub model")),
        he.forEach(t),
        (B = s(
          X,
          ` for real-time autonomous
      system testing.`
        )),
        X.forEach(t),
        (y = M(I)),
        (N = r(I, "LI", {}));
      var F = o(N);
      (G = s(F, "Developed and implemented ")), (c = r(F, "STRONG", {}));
      var ve = o(c);
      (k = s(ve, "trajectory optimization")),
        ve.forEach(t),
        (v = s(
          F,
          ` and
      `
        )),
        (f = r(F, "STRONG", {}));
      var _e = o(f);
      (A = s(
        _e,
        "obstacle avoidance algorithms for kinodynamic motion planning"
      )),
        _e.forEach(t),
        (V = s(
          F,
          `
      in an indoor environment as part of a 3-person team. Project demo can be found
      `
        )),
        (j = r(F, "A", { class: !0, href: !0 }));
      var ae = o(j);
      (q = s(ae, "here")),
        ae.forEach(t),
        (W = s(F, ".")),
        F.forEach(t),
        this.h();
    },
    h() {
      w(j, "class", "link"),
        w(
          j,
          "href",
          "https://drive.google.com/file/d/1m0dRVO0GV9PgKm-927A8Gy3j7V91pHiY/view?usp=drive_link"
        );
    },
    m(I, H) {
      O(I, a, H),
        e(a, u),
        e(a, l),
        e(l, E),
        e(a, h),
        O(I, p, H),
        O(I, d, H),
        e(d, _),
        e(d, L),
        e(L, R),
        e(d, P),
        e(d, b),
        e(b, m),
        e(d, D),
        e(d, g),
        e(g, S),
        e(d, B),
        O(I, y, H),
        O(I, N, H),
        e(N, G),
        e(N, c),
        e(c, k),
        e(N, v),
        e(N, f),
        e(f, A),
        e(N, V),
        e(N, j),
        e(j, q),
        e(N, W);
    },
    p: $e,
    d(I) {
      I && t(a), I && t(p), I && t(d), I && t(y), I && t(N);
    },
  };
}
function Ut(T) {
  let a, u, l, E, h, p, d, _, L, R, P, b, m, D, g, S, B, y, N, G, c, k, v;
  return {
    c() {
      (a = i("li")),
        (u = n("Designed and implemented a novel ")),
        (l = i("strong")),
        (E = n("group-theoretic MCMC algorithm")),
        (h =
          n(` that significantly improved sampling efficiency for systems with discrete
      symmetries, demonstrated through application to dielectric polymers.`)),
        (p = $()),
        (d = i("li")),
        (_ = n("Created clustering algorithms that achieved up to ")),
        (L = i("strong")),
        (R = n("50% faster convergence")),
        (P =
          n(` compared to standard and umbrella sampling methods by leveraging symmetry
      properties in potential energy landscapes.`)),
        (b = $()),
        (m = i("li")),
        (D = n("Leveraged ")),
        (g = i("strong")),
        (S = n("UMAP/t-SNE")),
        (B = n(` for feature extraction of MCMC data
      and built out `)),
        (y = i("strong")),
        (N = n("PyTorch Autoencoder")),
        (G = n(` to detect polymer
      characteristic anomalies depending on reconstruction error, boosted
      detection accuracy by 15%. Read more
      `)),
        (c = i("a")),
        (k = n("here")),
        (v = n(".")),
        this.h();
    },
    l(f) {
      a = r(f, "LI", {});
      var A = o(a);
      (u = s(A, "Designed and implemented a novel ")), (l = r(A, "STRONG", {}));
      var V = o(l);
      (E = s(V, "group-theoretic MCMC algorithm")),
        V.forEach(t),
        (h = s(
          A,
          ` that significantly improved sampling efficiency for systems with discrete
      symmetries, demonstrated through application to dielectric polymers.`
        )),
        A.forEach(t),
        (p = M(f)),
        (d = r(f, "LI", {}));
      var j = o(d);
      (_ = s(j, "Created clustering algorithms that achieved up to ")),
        (L = r(j, "STRONG", {}));
      var q = o(L);
      (R = s(q, "50% faster convergence")),
        q.forEach(t),
        (P = s(
          j,
          ` compared to standard and umbrella sampling methods by leveraging symmetry
      properties in potential energy landscapes.`
        )),
        j.forEach(t),
        (b = M(f)),
        (m = r(f, "LI", {}));
      var W = o(m);
      (D = s(W, "Leveraged ")), (g = r(W, "STRONG", {}));
      var I = o(g);
      (S = s(I, "UMAP/t-SNE")),
        I.forEach(t),
        (B = s(
          W,
          ` for feature extraction of MCMC data
      and built out `
        )),
        (y = r(W, "STRONG", {}));
      var H = o(y);
      (N = s(H, "PyTorch Autoencoder")),
        H.forEach(t),
        (G = s(
          W,
          ` to detect polymer
      characteristic anomalies depending on reconstruction error, boosted
      detection accuracy by 15%. Read more
      `
        )),
        (c = r(W, "A", { class: !0, href: !0 }));
      var Q = o(c);
      (k = s(Q, "here")), Q.forEach(t), (v = s(W, ".")), W.forEach(t), this.h();
    },
    h() {
      w(c, "class", "link"),
        w(
          c,
          "href",
          "https://drive.google.com/file/d/1AZjvm8SI971qRs-mBoepW8WOB5WXQsqy/view?usp=sharing"
        );
    },
    m(f, A) {
      O(f, a, A),
        e(a, u),
        e(a, l),
        e(l, E),
        e(a, h),
        O(f, p, A),
        O(f, d, A),
        e(d, _),
        e(d, L),
        e(L, R),
        e(d, P),
        O(f, b, A),
        O(f, m, A),
        e(m, D),
        e(m, g),
        e(g, S),
        e(m, B),
        e(m, y),
        e(y, N),
        e(m, G),
        e(m, c),
        e(c, k),
        e(m, v);
    },
    p: $e,
    d(f) {
      f && t(a), f && t(p), f && t(d), f && t(b), f && t(m);
    },
  };
}
function xt(T) {
  let a,
    u,
    l,
    E,
    h,
    p,
    d,
    _,
    L,
    R,
    P,
    b,
    m,
    D,
    g,
    S,
    B,
    y,
    N,
    G,
    c,
    k,
    v,
    f,
    A,
    V,
    j,
    q,
    W,
    I,
    H,
    Q,
    X,
    te,
    ge,
    he,
    F,
    ve,
    _e,
    ae,
    ze,
    De,
    ye,
    Ge,
    Be,
    x,
    be,
    qe,
    He,
    Ee,
    je,
    We,
    we,
    Ve,
    Ue,
    Se,
    xe,
    Fe,
    Le,
    Je,
    Ke,
    ke,
    Qe,
    Ne,
    U,
    Ae,
    Xe,
    Ze,
    ne,
    Ye,
    se,
    et,
    ie,
    tt,
    re,
    at,
    oe,
    nt,
    le,
    Te;
  return (
    (a = new Ot({
      props: {
        title: "Alex Wang – Resume",
        description:
          "Software engineer, researcher, and writer. Building meaningful systems and interfaces for people.",
      },
    })),
    (ne = new Ce({
      props: {
        title: "Software Engineering Intern",
        company: "Stealth",
        url: "#",
        dates: "Oct 2025 - Present",
        location: "Mountain View, CA",
        $$slots: { default: [qt] },
        $$scope: { ctx: T },
      },
    })),
    (se = new Ce({
      props: {
        title: "Researcher",
        company: "Stanford NLP",
        url: "https://nlp.stanford.edu/",
        dates: "Sep 2025 - Present",
        location: "Stanford, CA",
        $$slots: { default: [Ht] },
        $$scope: { ctx: T },
      },
    })),
    (ie = new Ce({
      props: {
        title: "Software Engineering Intern",
        company: "Meta",
        url: "https://www.meta.com/about/",
        dates: "June 2025 - Sep. 2025",
        location: "Menlo Park, CA",
        $$slots: { default: [jt] },
        $$scope: { ctx: T },
      },
    })),
    (re = new Ce({
      props: {
        title: "AI/ML Engineer Intern",
        company: "Biostate AI",
        url: "https://biostate.ai/",
        dates: "Nov. 2024 - Mar. 2025",
        location: "Palo Alto, CA",
        $$slots: { default: [Wt] },
        $$scope: { ctx: T },
      },
    })),
    (oe = new Ce({
      props: {
        title: "Research Assistant",
        company: "Stanford Autonomous Systems Laboratory (ASL)",
        url: "https://stanfordasl.github.io/",
        dates: "Aug. 2024 - Mar. 2025",
        location: "Stanford, CA",
        $$slots: { default: [Vt] },
        $$scope: { ctx: T },
      },
    })),
    (le = new Ce({
      props: {
        title: "Data Science Intern",
        company: "Air Force Research Laboratory (AFRL)",
        url: "https://www.afrl.af.mil/",
        dates: "June 2023 - Sep. 2023",
        location: "Dayton, Ohio",
        $$slots: { default: [Ut] },
        $$scope: { ctx: T },
      },
    })),
    {
      c() {
        de(a.$$.fragment),
          (u = $()),
          (l = i("section")),
          (E = i("h2")),
          (h = n("Education")),
          (p = $()),
          (d = i("div")),
          (_ = i("div")),
          (L = i("h3")),
          (R = n("Stanford University")),
          (P = $()),
          (b = i("div")),
          (m = n("Expected June 2027")),
          (D = $()),
          (g = i("p")),
          (S = n("B.S. in CS + Mathematics")),
          (B = $()),
          (y = i("h4")),
          (N = n("Graduate Technical Coursework:")),
          (G = $()),
          (c = i("ul")),
          (k = i("li")),
          (v = n("Programming Languages (CS 242)")),
          (f = $()),
          (A = i("li")),
          (V = n("Deep Learning for NLP (CS 224n)")),
          (j = $()),
          (q = i("li")),
          (W = n("Machine Learning (CS 229)")),
          (I = $()),
          (H = i("li")),
          (Q = n("Reinforcement Learning (CS 234)")),
          (X = $()),
          (te = i("li")),
          (ge = n("ML with Graphs (CS 224w)")),
          (he = $()),
          (F = i("li")),
          (ve = n("Fundamentals of Blockchain Infrastructure (EE 374)")),
          (_e = $()),
          (ae = i("li")),
          (ze = n("Parallel Computing with CUDA/OpenMP/MPI (CME 213)")),
          (De = $()),
          (ye = i("h4")),
          (Ge = n("Undergraduate Technical Coursework:")),
          (Be = $()),
          (x = i("ul")),
          (be = i("li")),
          (qe = n("Parallel Computing (CS 149)")),
          (He = $()),
          (Ee = i("li")),
          (je = n("Groups and Rings (MATH 120)")),
          (We = $()),
          (we = i("li")),
          (Ve = n("Real Analysis (MATH 171)")),
          (Ue = $()),
          (Se = i("li")),
          (xe = n("Linear Algebra and Matrix Theory (MATH 113)")),
          (Fe = $()),
          (Le = i("li")),
          (Je = n("Operating Systems (CS 111)")),
          (Ke = $()),
          (ke = i("li")),
          (Qe = n("Algorithms (CS 161)")),
          (Ne = $()),
          (U = i("section")),
          (Ae = i("h2")),
          (Xe = n("Work Experience")),
          (Ze = $()),
          de(ne.$$.fragment),
          (Ye = $()),
          de(se.$$.fragment),
          (et = $()),
          de(ie.$$.fragment),
          (tt = $()),
          de(re.$$.fragment),
          (at = $()),
          de(oe.$$.fragment),
          (nt = $()),
          de(le.$$.fragment),
          this.h();
      },
      l(C) {
        me(a.$$.fragment, C), (u = M(C)), (l = r(C, "SECTION", { class: !0 }));
        var z = o(l);
        E = r(z, "H2", { class: !0 });
        var Me = o(E);
        (h = s(Me, "Education")),
          Me.forEach(t),
          (p = M(z)),
          (d = r(z, "DIV", { class: !0 }));
        var ce = o(d);
        _ = r(ce, "DIV", { class: !0 });
        var fe = o(_);
        L = r(fe, "H3", { class: !0 });
        var Re = o(L);
        (R = s(Re, "Stanford University")),
          Re.forEach(t),
          (P = M(fe)),
          (b = r(fe, "DIV", { class: !0 }));
        var Ie = o(b);
        (m = s(Ie, "Expected June 2027")),
          Ie.forEach(t),
          fe.forEach(t),
          (D = M(ce)),
          (g = r(ce, "P", { class: !0 }));
        var Pe = o(g);
        (S = s(Pe, "B.S. in CS + Mathematics")),
          Pe.forEach(t),
          ce.forEach(t),
          (B = M(z)),
          (y = r(z, "H4", { class: !0 }));
        var st = o(y);
        (N = s(st, "Graduate Technical Coursework:")),
          st.forEach(t),
          (G = M(z)),
          (c = r(z, "UL", { class: !0 }));
        var J = o(c);
        k = r(J, "LI", { class: !0 });
        var it = o(k);
        (v = s(it, "Programming Languages (CS 242)")),
          it.forEach(t),
          (f = M(J)),
          (A = r(J, "LI", { class: !0 }));
        var rt = o(A);
        (V = s(rt, "Deep Learning for NLP (CS 224n)")),
          rt.forEach(t),
          (j = M(J)),
          (q = r(J, "LI", { class: !0 }));
        var ot = o(q);
        (W = s(ot, "Machine Learning (CS 229)")),
          ot.forEach(t),
          (I = M(J)),
          (H = r(J, "LI", { class: !0 }));
        var lt = o(H);
        (Q = s(lt, "Reinforcement Learning (CS 234)")),
          lt.forEach(t),
          (X = M(J)),
          (te = r(J, "LI", { class: !0 }));
        var ct = o(te);
        (ge = s(ct, "ML with Graphs (CS 224w)")),
          ct.forEach(t),
          (he = M(J)),
          (F = r(J, "LI", { class: !0 }));
        var ft = o(F);
        (ve = s(ft, "Fundamentals of Blockchain Infrastructure (EE 374)")),
          ft.forEach(t),
          (_e = M(J)),
          (ae = r(J, "LI", { class: !0 }));
        var dt = o(ae);
        (ze = s(dt, "Parallel Computing with CUDA/OpenMP/MPI (CME 213)")),
          dt.forEach(t),
          J.forEach(t),
          (De = M(z)),
          (ye = r(z, "H4", { class: !0 }));
        var mt = o(ye);
        (Ge = s(mt, "Undergraduate Technical Coursework:")),
          mt.forEach(t),
          (Be = M(z)),
          (x = r(z, "UL", { class: !0 }));
        var Z = o(x);
        be = r(Z, "LI", { class: !0 });
        var ut = o(be);
        (qe = s(ut, "Parallel Computing (CS 149)")),
          ut.forEach(t),
          (He = M(Z)),
          (Ee = r(Z, "LI", { class: !0 }));
        var pt = o(Ee);
        (je = s(pt, "Groups and Rings (MATH 120)")),
          pt.forEach(t),
          (We = M(Z)),
          (we = r(Z, "LI", { class: !0 }));
        var gt = o(we);
        (Ve = s(gt, "Real Analysis (MATH 171)")),
          gt.forEach(t),
          (Ue = M(Z)),
          (Se = r(Z, "LI", { class: !0 }));
        var ht = o(Se);
        (xe = s(ht, "Linear Algebra and Matrix Theory (MATH 113)")),
          ht.forEach(t),
          (Fe = M(Z)),
          (Le = r(Z, "LI", { class: !0 }));
        var vt = o(Le);
        (Je = s(vt, "Operating Systems (CS 111)")),
          vt.forEach(t),
          (Ke = M(Z)),
          (ke = r(Z, "LI", { class: !0 }));
        var _t = o(ke);
        (Qe = s(_t, "Algorithms (CS 161)")),
          _t.forEach(t),
          Z.forEach(t),
          z.forEach(t),
          (Ne = M(C)),
          (U = r(C, "SECTION", { class: !0 }));
        var K = o(U);
        Ae = r(K, "H2", { class: !0 });
        var yt = o(Ae);
        (Xe = s(yt, "Work Experience")),
          yt.forEach(t),
          (Ze = M(K)),
          me(ne.$$.fragment, K),
          (Ye = M(K)),
          me(se.$$.fragment, K),
          (et = M(K)),
          me(ie.$$.fragment, K),
          (tt = M(K)),
          me(re.$$.fragment, K),
          (at = M(K)),
          me(oe.$$.fragment, K),
          (nt = M(K)),
          me(le.$$.fragment, K),
          K.forEach(t),
          this.h();
      },
      h() {
        w(E, "class", "heading2"),
          w(L, "class", "text-black text-lg"),
          w(b, "class", "text-neutral-500 mb-0.5"),
          w(_, "class", "flex justify-between items-end"),
          w(g, "class", "byline svelte-pyfzm9"),
          w(d, "class", "mb-4"),
          w(y, "class", "font-medium mt-4 mb-1"),
          w(k, "class", "svelte-pyfzm9"),
          w(A, "class", "svelte-pyfzm9"),
          w(q, "class", "svelte-pyfzm9"),
          w(H, "class", "svelte-pyfzm9"),
          w(te, "class", "svelte-pyfzm9"),
          w(F, "class", "svelte-pyfzm9"),
          w(ae, "class", "svelte-pyfzm9"),
          w(c, "class", "mb-4 svelte-pyfzm9"),
          w(ye, "class", "font-medium mt-4 mb-1"),
          w(be, "class", "svelte-pyfzm9"),
          w(Ee, "class", "svelte-pyfzm9"),
          w(we, "class", "svelte-pyfzm9"),
          w(Se, "class", "svelte-pyfzm9"),
          w(Le, "class", "svelte-pyfzm9"),
          w(ke, "class", "svelte-pyfzm9"),
          w(x, "class", "mb-4 svelte-pyfzm9"),
          w(l, "class", "layout-md py-12"),
          w(Ae, "class", "heading2"),
          w(U, "class", "layout-md py-6");
      },
      m(C, z) {
        ue(a, C, z),
          O(C, u, z),
          O(C, l, z),
          e(l, E),
          e(E, h),
          e(l, p),
          e(l, d),
          e(d, _),
          e(_, L),
          e(L, R),
          e(_, P),
          e(_, b),
          e(b, m),
          e(d, D),
          e(d, g),
          e(g, S),
          e(l, B),
          e(l, y),
          e(y, N),
          e(l, G),
          e(l, c),
          e(c, k),
          e(k, v),
          e(c, f),
          e(c, A),
          e(A, V),
          e(c, j),
          e(c, q),
          e(q, W),
          e(c, I),
          e(c, H),
          e(H, Q),
          e(c, X),
          e(c, te),
          e(te, ge),
          e(c, he),
          e(c, F),
          e(F, ve),
          e(c, _e),
          e(c, ae),
          e(ae, ze),
          e(l, De),
          e(l, ye),
          e(ye, Ge),
          e(l, Be),
          e(l, x),
          e(x, be),
          e(be, qe),
          e(x, He),
          e(x, Ee),
          e(Ee, je),
          e(x, We),
          e(x, we),
          e(we, Ve),
          e(x, Ue),
          e(x, Se),
          e(Se, xe),
          e(x, Fe),
          e(x, Le),
          e(Le, Je),
          e(x, Ke),
          e(x, ke),
          e(ke, Qe),
          O(C, Ne, z),
          O(C, U, z),
          e(U, Ae),
          e(Ae, Xe),
          e(U, Ze),
          ue(ne, U, null),
          e(U, Ye),
          ue(se, U, null),
          e(U, et),
          ue(ie, U, null),
          e(U, tt),
          ue(re, U, null),
          e(U, at),
          ue(oe, U, null),
          e(U, nt),
          ue(le, U, null),
          (Te = !0);
      },
      p(C, [z]) {
        const Me = {};
        z & 1 && (Me.$$scope = { dirty: z, ctx: C }), ne.$set(Me);
        const ce = {};
        z & 1 && (ce.$$scope = { dirty: z, ctx: C }), se.$set(ce);
        const fe = {};
        z & 1 && (fe.$$scope = { dirty: z, ctx: C }), ie.$set(fe);
        const Re = {};
        z & 1 && (Re.$$scope = { dirty: z, ctx: C }), re.$set(Re);
        const Ie = {};
        z & 1 && (Ie.$$scope = { dirty: z, ctx: C }), oe.$set(Ie);
        const Pe = {};
        z & 1 && (Pe.$$scope = { dirty: z, ctx: C }), le.$set(Pe);
      },
      i(C) {
        Te ||
          (Y(a.$$.fragment, C),
          Y(ne.$$.fragment, C),
          Y(se.$$.fragment, C),
          Y(ie.$$.fragment, C),
          Y(re.$$.fragment, C),
          Y(oe.$$.fragment, C),
          Y(le.$$.fragment, C),
          (Te = !0));
      },
      o(C) {
        ee(a.$$.fragment, C),
          ee(ne.$$.fragment, C),
          ee(se.$$.fragment, C),
          ee(ie.$$.fragment, C),
          ee(re.$$.fragment, C),
          ee(oe.$$.fragment, C),
          ee(le.$$.fragment, C),
          (Te = !1);
      },
      d(C) {
        pe(a, C),
          C && t(u),
          C && t(l),
          C && t(Ne),
          C && t(U),
          pe(ne),
          pe(se),
          pe(ie),
          pe(re),
          pe(oe),
          pe(le);
      },
    }
  );
}
class Qt extends St {
  constructor(a) {
    super(), Lt(this, a, null, xt, kt, {});
  }
}
export { Qt as default };
