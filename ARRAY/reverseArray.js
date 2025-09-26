let nums = [1, 2, 3, 4, 5, 6, 7, 8]


// basic approach
let numsLen = nums.length - 1;
let newNums = []

for (let i = numsLen; i >= 0  ; i--) {
    newNums.push(nums[i]);
}

console.log("newNums", newNums);


// new approach
let start = 0; // Starting index
let end = numsLen; // Ending index

while (start < end) {
    // Swap elements at start and end
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    // Increment start and decrement end
    start = start + 1;
    console.log("start:", start);

    end = end - 1;
    console.log("end:", end);
}

console.log("Reversed Array:", nums);
