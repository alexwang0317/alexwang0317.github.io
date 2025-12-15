import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/index.js";
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
      title: "@override Decorator - Alex Wang",
      description: "@override decorator prevents inheritance bugs and makes your code more maintainable"
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h2 class="heading2">@override Decorator</h2>

  <div class="text-sm text-neutral-500 mb-8">July 8, 2025 • 8 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Python&#39;s @override decorator is a simple yet powerful tool to catch
    inheritance bugs before they cause problems in production. Let&#39;s explore how
    this feature works and why you should start using it today.
  </div>

  <div class="prose prose-neutral max-w-none"><p>You&#39;re refactoring a logging system to add file-specific functionality.
      You have a Logger base class and a FileLogger subclass. You need to
      override the <code>log()</code> method to handle file-specific logging
      logic. However, in your haste, you make a typo, naming the method
      <code>log_to_file()</code>
      instead of <code>log()</code>.
    </p>

    <p>Without any checks, your code will run, but the base class&#39;s <code>log()</code> method will be called, not your intended override. This can lead to subtle,
      hard-to-debug bugs, as the parent method may not have the file-writing logic
      you&#39;ve implemented.
    </p>

    <pre><code class="language-python">class Logger:
    def log(self, message: str) -&gt; None:
        print(f&quot;LOG: ${escape("{")}message${escape("}")}&quot;)

class FileLogger(Logger):
    # OOPS! Typo here: method name doesn&#39;t match base class
    def log_to_file(self, message: str, filename: str) -&gt; None:
        with open(filename, &#39;a&#39;) as f:
            f.write(f&quot;FILE LOG: ${escape("{")}message${escape("}")}\\\\n&quot;)

# The user&#39;s code expects FileLogger.log to be called, but it won&#39;t be!
logger = FileLogger()
logger.log(&quot;System started.&quot;)
# This will print &quot;LOG: System started.&quot;
# NOT write to a file as intended!</code></pre>

    <p>The <code>@override</code> decorator from the <code>typing</code> module is
      a simple yet powerful tool for preventing this exact problem. It explicitly
      marks a method as an intended override of a parent class method.
    </p>

    <p>If you use <code>@override</code> and the method doesn&#39;t actually exist in
      any of the parent classes, type checkers will raise an error. This turns a
      silent, insidious bug into an error that you can fix right away. By flagging
      any misspellings or non-existent overrides, it encourages safer object-oriented
      programming (OOP) practices by reducing accidental bugs.
    </p>

    <p>Here is a fixed version of that same code:</p>

    <pre><code class="language-python">from typing import override


class Logger:
    def log(self, message: str) -&gt; None:
        print(f&quot;LOG: ${escape("{")}message${escape("}")}&quot;)


class FileLogger(Logger):
    @override  # This will catch the typo!
    def log_to_file(self, message: str, filename: str) -&gt; None:  # Error: no matching method in parent
        with open(filename, &#39;a&#39;) as f:
            f.write(f&quot;FILE LOG: ${escape("{")}message${escape("}")}\\\\n&quot;)</code></pre>

    <p>Any popular type checker would help notice this and tell you about the
      error:
    </p>
    <ul><li><strong>mypy</strong> - Most widely used Python type checker</li>
      <li><strong>pyright/Pylance</strong> - Microsoft&#39;s type checker (default in VS
        Code)
      </li>
      <li><strong>Pyre</strong> - Meta&#39;s type checker</li>
      <li><strong>pytype</strong> - Google&#39;s type checker</li></ul>

    <p>The errors would look like this:</p>

    <pre><code class="language-bash"># mypy error: Method &quot;log_to_file&quot; marked with @override does not override anything [misc] 
# pyright/Pylance Method &quot;log_to_file&quot; overrides nothing 
# Pyre Invalid override [40]: \`log_to_file\` is not defined in base classes of \`FileLogger\`</code></pre>

    <p>Any modern Python development setup with type checking enabled will catch
      these <code>@override</code> mistakes before your code ever runs, turning silent
      bugs into immediate, fixable errors.
    </p></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export {
  Page as default
};
