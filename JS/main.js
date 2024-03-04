import { arr1, arr2, arr3, embaralhar } from "/JS/0x626172616C686F.js";
import {x726573756C74446973706C6179} from "/JS/0x6D6F64616C.js"

//btn.removeEventListener("click", bgChange);
const blockOne = document.getElementById("a");
const blockTwo = document.getElementById("b");
const blockThree = document.getElementById("c");
const title = document.querySelector("#title");
const name = document.querySelector(".card1");
const cca = document.querySelector(".card2");
const ccb = document.querySelector(".card3");
const tok = document.querySelector("#b1");
const tokk = document.querySelector("#b2");
const took = document.querySelector("#b3");
const init = document.querySelector("#init");
const play = document.querySelector("#confimar");

//######################
let keyCardOne = false;
let keyCardTwo = false;
let keyCardThree = false;

let arr1Part2 = new Array();
let arr2Part2 = new Array();
let arr3Part2 = new Array();

let arr1Part3 = new Array();
let arr2Part3 = new Array();
let arr3Part3 = new Array();

//#################3Alterna as cores do cartões#############################
function changeColor1() {
  play.style.visibility = "visible";
  name.style.background = "blue";
  cca.style.background = "white";
  ccb.style.background = "white";

  keyCardOne = true;
  keyCardTwo = false;
  keyCardThree = false;
}
//###############################
function changeColor2() {
  play.style.visibility = "visible";
  name.style.background = "white";
  cca.style.background = "blue";
  ccb.style.background = "white";
  keyCardOne = false;
  keyCardTwo = true;
  keyCardThree = false;
}

//##############################
function changeColor3() {
  play.style.visibility = "visible";
  name.style.background = "white";
  cca.style.background = "white";
  ccb.style.background = "blue";
  keyCardOne = false;
  keyCardTwo = false;
  keyCardThree = true;
}

//#################### Exibe os card numericos #################
function iniciar() {
  for (const x of arr1) {
    const li = document.createElement("li");
    li.textContent = x;
    setTimeout(() => {
      blockOne.appendChild(li);
    }, 500);

    // blockOne.appendChild(li);
  }
  for (const x of arr2) {
    const li = document.createElement("li");
    li.textContent = x;
    setTimeout(() => {
      blockTwo.appendChild(li);
    }, 1000);
  }
  for (const x of arr3) {
    const li = document.createElement("li");
    li.textContent = x;
    setTimeout(() => {
      blockThree.appendChild(li);
    }, 1500);
  }
  init.style.display = "none";
  tok.style.visibility = "visible";
  tokk.style.visibility = "visible";
  took.style.visibility = "visible";
}

//###################################
function segundaEtapa() {
  //#################################
  while (
    (blockOne.hasChildNodes(),
    blockTwo.hasChildNodes(),
    blockThree.hasChildNodes())
  ) {
    blockOne.removeChild(blockOne.firstChild);
    blockTwo.removeChild(blockTwo.firstChild);
    blockThree.removeChild(blockThree.firstChild);
  }
  //############### primeiro teste #########################
  if (keyCardOne == true) {
    keyCardOne = false;
    embaralhar(arr1Part2, arr2Part2, arr3Part2, arr2, arr1, arr3);

    for (const x of arr1Part2) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockOne.appendChild(li);
      }, 500);
    }

    for (const x of arr2Part2) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockTwo.appendChild(li);
      }, 1000);
    }

    for (const x of arr3Part2) {
      //
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockThree.appendChild(li);
      }, 1500);
    }
    name.style.background = "white";
  }

  //#################### segundo teste #################
  if (keyCardTwo == true) {
    embaralhar(arr1Part2, arr2Part2, arr3Part2, arr1, arr2, arr3);
    keyCardTwo = false;

    for (const x of arr1Part2) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockOne.appendChild(li);
      }, 500);
    }
    for (const x of arr2Part2) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockTwo.appendChild(li);
      }, 1000);
    }
    for (const x of arr3Part2) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockThree.appendChild(li);
      }, 1500);
    }
    cca.style.background = "white";
  }

  //#################### terceiro teste ####################
  if (keyCardThree == true) {
    embaralhar(arr1Part2, arr2Part2, arr3Part2, arr1, arr3, arr2);
    keyCardThree = false;

    for (const x of arr1Part2) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockOne.appendChild(li);
      }, 500);
    }
    for (const x of arr2Part2) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockTwo.appendChild(li);
      }, 1000);
    }
    for (const x of arr3Part2) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockThree.appendChild(li);
      }, 1500);
    }
    ccb.style.background = "white";
  }
  title.innerHTML = "Second stage";
  play.removeEventListener("click", segundaEtapa);
  play.style.visibility = "hidden";
}

