let number = 7789;

while (number > 0) {
    console.log("number: ", number);
    
    let lastDigit = number % 10;

    console.log("lastDigit: ", lastDigit);
    
    number = Math.floor(number / 10);
}