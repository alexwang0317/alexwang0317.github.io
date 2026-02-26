import { c as create_ssr_component, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { f as formatTime } from "../../../chunks/utils.js";
const PythonList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `<div class="grid gap-y-6">${each(data2, (item) => {
    return `<a${add_attribute("href", item.link, 0)} class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"${add_attribute("target", item.link.startsWith("/") ? "_self" : "_blank", 0)} rel="noreferrer"><div class="flex flex-col sm:flex-row sm:items-end mb-1.5"><div class="text-lg text-black">${escape(item.title)}
          ${!item.link.startsWith("/") ? `<span class="text-neutral-400 text-sm ml-1">↗</span>` : ``}</div>
        ${item.date ? `<div class="sm:ml-auto mb-0.5 text-neutral-500">${escape(formatTime("%B %-d, %Y", item.date))}
          </div>` : ``}</div>
      <div class="text-lg leading-snug font-serif italic">${escape(item.summary)}</div>
    </a>`;
  })}</div>`;
});
var data = { posts: [{
  title: "RL with Jax",
  date: /* @__PURE__ */ new Date(1772064e6),
  summary: "Resources and advice for reinforcement learning written in Jax, including policy gradient architectures and Jax.lax.scan speedups.\n",
  link: "/research/rl-with-jax"
}] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Alex Wang – Research",
      description: "Research and other projects"
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Research</h2>
  <div class="border-b border-neutral-300 mb-6"></div>
  ${validate_component(PythonList, "PythonList").$$render($$result, { data: data.posts }, {}, {})}</section>

<section class="layout-md py-12"><h2 class="heading2">Blog</h2>
  <div class="border-b border-neutral-300 mb-6"></div>
  <p class="text-neutral-600">Coming soon</p></section>`;
});
export {
  Page as default
};
