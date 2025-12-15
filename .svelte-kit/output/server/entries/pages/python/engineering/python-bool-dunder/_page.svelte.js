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
      title: "__bool__ - Alex Wang",
      description:
        "Understanding Python's __bool__ dunder method for truthiness evaluation",
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">__bool__</h1>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Understanding Python&#39;s __bool__ dunder method for truthiness evaluation in
    custom classes. Learn how to make your objects work naturally with if
    statements and boolean operations.
  </div>

  <div class="prose prose-neutral max-w-none"><p>Let&#39;s say for example you are building a cache class and you want to
      operate on this cache class. However, you want to fetch some user from the
      cache, only if it&#39;s there, but you&#39;re having problems with this.
    </p>

    <pre><code class="language-python">class SimpleCache:
    def __init__(self):
        self._data = ${escape("{}")}
    def set(self, key, value):
        self._data[key] = value
    def get(self, key, default=None):
        return self._data.get(key, default)
…

def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print(&quot;Cache empty, querying DB...&quot;)
        data = ${escape(
          "{"
        )}\\&quot;id\\&quot;: user_id, \\&quot;name\\&quot;: \\&quot;Alex\\&quot;&#39;}&#39;}
        cache.set(user_id, data)
    else:
        print(&quot;Using cache&quot;)
    return cache.get(user_id)</code></pre>

    <p>One core component of idiomatic python is evaluating truthfulness of
      objects in a Boolean way when using things like <code>if</code>,
      <code>while</code>, and <code>not</code>. For lots of existing types we
      see existing false groups:
    </p>

    <ul><li>Constants such as <code>None</code> and <code>False</code></li>
      <li>Zero of any type</li>
      <li>Empty Sequence/collections</li></ul>

    <p>As well as existing True objects like:</p>

    <ul><li>Non-zero numbers: <code>1</code>, <code>-2</code>, <code>0.5</code>,
        <code>1+0j</code></li>
      <li>Non-empty strings: <code>&quot;0&quot;</code>, <code>&quot;False&quot;</code>,
        <code>&quot; &quot;</code>, <code>&quot;hello&quot;</code></li>
      <li>Non-empty collections: <code>[0]</code>, <code>(None,)</code>,
        <code>${escape("{")}0${escape("}")}</code>, <code>${escape(
    "{"
  )}\\&quot;k\\&quot;: 1${escape("}")}</code>,
        <code>${escape("{")}1${escape("}")}</code>, <code>range(1)</code></li>
      <li>Non-empty bytes-like: <code>b&quot;\\x00&quot;</code>,
        <code>bytearray(b&quot;\\x00&quot;)</code>, <code>memoryview(b&quot;x&quot;)</code></li>
      <li>Objects &amp; callables</li></ul>

    <p>For our custom object that we create, Python uses <code>__bool__</code>
      (or <code>__len__</code> if <code>__bool__</code> doesn&#39;t exist) to determine
      object truthfulness.
    </p>

    <p><code>__bool__</code> is a dunder (double underscore) which basically
      means it&#39;s a special function used to define your own python operations.
      Other examples include the widely used <code>__init__</code>,
      <code>__len__</code>, and <code>__str__</code> or other operators.
    </p>

    <p>To use it, we want to return <code>True</code> or <code>False</code> based
      on if the instance of that class is should be empty or not a valid instance
      such as in the example that a cache has no data then:
    </p>

    <pre><code class="language-python">class SimpleCache:
    def __init__(self):
        self._data = ${escape("{}")}

    def set(self, key, value):
        self._data[key] = value

    def get(self, key, default=None):
        return self._data.get(key, default)

    def __bool__(self):
        return len(self._data) &gt; 0

# Now this function works perfectly!
def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print(&quot;Cache empty, querying DB...&quot;)
        data = ${escape(
          "{"
        )}\\&quot;id\\&quot;: user_id, \\&quot;name\\&quot;: \\&quot;Alex\\&quot;&#39;}&#39;}
        cache.set(user_id, data)
    else:
        print(&quot;Using cache&quot;)

    return cache.get(user_id)</code></pre>

    <h2>Advantages of This Approach</h2>

    <ul><li><strong>Readability:</strong> Conditions like <code>if not cache:</code>
        are natural and concise when emptiness means &quot;no useful state&quot;.
      </li>
      <li><strong>Simplified conditionals:</strong> You avoid sprinkling
        <code>len(cache._data) == 0</code>
        or <code>not cache._data</code> throughout the codebase.
      </li>
      <li><strong>Encapsulation &amp; consistency:</strong> One canonical definition of
        &quot;empty/invalid&quot; lives in the class, preventing ad-hoc checks that drift over
        time.
      </li></ul></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export { Page as default };
