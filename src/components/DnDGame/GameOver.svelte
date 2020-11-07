<script lang="ts">
  export let totalCorrect: number;
  export let totalWrong: number;
  let finalScore: number;
  $: {
    let calcScore = Math.round(((30 - totalWrong) / 30) * 100);
    finalScore = calcScore >= 0 ? calcScore : 0;
  }
</script>

<div class="game-over_container">
  <h1 class="title">Game Over</h1>
  <h2 class="score-content">Total Correct: {totalCorrect}</h2>
  <h2 class="score-content">Total Wrong: {totalWrong}</h2>
  <h2 class="score-content">Final Score: {finalScore}</h2>
  <p class="score-content">
    Now take a screen shot of your score and send an email your teacher.
  </p>
  <a href="/">Home</a>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500&display=swap");
  * {
    font-family: "Spartan", sans-serif;
  }
  .game-over_container {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .title {
    width: 100%;
    text-align: center;
  }
  .score-content {
    width: 100%;
    text-align: center;
  }
</style>
