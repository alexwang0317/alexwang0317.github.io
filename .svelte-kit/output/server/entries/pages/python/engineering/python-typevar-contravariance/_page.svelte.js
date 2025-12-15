import {
  c as create_ssr_component,
  v as validate_component,
  e as escape,
} from "../../../../../chunks/index.js";
import { S as Seo } from "../../../../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'article.svelte-8bcc0v{width:100%;max-width:48rem;margin-left:auto;margin-right:auto}.prose{line-height:1.7}.prose p{margin:1.25rem 0;color:#374151}.prose h2{font-size:1.5rem;font-weight:600;margin:2rem 0 1rem 0;color:#1f2937}.prose ul{margin:1rem 0;padding-left:1.5rem}.prose li{margin:0.5rem 0;color:#374151}pre{background-color:#2d2d2d !important;padding:1.25rem !important;border-radius:0.5rem !important;overflow-x:auto !important;margin:1.5rem 0 !important;max-width:100%;border:1px solid #374151;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1)}pre code{background:none !important;padding:0 !important;font-size:0.875rem !important;line-height:1.6 !important;font-family:"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",\n      monospace;color:#e5e7eb}code:not(pre code){background-color:#f3f4f6;padding:0.125rem 0.375rem;border-radius:0.25rem;font-size:0.875em;color:#1f2937;font-family:"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",\n      monospace;border:1px solid #e5e7eb}.token.keyword{color:#c792ea !important}.token.string{color:#c3e88d !important}.token.function{color:#82aaff !important}.token.class-name{color:#ffcb6b !important}.token.comment{color:#546e7a !important;font-style:italic}.token.decorator{color:#f78c6c !important}.token.number{color:#f78c6c !important}@media(max-width: 768px){article.svelte-8bcc0v{padding-left:1.5rem;padding-right:1.5rem}}',
  map: null,
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "TypeVar Contravariance - Python Engineering Notes",
      description:
        "TypeVar contravariance for type-safe class hierarchies and proper subtyping in Python",
    },
    {},
    {}
  )}

<article class="layout-md py-12 mx-auto max-w-3xl px-6 svelte-8bcc0v"><div class="mb-8"><a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a></div>

  <h1 class="text-3xl font-bold mb-4">TypeVar Contravariance</h1>

  <div class="prose prose-neutral max-w-none"><p><code>TypeVar</code> contravariance helps resolve type checking issues in class
      hierarchies, particularly for consumer functions that take parameters of generic
      types.
    </p>

    <p>Before diving into contravariance, we need to define three fundamental
      terms in type theory and subtyping:
    </p>

    <ul><li><strong>Covariance:</strong> A is a subtype of B → Container[A] is a subtype
        of Container[B].
      </li>
      <li><strong>Contravariance:</strong> A is a subtype of B → Container[B] is a
        subtype of Container[A].
      </li>
      <li><strong>Invariance:</strong> A is a subtype of B → Container[A] is distinct
        from Container[B].
      </li></ul>

    <p>From object-oriented programming, a subtype means that whenever you have
      something that expects type A, if B is a subtype of A, you can replace A
      with B and everything should still work correctly. This is the essence of
      the Liskov Substitution Principle.
    </p>

    <h2>The Problem: Type Errors in Class Hierarchies</h2>

    <p>Let&#39;s imagine you want to create a class hierarchy with logging methods
      for different types of posts. The highest level is a general post, then
      there are subtypes like VideoPost and ImagePost.
    </p>

    <pre><code class="language-python">class Post:
    def __init__(self, content: str) -&gt; None:
        self.content = content

class VideoPost(Post):
    def __init__(self, content: str, duration: int) -&gt; None:
        super().__init__(content)
        self.duration = duration

class ImagePost(Post):
    def __init__(self, content: str, image_url: str) -&gt; None:
        super().__init__(content)
        self.image_url = image_url</code></pre>

    <p>Now, if you write a logger hierarchy, you&#39;ll encounter a type error:</p>

    <pre><code class="language-python">class PostLogger:
    def log(self, post: Post) -&gt; None:
        print(f&quot;Logging post: ${escape("{")}post.content${escape(
    "}"
  )}&quot;)

class VideoLogger(PostLogger):
    def log(self, post: VideoPost) -&gt; None:  # Type error!
        print(f&quot;Logging video: ${escape("{")}post.content${escape(
    "}"
  )} (duration: ${escape("{")}post.duration${escape("}")}s)&quot;)

