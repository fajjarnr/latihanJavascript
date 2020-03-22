console.log('hello world');

let nama = 'fajar';
let umur = 20;

let ulang = true;
while(ulang){
    console.log('hello world');
    ulang = confirm('lagi?');
}

let nilaiAwal = 1;
while (nilaiAwal <= 10) {
    console.log('hello world ' + nilaiAwal + 'x');
    nilaiAwal++;
}

for(nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++){
    console.log('helo ' + nilaiAwal + 'x');
}

let angka = prompt('masukan angka :');

if(angka % 2 == 0){
    alert(angka + ' adalah bilangan Genap');
}else if( angka % 2 === 1 ){
    alert(angka + ' adalah bilangan Ganjil');
}else{
    alert('yang anda masukan bukan angka');
}

