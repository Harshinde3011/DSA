const nums = [1,2,3,4,6];
const num = 6;
let missing = -1;

function findMissingNum(num,nums) {
    if (nums[0] !== 1) {
        missing = 1;
        return missing;
    }

    for (let i = 0; i < num; i++) {
        if (nums[i + 1] - nums[i] !== 1) {
            missing = nums[i] + 1
            console.log("Missing number is:", missing);
            break;
        }

    }

    if (missing === -1 && nums.length < num) {
        missing = num;
        console.log("Missing number is:", missing);
    }

    return missing;
}
// findMissingNum(num, nums); 


// optimal 
const sum = num*(num+1)/2;

const arraySum = nums.reduce((sum, num) => {
    return sum = sum + num
}, 0)

if (sum !== arraySum) {
    console.log("Missing NUmber is:", sum - arraySum);
}
