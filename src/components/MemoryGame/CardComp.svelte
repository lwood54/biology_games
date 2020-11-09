<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Card } from "../../types/MemoryGameTypes";

  const dispatch = createEventDispatcher();

  export let cardItem: Card;
  export let causeReset: boolean;
  export let allowFlip: boolean = true;
  export let lockedCards: string[];

  let showFront: boolean = true;

  $: if (causeReset) {
    showFront = causeReset;
  }
  const toggleShowFront = () => {
    let card = { id: cardItem.id, pairId: cardItem.pairID };
    if (!lockedCards.includes(cardItem.id)) {
      dispatch("flipEvent", card);
      if (allowFlip) {
        showFront = !showFront;
      }
    }
  };
</script>

<div class={showFront ? 'card' : 'card is-flipped'}>
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

  .card.is-flipped {
    transform: rotateY(-180deg);
  }

  img {
    max-width: 90%;
    max-height: 100%;
  }
</style>
