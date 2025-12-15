import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { f as formatTime } from "../../../chunks/utils.js";
const Arrow_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "7",
        "y1": "17",
        "x2": "17",
        "y2": "7"
      }
    ],
    ["polyline", { "points": "7 7 17 7 17 17" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const WritingList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `<div class="grid gap-y-4">${each(data2, (item) => {
    return `<a${add_attribute("href", item.link, 0)} class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors" target="_blank" rel="noreferrer"><div class="flex flex-col sm:flex-row sm:items-end mb-1.5"><div class="text-lg text-black">${escape(item.title)}
          ${validate_component(Arrow_up_right, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}</div>
        <div class="sm:ml-auto mb-0.5 text-neutral-500">${escape(formatTime("%B %-d, %Y", item.date))}
        </div></div>
      <div class="text-lg leading-snug font-serif italic">${escape(item.summary)}</div>
    </a>`;
  })}</div>`;
});
var data = { essays: [
  {
    title: "Stop Asking, Be Courageous",
    date: /* @__PURE__ */ new Date(17579808e5),
    summary: "Growing into the person you want to be.\n",
    link: "https://open.substack.com/pub/alexwang0317/p/stop-asking-be-courageous?r=2httt3&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false"
  },
  {
    title: "Treatise on Complaining",
    date: /* @__PURE__ */ new Date(17559072e5),
    summary: "How complaining is a sign of unresolved issues and prevents us from seeing progress.\n",
    link: "https://alexwang0317.substack.com/p/treatise-on-complaining?r=2httt3"
  },
  {
    title: "Clarity & Committing",
    date: /* @__PURE__ */ new Date(1755648e6),
    summary: "A guide on decision-making and the importance of clarity and commitment.\n",
    link: "https://alexwang0317.substack.com/p/clarity-and-committing?r=2httt3"
  },
  {
    title: "Fantastic Risks and Where to Find Them",
    date: /* @__PURE__ */ new Date(17540928e5),
    summary: "Exploring risk-taking, agency, and navigating uncertainty in life and career.\n",
    link: "https://alexwang0317.substack.com/p/fantastic-risks-and-where-to-find?r=2httt3"
  },
  {
    title: "Pick Curiosity, Not Acceptance",
    date: /* @__PURE__ */ new Date(17534016e5),
    summary: "The importance of curiosity over acceptance in learning and growth.\n",
    link: "https://alexwang0317.substack.com/p/pick-curiosity-not-acceptance?r=2httt3"
  }
] };
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Alex Wang – Writing",
      description: "Essays on life, software engineering, and AI "
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Essays</h2>
  ${validate_component(WritingList, "WritingList").$$render($$result, { data: data.essays }, {}, {})}</section>`;
});
export {
  Page as default
};
