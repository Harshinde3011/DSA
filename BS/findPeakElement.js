const arr = [1, 2, 4, 6, 8, 7, 5, 3, 1]  // ans = 8


function findPeakElement(nums) {
    let n = nums.length;
    if (nums.length == 1) {
        return nums[0];
    }

    if (nums[0] > nums[1]) {
        return nums[0]
    }

    if (nums[n - 1] > nums[n - 2]) {
        return nums[n - 1]
    }

    let start = 1;
    let end = n - 2;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return nums[mid];
        }

        if (nums[mid - 1] < nums[mid]) {
            start = mid + 1;
        }else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(findPeakElement(arr));
