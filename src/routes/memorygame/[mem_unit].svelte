<script context="module" lang="ts">
  export async function preload(page, session) {
    const { mem_unit } = page.params;
    const res = await this.fetch(`data/memory_data/${mem_unit}.json`);
    const mem_content = await res.json();
    return { mem_content };
  }
</script>

<script lang="ts">
  import MemoryBoard from "../../components/MemoryGame/MemoryBoard.svelte";
  export let mem_content; // this gets defined in script module above

  let screenWidth: number | undefined = undefined;
  let showScreenSzMsg = false;
  $: {
    showScreenSzMsg = screenWidth <= 830;
  }
</script>

<svelte:head>
  <title>{mem_content.title}</title>
</svelte:head>
<svelte:window bind:innerWidth={screenWidth} />

<div class="mem_board_container">
  <MemoryBoard arrayOfCards={mem_content.arrayOfCards} />
</div>

<!-- {#if showScreenSzMsg}
  <div class="screen-message" in:fade={{ delay: 500, duration: 400 }}>
    <h1>Screen Size Message</h1>
    <p>
      This game is meant to be played on a larger screen, please ensure a screen
      width of at least 830 pixels.
    </p>
  </div>
{:else}
  <DnD {dnd_content} />
{/if} -->
<style>
  .mem_board_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* .screen-message {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
  }
  .screen-message p {
    width: 400px;
  } */
</style>
