<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
</script>

<Seo
  title="RL with Jax - Alex Wang"
  description="Resources and advice for reinforcement learning written in Jax"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/research" class="text-blue-600 hover:underline text-sm"
      >← Back to Research</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">RL with Jax</h1>

  <div class="text-sm text-neutral-500 mb-8">February 26, 2026</div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Recently I've been working on RL written in Jax and
      <code>jax.lax.scan</code> for speedups in different policy gradient
      architectures. Thought it may be useful to share this list of super useful
      resources.
    </p>

    <ul>
      <li>
        <a
          href="https://andyljones.com/posts/rl-debugging.html"
          target="_blank"
          rel="noreferrer">RL Debugging Guide</a
        >
      </li>
      <li>
        <a
          href="https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/"
          target="_blank"
          rel="noreferrer">PPO Implementation Details (ICLR Blog Track)</a
        >
      </li>
      <li>
        <a
          href="https://ai.stanford.edu/~zayd/why-is-machine-learning-hard.html"
          target="_blank"
          rel="noreferrer">Why is Machine Learning Hard?</a
        >
      </li>
      <li>
        <a
          href="http://joschu.net/blog/opinionated-guide-ml-research.html"
          target="_blank"
          rel="noreferrer">An Opinionated Guide to ML Research</a
        >
      </li>
      <li>
        <a
          href="https://spinningup.openai.com/en/latest/user/introduction.html#what-this-is"
          target="_blank"
          rel="noreferrer">Spinning Up in Deep RL (OpenAI)</a
        >
      </li>
      <li>
        <a
          href="https://naklecha.notion.site/a-reinforcement-learning-guide"
          target="_blank"
          rel="noreferrer">A Very Visual RL Guide</a
        >
      </li>
      <li>
        <a
          href="https://arxiv.org/pdf/1811.12560"
          target="_blank"
          rel="noreferrer"
          >Lighter alternative to Sutton &amp; Barto</a
        >
      </li>
    </ul>

    <h2>RL Resources</h2>

    <ul>
      <li>
        <a
          href="https://github.com/keraJLi/rejax/blob/main/tests/environments.py"
          target="_blank"
          rel="noreferrer">Trivial reference envs for tests</a
        >
      </li>
      <li>
        <a
          href="https://github.com/andyljones/megastep/blob/master/megastep/demo/learning.py#L134-L159"
          target="_blank"
          rel="noreferrer">Test examples</a
        >
      </li>
      <li>
        <a
          href="https://arxiv.org/pdf/1709.06560"
          target="_blank"
          rel="noreferrer">Hyperparams give crazy variance</a
        >
      </li>
      <li>
        <a
          href="https://arxiv.org/pdf/2306.01324"
          target="_blank"
          rel="noreferrer">Hyperparam optimization (small)</a
        >
      </li>
      <li>
        <a
          href="https://link.springer.com/chapter/10.1007/978-3-030-05318-5_1"
          target="_blank"
          rel="noreferrer">Hyperparam optimization (big)</a
        >
      </li>
      <li>
        <a
          href="https://people.eecs.berkeley.edu/~pabbeel/cs287-fa09/readings/NgHaradaRussell-shaping-ICML1999.pdf"
          target="_blank"
          rel="noreferrer">Super important reward shaping paper</a
        >
      </li>
      <li>
        <a
          href="https://jmlr.org/papers/v22/20-1364.html"
          target="_blank"
          rel="noreferrer">All common RL algos</a
        >
      </li>
      <li>
        <a
          href="https://github.com/luchris429/purejaxrl"
          target="_blank"
          rel="noreferrer">RL implementations in Jax (PureJaxRL)</a
        >
      </li>
      <li>
        <a
          href="https://github.com/FLAIROx/JaxMARL"
          target="_blank"
          rel="noreferrer">MARL implementations in Jax (JaxMARL)</a
        >
      </li>
      <li>
        Interesting applications:
        <ul>
          <li>
            <a
              href="https://jaxmarl.foersterlab.com/environments/smax/"
              target="_blank"
              rel="noreferrer">SMAX (JaxMARL)</a
            >
          </li>
          <li>
            <a
              href="https://github.com/MichaelTMatthews/Craftax"
              target="_blank"
              rel="noreferrer">Craftax</a
            >
          </li>
        </ul>
      </li>
    </ul>

    <h2>Advice from a Smart Guy from My Lab</h2>

    <ul>
      <li>
        If you haven't already, read Costa Jiang's blog post about
        <a
          href="https://iclr-blog-track.github.io/2022/03/25/ppo-implementation-details/"
          target="_blank"
          rel="noreferrer">PPO implementation details</a
        >.
      </li>
      <li>
        <strong>Add metrics.</strong> You should track your mean ratio and the entropy
        in particular. You will almost certainly find the ratio spikes and entropy
        is low before your crash.
      </li>
      <li>
        Make sure that the ratio is 1 at the first gradient step of every new set
        of data.
      </li>
      <li>
        <strong>Unit test your advantage estimation.</strong> Pull out the function,
        put in some mock values and hand calculate advantages and check they're right.
        Make sure you test everything including masking etc.
      </li>
      <li>
        <strong>Unit test your loss function.</strong> Do the same thing as the advantages
        but with this more complicated one. Have the logprobs of the two policies
        as input.
      </li>
      <li>
        Compare with a reference implementation such as
        <a
          href="https://github.com/vwxyzjn/cleanrl"
          target="_blank"
          rel="noreferrer">CleanRL</a
        >, see if there's anything different.
      </li>
      <li>
        If all this happens you don't have a common bug. Try playing with
        hyperparams. Reduce the learning rate for example. <code>3e-4</code> is a
        good bet with Adam. Reducing <code>beta2</code> and lowering the GAE lambda
        can also help.
      </li>
    </ul>
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

  :global(.prose a) {
    color: #2563eb;
    text-decoration: none;
  }

  :global(.prose a:hover) {
    text-decoration: underline;
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

  @media (max-width: 768px) {
    article {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
</style>
