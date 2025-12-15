import {
  c as create_ssr_component,
  v as validate_component,
} from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Alex Wang – Research",
      description: "Research and other projects",
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Blog</h2>
  <div class="border-b border-neutral-300 mb-6"></div>
  <p class="text-neutral-600">Coming soon</p></section>

<section class="layout-md py-12"><h2 class="heading2">Research</h2>
  <div class="border-b border-neutral-300 mb-6"></div>
  <p class="text-neutral-600">Coming soon</p></section>`;
});
export { Page as default };
