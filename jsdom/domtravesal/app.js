// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener('click', function(){
//     card.style.display = "none";
// })

// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function(e) {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// close.forEach(function(el) {
//   // el => element
//   el.addEventListener("click", function(e) {
//     // e => event
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); // preventDefault mencegah event default
//     e.stopPropagation(); // menghentikan event
//   });
// });

// const cards = document.querySelectorAll(".card");

// cards.forEach(function(card) {
//   card.addEventListener("click", function(e) {
//     alert("ok");
//   });
// });


// event Bubbling
const container = document.querySelector(".container");

container.addEventListener("click", function(e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
  console.log(e.target)
});
