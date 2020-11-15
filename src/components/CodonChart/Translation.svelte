<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { CodonMatch } from "../../types/CodonChartTypes";
  export let score: { numAttempts: number; numCorrect: number };
  export let codonMatch: CodonMatch;

  const dispatch = createEventDispatcher();
  let answer = "";

  let match: boolean = false;
  let wrong: boolean = false;

  let first_letter = "first_base_letter";
  let third_letter = "third_base_letter";
  let first_u_row = "first_base_row";
  let first_c_row = "first_base_row";
  let first_a_row = "first_base_row";
  let first_g_row = "first_base_row";
  let second_u_col = "codon_letter";
  let second_c_col = "codon_letter";
  let second_a_col = "codon_letter";
  let second_g_col = "codon_letter";
  let colU = "colU";
  let colC = "colC";
  let colA = "colA";
  let colG = "colG";
  let firstBaseSelected = "";
  let secondBaseSelected = "";
  let thirdBaseSelected = "";

  $: if (match || wrong) {
    setTimeout(() => {
      dispatch("submit");
    }, 500);
  }

  const handleFirstBaseClick = (row: string) => {
    if (firstBaseSelected === "") {
      firstBaseSelected = row;
      first_letter = "first_letter_selected";

      switch (row) {
        case "u":
          resetFirstRow();
          first_u_row += " first_selected";
          break;
        case "c":
          resetFirstRow();
          first_c_row += " first_selected";
          break;
        case "a":
          resetFirstRow();
          first_a_row += " first_selected";
          break;
        case "g":
          resetFirstRow();
          first_g_row += " first_selected";
          break;
        default:
          break;
      }
    }
  };
  const handleSecondBaseSelected = (col: string) => {
    if (firstBaseSelected !== "" && secondBaseSelected === "") {
      secondBaseSelected = col;
      switch (col) {
        case "u":
          resetSecondCol();
          second_u_col = "second_selected";
          colU += " colSelected";
          break;
        case "c":
          resetSecondCol();
          second_c_col = "second_selected";
          colC += " colSelected";
          break;
        case "a":
          resetSecondCol();
          second_a_col = "second_selected";
          colA += " colSelected";
          break;
        case "g":
          resetSecondCol();
          second_g_col = "second_selected";
          colG += " colSelected";
          break;
        default:
          break;
      }
      second_u_col += "s rm_border";
      second_c_col += "s rm_border";
      second_a_col += "s rm_border";
      second_g_col += "s rm_border";
    }
  };
  const handleThirdBaseSelected = (row: string) => {
    let allowClick = false;
    let rowNum = row.split("")[1];
    let parent: HTMLElement;
    switch (rowNum) {
      case "1":
        parent = document.getElementById("U_row");
        break;
      case "2":
        parent = document.getElementById("C_row");
        break;
      case "3":
        parent = document.getElementById("A_row");
        break;
      case "4":
        parent = document.getElementById("G_row");
        break;
      default:
        break;
    }
    allowClick = parent.classList.contains("first_selected");
    if (
      firstBaseSelected !== "" &&
      secondBaseSelected !== "" &&
      thirdBaseSelected === "" &&
      allowClick
    ) {
      third_letter = "third_letter_selected";
      thirdBaseSelected = row;
    }
  };
  const resetFirstRow = () => {
    first_u_row = "first_base_row";
    first_c_row = "first_base_row";
    first_a_row = "first_base_row";
    first_g_row = "first_base_row";
  };
  const resetSecondCol = () => {
    second_u_col = "codon_letter";
    second_c_col = "codon_letter";
    second_a_col = "codon_letter";
    second_g_col = "codon_letter";
    colU = "colU";
    colC = "colC";
    colA = "colA";
    colG = "colG";
  };
  const resetAll = () => {
    firstBaseSelected = "";
    secondBaseSelected = "";
    thirdBaseSelected = "";
    first_letter = "first_base_letter";
    third_letter = "third_base_letter";
    resetFirstRow();
    resetSecondCol();
    answer = "";
  };

  const handleSubmit = () => {
    score.numAttempts++;
    if (answer.toLowerCase() === codonMatch.amino_acid) {
      score.numCorrect++;
      match = true;
      signalMatch("match");
    } else {
      wrong = true;
      signalMatch("wrong");
    }
  };

  const signalMatch = (status: string) => {
    let amino_acids = document.getElementsByClassName("amino_acids");
    for (let i = 0; i < amino_acids.length; i++) {
      if (status === "match") {
        (amino_acids[i] as HTMLElement).style.backgroundColor = "#50f4847c";
      } else if (status === "wrong") {
        (amino_acids[i] as HTMLElement).style.backgroundColor = "red";
      } else if (status === "reset") {
        (amino_acids[i] as HTMLElement).style.backgroundColor = "transparent";
      }
    }
  };
</script>

