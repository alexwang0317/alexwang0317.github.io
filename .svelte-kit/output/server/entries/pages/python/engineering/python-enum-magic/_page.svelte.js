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
      title: "Enum Magic - Alex Wang",
      description: "Mastering Python's Enum, StrEnum, IntEnum, and Flags for type-safe constants"
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">Enum Magic</h1>

  <div class="text-sm text-neutral-500 mb-8">September 3, 2025 • 8 min read
  </div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Mastering Python&#39;s Enum, StrEnum, IntEnum, and Flags for type-safe constants
    and better code organization.
  </div>

  <div class="prose prose-neutral max-w-none"><p>Imagine you are writing a function that takes in levels of log levels and
      wants to do something such as printing or notifying specific individuals
      based on the level. For the sake of simplicity, the levels are info,
      warning, error:
    </p>

    <pre><code class="language-python">def log(level: str, message: str) -&gt; None:
    ...</code></pre>

    <p>If you use <code>str</code> as arguments, you are susceptible to
      misspellings and potential unreal levels as someone might pass &quot;errror&quot; or
      &quot;critical&quot;. To resolve this, you should use Enum, but preferably use
      <code>StrEnum</code> (Python 3.11+) with something like this:
    </p>

    <pre><code class="language-python">from enum import StrEnum

class LogLevel(StrEnum):
    INFO = &quot;info&quot;
    WARNING = &quot;warning&quot;
    ERROR = &quot;error&quot;</code></pre>

    <p>If, instead, you wanted to use integers to log different levels of
      warnings you could use <code>IntEnum</code>. This is especially useful if
      you wanted to do mathematical operations on these values, such as if you
      wanted to sum the values of total ExitCode&#39;s generated.
    </p>

    <pre><code class="language-python">from enum import IntEnum

class LogLevel(IntEnum):
    INFO = 0
    WARNING = 1
    ERROR = 2
    BIGERROR = 3

def log(level: LogLevel, message: str) -&gt; None:
    ...</code></pre>

    <p>Or even better, you could use <code>auto()</code> for both
      <code>StrEnum</code>
      and <code>IntEnum</code>, this way you can guarantee uniqueness and adding
      new values is easier. For <code>StrEnum</code>, it represents the value as
      a lowercase of the real member name.
    </p>

    <pre><code class="language-python">from enum import StrEnum, auto

class LogLevel(StrEnum):
    INFO = auto()     # &quot;info&quot;
    WARNING = auto()  # &quot;warning&quot;
    ERROR = auto()    # &quot;error&quot;
    SUCCESS = auto()  # &quot;success&quot;</code></pre>

    <p>For <code>IntEnum</code>, it automatically creates order and generates
      uniqueness so no need to hardcode, and also makes adding new items easier.
    </p>

    <pre><code class="language-python">from enum import IntEnum, auto

class LogLevel(IntEnum):
    INFO = auto()     # 1
    WARNING = auto()  # 2
    ERROR = auto()    # 3
    SUCCESS = auto()  # 4</code></pre>

    <p>Finally, you can also use <code>Flags</code> which are assigned bitwise
      combinations of values (1, 2, 4, 8, 16). They are useful when you want to
      represent multiple boolean options at once, and together. To combine these
      use OR (<code>|</code>) and AND (<code>&amp;</code>) operators.
    </p>

    <pre><code class="language-python">from enum import Flag, auto

class Permission(Flag):
    READ = auto()     # 1
    WRITE = auto()    # 2
    EXECUTE = auto()  # 4

# Give read and write perms to the user
user_perms = Permission.READ | Permission.WRITE</code></pre>

    <h2>Useful Decorators</h2>

    <p>A useful decorator would be the <code>@unique</code>, which guarantees
      that you don&#39;t have duplicate values.
    </p>

    <pre><code class="language-python">from enum import Enum, unique

@unique
class Status(Enum):
    OK = 1
    SUCCESS = 1   # ❌ ValueError: duplicate value 1</code></pre>

    <p>Another potentially useful decorator for ENUMs is <code>@verify</code> which
      helps you confirm that your values satisfy a certain set of conditions.
    </p>

    <pre><code class="language-python">from enum import Enum, verify, UNIQUE, CONTINUOUS

@verify(UNIQUE, CONTINUOUS)
class ErrorCode(Enum):
    NOT_FOUND = 1
    TIMEOUT = 2
    UNKNOWN = 3   # ✅ values are unique + continuous (1, 2, 3)</code></pre></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export {
  Page as default
};
