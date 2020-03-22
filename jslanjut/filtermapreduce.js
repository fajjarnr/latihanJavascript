const angka = [-1, 2, 6, 4, -6, 3, -2, 0, 9, 7];

// const newAngka = [];

// for
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// Filter
// const newAngka = angka.filter(a =>  a >= 3);
// console.log(newAngka);

//  Map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// Reduce
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(newAngka);

// Method Chain
// cari angka > 5
// kalikan 3
// tambahkan
const hasil = angka
  .filter(a => a > 5)
  .map(a => a * 3)
  .reduce((acc, cur) => acc + cur);

console.log(hasil);
