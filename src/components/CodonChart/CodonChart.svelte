<script>
  import { onMount } from "svelte";

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

  let codon;
  let codon_base_1 = "";
  let codon_base_2 = "";
  let codon_base_3 = "";

  onMount(() => {
    codon = document.getElementById("codon_container").childNodes[0]
      .textContent;
    [codon_base_1, codon_base_2, codon_base_3] = codon.split("");
    console.log("codon_base_1: ", codon_base_1);
  });

  const handleFirstBaseClick = (row) => {
    console.log("firstBaseSelected: ", firstBaseSelected);
    if (firstBaseSelected === "") {
      firstBaseSelected = row;
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

  const handleSecondBaseSelected = (col) => {
    console.log("secondBaseSelected: ", secondBaseSelected);
    if (firstBaseSelected !== "" && secondBaseSelected === "") {
      secondBaseSelected = col;
      switch (col) {
        case "u":
          resetSecondCol();
          second_u_col += " second_selected";
          colU += " colSelected";
          break;
        case "c":
          resetSecondCol();
          second_c_col += " second_selected";
          colC += " colSelected";
          break;
        case "a":
          resetSecondCol();
          second_a_col += " second_selected";
          colA += " colSelected";
          break;
        case "g":
          resetSecondCol();
          second_g_col += " second_selected";
          colG += " colSelected";
          break;
        default:
          break;
      }
    }
  };

  const handleThirdBaseSelected = (row) => {
    if (
      firstBaseSelected !== "" &&
      secondBaseSelected !== "" &&
      thirdBaseSelected === ""
    ) {
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
  };
</script>

<div class="container">
  <div class="codon_chart">
    <div class="second-base">
      <div class={second_u_col} on:click={() => handleSecondBaseSelected('u')}>
        <h2>U</h2>
      </div>
      <div class={second_c_col} on:click={() => handleSecondBaseSelected('c')}>
        <h2>C</h2>
      </div>
      <div class={second_a_col} on:click={() => handleSecondBaseSelected('a')}>
        <h2>A</h2>
      </div>
      <div class={second_g_col} on:click={() => handleSecondBaseSelected('g')}>
        <h2>G</h2>
      </div>
    </div>
    <div class={first_u_row} id="U_row">
      <div class="first_base_letter" on:click={() => handleFirstBaseClick('u')}>
        <h2>U</h2>
      </div>
      <div class="row_container">
        <div
          class={thirdBaseSelected !== 'u1' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('u1')}>
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
          <div class="amino_acids">U</div>
        </div>
        <div
          class={thirdBaseSelected !== 'c1' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('c1')}>
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
          <div class="amino_acids">C</div>
        </div>
        <div
          class={thirdBaseSelected !== 'a1' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('a1')}>
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
          <div class="amino_acids">A</div>
        </div>
        <div
          class={thirdBaseSelected !== 'g1' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('g1')}>
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
          <div class="amino_acids">G</div>
        </div>
      </div>
    </div>
    <div class={first_c_row} id="C_row">
      <div class="first_base_letter" on:click={() => handleFirstBaseClick('c')}>
        <h2>C</h2>
      </div>
      <div class="row_container">
        <div
          class={thirdBaseSelected !== 'u2' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('u2')}>
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
          <div class="amino_acids">U</div>
        </div>
        <div
          class={thirdBaseSelected !== 'c2' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('c2')}>
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
          <div class="amino_acids">C</div>
        </div>
        <div
          class={thirdBaseSelected !== 'a2' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('a2')}>
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
          <div class="amino_acids">A</div>
        </div>
        <div
          class={thirdBaseSelected !== 'g2' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('g2')}>
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
          <div class="amino_acids">G</div>
        </div>
      </div>
    </div>
    <div class={first_a_row} id="A_row">
      <div class="first_base_letter" on:click={() => handleFirstBaseClick('a')}>
        <h2>A</h2>
      </div>
      <div class="row_container">
        <div
          class={thirdBaseSelected !== 'u3' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('u3')}>
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
          <div class="amino_acids">U</div>
        </div>
        <div
          class={thirdBaseSelected !== 'c3' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('c3')}>
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
          <div class="amino_acids">C</div>
        </div>
        <div
          class={thirdBaseSelected !== 'a3' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('a3')}>
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
          <div class="amino_acids">A</div>
        </div>
        <div
          class={thirdBaseSelected !== 'g3' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('g3')}>
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
          <div class="amino_acids">G</div>
        </div>
      </div>
    </div>
    <div class={first_g_row} id="G_row">
      <div class="first_base_letter" on:click={() => handleFirstBaseClick('g')}>
        <h2>G</h2>
      </div>
      <div class="row_container">
        <div
          class={thirdBaseSelected !== 'u4' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('u4')}>
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
          <div class="amino_acids">U</div>
        </div>
        <div
          class={thirdBaseSelected !== 'c4' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('c4')}>
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
          <div class="amino_acids">C</div>
        </div>
        <div
          class={thirdBaseSelected !== 'a4' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('a4')}>
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
          <div class="amino_acids">A</div>
        </div>
        <div
          class={thirdBaseSelected !== 'g4' ? 'amino_acids_row' : 'amino_acids_row third_selected'}
          on:click={() => handleThirdBaseSelected('g4')}>
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
          <div class="amino_acids">G</div>
        </div>
      </div>
    </div>
  </div>
  <div id="codon_container">
    <h2>UAC</h2>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .codon_chart {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }
  .first_base_row {
    width: 600px;
    height: 100px;
    display: flex;
    box-sizing: border-box;
    border: 1px solid black;
    cursor: pointer;
  }
  .second-base {
    width: 600px;
    height: 100px;
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
  }

  .codon_letter {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
    box-sizing: border-box;
  }

  .first_base_letter {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row_container {
    display: flex;
    flex-direction: column;
  }

  .amino_acids_row {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .amino_acids {
    margin: 0;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
  }

  .first_selected {
    background-color: #77bc437c;
  }

  .second_selected {
    background-color: #135dc668;
  }

  .third_selected {
    background-color: yellow;
  }

  .colSelected {
    background-color: #135dc668;
  }
</style>
