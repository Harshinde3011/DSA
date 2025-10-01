// array = [2,1,5,4,0,3,0] find its next permutation which is array = [2,3,0,0,1,4,5]

const array = [2,3,1];

function nextPermutation(nums) {
    let n = nums.length;
    let breakPoint = -1;

    // Step 1: Find break point
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            breakPoint = i;
            break;
        }
    }

    if (breakPoint === -1) {
        nums.reverse();

        return nums;
    }

    // Step 2: swap element which is cosecutive bigger than breakPoint
    for (let i = n - 1; i >= breakPoint; i--) {
        if (nums[i] > nums[breakPoint]) {
            [nums[i], nums[breakPoint]] = [nums[breakPoint], nums[i]];
            break;
        }        
    }
    
    // Step 3: reverse remaining elements 
    let startIndex = breakPoint + 1;
    let endIndex = n - 1;

    while (startIndex < endIndex) {
        [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]]
        startIndex++;
        endIndex--;
    }

    return nums
}

console.log(nextPermutation(array));