<div class="container">
  <div class="codon_chart">
    <div class="first_base_title">
      <h1>first base</h1>
    </div>
    <div class="chart_container">
      <div class="second_base_title">
        <h1>second base</h1>
      </div>
      <div class="second-base">
        <div class="resetBtn_container">
          <button class="reset_button" on:click={resetAll}>Reset</button>
        </div>
        <div
          class={second_u_col}
          on:click={() => handleSecondBaseSelected('u')}>
          <h2>U</h2>
        </div>
        <div
          class={second_c_col}
          on:click={() => handleSecondBaseSelected('c')}>
          <h2>C</h2>
        </div>
        <div
          class={second_a_col}
          on:click={() => handleSecondBaseSelected('a')}>
          <h2>A</h2>
        </div>
        <div
          class={second_g_col}
          on:click={() => handleSecondBaseSelected('g')}>
          <h2>G</h2>
        </div>
        <div class="codon_letter_filler" />
      </div>
      <div class={first_u_row} id="U_row">
        <div class={first_letter} on:click={() => handleFirstBaseClick('u')}>
          <h2>U</h2>
        </div>
        <div class="row_container">
          <div
            class={thirdBaseSelected !== 'u1' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Phe</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Ser</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Tyr</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Cys</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('u1')}>
              U
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'c1' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Phe</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Ser</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Tyr</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Cys</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('c1')}>
              C
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'a1' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Leu</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Ser</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">STOP</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">STOP</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('a1')}>
              A
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'g1' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Leu</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Ser</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">STOP</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Trp</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('g1')}>
              G
            </div>
          </div>
        </div>
      </div>
      <div class={first_c_row} id="C_row">
        <div class={first_letter} on:click={() => handleFirstBaseClick('c')}>
          <h2>C</h2>
        </div>
        <div class="row_container">
          <div
            class={thirdBaseSelected !== 'u2' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Leu</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Pro</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">His</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Arg</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('u2')}>
              U
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'c2' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Leu</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Pro</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">His</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Arg</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('c2')}>
              C
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'a2' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Leu</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Pro</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Gln</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Arg</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('a2')}>
              A
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'g2' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Leu</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Pro</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Gln</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Arg</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('g2')}>
              G
            </div>
          </div>
        </div>
      </div>
      <div class={first_a_row} id="A_row">
        <div class={first_letter} on:click={() => handleFirstBaseClick('a')}>
          <h2>A</h2>
        </div>
        <div class="row_container">
          <div
            class={thirdBaseSelected !== 'u3' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Ile</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Thr</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Asn</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Ser</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('u3')}>
              U
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'c3' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Ile</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Thr</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Asn</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Ser</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('c3')}>
              C
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'a3' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Ile</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Thr</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Lys</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Arg</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('a3')}>
              A
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'g3' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Met</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Thr</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Lys</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Arg</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('g3')}>
              G
            </div>
          </div>
        </div>
      </div>
      <div class={first_g_row} id="G_row">
        <div class={first_letter} on:click={() => handleFirstBaseClick('g')}>
          <h2>G</h2>
        </div>
        <div class="row_container">
          <div
            class={thirdBaseSelected !== 'u4' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Val</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Ala</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Asp</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Gly</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('u4')}>
              U
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'c4' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Val</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Ala</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Asp</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Gly</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('c4')}>
              C
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'a4' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Val</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Ala</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Glu</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Gly</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('a4')}>
              A
            </div>
          </div>
          <div
            class={thirdBaseSelected !== 'g4' ? 'amino_acids_row' : 'amino_acids_row third_selected'}>
            <div class={colU}>
              <div class="amino_acids">Val</div>
            </div>
            <div class={colC}>
              <div class="amino_acids">Ala</div>
            </div>
            <div class={colA}>
              <div class="amino_acids">Glu</div>
            </div>
            <div class={colG}>
              <div class="amino_acids">Gly</div>
            </div>
            <div
              class={third_letter}
              on:click={() => handleThirdBaseSelected('g4')}>
              G
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="third_base_title">
      <h1>third base</h1>
    </div>
  </div>
  <div id="codon_container">
    <h1 class="codon">{codonMatch.codon.toUpperCase()}</h1>
    <input
      bind:value={answer}
      class="answer_input"
      type="text"
      placeholder="amino acid?" />
  </div>
  <button class="submit_button" on:click={handleSubmit}>submit</button>
</div>

<style>
  .container {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 770px;
  }
  #codon_container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .codon {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
  .codon_chart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }
  .first_base_title {
    transform: rotate(-90deg);
  }
  .second_base_title {
    text-align: center;
  }
  .third_base_title {
    transform: rotate(90deg);
  }
  .resetBtn_container {
    display: flex;
    justify-content: center;
  }
  .reset_button {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: 1px 1px 3px black;
    background-color: #0d233f;
    color: #77bd43;
    box-sizing: border-box;
    cursor: pointer;
  }
  .reset_button:active {
    border: none;
    box-shadow: none;
  }
  .reset_button:focus {
    outline: 0;
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
  .rm_border {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
  }
  .first_base_row {
    width: 600px;
    height: 100px;
    display: flex;
    box-sizing: border-box;
  }
  .second-base {
    width: 600px;
    height: 100px;
    display: flex;
    margin-bottom: 10px;
    justify-content: center;
    box-sizing: border-box;
  }
  .codon_letter {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-shadow: 1px 1px 3px black;
    box-sizing: border-box;
    cursor: pointer;
  }
  .codon_letter:active {
    box-shadow: none;
  }
  /* use this when adding s dynamically to remove certain styling */
  .codon_letters {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .codon_letter_filler {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .first_base_letter {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-shadow: 1px 1px 3px black;
    cursor: pointer;
  }
  .first_base_letter:active {
    border: none;
    box-shadow: none;
  }
  .first_letter_selected {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .third_base_letter {
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    box-shadow: 1px 1px 3px black;
    cursor: pointer;
  }
  .third_base_letter:active {
    border: none;
    box-shadow: none;
  }
  .third_letter_selected {
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: none;
    box-shadow: none;
  }
  .row_container {
    display: flex;
    flex-direction: column;
  }
  .amino_acids_row {
    width: 500px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .amino_acids {
    margin: 0;
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .first_selected {
    background-color: #77bc437c;
    box-shadow: none;
    border: none;
  }
  .second_selected {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 3px black;
    box-sizing: border-box;
    background-color: #135dc668;
    box-shadow: none;
    border-radius: none;
    border: none;
  }
  .third_selected {
    background-color: yellow;
    box-shadow: none;
    border: none;
  }
  .colSelected {
    background-color: #135dc668;
    border-radius: none;
  }
</style>
