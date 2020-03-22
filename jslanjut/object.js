// let mahasiswa = {
//   nama: "fajar",
//   energi: 10,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(
//       `selamat makan ${this.nama}, energi anda sekarang ${this.energi}`
//     );
//   }
// };

// function Declaration
// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   this.mahasiswa = nama;
//   this.mahasiswa = energi;

//   mahasiswa.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(
//       `selamat makan ${this.nama} sekarang energi kamu ${this.energi}`
//     );

//     return mahasiswa;
//   };
// }

// let fajar = mahasiswa('fajar', 10);

// Prototype

// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// mahasiswa.prototype.makan = function(porsi) {
//   this.energi += porsi;
//   return `selamat makan ${this.nama}`;
// };

// mahasiswa.prototype.main = function(jam) {
//   this.energi -= jam;
//   return `selamat main ${this.nama}`;
// };

// mahasiswa.prototype.tidur = function(jam){
//   this.energi += jam * 2;
//   return `selamat tidur ${this.nama}`;
// }

// let fajar = new mahasiswa("fajar", 10);

// Versi Class

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `selamat makan ${this.nama}`;
  }

  main(jam) {
    this.energi -= jam;
    return `selamat main ${this.nama}`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `selamat tidur ${this.nama}`;
  }
}

let fajar = new Mahasiswa('Fajar', 10);