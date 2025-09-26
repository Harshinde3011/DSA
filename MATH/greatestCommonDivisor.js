// suppose we have 2 numbers 20, 15 divisors of 20 = 1, 2, 4, 5, 10, 20, divisors of 15 = 1, 3, 5, 15 so 5 is greatest common diviosr 

let a = 20;
let b = 15;

while (a > 0 && b > 0) {
    if (a > b) {
        a = a % b;
    }else{
        b = b % a;
    }

    if (a == 0){
       console.log("greatest common divisor is: ", b);
    }else if (b == 0) {
        console.log("greatest common divisor is: ", a);
    }
}