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
      title: "functools.partial - Alex Wang",
      description: "functools.partial for elegant function composition and cleaner code"
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-1l0sx6b"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">functools.partial</h1>

  <div class="text-sm text-neutral-500 mb-8">July 20, 2025 • 5 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">Master Python&#39;s functools.partial for elegant function composition and
    cleaner code. Learn how to eliminate repetitive function calls and create
    more maintainable codebases.
  </div>

  <div class="prose prose-neutral max-w-none"><p>You may find yourself in a situation where you need to call the same
      function repeatedly with mostly identical parameters. For instance,
      imagine you&#39;re building an application that frequently sends notifications
      through an email service. You might need to send emails with specific
      sender information, SMTP configuration, formatting preferences, retry
      settings, and logging options. This results in you calling the email
      function over and over with the same fixed arguments:
    </p>

    <pre><code class="language-python"># You end up with repetitive calls like this throughout your codebase
send_email(
    smtp_host=&#39;smtp.company.com&#39;,
    smtp_port=587,
    sender_email=&#39;noreply@company.com&#39;,
    sender_name=&#39;Company Notifications&#39;,
    use_tls=True,
    retry_attempts=3,
    retry_delay=30,
    log_level=&#39;INFO&#39;,
    template_engine=&#39;jinja2&#39;,
    to_email=&#39;user1@example.com&#39;,
    subject=&#39;Welcome to our service&#39;,
    template=&#39;welcome_email.html&#39;,
    context=${escape("{")}username&#39;: &#39;john_doe&#39;${escape("}")}
)</code></pre>

    <p>This repetition creates several problems: your code becomes <strong>verbose</strong>
      and <strong>harder to scan</strong>, you&#39;re constantly filling in the same
      parameter values, and if you need to change the common settings (like the
      SMTP host or retry configuration), you&#39;d have to hunt down and update
      every single function call. This makes your code less maintainable and
      difficult to read/write.
    </p>

    <pre><code class="language-python">from functools import partial

# Create a partial function with all the common email configuration
company_email = partial(
    send_email,
    smtp_host=&#39;smtp.company.com&#39;,
    smtp_port=587,
    sender_email=&#39;noreply@company.com&#39;,
    sender_name=&#39;Company Notifications&#39;,
    use_tls=True,
    retry_attempts=3,
    retry_delay=30,
    log_level=&#39;INFO&#39;,
    template_engine=&#39;jinja2&#39;
)

# You can also create more specific partials for different use cases
urgent_notification = partial(
    company_email,
    retry_attempts=5,
    retry_delay=10,
    template=&#39;urgent_alert.html&#39;
)


# Now your calls become much cleaner and focused.
welcome_email(to_email=&#39;newuser@example.com&#39;, context=${escape("{")}username&#39;: &#39;jane_smith&#39;${escape("}")})</code></pre>

    <p><code>functools.partial</code> allows you to &quot;freeze&quot; arguments and keywords,
      creating a simplified function with fewer parameters. When configuration values
      stay constant across multiple calls, partial eliminates the repetitive boilerplate.
    </p>

    <p>This may be useful for:</p>
    <ul><li>API clients with consistent authentication headers</li>
      <li>Database connections with standard timeout and pool settings</li>
      <li>File processors with common parsing configurations</li>
      <li>Test fixtures requiring repeated setup parameters</li></ul>

    <h2>Important Behavior with Mutable vs Immutable Arguments</h2>

    <p>When declaring <code>functools.partial</code>, recognize that any
      immutable argument types will use the values declared at creation time,
      while changes to mutable argument types do affect partials.
    </p>

    <pre><code class="language-python"># 1. Immutable vs Mutable behavior
def process_data(base_value, multiplier):
    return base_value * multiplier

# Immutable example - value frozen at creation time
initial_base = 10
multiply_by_base = partial(process_data, initial_base)

initial_base = 20  # This won&#39;t affect the partial
print(multiply_by_base(5))  # Output: 50 (still uses 10)

# Mutable example - changes affect the partial
config_dict = ${escape("{")}timeout&#39;: 30${escape("}")}

def connect_database(host, port, config):
    return f&quot;Connecting to ${escape("{")}host${escape("}")}:${escape("{")}port${escape("}")} with timeout ${escape("{")}config[&#39;timeout&#39;]${escape("}")}&quot;

db_connector = partial(connect_database, config=config_dict)

config_dict[&#39;timeout&#39;] = 60  # This WILL affect the partial
print(db_connector(&#39;localhost&#39;, 5432))  # Output: &quot;...timeout 60&quot;</code></pre>

    <p><strong>Tip:</strong> Use keyword arguments in your partials for readability.
    </p></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export {
  Page as default
};
