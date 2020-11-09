<script>
  import { fade, fly } from "svelte/transition";
</script>

<svelte:head>
  <title>Memory Games</title>
</svelte:head>

<h1 class="games-title" in:fly={{ x: 600, duration: 300, delay: 500 }}>
  Memory Games
</h1>
<div class="all-link-container">
  <div class="link-col">
    <h1
      class="game-link-container"
      in:fade={{ y: 200, duration: 300, delay: 500 }}>
      <a class="game-link" href="/memorygame/unit2_1">Unit 4 (2.1) - Cell Cycle
        and Mitosis</a>
    </h1>
  </div>
</div>
<!-- <div class="memory_landing" in:fade={{ delay: 500, duration: 200 }}>
  <ul>
    <li>game 1</li>
    <li>
      
    </li>
  </ul>
</div> -->

<!--<style ✂prettier:content✂="CiAgLm1lbW9yeV9sYW5kaW5nIHsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIHBhZGRpbmc6IDEwcHg7CiAgfQo=" ✂prettier:content✂="" ✂prettier:content✂=""></style>-->
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
    /* background-color: rgb(246, 249, 255); */
    background-color: rgb(13, 114, 114);
    color: rgb(246, 249, 255);
    box-sizing: border-box;
  }
  .game-link-container:hover {
    background-color: rgb(246, 249, 255);
    color: rgb(13, 114, 114);
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
  /* .disabled-link {
    margin: 0;
    cursor: not-allowed;
  }
  .disabled-link:hover {
    background-color: grey;
    color: black;
  } */
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