class ImageLogger(PostLogger):
    def log(self, post: ImagePost) -&gt; None:  # Type error!
        print(f&quot;Logging image: ${escape("{")}post.content${escape(
    "}"
  )} (image: ${escape("{")}post.image_url${escape("}")}))&quot;)</code></pre>

    <h2>Why Does This Fail?</h2>

    <p>The issue arises because of contravariance in method parameters. When you
      override a method, the input parameters must be contravariant—meaning you
      can only accept more general types, not more specific ones.
    </p>

    <p>Think about it: <code>VideoLogger</code> cannot only accept
      <code>VideoPost</code>
      because the base class <code>PostLogger</code> accepts any
      <code>Post</code>. Therefore, <code>ImagePost</code> should also be acceptable
      to maintain the substitutability principle.
    </p>

    <p>However, by default, type variables are invariant, which means <code>Logger[VideoPost]</code>
      and <code>Logger[Post]</code> are considered completely different types.
    </p>

    <h2>The Solution: Contravariant <code>TypeVar</code></h2>

    <p>We can use <code>TypeVar</code> with contravariance to define the proper relationship.
      This aligns with the Liskov Substitution Principle and works correctly since
      our functions are consumers of the generic type.
    </p>

    <pre><code class="language-python">from typing import TypeVar, Generic

T = TypeVar(&quot;T&quot;, bound=Post, contravariant=True)  # bound is the most-super type

class Logger(Generic[T]):
    def log(self, post: T) -&gt; None:
        pass

class PostLogger(Logger[Post]):
    def log(self, post: Post) -&gt; None:
        print(f&quot;Logging post: ${escape("{")}post.content${escape(
    "}"
  )}&quot;)

class VideoLogger(Logger[VideoPost]):
    def log(self, post: VideoPost) -&gt; None:
        print(f&quot;Logging video: ${escape("{")}post.content${escape(
    "}"
  )} (duration: ${escape("{")}post.duration${escape("}")}s)&quot;)

class ImageLogger(Logger[ImagePost]):
    def log(self, post: ImagePost) -&gt; None:
        print(f&quot;Logging image: ${escape("{")}post.content${escape(
    "}"
  )} (image: ${escape("{")}post.image_url${escape("}")}))&quot;)</code></pre>

    <h2>Understanding the Contravariant Relationship</h2>

    <p>Using our initial analogy: <code>Post</code> is B, and
      <code>VideoPost</code>/<code>ImagePost</code>
      are A, where the latter are subtypes of the former.
    </p>

    <p>We know that <code>Logger[Post]</code> should be able to accept any
      <code>VideoPost</code>
      or
      <code>ImagePost</code>, because any information available in a
      <code>Post</code> type should automatically be available in its subtypes.
    </p>

    <p>Thus, <code>Logger[Post]</code> is a subtype of
      <code>Logger[VideoPost]</code>
      because if you needed a <code>Logger[VideoPost]</code>, I could give you a
      <code>Logger[Post]</code>, which accepts both <code>Post</code> and
      <code>VideoPost</code>, and it would be safe.
    </p>

    <p>Here&#39;s how this works in practice:</p>

    <pre><code class="language-python">def process_video_logger(logger: Logger[VideoPost]) -&gt; None:
    video = VideoPost(&quot;Check out this video!&quot;, 120)
    logger.log(video)

# This works because Logger[Post] is a subtype of Logger[VideoPost]
post_logger = PostLogger()
process_video_logger(post_logger)  # ✓ Type checker approves!

# This also works
video_logger = VideoLogger()
process_video_logger(video_logger)  # ✓ Type checker approves!</code></pre>

    <h2>When to Use Contravariant <code>TypeVar</code></h2>

    <p>Use contravariant <code>TypeVar</code> when:
    </p>

    <ul><li>You have a function or method that takes a parameter of a generic type.
      </li>
      <li>You want it to accept arguments of a more general type.</li>
      <li>Your class/function is a consumer of the generic type.</li>
      <li>You need to maintain proper subtyping relationships in inheritance
        hierarchies.
      </li></ul></div>

  <div class="border-t pt-8 mt-12"><p class="text-sm text-neutral-500">Questions or feedback? Feel free to reach out!
    </p></div>
</article>`;
});
export { Page as default };
