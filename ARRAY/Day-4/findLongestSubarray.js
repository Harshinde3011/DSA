// arr = [1, -1, 5, -2, 3], k = 3, here we have to the longest subarray whose sum is 3, answer is [1, -1, 5, -2]


const nums = [1, -1, 5, -2, 3];
const k = 3;

function longestSubarray(nums, k) {
    
    let hashMap = new Map();
    hashMap.set(0, -1);
    let sum = 0;
    let maxLength = 0;
    let newStartIndex = -1;
    let newEndIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];

        if (!hashMap.get(sum)) {
            hashMap.set(sum, i);
        }

        let needed = sum - k;

        if (hashMap.has(needed)) {
            let startIndex = hashMap.get(needed);
            console.log(`startIndex: ${startIndex}, i: ${i}`);
            let length = i - startIndex;
            console.log("length: ", length);

            if (length > maxLength) {
                maxLength = length;
                newStartIndex = newStartIndex + 1;
                newEndIndex = i;

                console.log(`newStartIndex: ${newStartIndex}, newEndIndex: ${newEndIndex}`);
            }

            return nums.slice(newStartIndex, newEndIndex + 1)
        }
    }

}

console.log(longestSubarray(nums, k));


   