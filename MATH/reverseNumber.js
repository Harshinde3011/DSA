var reverse = function(x) {
let reverseNumber = 0;
let nonZeroOccurence = false;
let sign = 1;
const INT_MAX = (2 ** 31) - 1;
const INT_MIN = -(2 ** 31);

if (x < 0) {
    sign = -1;
    x = -x;
}

while (x > 0) {
  let lastDigit = x % 10;

  if (lastDigit !== 0) {
    nonZeroOccurence = true;
  }

  if (nonZeroOccurence) {
    if (reverseNumber > Math.floor(INT_MAX / 10) || 
        (reverseNumber === Math.floor(INT_MAX / 10) && lastDigit > 7)) {
      reverseNumber = 0;
      break;
    }
    reverseNumber = (reverseNumber * 10) + lastDigit;
  }

  x = (x - lastDigit) / 10;   // in place of Mth.floor
}

reverseNumber = reverseNumber * sign;

return reverseNumber
};


reverse(-100400)