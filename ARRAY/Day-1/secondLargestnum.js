let nums = [ 25, 33, 9, 40, 5, 10, 44 ]

// function findSecondLargest(nums) {
    
//     let firstLargestNum = Math.max(...nums);
    
//     let index = nums.indexOf(firstLargestNum);

//     nums.splice(index, 1)

//     secondLargestValue = Math.max(...nums)

//     return secondLargestValue

// }
// console.log("result", findSecondLargest(nums));

// another approach 
function findSecondLargestNewApproach(nums) {
    let largestNumber = nums[0];
    let secondLargestNumber = -1;
    
    for (let i = 1; i < nums.length ; i++) {
        if (nums[i] > largestNumber) {
            if (secondLargestNumber < largestNumber) {
                secondLargestNumber = largestNumber;
            }
            largestNumber = nums[i];
        }
    }
    return {secondLargestNumber, largestNumber};
}


function findSmallestNumber(nums){
    let smallNumber = nums[0];
    let secondSmallNumber = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < smallNumber) {
            secondSmallNumber = smallNumber
            smallNumber = nums[i]
        }        
    }
    return {smallNumber, secondSmallNumber};
}

console.log("findSecondLargestNewApproach :", findSecondLargestNewApproach(nums));
console.log("findSmallestNumber :", findSmallestNumber(nums));