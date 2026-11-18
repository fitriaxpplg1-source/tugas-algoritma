let uang = 2775;

let p1000 = Math.floor(uang / 1000);
let sisa = uang % 1000;
let p500 = Math.floor(sisa / 500);
sisa = sisa % 500;
let p100 = Math.floor(sisa / 100);
sisa = sisa % 100;
let p50 = Math.floor(sisa / 50);
sisa = sisa % 50;
let p25 = Math.floor(sisa / 25);

console.log(`Rp1000 : ${p1000} buah`);
console.log(`Rp500  : ${p500} buah`);
console.log(`Rp100  : ${p100} buah`);
console.log(`Rp50   : ${p50} buah`);
console.log(`Rp25   : ${p25} buah`);