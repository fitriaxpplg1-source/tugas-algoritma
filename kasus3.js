let dd1 = 10, mm1 = 5, yy1 = 24;

let dd2 = 25, mm2 = 8, yy2 = 26;

let totalHari1 = (yy1 * 365) + (mm1 * 30) + dd1;
let totalHari2 = (yy2 * 365) + (mm2 * 30) + dd2;

let selisih = Math.abs(totalHari2 - totalHari1);

let tahun = Math.floor(selisih / 365);
let sisa = selisih % 365;
let bulan = Math.floor(sisa / 30);
let hari = sisa % 30;

console.log(`Jarak: ${selisih} hari (${tahun} Tahun, ${bulan} Bulan, ${hari} Hari)`);