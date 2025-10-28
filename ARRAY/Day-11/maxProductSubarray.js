// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

const nums = [3,-1,4];

function maximumProdSubarray(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let preProduct = 1;
    let sufProd = 1;
    let ans = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        preProduct = preProduct * nums[i];
        sufProd = sufProd * (nums[nums.length - 1 - i]);

        ans = Math.max(ans, max = Math.max(preProduct, sufProd));

        if (preProduct == 0) preProduct = 1;
        if (sufProd == 0) sufProd = 1;

    }
    return ans;
}

console.log(maximumProdSubarray(nums));
