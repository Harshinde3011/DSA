// const array = [1,2,1,3,2,4,5];
const array = "Harshwardhan"


function numberOfOccrances(nums) {
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
            
        hashMap.set(element, ((hashMap.get(element) || 0) + 1))
    }

    return hashMap;
}

console.log(numberOfOccrances(array));
