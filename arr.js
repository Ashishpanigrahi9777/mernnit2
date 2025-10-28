// let arr = [45, 55, 124, 46, 58];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log("Sum =", sum);


function sumarr(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumarr(arr, index + 1);
}


let arr = [45, 55, 124, 46, 58];
let result = sumarr(arr);
console.log("Sum =", result);
