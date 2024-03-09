let a, s, w;
let rand = Math.random();
// 1
if (rand < 0.33) {
   a = "crazy";
} else if (rand < 0.66 && rand >= 0.33) {
   a = "Amazing";
} else {
   a = "Fire";
}
// 2
let rand1 = Math.random();

if (rand1 < 0.33) {
   s = "Engine";
} else if (rand1 < 0.66 && rand1 >= 0.33) {
   s = "Foods";
} else {
   s = "garments";
}

let rand2 = Math.random();
// 3
if (rand2 < 0.33) {
   w = "Bros";
} else if (rand2 < 0.66 && rand2 >= 0.33) {
   w = "Limited";
} else {
   w = "Hub";
}

console.log(`${a} ${s} ${w}`);