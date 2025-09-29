// array = [2,1,1,1,2,2,3,3,2,2] element which has more than n/2 occurance, which means 10/2 = 5, element which occurs more than or equals to 5 times

const array = [1];

function majorityOccurences(nums) {
    let hashMap = new Map();
    let count =1;
    let n = Math.floor(nums.length/2);
    console.log("n: ", n);
    
    for (let i = 0; i < nums.length; i++) {
        
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i], count);
        }
        if (hashMap.has(nums[i])) {
            if (hashMap.get(nums[i]) >= n) {
                return nums[i];
            }else{
                hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
            }
        }
    }

    return null;
}

console.log(majorityOccurences(array));
