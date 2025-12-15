import {
  c as create_ssr_component,
  v as validate_component,
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
      title: "TypeGuard - Alex Wang",
      description:
        "Understanding Python's TypeGuard for type narrowing and better type safety",
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">TypeGuard</h1>

  <div class="text-sm text-neutral-500 mb-8">August 27, 2025 • 7 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Understanding Python&#39;s TypeGuard for type narrowing and better type safety
    in data processing pipelines.
  </div>

  <div class="prose prose-neutral max-w-none"><p>Imagine you are writing a data pipeline, one function is for processing a
      list of objects. If the list of objects are <em>all</em> strings or integers
      then you have separate methods for resolving them, else you mark it as invalid
      and discard it. An initial reasonable solution is:
    </p>

    <pre><code class="language-python">def process_str(data: list[str]) -&gt; None:
    ...

def process_int(data: list[int]) -&gt; None:
    ...

# Process data if its either a string or a integer
def process_data(data: list[object]) -&gt; None:
    if all(isinstance(x, int) for x in data):
        process_int(data)
    elif all(isinstance(x, str) for x in data):
        process_str(data)
    else:
        print(&quot;Invalid data, neither str nor int&quot;)</code></pre>

    <p>The problem is, this solution will still cause the typechecker to be
      unhappy as the inputs for both <code>process_int</code> and
      <code>process_str</code>
      will still be typed as <code>list[object]</code>. For mutable generics
      like list, subtypes are invariant, so <code>list[int]</code> is not a
      subtype of <code>list[object]</code>, thus invariance exists to protect
      the container.
    </p>

    <p>Instead use <code>TypeGuard</code>, which is a special typing construct
      which can narrow the type of the object through a function. Recommended to
      narrow the broadest scope of what the object could be, to the narrowest
      scope. In essence, return False if it&#39;s not the correct type so
      <code>TypeGuard</code>s would look like this:
    </p>

    <pre><code class="language-python">from typing import TypeGuard, Iterable

def is_list_of_ints(obj: Iterable[object]) -&gt; TypeGuard[list[int]]:
    if not isinstance(obj, list):
        return False
    return all(isinstance(x, int) for x in obj)

def is_list_of_strs(obj: Iterable[object]) -&gt; TypeGuard[list[str]]:
    if not isinstance(obj, list):
        return False
    return all(isinstance(x, str) for x in obj)</code></pre>

    <p>Now, given these <code>TypeGuards</code> you can rewrite the above function
      as such:
    </p>

    <pre><code class="language-python"># Process data if its either a string or a integer
def process_data(data: Iterable[object]) -&gt; None:
    if is_list_of_ints(data):
        process_int(data)  # Type checker knows data is list[int] here!
    elif is_list_of_strs(data):
        process_str(data)  # Type checker knows data is list[str] here!
    else:
        print(&quot;Invalid data, neither str nor int&quot;)</code></pre>

    <p><code>TypeGuard</code> is also useful in checking for narrowing down typing
      to exceptions and validating against a TypeAlias.
    </p>

    <h2>Advantages of <code>TypeGuard</code></h2>

    <ul><li><strong>Type Safety:</strong> Provides compile-time guarantees that runtime
        checks match type annotations
      </li>
      <li><strong>Better IDE Support:</strong> IDEs can understand the narrowed types
        and provide accurate autocomplete
      </li>
      <li><strong>Cleaner Code:</strong> Separates type checking logic into reusable
        functions
      </li>
      <li><strong>Documentation:</strong> <code>TypeGuard</code> functions clearly
        document what conditions narrow types
      </li></ul></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export { Page as default };
