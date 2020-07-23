<script>
  import { dndzone } from "svelte-dnd-action";
  import { styles } from "./values.js";
  export let components;

  function handleDndConsider(e) {
    components = e.detail.items;
  }
  function handleDndFinalize(e) {
    components = e.detail.items;
  }
</script>

<style>

</style>

<section
  class="w-full p-4"
  use:dndzone={{ items: components }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}>
  {#each components as component (component.id)}
    <div class={`p-${$styles.padding} border border-gray-500`}>
      {$styles.text}
    </div>
  {/each}
</section>
