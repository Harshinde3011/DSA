var countPrimes = function(n) {
    if (n <= 2) return 0;

    let sum = 0;        

    for (let i = 2; i < n; i++) {
        let count = 0;        

        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count++;
                if (j !== i / j) {
                    count++;
                }
            }
        }

        if (count === 2) { 
            sum++;
        }
    }

    return sum;
};


console.log(countPrimes(10));
