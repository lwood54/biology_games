<script>
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Mr. Wood's Biology Site</title>
</svelte:head>
<div class="home_container" in:fade={{ delay: 500, duration: 200 }}>
  <h1 class="title">Biology Text Content Coming Soon...</h1>
  <a href="/codonchart">Codon Chart</a>
</div>

<style>
  .home_container {
    display: flex;
    justify-content: center;
    padding: 10px;
    flex-wrap: wrap;
  }

  .title {
    text-align: center;
    width: 100%;
  }
</style>
