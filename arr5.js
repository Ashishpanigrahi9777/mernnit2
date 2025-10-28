const arr = [1, 1, 2, 1, 3, 5, 1];
function findMajority(arr) {
    const counts = {};
    const n = arr.length;
    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > Math.floor(n / 2)) {
            return num;
        }
    }
    return null; 
}
const majority = findMajority(arr);
console.log(majority); 