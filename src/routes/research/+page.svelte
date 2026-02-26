<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PythonList from "./PythonList.svelte";
  import researchData from "./research.yaml";
</script>

<Seo title="Alex Wang – Research" description="Research and other projects" />

<section class="layout-md py-12">
  <h2 class="heading2">Research</h2>
  <div class="border-b border-neutral-300 mb-6" />
  <PythonList data={researchData.posts} />
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Blog</h2>
  <div class="border-b border-neutral-300 mb-6" />
  <p class="text-neutral-600">Coming soon</p>
</section>
