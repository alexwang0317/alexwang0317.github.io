import {
  c as create_ssr_component,
  e as escape,
  f as add_attribute,
  v as validate_component,
} from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
const Workplace = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let { title } = $$props;
    let { company } = $$props;
    let { url } = $$props;
    let { dates } = $$props;
    let { location } = $$props;
    let { defaultHidden = false } = $$props;
    let hidden = defaultHidden;
    if ($$props.title === void 0 && $$bindings.title && title !== void 0)
      $$bindings.title(title);
    if ($$props.company === void 0 && $$bindings.company && company !== void 0)
      $$bindings.company(company);
    if ($$props.url === void 0 && $$bindings.url && url !== void 0)
      $$bindings.url(url);
    if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
      $$bindings.dates(dates);
    if (
      $$props.location === void 0 &&
      $$bindings.location &&
      location !== void 0
    )
      $$bindings.location(location);
    if (
      $$props.defaultHidden === void 0 &&
      $$bindings.defaultHidden &&
      defaultHidden !== void 0
    )
      $$bindings.defaultHidden(defaultHidden);
    return `<div class="${["mb-8", hidden ? "cursor-pointer" : ""]
      .join(" ")
      .trim()}"><h3 class="text-black text-lg leading-tight mb-1">${escape(
      title
    )} at <a class="link"${add_attribute("href", url, 0)}>${escape(
      company
    )}</a></h3>
  <p class="font-light mb-2"><span class="whitespace-nowrap">${escape(
    dates
  )}</span>
    <span class="px-0.5 text-neutral-500">•</span>
    <span class="whitespace-nowrap">${escape(location)}</span></p>
  ${
    !hidden
      ? `<ul class="list-disc pl-7 marker:text-neutral-400">${
          slots.default ? slots.default({}) : ``
        }</ul>`
      : ``
  }</div>`;
  }
);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'ul.svelte-pyfzm9.svelte-pyfzm9{list-style-type:disc;padding-left:1.75rem\n}ul.svelte-pyfzm9 .svelte-pyfzm9::marker{color:rgb(163 163 163 )\n}ul.svelte-pyfzm9.svelte-pyfzm9::marker{color:rgb(163 163 163 )\n}.byline.svelte-pyfzm9.svelte-pyfzm9{font-family:Newsreader, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;font-style:italic\n}',
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Alex Wang – Resume",
      description:
        "Software engineer, researcher, and writer. Building meaningful systems and interfaces for people.",
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Education</h2>

  <div class="mb-4"><div class="flex justify-between items-end"><h3 class="text-black text-lg">Stanford University</h3>
      <div class="text-neutral-500 mb-0.5">Expected June 2027</div></div>
    <p class="byline svelte-pyfzm9">B.S. in CS + Mathematics</p></div>

  <h4 class="font-medium mt-4 mb-1">Graduate Technical Coursework:</h4>
  <ul class="mb-4 svelte-pyfzm9"><li class="svelte-pyfzm9">Programming Languages (CS 242)</li>
    <li class="svelte-pyfzm9">Deep Learning for NLP (CS 224n)</li>
    <li class="svelte-pyfzm9">Machine Learning (CS 229)</li>
    <li class="svelte-pyfzm9">Reinforcement Learning (CS 234)</li>
    <li class="svelte-pyfzm9">ML with Graphs (CS 224w)</li>
    <li class="svelte-pyfzm9">Fundamentals of Blockchain Infrastructure (EE 374)</li>
    <li class="svelte-pyfzm9">Parallel Computing with CUDA/OpenMP/MPI (CME 213)</li></ul>

  <h4 class="font-medium mt-4 mb-1">Undergraduate Technical Coursework:</h4>
  <ul class="mb-4 svelte-pyfzm9"><li class="svelte-pyfzm9">Parallel Computing (CS 149)</li>
    <li class="svelte-pyfzm9">Groups and Rings (MATH 120)</li>
    <li class="svelte-pyfzm9">Real Analysis (MATH 171)</li>
    <li class="svelte-pyfzm9">Linear Algebra and Matrix Theory (MATH 113)</li>
    <li class="svelte-pyfzm9">Operating Systems (CS 111)</li>
    <li class="svelte-pyfzm9">Algorithms (CS 161)</li></ul></section>

