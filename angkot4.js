let noAngkot = 1;
let jmlAngkot = 10;
let angkotBeroprasi = 6;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroprasi && noAngkot !== 5){
        console.log('Angkot No. ' +noAngkot+ ' beroprasi dengan baik');
    } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log('Angkot No. ' +noAngkot+ ' sedang lembur');
    }else{
        console.log('Angkot No. ' +noAngkot+ ' sedang tidak beroprasi');
    }
}