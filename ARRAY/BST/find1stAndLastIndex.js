function findFirstAndLastIndex(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = [-1, -1];
    while (start < end) {
        console.log("nums[start]: ", nums[start]);
        console.log("nums[end]: ", nums[end]);

        console.log("condition: ", nums[start] == target && nums[end] == target);
        if (nums[start] == target) {
            result[0] = start;
            end--;
        } else if (nums[end] == target) {
            result[1] = end;
            start++;
        }else{
            start++;
            end--;
        }
    }

    return result
};

console.log(findFirstAndLastIndex([5,7,7,8,8,10], 6));
