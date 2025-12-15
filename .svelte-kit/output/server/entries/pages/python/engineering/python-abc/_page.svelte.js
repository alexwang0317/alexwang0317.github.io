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
      title: "ABC (Abstract Base Classes) - Alex Wang",
      description:
        "Enforce method implementation at instantiation time with Python's ABC",
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">ABC (Abstract Base Classes)</h1>

  <div class="text-sm text-neutral-500 mb-8">January 3, 2025 • 4 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Prevent runtime errors by enforcing method implementation at instantiation
    time with Python&#39;s Abstract Base Classes. Learn how to build safer class
    hierarchies that catch missing methods before they reach production.
  </div>

  <div class="prose prose-neutral max-w-none"><p>Imagine you are designing a set of class hierarchies where you have a
      parent class with an &quot;abstract&quot; method that needs to be implemented by
      subclasses to work.
    </p>

    <p>Generally, when you do this, you will use a <code>NotImplementedError</code> in the methods. However there are two major problems:
    </p>
    <ul><li>Declaring the class succeeds even when certain subclass required methods
        are not implemented.
      </li>
      <li>Calling that not-yet implemented method of your subclass fails because
        it wasn&#39;t caught at instantiation-time.
      </li></ul>

    <p>The most common example is something like this:</p>

    <pre><code class="language-python">import abc

class StorageService:
    @abc.abstractmethod
    def save(self, key, value):
        raise NotImplementedError(&quot;Subclasses must implement &#39;save&#39;&quot;)
    
    @abc.abstractmethod
    def load(self, key):
        raise NotImplementedError(&quot;Subclasses must implement &#39;load&#39;&quot;)

class InMemoryStorage(StorageService):
    def save(self, key, value):
        print(f&quot;[InMemory] Saving ${escape("{")}key${escape(
    "}"
  )} -&gt; ${escape("{")}value${escape("}")}&quot;)
        # stores it somewhere in memory (fake impl for demo)
        self._data = ${escape("{")}key: value${escape("}")}

# Instantiation succeeds
store = InMemoryStorage()
store.save(&quot;user:1&quot;, ${escape(
    "{"
  )}\\&quot;name\\&quot;: \\&quot;Alex\\&quot;${escape("}")})

# But calling the missing method fails only at runtime
print(store.load(&quot;user:1&quot;))  # NotImplementedError</code></pre>

    <p>In the above example, you can still create <code>InMemoryStorage</code>
      even though
      <code>load()</code> isn&#39;t defined. Only when another engineer (or your API
      call) tries <code>load()</code> do you hit a
      <code>NotImplementedError</code> — potentially in production—do you realize
      this problem.
    </p>

    <h2>The Solution: ABC with ABCMeta</h2>

    <p>To resolve this, use the built-in <code>abc.ABCMeta</code> metaclass from
      <code>abc</code>
      to define abstract classes. This basically prevents you from instantiating
      a class at creation time with a <code>TypeError</code>, rather than
      failing later.
    </p>

    <pre><code class="language-python">import abc
from abc import ABC, abstractmethod

class StorageService(ABC):  # or metaclass=abc.ABCMeta
    @abstractmethod
    def save(self, key, value):
        &quot;&quot;&quot;Save a value by key&quot;&quot;&quot;
        pass
    
    @abstractmethod
    def load(self, key):
        &quot;&quot;&quot;Load a value by key&quot;&quot;&quot;
        pass

class InMemoryStorage(StorageService):
    def save(self, key, value):
        print(f&quot;[InMemory] Saving ${escape("{")}key${escape(
    "}"
  )} -&gt; ${escape("{")}value${escape("}")}&quot;)
        self._data = ${escape("{")}key: value${escape("}")}
    # Oops: still forgot load()!

# Instantiation FAILS immediately
store = InMemoryStorage()
# TypeError: Can&#39;t instantiate abstract class InMemoryStorage with abstract method load</code></pre>

    <p>Now your instantiations will be safe! The <code>TypeError</code> happens at
      the moment you try to create an instance, not later when you call the missing
      method. This catches errors during development rather than in production.
    </p>

    <h2>Key Benefits</h2>

    <ul><li><strong>Early error detection:</strong> Missing implementations are caught
        at instantiation time, not runtime
      </li>
      <li><strong>Clear contracts:</strong> Abstract methods explicitly define what
        subclasses must implement
      </li>
      <li><strong>Better IDE support:</strong> Most IDEs will warn about missing abstract
        method implementations
      </li>
      <li><strong>Type checker friendly:</strong> Tools like mypy understand and enforce
        abstract base classes
      </li></ul></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export { Page as default };
