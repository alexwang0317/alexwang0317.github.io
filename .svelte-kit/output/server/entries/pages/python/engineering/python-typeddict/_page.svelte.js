import {
  c as create_ssr_component,
  v as validate_component,
  e as escape,
} from "../../../../../chunks/index.js";
import { S as Seo } from "../../../../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'article.svelte-1l0sx6b{width:100%;max-width:48rem;margin-left:auto;margin-right:auto}.prose{line-height:1.7}.prose p{margin:1.25rem 0;color:#374151}.prose h2{font-size:1.5rem;font-weight:600;margin:2rem 0 1rem 0;color:#1f2937}.prose ul{margin:1rem 0;padding-left:1.5rem}.prose li{margin:0.5rem 0;color:#374151}pre{background-color:#2d2d2d !important;padding:1.25rem !important;border-radius:0.5rem !important;overflow-x:auto !important;margin:1.5rem 0 !important;max-width:100%;border:1px solid #374151;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1)}pre code{background:none !important;padding:0 !important;font-size:0.875rem !important;line-height:1.6 !important;font-family:"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",\n      monospace;color:#e5e7eb}code:not(pre code){background-color:#f3f4f6;padding:0.125rem 0.375rem;border-radius:0.25rem;font-size:0.875em;color:#1f2937;font-family:"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",\n      monospace;border:1px solid #e5e7eb}.token.keyword{color:#c792ea !important}.token.string{color:#c3e88d !important}.token.function{color:#82aaff !important}.token.class-name{color:#ffcb6b !important}.token.comment{color:#546e7a !important;font-style:italic}.token.decorator{color:#f78c6c !important}.token.number{color:#f78c6c !important}@media(max-width: 768px){article.svelte-1l0sx6b{padding-left:1.5rem;padding-right:1.5rem}}',
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "TypedDict - Alex Wang",
      description:
        "TypedDict for type-safe dictionaries with optional keys in Python",
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">TypedDict</h1>

  <div class="text-sm text-neutral-500 mb-8">September 6, 2025 • 5 min read
  </div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">TypedDict for type-safe dictionaries with optional keys when working with
    API responses and external data.
  </div>

  <div class="prose prose-neutral max-w-none"><p>When you return a JSON from a REST API call, sometimes, modeling that API
      response is difficult. A normal python dictionary is structured as <code>dict[str, Any]</code> which may be too many degrees of freedom for some people. However, a dataclass
      is only suitable for internal data representations with fixed structures, but
      if you&#39;re using external, raw/untrusted data, you need less explicit structures.
    </p>

    <pre><code class="language-python"># Example function
def process_user(data: dict) -&gt; None:
    # we expect: ${escape(
      "{"
    )}\\&quot;id\\&quot;: int, \\&quot;email\\&quot;: str (optional)${escape(
    "}"
  )} 
    print(f&quot;User id = ${escape("{")}data[&#39;id&#39;]${escape("}")}&quot;)
    if &quot;email&quot; in data:
        print(f&quot;Email = ${escape("{")}data[&#39;email&#39;]${escape(
    "}"
  )}&quot;)</code></pre>

    <p>For this case, instead of a dictionary or dataclass, the <code>TypedDict</code> would allow you to define a dictionary with specific keys and value types
      which allow you to specify both required and optional keys, which allow for
      stronger type checking during development.
    </p>

    <pre><code class="language-python">from typing import TypedDict, NotRequired

class UserDict(TypedDict):
    id: int
    email: NotRequired[str]    # now optional

def process_user(data: UserDict) -&gt; None:
    print(f&quot;User id = ${escape("{")}data[&#39;id&#39;]${escape("}")}&quot;)
    if &quot;email&quot; in data:
        print(f&quot;Email = ${escape("{")}data[&#39;email&#39;]${escape(
    "}"
  )}&quot;)

process_user(${escape("{")}\\&quot;id\\&quot;: 42${escape(
    "}"
  )})  # ✅ ok, email optional
process_user(${escape(
    "{"
  )}\\&quot;id\\&quot;: 42, \\&quot;email\\&quot;: \\&quot;alex@example.com\\&quot;${escape(
    "}"
  )})  # ✅ ok
process_user(${escape("{")}\\&quot;email\\&quot;: \\&quot;oops\\&quot;${escape(
    "}"
  )})  # ❌ type checker error: missing &quot;id&quot;</code></pre>

    <h2>Advantages of TypedDict</h2>

    <ul><li><strong>Flexible Structure:</strong> Better than
        <code>dict[str, Any]</code> but more flexible than dataclasses
      </li>
      <li><strong>API Modeling:</strong> Perfect for modeling JSON responses from REST
        APIs
      </li>
      <li><strong>Optional Keys:</strong> Support for both required and optional
        fields with <code>NotRequired</code></li>
      <li><strong>Static Type Safety:</strong> Get compile-time type checking for dictionary
        access
      </li>
      <li><strong>External Data:</strong> Ideal for working with external, raw, or
        untrusted data sources
      </li></ul></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export { Page as default };
