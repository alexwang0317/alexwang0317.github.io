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
  title="TYPE_CHECKING - Python Engineering Notes"
  description="Import types conditionally to avoid circular imports and heavy dependencies"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">TYPE_CHECKING</h1>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Import types conditionally to avoid circular imports and heavy dependencies
    while maintaining clean type annotations.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Imagine you have a case where you have a circular dependency. Usually,
      this is a problem, and a quick post on interface stubs may be helpful, but
      sometimes refactoring it wouldn't make sense, and the circular import may
      not be practical to refactor.
    </p>

    <p>
      Instead, what you may do is use <code>TYPE_CHECKING</code>:
    </p>

    <pre><code class="language-python"
        >from __future__ import annotations  # optional but handy for forward refs
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    # Only imported for type checkers; not executed at runtime
    from some_heavy_lib import BigType

class Thing:
    def __init__(self, x: BigType):  # works for type checkers
        self.x = x</code
      ></pre>

    <p>
      The <code>TYPE_CHECKING</code> constant is <code>False</code> at runtime
      but <code>True</code>
      when type checkers like mypy or PyCharm analyze your code. This means imports
      inside the
      <code>if TYPE_CHECKING:</code> block are only processed during static type
      checking.
    </p>

    <p>This pattern is useful for several scenarios:</p>

    <p>
      <strong>Avoiding circular imports:</strong> When two modules need to reference
      each other's types, you can break the cycle by importing one side only for
      type checking.
    </p>

    <pre><code class="language-python"
        ># user.py
from __future__ import annotations
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from order import Order

class User:
    def __init__(self, name: str):
        self.name = name
        self.orders: list[Order] = []</code
      ></pre>

    <pre><code class="language-python"
        ># order.py  
from user import User

class Order:
    def __init__(self, user: User, amount: float):
        self.user = user
        self.amount = amount</code
      ></pre>

    <p>
      <strong>Skipping heavy dependencies:</strong> Import expensive libraries only
      for type hints without the runtime overhead.
    </p>

    <pre><code class="language-python"
        >from typing import TYPE_CHECKING

if TYPE_CHECKING:
    import pandas as pd
    import numpy as np

def process_data(df: pd.DataFrame) -> np.ndarray:
    # pandas and numpy aren't imported at runtime
    # but type checkers understand the annotations
    pass</code
      ></pre>

    <p>
      <strong>Clean annotations:</strong> Keep type annotations readable without
      string literals or complex workarounds.
    </p>

    <pre><code class="language-python"
        ># Instead of this:
def bad_example(data: "ComplexType") -> "list[ComplexType]":
    pass

# You can write this:
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from complex_module import ComplexType

def good_example(data: ComplexType) -> list[ComplexType]:
    pass</code
      ></pre>

    <p>
      <code>TYPE_CHECKING</code> is essential when you need to reference types that
      would cause circular imports, performance issues, or dependency problems, while
      still maintaining excellent static type checking support.
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
