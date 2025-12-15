// nums = [13,46,24,52,20,9]
// select max and push to last by adjecent swapping

const array = [13,46,24,52,20,9]

function bubbleSort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
        console.log("After pass", i + 1, ":", nums);
    }
    return nums;
}

console.log("Final sorted array:", bubbleSort(array));
