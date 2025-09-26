// how to check whether given number is prime or not 2,3,5,7 numbers which has only 2 divisors

function isPrime(number) {
    let count = 0;        
    for (let i = 1; i * i < number; i++) {
        if (number % i == 0) {
            count++;
            if ((number/i) != i) {
                count++;
            }
        }
    }
    
    if (count == 2) {
        console.log(`${number} is prime number`);
    }else{
        console.log(`${number} is not prime number`);
    }
}

isPrime(14);