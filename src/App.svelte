<script>
  import { dndzone } from "svelte-dnd-action";
  import LeftZone from "./LeftZone.svelte";
  import RightZone from "./RightZone.svelte";
</script>

<style>
  :global(body, html) {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>

<main class="flex h-full w-full">
  <LeftZone />
  <RightZone />
</main>
