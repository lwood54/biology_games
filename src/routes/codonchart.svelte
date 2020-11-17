<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Translation from "../components/CodonChart/Translation.svelte";
  import Transcription from "../components/CodonChart/Transcription.svelte";
  import type { Score, CodonMatch } from "../types/CodonChartTypes";
  import {
    getRandomNum,
    transcription,
    translation,
    makeDNAArray,
  } from "../helpers";

  let randomNum: number;
  let dnaList: string[];
  let dnaTemplate: string;
  let codonMatch: CodonMatch;
  let mRNAAnswer: string;

  let showTranscription: boolean = true;
  let score: Score = {
    numAttempts: 0,
    numCorrect: 0,
  };

  $: if (randomNum) {
    dnaTemplate = dnaList[randomNum];
    setCodonMatch();
  }

  onMount(() => {
    dnaList = makeDNAArray();
    randomNum = getRandomNum(dnaList.length);
    dnaTemplate = dnaList[randomNum];
    setCodonMatch();
  });

  const setCodonMatch = () => {
    let c = transcription(dnaTemplate);
    codonMatch = {
      codon: c,
      amino_acid: translation(c),
    };
  };

  const handleSubmit = () => {
    randomNum = getRandomNum(dnaList.length);
    showTranscription = !showTranscription;
  };

  const handleTranscriptionSubmit = () => {
    showTranscription = !showTranscription;
  };
</script>

{#if showTranscription}
  <div
    class="transcription_container"
    in:fade={{ duration: 500, delay: 500 }}
    out:fade={{ duration: 500 }}>
    <div class="instructions">
      <h1>Transcription Instructions:</h1>
      <p>1) Look at the DNA Template Strand</p>
      <p>2) Type in what the correct mRNA codon should be</p>
      <p>3) Click Submit!</p>
    </div>
    <Transcription on:submit={handleTranscriptionSubmit} {dnaTemplate} />
    <div class="right_container">
      <img
        class="animation_image"
        src="images/unit2_2/transcription.gif"
        alt="transcription" />
      <div class="score">{score.numCorrect} / {score.numAttempts}</div>
    </div>
  </div>
{:else}
  <div
    class="translation_container"
    in:fade={{ duration: 500, delay: 500 }}
    out:fade={{ duration: 500 }}>
    <div class="instructions">
      <h1>Translation Instructions:</h1>
      <p>1) Click first base pair button on left.</p>
      <p>2) Click second base pair button at the top.</p>
      <p>3) Click third base pair button in the highlighted row.</p>
      <p>4) Observe the amino acid that is highlighted by all selections.</p>
      <p>5) Put your answer below the codon and click submit!</p>
    </div>
    <Translation on:submit={handleSubmit} bind:score {codonMatch} />
    <div class="right_container">
      <img
        class="animation_image"
        src="images/unit2_2/translation.gif"
        alt="translation" />
      <div class="score">{score.numCorrect} / {score.numAttempts}</div>
    </div>
  </div>
{/if}

<style>
  .transcription_container,
  .translation_container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1300px;
    margin: auto;
    scrollbar-width: 0px;
  }

  .instructions {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 170px;
    height: 500px;
    /* padding: 20px; */
  }

  .right_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 500px;
    /* padding: 20px; */
  }

  .animation_image {
    max-width: 100%;
    height: auto;
  }

  .score {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: 500px;
    padding: 20px; */
  }
</style>
