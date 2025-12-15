import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute, g as add_classes, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { marked } from "marked";
import { f as formatTime } from "../../../chunks/utils.js";
const Calendar_days = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "3",
        "y": "4",
        "width": "18",
        "height": "18",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "y1": "2",
        "x2": "16",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "y1": "2",
        "x2": "8",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "y1": "10",
        "x2": "21",
        "y2": "10"
      }
    ],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M16 14h.01" }],
    ["path", { "d": "M8 18h.01" }],
    ["path", { "d": "M12 18h.01" }],
    ["path", { "d": "M16 18h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calendar-days" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
var title$q = "Bore – Localhost Tunnels";
var date$q = /* @__PURE__ */ new Date(16492032e5);
var repo$q = "ekzhang/bore";
var topics$q = [
  "Rust",
  "Systems",
  "CLI"
];
var lead$q = "A modern, simple TCP tunnel in 400 lines of Rust.";
var image$q = "bore.png";
var content$q = "`bore` is a minimal CLI tool that exposes local ports to a remote server,\nbypassing standard NAT connection firewalls. That's all it does: no more, and no\nless.\n\nWith a single binary, you can expose any number of local TCP ports to the public\ninternet at a specified remote server address. There is a public instance of the\ntunneling server running at `bore.pub`, available for anyone to use, similar to\n[ngrok](https://ngrok.com/) or\n[localtunnel](https://github.com/localtunnel/localtunnel). It's also very easy\nto host your own server with a single `bore server` command in the same binary\nexecutable, with optional authentication.\n\n**Links: [GitHub](https://github.com/ekzhang/bore),\n[Crates.io](https://crates.io/crates/bore-cli),\n[Documentation](https://docs.rs/bore-cli)**";
const bore$1 = {
  title: title$q,
  date: date$q,
  repo: repo$q,
  topics: topics$q,
  lead: lead$q,
  image: image$q,
  content: content$q
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$q,
  date: date$q,
  default: bore$1,
  image: image$q,
  lead: lead$q,
  repo: repo$q,
  title: title$q,
  topics: topics$q
}, Symbol.toStringTag, { value: "Module" }));
var title$p = "Char-RNN Keras";
var date$p = /* @__PURE__ */ new Date(15402528e5);
var repo$p = "ekzhang/char-rnn-keras";
var topics$p = [
  "Python",
  "Machine Learning",
  "Music"
];
var lead$p = "Character-level language models with recurrent neural networks in Keras.";
var image$p = "char-rnn-keras.png";
var content$p = "Inspired by Andrej Karpathy's\n[blog post](https://karpathy.github.io/2015/05/21/rnn-effectiveness/), this is\nan implementation of a multi-layer long short-term memory (LSTM) network in\nKeras, for learning and sampling from character-level patterns in text. This was\ntrained to generate writing in the style of historical authors, like\nShakespeare, Hugo, and Carroll.\n\nA really interesting application was training this model on a text-based corpus\nof folk music, from which it could compose fairly convincing new music samples.\nSee the <code>music-gen</code> demo below.\n\n**Links: [GitHub](https://github.com/ekzhang/char-rnn-keras),\n[Demo](https://ekzhang.github.io/music-gen/)**";
const charRnnKeras$1 = {
  title: title$p,
  date: date$p,
  repo: repo$p,
  topics: topics$p,
  lead: lead$p,
  image: image$p,
  content: content$p
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$p,
  date: date$p,
  default: charRnnKeras$1,
  image: image$p,
  lead: lead$p,
  repo: repo$p,
  title: title$p,
  topics: topics$p
}, Symbol.toStringTag, { value: "Module" }));
var title$o = "classes.wtf";
var date$o = /* @__PURE__ */ new Date(16600896e5);
var repo$o = "ekzhang/classes.wtf";
var topics$o = [
  "Go",
  "TypeScript",
  "Svelte",
  "Systems"
];
var lead$o = "A course catalog with extremely fast full-text search.";
var image$o = "classes-wtf.png";
var content$o = "Harvard has many course search websites, but none of them are good. This project\nis an attempt to take the problem more seriously: write high-performance\nsoftware and set great defaults so that people can get better, more useful\nsuggestions, 100x faster.\n\nClasses.wtf is a custom, distributed course search engine that focuses on speed\nand quality of results. The goal is for the entire {request, computation,\nresponse, and render} pipeline to take under 30 milliseconds. I built it in a\nweekend out of personal annoyance and launched a week later; it's now pretty\npopular among students at my school.\n\n**Links: [GitHub](https://github.com/ekzhang/classes.wtf),\n[Website](https://classes.wtf)**";
const classesWtf$1 = {
  title: title$o,
  date: date$o,
  repo: repo$o,
  topics: topics$o,
  lead: lead$o,
  image: image$o,
  content: content$o
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$o,
  date: date$o,
  default: classesWtf$1,
  image: image$o,
  lead: lead$o,
  repo: repo$o,
  title: title$o,
  topics: topics$o
}, Symbol.toStringTag, { value: "Module" }));
var title$n = "Composing Studio";
var date$n = /* @__PURE__ */ new Date(16322688e5);
var repo$n = "ekzhang/composing.studio";
var topics$n = [
  "TypeScript",
  "Rust",
  "Music",
  "React"
];
var lead$n = "Collaborative music composition for everyone.";
var image$n = "composing-studio.png";
var content$n = "_Composing Studio_ is a free and easy-to-use online music notation editor that\nlets anyone collaborate in real time on short musical pieces. To use it, just go\nto [composing.studio](https://composing.studio/) in your browser, create a new\nsession, and share the link with other musicians! There's no setup or\ninstallation required. You'll be able to typeset musical notation while seeing\neach other's work in real time (just like Google Docs), with instant sheet music\nrendering and live audio playback.\n\nThis project originated at [HackMIT 2021](https://hackmit.org/) (we won a grand\nprize), where I pitched the idea and formed a team of four programmer-musicians.\nAlthough we hadn't previously known each other, we all shared the same goal of\nexploring collaborative music with the global community.\n\n**Links: [GitHub](https://github.com/ekzhang/composing.studio),\n[Website](https://composing.studio/)**";
const composingStudio$1 = {
  title: title$n,
  date: date$n,
  repo: repo$n,
  topics: topics$n,
  lead: lead$n,
  image: image$n,
  content: content$n
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$n,
  date: date$n,
  default: composingStudio$1,
  image: image$n,
  lead: lead$n,
  repo: repo$n,
  title: title$n,
  topics: topics$n
}, Symbol.toStringTag, { value: "Module" }));
var title$m = "Crepe – Logic Programming in Rust";
var date$m = /* @__PURE__ */ new Date(16008192e5);
var repo$m = "ekzhang/crepe";
var topics$m = [
  "Rust",
  "Programming Languages",
  "Datalog"
];
var lead$m = "Fast, compiled Datalog for static analysis, with Rust integration.";
var image$m = "crepe.png";
var content$m = "_Crepe_ is a library that allows you to write declarative logic programs in\nRust, with a [Datalog](https://en.wikipedia.org/wiki/Datalog)-like syntax. It\nprovides a procedural macro that generates efficient, safe code and\ninteroperates seamlessly with Rust programs.\n\nInspired by the power of [Souffle](https://souffle-lang.github.io/) and\n[Formulog](https://github.com/HarvardPL/formulog), this project is unique in\nenabling safe integration of arbitrary functions from the host language (Rust)\nwithin compiled Horn clauses. It also includes many features of modern Datalog\nimplementations: stratified negation, semi-naive evaluation, and automatic index\ngeneration.\n\n**Links: [GitHub](https://github.com/ekzhang/crepe),\n[Crates.io](https://crates.io/crates/crepe),\n[Documentation](https://docs.rs/crepe)**";
const crepe$1 = {
  title: title$m,
  date: date$m,
  repo: repo$m,
  topics: topics$m,
  lead: lead$m,
  image: image$m,
  content: content$m
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$m,
  date: date$m,
  default: crepe$1,
  image: image$m,
  lead: lead$m,
  repo: repo$m,
  title: title$m,
  topics: topics$m
}, Symbol.toStringTag, { value: "Module" }));
var title$l = "Dispict";
var date$l = /* @__PURE__ */ new Date(16691616e5);
var repo$l = "ekzhang/dispict";
var topics$l = [
  "Python",
  "Svelte",
  "Art",
  "Vision"
];
var lead$l = "Creative aesthetics tool to discover art museums.";
var image$l = "dispict.jpg";
var image_border$3 = true;
var content$l = "Design a growing artistic exhibit of your own making, with semantic search\npowered by OpenAI CLIP. Bring your own labels and context.\n\nCreativity and curiosity require associative thinking. What if computers could\nconnect us with masterpieces made by artists of the past? Dispict is a new way\nto experience the Harvard Art Museums' online collection (containing over\n200,000 digitized works) through language-image machine learning models, helping\nyou curate your own personalized galleries.\n\n**Links: [GitHub](https://github.com/ekzhang/dispict),\n[Website](https://dispict.com)**";
const dispict$1 = {
  title: title$l,
  date: date$l,
  repo: repo$l,
  topics: topics$l,
  lead: lead$l,
  image: image$l,
  image_border: image_border$3,
  content: content$l
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$l,
  date: date$l,
  default: dispict$1,
  image: image$l,
  image_border: image_border$3,
  lead: lead$l,
  repo: repo$l,
  title: title$l,
  topics: topics$l
}, Symbol.toStringTag, { value: "Module" }));
var title$k = "Fast Semantic Segmentation";
var date$k = /* @__PURE__ */ new Date(15981408e5);
var repo$k = "ekzhang/fastseg";
var topics$k = [
  "Python",
  "Machine Learning",
  "Vision"
];
var lead$k = "State-of-the-art, real-time semantic segmentation with MobileNetV3.";
var image$k = "fastseg.jpg";
var content$k = 'While working at Nvidia, I open sourced PyTorch code and pretrained weights for\nreal-time semantic segmentation of street images. The goal was to make it easy\nfor anyone to use cutting-edge machine learning algorithms for semantic\nsegmentation tasks, especially in embedded applications.\n\nThis was a time-consuming effort aided by researchers from\n[ADLR](https://nv-adlr.github.io/). Although\n[the MobileNetV3 paper](https://arxiv.org/abs/1905.02244v5) reported 72.6% mIoU\naccuracy, previous public implementations only scored around 40-55% mIoU. After\nmany adjustments to model architecture, loss functions\n([RMI](https://arxiv.org/abs/1910.12037)), and hyperparameters, I was able to\ntrain models reaching 72.3% mIoU, while running inference at up to 37.3 FPS on a\nmodern GPU.\n\nI currently maintain this code as a\n<a href="https://pypi.org/project/fastseg/">package on PyPI</a>, along with\nscripts for inference and exporting models to different formats for deployment.\n\n**Links: [GitHub](https://github.com/ekzhang/fastseg),\n[Colab](https://colab.research.google.com/github/ekzhang/fastseg/blob/master/demo/fastseg-semantic-segmentation.ipynb)**';
const fastseg$1 = {
  title: title$k,
  date: date$k,
  repo: repo$k,
  topics: topics$k,
  lead: lead$k,
  image: image$k,
  content: content$k
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$k,
  date: date$k,
  default: fastseg$1,
  image: image$k,
  lead: lead$k,
  repo: repo$k,
  title: title$k,
  topics: topics$k
}, Symbol.toStringTag, { value: "Module" }));
var title$j = "Canvas Hashlife";
var date$j = /* @__PURE__ */ new Date(15455232e5);
var repo$j = "ekzhang/game-of-life";
var topics$j = [
  "JavaScript",
  "Algorithms",
  "Graphics",
  "Vue"
];
var lead$j = "An ultra-fast simulation of Conway's Game of Life in the browser.";
var image$j = "game-of-life.png";
var content$j = "Ever wanted to simulate a 2<sup>100</sup> &times; 2<sup>100</sup> grid of cells\nover 2<sup>50</sup> generations? Well, now you can do that in just milliseconds\nwithout any specialized software, right in your browser!\n\nHow is it possible to simulate such a massive pattern without running out of CPU\nor memory? The secret is Bill Gosper's\n[Hashlife](https://en.wikipedia.org/wiki/Hashlife) algorithm, which combines\nquadtrees and memoization to\n[compress space and time](https://www.drdobbs.com/jvm/an-algorithm-for-compressing-space-and-t/184406478).\nIn the image, you can see a frontend web application computing the\n498,913,509,376<sup>th</sup> generation of a Turing machine pattern in just\nunder a millisecond.\n\n**Links: [GitHub](https://github.com/ekzhang/game-of-life),\n[Website](https://ekzhang.github.io/game-of-life/)**";
const gameOfLife$1 = {
  title: title$j,
  date: date$j,
  repo: repo$j,
  topics: topics$j,
  lead: lead$j,
  image: image$j,
  content: content$j
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$j,
  date: date$j,
  default: gameOfLife$1,
  image: image$j,
  lead: lead$j,
  repo: repo$j,
  title: title$j,
  topics: topics$j
}, Symbol.toStringTag, { value: "Module" }));
var title$i = "Graphics Workshop";
var date$i = /* @__PURE__ */ new Date(1619136e6);
var repo$i = "ekzhang/graphics-workshop";
var topics$i = [
  "OpenGL",
  "Graphics",
  "Shaders"
];
var lead$i = "Learn computer graphics by writing GPU shaders!";
var image$i = "graphics-workshop.png";
var content$i = "This workshop contains a selection of self-guided projects designed to teach the\nbasics of computer graphics. Each project introduces an important graphics\ntechnique that is extensively used in real-world applications. The code is\ndesigned to run in real time on modern GPUs, without requiring any extra\nsoftware. I wrote this when frustrated with the lack of proper documentation and\nsimple code examples for GPU shaders.\n\nThe topics include fragment shaders\n([GLSL](https://en.wikipedia.org/wiki/OpenGL_Shading_Language)), procedural\ntexture generation, rasterization, lighting calculations, and real-time ray\ntracing. I hosted a live version of this workshop at Harvard, and it has been\nused by thousands of self-learners after gaining popularity in the\n[/r/gamedev](https://www.reddit.com/r/gamedev/) community.\n\n**Links: [GitHub](https://github.com/ekzhang/graphics-workshop),\n[Deployment](https://www.ekzhang.com/graphics-workshop/)**";
const graphicsWorkshop$1 = {
  title: title$i,
  date: date$i,
  repo: repo$i,
  topics: topics$i,
  lead: lead$i,
  image: image$i,
  content: content$i
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$i,
  date: date$i,
  default: graphicsWorkshop$1,
  image: image$i,
  lead: lead$i,
  repo: repo$i,
  title: title$i,
  topics: topics$i
}, Symbol.toStringTag, { value: "Module" }));
var title$h = "Universal Gravity Simulator";
var date$h = /* @__PURE__ */ new Date(14639616e5);
var repo$h = "ekzhang/gravity";
var topics$h = [
  "JavaScript",
  "Graphics",
  "Physics"
];
var lead$h = "Control hundreds of tiny planets with gravity.";
var image$h = "gravity.png";
var content$h = "This was one of my first fun programming projects, a visual experiment\nsimulating gravity in a system with hundreds of interacting objects.\nCalculations are done using simple physics formulas, with a bit of damping to\nmake them more robust. The user can click to add an invisible mass that attracts\nall objects to the cursor. Everything is rendered in real time on a `<canvas>`\nelement, and it's quite satisfying to move the colorful balls around!\n\n**Links: [GitHub](https://github.com/ekzhang/gravity),\n[Website](https://ekzhang.github.io/gravity/)**";
const gravity$1 = {
  title: title$h,
  date: date$h,
  repo: repo$h,
  topics: topics$h,
  lead: lead$h,
  image: image$h,
  content: content$h
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$h,
  date: date$h,
  default: gravity$1,
  image: image$h,
  lead: lead$h,
  repo: repo$h,
  title: title$h,
  topics: topics$h
}, Symbol.toStringTag, { value: "Module" }));
var title$g = "Procedural Harmony";
var date$g = /* @__PURE__ */ new Date(155088e7);
var repo$g = "ekzhang/harmony";
var topics$g = [
  "Python",
  "Music",
  "Algorithms",
  "Flask"
];
var lead$g = "Dynamic programming applied to four-part harmony.";
var image$g = "harmony.png";
var image_border$2 = true;
var content$g = "This is a Python program that takes as input a string containing\n[keys](https://en.wikipedia.org/wiki/Key_signature) and\n[roman numerals](https://en.wikipedia.org/wiki/Roman_numeral_analysis)\nrepresenting a chord progression, and voices the resulting chords according to\ncommon practice [voice leading](https://en.wikipedia.org/wiki/Voice_leading)\nconventions. This can be used to try out chord progressions, compose a short\nchorale, and solve music theory exercises.\n\nParsing and interpreting the roman numerals was done with\n[Music21](https://web.mit.edu/music21/). This project required satisfying a\ntechnical set of\n[voice leading constraints](http://derekremes.com/wp-content/uploads/voiceleadingsummary.pdf),\nwhich I framed as a combinatorial optimization problem. Although the set of\npossible voicings is exponential in size, you can use dynamic programming on\nintermediate states for a relatively fast algorithm. See the website below for\nan interactive version deployed with Flask.\n\nThe code and idea behind this project were used as the basis for an\n[abstract at ISMIR 2020](https://program.ismir2020.net/lbd_432.html), written by\ncomputational music theory researchers at McGill University.\n\n**Links: [GitHub](https://github.com/ekzhang/harmony),\n[Website](https://autoharmony.herokuapp.com/)**";
const harmony$1 = {
  title: title$g,
  date: date$g,
  repo: repo$g,
  topics: topics$g,
  lead: lead$g,
  image: image$g,
  image_border: image_border$2,
  content: content$g
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$g,
  date: date$g,
  default: harmony$1,
  image: image$g,
  image_border: image_border$2,
  lead: lead$g,
  repo: repo$g,
  title: title$g,
  topics: topics$g
}, Symbol.toStringTag, { value: "Module" }));
var title$f = "Inline SQL";
var date$f = /* @__PURE__ */ new Date(16651872e5);
var repo$f = "ekzhang/inline-sql";
var topics$f = [
  "Python",
  "Programming Languages",
  "Databases"
];
var lead$f = "Weaving relational queries into the fabric of Python.";
var image$f = "inline-sql.png";
var content$f = "The `inline-sql` library provides a simple embedded language for writing SQL in\nPython programs. Operations run directly within the calling process, and they\nexecute on Pandas dataframes. Local variables are automatically interpolated as\nparameters.\n\nThis is implemented as a small wrapper around\n[DuckDB](https://github.com/duckdb/duckdb), so it is\n[extremely fast](https://duckdb.org/2021/05/14/sql-on-pandas.html). From my own\nexperimental perspective, the intent of the project was to see whether we can\nusefully and ergonomically embed declarative, relational query languages within\ngeneral-purpose media.\n\n**Links: [GitHub](https://github.com/ekzhang/inline-sql),\n[PyPI](https://pypi.org/project/inline-sql/)**";
const inlineSql$1 = {
  title: title$f,
  date: date$f,
  repo: repo$f,
  topics: topics$f,
  lead: lead$f,
  image: image$f,
  content: content$f
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$f,
  date: date$f,
  default: inlineSql$1,
  image: image$f,
  lead: lead$f,
  repo: repo$f,
  title: title$f,
  topics: topics$f
}, Symbol.toStringTag, { value: "Module" }));
var title$e = "Julia Fractal Renderers";
var date$e = /* @__PURE__ */ new Date(15244416e5);
var repo$e = "ekzhang/julia-fractal";
var topics$e = [
  "C++",
  "Java",
  "Graphics",
  "TypeScript",
  "OpenGL"
];
var lead$e = "Fast, interactive fractal renderers in C++, Java, and WebGL.";
var image$e = "julia-1.jpg";
var subimages = [
  "julia-2.jpg",
  "julia-3.jpg",
  "julia-4.jpg"
];
var content$e = "Originally, this project started out as a multithreaded Julia fractal renderer\nin C++, which I used to create high-quality static images and animations.\nHowever, I also wanted to interactively explore the fractals by zooming and\npanning, so I created a Java Swing app with similar multithreaded performance.\n\nThe speed of these implementations was heavily CPU-bound though, so I finally\nimplemented an\n[OpenGL shader](https://en.wikipedia.org/wiki/OpenGL_Shading_Language) that\ncould render Julia fractals with blazing-fast speed, fast enough to be explored\ninteractively with almost no lag. I rendered using WebGL and connected it to\nmobile-friendly controls with TypeScript. You can play with this fractal\nexplorer in the website linked below.\n\n**Links: [GitHub](https://github.com/ekzhang/julia-fractal),\n[GitHub (Java)](https://github.com/ekzhang/julia-viewer),\n[GitHub (WebGL)](https://github.com/ekzhang/webgl-julia-viewer),\n[Website](https://ekzhang.github.io/webgl-julia-viewer/)**";
const juliaFractal = {
  title: title$e,
  date: date$e,
  repo: repo$e,
  topics: topics$e,
  lead: lead$e,
  image: image$e,
  subimages,
  content: content$e
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$e,
  date: date$e,
  default: juliaFractal,
  image: image$e,
  lead: lead$e,
  repo: repo$e,
  subimages,
  title: title$e,
  topics: topics$e
}, Symbol.toStringTag, { value: "Module" }));
var title$d = "Langevin Dynamics for Composition";
var date$d = /* @__PURE__ */ new Date(16060896e5);
var repo$d = "ekzhang/langevin-music";
var topics$d = [
  "Python",
  "Machine Learning",
  "Music",
  "Transformers"
];
var lead$d = "Generative modeling of Bach chorales by gradient estimation.";
var image$d = "langevin-music.png";
var content$d = "This research project introduces a new generative model for music composition,\nbased on annealed Langevin dynamics and a noise-conditional score matching\nalgorithm using transformers. Unlike implicit models such as GANs, this learns\nan explicit distribution of the input data.\n\nWe study if Langevin dynamics and score matching can combine the controllability\nof Markov chain Monte Carlo (MCMC) methods with the global view and fast\nconvergence of stochastic gradient descent, to produce high-quality, structured\nmusical compositions.\n\nOur contribution is to look in the direction of designing generative deep\nlearning models for music that strongly _avoid local minima_, while _retaining\ncontrollability_.\n\n**Links: [GitHub](https://github.com/ekzhang/langevin-music),\n[Paper](https://www.ekzhang.com/assets/pdf/Generative_Music_Modeling.pdf)**";
const langevinMusic$1 = {
  title: title$d,
  date: date$d,
  repo: repo$d,
  topics: topics$d,
  lead: lead$d,
  image: image$d,
  content: content$d
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$d,
  date: date$d,
  default: langevinMusic$1,
  image: image$d,
  lead: lead$d,
  repo: repo$d,
  title: title$d,
  topics: topics$d
}, Symbol.toStringTag, { value: "Module" }));
var title$c = "Algorithm and Data Structure Library";
var date$c = /* @__PURE__ */ new Date(15482016e5);
var repo$c = "ekzhang/library";
var topics$c = [
  "C++",
  "CP",
  "Algorithms",
  "Angular"
];
var lead$c = "A competitive programmer's library of algorithms and data structures in C++.";
var image$c = "library.png";
var content$c = "I maintain an open-source library of about thirty-five C++ templates for\nalgorithms and data structures. These are fairly advanced tricks targeted toward\ntop competitive programmers, including fast implementations of FFT, Aho-Corasick\nstring search, and Dinic's blocking flow algorithm, as well as data structures\nlike link-cut trees and centroid decomposition.\n\nThis is accessible on a static website, which I developed using Angular. The\nwebsite also includes a searchable collection of more than 600 code samples from\nother open-source libraries.\n\n**Links: [GitHub](https://github.com/ekzhang/library),\n[Website](https://ekzlib.netlify.app/)**";
const library$1 = {
  title: title$c,
  date: date$c,
  repo: repo$c,
  topics: topics$c,
  lead: lead$c,
  image: image$c,
  content: content$c
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$c,
  date: date$c,
  default: library$1,
  image: image$c,
  lead: lead$c,
  repo: repo$c,
  title: title$c,
  topics: topics$c
}, Symbol.toStringTag, { value: "Module" }));
var title$b = "Percival";
var date$b = /* @__PURE__ */ new Date(16382304e5);
var repo$b = "ekzhang/percival";
var topics$b = [
  "Rust",
  "Svelte",
  "Datalog",
  "Visualization"
];
var lead$b = "Web-based, reactive Datalog notebooks.";
var image$b = "percival.png";
var image_border$1 = true;
var content$b = "[Percival](https://percival.ink/) is a **declarative data query and\nvisualization language**. It provides a reactive, web-based notebook environment\nfor exploring complex datasets, producing interactive graphics, and sharing\nresults.\n\nPercival combines the flexibility of\n[_Datalog_](https://en.wikipedia.org/wiki/Datalog) as a query language for\nrelational data with the beauty of\n[_exploratory visualization grammars_](https://observablehq.com/@observablehq/plot).\nThese declarative components interact through a reactive dataflow system.\nBecause Percival uses web technologies (including Web Workers for multithreaded,\nsandboxed execution), fully-interactive notebooks can be shared with anyone on\nthe Internet, making data analyses more tangible to others.\n\n**Links: [GitHub](https://github.com/ekzhang/percival),\n[Website](https://percival.ink/)**";
const percival$1 = {
  title: title$b,
  date: date$b,
  repo: repo$b,
  topics: topics$b,
  lead: lead$b,
  image: image$b,
  image_border: image_border$1,
  content: content$b
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$b,
  date: date$b,
  default: percival$1,
  image: image$b,
  image_border: image_border$1,
  lead: lead$b,
  repo: repo$b,
  title: title$b,
  topics: topics$b
}, Symbol.toStringTag, { value: "Module" }));
var title$a = "Redis Rope";
var date$a = /* @__PURE__ */ new Date(16591392e5);
var repo$a = "ekzhang/redis-rope";
var topics$a = [
  "Zig",
  "Rust",
  "Systems",
  "Algorithms"
];
var lead$a = "Fast native data type for manipulating large strings in Redis.";
var image$a = "redis-rope.svg";
var content$a = "`redis-rope` is a fast and versatile\n[rope](<https://en.wikipedia.org/wiki/Rope_(data_structure)>) data type for\nlarge strings in [Redis](https://redis.io), distributed as a native\n[module](https://redis.io/docs/reference/modules/). It's primarily written in\nZig and tested with Rust.\n\nThe ropes in this module are backed by\n[splay trees](https://en.wikipedia.org/wiki/Splay_tree), which are a\nself-adjusting data structure that has logarithmic amortized worst-case\nperformance, while recently-accessed indices are also quick to access in\nsubsequent operations. Each splay tree node stores between 64 and 127 bytes of\ndata.\n\nMore than just being theoretically interesting, this module also tries to be\nsomewhat _practical_ by caring about safety, correctness, and speed. It\napproaches the performance of ordinary strings for simple operations and is\nhundreds of times faster for complex operations.\n\n**Links: [GitHub](https://github.com/ekzhang/redis-rope),\n[Releases](https://github.com/ekzhang/redis-rope/releases)**";
const redisRope$1 = {
  title: title$a,
  date: date$a,
  repo: repo$a,
  topics: topics$a,
  lead: lead$a,
  image: image$a,
  content: content$a
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$a,
  date: date$a,
  default: redisRope$1,
  image: image$a,
  lead: lead$a,
  repo: repo$a,
  title: title$a,
  topics: topics$a
}, Symbol.toStringTag, { value: "Module" }));
var title$9 = "Path Tracer";
var date$9 = /* @__PURE__ */ new Date(16086816e5);
var repo$9 = "ekzhang/rpt";
var topics$9 = [
  "Rust",
  "Graphics",
  "Rendering"
];
var lead$9 = "A physically-based path tracer in Rust.";
var image$9 = "rpt.jpg";
var content$9 = "This a physically based, CPU-only rendering engine written in Rust. It\nimplements a Monte Carlo path tracing algorithm for global illumination. There's\na lot of features, including k-d tree mesh acceleration, physical material\nproperties (microfacet BSDF with multiple importance sampling), HDRI environment\nmaps, OBJ/MTL/STL files, depth of field, and particle physics simulation.\n\nIt's also parallelized with [rayon](https://github.com/rayon-rs/rayon) and\navailable as a library on [crates.io](https://crates.io/). The entire source\ncode, including code for the example images and more, is very short (~3K SLOC).\nWe're still looking to extend it with bidirectional path tracing and other\nfeatures.\n\nThis won top project out of 100 students in MIT's computer graphics class\n(6.837, Fall 2020).\n\n**Links: [GitHub](https://github.com/ekzhang/rpt),\n[Crates.io](https://crates.io/crates/rpt),\n[Documentation](https://docs.rs/rpt)**";
const rpt$1 = {
  title: title$9,
  date: date$9,
  repo: repo$9,
  topics: topics$9,
  lead: lead$9,
  image: image$9,
  content: content$9
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$9,
  date: date$9,
  default: rpt$1,
  image: image$9,
  lead: lead$9,
  repo: repo$9,
  title: title$9,
  topics: topics$9
}, Symbol.toStringTag, { value: "Module" }));
var title$8 = "Rushlight";
var date$8 = /* @__PURE__ */ new Date(16877376e5);
var repo$8 = "ekzhang/rushlight";
var topics$8 = [
  "TypeScript",
  "Systems",
  "Redis"
];
var lead$8 = "Collaborative code editors that run on your own infrastructure.";
var image$8 = "rushlight.jpg";
var content$8 = "Rushlight is my take on the _essence_ of a persistent, collaborative text editor\nbased on operational transformation, as a library you would embed in a larger\napp.\n\nIt supports multiple real-time documents, with live cursors, based on\nCodeMirror 6. The backend is stateless, and you bring your own transport — even\na boring HTTP handler works. There aren't any proprietary gadgets or opaque\nconfigurations. It's just a distributed data structure in its purest pragmatic\nform.\n\n**Links: [GitHub](https://github.com/ekzhang/rushlight),\n[Demo](https://rushlight.up.railway.app/)**";
const rushlight$1 = {
  title: title$8,
  date: date$8,
  repo: repo$8,
  topics: topics$8,
  lead: lead$8,
  image: image$8,
  content: content$8
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$8,
  date: date$8,
  default: rushlight$1,
  image: image$8,
  lead: lead$8,
  repo: repo$8,
  title: title$8,
  topics: topics$8
}, Symbol.toStringTag, { value: "Module" }));
var title$7 = "Rustpad";
var date$7 = /* @__PURE__ */ new Date(16244064e5);
var repo$7 = "ekzhang/rustpad";
var topics$7 = [
  "Rust",
  "Systems",
  "TypeScript",
  "React"
];
var lead$7 = "A self-hosted online collaborative code editor.";
var image$7 = "rustpad.png";
var content$7 = "Rustpad is an efficient and minimal collaborative text editor based on the\n_operational transformation_ algorithm. It lets users collaborate in real time\nwhile writing code in their browser. Rustpad is completely self-hosted and fits\nin a tiny Docker image, no database required.\n\nArchitecturally, client-side code communicates via WebSocket with a central\nserver that stores in-memory data structures. This makes the editor very fast,\nallows us to avoid provisioning a database, and makes testing much easier. It\ndemonstrates the power of distributed systems and concurrent network\nprogramming, designing with consideration for the entire stack.\n\n**Links: [GitHub](https://github.com/ekzhang/rustpad),\n[Website](https://rustpad.io/)**";
const rustpad$1 = {
  title: title$7,
  date: date$7,
  repo: repo$7,
  topics: topics$7,
  lead: lead$7,
  image: image$7,
  content: content$7
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$7,
  date: date$7,
  default: rustpad$1,
  image: image$7,
  lead: lead$7,
  repo: repo$7,
  title: title$7,
  topics: topics$7
}, Symbol.toStringTag, { value: "Module" }));
var title$6 = "Set with Friends";
var date$6 = /* @__PURE__ */ new Date(15797376e5);
var repo$6 = "ekzhang/setwithfriends";
var topics$6 = [
  "JavaScript",
  "Game",
  "React",
  "Firebase"
];
var lead$6 = "An online, real-time multiplayer card game.";
var image$6 = "setwithfriends.png";
var content$6 = "_Set with Friends_ is a web implementation of a real-time pattern matching card\ngame called [Set](<https://en.wikipedia.org/wiki/Set_(card_game)>). Originally,\nwhen I was at [SPARC 2019](https://sparc-camp.org/), I wondered how I could\nbridge the 3000 mile gap between some of the friends I had made after we parted\nways. _Set with Friends_ lets you play Set online with minimal overhead (no\nlogin necessary); it's as simple as sharing a custom link and having fun!\n\nDuring the design process, I learned about Firebase, so working on this app\nintroduced me to serverless architectures and provided a good exercise in\ncreating live interfaces. We completely overhauled the design in May and\nreleased version 2.0 in June. At its peak, the website had over 40,000 monthly\nactive users for half a year, and as of September 2022 there have been 5,000,000\ngames played.\n\n**Links: [GitHub](https://github.com/ekzhang/setwithfriends),\n[Website](https://setwithfriends.com/)**";
const setwithfriends$1 = {
  title: title$6,
  date: date$6,
  repo: repo$6,
  topics: topics$6,
  lead: lead$6,
  image: image$6,
  content: content$6
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$6,
  date: date$6,
  default: setwithfriends$1,
  image: image$6,
  lead: lead$6,
  repo: repo$6,
  title: title$6,
  topics: topics$6
}, Symbol.toStringTag, { value: "Module" }));
var title$5 = "Pencil Sketch Rendering";
var date$5 = /* @__PURE__ */ new Date(1621728e6);
var repo$5 = "ekzhang/sketching";
var topics$5 = [
  "OpenGL",
  "Graphics",
  "Geometry",
  "Algorithms"
];
var lead$5 = "Geometry processing for real-time pencil sketching.";
var image$5 = "sketching.png";
var image_border = true;
var content$5 = "This research project explores the task of drawing 3D objects, either triangle\nmeshes or implicitly represented as signed distance fields (SDFs), in the art\nstyle of a pencil sketch. We review, implement, and extend existing methods with\ngeometry processing techniques.\n\nOur primary contribution is a new scale-invariant algorithm for estimating\nsurface curvatures of an SDF within the graphics pipeline, which was a\npreviously unexplored topic. This algorithm has the advantage of enabling\nreal-time rendering of dynamic geometries at arbitrary scales (modeled by\nimplicit functions), without the noise sensitivity of mesh-based methods.\n\n**Links: [GitHub](https://github.com/ekzhang/sketching),\n[Website](https://pencil-sketching.vercel.app/),\n[Paper](https://pencil-sketching.vercel.app/Pencil-Sketching.pdf)**";
const sketching$1 = {
  title: title$5,
  date: date$5,
  repo: repo$5,
  topics: topics$5,
  lead: lead$5,
  image: image$5,
  image_border,
  content: content$5
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$5,
  date: date$5,
  default: sketching$1,
  image: image$5,
  image_border,
  lead: lead$5,
  repo: repo$5,
  title: title$5,
  topics: topics$5
}, Symbol.toStringTag, { value: "Module" }));
var title$4 = "sshx";
var date$4 = /* @__PURE__ */ new Date(16991424e5);
var repo$4 = "ekzhang/sshx";
var topics$4 = [
  "Rust",
  "Svelte",
  "Systems"
];
var lead$4 = "A secure web-based, collaborative terminal.";
var image$4 = "sshx.png";
var content$4 = "sshx takes your terminal and shares it on the web. It works on screens of all\nsizes. Create new windows, resize, drag and drop, and see other people's cursors\nas they type, with live output. Everything is end-to-end encrypted over a\nlow-latency global server mesh.\n\nThis was the synthesis of two years of planning, development and\nexperimentation. The result is a unique software artifact. It combines work as a\nsolo engineer, crafting a complex, performant streaming system, and as a\ndesigner of deeply collaborative software.\n\n**Links: [GitHub](https://github.com/ekzhang/sshx), [Website](https://sshx.io)**";
const sshx$1 = {
  title: title$4,
  date: date$4,
  repo: repo$4,
  topics: topics$4,
  lead: lead$4,
  image: image$4,
  content: content$4
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$4,
  date: date$4,
  default: sshx$1,
  image: image$4,
  lead: lead$4,
  repo: repo$4,
  title: title$4,
  topics: topics$4
}, Symbol.toStringTag, { value: "Module" }));
var title$3 = "Polygon Triangulation with Holes";
var date$3 = /* @__PURE__ */ new Date(15585696e5);
var repo$3 = "ekzhang/triangulate";
var topics$3 = [
  "C++",
  "Algorithms",
  "Emscripten",
  "Graphics"
];
var lead$3 = "Fast computational geometry algorithms in WebAssembly.";
var image$3 = "triangulate.png";
var content$3 = "This was an experiment to implement the <em>ear clipping</em> algorithm from\ncomputational geometry for\n[polygon triangulation](https://en.wikipedia.org/wiki/Polygon_triangulation).\nAlthough easy to describe, triangulation is a surprisingly difficult problem, as\nthere are many corner cases involving concave polygons, holes, and nested\npolygons. Therefore, we need to use some\n[clever techniques](https://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf)\nto make the problem tractable.\n\nNote that there is a randomized O(N log<sup>\\*</sup> N) algorithm for this\nproblem\n([Seidel 1991](https://www.sciencedirect.com/science/article/pii/0925772191900124)).\nHowever, for most practical applications, ear clipping is fast enough and\nproduces more robust results, while having lower constant-factor overhead due to\nthe use of simpler data structures.\n\nI implemented the algorithm in C++ from scratch, then compiled it to WebAssembly\nusing [Emscripten](https://emscripten.org/) to produce code that could be run by\nthe browser.\n\n**Links: [GitHub](https://github.com/ekzhang/triangulate),\n[Website](https://triangulate.surge.sh/)**";
const triangulate$1 = {
  title: title$3,
  date: date$3,
  repo: repo$3,
  topics: topics$3,
  lead: lead$3,
  image: image$3,
  content: content$3
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$3,
  date: date$3,
  default: triangulate$1,
  image: image$3,
  lead: lead$3,
  repo: repo$3,
  title: title$3,
  topics: topics$3
}, Symbol.toStringTag, { value: "Module" }));
var title$2 = "µKanren-rs";
var date$2 = /* @__PURE__ */ new Date(16313184e5);
var repo$2 = "ekzhang/ukanren-rs";
var topics$2 = [
  "Rust",
  "Programming Languages",
  "Systems"
];
var lead$2 = "A featherweight relational programming language.";
var image$2 = "ukanren-rs.png";
var content$2 = "This is a Rust implementation of µKanren, a very minimal language in the\nminiKanren family. See the original Scheme implementation\n[here](http://webyrd.net/scheme-2013/papers/HemannMuKanren2013.pdf) for\nreference. Similar to how functional programming focuses on functions as the\ncore unit of abstraction, relational programming aims to represent common\nmathematical concepts as _logical relations_.\n\nThe library was originally implemented as an exercise for a graduate programming\nlanguages design seminar at Harvard, but I made the code available to the open\nsource community as a Rust crate.\n\n**Links: [GitHub](https://github.com/ekzhang/ukanren-rs),\n[Crates.io](https://crates.io/crates/ukanren),\n[Documentation](https://docs.rs/ukanren)**";
const ukanrenRs$1 = {
  title: title$2,
  date: date$2,
  repo: repo$2,
  topics: topics$2,
  lead: lead$2,
  image: image$2,
  content: content$2
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$2,
  date: date$2,
  default: ukanrenRs$1,
  image: image$2,
  lead: lead$2,
  repo: repo$2,
  title: title$2,
  topics: topics$2
}, Symbol.toStringTag, { value: "Module" }));
var title$1 = "Handwriting Generator";
var date$1 = /* @__PURE__ */ new Date(15349824e5);
var repo$1 = "ekzhang/vae-cnn-mnist";
var topics$1 = [
  "Python",
  "Machine Learning",
  "Graphics"
];
var lead$1 = "Variational autoencoder that learns latent features in handwriting.";
var image$1 = "vae-cnn-mnist.png";
var content$1 = 'This is a neural network that encodes 28&times;28 images of handwritten\ncharacters in a 6-dimensional latent space using deep learning. It consists of\ntwo parts: an encoder block that puts the input through several convolutional\nand downsampling layers to extract latent variables, and a decoder block that\ntakes latent variables and a label to reconstruct the original image, minimizing\nmean squared error. During the training process, we add some Gaussian noise to\nthe latent space, which is the so-called "reparameterization trick" of a\n[variational autoencoder](https://papers.nips.cc/paper/5775-learning-structured-output-representation-using-deep-conditional).\n\nI implemented the model in Keras and trained it on a dataset of over 400,000\nhandwritten characters. You can see the results in the web demo below, which\nstitches the outputs together onto a canvas. Without any prior knowledge, the\nmodel is able to isolate six of the most important characteristics in human\nhandwriting.\n\n**Links: [GitHub](https://github.com/ekzhang/vae-cnn-mnist),\n[Demo](https://ekzhang.github.io/vae-cnn-mnist/)**';
const vaeCnnMnist$1 = {
  title: title$1,
  date: date$1,
  repo: repo$1,
  topics: topics$1,
  lead: lead$1,
  image: image$1,
  content: content$1
};
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$1,
  date: date$1,
  default: vaeCnnMnist$1,
  image: image$1,
  lead: lead$1,
  repo: repo$1,
  title: title$1,
  topics: topics$1
}, Symbol.toStringTag, { value: "Module" }));
var title = "Competitive Programming Workspace";
var date = /* @__PURE__ */ new Date(15691968e5);
var repo = "ekzhang/wkspace";
var topics = [
  "JavaScript",
  "CP",
  "React",
  "Express"
];
var lead = "An online, cloud-synchronized workspace for competitive programmers.";
var image = "wkspace.png";
var content = "Top competitive programmers have dedicated setups on their local machines that\nlet them quickly creating new programs from templates, generate input files, and\nrun code on suites of test data. But what if you're working on a different\ncomputer, and you don't have all of these tools installed?\n\n_Workspace_ is a side-by-side problem viewer and code editor that allows you to\nrun code online. It supports advanced features like autocompletion and\nautomatically parses of test cases for each problem, saving time in a\nprogramming competition. This was inspired by\n[CS Academy](https://csacademy.com/)'s interface.\n\nThe web server lets you scrape problems from online judges at the click of a\nbutton. All code is automatically saved and synchronized with a MongoDB instance\nin the cloud, so it persists across sessions and browsers. See the website below\nto try it out.\n\n**Links: [GitHub](https://github.com/ekzhang/wkspace),\n[Website](https://wkspace.herokuapp.com/)**";
const wkspace$1 = {
  title,
  date,
  repo,
  topics,
  lead,
  image,
  content
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content,
  date,
  default: wkspace$1,
  image,
  lead,
  repo,
  title,
  topics
}, Symbol.toStringTag, { value: "Module" }));
const bore = "/_app/immutable/assets/bore.c871aed0.png";
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bore
}, Symbol.toStringTag, { value: "Module" }));
const charRnnKeras = "/_app/immutable/assets/char-rnn-keras.c42f556f.png";
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: charRnnKeras
}, Symbol.toStringTag, { value: "Module" }));
const classesWtf = "/_app/immutable/assets/classes-wtf.8c2777c6.png";
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: classesWtf
}, Symbol.toStringTag, { value: "Module" }));
const composingStudio = "/_app/immutable/assets/composing-studio.9747e7e4.png";
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: composingStudio
}, Symbol.toStringTag, { value: "Module" }));
const crepe = "/_app/immutable/assets/crepe.9cd3565e.png";
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: crepe
}, Symbol.toStringTag, { value: "Module" }));
const dispict = "/_app/immutable/assets/dispict.6a5cd3bd.jpg";
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dispict
}, Symbol.toStringTag, { value: "Module" }));
const fastseg = "/_app/immutable/assets/fastseg.22e6688c.jpg";
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fastseg
}, Symbol.toStringTag, { value: "Module" }));
const gameOfLife = "/_app/immutable/assets/game-of-life.0c13ef05.png";
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gameOfLife
}, Symbol.toStringTag, { value: "Module" }));
const graphicsWorkshop = "/_app/immutable/assets/graphics-workshop.8c21b2ee.png";
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: graphicsWorkshop
}, Symbol.toStringTag, { value: "Module" }));
const gravity = "/_app/immutable/assets/gravity.bc8c441c.png";
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gravity
}, Symbol.toStringTag, { value: "Module" }));
const harmony = "/_app/immutable/assets/harmony.25e58fd0.png";
const __vite_glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: harmony
}, Symbol.toStringTag, { value: "Module" }));
const inlineSql = "/_app/immutable/assets/inline-sql.509c1895.png";
const __vite_glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: inlineSql
}, Symbol.toStringTag, { value: "Module" }));
const julia1 = "/_app/immutable/assets/julia-1.e84616bd.jpg";
const __vite_glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: julia1
}, Symbol.toStringTag, { value: "Module" }));
const julia2 = "/_app/immutable/assets/julia-2.d3f67f15.jpg";
const __vite_glob_1_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: julia2
}, Symbol.toStringTag, { value: "Module" }));
const julia3 = "/_app/immutable/assets/julia-3.ec6a39cb.jpg";
const __vite_glob_1_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: julia3
}, Symbol.toStringTag, { value: "Module" }));
const julia4 = "/_app/immutable/assets/julia-4.7de9e4df.jpg";
const __vite_glob_1_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: julia4
}, Symbol.toStringTag, { value: "Module" }));
const langevinMusic = "/_app/immutable/assets/langevin-music.66e4579e.png";
const __vite_glob_1_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: langevinMusic
}, Symbol.toStringTag, { value: "Module" }));
const library = "/_app/immutable/assets/library.88782b31.png";
const __vite_glob_1_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: library
}, Symbol.toStringTag, { value: "Module" }));
const percival = "/_app/immutable/assets/percival.a6115ad8.png";
const __vite_glob_1_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: percival
}, Symbol.toStringTag, { value: "Module" }));
const redisRope = "/_app/immutable/assets/redis-rope.e1e2ba4e.svg";
const __vite_glob_1_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: redisRope
}, Symbol.toStringTag, { value: "Module" }));
const rpt = "/_app/immutable/assets/rpt.fb795885.jpg";
const __vite_glob_1_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rpt
}, Symbol.toStringTag, { value: "Module" }));
const rushlight = "/_app/immutable/assets/rushlight.7db2943a.jpg";
const __vite_glob_1_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rushlight
}, Symbol.toStringTag, { value: "Module" }));
const rustpad = "/_app/immutable/assets/rustpad.2cbc1bb1.png";
const __vite_glob_1_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rustpad
}, Symbol.toStringTag, { value: "Module" }));
const setwithfriends = "/_app/immutable/assets/setwithfriends.e814f490.png";
const __vite_glob_1_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: setwithfriends
}, Symbol.toStringTag, { value: "Module" }));
const sketching = "/_app/immutable/assets/sketching.8c77a336.png";
const __vite_glob_1_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sketching
}, Symbol.toStringTag, { value: "Module" }));
const sshx = "/_app/immutable/assets/sshx.ea086053.png";
const __vite_glob_1_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sshx
}, Symbol.toStringTag, { value: "Module" }));
const triangulate = "/_app/immutable/assets/triangulate.9c829ea2.png";
const __vite_glob_1_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: triangulate
}, Symbol.toStringTag, { value: "Module" }));
const ukanrenRs = "/_app/immutable/assets/ukanren-rs.b09debb9.png";
const __vite_glob_1_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ukanrenRs
}, Symbol.toStringTag, { value: "Module" }));
const vaeCnnMnist = "/_app/immutable/assets/vae-cnn-mnist.2c640af4.png";
const __vite_glob_1_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vaeCnnMnist
}, Symbol.toStringTag, { value: "Module" }));
const wkspace = "/_app/immutable/assets/wkspace.a04b6a8c.png";
const __vite_glob_1_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wkspace
}, Symbol.toStringTag, { value: "Module" }));
const Markdown_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".md-output.svelte-19wf98v p{margin-bottom:1rem\n}.md-output.svelte-19wf98v strong{font-weight:600\n}.md-output.svelte-19wf98v code{font-size:95%\n}",
  map: null
};
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let html;
  let { source } = $$props;
  marked.use({
    renderer: {
      link(href, title2, text) {
        let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
        if (title2) {
          out += ' title="' + title2 + '"';
        }
        out += ">" + text + "</a>";
        return out;
      }
    }
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  $$result.css.add(css$2);
  html = marked.parse(source, { smartLists: true, smartypants: true });
  return `<div class="md-output svelte-19wf98v"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END -->
</div>`;
});
const Project_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pill.svelte-1d8a62h{display:flex;align-items:center;font-size:0.875rem;line-height:1.25rem;font-weight:500;margin-right:0.375rem;margin-bottom:0.5rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding-left:0.375rem;padding-right:0.375rem;padding-top:1px;padding-bottom:1px\n}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { images } = $$props;
  let { stars = null } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.stars === void 0 && $$bindings.stars && stars !== void 0)
    $$bindings.stars(stars);
  $$result.css.add(css$1);
  return `
<h3 class="text-black text-xl font-semibold mb-2"><span class="mr-1">${escape(data.title)}</span>
  <small class="whitespace-nowrap text-neutral-500 text-base font-normal">${escape(formatTime("%B %Y", data.date))}</small></h3>


<div class="flex flex-wrap mb-1"><a class="pill hover:!bg-neutral-200 transition-colors svelte-1d8a62h" href="${"https://github.com/" + escape(data.repo, true) + "/stargazers"}">${validate_component(Star, "Star").$$render($$result, { size: 14, class: "fill-current" }, {}, {})}
    ${stars?.[data.repo] !== void 0 ? `<span class="ml-1">${escape(stars[data.repo].toLocaleString())}</span>` : `<span>​</span>`}</a>
  ${each(data.topics, (tag) => {
    return `<div class="pill svelte-1d8a62h">${escape(tag)}</div>`;
  })}</div>


<div class="space-y-4"><div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12"><div class="col-span-3 md:col-span-2"><p class="text-lg font-light mb-3">${escape(data.lead)}</p>
      ${validate_component(Markdown, "Markdown").$$render($$result, { source: data.content }, {}, {})}</div>
    <div class="col-span-3 md:col-span-1"><a rel="external"${add_attribute("href", images[`../../projects/${data.image}`]?.default, 0)}><img${add_attribute("src", images[`../../projects/${data.image}`]?.default, 0)} alt="${escape(data.title, true) + " preview image"}"${add_classes((data.image_border ? "border" : "").trim())}></a></div></div>

  ${data.subimages ? `<div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">${each(data.subimages, (image2) => {
    return `<div class="col-span-full md:col-span-1"><a rel="external"${add_attribute("href", images[`../../projects/${image2}`]?.default, 0)}><img${add_attribute("src", images[`../../projects/${image2}`]?.default, 0)} alt="${escape(data.title, true) + " subimage"}"></a>
        </div>`;
  })}</div>` : ``}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1qrsmpk{display:flex;align-items:center;--tw-text-opacity:1;color:rgb(163 163 163 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}button.svelte-1qrsmpk:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))\n}button.active.svelte-1qrsmpk{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))\n}",
  map: null
};
function trimName(id) {
  return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectsByDate;
  let projectsByTitle;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const projects = /* @__PURE__ */ Object.assign({ "../../projects/bore.md": __vite_glob_0_0, "../../projects/char-rnn-keras.md": __vite_glob_0_1, "../../projects/classes-wtf.md": __vite_glob_0_2, "../../projects/composing-studio.md": __vite_glob_0_3, "../../projects/crepe.md": __vite_glob_0_4, "../../projects/dispict.md": __vite_glob_0_5, "../../projects/fastseg.md": __vite_glob_0_6, "../../projects/game-of-life.md": __vite_glob_0_7, "../../projects/graphics-workshop.md": __vite_glob_0_8, "../../projects/gravity.md": __vite_glob_0_9, "../../projects/harmony.md": __vite_glob_0_10, "../../projects/inline-sql.md": __vite_glob_0_11, "../../projects/julia-fractal.md": __vite_glob_0_12, "../../projects/langevin-music.md": __vite_glob_0_13, "../../projects/library.md": __vite_glob_0_14, "../../projects/percival.md": __vite_glob_0_15, "../../projects/redis-rope.md": __vite_glob_0_16, "../../projects/rpt.md": __vite_glob_0_17, "../../projects/rushlight.md": __vite_glob_0_18, "../../projects/rustpad.md": __vite_glob_0_19, "../../projects/setwithfriends.md": __vite_glob_0_20, "../../projects/sketching.md": __vite_glob_0_21, "../../projects/sshx.md": __vite_glob_0_22, "../../projects/triangulate.md": __vite_glob_0_23, "../../projects/ukanren-rs.md": __vite_glob_0_24, "../../projects/vae-cnn-mnist.md": __vite_glob_0_25, "../../projects/wkspace.md": __vite_glob_0_26 });
  const images = /* @__PURE__ */ Object.assign({ "../../projects/bore.png": __vite_glob_1_0, "../../projects/char-rnn-keras.png": __vite_glob_1_1, "../../projects/classes-wtf.png": __vite_glob_1_2, "../../projects/composing-studio.png": __vite_glob_1_3, "../../projects/crepe.png": __vite_glob_1_4, "../../projects/dispict.jpg": __vite_glob_1_5, "../../projects/fastseg.jpg": __vite_glob_1_6, "../../projects/game-of-life.png": __vite_glob_1_7, "../../projects/graphics-workshop.png": __vite_glob_1_8, "../../projects/gravity.png": __vite_glob_1_9, "../../projects/harmony.png": __vite_glob_1_10, "../../projects/inline-sql.png": __vite_glob_1_11, "../../projects/julia-1.jpg": __vite_glob_1_12, "../../projects/julia-2.jpg": __vite_glob_1_13, "../../projects/julia-3.jpg": __vite_glob_1_14, "../../projects/julia-4.jpg": __vite_glob_1_15, "../../projects/langevin-music.png": __vite_glob_1_16, "../../projects/library.png": __vite_glob_1_17, "../../projects/percival.png": __vite_glob_1_18, "../../projects/redis-rope.svg": __vite_glob_1_19, "../../projects/rpt.jpg": __vite_glob_1_20, "../../projects/rushlight.jpg": __vite_glob_1_21, "../../projects/rustpad.png": __vite_glob_1_22, "../../projects/setwithfriends.png": __vite_glob_1_23, "../../projects/sketching.png": __vite_glob_1_24, "../../projects/sshx.png": __vite_glob_1_25, "../../projects/triangulate.png": __vite_glob_1_26, "../../projects/ukanren-rs.png": __vite_glob_1_27, "../../projects/vae-cnn-mnist.png": __vite_glob_1_28, "../../projects/wkspace.png": __vite_glob_1_29 });
  let stars = null;
  $$result.css.add(css);
  projectsByDate = Object.keys(projects).sort((a, b) => projects[b].date - projects[a].date);
  projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });
  [...projectsByTitle].sort((a, b) => {
    const starsA = 0;
    const starsB = 0;
    return starsB - starsA;
  });
  $$unsubscribe_page();
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Alex Wang – Projects",
      description: "Open-source software projects in systems, web development, computer graphics, music, programming languages, machine learning, and more."
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Open Source</h2>

  <p class="text-lg mb-4">I view building software in the open as a mode of <em class="font-serif text-[110%] leading-[100%]">creative exploration</em>. It lets me quickly act on inspiration, delve into new topics, and make
    tools that improve people&#39;s lives.
  </p>

  <p class="text-lg mb-4">You&#39;ll see that I particularly like programming languages, distributed
    systems, machine learning, computer graphics, music, and art.
  </p>

  <p class="text-lg">If you find something interesting,
    <a class="link" href="mailto:ekzhang1@gmail.com?subject=Software%20Projects">let me know</a>!
  </p></section>

<div class="bg-gray-900 text-neutral-200 dark"><section class="layout-md py-12"><h2 class="heading2 text-white">Table of Contents</h2>
    <ul class="sm:columns-2">${each(projectsByTitle, (id) => {
    return `<li><a class="link" href="${"#" + escape(trimName(id), true)}">${escape(projects[id].title)}</a>
        </li>`;
  })}</ul></section></div>

<div class="bg-neutral-50 border-b border-neutral-200 py-4"><div class="flex justify-center space-x-6"><button class="${["svelte-1qrsmpk", "active"].join(" ").trim()}">${validate_component(Calendar_days, "CalendarDays").$$render(
    $$result,
    {
      size: 18,
      strokeWidth: 1.8,
      class: "mr-1.5"
    },
    {},
    {}
  )} by Date
    </button>
    <button class="${["svelte-1qrsmpk", ""].join(" ").trim()}">${validate_component(Star, "Star").$$render(
    $$result,
    {
      size: 18,
      strokeWidth: 1.8,
      class: "mr-1.5"
    },
    {},
    {}
  )} by Stars
    </button></div></div>

${each(projectsByDate, (id) => {
    return `<section class="py-10"${add_attribute("id", trimName(id), 0)}><div class="mx-auto max-w-[1152px] px-4 sm:px-6">${validate_component(Project, "Project").$$render($$result, { data: projects[id], images, stars }, {}, {})}</div>
  </section>`;
  })}`;
});
export {
  Page as default
};
