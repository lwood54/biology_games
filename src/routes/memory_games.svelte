<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div class="memory_landing" in:fade={{ delay: 500, duration: 200 }}>
  <h1>Memory Games coming soon...</h1>
</div>

<style>
  .memory_landing {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
</style>
