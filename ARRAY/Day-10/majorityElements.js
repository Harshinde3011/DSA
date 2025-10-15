// array = [1,1,1,1,2,2,3,3,3,3], elemenets whose occurs more than n/3;

array = [1,1,1,1,2,2,3,3,3,3]

function majorityOccurences(nums) {
    const n = Math.floor((nums.length)/3);
    let elemenets = [];
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1 );

        if (hashMap.get(nums[i]) > n && !elements.includes(nums[i])) {
           elemenets.push(nums[i]) 
        }
        if (elemenets.length == 2) {
            return elemenets;
        }
    }
    return elemenets;
}

console.log(majorityOccurences(array));
