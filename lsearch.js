// let arr = [15,25,26,45,66,78,11];
// x=78
// y=10
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === x) {
//     console.log("Element found at index", i);
//   }}
//   for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === y) {
//     console.log("Element found at index", i);
//   }
// }




// let arr = [15, 25, 26, 45, 66, 78, 11];
// let x = 78;
// let y = 10;

// let search = function(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       console.log("Element found at index", i);
//       return;
//     }
//   }
//   console.log("Element not found");
// };

// search(arr, x);
// search(arr, y);





// const arr = [10, 20, 4, 556, 4891, 1, 12, 46];

// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log("Greatest number is:", max);


// const arr = [10, 20, 4, 556, 4891, 1, 12, 46];

// function findGreatest(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// console.log("Greatest number is:", findGreatest(arr));



// const arr = [10, 20, 4, 556, 4891, 1, 12, 46];

// function findsmall(array) {
//   let min = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//   }
//   return min;
// }

// console.log("Smallest number is:", findsmall(arr));




// const arr = [12,35,1,10,34,1];

// function findGreatest(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// console.log("Greatest number is:", findGreatest(arr));


function getsecondlarg(arr){
    let largest=-1,secondlargest=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest)
            largest=arr[i];
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>secondlargest && arr[i]!==largest)
            secondlargest=arr[i];
        console.log(secondlargest)
    }
    return secondlargest;
}
console.log(getsecondlarg([2,3,6,6,5]));






