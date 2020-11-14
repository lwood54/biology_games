<script>
  import CodonChart from "../components/CodonChart/CodonChart.svelte";
</script>

<div class="codonapp_container">
  <h1 class="side_container">Stuff over here</h1>
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
    /* align-items: center; */
    width: 175px;
    height: 500px;
  }
</style>
