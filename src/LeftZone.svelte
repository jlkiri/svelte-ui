<script>
  import { dndzone } from "svelte-dnd-action";
  import { styles } from "./values.js";
  export let components = [
    {
      id: 1,
      items: [
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        },
        {
          id: 8
        }
      ]
    },
    {
      id: 2,
      items: [
        {
          id: 9
        },
        {
          id: 10
        },
        {
          id: 11
        },
        {
          id: 12
        }
      ]
    },
    {
      id: 3,
      items: [
        {
          id: 13
        },
        {
          id: 14
        },
        {
          id: 15
        },
        {
          id: 16
        }
      ]
    },
    {
      id: 4,
      items: [
        {
          id: 17
        },
        {
          id: 18
        },
        {
          id: 19
        },
        {
          id: 20
        }
      ]
    }
  ];

  let nestedItems = [
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    }
  ];

  function handleDndConsider(e) {
    components = e.detail.items;
  }
  function handleDndFinalize(e) {
    components = e.detail.items;
  }
  function handleDndConsiderNested(e) {
    nestedItems = e.detail.items;
  }
  function handleDndFinalizeNested(e) {
    nestedItems = e.detail.items;
  }
</script>

<style>
  .zone {
    padding: 0;
    font-size: 16px;
  }
</style>

<section
  class="w-full p-4"
  use:dndzone={{ items: components, type: 'outer' }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}>
  {#each components as component (component.id)}
    <div
      class="w-full p-4"
      use:dndzone={{ items: component.items, type: 'inner' }}
      on:consider={handleDndConsiderNested}
      on:finalize={handleDndFinalizeNested}>
      {#each component.items as item (item.id)}
        <div class={`p-${$styles.padding}  p-4 border border-red-500`}>
          {$styles.text}
        </div>
      {/each}
    </div>
  {/each}

</section>
