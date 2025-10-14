// nums = [1, 2, 3], k = 3, [1,2], [3] → answer = 2.

const nums = [1, 2, 3, -2, 5, -3, 1, 2];

function subArraysWithSumK(array, k) {
    let sum = 0;
    let count = 0;
    const hashMap = new Map();
    hashMap.set(0, 1); // base case

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        const preSum = sum - k;

        if (hashMap.has(preSum)) {
            count += hashMap.get(preSum); // ✅ add how many times preSum occurred
        }

        hashMap.set(sum, (hashMap.get(sum) || 0) + 1); // ✅ update after checking
    }

    return count;
}

console.log(subArraysWithSumK(nums, 5));
