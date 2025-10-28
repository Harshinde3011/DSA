// array = [4,3,6,2,1,1]
// missing = 5, repeating = 1;

// function getMissingAndRepeatingEle(nums) {
//     const hash = new Array(nums.length + 1).fill(0);

//     for (let i = 0; i < nums.length; i++) {
//         hash[nums[i]]++;        
//     }  
    
//     let repeating = -1;
//     let missing = -1;

//     for (let i = 1; i < nums.length; i++) {
//         if (hash[i] == 2) {
//             repeating = i;
//         }

//         if (hash[i] == 0) {
//             missing = i;
//         }

//         if (repeating !== -1 && missing !== -1) {
//             break;
//         }
//     }

//     return { repeating,missing }
// }

function getMissingAndRepeatingEle(nums) {
    let naturalSum = (nums.length * (nums.length + 1) / 2);    // sum of natural numbers 
    let sum = 0;
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        hashMap.set(nums[i], ((hashMap.get(nums[i]) || 0) + 1));
    }
    for (let [key, value] of hashMap) {
        if (value === 2) {
            repeating = key;
        }
    }
    
    let missing = naturalSum - (sum - repeating);
    return { repeating, missing}
}

console.log(getMissingAndRepeatingEle([1,2,2]));
