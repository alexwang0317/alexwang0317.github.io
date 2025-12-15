import {
  c as create_ssr_component,
  v as validate_component,
} from "../../chunks/index.js";
import { S as Seo } from "../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".g.svelte-1n9hxmc{--tw-text-opacity:1;color:rgb(163 163 163 / var(--tw-text-opacity))\n}@media(max-width: 420px){#eric-is.svelte-1n9hxmc{margin-top:-2.5rem\n    }}",
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Alex Wang",
      description: "Student, engineer, and researcher. ",
    },
    {},
    {}
  )}

<p class="layout-md text-black text-xl leading-tight font-light mb-16 svelte-1n9hxmc" id="eric-is"><span class="g svelte-1n9hxmc">is a</span> student<span class="g svelte-1n9hxmc">,</span><br>
  engineer<span class="g svelte-1n9hxmc">, and</span><br>
  researcher<span class="g svelte-1n9hxmc">.</span></p>

<div class="layout-md text-lg space-y-8"><div class="space-y-5"><p>I&#39;m currently a undergraduate at Stanford studying Math and CS (systems +
      AI), but spend most of my free time on art history, philosophy, and random
      literature.
    </p>
    <p>I&#39;m interested in AI, distributed computing, and autonomous systems. I
      hope to build better software and systems, and always try to understand
      the <em>why</em>
      behind things.
    </p>
    <p>Right now, I&#39;m working on multi-agent RL for drone tactics and <a class="link" href="https://docs.google.com/presentation/d/1wkIOn2mpStnb5rJKQ5vth29V6C3bCFghzAJfED4W_fU/edit?usp=sharing">BoundBench</a>, advised by Chris Potts and Zhengxuan Wu.
    </p></div>

  <div class="leading-snug space-y-4"><p>Here are some projects I&#39;ve worked on in the past:</p>

    <ol class="list-decimal pl-6 space-y-1"><li><a class="link" href="https://drive.google.com/file/d/1utSmntqLGzfB4NOa7wnyRgerC7xNOC5n/view?usp=sharing">PatternZero: Leveraging RL for Mathematical Pattern Recognition</a></li>
      <li><a class="link" href="https://docs.google.com/presentation/d/1fWx16Rxse3uIA6i-dEPrnzZLe0VM0q3ralMCkbrRMbQ/edit?usp=sharing">Quantum-Inspired Diffusion (QUID) for Polyphonic Music</a></li>
      <li><a class="link" href="https://x.com/alexwan10574446/status/1854261579258200550">Fencing a Drone</a></li>
      <li><a class="link" href="https://medium.com/stanford-cs224w/graph-based-reasoning-framework-385e850ef7f4">GNNs for Reasoning</a></li>
      <li><a class="link" href="https://github.com/alexwang0317/TaylorSwiftGeneticAlgorithms/blob/main/Taylor_Swift_Paradox%20(12).pdf">Taylor Swift &amp; Genetic Algorithms</a></li>
      <li><a class="link" href="https://drive.google.com/file/d/1PqKvKNTgwOwVSjqYGeRECQLEIRoCMu3-/view?usp=sharing">Chemical Sculptures</a></li>
      <li><a class="link" href="https://drive.google.com/file/d/1ySvLhD_-F-yIzr4IbxILDwCjSymwu-lH/view?usp=sharing">Building Drones that Respond to Voice Commands</a></li>
      <li><a class="link" href="https://drive.google.com/file/d/1s5V4dYky-vsPLQHjqE2ueYpN3xnhgC5d/view?usp=sharing">Improving Multi-Agentic LLM Creativity</a></li>
      <li><a class="link" href="https://drive.google.com/file/d/1YN2QKDYRtH4l5QQVBpHWo_RkHZWZ0T-q/view?usp=sharing">Low-Cost Tuberculosis Detection with CRISPR-Cas12a</a></li></ol></div>

  <div class="space-y-5"><p>Previously, I worked at <a class="link" href="https://www.meta.com/about/">Meta</a>, <a class="link" href="https://stanfordasl.github.io/">Stanford ASL</a>,
      <a class="link" href="https://biostate.ai/">Biostate AI</a>,
      <a class="link" href="https://drorlab.stanford.edu/">Dror Lab</a>, and
      <a class="link" href="https://www.afrl.af.mil/">Air Force Research Laboratory</a>. In my freetime, I write about agency, Python, and AI research. I also
      sing tenor with the
      <a class="link" href="https://stanfordmendicants.com/">Stanford Mendicants</a> and play guitar.
    </p></div></div>

<div class="layout-md mt-16 mb-8"><div class="text-sm text-neutral-500 text-center border-t pt-8">This site is based on <a class="link" href="https://github.com/ekzhang/ekzhang.github.io" target="_blank">Eric Zhang&#39;s personal website</a>. Thanks Eric!
  </div>
</div>`;
});
export { Page as default };
