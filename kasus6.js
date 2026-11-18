let x = 261341;
let km = Math.floor(x / 100000);
let sisaCm = x % 100000;

let m = Math.floor(sisaCm / 100);
let cm = sisaCm % 100;

console.log(`${km} km, ${m} m, ${cm} cm`);