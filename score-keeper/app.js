const h1 = document.querySelector("h1");
const btn = document.querySelector("#btn");
const select = document.querySelector("#num");

for (let i = 1; i <= 20; i++) {
  const opt = document.createElement("option");
  opt.text = i;
  select.appendChild(opt);
}

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  const txt1 = h1.innerText.split(" ");

  if (e.target.innerText.slice(-3) === "One") {
    txt1[0] = `${Number(txt1[0]) + 1}`;
    h1.innerText = txt1.join(" ");
    if (txt1[0] === select.textContent) {
      const temp = btn.childNodes;
      temp.item(0).classList.toggle("disabled");
    }
  } else if (e.target.text === "Reset") {
  } else {
  }
});
