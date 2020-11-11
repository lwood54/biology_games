<script lang="ts">
  import { onMount } from "svelte";
  import CardComp from "./CardComp.svelte";
  import Modal from "../UI/Modal.svelte";
  import type { Card, TimerAction } from "../../types/MemoryGameTypes";
  import { shuffleArray } from "../../helpers";

  export let arrayOfCards: Card[];

  let firstSelected: { id: string; pairId: string };
  let secondSelected: { id: string; pairId: string };
  let canFlip: boolean = true;
  let hasStarted: boolean = false;
  let numFlipped: number = 0;
  let numMatches: number = 0;
  let causeReset: boolean = false;
  let lockedCardIDs: string[] = [];
  let flipCount: number = 0;
  let time: number = 0;
  let finalTime: number = 0;
  let timer: number;
  let triggerSignalMatch: boolean = false;
  let roundOver: boolean = false;
  let signalWin: boolean = false;

  $: if (numMatches === arrayOfCards.length / 2) {
    signalWin = true;
    setTimeout(() => {
      roundOver = true;
    }, 1000);
    triggerSignalMatch = true;
    finalTime = time;
    setTimer("stop");
  }
  onMount(() => {
    arrayOfCards = shuffleArray(arrayOfCards);
  });

  const handleFlipEvent = (e) => {
    if (numFlipped === 2) {
      resetFlipped();
    } else {
      if (!firstSelected) {
        firstSelected = e.detail;
        causeReset = false;
        triggerSignalMatch = false;
        numFlipped++;
        flipCount++;
      } else if (e.detail.id !== firstSelected.id) {
        secondSelected = e.detail;
        causeReset = false;
        triggerSignalMatch = false;
        numFlipped++;
        flipCount++;
      }
      if (firstSelected.pairId === secondSelected?.pairId) {
        numMatches++;
        triggerSignalMatch = true;
        lockedCardIDs.push(firstSelected.id, secondSelected.id);
        resetFlipped();
      }
    }
    canFlip = numFlipped < 2;
    if (!hasStarted) {
      setTimer("start");
    }
    hasStarted = true;
  };

  const setTimer = (action: TimerAction) => {
    if (action === "start") {
      timer = setInterval(() => {
        time++;
      }, 1000);
    } else if (action === "stop") {
      clearInterval(timer);
    }
  };

  const resetFlipped = () => {
    causeReset = true;
    numFlipped = 0;
    firstSelected = undefined;
    secondSelected = undefined;
  };

  const handleFinish = () => {
    resetFlipped();
    time = 0;
    clearInterval(timer);
    lockedCardIDs = [];
    flipCount = 0;
    numMatches = 0;
    arrayOfCards = shuffleArray(arrayOfCards);
    finalTime = 0;
    hasStarted = false;
    triggerSignalMatch = false;
    roundOver = false;
    signalWin = false;
  };
</script>

{#if !roundOver}
  <div id="board">
    <div class="score-container">
      <h2 class="score-detail">Card Flips: {flipCount}</h2>
      <h2 class="score-detail">
        Matches
        {numMatches}
        /
        {arrayOfCards.length / 2}
      </h2>
      <h2 class="score-detail">Timer: {time} sec</h2>
    </div>
    {#each arrayOfCards as card}
      <CardComp
        cardItem={card}
        on:flipEvent={handleFlipEvent}
        allowFlip={canFlip}
        signalMatch={lockedCardIDs.includes(card.id) && triggerSignalMatch}
        won={signalWin}
        causeReset={!lockedCardIDs.includes(card.id) && causeReset} />
    {/each}
  </div>
{:else}
  <Modal title={"You've completed the challenge!"} on:closeModal={handleFinish}>
    <h3>You had {flipCount} flips.</h3>
    <h3>And you got all 9 matches in {finalTime} seconds.</h3>
  </Modal>
{/if}

<style>
  #board {
    width: 75rem;
    /* border: 0.063rem solid blue; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    perspective: 125rem;
    box-sizing: border-box;
  }

  .score-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .score-detail {
    display: flex;
    justify-content: center;
    width: 30%;
    padding: 0.5rem 0.188rem 0;
  }
</style>
