// nums = [13,46,24,52,20,9]
// select min from array and swap it

const nums = [13,46,24,52,20,9]

function selectionSort(ele) {
    let min = Infinity;
    let minIndex = -1;
    for (let i = ele; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            minIndex = i;
        }
    }
    [nums[ele], nums[minIndex]] = [nums[minIndex], nums[ele]]

    return nums;
}

for (let i = 0; i < nums.length - 1; i++) {
    let sortedArray = selectionSort(i);
    console.log("sortedArray: ", sortedArray);
}

console.log("nums:" ,nums);
