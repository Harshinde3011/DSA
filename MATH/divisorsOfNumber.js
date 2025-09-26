const number = 36
let count = 0;

for (let i = 1; i <= number; i++) {
    const divisor = number % i;
    if( divisor === 0 ) {
        count++
    };
}

console.log("count: ", count);

//----------------------------------optimized----------------------------------
let divisors = [];
for (let i = 1; i*i < number; i++) {
    if (number % i == 0) {
        divisors.push(i);

        if ((number/i) != i) {
            console.log("new number: ", (number/i));
            divisors.push(number/i);
        }
    }    
}

const finaloutput = divisors.sort((a, b) => a - b)

for (const num of finaloutput) {
    console.log("num: ", num);
}