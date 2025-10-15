// function xy(name){
//     console.log("hello "+ name)
// }
// xy("ashish")

// function check(n1,n2,n3){
//     if(n1>=n2 && n1>=n3){
//         console.log("n1 is big")
//     }
//     else if(n2>=n1 && n2>=n3){
//         console.log("n2 is big")
//     }
//     else
//         console.log("n3 is big")
    
// }
// check(0,23,1)



// const checkOddEven = function (num) {
//     if (num % 2 === 0) {
//       console.log(num + " is Even");
//     } else {
//       console.log(num + " is Odd");
//     }
//   };
  
  
//   checkOddEven(10); 
//   checkOddEven(7);  




// function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide by 0";
//     }
//     return a / b;
//   }
  
  
//   console.log("Addition:", add(10, 7));
//   console.log("Subtraction:", subtract(10, 8)); 
//   console.log("Multiplication:", multiply(10, 5)); 
//   console.log("Division:", divide(10, 2));    


// const add=function (a, b) {
//     return a + b;
//   }
  
//   const subtract=function(a, b) {
//     return a - b;
//   }
  
//   const multiply=function (a, b) {
//     return a * b;
//   }
  
//   const  divide=function(a, b) {
//     if (b === 0) {
//       return "Can't divide by 0";
//     }
//     return a / b;
//   }
  
  
//   console.log("Addition:", add(10, 7));
//   console.log("Subtraction:", subtract(10, 8)); 
//   console.log("Multiplication:", multiply(10, 5)); 
//   console.log("Division:", divide(10, 2));     
  
  
  

let swap = (a, b) => {
    console.log("Before Swap: a =", a, ", b =", b);
    [a, b] = [b, a]; 
    console.log("After Swap: a =", a, ", b =", b);
  };
  swap(10, 20);z
  