<section class="layout-md py-6"><h2 class="heading2">Work Experience</h2>

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Software Engineering Intern",
      company: "Stealth",
      url: "#",
      dates: "Oct 2025 - Present",
      location: "Mountain View, CA",
    },
    {},
    {
      default: () => {
        return `<li>Working on stealth projects.</li>`;
      },
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Researcher",
      company: "Stanford NLP",
      url: "https://nlp.stanford.edu/",
      dates: "Sep 2025 - Present",
      location: "Stanford, CA",
    },
    {},
    {
      default: () => {
        return `<li>Advised by Chris Potts &amp; Zhengxuan Wu. Developed <a class="link" href="https://docs.google.com/presentation/d/1wkIOn2mpStnb5rJKQ5vth29V6C3bCFghzAJfED4W_fU/edit?usp=sharing"><strong>BoundBench</strong></a> and formalized the PRBO objective to measure &amp; lower-bound steering techniques
      LLM behavior; combined concept-incorporation + distributional-shift metrics
      with IWAE-style, logit-based estimators for fast probability estimates without
      LLM judges.
    </li>
    <li>Designed a benchmarking plan across common steering methods (Rank-1 ReFT,
      activation patching, steering vectors, DiffMean, probes, SAEs, LoRA/FT),
      with criteria that elicit target behavior while preserving base-model
      propensities and linking scores to downstream tasks.
    </li>
    <li>Reference: <a class="link" href="https://docs.google.com/presentation/d/1wkIOn2mpStnb5rJKQ5vth29V6C3bCFghzAJfED4W_fU/edit?usp=sharing">BoundBench Presentation</a></li>`;
      },
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Software Engineering Intern",
      company: "Meta",
      url: "https://www.meta.com/about/",
      dates: "June 2025 - Sep. 2025",
      location: "Menlo Park, CA",
    },
    {},
    {
      default: () => {
        return `<li><strong>Disaster Recovery Team</strong>. Leveraged Python and statistical
      analysis in a large-scale Linux environment to build an
      <strong>automated reporting system</strong>
      that quantitatively analyzed disaster recovery test outcomes using time-series
      analysis and pattern recognition techniques,
      <strong>saving dozens of weekly engineering hours</strong> through data-driven
      optimization.
    </li>
    <li>Architected a systematic <strong>data analysis pipeline</strong> to evaluate
      operational risk using statistical modeling approaches, implementing modules
      for time-series analysis of execution latency, error rate tracking with machine
      learning classification, and quantitative assessment of system failure events
      to inform data-driven engineering priorities.
    </li>
    <li>Deployed a mission-critical analytics engine into production, engineering
      a full <strong>CI/CD pipeline</strong> with automated model validation and
      scheduled job execution to ensure reliable, periodic delivery of quantitative
      risk insights to downstream systems—demonstrating experience with systematic,
      data-driven approaches to complex problem-solving.
    </li>`;
      },
    }
  )}

  

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "AI/ML Engineer Intern",
      company: "Biostate AI",
      url: "https://biostate.ai/",
      dates: "Nov. 2024 - Mar. 2025",
      location: "Palo Alto, CA",
    },
    {},
    {
      default: () => {
        return `<li>Developed and implemented an <strong>end-to-end ML pipeline</strong>
      utilizing bulk RNA-seq expression data from proprietary and public datasets
      to train a <strong>100M+ parameter transformer model</strong>, achieving
      state-of-the-art performance in autoregressive generation of &quot;future&quot;
      RNAseqs with biologically viable expression patterns.
    </li>
    <li>Established comprehensive internal benchmarking protocols and implemented
      robust data tagging systems to prevent contamination during <strong>large model pretraining</strong>, while specializing and curating datasets for performance testing.
    </li>
    <li>Built and deployed an <strong>automated bioinformatics platform</strong>
      that integrated omics data analysis pipelines with fine-tuned LLMs with DPO,
      optimized for generating scientific abstracts and publication-quality figures,
      streamlining research workflows while maintaining
      <strong>95% expert-rated accuracy</strong>.
    </li>`;
      },
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Research Assistant",
      company: "Stanford Autonomous Systems Laboratory (ASL)",
      url: "https://stanfordasl.github.io/",
      dates: "Aug. 2024 - Mar. 2025",
      location: "Stanford, CA",
    },
    {},
    {
      default: () => {
        return `<li>Student researcher working on <strong>autonomous systems</strong> for trajectory
      optimization and applying on-board VLMs/LLMs/CV for anomaly detection/reaction
      under Professor Marco Pavone (Director of Nvidia&#39;s Autonomous Systems Division).
    </li>
    <li>Engineered a unified software application for <strong>Gazebo/Robot Operating System 2</strong>
      simulation integration with PX4, utilizing
      <strong>Nvidia Orin Jetson Nano</strong>
      and <strong>motion-capture Pub-Sub model</strong> for real-time autonomous
      system testing.
    </li>
    <li>Developed and implemented <strong>trajectory optimization</strong> and
      <strong>obstacle avoidance algorithms for kinodynamic motion planning</strong>
      in an indoor environment as part of a 3-person team. Project demo can be found
      <a class="link" href="https://drive.google.com/file/d/1m0dRVO0GV9PgKm-927A8Gy3j7V91pHiY/view?usp=drive_link">here</a>.
    </li>`;
      },
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Data Science Intern",
      company: "Air Force Research Laboratory (AFRL)",
      url: "https://www.afrl.af.mil/",
      dates: "June 2023 - Sep. 2023",
      location: "Dayton, Ohio",
    },
    {},
    {
      default: () => {
        return `<li>Designed and implemented a novel <strong>group-theoretic MCMC algorithm</strong> that significantly improved sampling efficiency for systems with discrete
      symmetries, demonstrated through application to dielectric polymers.
    </li>
    <li>Created clustering algorithms that achieved up to <strong>50% faster convergence</strong> compared to standard and umbrella sampling methods by leveraging symmetry
      properties in potential energy landscapes.
    </li>
    <li>Leveraged <strong>UMAP/t-SNE</strong> for feature extraction of MCMC data
      and built out <strong>PyTorch Autoencoder</strong> to detect polymer
      characteristic anomalies depending on reconstruction error, boosted
      detection accuracy by 15%. Read more
      <a class="link" href="https://drive.google.com/file/d/1AZjvm8SI971qRs-mBoepW8WOB5WXQsqy/view?usp=sharing">here</a>.
    </li>`;
      },
    }
  )}
</section>`;
});
export { Page as default };
