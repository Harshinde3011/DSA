// suppose you have give array [1,2,3,5,7,8,9] you have to find missing value form the array

let nums = [1,2,3,4,5,7,9]
let newNums = []

// first find min and max then just push those values to new array, which are not present the give array 
function findMissingValues(nums) {
    let minValue = Math.min(...nums);
    let maxValue = Math.max(...nums);

    for (let i = minValue; i < maxValue; i++) {
        newNums.push(i)        
    }

    return newNums.filter( (num) => {
        return !nums.includes(num)
    })    

}


console.log("result", findMissingValues(nums));
