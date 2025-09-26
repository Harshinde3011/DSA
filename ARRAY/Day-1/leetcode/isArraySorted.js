// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].


let nums = [3,4,5,1,2]

var check = function(nums) {
    let count = 0;
    let n = nums.length - 1
    for(let i=0; i<nums.length; i++){
        if(nums[i] > nums[(i+1) % n]){
            count ++
        }
    }
    if(count > 1){
        return false
    }else{
        return true
    }
};