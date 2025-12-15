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
      title: "Patch Stack - Alex Wang",
      description: "ExitStack-powered teardown for reliable tests"
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">Patch Stack</h1>

  <div class="text-sm text-neutral-500 mb-8">September 6, 2025 • 6 min read
  </div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">ExitStack-powered teardown for reliable tests when cramming several cases
    into one test method.
  </div>

  <div class="prose prose-neutral max-w-none"><p>When you cram several cases into one test method (e.g., via a data
      provider), you get multiple problems:
    </p>

    <ul><li>One flaky case can disable the whole method</li>
      <li>Failures are harder to pin down</li>
      <li>Mock setup is duplicated or tangled</li></ul>

    <p>You should treat each method as a separate test, but to fix this cleanly
      you should split cases into separate methods while keeping them clean by
      deduplicating the mocking.
    </p>

    <h2>The Solution: Context Manager for Mocking</h2>

    <p>To solve this, use a context manager for mocking. Create a small callable
      class that:
    </p>

    <ul><li>Sets up all patches in <code>__enter__</code>, stores the
        <code>MagicMock</code> as attributes
      </li>
      <li>Accepts arguments to tweak behavior per test</li>
      <li>Tears everything down in <code>__exit__</code></li></ul>

    <pre><code class="language-python">from unittest import TestCase
from unittest.mock import patch

class MyMockContext:
    def __init__(self, user_role=&quot;member&quot;, feature_on=False):
        self.user_role = user_role
        self.feature_on = feature_on

    def __enter__(self):
        self.p_role = patch(&quot;app.auth.get_role&quot;, return_value=self.user_role)
        self.m_role = self.p_role.start()
        
        self.p_feat = patch(&quot;app.features.is_enabled&quot;, return_value=self.feature_on)
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
    if role == &quot;admin&quot; and is_enabled():
        return &quot;admin-feature-enabled&quot;
    elif role == &quot;member&quot;:
        return &quot;ok-for-member&quot; 
    else:
        return &quot;guest-access&quot;

class MyServiceTests(TestCase):
    def test_member_default(self):
        with MyMockContext(user_role=&quot;member&quot;, feature_on=False):
            result = do_the_thing()
            self.assertEqual(result, &quot;ok-for-member&quot;)
    
    def test_admin_with_feature(self):
        with MyMockContext(user_role=&quot;admin&quot;, feature_on=True):
            result = do_the_thing()
            self.assertEqual(result, &quot;admin-feature-enabled&quot;)
    
    def test_guest_user(self):
        with MyMockContext(user_role=&quot;guest&quot;):
            result = do_the_thing()
            self.assertEqual(result, &quot;guest-access&quot;)</code></pre>

    <h2>Benefits of This Approach</h2>

    <ul><li><strong>Isolation by design:</strong> One case per method → TestX can quarantine
        just the flaky one. No data-provider &quot;mega test&quot; taking others down
      </li>
      <li><strong>Teardown you can&#39;t forget:</strong> The context manager guarantees
        patches stop, preventing state leaks and flaky tests
      </li>
      <li><strong>Refactor + Change friendly:</strong> When mocking strategy changes,
        you edit one place; all tests inherit it. Smaller diffs, fewer mistakes
      </li></ul>

    <h2>Advanced Usage with ExitStack</h2>

    <p>For more complex scenarios with multiple patches, you can leverage <code>ExitStack</code> to manage them all:
    </p>

    <pre><code class="language-python">from contextlib import ExitStack
from unittest.mock import patch

class AdvancedMockContext:
    def __init__(self, **kwargs):
        self.config = kwargs
        self.mocks = ${escape("{}")}
        
    def __enter__(self):
        self.stack = ExitStack()
        
        # Dynamically create patches based on config
        for key, value in self.config.items():
            if key.startswith(&#39;mock_&#39;):
                target = key.replace(&#39;mock_&#39;, &#39;&#39;).replace(&#39;_&#39;, &#39;.&#39;)
                patcher = patch(f&quot;app.${escape("{")}target${escape("}")}&quot;, return_value=value)
                mock = self.stack.enter_context(patcher)
                self.mocks[key] = mock
                
        return self
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stack.close()

class FlexibleServiceTests(TestCase):
    def test_complex_scenario(self):
        with AdvancedMockContext(
            mock_auth_get_user=${escape("{")}\\&quot;id\\&quot;: 123, \\&quot;role\\&quot;: \\&quot;admin\\&quot;${escape("}")},
            mock_db_fetch_data=[${escape("{")}\\&quot;item\\&quot;: 1${escape("}")}, ${escape("{")}\\&quot;item\\&quot;: 2${escape("}")}],
            mock_cache_get=None
        ) as ctx:
            result = complex_operation()
            # Can access mocks via ctx.mocks if needed
            ctx.mocks[&#39;mock_auth_get_user&#39;].assert_called_once()</code></pre>

    <p>This pattern ensures your tests remain maintainable, isolated, and
      reliable while reducing boilerplate and preventing common mocking
      pitfalls.
    </p></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export {
  Page as default
};
