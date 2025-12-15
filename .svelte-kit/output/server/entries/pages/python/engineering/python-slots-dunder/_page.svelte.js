import {
  c as create_ssr_component,
  v as validate_component,
  e as escape,
} from "../../../../../chunks/index.js";
import { S as Seo } from "../../../../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'article.svelte-sqxh6e.svelte-sqxh6e{width:100%;max-width:48rem;margin-left:auto;margin-right:auto}.prose{line-height:1.7}.prose p{margin:1.25rem 0;color:#374151}.prose h2{font-size:1.5rem;font-weight:600;margin:2rem 0 1rem 0;color:#1f2937}.prose ul{margin:1rem 0;padding-left:1.5rem}.prose li{margin:0.5rem 0;color:#374151}pre{background-color:#2d2d2d !important;padding:1.25rem !important;border-radius:0.5rem !important;overflow-x:auto !important;margin:1.5rem 0 !important;max-width:100%;border:1px solid #374151;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1)}pre code{background:none !important;padding:0 !important;font-size:0.875rem !important;line-height:1.6 !important;font-family:"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",\n      monospace;color:#e5e7eb}code:not(pre code){background-color:#f3f4f6;padding:0.125rem 0.375rem;border-radius:0.25rem;font-size:0.875em;color:#1f2937;font-family:"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",\n      monospace;border:1px solid #e5e7eb}.token.keyword{color:#c792ea !important}.token.string{color:#c3e88d !important}.token.function{color:#82aaff !important}.token.class-name{color:#ffcb6b !important}.token.comment{color:#546e7a !important;font-style:italic}.token.decorator{color:#f78c6c !important}.token.number{color:#f78c6c !important}.table-container.svelte-sqxh6e.svelte-sqxh6e{margin:1.5rem 0;overflow-x:auto;display:flex;justify-content:center}.table-container.svelte-sqxh6e table.svelte-sqxh6e{border-collapse:collapse;background-color:white;box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1);border-radius:0.5rem;overflow:hidden;min-width:400px}.table-container.svelte-sqxh6e th.svelte-sqxh6e{background-color:#f3f4f6;padding:0.75rem 1.25rem;text-align:center;font-weight:600;color:#1f2937;border-bottom:1px solid #e5e7eb}.table-container.svelte-sqxh6e td.svelte-sqxh6e{padding:0.75rem 1.25rem;text-align:center;color:#374151;border-bottom:1px solid #f3f4f6}.table-container.svelte-sqxh6e tr:last-child td.svelte-sqxh6e{border-bottom:none}.table-container.svelte-sqxh6e tr:hover td.svelte-sqxh6e{background-color:#f9fafb}@media(max-width: 768px){article.svelte-sqxh6e.svelte-sqxh6e{padding-left:1.5rem;padding-right:1.5rem}.table-container.svelte-sqxh6e table.svelte-sqxh6e{min-width:100%;font-size:0.875rem}.table-container.svelte-sqxh6e th.svelte-sqxh6e,.table-container.svelte-sqxh6e td.svelte-sqxh6e{padding:0.5rem 0.75rem}}',
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "__slots__ - Alex Wang",
      description: "__slots__ for compact and faster object storage",
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-sqxh6e"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">__slots__</h1>

  <div class="text-sm text-neutral-500 mb-8">August 28, 2025 • 5 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Optimize memory usage and improve performance with Python&#39;s __slots__. Learn
    how to replace the default __dict__ with a more efficient storage mechanism
    for class instances.
  </div>

  <div class="prose prose-neutral max-w-none"><p>Dictionaries are the favorite workhouse of the Pythonic style.
      Specifically in the cases of classes, instance attributes are stored in a <code>__dict__</code> dunder, which is flexible, but uses a lot of overhead as each instance has
      its own dictionary. Creating millions of class instances for small objects
      can thus result in memory/performance issues.
    </p>

    <p>Imagine, if you wanted to have a class that stored a datapoint as such:
    </p>

    <pre><code class="language-python">class Point3D:
    def __init__(self, x: float, y: float, z: float) -&gt; None:
        self.x = x
        self.y = y
        self.z = z

point1 = Point3D(1, 2, 3)
point1.__dict__     # This would be ${escape(
    "{"
  )}\\&quot;x\\&quot;: 1, \\&quot;y\\&quot;: 2, \\&quot;z\\&quot;: 3${escape(
    "}"
  )}</code></pre>

    <p>You may think it would be better to accomplish this with the <code>@dataclass</code>
      decorator, but the underlying implementation of a <code>@dataclass</code>
      is still a <code>__dict__</code>.
    </p>

    <p><code>__slots__</code> is a memory-efficient alternative to
      <code>__dict__</code>. When you define
      <code>__slots__</code>, you declare what attributes an instance has,
      resulting in a much more efficient storage mechanism. The underlying
      implementation is a compact C array indexed by slot position.
    </p>

    <pre><code class="language-python">class SlottedPoint3D:
    __slots__ = (&quot;x&quot;, &quot;y&quot;, &quot;z&quot;) 
    
    def __init__(self, x: float, y: float, z: float) -&gt; None:
        self.x = x
        self.y = y
        self.z = z</code></pre>

    <p>Python now allocates a fixed amount of memory with slot descriptor objects
      with pre-defined methods like <code>__get__</code> and
      <code>__set__</code> which index into the array. This direct memory lookup
      is faster than a dictionary lookup. You can even use dataclasses with direct
      slots support (Python 3.10+).
    </p>

    <pre><code class="language-python">from dataclasses import dataclass

