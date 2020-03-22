// getElementById
const judul = document.getElementById("judul");
judul.style.color = "white";
judul.style.backgroundColor = "orange";
judul.innerHTML = "Fajar Nur Rohman";

// getElementsByTagName
// berbentuk array
// const p = document.getElementsByTagName("p");
// p[2].style.backgroundColor = "red";
// for (let i = 0; i < p.length; i++) {
//   p[i].style.color = "white";
//   p[i].style.backgroundColor = "red";
// }

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "40px";

// getElementsByClassName
// berbentuk array
const p1 = document.getElementsByClassName("p1");
p1[0].style.backgroundColor = "blue";
p1[0].innerHTML = "ini diubah di js";

// querySelector
// mengembalikan satu element
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.innerHTML = "query selector";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.color = "white";
li2.style.backgroundColor = "orange";

// querySelectorAll
const p = document.querySelectorAll("p");
p[2].style.color = "white";
p[2].style.backgroundColor = "green";
p[2].innerHTML = "ini querySelectorAll";
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "green";
}
