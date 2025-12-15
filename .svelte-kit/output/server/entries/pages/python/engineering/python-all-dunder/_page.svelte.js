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
      title: "__all__ - Alex Wang",
      description: "Control module exports explicitly with Python's __all__"
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">__all__</h1>

  <div class="text-sm text-neutral-500 mb-8">January 5, 2025 • 4 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Explicitly control what gets exported from your Python modules with __all__.
    Learn how to create cleaner public APIs and protect against unintended
    imports.
  </div>

  <div class="prose prose-neutral max-w-none"><p>Imagine you&#39;re building an API where you have code for both private and
      public consumption. For example, you have a public function that has
      private helper functions.
    </p>

    <pre><code class="language-python">def public_function(...) -&gt; ...:
    ...
    private_function(...)
    ...

def private_function(...) -&gt; ...:
    ...</code></pre>

    <p>In general, the pythonic way of resolving this is to preface with the
      protected prefix <code>_</code> to indicate internal consumption.
    </p>

    <pre><code class="language-python">def _private_function(...) -&gt; ...:
    ...</code></pre>

    <p>Clear signaling of what functions are for/not for public consumption is
      helpful for maintaining and calling public APIs. However, on the flip
      side, everything without <code>_</code> is assumed to be public
      implicitly. This could allow the import of non-public methods when using
      <code>from module import *</code>. This is error prone.
    </p>

    <h2>The Solution: __all__</h2>

    <p>Another way to achieve this same effect is to explicitly signal with the
      <code>__all__</code> module attribute (although it looks like a dunder method,
      it isn&#39;t!).
    </p>

    <pre><code class="language-python">def public_func():
    pass

def _private_func_mislabeled():
    pass

def _another_func1():
    pass

def another_func():
    pass

__all__ = [&#39;public_func&#39;, &#39;_private_func_mislabeled&#39;]  # explicit control

# from mymodule import * will import: public_func, _private_func_mislabeled
# another_func is excluded even though it&#39;s &quot;public&quot; by naming
# _another_func1 is also excluded, as it should be.</code></pre>

    <p>This limits the blast radius of any changes to non-public functions, as
      they won&#39;t be imported via <code>import *</code>. For example, if you
      wanted
      <code>_another_func1</code> to be async, you could change it without worrying
      about breaking external code that might have accidentally imported it.
    </p>

    <h2>Key Benefits</h2>

    <ul><li><strong>Explicit API control:</strong> You decide exactly what&#39;s part of
        your public API
      </li>
      <li><strong>Protection from accidental exports:</strong> Functions without underscore
        prefixes won&#39;t be accidentally exported
      </li>
      <li><strong>Clear documentation:</strong> <code>__all__</code> serves as a single
        source of truth for your module&#39;s public interface
      </li>
      <li><strong>Safer refactoring:</strong> Internal functions can be changed without
        worrying about breaking external code
      </li>
      <li><strong>IDE support:</strong> Many IDEs use <code>__all__</code> to provide
        better autocomplete suggestions
      </li></ul></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export {
  Page as default
};
