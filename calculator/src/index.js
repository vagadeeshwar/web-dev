const btnList = document.querySelectorAll("button");
const calcArea = document.querySelector("#calc-area");
const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

btnList.forEach((btn) => {
  btn.addEventListener("click", clickHandler);
});
function clickHandler(e) {
  let text = e.target.innerText;
  let calcAreaText = calcArea.textContent;
  if (text === "C") {
    calcArea.textContent = "0";
  } else if (text === "\u2190") {
    calcArea.textContent = calcAreaText.slice(0, -1);
    if (!calcArea.textContent) {
      calcArea.textContent = "0";
    }
  } else if (numArr.some((num) => String(num) === text)) {
    if (calcAreaText.trim() === "0") {
      calcArea.textContent = text;
    } else if (text === "0" && calcAreaText.slice(-1) === "\u00f7") {
    } else {
      calcArea.textContent += text;
    }
  } else if (
    text === "\u00f7" ||
    text === "\u00d7" ||
    text === "\u002b" ||
    text === "\u2212"
  ) {
    if (numArr.some((num) => calcAreaText.slice(-1) === String(num))) {
      calcArea.textContent += text;
    }
  } else {
    if (!numArr.some((num) => calcAreaText.slice(-1) === String(num))) {
      calcAreaText = calcAreaText.slice(0, -1);
    }
    calcAreaText = calcAreaText.replaceAll("\u2212", "-");
    calcAreaText = calcAreaText.replaceAll("\u00f7", "/");
    calcAreaText = calcAreaText.replaceAll("\u00d7", "*");
    calcArea.textContent = String(eval(calcAreaText));
  }
}
