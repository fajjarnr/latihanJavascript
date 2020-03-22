// ambil semua element vide
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// console.log(videos);

// pilih yang javascript lanjutan
let jsLanjut = videos
  .filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi video
  .map(item => item.dataset.duration)

  // ubah durasi menjadi float, lalu ubah menit menjadi detik
  .map(waktu => {
    // 10:30 => 10, 30 (di split)
    const parts = waktu.split(":").map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah format detik menjadi menit
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const jmlVideo = videos.filter(video =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;

const durasi = document.querySelector(".total-durasi");
durasi.textContent = `${jam} jam ${menit} menit ${detik} detik.`;

console.log(parts);
