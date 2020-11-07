<script lang="ts">
  import Nav from "../components/UI/Nav.svelte";
  /////// next 2 lines only used to prevent warnings in console and VS Code
  export let segment;
  segment = !segment;
  //////
</script>

<Nav />

<main>
  <slot />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500&display=swap");
  * {
    font-family: "Spartan", sans-serif;
  }
  main {
    background-color: white;
    box-sizing: border-box;
  }
</style>
