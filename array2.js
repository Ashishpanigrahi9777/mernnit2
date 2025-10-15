// const arr = [19, 17, 16, 14, 2222, 21];

// function prime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     if (n % 2 === 0 || n % 3 === 0) return false;
//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) return false;
//     }
//     return true;
// }

// arr.forEach(n => console.log(`${n}- ${isPrime(n)}`));




const arr = [19, 17, 16, 14, 2222, 21];

const isPrime = n => {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
    return true;
};

arr.forEach(n => console.log(`${n} - ${isPrime(n)}`));

