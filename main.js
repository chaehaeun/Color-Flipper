const body = document.querySelector("body");
const viewBox = document.querySelector(".viewHexCode");
const changeBtn = document.querySelector(".changeColor");

function onAdd() {
  document.querySelector("span").remove();
  pickRandomCode();
}

function pickRandomCode() {
  const codeResult = getRandom();
  const hexName = document.createElement("span");
  hexName.innerText = `${codeResult}`;
  viewBox.append(hexName);
  body.style.backgroundColor = `${codeResult}`;
}

function getRandom() {
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  return hex;
}

function clickCopy() {
  const txt = document.querySelector(".viewHexCode span");
  const alert = document.querySelector(".alertCopy");
  navigator.clipboard.writeText(txt.innerText);
  alert.classList.add("on");
  setTimeout(() => {
    alert.classList.remove("on");
  }, 1000);
}

window.addEventListener("load", onAdd);
changeBtn.addEventListener("click", onAdd);
viewBox.addEventListener("click", clickCopy);
