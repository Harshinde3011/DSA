// array = [0,1,2,0,0,1,2,2,0,0], sort the zeros ones and twos from given array, op: array = [0,0,0,0,1,1,2,2,2]

const array = [2,0,1];

function sortZerosOnesTwos(nums) {

    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] == 0) {
            let temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;

            mid ++;
            low ++;
        } else if (nums[mid] == 1) {
            mid++;
        } else if (nums[mid] == 2) {
            let temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp
            high--;
        }

    }

    return nums;
}

console.log(sortZerosOnesTwos(array));
