// let mahasiswa = function(nama) {
//   alert("halo " + nama);
// };

// mahasiswa("fajar");

// let tampilNama = (nama) => {
//     return `halo ${nama}`;
// }

// console.log(tampilNama('fajar'));

// let tampilNama = (nama, waktu) => `halo, ${nama} selamat ${waktu}`;

// console.log(tampilNama('Fajar', 'pagi'));

// let tampilNama = () => `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ["fajar nur", "nur rohman", "rohman"];

// let jmlHuruf = mahasiswa.map(function(nama) {
//   return nama.length;
// });

// let jmlHuruf = mahasiswa.map( nama => nama.length);

// let jmlHuruf = mahasiswa.map(nama => ({
//   //   nama: nama,
//   nama,
//   jumlahHuruf: nama.length
// }));

// console.table(jmlHuruf);

// const Mahasiswa = function() {
//   (this.nama = "Fajar Nur Rohman"),
//     (this.umur = 20),
//     (this.sayHello = function() {
//       console.log(`halo nama saya ${this.nama} umur saya ${this.umur} tahun`);
//     });
// };

// Arrow fucntion tidak mempunyai konsep this
// tetapi didalam method
// const Mahasiswa = function() {
//     (this.nama = "Fajar Nur Rohman"),
//       (this.umur = 20),
//       (this.sayHello = () => {
//         // Arrow function akan mencari this di lexical scope
//         console.log(`halo nama saya ${this.nama} umur saya ${this.umur} tahun`);
//       });

//     // setInterval( () => {
//     //     console.log(this.umur++);
//     // }, 1000);
//   };

// const fajar = new Mahasiswa();

const box = document.querySelector(".box");

box.addEventListener("click", function() {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu); // toggle untuk menambahkan/menghilangkan class

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
