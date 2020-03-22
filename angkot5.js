let penumpang = [];

function tambahPenumpang(namaPenumpang, penumpang) {
  if (penumpang == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + " sudah ada");
        return penumpang;
      } else if (i == penumpang[i] - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
}

function hapusPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("tidak ada penumpang");
  } else {
    for (let i = 0; i < penumpang.length; penumpang++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada");
        return penumpang;
      }
    }
  }
}