@dataclass(slots=True)
class SlottedPoint3D: 
    x: int
    y: int
    z: int</code></pre>

    <p>Here is a quick comparison after generating it. Check out the
      <a href="https://colab.research.google.com/drive/1ShrpitUnbjfoN5_DHuw295Hwmj0QVryA?usp=sharing" class="text-blue-600 hover:underline">link here</a>.
    </p>

    <h2>Memory per object (bytes)</h2>
    <div class="table-container svelte-sqxh6e"><table class="svelte-sqxh6e"><thead><tr><th class="svelte-sqxh6e">Type</th>
            <th class="svelte-sqxh6e">dict</th>
            <th class="svelte-sqxh6e">normal</th>
            <th class="svelte-sqxh6e">slots</th></tr></thead>
        <tbody><tr><td class="svelte-sqxh6e">bytes</td>
            <td class="svelte-sqxh6e">424</td>
            <td class="svelte-sqxh6e">584</td>
            <td class="svelte-sqxh6e">152</td></tr></tbody></table></div>

    <h2>Total creation time (seconds)</h2>
    <div class="table-container svelte-sqxh6e"><table class="svelte-sqxh6e"><thead><tr><th class="svelte-sqxh6e">N</th>
            <th class="svelte-sqxh6e">dict</th>
            <th class="svelte-sqxh6e">normal</th>
            <th class="svelte-sqxh6e">slots</th></tr></thead>
        <tbody><tr><td class="svelte-sqxh6e">10</td>
            <td class="svelte-sqxh6e">0.000027</td>
            <td class="svelte-sqxh6e">0.000011</td>
            <td class="svelte-sqxh6e">0.000009</td></tr>
          <tr><td class="svelte-sqxh6e">100</td>
            <td class="svelte-sqxh6e">0.000044</td>
            <td class="svelte-sqxh6e">0.000052</td>
            <td class="svelte-sqxh6e">0.000041</td></tr>
          <tr><td class="svelte-sqxh6e">1,000</td>
            <td class="svelte-sqxh6e">0.000322</td>
            <td class="svelte-sqxh6e">0.000501</td>
            <td class="svelte-sqxh6e">0.000397</td></tr>
          <tr><td class="svelte-sqxh6e">10,000</td>
            <td class="svelte-sqxh6e">0.003644</td>
            <td class="svelte-sqxh6e">0.004629</td>
            <td class="svelte-sqxh6e">0.004458</td></tr>
          <tr><td class="svelte-sqxh6e">100,000</td>
            <td class="svelte-sqxh6e">0.047655</td>
            <td class="svelte-sqxh6e">0.053937</td>
            <td class="svelte-sqxh6e">0.047593</td></tr>
          <tr><td class="svelte-sqxh6e">1,000,000</td>
            <td class="svelte-sqxh6e">0.520809</td>
            <td class="svelte-sqxh6e">0.531388</td>
            <td class="svelte-sqxh6e">0.399850</td></tr></tbody></table></div>

    <h2>Per-object creation time (nanoseconds)</h2>
    <div class="table-container svelte-sqxh6e"><table class="svelte-sqxh6e"><thead><tr><th class="svelte-sqxh6e">N</th>
            <th class="svelte-sqxh6e">dict</th>
            <th class="svelte-sqxh6e">normal</th>
            <th class="svelte-sqxh6e">slots</th></tr></thead>
        <tbody><tr><td class="svelte-sqxh6e">10</td>
            <td class="svelte-sqxh6e">2672.10</td>
            <td class="svelte-sqxh6e">1126.80</td>
            <td class="svelte-sqxh6e">858.20</td></tr>
          <tr><td class="svelte-sqxh6e">100</td>
            <td class="svelte-sqxh6e">444.87</td>
            <td class="svelte-sqxh6e">520.00</td>
            <td class="svelte-sqxh6e">410.34</td></tr>
          <tr><td class="svelte-sqxh6e">1,000</td>
            <td class="svelte-sqxh6e">321.81</td>
            <td class="svelte-sqxh6e">500.76</td>
            <td class="svelte-sqxh6e">396.53</td></tr>
          <tr><td class="svelte-sqxh6e">10,000</td>
            <td class="svelte-sqxh6e">364.41</td>
            <td class="svelte-sqxh6e">462.94</td>
            <td class="svelte-sqxh6e">445.79</td></tr>
          <tr><td class="svelte-sqxh6e">100,000</td>
            <td class="svelte-sqxh6e">476.55</td>
            <td class="svelte-sqxh6e">539.37</td>
            <td class="svelte-sqxh6e">475.93</td></tr>
          <tr><td class="svelte-sqxh6e">1,000,000</td>
            <td class="svelte-sqxh6e">520.81</td>
            <td class="svelte-sqxh6e">531.39</td>
            <td class="svelte-sqxh6e">399.85</td></tr></tbody></table></div>

    <p>However, there is a tradeoff, here are some differences:</p>
    <ul><li>You cannot add more attributes after predefining slots during
        instantiation.
      </li>
      <li>You cannot dynamically add attributes.</li>
      <li>You need to redeclare <code>__slots__</code> in subclasses.</li>
      <li>You cannot set class attributes for defaults in <code>__slots__</code> (but
        you can add class-level constants).
      </li></ul></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export { Page as default };
