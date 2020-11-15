<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { transcription } from "../../helpers";

  export let dnaTemplate: string;
  let mRNAAnswer: string;
  let wrong: boolean = false;

  const dispatch = createEventDispatcher();

  const handleSubmit = () => {
    console.log("running?");
    if (mRNAAnswer && transcription(dnaTemplate) === mRNAAnswer.toLowerCase()) {
      dispatch("submit");
    } else {
      wrong = true;
    }
  };
</script>

<div class="container">
  <h2 class="dna_template">DNA Template:</h2>
  <h2 class="dna_template">{dnaTemplate && dnaTemplate.toUpperCase()}</h2>
  {#if wrong}
    <h3 class="message">
      Please try again, remember A matches with U, T matches with A, C matches
      with G, and G matches with C.
    </h3>
  {/if}
  <div class="answer_container">
    <input
      class="answer_input"
      type="text"
      bind:value={mRNAAnswer}
      placeholder="mRNA codon?" />
  </div>
  <button class="submit_button" on:click={handleSubmit}>Submit</button>
</div>

<style>
  .container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 950px;
    height: 650px;
  }

  .dna_template {
    width: 100%;
    text-align: center;
    font-size: 2rem;
  }

  .answer_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .answer_input {
    width: 175px;
    border: none;
    border-bottom: 1px solid rgba(118, 123, 120, 0.899);
    padding: 2px;
    margin-left: 2px;
    font-size: 1.5rem;
    text-align: center;
    color: rgba(86, 91, 88, 0.947);
  }
  .answer_input::placeholder {
    color: rgba(118, 123, 120, 0.721);
    text-align: center;
  }
  .answer_input:focus {
    outline: none;
  }
  .submit_button {
    width: 250px;
    height: 35px;
    border-radius: 3px;
    border: none;
    box-shadow: 1px 1px 2px #0d233f;
    cursor: pointer;
    background-color: #77bd43;
    color: #0d233f;
  }
  .submit_button:active {
    background-color: #0d233f;
    color: #77bd43;
  }
  .submit_button:focus {
    outline: 0;
    background-color: #78bd43a1;
  }
  .message {
    width: 50%;
    text-align: center;
  }
</style>
