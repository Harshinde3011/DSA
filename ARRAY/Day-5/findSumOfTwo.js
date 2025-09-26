// arr= [2, 5, 6, 8, 11], from given array find any two elements hows sum is 14,

const nums = [2, 5, 6, 8, 11];
const k = 14;

function findTwoElements(nums, k) {
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let currentElement = nums[i];

        let requireElement =  k - nums[i];

        if (hashMap.get(requireElement)) {
            const index1 = hashMap.get(requireElement);
            const index2 = i;
            return  { index1, index2 }
        }else{
            hashMap.set(nums[i], i)
        }
    }
}

// console.log(findTwoElements(nums, k));

// without hashmap

function findTwoSumWithoutHasMap(nums, k) {
    // first sort the array so
    const newArray = nums.sort((a, b) => a - b) 
    let startIndex = 0;
    let endIndex = nums.length - 1;

    while (startIndex < endIndex) {
        let sum = newArray[startIndex] + newArray[endIndex];

        if (sum == k) {
            return { startIndex, endIndex }
        }else if (sum > k) {
            endIndex --;
        }else if(sum < k){
            startIndex ++;
        }
    }

    return null;
}

console.log(findTwoSumWithoutHasMap(nums, k));


