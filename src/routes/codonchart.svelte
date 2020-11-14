<script>
  import CodonChart from "../components/CodonChart/CodonChart.svelte";
</script>

<div class="codonapp_container">
  <div class="side_container">
    <h1>Instructions:</h1>
    <p>1) Click first base pair button on left.</p>
    <p>2) Click second base pair button at the top.</p>
    <p>3) Click third base pair button in the highlighted row.</p>
    <p>4) Observe the amino acid that is highlighted by all selections.</p>
    <p>5) Put your answer below the codon and click submit!</p>
  </div>
  <CodonChart />
  <div class="side_container" />
</div>

<style>
  .codonapp_container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    margin: auto;
  }

  .side_container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 175px;
    height: 500px;
  }
</style>
