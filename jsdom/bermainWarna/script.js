const ubahWarna = document.getElementById("ubahWarna");

ubahWarna.addEventListener("click", function() {
  //   document.body.style.backgroundColor = "lightblue";
  document.body.classList.toggle("orange");
});

const newButton = document.createElement("button");
const newTextButton = document.createTextNode("Ubah warna random");
newButton.appendChild(newTextButton);
newButton.setAttribute("type", "button");
ubahWarna.after(newButton);

newButton.addEventListener("click", function() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  console.log(r);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sHijau.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sBiru.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});
