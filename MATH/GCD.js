// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.

// (10,2)

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp
    }
    return a
}

function smallestLargetNumber(nums) {
    let largestNumber = nums[0];
    let smallestNumber = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largestNumber) {
            largestNumber = nums[i]
        }

        if (nums[i] < smallestNumber) {
            smallestNumber = nums[i]
        }
    }

    return gcd(largestNumber, smallestNumber)
}

const nums = [2, 5, 6, 9, 10];
console.log(smallestLargetNumber(nums));