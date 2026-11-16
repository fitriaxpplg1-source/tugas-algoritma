let totalDetik = 100000;

let hari = Math.floor(totalDetik / 86400);
let sisaDetik = totalDetik % 86400;

let jam = Math.floor(sisaDetik / 3600);
sisaDetik = sisaDetik % 3600;

let menit = Math.floor(sisaDetik / 60);
let detik = sisaDetik % 60;

console.log(`${hari} Hari, ${jam} Jam, ${menit} Menit, ${detik} Detik`);