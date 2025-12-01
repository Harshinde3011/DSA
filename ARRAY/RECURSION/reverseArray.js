const nums = [1,2,3,4,5,6];

function reverseArray(nums, s, e) {
    if (s >= e) {
        return nums;
    }

    let temp = nums[s];
    nums[s] = nums[e];
    nums[e] = temp;

    return reverseArray(nums, s+1, e-1);
}

console.log(reverseArray(nums, 0, nums.length - 1));
