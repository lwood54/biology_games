<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Card } from "../../types/MemoryGameTypes";

  const dispatch = createEventDispatcher();

  export let cardItem: Card;
  export let causeReset: boolean;
  export let allowFlip: boolean = true;
  export let signalMatch: boolean = false;
  export let won: boolean = false;

  let showFront: boolean = true;
  let currentClass = "card";

  $: if (!showFront) {
    currentClass += " is-flipped";
    if (signalMatch) {
      currentClass += " spin";
    }
  }
  $: if (won) {
    currentClass = "card won";
  }

  $: if (causeReset) {
    showFront = causeReset;
    currentClass = "card";
  }
  const toggleShowFront = () => {
    let card = { id: cardItem.id, pairId: cardItem.pairID };
    if (!signalMatch) {
      dispatch("flipEvent", card); // send flip event so board can track which cards have been selected
      if (allowFlip) {
        showFront = !showFront;
      }
    }
  };
</script>

<!-- <div class={showFront ? 'card' : isMatch ? 'card is-flipped spin' : 'card is-flipped'}> -->
<div class={currentClass}>
  <div class="card__face card__face--front" on:click={toggleShowFront}>
    <img src="/images/general/eaton_eagle.png" alt="eagle" />
  </div>
  <div class="card__face card__face--back" on:click={toggleShowFront}>
    {#if cardItem.type === 'text'}
      <p class="card-text">{cardItem.back}</p>
    {:else}<img src={cardItem.src} alt={cardItem.back} />{/if}
  </div>
</div>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 10rem;
    margin: 0.188rem;
    position: relative;
    transition: transform 500ms;
    transform-style: preserve-3d; /*keeps orientation of entire card div flipping*/
    box-sizing: border-box;
  }

  .card-text {
    text-align: center;
  }

  .card__face {
    position: absolute;
    width: 12rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    backface-visibility: hidden;
  }

  .card__face--front {
    background: #0d233f;
    border: 0.063rem solid #77bd43;
  }

  .card__face--back {
    background: #77bd43;
    color: #0d233f;
    border: 0.063rem solid #0d233f;
    transform: rotateY(-180deg);
  }
  /* @keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
} */
  @keyframes spin {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(720deg);
    }
  }

  .card.is-flipped {
    /* animation: spin 2s infinite linear; */ /*JUST experimenting with these. each option works*/
    transform: rotateY(-180deg);
    /* transform: rotate(360deg); */
  }

  .spin {
    animation: spin 750ms linear;
  }
  .won {
    animation: spin 500ms infinite linear;
  }

  img {
    max-width: 90%;
    max-height: 100%;
  }
</style>
