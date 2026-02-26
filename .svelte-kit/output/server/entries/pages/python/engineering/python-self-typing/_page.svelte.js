import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index.js";
import { S as Seo } from "../../../../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'article.svelte-1l0sx6b{width:100%;max-width:48rem;margin-left:auto;margin-right:auto}.prose{line-height:1.7}.prose p{margin:1.25rem 0;color:#374151}.prose h2{font-size:1.5rem;font-weight:600;margin:2rem 0 1rem 0;color:#1f2937}.prose ul{margin:1rem 0;padding-left:1.5rem}.prose li{margin:0.5rem 0;color:#374151}pre{background-color:#2d2d2d !important;padding:1.25rem !important;border-radius:0.5rem !important;overflow-x:auto !important;margin:1.5rem 0 !important;max-width:100%;border:1px solid #374151;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1)}pre code{background:none !important;padding:0 !important;font-size:0.875rem !important;line-height:1.6 !important;font-family:"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",\n      monospace;color:#e5e7eb}code:not(pre code){background-color:#f3f4f6;padding:0.125rem 0.375rem;border-radius:0.25rem;font-size:0.875em;color:#1f2937;font-family:"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",\n      monospace;border:1px solid #e5e7eb}.token.keyword{color:#c792ea !important}.token.string{color:#c3e88d !important}.token.function{color:#82aaff !important}.token.class-name{color:#ffcb6b !important}.token.comment{color:#546e7a !important;font-style:italic}.token.decorator{color:#f78c6c !important}.token.number{color:#f78c6c !important}@media(max-width: 768px){article.svelte-1l0sx6b{padding-left:1.5rem;padding-right:1.5rem}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Self Typing - Alex Wang",
      description: "Understanding Python's Self type hint for better type safety"
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">Self Typing</h1>

  <div class="text-sm text-neutral-500 mb-8">August 15, 2025 • 6 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Understanding Python&#39;s Self type hint for better type safety and method
    chaining. Learn how to properly annotate methods that return the current
    instance.
  </div>

  <div class="prose prose-neutral max-w-none"><p>Imagine you are writing a class that returns the current object in python
      such as when you want to allow for method-chaining in a sequence of calls,
      or using a setter-like method. For the type annotations here, two common
      ways other devs write this is:
    </p>

    <pre><code class="language-python"># String forward reference
class MyBuilder:
    def __init__(self): self.name = &quot;&quot;
    def set_name(self, name: str) -&gt; &quot;MyBuilder&quot;:
        self.name = name
        return self
# Bare class name
class MyBuilder:
    def __init__(self): self.name = &quot;&quot;
    def set_name(self, name: str) -&gt; MyBuilder:
        self.name = name
        return self</code></pre>

    <p>However, this causes two major problems where:</p>

    <ul><li><strong>Refactoring:</strong> The return type of either the string &#39;MyBuilder&#39;
        or class name MyBuilder will make refactoring difficult.
      </li>
      <li><strong>Subclassing:</strong> If you subclass, the return type is incorrect.
      </li></ul>

    <p>Instead, you can import <code>Self</code> as the type annotation as such:
    </p>

    <pre><code class="language-python">from typing import Self  # Python 3.11+ else &#39;from typing_extensions import Self&#39;
class MyBuilder:
    def __init__(self): self.name = &quot;&quot;
    def set_name(self, name: str) -&gt; Self:
        self.name = name
        return self</code></pre>

    <h2>Advantages of This Approach</h2>

    <ul><li><strong>Refactoring:</strong> No hardcoded class, which means it is resilient
        to class renaming.
      </li>
      <li><strong>Easier Subclassing:</strong> <code>Self</code> is covariant and dynamically
        binds to self at runtime. Chain methods will now return the correct subclass
        type.
      </li>
      <li><strong>Readability:</strong> <code>Self</code> clearly communicates to readers
        that we are using the same type as the instance.
      </li></ul></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export {
  Page as default
};
