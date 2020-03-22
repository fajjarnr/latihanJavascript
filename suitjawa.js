let tanya = true;

while (tanya) {
  //menangkap pilihan user
  let p = prompt("pilih : gajah, semut, orang");

  // menangkap pilihan komputer
  // menangkap bilangan random
  let comp = Math.random();
  if (comp <= 0.34) {
    comp = "gajah";
  } else if (comp <= 0.37) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  console.log(comp);

  // menentukan rules
  let hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    hasil = comp == "orang" ? "MENANG" : "KALAH";
  } else if (p == "orang") {
    hasil = comp == "semut" ? "MENANG" : "KALAH";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG";
  } else {
    hasil = "Masukan Pilihan yang salah";
  }

  // tampilkan hasilnya
  alert(
    "Kamu memilih : " +
      p +
      " dan komputer memilih " +
      comp +
      "\nMaka hasilnya : kamu " +
      hasil
  );

  tanya = confirm("mau main lagi ?");
}
alert("terima kasih sudah bermain");
