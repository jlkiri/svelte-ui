<script>
  import { dndzone } from "svelte-dnd-action";
  import LeftZone from "./LeftZone.svelte";
  import RightZone from "./RightZone.svelte";
  let itemsLeft = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
    { id: 4, name: "item4" }
  ];
  let itemsRight = [
    { id: 5, name: "item1" },
    { id: 6, name: "item2" },
    { id: 7, name: "item3" },
    { id: 8, name: "item4" }
  ];
</script>

<style>
  :global(body, html) {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>

<main class="flex h-full">
  <LeftZone items={itemsLeft} />
  <RightZone items={itemsRight} />
</main>