play.addEventListener("click", segundaEtapa);

//################### terceira etapa ###################
function terceiraEtapa() {
  //#########################################################
  while (
    (blockOne.hasChildNodes(),
    blockTwo.hasChildNodes(),
    blockThree.hasChildNodes())
  ) {
    blockOne.removeChild(blockOne.firstChild);
    blockTwo.removeChild(blockTwo.firstChild);
    blockThree.removeChild(blockThree.firstChild);
  }
  //############### primeiro teste #########################
  if (keyCardOne == true) {
    keyCardOne = false;

    embaralhar(
      arr1Part3,
      arr2Part3,
      arr3Part3,
      arr2Part2,
      arr1Part2,
      arr3Part2
    );

    for (const x of arr1Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockOne.appendChild(li);
      }, 500);
    }

    for (const x of arr2Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockTwo.appendChild(li);
      }, 1000);
    }

    for (const x of arr3Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockThree.appendChild(li);
      }, 1500);
    }
    name.style.background = "white";
    play.removeEventListener("click", terceiraEtapa);
    title.innerHTML = "Third Stage";
    play.innerHTML = "Show my number";
  }

  //#################### segundo teste #################
  if (keyCardTwo == true) {
    embaralhar(
      arr1Part3,
      arr2Part3,
      arr3Part3,
      arr1Part2,
      arr2Part2,
      arr3Part2
    );
    keyCardTwo = false;

    for (const x of arr1Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockOne.appendChild(li);
      }, 500);
    }

    for (const x of arr2Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockTwo.appendChild(li);
      }, 1000);
    }

    for (const x of arr3Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockThree.appendChild(li);
      }, 1500);
    }
    cca.style.background = "white";
    play.removeEventListener("click", terceiraEtapa);
    title.innerHTML = "Third Stage";
    play.innerHTML = "Show my number";
  }

  //#################### terceiro teste ####################
  if (keyCardThree == true) {
    embaralhar(
      arr1Part3,
      arr2Part3,
      arr3Part3,
      arr1Part2,
      arr3Part2,
      arr2Part2
    );
    keyCardThree = false;

    for (const x of arr1Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockOne.appendChild(li);
      }, 500);
    }
    for (const x of arr2Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockTwo.appendChild(li);
      }, 1000);
    }

    for (const x of arr3Part3) {
      const li = document.createElement("li");
      li.textContent = x;
      setTimeout(() => {
        blockThree.appendChild(li);
      }, 1500);
    }
    ccb.style.background = "white";
    play.removeEventListener("click", terceiraEtapa);
    title.innerHTML = "Terceira Etapa";
    play.innerHTML = "Mostrar Seu Número";
  }
  // play.removeEventListener("click", terceiraEtapa);
  // title.innerHTML = "Terceira Etapa";
  // play.innerHTML = "Mostrar Seu Número";
}

play.addEventListener("click", terceiraEtapa);

function showNumber() {
  if (keyCardOne == true) {
    x726573756C74446973706C6179(arr1Part3[3]);
  }

  if (keyCardTwo == true) {
    x726573756C74446973706C6179(arr2Part3[3]);
  }

  if (keyCardThree == true) {
    x726573756C74446973706C6179(arr3Part3[3]);
  }
}

play.addEventListener("click", showNumber);

init.addEventListener("click", iniciar);
tok.addEventListener("click", changeColor1);
tokk.addEventListener("click", changeColor2);
took.addEventListener("click", changeColor3);
