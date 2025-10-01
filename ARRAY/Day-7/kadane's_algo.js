// nums = [-2,1,-3,4,-1,2,1,-5,4] find subarray how sum is max

const nums = [-2,1,-3,4,-1,2,1,-5,4];

function maxSubArray(array) {
    let max = -Infinity;
    let sum = 0;
    let endIndex = -1;
    let startIndex = -1;
    for(let i=0; i< array.length ; i++){

        if (sum == 0) {
            startIndex = i;
        }
        
        sum += array[i];

        if (sum > max) {
            max = sum;
            endIndex = i;
        } 

        if(sum < 0){
            sum = 0;
        }        
    }
    console.log(`startIndex: ${startIndex} and endIndex: ${endIndex}`);
    return max;
};

console.log(maxSubArray(nums));
