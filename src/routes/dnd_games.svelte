<script>
  import { fade, fly } from "svelte/transition";
</script>

<svelte:head>
  <title>Drag and Drop Games</title>
</svelte:head>

<h1 class="games-title" in:fly={{ x: 600, duration: 300, delay: 500 }}>
  Drag and Drop Games
</h1>
<div class="all-link-container">
  <div class="link-col">
    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <a class="game-link" href="/dndgame/unit1_1">Unit 1.1 - Cells & Viruses</a>
    </h1>
    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <a class="game-link" href="/dndgame/unit1_2">Unit 1.2 - Biomolecules</a>
    </h1>
    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <a class="game-link" href="/dndgame/unit1_3">Unit 1.3 - Cell Energy</a>
    </h1>

    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <a class="game-link" href="/dndgame/unit2_1">Unit 2.1 - Mitosis</a>
    </h1>
    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <a class="game-link" href="/dndgame/unit2_2">Unit 2.2 - Protein Synthesis</a>
    </h1>
  </div>
  <div class="link-col">
    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <p class="game-link disabled-link">Unit 3.1 - Genetics & Meiosis</p>
    </h1>
    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <p class="game-link disabled-link">
        Unit 8 - Evolution and Natural Selection
      </p>
    </h1>
    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <p class="game-link disabled-link">Unit 3.2 - Ecosystems</p>
    </h1>

    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <p class="game-link disabled-link">Unit 4.1 - Taxonomy</p>
    </h1>
    <h1 class="game-link-container" in:fade={{ duration: 300, delay: 500 }}>
      <p class="game-link disabled-link">Unit 4.2 - Ecosystems</p>
    </h1>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500&display=swap");
  * {
    font-family: "Spartan", sans-serif;
  }
  .games-title {
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
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
    /* border: 2px solid red; */
  }
  .game-link-container {
    width: 100%;
    min-width: 250px;
    height: 100px;
    border: 1px solid rgb(13, 114, 114);
    border-radius: 3px;
    background-color: rgb(246, 249, 255);
    color: rgb(13, 114, 114);
    box-sizing: border-box;
  }
  .game-link-container:hover {
    background-color: rgb(13, 114, 114);
    color: rgb(246, 249, 255);
  }
  .game-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    text-align: center;
    font-size: 1.5rem;
  }
  .disabled-link {
    margin: 0;
    cursor: not-allowed;
  }
  .disabled-link:hover {
    background-color: grey;
    color: black;
  }
  @media screen and (max-width: 1000px) {
    .link-col {
      width: 100%;
    }
    .game-link-container {
      width: 75%;
      min-width: 375px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
