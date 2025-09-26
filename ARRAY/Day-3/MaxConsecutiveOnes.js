// array = [ 1,1,0,0,1,1,1,0,0,0,1,1 ] then answer would be 3

const array = [ 1,1,0,0,1,1,1,0,0,0,1,1 ];

function findMaxConsecutiveOnes(array) {
    let max = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 1) {
            count++;
        } else {
            count = 0;
        }

        if (count > max) {
            max = count
        }

    }

    return max;
}

console.log(findMaxConsecutiveOnes(array));
