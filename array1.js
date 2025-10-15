// // const friends = [
// //     { name: "x" },
// //     { name: "y" },
// //     { name: "z" },
// //     { name: "a" },
// //     { name: "b" }
// // ];
// // friends.splice(0, 2); 
// // friends.splice(-2, 2); 
// // const friends2 = [
// //     { name: "x" },
// //     { name: "y" },
// //     { name: "z" },
// //     { name: "a" },
// //     { name: "b" }
// // ];
// // friends2.splice(1, 2); 
// // console.log(friends);
// // console.log(friends2);






// const friend1 = { name: "Alice", age: 25 };
// const friend2 = { name: "Bob",   age: 26 };
// const friend3 = { name: "Carol", age: 24 };
// const friend4 = { name: "Dan",   age: 27 };
// const friend5 = { name: "Eve",   age: 23 };

// const friends = [friend1, friend2, friend3, friend4, friend5];
// const extra1 = { name: "Frank", age: 28 };
// const extra2 = { name: "Grace", age: 22 };
// friends.push(extra1, extra2);
// console.log("After adding 2:", friends);


// friends.splice(0, 2);
// console.log("After deleting first 2:", friends);

// friends.splice(-2, 2);
// console.log("After deleting last 2:", friends);
// friends.splice(1, 2);
// console.log("After deleting middle 2:", friends);




const names = ['ram', 'Daniel', 'Ashish', 'Anshuman', 'Akshay'];

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

console.log('Before:', [...names]);


for (let i = names.length - 1; i >= 0; i--) {
    if (countVowels(names[i]) === 3) {
        names.splice(i, 1);
    }
}

console.log('After (removed names with 3 vowels):', names);
