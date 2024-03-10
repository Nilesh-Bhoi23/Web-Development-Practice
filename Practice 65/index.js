// let num = 10;
// let factorial = 1;

// // Calculate factorial using a for loop
// for (let i = 1; i <= num; i++) {
//     factorial *= i;
// }

// console.log("Factorial of", num, "is:", factorial);


const array1 = [1, 2, 3, 4, 5];

//  1 * 2 * 3 * 4
const initialValue = 1 ;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 120