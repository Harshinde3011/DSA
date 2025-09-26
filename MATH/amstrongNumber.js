// if number is 371 then sum of cube of all the digit is equal to number 371 then its an amstrong number

let number = 371;
let temp = number;
let sum = 0;

while (temp > 0) {
    let lastDigit = temp % 10;
    sum = sum + (lastDigit)**3;
    temp =  Math.floor(temp / 10);
}

if (sum === number) {
    console.log(`${number} is amstrong number`);
}else{
    console.log(`${number} is not amstrong number`);
}