// suppose n = 30 then its prime factors are 2,3,5,7,11,13,17,23,29
// using sieve eratosnese algo

const n = 30;
const primeArray = new Array(n+1).fill(1); // consider all nums are prime

for (let i = 2; i * i <= n; i++) {
    if (primeArray[i] === 1) {
        for (let j = i * i; j <= n; j += i) {
            primeArray[j] = 0;
        }
    }    
}
const finalResult = [];
for (let i = 2; i < n; i++) {
    if (primeArray[i] === 1) {
        finalResult.push(i)
    }    
}

console.log("finalResult: ", finalResult);
