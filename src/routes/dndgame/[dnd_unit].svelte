<script context="module" lang="ts">
  export async function preload(page, session) {
    const { dnd_unit } = page.params;
    const res = await this.fetch(`data/dnd_data/${dnd_unit}.json`);
    const dnd_content = await res.json();
    return { dnd_content };
  }
</script>

<script lang="ts">
  import DnD from "../../components/DnDGame/DnD.svelte";
  import { fade } from "svelte/transition";
  export let dnd_content; // this gets defined in script module above

  let screenWidth: number | undefined = undefined;
  let showScreenSzMsg = false;
  $: {
    showScreenSzMsg = screenWidth <= 830;
  }
</script>

<svelte:head>
  <title>{dnd_content.title}</title>
</svelte:head>
<svelte:window bind:innerWidth={screenWidth} />

{#if showScreenSzMsg}
  <div class="screen-message" in:fade={{ delay: 500, duration: 400 }}>
    <h1>Screen Size Message</h1>
    <p>
      This game is meant to be played on a larger screen, please ensure a screen
      width of at least 830 pixels.
    </p>
  </div>
{:else}
  <DnD {dnd_content} />
{/if}

<style>
  .screen-message {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
  }
  .screen-message p {
    width: 400px;
  }
</style>
