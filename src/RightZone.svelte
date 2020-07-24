<script>
  import { dndzone } from "svelte-dnd-action";
  import { styles } from "./values.js";

  let step = 1;

  let components = [
    {
      id: 0
    }
  ];

  function handleDndConsider(e) {
    components = e.detail.items;
  }
  function handleDndFinalize(e) {
    components = e.detail.items;
  }

  const adjustStep = inputVal => {
    if (inputVal < 6) {
      return 1;
    }

    if (inputVal < 12) {
      return 2;
    }

    if (inputVal < 24) {
      return 4;
    }

    return 8;
  };

  const handleRangeChange = e => {
    step = adjustStep(e.target.value);
  };
</script>

<style>
  #padding {
    display: block;
  }

  #color {
    display: block;
  }

  #text {
    display: block;
  }
</style>

<section class="w-full border border-r-1 p-4">
  <div>
    <h2 class="text-2xl font-bold">Properties</h2>
    <label for="padding">Padding: {$styles.padding}</label>
    <input
      {step}
      type="range"
      id="padding"
      on:input={handleRangeChange}
      name="padding"
      min="0"
      max="64"
      list="padding-values"
      bind:value={$styles.padding} />
    <label for="color">Text</label>
    <input type="text" id="text" name="text" bind:value={$styles.text} />
  </div>
  <div>
    <h2 class="text-2xl font-bold">Component</h2>
    <div
      class="w-full p-4"
      use:dndzone={{ items: components }}
      on:consider={handleDndConsider}
      on:finalize={handleDndFinalize}>

      {#each components as component (component.id)}
        <div class={`p-${$styles.padding} border border-gray-500`}>
          {$styles.text}
        </div>
      {/each}
    </div>
  </div>
</section>
