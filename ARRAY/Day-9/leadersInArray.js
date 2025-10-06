// array = [10, 22, 12, 3, 0, 6], leaders are [22,12,6] right side of each elements are less than current

array = [10, 22, 12, 3, 0, 6];

function leadersInArray(nums) {
    let max = -Infinity;
    let leaders = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(`num is ${nums[i]} and max is ${max}: ${nums[i] > max}`);
        
        if (nums[i] > max) {
            max = nums[i];
            leaders.push(max)
        }
    }

    return leaders
}

console.log(leadersInArray(array));
