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
      title: "Lazy Logging - Alex Wang",
      description:
        "Optimize Python logging performance with lazy evaluation techniques to avoid expensive operations",
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">Lazy Logging</h1>

  <div class="text-sm text-neutral-500 mb-8">September 4, 2025 • 5 min read
  </div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Learn how to optimize Python logging performance with lazy evaluation
    techniques. Avoid expensive operations and unnecessary string formatting
    when logs aren&#39;t actually output.
  </div>

  <div class="prose prose-neutral max-w-none"><p>When writing programs, oftentimes during development/production there are
      lots of logging. We may see a common debug log such as the following.
      Expensive function may be some form of large information retrieval or I/O
      process.
    </p>

    <pre><code class="language-python">import logging
...
logging.debug(f&quot;using ${escape("{")}expensive_func()${escape(
    "}"
  )}  currently&quot;)
...</code></pre>

    <p>However, in the case we are using the default log level of INFO in which
      the log message is not actually output, we are wastefully doing two
      things:
    </p>
    <ul><li>Rendering a log message, and for some objects calling their <code>__str__</code>/<code>__repr__</code> is expensive.
      </li>
      <li><code>expensive_func</code> is called when not needed.</li></ul>

    <p>To address problem 1, we can call logging methods with a string literal
      instead of an f-string, with the first argument and the pattern-parameters
      as argument. This prevents f-string rendering and prevents formatting
      until needed.
    </p>

    <pre><code class="language-python">import logging
...
logging.debug(&quot;using %d currently&quot;, expensive_func())
...</code></pre>

    <p>To address problem 2, we can use the <code>isEnabledFor()</code> method which
      takes the level argument and only returns True if the event would be created
      by the Logger for that specific level of call. This prevents the calling of
      the expensive function unless absolutely needed.
    </p>

    <pre><code class="language-python">import logging
...
if logger.isEnabledFor(logging.DEBUG):
    logging.debug(&quot;using %d currently&quot;, expensive_func())
...</code></pre>

    <p>This means that unless the threshold is set above DEBUG level, the call to <code>expensive_func()</code>
      is never made.
    </p>

    <p>If this is consistently called, you can use <code>LoggerAdapter</code>
      instead. This allows you to avoid clutter by removing the consistent need for
      <code>isEnabledFor()</code>.
    </p>

    <pre><code class="language-python">from logging import LoggerAdapter

class LazyLoggerAdapter(LoggerAdapter):
    def lazy_log(self, level, msg_or_func, *args, **kwargs):
        # Only call the function if we&#39;re actually going to log
        if self.isEnabledFor(level):
            if callable(msg_or_func):
                message = msg_or_func(*args, **kwargs)  # Function called HERE
            else:
                message = msg_or_func
            self.log(level, message)

...

lazy_logger.lazy_log(logging.DEBUG, expensive_operation)  # Function not called!
lazy_logger.lazy_log(logging.INFO, expensive_operation)   # Function IS called!</code></pre>

    <p>Now this will only operate if the DEBUG logging is enabled.</p></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export { Page as default };
