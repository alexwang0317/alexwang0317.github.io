<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { onMount } from "svelte";

  let highlightLoaded = false;

  onMount(async () => {
    // Load Prism for syntax highlighting
    if (typeof window !== "undefined" && !(window as any).Prism) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";
      script.onload = () => {
        const pythonScript = document.createElement("script");
        pythonScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js";
        pythonScript.onload = () => {
          highlightLoaded = true;
          (window as any).Prism.highlightAll();
        };
        document.head.appendChild(pythonScript);
      };
      document.head.appendChild(script);
    }
  });
</script>

<Seo
  title="NotImplemented - Python Engineering Notes"
  description="Use NotImplemented constant for binary operations and method delegation"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">NotImplemented</h1>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Use the <code>NotImplemented</code> constant for binary operations and method
    delegation to enable proper operator fallback behavior.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      <code>NotImplemented</code> is a built-in constant used for binary special
      methods to show that a specific type does not have an implementation. The purpose
      is to tell Python that "I'm not sure what to do with this other type—try the
      other operand's reflected method or fall back".
    </p>

    <p>
      <strong>Important:</strong> <code>NotImplementedError</code> is an exception
      you raise to say that a method exists but has yet to be implemented. Don't
      confuse the two!
    </p>

    <p>
      <strong>Do not raise <code>NotImplemented</code> as an error:</strong>
    </p>

    <pre><code class="language-python"
        >class Storage:
    def get(self, key):
        raise NotImplemented    # This is wrong!</code
      ></pre>

    <p>
      <strong>Do not call <code>NotImplemented</code>—it's not callable:</strong
      >
    </p>

    <pre><code class="language-python"
        >&gt;&gt; NotImplemented()
TypeError: "NotImplementedType" object is not callable</code
      ></pre>

    <p>
      Binary operators take two operands, with Python defining three different
      hooks:
    </p>

    <ul>
      <li>
        <strong>Left:</strong> <code>__add__</code>, <code>__sub__</code>,
        <code>__mul__</code>, <code>__truediv__</code>
      </li>
      <li>
        <strong>Right/reflected:</strong> <code>__radd__</code>,
        <code>__rsub__</code>, <code>__rmul__</code>, <code>__rtruediv__</code>
      </li>
      <li>
        <strong>In-place/augmented assignment:</strong> <code>__iadd__</code>,
        <code>__isub__</code>, <code>__imul__</code>, <code>__itruediv__</code>
      </li>
    </ul>

    <p>
      Python understands that <code>NotImplemented</code> is a special sentinel
      and follows this strategy for <code>a + b</code>:
    </p>

    <ol>
      <li>
        <strong>Subclass check:</strong> If <code>type(b)</code> is a strict
        subclass of <code>type(a)</code> and defines <code>__radd__</code>, call
        <code>b.__radd__(a)</code> first
      </li>
      <li>
        <strong>Left side:</strong> Call <code>a.__add__(b)</code> first (if not
        handled above)
      </li>
      <li>
        <strong>Check result:</strong> If it returns anything except
        <code>NotImplemented</code>, we stop
      </li>
      <li>
        <strong>Right side fallback:</strong> If it returns
        <code>NotImplemented</code>, try <code>b.__radd__(a)</code>
      </li>
      <li>
        <strong>TypeError:</strong> If both sides return
        <code>NotImplemented</code>, raise <code>TypeError</code>
      </li>
    </ol>

    <p>
      Here's an example of <code>NotImplemented</code> being used for binary operators:
    </p>

    <pre><code class="language-python"
        >class Left:
    def __add__(self, other):  # left side can't handle it
        return NotImplemented

class Right:
    def __radd__(self, other):  # right side handles the reversed op
        return "Right handled it"

print(Left() + Right())  # works because NotImplemented allowed the call for __radd__</code
      ></pre>

    <p>For a more complex example showing the full fallback chain:</p>

    <pre><code class="language-python"
        >class L:
    def __iadd__(self, other): 
        print("iadd")
        return NotImplemented
    def __add__(self, other):  
        print("add")
        return NotImplemented

class R:
    def __radd__(self, other): 
        print("radd")
        return "handled"

x = L()
x += R()   # prints: iadd -&gt; add -&gt; radd</code
      ></pre>

    <p>
      <code>NotImplemented</code> also works with rich comparisons. These are
      "rich" compared to the old single <code>__cmp__</code> from Python 2:
    </p>

    <pre><code class="language-python"
        >class L:
    def __lt__(self, other):  # can't compare
        return NotImplemented

class R:
    def __gt__(self, other):  # handles reversed "&lt;"
        return True

print(L() &lt; R())  # True (via R.__gt__)</code
      ></pre>

    <p>
      When both sides can handle the operation, the first successful one wins:
    </p>

    <pre><code class="language-python"
        >class A:
    def __eq__(self, other):
        return NotImplemented

class B:
    def __eq__(self, other):
        return True

print(A() == B())  # True (via B.__eq__)</code
      ></pre>

    <p>
      Use <code>NotImplemented</code> when your class doesn't know how to handle
      a specific operation with another type. This allows Python to try alternative
      approaches rather than immediately failing, enabling more flexible and extensible
      operator behavior.
    </p>
  </div>

  <div class="border-t pt-8 mt-12">
    <p class="text-sm text-neutral-500">
      Questions or feedback? Feel free to reach out!
    </p>
  </div>
</article>

<style>
  article {
    width: 100%;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.prose) {
    line-height: 1.7;
  }

  :global(.prose p) {
    margin: 1.25rem 0;
    color: #374151;
  }

  :global(.prose ul) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  :global(.prose li) {
    margin: 0.5rem 0;
    color: #374151;
  }

  :global(.prose ol) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  :global(pre) {
    background-color: #2d2d2d !important;
    padding: 1.25rem !important;
    border-radius: 0.5rem !important;
    overflow-x: auto !important;
    margin: 1.5rem 0 !important;
    max-width: 100%;
    border: 1px solid #374151;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  :global(pre code) {
    background: none !important;
    padding: 0 !important;
    font-size: 0.875rem !important;
    line-height: 1.6 !important;
    font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",
      monospace;
    color: #e5e7eb;
  }

  :global(code:not(pre code)) {
    background-color: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    color: #1f2937;
    font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",
      monospace;
    border: 1px solid #e5e7eb;
  }

  :global(.token.keyword) {
    color: #c792ea !important;
  }

  :global(.token.string) {
    color: #c3e88d !important;
  }

  :global(.token.function) {
    color: #82aaff !important;
  }

  :global(.token.class-name) {
    color: #ffcb6b !important;
  }

  :global(.token.comment) {
    color: #546e7a !important;
    font-style: italic;
  }

  :global(.token.decorator) {
    color: #f78c6c !important;
  }

  :global(.token.number) {
    color: #f78c6c !important;
  }

  @media (max-width: 768px) {
    article {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
</style>
