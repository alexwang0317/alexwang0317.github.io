import {
  c as create_ssr_component,
  d as each,
  f as add_attribute,
  e as escape,
  v as validate_component,
} from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { f as formatTime } from "../../../chunks/utils.js";
const PythonList = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let { data: data2 = [] } = $$props;
    if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
      $$bindings.data(data2);
    return `<div class="grid gap-y-6">${each(data2, (item) => {
      return `<a${add_attribute(
        "href",
        item.link,
        0
      )} class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"${add_attribute(
        "target",
        item.link.startsWith("/") ? "_self" : "_blank",
        0
      )} rel="noreferrer"><div class="flex flex-col sm:flex-row sm:items-end mb-1.5"><div class="text-lg text-black">${escape(
        item.title
      )}
          ${
            !item.link.startsWith("/")
              ? `<span class="text-neutral-400 text-sm ml-1">↗</span>`
              : ``
          }</div>
        ${
          item.date
            ? `<div class="sm:ml-auto mb-0.5 text-neutral-500">${escape(
                formatTime("%B %-d, %Y", item.date)
              )}
          </div>`
            : ``
        }</div>
      <div class="text-lg leading-snug font-serif italic">${escape(
        item.summary
      )}</div>
    </a>`;
    })}</div>`;
  }
);
var data$1 = {
  posts: [
    {
      title: "TypeVar Contravariance",
      summary:
        "TypeVar contravariance for type-safe class hierarchies and proper subtyping\n",
      link: "/python/engineering/python-typevar-contravariance",
    },
    {
      title: "Lazy Logging",
      summary:
        "Optimize Python logging performance with lazy evaluation techniques\n",
      link: "/python/engineering/python-lazy-logging",
    },
    {
      title: "Interface Stubs",
      summary:
        "Resolve circular imports using Abstract Base Classes for cleaner module dependencies\n",
      link: "/python/engineering/python-circular-imports-abc",
    },
    {
      title: "__slots__",
      summary: "__slots__ for compact and faster object storage\n",
      link: "/python/engineering/python-slots-dunder",
    },
    {
      title: "TypedDict",
      summary: "TypedDict for type-safe dictionaries with optional keys\n",
      link: "/python/engineering/python-typeddict",
    },
    {
      title: "__bool__",
      summary: "__bool__ dunder method for truthiness evaluation\n",
      link: "/python/engineering/python-bool-dunder",
    },
    {
      title: "TypeGuard",
      summary: "TypeGuard for type narrowing and better type safety\n",
      link: "/python/engineering/python-typeguard",
    },
    {
      title: "__all__",
      summary: "Control module exports explicitly with Python's __all__\n",
      link: "/python/engineering/python-all-dunder",
    },
    {
      title: "Enum Magic",
      summary: "Enum, StrEnum, IntEnum, and Flags for type-safe constants\n",
      link: "/python/engineering/python-enum-magic",
    },
    {
      title: "ABC (Abstract Base Classes)",
      summary:
        "Enforce method implementation at instantiation time with Python's ABC\n",
      link: "/python/engineering/python-abc",
    },
    {
      title: "__post_init__",
      summary:
        "Validate dataclass fields at instantiation time using __post_init__ for better encapsulation\n",
      link: "/python/engineering/python-post-init",
    },
    {
      title: "TYPE_CHECKING",
      summary:
        "Import types conditionally to avoid circular imports and heavy dependencies\n",
      link: "/python/engineering/python-type-checking",
    },
    {
      title: "NotImplemented",
      summary:
        "Use NotImplemented constant for binary operations and method delegation\n",
      link: "/python/engineering/python-notimplemented",
    },
    {
      title: "Self",
      summary: "Self type hint for better type safety\n",
      link: "/python/engineering/python-self-typing",
    },
    {
      title: "functools.partial",
      summary:
        "functools.partial for elegant function composition and cleaner code\n",
      link: "/python/engineering/python-functools-partial",
    },
    {
      title: "@override Decorator",
      summary:
        "@override decorator prevents inheritance bugs and makes your code more maintainable\n",
      link: "/python/engineering/python-override-decorator",
    },
    {
      title: "Patch Stack",
      summary: "ExitStack-powered teardown for reliable tests\n",
      link: "/python/engineering/python-patch-stack",
    },
  ],
};
var data = {
  posts: [
    {
      title: "Python Profiling",
      date: /* @__PURE__ */ new Date(17570304e5),
      summary:
        "Master Python profiling techniques to optimize performance and avoid premature optimization\n",
      link: "/python/performative/python-profiling",
    },
  ],
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Alex Wang – Python",
      description: "Python engineering and performance optimization",
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Python Dev Notes</h2>
  <div class="border-b border-neutral-300 mb-6"></div>
  ${
    data$1.posts && data$1.posts.length > 0
      ? `${validate_component(PythonList, "PythonList").$$render(
          $$result,
          { data: data$1.posts },
          {},
          {}
        )}`
      : `<p class="text-neutral-600">Coming soon</p>`
  }</section>

<section class="layout-md py-12"><h2 class="heading2">Performative Python</h2>
  <div class="border-b border-neutral-300 mb-6"></div>
  ${
    data.posts && data.posts.length > 0
      ? `${validate_component(PythonList, "PythonList").$$render(
          $$result,
          { data: data.posts },
          {},
          {}
        )}`
      : `<p class="text-neutral-600">Coming soon</p>`
  }</section>`;
});
export { Page as default };
