let x = 800;

let tahun = Math.floor(x / 365);
let sisaHari = x % 365;
let bulan = Math.floor(sisaHari / 30);
let hari = sisaHari % 30;

console.log(`${tahun} Tahun, ${bulan} Bulan, ${hari} Hari`);