<script>
  import { dndzone } from "svelte-dnd-action";
  export let items;
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  function handleDndFinalize(e) {
    items = e.detail.items;
  }
</script>

<style>

</style>

<section
  use:dndzone={{ items }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}>
  {#each items as item (item.id)}
    <div class="p-4 border border-gray-500">{item.name}</div>
  {/each}
</section>
