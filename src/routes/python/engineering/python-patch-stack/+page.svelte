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
  title="Patch Stack - Alex Wang"
  description="ExitStack-powered teardown for reliable tests"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">Patch Stack</h1>

  <div class="text-sm text-neutral-500 mb-8">September 6, 2025 • 6 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    ExitStack-powered teardown for reliable tests when cramming several cases into one test method.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      When you cram several cases into one test method (e.g., via a data provider), you get multiple problems:
    </p>

    <ul>
      <li>One flaky case can disable the whole method</li>
      <li>Failures are harder to pin down</li>
      <li>Mock setup is duplicated or tangled</li>
    </ul>

    <p>
      You should treat each method as a separate test, but to fix this cleanly you should split cases into separate methods while keeping them clean by deduplicating the mocking.
    </p>

    <h2>The Solution: Context Manager for Mocking</h2>

    <p>
      To solve this, use a context manager for mocking. Create a small callable class that:
    </p>

    <ul>
      <li>Sets up all patches in <code>__enter__</code>, stores the <code>MagicMock</code> as attributes</li>
      <li>Accepts arguments to tweak behavior per test</li>
      <li>Tears everything down in <code>__exit__</code></li>
    </ul>

    <pre><code class="language-python">from unittest import TestCase
from unittest.mock import patch

class MyMockContext:
    def __init__(self, user_role="member", feature_on=False):
        self.user_role = user_role
        self.feature_on = feature_on

    def __enter__(self):
        self.p_role = patch("app.auth.get_role", return_value=self.user_role)
        self.m_role = self.p_role.start()
        
        self.p_feat = patch("app.features.is_enabled", return_value=self.feature_on)
        self.m_feat = self.p_feat.start()
        
        return self  # expose mocks if you want to assert calls

    def __exit__(self, exc_type, exc, tb):
        self.p_role.stop()
        self.p_feat.stop()

# Example function that uses the mocked dependencies
def do_the_thing():
    from app.auth import get_role
    from app.features import is_enabled
    
    role = get_role()
    if role == "admin" and is_enabled():
        return "admin-feature-enabled"
    elif role == "member":
        return "ok-for-member" 
    else:
        return "guest-access"

class MyServiceTests(TestCase):
    def test_member_default(self):
        with MyMockContext(user_role="member", feature_on=False):
            result = do_the_thing()
            self.assertEqual(result, "ok-for-member")
    
    def test_admin_with_feature(self):
        with MyMockContext(user_role="admin", feature_on=True):
            result = do_the_thing()
            self.assertEqual(result, "admin-feature-enabled")
    
    def test_guest_user(self):
        with MyMockContext(user_role="guest"):
            result = do_the_thing()
            self.assertEqual(result, "guest-access")</code></pre>

    <h2>Benefits of This Approach</h2>

    <ul>
      <li>
        <strong>Isolation by design:</strong> One case per method → TestX can quarantine just the flaky one. No data-provider "mega test" taking others down
      </li>
      <li>
        <strong>Teardown you can't forget:</strong> The context manager guarantees patches stop, preventing state leaks and flaky tests
      </li>
      <li>
        <strong>Refactor + Change friendly:</strong> When mocking strategy changes, you edit one place; all tests inherit it. Smaller diffs, fewer mistakes
      </li>
    </ul>

    <h2>Advanced Usage with ExitStack</h2>

    <p>
      For more complex scenarios with multiple patches, you can leverage <code>ExitStack</code> to manage them all:
    </p>

    <pre><code class="language-python">from contextlib import ExitStack
from unittest.mock import patch

class AdvancedMockContext:
    def __init__(self, **kwargs):
        self.config = kwargs
        self.mocks = {"{}"}
        
    def __enter__(self):
        self.stack = ExitStack()
        
        # Dynamically create patches based on config
        for key, value in self.config.items():
            if key.startswith('mock_'):
                target = key.replace('mock_', '').replace('_', '.')
                patcher = patch(f"app.{'{'}target{'}'}", return_value=value)
                mock = self.stack.enter_context(patcher)
                self.mocks[key] = mock
                
        return self
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stack.close()

class FlexibleServiceTests(TestCase):
    def test_complex_scenario(self):
        with AdvancedMockContext(
            mock_auth_get_user={"{"}\"id\": 123, \"role\": \"admin\"{"}"},
            mock_db_fetch_data=[{"{"}\"item\": 1{"}"}, {"{"}\"item\": 2{"}"}],
            mock_cache_get=None
        ) as ctx:
            result = complex_operation()
            # Can access mocks via ctx.mocks if needed
            ctx.mocks['mock_auth_get_user'].assert_called_once()</code></pre>

    <p>
      This pattern ensures your tests remain maintainable, isolated, and reliable while reducing boilerplate and preventing common mocking pitfalls.
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
    max-width: 48rem; /* 768px */
    margin-left: auto;
    margin-right: auto;
  }

  /* Prose styling for article content */
  :global(.prose) {
    line-height: 1.7;
  }

  :global(.prose p) {
    margin: 1.25rem 0;
    color: #374151;
  }

  :global(.prose h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
    color: #1f2937;
  }

  :global(.prose ul) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  :global(.prose li) {
    margin: 0.5rem 0;
    color: #374151;
  }

  /* Code block styling for Python syntax highlighting */
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

  /* Inline code styling */
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

  /* Python syntax highlighting enhancements */
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