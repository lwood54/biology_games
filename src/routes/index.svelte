<script>
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <title>Mr. Wood's Biology Site</title>
</svelte:head>
<div class="all-link-container">
  <div class="link-col">
    <h1 class="section_link_container" in:fade={{ duration: 300, delay: 500 }}>
      <a class="section_link" href="/codonchart">Codon Chart</a>
    </h1>
  </div>
</div>

<style>
  .all-link-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    box-sizing: border-box;
  }
  .link-col {
    width: 45%;
    margin: auto;
  }
  .section_link_container {
    width: 100%;
    min-width: 250px;
    height: 100px;
    border: 1px solid rgb(13, 114, 114);
    border-radius: 3px;
    background-color: rgb(246, 249, 255);
    color: rgb(13, 114, 114);
    box-sizing: border-box;
  }
  .section_link_container:hover {
    background-color: rgb(13, 114, 114);
    color: rgb(246, 249, 255);
  }
  .section_link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    text-align: center;
    font-size: 1.5rem;
  }
</style>
