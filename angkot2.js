let jmlAngkot = 15;
let angkotBeroprasi = 9;
let noAngkot = 1;

while(noAngkot <= angkotBeroprasi){
    console.log('Angkot No. '+ noAngkot + ' beroprasi dengan baik');
    noAngkot++;
}

for(noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. '+ noAngkot + ' sedang tidak beroprasi');
}

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroprasi){
        console.log('Angkot No. ' +noAngkot+ ' beroprasi dengan baik');
    } else{
        console.log('Angkot No. '+noAngkot+ ' sedang tidak beroprasi');
    }
}