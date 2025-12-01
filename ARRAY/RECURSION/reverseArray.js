const nums = [1,2,3,4,5,6];

function reverseArray(nums, s, n) {
    if (s >= Math.floor(n/2)) {
        return nums;
    }

    let temp = nums[s];
    nums[s] = nums[n-1-s];
    nums[n-1-s] = temp;

    return reverseArray(nums, s+1, n);
}

console.log(reverseArray(nums, 0, nums.length));
