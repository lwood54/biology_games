<script>
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Mr. Wood's Biology Page</title>
</svelte:head>
<div class="home_container" in:fade={{ delay: 500, duration: 200 }}>
  <h1>Biology Text Content Coming Soon...</h1>
</div>

<style>
  .home_container {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
</style>
