function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'sub':
            return a - b;
        case 'mul':
            return a * b;
        case 'div':
            return b !== 0 ? a / b : 'Division by zero';
        case 'square':
            return a * a;
        case 'modulus':
            return a % b;
        default:
            return 'Invalid operation';
    }
}


console.log(calculate(5, 3, 'add')); 
console.log(calculate(5, 3, 'sub'));      
console.log(calculate(5, 3, 'mul'));     
console.log(calculate(5, 3, 'div'));      
console.log(calculate(5, null, 'square'));
console.log(calculate(5, 3, 'modulus'));  




// const cubeVolume = side => side ** 3;
// console.log(cubeVolume(5));