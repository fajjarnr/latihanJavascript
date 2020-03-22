// const p3 = document.querySelector(".p3");

// function ubahWarna(){
//     p3.style.backgroundColor = "orange";
// };
// function ubahWarnaP2(){
//     p2.style.backgroundColor = "red";
// };

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnaP2;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function() {
  const ul = document.querySelector("section#b ul");
  const newLi = document.createElement("li");
  const newTextLi = document.createTextNode("item baru");
  newLi.appendChild(newTextLi);
  ul.appendChild(newLi);
});

// ==> perbedaan event handler  & event listener

// event handler akan menimpa event pertama
const p3 = document.querySelector(".p3");
// p3.onclick = function() {
//   p3.style.backgroundColor = "red";
// };
// p3.onclick = function() {
//   p3.style.color = "orange";
// };

// event listener tidak menimpa event
p3.addEventListener("dblclick", function() {
  p3.style.backgroundColor = "red";
});

p3.addEventListener("mouseleave", function() {
    p3.style.color = "white";
  });
