// let hari = ['senin', 'selasa', 'rabu', 'kamis'];

// for(let i = 0; i < hari.length; i++){
//     console.log(hari[i]);
// }

// method pada array
//1. join -> mengubah ke string
// let hari = ["senin", "selasa", "rabu", "kamis"];

// //2. push -> menambah & pop -> menghapus
// hari.push("jumat", "sabtu");
// hari.pop();

// //3. unshift -> menambah elemen pertama & shift -> menghapus elemen awal
// hari.unshift("minggu");
// hari.shift();

// //4. slice & splice
// hari.splice(2,2,'hai');
// console.log(hari.join(" | "));

// foreach
// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// angka.forEach(function(e) {
//   console.log(e);
// });

// Map -> mengembalikan nilai array
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const angka2 = angka.map(function(e) {
  return e * 2;
});

console.log(angka2.join(" - "));

const mhs = {
    nama : "fajar",
    umur : 20
}