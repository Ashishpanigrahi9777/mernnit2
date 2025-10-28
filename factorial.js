// let x= 15;
// let y=1;
// for(let i=1;i<=15;i++){
//     y=y*i;
// }
// console.log(y)

// function fact(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     return n*fact(n-1);
// }
// console.log(fact(5));





// function fibonacci(n) {
//   let a = 0, b = 1;
//   for (let i = 0; i < n; i++) {
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
//   }
// }

// fibonacci(10);

function fibo(n){
    if(n===0 || n===1){
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(5));