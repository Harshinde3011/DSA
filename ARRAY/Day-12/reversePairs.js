// [50, 25, 10, 30, 9, 7, 2]
// op = [25, 50, 30, 10, 7, 9, 2]


let array = [50, 25, 10, 30, 9, 7, 2];

function reversePairs(nums) {
    for (let i = 0; i < nums.length - 1; i = i + 2) {
        let j = i + 1;
        let temp = nums[i];
        nums[i] = nums[j];
        array[j] = temp;        
    }

    return nums
}

console.log(reversePairs(array));
